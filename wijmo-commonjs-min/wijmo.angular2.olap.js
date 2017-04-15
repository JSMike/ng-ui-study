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
wjcOlap=require('wijmo/wijmo.olap'),
core_1=require('@angular/core'),
core_2=require('@angular/core'),
core_3=require('@angular/core'),
common_1=require('@angular/common'),
forms_1=require('@angular/forms'),
wijmo_angular2_directiveBase_1=require('wijmo/wijmo.angular2.directiveBase'),
WjPivotGrid,
WjPivotChart,
WjPivotPanel,
moduleExports,
WjOlapModule;
exports.wjPivotGridMeta = {
selector: 'wj-pivot-grid', template: "", inputs: ['wjModelProperty', 'isDisabled', 'newRowAtTop', 'allowAddNew', 'allowDelete', 'allowDragging', 'allowMerging', 'allowResizing', 'allowSorting', 'autoSizeMode', 'autoGenerateColumns', 'childItemsPath', 'groupHeaderFormat', 'headersVisibility', 'showSelectedHeaders', 'showMarquee', 'itemFormatter', 'isReadOnly', 'imeEnabled', 'mergeManager', 'selectionMode', 'showGroups', 'showSort', 'showAlternatingRows', 'showErrors', 'validateEdits', 'treeIndent', 'itemsSource', 'autoClipboard', 'frozenRows', 'frozenColumns', 'deferResizing', 'sortRowIndex', 'stickyHeaders', 'preserveSelectedState', 'preserveOutlineState', 'showDetailOnDoubleClick', 'customContextMenu', 'collapsibleSubtotals', 'centerHeadersVertically', ], outputs: ['initialized', 'gotFocusNg: gotFocus', 'lostFocusNg: lostFocus', 'beginningEditNg: beginningEdit', 'cellEditEndedNg: cellEditEnded', 'cellEditEndingNg: cellEditEnding', 'prepareCellForEditNg: prepareCellForEdit', 'formatItemNg: formatItem', 'resizingColumnNg: resizingColumn', 'resizedColumnNg: resizedColumn', 'autoSizingColumnNg: autoSizingColumn', 'autoSizedColumnNg: autoSizedColumn', 'draggingColumnNg: draggingColumn', 'draggingColumnOverNg: draggingColumnOver', 'draggedColumnNg: draggedColumn', 'sortingColumnNg: sortingColumn', 'sortedColumnNg: sortedColumn', 'resizingRowNg: resizingRow', 'resizedRowNg: resizedRow', 'autoSizingRowNg: autoSizingRow', 'autoSizedRowNg: autoSizedRow', 'draggingRowNg: draggingRow', 'draggingRowOverNg: draggingRowOver', 'draggedRowNg: draggedRow', 'deletingRowNg: deletingRow', 'loadingRowsNg: loadingRows', 'loadedRowsNg: loadedRows', 'rowEditStartingNg: rowEditStarting', 'rowEditStartedNg: rowEditStarted', 'rowEditEndingNg: rowEditEnding', 'rowEditEndedNg: rowEditEnded', 'rowAddedNg: rowAdded', 'groupCollapsedChangedNg: groupCollapsedChanged', 'groupCollapsedChangingNg: groupCollapsedChanging', 'itemsSourceChangedNg: itemsSourceChanged', 'selectionChangingNg: selectionChanging', 'selectionChangedNg: selectionChanged', 'scrollPositionChangedNg: scrollPositionChanged', 'updatingViewNg: updatingView', 'updatedViewNg: updatedView', 'updatingLayoutNg: updatingLayout', 'updatedLayoutNg: updatedLayout', 'pastingNg: pasting', 'pastedNg: pasted', 'pastingCellNg: pastingCell', 'pastedCellNg: pastedCell', 'copyingNg: copying', 'copiedNg: copied', ], providers: [{
provide: forms_1.NG_VALUE_ACCESSOR, useFactory: wijmo_angular2_directiveBase_1.WjValueAccessorFactory, multi: !0, deps: ['WjComponent']
}]
};
WjPivotGrid = function(_super)
{
function WjPivotGrid(elRef, injector, parentCmp)
{
_super.call(this, wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(elRef));
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.gotFocusNg = new core_1.EventEmitter(!1);
this.lostFocusNg = new core_1.EventEmitter(!1);
this.beginningEditNg = new core_1.EventEmitter(!1);
this.cellEditEndedNg = new core_1.EventEmitter(!1);
this.cellEditEndingNg = new core_1.EventEmitter(!1);
this.prepareCellForEditNg = new core_1.EventEmitter(!1);
this.formatItemNg = new core_1.EventEmitter(!1);
this.resizingColumnNg = new core_1.EventEmitter(!1);
this.resizedColumnNg = new core_1.EventEmitter(!1);
this.autoSizingColumnNg = new core_1.EventEmitter(!1);
this.autoSizedColumnNg = new core_1.EventEmitter(!1);
this.draggingColumnNg = new core_1.EventEmitter(!1);
this.draggingColumnOverNg = new core_1.EventEmitter(!1);
this.draggedColumnNg = new core_1.EventEmitter(!1);
this.sortingColumnNg = new core_1.EventEmitter(!1);
this.sortedColumnNg = new core_1.EventEmitter(!1);
this.resizingRowNg = new core_1.EventEmitter(!1);
this.resizedRowNg = new core_1.EventEmitter(!1);
this.autoSizingRowNg = new core_1.EventEmitter(!1);
this.autoSizedRowNg = new core_1.EventEmitter(!1);
this.draggingRowNg = new core_1.EventEmitter(!1);
this.draggingRowOverNg = new core_1.EventEmitter(!1);
this.draggedRowNg = new core_1.EventEmitter(!1);
this.deletingRowNg = new core_1.EventEmitter(!1);
this.loadingRowsNg = new core_1.EventEmitter(!1);
this.loadedRowsNg = new core_1.EventEmitter(!1);
this.rowEditStartingNg = new core_1.EventEmitter(!1);
this.rowEditStartedNg = new core_1.EventEmitter(!1);
this.rowEditEndingNg = new core_1.EventEmitter(!1);
this.rowEditEndedNg = new core_1.EventEmitter(!1);
this.rowAddedNg = new core_1.EventEmitter(!1);
this.groupCollapsedChangedNg = new core_1.EventEmitter(!1);
this.groupCollapsedChangingNg = new core_1.EventEmitter(!1);
this.itemsSourceChangedNg = new core_1.EventEmitter(!1);
this.selectionChangingNg = new core_1.EventEmitter(!1);
this.selectionChangedNg = new core_1.EventEmitter(!1);
this.scrollPositionChangedNg = new core_1.EventEmitter(!1);
this.updatingViewNg = new core_1.EventEmitter(!1);
this.updatedViewNg = new core_1.EventEmitter(!1);
this.updatingLayoutNg = new core_1.EventEmitter(!1);
this.updatedLayoutNg = new core_1.EventEmitter(!1);
this.pastingNg = new core_1.EventEmitter(!1);
this.pastedNg = new core_1.EventEmitter(!1);
this.pastingCellNg = new core_1.EventEmitter(!1);
this.pastedCellNg = new core_1.EventEmitter(!1);
this.copyingNg = new core_1.EventEmitter(!1);
this.copiedNg = new core_1.EventEmitter(!1);
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp);
this.created()
}
return __extends(WjPivotGrid, _super), WjPivotGrid.prototype.created = function(){}, WjPivotGrid.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjPivotGrid.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjPivotGrid.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjPivotGrid.meta = {outputs: exports.wjPivotGridMeta.outputs}, WjPivotGrid.decorators = [{
type: core_1.Component, args: [{
selector: exports.wjPivotGridMeta.selector, template: exports.wjPivotGridMeta.template, inputs: exports.wjPivotGridMeta.inputs, outputs: exports.wjPivotGridMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjPivotGrid
})
}].concat(exports.wjPivotGridMeta.providers)
}, ]
}, ], WjPivotGrid.ctorParameters = [{
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
}, ], WjPivotGrid
}(wjcOlap.PivotGrid);
exports.WjPivotGrid = WjPivotGrid;
exports.wjPivotChartMeta = {
selector: 'wj-pivot-chart', template: "", inputs: ['wjModelProperty', 'chartType', 'showHierarchicalAxes', 'showTotals', 'stacking', 'maxSeries', 'maxPoints', 'itemsSource', ], outputs: ['initialized', ], providers: [{
provide: forms_1.NG_VALUE_ACCESSOR, useFactory: wijmo_angular2_directiveBase_1.WjValueAccessorFactory, multi: !0, deps: ['WjComponent']
}]
};
WjPivotChart = function(_super)
{
function WjPivotChart(elRef, injector, parentCmp)
{
_super.call(this, wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(elRef));
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp);
this.created()
}
return __extends(WjPivotChart, _super), WjPivotChart.prototype.created = function(){}, WjPivotChart.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjPivotChart.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjPivotChart.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjPivotChart.meta = {outputs: exports.wjPivotChartMeta.outputs}, WjPivotChart.decorators = [{
type: core_1.Component, args: [{
selector: exports.wjPivotChartMeta.selector, template: exports.wjPivotChartMeta.template, inputs: exports.wjPivotChartMeta.inputs, outputs: exports.wjPivotChartMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjPivotChart
})
}].concat(exports.wjPivotChartMeta.providers)
}, ]
}, ], WjPivotChart.ctorParameters = [{
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
}, ], WjPivotChart
}(wjcOlap.PivotChart);
exports.WjPivotChart = WjPivotChart;
exports.wjPivotPanelMeta = {
selector: 'wj-pivot-panel', template: "", inputs: ['wjModelProperty', 'autoGenerateFields', 'viewDefinition', 'engine', 'itemsSource', ], outputs: ['initialized', 'itemsSourceChangedNg: itemsSourceChanged', 'viewDefinitionChangedNg: viewDefinitionChanged', 'updatingViewNg: updatingView', 'updatedViewNg: updatedView', ], providers: [{
provide: forms_1.NG_VALUE_ACCESSOR, useFactory: wijmo_angular2_directiveBase_1.WjValueAccessorFactory, multi: !0, deps: ['WjComponent']
}]
};
WjPivotPanel = function(_super)
{
function WjPivotPanel(elRef, injector, parentCmp)
{
_super.call(this, wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(elRef));
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.itemsSourceChangedNg = new core_1.EventEmitter(!1);
this.viewDefinitionChangedNg = new core_1.EventEmitter(!1);
this.updatingViewNg = new core_1.EventEmitter(!1);
this.updatedViewNg = new core_1.EventEmitter(!1);
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp);
this.created()
}
return __extends(WjPivotPanel, _super), WjPivotPanel.prototype.created = function(){}, WjPivotPanel.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjPivotPanel.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjPivotPanel.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjPivotPanel.meta = {outputs: exports.wjPivotPanelMeta.outputs}, WjPivotPanel.decorators = [{
type: core_1.Component, args: [{
selector: exports.wjPivotPanelMeta.selector, template: exports.wjPivotPanelMeta.template, inputs: exports.wjPivotPanelMeta.inputs, outputs: exports.wjPivotPanelMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjPivotPanel
})
}].concat(exports.wjPivotPanelMeta.providers)
}, ]
}, ], WjPivotPanel.ctorParameters = [{
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
}, ], WjPivotPanel
}(wjcOlap.PivotPanel);
exports.WjPivotPanel = WjPivotPanel;
moduleExports = [WjPivotGrid, WjPivotChart, WjPivotPanel];
WjOlapModule = function()
{
function WjOlapModule(){}
return WjOlapModule.decorators = [{
type: core_1.NgModule, args: [{
imports: [wijmo_angular2_directiveBase_1.WjDirectiveBaseModule, common_1.CommonModule], declarations: moduleExports.slice(), exports: moduleExports.slice()
}, ]
}, ], WjOlapModule.ctorParameters = [], WjOlapModule
}();
exports.WjOlapModule = WjOlapModule