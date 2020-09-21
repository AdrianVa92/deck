"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HorizontalLayout1Component = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
// import { navigation } from 'projects/deck/src/app/theme/navigation/navigation';
var HorizontalLayout1Component = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     */
    function HorizontalLayout1Component(_fuseConfigService) {
        // Set the defaults
        // this.navigation = navigation;
        this._fuseConfigService = _fuseConfigService;
        // Set the private defaults
        this._unsubscribeAll = new rxjs_1.Subject();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    HorizontalLayout1Component.prototype.ngOnInit = function () {
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
    HorizontalLayout1Component.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    HorizontalLayout1Component = __decorate([
        core_1.Component({
            selector: 'horizontal-layout-1',
            templateUrl: './layout-1.component.html',
            styleUrls: ['./layout-1.component.scss'],
            encapsulation: core_1.ViewEncapsulation.None
        })
    ], HorizontalLayout1Component);
    return HorizontalLayout1Component;
}());
exports.HorizontalLayout1Component = HorizontalLayout1Component;
