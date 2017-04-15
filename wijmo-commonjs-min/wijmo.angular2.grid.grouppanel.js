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
wjcGridGrouppanel=require('wijmo/wijmo.grid.grouppanel'),
core_1=require('@angular/core'),
core_2=require('@angular/core'),
core_3=require('@angular/core'),
common_1=require('@angular/common'),
forms_1=require('@angular/forms'),
wijmo_angular2_directiveBase_1=require('wijmo/wijmo.angular2.directiveBase'),
WjGroupPanel,
moduleExports,
WjGridGrouppanelModule;
exports.wjGroupPanelMeta = {
selector: 'wj-group-panel', template: "", inputs: ['wjModelProperty', 'isDisabled', 'hideGroupedColumns', 'maxGroups', 'placeholder', 'grid', ], outputs: ['initialized', 'gotFocusNg: gotFocus', 'lostFocusNg: lostFocus', ], providers: [{
provide: forms_1.NG_VALUE_ACCESSOR, useFactory: wijmo_angular2_directiveBase_1.WjValueAccessorFactory, multi: !0, deps: ['WjComponent']
}]
};
WjGroupPanel = function(_super)
{
function WjGroupPanel(elRef, injector, parentCmp)
{
_super.call(this, wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(elRef));
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.gotFocusNg = new core_1.EventEmitter(!1);
this.lostFocusNg = new core_1.EventEmitter(!1);
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp);
this.created()
}
return __extends(WjGroupPanel, _super), WjGroupPanel.prototype.created = function(){}, WjGroupPanel.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjGroupPanel.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjGroupPanel.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjGroupPanel.meta = {outputs: exports.wjGroupPanelMeta.outputs}, WjGroupPanel.decorators = [{
type: core_1.Component, args: [{
selector: exports.wjGroupPanelMeta.selector, template: exports.wjGroupPanelMeta.template, inputs: exports.wjGroupPanelMeta.inputs, outputs: exports.wjGroupPanelMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjGroupPanel
})
}].concat(exports.wjGroupPanelMeta.providers)
}, ]
}, ], WjGroupPanel.ctorParameters = [{
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
}, ], WjGroupPanel
}(wjcGridGrouppanel.GroupPanel);
exports.WjGroupPanel = WjGroupPanel;
moduleExports = [WjGroupPanel];
WjGridGrouppanelModule = function()
{
function WjGridGrouppanelModule(){}
return WjGridGrouppanelModule.decorators = [{
type: core_1.NgModule, args: [{
imports: [wijmo_angular2_directiveBase_1.WjDirectiveBaseModule, common_1.CommonModule], declarations: moduleExports.slice(), exports: moduleExports.slice()
}, ]
}, ], WjGridGrouppanelModule.ctorParameters = [], WjGridGrouppanelModule
}();
exports.WjGridGrouppanelModule = WjGridGrouppanelModule