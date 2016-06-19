"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var _1 = require('./app/');
var store_1 = require("@ngrx/store");
var http_1 = require("@angular/http");
if (_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.bootstrap(_1.SmartadminAppComponent, [
    http_1.HTTP_PROVIDERS,
    store_1.provideStore({ navigation: _1.navigation }),
    _1.I18nService
]);
//# sourceMappingURL=main.js.map