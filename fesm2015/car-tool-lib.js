import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';

class CarToolLibService {
    constructor() { }
}
CarToolLibService.ɵfac = function CarToolLibService_Factory(t) { return new (t || CarToolLibService)(); };
CarToolLibService.ɵprov = ɵɵdefineInjectable({ token: CarToolLibService, factory: CarToolLibService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CarToolLibService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class CarToolLibComponent {
    constructor() { }
    ngOnInit() {
    }
}
CarToolLibComponent.ɵfac = function CarToolLibComponent_Factory(t) { return new (t || CarToolLibComponent)(); };
CarToolLibComponent.ɵcmp = ɵɵdefineComponent({ type: CarToolLibComponent, selectors: [["lib-car-tool-lib"]], decls: 2, vars: 0, template: function CarToolLibComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵtext(1, " car-tool-lib works! ");
        ɵɵelementEnd();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CarToolLibComponent, [{
        type: Component,
        args: [{
                selector: 'lib-car-tool-lib',
                template: `
    <p>
      car-tool-lib works!
    </p>
  `,
                styles: []
            }]
    }], function () { return []; }, null); })();

class CarToolLibModule {
}
CarToolLibModule.ɵmod = ɵɵdefineNgModule({ type: CarToolLibModule });
CarToolLibModule.ɵinj = ɵɵdefineInjector({ factory: function CarToolLibModule_Factory(t) { return new (t || CarToolLibModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(CarToolLibModule, { declarations: [CarToolLibComponent], exports: [CarToolLibComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(CarToolLibModule, [{
        type: NgModule,
        args: [{
                declarations: [CarToolLibComponent],
                imports: [],
                exports: [CarToolLibComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of car-tool-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CarToolLibComponent, CarToolLibModule, CarToolLibService };
//# sourceMappingURL=car-tool-lib.js.map
