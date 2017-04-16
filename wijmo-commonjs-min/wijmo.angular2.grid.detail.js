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
wjcGridDetail=require('wijmo/wijmo.grid.detail'),
core_1=require('@angular/core'),
core_2=require('@angular/core'),
core_3=require('@angular/core'),
common_1=require('@angular/common'),
wijmo_angular2_directiveBase_1=require('wijmo/wijmo.angular2.directiveBase'),
WjFlexGridDetail,
moduleExports,
WjGridDetailModule;
exports.wjFlexGridDetailMeta = {
selector: '[wjFlexGridDetail]', inputs: ['wjFlexGridDetail', 'maxHeight', 'detailVisibilityMode', 'rowHasDetail', 'isAnimated', ], outputs: ['initialized', ], exportAs: 'wjFlexGridDetail', providers: []
};
WjFlexGridDetail = function(_super)
{
function WjFlexGridDetail(elRef, injector, parentCmp, viewContainerRef, templateRef, domRenderer)
{
_super.call(this, parentCmp);
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp);
this._viewContainerRef = viewContainerRef;
this._templateRef = templateRef;
this._domRenderer = domRenderer;
this._init();
this.created()
}
return __extends(WjFlexGridDetail, _super), WjFlexGridDetail.prototype.created = function(){}, WjFlexGridDetail.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexGridDetail.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexGridDetail.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexGridDetail.prototype._init = function()
{
var _this=this;
this.createDetailCell = function(row, col)
{
var templ=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.instantiateTemplate(_this.grid.hostElement, _this._viewContainerRef, _this._templateRef, _this._domRenderer),
viewRef=templ.viewRef,
templRoot=templ.rootElement;
return viewRef.context.row = row, viewRef.context.col = col, viewRef.context.item = row.dataItem, templRoot.parentElement.removeChild(templRoot), templRoot[WjFlexGridDetail._viewRefProp] = viewRef, templRoot
};
this.disposeDetailCell = function(row)
{
var viewRef,
idx;
row.detail && (viewRef = row.detail[WjFlexGridDetail._viewRefProp]) && (row.detail[WjFlexGridDetail._viewRefProp] = null, idx = _this._viewContainerRef.indexOf(viewRef), idx > -1 && _this._viewContainerRef.remove(idx))
}
}, WjFlexGridDetail._viewRefProp = '__wj_viewRef', WjFlexGridDetail.meta = {outputs: exports.wjFlexGridDetailMeta.outputs}, WjFlexGridDetail.decorators = [{
type: core_2.Directive, args: [{
selector: exports.wjFlexGridDetailMeta.selector, inputs: exports.wjFlexGridDetailMeta.inputs, outputs: exports.wjFlexGridDetailMeta.outputs, exportAs: exports.wjFlexGridDetailMeta.exportAs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexGridDetail
})
}].concat(exports.wjFlexGridDetailMeta.providers)
}, ]
}, ], WjFlexGridDetail.ctorParameters = [{
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
}, {
type: core_2.ViewContainerRef, decorators: [{
type: core_3.Inject, args: [core_2.ViewContainerRef, ]
}, ]
}, {
type: core_2.TemplateRef, decorators: [{
type: core_3.Inject, args: [core_2.TemplateRef, ]
}, ]
}, {
type: core_2.Renderer, decorators: [{
type: core_3.Inject, args: [core_2.Renderer, ]
}, ]
}, ], WjFlexGridDetail
}(wjcGridDetail.FlexGridDetailProvider);
exports.WjFlexGridDetail = WjFlexGridDetail;
moduleExports = [WjFlexGridDetail];
WjGridDetailModule = function()
{
function WjGridDetailModule(){}
return WjGridDetailModule.decorators = [{
type: core_1.NgModule, args: [{
imports: [wijmo_angular2_directiveBase_1.WjDirectiveBaseModule, common_1.CommonModule], declarations: moduleExports.slice(), exports: moduleExports.slice()
}, ]
}, ], WjGridDetailModule.ctorParameters = [], WjGridDetailModule
}();
exports.WjGridDetailModule = WjGridDetailModule