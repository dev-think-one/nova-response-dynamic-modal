<?php

namespace NovaResponseDynamicModal\Tests;

class TestCase extends \Orchestra\Testbench\TestCase
{
    protected function getPackageProviders($app)
    {
        return [
            \NovaResponseDynamicModal\ServiceProvider::class,
        ];
    }
}
