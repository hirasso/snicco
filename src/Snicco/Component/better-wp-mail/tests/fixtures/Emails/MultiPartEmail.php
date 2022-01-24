<?php

declare(strict_types=1);

namespace Snicco\Component\BetterWPMail\Tests\fixtures\Emails;

use Snicco\Component\BetterWPMail\Email;

final class MultiPartEmail extends Email
{
    
    /**
     * @var string
     */
    private $plain;
    /**
     * @var string
     */
    private $_html;
    
    public function __construct(string $plain, string $html)
    {
        $this->plain = $plain;
        $this->_html = $html;
    }
    
    public function configure()
    {
        $this->subject('foo')
             ->text($this->plain)
             ->html($this->_html);
    }
    
}