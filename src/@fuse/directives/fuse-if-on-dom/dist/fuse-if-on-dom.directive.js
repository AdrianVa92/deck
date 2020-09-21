"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FuseIfOnDomDirective = void 0;
var core_1 = require("@angular/core");
var FuseIfOnDomDirective = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {ElementRef} _elementRef
     * @param {TemplateRef<any>} _templateRef
     * @param {ViewContainerRef} _viewContainerRef
     */
    function FuseIfOnDomDirective(_elementRef, _templateRef, _viewContainerRef) {
        this._elementRef = _elementRef;
        this._templateRef = _templateRef;
        this._viewContainerRef = _viewContainerRef;
        // Set the defaults
        this.isCreated = false;
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * After content checked
     */
    FuseIfOnDomDirective.prototype.ngAfterContentChecked = function () {
        var _this = this;
        if (document.body.contains(this._elementRef.nativeElement) && !this.isCreated) {
            setTimeout(function () {
                _this._viewContainerRef.createEmbeddedView(_this._templateRef);
            }, 300);
            this.isCreated = true;
        }
        else if (this.isCreated && !document.body.contains(this._elementRef.nativeElement)) {
            this._viewContainerRef.clear();
            this.isCreated = false;
        }
    };
    FuseIfOnDomDirective = __decorate([
        core_1.Directive({
            selector: '[fuseIfOnDom]'
        })
    ], FuseIfOnDomDirective);
    return FuseIfOnDomDirective;
}());
exports.FuseIfOnDomDirective = FuseIfOnDomDirective;
