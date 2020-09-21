"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TimezoneDatePipe = void 0;
var core_1 = require("@angular/core");
var moment = require("moment-timezone");
// import { AuthState } from '../states/auth.state';
var TimezoneDatePipe = /** @class */ (function () {
    function TimezoneDatePipe(_store) {
        this._store = _store;
        this.timezone = 'Asia/Manila';
    }
    TimezoneDatePipe.prototype.transform = function (value) {
        // const auth = this._store.selectSnapshot(AuthState.auth);
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var format = args[0], zone = args[1];
        if (!this._isDateValid(value)) {
            return value;
        }
        var tz = moment.utc(value);
        var timezone = this.timezone;
        var userTimezone = null; // auth.meta.timezone;
        if (userTimezone) {
            timezone = userTimezone;
        }
        if (zone && zone === 'none') {
            tz = moment(value);
        }
        else {
            tz = moment(tz).tz(timezone);
        }
        if (format === 'ago') {
            return tz.fromNow();
        }
        return tz.format(format);
    };
    TimezoneDatePipe.prototype._isDateValid = function (date) {
        return moment(new Date(date)).isValid();
    };
    TimezoneDatePipe = __decorate([
        core_1.Pipe({
            name: 'tzDate'
        })
    ], TimezoneDatePipe);
    return TimezoneDatePipe;
}());
exports.TimezoneDatePipe = TimezoneDatePipe;
