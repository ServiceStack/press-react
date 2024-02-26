var dv=Object.defineProperty;var fv=(e,t,n)=>t in e?dv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var I=(e,t,n)=>(fv(e,typeof t!="symbol"?t+"":t,n),n);function pv(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function Cr(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ff={exports:{}},As={},Bf={exports:{}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lo=Symbol.for("react.element"),hv=Symbol.for("react.portal"),mv=Symbol.for("react.fragment"),gv=Symbol.for("react.strict_mode"),vv=Symbol.for("react.profiler"),yv=Symbol.for("react.provider"),wv=Symbol.for("react.context"),bv=Symbol.for("react.forward_ref"),xv=Symbol.for("react.suspense"),kv=Symbol.for("react.memo"),Sv=Symbol.for("react.lazy"),Au=Symbol.iterator;function Cv(e){return e===null||typeof e!="object"?null:(e=Au&&e[Au]||e["@@iterator"],typeof e=="function"?e:null)}var Wf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Uf=Object.assign,Vf={};function Er(e,t,n){this.props=e,this.context=t,this.refs=Vf,this.updater=n||Wf}Er.prototype.isReactComponent={};Er.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Er.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Hf(){}Hf.prototype=Er.prototype;function cc(e,t,n){this.props=e,this.context=t,this.refs=Vf,this.updater=n||Wf}var uc=cc.prototype=new Hf;uc.constructor=cc;Uf(uc,Er.prototype);uc.isPureReactComponent=!0;var _u=Array.isArray,Gf=Object.prototype.hasOwnProperty,dc={current:null},Qf={key:!0,ref:!0,__self:!0,__source:!0};function Kf(e,t,n){var r,o={},i=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)Gf.call(t,r)&&!Qf.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];o.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:Lo,type:e,key:i,ref:s,props:o,_owner:dc.current}}function Ev(e,t){return{$$typeof:Lo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function fc(e){return typeof e=="object"&&e!==null&&e.$$typeof===Lo}function Tv(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Nu=/\/+/g;function ea(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Tv(""+e.key):t.toString(36)}function Pi(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Lo:case hv:s=!0}}if(s)return s=e,o=o(s),e=r===""?"."+ea(s,0):r,_u(o)?(n="",e!=null&&(n=e.replace(Nu,"$&/")+"/"),Pi(o,t,n,"",function(c){return c})):o!=null&&(fc(o)&&(o=Ev(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(Nu,"$&/")+"/")+e)),t.push(o)),1;if(s=0,r=r===""?".":r+":",_u(e))for(var a=0;a<e.length;a++){i=e[a];var l=r+ea(i,a);s+=Pi(i,t,n,l,o)}else if(l=Cv(e),typeof l=="function")for(e=l.call(e),a=0;!(i=e.next()).done;)i=i.value,l=r+ea(i,a++),s+=Pi(i,t,n,l,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Xo(e,t,n){if(e==null)return e;var r=[],o=0;return Pi(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Pv(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Te={current:null},Ai={transition:null},Av={ReactCurrentDispatcher:Te,ReactCurrentBatchConfig:Ai,ReactCurrentOwner:dc};U.Children={map:Xo,forEach:function(e,t,n){Xo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Xo(e,function(){t++}),t},toArray:function(e){return Xo(e,function(t){return t})||[]},only:function(e){if(!fc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};U.Component=Er;U.Fragment=mv;U.Profiler=vv;U.PureComponent=cc;U.StrictMode=gv;U.Suspense=xv;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Av;U.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Uf({},e.props),o=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=dc.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Gf.call(t,l)&&!Qf.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Lo,type:e.type,key:o,ref:i,props:r,_owner:s}};U.createContext=function(e){return e={$$typeof:wv,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:yv,_context:e},e.Consumer=e};U.createElement=Kf;U.createFactory=function(e){var t=Kf.bind(null,e);return t.type=e,t};U.createRef=function(){return{current:null}};U.forwardRef=function(e){return{$$typeof:bv,render:e}};U.isValidElement=fc;U.lazy=function(e){return{$$typeof:Sv,_payload:{_status:-1,_result:e},_init:Pv}};U.memo=function(e,t){return{$$typeof:kv,type:e,compare:t===void 0?null:t}};U.startTransition=function(e){var t=Ai.transition;Ai.transition={};try{e()}finally{Ai.transition=t}};U.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};U.useCallback=function(e,t){return Te.current.useCallback(e,t)};U.useContext=function(e){return Te.current.useContext(e)};U.useDebugValue=function(){};U.useDeferredValue=function(e){return Te.current.useDeferredValue(e)};U.useEffect=function(e,t){return Te.current.useEffect(e,t)};U.useId=function(){return Te.current.useId()};U.useImperativeHandle=function(e,t,n){return Te.current.useImperativeHandle(e,t,n)};U.useInsertionEffect=function(e,t){return Te.current.useInsertionEffect(e,t)};U.useLayoutEffect=function(e,t){return Te.current.useLayoutEffect(e,t)};U.useMemo=function(e,t){return Te.current.useMemo(e,t)};U.useReducer=function(e,t,n){return Te.current.useReducer(e,t,n)};U.useRef=function(e){return Te.current.useRef(e)};U.useState=function(e){return Te.current.useState(e)};U.useSyncExternalStore=function(e,t,n){return Te.current.useSyncExternalStore(e,t,n)};U.useTransition=function(){return Te.current.useTransition()};U.version="18.2.0";Bf.exports=U;var f=Bf.exports;const j=Cr(f),Yf=pv({__proto__:null,default:j},[f]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _v=f,Nv=Symbol.for("react.element"),Rv=Symbol.for("react.fragment"),Mv=Object.prototype.hasOwnProperty,$v=_v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,zv={key:!0,ref:!0,__self:!0,__source:!0};function qf(e,t,n){var r,o={},i=null,s=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Mv.call(t,r)&&!zv.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Nv,type:e,key:i,ref:s,props:o,_owner:$v.current}}As.Fragment=Rv;As.jsx=qf;As.jsxs=qf;Ff.exports=As;var g=Ff.exports,Jf={exports:{}},Ve={},Xf={exports:{}},Zf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,P){var $=_.length;_.push(P);e:for(;0<$;){var L=$-1>>>1,Q=_[L];if(0<o(Q,P))_[L]=P,_[$]=Q,$=L;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var P=_[0],$=_.pop();if($!==P){_[0]=$;e:for(var L=0,Q=_.length,ze=Q>>>1;L<ze;){var Ie=2*(L+1)-1,rt=_[Ie],de=Ie+1,je=_[de];if(0>o(rt,$))de<Q&&0>o(je,rt)?(_[L]=je,_[de]=$,L=de):(_[L]=rt,_[Ie]=$,L=Ie);else if(de<Q&&0>o(je,$))_[L]=je,_[de]=$,L=de;else break e}}return P}function o(_,P){var $=_.sortIndex-P.sortIndex;return $!==0?$:_.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],c=[],d=1,u=null,h=3,v=!1,b=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(_){for(var P=n(c);P!==null;){if(P.callback===null)r(c);else if(P.startTime<=_)r(c),P.sortIndex=P.expirationTime,t(l,P);else break;P=n(c)}}function k(_){if(y=!1,w(_),!b)if(n(l)!==null)b=!0,J(S);else{var P=n(c);P!==null&&W(k,P.startTime-_)}}function S(_,P){b=!1,y&&(y=!1,m(T),T=-1),v=!0;var $=h;try{for(w(P),u=n(l);u!==null&&(!(u.expirationTime>P)||_&&!F());){var L=u.callback;if(typeof L=="function"){u.callback=null,h=u.priorityLevel;var Q=L(u.expirationTime<=P);P=e.unstable_now(),typeof Q=="function"?u.callback=Q:u===n(l)&&r(l),w(P)}else r(l);u=n(l)}if(u!==null)var ze=!0;else{var Ie=n(c);Ie!==null&&W(k,Ie.startTime-P),ze=!1}return ze}finally{u=null,h=$,v=!1}}var C=!1,E=null,T=-1,M=5,N=-1;function F(){return!(e.unstable_now()-N<M)}function z(){if(E!==null){var _=e.unstable_now();N=_;var P=!0;try{P=E(!0,_)}finally{P?X():(C=!1,E=null)}}else C=!1}var X;if(typeof p=="function")X=function(){p(z)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,V=B.port2;B.port1.onmessage=z,X=function(){V.postMessage(null)}}else X=function(){x(z,0)};function J(_){E=_,C||(C=!0,X())}function W(_,P){T=x(function(){_(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){b||v||(b=!0,J(S))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(_){switch(h){case 1:case 2:case 3:var P=3;break;default:P=h}var $=h;h=P;try{return _()}finally{h=$}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,P){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var $=h;h=_;try{return P()}finally{h=$}},e.unstable_scheduleCallback=function(_,P,$){var L=e.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?L+$:L):$=L,_){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=$+Q,_={id:d++,callback:P,priorityLevel:_,startTime:$,expirationTime:Q,sortIndex:-1},$>L?(_.sortIndex=$,t(c,_),n(l)===null&&_===n(c)&&(y?(m(T),T=-1):y=!0,W(k,$-L))):(_.sortIndex=Q,t(l,_),b||v||(b=!0,J(S))),_},e.unstable_shouldYield=F,e.unstable_wrapCallback=function(_){var P=h;return function(){var $=h;h=P;try{return _.apply(this,arguments)}finally{h=$}}}})(Zf);Xf.exports=Zf;var Iv=Xf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ep=f,We=Iv;function A(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var tp=new Set,fo={};function Mn(e,t){fr(e,t),fr(e+"Capture",t)}function fr(e,t){for(fo[e]=t,e=0;e<t.length;e++)tp.add(t[e])}var At=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ha=Object.prototype.hasOwnProperty,jv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ru={},Mu={};function Lv(e){return Ha.call(Mu,e)?!0:Ha.call(Ru,e)?!1:jv.test(e)?Mu[e]=!0:(Ru[e]=!0,!1)}function Dv(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ov(e,t,n,r){if(t===null||typeof t>"u"||Dv(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Pe(e,t,n,r,o,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var we={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){we[e]=new Pe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];we[t]=new Pe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){we[e]=new Pe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){we[e]=new Pe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){we[e]=new Pe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){we[e]=new Pe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){we[e]=new Pe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){we[e]=new Pe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){we[e]=new Pe(e,5,!1,e.toLowerCase(),null,!1,!1)});var pc=/[\-:]([a-z])/g;function hc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(pc,hc);we[t]=new Pe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(pc,hc);we[t]=new Pe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(pc,hc);we[t]=new Pe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){we[e]=new Pe(e,1,!1,e.toLowerCase(),null,!1,!1)});we.xlinkHref=new Pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){we[e]=new Pe(e,1,!1,e.toLowerCase(),null,!0,!0)});function mc(e,t,n,r){var o=we.hasOwnProperty(t)?we[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ov(t,n,o,r)&&(n=null),r||o===null?Lv(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var It=ep.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Zo=Symbol.for("react.element"),Wn=Symbol.for("react.portal"),Un=Symbol.for("react.fragment"),gc=Symbol.for("react.strict_mode"),Ga=Symbol.for("react.profiler"),np=Symbol.for("react.provider"),rp=Symbol.for("react.context"),vc=Symbol.for("react.forward_ref"),Qa=Symbol.for("react.suspense"),Ka=Symbol.for("react.suspense_list"),yc=Symbol.for("react.memo"),Wt=Symbol.for("react.lazy"),op=Symbol.for("react.offscreen"),$u=Symbol.iterator;function Ir(e){return e===null||typeof e!="object"?null:(e=$u&&e[$u]||e["@@iterator"],typeof e=="function"?e:null)}var se=Object.assign,ta;function qr(e){if(ta===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ta=t&&t[1]||""}return`
`+ta+e}var na=!1;function ra(e,t){if(!e||na)return"";na=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),s=o.length-1,a=i.length-1;1<=s&&0<=a&&o[s]!==i[a];)a--;for(;1<=s&&0<=a;s--,a--)if(o[s]!==i[a]){if(s!==1||a!==1)do if(s--,a--,0>a||o[s]!==i[a]){var l=`
`+o[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{na=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?qr(e):""}function Fv(e){switch(e.tag){case 5:return qr(e.type);case 16:return qr("Lazy");case 13:return qr("Suspense");case 19:return qr("SuspenseList");case 0:case 2:case 15:return e=ra(e.type,!1),e;case 11:return e=ra(e.type.render,!1),e;case 1:return e=ra(e.type,!0),e;default:return""}}function Ya(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Un:return"Fragment";case Wn:return"Portal";case Ga:return"Profiler";case gc:return"StrictMode";case Qa:return"Suspense";case Ka:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case rp:return(e.displayName||"Context")+".Consumer";case np:return(e._context.displayName||"Context")+".Provider";case vc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case yc:return t=e.displayName||null,t!==null?t:Ya(e.type)||"Memo";case Wt:t=e._payload,e=e._init;try{return Ya(e(t))}catch{}}return null}function Bv(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ya(t);case 8:return t===gc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function on(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ip(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Wv(e){var t=ip(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){r=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ei(e){e._valueTracker||(e._valueTracker=Wv(e))}function sp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ip(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Qi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function qa(e,t){var n=t.checked;return se({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function zu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=on(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ap(e,t){t=t.checked,t!=null&&mc(e,"checked",t,!1)}function Ja(e,t){ap(e,t);var n=on(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Xa(e,t.type,n):t.hasOwnProperty("defaultValue")&&Xa(e,t.type,on(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Iu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Xa(e,t,n){(t!=="number"||Qi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Jr=Array.isArray;function tr(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+on(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Za(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(A(91));return se({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ju(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(A(92));if(Jr(n)){if(1<n.length)throw Error(A(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:on(n)}}function lp(e,t){var n=on(t.value),r=on(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Lu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function cp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function el(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?cp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ti,up=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ti=ti||document.createElement("div"),ti.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ti.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function po(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var eo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Uv=["Webkit","ms","Moz","O"];Object.keys(eo).forEach(function(e){Uv.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),eo[t]=eo[e]})});function dp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||eo.hasOwnProperty(e)&&eo[e]?(""+t).trim():t+"px"}function fp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=dp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Vv=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function tl(e,t){if(t){if(Vv[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(A(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(A(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(A(61))}if(t.style!=null&&typeof t.style!="object")throw Error(A(62))}}function nl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rl=null;function wc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ol=null,nr=null,rr=null;function Du(e){if(e=Fo(e)){if(typeof ol!="function")throw Error(A(280));var t=e.stateNode;t&&(t=$s(t),ol(e.stateNode,e.type,t))}}function pp(e){nr?rr?rr.push(e):rr=[e]:nr=e}function hp(){if(nr){var e=nr,t=rr;if(rr=nr=null,Du(e),t)for(e=0;e<t.length;e++)Du(t[e])}}function mp(e,t){return e(t)}function gp(){}var oa=!1;function vp(e,t,n){if(oa)return e(t,n);oa=!0;try{return mp(e,t,n)}finally{oa=!1,(nr!==null||rr!==null)&&(gp(),hp())}}function ho(e,t){var n=e.stateNode;if(n===null)return null;var r=$s(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(A(231,t,typeof n));return n}var il=!1;if(At)try{var jr={};Object.defineProperty(jr,"passive",{get:function(){il=!0}}),window.addEventListener("test",jr,jr),window.removeEventListener("test",jr,jr)}catch{il=!1}function Hv(e,t,n,r,o,i,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var to=!1,Ki=null,Yi=!1,sl=null,Gv={onError:function(e){to=!0,Ki=e}};function Qv(e,t,n,r,o,i,s,a,l){to=!1,Ki=null,Hv.apply(Gv,arguments)}function Kv(e,t,n,r,o,i,s,a,l){if(Qv.apply(this,arguments),to){if(to){var c=Ki;to=!1,Ki=null}else throw Error(A(198));Yi||(Yi=!0,sl=c)}}function $n(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function yp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ou(e){if($n(e)!==e)throw Error(A(188))}function Yv(e){var t=e.alternate;if(!t){if(t=$n(e),t===null)throw Error(A(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Ou(o),e;if(i===r)return Ou(o),t;i=i.sibling}throw Error(A(188))}if(n.return!==r.return)n=o,r=i;else{for(var s=!1,a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s){for(a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s)throw Error(A(189))}}if(n.alternate!==r)throw Error(A(190))}if(n.tag!==3)throw Error(A(188));return n.stateNode.current===n?e:t}function wp(e){return e=Yv(e),e!==null?bp(e):null}function bp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=bp(e);if(t!==null)return t;e=e.sibling}return null}var xp=We.unstable_scheduleCallback,Fu=We.unstable_cancelCallback,qv=We.unstable_shouldYield,Jv=We.unstable_requestPaint,ce=We.unstable_now,Xv=We.unstable_getCurrentPriorityLevel,bc=We.unstable_ImmediatePriority,kp=We.unstable_UserBlockingPriority,qi=We.unstable_NormalPriority,Zv=We.unstable_LowPriority,Sp=We.unstable_IdlePriority,_s=null,yt=null;function e0(e){if(yt&&typeof yt.onCommitFiberRoot=="function")try{yt.onCommitFiberRoot(_s,e,void 0,(e.current.flags&128)===128)}catch{}}var ct=Math.clz32?Math.clz32:r0,t0=Math.log,n0=Math.LN2;function r0(e){return e>>>=0,e===0?32:31-(t0(e)/n0|0)|0}var ni=64,ri=4194304;function Xr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ji(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~o;a!==0?r=Xr(a):(i&=s,i!==0&&(r=Xr(i)))}else s=n&~o,s!==0?r=Xr(s):i!==0&&(r=Xr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ct(t),o=1<<n,r|=e[n],t&=~o;return r}function o0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function i0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-ct(i),a=1<<s,l=o[s];l===-1?(!(a&n)||a&r)&&(o[s]=o0(a,t)):l<=t&&(e.expiredLanes|=a),i&=~a}}function al(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Cp(){var e=ni;return ni<<=1,!(ni&4194240)&&(ni=64),e}function ia(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Do(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ct(t),e[t]=n}function s0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-ct(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function xc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ct(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var q=0;function Ep(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Tp,kc,Pp,Ap,_p,ll=!1,oi=[],Yt=null,qt=null,Jt=null,mo=new Map,go=new Map,Vt=[],a0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bu(e,t){switch(e){case"focusin":case"focusout":Yt=null;break;case"dragenter":case"dragleave":qt=null;break;case"mouseover":case"mouseout":Jt=null;break;case"pointerover":case"pointerout":mo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":go.delete(t.pointerId)}}function Lr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Fo(t),t!==null&&kc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function l0(e,t,n,r,o){switch(t){case"focusin":return Yt=Lr(Yt,e,t,n,r,o),!0;case"dragenter":return qt=Lr(qt,e,t,n,r,o),!0;case"mouseover":return Jt=Lr(Jt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return mo.set(i,Lr(mo.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,go.set(i,Lr(go.get(i)||null,e,t,n,r,o)),!0}return!1}function Np(e){var t=yn(e.target);if(t!==null){var n=$n(t);if(n!==null){if(t=n.tag,t===13){if(t=yp(n),t!==null){e.blockedOn=t,_p(e.priority,function(){Pp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _i(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=cl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);rl=r,n.target.dispatchEvent(r),rl=null}else return t=Fo(n),t!==null&&kc(t),e.blockedOn=n,!1;t.shift()}return!0}function Wu(e,t,n){_i(e)&&n.delete(t)}function c0(){ll=!1,Yt!==null&&_i(Yt)&&(Yt=null),qt!==null&&_i(qt)&&(qt=null),Jt!==null&&_i(Jt)&&(Jt=null),mo.forEach(Wu),go.forEach(Wu)}function Dr(e,t){e.blockedOn===t&&(e.blockedOn=null,ll||(ll=!0,We.unstable_scheduleCallback(We.unstable_NormalPriority,c0)))}function vo(e){function t(o){return Dr(o,e)}if(0<oi.length){Dr(oi[0],e);for(var n=1;n<oi.length;n++){var r=oi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Yt!==null&&Dr(Yt,e),qt!==null&&Dr(qt,e),Jt!==null&&Dr(Jt,e),mo.forEach(t),go.forEach(t),n=0;n<Vt.length;n++)r=Vt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Vt.length&&(n=Vt[0],n.blockedOn===null);)Np(n),n.blockedOn===null&&Vt.shift()}var or=It.ReactCurrentBatchConfig,Xi=!0;function u0(e,t,n,r){var o=q,i=or.transition;or.transition=null;try{q=1,Sc(e,t,n,r)}finally{q=o,or.transition=i}}function d0(e,t,n,r){var o=q,i=or.transition;or.transition=null;try{q=4,Sc(e,t,n,r)}finally{q=o,or.transition=i}}function Sc(e,t,n,r){if(Xi){var o=cl(e,t,n,r);if(o===null)ma(e,t,r,Zi,n),Bu(e,r);else if(l0(o,e,t,n,r))r.stopPropagation();else if(Bu(e,r),t&4&&-1<a0.indexOf(e)){for(;o!==null;){var i=Fo(o);if(i!==null&&Tp(i),i=cl(e,t,n,r),i===null&&ma(e,t,r,Zi,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else ma(e,t,r,null,n)}}var Zi=null;function cl(e,t,n,r){if(Zi=null,e=wc(r),e=yn(e),e!==null)if(t=$n(e),t===null)e=null;else if(n=t.tag,n===13){if(e=yp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Zi=e,null}function Rp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xv()){case bc:return 1;case kp:return 4;case qi:case Zv:return 16;case Sp:return 536870912;default:return 16}default:return 16}}var Gt=null,Cc=null,Ni=null;function Mp(){if(Ni)return Ni;var e,t=Cc,n=t.length,r,o="value"in Gt?Gt.value:Gt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===o[i-r];r++);return Ni=o.slice(e,1<r?1-r:void 0)}function Ri(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ii(){return!0}function Uu(){return!1}function He(e){function t(n,r,o,i,s){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ii:Uu,this.isPropagationStopped=Uu,this}return se(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ii)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ii)},persist:function(){},isPersistent:ii}),t}var Tr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ec=He(Tr),Oo=se({},Tr,{view:0,detail:0}),f0=He(Oo),sa,aa,Or,Ns=se({},Oo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Or&&(Or&&e.type==="mousemove"?(sa=e.screenX-Or.screenX,aa=e.screenY-Or.screenY):aa=sa=0,Or=e),sa)},movementY:function(e){return"movementY"in e?e.movementY:aa}}),Vu=He(Ns),p0=se({},Ns,{dataTransfer:0}),h0=He(p0),m0=se({},Oo,{relatedTarget:0}),la=He(m0),g0=se({},Tr,{animationName:0,elapsedTime:0,pseudoElement:0}),v0=He(g0),y0=se({},Tr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),w0=He(y0),b0=se({},Tr,{data:0}),Hu=He(b0),x0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},k0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},S0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function C0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=S0[e])?!!t[e]:!1}function Tc(){return C0}var E0=se({},Oo,{key:function(e){if(e.key){var t=x0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ri(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?k0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tc,charCode:function(e){return e.type==="keypress"?Ri(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ri(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),T0=He(E0),P0=se({},Ns,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gu=He(P0),A0=se({},Oo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tc}),_0=He(A0),N0=se({},Tr,{propertyName:0,elapsedTime:0,pseudoElement:0}),R0=He(N0),M0=se({},Ns,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),$0=He(M0),z0=[9,13,27,32],Pc=At&&"CompositionEvent"in window,no=null;At&&"documentMode"in document&&(no=document.documentMode);var I0=At&&"TextEvent"in window&&!no,$p=At&&(!Pc||no&&8<no&&11>=no),Qu=" ",Ku=!1;function zp(e,t){switch(e){case"keyup":return z0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ip(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vn=!1;function j0(e,t){switch(e){case"compositionend":return Ip(t);case"keypress":return t.which!==32?null:(Ku=!0,Qu);case"textInput":return e=t.data,e===Qu&&Ku?null:e;default:return null}}function L0(e,t){if(Vn)return e==="compositionend"||!Pc&&zp(e,t)?(e=Mp(),Ni=Cc=Gt=null,Vn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return $p&&t.locale!=="ko"?null:t.data;default:return null}}var D0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!D0[e.type]:t==="textarea"}function jp(e,t,n,r){pp(r),t=es(t,"onChange"),0<t.length&&(n=new Ec("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ro=null,yo=null;function O0(e){Qp(e,0)}function Rs(e){var t=Qn(e);if(sp(t))return e}function F0(e,t){if(e==="change")return t}var Lp=!1;if(At){var ca;if(At){var ua="oninput"in document;if(!ua){var qu=document.createElement("div");qu.setAttribute("oninput","return;"),ua=typeof qu.oninput=="function"}ca=ua}else ca=!1;Lp=ca&&(!document.documentMode||9<document.documentMode)}function Ju(){ro&&(ro.detachEvent("onpropertychange",Dp),yo=ro=null)}function Dp(e){if(e.propertyName==="value"&&Rs(yo)){var t=[];jp(t,yo,e,wc(e)),vp(O0,t)}}function B0(e,t,n){e==="focusin"?(Ju(),ro=t,yo=n,ro.attachEvent("onpropertychange",Dp)):e==="focusout"&&Ju()}function W0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Rs(yo)}function U0(e,t){if(e==="click")return Rs(t)}function V0(e,t){if(e==="input"||e==="change")return Rs(t)}function H0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ft=typeof Object.is=="function"?Object.is:H0;function wo(e,t){if(ft(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Ha.call(t,o)||!ft(e[o],t[o]))return!1}return!0}function Xu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Zu(e,t){var n=Xu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Xu(n)}}function Op(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Op(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Fp(){for(var e=window,t=Qi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Qi(e.document)}return t}function Ac(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function G0(e){var t=Fp(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Op(n.ownerDocument.documentElement,n)){if(r!==null&&Ac(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Zu(n,i);var s=Zu(n,r);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Q0=At&&"documentMode"in document&&11>=document.documentMode,Hn=null,ul=null,oo=null,dl=!1;function ed(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;dl||Hn==null||Hn!==Qi(r)||(r=Hn,"selectionStart"in r&&Ac(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),oo&&wo(oo,r)||(oo=r,r=es(ul,"onSelect"),0<r.length&&(t=new Ec("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Hn)))}function si(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Gn={animationend:si("Animation","AnimationEnd"),animationiteration:si("Animation","AnimationIteration"),animationstart:si("Animation","AnimationStart"),transitionend:si("Transition","TransitionEnd")},da={},Bp={};At&&(Bp=document.createElement("div").style,"AnimationEvent"in window||(delete Gn.animationend.animation,delete Gn.animationiteration.animation,delete Gn.animationstart.animation),"TransitionEvent"in window||delete Gn.transitionend.transition);function Ms(e){if(da[e])return da[e];if(!Gn[e])return e;var t=Gn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Bp)return da[e]=t[n];return e}var Wp=Ms("animationend"),Up=Ms("animationiteration"),Vp=Ms("animationstart"),Hp=Ms("transitionend"),Gp=new Map,td="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function dn(e,t){Gp.set(e,t),Mn(t,[e])}for(var fa=0;fa<td.length;fa++){var pa=td[fa],K0=pa.toLowerCase(),Y0=pa[0].toUpperCase()+pa.slice(1);dn(K0,"on"+Y0)}dn(Wp,"onAnimationEnd");dn(Up,"onAnimationIteration");dn(Vp,"onAnimationStart");dn("dblclick","onDoubleClick");dn("focusin","onFocus");dn("focusout","onBlur");dn(Hp,"onTransitionEnd");fr("onMouseEnter",["mouseout","mouseover"]);fr("onMouseLeave",["mouseout","mouseover"]);fr("onPointerEnter",["pointerout","pointerover"]);fr("onPointerLeave",["pointerout","pointerover"]);Mn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Mn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Mn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Mn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Mn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Mn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),q0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Zr));function nd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Kv(r,t,void 0,e),e.currentTarget=null}function Qp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==i&&o.isPropagationStopped())break e;nd(o,a,c),i=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,c=a.currentTarget,a=a.listener,l!==i&&o.isPropagationStopped())break e;nd(o,a,c),i=l}}}if(Yi)throw e=sl,Yi=!1,sl=null,e}function te(e,t){var n=t[gl];n===void 0&&(n=t[gl]=new Set);var r=e+"__bubble";n.has(r)||(Kp(t,e,2,!1),n.add(r))}function ha(e,t,n){var r=0;t&&(r|=4),Kp(n,e,r,t)}var ai="_reactListening"+Math.random().toString(36).slice(2);function bo(e){if(!e[ai]){e[ai]=!0,tp.forEach(function(n){n!=="selectionchange"&&(q0.has(n)||ha(n,!1,e),ha(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ai]||(t[ai]=!0,ha("selectionchange",!1,t))}}function Kp(e,t,n,r){switch(Rp(t)){case 1:var o=u0;break;case 4:o=d0;break;default:o=Sc}n=o.bind(null,t,n,e),o=void 0,!il||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function ma(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;s=s.return}for(;a!==null;){if(s=yn(a),s===null)return;if(l=s.tag,l===5||l===6){r=i=s;continue e}a=a.parentNode}}r=r.return}vp(function(){var c=i,d=wc(n),u=[];e:{var h=Gp.get(e);if(h!==void 0){var v=Ec,b=e;switch(e){case"keypress":if(Ri(n)===0)break e;case"keydown":case"keyup":v=T0;break;case"focusin":b="focus",v=la;break;case"focusout":b="blur",v=la;break;case"beforeblur":case"afterblur":v=la;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Vu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=h0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=_0;break;case Wp:case Up:case Vp:v=v0;break;case Hp:v=R0;break;case"scroll":v=f0;break;case"wheel":v=$0;break;case"copy":case"cut":case"paste":v=w0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Gu}var y=(t&4)!==0,x=!y&&e==="scroll",m=y?h!==null?h+"Capture":null:h;y=[];for(var p=c,w;p!==null;){w=p;var k=w.stateNode;if(w.tag===5&&k!==null&&(w=k,m!==null&&(k=ho(p,m),k!=null&&y.push(xo(p,k,w)))),x)break;p=p.return}0<y.length&&(h=new v(h,b,null,n,d),u.push({event:h,listeners:y}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",h&&n!==rl&&(b=n.relatedTarget||n.fromElement)&&(yn(b)||b[_t]))break e;if((v||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,v?(b=n.relatedTarget||n.toElement,v=c,b=b?yn(b):null,b!==null&&(x=$n(b),b!==x||b.tag!==5&&b.tag!==6)&&(b=null)):(v=null,b=c),v!==b)){if(y=Vu,k="onMouseLeave",m="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(y=Gu,k="onPointerLeave",m="onPointerEnter",p="pointer"),x=v==null?h:Qn(v),w=b==null?h:Qn(b),h=new y(k,p+"leave",v,n,d),h.target=x,h.relatedTarget=w,k=null,yn(d)===c&&(y=new y(m,p+"enter",b,n,d),y.target=w,y.relatedTarget=x,k=y),x=k,v&&b)t:{for(y=v,m=b,p=0,w=y;w;w=jn(w))p++;for(w=0,k=m;k;k=jn(k))w++;for(;0<p-w;)y=jn(y),p--;for(;0<w-p;)m=jn(m),w--;for(;p--;){if(y===m||m!==null&&y===m.alternate)break t;y=jn(y),m=jn(m)}y=null}else y=null;v!==null&&rd(u,h,v,y,!1),b!==null&&x!==null&&rd(u,x,b,y,!0)}}e:{if(h=c?Qn(c):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var S=F0;else if(Yu(h))if(Lp)S=V0;else{S=W0;var C=B0}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=U0);if(S&&(S=S(e,c))){jp(u,S,n,d);break e}C&&C(e,h,c),e==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&Xa(h,"number",h.value)}switch(C=c?Qn(c):window,e){case"focusin":(Yu(C)||C.contentEditable==="true")&&(Hn=C,ul=c,oo=null);break;case"focusout":oo=ul=Hn=null;break;case"mousedown":dl=!0;break;case"contextmenu":case"mouseup":case"dragend":dl=!1,ed(u,n,d);break;case"selectionchange":if(Q0)break;case"keydown":case"keyup":ed(u,n,d)}var E;if(Pc)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Vn?zp(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&($p&&n.locale!=="ko"&&(Vn||T!=="onCompositionStart"?T==="onCompositionEnd"&&Vn&&(E=Mp()):(Gt=d,Cc="value"in Gt?Gt.value:Gt.textContent,Vn=!0)),C=es(c,T),0<C.length&&(T=new Hu(T,e,null,n,d),u.push({event:T,listeners:C}),E?T.data=E:(E=Ip(n),E!==null&&(T.data=E)))),(E=I0?j0(e,n):L0(e,n))&&(c=es(c,"onBeforeInput"),0<c.length&&(d=new Hu("onBeforeInput","beforeinput",null,n,d),u.push({event:d,listeners:c}),d.data=E))}Qp(u,t)})}function xo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function es(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=ho(e,n),i!=null&&r.unshift(xo(e,i,o)),i=ho(e,t),i!=null&&r.push(xo(e,i,o))),e=e.return}return r}function jn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function rd(e,t,n,r,o){for(var i=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,o?(l=ho(n,i),l!=null&&s.unshift(xo(n,l,a))):o||(l=ho(n,i),l!=null&&s.push(xo(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var J0=/\r\n?/g,X0=/\u0000|\uFFFD/g;function od(e){return(typeof e=="string"?e:""+e).replace(J0,`
`).replace(X0,"")}function li(e,t,n){if(t=od(t),od(e)!==t&&n)throw Error(A(425))}function ts(){}var fl=null,pl=null;function hl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ml=typeof setTimeout=="function"?setTimeout:void 0,Z0=typeof clearTimeout=="function"?clearTimeout:void 0,id=typeof Promise=="function"?Promise:void 0,ey=typeof queueMicrotask=="function"?queueMicrotask:typeof id<"u"?function(e){return id.resolve(null).then(e).catch(ty)}:ml;function ty(e){setTimeout(function(){throw e})}function ga(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),vo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);vo(t)}function Xt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function sd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Pr=Math.random().toString(36).slice(2),gt="__reactFiber$"+Pr,ko="__reactProps$"+Pr,_t="__reactContainer$"+Pr,gl="__reactEvents$"+Pr,ny="__reactListeners$"+Pr,ry="__reactHandles$"+Pr;function yn(e){var t=e[gt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[_t]||n[gt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=sd(e);e!==null;){if(n=e[gt])return n;e=sd(e)}return t}e=n,n=e.parentNode}return null}function Fo(e){return e=e[gt]||e[_t],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Qn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(A(33))}function $s(e){return e[ko]||null}var vl=[],Kn=-1;function fn(e){return{current:e}}function ne(e){0>Kn||(e.current=vl[Kn],vl[Kn]=null,Kn--)}function Z(e,t){Kn++,vl[Kn]=e.current,e.current=t}var sn={},Se=fn(sn),Re=fn(!1),En=sn;function pr(e,t){var n=e.type.contextTypes;if(!n)return sn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Me(e){return e=e.childContextTypes,e!=null}function ns(){ne(Re),ne(Se)}function ad(e,t,n){if(Se.current!==sn)throw Error(A(168));Z(Se,t),Z(Re,n)}function Yp(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(A(108,Bv(e)||"Unknown",o));return se({},n,r)}function rs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||sn,En=Se.current,Z(Se,e),Z(Re,Re.current),!0}function ld(e,t,n){var r=e.stateNode;if(!r)throw Error(A(169));n?(e=Yp(e,t,En),r.__reactInternalMemoizedMergedChildContext=e,ne(Re),ne(Se),Z(Se,e)):ne(Re),Z(Re,n)}var Ct=null,zs=!1,va=!1;function qp(e){Ct===null?Ct=[e]:Ct.push(e)}function oy(e){zs=!0,qp(e)}function pn(){if(!va&&Ct!==null){va=!0;var e=0,t=q;try{var n=Ct;for(q=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ct=null,zs=!1}catch(o){throw Ct!==null&&(Ct=Ct.slice(e+1)),xp(bc,pn),o}finally{q=t,va=!1}}return null}var Yn=[],qn=0,os=null,is=0,Ke=[],Ye=0,Tn=null,Et=1,Tt="";function gn(e,t){Yn[qn++]=is,Yn[qn++]=os,os=e,is=t}function Jp(e,t,n){Ke[Ye++]=Et,Ke[Ye++]=Tt,Ke[Ye++]=Tn,Tn=e;var r=Et;e=Tt;var o=32-ct(r)-1;r&=~(1<<o),n+=1;var i=32-ct(t)+o;if(30<i){var s=o-o%5;i=(r&(1<<s)-1).toString(32),r>>=s,o-=s,Et=1<<32-ct(t)+o|n<<o|r,Tt=i+e}else Et=1<<i|n<<o|r,Tt=e}function _c(e){e.return!==null&&(gn(e,1),Jp(e,1,0))}function Nc(e){for(;e===os;)os=Yn[--qn],Yn[qn]=null,is=Yn[--qn],Yn[qn]=null;for(;e===Tn;)Tn=Ke[--Ye],Ke[Ye]=null,Tt=Ke[--Ye],Ke[Ye]=null,Et=Ke[--Ye],Ke[Ye]=null}var Fe=null,Oe=null,re=!1,at=null;function Xp(e,t){var n=qe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function cd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Fe=e,Oe=Xt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Fe=e,Oe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Tn!==null?{id:Et,overflow:Tt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=qe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Fe=e,Oe=null,!0):!1;default:return!1}}function yl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function wl(e){if(re){var t=Oe;if(t){var n=t;if(!cd(e,t)){if(yl(e))throw Error(A(418));t=Xt(n.nextSibling);var r=Fe;t&&cd(e,t)?Xp(r,n):(e.flags=e.flags&-4097|2,re=!1,Fe=e)}}else{if(yl(e))throw Error(A(418));e.flags=e.flags&-4097|2,re=!1,Fe=e}}}function ud(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Fe=e}function ci(e){if(e!==Fe)return!1;if(!re)return ud(e),re=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!hl(e.type,e.memoizedProps)),t&&(t=Oe)){if(yl(e))throw Zp(),Error(A(418));for(;t;)Xp(e,t),t=Xt(t.nextSibling)}if(ud(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(A(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Oe=Xt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Oe=null}}else Oe=Fe?Xt(e.stateNode.nextSibling):null;return!0}function Zp(){for(var e=Oe;e;)e=Xt(e.nextSibling)}function hr(){Oe=Fe=null,re=!1}function Rc(e){at===null?at=[e]:at.push(e)}var iy=It.ReactCurrentBatchConfig;function it(e,t){if(e&&e.defaultProps){t=se({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var ss=fn(null),as=null,Jn=null,Mc=null;function $c(){Mc=Jn=as=null}function zc(e){var t=ss.current;ne(ss),e._currentValue=t}function bl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ir(e,t){as=e,Mc=Jn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ne=!0),e.firstContext=null)}function Xe(e){var t=e._currentValue;if(Mc!==e)if(e={context:e,memoizedValue:t,next:null},Jn===null){if(as===null)throw Error(A(308));Jn=e,as.dependencies={lanes:0,firstContext:e}}else Jn=Jn.next=e;return t}var wn=null;function Ic(e){wn===null?wn=[e]:wn.push(e)}function eh(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Ic(t)):(n.next=o.next,o.next=n),t.interleaved=n,Nt(e,r)}function Nt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ut=!1;function jc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function th(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Pt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Zt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Nt(e,n)}return o=r.interleaved,o===null?(t.next=t,Ic(r)):(t.next=o.next,o.next=t),r.interleaved=t,Nt(e,n)}function Mi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,xc(e,n)}}function dd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ls(e,t,n,r){var o=e.updateQueue;Ut=!1;var i=o.firstBaseUpdate,s=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var l=a,c=l.next;l.next=null,s===null?i=c:s.next=c,s=l;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(i!==null){var u=o.baseState;s=0,d=c=l=null,a=i;do{var h=a.lane,v=a.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var b=e,y=a;switch(h=t,v=n,y.tag){case 1:if(b=y.payload,typeof b=="function"){u=b.call(v,u,h);break e}u=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=y.payload,h=typeof b=="function"?b.call(v,u,h):b,h==null)break e;u=se({},u,h);break e;case 2:Ut=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[a]:h.push(a))}else v={eventTime:v,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=v,l=u):d=d.next=v,s|=h;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;h=a,a=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(!0);if(d===null&&(l=u),o.baseState=l,o.firstBaseUpdate=c,o.lastBaseUpdate=d,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);An|=s,e.lanes=s,e.memoizedState=u}}function fd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(A(191,o));o.call(r)}}}var nh=new ep.Component().refs;function xl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:se({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Is={isMounted:function(e){return(e=e._reactInternals)?$n(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ee(),o=tn(e),i=Pt(r,o);i.payload=t,n!=null&&(i.callback=n),t=Zt(e,i,o),t!==null&&(ut(t,e,o,r),Mi(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ee(),o=tn(e),i=Pt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Zt(e,i,o),t!==null&&(ut(t,e,o,r),Mi(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ee(),r=tn(e),o=Pt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Zt(e,o,r),t!==null&&(ut(t,e,r,n),Mi(t,e,r))}};function pd(e,t,n,r,o,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,s):t.prototype&&t.prototype.isPureReactComponent?!wo(n,r)||!wo(o,i):!0}function rh(e,t,n){var r=!1,o=sn,i=t.contextType;return typeof i=="object"&&i!==null?i=Xe(i):(o=Me(t)?En:Se.current,r=t.contextTypes,i=(r=r!=null)?pr(e,o):sn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Is,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function hd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Is.enqueueReplaceState(t,t.state,null)}function kl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=nh,jc(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Xe(i):(i=Me(t)?En:Se.current,o.context=pr(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(xl(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Is.enqueueReplaceState(o,o.state,null),ls(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Fr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(A(309));var r=n.stateNode}if(!r)throw Error(A(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var a=o.refs;a===nh&&(a=o.refs={}),s===null?delete a[i]:a[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(A(284));if(!n._owner)throw Error(A(290,e))}return e}function ui(e,t){throw e=Object.prototype.toString.call(t),Error(A(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function md(e){var t=e._init;return t(e._payload)}function oh(e){function t(m,p){if(e){var w=m.deletions;w===null?(m.deletions=[p],m.flags|=16):w.push(p)}}function n(m,p){if(!e)return null;for(;p!==null;)t(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function o(m,p){return m=nn(m,p),m.index=0,m.sibling=null,m}function i(m,p,w){return m.index=w,e?(w=m.alternate,w!==null?(w=w.index,w<p?(m.flags|=2,p):w):(m.flags|=2,p)):(m.flags|=1048576,p)}function s(m){return e&&m.alternate===null&&(m.flags|=2),m}function a(m,p,w,k){return p===null||p.tag!==6?(p=Ca(w,m.mode,k),p.return=m,p):(p=o(p,w),p.return=m,p)}function l(m,p,w,k){var S=w.type;return S===Un?d(m,p,w.props.children,k,w.key):p!==null&&(p.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Wt&&md(S)===p.type)?(k=o(p,w.props),k.ref=Fr(m,p,w),k.return=m,k):(k=Di(w.type,w.key,w.props,null,m.mode,k),k.ref=Fr(m,p,w),k.return=m,k)}function c(m,p,w,k){return p===null||p.tag!==4||p.stateNode.containerInfo!==w.containerInfo||p.stateNode.implementation!==w.implementation?(p=Ea(w,m.mode,k),p.return=m,p):(p=o(p,w.children||[]),p.return=m,p)}function d(m,p,w,k,S){return p===null||p.tag!==7?(p=Cn(w,m.mode,k,S),p.return=m,p):(p=o(p,w),p.return=m,p)}function u(m,p,w){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Ca(""+p,m.mode,w),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Zo:return w=Di(p.type,p.key,p.props,null,m.mode,w),w.ref=Fr(m,null,p),w.return=m,w;case Wn:return p=Ea(p,m.mode,w),p.return=m,p;case Wt:var k=p._init;return u(m,k(p._payload),w)}if(Jr(p)||Ir(p))return p=Cn(p,m.mode,w,null),p.return=m,p;ui(m,p)}return null}function h(m,p,w,k){var S=p!==null?p.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return S!==null?null:a(m,p,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Zo:return w.key===S?l(m,p,w,k):null;case Wn:return w.key===S?c(m,p,w,k):null;case Wt:return S=w._init,h(m,p,S(w._payload),k)}if(Jr(w)||Ir(w))return S!==null?null:d(m,p,w,k,null);ui(m,w)}return null}function v(m,p,w,k,S){if(typeof k=="string"&&k!==""||typeof k=="number")return m=m.get(w)||null,a(p,m,""+k,S);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Zo:return m=m.get(k.key===null?w:k.key)||null,l(p,m,k,S);case Wn:return m=m.get(k.key===null?w:k.key)||null,c(p,m,k,S);case Wt:var C=k._init;return v(m,p,w,C(k._payload),S)}if(Jr(k)||Ir(k))return m=m.get(w)||null,d(p,m,k,S,null);ui(p,k)}return null}function b(m,p,w,k){for(var S=null,C=null,E=p,T=p=0,M=null;E!==null&&T<w.length;T++){E.index>T?(M=E,E=null):M=E.sibling;var N=h(m,E,w[T],k);if(N===null){E===null&&(E=M);break}e&&E&&N.alternate===null&&t(m,E),p=i(N,p,T),C===null?S=N:C.sibling=N,C=N,E=M}if(T===w.length)return n(m,E),re&&gn(m,T),S;if(E===null){for(;T<w.length;T++)E=u(m,w[T],k),E!==null&&(p=i(E,p,T),C===null?S=E:C.sibling=E,C=E);return re&&gn(m,T),S}for(E=r(m,E);T<w.length;T++)M=v(E,m,T,w[T],k),M!==null&&(e&&M.alternate!==null&&E.delete(M.key===null?T:M.key),p=i(M,p,T),C===null?S=M:C.sibling=M,C=M);return e&&E.forEach(function(F){return t(m,F)}),re&&gn(m,T),S}function y(m,p,w,k){var S=Ir(w);if(typeof S!="function")throw Error(A(150));if(w=S.call(w),w==null)throw Error(A(151));for(var C=S=null,E=p,T=p=0,M=null,N=w.next();E!==null&&!N.done;T++,N=w.next()){E.index>T?(M=E,E=null):M=E.sibling;var F=h(m,E,N.value,k);if(F===null){E===null&&(E=M);break}e&&E&&F.alternate===null&&t(m,E),p=i(F,p,T),C===null?S=F:C.sibling=F,C=F,E=M}if(N.done)return n(m,E),re&&gn(m,T),S;if(E===null){for(;!N.done;T++,N=w.next())N=u(m,N.value,k),N!==null&&(p=i(N,p,T),C===null?S=N:C.sibling=N,C=N);return re&&gn(m,T),S}for(E=r(m,E);!N.done;T++,N=w.next())N=v(E,m,T,N.value,k),N!==null&&(e&&N.alternate!==null&&E.delete(N.key===null?T:N.key),p=i(N,p,T),C===null?S=N:C.sibling=N,C=N);return e&&E.forEach(function(z){return t(m,z)}),re&&gn(m,T),S}function x(m,p,w,k){if(typeof w=="object"&&w!==null&&w.type===Un&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case Zo:e:{for(var S=w.key,C=p;C!==null;){if(C.key===S){if(S=w.type,S===Un){if(C.tag===7){n(m,C.sibling),p=o(C,w.props.children),p.return=m,m=p;break e}}else if(C.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Wt&&md(S)===C.type){n(m,C.sibling),p=o(C,w.props),p.ref=Fr(m,C,w),p.return=m,m=p;break e}n(m,C);break}else t(m,C);C=C.sibling}w.type===Un?(p=Cn(w.props.children,m.mode,k,w.key),p.return=m,m=p):(k=Di(w.type,w.key,w.props,null,m.mode,k),k.ref=Fr(m,p,w),k.return=m,m=k)}return s(m);case Wn:e:{for(C=w.key;p!==null;){if(p.key===C)if(p.tag===4&&p.stateNode.containerInfo===w.containerInfo&&p.stateNode.implementation===w.implementation){n(m,p.sibling),p=o(p,w.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else t(m,p);p=p.sibling}p=Ea(w,m.mode,k),p.return=m,m=p}return s(m);case Wt:return C=w._init,x(m,p,C(w._payload),k)}if(Jr(w))return b(m,p,w,k);if(Ir(w))return y(m,p,w,k);ui(m,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,p!==null&&p.tag===6?(n(m,p.sibling),p=o(p,w),p.return=m,m=p):(n(m,p),p=Ca(w,m.mode,k),p.return=m,m=p),s(m)):n(m,p)}return x}var mr=oh(!0),ih=oh(!1),Bo={},wt=fn(Bo),So=fn(Bo),Co=fn(Bo);function bn(e){if(e===Bo)throw Error(A(174));return e}function Lc(e,t){switch(Z(Co,t),Z(So,e),Z(wt,Bo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:el(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=el(t,e)}ne(wt),Z(wt,t)}function gr(){ne(wt),ne(So),ne(Co)}function sh(e){bn(Co.current);var t=bn(wt.current),n=el(t,e.type);t!==n&&(Z(So,e),Z(wt,n))}function Dc(e){So.current===e&&(ne(wt),ne(So))}var oe=fn(0);function cs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ya=[];function Oc(){for(var e=0;e<ya.length;e++)ya[e]._workInProgressVersionPrimary=null;ya.length=0}var $i=It.ReactCurrentDispatcher,wa=It.ReactCurrentBatchConfig,Pn=0,ie=null,fe=null,me=null,us=!1,io=!1,Eo=0,sy=0;function be(){throw Error(A(321))}function Fc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ft(e[n],t[n]))return!1;return!0}function Bc(e,t,n,r,o,i){if(Pn=i,ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,$i.current=e===null||e.memoizedState===null?uy:dy,e=n(r,o),io){i=0;do{if(io=!1,Eo=0,25<=i)throw Error(A(301));i+=1,me=fe=null,t.updateQueue=null,$i.current=fy,e=n(r,o)}while(io)}if($i.current=ds,t=fe!==null&&fe.next!==null,Pn=0,me=fe=ie=null,us=!1,t)throw Error(A(300));return e}function Wc(){var e=Eo!==0;return Eo=0,e}function ht(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return me===null?ie.memoizedState=me=e:me=me.next=e,me}function Ze(){if(fe===null){var e=ie.alternate;e=e!==null?e.memoizedState:null}else e=fe.next;var t=me===null?ie.memoizedState:me.next;if(t!==null)me=t,fe=e;else{if(e===null)throw Error(A(310));fe=e,e={memoizedState:fe.memoizedState,baseState:fe.baseState,baseQueue:fe.baseQueue,queue:fe.queue,next:null},me===null?ie.memoizedState=me=e:me=me.next=e}return me}function To(e,t){return typeof t=="function"?t(e):t}function ba(e){var t=Ze(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var r=fe,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var s=o.next;o.next=i.next,i.next=s}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=s=null,l=null,c=i;do{var d=c.lane;if((Pn&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var u={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=u,s=r):l=l.next=u,ie.lanes|=d,An|=d}c=c.next}while(c!==null&&c!==i);l===null?s=r:l.next=a,ft(r,t.memoizedState)||(Ne=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,ie.lanes|=i,An|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function xa(e){var t=Ze(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var s=o=o.next;do i=e(i,s.action),s=s.next;while(s!==o);ft(i,t.memoizedState)||(Ne=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function ah(){}function lh(e,t){var n=ie,r=Ze(),o=t(),i=!ft(r.memoizedState,o);if(i&&(r.memoizedState=o,Ne=!0),r=r.queue,Uc(dh.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||me!==null&&me.memoizedState.tag&1){if(n.flags|=2048,Po(9,uh.bind(null,n,r,o,t),void 0,null),ge===null)throw Error(A(349));Pn&30||ch(n,t,o)}return o}function ch(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function uh(e,t,n,r){t.value=n,t.getSnapshot=r,fh(t)&&ph(e)}function dh(e,t,n){return n(function(){fh(t)&&ph(e)})}function fh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ft(e,n)}catch{return!0}}function ph(e){var t=Nt(e,1);t!==null&&ut(t,e,1,-1)}function gd(e){var t=ht();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:To,lastRenderedState:e},t.queue=e,e=e.dispatch=cy.bind(null,ie,e),[t.memoizedState,e]}function Po(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function hh(){return Ze().memoizedState}function zi(e,t,n,r){var o=ht();ie.flags|=e,o.memoizedState=Po(1|t,n,void 0,r===void 0?null:r)}function js(e,t,n,r){var o=Ze();r=r===void 0?null:r;var i=void 0;if(fe!==null){var s=fe.memoizedState;if(i=s.destroy,r!==null&&Fc(r,s.deps)){o.memoizedState=Po(t,n,i,r);return}}ie.flags|=e,o.memoizedState=Po(1|t,n,i,r)}function vd(e,t){return zi(8390656,8,e,t)}function Uc(e,t){return js(2048,8,e,t)}function mh(e,t){return js(4,2,e,t)}function gh(e,t){return js(4,4,e,t)}function vh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function yh(e,t,n){return n=n!=null?n.concat([e]):null,js(4,4,vh.bind(null,t,e),n)}function Vc(){}function wh(e,t){var n=Ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Fc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function bh(e,t){var n=Ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Fc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function xh(e,t,n){return Pn&21?(ft(n,t)||(n=Cp(),ie.lanes|=n,An|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ne=!0),e.memoizedState=n)}function ay(e,t){var n=q;q=n!==0&&4>n?n:4,e(!0);var r=wa.transition;wa.transition={};try{e(!1),t()}finally{q=n,wa.transition=r}}function kh(){return Ze().memoizedState}function ly(e,t,n){var r=tn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Sh(e))Ch(t,n);else if(n=eh(e,t,n,r),n!==null){var o=Ee();ut(n,e,r,o),Eh(n,t,r)}}function cy(e,t,n){var r=tn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Sh(e))Ch(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,a=i(s,n);if(o.hasEagerState=!0,o.eagerState=a,ft(a,s)){var l=t.interleaved;l===null?(o.next=o,Ic(t)):(o.next=l.next,l.next=o),t.interleaved=o;return}}catch{}finally{}n=eh(e,t,o,r),n!==null&&(o=Ee(),ut(n,e,r,o),Eh(n,t,r))}}function Sh(e){var t=e.alternate;return e===ie||t!==null&&t===ie}function Ch(e,t){io=us=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Eh(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,xc(e,n)}}var ds={readContext:Xe,useCallback:be,useContext:be,useEffect:be,useImperativeHandle:be,useInsertionEffect:be,useLayoutEffect:be,useMemo:be,useReducer:be,useRef:be,useState:be,useDebugValue:be,useDeferredValue:be,useTransition:be,useMutableSource:be,useSyncExternalStore:be,useId:be,unstable_isNewReconciler:!1},uy={readContext:Xe,useCallback:function(e,t){return ht().memoizedState=[e,t===void 0?null:t],e},useContext:Xe,useEffect:vd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,zi(4194308,4,vh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return zi(4194308,4,e,t)},useInsertionEffect:function(e,t){return zi(4,2,e,t)},useMemo:function(e,t){var n=ht();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ht();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ly.bind(null,ie,e),[r.memoizedState,e]},useRef:function(e){var t=ht();return e={current:e},t.memoizedState=e},useState:gd,useDebugValue:Vc,useDeferredValue:function(e){return ht().memoizedState=e},useTransition:function(){var e=gd(!1),t=e[0];return e=ay.bind(null,e[1]),ht().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ie,o=ht();if(re){if(n===void 0)throw Error(A(407));n=n()}else{if(n=t(),ge===null)throw Error(A(349));Pn&30||ch(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,vd(dh.bind(null,r,i,e),[e]),r.flags|=2048,Po(9,uh.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=ht(),t=ge.identifierPrefix;if(re){var n=Tt,r=Et;n=(r&~(1<<32-ct(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Eo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=sy++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},dy={readContext:Xe,useCallback:wh,useContext:Xe,useEffect:Uc,useImperativeHandle:yh,useInsertionEffect:mh,useLayoutEffect:gh,useMemo:bh,useReducer:ba,useRef:hh,useState:function(){return ba(To)},useDebugValue:Vc,useDeferredValue:function(e){var t=Ze();return xh(t,fe.memoizedState,e)},useTransition:function(){var e=ba(To)[0],t=Ze().memoizedState;return[e,t]},useMutableSource:ah,useSyncExternalStore:lh,useId:kh,unstable_isNewReconciler:!1},fy={readContext:Xe,useCallback:wh,useContext:Xe,useEffect:Uc,useImperativeHandle:yh,useInsertionEffect:mh,useLayoutEffect:gh,useMemo:bh,useReducer:xa,useRef:hh,useState:function(){return xa(To)},useDebugValue:Vc,useDeferredValue:function(e){var t=Ze();return fe===null?t.memoizedState=e:xh(t,fe.memoizedState,e)},useTransition:function(){var e=xa(To)[0],t=Ze().memoizedState;return[e,t]},useMutableSource:ah,useSyncExternalStore:lh,useId:kh,unstable_isNewReconciler:!1};function vr(e,t){try{var n="",r=t;do n+=Fv(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function ka(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Sl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var py=typeof WeakMap=="function"?WeakMap:Map;function Th(e,t,n){n=Pt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ps||(ps=!0,$l=r),Sl(e,t)},n}function Ph(e,t,n){n=Pt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Sl(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Sl(e,t),typeof r!="function"&&(en===null?en=new Set([this]):en.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function yd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new py;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Py.bind(null,e,t,n),t.then(e,e))}function wd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function bd(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Pt(-1,1),t.tag=2,Zt(n,t,1))),n.lanes|=1),e)}var hy=It.ReactCurrentOwner,Ne=!1;function Ce(e,t,n,r){t.child=e===null?ih(t,null,n,r):mr(t,e.child,n,r)}function xd(e,t,n,r,o){n=n.render;var i=t.ref;return ir(t,o),r=Bc(e,t,n,r,i,o),n=Wc(),e!==null&&!Ne?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Rt(e,t,o)):(re&&n&&_c(t),t.flags|=1,Ce(e,t,r,o),t.child)}function kd(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Xc(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Ah(e,t,i,r,o)):(e=Di(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:wo,n(s,r)&&e.ref===t.ref)return Rt(e,t,o)}return t.flags|=1,e=nn(i,r),e.ref=t.ref,e.return=t,t.child=e}function Ah(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(wo(i,r)&&e.ref===t.ref)if(Ne=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Ne=!0);else return t.lanes=e.lanes,Rt(e,t,o)}return Cl(e,t,n,r,o)}function _h(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Z(Zn,Le),Le|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Z(Zn,Le),Le|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Z(Zn,Le),Le|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,Z(Zn,Le),Le|=r;return Ce(e,t,o,n),t.child}function Nh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Cl(e,t,n,r,o){var i=Me(n)?En:Se.current;return i=pr(t,i),ir(t,o),n=Bc(e,t,n,r,i,o),r=Wc(),e!==null&&!Ne?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Rt(e,t,o)):(re&&r&&_c(t),t.flags|=1,Ce(e,t,n,o),t.child)}function Sd(e,t,n,r,o){if(Me(n)){var i=!0;rs(t)}else i=!1;if(ir(t,o),t.stateNode===null)Ii(e,t),rh(t,n,r),kl(t,n,r,o),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=Xe(c):(c=Me(n)?En:Se.current,c=pr(t,c));var d=n.getDerivedStateFromProps,u=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";u||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==c)&&hd(t,s,r,c),Ut=!1;var h=t.memoizedState;s.state=h,ls(t,r,s,o),l=t.memoizedState,a!==r||h!==l||Re.current||Ut?(typeof d=="function"&&(xl(t,n,d,r),l=t.memoizedState),(a=Ut||pd(t,n,a,r,h,l,c))?(u||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=c,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,th(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:it(t.type,a),s.props=c,u=t.pendingProps,h=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Xe(l):(l=Me(n)?En:Se.current,l=pr(t,l));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==u||h!==l)&&hd(t,s,r,l),Ut=!1,h=t.memoizedState,s.state=h,ls(t,r,s,o);var b=t.memoizedState;a!==u||h!==b||Re.current||Ut?(typeof v=="function"&&(xl(t,n,v,r),b=t.memoizedState),(c=Ut||pd(t,n,c,r,h,b,l)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,b,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,b,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=b),s.props=r,s.state=b,s.context=l,r=c):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return El(e,t,n,r,i,o)}function El(e,t,n,r,o,i){Nh(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return o&&ld(t,n,!1),Rt(e,t,i);r=t.stateNode,hy.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=mr(t,e.child,null,i),t.child=mr(t,null,a,i)):Ce(e,t,a,i),t.memoizedState=r.state,o&&ld(t,n,!0),t.child}function Rh(e){var t=e.stateNode;t.pendingContext?ad(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ad(e,t.context,!1),Lc(e,t.containerInfo)}function Cd(e,t,n,r,o){return hr(),Rc(o),t.flags|=256,Ce(e,t,n,r),t.child}var Tl={dehydrated:null,treeContext:null,retryLane:0};function Pl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Mh(e,t,n){var r=t.pendingProps,o=oe.current,i=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Z(oe,o&1),e===null)return wl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,i?(r=t.mode,i=t.child,s={mode:"hidden",children:s},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=Os(s,r,0,null),e=Cn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Pl(n),t.memoizedState=Tl,e):Hc(t,s));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return my(e,t,s,r,a,o,n);if(i){i=r.fallback,s=t.mode,o=e.child,a=o.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=nn(o,l),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=nn(a,i):(i=Cn(i,s,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,s=e.child.memoizedState,s=s===null?Pl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~n,t.memoizedState=Tl,r}return i=e.child,e=i.sibling,r=nn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Hc(e,t){return t=Os({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function di(e,t,n,r){return r!==null&&Rc(r),mr(t,e.child,null,n),e=Hc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function my(e,t,n,r,o,i,s){if(n)return t.flags&256?(t.flags&=-257,r=ka(Error(A(422))),di(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Os({mode:"visible",children:r.children},o,0,null),i=Cn(i,o,s,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&mr(t,e.child,null,s),t.child.memoizedState=Pl(s),t.memoizedState=Tl,i);if(!(t.mode&1))return di(e,t,s,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(A(419)),r=ka(i,r,void 0),di(e,t,s,r)}if(a=(s&e.childLanes)!==0,Ne||a){if(r=ge,r!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|s)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Nt(e,o),ut(r,e,o,-1))}return Jc(),r=ka(Error(A(421))),di(e,t,s,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Ay.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Oe=Xt(o.nextSibling),Fe=t,re=!0,at=null,e!==null&&(Ke[Ye++]=Et,Ke[Ye++]=Tt,Ke[Ye++]=Tn,Et=e.id,Tt=e.overflow,Tn=t),t=Hc(t,r.children),t.flags|=4096,t)}function Ed(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),bl(e.return,t,n)}function Sa(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function $h(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Ce(e,t,r.children,n),r=oe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ed(e,n,t);else if(e.tag===19)Ed(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Z(oe,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&cs(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Sa(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&cs(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Sa(t,!0,n,null,i);break;case"together":Sa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ii(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Rt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),An|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(A(153));if(t.child!==null){for(e=t.child,n=nn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=nn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function gy(e,t,n){switch(t.tag){case 3:Rh(t),hr();break;case 5:sh(t);break;case 1:Me(t.type)&&rs(t);break;case 4:Lc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;Z(ss,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Z(oe,oe.current&1),t.flags|=128,null):n&t.child.childLanes?Mh(e,t,n):(Z(oe,oe.current&1),e=Rt(e,t,n),e!==null?e.sibling:null);Z(oe,oe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return $h(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Z(oe,oe.current),r)break;return null;case 22:case 23:return t.lanes=0,_h(e,t,n)}return Rt(e,t,n)}var zh,Al,Ih,jh;zh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Al=function(){};Ih=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,bn(wt.current);var i=null;switch(n){case"input":o=qa(e,o),r=qa(e,r),i=[];break;case"select":o=se({},o,{value:void 0}),r=se({},r,{value:void 0}),i=[];break;case"textarea":o=Za(e,o),r=Za(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ts)}tl(n,r);var s;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var a=o[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(fo.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var l=r[c];if(a=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(i||(i=[]),i.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(i=i||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(fo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&te("scroll",e),i||a===l||(i=[])):(i=i||[]).push(c,l))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};jh=function(e,t,n,r){n!==r&&(t.flags|=4)};function Br(e,t){if(!re)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function xe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function vy(e,t,n){var r=t.pendingProps;switch(Nc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xe(t),null;case 1:return Me(t.type)&&ns(),xe(t),null;case 3:return r=t.stateNode,gr(),ne(Re),ne(Se),Oc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ci(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,at!==null&&(jl(at),at=null))),Al(e,t),xe(t),null;case 5:Dc(t);var o=bn(Co.current);if(n=t.type,e!==null&&t.stateNode!=null)Ih(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(A(166));return xe(t),null}if(e=bn(wt.current),ci(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[gt]=t,r[ko]=i,e=(t.mode&1)!==0,n){case"dialog":te("cancel",r),te("close",r);break;case"iframe":case"object":case"embed":te("load",r);break;case"video":case"audio":for(o=0;o<Zr.length;o++)te(Zr[o],r);break;case"source":te("error",r);break;case"img":case"image":case"link":te("error",r),te("load",r);break;case"details":te("toggle",r);break;case"input":zu(r,i),te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},te("invalid",r);break;case"textarea":ju(r,i),te("invalid",r)}tl(n,i),o=null;for(var s in i)if(i.hasOwnProperty(s)){var a=i[s];s==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&li(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&li(r.textContent,a,e),o=["children",""+a]):fo.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&te("scroll",r)}switch(n){case"input":ei(r),Iu(r,i,!0);break;case"textarea":ei(r),Lu(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=ts)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=cp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[gt]=t,e[ko]=r,zh(e,t,!1,!1),t.stateNode=e;e:{switch(s=nl(n,r),n){case"dialog":te("cancel",e),te("close",e),o=r;break;case"iframe":case"object":case"embed":te("load",e),o=r;break;case"video":case"audio":for(o=0;o<Zr.length;o++)te(Zr[o],e);o=r;break;case"source":te("error",e),o=r;break;case"img":case"image":case"link":te("error",e),te("load",e),o=r;break;case"details":te("toggle",e),o=r;break;case"input":zu(e,r),o=qa(e,r),te("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=se({},r,{value:void 0}),te("invalid",e);break;case"textarea":ju(e,r),o=Za(e,r),te("invalid",e);break;default:o=r}tl(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var l=a[i];i==="style"?fp(e,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&up(e,l)):i==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&po(e,l):typeof l=="number"&&po(e,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(fo.hasOwnProperty(i)?l!=null&&i==="onScroll"&&te("scroll",e):l!=null&&mc(e,i,l,s))}switch(n){case"input":ei(e),Iu(e,r,!1);break;case"textarea":ei(e),Lu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+on(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?tr(e,!!r.multiple,i,!1):r.defaultValue!=null&&tr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=ts)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return xe(t),null;case 6:if(e&&t.stateNode!=null)jh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(A(166));if(n=bn(Co.current),bn(wt.current),ci(t)){if(r=t.stateNode,n=t.memoizedProps,r[gt]=t,(i=r.nodeValue!==n)&&(e=Fe,e!==null))switch(e.tag){case 3:li(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&li(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[gt]=t,t.stateNode=r}return xe(t),null;case 13:if(ne(oe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(re&&Oe!==null&&t.mode&1&&!(t.flags&128))Zp(),hr(),t.flags|=98560,i=!1;else if(i=ci(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(A(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(A(317));i[gt]=t}else hr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;xe(t),i=!1}else at!==null&&(jl(at),at=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||oe.current&1?pe===0&&(pe=3):Jc())),t.updateQueue!==null&&(t.flags|=4),xe(t),null);case 4:return gr(),Al(e,t),e===null&&bo(t.stateNode.containerInfo),xe(t),null;case 10:return zc(t.type._context),xe(t),null;case 17:return Me(t.type)&&ns(),xe(t),null;case 19:if(ne(oe),i=t.memoizedState,i===null)return xe(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)Br(i,!1);else{if(pe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=cs(e),s!==null){for(t.flags|=128,Br(i,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Z(oe,oe.current&1|2),t.child}e=e.sibling}i.tail!==null&&ce()>yr&&(t.flags|=128,r=!0,Br(i,!1),t.lanes=4194304)}else{if(!r)if(e=cs(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Br(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!re)return xe(t),null}else 2*ce()-i.renderingStartTime>yr&&n!==1073741824&&(t.flags|=128,r=!0,Br(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(n=i.last,n!==null?n.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ce(),t.sibling=null,n=oe.current,Z(oe,r?n&1|2:n&1),t):(xe(t),null);case 22:case 23:return qc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Le&1073741824&&(xe(t),t.subtreeFlags&6&&(t.flags|=8192)):xe(t),null;case 24:return null;case 25:return null}throw Error(A(156,t.tag))}function yy(e,t){switch(Nc(t),t.tag){case 1:return Me(t.type)&&ns(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return gr(),ne(Re),ne(Se),Oc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Dc(t),null;case 13:if(ne(oe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(A(340));hr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ne(oe),null;case 4:return gr(),null;case 10:return zc(t.type._context),null;case 22:case 23:return qc(),null;case 24:return null;default:return null}}var fi=!1,ke=!1,wy=typeof WeakSet=="function"?WeakSet:Set,R=null;function Xn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ae(e,t,r)}else n.current=null}function _l(e,t,n){try{n()}catch(r){ae(e,t,r)}}var Td=!1;function by(e,t){if(fl=Xi,e=Fp(),Ac(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,c=0,d=0,u=e,h=null;t:for(;;){for(var v;u!==n||o!==0&&u.nodeType!==3||(a=s+o),u!==i||r!==0&&u.nodeType!==3||(l=s+r),u.nodeType===3&&(s+=u.nodeValue.length),(v=u.firstChild)!==null;)h=u,u=v;for(;;){if(u===e)break t;if(h===n&&++c===o&&(a=s),h===i&&++d===r&&(l=s),(v=u.nextSibling)!==null)break;u=h,h=u.parentNode}u=v}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(pl={focusedElem:e,selectionRange:n},Xi=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var b=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var y=b.memoizedProps,x=b.memoizedState,m=t.stateNode,p=m.getSnapshotBeforeUpdate(t.elementType===t.type?y:it(t.type,y),x);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var w=t.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(k){ae(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return b=Td,Td=!1,b}function so(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&_l(t,n,i)}o=o.next}while(o!==r)}}function Ls(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Nl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Lh(e){var t=e.alternate;t!==null&&(e.alternate=null,Lh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[gt],delete t[ko],delete t[gl],delete t[ny],delete t[ry])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Dh(e){return e.tag===5||e.tag===3||e.tag===4}function Pd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Dh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Rl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ts));else if(r!==4&&(e=e.child,e!==null))for(Rl(e,t,n),e=e.sibling;e!==null;)Rl(e,t,n),e=e.sibling}function Ml(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ml(e,t,n),e=e.sibling;e!==null;)Ml(e,t,n),e=e.sibling}var ve=null,st=!1;function Lt(e,t,n){for(n=n.child;n!==null;)Oh(e,t,n),n=n.sibling}function Oh(e,t,n){if(yt&&typeof yt.onCommitFiberUnmount=="function")try{yt.onCommitFiberUnmount(_s,n)}catch{}switch(n.tag){case 5:ke||Xn(n,t);case 6:var r=ve,o=st;ve=null,Lt(e,t,n),ve=r,st=o,ve!==null&&(st?(e=ve,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ve.removeChild(n.stateNode));break;case 18:ve!==null&&(st?(e=ve,n=n.stateNode,e.nodeType===8?ga(e.parentNode,n):e.nodeType===1&&ga(e,n),vo(e)):ga(ve,n.stateNode));break;case 4:r=ve,o=st,ve=n.stateNode.containerInfo,st=!0,Lt(e,t,n),ve=r,st=o;break;case 0:case 11:case 14:case 15:if(!ke&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&_l(n,t,s),o=o.next}while(o!==r)}Lt(e,t,n);break;case 1:if(!ke&&(Xn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ae(n,t,a)}Lt(e,t,n);break;case 21:Lt(e,t,n);break;case 22:n.mode&1?(ke=(r=ke)||n.memoizedState!==null,Lt(e,t,n),ke=r):Lt(e,t,n);break;default:Lt(e,t,n)}}function Ad(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new wy),t.forEach(function(r){var o=_y.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function ot(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:ve=a.stateNode,st=!1;break e;case 3:ve=a.stateNode.containerInfo,st=!0;break e;case 4:ve=a.stateNode.containerInfo,st=!0;break e}a=a.return}if(ve===null)throw Error(A(160));Oh(i,s,o),ve=null,st=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(c){ae(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Fh(t,e),t=t.sibling}function Fh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ot(t,e),pt(e),r&4){try{so(3,e,e.return),Ls(3,e)}catch(y){ae(e,e.return,y)}try{so(5,e,e.return)}catch(y){ae(e,e.return,y)}}break;case 1:ot(t,e),pt(e),r&512&&n!==null&&Xn(n,n.return);break;case 5:if(ot(t,e),pt(e),r&512&&n!==null&&Xn(n,n.return),e.flags&32){var o=e.stateNode;try{po(o,"")}catch(y){ae(e,e.return,y)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,s=n!==null?n.memoizedProps:i,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&ap(o,i),nl(a,s);var c=nl(a,i);for(s=0;s<l.length;s+=2){var d=l[s],u=l[s+1];d==="style"?fp(o,u):d==="dangerouslySetInnerHTML"?up(o,u):d==="children"?po(o,u):mc(o,d,u,c)}switch(a){case"input":Ja(o,i);break;case"textarea":lp(o,i);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?tr(o,!!i.multiple,v,!1):h!==!!i.multiple&&(i.defaultValue!=null?tr(o,!!i.multiple,i.defaultValue,!0):tr(o,!!i.multiple,i.multiple?[]:"",!1))}o[ko]=i}catch(y){ae(e,e.return,y)}}break;case 6:if(ot(t,e),pt(e),r&4){if(e.stateNode===null)throw Error(A(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(y){ae(e,e.return,y)}}break;case 3:if(ot(t,e),pt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{vo(t.containerInfo)}catch(y){ae(e,e.return,y)}break;case 4:ot(t,e),pt(e);break;case 13:ot(t,e),pt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Kc=ce())),r&4&&Ad(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(ke=(c=ke)||d,ot(t,e),ke=c):ot(t,e),pt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(R=e,d=e.child;d!==null;){for(u=R=d;R!==null;){switch(h=R,v=h.child,h.tag){case 0:case 11:case 14:case 15:so(4,h,h.return);break;case 1:Xn(h,h.return);var b=h.stateNode;if(typeof b.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(y){ae(r,n,y)}}break;case 5:Xn(h,h.return);break;case 22:if(h.memoizedState!==null){Nd(u);continue}}v!==null?(v.return=h,R=v):Nd(u)}d=d.sibling}e:for(d=null,u=e;;){if(u.tag===5){if(d===null){d=u;try{o=u.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=u.stateNode,l=u.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=dp("display",s))}catch(y){ae(e,e.return,y)}}}else if(u.tag===6){if(d===null)try{u.stateNode.nodeValue=c?"":u.memoizedProps}catch(y){ae(e,e.return,y)}}else if((u.tag!==22&&u.tag!==23||u.memoizedState===null||u===e)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===e)break e;for(;u.sibling===null;){if(u.return===null||u.return===e)break e;d===u&&(d=null),u=u.return}d===u&&(d=null),u.sibling.return=u.return,u=u.sibling}}break;case 19:ot(t,e),pt(e),r&4&&Ad(e);break;case 21:break;default:ot(t,e),pt(e)}}function pt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Dh(n)){var r=n;break e}n=n.return}throw Error(A(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(po(o,""),r.flags&=-33);var i=Pd(e);Ml(e,i,o);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Pd(e);Rl(e,a,s);break;default:throw Error(A(161))}}catch(l){ae(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xy(e,t,n){R=e,Bh(e)}function Bh(e,t,n){for(var r=(e.mode&1)!==0;R!==null;){var o=R,i=o.child;if(o.tag===22&&r){var s=o.memoizedState!==null||fi;if(!s){var a=o.alternate,l=a!==null&&a.memoizedState!==null||ke;a=fi;var c=ke;if(fi=s,(ke=l)&&!c)for(R=o;R!==null;)s=R,l=s.child,s.tag===22&&s.memoizedState!==null?Rd(o):l!==null?(l.return=s,R=l):Rd(o);for(;i!==null;)R=i,Bh(i),i=i.sibling;R=o,fi=a,ke=c}_d(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,R=i):_d(e)}}function _d(e){for(;R!==null;){var t=R;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ke||Ls(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ke)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:it(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&fd(t,i,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}fd(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var u=d.dehydrated;u!==null&&vo(u)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}ke||t.flags&512&&Nl(t)}catch(h){ae(t,t.return,h)}}if(t===e){R=null;break}if(n=t.sibling,n!==null){n.return=t.return,R=n;break}R=t.return}}function Nd(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var n=t.sibling;if(n!==null){n.return=t.return,R=n;break}R=t.return}}function Rd(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ls(4,t)}catch(l){ae(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(l){ae(t,o,l)}}var i=t.return;try{Nl(t)}catch(l){ae(t,i,l)}break;case 5:var s=t.return;try{Nl(t)}catch(l){ae(t,s,l)}}}catch(l){ae(t,t.return,l)}if(t===e){R=null;break}var a=t.sibling;if(a!==null){a.return=t.return,R=a;break}R=t.return}}var ky=Math.ceil,fs=It.ReactCurrentDispatcher,Gc=It.ReactCurrentOwner,Je=It.ReactCurrentBatchConfig,K=0,ge=null,ue=null,ye=0,Le=0,Zn=fn(0),pe=0,Ao=null,An=0,Ds=0,Qc=0,ao=null,_e=null,Kc=0,yr=1/0,St=null,ps=!1,$l=null,en=null,pi=!1,Qt=null,hs=0,lo=0,zl=null,ji=-1,Li=0;function Ee(){return K&6?ce():ji!==-1?ji:ji=ce()}function tn(e){return e.mode&1?K&2&&ye!==0?ye&-ye:iy.transition!==null?(Li===0&&(Li=Cp()),Li):(e=q,e!==0||(e=window.event,e=e===void 0?16:Rp(e.type)),e):1}function ut(e,t,n,r){if(50<lo)throw lo=0,zl=null,Error(A(185));Do(e,n,r),(!(K&2)||e!==ge)&&(e===ge&&(!(K&2)&&(Ds|=n),pe===4&&Ht(e,ye)),$e(e,r),n===1&&K===0&&!(t.mode&1)&&(yr=ce()+500,zs&&pn()))}function $e(e,t){var n=e.callbackNode;i0(e,t);var r=Ji(e,e===ge?ye:0);if(r===0)n!==null&&Fu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Fu(n),t===1)e.tag===0?oy(Md.bind(null,e)):qp(Md.bind(null,e)),ey(function(){!(K&6)&&pn()}),n=null;else{switch(Ep(r)){case 1:n=bc;break;case 4:n=kp;break;case 16:n=qi;break;case 536870912:n=Sp;break;default:n=qi}n=Yh(n,Wh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Wh(e,t){if(ji=-1,Li=0,K&6)throw Error(A(327));var n=e.callbackNode;if(sr()&&e.callbackNode!==n)return null;var r=Ji(e,e===ge?ye:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ms(e,r);else{t=r;var o=K;K|=2;var i=Vh();(ge!==e||ye!==t)&&(St=null,yr=ce()+500,Sn(e,t));do try{Ey();break}catch(a){Uh(e,a)}while(!0);$c(),fs.current=i,K=o,ue!==null?t=0:(ge=null,ye=0,t=pe)}if(t!==0){if(t===2&&(o=al(e),o!==0&&(r=o,t=Il(e,o))),t===1)throw n=Ao,Sn(e,0),Ht(e,r),$e(e,ce()),n;if(t===6)Ht(e,r);else{if(o=e.current.alternate,!(r&30)&&!Sy(o)&&(t=ms(e,r),t===2&&(i=al(e),i!==0&&(r=i,t=Il(e,i))),t===1))throw n=Ao,Sn(e,0),Ht(e,r),$e(e,ce()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(A(345));case 2:vn(e,_e,St);break;case 3:if(Ht(e,r),(r&130023424)===r&&(t=Kc+500-ce(),10<t)){if(Ji(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ee(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ml(vn.bind(null,e,_e,St),t);break}vn(e,_e,St);break;case 4:if(Ht(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var s=31-ct(r);i=1<<s,s=t[s],s>o&&(o=s),r&=~i}if(r=o,r=ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ky(r/1960))-r,10<r){e.timeoutHandle=ml(vn.bind(null,e,_e,St),r);break}vn(e,_e,St);break;case 5:vn(e,_e,St);break;default:throw Error(A(329))}}}return $e(e,ce()),e.callbackNode===n?Wh.bind(null,e):null}function Il(e,t){var n=ao;return e.current.memoizedState.isDehydrated&&(Sn(e,t).flags|=256),e=ms(e,t),e!==2&&(t=_e,_e=n,t!==null&&jl(t)),e}function jl(e){_e===null?_e=e:_e.push.apply(_e,e)}function Sy(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!ft(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ht(e,t){for(t&=~Qc,t&=~Ds,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ct(t),r=1<<n;e[n]=-1,t&=~r}}function Md(e){if(K&6)throw Error(A(327));sr();var t=Ji(e,0);if(!(t&1))return $e(e,ce()),null;var n=ms(e,t);if(e.tag!==0&&n===2){var r=al(e);r!==0&&(t=r,n=Il(e,r))}if(n===1)throw n=Ao,Sn(e,0),Ht(e,t),$e(e,ce()),n;if(n===6)throw Error(A(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,vn(e,_e,St),$e(e,ce()),null}function Yc(e,t){var n=K;K|=1;try{return e(t)}finally{K=n,K===0&&(yr=ce()+500,zs&&pn())}}function _n(e){Qt!==null&&Qt.tag===0&&!(K&6)&&sr();var t=K;K|=1;var n=Je.transition,r=q;try{if(Je.transition=null,q=1,e)return e()}finally{q=r,Je.transition=n,K=t,!(K&6)&&pn()}}function qc(){Le=Zn.current,ne(Zn)}function Sn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Z0(n)),ue!==null)for(n=ue.return;n!==null;){var r=n;switch(Nc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ns();break;case 3:gr(),ne(Re),ne(Se),Oc();break;case 5:Dc(r);break;case 4:gr();break;case 13:ne(oe);break;case 19:ne(oe);break;case 10:zc(r.type._context);break;case 22:case 23:qc()}n=n.return}if(ge=e,ue=e=nn(e.current,null),ye=Le=t,pe=0,Ao=null,Qc=Ds=An=0,_e=ao=null,wn!==null){for(t=0;t<wn.length;t++)if(n=wn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var s=i.next;i.next=o,r.next=s}n.pending=r}wn=null}return e}function Uh(e,t){do{var n=ue;try{if($c(),$i.current=ds,us){for(var r=ie.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}us=!1}if(Pn=0,me=fe=ie=null,io=!1,Eo=0,Gc.current=null,n===null||n.return===null){pe=1,Ao=t,ue=null;break}e:{var i=e,s=n.return,a=n,l=t;if(t=ye,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,u=d.tag;if(!(d.mode&1)&&(u===0||u===11||u===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=wd(s);if(v!==null){v.flags&=-257,bd(v,s,a,i,t),v.mode&1&&yd(i,c,t),t=v,l=c;var b=t.updateQueue;if(b===null){var y=new Set;y.add(l),t.updateQueue=y}else b.add(l);break e}else{if(!(t&1)){yd(i,c,t),Jc();break e}l=Error(A(426))}}else if(re&&a.mode&1){var x=wd(s);if(x!==null){!(x.flags&65536)&&(x.flags|=256),bd(x,s,a,i,t),Rc(vr(l,a));break e}}i=l=vr(l,a),pe!==4&&(pe=2),ao===null?ao=[i]:ao.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var m=Th(i,l,t);dd(i,m);break e;case 1:a=l;var p=i.type,w=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(en===null||!en.has(w)))){i.flags|=65536,t&=-t,i.lanes|=t;var k=Ph(i,a,t);dd(i,k);break e}}i=i.return}while(i!==null)}Gh(n)}catch(S){t=S,ue===n&&n!==null&&(ue=n=n.return);continue}break}while(!0)}function Vh(){var e=fs.current;return fs.current=ds,e===null?ds:e}function Jc(){(pe===0||pe===3||pe===2)&&(pe=4),ge===null||!(An&268435455)&&!(Ds&268435455)||Ht(ge,ye)}function ms(e,t){var n=K;K|=2;var r=Vh();(ge!==e||ye!==t)&&(St=null,Sn(e,t));do try{Cy();break}catch(o){Uh(e,o)}while(!0);if($c(),K=n,fs.current=r,ue!==null)throw Error(A(261));return ge=null,ye=0,pe}function Cy(){for(;ue!==null;)Hh(ue)}function Ey(){for(;ue!==null&&!qv();)Hh(ue)}function Hh(e){var t=Kh(e.alternate,e,Le);e.memoizedProps=e.pendingProps,t===null?Gh(e):ue=t,Gc.current=null}function Gh(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=yy(n,t),n!==null){n.flags&=32767,ue=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{pe=6,ue=null;return}}else if(n=vy(n,t,Le),n!==null){ue=n;return}if(t=t.sibling,t!==null){ue=t;return}ue=t=e}while(t!==null);pe===0&&(pe=5)}function vn(e,t,n){var r=q,o=Je.transition;try{Je.transition=null,q=1,Ty(e,t,n,r)}finally{Je.transition=o,q=r}return null}function Ty(e,t,n,r){do sr();while(Qt!==null);if(K&6)throw Error(A(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(A(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(s0(e,i),e===ge&&(ue=ge=null,ye=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||pi||(pi=!0,Yh(qi,function(){return sr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Je.transition,Je.transition=null;var s=q;q=1;var a=K;K|=4,Gc.current=null,by(e,n),Fh(n,e),G0(pl),Xi=!!fl,pl=fl=null,e.current=n,xy(n),Jv(),K=a,q=s,Je.transition=i}else e.current=n;if(pi&&(pi=!1,Qt=e,hs=o),i=e.pendingLanes,i===0&&(en=null),e0(n.stateNode),$e(e,ce()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(ps)throw ps=!1,e=$l,$l=null,e;return hs&1&&e.tag!==0&&sr(),i=e.pendingLanes,i&1?e===zl?lo++:(lo=0,zl=e):lo=0,pn(),null}function sr(){if(Qt!==null){var e=Ep(hs),t=Je.transition,n=q;try{if(Je.transition=null,q=16>e?16:e,Qt===null)var r=!1;else{if(e=Qt,Qt=null,hs=0,K&6)throw Error(A(331));var o=K;for(K|=4,R=e.current;R!==null;){var i=R,s=i.child;if(R.flags&16){var a=i.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(R=c;R!==null;){var d=R;switch(d.tag){case 0:case 11:case 15:so(8,d,i)}var u=d.child;if(u!==null)u.return=d,R=u;else for(;R!==null;){d=R;var h=d.sibling,v=d.return;if(Lh(d),d===c){R=null;break}if(h!==null){h.return=v,R=h;break}R=v}}}var b=i.alternate;if(b!==null){var y=b.child;if(y!==null){b.child=null;do{var x=y.sibling;y.sibling=null,y=x}while(y!==null)}}R=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,R=s;else e:for(;R!==null;){if(i=R,i.flags&2048)switch(i.tag){case 0:case 11:case 15:so(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,R=m;break e}R=i.return}}var p=e.current;for(R=p;R!==null;){s=R;var w=s.child;if(s.subtreeFlags&2064&&w!==null)w.return=s,R=w;else e:for(s=p;R!==null;){if(a=R,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ls(9,a)}}catch(S){ae(a,a.return,S)}if(a===s){R=null;break e}var k=a.sibling;if(k!==null){k.return=a.return,R=k;break e}R=a.return}}if(K=o,pn(),yt&&typeof yt.onPostCommitFiberRoot=="function")try{yt.onPostCommitFiberRoot(_s,e)}catch{}r=!0}return r}finally{q=n,Je.transition=t}}return!1}function $d(e,t,n){t=vr(n,t),t=Th(e,t,1),e=Zt(e,t,1),t=Ee(),e!==null&&(Do(e,1,t),$e(e,t))}function ae(e,t,n){if(e.tag===3)$d(e,e,n);else for(;t!==null;){if(t.tag===3){$d(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(en===null||!en.has(r))){e=vr(n,e),e=Ph(t,e,1),t=Zt(t,e,1),e=Ee(),t!==null&&(Do(t,1,e),$e(t,e));break}}t=t.return}}function Py(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ee(),e.pingedLanes|=e.suspendedLanes&n,ge===e&&(ye&n)===n&&(pe===4||pe===3&&(ye&130023424)===ye&&500>ce()-Kc?Sn(e,0):Qc|=n),$e(e,t)}function Qh(e,t){t===0&&(e.mode&1?(t=ri,ri<<=1,!(ri&130023424)&&(ri=4194304)):t=1);var n=Ee();e=Nt(e,t),e!==null&&(Do(e,t,n),$e(e,n))}function Ay(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Qh(e,n)}function _y(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(A(314))}r!==null&&r.delete(t),Qh(e,n)}var Kh;Kh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Re.current)Ne=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ne=!1,gy(e,t,n);Ne=!!(e.flags&131072)}else Ne=!1,re&&t.flags&1048576&&Jp(t,is,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ii(e,t),e=t.pendingProps;var o=pr(t,Se.current);ir(t,n),o=Bc(null,t,r,e,o,n);var i=Wc();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Me(r)?(i=!0,rs(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,jc(t),o.updater=Is,t.stateNode=o,o._reactInternals=t,kl(t,r,e,n),t=El(null,t,r,!0,i,n)):(t.tag=0,re&&i&&_c(t),Ce(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ii(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Ry(r),e=it(r,e),o){case 0:t=Cl(null,t,r,e,n);break e;case 1:t=Sd(null,t,r,e,n);break e;case 11:t=xd(null,t,r,e,n);break e;case 14:t=kd(null,t,r,it(r.type,e),n);break e}throw Error(A(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:it(r,o),Cl(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:it(r,o),Sd(e,t,r,o,n);case 3:e:{if(Rh(t),e===null)throw Error(A(387));r=t.pendingProps,i=t.memoizedState,o=i.element,th(e,t),ls(t,r,null,n);var s=t.memoizedState;if(r=s.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=vr(Error(A(423)),t),t=Cd(e,t,r,n,o);break e}else if(r!==o){o=vr(Error(A(424)),t),t=Cd(e,t,r,n,o);break e}else for(Oe=Xt(t.stateNode.containerInfo.firstChild),Fe=t,re=!0,at=null,n=ih(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(hr(),r===o){t=Rt(e,t,n);break e}Ce(e,t,r,n)}t=t.child}return t;case 5:return sh(t),e===null&&wl(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,s=o.children,hl(r,o)?s=null:i!==null&&hl(r,i)&&(t.flags|=32),Nh(e,t),Ce(e,t,s,n),t.child;case 6:return e===null&&wl(t),null;case 13:return Mh(e,t,n);case 4:return Lc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=mr(t,null,r,n):Ce(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:it(r,o),xd(e,t,r,o,n);case 7:return Ce(e,t,t.pendingProps,n),t.child;case 8:return Ce(e,t,t.pendingProps.children,n),t.child;case 12:return Ce(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,s=o.value,Z(ss,r._currentValue),r._currentValue=s,i!==null)if(ft(i.value,s)){if(i.children===o.children&&!Re.current){t=Rt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){s=i.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(i.tag===1){l=Pt(-1,n&-n),l.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),bl(i.return,n,t),a.lanes|=n;break}l=l.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(A(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),bl(s,n,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}Ce(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,ir(t,n),o=Xe(o),r=r(o),t.flags|=1,Ce(e,t,r,n),t.child;case 14:return r=t.type,o=it(r,t.pendingProps),o=it(r.type,o),kd(e,t,r,o,n);case 15:return Ah(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:it(r,o),Ii(e,t),t.tag=1,Me(r)?(e=!0,rs(t)):e=!1,ir(t,n),rh(t,r,o),kl(t,r,o,n),El(null,t,r,!0,e,n);case 19:return $h(e,t,n);case 22:return _h(e,t,n)}throw Error(A(156,t.tag))};function Yh(e,t){return xp(e,t)}function Ny(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qe(e,t,n,r){return new Ny(e,t,n,r)}function Xc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ry(e){if(typeof e=="function")return Xc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===vc)return 11;if(e===yc)return 14}return 2}function nn(e,t){var n=e.alternate;return n===null?(n=qe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Di(e,t,n,r,o,i){var s=2;if(r=e,typeof e=="function")Xc(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Un:return Cn(n.children,o,i,t);case gc:s=8,o|=8;break;case Ga:return e=qe(12,n,t,o|2),e.elementType=Ga,e.lanes=i,e;case Qa:return e=qe(13,n,t,o),e.elementType=Qa,e.lanes=i,e;case Ka:return e=qe(19,n,t,o),e.elementType=Ka,e.lanes=i,e;case op:return Os(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case np:s=10;break e;case rp:s=9;break e;case vc:s=11;break e;case yc:s=14;break e;case Wt:s=16,r=null;break e}throw Error(A(130,e==null?e:typeof e,""))}return t=qe(s,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Cn(e,t,n,r){return e=qe(7,e,r,t),e.lanes=n,e}function Os(e,t,n,r){return e=qe(22,e,r,t),e.elementType=op,e.lanes=n,e.stateNode={isHidden:!1},e}function Ca(e,t,n){return e=qe(6,e,null,t),e.lanes=n,e}function Ea(e,t,n){return t=qe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function My(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ia(0),this.expirationTimes=ia(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ia(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Zc(e,t,n,r,o,i,s,a,l){return e=new My(e,t,n,a,l),t===1?(t=1,i===!0&&(t|=8)):t=0,i=qe(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},jc(i),e}function $y(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function qh(e){if(!e)return sn;e=e._reactInternals;e:{if($n(e)!==e||e.tag!==1)throw Error(A(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Me(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(A(171))}if(e.tag===1){var n=e.type;if(Me(n))return Yp(e,n,t)}return t}function Jh(e,t,n,r,o,i,s,a,l){return e=Zc(n,r,!0,e,o,i,s,a,l),e.context=qh(null),n=e.current,r=Ee(),o=tn(n),i=Pt(r,o),i.callback=t??null,Zt(n,i,o),e.current.lanes=o,Do(e,o,r),$e(e,r),e}function Fs(e,t,n,r){var o=t.current,i=Ee(),s=tn(o);return n=qh(n),t.context===null?t.context=n:t.pendingContext=n,t=Pt(i,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Zt(o,t,s),e!==null&&(ut(e,o,s,i),Mi(e,o,s)),s}function gs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function zd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function eu(e,t){zd(e,t),(e=e.alternate)&&zd(e,t)}function zy(){return null}var Xh=typeof reportError=="function"?reportError:function(e){console.error(e)};function tu(e){this._internalRoot=e}Bs.prototype.render=tu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(A(409));Fs(e,t,null,null)};Bs.prototype.unmount=tu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;_n(function(){Fs(null,e,null,null)}),t[_t]=null}};function Bs(e){this._internalRoot=e}Bs.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ap();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Vt.length&&t!==0&&t<Vt[n].priority;n++);Vt.splice(n,0,e),n===0&&Np(e)}};function nu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ws(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Id(){}function Iy(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=gs(s);i.call(c)}}var s=Jh(t,r,e,0,null,!1,!1,"",Id);return e._reactRootContainer=s,e[_t]=s.current,bo(e.nodeType===8?e.parentNode:e),_n(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var c=gs(l);a.call(c)}}var l=Zc(e,0,!1,null,null,!1,!1,"",Id);return e._reactRootContainer=l,e[_t]=l.current,bo(e.nodeType===8?e.parentNode:e),_n(function(){Fs(t,l,n,r)}),l}function Us(e,t,n,r,o){var i=n._reactRootContainer;if(i){var s=i;if(typeof o=="function"){var a=o;o=function(){var l=gs(s);a.call(l)}}Fs(t,s,e,o)}else s=Iy(n,t,e,o,r);return gs(s)}Tp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Xr(t.pendingLanes);n!==0&&(xc(t,n|1),$e(t,ce()),!(K&6)&&(yr=ce()+500,pn()))}break;case 13:_n(function(){var r=Nt(e,1);if(r!==null){var o=Ee();ut(r,e,1,o)}}),eu(e,1)}};kc=function(e){if(e.tag===13){var t=Nt(e,134217728);if(t!==null){var n=Ee();ut(t,e,134217728,n)}eu(e,134217728)}};Pp=function(e){if(e.tag===13){var t=tn(e),n=Nt(e,t);if(n!==null){var r=Ee();ut(n,e,t,r)}eu(e,t)}};Ap=function(){return q};_p=function(e,t){var n=q;try{return q=e,t()}finally{q=n}};ol=function(e,t,n){switch(t){case"input":if(Ja(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=$s(r);if(!o)throw Error(A(90));sp(r),Ja(r,o)}}}break;case"textarea":lp(e,n);break;case"select":t=n.value,t!=null&&tr(e,!!n.multiple,t,!1)}};mp=Yc;gp=_n;var jy={usingClientEntryPoint:!1,Events:[Fo,Qn,$s,pp,hp,Yc]},Wr={findFiberByHostInstance:yn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Ly={bundleType:Wr.bundleType,version:Wr.version,rendererPackageName:Wr.rendererPackageName,rendererConfig:Wr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:It.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=wp(e),e===null?null:e.stateNode},findFiberByHostInstance:Wr.findFiberByHostInstance||zy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hi.isDisabled&&hi.supportsFiber)try{_s=hi.inject(Ly),yt=hi}catch{}}Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jy;Ve.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nu(t))throw Error(A(200));return $y(e,t,null,n)};Ve.createRoot=function(e,t){if(!nu(e))throw Error(A(299));var n=!1,r="",o=Xh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Zc(e,1,!1,null,null,n,!1,r,o),e[_t]=t.current,bo(e.nodeType===8?e.parentNode:e),new tu(t)};Ve.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(A(188)):(e=Object.keys(e).join(","),Error(A(268,e)));return e=wp(t),e=e===null?null:e.stateNode,e};Ve.flushSync=function(e){return _n(e)};Ve.hydrate=function(e,t,n){if(!Ws(t))throw Error(A(200));return Us(null,e,t,!0,n)};Ve.hydrateRoot=function(e,t,n){if(!nu(e))throw Error(A(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",s=Xh;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Jh(t,null,e,1,n??null,o,!1,i,s),e[_t]=t.current,bo(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Bs(t)};Ve.render=function(e,t,n){if(!Ws(t))throw Error(A(200));return Us(null,e,t,!1,n)};Ve.unmountComponentAtNode=function(e){if(!Ws(e))throw Error(A(40));return e._reactRootContainer?(_n(function(){Us(null,null,e,!1,function(){e._reactRootContainer=null,e[_t]=null})}),!0):!1};Ve.unstable_batchedUpdates=Yc;Ve.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ws(n))throw Error(A(200));if(e==null||e._reactInternals===void 0)throw Error(A(38));return Us(e,t,n,!1,r)};Ve.version="18.2.0-next-9e3b772b8-20220608";function Zh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zh)}catch(e){console.error(e)}}Zh(),Jf.exports=Ve;var Wo=Jf.exports;const Dy=Cr(Wo);/**
 * @remix-run/router v1.15.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _o(){return _o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_o.apply(this,arguments)}var Kt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Kt||(Kt={}));const jd="popstate";function Oy(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:s,hash:a}=r.location;return Ll("",{pathname:i,search:s,hash:a},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:vs(o)}return By(t,n,null,e)}function he(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function em(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Fy(){return Math.random().toString(36).substr(2,8)}function Ld(e,t){return{usr:e.state,key:e.key,idx:t}}function Ll(e,t,n,r){return n===void 0&&(n=null),_o({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Ar(t):t,{state:n,key:t&&t.key||r||Fy()})}function vs(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Ar(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function By(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,s=o.history,a=Kt.Pop,l=null,c=d();c==null&&(c=0,s.replaceState(_o({},s.state,{idx:c}),""));function d(){return(s.state||{idx:null}).idx}function u(){a=Kt.Pop;let x=d(),m=x==null?null:x-c;c=x,l&&l({action:a,location:y.location,delta:m})}function h(x,m){a=Kt.Push;let p=Ll(y.location,x,m);n&&n(p,x),c=d()+1;let w=Ld(p,c),k=y.createHref(p);try{s.pushState(w,"",k)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;o.location.assign(k)}i&&l&&l({action:a,location:y.location,delta:1})}function v(x,m){a=Kt.Replace;let p=Ll(y.location,x,m);n&&n(p,x),c=d();let w=Ld(p,c),k=y.createHref(p);s.replaceState(w,"",k),i&&l&&l({action:a,location:y.location,delta:0})}function b(x){let m=o.location.origin!=="null"?o.location.origin:o.location.href,p=typeof x=="string"?x:vs(x);return p=p.replace(/ $/,"%20"),he(m,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,m)}let y={get action(){return a},get location(){return e(o,s)},listen(x){if(l)throw new Error("A history only accepts one active listener");return o.addEventListener(jd,u),l=x,()=>{o.removeEventListener(jd,u),l=null}},createHref(x){return t(o,x)},createURL:b,encodeLocation(x){let m=b(x);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:h,replace:v,go(x){return s.go(x)}};return y}var Dd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Dd||(Dd={}));function Wy(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Ar(t):t,o=wr(r.pathname||"/",n);if(o==null)return null;let i=tm(e);Uy(i);let s=null;for(let a=0;s==null&&a<i.length;++a){let l=ew(o);s=Xy(i[a],l)}return s}function tm(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,s,a)=>{let l={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};l.relativePath.startsWith("/")&&(he(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=rn([r,l.relativePath]),d=n.concat(l);i.children&&i.children.length>0&&(he(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),tm(i.children,t,d,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:qy(c,i.index),routesMeta:d})};return e.forEach((i,s)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))o(i,s);else for(let l of nm(i.path))o(i,s,l)}),t}function nm(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let s=nm(r.join("/")),a=[];return a.push(...s.map(l=>l===""?i:[i,l].join("/"))),o&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function Uy(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Jy(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Vy=/^:[\w-]+$/,Hy=3,Gy=2,Qy=1,Ky=10,Yy=-2,Od=e=>e==="*";function qy(e,t){let n=e.split("/"),r=n.length;return n.some(Od)&&(r+=Yy),t&&(r+=Gy),n.filter(o=>!Od(o)).reduce((o,i)=>o+(Vy.test(i)?Hy:i===""?Qy:Ky),r)}function Jy(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function Xy(e,t){let{routesMeta:n}=e,r={},o="/",i=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,c=o==="/"?t:t.slice(o.length)||"/",d=Dl({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},c);if(!d)return null;Object.assign(r,d.params);let u=a.route;i.push({params:r,pathname:rn([o,d.pathname]),pathnameBase:ow(rn([o,d.pathnameBase])),route:u}),d.pathnameBase!=="/"&&(o=rn([o,d.pathnameBase]))}return i}function Dl(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Zy(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],s=i.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((c,d,u)=>{let{paramName:h,isOptional:v}=d;if(h==="*"){let y=a[u]||"";s=i.slice(0,i.length-y.length).replace(/(.)\/+$/,"$1")}const b=a[u];return v&&!b?c[h]=void 0:c[h]=(b||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:s,pattern:e}}function Zy(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),em(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function ew(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return em(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function wr(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function tw(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Ar(e):e;return{pathname:n?n.startsWith("/")?n:nw(n,t):t,search:iw(r),hash:sw(o)}}function nw(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Ta(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function rw(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function rm(e,t){let n=rw(e);return t?n.map((r,o)=>o===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function om(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=Ar(e):(o=_o({},e),he(!o.pathname||!o.pathname.includes("?"),Ta("?","pathname","search",o)),he(!o.pathname||!o.pathname.includes("#"),Ta("#","pathname","hash",o)),he(!o.search||!o.search.includes("#"),Ta("#","search","hash",o)));let i=e===""||o.pathname==="",s=i?"/":o.pathname,a;if(s==null)a=n;else{let u=t.length-1;if(!r&&s.startsWith("..")){let h=s.split("/");for(;h[0]==="..";)h.shift(),u-=1;o.pathname=h.join("/")}a=u>=0?t[u]:"/"}let l=tw(o,a),c=s&&s!=="/"&&s.endsWith("/"),d=(i||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||d)&&(l.pathname+="/"),l}const rn=e=>e.join("/").replace(/\/\/+/g,"/"),ow=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),iw=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,sw=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function aw(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const im=["post","put","patch","delete"];new Set(im);const lw=["get",...im];new Set(lw);/**
 * React Router v6.22.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function No(){return No=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},No.apply(this,arguments)}const Vs=f.createContext(null),sm=f.createContext(null),hn=f.createContext(null),Hs=f.createContext(null),mn=f.createContext({outlet:null,matches:[],isDataRoute:!1}),am=f.createContext(null);function cw(e,t){let{relative:n}=t===void 0?{}:t;Uo()||he(!1);let{basename:r,navigator:o}=f.useContext(hn),{hash:i,pathname:s,search:a}=Gs(e,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:rn([r,s])),o.createHref({pathname:l,search:a,hash:i})}function Uo(){return f.useContext(Hs)!=null}function _r(){return Uo()||he(!1),f.useContext(Hs).location}function lm(e){f.useContext(hn).static||f.useLayoutEffect(e)}function uw(){let{isDataRoute:e}=f.useContext(mn);return e?Sw():dw()}function dw(){Uo()||he(!1);let e=f.useContext(Vs),{basename:t,future:n,navigator:r}=f.useContext(hn),{matches:o}=f.useContext(mn),{pathname:i}=_r(),s=JSON.stringify(rm(o,n.v7_relativeSplatPath)),a=f.useRef(!1);return lm(()=>{a.current=!0}),f.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let u=om(c,JSON.parse(s),i,d.relative==="path");e==null&&t!=="/"&&(u.pathname=u.pathname==="/"?t:rn([t,u.pathname])),(d.replace?r.replace:r.push)(u,d.state,d)},[t,r,s,i,e])}function dC(){let{matches:e}=f.useContext(mn),t=e[e.length-1];return t?t.params:{}}function Gs(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=f.useContext(hn),{matches:o}=f.useContext(mn),{pathname:i}=_r(),s=JSON.stringify(rm(o,r.v7_relativeSplatPath));return f.useMemo(()=>om(e,JSON.parse(s),i,n==="path"),[e,s,i,n])}function fw(e,t){return pw(e,t)}function pw(e,t,n,r){Uo()||he(!1);let{navigator:o}=f.useContext(hn),{matches:i}=f.useContext(mn),s=i[i.length-1],a=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let c=_r(),d;if(t){var u;let x=typeof t=="string"?Ar(t):t;l==="/"||(u=x.pathname)!=null&&u.startsWith(l)||he(!1),d=x}else d=c;let h=d.pathname||"/",v=h;if(l!=="/"){let x=l.replace(/^\//,"").split("/");v="/"+h.replace(/^\//,"").split("/").slice(x.length).join("/")}let b=Wy(e,{pathname:v}),y=yw(b&&b.map(x=>Object.assign({},x,{params:Object.assign({},a,x.params),pathname:rn([l,o.encodeLocation?o.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?l:rn([l,o.encodeLocation?o.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),i,n,r);return t&&y?f.createElement(Hs.Provider,{value:{location:No({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Kt.Pop}},y):y}function hw(){let e=kw(),t=aw(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return f.createElement(f.Fragment,null,f.createElement("h2",null,"Unexpected Application Error!"),f.createElement("h3",{style:{fontStyle:"italic"}},t),n?f.createElement("pre",{style:o},n):null,null)}const mw=f.createElement(hw,null);class gw extends f.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?f.createElement(mn.Provider,{value:this.props.routeContext},f.createElement(am.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function vw(e){let{routeContext:t,match:n,children:r}=e,o=f.useContext(Vs);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),f.createElement(mn.Provider,{value:t},r)}function yw(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let s=e,a=(o=n)==null?void 0:o.errors;if(a!=null){let d=s.findIndex(u=>u.route.id&&(a==null?void 0:a[u.route.id]));d>=0||he(!1),s=s.slice(0,Math.min(s.length,d+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<s.length;d++){let u=s[d];if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(c=d),u.route.id){let{loaderData:h,errors:v}=n,b=u.route.loader&&h[u.route.id]===void 0&&(!v||v[u.route.id]===void 0);if(u.route.lazy||b){l=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((d,u,h)=>{let v,b=!1,y=null,x=null;n&&(v=a&&u.route.id?a[u.route.id]:void 0,y=u.route.errorElement||mw,l&&(c<0&&h===0?(Cw("route-fallback",!1),b=!0,x=null):c===h&&(b=!0,x=u.route.hydrateFallbackElement||null)));let m=t.concat(s.slice(0,h+1)),p=()=>{let w;return v?w=y:b?w=x:u.route.Component?w=f.createElement(u.route.Component,null):u.route.element?w=u.route.element:w=d,f.createElement(vw,{match:u,routeContext:{outlet:d,matches:m,isDataRoute:n!=null},children:w})};return n&&(u.route.ErrorBoundary||u.route.errorElement||h===0)?f.createElement(gw,{location:n.location,revalidation:n.revalidation,component:y,error:v,children:p(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):p()},null)}var cm=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(cm||{}),ys=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ys||{});function ww(e){let t=f.useContext(Vs);return t||he(!1),t}function bw(e){let t=f.useContext(sm);return t||he(!1),t}function xw(e){let t=f.useContext(mn);return t||he(!1),t}function um(e){let t=xw(),n=t.matches[t.matches.length-1];return n.route.id||he(!1),n.route.id}function kw(){var e;let t=f.useContext(am),n=bw(ys.UseRouteError),r=um(ys.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Sw(){let{router:e}=ww(cm.UseNavigateStable),t=um(ys.UseNavigateStable),n=f.useRef(!1);return lm(()=>{n.current=!0}),f.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,No({fromRouteId:t},i)))},[e,t])}const Fd={};function Cw(e,t,n){!t&&!Fd[e]&&(Fd[e]=!0)}function Ew(e){let{basename:t="/",children:n=null,location:r,navigationType:o=Kt.Pop,navigator:i,static:s=!1,future:a}=e;Uo()&&he(!1);let l=t.replace(/^\/*/,"/"),c=f.useMemo(()=>({basename:l,navigator:i,static:s,future:No({v7_relativeSplatPath:!1},a)}),[l,a,i,s]);typeof r=="string"&&(r=Ar(r));let{pathname:d="/",search:u="",hash:h="",state:v=null,key:b="default"}=r,y=f.useMemo(()=>{let x=wr(d,l);return x==null?null:{location:{pathname:x,search:u,hash:h,state:v,key:b},navigationType:o}},[l,d,u,h,v,b,o]);return y==null?null:f.createElement(hn.Provider,{value:c},f.createElement(Hs.Provider,{children:n,value:y}))}new Promise(()=>{});/**
 * React Router DOM v6.22.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ws(){return ws=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ws.apply(this,arguments)}function dm(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Tw(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Pw(e,t){return e.button===0&&(!t||t==="_self")&&!Tw(e)}const Aw=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],_w=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],Nw="6";try{window.__reactRouterVersion=Nw}catch{}const Rw=f.createContext({isTransitioning:!1}),Mw="startTransition",Bd=Yf[Mw];function $w(e){let{basename:t,children:n,future:r,window:o}=e,i=f.useRef();i.current==null&&(i.current=Oy({window:o,v5Compat:!0}));let s=i.current,[a,l]=f.useState({action:s.action,location:s.location}),{v7_startTransition:c}=r||{},d=f.useCallback(u=>{c&&Bd?Bd(()=>l(u)):l(u)},[l,c]);return f.useLayoutEffect(()=>s.listen(d),[s,d]),f.createElement(Ew,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const zw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Iw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,er=f.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:s,state:a,target:l,to:c,preventScrollReset:d,unstable_viewTransition:u}=t,h=dm(t,Aw),{basename:v}=f.useContext(hn),b,y=!1;if(typeof c=="string"&&Iw.test(c)&&(b=c,zw))try{let w=new URL(window.location.href),k=c.startsWith("//")?new URL(w.protocol+c):new URL(c),S=wr(k.pathname,v);k.origin===w.origin&&S!=null?c=S+k.search+k.hash:y=!0}catch{}let x=cw(c,{relative:o}),m=Lw(c,{replace:s,state:a,target:l,preventScrollReset:d,relative:o,unstable_viewTransition:u});function p(w){r&&r(w),w.defaultPrevented||m(w)}return f.createElement("a",ws({},h,{href:b||x,onClick:y||i?r:p,ref:n,target:l}))}),xn=f.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:o=!1,className:i="",end:s=!1,style:a,to:l,unstable_viewTransition:c,children:d}=t,u=dm(t,_w),h=Gs(l,{relative:u.relative}),v=_r(),b=f.useContext(sm),{navigator:y,basename:x}=f.useContext(hn),m=b!=null&&Dw(h)&&c===!0,p=y.encodeLocation?y.encodeLocation(h).pathname:h.pathname,w=v.pathname,k=b&&b.navigation&&b.navigation.location?b.navigation.location.pathname:null;o||(w=w.toLowerCase(),k=k?k.toLowerCase():null,p=p.toLowerCase()),k&&x&&(k=wr(k,x)||k);const S=p!=="/"&&p.endsWith("/")?p.length-1:p.length;let C=w===p||!s&&w.startsWith(p)&&w.charAt(S)==="/",E=k!=null&&(k===p||!s&&k.startsWith(p)&&k.charAt(p.length)==="/"),T={isActive:C,isPending:E,isTransitioning:m},M=C?r:void 0,N;typeof i=="function"?N=i(T):N=[i,C?"active":null,E?"pending":null,m?"transitioning":null].filter(Boolean).join(" ");let F=typeof a=="function"?a(T):a;return f.createElement(er,ws({},u,{"aria-current":M,className:N,ref:n,style:F,to:l,unstable_viewTransition:c}),typeof d=="function"?d(T):d)});var Ol;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ol||(Ol={}));var Wd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Wd||(Wd={}));function jw(e){let t=f.useContext(Vs);return t||he(!1),t}function Lw(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:s,unstable_viewTransition:a}=t===void 0?{}:t,l=uw(),c=_r(),d=Gs(e,{relative:s});return f.useCallback(u=>{if(Pw(u,n)){u.preventDefault();let h=r!==void 0?r:vs(c)===vs(d);l(e,{replace:h,state:o,preventScrollReset:i,relative:s,unstable_viewTransition:a})}},[c,l,d,r,o,n,e,i,s,a])}function Dw(e,t){t===void 0&&(t={});let n=f.useContext(Rw);n==null&&he(!1);let{basename:r}=jw(Ol.useViewTransitionState),o=Gs(e,{relative:t.relative});if(!n.isTransitioning)return!1;let i=wr(n.currentLocation.pathname,r)||n.currentLocation.pathname,s=wr(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Dl(o.pathname,s)!=null||Dl(o.pathname,i)!=null}const Ow=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",width:35.93,height:32,preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 228",...e},f.createElement("path",{fill:"#087EA4",d:"M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"}));/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Fw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bw=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Vo=(e,t)=>{const n=f.forwardRef(({color:r="currentColor",size:o=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:a="",children:l,...c},d)=>f.createElement("svg",{ref:d,...Fw,width:o,height:o,stroke:r,strokeWidth:s?Number(i)*24/Number(o):i,className:["lucide",`lucide-${Bw(e)}`,a].join(" "),...c},[...t.map(([u,h])=>f.createElement(u,h)),...Array.isArray(l)?l:[l]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ww=Vo("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uw=Vo("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vw=Vo("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hw=Vo("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gw=Vo("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);function D(){return D=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},D.apply(this,arguments)}function Qw(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function Qs(...e){return t=>e.forEach(n=>Qw(n,t))}function Ue(...e){return f.useCallback(Qs(...e),e)}const br=f.forwardRef((e,t)=>{const{children:n,...r}=e,o=f.Children.toArray(n),i=o.find(Yw);if(i){const s=i.props.children,a=o.map(l=>l===i?f.Children.count(s)>1?f.Children.only(null):f.isValidElement(s)?s.props.children:null:l);return f.createElement(Fl,D({},r,{ref:t}),f.isValidElement(s)?f.cloneElement(s,void 0,a):null)}return f.createElement(Fl,D({},r,{ref:t}),n)});br.displayName="Slot";const Fl=f.forwardRef((e,t)=>{const{children:n,...r}=e;return f.isValidElement(n)?f.cloneElement(n,{...qw(r,n.props),ref:t?Qs(t,n.ref):n.ref}):f.Children.count(n)>1?f.Children.only(null):null});Fl.displayName="SlotClone";const Kw=({children:e})=>f.createElement(f.Fragment,null,e);function Yw(e){return f.isValidElement(e)&&e.type===Kw}function qw(e,t){const n={...t};for(const r in t){const o=e[r],i=t[r];/^on[A-Z]/.test(r)?o&&i?n[r]=(...a)=>{i(...a),o(...a)}:o&&(n[r]=o):r==="style"?n[r]={...o,...i}:r==="className"&&(n[r]=[o,i].filter(Boolean).join(" "))}return{...e,...n}}function fm(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=fm(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function Jw(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=fm(e))&&(r&&(r+=" "),r+=t);return r}const Ud=e=>typeof e=="boolean"?"".concat(e):e===0?"0":e,Vd=Jw,Xw=(e,t)=>n=>{var r;if((t==null?void 0:t.variants)==null)return Vd(e,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:o,defaultVariants:i}=t,s=Object.keys(o).map(c=>{const d=n==null?void 0:n[c],u=i==null?void 0:i[c];if(d===null)return null;const h=Ud(d)||Ud(u);return o[c][h]}),a=n&&Object.entries(n).reduce((c,d)=>{let[u,h]=d;return h===void 0||(c[u]=h),c},{}),l=t==null||(r=t.compoundVariants)===null||r===void 0?void 0:r.reduce((c,d)=>{let{class:u,className:h,...v}=d;return Object.entries(v).every(b=>{let[y,x]=b;return Array.isArray(x)?x.includes({...i,...a}[y]):{...i,...a}[y]===x})?[...c,u,h]:c},[]);return Vd(e,s,l,n==null?void 0:n.class,n==null?void 0:n.className)},Zw="modulepreload",e1=function(e){return"/"+e},Hd={},H=function(t,n,r){let o=Promise.resolve();if(n&&n.length>0){const i=document.getElementsByTagName("link");o=Promise.all(n.map(s=>{if(s=e1(s),s in Hd)return;Hd[s]=!0;const a=s.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(!!r)for(let u=i.length-1;u>=0;u--){const h=i[u];if(h.href===s&&(!a||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${l}`))return;const d=document.createElement("link");if(d.rel=a?"stylesheet":Zw,a||(d.as="script",d.crossOrigin=""),d.href=s,document.head.appendChild(d),a)return new Promise((u,h)=>{d.addEventListener("load",u),d.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${s}`)))})}))}return o.then(()=>t()).catch(i=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=i,window.dispatchEvent(s),!s.defaultPrevented)throw i})};class ru{constructor(t){I(this,"errorCode");I(this,"message");I(this,"stackTrace");I(this,"errors");I(this,"meta");Object.assign(this,t)}}class t1{constructor(t){I(this,"errorCode");I(this,"fieldName");I(this,"message");I(this,"meta");Object.assign(this,t)}}class ou{constructor(t){I(this,"type");I(this,"responseStatus");Object.assign(this,t)}}class Gd{constructor(t){I(this,"responseStatus");Object.assign(this,t)}}var Qd;(function(e){e[e.CONNECTING=0]="CONNECTING",e[e.OPEN=1]="OPEN",e[e.CLOSED=2]="CLOSED"})(Qd||(Qd={}));class Y{}I(Y,"Get","GET"),I(Y,"Post","POST"),I(Y,"Put","PUT"),I(Y,"Delete","DELETE"),I(Y,"Patch","PATCH"),I(Y,"Head","HEAD"),I(Y,"Options","OPTIONS"),I(Y,"hasRequestBody",t=>!(t==="GET"||t==="DELETE"||t==="HEAD"||t==="OPTIONS"));class n1{constructor(t){I(this,"refreshToken");I(this,"useTokenCookie");Object.assign(this,t)}createResponse(){return new r1}getTypeName(){return"GetAccessToken"}getMethod(){return"POST"}}class r1{constructor(){I(this,"accessToken");I(this,"responseStatus")}}const mt=class mt{constructor(t="/"){I(this,"baseUrl");I(this,"replyBaseUrl");I(this,"oneWayBaseUrl");I(this,"mode");I(this,"credentials");I(this,"headers");I(this,"userName");I(this,"password");I(this,"bearerToken");I(this,"refreshToken");I(this,"refreshTokenUri");I(this,"useTokenCookie");I(this,"enableAutoRefreshToken");I(this,"requestFilter");I(this,"responseFilter");I(this,"exceptionFilter");I(this,"urlFilter");I(this,"onAuthenticationRequired");I(this,"manageCookies");I(this,"cookies");I(this,"parseJson");this.baseUrl=t,this.mode="cors",this.credentials="include",this.headers=new Headers,this.headers.set("Content-Type","application/json"),this.manageCookies=typeof document>"u",this.cookies={},this.enableAutoRefreshToken=!0,this.basePath="api"}setCredentials(t,n){this.userName=t,this.password=n}useBasePath(t){return this.basePath=t,this}set basePath(t){t?(this.replyBaseUrl=Ge(this.baseUrl,t)+"/",this.oneWayBaseUrl=Ge(this.baseUrl,t)+"/"):(this.replyBaseUrl=Ge(this.baseUrl,"json","reply")+"/",this.oneWayBaseUrl=Ge(this.baseUrl,"json","oneway")+"/")}apply(t){return t(this),this}get(t,n){return typeof t!="string"?this.fetch(Y.Get,t,n):this.fetch(Y.Get,null,n,this.toAbsoluteUrl(t))}delete(t,n){return typeof t!="string"?this.fetch(Y.Delete,t,n):this.fetch(Y.Delete,null,n,this.toAbsoluteUrl(t))}post(t,n){return this.fetch(Y.Post,t,n)}postToUrl(t,n,r){return this.fetch(Y.Post,n,r,this.toAbsoluteUrl(t))}postBody(t,n,r){return this.fetchBody(Y.Post,t,n,r)}put(t,n){return this.fetch(Y.Put,t,n)}putToUrl(t,n,r){return this.fetch(Y.Put,n,r,this.toAbsoluteUrl(t))}putBody(t,n,r){return this.fetchBody(Y.Put,t,n,r)}patch(t,n){return this.fetch(Y.Patch,t,n)}patchToUrl(t,n,r){return this.fetch(Y.Patch,n,r,this.toAbsoluteUrl(t))}patchBody(t,n,r){return this.fetchBody(Y.Patch,t,n,r)}publish(t,n){return this.sendOneWay(t,n)}sendOneWay(t,n){const r=Ge(this.oneWayBaseUrl,Ur(t));return this.fetch(Y.Post,t,null,r)}sendAll(t){if(t.length==0)return Promise.resolve([]);const n=Ge(this.replyBaseUrl,Ur(t[0])+"[]");return this.fetch(Y.Post,t,null,n)}sendAllOneWay(t){if(t.length==0)return Promise.resolve(void 0);const n=Ge(this.oneWayBaseUrl,Ur(t[0])+"[]");return this.fetch(Y.Post,t,null,n).then(r=>{})}createUrlFromDto(t,n){let r=Ge(this.replyBaseUrl,Ur(n));return Y.hasRequestBody(t)||(r=Aa(r,n)),r}toAbsoluteUrl(t){return t.startsWith("http://")||t.startsWith("https://")?t:Ge(this.baseUrl,t)}deleteCookie(t){this.manageCookies?delete this.cookies[t]:document&&(document.cookie=t+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/")}createRequest({method:t,request:n,url:r,args:o,body:i}){if(r||(r=this.createUrlFromDto(t,n)),o&&(r=Aa(r,o)),this.bearerToken!=null?this.headers.set("Authorization","Bearer "+this.bearerToken):this.userName!=null&&this.headers.set("Authorization","Basic "+mt.toBase64(`${this.userName}:${this.password}`)),this.manageCookies){let c=Object.keys(this.cookies).map(d=>{let u=this.cookies[d];return u.expires&&u.expires<new Date?null:`${u.name}=${encodeURIComponent(u.value)}`}).filter(d=>!!d);c.length>0?this.headers.set("Cookie",c.join("; ")):this.headers.delete("Cookie")}let s=new Headers(this.headers),a=Y.hasRequestBody(t),l={url:r,method:t,mode:this.mode,credentials:this.credentials,headers:s,compress:!1};return a&&(l.body=i||JSON.stringify(n),Kd(i)&&(l.body=S1(i),s.delete("Content-Type"))),this.requestFilter!=null&&this.requestFilter(l),mt.globalRequestFilter!=null&&mt.globalRequestFilter(l),l}json(t){return this.parseJson?this.parseJson(t):t.text().then(n=>n.length>0?JSON.parse(n):null)}applyResponseFilters(t){this.responseFilter!=null&&this.responseFilter(t),mt.globalResponseFilter!=null&&mt.globalResponseFilter(t)}createResponse(t,n){if(!t.ok)throw this.applyResponseFilters(t),t;if(this.manageCookies){let a=[];t.headers.forEach((l,c)=>{switch(c.toLowerCase()){case"set-cookie":l.split(",").forEach(u=>a.push(u));break}}),a.forEach(l=>{let c=h1(l);c&&(this.cookies[c.name]=c)})}t.headers.forEach((a,l)=>{switch(l.toLowerCase()){case"x-cookies":a.split(",").indexOf("ss-reftok")>=0&&(this.useTokenCookie=!0);break}}),this.applyResponseFilters(t);let r=n&&typeof n!="string"&&typeof n.createResponse=="function"?n.createResponse():null;if(typeof r=="string")return t.text().then(a=>a);let o=t.headers.get("content-type"),i=o&&o.indexOf("application/json")!==-1;if(i)return this.json(t).then(a=>a);if(typeof Uint8Array<"u"&&r instanceof Uint8Array){if(typeof t.arrayBuffer!="function")throw new Error("This fetch polyfill does not implement 'arrayBuffer'");return t.arrayBuffer().then(a=>new Uint8Array(a))}else if(typeof Blob=="function"&&r instanceof Blob){if(typeof t.blob!="function")throw new Error("This fetch polyfill does not implement 'blob'");return t.blob().then(a=>a)}let s=t.headers.get("content-length");return s==="0"||s==null&&!i?t.text().then(a=>r):this.json(t).then(a=>a)}handleError(t,n,r=null){if(n instanceof Error)throw this.raiseError(t,n);if(n.bodyUsed)throw this.raiseError(n,Pa(n.status,n.statusText,r));return typeof n.json>"u"&&n.responseStatus?new Promise((i,s)=>s(this.raiseError(null,n))):this.json(n).then(i=>{let s=xr(i);throw s.responseStatus?(r!=null&&(s.type=r),s):Pa(n.status,n.statusText,r)}).catch(i=>{throw i instanceof Error||typeof window<"u"&&window.DOMException&&i instanceof window.DOMException?this.raiseError(n,Pa(n.status,n.statusText,r)):this.raiseError(n,i)})}fetch(t,n,r,o){return this.sendRequest({method:t,request:n,args:r,url:o})}fetchBody(t,n,r,o){let i=Ge(this.replyBaseUrl,Ur(n));return this.sendRequest({method:t,request:r,body:typeof r=="string"||Kd(r)?r:JSON.stringify(r),url:Aa(i,n),args:o,returns:n})}sendRequest(t){const n=this.createRequest(t),r=t.returns||t.request;let o=null;const i=()=>{const s=this.createRequest(t);return this.urlFilter&&this.urlFilter(s.url),fetch(s.url,s).then(a=>this.createResponse(a,r)).catch(a=>this.handleError(o,a))};return this.urlFilter&&this.urlFilter(n.url),fetch(n.url,n).then(s=>(o=s,this.createResponse(s,r))).catch(s=>{if(s.status===401){if(this.enableAutoRefreshToken&&(this.refreshToken||this.useTokenCookie||this.cookies["ss-reftok"]!=null)){const a=new n1({refreshToken:this.refreshToken,useTokenCookie:!!this.useTokenCookie});let l=this.refreshTokenUri||this.createUrlFromDto(Y.Post,a);this.useTokenCookie&&(this.bearerToken=null,this.headers.delete("Authorization"));let c=this.createRequest({method:Y.Post,request:a,args:null,url:l});return fetch(l,c).then(d=>this.createResponse(d,a).then(u=>(this.bearerToken=(u==null?void 0:u.accessToken)||null,i()))).catch(d=>this.onAuthenticationRequired?this.onAuthenticationRequired().then(i).catch(u=>this.handleError(o,u,"RefreshTokenException")):this.handleError(o,d,"RefreshTokenException"))}else if(this.onAuthenticationRequired)return this.onAuthenticationRequired().then(i)}return this.handleError(o,s)})}raiseError(t,n){return this.exceptionFilter!=null&&this.exceptionFilter(t,n),n}send(t,n,r){return this.sendRequest({method:Ln(t),request:t,args:n,url:r})}sendVoid(t,n,r){return this.sendRequest({method:Ln(t),request:t,args:n,url:r})}async api(t,n,r){try{const o=await this.fetch(Ln(t,r),t,n);return new Dt({response:o})}catch(o){return new Dt({error:mi(o)})}}async apiVoid(t,n,r){try{const o=await this.fetch(Ln(t,r),t,n);return new Dt({response:o??new Gd})}catch(o){return new Dt({error:mi(o)})}}async apiForm(t,n,r,o){try{const i=await this.fetchBody(Ln(t,o),t,n,r);return new Dt({response:i})}catch(i){return new Dt({error:mi(i)})}}async apiFormVoid(t,n,r,o){try{const i=await this.fetchBody(Ln(t,o),t,n,r);return new Dt({response:i??new Gd})}catch(i){return new Dt({error:mi(i)})}}};I(mt,"globalRequestFilter"),I(mt,"globalResponseFilter"),I(mt,"toBase64");let Bl=mt;function Ln(e,t){return t??(typeof e.getMethod=="function"?e.getMethod():Y.Post)}function mi(e){return e.responseStatus??e.ResponseStatus??(e.errorCode?e:e.message?o1(e.message,e.errorCode):null)}class Dt{constructor(t){I(this,"response");I(this,"error");Object.assign(this,t)}get completed(){return this.response!=null||this.error!=null}get failed(){var t,n;return((t=this.error)==null?void 0:t.errorCode)!=null||((n=this.error)==null?void 0:n.message)!=null}get succeeded(){return!this.failed&&this.response!=null}get errorMessage(){var t;return(t=this.error)==null?void 0:t.message}get errorCode(){var t;return(t=this.error)==null?void 0:t.errorCode}get errors(){var t;return((t=this.error)==null?void 0:t.errors)??[]}get errorSummary(){return this.error!=null&&this.errors.length==0?this.errorMessage:null}fieldError(t){var r;let n=t.toLowerCase();return(r=this.errors)==null?void 0:r.find(o=>o.fieldName.toLowerCase()==n)}fieldErrorMessage(t){var n;return(n=this.fieldError(t))==null?void 0:n.message}hasFieldError(t){return this.fieldError(t)!=null}showSummary(t=[]){return this.failed?t.every(n=>!this.hasFieldError(n)):!1}summaryMessage(t=[]){if(this.showSummary(t)){let n=t.map(o=>o.toLowerCase());return n.find(o=>n.indexOf(o.toLowerCase())==-1)??this.errorMessage}}addFieldError(t,n,r="Exception"){this.error||(this.error=new ru);const o=this.fieldError(t);o!=null?(o.errorCode=r,o.message=n):this.error.errors.push(new t1({fieldName:t,errorCode:r,message:n}))}}function o1(e,t="Exception"){return new ru({errorCode:t,message:e})}function Kd(e){return typeof window<"u"&&e instanceof FormData}function Pa(e,t,n=null){return qd(new ou,o=>{n!=null&&(o.type=n),o.responseStatus=qd(new ru,i=>{i.errorCode=e&&e.toString(),i.message=t})})}function i1(e){return e&&e.charAt(0).toLowerCase()+e.substring(1)}function pm(e){return e&&e.charAt(0).toUpperCase()+e.substring(1)}function Wl(e){if(!e||!(e instanceof Object)||Array.isArray(e))return e;let t={};for(let n in e)if(e.hasOwnProperty(n)){const r=i1(n),o=e[n];Array.isArray(o)?t[r]=o.map(i=>Wl(i)):o instanceof Object?t[r]=Wl(o):t[r]=o}return t}function xr(e){return xr&&(e.responseStatus||e.errors?e:Wl(e))}function Ur(e){if(!e)return"null";if(typeof e.getTypeName=="function")return e.getTypeName();let t=e&&e.constructor;if(t==null)throw`${e} doesn't have constructor`;if(t.name)return t.name;let n=t.toString();return n.substring(9,n.indexOf("("))}function s1(e,t){if(!e)return[e];let n=e.indexOf(t);return n>=0?[e.substring(0,n),e.substring(n+1)]:[e]}function fC(e,t){if(e==null)return null;let n=e.indexOf(t);return n==-1?e:e.substring(0,n)}function pC(e,t){if(e==null)return null;let n=e.indexOf(t);return n==-1?e:e.substring(n+t.length)}function hm(e,t){if(e==null)return null;let n=e.lastIndexOf(t);return n==-1?e:e.substring(n+t.length)}function a1(e){return typeof e!="string"?e:e.replace(/([A-Z]|[0-9]+)/g," $1").replace(/_/g," ").trim()}function l1(e){return!e||e.indexOf(" ")>=0?e:a1(pm(e))}function Ge(...e){let t=[],n,r;for(n=0,r=e.length;n<r;n++){let i=e[n];t=i.indexOf("://")===-1?t.concat(i.split("/")):t.concat(i.lastIndexOf("/")===i.length-1?i.substring(0,i.length-1):i)}let o=[];for(n=0,r=t.length;n<r;n++){let i=t[n];!i||i==="."||(i===".."?o.pop():o.push(i))}return t[0]===""&&o.unshift(""),o.join("/")||(o.length?"/":".")}function Aa(e,t){for(let n in t)if(t.hasOwnProperty(n)){let r=t[n];if(typeof r>"u"||typeof r=="function"||typeof r=="symbol")continue;e+=e.indexOf("?")>=0?"&":"?",e+=n+(r===null?"":"="+c1(r))}return e}function c1(e){return e==null?"":typeof Uint8Array<"u"&&e instanceof Uint8Array?u1(e):encodeURIComponent(e)||""}function u1(e){let t=(3-e.length%3)%3,n="";for(let r,o=e.length,i=0,s=0;s<o;s++)r=s%3,i|=e[s]<<(16>>>r&24),(r===2||e.length-s===1)&&(n+=String.fromCharCode(gi(i>>>18&63),gi(i>>>12&63),gi(i>>>6&63),gi(i&63)),i=0);return t===0?n:n.substring(0,n.length-t)+(t===1?"=":"==")}function gi(e){return e<26?e+65:e<52?e+71:e<62?e-4:e===62?43:e===63?47:65}function d1(e){return typeof btoa=="function"?btoa(e):Buffer.from(e).toString("base64")}Bl.toBase64=e=>d1(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g,(t,n)=>String.fromCharCode(new Number("0x"+n).valueOf())));function f1(e){return e&&e[0]=='"'&&e[e.length]=='"'?e.slice(1,-1):e}function p1(e){try{return decodeURIComponent(e)}catch{return e}}function h1(e){if(!e)return null;let t=null,n=e.split(/; */);for(let r=0;r<n.length;r++){let o=n[r],i=s1(o,"="),s=i[0].trim(),a=i.length>1?p1(f1(i[1].trim())):null;if(r==0)t={name:s,value:a,path:"/"};else{let l=s.toLowerCase();l=="httponly"?t.httpOnly=!0:l=="secure"?t.secure=!0:l=="expires"?(t.expires=new Date(a),t.expires.toString()==="Invalid Date"&&(t.expires=new Date(a.replace(/-/g," ")))):t[s]=a}}return t}function m1(e){return Object.prototype.toString.call(e)==="[object Array]"}function g1(){const e=this.responseStatus||this.ResponseStatus;if(e==null)return;const t=e.ErrorCode?xr(e):e;return!t.errors||t.errors.length==0?t.message||t.errorCode:void 0}function v1(e){const t=this.responseStatus||this.ResponseStatus;if(t==null)return;const n=t.ErrorCode?xr(t):t,r=k1(e);if(r&&!(n.errors==null||n.errors.length==0)){const o=r.map(i=>(i||"").toLowerCase());for(let i of n.errors)if(o.indexOf((i.fieldName||"").toLowerCase())!==-1)return;for(let i of n.errors)if(o.indexOf((i.fieldName||"").toLowerCase())===-1)return i.message||i.errorCode}return n.message||n.errorCode||void 0}function y1(e){if(e==null)return g1.call(this);const t=this.responseStatus||this.ResponseStatus;if(t==null)return;const n=t.ErrorCode?xr(t):t;if(n.errors==null||n.errors.length==0)return;const r=n.errors.find(o=>(o.fieldName||"").toLowerCase()==e.toLowerCase());return r?r.message||r.errorCode:void 0}function w1(e,t,n){return e.setAttribute(t,n)}function b1(e,t){const n={className:"class",htmlFor:"for"},r=document.createElement(e);if(t!=null&&t.attrs)for(const o in t.attrs)w1(r,n[o]||o,t.attrs[o]);return t!=null&&t.events&&x1(r,t.events),t&&t.insertAfter&&t.insertAfter.parentNode.insertBefore(r,t.insertAfter.nextSibling),r}function mm(e,t){var n;return typeof e=="string"?Array.from(((n=t||typeof document<"u"?document:null)==null?void 0:n.querySelectorAll(e))??[]):Array.isArray(e)?e.flatMap(r=>mm(r,t)):[e]}function x1(e,t){return mm(e).forEach(n=>{Object.keys(t).forEach(function(r){let o=t[r];typeof r=="string"&&typeof o=="function"&&n.addEventListener(r,t[r]=o.bind(n))})}),t}function hC(e){return new Promise((t,n)=>{document.body.appendChild(b1("script",{attrs:{src:e},events:{load:t,error:n}}))})}typeof window<"u"&&window.Element!==void 0&&(Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){let t=this;do{if(t.matches(e))return t;t=t.parentElement||t.parentNode}while(t!==null&&t.nodeType===1);return null}));var Yd;(function(e){e.MultiPart="multipart/form-data",e.UrlEncoded="application/x-www-form-urlencoded",e.Json="application/json"})(Yd||(Yd={}));function k1(e){return e?m1(e)?e:e.split(",").map(t=>t.trim()):[]}function S1(e){for(let[t,n]of e)typeof n=="object"&&n.size===0&&e.delete(t);return e}function qd(e,t){return t(e),e}function gm(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=gm(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function C1(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=gm(e))&&(r&&(r+=" "),r+=t);return r}const iu="-";function E1(e){const t=P1(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;function o(s){const a=s.split(iu);return a[0]===""&&a.length!==1&&a.shift(),vm(a,t)||T1(s)}function i(s,a){const l=n[s]||[];return a&&r[s]?[...l,...r[s]]:l}return{getClassGroupId:o,getConflictingClassGroupIds:i}}function vm(e,t){var s;if(e.length===0)return t.classGroupId;const n=e[0],r=t.nextPart.get(n),o=r?vm(e.slice(1),r):void 0;if(o)return o;if(t.validators.length===0)return;const i=e.join(iu);return(s=t.validators.find(({validator:a})=>a(i)))==null?void 0:s.classGroupId}const Jd=/^\[(.+)\]$/;function T1(e){if(Jd.test(e)){const t=Jd.exec(e)[1],n=t==null?void 0:t.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}}function P1(e){const{theme:t,prefix:n}=e,r={nextPart:new Map,validators:[]};return _1(Object.entries(e.classGroups),n).forEach(([i,s])=>{Ul(s,r,i,t)}),r}function Ul(e,t,n,r){e.forEach(o=>{if(typeof o=="string"){const i=o===""?t:Xd(t,o);i.classGroupId=n;return}if(typeof o=="function"){if(A1(o)){Ul(o(r),t,n,r);return}t.validators.push({validator:o,classGroupId:n});return}Object.entries(o).forEach(([i,s])=>{Ul(s,Xd(t,i),n,r)})})}function Xd(e,t){let n=e;return t.split(iu).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n}function A1(e){return e.isThemeGetter}function _1(e,t){return t?e.map(([n,r])=>{const o=r.map(i=>typeof i=="string"?t+i:typeof i=="object"?Object.fromEntries(Object.entries(i).map(([s,a])=>[t+s,a])):i);return[n,o]}):e}function N1(e){if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=new Map,r=new Map;function o(i,s){n.set(i,s),t++,t>e&&(t=0,r=n,n=new Map)}return{get(i){let s=n.get(i);if(s!==void 0)return s;if((s=r.get(i))!==void 0)return o(i,s),s},set(i,s){n.has(i)?n.set(i,s):o(i,s)}}}const ym="!";function R1(e){const t=e.separator,n=t.length===1,r=t[0],o=t.length;return function(s){const a=[];let l=0,c=0,d;for(let y=0;y<s.length;y++){let x=s[y];if(l===0){if(x===r&&(n||s.slice(y,y+o)===t)){a.push(s.slice(c,y)),c=y+o;continue}if(x==="/"){d=y;continue}}x==="["?l++:x==="]"&&l--}const u=a.length===0?s:s.substring(c),h=u.startsWith(ym),v=h?u.substring(1):u,b=d&&d>c?d-c:void 0;return{modifiers:a,hasImportantModifier:h,baseClassName:v,maybePostfixModifierPosition:b}}}function M1(e){if(e.length<=1)return e;const t=[];let n=[];return e.forEach(r=>{r[0]==="["?(t.push(...n.sort(),r),n=[]):n.push(r)}),t.push(...n.sort()),t}function $1(e){return{cache:N1(e.cacheSize),splitModifiers:R1(e),...E1(e)}}const z1=/\s+/;function I1(e,t){const{splitModifiers:n,getClassGroupId:r,getConflictingClassGroupIds:o}=t,i=new Set;return e.trim().split(z1).map(s=>{const{modifiers:a,hasImportantModifier:l,baseClassName:c,maybePostfixModifierPosition:d}=n(s);let u=r(d?c.substring(0,d):c),h=!!d;if(!u){if(!d)return{isTailwindClass:!1,originalClassName:s};if(u=r(c),!u)return{isTailwindClass:!1,originalClassName:s};h=!1}const v=M1(a).join(":");return{isTailwindClass:!0,modifierId:l?v+ym:v,classGroupId:u,originalClassName:s,hasPostfixModifier:h}}).reverse().filter(s=>{if(!s.isTailwindClass)return!0;const{modifierId:a,classGroupId:l,hasPostfixModifier:c}=s,d=a+l;return i.has(d)?!1:(i.add(d),o(l,c).forEach(u=>i.add(a+u)),!0)}).reverse().map(s=>s.originalClassName).join(" ")}function j1(){let e=0,t,n,r="";for(;e<arguments.length;)(t=arguments[e++])&&(n=wm(t))&&(r&&(r+=" "),r+=n);return r}function wm(e){if(typeof e=="string")return e;let t,n="";for(let r=0;r<e.length;r++)e[r]&&(t=wm(e[r]))&&(n&&(n+=" "),n+=t);return n}function L1(e,...t){let n,r,o,i=s;function s(l){const c=t.reduce((d,u)=>u(d),e());return n=$1(c),r=n.cache.get,o=n.cache.set,i=a,a(l)}function a(l){const c=r(l);if(c)return c;const d=I1(l,n);return o(l,d),d}return function(){return i(j1.apply(null,arguments))}}function ee(e){const t=n=>n[e]||[];return t.isThemeGetter=!0,t}const bm=/^\[(?:([a-z-]+):)?(.+)\]$/i,D1=/^\d+\/\d+$/,O1=new Set(["px","full","screen"]),F1=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,B1=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,W1=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,U1=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,V1=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function kt(e){return kn(e)||O1.has(e)||D1.test(e)}function Ot(e){return Nr(e,"length",X1)}function kn(e){return!!e&&!Number.isNaN(Number(e))}function vi(e){return Nr(e,"number",kn)}function Vr(e){return!!e&&Number.isInteger(Number(e))}function H1(e){return e.endsWith("%")&&kn(e.slice(0,-1))}function O(e){return bm.test(e)}function Ft(e){return F1.test(e)}const G1=new Set(["length","size","percentage"]);function Q1(e){return Nr(e,G1,xm)}function K1(e){return Nr(e,"position",xm)}const Y1=new Set(["image","url"]);function q1(e){return Nr(e,Y1,eb)}function J1(e){return Nr(e,"",Z1)}function Hr(){return!0}function Nr(e,t,n){const r=bm.exec(e);return r?r[1]?typeof t=="string"?r[1]===t:t.has(r[1]):n(r[2]):!1}function X1(e){return B1.test(e)&&!W1.test(e)}function xm(){return!1}function Z1(e){return U1.test(e)}function eb(e){return V1.test(e)}function tb(){const e=ee("colors"),t=ee("spacing"),n=ee("blur"),r=ee("brightness"),o=ee("borderColor"),i=ee("borderRadius"),s=ee("borderSpacing"),a=ee("borderWidth"),l=ee("contrast"),c=ee("grayscale"),d=ee("hueRotate"),u=ee("invert"),h=ee("gap"),v=ee("gradientColorStops"),b=ee("gradientColorStopPositions"),y=ee("inset"),x=ee("margin"),m=ee("opacity"),p=ee("padding"),w=ee("saturate"),k=ee("scale"),S=ee("sepia"),C=ee("skew"),E=ee("space"),T=ee("translate"),M=()=>["auto","contain","none"],N=()=>["auto","hidden","clip","visible","scroll"],F=()=>["auto",O,t],z=()=>[O,t],X=()=>["",kt,Ot],B=()=>["auto",kn,O],V=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],J=()=>["solid","dashed","dotted","double","none"],W=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"],_=()=>["start","end","center","between","around","evenly","stretch"],P=()=>["","0",O],$=()=>["auto","avoid","all","avoid-page","page","left","right","column"],L=()=>[kn,vi],Q=()=>[kn,O];return{cacheSize:500,separator:":",theme:{colors:[Hr],spacing:[kt,Ot],blur:["none","",Ft,O],brightness:L(),borderColor:[e],borderRadius:["none","","full",Ft,O],borderSpacing:z(),borderWidth:X(),contrast:L(),grayscale:P(),hueRotate:Q(),invert:P(),gap:z(),gradientColorStops:[e],gradientColorStopPositions:[H1,Ot],inset:F(),margin:F(),opacity:L(),padding:z(),saturate:L(),scale:L(),sepia:P(),skew:Q(),space:z(),translate:z()},classGroups:{aspect:[{aspect:["auto","square","video",O]}],container:["container"],columns:[{columns:[Ft]}],"break-after":[{"break-after":$()}],"break-before":[{"break-before":$()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...V(),O]}],overflow:[{overflow:N()}],"overflow-x":[{"overflow-x":N()}],"overflow-y":[{"overflow-y":N()}],overscroll:[{overscroll:M()}],"overscroll-x":[{"overscroll-x":M()}],"overscroll-y":[{"overscroll-y":M()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[y]}],"inset-x":[{"inset-x":[y]}],"inset-y":[{"inset-y":[y]}],start:[{start:[y]}],end:[{end:[y]}],top:[{top:[y]}],right:[{right:[y]}],bottom:[{bottom:[y]}],left:[{left:[y]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Vr,O]}],basis:[{basis:F()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",O]}],grow:[{grow:P()}],shrink:[{shrink:P()}],order:[{order:["first","last","none",Vr,O]}],"grid-cols":[{"grid-cols":[Hr]}],"col-start-end":[{col:["auto",{span:["full",Vr,O]},O]}],"col-start":[{"col-start":B()}],"col-end":[{"col-end":B()}],"grid-rows":[{"grid-rows":[Hr]}],"row-start-end":[{row:["auto",{span:[Vr,O]},O]}],"row-start":[{"row-start":B()}],"row-end":[{"row-end":B()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",O]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",O]}],gap:[{gap:[h]}],"gap-x":[{"gap-x":[h]}],"gap-y":[{"gap-y":[h]}],"justify-content":[{justify:["normal",..._()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",..._(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[..._(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[p]}],px:[{px:[p]}],py:[{py:[p]}],ps:[{ps:[p]}],pe:[{pe:[p]}],pt:[{pt:[p]}],pr:[{pr:[p]}],pb:[{pb:[p]}],pl:[{pl:[p]}],m:[{m:[x]}],mx:[{mx:[x]}],my:[{my:[x]}],ms:[{ms:[x]}],me:[{me:[x]}],mt:[{mt:[x]}],mr:[{mr:[x]}],mb:[{mb:[x]}],ml:[{ml:[x]}],"space-x":[{"space-x":[E]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[E]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",O,t]}],"min-w":[{"min-w":[O,t,"min","max","fit"]}],"max-w":[{"max-w":[O,t,"none","full","min","max","fit","prose",{screen:[Ft]},Ft]}],h:[{h:[O,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[O,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[O,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[O,t,"auto","min","max","fit"]}],"font-size":[{text:["base",Ft,Ot]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",vi]}],"font-family":[{font:[Hr]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",O]}],"line-clamp":[{"line-clamp":["none",kn,vi]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",kt,O]}],"list-image":[{"list-image":["none",O]}],"list-style-type":[{list:["none","disc","decimal",O]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[m]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[m]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...J(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",kt,Ot]}],"underline-offset":[{"underline-offset":["auto",kt,O]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:z()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",O]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",O]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[m]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...V(),K1]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Q1]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},q1]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[b]}],"gradient-via-pos":[{via:[b]}],"gradient-to-pos":[{to:[b]}],"gradient-from":[{from:[v]}],"gradient-via":[{via:[v]}],"gradient-to":[{to:[v]}],rounded:[{rounded:[i]}],"rounded-s":[{"rounded-s":[i]}],"rounded-e":[{"rounded-e":[i]}],"rounded-t":[{"rounded-t":[i]}],"rounded-r":[{"rounded-r":[i]}],"rounded-b":[{"rounded-b":[i]}],"rounded-l":[{"rounded-l":[i]}],"rounded-ss":[{"rounded-ss":[i]}],"rounded-se":[{"rounded-se":[i]}],"rounded-ee":[{"rounded-ee":[i]}],"rounded-es":[{"rounded-es":[i]}],"rounded-tl":[{"rounded-tl":[i]}],"rounded-tr":[{"rounded-tr":[i]}],"rounded-br":[{"rounded-br":[i]}],"rounded-bl":[{"rounded-bl":[i]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[m]}],"border-style":[{border:[...J(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[m]}],"divide-style":[{divide:J()}],"border-color":[{border:[o]}],"border-color-x":[{"border-x":[o]}],"border-color-y":[{"border-y":[o]}],"border-color-t":[{"border-t":[o]}],"border-color-r":[{"border-r":[o]}],"border-color-b":[{"border-b":[o]}],"border-color-l":[{"border-l":[o]}],"divide-color":[{divide:[o]}],"outline-style":[{outline:["",...J()]}],"outline-offset":[{"outline-offset":[kt,O]}],"outline-w":[{outline:[kt,Ot]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:X()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[m]}],"ring-offset-w":[{"ring-offset":[kt,Ot]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",Ft,J1]}],"shadow-color":[{shadow:[Hr]}],opacity:[{opacity:[m]}],"mix-blend":[{"mix-blend":W()}],"bg-blend":[{"bg-blend":W()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",Ft,O]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[u]}],saturate:[{saturate:[w]}],sepia:[{sepia:[S]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[u]}],"backdrop-opacity":[{"backdrop-opacity":[m]}],"backdrop-saturate":[{"backdrop-saturate":[w]}],"backdrop-sepia":[{"backdrop-sepia":[S]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",O]}],duration:[{duration:Q()}],ease:[{ease:["linear","in","out","in-out",O]}],delay:[{delay:Q()}],animate:[{animate:["none","spin","ping","pulse","bounce",O]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[k]}],"scale-x":[{"scale-x":[k]}],"scale-y":[{"scale-y":[k]}],rotate:[{rotate:[Vr,O]}],"translate-x":[{"translate-x":[T]}],"translate-y":[{"translate-y":[T]}],"skew-x":[{"skew-x":[C]}],"skew-y":[{"skew-y":[C]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",O]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",O]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":z()}],"scroll-mx":[{"scroll-mx":z()}],"scroll-my":[{"scroll-my":z()}],"scroll-ms":[{"scroll-ms":z()}],"scroll-me":[{"scroll-me":z()}],"scroll-mt":[{"scroll-mt":z()}],"scroll-mr":[{"scroll-mr":z()}],"scroll-mb":[{"scroll-mb":z()}],"scroll-ml":[{"scroll-ml":z()}],"scroll-p":[{"scroll-p":z()}],"scroll-px":[{"scroll-px":z()}],"scroll-py":[{"scroll-py":z()}],"scroll-ps":[{"scroll-ps":z()}],"scroll-pe":[{"scroll-pe":z()}],"scroll-pt":[{"scroll-pt":z()}],"scroll-pr":[{"scroll-pr":z()}],"scroll-pb":[{"scroll-pb":z()}],"scroll-pl":[{"scroll-pl":z()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",O]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[kt,Ot,vi]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}const nb=L1(tb);function rb(e){return e.normalize("NFKD").toLowerCase().trim().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\_/g,"-").replace(/\-\-+/g,"-").replace(/\-$/g,"")}function ob(e){return new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}function ib(e){try{return new Date(e).toISOString()}catch{return"2000-01-01T00:00:00.000Z"}}Object.assign(Object.keys(globalThis).reduce((e,t)=>(e[t]=void 0,e),{}));function le(...e){return nb(C1(e))}const sb=Xw("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 focus:ring-2 focus:ring-offset-2",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-blue-500",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90 focus:ring-destructive-500",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground focus:ring-accent-500",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80 focus:ring-secondary-500",ghost:"hover:bg-accent hover:text-accent-foreground focus:ring-accent-500",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),km=f.forwardRef(({className:e,variant:t,size:n,asChild:r=!1,...o},i)=>{const s=r?br:"button";return g.jsx(s,{className:le(sb({variant:t,size:n,className:e})),ref:i,...o})});km.displayName="Button";function G(e,t,{checkForDefaultPrevented:n=!0}={}){return function(o){if(e==null||e(o),n===!1||!o.defaultPrevented)return t==null?void 0:t(o)}}function Ho(e,t=[]){let n=[];function r(i,s){const a=f.createContext(s),l=n.length;n=[...n,s];function c(u){const{scope:h,children:v,...b}=u,y=(h==null?void 0:h[e][l])||a,x=f.useMemo(()=>b,Object.values(b));return f.createElement(y.Provider,{value:x},v)}function d(u,h){const v=(h==null?void 0:h[e][l])||a,b=f.useContext(v);if(b)return b;if(s!==void 0)return s;throw new Error(`\`${u}\` must be used within \`${i}\``)}return c.displayName=i+"Provider",[c,d]}const o=()=>{const i=n.map(s=>f.createContext(s));return function(a){const l=(a==null?void 0:a[e])||i;return f.useMemo(()=>({[`__scope${e}`]:{...a,[e]:l}}),[a,l])}};return o.scopeName=e,[r,ab(o,...t)]}function ab(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(i){const s=r.reduce((a,{useScope:l,scopeName:c})=>{const u=l(i)[`__scope${c}`];return{...a,...u}},{});return f.useMemo(()=>({[`__scope${t.scopeName}`]:s}),[s])}};return n.scopeName=t.scopeName,n}function bt(e){const t=f.useRef(e);return f.useEffect(()=>{t.current=e}),f.useMemo(()=>(...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},[])}function Sm({prop:e,defaultProp:t,onChange:n=()=>{}}){const[r,o]=lb({defaultProp:t,onChange:n}),i=e!==void 0,s=i?e:r,a=bt(n),l=f.useCallback(c=>{if(i){const u=typeof c=="function"?c(e):c;u!==e&&a(u)}else o(c)},[i,e,o,a]);return[s,l]}function lb({defaultProp:e,onChange:t}){const n=f.useState(e),[r]=n,o=f.useRef(r),i=bt(t);return f.useEffect(()=>{o.current!==r&&(i(r),o.current=r)},[r,o,i]),n}const cb=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],tt=cb.reduce((e,t)=>{const n=f.forwardRef((r,o)=>{const{asChild:i,...s}=r,a=i?br:t;return f.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),f.createElement(a,D({},s,{ref:o}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function Cm(e,t){e&&Wo.flushSync(()=>e.dispatchEvent(t))}function Em(e){const t=e+"CollectionProvider",[n,r]=Ho(t),[o,i]=n(t,{collectionRef:{current:null},itemMap:new Map}),s=v=>{const{scope:b,children:y}=v,x=j.useRef(null),m=j.useRef(new Map).current;return j.createElement(o,{scope:b,itemMap:m,collectionRef:x},y)},a=e+"CollectionSlot",l=j.forwardRef((v,b)=>{const{scope:y,children:x}=v,m=i(a,y),p=Ue(b,m.collectionRef);return j.createElement(br,{ref:p},x)}),c=e+"CollectionItemSlot",d="data-radix-collection-item",u=j.forwardRef((v,b)=>{const{scope:y,children:x,...m}=v,p=j.useRef(null),w=Ue(b,p),k=i(c,y);return j.useEffect(()=>(k.itemMap.set(p,{ref:p,...m}),()=>void k.itemMap.delete(p))),j.createElement(br,{[d]:"",ref:w},x)});function h(v){const b=i(e+"CollectionConsumer",v);return j.useCallback(()=>{const x=b.collectionRef.current;if(!x)return[];const m=Array.from(x.querySelectorAll(`[${d}]`));return Array.from(b.itemMap.values()).sort((k,S)=>m.indexOf(k.ref.current)-m.indexOf(S.ref.current))},[b.collectionRef,b.itemMap])}return[{Provider:s,Slot:l,ItemSlot:u},h,r]}const ub=f.createContext(void 0);function Tm(e){const t=f.useContext(ub);return e||t||"ltr"}function db(e,t=globalThis==null?void 0:globalThis.document){const n=bt(e);f.useEffect(()=>{const r=o=>{o.key==="Escape"&&n(o)};return t.addEventListener("keydown",r),()=>t.removeEventListener("keydown",r)},[n,t])}const Vl="dismissableLayer.update",fb="dismissableLayer.pointerDownOutside",pb="dismissableLayer.focusOutside";let Zd;const hb=f.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),mb=f.forwardRef((e,t)=>{var n;const{disableOutsidePointerEvents:r=!1,onEscapeKeyDown:o,onPointerDownOutside:i,onFocusOutside:s,onInteractOutside:a,onDismiss:l,...c}=e,d=f.useContext(hb),[u,h]=f.useState(null),v=(n=u==null?void 0:u.ownerDocument)!==null&&n!==void 0?n:globalThis==null?void 0:globalThis.document,[,b]=f.useState({}),y=Ue(t,T=>h(T)),x=Array.from(d.layers),[m]=[...d.layersWithOutsidePointerEventsDisabled].slice(-1),p=x.indexOf(m),w=u?x.indexOf(u):-1,k=d.layersWithOutsidePointerEventsDisabled.size>0,S=w>=p,C=gb(T=>{const M=T.target,N=[...d.branches].some(F=>F.contains(M));!S||N||(i==null||i(T),a==null||a(T),T.defaultPrevented||l==null||l())},v),E=vb(T=>{const M=T.target;[...d.branches].some(F=>F.contains(M))||(s==null||s(T),a==null||a(T),T.defaultPrevented||l==null||l())},v);return db(T=>{w===d.layers.size-1&&(o==null||o(T),!T.defaultPrevented&&l&&(T.preventDefault(),l()))},v),f.useEffect(()=>{if(u)return r&&(d.layersWithOutsidePointerEventsDisabled.size===0&&(Zd=v.body.style.pointerEvents,v.body.style.pointerEvents="none"),d.layersWithOutsidePointerEventsDisabled.add(u)),d.layers.add(u),ef(),()=>{r&&d.layersWithOutsidePointerEventsDisabled.size===1&&(v.body.style.pointerEvents=Zd)}},[u,v,r,d]),f.useEffect(()=>()=>{u&&(d.layers.delete(u),d.layersWithOutsidePointerEventsDisabled.delete(u),ef())},[u,d]),f.useEffect(()=>{const T=()=>b({});return document.addEventListener(Vl,T),()=>document.removeEventListener(Vl,T)},[]),f.createElement(tt.div,D({},c,{ref:y,style:{pointerEvents:k?S?"auto":"none":void 0,...e.style},onFocusCapture:G(e.onFocusCapture,E.onFocusCapture),onBlurCapture:G(e.onBlurCapture,E.onBlurCapture),onPointerDownCapture:G(e.onPointerDownCapture,C.onPointerDownCapture)}))});function gb(e,t=globalThis==null?void 0:globalThis.document){const n=bt(e),r=f.useRef(!1),o=f.useRef(()=>{});return f.useEffect(()=>{const i=a=>{if(a.target&&!r.current){let c=function(){Pm(fb,n,l,{discrete:!0})};const l={originalEvent:a};a.pointerType==="touch"?(t.removeEventListener("click",o.current),o.current=c,t.addEventListener("click",o.current,{once:!0})):c()}else t.removeEventListener("click",o.current);r.current=!1},s=window.setTimeout(()=>{t.addEventListener("pointerdown",i)},0);return()=>{window.clearTimeout(s),t.removeEventListener("pointerdown",i),t.removeEventListener("click",o.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}function vb(e,t=globalThis==null?void 0:globalThis.document){const n=bt(e),r=f.useRef(!1);return f.useEffect(()=>{const o=i=>{i.target&&!r.current&&Pm(pb,n,{originalEvent:i},{discrete:!1})};return t.addEventListener("focusin",o),()=>t.removeEventListener("focusin",o)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function ef(){const e=new CustomEvent(Vl);document.dispatchEvent(e)}function Pm(e,t,n,{discrete:r}){const o=n.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?Cm(o,i):o.dispatchEvent(i)}let _a=0;function yb(){f.useEffect(()=>{var e,t;const n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",(e=n[0])!==null&&e!==void 0?e:tf()),document.body.insertAdjacentElement("beforeend",(t=n[1])!==null&&t!==void 0?t:tf()),_a++,()=>{_a===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(r=>r.remove()),_a--}},[])}function tf(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}const Na="focusScope.autoFocusOnMount",Ra="focusScope.autoFocusOnUnmount",nf={bubbles:!1,cancelable:!0},wb=f.forwardRef((e,t)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:o,onUnmountAutoFocus:i,...s}=e,[a,l]=f.useState(null),c=bt(o),d=bt(i),u=f.useRef(null),h=Ue(t,y=>l(y)),v=f.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;f.useEffect(()=>{if(r){let y=function(w){if(v.paused||!a)return;const k=w.target;a.contains(k)?u.current=k:Bt(u.current,{select:!0})},x=function(w){if(v.paused||!a)return;const k=w.relatedTarget;k!==null&&(a.contains(k)||Bt(u.current,{select:!0}))},m=function(w){if(document.activeElement===document.body)for(const S of w)S.removedNodes.length>0&&Bt(a)};document.addEventListener("focusin",y),document.addEventListener("focusout",x);const p=new MutationObserver(m);return a&&p.observe(a,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",y),document.removeEventListener("focusout",x),p.disconnect()}}},[r,a,v.paused]),f.useEffect(()=>{if(a){of.add(v);const y=document.activeElement;if(!a.contains(y)){const m=new CustomEvent(Na,nf);a.addEventListener(Na,c),a.dispatchEvent(m),m.defaultPrevented||(bb(Eb(Am(a)),{select:!0}),document.activeElement===y&&Bt(a))}return()=>{a.removeEventListener(Na,c),setTimeout(()=>{const m=new CustomEvent(Ra,nf);a.addEventListener(Ra,d),a.dispatchEvent(m),m.defaultPrevented||Bt(y??document.body,{select:!0}),a.removeEventListener(Ra,d),of.remove(v)},0)}}},[a,c,d,v]);const b=f.useCallback(y=>{if(!n&&!r||v.paused)return;const x=y.key==="Tab"&&!y.altKey&&!y.ctrlKey&&!y.metaKey,m=document.activeElement;if(x&&m){const p=y.currentTarget,[w,k]=xb(p);w&&k?!y.shiftKey&&m===k?(y.preventDefault(),n&&Bt(w,{select:!0})):y.shiftKey&&m===w&&(y.preventDefault(),n&&Bt(k,{select:!0})):m===p&&y.preventDefault()}},[n,r,v.paused]);return f.createElement(tt.div,D({tabIndex:-1},s,{ref:h,onKeyDown:b}))});function bb(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if(Bt(r,{select:t}),document.activeElement!==n)return}function xb(e){const t=Am(e),n=rf(t,e),r=rf(t.reverse(),e);return[n,r]}function Am(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const o=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||o?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function rf(e,t){for(const n of e)if(!kb(n,{upTo:t}))return n}function kb(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function Sb(e){return e instanceof HTMLInputElement&&"select"in e}function Bt(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&Sb(e)&&t&&e.select()}}const of=Cb();function Cb(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=sf(e,t),e.unshift(t)},remove(t){var n;e=sf(e,t),(n=e[0])===null||n===void 0||n.resume()}}}function sf(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function Eb(e){return e.filter(t=>t.tagName!=="A")}const kr=globalThis!=null&&globalThis.document?f.useLayoutEffect:()=>{},Tb=Yf.useId||(()=>{});let Pb=0;function Hl(e){const[t,n]=f.useState(Tb());return kr(()=>{e||n(r=>r??String(Pb++))},[e]),e||(t?`radix-${t}`:"")}const Ab=["top","right","bottom","left"],an=Math.min,De=Math.max,bs=Math.round,yi=Math.floor,ln=e=>({x:e,y:e}),_b={left:"right",right:"left",bottom:"top",top:"bottom"},Nb={start:"end",end:"start"};function Gl(e,t,n){return De(e,an(t,n))}function Mt(e,t){return typeof e=="function"?e(t):e}function $t(e){return e.split("-")[0]}function Rr(e){return e.split("-")[1]}function su(e){return e==="x"?"y":"x"}function au(e){return e==="y"?"height":"width"}function Mr(e){return["top","bottom"].includes($t(e))?"y":"x"}function lu(e){return su(Mr(e))}function Rb(e,t,n){n===void 0&&(n=!1);const r=Rr(e),o=lu(e),i=au(o);let s=o==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[i]>t.floating[i]&&(s=xs(s)),[s,xs(s)]}function Mb(e){const t=xs(e);return[Ql(e),t,Ql(t)]}function Ql(e){return e.replace(/start|end/g,t=>Nb[t])}function $b(e,t,n){const r=["left","right"],o=["right","left"],i=["top","bottom"],s=["bottom","top"];switch(e){case"top":case"bottom":return n?t?o:r:t?r:o;case"left":case"right":return t?i:s;default:return[]}}function zb(e,t,n,r){const o=Rr(e);let i=$b($t(e),n==="start",r);return o&&(i=i.map(s=>s+"-"+o),t&&(i=i.concat(i.map(Ql)))),i}function xs(e){return e.replace(/left|right|bottom|top/g,t=>_b[t])}function Ib(e){return{top:0,right:0,bottom:0,left:0,...e}}function _m(e){return typeof e!="number"?Ib(e):{top:e,right:e,bottom:e,left:e}}function ks(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function af(e,t,n){let{reference:r,floating:o}=e;const i=Mr(t),s=lu(t),a=au(s),l=$t(t),c=i==="y",d=r.x+r.width/2-o.width/2,u=r.y+r.height/2-o.height/2,h=r[a]/2-o[a]/2;let v;switch(l){case"top":v={x:d,y:r.y-o.height};break;case"bottom":v={x:d,y:r.y+r.height};break;case"right":v={x:r.x+r.width,y:u};break;case"left":v={x:r.x-o.width,y:u};break;default:v={x:r.x,y:r.y}}switch(Rr(t)){case"start":v[s]-=h*(n&&c?-1:1);break;case"end":v[s]+=h*(n&&c?-1:1);break}return v}const jb=async(e,t,n)=>{const{placement:r="bottom",strategy:o="absolute",middleware:i=[],platform:s}=n,a=i.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(t));let c=await s.getElementRects({reference:e,floating:t,strategy:o}),{x:d,y:u}=af(c,r,l),h=r,v={},b=0;for(let y=0;y<a.length;y++){const{name:x,fn:m}=a[y],{x:p,y:w,data:k,reset:S}=await m({x:d,y:u,initialPlacement:r,placement:h,strategy:o,middlewareData:v,rects:c,platform:s,elements:{reference:e,floating:t}});d=p??d,u=w??u,v={...v,[x]:{...v[x],...k}},S&&b<=50&&(b++,typeof S=="object"&&(S.placement&&(h=S.placement),S.rects&&(c=S.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:o}):S.rects),{x:d,y:u}=af(c,h,l)),y=-1)}return{x:d,y:u,placement:h,strategy:o,middlewareData:v}};async function Ro(e,t){var n;t===void 0&&(t={});const{x:r,y:o,platform:i,rects:s,elements:a,strategy:l}=e,{boundary:c="clippingAncestors",rootBoundary:d="viewport",elementContext:u="floating",altBoundary:h=!1,padding:v=0}=Mt(t,e),b=_m(v),x=a[h?u==="floating"?"reference":"floating":u],m=ks(await i.getClippingRect({element:(n=await(i.isElement==null?void 0:i.isElement(x)))==null||n?x:x.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(a.floating)),boundary:c,rootBoundary:d,strategy:l})),p=u==="floating"?{...s.floating,x:r,y:o}:s.reference,w=await(i.getOffsetParent==null?void 0:i.getOffsetParent(a.floating)),k=await(i.isElement==null?void 0:i.isElement(w))?await(i.getScale==null?void 0:i.getScale(w))||{x:1,y:1}:{x:1,y:1},S=ks(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:p,offsetParent:w,strategy:l}):p);return{top:(m.top-S.top+b.top)/k.y,bottom:(S.bottom-m.bottom+b.bottom)/k.y,left:(m.left-S.left+b.left)/k.x,right:(S.right-m.right+b.right)/k.x}}const Lb=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:r,placement:o,rects:i,platform:s,elements:a,middlewareData:l}=t,{element:c,padding:d=0}=Mt(e,t)||{};if(c==null)return{};const u=_m(d),h={x:n,y:r},v=lu(o),b=au(v),y=await s.getDimensions(c),x=v==="y",m=x?"top":"left",p=x?"bottom":"right",w=x?"clientHeight":"clientWidth",k=i.reference[b]+i.reference[v]-h[v]-i.floating[b],S=h[v]-i.reference[v],C=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c));let E=C?C[w]:0;(!E||!await(s.isElement==null?void 0:s.isElement(C)))&&(E=a.floating[w]||i.floating[b]);const T=k/2-S/2,M=E/2-y[b]/2-1,N=an(u[m],M),F=an(u[p],M),z=N,X=E-y[b]-F,B=E/2-y[b]/2+T,V=Gl(z,B,X),J=!l.arrow&&Rr(o)!=null&&B!==V&&i.reference[b]/2-(B<z?N:F)-y[b]/2<0,W=J?B<z?B-z:B-X:0;return{[v]:h[v]+W,data:{[v]:V,centerOffset:B-V-W,...J&&{alignmentOffset:W}},reset:J}}}),Db=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:o,middlewareData:i,rects:s,initialPlacement:a,platform:l,elements:c}=t,{mainAxis:d=!0,crossAxis:u=!0,fallbackPlacements:h,fallbackStrategy:v="bestFit",fallbackAxisSideDirection:b="none",flipAlignment:y=!0,...x}=Mt(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};const m=$t(o),p=$t(a)===a,w=await(l.isRTL==null?void 0:l.isRTL(c.floating)),k=h||(p||!y?[xs(a)]:Mb(a));!h&&b!=="none"&&k.push(...zb(a,y,b,w));const S=[a,...k],C=await Ro(t,x),E=[];let T=((r=i.flip)==null?void 0:r.overflows)||[];if(d&&E.push(C[m]),u){const z=Rb(o,s,w);E.push(C[z[0]],C[z[1]])}if(T=[...T,{placement:o,overflows:E}],!E.every(z=>z<=0)){var M,N;const z=(((M=i.flip)==null?void 0:M.index)||0)+1,X=S[z];if(X)return{data:{index:z,overflows:T},reset:{placement:X}};let B=(N=T.filter(V=>V.overflows[0]<=0).sort((V,J)=>V.overflows[1]-J.overflows[1])[0])==null?void 0:N.placement;if(!B)switch(v){case"bestFit":{var F;const V=(F=T.map(J=>[J.placement,J.overflows.filter(W=>W>0).reduce((W,_)=>W+_,0)]).sort((J,W)=>J[1]-W[1])[0])==null?void 0:F[0];V&&(B=V);break}case"initialPlacement":B=a;break}if(o!==B)return{reset:{placement:B}}}return{}}}};function lf(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function cf(e){return Ab.some(t=>e[t]>=0)}const Ob=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:n}=t,{strategy:r="referenceHidden",...o}=Mt(e,t);switch(r){case"referenceHidden":{const i=await Ro(t,{...o,elementContext:"reference"}),s=lf(i,n.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:cf(s)}}}case"escaped":{const i=await Ro(t,{...o,altBoundary:!0}),s=lf(i,n.floating);return{data:{escapedOffsets:s,escaped:cf(s)}}}default:return{}}}}};async function Fb(e,t){const{placement:n,platform:r,elements:o}=e,i=await(r.isRTL==null?void 0:r.isRTL(o.floating)),s=$t(n),a=Rr(n),l=Mr(n)==="y",c=["left","top"].includes(s)?-1:1,d=i&&l?-1:1,u=Mt(t,e);let{mainAxis:h,crossAxis:v,alignmentAxis:b}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return a&&typeof b=="number"&&(v=a==="end"?b*-1:b),l?{x:v*d,y:h*c}:{x:h*c,y:v*d}}const Bb=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var n,r;const{x:o,y:i,placement:s,middlewareData:a}=t,l=await Fb(t,e);return s===((n=a.offset)==null?void 0:n.placement)&&(r=a.arrow)!=null&&r.alignmentOffset?{}:{x:o+l.x,y:i+l.y,data:{...l,placement:s}}}}},Wb=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:o}=t,{mainAxis:i=!0,crossAxis:s=!1,limiter:a={fn:x=>{let{x:m,y:p}=x;return{x:m,y:p}}},...l}=Mt(e,t),c={x:n,y:r},d=await Ro(t,l),u=Mr($t(o)),h=su(u);let v=c[h],b=c[u];if(i){const x=h==="y"?"top":"left",m=h==="y"?"bottom":"right",p=v+d[x],w=v-d[m];v=Gl(p,v,w)}if(s){const x=u==="y"?"top":"left",m=u==="y"?"bottom":"right",p=b+d[x],w=b-d[m];b=Gl(p,b,w)}const y=a.fn({...t,[h]:v,[u]:b});return{...y,data:{x:y.x-n,y:y.y-r}}}}},Ub=function(e){return e===void 0&&(e={}),{options:e,fn(t){const{x:n,y:r,placement:o,rects:i,middlewareData:s}=t,{offset:a=0,mainAxis:l=!0,crossAxis:c=!0}=Mt(e,t),d={x:n,y:r},u=Mr(o),h=su(u);let v=d[h],b=d[u];const y=Mt(a,t),x=typeof y=="number"?{mainAxis:y,crossAxis:0}:{mainAxis:0,crossAxis:0,...y};if(l){const w=h==="y"?"height":"width",k=i.reference[h]-i.floating[w]+x.mainAxis,S=i.reference[h]+i.reference[w]-x.mainAxis;v<k?v=k:v>S&&(v=S)}if(c){var m,p;const w=h==="y"?"width":"height",k=["top","left"].includes($t(o)),S=i.reference[u]-i.floating[w]+(k&&((m=s.offset)==null?void 0:m[u])||0)+(k?0:x.crossAxis),C=i.reference[u]+i.reference[w]+(k?0:((p=s.offset)==null?void 0:p[u])||0)-(k?x.crossAxis:0);b<S?b=S:b>C&&(b=C)}return{[h]:v,[u]:b}}}},Vb=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:n,rects:r,platform:o,elements:i}=t,{apply:s=()=>{},...a}=Mt(e,t),l=await Ro(t,a),c=$t(n),d=Rr(n),u=Mr(n)==="y",{width:h,height:v}=r.floating;let b,y;c==="top"||c==="bottom"?(b=c,y=d===(await(o.isRTL==null?void 0:o.isRTL(i.floating))?"start":"end")?"left":"right"):(y=c,b=d==="end"?"top":"bottom");const x=v-l[b],m=h-l[y],p=!t.middlewareData.shift;let w=x,k=m;if(u){const C=h-l.left-l.right;k=d||p?an(m,C):C}else{const C=v-l.top-l.bottom;w=d||p?an(x,C):C}if(p&&!d){const C=De(l.left,0),E=De(l.right,0),T=De(l.top,0),M=De(l.bottom,0);u?k=h-2*(C!==0||E!==0?C+E:De(l.left,l.right)):w=v-2*(T!==0||M!==0?T+M:De(l.top,l.bottom))}await s({...t,availableWidth:k,availableHeight:w});const S=await o.getDimensions(i.floating);return h!==S.width||v!==S.height?{reset:{rects:!0}}:{}}}};function cn(e){return Nm(e)?(e.nodeName||"").toLowerCase():"#document"}function Be(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function jt(e){var t;return(t=(Nm(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Nm(e){return e instanceof Node||e instanceof Be(e).Node}function zt(e){return e instanceof Element||e instanceof Be(e).Element}function xt(e){return e instanceof HTMLElement||e instanceof Be(e).HTMLElement}function uf(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Be(e).ShadowRoot}function Go(e){const{overflow:t,overflowX:n,overflowY:r,display:o}=et(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(o)}function Hb(e){return["table","td","th"].includes(cn(e))}function cu(e){const t=uu(),n=et(e);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(r=>(n.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(n.contain||"").includes(r))}function Gb(e){let t=Sr(e);for(;xt(t)&&!Ks(t);){if(cu(t))return t;t=Sr(t)}return null}function uu(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Ks(e){return["html","body","#document"].includes(cn(e))}function et(e){return Be(e).getComputedStyle(e)}function Ys(e){return zt(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function Sr(e){if(cn(e)==="html")return e;const t=e.assignedSlot||e.parentNode||uf(e)&&e.host||jt(e);return uf(t)?t.host:t}function Rm(e){const t=Sr(e);return Ks(t)?e.ownerDocument?e.ownerDocument.body:e.body:xt(t)&&Go(t)?t:Rm(t)}function Mo(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const o=Rm(e),i=o===((r=e.ownerDocument)==null?void 0:r.body),s=Be(o);return i?t.concat(s,s.visualViewport||[],Go(o)?o:[],s.frameElement&&n?Mo(s.frameElement):[]):t.concat(o,Mo(o,[],n))}function Mm(e){const t=et(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const o=xt(e),i=o?e.offsetWidth:n,s=o?e.offsetHeight:r,a=bs(n)!==i||bs(r)!==s;return a&&(n=i,r=s),{width:n,height:r,$:a}}function du(e){return zt(e)?e:e.contextElement}function ar(e){const t=du(e);if(!xt(t))return ln(1);const n=t.getBoundingClientRect(),{width:r,height:o,$:i}=Mm(t);let s=(i?bs(n.width):n.width)/r,a=(i?bs(n.height):n.height)/o;return(!s||!Number.isFinite(s))&&(s=1),(!a||!Number.isFinite(a))&&(a=1),{x:s,y:a}}const Qb=ln(0);function $m(e){const t=Be(e);return!uu()||!t.visualViewport?Qb:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Kb(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==Be(e)?!1:t}function Nn(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const o=e.getBoundingClientRect(),i=du(e);let s=ln(1);t&&(r?zt(r)&&(s=ar(r)):s=ar(e));const a=Kb(i,n,r)?$m(i):ln(0);let l=(o.left+a.x)/s.x,c=(o.top+a.y)/s.y,d=o.width/s.x,u=o.height/s.y;if(i){const h=Be(i),v=r&&zt(r)?Be(r):r;let b=h,y=b.frameElement;for(;y&&r&&v!==b;){const x=ar(y),m=y.getBoundingClientRect(),p=et(y),w=m.left+(y.clientLeft+parseFloat(p.paddingLeft))*x.x,k=m.top+(y.clientTop+parseFloat(p.paddingTop))*x.y;l*=x.x,c*=x.y,d*=x.x,u*=x.y,l+=w,c+=k,b=Be(y),y=b.frameElement}}return ks({width:d,height:u,x:l,y:c})}const Yb=[":popover-open",":modal"];function zm(e){return Yb.some(t=>{try{return e.matches(t)}catch{return!1}})}function qb(e){let{elements:t,rect:n,offsetParent:r,strategy:o}=e;const i=o==="fixed",s=jt(r),a=t?zm(t.floating):!1;if(r===s||a&&i)return n;let l={scrollLeft:0,scrollTop:0},c=ln(1);const d=ln(0),u=xt(r);if((u||!u&&!i)&&((cn(r)!=="body"||Go(s))&&(l=Ys(r)),xt(r))){const h=Nn(r);c=ar(r),d.x=h.x+r.clientLeft,d.y=h.y+r.clientTop}return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-l.scrollLeft*c.x+d.x,y:n.y*c.y-l.scrollTop*c.y+d.y}}function Jb(e){return Array.from(e.getClientRects())}function Im(e){return Nn(jt(e)).left+Ys(e).scrollLeft}function Xb(e){const t=jt(e),n=Ys(e),r=e.ownerDocument.body,o=De(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),i=De(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let s=-n.scrollLeft+Im(e);const a=-n.scrollTop;return et(r).direction==="rtl"&&(s+=De(t.clientWidth,r.clientWidth)-o),{width:o,height:i,x:s,y:a}}function Zb(e,t){const n=Be(e),r=jt(e),o=n.visualViewport;let i=r.clientWidth,s=r.clientHeight,a=0,l=0;if(o){i=o.width,s=o.height;const c=uu();(!c||c&&t==="fixed")&&(a=o.offsetLeft,l=o.offsetTop)}return{width:i,height:s,x:a,y:l}}function ex(e,t){const n=Nn(e,!0,t==="fixed"),r=n.top+e.clientTop,o=n.left+e.clientLeft,i=xt(e)?ar(e):ln(1),s=e.clientWidth*i.x,a=e.clientHeight*i.y,l=o*i.x,c=r*i.y;return{width:s,height:a,x:l,y:c}}function df(e,t,n){let r;if(t==="viewport")r=Zb(e,n);else if(t==="document")r=Xb(jt(e));else if(zt(t))r=ex(t,n);else{const o=$m(e);r={...t,x:t.x-o.x,y:t.y-o.y}}return ks(r)}function jm(e,t){const n=Sr(e);return n===t||!zt(n)||Ks(n)?!1:et(n).position==="fixed"||jm(n,t)}function tx(e,t){const n=t.get(e);if(n)return n;let r=Mo(e,[],!1).filter(a=>zt(a)&&cn(a)!=="body"),o=null;const i=et(e).position==="fixed";let s=i?Sr(e):e;for(;zt(s)&&!Ks(s);){const a=et(s),l=cu(s);!l&&a.position==="fixed"&&(o=null),(i?!l&&!o:!l&&a.position==="static"&&!!o&&["absolute","fixed"].includes(o.position)||Go(s)&&!l&&jm(e,s))?r=r.filter(d=>d!==s):o=a,s=Sr(s)}return t.set(e,r),r}function nx(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e;const s=[...n==="clippingAncestors"?tx(t,this._c):[].concat(n),r],a=s[0],l=s.reduce((c,d)=>{const u=df(t,d,o);return c.top=De(u.top,c.top),c.right=an(u.right,c.right),c.bottom=an(u.bottom,c.bottom),c.left=De(u.left,c.left),c},df(t,a,o));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function rx(e){const{width:t,height:n}=Mm(e);return{width:t,height:n}}function ox(e,t,n){const r=xt(t),o=jt(t),i=n==="fixed",s=Nn(e,!0,i,t);let a={scrollLeft:0,scrollTop:0};const l=ln(0);if(r||!r&&!i)if((cn(t)!=="body"||Go(o))&&(a=Ys(t)),r){const u=Nn(t,!0,i,t);l.x=u.x+t.clientLeft,l.y=u.y+t.clientTop}else o&&(l.x=Im(o));const c=s.left+a.scrollLeft-l.x,d=s.top+a.scrollTop-l.y;return{x:c,y:d,width:s.width,height:s.height}}function ff(e,t){return!xt(e)||et(e).position==="fixed"?null:t?t(e):e.offsetParent}function Lm(e,t){const n=Be(e);if(!xt(e)||zm(e))return n;let r=ff(e,t);for(;r&&Hb(r)&&et(r).position==="static";)r=ff(r,t);return r&&(cn(r)==="html"||cn(r)==="body"&&et(r).position==="static"&&!cu(r))?n:r||Gb(e)||n}const ix=async function(e){const t=this.getOffsetParent||Lm,n=this.getDimensions;return{reference:ox(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,...await n(e.floating)}}};function sx(e){return et(e).direction==="rtl"}const ax={convertOffsetParentRelativeRectToViewportRelativeRect:qb,getDocumentElement:jt,getClippingRect:nx,getOffsetParent:Lm,getElementRects:ix,getClientRects:Jb,getDimensions:rx,getScale:ar,isElement:zt,isRTL:sx};function lx(e,t){let n=null,r;const o=jt(e);function i(){var a;clearTimeout(r),(a=n)==null||a.disconnect(),n=null}function s(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),i();const{left:c,top:d,width:u,height:h}=e.getBoundingClientRect();if(a||t(),!u||!h)return;const v=yi(d),b=yi(o.clientWidth-(c+u)),y=yi(o.clientHeight-(d+h)),x=yi(c),p={rootMargin:-v+"px "+-b+"px "+-y+"px "+-x+"px",threshold:De(0,an(1,l))||1};let w=!0;function k(S){const C=S[0].intersectionRatio;if(C!==l){if(!w)return s();C?s(!1,C):r=setTimeout(()=>{s(!1,1e-7)},100)}w=!1}try{n=new IntersectionObserver(k,{...p,root:o.ownerDocument})}catch{n=new IntersectionObserver(k,p)}n.observe(e)}return s(!0),i}function cx(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:o=!0,ancestorResize:i=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=r,c=du(e),d=o||i?[...c?Mo(c):[],...Mo(t)]:[];d.forEach(m=>{o&&m.addEventListener("scroll",n,{passive:!0}),i&&m.addEventListener("resize",n)});const u=c&&a?lx(c,n):null;let h=-1,v=null;s&&(v=new ResizeObserver(m=>{let[p]=m;p&&p.target===c&&v&&(v.unobserve(t),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var w;(w=v)==null||w.observe(t)})),n()}),c&&!l&&v.observe(c),v.observe(t));let b,y=l?Nn(e):null;l&&x();function x(){const m=Nn(e);y&&(m.x!==y.x||m.y!==y.y||m.width!==y.width||m.height!==y.height)&&n(),y=m,b=requestAnimationFrame(x)}return n(),()=>{var m;d.forEach(p=>{o&&p.removeEventListener("scroll",n),i&&p.removeEventListener("resize",n)}),u==null||u(),(m=v)==null||m.disconnect(),v=null,l&&cancelAnimationFrame(b)}}const ux=Wb,dx=Db,fx=Vb,px=Ob,pf=Lb,hx=Ub,mx=(e,t,n)=>{const r=new Map,o={platform:ax,...n},i={...o.platform,_c:r};return jb(e,t,{...o,platform:i})},gx=e=>{function t(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:e,fn(n){const{element:r,padding:o}=typeof e=="function"?e(n):e;return r&&t(r)?r.current!=null?pf({element:r.current,padding:o}).fn(n):{}:r?pf({element:r,padding:o}).fn(n):{}}}};var Oi=typeof document<"u"?f.useLayoutEffect:f.useEffect;function Ss(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,r,o;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(r=n;r--!==0;)if(!Ss(e[r],t[r]))return!1;return!0}if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!{}.hasOwnProperty.call(t,o[r]))return!1;for(r=n;r--!==0;){const i=o[r];if(!(i==="_owner"&&e.$$typeof)&&!Ss(e[i],t[i]))return!1}return!0}return e!==e&&t!==t}function Dm(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function hf(e,t){const n=Dm(e);return Math.round(t*n)/n}function mf(e){const t=f.useRef(e);return Oi(()=>{t.current=e}),t}function vx(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:r=[],platform:o,elements:{reference:i,floating:s}={},transform:a=!0,whileElementsMounted:l,open:c}=e,[d,u]=f.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[h,v]=f.useState(r);Ss(h,r)||v(r);const[b,y]=f.useState(null),[x,m]=f.useState(null),p=f.useCallback(W=>{W!==C.current&&(C.current=W,y(W))},[]),w=f.useCallback(W=>{W!==E.current&&(E.current=W,m(W))},[]),k=i||b,S=s||x,C=f.useRef(null),E=f.useRef(null),T=f.useRef(d),M=l!=null,N=mf(l),F=mf(o),z=f.useCallback(()=>{if(!C.current||!E.current)return;const W={placement:t,strategy:n,middleware:h};F.current&&(W.platform=F.current),mx(C.current,E.current,W).then(_=>{const P={..._,isPositioned:!0};X.current&&!Ss(T.current,P)&&(T.current=P,Wo.flushSync(()=>{u(P)}))})},[h,t,n,F]);Oi(()=>{c===!1&&T.current.isPositioned&&(T.current.isPositioned=!1,u(W=>({...W,isPositioned:!1})))},[c]);const X=f.useRef(!1);Oi(()=>(X.current=!0,()=>{X.current=!1}),[]),Oi(()=>{if(k&&(C.current=k),S&&(E.current=S),k&&S){if(N.current)return N.current(k,S,z);z()}},[k,S,z,N,M]);const B=f.useMemo(()=>({reference:C,floating:E,setReference:p,setFloating:w}),[p,w]),V=f.useMemo(()=>({reference:k,floating:S}),[k,S]),J=f.useMemo(()=>{const W={position:n,left:0,top:0};if(!V.floating)return W;const _=hf(V.floating,d.x),P=hf(V.floating,d.y);return a?{...W,transform:"translate("+_+"px, "+P+"px)",...Dm(V.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:_,top:P}},[n,a,V.floating,d.x,d.y]);return f.useMemo(()=>({...d,update:z,refs:B,elements:V,floatingStyles:J}),[d,z,B,V,J])}function yx(e){const[t,n]=f.useState(void 0);return kr(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(o=>{if(!Array.isArray(o)||!o.length)return;const i=o[0];let s,a;if("borderBoxSize"in i){const l=i.borderBoxSize,c=Array.isArray(l)?l[0]:l;s=c.inlineSize,a=c.blockSize}else s=e.offsetWidth,a=e.offsetHeight;n({width:s,height:a})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else n(void 0)},[e]),t}const Om="Popper",[Fm,Bm]=Ho(Om),[wx,Wm]=Fm(Om),bx=e=>{const{__scopePopper:t,children:n}=e,[r,o]=f.useState(null);return f.createElement(wx,{scope:t,anchor:r,onAnchorChange:o},n)},xx="PopperAnchor",kx=f.forwardRef((e,t)=>{const{__scopePopper:n,virtualRef:r,...o}=e,i=Wm(xx,n),s=f.useRef(null),a=Ue(t,s);return f.useEffect(()=>{i.onAnchorChange((r==null?void 0:r.current)||s.current)}),r?null:f.createElement(tt.div,D({},o,{ref:a}))}),Um="PopperContent",[Sx,mC]=Fm(Um),Cx=f.forwardRef((e,t)=>{var n,r,o,i,s,a,l,c;const{__scopePopper:d,side:u="bottom",sideOffset:h=0,align:v="center",alignOffset:b=0,arrowPadding:y=0,avoidCollisions:x=!0,collisionBoundary:m=[],collisionPadding:p=0,sticky:w="partial",hideWhenDetached:k=!1,updatePositionStrategy:S="optimized",onPlaced:C,...E}=e,T=Wm(Um,d),[M,N]=f.useState(null),F=Ue(t,zr=>N(zr)),[z,X]=f.useState(null),B=yx(z),V=(n=B==null?void 0:B.width)!==null&&n!==void 0?n:0,J=(r=B==null?void 0:B.height)!==null&&r!==void 0?r:0,W=u+(v!=="center"?"-"+v:""),_=typeof p=="number"?p:{top:0,right:0,bottom:0,left:0,...p},P=Array.isArray(m)?m:[m],$=P.length>0,L={padding:_,boundary:P.filter(Ex),altBoundary:$},{refs:Q,floatingStyles:ze,placement:Ie,isPositioned:rt,middlewareData:de}=vx({strategy:"fixed",placement:W,whileElementsMounted:(...zr)=>cx(...zr,{animationFrame:S==="always"}),elements:{reference:T.anchor},middleware:[Bb({mainAxis:h+J,alignmentAxis:b}),x&&ux({mainAxis:!0,crossAxis:!1,limiter:w==="partial"?hx():void 0,...L}),x&&dx({...L}),fx({...L,apply:({elements:zr,rects:Pu,availableWidth:av,availableHeight:lv})=>{const{width:cv,height:uv}=Pu.reference,Jo=zr.floating.style;Jo.setProperty("--radix-popper-available-width",`${av}px`),Jo.setProperty("--radix-popper-available-height",`${lv}px`),Jo.setProperty("--radix-popper-anchor-width",`${cv}px`),Jo.setProperty("--radix-popper-anchor-height",`${uv}px`)}}),z&&gx({element:z,padding:y}),Tx({arrowWidth:V,arrowHeight:J}),k&&px({strategy:"referenceHidden",...L})]}),[je,Yo]=Vm(Ie),Ae=bt(C);kr(()=>{rt&&(Ae==null||Ae())},[rt,Ae]);const qo=(o=de.arrow)===null||o===void 0?void 0:o.x,rv=(i=de.arrow)===null||i===void 0?void 0:i.y,ov=((s=de.arrow)===null||s===void 0?void 0:s.centerOffset)!==0,[iv,sv]=f.useState();return kr(()=>{M&&sv(window.getComputedStyle(M).zIndex)},[M]),f.createElement("div",{ref:Q.setFloating,"data-radix-popper-content-wrapper":"",style:{...ze,transform:rt?ze.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:iv,"--radix-popper-transform-origin":[(a=de.transformOrigin)===null||a===void 0?void 0:a.x,(l=de.transformOrigin)===null||l===void 0?void 0:l.y].join(" ")},dir:e.dir},f.createElement(Sx,{scope:d,placedSide:je,onArrowChange:X,arrowX:qo,arrowY:rv,shouldHideArrow:ov},f.createElement(tt.div,D({"data-side":je,"data-align":Yo},E,{ref:F,style:{...E.style,animation:rt?void 0:"none",opacity:(c=de.hide)!==null&&c!==void 0&&c.referenceHidden?0:void 0}}))))});function Ex(e){return e!==null}const Tx=e=>({name:"transformOrigin",options:e,fn(t){var n,r,o,i,s;const{placement:a,rects:l,middlewareData:c}=t,u=((n=c.arrow)===null||n===void 0?void 0:n.centerOffset)!==0,h=u?0:e.arrowWidth,v=u?0:e.arrowHeight,[b,y]=Vm(a),x={start:"0%",center:"50%",end:"100%"}[y],m=((r=(o=c.arrow)===null||o===void 0?void 0:o.x)!==null&&r!==void 0?r:0)+h/2,p=((i=(s=c.arrow)===null||s===void 0?void 0:s.y)!==null&&i!==void 0?i:0)+v/2;let w="",k="";return b==="bottom"?(w=u?x:`${m}px`,k=`${-v}px`):b==="top"?(w=u?x:`${m}px`,k=`${l.floating.height+v}px`):b==="right"?(w=`${-v}px`,k=u?x:`${p}px`):b==="left"&&(w=`${l.floating.width+v}px`,k=u?x:`${p}px`),{data:{x:w,y:k}}}});function Vm(e){const[t,n="center"]=e.split("-");return[t,n]}const Px=bx,Ax=kx,_x=Cx,Nx=f.forwardRef((e,t)=>{var n;const{container:r=globalThis==null||(n=globalThis.document)===null||n===void 0?void 0:n.body,...o}=e;return r?Dy.createPortal(f.createElement(tt.div,D({},o,{ref:t})),r):null});function Rx(e,t){return f.useReducer((n,r)=>{const o=t[n][r];return o??n},e)}const Qo=e=>{const{present:t,children:n}=e,r=Mx(t),o=typeof n=="function"?n({present:r.isPresent}):f.Children.only(n),i=Ue(r.ref,o.ref);return typeof n=="function"||r.isPresent?f.cloneElement(o,{ref:i}):null};Qo.displayName="Presence";function Mx(e){const[t,n]=f.useState(),r=f.useRef({}),o=f.useRef(e),i=f.useRef("none"),s=e?"mounted":"unmounted",[a,l]=Rx(s,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return f.useEffect(()=>{const c=wi(r.current);i.current=a==="mounted"?c:"none"},[a]),kr(()=>{const c=r.current,d=o.current;if(d!==e){const h=i.current,v=wi(c);e?l("MOUNT"):v==="none"||(c==null?void 0:c.display)==="none"?l("UNMOUNT"):l(d&&h!==v?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,l]),kr(()=>{if(t){const c=u=>{const v=wi(r.current).includes(u.animationName);u.target===t&&v&&Wo.flushSync(()=>l("ANIMATION_END"))},d=u=>{u.target===t&&(i.current=wi(r.current))};return t.addEventListener("animationstart",d),t.addEventListener("animationcancel",c),t.addEventListener("animationend",c),()=>{t.removeEventListener("animationstart",d),t.removeEventListener("animationcancel",c),t.removeEventListener("animationend",c)}}else l("ANIMATION_END")},[t,l]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:f.useCallback(c=>{c&&(r.current=getComputedStyle(c)),n(c)},[])}}function wi(e){return(e==null?void 0:e.animationName)||"none"}const Ma="rovingFocusGroup.onEntryFocus",$x={bubbles:!1,cancelable:!0},fu="RovingFocusGroup",[Kl,Hm,zx]=Em(fu),[Ix,Gm]=Ho(fu,[zx]),[jx,Lx]=Ix(fu),Dx=f.forwardRef((e,t)=>f.createElement(Kl.Provider,{scope:e.__scopeRovingFocusGroup},f.createElement(Kl.Slot,{scope:e.__scopeRovingFocusGroup},f.createElement(Ox,D({},e,{ref:t}))))),Ox=f.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:n,orientation:r,loop:o=!1,dir:i,currentTabStopId:s,defaultCurrentTabStopId:a,onCurrentTabStopIdChange:l,onEntryFocus:c,...d}=e,u=f.useRef(null),h=Ue(t,u),v=Tm(i),[b=null,y]=Sm({prop:s,defaultProp:a,onChange:l}),[x,m]=f.useState(!1),p=bt(c),w=Hm(n),k=f.useRef(!1),[S,C]=f.useState(0);return f.useEffect(()=>{const E=u.current;if(E)return E.addEventListener(Ma,p),()=>E.removeEventListener(Ma,p)},[p]),f.createElement(jx,{scope:n,orientation:r,dir:v,loop:o,currentTabStopId:b,onItemFocus:f.useCallback(E=>y(E),[y]),onItemShiftTab:f.useCallback(()=>m(!0),[]),onFocusableItemAdd:f.useCallback(()=>C(E=>E+1),[]),onFocusableItemRemove:f.useCallback(()=>C(E=>E-1),[])},f.createElement(tt.div,D({tabIndex:x||S===0?-1:0,"data-orientation":r},d,{ref:h,style:{outline:"none",...e.style},onMouseDown:G(e.onMouseDown,()=>{k.current=!0}),onFocus:G(e.onFocus,E=>{const T=!k.current;if(E.target===E.currentTarget&&T&&!x){const M=new CustomEvent(Ma,$x);if(E.currentTarget.dispatchEvent(M),!M.defaultPrevented){const N=w().filter(V=>V.focusable),F=N.find(V=>V.active),z=N.find(V=>V.id===b),B=[F,z,...N].filter(Boolean).map(V=>V.ref.current);Qm(B)}}k.current=!1}),onBlur:G(e.onBlur,()=>m(!1))})))}),Fx="RovingFocusGroupItem",Bx=f.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:n,focusable:r=!0,active:o=!1,tabStopId:i,...s}=e,a=Hl(),l=i||a,c=Lx(Fx,n),d=c.currentTabStopId===l,u=Hm(n),{onFocusableItemAdd:h,onFocusableItemRemove:v}=c;return f.useEffect(()=>{if(r)return h(),()=>v()},[r,h,v]),f.createElement(Kl.ItemSlot,{scope:n,id:l,focusable:r,active:o},f.createElement(tt.span,D({tabIndex:d?0:-1,"data-orientation":c.orientation},s,{ref:t,onMouseDown:G(e.onMouseDown,b=>{r?c.onItemFocus(l):b.preventDefault()}),onFocus:G(e.onFocus,()=>c.onItemFocus(l)),onKeyDown:G(e.onKeyDown,b=>{if(b.key==="Tab"&&b.shiftKey){c.onItemShiftTab();return}if(b.target!==b.currentTarget)return;const y=Vx(b,c.orientation,c.dir);if(y!==void 0){b.preventDefault();let m=u().filter(p=>p.focusable).map(p=>p.ref.current);if(y==="last")m.reverse();else if(y==="prev"||y==="next"){y==="prev"&&m.reverse();const p=m.indexOf(b.currentTarget);m=c.loop?Hx(m,p+1):m.slice(p+1)}setTimeout(()=>Qm(m))}})})))}),Wx={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function Ux(e,t){return t!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function Vx(e,t,n){const r=Ux(e.key,n);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(r))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(r)))return Wx[r]}function Qm(e){const t=document.activeElement;for(const n of e)if(n===t||(n.focus(),document.activeElement!==t))return}function Hx(e,t){return e.map((n,r)=>e[(t+r)%e.length])}const Gx=Dx,Qx=Bx;var Kx=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},Dn=new WeakMap,bi=new WeakMap,xi={},$a=0,Km=function(e){return e&&(e.host||Km(e.parentNode))},Yx=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=Km(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},qx=function(e,t,n,r){var o=Yx(t,Array.isArray(e)?e:[e]);xi[n]||(xi[n]=new WeakMap);var i=xi[n],s=[],a=new Set,l=new Set(o),c=function(u){!u||a.has(u)||(a.add(u),c(u.parentNode))};o.forEach(c);var d=function(u){!u||l.has(u)||Array.prototype.forEach.call(u.children,function(h){if(a.has(h))d(h);else{var v=h.getAttribute(r),b=v!==null&&v!=="false",y=(Dn.get(h)||0)+1,x=(i.get(h)||0)+1;Dn.set(h,y),i.set(h,x),s.push(h),y===1&&b&&bi.set(h,!0),x===1&&h.setAttribute(n,"true"),b||h.setAttribute(r,"true")}})};return d(t),a.clear(),$a++,function(){s.forEach(function(u){var h=Dn.get(u)-1,v=i.get(u)-1;Dn.set(u,h),i.set(u,v),h||(bi.has(u)||u.removeAttribute(r),bi.delete(u)),v||u.removeAttribute(n)}),$a--,$a||(Dn=new WeakMap,Dn=new WeakMap,bi=new WeakMap,xi={})}},Jx=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=t||Kx(e);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),qx(r,o,n,"aria-hidden")):function(){return null}},vt=function(){return vt=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},vt.apply(this,arguments)};function Ym(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function Xx(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var Fi="right-scroll-bar-position",Bi="width-before-scroll-bar",Zx="with-scroll-bars-hidden",e2="--removed-body-scroll-bar-size";function za(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function t2(e,t){var n=f.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var o=n.value;o!==r&&(n.value=r,n.callback(r,o))}}}})[0];return n.callback=t,n.facade}var gf=new WeakMap;function n2(e,t){var n=t2(t||null,function(r){return e.forEach(function(o){return za(o,r)})});return f.useLayoutEffect(function(){var r=gf.get(n);if(r){var o=new Set(r),i=new Set(e),s=n.current;o.forEach(function(a){i.has(a)||za(a,null)}),i.forEach(function(a){o.has(a)||za(a,s)})}gf.set(n,e)},[e]),n}function r2(e){return e}function o2(e,t){t===void 0&&(t=r2);var n=[],r=!1,o={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(i){var s=t(i,r);return n.push(s),function(){n=n.filter(function(a){return a!==s})}},assignSyncMedium:function(i){for(r=!0;n.length;){var s=n;n=[],s.forEach(i)}n={push:function(a){return i(a)},filter:function(){return n}}},assignMedium:function(i){r=!0;var s=[];if(n.length){var a=n;n=[],a.forEach(i),s=n}var l=function(){var d=s;s=[],d.forEach(i)},c=function(){return Promise.resolve().then(l)};c(),n={push:function(d){s.push(d),c()},filter:function(d){return s=s.filter(d),n}}}};return o}function i2(e){e===void 0&&(e={});var t=o2(null);return t.options=vt({async:!0,ssr:!1},e),t}var qm=function(e){var t=e.sideCar,n=Ym(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return f.createElement(r,vt({},n))};qm.isSideCarExport=!0;function s2(e,t){return e.useMedium(t),qm}var Jm=i2(),Ia=function(){},qs=f.forwardRef(function(e,t){var n=f.useRef(null),r=f.useState({onScrollCapture:Ia,onWheelCapture:Ia,onTouchMoveCapture:Ia}),o=r[0],i=r[1],s=e.forwardProps,a=e.children,l=e.className,c=e.removeScrollBar,d=e.enabled,u=e.shards,h=e.sideCar,v=e.noIsolation,b=e.inert,y=e.allowPinchZoom,x=e.as,m=x===void 0?"div":x,p=Ym(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),w=h,k=n2([n,t]),S=vt(vt({},p),o);return f.createElement(f.Fragment,null,d&&f.createElement(w,{sideCar:Jm,removeScrollBar:c,shards:u,noIsolation:v,inert:b,setCallbacks:i,allowPinchZoom:!!y,lockRef:n}),s?f.cloneElement(f.Children.only(a),vt(vt({},S),{ref:k})):f.createElement(m,vt({},S,{className:l,ref:k}),a))});qs.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};qs.classNames={fullWidth:Bi,zeroRight:Fi};var a2=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function l2(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=a2();return t&&e.setAttribute("nonce",t),e}function c2(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function u2(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var d2=function(){var e=0,t=null;return{add:function(n){e==0&&(t=l2())&&(c2(t,n),u2(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},f2=function(){var e=d2();return function(t,n){f.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},Xm=function(){var e=f2(),t=function(n){var r=n.styles,o=n.dynamic;return e(r,o),null};return t},p2={left:0,top:0,right:0,gap:0},ja=function(e){return parseInt(e||"",10)||0},h2=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],o=t[e==="padding"?"paddingRight":"marginRight"];return[ja(n),ja(r),ja(o)]},m2=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return p2;var t=h2(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},g2=Xm(),Cs="data-scroll-locked",v2=function(e,t,n,r){var o=e.left,i=e.top,s=e.right,a=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(Zx,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(a,"px ").concat(r,`;
  }
  body[`).concat(Cs,`] {
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
  
  .`).concat(Fi,` {
    right: `).concat(a,"px ").concat(r,`;
  }
  
  .`).concat(Bi,` {
    margin-right: `).concat(a,"px ").concat(r,`;
  }
  
  .`).concat(Fi," .").concat(Fi,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(Bi," .").concat(Bi,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(Cs,`] {
    `).concat(e2,": ").concat(a,`px;
  }
`)},y2=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=r===void 0?"margin":r,i=f.useMemo(function(){return m2(o)},[o]);return f.useEffect(function(){return document.body.setAttribute(Cs,""),function(){document.body.removeAttribute(Cs)}},[]),f.createElement(g2,{styles:v2(i,!t,o,n?"":"!important")})},Yl=!1;if(typeof window<"u")try{var ki=Object.defineProperty({},"passive",{get:function(){return Yl=!0,!0}});window.addEventListener("test",ki,ki),window.removeEventListener("test",ki,ki)}catch{Yl=!1}var On=Yl?{passive:!1}:!1,w2=function(e){return e.tagName==="TEXTAREA"},Zm=function(e,t){var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!w2(e)&&n[t]==="visible")},b2=function(e){return Zm(e,"overflowY")},x2=function(e){return Zm(e,"overflowX")},vf=function(e,t){var n=t;do{typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&(n=n.host);var r=eg(e,n);if(r){var o=tg(e,n),i=o[1],s=o[2];if(i>s)return!0}n=n.parentNode}while(n&&n!==document.body);return!1},k2=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},S2=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},eg=function(e,t){return e==="v"?b2(t):x2(t)},tg=function(e,t){return e==="v"?k2(t):S2(t)},C2=function(e,t){return e==="h"&&t==="rtl"?-1:1},E2=function(e,t,n,r,o){var i=C2(e,window.getComputedStyle(t).direction),s=i*r,a=n.target,l=t.contains(a),c=!1,d=s>0,u=0,h=0;do{var v=tg(e,a),b=v[0],y=v[1],x=v[2],m=y-x-i*b;(b||m)&&eg(e,a)&&(u+=m,h+=b),a=a.parentNode}while(!l&&a!==document.body||l&&(t.contains(a)||t===a));return(d&&(o&&u===0||!o&&s>u)||!d&&(o&&h===0||!o&&-s>h))&&(c=!0),c},Si=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},yf=function(e){return[e.deltaX,e.deltaY]},wf=function(e){return e&&"current"in e?e.current:e},T2=function(e,t){return e[0]===t[0]&&e[1]===t[1]},P2=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},A2=0,Fn=[];function _2(e){var t=f.useRef([]),n=f.useRef([0,0]),r=f.useRef(),o=f.useState(A2++)[0],i=f.useState(function(){return Xm()})[0],s=f.useRef(e);f.useEffect(function(){s.current=e},[e]),f.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var y=Xx([e.lockRef.current],(e.shards||[]).map(wf),!0).filter(Boolean);return y.forEach(function(x){return x.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),y.forEach(function(x){return x.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var a=f.useCallback(function(y,x){if("touches"in y&&y.touches.length===2)return!s.current.allowPinchZoom;var m=Si(y),p=n.current,w="deltaX"in y?y.deltaX:p[0]-m[0],k="deltaY"in y?y.deltaY:p[1]-m[1],S,C=y.target,E=Math.abs(w)>Math.abs(k)?"h":"v";if("touches"in y&&E==="h"&&C.type==="range")return!1;var T=vf(E,C);if(!T)return!0;if(T?S=E:(S=E==="v"?"h":"v",T=vf(E,C)),!T)return!1;if(!r.current&&"changedTouches"in y&&(w||k)&&(r.current=S),!S)return!0;var M=r.current||S;return E2(M,x,y,M==="h"?w:k,!0)},[]),l=f.useCallback(function(y){var x=y;if(!(!Fn.length||Fn[Fn.length-1]!==i)){var m="deltaY"in x?yf(x):Si(x),p=t.current.filter(function(S){return S.name===x.type&&S.target===x.target&&T2(S.delta,m)})[0];if(p&&p.should){x.cancelable&&x.preventDefault();return}if(!p){var w=(s.current.shards||[]).map(wf).filter(Boolean).filter(function(S){return S.contains(x.target)}),k=w.length>0?a(x,w[0]):!s.current.noIsolation;k&&x.cancelable&&x.preventDefault()}}},[]),c=f.useCallback(function(y,x,m,p){var w={name:y,delta:x,target:m,should:p};t.current.push(w),setTimeout(function(){t.current=t.current.filter(function(k){return k!==w})},1)},[]),d=f.useCallback(function(y){n.current=Si(y),r.current=void 0},[]),u=f.useCallback(function(y){c(y.type,yf(y),y.target,a(y,e.lockRef.current))},[]),h=f.useCallback(function(y){c(y.type,Si(y),y.target,a(y,e.lockRef.current))},[]);f.useEffect(function(){return Fn.push(i),e.setCallbacks({onScrollCapture:u,onWheelCapture:u,onTouchMoveCapture:h}),document.addEventListener("wheel",l,On),document.addEventListener("touchmove",l,On),document.addEventListener("touchstart",d,On),function(){Fn=Fn.filter(function(y){return y!==i}),document.removeEventListener("wheel",l,On),document.removeEventListener("touchmove",l,On),document.removeEventListener("touchstart",d,On)}},[]);var v=e.removeScrollBar,b=e.inert;return f.createElement(f.Fragment,null,b?f.createElement(i,{styles:P2(o)}):null,v?f.createElement(y2,{gapMode:"margin"}):null)}const N2=s2(Jm,_2);var ng=f.forwardRef(function(e,t){return f.createElement(qs,vt({},e,{ref:t,sideCar:N2}))});ng.classNames=qs.classNames;const R2=ng,ql=["Enter"," "],M2=["ArrowDown","PageUp","Home"],rg=["ArrowUp","PageDown","End"],$2=[...M2,...rg],z2={ltr:[...ql,"ArrowRight"],rtl:[...ql,"ArrowLeft"]},I2={ltr:["ArrowLeft"],rtl:["ArrowRight"]},Js="Menu",[$o,j2,L2]=Em(Js),[zn,og]=Ho(Js,[L2,Bm,Gm]),pu=Bm(),ig=Gm(),[D2,In]=zn(Js),[O2,Ko]=zn(Js),F2=e=>{const{__scopeMenu:t,open:n=!1,children:r,dir:o,onOpenChange:i,modal:s=!0}=e,a=pu(t),[l,c]=f.useState(null),d=f.useRef(!1),u=bt(i),h=Tm(o);return f.useEffect(()=>{const v=()=>{d.current=!0,document.addEventListener("pointerdown",b,{capture:!0,once:!0}),document.addEventListener("pointermove",b,{capture:!0,once:!0})},b=()=>d.current=!1;return document.addEventListener("keydown",v,{capture:!0}),()=>{document.removeEventListener("keydown",v,{capture:!0}),document.removeEventListener("pointerdown",b,{capture:!0}),document.removeEventListener("pointermove",b,{capture:!0})}},[]),f.createElement(Px,a,f.createElement(D2,{scope:t,open:n,onOpenChange:u,content:l,onContentChange:c},f.createElement(O2,{scope:t,onClose:f.useCallback(()=>u(!1),[u]),isUsingKeyboardRef:d,dir:h,modal:s},r)))},sg=f.forwardRef((e,t)=>{const{__scopeMenu:n,...r}=e,o=pu(n);return f.createElement(Ax,D({},o,r,{ref:t}))}),ag="MenuPortal",[B2,lg]=zn(ag,{forceMount:void 0}),W2=e=>{const{__scopeMenu:t,forceMount:n,children:r,container:o}=e,i=In(ag,t);return f.createElement(B2,{scope:t,forceMount:n},f.createElement(Qo,{present:n||i.open},f.createElement(Nx,{asChild:!0,container:o},r)))},dt="MenuContent",[U2,hu]=zn(dt),V2=f.forwardRef((e,t)=>{const n=lg(dt,e.__scopeMenu),{forceMount:r=n.forceMount,...o}=e,i=In(dt,e.__scopeMenu),s=Ko(dt,e.__scopeMenu);return f.createElement($o.Provider,{scope:e.__scopeMenu},f.createElement(Qo,{present:r||i.open},f.createElement($o.Slot,{scope:e.__scopeMenu},s.modal?f.createElement(H2,D({},o,{ref:t})):f.createElement(G2,D({},o,{ref:t})))))}),H2=f.forwardRef((e,t)=>{const n=In(dt,e.__scopeMenu),r=f.useRef(null),o=Ue(t,r);return f.useEffect(()=>{const i=r.current;if(i)return Jx(i)},[]),f.createElement(mu,D({},e,{ref:o,trapFocus:n.open,disableOutsidePointerEvents:n.open,disableOutsideScroll:!0,onFocusOutside:G(e.onFocusOutside,i=>i.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>n.onOpenChange(!1)}))}),G2=f.forwardRef((e,t)=>{const n=In(dt,e.__scopeMenu);return f.createElement(mu,D({},e,{ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>n.onOpenChange(!1)}))}),mu=f.forwardRef((e,t)=>{const{__scopeMenu:n,loop:r=!1,trapFocus:o,onOpenAutoFocus:i,onCloseAutoFocus:s,disableOutsidePointerEvents:a,onEntryFocus:l,onEscapeKeyDown:c,onPointerDownOutside:d,onFocusOutside:u,onInteractOutside:h,onDismiss:v,disableOutsideScroll:b,...y}=e,x=In(dt,n),m=Ko(dt,n),p=pu(n),w=ig(n),k=j2(n),[S,C]=f.useState(null),E=f.useRef(null),T=Ue(t,E,x.onContentChange),M=f.useRef(0),N=f.useRef(""),F=f.useRef(0),z=f.useRef(null),X=f.useRef("right"),B=f.useRef(0),V=b?R2:f.Fragment,J=b?{as:br,allowPinchZoom:!0}:void 0,W=P=>{var $,L;const Q=N.current+P,ze=k().filter(Ae=>!Ae.disabled),Ie=document.activeElement,rt=($=ze.find(Ae=>Ae.ref.current===Ie))===null||$===void 0?void 0:$.textValue,de=ze.map(Ae=>Ae.textValue),je=lk(de,Q,rt),Yo=(L=ze.find(Ae=>Ae.textValue===je))===null||L===void 0?void 0:L.ref.current;(function Ae(qo){N.current=qo,window.clearTimeout(M.current),qo!==""&&(M.current=window.setTimeout(()=>Ae(""),1e3))})(Q),Yo&&setTimeout(()=>Yo.focus())};f.useEffect(()=>()=>window.clearTimeout(M.current),[]),yb();const _=f.useCallback(P=>{var $,L;return X.current===(($=z.current)===null||$===void 0?void 0:$.side)&&uk(P,(L=z.current)===null||L===void 0?void 0:L.area)},[]);return f.createElement(U2,{scope:n,searchRef:N,onItemEnter:f.useCallback(P=>{_(P)&&P.preventDefault()},[_]),onItemLeave:f.useCallback(P=>{var $;_(P)||(($=E.current)===null||$===void 0||$.focus(),C(null))},[_]),onTriggerLeave:f.useCallback(P=>{_(P)&&P.preventDefault()},[_]),pointerGraceTimerRef:F,onPointerGraceIntentChange:f.useCallback(P=>{z.current=P},[])},f.createElement(V,J,f.createElement(wb,{asChild:!0,trapped:o,onMountAutoFocus:G(i,P=>{var $;P.preventDefault(),($=E.current)===null||$===void 0||$.focus()}),onUnmountAutoFocus:s},f.createElement(mb,{asChild:!0,disableOutsidePointerEvents:a,onEscapeKeyDown:c,onPointerDownOutside:d,onFocusOutside:u,onInteractOutside:h,onDismiss:v},f.createElement(Gx,D({asChild:!0},w,{dir:m.dir,orientation:"vertical",loop:r,currentTabStopId:S,onCurrentTabStopIdChange:C,onEntryFocus:G(l,P=>{m.isUsingKeyboardRef.current||P.preventDefault()})}),f.createElement(_x,D({role:"menu","aria-orientation":"vertical","data-state":pg(x.open),"data-radix-menu-content":"",dir:m.dir},p,y,{ref:T,style:{outline:"none",...y.style},onKeyDown:G(y.onKeyDown,P=>{const L=P.target.closest("[data-radix-menu-content]")===P.currentTarget,Q=P.ctrlKey||P.altKey||P.metaKey,ze=P.key.length===1;L&&(P.key==="Tab"&&P.preventDefault(),!Q&&ze&&W(P.key));const Ie=E.current;if(P.target!==Ie||!$2.includes(P.key))return;P.preventDefault();const de=k().filter(je=>!je.disabled).map(je=>je.ref.current);rg.includes(P.key)&&de.reverse(),sk(de)}),onBlur:G(e.onBlur,P=>{P.currentTarget.contains(P.target)||(window.clearTimeout(M.current),N.current="")}),onPointerMove:G(e.onPointerMove,zo(P=>{const $=P.target,L=B.current!==P.clientX;if(P.currentTarget.contains($)&&L){const Q=P.clientX>B.current?"right":"left";X.current=Q,B.current=P.clientX}}))})))))))}),Q2=f.forwardRef((e,t)=>{const{__scopeMenu:n,...r}=e;return f.createElement(tt.div,D({},r,{ref:t}))}),Jl="MenuItem",bf="menu.itemSelect",gu=f.forwardRef((e,t)=>{const{disabled:n=!1,onSelect:r,...o}=e,i=f.useRef(null),s=Ko(Jl,e.__scopeMenu),a=hu(Jl,e.__scopeMenu),l=Ue(t,i),c=f.useRef(!1),d=()=>{const u=i.current;if(!n&&u){const h=new CustomEvent(bf,{bubbles:!0,cancelable:!0});u.addEventListener(bf,v=>r==null?void 0:r(v),{once:!0}),Cm(u,h),h.defaultPrevented?c.current=!1:s.onClose()}};return f.createElement(cg,D({},o,{ref:l,disabled:n,onClick:G(e.onClick,d),onPointerDown:u=>{var h;(h=e.onPointerDown)===null||h===void 0||h.call(e,u),c.current=!0},onPointerUp:G(e.onPointerUp,u=>{var h;c.current||(h=u.currentTarget)===null||h===void 0||h.click()}),onKeyDown:G(e.onKeyDown,u=>{const h=a.searchRef.current!=="";n||h&&u.key===" "||ql.includes(u.key)&&(u.currentTarget.click(),u.preventDefault())})}))}),cg=f.forwardRef((e,t)=>{const{__scopeMenu:n,disabled:r=!1,textValue:o,...i}=e,s=hu(Jl,n),a=ig(n),l=f.useRef(null),c=Ue(t,l),[d,u]=f.useState(!1),[h,v]=f.useState("");return f.useEffect(()=>{const b=l.current;if(b){var y;v(((y=b.textContent)!==null&&y!==void 0?y:"").trim())}},[i.children]),f.createElement($o.ItemSlot,{scope:n,disabled:r,textValue:o??h},f.createElement(Qx,D({asChild:!0},a,{focusable:!r}),f.createElement(tt.div,D({role:"menuitem","data-highlighted":d?"":void 0,"aria-disabled":r||void 0,"data-disabled":r?"":void 0},i,{ref:c,onPointerMove:G(e.onPointerMove,zo(b=>{r?s.onItemLeave(b):(s.onItemEnter(b),b.defaultPrevented||b.currentTarget.focus())})),onPointerLeave:G(e.onPointerLeave,zo(b=>s.onItemLeave(b))),onFocus:G(e.onFocus,()=>u(!0)),onBlur:G(e.onBlur,()=>u(!1))}))))}),K2=f.forwardRef((e,t)=>{const{checked:n=!1,onCheckedChange:r,...o}=e;return f.createElement(dg,{scope:e.__scopeMenu,checked:n},f.createElement(gu,D({role:"menuitemcheckbox","aria-checked":Es(n)?"mixed":n},o,{ref:t,"data-state":vu(n),onSelect:G(o.onSelect,()=>r==null?void 0:r(Es(n)?!0:!n),{checkForDefaultPrevented:!1})})))}),Y2="MenuRadioGroup",[gC,q2]=zn(Y2,{value:void 0,onValueChange:()=>{}}),J2="MenuRadioItem",X2=f.forwardRef((e,t)=>{const{value:n,...r}=e,o=q2(J2,e.__scopeMenu),i=n===o.value;return f.createElement(dg,{scope:e.__scopeMenu,checked:i},f.createElement(gu,D({role:"menuitemradio","aria-checked":i},r,{ref:t,"data-state":vu(i),onSelect:G(r.onSelect,()=>{var s;return(s=o.onValueChange)===null||s===void 0?void 0:s.call(o,n)},{checkForDefaultPrevented:!1})})))}),ug="MenuItemIndicator",[dg,Z2]=zn(ug,{checked:!1}),ek=f.forwardRef((e,t)=>{const{__scopeMenu:n,forceMount:r,...o}=e,i=Z2(ug,n);return f.createElement(Qo,{present:r||Es(i.checked)||i.checked===!0},f.createElement(tt.span,D({},o,{ref:t,"data-state":vu(i.checked)})))}),tk=f.forwardRef((e,t)=>{const{__scopeMenu:n,...r}=e;return f.createElement(tt.div,D({role:"separator","aria-orientation":"horizontal"},r,{ref:t}))}),nk="MenuSub",[vC,fg]=zn(nk),Ci="MenuSubTrigger",rk=f.forwardRef((e,t)=>{const n=In(Ci,e.__scopeMenu),r=Ko(Ci,e.__scopeMenu),o=fg(Ci,e.__scopeMenu),i=hu(Ci,e.__scopeMenu),s=f.useRef(null),{pointerGraceTimerRef:a,onPointerGraceIntentChange:l}=i,c={__scopeMenu:e.__scopeMenu},d=f.useCallback(()=>{s.current&&window.clearTimeout(s.current),s.current=null},[]);return f.useEffect(()=>d,[d]),f.useEffect(()=>{const u=a.current;return()=>{window.clearTimeout(u),l(null)}},[a,l]),f.createElement(sg,D({asChild:!0},c),f.createElement(cg,D({id:o.triggerId,"aria-haspopup":"menu","aria-expanded":n.open,"aria-controls":o.contentId,"data-state":pg(n.open)},e,{ref:Qs(t,o.onTriggerChange),onClick:u=>{var h;(h=e.onClick)===null||h===void 0||h.call(e,u),!(e.disabled||u.defaultPrevented)&&(u.currentTarget.focus(),n.open||n.onOpenChange(!0))},onPointerMove:G(e.onPointerMove,zo(u=>{i.onItemEnter(u),!u.defaultPrevented&&!e.disabled&&!n.open&&!s.current&&(i.onPointerGraceIntentChange(null),s.current=window.setTimeout(()=>{n.onOpenChange(!0),d()},100))})),onPointerLeave:G(e.onPointerLeave,zo(u=>{var h;d();const v=(h=n.content)===null||h===void 0?void 0:h.getBoundingClientRect();if(v){var b;const y=(b=n.content)===null||b===void 0?void 0:b.dataset.side,x=y==="right",m=x?-5:5,p=v[x?"left":"right"],w=v[x?"right":"left"];i.onPointerGraceIntentChange({area:[{x:u.clientX+m,y:u.clientY},{x:p,y:v.top},{x:w,y:v.top},{x:w,y:v.bottom},{x:p,y:v.bottom}],side:y}),window.clearTimeout(a.current),a.current=window.setTimeout(()=>i.onPointerGraceIntentChange(null),300)}else{if(i.onTriggerLeave(u),u.defaultPrevented)return;i.onPointerGraceIntentChange(null)}})),onKeyDown:G(e.onKeyDown,u=>{const h=i.searchRef.current!=="";if(!(e.disabled||h&&u.key===" ")&&z2[r.dir].includes(u.key)){var v;n.onOpenChange(!0),(v=n.content)===null||v===void 0||v.focus(),u.preventDefault()}})})))}),ok="MenuSubContent",ik=f.forwardRef((e,t)=>{const n=lg(dt,e.__scopeMenu),{forceMount:r=n.forceMount,...o}=e,i=In(dt,e.__scopeMenu),s=Ko(dt,e.__scopeMenu),a=fg(ok,e.__scopeMenu),l=f.useRef(null),c=Ue(t,l);return f.createElement($o.Provider,{scope:e.__scopeMenu},f.createElement(Qo,{present:r||i.open},f.createElement($o.Slot,{scope:e.__scopeMenu},f.createElement(mu,D({id:a.contentId,"aria-labelledby":a.triggerId},o,{ref:c,align:"start",side:s.dir==="rtl"?"left":"right",disableOutsidePointerEvents:!1,disableOutsideScroll:!1,trapFocus:!1,onOpenAutoFocus:d=>{var u;s.isUsingKeyboardRef.current&&((u=l.current)===null||u===void 0||u.focus()),d.preventDefault()},onCloseAutoFocus:d=>d.preventDefault(),onFocusOutside:G(e.onFocusOutside,d=>{d.target!==a.trigger&&i.onOpenChange(!1)}),onEscapeKeyDown:G(e.onEscapeKeyDown,d=>{s.onClose(),d.preventDefault()}),onKeyDown:G(e.onKeyDown,d=>{const u=d.currentTarget.contains(d.target),h=I2[s.dir].includes(d.key);if(u&&h){var v;i.onOpenChange(!1),(v=a.trigger)===null||v===void 0||v.focus(),d.preventDefault()}})})))))});function pg(e){return e?"open":"closed"}function Es(e){return e==="indeterminate"}function vu(e){return Es(e)?"indeterminate":e?"checked":"unchecked"}function sk(e){const t=document.activeElement;for(const n of e)if(n===t||(n.focus(),document.activeElement!==t))return}function ak(e,t){return e.map((n,r)=>e[(t+r)%e.length])}function lk(e,t,n){const o=t.length>1&&Array.from(t).every(c=>c===t[0])?t[0]:t,i=n?e.indexOf(n):-1;let s=ak(e,Math.max(i,0));o.length===1&&(s=s.filter(c=>c!==n));const l=s.find(c=>c.toLowerCase().startsWith(o.toLowerCase()));return l!==n?l:void 0}function ck(e,t){const{x:n,y:r}=e;let o=!1;for(let i=0,s=t.length-1;i<t.length;s=i++){const a=t[i].x,l=t[i].y,c=t[s].x,d=t[s].y;l>r!=d>r&&n<(c-a)*(r-l)/(d-l)+a&&(o=!o)}return o}function uk(e,t){if(!t)return!1;const n={x:e.clientX,y:e.clientY};return ck(n,t)}function zo(e){return t=>t.pointerType==="mouse"?e(t):void 0}const dk=F2,fk=sg,pk=W2,hk=V2,mk=Q2,gk=gu,vk=K2,yk=X2,wk=ek,bk=tk,xk=rk,kk=ik,hg="DropdownMenu",[Sk,yC]=Ho(hg,[og]),nt=og(),[Ck,mg]=Sk(hg),Ek=e=>{const{__scopeDropdownMenu:t,children:n,dir:r,open:o,defaultOpen:i,onOpenChange:s,modal:a=!0}=e,l=nt(t),c=f.useRef(null),[d=!1,u]=Sm({prop:o,defaultProp:i,onChange:s});return f.createElement(Ck,{scope:t,triggerId:Hl(),triggerRef:c,contentId:Hl(),open:d,onOpenChange:u,onOpenToggle:f.useCallback(()=>u(h=>!h),[u]),modal:a},f.createElement(dk,D({},l,{open:d,onOpenChange:u,dir:r,modal:a}),n))},Tk="DropdownMenuTrigger",Pk=f.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,disabled:r=!1,...o}=e,i=mg(Tk,n),s=nt(n);return f.createElement(fk,D({asChild:!0},s),f.createElement(tt.button,D({type:"button",id:i.triggerId,"aria-haspopup":"menu","aria-expanded":i.open,"aria-controls":i.open?i.contentId:void 0,"data-state":i.open?"open":"closed","data-disabled":r?"":void 0,disabled:r},o,{ref:Qs(t,i.triggerRef),onPointerDown:G(e.onPointerDown,a=>{!r&&a.button===0&&a.ctrlKey===!1&&(i.onOpenToggle(),i.open||a.preventDefault())}),onKeyDown:G(e.onKeyDown,a=>{r||(["Enter"," "].includes(a.key)&&i.onOpenToggle(),a.key==="ArrowDown"&&i.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(a.key)&&a.preventDefault())})})))}),Ak=e=>{const{__scopeDropdownMenu:t,...n}=e,r=nt(t);return f.createElement(pk,D({},r,n))},_k="DropdownMenuContent",Nk=f.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,o=mg(_k,n),i=nt(n),s=f.useRef(!1);return f.createElement(hk,D({id:o.contentId,"aria-labelledby":o.triggerId},i,r,{ref:t,onCloseAutoFocus:G(e.onCloseAutoFocus,a=>{var l;s.current||(l=o.triggerRef.current)===null||l===void 0||l.focus(),s.current=!1,a.preventDefault()}),onInteractOutside:G(e.onInteractOutside,a=>{const l=a.detail.originalEvent,c=l.button===0&&l.ctrlKey===!0,d=l.button===2||c;(!o.modal||d)&&(s.current=!0)}),style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}}))}),Rk=f.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,o=nt(n);return f.createElement(mk,D({},o,r,{ref:t}))}),Mk=f.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,o=nt(n);return f.createElement(gk,D({},o,r,{ref:t}))}),$k=f.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,o=nt(n);return f.createElement(vk,D({},o,r,{ref:t}))}),zk=f.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,o=nt(n);return f.createElement(yk,D({},o,r,{ref:t}))}),Ik=f.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,o=nt(n);return f.createElement(wk,D({},o,r,{ref:t}))}),jk=f.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,o=nt(n);return f.createElement(bk,D({},o,r,{ref:t}))}),Lk=f.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,o=nt(n);return f.createElement(xk,D({},o,r,{ref:t}))}),Dk=f.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,o=nt(n);return f.createElement(kk,D({},o,r,{ref:t,style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}}))}),Ok=Ek,Fk=Pk,Bk=Ak,gg=Nk,vg=Rk,yg=Mk,wg=$k,bg=zk,xg=Ik,kg=jk,Sg=Lk,Cg=Dk,Wk=Ok,Uk=Fk,Vk=f.forwardRef(({className:e,inset:t,children:n,...r},o)=>g.jsxs(Sg,{ref:o,className:le("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",t&&"pl-8",e),...r,children:[n,g.jsx(Uw,{className:"ml-auto h-4 w-4"})]}));Vk.displayName=Sg.displayName;const Hk=f.forwardRef(({className:e,...t},n)=>g.jsx(Cg,{ref:n,className:le("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...t}));Hk.displayName=Cg.displayName;const Eg=f.forwardRef(({className:e,sideOffset:t=4,...n},r)=>g.jsx(Bk,{children:g.jsx(gg,{ref:r,sideOffset:t,className:le("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...n})}));Eg.displayName=gg.displayName;const Wi=f.forwardRef(({className:e,inset:t,...n},r)=>g.jsx(yg,{ref:r,className:le("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",t&&"pl-8",e),...n}));Wi.displayName=yg.displayName;const Gk=f.forwardRef(({className:e,children:t,checked:n,...r},o)=>g.jsxs(wg,{ref:o,className:le("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),checked:n,...r,children:[g.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:g.jsx(xg,{children:g.jsx(Ww,{className:"h-4 w-4"})})}),t]}));Gk.displayName=wg.displayName;const Qk=f.forwardRef(({className:e,children:t,...n},r)=>g.jsxs(bg,{ref:r,className:le("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),...n,children:[g.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:g.jsx(xg,{children:g.jsx(Vw,{className:"h-2 w-2 fill-current"})})}),t]}));Qk.displayName=bg.displayName;const Kk=f.forwardRef(({className:e,inset:t,...n},r)=>g.jsx(vg,{ref:r,className:le("px-2 py-1.5 text-sm font-semibold",t&&"pl-8",e),...n}));Kk.displayName=vg.displayName;const Yk=f.forwardRef(({className:e,...t},n)=>g.jsx(kg,{ref:n,className:le("-mx-1 my-1 h-px bg-muted",e),...t}));Yk.displayName=kg.displayName;const qk={theme:"system",setTheme:()=>null},Tg=f.createContext(qk);function Jk({children:e,defaultTheme:t="system",storageKey:n="color-scheme",...r}){const[o,i]=f.useState(()=>localStorage.getItem(n)||t);f.useEffect(()=>{const a=window.document.documentElement;if(a.classList.remove("light","dark"),o==="system"){const l=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";a.classList.add(l);return}a.classList.add(o)},[o]);const s={theme:o,setTheme:a=>{localStorage.setItem(n,a),i(a)}};return g.jsx(Tg.Provider,{...r,value:s,children:e})}const Xk=()=>{const e=f.useContext(Tg);if(e===void 0)throw new Error("useTheme must be used within a ThemeProvider");return e};function Zk(){const{setTheme:e}=Xk();return g.jsxs(Wk,{children:[g.jsx(Uk,{asChild:!0,children:g.jsxs(km,{variant:"outline",size:"icon",children:[g.jsx(Gw,{className:"h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"}),g.jsx(Hw,{className:"absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"}),g.jsx("span",{className:"sr-only",children:"Toggle theme"})]})}),g.jsxs(Eg,{align:"end",children:[g.jsx(Wi,{onClick:()=>e("light"),children:"Light"}),g.jsx(Wi,{onClick:()=>e("dark"),children:"Dark"}),g.jsx(Wi,{onClick:()=>e("system"),children:"System"})]})]})}const eS=()=>{const e=({isActive:t})=>["p-4 flex items-center justify-start mw-full hover:text-sky-500 dark:hover:text-sky-400",t?"text-link-dark dark:text-link-dark":""].join(" ");return g.jsx("header",{className:"border-b border-gray-200 dark:border-gray-800 pr-3",children:g.jsxs("div",{className:"flex flex-wrap items-center",children:[g.jsx("div",{className:"absolute z-10 top-2 left-2 sm:static flex-shrink flex-grow-0",children:g.jsx("div",{className:"cursor-pointer",children:g.jsxs(er,{to:"/",className:"navbar-brand flex items-center",children:[g.jsx(Ow,{className:"w-8 h-8 sm:ml-2 sm:w-12 sm:h-12",title:"MyApp logo"}),g.jsx("span",{className:"hidden ml-2 sm:block text-2xl font-semibold",children:"My App"})]})})}),g.jsx("div",{className:"flex flex-grow flex-shrink flex-nowrap justify-end items-center",children:g.jsx("nav",{className:"relative flex flex-grow leading-6 font-semibold text-slate-700 dark:text-slate-200",children:g.jsxs("ul",{className:"flex flex-wrap items-center justify-end w-full m-0",children:[g.jsx("li",{className:"relative flex flex-wrap just-fu-start m-0",children:g.jsx(xn,{to:"/counter",className:e,children:"Counter"})}),g.jsx("li",{className:"relative flex flex-wrap just-fu-start m-0",children:g.jsx(xn,{to:"/whatsnew",className:e,children:"What's New"})}),g.jsx("li",{className:"relative flex flex-wrap just-fu-start m-0",children:g.jsx(xn,{to:"/blog",className:e,children:"Blog"})}),g.jsx("li",{className:"relative flex flex-wrap just-fu-start m-0",children:g.jsx(xn,{to:"/videos",className:e,children:"Videos"})}),g.jsx("li",{className:"relative flex flex-wrap just-fu-start m-0",children:g.jsx(Zk,{})})]})})})]})})},tS=()=>{const e=({isActive:t})=>["text-sm leading-6 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50",t?"font-bold":""].join(" ");return g.jsxs("footer",{className:"bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800",children:[g.jsxs("nav",{className:"pt-8 columns-2 sm:flex sm:justify-center sm:space-x-12","aria-label":"Footer",children:[g.jsx("div",{className:"pb-6",children:g.jsx(xn,{to:"/about",className:e,children:"About"})}),g.jsx("div",{className:"pb-6",children:g.jsx(xn,{to:"/posts",className:e,children:"Archive"})}),g.jsx("div",{className:"pb-6",children:g.jsx(xn,{to:"/privacy",className:e,children:"Privacy"})})]}),g.jsx("div",{className:"container mx-auto px-5",children:g.jsxs("div",{className:"py-28 flex flex-col lg:flex-row items-center",children:[g.jsx("h3",{className:"text-4xl lg:text-6xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2",children:"A ServiceStack Project"}),g.jsxs("div",{className:"flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2",children:[g.jsx("a",{href:"https://docs.servicestack.net",className:"mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0",children:"Read Documentation"}),g.jsx("a",{href:"https://github.com/ServiceStack/press-vue",className:"mx-3 font-bold hover:underline",children:"View on GitHub"})]})]})})]})};var nS=typeof Element<"u",rS=typeof Map=="function",oS=typeof Set=="function",iS=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function Ui(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var n,r,o;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(!Ui(e[r],t[r]))return!1;return!0}var i;if(rS&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(i=e.entries();!(r=i.next()).done;)if(!t.has(r.value[0]))return!1;for(i=e.entries();!(r=i.next()).done;)if(!Ui(r.value[1],t.get(r.value[0])))return!1;return!0}if(oS&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(i=e.entries();!(r=i.next()).done;)if(!t.has(r.value[0]))return!1;return!0}if(iS&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(e[r]!==t[r])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,o[r]))return!1;if(nS&&e instanceof Element)return!1;for(r=n;r--!==0;)if(!((o[r]==="_owner"||o[r]==="__v"||o[r]==="__o")&&e.$$typeof)&&!Ui(e[o[r]],t[o[r]]))return!1;return!0}return e!==e&&t!==t}var sS=function(t,n){try{return Ui(t,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const aS=Cr(sS);var lS=function(e,t,n,r,o,i,s,a){if(!e){var l;if(t===void 0)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,o,i,s,a],d=0;l=new Error(t.replace(/%s/g,function(){return c[d++]})),l.name="Invariant Violation"}throw l.framesToPop=1,l}},cS=lS;const xf=Cr(cS);var uS=function(t,n,r,o){var i=r?r.call(o,t,n):void 0;if(i!==void 0)return!!i;if(t===n)return!0;if(typeof t!="object"||!t||typeof n!="object"||!n)return!1;var s=Object.keys(t),a=Object.keys(n);if(s.length!==a.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(n),c=0;c<s.length;c++){var d=s[c];if(!l(d))return!1;var u=t[d],h=n[d];if(i=r?r.call(o,u,h,d):void 0,i===!1||i===void 0&&u!==h)return!1}return!0};const dS=Cr(uS);var Pg=(e=>(e.BASE="base",e.BODY="body",e.HEAD="head",e.HTML="html",e.LINK="link",e.META="meta",e.NOSCRIPT="noscript",e.SCRIPT="script",e.STYLE="style",e.TITLE="title",e.FRAGMENT="Symbol(react.fragment)",e))(Pg||{}),La={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},kf=Object.values(Pg),yu={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},fS=Object.entries(yu).reduce((e,[t,n])=>(e[n]=t,e),{}),lt="data-rh",lr={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},cr=(e,t)=>{for(let n=e.length-1;n>=0;n-=1){const r=e[n];if(Object.prototype.hasOwnProperty.call(r,t))return r[t]}return null},pS=e=>{let t=cr(e,"title");const n=cr(e,lr.TITLE_TEMPLATE);if(Array.isArray(t)&&(t=t.join("")),n&&t)return n.replace(/%s/g,()=>t);const r=cr(e,lr.DEFAULT_TITLE);return t||r||void 0},hS=e=>cr(e,lr.ON_CHANGE_CLIENT_STATE)||(()=>{}),Da=(e,t)=>t.filter(n=>typeof n[e]<"u").map(n=>n[e]).reduce((n,r)=>({...n,...r}),{}),mS=(e,t)=>t.filter(n=>typeof n.base<"u").map(n=>n.base).reverse().reduce((n,r)=>{if(!n.length){const o=Object.keys(r);for(let i=0;i<o.length;i+=1){const a=o[i].toLowerCase();if(e.indexOf(a)!==-1&&r[a])return n.concat(r)}}return n},[]),gS=e=>console&&typeof console.warn=="function"&&console.warn(e),Gr=(e,t,n)=>{const r={};return n.filter(o=>Array.isArray(o[e])?!0:(typeof o[e]<"u"&&gS(`Helmet: ${e} should be of type "Array". Instead found type "${typeof o[e]}"`),!1)).map(o=>o[e]).reverse().reduce((o,i)=>{const s={};i.filter(l=>{let c;const d=Object.keys(l);for(let h=0;h<d.length;h+=1){const v=d[h],b=v.toLowerCase();t.indexOf(b)!==-1&&!(c==="rel"&&l[c].toLowerCase()==="canonical")&&!(b==="rel"&&l[b].toLowerCase()==="stylesheet")&&(c=b),t.indexOf(v)!==-1&&(v==="innerHTML"||v==="cssText"||v==="itemprop")&&(c=v)}if(!c||!l[c])return!1;const u=l[c].toLowerCase();return r[c]||(r[c]={}),s[c]||(s[c]={}),r[c][u]?!1:(s[c][u]=!0,!0)}).reverse().forEach(l=>o.push(l));const a=Object.keys(s);for(let l=0;l<a.length;l+=1){const c=a[l],d={...r[c],...s[c]};r[c]=d}return o},[]).reverse()},vS=(e,t)=>{if(Array.isArray(e)&&e.length){for(let n=0;n<e.length;n+=1)if(e[n][t])return!0}return!1},yS=e=>({baseTag:mS(["href"],e),bodyAttributes:Da("bodyAttributes",e),defer:cr(e,lr.DEFER),encode:cr(e,lr.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:Da("htmlAttributes",e),linkTags:Gr("link",["rel","href"],e),metaTags:Gr("meta",["name","charset","http-equiv","property","itemprop"],e),noscriptTags:Gr("noscript",["innerHTML"],e),onChangeClientState:hS(e),scriptTags:Gr("script",["src","innerHTML"],e),styleTags:Gr("style",["cssText"],e),title:pS(e),titleAttributes:Da("titleAttributes",e),prioritizeSeoTags:vS(e,lr.PRIORITIZE_SEO_TAGS)}),Ag=e=>Array.isArray(e)?e.join(""):e,wS=(e,t)=>{const n=Object.keys(e);for(let r=0;r<n.length;r+=1)if(t[n[r]]&&t[n[r]].includes(e[n[r]]))return!0;return!1},Oa=(e,t)=>Array.isArray(e)?e.reduce((n,r)=>(wS(r,t)?n.priority.push(r):n.default.push(r),n),{priority:[],default:[]}):{default:e,priority:[]},Sf=(e,t)=>({...e,[t]:void 0}),bS=["noscript","script","style"],Xl=(e,t=!0)=>t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),_g=e=>Object.keys(e).reduce((t,n)=>{const r=typeof e[n]<"u"?`${n}="${e[n]}"`:`${n}`;return t?`${t} ${r}`:r},""),xS=(e,t,n,r)=>{const o=_g(n),i=Ag(t);return o?`<${e} ${lt}="true" ${o}>${Xl(i,r)}</${e}>`:`<${e} ${lt}="true">${Xl(i,r)}</${e}>`},kS=(e,t,n=!0)=>t.reduce((r,o)=>{const i=o,s=Object.keys(i).filter(c=>!(c==="innerHTML"||c==="cssText")).reduce((c,d)=>{const u=typeof i[d]>"u"?d:`${d}="${Xl(i[d],n)}"`;return c?`${c} ${u}`:u},""),a=i.innerHTML||i.cssText||"",l=bS.indexOf(e)===-1;return`${r}<${e} ${lt}="true" ${s}${l?"/>":`>${a}</${e}>`}`},""),Ng=(e,t={})=>Object.keys(e).reduce((n,r)=>{const o=yu[r];return n[o||r]=e[r],n},t),SS=(e,t,n)=>{const r={key:t,[lt]:!0},o=Ng(n,r);return[j.createElement("title",o,t)]},Vi=(e,t)=>t.map((n,r)=>{const o={key:r,[lt]:!0};return Object.keys(n).forEach(i=>{const a=yu[i]||i;if(a==="innerHTML"||a==="cssText"){const l=n.innerHTML||n.cssText;o.dangerouslySetInnerHTML={__html:l}}else o[a]=n[i]}),j.createElement(e,o)}),Qe=(e,t,n=!0)=>{switch(e){case"title":return{toComponent:()=>SS(e,t.title,t.titleAttributes),toString:()=>xS(e,t.title,t.titleAttributes,n)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>Ng(t),toString:()=>_g(t)};default:return{toComponent:()=>Vi(e,t),toString:()=>kS(e,t,n)}}},CS=({metaTags:e,linkTags:t,scriptTags:n,encode:r})=>{const o=Oa(e,La.meta),i=Oa(t,La.link),s=Oa(n,La.script);return{priorityMethods:{toComponent:()=>[...Vi("meta",o.priority),...Vi("link",i.priority),...Vi("script",s.priority)],toString:()=>`${Qe("meta",o.priority,r)} ${Qe("link",i.priority,r)} ${Qe("script",s.priority,r)}`},metaTags:o.default,linkTags:i.default,scriptTags:s.default}},ES=e=>{const{baseTag:t,bodyAttributes:n,encode:r=!0,htmlAttributes:o,noscriptTags:i,styleTags:s,title:a="",titleAttributes:l,prioritizeSeoTags:c}=e;let{linkTags:d,metaTags:u,scriptTags:h}=e,v={toComponent:()=>{},toString:()=>""};return c&&({priorityMethods:v,linkTags:d,metaTags:u,scriptTags:h}=CS(e)),{priority:v,base:Qe("base",t,r),bodyAttributes:Qe("bodyAttributes",n,r),htmlAttributes:Qe("htmlAttributes",o,r),link:Qe("link",d,r),meta:Qe("meta",u,r),noscript:Qe("noscript",i,r),script:Qe("script",h,r),style:Qe("style",s,r),title:Qe("title",{title:a,titleAttributes:l},r)}},Zl=ES,Ei=[],Rg=!!(typeof window<"u"&&window.document&&window.document.createElement),ec=class{constructor(e,t){I(this,"instances",[]);I(this,"canUseDOM",Rg);I(this,"context");I(this,"value",{setHelmet:e=>{this.context.helmet=e},helmetInstances:{get:()=>this.canUseDOM?Ei:this.instances,add:e=>{(this.canUseDOM?Ei:this.instances).push(e)},remove:e=>{const t=(this.canUseDOM?Ei:this.instances).indexOf(e);(this.canUseDOM?Ei:this.instances).splice(t,1)}}});this.context=e,this.canUseDOM=t||!1,t||(e.helmet=Zl({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},TS={},Mg=j.createContext(TS),dr,wu=(dr=class extends f.Component{constructor(n){super(n);I(this,"helmetData");this.helmetData=new ec(this.props.context||{},dr.canUseDOM)}render(){return j.createElement(Mg.Provider,{value:this.helmetData.value},this.props.children)}},I(dr,"canUseDOM",Rg),dr),Bn=(e,t)=>{const n=document.head||document.querySelector("head"),r=n.querySelectorAll(`${e}[${lt}]`),o=[].slice.call(r),i=[];let s;return t&&t.length&&t.forEach(a=>{const l=document.createElement(e);for(const c in a)if(Object.prototype.hasOwnProperty.call(a,c))if(c==="innerHTML")l.innerHTML=a.innerHTML;else if(c==="cssText")l.styleSheet?l.styleSheet.cssText=a.cssText:l.appendChild(document.createTextNode(a.cssText));else{const d=c,u=typeof a[d]>"u"?"":a[d];l.setAttribute(c,u)}l.setAttribute(lt,"true"),o.some((c,d)=>(s=d,l.isEqualNode(c)))?o.splice(s,1):i.push(l)}),o.forEach(a=>{var l;return(l=a.parentNode)==null?void 0:l.removeChild(a)}),i.forEach(a=>n.appendChild(a)),{oldTags:o,newTags:i}},tc=(e,t)=>{const n=document.getElementsByTagName(e)[0];if(!n)return;const r=n.getAttribute(lt),o=r?r.split(","):[],i=[...o],s=Object.keys(t);for(const a of s){const l=t[a]||"";n.getAttribute(a)!==l&&n.setAttribute(a,l),o.indexOf(a)===-1&&o.push(a);const c=i.indexOf(a);c!==-1&&i.splice(c,1)}for(let a=i.length-1;a>=0;a-=1)n.removeAttribute(i[a]);o.length===i.length?n.removeAttribute(lt):n.getAttribute(lt)!==s.join(",")&&n.setAttribute(lt,s.join(","))},PS=(e,t)=>{typeof e<"u"&&document.title!==e&&(document.title=Ag(e)),tc("title",t)},Cf=(e,t)=>{const{baseTag:n,bodyAttributes:r,htmlAttributes:o,linkTags:i,metaTags:s,noscriptTags:a,onChangeClientState:l,scriptTags:c,styleTags:d,title:u,titleAttributes:h}=e;tc("body",r),tc("html",o),PS(u,h);const v={baseTag:Bn("base",n),linkTags:Bn("link",i),metaTags:Bn("meta",s),noscriptTags:Bn("noscript",a),scriptTags:Bn("script",c),styleTags:Bn("style",d)},b={},y={};Object.keys(v).forEach(x=>{const{newTags:m,oldTags:p}=v[x];m.length&&(b[x]=m),p.length&&(y[x]=v[x].oldTags)}),t&&t(),l(e,b,y)},Qr=null,AS=e=>{Qr&&cancelAnimationFrame(Qr),e.defer?Qr=requestAnimationFrame(()=>{Cf(e,()=>{Qr=null})}):(Cf(e),Qr=null)},_S=AS,Ef=class extends f.Component{constructor(){super(...arguments);I(this,"rendered",!1)}shouldComponentUpdate(t){return!dS(t,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:t}=this.props.context;t.remove(this),this.emitChange()}emitChange(){const{helmetInstances:t,setHelmet:n}=this.props.context;let r=null;const o=yS(t.get().map(i=>{const s={...i.props};return delete s.context,s}));wu.canUseDOM?_S(o):Zl&&(r=Zl(o)),n(r)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:t}=this.props.context;t.add(this),this.emitChange()}render(){return this.init(),null}},Va,$g=(Va=class extends f.Component{shouldComponentUpdate(e){return!aS(Sf(this.props,"helmetData"),Sf(e,"helmetData"))}mapNestedChildrenToProps(e,t){if(!t)return null;switch(e.type){case"script":case"noscript":return{innerHTML:t};case"style":return{cssText:t};default:throw new Error(`<${e.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(e,t,n,r){return{...t,[e.type]:[...t[e.type]||[],{...n,...this.mapNestedChildrenToProps(e,r)}]}}mapObjectTypeChildren(e,t,n,r){switch(e.type){case"title":return{...t,[e.type]:r,titleAttributes:{...n}};case"body":return{...t,bodyAttributes:{...n}};case"html":return{...t,htmlAttributes:{...n}};default:return{...t,[e.type]:{...n}}}}mapArrayTypeChildrenToProps(e,t){let n={...t};return Object.keys(e).forEach(r=>{n={...n,[r]:e[r]}}),n}warnOnInvalidChildren(e,t){return xf(kf.some(n=>e.type===n),typeof e.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${kf.join(", ")} are allowed. Helmet does not support rendering <${e.type}> elements. Refer to our API for more information.`),xf(!t||typeof t=="string"||Array.isArray(t)&&!t.some(n=>typeof n!="string"),`Helmet expects a string as a child of <${e.type}>. Did you forget to wrap your children in braces? ( <${e.type}>{\`\`}</${e.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(e,t){let n={};return j.Children.forEach(e,r=>{if(!r||!r.props)return;const{children:o,...i}=r.props,s=Object.keys(i).reduce((l,c)=>(l[fS[c]||c]=i[c],l),{});let{type:a}=r;switch(typeof a=="symbol"?a=a.toString():this.warnOnInvalidChildren(r,o),a){case"Symbol(react.fragment)":t=this.mapChildrenToProps(o,t);break;case"link":case"meta":case"noscript":case"script":case"style":n=this.flattenArrayTypeChildren(r,n,s,o);break;default:t=this.mapObjectTypeChildren(r,t,s,o);break}}),this.mapArrayTypeChildrenToProps(n,t)}render(){const{children:e,...t}=this.props;let n={...t},{helmetData:r}=t;if(e&&(n=this.mapChildrenToProps(e,n)),r&&!(r instanceof ec)){const o=r;r=new ec(o.context,!0),delete n.helmetData}return r?j.createElement(Ef,{...n,context:r.value}):j.createElement(Mg.Consumer,null,o=>j.createElement(Ef,{...n,context:o}))}},I(Va,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),Va);const NS=()=>g.jsx(wu,{children:g.jsxs($g,{children:[g.jsx("meta",{name:"description",content:"Vite + React SPA"}),g.jsx("meta",{property:"og:image",content:"/img/logo.svg"})]})}),zg=({title:e,children:t})=>g.jsxs(g.Fragment,{children:[e?g.jsx(wu,{children:g.jsx($g,{children:g.jsx("title",{children:e})})}):null,g.jsx(NS,{}),g.jsx(eS,{}),g.jsx("div",{className:"min-h-screen",children:g.jsx("main",{role:"main",children:g.jsx("main",{children:t})})}),g.jsx(tS,{})]}),co=/^[a-z0-9]+(-[a-z0-9]+)*$/,Xs=(e,t,n,r="")=>{const o=e.split(":");if(e.slice(0,1)==="@"){if(o.length<2||o.length>3)return null;r=o.shift().slice(1)}if(o.length>3||!o.length)return null;if(o.length>1){const a=o.pop(),l=o.pop(),c={provider:o.length>0?o[0]:r,prefix:l,name:a};return t&&!Hi(c)?null:c}const i=o[0],s=i.split("-");if(s.length>1){const a={provider:r,prefix:s.shift(),name:s.join("-")};return t&&!Hi(a)?null:a}if(n&&r===""){const a={provider:r,prefix:"",name:i};return t&&!Hi(a,n)?null:a}return null},Hi=(e,t)=>e?!!((e.provider===""||e.provider.match(co))&&(t&&e.prefix===""||e.prefix.match(co))&&e.name.match(co)):!1,Ig=Object.freeze({left:0,top:0,width:16,height:16}),Ts=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),bu=Object.freeze({...Ig,...Ts}),nc=Object.freeze({...bu,body:"",hidden:!1});function RS(e,t){const n={};!e.hFlip!=!t.hFlip&&(n.hFlip=!0),!e.vFlip!=!t.vFlip&&(n.vFlip=!0);const r=((e.rotate||0)+(t.rotate||0))%4;return r&&(n.rotate=r),n}function Tf(e,t){const n=RS(e,t);for(const r in nc)r in Ts?r in e&&!(r in n)&&(n[r]=Ts[r]):r in t?n[r]=t[r]:r in e&&(n[r]=e[r]);return n}function MS(e,t){const n=e.icons,r=e.aliases||Object.create(null),o=Object.create(null);function i(s){if(n[s])return o[s]=[];if(!(s in o)){o[s]=null;const a=r[s]&&r[s].parent,l=a&&i(a);l&&(o[s]=[a].concat(l))}return o[s]}return(t||Object.keys(n).concat(Object.keys(r))).forEach(i),o}function $S(e,t,n){const r=e.icons,o=e.aliases||Object.create(null);let i={};function s(a){i=Tf(r[a]||o[a],i)}return s(t),n.forEach(s),Tf(e,i)}function jg(e,t){const n=[];if(typeof e!="object"||typeof e.icons!="object")return n;e.not_found instanceof Array&&e.not_found.forEach(o=>{t(o,null),n.push(o)});const r=MS(e);for(const o in r){const i=r[o];i&&(t(o,$S(e,o,i)),n.push(o))}return n}const zS={provider:"",aliases:{},not_found:{},...Ig};function Fa(e,t){for(const n in t)if(n in e&&typeof e[n]!=typeof t[n])return!1;return!0}function Lg(e){if(typeof e!="object"||e===null)return null;const t=e;if(typeof t.prefix!="string"||!e.icons||typeof e.icons!="object"||!Fa(e,zS))return null;const n=t.icons;for(const o in n){const i=n[o];if(!o.match(co)||typeof i.body!="string"||!Fa(i,nc))return null}const r=t.aliases||Object.create(null);for(const o in r){const i=r[o],s=i.parent;if(!o.match(co)||typeof s!="string"||!n[s]&&!r[s]||!Fa(i,nc))return null}return t}const Pf=Object.create(null);function IS(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:new Set}}function Rn(e,t){const n=Pf[e]||(Pf[e]=Object.create(null));return n[t]||(n[t]=IS(e,t))}function xu(e,t){return Lg(t)?jg(t,(n,r)=>{r?e.icons[n]=r:e.missing.add(n)}):[]}function jS(e,t,n){try{if(typeof n.body=="string")return e.icons[t]={...n},!0}catch{}return!1}let Io=!1;function Dg(e){return typeof e=="boolean"&&(Io=e),Io}function LS(e){const t=typeof e=="string"?Xs(e,!0,Io):e;if(t){const n=Rn(t.provider,t.prefix),r=t.name;return n.icons[r]||(n.missing.has(r)?null:void 0)}}function DS(e,t){const n=Xs(e,!0,Io);if(!n)return!1;const r=Rn(n.provider,n.prefix);return jS(r,n.name,t)}function OS(e,t){if(typeof e!="object")return!1;if(typeof t!="string"&&(t=e.provider||""),Io&&!t&&!e.prefix){let o=!1;return Lg(e)&&(e.prefix="",jg(e,(i,s)=>{s&&DS(i,s)&&(o=!0)})),o}const n=e.prefix;if(!Hi({provider:t,prefix:n,name:"a"}))return!1;const r=Rn(t,n);return!!xu(r,e)}const Og=Object.freeze({width:null,height:null}),Fg=Object.freeze({...Og,...Ts}),FS=/(-?[0-9.]*[0-9]+[0-9.]*)/g,BS=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function Af(e,t,n){if(t===1)return e;if(n=n||100,typeof e=="number")return Math.ceil(e*t*n)/n;if(typeof e!="string")return e;const r=e.split(FS);if(r===null||!r.length)return e;const o=[];let i=r.shift(),s=BS.test(i);for(;;){if(s){const a=parseFloat(i);isNaN(a)?o.push(i):o.push(Math.ceil(a*t*n)/n)}else o.push(i);if(i=r.shift(),i===void 0)return o.join("");s=!s}}const WS=e=>e==="unset"||e==="undefined"||e==="none";function US(e,t){const n={...bu,...e},r={...Fg,...t},o={left:n.left,top:n.top,width:n.width,height:n.height};let i=n.body;[n,r].forEach(b=>{const y=[],x=b.hFlip,m=b.vFlip;let p=b.rotate;x?m?p+=2:(y.push("translate("+(o.width+o.left).toString()+" "+(0-o.top).toString()+")"),y.push("scale(-1 1)"),o.top=o.left=0):m&&(y.push("translate("+(0-o.left).toString()+" "+(o.height+o.top).toString()+")"),y.push("scale(1 -1)"),o.top=o.left=0);let w;switch(p<0&&(p-=Math.floor(p/4)*4),p=p%4,p){case 1:w=o.height/2+o.top,y.unshift("rotate(90 "+w.toString()+" "+w.toString()+")");break;case 2:y.unshift("rotate(180 "+(o.width/2+o.left).toString()+" "+(o.height/2+o.top).toString()+")");break;case 3:w=o.width/2+o.left,y.unshift("rotate(-90 "+w.toString()+" "+w.toString()+")");break}p%2===1&&(o.left!==o.top&&(w=o.left,o.left=o.top,o.top=w),o.width!==o.height&&(w=o.width,o.width=o.height,o.height=w)),y.length&&(i='<g transform="'+y.join(" ")+'">'+i+"</g>")});const s=r.width,a=r.height,l=o.width,c=o.height;let d,u;s===null?(u=a===null?"1em":a==="auto"?c:a,d=Af(u,l/c)):(d=s==="auto"?l:s,u=a===null?Af(d,c/l):a==="auto"?c:a);const h={},v=(b,y)=>{WS(y)||(h[b]=y.toString())};return v("width",d),v("height",u),h.viewBox=o.left.toString()+" "+o.top.toString()+" "+l.toString()+" "+c.toString(),{attributes:h,body:i}}const VS=/\sid="(\S+)"/g,HS="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let GS=0;function QS(e,t=HS){const n=[];let r;for(;r=VS.exec(e);)n.push(r[1]);if(!n.length)return e;const o="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(i=>{const s=typeof t=="function"?t(i):t+(GS++).toString(),a=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+a+')([")]|\\.[a-z])',"g"),"$1"+s+o+"$3")}),e=e.replace(new RegExp(o,"g"),""),e}const rc=Object.create(null);function KS(e,t){rc[e]=t}function oc(e){return rc[e]||rc[""]}function ku(e){let t;if(typeof e.resources=="string")t=[e.resources];else if(t=e.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}const Su=Object.create(null),Kr=["https://api.simplesvg.com","https://api.unisvg.com"],Gi=[];for(;Kr.length>0;)Kr.length===1||Math.random()>.5?Gi.push(Kr.shift()):Gi.push(Kr.pop());Su[""]=ku({resources:["https://api.iconify.design"].concat(Gi)});function YS(e,t){const n=ku(t);return n===null?!1:(Su[e]=n,!0)}function Cu(e){return Su[e]}const qS=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}};let _f=qS();function JS(e,t){const n=Cu(e);if(!n)return 0;let r;if(!n.maxURL)r=0;else{let o=0;n.resources.forEach(s=>{o=Math.max(o,s.length)});const i=t+".json?icons=";r=n.maxURL-o-n.path.length-i.length}return r}function XS(e){return e===404}const ZS=(e,t,n)=>{const r=[],o=JS(e,t),i="icons";let s={type:i,provider:e,prefix:t,icons:[]},a=0;return n.forEach((l,c)=>{a+=l.length+1,a>=o&&c>0&&(r.push(s),s={type:i,provider:e,prefix:t,icons:[]},a=l.length),s.icons.push(l)}),r.push(s),r};function e3(e){if(typeof e=="string"){const t=Cu(e);if(t)return t.path}return"/"}const t3=(e,t,n)=>{if(!_f){n("abort",424);return}let r=e3(t.provider);switch(t.type){case"icons":{const i=t.prefix,a=t.icons.join(","),l=new URLSearchParams({icons:a});r+=i+".json?"+l.toString();break}case"custom":{const i=t.uri;r+=i.slice(0,1)==="/"?i.slice(1):i;break}default:n("abort",400);return}let o=503;_f(e+r).then(i=>{const s=i.status;if(s!==200){setTimeout(()=>{n(XS(s)?"abort":"next",s)});return}return o=501,i.json()}).then(i=>{if(typeof i!="object"||i===null){setTimeout(()=>{i===404?n("abort",i):n("next",o)});return}setTimeout(()=>{n("success",i)})}).catch(()=>{n("next",o)})},n3={prepare:ZS,send:t3};function r3(e){const t={loaded:[],missing:[],pending:[]},n=Object.create(null);e.sort((o,i)=>o.provider!==i.provider?o.provider.localeCompare(i.provider):o.prefix!==i.prefix?o.prefix.localeCompare(i.prefix):o.name.localeCompare(i.name));let r={provider:"",prefix:"",name:""};return e.forEach(o=>{if(r.name===o.name&&r.prefix===o.prefix&&r.provider===o.provider)return;r=o;const i=o.provider,s=o.prefix,a=o.name,l=n[i]||(n[i]=Object.create(null)),c=l[s]||(l[s]=Rn(i,s));let d;a in c.icons?d=t.loaded:s===""||c.missing.has(a)?d=t.missing:d=t.pending;const u={provider:i,prefix:s,name:a};d.push(u)}),t}function Bg(e,t){e.forEach(n=>{const r=n.loaderCallbacks;r&&(n.loaderCallbacks=r.filter(o=>o.id!==t))})}function o3(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;const t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let n=!1;const r=e.provider,o=e.prefix;t.forEach(i=>{const s=i.icons,a=s.pending.length;s.pending=s.pending.filter(l=>{if(l.prefix!==o)return!0;const c=l.name;if(e.icons[c])s.loaded.push({provider:r,prefix:o,name:c});else if(e.missing.has(c))s.missing.push({provider:r,prefix:o,name:c});else return n=!0,!0;return!1}),s.pending.length!==a&&(n||Bg([e],i.id),i.callback(s.loaded.slice(0),s.missing.slice(0),s.pending.slice(0),i.abort))})}))}let i3=0;function s3(e,t,n){const r=i3++,o=Bg.bind(null,n,r);if(!t.pending.length)return o;const i={id:r,icons:t,callback:e,abort:o};return n.forEach(s=>{(s.loaderCallbacks||(s.loaderCallbacks=[])).push(i)}),o}function a3(e,t=!0,n=!1){const r=[];return e.forEach(o=>{const i=typeof o=="string"?Xs(o,t,n):o;i&&r.push(i)}),r}var l3={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function c3(e,t,n,r){const o=e.resources.length,i=e.random?Math.floor(Math.random()*o):e.index;let s;if(e.random){let C=e.resources.slice(0);for(s=[];C.length>1;){const E=Math.floor(Math.random()*C.length);s.push(C[E]),C=C.slice(0,E).concat(C.slice(E+1))}s=s.concat(C)}else s=e.resources.slice(i).concat(e.resources.slice(0,i));const a=Date.now();let l="pending",c=0,d,u=null,h=[],v=[];typeof r=="function"&&v.push(r);function b(){u&&(clearTimeout(u),u=null)}function y(){l==="pending"&&(l="aborted"),b(),h.forEach(C=>{C.status==="pending"&&(C.status="aborted")}),h=[]}function x(C,E){E&&(v=[]),typeof C=="function"&&v.push(C)}function m(){return{startTime:a,payload:t,status:l,queriesSent:c,queriesPending:h.length,subscribe:x,abort:y}}function p(){l="failed",v.forEach(C=>{C(void 0,d)})}function w(){h.forEach(C=>{C.status==="pending"&&(C.status="aborted")}),h=[]}function k(C,E,T){const M=E!=="success";switch(h=h.filter(N=>N!==C),l){case"pending":break;case"failed":if(M||!e.dataAfterTimeout)return;break;default:return}if(E==="abort"){d=T,p();return}if(M){d=T,h.length||(s.length?S():p());return}if(b(),w(),!e.random){const N=e.resources.indexOf(C.resource);N!==-1&&N!==e.index&&(e.index=N)}l="completed",v.forEach(N=>{N(T)})}function S(){if(l!=="pending")return;b();const C=s.shift();if(C===void 0){if(h.length){u=setTimeout(()=>{b(),l==="pending"&&(w(),p())},e.timeout);return}p();return}const E={status:"pending",resource:C,callback:(T,M)=>{k(E,T,M)}};h.push(E),c++,u=setTimeout(S,e.rotate),n(C,t,E.callback)}return setTimeout(S),m}function Wg(e){const t={...l3,...e};let n=[];function r(){n=n.filter(a=>a().status==="pending")}function o(a,l,c){const d=c3(t,a,l,(u,h)=>{r(),c&&c(u,h)});return n.push(d),d}function i(a){return n.find(l=>a(l))||null}return{query:o,find:i,setIndex:a=>{t.index=a},getIndex:()=>t.index,cleanup:r}}function Nf(){}const Ba=Object.create(null);function u3(e){if(!Ba[e]){const t=Cu(e);if(!t)return;const n=Wg(t),r={config:t,redundancy:n};Ba[e]=r}return Ba[e]}function d3(e,t,n){let r,o;if(typeof e=="string"){const i=oc(e);if(!i)return n(void 0,424),Nf;o=i.send;const s=u3(e);s&&(r=s.redundancy)}else{const i=ku(e);if(i){r=Wg(i);const s=e.resources?e.resources[0]:"",a=oc(s);a&&(o=a.send)}}return!r||!o?(n(void 0,424),Nf):r.query(t,o,n)().abort}const Rf="iconify2",jo="iconify",Ug=jo+"-count",Mf=jo+"-version",Vg=36e5,f3=168;function ic(e,t){try{return e.getItem(t)}catch{}}function Eu(e,t,n){try{return e.setItem(t,n),!0}catch{}}function $f(e,t){try{e.removeItem(t)}catch{}}function sc(e,t){return Eu(e,Ug,t.toString())}function ac(e){return parseInt(ic(e,Ug))||0}const Zs={local:!0,session:!0},Hg={local:new Set,session:new Set};let Tu=!1;function p3(e){Tu=e}let Ti=typeof window>"u"?{}:window;function Gg(e){const t=e+"Storage";try{if(Ti&&Ti[t]&&typeof Ti[t].length=="number")return Ti[t]}catch{}Zs[e]=!1}function Qg(e,t){const n=Gg(e);if(!n)return;const r=ic(n,Mf);if(r!==Rf){if(r){const a=ac(n);for(let l=0;l<a;l++)$f(n,jo+l.toString())}Eu(n,Mf,Rf),sc(n,0);return}const o=Math.floor(Date.now()/Vg)-f3,i=a=>{const l=jo+a.toString(),c=ic(n,l);if(typeof c=="string"){try{const d=JSON.parse(c);if(typeof d=="object"&&typeof d.cached=="number"&&d.cached>o&&typeof d.provider=="string"&&typeof d.data=="object"&&typeof d.data.prefix=="string"&&t(d,a))return!0}catch{}$f(n,l)}};let s=ac(n);for(let a=s-1;a>=0;a--)i(a)||(a===s-1?(s--,sc(n,s)):Hg[e].add(a))}function Kg(){if(!Tu){p3(!0);for(const e in Zs)Qg(e,t=>{const n=t.data,r=t.provider,o=n.prefix,i=Rn(r,o);if(!xu(i,n).length)return!1;const s=n.lastModified||-1;return i.lastModifiedCached=i.lastModifiedCached?Math.min(i.lastModifiedCached,s):s,!0})}}function h3(e,t){const n=e.lastModifiedCached;if(n&&n>=t)return n===t;if(e.lastModifiedCached=t,n)for(const r in Zs)Qg(r,o=>{const i=o.data;return o.provider!==e.provider||i.prefix!==e.prefix||i.lastModified===t});return!0}function m3(e,t){Tu||Kg();function n(r){let o;if(!Zs[r]||!(o=Gg(r)))return;const i=Hg[r];let s;if(i.size)i.delete(s=Array.from(i).shift());else if(s=ac(o),!sc(o,s+1))return;const a={cached:Math.floor(Date.now()/Vg),provider:e.provider,data:t};return Eu(o,jo+s.toString(),JSON.stringify(a))}t.lastModified&&!h3(e,t.lastModified)||Object.keys(t.icons).length&&(t.not_found&&(t=Object.assign({},t),delete t.not_found),n("local")||n("session"))}function zf(){}function g3(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,o3(e)}))}function v3(e,t){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(t).sort():e.iconsToLoad=t,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;const{provider:n,prefix:r}=e,o=e.iconsToLoad;delete e.iconsToLoad;let i;if(!o||!(i=oc(n)))return;i.prepare(n,r,o).forEach(a=>{d3(n,a,l=>{if(typeof l!="object")a.icons.forEach(c=>{e.missing.add(c)});else try{const c=xu(e,l);if(!c.length)return;const d=e.pendingIcons;d&&c.forEach(u=>{d.delete(u)}),m3(e,l)}catch(c){console.error(c)}g3(e)})})}))}const y3=(e,t)=>{const n=a3(e,!0,Dg()),r=r3(n);if(!r.pending.length){let l=!0;return t&&setTimeout(()=>{l&&t(r.loaded,r.missing,r.pending,zf)}),()=>{l=!1}}const o=Object.create(null),i=[];let s,a;return r.pending.forEach(l=>{const{provider:c,prefix:d}=l;if(d===a&&c===s)return;s=c,a=d,i.push(Rn(c,d));const u=o[c]||(o[c]=Object.create(null));u[d]||(u[d]=[])}),r.pending.forEach(l=>{const{provider:c,prefix:d,name:u}=l,h=Rn(c,d),v=h.pendingIcons||(h.pendingIcons=new Set);v.has(u)||(v.add(u),o[c][d].push(u))}),i.forEach(l=>{const{provider:c,prefix:d}=l;o[c][d].length&&v3(l,o[c][d])}),t?s3(t,r,i):zf};function w3(e,t){const n={...e};for(const r in t){const o=t[r],i=typeof o;r in Og?(o===null||o&&(i==="string"||i==="number"))&&(n[r]=o):i===typeof n[r]&&(n[r]=r==="rotate"?o%4:o)}return n}const b3=/[\s,]+/;function x3(e,t){t.split(b3).forEach(n=>{switch(n.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}function k3(e,t=0){const n=e.replace(/^-?[0-9.]*/,"");function r(o){for(;o<0;)o+=4;return o%4}if(n===""){const o=parseInt(e);return isNaN(o)?0:r(o)}else if(n!==e){let o=0;switch(n){case"%":o=25;break;case"deg":o=90}if(o){let i=parseFloat(e.slice(0,e.length-n.length));return isNaN(i)?0:(i=i/o,i%1===0?r(i):0)}}return t}function S3(e,t){let n=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in t)n+=" "+r+'="'+t[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+e+"</svg>"}function C3(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function E3(e){return"data:image/svg+xml,"+C3(e)}function T3(e){return'url("'+E3(e)+'")'}let uo;function P3(){try{uo=window.trustedTypes.createPolicy("iconify",{createHTML:e=>e})}catch{uo=null}}function A3(e){return uo===void 0&&P3(),uo?uo.createHTML(e):e}const Yg={...Fg,inline:!1},_3={xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},N3={display:"inline-block"},lc={backgroundColor:"currentColor"},qg={backgroundColor:"transparent"},If={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},jf={WebkitMask:lc,mask:lc,background:qg};for(const e in jf){const t=jf[e];for(const n in If)t[e+n]=If[n]}const R3={...Yg,inline:!0};function Lf(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}const M3=(e,t,n,r)=>{const o=n?R3:Yg,i=w3(o,t),s=t.mode||"svg",a={},l=t.style||{},c={...s==="svg"?_3:{},ref:r};for(let m in t){const p=t[m];if(p!==void 0)switch(m){case"icon":case"style":case"children":case"onLoad":case"mode":case"_ref":case"_inline":break;case"inline":case"hFlip":case"vFlip":i[m]=p===!0||p==="true"||p===1;break;case"flip":typeof p=="string"&&x3(i,p);break;case"color":a.color=p;break;case"rotate":typeof p=="string"?i[m]=k3(p):typeof p=="number"&&(i[m]=p);break;case"ariaHidden":case"aria-hidden":p!==!0&&p!=="true"&&delete c["aria-hidden"];break;default:o[m]===void 0&&(c[m]=p)}}const d=US(e,i),u=d.attributes;if(i.inline&&(a.verticalAlign="-0.125em"),s==="svg"){c.style={...a,...l},Object.assign(c,u);let m=0,p=t.id;return typeof p=="string"&&(p=p.replace(/-/g,"_")),c.dangerouslySetInnerHTML={__html:A3(QS(d.body,p?()=>p+"ID"+m++:"iconifyReact"))},j.createElement("svg",c)}const{body:h,width:v,height:b}=e,y=s==="mask"||(s==="bg"?!1:h.indexOf("currentColor")!==-1),x=S3(h,{...u,width:v+"",height:b+""});return c.style={...a,"--svg":T3(x),width:Lf(u.width),height:Lf(u.height),...N3,...y?lc:qg,...l},j.createElement("span",c)};Dg(!0);KS("",n3);if(typeof document<"u"&&typeof window<"u"){Kg();const e=window;if(e.IconifyPreload!==void 0){const t=e.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!OS(r))&&console.error(n)}catch{console.error(n)}})}if(e.IconifyProviders!==void 0){const t=e.IconifyProviders;if(typeof t=="object"&&t!==null)for(let n in t){const r="IconifyProviders["+n+"] is invalid.";try{const o=t[n];if(typeof o!="object"||!o||o.resources===void 0)continue;YS(n,o)||console.error(r)}catch{console.error(r)}}}}class Jg extends j.Component{constructor(t){super(t),this.state={icon:null}}_abortLoading(){this._loading&&(this._loading.abort(),this._loading=null)}_setData(t){this.state.icon!==t&&this.setState({icon:t})}_checkIcon(t){const n=this.state,r=this.props.icon;if(typeof r=="object"&&r!==null&&typeof r.body=="string"){this._icon="",this._abortLoading(),(t||n.icon===null)&&this._setData({data:r});return}let o;if(typeof r!="string"||(o=Xs(r,!1,!0))===null){this._abortLoading(),this._setData(null);return}const i=LS(o);if(!i){(!this._loading||this._loading.name!==r)&&(this._abortLoading(),this._icon="",this._setData(null),i!==null&&(this._loading={name:r,abort:y3([o],this._checkIcon.bind(this,!1))}));return}if(this._icon!==r||n.icon===null){this._abortLoading(),this._icon=r;const s=["iconify"];o.prefix!==""&&s.push("iconify--"+o.prefix),o.provider!==""&&s.push("iconify--"+o.provider),this._setData({data:i,classes:s}),this.props.onLoad&&this.props.onLoad(r)}}componentDidMount(){this._checkIcon(!1)}componentDidUpdate(t){t.icon!==this.props.icon&&this._checkIcon(!0)}componentWillUnmount(){this._abortLoading()}render(){const t=this.props,n=this.state.icon;if(n===null)return t.children?t.children:j.createElement("span",{});let r=t;return n.classes&&(r={...t,className:(typeof t.className=="string"?t.className+" ":"")+n.classes.join(" ")}),M3({...bu,...n.data},r,t._inline,t._ref)}}const un=j.forwardRef(function(t,n){const r={...t,_ref:n,_inline:!1};return j.createElement(Jg,r)});j.forwardRef(function(t,n){const r={...t,_ref:n,_inline:!0};return j.createElement(Jg,r)});var Xg={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var i="",s=0;s<arguments.length;s++){var a=arguments[s];a&&(i=o(i,r(a)))}return i}function r(i){if(typeof i=="string"||typeof i=="number")return i;if(typeof i!="object")return"";if(Array.isArray(i))return n.apply(null,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var s="";for(var a in i)t.call(i,a)&&i[a]&&(s=o(s,a));return s}function o(i,s){return s?i?i+" "+s:i+s:i}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(Xg);var $3=Xg.exports;const Zg=Cr($3),ev=f.createContext({}),z3=e=>l1(pm(e)),Wa={base:"block w-full sm:text-sm rounded-md dark:text-white dark:bg-gray-900 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none",invalid:"pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500",valid:"shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 dark:border-gray-600"},wC=({status:e,className:t,except:n})=>{var i;const r=new ou({responseStatus:e??((i=f.useContext(ev))==null?void 0:i.error)}),o=r.responseStatus?v1.call(r,n??[]):null;return o?g.jsx("div",{className:Zg("bg-red-50 border-l-4 border-red-400 p-4",t),children:g.jsxs("div",{className:"flex",children:[g.jsx("div",{className:"flex-shrink-0",children:g.jsx(un,{icon:"mdi:close-circle",className:"h-5 w-5 text-red-500","aria-hidden":"true"})}),g.jsx("div",{className:"ml-3",children:g.jsx("p",{className:"text-sm text-red-700",children:o})})]})}):null},bC=({status:e,id:t,type:n,className:r,placeholder:o,help:i,label:s,...a})=>{var x;const l=n??"text",c=s??z3(t),d=o??c,u=i??"",h=new ou({responseStatus:e??((x=f.useContext(ev))==null?void 0:x.error)}),v=t&&h.responseStatus&&y1.call(h,t),b=v!=null,y=(m,p)=>[b?p:m,r];return!v&&u&&(a["aria-describedby"]=`${t}-description`),g.jsxs("div",{children:[c?g.jsx("label",{htmlFor:t,className:"block text-sm font-medium text-gray-700 dark:text-gray-200",children:c}):null,g.jsxs("div",{className:"mt-1 relative rounded-md shadow-sm",children:[g.jsx("input",{type:l,className:Zg([Wa.base,...y(Wa.valid,Wa.invalid)]),id:t,name:t,placeholder:d,...a}),b?g.jsx("div",{className:"absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none",children:g.jsx("svg",{className:"h-5 w-5 text-red-500",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:g.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})})}):null]}),b?g.jsx("p",{className:"mt-2 text-sm text-red-500",id:`${t}-error`,children:v}):u?g.jsx("p",{id:`${t}-description`,className:"text-gray-500 dark:text-gray-400",children:u}):null]})},I3=({className:e,icon:t,text:n})=>{const r=t||t===void 0,o=n===void 0?"loading...":n;let i=["flex",e];return g.jsxs("div",{className:i.join(" "),title:"loading...",children:[r?g.jsxs("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"24px",height:"30px",viewBox:"0 0 24 30",children:[g.jsxs("rect",{x:"0",y:"10",width:"4",height:"10",fill:"#333",opacity:"0.2",children:[g.jsx("animate",{attributeName:"opacity",attributeType:"XML",values:"0.2; 1; .2",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}),g.jsx("animate",{attributeName:"height",attributeType:"XML",values:"10; 20; 10",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}),g.jsx("animate",{attributeName:"y",attributeType:"XML",values:"10; 5; 10",begin:"0s",dur:"0.6s",repeatCount:"indefinite"})]}),g.jsxs("rect",{x:"8",y:"10",width:"4",height:"10",fill:"#333",opacity:"0.2",children:[g.jsx("animate",{attributeName:"opacity",attributeType:"XML",values:"0.2; 1; .2",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}),g.jsx("animate",{attributeName:"height",attributeType:"XML",values:"10; 20; 10",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}),g.jsx("animate",{attributeName:"y",attributeType:"XML",values:"10; 5; 10",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"})]}),g.jsxs("rect",{x:"16",y:"10",width:"4",height:"10",fill:"#333",opacity:"0.2",children:[g.jsx("animate",{attributeName:"opacity",attributeType:"XML",values:"0.2; 1; .2",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}),g.jsx("animate",{attributeName:"height",attributeType:"XML",values:"10; 20; 10",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}),g.jsx("animate",{attributeName:"y",attributeType:"XML",values:"10; 5; 10",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"})]})]}):null,g.jsx("span",{className:"ml-1 text-gray-400",children:o})]})};var tv,Df=Wo;tv=Df.createRoot,Df.hydrateRoot;const Ua=({className:e,children:t})=>{let[n,r]=f.useState("");function o(i){var l,c;let s=document.createElement("input"),a=i.target.parentElement.querySelector("label");if(s.setAttribute("value",a.innerText),document.body.appendChild(s),s.select(),document.execCommand("copy"),document.body.removeChild(s),typeof window.getSelection=="function"){const d=document.createRange();d.selectNodeContents(a),(l=window.getSelection())==null||l.removeAllRanges(),(c=window.getSelection())==null||c.addRange(d)}r("copied"),setTimeout(()=>r(""),3e3)}return g.jsxs("div",{className:`${e} relative bg-gray-700 text-gray-300 pl-5 py-3 sm:rounded flex`,children:[g.jsxs("div",{className:"flex ml-2 w-full justify-between cursor-pointer",onClick:o,children:[g.jsxs("div",{children:[g.jsx("span",{children:"$ "}),g.jsx("label",{className:"cursor-pointer",children:t})]}),g.jsx("small",{className:"text-xs text-gray-400 px-3 -mt-1",children:"sh"})]}),n?g.jsx("div",{className:"absolute right-0 -mr-28 -mt-3 rounded-md bg-green-50 p-3",children:g.jsxs("div",{className:"flex",children:[g.jsx("div",{className:"flex-shrink-0",children:g.jsx(un,{icon:"mdi:check-circle",className:"h-5 w-5 text-green-400"})}),g.jsx("div",{className:"ml-3",children:g.jsx("p",{className:"text-sm font-medium text-green-800",children:n})})]})}):null]})},j3=({template:e})=>{let t="ProjectName",[n,r]=f.useState(t);const o=l=>r(l.target.value),i=l=>`https://account.servicestack.net/archive/${l}?Name=${n||"MyApp"}`,s=f.useMemo(()=>(n||"MyApp")+".zip",[n]);function a(l){if(l.key.match(/[\W]+/g))return l.preventDefault(),!1}return g.jsxs("div",{className:"flex flex-col w-96",children:[g.jsx("h4",{className:"py-6 text-center text-xl",children:"Download New Project"}),g.jsx("input",{type:"text",onChange:o,defaultValue:t,autoComplete:"off",spellCheck:"false",onKeyDown:a,className:"mb-8 sm:text-lg rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 dark:bg-gray-800"}),g.jsx("section",{className:"w-full flex justify-center text-center",children:g.jsx("div",{className:"mb-2",children:g.jsx("div",{className:"flex justify-center text-center",children:g.jsx("a",{className:"archive-url hover:no-underline",href:i(`ServiceStack/${e}`),children:g.jsxs("div",{className:"bg-white dark:bg-gray-800 px-4 py-4 mr-4 mb-4 rounded-lg shadow-lg text-center items-center justify-center hover:shadow-2xl dark:border-2 dark:border-pink-600 dark:hover:border-blue-600",style:{minWidth:"150px"},children:[g.jsx("div",{className:"text-center font-extrabold flex items-center justify-center mb-2",children:g.jsx("div",{className:"text-4xl text-blue-400 my-3",children:g.jsx(un,{icon:"logos:react",className:"w-12 h-12"})})}),g.jsx("div",{className:"text-xl font-medium text-gray-700 dark:text-gray-300",children:"React SPA"}),g.jsx("div",{className:"flex justify-center h-8"}),g.jsx("span",{className:"archive-name px-4 pb-2 text-blue-600 dark:text-indigo-400",children:s}),g.jsx("div",{className:"count mt-1 text-gray-400 text-sm"})]})})})})}),g.jsx("h4",{className:"pb-4 text-center text-xl",children:"or"}),g.jsx(Ua,{className:"mb-2",children:"npx degit ServiceStack/press-react"}),g.jsx("h4",{className:"py-4 text-center text-xl",children:"or"}),g.jsx("div",{className:"mx-auto",children:g.jsx("a",{href:"https://stackblitz.com/github/ServiceStack/press-react",children:g.jsx("img",{alt:"Open in StackBlitz",src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg"})})}),g.jsx("h4",{className:"py-6 text-center text-xl",children:"Run"}),g.jsx(Ua,{className:"mb-2",children:"npm install"}),g.jsx(Ua,{className:"mb-2",children:"npm run dev"})]})},$r=f.createContext({});function L3(e,t){const[n,r]=f.useState(!1),[o,i]=f.useState(!1),s=encodeURIComponent(e.id),a=typeof e.playlistCoverId=="string"?encodeURIComponent(e.playlistCoverId):null,l=e.title,c=e.poster||"hqdefault",d=`&${e.params}`||"",u=e.muted?"&mute=1":"",h=e.announce||"Watch",v=e.webp?"webp":"jpg",b=e.webp?"vi_webp":"vi",y=e.thumbnail||(e.playlist?`https://i.ytimg.com/${b}/${a}/${c}.${v}`:`https://i.ytimg.com/${b}/${s}/${c}.${v}`);let x=e.noCookie?"https://www.youtube-nocookie.com":"https://www.youtube.com";x=e.cookie?"https://www.youtube.com":"https://www.youtube-nocookie.com";const m=e.playlist?`${x}/embed/videoseries?autoplay=1${u}&list=${s}${d}`:`${x}/embed/${s}?autoplay=1&state=1${u}${d}`,p=e.activatedClass||"lyt-activated",w=e.adNetwork||!1,k=e.aspectHeight||9,S=e.aspectWidth||16,C=e.iframeClass||"",E=e.playerClass||"lty-playbtn",T=e.wrapperClass||"yt-lite",M=e.onIframeAdded||function(){},N=e.rel?"prefetch":"preload",F=e.containerElement||"article",z=e.style||{},X=()=>{n||r(!0)},B=()=>{o||i(!0)};return f.useEffect(()=>{o&&M()},[o]),g.jsxs(g.Fragment,{children:[g.jsx("link",{rel:N,href:y,as:"image"}),g.jsx(g.Fragment,{children:n&&g.jsxs(g.Fragment,{children:[g.jsx("link",{rel:"preconnect",href:x}),g.jsx("link",{rel:"preconnect",href:"https://www.google.com"}),w&&g.jsxs(g.Fragment,{children:[g.jsx("link",{rel:"preconnect",href:"https://static.doubleclick.net"}),g.jsx("link",{rel:"preconnect",href:"https://googleads.g.doubleclick.net"})]})]})}),g.jsxs(F,{onPointerOver:X,onClick:B,className:`${T} ${o?p:""}`,"data-title":l,style:{backgroundImage:`url(${y})`,"--aspect-ratio":`${k/S*100}%`,...z},children:[g.jsx("button",{type:"button",className:E,"aria-label":`${h} ${l}`}),o&&g.jsx("iframe",{ref:t,className:C,title:l,width:"560",height:"315",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,src:m})]})]})}const nv=f.forwardRef(L3);function Ps({files:e,label:t,contents:n}){return g.jsx(g.Fragment,{children:e?g.jsx("div",{children:Object.entries(e).map(([r,o])=>g.jsx(Ps,{label:r,contents:o},r))}):g.jsx("div",{children:t==="_"?g.jsx("div",{children:Object.values(n).map(r=>g.jsxs("div",{className:"ml-6 flex items-center text-base leading-8",children:[g.jsx("svg",{className:"mr-1 text-slate-600 inline-block select-none align-text-bottom overflow-visible","aria-hidden":!0,focusable:!1,role:"img",viewBox:"0 0 16 16",width:"16",height:"16",fill:"currentColor",children:g.jsx("path",{d:"M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"})}),g.jsx("span",{children:r})]},r))}):g.jsx("div",{children:g.jsxs("div",{className:"ml-6",children:[g.jsxs("div",{className:"flex items-center text-base leading-8",children:[g.jsx("svg",{className:le("mr-1 text-slate-600 inline-block select-none align-text-bottom overflow-visible",Object.keys(n??[]).length==0?"-rotate-90":""),"aria-hidden":"true",focusable:"false",role:"img",viewBox:"0 0 12 12",width:"12",height:"12",fill:"currentColor",children:g.jsx("path",{d:"M6 8.825c-.2 0-.4-.1-.5-.2l-3.3-3.3c-.3-.3-.3-.8 0-1.1.3-.3.8-.3 1.1 0l2.7 2.7 2.7-2.7c.3-.3.8-.3 1.1 0 .3.3.3.8 0 1.1l-3.2 3.2c-.2.2-.4.3-.6.3Z"})}),g.jsx("svg",{className:"mr-1 text-sky-500","aria-hidden":"true",focusable:"false",role:"img",viewBox:"0 0 16 16",width:"16",height:"16",fill:"currentColor",children:g.jsx("path",{d:"M.513 1.513A1.75 1.75 0 0 1 1.75 1h3.5c.55 0 1.07.26 1.4.7l.9 1.2a.25.25 0 0 0 .2.1H13a1 1 0 0 1 1 1v.5H2.75a.75.75 0 0 0 0 1.5h11.978a1 1 0 0 1 .994 1.117L15 13.25A1.75 1.75 0 0 1 13.25 15H1.75A1.75 1.75 0 0 1 0 13.25V2.75c0-.464.184-.91.513-1.237Z"})}),g.jsx("span",{children:t})]}),Object.entries(n??{}).map(([r,o])=>g.jsx(Ps,{label:r,contents:o},r))]})})})})}const ur={Files:F3,Icon:un,Iconify:un,Youtube:O3,FileLayout:Ps,Include:D3,Alert:Yr,Tip:({className:e,...t})=>g.jsx(Yr,{title:"TIP",className:le("tip",e),...t}),Info:({className:e,...t})=>g.jsx(Yr,{title:"INFO",className:le("info",e),...t}),Warning:({className:e,...t})=>g.jsx(Yr,{title:"WARNING",className:le("warning",e),...t}),Danger:({className:e,...t})=>g.jsx(Yr,{title:"DANGER",className:le("danger",e),...t}),Copy:({className:e,...t})=>g.jsx(Of,{className:le("not-prose copy cp",e),icon:"bg-sky-500",...t}),Sh:({className:e,...t})=>g.jsx(Of,{className:le("not-prose sh-copy cp",e),box:"bg-gray-800",icon:"bg-green-600",txt:"whitespace-pre text-base text-gray-100",...t})};function D3({src:e}){const n=j.useContext($r).components.includes[e],r=f.lazy(n||(()=>Promise.resolve(g.jsx(g.Fragment,{}))));return n?g.jsx(f.Suspense,{fallback:g.jsx(g.Fragment,{}),children:g.jsx(r,{components:ur})}):g.jsxs("div",{className:"text-red-500",children:["Include '",e,"' not found"]})}function Yr({className:e,title:t,children:n}){return g.jsxs("div",{className:le(e,"custom-block"),children:[g.jsx("p",{className:"custom-block-title",children:t}),n]})}function Of({className:e,icon:t,box:n,txt:r,children:o}){let[i,s]=f.useState("");function a(l){var h;const c=l.currentTarget;s("copying");let d=document.createElement("textarea"),u=((h=c.querySelector("code")||c.querySelector("p"))==null?void 0:h.innerHTML)??"";d.innerHTML=u,document.body.appendChild(d),d.select(),document.execCommand("copy"),document.body.removeChild(d),setTimeout(()=>s(""),3e3)}return g.jsxs("div",{className:le(e,i,"flex cursor-pointer mb-3"),onClick:a,children:[g.jsx("div",{className:le("flex-grow",n||"bg-gray-700"),children:g.jsx("div",{className:le("pl-4 py-1 pb-1.5 align-middle",r||"text-lg text-white"),children:o})}),g.jsx("div",{className:"flex",children:g.jsxs("div",{className:le(t,"text-white p-1.5 pb-0"),children:[g.jsx("svg",{className:"copied w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 13l4 4L19 7"})}),g.jsxs("svg",{className:"nocopy w-6 h-6",fill:"none",stroke:"white",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[g.jsx("title",{children:"copy"}),g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})]})]})})]})}function O3({arg:e}){return g.jsx(nv,{id:e})}function F3({body:e}){function t(o,i=2){const s=o.split(`
`),a={_:[]},l=[a];for(const c of s){const d=c.search(/\S/)/i,u=c.trim(),h=l[d];if(u.includes("."))h._.push(u);else{const v={_:[]},b=u.substring(1);h[b]=v,l.length=d+1,l.push(v)}}return a}const n=(e==null?void 0:e.trim())||"",r=t(n);return g.jsx(Ps,{files:r})}function B3(e){return(e||"").replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}Object.keys(ur).forEach(e=>ur[B3(e)]=ur[e]);const W3=({doc:e,type:t,group:n})=>{const o=j.useContext($r).components[t]||{},i=n?o[n]&&o[n][e.slug]:o[e.slug],s=f.lazy(i||(()=>Promise.resolve(g.jsx(g.Fragment,{}))));return i?g.jsx(f.Suspense,{fallback:g.jsx(g.Fragment,{}),children:g.jsx(s,{components:ur})}):e.preview?g.jsx("div",{dangerouslySetInnerHTML:{__html:e.preview}}):g.jsx("pre",{dangerouslySetInnerHTML:{__html:e.content}})},U3=({src:e})=>{const n=j.useContext($r).components.includes[e],r=f.lazy(n||(()=>Promise.resolve(g.jsx(g.Fragment,{}))));return n?g.jsx(f.Suspense,{fallback:g.jsx(g.Fragment,{}),children:g.jsx(r,{components:ur})}):g.jsxs("div",{className:"text-red-500",children:["Include '",e,"' not found"]})},V3=({group:e,title:t,background:n,summary:r,learnMore:o})=>{const s=f.useContext($r).videos[e];function a(c){return hm(c,"/")}function l(c){return new Date(c).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}return g.jsx("div",{className:le(n,"py-24 sm:py-32"),children:g.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:g.jsxs("div",{className:"mx-auto max-w-5xl",children:[g.jsx("h2",{className:"text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl",children:t}),g.jsxs("p",{className:"mt-2 text-lg leading-8 text-gray-600 dark:text-gray-400",children:[r,o?g.jsxs("a",{href:o,className:"ml-2 text-sm font-semibold leading-6",children:["Learn more ",g.jsx("span",{"aria-hidden":"true",children:"→"})]}):null]}),g.jsx("div",{className:"mt-16 space-y-20 lg:mt-20 lg:space-y-20",children:s.map(c=>g.jsxs("article",{className:"relative isolate flex flex-col gap-8 lg:flex-row",children:[g.jsx("div",{className:"relative lg:w-1/2 lg:shrink-0",children:g.jsx(nv,{id:a(c.url),title:c.title})}),g.jsxs("div",{children:[g.jsxs("div",{className:"flex items-center gap-x-4 text-xs",children:[g.jsx("time",{dateTime:"2020-03-16",className:"text-gray-500 dark:text-gray-400",children:l(c.date)}),c.tags.map(d=>g.jsx("span",{className:"relative z-10 rounded-full bg-gray-50 dark:bg-gray-800 py-1.5 px-3 font-medium text-gray-600 dark:text-gray-300",children:d},d))]}),g.jsxs("div",{className:"group relative max-w-xl",children:[g.jsx("h3",{className:"mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-gray-50 group-hover:text-gray-600 dark:group-hover:text-gray-400",children:g.jsx("a",{href:c.url,children:c.title})}),g.jsx("div",{className:"mt-5 text-sm leading-6 text-gray-600 dark:text-gray-400",children:g.jsx("div",{className:"prose dark:prose-invert",children:g.jsx(W3,{type:"videos",doc:c,group:e})})})]})]})]},c.url))})]})})})},H3=({href:e,iconSrc:t,children:n})=>{const o=e.includes("://")?e:Ge("https://github.com/ServiceStack/press-react/blob/main",e),i=hm(e,"/");return t?g.jsxs("a",{href:o,className:"mr-3 text-gray-500 hover:text-gray-600 text-decoration-none",children:[g.jsx("img",{src:t,className:"w-5 h-5 inline-flex text-purple-800 mr-1",alt:"file icon"}),i]}):g.jsxs("a",{href:o,className:"mr-3 text-gray-400 hover:text-gray-500 text-decoration-none",children:[n," ",i]})},G3=({path:e})=>g.jsx(H3,{href:Ge("/src/pages",e),children:g.jsx(un,{icon:"mdi:react",className:"w-5 h-5 text-link-dark inline"})}),Q3=()=>{const e=f.useContext($r),n=e.blog.posts[0],r=n.author;function o(l){return l&&e.blog.authors.some(c=>c.name.toLowerCase()==l.toLowerCase())?`/posts/author/${rb(l)}`:null}function i(l){return`/posts/${l.slug}`}function s(l){return l?e.blog.authors.filter(c=>c.name.toLowerCase()==l.toLowerCase())[0]:null}function a(l){var c;return((c=s(l))==null?void 0:c.profileUrl)??"/img/profiles/user1.svg"}return g.jsxs(zg,{title:"React SPA with Vite + TypeScript",children:[g.jsx("div",{className:"mx-auto mt-16 max-w-7xl px-4 sm:mt-24",children:g.jsxs("div",{className:"text-center",children:[g.jsxs("h1",{className:"text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl md:text-6xl",children:[g.jsx("span",{className:"block xl:inline",children:"Welcome to "}),g.jsx("span",{className:"block text-link-dark dark:text-link-dark xl:inline",children:"Press React"})]}),g.jsx("p",{className:"mx-auto mt-3 max-w-md text-base text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl",children:"Welcome to your new React SPA App"}),g.jsx("div",{className:"mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8",children:g.jsx("div",{className:"mt-3 rounded-md shadow sm:mt-0 sm:ml-3",children:g.jsx(er,{to:"https://ui.shadcn.com/docs/components/accordion",className:"flex w-full items-center justify-center rounded-md border border-transparent bg-link-dark dark:bg-link-dark px-8 py-3 text-base font-medium text-white hover:bg-gray-700 md:py-4 md:px-10 md:text-lg",children:"React Component Gallery"})})})]})}),g.jsx("section",{className:"py-8 flex",children:g.jsxs("div",{className:"mt-8 mx-auto",children:[g.jsx("h2",{className:"mt-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl text-center",children:"Getting Started"}),g.jsx("div",{children:g.jsx(j3,{template:"press-react"})})]})}),g.jsx("div",{className:"container mx-auto px-5 mt-24 mb-24",children:n?g.jsxs("section",{children:[g.jsx("div",{className:"mb-8 md:mb-16",children:g.jsx("div",{className:"sm:mx-0",children:g.jsx(er,{"aria-label":n.title,to:i(n),children:g.jsx("img",{src:n.image,alt:`Cover Image for ${n.title}`,className:"shadow-sm hover:shadow-2xl transition-shadow duration-200"})})})}),g.jsxs("div",{className:"md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28",children:[g.jsxs("div",{children:[g.jsx("h3",{className:"mb-4 text-4xl lg:text-6xl leading-tight",children:g.jsx(er,{className:"hover:underline",to:i(n),children:n.title})}),g.jsx("div",{className:"mb-4 md:mb-0 text-lg",children:g.jsx("time",{dateTime:ib(n.date),children:ob(n.date)})})]}),g.jsxs("div",{children:[g.jsx("p",{className:"text-lg leading-relaxed mb-4",children:n.summary}),o(n.author)?g.jsxs(er,{className:"flex items-center text-xl font-bold",to:o(n.author),children:[g.jsx("img",{src:a(n.author),className:"w-12 h-12 rounded-full mr-4",alt:"Author"}),g.jsx("span",{children:r})]}):g.jsxs("span",{className:"flex items-center text-xl font-bold",children:[g.jsx("img",{src:a(n.author),className:"w-12 h-12 rounded-full mr-4",alt:"Author"}),g.jsx("span",{children:r})]})]})]})]}):null}),g.jsx("div",{className:"flex justify-center my-20 py-20 bg-slate-100 dark:bg-slate-800",children:g.jsxs("div",{className:"text-center",children:[g.jsx(un,{icon:"mdi:feature-highlight",className:"text-link-dark w-36 h-36 inline-block"}),g.jsx("h1",{className:"text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left",children:"Features"})]})}),g.jsx("div",{className:"text-center text-xl",children:"Opinionated React template for a productive out-of-the-box development UX"}),g.jsx("div",{className:"prose dark:prose-invert lg:prose-xl mx-auto",children:g.jsx(U3,{src:"features.md"})}),g.jsx("div",{className:"flex justify-center my-20 py-20 bg-slate-100 dark:bg-slate-800",children:g.jsxs("div",{className:"text-center",children:[g.jsx(un,{icon:"material-symbols:hangout-video",className:"text-green-600 w-36 h-36 inline-block"}),g.jsx("h1",{className:"text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left",children:"Videos"})]})}),g.jsx(V3,{title:"SPA Development",summary:"Learn about ServiceStack's productive features for rapidly developing Single Page Apps",group:"react"}),g.jsx("div",{className:"my-8 flex justify-center gap-x-4",children:g.jsx(G3,{path:"index.tsx"})})]})},K3=j.lazy(()=>H(()=>import("./about-5QuERoyX.js"),__vite__mapDeps([0,1]))),Y3=j.lazy(()=>H(()=>import("./blog-BL8jM7kW.js"),__vite__mapDeps([]))),q3=j.lazy(()=>H(()=>import("./counter-DzzLP1tc.js"),__vite__mapDeps([]))),J3=j.lazy(()=>H(()=>import("./privacy-C5zj2oed.js"),__vite__mapDeps([2,1]))),X3=j.lazy(()=>H(()=>import("./videos-C1dNTo3o.js"),__vite__mapDeps([]))),Z3=j.lazy(()=>H(()=>import("./whatsnew-DcycLKfG.js"),__vite__mapDeps([]))),eC=j.lazy(()=>H(()=>import("./_slug_-B7_awbqK.js"),__vite__mapDeps([]))),tC=j.lazy(()=>H(()=>import("./index-S7r7KMS9.js"),__vite__mapDeps([3,4]))),nC=j.lazy(()=>H(()=>import("./_name_-zBtV8x8w.js"),__vite__mapDeps([5,4]))),rC=j.lazy(()=>H(()=>import("./_tag_-PCV0Bwi4.js"),__vite__mapDeps([6,4]))),oC=j.lazy(()=>H(()=>import("./_year_-ClkgiWtW.js"),__vite__mapDeps([7,4]))),iC=[{caseSensitive:!1,path:"about",element:j.createElement(K3)},{caseSensitive:!1,path:"blog",element:j.createElement(Y3)},{caseSensitive:!1,path:"counter",element:j.createElement(q3)},{caseSensitive:!1,path:"/",element:j.createElement(Q3)},{caseSensitive:!1,path:"privacy",element:j.createElement(J3)},{caseSensitive:!1,path:"videos",element:j.createElement(X3)},{caseSensitive:!1,path:"whatsnew",element:j.createElement(Z3)},{caseSensitive:!1,path:"posts",children:[{caseSensitive:!1,path:":slug",element:j.createElement(eC)},{caseSensitive:!1,path:"",element:j.createElement(tC)},{caseSensitive:!1,path:"author",children:[{caseSensitive:!1,path:":name",element:j.createElement(nC)}]},{caseSensitive:!1,path:"tagged",children:[{caseSensitive:!1,path:":tag",element:j.createElement(rC)}]},{caseSensitive:!1,path:"year",children:[{caseSensitive:!1,path:":year",element:j.createElement(oC)}]}]}],sC={blog:{config:{localBaseUrl:"http://localhost:5173",publicBaseUrl:"https://react-vue.servicestack.net",siteTwitter:"@React",blogTitle:"From the blog",blogDescription:"Writing on software design and aerospace industry.",blogEmail:"email@example.org (React)",blogImageUrl:"https://servicestack.net/img/logo.png"},authors:[{name:"Lucy Bates",email:"lucy@email.org",bio:"Works in software design, company building, and the aerospace industry.",profileUrl:"/img/profiles/user1.svg",twitterUrl:"https://twitter.com/lucy",threadsUrl:"https://threads.net/@lucy",gitHubUrl:"https://github.com/lucy"},{name:"Gayle Smith",email:"gayle@email.org",bio:"Gayle is an author, consultant, and founder focusing on improving tech.",profileUrl:"/img/profiles/user2.svg",twitterUrl:"https://twitter.com/gayle",mastodonUrl:"https://mastodon.social/@gayle"},{name:"Brandon Foley",email:"brandon@email.org",bio:"I am a programmer at heart. I like to tinker with code and build generic coding structures.",profileUrl:"/img/profiles/user3.svg",gitHubUrl:"https://github.com/brandon"}],posts:[{slug:"vite-press-plugin",path:"src/_posts/2024-03-01_vite-press-plugin.md",fileName:"vite-press-plugin.md",content:`The Vite Press Plugin is an alternative to [VitePress](https://vitepress.dev) for adding Markdown features 
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

<div class="not-prose mt-8 grid grid-cols-2 gap-4">
    <a class="block group border dark:border-gray-800 hover:border-indigo-700 dark:hover:border-indigo-700 flex flex-col justify-between" href="https://press-vue.servicestack.net">
        <img class="p-2" src="https://raw.githubusercontent.com/ServiceStack/Assets/master/csharp-templates/press-vue.png" />
        <div class="bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 font-semibold group-hover:bg-indigo-700 group-hover:text-white text-center py-2">press-vue.servicestack.net</div>
    </a>
    <a class="block group border dark:border-gray-800 hover:border-indigo-700 dark:hover:border-indigo-700 flex flex-col justify-between" href="https://press-react.servicestack.net">
        <img class="p-2" src="https://raw.githubusercontent.com/ServiceStack/Assets/master/csharp-templates/press-react.png" />
        <div class="bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 font-semibold group-hover:bg-indigo-700 group-hover:text-white text-center py-2">press-react.servicestack.net</div>
    </a>
</div>

#### .NET 8 API backend with Vite Vue & React SPA frontend

 - [vue-spa](https://vue-spa.web-templates.io) - .NET 8 API with Vite Vue SPA frontend
 - [react-spa](https://react-spa.web-templates.io) - .NET 8 API with Vite React SPA frontend

<div class="not-prose mt-8 grid grid-cols-2 gap-4">
    <a class="block group border dark:border-gray-800 hover:border-indigo-700 dark:hover:border-indigo-700 flex flex-col justify-between" href="https://vue-spa.web-templates.io">
        <img class="p-2" src="https://raw.githubusercontent.com/ServiceStack/Assets/master/csharp-templates/vue-spa.png" />
        <div class="bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 font-semibold group-hover:bg-indigo-700 group-hover:text-white text-center py-2">vue-spa.web-templates.io</div>
    </a>
    <a class="block group border dark:border-gray-800 hover:border-indigo-700 dark:hover:border-indigo-700 flex flex-col justify-between" href="https://react-spa.web-templates.io">
        <img class="p-2" src="https://raw.githubusercontent.com/ServiceStack/Assets/master/csharp-templates/react-spa.png" />
        <div class="bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 font-semibold group-hover:bg-indigo-700 group-hover:text-white text-center py-2">react-spa.web-templates.io</div>
    </a>
</div>

The **vite-press-plugin** makes the Markdown features available to the Vite App, whilst the markdown rendering itself is optimally
implemented in:

 - Vue Templates - with [markdown-it](https://github.com/markdown-it/markdown-it) in [Vue SFC](https://vuejs.org/guide/scaling-up/sfc.html) Components
 - React Templates - with [remark](https://github.com/remarkjs/remark) and [MDX](https://mdxjs.com) in [React](https://react.dev) Components

### .NET Templates with C# and Markdig

Whilst the same Markdown feature folders are [implemented in C#](https://razor-ssg.web-templates.io/posts/razor-ssg)
and rendered with [Markdig](https://github.com/xoofx/markdig) and either Razor Pages or Blazor Components:

#### .NET 8 Razor SSG and Blazor SSR Templates

 - [razor-ssg](https://razor-ssg.web-templates.io) - .NET Razor SSG Blog and Marketing Website with **Markdig**
 - [blazor-vue](https://blazor-vue.web-templates.io) - .NET 8 Blazor Server Rendered Website with **Markdig**
 - [razor-press](https://razor-press.web-templates.io) - .NET Razor SSG Documentation Website with **Markdig**

<div class="not-prose mt-8 grid grid-cols-2 gap-4">
    <a class="block group border dark:border-gray-800 hover:border-indigo-700 dark:hover:border-indigo-700 flex flex-col justify-between" href="https://razor-ssg.web-templates.io">
        <img class="p-2" src="https://raw.githubusercontent.com/ServiceStack/Assets/master/csharp-templates/razor-ssg.png" />
        <div class="bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 font-semibold group-hover:bg-indigo-700 group-hover:text-white text-center py-2">razor-ssg.web-templates.io</div>
    </a>
    <a class="block group border dark:border-gray-800 hover:border-indigo-700 dark:hover:border-indigo-700 flex flex-col justify-between" href="https://blazor-vue.web-templates.io">
        <img class="p-2" src="https://raw.githubusercontent.com/ServiceStack/Assets/master/csharp-templates/blazor-vue.png" />
        <div class="bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 font-semibold group-hover:bg-indigo-700 group-hover:text-white text-center py-2">blazor-vue.web-templates.io</div>
    </a>
</div>

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
    npm run dev
    :::

#### Output

:::sh
npm run dev
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

The benefit of this approach of marking up documentation is that the markdown content still remains in an optimal 
human-readable form even when the markdown renderer lacks the custom fenced components to render the richer UI.

## Components In Markdown

Up till now all above features will let you render the same markdown content in all available Vue, React, Razor or Blazor
templates. At the cost of reduced portability, you're also able to embed rich Interactive Vue or React components directly in 
markdown.

:::include component-links.md:::

`,date:"2024-03-01",tags:["docs","markdown"],wordCount:2368,lineCount:525,minutesToRead:11,title:"Vite Press Plugin",summary:"Introducing the Vite Press Plugin for Vite Vue & React Apps",author:"Lucy Bates",image:"https://images.unsplash.com/photo-1524668951403-d44b28200ce0?crop=entropy&fit=crop&h=1000&w=2000",url:"/posts/vite-press-plugin"},{slug:"markdown-components-in-react",path:"src/_posts/2024-02-28_markdown-components-in-react.mdx",fileName:"markdown-components-in-react.mdx",content:`import GettingStarted from "@/components/GettingStarted"
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

That can be referenced using normal JSX component reference syntax, e.g:

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
}} />`,date:"2024-02-28",tags:["docs","markdown"],wordCount:975,lineCount:299,minutesToRead:4,title:"React Components in Markdown",summary:"How to reference and Import React Components in Markdown",author:"Lucy Bates",image:"https://images.unsplash.com/photo-1700427296131-0cc4c4610fc6?crop=entropy&fit=crop&h=1000&w=2000",url:"/posts/markdown-components-in-react"},{slug:"net8-best-blazor",path:"src/_posts/2023-11-22_net8-best-blazor.md",fileName:"net8-best-blazor.md",content:`The best way to find out what's new in .NET 8 Blazor is to watch the excellent 
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
`,date:"2023-11-22",tags:["c#","blazor","servicestack"],wordCount:4001,lineCount:482,minutesToRead:18,title:".NET 8's Best Blazor is not Blazor as we know it",summary:"We explore the exciting new potential of Blazor in .NET 8 to develop fast, interactive Web Apps without compromise",image:"https://images.unsplash.com/photo-1482686115713-0fbcaced6e28?crop=entropy&fit=crop&h=1000&w=2000",author:"Gayle Smith",url:"/posts/net8-best-blazor"},{slug:"net8-blazor-template",path:"src/_posts/2023-11-20_net8-blazor-template.md",fileName:"net8-blazor-template.md",content:`With the release of **.NET 8**, we're happy to announce ServiceStack's new [Blazor](https://blazor.web-templates.io/)
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
complex animations that would otherwise be time-consuming and challenging to build.`,date:"2023-03-08",tags:[],wordCount:86,lineCount:7,minutesToRead:0,title:"Animaginary",url:"/blog",image:"/img/whatsnew/animaginary.svg",group:"Animaginary"}]},components:{blog:{"vite-press-plugin":()=>H(()=>import("./2024-03-01_vite-press-plugin-DsBkDco2.js"),__vite__mapDeps([])),"markdown-components-in-react":()=>H(()=>import("./2024-02-28_markdown-components-in-react-B-SuU3OD.js"),__vite__mapDeps([8,9,10])),"net8-best-blazor":()=>H(()=>import("./2023-11-22_net8-best-blazor-BNgJfIyp.js"),__vite__mapDeps([])),"net8-blazor-template":()=>H(()=>import("./2023-11-20_net8-blazor-template-Cbv4UncW.js"),__vite__mapDeps([])),"razor-ssg-new-blog-features":()=>H(()=>import("./2023-08-23_razor-ssg-new-blog-features-B0UVQE4v.js"),__vite__mapDeps([11,10])),"razor-ssg":()=>H(()=>import("./2023-03-30_razor-ssg-BJskLYuN.js"),__vite__mapDeps([])),javascript:()=>H(()=>import("./2023-02-01_javascript-Bms9uRLu.js"),__vite__mapDeps([12,9])),start:()=>H(()=>import("./2023-01-21_start-DPvLpBhS.js"),__vite__mapDeps([])),rider:()=>H(()=>import("./2023-01-11_rider-DIGPH9Gf.js"),__vite__mapDeps([])),vs:()=>H(()=>import("./2023-01-10_vs-CvJAJE-G.js"),__vite__mapDeps([])),deploy:()=>H(()=>import("./2023-01-01_deploy-D_aiJdQD.js"),__vite__mapDeps([])),typography:()=>H(()=>import("./2022-12-31_typography-CCn4QyUi.js"),__vite__mapDeps([])),"hetzner-cloud":()=>H(()=>import("./2022-09-06_hetzner-cloud-Y7VwW4Dq.js"),__vite__mapDeps([]))},videos:{react:{nextjs:()=>H(()=>import("./nextjs-oVa29xYO.js"),__vite__mapDeps([])),"autoquery-bookings":()=>H(()=>import("./autoquery-bookings-DrF6fkjh.js"),__vite__mapDeps([])),"autogen-locode":()=>H(()=>import("./autogen-locode-UCrUxJG_.js"),__vite__mapDeps([])),modern:()=>H(()=>import("./modern-DrokK0UQ.js"),__vite__mapDeps([])),"razor-ssg":()=>H(()=>import("./razor-ssg-Bp5qH3uY.js"),__vite__mapDeps([]))}},whatsNew:{"2023-03-28_Planetaria":{feature1:()=>H(()=>import("./feature1-DZEEYHe9.js"),__vite__mapDeps([]))},"2023-03-18_OpenShuttle":{feature1:()=>H(()=>import("./feature1-CSxEXrfZ.js"),__vite__mapDeps([]))},"2023-03-08_Animaginary":{feature1:()=>H(()=>import("./feature1-Cbo_c7hN.js"),__vite__mapDeps([]))}},includes:{"component-links.md":()=>H(()=>import("./component-links-GJvHHHV7.js"),__vite__mapDeps([])),"features.md":()=>H(()=>import("./features-vc7trjhO.js"),__vite__mapDeps([]))}}};function aC(){return g.jsx(f.Suspense,{fallback:g.jsx(zg,{children:g.jsx(I3,{className:"p-4"})}),children:g.jsx(Jk,{defaultTheme:"light",storageKey:"color-scheme",children:g.jsx($r.Provider,{value:sC,children:fw(iC)})})})}function lC(){const{pathname:e}=_r();return f.useEffect(()=>{window.scrollTo(0,0)},[e]),null}const cC=tv(document.getElementById("root"));cC.render(g.jsx(f.StrictMode,{children:g.jsxs($w,{children:[g.jsx(lC,{}),g.jsx(aC,{})]})}));export{Ho as $,Sm as A,km as B,Hl as C,Nx as D,wC as E,tS as F,j3 as G,wu as H,U3 as I,le as J,Bl as K,zg as L,NS as M,$r as P,Ow as S,bC as T,V3 as V,D as _,er as a,ob as b,G3 as c,ib as d,$g as e,eS as f,rb as g,un as h,W3 as i,g as j,pC as k,fC as l,hC as m,Vo as n,Qo as o,Ue as p,Jx as q,f as r,G as s,yb as t,dC as u,wb as v,mb as w,tt as x,R2 as y,br as z};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/about-5QuERoyX.js","assets/LayoutArticle-B7cxND9n.js","assets/privacy-C5zj2oed.js","assets/index-S7r7KMS9.js","assets/BlogPosts-1Hg5mNDv.js","assets/_name_-zBtV8x8w.js","assets/_tag_-PCV0Bwi4.js","assets/_year_-ClkgiWtW.js","assets/2024-02-28_markdown-components-in-react-B-SuU3OD.js","assets/HelloApi-Z_DWgtoM.js","assets/ChartJs-5JuPAil6.js","assets/2023-08-23_razor-ssg-new-blog-features-B0UVQE4v.js","assets/2023-02-01_javascript-Bms9uRLu.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
