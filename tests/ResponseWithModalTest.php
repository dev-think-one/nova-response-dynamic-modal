<?php

namespace NovaResponseDynamicModal\Tests;

use NovaResponseDynamicModal\Tests\Fixtures\Models\Post;
use NovaResponseDynamicModal\Tests\Fixtures\Models\User;
use NovaResponseDynamicModal\Tests\Fixtures\Nova\Actions\ReturnModal;

class ResponseWithModalTest extends TestCase
{
    protected $admin;

    protected function setUp(): void
    {
        parent::setUp();

        $this->admin = User::factory()->create();

        $this->actingAs($this->admin);
    }

    /** @test */
    public function get_options()
    {
        Post::factory()->count(12)->create();
        /** @var Post $post */
        $post = Post::factory()->create();

        $uriKey = \NovaResponseDynamicModal\Tests\Fixtures\Nova\Resources\Post::uriKey();

        $response = $this->post("nova-api/{$uriKey}/action?" . http_build_query([
                'action' => ReturnModal::make()->uriKey(),
            ]), [
            'resources' => $post->getKey(),
        ]);


        $this->assertEquals('response-dynamic-modal', $response->json('modal'));
        $this->assertEquals('Please copy link to clipboard and then sent it to contact.', $response->json('message'));
        $this->assertEquals('Link was generated!', $response->json('title'));
        $this->assertEquals('Content to copy', $response->json('copy'));
    }
}
