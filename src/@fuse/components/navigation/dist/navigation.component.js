"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FuseNavigationComponent = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var FuseNavigationComponent = /** @class */ (function () {
    /**
     *
     * @param {ChangeDetectorRef} _changeDetectorRef
     * @param {FuseNavigationService} _fuseNavigationService
     */
    function FuseNavigationComponent(_changeDetectorRef, _fuseNavigationService) {
        this._changeDetectorRef = _changeDetectorRef;
        this._fuseNavigationService = _fuseNavigationService;
        this.layout = 'vertical';
        // Set the private defaults
        this._unsubscribeAll = new rxjs_1.Subject();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    FuseNavigationComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Load the navigation either from the input or from the service
        this.navigation = this.navigation || this._fuseNavigationService.getCurrentNavigation();
        // Subscribe to the current navigation changes
        this._fuseNavigationService.onNavigationChanged
            .pipe(operators_1.takeUntil(this._unsubscribeAll))
            .subscribe(function () {
            // Load the navigation
            _this.navigation = _this._fuseNavigationService.getCurrentNavigation();
            // Mark for check
            _this._changeDetectorRef.markForCheck();
        });
        // Subscribe to navigation item
        rxjs_1.merge(this._fuseNavigationService.onNavigationItemAdded, this._fuseNavigationService.onNavigationItemUpdated, this._fuseNavigationService.onNavigationItemRemoved).pipe(operators_1.takeUntil(this._unsubscribeAll))
            .subscribe(function () {
            // Mark for check
            _this._changeDetectorRef.markForCheck();
        });
    };
    __decorate([
        core_1.Input()
    ], FuseNavigationComponent.prototype, "layout");
    __decorate([
        core_1.Input()
    ], FuseNavigationComponent.prototype, "navigation");
    FuseNavigationComponent = __decorate([
        core_1.Component({
            selector: 'fuse-navigation',
            templateUrl: './navigation.component.html',
            styleUrls: ['./navigation.component.scss'],
            encapsulation: core_1.ViewEncapsulation.None,
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        })
    ], FuseNavigationComponent);
    return FuseNavigationComponent;
}());
exports.FuseNavigationComponent = FuseNavigationComponent;
