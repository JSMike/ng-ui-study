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
"use strict";var __extends=this&&this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);n.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)},wjcGrid=require('wijmo/wijmo.grid'),wjcCore=require('wijmo/wijmo'),wjcSelf=require('wijmo/wijmo.grid.multirow'),_MultiRow,_Cell,_CellGroup,_MergeManager,_AddNewHandler,_NewRowTemplate,MultiRow;window.wijmo=window.wijmo||{};window.wijmo.grid=window.wijmo.grid||{};window.wijmo.grid.multirow=wjcSelf;_MultiRow=function(n){function t(t,i,r){n.call(this,t);this._idxData=i;this._idxRecord=r}return __extends(t,n),Object.defineProperty(t.prototype,"recordIndex",{get:function(){return this._idxRecord},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"dataIndex",{get:function(){return this._idxData},enumerable:!0,configurable:!0}),t}(wjcGrid.Row);exports._MultiRow=_MultiRow;_Cell=function(n){function t(t){n.call(this);this._row=this._col=0;this._rowspan=this._colspan=1;t&&wjcCore.copy(this,t)}return __extends(t,n),Object.defineProperty(t.prototype,"colspan",{get:function(){return this._colspan},set:function(n){this._colspan=wjcCore.asInt(n,!1,!0)},enumerable:!0,configurable:!0}),t}(wjcGrid.Column);exports._Cell=_Cell;_CellGroup=function(n){function t(t,i){var e,f,r,u;if(n.call(this),this._colstart=0,this._g=t,i&&wjcCore.copy(this,i),!this._cells)throw'Cell group with no cells?';for(this._colspan>this._cells.length&&(this._colspan=this._cells.length),e=0,f=0,r=0;r<this._cells.length;r++)u=this._cells[r],f+u.colspan>this._colspan&&(e++,f=0),u._row=e,u._col=f,f+=u.colspan;for(this._rowspan=e+1,r=0;r<this._cells.length;r++)u=this._cells[r],(r==this._cells.length-1||this._cells[r+1]._row>u._row)&&(f=u._col,u._colspan=this._colspan-f)}return __extends(t,n),t.prototype._copy=function(n,t){var i,r;if(n=='cells'){if(this._cells=[],wjcCore.isArray(t))for(i=0;i<t.length;i++)r=new _Cell(t[i]),!t[i].header&&r.binding&&(t.header=wjcCore.toHeaderCase(r.binding)),this._cells.push(r),this._colspan=Math.max(this._colspan,r.colspan);return!0}return!1},Object.defineProperty(t.prototype,"cells",{get:function(){return this._cells},enumerable:!0,configurable:!0}),t.prototype.closeGroup=function(n){var i,t,r,u,f,e;if(n>this._rowspan){for(i=0;i<this._cells.length;i++)t=this._cells[i],t._row==this._rowspan-1&&(t._rowspan=n-t._row);this._rowspan=n}for(this._cols=new wjcGrid.ColumnCollection(this._g,this._g.columns.defaultSize),this._rng=new Array(n*this._colspan),i=0;i<this._cells.length;i++)for(t=this._cells[i],r=0;r<t._rowspan;r++)for(u=0;u<t._colspan;u++)f=(t._row+r)*this._colspan+t._col+u,this._cols.setAt(f,t),e=new wjcGrid.CellRange(0-r,0-u,0-r+t._rowspan-1,0-u+t._colspan-1),e.isSingleCell||(this._rng[f]=e);this._rng[-1]=new wjcGrid.CellRange(0,this._colstart,0,this._colstart+this._colspan-1)},t.prototype.getColumnWidth=function(n){for(var i,t=0;t<this._cells.length;t++)if(i=this._cells[t],i._col==n&&i.colspan==1)return i.width;return null},t.prototype.getMergedRange=function(n,t,i){if(t<0)return this._rng[-1];var u=n.rows[t],f=u.recordIndex!=null?u.recordIndex:t%this._rowspan,e=i-this._colstart,r=this._rng[f*this._colspan+e];return n.cellType==wjcGrid.CellType.ColumnHeader&&t++,r?new wjcGrid.CellRange(t+r.row,i+r.col,t+r.row2,i+r.col2):null},t.prototype.getBindingColumn=function(n,t,i){if(t<0)return this;var r=n.rows[t],u=r.recordIndex!=null?r.recordIndex:t%this._rowspan,f=i-this._colstart;return this._cols[u*this._colspan+f]},t.prototype.getColumn=function(n){return this._cols.getColumn(n)},t}(_Cell);exports._CellGroup=_CellGroup;_MergeManager=function(n){function t(){n.apply(this,arguments)}return __extends(t,n),t.prototype.getMergedRange=function(t,i,r,u){var s,c,o,f,e;u===void 0&&(u=!0);s=t.grid;switch(t.cellType){case wjcGrid.CellType.Cell:case wjcGrid.CellType.RowHeader:if(t.rows[i]instanceof wjcGrid.GroupRow)return n.prototype.getMergedRange.call(this,t,i,r,u)}switch(t.cellType){case wjcGrid.CellType.Cell:case wjcGrid.CellType.ColumnHeader:return t.cellType==wjcGrid.CellType.ColumnHeader&&(c=123),o=s._cellGroupsByColumn[r],wjcCore.assert(o instanceof _CellGroup,'Failed to get the group!'),f=t.cellType==wjcGrid.CellType.ColumnHeader?o.getMergedRange(t,i-1,r):o.getMergedRange(t,i,r),f&&t.columns.frozen&&(e=t.columns.frozen,f.col<e&&f.col2>=e&&(r<e?f.col2=e-1:f.col=e)),f&&t.rows.frozen&&t.cellType==wjcGrid.CellType.Cell&&(e=t.rows.frozen,f.row<e&&f.row2>=e&&(i<e?f.row2=e-1:f.row=e)),f;case wjcGrid.CellType.RowHeader:var l=s._rowsPerItem,a=t.rows[i],h=i-a.recordIndex;return new wjcGrid.CellRange(h,0,h+l-1,t.columns.length-1);case wjcGrid.CellType.TopLeft:return new wjcGrid.CellRange(0,0,t.rows.length-1,t.columns.length-1)}return null},t}(wjcGrid.MergeManager);exports._MergeManager=_MergeManager;_AddNewHandler=function(n){function t(t){var i=t._addHdl;i._detach();n.call(this,t)}return __extends(t,n),t.prototype.updateNewRowTemplate=function(){for(var e,u=wjcCore.tryCast(this._g.collectionView,'IEditableCollectionView'),i=this._g,t=i.rows,f=u&&u.canAddNew&&i.allowAddNew&&!i.isReadOnly,r=!0,n=t.length-i.rowsPerItem;n<t.length;n++)if(!(t[n]instanceof _NewRowTemplate)){r=!1;break}if(f&&!r)for(n=0;n<i.rowsPerItem;n++)e=new _NewRowTemplate(n),t.push(e);if(!f&&r)for(n=0;n<t.length;n++)t[n]instanceof _NewRowTemplate&&(t.removeAt(n),n--)},t}(wjcGrid._AddNewHandler);exports._AddNewHandler=_AddNewHandler;_NewRowTemplate=function(n){function t(t){n.call(this);this._idxRecord=t}return __extends(t,n),Object.defineProperty(t.prototype,"recordIndex",{get:function(){return this._idxRecord},enumerable:!0,configurable:!0}),t}(wjcGrid._NewRowTemplate);MultiRow=function(n){function t(t,i){var r=this,e,u,f;n.call(this,t);this._rowsPerItem=1;this._cellBindingGroups=[];this._centerVert=!0;this._collapsedHeaders=!1;wjcCore.addClass(this.hostElement,'wj-multirow');e=this.columnHeaders.hostElement.parentElement;u=wjcCore.createElement('<div class="wj-hdr-collapse"><span></span></div>');u.style.display='none';e.appendChild(u);this._btnCollapse=u;this._updateButtonGlyph();this.addEventListener(u,'mousedown',function(n){r.collapsedHeaders=!r.collapsedHeaders;n.preventDefault()},!0);this.autoGenerateColumns=!1;this.mergeManager=new _MergeManager(this);f=this.hostElement;this.removeEventListener(f,'dragover');this.removeEventListener(f,'dragleave');this.removeEventListener(f,'dragdrop');this._addHdl=new _AddNewHandler(this);this.formatItem.addHandler(this._formatItem,this);this.addEventListener(this.rowHeaders.hostElement,'click',function(n){var i=r.hitTest(n),t,u;i.panel==r.rowHeaders&&i.row>-1&&(t=r.rows[i.row],t.recordIndex!=null&&(u=t.index-t.recordIndex,r.select(new wjcGrid.CellRange(u,0,u+r.rowsPerItem-1,r.columns.length-1))))});this.initialize(i)}return __extends(t,n),Object.defineProperty(t.prototype,"layoutDefinition",{get:function(){return this._layoutDef},set:function(n){var t,i;for(this._layoutDef=wjcCore.asArray(n),this._rowsPerItem=1,this._cellBindingGroups=this._parseCellGroups(this._layoutDef),t=0;t<this._cellBindingGroups.length;t++)i=this._cellBindingGroups[t],this._rowsPerItem=Math.max(this._rowsPerItem,i._rowspan);this._bindGrid(!0)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"rowsPerItem",{get:function(){return this._rowsPerItem},enumerable:!0,configurable:!0}),t.prototype.getBindingColumn=function(n,t,i){return this._getBindingColumn(n,t,n.columns[i])},t.prototype.getColumn=function(n){for(var r,i=this._cellBindingGroups,t=0;t<i.length;t++)if(r=i[t].getColumn(n),i[t].getBindingColumn,r)return r;return null},Object.defineProperty(t.prototype,"centerHeadersVertically",{get:function(){return this._centerVert},set:function(n){n!=this._centerVert&&(this._centerVert=wjcCore.asBoolean(n),this.invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"collapsedHeaders",{get:function(){return this._collapsedHeaders},set:function(n){n!=this._collapsedHeaders&&(this._collapsedHeaders=wjcCore.asBoolean(n,!0),this._updateCollapsedHeaders(),this._updateButtonGlyph())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"showHeaderCollapseButton",{get:function(){return this._btnCollapse.style.display==''},set:function(n){n!=this.showHeaderCollapseButton&&(this._btnCollapse.style.display=wjcCore.asBoolean(n)?'':'none')},enumerable:!0,configurable:!0}),t.prototype._addBoundRow=function(n,t){for(var r=n[t],i=0;i<this._rowsPerItem;i++)this.rows.push(new _MultiRow(r,t,i))},t.prototype._addNode=function(n,t){this._addBoundRow(n,t)},t.prototype._bindColumns=function(){for(var n=this.columnHeaders.rows,s=this._rowsPerItem+1,h,t,r,i,u,o,f,e;n.length>s;)n.removeAt(n.length-1);while(n.length<s)n.push(new wjcGrid.Row);if(this._updateCollapsedHeaders(),this.columns.clear(),this._cellGroupsByColumn={},h=null,t=this.collectionView,t&&t.sourceCollection&&t.sourceCollection.length&&(h=t.sourceCollection[0]),this._cellBindingGroups)for(r=0;r<this._cellBindingGroups.length;r++)for(i=this._cellBindingGroups[r],u=0;u<i._colspan;u++){for(this._cellGroupsByColumn[this.columns.length]=i,o=new wjcGrid.Column,f=0;f<i.cells.length;f++)if(e=i.cells[f],e._col==u&&e.width){o.width=e.width;break}this.columns.push(o)}},t.prototype._updateCollapsedHeaders=function(){var t=this.columnHeaders.rows,i=this.collapsedHeaders,n;for(t[0].visible=i!=!1,n=1;n<t.length;n++)t[n].visible=i!=!0},t.prototype._updateColumnTypes=function(){var u,e,i,f,r,t;if(n.prototype._updateColumnTypes.call(this),u=this.collectionView,wjcCore.hasItems(u))for(e=u.items[0],i=0;i<this._cellBindingGroups.length;i++)for(f=this._cellBindingGroups[i],r=0;r<f._cols.length;r++)t=f._cols[r],t.dataType==null&&t._binding&&(t.dataType=wjcCore.getType(t._binding.getValue(e)))},t.prototype._getBindingColumn=function(n,t,i){if(n==this.cells||n==this.columnHeaders){var r=this._cellGroupsByColumn[i.index];n==this.columnHeaders&&t--;i=r.getBindingColumn(n,t,i.index)}return i},t.prototype._cvCollectionChanged=function(n,t){var i,r;if(this.autoGenerateColumns&&this.columns.length==0)this._bindGrid(!0);else switch(t.action){case wjcCore.NotifyCollectionChangedAction.Change:this.invalidate();break;case wjcCore.NotifyCollectionChangedAction.Add:if(t.index==this.collectionView.items.length-1){for(i=this.rows.length;i>0&&this.rows[i-1]instanceof wjcGrid._NewRowTemplate;)i--;for(r=0;r<this._rowsPerItem;r++)this.rows.insert(i+r,new _MultiRow(t.item,t.index,r));return}wjcCore.assert(!1,'added item should be the last one.');break;default:this._bindGrid(!1)}},t.prototype._parseCellGroups=function(n){var r=[],u=1,f,i,t;if(n){for(t=0,f=0;t<n.length;t++)i=new _CellGroup(this,n[t]),i._colstart=f,f+=i._colspan,u=Math.max(u,i._rowspan),r.push(i);for(t=0;t<r.length;t++)r[t].closeGroup(u)}return r},t.prototype._formatItem=function(n,t){var e=this._rowsPerItem,i=t.panel.cellType,u=t.panel.rows[t.range.row],o=t.panel.rows[t.range.row2],r,s,f;i==wjcGrid.CellType.ColumnHeader&&wjcCore.toggleClass(t.cell,'wj-group-header',t.range.row==0);(i==wjcGrid.CellType.Cell||i==wjcGrid.CellType.ColumnHeader)&&(r=this._cellGroupsByColumn[t.col],wjcCore.assert(r instanceof _CellGroup,'Failed to get the group!'),wjcCore.toggleClass(t.cell,'wj-group-start',r._colstart==t.range.col),wjcCore.toggleClass(t.cell,'wj-group-end',r._colstart+r._colspan-1==t.range.col2));e>1&&(i==wjcGrid.CellType.Cell||i==wjcGrid.CellType.RowHeader)&&(wjcCore.toggleClass(t.cell,'wj-record-start',u instanceof _MultiRow?u.recordIndex==0:!1),wjcCore.toggleClass(t.cell,'wj-record-end',o instanceof _MultiRow?o.recordIndex==e-1:!1));this.showAlternatingRows&&wjcCore.toggleClass(t.cell,'wj-alt',u instanceof _MultiRow?u.dataIndex%2!=0:!1);this._centerVert&&(t.cell.hasChildNodes&&t.range.rowSpan>1?(s=wjcCore.createElement('<div style="display:table-cell;vertical-align:middle"></div>'),f=document.createRange(),f.selectNodeContents(t.cell),f.surroundContents(s),wjcCore.setCss(t.cell,{display:'table',tableLayout:'fixed',paddingTop:0,paddingBottom:0})):wjcCore.setCss(t.cell,{display:'',tableLayout:'',paddingTop:'',paddingBottom:''}))},t.prototype._updateButtonGlyph=function(){var n=this._btnCollapse.querySelector('span');n instanceof HTMLElement&&(n.className=this.collapsedHeaders?'wj-glyph-left':'wj-glyph-down-left')},t}(wjcGrid.FlexGrid);exports.MultiRow=MultiRow