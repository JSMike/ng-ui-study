import * as wjcPdf from 'wijmo/wijmo.pdf';
import * as wjcCore from 'wijmo/wijmo';
import * as wjcGrid from 'wijmo/wijmo.grid';
export declare enum ScaleMode {
    ActualSize = 0,
    PageWidth = 1,
    SinglePage = 2,
}
export declare enum ExportMode {
    All = 0,
    Selection = 1,
}
export interface ICellStyle {
    backgroundColor?: string;
    borderColor?: string;
    font?: wjcPdf.PdfFont;
}
export interface IFlexGridStyle {
    cellStyle?: ICellStyle;
    altCellStyle?: ICellStyle;
    groupCellStyle?: ICellStyle;
    headerCellStyle?: ICellStyle;
    footerCellStyle?: ICellStyle;
}
export interface IFlexGridDrawSettings {
    embeddedFonts?: wjcPdf.IPdfFontFile[];
    exportMode?: ExportMode;
    maxPages?: number;
    repeatMergedValuesAcrossPages?: boolean;
    recalculateStarWidths?: boolean;
    styles?: IFlexGridStyle;
}
export interface IFlexGridExportSettings extends IFlexGridDrawSettings {
    scaleMode?: ScaleMode;
    documentOptions?: any;
}
export declare class FlexGridPdfConverter {
    private static BorderWidth;
    private static DefaultDrawSettings;
    private static DefaultExportSettings;
    static draw(flex: wjcGrid.FlexGrid, doc: wjcPdf.PdfDocument, width?: number, height?: number, settings?: IFlexGridDrawSettings): void;
    static drawToPosition(flex: wjcGrid.FlexGrid, doc: wjcPdf.PdfDocument, point: wjcCore.Point, width?: number, height?: number, settings?: IFlexGridDrawSettings): void;
    static export(flex: wjcGrid.FlexGrid, fileName: string, settings?: IFlexGridExportSettings): void;
    private static _draw(flex, doc, point, width, height, settings);
    private static _getScaleFactor(gr, scaleMode, rect);
    private static _getPages(gr, ranges, rect, settings, isPositionedMode, scaleFactor);
    private static _getGridRenderer(flex, range, repeatMergedValues, borderWidth, styles, lastPage);
}
