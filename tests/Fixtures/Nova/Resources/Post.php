<?php

namespace NovaResponseDynamicModal\Tests\Fixtures\Nova\Resources;

use Laravel\Nova\Fields\Text;
use Laravel\Nova\Fields\Textarea;
use Laravel\Nova\Http\Requests\NovaRequest;
use Laravel\Nova\Resource;
use NovaResponseDynamicModal\Tests\Fixtures\Nova\Actions\ReturnModal;

/**
 * @extends Resource<\NovaResponseDynamicModal\Tests\Fixtures\Models\Post>
 */
class Post extends Resource
{

    public static $model = \NovaResponseDynamicModal\Tests\Fixtures\Models\Post::class;

    public static $title = 'title';

    public function fields(NovaRequest $request): array
    {
        return [
            Text::make('Title', 'title'),
            Textarea::make('Content', 'content'),
        ];
    }

    public function actions(NovaRequest $request)
    {
        return [
            ReturnModal::make(),
        ];
    }

}
