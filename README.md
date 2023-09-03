# Nova Response dynamic Modal

![Packagist License](https://img.shields.io/packagist/l/think.studio/nova-response-dynamic-modal?color=%234dc71f)
[![Packagist Version](https://img.shields.io/packagist/v/think.studio/nova-response-dynamic-modal)](https://packagist.org/packages/think.studio/nova-response-dynamic-modal)
[![Total Downloads](https://img.shields.io/packagist/dt/think.studio/nova-response-dynamic-modal)](https://packagist.org/packages/think.studio/nova-response-dynamic-modal)
[![Build Status](https://scrutinizer-ci.com/g/dev-think-one/nova-response-dynamic-modal/badges/build.png?b=main)](https://scrutinizer-ci.com/g/dev-think-one/nova-response-dynamic-modal/build-status/main)
[![Code Coverage](https://scrutinizer-ci.com/g/dev-think-one/nova-response-dynamic-modal/badges/coverage.png?b=main)](https://scrutinizer-ci.com/g/dev-think-one/nova-response-dynamic-modal/?branch=main)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/dev-think-one/nova-response-dynamic-modal/badges/quality-score.png?b=main)](https://scrutinizer-ci.com/g/dev-think-one/nova-response-dynamic-modal/?branch=main)

| Nova | Package |
|------|---------|
| V1   | V1      |
| V4   | V2      |

### Install

```bash
composer require think.studio/nova-response-dynamic-modal
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

![Laravel Nova Flexible Content in action](docs/assets/modal-example.png)
