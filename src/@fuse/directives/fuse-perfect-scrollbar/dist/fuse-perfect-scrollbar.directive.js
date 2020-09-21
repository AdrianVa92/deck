"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FusePerfectScrollbarDirective = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var perfect_scrollbar_1 = require("perfect-scrollbar");
var _ = require("lodash");
var fuse_perfect_scrollbar_interfaces_1 = require("projects/deck/src/@fuse/directives/fuse-perfect-scrollbar/fuse-perfect-scrollbar.interfaces");
var FusePerfectScrollbarDirective = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {ElementRef} elementRef
     * @param {FuseConfigService} _fuseConfigService
     * @param {Platform} _platform
     * @param {Router} _router
     */
    function FusePerfectScrollbarDirective(elementRef, _fuseConfigService, _platform, _router) {
        this.elementRef = elementRef;
        this._fuseConfigService = _fuseConfigService;
        this._platform = _platform;
        this._router = _router;
        // Set the defaults
        this.isInitialized = false;
        this.isMobile = false;
        // Set the private defaults
        this._animation = null;
        this._enabled = false;
        this._debouncedUpdate = _.debounce(this.update, 150);
        this._options = {
            updateOnRouteChange: false
        };
        this._unsubscribeAll = new rxjs_1.Subject();
    }
    Object.defineProperty(FusePerfectScrollbarDirective.prototype, "fusePerfectScrollbarOptions", {
        get: function () {
            // Return the options
            return this._options;
        },
        // -----------------------------------------------------------------------------------------------------
        // @ Accessors
        // -----------------------------------------------------------------------------------------------------
        /**
         * Perfect Scrollbar options
         *
         * @param value
         */
        set: function (value) {
            var _this = this;
            // Merge the options
            this._options = _.merge({}, this._options, value);
            // Destroy and re-init the PerfectScrollbar to update its options
            setTimeout(function () {
                _this._destroy();
            });
            setTimeout(function () {
                _this._init();
            });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FusePerfectScrollbarDirective.prototype, "enabled", {
        get: function () {
            // Return the enabled status
            return this._enabled;
        },
        /**
         * Is enabled
         *
         * @param {boolean | ""} value
         */
        set: function (value) {
            // If nothing is provided with the directive (empty string),
            // we will take that as a true
            if (value === '') {
                value = true;
            }
            // Return, if both values are the same
            if (this.enabled === value) {
                return;
            }
            // Store the value
            this._enabled = value;
            // If enabled...
            if (this.enabled) {
                // Init the directive
                this._init();
            }
            else {
                // Otherwise destroy it
                this._destroy();
            }
        },
        enumerable: false,
        configurable: true
    });
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    FusePerfectScrollbarDirective.prototype.ngOnInit = function () {
        var _this = this;
        // Subscribe to window resize event
        rxjs_1.fromEvent(window, 'resize')
            .pipe(operators_1.takeUntil(this._unsubscribeAll), operators_1.debounceTime(150))
            .subscribe(function () {
            // Update the PerfectScrollbar
            _this.update();
        });
    };
    /**
     * After view init
     */
    FusePerfectScrollbarDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        // Check if scrollbars enabled or not from the main config
        this._fuseConfigService.config
            .pipe(operators_1.takeUntil(this._unsubscribeAll))
            .subscribe(function (settings) {
            _this.enabled = settings.customScrollbars;
        });
        // Scroll to the top on every route change
        if (this.fusePerfectScrollbarOptions.updateOnRouteChange) {
            this._router.events
                .pipe(operators_1.takeUntil(this._unsubscribeAll), operators_1.filter(function (event) { return event instanceof router_1.NavigationEnd; }))
                .subscribe(function () {
                setTimeout(function () {
                    _this.scrollToTop();
                    _this.update();
                }, 0);
            });
        }
    };
    /**
     * On destroy
     */
    FusePerfectScrollbarDirective.prototype.ngOnDestroy = function () {
        this._destroy();
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Initialize
     *
     * @private
     */
    FusePerfectScrollbarDirective.prototype._init = function () {
        // Return, if already initialized
        if (this.isInitialized) {
            return;
        }
        // Check if is mobile
        if (this._platform.ANDROID || this._platform.IOS) {
            this.isMobile = true;
        }
        // Return if it's mobile
        if (this.isMobile) {
            // Return...
            return;
        }
        // Set as initialized
        this.isInitialized = true;
        // Initialize the perfect-scrollbar
        this.ps = new perfect_scrollbar_1["default"](this.elementRef.nativeElement, __assign({}, this.fusePerfectScrollbarOptions));
        // Unbind 'keydown' events of PerfectScrollbar since it causes an extremely
        // high CPU usage on Angular Material inputs.
        // Loop through all the event elements of this PerfectScrollbar instance
        this.ps.event.eventElements.forEach(function (eventElement) {
            // If we hit to the element with a 'keydown' event...
            if (typeof eventElement.handlers['keydown'] !== 'undefined') {
                // Unbind it
                eventElement.element.removeEventListener('keydown', eventElement.handlers['keydown'][0]);
            }
        });
    };
    /**
     * Destroy
     *
     * @private
     */
    FusePerfectScrollbarDirective.prototype._destroy = function () {
        if (!this.isInitialized || !this.ps) {
            return;
        }
        // Destroy the perfect-scrollbar
        this.ps.destroy();
        // Clean up
        this.ps = null;
        this.isInitialized = false;
    };
    /**
     * Update scrollbars on window resize
     *
     * @private
     */
    FusePerfectScrollbarDirective.prototype._updateOnResize = function () {
        this._debouncedUpdate();
    };
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Document click
     *
     * @param {Event} event
     */
    FusePerfectScrollbarDirective.prototype.documentClick = function (event) {
        if (!this.isInitialized || !this.ps) {
            return;
        }
        // Update the scrollbar on document click..
        // This isn't the most elegant solution but there is no other way
        // of knowing when the contents of the scrollable container changes.
        // Therefore, we update scrollbars on every document click.
        this.ps.update();
    };
    /**
     * Update the scrollbar
     */
    FusePerfectScrollbarDirective.prototype.update = function () {
        if (!this.isInitialized) {
            return;
        }
        // Update the perfect-scrollbar
        this.ps.update();
    };
    /**
     * Destroy the scrollbar
     */
    FusePerfectScrollbarDirective.prototype.destroy = function () {
        this.ngOnDestroy();
    };
    /**
     * Returns the geometry of the scrollable element
     *
     * @param prefix
     */
    FusePerfectScrollbarDirective.prototype.geometry = function (prefix) {
        if (prefix === void 0) { prefix = 'scroll'; }
        return new fuse_perfect_scrollbar_interfaces_1.FusePerfectScrollbarGeometry(this.elementRef.nativeElement[prefix + 'Left'], this.elementRef.nativeElement[prefix + 'Top'], this.elementRef.nativeElement[prefix + 'Width'], this.elementRef.nativeElement[prefix + 'Height']);
    };
    /**
     * Returns the position of the scrollable element
     *
     * @param absolute
     */
    FusePerfectScrollbarDirective.prototype.position = function (absolute) {
        if (absolute === void 0) { absolute = false; }
        if (!absolute && this.ps) {
            return new fuse_perfect_scrollbar_interfaces_1.FusePerfectScrollbarPosition(this.ps.reach.x || 0, this.ps.reach.y || 0);
        }
        else {
            return new fuse_perfect_scrollbar_interfaces_1.FusePerfectScrollbarPosition(this.elementRef.nativeElement.scrollLeft, this.elementRef.nativeElement.scrollTop);
        }
    };
    /**
     * Scroll to
     *
     * @param x
     * @param y
     * @param speed
     */
    FusePerfectScrollbarDirective.prototype.scrollTo = function (x, y, speed) {
        if (y == null && speed == null) {
            this.animateScrolling('scrollTop', x, speed);
        }
        else {
            if (x != null) {
                this.animateScrolling('scrollLeft', x, speed);
            }
            if (y != null) {
                this.animateScrolling('scrollTop', y, speed);
            }
        }
    };
    /**
     * Scroll to X
     *
     * @param {number} x
     * @param {number} speed
     */
    FusePerfectScrollbarDirective.prototype.scrollToX = function (x, speed) {
        this.animateScrolling('scrollLeft', x, speed);
    };
    /**
     * Scroll to Y
     *
     * @param {number} y
     * @param {number} speed
     */
    FusePerfectScrollbarDirective.prototype.scrollToY = function (y, speed) {
        this.animateScrolling('scrollTop', y, speed);
    };
    /**
     * Scroll to top
     *
     * @param {number} offset
     * @param {number} speed
     */
    FusePerfectScrollbarDirective.prototype.scrollToTop = function (offset, speed) {
        this.animateScrolling('scrollTop', (offset || 0), speed);
    };
    /**
     * Scroll to left
     *
     * @param {number} offset
     * @param {number} speed
     */
    FusePerfectScrollbarDirective.prototype.scrollToLeft = function (offset, speed) {
        this.animateScrolling('scrollLeft', (offset || 0), speed);
    };
    /**
     * Scroll to right
     *
     * @param {number} offset
     * @param {number} speed
     */
    FusePerfectScrollbarDirective.prototype.scrollToRight = function (offset, speed) {
        var left = this.elementRef.nativeElement.scrollWidth - this.elementRef.nativeElement.clientWidth;
        this.animateScrolling('scrollLeft', left - (offset || 0), speed);
    };
    /**
     * Scroll to bottom
     *
     * @param {number} offset
     * @param {number} speed
     */
    FusePerfectScrollbarDirective.prototype.scrollToBottom = function (offset, speed) {
        var top = this.elementRef.nativeElement.scrollHeight - this.elementRef.nativeElement.clientHeight;
        this.animateScrolling('scrollTop', top - (offset || 0), speed);
    };
    /**
     * Scroll to element
     *
     * @param qs
     * @param offset
     * @param speed
     */
    FusePerfectScrollbarDirective.prototype.scrollToElement = function (qs, offset, speed) {
        var element = this.elementRef.nativeElement.querySelector(qs);
        if (!element) {
            return;
        }
        var elementPos = element.getBoundingClientRect();
        var scrollerPos = this.elementRef.nativeElement.getBoundingClientRect();
        if (this.elementRef.nativeElement.classList.contains('ps--active-x')) {
            var currentPos = this.elementRef.nativeElement['scrollLeft'];
            var position = elementPos.left - scrollerPos.left + currentPos;
            this.animateScrolling('scrollLeft', position + (offset || 0), speed);
        }
        if (this.elementRef.nativeElement.classList.contains('ps--active-y')) {
            var currentPos = this.elementRef.nativeElement['scrollTop'];
            var position = elementPos.top - scrollerPos.top + currentPos;
            this.animateScrolling('scrollTop', position + (offset || 0), speed);
        }
    };
    /**
     * Animate scrolling
     *
     * @param target
     * @param value
     * @param speed
     */
    FusePerfectScrollbarDirective.prototype.animateScrolling = function (target, value, speed) {
        var _this = this;
        if (this._animation) {
            window.cancelAnimationFrame(this._animation);
            this._animation = null;
        }
        if (!speed || typeof window === 'undefined') {
            this.elementRef.nativeElement[target] = value;
        }
        else if (value !== this.elementRef.nativeElement[target]) {
            var newValue_1 = 0;
            var scrollCount_1 = 0;
            var oldTimestamp_1 = performance.now();
            var oldValue_1 = this.elementRef.nativeElement[target];
            var cosParameter_1 = (oldValue_1 - value) / 2;
            var step_1 = function (newTimestamp) {
                scrollCount_1 += Math.PI / (speed / (newTimestamp - oldTimestamp_1));
                newValue_1 = Math.round(value + cosParameter_1 + cosParameter_1 * Math.cos(scrollCount_1));
                // Only continue animation if scroll position has not changed
                if (_this.elementRef.nativeElement[target] === oldValue_1) {
                    if (scrollCount_1 >= Math.PI) {
                        _this.animateScrolling(target, value, 0);
                    }
                    else {
                        _this.elementRef.nativeElement[target] = newValue_1;
                        // On a zoomed out page the resulting offset may differ
                        oldValue_1 = _this.elementRef.nativeElement[target];
                        oldTimestamp_1 = newTimestamp;
                        _this._animation = window.requestAnimationFrame(step_1);
                    }
                }
            };
            window.requestAnimationFrame(step_1);
        }
    };
    __decorate([
        core_1.Input()
    ], FusePerfectScrollbarDirective.prototype, "fusePerfectScrollbarOptions");
    __decorate([
        core_1.Input('fusePerfectScrollbar')
    ], FusePerfectScrollbarDirective.prototype, "enabled");
    __decorate([
        core_1.HostListener('window:resize')
    ], FusePerfectScrollbarDirective.prototype, "_updateOnResize");
    __decorate([
        core_1.HostListener('document:click', ['$event'])
    ], FusePerfectScrollbarDirective.prototype, "documentClick");
    FusePerfectScrollbarDirective = __decorate([
        core_1.Directive({
            selector: '[fusePerfectScrollbar]'
        })
    ], FusePerfectScrollbarDirective);
    return FusePerfectScrollbarDirective;
}());
exports.FusePerfectScrollbarDirective = FusePerfectScrollbarDirective;
