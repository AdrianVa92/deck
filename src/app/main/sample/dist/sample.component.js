"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SampleComponent = void 0;
var core_1 = require("@angular/core");
var en_1 = require("./i18n/en");
var tr_1 = require("./i18n/tr");
var SampleComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {FuseTranslationLoaderService} _fuseTranslationLoaderService
     */
    function SampleComponent(_fuseTranslationLoaderService) {
        this._fuseTranslationLoaderService = _fuseTranslationLoaderService;
        this._fuseTranslationLoaderService.loadTranslations(en_1.locale, tr_1.locale);
    }
    SampleComponent = __decorate([
        core_1.Component({
            selector: 'sample',
            templateUrl: './sample.component.html',
            styleUrls: ['./sample.component.scss']
        })
    ], SampleComponent);
    return SampleComponent;
}());
exports.SampleComponent = SampleComponent;
