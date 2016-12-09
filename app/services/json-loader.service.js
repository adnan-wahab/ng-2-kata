"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Observable_1 = require("rxjs/Observable");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require('rxjs/add/operator/toPromise');
require('rxjs/add/observable/of');
require('rxjs/add/observable/from');
require('rxjs/add/observable/merge');
require('rxjs/add/operator/map');
var jsonLoaderService = (function () {
    function jsonLoaderService(http) {
        this.http = http;
    }
    jsonLoaderService.prototype.getStuff = function (done) {
        var result = {};
        return Observable_1.Observable.merge(this.http.get("../fixtures/variables.json"), this.http.get("../fixtures/order.json")).map(function (x) { return x.json(); })
            .map(function (x) {
            result[x.index ? 'index' : 'graph'] = x;
        })
            .subscribe(function (x) {
        }, function (err) {
            console.log('Error: ' + err);
        }, function () {
            done(result);
        });
    };
    jsonLoaderService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], jsonLoaderService);
    return jsonLoaderService;
}());
exports.jsonLoaderService = jsonLoaderService;
//# sourceMappingURL=json-loader.service.js.map