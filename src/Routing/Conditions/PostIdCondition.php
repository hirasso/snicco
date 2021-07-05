<?php


	declare( strict_types = 1 );


	namespace WPMvc\Routing\Conditions;

	use WPMvc\Contracts\ConditionInterface;
	use WPMvc\Contracts\UrlableInterface;
    use WPMvc\Http\Psr7\Request;

    class PostIdCondition implements ConditionInterface, UrlableInterface {

		/**
		 * @var integer
		 */
		private $post_id;

		public function __construct( int $post_id ) {

			$this->post_id = $post_id;
		}

		public function isSatisfied( Request $request ) : bool {

			return ( is_singular() && $this->post_id === (int) get_the_ID() );
		}

		public function getArguments( Request $request ) : array {

			return [ 'post_id' => $this->post_id ];
		}

		public function toUrl( array $arguments = [] ) :string {

			return get_permalink( $this->post_id );
		}


	}
