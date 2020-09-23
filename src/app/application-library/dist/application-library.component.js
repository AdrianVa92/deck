"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ApplicationLibraryComponent = void 0;
var core_1 = require("@angular/core");
var ApplicationLibraryComponent = /** @class */ (function () {
    function ApplicationLibraryComponent() {
    }
    ApplicationLibraryComponent.prototype.ngOnInit = function () {
    };
    ApplicationLibraryComponent = __decorate([
        core_1.Component({
            selector: 'app-application-library',
            templateUrl: './application-library.component.html',
            styleUrls: ['./application-library.component.scss']
        })
    ], ApplicationLibraryComponent);
    return ApplicationLibraryComponent;
}());
exports.ApplicationLibraryComponent = ApplicationLibraryComponent;
