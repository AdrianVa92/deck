"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FuseNavVerticalCollapsableComponent = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var animations_1 = require("projects/deck/src/@fuse/animations");
var FuseNavVerticalCollapsableComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {ChangeDetectorRef} _changeDetectorRef
     * @param {FuseNavigationService} _fuseNavigationService
     * @param {Router} _router
     */
    function FuseNavVerticalCollapsableComponent(_changeDetectorRef, _fuseNavigationService, _router) {
        this._changeDetectorRef = _changeDetectorRef;
        this._fuseNavigationService = _fuseNavigationService;
        this._router = _router;
        this.classes = 'nav-collapsable nav-item';
        this.isOpen = false;
        // Set the private defaults
        this._unsubscribeAll = new rxjs_1.Subject();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    FuseNavVerticalCollapsableComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Listen for router events
        this._router.events
            .pipe(operators_1.filter(function (event) { return event instanceof router_1.NavigationEnd; }), operators_1.takeUntil(this._unsubscribeAll))
            .subscribe(function (event) {
            // Check if the url can be found in
            // one of the children of this item
            if (_this.isUrlInChildren(_this.item, event.urlAfterRedirects)) {
                _this.expand();
            }
            else {
                _this.collapse();
            }
        });
        // Listen for collapsing of any navigation item
        this._fuseNavigationService.onItemCollapsed
            .pipe(operators_1.takeUntil(this._unsubscribeAll))
            .subscribe(function (clickedItem) {
            if (clickedItem && clickedItem.children) {
                // Check if the clicked item is one
                // of the children of this item
                if (_this.isChildrenOf(_this.item, clickedItem)) {
                    return;
                }
                // Check if the url can be found in
                // one of the children of this item
                if (_this.isUrlInChildren(_this.item, _this._router.url)) {
                    return;
                }
                // If the clicked item is not this item, collapse...
                if (_this.item !== clickedItem) {
                    _this.collapse();
                }
            }
        });
        // Check if the url can be found in
        // one of the children of this item
        if (this.isUrlInChildren(this.item, this._router.url)) {
            this.expand();
        }
        else {
            this.collapse();
        }
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
    FuseNavVerticalCollapsableComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Toggle collapse
     *
     * @param ev
     */
    FuseNavVerticalCollapsableComponent.prototype.toggleOpen = function (ev) {
        ev.preventDefault();
        this.isOpen = !this.isOpen;
        // Navigation collapse toggled...
        this._fuseNavigationService.onItemCollapsed.next(this.item);
        this._fuseNavigationService.onItemCollapseToggled.next();
    };
    /**
     * Expand the collapsable navigation
     */
    FuseNavVerticalCollapsableComponent.prototype.expand = function () {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;
        // Mark for check
        this._changeDetectorRef.markForCheck();
        this._fuseNavigationService.onItemCollapseToggled.next();
    };
    /**
     * Collapse the collapsable navigation
     */
    FuseNavVerticalCollapsableComponent.prototype.collapse = function () {
        if (!this.isOpen) {
            return;
        }
        this.isOpen = false;
        // Mark for check
        this._changeDetectorRef.markForCheck();
        this._fuseNavigationService.onItemCollapseToggled.next();
    };
    /**
     * Check if the given parent has the
     * given item in one of its children
     *
     * @param parent
     * @param item
     * @returns {boolean}
     */
    FuseNavVerticalCollapsableComponent.prototype.isChildrenOf = function (parent, item) {
        var children = parent.children;
        if (!children) {
            return false;
        }
        if (children.indexOf(item) > -1) {
            return true;
        }
        for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
            var child = children_1[_i];
            if (child.children) {
                if (this.isChildrenOf(child, item)) {
                    return true;
                }
            }
        }
        return false;
    };
    /**
     * Check if the given url can be found
     * in one of the given parent's children
     *
     * @param parent
     * @param url
     * @returns {boolean}
     */
    FuseNavVerticalCollapsableComponent.prototype.isUrlInChildren = function (parent, url) {
        var children = parent.children;
        if (!children) {
            return false;
        }
        for (var _i = 0, children_2 = children; _i < children_2.length; _i++) {
            var child = children_2[_i];
            if (child.children) {
                if (this.isUrlInChildren(child, url)) {
                    return true;
                }
            }
            if (child.url === url || url.includes(child.url)) {
                return true;
            }
        }
        return false;
    };
    __decorate([
        core_1.Input()
    ], FuseNavVerticalCollapsableComponent.prototype, "item");
    __decorate([
        core_1.HostBinding('class')
    ], FuseNavVerticalCollapsableComponent.prototype, "classes");
    __decorate([
        core_1.HostBinding('class.open')
    ], FuseNavVerticalCollapsableComponent.prototype, "isOpen");
    FuseNavVerticalCollapsableComponent = __decorate([
        core_1.Component({
            selector: 'fuse-nav-vertical-collapsable',
            templateUrl: './collapsable.component.html',
            styleUrls: ['./collapsable.component.scss'],
            animations: animations_1.fuseAnimations
        })
    ], FuseNavVerticalCollapsableComponent);
    return FuseNavVerticalCollapsableComponent;
}());
exports.FuseNavVerticalCollapsableComponent = FuseNavVerticalCollapsableComponent;