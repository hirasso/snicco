<?php /** @noinspection PhpInconsistentReturnPointsInspection */

declare(strict_types=1);

namespace Snicco\Core\Application;

use Closure;
use Snicco\Core\Routing\Route;
use Snicco\Core\Http\Psr7\Request;
use Snicco\Core\Contracts\Redirector;
use Snicco\Core\Routing\Internal\Router;
use Snicco\Core\Shared\ContainerAdapter;
use Snicco\Core\Contracts\ResponseFactory;
use Snicco\Core\Routing\Internal\InternalUrlGenerator;
use Snicco\Core\Http\Responses\RedirectResponse;

/**
 * Can be applied to your App class via a "@mixin" annotation for better IDE support.
 * This class is not meant to be used in any other way.
 *
 * @codeCoverageIgnore
 */
final class ApplicationMixin
{
    
    private function __construct()
    {
    }
    
    /**
     * Resolve an item from the applications' config.
     *
     * @param  string|null  $key
     * @param  mixed  $default
     *
     * @return mixed|Config
     */
    public static function config(?string $key = null, $default = null)
    {
    }
    
    /**
     * Returns the local path to the project root
     */
    public static function basePath() :string
    {
    }
    
    /**
     * Returns the local path to the dist folder
     *
     * @param  string  $path  A path relative to the dist folder
     *
     * @return string
     */
    public static function distPath(string $path = '') :string
    {
    }
    
    /**
     * Returns the local path to the storage folder
     *
     * @param  string  $path  A path relative to the storage folder
     *
     * @return string
     */
    public static function storagePath(string $path = '') :string
    {
    }
    
    /**
     * Returns the local path to the config folder
     *
     * @param  string  $path  A path relative to the config folder
     *
     * @return string
     */
    public static function configPath(string $path = '') :string
    {
    }
    
    public static function environment() :bool
    {
    }
    
    public static function isLocal() :bool
    {
    }
    
    public static function isProduction() :bool
    {
    }
    
    public static function isRunningInConsole() :bool
    {
    }
    
    /**
     * Returns the current request going through the application.
     *
     * @note DO NOT USE THIS FUNCTION ANYWHERE BESIDES INSIDE YOUR CONTROLLERS OR VIEWS.
     * MAKE SURE YOU ARE FAMILIAR WITH HOW PSR7 REQUEST IMMUTABILITY WORKS.
     * @return Request
     */
    public static function request() :Request
    {
    }
    
    /**
     * Get the applications UrlGenerator instance
     *
     * @return InternalUrlGenerator
     */
    public static function url() :InternalUrlGenerator
    {
    }
    
    /**
     * Returns a redirect response object if the path is set.
     * If not returns an instance of the bound Redirector
     *
     * @param  string|null  $path
     * @param  int  $status
     *
     * @return RedirectResponse|Redirector
     * @see Redirector
     */
    public static function redirect(?string $path = null, int $status = 302)
    {
    }
    
    /**
     * Bootstrap the application.
     *
     * @return void
     * @see Application::boot()
     */
    public static function boot(bool $load = true)
    {
    }
    
    /**
     * Get the IoC container instance.
     *
     * @return ContainerAdapter
     */
    public static function container() :ContainerAdapter
    {
    }
    
    /**
     * Set the IoC container instance.
     *
     * @param  ContainerAdapter  $container
     *
     * @return void
     */
    public static function setContainer(ContainerAdapter $container)
    {
    }
    
    /**
     * Resolve a dependency from the IoC container.
     *
     * @param  string  $key
     *
     * @return mixed|null
     * @see HasContainer::resolve()
     */
    public static function resolve(string $key)
    {
    }
    
    /**
     * Get the Application instance.
     *
     * @return Application
     */
    public static function app() :Application
    {
    }
    
    /**
     * Returns a response factory instance.
     *
     * @return  ResponseFactory
     */
    public static function response() :ResponseFactory
    {
    }
    
    /**
     * Create a new route.
     *
     * @return Router
     */
    public static function route() :Router
    {
    }
    
    /**
     * Get the url to a named route
     *
     * @see InternalUrlGenerator::toRoute()
     */
    public static function routeUrl(string $route, array $arguments = [], bool $secure = true, bool $absolute = true) :string
    {
    }
    
    /**
     * Create a new post route
     *
     * @see Router::post()
     */
    public static function post(string $url = '*', $action = null) :Route
    {
    }
    
    /**
     * Create a new get route
     *
     * @see Router::get()
     */
    public static function get(string $url = '*', $action = null) :Route
    {
    }
    
    /**
     * Create a new patch route
     *
     * @see Router::patch()
     */
    public static function patch(string $url = '*', $action = null) :Route
    {
    }
    
    /** Create a new put route
     *
     * @see Router::put()
     */
    public static function put(string $url = '*', $action = null) :Route
    {
    }
    
    /**
     * Create a new options route
     *
     * @see Router::options()
     */
    public static function options(string $url = '*', $action = null) :Route
    {
    }
    
    /**
     * Create a new delete route
     *
     * @see Router::delete()
     */
    public static function delete(string $url = '*', $action = null) :Route
    {
    }
    
    /**
     * Register an alias.
     * If no method is provided the alias will resolve the target from the container and return it.
     * If a method is provided the target will be resolved an the method will be called on it.
     *
     * @param  string  $alias
     * @param  string|Closure  $target
     * @param  string  $method
     *
     * @see Application::alias()
     */
    public function alias(string $alias, $target, string $method = '')
    {
    }
    
}
