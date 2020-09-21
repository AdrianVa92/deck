"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FuseHighlightModule = void 0;
var core_1 = require("@angular/core");
var highlight_component_1 = require("projects/deck/src/@fuse/components/highlight/highlight.component");
var FuseHighlightModule = /** @class */ (function () {
    function FuseHighlightModule() {
    }
    FuseHighlightModule = __decorate([
        core_1.NgModule({
            declarations: [
                highlight_component_1.FuseHighlightComponent
            ],
            exports: [
                highlight_component_1.FuseHighlightComponent
            ]
        })
    ], FuseHighlightModule);
    return FuseHighlightModule;
}());
exports.FuseHighlightModule = FuseHighlightModule;