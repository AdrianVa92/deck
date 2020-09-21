"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NavbarComponent = void 0;
var core_1 = require("@angular/core");
var NavbarComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {ElementRef} _elementRef
     * @param {Renderer2} _renderer
     */
    function NavbarComponent(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        // Set the private defaults
        this._variant = 'vertical-style-1';
    }
    Object.defineProperty(NavbarComponent.prototype, "variant", {
        // -----------------------------------------------------------------------------------------------------
        // @ Accessors
        // -----------------------------------------------------------------------------------------------------
        /**
         * Variant
         */
        get: function () {
            return this._variant;
        },
        set: function (value) {
            // Remove the old class name
            this._renderer.removeClass(this._elementRef.nativeElement, this.variant);
            // Store the variant value
            this._variant = value;
            // Add the new class name
            this._renderer.addClass(this._elementRef.nativeElement, value);
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        core_1.Input()
    ], NavbarComponent.prototype, "variant");
    NavbarComponent = __decorate([
        core_1.Component({
            selector: 'navbar',
            templateUrl: './navbar.component.html',
            styleUrls: ['./navbar.component.scss'],
            encapsulation: core_1.ViewEncapsulation.None
        })
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;
