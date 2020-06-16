(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('car-tool-lib', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['car-tool-lib'] = {}, global.ng.core));
}(this, (function (exports, core) { 'use strict';

    var CarToolLibService = /** @class */ (function () {
        function CarToolLibService() {
        }
        CarToolLibService.ɵfac = function CarToolLibService_Factory(t) { return new (t || CarToolLibService)(); };
        CarToolLibService.ɵprov = core.ɵɵdefineInjectable({ token: CarToolLibService, factory: CarToolLibService.ɵfac, providedIn: 'root' });
        return CarToolLibService;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(CarToolLibService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return []; }, null); })();

    var CarToolLibComponent = /** @class */ (function () {
        function CarToolLibComponent() {
        }
        CarToolLibComponent.prototype.ngOnInit = function () {
        };
        CarToolLibComponent.ɵfac = function CarToolLibComponent_Factory(t) { return new (t || CarToolLibComponent)(); };
        CarToolLibComponent.ɵcmp = core.ɵɵdefineComponent({ type: CarToolLibComponent, selectors: [["lib-car-tool-lib"]], decls: 2, vars: 0, template: function CarToolLibComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "p");
                core.ɵɵtext(1, " car-tool-lib works! ");
                core.ɵɵelementEnd();
            } }, encapsulation: 2 });
        return CarToolLibComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(CarToolLibComponent, [{
            type: core.Component,
            args: [{
                    selector: 'lib-car-tool-lib',
                    template: "\n    <p>\n      car-tool-lib works!\n    </p>\n  ",
                    styles: []
                }]
        }], function () { return []; }, null); })();

    var CarToolLibModule = /** @class */ (function () {
        function CarToolLibModule() {
        }
        CarToolLibModule.ɵmod = core.ɵɵdefineNgModule({ type: CarToolLibModule });
        CarToolLibModule.ɵinj = core.ɵɵdefineInjector({ factory: function CarToolLibModule_Factory(t) { return new (t || CarToolLibModule)(); }, imports: [[]] });
        return CarToolLibModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(CarToolLibModule, { declarations: [CarToolLibComponent], exports: [CarToolLibComponent] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(CarToolLibModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [CarToolLibComponent],
                    imports: [],
                    exports: [CarToolLibComponent]
                }]
        }], null, null); })();

    exports.CarToolLibComponent = CarToolLibComponent;
    exports.CarToolLibModule = CarToolLibModule;
    exports.CarToolLibService = CarToolLibService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=car-tool-lib.umd.js.map
