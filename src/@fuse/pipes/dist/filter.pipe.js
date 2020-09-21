"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FilterPipe = void 0;
var core_1 = require("@angular/core");
var utils_1 = require("projects/deck/src/@fuse/utils");
var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    /**
     * Transform
     *
     * @param {any[]} mainArr
     * @param {string} searchText
     * @param {string} property
     * @returns {any}
     */
    FilterPipe.prototype.transform = function (mainArr, searchText, property) {
        return utils_1.FuseUtils.filterArrayByString(mainArr, searchText);
    };
    FilterPipe = __decorate([
        core_1.Pipe({ name: 'filter' })
    ], FilterPipe);
    return FilterPipe;
}());
exports.FilterPipe = FilterPipe;
