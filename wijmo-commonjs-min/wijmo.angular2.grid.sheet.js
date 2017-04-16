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
wjcGridSheet=require('wijmo/wijmo.grid.sheet'),
core_1=require('@angular/core'),
core_2=require('@angular/core'),
core_3=require('@angular/core'),
common_1=require('@angular/common'),
forms_1=require('@angular/forms'),
wijmo_angular2_directiveBase_1=require('wijmo/wijmo.angular2.directiveBase'),
WjFlexSheet,
WjSheet,
moduleExports,
WjGridSheetModule;
exports.wjFlexSheetMeta = {
selector: 'wj-flex-sheet', template: "<div><ng-content></ng-content></div>", inputs: ['wjModelProperty', 'isDisabled', 'newRowAtTop', 'allowAddNew', 'allowDelete', 'allowDragging', 'allowMerging', 'allowResizing', 'allowSorting', 'autoSizeMode', 'autoGenerateColumns', 'childItemsPath', 'groupHeaderFormat', 'headersVisibility', 'showSelectedHeaders', 'showMarquee', 'itemFormatter', 'isReadOnly', 'imeEnabled', 'mergeManager', 'selectionMode', 'showGroups', 'showSort', 'showAlternatingRows', 'showErrors', 'validateEdits', 'treeIndent', 'itemsSource', 'autoClipboard', 'frozenRows', 'frozenColumns', 'deferResizing', 'sortRowIndex', 'stickyHeaders', 'preserveSelectedState', 'preserveOutlineState', 'isTabHolderVisible', 'selectedSheetIndex', ], outputs: ['initialized', 'gotFocusNg: gotFocus', 'lostFocusNg: lostFocus', 'beginningEditNg: beginningEdit', 'cellEditEndedNg: cellEditEnded', 'cellEditEndingNg: cellEditEnding', 'prepareCellForEditNg: prepareCellForEdit', 'formatItemNg: formatItem', 'resizingColumnNg: resizingColumn', 'resizedColumnNg: resizedColumn', 'autoSizingColumnNg: autoSizingColumn', 'autoSizedColumnNg: autoSizedColumn', 'draggingColumnNg: draggingColumn', 'draggingColumnOverNg: draggingColumnOver', 'draggedColumnNg: draggedColumn', 'sortingColumnNg: sortingColumn', 'sortedColumnNg: sortedColumn', 'resizingRowNg: resizingRow', 'resizedRowNg: resizedRow', 'autoSizingRowNg: autoSizingRow', 'autoSizedRowNg: autoSizedRow', 'draggingRowNg: draggingRow', 'draggingRowOverNg: draggingRowOver', 'draggedRowNg: draggedRow', 'deletingRowNg: deletingRow', 'loadingRowsNg: loadingRows', 'loadedRowsNg: loadedRows', 'rowEditStartingNg: rowEditStarting', 'rowEditStartedNg: rowEditStarted', 'rowEditEndingNg: rowEditEnding', 'rowEditEndedNg: rowEditEnded', 'rowAddedNg: rowAdded', 'groupCollapsedChangedNg: groupCollapsedChanged', 'groupCollapsedChangingNg: groupCollapsedChanging', 'itemsSourceChangedNg: itemsSourceChanged', 'selectionChangingNg: selectionChanging', 'selectionChangedNg: selectionChanged', 'scrollPositionChangedNg: scrollPositionChanged', 'updatingViewNg: updatingView', 'updatedViewNg: updatedView', 'updatingLayoutNg: updatingLayout', 'updatedLayoutNg: updatedLayout', 'pastingNg: pasting', 'pastedNg: pasted', 'pastingCellNg: pastingCell', 'pastedCellNg: pastedCell', 'copyingNg: copying', 'copiedNg: copied', 'selectedSheetChangedNg: selectedSheetChanged', 'selectedSheetIndexChangePC: selectedSheetIndexChange', 'draggingRowColumnNg: draggingRowColumn', 'droppingRowColumnNg: droppingRowColumn', 'loadedNg: loaded', 'unknownFunctionNg: unknownFunction', 'sheetClearedNg: sheetCleared', ], providers: [{
provide: forms_1.NG_VALUE_ACCESSOR, useFactory: wijmo_angular2_directiveBase_1.WjValueAccessorFactory, multi: !0, deps: ['WjComponent']
}]
};
WjFlexSheet = function(_super)
{
function WjFlexSheet(elRef, injector, parentCmp)
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
this.selectedSheetChangedNg = new core_1.EventEmitter(!1);
this.selectedSheetIndexChangePC = new core_1.EventEmitter(!1);
this.draggingRowColumnNg = new core_1.EventEmitter(!1);
this.droppingRowColumnNg = new core_1.EventEmitter(!1);
this.loadedNg = new core_1.EventEmitter(!1);
this.unknownFunctionNg = new core_1.EventEmitter(!1);
this.sheetClearedNg = new core_1.EventEmitter(!1);
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp);
this.created()
}
return __extends(WjFlexSheet, _super), WjFlexSheet.prototype.created = function(){}, WjFlexSheet.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexSheet.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexSheet.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexSheet.meta = {
outputs: exports.wjFlexSheetMeta.outputs, changeEvents: {selectedSheetChanged: ['selectedSheetIndex']}
}, WjFlexSheet.decorators = [{
type: core_1.Component, args: [{
selector: exports.wjFlexSheetMeta.selector, template: exports.wjFlexSheetMeta.template, inputs: exports.wjFlexSheetMeta.inputs, outputs: exports.wjFlexSheetMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexSheet
})
}].concat(exports.wjFlexSheetMeta.providers)
}, ]
}, ], WjFlexSheet.ctorParameters = [{
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
}, ], WjFlexSheet
}(wjcGridSheet.FlexSheet);
exports.WjFlexSheet = WjFlexSheet;
exports.wjSheetMeta = {
selector: 'wj-sheet', template: "", inputs: ['wjProperty', 'name', 'itemsSource', 'visible', 'rowCount', 'columnCount', ], outputs: ['initialized', 'nameChangedNg: nameChanged', ], providers: []
};
WjSheet = function(_super)
{
function WjSheet(elRef, injector, parentCmp)
{
_super.call(this, parentCmp);
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.nameChangedNg = new core_1.EventEmitter(!1);
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp);
this._flexSheet = parentCmp;
this.created()
}
return __extends(WjSheet, _super), WjSheet.prototype.created = function(){}, WjSheet.prototype.ngOnInit = function()
{
return this._wjBehaviour.ngOnInit(), this.itemsSource ? this._flexSheet.addBoundSheet(this.name, this.itemsSource) : this._flexSheet.addUnboundSheet(this.name, this.boundRowCount != null ? +this.boundRowCount : null, this.boundColumnCount != null ? +this.boundColumnCount : null)
}, WjSheet.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjSheet.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjSheet.prototype.ngOnChanges = function(changes)
{
var chg;
(chg = changes.rowCount) && chg.isFirstChange && (this.boundRowCount = chg.currentValue);
(chg = changes.columnCount) && chg.isFirstChange && (this.boundColumnCount = chg.currentValue)
}, WjSheet.meta = {outputs: exports.wjSheetMeta.outputs}, WjSheet.decorators = [{
type: core_1.Component, args: [{
selector: exports.wjSheetMeta.selector, template: exports.wjSheetMeta.template, inputs: exports.wjSheetMeta.inputs, outputs: exports.wjSheetMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjSheet
})
}].concat(exports.wjSheetMeta.providers)
}, ]
}, ], WjSheet.ctorParameters = [{
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
}, ], WjSheet
}(wjcGridSheet.Sheet);
exports.WjSheet = WjSheet;
moduleExports = [WjFlexSheet, WjSheet];
WjGridSheetModule = function()
{
function WjGridSheetModule(){}
return WjGridSheetModule.decorators = [{
type: core_1.NgModule, args: [{
imports: [wijmo_angular2_directiveBase_1.WjDirectiveBaseModule, common_1.CommonModule], declarations: moduleExports.slice(), exports: moduleExports.slice()
}, ]
}, ], WjGridSheetModule.ctorParameters = [], WjGridSheetModule
}();
exports.WjGridSheetModule = WjGridSheetModule