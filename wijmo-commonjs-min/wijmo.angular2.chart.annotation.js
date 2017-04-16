﻿/*
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
wjcChartAnnotation=require('wijmo/wijmo.chart.annotation'),
core_1=require('@angular/core'),
core_2=require('@angular/core'),
core_3=require('@angular/core'),
common_1=require('@angular/common'),
wijmo_angular2_directiveBase_1=require('wijmo/wijmo.angular2.directiveBase'),
WjFlexChartAnnotationLayer,
WjFlexChartAnnotationText,
WjFlexChartAnnotationEllipse,
WjFlexChartAnnotationRectangle,
WjFlexChartAnnotationLine,
WjFlexChartAnnotationPolygon,
WjFlexChartAnnotationCircle,
WjFlexChartAnnotationSquare,
WjFlexChartAnnotationImage,
moduleExports,
WjChartAnnotationModule;
exports.wjFlexChartAnnotationLayerMeta = {
selector: 'wj-flex-chart-annotation-layer', template: "<div><ng-content></ng-content></div>", inputs: ['wjProperty', ], outputs: ['initialized', ], providers: []
};
WjFlexChartAnnotationLayer = function(_super)
{
function WjFlexChartAnnotationLayer(elRef, injector, parentCmp)
{
_super.call(this, parentCmp);
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp);
this.created()
}
return __extends(WjFlexChartAnnotationLayer, _super), WjFlexChartAnnotationLayer.prototype.created = function(){}, WjFlexChartAnnotationLayer.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexChartAnnotationLayer.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexChartAnnotationLayer.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexChartAnnotationLayer.meta = {outputs: exports.wjFlexChartAnnotationLayerMeta.outputs}, WjFlexChartAnnotationLayer.decorators = [{
type: core_1.Component, args: [{
selector: exports.wjFlexChartAnnotationLayerMeta.selector, template: exports.wjFlexChartAnnotationLayerMeta.template, inputs: exports.wjFlexChartAnnotationLayerMeta.inputs, outputs: exports.wjFlexChartAnnotationLayerMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexChartAnnotationLayer
})
}].concat(exports.wjFlexChartAnnotationLayerMeta.providers)
}, ]
}, ], WjFlexChartAnnotationLayer.ctorParameters = [{
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
}, ], WjFlexChartAnnotationLayer
}(wjcChartAnnotation.AnnotationLayer);
exports.WjFlexChartAnnotationLayer = WjFlexChartAnnotationLayer;
exports.wjFlexChartAnnotationTextMeta = {
selector: 'wj-flex-chart-annotation-text', template: "<div><ng-content></ng-content></div>", inputs: ['wjProperty', 'type', 'attachment', 'position', 'point', 'seriesIndex', 'pointIndex', 'offset', 'style', 'isVisible', 'tooltip', 'text', 'content', 'name', 'width', 'height', 'start', 'end', 'radius', 'length', 'href', ], outputs: ['initialized', ], providers: []
};
WjFlexChartAnnotationText = function(_super)
{
function WjFlexChartAnnotationText(elRef, injector, parentCmp)
{
_super.call(this);
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.wjProperty = 'items';
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp);
this.created()
}
return __extends(WjFlexChartAnnotationText, _super), WjFlexChartAnnotationText.prototype.created = function(){}, WjFlexChartAnnotationText.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexChartAnnotationText.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexChartAnnotationText.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexChartAnnotationText.meta = {outputs: exports.wjFlexChartAnnotationTextMeta.outputs}, WjFlexChartAnnotationText.decorators = [{
type: core_1.Component, args: [{
selector: exports.wjFlexChartAnnotationTextMeta.selector, template: exports.wjFlexChartAnnotationTextMeta.template, inputs: exports.wjFlexChartAnnotationTextMeta.inputs, outputs: exports.wjFlexChartAnnotationTextMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexChartAnnotationText
})
}].concat(exports.wjFlexChartAnnotationTextMeta.providers)
}, ]
}, ], WjFlexChartAnnotationText.ctorParameters = [{
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
}, ], WjFlexChartAnnotationText
}(wjcChartAnnotation.Text);
exports.WjFlexChartAnnotationText = WjFlexChartAnnotationText;
exports.wjFlexChartAnnotationEllipseMeta = {
selector: 'wj-flex-chart-annotation-ellipse', template: "<div><ng-content></ng-content></div>", inputs: ['wjProperty', 'type', 'attachment', 'position', 'point', 'seriesIndex', 'pointIndex', 'offset', 'style', 'isVisible', 'tooltip', 'text', 'content', 'name', 'width', 'height', 'start', 'end', 'radius', 'length', 'href', ], outputs: ['initialized', ], providers: []
};
WjFlexChartAnnotationEllipse = function(_super)
{
function WjFlexChartAnnotationEllipse(elRef, injector, parentCmp)
{
_super.call(this);
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.wjProperty = 'items';
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp);
this.created()
}
return __extends(WjFlexChartAnnotationEllipse, _super), WjFlexChartAnnotationEllipse.prototype.created = function(){}, WjFlexChartAnnotationEllipse.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexChartAnnotationEllipse.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexChartAnnotationEllipse.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexChartAnnotationEllipse.meta = {outputs: exports.wjFlexChartAnnotationEllipseMeta.outputs}, WjFlexChartAnnotationEllipse.decorators = [{
type: core_1.Component, args: [{
selector: exports.wjFlexChartAnnotationEllipseMeta.selector, template: exports.wjFlexChartAnnotationEllipseMeta.template, inputs: exports.wjFlexChartAnnotationEllipseMeta.inputs, outputs: exports.wjFlexChartAnnotationEllipseMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexChartAnnotationEllipse
})
}].concat(exports.wjFlexChartAnnotationEllipseMeta.providers)
}, ]
}, ], WjFlexChartAnnotationEllipse.ctorParameters = [{
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
}, ], WjFlexChartAnnotationEllipse
}(wjcChartAnnotation.Ellipse);
exports.WjFlexChartAnnotationEllipse = WjFlexChartAnnotationEllipse;
exports.wjFlexChartAnnotationRectangleMeta = {
selector: 'wj-flex-chart-annotation-rectangle', template: "<div><ng-content></ng-content></div>", inputs: ['wjProperty', 'type', 'attachment', 'position', 'point', 'seriesIndex', 'pointIndex', 'offset', 'style', 'isVisible', 'tooltip', 'text', 'content', 'name', 'width', 'height', 'start', 'end', 'radius', 'length', 'href', ], outputs: ['initialized', ], providers: []
};
WjFlexChartAnnotationRectangle = function(_super)
{
function WjFlexChartAnnotationRectangle(elRef, injector, parentCmp)
{
_super.call(this);
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.wjProperty = 'items';
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp);
this.created()
}
return __extends(WjFlexChartAnnotationRectangle, _super), WjFlexChartAnnotationRectangle.prototype.created = function(){}, WjFlexChartAnnotationRectangle.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexChartAnnotationRectangle.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexChartAnnotationRectangle.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexChartAnnotationRectangle.meta = {outputs: exports.wjFlexChartAnnotationRectangleMeta.outputs}, WjFlexChartAnnotationRectangle.decorators = [{
type: core_1.Component, args: [{
selector: exports.wjFlexChartAnnotationRectangleMeta.selector, template: exports.wjFlexChartAnnotationRectangleMeta.template, inputs: exports.wjFlexChartAnnotationRectangleMeta.inputs, outputs: exports.wjFlexChartAnnotationRectangleMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexChartAnnotationRectangle
})
}].concat(exports.wjFlexChartAnnotationRectangleMeta.providers)
}, ]
}, ], WjFlexChartAnnotationRectangle.ctorParameters = [{
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
}, ], WjFlexChartAnnotationRectangle
}(wjcChartAnnotation.Rectangle);
exports.WjFlexChartAnnotationRectangle = WjFlexChartAnnotationRectangle;
exports.wjFlexChartAnnotationLineMeta = {
selector: 'wj-flex-chart-annotation-line', template: "<div><ng-content></ng-content></div>", inputs: ['wjProperty', 'type', 'attachment', 'position', 'point', 'seriesIndex', 'pointIndex', 'offset', 'style', 'isVisible', 'tooltip', 'text', 'content', 'name', 'width', 'height', 'start', 'end', 'radius', 'length', 'href', ], outputs: ['initialized', ], providers: []
};
WjFlexChartAnnotationLine = function(_super)
{
function WjFlexChartAnnotationLine(elRef, injector, parentCmp)
{
_super.call(this);
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.wjProperty = 'items';
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp);
this.created()
}
return __extends(WjFlexChartAnnotationLine, _super), WjFlexChartAnnotationLine.prototype.created = function(){}, WjFlexChartAnnotationLine.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexChartAnnotationLine.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexChartAnnotationLine.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexChartAnnotationLine.meta = {outputs: exports.wjFlexChartAnnotationLineMeta.outputs}, WjFlexChartAnnotationLine.decorators = [{
type: core_1.Component, args: [{
selector: exports.wjFlexChartAnnotationLineMeta.selector, template: exports.wjFlexChartAnnotationLineMeta.template, inputs: exports.wjFlexChartAnnotationLineMeta.inputs, outputs: exports.wjFlexChartAnnotationLineMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexChartAnnotationLine
})
}].concat(exports.wjFlexChartAnnotationLineMeta.providers)
}, ]
}, ], WjFlexChartAnnotationLine.ctorParameters = [{
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
}, ], WjFlexChartAnnotationLine
}(wjcChartAnnotation.Line);
exports.WjFlexChartAnnotationLine = WjFlexChartAnnotationLine;
exports.wjFlexChartAnnotationPolygonMeta = {
selector: 'wj-flex-chart-annotation-polygon', template: "<div><ng-content></ng-content></div>", inputs: ['wjProperty', 'type', 'attachment', 'position', 'point', 'seriesIndex', 'pointIndex', 'offset', 'style', 'isVisible', 'tooltip', 'text', 'content', 'name', 'width', 'height', 'start', 'end', 'radius', 'length', 'href', ], outputs: ['initialized', ], providers: []
};
WjFlexChartAnnotationPolygon = function(_super)
{
function WjFlexChartAnnotationPolygon(elRef, injector, parentCmp)
{
_super.call(this);
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.wjProperty = 'items';
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp);
this.created()
}
return __extends(WjFlexChartAnnotationPolygon, _super), WjFlexChartAnnotationPolygon.prototype.created = function(){}, WjFlexChartAnnotationPolygon.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexChartAnnotationPolygon.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexChartAnnotationPolygon.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexChartAnnotationPolygon.meta = {outputs: exports.wjFlexChartAnnotationPolygonMeta.outputs}, WjFlexChartAnnotationPolygon.decorators = [{
type: core_1.Component, args: [{
selector: exports.wjFlexChartAnnotationPolygonMeta.selector, template: exports.wjFlexChartAnnotationPolygonMeta.template, inputs: exports.wjFlexChartAnnotationPolygonMeta.inputs, outputs: exports.wjFlexChartAnnotationPolygonMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexChartAnnotationPolygon
})
}].concat(exports.wjFlexChartAnnotationPolygonMeta.providers)
}, ]
}, ], WjFlexChartAnnotationPolygon.ctorParameters = [{
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
}, ], WjFlexChartAnnotationPolygon
}(wjcChartAnnotation.Polygon);
exports.WjFlexChartAnnotationPolygon = WjFlexChartAnnotationPolygon;
exports.wjFlexChartAnnotationCircleMeta = {
selector: 'wj-flex-chart-annotation-circle', template: "<div><ng-content></ng-content></div>", inputs: ['wjProperty', 'type', 'attachment', 'position', 'point', 'seriesIndex', 'pointIndex', 'offset', 'style', 'isVisible', 'tooltip', 'text', 'content', 'name', 'width', 'height', 'start', 'end', 'radius', 'length', 'href', ], outputs: ['initialized', ], providers: []
};
WjFlexChartAnnotationCircle = function(_super)
{
function WjFlexChartAnnotationCircle(elRef, injector, parentCmp)
{
_super.call(this);
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.wjProperty = 'items';
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp);
this.created()
}
return __extends(WjFlexChartAnnotationCircle, _super), WjFlexChartAnnotationCircle.prototype.created = function(){}, WjFlexChartAnnotationCircle.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexChartAnnotationCircle.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexChartAnnotationCircle.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexChartAnnotationCircle.meta = {outputs: exports.wjFlexChartAnnotationCircleMeta.outputs}, WjFlexChartAnnotationCircle.decorators = [{
type: core_1.Component, args: [{
selector: exports.wjFlexChartAnnotationCircleMeta.selector, template: exports.wjFlexChartAnnotationCircleMeta.template, inputs: exports.wjFlexChartAnnotationCircleMeta.inputs, outputs: exports.wjFlexChartAnnotationCircleMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexChartAnnotationCircle
})
}].concat(exports.wjFlexChartAnnotationCircleMeta.providers)
}, ]
}, ], WjFlexChartAnnotationCircle.ctorParameters = [{
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
}, ], WjFlexChartAnnotationCircle
}(wjcChartAnnotation.Circle);
exports.WjFlexChartAnnotationCircle = WjFlexChartAnnotationCircle;
exports.wjFlexChartAnnotationSquareMeta = {
selector: 'wj-flex-chart-annotation-square', template: "<div><ng-content></ng-content></div>", inputs: ['wjProperty', 'type', 'attachment', 'position', 'point', 'seriesIndex', 'pointIndex', 'offset', 'style', 'isVisible', 'tooltip', 'text', 'content', 'name', 'width', 'height', 'start', 'end', 'radius', 'length', 'href', ], outputs: ['initialized', ], providers: []
};
WjFlexChartAnnotationSquare = function(_super)
{
function WjFlexChartAnnotationSquare(elRef, injector, parentCmp)
{
_super.call(this);
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.wjProperty = 'items';
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp);
this.created()
}
return __extends(WjFlexChartAnnotationSquare, _super), WjFlexChartAnnotationSquare.prototype.created = function(){}, WjFlexChartAnnotationSquare.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexChartAnnotationSquare.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexChartAnnotationSquare.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexChartAnnotationSquare.meta = {outputs: exports.wjFlexChartAnnotationSquareMeta.outputs}, WjFlexChartAnnotationSquare.decorators = [{
type: core_1.Component, args: [{
selector: exports.wjFlexChartAnnotationSquareMeta.selector, template: exports.wjFlexChartAnnotationSquareMeta.template, inputs: exports.wjFlexChartAnnotationSquareMeta.inputs, outputs: exports.wjFlexChartAnnotationSquareMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexChartAnnotationSquare
})
}].concat(exports.wjFlexChartAnnotationSquareMeta.providers)
}, ]
}, ], WjFlexChartAnnotationSquare.ctorParameters = [{
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
}, ], WjFlexChartAnnotationSquare
}(wjcChartAnnotation.Square);
exports.WjFlexChartAnnotationSquare = WjFlexChartAnnotationSquare;
exports.wjFlexChartAnnotationImageMeta = {
selector: 'wj-flex-chart-annotation-image', template: "<div><ng-content></ng-content></div>", inputs: ['wjProperty', 'type', 'attachment', 'position', 'point', 'seriesIndex', 'pointIndex', 'offset', 'style', 'isVisible', 'tooltip', 'text', 'content', 'name', 'width', 'height', 'start', 'end', 'radius', 'length', 'href', ], outputs: ['initialized', ], providers: []
};
WjFlexChartAnnotationImage = function(_super)
{
function WjFlexChartAnnotationImage(elRef, injector, parentCmp)
{
_super.call(this);
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.wjProperty = 'items';
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp);
this.created()
}
return __extends(WjFlexChartAnnotationImage, _super), WjFlexChartAnnotationImage.prototype.created = function(){}, WjFlexChartAnnotationImage.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexChartAnnotationImage.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexChartAnnotationImage.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexChartAnnotationImage.meta = {outputs: exports.wjFlexChartAnnotationImageMeta.outputs}, WjFlexChartAnnotationImage.decorators = [{
type: core_1.Component, args: [{
selector: exports.wjFlexChartAnnotationImageMeta.selector, template: exports.wjFlexChartAnnotationImageMeta.template, inputs: exports.wjFlexChartAnnotationImageMeta.inputs, outputs: exports.wjFlexChartAnnotationImageMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexChartAnnotationImage
})
}].concat(exports.wjFlexChartAnnotationImageMeta.providers)
}, ]
}, ], WjFlexChartAnnotationImage.ctorParameters = [{
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
}, ], WjFlexChartAnnotationImage
}(wjcChartAnnotation.Image);
exports.WjFlexChartAnnotationImage = WjFlexChartAnnotationImage;
moduleExports = [WjFlexChartAnnotationLayer, WjFlexChartAnnotationText, WjFlexChartAnnotationEllipse, WjFlexChartAnnotationRectangle, WjFlexChartAnnotationLine, WjFlexChartAnnotationPolygon, WjFlexChartAnnotationCircle, WjFlexChartAnnotationSquare, WjFlexChartAnnotationImage];
WjChartAnnotationModule = function()
{
function WjChartAnnotationModule(){}
return WjChartAnnotationModule.decorators = [{
type: core_1.NgModule, args: [{
imports: [wijmo_angular2_directiveBase_1.WjDirectiveBaseModule, common_1.CommonModule], declarations: moduleExports.slice(), exports: moduleExports.slice()
}, ]
}, ], WjChartAnnotationModule.ctorParameters = [], WjChartAnnotationModule
}();
exports.WjChartAnnotationModule = WjChartAnnotationModule