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
"use strict";
function WjValueAccessorFactory(directive)
{
return new WjValueAccessor(directive)
}
var wjcCore=require('wijmo/wijmo'),
core_1=require('@angular/core'),
WjComponentResolvedMetadata,
WjDirectiveBehavior,
Ng2Utils,
WjValueAccessor,
moduleExports,
WjDirectiveBaseModule;
WjComponentResolvedMetadata = function()
{
function WjComponentResolvedMetadata(rawMeta)
{
this.changeEventMap = [];
this.resolveChangeEventMap(rawMeta)
}
return WjComponentResolvedMetadata.prototype.resolveChangeEventMap = function(rawMeta)
{
var map=this.changeEventMap,
outputs=rawMeta.outputs,
changeEvents=rawMeta.changeEvents || {},
outputPairs,
_i,
outputPairs_1,
pair,
wjEvent,
changeProps,
propChangeEvent,
eventItem;
if (map.splice(0, map.length), outputs && outputs.length)
{
for (outputPairs = outputs.map(function(strPair)
{
return strPair.split(':')
}).filter(function(arrPair)
{
return arrPair.length === 2 && arrPair[0] && arrPair[1]
}).map(function(arrPair)
{
return {
implName: arrPair[0].trim(), exposeName: arrPair[1].trim()
}
}), _i = 0, outputPairs_1 = outputPairs; _i < outputPairs_1.length; _i++)
pair = outputPairs_1[_i],
wjEvent = Ng2Utils.getWjEventName(pair.implName),
wjEvent && (eventItem = {
eventImpl: pair.implName, event: pair.exposeName
}, changeProps = changeEvents[pair.exposeName], changeProps && changeProps.length && (eventItem.props = changeProps.map(function(prop)
{
return {
prop: prop, evExposed: Ng2Utils.getChangeEventNameExposed(prop), evImpl: Ng2Utils.getChangeEventNameImplemented(prop)
}
})), map.push(eventItem));
for (propChangeEvent in changeEvents)
propChangeEvent.indexOf('.') > -1 && (eventItem = {
eventImpl: null, event: propChangeEvent, props: changeEvents[propChangeEvent].map(function(prop)
{
return {
prop: prop, evExposed: Ng2Utils.getChangeEventNameExposed(prop), evImpl: Ng2Utils.getChangeEventNameImplemented(prop)
}
})
}, map.push(eventItem))
}
}, WjComponentResolvedMetadata
}();
exports.WjComponentResolvedMetadata = WjComponentResolvedMetadata;
WjDirectiveBehavior = function()
{
function WjDirectiveBehavior(directive, elementRef, injector, injectedParent)
{
var typeData,
resolvedTypeData;
this.isInitialized = !1;
this.isDestroyed = !1;
this.directive = directive;
this.elementRef = elementRef;
this.injector = injector;
this.injectedParent = injectedParent;
typeData = this.typeData = directive.constructor[WjDirectiveBehavior.directiveTypeDataProp];
typeData.siblingId == null && (typeData.siblingId = ++WjDirectiveBehavior.siblingDirId + '');
resolvedTypeData = directive.constructor[WjDirectiveBehavior.directiveResolvedTypeDataProp];
resolvedTypeData ? this.resolvedTypeData = resolvedTypeData : directive.constructor[WjDirectiveBehavior.directiveResolvedTypeDataProp] = resolvedTypeData = this.resolvedTypeData = new WjComponentResolvedMetadata(typeData);
directive[WjDirectiveBehavior.BehaviourRefProp] = this;
injector[WjDirectiveBehavior.BehaviourRefProp] = this;
directive[WjDirectiveBehavior.isInitializedPropAttr] = !1;
this._setupAsChild();
this._isHostElement() && elementRef.nativeElement.setAttribute(WjDirectiveBehavior.siblingDirIdAttr, typeData.siblingId);
this.subscribeToEvents(!1)
}
return WjDirectiveBehavior.getHostElement = function(ngHostElRef)
{
return ngHostElRef.nativeElement
}, WjDirectiveBehavior.attach = function(directive, elementRef, injector, injectedParent)
{
return new WjDirectiveBehavior(directive, elementRef, injector, injectedParent)
}, WjDirectiveBehavior.prototype.ngOnInit = function()
{
this.isInitialized = !0;
this._initParent();
this.subscribeToEvents(!0)
}, WjDirectiveBehavior.prototype.ngAfterViewInit = function()
{
this.directive[WjDirectiveBehavior.isInitializedPropAttr] = !0;
this.directive[WjDirectiveBehavior.initializedEventAttr].emit(undefined)
}, WjDirectiveBehavior.prototype.ngOnDestroy = function()
{
var control,
parControl,
parProp,
parArr,
idx;
if (!this.isDestroyed)
{
if (this.isDestroyed = !0, control = this.directive, this._siblingInsertedEH && this.elementRef.nativeElement.removeEventListener('DOMNodeInserted', this._siblingInsertedEH), this._isChild() && this.parentBehavior && (parControl = this.parentBehavior.directive, parProp = this._getParentProp(), !this.parentBehavior.isDestroyed && parControl && parProp && control && (parArr = parControl[parProp], wjcCore.isArray(parArr) && parArr && (idx = parArr.indexOf(control), idx >= 0 && parArr.splice(idx, 1)))), control instanceof wjcCore.Control && control.hostElement)
{
var host=this.elementRef.nativeElement,
hostParent=host && host.parentNode,
hostIdx=hostParent ? Array.prototype.indexOf.call(hostParent.childNodes, host) : -1;
control.dispose();
hostIdx > -1 && Array.prototype.indexOf.call(hostParent.childNodes, host) < 0 && (host.textContent = '', hostIdx < hostParent.childNodes.length && hostParent.replaceChild(host, hostParent.childNodes[hostIdx]))
}
this.injector[WjDirectiveBehavior.BehaviourRefProp] = null
}
}, WjDirectiveBehavior.instantiateTemplate = function(parent, viewContainerRef, templateRef)
{
for (var curNode, viewRef=viewContainerRef.createEmbeddedView(templateRef, {}, viewContainerRef.length), nodes=viewRef.rootNodes, rootEl=document.createElement('div'), _i=0, nodes_1=nodes; _i < nodes_1.length; _i++)
curNode = nodes_1[_i],
rootEl.appendChild(curNode);
return parent && parent.appendChild(rootEl), {
viewRef: viewRef, rootElement: rootEl
}
}, WjDirectiveBehavior.prototype.getPropChangeEvent = function(propName)
{
var evToProps=this.typeData.changeEvents,
event_1;
if (evToProps)
for (event_1 in evToProps)
if (evToProps[event_1].indexOf(propName) > -1)
return event_1;
return null
}, WjDirectiveBehavior.prototype.subscribeToEvents = function(afterInit)
{
var changeEvents=this.resolvedTypeData.changeEventMap,
_i,
changeEvents_1,
_a,
changeEvents_2,
curEventMap;
for (afterInit = !!afterInit, _i = 0, changeEvents_1 = changeEvents; _i < changeEvents_1.length; _i++)
curEventMap = changeEvents_1[_i],
afterInit !== curEventMap.event.indexOf(".") < 0 && this.addHandlers(curEventMap);
if (afterInit)
for (_a = 0, changeEvents_2 = changeEvents; _a < changeEvents_2.length; _a++)
curEventMap = changeEvents_2[_a],
this.triggerPropChangeEvents(curEventMap)
}, WjDirectiveBehavior.prototype.addHandlers = function(eventMap)
{
var _this=this,
directive=this.directive;
WjDirectiveBehavior.evaluatePath(directive, eventMap.event).addHandler(function(s, e)
{
_this.isInitialized && _this.triggerPropChangeEvents(eventMap);
eventMap.eventImpl && directive[eventMap.eventImpl].next(e)
})
}, WjDirectiveBehavior.prototype.triggerPropChangeEvents = function(eventMap)
{
var directive=this.directive,
_i,
_a,
curChangeProp;
if (eventMap.props && eventMap.props.length)
for (_i = 0, _a = eventMap.props; _i < _a.length; _i++)
curChangeProp = _a[_i],
directive[curChangeProp.evImpl].next(directive[curChangeProp.prop])
}, WjDirectiveBehavior.prototype._setupAsChild = function()
{
this._isChild() && (this._isHostElement() && (this.elementRef.nativeElement.style.display = 'none'), this.parentBehavior = WjDirectiveBehavior.getBehavior(this.injectedParent))
}, WjDirectiveBehavior.prototype._isChild = function()
{
return this._isParentInitializer() || this._isParentReferencer()
}, WjDirectiveBehavior.prototype._isParentInitializer = function()
{
return this.directive[WjDirectiveBehavior.parPropAttr] != null
}, WjDirectiveBehavior.prototype._isParentReferencer = function()
{
return !!this.typeData.parentRefProperty
}, WjDirectiveBehavior.prototype._getParentProp = function()
{
return this.directive[WjDirectiveBehavior.parPropAttr]
}, WjDirectiveBehavior.prototype._getParentReferenceProperty = function()
{
return this.typeData.parentRefProperty
}, WjDirectiveBehavior.prototype._useParentObj = function()
{
return !1
}, WjDirectiveBehavior.prototype._parentInCtor = function()
{
return this._isParentReferencer() && this._getParentReferenceProperty() == ''
}, WjDirectiveBehavior.prototype._initParent = function()
{
var parProp,
parArr,
isHostElement,
linkIdx;
if (this.parentBehavior && !this._useParentObj())
{
var parDir=this.parentBehavior.directive,
propName=this._getParentProp(),
control=this.directive;
this._isParentInitializer() && (parProp = this._getParentProp(), parArr = parDir[propName], wjcCore.isArray(parArr) ? (isHostElement = this._isHostElement(), linkIdx = isHostElement ? this._getSiblingIndex() : -1, (linkIdx < 0 || linkIdx >= parArr.length) && (linkIdx = parArr.length), parArr.splice(linkIdx, 0, control), isHostElement && (this._siblingInsertedEH = this._siblingInserted.bind(this), this.elementRef.nativeElement.addEventListener('DOMNodeInserted', this._siblingInsertedEH))) : parDir[propName] = control);
this._isParentReferencer() && !this._parentInCtor() && (control[this._getParentReferenceProperty()] = parDir)
}
}, WjDirectiveBehavior.prototype._getSiblingIndex = function()
{
var thisEl=this.elementRef.nativeElement,
parEl=thisEl.parentElement,
i,
curEl;
if (!parEl)
return -1;
var siblings=parEl.childNodes,
idx=-1,
dirId=this.typeData.siblingId;
for (i = 0; i < siblings.length; i++)
if (curEl = siblings[i], curEl.nodeType == 1 && curEl.getAttribute(WjDirectiveBehavior.siblingDirIdAttr) == dirId && (++idx, curEl === thisEl))
return idx;
return -1
}, WjDirectiveBehavior.prototype._siblingInserted = function(e)
{
if (e.target === this.elementRef.nativeElement)
{
var lIdx=this._getSiblingIndex(),
parArr=this.parentBehavior.directive[this._getParentProp()],
directive=this.directive,
arrIdx=parArr.indexOf(directive);
lIdx >= 0 && arrIdx >= 0 && lIdx !== arrIdx && (parArr.splice(arrIdx, 1), lIdx = Math.min(lIdx, parArr.length), parArr.splice(lIdx, 0, directive))
}
}, WjDirectiveBehavior.prototype._isHostElement = function()
{
return this.elementRef.nativeElement.nodeType === Node.ELEMENT_NODE
}, WjDirectiveBehavior.evaluatePath = function(obj, path)
{
return this._pathBinding.path = path, this._pathBinding.getValue(obj)
}, WjDirectiveBehavior.getBehavior = function(directive)
{
return directive ? directive[WjDirectiveBehavior.BehaviourRefProp] : null
}, WjDirectiveBehavior.directiveTypeDataProp = 'meta', WjDirectiveBehavior.directiveResolvedTypeDataProp = '_wjResolvedMeta', WjDirectiveBehavior.BehaviourRefProp = '_wjBehaviour', WjDirectiveBehavior.parPropAttr = 'wjProperty', WjDirectiveBehavior.wjModelPropAttr = 'wjModelProperty', WjDirectiveBehavior.initializedEventAttr = 'initialized', WjDirectiveBehavior.isInitializedPropAttr = 'isInitialized', WjDirectiveBehavior.siblingDirIdAttr = 'wj-directive-id', WjDirectiveBehavior.siblingDirId = 0, WjDirectiveBehavior.wijmoComponentProviderId = 'WjComponent', WjDirectiveBehavior._pathBinding = new wjcCore.Binding(''), WjDirectiveBehavior
}();
exports.WjDirectiveBehavior = WjDirectiveBehavior;
Ng2Utils = function()
{
function Ng2Utils(){}
return Ng2Utils.initEvents = function(directiveType, changeEvents)
{
for (var curEventMap, changeProps, _a, changeProps_1, curChangeProp, ret=[], _i=0, changeEvents_3=changeEvents; _i < changeEvents_3.length; _i++)
if (curEventMap = changeEvents_3[_i], changeProps = curEventMap.props, curEventMap.event && curEventMap.eventImpl && ret.push(curEventMap.eventImpl + ':' + curEventMap.event), changeProps && changeProps.length)
for (_a = 0, changeProps_1 = changeProps; _a < changeProps_1.length; _a++)
curChangeProp = changeProps_1[_a],
ret.push(curChangeProp.evImpl + ':' + curChangeProp.evExposed);
return ret
}, Ng2Utils.getChangeEventNameImplemented = function(propertyName)
{
return Ng2Utils.getChangeEventNameExposed(propertyName) + Ng2Utils.changeEventImplementSuffix
}, Ng2Utils.getChangeEventNameExposed = function(propertyName)
{
return propertyName + 'Change'
}, Ng2Utils.getWjEventNameImplemented = function(eventName)
{
return eventName + Ng2Utils.wjEventImplementSuffix
}, Ng2Utils.getWjEventName = function(ngEventName)
{
if (ngEventName)
{
var ngSuffix=Ng2Utils.wjEventImplementSuffix,
suffixIdx=ngEventName.length - ngSuffix.length;
if (suffixIdx > 0 && ngEventName.substr(suffixIdx) === ngSuffix)
return ngEventName.substr(0, suffixIdx)
}
return null
}, Ng2Utils.getBaseType = function(type)
{
var proto;
return type && (proto = Object.getPrototypeOf(type.prototype)) && proto.constructor
}, Ng2Utils.getAnnotations = function(type)
{
return Reflect.getMetadata('annotations', type)
}, Ng2Utils.getAnnotation = function(annotations, annotationType)
{
var _i,
annotations_1,
curAnno;
if (annotationType && annotations)
for (_i = 0, annotations_1 = annotations; _i < annotations_1.length; _i++)
if (curAnno = annotations_1[_i], curAnno instanceof annotationType)
return curAnno;
return null
}, Ng2Utils.getTypeAnnotation = function(type, annotationType, own)
{
for (var anno, curType=type; curType; curType = own ? null : Ng2Utils.getBaseType(curType))
if (anno = Ng2Utils.getAnnotation(Ng2Utils.getAnnotations(curType), annotationType), anno)
return anno;
return null
}, Ng2Utils._copy = function(dst, src, override, includePrivate, filter)
{
var prop,
val,
dstVal;
if (dst && src)
for (prop in src)
(includePrivate || prop[0] !== '_') && (val = src[prop], (!filter || filter(prop, val)) && (dstVal = dst[prop], wjcCore.isArray(val) ? dst[prop] = (!wjcCore.isArray(dstVal) || override ? [] : dstVal).concat(val) : val !== undefined && (dst[prop] = val)))
}, Ng2Utils.changeEventImplementSuffix = 'PC', Ng2Utils.wjEventImplementSuffix = 'Ng', Ng2Utils
}();
exports.Ng2Utils = Ng2Utils;
WjValueAccessor = function()
{
function WjValueAccessor(directive)
{
this._isFirstChange = !0;
this._isSubscribed = !1;
this._onChange = function(){};
this._onTouched = function(){};
this._directive = directive;
this._behavior = WjDirectiveBehavior.getBehavior(directive)
}
return WjValueAccessor.prototype.writeValue = function(value)
{
var _this=this,
initEvent;
this._modelValue = value;
this._directive.isInitialized ? (this._ensureInitEhUnsubscribed(), this._updateDirective(), this._isFirstChange = !1) : this._dirInitEh ? this._isFirstChange = !1 : (initEvent = this._directive.initialized, this._dirInitEh = initEvent.subscribe(function()
{
_this._updateDirective();
_this._ensureInitEhUnsubscribed()
}))
}, WjValueAccessor.prototype.registerOnChange = function(fn)
{
this._onChange = fn
}, WjValueAccessor.prototype.registerOnTouched = function(fn)
{
this._onTouched = fn
}, WjValueAccessor.prototype._updateDirective = function()
{
if (!this._isFirstChange || this._modelValue != null)
{
if (this._ensureNgModelProp(), this._directive && this._ngModelProp)
{
var normValue=this._modelValue;
normValue === '' && (normValue = null);
this._directive[this._ngModelProp] = normValue
}
this._ensureSubscribed()
}
}, WjValueAccessor.prototype._ensureSubscribed = function()
{
var directive,
ngModelProp,
changeEvent;
this._isSubscribed || (directive = this._directive, directive && (this._ensureNgModelProp(), ngModelProp = this._ngModelProp = directive[WjDirectiveBehavior.wjModelPropAttr], ngModelProp && (changeEvent = this._behavior.getPropChangeEvent(ngModelProp), changeEvent && directive[changeEvent].addHandler(this._dirValChgEh, this)), directive instanceof wjcCore.Control && directive.lostFocus.addHandler(this._dirLostFocusEh, this), this._isSubscribed = !0))
}, WjValueAccessor.prototype._ensureNgModelProp = function()
{
!this._ngModelProp && this._directive && (this._ngModelProp = this._directive[WjDirectiveBehavior.wjModelPropAttr])
}, WjValueAccessor.prototype._ensureInitEhUnsubscribed = function()
{
this._dirInitEh && (this._dirInitEh.unsubscribe(), this._dirInitEh = null)
}, WjValueAccessor.prototype._dirValChgEh = function()
{
if (this._onChange && this._directive && this._ngModelProp)
{
var dirValue=this._directive[this._ngModelProp];
this._modelValue !== dirValue && (this._modelValue = dirValue, this._onChange(dirValue))
}
}, WjValueAccessor.prototype._dirLostFocusEh = function()
{
this._onTouched && this._onTouched()
}, WjValueAccessor.decorators = [{type: core_1.Injectable}, ], WjValueAccessor.ctorParameters = [null, ], WjValueAccessor
}();
exports.WjValueAccessor = WjValueAccessor;
exports.WjValueAccessorFactory = WjValueAccessorFactory;
moduleExports = [];
WjDirectiveBaseModule = function()
{
function WjDirectiveBaseModule(){}
return WjDirectiveBaseModule.decorators = [{
type: core_1.NgModule, args: [{}, ]
}, ], WjDirectiveBaseModule.ctorParameters = [], WjDirectiveBaseModule
}();
exports.WjDirectiveBaseModule = WjDirectiveBaseModule