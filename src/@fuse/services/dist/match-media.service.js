"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FuseMatchMediaService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var FuseMatchMediaService = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {MediaObserver} _mediaObserver
     */
    function FuseMatchMediaService(_mediaObserver) {
        this._mediaObserver = _mediaObserver;
        this.onMediaChange = new rxjs_1.BehaviorSubject('');
        // Set the defaults
        this.activeMediaQuery = '';
        // Initialize
        this._init();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Initialize
     *
     * @private
     */
    FuseMatchMediaService.prototype._init = function () {
        var _this = this;
        this._mediaObserver.media$
            .pipe(operators_1.debounceTime(500), operators_1.distinctUntilChanged())
            .subscribe(function (change) {
            if (_this.activeMediaQuery !== change.mqAlias) {
                _this.activeMediaQuery = change.mqAlias;
                _this.onMediaChange.next(change.mqAlias);
            }
        });
    };
    FuseMatchMediaService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], FuseMatchMediaService);
    return FuseMatchMediaService;
}());
exports.FuseMatchMediaService = FuseMatchMediaService;
