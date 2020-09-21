"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FooterModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var button_1 = require("@angular/material/button");
var icon_1 = require("@angular/material/icon");
var toolbar_1 = require("@angular/material/toolbar");
var shared_module_1 = require("projects/deck/src/@fuse/shared.module");
var footer_component_1 = require("projects/deck/src/@fuse/layout/components/footer/footer.component");
var FooterModule = /** @class */ (function () {
    function FooterModule() {
    }
    FooterModule = __decorate([
        core_1.NgModule({
            declarations: [
                footer_component_1.FooterComponent
            ],
            imports: [
                router_1.RouterModule,
                button_1.MatButtonModule,
                icon_1.MatIconModule,
                toolbar_1.MatToolbarModule,
                shared_module_1.FuseSharedModule
            ],
            exports: [
                footer_component_1.FooterComponent
            ]
        })
    ], FooterModule);
    return FooterModule;
}());
exports.FooterModule = FooterModule;