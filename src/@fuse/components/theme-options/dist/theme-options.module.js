"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FuseThemeOptionsModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var flex_layout_1 = require("@angular/flex-layout");
var button_1 = require("@angular/material/button");
var checkbox_1 = require("@angular/material/checkbox");
var core_2 = require("@angular/material/core");
var divider_1 = require("@angular/material/divider");
var form_field_1 = require("@angular/material/form-field");
var icon_1 = require("@angular/material/icon");
var radio_1 = require("@angular/material/radio");
var select_1 = require("@angular/material/select");
var slide_toggle_1 = require("@angular/material/slide-toggle");
var directives_1 = require("projects/deck/src/@fuse/directives/directives");
var material_color_picker_module_1 = require("projects/deck/src/@fuse/components/material-color-picker/material-color-picker.module");
var sidebar_module_1 = require("projects/deck/src/@fuse/components/sidebar/sidebar.module");
var theme_options_component_1 = require("projects/deck/src/@fuse/components/theme-options/theme-options.component");
var FuseThemeOptionsModule = /** @class */ (function () {
    function FuseThemeOptionsModule() {
    }
    FuseThemeOptionsModule = __decorate([
        core_1.NgModule({
            declarations: [
                theme_options_component_1.FuseThemeOptionsComponent
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                flex_layout_1.FlexLayoutModule,
                button_1.MatButtonModule,
                checkbox_1.MatCheckboxModule,
                divider_1.MatDividerModule,
                form_field_1.MatFormFieldModule,
                icon_1.MatIconModule,
                core_2.MatOptionModule,
                radio_1.MatRadioModule,
                select_1.MatSelectModule,
                slide_toggle_1.MatSlideToggleModule,
                directives_1.FuseDirectivesModule,
                material_color_picker_module_1.FuseMaterialColorPickerModule,
                sidebar_module_1.FuseSidebarModule
            ],
            exports: [
                theme_options_component_1.FuseThemeOptionsComponent
            ]
        })
    ], FuseThemeOptionsModule);
    return FuseThemeOptionsModule;
}());
exports.FuseThemeOptionsModule = FuseThemeOptionsModule;
