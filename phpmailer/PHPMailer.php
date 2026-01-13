<?php
namespace PHPMailer\PHPMailer;

class PHPMailer
{
    const VERSION = '6.8.0';
    const CHARSET_UTF8 = 'UTF-8';
    const CONTENT_TYPE_TEXT_HTML = 'text/html';
    const CONTENT_TYPE_TEXT_PLAIN = 'text/plain';
    const ENCODING_BASE64 = 'base64';
    const ENCODING_QUOTED_PRINTABLE = 'quoted-printable';
    const ENCRYPTION_STARTTLS = 'tls';
    const ENCRYPTION_SMTPS = 'ssl';

    public $Host = 'localhost';
    public $Port = 25;
    public $SMTPAuth = false;
    public $Username = '';
    public $Password = '';
    public $SMTPSecure = '';
    public $SMTPAutoTLS = true;
    public $SMTPOptions = [];
    public $Timeout = 300;
    public $SMTPDebug = 0;
    public $Debugoutput = 'echo';
    public $Mailer = 'mail';
    public $From = '';
    public $FromName = '';
    public $Subject = '';
    public $Body = '';
    public $AltBody = '';
    public $CharSet = self::CHARSET_UTF8;
    public $ContentType = self::CONTENT_TYPE_TEXT_PLAIN;
    public $Encoding = 'quoted-printable';
    public $Priority;
    public $ErrorInfo = '';
    public $Sender = '';

    protected $to = [];
    protected $cc = [];
    protected $bcc = [];
    protected $ReplyTo = [];
    protected $attachments = [];
    protected $CustomHeader = [];
    protected $boundary = [];
    protected $smtp;
    protected $exceptions = false;

    public function __construct($exceptions = null)
    {
        if ($exceptions !== null) {
            $this->exceptions = (bool)$exceptions;
        }
    }

    public function isSMTP()
    {
        $this->Mailer = 'smtp';
    }

    public function isMail()
    {
        $this->Mailer = 'mail';
    }

    public function setFrom($address, $name = '', $auto = true)
    {
        $this->From = $address;
        $this->FromName = $name;
        if ($auto && empty($this->Sender)) {
            $this->Sender = $address;
        }
        return true;
    }

    public function addAddress($address, $name = '')
    {
        $this->to[] = [$address, $name];
        return true;
    }

    public function addReplyTo($address, $name = '')
    {
        $this->ReplyTo[] = [$address, $name];
        return true;
    }

    public function addCC($address, $name = '')
    {
        $this->cc[] = [$address, $name];
        return true;
    }

    public function addBCC($address, $name = '')
    {
        $this->bcc[] = [$address, $name];
        return true;
    }

    public function isHTML($isHtml = true)
    {
        $this->ContentType = $isHtml ? self::CONTENT_TYPE_TEXT_HTML : self::CONTENT_TYPE_TEXT_PLAIN;
    }

    public function clearAddresses()
    {
        $this->to = [];
    }

    public function clearAllRecipients()
    {
        $this->to = [];
        $this->cc = [];
        $this->bcc = [];
    }

    public function send()
    {
        if (empty($this->to)) {
            $this->setError('No recipients');
            return false;
        }
        if ($this->Mailer === 'smtp') {
            return $this->smtpSend();
        }
        return $this->mailSend();
    }

    protected function smtpSend()
    {
        $this->smtp = new SMTP();
        $this->smtp->do_debug = $this->SMTPDebug;
        $this->smtp->Debugoutput = $this->Debugoutput;
        $this->smtp->Timeout = $this->Timeout;

        $host = $this->Host;
        $port = $this->Port;
        $tls = ($this->SMTPSecure === self::ENCRYPTION_STARTTLS);
        $ssl = ($this->SMTPSecure === self::ENCRYPTION_SMTPS);

        if ($ssl) {
            $host = 'ssl://' . $host;
        }

        $options = [];
        if (!empty($this->SMTPOptions)) {
            $options = stream_context_create($this->SMTPOptions);
        }

        if (!$this->smtp->connect($host, $port, $this->Timeout, $this->SMTPOptions)) {
            $this->setError('SMTP connect failed: ' . print_r($this->smtp->getError(), true));
            return false;
        }

        if (!$this->smtp->hello(gethostname())) {
            $this->setError('EHLO/HELO failed');
            return false;
        }

        if ($tls) {
            if (!$this->smtp->startTLS()) {
                $this->setError('StartTLS failed');
                return false;
            }
            $this->smtp->hello(gethostname());
        }

        if ($this->SMTPAuth) {
            if (!$this->smtp->authenticate($this->Username, $this->Password)) {
                $this->setError('SMTP authentication failed');
                return false;
            }
        }

        if (!$this->smtp->mail($this->From)) {
            $this->setError('MAIL FROM failed');
            return false;
        }

        foreach ($this->to as $recipient) {
            if (!$this->smtp->recipient($recipient[0])) {
                $this->setError('RCPT TO failed for ' . $recipient[0]);
                return false;
            }
        }
        foreach ($this->cc as $recipient) {
            $this->smtp->recipient($recipient[0]);
        }
        foreach ($this->bcc as $recipient) {
            $this->smtp->recipient($recipient[0]);
        }

        $header = $this->createHeader();
        $body = $this->createBody();

        if (!$this->smtp->data($header . "\r\n\r\n" . $body)) {
            $this->setError('DATA failed');
            return false;
        }

        $this->smtp->quit();
        return true;
    }

    protected function mailSend()
    {
        $to_str = '';
        foreach ($this->to as $recipient) {
            $to_str .= ($to_str ? ', ' : '') . $this->formatAddress($recipient);
        }
        $header = $this->createHeader(false);
        $body = $this->createBody();
        return mail($to_str, $this->Subject, $body, $header);
    }

    protected function createHeader($includeToAndSubject = true)
    {
        $header = '';
        $header .= 'Date: ' . date('r') . "\r\n";
        $header .= 'From: ' . $this->formatAddress([$this->From, $this->FromName]) . "\r\n";

        if ($includeToAndSubject) {
            $to_str = '';
            foreach ($this->to as $recipient) {
                $to_str .= ($to_str ? ', ' : '') . $this->formatAddress($recipient);
            }
            $header .= 'To: ' . $to_str . "\r\n";
            $header .= 'Subject: ' . $this->encodeHeader($this->Subject) . "\r\n";
        }

        if (!empty($this->ReplyTo)) {
            $replyTo = $this->ReplyTo[0];
            $header .= 'Reply-To: ' . $this->formatAddress($replyTo) . "\r\n";
        }

        if (!empty($this->cc)) {
            $cc_str = '';
            foreach ($this->cc as $recipient) {
                $cc_str .= ($cc_str ? ', ' : '') . $this->formatAddress($recipient);
            }
            $header .= 'Cc: ' . $cc_str . "\r\n";
        }

        $header .= 'MIME-Version: 1.0' . "\r\n";
        $header .= 'Content-Type: ' . $this->ContentType . '; charset=' . $this->CharSet . "\r\n";
        $header .= 'X-Mailer: PHPMailer/' . self::VERSION . ' (https://github.com/PHPMailer/PHPMailer)' . "\r\n";

        return $header;
    }

    protected function createBody()
    {
        return $this->Body;
    }

    protected function formatAddress($address)
    {
        if (empty($address[1])) {
            return $address[0];
        }
        return $this->encodeHeader($address[1]) . ' <' . $address[0] . '>';
    }

    protected function encodeHeader($str)
    {
        if (preg_match('/[\x80-\xFF]/', $str)) {
            return '=?' . $this->CharSet . '?B?' . base64_encode($str) . '?=';
        }
        return $str;
    }

    protected function setError($msg)
    {
        $this->ErrorInfo = $msg;
        if ($this->exceptions) {
            throw new Exception($msg);
        }
    }

    public function getSMTPInstance()
    {
        return $this->smtp;
    }
}
