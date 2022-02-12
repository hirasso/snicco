<?php

declare(strict_types=1);

namespace Snicco\Component\HttpRouting\Tests\fixtures;

use Psr\Http\Message\ResponseInterface;
use Snicco\Component\HttpRouting\Http\Psr7\Request;
use Snicco\Component\HttpRouting\Middleware\Middleware;

class BarMiddleware extends Middleware
{

    private string $bar;

    public function __construct($bar = 'bar_middleware')
    {
        $this->bar = $bar;
    }

    public function handle(Request $request, $next): ResponseInterface
    {
        $response = $next($request);

        $response->getBody()->write(':' . $this->bar);
        return $response;
    }

}