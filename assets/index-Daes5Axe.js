var dv=Object.defineProperty;var fv=(e,t,n)=>t in e?dv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var I=(e,t,n)=>(fv(e,typeof t!="symbol"?t+"":t,n),n);function pv(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function Sr(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Bf={exports:{}},Ps={},Ff={exports:{}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Io=Symbol.for("react.element"),hv=Symbol.for("react.portal"),mv=Symbol.for("react.fragment"),gv=Symbol.for("react.strict_mode"),vv=Symbol.for("react.profiler"),yv=Symbol.for("react.provider"),wv=Symbol.for("react.context"),bv=Symbol.for("react.forward_ref"),xv=Symbol.for("react.suspense"),kv=Symbol.for("react.memo"),Sv=Symbol.for("react.lazy"),Au=Symbol.iterator;function Cv(e){return e===null||typeof e!="object"?null:(e=Au&&e[Au]||e["@@iterator"],typeof e=="function"?e:null)}var Wf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Uf=Object.assign,Vf={};function Cr(e,t,n){this.props=e,this.context=t,this.refs=Vf,this.updater=n||Wf}Cr.prototype.isReactComponent={};Cr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Cr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Hf(){}Hf.prototype=Cr.prototype;function lc(e,t,n){this.props=e,this.context=t,this.refs=Vf,this.updater=n||Wf}var cc=lc.prototype=new Hf;cc.constructor=lc;Uf(cc,Cr.prototype);cc.isPureReactComponent=!0;var _u=Array.isArray,Gf=Object.prototype.hasOwnProperty,uc={current:null},Qf={key:!0,ref:!0,__self:!0,__source:!0};function Kf(e,t,n){var r,o={},i=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)Gf.call(t,r)&&!Qf.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];o.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:Io,type:e,key:i,ref:s,props:o,_owner:uc.current}}function Ev(e,t){return{$$typeof:Io,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function dc(e){return typeof e=="object"&&e!==null&&e.$$typeof===Io}function Tv(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Mu=/\/+/g;function Zs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Tv(""+e.key):t.toString(36)}function Ti(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Io:case hv:s=!0}}if(s)return s=e,o=o(s),e=r===""?"."+Zs(s,0):r,_u(o)?(n="",e!=null&&(n=e.replace(Mu,"$&/")+"/"),Ti(o,t,n,"",function(c){return c})):o!=null&&(dc(o)&&(o=Ev(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(Mu,"$&/")+"/")+e)),t.push(o)),1;if(s=0,r=r===""?".":r+":",_u(e))for(var a=0;a<e.length;a++){i=e[a];var l=r+Zs(i,a);s+=Ti(i,t,n,l,o)}else if(l=Cv(e),typeof l=="function")for(e=l.call(e),a=0;!(i=e.next()).done;)i=i.value,l=r+Zs(i,a++),s+=Ti(i,t,n,l,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Jo(e,t,n){if(e==null)return e;var r=[],o=0;return Ti(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Pv(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Te={current:null},Pi={transition:null},Av={ReactCurrentDispatcher:Te,ReactCurrentBatchConfig:Pi,ReactCurrentOwner:uc};U.Children={map:Jo,forEach:function(e,t,n){Jo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Jo(e,function(){t++}),t},toArray:function(e){return Jo(e,function(t){return t})||[]},only:function(e){if(!dc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};U.Component=Cr;U.Fragment=mv;U.Profiler=vv;U.PureComponent=lc;U.StrictMode=gv;U.Suspense=xv;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Av;U.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Uf({},e.props),o=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=uc.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Gf.call(t,l)&&!Qf.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Io,type:e.type,key:o,ref:i,props:r,_owner:s}};U.createContext=function(e){return e={$$typeof:wv,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:yv,_context:e},e.Consumer=e};U.createElement=Kf;U.createFactory=function(e){var t=Kf.bind(null,e);return t.type=e,t};U.createRef=function(){return{current:null}};U.forwardRef=function(e){return{$$typeof:bv,render:e}};U.isValidElement=dc;U.lazy=function(e){return{$$typeof:Sv,_payload:{_status:-1,_result:e},_init:Pv}};U.memo=function(e,t){return{$$typeof:kv,type:e,compare:t===void 0?null:t}};U.startTransition=function(e){var t=Pi.transition;Pi.transition={};try{e()}finally{Pi.transition=t}};U.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};U.useCallback=function(e,t){return Te.current.useCallback(e,t)};U.useContext=function(e){return Te.current.useContext(e)};U.useDebugValue=function(){};U.useDeferredValue=function(e){return Te.current.useDeferredValue(e)};U.useEffect=function(e,t){return Te.current.useEffect(e,t)};U.useId=function(){return Te.current.useId()};U.useImperativeHandle=function(e,t,n){return Te.current.useImperativeHandle(e,t,n)};U.useInsertionEffect=function(e,t){return Te.current.useInsertionEffect(e,t)};U.useLayoutEffect=function(e,t){return Te.current.useLayoutEffect(e,t)};U.useMemo=function(e,t){return Te.current.useMemo(e,t)};U.useReducer=function(e,t,n){return Te.current.useReducer(e,t,n)};U.useRef=function(e){return Te.current.useRef(e)};U.useState=function(e){return Te.current.useState(e)};U.useSyncExternalStore=function(e,t,n){return Te.current.useSyncExternalStore(e,t,n)};U.useTransition=function(){return Te.current.useTransition()};U.version="18.2.0";Ff.exports=U;var f=Ff.exports;const j=Sr(f),Yf=pv({__proto__:null,default:j},[f]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _v=f,Mv=Symbol.for("react.element"),Rv=Symbol.for("react.fragment"),Nv=Object.prototype.hasOwnProperty,$v=_v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,zv={key:!0,ref:!0,__self:!0,__source:!0};function qf(e,t,n){var r,o={},i=null,s=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Nv.call(t,r)&&!zv.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Mv,type:e,key:i,ref:s,props:o,_owner:$v.current}}Ps.Fragment=Rv;Ps.jsx=qf;Ps.jsxs=qf;Bf.exports=Ps;var w=Bf.exports,Jf={exports:{}},Ve={},Xf={exports:{}},Zf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,P){var $=_.length;_.push(P);e:for(;0<$;){var L=$-1>>>1,Q=_[L];if(0<o(Q,P))_[L]=P,_[$]=Q,$=L;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var P=_[0],$=_.pop();if($!==P){_[0]=$;e:for(var L=0,Q=_.length,ze=Q>>>1;L<ze;){var Ie=2*(L+1)-1,nt=_[Ie],de=Ie+1,je=_[de];if(0>o(nt,$))de<Q&&0>o(je,nt)?(_[L]=je,_[de]=$,L=de):(_[L]=nt,_[Ie]=$,L=Ie);else if(de<Q&&0>o(je,$))_[L]=je,_[de]=$,L=de;else break e}}return P}function o(_,P){var $=_.sortIndex-P.sortIndex;return $!==0?$:_.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],c=[],d=1,u=null,h=3,g=!1,b=!1,v=!1,x=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(_){for(var P=n(c);P!==null;){if(P.callback===null)r(c);else if(P.startTime<=_)r(c),P.sortIndex=P.expirationTime,t(l,P);else break;P=n(c)}}function k(_){if(v=!1,y(_),!b)if(n(l)!==null)b=!0,J(S);else{var P=n(c);P!==null&&W(k,P.startTime-_)}}function S(_,P){b=!1,v&&(v=!1,m(T),T=-1),g=!0;var $=h;try{for(y(P),u=n(l);u!==null&&(!(u.expirationTime>P)||_&&!B());){var L=u.callback;if(typeof L=="function"){u.callback=null,h=u.priorityLevel;var Q=L(u.expirationTime<=P);P=e.unstable_now(),typeof Q=="function"?u.callback=Q:u===n(l)&&r(l),y(P)}else r(l);u=n(l)}if(u!==null)var ze=!0;else{var Ie=n(c);Ie!==null&&W(k,Ie.startTime-P),ze=!1}return ze}finally{u=null,h=$,g=!1}}var C=!1,E=null,T=-1,N=5,M=-1;function B(){return!(e.unstable_now()-M<N)}function z(){if(E!==null){var _=e.unstable_now();M=_;var P=!0;try{P=E(!0,_)}finally{P?X():(C=!1,E=null)}}else C=!1}var X;if(typeof p=="function")X=function(){p(z)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,V=F.port2;F.port1.onmessage=z,X=function(){V.postMessage(null)}}else X=function(){x(z,0)};function J(_){E=_,C||(C=!0,X())}function W(_,P){T=x(function(){_(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){b||g||(b=!0,J(S))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(_){switch(h){case 1:case 2:case 3:var P=3;break;default:P=h}var $=h;h=P;try{return _()}finally{h=$}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,P){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var $=h;h=_;try{return P()}finally{h=$}},e.unstable_scheduleCallback=function(_,P,$){var L=e.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?L+$:L):$=L,_){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=$+Q,_={id:d++,callback:P,priorityLevel:_,startTime:$,expirationTime:Q,sortIndex:-1},$>L?(_.sortIndex=$,t(c,_),n(l)===null&&_===n(c)&&(v?(m(T),T=-1):v=!0,W(k,$-L))):(_.sortIndex=Q,t(l,_),b||g||(b=!0,J(S))),_},e.unstable_shouldYield=B,e.unstable_wrapCallback=function(_){var P=h;return function(){var $=h;h=P;try{return _.apply(this,arguments)}finally{h=$}}}})(Zf);Xf.exports=Zf;var Iv=Xf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ep=f,We=Iv;function A(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var tp=new Set,co={};function Nn(e,t){dr(e,t),dr(e+"Capture",t)}function dr(e,t){for(co[e]=t,e=0;e<t.length;e++)tp.add(t[e])}var At=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Va=Object.prototype.hasOwnProperty,jv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ru={},Nu={};function Lv(e){return Va.call(Nu,e)?!0:Va.call(Ru,e)?!1:jv.test(e)?Nu[e]=!0:(Ru[e]=!0,!1)}function Dv(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ov(e,t,n,r){if(t===null||typeof t>"u"||Dv(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Pe(e,t,n,r,o,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var we={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){we[e]=new Pe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];we[t]=new Pe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){we[e]=new Pe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){we[e]=new Pe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){we[e]=new Pe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){we[e]=new Pe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){we[e]=new Pe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){we[e]=new Pe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){we[e]=new Pe(e,5,!1,e.toLowerCase(),null,!1,!1)});var fc=/[\-:]([a-z])/g;function pc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(fc,pc);we[t]=new Pe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(fc,pc);we[t]=new Pe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(fc,pc);we[t]=new Pe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){we[e]=new Pe(e,1,!1,e.toLowerCase(),null,!1,!1)});we.xlinkHref=new Pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){we[e]=new Pe(e,1,!1,e.toLowerCase(),null,!0,!0)});function hc(e,t,n,r){var o=we.hasOwnProperty(t)?we[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ov(t,n,o,r)&&(n=null),r||o===null?Lv(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var It=ep.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Xo=Symbol.for("react.element"),Wn=Symbol.for("react.portal"),Un=Symbol.for("react.fragment"),mc=Symbol.for("react.strict_mode"),Ha=Symbol.for("react.profiler"),np=Symbol.for("react.provider"),rp=Symbol.for("react.context"),gc=Symbol.for("react.forward_ref"),Ga=Symbol.for("react.suspense"),Qa=Symbol.for("react.suspense_list"),vc=Symbol.for("react.memo"),Wt=Symbol.for("react.lazy"),op=Symbol.for("react.offscreen"),$u=Symbol.iterator;function $r(e){return e===null||typeof e!="object"?null:(e=$u&&e[$u]||e["@@iterator"],typeof e=="function"?e:null)}var se=Object.assign,ea;function Kr(e){if(ea===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ea=t&&t[1]||""}return`
`+ea+e}var ta=!1;function na(e,t){if(!e||ta)return"";ta=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),s=o.length-1,a=i.length-1;1<=s&&0<=a&&o[s]!==i[a];)a--;for(;1<=s&&0<=a;s--,a--)if(o[s]!==i[a]){if(s!==1||a!==1)do if(s--,a--,0>a||o[s]!==i[a]){var l=`
`+o[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{ta=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Kr(e):""}function Bv(e){switch(e.tag){case 5:return Kr(e.type);case 16:return Kr("Lazy");case 13:return Kr("Suspense");case 19:return Kr("SuspenseList");case 0:case 2:case 15:return e=na(e.type,!1),e;case 11:return e=na(e.type.render,!1),e;case 1:return e=na(e.type,!0),e;default:return""}}function Ka(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Un:return"Fragment";case Wn:return"Portal";case Ha:return"Profiler";case mc:return"StrictMode";case Ga:return"Suspense";case Qa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case rp:return(e.displayName||"Context")+".Consumer";case np:return(e._context.displayName||"Context")+".Provider";case gc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case vc:return t=e.displayName||null,t!==null?t:Ka(e.type)||"Memo";case Wt:t=e._payload,e=e._init;try{return Ka(e(t))}catch{}}return null}function Fv(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ka(t);case 8:return t===mc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function on(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ip(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Wv(e){var t=ip(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){r=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Zo(e){e._valueTracker||(e._valueTracker=Wv(e))}function sp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ip(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Gi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ya(e,t){var n=t.checked;return se({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function zu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=on(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ap(e,t){t=t.checked,t!=null&&hc(e,"checked",t,!1)}function qa(e,t){ap(e,t);var n=on(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ja(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ja(e,t.type,on(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Iu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ja(e,t,n){(t!=="number"||Gi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Yr=Array.isArray;function er(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+on(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Xa(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(A(91));return se({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ju(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(A(92));if(Yr(n)){if(1<n.length)throw Error(A(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:on(n)}}function lp(e,t){var n=on(t.value),r=on(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Lu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function cp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Za(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?cp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ei,up=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ei=ei||document.createElement("div"),ei.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ei.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function uo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Xr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Uv=["Webkit","ms","Moz","O"];Object.keys(Xr).forEach(function(e){Uv.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Xr[t]=Xr[e]})});function dp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Xr.hasOwnProperty(e)&&Xr[e]?(""+t).trim():t+"px"}function fp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=dp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Vv=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function el(e,t){if(t){if(Vv[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(A(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(A(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(A(61))}if(t.style!=null&&typeof t.style!="object")throw Error(A(62))}}function tl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nl=null;function yc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var rl=null,tr=null,nr=null;function Du(e){if(e=Do(e)){if(typeof rl!="function")throw Error(A(280));var t=e.stateNode;t&&(t=Ns(t),rl(e.stateNode,e.type,t))}}function pp(e){tr?nr?nr.push(e):nr=[e]:tr=e}function hp(){if(tr){var e=tr,t=nr;if(nr=tr=null,Du(e),t)for(e=0;e<t.length;e++)Du(t[e])}}function mp(e,t){return e(t)}function gp(){}var ra=!1;function vp(e,t,n){if(ra)return e(t,n);ra=!0;try{return mp(e,t,n)}finally{ra=!1,(tr!==null||nr!==null)&&(gp(),hp())}}function fo(e,t){var n=e.stateNode;if(n===null)return null;var r=Ns(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(A(231,t,typeof n));return n}var ol=!1;if(At)try{var zr={};Object.defineProperty(zr,"passive",{get:function(){ol=!0}}),window.addEventListener("test",zr,zr),window.removeEventListener("test",zr,zr)}catch{ol=!1}function Hv(e,t,n,r,o,i,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var Zr=!1,Qi=null,Ki=!1,il=null,Gv={onError:function(e){Zr=!0,Qi=e}};function Qv(e,t,n,r,o,i,s,a,l){Zr=!1,Qi=null,Hv.apply(Gv,arguments)}function Kv(e,t,n,r,o,i,s,a,l){if(Qv.apply(this,arguments),Zr){if(Zr){var c=Qi;Zr=!1,Qi=null}else throw Error(A(198));Ki||(Ki=!0,il=c)}}function $n(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function yp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ou(e){if($n(e)!==e)throw Error(A(188))}function Yv(e){var t=e.alternate;if(!t){if(t=$n(e),t===null)throw Error(A(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Ou(o),e;if(i===r)return Ou(o),t;i=i.sibling}throw Error(A(188))}if(n.return!==r.return)n=o,r=i;else{for(var s=!1,a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s){for(a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s)throw Error(A(189))}}if(n.alternate!==r)throw Error(A(190))}if(n.tag!==3)throw Error(A(188));return n.stateNode.current===n?e:t}function wp(e){return e=Yv(e),e!==null?bp(e):null}function bp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=bp(e);if(t!==null)return t;e=e.sibling}return null}var xp=We.unstable_scheduleCallback,Bu=We.unstable_cancelCallback,qv=We.unstable_shouldYield,Jv=We.unstable_requestPaint,ce=We.unstable_now,Xv=We.unstable_getCurrentPriorityLevel,wc=We.unstable_ImmediatePriority,kp=We.unstable_UserBlockingPriority,Yi=We.unstable_NormalPriority,Zv=We.unstable_LowPriority,Sp=We.unstable_IdlePriority,As=null,yt=null;function e0(e){if(yt&&typeof yt.onCommitFiberRoot=="function")try{yt.onCommitFiberRoot(As,e,void 0,(e.current.flags&128)===128)}catch{}}var ct=Math.clz32?Math.clz32:r0,t0=Math.log,n0=Math.LN2;function r0(e){return e>>>=0,e===0?32:31-(t0(e)/n0|0)|0}var ti=64,ni=4194304;function qr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function qi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~o;a!==0?r=qr(a):(i&=s,i!==0&&(r=qr(i)))}else s=n&~o,s!==0?r=qr(s):i!==0&&(r=qr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ct(t),o=1<<n,r|=e[n],t&=~o;return r}function o0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function i0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-ct(i),a=1<<s,l=o[s];l===-1?(!(a&n)||a&r)&&(o[s]=o0(a,t)):l<=t&&(e.expiredLanes|=a),i&=~a}}function sl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Cp(){var e=ti;return ti<<=1,!(ti&4194240)&&(ti=64),e}function oa(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function jo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ct(t),e[t]=n}function s0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-ct(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function bc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ct(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var q=0;function Ep(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Tp,xc,Pp,Ap,_p,al=!1,ri=[],Yt=null,qt=null,Jt=null,po=new Map,ho=new Map,Vt=[],a0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Fu(e,t){switch(e){case"focusin":case"focusout":Yt=null;break;case"dragenter":case"dragleave":qt=null;break;case"mouseover":case"mouseout":Jt=null;break;case"pointerover":case"pointerout":po.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ho.delete(t.pointerId)}}function Ir(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Do(t),t!==null&&xc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function l0(e,t,n,r,o){switch(t){case"focusin":return Yt=Ir(Yt,e,t,n,r,o),!0;case"dragenter":return qt=Ir(qt,e,t,n,r,o),!0;case"mouseover":return Jt=Ir(Jt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return po.set(i,Ir(po.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,ho.set(i,Ir(ho.get(i)||null,e,t,n,r,o)),!0}return!1}function Mp(e){var t=vn(e.target);if(t!==null){var n=$n(t);if(n!==null){if(t=n.tag,t===13){if(t=yp(n),t!==null){e.blockedOn=t,_p(e.priority,function(){Pp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ai(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ll(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);nl=r,n.target.dispatchEvent(r),nl=null}else return t=Do(n),t!==null&&xc(t),e.blockedOn=n,!1;t.shift()}return!0}function Wu(e,t,n){Ai(e)&&n.delete(t)}function c0(){al=!1,Yt!==null&&Ai(Yt)&&(Yt=null),qt!==null&&Ai(qt)&&(qt=null),Jt!==null&&Ai(Jt)&&(Jt=null),po.forEach(Wu),ho.forEach(Wu)}function jr(e,t){e.blockedOn===t&&(e.blockedOn=null,al||(al=!0,We.unstable_scheduleCallback(We.unstable_NormalPriority,c0)))}function mo(e){function t(o){return jr(o,e)}if(0<ri.length){jr(ri[0],e);for(var n=1;n<ri.length;n++){var r=ri[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Yt!==null&&jr(Yt,e),qt!==null&&jr(qt,e),Jt!==null&&jr(Jt,e),po.forEach(t),ho.forEach(t),n=0;n<Vt.length;n++)r=Vt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Vt.length&&(n=Vt[0],n.blockedOn===null);)Mp(n),n.blockedOn===null&&Vt.shift()}var rr=It.ReactCurrentBatchConfig,Ji=!0;function u0(e,t,n,r){var o=q,i=rr.transition;rr.transition=null;try{q=1,kc(e,t,n,r)}finally{q=o,rr.transition=i}}function d0(e,t,n,r){var o=q,i=rr.transition;rr.transition=null;try{q=4,kc(e,t,n,r)}finally{q=o,rr.transition=i}}function kc(e,t,n,r){if(Ji){var o=ll(e,t,n,r);if(o===null)ha(e,t,r,Xi,n),Fu(e,r);else if(l0(o,e,t,n,r))r.stopPropagation();else if(Fu(e,r),t&4&&-1<a0.indexOf(e)){for(;o!==null;){var i=Do(o);if(i!==null&&Tp(i),i=ll(e,t,n,r),i===null&&ha(e,t,r,Xi,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else ha(e,t,r,null,n)}}var Xi=null;function ll(e,t,n,r){if(Xi=null,e=yc(r),e=vn(e),e!==null)if(t=$n(e),t===null)e=null;else if(n=t.tag,n===13){if(e=yp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Xi=e,null}function Rp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xv()){case wc:return 1;case kp:return 4;case Yi:case Zv:return 16;case Sp:return 536870912;default:return 16}default:return 16}}var Gt=null,Sc=null,_i=null;function Np(){if(_i)return _i;var e,t=Sc,n=t.length,r,o="value"in Gt?Gt.value:Gt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===o[i-r];r++);return _i=o.slice(e,1<r?1-r:void 0)}function Mi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function oi(){return!0}function Uu(){return!1}function He(e){function t(n,r,o,i,s){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?oi:Uu,this.isPropagationStopped=Uu,this}return se(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=oi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=oi)},persist:function(){},isPersistent:oi}),t}var Er={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cc=He(Er),Lo=se({},Er,{view:0,detail:0}),f0=He(Lo),ia,sa,Lr,_s=se({},Lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ec,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Lr&&(Lr&&e.type==="mousemove"?(ia=e.screenX-Lr.screenX,sa=e.screenY-Lr.screenY):sa=ia=0,Lr=e),ia)},movementY:function(e){return"movementY"in e?e.movementY:sa}}),Vu=He(_s),p0=se({},_s,{dataTransfer:0}),h0=He(p0),m0=se({},Lo,{relatedTarget:0}),aa=He(m0),g0=se({},Er,{animationName:0,elapsedTime:0,pseudoElement:0}),v0=He(g0),y0=se({},Er,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),w0=He(y0),b0=se({},Er,{data:0}),Hu=He(b0),x0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},k0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},S0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function C0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=S0[e])?!!t[e]:!1}function Ec(){return C0}var E0=se({},Lo,{key:function(e){if(e.key){var t=x0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Mi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?k0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ec,charCode:function(e){return e.type==="keypress"?Mi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Mi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),T0=He(E0),P0=se({},_s,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gu=He(P0),A0=se({},Lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ec}),_0=He(A0),M0=se({},Er,{propertyName:0,elapsedTime:0,pseudoElement:0}),R0=He(M0),N0=se({},_s,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),$0=He(N0),z0=[9,13,27,32],Tc=At&&"CompositionEvent"in window,eo=null;At&&"documentMode"in document&&(eo=document.documentMode);var I0=At&&"TextEvent"in window&&!eo,$p=At&&(!Tc||eo&&8<eo&&11>=eo),Qu=" ",Ku=!1;function zp(e,t){switch(e){case"keyup":return z0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ip(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vn=!1;function j0(e,t){switch(e){case"compositionend":return Ip(t);case"keypress":return t.which!==32?null:(Ku=!0,Qu);case"textInput":return e=t.data,e===Qu&&Ku?null:e;default:return null}}function L0(e,t){if(Vn)return e==="compositionend"||!Tc&&zp(e,t)?(e=Np(),_i=Sc=Gt=null,Vn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return $p&&t.locale!=="ko"?null:t.data;default:return null}}var D0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!D0[e.type]:t==="textarea"}function jp(e,t,n,r){pp(r),t=Zi(t,"onChange"),0<t.length&&(n=new Cc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var to=null,go=null;function O0(e){Qp(e,0)}function Ms(e){var t=Qn(e);if(sp(t))return e}function B0(e,t){if(e==="change")return t}var Lp=!1;if(At){var la;if(At){var ca="oninput"in document;if(!ca){var qu=document.createElement("div");qu.setAttribute("oninput","return;"),ca=typeof qu.oninput=="function"}la=ca}else la=!1;Lp=la&&(!document.documentMode||9<document.documentMode)}function Ju(){to&&(to.detachEvent("onpropertychange",Dp),go=to=null)}function Dp(e){if(e.propertyName==="value"&&Ms(go)){var t=[];jp(t,go,e,yc(e)),vp(O0,t)}}function F0(e,t,n){e==="focusin"?(Ju(),to=t,go=n,to.attachEvent("onpropertychange",Dp)):e==="focusout"&&Ju()}function W0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ms(go)}function U0(e,t){if(e==="click")return Ms(t)}function V0(e,t){if(e==="input"||e==="change")return Ms(t)}function H0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ft=typeof Object.is=="function"?Object.is:H0;function vo(e,t){if(ft(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Va.call(t,o)||!ft(e[o],t[o]))return!1}return!0}function Xu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Zu(e,t){var n=Xu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Xu(n)}}function Op(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Op(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Bp(){for(var e=window,t=Gi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Gi(e.document)}return t}function Pc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function G0(e){var t=Bp(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Op(n.ownerDocument.documentElement,n)){if(r!==null&&Pc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Zu(n,i);var s=Zu(n,r);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Q0=At&&"documentMode"in document&&11>=document.documentMode,Hn=null,cl=null,no=null,ul=!1;function ed(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ul||Hn==null||Hn!==Gi(r)||(r=Hn,"selectionStart"in r&&Pc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),no&&vo(no,r)||(no=r,r=Zi(cl,"onSelect"),0<r.length&&(t=new Cc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Hn)))}function ii(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Gn={animationend:ii("Animation","AnimationEnd"),animationiteration:ii("Animation","AnimationIteration"),animationstart:ii("Animation","AnimationStart"),transitionend:ii("Transition","TransitionEnd")},ua={},Fp={};At&&(Fp=document.createElement("div").style,"AnimationEvent"in window||(delete Gn.animationend.animation,delete Gn.animationiteration.animation,delete Gn.animationstart.animation),"TransitionEvent"in window||delete Gn.transitionend.transition);function Rs(e){if(ua[e])return ua[e];if(!Gn[e])return e;var t=Gn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Fp)return ua[e]=t[n];return e}var Wp=Rs("animationend"),Up=Rs("animationiteration"),Vp=Rs("animationstart"),Hp=Rs("transitionend"),Gp=new Map,td="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function un(e,t){Gp.set(e,t),Nn(t,[e])}for(var da=0;da<td.length;da++){var fa=td[da],K0=fa.toLowerCase(),Y0=fa[0].toUpperCase()+fa.slice(1);un(K0,"on"+Y0)}un(Wp,"onAnimationEnd");un(Up,"onAnimationIteration");un(Vp,"onAnimationStart");un("dblclick","onDoubleClick");un("focusin","onFocus");un("focusout","onBlur");un(Hp,"onTransitionEnd");dr("onMouseEnter",["mouseout","mouseover"]);dr("onMouseLeave",["mouseout","mouseover"]);dr("onPointerEnter",["pointerout","pointerover"]);dr("onPointerLeave",["pointerout","pointerover"]);Nn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Nn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Nn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Nn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Nn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Nn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),q0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Jr));function nd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Kv(r,t,void 0,e),e.currentTarget=null}function Qp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==i&&o.isPropagationStopped())break e;nd(o,a,c),i=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,c=a.currentTarget,a=a.listener,l!==i&&o.isPropagationStopped())break e;nd(o,a,c),i=l}}}if(Ki)throw e=il,Ki=!1,il=null,e}function te(e,t){var n=t[ml];n===void 0&&(n=t[ml]=new Set);var r=e+"__bubble";n.has(r)||(Kp(t,e,2,!1),n.add(r))}function pa(e,t,n){var r=0;t&&(r|=4),Kp(n,e,r,t)}var si="_reactListening"+Math.random().toString(36).slice(2);function yo(e){if(!e[si]){e[si]=!0,tp.forEach(function(n){n!=="selectionchange"&&(q0.has(n)||pa(n,!1,e),pa(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[si]||(t[si]=!0,pa("selectionchange",!1,t))}}function Kp(e,t,n,r){switch(Rp(t)){case 1:var o=u0;break;case 4:o=d0;break;default:o=kc}n=o.bind(null,t,n,e),o=void 0,!ol||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function ha(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;s=s.return}for(;a!==null;){if(s=vn(a),s===null)return;if(l=s.tag,l===5||l===6){r=i=s;continue e}a=a.parentNode}}r=r.return}vp(function(){var c=i,d=yc(n),u=[];e:{var h=Gp.get(e);if(h!==void 0){var g=Cc,b=e;switch(e){case"keypress":if(Mi(n)===0)break e;case"keydown":case"keyup":g=T0;break;case"focusin":b="focus",g=aa;break;case"focusout":b="blur",g=aa;break;case"beforeblur":case"afterblur":g=aa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Vu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=h0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=_0;break;case Wp:case Up:case Vp:g=v0;break;case Hp:g=R0;break;case"scroll":g=f0;break;case"wheel":g=$0;break;case"copy":case"cut":case"paste":g=w0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Gu}var v=(t&4)!==0,x=!v&&e==="scroll",m=v?h!==null?h+"Capture":null:h;v=[];for(var p=c,y;p!==null;){y=p;var k=y.stateNode;if(y.tag===5&&k!==null&&(y=k,m!==null&&(k=fo(p,m),k!=null&&v.push(wo(p,k,y)))),x)break;p=p.return}0<v.length&&(h=new g(h,b,null,n,d),u.push({event:h,listeners:v}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",h&&n!==nl&&(b=n.relatedTarget||n.fromElement)&&(vn(b)||b[_t]))break e;if((g||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,g?(b=n.relatedTarget||n.toElement,g=c,b=b?vn(b):null,b!==null&&(x=$n(b),b!==x||b.tag!==5&&b.tag!==6)&&(b=null)):(g=null,b=c),g!==b)){if(v=Vu,k="onMouseLeave",m="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(v=Gu,k="onPointerLeave",m="onPointerEnter",p="pointer"),x=g==null?h:Qn(g),y=b==null?h:Qn(b),h=new v(k,p+"leave",g,n,d),h.target=x,h.relatedTarget=y,k=null,vn(d)===c&&(v=new v(m,p+"enter",b,n,d),v.target=y,v.relatedTarget=x,k=v),x=k,g&&b)t:{for(v=g,m=b,p=0,y=v;y;y=jn(y))p++;for(y=0,k=m;k;k=jn(k))y++;for(;0<p-y;)v=jn(v),p--;for(;0<y-p;)m=jn(m),y--;for(;p--;){if(v===m||m!==null&&v===m.alternate)break t;v=jn(v),m=jn(m)}v=null}else v=null;g!==null&&rd(u,h,g,v,!1),b!==null&&x!==null&&rd(u,x,b,v,!0)}}e:{if(h=c?Qn(c):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var S=B0;else if(Yu(h))if(Lp)S=V0;else{S=W0;var C=F0}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=U0);if(S&&(S=S(e,c))){jp(u,S,n,d);break e}C&&C(e,h,c),e==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&Ja(h,"number",h.value)}switch(C=c?Qn(c):window,e){case"focusin":(Yu(C)||C.contentEditable==="true")&&(Hn=C,cl=c,no=null);break;case"focusout":no=cl=Hn=null;break;case"mousedown":ul=!0;break;case"contextmenu":case"mouseup":case"dragend":ul=!1,ed(u,n,d);break;case"selectionchange":if(Q0)break;case"keydown":case"keyup":ed(u,n,d)}var E;if(Tc)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Vn?zp(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&($p&&n.locale!=="ko"&&(Vn||T!=="onCompositionStart"?T==="onCompositionEnd"&&Vn&&(E=Np()):(Gt=d,Sc="value"in Gt?Gt.value:Gt.textContent,Vn=!0)),C=Zi(c,T),0<C.length&&(T=new Hu(T,e,null,n,d),u.push({event:T,listeners:C}),E?T.data=E:(E=Ip(n),E!==null&&(T.data=E)))),(E=I0?j0(e,n):L0(e,n))&&(c=Zi(c,"onBeforeInput"),0<c.length&&(d=new Hu("onBeforeInput","beforeinput",null,n,d),u.push({event:d,listeners:c}),d.data=E))}Qp(u,t)})}function wo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Zi(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=fo(e,n),i!=null&&r.unshift(wo(e,i,o)),i=fo(e,t),i!=null&&r.push(wo(e,i,o))),e=e.return}return r}function jn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function rd(e,t,n,r,o){for(var i=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,o?(l=fo(n,i),l!=null&&s.unshift(wo(n,l,a))):o||(l=fo(n,i),l!=null&&s.push(wo(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var J0=/\r\n?/g,X0=/\u0000|\uFFFD/g;function od(e){return(typeof e=="string"?e:""+e).replace(J0,`
`).replace(X0,"")}function ai(e,t,n){if(t=od(t),od(e)!==t&&n)throw Error(A(425))}function es(){}var dl=null,fl=null;function pl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var hl=typeof setTimeout=="function"?setTimeout:void 0,Z0=typeof clearTimeout=="function"?clearTimeout:void 0,id=typeof Promise=="function"?Promise:void 0,ey=typeof queueMicrotask=="function"?queueMicrotask:typeof id<"u"?function(e){return id.resolve(null).then(e).catch(ty)}:hl;function ty(e){setTimeout(function(){throw e})}function ma(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),mo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);mo(t)}function Xt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function sd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Tr=Math.random().toString(36).slice(2),gt="__reactFiber$"+Tr,bo="__reactProps$"+Tr,_t="__reactContainer$"+Tr,ml="__reactEvents$"+Tr,ny="__reactListeners$"+Tr,ry="__reactHandles$"+Tr;function vn(e){var t=e[gt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[_t]||n[gt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=sd(e);e!==null;){if(n=e[gt])return n;e=sd(e)}return t}e=n,n=e.parentNode}return null}function Do(e){return e=e[gt]||e[_t],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Qn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(A(33))}function Ns(e){return e[bo]||null}var gl=[],Kn=-1;function dn(e){return{current:e}}function ne(e){0>Kn||(e.current=gl[Kn],gl[Kn]=null,Kn--)}function Z(e,t){Kn++,gl[Kn]=e.current,e.current=t}var sn={},Se=dn(sn),Re=dn(!1),Cn=sn;function fr(e,t){var n=e.type.contextTypes;if(!n)return sn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ne(e){return e=e.childContextTypes,e!=null}function ts(){ne(Re),ne(Se)}function ad(e,t,n){if(Se.current!==sn)throw Error(A(168));Z(Se,t),Z(Re,n)}function Yp(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(A(108,Fv(e)||"Unknown",o));return se({},n,r)}function ns(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||sn,Cn=Se.current,Z(Se,e),Z(Re,Re.current),!0}function ld(e,t,n){var r=e.stateNode;if(!r)throw Error(A(169));n?(e=Yp(e,t,Cn),r.__reactInternalMemoizedMergedChildContext=e,ne(Re),ne(Se),Z(Se,e)):ne(Re),Z(Re,n)}var Ct=null,$s=!1,ga=!1;function qp(e){Ct===null?Ct=[e]:Ct.push(e)}function oy(e){$s=!0,qp(e)}function fn(){if(!ga&&Ct!==null){ga=!0;var e=0,t=q;try{var n=Ct;for(q=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ct=null,$s=!1}catch(o){throw Ct!==null&&(Ct=Ct.slice(e+1)),xp(wc,fn),o}finally{q=t,ga=!1}}return null}var Yn=[],qn=0,rs=null,os=0,Qe=[],Ke=0,En=null,Et=1,Tt="";function mn(e,t){Yn[qn++]=os,Yn[qn++]=rs,rs=e,os=t}function Jp(e,t,n){Qe[Ke++]=Et,Qe[Ke++]=Tt,Qe[Ke++]=En,En=e;var r=Et;e=Tt;var o=32-ct(r)-1;r&=~(1<<o),n+=1;var i=32-ct(t)+o;if(30<i){var s=o-o%5;i=(r&(1<<s)-1).toString(32),r>>=s,o-=s,Et=1<<32-ct(t)+o|n<<o|r,Tt=i+e}else Et=1<<i|n<<o|r,Tt=e}function Ac(e){e.return!==null&&(mn(e,1),Jp(e,1,0))}function _c(e){for(;e===rs;)rs=Yn[--qn],Yn[qn]=null,os=Yn[--qn],Yn[qn]=null;for(;e===En;)En=Qe[--Ke],Qe[Ke]=null,Tt=Qe[--Ke],Qe[Ke]=null,Et=Qe[--Ke],Qe[Ke]=null}var Be=null,Oe=null,re=!1,at=null;function Xp(e,t){var n=Ye(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function cd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Be=e,Oe=Xt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Be=e,Oe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=En!==null?{id:Et,overflow:Tt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ye(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Be=e,Oe=null,!0):!1;default:return!1}}function vl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function yl(e){if(re){var t=Oe;if(t){var n=t;if(!cd(e,t)){if(vl(e))throw Error(A(418));t=Xt(n.nextSibling);var r=Be;t&&cd(e,t)?Xp(r,n):(e.flags=e.flags&-4097|2,re=!1,Be=e)}}else{if(vl(e))throw Error(A(418));e.flags=e.flags&-4097|2,re=!1,Be=e}}}function ud(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Be=e}function li(e){if(e!==Be)return!1;if(!re)return ud(e),re=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!pl(e.type,e.memoizedProps)),t&&(t=Oe)){if(vl(e))throw Zp(),Error(A(418));for(;t;)Xp(e,t),t=Xt(t.nextSibling)}if(ud(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(A(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Oe=Xt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Oe=null}}else Oe=Be?Xt(e.stateNode.nextSibling):null;return!0}function Zp(){for(var e=Oe;e;)e=Xt(e.nextSibling)}function pr(){Oe=Be=null,re=!1}function Mc(e){at===null?at=[e]:at.push(e)}var iy=It.ReactCurrentBatchConfig;function it(e,t){if(e&&e.defaultProps){t=se({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var is=dn(null),ss=null,Jn=null,Rc=null;function Nc(){Rc=Jn=ss=null}function $c(e){var t=is.current;ne(is),e._currentValue=t}function wl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function or(e,t){ss=e,Rc=Jn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Me=!0),e.firstContext=null)}function Je(e){var t=e._currentValue;if(Rc!==e)if(e={context:e,memoizedValue:t,next:null},Jn===null){if(ss===null)throw Error(A(308));Jn=e,ss.dependencies={lanes:0,firstContext:e}}else Jn=Jn.next=e;return t}var yn=null;function zc(e){yn===null?yn=[e]:yn.push(e)}function eh(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,zc(t)):(n.next=o.next,o.next=n),t.interleaved=n,Mt(e,r)}function Mt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ut=!1;function Ic(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function th(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Pt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Zt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Mt(e,n)}return o=r.interleaved,o===null?(t.next=t,zc(r)):(t.next=o.next,o.next=t),r.interleaved=t,Mt(e,n)}function Ri(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,bc(e,n)}}function dd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function as(e,t,n,r){var o=e.updateQueue;Ut=!1;var i=o.firstBaseUpdate,s=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var l=a,c=l.next;l.next=null,s===null?i=c:s.next=c,s=l;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(i!==null){var u=o.baseState;s=0,d=c=l=null,a=i;do{var h=a.lane,g=a.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var b=e,v=a;switch(h=t,g=n,v.tag){case 1:if(b=v.payload,typeof b=="function"){u=b.call(g,u,h);break e}u=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=v.payload,h=typeof b=="function"?b.call(g,u,h):b,h==null)break e;u=se({},u,h);break e;case 2:Ut=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=g,l=u):d=d.next=g,s|=h;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;h=a,a=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(!0);if(d===null&&(l=u),o.baseState=l,o.firstBaseUpdate=c,o.lastBaseUpdate=d,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Pn|=s,e.lanes=s,e.memoizedState=u}}function fd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(A(191,o));o.call(r)}}}var nh=new ep.Component().refs;function bl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:se({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var zs={isMounted:function(e){return(e=e._reactInternals)?$n(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ee(),o=tn(e),i=Pt(r,o);i.payload=t,n!=null&&(i.callback=n),t=Zt(e,i,o),t!==null&&(ut(t,e,o,r),Ri(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ee(),o=tn(e),i=Pt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Zt(e,i,o),t!==null&&(ut(t,e,o,r),Ri(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ee(),r=tn(e),o=Pt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Zt(e,o,r),t!==null&&(ut(t,e,r,n),Ri(t,e,r))}};function pd(e,t,n,r,o,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,s):t.prototype&&t.prototype.isPureReactComponent?!vo(n,r)||!vo(o,i):!0}function rh(e,t,n){var r=!1,o=sn,i=t.contextType;return typeof i=="object"&&i!==null?i=Je(i):(o=Ne(t)?Cn:Se.current,r=t.contextTypes,i=(r=r!=null)?fr(e,o):sn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=zs,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function hd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&zs.enqueueReplaceState(t,t.state,null)}function xl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=nh,Ic(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Je(i):(i=Ne(t)?Cn:Se.current,o.context=fr(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(bl(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&zs.enqueueReplaceState(o,o.state,null),as(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Dr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(A(309));var r=n.stateNode}if(!r)throw Error(A(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var a=o.refs;a===nh&&(a=o.refs={}),s===null?delete a[i]:a[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(A(284));if(!n._owner)throw Error(A(290,e))}return e}function ci(e,t){throw e=Object.prototype.toString.call(t),Error(A(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function md(e){var t=e._init;return t(e._payload)}function oh(e){function t(m,p){if(e){var y=m.deletions;y===null?(m.deletions=[p],m.flags|=16):y.push(p)}}function n(m,p){if(!e)return null;for(;p!==null;)t(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function o(m,p){return m=nn(m,p),m.index=0,m.sibling=null,m}function i(m,p,y){return m.index=y,e?(y=m.alternate,y!==null?(y=y.index,y<p?(m.flags|=2,p):y):(m.flags|=2,p)):(m.flags|=1048576,p)}function s(m){return e&&m.alternate===null&&(m.flags|=2),m}function a(m,p,y,k){return p===null||p.tag!==6?(p=Sa(y,m.mode,k),p.return=m,p):(p=o(p,y),p.return=m,p)}function l(m,p,y,k){var S=y.type;return S===Un?d(m,p,y.props.children,k,y.key):p!==null&&(p.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Wt&&md(S)===p.type)?(k=o(p,y.props),k.ref=Dr(m,p,y),k.return=m,k):(k=Li(y.type,y.key,y.props,null,m.mode,k),k.ref=Dr(m,p,y),k.return=m,k)}function c(m,p,y,k){return p===null||p.tag!==4||p.stateNode.containerInfo!==y.containerInfo||p.stateNode.implementation!==y.implementation?(p=Ca(y,m.mode,k),p.return=m,p):(p=o(p,y.children||[]),p.return=m,p)}function d(m,p,y,k,S){return p===null||p.tag!==7?(p=Sn(y,m.mode,k,S),p.return=m,p):(p=o(p,y),p.return=m,p)}function u(m,p,y){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Sa(""+p,m.mode,y),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Xo:return y=Li(p.type,p.key,p.props,null,m.mode,y),y.ref=Dr(m,null,p),y.return=m,y;case Wn:return p=Ca(p,m.mode,y),p.return=m,p;case Wt:var k=p._init;return u(m,k(p._payload),y)}if(Yr(p)||$r(p))return p=Sn(p,m.mode,y,null),p.return=m,p;ci(m,p)}return null}function h(m,p,y,k){var S=p!==null?p.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return S!==null?null:a(m,p,""+y,k);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Xo:return y.key===S?l(m,p,y,k):null;case Wn:return y.key===S?c(m,p,y,k):null;case Wt:return S=y._init,h(m,p,S(y._payload),k)}if(Yr(y)||$r(y))return S!==null?null:d(m,p,y,k,null);ci(m,y)}return null}function g(m,p,y,k,S){if(typeof k=="string"&&k!==""||typeof k=="number")return m=m.get(y)||null,a(p,m,""+k,S);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Xo:return m=m.get(k.key===null?y:k.key)||null,l(p,m,k,S);case Wn:return m=m.get(k.key===null?y:k.key)||null,c(p,m,k,S);case Wt:var C=k._init;return g(m,p,y,C(k._payload),S)}if(Yr(k)||$r(k))return m=m.get(y)||null,d(p,m,k,S,null);ci(p,k)}return null}function b(m,p,y,k){for(var S=null,C=null,E=p,T=p=0,N=null;E!==null&&T<y.length;T++){E.index>T?(N=E,E=null):N=E.sibling;var M=h(m,E,y[T],k);if(M===null){E===null&&(E=N);break}e&&E&&M.alternate===null&&t(m,E),p=i(M,p,T),C===null?S=M:C.sibling=M,C=M,E=N}if(T===y.length)return n(m,E),re&&mn(m,T),S;if(E===null){for(;T<y.length;T++)E=u(m,y[T],k),E!==null&&(p=i(E,p,T),C===null?S=E:C.sibling=E,C=E);return re&&mn(m,T),S}for(E=r(m,E);T<y.length;T++)N=g(E,m,T,y[T],k),N!==null&&(e&&N.alternate!==null&&E.delete(N.key===null?T:N.key),p=i(N,p,T),C===null?S=N:C.sibling=N,C=N);return e&&E.forEach(function(B){return t(m,B)}),re&&mn(m,T),S}function v(m,p,y,k){var S=$r(y);if(typeof S!="function")throw Error(A(150));if(y=S.call(y),y==null)throw Error(A(151));for(var C=S=null,E=p,T=p=0,N=null,M=y.next();E!==null&&!M.done;T++,M=y.next()){E.index>T?(N=E,E=null):N=E.sibling;var B=h(m,E,M.value,k);if(B===null){E===null&&(E=N);break}e&&E&&B.alternate===null&&t(m,E),p=i(B,p,T),C===null?S=B:C.sibling=B,C=B,E=N}if(M.done)return n(m,E),re&&mn(m,T),S;if(E===null){for(;!M.done;T++,M=y.next())M=u(m,M.value,k),M!==null&&(p=i(M,p,T),C===null?S=M:C.sibling=M,C=M);return re&&mn(m,T),S}for(E=r(m,E);!M.done;T++,M=y.next())M=g(E,m,T,M.value,k),M!==null&&(e&&M.alternate!==null&&E.delete(M.key===null?T:M.key),p=i(M,p,T),C===null?S=M:C.sibling=M,C=M);return e&&E.forEach(function(z){return t(m,z)}),re&&mn(m,T),S}function x(m,p,y,k){if(typeof y=="object"&&y!==null&&y.type===Un&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Xo:e:{for(var S=y.key,C=p;C!==null;){if(C.key===S){if(S=y.type,S===Un){if(C.tag===7){n(m,C.sibling),p=o(C,y.props.children),p.return=m,m=p;break e}}else if(C.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Wt&&md(S)===C.type){n(m,C.sibling),p=o(C,y.props),p.ref=Dr(m,C,y),p.return=m,m=p;break e}n(m,C);break}else t(m,C);C=C.sibling}y.type===Un?(p=Sn(y.props.children,m.mode,k,y.key),p.return=m,m=p):(k=Li(y.type,y.key,y.props,null,m.mode,k),k.ref=Dr(m,p,y),k.return=m,m=k)}return s(m);case Wn:e:{for(C=y.key;p!==null;){if(p.key===C)if(p.tag===4&&p.stateNode.containerInfo===y.containerInfo&&p.stateNode.implementation===y.implementation){n(m,p.sibling),p=o(p,y.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else t(m,p);p=p.sibling}p=Ca(y,m.mode,k),p.return=m,m=p}return s(m);case Wt:return C=y._init,x(m,p,C(y._payload),k)}if(Yr(y))return b(m,p,y,k);if($r(y))return v(m,p,y,k);ci(m,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,p!==null&&p.tag===6?(n(m,p.sibling),p=o(p,y),p.return=m,m=p):(n(m,p),p=Sa(y,m.mode,k),p.return=m,m=p),s(m)):n(m,p)}return x}var hr=oh(!0),ih=oh(!1),Oo={},wt=dn(Oo),xo=dn(Oo),ko=dn(Oo);function wn(e){if(e===Oo)throw Error(A(174));return e}function jc(e,t){switch(Z(ko,t),Z(xo,e),Z(wt,Oo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Za(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Za(t,e)}ne(wt),Z(wt,t)}function mr(){ne(wt),ne(xo),ne(ko)}function sh(e){wn(ko.current);var t=wn(wt.current),n=Za(t,e.type);t!==n&&(Z(xo,e),Z(wt,n))}function Lc(e){xo.current===e&&(ne(wt),ne(xo))}var oe=dn(0);function ls(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var va=[];function Dc(){for(var e=0;e<va.length;e++)va[e]._workInProgressVersionPrimary=null;va.length=0}var Ni=It.ReactCurrentDispatcher,ya=It.ReactCurrentBatchConfig,Tn=0,ie=null,fe=null,me=null,cs=!1,ro=!1,So=0,sy=0;function be(){throw Error(A(321))}function Oc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ft(e[n],t[n]))return!1;return!0}function Bc(e,t,n,r,o,i){if(Tn=i,ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ni.current=e===null||e.memoizedState===null?uy:dy,e=n(r,o),ro){i=0;do{if(ro=!1,So=0,25<=i)throw Error(A(301));i+=1,me=fe=null,t.updateQueue=null,Ni.current=fy,e=n(r,o)}while(ro)}if(Ni.current=us,t=fe!==null&&fe.next!==null,Tn=0,me=fe=ie=null,cs=!1,t)throw Error(A(300));return e}function Fc(){var e=So!==0;return So=0,e}function ht(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return me===null?ie.memoizedState=me=e:me=me.next=e,me}function Xe(){if(fe===null){var e=ie.alternate;e=e!==null?e.memoizedState:null}else e=fe.next;var t=me===null?ie.memoizedState:me.next;if(t!==null)me=t,fe=e;else{if(e===null)throw Error(A(310));fe=e,e={memoizedState:fe.memoizedState,baseState:fe.baseState,baseQueue:fe.baseQueue,queue:fe.queue,next:null},me===null?ie.memoizedState=me=e:me=me.next=e}return me}function Co(e,t){return typeof t=="function"?t(e):t}function wa(e){var t=Xe(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var r=fe,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var s=o.next;o.next=i.next,i.next=s}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=s=null,l=null,c=i;do{var d=c.lane;if((Tn&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var u={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=u,s=r):l=l.next=u,ie.lanes|=d,Pn|=d}c=c.next}while(c!==null&&c!==i);l===null?s=r:l.next=a,ft(r,t.memoizedState)||(Me=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,ie.lanes|=i,Pn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ba(e){var t=Xe(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var s=o=o.next;do i=e(i,s.action),s=s.next;while(s!==o);ft(i,t.memoizedState)||(Me=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function ah(){}function lh(e,t){var n=ie,r=Xe(),o=t(),i=!ft(r.memoizedState,o);if(i&&(r.memoizedState=o,Me=!0),r=r.queue,Wc(dh.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||me!==null&&me.memoizedState.tag&1){if(n.flags|=2048,Eo(9,uh.bind(null,n,r,o,t),void 0,null),ge===null)throw Error(A(349));Tn&30||ch(n,t,o)}return o}function ch(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function uh(e,t,n,r){t.value=n,t.getSnapshot=r,fh(t)&&ph(e)}function dh(e,t,n){return n(function(){fh(t)&&ph(e)})}function fh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ft(e,n)}catch{return!0}}function ph(e){var t=Mt(e,1);t!==null&&ut(t,e,1,-1)}function gd(e){var t=ht();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Co,lastRenderedState:e},t.queue=e,e=e.dispatch=cy.bind(null,ie,e),[t.memoizedState,e]}function Eo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function hh(){return Xe().memoizedState}function $i(e,t,n,r){var o=ht();ie.flags|=e,o.memoizedState=Eo(1|t,n,void 0,r===void 0?null:r)}function Is(e,t,n,r){var o=Xe();r=r===void 0?null:r;var i=void 0;if(fe!==null){var s=fe.memoizedState;if(i=s.destroy,r!==null&&Oc(r,s.deps)){o.memoizedState=Eo(t,n,i,r);return}}ie.flags|=e,o.memoizedState=Eo(1|t,n,i,r)}function vd(e,t){return $i(8390656,8,e,t)}function Wc(e,t){return Is(2048,8,e,t)}function mh(e,t){return Is(4,2,e,t)}function gh(e,t){return Is(4,4,e,t)}function vh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function yh(e,t,n){return n=n!=null?n.concat([e]):null,Is(4,4,vh.bind(null,t,e),n)}function Uc(){}function wh(e,t){var n=Xe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Oc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function bh(e,t){var n=Xe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Oc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function xh(e,t,n){return Tn&21?(ft(n,t)||(n=Cp(),ie.lanes|=n,Pn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Me=!0),e.memoizedState=n)}function ay(e,t){var n=q;q=n!==0&&4>n?n:4,e(!0);var r=ya.transition;ya.transition={};try{e(!1),t()}finally{q=n,ya.transition=r}}function kh(){return Xe().memoizedState}function ly(e,t,n){var r=tn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Sh(e))Ch(t,n);else if(n=eh(e,t,n,r),n!==null){var o=Ee();ut(n,e,r,o),Eh(n,t,r)}}function cy(e,t,n){var r=tn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Sh(e))Ch(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,a=i(s,n);if(o.hasEagerState=!0,o.eagerState=a,ft(a,s)){var l=t.interleaved;l===null?(o.next=o,zc(t)):(o.next=l.next,l.next=o),t.interleaved=o;return}}catch{}finally{}n=eh(e,t,o,r),n!==null&&(o=Ee(),ut(n,e,r,o),Eh(n,t,r))}}function Sh(e){var t=e.alternate;return e===ie||t!==null&&t===ie}function Ch(e,t){ro=cs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Eh(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,bc(e,n)}}var us={readContext:Je,useCallback:be,useContext:be,useEffect:be,useImperativeHandle:be,useInsertionEffect:be,useLayoutEffect:be,useMemo:be,useReducer:be,useRef:be,useState:be,useDebugValue:be,useDeferredValue:be,useTransition:be,useMutableSource:be,useSyncExternalStore:be,useId:be,unstable_isNewReconciler:!1},uy={readContext:Je,useCallback:function(e,t){return ht().memoizedState=[e,t===void 0?null:t],e},useContext:Je,useEffect:vd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,$i(4194308,4,vh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return $i(4194308,4,e,t)},useInsertionEffect:function(e,t){return $i(4,2,e,t)},useMemo:function(e,t){var n=ht();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ht();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ly.bind(null,ie,e),[r.memoizedState,e]},useRef:function(e){var t=ht();return e={current:e},t.memoizedState=e},useState:gd,useDebugValue:Uc,useDeferredValue:function(e){return ht().memoizedState=e},useTransition:function(){var e=gd(!1),t=e[0];return e=ay.bind(null,e[1]),ht().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ie,o=ht();if(re){if(n===void 0)throw Error(A(407));n=n()}else{if(n=t(),ge===null)throw Error(A(349));Tn&30||ch(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,vd(dh.bind(null,r,i,e),[e]),r.flags|=2048,Eo(9,uh.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=ht(),t=ge.identifierPrefix;if(re){var n=Tt,r=Et;n=(r&~(1<<32-ct(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=So++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=sy++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},dy={readContext:Je,useCallback:wh,useContext:Je,useEffect:Wc,useImperativeHandle:yh,useInsertionEffect:mh,useLayoutEffect:gh,useMemo:bh,useReducer:wa,useRef:hh,useState:function(){return wa(Co)},useDebugValue:Uc,useDeferredValue:function(e){var t=Xe();return xh(t,fe.memoizedState,e)},useTransition:function(){var e=wa(Co)[0],t=Xe().memoizedState;return[e,t]},useMutableSource:ah,useSyncExternalStore:lh,useId:kh,unstable_isNewReconciler:!1},fy={readContext:Je,useCallback:wh,useContext:Je,useEffect:Wc,useImperativeHandle:yh,useInsertionEffect:mh,useLayoutEffect:gh,useMemo:bh,useReducer:ba,useRef:hh,useState:function(){return ba(Co)},useDebugValue:Uc,useDeferredValue:function(e){var t=Xe();return fe===null?t.memoizedState=e:xh(t,fe.memoizedState,e)},useTransition:function(){var e=ba(Co)[0],t=Xe().memoizedState;return[e,t]},useMutableSource:ah,useSyncExternalStore:lh,useId:kh,unstable_isNewReconciler:!1};function gr(e,t){try{var n="",r=t;do n+=Bv(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function xa(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function kl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var py=typeof WeakMap=="function"?WeakMap:Map;function Th(e,t,n){n=Pt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){fs||(fs=!0,Nl=r),kl(e,t)},n}function Ph(e,t,n){n=Pt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){kl(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){kl(e,t),typeof r!="function"&&(en===null?en=new Set([this]):en.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function yd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new py;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Py.bind(null,e,t,n),t.then(e,e))}function wd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function bd(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Pt(-1,1),t.tag=2,Zt(n,t,1))),n.lanes|=1),e)}var hy=It.ReactCurrentOwner,Me=!1;function Ce(e,t,n,r){t.child=e===null?ih(t,null,n,r):hr(t,e.child,n,r)}function xd(e,t,n,r,o){n=n.render;var i=t.ref;return or(t,o),r=Bc(e,t,n,r,i,o),n=Fc(),e!==null&&!Me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Rt(e,t,o)):(re&&n&&Ac(t),t.flags|=1,Ce(e,t,r,o),t.child)}function kd(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Jc(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Ah(e,t,i,r,o)):(e=Li(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:vo,n(s,r)&&e.ref===t.ref)return Rt(e,t,o)}return t.flags|=1,e=nn(i,r),e.ref=t.ref,e.return=t,t.child=e}function Ah(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(vo(i,r)&&e.ref===t.ref)if(Me=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Me=!0);else return t.lanes=e.lanes,Rt(e,t,o)}return Sl(e,t,n,r,o)}function _h(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Z(Zn,Le),Le|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Z(Zn,Le),Le|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Z(Zn,Le),Le|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,Z(Zn,Le),Le|=r;return Ce(e,t,o,n),t.child}function Mh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Sl(e,t,n,r,o){var i=Ne(n)?Cn:Se.current;return i=fr(t,i),or(t,o),n=Bc(e,t,n,r,i,o),r=Fc(),e!==null&&!Me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Rt(e,t,o)):(re&&r&&Ac(t),t.flags|=1,Ce(e,t,n,o),t.child)}function Sd(e,t,n,r,o){if(Ne(n)){var i=!0;ns(t)}else i=!1;if(or(t,o),t.stateNode===null)zi(e,t),rh(t,n,r),xl(t,n,r,o),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=Je(c):(c=Ne(n)?Cn:Se.current,c=fr(t,c));var d=n.getDerivedStateFromProps,u=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";u||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==c)&&hd(t,s,r,c),Ut=!1;var h=t.memoizedState;s.state=h,as(t,r,s,o),l=t.memoizedState,a!==r||h!==l||Re.current||Ut?(typeof d=="function"&&(bl(t,n,d,r),l=t.memoizedState),(a=Ut||pd(t,n,a,r,h,l,c))?(u||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=c,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,th(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:it(t.type,a),s.props=c,u=t.pendingProps,h=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Je(l):(l=Ne(n)?Cn:Se.current,l=fr(t,l));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==u||h!==l)&&hd(t,s,r,l),Ut=!1,h=t.memoizedState,s.state=h,as(t,r,s,o);var b=t.memoizedState;a!==u||h!==b||Re.current||Ut?(typeof g=="function"&&(bl(t,n,g,r),b=t.memoizedState),(c=Ut||pd(t,n,c,r,h,b,l)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,b,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,b,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=b),s.props=r,s.state=b,s.context=l,r=c):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Cl(e,t,n,r,i,o)}function Cl(e,t,n,r,o,i){Mh(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return o&&ld(t,n,!1),Rt(e,t,i);r=t.stateNode,hy.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=hr(t,e.child,null,i),t.child=hr(t,null,a,i)):Ce(e,t,a,i),t.memoizedState=r.state,o&&ld(t,n,!0),t.child}function Rh(e){var t=e.stateNode;t.pendingContext?ad(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ad(e,t.context,!1),jc(e,t.containerInfo)}function Cd(e,t,n,r,o){return pr(),Mc(o),t.flags|=256,Ce(e,t,n,r),t.child}var El={dehydrated:null,treeContext:null,retryLane:0};function Tl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Nh(e,t,n){var r=t.pendingProps,o=oe.current,i=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Z(oe,o&1),e===null)return yl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,i?(r=t.mode,i=t.child,s={mode:"hidden",children:s},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=Ds(s,r,0,null),e=Sn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Tl(n),t.memoizedState=El,e):Vc(t,s));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return my(e,t,s,r,a,o,n);if(i){i=r.fallback,s=t.mode,o=e.child,a=o.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=nn(o,l),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=nn(a,i):(i=Sn(i,s,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,s=e.child.memoizedState,s=s===null?Tl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~n,t.memoizedState=El,r}return i=e.child,e=i.sibling,r=nn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Vc(e,t){return t=Ds({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ui(e,t,n,r){return r!==null&&Mc(r),hr(t,e.child,null,n),e=Vc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function my(e,t,n,r,o,i,s){if(n)return t.flags&256?(t.flags&=-257,r=xa(Error(A(422))),ui(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Ds({mode:"visible",children:r.children},o,0,null),i=Sn(i,o,s,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&hr(t,e.child,null,s),t.child.memoizedState=Tl(s),t.memoizedState=El,i);if(!(t.mode&1))return ui(e,t,s,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(A(419)),r=xa(i,r,void 0),ui(e,t,s,r)}if(a=(s&e.childLanes)!==0,Me||a){if(r=ge,r!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|s)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Mt(e,o),ut(r,e,o,-1))}return qc(),r=xa(Error(A(421))),ui(e,t,s,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Ay.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Oe=Xt(o.nextSibling),Be=t,re=!0,at=null,e!==null&&(Qe[Ke++]=Et,Qe[Ke++]=Tt,Qe[Ke++]=En,Et=e.id,Tt=e.overflow,En=t),t=Vc(t,r.children),t.flags|=4096,t)}function Ed(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),wl(e.return,t,n)}function ka(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function $h(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Ce(e,t,r.children,n),r=oe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ed(e,n,t);else if(e.tag===19)Ed(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Z(oe,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&ls(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),ka(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ls(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}ka(t,!0,n,null,i);break;case"together":ka(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function zi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Rt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Pn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(A(153));if(t.child!==null){for(e=t.child,n=nn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=nn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function gy(e,t,n){switch(t.tag){case 3:Rh(t),pr();break;case 5:sh(t);break;case 1:Ne(t.type)&&ns(t);break;case 4:jc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;Z(is,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Z(oe,oe.current&1),t.flags|=128,null):n&t.child.childLanes?Nh(e,t,n):(Z(oe,oe.current&1),e=Rt(e,t,n),e!==null?e.sibling:null);Z(oe,oe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return $h(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Z(oe,oe.current),r)break;return null;case 22:case 23:return t.lanes=0,_h(e,t,n)}return Rt(e,t,n)}var zh,Pl,Ih,jh;zh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Pl=function(){};Ih=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,wn(wt.current);var i=null;switch(n){case"input":o=Ya(e,o),r=Ya(e,r),i=[];break;case"select":o=se({},o,{value:void 0}),r=se({},r,{value:void 0}),i=[];break;case"textarea":o=Xa(e,o),r=Xa(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=es)}el(n,r);var s;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var a=o[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(co.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var l=r[c];if(a=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(i||(i=[]),i.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(i=i||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(co.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&te("scroll",e),i||a===l||(i=[])):(i=i||[]).push(c,l))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};jh=function(e,t,n,r){n!==r&&(t.flags|=4)};function Or(e,t){if(!re)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function xe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function vy(e,t,n){var r=t.pendingProps;switch(_c(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xe(t),null;case 1:return Ne(t.type)&&ts(),xe(t),null;case 3:return r=t.stateNode,mr(),ne(Re),ne(Se),Dc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(li(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,at!==null&&(Il(at),at=null))),Pl(e,t),xe(t),null;case 5:Lc(t);var o=wn(ko.current);if(n=t.type,e!==null&&t.stateNode!=null)Ih(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(A(166));return xe(t),null}if(e=wn(wt.current),li(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[gt]=t,r[bo]=i,e=(t.mode&1)!==0,n){case"dialog":te("cancel",r),te("close",r);break;case"iframe":case"object":case"embed":te("load",r);break;case"video":case"audio":for(o=0;o<Jr.length;o++)te(Jr[o],r);break;case"source":te("error",r);break;case"img":case"image":case"link":te("error",r),te("load",r);break;case"details":te("toggle",r);break;case"input":zu(r,i),te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},te("invalid",r);break;case"textarea":ju(r,i),te("invalid",r)}el(n,i),o=null;for(var s in i)if(i.hasOwnProperty(s)){var a=i[s];s==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&ai(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&ai(r.textContent,a,e),o=["children",""+a]):co.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&te("scroll",r)}switch(n){case"input":Zo(r),Iu(r,i,!0);break;case"textarea":Zo(r),Lu(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=es)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=cp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[gt]=t,e[bo]=r,zh(e,t,!1,!1),t.stateNode=e;e:{switch(s=tl(n,r),n){case"dialog":te("cancel",e),te("close",e),o=r;break;case"iframe":case"object":case"embed":te("load",e),o=r;break;case"video":case"audio":for(o=0;o<Jr.length;o++)te(Jr[o],e);o=r;break;case"source":te("error",e),o=r;break;case"img":case"image":case"link":te("error",e),te("load",e),o=r;break;case"details":te("toggle",e),o=r;break;case"input":zu(e,r),o=Ya(e,r),te("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=se({},r,{value:void 0}),te("invalid",e);break;case"textarea":ju(e,r),o=Xa(e,r),te("invalid",e);break;default:o=r}el(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var l=a[i];i==="style"?fp(e,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&up(e,l)):i==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&uo(e,l):typeof l=="number"&&uo(e,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(co.hasOwnProperty(i)?l!=null&&i==="onScroll"&&te("scroll",e):l!=null&&hc(e,i,l,s))}switch(n){case"input":Zo(e),Iu(e,r,!1);break;case"textarea":Zo(e),Lu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+on(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?er(e,!!r.multiple,i,!1):r.defaultValue!=null&&er(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=es)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return xe(t),null;case 6:if(e&&t.stateNode!=null)jh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(A(166));if(n=wn(ko.current),wn(wt.current),li(t)){if(r=t.stateNode,n=t.memoizedProps,r[gt]=t,(i=r.nodeValue!==n)&&(e=Be,e!==null))switch(e.tag){case 3:ai(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ai(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[gt]=t,t.stateNode=r}return xe(t),null;case 13:if(ne(oe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(re&&Oe!==null&&t.mode&1&&!(t.flags&128))Zp(),pr(),t.flags|=98560,i=!1;else if(i=li(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(A(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(A(317));i[gt]=t}else pr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;xe(t),i=!1}else at!==null&&(Il(at),at=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||oe.current&1?pe===0&&(pe=3):qc())),t.updateQueue!==null&&(t.flags|=4),xe(t),null);case 4:return mr(),Pl(e,t),e===null&&yo(t.stateNode.containerInfo),xe(t),null;case 10:return $c(t.type._context),xe(t),null;case 17:return Ne(t.type)&&ts(),xe(t),null;case 19:if(ne(oe),i=t.memoizedState,i===null)return xe(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)Or(i,!1);else{if(pe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=ls(e),s!==null){for(t.flags|=128,Or(i,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Z(oe,oe.current&1|2),t.child}e=e.sibling}i.tail!==null&&ce()>vr&&(t.flags|=128,r=!0,Or(i,!1),t.lanes=4194304)}else{if(!r)if(e=ls(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Or(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!re)return xe(t),null}else 2*ce()-i.renderingStartTime>vr&&n!==1073741824&&(t.flags|=128,r=!0,Or(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(n=i.last,n!==null?n.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ce(),t.sibling=null,n=oe.current,Z(oe,r?n&1|2:n&1),t):(xe(t),null);case 22:case 23:return Yc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Le&1073741824&&(xe(t),t.subtreeFlags&6&&(t.flags|=8192)):xe(t),null;case 24:return null;case 25:return null}throw Error(A(156,t.tag))}function yy(e,t){switch(_c(t),t.tag){case 1:return Ne(t.type)&&ts(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return mr(),ne(Re),ne(Se),Dc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Lc(t),null;case 13:if(ne(oe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(A(340));pr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ne(oe),null;case 4:return mr(),null;case 10:return $c(t.type._context),null;case 22:case 23:return Yc(),null;case 24:return null;default:return null}}var di=!1,ke=!1,wy=typeof WeakSet=="function"?WeakSet:Set,R=null;function Xn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ae(e,t,r)}else n.current=null}function Al(e,t,n){try{n()}catch(r){ae(e,t,r)}}var Td=!1;function by(e,t){if(dl=Ji,e=Bp(),Pc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,c=0,d=0,u=e,h=null;t:for(;;){for(var g;u!==n||o!==0&&u.nodeType!==3||(a=s+o),u!==i||r!==0&&u.nodeType!==3||(l=s+r),u.nodeType===3&&(s+=u.nodeValue.length),(g=u.firstChild)!==null;)h=u,u=g;for(;;){if(u===e)break t;if(h===n&&++c===o&&(a=s),h===i&&++d===r&&(l=s),(g=u.nextSibling)!==null)break;u=h,h=u.parentNode}u=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(fl={focusedElem:e,selectionRange:n},Ji=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var b=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var v=b.memoizedProps,x=b.memoizedState,m=t.stateNode,p=m.getSnapshotBeforeUpdate(t.elementType===t.type?v:it(t.type,v),x);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(k){ae(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return b=Td,Td=!1,b}function oo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Al(t,n,i)}o=o.next}while(o!==r)}}function js(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function _l(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Lh(e){var t=e.alternate;t!==null&&(e.alternate=null,Lh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[gt],delete t[bo],delete t[ml],delete t[ny],delete t[ry])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Dh(e){return e.tag===5||e.tag===3||e.tag===4}function Pd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Dh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ml(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=es));else if(r!==4&&(e=e.child,e!==null))for(Ml(e,t,n),e=e.sibling;e!==null;)Ml(e,t,n),e=e.sibling}function Rl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Rl(e,t,n),e=e.sibling;e!==null;)Rl(e,t,n),e=e.sibling}var ve=null,st=!1;function Lt(e,t,n){for(n=n.child;n!==null;)Oh(e,t,n),n=n.sibling}function Oh(e,t,n){if(yt&&typeof yt.onCommitFiberUnmount=="function")try{yt.onCommitFiberUnmount(As,n)}catch{}switch(n.tag){case 5:ke||Xn(n,t);case 6:var r=ve,o=st;ve=null,Lt(e,t,n),ve=r,st=o,ve!==null&&(st?(e=ve,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ve.removeChild(n.stateNode));break;case 18:ve!==null&&(st?(e=ve,n=n.stateNode,e.nodeType===8?ma(e.parentNode,n):e.nodeType===1&&ma(e,n),mo(e)):ma(ve,n.stateNode));break;case 4:r=ve,o=st,ve=n.stateNode.containerInfo,st=!0,Lt(e,t,n),ve=r,st=o;break;case 0:case 11:case 14:case 15:if(!ke&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&Al(n,t,s),o=o.next}while(o!==r)}Lt(e,t,n);break;case 1:if(!ke&&(Xn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ae(n,t,a)}Lt(e,t,n);break;case 21:Lt(e,t,n);break;case 22:n.mode&1?(ke=(r=ke)||n.memoizedState!==null,Lt(e,t,n),ke=r):Lt(e,t,n);break;default:Lt(e,t,n)}}function Ad(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new wy),t.forEach(function(r){var o=_y.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function rt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:ve=a.stateNode,st=!1;break e;case 3:ve=a.stateNode.containerInfo,st=!0;break e;case 4:ve=a.stateNode.containerInfo,st=!0;break e}a=a.return}if(ve===null)throw Error(A(160));Oh(i,s,o),ve=null,st=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(c){ae(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Bh(t,e),t=t.sibling}function Bh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(rt(t,e),pt(e),r&4){try{oo(3,e,e.return),js(3,e)}catch(v){ae(e,e.return,v)}try{oo(5,e,e.return)}catch(v){ae(e,e.return,v)}}break;case 1:rt(t,e),pt(e),r&512&&n!==null&&Xn(n,n.return);break;case 5:if(rt(t,e),pt(e),r&512&&n!==null&&Xn(n,n.return),e.flags&32){var o=e.stateNode;try{uo(o,"")}catch(v){ae(e,e.return,v)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,s=n!==null?n.memoizedProps:i,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&ap(o,i),tl(a,s);var c=tl(a,i);for(s=0;s<l.length;s+=2){var d=l[s],u=l[s+1];d==="style"?fp(o,u):d==="dangerouslySetInnerHTML"?up(o,u):d==="children"?uo(o,u):hc(o,d,u,c)}switch(a){case"input":qa(o,i);break;case"textarea":lp(o,i);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var g=i.value;g!=null?er(o,!!i.multiple,g,!1):h!==!!i.multiple&&(i.defaultValue!=null?er(o,!!i.multiple,i.defaultValue,!0):er(o,!!i.multiple,i.multiple?[]:"",!1))}o[bo]=i}catch(v){ae(e,e.return,v)}}break;case 6:if(rt(t,e),pt(e),r&4){if(e.stateNode===null)throw Error(A(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(v){ae(e,e.return,v)}}break;case 3:if(rt(t,e),pt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{mo(t.containerInfo)}catch(v){ae(e,e.return,v)}break;case 4:rt(t,e),pt(e);break;case 13:rt(t,e),pt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Qc=ce())),r&4&&Ad(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(ke=(c=ke)||d,rt(t,e),ke=c):rt(t,e),pt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(R=e,d=e.child;d!==null;){for(u=R=d;R!==null;){switch(h=R,g=h.child,h.tag){case 0:case 11:case 14:case 15:oo(4,h,h.return);break;case 1:Xn(h,h.return);var b=h.stateNode;if(typeof b.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(v){ae(r,n,v)}}break;case 5:Xn(h,h.return);break;case 22:if(h.memoizedState!==null){Md(u);continue}}g!==null?(g.return=h,R=g):Md(u)}d=d.sibling}e:for(d=null,u=e;;){if(u.tag===5){if(d===null){d=u;try{o=u.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=u.stateNode,l=u.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=dp("display",s))}catch(v){ae(e,e.return,v)}}}else if(u.tag===6){if(d===null)try{u.stateNode.nodeValue=c?"":u.memoizedProps}catch(v){ae(e,e.return,v)}}else if((u.tag!==22&&u.tag!==23||u.memoizedState===null||u===e)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===e)break e;for(;u.sibling===null;){if(u.return===null||u.return===e)break e;d===u&&(d=null),u=u.return}d===u&&(d=null),u.sibling.return=u.return,u=u.sibling}}break;case 19:rt(t,e),pt(e),r&4&&Ad(e);break;case 21:break;default:rt(t,e),pt(e)}}function pt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Dh(n)){var r=n;break e}n=n.return}throw Error(A(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(uo(o,""),r.flags&=-33);var i=Pd(e);Rl(e,i,o);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Pd(e);Ml(e,a,s);break;default:throw Error(A(161))}}catch(l){ae(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xy(e,t,n){R=e,Fh(e)}function Fh(e,t,n){for(var r=(e.mode&1)!==0;R!==null;){var o=R,i=o.child;if(o.tag===22&&r){var s=o.memoizedState!==null||di;if(!s){var a=o.alternate,l=a!==null&&a.memoizedState!==null||ke;a=di;var c=ke;if(di=s,(ke=l)&&!c)for(R=o;R!==null;)s=R,l=s.child,s.tag===22&&s.memoizedState!==null?Rd(o):l!==null?(l.return=s,R=l):Rd(o);for(;i!==null;)R=i,Fh(i),i=i.sibling;R=o,di=a,ke=c}_d(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,R=i):_d(e)}}function _d(e){for(;R!==null;){var t=R;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ke||js(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ke)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:it(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&fd(t,i,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}fd(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var u=d.dehydrated;u!==null&&mo(u)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}ke||t.flags&512&&_l(t)}catch(h){ae(t,t.return,h)}}if(t===e){R=null;break}if(n=t.sibling,n!==null){n.return=t.return,R=n;break}R=t.return}}function Md(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var n=t.sibling;if(n!==null){n.return=t.return,R=n;break}R=t.return}}function Rd(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{js(4,t)}catch(l){ae(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(l){ae(t,o,l)}}var i=t.return;try{_l(t)}catch(l){ae(t,i,l)}break;case 5:var s=t.return;try{_l(t)}catch(l){ae(t,s,l)}}}catch(l){ae(t,t.return,l)}if(t===e){R=null;break}var a=t.sibling;if(a!==null){a.return=t.return,R=a;break}R=t.return}}var ky=Math.ceil,ds=It.ReactCurrentDispatcher,Hc=It.ReactCurrentOwner,qe=It.ReactCurrentBatchConfig,K=0,ge=null,ue=null,ye=0,Le=0,Zn=dn(0),pe=0,To=null,Pn=0,Ls=0,Gc=0,io=null,_e=null,Qc=0,vr=1/0,St=null,fs=!1,Nl=null,en=null,fi=!1,Qt=null,ps=0,so=0,$l=null,Ii=-1,ji=0;function Ee(){return K&6?ce():Ii!==-1?Ii:Ii=ce()}function tn(e){return e.mode&1?K&2&&ye!==0?ye&-ye:iy.transition!==null?(ji===0&&(ji=Cp()),ji):(e=q,e!==0||(e=window.event,e=e===void 0?16:Rp(e.type)),e):1}function ut(e,t,n,r){if(50<so)throw so=0,$l=null,Error(A(185));jo(e,n,r),(!(K&2)||e!==ge)&&(e===ge&&(!(K&2)&&(Ls|=n),pe===4&&Ht(e,ye)),$e(e,r),n===1&&K===0&&!(t.mode&1)&&(vr=ce()+500,$s&&fn()))}function $e(e,t){var n=e.callbackNode;i0(e,t);var r=qi(e,e===ge?ye:0);if(r===0)n!==null&&Bu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Bu(n),t===1)e.tag===0?oy(Nd.bind(null,e)):qp(Nd.bind(null,e)),ey(function(){!(K&6)&&fn()}),n=null;else{switch(Ep(r)){case 1:n=wc;break;case 4:n=kp;break;case 16:n=Yi;break;case 536870912:n=Sp;break;default:n=Yi}n=Yh(n,Wh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Wh(e,t){if(Ii=-1,ji=0,K&6)throw Error(A(327));var n=e.callbackNode;if(ir()&&e.callbackNode!==n)return null;var r=qi(e,e===ge?ye:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=hs(e,r);else{t=r;var o=K;K|=2;var i=Vh();(ge!==e||ye!==t)&&(St=null,vr=ce()+500,kn(e,t));do try{Ey();break}catch(a){Uh(e,a)}while(!0);Nc(),ds.current=i,K=o,ue!==null?t=0:(ge=null,ye=0,t=pe)}if(t!==0){if(t===2&&(o=sl(e),o!==0&&(r=o,t=zl(e,o))),t===1)throw n=To,kn(e,0),Ht(e,r),$e(e,ce()),n;if(t===6)Ht(e,r);else{if(o=e.current.alternate,!(r&30)&&!Sy(o)&&(t=hs(e,r),t===2&&(i=sl(e),i!==0&&(r=i,t=zl(e,i))),t===1))throw n=To,kn(e,0),Ht(e,r),$e(e,ce()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(A(345));case 2:gn(e,_e,St);break;case 3:if(Ht(e,r),(r&130023424)===r&&(t=Qc+500-ce(),10<t)){if(qi(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ee(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=hl(gn.bind(null,e,_e,St),t);break}gn(e,_e,St);break;case 4:if(Ht(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var s=31-ct(r);i=1<<s,s=t[s],s>o&&(o=s),r&=~i}if(r=o,r=ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ky(r/1960))-r,10<r){e.timeoutHandle=hl(gn.bind(null,e,_e,St),r);break}gn(e,_e,St);break;case 5:gn(e,_e,St);break;default:throw Error(A(329))}}}return $e(e,ce()),e.callbackNode===n?Wh.bind(null,e):null}function zl(e,t){var n=io;return e.current.memoizedState.isDehydrated&&(kn(e,t).flags|=256),e=hs(e,t),e!==2&&(t=_e,_e=n,t!==null&&Il(t)),e}function Il(e){_e===null?_e=e:_e.push.apply(_e,e)}function Sy(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!ft(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ht(e,t){for(t&=~Gc,t&=~Ls,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ct(t),r=1<<n;e[n]=-1,t&=~r}}function Nd(e){if(K&6)throw Error(A(327));ir();var t=qi(e,0);if(!(t&1))return $e(e,ce()),null;var n=hs(e,t);if(e.tag!==0&&n===2){var r=sl(e);r!==0&&(t=r,n=zl(e,r))}if(n===1)throw n=To,kn(e,0),Ht(e,t),$e(e,ce()),n;if(n===6)throw Error(A(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,gn(e,_e,St),$e(e,ce()),null}function Kc(e,t){var n=K;K|=1;try{return e(t)}finally{K=n,K===0&&(vr=ce()+500,$s&&fn())}}function An(e){Qt!==null&&Qt.tag===0&&!(K&6)&&ir();var t=K;K|=1;var n=qe.transition,r=q;try{if(qe.transition=null,q=1,e)return e()}finally{q=r,qe.transition=n,K=t,!(K&6)&&fn()}}function Yc(){Le=Zn.current,ne(Zn)}function kn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Z0(n)),ue!==null)for(n=ue.return;n!==null;){var r=n;switch(_c(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ts();break;case 3:mr(),ne(Re),ne(Se),Dc();break;case 5:Lc(r);break;case 4:mr();break;case 13:ne(oe);break;case 19:ne(oe);break;case 10:$c(r.type._context);break;case 22:case 23:Yc()}n=n.return}if(ge=e,ue=e=nn(e.current,null),ye=Le=t,pe=0,To=null,Gc=Ls=Pn=0,_e=io=null,yn!==null){for(t=0;t<yn.length;t++)if(n=yn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var s=i.next;i.next=o,r.next=s}n.pending=r}yn=null}return e}function Uh(e,t){do{var n=ue;try{if(Nc(),Ni.current=us,cs){for(var r=ie.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}cs=!1}if(Tn=0,me=fe=ie=null,ro=!1,So=0,Hc.current=null,n===null||n.return===null){pe=1,To=t,ue=null;break}e:{var i=e,s=n.return,a=n,l=t;if(t=ye,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,u=d.tag;if(!(d.mode&1)&&(u===0||u===11||u===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=wd(s);if(g!==null){g.flags&=-257,bd(g,s,a,i,t),g.mode&1&&yd(i,c,t),t=g,l=c;var b=t.updateQueue;if(b===null){var v=new Set;v.add(l),t.updateQueue=v}else b.add(l);break e}else{if(!(t&1)){yd(i,c,t),qc();break e}l=Error(A(426))}}else if(re&&a.mode&1){var x=wd(s);if(x!==null){!(x.flags&65536)&&(x.flags|=256),bd(x,s,a,i,t),Mc(gr(l,a));break e}}i=l=gr(l,a),pe!==4&&(pe=2),io===null?io=[i]:io.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var m=Th(i,l,t);dd(i,m);break e;case 1:a=l;var p=i.type,y=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(en===null||!en.has(y)))){i.flags|=65536,t&=-t,i.lanes|=t;var k=Ph(i,a,t);dd(i,k);break e}}i=i.return}while(i!==null)}Gh(n)}catch(S){t=S,ue===n&&n!==null&&(ue=n=n.return);continue}break}while(!0)}function Vh(){var e=ds.current;return ds.current=us,e===null?us:e}function qc(){(pe===0||pe===3||pe===2)&&(pe=4),ge===null||!(Pn&268435455)&&!(Ls&268435455)||Ht(ge,ye)}function hs(e,t){var n=K;K|=2;var r=Vh();(ge!==e||ye!==t)&&(St=null,kn(e,t));do try{Cy();break}catch(o){Uh(e,o)}while(!0);if(Nc(),K=n,ds.current=r,ue!==null)throw Error(A(261));return ge=null,ye=0,pe}function Cy(){for(;ue!==null;)Hh(ue)}function Ey(){for(;ue!==null&&!qv();)Hh(ue)}function Hh(e){var t=Kh(e.alternate,e,Le);e.memoizedProps=e.pendingProps,t===null?Gh(e):ue=t,Hc.current=null}function Gh(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=yy(n,t),n!==null){n.flags&=32767,ue=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{pe=6,ue=null;return}}else if(n=vy(n,t,Le),n!==null){ue=n;return}if(t=t.sibling,t!==null){ue=t;return}ue=t=e}while(t!==null);pe===0&&(pe=5)}function gn(e,t,n){var r=q,o=qe.transition;try{qe.transition=null,q=1,Ty(e,t,n,r)}finally{qe.transition=o,q=r}return null}function Ty(e,t,n,r){do ir();while(Qt!==null);if(K&6)throw Error(A(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(A(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(s0(e,i),e===ge&&(ue=ge=null,ye=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||fi||(fi=!0,Yh(Yi,function(){return ir(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=qe.transition,qe.transition=null;var s=q;q=1;var a=K;K|=4,Hc.current=null,by(e,n),Bh(n,e),G0(fl),Ji=!!dl,fl=dl=null,e.current=n,xy(n),Jv(),K=a,q=s,qe.transition=i}else e.current=n;if(fi&&(fi=!1,Qt=e,ps=o),i=e.pendingLanes,i===0&&(en=null),e0(n.stateNode),$e(e,ce()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(fs)throw fs=!1,e=Nl,Nl=null,e;return ps&1&&e.tag!==0&&ir(),i=e.pendingLanes,i&1?e===$l?so++:(so=0,$l=e):so=0,fn(),null}function ir(){if(Qt!==null){var e=Ep(ps),t=qe.transition,n=q;try{if(qe.transition=null,q=16>e?16:e,Qt===null)var r=!1;else{if(e=Qt,Qt=null,ps=0,K&6)throw Error(A(331));var o=K;for(K|=4,R=e.current;R!==null;){var i=R,s=i.child;if(R.flags&16){var a=i.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(R=c;R!==null;){var d=R;switch(d.tag){case 0:case 11:case 15:oo(8,d,i)}var u=d.child;if(u!==null)u.return=d,R=u;else for(;R!==null;){d=R;var h=d.sibling,g=d.return;if(Lh(d),d===c){R=null;break}if(h!==null){h.return=g,R=h;break}R=g}}}var b=i.alternate;if(b!==null){var v=b.child;if(v!==null){b.child=null;do{var x=v.sibling;v.sibling=null,v=x}while(v!==null)}}R=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,R=s;else e:for(;R!==null;){if(i=R,i.flags&2048)switch(i.tag){case 0:case 11:case 15:oo(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,R=m;break e}R=i.return}}var p=e.current;for(R=p;R!==null;){s=R;var y=s.child;if(s.subtreeFlags&2064&&y!==null)y.return=s,R=y;else e:for(s=p;R!==null;){if(a=R,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:js(9,a)}}catch(S){ae(a,a.return,S)}if(a===s){R=null;break e}var k=a.sibling;if(k!==null){k.return=a.return,R=k;break e}R=a.return}}if(K=o,fn(),yt&&typeof yt.onPostCommitFiberRoot=="function")try{yt.onPostCommitFiberRoot(As,e)}catch{}r=!0}return r}finally{q=n,qe.transition=t}}return!1}function $d(e,t,n){t=gr(n,t),t=Th(e,t,1),e=Zt(e,t,1),t=Ee(),e!==null&&(jo(e,1,t),$e(e,t))}function ae(e,t,n){if(e.tag===3)$d(e,e,n);else for(;t!==null;){if(t.tag===3){$d(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(en===null||!en.has(r))){e=gr(n,e),e=Ph(t,e,1),t=Zt(t,e,1),e=Ee(),t!==null&&(jo(t,1,e),$e(t,e));break}}t=t.return}}function Py(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ee(),e.pingedLanes|=e.suspendedLanes&n,ge===e&&(ye&n)===n&&(pe===4||pe===3&&(ye&130023424)===ye&&500>ce()-Qc?kn(e,0):Gc|=n),$e(e,t)}function Qh(e,t){t===0&&(e.mode&1?(t=ni,ni<<=1,!(ni&130023424)&&(ni=4194304)):t=1);var n=Ee();e=Mt(e,t),e!==null&&(jo(e,t,n),$e(e,n))}function Ay(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Qh(e,n)}function _y(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(A(314))}r!==null&&r.delete(t),Qh(e,n)}var Kh;Kh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Re.current)Me=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Me=!1,gy(e,t,n);Me=!!(e.flags&131072)}else Me=!1,re&&t.flags&1048576&&Jp(t,os,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;zi(e,t),e=t.pendingProps;var o=fr(t,Se.current);or(t,n),o=Bc(null,t,r,e,o,n);var i=Fc();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ne(r)?(i=!0,ns(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ic(t),o.updater=zs,t.stateNode=o,o._reactInternals=t,xl(t,r,e,n),t=Cl(null,t,r,!0,i,n)):(t.tag=0,re&&i&&Ac(t),Ce(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(zi(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Ry(r),e=it(r,e),o){case 0:t=Sl(null,t,r,e,n);break e;case 1:t=Sd(null,t,r,e,n);break e;case 11:t=xd(null,t,r,e,n);break e;case 14:t=kd(null,t,r,it(r.type,e),n);break e}throw Error(A(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:it(r,o),Sl(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:it(r,o),Sd(e,t,r,o,n);case 3:e:{if(Rh(t),e===null)throw Error(A(387));r=t.pendingProps,i=t.memoizedState,o=i.element,th(e,t),as(t,r,null,n);var s=t.memoizedState;if(r=s.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=gr(Error(A(423)),t),t=Cd(e,t,r,n,o);break e}else if(r!==o){o=gr(Error(A(424)),t),t=Cd(e,t,r,n,o);break e}else for(Oe=Xt(t.stateNode.containerInfo.firstChild),Be=t,re=!0,at=null,n=ih(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(pr(),r===o){t=Rt(e,t,n);break e}Ce(e,t,r,n)}t=t.child}return t;case 5:return sh(t),e===null&&yl(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,s=o.children,pl(r,o)?s=null:i!==null&&pl(r,i)&&(t.flags|=32),Mh(e,t),Ce(e,t,s,n),t.child;case 6:return e===null&&yl(t),null;case 13:return Nh(e,t,n);case 4:return jc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=hr(t,null,r,n):Ce(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:it(r,o),xd(e,t,r,o,n);case 7:return Ce(e,t,t.pendingProps,n),t.child;case 8:return Ce(e,t,t.pendingProps.children,n),t.child;case 12:return Ce(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,s=o.value,Z(is,r._currentValue),r._currentValue=s,i!==null)if(ft(i.value,s)){if(i.children===o.children&&!Re.current){t=Rt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){s=i.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(i.tag===1){l=Pt(-1,n&-n),l.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),wl(i.return,n,t),a.lanes|=n;break}l=l.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(A(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),wl(s,n,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}Ce(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,or(t,n),o=Je(o),r=r(o),t.flags|=1,Ce(e,t,r,n),t.child;case 14:return r=t.type,o=it(r,t.pendingProps),o=it(r.type,o),kd(e,t,r,o,n);case 15:return Ah(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:it(r,o),zi(e,t),t.tag=1,Ne(r)?(e=!0,ns(t)):e=!1,or(t,n),rh(t,r,o),xl(t,r,o,n),Cl(null,t,r,!0,e,n);case 19:return $h(e,t,n);case 22:return _h(e,t,n)}throw Error(A(156,t.tag))};function Yh(e,t){return xp(e,t)}function My(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ye(e,t,n,r){return new My(e,t,n,r)}function Jc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ry(e){if(typeof e=="function")return Jc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===gc)return 11;if(e===vc)return 14}return 2}function nn(e,t){var n=e.alternate;return n===null?(n=Ye(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Li(e,t,n,r,o,i){var s=2;if(r=e,typeof e=="function")Jc(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Un:return Sn(n.children,o,i,t);case mc:s=8,o|=8;break;case Ha:return e=Ye(12,n,t,o|2),e.elementType=Ha,e.lanes=i,e;case Ga:return e=Ye(13,n,t,o),e.elementType=Ga,e.lanes=i,e;case Qa:return e=Ye(19,n,t,o),e.elementType=Qa,e.lanes=i,e;case op:return Ds(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case np:s=10;break e;case rp:s=9;break e;case gc:s=11;break e;case vc:s=14;break e;case Wt:s=16,r=null;break e}throw Error(A(130,e==null?e:typeof e,""))}return t=Ye(s,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Sn(e,t,n,r){return e=Ye(7,e,r,t),e.lanes=n,e}function Ds(e,t,n,r){return e=Ye(22,e,r,t),e.elementType=op,e.lanes=n,e.stateNode={isHidden:!1},e}function Sa(e,t,n){return e=Ye(6,e,null,t),e.lanes=n,e}function Ca(e,t,n){return t=Ye(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ny(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=oa(0),this.expirationTimes=oa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=oa(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Xc(e,t,n,r,o,i,s,a,l){return e=new Ny(e,t,n,a,l),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ye(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ic(i),e}function $y(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function qh(e){if(!e)return sn;e=e._reactInternals;e:{if($n(e)!==e||e.tag!==1)throw Error(A(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ne(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(A(171))}if(e.tag===1){var n=e.type;if(Ne(n))return Yp(e,n,t)}return t}function Jh(e,t,n,r,o,i,s,a,l){return e=Xc(n,r,!0,e,o,i,s,a,l),e.context=qh(null),n=e.current,r=Ee(),o=tn(n),i=Pt(r,o),i.callback=t??null,Zt(n,i,o),e.current.lanes=o,jo(e,o,r),$e(e,r),e}function Os(e,t,n,r){var o=t.current,i=Ee(),s=tn(o);return n=qh(n),t.context===null?t.context=n:t.pendingContext=n,t=Pt(i,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Zt(o,t,s),e!==null&&(ut(e,o,s,i),Ri(e,o,s)),s}function ms(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function zd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Zc(e,t){zd(e,t),(e=e.alternate)&&zd(e,t)}function zy(){return null}var Xh=typeof reportError=="function"?reportError:function(e){console.error(e)};function eu(e){this._internalRoot=e}Bs.prototype.render=eu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(A(409));Os(e,t,null,null)};Bs.prototype.unmount=eu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;An(function(){Os(null,e,null,null)}),t[_t]=null}};function Bs(e){this._internalRoot=e}Bs.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ap();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Vt.length&&t!==0&&t<Vt[n].priority;n++);Vt.splice(n,0,e),n===0&&Mp(e)}};function tu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Fs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Id(){}function Iy(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=ms(s);i.call(c)}}var s=Jh(t,r,e,0,null,!1,!1,"",Id);return e._reactRootContainer=s,e[_t]=s.current,yo(e.nodeType===8?e.parentNode:e),An(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var c=ms(l);a.call(c)}}var l=Xc(e,0,!1,null,null,!1,!1,"",Id);return e._reactRootContainer=l,e[_t]=l.current,yo(e.nodeType===8?e.parentNode:e),An(function(){Os(t,l,n,r)}),l}function Ws(e,t,n,r,o){var i=n._reactRootContainer;if(i){var s=i;if(typeof o=="function"){var a=o;o=function(){var l=ms(s);a.call(l)}}Os(t,s,e,o)}else s=Iy(n,t,e,o,r);return ms(s)}Tp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=qr(t.pendingLanes);n!==0&&(bc(t,n|1),$e(t,ce()),!(K&6)&&(vr=ce()+500,fn()))}break;case 13:An(function(){var r=Mt(e,1);if(r!==null){var o=Ee();ut(r,e,1,o)}}),Zc(e,1)}};xc=function(e){if(e.tag===13){var t=Mt(e,134217728);if(t!==null){var n=Ee();ut(t,e,134217728,n)}Zc(e,134217728)}};Pp=function(e){if(e.tag===13){var t=tn(e),n=Mt(e,t);if(n!==null){var r=Ee();ut(n,e,t,r)}Zc(e,t)}};Ap=function(){return q};_p=function(e,t){var n=q;try{return q=e,t()}finally{q=n}};rl=function(e,t,n){switch(t){case"input":if(qa(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Ns(r);if(!o)throw Error(A(90));sp(r),qa(r,o)}}}break;case"textarea":lp(e,n);break;case"select":t=n.value,t!=null&&er(e,!!n.multiple,t,!1)}};mp=Kc;gp=An;var jy={usingClientEntryPoint:!1,Events:[Do,Qn,Ns,pp,hp,Kc]},Br={findFiberByHostInstance:vn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Ly={bundleType:Br.bundleType,version:Br.version,rendererPackageName:Br.rendererPackageName,rendererConfig:Br.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:It.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=wp(e),e===null?null:e.stateNode},findFiberByHostInstance:Br.findFiberByHostInstance||zy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pi.isDisabled&&pi.supportsFiber)try{As=pi.inject(Ly),yt=pi}catch{}}Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jy;Ve.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!tu(t))throw Error(A(200));return $y(e,t,null,n)};Ve.createRoot=function(e,t){if(!tu(e))throw Error(A(299));var n=!1,r="",o=Xh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Xc(e,1,!1,null,null,n,!1,r,o),e[_t]=t.current,yo(e.nodeType===8?e.parentNode:e),new eu(t)};Ve.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(A(188)):(e=Object.keys(e).join(","),Error(A(268,e)));return e=wp(t),e=e===null?null:e.stateNode,e};Ve.flushSync=function(e){return An(e)};Ve.hydrate=function(e,t,n){if(!Fs(t))throw Error(A(200));return Ws(null,e,t,!0,n)};Ve.hydrateRoot=function(e,t,n){if(!tu(e))throw Error(A(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",s=Xh;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Jh(t,null,e,1,n??null,o,!1,i,s),e[_t]=t.current,yo(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Bs(t)};Ve.render=function(e,t,n){if(!Fs(t))throw Error(A(200));return Ws(null,e,t,!1,n)};Ve.unmountComponentAtNode=function(e){if(!Fs(e))throw Error(A(40));return e._reactRootContainer?(An(function(){Ws(null,null,e,!1,function(){e._reactRootContainer=null,e[_t]=null})}),!0):!1};Ve.unstable_batchedUpdates=Kc;Ve.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Fs(n))throw Error(A(200));if(e==null||e._reactInternals===void 0)throw Error(A(38));return Ws(e,t,n,!1,r)};Ve.version="18.2.0-next-9e3b772b8-20220608";function Zh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zh)}catch(e){console.error(e)}}Zh(),Jf.exports=Ve;var Bo=Jf.exports;const Dy=Sr(Bo);/**
 * @remix-run/router v1.15.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Po(){return Po=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Po.apply(this,arguments)}var Kt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Kt||(Kt={}));const jd="popstate";function Oy(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:s,hash:a}=r.location;return jl("",{pathname:i,search:s,hash:a},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:gs(o)}return Fy(t,n,null,e)}function he(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function em(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function By(){return Math.random().toString(36).substr(2,8)}function Ld(e,t){return{usr:e.state,key:e.key,idx:t}}function jl(e,t,n,r){return n===void 0&&(n=null),Po({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Pr(t):t,{state:n,key:t&&t.key||r||By()})}function gs(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Pr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Fy(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,s=o.history,a=Kt.Pop,l=null,c=d();c==null&&(c=0,s.replaceState(Po({},s.state,{idx:c}),""));function d(){return(s.state||{idx:null}).idx}function u(){a=Kt.Pop;let x=d(),m=x==null?null:x-c;c=x,l&&l({action:a,location:v.location,delta:m})}function h(x,m){a=Kt.Push;let p=jl(v.location,x,m);n&&n(p,x),c=d()+1;let y=Ld(p,c),k=v.createHref(p);try{s.pushState(y,"",k)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;o.location.assign(k)}i&&l&&l({action:a,location:v.location,delta:1})}function g(x,m){a=Kt.Replace;let p=jl(v.location,x,m);n&&n(p,x),c=d();let y=Ld(p,c),k=v.createHref(p);s.replaceState(y,"",k),i&&l&&l({action:a,location:v.location,delta:0})}function b(x){let m=o.location.origin!=="null"?o.location.origin:o.location.href,p=typeof x=="string"?x:gs(x);return p=p.replace(/ $/,"%20"),he(m,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,m)}let v={get action(){return a},get location(){return e(o,s)},listen(x){if(l)throw new Error("A history only accepts one active listener");return o.addEventListener(jd,u),l=x,()=>{o.removeEventListener(jd,u),l=null}},createHref(x){return t(o,x)},createURL:b,encodeLocation(x){let m=b(x);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:h,replace:g,go(x){return s.go(x)}};return v}var Dd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Dd||(Dd={}));function Wy(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Pr(t):t,o=yr(r.pathname||"/",n);if(o==null)return null;let i=tm(e);Uy(i);let s=null;for(let a=0;s==null&&a<i.length;++a){let l=ew(o);s=Xy(i[a],l)}return s}function tm(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,s,a)=>{let l={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};l.relativePath.startsWith("/")&&(he(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=rn([r,l.relativePath]),d=n.concat(l);i.children&&i.children.length>0&&(he(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),tm(i.children,t,d,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:qy(c,i.index),routesMeta:d})};return e.forEach((i,s)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))o(i,s);else for(let l of nm(i.path))o(i,s,l)}),t}function nm(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let s=nm(r.join("/")),a=[];return a.push(...s.map(l=>l===""?i:[i,l].join("/"))),o&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function Uy(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Jy(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Vy=/^:[\w-]+$/,Hy=3,Gy=2,Qy=1,Ky=10,Yy=-2,Od=e=>e==="*";function qy(e,t){let n=e.split("/"),r=n.length;return n.some(Od)&&(r+=Yy),t&&(r+=Gy),n.filter(o=>!Od(o)).reduce((o,i)=>o+(Vy.test(i)?Hy:i===""?Qy:Ky),r)}function Jy(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function Xy(e,t){let{routesMeta:n}=e,r={},o="/",i=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,c=o==="/"?t:t.slice(o.length)||"/",d=Ll({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},c);if(!d)return null;Object.assign(r,d.params);let u=a.route;i.push({params:r,pathname:rn([o,d.pathname]),pathnameBase:ow(rn([o,d.pathnameBase])),route:u}),d.pathnameBase!=="/"&&(o=rn([o,d.pathnameBase]))}return i}function Ll(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Zy(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],s=i.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((c,d,u)=>{let{paramName:h,isOptional:g}=d;if(h==="*"){let v=a[u]||"";s=i.slice(0,i.length-v.length).replace(/(.)\/+$/,"$1")}const b=a[u];return g&&!b?c[h]=void 0:c[h]=(b||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:s,pattern:e}}function Zy(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),em(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function ew(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return em(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function yr(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function tw(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Pr(e):e;return{pathname:n?n.startsWith("/")?n:nw(n,t):t,search:iw(r),hash:sw(o)}}function nw(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Ea(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function rw(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function rm(e,t){let n=rw(e);return t?n.map((r,o)=>o===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function om(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=Pr(e):(o=Po({},e),he(!o.pathname||!o.pathname.includes("?"),Ea("?","pathname","search",o)),he(!o.pathname||!o.pathname.includes("#"),Ea("#","pathname","hash",o)),he(!o.search||!o.search.includes("#"),Ea("#","search","hash",o)));let i=e===""||o.pathname==="",s=i?"/":o.pathname,a;if(s==null)a=n;else{let u=t.length-1;if(!r&&s.startsWith("..")){let h=s.split("/");for(;h[0]==="..";)h.shift(),u-=1;o.pathname=h.join("/")}a=u>=0?t[u]:"/"}let l=tw(o,a),c=s&&s!=="/"&&s.endsWith("/"),d=(i||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||d)&&(l.pathname+="/"),l}const rn=e=>e.join("/").replace(/\/\/+/g,"/"),ow=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),iw=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,sw=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function aw(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const im=["post","put","patch","delete"];new Set(im);const lw=["get",...im];new Set(lw);/**
 * React Router v6.22.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ao(){return Ao=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ao.apply(this,arguments)}const Us=f.createContext(null),sm=f.createContext(null),pn=f.createContext(null),Vs=f.createContext(null),hn=f.createContext({outlet:null,matches:[],isDataRoute:!1}),am=f.createContext(null);function cw(e,t){let{relative:n}=t===void 0?{}:t;Fo()||he(!1);let{basename:r,navigator:o}=f.useContext(pn),{hash:i,pathname:s,search:a}=Hs(e,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:rn([r,s])),o.createHref({pathname:l,search:a,hash:i})}function Fo(){return f.useContext(Vs)!=null}function Ar(){return Fo()||he(!1),f.useContext(Vs).location}function lm(e){f.useContext(pn).static||f.useLayoutEffect(e)}function uw(){let{isDataRoute:e}=f.useContext(hn);return e?Sw():dw()}function dw(){Fo()||he(!1);let e=f.useContext(Us),{basename:t,future:n,navigator:r}=f.useContext(pn),{matches:o}=f.useContext(hn),{pathname:i}=Ar(),s=JSON.stringify(rm(o,n.v7_relativeSplatPath)),a=f.useRef(!1);return lm(()=>{a.current=!0}),f.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let u=om(c,JSON.parse(s),i,d.relative==="path");e==null&&t!=="/"&&(u.pathname=u.pathname==="/"?t:rn([t,u.pathname])),(d.replace?r.replace:r.push)(u,d.state,d)},[t,r,s,i,e])}function lC(){let{matches:e}=f.useContext(hn),t=e[e.length-1];return t?t.params:{}}function Hs(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=f.useContext(pn),{matches:o}=f.useContext(hn),{pathname:i}=Ar(),s=JSON.stringify(rm(o,r.v7_relativeSplatPath));return f.useMemo(()=>om(e,JSON.parse(s),i,n==="path"),[e,s,i,n])}function fw(e,t){return pw(e,t)}function pw(e,t,n,r){Fo()||he(!1);let{navigator:o}=f.useContext(pn),{matches:i}=f.useContext(hn),s=i[i.length-1],a=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let c=Ar(),d;if(t){var u;let x=typeof t=="string"?Pr(t):t;l==="/"||(u=x.pathname)!=null&&u.startsWith(l)||he(!1),d=x}else d=c;let h=d.pathname||"/",g=h;if(l!=="/"){let x=l.replace(/^\//,"").split("/");g="/"+h.replace(/^\//,"").split("/").slice(x.length).join("/")}let b=Wy(e,{pathname:g}),v=yw(b&&b.map(x=>Object.assign({},x,{params:Object.assign({},a,x.params),pathname:rn([l,o.encodeLocation?o.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?l:rn([l,o.encodeLocation?o.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),i,n,r);return t&&v?f.createElement(Vs.Provider,{value:{location:Ao({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Kt.Pop}},v):v}function hw(){let e=kw(),t=aw(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return f.createElement(f.Fragment,null,f.createElement("h2",null,"Unexpected Application Error!"),f.createElement("h3",{style:{fontStyle:"italic"}},t),n?f.createElement("pre",{style:o},n):null,null)}const mw=f.createElement(hw,null);class gw extends f.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?f.createElement(hn.Provider,{value:this.props.routeContext},f.createElement(am.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function vw(e){let{routeContext:t,match:n,children:r}=e,o=f.useContext(Us);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),f.createElement(hn.Provider,{value:t},r)}function yw(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let s=e,a=(o=n)==null?void 0:o.errors;if(a!=null){let d=s.findIndex(u=>u.route.id&&(a==null?void 0:a[u.route.id]));d>=0||he(!1),s=s.slice(0,Math.min(s.length,d+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<s.length;d++){let u=s[d];if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(c=d),u.route.id){let{loaderData:h,errors:g}=n,b=u.route.loader&&h[u.route.id]===void 0&&(!g||g[u.route.id]===void 0);if(u.route.lazy||b){l=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((d,u,h)=>{let g,b=!1,v=null,x=null;n&&(g=a&&u.route.id?a[u.route.id]:void 0,v=u.route.errorElement||mw,l&&(c<0&&h===0?(Cw("route-fallback",!1),b=!0,x=null):c===h&&(b=!0,x=u.route.hydrateFallbackElement||null)));let m=t.concat(s.slice(0,h+1)),p=()=>{let y;return g?y=v:b?y=x:u.route.Component?y=f.createElement(u.route.Component,null):u.route.element?y=u.route.element:y=d,f.createElement(vw,{match:u,routeContext:{outlet:d,matches:m,isDataRoute:n!=null},children:y})};return n&&(u.route.ErrorBoundary||u.route.errorElement||h===0)?f.createElement(gw,{location:n.location,revalidation:n.revalidation,component:v,error:g,children:p(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):p()},null)}var cm=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(cm||{}),vs=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(vs||{});function ww(e){let t=f.useContext(Us);return t||he(!1),t}function bw(e){let t=f.useContext(sm);return t||he(!1),t}function xw(e){let t=f.useContext(hn);return t||he(!1),t}function um(e){let t=xw(),n=t.matches[t.matches.length-1];return n.route.id||he(!1),n.route.id}function kw(){var e;let t=f.useContext(am),n=bw(vs.UseRouteError),r=um(vs.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Sw(){let{router:e}=ww(cm.UseNavigateStable),t=um(vs.UseNavigateStable),n=f.useRef(!1);return lm(()=>{n.current=!0}),f.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,Ao({fromRouteId:t},i)))},[e,t])}const Bd={};function Cw(e,t,n){!t&&!Bd[e]&&(Bd[e]=!0)}function Ew(e){let{basename:t="/",children:n=null,location:r,navigationType:o=Kt.Pop,navigator:i,static:s=!1,future:a}=e;Fo()&&he(!1);let l=t.replace(/^\/*/,"/"),c=f.useMemo(()=>({basename:l,navigator:i,static:s,future:Ao({v7_relativeSplatPath:!1},a)}),[l,a,i,s]);typeof r=="string"&&(r=Pr(r));let{pathname:d="/",search:u="",hash:h="",state:g=null,key:b="default"}=r,v=f.useMemo(()=>{let x=yr(d,l);return x==null?null:{location:{pathname:x,search:u,hash:h,state:g,key:b},navigationType:o}},[l,d,u,h,g,b,o]);return v==null?null:f.createElement(pn.Provider,{value:c},f.createElement(Vs.Provider,{children:n,value:v}))}new Promise(()=>{});/**
 * React Router DOM v6.22.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ys(){return ys=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ys.apply(this,arguments)}function dm(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Tw(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Pw(e,t){return e.button===0&&(!t||t==="_self")&&!Tw(e)}const Aw=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],_w=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],Mw="6";try{window.__reactRouterVersion=Mw}catch{}const Rw=f.createContext({isTransitioning:!1}),Nw="startTransition",Fd=Yf[Nw];function $w(e){let{basename:t,children:n,future:r,window:o}=e,i=f.useRef();i.current==null&&(i.current=Oy({window:o,v5Compat:!0}));let s=i.current,[a,l]=f.useState({action:s.action,location:s.location}),{v7_startTransition:c}=r||{},d=f.useCallback(u=>{c&&Fd?Fd(()=>l(u)):l(u)},[l,c]);return f.useLayoutEffect(()=>s.listen(d),[s,d]),f.createElement(Ew,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const zw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Iw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,nu=f.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:s,state:a,target:l,to:c,preventScrollReset:d,unstable_viewTransition:u}=t,h=dm(t,Aw),{basename:g}=f.useContext(pn),b,v=!1;if(typeof c=="string"&&Iw.test(c)&&(b=c,zw))try{let y=new URL(window.location.href),k=c.startsWith("//")?new URL(y.protocol+c):new URL(c),S=yr(k.pathname,g);k.origin===y.origin&&S!=null?c=S+k.search+k.hash:v=!0}catch{}let x=cw(c,{relative:o}),m=Lw(c,{replace:s,state:a,target:l,preventScrollReset:d,relative:o,unstable_viewTransition:u});function p(y){r&&r(y),y.defaultPrevented||m(y)}return f.createElement("a",ys({},h,{href:b||x,onClick:v||i?r:p,ref:n,target:l}))}),bn=f.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:o=!1,className:i="",end:s=!1,style:a,to:l,unstable_viewTransition:c,children:d}=t,u=dm(t,_w),h=Hs(l,{relative:u.relative}),g=Ar(),b=f.useContext(sm),{navigator:v,basename:x}=f.useContext(pn),m=b!=null&&Dw(h)&&c===!0,p=v.encodeLocation?v.encodeLocation(h).pathname:h.pathname,y=g.pathname,k=b&&b.navigation&&b.navigation.location?b.navigation.location.pathname:null;o||(y=y.toLowerCase(),k=k?k.toLowerCase():null,p=p.toLowerCase()),k&&x&&(k=yr(k,x)||k);const S=p!=="/"&&p.endsWith("/")?p.length-1:p.length;let C=y===p||!s&&y.startsWith(p)&&y.charAt(S)==="/",E=k!=null&&(k===p||!s&&k.startsWith(p)&&k.charAt(p.length)==="/"),T={isActive:C,isPending:E,isTransitioning:m},N=C?r:void 0,M;typeof i=="function"?M=i(T):M=[i,C?"active":null,E?"pending":null,m?"transitioning":null].filter(Boolean).join(" ");let B=typeof a=="function"?a(T):a;return f.createElement(nu,ys({},u,{"aria-current":N,className:M,ref:n,style:B,to:l,unstable_viewTransition:c}),typeof d=="function"?d(T):d)});var Dl;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Dl||(Dl={}));var Wd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Wd||(Wd={}));function jw(e){let t=f.useContext(Us);return t||he(!1),t}function Lw(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:s,unstable_viewTransition:a}=t===void 0?{}:t,l=uw(),c=Ar(),d=Hs(e,{relative:s});return f.useCallback(u=>{if(Pw(u,n)){u.preventDefault();let h=r!==void 0?r:gs(c)===gs(d);l(e,{replace:h,state:o,preventScrollReset:i,relative:s,unstable_viewTransition:a})}},[c,l,d,r,o,n,e,i,s,a])}function Dw(e,t){t===void 0&&(t={});let n=f.useContext(Rw);n==null&&he(!1);let{basename:r}=jw(Dl.useViewTransitionState),o=Hs(e,{relative:t.relative});if(!n.isTransitioning)return!1;let i=yr(n.currentLocation.pathname,r)||n.currentLocation.pathname,s=yr(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Ll(o.pathname,s)!=null||Ll(o.pathname,i)!=null}const Ow=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",width:35.93,height:32,preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 228",...e},f.createElement("path",{fill:"#087EA4",d:"M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"}));/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Bw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fw=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Wo=(e,t)=>{const n=f.forwardRef(({color:r="currentColor",size:o=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:a="",children:l,...c},d)=>f.createElement("svg",{ref:d,...Bw,width:o,height:o,stroke:r,strokeWidth:s?Number(i)*24/Number(o):i,className:["lucide",`lucide-${Fw(e)}`,a].join(" "),...c},[...t.map(([u,h])=>f.createElement(u,h)),...Array.isArray(l)?l:[l]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ww=Wo("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uw=Wo("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vw=Wo("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hw=Wo("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gw=Wo("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);function D(){return D=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},D.apply(this,arguments)}function Qw(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function Gs(...e){return t=>e.forEach(n=>Qw(n,t))}function Ue(...e){return f.useCallback(Gs(...e),e)}const wr=f.forwardRef((e,t)=>{const{children:n,...r}=e,o=f.Children.toArray(n),i=o.find(Yw);if(i){const s=i.props.children,a=o.map(l=>l===i?f.Children.count(s)>1?f.Children.only(null):f.isValidElement(s)?s.props.children:null:l);return f.createElement(Ol,D({},r,{ref:t}),f.isValidElement(s)?f.cloneElement(s,void 0,a):null)}return f.createElement(Ol,D({},r,{ref:t}),n)});wr.displayName="Slot";const Ol=f.forwardRef((e,t)=>{const{children:n,...r}=e;return f.isValidElement(n)?f.cloneElement(n,{...qw(r,n.props),ref:t?Gs(t,n.ref):n.ref}):f.Children.count(n)>1?f.Children.only(null):null});Ol.displayName="SlotClone";const Kw=({children:e})=>f.createElement(f.Fragment,null,e);function Yw(e){return f.isValidElement(e)&&e.type===Kw}function qw(e,t){const n={...t};for(const r in t){const o=e[r],i=t[r];/^on[A-Z]/.test(r)?o&&i?n[r]=(...a)=>{i(...a),o(...a)}:o&&(n[r]=o):r==="style"?n[r]={...o,...i}:r==="className"&&(n[r]=[o,i].filter(Boolean).join(" "))}return{...e,...n}}function fm(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=fm(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function Jw(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=fm(e))&&(r&&(r+=" "),r+=t);return r}const Ud=e=>typeof e=="boolean"?"".concat(e):e===0?"0":e,Vd=Jw,Xw=(e,t)=>n=>{var r;if((t==null?void 0:t.variants)==null)return Vd(e,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:o,defaultVariants:i}=t,s=Object.keys(o).map(c=>{const d=n==null?void 0:n[c],u=i==null?void 0:i[c];if(d===null)return null;const h=Ud(d)||Ud(u);return o[c][h]}),a=n&&Object.entries(n).reduce((c,d)=>{let[u,h]=d;return h===void 0||(c[u]=h),c},{}),l=t==null||(r=t.compoundVariants)===null||r===void 0?void 0:r.reduce((c,d)=>{let{class:u,className:h,...g}=d;return Object.entries(g).every(b=>{let[v,x]=b;return Array.isArray(x)?x.includes({...i,...a}[v]):{...i,...a}[v]===x})?[...c,u,h]:c},[]);return Vd(e,s,l,n==null?void 0:n.class,n==null?void 0:n.className)},Zw="modulepreload",e1=function(e){return"/"+e},Hd={},H=function(t,n,r){let o=Promise.resolve();if(n&&n.length>0){const i=document.getElementsByTagName("link");o=Promise.all(n.map(s=>{if(s=e1(s),s in Hd)return;Hd[s]=!0;const a=s.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(!!r)for(let u=i.length-1;u>=0;u--){const h=i[u];if(h.href===s&&(!a||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${l}`))return;const d=document.createElement("link");if(d.rel=a?"stylesheet":Zw,a||(d.as="script",d.crossOrigin=""),d.href=s,document.head.appendChild(d),a)return new Promise((u,h)=>{d.addEventListener("load",u),d.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${s}`)))})}))}return o.then(()=>t()).catch(i=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=i,window.dispatchEvent(s),!s.defaultPrevented)throw i})};class ru{constructor(t){I(this,"errorCode");I(this,"message");I(this,"stackTrace");I(this,"errors");I(this,"meta");Object.assign(this,t)}}class t1{constructor(t){I(this,"errorCode");I(this,"fieldName");I(this,"message");I(this,"meta");Object.assign(this,t)}}class ou{constructor(t){I(this,"type");I(this,"responseStatus");Object.assign(this,t)}}class Gd{constructor(t){I(this,"responseStatus");Object.assign(this,t)}}var Qd;(function(e){e[e.CONNECTING=0]="CONNECTING",e[e.OPEN=1]="OPEN",e[e.CLOSED=2]="CLOSED"})(Qd||(Qd={}));class Y{}I(Y,"Get","GET"),I(Y,"Post","POST"),I(Y,"Put","PUT"),I(Y,"Delete","DELETE"),I(Y,"Patch","PATCH"),I(Y,"Head","HEAD"),I(Y,"Options","OPTIONS"),I(Y,"hasRequestBody",t=>!(t==="GET"||t==="DELETE"||t==="HEAD"||t==="OPTIONS"));class n1{constructor(t){I(this,"refreshToken");I(this,"useTokenCookie");Object.assign(this,t)}createResponse(){return new r1}getTypeName(){return"GetAccessToken"}getMethod(){return"POST"}}class r1{constructor(){I(this,"accessToken");I(this,"responseStatus")}}const mt=class mt{constructor(t="/"){I(this,"baseUrl");I(this,"replyBaseUrl");I(this,"oneWayBaseUrl");I(this,"mode");I(this,"credentials");I(this,"headers");I(this,"userName");I(this,"password");I(this,"bearerToken");I(this,"refreshToken");I(this,"refreshTokenUri");I(this,"useTokenCookie");I(this,"enableAutoRefreshToken");I(this,"requestFilter");I(this,"responseFilter");I(this,"exceptionFilter");I(this,"urlFilter");I(this,"onAuthenticationRequired");I(this,"manageCookies");I(this,"cookies");I(this,"parseJson");this.baseUrl=t,this.mode="cors",this.credentials="include",this.headers=new Headers,this.headers.set("Content-Type","application/json"),this.manageCookies=typeof document>"u",this.cookies={},this.enableAutoRefreshToken=!0,this.basePath="api"}setCredentials(t,n){this.userName=t,this.password=n}useBasePath(t){return this.basePath=t,this}set basePath(t){t?(this.replyBaseUrl=ot(this.baseUrl,t)+"/",this.oneWayBaseUrl=ot(this.baseUrl,t)+"/"):(this.replyBaseUrl=ot(this.baseUrl,"json","reply")+"/",this.oneWayBaseUrl=ot(this.baseUrl,"json","oneway")+"/")}apply(t){return t(this),this}get(t,n){return typeof t!="string"?this.fetch(Y.Get,t,n):this.fetch(Y.Get,null,n,this.toAbsoluteUrl(t))}delete(t,n){return typeof t!="string"?this.fetch(Y.Delete,t,n):this.fetch(Y.Delete,null,n,this.toAbsoluteUrl(t))}post(t,n){return this.fetch(Y.Post,t,n)}postToUrl(t,n,r){return this.fetch(Y.Post,n,r,this.toAbsoluteUrl(t))}postBody(t,n,r){return this.fetchBody(Y.Post,t,n,r)}put(t,n){return this.fetch(Y.Put,t,n)}putToUrl(t,n,r){return this.fetch(Y.Put,n,r,this.toAbsoluteUrl(t))}putBody(t,n,r){return this.fetchBody(Y.Put,t,n,r)}patch(t,n){return this.fetch(Y.Patch,t,n)}patchToUrl(t,n,r){return this.fetch(Y.Patch,n,r,this.toAbsoluteUrl(t))}patchBody(t,n,r){return this.fetchBody(Y.Patch,t,n,r)}publish(t,n){return this.sendOneWay(t,n)}sendOneWay(t,n){const r=ot(this.oneWayBaseUrl,Fr(t));return this.fetch(Y.Post,t,null,r)}sendAll(t){if(t.length==0)return Promise.resolve([]);const n=ot(this.replyBaseUrl,Fr(t[0])+"[]");return this.fetch(Y.Post,t,null,n)}sendAllOneWay(t){if(t.length==0)return Promise.resolve(void 0);const n=ot(this.oneWayBaseUrl,Fr(t[0])+"[]");return this.fetch(Y.Post,t,null,n).then(r=>{})}createUrlFromDto(t,n){let r=ot(this.replyBaseUrl,Fr(n));return Y.hasRequestBody(t)||(r=Pa(r,n)),r}toAbsoluteUrl(t){return t.startsWith("http://")||t.startsWith("https://")?t:ot(this.baseUrl,t)}deleteCookie(t){this.manageCookies?delete this.cookies[t]:document&&(document.cookie=t+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/")}createRequest({method:t,request:n,url:r,args:o,body:i}){if(r||(r=this.createUrlFromDto(t,n)),o&&(r=Pa(r,o)),this.bearerToken!=null?this.headers.set("Authorization","Bearer "+this.bearerToken):this.userName!=null&&this.headers.set("Authorization","Basic "+mt.toBase64(`${this.userName}:${this.password}`)),this.manageCookies){let c=Object.keys(this.cookies).map(d=>{let u=this.cookies[d];return u.expires&&u.expires<new Date?null:`${u.name}=${encodeURIComponent(u.value)}`}).filter(d=>!!d);c.length>0?this.headers.set("Cookie",c.join("; ")):this.headers.delete("Cookie")}let s=new Headers(this.headers),a=Y.hasRequestBody(t),l={url:r,method:t,mode:this.mode,credentials:this.credentials,headers:s,compress:!1};return a&&(l.body=i||JSON.stringify(n),Kd(i)&&(l.body=S1(i),s.delete("Content-Type"))),this.requestFilter!=null&&this.requestFilter(l),mt.globalRequestFilter!=null&&mt.globalRequestFilter(l),l}json(t){return this.parseJson?this.parseJson(t):t.text().then(n=>n.length>0?JSON.parse(n):null)}applyResponseFilters(t){this.responseFilter!=null&&this.responseFilter(t),mt.globalResponseFilter!=null&&mt.globalResponseFilter(t)}createResponse(t,n){if(!t.ok)throw this.applyResponseFilters(t),t;if(this.manageCookies){let a=[];t.headers.forEach((l,c)=>{switch(c.toLowerCase()){case"set-cookie":l.split(",").forEach(u=>a.push(u));break}}),a.forEach(l=>{let c=h1(l);c&&(this.cookies[c.name]=c)})}t.headers.forEach((a,l)=>{switch(l.toLowerCase()){case"x-cookies":a.split(",").indexOf("ss-reftok")>=0&&(this.useTokenCookie=!0);break}}),this.applyResponseFilters(t);let r=n&&typeof n!="string"&&typeof n.createResponse=="function"?n.createResponse():null;if(typeof r=="string")return t.text().then(a=>a);let o=t.headers.get("content-type"),i=o&&o.indexOf("application/json")!==-1;if(i)return this.json(t).then(a=>a);if(typeof Uint8Array<"u"&&r instanceof Uint8Array){if(typeof t.arrayBuffer!="function")throw new Error("This fetch polyfill does not implement 'arrayBuffer'");return t.arrayBuffer().then(a=>new Uint8Array(a))}else if(typeof Blob=="function"&&r instanceof Blob){if(typeof t.blob!="function")throw new Error("This fetch polyfill does not implement 'blob'");return t.blob().then(a=>a)}let s=t.headers.get("content-length");return s==="0"||s==null&&!i?t.text().then(a=>r):this.json(t).then(a=>a)}handleError(t,n,r=null){if(n instanceof Error)throw this.raiseError(t,n);if(n.bodyUsed)throw this.raiseError(n,Ta(n.status,n.statusText,r));return typeof n.json>"u"&&n.responseStatus?new Promise((i,s)=>s(this.raiseError(null,n))):this.json(n).then(i=>{let s=br(i);throw s.responseStatus?(r!=null&&(s.type=r),s):Ta(n.status,n.statusText,r)}).catch(i=>{throw i instanceof Error||typeof window<"u"&&window.DOMException&&i instanceof window.DOMException?this.raiseError(n,Ta(n.status,n.statusText,r)):this.raiseError(n,i)})}fetch(t,n,r,o){return this.sendRequest({method:t,request:n,args:r,url:o})}fetchBody(t,n,r,o){let i=ot(this.replyBaseUrl,Fr(n));return this.sendRequest({method:t,request:r,body:typeof r=="string"||Kd(r)?r:JSON.stringify(r),url:Pa(i,n),args:o,returns:n})}sendRequest(t){const n=this.createRequest(t),r=t.returns||t.request;let o=null;const i=()=>{const s=this.createRequest(t);return this.urlFilter&&this.urlFilter(s.url),fetch(s.url,s).then(a=>this.createResponse(a,r)).catch(a=>this.handleError(o,a))};return this.urlFilter&&this.urlFilter(n.url),fetch(n.url,n).then(s=>(o=s,this.createResponse(s,r))).catch(s=>{if(s.status===401){if(this.enableAutoRefreshToken&&(this.refreshToken||this.useTokenCookie||this.cookies["ss-reftok"]!=null)){const a=new n1({refreshToken:this.refreshToken,useTokenCookie:!!this.useTokenCookie});let l=this.refreshTokenUri||this.createUrlFromDto(Y.Post,a);this.useTokenCookie&&(this.bearerToken=null,this.headers.delete("Authorization"));let c=this.createRequest({method:Y.Post,request:a,args:null,url:l});return fetch(l,c).then(d=>this.createResponse(d,a).then(u=>(this.bearerToken=(u==null?void 0:u.accessToken)||null,i()))).catch(d=>this.onAuthenticationRequired?this.onAuthenticationRequired().then(i).catch(u=>this.handleError(o,u,"RefreshTokenException")):this.handleError(o,d,"RefreshTokenException"))}else if(this.onAuthenticationRequired)return this.onAuthenticationRequired().then(i)}return this.handleError(o,s)})}raiseError(t,n){return this.exceptionFilter!=null&&this.exceptionFilter(t,n),n}send(t,n,r){return this.sendRequest({method:Ln(t),request:t,args:n,url:r})}sendVoid(t,n,r){return this.sendRequest({method:Ln(t),request:t,args:n,url:r})}async api(t,n,r){try{const o=await this.fetch(Ln(t,r),t,n);return new Dt({response:o})}catch(o){return new Dt({error:hi(o)})}}async apiVoid(t,n,r){try{const o=await this.fetch(Ln(t,r),t,n);return new Dt({response:o??new Gd})}catch(o){return new Dt({error:hi(o)})}}async apiForm(t,n,r,o){try{const i=await this.fetchBody(Ln(t,o),t,n,r);return new Dt({response:i})}catch(i){return new Dt({error:hi(i)})}}async apiFormVoid(t,n,r,o){try{const i=await this.fetchBody(Ln(t,o),t,n,r);return new Dt({response:i??new Gd})}catch(i){return new Dt({error:hi(i)})}}};I(mt,"globalRequestFilter"),I(mt,"globalResponseFilter"),I(mt,"toBase64");let Bl=mt;function Ln(e,t){return t??(typeof e.getMethod=="function"?e.getMethod():Y.Post)}function hi(e){return e.responseStatus??e.ResponseStatus??(e.errorCode?e:e.message?o1(e.message,e.errorCode):null)}class Dt{constructor(t){I(this,"response");I(this,"error");Object.assign(this,t)}get completed(){return this.response!=null||this.error!=null}get failed(){var t,n;return((t=this.error)==null?void 0:t.errorCode)!=null||((n=this.error)==null?void 0:n.message)!=null}get succeeded(){return!this.failed&&this.response!=null}get errorMessage(){var t;return(t=this.error)==null?void 0:t.message}get errorCode(){var t;return(t=this.error)==null?void 0:t.errorCode}get errors(){var t;return((t=this.error)==null?void 0:t.errors)??[]}get errorSummary(){return this.error!=null&&this.errors.length==0?this.errorMessage:null}fieldError(t){var r;let n=t.toLowerCase();return(r=this.errors)==null?void 0:r.find(o=>o.fieldName.toLowerCase()==n)}fieldErrorMessage(t){var n;return(n=this.fieldError(t))==null?void 0:n.message}hasFieldError(t){return this.fieldError(t)!=null}showSummary(t=[]){return this.failed?t.every(n=>!this.hasFieldError(n)):!1}summaryMessage(t=[]){if(this.showSummary(t)){let n=t.map(o=>o.toLowerCase());return n.find(o=>n.indexOf(o.toLowerCase())==-1)??this.errorMessage}}addFieldError(t,n,r="Exception"){this.error||(this.error=new ru);const o=this.fieldError(t);o!=null?(o.errorCode=r,o.message=n):this.error.errors.push(new t1({fieldName:t,errorCode:r,message:n}))}}function o1(e,t="Exception"){return new ru({errorCode:t,message:e})}function Kd(e){return typeof window<"u"&&e instanceof FormData}function Ta(e,t,n=null){return qd(new ou,o=>{n!=null&&(o.type=n),o.responseStatus=qd(new ru,i=>{i.errorCode=e&&e.toString(),i.message=t})})}function i1(e){return e&&e.charAt(0).toLowerCase()+e.substring(1)}function pm(e){return e&&e.charAt(0).toUpperCase()+e.substring(1)}function Fl(e){if(!e||!(e instanceof Object)||Array.isArray(e))return e;let t={};for(let n in e)if(e.hasOwnProperty(n)){const r=i1(n),o=e[n];Array.isArray(o)?t[r]=o.map(i=>Fl(i)):o instanceof Object?t[r]=Fl(o):t[r]=o}return t}function br(e){return br&&(e.responseStatus||e.errors?e:Fl(e))}function Fr(e){if(!e)return"null";if(typeof e.getTypeName=="function")return e.getTypeName();let t=e&&e.constructor;if(t==null)throw`${e} doesn't have constructor`;if(t.name)return t.name;let n=t.toString();return n.substring(9,n.indexOf("("))}function s1(e,t){if(!e)return[e];let n=e.indexOf(t);return n>=0?[e.substring(0,n),e.substring(n+1)]:[e]}function cC(e,t){if(e==null)return null;let n=e.indexOf(t);return n==-1?e:e.substring(0,n)}function uC(e,t){if(e==null)return null;let n=e.indexOf(t);return n==-1?e:e.substring(n+t.length)}function hm(e,t){if(e==null)return null;let n=e.lastIndexOf(t);return n==-1?e:e.substring(n+t.length)}function a1(e){return typeof e!="string"?e:e.replace(/([A-Z]|[0-9]+)/g," $1").replace(/_/g," ").trim()}function l1(e){return!e||e.indexOf(" ")>=0?e:a1(pm(e))}function ot(...e){let t=[],n,r;for(n=0,r=e.length;n<r;n++){let i=e[n];t=i.indexOf("://")===-1?t.concat(i.split("/")):t.concat(i.lastIndexOf("/")===i.length-1?i.substring(0,i.length-1):i)}let o=[];for(n=0,r=t.length;n<r;n++){let i=t[n];!i||i==="."||(i===".."?o.pop():o.push(i))}return t[0]===""&&o.unshift(""),o.join("/")||(o.length?"/":".")}function Pa(e,t){for(let n in t)if(t.hasOwnProperty(n)){let r=t[n];if(typeof r>"u"||typeof r=="function"||typeof r=="symbol")continue;e+=e.indexOf("?")>=0?"&":"?",e+=n+(r===null?"":"="+c1(r))}return e}function c1(e){return e==null?"":typeof Uint8Array<"u"&&e instanceof Uint8Array?u1(e):encodeURIComponent(e)||""}function u1(e){let t=(3-e.length%3)%3,n="";for(let r,o=e.length,i=0,s=0;s<o;s++)r=s%3,i|=e[s]<<(16>>>r&24),(r===2||e.length-s===1)&&(n+=String.fromCharCode(mi(i>>>18&63),mi(i>>>12&63),mi(i>>>6&63),mi(i&63)),i=0);return t===0?n:n.substring(0,n.length-t)+(t===1?"=":"==")}function mi(e){return e<26?e+65:e<52?e+71:e<62?e-4:e===62?43:e===63?47:65}function d1(e){return typeof btoa=="function"?btoa(e):Buffer.from(e).toString("base64")}Bl.toBase64=e=>d1(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g,(t,n)=>String.fromCharCode(new Number("0x"+n).valueOf())));function f1(e){return e&&e[0]=='"'&&e[e.length]=='"'?e.slice(1,-1):e}function p1(e){try{return decodeURIComponent(e)}catch{return e}}function h1(e){if(!e)return null;let t=null,n=e.split(/; */);for(let r=0;r<n.length;r++){let o=n[r],i=s1(o,"="),s=i[0].trim(),a=i.length>1?p1(f1(i[1].trim())):null;if(r==0)t={name:s,value:a,path:"/"};else{let l=s.toLowerCase();l=="httponly"?t.httpOnly=!0:l=="secure"?t.secure=!0:l=="expires"?(t.expires=new Date(a),t.expires.toString()==="Invalid Date"&&(t.expires=new Date(a.replace(/-/g," ")))):t[s]=a}}return t}function m1(e){return Object.prototype.toString.call(e)==="[object Array]"}function g1(){const e=this.responseStatus||this.ResponseStatus;if(e==null)return;const t=e.ErrorCode?br(e):e;return!t.errors||t.errors.length==0?t.message||t.errorCode:void 0}function v1(e){const t=this.responseStatus||this.ResponseStatus;if(t==null)return;const n=t.ErrorCode?br(t):t,r=k1(e);if(r&&!(n.errors==null||n.errors.length==0)){const o=r.map(i=>(i||"").toLowerCase());for(let i of n.errors)if(o.indexOf((i.fieldName||"").toLowerCase())!==-1)return;for(let i of n.errors)if(o.indexOf((i.fieldName||"").toLowerCase())===-1)return i.message||i.errorCode}return n.message||n.errorCode||void 0}function y1(e){if(e==null)return g1.call(this);const t=this.responseStatus||this.ResponseStatus;if(t==null)return;const n=t.ErrorCode?br(t):t;if(n.errors==null||n.errors.length==0)return;const r=n.errors.find(o=>(o.fieldName||"").toLowerCase()==e.toLowerCase());return r?r.message||r.errorCode:void 0}function w1(e,t,n){return e.setAttribute(t,n)}function b1(e,t){const n={className:"class",htmlFor:"for"},r=document.createElement(e);if(t!=null&&t.attrs)for(const o in t.attrs)w1(r,n[o]||o,t.attrs[o]);return t!=null&&t.events&&x1(r,t.events),t&&t.insertAfter&&t.insertAfter.parentNode.insertBefore(r,t.insertAfter.nextSibling),r}function mm(e,t){var n;return typeof e=="string"?Array.from(((n=t||typeof document<"u"?document:null)==null?void 0:n.querySelectorAll(e))??[]):Array.isArray(e)?e.flatMap(r=>mm(r,t)):[e]}function x1(e,t){return mm(e).forEach(n=>{Object.keys(t).forEach(function(r){let o=t[r];typeof r=="string"&&typeof o=="function"&&n.addEventListener(r,t[r]=o.bind(n))})}),t}function dC(e){return new Promise((t,n)=>{document.body.appendChild(b1("script",{attrs:{src:e},events:{load:t,error:n}}))})}typeof window<"u"&&window.Element!==void 0&&(Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){let t=this;do{if(t.matches(e))return t;t=t.parentElement||t.parentNode}while(t!==null&&t.nodeType===1);return null}));var Yd;(function(e){e.MultiPart="multipart/form-data",e.UrlEncoded="application/x-www-form-urlencoded",e.Json="application/json"})(Yd||(Yd={}));function k1(e){return e?m1(e)?e:e.split(",").map(t=>t.trim()):[]}function S1(e){for(let[t,n]of e)typeof n=="object"&&n.size===0&&e.delete(t);return e}function qd(e,t){return t(e),e}function gm(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=gm(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function C1(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=gm(e))&&(r&&(r+=" "),r+=t);return r}const iu="-";function E1(e){const t=P1(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;function o(s){const a=s.split(iu);return a[0]===""&&a.length!==1&&a.shift(),vm(a,t)||T1(s)}function i(s,a){const l=n[s]||[];return a&&r[s]?[...l,...r[s]]:l}return{getClassGroupId:o,getConflictingClassGroupIds:i}}function vm(e,t){var s;if(e.length===0)return t.classGroupId;const n=e[0],r=t.nextPart.get(n),o=r?vm(e.slice(1),r):void 0;if(o)return o;if(t.validators.length===0)return;const i=e.join(iu);return(s=t.validators.find(({validator:a})=>a(i)))==null?void 0:s.classGroupId}const Jd=/^\[(.+)\]$/;function T1(e){if(Jd.test(e)){const t=Jd.exec(e)[1],n=t==null?void 0:t.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}}function P1(e){const{theme:t,prefix:n}=e,r={nextPart:new Map,validators:[]};return _1(Object.entries(e.classGroups),n).forEach(([i,s])=>{Wl(s,r,i,t)}),r}function Wl(e,t,n,r){e.forEach(o=>{if(typeof o=="string"){const i=o===""?t:Xd(t,o);i.classGroupId=n;return}if(typeof o=="function"){if(A1(o)){Wl(o(r),t,n,r);return}t.validators.push({validator:o,classGroupId:n});return}Object.entries(o).forEach(([i,s])=>{Wl(s,Xd(t,i),n,r)})})}function Xd(e,t){let n=e;return t.split(iu).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n}function A1(e){return e.isThemeGetter}function _1(e,t){return t?e.map(([n,r])=>{const o=r.map(i=>typeof i=="string"?t+i:typeof i=="object"?Object.fromEntries(Object.entries(i).map(([s,a])=>[t+s,a])):i);return[n,o]}):e}function M1(e){if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=new Map,r=new Map;function o(i,s){n.set(i,s),t++,t>e&&(t=0,r=n,n=new Map)}return{get(i){let s=n.get(i);if(s!==void 0)return s;if((s=r.get(i))!==void 0)return o(i,s),s},set(i,s){n.has(i)?n.set(i,s):o(i,s)}}}const ym="!";function R1(e){const t=e.separator,n=t.length===1,r=t[0],o=t.length;return function(s){const a=[];let l=0,c=0,d;for(let v=0;v<s.length;v++){let x=s[v];if(l===0){if(x===r&&(n||s.slice(v,v+o)===t)){a.push(s.slice(c,v)),c=v+o;continue}if(x==="/"){d=v;continue}}x==="["?l++:x==="]"&&l--}const u=a.length===0?s:s.substring(c),h=u.startsWith(ym),g=h?u.substring(1):u,b=d&&d>c?d-c:void 0;return{modifiers:a,hasImportantModifier:h,baseClassName:g,maybePostfixModifierPosition:b}}}function N1(e){if(e.length<=1)return e;const t=[];let n=[];return e.forEach(r=>{r[0]==="["?(t.push(...n.sort(),r),n=[]):n.push(r)}),t.push(...n.sort()),t}function $1(e){return{cache:M1(e.cacheSize),splitModifiers:R1(e),...E1(e)}}const z1=/\s+/;function I1(e,t){const{splitModifiers:n,getClassGroupId:r,getConflictingClassGroupIds:o}=t,i=new Set;return e.trim().split(z1).map(s=>{const{modifiers:a,hasImportantModifier:l,baseClassName:c,maybePostfixModifierPosition:d}=n(s);let u=r(d?c.substring(0,d):c),h=!!d;if(!u){if(!d)return{isTailwindClass:!1,originalClassName:s};if(u=r(c),!u)return{isTailwindClass:!1,originalClassName:s};h=!1}const g=N1(a).join(":");return{isTailwindClass:!0,modifierId:l?g+ym:g,classGroupId:u,originalClassName:s,hasPostfixModifier:h}}).reverse().filter(s=>{if(!s.isTailwindClass)return!0;const{modifierId:a,classGroupId:l,hasPostfixModifier:c}=s,d=a+l;return i.has(d)?!1:(i.add(d),o(l,c).forEach(u=>i.add(a+u)),!0)}).reverse().map(s=>s.originalClassName).join(" ")}function j1(){let e=0,t,n,r="";for(;e<arguments.length;)(t=arguments[e++])&&(n=wm(t))&&(r&&(r+=" "),r+=n);return r}function wm(e){if(typeof e=="string")return e;let t,n="";for(let r=0;r<e.length;r++)e[r]&&(t=wm(e[r]))&&(n&&(n+=" "),n+=t);return n}function L1(e,...t){let n,r,o,i=s;function s(l){const c=t.reduce((d,u)=>u(d),e());return n=$1(c),r=n.cache.get,o=n.cache.set,i=a,a(l)}function a(l){const c=r(l);if(c)return c;const d=I1(l,n);return o(l,d),d}return function(){return i(j1.apply(null,arguments))}}function ee(e){const t=n=>n[e]||[];return t.isThemeGetter=!0,t}const bm=/^\[(?:([a-z-]+):)?(.+)\]$/i,D1=/^\d+\/\d+$/,O1=new Set(["px","full","screen"]),B1=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,F1=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,W1=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,U1=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,V1=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function kt(e){return xn(e)||O1.has(e)||D1.test(e)}function Ot(e){return _r(e,"length",X1)}function xn(e){return!!e&&!Number.isNaN(Number(e))}function gi(e){return _r(e,"number",xn)}function Wr(e){return!!e&&Number.isInteger(Number(e))}function H1(e){return e.endsWith("%")&&xn(e.slice(0,-1))}function O(e){return bm.test(e)}function Bt(e){return B1.test(e)}const G1=new Set(["length","size","percentage"]);function Q1(e){return _r(e,G1,xm)}function K1(e){return _r(e,"position",xm)}const Y1=new Set(["image","url"]);function q1(e){return _r(e,Y1,eb)}function J1(e){return _r(e,"",Z1)}function Ur(){return!0}function _r(e,t,n){const r=bm.exec(e);return r?r[1]?typeof t=="string"?r[1]===t:t.has(r[1]):n(r[2]):!1}function X1(e){return F1.test(e)&&!W1.test(e)}function xm(){return!1}function Z1(e){return U1.test(e)}function eb(e){return V1.test(e)}function tb(){const e=ee("colors"),t=ee("spacing"),n=ee("blur"),r=ee("brightness"),o=ee("borderColor"),i=ee("borderRadius"),s=ee("borderSpacing"),a=ee("borderWidth"),l=ee("contrast"),c=ee("grayscale"),d=ee("hueRotate"),u=ee("invert"),h=ee("gap"),g=ee("gradientColorStops"),b=ee("gradientColorStopPositions"),v=ee("inset"),x=ee("margin"),m=ee("opacity"),p=ee("padding"),y=ee("saturate"),k=ee("scale"),S=ee("sepia"),C=ee("skew"),E=ee("space"),T=ee("translate"),N=()=>["auto","contain","none"],M=()=>["auto","hidden","clip","visible","scroll"],B=()=>["auto",O,t],z=()=>[O,t],X=()=>["",kt,Ot],F=()=>["auto",xn,O],V=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],J=()=>["solid","dashed","dotted","double","none"],W=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"],_=()=>["start","end","center","between","around","evenly","stretch"],P=()=>["","0",O],$=()=>["auto","avoid","all","avoid-page","page","left","right","column"],L=()=>[xn,gi],Q=()=>[xn,O];return{cacheSize:500,separator:":",theme:{colors:[Ur],spacing:[kt,Ot],blur:["none","",Bt,O],brightness:L(),borderColor:[e],borderRadius:["none","","full",Bt,O],borderSpacing:z(),borderWidth:X(),contrast:L(),grayscale:P(),hueRotate:Q(),invert:P(),gap:z(),gradientColorStops:[e],gradientColorStopPositions:[H1,Ot],inset:B(),margin:B(),opacity:L(),padding:z(),saturate:L(),scale:L(),sepia:P(),skew:Q(),space:z(),translate:z()},classGroups:{aspect:[{aspect:["auto","square","video",O]}],container:["container"],columns:[{columns:[Bt]}],"break-after":[{"break-after":$()}],"break-before":[{"break-before":$()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...V(),O]}],overflow:[{overflow:M()}],"overflow-x":[{"overflow-x":M()}],"overflow-y":[{"overflow-y":M()}],overscroll:[{overscroll:N()}],"overscroll-x":[{"overscroll-x":N()}],"overscroll-y":[{"overscroll-y":N()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[v]}],"inset-x":[{"inset-x":[v]}],"inset-y":[{"inset-y":[v]}],start:[{start:[v]}],end:[{end:[v]}],top:[{top:[v]}],right:[{right:[v]}],bottom:[{bottom:[v]}],left:[{left:[v]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Wr,O]}],basis:[{basis:B()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",O]}],grow:[{grow:P()}],shrink:[{shrink:P()}],order:[{order:["first","last","none",Wr,O]}],"grid-cols":[{"grid-cols":[Ur]}],"col-start-end":[{col:["auto",{span:["full",Wr,O]},O]}],"col-start":[{"col-start":F()}],"col-end":[{"col-end":F()}],"grid-rows":[{"grid-rows":[Ur]}],"row-start-end":[{row:["auto",{span:[Wr,O]},O]}],"row-start":[{"row-start":F()}],"row-end":[{"row-end":F()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",O]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",O]}],gap:[{gap:[h]}],"gap-x":[{"gap-x":[h]}],"gap-y":[{"gap-y":[h]}],"justify-content":[{justify:["normal",..._()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",..._(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[..._(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[p]}],px:[{px:[p]}],py:[{py:[p]}],ps:[{ps:[p]}],pe:[{pe:[p]}],pt:[{pt:[p]}],pr:[{pr:[p]}],pb:[{pb:[p]}],pl:[{pl:[p]}],m:[{m:[x]}],mx:[{mx:[x]}],my:[{my:[x]}],ms:[{ms:[x]}],me:[{me:[x]}],mt:[{mt:[x]}],mr:[{mr:[x]}],mb:[{mb:[x]}],ml:[{ml:[x]}],"space-x":[{"space-x":[E]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[E]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",O,t]}],"min-w":[{"min-w":[O,t,"min","max","fit"]}],"max-w":[{"max-w":[O,t,"none","full","min","max","fit","prose",{screen:[Bt]},Bt]}],h:[{h:[O,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[O,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[O,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[O,t,"auto","min","max","fit"]}],"font-size":[{text:["base",Bt,Ot]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",gi]}],"font-family":[{font:[Ur]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",O]}],"line-clamp":[{"line-clamp":["none",xn,gi]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",kt,O]}],"list-image":[{"list-image":["none",O]}],"list-style-type":[{list:["none","disc","decimal",O]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[m]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[m]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...J(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",kt,Ot]}],"underline-offset":[{"underline-offset":["auto",kt,O]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:z()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",O]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",O]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[m]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...V(),K1]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Q1]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},q1]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[b]}],"gradient-via-pos":[{via:[b]}],"gradient-to-pos":[{to:[b]}],"gradient-from":[{from:[g]}],"gradient-via":[{via:[g]}],"gradient-to":[{to:[g]}],rounded:[{rounded:[i]}],"rounded-s":[{"rounded-s":[i]}],"rounded-e":[{"rounded-e":[i]}],"rounded-t":[{"rounded-t":[i]}],"rounded-r":[{"rounded-r":[i]}],"rounded-b":[{"rounded-b":[i]}],"rounded-l":[{"rounded-l":[i]}],"rounded-ss":[{"rounded-ss":[i]}],"rounded-se":[{"rounded-se":[i]}],"rounded-ee":[{"rounded-ee":[i]}],"rounded-es":[{"rounded-es":[i]}],"rounded-tl":[{"rounded-tl":[i]}],"rounded-tr":[{"rounded-tr":[i]}],"rounded-br":[{"rounded-br":[i]}],"rounded-bl":[{"rounded-bl":[i]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[m]}],"border-style":[{border:[...J(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[m]}],"divide-style":[{divide:J()}],"border-color":[{border:[o]}],"border-color-x":[{"border-x":[o]}],"border-color-y":[{"border-y":[o]}],"border-color-t":[{"border-t":[o]}],"border-color-r":[{"border-r":[o]}],"border-color-b":[{"border-b":[o]}],"border-color-l":[{"border-l":[o]}],"divide-color":[{divide:[o]}],"outline-style":[{outline:["",...J()]}],"outline-offset":[{"outline-offset":[kt,O]}],"outline-w":[{outline:[kt,Ot]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:X()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[m]}],"ring-offset-w":[{"ring-offset":[kt,Ot]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",Bt,J1]}],"shadow-color":[{shadow:[Ur]}],opacity:[{opacity:[m]}],"mix-blend":[{"mix-blend":W()}],"bg-blend":[{"bg-blend":W()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",Bt,O]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[u]}],saturate:[{saturate:[y]}],sepia:[{sepia:[S]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[u]}],"backdrop-opacity":[{"backdrop-opacity":[m]}],"backdrop-saturate":[{"backdrop-saturate":[y]}],"backdrop-sepia":[{"backdrop-sepia":[S]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",O]}],duration:[{duration:Q()}],ease:[{ease:["linear","in","out","in-out",O]}],delay:[{delay:Q()}],animate:[{animate:["none","spin","ping","pulse","bounce",O]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[k]}],"scale-x":[{"scale-x":[k]}],"scale-y":[{"scale-y":[k]}],rotate:[{rotate:[Wr,O]}],"translate-x":[{"translate-x":[T]}],"translate-y":[{"translate-y":[T]}],"skew-x":[{"skew-x":[C]}],"skew-y":[{"skew-y":[C]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",O]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",O]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":z()}],"scroll-mx":[{"scroll-mx":z()}],"scroll-my":[{"scroll-my":z()}],"scroll-ms":[{"scroll-ms":z()}],"scroll-me":[{"scroll-me":z()}],"scroll-mt":[{"scroll-mt":z()}],"scroll-mr":[{"scroll-mr":z()}],"scroll-mb":[{"scroll-mb":z()}],"scroll-ml":[{"scroll-ml":z()}],"scroll-p":[{"scroll-p":z()}],"scroll-px":[{"scroll-px":z()}],"scroll-py":[{"scroll-py":z()}],"scroll-ps":[{"scroll-ps":z()}],"scroll-pe":[{"scroll-pe":z()}],"scroll-pt":[{"scroll-pt":z()}],"scroll-pr":[{"scroll-pr":z()}],"scroll-pb":[{"scroll-pb":z()}],"scroll-pl":[{"scroll-pl":z()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",O]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[kt,Ot,gi]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}const nb=L1(tb);function fC(e){return e.normalize("NFKD").toLowerCase().trim().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\_/g,"-").replace(/\-\-+/g,"-").replace(/\-$/g,"")}function pC(e){return new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}function hC(e){try{return new Date(e).toISOString()}catch{return"2000-01-01T00:00:00.000Z"}}Object.assign(Object.keys(globalThis).reduce((e,t)=>(e[t]=void 0,e),{}));function le(...e){return nb(C1(e))}const rb=Xw("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 focus:ring-2 focus:ring-offset-2",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-blue-500",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90 focus:ring-destructive-500",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground focus:ring-accent-500",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80 focus:ring-secondary-500",ghost:"hover:bg-accent hover:text-accent-foreground focus:ring-accent-500",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),km=f.forwardRef(({className:e,variant:t,size:n,asChild:r=!1,...o},i)=>{const s=r?wr:"button";return w.jsx(s,{className:le(rb({variant:t,size:n,className:e})),ref:i,...o})});km.displayName="Button";function G(e,t,{checkForDefaultPrevented:n=!0}={}){return function(o){if(e==null||e(o),n===!1||!o.defaultPrevented)return t==null?void 0:t(o)}}function Uo(e,t=[]){let n=[];function r(i,s){const a=f.createContext(s),l=n.length;n=[...n,s];function c(u){const{scope:h,children:g,...b}=u,v=(h==null?void 0:h[e][l])||a,x=f.useMemo(()=>b,Object.values(b));return f.createElement(v.Provider,{value:x},g)}function d(u,h){const g=(h==null?void 0:h[e][l])||a,b=f.useContext(g);if(b)return b;if(s!==void 0)return s;throw new Error(`\`${u}\` must be used within \`${i}\``)}return c.displayName=i+"Provider",[c,d]}const o=()=>{const i=n.map(s=>f.createContext(s));return function(a){const l=(a==null?void 0:a[e])||i;return f.useMemo(()=>({[`__scope${e}`]:{...a,[e]:l}}),[a,l])}};return o.scopeName=e,[r,ob(o,...t)]}function ob(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(i){const s=r.reduce((a,{useScope:l,scopeName:c})=>{const u=l(i)[`__scope${c}`];return{...a,...u}},{});return f.useMemo(()=>({[`__scope${t.scopeName}`]:s}),[s])}};return n.scopeName=t.scopeName,n}function bt(e){const t=f.useRef(e);return f.useEffect(()=>{t.current=e}),f.useMemo(()=>(...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},[])}function Sm({prop:e,defaultProp:t,onChange:n=()=>{}}){const[r,o]=ib({defaultProp:t,onChange:n}),i=e!==void 0,s=i?e:r,a=bt(n),l=f.useCallback(c=>{if(i){const u=typeof c=="function"?c(e):c;u!==e&&a(u)}else o(c)},[i,e,o,a]);return[s,l]}function ib({defaultProp:e,onChange:t}){const n=f.useState(e),[r]=n,o=f.useRef(r),i=bt(t);return f.useEffect(()=>{o.current!==r&&(i(r),o.current=r)},[r,o,i]),n}const sb=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],et=sb.reduce((e,t)=>{const n=f.forwardRef((r,o)=>{const{asChild:i,...s}=r,a=i?wr:t;return f.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),f.createElement(a,D({},s,{ref:o}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function Cm(e,t){e&&Bo.flushSync(()=>e.dispatchEvent(t))}function Em(e){const t=e+"CollectionProvider",[n,r]=Uo(t),[o,i]=n(t,{collectionRef:{current:null},itemMap:new Map}),s=g=>{const{scope:b,children:v}=g,x=j.useRef(null),m=j.useRef(new Map).current;return j.createElement(o,{scope:b,itemMap:m,collectionRef:x},v)},a=e+"CollectionSlot",l=j.forwardRef((g,b)=>{const{scope:v,children:x}=g,m=i(a,v),p=Ue(b,m.collectionRef);return j.createElement(wr,{ref:p},x)}),c=e+"CollectionItemSlot",d="data-radix-collection-item",u=j.forwardRef((g,b)=>{const{scope:v,children:x,...m}=g,p=j.useRef(null),y=Ue(b,p),k=i(c,v);return j.useEffect(()=>(k.itemMap.set(p,{ref:p,...m}),()=>void k.itemMap.delete(p))),j.createElement(wr,{[d]:"",ref:y},x)});function h(g){const b=i(e+"CollectionConsumer",g);return j.useCallback(()=>{const x=b.collectionRef.current;if(!x)return[];const m=Array.from(x.querySelectorAll(`[${d}]`));return Array.from(b.itemMap.values()).sort((k,S)=>m.indexOf(k.ref.current)-m.indexOf(S.ref.current))},[b.collectionRef,b.itemMap])}return[{Provider:s,Slot:l,ItemSlot:u},h,r]}const ab=f.createContext(void 0);function Tm(e){const t=f.useContext(ab);return e||t||"ltr"}function lb(e,t=globalThis==null?void 0:globalThis.document){const n=bt(e);f.useEffect(()=>{const r=o=>{o.key==="Escape"&&n(o)};return t.addEventListener("keydown",r),()=>t.removeEventListener("keydown",r)},[n,t])}const Ul="dismissableLayer.update",cb="dismissableLayer.pointerDownOutside",ub="dismissableLayer.focusOutside";let Zd;const db=f.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),fb=f.forwardRef((e,t)=>{var n;const{disableOutsidePointerEvents:r=!1,onEscapeKeyDown:o,onPointerDownOutside:i,onFocusOutside:s,onInteractOutside:a,onDismiss:l,...c}=e,d=f.useContext(db),[u,h]=f.useState(null),g=(n=u==null?void 0:u.ownerDocument)!==null&&n!==void 0?n:globalThis==null?void 0:globalThis.document,[,b]=f.useState({}),v=Ue(t,T=>h(T)),x=Array.from(d.layers),[m]=[...d.layersWithOutsidePointerEventsDisabled].slice(-1),p=x.indexOf(m),y=u?x.indexOf(u):-1,k=d.layersWithOutsidePointerEventsDisabled.size>0,S=y>=p,C=pb(T=>{const N=T.target,M=[...d.branches].some(B=>B.contains(N));!S||M||(i==null||i(T),a==null||a(T),T.defaultPrevented||l==null||l())},g),E=hb(T=>{const N=T.target;[...d.branches].some(B=>B.contains(N))||(s==null||s(T),a==null||a(T),T.defaultPrevented||l==null||l())},g);return lb(T=>{y===d.layers.size-1&&(o==null||o(T),!T.defaultPrevented&&l&&(T.preventDefault(),l()))},g),f.useEffect(()=>{if(u)return r&&(d.layersWithOutsidePointerEventsDisabled.size===0&&(Zd=g.body.style.pointerEvents,g.body.style.pointerEvents="none"),d.layersWithOutsidePointerEventsDisabled.add(u)),d.layers.add(u),ef(),()=>{r&&d.layersWithOutsidePointerEventsDisabled.size===1&&(g.body.style.pointerEvents=Zd)}},[u,g,r,d]),f.useEffect(()=>()=>{u&&(d.layers.delete(u),d.layersWithOutsidePointerEventsDisabled.delete(u),ef())},[u,d]),f.useEffect(()=>{const T=()=>b({});return document.addEventListener(Ul,T),()=>document.removeEventListener(Ul,T)},[]),f.createElement(et.div,D({},c,{ref:v,style:{pointerEvents:k?S?"auto":"none":void 0,...e.style},onFocusCapture:G(e.onFocusCapture,E.onFocusCapture),onBlurCapture:G(e.onBlurCapture,E.onBlurCapture),onPointerDownCapture:G(e.onPointerDownCapture,C.onPointerDownCapture)}))});function pb(e,t=globalThis==null?void 0:globalThis.document){const n=bt(e),r=f.useRef(!1),o=f.useRef(()=>{});return f.useEffect(()=>{const i=a=>{if(a.target&&!r.current){let c=function(){Pm(cb,n,l,{discrete:!0})};const l={originalEvent:a};a.pointerType==="touch"?(t.removeEventListener("click",o.current),o.current=c,t.addEventListener("click",o.current,{once:!0})):c()}else t.removeEventListener("click",o.current);r.current=!1},s=window.setTimeout(()=>{t.addEventListener("pointerdown",i)},0);return()=>{window.clearTimeout(s),t.removeEventListener("pointerdown",i),t.removeEventListener("click",o.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}function hb(e,t=globalThis==null?void 0:globalThis.document){const n=bt(e),r=f.useRef(!1);return f.useEffect(()=>{const o=i=>{i.target&&!r.current&&Pm(ub,n,{originalEvent:i},{discrete:!1})};return t.addEventListener("focusin",o),()=>t.removeEventListener("focusin",o)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function ef(){const e=new CustomEvent(Ul);document.dispatchEvent(e)}function Pm(e,t,n,{discrete:r}){const o=n.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?Cm(o,i):o.dispatchEvent(i)}let Aa=0;function mb(){f.useEffect(()=>{var e,t;const n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",(e=n[0])!==null&&e!==void 0?e:tf()),document.body.insertAdjacentElement("beforeend",(t=n[1])!==null&&t!==void 0?t:tf()),Aa++,()=>{Aa===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(r=>r.remove()),Aa--}},[])}function tf(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}const _a="focusScope.autoFocusOnMount",Ma="focusScope.autoFocusOnUnmount",nf={bubbles:!1,cancelable:!0},gb=f.forwardRef((e,t)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:o,onUnmountAutoFocus:i,...s}=e,[a,l]=f.useState(null),c=bt(o),d=bt(i),u=f.useRef(null),h=Ue(t,v=>l(v)),g=f.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;f.useEffect(()=>{if(r){let v=function(y){if(g.paused||!a)return;const k=y.target;a.contains(k)?u.current=k:Ft(u.current,{select:!0})},x=function(y){if(g.paused||!a)return;const k=y.relatedTarget;k!==null&&(a.contains(k)||Ft(u.current,{select:!0}))},m=function(y){if(document.activeElement===document.body)for(const S of y)S.removedNodes.length>0&&Ft(a)};document.addEventListener("focusin",v),document.addEventListener("focusout",x);const p=new MutationObserver(m);return a&&p.observe(a,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",v),document.removeEventListener("focusout",x),p.disconnect()}}},[r,a,g.paused]),f.useEffect(()=>{if(a){of.add(g);const v=document.activeElement;if(!a.contains(v)){const m=new CustomEvent(_a,nf);a.addEventListener(_a,c),a.dispatchEvent(m),m.defaultPrevented||(vb(kb(Am(a)),{select:!0}),document.activeElement===v&&Ft(a))}return()=>{a.removeEventListener(_a,c),setTimeout(()=>{const m=new CustomEvent(Ma,nf);a.addEventListener(Ma,d),a.dispatchEvent(m),m.defaultPrevented||Ft(v??document.body,{select:!0}),a.removeEventListener(Ma,d),of.remove(g)},0)}}},[a,c,d,g]);const b=f.useCallback(v=>{if(!n&&!r||g.paused)return;const x=v.key==="Tab"&&!v.altKey&&!v.ctrlKey&&!v.metaKey,m=document.activeElement;if(x&&m){const p=v.currentTarget,[y,k]=yb(p);y&&k?!v.shiftKey&&m===k?(v.preventDefault(),n&&Ft(y,{select:!0})):v.shiftKey&&m===y&&(v.preventDefault(),n&&Ft(k,{select:!0})):m===p&&v.preventDefault()}},[n,r,g.paused]);return f.createElement(et.div,D({tabIndex:-1},s,{ref:h,onKeyDown:b}))});function vb(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if(Ft(r,{select:t}),document.activeElement!==n)return}function yb(e){const t=Am(e),n=rf(t,e),r=rf(t.reverse(),e);return[n,r]}function Am(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const o=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||o?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function rf(e,t){for(const n of e)if(!wb(n,{upTo:t}))return n}function wb(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function bb(e){return e instanceof HTMLInputElement&&"select"in e}function Ft(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&bb(e)&&t&&e.select()}}const of=xb();function xb(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=sf(e,t),e.unshift(t)},remove(t){var n;e=sf(e,t),(n=e[0])===null||n===void 0||n.resume()}}}function sf(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function kb(e){return e.filter(t=>t.tagName!=="A")}const xr=globalThis!=null&&globalThis.document?f.useLayoutEffect:()=>{},Sb=Yf.useId||(()=>{});let Cb=0;function Vl(e){const[t,n]=f.useState(Sb());return xr(()=>{e||n(r=>r??String(Cb++))},[e]),e||(t?`radix-${t}`:"")}const Eb=["top","right","bottom","left"],an=Math.min,De=Math.max,ws=Math.round,vi=Math.floor,ln=e=>({x:e,y:e}),Tb={left:"right",right:"left",bottom:"top",top:"bottom"},Pb={start:"end",end:"start"};function Hl(e,t,n){return De(e,an(t,n))}function Nt(e,t){return typeof e=="function"?e(t):e}function $t(e){return e.split("-")[0]}function Mr(e){return e.split("-")[1]}function su(e){return e==="x"?"y":"x"}function au(e){return e==="y"?"height":"width"}function Rr(e){return["top","bottom"].includes($t(e))?"y":"x"}function lu(e){return su(Rr(e))}function Ab(e,t,n){n===void 0&&(n=!1);const r=Mr(e),o=lu(e),i=au(o);let s=o==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[i]>t.floating[i]&&(s=bs(s)),[s,bs(s)]}function _b(e){const t=bs(e);return[Gl(e),t,Gl(t)]}function Gl(e){return e.replace(/start|end/g,t=>Pb[t])}function Mb(e,t,n){const r=["left","right"],o=["right","left"],i=["top","bottom"],s=["bottom","top"];switch(e){case"top":case"bottom":return n?t?o:r:t?r:o;case"left":case"right":return t?i:s;default:return[]}}function Rb(e,t,n,r){const o=Mr(e);let i=Mb($t(e),n==="start",r);return o&&(i=i.map(s=>s+"-"+o),t&&(i=i.concat(i.map(Gl)))),i}function bs(e){return e.replace(/left|right|bottom|top/g,t=>Tb[t])}function Nb(e){return{top:0,right:0,bottom:0,left:0,...e}}function _m(e){return typeof e!="number"?Nb(e):{top:e,right:e,bottom:e,left:e}}function xs(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function af(e,t,n){let{reference:r,floating:o}=e;const i=Rr(t),s=lu(t),a=au(s),l=$t(t),c=i==="y",d=r.x+r.width/2-o.width/2,u=r.y+r.height/2-o.height/2,h=r[a]/2-o[a]/2;let g;switch(l){case"top":g={x:d,y:r.y-o.height};break;case"bottom":g={x:d,y:r.y+r.height};break;case"right":g={x:r.x+r.width,y:u};break;case"left":g={x:r.x-o.width,y:u};break;default:g={x:r.x,y:r.y}}switch(Mr(t)){case"start":g[s]-=h*(n&&c?-1:1);break;case"end":g[s]+=h*(n&&c?-1:1);break}return g}const $b=async(e,t,n)=>{const{placement:r="bottom",strategy:o="absolute",middleware:i=[],platform:s}=n,a=i.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(t));let c=await s.getElementRects({reference:e,floating:t,strategy:o}),{x:d,y:u}=af(c,r,l),h=r,g={},b=0;for(let v=0;v<a.length;v++){const{name:x,fn:m}=a[v],{x:p,y,data:k,reset:S}=await m({x:d,y:u,initialPlacement:r,placement:h,strategy:o,middlewareData:g,rects:c,platform:s,elements:{reference:e,floating:t}});d=p??d,u=y??u,g={...g,[x]:{...g[x],...k}},S&&b<=50&&(b++,typeof S=="object"&&(S.placement&&(h=S.placement),S.rects&&(c=S.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:o}):S.rects),{x:d,y:u}=af(c,h,l)),v=-1)}return{x:d,y:u,placement:h,strategy:o,middlewareData:g}};async function _o(e,t){var n;t===void 0&&(t={});const{x:r,y:o,platform:i,rects:s,elements:a,strategy:l}=e,{boundary:c="clippingAncestors",rootBoundary:d="viewport",elementContext:u="floating",altBoundary:h=!1,padding:g=0}=Nt(t,e),b=_m(g),x=a[h?u==="floating"?"reference":"floating":u],m=xs(await i.getClippingRect({element:(n=await(i.isElement==null?void 0:i.isElement(x)))==null||n?x:x.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(a.floating)),boundary:c,rootBoundary:d,strategy:l})),p=u==="floating"?{...s.floating,x:r,y:o}:s.reference,y=await(i.getOffsetParent==null?void 0:i.getOffsetParent(a.floating)),k=await(i.isElement==null?void 0:i.isElement(y))?await(i.getScale==null?void 0:i.getScale(y))||{x:1,y:1}:{x:1,y:1},S=xs(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:p,offsetParent:y,strategy:l}):p);return{top:(m.top-S.top+b.top)/k.y,bottom:(S.bottom-m.bottom+b.bottom)/k.y,left:(m.left-S.left+b.left)/k.x,right:(S.right-m.right+b.right)/k.x}}const zb=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:r,placement:o,rects:i,platform:s,elements:a,middlewareData:l}=t,{element:c,padding:d=0}=Nt(e,t)||{};if(c==null)return{};const u=_m(d),h={x:n,y:r},g=lu(o),b=au(g),v=await s.getDimensions(c),x=g==="y",m=x?"top":"left",p=x?"bottom":"right",y=x?"clientHeight":"clientWidth",k=i.reference[b]+i.reference[g]-h[g]-i.floating[b],S=h[g]-i.reference[g],C=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c));let E=C?C[y]:0;(!E||!await(s.isElement==null?void 0:s.isElement(C)))&&(E=a.floating[y]||i.floating[b]);const T=k/2-S/2,N=E/2-v[b]/2-1,M=an(u[m],N),B=an(u[p],N),z=M,X=E-v[b]-B,F=E/2-v[b]/2+T,V=Hl(z,F,X),J=!l.arrow&&Mr(o)!=null&&F!==V&&i.reference[b]/2-(F<z?M:B)-v[b]/2<0,W=J?F<z?F-z:F-X:0;return{[g]:h[g]+W,data:{[g]:V,centerOffset:F-V-W,...J&&{alignmentOffset:W}},reset:J}}}),Ib=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:o,middlewareData:i,rects:s,initialPlacement:a,platform:l,elements:c}=t,{mainAxis:d=!0,crossAxis:u=!0,fallbackPlacements:h,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:b="none",flipAlignment:v=!0,...x}=Nt(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};const m=$t(o),p=$t(a)===a,y=await(l.isRTL==null?void 0:l.isRTL(c.floating)),k=h||(p||!v?[bs(a)]:_b(a));!h&&b!=="none"&&k.push(...Rb(a,v,b,y));const S=[a,...k],C=await _o(t,x),E=[];let T=((r=i.flip)==null?void 0:r.overflows)||[];if(d&&E.push(C[m]),u){const z=Ab(o,s,y);E.push(C[z[0]],C[z[1]])}if(T=[...T,{placement:o,overflows:E}],!E.every(z=>z<=0)){var N,M;const z=(((N=i.flip)==null?void 0:N.index)||0)+1,X=S[z];if(X)return{data:{index:z,overflows:T},reset:{placement:X}};let F=(M=T.filter(V=>V.overflows[0]<=0).sort((V,J)=>V.overflows[1]-J.overflows[1])[0])==null?void 0:M.placement;if(!F)switch(g){case"bestFit":{var B;const V=(B=T.map(J=>[J.placement,J.overflows.filter(W=>W>0).reduce((W,_)=>W+_,0)]).sort((J,W)=>J[1]-W[1])[0])==null?void 0:B[0];V&&(F=V);break}case"initialPlacement":F=a;break}if(o!==F)return{reset:{placement:F}}}return{}}}};function lf(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function cf(e){return Eb.some(t=>e[t]>=0)}const jb=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:n}=t,{strategy:r="referenceHidden",...o}=Nt(e,t);switch(r){case"referenceHidden":{const i=await _o(t,{...o,elementContext:"reference"}),s=lf(i,n.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:cf(s)}}}case"escaped":{const i=await _o(t,{...o,altBoundary:!0}),s=lf(i,n.floating);return{data:{escapedOffsets:s,escaped:cf(s)}}}default:return{}}}}};async function Lb(e,t){const{placement:n,platform:r,elements:o}=e,i=await(r.isRTL==null?void 0:r.isRTL(o.floating)),s=$t(n),a=Mr(n),l=Rr(n)==="y",c=["left","top"].includes(s)?-1:1,d=i&&l?-1:1,u=Nt(t,e);let{mainAxis:h,crossAxis:g,alignmentAxis:b}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return a&&typeof b=="number"&&(g=a==="end"?b*-1:b),l?{x:g*d,y:h*c}:{x:h*c,y:g*d}}const Db=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var n,r;const{x:o,y:i,placement:s,middlewareData:a}=t,l=await Lb(t,e);return s===((n=a.offset)==null?void 0:n.placement)&&(r=a.arrow)!=null&&r.alignmentOffset?{}:{x:o+l.x,y:i+l.y,data:{...l,placement:s}}}}},Ob=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:o}=t,{mainAxis:i=!0,crossAxis:s=!1,limiter:a={fn:x=>{let{x:m,y:p}=x;return{x:m,y:p}}},...l}=Nt(e,t),c={x:n,y:r},d=await _o(t,l),u=Rr($t(o)),h=su(u);let g=c[h],b=c[u];if(i){const x=h==="y"?"top":"left",m=h==="y"?"bottom":"right",p=g+d[x],y=g-d[m];g=Hl(p,g,y)}if(s){const x=u==="y"?"top":"left",m=u==="y"?"bottom":"right",p=b+d[x],y=b-d[m];b=Hl(p,b,y)}const v=a.fn({...t,[h]:g,[u]:b});return{...v,data:{x:v.x-n,y:v.y-r}}}}},Bb=function(e){return e===void 0&&(e={}),{options:e,fn(t){const{x:n,y:r,placement:o,rects:i,middlewareData:s}=t,{offset:a=0,mainAxis:l=!0,crossAxis:c=!0}=Nt(e,t),d={x:n,y:r},u=Rr(o),h=su(u);let g=d[h],b=d[u];const v=Nt(a,t),x=typeof v=="number"?{mainAxis:v,crossAxis:0}:{mainAxis:0,crossAxis:0,...v};if(l){const y=h==="y"?"height":"width",k=i.reference[h]-i.floating[y]+x.mainAxis,S=i.reference[h]+i.reference[y]-x.mainAxis;g<k?g=k:g>S&&(g=S)}if(c){var m,p;const y=h==="y"?"width":"height",k=["top","left"].includes($t(o)),S=i.reference[u]-i.floating[y]+(k&&((m=s.offset)==null?void 0:m[u])||0)+(k?0:x.crossAxis),C=i.reference[u]+i.reference[y]+(k?0:((p=s.offset)==null?void 0:p[u])||0)-(k?x.crossAxis:0);b<S?b=S:b>C&&(b=C)}return{[h]:g,[u]:b}}}},Fb=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:n,rects:r,platform:o,elements:i}=t,{apply:s=()=>{},...a}=Nt(e,t),l=await _o(t,a),c=$t(n),d=Mr(n),u=Rr(n)==="y",{width:h,height:g}=r.floating;let b,v;c==="top"||c==="bottom"?(b=c,v=d===(await(o.isRTL==null?void 0:o.isRTL(i.floating))?"start":"end")?"left":"right"):(v=c,b=d==="end"?"top":"bottom");const x=g-l[b],m=h-l[v],p=!t.middlewareData.shift;let y=x,k=m;if(u){const C=h-l.left-l.right;k=d||p?an(m,C):C}else{const C=g-l.top-l.bottom;y=d||p?an(x,C):C}if(p&&!d){const C=De(l.left,0),E=De(l.right,0),T=De(l.top,0),N=De(l.bottom,0);u?k=h-2*(C!==0||E!==0?C+E:De(l.left,l.right)):y=g-2*(T!==0||N!==0?T+N:De(l.top,l.bottom))}await s({...t,availableWidth:k,availableHeight:y});const S=await o.getDimensions(i.floating);return h!==S.width||g!==S.height?{reset:{rects:!0}}:{}}}};function cn(e){return Mm(e)?(e.nodeName||"").toLowerCase():"#document"}function Fe(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function jt(e){var t;return(t=(Mm(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Mm(e){return e instanceof Node||e instanceof Fe(e).Node}function zt(e){return e instanceof Element||e instanceof Fe(e).Element}function xt(e){return e instanceof HTMLElement||e instanceof Fe(e).HTMLElement}function uf(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Fe(e).ShadowRoot}function Vo(e){const{overflow:t,overflowX:n,overflowY:r,display:o}=Ze(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(o)}function Wb(e){return["table","td","th"].includes(cn(e))}function cu(e){const t=uu(),n=Ze(e);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(r=>(n.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(n.contain||"").includes(r))}function Ub(e){let t=kr(e);for(;xt(t)&&!Qs(t);){if(cu(t))return t;t=kr(t)}return null}function uu(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Qs(e){return["html","body","#document"].includes(cn(e))}function Ze(e){return Fe(e).getComputedStyle(e)}function Ks(e){return zt(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function kr(e){if(cn(e)==="html")return e;const t=e.assignedSlot||e.parentNode||uf(e)&&e.host||jt(e);return uf(t)?t.host:t}function Rm(e){const t=kr(e);return Qs(t)?e.ownerDocument?e.ownerDocument.body:e.body:xt(t)&&Vo(t)?t:Rm(t)}function Mo(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const o=Rm(e),i=o===((r=e.ownerDocument)==null?void 0:r.body),s=Fe(o);return i?t.concat(s,s.visualViewport||[],Vo(o)?o:[],s.frameElement&&n?Mo(s.frameElement):[]):t.concat(o,Mo(o,[],n))}function Nm(e){const t=Ze(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const o=xt(e),i=o?e.offsetWidth:n,s=o?e.offsetHeight:r,a=ws(n)!==i||ws(r)!==s;return a&&(n=i,r=s),{width:n,height:r,$:a}}function du(e){return zt(e)?e:e.contextElement}function sr(e){const t=du(e);if(!xt(t))return ln(1);const n=t.getBoundingClientRect(),{width:r,height:o,$:i}=Nm(t);let s=(i?ws(n.width):n.width)/r,a=(i?ws(n.height):n.height)/o;return(!s||!Number.isFinite(s))&&(s=1),(!a||!Number.isFinite(a))&&(a=1),{x:s,y:a}}const Vb=ln(0);function $m(e){const t=Fe(e);return!uu()||!t.visualViewport?Vb:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Hb(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==Fe(e)?!1:t}function _n(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const o=e.getBoundingClientRect(),i=du(e);let s=ln(1);t&&(r?zt(r)&&(s=sr(r)):s=sr(e));const a=Hb(i,n,r)?$m(i):ln(0);let l=(o.left+a.x)/s.x,c=(o.top+a.y)/s.y,d=o.width/s.x,u=o.height/s.y;if(i){const h=Fe(i),g=r&&zt(r)?Fe(r):r;let b=h,v=b.frameElement;for(;v&&r&&g!==b;){const x=sr(v),m=v.getBoundingClientRect(),p=Ze(v),y=m.left+(v.clientLeft+parseFloat(p.paddingLeft))*x.x,k=m.top+(v.clientTop+parseFloat(p.paddingTop))*x.y;l*=x.x,c*=x.y,d*=x.x,u*=x.y,l+=y,c+=k,b=Fe(v),v=b.frameElement}}return xs({width:d,height:u,x:l,y:c})}const Gb=[":popover-open",":modal"];function zm(e){return Gb.some(t=>{try{return e.matches(t)}catch{return!1}})}function Qb(e){let{elements:t,rect:n,offsetParent:r,strategy:o}=e;const i=o==="fixed",s=jt(r),a=t?zm(t.floating):!1;if(r===s||a&&i)return n;let l={scrollLeft:0,scrollTop:0},c=ln(1);const d=ln(0),u=xt(r);if((u||!u&&!i)&&((cn(r)!=="body"||Vo(s))&&(l=Ks(r)),xt(r))){const h=_n(r);c=sr(r),d.x=h.x+r.clientLeft,d.y=h.y+r.clientTop}return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-l.scrollLeft*c.x+d.x,y:n.y*c.y-l.scrollTop*c.y+d.y}}function Kb(e){return Array.from(e.getClientRects())}function Im(e){return _n(jt(e)).left+Ks(e).scrollLeft}function Yb(e){const t=jt(e),n=Ks(e),r=e.ownerDocument.body,o=De(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),i=De(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let s=-n.scrollLeft+Im(e);const a=-n.scrollTop;return Ze(r).direction==="rtl"&&(s+=De(t.clientWidth,r.clientWidth)-o),{width:o,height:i,x:s,y:a}}function qb(e,t){const n=Fe(e),r=jt(e),o=n.visualViewport;let i=r.clientWidth,s=r.clientHeight,a=0,l=0;if(o){i=o.width,s=o.height;const c=uu();(!c||c&&t==="fixed")&&(a=o.offsetLeft,l=o.offsetTop)}return{width:i,height:s,x:a,y:l}}function Jb(e,t){const n=_n(e,!0,t==="fixed"),r=n.top+e.clientTop,o=n.left+e.clientLeft,i=xt(e)?sr(e):ln(1),s=e.clientWidth*i.x,a=e.clientHeight*i.y,l=o*i.x,c=r*i.y;return{width:s,height:a,x:l,y:c}}function df(e,t,n){let r;if(t==="viewport")r=qb(e,n);else if(t==="document")r=Yb(jt(e));else if(zt(t))r=Jb(t,n);else{const o=$m(e);r={...t,x:t.x-o.x,y:t.y-o.y}}return xs(r)}function jm(e,t){const n=kr(e);return n===t||!zt(n)||Qs(n)?!1:Ze(n).position==="fixed"||jm(n,t)}function Xb(e,t){const n=t.get(e);if(n)return n;let r=Mo(e,[],!1).filter(a=>zt(a)&&cn(a)!=="body"),o=null;const i=Ze(e).position==="fixed";let s=i?kr(e):e;for(;zt(s)&&!Qs(s);){const a=Ze(s),l=cu(s);!l&&a.position==="fixed"&&(o=null),(i?!l&&!o:!l&&a.position==="static"&&!!o&&["absolute","fixed"].includes(o.position)||Vo(s)&&!l&&jm(e,s))?r=r.filter(d=>d!==s):o=a,s=kr(s)}return t.set(e,r),r}function Zb(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e;const s=[...n==="clippingAncestors"?Xb(t,this._c):[].concat(n),r],a=s[0],l=s.reduce((c,d)=>{const u=df(t,d,o);return c.top=De(u.top,c.top),c.right=an(u.right,c.right),c.bottom=an(u.bottom,c.bottom),c.left=De(u.left,c.left),c},df(t,a,o));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function ex(e){const{width:t,height:n}=Nm(e);return{width:t,height:n}}function tx(e,t,n){const r=xt(t),o=jt(t),i=n==="fixed",s=_n(e,!0,i,t);let a={scrollLeft:0,scrollTop:0};const l=ln(0);if(r||!r&&!i)if((cn(t)!=="body"||Vo(o))&&(a=Ks(t)),r){const u=_n(t,!0,i,t);l.x=u.x+t.clientLeft,l.y=u.y+t.clientTop}else o&&(l.x=Im(o));const c=s.left+a.scrollLeft-l.x,d=s.top+a.scrollTop-l.y;return{x:c,y:d,width:s.width,height:s.height}}function ff(e,t){return!xt(e)||Ze(e).position==="fixed"?null:t?t(e):e.offsetParent}function Lm(e,t){const n=Fe(e);if(!xt(e)||zm(e))return n;let r=ff(e,t);for(;r&&Wb(r)&&Ze(r).position==="static";)r=ff(r,t);return r&&(cn(r)==="html"||cn(r)==="body"&&Ze(r).position==="static"&&!cu(r))?n:r||Ub(e)||n}const nx=async function(e){const t=this.getOffsetParent||Lm,n=this.getDimensions;return{reference:tx(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,...await n(e.floating)}}};function rx(e){return Ze(e).direction==="rtl"}const ox={convertOffsetParentRelativeRectToViewportRelativeRect:Qb,getDocumentElement:jt,getClippingRect:Zb,getOffsetParent:Lm,getElementRects:nx,getClientRects:Kb,getDimensions:ex,getScale:sr,isElement:zt,isRTL:rx};function ix(e,t){let n=null,r;const o=jt(e);function i(){var a;clearTimeout(r),(a=n)==null||a.disconnect(),n=null}function s(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),i();const{left:c,top:d,width:u,height:h}=e.getBoundingClientRect();if(a||t(),!u||!h)return;const g=vi(d),b=vi(o.clientWidth-(c+u)),v=vi(o.clientHeight-(d+h)),x=vi(c),p={rootMargin:-g+"px "+-b+"px "+-v+"px "+-x+"px",threshold:De(0,an(1,l))||1};let y=!0;function k(S){const C=S[0].intersectionRatio;if(C!==l){if(!y)return s();C?s(!1,C):r=setTimeout(()=>{s(!1,1e-7)},100)}y=!1}try{n=new IntersectionObserver(k,{...p,root:o.ownerDocument})}catch{n=new IntersectionObserver(k,p)}n.observe(e)}return s(!0),i}function sx(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:o=!0,ancestorResize:i=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=r,c=du(e),d=o||i?[...c?Mo(c):[],...Mo(t)]:[];d.forEach(m=>{o&&m.addEventListener("scroll",n,{passive:!0}),i&&m.addEventListener("resize",n)});const u=c&&a?ix(c,n):null;let h=-1,g=null;s&&(g=new ResizeObserver(m=>{let[p]=m;p&&p.target===c&&g&&(g.unobserve(t),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var y;(y=g)==null||y.observe(t)})),n()}),c&&!l&&g.observe(c),g.observe(t));let b,v=l?_n(e):null;l&&x();function x(){const m=_n(e);v&&(m.x!==v.x||m.y!==v.y||m.width!==v.width||m.height!==v.height)&&n(),v=m,b=requestAnimationFrame(x)}return n(),()=>{var m;d.forEach(p=>{o&&p.removeEventListener("scroll",n),i&&p.removeEventListener("resize",n)}),u==null||u(),(m=g)==null||m.disconnect(),g=null,l&&cancelAnimationFrame(b)}}const ax=Ob,lx=Ib,cx=Fb,ux=jb,pf=zb,dx=Bb,fx=(e,t,n)=>{const r=new Map,o={platform:ox,...n},i={...o.platform,_c:r};return $b(e,t,{...o,platform:i})},px=e=>{function t(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:e,fn(n){const{element:r,padding:o}=typeof e=="function"?e(n):e;return r&&t(r)?r.current!=null?pf({element:r.current,padding:o}).fn(n):{}:r?pf({element:r,padding:o}).fn(n):{}}}};var Di=typeof document<"u"?f.useLayoutEffect:f.useEffect;function ks(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,r,o;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(r=n;r--!==0;)if(!ks(e[r],t[r]))return!1;return!0}if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!{}.hasOwnProperty.call(t,o[r]))return!1;for(r=n;r--!==0;){const i=o[r];if(!(i==="_owner"&&e.$$typeof)&&!ks(e[i],t[i]))return!1}return!0}return e!==e&&t!==t}function Dm(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function hf(e,t){const n=Dm(e);return Math.round(t*n)/n}function mf(e){const t=f.useRef(e);return Di(()=>{t.current=e}),t}function hx(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:r=[],platform:o,elements:{reference:i,floating:s}={},transform:a=!0,whileElementsMounted:l,open:c}=e,[d,u]=f.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[h,g]=f.useState(r);ks(h,r)||g(r);const[b,v]=f.useState(null),[x,m]=f.useState(null),p=f.useCallback(W=>{W!==C.current&&(C.current=W,v(W))},[]),y=f.useCallback(W=>{W!==E.current&&(E.current=W,m(W))},[]),k=i||b,S=s||x,C=f.useRef(null),E=f.useRef(null),T=f.useRef(d),N=l!=null,M=mf(l),B=mf(o),z=f.useCallback(()=>{if(!C.current||!E.current)return;const W={placement:t,strategy:n,middleware:h};B.current&&(W.platform=B.current),fx(C.current,E.current,W).then(_=>{const P={..._,isPositioned:!0};X.current&&!ks(T.current,P)&&(T.current=P,Bo.flushSync(()=>{u(P)}))})},[h,t,n,B]);Di(()=>{c===!1&&T.current.isPositioned&&(T.current.isPositioned=!1,u(W=>({...W,isPositioned:!1})))},[c]);const X=f.useRef(!1);Di(()=>(X.current=!0,()=>{X.current=!1}),[]),Di(()=>{if(k&&(C.current=k),S&&(E.current=S),k&&S){if(M.current)return M.current(k,S,z);z()}},[k,S,z,M,N]);const F=f.useMemo(()=>({reference:C,floating:E,setReference:p,setFloating:y}),[p,y]),V=f.useMemo(()=>({reference:k,floating:S}),[k,S]),J=f.useMemo(()=>{const W={position:n,left:0,top:0};if(!V.floating)return W;const _=hf(V.floating,d.x),P=hf(V.floating,d.y);return a?{...W,transform:"translate("+_+"px, "+P+"px)",...Dm(V.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:_,top:P}},[n,a,V.floating,d.x,d.y]);return f.useMemo(()=>({...d,update:z,refs:F,elements:V,floatingStyles:J}),[d,z,F,V,J])}function mx(e){const[t,n]=f.useState(void 0);return xr(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(o=>{if(!Array.isArray(o)||!o.length)return;const i=o[0];let s,a;if("borderBoxSize"in i){const l=i.borderBoxSize,c=Array.isArray(l)?l[0]:l;s=c.inlineSize,a=c.blockSize}else s=e.offsetWidth,a=e.offsetHeight;n({width:s,height:a})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else n(void 0)},[e]),t}const Om="Popper",[Bm,Fm]=Uo(Om),[gx,Wm]=Bm(Om),vx=e=>{const{__scopePopper:t,children:n}=e,[r,o]=f.useState(null);return f.createElement(gx,{scope:t,anchor:r,onAnchorChange:o},n)},yx="PopperAnchor",wx=f.forwardRef((e,t)=>{const{__scopePopper:n,virtualRef:r,...o}=e,i=Wm(yx,n),s=f.useRef(null),a=Ue(t,s);return f.useEffect(()=>{i.onAnchorChange((r==null?void 0:r.current)||s.current)}),r?null:f.createElement(et.div,D({},o,{ref:a}))}),Um="PopperContent",[bx,mC]=Bm(Um),xx=f.forwardRef((e,t)=>{var n,r,o,i,s,a,l,c;const{__scopePopper:d,side:u="bottom",sideOffset:h=0,align:g="center",alignOffset:b=0,arrowPadding:v=0,avoidCollisions:x=!0,collisionBoundary:m=[],collisionPadding:p=0,sticky:y="partial",hideWhenDetached:k=!1,updatePositionStrategy:S="optimized",onPlaced:C,...E}=e,T=Wm(Um,d),[N,M]=f.useState(null),B=Ue(t,Nr=>M(Nr)),[z,X]=f.useState(null),F=mx(z),V=(n=F==null?void 0:F.width)!==null&&n!==void 0?n:0,J=(r=F==null?void 0:F.height)!==null&&r!==void 0?r:0,W=u+(g!=="center"?"-"+g:""),_=typeof p=="number"?p:{top:0,right:0,bottom:0,left:0,...p},P=Array.isArray(m)?m:[m],$=P.length>0,L={padding:_,boundary:P.filter(kx),altBoundary:$},{refs:Q,floatingStyles:ze,placement:Ie,isPositioned:nt,middlewareData:de}=hx({strategy:"fixed",placement:W,whileElementsMounted:(...Nr)=>sx(...Nr,{animationFrame:S==="always"}),elements:{reference:T.anchor},middleware:[Db({mainAxis:h+J,alignmentAxis:b}),x&&ax({mainAxis:!0,crossAxis:!1,limiter:y==="partial"?dx():void 0,...L}),x&&lx({...L}),cx({...L,apply:({elements:Nr,rects:Pu,availableWidth:av,availableHeight:lv})=>{const{width:cv,height:uv}=Pu.reference,qo=Nr.floating.style;qo.setProperty("--radix-popper-available-width",`${av}px`),qo.setProperty("--radix-popper-available-height",`${lv}px`),qo.setProperty("--radix-popper-anchor-width",`${cv}px`),qo.setProperty("--radix-popper-anchor-height",`${uv}px`)}}),z&&px({element:z,padding:v}),Sx({arrowWidth:V,arrowHeight:J}),k&&ux({strategy:"referenceHidden",...L})]}),[je,Ko]=Vm(Ie),Ae=bt(C);xr(()=>{nt&&(Ae==null||Ae())},[nt,Ae]);const Yo=(o=de.arrow)===null||o===void 0?void 0:o.x,rv=(i=de.arrow)===null||i===void 0?void 0:i.y,ov=((s=de.arrow)===null||s===void 0?void 0:s.centerOffset)!==0,[iv,sv]=f.useState();return xr(()=>{N&&sv(window.getComputedStyle(N).zIndex)},[N]),f.createElement("div",{ref:Q.setFloating,"data-radix-popper-content-wrapper":"",style:{...ze,transform:nt?ze.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:iv,"--radix-popper-transform-origin":[(a=de.transformOrigin)===null||a===void 0?void 0:a.x,(l=de.transformOrigin)===null||l===void 0?void 0:l.y].join(" ")},dir:e.dir},f.createElement(bx,{scope:d,placedSide:je,onArrowChange:X,arrowX:Yo,arrowY:rv,shouldHideArrow:ov},f.createElement(et.div,D({"data-side":je,"data-align":Ko},E,{ref:B,style:{...E.style,animation:nt?void 0:"none",opacity:(c=de.hide)!==null&&c!==void 0&&c.referenceHidden?0:void 0}}))))});function kx(e){return e!==null}const Sx=e=>({name:"transformOrigin",options:e,fn(t){var n,r,o,i,s;const{placement:a,rects:l,middlewareData:c}=t,u=((n=c.arrow)===null||n===void 0?void 0:n.centerOffset)!==0,h=u?0:e.arrowWidth,g=u?0:e.arrowHeight,[b,v]=Vm(a),x={start:"0%",center:"50%",end:"100%"}[v],m=((r=(o=c.arrow)===null||o===void 0?void 0:o.x)!==null&&r!==void 0?r:0)+h/2,p=((i=(s=c.arrow)===null||s===void 0?void 0:s.y)!==null&&i!==void 0?i:0)+g/2;let y="",k="";return b==="bottom"?(y=u?x:`${m}px`,k=`${-g}px`):b==="top"?(y=u?x:`${m}px`,k=`${l.floating.height+g}px`):b==="right"?(y=`${-g}px`,k=u?x:`${p}px`):b==="left"&&(y=`${l.floating.width+g}px`,k=u?x:`${p}px`),{data:{x:y,y:k}}}});function Vm(e){const[t,n="center"]=e.split("-");return[t,n]}const Cx=vx,Ex=wx,Tx=xx,Px=f.forwardRef((e,t)=>{var n;const{container:r=globalThis==null||(n=globalThis.document)===null||n===void 0?void 0:n.body,...o}=e;return r?Dy.createPortal(f.createElement(et.div,D({},o,{ref:t})),r):null});function Ax(e,t){return f.useReducer((n,r)=>{const o=t[n][r];return o??n},e)}const Ho=e=>{const{present:t,children:n}=e,r=_x(t),o=typeof n=="function"?n({present:r.isPresent}):f.Children.only(n),i=Ue(r.ref,o.ref);return typeof n=="function"||r.isPresent?f.cloneElement(o,{ref:i}):null};Ho.displayName="Presence";function _x(e){const[t,n]=f.useState(),r=f.useRef({}),o=f.useRef(e),i=f.useRef("none"),s=e?"mounted":"unmounted",[a,l]=Ax(s,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return f.useEffect(()=>{const c=yi(r.current);i.current=a==="mounted"?c:"none"},[a]),xr(()=>{const c=r.current,d=o.current;if(d!==e){const h=i.current,g=yi(c);e?l("MOUNT"):g==="none"||(c==null?void 0:c.display)==="none"?l("UNMOUNT"):l(d&&h!==g?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,l]),xr(()=>{if(t){const c=u=>{const g=yi(r.current).includes(u.animationName);u.target===t&&g&&Bo.flushSync(()=>l("ANIMATION_END"))},d=u=>{u.target===t&&(i.current=yi(r.current))};return t.addEventListener("animationstart",d),t.addEventListener("animationcancel",c),t.addEventListener("animationend",c),()=>{t.removeEventListener("animationstart",d),t.removeEventListener("animationcancel",c),t.removeEventListener("animationend",c)}}else l("ANIMATION_END")},[t,l]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:f.useCallback(c=>{c&&(r.current=getComputedStyle(c)),n(c)},[])}}function yi(e){return(e==null?void 0:e.animationName)||"none"}const Ra="rovingFocusGroup.onEntryFocus",Mx={bubbles:!1,cancelable:!0},fu="RovingFocusGroup",[Ql,Hm,Rx]=Em(fu),[Nx,Gm]=Uo(fu,[Rx]),[$x,zx]=Nx(fu),Ix=f.forwardRef((e,t)=>f.createElement(Ql.Provider,{scope:e.__scopeRovingFocusGroup},f.createElement(Ql.Slot,{scope:e.__scopeRovingFocusGroup},f.createElement(jx,D({},e,{ref:t}))))),jx=f.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:n,orientation:r,loop:o=!1,dir:i,currentTabStopId:s,defaultCurrentTabStopId:a,onCurrentTabStopIdChange:l,onEntryFocus:c,...d}=e,u=f.useRef(null),h=Ue(t,u),g=Tm(i),[b=null,v]=Sm({prop:s,defaultProp:a,onChange:l}),[x,m]=f.useState(!1),p=bt(c),y=Hm(n),k=f.useRef(!1),[S,C]=f.useState(0);return f.useEffect(()=>{const E=u.current;if(E)return E.addEventListener(Ra,p),()=>E.removeEventListener(Ra,p)},[p]),f.createElement($x,{scope:n,orientation:r,dir:g,loop:o,currentTabStopId:b,onItemFocus:f.useCallback(E=>v(E),[v]),onItemShiftTab:f.useCallback(()=>m(!0),[]),onFocusableItemAdd:f.useCallback(()=>C(E=>E+1),[]),onFocusableItemRemove:f.useCallback(()=>C(E=>E-1),[])},f.createElement(et.div,D({tabIndex:x||S===0?-1:0,"data-orientation":r},d,{ref:h,style:{outline:"none",...e.style},onMouseDown:G(e.onMouseDown,()=>{k.current=!0}),onFocus:G(e.onFocus,E=>{const T=!k.current;if(E.target===E.currentTarget&&T&&!x){const N=new CustomEvent(Ra,Mx);if(E.currentTarget.dispatchEvent(N),!N.defaultPrevented){const M=y().filter(V=>V.focusable),B=M.find(V=>V.active),z=M.find(V=>V.id===b),F=[B,z,...M].filter(Boolean).map(V=>V.ref.current);Qm(F)}}k.current=!1}),onBlur:G(e.onBlur,()=>m(!1))})))}),Lx="RovingFocusGroupItem",Dx=f.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:n,focusable:r=!0,active:o=!1,tabStopId:i,...s}=e,a=Vl(),l=i||a,c=zx(Lx,n),d=c.currentTabStopId===l,u=Hm(n),{onFocusableItemAdd:h,onFocusableItemRemove:g}=c;return f.useEffect(()=>{if(r)return h(),()=>g()},[r,h,g]),f.createElement(Ql.ItemSlot,{scope:n,id:l,focusable:r,active:o},f.createElement(et.span,D({tabIndex:d?0:-1,"data-orientation":c.orientation},s,{ref:t,onMouseDown:G(e.onMouseDown,b=>{r?c.onItemFocus(l):b.preventDefault()}),onFocus:G(e.onFocus,()=>c.onItemFocus(l)),onKeyDown:G(e.onKeyDown,b=>{if(b.key==="Tab"&&b.shiftKey){c.onItemShiftTab();return}if(b.target!==b.currentTarget)return;const v=Fx(b,c.orientation,c.dir);if(v!==void 0){b.preventDefault();let m=u().filter(p=>p.focusable).map(p=>p.ref.current);if(v==="last")m.reverse();else if(v==="prev"||v==="next"){v==="prev"&&m.reverse();const p=m.indexOf(b.currentTarget);m=c.loop?Wx(m,p+1):m.slice(p+1)}setTimeout(()=>Qm(m))}})})))}),Ox={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function Bx(e,t){return t!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function Fx(e,t,n){const r=Bx(e.key,n);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(r))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(r)))return Ox[r]}function Qm(e){const t=document.activeElement;for(const n of e)if(n===t||(n.focus(),document.activeElement!==t))return}function Wx(e,t){return e.map((n,r)=>e[(t+r)%e.length])}const Ux=Ix,Vx=Dx;var Hx=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},Dn=new WeakMap,wi=new WeakMap,bi={},Na=0,Km=function(e){return e&&(e.host||Km(e.parentNode))},Gx=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=Km(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},Qx=function(e,t,n,r){var o=Gx(t,Array.isArray(e)?e:[e]);bi[n]||(bi[n]=new WeakMap);var i=bi[n],s=[],a=new Set,l=new Set(o),c=function(u){!u||a.has(u)||(a.add(u),c(u.parentNode))};o.forEach(c);var d=function(u){!u||l.has(u)||Array.prototype.forEach.call(u.children,function(h){if(a.has(h))d(h);else{var g=h.getAttribute(r),b=g!==null&&g!=="false",v=(Dn.get(h)||0)+1,x=(i.get(h)||0)+1;Dn.set(h,v),i.set(h,x),s.push(h),v===1&&b&&wi.set(h,!0),x===1&&h.setAttribute(n,"true"),b||h.setAttribute(r,"true")}})};return d(t),a.clear(),Na++,function(){s.forEach(function(u){var h=Dn.get(u)-1,g=i.get(u)-1;Dn.set(u,h),i.set(u,g),h||(wi.has(u)||u.removeAttribute(r),wi.delete(u)),g||u.removeAttribute(n)}),Na--,Na||(Dn=new WeakMap,Dn=new WeakMap,wi=new WeakMap,bi={})}},Kx=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=t||Hx(e);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),Qx(r,o,n,"aria-hidden")):function(){return null}},vt=function(){return vt=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},vt.apply(this,arguments)};function Ym(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function Yx(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var Oi="right-scroll-bar-position",Bi="width-before-scroll-bar",qx="with-scroll-bars-hidden",Jx="--removed-body-scroll-bar-size";function $a(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function Xx(e,t){var n=f.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var o=n.value;o!==r&&(n.value=r,n.callback(r,o))}}}})[0];return n.callback=t,n.facade}var gf=new WeakMap;function Zx(e,t){var n=Xx(t||null,function(r){return e.forEach(function(o){return $a(o,r)})});return f.useLayoutEffect(function(){var r=gf.get(n);if(r){var o=new Set(r),i=new Set(e),s=n.current;o.forEach(function(a){i.has(a)||$a(a,null)}),i.forEach(function(a){o.has(a)||$a(a,s)})}gf.set(n,e)},[e]),n}function e2(e){return e}function t2(e,t){t===void 0&&(t=e2);var n=[],r=!1,o={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(i){var s=t(i,r);return n.push(s),function(){n=n.filter(function(a){return a!==s})}},assignSyncMedium:function(i){for(r=!0;n.length;){var s=n;n=[],s.forEach(i)}n={push:function(a){return i(a)},filter:function(){return n}}},assignMedium:function(i){r=!0;var s=[];if(n.length){var a=n;n=[],a.forEach(i),s=n}var l=function(){var d=s;s=[],d.forEach(i)},c=function(){return Promise.resolve().then(l)};c(),n={push:function(d){s.push(d),c()},filter:function(d){return s=s.filter(d),n}}}};return o}function n2(e){e===void 0&&(e={});var t=t2(null);return t.options=vt({async:!0,ssr:!1},e),t}var qm=function(e){var t=e.sideCar,n=Ym(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return f.createElement(r,vt({},n))};qm.isSideCarExport=!0;function r2(e,t){return e.useMedium(t),qm}var Jm=n2(),za=function(){},Ys=f.forwardRef(function(e,t){var n=f.useRef(null),r=f.useState({onScrollCapture:za,onWheelCapture:za,onTouchMoveCapture:za}),o=r[0],i=r[1],s=e.forwardProps,a=e.children,l=e.className,c=e.removeScrollBar,d=e.enabled,u=e.shards,h=e.sideCar,g=e.noIsolation,b=e.inert,v=e.allowPinchZoom,x=e.as,m=x===void 0?"div":x,p=Ym(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),y=h,k=Zx([n,t]),S=vt(vt({},p),o);return f.createElement(f.Fragment,null,d&&f.createElement(y,{sideCar:Jm,removeScrollBar:c,shards:u,noIsolation:g,inert:b,setCallbacks:i,allowPinchZoom:!!v,lockRef:n}),s?f.cloneElement(f.Children.only(a),vt(vt({},S),{ref:k})):f.createElement(m,vt({},S,{className:l,ref:k}),a))});Ys.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};Ys.classNames={fullWidth:Bi,zeroRight:Oi};var o2=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function i2(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=o2();return t&&e.setAttribute("nonce",t),e}function s2(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function a2(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var l2=function(){var e=0,t=null;return{add:function(n){e==0&&(t=i2())&&(s2(t,n),a2(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},c2=function(){var e=l2();return function(t,n){f.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},Xm=function(){var e=c2(),t=function(n){var r=n.styles,o=n.dynamic;return e(r,o),null};return t},u2={left:0,top:0,right:0,gap:0},Ia=function(e){return parseInt(e||"",10)||0},d2=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],o=t[e==="padding"?"paddingRight":"marginRight"];return[Ia(n),Ia(r),Ia(o)]},f2=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return u2;var t=d2(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},p2=Xm(),Ss="data-scroll-locked",h2=function(e,t,n,r){var o=e.left,i=e.top,s=e.right,a=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(qx,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(a,"px ").concat(r,`;
  }
  body[`).concat(Ss,`] {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(o,`px;
    padding-top: `).concat(i,`px;
    padding-right: `).concat(s,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(a,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(Oi,` {
    right: `).concat(a,"px ").concat(r,`;
  }
  
  .`).concat(Bi,` {
    margin-right: `).concat(a,"px ").concat(r,`;
  }
  
  .`).concat(Oi," .").concat(Oi,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(Bi," .").concat(Bi,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(Ss,`] {
    `).concat(Jx,": ").concat(a,`px;
  }
`)},m2=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=r===void 0?"margin":r,i=f.useMemo(function(){return f2(o)},[o]);return f.useEffect(function(){return document.body.setAttribute(Ss,""),function(){document.body.removeAttribute(Ss)}},[]),f.createElement(p2,{styles:h2(i,!t,o,n?"":"!important")})},Kl=!1;if(typeof window<"u")try{var xi=Object.defineProperty({},"passive",{get:function(){return Kl=!0,!0}});window.addEventListener("test",xi,xi),window.removeEventListener("test",xi,xi)}catch{Kl=!1}var On=Kl?{passive:!1}:!1,g2=function(e){return e.tagName==="TEXTAREA"},Zm=function(e,t){var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!g2(e)&&n[t]==="visible")},v2=function(e){return Zm(e,"overflowY")},y2=function(e){return Zm(e,"overflowX")},vf=function(e,t){var n=t;do{typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&(n=n.host);var r=eg(e,n);if(r){var o=tg(e,n),i=o[1],s=o[2];if(i>s)return!0}n=n.parentNode}while(n&&n!==document.body);return!1},w2=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},b2=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},eg=function(e,t){return e==="v"?v2(t):y2(t)},tg=function(e,t){return e==="v"?w2(t):b2(t)},x2=function(e,t){return e==="h"&&t==="rtl"?-1:1},k2=function(e,t,n,r,o){var i=x2(e,window.getComputedStyle(t).direction),s=i*r,a=n.target,l=t.contains(a),c=!1,d=s>0,u=0,h=0;do{var g=tg(e,a),b=g[0],v=g[1],x=g[2],m=v-x-i*b;(b||m)&&eg(e,a)&&(u+=m,h+=b),a=a.parentNode}while(!l&&a!==document.body||l&&(t.contains(a)||t===a));return(d&&(o&&u===0||!o&&s>u)||!d&&(o&&h===0||!o&&-s>h))&&(c=!0),c},ki=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},yf=function(e){return[e.deltaX,e.deltaY]},wf=function(e){return e&&"current"in e?e.current:e},S2=function(e,t){return e[0]===t[0]&&e[1]===t[1]},C2=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},E2=0,Bn=[];function T2(e){var t=f.useRef([]),n=f.useRef([0,0]),r=f.useRef(),o=f.useState(E2++)[0],i=f.useState(function(){return Xm()})[0],s=f.useRef(e);f.useEffect(function(){s.current=e},[e]),f.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var v=Yx([e.lockRef.current],(e.shards||[]).map(wf),!0).filter(Boolean);return v.forEach(function(x){return x.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),v.forEach(function(x){return x.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var a=f.useCallback(function(v,x){if("touches"in v&&v.touches.length===2)return!s.current.allowPinchZoom;var m=ki(v),p=n.current,y="deltaX"in v?v.deltaX:p[0]-m[0],k="deltaY"in v?v.deltaY:p[1]-m[1],S,C=v.target,E=Math.abs(y)>Math.abs(k)?"h":"v";if("touches"in v&&E==="h"&&C.type==="range")return!1;var T=vf(E,C);if(!T)return!0;if(T?S=E:(S=E==="v"?"h":"v",T=vf(E,C)),!T)return!1;if(!r.current&&"changedTouches"in v&&(y||k)&&(r.current=S),!S)return!0;var N=r.current||S;return k2(N,x,v,N==="h"?y:k,!0)},[]),l=f.useCallback(function(v){var x=v;if(!(!Bn.length||Bn[Bn.length-1]!==i)){var m="deltaY"in x?yf(x):ki(x),p=t.current.filter(function(S){return S.name===x.type&&S.target===x.target&&S2(S.delta,m)})[0];if(p&&p.should){x.cancelable&&x.preventDefault();return}if(!p){var y=(s.current.shards||[]).map(wf).filter(Boolean).filter(function(S){return S.contains(x.target)}),k=y.length>0?a(x,y[0]):!s.current.noIsolation;k&&x.cancelable&&x.preventDefault()}}},[]),c=f.useCallback(function(v,x,m,p){var y={name:v,delta:x,target:m,should:p};t.current.push(y),setTimeout(function(){t.current=t.current.filter(function(k){return k!==y})},1)},[]),d=f.useCallback(function(v){n.current=ki(v),r.current=void 0},[]),u=f.useCallback(function(v){c(v.type,yf(v),v.target,a(v,e.lockRef.current))},[]),h=f.useCallback(function(v){c(v.type,ki(v),v.target,a(v,e.lockRef.current))},[]);f.useEffect(function(){return Bn.push(i),e.setCallbacks({onScrollCapture:u,onWheelCapture:u,onTouchMoveCapture:h}),document.addEventListener("wheel",l,On),document.addEventListener("touchmove",l,On),document.addEventListener("touchstart",d,On),function(){Bn=Bn.filter(function(v){return v!==i}),document.removeEventListener("wheel",l,On),document.removeEventListener("touchmove",l,On),document.removeEventListener("touchstart",d,On)}},[]);var g=e.removeScrollBar,b=e.inert;return f.createElement(f.Fragment,null,b?f.createElement(i,{styles:C2(o)}):null,g?f.createElement(m2,{gapMode:"margin"}):null)}const P2=r2(Jm,T2);var ng=f.forwardRef(function(e,t){return f.createElement(Ys,vt({},e,{ref:t,sideCar:P2}))});ng.classNames=Ys.classNames;const A2=ng,Yl=["Enter"," "],_2=["ArrowDown","PageUp","Home"],rg=["ArrowUp","PageDown","End"],M2=[..._2,...rg],R2={ltr:[...Yl,"ArrowRight"],rtl:[...Yl,"ArrowLeft"]},N2={ltr:["ArrowLeft"],rtl:["ArrowRight"]},qs="Menu",[Ro,$2,z2]=Em(qs),[zn,og]=Uo(qs,[z2,Fm,Gm]),pu=Fm(),ig=Gm(),[I2,In]=zn(qs),[j2,Go]=zn(qs),L2=e=>{const{__scopeMenu:t,open:n=!1,children:r,dir:o,onOpenChange:i,modal:s=!0}=e,a=pu(t),[l,c]=f.useState(null),d=f.useRef(!1),u=bt(i),h=Tm(o);return f.useEffect(()=>{const g=()=>{d.current=!0,document.addEventListener("pointerdown",b,{capture:!0,once:!0}),document.addEventListener("pointermove",b,{capture:!0,once:!0})},b=()=>d.current=!1;return document.addEventListener("keydown",g,{capture:!0}),()=>{document.removeEventListener("keydown",g,{capture:!0}),document.removeEventListener("pointerdown",b,{capture:!0}),document.removeEventListener("pointermove",b,{capture:!0})}},[]),f.createElement(Cx,a,f.createElement(I2,{scope:t,open:n,onOpenChange:u,content:l,onContentChange:c},f.createElement(j2,{scope:t,onClose:f.useCallback(()=>u(!1),[u]),isUsingKeyboardRef:d,dir:h,modal:s},r)))},sg=f.forwardRef((e,t)=>{const{__scopeMenu:n,...r}=e,o=pu(n);return f.createElement(Ex,D({},o,r,{ref:t}))}),ag="MenuPortal",[D2,lg]=zn(ag,{forceMount:void 0}),O2=e=>{const{__scopeMenu:t,forceMount:n,children:r,container:o}=e,i=In(ag,t);return f.createElement(D2,{scope:t,forceMount:n},f.createElement(Ho,{present:n||i.open},f.createElement(Px,{asChild:!0,container:o},r)))},dt="MenuContent",[B2,hu]=zn(dt),F2=f.forwardRef((e,t)=>{const n=lg(dt,e.__scopeMenu),{forceMount:r=n.forceMount,...o}=e,i=In(dt,e.__scopeMenu),s=Go(dt,e.__scopeMenu);return f.createElement(Ro.Provider,{scope:e.__scopeMenu},f.createElement(Ho,{present:r||i.open},f.createElement(Ro.Slot,{scope:e.__scopeMenu},s.modal?f.createElement(W2,D({},o,{ref:t})):f.createElement(U2,D({},o,{ref:t})))))}),W2=f.forwardRef((e,t)=>{const n=In(dt,e.__scopeMenu),r=f.useRef(null),o=Ue(t,r);return f.useEffect(()=>{const i=r.current;if(i)return Kx(i)},[]),f.createElement(mu,D({},e,{ref:o,trapFocus:n.open,disableOutsidePointerEvents:n.open,disableOutsideScroll:!0,onFocusOutside:G(e.onFocusOutside,i=>i.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>n.onOpenChange(!1)}))}),U2=f.forwardRef((e,t)=>{const n=In(dt,e.__scopeMenu);return f.createElement(mu,D({},e,{ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>n.onOpenChange(!1)}))}),mu=f.forwardRef((e,t)=>{const{__scopeMenu:n,loop:r=!1,trapFocus:o,onOpenAutoFocus:i,onCloseAutoFocus:s,disableOutsidePointerEvents:a,onEntryFocus:l,onEscapeKeyDown:c,onPointerDownOutside:d,onFocusOutside:u,onInteractOutside:h,onDismiss:g,disableOutsideScroll:b,...v}=e,x=In(dt,n),m=Go(dt,n),p=pu(n),y=ig(n),k=$2(n),[S,C]=f.useState(null),E=f.useRef(null),T=Ue(t,E,x.onContentChange),N=f.useRef(0),M=f.useRef(""),B=f.useRef(0),z=f.useRef(null),X=f.useRef("right"),F=f.useRef(0),V=b?A2:f.Fragment,J=b?{as:wr,allowPinchZoom:!0}:void 0,W=P=>{var $,L;const Q=M.current+P,ze=k().filter(Ae=>!Ae.disabled),Ie=document.activeElement,nt=($=ze.find(Ae=>Ae.ref.current===Ie))===null||$===void 0?void 0:$.textValue,de=ze.map(Ae=>Ae.textValue),je=ik(de,Q,nt),Ko=(L=ze.find(Ae=>Ae.textValue===je))===null||L===void 0?void 0:L.ref.current;(function Ae(Yo){M.current=Yo,window.clearTimeout(N.current),Yo!==""&&(N.current=window.setTimeout(()=>Ae(""),1e3))})(Q),Ko&&setTimeout(()=>Ko.focus())};f.useEffect(()=>()=>window.clearTimeout(N.current),[]),mb();const _=f.useCallback(P=>{var $,L;return X.current===(($=z.current)===null||$===void 0?void 0:$.side)&&ak(P,(L=z.current)===null||L===void 0?void 0:L.area)},[]);return f.createElement(B2,{scope:n,searchRef:M,onItemEnter:f.useCallback(P=>{_(P)&&P.preventDefault()},[_]),onItemLeave:f.useCallback(P=>{var $;_(P)||(($=E.current)===null||$===void 0||$.focus(),C(null))},[_]),onTriggerLeave:f.useCallback(P=>{_(P)&&P.preventDefault()},[_]),pointerGraceTimerRef:B,onPointerGraceIntentChange:f.useCallback(P=>{z.current=P},[])},f.createElement(V,J,f.createElement(gb,{asChild:!0,trapped:o,onMountAutoFocus:G(i,P=>{var $;P.preventDefault(),($=E.current)===null||$===void 0||$.focus()}),onUnmountAutoFocus:s},f.createElement(fb,{asChild:!0,disableOutsidePointerEvents:a,onEscapeKeyDown:c,onPointerDownOutside:d,onFocusOutside:u,onInteractOutside:h,onDismiss:g},f.createElement(Ux,D({asChild:!0},y,{dir:m.dir,orientation:"vertical",loop:r,currentTabStopId:S,onCurrentTabStopIdChange:C,onEntryFocus:G(l,P=>{m.isUsingKeyboardRef.current||P.preventDefault()})}),f.createElement(Tx,D({role:"menu","aria-orientation":"vertical","data-state":pg(x.open),"data-radix-menu-content":"",dir:m.dir},p,v,{ref:T,style:{outline:"none",...v.style},onKeyDown:G(v.onKeyDown,P=>{const L=P.target.closest("[data-radix-menu-content]")===P.currentTarget,Q=P.ctrlKey||P.altKey||P.metaKey,ze=P.key.length===1;L&&(P.key==="Tab"&&P.preventDefault(),!Q&&ze&&W(P.key));const Ie=E.current;if(P.target!==Ie||!M2.includes(P.key))return;P.preventDefault();const de=k().filter(je=>!je.disabled).map(je=>je.ref.current);rg.includes(P.key)&&de.reverse(),rk(de)}),onBlur:G(e.onBlur,P=>{P.currentTarget.contains(P.target)||(window.clearTimeout(N.current),M.current="")}),onPointerMove:G(e.onPointerMove,No(P=>{const $=P.target,L=F.current!==P.clientX;if(P.currentTarget.contains($)&&L){const Q=P.clientX>F.current?"right":"left";X.current=Q,F.current=P.clientX}}))})))))))}),V2=f.forwardRef((e,t)=>{const{__scopeMenu:n,...r}=e;return f.createElement(et.div,D({},r,{ref:t}))}),ql="MenuItem",bf="menu.itemSelect",gu=f.forwardRef((e,t)=>{const{disabled:n=!1,onSelect:r,...o}=e,i=f.useRef(null),s=Go(ql,e.__scopeMenu),a=hu(ql,e.__scopeMenu),l=Ue(t,i),c=f.useRef(!1),d=()=>{const u=i.current;if(!n&&u){const h=new CustomEvent(bf,{bubbles:!0,cancelable:!0});u.addEventListener(bf,g=>r==null?void 0:r(g),{once:!0}),Cm(u,h),h.defaultPrevented?c.current=!1:s.onClose()}};return f.createElement(cg,D({},o,{ref:l,disabled:n,onClick:G(e.onClick,d),onPointerDown:u=>{var h;(h=e.onPointerDown)===null||h===void 0||h.call(e,u),c.current=!0},onPointerUp:G(e.onPointerUp,u=>{var h;c.current||(h=u.currentTarget)===null||h===void 0||h.click()}),onKeyDown:G(e.onKeyDown,u=>{const h=a.searchRef.current!=="";n||h&&u.key===" "||Yl.includes(u.key)&&(u.currentTarget.click(),u.preventDefault())})}))}),cg=f.forwardRef((e,t)=>{const{__scopeMenu:n,disabled:r=!1,textValue:o,...i}=e,s=hu(ql,n),a=ig(n),l=f.useRef(null),c=Ue(t,l),[d,u]=f.useState(!1),[h,g]=f.useState("");return f.useEffect(()=>{const b=l.current;if(b){var v;g(((v=b.textContent)!==null&&v!==void 0?v:"").trim())}},[i.children]),f.createElement(Ro.ItemSlot,{scope:n,disabled:r,textValue:o??h},f.createElement(Vx,D({asChild:!0},a,{focusable:!r}),f.createElement(et.div,D({role:"menuitem","data-highlighted":d?"":void 0,"aria-disabled":r||void 0,"data-disabled":r?"":void 0},i,{ref:c,onPointerMove:G(e.onPointerMove,No(b=>{r?s.onItemLeave(b):(s.onItemEnter(b),b.defaultPrevented||b.currentTarget.focus())})),onPointerLeave:G(e.onPointerLeave,No(b=>s.onItemLeave(b))),onFocus:G(e.onFocus,()=>u(!0)),onBlur:G(e.onBlur,()=>u(!1))}))))}),H2=f.forwardRef((e,t)=>{const{checked:n=!1,onCheckedChange:r,...o}=e;return f.createElement(dg,{scope:e.__scopeMenu,checked:n},f.createElement(gu,D({role:"menuitemcheckbox","aria-checked":Cs(n)?"mixed":n},o,{ref:t,"data-state":vu(n),onSelect:G(o.onSelect,()=>r==null?void 0:r(Cs(n)?!0:!n),{checkForDefaultPrevented:!1})})))}),G2="MenuRadioGroup",[gC,Q2]=zn(G2,{value:void 0,onValueChange:()=>{}}),K2="MenuRadioItem",Y2=f.forwardRef((e,t)=>{const{value:n,...r}=e,o=Q2(K2,e.__scopeMenu),i=n===o.value;return f.createElement(dg,{scope:e.__scopeMenu,checked:i},f.createElement(gu,D({role:"menuitemradio","aria-checked":i},r,{ref:t,"data-state":vu(i),onSelect:G(r.onSelect,()=>{var s;return(s=o.onValueChange)===null||s===void 0?void 0:s.call(o,n)},{checkForDefaultPrevented:!1})})))}),ug="MenuItemIndicator",[dg,q2]=zn(ug,{checked:!1}),J2=f.forwardRef((e,t)=>{const{__scopeMenu:n,forceMount:r,...o}=e,i=q2(ug,n);return f.createElement(Ho,{present:r||Cs(i.checked)||i.checked===!0},f.createElement(et.span,D({},o,{ref:t,"data-state":vu(i.checked)})))}),X2=f.forwardRef((e,t)=>{const{__scopeMenu:n,...r}=e;return f.createElement(et.div,D({role:"separator","aria-orientation":"horizontal"},r,{ref:t}))}),Z2="MenuSub",[vC,fg]=zn(Z2),Si="MenuSubTrigger",ek=f.forwardRef((e,t)=>{const n=In(Si,e.__scopeMenu),r=Go(Si,e.__scopeMenu),o=fg(Si,e.__scopeMenu),i=hu(Si,e.__scopeMenu),s=f.useRef(null),{pointerGraceTimerRef:a,onPointerGraceIntentChange:l}=i,c={__scopeMenu:e.__scopeMenu},d=f.useCallback(()=>{s.current&&window.clearTimeout(s.current),s.current=null},[]);return f.useEffect(()=>d,[d]),f.useEffect(()=>{const u=a.current;return()=>{window.clearTimeout(u),l(null)}},[a,l]),f.createElement(sg,D({asChild:!0},c),f.createElement(cg,D({id:o.triggerId,"aria-haspopup":"menu","aria-expanded":n.open,"aria-controls":o.contentId,"data-state":pg(n.open)},e,{ref:Gs(t,o.onTriggerChange),onClick:u=>{var h;(h=e.onClick)===null||h===void 0||h.call(e,u),!(e.disabled||u.defaultPrevented)&&(u.currentTarget.focus(),n.open||n.onOpenChange(!0))},onPointerMove:G(e.onPointerMove,No(u=>{i.onItemEnter(u),!u.defaultPrevented&&!e.disabled&&!n.open&&!s.current&&(i.onPointerGraceIntentChange(null),s.current=window.setTimeout(()=>{n.onOpenChange(!0),d()},100))})),onPointerLeave:G(e.onPointerLeave,No(u=>{var h;d();const g=(h=n.content)===null||h===void 0?void 0:h.getBoundingClientRect();if(g){var b;const v=(b=n.content)===null||b===void 0?void 0:b.dataset.side,x=v==="right",m=x?-5:5,p=g[x?"left":"right"],y=g[x?"right":"left"];i.onPointerGraceIntentChange({area:[{x:u.clientX+m,y:u.clientY},{x:p,y:g.top},{x:y,y:g.top},{x:y,y:g.bottom},{x:p,y:g.bottom}],side:v}),window.clearTimeout(a.current),a.current=window.setTimeout(()=>i.onPointerGraceIntentChange(null),300)}else{if(i.onTriggerLeave(u),u.defaultPrevented)return;i.onPointerGraceIntentChange(null)}})),onKeyDown:G(e.onKeyDown,u=>{const h=i.searchRef.current!=="";if(!(e.disabled||h&&u.key===" ")&&R2[r.dir].includes(u.key)){var g;n.onOpenChange(!0),(g=n.content)===null||g===void 0||g.focus(),u.preventDefault()}})})))}),tk="MenuSubContent",nk=f.forwardRef((e,t)=>{const n=lg(dt,e.__scopeMenu),{forceMount:r=n.forceMount,...o}=e,i=In(dt,e.__scopeMenu),s=Go(dt,e.__scopeMenu),a=fg(tk,e.__scopeMenu),l=f.useRef(null),c=Ue(t,l);return f.createElement(Ro.Provider,{scope:e.__scopeMenu},f.createElement(Ho,{present:r||i.open},f.createElement(Ro.Slot,{scope:e.__scopeMenu},f.createElement(mu,D({id:a.contentId,"aria-labelledby":a.triggerId},o,{ref:c,align:"start",side:s.dir==="rtl"?"left":"right",disableOutsidePointerEvents:!1,disableOutsideScroll:!1,trapFocus:!1,onOpenAutoFocus:d=>{var u;s.isUsingKeyboardRef.current&&((u=l.current)===null||u===void 0||u.focus()),d.preventDefault()},onCloseAutoFocus:d=>d.preventDefault(),onFocusOutside:G(e.onFocusOutside,d=>{d.target!==a.trigger&&i.onOpenChange(!1)}),onEscapeKeyDown:G(e.onEscapeKeyDown,d=>{s.onClose(),d.preventDefault()}),onKeyDown:G(e.onKeyDown,d=>{const u=d.currentTarget.contains(d.target),h=N2[s.dir].includes(d.key);if(u&&h){var g;i.onOpenChange(!1),(g=a.trigger)===null||g===void 0||g.focus(),d.preventDefault()}})})))))});function pg(e){return e?"open":"closed"}function Cs(e){return e==="indeterminate"}function vu(e){return Cs(e)?"indeterminate":e?"checked":"unchecked"}function rk(e){const t=document.activeElement;for(const n of e)if(n===t||(n.focus(),document.activeElement!==t))return}function ok(e,t){return e.map((n,r)=>e[(t+r)%e.length])}function ik(e,t,n){const o=t.length>1&&Array.from(t).every(c=>c===t[0])?t[0]:t,i=n?e.indexOf(n):-1;let s=ok(e,Math.max(i,0));o.length===1&&(s=s.filter(c=>c!==n));const l=s.find(c=>c.toLowerCase().startsWith(o.toLowerCase()));return l!==n?l:void 0}function sk(e,t){const{x:n,y:r}=e;let o=!1;for(let i=0,s=t.length-1;i<t.length;s=i++){const a=t[i].x,l=t[i].y,c=t[s].x,d=t[s].y;l>r!=d>r&&n<(c-a)*(r-l)/(d-l)+a&&(o=!o)}return o}function ak(e,t){if(!t)return!1;const n={x:e.clientX,y:e.clientY};return sk(n,t)}function No(e){return t=>t.pointerType==="mouse"?e(t):void 0}const lk=L2,ck=sg,uk=O2,dk=F2,fk=V2,pk=gu,hk=H2,mk=Y2,gk=J2,vk=X2,yk=ek,wk=nk,hg="DropdownMenu",[bk,yC]=Uo(hg,[og]),tt=og(),[xk,mg]=bk(hg),kk=e=>{const{__scopeDropdownMenu:t,children:n,dir:r,open:o,defaultOpen:i,onOpenChange:s,modal:a=!0}=e,l=tt(t),c=f.useRef(null),[d=!1,u]=Sm({prop:o,defaultProp:i,onChange:s});return f.createElement(xk,{scope:t,triggerId:Vl(),triggerRef:c,contentId:Vl(),open:d,onOpenChange:u,onOpenToggle:f.useCallback(()=>u(h=>!h),[u]),modal:a},f.createElement(lk,D({},l,{open:d,onOpenChange:u,dir:r,modal:a}),n))},Sk="DropdownMenuTrigger",Ck=f.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,disabled:r=!1,...o}=e,i=mg(Sk,n),s=tt(n);return f.createElement(ck,D({asChild:!0},s),f.createElement(et.button,D({type:"button",id:i.triggerId,"aria-haspopup":"menu","aria-expanded":i.open,"aria-controls":i.open?i.contentId:void 0,"data-state":i.open?"open":"closed","data-disabled":r?"":void 0,disabled:r},o,{ref:Gs(t,i.triggerRef),onPointerDown:G(e.onPointerDown,a=>{!r&&a.button===0&&a.ctrlKey===!1&&(i.onOpenToggle(),i.open||a.preventDefault())}),onKeyDown:G(e.onKeyDown,a=>{r||(["Enter"," "].includes(a.key)&&i.onOpenToggle(),a.key==="ArrowDown"&&i.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(a.key)&&a.preventDefault())})})))}),Ek=e=>{const{__scopeDropdownMenu:t,...n}=e,r=tt(t);return f.createElement(uk,D({},r,n))},Tk="DropdownMenuContent",Pk=f.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,o=mg(Tk,n),i=tt(n),s=f.useRef(!1);return f.createElement(dk,D({id:o.contentId,"aria-labelledby":o.triggerId},i,r,{ref:t,onCloseAutoFocus:G(e.onCloseAutoFocus,a=>{var l;s.current||(l=o.triggerRef.current)===null||l===void 0||l.focus(),s.current=!1,a.preventDefault()}),onInteractOutside:G(e.onInteractOutside,a=>{const l=a.detail.originalEvent,c=l.button===0&&l.ctrlKey===!0,d=l.button===2||c;(!o.modal||d)&&(s.current=!0)}),style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}}))}),Ak=f.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,o=tt(n);return f.createElement(fk,D({},o,r,{ref:t}))}),_k=f.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,o=tt(n);return f.createElement(pk,D({},o,r,{ref:t}))}),Mk=f.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,o=tt(n);return f.createElement(hk,D({},o,r,{ref:t}))}),Rk=f.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,o=tt(n);return f.createElement(mk,D({},o,r,{ref:t}))}),Nk=f.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,o=tt(n);return f.createElement(gk,D({},o,r,{ref:t}))}),$k=f.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,o=tt(n);return f.createElement(vk,D({},o,r,{ref:t}))}),zk=f.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,o=tt(n);return f.createElement(yk,D({},o,r,{ref:t}))}),Ik=f.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,o=tt(n);return f.createElement(wk,D({},o,r,{ref:t,style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}}))}),jk=kk,Lk=Ck,Dk=Ek,gg=Pk,vg=Ak,yg=_k,wg=Mk,bg=Rk,xg=Nk,kg=$k,Sg=zk,Cg=Ik,Ok=jk,Bk=Lk,Fk=f.forwardRef(({className:e,inset:t,children:n,...r},o)=>w.jsxs(Sg,{ref:o,className:le("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",t&&"pl-8",e),...r,children:[n,w.jsx(Uw,{className:"ml-auto h-4 w-4"})]}));Fk.displayName=Sg.displayName;const Wk=f.forwardRef(({className:e,...t},n)=>w.jsx(Cg,{ref:n,className:le("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...t}));Wk.displayName=Cg.displayName;const Eg=f.forwardRef(({className:e,sideOffset:t=4,...n},r)=>w.jsx(Dk,{children:w.jsx(gg,{ref:r,sideOffset:t,className:le("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...n})}));Eg.displayName=gg.displayName;const Fi=f.forwardRef(({className:e,inset:t,...n},r)=>w.jsx(yg,{ref:r,className:le("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",t&&"pl-8",e),...n}));Fi.displayName=yg.displayName;const Uk=f.forwardRef(({className:e,children:t,checked:n,...r},o)=>w.jsxs(wg,{ref:o,className:le("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),checked:n,...r,children:[w.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:w.jsx(xg,{children:w.jsx(Ww,{className:"h-4 w-4"})})}),t]}));Uk.displayName=wg.displayName;const Vk=f.forwardRef(({className:e,children:t,...n},r)=>w.jsxs(bg,{ref:r,className:le("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),...n,children:[w.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:w.jsx(xg,{children:w.jsx(Vw,{className:"h-2 w-2 fill-current"})})}),t]}));Vk.displayName=bg.displayName;const Hk=f.forwardRef(({className:e,inset:t,...n},r)=>w.jsx(vg,{ref:r,className:le("px-2 py-1.5 text-sm font-semibold",t&&"pl-8",e),...n}));Hk.displayName=vg.displayName;const Gk=f.forwardRef(({className:e,...t},n)=>w.jsx(kg,{ref:n,className:le("-mx-1 my-1 h-px bg-muted",e),...t}));Gk.displayName=kg.displayName;const Qk={theme:"system",setTheme:()=>null},Tg=f.createContext(Qk);function Kk({children:e,defaultTheme:t="system",storageKey:n="color-scheme",...r}){const[o,i]=f.useState(()=>localStorage.getItem(n)||t);f.useEffect(()=>{const a=window.document.documentElement;if(a.classList.remove("light","dark"),o==="system"){const l=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";a.classList.add(l);return}a.classList.add(o)},[o]);const s={theme:o,setTheme:a=>{localStorage.setItem(n,a),i(a)}};return w.jsx(Tg.Provider,{...r,value:s,children:e})}const Yk=()=>{const e=f.useContext(Tg);if(e===void 0)throw new Error("useTheme must be used within a ThemeProvider");return e};function qk(){const{setTheme:e}=Yk();return w.jsxs(Ok,{children:[w.jsx(Bk,{asChild:!0,children:w.jsxs(km,{variant:"outline",size:"icon",children:[w.jsx(Gw,{className:"h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"}),w.jsx(Hw,{className:"absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"}),w.jsx("span",{className:"sr-only",children:"Toggle theme"})]})}),w.jsxs(Eg,{align:"end",children:[w.jsx(Fi,{onClick:()=>e("light"),children:"Light"}),w.jsx(Fi,{onClick:()=>e("dark"),children:"Dark"}),w.jsx(Fi,{onClick:()=>e("system"),children:"System"})]})]})}const Jk=()=>{const e=({isActive:t})=>["p-4 flex items-center justify-start mw-full hover:text-sky-500 dark:hover:text-sky-400",t?"text-link-dark dark:text-link-dark":""].join(" ");return w.jsx("header",{className:"border-b border-gray-200 dark:border-gray-800 pr-3",children:w.jsxs("div",{className:"flex flex-wrap items-center",children:[w.jsx("div",{className:"absolute z-10 top-2 left-2 sm:static flex-shrink flex-grow-0",children:w.jsx("div",{className:"cursor-pointer",children:w.jsxs(nu,{to:"/",className:"navbar-brand flex items-center",children:[w.jsx(Ow,{className:"w-8 h-8 sm:ml-2 sm:w-12 sm:h-12",title:"MyApp logo"}),w.jsx("span",{className:"hidden ml-2 sm:block text-2xl font-semibold",children:"My App"})]})})}),w.jsx("div",{className:"flex flex-grow flex-shrink flex-nowrap justify-end items-center",children:w.jsx("nav",{className:"relative flex flex-grow leading-6 font-semibold text-slate-700 dark:text-slate-200",children:w.jsxs("ul",{className:"flex flex-wrap items-center justify-end w-full m-0",children:[w.jsx("li",{className:"relative flex flex-wrap just-fu-start m-0",children:w.jsx(bn,{to:"/counter",className:e,children:"Counter"})}),w.jsx("li",{className:"relative flex flex-wrap just-fu-start m-0",children:w.jsx(bn,{to:"/whatsnew",className:e,children:"What's New"})}),w.jsx("li",{className:"relative flex flex-wrap just-fu-start m-0",children:w.jsx(bn,{to:"/blog",className:e,children:"Blog"})}),w.jsx("li",{className:"relative flex flex-wrap just-fu-start m-0",children:w.jsx(bn,{to:"/videos",className:e,children:"Videos"})}),w.jsx("li",{className:"relative flex flex-wrap just-fu-start m-0",children:w.jsx(qk,{})})]})})})]})})},Xk=()=>{const e=({isActive:t})=>["text-sm leading-6 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50",t?"font-bold":""].join(" ");return w.jsxs("footer",{className:"bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800",children:[w.jsxs("nav",{className:"pt-8 columns-2 sm:flex sm:justify-center sm:space-x-12","aria-label":"Footer",children:[w.jsx("div",{className:"pb-6",children:w.jsx(bn,{to:"/about",className:e,children:"About"})}),w.jsx("div",{className:"pb-6",children:w.jsx(bn,{to:"/posts",className:e,children:"Archive"})}),w.jsx("div",{className:"pb-6",children:w.jsx(bn,{to:"/privacy",className:e,children:"Privacy"})})]}),w.jsx("div",{className:"container mx-auto px-5",children:w.jsxs("div",{className:"py-28 flex flex-col lg:flex-row items-center",children:[w.jsx("h3",{className:"text-4xl lg:text-6xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2",children:"A ServiceStack Project"}),w.jsxs("div",{className:"flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2",children:[w.jsx("a",{href:"https://docs.servicestack.net",className:"mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0",children:"Read Documentation"}),w.jsx("a",{href:"https://github.com/ServiceStack/press-vue",className:"mx-3 font-bold hover:underline",children:"View on GitHub"})]})]})})]})};var Zk=typeof Element<"u",eS=typeof Map=="function",tS=typeof Set=="function",nS=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function Wi(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var n,r,o;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(!Wi(e[r],t[r]))return!1;return!0}var i;if(eS&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(i=e.entries();!(r=i.next()).done;)if(!t.has(r.value[0]))return!1;for(i=e.entries();!(r=i.next()).done;)if(!Wi(r.value[1],t.get(r.value[0])))return!1;return!0}if(tS&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(i=e.entries();!(r=i.next()).done;)if(!t.has(r.value[0]))return!1;return!0}if(nS&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(e[r]!==t[r])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,o[r]))return!1;if(Zk&&e instanceof Element)return!1;for(r=n;r--!==0;)if(!((o[r]==="_owner"||o[r]==="__v"||o[r]==="__o")&&e.$$typeof)&&!Wi(e[o[r]],t[o[r]]))return!1;return!0}return e!==e&&t!==t}var rS=function(t,n){try{return Wi(t,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const oS=Sr(rS);var iS=function(e,t,n,r,o,i,s,a){if(!e){var l;if(t===void 0)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,o,i,s,a],d=0;l=new Error(t.replace(/%s/g,function(){return c[d++]})),l.name="Invariant Violation"}throw l.framesToPop=1,l}},sS=iS;const xf=Sr(sS);var aS=function(t,n,r,o){var i=r?r.call(o,t,n):void 0;if(i!==void 0)return!!i;if(t===n)return!0;if(typeof t!="object"||!t||typeof n!="object"||!n)return!1;var s=Object.keys(t),a=Object.keys(n);if(s.length!==a.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(n),c=0;c<s.length;c++){var d=s[c];if(!l(d))return!1;var u=t[d],h=n[d];if(i=r?r.call(o,u,h,d):void 0,i===!1||i===void 0&&u!==h)return!1}return!0};const lS=Sr(aS);var Pg=(e=>(e.BASE="base",e.BODY="body",e.HEAD="head",e.HTML="html",e.LINK="link",e.META="meta",e.NOSCRIPT="noscript",e.SCRIPT="script",e.STYLE="style",e.TITLE="title",e.FRAGMENT="Symbol(react.fragment)",e))(Pg||{}),ja={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},kf=Object.values(Pg),yu={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},cS=Object.entries(yu).reduce((e,[t,n])=>(e[n]=t,e),{}),lt="data-rh",ar={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},lr=(e,t)=>{for(let n=e.length-1;n>=0;n-=1){const r=e[n];if(Object.prototype.hasOwnProperty.call(r,t))return r[t]}return null},uS=e=>{let t=lr(e,"title");const n=lr(e,ar.TITLE_TEMPLATE);if(Array.isArray(t)&&(t=t.join("")),n&&t)return n.replace(/%s/g,()=>t);const r=lr(e,ar.DEFAULT_TITLE);return t||r||void 0},dS=e=>lr(e,ar.ON_CHANGE_CLIENT_STATE)||(()=>{}),La=(e,t)=>t.filter(n=>typeof n[e]<"u").map(n=>n[e]).reduce((n,r)=>({...n,...r}),{}),fS=(e,t)=>t.filter(n=>typeof n.base<"u").map(n=>n.base).reverse().reduce((n,r)=>{if(!n.length){const o=Object.keys(r);for(let i=0;i<o.length;i+=1){const a=o[i].toLowerCase();if(e.indexOf(a)!==-1&&r[a])return n.concat(r)}}return n},[]),pS=e=>console&&typeof console.warn=="function"&&console.warn(e),Vr=(e,t,n)=>{const r={};return n.filter(o=>Array.isArray(o[e])?!0:(typeof o[e]<"u"&&pS(`Helmet: ${e} should be of type "Array". Instead found type "${typeof o[e]}"`),!1)).map(o=>o[e]).reverse().reduce((o,i)=>{const s={};i.filter(l=>{let c;const d=Object.keys(l);for(let h=0;h<d.length;h+=1){const g=d[h],b=g.toLowerCase();t.indexOf(b)!==-1&&!(c==="rel"&&l[c].toLowerCase()==="canonical")&&!(b==="rel"&&l[b].toLowerCase()==="stylesheet")&&(c=b),t.indexOf(g)!==-1&&(g==="innerHTML"||g==="cssText"||g==="itemprop")&&(c=g)}if(!c||!l[c])return!1;const u=l[c].toLowerCase();return r[c]||(r[c]={}),s[c]||(s[c]={}),r[c][u]?!1:(s[c][u]=!0,!0)}).reverse().forEach(l=>o.push(l));const a=Object.keys(s);for(let l=0;l<a.length;l+=1){const c=a[l],d={...r[c],...s[c]};r[c]=d}return o},[]).reverse()},hS=(e,t)=>{if(Array.isArray(e)&&e.length){for(let n=0;n<e.length;n+=1)if(e[n][t])return!0}return!1},mS=e=>({baseTag:fS(["href"],e),bodyAttributes:La("bodyAttributes",e),defer:lr(e,ar.DEFER),encode:lr(e,ar.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:La("htmlAttributes",e),linkTags:Vr("link",["rel","href"],e),metaTags:Vr("meta",["name","charset","http-equiv","property","itemprop"],e),noscriptTags:Vr("noscript",["innerHTML"],e),onChangeClientState:dS(e),scriptTags:Vr("script",["src","innerHTML"],e),styleTags:Vr("style",["cssText"],e),title:uS(e),titleAttributes:La("titleAttributes",e),prioritizeSeoTags:hS(e,ar.PRIORITIZE_SEO_TAGS)}),Ag=e=>Array.isArray(e)?e.join(""):e,gS=(e,t)=>{const n=Object.keys(e);for(let r=0;r<n.length;r+=1)if(t[n[r]]&&t[n[r]].includes(e[n[r]]))return!0;return!1},Da=(e,t)=>Array.isArray(e)?e.reduce((n,r)=>(gS(r,t)?n.priority.push(r):n.default.push(r),n),{priority:[],default:[]}):{default:e,priority:[]},Sf=(e,t)=>({...e,[t]:void 0}),vS=["noscript","script","style"],Jl=(e,t=!0)=>t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),_g=e=>Object.keys(e).reduce((t,n)=>{const r=typeof e[n]<"u"?`${n}="${e[n]}"`:`${n}`;return t?`${t} ${r}`:r},""),yS=(e,t,n,r)=>{const o=_g(n),i=Ag(t);return o?`<${e} ${lt}="true" ${o}>${Jl(i,r)}</${e}>`:`<${e} ${lt}="true">${Jl(i,r)}</${e}>`},wS=(e,t,n=!0)=>t.reduce((r,o)=>{const i=o,s=Object.keys(i).filter(c=>!(c==="innerHTML"||c==="cssText")).reduce((c,d)=>{const u=typeof i[d]>"u"?d:`${d}="${Jl(i[d],n)}"`;return c?`${c} ${u}`:u},""),a=i.innerHTML||i.cssText||"",l=vS.indexOf(e)===-1;return`${r}<${e} ${lt}="true" ${s}${l?"/>":`>${a}</${e}>`}`},""),Mg=(e,t={})=>Object.keys(e).reduce((n,r)=>{const o=yu[r];return n[o||r]=e[r],n},t),bS=(e,t,n)=>{const r={key:t,[lt]:!0},o=Mg(n,r);return[j.createElement("title",o,t)]},Ui=(e,t)=>t.map((n,r)=>{const o={key:r,[lt]:!0};return Object.keys(n).forEach(i=>{const a=yu[i]||i;if(a==="innerHTML"||a==="cssText"){const l=n.innerHTML||n.cssText;o.dangerouslySetInnerHTML={__html:l}}else o[a]=n[i]}),j.createElement(e,o)}),Ge=(e,t,n=!0)=>{switch(e){case"title":return{toComponent:()=>bS(e,t.title,t.titleAttributes),toString:()=>yS(e,t.title,t.titleAttributes,n)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>Mg(t),toString:()=>_g(t)};default:return{toComponent:()=>Ui(e,t),toString:()=>wS(e,t,n)}}},xS=({metaTags:e,linkTags:t,scriptTags:n,encode:r})=>{const o=Da(e,ja.meta),i=Da(t,ja.link),s=Da(n,ja.script);return{priorityMethods:{toComponent:()=>[...Ui("meta",o.priority),...Ui("link",i.priority),...Ui("script",s.priority)],toString:()=>`${Ge("meta",o.priority,r)} ${Ge("link",i.priority,r)} ${Ge("script",s.priority,r)}`},metaTags:o.default,linkTags:i.default,scriptTags:s.default}},kS=e=>{const{baseTag:t,bodyAttributes:n,encode:r=!0,htmlAttributes:o,noscriptTags:i,styleTags:s,title:a="",titleAttributes:l,prioritizeSeoTags:c}=e;let{linkTags:d,metaTags:u,scriptTags:h}=e,g={toComponent:()=>{},toString:()=>""};return c&&({priorityMethods:g,linkTags:d,metaTags:u,scriptTags:h}=xS(e)),{priority:g,base:Ge("base",t,r),bodyAttributes:Ge("bodyAttributes",n,r),htmlAttributes:Ge("htmlAttributes",o,r),link:Ge("link",d,r),meta:Ge("meta",u,r),noscript:Ge("noscript",i,r),script:Ge("script",h,r),style:Ge("style",s,r),title:Ge("title",{title:a,titleAttributes:l},r)}},Xl=kS,Ci=[],Rg=!!(typeof window<"u"&&window.document&&window.document.createElement),Zl=class{constructor(e,t){I(this,"instances",[]);I(this,"canUseDOM",Rg);I(this,"context");I(this,"value",{setHelmet:e=>{this.context.helmet=e},helmetInstances:{get:()=>this.canUseDOM?Ci:this.instances,add:e=>{(this.canUseDOM?Ci:this.instances).push(e)},remove:e=>{const t=(this.canUseDOM?Ci:this.instances).indexOf(e);(this.canUseDOM?Ci:this.instances).splice(t,1)}}});this.context=e,this.canUseDOM=t||!1,t||(e.helmet=Xl({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},SS={},Ng=j.createContext(SS),ur,wu=(ur=class extends f.Component{constructor(n){super(n);I(this,"helmetData");this.helmetData=new Zl(this.props.context||{},ur.canUseDOM)}render(){return j.createElement(Ng.Provider,{value:this.helmetData.value},this.props.children)}},I(ur,"canUseDOM",Rg),ur),Fn=(e,t)=>{const n=document.head||document.querySelector("head"),r=n.querySelectorAll(`${e}[${lt}]`),o=[].slice.call(r),i=[];let s;return t&&t.length&&t.forEach(a=>{const l=document.createElement(e);for(const c in a)if(Object.prototype.hasOwnProperty.call(a,c))if(c==="innerHTML")l.innerHTML=a.innerHTML;else if(c==="cssText")l.styleSheet?l.styleSheet.cssText=a.cssText:l.appendChild(document.createTextNode(a.cssText));else{const d=c,u=typeof a[d]>"u"?"":a[d];l.setAttribute(c,u)}l.setAttribute(lt,"true"),o.some((c,d)=>(s=d,l.isEqualNode(c)))?o.splice(s,1):i.push(l)}),o.forEach(a=>{var l;return(l=a.parentNode)==null?void 0:l.removeChild(a)}),i.forEach(a=>n.appendChild(a)),{oldTags:o,newTags:i}},ec=(e,t)=>{const n=document.getElementsByTagName(e)[0];if(!n)return;const r=n.getAttribute(lt),o=r?r.split(","):[],i=[...o],s=Object.keys(t);for(const a of s){const l=t[a]||"";n.getAttribute(a)!==l&&n.setAttribute(a,l),o.indexOf(a)===-1&&o.push(a);const c=i.indexOf(a);c!==-1&&i.splice(c,1)}for(let a=i.length-1;a>=0;a-=1)n.removeAttribute(i[a]);o.length===i.length?n.removeAttribute(lt):n.getAttribute(lt)!==s.join(",")&&n.setAttribute(lt,s.join(","))},CS=(e,t)=>{typeof e<"u"&&document.title!==e&&(document.title=Ag(e)),ec("title",t)},Cf=(e,t)=>{const{baseTag:n,bodyAttributes:r,htmlAttributes:o,linkTags:i,metaTags:s,noscriptTags:a,onChangeClientState:l,scriptTags:c,styleTags:d,title:u,titleAttributes:h}=e;ec("body",r),ec("html",o),CS(u,h);const g={baseTag:Fn("base",n),linkTags:Fn("link",i),metaTags:Fn("meta",s),noscriptTags:Fn("noscript",a),scriptTags:Fn("script",c),styleTags:Fn("style",d)},b={},v={};Object.keys(g).forEach(x=>{const{newTags:m,oldTags:p}=g[x];m.length&&(b[x]=m),p.length&&(v[x]=g[x].oldTags)}),t&&t(),l(e,b,v)},Hr=null,ES=e=>{Hr&&cancelAnimationFrame(Hr),e.defer?Hr=requestAnimationFrame(()=>{Cf(e,()=>{Hr=null})}):(Cf(e),Hr=null)},TS=ES,Ef=class extends f.Component{constructor(){super(...arguments);I(this,"rendered",!1)}shouldComponentUpdate(t){return!lS(t,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:t}=this.props.context;t.remove(this),this.emitChange()}emitChange(){const{helmetInstances:t,setHelmet:n}=this.props.context;let r=null;const o=mS(t.get().map(i=>{const s={...i.props};return delete s.context,s}));wu.canUseDOM?TS(o):Xl&&(r=Xl(o)),n(r)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:t}=this.props.context;t.add(this),this.emitChange()}render(){return this.init(),null}},Ua,$g=(Ua=class extends f.Component{shouldComponentUpdate(e){return!oS(Sf(this.props,"helmetData"),Sf(e,"helmetData"))}mapNestedChildrenToProps(e,t){if(!t)return null;switch(e.type){case"script":case"noscript":return{innerHTML:t};case"style":return{cssText:t};default:throw new Error(`<${e.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(e,t,n,r){return{...t,[e.type]:[...t[e.type]||[],{...n,...this.mapNestedChildrenToProps(e,r)}]}}mapObjectTypeChildren(e,t,n,r){switch(e.type){case"title":return{...t,[e.type]:r,titleAttributes:{...n}};case"body":return{...t,bodyAttributes:{...n}};case"html":return{...t,htmlAttributes:{...n}};default:return{...t,[e.type]:{...n}}}}mapArrayTypeChildrenToProps(e,t){let n={...t};return Object.keys(e).forEach(r=>{n={...n,[r]:e[r]}}),n}warnOnInvalidChildren(e,t){return xf(kf.some(n=>e.type===n),typeof e.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${kf.join(", ")} are allowed. Helmet does not support rendering <${e.type}> elements. Refer to our API for more information.`),xf(!t||typeof t=="string"||Array.isArray(t)&&!t.some(n=>typeof n!="string"),`Helmet expects a string as a child of <${e.type}>. Did you forget to wrap your children in braces? ( <${e.type}>{\`\`}</${e.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(e,t){let n={};return j.Children.forEach(e,r=>{if(!r||!r.props)return;const{children:o,...i}=r.props,s=Object.keys(i).reduce((l,c)=>(l[cS[c]||c]=i[c],l),{});let{type:a}=r;switch(typeof a=="symbol"?a=a.toString():this.warnOnInvalidChildren(r,o),a){case"Symbol(react.fragment)":t=this.mapChildrenToProps(o,t);break;case"link":case"meta":case"noscript":case"script":case"style":n=this.flattenArrayTypeChildren(r,n,s,o);break;default:t=this.mapObjectTypeChildren(r,t,s,o);break}}),this.mapArrayTypeChildrenToProps(n,t)}render(){const{children:e,...t}=this.props;let n={...t},{helmetData:r}=t;if(e&&(n=this.mapChildrenToProps(e,n)),r&&!(r instanceof Zl)){const o=r;r=new Zl(o.context,!0),delete n.helmetData}return r?j.createElement(Ef,{...n,context:r.value}):j.createElement(Ng.Consumer,null,o=>j.createElement(Ef,{...n,context:o}))}},I(Ua,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),Ua);const PS=()=>w.jsx(wu,{children:w.jsxs($g,{children:[w.jsx("meta",{name:"description",content:"Vite + React SPA"}),w.jsx("meta",{property:"og:image",content:"/img/logo.svg"})]})}),zg=({title:e,children:t})=>w.jsxs(w.Fragment,{children:[e?w.jsx(wu,{children:w.jsx($g,{children:w.jsx("title",{children:e})})}):null,w.jsx(PS,{}),w.jsx(Jk,{}),w.jsx("div",{className:"min-h-screen",children:w.jsx("main",{role:"main",children:w.jsx("main",{children:t})})}),w.jsx(Xk,{})]}),ao=/^[a-z0-9]+(-[a-z0-9]+)*$/,Js=(e,t,n,r="")=>{const o=e.split(":");if(e.slice(0,1)==="@"){if(o.length<2||o.length>3)return null;r=o.shift().slice(1)}if(o.length>3||!o.length)return null;if(o.length>1){const a=o.pop(),l=o.pop(),c={provider:o.length>0?o[0]:r,prefix:l,name:a};return t&&!Vi(c)?null:c}const i=o[0],s=i.split("-");if(s.length>1){const a={provider:r,prefix:s.shift(),name:s.join("-")};return t&&!Vi(a)?null:a}if(n&&r===""){const a={provider:r,prefix:"",name:i};return t&&!Vi(a,n)?null:a}return null},Vi=(e,t)=>e?!!((e.provider===""||e.provider.match(ao))&&(t&&e.prefix===""||e.prefix.match(ao))&&e.name.match(ao)):!1,Ig=Object.freeze({left:0,top:0,width:16,height:16}),Es=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),bu=Object.freeze({...Ig,...Es}),tc=Object.freeze({...bu,body:"",hidden:!1});function AS(e,t){const n={};!e.hFlip!=!t.hFlip&&(n.hFlip=!0),!e.vFlip!=!t.vFlip&&(n.vFlip=!0);const r=((e.rotate||0)+(t.rotate||0))%4;return r&&(n.rotate=r),n}function Tf(e,t){const n=AS(e,t);for(const r in tc)r in Es?r in e&&!(r in n)&&(n[r]=Es[r]):r in t?n[r]=t[r]:r in e&&(n[r]=e[r]);return n}function _S(e,t){const n=e.icons,r=e.aliases||Object.create(null),o=Object.create(null);function i(s){if(n[s])return o[s]=[];if(!(s in o)){o[s]=null;const a=r[s]&&r[s].parent,l=a&&i(a);l&&(o[s]=[a].concat(l))}return o[s]}return(t||Object.keys(n).concat(Object.keys(r))).forEach(i),o}function MS(e,t,n){const r=e.icons,o=e.aliases||Object.create(null);let i={};function s(a){i=Tf(r[a]||o[a],i)}return s(t),n.forEach(s),Tf(e,i)}function jg(e,t){const n=[];if(typeof e!="object"||typeof e.icons!="object")return n;e.not_found instanceof Array&&e.not_found.forEach(o=>{t(o,null),n.push(o)});const r=_S(e);for(const o in r){const i=r[o];i&&(t(o,MS(e,o,i)),n.push(o))}return n}const RS={provider:"",aliases:{},not_found:{},...Ig};function Oa(e,t){for(const n in t)if(n in e&&typeof e[n]!=typeof t[n])return!1;return!0}function Lg(e){if(typeof e!="object"||e===null)return null;const t=e;if(typeof t.prefix!="string"||!e.icons||typeof e.icons!="object"||!Oa(e,RS))return null;const n=t.icons;for(const o in n){const i=n[o];if(!o.match(ao)||typeof i.body!="string"||!Oa(i,tc))return null}const r=t.aliases||Object.create(null);for(const o in r){const i=r[o],s=i.parent;if(!o.match(ao)||typeof s!="string"||!n[s]&&!r[s]||!Oa(i,tc))return null}return t}const Pf=Object.create(null);function NS(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:new Set}}function Mn(e,t){const n=Pf[e]||(Pf[e]=Object.create(null));return n[t]||(n[t]=NS(e,t))}function xu(e,t){return Lg(t)?jg(t,(n,r)=>{r?e.icons[n]=r:e.missing.add(n)}):[]}function $S(e,t,n){try{if(typeof n.body=="string")return e.icons[t]={...n},!0}catch{}return!1}let $o=!1;function Dg(e){return typeof e=="boolean"&&($o=e),$o}function zS(e){const t=typeof e=="string"?Js(e,!0,$o):e;if(t){const n=Mn(t.provider,t.prefix),r=t.name;return n.icons[r]||(n.missing.has(r)?null:void 0)}}function IS(e,t){const n=Js(e,!0,$o);if(!n)return!1;const r=Mn(n.provider,n.prefix);return $S(r,n.name,t)}function jS(e,t){if(typeof e!="object")return!1;if(typeof t!="string"&&(t=e.provider||""),$o&&!t&&!e.prefix){let o=!1;return Lg(e)&&(e.prefix="",jg(e,(i,s)=>{s&&IS(i,s)&&(o=!0)})),o}const n=e.prefix;if(!Vi({provider:t,prefix:n,name:"a"}))return!1;const r=Mn(t,n);return!!xu(r,e)}const Og=Object.freeze({width:null,height:null}),Bg=Object.freeze({...Og,...Es}),LS=/(-?[0-9.]*[0-9]+[0-9.]*)/g,DS=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function Af(e,t,n){if(t===1)return e;if(n=n||100,typeof e=="number")return Math.ceil(e*t*n)/n;if(typeof e!="string")return e;const r=e.split(LS);if(r===null||!r.length)return e;const o=[];let i=r.shift(),s=DS.test(i);for(;;){if(s){const a=parseFloat(i);isNaN(a)?o.push(i):o.push(Math.ceil(a*t*n)/n)}else o.push(i);if(i=r.shift(),i===void 0)return o.join("");s=!s}}const OS=e=>e==="unset"||e==="undefined"||e==="none";function BS(e,t){const n={...bu,...e},r={...Bg,...t},o={left:n.left,top:n.top,width:n.width,height:n.height};let i=n.body;[n,r].forEach(b=>{const v=[],x=b.hFlip,m=b.vFlip;let p=b.rotate;x?m?p+=2:(v.push("translate("+(o.width+o.left).toString()+" "+(0-o.top).toString()+")"),v.push("scale(-1 1)"),o.top=o.left=0):m&&(v.push("translate("+(0-o.left).toString()+" "+(o.height+o.top).toString()+")"),v.push("scale(1 -1)"),o.top=o.left=0);let y;switch(p<0&&(p-=Math.floor(p/4)*4),p=p%4,p){case 1:y=o.height/2+o.top,v.unshift("rotate(90 "+y.toString()+" "+y.toString()+")");break;case 2:v.unshift("rotate(180 "+(o.width/2+o.left).toString()+" "+(o.height/2+o.top).toString()+")");break;case 3:y=o.width/2+o.left,v.unshift("rotate(-90 "+y.toString()+" "+y.toString()+")");break}p%2===1&&(o.left!==o.top&&(y=o.left,o.left=o.top,o.top=y),o.width!==o.height&&(y=o.width,o.width=o.height,o.height=y)),v.length&&(i='<g transform="'+v.join(" ")+'">'+i+"</g>")});const s=r.width,a=r.height,l=o.width,c=o.height;let d,u;s===null?(u=a===null?"1em":a==="auto"?c:a,d=Af(u,l/c)):(d=s==="auto"?l:s,u=a===null?Af(d,c/l):a==="auto"?c:a);const h={},g=(b,v)=>{OS(v)||(h[b]=v.toString())};return g("width",d),g("height",u),h.viewBox=o.left.toString()+" "+o.top.toString()+" "+l.toString()+" "+c.toString(),{attributes:h,body:i}}const FS=/\sid="(\S+)"/g,WS="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let US=0;function VS(e,t=WS){const n=[];let r;for(;r=FS.exec(e);)n.push(r[1]);if(!n.length)return e;const o="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(i=>{const s=typeof t=="function"?t(i):t+(US++).toString(),a=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+a+')([")]|\\.[a-z])',"g"),"$1"+s+o+"$3")}),e=e.replace(new RegExp(o,"g"),""),e}const nc=Object.create(null);function HS(e,t){nc[e]=t}function rc(e){return nc[e]||nc[""]}function ku(e){let t;if(typeof e.resources=="string")t=[e.resources];else if(t=e.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}const Su=Object.create(null),Gr=["https://api.simplesvg.com","https://api.unisvg.com"],Hi=[];for(;Gr.length>0;)Gr.length===1||Math.random()>.5?Hi.push(Gr.shift()):Hi.push(Gr.pop());Su[""]=ku({resources:["https://api.iconify.design"].concat(Hi)});function GS(e,t){const n=ku(t);return n===null?!1:(Su[e]=n,!0)}function Cu(e){return Su[e]}const QS=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}};let _f=QS();function KS(e,t){const n=Cu(e);if(!n)return 0;let r;if(!n.maxURL)r=0;else{let o=0;n.resources.forEach(s=>{o=Math.max(o,s.length)});const i=t+".json?icons=";r=n.maxURL-o-n.path.length-i.length}return r}function YS(e){return e===404}const qS=(e,t,n)=>{const r=[],o=KS(e,t),i="icons";let s={type:i,provider:e,prefix:t,icons:[]},a=0;return n.forEach((l,c)=>{a+=l.length+1,a>=o&&c>0&&(r.push(s),s={type:i,provider:e,prefix:t,icons:[]},a=l.length),s.icons.push(l)}),r.push(s),r};function JS(e){if(typeof e=="string"){const t=Cu(e);if(t)return t.path}return"/"}const XS=(e,t,n)=>{if(!_f){n("abort",424);return}let r=JS(t.provider);switch(t.type){case"icons":{const i=t.prefix,a=t.icons.join(","),l=new URLSearchParams({icons:a});r+=i+".json?"+l.toString();break}case"custom":{const i=t.uri;r+=i.slice(0,1)==="/"?i.slice(1):i;break}default:n("abort",400);return}let o=503;_f(e+r).then(i=>{const s=i.status;if(s!==200){setTimeout(()=>{n(YS(s)?"abort":"next",s)});return}return o=501,i.json()}).then(i=>{if(typeof i!="object"||i===null){setTimeout(()=>{i===404?n("abort",i):n("next",o)});return}setTimeout(()=>{n("success",i)})}).catch(()=>{n("next",o)})},ZS={prepare:qS,send:XS};function e3(e){const t={loaded:[],missing:[],pending:[]},n=Object.create(null);e.sort((o,i)=>o.provider!==i.provider?o.provider.localeCompare(i.provider):o.prefix!==i.prefix?o.prefix.localeCompare(i.prefix):o.name.localeCompare(i.name));let r={provider:"",prefix:"",name:""};return e.forEach(o=>{if(r.name===o.name&&r.prefix===o.prefix&&r.provider===o.provider)return;r=o;const i=o.provider,s=o.prefix,a=o.name,l=n[i]||(n[i]=Object.create(null)),c=l[s]||(l[s]=Mn(i,s));let d;a in c.icons?d=t.loaded:s===""||c.missing.has(a)?d=t.missing:d=t.pending;const u={provider:i,prefix:s,name:a};d.push(u)}),t}function Fg(e,t){e.forEach(n=>{const r=n.loaderCallbacks;r&&(n.loaderCallbacks=r.filter(o=>o.id!==t))})}function t3(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;const t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let n=!1;const r=e.provider,o=e.prefix;t.forEach(i=>{const s=i.icons,a=s.pending.length;s.pending=s.pending.filter(l=>{if(l.prefix!==o)return!0;const c=l.name;if(e.icons[c])s.loaded.push({provider:r,prefix:o,name:c});else if(e.missing.has(c))s.missing.push({provider:r,prefix:o,name:c});else return n=!0,!0;return!1}),s.pending.length!==a&&(n||Fg([e],i.id),i.callback(s.loaded.slice(0),s.missing.slice(0),s.pending.slice(0),i.abort))})}))}let n3=0;function r3(e,t,n){const r=n3++,o=Fg.bind(null,n,r);if(!t.pending.length)return o;const i={id:r,icons:t,callback:e,abort:o};return n.forEach(s=>{(s.loaderCallbacks||(s.loaderCallbacks=[])).push(i)}),o}function o3(e,t=!0,n=!1){const r=[];return e.forEach(o=>{const i=typeof o=="string"?Js(o,t,n):o;i&&r.push(i)}),r}var i3={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function s3(e,t,n,r){const o=e.resources.length,i=e.random?Math.floor(Math.random()*o):e.index;let s;if(e.random){let C=e.resources.slice(0);for(s=[];C.length>1;){const E=Math.floor(Math.random()*C.length);s.push(C[E]),C=C.slice(0,E).concat(C.slice(E+1))}s=s.concat(C)}else s=e.resources.slice(i).concat(e.resources.slice(0,i));const a=Date.now();let l="pending",c=0,d,u=null,h=[],g=[];typeof r=="function"&&g.push(r);function b(){u&&(clearTimeout(u),u=null)}function v(){l==="pending"&&(l="aborted"),b(),h.forEach(C=>{C.status==="pending"&&(C.status="aborted")}),h=[]}function x(C,E){E&&(g=[]),typeof C=="function"&&g.push(C)}function m(){return{startTime:a,payload:t,status:l,queriesSent:c,queriesPending:h.length,subscribe:x,abort:v}}function p(){l="failed",g.forEach(C=>{C(void 0,d)})}function y(){h.forEach(C=>{C.status==="pending"&&(C.status="aborted")}),h=[]}function k(C,E,T){const N=E!=="success";switch(h=h.filter(M=>M!==C),l){case"pending":break;case"failed":if(N||!e.dataAfterTimeout)return;break;default:return}if(E==="abort"){d=T,p();return}if(N){d=T,h.length||(s.length?S():p());return}if(b(),y(),!e.random){const M=e.resources.indexOf(C.resource);M!==-1&&M!==e.index&&(e.index=M)}l="completed",g.forEach(M=>{M(T)})}function S(){if(l!=="pending")return;b();const C=s.shift();if(C===void 0){if(h.length){u=setTimeout(()=>{b(),l==="pending"&&(y(),p())},e.timeout);return}p();return}const E={status:"pending",resource:C,callback:(T,N)=>{k(E,T,N)}};h.push(E),c++,u=setTimeout(S,e.rotate),n(C,t,E.callback)}return setTimeout(S),m}function Wg(e){const t={...i3,...e};let n=[];function r(){n=n.filter(a=>a().status==="pending")}function o(a,l,c){const d=s3(t,a,l,(u,h)=>{r(),c&&c(u,h)});return n.push(d),d}function i(a){return n.find(l=>a(l))||null}return{query:o,find:i,setIndex:a=>{t.index=a},getIndex:()=>t.index,cleanup:r}}function Mf(){}const Ba=Object.create(null);function a3(e){if(!Ba[e]){const t=Cu(e);if(!t)return;const n=Wg(t),r={config:t,redundancy:n};Ba[e]=r}return Ba[e]}function l3(e,t,n){let r,o;if(typeof e=="string"){const i=rc(e);if(!i)return n(void 0,424),Mf;o=i.send;const s=a3(e);s&&(r=s.redundancy)}else{const i=ku(e);if(i){r=Wg(i);const s=e.resources?e.resources[0]:"",a=rc(s);a&&(o=a.send)}}return!r||!o?(n(void 0,424),Mf):r.query(t,o,n)().abort}const Rf="iconify2",zo="iconify",Ug=zo+"-count",Nf=zo+"-version",Vg=36e5,c3=168;function oc(e,t){try{return e.getItem(t)}catch{}}function Eu(e,t,n){try{return e.setItem(t,n),!0}catch{}}function $f(e,t){try{e.removeItem(t)}catch{}}function ic(e,t){return Eu(e,Ug,t.toString())}function sc(e){return parseInt(oc(e,Ug))||0}const Xs={local:!0,session:!0},Hg={local:new Set,session:new Set};let Tu=!1;function u3(e){Tu=e}let Ei=typeof window>"u"?{}:window;function Gg(e){const t=e+"Storage";try{if(Ei&&Ei[t]&&typeof Ei[t].length=="number")return Ei[t]}catch{}Xs[e]=!1}function Qg(e,t){const n=Gg(e);if(!n)return;const r=oc(n,Nf);if(r!==Rf){if(r){const a=sc(n);for(let l=0;l<a;l++)$f(n,zo+l.toString())}Eu(n,Nf,Rf),ic(n,0);return}const o=Math.floor(Date.now()/Vg)-c3,i=a=>{const l=zo+a.toString(),c=oc(n,l);if(typeof c=="string"){try{const d=JSON.parse(c);if(typeof d=="object"&&typeof d.cached=="number"&&d.cached>o&&typeof d.provider=="string"&&typeof d.data=="object"&&typeof d.data.prefix=="string"&&t(d,a))return!0}catch{}$f(n,l)}};let s=sc(n);for(let a=s-1;a>=0;a--)i(a)||(a===s-1?(s--,ic(n,s)):Hg[e].add(a))}function Kg(){if(!Tu){u3(!0);for(const e in Xs)Qg(e,t=>{const n=t.data,r=t.provider,o=n.prefix,i=Mn(r,o);if(!xu(i,n).length)return!1;const s=n.lastModified||-1;return i.lastModifiedCached=i.lastModifiedCached?Math.min(i.lastModifiedCached,s):s,!0})}}function d3(e,t){const n=e.lastModifiedCached;if(n&&n>=t)return n===t;if(e.lastModifiedCached=t,n)for(const r in Xs)Qg(r,o=>{const i=o.data;return o.provider!==e.provider||i.prefix!==e.prefix||i.lastModified===t});return!0}function f3(e,t){Tu||Kg();function n(r){let o;if(!Xs[r]||!(o=Gg(r)))return;const i=Hg[r];let s;if(i.size)i.delete(s=Array.from(i).shift());else if(s=sc(o),!ic(o,s+1))return;const a={cached:Math.floor(Date.now()/Vg),provider:e.provider,data:t};return Eu(o,zo+s.toString(),JSON.stringify(a))}t.lastModified&&!d3(e,t.lastModified)||Object.keys(t.icons).length&&(t.not_found&&(t=Object.assign({},t),delete t.not_found),n("local")||n("session"))}function zf(){}function p3(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,t3(e)}))}function h3(e,t){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(t).sort():e.iconsToLoad=t,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;const{provider:n,prefix:r}=e,o=e.iconsToLoad;delete e.iconsToLoad;let i;if(!o||!(i=rc(n)))return;i.prepare(n,r,o).forEach(a=>{l3(n,a,l=>{if(typeof l!="object")a.icons.forEach(c=>{e.missing.add(c)});else try{const c=xu(e,l);if(!c.length)return;const d=e.pendingIcons;d&&c.forEach(u=>{d.delete(u)}),f3(e,l)}catch(c){console.error(c)}p3(e)})})}))}const m3=(e,t)=>{const n=o3(e,!0,Dg()),r=e3(n);if(!r.pending.length){let l=!0;return t&&setTimeout(()=>{l&&t(r.loaded,r.missing,r.pending,zf)}),()=>{l=!1}}const o=Object.create(null),i=[];let s,a;return r.pending.forEach(l=>{const{provider:c,prefix:d}=l;if(d===a&&c===s)return;s=c,a=d,i.push(Mn(c,d));const u=o[c]||(o[c]=Object.create(null));u[d]||(u[d]=[])}),r.pending.forEach(l=>{const{provider:c,prefix:d,name:u}=l,h=Mn(c,d),g=h.pendingIcons||(h.pendingIcons=new Set);g.has(u)||(g.add(u),o[c][d].push(u))}),i.forEach(l=>{const{provider:c,prefix:d}=l;o[c][d].length&&h3(l,o[c][d])}),t?r3(t,r,i):zf};function g3(e,t){const n={...e};for(const r in t){const o=t[r],i=typeof o;r in Og?(o===null||o&&(i==="string"||i==="number"))&&(n[r]=o):i===typeof n[r]&&(n[r]=r==="rotate"?o%4:o)}return n}const v3=/[\s,]+/;function y3(e,t){t.split(v3).forEach(n=>{switch(n.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}function w3(e,t=0){const n=e.replace(/^-?[0-9.]*/,"");function r(o){for(;o<0;)o+=4;return o%4}if(n===""){const o=parseInt(e);return isNaN(o)?0:r(o)}else if(n!==e){let o=0;switch(n){case"%":o=25;break;case"deg":o=90}if(o){let i=parseFloat(e.slice(0,e.length-n.length));return isNaN(i)?0:(i=i/o,i%1===0?r(i):0)}}return t}function b3(e,t){let n=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in t)n+=" "+r+'="'+t[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+e+"</svg>"}function x3(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function k3(e){return"data:image/svg+xml,"+x3(e)}function S3(e){return'url("'+k3(e)+'")'}let lo;function C3(){try{lo=window.trustedTypes.createPolicy("iconify",{createHTML:e=>e})}catch{lo=null}}function E3(e){return lo===void 0&&C3(),lo?lo.createHTML(e):e}const Yg={...Bg,inline:!1},T3={xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},P3={display:"inline-block"},ac={backgroundColor:"currentColor"},qg={backgroundColor:"transparent"},If={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},jf={WebkitMask:ac,mask:ac,background:qg};for(const e in jf){const t=jf[e];for(const n in If)t[e+n]=If[n]}const A3={...Yg,inline:!0};function Lf(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}const _3=(e,t,n,r)=>{const o=n?A3:Yg,i=g3(o,t),s=t.mode||"svg",a={},l=t.style||{},c={...s==="svg"?T3:{},ref:r};for(let m in t){const p=t[m];if(p!==void 0)switch(m){case"icon":case"style":case"children":case"onLoad":case"mode":case"_ref":case"_inline":break;case"inline":case"hFlip":case"vFlip":i[m]=p===!0||p==="true"||p===1;break;case"flip":typeof p=="string"&&y3(i,p);break;case"color":a.color=p;break;case"rotate":typeof p=="string"?i[m]=w3(p):typeof p=="number"&&(i[m]=p);break;case"ariaHidden":case"aria-hidden":p!==!0&&p!=="true"&&delete c["aria-hidden"];break;default:o[m]===void 0&&(c[m]=p)}}const d=BS(e,i),u=d.attributes;if(i.inline&&(a.verticalAlign="-0.125em"),s==="svg"){c.style={...a,...l},Object.assign(c,u);let m=0,p=t.id;return typeof p=="string"&&(p=p.replace(/-/g,"_")),c.dangerouslySetInnerHTML={__html:E3(VS(d.body,p?()=>p+"ID"+m++:"iconifyReact"))},j.createElement("svg",c)}const{body:h,width:g,height:b}=e,v=s==="mask"||(s==="bg"?!1:h.indexOf("currentColor")!==-1),x=b3(h,{...u,width:g+"",height:b+""});return c.style={...a,"--svg":S3(x),width:Lf(u.width),height:Lf(u.height),...P3,...v?ac:qg,...l},j.createElement("span",c)};Dg(!0);HS("",ZS);if(typeof document<"u"&&typeof window<"u"){Kg();const e=window;if(e.IconifyPreload!==void 0){const t=e.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!jS(r))&&console.error(n)}catch{console.error(n)}})}if(e.IconifyProviders!==void 0){const t=e.IconifyProviders;if(typeof t=="object"&&t!==null)for(let n in t){const r="IconifyProviders["+n+"] is invalid.";try{const o=t[n];if(typeof o!="object"||!o||o.resources===void 0)continue;GS(n,o)||console.error(r)}catch{console.error(r)}}}}class Jg extends j.Component{constructor(t){super(t),this.state={icon:null}}_abortLoading(){this._loading&&(this._loading.abort(),this._loading=null)}_setData(t){this.state.icon!==t&&this.setState({icon:t})}_checkIcon(t){const n=this.state,r=this.props.icon;if(typeof r=="object"&&r!==null&&typeof r.body=="string"){this._icon="",this._abortLoading(),(t||n.icon===null)&&this._setData({data:r});return}let o;if(typeof r!="string"||(o=Js(r,!1,!0))===null){this._abortLoading(),this._setData(null);return}const i=zS(o);if(!i){(!this._loading||this._loading.name!==r)&&(this._abortLoading(),this._icon="",this._setData(null),i!==null&&(this._loading={name:r,abort:m3([o],this._checkIcon.bind(this,!1))}));return}if(this._icon!==r||n.icon===null){this._abortLoading(),this._icon=r;const s=["iconify"];o.prefix!==""&&s.push("iconify--"+o.prefix),o.provider!==""&&s.push("iconify--"+o.provider),this._setData({data:i,classes:s}),this.props.onLoad&&this.props.onLoad(r)}}componentDidMount(){this._checkIcon(!1)}componentDidUpdate(t){t.icon!==this.props.icon&&this._checkIcon(!0)}componentWillUnmount(){this._abortLoading()}render(){const t=this.props,n=this.state.icon;if(n===null)return t.children?t.children:j.createElement("span",{});let r=t;return n.classes&&(r={...t,className:(typeof t.className=="string"?t.className+" ":"")+n.classes.join(" ")}),_3({...bu,...n.data},r,t._inline,t._ref)}}const Rn=j.forwardRef(function(t,n){const r={...t,_ref:n,_inline:!1};return j.createElement(Jg,r)});j.forwardRef(function(t,n){const r={...t,_ref:n,_inline:!0};return j.createElement(Jg,r)});var Xg={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var i="",s=0;s<arguments.length;s++){var a=arguments[s];a&&(i=o(i,r(a)))}return i}function r(i){if(typeof i=="string"||typeof i=="number")return i;if(typeof i!="object")return"";if(Array.isArray(i))return n.apply(null,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var s="";for(var a in i)t.call(i,a)&&i[a]&&(s=o(s,a));return s}function o(i,s){return s?i?i+" "+s:i+s:i}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(Xg);var M3=Xg.exports;const Zg=Sr(M3),ev=f.createContext({}),R3=e=>l1(pm(e)),Fa={base:"block w-full sm:text-sm rounded-md dark:text-white dark:bg-gray-900 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none",invalid:"pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500",valid:"shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 dark:border-gray-600"},wC=({status:e,className:t,except:n})=>{var i;const r=new ou({responseStatus:e??((i=f.useContext(ev))==null?void 0:i.error)}),o=r.responseStatus?v1.call(r,n??[]):null;return o?w.jsx("div",{className:Zg("bg-red-50 border-l-4 border-red-400 p-4",t),children:w.jsxs("div",{className:"flex",children:[w.jsx("div",{className:"flex-shrink-0",children:w.jsx(Rn,{icon:"mdi:close-circle",className:"h-5 w-5 text-red-500","aria-hidden":"true"})}),w.jsx("div",{className:"ml-3",children:w.jsx("p",{className:"text-sm text-red-700",children:o})})]})}):null},bC=({status:e,id:t,type:n,className:r,placeholder:o,help:i,label:s,...a})=>{var x;const l=n??"text",c=s??R3(t),d=o??c,u=i??"",h=new ou({responseStatus:e??((x=f.useContext(ev))==null?void 0:x.error)}),g=t&&h.responseStatus&&y1.call(h,t),b=g!=null,v=(m,p)=>[b?p:m,r];return!g&&u&&(a["aria-describedby"]=`${t}-description`),w.jsxs("div",{children:[c?w.jsx("label",{htmlFor:t,className:"block text-sm font-medium text-gray-700 dark:text-gray-200",children:c}):null,w.jsxs("div",{className:"mt-1 relative rounded-md shadow-sm",children:[w.jsx("input",{type:l,className:Zg([Fa.base,...v(Fa.valid,Fa.invalid)]),id:t,name:t,placeholder:d,...a}),b?w.jsx("div",{className:"absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none",children:w.jsx("svg",{className:"h-5 w-5 text-red-500",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:w.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})})}):null]}),b?w.jsx("p",{className:"mt-2 text-sm text-red-500",id:`${t}-error`,children:g}):u?w.jsx("p",{id:`${t}-description`,className:"text-gray-500 dark:text-gray-400",children:u}):null]})},N3=({className:e,icon:t,text:n})=>{const r=t||t===void 0,o=n===void 0?"loading...":n;let i=["flex",e];return w.jsxs("div",{className:i.join(" "),title:"loading...",children:[r?w.jsxs("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"24px",height:"30px",viewBox:"0 0 24 30",children:[w.jsxs("rect",{x:"0",y:"10",width:"4",height:"10",fill:"#333",opacity:"0.2",children:[w.jsx("animate",{attributeName:"opacity",attributeType:"XML",values:"0.2; 1; .2",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}),w.jsx("animate",{attributeName:"height",attributeType:"XML",values:"10; 20; 10",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}),w.jsx("animate",{attributeName:"y",attributeType:"XML",values:"10; 5; 10",begin:"0s",dur:"0.6s",repeatCount:"indefinite"})]}),w.jsxs("rect",{x:"8",y:"10",width:"4",height:"10",fill:"#333",opacity:"0.2",children:[w.jsx("animate",{attributeName:"opacity",attributeType:"XML",values:"0.2; 1; .2",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}),w.jsx("animate",{attributeName:"height",attributeType:"XML",values:"10; 20; 10",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}),w.jsx("animate",{attributeName:"y",attributeType:"XML",values:"10; 5; 10",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"})]}),w.jsxs("rect",{x:"16",y:"10",width:"4",height:"10",fill:"#333",opacity:"0.2",children:[w.jsx("animate",{attributeName:"opacity",attributeType:"XML",values:"0.2; 1; .2",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}),w.jsx("animate",{attributeName:"height",attributeType:"XML",values:"10; 20; 10",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}),w.jsx("animate",{attributeName:"y",attributeType:"XML",values:"10; 5; 10",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"})]})]}):null,w.jsx("span",{className:"ml-1 text-gray-400",children:o})]})};var tv,Df=Bo;tv=Df.createRoot,Df.hydrateRoot;const Wa=({className:e,children:t})=>{let[n,r]=f.useState("");function o(i){var l,c;let s=document.createElement("input"),a=i.target.parentElement.querySelector("label");if(s.setAttribute("value",a.innerText),document.body.appendChild(s),s.select(),document.execCommand("copy"),document.body.removeChild(s),typeof window.getSelection=="function"){const d=document.createRange();d.selectNodeContents(a),(l=window.getSelection())==null||l.removeAllRanges(),(c=window.getSelection())==null||c.addRange(d)}r("copied"),setTimeout(()=>r(""),3e3)}return w.jsxs("div",{className:`${e} relative bg-gray-700 text-gray-300 pl-5 py-3 sm:rounded flex`,children:[w.jsxs("div",{className:"flex ml-2 w-full justify-between cursor-pointer",onClick:o,children:[w.jsxs("div",{children:[w.jsx("span",{children:"$ "}),w.jsx("label",{className:"cursor-pointer",children:t})]}),w.jsx("small",{className:"text-xs text-gray-400 px-3 -mt-1",children:"sh"})]}),n?w.jsx("div",{className:"absolute right-0 -mr-28 -mt-3 rounded-md bg-green-50 p-3",children:w.jsxs("div",{className:"flex",children:[w.jsx("div",{className:"flex-shrink-0",children:w.jsx(Rn,{icon:"mdi:check-circle",className:"h-5 w-5 text-green-400"})}),w.jsx("div",{className:"ml-3",children:w.jsx("p",{className:"text-sm font-medium text-green-800",children:n})})]})}):null]})},$3=({template:e})=>{let t="ProjectName",[n,r]=f.useState(t);const o=l=>r(l.target.value),i=l=>`https://account.servicestack.net/archive/${l}?Name=${n||"MyApp"}`,s=f.useMemo(()=>(n||"MyApp")+".zip",[n]);function a(l){if(l.key.match(/[\W]+/g))return l.preventDefault(),!1}return w.jsxs("div",{className:"flex flex-col w-96",children:[w.jsx("h4",{className:"py-6 text-center text-xl",children:"Download New Project"}),w.jsx("input",{type:"text",onChange:o,defaultValue:t,autoComplete:"off",spellCheck:"false",onKeyDown:a,className:"mb-8 sm:text-lg rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 dark:bg-gray-800"}),w.jsx("section",{className:"w-full flex justify-center text-center",children:w.jsx("div",{className:"mb-2",children:w.jsx("div",{className:"flex justify-center text-center",children:w.jsx("a",{className:"archive-url hover:no-underline",href:i(`ServiceStack/${e}`),children:w.jsxs("div",{className:"bg-white dark:bg-gray-800 px-4 py-4 mr-4 mb-4 rounded-lg shadow-lg text-center items-center justify-center hover:shadow-2xl dark:border-2 dark:border-pink-600 dark:hover:border-blue-600",style:{minWidth:"150px"},children:[w.jsx("div",{className:"text-center font-extrabold flex items-center justify-center mb-2",children:w.jsx("div",{className:"text-4xl text-blue-400 my-3",children:w.jsx(Rn,{icon:"logos:react",className:"w-12 h-12"})})}),w.jsx("div",{className:"text-xl font-medium text-gray-700 dark:text-gray-300",children:"React SPA"}),w.jsx("div",{className:"flex justify-center h-8"}),w.jsx("span",{className:"archive-name px-4 pb-2 text-blue-600 dark:text-indigo-400",children:s}),w.jsx("div",{className:"count mt-1 text-gray-400 text-sm"})]})})})})}),w.jsx("h4",{className:"pb-4 text-center text-xl",children:"or"}),w.jsx(Wa,{className:"mb-2",children:"npx degit ServiceStack/press-react"}),w.jsx("h4",{className:"py-4 text-center text-xl",children:"or"}),w.jsx("div",{className:"mx-auto",children:w.jsx("a",{href:"https://stackblitz.com/github/ServiceStack/press-react",children:w.jsx("img",{alt:"Open in StackBlitz",src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg"})})}),w.jsx("h4",{className:"py-6 text-center text-xl",children:"Run"}),w.jsx(Wa,{className:"mb-2",children:"npm install"}),w.jsx(Wa,{className:"mb-2",children:"npm run dev"})]})},Qo=f.createContext({});function z3(e,t){const[n,r]=f.useState(!1),[o,i]=f.useState(!1),s=encodeURIComponent(e.id),a=typeof e.playlistCoverId=="string"?encodeURIComponent(e.playlistCoverId):null,l=e.title,c=e.poster||"hqdefault",d=`&${e.params}`||"",u=e.muted?"&mute=1":"",h=e.announce||"Watch",g=e.webp?"webp":"jpg",b=e.webp?"vi_webp":"vi",v=e.thumbnail||(e.playlist?`https://i.ytimg.com/${b}/${a}/${c}.${g}`:`https://i.ytimg.com/${b}/${s}/${c}.${g}`);let x=e.noCookie?"https://www.youtube-nocookie.com":"https://www.youtube.com";x=e.cookie?"https://www.youtube.com":"https://www.youtube-nocookie.com";const m=e.playlist?`${x}/embed/videoseries?autoplay=1${u}&list=${s}${d}`:`${x}/embed/${s}?autoplay=1&state=1${u}${d}`,p=e.activatedClass||"lyt-activated",y=e.adNetwork||!1,k=e.aspectHeight||9,S=e.aspectWidth||16,C=e.iframeClass||"",E=e.playerClass||"lty-playbtn",T=e.wrapperClass||"yt-lite",N=e.onIframeAdded||function(){},M=e.rel?"prefetch":"preload",B=e.containerElement||"article",z=e.style||{},X=()=>{n||r(!0)},F=()=>{o||i(!0)};return f.useEffect(()=>{o&&N()},[o]),w.jsxs(w.Fragment,{children:[w.jsx("link",{rel:M,href:v,as:"image"}),w.jsx(w.Fragment,{children:n&&w.jsxs(w.Fragment,{children:[w.jsx("link",{rel:"preconnect",href:x}),w.jsx("link",{rel:"preconnect",href:"https://www.google.com"}),y&&w.jsxs(w.Fragment,{children:[w.jsx("link",{rel:"preconnect",href:"https://static.doubleclick.net"}),w.jsx("link",{rel:"preconnect",href:"https://googleads.g.doubleclick.net"})]})]})}),w.jsxs(B,{onPointerOver:X,onClick:F,className:`${T} ${o?p:""}`,"data-title":l,style:{backgroundImage:`url(${v})`,"--aspect-ratio":`${k/S*100}%`,...z},children:[w.jsx("button",{type:"button",className:E,"aria-label":`${h} ${l}`}),o&&w.jsx("iframe",{ref:t,className:C,title:l,width:"560",height:"315",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,src:m})]})]})}const nv=f.forwardRef(z3);function Ts({files:e,label:t,contents:n}){return w.jsx(w.Fragment,{children:e?w.jsx("div",{children:Object.entries(e).map(([r,o])=>w.jsx(Ts,{label:r,contents:o},r))}):w.jsx("div",{children:t==="_"?w.jsx("div",{children:Object.values(n).map(r=>w.jsxs("div",{className:"ml-6 flex items-center text-base leading-8",children:[w.jsx("svg",{className:"mr-1 text-slate-600 inline-block select-none align-text-bottom overflow-visible","aria-hidden":!0,focusable:!1,role:"img",viewBox:"0 0 16 16",width:"16",height:"16",fill:"currentColor",children:w.jsx("path",{d:"M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"})}),w.jsx("span",{children:r})]},r))}):w.jsx("div",{children:w.jsxs("div",{className:"ml-6",children:[w.jsxs("div",{className:"flex items-center text-base leading-8",children:[w.jsx("svg",{className:le("mr-1 text-slate-600 inline-block select-none align-text-bottom overflow-visible",Object.keys(n??[]).length==0?"-rotate-90":""),"aria-hidden":"true",focusable:"false",role:"img",viewBox:"0 0 12 12",width:"12",height:"12",fill:"currentColor",children:w.jsx("path",{d:"M6 8.825c-.2 0-.4-.1-.5-.2l-3.3-3.3c-.3-.3-.3-.8 0-1.1.3-.3.8-.3 1.1 0l2.7 2.7 2.7-2.7c.3-.3.8-.3 1.1 0 .3.3.3.8 0 1.1l-3.2 3.2c-.2.2-.4.3-.6.3Z"})}),w.jsx("svg",{className:"mr-1 text-sky-500","aria-hidden":"true",focusable:"false",role:"img",viewBox:"0 0 16 16",width:"16",height:"16",fill:"currentColor",children:w.jsx("path",{d:"M.513 1.513A1.75 1.75 0 0 1 1.75 1h3.5c.55 0 1.07.26 1.4.7l.9 1.2a.25.25 0 0 0 .2.1H13a1 1 0 0 1 1 1v.5H2.75a.75.75 0 0 0 0 1.5h11.978a1 1 0 0 1 .994 1.117L15 13.25A1.75 1.75 0 0 1 13.25 15H1.75A1.75 1.75 0 0 1 0 13.25V2.75c0-.464.184-.91.513-1.237Z"})}),w.jsx("span",{children:t})]}),Object.entries(n??{}).map(([r,o])=>w.jsx(Ts,{label:r,contents:o},r))]})})})})}const cr={Files:L3,Icon:Rn,Iconify:Rn,Youtube:j3,FileLayout:Ts,Include:I3,Alert:Qr,Tip:({className:e,...t})=>w.jsx(Qr,{title:"TIP",className:le("tip",e),...t}),Info:({className:e,...t})=>w.jsx(Qr,{title:"INFO",className:le("info",e),...t}),Warning:({className:e,...t})=>w.jsx(Qr,{title:"WARNING",className:le("warning",e),...t}),Danger:({className:e,...t})=>w.jsx(Qr,{title:"DANGER",className:le("danger",e),...t}),Copy:({className:e,...t})=>w.jsx(Of,{className:le("not-prose copy cp",e),icon:"bg-sky-500",...t}),Sh:({className:e,...t})=>w.jsx(Of,{className:le("not-prose sh-copy cp",e),box:"bg-gray-800",icon:"bg-green-600",txt:"whitespace-pre text-base text-gray-100",...t})};function I3({src:e}){const n=j.useContext(Qo).components.includes[e],r=f.lazy(n||(()=>Promise.resolve(w.jsx(w.Fragment,{}))));return n?w.jsx(f.Suspense,{fallback:w.jsx(w.Fragment,{}),children:w.jsx(r,{components:cr})}):w.jsxs("div",{className:"text-red-500",children:["Include '",e,"' not found"]})}function Qr({className:e,title:t,children:n}){return w.jsxs("div",{className:le(e,"custom-block"),children:[w.jsx("p",{className:"custom-block-title",children:t}),n]})}function Of({className:e,icon:t,box:n,txt:r,children:o}){let[i,s]=f.useState("");function a(l){var h;const c=l.currentTarget;s("copying");let d=document.createElement("textarea"),u=((h=c.querySelector("code")||c.querySelector("p"))==null?void 0:h.innerHTML)??"";d.innerHTML=u,document.body.appendChild(d),d.select(),document.execCommand("copy"),document.body.removeChild(d),setTimeout(()=>s(""),3e3)}return w.jsxs("div",{className:le(e,i,"flex cursor-pointer mb-3"),onClick:a,children:[w.jsx("div",{className:le("flex-grow",n||"bg-gray-700"),children:w.jsx("div",{className:le("pl-4 py-1 pb-1.5 align-middle",r||"text-lg text-white"),children:o})}),w.jsx("div",{className:"flex",children:w.jsxs("div",{className:le(t,"text-white p-1.5 pb-0"),children:[w.jsx("svg",{className:"copied w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:w.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 13l4 4L19 7"})}),w.jsxs("svg",{className:"nocopy w-6 h-6",fill:"none",stroke:"white",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[w.jsx("title",{children:"copy"}),w.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})]})]})})]})}function j3({arg:e}){return w.jsx(nv,{id:e})}function L3({body:e}){function t(o){const i=c=>{const d=c.match(/^(\s*)/);return d?d[0].length/2:0},s=o.trim().split(`
`),a={};let l=[a];return s.forEach(c=>{var g,b;const d=c.trim(),u=d.includes("."),h=i(c);for(;h<l.length-1;)l.pop();if(u)(g=l[h])._??(g._=[]),l[h]._.push(d);else{const v=d.replace("/","");(b=l[h])[v]??(b[v]={}),l.push(l[h][v])}}),a}const n=(e==null?void 0:e.trim())||"",r=t(n);return w.jsx(Ts,{files:r})}function D3(e){return(e||"").replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}Object.keys(cr).forEach(e=>cr[D3(e)]=cr[e]);const O3=({doc:e,type:t,group:n})=>{const o=j.useContext(Qo).components[t]||{},i=n?o[n]&&o[n][e.slug]:o[e.slug],s=f.lazy(i||(()=>Promise.resolve(w.jsx(w.Fragment,{}))));return i?w.jsx(f.Suspense,{fallback:w.jsx(w.Fragment,{}),children:w.jsx(s,{components:cr})}):e.preview?w.jsx("div",{dangerouslySetInnerHTML:{__html:e.preview}}):w.jsx("pre",{dangerouslySetInnerHTML:{__html:e.content}})},B3=({src:e})=>{const n=j.useContext(Qo).components.includes[e],r=f.lazy(n||(()=>Promise.resolve(w.jsx(w.Fragment,{}))));return n?w.jsx(f.Suspense,{fallback:w.jsx(w.Fragment,{}),children:w.jsx(r,{components:cr})}):w.jsxs("div",{className:"text-red-500",children:["Include '",e,"' not found"]})},F3=({group:e,title:t,background:n,summary:r,learnMore:o})=>{const s=f.useContext(Qo).videos[e];function a(c){return hm(c,"/")}function l(c){return new Date(c).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}return w.jsx("div",{className:le(n,"py-24 sm:py-32"),children:w.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:w.jsxs("div",{className:"mx-auto max-w-5xl",children:[w.jsx("h2",{className:"text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl",children:t}),w.jsxs("p",{className:"mt-2 text-lg leading-8 text-gray-600 dark:text-gray-400",children:[r,o?w.jsxs("a",{href:o,className:"ml-2 text-sm font-semibold leading-6",children:["Learn more ",w.jsx("span",{"aria-hidden":"true",children:"→"})]}):null]}),w.jsx("div",{className:"mt-16 space-y-20 lg:mt-20 lg:space-y-20",children:s.map(c=>w.jsxs("article",{className:"relative isolate flex flex-col gap-8 lg:flex-row",children:[w.jsx("div",{className:"relative lg:w-1/2 lg:shrink-0",children:w.jsx(nv,{id:a(c.url),title:c.title})}),w.jsxs("div",{children:[w.jsxs("div",{className:"flex items-center gap-x-4 text-xs",children:[w.jsx("time",{dateTime:"2020-03-16",className:"text-gray-500 dark:text-gray-400",children:l(c.date)}),c.tags.map(d=>w.jsx("span",{className:"relative z-10 rounded-full bg-gray-50 dark:bg-gray-800 py-1.5 px-3 font-medium text-gray-600 dark:text-gray-300",children:d},d))]}),w.jsxs("div",{className:"group relative max-w-xl",children:[w.jsx("h3",{className:"mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-gray-50 group-hover:text-gray-600 dark:group-hover:text-gray-400",children:w.jsx("a",{href:c.url,children:c.title})}),w.jsx("div",{className:"mt-5 text-sm leading-6 text-gray-600 dark:text-gray-400",children:w.jsx("div",{className:"prose dark:prose-invert",children:w.jsx(O3,{type:"videos",doc:c,group:e})})})]})]})]},c.url))})]})})})},W3=({href:e,iconSrc:t,children:n})=>{const r=hm(e,"/");return t?w.jsxs("a",{href:e,className:"mr-3 text-gray-500 hover:text-gray-600 text-decoration-none",children:[w.jsx("img",{src:t,className:"w-5 h-5 inline-flex text-purple-800 mr-1",alt:"file icon"}),r]}):w.jsxs("a",{href:e,className:"mr-3 text-gray-400 hover:text-gray-500 text-decoration-none",children:[n," ",r]})},U3=({path:e})=>w.jsx(W3,{href:ot("/example/react-press/src",e),children:w.jsx(Rn,{icon:"mdi:react",className:"w-5 h-5 text-link-dark inline"})}),V3=()=>w.jsxs(zg,{title:"React SPA with Vite + TypeScript",children:[w.jsx("div",{className:"mx-auto mt-16 max-w-7xl px-4 sm:mt-24",children:w.jsxs("div",{className:"text-center",children:[w.jsxs("h1",{className:"text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl md:text-6xl",children:[w.jsx("span",{className:"block xl:inline",children:"Welcome to "}),w.jsx("span",{className:"block text-link-dark dark:text-link-dark xl:inline",children:"React SPA"})]}),w.jsx("p",{className:"mx-auto mt-3 max-w-md text-base text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl",children:"Welcome to your new React SPA App"}),w.jsx("div",{className:"mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8",children:w.jsx("div",{className:"mt-3 rounded-md shadow sm:mt-0 sm:ml-3",children:w.jsx(nu,{to:"https://ui.shadcn.com/docs/components/accordion",className:"flex w-full items-center justify-center rounded-md border border-transparent bg-link-dark dark:bg-link-dark px-8 py-3 text-base font-medium text-white hover:bg-gray-700 md:py-4 md:px-10 md:text-lg",children:"React Component Gallery"})})})]})}),w.jsx("section",{className:"py-8 flex",children:w.jsxs("div",{className:"mt-8 mx-auto",children:[w.jsx("h2",{className:"mt-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl text-center",children:"Getting Started"}),w.jsx("div",{children:w.jsx($3,{template:"press-react"})})]})}),w.jsx("div",{className:"flex justify-center my-20 py-20 bg-slate-100 dark:bg-slate-800",children:w.jsxs("div",{className:"text-center",children:[w.jsx(Rn,{icon:"mdi:feature-highlight",className:"text-link-dark w-36 h-36 inline-block"}),w.jsx("h1",{className:"text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left",children:"Features"})]})}),w.jsx("div",{className:"text-center text-xl",children:"Opinionated React template for a productive out-of-the-box development UX"}),w.jsx("div",{className:"prose dark:prose-invert lg:prose-xl mx-auto",children:w.jsx(B3,{src:"features.md"})}),w.jsx("div",{className:"flex justify-center my-20 py-20 bg-slate-100 dark:bg-slate-800",children:w.jsxs("div",{className:"text-center",children:[w.jsx("svg",{className:"text-link-dark dark:text-link-dark w-36 h-36 inline-block",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:w.jsx("path",{fill:"currentColor",d:"m18 16l-4-3.2V16H6V8h8v3.2L18 8m2-4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"})}),w.jsx("h1",{className:"text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left",children:"Videos"})]})}),w.jsx(F3,{title:"SPA Development",summary:"Learn about ServiceStack's productive features for rapidly developing Single Page Apps",group:"react"}),w.jsx("div",{className:"my-8 flex justify-center gap-x-4",children:w.jsx(U3,{path:"pages/index.tsx"})})]}),H3=j.lazy(()=>H(()=>import("./about-BniZ5uQA.js"),__vite__mapDeps([0,1]))),G3=j.lazy(()=>H(()=>import("./blog-Cq1j5wDT.js"),__vite__mapDeps([]))),Q3=j.lazy(()=>H(()=>import("./counter-DIXMatvg.js"),__vite__mapDeps([]))),K3=j.lazy(()=>H(()=>import("./privacy-Cm4NCeke.js"),__vite__mapDeps([2,1]))),Y3=j.lazy(()=>H(()=>import("./videos-B_lw1V0d.js"),__vite__mapDeps([]))),q3=j.lazy(()=>H(()=>import("./whatsnew-CTrSffyU.js"),__vite__mapDeps([]))),J3=j.lazy(()=>H(()=>import("./_slug_-B87BMfC5.js"),__vite__mapDeps([]))),X3=j.lazy(()=>H(()=>import("./index-Cn4-j9Nf.js"),__vite__mapDeps([3,4]))),Z3=j.lazy(()=>H(()=>import("./_name_-D4kYSi8C.js"),__vite__mapDeps([5,4]))),eC=j.lazy(()=>H(()=>import("./_tag_-WqKy8t4q.js"),__vite__mapDeps([6,4]))),tC=j.lazy(()=>H(()=>import("./_year_-DhN2U92C.js"),__vite__mapDeps([7,4]))),nC=[{caseSensitive:!1,path:"about",element:j.createElement(H3)},{caseSensitive:!1,path:"blog",element:j.createElement(G3)},{caseSensitive:!1,path:"counter",element:j.createElement(Q3)},{caseSensitive:!1,path:"/",element:j.createElement(V3)},{caseSensitive:!1,path:"privacy",element:j.createElement(K3)},{caseSensitive:!1,path:"videos",element:j.createElement(Y3)},{caseSensitive:!1,path:"whatsnew",element:j.createElement(q3)},{caseSensitive:!1,path:"posts",children:[{caseSensitive:!1,path:":slug",element:j.createElement(J3)},{caseSensitive:!1,path:"",element:j.createElement(X3)},{caseSensitive:!1,path:"author",children:[{caseSensitive:!1,path:":name",element:j.createElement(Z3)}]},{caseSensitive:!1,path:"tagged",children:[{caseSensitive:!1,path:":tag",element:j.createElement(eC)}]},{caseSensitive:!1,path:"year",children:[{caseSensitive:!1,path:":year",element:j.createElement(tC)}]}]}],rC={blog:{config:{localBaseUrl:"http://localhost:5173",publicBaseUrl:"https://react-vue.servicestack.net",siteTwitter:"@React",blogTitle:"From the blog",blogDescription:"Writing on software design and aerospace industry.",blogEmail:"email@example.org (React)",blogImageUrl:"https://servicestack.net/img/logo.png"},authors:[{name:"Lucy Bates",email:"lucy@email.org",bio:"Works in software design, company building, and the aerospace industry.",profileUrl:"/img/profiles/user1.svg",twitterUrl:"https://twitter.com/lucy",threadsUrl:"https://threads.net/@lucy",gitHubUrl:"https://github.com/lucy"},{name:"Gayle Smith",email:"gayle@email.org",bio:"Gayle is an author, consultant, and founder focusing on improving tech.",profileUrl:"/img/profiles/user2.svg",twitterUrl:"https://twitter.com/gayle",mastodonUrl:"https://mastodon.social/@gayle"},{name:"Brandon Foley",email:"brandon@email.org",bio:"I am a programmer at heart. I like to tinker with code and build generic coding structures.",profileUrl:"/img/profiles/user3.svg",gitHubUrl:"https://github.com/brandon"}],posts:[{slug:"vite-press-plugin",path:"src/_posts/2024-03-01_vite-press-plugin.md",fileName:"vite-press-plugin.md",content:`The Vite Press Plugin is an alternative to [VitePress](https://vitepress.dev) for adding Markdown features 
to existing Vite Vue or React projects. It's a non-intrusive plugin for Vue and React Vite apps that want to 
add markdown powered content features without needing to adopt an opinionated framework for their entire App.

## Universal Markdown Features

A goal for **vite-press-plugin** is to implement a suite of universal markdown-powered features that can be
reused across all our Vue, React and .NET Razor and Blazor project templates, allowing you to freely copy and 
incorporate same set of markdown feature folders to power markdown content features across a range of 
websites built with different technologies.

### Vite Apps with vite-press-plugin

The **vite-press-plugin** currently powers the markdown features in the following Vite Vue and React templates:

#### Vite Templates with vite-press-plugin

 - [press-vue](https://press-vue.web-templates.io) - Vite Vue App
 - [press-react](https://press-react.web-templates.io) - Vite React App

#### .NET 8 API backend with Vite Vue & React SPA frontend

 - [vue-spa](https://vue-spa.web-templates.io) - .NET 8 API with Vite Vue SPA frontend
 - [react-spa](https://react-spa.web-templates.io) - .NET 8 API with Vite React SPA frontend

The **vite-press-plugin** makes the Markdown features available to the Vite App, whilst the markdown rendering itself is optimally
implemented in:

 - Vue Templates - with [markdown-it](https://github.com/markdown-it/markdown-it) in [Vue SFC](https://vuejs.org/guide/scaling-up/sfc.html) Components
 - React Templates - with [remark](https://github.com/remarkjs/remark) and [MDX](https://mdxjs.com) in [React](https://react.dev) Components

### .NET Templates with C# and Markdig

Whilst the same Markdown feature folders are [implemented in C#](https://razor-ssg.web-templates.io/posts/razor-ssg)
and rendered with [Markdig](https://github.com/xoofx/markdig) and either Razor Pages or Blazor Components:

#### .NET 8 Razor SSG and Blazor SSR Templates

 - [razor-ssg](https://razor-ssg.web-templates.io) - .NET Razor SSG Blog and Marketing Website with **Markdig**
 - [razor-press](https://razor-press.web-templates.io) - .NET Razor SSG Documentation Website with **Markdig**
 - [blazor-vue](https://blazor-vue.web-templates.io) - .NET 8 Blazor Server Rendered Website with **Markdig**

### Markdown Feature Folders

The content for each Markdown feature is maintained within its own feature folder with a \`_\` prefix:

\`\`\`files
/_includes
/_posts
/_videos
/_whatsnew
\`\`\`

#### Markdown Document Structure

Additional metadata for each markdown page is maintained in the frontmatter of each markdown page, e.g.
the front matter for this blog post contains:

\`\`\`md
---
title:   Vite Press Plugin
summary: Introducing the Vite Press Plugin
author:  Lucy Bates
tags:    [docs,markdown]
image:   https://source.unsplash.com/random/2000x1000/?stationary
---
\`\`\`

The frontmatter is used in combination with file attributes to populate the document metadata.
The schema used to support the current markdown features include:

\`\`\`ts
type Doc = {
    title: string     // title of Markdown page (frontmatter)
    slug: string      // slug to page (populated)
    path: string      // path to page (populated)
    fileName: string  // filename of markdown file (populated)
    content: string   // markdown content (populated)
    date: string      // date of page (frontmatter)
    tags: string[]    // related tags (frontmatter)
    order?: number    // explicit page ordering (frontmatter)
    group?: string    // which group page belongs to (populated)
    draft?: boolean   // make visible in production (frontmatter)
    wordCount: number      // (populated)
    lineCount: number      // (populated)
    minutesToRead: number  // (populated)
}

type Post = Doc & {
    summary: string // short summary of blog post (frontmatter)
    author: string  // author of blog post (frontmatter)
    image: string   // hero image of blog post (frontmatter)
}

type Video = Doc & {
    url: string // URL of YouTube Video
}

type WhatsNew = Doc & {
    url: string    // URL of YouTube Video
    image: string  // Image to display for feature
}
\`\`\`

Markdown files can contain additional frontmatter which is also merged with the document metadata.

### Accessing Markdown Metadata

In Vue App's the Metadata is available as an injected dependency that's navigable with the typed \`VirtualPress\` schema, e.g:

\`\`\`ts
import type { VirtualPress } from "vite-plugin-press"

const press:VirtualPress = inject('press')!
\`\`\`

In React App's it's available via an injected context:

\`\`\`ts
import { PressContext } from "@/contexts"

const press = useContext(PressContext)
\`\`\`

Which is defined as:

\`\`\`ts
import { createContext } from 'react'
import type { VirtualPress } from 'vite-plugin-press'

export const PressContext = createContext<VirtualPress>({} as VirtualPress)
\`\`\`

This \`VirtualPress\` metadata is used to power all markdown features.

### Blog

The blog maintains its markdown posts in a flat  [/_posts](https://github.com/NetCoreTemplates/vue-spa/tree/main/MyApp.Client/src/_posts) 
folder which each Markdown post containing its publish date and URL slug it should be published under, e.g:

\`\`\`files
/_posts
  2023-01-21_start.md
  2024-02-11_jwt-identity-auth.md
  2024-03-01_vite-press-plugin.md
\`\`\`

Supporting all Blog features requires several different pages to render each of its view:

| Description | Example | Vue | React | 
| - | - | - | - |
| Main Blog layout | [/blog](/blog) | [blog.vue](https://github.com/NetCoreTemplates/vue-spa/blob/main/MyApp.Client/src/pages/blog.vue) | [blog.tsx](https://github.com/NetCoreTemplates/react-spa/blob/main/MyApp.Client/src/pages/blog.tsx) |
| Navigable Archive of Posts | [/posts](/posts) | [index.vue](https://github.com/NetCoreTemplates/vue-spa/blob/main/MyApp.Client/src/pages/posts/index.vue) | [index.tsx](https://github.com/NetCoreTemplates/react-spa/blob/main/MyApp.Client/src/pages/posts/index.tsx) |
| Individual Blog Post (like this!) | [/posts/vite-press-plugin](/posts/vite-press-plugin) | [\\[slug\\].vue](https://github.com/NetCoreTemplates/vue-spa/blob/main/MyApp.Client/src/pages/posts/%5Bslug%5D.vue) | [\\[slug\\].tsx](https://github.com/NetCoreTemplates/react-spa/blob/main/MyApp.Client/src/pages/posts/%5Bslug%5D.tsx) |
| Display Posts by Author | [/posts/author/lucy-bates](/posts/author/lucy-bates) | [\\[name\\].vue](https://github.com/NetCoreTemplates/vue-spa/blob/main/MyApp.Client/src/pages/posts/author/%5Bname%5D.vue) | [\\[name\\].tsx](https://github.com/NetCoreTemplates/react-spa/blob/main/MyApp.Client/src/pages/posts/author/%5Bname%5D.tsx) |
| Display Posts by Tag | [/posts/tagged/markdown](/posts/tagged/markdown) | [\\[tag\\].vue](https://github.com/NetCoreTemplates/vue-spa/blob/main/MyApp.Client/src/pages/posts/tagged/%5Btag%5D.vue) | [\\[tag\\].tsx](https://github.com/NetCoreTemplates/react-spa/blob/main/MyApp.Client/src/pages/posts/tagged/%5Btag%5D.tsx) |
| Display Posts by Year | [/posts/year/2024](/posts/year/2024) | [\\[year\\].vue](https://github.com/NetCoreTemplates/vue-spa/blob/main/MyApp.Client/src/pages/posts/year/%5Byear%5D.vue) | [\\[year\\].tsx](https://github.com/NetCoreTemplates/react-spa/blob/main/MyApp.Client/src/pages/posts/year/%5Byear%5D.tsx) |

#### Configuration

Additional information about the Website Blog is maintained in \`_posts/config.json\`

\`\`\`json
{
  "localBaseUrl": "http://localhost:5173",
  "publicBaseUrl": "https://press-vue.web-templates.io",
  "siteTwitter": "@Vue",
  "blogTitle": "From the blog",
  "blogDescription": "Writing on software design and aerospace industry.",
  "blogEmail": "email@example.org (Vue)",
  "blogImageUrl": "https://servicestack.net/img/logo.png"
}
\`\`\`

#### Authors

Whilst information about Post Authors are maintained in \`_posts/authors.json\`

\`\`\`json
[
  {
    "name": "Lucy Bates",
    "email": "lucy@email.org",
    "bio": "Writing on software design and aerospace industry.",
    "profileUrl": "/img/profiles/user1.svg",
    "twitterUrl": "https://twitter.com/lucy",
    "threadsUrl": "https://threads.net/@lucy",
    "gitHubUrl": "https://github.com/lucy"
  },
]
\`\`\`

To associate an Author the **name** property is used to match a posts frontmatter **author**.

### General Features

Most unique markdown features are captured in their Markdown's frontmatter metadata, but in general these features
are broadly available for all features:

 - **Live Reload** - Latest Markdown content is displayed during **Development** 
 - **Drafts** - Prevent posts being worked on from being published with \`draft: true\`
 - **Future Dates** - Posts with a future date wont be published until that date

### What's New Feature

The [/whatsnew](/whatsnew) page is an example of creating a custom Markdown feature to implement a portfolio or a product releases page
where a new folder is created per release, containing both release date and release or project name, with all features in that release 
maintained markdown content sorted in alphabetical order:

\`\`\`files
/_whatsnew
  /2023-03-08_Animaginary
    feature1.md
  /2023-03-18_OpenShuttle
    feature1.md
  /2023-03-28_Planetaria
    feature1.md
\`\`\`

What's New follows the same structure as Pages feature which is rendered in:

 - [whatsnew.vue](https://github.com/NetCoreTemplates/vue-spa/blob/main/MyApp.Client/src/pages/whatsnew.vue)
 - [whatsnew.tsx](https://github.com/NetCoreTemplates/react-spa/blob/main/MyApp.Client/src/pages/whatsnew.tsx)
 
### Videos Feature

The videos feature maintained in the \`_videos\` folder allows grouping of related videos into different folder groups, e.g:

\`\`\`files
/_videos
  /vue
    admin.md
    autoquerygrid.md
    components.md
  /react
    locode.md
    bookings.md
    nextjs.md
\`\`\`

These can then be rendered as UI fragments using the \`<VideoGroup>\` component, e.g:

\`\`\`tsx
<VideoGroup
  title="Vue Components"
  summary="Learn about productive features in Vue Component Library"
  group="vue"
  learnMore="https://docs.servicestack.net/vue/" />
\`\`\`

### Includes Feature

The includes feature allows maintaining reusable markdown fragments in the \`_includes\` folder, e.g:

\`\`\`files
/_includes
  /features
    videos.md
    whatsnew.md
  privacy.md
\`\`\`

Which can be included in other Markdown files with:

\`\`\`md
:::include privacy.md:::

:::include features/include.md:::
\`\`\`

Alternatively they can be included in other Vue, React or Markdown pages with the \`<Include>\` component, e.g:

\`\`\`tsx
<Include src="privacy.md" />

<Include src="features/include.md" />
\`\`\`

### Metadata APIs Feature

To support external clients from querying static markdown metadata you can export it to pre-rendered static \`*.json\` 
data structures by configuring \`metadataPath\` to the location you the \`*.json\` files published to, e.g:

\`\`\`ts
export default defineConfig({
    plugins: [
        Press({
            metadataPath: 'public/api',
        }),
    ]
})
\`\`\`

This will publish all the content of each content type in the year they were published in, along with an \`all.json\` containing
all content published in that year as well aso for all time, e.g:

\`\`\`files
/meta
  /2022
    all.json
    posts.json
    videos.json
  /2023
    all.json
    posts.json
  /2024
    all.json
    posts.json
    videos.json
    whatsnew.json
  all.json
  index.json
\`\`\`

With this you can fetch the metadata of all the new **Blog Posts** added in **2023** from:

[/api/2024/blog.json](/api/2024/blog.json)

Or all the website content added in **2024** from:

[/api/2024/all.json](/api/2024/all.json)

Or **ALL** the website metadata content from:

[/api/all.json](/api/all.json)

This feature makes it possible to support use-cases like CreatorKit's
[Generating Newsletters](https://servicestack.net/creatorkit/portal-mailruns#generating-newsletters) feature which generates 
a Monthly Newsletter Email with all new content added within a specified period.

## Markdown Containers

Most of [VitePress Containers](https://vitepress.dev/guide/markdown#custom-containers) are also implemented, enabling
rich markup to enhance markdown content and documentation universally across all Markdown App implementations:

#### Input

    :::info
    This is an info box.
    :::

    :::tip
    This is a tip.
    :::

    :::warning
    This is a warning.
    :::

    :::danger
    This is a dangerous warning.
    :::

#### Output

:::info
This is an info box.
:::

:::tip
This is a tip.
:::

:::warning
This is a warning.
:::

:::danger
This is a dangerous warning.
:::

### Custom Title

You can specify a custom title by appending the text right after the container type:

#### Input

    :::danger STOP
    Danger zone, do not proceed
    :::

#### Output

:::danger STOP
Danger zone, do not proceed
:::


### copy

The **copy** container is ideal for displaying text snippets in a component that allows for easy copying:

#### Input

    :::copy
    Copy Me!
    :::

#### Output

:::copy
Copy Me!
:::

HTML or XML fragments can also be copied by escaping them first:

#### Input

\`\`\`md
:::copy
\`<PackageReference Include="ServiceStack" Version="8.*" />\`
:::
\`\`\`

#### Output

:::copy
\`<PackageReference Include="ServiceStack" Version="8.*" />\`
:::

### sh

Similarly the **sh** container is ideal for displaying and copying shell commands:

#### Input

    :::sh
    npm run prerender
    :::

#### Output

:::sh
npm run prerender
:::

### YouTube

For embedding YouTube Videos, optimally rendered using the \`<LiteYouTube>\` component, e.g:

#### Input

    :::youtube YIa0w6whe2U:::

#### Output

:::youtube YIa0w6whe2U:::

## Markdown Fenced Code Blocks

For more flexibility you can utilize custom fenced components like the \`files\` fenced code block which can 
be used to capture ascii representation of a structured documentation like a folder & file structure, e.g:

    \`\`\`files
    /_videos
      /vue
        admin.md
        autoquerygrid.md
        components.md
      /react
        locode.md
        bookings.md
        nextjs.md
    \`\`\`

That we can render into a more UX-friendly representation by calling the \`Files\` component with the body
of the code-block to convert the structured ascii layout into a more familiar GUI layout:

\`\`\`files
/_videos
  /vue
    admin.md
    autoquerygrid.md
    components.md
  /react
    locode.md
    bookings.md
    nextjs.md
\`\`\`

This nice thing about this approach of marking up documentation is that the markdown content still remains in optimal 
human-readable form even without any custom components to render rich UI components.

## Components In Markdown

Ideally most of your Markdown content are able to just make use of the above features, but when even more interactivity
and richer functionality is required you're able to embed components directly in Markdown, but comes at the cost of
reduced portability.

#### [React Components in Markdown](/posts/markdown-components-in-react)`,date:"2024-03-01",tags:["docs","markdown"],wordCount:2017,lineCount:490,minutesToRead:9,title:"Vite Press Plugin",summary:"Introducing the Vite Press Plugin for Vite Vue & React Apps",author:"Lucy Bates",image:"https://images.unsplash.com/photo-1524668951403-d44b28200ce0?crop=entropy&fit=crop&h=1000&w=2000",url:"/posts/vite-press-plugin"},{slug:"markdown-components-in-react",path:"src/_posts/2024-03-01_markdown-components-in-react.mdx",fileName:"markdown-components-in-react.mdx",content:`import GettingStarted from "@/components/GettingStarted"
import Hello from "./components/Hello"
import Counter from "./components/Counter"
import Plugin from "./components/Plugin"
import HelloApi from "./components/HelloApi"
import ChartJs from "./components/ChartJs"

## React Components in Markdown Pages

Components that are frequently used can be registered as global components in 
[MarkdownComponent.tsx](https://github.com/ServiceStack/press-react/blob/main/src/components/MarkdownComponent.tsx) by
adding them to the \`Components\` collection, e.g:

\`\`\`ts
export const Components: { [name: string]: JSX.Element } = {
    Iconify: Icon,
    Files,
    Youtube,
    FileLayout,
    Include,
    Alert,
    //...
}
\`\`\`

Which will let you reference them in \`*.md\` and \`*.mdx\` Markdown files without having to import them, e.g:

\`\`\`tsx
<div className="py-20 flex justify-evenly">
  <Iconify className="w-28 h-28" icon="logos:vue" />
  <Iconify className="w-28 h-28" icon="logos:vitejs" />
  <Iconify className="w-28 h-28" icon="logos:react" />
</div>
\`\`\`

<div className="py-20 flex justify-evenly">
  <Iconify className="w-28 h-28" icon="logos:vue" />
  <Iconify className="w-28 h-28" icon="logos:vitejs" />
  <Iconify className="w-28 h-28" icon="logos:react" />
</div>

## Importing React Components

If you need to import and use (non Global) React Components you'll need to change your \`*.md\` extension to \`*.mdx\` in order
to be able to use [MDX](https://mdxjs.com) syntax in your Markdown pages.

Any components you want to use in the markdown page will need to imported right at the top of the page using standard JSX import
syntax, e.g:

\`\`\`tsx
import GettingStarted from "@/components/GettingStarted"
import Hello from "./components/Hello"
import Counter from "./components/Counter"
import Plugin from "./components/Plugin"
import HelloApi from "./components/HelloApi"
import ChartJs from "./components/ChartJs"
\`\`\`

Where you're able to import any of your App's components using the absolute \`@/components\` reference to reference the 
App's Home Page's [GettingStarted.tsx](https://github.com/ServiceStack/press-react/blob/main/src/components/GettingStarted.tsx)
component:

<div className="py-20 not-prose flex justify-center">
  <GettingStarted template="press-react" />
</div>

Alternatively components only used in Markdown content is recommended to use the relative \`./components/\` reference
to reference components in [/_posts/components/](https://github.com/ServiceStack/press-react/tree/main/src/_posts/components),

Like the minimal [Hello.tsx](https://github.com/ServiceStack/press-react/blob/main/src/_posts/components/Hello.tsx):

\`\`\`tsx
type Props = { name:string }
export default ({ name }:Props) => (<b>Hello, {name}!</b>)
\`\`\`

That can be referenced using normal JSX Import syntax, e.g:

\`\`\`tsx
<Hello name="Vue 3" />
\`\`\`

<div className="text-center text-2xl py-2">
    <Hello name="Vue 3" />
</div>

Since Markdown and MDX are eventually converted into React components themselves, there's no restriction into what
components can be referenced, from simple Reactive components:

\`\`\`tsx
export default () => {
    let [count, setCount] = useState(1)
    return <b onClick={() => setCount(count+=1)}>Counter {count}</b>
}
\`\`\`

\`\`\`tsx
<Counter />
\`\`\`

<div className="text-center text-2xl py-2 cursor-pointer select-none">
    <Counter />
</div>

To components like [Plugin.tsx](https://github.com/ServiceStack/press-react/blob/main/src/_posts/components/Plugin.tsx) that
make use of external React component libraries:

\`\`\`tsx
import { Button as PrimaryButton } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default () => {
  return (<Dialog>
      <DialogTrigger asChild>
        <PrimaryButton>Open Modal</PrimaryButton>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Greetings</DialogTitle>
          <DialogDescription className="p-4 text-xl">
            Hello @servicestack/vue!
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>)
}
\`\`\`

\`\`\`tsx
<Plugin />
\`\`\`

<div className="text-center">
    <Plugin id="plugin" className="text-2xl py-4" />
</div>

Or components that use Ajax to invoke JSON Server APIs like 
[HelloApi.tsx](https://github.com/ServiceStack/press-react/blob/main/src/_posts/components/HelloApi.tsx):

\`\`\`tsx
import { ChangeEvent, useState, useEffect } from "react"
import { JsonServiceClient } from "@servicestack/client"
import { TextInput } from "@/components/Form"
import { Hello } from "@/dtos"

type Props = { value: string }
export default ({ value }:Props) => {
    const [name, setName] = useState(value)
    const [result, setResult] = useState('')
    
    const client = new JsonServiceClient(baseUrl)
    useEffect(() => {
        (async () => {
            let api = await client.api(new Hello({ name }))
            if (api.response) {
                setResult(api.response.result)
            }
        })()
    }, [name])

    return (<div className="my-8 max-w-fit mx-auto">
      <TextInput value={name} onChange={(e) => setName(e.target.value)}/>
      <b className="my-2 block text-center text-lg">{result}</b>
    </div>)
}
\`\`\`

\`\`\`tsx
<HelloApi value="React" />
\`\`\`

<HelloApi value="React" />

Or components relying on dynamically loading external CDN scripts like [Chart.JS](https://www.chartjs.org):

\`\`\`tsx
import { useEffect, useRef } from "react"
import { addScript } from "@servicestack/client"

const loadJs = addScript(
  'https://cdn.jsdelivr.net/npm/chart.js/dist/chart.umd.min.js')

declare var Chart:any

type Props = { type?:string, data?:any, options?:any }

export default ({ type, data, options }:Props) => {
    const canvas = useRef<HTMLCanvasElement>(null)
    let chart:any = null
    useEffect(() => {
        loadJs.then(() => {
            options ??= {
                responsive: true,
                legend: {
                    position: "top"
                }
            }
            if (chart) {
                chart.destroy()
                chart = null
            }
            chart = new Chart(canvas.current, {
                type: type || "bar",
                data: data,
                options,
            })
        })
    }, [])

    return <div><canvas ref={canvas}></canvas></div>
}
\`\`\`

Which can be called with complex nested object graph properties:

\`\`\`tsx
<ChartJs data={{
    labels: [
        '10,000 Rows',
        '100,000 Rows'
    ],
    datasets: [
    {
        label: 'SQLite Memory',
        backgroundColor: 'rgba(201, 203, 207, 0.2)',
        borderColor: 'rgb(201, 203, 207)',
        borderWidth: 1,
        data: [17.066, 166.747]
    },
    {
        label: 'SQLite Disk',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 1,
        data: [20.224, 199.697]
    },
    //...
  ]
}} />
\`\`\`

To embed beautiful interactive charts directly within your Markdown documentation:

<ChartJs data={{
    labels: [
        '10,000 Rows',
        '100,000 Rows'
    ],
    datasets: [
    {
        label: 'SQLite Memory',
        backgroundColor: 'rgba(201, 203, 207, 0.2)',
        borderColor: 'rgb(201, 203, 207)',
        borderWidth: 1,
        data: [17.066, 166.747]
    },
    {
        label: 'SQLite Disk',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 1,
        data: [20.224, 199.697]
    },
    {
        label: 'PostgreSQL',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgb(153, 102, 255)',
        borderWidth: 1,
        data: [14.389, 115.645]
    },
    {
        label: 'MySQL',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        borderWidth: 1,
        data: [64.389, 310.966]
    },
    {
        label: 'MySqlConnector',
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        borderColor: 'rgb(255, 159, 64)',
        borderWidth: 1,
        data: [64.427, 308.574]
    },
    {
        label: 'SQL Server',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 1,
        data: [89.821, 835.181]
    }]
}} />`,date:"2024-03-01",tags:["docs","markdown"],wordCount:974,lineCount:299,minutesToRead:4,title:"React Components in Markdown",summary:"How to reference and Import React Components in Markdown",author:"Lucy Bates",image:"https://images.unsplash.com/photo-1700427296131-0cc4c4610fc6?crop=entropy&fit=crop&h=1000&w=2000",url:"/posts/markdown-components-in-react"},{slug:"net8-best-blazor",path:"src/_posts/2023-11-22_net8-best-blazor.md",fileName:"net8-best-blazor.md",content:`<script setup>
import Counter from "./components/Counter.vue";
import BlazorVueTemplate from "./components/BlazorVueTemplate.vue";
<\/script>

The best way to find out what's new in .NET 8 Blazor is to watch the excellent 
[Full stack web UI with Blazor in .NET 8](https://www.youtube.com/watch?v=QD2-DwuOfKM) presentation by Daniel Roth and Steve Sanderson, 
which covers how Blazor has become a Full Stack UI Web Technology for developing any kind of .NET Web App.

<LiteYouTube id="YwZdtLEtROA" title="Full stack web UI with Blazor in .NET 8 | .NET Conf 2023" />

## Your first .NET 8 Blazor App

You don't get to appreciate what this means until you create your first .NET 8 Blazor App where you'll be pleasantly
surprised that Blazor Apps render fast, clean HTML without needing to load large Web Assembly assets needed for 
Blazor WebAssembly Apps or starting a stateful Web Socket connection required for Blazor Server Interactive Apps.

This is because the **default rendering mode** for Blazor uses neither of these technologies, instead it returns to 
traditional Web App development where Blazor Pages now return clean, glorious HTML - courtesy of Blazor's 
[Static render mode](https://learn.microsoft.com/en-us/aspnet/core/blazor/components/render-modes).

[![](https://servicestack.net/img/posts/net8-best-blazor/blazor-ssr.png)](https://learn.microsoft.com/en-us/aspnet/core/blazor/components/render-modes)

## Choose your compromise

Previously we were forced to choose upfront whether we wanted to build a Blazor Web Assembly App or a Blazor Server App and
the compromises that came with them, which for public Internet Web Apps wasn't even a choice as Blazor Server Apps perform poorly
over high latency Internet connections. 

This meant choosing Blazor Web Assembly Apps which required downloading a large Web Assembly runtime 
with users experiencing a long delay before the App was functional. To minimize this impact our Blazor WebAssembly Tailwind template 
included [built-in prerendering](https://blazor-tailwind.jamstacks.net/docs/prerender) where as part of deployment would 
generate **static .html pages** that were deployed with the Blazor Web Assembly front-end UI that can be hosted on CDN 
edge networks to further improve load times. 

Whilst this meant the App's UI would be rendered immediately, it still wouldn't be functional until the Web Assembly runtime was 
downloaded and initialized, which would flicker as the static UI was replaced with Blazor's WASM rendered UI, then later 
Authenticated users would experience further delay and UI jank whilst the App signs in the Authenticated User. 
Whilst prerendering is an improvement over Blazor WASM's default blank loading screen, it's still not ideal for public facing Web Apps.

## .NET 8 Blazor is a Game Changer

The situation has greatly improved in .NET 8 where your entire App no longer needs to be bound to a single Interactivity mode.
Even better, Blazor's default **static rendering** mode results in the best UX where the Website Layout and important 
landing pages can be rendered instantly.

### Interactive only when you need it

Only pages that need Blazor's interactivity features can opt-in to whichever Blazor interactive rendering mode makes 
the most sense, either on a page-by-page or component basis, or by choosing \`RenderMode.InteractiveAuto\` which uses
**InteractiveWebAssembly** if the WASM runtime is loaded or **InteractiveServer** if it isn't.

### Enhanced Navigation FTW

Ultimately I expect Blazor's new **Enhanced Navigation** is likely the feature that will deliver the biggest UX improvement 
users will experience given it's enabled by default and gives traditional statically rendered Web Apps instant SPA-like 
navigation responsiveness where new pages are swapped in without needing to perform expensive full page reloads.

It's beauty lies in being able to do this as a mostly transparent detail without the traditional SPA complexity of needing 
to manage complex state or client-side routing. It's a smart implementation that's able to perform fine-grained
DOM updates to only parts of pages that have changed, providing the ultimate UX of preserving page state,
like populated form fields and scroll position, to deliver a fast and responsive UX that previously wasn't attainable
from the simplicity of a Server Rendered App.

Its implementation does pose some challenges in implementing certain features, but we'll cover some approaches 
below we've used to overcome them below.

### Full Stack Web UI

Blazor's static rendering with enhanced navigation and its opt-in flexibility makes .NET 8 Blazor a game changer,
expanding it from a very niche set of use-cases that weren't too adversely affected by its Interactivity mode downsides,
to becoming a viable solution for developing any kind of .NET Web App, especially as it can also be utilized within
existing ASP.NET MVC and Razor Pages Apps.

### Benefits over MVC and Razor Pages

In addition, Blazor's superior component model allows building better encapsulated, more reusable and easier-to-use UI components
which has enabled Blazor's rich 3rd Party library ecosystem to flourish, that we ourselves utilize to develop
the high productivity Tailwind Components in the [ServiceStack.Blazor](https://blazor-gallery.servicestack.net) component library.

So far there's only upsides for .NET Web App development, the compromises only kick in when you need Blazor's interactivity features,
luckily these can now be scoped to just the Pages and Components that need them. But how often do we need them?

### When do you need Blazor's Interactivity features?

It ultimately depends on what App your building, but a lot of Websites can happily display dynamic content, navigate quickly 
with enhanced navigation, fill out and submit forms - all in Blazor's default static rendering mode.

Not even advanced features like **Streaming Rendering** used in Blazor Template's
[Weather.razor](https://github.com/dotnet/aspnetcore/blob/v8.0.0-rc.2.23480.2/src/ProjectTemplates/Web.ProjectTemplates/content/BlazorWeb-CSharp/BlazorWeb-CSharp/Components/Pages/Weather.razor)
page require interactivity, as its progressive rendered UI updates are achieved in a single request without interactivity.

In fact the only time \`@rendermode InteractiveServer\` is needed in the default Blazor template is in the 
[Counter.razor](https://github.com/dotnet/aspnetcore/blob/v8.0.0-rc.2.23480.2/src/ProjectTemplates/Web.ProjectTemplates/content/BlazorWeb-CSharp/BlazorWeb-CSharp/Components/Pages/Counter.razor#L3)
page whose C# Event Handling require it.

Ultimately some form of Interactivity is going to be required in order to add behavior or client-side functionality that 
runs after pages have been rendered, but you still have some options left before being forced to opt into an Interactive Blazor solution.

### Interactive Feature Options

We can see some of these options utilized in the Blazor Template 
[NavMenu.razor](https://github.com/dotnet/aspnetcore/blob/v8.0.0-rc.2.23480.2/src/ProjectTemplates/Web.ProjectTemplates/content/BlazorWeb-CSharp/BlazorWeb-CSharp/Components/Layout/NavMenu.razor)
component which uses JavaScript \`onclick\` event handlers to add client-side behavior to simulate mouse clicks to toggle UI elements:

\`\`\`html
<div class="nav-scrollable" onclick="document.querySelector('.navbar-toggler').click()">
\`\`\`

and submitting forms to Logout users:

\`\`\`html
<LogoutForm id="logout-form" />
<NavLink class="nav-link" onclick="document.getElementById('logout-form').submit(); return false;">
    <span class="bi bi-arrow-bar-left" aria-hidden="true"></span> Logout
</NavLink>
\`\`\`

Effectively adding interactivity to Blazor static rendered pages with client-side JavaScript to avoid paying Blazor's Interactivity tax.

#### Avoid using Interactivity in Layouts

This is especially important for any features you want to add to the Websites Layout or Chrome UI which you'll always want to be
statically rendered so landing pages can load fast and render SEO-friendly server rendered content. 

This meant we couldn't use ServiceStack.Blazor's existing [DarkModeToggle.razor](https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack.Blazor/src/ServiceStack.Blazor/Components/Tailwind/DarkModeToggle.razor)
component for toggling on/off DarkMode since its statically rendered inside the Websites Layout and requires Interactivity to work.

### Vanilla JS Blazor Components

Fortunately utilizing simple element JavaScript callbacks was enough to be able to re-implement its functionality with Vanilla JS 
in the new [DarkModeToggleLite.razor](https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack.Blazor/src/ServiceStack.Blazor/Components/Tailwind/DarkModeToggleLite.razor)
component which works in all Blazor rendering modes, in both full-page or enhanced navigation loads:

\`\`\`html
<button type="button" onclick="toggleDarkMode()" class=@ClassNames(DarkModeToggle.ButtonClasses, Class) role="switch" aria-checked="false" @attributes="AdditionalAttributes">
    <span class="@DarkModeToggle.InnerClasses" data-class-light="translate-x-5" data-class-dark="translate-x-0">
        <span class="@DarkModeToggle.IconClasses" data-class-light="opacity-0 ease-out duration-100" data-class-dark="opacity-100 ease-in duration-200" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z" /></svg>
        </span>
        <span class="@DarkModeToggle.IconClasses" data-class-light="opacity-100 ease-in duration-200" data-class-dark="opacity-0 ease-out duration-100" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-indigo-600" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z" /></svg>
        </span>
    </span>
</button>

<script>
window.toggleDarkMode = (function() {
    let isDark = localStorage.getItem('color-scheme') === 'dark'
    const html = document.documentElement
    function renderDarkMode() {
        html.style.setProperty('color-scheme', isDark ? 'dark' : null)
        html.classList.toggle('dark', isDark)
        document.querySelectorAll('[data-class-light]').forEach(el => {
            const removeClasses = isDark
                    ? el.dataset.classLight
                    : el.dataset.classDark
            const addClasses = isDark
                    ? el.dataset.classDark
                    : el.dataset.classLight

            removeClasses.split(' ').forEach(c => el.classList.remove(c))
            addClasses.split(' ').forEach(c => el.classList.add(c))
        })
    }
    renderDarkMode()

    document.addEventListener('DOMContentLoaded', () =>
            Blazor.addEventListener('enhancedload', () => {
                isDark = localStorage.getItem('color-scheme') === 'dark'
                html.classList.toggle('dark', isDark)
                renderDarkMode()
            }))

    return function() {
        isDark = !isDark
        localStorage.setItem('color-scheme', isDark ? 'dark' : 'light')
        renderDarkMode()
    }
})()
<\/script>
\`\`\`

To support enhanced navigation you'll need to be aware that \`<script>\` tags are **only executed once** on initial page load.
You'll instead need to register a callback with Blazor's \`enhancedload\` event for any startup logic that needs re-executing, 
which is fired after Blazor merges the new page's DOM with the existing DOM, and is where the \`<DarkModeToggleLite>\` 
component re-renders itself with the correct state.

When using callbacks to invoke global functions like this it's recommended to wrap them in an [IIFE](https://developer.mozilla.org/en-US/docs/Glossary/IIFE) 
for better encapsulation of internal component state and functionality to avoid polluting the global namespace. 

### Try it out!

With that it's ready for action, try it out in a new [blazor](https://github.com/NetCoreTemplates/blazor) Project 
or from its Live Demo by toggling on/off Dark Mode Component in the top right corner:

<div class="not-prose mt-8 grid grid-cols-2 gap-4">
    <a class="block group border dark:border-gray-800 hover:border-indigo-700 dark:hover:border-indigo-700 flex flex-col justify-between" href="https://blazor-vue.web-templates.io/?light">
        <img class="p-2" src="https://servicestack.net/img/posts/net8-best-blazor/blazor-light.webp">
        <div class="bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 font-semibold group-hover:bg-indigo-700 group-hover:text-white text-center py-2">blazor-vue.web-templates.io?light</div>
    </a>
    <a class="block group border dark:border-gray-800 hover:border-indigo-700 dark:hover:border-indigo-700 flex flex-col justify-between" href="https://blazor-vue.web-templates.io/?dark">
        <img class="p-2" src="https://servicestack.net/img/posts/net8-best-blazor/blazor-dark.webp">
        <div class="bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 font-semibold group-hover:bg-indigo-700 group-hover:text-white text-center py-2">blazor-vue.web-templates.io?dark</div>
    </a>
</div>

### Declarative JavaScript Modules  

Unfortunately a lot of other approaches won't work with Blazor's Enhanced Navigation, for example whilst the built-in 
ASP.NET Identity Pages all work without Blazor's Interactivity, the [EnableAuthenticator.razor](https://github.com/NetCoreTemplates/blazor/blob/main/MyApp/Components/Pages/Account/Manage/EnableAuthenticator.razor)
page doesn't actually include a solution for providing a visual QR Code barcode which mobile phones can easily scan to 
setup 2FA Authentication.

Whilst the placeholders are there, that implementation detail is left to us to workout how we best want to implement it 
within our Apps, perhaps because they don't want to force an Interactivity rendering mode in the default template.

To avoid a degraded UX with Blazor Interactivity you'll naturally want to implement this with JavaScript using the popular 
[qrcodejs](https://davidshimjs.github.io/qrcodejs/) library by following its instructions and adding a simple inline script to the page:

\`\`\`html
<div data-permanent id="qrCode"></div>
<div id="qrCodeData" data-url="@_authenticatorUri"></div>

<script src="lib/js/qrcode.min.js"><\/script>
<script>
new QRCode(document.getElementById('qrCode'), 
    document.getElementById('qrCodeData').dataset.url)
<\/script>
\`\`\`

Whilst this works as expected in full page reloads, it doesn't work in Blazor's Enhanced Navigation as the \`<script>\` tag
is only executed once on initial page load and not re-executed when the page is loaded with enhanced navigation.

Your options are to change all links to that page with \`data-enhance-nav="false"\` to turn off enhanced navigation 
to that page, or we need to find another way.

The solution that worked best for us is to use declarative instructions to specify which JavaScript modules should be loaded
for any page, which we can do by adding a \`data-module\` attribute to any element, e.g:

\`\`\`html
<div data-module="pages/Account/Manage/EnableAuthenticator.mjs">
\`\`\`

These instructions are then handled by [app.mjs](https://github.com/NetCoreTemplates/blazor/blob/main/MyApp/wwwroot/mjs/app.mjs)
on each navigation which loads the specified JavaScript module and calls its \`load()\` function if it exists:

\`\`\`js
export async function remount() {
    document.querySelectorAll('[data-module]').forEach(async el => {
        let modulePath = el.dataset.module
        if (!modulePath) return
        if (!modulePath.startsWith('/') && !modulePath.startsWith('.')) {
            modulePath = \`../\${modulePath}\`
        }
        try {
            const module = await import(modulePath)
            if (typeof module.default?.load == 'function') {
                module.default.load()
            }
        } catch (e) {
            console.error(\`Couldn't load module \${el.dataset.module}\`, e)
        }
    })
}

document.addEventListener('DOMContentLoaded', () =>
    Blazor.addEventListener('enhancedload', remount))
\`\`\`

Which for \`EnableAuthenticator.razor\` page loads the 
[EnableAuthenticator.mjs](https://github.com/NetCoreTemplates/blazor/blob/main/MyApp/wwwroot/pages/Account/Manage/EnableAuthenticator.mjs)
JavaScript Module which dynamically loads the \`qrcode.min.js\` library and initializes the QR Code on its exported \`load()\` function:

\`\`\`js
import { addScript, $1 } from "@servicestack/client"
const loadJs = addScript('lib/js/qrcode.min.js')

export default {
    async load() {
        await loadJs
        new QRCode($1("#qrCode"), $1('#qrCodeData').dataset.url)
    }
}
\`\`\`

Which now works as expected in both full page reloads and Blazor's Enhanced Navigation:

[![](https://servicestack.net/img/posts/net8-best-blazor/blazor-identityauth-qrcode.png)](https://blazor.web-templates.io/Account/Manage/EnableAuthenticator)

## Blazor without Blazor Interactivity

So right now we have a Blazor App that's predominantly statically rendered, with fast and SEO-friendly without any downsides 
of the Blazor's Interactivity options, but how much of our App's functionality can we implement without Blazor Interactivity?

### What doesn't work with Enhanced Navigation

As of now we've managed to implement most of the required functionality with Vanilla JS, however for any moderately complex
UI you'll likely want to use one of the popular JavaScript UI libraries, of which we believe [Vue.js](https://vuejs.org) 
is the best library for progressively enhancing statically rendered content which offers the best balance of features, 
performance and size.

The problem being that the natural way to use Vue.js to progressively enhance HTML content doesn't work with Blazor's 
Enhanced Navigation.

E.g the natural way to implement Blazor's [Counter.razor](https://github.com/NetCoreTemplates/blazor/blob/main/MyApp/Components/Pages/Counter.razor)
page in Vue is to [implement its UI](https://vuejs.org/guide/essentials/template-syntax.html) in HTML and use JavaScript 
to mount the component with the element:

\`\`\`html
<div id="content">
    <p class="my-4">Current count: {{currentCount}}</p>

    <primary-button v-on:click="incrementCount">Click me</primary-button>
</div>
<script type="module">
import { ref } from 'vue'
import { mount } from 'app.mjs'

const App = {
    setup() {
        const currentCount = ref(0)
        const incrementCount = () => currentCount.value++

        return { currentCount, incrementCount }
    }
}
mount('#content', App)
<\/script>
\`\`\`

Which as you'd expect works in full page reloads, but not with Enhanced Navigation, where no JavaScript
is re-executed upon navigation, leaving it as inert HTML.

## Declarative Vue Components

Thankfully we can use the same approach we used for loading JavaScript modules to load Vue.js components, by using the 
\`data-component\` attribute to specify which **global** Vue component to mount with any properties optionally
specified in the\`data-props\` attribute, e.g:

\`\`\`html
<div data-component="GettingStarted" data-props="{template:'blazor'}"></div> 
\`\`\`

This does require ensuring all components loaded this way are registered as a global component, as done in:

\`\`\`js
import GettingStarted from "./components/GettingStarted.mjs"

/** Shared Global Components */
const Components = {
    GettingStarted,
}

export function mount(sel, component, props) {
    const app = createApp(component, props)
    Object.keys(Components).forEach(name => {
        app.component(name, Components[name])
    })
    app.mount(document.querySelector(sel))
}
\`\`\`

However this also means that all global components would need to be downloaded before any Vue Components can be rendered
the first time a website is accessed. Which wont be an issue after the first page is loaded after the browser caches all 
its JS Module dependencies, but we can do better.

### Lazy Loading Vue Components

To avoid this we can instead use the \`data-component\` attribute to specify the path to the Vue component to load,
ensuring that only the Vue components required for the current page is loaded, e.g:

\`\`\`html
<div data-component="pages/Counter.mjs"></div> 
\`\`\`

Which is how we can implement Vue Components that work in both statically rendered and enhanced navigation pages:

\`\`\`js
import { ref } from 'vue'

export default {
    template: \`
        <p class="my-4">Current count: {{currentCount}}</p>

        <PrimaryButton @click="incrementCount">Click me</PrimaryButton>
    \`,
    setup() {
        const currentCount = ref(0)
        const incrementCount = () => currentCount.value++

        return { currentCount, incrementCount }
    }
}
\`\`\`

:::{.text-center}
#### Blazor Counter in Vue.js

<counter></counter>
:::

## The new Blazor Vue Template 

This ends up being how the Interactive features in the new [blazor-vue](https://github.com/NetCoreTemplates/blazor-vue/) template 
are implemented - ideal for building fast, SEO-friendly statically rendered Blazor Web Apps where all its dynamic functionally
uses Vue.js to progressively enhance its static rendered content - eliminating Blazor's current limitations of being able to 
use Blazor static SSR to implement an entire App with:

![](https://servicestack.net/img/posts/net8-best-blazor/blazor-ssr-advantages.webp)

### Blazor Vue Tailwind Template

The new [blazor-vue](https://github.com/NetCoreTemplates/blazor-vue) template implements all the features of the
[blazor](https://github.com/NetCoreTemplates/blazor) template but reimplements all its interactive features with
Vue.js to and the [Vue Components](/vue/) library.

<div class="not-prose mt-16 flex flex-col items-center">
   <div class="flex">
      <svg class="w-28 h-28 text-purple-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M23.834 8.101a13.912 13.912 0 0 1-13.643 11.72a10.105 10.105 0 0 1-1.994-.12a6.111 6.111 0 0 1-5.082-5.761a5.934 5.934 0 0 1 11.867-.084c.025.983-.401 1.846-1.277 1.871c-.936 0-1.374-.668-1.374-1.567v-2.5a1.531 1.531 0 0 0-1.52-1.533H8.715a3.648 3.648 0 1 0 2.695 6.08l.073-.11l.074.121a2.58 2.58 0 0 0 2.2 1.048a2.909 2.909 0 0 0 2.695-3.04a7.912 7.912 0 0 0-.217-1.933a7.404 7.404 0 0 0-14.64 1.603a7.497 7.497 0 0 0 7.308 7.405s.549.05 1.167.035a15.803 15.803 0 0 0 8.475-2.528c.036-.025.072.025.048.061a12.44 12.44 0 0 1-9.69 3.963a8.744 8.744 0 0 1-8.9-8.972a9.049 9.049 0 0 1 3.635-7.247a8.863 8.863 0 0 1 5.229-1.726h2.813a7.915 7.915 0 0 0 5.839-2.578a.11.11 0 0 1 .059-.034a.112.112 0 0 1 .12.053a.113.113 0 0 1 .015.067a7.934 7.934 0 0 1-1.227 3.549a.107.107 0 0 0-.014.06a.11.11 0 0 0 .073.095a.109.109 0 0 0 .062.004a8.505 8.505 0 0 0 5.913-4.876a.155.155 0 0 1 .055-.053a.15.15 0 0 1 .147 0a.153.153 0 0 1 .054.053A10.779 10.779 0 0 1 23.834 8.1zM8.895 11.628a2.188 2.188 0 1 0 2.188 2.188v-2.042a.158.158 0 0 0-.15-.15Z"></path></svg>
   </div>
</div>
<div class="not-prose mt-4 px-4 sm:px-6">
<div class="text-center"><h3 id="blazor-vue-template" class="text-4xl sm:text-5xl md:text-6xl tracking-tight font-extrabold text-gray-900">
    Blazor Vue Template
</h3></div>
<div class="py-8 max-w-7xl mx-auto px-4 sm:px-6">
    <LiteYouTube id="ujbTGn4IwFs" title="Blazor Vue Template" />    
</div>
</div>

<div class="not-prose relative bg-white dark:bg-black py-4">
    <div class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <p class="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl">Create a new Blazor Vue Tailwind App</p>
        <p class="mx-auto mt-5 max-w-prose text-xl text-gray-500"> 
            Create a new Blazor Vue Tailwind project with your preferred project name:
        </p>
    </div>
    <BlazorVueTemplate repo="NetCoreTemplates/blazor-vue" name="Blazor Vue" />
</div>

#### Faster iterative development

Other benefits of using Vue for Interactivity is the fast iterative feedback loop during development that even applies 
to its [Markdown-powered Blog](https://blazor-vue.web-templates.io/blog) which itself can embed rich interactive Vue Components and rich JavaScript UIs 
like Chart.js in its [Markdown Blog Posts](https://blazor-vue.web-templates.io/posts/razor-ssg-new-blog-features) thanks to its unapologetic, complexity-free 
[#NoBuild](https://world.hey.com/dhh/you-can-t-get-faster-than-no-build-7a44131c) solution.

### Blazor App Tailwind Template

Alternatively the [Blazor Project Template](/posts/net8-blazor-template) is for C# Developers who prefer 
to use Blazor end-to-end for all App functionality, which uses Blazor Server and 
[ServiceStack.Blazor Components](https://blazor-gallery.jamstacks.net/) on its Pages requiring Interactivity:

<div class="not-prose shadow rounded-sm p-4">
    <a href="/posts/net8-blazor-template">
        <img src="https://raw.githubusercontent.com/ServiceStack/Assets/master/csharp-templates/blazor.png" alt=""></a>
</div>

Whilst Blazor Interactivity may remain the predominant solution amongst .NET developers we believe .NET 8 Blazor opens the doors
for progressively enhanced statically-rendered Blazor Apps which has now become our preferred solution for developing
most .NET Web Apps.

It overcomes our biggest gripe with Blazor Web Assembly, that we were unsuccessful in
[prerendering away](https://blazor-tailwind.jamstacks.net/docs/prerender) its poor startup performance and UI jank
in Internet Apps.

## Blazor Vue Diffusion

So when we learned about .NET 8's static default rendering mode and enhanced navigation we jumped at the opportunity to
create the Blazor Vue template which was used to re-implement Blazor Diffusion with Blazor SSR and Vue.js - a statically 
rendered Blazor App that uses Vue.js for all its functionality.

<h3 class="not-prose text-center pb-8">
    <a class="text-4xl text-blue-600 hover:underline" href="https://blazordiffusion.com">https://blazordiffusion.com</a>
</h3>

[Blazor Diffusion](https://github.com/NetCoreApps/BlazorDiffusion) is our Blazor Demo App we used to showcase how you 
could use [Universal API Components](https://youtu.be/66DgLHExC9E) to build Blazor Components and entire Blazor Apps
whose source code runs in both Blazor Server and Blazor Web Assembly Interactive modes, which was first 
developed with [Blazor Server](https://github.com/NetCoreApps/BlazorDiffusion) then used a 
[sync.bat](https://github.com/NetCoreApps/BlazorDiffusionWasm/blob/main/sync.bat) script to export its source code into 
a [Blazor Web Assembly](https://github.com/NetCoreApps/BlazorDiffusionWasm) project that was deployed instead.

The Blazor Vue version starts from a clean slate, utilizing statically rendered Blazor for faster page loads and generating 
SEO-friendly content:

[![](https://servicestack.net/img/posts/net8-best-blazor/blazordiffusionvue.webp)](https://blazordiffusion.com/)

We're very pleased with the results, much faster loading times, enhanced navigation, no UI jankiness, better SEO - essentially 
a better UX overall, despite not needing any prerendering solution - all whilst enjoying a faster iterative development experience 
where all Vue component changes were immediately visible after save.

You can compare the differences of each Blazor Solution from the Live Demos below:

|                     | Live Demo                                                        | Source Code                                                               |
|---------------------|------------------------------------------------------------------|---------------------------------------------------------------------------|
| Blazor Vue          | [blazordiffusion.com](https://blazordiffusion.com)               | [BlazorDiffusionVue](https://github.com/NetCoreApps/BlazorDiffusionVue)   |
| Blazor Web Assembly | [api.blazordiffusion.com](https://api.blazordiffusion.com)       | [BlazorDiffusionWasm](https://github.com/NetCoreApps/BlazorDiffusionWasm) |
| Blazor Server       | [server.blazordiffusion.com](https://server.blazordiffusion.com) | [BlazorDiffusion](https://github.com/NetCoreApps/BlazorDiffusion)         |

> All Live Demos are hosted on a shared [Hetzner Cloud VM](http://cloud.hetzner.com) using SQLite that's replicated to [Cloudflare R2](https://developers.cloudflare.com/r2/) with [Litestream](https://docs.servicestack.net/ormlite/litestream)
`,date:"2023-11-22",tags:["c#","blazor","servicestack"],wordCount:4094,lineCount:503,minutesToRead:18,title:".NET 8's Best Blazor is not Blazor as we know it",summary:"We explore the exciting new potential of Blazor in .NET 8 to develop fast, interactive Web Apps without compromise",image:"https://images.unsplash.com/photo-1482686115713-0fbcaced6e28?crop=entropy&fit=crop&h=1000&w=2000",author:"Gayle Smith",url:"/posts/net8-best-blazor"},{slug:"net8-blazor-template",path:"src/_posts/2023-11-20_net8-blazor-template.md",fileName:"net8-blazor-template.md",content:`With the release of **.NET 8**, we're happy to announce ServiceStack's new [Blazor](https://blazor.web-templates.io/)
Tailwind project template that takes advantage of .NET 8 Blazor's new features that redefines modern Web Development in C#.

In this video overview we'll explore how the template, adopts Blazor's familiar **ASP.NET Core Identity** 
for its authentication, utilizes the modern [Tailwind CSS](https://tailwindcss.com) framework for beautiful responsive design
and adopts .NET's best-practice
[Docker Containerization](https://learn.microsoft.com/en-us/dotnet/core/docker/publish-as-container) support for its built-in
[GitHub Action Deployments](https://blazor.web-templates.io/deploy) which enables a simple ready-made CI solution for deployment to any
Linux Host via SSH and Docker compose.

We’ll also discuss the project's structure, usage of **ASP.NET Core Identity** for Authorization and utilizing
**ServiceStack Blazor Components** for data handling, all integrated to maximize developer efficiency in building Web Applications.

<div class="not-prose mt-16 flex flex-col items-center">
   <div class="flex">
      <svg class="w-28 h-28 text-purple-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M23.834 8.101a13.912 13.912 0 0 1-13.643 11.72a10.105 10.105 0 0 1-1.994-.12a6.111 6.111 0 0 1-5.082-5.761a5.934 5.934 0 0 1 11.867-.084c.025.983-.401 1.846-1.277 1.871c-.936 0-1.374-.668-1.374-1.567v-2.5a1.531 1.531 0 0 0-1.52-1.533H8.715a3.648 3.648 0 1 0 2.695 6.08l.073-.11l.074.121a2.58 2.58 0 0 0 2.2 1.048a2.909 2.909 0 0 0 2.695-3.04a7.912 7.912 0 0 0-.217-1.933a7.404 7.404 0 0 0-14.64 1.603a7.497 7.497 0 0 0 7.308 7.405s.549.05 1.167.035a15.803 15.803 0 0 0 8.475-2.528c.036-.025.072.025.048.061a12.44 12.44 0 0 1-9.69 3.963a8.744 8.744 0 0 1-8.9-8.972a9.049 9.049 0 0 1 3.635-7.247a8.863 8.863 0 0 1 5.229-1.726h2.813a7.915 7.915 0 0 0 5.839-2.578a.11.11 0 0 1 .059-.034a.112.112 0 0 1 .12.053a.113.113 0 0 1 .015.067a7.934 7.934 0 0 1-1.227 3.549a.107.107 0 0 0-.014.06a.11.11 0 0 0 .073.095a.109.109 0 0 0 .062.004a8.505 8.505 0 0 0 5.913-4.876a.155.155 0 0 1 .055-.053a.15.15 0 0 1 .147 0a.153.153 0 0 1 .054.053A10.779 10.779 0 0 1 23.834 8.1zM8.895 11.628a2.188 2.188 0 1 0 2.188 2.188v-2.042a.158.158 0 0 0-.15-.15Z"></path></svg>
   </div>
</div>
<div class="not-prose mt-4 px-4 sm:px-6">
<div class="text-center"><h3 id="blazor-template" class="text-4xl sm:text-5xl md:text-6xl tracking-tight font-extrabold text-gray-900">
    Blazor Tailwind Template
</h3></div>
<div class="py-8 max-w-7xl mx-auto px-4 sm:px-6">
    <LiteYouTube id="hqyozHSL0Nk" title=".NET 8 Blazor Tailwind Template" />
</div>
</div>

## ASP.NET Core Identity Integration

In terms of security, the template integrates ASP.NET Core Identity, offering a structured approach to authentication,
including support for email confirmation, two-factor authentication and GDPR compliance features.

Integrating ASP.NET Core Identity doesn't complicate securing ServiceStack services which can still be secured with
[Declarative Validation Attributes](https://docs.servicestack.net/auth/authentication-and-authorization#declarative-validation-attributes)
for role-based access control, e.g. using \`[ValidateHasRole("Employee")]\` directly on Request DTOs, bringing any 
existing knowledge and experience with ServiceStack Authentication to securing UIs and APIs with Identity Auth.

The template includes a pre-baked solution for sending general and Identity Auth Emails with your configured SMTP Server
in managed background workers with [Background MQ](https://docs.servicestack.net/background-mq) and an enhanced version of the default 
ASP.NET Core Blazor Identity UI, with all pages upgraded to use a beautiful Tailwind CSS theme as well as integration with 
[qrcode.js](https://davidshimjs.github.io/qrcodejs/) 
for providing a visual QR Code barcode which mobile phone users can easily scan to setup 2FA Authentication:

![](https://servicestack.net/img/posts/net8-best-blazor/blazor-identityauth-qrcode.png)

## Responsive and Interactive UIs with Tailwind CSS

With responsive UI out-of-the-box, thanks to Tailwind CSS, Developers can style their Blazor Apps with the modern 
popular utility-first CSS framework for creating beautiful, maintainable **Responsive UIs** with **DarkMode** support

It also takes full advantage of Blazor’s static rendering for its Website layout for optimal performance and SEO,
so only Pages and Components that require interactivity need to opt-in for Blazor Server Interactive rendering modes.

## ServiceStack.Blazor Tailwind Components

The [ServiceStack.Blazor Components](https://blazor-gallery.jamstacks.net), updated for .NET 8 enables you to rapidly
develop beautiful Blazor Apps integrated with Rich high-productivity UI Tailwind Components like
[AutoQueryGrid](https://blazor-gallery.servicestack.net/gallery/autoquerygrid) and
[AutoForms](https://blazor-gallery.servicestack.net/gallery/autoform) which interface with
[AutoQuery services](https://docs.servicestack.net/autoquery/) to provide a full CRUD data management UI with minimal effort.

## Enhanced Containerization

.NET 8 simplifies Docker integration. Using \`dotnet publish\`, developers can now automate the creation of Docker images 
that adhere to best security practices, such as running as a non-root user in containers that can utilize the built-in 
GitHub Actions to effortlessly deploy their containerized Blazor Apps with Docker and GitHub Registry via SSH to any Linux Server.

## Other Template Features

Other features that enhances the default ASP.NET Blazor App templates with several modern, high-productivity features, include:

- [Entity Framework](https://learn.microsoft.com/ef/) & [OrmLite](https://docs.servicestack.net/ormlite/) - Choose the best ORM for each App feature, with a unified solution that sees [OrmLite's DB Migrations](https://docs.servicestack.net/ormlite/db-migrations) run both EF and OrmLite migrations, inc. Seed Data with a single command at Development or Deployment
- [SQLite Database](https://www.sqlite.org) - Set up as the default database, it allows developers to start immediately without configuring a separate database server
- [AutoQuery](https://docs.servicestack.net/autoquery/) - Rapidly developing data-driven APIs, UIs and CRUD Apps
- [Auto Admin Pages](https://www.youtube.com/watch?v=tt0ytzVVjEY) - Quickly develop your back-office CRUD Admin UIs to manage your App's Database tables at [/admin](https://blazor.web-templates.io/admin)
- [Markdown](https://docs.servicestack.net/razor-press/syntax) - Maintain SEO-friendly documentation and content-rich pages like this one with just Markdown, beautifully styled with [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin)
- [Built-in UIs](https://servicestack.net/auto-ui) - Use ServiceStack's Auto UIs to [Explore your APIs](https://docs.servicestack.net/api-explorer) at [/ui](https://blazor.web-templates.io/ui/)
  or Query your [App's Database Tables](https://docs.servicestack.net/admin-ui-database) at [/admin-ui/database](https://blazor.web-templates.io/admin-ui/database)
- [Universal API Components](https://youtu.be/66DgLHExC9E) - Effortlessly create reusable, maximally performant universal Blazor API Components that works in Blazor Server and Web Assembly Interactivity modes
- [Organized Project Structure](https://docs.servicestack.net/physical-project-structure) - Divided into AppHost, Service Interface, Service Model, and Tests projects to promote separation of concerns and maintainability.`,date:"2023-11-20",tags:["dotnet","blazor","templates"],wordCount:1192,lineCount:80,minutesToRead:5,title:"New .NET 8 Blazor Tailwind Template",summary:"The new Blazor for .NET 8 template streamlines web UI development in C#.",image:"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?crop=entropy&fit=crop&h=1000&w=2000",author:"Lucy Bates",url:"/posts/net8-blazor-template"},{slug:"razor-ssg-new-blog-features",path:"src/_posts/2023-08-23_razor-ssg-new-blog-features.mdx",fileName:"razor-ssg-new-blog-features.mdx",content:`import GettingStarted from "@/components/GettingStarted"
import ChartJs from "./components/ChartJs"

## New Blogging features in Razor SSG

[Razor SSG](https://razor-ssg.web-templates.io) is our Free Project Template for creating fast, statically generated Websites and Blogs with
Markdown & C# Razor Pages. A benefit of using Razor SSG to maintain this
[servicestack.net(github)](https://github.com/ServiceStack/servicestack.net) website is that any improvements added
to our website end up being rolled into the Razor SSG Project Template for everyone else to enjoy.

This latest release brings a number of features and enhancements to improve Razor SSG usage as a Blogging Platform -
a primary use-case we're focused on as we pen our [22nd Blog Post for the year](https://servicestack.net/posts/year/2023) with improvements
in both discoverability and capability of blog posts:

### RSS Feed

Razor SSG websites now generates a valid RSS Feed for its blog to support their readers who'd prefer to read blog posts
and notify them as they're published with their favorite RSS reader:

<div className="not-prose my-8">
   <a href="https://razor-ssg.web-templates.io/feed.xml">
      <div className="block flex justify-center shadow hover:shadow-lg rounded overflow-hidden">
         <img className="max-w-3xl py-8" src="https://servicestack.net/img/posts/razor-ssg/valid-rss.png" />
      </div>
   </a>
    <div className="mt-4 flex justify-center">
        <a className="text-indigo-600 hover:text-indigo-800" href="https://razor-ssg.web-templates.io/feed.xml">razor-ssg.web-templates.io/feed.xml</a>
        <a className="ml-4 text-indigo-600 hover:text-indigo-800" href="https://servicestack.net/feed.xml">servicestack.net/feed.xml</a>
    </div>
</div>

### Meta Headers support for Twitter cards and SEO

Blog Posts and Pages now include additional \`<meta>\` HTML Headers to enable support for
[Twitter Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards) in both
Twitter and Meta's new [threads.net](https://threads.net), e.g:

<div className="not-prose my-8 flex justify-center">
   <a className="block max-w-2xl" href="https://www.threads.net/@servicestack/post/CvIFobPBs5h">
      <div className="block flex justify-center shadow hover:shadow-lg rounded overflow-hidden">
         <img className="py-8" src="https://servicestack.net/img/posts/razor-ssg/twitter-cards.png" />
      </div>
   </a>
</div>

### Improved Discoverability

To improve discoverability and increase site engagement, bottom of blog posts now include links to other posts by
the same Blog Author, including links to connect to their preferred social networks and contact preferences:

![](https://servicestack.net/img/posts/razor-ssg/other-author-posts.png)

### Posts can include Vue Components

Blog Posts can now embed any global Vue Components directly in its Markdown, e.g:

\`\`\`html
<GettingStarted template="press-react" />
\`\`\`

#### [/mjs/components/GettingStarted.mjs](https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/wwwroot/mjs/components/GettingStarted.mjs)

<div className="not-prose my-20 flex justify-center">
    <GettingStarted template="press-react" />
</div>

#### Individual Blog Post dependencies

<FileLayout files={{
    wwwroot: {
        posts: { _: ['<slug>.mjs','<slug>.css'] },
    }
}} />

Just like Pages and Docs they can also include specific JavaScript **.mjs** or **.css** in the \`/wwwroot/posts\` folder
which will only be loaded for that post:

Now posts that need it can dynamically load large libraries like [Chart.js](https://www.chartjs.org) and use it
inside a custom Vue component by creating a custom \`/posts/<slug>.mjs\` that exports what components and features
your blog post needs, e.g:

#### [/posts/new-blog-features.mjs](https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/wwwroot/posts/new-blog-features.mjs)

\`\`\`js
import ChartJs from '@/components/ChartJs'

<ChartJs data={data} />
\`\`\`

In this case it enables support for [Chart.js](https://www.chartjs.org) by including a custom Vue component that makes it
easy to create charts from Vue Components embedded in markdown:

#### [/components/ChartJs.tsx](https://github.com/NetCoreTemplates/react-spa/blob/main/MyApp.Client/src/_posts/components/ChartJs.tsx)

\`\`\`js
import { useEffect, useRef } from "react"
import { addScript } from "@servicestack/client"

const loadJs = addScript('https://cdn.jsdelivr.net/npm/chart.js/dist/chart.umd.min.js')

declare var Chart:any

type Props = { type?:string, data?:any, options?:any }

export default ({ type, data, options }:Props) => {
    const canvas = useRef<HTMLCanvasElement>(null)
    let chart:any = null
    useEffect(() => {
        loadJs.then(() => {
            options ??= {
                responsive: true,
                legend: {
                    position: "top"
                }
            }
            if (chart) {
                chart.destroy()
                chart = null
            }
            chart = new Chart(canvas.current, {
                type: type || "bar",
                data: data,
                options,
            })
        })
    }, [])

    return <div><canvas ref={canvas}></canvas></div>
}
\`\`\`

Which allows this post to embed Chart.js charts using the above custom \`<chart-js>\` Vue component and a JS Object literal, e.g:

\`\`\`tsx
<ChartJs data={{
    labels: [
        //...
    ],
    datasets: [
        //...
    ]
}} />
\`\`\`

Which the [Bulk Insert Performance](https://servicestack.net/posts/bulk-insert-performance) Blog Post uses extensively to embeds its
Chart.js Bar charts:

<ChartJs data={{
    labels: [
        '10,000 Rows',
        '100,000 Rows'
    ],
    datasets: [
    {
        label: 'SQLite Memory',
        backgroundColor: 'rgba(201, 203, 207, 0.2)',
        borderColor: 'rgb(201, 203, 207)',
        borderWidth: 1,
        data: [17.066, 166.747]
    },
    {
        label: 'SQLite Disk',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 1,
        data: [20.224, 199.697]
    },
    {
        label: 'PostgreSQL',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgb(153, 102, 255)',
        borderWidth: 1,
        data: [14.389, 115.645]
    },
    {
        label: 'MySQL',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        borderWidth: 1,
        data: [64.389, 310.966]
    },
    {
        label: 'MySqlConnector',
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        borderColor: 'rgb(255, 159, 64)',
        borderWidth: 1,
        data: [64.427, 308.574]
    },
    {
        label: 'SQL Server',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 1,
        data: [89.821, 835.181]
    }]
}} />

### New Markdown Containers

[Custom Containers](https://github.com/xoofx/markdig/blob/master/src/Markdig.Tests/Specs/CustomContainerSpecs.md)
are a popular method for implementing Markdown Extensions for enabling rich, wrist-friendly consistent
content in your Markdown documents.

Most of [VitePress Markdown Containers](https://vitepress.dev/guide/markdown#custom-containers)
are also available in Razor SSG websites for enabling rich, wrist-friendly consistent markup in your Markdown pages, e.g:

\`\`\`
:::info
This is an info box.
:::

:::tip
This is a tip.
:::

:::warning
This is a warning.
:::

:::danger
This is a dangerous warning.
:::

:::copy
Copy Me!
:::
\`\`\`

:::info
This is an info box.
:::

:::tip
This is a tip.
:::

:::warning
This is a warning.
:::

:::danger
This is a dangerous warning.
:::

:::copy
Copy Me!
:::

See Razor Press's [Markdown Containers docs](https://razor-press.web-templates.io/containers) for the complete list of available containers and examples on how to
implement your own [Custom Markdown containers](https://razor-press.web-templates.io/containers#implementing-block-containers).

### Support for Includes

Markdown fragments can be added to \`_pages/_include\` - a special folder rendered with
[Pages/Includes.cshtml](https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Pages/Includes.cshtml) using
an [Empty Layout](https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Pages/Shared/_LayoutEmpty.cshtml)
which can be included in other Markdown and Razor Pages or fetched on demand with Ajax.

Markdown Fragments can be then included inside other markdown documents with the \`::include\` inline container, e.g:

\`\`\`
:::pre
::include vue/formatters.md::
:::
\`\`\`

Where it will be replaced with the HTML rendered markdown contents of fragments maintained in \`_pages/_include\`.

### Include Markdown in Razor Pages

Markdown Fragments can also be included in Razor Pages using the custom \`MarkdownTagHelper.cs\` \`<markdown/>\` tag:

\`\`\`html
<markdown include="vue/formatters.md"></markdown>
\`\`\`

### Inline Markdown in Razor Pages

Alternatively markdown can be rendered inline with:

\`\`\`html
<markdown>
## Using Formatters

Your App and custom templates can also utilize @servicestack/vue's
[built-in formatting functions](href="/vue/use-formatters).
</markdown>
\`\`\`

### Light and Dark Mode Query Params

You can link to Dark and Light modes of your Razor SSG website with the \`?light\` and \`?dark\` query string params:

- [https://razor-ssg.web-templates.io/?dark](https://razor-ssg.web-templates.io/?dark)
- [https://razor-ssg.web-templates.io/?light](https://razor-ssg.web-templates.io/?light)

### Blog Post Authors threads.net and Mastodon links

The social links for Blog Post Authors can now include [threads.net](https://threads.net) and [mastodon.social](https://mastodon.social) links, e.g:

\`\`\`json
{
  "AppConfig": {
    "BlogImageUrl": "https://servicestack.net/img/logo.png",
    "Authors": [
      {
        "Name": "Lucy Bates",
        "Email": "lucy@email.org",
        "ProfileUrl": "img/authors/author1.svg",
        "TwitterUrl": "https://twitter.com/lucy",
        "ThreadsUrl": "https://threads.net/@lucy",
        "GitHubUrl": "https://github.com/lucy",
        "MastodonUrl": "https://mastodon.social/@lucy"
      }
    ]
  }
}
\`\`\`

## Feature Requests Welcome

Most of Razor SSG's features are currently being driven by requirements from the new
[Websites built with Razor SSG](https://razor-ssg.web-templates.io/#showcase) and features we want available in our Blogs,
we welcome any requests for missing features in other popular Blogging Platforms you'd like to see in Razor SSG to help
make it a high quality blogging solution built with our preferred C#/.NET Technology Stack, by submitting them to:

\`\`\`
:::{.text-indigo-600 .text-3xl .text-center}
[https://servicestack.net/ideas](https://servicestack.net/ideas)
:::
\`\`\`

### SSG or Dynamic Features

Whilst statically generated websites and blogs are generally limited to features that can be generated at build time, we're able to
add any dynamic features we need in [CreatorKit](https://servicestack.net/creatorkit/) - a Free companion self-host .NET App Mailchimp and Disqus
alternative which powers any dynamic functionality in Razor SSG Apps like the blogs comments and Mailing List features
in this Blog Post.
`,date:"2023-08-23",tags:["razor","markdown","blog","dev"],wordCount:1471,lineCount:339,minutesToRead:7,title:"New Blogging features in Razor SSG",summary:"Explore the new Blogging Features in Razor SSG",image:"https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&fit=crop&h=1000&w=2000",author:"Lucy Bates",url:"/posts/razor-ssg-new-blog-features"},{slug:"razor-ssg",path:"src/_posts/2023-03-30_razor-ssg.md",fileName:"razor-ssg.md",content:`Razor SSG is a Razor Pages powered Markdown alternative to [Ruby's Jekyll](https://jekyllrb.com/) & 
[Next.js](https://nextjs.org) that's ideal for generating static websites & blogs using C#, Razor Pages & Markdown. 

### GitHub Codespaces Friendly

In addition to having a pure Razor + .NET solution to create fast, CDN-hostable static websites, it also aims to provide a
great experience from GitHub Codespaces, where you can create, modify, preview & check-in changes before the included GitHub Actions
auto deploy changes to its GitHub Pages CDN - all from your iPad!

[![](https://servicestack.net/img/posts/razor-ssg/codespaces.png)](https://github.com/features/codespaces)

To see this in action, we walk through the entire workflow of creating, updating and adding features to a custom Razor SSG website 
from just a browser using Codespaces, that auto publishes changes to your GitHub Repo's **gh-pages** branch where it's hosted for 
free on GitHub Pages CDN:

<iframe class="youtube" src="https://www.youtube.com/embed/MRQMBrXi5Sc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>

### Enhance with simple, modern JavaScript

For enhanced interactivity, static markdown content can be [progressively enhanced](https://servicestack.net/posts/javascript) with Vue 3 components,
as done in this example that embed's the 
[GettingStarted.mjs](https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/wwwroot/mjs/components/GettingStarted.mjs) Vue Component to create new Razor SSG App's below with:

\`\`\`html
<getting-started template="razor-ssg"></getting-started>
\`\`\`

<div class="py-8 not-prose text-base flex justify-center">
  <getting-started template="razor-ssg"></getting-started>
</div>

Although with full control over the websites \`_Layout.cshtml\`, you're free to use any preferred JS Module or Web Component you prefer.

## Razor Pages

Your website can be built using either Markdown \`.md\` or Razor \`.cshtml\` pages, although it's generally recommended to 
use Markdown to capture the static content for your website for improved productivity and ease of maintenance.

### Content in Markdown, Functionality in Razor Pages

The basic premise behind most built-in features is to capture static content in markdown using a combination of 
folder structure & file name conventions in addition to each markdown page's frontmatter & content. This information
is then used to power each feature using Razor pages for precise layout and functionality.

The template includes the source code for each website feature, enabling full customization that also serves as good examples
for how to implement your own custom markdown-powered website features.

### Markdown Feature Structure

All markdown features are effectively implemented in the same way, starting with a **_folder** for maintaining its static markdown
content, a **.cs** class to load the markdown and a **.cshtml** Razor Page to render it: 

| Location | Description |
| - | - |
| \`/_{Feature}\` | Maintains the static markdown for the feature |
| \`Markdown.{Feature}.cs\` | Functionality to read the feature's markdown into logical collections |
| \`{Feature}.cshtml\` | Functionality to Render the feature |
| [Configure.Ssg.cs](https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Configure.Ssg.cs) | Initializes and registers the feature with ASP .NET's IOC |

Lets see what this looks like in practice by walking through the "Pages" feature: 

## Pages Feature

The pages feature simply makes all pages in the **_pages** folder, available from \`/{filename}\`.

Where the included pages:

### [/_pages](https://github.com/NetCoreTemplates/razor-ssg/tree/main/MyApp/_pages)
 - privacy.md
 - speaking.md
 - uses.md
 
Are made available from:

 - [/privacy](https://razor-ssg.web-templates.io/privacy)
 - [/speaking](https://razor-ssg.web-templates.io/speaking)
 - [/uses](https://razor-ssg.web-templates.io/uses)

### Loading Pages Markdown

The code that loads the Pages feature markdown content is in [Markdown.Pages.cs](https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Markdown.Pages.cs):

\`\`\`csharp
public class MarkdownPages : MarkdownPagesBase<MarkdownFileInfo>
{
    public MarkdownPages(ILogger<MarkdownPages> log, IWebHostEnvironment env) 
        : base(log,env) {}
    
    List<MarkdownFileInfo> Pages { get; set; } = new();
    public List<MarkdownFileInfo> VisiblePages => Pages.Where(IsVisible).ToList();

    public MarkdownFileInfo? GetBySlug(string slug) => 
        Fresh(VisiblePages.FirstOrDefault(x => x.Slug == slug));

    public void LoadFrom(string fromDirectory)
    {
        Pages.Clear();
        var fs = AssertVirtualFiles();
        var files = fs.GetDirectory(fromDirectory).GetAllFiles().ToList();
        var log = LogManager.GetLogger(GetType());
        log.InfoFormat("Found {0} pages", files.Count);

        var pipeline = CreatePipeline();

        foreach (var file in files)
        {
            var doc = Load(file.VirtualPath, pipeline);
            if (doc == null)
                continue;

            Pages.Add(doc);
        }
    }
}
\`\`\`

Which ultimately just loads Markdown files using the configured [Markdig](https://github.com/xoofx/markdig) pipeline in its \`Pages\` 
collection which is made available via its \`VisiblePages\` property which returns all documents in development whilst hiding
**Draft** and content published at a **Future Date** from production builds.

### Rendering Markdown Pages

The pages are then rendered in [Page.cshtml](https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Pages/Page.cshtml) Razor Page
that's available from \`/{slug}\`

\`\`\`csharp
@page "/{slug}"
@model MyApp.Page
@inject MarkdownPages Markdown

@implements IRenderStatic<MyApp.Page>
@functions {
    public List<Page> GetStaticProps(RenderContext ctx)
    {
        var markdown = ctx.Resolve<MarkdownPages>();
        return markdown.VisiblePages.Map(page => new Page { Slug = page.Slug! });
    }
}

@{
    var doc = Markdown.GetBySlug(Model.Slug);
    if (doc.Layout != null) 
        Layout = doc.Layout == "none"
            ? null
            : doc.Layout;
    ViewData["Title"] = doc.Title;
}

<link rel="stylesheet" href="css/typography.css">
<section class="flex-col md:flex-row flex justify-center mt-16 mb-16 md:mb-12">
    <h1 class="text-4xl tracking-tight font-extrabold text-gray-900">
        @doc.Title
    </h1>
</section>    
<div class="mx-auto">
    <div class="mx-auto prose lg:prose-xl mb-24">
        @Html.Raw(doc.Preview)
    </div>
</div>

@await Html.PartialAsync("HighlightIncludes")
<script>hljs.highlightAll()<\/script>
\`\`\`

Which uses a custom layout if one is defined in its frontmatter which 
[speaking.md](https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/_pages/speaking.md) utilizes in its **layout** frontmatter:

\`\`\`yaml
---
title: Speaking
layout: _LayoutContent
---
\`\`\`

To render the page using [_LayoutContent.cshtml](https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Pages/Shared/_LayoutContent.cshtml)
visible by the background backdrop in its [/speaking](https://razor-ssg.web-templates.io/speaking) page.

## What's New Feature

The [/whatsnew](https://razor-ssg.web-templates.io/whatsnew) page is an example of creating a custom Markdown feature to implement a portfolio or a product releases page
where a new folder is created per release, containing both release date and release or project name, with all features in that release 
maintained markdown content sorted in alphabetical order:

### [/_whatsnew](https://github.com/NetCoreTemplates/razor-ssg/tree/main/MyApp/_whatsnew)

- **/2023-03-08_Animaginary**
  - feature1.md 
- **/2023-03-18_OpenShuttle**
   - feature1.md
- **/2023-03-28_Planetaria**
   - feature1.md 

What's New follows the same structure as Pages feature which is loaded in:

 - [Markdown.WhatsNew.cs](https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Markdown.WhatsNew.cs)

and rendered in:
- [WhatsNew.cshtml](https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Pages/WhatsNew.cshtml)

## Blog Feature

The blog maintains its markdown posts in a flat folder which each Markdown post containing its publish date and URL slug it 
should be published under:

### [/_posts](https://github.com/NetCoreTemplates/razor-ssg/tree/main/MyApp/_posts)

 - ...
 - 2023-01-21_start.md
 - 2023-03-21_javascript.md
 - 2023-03-28_razor-ssg.md

As the Blog has more features it requires a larger [Markdown.Blog.cs](https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Markdown.Blog.cs)
to load its Markdown posts that is rendered in several different Razor Pages for each of its Views:

| Page | Description | Example |
| - | - | - |
| [Blog.cshtml](https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Pages/Blog.cshtml) | Main Blog layout | [/blog](https://razor-ssg.web-templates.io/blog) | 
| [Posts/Index.cshtml](https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Pages/Posts/Index.cshtml) | Navigable Archive grid of Posts | [/posts](https://razor-ssg.web-templates.io/posts) | 
| [Posts/Post.cshtml](https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Pages/Posts/Post.cshtml) | Individual Blog Post (like this!) | [/posts/razor-ssg](https://razor-ssg.web-templates.io/posts/razor-ssg) |
| [Author.cshtml](https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Pages/Posts/Author.cshtml) | Display Posts by Author | [/posts/author/lucy-bates](https://razor-ssg.web-templates.io/posts/author/lucy-bates) | 
| [Tagged.cshtml](https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Pages/Posts/Tagged.cshtml) | Display Posts by Tag | [/posts/tagged/markdown](https://razor-ssg.web-templates.io/posts/tagged/markdown) |
| [Year.cshtml](https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Pages/Posts/Year.cshtml) | Display Posts by Year | [/posts/year/2023](https://razor-ssg.web-templates.io/posts/year/2023) |

### General Features

Most unique markdown features are captured in their Markdown's frontmatter metadata, but in general these features
are broadly available for all features:

 - **Live Reload** - Latest Markdown content is displayed during **Development** 
 - **Custom Layouts** - Render post in custom Razor Layout with \`layout: _LayoutAlt\`
 - **Drafts** - Prevent posts being worked on from being published with \`draft: true\`
 - **Future Dates** - Posts with a future date wont be published until that date

### Initializing and Loading Markdown Features

All markdown features are initialized in the same way in [Configure.Ssg.cs](https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Configure.Ssg.cs)
where they're registered in ASP.NET Core's IOC and initialized after the App's plugins are loaded
by injecting with the App's [Virtual Files provider](https://docs.servicestack.net/virtual-file-system)
before using it to read from the directory where the markdown content for each feature is maintained: 

\`\`\`csharp
public class ConfigureSsg : IHostingStartup
{
    public void Configure(IWebHostBuilder builder) => builder
        .ConfigureServices(services =>
        {
            services.AddSingleton<RazorPagesEngine>();
            services.AddSingleton<MarkdownPages>();
            services.AddSingleton<MarkdownWhatsNew>();
            services.AddSingleton<MarkdownBlog>();
        })
        .ConfigureAppHost(afterPluginsLoaded: appHost => {
            var pages = appHost.Resolve<MarkdownPages>();
            var whatsNew = appHost.Resolve<MarkdownWhatsNew>();
            var blogPosts = appHost.Resolve<MarkdownBlog>();
            
            var features = new IMarkdownPages[] { pages, whatsNew, blogPosts }; 
            features.Each(x => x.VirtualFiles = appHost.VirtualFiles);

            // Custom initialization
            blogPosts.Authors = Authors;

            // Load feature markdown content
            pages.LoadFrom("_pages");
            whatsNew.LoadFrom("_whatsnew");
            blogPosts.LoadFrom("_posts");
        });
    });
    //...
}
\`\`\`

These dependencies are then injected in the feature's Razor Pages to query and render the loaded markdown content.

### Custom Frontmatter

You can extend the \`MarkdownFileInfo\` type used to maintain the markdown content and metadata of each loaded Markdown file
by adding any additional metadata you want included as C# properties on:

\`\`\`csharp
// Add additional frontmatter info to include
public class MarkdownFileInfo : MarkdownFileBase
{
}
\`\`\`

Any additional properties are automatically populated using ServiceStack's 
[built-in Automapping](https://docs.servicestack.net/auto-mapping) which includes rich support for converting string frontmatter 
values into native .NET types.

### Updating to latest versions

You can easily update all the JavaScript dependencies used in 
[postinstall.js](https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/postinstall.js) by running:

:::sh
node postinstall.js
:::

This will also update the Markdown features \`*.cs\` implementations which is delivered as source files instead of an external
NuGet package to enable full customization, easier debugging whilst supporting easy upgrades. 

If you do customize any of the \`.cs\` files, you'll want to exclude them from being updated by removing them from:

\`\`\`js
const hostFiles = [
    'Markdown.Blog.cs',
    'Markdown.Pages.cs',
    'Markdown.WhatsNew.cs',
    'MarkdownPagesBase.cs',
]
\`\`\`

### Markdown Tag Helper

The included [MarkdownTagHelper.cs](https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/MarkdownTagHelper.cs) can be used
in hybrid Razor Pages like [About.cshtml](https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Pages/About.cshtml) 
to render the [/about](https://razor-ssg.web-templates.io/about) page which requires the flexibility of Razor Pages with a static content component which you 
prefer to maintain inline with Markdown.

The \`<markdown />\` tag helper renders plain HTML, which you can apply [Tailwind's @typography](https://tailwindcss.com/docs/typography-plugin) 
styles by including **typography.css** and annotating it with your preferred \`prose\` variant, e.g:

\`\`\`html
<link rel="stylesheet" href="css/typography.css">
<markdown class="prose">
  Markdown content...
</markdown>
\`\`\`

## Static Static Generation (SSG)

All features up till now describes how this template implements a Markdown powered Razor Pages .NET application, where this template
differs in its published output, where instead of a .NET App deployed to a VM or App server it generates static \`*.html\` files that's
bundled together with \`/wwwroot\` static assets in the \`/dist\` folder that can be previewed by launching a HTTP Server from that
folder with the built-in npm script:

:::sh
npm run serve
:::

To run **npx http-server** on \`http://localhost:8080\` that you can open in a browser to preview the published version of your 
site as it would be when hosted on a CDN.

### Static Razor Pages

The static generation functionality works by scanning all your Razor Pages and prerendering the pages with prerendering instructions.

### Pages with Static Routes

Pages with static routes can be marked to be prerendered by annotating it with the \`[RenderStatic]\` attribute as done in
[About.cshtml](https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Pages/About.cshtml):

\`\`\`csharp
@page "/about"
@attribute [RenderStatic]
\`\`\`

Which saves the pre-rendered page using the pages route with a .html suffix, e.g: \`/{@page route}.html\` whilst pages with static
routes with a trailing \`/\` are saved to \`/{@page route}/index.html\` as done for 
[Posts/Index.cshtml](https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Pages/Posts/Index.cshtml):

\`\`\`csharp
@page "/posts/"
@attribute [RenderStatic]
\`\`\`

#### Explicit generated paths

To keep the generated pages in-sync with using the same routes as your Razor Pages in development it's recommended to use the implied
rendered paths, but if preferred you can specify which path the page should be rendered to instead with:

\`\`\`csharp
@page "/posts/"
@attribute [RenderStatic("/posts/index.html")]
\`\`\`

### Pages with Dynamic Routes

Prerendering dynamic pages follows [Next.js getStaticProps](https://nextjs.org/docs/basic-features/data-fetching/get-static-props) 
convention which you can implement using \`IRenderStatic<PageModel>\` by returning a Page Model for each page that should be generated
as done in [Posts/Post.cshtml](https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Pages/Posts/Post.cshtml) and
[Page.cshtml](https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Pages/Page.cshtml):

\`\`\`csharp
@page "/{slug}"
@model MyApp.Page

@implements IRenderStatic<MyApp.Page>
@functions {
    public List<Page> GetStaticProps(RenderContext ctx)
    {
        var markdown = ctx.Resolve<MarkdownPages>();
        return markdown.VisiblePages.Map(page => new Page { Slug = page.Slug! });
    }
}
...
\`\`\`

In this case it returns a Page Model for every **Visible** markdown page in 
[/_pages](https://github.com/NetCoreTemplates/razor-ssg/tree/main/MyApp/_pages) that ends up rendering the following pages in \`/dist\`:

 - \`/privacy.html\`
 - \`/speaking.html\`
 - \`/uses.html\`

### Limitations

The primary limitations for developing statically generated Apps is that a **snapshot** of entire App is generated at deployment, 
which prohibits being able to render different content **per request**, e.g. for Authenticated users which would require executing
custom JavaScript after the page loads to dynamically alter the page's initial content.

Otherwise in practice you'll be able develop your Razor Pages utilizing Razor's full feature-set, the primary concessions stem
from Pages being executed in a static context which prohibits pages from returning dynamic content per request, instead any
"different views" should be maintained in separate pages.

#### No QueryString Params

As the generated pages should adopt the same routes as your Razor Pages you'll need to avoid relying on **?QueryString** params
and instead capture all required parameters for a page in its **@page route** as done for:

[Posts/Author.cshtml](https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Pages/Posts/Author.cshtml)

\`\`\`csharp
@page "/posts/author/{slug}"
@model AuthorModel
@inject MarkdownBlog Blog

@implements IRenderStatic<AuthorModel>
@functions {
    public List<AuthorModel> GetStaticProps(RenderContext ctx) => ctx.Resolve<MarkdownBlog>()
        .AuthorSlugMap.Keys.Map(x => new AuthorModel { Slug = x });
}
...
\`\`\`

Which lists all posts by an Author, e.g: [/posts/author/lucy-bates](https://razor-ssg.web-templates.io/posts/author/lucy-bates), likewise required for:

[Posts/Tagged.cshtml](https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Pages/Posts/Tagged.cshtml)

\`\`\`csharp
@page "/posts/tagged/{slug}"
@model TaggedModel
@inject MarkdownBlog Blog

@implements IRenderStatic<TaggedModel>
@functions {
    public List<TaggedModel> GetStaticProps(RenderContext ctx) => ctx.Resolve<MarkdownBlog>()
        .TagSlugMap.Keys.Map(x => new TaggedModel { Slug = x });
}
...
\`\`\`

Which lists all related posts with a specific tag, e.g: [/posts/tagged/markdown](https://razor-ssg.web-templates.io/posts/tagged/markdown), and for:

[Posts/Year.cshtml](https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Pages/Posts/Year.cshtml)

\`\`\`csharp
@page "/posts/year/{year}"
@model YearModel
@inject MarkdownBlog Blog

@implements IRenderStatic<YearModel>
@functions {
    public List<YearModel> GetStaticProps(RenderContext ctx) => ctx.Resolve<MarkdownBlog>()
        .VisiblePosts.Select(x => x.Date.GetValueOrDefault().Year)
            .Distinct().Map(x => new YearModel { Year = x });
}

...
\`\`\`

Which lists all posts published in a specific year, e.g: [/posts/year/2023](https://razor-ssg.web-templates.io/posts/year/2023).

Conceivably these "different views" could've been implemented by the same page with different \`?author\`, \`?tag\` and \`?year\`
QueryString params, but are instead extracted into different pages to support its statically generated \`*.html\` outputs.

## Prerendering Task

The **prerender** [AppTask](https://docs.servicestack.net/app-tasks) that pre-renders the entire website is also registered in
[Configure.Ssg.cs](https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Configure.Ssg.cs):

\`\`\`csharp
  .ConfigureAppHost(afterAppHostInit: appHost =>
  {
      // prerender with: \`$ npm run prerender\` 
      AppTasks.Register("prerender", args =>
      {
          var distDir = appHost.ContentRootDirectory.RealPath.CombineWith("dist");
          if (Directory.Exists(distDir))
              FileSystemVirtualFiles.DeleteDirectory(distDir);
          FileSystemVirtualFiles.CopyAll(
              new DirectoryInfo(appHost.ContentRootDirectory.RealPath.CombineWith("wwwroot")),
              new DirectoryInfo(distDir));
          var razorFiles = appHost.VirtualFiles.GetAllMatchingFiles("*.cshtml");
          RazorSsg.PrerenderAsync(appHost, razorFiles, distDir).GetAwaiter().GetResult();
      });
  });
  //...
\`\`\`

Which we can see:
1. Deletes \`/dist\` folder
2. Copies \`/wwwroot\` contents into \`/dist\`
3. Passes all App's Razor \`*.cshtml\` files to \`RazorSsg\` to do the pre-rendering

Where it processes all pages with \`[RenderStatic]\` and \`IRenderStatic<PageModel>\` prerendering instructions to the 
specified \`/dist\` folder.

### Previewing prerendered site

To preview your SSG website, run the prerendered task with:  

:::sh
npm run prerender
:::

Which renders your site to \`/_dist\` which you can run a HTTP Server from with:

:::sh
npm run serve
:::

That you can preview with your browser at \`http://localhost:8080\`.

### Publishing

The included [build.yml](https://github.com/NetCoreTemplates/razor-ssg/blob/main/.github/workflows/build.yml) GitHub Action
takes care of running the prerendered task and deploying it to your Repo's GitHub Pages where it will be available at:

    https://$org_name.github.io/$repo/

Alternatively you can use a [Custom domain for GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages)
by registering a CNAME DNS entry for your preferred Custom Domain, e.g:

| Record | Type | Value | TTL|
| - | - | - | - |
| **mydomain.org** | CNAME | **org_name**.github.io | 3600 |

That you can either [configure in your Repo settings](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain)
or if you prefer to maintain it with your code-base, save the domain name to \`/wwwroot/CNAME\`, e.g:

\`\`\`
www.mydomain.org
\`\`\`

### Benefits after migrating from Jekyll

Whilst still only at **v1** release, we found it already had a number of advantages over the existing Jekyll static website:

 - Faster live reloads
 - C#/Razor more type-save & productive than Ruby/Liquid
 - Greater flexibility in implementing new features
 - Better IDE support (from Rider)
 - Ability to reuse our .NET libraries
 - Better development experience

The last point ultimately prompted seeking an alternative solution as previously Jekyll was used from Windows/WSL which 
was awkward to manage from a different filesystem with Jekyll upgrades breaking RubyMine support forcing the use of 
text editors to maintain its code-base and content.

### Used by the new [servicestack.net](https://servicestack.net)

Deterred by the growing complexity of current SSG solutions, we decided to create a new solution using C#/Razor 
(our preferred technology for generating server HTML) with a clean implementation that allowed full control
with an **npm dependency-free** solution letting us adopt our preferred approach to 
[Simple, Modern JavaScript](https://servicestack.net/posts/javascript) without any build-tooling or SPA complexity.

We're happy with the results of [https://servicestack.net](https://servicestack.net) new Razor SSG website:

[![](https://servicestack.net/img/posts/razor-ssg/servicestack.net.png)](https://servicestack.net)

A clean, crisp code-base utilizing simple JS Module Vue 3 components, the source code of which is publicly maintained at:

- [https://github.com/servicestack/servicestack.net](https://github.com/servicestack/servicestack.net)

Which serves as a good example at how well this template scales for larger websites.

#### Markdown Videos Feature

It only needed one new Markdown feature to display our growing video library:

 - [/_videos](https://github.com/ServiceStack/servicestack.net/tree/main/MyApp/_videos) - Directory of Markdown Video collections 
 - [Markdown.Videos.cs](https://github.com/ServiceStack/servicestack.net/blob/main/MyApp/Markdown.Videos.cs) - Loading Video feature markdown content
 - [Shared/VideoGroup.cshtml](https://github.com/ServiceStack/servicestack.net/blob/main/MyApp/Pages/Shared/VideoGroup.cshtml) - Razor Page for displaying Video Collection

Which you're free to reuse in your own websites needing a similar feature.

#### Feedback & Feature Requests Welcome

In future we'll look at expanding this template with generic Markdown features suitable for websites, blogs & portfolios, 
or maintain a shared community collection if there ends up being community contributions of Razor SSG & Markdown features.

In the meantime, we welcome any feedback or new feature requests at:

### [https://servicestack.net/ideas](https://servicestack.net/ideas)
`,date:"2023-03-30",tags:["razor","markdown","blog","dev"],wordCount:3362,lineCount:597,minutesToRead:15,layout:"_LayoutContent",title:"Introducing Razor SSG",summary:"Create fast, beautiful statically rendered Razor Websites & Blogs",image:"https://images.unsplash.com/photo-1579767684138-a57e917d30aa?crop=entropy&fit=crop&h=1000&w=2000",author:"Lucy Bates",url:"/posts/razor-ssg"},{slug:"javascript",path:"src/_posts/2023-02-01_javascript.mdx",fileName:"javascript.mdx",content:`import Hello from "./components/Hello"
import Counter from "./components/Counter"
import Plugin from "./components/Plugin"
import HelloApi from "./components/HelloApi"

<Icon className="sm:float-left mr-4 w-28 h-28" style={{marginTop:'-4px'}} icon="vscode-icons:file-type-js-official" />

JavaScript has progressed significantly in recent times where many of the tooling & language enhancements
that we used to rely on external tools for is now available in modern browsers alleviating the need for
complex tooling and npm dependencies that have historically plagued modern web development.

The good news is that the complex npm tooling that was previously considered mandatory in modern JavaScript App
development can be considered optional as we can now utilize modern browser features like
[async/await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function),
[JavaScript Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules),
[dynamic imports](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import),
[import maps](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script/type/importmap)
and [modern language features](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) for a
sophisticated development workflow without the need for any npm build tools.

### Bringing Simplicity Back

The [razor](https://github.com/NetCoreTemplates/razor) template focuses on simplicity and eschews many aspects that has
complicated modern JavaScript development,
specifically:

- No npm node_modules or build tools
- No client side routing
- No heavy client state

Effectively abandoning the traditional SPA approach in lieu of a simpler [MPA](https://docs.astro.build/en/concepts/mpa-vs-spa/)
development model using Razor Pages for Server Rendered content with any interactive UIs progressively enhanced with JavaScript.

#### Freedom to use any JS library

Avoiding the SPA route ends up affording more flexibility on which JS libraries each page can use as without heavy bundled JS
blobs of all JS used in the entire App, it's free to only load the required JS each page needs to best implement its
required functionality, which can be any JS library, preferably utilizing ESM builds that can be referenced from a
[JavaScript Module](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules), taking advantage of the module system
native to modern browsers able to efficiently download the declarative matrix of dependencies each script needs.

### Best libraries for progressive Multi Page Apps

It includes a collection of libraries we believe offers the best modern development experience in Progressive
MPA Web Apps, specifically:

#### [Tailwind CLI](https://tailwindcss.com/docs/installation)
Tailwind enables a responsive, utility-first CSS framework for creating maintainable CSS at scale without the need for any CSS
preprocessors like Sass, which is configured to run from an npx script to avoid needing any node_module dependencies.

#### [Vue 3](https://vuejs.org/guide/introduction.html)
Vue is a popular Progressive JavaScript Framework that makes it easy to create interactive Reactive Components whose
[Composition API](https://vuejs.org/api/composition-api-setup.html) offers a nice development model without requiring any
pre-processors like JSX.

Where creating a component is as simple as:

\`\`\`jsx
type Props = { name:string }
export default ({ name }:Props) => (<b>Hello, {name}!</b>)
\`\`\`
<div className="text-center text-2xl py-2">
    <Hello name="Vue 3" />
</div>

Or a simple reactive example:

\`\`\`jsx
import { useState } from 'react'

export default () => {
    let [count, setCount] = useState(1)
    return <b onClick={() => setCount(count+=1)}>Counter {count}</b>
}
\`\`\`

<div className="text-center text-2xl py-2 cursor-pointer select-none">
    <Counter />
</div>

### React Components in Markdown

Inside \`.mdx\` Markdown pages React Components can be embedded using MDX Syntax:

\`\`\`tsx
<Hello name="Vue 3" />
<Counter />
\`\`\`

\`\`\`tsx
import { Button as PrimaryButton } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default () => {
  return (<Dialog>
      <DialogTrigger asChild>
        <PrimaryButton>Open Modal</PrimaryButton>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Greetings</DialogTitle>
          <DialogDescription className="p-4 text-xl">
            Hello @servicestack/vue!
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>)
}
\`\`\`

\`\`\`tsx
<Plugin />
\`\`\`

<div className="text-center">
    <Plugin id="plugin" className="text-2xl py-4" />
</div>


## API Development

For better IDE intelli-sense during development, you can save your server's annotated Typed DTOs to disk with:

:::sh
npm run dtos
:::

That can be referenced instead to unlock your IDE's static analysis type-checking and intelli-sense benefits during development:

\`\`\`js
import { Hello } from '@/dtos'
client.api(new Hello({ name }))
\`\`\`

You'll typically use all these libraries in your **API-enabled** components as seen in the
[HelloApi.tsx](https://github.com/NetCoreTemplates/react-spa/blob/main/MyApp.Client/src/_posts/components/HelloApi.tsx)
component which calls the [Hello](https://react-spa.web-templates.io/ui/Hello) API on each key press:

\`\`\`tsx
import { ChangeEvent, useState, useEffect } from "react"
import { JsonServiceClient } from "@servicestack/client"
import { TextInput } from "@/components/Form"
import { Hello } from "@/dtos"

type Props = { value: string }
export default ({ value }:Props) => {
    const [name, setName] = useState(value)
    const [result, setResult] = useState('')
    
    const client = new JsonServiceClient()
    useEffect(() => {
        (async () => {
            let api = await client.api(new Hello({ name }))
            if (api.response) {
                setResult(api.response.result)
            }
        })()
    }, [name])

    return (<div className="my-8 max-w-fit mx-auto">
      <TextInput value={name} onChange={e => setName(e.target.value)} />
      <b className="my-2 block text-center text-lg">{result}</b>
    </div>)
}
\`\`\`

\`\`\`tsx
<HelloApi value="React" />
\`\`\`

<HelloApi value="React" />`,date:"2023-02-01",tags:["js","dev"],wordCount:821,lineCount:178,minutesToRead:4,title:"Simple, Modern React MDX",summary:"Learn about JS Modules, Vue 3 and available rich UI Components",image:"https://images.unsplash.com/photo-1497515114629-f71d768fd07c?crop=entropy&fit=crop&h=1000&w=2000",author:"Brandon Foley",url:"/posts/javascript"},{slug:"start",path:"src/_posts/2023-01-21_start.md",fileName:"start.md",content:`### Setup 

If project wasn't created with [x new](https://docs.servicestack.net/dotnet-new), ensure postinstall tasks are run with:

\`\`\`bash
$ npm install
\`\`\`

### Tailwind Configuration

This template is configured with a stand-alone [Tailwind CSS CLI](https://tailwindcss.com/docs/installation)
installation with a modified **tailwind.input.css** that includes [@tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms)
and [@tailwindcss/aspect-ratio](https://github.com/tailwindlabs/tailwindcss-aspect-ratio) plugins so that no **node_modules** dependencies are needed.

The [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin) plugin css is contained in \`css/typography.css\` which
applies a beautiful default style to unstyled HTML, ideal for Markdown content like this.

### Running Tailwind during development

Run tailwind in a new terminal during development to auto update your **app.css**:

\`\`\`bash
$ npm run ui:dev
\`\`\`

For an optimal development experience run it together with \`dotnet watch\` to preview changes on each save.

Or if using JetBrains Rider, **ui:dev** can be run directly from Rider in **package.json**:

![](https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/servicestack-reference/scripts-tailwind.png)

### Using JsonServiceClient in Web Pages

Easiest way to call APIs is to use [@servicestack/client](https://docs.servicestack.net/javascript-client) with
the built-in [/types/mjs](https://vue-mjs.web-templates.io/types/mjs) which returns your APIs annotated typed JS DTOs that can be used immediately
(i.e. without any build steps):

\`\`\`html
<input type="text" id="txtName">
<div id="result"></div>
\`\`\`

\`\`\`html
<script type="module">
import { JsonApiClient, $1, on } from '@servicestack/client'
import { Hello } from '/types/mjs'

on('#txtName', {
    async keyup(el) {
        const client = JsonApiClient.create()
        const api = await client.api(new Hello({ name:el.target.value }))
        $1('#result').innerHTML = api.response.result
    }
})
<\/script>
\`\`\`

For better IDE intelli-sense during development, save the annotated Typed DTOs to disk with:

\`\`\`bash
$ npm run dtos
\`\`\`

Where it will enable IDE static analysis when calling Typed APIs from JavaScript:

\`\`\`js
import { Hello } from '/mjs/dtos.mjs'
client.api(new Hello({ name }))
\`\`\`
`,date:"2023-01-21",tags:["js","dev","tailwind"],wordCount:321,lineCount:70,minutesToRead:1,title:"Getting Started",summary:"Found out how to use these template features",author:"Gayle Smith",image:"https://images.unsplash.com/photo-1533090161767-e6ffed986c88?crop=entropy&fit=crop&h=1000&w=2000",url:"/posts/start"},{slug:"rider",path:"src/_posts/2023-01-11_rider.md",fileName:"rider.md",content:`<a href="https://www.jetbrains.com/rider/">
<img src="https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/svg/rider.svg" 
     class="sm:float-left mr-8 w-24 h-24" style="margin-top:0"></a>

[JetBrains Rider](https://www.jetbrains.com/rider/) is our recommended IDE for any C# + JavaScript development as it 
offers a great development UX for both, including excellent support 
for TypeScript and popular JavaScript Framework SPA assets like [Vue SFC's](https://v3.vuejs.org/guide/single-file-component.html).

#### Setup Rider IDE

As Rider already understands and provides excellent HTML/JS/TypeScript support you'll be immediately productive out-of-the-box,
we can further improve the development experience for Vue.js Apps by adding an empty **vue** dependency to **package.json**:

\`\`\`json
{
  "devDependencies": {
    "vue": ""
  }
}
\`\`\`

As this is just a heuristic Rider looks for to enable its Vue support, installing the dependency itself isn't used or required.

Other than that the only plugin we recommend adding is:

<a href="https://plugins.jetbrains.com/plugin/15321-tailwind-css" class="text-2xl flex items-center" style="text-decoration:none">
     <svg class="sm:float-left w-12 h-12" style="margin:0 .5rem 0 0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#44a8b3" d="M9 13.7q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1q-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1Zm-7 8.4q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1q-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1Z"/></svg>
     <span class="">Tailwind CSS Plugin</span>
</a>

Which provides provides intelli-sense support for [Tailwind CSS](https://tailwindcss.com).

### Start both dotnet and Tailwind

The only additional development workflow requirement to use tailwind is to start it running in the background 
which can be done from a new Terminal:

\`\`\`bash
$ npm run ui:dev
\`\`\`

We find \`dotnet watch\` offers the most productive iterative development workflow for .NET which refreshes on save 
which works great with Tailwind which rewrites your \`app.css\` on save.

How you want to run them is largely a matter of preference, our personal preference is to run the **dev** and **ui:dev**
npm scripts in your **package.json**:

![](https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/scripts/dotnet-tailwind.png)


### Rider's Task Runner

Where they will appear in Rider's useful task runner widget where you'll be able to easily, stop and rerun all project tasks:

![](https://github.com/ServiceStack/docs/raw/master/docs/images/spa/rider-run-widget.png)

### Running from the terminal

These GUI tasks are just managing running CLI commands behind-the-scenes, which if you prefer you can use JetBrains
excellent multi-terminal support to run \`$ dotnet watch\` and \`$ npm run ui:dev\` from separate or split Terminal windows.

### Deploying to Production

This template also includes the necessary GitHub Actions to deploy this Apps production static assets to GitHub Pages CDN, 
for more info, checkout [GitHub Actions Deployments](deploy).

### Get Started

If you're new to Vue 3 a good place to start is [Vue 3 Composition API](https://vuejs.org/api/composition-api-setup.html).
`,date:"2023-01-11",tags:["c#","dev"],wordCount:524,lineCount:70,minutesToRead:2,layout:"_LayoutContent",title:"Develop using JetBrains Rider",summary:"Setting up & exploring development workflow in Rider",author:"Gayle Smith",image:"https://images.unsplash.com/photo-1472289065668-ce650ac443d2?crop=entropy&fit=crop&h=1000&w=2000",url:"/posts/rider"},{slug:"vs",path:"src/_posts/2023-01-10_vs.md",fileName:"vs.md",content:`A popular alternative development environment to our preferred [JetBrains Rider](rider) IDE is to use
Visual Studio, the primary issue with this is that VS Code is a better IDE with richer support for JavaScript and npm
projects whilst Visual Studio is a better IDE for C# Projects. 

Essentially this is why we recommend Rider where it's best at both, where both C# and JS/TypeScript projects can 
be developed from within the same solution.

### Developing with just VS Code

<a href="https://visualstudio.microsoft.com/" title="VS Code" class="sm:float-left mr-8">
    <svg class="w-24 h-24" style="margin-top:1rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 254"><defs><linearGradient id="logosVisualStudioCode0" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF"/><stop offset="100%" stop-color="#FFF" stop-opacity="0"/></linearGradient><path id="logosVisualStudioCode1" d="M180.828 252.605a15.872 15.872 0 0 0 12.65-.486l52.501-25.262a15.94 15.94 0 0 0 9.025-14.364V41.197a15.939 15.939 0 0 0-9.025-14.363l-52.5-25.263a15.877 15.877 0 0 0-18.115 3.084L74.857 96.35l-43.78-33.232a10.614 10.614 0 0 0-13.56.603L3.476 76.494c-4.63 4.211-4.635 11.495-.012 15.713l37.967 34.638l-37.967 34.637c-4.623 4.219-4.618 11.502.012 15.714l14.041 12.772a10.614 10.614 0 0 0 13.56.604l43.78-33.233l100.507 91.695a15.853 15.853 0 0 0 5.464 3.571Zm10.464-183.649l-76.262 57.889l76.262 57.888V68.956Z"/></defs><mask id="logosVisualStudioCode2" fill="#fff"><use href="#logosVisualStudioCode1"/></mask><path fill="#0065A9" d="M246.135 26.873L193.593 1.575a15.885 15.885 0 0 0-18.123 3.08L3.466 161.482c-4.626 4.219-4.62 11.502.012 15.714l14.05 12.772a10.625 10.625 0 0 0 13.569.604L238.229 33.436c6.949-5.271 16.93-.315 16.93 8.407v-.61a15.938 15.938 0 0 0-9.024-14.36Z" mask="url(#logosVisualStudioCode2)"/><path fill="#007ACC" d="m246.135 226.816l-52.542 25.298a15.887 15.887 0 0 1-18.123-3.08L3.466 92.207c-4.626-4.218-4.62-11.502.012-15.713l14.05-12.773a10.625 10.625 0 0 1 13.569-.603l207.132 157.135c6.949 5.271 16.93.315 16.93-8.408v.611a15.939 15.939 0 0 1-9.024 14.36Z" mask="url(#logosVisualStudioCode2)"/><path fill="#1F9CF0" d="M193.428 252.134a15.892 15.892 0 0 1-18.125-3.083c5.881 5.88 15.938 1.715 15.938-6.603V11.273c0-8.318-10.057-12.483-15.938-6.602a15.892 15.892 0 0 1 18.125-3.084l52.533 25.263a15.937 15.937 0 0 1 9.03 14.363V212.51c0 6.125-3.51 11.709-9.03 14.363l-52.533 25.262Z" mask="url(#logosVisualStudioCode2)"/><path fill="url(#logosVisualStudioCode0)" fill-opacity=".25" d="M180.828 252.605a15.874 15.874 0 0 0 12.65-.486l52.5-25.263a15.938 15.938 0 0 0 9.026-14.363V41.197a15.939 15.939 0 0 0-9.025-14.363L193.477 1.57a15.877 15.877 0 0 0-18.114 3.084L74.857 96.35l-43.78-33.232a10.614 10.614 0 0 0-13.56.603L3.476 76.494c-4.63 4.211-4.635 11.495-.012 15.713l37.967 34.638l-37.967 34.637c-4.623 4.219-4.618 11.502.012 15.714l14.041 12.772a10.614 10.614 0 0 0 13.56.604l43.78-33.233l100.506 91.695a15.857 15.857 0 0 0 5.465 3.571Zm10.464-183.65l-76.262 57.89l76.262 57.888V68.956Z" mask="url(#logosVisualStudioCode2)"/></svg>
</a>

If you prefer the dev UX of a lightweight text editor or your C# project isn't large, than VS Code on its own
can provide a great development UX which is also what [Vue recommends themselves](https://v3.vuejs.org/api/sfc-tooling.html#ide-support),
to be used together with the [Volar extension](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar).

VSCode's [Integrated Terminal](https://code.visualstudio.com/docs/editor/integrated-terminal) has great multi-terminal 
support you can toggle between the editor and terminal with \`Ctrl+\` or open a new Terminal Window with
<code>Ctrl+Shift+\`</code> to run Tailwind with:

\`\`\`bash
$ npm run ui:dev
\`\`\`

Then in a new Terminal Window, start a new watched .NET App with:

\`\`\`bash
$ dotnet watch
\`\`\`

With both projects started you can open a browser tab running at \`https://localhost:5001\` where it 
will automatically reload itself at every \`Ctrl+S\` save point.

#### Useful VS Code extensions

We recommend these extensions below to enhance the development experience of this template:

 - [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) - Add Intellisense for Tailwind classes
 - [es6-string-html](https://marketplace.visualstudio.com/items?itemName=Tobermory.es6-string-html) - Add HTML Syntax Highlighting in string literals 

### Using Visual Studio

<a href="https://code.visualstudio.com/" title="Visual Studio" class="sm:float-left mr-8">
    <svg class="w-24 h-24" style="margin-top:1rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><defs><linearGradient id="logosVisualStudio0" x1="50%" x2="50%" y1=".002%" y2="100%"><stop offset="0%" stop-color="#FFF"/><stop offset="100%" stop-color="#FFF" stop-opacity="0"/></linearGradient></defs><path fill="#52218A" d="M36.987 200.406a10.667 10.667 0 0 1-11.04 1.734L6.56 194.006A10.667 10.667 0 0 1 0 184.22V70.46a10.667 10.667 0 0 1 6.56-9.787l19.387-8a10.667 10.667 0 0 1 11.04 1.733l4.346 3.6a5.893 5.893 0 0 0-9.333 4.8v129.067a5.893 5.893 0 0 0 9.333 4.8l-4.346 3.733Z"/><path fill="#6C33AF" d="M6.56 194.006A10.667 10.667 0 0 1 0 184.22v-.88a6.16 6.16 0 0 0 10.667 4.133L176 4.673a16 16 0 0 1 18.187-3.093l52.746 25.386A16 16 0 0 1 256 41.393v.613a10.107 10.107 0 0 0-16.507-7.813l-198.16 162.48l-4.346 3.733a10.667 10.667 0 0 1-11.04 1.734L6.56 194.006Z"/><path fill="#854CC7" d="M6.56 60.673A10.667 10.667 0 0 0 0 70.46v.88a6.16 6.16 0 0 1 10.667-4.134L176 250.006a16 16 0 0 0 18.187 3.094l52.746-25.387A16 16 0 0 0 256 213.286v-.613a10.107 10.107 0 0 1-16.507 7.813L41.333 58.006l-4.346-3.733a10.667 10.667 0 0 0-11.04-1.6l-19.387 8Z"/><path fill="#B179F1" d="M194.187 253.1A16 16 0 0 1 176 250.006a9.387 9.387 0 0 0 16-6.64v-232a9.387 9.387 0 0 0-16-6.693a16 16 0 0 1 18.187-3.093l52.746 25.36A16 16 0 0 1 256 41.366v171.947a16 16 0 0 1-9.067 14.427l-52.746 25.36Z"/><path fill="url(#logosVisualStudio0)" fill-opacity=".25" d="M183.707 254.273a16 16 0 0 0 10.48-1.173l52.746-25.36A16 16 0 0 0 256 213.313V41.366a16 16 0 0 0-9.067-14.426L194.187 1.58A16 16 0 0 0 182.24.806A16 16 0 0 0 176 4.673L90.987 98.7L41.333 58.006l-4.346-3.733a10.667 10.667 0 0 0-9.627-2.213a6.8 6.8 0 0 0-1.413.48L6.56 60.673A10.667 10.667 0 0 0 0 69.66v115.36a10.664 10.664 0 0 0 6.56 8.986l19.387 8a6.8 6.8 0 0 0 1.413.48c3.378.882 6.973.056 9.627-2.213l4.346-3.6l49.654-40.693L176 250.006a16 16 0 0 0 7.707 4.267ZM192 73.153l-66.107 54.187L192 181.526V73.153ZM32 90.726l33.093 36.614L32 163.953V90.726Z"/></svg>
</a>

As your C# project grows you'll want to consider running the back-end C# Solution with Visual Studio .NET with its
much improved intelli-sense, navigation, tests runner & debug capabilities. 

As we've never had a satisfactory experience trying develop npm or JS/TypeScript projects with VS.NET, we'd recommend only
using VS.NET for C# and Razor and continuing to use VSCode for everything else. 

If you'd prefer to use Visual Studio for front-end development we recommend moving all JS to external files for a better
Dev UX, e.g:

\`\`\`html
<script type="module" src="./pages/SignIn.mjs"><\/script>
\`\`\`

### Deploying to Production

This template also includes the necessary GitHub Actions to deploy this Apps production static assets to GitHub Pages CDN,
for more info, checkout [GitHub Actions Deployments](deploy).

### Get Started

If you're new to Vue 3 a good place to start is [Vue 3 Composition API](https://vuejs.org/api/composition-api-setup.html).
`,date:"2023-01-10",tags:["c#","dev"],wordCount:1445,lineCount:69,minutesToRead:6,title:"Develop using Visual Studio",summary:"Exploring development workflow in VS Code and Visual Studio .NET",author:"Lucy Bates",image:"https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?crop=entropy&fit=crop&h=1000&w=2000",url:"/posts/vs"},{slug:"deploy",path:"src/_posts/2023-01-01_deploy.md",fileName:"deploy.md",content:`# ServiceStack GitHub Action Deployments

The [release.yml](https://github.com/NetCoreTemplates/razor-tailwind/blob/main/.github/workflows/release.yml) 
in this template enables GitHub Actions CI deployment to a dedicated server with SSH access.

## Overview
\`release.yml\` is designed to work with a ServiceStack app deploying directly to a single server via SSH. A docker image is built and stored on GitHub's \`ghcr.io\` docker registry when a GitHub Release is created.

GitHub Actions specified in \`release.yml\` then copy files remotely via scp and use \`docker-compose\` to run the app remotely via SSH.

## What's the process of \`release.yml\`?

![](https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/mix/release-ghr-vanilla-diagram.png)

## Deployment server setup

To get this working, a server needs to be setup with the following:

- SSH access
- docker
- docker-compose
- ports 443 and 80 for web access of your hosted application

This can be your own server or any cloud hosted server like Digital Ocean, AWS, Azure etc. We use [Hetzner Cloud](http://cloud.hetzner.com/)
to deploy all ServiceStack's [GitHub Project Templates]( https://github.com/NetCoreTemplates/) as it was the 
[best value US cloud provider](https://servicestack.net/blog/finding-best-us-value-cloud-provider) we've found.

When setting up your server, you'll want to use a dedicated SSH key for access to be used by GitHub Actions. GitHub Actions will need the *private* SSH key within a GitHub Secret to authenticate. This can be done via ssh-keygen and copying the public key to the authorized clients on the server.

To let your server handle multiple ServiceStack applications and automate the generation and management of TLS certificates, an additional docker-compose file is provided in this template, \`nginx-proxy-compose.yml\`. This docker-compose file is ready to run and can be copied to the deployment server.

For example, once copied to remote \`~/nginx-proxy-compose.yml\`, the following command can be run on the remote server.

\`\`\`
docker-compose -f ~/nginx-proxy-compose.yml up -d
\`\`\`

This will run an nginx reverse proxy along with a companion container that will watch for additional containers in the same docker network and attempt to initialize them with valid TLS certificates.

### GitHub Actions secrets

The \`release.yml\` uses the following secrets.

| Required Secrets | Description |
| -- | -- |
| \`DEPLOY_HOST\` | Hostname used to SSH deploy .NET App to, this can either be an IP address or subdomain with A record pointing to the server |
| \`DEPLOY_USERNAME\` | Username to log in with via SSH e.g, **ubuntu**, **ec2-user**, **root** |
| \`DEPLOY_KEY\` | SSH private key used to remotely access deploy .NET App |
| \`LETSENCRYPT_EMAIL\` | Email required for Let's Encrypt automated TLS certificates |

These secrets can use the [GitHub CLI](https://cli.github.com/manual/gh_secret_set) for ease of creation. Eg, using the GitHub CLI the following can be set.

\`\`\`bash
gh secret set DEPLOY_HOST -b"<DEPLOY_HOST>"
gh secret set DEPLOY_USERNAME -b"<DEPLOY_USERNAME>"
gh secret set DEPLOY_KEY < key.pem # DEPLOY_KEY
gh secret set LETSENCRYPT_EMAIL -b"<LETSENCRYPT_EMAIL>"
\`\`\`

These secrets are used to populate variables within GitHub Actions and other configuration files.

## Deployments

A published version of your .NET App created with the standard dotnet publish tool:

\`\`\`yaml
dotnet publish -c Release
\`\`\`

is used to build a production build of your .NET App inside the standard \`Dockerfile\` for dockerizing .NET Applications.

Additional custom deployment tasks can be added to your project's package.json **postinstall** script which also gets run at deployment. 

If preferred additional MS Build tasks can be run by passing in custom parameters in the publish command, e.g:

\`\`\`yaml
dotnet publish -c Release /p:APP_TASKS=prerender
\`\`\`

Which your \`MyApp.csproj\` can detect with a target that checks for it:

\`\`\`xml
<!-- Prerender tasks run in release.yml -->
<Target Name="AppTasks" AfterTargets="Build" Condition="$(APP_TASKS) != ''">
    <CallTarget Targets="Prerender" Condition="$(APP_TASKS.Contains('prerender'))" />
</Target>
<Target Name="Prerender">
    <Message Text="Prerender..." />
</Target>
\`\`\`

## Pushing updates and rollbacks

By default, deployments occur on commit to your main branch. A new Docker image for your ServiceStack API is produced, pushed to GHCR.io and hosted on your Linux server with Docker Compose.

The template also will run the release process on the creation of a GitHub Release making it easier to switch to manual production releases.

Additionally, the \`release.yml\` workflow can be run manually specifying a version. This enables production rollbacks based on previously tagged releases.
A release must have already been created for the rollback build to work, it doesn't create a new Docker build based on previous code state, only redeploys as existing Docker image.
`,date:"2023-01-01",tags:["github-actions","devops"],wordCount:735,lineCount:100,minutesToRead:3,title:"Deployment with GitHub Actions",summary:"Configuring your GitHub repo for SSH and CDN deployments",author:"Gayle Smith",image:"https://images.unsplash.com/photo-1485841890310-6a055c88698a?crop=entropy&fit=crop&h=1000&w=2000",url:"/posts/deploy"},{slug:"typography",path:"src/_posts/2022-12-31_typography.md",fileName:"typography.md",content:`<p class="lead">
  Until now, trying to style an article, document, or blog post with Tailwind has been a tedious
  task that required a keen eye for typography and a lot of complex custom CSS.
</p>

By default, Tailwind removes all of the default browser styling from paragraphs, headings, lists and more. This ends up being really useful for building application UIs because you spend less time undoing user-agent styles, but when you _really are_ just trying to style some content that came from a rich-text editor in a CMS or a markdown file, it can be surprising and unintuitive.

We get lots of complaints about it actually, with people regularly asking us things like:

> Why is Tailwind removing the default styles on my \`h1\` elements? How do I disable this? What do you mean I lose all the other base styles too?

We hear you, but we're not convinced that simply disabling our base styles is what you really want. You don't want to have to remove annoying margins every time you use a \`p\` element in a piece of your dashboard UI. And I doubt you really want your blog posts to use the user-agent styles either — you want them to look _awesome_, not awful.

The \`@tailwindcss/typography\` plugin is our attempt to give you what you _actually_ want, without any of the downsides of doing something stupid like disabling our base styles.

It adds a new \`prose\` class that you can slap on any block of vanilla HTML content and turn it into a beautiful, well-formatted document:

\`\`\`html
<article class="prose">
  <h1>Garlic bread with cheese: What the science tells us</h1>
  <p>
    For years parents have espoused the health benefits of eating garlic bread with cheese to their
    children, with the food earning such an iconic status in our culture that kids will often dress
    up as warm, cheesy loaf for Halloween.
  </p>
  <p>
    But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
    springing up around the country.
  </p>
  <!-- ... -->
</article>
\`\`\`

For more information about how to use the plugin and the features it includes, [read the documentation](https://github.com/tailwindcss/typography/blob/master/README.md).

---

## What to expect from here on out

What follows from here is just a bunch of absolute nonsense I've written to dogfood the plugin itself. It includes every sensible typographic element I could think of, like **bold text**, unordered lists, ordered lists, code blocks, block quotes, _and even italics_.

It's important to cover all of these use cases for a few reasons:

1. We want everything to look good out of the box.
2. Really just the first reason, that's the whole point of the plugin.
3. Here's a third pretend reason though a list with three items looks more realistic than a list with two items.

Now we're going to try out another header style.

### Typography should be easy

So that's a header for you — with any luck if we've done our job correctly that will look pretty reasonable.

Something a wise person once told me about typography is:

> Typography is pretty important if you don't want your stuff to look like trash. Make it good then it won't be bad.

It's probably important that images look okay here by default as well:

<figure>
  <img
    src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
    alt=""
  />
  <figcaption>
    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
    classical Latin literature from 45 BC, making it over 2000 years old.
  </figcaption>
</figure>

Now I'm going to show you an example of an unordered list to make sure that looks good, too:

- So here is the first item in this list.
- In this example we're keeping the items short.
- Later, we'll use longer, more complex list items.

And that's the end of this section.
`,date:"2022-12-31",tags:["tailwind","markdown"],wordCount:666,lineCount:78,minutesToRead:3,title:"Tailwind Typography",summary:"tailwindcss/typography enabled for Markdown pages",author:"Lucy Bates",image:"https://images.unsplash.com/photo-1497250681960-ef046c08a56e?crop=entropy&fit=crop&h=1000&w=2000",url:"/posts/typography"},{slug:"hetzner-cloud",path:"src/_posts/2022-09-06_hetzner-cloud.md",fileName:"hetzner-cloud.md",content:`At <a href="./">ServiceStack</a>, we have been using AWS for hosting for over 10 years. It has served us well, but it suffers from complex pricing and possibility of bill shock due to its fractured pay-as-you-go design.

Thankfully, more and more companies are providing simpler offerings for hosting needs, and AWS themselves launched [Lightsail](https://aws.amazon.com/lightsail) as their answer to market demands for simple hosting options that package everything you need for basic hosting.

These simpler hosting options tend to bundle several things together as one fixed monthly price. A VM with a specific compute and memory allocation, as well as data transfer, and storage.

## Looking at different US offerings

Something we wanted to do was to host our [live demo applications](https://github.com/ServiceStackApps/LiveDemos) on a US based host. We were using [Hetzner dedicated servers](https://www.hetzner.com/dedicated-rootserver) in the past for non-latency sensitive use cases like our build server and [Gist.Cafe (our interactive playground for multiple platforms)](https://gist.cafe) but we also wanted our demo applications to be snappy for US users.

[DigitalOcean](https://www.digitalocean.com/pricing) provides ["Droplets"](https://www.digitalocean.com/pricing/droplets) with this fixed pricing model with a nice and simple interface. Their pricing was quite good and we realized we could run all 20+ of our demo applications on a single droplet for $40/month.

For deployment, [we also like to keep things as simple as we can, whilst keeping portability](https://docs.servicestack.net/do-github-action-mix-deployment). Since all our projects are public and on GitHub, we use [GitHub Actions](https://docs.servicestack.net/do-github-action-mix-deployment#github-repository-setup) heavily along with a pattern that deploys our applications using Docker Compose via SSH.
Each application runs in its own container behind an [NGINX proxy](https://docs.servicestack.net/do-github-action-mix-deployment#get-nginx-reverse-proxy-and-letsencrypt-companion-running) with a side car that handles renewing LetsEncrypt certificates. Below is an example of this pattern with Blazor and Litestream.

<iframe class="youtube" src="https://www.youtube.com/embed/fY50dWszpw4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

A nice side effect of this approach is moving servers is relatively painless. We change the DNS entry for the application to point to our new server, update the GitHub Action Secrets if needed and run our Release workflow.

A minute or so later, the application is back running again. Since their were 20+ of these repositories we took advantage of the [GitHub Organization Secrets](https://cli.github.com/manual/gh_secret_set) so we only needed to update values in one place, and [running the workflows again](https://cli.github.com/manual/gh_workflow_run) can also be done programmatically through the GitHub CLI.

## DigitalOcean Price Increase

In June of 2022, we got a notification that [prices for droplets would be increasing](https://www.digitalocean.com/try/new-pricing), and for our droplet it would be going from **$40 to $48**. While this is a small amount of money, it prompted us to have a wider look into this market.

Something we try to do at ServiceStack is to not only provide a comprehensive .NET Framework for building API first systems, but also seek out great value hosting options we can recommend in this ever change space which we're happy to share, like this blog post, that might be useful to our users and others.

Not everyone builds massively distributed systems, and as hardware performance increases, and platforms like [.NET are becoming even more optimized](https://devblogs.microsoft.com/dotnet/performance-improvements-in-aspnet-core-6), a setup with just a server or two can manage larger loads and use cases.

Our research and evaluations ended up right back at [Hetzner but this time with their Cloud offering](https://www.hetzner.com/cloud). For less than **$15 USD** per month, you can get a **4 vCPU, 8GB RAM, 160GB storage and 20TB** of data transfer **hosted in the US**.

We found this was by far the cheapest offering for a simple fixed monthly hosting, and looked to compare how well it performed against the more traditional cloud hosting setups.

## Litestream and SQLite

Our demo applications use [SQLite](https://www.sqlite.org) as a simple way to host the database storage and application together, taking advantage of SQLite's embedded nature.
We were also testing out [Litestream](https://litestream.io) as a possible solution to the lack of data backups and safety when using SQLite for more production like workloads.

<div class="mx-auto mt-4 mb-4">
  <a href="https://litestream.io">
      <div class="inline-flex justify-center w-full">
        <img src="https://servicestack.net/img/posts/hetzner-cloud/litestream.svg" alt="">
      </div>
      <div class="text-gray-500 text-center">litestream.io</div>
  </a>
</div>

Litestream runs as a separate process and watches your SQLite file for changes and replicates them to storage options like AWS S3, Azure Blob storage and SFTP.
[We created several templates to make this easier](https://docs.servicestack.net/ormlite/litestream) and provide a way to bake in automated disaster recovery using Litestream when used with GitHub Actions and our SSH with Docker Compose deployment.

With some basic load testing, we noticed that SQLite performed pretty well without any effort on our part, and decided we should see how this compares to the commonly suggested hosting patterns provided by the large cloud providers of AWS and Azure.

We used the recommended "Production" setups provided by AWS RDS and Azure SQL Database wizards along with 2 vCPU application server to provide the basis on our comparison.
The reason we chose to use the suggested defaults from these providers was to illustrate the power of defaults when offered by market leaders. When compared to a simple SQLite setup, and providers that offer fixed monthly pricing like Hetzner and DigitalOcean, which is often enough to small companies selling Business to Business (B2B) solutions, AWS and Azure recommended "Production" environments can look extremely over priced.

One of the main reasons managed database solutions are chosen is the fact that they take care of automated backups and restore if things go wrong. There are other nice features that definitely have a lot of value, but managed disaster recovery is probably the most commonly cited one I've come across for why services like RDS are chosen during early development.

Litestream provides this kind of data safety and disaster recovery functionality by targeting cost effective and robust storage solutions like AWS S3 and other cloud provided object stores, and making the backup process close to real-time, and accessible via their CLI.
And the embedded nature of SQLite removes the uncertainty of the process of upgrading your database.

## The Test

To get a clearer idea how each of these hosting options perform with a fairly modest workload, we used a [Gatling](https://gatling.io) test to simulate a user logging into our sample Bookings application, browsing around and creating a booking.

These series of steps had 2 write requests and 8 read, separated by 2 seconds per step. We then setup a Gatling simulation that ramped up adding new users to our system from 5 per second to 15 per second, to add a growing number of users over 10 minutes, then sustained over another 10 minutes.

<div class="mx-auto mt-4 mb-4">
    <div class="inline-flex justify-center w-full">
      <img src="https://servicestack.net/img/posts/hetzner-cloud/aws-gatling-result.png" alt="">
    </div>
<div class="text-gray-500 text-center">AWS Gatling Result.</div>
</div>

<div class="mx-auto mt-4 mb-4">
    <div class="inline-flex justify-center w-full">
      <img src="https://servicestack.net/img/posts/hetzner-cloud/azure-gatling-result.png" alt="">
    </div>
<div class="text-gray-500 text-center">Azure Gatling Result.</div>
</div>

<div class="mx-auto mt-4 mb-4">
    <div class="inline-flex justify-center w-full">
      <img src="https://servicestack.net/img/posts/hetzner-cloud/hetzner-gatling-result.png" alt="">
    </div>
<div class="text-gray-500 text-center">Hetzner Gatling Result.</div>
</div>

All 3 setups could handle this rate of requests without issue, and though the "Recommended" AWS and Azure setups would have more headroom, the price difference is far too large to ignore, especially as the difference is paid every month.
The requests throughput of that this test illustrated ~100rps can suit many many use cases, and SQLite is [really only limited by its single writer design](https://www.sqlite.org/whentouse.html#:~:text=An%20SQLite%20database%20is%20limited,to%20something%20less%20than%20this.). We did previous tests of upto 250rps on the same Hetzner Cloud instance with SQLite, but this was starting to reach the maximum throughput, again purely to do with the single writer limitation.

<div class="mx-auto mt-4 mb-4">
    <div class="inline-flex justify-center w-full">
      <img src="https://servicestack.net/img/posts/hetzner-cloud/litestream-costs.svg" alt="">
    </div>
<div class="text-gray-500 text-center">Previous test result price comparison without AWS using Provisioned IOPS.</div>
</div>

This level of throughput is enough to service many kinds of businesses with a drastically more simple system to manage, with large cost savings. Also, with the use of an ORM like [OrmLite](https://docs.servicestack.net/ormlite), switching to another database provider can be migrated if and when the traditional offerings like Postgres are needed.

## The Setups
<style>
    table {
        width: 100%;
        margin-top: 4em;
        margin-bottom: 4em;
    }
</style>

The original setup for tests we did in June didn't default to provisioned IOPs for AWS, but when repeating the tests AWS costs blow out due to this feature being enabled by default. 

Without provisioned IOPs, it drops to around **$132/month** as an estimated cost. The **$300/month** default feature for a "Production" database is very hard for AWS to justify, and I think more of a sign of their poor performing GP2 storage option. Although this will only impact very "chatty" types of applications that need higher IOPs throughput, the difference in performance from RDS vs providers like DigitalOcean and Hetzner can be quite stark.

<div class="mx-auto mt-4 mb-4">
    <div class="inline-flex justify-center w-full">
      <img src="https://servicestack.net/img/posts/hetzner-cloud/aws-rds-with-provisioned-iops.png" alt="">
    </div>
<div class="text-gray-500 text-center">AWS RDS now defaults to provisioned IOPs for a Production setup, drastically increasing costs.</div>
</div>

|              | AWS (DB)          | AWS (App) | Azure (DB) | Azure (App) | DigitalOcean | Hetzner Cloud |
|--------------|-------------------|-----------|------------|-------------|--------------|---------------|
| vCPU         | 2                 | 2         | 4          | 2           | 4            | 4             |
| Memory  (GB) | 8                 | 4         | 10         | 8           | 8            | 8             |
| Storage (GB) | 100 (provisioned) | 16        | 32         | 30          | 160          | 160           |
| Cost         | $442              | $34       | $373       | $70         | $48          | $15           |

The above specs were provided as "Production" defaults when using a single database instance. Azure SQL Database defaults to costing $373, during the load test, the database CPU hit ~25%.

<div class="mx-auto mt-4 mb-4">
    <div class="inline-flex justify-center w-full">
      <img src="https://servicestack.net/img/posts/hetzner-cloud/azure-db-cpu-during-test.png" alt="">
    </div>
<div class="text-gray-500 text-center">Azure SQL database without tuning performs poorly for cost, likely due to lack of indexes</div>
</div>


|           | AWS (DB) | AWS (App) | Azure (DB) | Azure (App) | Hetzner Cloud |
|-----------|----------|-----------|------------|-------------|---------------|
| Max CPU % | 8        | 35        | 25         | 45          | 40            |


This is without any tuning on any of the databases, so while you like more performance out of the recommended setups, it is still clear SQLite performs well by default, and it is well worth considering not only Hetzner Cloud for value for money, but if your use can only needs a single host with SQLite.

## Hetzner Cloud

While we were primarily looking for one of the lowest cost options with simplified pricing, Hetzner Cloud pleasantly surprised us with a few features the larger providers could learn from.

<div class="mx-auto mt-4 mb-4">
    <div class="inline-flex justify-center w-full">
      <img src="https://servicestack.net/img/posts/hetzner-cloud/hetzner-cloud-buy.png" alt="">
    </div>
<div class="text-gray-500 text-center">Hetzner Cloud Pricing.</div>
</div>

### Creating a new instance is fast 
Most of the time if will be ready to remote to before you can open your terminal. Not sure if this is due to some kind of pre-creation process on Hetzner part during the creation screen, but everything is very responsive.
In my testing from the time the "Create" button was clicked, my SSH commands would succeed within **20 seconds**.

### Live Graphs
Another part of the responsiveness is their "Live" graphs for monitoring. It is surprisingly low latency and an extremely stark difference between AWS charging extra for "Detailed" monitoring on EC2 instances. The graphs update every 3-5 seconds in the browser and look to be over a few seconds behind real-time.

<div class="mx-auto mt-4 mb-4">
    <div class="inline-flex justify-center w-full">
      <img src="https://servicestack.net/img/posts/hetzner-cloud/hetzner-cloud-live-graphs.gif" alt="">
    </div>
<div class="text-gray-500 text-center">Live monitoring updates every 3-5 seconds.</div>
</div>

CloudWatch is a major value add for AWS, and Hetzner's offering is very very basic in comparison, but it is nice to see live updating stats right in your web browser, and something hopefully the other providers can also offer in the future.

### Price
This is the biggest draw card by a long way. The AWS and Azure "recommended" setups are extremely expensive for the hardware and performance they offer. Yes they are mature cloud offerings with a large array of features, but their **pricing scales with hardware resources**.
Products like **Provisioned IOPs** are extremely expensive, and when other cloud providers are offering far more performant and competitive storage with their instances, it can feel like AWS is using it's market share and their defaults to upsell very expensive products.

### Transfer costs
It's been long known that one of the ways large cloud providers keep customers in their network is by charging [excessively large and complex data egress costs](https://aws.amazon.com/blogs/architecture/overview-of-data-transfer-costs-for-common-architectures). Something attractive about simplified pricing from Hetzner Cloud (and DigitalOcean to a lesser degree) is the included data transfer of 20TB a month.

Not only is AWS data transfer pricing extremely complicated (inter region vs cross region vs CloudFront vs Transit Gateway and so on), but if your application was sending a lot of data to clients, that same **20TB** you get for free with a **$15 server**, would cost **$1,791 just for data** when coming from AWS. Azure pricing also confusing, and in some ways more expensive.

## Defaults are powerful
Both AWS and Azure "recommended" defaults are there not because the software selected (SQL Server and Postgres) need that amount of resources just to operate, but more as an upsell.
Lots of projects and applications absolutely do not need features like "Provisioned IOPs", despite GP2 storage of AWS being incredibly slow.

Performing disk speed check using the Linux utility \`fio\` an AWS EC2 instance with 100GB GP2 storage can do ~2250 IOPS and 9MB/s read, and ~750 IOPs at 3MB/s write.
In contrast, Digital Ocean $48 instance, this is not even paying the extra $8/month for the faster storage can do 35.2k IOPS at 144MB/s read, and 11.8k IOPS at 48MB/s write.

Hetzner again is the stand out, with the $15 instance tests resulting in 50.8k IOPS at 207MB/s read, and 16.9k IOPS at 69MB/s write.

|               | Read IOPS | Write IOPs | Read MBs  | Write MBs |
|---------------|-----------|------------|-----------|-----------|
| AWS           | 2.3k      | 0.8k       | 9.2 MB/s  | 3.1 MB/s  |
| Azure         | 3.0k      | 1.0k       | 12.5 MB/s | 4.2 MB/s  |
| DigitalOcean  | 35.2k     | 11.8k      | 144 MB/s  | 48.2 MB/s |
| Hetzner Cloud | 50.5k     | 16.9k      | 207 MB/s  | 69.2 MB/s |


All tests used the following \`fio\` command.

\`\`\`shell
fio --randrepeat=1 --ioengine=libaio --direct=1 --gtod_reduce=1 --name=test \\
--filename=test --bs=4k --iodepth=64 --size=4G --readwrite=randrw --rwmixread=75
\`\`\`

## SQLite

Part of the resurgence in popularity of using SQLite is not only the simplicity of a single server, but also as hardware is getting faster, issues surrounding limitations of a single writer are becoming less of an issue for a wider number of use cases.

Litestream's elegant solution for streaming backups to cheap replica storage is definitely adding to that popularity as well since it was a sticking point for a lot of use cases that need that simple data redundancy functionality.

Other solutions for Postgres like \`pgbackrest\` are similar, but the ease of use is another big part of what makes SQLite and Litestream a great combination.
One command to watch and replicate, another to restore, and it runs completely independent of your application using the SQLite file.

## Hetzner Cloud is hard to beat on price

We're going to keep testing Hetzner Cloud with new applications and use cases going into the future. While they are a very new player in the crowded Cloud Provider market, and their offerings are much more limited, the pricing is a breath of fresh air from the large three providers.

More competition in this space is a great thing, and for those that can use solutions like SQLite for their projects, checking out some of the smaller players like DigitalOcean and Hetzner Cloud is well worth your time.
The early signs from Hetzner Cloud is they not only have an amazing value product, but the features they do have improve on the equivalents from likes of AWS and Azure, which is hopefully a sign of things to come from them.

`,date:"2022-09-06",tags:["dev","hosting","devops"],wordCount:2832,lineCount:220,minutesToRead:13,title:"In pursuit of the best value US cloud provider",summary:"We've been using AWS at ServiceStack for 10+ years, it's served us well but suffers from complex & expensive pricing",author:"Brandon Foley",image:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&fit=crop&h=1000&w=2000",url:"/posts/hetzner-cloud"}],authorSlugs:{"lucy-bates":{name:"Lucy Bates",email:"lucy@email.org",bio:"Works in software design, company building, and the aerospace industry.",profileUrl:"/img/profiles/user1.svg",twitterUrl:"https://twitter.com/lucy",threadsUrl:"https://threads.net/@lucy",gitHubUrl:"https://github.com/lucy"},"gayle-smith":{name:"Gayle Smith",email:"gayle@email.org",bio:"Gayle is an author, consultant, and founder focusing on improving tech.",profileUrl:"/img/profiles/user2.svg",twitterUrl:"https://twitter.com/gayle",mastodonUrl:"https://mastodon.social/@gayle"},"brandon-foley":{name:"Brandon Foley",email:"brandon@email.org",bio:"I am a programmer at heart. I like to tinker with code and build generic coding structures.",profileUrl:"/img/profiles/user3.svg",gitHubUrl:"https://github.com/brandon"}},tagSlugs:{dev:"dev",hosting:"hosting",devops:"devops",tailwind:"tailwind",markdown:"markdown","github-actions":"github-actions",c:"c#",js:"js",razor:"razor",blog:"blog",dotnet:"dotnet",blazor:"blazor",templates:"templates",servicestack:"servicestack",docs:"docs"}},videos:{react:[{slug:"nextjs",path:"src/_videos/react/nextjs.md",fileName:"nextjs.md",content:`In this comprehensive walkthrough, we will guide you through the ServiceStack Next.js template, which offers an 
exceptional rapid development cycle when used with JetBrains Rider. 

This template is specifically designed for Microsoft .NET developers seeking a seamless and efficient Next.js React 
setup while employing the better performing Jamstack architecture. 
`,date:"2022-02-08",tags:["nextjs","react","jamstack"],wordCount:51,lineCount:6,minutesToRead:0,title:"Rapidly develop C# .NET Next.js JamStack Apps with Rider",url:"https://youtu.be/3pPLRyPsO5A",order:1,group:"react"},{slug:"autoquery-bookings",path:"src/_videos/react/autoquery-bookings.md",fileName:"autoquery-bookings.md",content:`From an empty web project, this video shows how to:
- Add SQLite & Authentication support
- Define code-first Data Model with Validation
- Add User Management support
- Enable Audit History support
- Add Excel integration`,date:"2022-08-16",tags:["autoquery"],wordCount:36,lineCount:6,minutesToRead:0,title:"Build a Bookings API with Auto Admin UI in minutes",url:"https://youtu.be/rSFiikDjGos",order:2,group:"react"},{slug:"autogen-locode",path:"src/_videos/react/autogen-locode.md",fileName:"autogen-locode.md",content:`In this video we show a step by step process for start with an existing database and customizations without the need for code first models.

[Locode](https://docs.servicestack.net/locode/) is a generated API driven by your APIs metadata. 
Combined with other high-level ServiceStack features, it becomes a way to rapidly develop web applications with robust service APIs 
that can be later extended with custom UIs.
`,date:"2022-05-16",tags:["autoquery","autogen","locode"],wordCount:67,lineCount:6,minutesToRead:0,title:"Database first development with Locode",url:"https://youtu.be/NiTp5Z_5U2Y",order:3,group:"react"},{slug:"modern",path:"src/_videos/react/modern.md",fileName:"modern.md",content:`ServiceStack templates provide a wide range of options when it comes to using Razor Pages in your .NET application

These templates come with Tailwind, JS Modules, and Vue components already built-in, making it easy to build 
hybrid apps containing both Server-Side Rendering (SSR) and static resources`,date:"2023-02-08",tags:["vue","razor"],wordCount:46,lineCount:4,minutesToRead:0,title:"Modern Razor Pages & MVC .NET Tailwind templates",url:"https://youtu.be/SyppvQB7IPs",order:4,group:"react"},{slug:"razor-ssg",path:"src/_videos/react/razor-ssg.md",fileName:"razor-ssg.md",content:`This video takes an in-depth look at the [razor-ssg](https://razor-ssg.web-templates.io) ServiceStack template, a powerful tool that 
harnesses the power of .NET Razor Pages to provide seamless static site generation (SSG) capabilities 

With GitHub Codespaces integration, you can develop, test, and manage your application all within your browser, eliminating the need 
for a dedicated development environment and expediting your workflow, which can all be done on the go from an iPad
`,date:"2023-03-29",tags:["razor-pages","ssg","tailwind","codespaces"],wordCount:73,lineCount:6,minutesToRead:0,title:"Using Razor SSG to Create Websites in GitHub Codespaces",url:"https://youtu.be/MRQMBrXi5Sc",order:5,group:"react"}]},whatsNew:{"2023-03-28_Planetaria":[{slug:"feature1",path:"src/_whatsnew/2023-03-28_Planetaria/feature1.md",fileName:"feature1.md",content:`Welcome to the world of Planetaria, a groundbreaking new product that is poised to revolutionize the way we explore space. 
At Planetaria, we believe that the wonders of space should be accessible to everyone, not just a privileged few. 
That's why we've created technology that empowers civilians to explore space on their own terms, without needing to rely 
on government agencies or billionaire entrepreneurs.

Our mission is to democratize space exploration and enable people from all walks of life to experience the thrill of 
venturing beyond our planet. With Planetaria, you'll have the tools and resources you need to embark on your own space missions, 
whether you're a hobbyist, a scientist, or an adventurer. From designing and building your own spacecraft to conducting experiments 
in microgravity, the possibilities are endless.`,date:"2023-03-28",tags:[],wordCount:130,lineCount:9,minutesToRead:1,title:"Planetaria",url:"http://planetaria.tech",image:"/img/whatsnew/planetaria.svg",group:"Planetaria"}],"2023-03-18_OpenShuttle":[{slug:"feature1",path:"src/_whatsnew/2023-03-18_OpenShuttle/feature1.md",fileName:"feature1.md",content:`Introducing OpenShuttle, the revolutionary new product that is set to change the space industry forever. OpenShuttle is a cutting-edge
platform that provides detailed schematics for the very first rocket designed by me, which successfully made it to orbit. 
This incredible product is designed to give space enthusiasts and professionals alike access to the groundbreaking technology that 
was used to achieve this monumental feat.

OpenShuttle is the result of years of hard work and dedication, and I am thrilled to finally be able to share it with the world. 
With its detailed schematics, OpenShuttle provides an unprecedented level of insight into the inner workings of the rocket, 
allowing users to explore the technology that made history.`,date:"2023-03-18",tags:[],wordCount:115,lineCount:8,minutesToRead:1,title:"OpenShuttle",url:"https://example.org",image:"/img/whatsnew/open-shuttle.svg",group:"OpenShuttle"}],"2023-03-08_Animaginary":[{slug:"feature1",path:"src/_whatsnew/2023-03-08_Animaginary/feature1.md",fileName:"feature1.md",content:`Introducing Animaginary, the next generation web animation library that's taking the world by storm. 
Animaginary is a high performance library that's hand-written in optimized WebAssembly (WASM), 
making it one of the fastest and most efficient animation tools available today.

Built with performance in mind, Animaginary delivers stunning animations that are both smooth and seamless, even on lower-end devices. 
The library is designed to provide developers with a powerful toolset that makes it easy to create 
complex animations that would otherwise be time-consuming and challenging to build.`,date:"2023-03-08",tags:[],wordCount:86,lineCount:7,minutesToRead:0,title:"Animaginary",url:"/blog",image:"/img/whatsnew/animaginary.svg",group:"Animaginary"}]},components:{blog:{"vite-press-plugin":()=>H(()=>import("./2024-03-01_vite-press-plugin-kQajldFF.js"),__vite__mapDeps([])),"markdown-components-in-react":()=>H(()=>import("./2024-03-01_markdown-components-in-react-D4K-OLHa.js"),__vite__mapDeps([8,9,10])),"net8-best-blazor":()=>H(()=>import("./2023-11-22_net8-best-blazor-BMoBW3oJ.js"),__vite__mapDeps([])),"net8-blazor-template":()=>H(()=>import("./2023-11-20_net8-blazor-template-CHVnu5yv.js"),__vite__mapDeps([])),"razor-ssg-new-blog-features":()=>H(()=>import("./2023-08-23_razor-ssg-new-blog-features-CCKMsPGG.js"),__vite__mapDeps([11,10])),"razor-ssg":()=>H(()=>import("./2023-03-30_razor-ssg-CbzWAt4A.js"),__vite__mapDeps([])),javascript:()=>H(()=>import("./2023-02-01_javascript-BBxI4FS9.js"),__vite__mapDeps([12,9])),start:()=>H(()=>import("./2023-01-21_start-Cm1-DGtR.js"),__vite__mapDeps([])),rider:()=>H(()=>import("./2023-01-11_rider-95kSxj8n.js"),__vite__mapDeps([])),vs:()=>H(()=>import("./2023-01-10_vs-ClGwmY2c.js"),__vite__mapDeps([])),deploy:()=>H(()=>import("./2023-01-01_deploy-DCJGa0Ad.js"),__vite__mapDeps([])),typography:()=>H(()=>import("./2022-12-31_typography-GutJRU5A.js"),__vite__mapDeps([])),"hetzner-cloud":()=>H(()=>import("./2022-09-06_hetzner-cloud-yz3M6UCW.js"),__vite__mapDeps([]))},videos:{react:{nextjs:()=>H(()=>import("./nextjs-DzjRmcpW.js"),__vite__mapDeps([])),"autoquery-bookings":()=>H(()=>import("./autoquery-bookings-87jLl34R.js"),__vite__mapDeps([])),"autogen-locode":()=>H(()=>import("./autogen-locode-mgtUw8KC.js"),__vite__mapDeps([])),modern:()=>H(()=>import("./modern-C7Lv9TVY.js"),__vite__mapDeps([])),"razor-ssg":()=>H(()=>import("./razor-ssg-Bq2fHTow.js"),__vite__mapDeps([]))}},whatsNew:{"2023-03-28_Planetaria":{feature1:()=>H(()=>import("./feature1-DuuEAH6F.js"),__vite__mapDeps([]))},"2023-03-18_OpenShuttle":{feature1:()=>H(()=>import("./feature1-2lzoW8os.js"),__vite__mapDeps([]))},"2023-03-08_Animaginary":{feature1:()=>H(()=>import("./feature1-DHUzHUJ7.js"),__vite__mapDeps([]))}},includes:{"features.md":()=>H(()=>import("./features-DwyZP9ZQ.js"),__vite__mapDeps([])),"vite-press-plugin/folder-features.md":()=>H(()=>import("./folder-features-CXtiyRJH.js"),__vite__mapDeps([]))}}};function oC(){return w.jsx(f.Suspense,{fallback:w.jsx(zg,{children:w.jsx(N3,{className:"p-4"})}),children:w.jsx(Kk,{defaultTheme:"light",storageKey:"color-scheme",children:w.jsx(Qo.Provider,{value:rC,children:fw(nC)})})})}function iC(){const{pathname:e}=Ar();return f.useEffect(()=>{window.scrollTo(0,0)},[e]),null}const sC=tv(document.getElementById("root"));sC.render(w.jsx(f.StrictMode,{children:w.jsxs($w,{children:[w.jsx(iC,{}),w.jsx(oC,{})]})}));export{Uo as $,Vl as A,km as B,Px as C,le as D,wC as E,Xk as F,$3 as G,wu as H,B3 as I,Bl as J,zg as L,PS as M,Qo as P,Ow as S,bC as T,F3 as V,D as _,nu as a,pC as b,U3 as c,hC as d,$g as e,Jk as f,fC as g,O3 as h,uC as i,w as j,dC as k,cC as l,Wo as m,Ho as n,Ue as o,Kx as p,G as q,f as r,mb as s,gb as t,lC as u,fb as v,et as w,A2 as x,wr as y,Sm as z};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/about-BniZ5uQA.js","assets/LayoutArticle-Bs_1r_s3.js","assets/privacy-Cm4NCeke.js","assets/index-Cn4-j9Nf.js","assets/BlogPosts-CG1TW7Wx.js","assets/_name_-D4kYSi8C.js","assets/_tag_-WqKy8t4q.js","assets/_year_-DhN2U92C.js","assets/2024-03-01_markdown-components-in-react-D4K-OLHa.js","assets/HelloApi-CiA_8GG4.js","assets/ChartJs-CrrW9pRo.js","assets/2023-08-23_razor-ssg-new-blog-features-CCKMsPGG.js","assets/2023-02-01_javascript-BBxI4FS9.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
