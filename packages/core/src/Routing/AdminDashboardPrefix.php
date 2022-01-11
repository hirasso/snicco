<?php

declare(strict_types=1);

namespace Snicco\Core\Routing;

use Webmozart\Assert\Assert;

final class AdminDashboardPrefix
{
    
    private string $prefix;
    
    private function __construct(string $prefix)
    {
        Assert::startsWith($prefix, '/');
        Assert::notEndsWith($prefix, '/');
        $this->prefix = $prefix;
    }
    
    public static function fromString(string $prefix) :AdminDashboardPrefix
    {
        return new self('/'.trim($prefix, '/'));
    }
    
    public function __toString()
    {
        return $this->asString();
    }
    
    public function asString() :string
    {
        return $this->prefix;
    }
    
    public function appendPath(string $path) :string
    {
        return (string) UrlPath::fromString($this->prefix)->append($path);
    }
    
}