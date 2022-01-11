<?php

declare(strict_types=1);

namespace Tests\Auth\integration\Confirmation;

use Snicco\Core\Contracts\MagicLink;
use Tests\Auth\integration\AuthTestCase;
use Snicco\Core\Routing\InMemoryMagicLink;
use Snicco\Core\Routing\Internal\InternalUrlGenerator;

class EmailAuthConfirmationTest extends AuthTestCase
{
    
    protected function setUp() :void
    {
        $this->afterApplicationBooted(function () {
        });
        parent::setUp();
        $this->bootApp();
    }
    
    /** @test */
    public function the_email_confirmation_view_can_be_rendered()
    {
        $this->authenticateAndUnconfirm($this->createAdmin());
        
        $response = $this->get('/auth/confirm');
        
        $response->assertOk();
        $response->assertSee('You need to confirm your access before you can proceed.');
        $response->assertViewHas('post_to', function ($data) {
            return $data === '/auth/confirm/magic-link';
        });
    }
    
    /** @test */
    public function auth_can_be_confirmed_by_email()
    {
        $this->authenticateAndUnconfirm($this->createAdmin());
        
        $response = $this->get($this->validMagicLink());
        $response->assertRedirectToRoute('dashboard');
        $response->assertSessionHasNoErrors();
        $this->assertTrue($response->session()->hasValidAuthConfirmToken());
        $this->travelIntoFuture(10);
        $this->assertFalse($response->session()->hasValidAuthConfirmToken());
        
        /** @var InMemoryMagicLink $magic_link */
        $magic_link = $this->app->resolve(MagicLink::class);
        $this->assertCount(0, $magic_link->getStored());
    }
    
    /** @test */
    public function auth_can_not_be_confirmed_with_a_tampered_magic_link()
    {
        $this->authenticateAndUnconfirm($this->createAdmin());
        
        $response = $this->get($this->validMagicLink().'a');
        
        $response->assertRedirect('/auth/confirm');
        $response->assertSessionHasErrors('auth.confirmation');
        $this->assertFalse($response->session()->hasValidAuthConfirmToken());
    }
    
    /** @test */
    public function errors_are_displayed_in_the_view()
    {
        $this->followingRedirects();
        
        $this->authenticateAndUnconfirm($this->createAdmin());
        
        $response = $this->get($this->validMagicLink().'a');
        
        $response->assertOk();
        $response->assertSee(
            'Your confirmation link was invalid or expired. Please request a new one.'
        );
    }
    
    private function validMagicLink() :string
    {
        /** @var InternalUrlGenerator $url */
        $url = $this->app->resolve(InternalUrlGenerator::class);
        
        return $url->signedRoute('auth.confirm.magic-link', [], true, true);
    }
    
}