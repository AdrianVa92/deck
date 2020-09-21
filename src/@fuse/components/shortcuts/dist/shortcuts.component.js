"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FuseShortcutsComponent = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var FuseShortcutsComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {CookieService} _cookieService
     * @param {FuseMatchMediaService} _fuseMatchMediaService
     * @param {FuseNavigationService} _fuseNavigationService
     * @param {MediaObserver} _mediaObserver
     * @param {Renderer2} _renderer
     */
    function FuseShortcutsComponent(_cookieService, _fuseMatchMediaService, _fuseNavigationService, _mediaObserver, _renderer) {
        this._cookieService = _cookieService;
        this._fuseMatchMediaService = _fuseMatchMediaService;
        this._fuseNavigationService = _fuseNavigationService;
        this._mediaObserver = _mediaObserver;
        this._renderer = _renderer;
        // Set the defaults
        this.shortcutItems = [];
        this.searching = false;
        this.mobileShortcutsPanelActive = false;
        // Set the private defaults
        this._unsubscribeAll = new rxjs_1.Subject();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    FuseShortcutsComponent.prototype.ngOnInit = function () {
        // Get the navigation items and flatten them
        this.filteredNavigationItems = this.navigationItems = this._fuseNavigationService.getFlatNavigation(this.navigation);
        if (this._cookieService.check('FUSE2.shortcuts')) {
            this.shortcutItems = JSON.parse(this._cookieService.get('FUSE2.shortcuts'));
        }
        else {
            // User's shortcut items
            this.shortcutItems = [
                {
                    title: 'Calendar',
                    type: 'item',
                    icon: 'today',
                    url: '/apps/calendar'
                },
                {
                    title: 'Mail',
                    type: 'item',
                    icon: 'email',
                    url: '/apps/mail'
                },
                {
                    title: 'Contacts',
                    type: 'item',
                    icon: 'account_box',
                    url: '/apps/contacts'
                },
                {
                    title: 'To-Do',
                    type: 'item',
                    icon: 'check_box',
                    url: '/apps/todo'
                }
            ];
        }
    };
    FuseShortcutsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // Subscribe to media changes
        this._fuseMatchMediaService.onMediaChange
            .pipe(operators_1.takeUntil(this._unsubscribeAll))
            .subscribe(function () {
            if (_this._mediaObserver.isActive('gt-sm')) {
                _this.hideMobileShortcutsPanel();
            }
        });
    };
    /**
     * On destroy
     */
    FuseShortcutsComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Search
     *
     * @param event
     */
    FuseShortcutsComponent.prototype.search = function (event) {
        var value = event.target.value.toLowerCase();
        if (value === '') {
            this.searching = false;
            this.filteredNavigationItems = this.navigationItems;
            return;
        }
        this.searching = true;
        this.filteredNavigationItems = this.navigationItems.filter(function (navigationItem) {
            return navigationItem.title.toLowerCase().includes(value);
        });
    };
    /**
     * Toggle shortcut
     *
     * @param event
     * @param itemToToggle
     */
    FuseShortcutsComponent.prototype.toggleShortcut = function (event, itemToToggle) {
        event.stopPropagation();
        for (var i = 0; i < this.shortcutItems.length; i++) {
            if (this.shortcutItems[i].url === itemToToggle.url) {
                this.shortcutItems.splice(i, 1);
                // Save to the cookies
                this._cookieService.set('FUSE2.shortcuts', JSON.stringify(this.shortcutItems));
                return;
            }
        }
        this.shortcutItems.push(itemToToggle);
        // Save to the cookies
        this._cookieService.set('FUSE2.shortcuts', JSON.stringify(this.shortcutItems));
    };
    /**
     * Is in shortcuts?
     *
     * @param navigationItem
     * @returns {any}
     */
    FuseShortcutsComponent.prototype.isInShortcuts = function (navigationItem) {
        return this.shortcutItems.find(function (item) {
            return item.url === navigationItem.url;
        });
    };
    /**
     * On menu open
     */
    FuseShortcutsComponent.prototype.onMenuOpen = function () {
        var _this = this;
        setTimeout(function () {
            _this.searchInputField.nativeElement.focus();
        });
    };
    /**
     * Show mobile shortcuts
     */
    FuseShortcutsComponent.prototype.showMobileShortcutsPanel = function () {
        this.mobileShortcutsPanelActive = true;
        this._renderer.addClass(this.shortcutsEl.nativeElement, 'show-mobile-panel');
    };
    /**
     * Hide mobile shortcuts
     */
    FuseShortcutsComponent.prototype.hideMobileShortcutsPanel = function () {
        this.mobileShortcutsPanelActive = false;
        this._renderer.removeClass(this.shortcutsEl.nativeElement, 'show-mobile-panel');
    };
    __decorate([
        core_1.Input()
    ], FuseShortcutsComponent.prototype, "navigation");
    __decorate([
        core_1.ViewChild('searchInput')
    ], FuseShortcutsComponent.prototype, "searchInputField");
    __decorate([
        core_1.ViewChild('shortcuts')
    ], FuseShortcutsComponent.prototype, "shortcutsEl");
    FuseShortcutsComponent = __decorate([
        core_1.Component({
            selector: 'fuse-shortcuts',
            templateUrl: './shortcuts.component.html',
            styleUrls: ['./shortcuts.component.scss']
        })
    ], FuseShortcutsComponent);
    return FuseShortcutsComponent;
}());
exports.FuseShortcutsComponent = FuseShortcutsComponent;
