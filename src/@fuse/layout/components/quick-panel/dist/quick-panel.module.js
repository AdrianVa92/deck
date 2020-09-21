"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.QuickPanelModule = void 0;
var core_1 = require("@angular/core");
var divider_1 = require("@angular/material/divider");
var list_1 = require("@angular/material/list");
var slide_toggle_1 = require("@angular/material/slide-toggle");
var shared_module_1 = require("projects/deck/src/@fuse/shared.module");
var quick_panel_component_1 = require("projects/deck/src/@fuse/layout/components/quick-panel/quick-panel.component");
var QuickPanelModule = /** @class */ (function () {
    function QuickPanelModule() {
    }
    QuickPanelModule = __decorate([
        core_1.NgModule({
            declarations: [
                quick_panel_component_1.QuickPanelComponent
            ],
            imports: [
                divider_1.MatDividerModule,
                list_1.MatListModule,
                slide_toggle_1.MatSlideToggleModule,
                shared_module_1.FuseSharedModule,
            ],
            exports: [
                quick_panel_component_1.QuickPanelComponent
            ]
        })
    ], QuickPanelModule);
    return QuickPanelModule;
}());
exports.QuickPanelModule = QuickPanelModule;
