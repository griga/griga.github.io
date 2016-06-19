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
var MenuCollapseDirective = (function () {
    function MenuCollapseDirective(el) {
        this.el = el.nativeElement;
    }
    MenuCollapseDirective.prototype.ngOnInit = function () {
        var _this = this;
        var sign = $('<b class="collapse-sign"><em class="fa fa-plus-square-o"/></b>');
        // $(this.el)
        $('>a', this.el).on('click', function (e) {
            _this.open = !_this.open;
            $('>ul', _this.el).slideToggle(_this.open);
            $('>a>.collapse-sign>em', _this.el)
                .toggleClass('fa-plus-square-o', !_this.open)
                .toggleClass('fa-minus-square-o', _this.open);
            e.stopPropagation();
            return false;
        }).append(sign);
    };
    __decorate([
        core_1.HostBinding('class.open'), 
        __metadata('design:type', Boolean)
    ], MenuCollapseDirective.prototype, "open", void 0);
    MenuCollapseDirective = __decorate([
        core_1.Directive({
            selector: '[saMenuCollapse]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], MenuCollapseDirective);
    return MenuCollapseDirective;
}());
exports.MenuCollapseDirective = MenuCollapseDirective;
//# sourceMappingURL=menu-collapse.directive.js.map