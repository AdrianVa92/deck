"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.ConfirmationDialogComponent = void 0;
var core_1 = require("@angular/core");
var dialog_1 = require("@angular/material/dialog");
var ConfirmationDialogComponent = /** @class */ (function () {
    function ConfirmationDialogComponent(_dialogRef, _data) {
        this._dialogRef = _dialogRef;
        this._data = _data;
        this.type = '';
        this.title = '';
        this.body = '';
        this.confirmText = '';
        this.cancelText = '';
        this.type = _data.type || '';
        this.title = _data.title || '';
        this.body = _data.body || '';
        this.confirmText = _data.confirmText || 'Confirm';
        this.cancelText = _data.cancelText || 'Cancel';
    }
    ConfirmationDialogComponent.prototype.ngOnInit = function () {
    };
    ConfirmationDialogComponent.prototype.onSubmit = function () {
        this._dialogRef.close(true);
    };
    ConfirmationDialogComponent = __decorate([
        core_1.Component({
            selector: 'lib-confirmation-dialog',
            templateUrl: './confirmation-dialog.component.html',
            styleUrls: ['./confirmation-dialog.component.scss']
        }),
        __param(1, core_1.Inject(dialog_1.MAT_DIALOG_DATA))
    ], ConfirmationDialogComponent);
    return ConfirmationDialogComponent;
}());
exports.ConfirmationDialogComponent = ConfirmationDialogComponent;
