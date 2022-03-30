# Nova List Card

[![Packagist License](https://img.shields.io/packagist/l/yaroslawww/nova-response-dynamic-modal?color=%234dc71f)](https://github.com/yaroslawww/nova-response-dynamic-modal/blob/master/LICENSE.md)
[![Packagist Version](https://img.shields.io/packagist/v/yaroslawww/nova-response-dynamic-modal)](https://packagist.org/packages/yaroslawww/nova-response-dynamic-modal)
[![Total Downloads](https://img.shields.io/packagist/dt/yaroslawww/nova-response-dynamic-modal)](https://packagist.org/packages/yaroslawww/nova-response-dynamic-modal)

### Install

```bash
composer require yaroslawww/nova-response-dynamic-modal
```

### Usage

```php
<?php
return Action::modal('response-dynamic-modal', [
                'title' => 'Link was generated!',
                'message' => 'Please copy link to clipboard and then sent it to contact.',
                'copy' => $checkout->url,
            ]);
```

