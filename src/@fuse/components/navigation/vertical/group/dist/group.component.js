"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FuseNavVerticalGroupComponent = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var FuseNavVerticalGroupComponent = /** @class */ (function () {
    /**
     * Constructor
     */
    /**
     *
     * @param {ChangeDetectorRef} _changeDetectorRef
     * @param {FuseNavigationService} _fuseNavigationService
     */
    function FuseNavVerticalGroupComponent(_changeDetectorRef, _fuseNavigationService) {
        this._changeDetectorRef = _changeDetectorRef;
        this._fuseNavigationService = _fuseNavigationService;
        this.classes = 'nav-group nav-item';
        // Set the private defaults
        this._unsubscribeAll = new rxjs_1.Subject();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    FuseNavVerticalGroupComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Subscribe to navigation item
        rxjs_1.merge(this._fuseNavigationService.onNavigationItemAdded, this._fuseNavigationService.onNavigationItemUpdated, this._fuseNavigationService.onNavigationItemRemoved).pipe(operators_1.takeUntil(this._unsubscribeAll))
            .subscribe(function () {
            // Mark for check
            _this._changeDetectorRef.markForCheck();
        });
    };
    /**
     * On destroy
     */
    FuseNavVerticalGroupComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    __decorate([
        core_1.HostBinding('class')
    ], FuseNavVerticalGroupComponent.prototype, "classes");
    __decorate([
        core_1.Input()
    ], FuseNavVerticalGroupComponent.prototype, "item");
    FuseNavVerticalGroupComponent = __decorate([
        core_1.Component({
            selector: 'fuse-nav-vertical-group',
            templateUrl: './group.component.html',
            styleUrls: ['./group.component.scss']
        })
    ], FuseNavVerticalGroupComponent);
    return FuseNavVerticalGroupComponent;
}());
exports.FuseNavVerticalGroupComponent = FuseNavVerticalGroupComponent;
