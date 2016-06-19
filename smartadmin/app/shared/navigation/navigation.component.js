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
var menu_collapse_directive_1 = require("./menu-collapse.directive");
var router_1 = require("@angular/router");
var i18n_pipe_1 = require("../i18n/i18n.pipe");
var minify_menu_component_1 = require("./minify-menu/minify-menu.component");
var NavigationComponent = (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent.prototype.getWord = function (word) {
        return word;
    };
    NavigationComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sa-navigation',
            templateUrl: 'navigation.component.html',
            directives: [menu_collapse_directive_1.MenuCollapseDirective, minify_menu_component_1.MinifyMenuComponent, router_1.ROUTER_DIRECTIVES],
            pipes: [i18n_pipe_1.I18nPipe],
            styles: ["\n  a[href=\"\"]:hover{cursor: pointer;}\n  [saMenuCollapse]>a:hover{cursor: pointer;}\n"]
        }), 
        __metadata('design:paramtypes', [])
    ], NavigationComponent);
    return NavigationComponent;
}());
exports.NavigationComponent = NavigationComponent;
//# sourceMappingURL=navigation.component.js.map