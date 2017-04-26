import * as wjcCore from 'wijmo/wijmo';
import * as wjcInput from 'wijmo/wijmo.input';
import * as wjcSelf from 'wijmo/wijmo.grid';
export declare enum HeadersVisibility {
    None = 0,
    Column = 1,
    Row = 2,
    All = 3,
}
export declare class FlexGrid extends wjcCore.Control {
    static _WJS_STICKY: string;
    static _WJS_MEASURE: string;
    static _MIN_VIRT_ROWS: number;
    private _root;
    private _eCt;
    private _fCt;
    _eTL: HTMLDivElement;
    _eBL: HTMLDivElement;
    _eFocus: HTMLDivElement;
    private _eCHdr;
    private _eCFtr;
    private _eRHdr;
    private _eCHdrCt;
    private _eCFtrCt;
    private _eRHdrCt;
    private _eTLCt;
    private _eBLCt;
    private _eSz;
    private _eMarquee;
    private _scrollHandlerAttached;
    private _gpTL;
    private _gpCHdr;
    private _gpRHdr;
    private _gpCells;
    private _gpBL;
    private _gpCFtr;
    private _maxOffsetY;
    private _heightBrowser;
    _szClient: wjcCore.Size;
    _offsetY: number;
    _lastCount: number;
    _rcBounds: wjcCore.Rect;
    _ptScrl: wjcCore.Point;
    _cellPadding: number;
    _mouseHdl: _MouseHandler;
    _edtHdl: _EditHandler;
    _selHdl: _SelectionHandler;
    _addHdl: _AddNewHandler;
    _keyHdl: _KeyboardHandler;
    private _imeHdl;
    private _mrgMgr;
    private _autoGenCols;
    private _autoClipboard;
    private _readOnly;
    private _indent;
    private _autoSizeMode;
    private _hdrVis;
    private _alSorting;
    private _alAddNew;
    private _alDelete;
    private _alResizing;
    private _alDragging;
    private _alMerging;
    private _ssHdr;
    private _shSort;
    private _shGroups;
    private _shAlt;
    private _shErr;
    private _valEdt;
    private _gHdrFmt;
    private _rows;
    private _cols;
    private _hdrRows;
    private _ftrRows;
    private _hdrCols;
    private _cf;
    private _itemFormatter;
    private _items;
    private _cv;
    private _childItemsPath;
    private _sortRowIndex;
    private _deferResizing;
    private _bndSortConverter;
    private _bndScroll;
    private _afScrl;
    private _stickyHdr;
    private _toSticky;
    private _pSel;
    private _pOutline;
    private _vt;
    static controlTemplate: string;
    constructor(element: any, options?: any);
    _handleResize(): void;
    headersVisibility: HeadersVisibility;
    stickyHeaders: boolean;
    preserveSelectedState: boolean;
    preserveOutlineState: boolean;
    _virtualizationThreshold: number;
    autoGenerateColumns: boolean;
    autoClipboard: boolean;
    columnLayout: string;
    isReadOnly: boolean;
    imeEnabled: boolean;
    allowResizing: AllowResizing;
    deferResizing: boolean;
    autoSizeMode: AutoSizeMode;
    allowSorting: boolean;
    allowAddNew: boolean;
    newRowAtTop: boolean;
    allowDelete: boolean;
    allowMerging: AllowMerging;
    showSelectedHeaders: HeadersVisibility;
    showMarquee: boolean;
    showSort: boolean;
    showGroups: boolean;
    showAlternatingRows: boolean;
    showErrors: boolean;
    validateEdits: boolean;
    groupHeaderFormat: string;
    allowDragging: AllowDragging;
    itemsSource: any;
    readonly collectionView: wjcCore.ICollectionView;
    childItemsPath: any;
    readonly cells: GridPanel;
    readonly columnHeaders: GridPanel;
    readonly columnFooters: GridPanel;
    readonly rowHeaders: GridPanel;
    readonly topLeftCells: GridPanel;
    readonly bottomLeftCells: GridPanel;
    readonly rows: RowCollection;
    readonly columns: ColumnCollection;
    getColumn(name: string): Column;
    frozenRows: number;
    frozenColumns: number;
    sortRowIndex: number;
    scrollPosition: wjcCore.Point;
    readonly clientSize: wjcCore.Size;
    readonly controlRect: wjcCore.Rect;
    readonly scrollSize: wjcCore.Size;
    readonly viewRange: CellRange;
    cellFactory: CellFactory;
    itemFormatter: Function;
    canEditCell(r: number, c: number): boolean;
    getCellData(r: number, c: number, formatted: boolean): any;
    getCellBoundingRect(r: number, c: number, raw?: boolean): wjcCore.Rect;
    setCellData(r: number, c: any, value: any, coerce?: boolean, invalidate?: boolean): boolean;
    hitTest(pt: any, y?: number): HitTestInfo;
    getClipString(rng?: CellRange): string;
    setClipString(text: string, rng?: CellRange): void;
    _clipToRows(text: string): string[];
    _clipToCells(text: string): string[];
    _expandClipString(text: string, rng: CellRange): string;
    focus(): void;
    containsFocus(): boolean;
    dispose(): void;
    refresh(fullUpdate?: boolean): void;
    refreshCells(fullUpdate: boolean, recycle?: boolean, state?: boolean): void;
    autoSizeColumn(c: number, header?: boolean, extra?: number): void;
    autoSizeColumns(firstColumn?: number, lastColumn?: number, header?: boolean, extra?: number): void;
    autoSizeRow(r: number, header?: boolean, extra?: number): void;
    autoSizeRows(firstRow?: number, lastRow?: number, header?: boolean, extra?: number): void;
    treeIndent: number;
    collapseGroupsToLevel(level: number): void;
    selectionMode: SelectionMode;
    selection: CellRange;
    select(rng: any, show?: any): void;
    getSelectedState(r: number, c: number): SelectedState;
    selectedRows: any[];
    selectedItems: any[];
    scrollIntoView(r: number, c: number): boolean;
    isRangeValid(rng: CellRange): boolean;
    startEditing(fullEdit?: boolean, r?: number, c?: number, focus?: boolean): boolean;
    finishEditing(cancel?: boolean): boolean;
    readonly activeEditor: HTMLInputElement;
    readonly editRange: CellRange;
    mergeManager: MergeManager;
    getMergedRange(p: GridPanel, r: number, c: number, clip?: boolean): CellRange;
    itemsSourceChanged: wjcCore.Event;
    onItemsSourceChanged(e?: wjcCore.EventArgs): void;
    scrollPositionChanged: wjcCore.Event;
    onScrollPositionChanged(e?: wjcCore.EventArgs): void;
    selectionChanging: wjcCore.Event;
    onSelectionChanging(e: CellRangeEventArgs): boolean;
    selectionChanged: wjcCore.Event;
    onSelectionChanged(e: CellRangeEventArgs): void;
    loadingRows: wjcCore.Event;
    onLoadingRows(e: wjcCore.CancelEventArgs): boolean;
    loadedRows: wjcCore.Event;
    onLoadedRows(e?: wjcCore.EventArgs): void;
    updatingLayout: wjcCore.Event;
    onUpdatingLayout(e: wjcCore.CancelEventArgs): boolean;
    updatedLayout: wjcCore.Event;
    onUpdatedLayout(e?: wjcCore.EventArgs): void;
    resizingColumn: wjcCore.Event;
    onResizingColumn(e: CellRangeEventArgs): boolean;
    resizedColumn: wjcCore.Event;
    onResizedColumn(e: CellRangeEventArgs): void;
    autoSizingColumn: wjcCore.Event;
    onAutoSizingColumn(e: CellRangeEventArgs): boolean;
    autoSizedColumn: wjcCore.Event;
    onAutoSizedColumn(e: CellRangeEventArgs): void;
    draggingColumn: wjcCore.Event;
    onDraggingColumn(e: CellRangeEventArgs): boolean;
    draggingColumnOver: wjcCore.Event;
    onDraggingColumnOver(e: CellRangeEventArgs): boolean;
    draggedColumn: wjcCore.Event;
    onDraggedColumn(e: CellRangeEventArgs): void;
    resizingRow: wjcCore.Event;
    onResizingRow(e: CellRangeEventArgs): boolean;
    resizedRow: wjcCore.Event;
    onResizedRow(e: CellRangeEventArgs): void;
    autoSizingRow: wjcCore.Event;
    onAutoSizingRow(e: CellRangeEventArgs): boolean;
    autoSizedRow: wjcCore.Event;
    onAutoSizedRow(e: CellRangeEventArgs): void;
    draggingRow: wjcCore.Event;
    onDraggingRow(e: CellRangeEventArgs): boolean;
    draggingRowOver: wjcCore.Event;
    onDraggingRowOver(e: CellRangeEventArgs): boolean;
    draggedRow: wjcCore.Event;
    onDraggedRow(e: CellRangeEventArgs): void;
    groupCollapsedChanging: wjcCore.Event;
    onGroupCollapsedChanging(e: CellRangeEventArgs): boolean;
    groupCollapsedChanged: wjcCore.Event;
    onGroupCollapsedChanged(e: CellRangeEventArgs): void;
    sortingColumn: wjcCore.Event;
    onSortingColumn(e: CellRangeEventArgs): boolean;
    sortedColumn: wjcCore.Event;
    onSortedColumn(e: CellRangeEventArgs): void;
    beginningEdit: wjcCore.Event;
    onBeginningEdit(e: CellRangeEventArgs): boolean;
    prepareCellForEdit: wjcCore.Event;
    onPrepareCellForEdit(e: CellRangeEventArgs): void;
    cellEditEnding: wjcCore.Event;
    onCellEditEnding(e: CellEditEndingEventArgs): boolean;
    cellEditEnded: wjcCore.Event;
    onCellEditEnded(e: CellRangeEventArgs): void;
    rowEditStarting: wjcCore.Event;
    onRowEditStarting(e: CellRangeEventArgs): void;
    rowEditStarted: wjcCore.Event;
    onRowEditStarted(e: CellRangeEventArgs): void;
    rowEditEnding: wjcCore.Event;
    onRowEditEnding(e: CellRangeEventArgs): void;
    rowEditEnded: wjcCore.Event;
    onRowEditEnded(e: CellRangeEventArgs): void;
    rowAdded: wjcCore.Event;
    onRowAdded(e: CellRangeEventArgs): void;
    deletingRow: wjcCore.Event;
    onDeletingRow(e: CellRangeEventArgs): boolean;
    deletedRow: wjcCore.Event;
    onDeletedRow(e: CellRangeEventArgs): void;
    copying: wjcCore.Event;
    onCopying(e: CellRangeEventArgs): boolean;
    copied: wjcCore.Event;
    onCopied(e: CellRangeEventArgs): void;
    pasting: wjcCore.Event;
    onPasting(e: CellRangeEventArgs): boolean;
    pasted: wjcCore.Event;
    onPasted(e: CellRangeEventArgs): void;
    pastingCell: wjcCore.Event;
    onPastingCell(e: CellRangeEventArgs): boolean;
    pastedCell: wjcCore.Event;
    onPastedCell(e: CellRangeEventArgs): void;
    formatItem: wjcCore.Event;
    onFormatItem(e: FormatItemEventArgs): void;
    updatingView: wjcCore.Event;
    onUpdatingView(e: wjcCore.CancelEventArgs): boolean;
    updatedView: wjcCore.Event;
    onUpdatedView(e?: wjcCore.EventArgs): void;
    _getDefaultRowHeight(): number;
    _getCollectionView(value: any): wjcCore.ICollectionView;
    _getDesiredWidth(p: GridPanel, r: number, c: number, e: HTMLElement): number;
    _getDesiredHeight(p: GridPanel, r: number, c: number, e: HTMLElement): number;
    _getSortRowIndex(): number;
    _mappedColumns: any;
    private _sortConverter(sd, item, value, init);
    _bindGrid(full: boolean): void;
    _cvCollectionChanged(sender: any, e: wjcCore.NotifyCollectionChangedEventArgs): void;
    private _cvCurrentChanged(sender, e);
    private _getRowIndex(index);
    _getCvIndex(index: number): number;
    private _findRow(data);
    private _updateLayout();
    _updateStickyHeaders(): void;
    private _updateScrollHandler();
    _clipToScreen(): boolean;
    private _scroll(e);
    private _updateScrollPosition();
    private _updateContent(recycle, state?);
    _useFrozenDiv(): boolean;
    private _updateFrozenCells(state);
    private _getMarqueeRect(rng);
    _bindColumns(): void;
    _updateColumnTypes(): void;
    _getBindingColumn(p: GridPanel, r: Number, c: Column): Column;
    _bindRows(): void;
    _addBoundRow(items: any[], index: number): void;
    _addNode(items: any[], index: number, level: number): void;
    private _addGroup(g);
    private static _getSerializableProperties(obj);
    _copy(key: string, value: any): boolean;
    _isInputElement(e: any): boolean;
    _wantsInput(e: any): boolean;
    private static _maxCssHeight;
    private static _getMaxSupportedCssHeight();
    static _rtlMode: string;
    private static _getRtlMode();
}
export declare class CellRangeEventArgs extends wjcCore.CancelEventArgs {
    _p: GridPanel;
    _rng: CellRange;
    _data: any;
    constructor(p: GridPanel, rng: CellRange, data?: any);
    readonly panel: GridPanel;
    readonly range: CellRange;
    readonly row: number;
    readonly col: number;
    data: any;
}
export declare class FormatItemEventArgs extends CellRangeEventArgs {
    _cell: HTMLElement;
    constructor(p: GridPanel, rng: CellRange, cell: HTMLElement);
    readonly cell: HTMLElement;
}
export declare class CellEditEndingEventArgs extends CellRangeEventArgs {
    _stayInEditMode: boolean;
    stayInEditMode: boolean;
}
export declare enum CellType {
    None = 0,
    Cell = 1,
    ColumnHeader = 2,
    RowHeader = 3,
    TopLeft = 4,
    ColumnFooter = 5,
    BottomLeft = 6,
}
export declare class GridPanel {
    private _g;
    private _ct;
    private _e;
    private _rows;
    private _cols;
    private _offsetY;
    private _vrb;
    private _vru;
    private _rowIdx;
    private static _evtBlur;
    constructor(g: FlexGrid, cellType: CellType, rows: RowCollection, cols: ColumnCollection, element: HTMLElement);
    readonly grid: FlexGrid;
    readonly cellType: CellType;
    readonly viewRange: CellRange;
    readonly width: number;
    readonly height: number;
    readonly rows: RowCollection;
    readonly columns: ColumnCollection;
    getCellData(r: number, c: any, formatted: boolean): any;
    setCellData(r: number, c: any, value: any, coerce?: boolean, invalidate?: boolean): boolean;
    getCellBoundingRect(r: number, c: number, raw?: boolean): wjcCore.Rect;
    getCellElement(r: number, c: number): HTMLElement;
    getSelectedState(r: number, c: number, rng: CellRange): SelectedState;
    readonly hostElement: HTMLElement;
    _getOffsetY(): number;
    _updateContent(recycle: boolean, state: boolean, offsetY: number): void;
    _reorderCells(rngNew: CellRange, rngOld: CellRange): void;
    _createRange(start: number, end: number): Range;
    _renderRow(r: number, rng: CellRange, frozen: boolean, state: boolean, ctr: number): number;
    _renderCell(r: number, c: number, rng: CellRange, state: boolean, ctr: number): number;
    _getViewRange(): CellRange;
    _getFrozenPos(): wjcCore.Point;
}
export declare class CellFactory {
    static _WJC_COLLAPSE: string;
    static _WJC_DROPDOWN: string;
    static _ddIcon: HTMLElement;
    static _fmtRng: CellRange;
    updateCell(p: GridPanel, r: number, c: number, cell: HTMLElement, rng?: CellRange, updateContent?: boolean): void;
    disposeCell(cell: HTMLElement): void;
    getEditorValue(g: FlexGrid): any;
    private _isEditingCell(g, r, c);
    private _getTreeIcon(gr);
    private _getSortIcon(col);
}
export declare class CellRange {
    _row: number;
    _col: number;
    _row2: number;
    _col2: number;
    constructor(r?: number, c?: number, r2?: number, c2?: number);
    setRange(r?: number, c?: number, r2?: number, c2?: number): void;
    row: number;
    col: number;
    row2: number;
    col2: number;
    clone(): CellRange;
    readonly rowSpan: number;
    readonly columnSpan: number;
    readonly topRow: number;
    readonly bottomRow: number;
    readonly leftCol: number;
    readonly rightCol: number;
    readonly isValid: boolean;
    readonly isSingleCell: boolean;
    contains(r: any, c?: number): boolean;
    containsRow(r: number): boolean;
    containsColumn(c: number): boolean;
    intersects(rng: CellRange): boolean;
    intersectsRow(rng: CellRange): boolean;
    intersectsColumn(rng: CellRange): boolean;
    getRenderSize(p: GridPanel): wjcCore.Size;
    equals(rng: CellRange): boolean;
}
export declare enum RowColFlags {
    Visible = 1,
    AllowResizing = 2,
    AllowDragging = 4,
    AllowMerging = 8,
    AllowSorting = 16,
    AutoGenerated = 32,
    Collapsed = 64,
    ParentCollapsed = 128,
    Selected = 256,
    ReadOnly = 512,
    HtmlContent = 1024,
    WordWrap = 2048,
    RowDefault = 3,
    ColumnDefault = 23,
}
export declare class RowCol {
    _sz: number;
    _cssClass: string;
    _szMin: number;
    _szMax: number;
    _list: any;
    _f: RowColFlags;
    _pos: number;
    _idx: number;
    visible: boolean;
    readonly isVisible: boolean;
    readonly pos: number;
    readonly index: number;
    size: number;
    readonly renderSize: number;
    allowResizing: boolean;
    allowDragging: boolean;
    allowMerging: boolean;
    isSelected: boolean;
    isReadOnly: boolean;
    isContentHtml: boolean;
    wordWrap: boolean;
    cssClass: string;
    readonly grid: FlexGrid;
    readonly collectionView: wjcCore.ICollectionView;
    onPropertyChanged(): void;
    _getFlag(flag: RowColFlags): boolean;
    _setFlag(flag: RowColFlags, value: boolean, quiet?: boolean): boolean;
}
export declare class Column extends RowCol {
    private static _ctr;
    private _hdr;
    private _name;
    private _type;
    private _align;
    private _map;
    private _fmt;
    private _agg;
    private _inpType;
    private _mask;
    private _required;
    private _showDropDown;
    private _ddCssClass;
    _binding: wjcCore.Binding;
    _bindingSort: wjcCore.Binding;
    _szStar: string;
    _hash: string;
    constructor(options?: any);
    name: string;
    dataType: wjcCore.DataType;
    isRequired: boolean;
    showDropDown: boolean;
    dropDownCssClass: string;
    inputType: string;
    mask: string;
    binding: string;
    sortMemberPath: string;
    width: any;
    minWidth: number;
    maxWidth: number;
    readonly renderWidth: number;
    align: string;
    getAlignment(): string;
    getIsRequired(): boolean;
    header: string;
    dataMap: DataMap;
    format: string;
    allowSorting: boolean;
    readonly currentSort: string;
    aggregate: wjcCore.Aggregate;
    _getBindingSort(): string;
    static _parseStarSize(value: any): number;
}
export declare class Row extends RowCol {
    private _data;
    _ubv: any;
    constructor(dataItem?: any);
    dataItem: any;
    height: number;
    readonly renderHeight: number;
}
export declare class GroupRow extends Row {
    _level: number;
    constructor();
    level: number;
    readonly hasChildren: boolean;
    isCollapsed: boolean;
    getGroupHeader(): string;
    _setCollapsed(collapsed: boolean): void;
    getCellRange(): CellRange;
}
export declare class RowColCollection extends wjcCore.ObservableArray {
    _g: FlexGrid;
    _frozen: number;
    _szDef: number;
    _szTot: number;
    _dirty: boolean;
    _szMin: number;
    _szMax: number;
    constructor(g: FlexGrid, defaultSize: number);
    defaultSize: number;
    frozen: number;
    isFrozen(index: number): boolean;
    minSize: number;
    maxSize: number;
    getTotalSize(): number;
    getItemAt(position: number): number;
    getNextCell(index: number, move: SelMove, pageSize: number): any;
    canMoveElement(src: number, dst: number): boolean;
    moveElement(src: number, dst: number): void;
    onCollectionChanged(e?: wjcCore.NotifyCollectionChangedEventArgs): void;
    push(item: any): number;
    splice(index: number, count: number, item?: any): any[];
    beginUpdate(): void;
    _update(): boolean;
}
export declare class ColumnCollection extends RowColCollection {
    _firstVisible: number;
    getColumn(name: string): Column;
    indexOf(name: any): number;
    readonly firstVisibleIndex: number;
    _update(): boolean;
    _updateStarSizes(szAvailable: number): boolean;
}
export declare class RowCollection extends RowColCollection {
    _maxLevel: number;
    readonly maxGroupLevel: number;
    _update(): boolean;
}
export declare class HitTestInfo {
    _g: FlexGrid;
    _p: GridPanel;
    _pt: wjcCore.Point;
    _row: number;
    _col: number;
    _edge: number;
    static _SZEDGE: number[];
    constructor(grid: any, pt: any);
    readonly point: wjcCore.Point;
    readonly cellType: CellType;
    readonly panel: GridPanel;
    readonly row: number;
    readonly col: number;
    readonly range: CellRange;
    readonly edgeLeft: boolean;
    readonly edgeTop: boolean;
    readonly edgeRight: boolean;
    readonly edgeBottom: boolean;
}
export declare enum AllowMerging {
    None = 0,
    Cells = 1,
    ColumnHeaders = 2,
    RowHeaders = 4,
    AllHeaders = 6,
    All = 7,
}
export declare class MergeManager {
    _g: FlexGrid;
    constructor(g: FlexGrid);
    getMergedRange(p: GridPanel, r: number, c: number, clip?: boolean): CellRange;
    _mergeCell(p: GridPanel, r1: number, c1: number, r2: number, c2: number): boolean;
}
export declare class DataMap {
    _cv: wjcCore.ICollectionView;
    _keyPath: string;
    _displayPath: string;
    _editable: boolean;
    _sortByKey: boolean;
    constructor(itemsSource: any, selectedValuePath?: string, displayMemberPath?: string);
    sortByDisplayValues: boolean;
    readonly collectionView: wjcCore.ICollectionView;
    readonly selectedValuePath: string;
    readonly displayMemberPath: string;
    getKeyValue(displayValue: string): any;
    getDisplayValue(key: any): any;
    getDisplayValues(dataItem?: any): string[];
    getKeyValues(): string[];
    isEditable: boolean;
    mapChanged: wjcCore.Event;
    onMapChanged(e?: wjcCore.EventArgs): void;
    private _indexOf(value, path, caseSensitive);
}
export declare enum SelectionMode {
    None = 0,
    Cell = 1,
    CellRange = 2,
    Row = 3,
    RowRange = 4,
    ListBox = 5,
}
export declare enum SelectedState {
    None = 0,
    Selected = 1,
    Cursor = 2,
}
export declare enum SelMove {
    None = 0,
    Next = 1,
    Prev = 2,
    NextPage = 3,
    PrevPage = 4,
    Home = 5,
    End = 6,
    NextCell = 7,
    PrevCell = 8,
}
export declare class _SelectionHandler {
    _g: FlexGrid;
    _sel: wjcSelf.CellRange;
    _mode: wjcSelf.SelectionMode;
    constructor(g: FlexGrid);
    selectionMode: SelectionMode;
    selection: CellRange;
    select(rng: any, show?: any): void;
    moveSelection(rowMove: SelMove, colMove: SelMove, extend: boolean): void;
    private _getReferenceCell(rowMove, colMove, extend);
    _adjustSelection(rng: CellRange): CellRange;
}
export declare class _KeyboardHandler {
    _g: FlexGrid;
    constructor(g: FlexGrid);
    _keydown(e: KeyboardEvent): void;
    private _keypress(e);
    private _moveSel(rowMove, colMove, extend);
    private _deleteSel(evt);
    private _startEditing(fullEdit, evt, r?, c?);
}
export declare enum AllowResizing {
    None = 0,
    Columns = 1,
    Rows = 2,
    Both = 3,
    ColumnsAllCells,
    RowsAllCells,
    BothAllCells,
}
export declare enum AutoSizeMode {
    None = 0,
    Headers = 1,
    Cells = 2,
    Both = 3,
}
export declare enum AllowDragging {
    None = 0,
    Columns = 1,
    Rows = 2,
    Both = 3,
}
export declare class _MouseHandler {
    _g: FlexGrid;
    _htDown: HitTestInfo;
    _eMouse: MouseEvent;
    _lbSelState: boolean;
    _lbSelRows: Object;
    _szRowCol: RowCol;
    _szStart: number;
    _szArgs: CellRangeEventArgs;
    _dragSource: any;
    _dvMarker: HTMLElement;
    _rngTarget: CellRange;
    _updating: boolean;
    static _SZ_MIN: number;
    constructor(g: FlexGrid);
    resetMouseState(): void;
    private _mousedown(e);
    private _mousemove(e);
    private _mouseup(e);
    private _dblclick(e);
    private _hover(e);
    private _getResizeCol(ht);
    private _getResizeRow(ht);
    private _mouseSelect(e, extend);
    private _handleResizing(e);
    private _dragstart(e);
    private _dragend(e);
    private _dragover(e);
    private _drop(e);
    private _showResizeMarker(sz);
    private _showDragMarker(ht);
    private _finishResizing(e);
    private _startListBoxSelection(row);
    private _handleSelection(ht, extend);
    private _handleSort(e);
}
export declare class _EditHandler {
    _g: FlexGrid;
    _rng: CellRange;
    _edt: HTMLInputElement;
    _lbx: wjcInput.ListBox;
    _htDown: HitTestInfo;
    _fullEdit: boolean;
    _list: any;
    _evtInput: any;
    constructor(g: FlexGrid);
    startEditing(fullEdit?: boolean, r?: number, c?: number, focus?: boolean, evt?: any): boolean;
    finishEditing(cancel?: boolean): boolean;
    readonly activeEditor: HTMLInputElement;
    readonly editRange: CellRange;
    _getValidationError(): string;
    _allowEditing(r: number, c: number): boolean;
    _commitRowEdits(): void;
    _keydown(e: KeyboardEvent): boolean;
    _keydownListBox(e: KeyboardEvent): boolean;
    _keypress(e: KeyboardEvent): void;
    _toggleListBox(evt: any, rng?: CellRange): boolean;
    private _createListBox();
    private _removeListBox();
}
export declare class _AddNewHandler {
    protected _g: FlexGrid;
    protected _nrt: wjcSelf._NewRowTemplate;
    protected _keydownBnd: any;
    protected _top: boolean;
    constructor(g: FlexGrid);
    newRowAtTop: boolean;
    updateNewRowTemplate(): void;
    _attach(): void;
    _detach(): void;
    _keydown(e: KeyboardEvent): void;
    _beginningEdit(sender: any, e: CellRangeEventArgs): void;
    _rowEditEnded(sender: any, e: CellRangeEventArgs): void;
}
export declare class _NewRowTemplate extends Row {
}
export declare class _ImeHandler {
    _g: FlexGrid;
    _tbx: HTMLInputElement;
    _cssHidden: any;
    _mouseDown: boolean;
    constructor(g: FlexGrid);
    dispose(): void;
    _cellEditEnded(): void;
    _compositionstart(): void;
    _keydown(e: KeyboardEvent): void;
    _mousedown(e: any): void;
    _mouseup(e: any): void;
    _updateImeFocus(): void;
    _enableIme(): boolean;
}
