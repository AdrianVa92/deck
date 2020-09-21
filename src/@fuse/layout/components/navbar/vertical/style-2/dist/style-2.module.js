"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NavbarVerticalStyle2Module = void 0;
var core_1 = require("@angular/core");
var button_1 = require("@angular/material/button");
var icon_1 = require("@angular/material/icon");
var components_1 = require("projects/deck/src/@fuse/components");
var shared_module_1 = require("projects/deck/src/@fuse/shared.module");
var style_2_component_1 = require("projects/deck/src/@fuse/layout/components/navbar/vertical/style-2/style-2.component");
var NavbarVerticalStyle2Module = /** @class */ (function () {
    function NavbarVerticalStyle2Module() {
    }
    NavbarVerticalStyle2Module = __decorate([
        core_1.NgModule({
            declarations: [
                style_2_component_1.NavbarVerticalStyle2Component
            ],
            imports: [
                button_1.MatButtonModule,
                icon_1.MatIconModule,
                shared_module_1.FuseSharedModule,
                components_1.FuseNavigationModule
            ],
            exports: [
                style_2_component_1.NavbarVerticalStyle2Component
            ]
        })
    ], NavbarVerticalStyle2Module);
    return NavbarVerticalStyle2Module;
}());
exports.NavbarVerticalStyle2Module = NavbarVerticalStyle2Module;