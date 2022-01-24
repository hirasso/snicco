<?php

declare(strict_types=1);

namespace Snicco\Component\BetterWPMail\Tests\fixtures\Emails;

use Snicco\Component\BetterWPMail\Email;

final class EmbeddedFromMemoryAttachmentMail extends Email
{
    
    public function configure()
    {
        $string = file_get_contents(dirname(__DIR__, 2).'/fixtures/php-elephant.jpg');
        
        $this->subject('foo')->text('öö')
             ->html('<h1>ÜÜ</h1>')
             ->embed($string, 'my-elephant', 'image/jpeg');
    }
    
}