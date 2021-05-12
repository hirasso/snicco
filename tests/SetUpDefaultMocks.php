<?php


	declare( strict_types = 1 );


	namespace Tests;

	use Mockery;
	use WPEmerge\Facade\WP;

	trait SetUpDefaultMocks {

		protected function setWpApiMocks () {

			WP::shouldReceive( 'isAdmin' )->andReturnFalse()->byDefault();
			WP::shouldReceive( 'isAdminAjax' )->andReturnFalse()->byDefault();
			WP::shouldReceive( 'fileHeaderData' )->andReturn([])->byDefault();
			WP::shouldReceive( 'wpAdminFolder' )->andReturn('wp-admin')->byDefault();
			WP::shouldReceive( 'adminUrl' )->andReturnUsing(function (string $path ) {

               return trim(SITE_URL, '/') . DS .  'wp-admin' . DS . $path;

            })->byDefault();

		}

		protected function closeMockery () {

			Mockery::close();

		}

	}