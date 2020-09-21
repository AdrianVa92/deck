"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.VerticalLayout1Module = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var components_1 = require("projects/deck/src/@fuse/components");
var shared_module_1 = require("projects/deck/src/@fuse/shared.module");
var content_module_1 = require("projects/deck/src/@fuse/layout/components/content/content.module");
var footer_module_1 = require("projects/deck/src/@fuse/layout/components/footer/footer.module");
var navbar_module_1 = require("projects/deck/src/@fuse/layout/components/navbar/navbar.module");
var quick_panel_module_1 = require("projects/deck/src/@fuse/layout/components/quick-panel/quick-panel.module");
var toolbar_module_1 = require("projects/deck/src/@fuse/layout/components/toolbar/toolbar.module");
var layout_1_component_1 = require("projects/deck/src/@fuse/layout/vertical/layout-1/layout-1.component");
var VerticalLayout1Module = /** @class */ (function () {
    function VerticalLayout1Module() {
    }
    VerticalLayout1Module = __decorate([
        core_1.NgModule({
            declarations: [
                layout_1_component_1.VerticalLayout1Component
            ],
            imports: [
                router_1.RouterModule,
                shared_module_1.FuseSharedModule,
                components_1.FuseSidebarModule,
                content_module_1.ContentModule,
                footer_module_1.FooterModule,
                navbar_module_1.NavbarModule,
                quick_panel_module_1.QuickPanelModule,
                toolbar_module_1.ToolbarModule
            ],
            exports: [
                layout_1_component_1.VerticalLayout1Component
            ]
        })
    ], VerticalLayout1Module);
    return VerticalLayout1Module;
}());
exports.VerticalLayout1Module = VerticalLayout1Module;
