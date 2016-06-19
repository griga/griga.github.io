"use strict";
var testing_1 = require('@angular/core/testing');
var smartadmin_component_1 = require('../app/smartadmin.component');
testing_1.beforeEachProviders(function () { return [smartadmin_component_1.SmartadminAppComponent]; });
testing_1.describe('App: Smartadmin', function () {
    testing_1.it('should create the app', testing_1.inject([smartadmin_component_1.SmartadminAppComponent], function (app) {
        testing_1.expect(app).toBeTruthy();
    }));
    testing_1.it('should have as title \'smartadmin works!\'', testing_1.inject([smartadmin_component_1.SmartadminAppComponent], function (app) {
        testing_1.expect(app.title).toEqual('smartadmin works!');
    }));
});
//# sourceMappingURL=smartadmin.component.spec.js.map