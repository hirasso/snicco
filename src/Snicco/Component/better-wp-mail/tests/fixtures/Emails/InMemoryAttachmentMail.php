<?php

declare(strict_types=1);

namespace Snicco\Component\BetterWPMail\Tests\fixtures\Emails;

use Snicco\Component\BetterWPMail\Email;

final class InMemoryAttachmentMail extends Email
{
    
    public function configure()
    {
        $content = file_get_contents(dirname(__DIR__, 2).'/fixtures/php-elephant.jpg');
        
        $this->subject('foo')->text('öö')
             ->html('<h1>ÜÜ</h1>')->attach($content, 'php-elephant');
    }
    
}