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
wjcChartInteraction=require('wijmo/wijmo.chart.interaction'),
core_1=require('@angular/core'),
core_2=require('@angular/core'),
core_3=require('@angular/core'),
common_1=require('@angular/common'),
wijmo_angular2_directiveBase_1=require('wijmo/wijmo.angular2.directiveBase'),
WjFlexChartRangeSelector,
WjFlexChartGestures,
moduleExports,
WjChartInteractionModule;
exports.wjFlexChartRangeSelectorMeta = {
selector: 'wj-flex-chart-range-selector', template: "", inputs: ['wjProperty', 'isVisible', 'min', 'max', 'orientation', 'seamless', 'minScale', 'maxScale', ], outputs: ['initialized', 'rangeChangedNg: rangeChanged', ], providers: []
};
WjFlexChartRangeSelector = function(_super)
{
function WjFlexChartRangeSelector(elRef, injector, parentCmp)
{
_super.call(this, parentCmp);
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.rangeChangedNg = new core_1.EventEmitter(!1);
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp);
this.created()
}
return __extends(WjFlexChartRangeSelector, _super), WjFlexChartRangeSelector.prototype.created = function(){}, WjFlexChartRangeSelector.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexChartRangeSelector.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexChartRangeSelector.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexChartRangeSelector.meta = {outputs: exports.wjFlexChartRangeSelectorMeta.outputs}, WjFlexChartRangeSelector.decorators = [{
type: core_1.Component, args: [{
selector: exports.wjFlexChartRangeSelectorMeta.selector, template: exports.wjFlexChartRangeSelectorMeta.template, inputs: exports.wjFlexChartRangeSelectorMeta.inputs, outputs: exports.wjFlexChartRangeSelectorMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexChartRangeSelector
})
}].concat(exports.wjFlexChartRangeSelectorMeta.providers)
}, ]
}, ], WjFlexChartRangeSelector.ctorParameters = [{
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
}, ], WjFlexChartRangeSelector
}(wjcChartInteraction.RangeSelector);
exports.WjFlexChartRangeSelector = WjFlexChartRangeSelector;
exports.wjFlexChartGesturesMeta = {
selector: 'wj-flex-chart-gestures', template: "", inputs: ['wjProperty', 'mouseAction', 'interactiveAxes', 'enable', 'scaleX', 'scaleY', 'posX', 'posY', ], outputs: ['initialized', ], providers: []
};
WjFlexChartGestures = function(_super)
{
function WjFlexChartGestures(elRef, injector, parentCmp)
{
_super.call(this, parentCmp);
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp);
this.created()
}
return __extends(WjFlexChartGestures, _super), WjFlexChartGestures.prototype.created = function(){}, WjFlexChartGestures.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexChartGestures.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexChartGestures.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexChartGestures.meta = {outputs: exports.wjFlexChartGesturesMeta.outputs}, WjFlexChartGestures.decorators = [{
type: core_1.Component, args: [{
selector: exports.wjFlexChartGesturesMeta.selector, template: exports.wjFlexChartGesturesMeta.template, inputs: exports.wjFlexChartGesturesMeta.inputs, outputs: exports.wjFlexChartGesturesMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexChartGestures
})
}].concat(exports.wjFlexChartGesturesMeta.providers)
}, ]
}, ], WjFlexChartGestures.ctorParameters = [{
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
}, ], WjFlexChartGestures
}(wjcChartInteraction.ChartGestures);
exports.WjFlexChartGestures = WjFlexChartGestures;
moduleExports = [WjFlexChartRangeSelector, WjFlexChartGestures];
WjChartInteractionModule = function()
{
function WjChartInteractionModule(){}
return WjChartInteractionModule.decorators = [{
type: core_1.NgModule, args: [{
imports: [wijmo_angular2_directiveBase_1.WjDirectiveBaseModule, common_1.CommonModule], declarations: moduleExports.slice(), exports: moduleExports.slice()
}, ]
}, ], WjChartInteractionModule.ctorParameters = [], WjChartInteractionModule
}();
exports.WjChartInteractionModule = WjChartInteractionModule