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
var Rx_1 = require("rxjs/Rx");
var http_1 = require("@angular/http");
var config_1 = require('../../config');
var languages_model_1 = require('./languages.model');
var I18nService = (function () {
    function I18nService(http, ref) {
        this.http = http;
        this.ref = ref;
        this.state = new Rx_1.Subject();
        this.initLanguage(config_1.config.defaultLocale || 'us');
        this.fetch(this.currentLanguage.key);
    }
    I18nService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    I18nService.prototype.fetch = function (locale) {
        var _this = this;
        this.http.get("api/langs/" + locale + ".json")
            .map(this.extractData)
            .subscribe(function (data) {
            _this.data = data;
            _this.state.next(data);
            _this.ref.tick();
        });
    };
    I18nService.prototype.initLanguage = function (locale) {
        var language = languages_model_1.languages.find(function (it) {
            return it.key == locale;
        });
        if (language) {
            this.currentLanguage = language;
        }
        else {
            throw new Error("Incorrect locale used for I18nService: " + locale);
        }
    };
    I18nService.prototype.setLanguage = function (language) {
        this.currentLanguage = language;
        this.fetch(language.key);
    };
    I18nService.prototype.subscribe = function (sub, err) {
        return this.state.subscribe(sub, err);
    };
    I18nService.prototype.getTranslation = function (phrase) {
        return this.data && this.data[phrase] ? this.data[phrase] : phrase;
    };
    I18nService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, core_1.ApplicationRef])
    ], I18nService);
    return I18nService;
}());
exports.I18nService = I18nService;
//# sourceMappingURL=i18n.service.js.map