"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FuseShortcutsModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var flex_layout_1 = require("@angular/flex-layout");
var button_1 = require("@angular/material/button");
var divider_1 = require("@angular/material/divider");
var form_field_1 = require("@angular/material/form-field");
var icon_1 = require("@angular/material/icon");
var input_1 = require("@angular/material/input");
var list_1 = require("@angular/material/list");
var menu_1 = require("@angular/material/menu");
var tooltip_1 = require("@angular/material/tooltip");
var ngx_cookie_service_1 = require("ngx-cookie-service");
var shortcuts_component_1 = require("./shortcuts.component");
var FuseShortcutsModule = /** @class */ (function () {
    function FuseShortcutsModule() {
    }
    FuseShortcutsModule = __decorate([
        core_1.NgModule({
            declarations: [
                shortcuts_component_1.FuseShortcutsComponent
            ],
            imports: [
                common_1.CommonModule,
                router_1.RouterModule,
                flex_layout_1.FlexLayoutModule,
                button_1.MatButtonModule,
                divider_1.MatDividerModule,
                form_field_1.MatFormFieldModule,
                icon_1.MatIconModule,
                input_1.MatInputModule,
                menu_1.MatMenuModule,
                list_1.MatListModule,
                tooltip_1.MatTooltipModule
            ],
            exports: [
                shortcuts_component_1.FuseShortcutsComponent
            ],
            providers: [
                ngx_cookie_service_1.CookieService
            ]
        })
    ], FuseShortcutsModule);
    return FuseShortcutsModule;
}());
exports.FuseShortcutsModule = FuseShortcutsModule;
