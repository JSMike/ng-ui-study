/*
    *
    * Wijmo Library 5.20171.282
    * http://wijmo.com/
    *
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    *
    * Licensed under the Wijmo Commercial License.
    * sales@wijmo.com
    * wijmo.com/products/wijmo-5/license/
    *
    */
"use strict";
var __extends=this && this.__extends || function(d, b)
{
function __()
{
this.constructor = d
}
for (var p in b)
b.hasOwnProperty(p) && (d[p] = b[p]);
d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __)
},
wjcChartAnimation=require('wijmo/wijmo.chart.animation'),
core_1=require('@angular/core'),
core_2=require('@angular/core'),
core_3=require('@angular/core'),
common_1=require('@angular/common'),
wijmo_angular2_directiveBase_1=require('wijmo/wijmo.angular2.directiveBase'),
WjFlexChartAnimation,
moduleExports,
WjChartAnimationModule;
exports.wjFlexChartAnimationMeta = {
selector: 'wj-flex-chart-animation', template: "", inputs: ['wjProperty', 'animationMode', 'easing', 'duration', 'axisAnimation', ], outputs: ['initialized', ], providers: []
};
WjFlexChartAnimation = function(_super)
{
function WjFlexChartAnimation(elRef, injector, parentCmp)
{
_super.call(this, parentCmp);
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp);
this.created()
}
return __extends(WjFlexChartAnimation, _super), WjFlexChartAnimation.prototype.created = function(){}, WjFlexChartAnimation.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexChartAnimation.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexChartAnimation.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexChartAnimation.meta = {outputs: exports.wjFlexChartAnimationMeta.outputs}, WjFlexChartAnimation.decorators = [{
type: core_1.Component, args: [{
selector: exports.wjFlexChartAnimationMeta.selector, template: exports.wjFlexChartAnimationMeta.template, inputs: exports.wjFlexChartAnimationMeta.inputs, outputs: exports.wjFlexChartAnimationMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexChartAnimation
})
}].concat(exports.wjFlexChartAnimationMeta.providers)
}, ]
}, ], WjFlexChartAnimation.ctorParameters = [{
type: core_2.ElementRef, decorators: [{
type: core_3.Inject, args: [core_2.ElementRef, ]
}, ]
}, {
type: core_2.Injector, decorators: [{
type: core_3.Inject, args: [core_2.Injector, ]
}, ]
}, {
type: undefined, decorators: [{
type: core_3.Inject, args: ['WjComponent', ]
}, {type: core_3.SkipSelf}, {type: core_2.Optional}, ]
}, ], WjFlexChartAnimation
}(wjcChartAnimation.ChartAnimation);
exports.WjFlexChartAnimation = WjFlexChartAnimation;
moduleExports = [WjFlexChartAnimation];
WjChartAnimationModule = function()
{
function WjChartAnimationModule(){}
return WjChartAnimationModule.decorators = [{
type: core_1.NgModule, args: [{
imports: [wijmo_angular2_directiveBase_1.WjDirectiveBaseModule, common_1.CommonModule], declarations: moduleExports.slice(), exports: moduleExports.slice()
}, ]
}, ], WjChartAnimationModule.ctorParameters = [], WjChartAnimationModule
}();
exports.WjChartAnimationModule = WjChartAnimationModule