<?php

	namespace WPEmerge\Routing\Conditions;

	use WPEmerge\Contracts\ConditionInterface;
	use WPEmerge\Contracts\RequestInterface;
	use WPEmerge\Contracts\UrlableInterface;

	/**
	 * Check against the current admin page.
	 *
	 */
	class AdminCondition implements ConditionInterface, UrlableInterface {

		/**
		 * Menu slug.
		 *
		 * @var string
		 */
		protected $menu = '';

		/**
		 * Parent menu slug.
		 *
		 * @var string
		 */
		protected $parent_menu = '';

		/**
		 * Constructor
		 *
		 *
		 * @param  string  $menu
		 * @param  string  $parent_menu
		 */
		public function __construct( $menu, $parent_menu = '' ) {

			$this->menu        = $menu;
			$this->parent_menu = $parent_menu;
		}

		/**
		 * Check if the admin page requirement matches.
		 *
		 * @return boolean
		 */
		protected function isAdminPage() {

			return is_admin() && ! wp_doing_ajax();
		}


		public function isSatisfied( RequestInterface $request ) {

			if ( ! $this->isAdminPage() ) {
				return false;
			}

			$screen = get_current_screen();

			if ( ! $screen ) {
				return false;
			}


			return $screen->id === get_plugin_page_hookname( $this->menu, $this->parent_menu );
		}


		public function getArguments( RequestInterface $request ) {

			return [
				'menu'        => $this->menu,
				'parent_menu' => $this->parent_menu,
				'hook'        => get_plugin_page_hookname( $this->menu, $this->parent_menu ),
			];
		}


		public function toUrl( $arguments = [] ) {

			if ( ! function_exists( 'menu_page_url' ) ) {
				// Attempted to resolve an admin url while not in the admin which can only happen
				// by mistake as admin routes are defined in the admin context only.
				return home_url( '/' );
			}

			return menu_page_url( $this->menu, false );
		}

	}
