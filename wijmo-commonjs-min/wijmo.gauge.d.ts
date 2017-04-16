import * as wjcCore from 'wijmo/wijmo';
export declare enum ShowText {
    None = 0,
    Value = 1,
    MinMax = 2,
    All = 3,
}
export declare class Gauge extends wjcCore.Control {
    static _SVGNS: string;
    static _ctr: number;
    private _ranges;
    private _rngElements;
    private _format;
    private _getText;
    private _showRanges;
    private _shadow;
    private _animated;
    private _animInterval;
    private _readOnly;
    private _step;
    private _showText;
    private _showTicks;
    private _thumbSize;
    private _filterID;
    private _rangesDirty;
    private _origin;
    protected _thickness: number;
    protected _initialized: boolean;
    protected _animColor: string;
    protected _face: Range;
    protected _pointer: Range;
    protected _dSvg: HTMLDivElement;
    protected _svg: SVGSVGElement;
    protected _gFace: SVGGElement;
    protected _gRanges: SVGGElement;
    protected _gPointer: SVGGElement;
    protected _gCover: SVGGElement;
    protected _pFace: SVGPathElement;
    protected _pPointer: SVGPathElement;
    protected _pTicks: SVGPathElement;
    protected _filter: SVGFilterElement;
    protected _cValue: SVGCircleElement;
    protected _tValue: SVGTextElement;
    protected _tMin: SVGTextElement;
    protected _tMax: SVGTextElement;
    static controlTemplate: string;
    constructor(element: any, options?: any);
    value: number;
    min: number;
    max: number;
    origin: number;
    isReadOnly: boolean;
    step: number;
    format: string;
    getText: Function;
    thickness: number;
    face: Range;
    pointer: Range;
    showText: ShowText;
    showTicks: boolean;
    thumbSize: number;
    showRanges: boolean;
    hasShadow: boolean;
    isAnimated: boolean;
    readonly ranges: wjcCore.ObservableArray;
    valueChanged: wjcCore.Event;
    onValueChanged(e?: wjcCore.EventArgs): void;
    refresh(fullUpdate?: boolean): void;
    hitTest(pt: any, y?: number): number;
    static _getBBox(e: SVGLocatable): SVGRect;
    _getFilterUrl(): string;
    _getRangeElement(rng: Range): SVGPathElement;
    _rangeChanged(rng: Range, e: wjcCore.PropertyChangedEventArgs): void;
    _createElement(tag: string, parent: SVGElement, cls?: string): Element;
    _centerText(e: SVGTextElement, value: number, center: wjcCore.Point): void;
    _copy(key: string, value: any): boolean;
    _getPercent: (value: any) => number;
    _showElement(e: SVGElement, show: boolean): void;
    _setAttribute(e: SVGElement, att: string, value: string): void;
    _updateRange(rng: Range, value?: number): void;
    _getPointerColor(value: number): string;
    _keydown(e: KeyboardEvent): void;
    _getKey(key: number): number;
    _applyMouseValue(e: any, instant?: boolean): boolean;
    _updateRangeElement(e: SVGPathElement, rng: Range, value: number): void;
    _updateText(): void;
    _updateTicks(): void;
    _getValueFromPoint(pt: wjcCore.Point): any;
    _fix(n: any): string;
}
export declare enum GaugeDirection {
    Right = 0,
    Left = 1,
    Up = 2,
    Down = 3,
}
export declare class LinearGauge extends Gauge {
    private _direction;
    constructor(element: any, options?: any);
    direction: GaugeDirection;
    _updateRangeElement(e: SVGPathElement, rng: Range, value: number): void;
    _updateText(): void;
    _updateTicks(): void;
    _updateSegment(path: SVGPathElement, rc: wjcCore.Rect): void;
    _setText(e: SVGTextElement, value: number, rc: wjcCore.Rect, pos: string): void;
    _getRangeRect(rng: Range, value?: number): wjcCore.Rect;
    _getValueFromPoint(pt: wjcCore.Point): number;
    _getDirection(): GaugeDirection;
    _getKey(key: number): number;
}
export declare class RadialGauge extends Gauge {
    private _startAngle;
    private _sweepAngle;
    private _autoScale;
    private _rcSvg;
    private _ctmInv;
    private _ptSvg;
    constructor(element: any, options?: any);
    startAngle: number;
    sweepAngle: number;
    autoScale: boolean;
    refresh(fullUpdate?: boolean): void;
    _updateRangeElement(e: SVGPathElement, rng: Range, value: number): void;
    _updateText(): void;
    _updateTicks(): void;
    _updateSegment(path: SVGPathElement, ctr: wjcCore.Point, rOut: number, rIn: number, start: number, sweep: number): void;
    _getPoint(ctr: wjcCore.Point, angle: number, radius: number): wjcCore.Point;
    _getValueFromPoint(pt: wjcCore.Point): number;
}
export declare class BulletGraph extends LinearGauge {
    _rngTarget: Range;
    _rngGood: Range;
    _rngBad: Range;
    constructor(element: any, options?: any);
    target: number;
    good: number;
    bad: number;
    _getRangeRect(rng: Range, value?: number): wjcCore.Rect;
}
export declare class Range {
    static _ctr: number;
    private _min;
    private _max;
    private _thickness;
    private _color;
    private _name;
    constructor(name?: string);
    min: number;
    max: number;
    color: string;
    thickness: number;
    name: string;
    propertyChanged: wjcCore.Event;
    onPropertyChanged(e: wjcCore.PropertyChangedEventArgs): void;
    _setProp(name: string, value: any): void;
}
