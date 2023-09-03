<?php

namespace NovaResponseDynamicModal\Tests\Fixtures\Nova\Actions;

use Illuminate\Support\Collection;
use Laravel\Nova\Actions\Action;
use Laravel\Nova\Actions\DestructiveAction;
use Laravel\Nova\Fields\ActionFields;
use Laravel\Nova\Http\Requests\NovaRequest;

class ReturnModal extends DestructiveAction
{

    /**
     * Perform the action on the given models.
     *
     * @param \Laravel\Nova\Fields\ActionFields $fields
     * @param \Illuminate\Support\Collection $models
     *
     * @return mixed
     */
    public function handle(ActionFields $fields, Collection $models)
    {
        return Action::modal('response-dynamic-modal', [
            'title'   => 'Link was generated!',
            'message' => 'Please copy link to clipboard and then sent it to contact.',
            'copy'    => 'Content to copy',
        ]);
    }

    public function fields(NovaRequest $request)
    {
        return [
        ];
    }
}
