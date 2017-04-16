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
wjcChart=require('wijmo/wijmo.chart'),
core_1=require('@angular/core'),
core_2=require('@angular/core'),
core_3=require('@angular/core'),
common_1=require('@angular/common'),
forms_1=require('@angular/forms'),
wijmo_angular2_directiveBase_1=require('wijmo/wijmo.angular2.directiveBase'),
WjFlexChart,
WjFlexPie,
WjFlexChartAxis,
WjFlexChartLegend,
WjFlexChartDataLabel,
WjFlexPieDataLabel,
WjFlexChartSeries,
WjFlexChartLineMarker,
WjFlexChartDataPoint,
WjFlexChartPlotArea,
moduleExports,
WjChartModule;
exports.wjFlexChartMeta = {
selector: 'wj-flex-chart', template: "<div><ng-content></ng-content></div>", inputs: ['wjModelProperty', 'isDisabled', 'binding', 'footer', 'header', 'selectionMode', 'palette', 'plotMargin', 'footerStyle', 'headerStyle', 'tooltipContent', 'itemsSource', 'bindingX', 'interpolateNulls', 'legendToggle', 'symbolSize', 'options', 'selection', 'itemFormatter', 'labelContent', 'chartType', 'rotated', 'stacking', ], outputs: ['initialized', 'gotFocusNg: gotFocus', 'lostFocusNg: lostFocus', 'renderingNg: rendering', 'renderedNg: rendered', 'seriesVisibilityChangedNg: seriesVisibilityChanged', 'selectionChangedNg: selectionChanged', 'selectionChangePC: selectionChange', ], providers: [{
provide: forms_1.NG_VALUE_ACCESSOR, useFactory: wijmo_angular2_directiveBase_1.WjValueAccessorFactory, multi: !0, deps: ['WjComponent']
}]
};
WjFlexChart = function(_super)
{
function WjFlexChart(elRef, injector, parentCmp)
{
_super.call(this, wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(elRef));
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.gotFocusNg = new core_1.EventEmitter(!1);
this.lostFocusNg = new core_1.EventEmitter(!1);
this.renderingNg = new core_1.EventEmitter(!1);
this.renderedNg = new core_1.EventEmitter(!1);
this.seriesVisibilityChangedNg = new core_1.EventEmitter(!1);
this.selectionChangedNg = new core_1.EventEmitter(!1);
this.selectionChangePC = new core_1.EventEmitter(!1);
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp);
this.created()
}
return __extends(WjFlexChart, _super), WjFlexChart.prototype.created = function(){}, WjFlexChart.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexChart.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexChart.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, Object.defineProperty(WjFlexChart.prototype, "tooltipContent", {
get: function()
{
return this.tooltip.content
}, set: function(value)
{
this.tooltip.content = value
}, enumerable: !0, configurable: !0
}), Object.defineProperty(WjFlexChart.prototype, "labelContent", {
get: function()
{
return this.dataLabel.content
}, set: function(value)
{
this.dataLabel.content = value
}, enumerable: !0, configurable: !0
}), WjFlexChart.meta = {
outputs: exports.wjFlexChartMeta.outputs, changeEvents: {selectionChanged: ['selection']}
}, WjFlexChart.decorators = [{
type: core_1.Component, args: [{
selector: exports.wjFlexChartMeta.selector, template: exports.wjFlexChartMeta.template, inputs: exports.wjFlexChartMeta.inputs, outputs: exports.wjFlexChartMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexChart
})
}].concat(exports.wjFlexChartMeta.providers)
}, ]
}, ], WjFlexChart.ctorParameters = [{
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
}, ], WjFlexChart
}(wjcChart.FlexChart);
exports.WjFlexChart = WjFlexChart;
exports.wjFlexPieMeta = {
selector: 'wj-flex-pie', template: "<div><ng-content></ng-content></div>", inputs: ['wjModelProperty', 'isDisabled', 'binding', 'footer', 'header', 'selectionMode', 'palette', 'plotMargin', 'footerStyle', 'headerStyle', 'tooltipContent', 'itemsSource', 'bindingName', 'innerRadius', 'isAnimated', 'offset', 'reversed', 'startAngle', 'selectedItemPosition', 'selectedItemOffset', 'itemFormatter', 'labelContent', ], outputs: ['initialized', 'gotFocusNg: gotFocus', 'lostFocusNg: lostFocus', 'renderingNg: rendering', 'renderedNg: rendered', ], providers: [{
provide: forms_1.NG_VALUE_ACCESSOR, useFactory: wijmo_angular2_directiveBase_1.WjValueAccessorFactory, multi: !0, deps: ['WjComponent']
}]
};
WjFlexPie = function(_super)
{
function WjFlexPie(elRef, injector, parentCmp)
{
_super.call(this, wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(elRef));
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.gotFocusNg = new core_1.EventEmitter(!1);
this.lostFocusNg = new core_1.EventEmitter(!1);
this.renderingNg = new core_1.EventEmitter(!1);
this.renderedNg = new core_1.EventEmitter(!1);
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp);
this.created()
}
return __extends(WjFlexPie, _super), WjFlexPie.prototype.created = function(){}, WjFlexPie.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexPie.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexPie.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, Object.defineProperty(WjFlexPie.prototype, "tooltipContent", {
get: function()
{
return this.tooltip.content
}, set: function(value)
{
this.tooltip.content = value
}, enumerable: !0, configurable: !0
}), Object.defineProperty(WjFlexPie.prototype, "labelContent", {
get: function()
{
return this.dataLabel.content
}, set: function(value)
{
this.dataLabel.content = value
}, enumerable: !0, configurable: !0
}), WjFlexPie.meta = {outputs: exports.wjFlexPieMeta.outputs}, WjFlexPie.decorators = [{
type: core_1.Component, args: [{
selector: exports.wjFlexPieMeta.selector, template: exports.wjFlexPieMeta.template, inputs: exports.wjFlexPieMeta.inputs, outputs: exports.wjFlexPieMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexPie
})
}].concat(exports.wjFlexPieMeta.providers)
}, ]
}, ], WjFlexPie.ctorParameters = [{
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
}, ], WjFlexPie
}(wjcChart.FlexPie);
exports.WjFlexPie = WjFlexPie;
exports.wjFlexChartAxisMeta = {
selector: 'wj-flex-chart-axis', template: "", inputs: ['wjProperty', 'axisLine', 'format', 'labels', 'majorGrid', 'majorTickMarks', 'majorUnit', 'max', 'min', 'position', 'reversed', 'title', 'labelAngle', 'minorGrid', 'minorTickMarks', 'minorUnit', 'origin', 'logBase', 'plotArea', 'labelAlign', 'name', 'overlappingLabels', 'labelPadding', 'itemFormatter', 'itemsSource', 'binding', ], outputs: ['initialized', 'rangeChangedNg: rangeChanged', ], providers: []
};
WjFlexChartAxis = function(_super)
{
function WjFlexChartAxis(elRef, injector, parentCmp)
{
_super.call(this);
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.wjProperty = 'axes';
this.rangeChangedNg = new core_1.EventEmitter(!1);
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp);
this.created()
}
return __extends(WjFlexChartAxis, _super), WjFlexChartAxis.prototype.created = function(){}, WjFlexChartAxis.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexChartAxis.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexChartAxis.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexChartAxis.meta = {outputs: exports.wjFlexChartAxisMeta.outputs}, WjFlexChartAxis.decorators = [{
type: core_1.Component, args: [{
selector: exports.wjFlexChartAxisMeta.selector, template: exports.wjFlexChartAxisMeta.template, inputs: exports.wjFlexChartAxisMeta.inputs, outputs: exports.wjFlexChartAxisMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexChartAxis
})
}].concat(exports.wjFlexChartAxisMeta.providers)
}, ]
}, ], WjFlexChartAxis.ctorParameters = [{
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
}, ], WjFlexChartAxis
}(wjcChart.Axis);
exports.WjFlexChartAxis = WjFlexChartAxis;
exports.wjFlexChartLegendMeta = {
selector: 'wj-flex-chart-legend', template: "", inputs: ['wjProperty', 'position', ], outputs: ['initialized', ], providers: []
};
WjFlexChartLegend = function(_super)
{
function WjFlexChartLegend(elRef, injector, parentCmp)
{
_super.call(this, parentCmp);
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.wjProperty = 'legend';
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp);
this.created()
}
return __extends(WjFlexChartLegend, _super), WjFlexChartLegend.prototype.created = function(){}, WjFlexChartLegend.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexChartLegend.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexChartLegend.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexChartLegend.meta = {outputs: exports.wjFlexChartLegendMeta.outputs}, WjFlexChartLegend.decorators = [{
type: core_1.Component, args: [{
selector: exports.wjFlexChartLegendMeta.selector, template: exports.wjFlexChartLegendMeta.template, inputs: exports.wjFlexChartLegendMeta.inputs, outputs: exports.wjFlexChartLegendMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexChartLegend
})
}].concat(exports.wjFlexChartLegendMeta.providers)
}, ]
}, ], WjFlexChartLegend.ctorParameters = [{
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
}, ], WjFlexChartLegend
}(wjcChart.Legend);
exports.WjFlexChartLegend = WjFlexChartLegend;
exports.wjFlexChartDataLabelMeta = {
selector: 'wj-flex-chart-data-label', template: "", inputs: ['wjProperty', 'content', 'border', 'position', ], outputs: ['initialized', ], providers: []
};
WjFlexChartDataLabel = function(_super)
{
function WjFlexChartDataLabel(elRef, injector, parentCmp)
{
_super.call(this);
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.wjProperty = 'dataLabel';
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp);
this.created()
}
return __extends(WjFlexChartDataLabel, _super), WjFlexChartDataLabel.prototype.created = function(){}, WjFlexChartDataLabel.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexChartDataLabel.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexChartDataLabel.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexChartDataLabel.meta = {outputs: exports.wjFlexChartDataLabelMeta.outputs}, WjFlexChartDataLabel.decorators = [{
type: core_1.Component, args: [{
selector: exports.wjFlexChartDataLabelMeta.selector, template: exports.wjFlexChartDataLabelMeta.template, inputs: exports.wjFlexChartDataLabelMeta.inputs, outputs: exports.wjFlexChartDataLabelMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexChartDataLabel
})
}].concat(exports.wjFlexChartDataLabelMeta.providers)
}, ]
}, ], WjFlexChartDataLabel.ctorParameters = [{
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
}, ], WjFlexChartDataLabel
}(wjcChart.DataLabel);
exports.WjFlexChartDataLabel = WjFlexChartDataLabel;
exports.wjFlexPieDataLabelMeta = {
selector: 'wj-flex-pie-data-label', template: "", inputs: ['wjProperty', 'content', 'border', 'position', ], outputs: ['initialized', ], providers: []
};
WjFlexPieDataLabel = function(_super)
{
function WjFlexPieDataLabel(elRef, injector, parentCmp)
{
_super.call(this);
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.wjProperty = 'dataLabel';
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp);
this.created()
}
return __extends(WjFlexPieDataLabel, _super), WjFlexPieDataLabel.prototype.created = function(){}, WjFlexPieDataLabel.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexPieDataLabel.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexPieDataLabel.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexPieDataLabel.meta = {outputs: exports.wjFlexPieDataLabelMeta.outputs}, WjFlexPieDataLabel.decorators = [{
type: core_1.Component, args: [{
selector: exports.wjFlexPieDataLabelMeta.selector, template: exports.wjFlexPieDataLabelMeta.template, inputs: exports.wjFlexPieDataLabelMeta.inputs, outputs: exports.wjFlexPieDataLabelMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexPieDataLabel
})
}].concat(exports.wjFlexPieDataLabelMeta.providers)
}, ]
}, ], WjFlexPieDataLabel.ctorParameters = [{
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
}, ], WjFlexPieDataLabel
}(wjcChart.PieDataLabel);
exports.WjFlexPieDataLabel = WjFlexPieDataLabel;
exports.wjFlexChartSeriesMeta = {
selector: 'wj-flex-chart-series', template: "<div><ng-content></ng-content></div>", inputs: ['wjProperty', 'axisX', 'axisY', 'binding', 'bindingX', 'cssClass', 'name', 'style', 'altStyle', 'symbolMarker', 'symbolSize', 'symbolStyle', 'visibility', 'itemsSource', 'chartType', ], outputs: ['initialized', 'renderingNg: rendering', 'renderedNg: rendered', 'visibilityChangePC: visibilityChange', ], providers: []
};
WjFlexChartSeries = function(_super)
{
function WjFlexChartSeries(elRef, injector, parentCmp)
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
return __extends(WjFlexChartSeries, _super), WjFlexChartSeries.prototype.created = function(){}, WjFlexChartSeries.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexChartSeries.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexChartSeries.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexChartSeries.meta = {
outputs: exports.wjFlexChartSeriesMeta.outputs, changeEvents: {'chart.seriesVisibilityChanged': ['visibility']}, siblingId: 'series'
}, WjFlexChartSeries.decorators = [{
type: core_1.Component, args: [{
selector: exports.wjFlexChartSeriesMeta.selector, template: exports.wjFlexChartSeriesMeta.template, inputs: exports.wjFlexChartSeriesMeta.inputs, outputs: exports.wjFlexChartSeriesMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexChartSeries
})
}].concat(exports.wjFlexChartSeriesMeta.providers)
}, ]
}, ], WjFlexChartSeries.ctorParameters = [{
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
}, ], WjFlexChartSeries
}(wjcChart.Series);
exports.WjFlexChartSeries = WjFlexChartSeries;
exports.wjFlexChartLineMarkerMeta = {
selector: 'wj-flex-line-marker', template: "", inputs: ['wjProperty', 'isVisible', 'seriesIndex', 'horizontalPosition', 'content', 'verticalPosition', 'alignment', 'lines', 'interaction', 'dragLines', 'dragThreshold', 'dragContent', ], outputs: ['initialized', 'positionChangedNg: positionChanged', ], providers: []
};
WjFlexChartLineMarker = function(_super)
{
function WjFlexChartLineMarker(elRef, injector, parentCmp)
{
_super.call(this, parentCmp);
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.positionChangedNg = new core_1.EventEmitter(!1);
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp);
this.created()
}
return __extends(WjFlexChartLineMarker, _super), WjFlexChartLineMarker.prototype.created = function(){}, WjFlexChartLineMarker.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexChartLineMarker.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexChartLineMarker.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexChartLineMarker.meta = {outputs: exports.wjFlexChartLineMarkerMeta.outputs}, WjFlexChartLineMarker.decorators = [{
type: core_1.Component, args: [{
selector: exports.wjFlexChartLineMarkerMeta.selector, template: exports.wjFlexChartLineMarkerMeta.template, inputs: exports.wjFlexChartLineMarkerMeta.inputs, outputs: exports.wjFlexChartLineMarkerMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexChartLineMarker
})
}].concat(exports.wjFlexChartLineMarkerMeta.providers)
}, ]
}, ], WjFlexChartLineMarker.ctorParameters = [{
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
}, ], WjFlexChartLineMarker
}(wjcChart.LineMarker);
exports.WjFlexChartLineMarker = WjFlexChartLineMarker;
exports.wjFlexChartDataPointMeta = {
selector: 'wj-flex-chart-data-point', template: "", inputs: ['wjProperty', 'x', 'y', ], outputs: ['initialized', ], providers: []
};
WjFlexChartDataPoint = function(_super)
{
function WjFlexChartDataPoint(elRef, injector, parentCmp)
{
_super.call(this);
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.wjProperty = '';
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp);
this.created()
}
return __extends(WjFlexChartDataPoint, _super), WjFlexChartDataPoint.prototype.created = function(){}, WjFlexChartDataPoint.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexChartDataPoint.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexChartDataPoint.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexChartDataPoint.meta = {outputs: exports.wjFlexChartDataPointMeta.outputs}, WjFlexChartDataPoint.decorators = [{
type: core_1.Component, args: [{
selector: exports.wjFlexChartDataPointMeta.selector, template: exports.wjFlexChartDataPointMeta.template, inputs: exports.wjFlexChartDataPointMeta.inputs, outputs: exports.wjFlexChartDataPointMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexChartDataPoint
})
}].concat(exports.wjFlexChartDataPointMeta.providers)
}, ]
}, ], WjFlexChartDataPoint.ctorParameters = [{
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
}, ], WjFlexChartDataPoint
}(wjcChart.DataPoint);
exports.WjFlexChartDataPoint = WjFlexChartDataPoint;
exports.wjFlexChartPlotAreaMeta = {
selector: 'wj-flex-chart-plot-area', template: "", inputs: ['wjProperty', 'column', 'height', 'name', 'row', 'style', 'width', ], outputs: ['initialized', ], providers: []
};
WjFlexChartPlotArea = function(_super)
{
function WjFlexChartPlotArea(elRef, injector, parentCmp)
{
_super.call(this);
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.wjProperty = 'plotAreas';
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp);
this.created()
}
return __extends(WjFlexChartPlotArea, _super), WjFlexChartPlotArea.prototype.created = function(){}, WjFlexChartPlotArea.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexChartPlotArea.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexChartPlotArea.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexChartPlotArea.meta = {outputs: exports.wjFlexChartPlotAreaMeta.outputs}, WjFlexChartPlotArea.decorators = [{
type: core_1.Component, args: [{
selector: exports.wjFlexChartPlotAreaMeta.selector, template: exports.wjFlexChartPlotAreaMeta.template, inputs: exports.wjFlexChartPlotAreaMeta.inputs, outputs: exports.wjFlexChartPlotAreaMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexChartPlotArea
})
}].concat(exports.wjFlexChartPlotAreaMeta.providers)
}, ]
}, ], WjFlexChartPlotArea.ctorParameters = [{
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
}, ], WjFlexChartPlotArea
}(wjcChart.PlotArea);
exports.WjFlexChartPlotArea = WjFlexChartPlotArea;
moduleExports = [WjFlexChart, WjFlexPie, WjFlexChartAxis, WjFlexChartLegend, WjFlexChartDataLabel, WjFlexPieDataLabel, WjFlexChartSeries, WjFlexChartLineMarker, WjFlexChartDataPoint, WjFlexChartPlotArea];
WjChartModule = function()
{
function WjChartModule(){}
return WjChartModule.decorators = [{
type: core_1.NgModule, args: [{
imports: [wijmo_angular2_directiveBase_1.WjDirectiveBaseModule, common_1.CommonModule], declarations: moduleExports.slice(), exports: moduleExports.slice()
}, ]
}, ], WjChartModule.ctorParameters = [], WjChartModule
}();
exports.WjChartModule = WjChartModule