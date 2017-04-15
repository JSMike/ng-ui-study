import * as wjcChart from 'wijmo/wijmo.chart';
export declare class Sunburst extends wjcChart.FlexPie {
    private _bindName;
    private _processedData;
    private _legendLabels;
    private _level;
    private _sliceIndex;
    private _childItemsPath;
    private _processedItem;
    constructor(element: any, options?: any);
    bindingName: any;
    childItemsPath: any;
    _initData(): void;
    _performBind(): void;
    private _calculateValueAndLevel(arr, level);
    _renderPie(engine: any, radius: any, innerRadius: any, startAngle: any, offset: any): void;
    _renderHierarchicalSlices(engine: any, cx: any, cy: any, values: any, sum: any, radius: any, innerRadius: any, startAngle: any, totalSweep: any, offset: any, level: any): void;
    _getLabelsForLegend(): string[];
    _highlightCurrent(): void;
    hitTest(pt: any, y?: number): wjcChart.HitTestInfo;
}
export declare class HierarchicalUtil {
    static parseDataToHierarchical(data: any, binding: any, bindingName: any, childItemsPath: any): any[];
    private static parseGroupCV(cv, binding);
    private static parseGroups(group, binding);
    private static parseItems(items, binding, bindingName, childItemsPath);
    private static isFlatItem(item, binding);
    private static ConvertFlatData(items, binding, bindingName);
    private static ConvertFlatToHierarchical(arr, data);
    private static ConvertFlatItem(data, item, binding, bindingName);
    private static parseItem(item, binding, bindingName, childItemsPath);
    static parseFlatItem(data: any, item: any, binding: any, bindingName: any): void;
}
