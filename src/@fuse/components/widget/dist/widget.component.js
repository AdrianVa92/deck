"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FuseWidgetComponent = void 0;
var core_1 = require("@angular/core");
var widget_toggle_directive_1 = require("./widget-toggle.directive");
var FuseWidgetComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {ElementRef} _elementRef
     * @param {Renderer2} _renderer
     */
    function FuseWidgetComponent(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this.flipped = false;
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * After content init
     */
    FuseWidgetComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        // Listen for the flip button click
        setTimeout(function () {
            _this.toggleButtons.forEach(function (flipButton) {
                _this._renderer.listen(flipButton.elementRef.nativeElement, 'click', function (event) {
                    event.preventDefault();
                    event.stopPropagation();
                    _this.toggle();
                });
            });
        });
    };
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Toggle the flipped status
     */
    FuseWidgetComponent.prototype.toggle = function () {
        this.flipped = !this.flipped;
    };
    __decorate([
        core_1.HostBinding('class.flipped')
    ], FuseWidgetComponent.prototype, "flipped");
    __decorate([
        core_1.ContentChildren(widget_toggle_directive_1.FuseWidgetToggleDirective, { descendants: true })
    ], FuseWidgetComponent.prototype, "toggleButtons");
    FuseWidgetComponent = __decorate([
        core_1.Component({
            selector: 'fuse-widget',
            templateUrl: './widget.component.html',
            styleUrls: ['./widget.component.scss'],
            encapsulation: core_1.ViewEncapsulation.None
        })
    ], FuseWidgetComponent);
    return FuseWidgetComponent;
}());
exports.FuseWidgetComponent = FuseWidgetComponent;
