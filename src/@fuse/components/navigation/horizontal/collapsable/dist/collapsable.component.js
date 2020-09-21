"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FuseNavHorizontalCollapsableComponent = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var animations_1 = require("projects/deck/src/@fuse/animations");
var FuseNavHorizontalCollapsableComponent = /** @class */ (function () {
    function FuseNavHorizontalCollapsableComponent(_fuseConfigService) {
        this._fuseConfigService = _fuseConfigService;
        this.isOpen = false;
        this.classes = 'nav-collapsable nav-item';
        // Set the private defaults
        this._unsubscribeAll = new rxjs_1.Subject();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    FuseNavHorizontalCollapsableComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Subscribe to config changes
        this._fuseConfigService.config
            .pipe(operators_1.takeUntil(this._unsubscribeAll))
            .subscribe(function (config) {
            _this.fuseConfig = config;
        });
    };
    /**
     * On destroy
     */
    FuseNavHorizontalCollapsableComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Open
     */
    FuseNavHorizontalCollapsableComponent.prototype.open = function () {
        this.isOpen = true;
    };
    /**
     * Close
     */
    FuseNavHorizontalCollapsableComponent.prototype.close = function () {
        this.isOpen = false;
    };
    __decorate([
        core_1.HostBinding('class')
    ], FuseNavHorizontalCollapsableComponent.prototype, "classes");
    __decorate([
        core_1.Input()
    ], FuseNavHorizontalCollapsableComponent.prototype, "item");
    __decorate([
        core_1.HostListener('mouseenter')
    ], FuseNavHorizontalCollapsableComponent.prototype, "open");
    __decorate([
        core_1.HostListener('mouseleave')
    ], FuseNavHorizontalCollapsableComponent.prototype, "close");
    FuseNavHorizontalCollapsableComponent = __decorate([
        core_1.Component({
            selector: 'fuse-nav-horizontal-collapsable',
            templateUrl: './collapsable.component.html',
            styleUrls: ['./collapsable.component.scss'],
            animations: animations_1.fuseAnimations
        })
    ], FuseNavHorizontalCollapsableComponent);
    return FuseNavHorizontalCollapsableComponent;
}());
exports.FuseNavHorizontalCollapsableComponent = FuseNavHorizontalCollapsableComponent;
