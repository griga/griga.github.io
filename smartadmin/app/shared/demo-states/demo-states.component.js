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
var demo_states_service_1 = require('./demo-states.service');
var DemoStatesComponent = (function () {
    function DemoStatesComponent(state) {
        this.state = state;
    }
    DemoStatesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.state.subscribe(function (store) {
            _this.store = store;
            _this._processBody(store);
        });
        this.store = this.state.store;
        this._processBody(this.state.store);
    };
    DemoStatesComponent.prototype.onToggle = function () {
        this.isActivated = !this.isActivated;
    };
    DemoStatesComponent.prototype.onSmartSkin = function (skin) {
        this.state.onSmartSkin(skin);
    };
    DemoStatesComponent.prototype.onFixedHeader = function () {
        this.state.onFixedHeader();
    };
    DemoStatesComponent.prototype.onFixedNavigation = function () {
        this.state.onFixedNavigation();
    };
    DemoStatesComponent.prototype.onFixedRibbon = function () {
        this.state.onFixedRibbon();
    };
    DemoStatesComponent.prototype.onFixedPageFooter = function () {
        this.state.onFixedPageFooter();
    };
    DemoStatesComponent.prototype.onInsideContainer = function () {
        this.state.onInsideContainer();
    };
    DemoStatesComponent.prototype.onRtl = function () {
        this.state.onRtl();
    };
    DemoStatesComponent.prototype.onMenuOnTop = function () {
        this.state.onMenuOnTop();
    };
    DemoStatesComponent.prototype.onColorblindFriendly = function () {
        this.state.onColorblindFriendly();
    };
    DemoStatesComponent.prototype._processBody = function (state) {
        var $body = $('body');
        $body.removeClass(state.skins.map(function (it) { return (it.name); }).join(' '));
        $body.addClass(state.skin.name);
        $("#logo img").attr('src', state.skin.logo);
        $body.toggleClass('fixed-header', state.fixedHeader);
        $body.toggleClass('fixed-navigation', state.fixedNavigation);
        $body.toggleClass('fixed-ribbon', state.fixedRibbon);
        $body.toggleClass('fixed-page-footer', state.fixedPageFooter);
        $body.toggleClass('container', state.insideContainer);
        $body.toggleClass('smart-rtl', state.rtl);
        $body.toggleClass('menu-on-top', state.menuOnTop);
        $body.toggleClass('colorblind-friendly', state.colorblindFriendly);
        if (state.menuOnTop)
            $body.removeClass('minified');
    };
    DemoStatesComponent.prototype.factoryReset = function () {
        this.state.factoryReset();
    };
    DemoStatesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sa-demo-states',
            templateUrl: 'demo-states.component.html',
            providers: [demo_states_service_1.DemoStatesService]
        }), 
        __metadata('design:paramtypes', [demo_states_service_1.DemoStatesService])
    ], DemoStatesComponent);
    return DemoStatesComponent;
}());
exports.DemoStatesComponent = DemoStatesComponent;
//# sourceMappingURL=demo-states.component.js.map