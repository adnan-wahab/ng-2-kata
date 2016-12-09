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
var core_1 = require('@angular/core');
var json_loader_service_1 = require('./json-loader.service');
var varIndexService = (function () {
    function varIndexService(json) {
        var _this = this;
        this.json = json;
        this.json.getStuff(function (res) {
            _this.index = res.index;
            _this.graph = res.graph;
        });
    }
    varIndexService.prototype.getVar = function (index) {
        return this.graph[index];
    };
    varIndexService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [json_loader_service_1.jsonLoaderService])
    ], varIndexService);
    return varIndexService;
}());
exports.varIndexService = varIndexService;
//# sourceMappingURL=var-by-index.service.js.map