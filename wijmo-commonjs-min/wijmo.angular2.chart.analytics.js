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
wjcChartAnalytics=require('wijmo/wijmo.chart.analytics'),
core_1=require('@angular/core'),
core_2=require('@angular/core'),
core_3=require('@angular/core'),
common_1=require('@angular/common'),
wijmo_angular2_directiveBase_1=require('wijmo/wijmo.angular2.directiveBase'),
WjFlexChartTrendLine,
WjFlexChartMovingAverage,
WjFlexChartYFunctionSeries,
WjFlexChartParametricFunctionSeries,
WjFlexChartWaterfall,
WjFlexChartBoxWhisker,
WjFlexChartErrorBar,
moduleExports,
WjChartAnalyticsModule;
exports.wjFlexChartTrendLineMeta = {
selector: 'wj-flex-chart-trend-line', template: "", inputs: ['wjProperty', 'axisX', 'axisY', 'binding', 'bindingX', 'cssClass', 'name', 'style', 'altStyle', 'symbolMarker', 'symbolSize', 'symbolStyle', 'visibility', 'itemsSource', 'sampleCount', 'order', 'fitType', ], outputs: ['initialized', 'renderingNg: rendering', 'renderedNg: rendered', 'visibilityChangePC: visibilityChange', ], providers: []
};
WjFlexChartTrendLine = function(_super)
{
function WjFlexChartTrendLine(elRef, injector, parentCmp)
{
_super.call(this);
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.wjProperty = 'series';
this.renderingNg = new core_1.EventEmitter(!1);
this.renderedNg = new core_1.EventEmitter(!1);
this.visibilityChangePC = new core_1.EventEmitter(!1);
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp);
this.created()
}
return __extends(WjFlexChartTrendLine, _super), WjFlexChartTrendLine.prototype.created = function(){}, WjFlexChartTrendLine.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexChartTrendLine.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexChartTrendLine.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexChartTrendLine.meta = {
outputs: exports.wjFlexChartTrendLineMeta.outputs, changeEvents: {'chart.seriesVisibilityChanged': ['visibility']}, siblingId: 'series'
}, WjFlexChartTrendLine.decorators = [{
type: core_1.Component, args: [{
selector: exports.wjFlexChartTrendLineMeta.selector, template: exports.wjFlexChartTrendLineMeta.template, inputs: exports.wjFlexChartTrendLineMeta.inputs, outputs: exports.wjFlexChartTrendLineMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexChartTrendLine
})
}].concat(exports.wjFlexChartTrendLineMeta.providers)
}, ]
}, ], WjFlexChartTrendLine.ctorParameters = [{
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
}, ], WjFlexChartTrendLine
}(wjcChartAnalytics.TrendLine);
exports.WjFlexChartTrendLine = WjFlexChartTrendLine;
exports.wjFlexChartMovingAverageMeta = {
selector: 'wj-flex-chart-moving-average', template: "", inputs: ['wjProperty', 'axisX', 'axisY', 'binding', 'bindingX', 'cssClass', 'name', 'style', 'altStyle', 'symbolMarker', 'symbolSize', 'symbolStyle', 'visibility', 'itemsSource', 'sampleCount', 'period', 'type', ], outputs: ['initialized', 'renderingNg: rendering', 'renderedNg: rendered', 'visibilityChangePC: visibilityChange', ], providers: []
};
WjFlexChartMovingAverage = function(_super)
{
function WjFlexChartMovingAverage(elRef, injector, parentCmp)
{
_super.call(this);
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.wjProperty = 'series';
this.renderingNg = new core_1.EventEmitter(!1);
this.renderedNg = new core_1.EventEmitter(!1);
this.visibilityChangePC = new core_1.EventEmitter(!1);
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp);
this.created()
}
return __extends(WjFlexChartMovingAverage, _super), WjFlexChartMovingAverage.prototype.created = function(){}, WjFlexChartMovingAverage.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexChartMovingAverage.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexChartMovingAverage.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexChartMovingAverage.meta = {
outputs: exports.wjFlexChartMovingAverageMeta.outputs, changeEvents: {'chart.seriesVisibilityChanged': ['visibility']}, siblingId: 'series'
}, WjFlexChartMovingAverage.decorators = [{
type: core_1.Component, args: [{
selector: exports.wjFlexChartMovingAverageMeta.selector, template: exports.wjFlexChartMovingAverageMeta.template, inputs: exports.wjFlexChartMovingAverageMeta.inputs, outputs: exports.wjFlexChartMovingAverageMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexChartMovingAverage
})
}].concat(exports.wjFlexChartMovingAverageMeta.providers)
}, ]
}, ], WjFlexChartMovingAverage.ctorParameters = [{
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
}, ], WjFlexChartMovingAverage
}(wjcChartAnalytics.MovingAverage);
exports.WjFlexChartMovingAverage = WjFlexChartMovingAverage;
exports.wjFlexChartYFunctionSeriesMeta = {
selector: 'wj-flex-chart-y-function-series', template: "", inputs: ['wjProperty', 'axisX', 'axisY', 'binding', 'bindingX', 'cssClass', 'name', 'style', 'altStyle', 'symbolMarker', 'symbolSize', 'symbolStyle', 'visibility', 'itemsSource', 'sampleCount', 'min', 'max', 'func', ], outputs: ['initialized', 'renderingNg: rendering', 'renderedNg: rendered', 'visibilityChangePC: visibilityChange', ], providers: []
};
WjFlexChartYFunctionSeries = function(_super)
{
function WjFlexChartYFunctionSeries(elRef, injector, parentCmp)
{
_super.call(this);
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.wjProperty = 'series';
this.renderingNg = new core_1.EventEmitter(!1);
this.renderedNg = new core_1.EventEmitter(!1);
this.visibilityChangePC = new core_1.EventEmitter(!1);
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp);
this.created()
}
return __extends(WjFlexChartYFunctionSeries, _super), WjFlexChartYFunctionSeries.prototype.created = function(){}, WjFlexChartYFunctionSeries.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexChartYFunctionSeries.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexChartYFunctionSeries.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexChartYFunctionSeries.meta = {
outputs: exports.wjFlexChartYFunctionSeriesMeta.outputs, changeEvents: {'chart.seriesVisibilityChanged': ['visibility']}, siblingId: 'series'
}, WjFlexChartYFunctionSeries.decorators = [{
type: core_1.Component, args: [{
selector: exports.wjFlexChartYFunctionSeriesMeta.selector, template: exports.wjFlexChartYFunctionSeriesMeta.template, inputs: exports.wjFlexChartYFunctionSeriesMeta.inputs, outputs: exports.wjFlexChartYFunctionSeriesMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexChartYFunctionSeries
})
}].concat(exports.wjFlexChartYFunctionSeriesMeta.providers)
}, ]
}, ], WjFlexChartYFunctionSeries.ctorParameters = [{
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
}, ], WjFlexChartYFunctionSeries
}(wjcChartAnalytics.YFunctionSeries);
exports.WjFlexChartYFunctionSeries = WjFlexChartYFunctionSeries;
exports.wjFlexChartParametricFunctionSeriesMeta = {
selector: 'wj-flex-chart-parametric-function-series', template: "", inputs: ['wjProperty', 'axisX', 'axisY', 'binding', 'bindingX', 'cssClass', 'name', 'style', 'altStyle', 'symbolMarker', 'symbolSize', 'symbolStyle', 'visibility', 'itemsSource', 'sampleCount', 'min', 'max', 'func', 'xFunc', 'yFunc', ], outputs: ['initialized', 'renderingNg: rendering', 'renderedNg: rendered', 'visibilityChangePC: visibilityChange', ], providers: []
};
WjFlexChartParametricFunctionSeries = function(_super)
{
function WjFlexChartParametricFunctionSeries(elRef, injector, parentCmp)
{
_super.call(this);
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.wjProperty = 'series';
this.renderingNg = new core_1.EventEmitter(!1);
this.renderedNg = new core_1.EventEmitter(!1);
this.visibilityChangePC = new core_1.EventEmitter(!1);
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp);
this.created()
}
return __extends(WjFlexChartParametricFunctionSeries, _super), WjFlexChartParametricFunctionSeries.prototype.created = function(){}, WjFlexChartParametricFunctionSeries.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexChartParametricFunctionSeries.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexChartParametricFunctionSeries.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexChartParametricFunctionSeries.meta = {
outputs: exports.wjFlexChartParametricFunctionSeriesMeta.outputs, changeEvents: {'chart.seriesVisibilityChanged': ['visibility']}, siblingId: 'series'
}, WjFlexChartParametricFunctionSeries.decorators = [{
type: core_1.Component, args: [{
selector: exports.wjFlexChartParametricFunctionSeriesMeta.selector, template: exports.wjFlexChartParametricFunctionSeriesMeta.template, inputs: exports.wjFlexChartParametricFunctionSeriesMeta.inputs, outputs: exports.wjFlexChartParametricFunctionSeriesMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexChartParametricFunctionSeries
})
}].concat(exports.wjFlexChartParametricFunctionSeriesMeta.providers)
}, ]
}, ], WjFlexChartParametricFunctionSeries.ctorParameters = [{
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
}, ], WjFlexChartParametricFunctionSeries
}(wjcChartAnalytics.ParametricFunctionSeries);
exports.WjFlexChartParametricFunctionSeries = WjFlexChartParametricFunctionSeries;
exports.wjFlexChartWaterfallMeta = {
selector: 'wj-flex-chart-waterfall', template: "", inputs: ['wjProperty', 'axisX', 'axisY', 'binding', 'bindingX', 'cssClass', 'name', 'style', 'altStyle', 'symbolMarker', 'symbolSize', 'symbolStyle', 'visibility', 'itemsSource', 'relativeData', 'start', 'startLabel', 'showTotal', 'totalLabel', 'showIntermediateTotal', 'intermediateTotalPositions', 'intermediateTotalLabels', 'connectorLines', 'styles', ], outputs: ['initialized', 'renderingNg: rendering', 'renderedNg: rendered', 'visibilityChangePC: visibilityChange', ], providers: []
};
WjFlexChartWaterfall = function(_super)
{
function WjFlexChartWaterfall(elRef, injector, parentCmp)
{
_super.call(this);
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.wjProperty = 'series';
this.renderingNg = new core_1.EventEmitter(!1);
this.renderedNg = new core_1.EventEmitter(!1);
this.visibilityChangePC = new core_1.EventEmitter(!1);
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp);
this.created()
}
return __extends(WjFlexChartWaterfall, _super), WjFlexChartWaterfall.prototype.created = function(){}, WjFlexChartWaterfall.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexChartWaterfall.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexChartWaterfall.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexChartWaterfall.meta = {
outputs: exports.wjFlexChartWaterfallMeta.outputs, changeEvents: {'chart.seriesVisibilityChanged': ['visibility']}, siblingId: 'series'
}, WjFlexChartWaterfall.decorators = [{
type: core_1.Component, args: [{
selector: exports.wjFlexChartWaterfallMeta.selector, template: exports.wjFlexChartWaterfallMeta.template, inputs: exports.wjFlexChartWaterfallMeta.inputs, outputs: exports.wjFlexChartWaterfallMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexChartWaterfall
})
}].concat(exports.wjFlexChartWaterfallMeta.providers)
}, ]
}, ], WjFlexChartWaterfall.ctorParameters = [{
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
}, ], WjFlexChartWaterfall
}(wjcChartAnalytics.Waterfall);
exports.WjFlexChartWaterfall = WjFlexChartWaterfall;
exports.wjFlexChartBoxWhiskerMeta = {
selector: 'wj-flex-chart-box-whisker', template: "", inputs: ['wjProperty', 'axisX', 'axisY', 'binding', 'bindingX', 'cssClass', 'name', 'style', 'altStyle', 'symbolMarker', 'symbolSize', 'symbolStyle', 'visibility', 'itemsSource', 'quartileCalculation', 'groupWidth', 'gapWidth', 'showMeanLine', 'meanLineStyle', 'showMeanMarker', 'meanMarkerStyle', 'showInnerPoints', 'showOutliers', ], outputs: ['initialized', 'renderingNg: rendering', 'renderedNg: rendered', 'visibilityChangePC: visibilityChange', ], providers: []
};
WjFlexChartBoxWhisker = function(_super)
{
function WjFlexChartBoxWhisker(elRef, injector, parentCmp)
{
_super.call(this);
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.wjProperty = 'series';
this.renderingNg = new core_1.EventEmitter(!1);
this.renderedNg = new core_1.EventEmitter(!1);
this.visibilityChangePC = new core_1.EventEmitter(!1);
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp);
this.created()
}
return __extends(WjFlexChartBoxWhisker, _super), WjFlexChartBoxWhisker.prototype.created = function(){}, WjFlexChartBoxWhisker.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexChartBoxWhisker.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexChartBoxWhisker.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexChartBoxWhisker.meta = {
outputs: exports.wjFlexChartBoxWhiskerMeta.outputs, changeEvents: {'chart.seriesVisibilityChanged': ['visibility']}, siblingId: 'series'
}, WjFlexChartBoxWhisker.decorators = [{
type: core_1.Component, args: [{
selector: exports.wjFlexChartBoxWhiskerMeta.selector, template: exports.wjFlexChartBoxWhiskerMeta.template, inputs: exports.wjFlexChartBoxWhiskerMeta.inputs, outputs: exports.wjFlexChartBoxWhiskerMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexChartBoxWhisker
})
}].concat(exports.wjFlexChartBoxWhiskerMeta.providers)
}, ]
}, ], WjFlexChartBoxWhisker.ctorParameters = [{
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
}, ], WjFlexChartBoxWhisker
}(wjcChartAnalytics.BoxWhisker);
exports.WjFlexChartBoxWhisker = WjFlexChartBoxWhisker;
exports.wjFlexChartErrorBarMeta = {
selector: 'wj-flex-chart-error-bar', template: "", inputs: ['wjProperty', 'axisX', 'axisY', 'binding', 'bindingX', 'cssClass', 'name', 'style', 'altStyle', 'symbolMarker', 'symbolSize', 'symbolStyle', 'visibility', 'itemsSource', 'chartType', 'errorBarStyle', 'value', 'errorAmount', 'endStyle', 'direction', ], outputs: ['initialized', 'renderingNg: rendering', 'renderedNg: rendered', 'visibilityChangePC: visibilityChange', ], providers: []
};
WjFlexChartErrorBar = function(_super)
{
function WjFlexChartErrorBar(elRef, injector, parentCmp)
{
_super.call(this);
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.wjProperty = 'series';
this.renderingNg = new core_1.EventEmitter(!1);
this.renderedNg = new core_1.EventEmitter(!1);
this.visibilityChangePC = new core_1.EventEmitter(!1);
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp);
this.created()
}
return __extends(WjFlexChartErrorBar, _super), WjFlexChartErrorBar.prototype.created = function(){}, WjFlexChartErrorBar.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexChartErrorBar.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexChartErrorBar.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexChartErrorBar.meta = {
outputs: exports.wjFlexChartErrorBarMeta.outputs, changeEvents: {'chart.seriesVisibilityChanged': ['visibility']}, siblingId: 'series'
}, WjFlexChartErrorBar.decorators = [{
type: core_1.Component, args: [{
selector: exports.wjFlexChartErrorBarMeta.selector, template: exports.wjFlexChartErrorBarMeta.template, inputs: exports.wjFlexChartErrorBarMeta.inputs, outputs: exports.wjFlexChartErrorBarMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexChartErrorBar
})
}].concat(exports.wjFlexChartErrorBarMeta.providers)
}, ]
}, ], WjFlexChartErrorBar.ctorParameters = [{
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
}, ], WjFlexChartErrorBar
}(wjcChartAnalytics.ErrorBar);
exports.WjFlexChartErrorBar = WjFlexChartErrorBar;
moduleExports = [WjFlexChartTrendLine, WjFlexChartMovingAverage, WjFlexChartYFunctionSeries, WjFlexChartParametricFunctionSeries, WjFlexChartWaterfall, WjFlexChartBoxWhisker, WjFlexChartErrorBar];
WjChartAnalyticsModule = function()
{
function WjChartAnalyticsModule(){}
return WjChartAnalyticsModule.decorators = [{
type: core_1.NgModule, args: [{
imports: [wijmo_angular2_directiveBase_1.WjDirectiveBaseModule, common_1.CommonModule], declarations: moduleExports.slice(), exports: moduleExports.slice()
}, ]
}, ], WjChartAnalyticsModule.ctorParameters = [], WjChartAnalyticsModule
}();
exports.WjChartAnalyticsModule = WjChartAnalyticsModule