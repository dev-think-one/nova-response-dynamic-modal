<?php

namespace NovaResponseDynamicModal\Tests;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Artisan;
use Laravel\Nova\NovaCoreServiceProvider;
use NovaResponseDynamicModal\Tests\Fixtures\NovaServiceProvider;
use Orchestra\Testbench\Database\MigrateProcessor;

class TestCase extends \Orchestra\Testbench\TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();

        Artisan::call('nova:publish');
    }

    protected function getPackageProviders($app)
    {
        return [
            \Inertia\ServiceProvider::class,
            NovaCoreServiceProvider::class,
            NovaServiceProvider::class,
            \NovaResponseDynamicModal\ServiceProvider::class,
        ];
    }

    protected function defineDatabaseMigrations(): void
    {
        $this->loadLaravelMigrations();

        $migrator = new MigrateProcessor($this, [
            '--path'     => __DIR__ . '/Fixtures/migrations',
            '--realpath' => true,
        ]);
        $migrator->up();
    }

    /**
     * Define environment setup.
     *
     * @param \Illuminate\Foundation\Application $app
     *
     * @return void
     */
    protected function getEnvironmentSetUp($app)
    {
        // Setup default database to use sqlite :memory:
        $app['config']->set('database.default', 'testbench');
        $app['config']->set('database.connections.testbench', [
            'driver'   => 'sqlite',
            'database' => ':memory:',
            'prefix'   => '',
        ]);
    }
}
