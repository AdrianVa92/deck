"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FuseMatSidenavTogglerDirective = exports.FuseMatSidenavHelperDirective = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var FuseMatSidenavHelperDirective = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {FuseMatchMediaService} _fuseMatchMediaService
     * @param {FuseMatSidenavHelperService} _fuseMatSidenavHelperService
     * @param {MatSidenav} _matSidenav
     * @param {MediaObserver} _mediaObserver
     */
    function FuseMatSidenavHelperDirective(_fuseMatchMediaService, _fuseMatSidenavHelperService, _matSidenav, _mediaObserver) {
        this._fuseMatchMediaService = _fuseMatchMediaService;
        this._fuseMatSidenavHelperService = _fuseMatSidenavHelperService;
        this._matSidenav = _matSidenav;
        this._mediaObserver = _mediaObserver;
        // Set the defaults
        this.isLockedOpen = true;
        // Set the private defaults
        this._unsubscribeAll = new rxjs_1.Subject();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    FuseMatSidenavHelperDirective.prototype.ngOnInit = function () {
        var _this = this;
        // Register the sidenav to the service
        this._fuseMatSidenavHelperService.setSidenav(this.fuseMatSidenavHelper, this._matSidenav);
        if (this.matIsLockedOpen && this._mediaObserver.isActive(this.matIsLockedOpen)) {
            this.isLockedOpen = true;
            this._matSidenav.mode = 'side';
            this._matSidenav.toggle(true);
        }
        else {
            this.isLockedOpen = false;
            this._matSidenav.mode = 'over';
            this._matSidenav.toggle(false);
        }
        this._fuseMatchMediaService.onMediaChange
            .pipe(operators_1.takeUntil(this._unsubscribeAll))
            .subscribe(function () {
            if (_this.matIsLockedOpen && _this._mediaObserver.isActive(_this.matIsLockedOpen)) {
                _this.isLockedOpen = true;
                _this._matSidenav.mode = 'side';
                _this._matSidenav.toggle(true);
            }
            else {
                _this.isLockedOpen = false;
                _this._matSidenav.mode = 'over';
                _this._matSidenav.toggle(false);
            }
        });
    };
    /**
     * On destroy
     */
    FuseMatSidenavHelperDirective.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    __decorate([
        core_1.HostBinding('class.mat-is-locked-open')
    ], FuseMatSidenavHelperDirective.prototype, "isLockedOpen");
    __decorate([
        core_1.Input()
    ], FuseMatSidenavHelperDirective.prototype, "fuseMatSidenavHelper");
    __decorate([
        core_1.Input()
    ], FuseMatSidenavHelperDirective.prototype, "matIsLockedOpen");
    FuseMatSidenavHelperDirective = __decorate([
        core_1.Directive({
            selector: '[fuseMatSidenavHelper]'
        })
    ], FuseMatSidenavHelperDirective);
    return FuseMatSidenavHelperDirective;
}());
exports.FuseMatSidenavHelperDirective = FuseMatSidenavHelperDirective;
var FuseMatSidenavTogglerDirective = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {FuseMatSidenavHelperService} _fuseMatSidenavHelperService
     */
    function FuseMatSidenavTogglerDirective(_fuseMatSidenavHelperService) {
        this._fuseMatSidenavHelperService = _fuseMatSidenavHelperService;
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * On click
     */
    FuseMatSidenavTogglerDirective.prototype.onClick = function () {
        this._fuseMatSidenavHelperService.getSidenav(this.fuseMatSidenavToggler).toggle();
    };
    __decorate([
        core_1.Input()
    ], FuseMatSidenavTogglerDirective.prototype, "fuseMatSidenavToggler");
    __decorate([
        core_1.HostListener('click')
    ], FuseMatSidenavTogglerDirective.prototype, "onClick");
    FuseMatSidenavTogglerDirective = __decorate([
        core_1.Directive({
            selector: '[fuseMatSidenavToggler]'
        })
    ], FuseMatSidenavTogglerDirective);
    return FuseMatSidenavTogglerDirective;
}());
exports.FuseMatSidenavTogglerDirective = FuseMatSidenavTogglerDirective;
