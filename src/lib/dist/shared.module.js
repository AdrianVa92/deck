"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SharedModule = void 0;
var core_1 = require("@angular/core");
var material_module_1 = require("./material/material.module");
var timezone_date_pipe_1 = require("./pipes/timezone-date.pipe");
var confirmation_dialog_component_1 = require("./dialogs/confirmation-dialog/confirmation-dialog.component");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            declarations: [
                timezone_date_pipe_1.TimezoneDatePipe,
                confirmation_dialog_component_1.ConfirmationDialogComponent
            ],
            imports: [
                material_module_1.MaterialModule
            ],
            exports: [
                material_module_1.MaterialModule,
                timezone_date_pipe_1.TimezoneDatePipe,
                confirmation_dialog_component_1.ConfirmationDialogComponent
            ],
            entryComponents: [
                confirmation_dialog_component_1.ConfirmationDialogComponent
            ]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
