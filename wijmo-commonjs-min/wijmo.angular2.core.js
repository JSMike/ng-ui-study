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
var wjcCore=require('wijmo/wijmo'),
core_1=require('@angular/core'),
core_2=require('@angular/core'),
core_3=require('@angular/core'),
ngCore=require('@angular/core'),
common_1=require('@angular/common'),
wijmo_angular2_directiveBase_1=require('wijmo/wijmo.angular2.directiveBase'),
WjTooltip,
WjComponentLoader,
moduleExports,
WjCoreModule;
exports.wjTooltipMeta = {
selector: '[wjTooltip]', inputs: [], outputs: ['initialized', ], exportAs: 'wjTooltip', providers: []
};
WjTooltip = function()
{
function WjTooltip(elRef, injector, parentCmp)
{
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp);
this._elRef = elRef;
WjTooltip._toolTip || (WjTooltip._toolTip = new wjcCore.Tooltip);
this.created()
}
return WjTooltip.prototype.created = function(){}, WjTooltip.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjTooltip.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjTooltip.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy();
this.wjTooltip = null
}, Object.defineProperty(WjTooltip.prototype, "wjTooltip", {
get: function()
{
return this._toolTipText
}, set: function(value)
{
this._toolTipText != value && (this._toolTipText != value, WjTooltip._toolTip.setTooltip(this._elRef.nativeElement, value))
}, enumerable: !0, configurable: !0
}), WjTooltip.meta = {outputs: exports.wjTooltipMeta.outputs}, WjTooltip.decorators = [{
type: core_2.Directive, args: [{
selector: exports.wjTooltipMeta.selector, inputs: exports.wjTooltipMeta.inputs, outputs: exports.wjTooltipMeta.outputs, exportAs: exports.wjTooltipMeta.exportAs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjTooltip
})
}].concat(exports.wjTooltipMeta.providers)
}, ]
}, ], WjTooltip.ctorParameters = [{
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
}, ], WjTooltip.propDecorators = {wjTooltip: [{type: core_3.Input}, ]}, WjTooltip
}();
exports.WjTooltip = WjTooltip;
WjComponentLoader = function()
{
function WjComponentLoader(_cmpResolver, _elementRef)
{
this._cmpResolver = _cmpResolver;
this._elementRef = _elementRef;
this._isViewInit = !1;
this.propertiesChange = new ngCore.EventEmitter
}
return Object.defineProperty(WjComponentLoader.prototype, "component", {
get: function()
{
return this._component
}, set: function(value)
{
this._component !== value && (this._component = value, this._createComponent())
}, enumerable: !0, configurable: !0
}), Object.defineProperty(WjComponentLoader.prototype, "properties", {
get: function()
{
return this._properties
}, set: function(value)
{
this._properties = value;
this._updateProperties()
}, enumerable: !0, configurable: !0
}), WjComponentLoader.prototype.ngAfterViewInit = function()
{
this._isViewInit = !0;
this._createComponent()
}, WjComponentLoader.prototype._createComponent = function()
{
if (this._isViewInit)
{
this._cmpRef && (this._cmpRef.destroy(), this._cmpRef = null);
var value=this._component;
value && this._anchor && (this._cmpRef = this._anchor.createComponent(this._cmpResolver.resolveComponentFactory(value)), this._updateProperties())
}
}, WjComponentLoader.prototype._updateProperties = function()
{
var cmp=this._cmpRef && this._cmpRef.instance,
properties=this.properties,
propNames,
_i,
propNames_1,
pName,
propChange;
if (cmp && properties)
for (propNames = Object.getOwnPropertyNames(properties), _i = 0, propNames_1 = propNames; _i < propNames_1.length; _i++)
pName = propNames_1[_i],
cmp[pName] = properties[pName],
propChange = cmp[pName + 'Change'],
propChange instanceof core_1.EventEmitter && this._addPropListener(cmp, pName, propChange)
}, WjComponentLoader.prototype._addPropListener = function(component, propName, propChange)
{
var _this=this;
propChange.subscribe(function()
{
_this.properties[propName] = _this.properties[propName] = component[propName];
_this.propertiesChange.next(_this.properties)
})
}, WjComponentLoader.decorators = [{
type: core_1.Component, args: [{
selector: 'wj-component-loader', template: "<div #anchor></div>", inputs: ['component', 'properties'], outputs: ['propertiesChange']
}, ]
}, ], WjComponentLoader.ctorParameters = [{
type: core_1.ComponentFactoryResolver, decorators: [{
type: core_3.Inject, args: [core_1.ComponentFactoryResolver, ]
}, ]
}, {
type: core_2.ElementRef, decorators: [{
type: core_3.Inject, args: [core_2.ElementRef, ]
}, ]
}, ], WjComponentLoader.propDecorators = {_anchor: [{
type: core_1.ViewChild, args: ['anchor', {read: core_2.ViewContainerRef}, ]
}, ]}, WjComponentLoader
}();
exports.WjComponentLoader = WjComponentLoader;
moduleExports = [WjTooltip, WjComponentLoader];
WjCoreModule = function()
{
function WjCoreModule(){}
return WjCoreModule.decorators = [{
type: core_1.NgModule, args: [{
imports: [wijmo_angular2_directiveBase_1.WjDirectiveBaseModule, common_1.CommonModule], declarations: moduleExports.slice(), exports: moduleExports.slice()
}, ]
}, ], WjCoreModule.ctorParameters = [], WjCoreModule
}();
exports.WjCoreModule = WjCoreModule