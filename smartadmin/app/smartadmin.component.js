"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var _dashboard_1 = require('./+dashboard');
var _social_1 = require('./+social');
var app_layouts_component_1 = require("./+smartadmin/+app-layouts/app-layouts.component");
var prebuilt_skins_component_1 = require("./+smartadmin/+prebuilt-skins/prebuilt-skins.component");
var shared_1 = require("./shared");
var store_1 = require("@ngrx/store");
var SmartadminAppComponent = (function () {
    function SmartadminAppComponent(store, router) {
        this.store = store;
        this.router = router;
        this.title = 'smartadmin works y!';
        store.subscribe(function (state) {
            console.log('state', state);
        });
    }
    SmartadminAppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'smartadmin-app',
            templateUrl: 'smartadmin.component.html',
            directives: [router_1.ROUTER_DIRECTIVES,
                shared_1.HeaderComponent, shared_1.FooterComponent, shared_1.NavigationComponent, shared_1.DemoStatesComponent, shared_1.RibbonComponent],
            providers: [router_1.provideRouter([
                    { path: '/dashboard', component: _dashboard_1.DashboardComponent },
                    { path: '/social', component: _social_1.SocialComponent },
                    { path: '/smartadmin/app-layouts', component: app_layouts_component_1.AppLayoutsComponent },
                    { path: '/smartadmin/prebuilt-skins', component: prebuilt_skins_component_1.PrebuiltSkinsComponent },
                ])]
        }), 
        __metadata('design:paramtypes', [store_1.Store, router_1.Router])
    ], SmartadminAppComponent);
    return SmartadminAppComponent;
}());
exports.SmartadminAppComponent = SmartadminAppComponent;
//# sourceMappingURL=smartadmin.component.js.map