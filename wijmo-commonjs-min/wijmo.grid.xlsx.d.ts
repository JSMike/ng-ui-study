import * as wjcGrid from 'wijmo/wijmo.grid';
import * as wjcXlsx from 'wijmo/wijmo.xlsx';
export declare class FlexGridXlsxConverter {
    static save(grid: wjcGrid.FlexGrid, options?: IFlexGridXlsxOptions, fileName?: string): wjcXlsx.Workbook;
    static saveAsync(grid: wjcGrid.FlexGrid, options?: IFlexGridXlsxOptions, fileName?: string, onSaved?: (base64: string) => any, onError?: (reason?: any) => any): wjcXlsx.Workbook;
    static load(grid: wjcGrid.FlexGrid, workbook: any, options?: IFlexGridXlsxOptions): void;
    static loadAsync(grid: wjcGrid.FlexGrid, workbook: any, options?: IFlexGridXlsxOptions, onLoaded?: (workbook: wjcXlsx.Workbook) => void, onError?: (reason?: any) => any): void;
    private static _saveFlexGridToWorkbook(grid, options?);
    private static _loadToFlexGrid(grid, workbook, options);
    private static _parseFlexGridRowToSheetRow(panel, workbookRow, rowIndex, startColIndex, columnSettings, includeCellStyles, fakeCell, isGroupRow, groupLevel, includeColumns);
    private static _parseCellStyle(cellStyle);
    private static _parseBorder(cellStyle);
    private static _parseEgdeBorder(cellStyle, edge);
    private static _parseToExcelFontFamily(fontFamily);
    private static _parseToExcelFormula(formula, isDate);
    private static _parseToFlexSheetFormula(excelFormula);
    private static _getColumnSetting(column, defaultWidth);
    private static _toExcelHAlign(value);
    private static _getColumnCount(sheetData);
    private static _getRowCount(sheetData, columnCnt);
    private static _numAlpha(i);
    private static _getItemType(item);
    private static _setColumn(columns, columnIndex, item);
    private static _getItemValue(item);
    private static _getCellStyle(panel, fakeCell, r, c);
    private static _resetCellStyle(cell);
    private static _extend(dst, src);
    private static _checkParentCollapsed(groupCollapsedSettings, groupLevel);
    private static _getColSpan(p, mergedRange, includeColumns);
}
export interface IExtendedSheetInfo {
    name: string;
    visible: boolean;
    styledCells: any;
    mergedRanges: any;
    fonts: string[];
}
export interface IFlexGridXlsxOptions {
    sheetIndex?: number;
    sheetName?: string;
    sheetVisible?: boolean;
    includeColumnHeaders?: boolean;
    includeRowHeaders?: boolean;
    includeCellStyles?: boolean;
    activeWorksheet?: any;
    includeColumns?: (column: wjcGrid.Column) => boolean;
}
