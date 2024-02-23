var Vg=Object.defineProperty;var Ug=(e,t,n)=>t in e?Vg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var tt=(e,t,n)=>(Ug(e,typeof t!="symbol"?t+"":t,n),n);function Hg(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function gr(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var kf={exports:{}},vs={},Sf={exports:{}},W={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Po=Symbol.for("react.element"),Gg=Symbol.for("react.portal"),Qg=Symbol.for("react.fragment"),Kg=Symbol.for("react.strict_mode"),Yg=Symbol.for("react.profiler"),qg=Symbol.for("react.provider"),Jg=Symbol.for("react.context"),Xg=Symbol.for("react.forward_ref"),Zg=Symbol.for("react.suspense"),ev=Symbol.for("react.memo"),tv=Symbol.for("react.lazy"),pu=Symbol.iterator;function nv(e){return e===null||typeof e!="object"?null:(e=pu&&e[pu]||e["@@iterator"],typeof e=="function"?e:null)}var Cf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ef=Object.assign,Tf={};function vr(e,t,n){this.props=e,this.context=t,this.refs=Tf,this.updater=n||Cf}vr.prototype.isReactComponent={};vr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};vr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Pf(){}Pf.prototype=vr.prototype;function Yl(e,t,n){this.props=e,this.context=t,this.refs=Tf,this.updater=n||Cf}var ql=Yl.prototype=new Pf;ql.constructor=Yl;Ef(ql,vr.prototype);ql.isPureReactComponent=!0;var mu=Array.isArray,_f=Object.prototype.hasOwnProperty,Jl={current:null},Af={key:!0,ref:!0,__self:!0,__source:!0};function Mf(e,t,n){var r,o={},i=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)_f.call(t,r)&&!Af.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];o.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:Po,type:e,key:i,ref:s,props:o,_owner:Jl.current}}function rv(e,t){return{$$typeof:Po,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Xl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Po}function ov(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var hu=/\/+/g;function Vs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ov(""+e.key):t.toString(36)}function vi(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Po:case Gg:s=!0}}if(s)return s=e,o=o(s),e=r===""?"."+Vs(s,0):r,mu(o)?(n="",e!=null&&(n=e.replace(hu,"$&/")+"/"),vi(o,t,n,"",function(c){return c})):o!=null&&(Xl(o)&&(o=rv(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(hu,"$&/")+"/")+e)),t.push(o)),1;if(s=0,r=r===""?".":r+":",mu(e))for(var a=0;a<e.length;a++){i=e[a];var l=r+Vs(i,a);s+=vi(i,t,n,l,o)}else if(l=nv(e),typeof l=="function")for(e=l.call(e),a=0;!(i=e.next()).done;)i=i.value,l=r+Vs(i,a++),s+=vi(i,t,n,l,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Uo(e,t,n){if(e==null)return e;var r=[],o=0;return vi(e,r,"","",function(i){return t.call(n,i,o++)}),r}function iv(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ce={current:null},yi={transition:null},sv={ReactCurrentDispatcher:Ce,ReactCurrentBatchConfig:yi,ReactCurrentOwner:Jl};W.Children={map:Uo,forEach:function(e,t,n){Uo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Uo(e,function(){t++}),t},toArray:function(e){return Uo(e,function(t){return t})||[]},only:function(e){if(!Xl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};W.Component=vr;W.Fragment=Qg;W.Profiler=Yg;W.PureComponent=Yl;W.StrictMode=Kg;W.Suspense=Zg;W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sv;W.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ef({},e.props),o=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=Jl.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)_f.call(t,l)&&!Af.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Po,type:e.type,key:o,ref:i,props:r,_owner:s}};W.createContext=function(e){return e={$$typeof:Jg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:qg,_context:e},e.Consumer=e};W.createElement=Mf;W.createFactory=function(e){var t=Mf.bind(null,e);return t.type=e,t};W.createRef=function(){return{current:null}};W.forwardRef=function(e){return{$$typeof:Xg,render:e}};W.isValidElement=Xl;W.lazy=function(e){return{$$typeof:tv,_payload:{_status:-1,_result:e},_init:iv}};W.memo=function(e,t){return{$$typeof:ev,type:e,compare:t===void 0?null:t}};W.startTransition=function(e){var t=yi.transition;yi.transition={};try{e()}finally{yi.transition=t}};W.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};W.useCallback=function(e,t){return Ce.current.useCallback(e,t)};W.useContext=function(e){return Ce.current.useContext(e)};W.useDebugValue=function(){};W.useDeferredValue=function(e){return Ce.current.useDeferredValue(e)};W.useEffect=function(e,t){return Ce.current.useEffect(e,t)};W.useId=function(){return Ce.current.useId()};W.useImperativeHandle=function(e,t,n){return Ce.current.useImperativeHandle(e,t,n)};W.useInsertionEffect=function(e,t){return Ce.current.useInsertionEffect(e,t)};W.useLayoutEffect=function(e,t){return Ce.current.useLayoutEffect(e,t)};W.useMemo=function(e,t){return Ce.current.useMemo(e,t)};W.useReducer=function(e,t,n){return Ce.current.useReducer(e,t,n)};W.useRef=function(e){return Ce.current.useRef(e)};W.useState=function(e){return Ce.current.useState(e)};W.useSyncExternalStore=function(e,t,n){return Ce.current.useSyncExternalStore(e,t,n)};W.useTransition=function(){return Ce.current.useTransition()};W.version="18.2.0";Sf.exports=W;var f=Sf.exports;const I=gr(f),$f=Hg({__proto__:null,default:I},[f]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var av=f,lv=Symbol.for("react.element"),cv=Symbol.for("react.fragment"),uv=Object.prototype.hasOwnProperty,dv=av.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,fv={key:!0,ref:!0,__self:!0,__source:!0};function Nf(e,t,n){var r,o={},i=null,s=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)uv.call(t,r)&&!fv.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:lv,type:e,key:i,ref:s,props:o,_owner:dv.current}}vs.Fragment=cv;vs.jsx=Nf;vs.jsxs=Nf;kf.exports=vs;var b=kf.exports,zf={exports:{}},We={},Rf={exports:{}},If={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(A,P){var z=A.length;A.push(P);e:for(;0<z;){var j=z-1>>>1,H=A[j];if(0<o(H,P))A[j]=P,A[z]=H,z=j;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var P=A[0],z=A.pop();if(z!==P){A[0]=z;e:for(var j=0,H=A.length,Ne=H>>>1;j<Ne;){var ze=2*(j+1)-1,et=A[ze],ce=ze+1,Re=A[ce];if(0>o(et,z))ce<H&&0>o(Re,et)?(A[j]=Re,A[ce]=z,j=ce):(A[j]=et,A[ze]=z,j=ze);else if(ce<H&&0>o(Re,z))A[j]=Re,A[ce]=z,j=ce;else break e}}return P}function o(A,P){var z=A.sortIndex-P.sortIndex;return z!==0?z:A.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],c=[],u=1,d=null,m=3,g=!1,w=!1,v=!1,x=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(A){for(var P=n(c);P!==null;){if(P.callback===null)r(c);else if(P.startTime<=A)r(c),P.sortIndex=P.expirationTime,t(l,P);else break;P=n(c)}}function k(A){if(v=!1,y(A),!w)if(n(l)!==null)w=!0,Y(S);else{var P=n(c);P!==null&&F(k,P.startTime-A)}}function S(A,P){w=!1,v&&(v=!1,h(T),T=-1),g=!0;var z=m;try{for(y(P),d=n(l);d!==null&&(!(d.expirationTime>P)||A&&!D());){var j=d.callback;if(typeof j=="function"){d.callback=null,m=d.priorityLevel;var H=j(d.expirationTime<=P);P=e.unstable_now(),typeof H=="function"?d.callback=H:d===n(l)&&r(l),y(P)}else r(l);d=n(l)}if(d!==null)var Ne=!0;else{var ze=n(c);ze!==null&&F(k,ze.startTime-P),Ne=!1}return Ne}finally{d=null,m=z,g=!1}}var C=!1,E=null,T=-1,N=5,M=-1;function D(){return!(e.unstable_now()-M<N)}function R(){if(E!==null){var A=e.unstable_now();M=A;var P=!0;try{P=E(!0,A)}finally{P?q():(C=!1,E=null)}}else C=!1}var q;if(typeof p=="function")q=function(){p(R)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,V=B.port2;B.port1.onmessage=R,q=function(){V.postMessage(null)}}else q=function(){x(R,0)};function Y(A){E=A,C||(C=!0,q())}function F(A,P){T=x(function(){A(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){w||g||(w=!0,Y(S))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(A){switch(m){case 1:case 2:case 3:var P=3;break;default:P=m}var z=m;m=P;try{return A()}finally{m=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,P){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var z=m;m=A;try{return P()}finally{m=z}},e.unstable_scheduleCallback=function(A,P,z){var j=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?j+z:j):z=j,A){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=z+H,A={id:u++,callback:P,priorityLevel:A,startTime:z,expirationTime:H,sortIndex:-1},z>j?(A.sortIndex=z,t(c,A),n(l)===null&&A===n(c)&&(v?(h(T),T=-1):v=!0,F(k,z-j))):(A.sortIndex=H,t(l,A),w||g||(w=!0,Y(S))),A},e.unstable_shouldYield=D,e.unstable_wrapCallback=function(A){var P=m;return function(){var z=m;m=P;try{return A.apply(this,arguments)}finally{m=z}}}})(If);Rf.exports=If;var pv=Rf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jf=f,Be=pv;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Lf=new Set,to={};function Pn(e,t){ir(e,t),ir(e+"Capture",t)}function ir(e,t){for(to[e]=t,e=0;e<t.length;e++)Lf.add(t[e])}var Et=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$a=Object.prototype.hasOwnProperty,mv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,gu={},vu={};function hv(e){return $a.call(vu,e)?!0:$a.call(gu,e)?!1:mv.test(e)?vu[e]=!0:(gu[e]=!0,!1)}function gv(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function vv(e,t,n,r){if(t===null||typeof t>"u"||gv(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ee(e,t,n,r,o,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ve[e]=new Ee(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ve[t]=new Ee(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ve[e]=new Ee(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ve[e]=new Ee(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ve[e]=new Ee(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ve[e]=new Ee(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ve[e]=new Ee(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ve[e]=new Ee(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ve[e]=new Ee(e,5,!1,e.toLowerCase(),null,!1,!1)});var Zl=/[\-:]([a-z])/g;function ec(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Zl,ec);ve[t]=new Ee(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Zl,ec);ve[t]=new Ee(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Zl,ec);ve[t]=new Ee(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ve[e]=new Ee(e,1,!1,e.toLowerCase(),null,!1,!1)});ve.xlinkHref=new Ee("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ve[e]=new Ee(e,1,!1,e.toLowerCase(),null,!0,!0)});function tc(e,t,n,r){var o=ve.hasOwnProperty(t)?ve[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(vv(t,n,o,r)&&(n=null),r||o===null?hv(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Nt=jf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ho=Symbol.for("react.element"),jn=Symbol.for("react.portal"),Ln=Symbol.for("react.fragment"),nc=Symbol.for("react.strict_mode"),Na=Symbol.for("react.profiler"),Of=Symbol.for("react.provider"),Df=Symbol.for("react.context"),rc=Symbol.for("react.forward_ref"),za=Symbol.for("react.suspense"),Ra=Symbol.for("react.suspense_list"),oc=Symbol.for("react.memo"),Ot=Symbol.for("react.lazy"),Bf=Symbol.for("react.offscreen"),yu=Symbol.iterator;function Tr(e){return e===null||typeof e!="object"?null:(e=yu&&e[yu]||e["@@iterator"],typeof e=="function"?e:null)}var oe=Object.assign,Us;function Br(e){if(Us===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Us=t&&t[1]||""}return`
`+Us+e}var Hs=!1;function Gs(e,t){if(!e||Hs)return"";Hs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),s=o.length-1,a=i.length-1;1<=s&&0<=a&&o[s]!==i[a];)a--;for(;1<=s&&0<=a;s--,a--)if(o[s]!==i[a]){if(s!==1||a!==1)do if(s--,a--,0>a||o[s]!==i[a]){var l=`
`+o[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{Hs=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Br(e):""}function yv(e){switch(e.tag){case 5:return Br(e.type);case 16:return Br("Lazy");case 13:return Br("Suspense");case 19:return Br("SuspenseList");case 0:case 2:case 15:return e=Gs(e.type,!1),e;case 11:return e=Gs(e.type.render,!1),e;case 1:return e=Gs(e.type,!0),e;default:return""}}function Ia(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ln:return"Fragment";case jn:return"Portal";case Na:return"Profiler";case nc:return"StrictMode";case za:return"Suspense";case Ra:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Df:return(e.displayName||"Context")+".Consumer";case Of:return(e._context.displayName||"Context")+".Provider";case rc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case oc:return t=e.displayName||null,t!==null?t:Ia(e.type)||"Memo";case Ot:t=e._payload,e=e._init;try{return Ia(e(t))}catch{}}return null}function wv(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ia(t);case 8:return t===nc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function en(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ff(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function bv(e){var t=Ff(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){r=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Go(e){e._valueTracker||(e._valueTracker=bv(e))}function Wf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ff(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Li(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ja(e,t){var n=t.checked;return oe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function wu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=en(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Vf(e,t){t=t.checked,t!=null&&tc(e,"checked",t,!1)}function La(e,t){Vf(e,t);var n=en(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Oa(e,t.type,n):t.hasOwnProperty("defaultValue")&&Oa(e,t.type,en(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function bu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Oa(e,t,n){(t!=="number"||Li(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Fr=Array.isArray;function Kn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+en(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Da(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return oe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function xu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(Fr(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:en(n)}}function Uf(e,t){var n=en(t.value),r=en(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ku(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Hf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ba(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Hf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Qo,Gf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Qo=Qo||document.createElement("div"),Qo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Qo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function no(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ur={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xv=["Webkit","ms","Moz","O"];Object.keys(Ur).forEach(function(e){xv.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ur[t]=Ur[e]})});function Qf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ur.hasOwnProperty(e)&&Ur[e]?(""+t).trim():t+"px"}function Kf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Qf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var kv=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fa(e,t){if(t){if(kv[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function Wa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Va=null;function ic(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ua=null,Yn=null,qn=null;function Su(e){if(e=Mo(e)){if(typeof Ua!="function")throw Error(_(280));var t=e.stateNode;t&&(t=ks(t),Ua(e.stateNode,e.type,t))}}function Yf(e){Yn?qn?qn.push(e):qn=[e]:Yn=e}function qf(){if(Yn){var e=Yn,t=qn;if(qn=Yn=null,Su(e),t)for(e=0;e<t.length;e++)Su(t[e])}}function Jf(e,t){return e(t)}function Xf(){}var Qs=!1;function Zf(e,t,n){if(Qs)return e(t,n);Qs=!0;try{return Jf(e,t,n)}finally{Qs=!1,(Yn!==null||qn!==null)&&(Xf(),qf())}}function ro(e,t){var n=e.stateNode;if(n===null)return null;var r=ks(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var Ha=!1;if(Et)try{var Pr={};Object.defineProperty(Pr,"passive",{get:function(){Ha=!0}}),window.addEventListener("test",Pr,Pr),window.removeEventListener("test",Pr,Pr)}catch{Ha=!1}function Sv(e,t,n,r,o,i,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(u){this.onError(u)}}var Hr=!1,Oi=null,Di=!1,Ga=null,Cv={onError:function(e){Hr=!0,Oi=e}};function Ev(e,t,n,r,o,i,s,a,l){Hr=!1,Oi=null,Sv.apply(Cv,arguments)}function Tv(e,t,n,r,o,i,s,a,l){if(Ev.apply(this,arguments),Hr){if(Hr){var c=Oi;Hr=!1,Oi=null}else throw Error(_(198));Di||(Di=!0,Ga=c)}}function _n(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ep(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Cu(e){if(_n(e)!==e)throw Error(_(188))}function Pv(e){var t=e.alternate;if(!t){if(t=_n(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Cu(o),e;if(i===r)return Cu(o),t;i=i.sibling}throw Error(_(188))}if(n.return!==r.return)n=o,r=i;else{for(var s=!1,a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s){for(a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function tp(e){return e=Pv(e),e!==null?np(e):null}function np(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=np(e);if(t!==null)return t;e=e.sibling}return null}var rp=Be.unstable_scheduleCallback,Eu=Be.unstable_cancelCallback,_v=Be.unstable_shouldYield,Av=Be.unstable_requestPaint,se=Be.unstable_now,Mv=Be.unstable_getCurrentPriorityLevel,sc=Be.unstable_ImmediatePriority,op=Be.unstable_UserBlockingPriority,Bi=Be.unstable_NormalPriority,$v=Be.unstable_LowPriority,ip=Be.unstable_IdlePriority,ys=null,ht=null;function Nv(e){if(ht&&typeof ht.onCommitFiberRoot=="function")try{ht.onCommitFiberRoot(ys,e,void 0,(e.current.flags&128)===128)}catch{}}var at=Math.clz32?Math.clz32:Iv,zv=Math.log,Rv=Math.LN2;function Iv(e){return e>>>=0,e===0?32:31-(zv(e)/Rv|0)|0}var Ko=64,Yo=4194304;function Wr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Fi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~o;a!==0?r=Wr(a):(i&=s,i!==0&&(r=Wr(i)))}else s=n&~o,s!==0?r=Wr(s):i!==0&&(r=Wr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-at(t),o=1<<n,r|=e[n],t&=~o;return r}function jv(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Lv(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-at(i),a=1<<s,l=o[s];l===-1?(!(a&n)||a&r)&&(o[s]=jv(a,t)):l<=t&&(e.expiredLanes|=a),i&=~a}}function Qa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function sp(){var e=Ko;return Ko<<=1,!(Ko&4194240)&&(Ko=64),e}function Ks(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function _o(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-at(t),e[t]=n}function Ov(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-at(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function ac(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-at(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var K=0;function ap(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var lp,lc,cp,up,dp,Ka=!1,qo=[],Ht=null,Gt=null,Qt=null,oo=new Map,io=new Map,Bt=[],Dv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Tu(e,t){switch(e){case"focusin":case"focusout":Ht=null;break;case"dragenter":case"dragleave":Gt=null;break;case"mouseover":case"mouseout":Qt=null;break;case"pointerover":case"pointerout":oo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":io.delete(t.pointerId)}}function _r(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Mo(t),t!==null&&lc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Bv(e,t,n,r,o){switch(t){case"focusin":return Ht=_r(Ht,e,t,n,r,o),!0;case"dragenter":return Gt=_r(Gt,e,t,n,r,o),!0;case"mouseover":return Qt=_r(Qt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return oo.set(i,_r(oo.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,io.set(i,_r(io.get(i)||null,e,t,n,r,o)),!0}return!1}function fp(e){var t=pn(e.target);if(t!==null){var n=_n(t);if(n!==null){if(t=n.tag,t===13){if(t=ep(n),t!==null){e.blockedOn=t,dp(e.priority,function(){cp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ya(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Va=r,n.target.dispatchEvent(r),Va=null}else return t=Mo(n),t!==null&&lc(t),e.blockedOn=n,!1;t.shift()}return!0}function Pu(e,t,n){wi(e)&&n.delete(t)}function Fv(){Ka=!1,Ht!==null&&wi(Ht)&&(Ht=null),Gt!==null&&wi(Gt)&&(Gt=null),Qt!==null&&wi(Qt)&&(Qt=null),oo.forEach(Pu),io.forEach(Pu)}function Ar(e,t){e.blockedOn===t&&(e.blockedOn=null,Ka||(Ka=!0,Be.unstable_scheduleCallback(Be.unstable_NormalPriority,Fv)))}function so(e){function t(o){return Ar(o,e)}if(0<qo.length){Ar(qo[0],e);for(var n=1;n<qo.length;n++){var r=qo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ht!==null&&Ar(Ht,e),Gt!==null&&Ar(Gt,e),Qt!==null&&Ar(Qt,e),oo.forEach(t),io.forEach(t),n=0;n<Bt.length;n++)r=Bt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Bt.length&&(n=Bt[0],n.blockedOn===null);)fp(n),n.blockedOn===null&&Bt.shift()}var Jn=Nt.ReactCurrentBatchConfig,Wi=!0;function Wv(e,t,n,r){var o=K,i=Jn.transition;Jn.transition=null;try{K=1,cc(e,t,n,r)}finally{K=o,Jn.transition=i}}function Vv(e,t,n,r){var o=K,i=Jn.transition;Jn.transition=null;try{K=4,cc(e,t,n,r)}finally{K=o,Jn.transition=i}}function cc(e,t,n,r){if(Wi){var o=Ya(e,t,n,r);if(o===null)oa(e,t,r,Vi,n),Tu(e,r);else if(Bv(o,e,t,n,r))r.stopPropagation();else if(Tu(e,r),t&4&&-1<Dv.indexOf(e)){for(;o!==null;){var i=Mo(o);if(i!==null&&lp(i),i=Ya(e,t,n,r),i===null&&oa(e,t,r,Vi,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else oa(e,t,r,null,n)}}var Vi=null;function Ya(e,t,n,r){if(Vi=null,e=ic(r),e=pn(e),e!==null)if(t=_n(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ep(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Vi=e,null}function pp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Mv()){case sc:return 1;case op:return 4;case Bi:case $v:return 16;case ip:return 536870912;default:return 16}default:return 16}}var Wt=null,uc=null,bi=null;function mp(){if(bi)return bi;var e,t=uc,n=t.length,r,o="value"in Wt?Wt.value:Wt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===o[i-r];r++);return bi=o.slice(e,1<r?1-r:void 0)}function xi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Jo(){return!0}function _u(){return!1}function Ve(e){function t(n,r,o,i,s){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Jo:_u,this.isPropagationStopped=_u,this}return oe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Jo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Jo)},persist:function(){},isPersistent:Jo}),t}var yr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dc=Ve(yr),Ao=oe({},yr,{view:0,detail:0}),Uv=Ve(Ao),Ys,qs,Mr,ws=oe({},Ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Mr&&(Mr&&e.type==="mousemove"?(Ys=e.screenX-Mr.screenX,qs=e.screenY-Mr.screenY):qs=Ys=0,Mr=e),Ys)},movementY:function(e){return"movementY"in e?e.movementY:qs}}),Au=Ve(ws),Hv=oe({},ws,{dataTransfer:0}),Gv=Ve(Hv),Qv=oe({},Ao,{relatedTarget:0}),Js=Ve(Qv),Kv=oe({},yr,{animationName:0,elapsedTime:0,pseudoElement:0}),Yv=Ve(Kv),qv=oe({},yr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Jv=Ve(qv),Xv=oe({},yr,{data:0}),Mu=Ve(Xv),Zv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},e0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},t0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function n0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=t0[e])?!!t[e]:!1}function fc(){return n0}var r0=oe({},Ao,{key:function(e){if(e.key){var t=Zv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=xi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?e0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fc,charCode:function(e){return e.type==="keypress"?xi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),o0=Ve(r0),i0=oe({},ws,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$u=Ve(i0),s0=oe({},Ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fc}),a0=Ve(s0),l0=oe({},yr,{propertyName:0,elapsedTime:0,pseudoElement:0}),c0=Ve(l0),u0=oe({},ws,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),d0=Ve(u0),f0=[9,13,27,32],pc=Et&&"CompositionEvent"in window,Gr=null;Et&&"documentMode"in document&&(Gr=document.documentMode);var p0=Et&&"TextEvent"in window&&!Gr,hp=Et&&(!pc||Gr&&8<Gr&&11>=Gr),Nu=" ",zu=!1;function gp(e,t){switch(e){case"keyup":return f0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var On=!1;function m0(e,t){switch(e){case"compositionend":return vp(t);case"keypress":return t.which!==32?null:(zu=!0,Nu);case"textInput":return e=t.data,e===Nu&&zu?null:e;default:return null}}function h0(e,t){if(On)return e==="compositionend"||!pc&&gp(e,t)?(e=mp(),bi=uc=Wt=null,On=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return hp&&t.locale!=="ko"?null:t.data;default:return null}}var g0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ru(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!g0[e.type]:t==="textarea"}function yp(e,t,n,r){Yf(r),t=Ui(t,"onChange"),0<t.length&&(n=new dc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Qr=null,ao=null;function v0(e){Ap(e,0)}function bs(e){var t=Fn(e);if(Wf(t))return e}function y0(e,t){if(e==="change")return t}var wp=!1;if(Et){var Xs;if(Et){var Zs="oninput"in document;if(!Zs){var Iu=document.createElement("div");Iu.setAttribute("oninput","return;"),Zs=typeof Iu.oninput=="function"}Xs=Zs}else Xs=!1;wp=Xs&&(!document.documentMode||9<document.documentMode)}function ju(){Qr&&(Qr.detachEvent("onpropertychange",bp),ao=Qr=null)}function bp(e){if(e.propertyName==="value"&&bs(ao)){var t=[];yp(t,ao,e,ic(e)),Zf(v0,t)}}function w0(e,t,n){e==="focusin"?(ju(),Qr=t,ao=n,Qr.attachEvent("onpropertychange",bp)):e==="focusout"&&ju()}function b0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return bs(ao)}function x0(e,t){if(e==="click")return bs(t)}function k0(e,t){if(e==="input"||e==="change")return bs(t)}function S0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ut=typeof Object.is=="function"?Object.is:S0;function lo(e,t){if(ut(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!$a.call(t,o)||!ut(e[o],t[o]))return!1}return!0}function Lu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ou(e,t){var n=Lu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Lu(n)}}function xp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?xp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function kp(){for(var e=window,t=Li();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Li(e.document)}return t}function mc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function C0(e){var t=kp(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&xp(n.ownerDocument.documentElement,n)){if(r!==null&&mc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Ou(n,i);var s=Ou(n,r);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var E0=Et&&"documentMode"in document&&11>=document.documentMode,Dn=null,qa=null,Kr=null,Ja=!1;function Du(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ja||Dn==null||Dn!==Li(r)||(r=Dn,"selectionStart"in r&&mc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Kr&&lo(Kr,r)||(Kr=r,r=Ui(qa,"onSelect"),0<r.length&&(t=new dc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Dn)))}function Xo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Bn={animationend:Xo("Animation","AnimationEnd"),animationiteration:Xo("Animation","AnimationIteration"),animationstart:Xo("Animation","AnimationStart"),transitionend:Xo("Transition","TransitionEnd")},ea={},Sp={};Et&&(Sp=document.createElement("div").style,"AnimationEvent"in window||(delete Bn.animationend.animation,delete Bn.animationiteration.animation,delete Bn.animationstart.animation),"TransitionEvent"in window||delete Bn.transitionend.transition);function xs(e){if(ea[e])return ea[e];if(!Bn[e])return e;var t=Bn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Sp)return ea[e]=t[n];return e}var Cp=xs("animationend"),Ep=xs("animationiteration"),Tp=xs("animationstart"),Pp=xs("transitionend"),_p=new Map,Bu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sn(e,t){_p.set(e,t),Pn(t,[e])}for(var ta=0;ta<Bu.length;ta++){var na=Bu[ta],T0=na.toLowerCase(),P0=na[0].toUpperCase()+na.slice(1);sn(T0,"on"+P0)}sn(Cp,"onAnimationEnd");sn(Ep,"onAnimationIteration");sn(Tp,"onAnimationStart");sn("dblclick","onDoubleClick");sn("focusin","onFocus");sn("focusout","onBlur");sn(Pp,"onTransitionEnd");ir("onMouseEnter",["mouseout","mouseover"]);ir("onMouseLeave",["mouseout","mouseover"]);ir("onPointerEnter",["pointerout","pointerover"]);ir("onPointerLeave",["pointerout","pointerover"]);Pn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Pn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Pn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Pn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Pn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Pn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vr));function Fu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Tv(r,t,void 0,e),e.currentTarget=null}function Ap(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==i&&o.isPropagationStopped())break e;Fu(o,a,c),i=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,c=a.currentTarget,a=a.listener,l!==i&&o.isPropagationStopped())break e;Fu(o,a,c),i=l}}}if(Di)throw e=Ga,Di=!1,Ga=null,e}function Z(e,t){var n=t[nl];n===void 0&&(n=t[nl]=new Set);var r=e+"__bubble";n.has(r)||(Mp(t,e,2,!1),n.add(r))}function ra(e,t,n){var r=0;t&&(r|=4),Mp(n,e,r,t)}var Zo="_reactListening"+Math.random().toString(36).slice(2);function co(e){if(!e[Zo]){e[Zo]=!0,Lf.forEach(function(n){n!=="selectionchange"&&(_0.has(n)||ra(n,!1,e),ra(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Zo]||(t[Zo]=!0,ra("selectionchange",!1,t))}}function Mp(e,t,n,r){switch(pp(t)){case 1:var o=Wv;break;case 4:o=Vv;break;default:o=cc}n=o.bind(null,t,n,e),o=void 0,!Ha||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function oa(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;s=s.return}for(;a!==null;){if(s=pn(a),s===null)return;if(l=s.tag,l===5||l===6){r=i=s;continue e}a=a.parentNode}}r=r.return}Zf(function(){var c=i,u=ic(n),d=[];e:{var m=_p.get(e);if(m!==void 0){var g=dc,w=e;switch(e){case"keypress":if(xi(n)===0)break e;case"keydown":case"keyup":g=o0;break;case"focusin":w="focus",g=Js;break;case"focusout":w="blur",g=Js;break;case"beforeblur":case"afterblur":g=Js;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Au;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Gv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=a0;break;case Cp:case Ep:case Tp:g=Yv;break;case Pp:g=c0;break;case"scroll":g=Uv;break;case"wheel":g=d0;break;case"copy":case"cut":case"paste":g=Jv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=$u}var v=(t&4)!==0,x=!v&&e==="scroll",h=v?m!==null?m+"Capture":null:m;v=[];for(var p=c,y;p!==null;){y=p;var k=y.stateNode;if(y.tag===5&&k!==null&&(y=k,h!==null&&(k=ro(p,h),k!=null&&v.push(uo(p,k,y)))),x)break;p=p.return}0<v.length&&(m=new g(m,w,null,n,u),d.push({event:m,listeners:v}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",m&&n!==Va&&(w=n.relatedTarget||n.fromElement)&&(pn(w)||w[Tt]))break e;if((g||m)&&(m=u.window===u?u:(m=u.ownerDocument)?m.defaultView||m.parentWindow:window,g?(w=n.relatedTarget||n.toElement,g=c,w=w?pn(w):null,w!==null&&(x=_n(w),w!==x||w.tag!==5&&w.tag!==6)&&(w=null)):(g=null,w=c),g!==w)){if(v=Au,k="onMouseLeave",h="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(v=$u,k="onPointerLeave",h="onPointerEnter",p="pointer"),x=g==null?m:Fn(g),y=w==null?m:Fn(w),m=new v(k,p+"leave",g,n,u),m.target=x,m.relatedTarget=y,k=null,pn(u)===c&&(v=new v(h,p+"enter",w,n,u),v.target=y,v.relatedTarget=x,k=v),x=k,g&&w)t:{for(v=g,h=w,p=0,y=v;y;y=$n(y))p++;for(y=0,k=h;k;k=$n(k))y++;for(;0<p-y;)v=$n(v),p--;for(;0<y-p;)h=$n(h),y--;for(;p--;){if(v===h||h!==null&&v===h.alternate)break t;v=$n(v),h=$n(h)}v=null}else v=null;g!==null&&Wu(d,m,g,v,!1),w!==null&&x!==null&&Wu(d,x,w,v,!0)}}e:{if(m=c?Fn(c):window,g=m.nodeName&&m.nodeName.toLowerCase(),g==="select"||g==="input"&&m.type==="file")var S=y0;else if(Ru(m))if(wp)S=k0;else{S=b0;var C=w0}else(g=m.nodeName)&&g.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(S=x0);if(S&&(S=S(e,c))){yp(d,S,n,u);break e}C&&C(e,m,c),e==="focusout"&&(C=m._wrapperState)&&C.controlled&&m.type==="number"&&Oa(m,"number",m.value)}switch(C=c?Fn(c):window,e){case"focusin":(Ru(C)||C.contentEditable==="true")&&(Dn=C,qa=c,Kr=null);break;case"focusout":Kr=qa=Dn=null;break;case"mousedown":Ja=!0;break;case"contextmenu":case"mouseup":case"dragend":Ja=!1,Du(d,n,u);break;case"selectionchange":if(E0)break;case"keydown":case"keyup":Du(d,n,u)}var E;if(pc)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else On?gp(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(hp&&n.locale!=="ko"&&(On||T!=="onCompositionStart"?T==="onCompositionEnd"&&On&&(E=mp()):(Wt=u,uc="value"in Wt?Wt.value:Wt.textContent,On=!0)),C=Ui(c,T),0<C.length&&(T=new Mu(T,e,null,n,u),d.push({event:T,listeners:C}),E?T.data=E:(E=vp(n),E!==null&&(T.data=E)))),(E=p0?m0(e,n):h0(e,n))&&(c=Ui(c,"onBeforeInput"),0<c.length&&(u=new Mu("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=E))}Ap(d,t)})}function uo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ui(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=ro(e,n),i!=null&&r.unshift(uo(e,i,o)),i=ro(e,t),i!=null&&r.push(uo(e,i,o))),e=e.return}return r}function $n(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Wu(e,t,n,r,o){for(var i=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,o?(l=ro(n,i),l!=null&&s.unshift(uo(n,l,a))):o||(l=ro(n,i),l!=null&&s.push(uo(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var A0=/\r\n?/g,M0=/\u0000|\uFFFD/g;function Vu(e){return(typeof e=="string"?e:""+e).replace(A0,`
`).replace(M0,"")}function ei(e,t,n){if(t=Vu(t),Vu(e)!==t&&n)throw Error(_(425))}function Hi(){}var Xa=null,Za=null;function el(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var tl=typeof setTimeout=="function"?setTimeout:void 0,$0=typeof clearTimeout=="function"?clearTimeout:void 0,Uu=typeof Promise=="function"?Promise:void 0,N0=typeof queueMicrotask=="function"?queueMicrotask:typeof Uu<"u"?function(e){return Uu.resolve(null).then(e).catch(z0)}:tl;function z0(e){setTimeout(function(){throw e})}function ia(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),so(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);so(t)}function Kt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Hu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var wr=Math.random().toString(36).slice(2),pt="__reactFiber$"+wr,fo="__reactProps$"+wr,Tt="__reactContainer$"+wr,nl="__reactEvents$"+wr,R0="__reactListeners$"+wr,I0="__reactHandles$"+wr;function pn(e){var t=e[pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Tt]||n[pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Hu(e);e!==null;){if(n=e[pt])return n;e=Hu(e)}return t}e=n,n=e.parentNode}return null}function Mo(e){return e=e[pt]||e[Tt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Fn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function ks(e){return e[fo]||null}var rl=[],Wn=-1;function an(e){return{current:e}}function ee(e){0>Wn||(e.current=rl[Wn],rl[Wn]=null,Wn--)}function J(e,t){Wn++,rl[Wn]=e.current,e.current=t}var tn={},xe=an(tn),Ae=an(!1),bn=tn;function sr(e,t){var n=e.type.contextTypes;if(!n)return tn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Me(e){return e=e.childContextTypes,e!=null}function Gi(){ee(Ae),ee(xe)}function Gu(e,t,n){if(xe.current!==tn)throw Error(_(168));J(xe,t),J(Ae,n)}function $p(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(_(108,wv(e)||"Unknown",o));return oe({},n,r)}function Qi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||tn,bn=xe.current,J(xe,e),J(Ae,Ae.current),!0}function Qu(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=$p(e,t,bn),r.__reactInternalMemoizedMergedChildContext=e,ee(Ae),ee(xe),J(xe,e)):ee(Ae),J(Ae,n)}var xt=null,Ss=!1,sa=!1;function Np(e){xt===null?xt=[e]:xt.push(e)}function j0(e){Ss=!0,Np(e)}function ln(){if(!sa&&xt!==null){sa=!0;var e=0,t=K;try{var n=xt;for(K=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}xt=null,Ss=!1}catch(o){throw xt!==null&&(xt=xt.slice(e+1)),rp(sc,ln),o}finally{K=t,sa=!1}}return null}var Vn=[],Un=0,Ki=null,Yi=0,He=[],Ge=0,xn=null,kt=1,St="";function dn(e,t){Vn[Un++]=Yi,Vn[Un++]=Ki,Ki=e,Yi=t}function zp(e,t,n){He[Ge++]=kt,He[Ge++]=St,He[Ge++]=xn,xn=e;var r=kt;e=St;var o=32-at(r)-1;r&=~(1<<o),n+=1;var i=32-at(t)+o;if(30<i){var s=o-o%5;i=(r&(1<<s)-1).toString(32),r>>=s,o-=s,kt=1<<32-at(t)+o|n<<o|r,St=i+e}else kt=1<<i|n<<o|r,St=e}function hc(e){e.return!==null&&(dn(e,1),zp(e,1,0))}function gc(e){for(;e===Ki;)Ki=Vn[--Un],Vn[Un]=null,Yi=Vn[--Un],Vn[Un]=null;for(;e===xn;)xn=He[--Ge],He[Ge]=null,St=He[--Ge],He[Ge]=null,kt=He[--Ge],He[Ge]=null}var Oe=null,Le=null,te=!1,it=null;function Rp(e,t){var n=Qe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ku(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Oe=e,Le=Kt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Oe=e,Le=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=xn!==null?{id:kt,overflow:St}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Qe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Oe=e,Le=null,!0):!1;default:return!1}}function ol(e){return(e.mode&1)!==0&&(e.flags&128)===0}function il(e){if(te){var t=Le;if(t){var n=t;if(!Ku(e,t)){if(ol(e))throw Error(_(418));t=Kt(n.nextSibling);var r=Oe;t&&Ku(e,t)?Rp(r,n):(e.flags=e.flags&-4097|2,te=!1,Oe=e)}}else{if(ol(e))throw Error(_(418));e.flags=e.flags&-4097|2,te=!1,Oe=e}}}function Yu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Oe=e}function ti(e){if(e!==Oe)return!1;if(!te)return Yu(e),te=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!el(e.type,e.memoizedProps)),t&&(t=Le)){if(ol(e))throw Ip(),Error(_(418));for(;t;)Rp(e,t),t=Kt(t.nextSibling)}if(Yu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Le=Kt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Le=null}}else Le=Oe?Kt(e.stateNode.nextSibling):null;return!0}function Ip(){for(var e=Le;e;)e=Kt(e.nextSibling)}function ar(){Le=Oe=null,te=!1}function vc(e){it===null?it=[e]:it.push(e)}var L0=Nt.ReactCurrentBatchConfig;function rt(e,t){if(e&&e.defaultProps){t=oe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var qi=an(null),Ji=null,Hn=null,yc=null;function wc(){yc=Hn=Ji=null}function bc(e){var t=qi.current;ee(qi),e._currentValue=t}function sl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Xn(e,t){Ji=e,yc=Hn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(_e=!0),e.firstContext=null)}function Ye(e){var t=e._currentValue;if(yc!==e)if(e={context:e,memoizedValue:t,next:null},Hn===null){if(Ji===null)throw Error(_(308));Hn=e,Ji.dependencies={lanes:0,firstContext:e}}else Hn=Hn.next=e;return t}var mn=null;function xc(e){mn===null?mn=[e]:mn.push(e)}function jp(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,xc(t)):(n.next=o.next,o.next=n),t.interleaved=n,Pt(e,r)}function Pt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Dt=!1;function kc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Lp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ct(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Yt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Pt(e,n)}return o=r.interleaved,o===null?(t.next=t,xc(r)):(t.next=o.next,o.next=t),r.interleaved=t,Pt(e,n)}function ki(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ac(e,n)}}function qu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Xi(e,t,n,r){var o=e.updateQueue;Dt=!1;var i=o.firstBaseUpdate,s=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var l=a,c=l.next;l.next=null,s===null?i=c:s.next=c,s=l;var u=e.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==s&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(i!==null){var d=o.baseState;s=0,u=c=l=null,a=i;do{var m=a.lane,g=a.eventTime;if((r&m)===m){u!==null&&(u=u.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,v=a;switch(m=t,g=n,v.tag){case 1:if(w=v.payload,typeof w=="function"){d=w.call(g,d,m);break e}d=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=v.payload,m=typeof w=="function"?w.call(g,d,m):w,m==null)break e;d=oe({},d,m);break e;case 2:Dt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[a]:m.push(a))}else g={eventTime:g,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=g,l=d):u=u.next=g,s|=m;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;m=a,a=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(u===null&&(l=d),o.baseState=l,o.firstBaseUpdate=c,o.lastBaseUpdate=u,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Sn|=s,e.lanes=s,e.memoizedState=d}}function Ju(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(_(191,o));o.call(r)}}}var Op=new jf.Component().refs;function al(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:oe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Cs={isMounted:function(e){return(e=e._reactInternals)?_n(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Se(),o=Jt(e),i=Ct(r,o);i.payload=t,n!=null&&(i.callback=n),t=Yt(e,i,o),t!==null&&(lt(t,e,o,r),ki(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Se(),o=Jt(e),i=Ct(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Yt(e,i,o),t!==null&&(lt(t,e,o,r),ki(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Se(),r=Jt(e),o=Ct(n,r);o.tag=2,t!=null&&(o.callback=t),t=Yt(e,o,r),t!==null&&(lt(t,e,r,n),ki(t,e,r))}};function Xu(e,t,n,r,o,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,s):t.prototype&&t.prototype.isPureReactComponent?!lo(n,r)||!lo(o,i):!0}function Dp(e,t,n){var r=!1,o=tn,i=t.contextType;return typeof i=="object"&&i!==null?i=Ye(i):(o=Me(t)?bn:xe.current,r=t.contextTypes,i=(r=r!=null)?sr(e,o):tn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Cs,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Zu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Cs.enqueueReplaceState(t,t.state,null)}function ll(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=Op,kc(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Ye(i):(i=Me(t)?bn:xe.current,o.context=sr(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(al(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Cs.enqueueReplaceState(o,o.state,null),Xi(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function $r(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var a=o.refs;a===Op&&(a=o.refs={}),s===null?delete a[i]:a[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function ni(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ed(e){var t=e._init;return t(e._payload)}function Bp(e){function t(h,p){if(e){var y=h.deletions;y===null?(h.deletions=[p],h.flags|=16):y.push(p)}}function n(h,p){if(!e)return null;for(;p!==null;)t(h,p),p=p.sibling;return null}function r(h,p){for(h=new Map;p!==null;)p.key!==null?h.set(p.key,p):h.set(p.index,p),p=p.sibling;return h}function o(h,p){return h=Xt(h,p),h.index=0,h.sibling=null,h}function i(h,p,y){return h.index=y,e?(y=h.alternate,y!==null?(y=y.index,y<p?(h.flags|=2,p):y):(h.flags|=2,p)):(h.flags|=1048576,p)}function s(h){return e&&h.alternate===null&&(h.flags|=2),h}function a(h,p,y,k){return p===null||p.tag!==6?(p=pa(y,h.mode,k),p.return=h,p):(p=o(p,y),p.return=h,p)}function l(h,p,y,k){var S=y.type;return S===Ln?u(h,p,y.props.children,k,y.key):p!==null&&(p.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ot&&ed(S)===p.type)?(k=o(p,y.props),k.ref=$r(h,p,y),k.return=h,k):(k=_i(y.type,y.key,y.props,null,h.mode,k),k.ref=$r(h,p,y),k.return=h,k)}function c(h,p,y,k){return p===null||p.tag!==4||p.stateNode.containerInfo!==y.containerInfo||p.stateNode.implementation!==y.implementation?(p=ma(y,h.mode,k),p.return=h,p):(p=o(p,y.children||[]),p.return=h,p)}function u(h,p,y,k,S){return p===null||p.tag!==7?(p=wn(y,h.mode,k,S),p.return=h,p):(p=o(p,y),p.return=h,p)}function d(h,p,y){if(typeof p=="string"&&p!==""||typeof p=="number")return p=pa(""+p,h.mode,y),p.return=h,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ho:return y=_i(p.type,p.key,p.props,null,h.mode,y),y.ref=$r(h,null,p),y.return=h,y;case jn:return p=ma(p,h.mode,y),p.return=h,p;case Ot:var k=p._init;return d(h,k(p._payload),y)}if(Fr(p)||Tr(p))return p=wn(p,h.mode,y,null),p.return=h,p;ni(h,p)}return null}function m(h,p,y,k){var S=p!==null?p.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return S!==null?null:a(h,p,""+y,k);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ho:return y.key===S?l(h,p,y,k):null;case jn:return y.key===S?c(h,p,y,k):null;case Ot:return S=y._init,m(h,p,S(y._payload),k)}if(Fr(y)||Tr(y))return S!==null?null:u(h,p,y,k,null);ni(h,y)}return null}function g(h,p,y,k,S){if(typeof k=="string"&&k!==""||typeof k=="number")return h=h.get(y)||null,a(p,h,""+k,S);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Ho:return h=h.get(k.key===null?y:k.key)||null,l(p,h,k,S);case jn:return h=h.get(k.key===null?y:k.key)||null,c(p,h,k,S);case Ot:var C=k._init;return g(h,p,y,C(k._payload),S)}if(Fr(k)||Tr(k))return h=h.get(y)||null,u(p,h,k,S,null);ni(p,k)}return null}function w(h,p,y,k){for(var S=null,C=null,E=p,T=p=0,N=null;E!==null&&T<y.length;T++){E.index>T?(N=E,E=null):N=E.sibling;var M=m(h,E,y[T],k);if(M===null){E===null&&(E=N);break}e&&E&&M.alternate===null&&t(h,E),p=i(M,p,T),C===null?S=M:C.sibling=M,C=M,E=N}if(T===y.length)return n(h,E),te&&dn(h,T),S;if(E===null){for(;T<y.length;T++)E=d(h,y[T],k),E!==null&&(p=i(E,p,T),C===null?S=E:C.sibling=E,C=E);return te&&dn(h,T),S}for(E=r(h,E);T<y.length;T++)N=g(E,h,T,y[T],k),N!==null&&(e&&N.alternate!==null&&E.delete(N.key===null?T:N.key),p=i(N,p,T),C===null?S=N:C.sibling=N,C=N);return e&&E.forEach(function(D){return t(h,D)}),te&&dn(h,T),S}function v(h,p,y,k){var S=Tr(y);if(typeof S!="function")throw Error(_(150));if(y=S.call(y),y==null)throw Error(_(151));for(var C=S=null,E=p,T=p=0,N=null,M=y.next();E!==null&&!M.done;T++,M=y.next()){E.index>T?(N=E,E=null):N=E.sibling;var D=m(h,E,M.value,k);if(D===null){E===null&&(E=N);break}e&&E&&D.alternate===null&&t(h,E),p=i(D,p,T),C===null?S=D:C.sibling=D,C=D,E=N}if(M.done)return n(h,E),te&&dn(h,T),S;if(E===null){for(;!M.done;T++,M=y.next())M=d(h,M.value,k),M!==null&&(p=i(M,p,T),C===null?S=M:C.sibling=M,C=M);return te&&dn(h,T),S}for(E=r(h,E);!M.done;T++,M=y.next())M=g(E,h,T,M.value,k),M!==null&&(e&&M.alternate!==null&&E.delete(M.key===null?T:M.key),p=i(M,p,T),C===null?S=M:C.sibling=M,C=M);return e&&E.forEach(function(R){return t(h,R)}),te&&dn(h,T),S}function x(h,p,y,k){if(typeof y=="object"&&y!==null&&y.type===Ln&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Ho:e:{for(var S=y.key,C=p;C!==null;){if(C.key===S){if(S=y.type,S===Ln){if(C.tag===7){n(h,C.sibling),p=o(C,y.props.children),p.return=h,h=p;break e}}else if(C.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ot&&ed(S)===C.type){n(h,C.sibling),p=o(C,y.props),p.ref=$r(h,C,y),p.return=h,h=p;break e}n(h,C);break}else t(h,C);C=C.sibling}y.type===Ln?(p=wn(y.props.children,h.mode,k,y.key),p.return=h,h=p):(k=_i(y.type,y.key,y.props,null,h.mode,k),k.ref=$r(h,p,y),k.return=h,h=k)}return s(h);case jn:e:{for(C=y.key;p!==null;){if(p.key===C)if(p.tag===4&&p.stateNode.containerInfo===y.containerInfo&&p.stateNode.implementation===y.implementation){n(h,p.sibling),p=o(p,y.children||[]),p.return=h,h=p;break e}else{n(h,p);break}else t(h,p);p=p.sibling}p=ma(y,h.mode,k),p.return=h,h=p}return s(h);case Ot:return C=y._init,x(h,p,C(y._payload),k)}if(Fr(y))return w(h,p,y,k);if(Tr(y))return v(h,p,y,k);ni(h,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,p!==null&&p.tag===6?(n(h,p.sibling),p=o(p,y),p.return=h,h=p):(n(h,p),p=pa(y,h.mode,k),p.return=h,h=p),s(h)):n(h,p)}return x}var lr=Bp(!0),Fp=Bp(!1),$o={},gt=an($o),po=an($o),mo=an($o);function hn(e){if(e===$o)throw Error(_(174));return e}function Sc(e,t){switch(J(mo,t),J(po,e),J(gt,$o),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ba(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ba(t,e)}ee(gt),J(gt,t)}function cr(){ee(gt),ee(po),ee(mo)}function Wp(e){hn(mo.current);var t=hn(gt.current),n=Ba(t,e.type);t!==n&&(J(po,e),J(gt,n))}function Cc(e){po.current===e&&(ee(gt),ee(po))}var ne=an(0);function Zi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var aa=[];function Ec(){for(var e=0;e<aa.length;e++)aa[e]._workInProgressVersionPrimary=null;aa.length=0}var Si=Nt.ReactCurrentDispatcher,la=Nt.ReactCurrentBatchConfig,kn=0,re=null,ue=null,pe=null,es=!1,Yr=!1,ho=0,O0=0;function ye(){throw Error(_(321))}function Tc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ut(e[n],t[n]))return!1;return!0}function Pc(e,t,n,r,o,i){if(kn=i,re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Si.current=e===null||e.memoizedState===null?W0:V0,e=n(r,o),Yr){i=0;do{if(Yr=!1,ho=0,25<=i)throw Error(_(301));i+=1,pe=ue=null,t.updateQueue=null,Si.current=U0,e=n(r,o)}while(Yr)}if(Si.current=ts,t=ue!==null&&ue.next!==null,kn=0,pe=ue=re=null,es=!1,t)throw Error(_(300));return e}function _c(){var e=ho!==0;return ho=0,e}function ft(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pe===null?re.memoizedState=pe=e:pe=pe.next=e,pe}function qe(){if(ue===null){var e=re.alternate;e=e!==null?e.memoizedState:null}else e=ue.next;var t=pe===null?re.memoizedState:pe.next;if(t!==null)pe=t,ue=e;else{if(e===null)throw Error(_(310));ue=e,e={memoizedState:ue.memoizedState,baseState:ue.baseState,baseQueue:ue.baseQueue,queue:ue.queue,next:null},pe===null?re.memoizedState=pe=e:pe=pe.next=e}return pe}function go(e,t){return typeof t=="function"?t(e):t}function ca(e){var t=qe(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=ue,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var s=o.next;o.next=i.next,i.next=s}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=s=null,l=null,c=i;do{var u=c.lane;if((kn&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,s=r):l=l.next=d,re.lanes|=u,Sn|=u}c=c.next}while(c!==null&&c!==i);l===null?s=r:l.next=a,ut(r,t.memoizedState)||(_e=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,re.lanes|=i,Sn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ua(e){var t=qe(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var s=o=o.next;do i=e(i,s.action),s=s.next;while(s!==o);ut(i,t.memoizedState)||(_e=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Vp(){}function Up(e,t){var n=re,r=qe(),o=t(),i=!ut(r.memoizedState,o);if(i&&(r.memoizedState=o,_e=!0),r=r.queue,Ac(Qp.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||pe!==null&&pe.memoizedState.tag&1){if(n.flags|=2048,vo(9,Gp.bind(null,n,r,o,t),void 0,null),me===null)throw Error(_(349));kn&30||Hp(n,t,o)}return o}function Hp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=re.updateQueue,t===null?(t={lastEffect:null,stores:null},re.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Gp(e,t,n,r){t.value=n,t.getSnapshot=r,Kp(t)&&Yp(e)}function Qp(e,t,n){return n(function(){Kp(t)&&Yp(e)})}function Kp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ut(e,n)}catch{return!0}}function Yp(e){var t=Pt(e,1);t!==null&&lt(t,e,1,-1)}function td(e){var t=ft();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:go,lastRenderedState:e},t.queue=e,e=e.dispatch=F0.bind(null,re,e),[t.memoizedState,e]}function vo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=re.updateQueue,t===null?(t={lastEffect:null,stores:null},re.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function qp(){return qe().memoizedState}function Ci(e,t,n,r){var o=ft();re.flags|=e,o.memoizedState=vo(1|t,n,void 0,r===void 0?null:r)}function Es(e,t,n,r){var o=qe();r=r===void 0?null:r;var i=void 0;if(ue!==null){var s=ue.memoizedState;if(i=s.destroy,r!==null&&Tc(r,s.deps)){o.memoizedState=vo(t,n,i,r);return}}re.flags|=e,o.memoizedState=vo(1|t,n,i,r)}function nd(e,t){return Ci(8390656,8,e,t)}function Ac(e,t){return Es(2048,8,e,t)}function Jp(e,t){return Es(4,2,e,t)}function Xp(e,t){return Es(4,4,e,t)}function Zp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function em(e,t,n){return n=n!=null?n.concat([e]):null,Es(4,4,Zp.bind(null,t,e),n)}function Mc(){}function tm(e,t){var n=qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Tc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function nm(e,t){var n=qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Tc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function rm(e,t,n){return kn&21?(ut(n,t)||(n=sp(),re.lanes|=n,Sn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,_e=!0),e.memoizedState=n)}function D0(e,t){var n=K;K=n!==0&&4>n?n:4,e(!0);var r=la.transition;la.transition={};try{e(!1),t()}finally{K=n,la.transition=r}}function om(){return qe().memoizedState}function B0(e,t,n){var r=Jt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},im(e))sm(t,n);else if(n=jp(e,t,n,r),n!==null){var o=Se();lt(n,e,r,o),am(n,t,r)}}function F0(e,t,n){var r=Jt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(im(e))sm(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,a=i(s,n);if(o.hasEagerState=!0,o.eagerState=a,ut(a,s)){var l=t.interleaved;l===null?(o.next=o,xc(t)):(o.next=l.next,l.next=o),t.interleaved=o;return}}catch{}finally{}n=jp(e,t,o,r),n!==null&&(o=Se(),lt(n,e,r,o),am(n,t,r))}}function im(e){var t=e.alternate;return e===re||t!==null&&t===re}function sm(e,t){Yr=es=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function am(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ac(e,n)}}var ts={readContext:Ye,useCallback:ye,useContext:ye,useEffect:ye,useImperativeHandle:ye,useInsertionEffect:ye,useLayoutEffect:ye,useMemo:ye,useReducer:ye,useRef:ye,useState:ye,useDebugValue:ye,useDeferredValue:ye,useTransition:ye,useMutableSource:ye,useSyncExternalStore:ye,useId:ye,unstable_isNewReconciler:!1},W0={readContext:Ye,useCallback:function(e,t){return ft().memoizedState=[e,t===void 0?null:t],e},useContext:Ye,useEffect:nd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ci(4194308,4,Zp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ci(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ci(4,2,e,t)},useMemo:function(e,t){var n=ft();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ft();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=B0.bind(null,re,e),[r.memoizedState,e]},useRef:function(e){var t=ft();return e={current:e},t.memoizedState=e},useState:td,useDebugValue:Mc,useDeferredValue:function(e){return ft().memoizedState=e},useTransition:function(){var e=td(!1),t=e[0];return e=D0.bind(null,e[1]),ft().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=re,o=ft();if(te){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),me===null)throw Error(_(349));kn&30||Hp(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,nd(Qp.bind(null,r,i,e),[e]),r.flags|=2048,vo(9,Gp.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=ft(),t=me.identifierPrefix;if(te){var n=St,r=kt;n=(r&~(1<<32-at(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ho++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=O0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},V0={readContext:Ye,useCallback:tm,useContext:Ye,useEffect:Ac,useImperativeHandle:em,useInsertionEffect:Jp,useLayoutEffect:Xp,useMemo:nm,useReducer:ca,useRef:qp,useState:function(){return ca(go)},useDebugValue:Mc,useDeferredValue:function(e){var t=qe();return rm(t,ue.memoizedState,e)},useTransition:function(){var e=ca(go)[0],t=qe().memoizedState;return[e,t]},useMutableSource:Vp,useSyncExternalStore:Up,useId:om,unstable_isNewReconciler:!1},U0={readContext:Ye,useCallback:tm,useContext:Ye,useEffect:Ac,useImperativeHandle:em,useInsertionEffect:Jp,useLayoutEffect:Xp,useMemo:nm,useReducer:ua,useRef:qp,useState:function(){return ua(go)},useDebugValue:Mc,useDeferredValue:function(e){var t=qe();return ue===null?t.memoizedState=e:rm(t,ue.memoizedState,e)},useTransition:function(){var e=ua(go)[0],t=qe().memoizedState;return[e,t]},useMutableSource:Vp,useSyncExternalStore:Up,useId:om,unstable_isNewReconciler:!1};function ur(e,t){try{var n="",r=t;do n+=yv(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function da(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function cl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var H0=typeof WeakMap=="function"?WeakMap:Map;function lm(e,t,n){n=Ct(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){rs||(rs=!0,wl=r),cl(e,t)},n}function cm(e,t,n){n=Ct(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){cl(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){cl(e,t),typeof r!="function"&&(qt===null?qt=new Set([this]):qt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function rd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new H0;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=iy.bind(null,e,t,n),t.then(e,e))}function od(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function id(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ct(-1,1),t.tag=2,Yt(n,t,1))),n.lanes|=1),e)}var G0=Nt.ReactCurrentOwner,_e=!1;function ke(e,t,n,r){t.child=e===null?Fp(t,null,n,r):lr(t,e.child,n,r)}function sd(e,t,n,r,o){n=n.render;var i=t.ref;return Xn(t,o),r=Pc(e,t,n,r,i,o),n=_c(),e!==null&&!_e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,_t(e,t,o)):(te&&n&&hc(t),t.flags|=1,ke(e,t,r,o),t.child)}function ad(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Oc(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,um(e,t,i,r,o)):(e=_i(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:lo,n(s,r)&&e.ref===t.ref)return _t(e,t,o)}return t.flags|=1,e=Xt(i,r),e.ref=t.ref,e.return=t,t.child=e}function um(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(lo(i,r)&&e.ref===t.ref)if(_e=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(_e=!0);else return t.lanes=e.lanes,_t(e,t,o)}return ul(e,t,n,r,o)}function dm(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},J(Qn,Ie),Ie|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,J(Qn,Ie),Ie|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,J(Qn,Ie),Ie|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,J(Qn,Ie),Ie|=r;return ke(e,t,o,n),t.child}function fm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ul(e,t,n,r,o){var i=Me(n)?bn:xe.current;return i=sr(t,i),Xn(t,o),n=Pc(e,t,n,r,i,o),r=_c(),e!==null&&!_e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,_t(e,t,o)):(te&&r&&hc(t),t.flags|=1,ke(e,t,n,o),t.child)}function ld(e,t,n,r,o){if(Me(n)){var i=!0;Qi(t)}else i=!1;if(Xn(t,o),t.stateNode===null)Ei(e,t),Dp(t,n,r),ll(t,n,r,o),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ye(c):(c=Me(n)?bn:xe.current,c=sr(t,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==c)&&Zu(t,s,r,c),Dt=!1;var m=t.memoizedState;s.state=m,Xi(t,r,s,o),l=t.memoizedState,a!==r||m!==l||Ae.current||Dt?(typeof u=="function"&&(al(t,n,u,r),l=t.memoizedState),(a=Dt||Xu(t,n,a,r,m,l,c))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=c,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Lp(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:rt(t.type,a),s.props=c,d=t.pendingProps,m=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ye(l):(l=Me(n)?bn:xe.current,l=sr(t,l));var g=n.getDerivedStateFromProps;(u=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||m!==l)&&Zu(t,s,r,l),Dt=!1,m=t.memoizedState,s.state=m,Xi(t,r,s,o);var w=t.memoizedState;a!==d||m!==w||Ae.current||Dt?(typeof g=="function"&&(al(t,n,g,r),w=t.memoizedState),(c=Dt||Xu(t,n,c,r,m,w,l)||!1)?(u||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,w,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,w,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),s.props=r,s.state=w,s.context=l,r=c):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return dl(e,t,n,r,i,o)}function dl(e,t,n,r,o,i){fm(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return o&&Qu(t,n,!1),_t(e,t,i);r=t.stateNode,G0.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=lr(t,e.child,null,i),t.child=lr(t,null,a,i)):ke(e,t,a,i),t.memoizedState=r.state,o&&Qu(t,n,!0),t.child}function pm(e){var t=e.stateNode;t.pendingContext?Gu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Gu(e,t.context,!1),Sc(e,t.containerInfo)}function cd(e,t,n,r,o){return ar(),vc(o),t.flags|=256,ke(e,t,n,r),t.child}var fl={dehydrated:null,treeContext:null,retryLane:0};function pl(e){return{baseLanes:e,cachePool:null,transitions:null}}function mm(e,t,n){var r=t.pendingProps,o=ne.current,i=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),J(ne,o&1),e===null)return il(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,i?(r=t.mode,i=t.child,s={mode:"hidden",children:s},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=_s(s,r,0,null),e=wn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=pl(n),t.memoizedState=fl,e):$c(t,s));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return Q0(e,t,s,r,a,o,n);if(i){i=r.fallback,s=t.mode,o=e.child,a=o.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Xt(o,l),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=Xt(a,i):(i=wn(i,s,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,s=e.child.memoizedState,s=s===null?pl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~n,t.memoizedState=fl,r}return i=e.child,e=i.sibling,r=Xt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function $c(e,t){return t=_s({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ri(e,t,n,r){return r!==null&&vc(r),lr(t,e.child,null,n),e=$c(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Q0(e,t,n,r,o,i,s){if(n)return t.flags&256?(t.flags&=-257,r=da(Error(_(422))),ri(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=_s({mode:"visible",children:r.children},o,0,null),i=wn(i,o,s,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&lr(t,e.child,null,s),t.child.memoizedState=pl(s),t.memoizedState=fl,i);if(!(t.mode&1))return ri(e,t,s,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(_(419)),r=da(i,r,void 0),ri(e,t,s,r)}if(a=(s&e.childLanes)!==0,_e||a){if(r=me,r!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|s)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Pt(e,o),lt(r,e,o,-1))}return Lc(),r=da(Error(_(421))),ri(e,t,s,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=sy.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Le=Kt(o.nextSibling),Oe=t,te=!0,it=null,e!==null&&(He[Ge++]=kt,He[Ge++]=St,He[Ge++]=xn,kt=e.id,St=e.overflow,xn=t),t=$c(t,r.children),t.flags|=4096,t)}function ud(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),sl(e.return,t,n)}function fa(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function hm(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(ke(e,t,r.children,n),r=ne.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ud(e,n,t);else if(e.tag===19)ud(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(J(ne,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Zi(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),fa(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Zi(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}fa(t,!0,n,null,i);break;case"together":fa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ei(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function _t(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Sn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=Xt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Xt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function K0(e,t,n){switch(t.tag){case 3:pm(t),ar();break;case 5:Wp(t);break;case 1:Me(t.type)&&Qi(t);break;case 4:Sc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;J(qi,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(J(ne,ne.current&1),t.flags|=128,null):n&t.child.childLanes?mm(e,t,n):(J(ne,ne.current&1),e=_t(e,t,n),e!==null?e.sibling:null);J(ne,ne.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return hm(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),J(ne,ne.current),r)break;return null;case 22:case 23:return t.lanes=0,dm(e,t,n)}return _t(e,t,n)}var gm,ml,vm,ym;gm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ml=function(){};vm=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,hn(gt.current);var i=null;switch(n){case"input":o=ja(e,o),r=ja(e,r),i=[];break;case"select":o=oe({},o,{value:void 0}),r=oe({},r,{value:void 0}),i=[];break;case"textarea":o=Da(e,o),r=Da(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Hi)}Fa(n,r);var s;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var a=o[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(to.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var l=r[c];if(a=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(i||(i=[]),i.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(i=i||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(to.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Z("scroll",e),i||a===l||(i=[])):(i=i||[]).push(c,l))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};ym=function(e,t,n,r){n!==r&&(t.flags|=4)};function Nr(e,t){if(!te)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function we(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Y0(e,t,n){var r=t.pendingProps;switch(gc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return we(t),null;case 1:return Me(t.type)&&Gi(),we(t),null;case 3:return r=t.stateNode,cr(),ee(Ae),ee(xe),Ec(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ti(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,it!==null&&(kl(it),it=null))),ml(e,t),we(t),null;case 5:Cc(t);var o=hn(mo.current);if(n=t.type,e!==null&&t.stateNode!=null)vm(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return we(t),null}if(e=hn(gt.current),ti(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[pt]=t,r[fo]=i,e=(t.mode&1)!==0,n){case"dialog":Z("cancel",r),Z("close",r);break;case"iframe":case"object":case"embed":Z("load",r);break;case"video":case"audio":for(o=0;o<Vr.length;o++)Z(Vr[o],r);break;case"source":Z("error",r);break;case"img":case"image":case"link":Z("error",r),Z("load",r);break;case"details":Z("toggle",r);break;case"input":wu(r,i),Z("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Z("invalid",r);break;case"textarea":xu(r,i),Z("invalid",r)}Fa(n,i),o=null;for(var s in i)if(i.hasOwnProperty(s)){var a=i[s];s==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&ei(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&ei(r.textContent,a,e),o=["children",""+a]):to.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&Z("scroll",r)}switch(n){case"input":Go(r),bu(r,i,!0);break;case"textarea":Go(r),ku(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Hi)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Hf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[pt]=t,e[fo]=r,gm(e,t,!1,!1),t.stateNode=e;e:{switch(s=Wa(n,r),n){case"dialog":Z("cancel",e),Z("close",e),o=r;break;case"iframe":case"object":case"embed":Z("load",e),o=r;break;case"video":case"audio":for(o=0;o<Vr.length;o++)Z(Vr[o],e);o=r;break;case"source":Z("error",e),o=r;break;case"img":case"image":case"link":Z("error",e),Z("load",e),o=r;break;case"details":Z("toggle",e),o=r;break;case"input":wu(e,r),o=ja(e,r),Z("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=oe({},r,{value:void 0}),Z("invalid",e);break;case"textarea":xu(e,r),o=Da(e,r),Z("invalid",e);break;default:o=r}Fa(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var l=a[i];i==="style"?Kf(e,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Gf(e,l)):i==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&no(e,l):typeof l=="number"&&no(e,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(to.hasOwnProperty(i)?l!=null&&i==="onScroll"&&Z("scroll",e):l!=null&&tc(e,i,l,s))}switch(n){case"input":Go(e),bu(e,r,!1);break;case"textarea":Go(e),ku(e);break;case"option":r.value!=null&&e.setAttribute("value",""+en(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Kn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Kn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Hi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return we(t),null;case 6:if(e&&t.stateNode!=null)ym(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=hn(mo.current),hn(gt.current),ti(t)){if(r=t.stateNode,n=t.memoizedProps,r[pt]=t,(i=r.nodeValue!==n)&&(e=Oe,e!==null))switch(e.tag){case 3:ei(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ei(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[pt]=t,t.stateNode=r}return we(t),null;case 13:if(ee(ne),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(te&&Le!==null&&t.mode&1&&!(t.flags&128))Ip(),ar(),t.flags|=98560,i=!1;else if(i=ti(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(_(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(_(317));i[pt]=t}else ar(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;we(t),i=!1}else it!==null&&(kl(it),it=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ne.current&1?de===0&&(de=3):Lc())),t.updateQueue!==null&&(t.flags|=4),we(t),null);case 4:return cr(),ml(e,t),e===null&&co(t.stateNode.containerInfo),we(t),null;case 10:return bc(t.type._context),we(t),null;case 17:return Me(t.type)&&Gi(),we(t),null;case 19:if(ee(ne),i=t.memoizedState,i===null)return we(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)Nr(i,!1);else{if(de!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Zi(e),s!==null){for(t.flags|=128,Nr(i,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return J(ne,ne.current&1|2),t.child}e=e.sibling}i.tail!==null&&se()>dr&&(t.flags|=128,r=!0,Nr(i,!1),t.lanes=4194304)}else{if(!r)if(e=Zi(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Nr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!te)return we(t),null}else 2*se()-i.renderingStartTime>dr&&n!==1073741824&&(t.flags|=128,r=!0,Nr(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(n=i.last,n!==null?n.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=se(),t.sibling=null,n=ne.current,J(ne,r?n&1|2:n&1),t):(we(t),null);case 22:case 23:return jc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ie&1073741824&&(we(t),t.subtreeFlags&6&&(t.flags|=8192)):we(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function q0(e,t){switch(gc(t),t.tag){case 1:return Me(t.type)&&Gi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return cr(),ee(Ae),ee(xe),Ec(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Cc(t),null;case 13:if(ee(ne),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));ar()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ee(ne),null;case 4:return cr(),null;case 10:return bc(t.type._context),null;case 22:case 23:return jc(),null;case 24:return null;default:return null}}var oi=!1,be=!1,J0=typeof WeakSet=="function"?WeakSet:Set,$=null;function Gn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ie(e,t,r)}else n.current=null}function hl(e,t,n){try{n()}catch(r){ie(e,t,r)}}var dd=!1;function X0(e,t){if(Xa=Wi,e=kp(),mc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,c=0,u=0,d=e,m=null;t:for(;;){for(var g;d!==n||o!==0&&d.nodeType!==3||(a=s+o),d!==i||r!==0&&d.nodeType!==3||(l=s+r),d.nodeType===3&&(s+=d.nodeValue.length),(g=d.firstChild)!==null;)m=d,d=g;for(;;){if(d===e)break t;if(m===n&&++c===o&&(a=s),m===i&&++u===r&&(l=s),(g=d.nextSibling)!==null)break;d=m,m=d.parentNode}d=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Za={focusedElem:e,selectionRange:n},Wi=!1,$=t;$!==null;)if(t=$,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$=e;else for(;$!==null;){t=$;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var v=w.memoizedProps,x=w.memoizedState,h=t.stateNode,p=h.getSnapshotBeforeUpdate(t.elementType===t.type?v:rt(t.type,v),x);h.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(k){ie(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,$=e;break}$=t.return}return w=dd,dd=!1,w}function qr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&hl(t,n,i)}o=o.next}while(o!==r)}}function Ts(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function gl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function wm(e){var t=e.alternate;t!==null&&(e.alternate=null,wm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[pt],delete t[fo],delete t[nl],delete t[R0],delete t[I0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function bm(e){return e.tag===5||e.tag===3||e.tag===4}function fd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||bm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Hi));else if(r!==4&&(e=e.child,e!==null))for(vl(e,t,n),e=e.sibling;e!==null;)vl(e,t,n),e=e.sibling}function yl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(yl(e,t,n),e=e.sibling;e!==null;)yl(e,t,n),e=e.sibling}var he=null,ot=!1;function Rt(e,t,n){for(n=n.child;n!==null;)xm(e,t,n),n=n.sibling}function xm(e,t,n){if(ht&&typeof ht.onCommitFiberUnmount=="function")try{ht.onCommitFiberUnmount(ys,n)}catch{}switch(n.tag){case 5:be||Gn(n,t);case 6:var r=he,o=ot;he=null,Rt(e,t,n),he=r,ot=o,he!==null&&(ot?(e=he,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):he.removeChild(n.stateNode));break;case 18:he!==null&&(ot?(e=he,n=n.stateNode,e.nodeType===8?ia(e.parentNode,n):e.nodeType===1&&ia(e,n),so(e)):ia(he,n.stateNode));break;case 4:r=he,o=ot,he=n.stateNode.containerInfo,ot=!0,Rt(e,t,n),he=r,ot=o;break;case 0:case 11:case 14:case 15:if(!be&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&hl(n,t,s),o=o.next}while(o!==r)}Rt(e,t,n);break;case 1:if(!be&&(Gn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ie(n,t,a)}Rt(e,t,n);break;case 21:Rt(e,t,n);break;case 22:n.mode&1?(be=(r=be)||n.memoizedState!==null,Rt(e,t,n),be=r):Rt(e,t,n);break;default:Rt(e,t,n)}}function pd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new J0),t.forEach(function(r){var o=ay.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function nt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:he=a.stateNode,ot=!1;break e;case 3:he=a.stateNode.containerInfo,ot=!0;break e;case 4:he=a.stateNode.containerInfo,ot=!0;break e}a=a.return}if(he===null)throw Error(_(160));xm(i,s,o),he=null,ot=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(c){ie(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)km(t,e),t=t.sibling}function km(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(nt(t,e),dt(e),r&4){try{qr(3,e,e.return),Ts(3,e)}catch(v){ie(e,e.return,v)}try{qr(5,e,e.return)}catch(v){ie(e,e.return,v)}}break;case 1:nt(t,e),dt(e),r&512&&n!==null&&Gn(n,n.return);break;case 5:if(nt(t,e),dt(e),r&512&&n!==null&&Gn(n,n.return),e.flags&32){var o=e.stateNode;try{no(o,"")}catch(v){ie(e,e.return,v)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,s=n!==null?n.memoizedProps:i,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Vf(o,i),Wa(a,s);var c=Wa(a,i);for(s=0;s<l.length;s+=2){var u=l[s],d=l[s+1];u==="style"?Kf(o,d):u==="dangerouslySetInnerHTML"?Gf(o,d):u==="children"?no(o,d):tc(o,u,d,c)}switch(a){case"input":La(o,i);break;case"textarea":Uf(o,i);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var g=i.value;g!=null?Kn(o,!!i.multiple,g,!1):m!==!!i.multiple&&(i.defaultValue!=null?Kn(o,!!i.multiple,i.defaultValue,!0):Kn(o,!!i.multiple,i.multiple?[]:"",!1))}o[fo]=i}catch(v){ie(e,e.return,v)}}break;case 6:if(nt(t,e),dt(e),r&4){if(e.stateNode===null)throw Error(_(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(v){ie(e,e.return,v)}}break;case 3:if(nt(t,e),dt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{so(t.containerInfo)}catch(v){ie(e,e.return,v)}break;case 4:nt(t,e),dt(e);break;case 13:nt(t,e),dt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Rc=se())),r&4&&pd(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?(be=(c=be)||u,nt(t,e),be=c):nt(t,e),dt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!u&&e.mode&1)for($=e,u=e.child;u!==null;){for(d=$=u;$!==null;){switch(m=$,g=m.child,m.tag){case 0:case 11:case 14:case 15:qr(4,m,m.return);break;case 1:Gn(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(v){ie(r,n,v)}}break;case 5:Gn(m,m.return);break;case 22:if(m.memoizedState!==null){hd(d);continue}}g!==null?(g.return=m,$=g):hd(d)}u=u.sibling}e:for(u=null,d=e;;){if(d.tag===5){if(u===null){u=d;try{o=d.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=d.stateNode,l=d.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Qf("display",s))}catch(v){ie(e,e.return,v)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(v){ie(e,e.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:nt(t,e),dt(e),r&4&&pd(e);break;case 21:break;default:nt(t,e),dt(e)}}function dt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(bm(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(no(o,""),r.flags&=-33);var i=fd(e);yl(e,i,o);break;case 3:case 4:var s=r.stateNode.containerInfo,a=fd(e);vl(e,a,s);break;default:throw Error(_(161))}}catch(l){ie(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Z0(e,t,n){$=e,Sm(e)}function Sm(e,t,n){for(var r=(e.mode&1)!==0;$!==null;){var o=$,i=o.child;if(o.tag===22&&r){var s=o.memoizedState!==null||oi;if(!s){var a=o.alternate,l=a!==null&&a.memoizedState!==null||be;a=oi;var c=be;if(oi=s,(be=l)&&!c)for($=o;$!==null;)s=$,l=s.child,s.tag===22&&s.memoizedState!==null?gd(o):l!==null?(l.return=s,$=l):gd(o);for(;i!==null;)$=i,Sm(i),i=i.sibling;$=o,oi=a,be=c}md(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,$=i):md(e)}}function md(e){for(;$!==null;){var t=$;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:be||Ts(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!be)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:rt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Ju(t,i,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ju(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&so(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}be||t.flags&512&&gl(t)}catch(m){ie(t,t.return,m)}}if(t===e){$=null;break}if(n=t.sibling,n!==null){n.return=t.return,$=n;break}$=t.return}}function hd(e){for(;$!==null;){var t=$;if(t===e){$=null;break}var n=t.sibling;if(n!==null){n.return=t.return,$=n;break}$=t.return}}function gd(e){for(;$!==null;){var t=$;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ts(4,t)}catch(l){ie(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(l){ie(t,o,l)}}var i=t.return;try{gl(t)}catch(l){ie(t,i,l)}break;case 5:var s=t.return;try{gl(t)}catch(l){ie(t,s,l)}}}catch(l){ie(t,t.return,l)}if(t===e){$=null;break}var a=t.sibling;if(a!==null){a.return=t.return,$=a;break}$=t.return}}var ey=Math.ceil,ns=Nt.ReactCurrentDispatcher,Nc=Nt.ReactCurrentOwner,Ke=Nt.ReactCurrentBatchConfig,G=0,me=null,le=null,ge=0,Ie=0,Qn=an(0),de=0,yo=null,Sn=0,Ps=0,zc=0,Jr=null,Pe=null,Rc=0,dr=1/0,bt=null,rs=!1,wl=null,qt=null,ii=!1,Vt=null,os=0,Xr=0,bl=null,Ti=-1,Pi=0;function Se(){return G&6?se():Ti!==-1?Ti:Ti=se()}function Jt(e){return e.mode&1?G&2&&ge!==0?ge&-ge:L0.transition!==null?(Pi===0&&(Pi=sp()),Pi):(e=K,e!==0||(e=window.event,e=e===void 0?16:pp(e.type)),e):1}function lt(e,t,n,r){if(50<Xr)throw Xr=0,bl=null,Error(_(185));_o(e,n,r),(!(G&2)||e!==me)&&(e===me&&(!(G&2)&&(Ps|=n),de===4&&Ft(e,ge)),$e(e,r),n===1&&G===0&&!(t.mode&1)&&(dr=se()+500,Ss&&ln()))}function $e(e,t){var n=e.callbackNode;Lv(e,t);var r=Fi(e,e===me?ge:0);if(r===0)n!==null&&Eu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Eu(n),t===1)e.tag===0?j0(vd.bind(null,e)):Np(vd.bind(null,e)),N0(function(){!(G&6)&&ln()}),n=null;else{switch(ap(r)){case 1:n=sc;break;case 4:n=op;break;case 16:n=Bi;break;case 536870912:n=ip;break;default:n=Bi}n=$m(n,Cm.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Cm(e,t){if(Ti=-1,Pi=0,G&6)throw Error(_(327));var n=e.callbackNode;if(Zn()&&e.callbackNode!==n)return null;var r=Fi(e,e===me?ge:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=is(e,r);else{t=r;var o=G;G|=2;var i=Tm();(me!==e||ge!==t)&&(bt=null,dr=se()+500,yn(e,t));do try{ry();break}catch(a){Em(e,a)}while(!0);wc(),ns.current=i,G=o,le!==null?t=0:(me=null,ge=0,t=de)}if(t!==0){if(t===2&&(o=Qa(e),o!==0&&(r=o,t=xl(e,o))),t===1)throw n=yo,yn(e,0),Ft(e,r),$e(e,se()),n;if(t===6)Ft(e,r);else{if(o=e.current.alternate,!(r&30)&&!ty(o)&&(t=is(e,r),t===2&&(i=Qa(e),i!==0&&(r=i,t=xl(e,i))),t===1))throw n=yo,yn(e,0),Ft(e,r),$e(e,se()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:fn(e,Pe,bt);break;case 3:if(Ft(e,r),(r&130023424)===r&&(t=Rc+500-se(),10<t)){if(Fi(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Se(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=tl(fn.bind(null,e,Pe,bt),t);break}fn(e,Pe,bt);break;case 4:if(Ft(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var s=31-at(r);i=1<<s,s=t[s],s>o&&(o=s),r&=~i}if(r=o,r=se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ey(r/1960))-r,10<r){e.timeoutHandle=tl(fn.bind(null,e,Pe,bt),r);break}fn(e,Pe,bt);break;case 5:fn(e,Pe,bt);break;default:throw Error(_(329))}}}return $e(e,se()),e.callbackNode===n?Cm.bind(null,e):null}function xl(e,t){var n=Jr;return e.current.memoizedState.isDehydrated&&(yn(e,t).flags|=256),e=is(e,t),e!==2&&(t=Pe,Pe=n,t!==null&&kl(t)),e}function kl(e){Pe===null?Pe=e:Pe.push.apply(Pe,e)}function ty(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!ut(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ft(e,t){for(t&=~zc,t&=~Ps,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-at(t),r=1<<n;e[n]=-1,t&=~r}}function vd(e){if(G&6)throw Error(_(327));Zn();var t=Fi(e,0);if(!(t&1))return $e(e,se()),null;var n=is(e,t);if(e.tag!==0&&n===2){var r=Qa(e);r!==0&&(t=r,n=xl(e,r))}if(n===1)throw n=yo,yn(e,0),Ft(e,t),$e(e,se()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,fn(e,Pe,bt),$e(e,se()),null}function Ic(e,t){var n=G;G|=1;try{return e(t)}finally{G=n,G===0&&(dr=se()+500,Ss&&ln())}}function Cn(e){Vt!==null&&Vt.tag===0&&!(G&6)&&Zn();var t=G;G|=1;var n=Ke.transition,r=K;try{if(Ke.transition=null,K=1,e)return e()}finally{K=r,Ke.transition=n,G=t,!(G&6)&&ln()}}function jc(){Ie=Qn.current,ee(Qn)}function yn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,$0(n)),le!==null)for(n=le.return;n!==null;){var r=n;switch(gc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Gi();break;case 3:cr(),ee(Ae),ee(xe),Ec();break;case 5:Cc(r);break;case 4:cr();break;case 13:ee(ne);break;case 19:ee(ne);break;case 10:bc(r.type._context);break;case 22:case 23:jc()}n=n.return}if(me=e,le=e=Xt(e.current,null),ge=Ie=t,de=0,yo=null,zc=Ps=Sn=0,Pe=Jr=null,mn!==null){for(t=0;t<mn.length;t++)if(n=mn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var s=i.next;i.next=o,r.next=s}n.pending=r}mn=null}return e}function Em(e,t){do{var n=le;try{if(wc(),Si.current=ts,es){for(var r=re.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}es=!1}if(kn=0,pe=ue=re=null,Yr=!1,ho=0,Nc.current=null,n===null||n.return===null){de=1,yo=t,le=null;break}e:{var i=e,s=n.return,a=n,l=t;if(t=ge,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var m=u.alternate;m?(u.updateQueue=m.updateQueue,u.memoizedState=m.memoizedState,u.lanes=m.lanes):(u.updateQueue=null,u.memoizedState=null)}var g=od(s);if(g!==null){g.flags&=-257,id(g,s,a,i,t),g.mode&1&&rd(i,c,t),t=g,l=c;var w=t.updateQueue;if(w===null){var v=new Set;v.add(l),t.updateQueue=v}else w.add(l);break e}else{if(!(t&1)){rd(i,c,t),Lc();break e}l=Error(_(426))}}else if(te&&a.mode&1){var x=od(s);if(x!==null){!(x.flags&65536)&&(x.flags|=256),id(x,s,a,i,t),vc(ur(l,a));break e}}i=l=ur(l,a),de!==4&&(de=2),Jr===null?Jr=[i]:Jr.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var h=lm(i,l,t);qu(i,h);break e;case 1:a=l;var p=i.type,y=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(qt===null||!qt.has(y)))){i.flags|=65536,t&=-t,i.lanes|=t;var k=cm(i,a,t);qu(i,k);break e}}i=i.return}while(i!==null)}_m(n)}catch(S){t=S,le===n&&n!==null&&(le=n=n.return);continue}break}while(!0)}function Tm(){var e=ns.current;return ns.current=ts,e===null?ts:e}function Lc(){(de===0||de===3||de===2)&&(de=4),me===null||!(Sn&268435455)&&!(Ps&268435455)||Ft(me,ge)}function is(e,t){var n=G;G|=2;var r=Tm();(me!==e||ge!==t)&&(bt=null,yn(e,t));do try{ny();break}catch(o){Em(e,o)}while(!0);if(wc(),G=n,ns.current=r,le!==null)throw Error(_(261));return me=null,ge=0,de}function ny(){for(;le!==null;)Pm(le)}function ry(){for(;le!==null&&!_v();)Pm(le)}function Pm(e){var t=Mm(e.alternate,e,Ie);e.memoizedProps=e.pendingProps,t===null?_m(e):le=t,Nc.current=null}function _m(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=q0(n,t),n!==null){n.flags&=32767,le=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{de=6,le=null;return}}else if(n=Y0(n,t,Ie),n!==null){le=n;return}if(t=t.sibling,t!==null){le=t;return}le=t=e}while(t!==null);de===0&&(de=5)}function fn(e,t,n){var r=K,o=Ke.transition;try{Ke.transition=null,K=1,oy(e,t,n,r)}finally{Ke.transition=o,K=r}return null}function oy(e,t,n,r){do Zn();while(Vt!==null);if(G&6)throw Error(_(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Ov(e,i),e===me&&(le=me=null,ge=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ii||(ii=!0,$m(Bi,function(){return Zn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ke.transition,Ke.transition=null;var s=K;K=1;var a=G;G|=4,Nc.current=null,X0(e,n),km(n,e),C0(Za),Wi=!!Xa,Za=Xa=null,e.current=n,Z0(n),Av(),G=a,K=s,Ke.transition=i}else e.current=n;if(ii&&(ii=!1,Vt=e,os=o),i=e.pendingLanes,i===0&&(qt=null),Nv(n.stateNode),$e(e,se()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(rs)throw rs=!1,e=wl,wl=null,e;return os&1&&e.tag!==0&&Zn(),i=e.pendingLanes,i&1?e===bl?Xr++:(Xr=0,bl=e):Xr=0,ln(),null}function Zn(){if(Vt!==null){var e=ap(os),t=Ke.transition,n=K;try{if(Ke.transition=null,K=16>e?16:e,Vt===null)var r=!1;else{if(e=Vt,Vt=null,os=0,G&6)throw Error(_(331));var o=G;for(G|=4,$=e.current;$!==null;){var i=$,s=i.child;if($.flags&16){var a=i.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for($=c;$!==null;){var u=$;switch(u.tag){case 0:case 11:case 15:qr(8,u,i)}var d=u.child;if(d!==null)d.return=u,$=d;else for(;$!==null;){u=$;var m=u.sibling,g=u.return;if(wm(u),u===c){$=null;break}if(m!==null){m.return=g,$=m;break}$=g}}}var w=i.alternate;if(w!==null){var v=w.child;if(v!==null){w.child=null;do{var x=v.sibling;v.sibling=null,v=x}while(v!==null)}}$=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,$=s;else e:for(;$!==null;){if(i=$,i.flags&2048)switch(i.tag){case 0:case 11:case 15:qr(9,i,i.return)}var h=i.sibling;if(h!==null){h.return=i.return,$=h;break e}$=i.return}}var p=e.current;for($=p;$!==null;){s=$;var y=s.child;if(s.subtreeFlags&2064&&y!==null)y.return=s,$=y;else e:for(s=p;$!==null;){if(a=$,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ts(9,a)}}catch(S){ie(a,a.return,S)}if(a===s){$=null;break e}var k=a.sibling;if(k!==null){k.return=a.return,$=k;break e}$=a.return}}if(G=o,ln(),ht&&typeof ht.onPostCommitFiberRoot=="function")try{ht.onPostCommitFiberRoot(ys,e)}catch{}r=!0}return r}finally{K=n,Ke.transition=t}}return!1}function yd(e,t,n){t=ur(n,t),t=lm(e,t,1),e=Yt(e,t,1),t=Se(),e!==null&&(_o(e,1,t),$e(e,t))}function ie(e,t,n){if(e.tag===3)yd(e,e,n);else for(;t!==null;){if(t.tag===3){yd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(qt===null||!qt.has(r))){e=ur(n,e),e=cm(t,e,1),t=Yt(t,e,1),e=Se(),t!==null&&(_o(t,1,e),$e(t,e));break}}t=t.return}}function iy(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Se(),e.pingedLanes|=e.suspendedLanes&n,me===e&&(ge&n)===n&&(de===4||de===3&&(ge&130023424)===ge&&500>se()-Rc?yn(e,0):zc|=n),$e(e,t)}function Am(e,t){t===0&&(e.mode&1?(t=Yo,Yo<<=1,!(Yo&130023424)&&(Yo=4194304)):t=1);var n=Se();e=Pt(e,t),e!==null&&(_o(e,t,n),$e(e,n))}function sy(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Am(e,n)}function ay(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),Am(e,n)}var Mm;Mm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ae.current)_e=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return _e=!1,K0(e,t,n);_e=!!(e.flags&131072)}else _e=!1,te&&t.flags&1048576&&zp(t,Yi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ei(e,t),e=t.pendingProps;var o=sr(t,xe.current);Xn(t,n),o=Pc(null,t,r,e,o,n);var i=_c();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Me(r)?(i=!0,Qi(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,kc(t),o.updater=Cs,t.stateNode=o,o._reactInternals=t,ll(t,r,e,n),t=dl(null,t,r,!0,i,n)):(t.tag=0,te&&i&&hc(t),ke(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ei(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=cy(r),e=rt(r,e),o){case 0:t=ul(null,t,r,e,n);break e;case 1:t=ld(null,t,r,e,n);break e;case 11:t=sd(null,t,r,e,n);break e;case 14:t=ad(null,t,r,rt(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:rt(r,o),ul(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:rt(r,o),ld(e,t,r,o,n);case 3:e:{if(pm(t),e===null)throw Error(_(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Lp(e,t),Xi(t,r,null,n);var s=t.memoizedState;if(r=s.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=ur(Error(_(423)),t),t=cd(e,t,r,n,o);break e}else if(r!==o){o=ur(Error(_(424)),t),t=cd(e,t,r,n,o);break e}else for(Le=Kt(t.stateNode.containerInfo.firstChild),Oe=t,te=!0,it=null,n=Fp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ar(),r===o){t=_t(e,t,n);break e}ke(e,t,r,n)}t=t.child}return t;case 5:return Wp(t),e===null&&il(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,s=o.children,el(r,o)?s=null:i!==null&&el(r,i)&&(t.flags|=32),fm(e,t),ke(e,t,s,n),t.child;case 6:return e===null&&il(t),null;case 13:return mm(e,t,n);case 4:return Sc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=lr(t,null,r,n):ke(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:rt(r,o),sd(e,t,r,o,n);case 7:return ke(e,t,t.pendingProps,n),t.child;case 8:return ke(e,t,t.pendingProps.children,n),t.child;case 12:return ke(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,s=o.value,J(qi,r._currentValue),r._currentValue=s,i!==null)if(ut(i.value,s)){if(i.children===o.children&&!Ae.current){t=_t(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){s=i.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(i.tag===1){l=Ct(-1,n&-n),l.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),sl(i.return,n,t),a.lanes|=n;break}l=l.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(_(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),sl(s,n,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}ke(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Xn(t,n),o=Ye(o),r=r(o),t.flags|=1,ke(e,t,r,n),t.child;case 14:return r=t.type,o=rt(r,t.pendingProps),o=rt(r.type,o),ad(e,t,r,o,n);case 15:return um(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:rt(r,o),Ei(e,t),t.tag=1,Me(r)?(e=!0,Qi(t)):e=!1,Xn(t,n),Dp(t,r,o),ll(t,r,o,n),dl(null,t,r,!0,e,n);case 19:return hm(e,t,n);case 22:return dm(e,t,n)}throw Error(_(156,t.tag))};function $m(e,t){return rp(e,t)}function ly(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qe(e,t,n,r){return new ly(e,t,n,r)}function Oc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function cy(e){if(typeof e=="function")return Oc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===rc)return 11;if(e===oc)return 14}return 2}function Xt(e,t){var n=e.alternate;return n===null?(n=Qe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function _i(e,t,n,r,o,i){var s=2;if(r=e,typeof e=="function")Oc(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Ln:return wn(n.children,o,i,t);case nc:s=8,o|=8;break;case Na:return e=Qe(12,n,t,o|2),e.elementType=Na,e.lanes=i,e;case za:return e=Qe(13,n,t,o),e.elementType=za,e.lanes=i,e;case Ra:return e=Qe(19,n,t,o),e.elementType=Ra,e.lanes=i,e;case Bf:return _s(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Of:s=10;break e;case Df:s=9;break e;case rc:s=11;break e;case oc:s=14;break e;case Ot:s=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=Qe(s,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function wn(e,t,n,r){return e=Qe(7,e,r,t),e.lanes=n,e}function _s(e,t,n,r){return e=Qe(22,e,r,t),e.elementType=Bf,e.lanes=n,e.stateNode={isHidden:!1},e}function pa(e,t,n){return e=Qe(6,e,null,t),e.lanes=n,e}function ma(e,t,n){return t=Qe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function uy(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ks(0),this.expirationTimes=Ks(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ks(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Dc(e,t,n,r,o,i,s,a,l){return e=new uy(e,t,n,a,l),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Qe(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},kc(i),e}function dy(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:jn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Nm(e){if(!e)return tn;e=e._reactInternals;e:{if(_n(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Me(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(Me(n))return $p(e,n,t)}return t}function zm(e,t,n,r,o,i,s,a,l){return e=Dc(n,r,!0,e,o,i,s,a,l),e.context=Nm(null),n=e.current,r=Se(),o=Jt(n),i=Ct(r,o),i.callback=t??null,Yt(n,i,o),e.current.lanes=o,_o(e,o,r),$e(e,r),e}function As(e,t,n,r){var o=t.current,i=Se(),s=Jt(o);return n=Nm(n),t.context===null?t.context=n:t.pendingContext=n,t=Ct(i,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Yt(o,t,s),e!==null&&(lt(e,o,s,i),ki(e,o,s)),s}function ss(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function wd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Bc(e,t){wd(e,t),(e=e.alternate)&&wd(e,t)}function fy(){return null}var Rm=typeof reportError=="function"?reportError:function(e){console.error(e)};function Fc(e){this._internalRoot=e}Ms.prototype.render=Fc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));As(e,t,null,null)};Ms.prototype.unmount=Fc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Cn(function(){As(null,e,null,null)}),t[Tt]=null}};function Ms(e){this._internalRoot=e}Ms.prototype.unstable_scheduleHydration=function(e){if(e){var t=up();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Bt.length&&t!==0&&t<Bt[n].priority;n++);Bt.splice(n,0,e),n===0&&fp(e)}};function Wc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function $s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function bd(){}function py(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=ss(s);i.call(c)}}var s=zm(t,r,e,0,null,!1,!1,"",bd);return e._reactRootContainer=s,e[Tt]=s.current,co(e.nodeType===8?e.parentNode:e),Cn(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var c=ss(l);a.call(c)}}var l=Dc(e,0,!1,null,null,!1,!1,"",bd);return e._reactRootContainer=l,e[Tt]=l.current,co(e.nodeType===8?e.parentNode:e),Cn(function(){As(t,l,n,r)}),l}function Ns(e,t,n,r,o){var i=n._reactRootContainer;if(i){var s=i;if(typeof o=="function"){var a=o;o=function(){var l=ss(s);a.call(l)}}As(t,s,e,o)}else s=py(n,t,e,o,r);return ss(s)}lp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Wr(t.pendingLanes);n!==0&&(ac(t,n|1),$e(t,se()),!(G&6)&&(dr=se()+500,ln()))}break;case 13:Cn(function(){var r=Pt(e,1);if(r!==null){var o=Se();lt(r,e,1,o)}}),Bc(e,1)}};lc=function(e){if(e.tag===13){var t=Pt(e,134217728);if(t!==null){var n=Se();lt(t,e,134217728,n)}Bc(e,134217728)}};cp=function(e){if(e.tag===13){var t=Jt(e),n=Pt(e,t);if(n!==null){var r=Se();lt(n,e,t,r)}Bc(e,t)}};up=function(){return K};dp=function(e,t){var n=K;try{return K=e,t()}finally{K=n}};Ua=function(e,t,n){switch(t){case"input":if(La(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=ks(r);if(!o)throw Error(_(90));Wf(r),La(r,o)}}}break;case"textarea":Uf(e,n);break;case"select":t=n.value,t!=null&&Kn(e,!!n.multiple,t,!1)}};Jf=Ic;Xf=Cn;var my={usingClientEntryPoint:!1,Events:[Mo,Fn,ks,Yf,qf,Ic]},zr={findFiberByHostInstance:pn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},hy={bundleType:zr.bundleType,version:zr.version,rendererPackageName:zr.rendererPackageName,rendererConfig:zr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Nt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=tp(e),e===null?null:e.stateNode},findFiberByHostInstance:zr.findFiberByHostInstance||fy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var si=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!si.isDisabled&&si.supportsFiber)try{ys=si.inject(hy),ht=si}catch{}}We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=my;We.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wc(t))throw Error(_(200));return dy(e,t,null,n)};We.createRoot=function(e,t){if(!Wc(e))throw Error(_(299));var n=!1,r="",o=Rm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Dc(e,1,!1,null,null,n,!1,r,o),e[Tt]=t.current,co(e.nodeType===8?e.parentNode:e),new Fc(t)};We.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=tp(t),e=e===null?null:e.stateNode,e};We.flushSync=function(e){return Cn(e)};We.hydrate=function(e,t,n){if(!$s(t))throw Error(_(200));return Ns(null,e,t,!0,n)};We.hydrateRoot=function(e,t,n){if(!Wc(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",s=Rm;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=zm(t,null,e,1,n??null,o,!1,i,s),e[Tt]=t.current,co(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Ms(t)};We.render=function(e,t,n){if(!$s(t))throw Error(_(200));return Ns(null,e,t,!1,n)};We.unmountComponentAtNode=function(e){if(!$s(e))throw Error(_(40));return e._reactRootContainer?(Cn(function(){Ns(null,null,e,!1,function(){e._reactRootContainer=null,e[Tt]=null})}),!0):!1};We.unstable_batchedUpdates=Ic;We.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!$s(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return Ns(e,t,n,!1,r)};We.version="18.2.0-next-9e3b772b8-20220608";function Im(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Im)}catch(e){console.error(e)}}Im(),zf.exports=We;var No=zf.exports;const gy=gr(No);/**
 * @remix-run/router v1.15.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wo(){return wo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},wo.apply(this,arguments)}var Ut;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ut||(Ut={}));const xd="popstate";function vy(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:s,hash:a}=r.location;return Sl("",{pathname:i,search:s,hash:a},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:as(o)}return wy(t,n,null,e)}function fe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function jm(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function yy(){return Math.random().toString(36).substr(2,8)}function kd(e,t){return{usr:e.state,key:e.key,idx:t}}function Sl(e,t,n,r){return n===void 0&&(n=null),wo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?br(t):t,{state:n,key:t&&t.key||r||yy()})}function as(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function br(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function wy(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,s=o.history,a=Ut.Pop,l=null,c=u();c==null&&(c=0,s.replaceState(wo({},s.state,{idx:c}),""));function u(){return(s.state||{idx:null}).idx}function d(){a=Ut.Pop;let x=u(),h=x==null?null:x-c;c=x,l&&l({action:a,location:v.location,delta:h})}function m(x,h){a=Ut.Push;let p=Sl(v.location,x,h);n&&n(p,x),c=u()+1;let y=kd(p,c),k=v.createHref(p);try{s.pushState(y,"",k)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;o.location.assign(k)}i&&l&&l({action:a,location:v.location,delta:1})}function g(x,h){a=Ut.Replace;let p=Sl(v.location,x,h);n&&n(p,x),c=u();let y=kd(p,c),k=v.createHref(p);s.replaceState(y,"",k),i&&l&&l({action:a,location:v.location,delta:0})}function w(x){let h=o.location.origin!=="null"?o.location.origin:o.location.href,p=typeof x=="string"?x:as(x);return p=p.replace(/ $/,"%20"),fe(h,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,h)}let v={get action(){return a},get location(){return e(o,s)},listen(x){if(l)throw new Error("A history only accepts one active listener");return o.addEventListener(xd,d),l=x,()=>{o.removeEventListener(xd,d),l=null}},createHref(x){return t(o,x)},createURL:w,encodeLocation(x){let h=w(x);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:m,replace:g,go(x){return s.go(x)}};return v}var Sd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Sd||(Sd={}));function by(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?br(t):t,o=fr(r.pathname||"/",n);if(o==null)return null;let i=Lm(e);xy(i);let s=null;for(let a=0;s==null&&a<i.length;++a){let l=Ny(o);s=My(i[a],l)}return s}function Lm(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,s,a)=>{let l={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};l.relativePath.startsWith("/")&&(fe(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=Zt([r,l.relativePath]),u=n.concat(l);i.children&&i.children.length>0&&(fe(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Lm(i.children,t,u,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:_y(c,i.index),routesMeta:u})};return e.forEach((i,s)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))o(i,s);else for(let l of Om(i.path))o(i,s,l)}),t}function Om(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let s=Om(r.join("/")),a=[];return a.push(...s.map(l=>l===""?i:[i,l].join("/"))),o&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function xy(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Ay(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const ky=/^:[\w-]+$/,Sy=3,Cy=2,Ey=1,Ty=10,Py=-2,Cd=e=>e==="*";function _y(e,t){let n=e.split("/"),r=n.length;return n.some(Cd)&&(r+=Py),t&&(r+=Cy),n.filter(o=>!Cd(o)).reduce((o,i)=>o+(ky.test(i)?Sy:i===""?Ey:Ty),r)}function Ay(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function My(e,t){let{routesMeta:n}=e,r={},o="/",i=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,c=o==="/"?t:t.slice(o.length)||"/",u=Cl({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},c);if(!u)return null;Object.assign(r,u.params);let d=a.route;i.push({params:r,pathname:Zt([o,u.pathname]),pathnameBase:jy(Zt([o,u.pathnameBase])),route:d}),u.pathnameBase!=="/"&&(o=Zt([o,u.pathnameBase]))}return i}function Cl(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=$y(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],s=i.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((c,u,d)=>{let{paramName:m,isOptional:g}=u;if(m==="*"){let v=a[d]||"";s=i.slice(0,i.length-v.length).replace(/(.)\/+$/,"$1")}const w=a[d];return g&&!w?c[m]=void 0:c[m]=(w||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:s,pattern:e}}function $y(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),jm(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function Ny(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return jm(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function fr(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function zy(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?br(e):e;return{pathname:n?n.startsWith("/")?n:Ry(n,t):t,search:Ly(r),hash:Oy(o)}}function Ry(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function ha(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Iy(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Dm(e,t){let n=Iy(e);return t?n.map((r,o)=>o===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Bm(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=br(e):(o=wo({},e),fe(!o.pathname||!o.pathname.includes("?"),ha("?","pathname","search",o)),fe(!o.pathname||!o.pathname.includes("#"),ha("#","pathname","hash",o)),fe(!o.search||!o.search.includes("#"),ha("#","search","hash",o)));let i=e===""||o.pathname==="",s=i?"/":o.pathname,a;if(s==null)a=n;else{let d=t.length-1;if(!r&&s.startsWith("..")){let m=s.split("/");for(;m[0]==="..";)m.shift(),d-=1;o.pathname=m.join("/")}a=d>=0?t[d]:"/"}let l=zy(o,a),c=s&&s!=="/"&&s.endsWith("/"),u=(i||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}const Zt=e=>e.join("/").replace(/\/\/+/g,"/"),jy=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Ly=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Oy=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Dy(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Fm=["post","put","patch","delete"];new Set(Fm);const By=["get",...Fm];new Set(By);/**
 * React Router v6.22.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bo(){return bo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},bo.apply(this,arguments)}const zs=f.createContext(null),Wm=f.createContext(null),cn=f.createContext(null),Rs=f.createContext(null),un=f.createContext({outlet:null,matches:[],isDataRoute:!1}),Vm=f.createContext(null);function Fy(e,t){let{relative:n}=t===void 0?{}:t;zo()||fe(!1);let{basename:r,navigator:o}=f.useContext(cn),{hash:i,pathname:s,search:a}=Is(e,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:Zt([r,s])),o.createHref({pathname:l,search:a,hash:i})}function zo(){return f.useContext(Rs)!=null}function xr(){return zo()||fe(!1),f.useContext(Rs).location}function Um(e){f.useContext(cn).static||f.useLayoutEffect(e)}function Wy(){let{isDataRoute:e}=f.useContext(un);return e?tw():Vy()}function Vy(){zo()||fe(!1);let e=f.useContext(zs),{basename:t,future:n,navigator:r}=f.useContext(cn),{matches:o}=f.useContext(un),{pathname:i}=xr(),s=JSON.stringify(Dm(o,n.v7_relativeSplatPath)),a=f.useRef(!1);return Um(()=>{a.current=!0}),f.useCallback(function(c,u){if(u===void 0&&(u={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let d=Bm(c,JSON.parse(s),i,u.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:Zt([t,d.pathname])),(u.replace?r.replace:r.push)(d,u.state,u)},[t,r,s,i,e])}function S3(){let{matches:e}=f.useContext(un),t=e[e.length-1];return t?t.params:{}}function Is(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=f.useContext(cn),{matches:o}=f.useContext(un),{pathname:i}=xr(),s=JSON.stringify(Dm(o,r.v7_relativeSplatPath));return f.useMemo(()=>Bm(e,JSON.parse(s),i,n==="path"),[e,s,i,n])}function Uy(e,t){return Hy(e,t)}function Hy(e,t,n,r){zo()||fe(!1);let{navigator:o}=f.useContext(cn),{matches:i}=f.useContext(un),s=i[i.length-1],a=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let c=xr(),u;if(t){var d;let x=typeof t=="string"?br(t):t;l==="/"||(d=x.pathname)!=null&&d.startsWith(l)||fe(!1),u=x}else u=c;let m=u.pathname||"/",g=m;if(l!=="/"){let x=l.replace(/^\//,"").split("/");g="/"+m.replace(/^\//,"").split("/").slice(x.length).join("/")}let w=by(e,{pathname:g}),v=qy(w&&w.map(x=>Object.assign({},x,{params:Object.assign({},a,x.params),pathname:Zt([l,o.encodeLocation?o.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?l:Zt([l,o.encodeLocation?o.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),i,n,r);return t&&v?f.createElement(Rs.Provider,{value:{location:bo({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Ut.Pop}},v):v}function Gy(){let e=ew(),t=Dy(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return f.createElement(f.Fragment,null,f.createElement("h2",null,"Unexpected Application Error!"),f.createElement("h3",{style:{fontStyle:"italic"}},t),n?f.createElement("pre",{style:o},n):null,null)}const Qy=f.createElement(Gy,null);class Ky extends f.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?f.createElement(un.Provider,{value:this.props.routeContext},f.createElement(Vm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Yy(e){let{routeContext:t,match:n,children:r}=e,o=f.useContext(zs);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),f.createElement(un.Provider,{value:t},r)}function qy(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let s=e,a=(o=n)==null?void 0:o.errors;if(a!=null){let u=s.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id]));u>=0||fe(!1),s=s.slice(0,Math.min(s.length,u+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let u=0;u<s.length;u++){let d=s[u];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=u),d.route.id){let{loaderData:m,errors:g}=n,w=d.route.loader&&m[d.route.id]===void 0&&(!g||g[d.route.id]===void 0);if(d.route.lazy||w){l=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((u,d,m)=>{let g,w=!1,v=null,x=null;n&&(g=a&&d.route.id?a[d.route.id]:void 0,v=d.route.errorElement||Qy,l&&(c<0&&m===0?(nw("route-fallback",!1),w=!0,x=null):c===m&&(w=!0,x=d.route.hydrateFallbackElement||null)));let h=t.concat(s.slice(0,m+1)),p=()=>{let y;return g?y=v:w?y=x:d.route.Component?y=f.createElement(d.route.Component,null):d.route.element?y=d.route.element:y=u,f.createElement(Yy,{match:d,routeContext:{outlet:u,matches:h,isDataRoute:n!=null},children:y})};return n&&(d.route.ErrorBoundary||d.route.errorElement||m===0)?f.createElement(Ky,{location:n.location,revalidation:n.revalidation,component:v,error:g,children:p(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):p()},null)}var Hm=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Hm||{}),ls=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ls||{});function Jy(e){let t=f.useContext(zs);return t||fe(!1),t}function Xy(e){let t=f.useContext(Wm);return t||fe(!1),t}function Zy(e){let t=f.useContext(un);return t||fe(!1),t}function Gm(e){let t=Zy(),n=t.matches[t.matches.length-1];return n.route.id||fe(!1),n.route.id}function ew(){var e;let t=f.useContext(Vm),n=Xy(ls.UseRouteError),r=Gm(ls.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function tw(){let{router:e}=Jy(Hm.UseNavigateStable),t=Gm(ls.UseNavigateStable),n=f.useRef(!1);return Um(()=>{n.current=!0}),f.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,bo({fromRouteId:t},i)))},[e,t])}const Ed={};function nw(e,t,n){!t&&!Ed[e]&&(Ed[e]=!0)}function rw(e){let{basename:t="/",children:n=null,location:r,navigationType:o=Ut.Pop,navigator:i,static:s=!1,future:a}=e;zo()&&fe(!1);let l=t.replace(/^\/*/,"/"),c=f.useMemo(()=>({basename:l,navigator:i,static:s,future:bo({v7_relativeSplatPath:!1},a)}),[l,a,i,s]);typeof r=="string"&&(r=br(r));let{pathname:u="/",search:d="",hash:m="",state:g=null,key:w="default"}=r,v=f.useMemo(()=>{let x=fr(u,l);return x==null?null:{location:{pathname:x,search:d,hash:m,state:g,key:w},navigationType:o}},[l,u,d,m,g,w,o]);return v==null?null:f.createElement(cn.Provider,{value:c},f.createElement(Rs.Provider,{children:n,value:v}))}new Promise(()=>{});/**
 * React Router DOM v6.22.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function cs(){return cs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},cs.apply(this,arguments)}function Qm(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function ow(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function iw(e,t){return e.button===0&&(!t||t==="_self")&&!ow(e)}const sw=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],aw=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],lw="6";try{window.__reactRouterVersion=lw}catch{}const cw=f.createContext({isTransitioning:!1}),uw="startTransition",Td=$f[uw];function dw(e){let{basename:t,children:n,future:r,window:o}=e,i=f.useRef();i.current==null&&(i.current=vy({window:o,v5Compat:!0}));let s=i.current,[a,l]=f.useState({action:s.action,location:s.location}),{v7_startTransition:c}=r||{},u=f.useCallback(d=>{c&&Td?Td(()=>l(d)):l(d)},[l,c]);return f.useLayoutEffect(()=>s.listen(u),[s,u]),f.createElement(rw,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const fw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",pw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Vc=f.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:s,state:a,target:l,to:c,preventScrollReset:u,unstable_viewTransition:d}=t,m=Qm(t,sw),{basename:g}=f.useContext(cn),w,v=!1;if(typeof c=="string"&&pw.test(c)&&(w=c,fw))try{let y=new URL(window.location.href),k=c.startsWith("//")?new URL(y.protocol+c):new URL(c),S=fr(k.pathname,g);k.origin===y.origin&&S!=null?c=S+k.search+k.hash:v=!0}catch{}let x=Fy(c,{relative:o}),h=hw(c,{replace:s,state:a,target:l,preventScrollReset:u,relative:o,unstable_viewTransition:d});function p(y){r&&r(y),y.defaultPrevented||h(y)}return f.createElement("a",cs({},m,{href:w||x,onClick:v||i?r:p,ref:n,target:l}))}),gn=f.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:o=!1,className:i="",end:s=!1,style:a,to:l,unstable_viewTransition:c,children:u}=t,d=Qm(t,aw),m=Is(l,{relative:d.relative}),g=xr(),w=f.useContext(Wm),{navigator:v,basename:x}=f.useContext(cn),h=w!=null&&gw(m)&&c===!0,p=v.encodeLocation?v.encodeLocation(m).pathname:m.pathname,y=g.pathname,k=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;o||(y=y.toLowerCase(),k=k?k.toLowerCase():null,p=p.toLowerCase()),k&&x&&(k=fr(k,x)||k);const S=p!=="/"&&p.endsWith("/")?p.length-1:p.length;let C=y===p||!s&&y.startsWith(p)&&y.charAt(S)==="/",E=k!=null&&(k===p||!s&&k.startsWith(p)&&k.charAt(p.length)==="/"),T={isActive:C,isPending:E,isTransitioning:h},N=C?r:void 0,M;typeof i=="function"?M=i(T):M=[i,C?"active":null,E?"pending":null,h?"transitioning":null].filter(Boolean).join(" ");let D=typeof a=="function"?a(T):a;return f.createElement(Vc,cs({},d,{"aria-current":N,className:M,ref:n,style:D,to:l,unstable_viewTransition:c}),typeof u=="function"?u(T):u)});var El;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(El||(El={}));var Pd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Pd||(Pd={}));function mw(e){let t=f.useContext(zs);return t||fe(!1),t}function hw(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:s,unstable_viewTransition:a}=t===void 0?{}:t,l=Wy(),c=xr(),u=Is(e,{relative:s});return f.useCallback(d=>{if(iw(d,n)){d.preventDefault();let m=r!==void 0?r:as(c)===as(u);l(e,{replace:m,state:o,preventScrollReset:i,relative:s,unstable_viewTransition:a})}},[c,l,u,r,o,n,e,i,s,a])}function gw(e,t){t===void 0&&(t={});let n=f.useContext(cw);n==null&&fe(!1);let{basename:r}=mw(El.useViewTransitionState),o=Is(e,{relative:t.relative});if(!n.isTransitioning)return!1;let i=fr(n.currentLocation.pathname,r)||n.currentLocation.pathname,s=fr(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Cl(o.pathname,s)!=null||Cl(o.pathname,i)!=null}const vw=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",width:35.93,height:32,preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 228",...e},f.createElement("path",{fill:"#087EA4",d:"M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"}));/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var yw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ww=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Ro=(e,t)=>{const n=f.forwardRef(({color:r="currentColor",size:o=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:a="",children:l,...c},u)=>f.createElement("svg",{ref:u,...yw,width:o,height:o,stroke:r,strokeWidth:s?Number(i)*24/Number(o):i,className:["lucide",`lucide-${ww(e)}`,a].join(" "),...c},[...t.map(([d,m])=>f.createElement(d,m)),...Array.isArray(l)?l:[l]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bw=Ro("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xw=Ro("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kw=Ro("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sw=Ro("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cw=Ro("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);function L(){return L=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},L.apply(this,arguments)}function Ew(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function js(...e){return t=>e.forEach(n=>Ew(n,t))}function Fe(...e){return f.useCallback(js(...e),e)}const pr=f.forwardRef((e,t)=>{const{children:n,...r}=e,o=f.Children.toArray(n),i=o.find(Pw);if(i){const s=i.props.children,a=o.map(l=>l===i?f.Children.count(s)>1?f.Children.only(null):f.isValidElement(s)?s.props.children:null:l);return f.createElement(Tl,L({},r,{ref:t}),f.isValidElement(s)?f.cloneElement(s,void 0,a):null)}return f.createElement(Tl,L({},r,{ref:t}),n)});pr.displayName="Slot";const Tl=f.forwardRef((e,t)=>{const{children:n,...r}=e;return f.isValidElement(n)?f.cloneElement(n,{..._w(r,n.props),ref:t?js(t,n.ref):n.ref}):f.Children.count(n)>1?f.Children.only(null):null});Tl.displayName="SlotClone";const Tw=({children:e})=>f.createElement(f.Fragment,null,e);function Pw(e){return f.isValidElement(e)&&e.type===Tw}function _w(e,t){const n={...t};for(const r in t){const o=e[r],i=t[r];/^on[A-Z]/.test(r)?o&&i?n[r]=(...a)=>{i(...a),o(...a)}:o&&(n[r]=o):r==="style"?n[r]={...o,...i}:r==="className"&&(n[r]=[o,i].filter(Boolean).join(" "))}return{...e,...n}}function Km(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=Km(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function Aw(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=Km(e))&&(r&&(r+=" "),r+=t);return r}const _d=e=>typeof e=="boolean"?"".concat(e):e===0?"0":e,Ad=Aw,Mw=(e,t)=>n=>{var r;if((t==null?void 0:t.variants)==null)return Ad(e,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:o,defaultVariants:i}=t,s=Object.keys(o).map(c=>{const u=n==null?void 0:n[c],d=i==null?void 0:i[c];if(u===null)return null;const m=_d(u)||_d(d);return o[c][m]}),a=n&&Object.entries(n).reduce((c,u)=>{let[d,m]=u;return m===void 0||(c[d]=m),c},{}),l=t==null||(r=t.compoundVariants)===null||r===void 0?void 0:r.reduce((c,u)=>{let{class:d,className:m,...g}=u;return Object.entries(g).every(w=>{let[v,x]=w;return Array.isArray(x)?x.includes({...i,...a}[v]):{...i,...a}[v]===x})?[...c,d,m]:c},[]);return Ad(e,s,l,n==null?void 0:n.class,n==null?void 0:n.className)},$w="modulepreload",Nw=function(e){return"/"+e},Md={},Q=function(t,n,r){let o=Promise.resolve();if(n&&n.length>0){const i=document.getElementsByTagName("link");o=Promise.all(n.map(s=>{if(s=Nw(s),s in Md)return;Md[s]=!0;const a=s.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(!!r)for(let d=i.length-1;d>=0;d--){const m=i[d];if(m.href===s&&(!a||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${l}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":$w,a||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),a)return new Promise((d,m)=>{u.addEventListener("load",d),u.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${s}`)))})}))}return o.then(()=>t()).catch(i=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=i,window.dispatchEvent(s),!s.defaultPrevented)throw i})};class zw{constructor(t){tt(this,"type");tt(this,"responseStatus");Object.assign(this,t)}}var $d;(function(e){e[e.CONNECTING=0]="CONNECTING",e[e.OPEN=1]="OPEN",e[e.CLOSED=2]="CLOSED"})($d||($d={}));function Rw(e){return e&&e.charAt(0).toLowerCase()+e.substring(1)}function Pl(e){if(!e||!(e instanceof Object)||Array.isArray(e))return e;let t={};for(let n in e)if(e.hasOwnProperty(n)){const r=Rw(n),o=e[n];Array.isArray(o)?t[r]=o.map(i=>Pl(i)):o instanceof Object?t[r]=Pl(o):t[r]=o}return t}function _l(e){return _l&&(e.responseStatus||e.errors?e:Pl(e))}function C3(e,t){if(e==null)return null;let n=e.indexOf(t);return n==-1?e:e.substring(0,n)}function E3(e,t){if(e==null)return null;let n=e.indexOf(t);return n==-1?e:e.substring(n+t.length)}function Ym(e,t){if(e==null)return null;let n=e.lastIndexOf(t);return n==-1?e:e.substring(n+t.length)}function Iw(...e){let t=[],n,r;for(n=0,r=e.length;n<r;n++){let i=e[n];t=i.indexOf("://")===-1?t.concat(i.split("/")):t.concat(i.lastIndexOf("/")===i.length-1?i.substring(0,i.length-1):i)}let o=[];for(n=0,r=t.length;n<r;n++){let i=t[n];!i||i==="."||(i===".."?o.pop():o.push(i))}return t[0]===""&&o.unshift(""),o.join("/")||(o.length?"/":".")}function jw(e){return Object.prototype.toString.call(e)==="[object Array]"}function Lw(e){const t=this.responseStatus||this.ResponseStatus;if(t==null)return;const n=t.ErrorCode?_l(t):t,r=Ow(e);if(r&&!(n.errors==null||n.errors.length==0)){const o=r.map(i=>(i||"").toLowerCase());for(let i of n.errors)if(o.indexOf((i.fieldName||"").toLowerCase())!==-1)return;for(let i of n.errors)if(o.indexOf((i.fieldName||"").toLowerCase())===-1)return i.message||i.errorCode}return n.message||n.errorCode||void 0}typeof window<"u"&&window.Element!==void 0&&(Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){let t=this;do{if(t.matches(e))return t;t=t.parentElement||t.parentNode}while(t!==null&&t.nodeType===1);return null}));var Nd;(function(e){e.MultiPart="multipart/form-data",e.UrlEncoded="application/x-www-form-urlencoded",e.Json="application/json"})(Nd||(Nd={}));function Ow(e){return e?jw(e)?e:e.split(",").map(t=>t.trim()):[]}function qm(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=qm(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Dw(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=qm(e))&&(r&&(r+=" "),r+=t);return r}const Uc="-";function Bw(e){const t=Ww(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;function o(s){const a=s.split(Uc);return a[0]===""&&a.length!==1&&a.shift(),Jm(a,t)||Fw(s)}function i(s,a){const l=n[s]||[];return a&&r[s]?[...l,...r[s]]:l}return{getClassGroupId:o,getConflictingClassGroupIds:i}}function Jm(e,t){var s;if(e.length===0)return t.classGroupId;const n=e[0],r=t.nextPart.get(n),o=r?Jm(e.slice(1),r):void 0;if(o)return o;if(t.validators.length===0)return;const i=e.join(Uc);return(s=t.validators.find(({validator:a})=>a(i)))==null?void 0:s.classGroupId}const zd=/^\[(.+)\]$/;function Fw(e){if(zd.test(e)){const t=zd.exec(e)[1],n=t==null?void 0:t.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}}function Ww(e){const{theme:t,prefix:n}=e,r={nextPart:new Map,validators:[]};return Uw(Object.entries(e.classGroups),n).forEach(([i,s])=>{Al(s,r,i,t)}),r}function Al(e,t,n,r){e.forEach(o=>{if(typeof o=="string"){const i=o===""?t:Rd(t,o);i.classGroupId=n;return}if(typeof o=="function"){if(Vw(o)){Al(o(r),t,n,r);return}t.validators.push({validator:o,classGroupId:n});return}Object.entries(o).forEach(([i,s])=>{Al(s,Rd(t,i),n,r)})})}function Rd(e,t){let n=e;return t.split(Uc).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n}function Vw(e){return e.isThemeGetter}function Uw(e,t){return t?e.map(([n,r])=>{const o=r.map(i=>typeof i=="string"?t+i:typeof i=="object"?Object.fromEntries(Object.entries(i).map(([s,a])=>[t+s,a])):i);return[n,o]}):e}function Hw(e){if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=new Map,r=new Map;function o(i,s){n.set(i,s),t++,t>e&&(t=0,r=n,n=new Map)}return{get(i){let s=n.get(i);if(s!==void 0)return s;if((s=r.get(i))!==void 0)return o(i,s),s},set(i,s){n.has(i)?n.set(i,s):o(i,s)}}}const Xm="!";function Gw(e){const t=e.separator,n=t.length===1,r=t[0],o=t.length;return function(s){const a=[];let l=0,c=0,u;for(let v=0;v<s.length;v++){let x=s[v];if(l===0){if(x===r&&(n||s.slice(v,v+o)===t)){a.push(s.slice(c,v)),c=v+o;continue}if(x==="/"){u=v;continue}}x==="["?l++:x==="]"&&l--}const d=a.length===0?s:s.substring(c),m=d.startsWith(Xm),g=m?d.substring(1):d,w=u&&u>c?u-c:void 0;return{modifiers:a,hasImportantModifier:m,baseClassName:g,maybePostfixModifierPosition:w}}}function Qw(e){if(e.length<=1)return e;const t=[];let n=[];return e.forEach(r=>{r[0]==="["?(t.push(...n.sort(),r),n=[]):n.push(r)}),t.push(...n.sort()),t}function Kw(e){return{cache:Hw(e.cacheSize),splitModifiers:Gw(e),...Bw(e)}}const Yw=/\s+/;function qw(e,t){const{splitModifiers:n,getClassGroupId:r,getConflictingClassGroupIds:o}=t,i=new Set;return e.trim().split(Yw).map(s=>{const{modifiers:a,hasImportantModifier:l,baseClassName:c,maybePostfixModifierPosition:u}=n(s);let d=r(u?c.substring(0,u):c),m=!!u;if(!d){if(!u)return{isTailwindClass:!1,originalClassName:s};if(d=r(c),!d)return{isTailwindClass:!1,originalClassName:s};m=!1}const g=Qw(a).join(":");return{isTailwindClass:!0,modifierId:l?g+Xm:g,classGroupId:d,originalClassName:s,hasPostfixModifier:m}}).reverse().filter(s=>{if(!s.isTailwindClass)return!0;const{modifierId:a,classGroupId:l,hasPostfixModifier:c}=s,u=a+l;return i.has(u)?!1:(i.add(u),o(l,c).forEach(d=>i.add(a+d)),!0)}).reverse().map(s=>s.originalClassName).join(" ")}function Jw(){let e=0,t,n,r="";for(;e<arguments.length;)(t=arguments[e++])&&(n=Zm(t))&&(r&&(r+=" "),r+=n);return r}function Zm(e){if(typeof e=="string")return e;let t,n="";for(let r=0;r<e.length;r++)e[r]&&(t=Zm(e[r]))&&(n&&(n+=" "),n+=t);return n}function Xw(e,...t){let n,r,o,i=s;function s(l){const c=t.reduce((u,d)=>d(u),e());return n=Kw(c),r=n.cache.get,o=n.cache.set,i=a,a(l)}function a(l){const c=r(l);if(c)return c;const u=qw(l,n);return o(l,u),u}return function(){return i(Jw.apply(null,arguments))}}function X(e){const t=n=>n[e]||[];return t.isThemeGetter=!0,t}const eh=/^\[(?:([a-z-]+):)?(.+)\]$/i,Zw=/^\d+\/\d+$/,e1=new Set(["px","full","screen"]),t1=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,n1=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,r1=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,o1=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,i1=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function wt(e){return vn(e)||e1.has(e)||Zw.test(e)}function It(e){return kr(e,"length",p1)}function vn(e){return!!e&&!Number.isNaN(Number(e))}function ai(e){return kr(e,"number",vn)}function Rr(e){return!!e&&Number.isInteger(Number(e))}function s1(e){return e.endsWith("%")&&vn(e.slice(0,-1))}function O(e){return eh.test(e)}function jt(e){return t1.test(e)}const a1=new Set(["length","size","percentage"]);function l1(e){return kr(e,a1,th)}function c1(e){return kr(e,"position",th)}const u1=new Set(["image","url"]);function d1(e){return kr(e,u1,h1)}function f1(e){return kr(e,"",m1)}function Ir(){return!0}function kr(e,t,n){const r=eh.exec(e);return r?r[1]?typeof t=="string"?r[1]===t:t.has(r[1]):n(r[2]):!1}function p1(e){return n1.test(e)&&!r1.test(e)}function th(){return!1}function m1(e){return o1.test(e)}function h1(e){return i1.test(e)}function g1(){const e=X("colors"),t=X("spacing"),n=X("blur"),r=X("brightness"),o=X("borderColor"),i=X("borderRadius"),s=X("borderSpacing"),a=X("borderWidth"),l=X("contrast"),c=X("grayscale"),u=X("hueRotate"),d=X("invert"),m=X("gap"),g=X("gradientColorStops"),w=X("gradientColorStopPositions"),v=X("inset"),x=X("margin"),h=X("opacity"),p=X("padding"),y=X("saturate"),k=X("scale"),S=X("sepia"),C=X("skew"),E=X("space"),T=X("translate"),N=()=>["auto","contain","none"],M=()=>["auto","hidden","clip","visible","scroll"],D=()=>["auto",O,t],R=()=>[O,t],q=()=>["",wt,It],B=()=>["auto",vn,O],V=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],Y=()=>["solid","dashed","dotted","double","none"],F=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"],A=()=>["start","end","center","between","around","evenly","stretch"],P=()=>["","0",O],z=()=>["auto","avoid","all","avoid-page","page","left","right","column"],j=()=>[vn,ai],H=()=>[vn,O];return{cacheSize:500,separator:":",theme:{colors:[Ir],spacing:[wt,It],blur:["none","",jt,O],brightness:j(),borderColor:[e],borderRadius:["none","","full",jt,O],borderSpacing:R(),borderWidth:q(),contrast:j(),grayscale:P(),hueRotate:H(),invert:P(),gap:R(),gradientColorStops:[e],gradientColorStopPositions:[s1,It],inset:D(),margin:D(),opacity:j(),padding:R(),saturate:j(),scale:j(),sepia:P(),skew:H(),space:R(),translate:R()},classGroups:{aspect:[{aspect:["auto","square","video",O]}],container:["container"],columns:[{columns:[jt]}],"break-after":[{"break-after":z()}],"break-before":[{"break-before":z()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...V(),O]}],overflow:[{overflow:M()}],"overflow-x":[{"overflow-x":M()}],"overflow-y":[{"overflow-y":M()}],overscroll:[{overscroll:N()}],"overscroll-x":[{"overscroll-x":N()}],"overscroll-y":[{"overscroll-y":N()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[v]}],"inset-x":[{"inset-x":[v]}],"inset-y":[{"inset-y":[v]}],start:[{start:[v]}],end:[{end:[v]}],top:[{top:[v]}],right:[{right:[v]}],bottom:[{bottom:[v]}],left:[{left:[v]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Rr,O]}],basis:[{basis:D()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",O]}],grow:[{grow:P()}],shrink:[{shrink:P()}],order:[{order:["first","last","none",Rr,O]}],"grid-cols":[{"grid-cols":[Ir]}],"col-start-end":[{col:["auto",{span:["full",Rr,O]},O]}],"col-start":[{"col-start":B()}],"col-end":[{"col-end":B()}],"grid-rows":[{"grid-rows":[Ir]}],"row-start-end":[{row:["auto",{span:[Rr,O]},O]}],"row-start":[{"row-start":B()}],"row-end":[{"row-end":B()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",O]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",O]}],gap:[{gap:[m]}],"gap-x":[{"gap-x":[m]}],"gap-y":[{"gap-y":[m]}],"justify-content":[{justify:["normal",...A()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...A(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...A(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[p]}],px:[{px:[p]}],py:[{py:[p]}],ps:[{ps:[p]}],pe:[{pe:[p]}],pt:[{pt:[p]}],pr:[{pr:[p]}],pb:[{pb:[p]}],pl:[{pl:[p]}],m:[{m:[x]}],mx:[{mx:[x]}],my:[{my:[x]}],ms:[{ms:[x]}],me:[{me:[x]}],mt:[{mt:[x]}],mr:[{mr:[x]}],mb:[{mb:[x]}],ml:[{ml:[x]}],"space-x":[{"space-x":[E]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[E]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",O,t]}],"min-w":[{"min-w":[O,t,"min","max","fit"]}],"max-w":[{"max-w":[O,t,"none","full","min","max","fit","prose",{screen:[jt]},jt]}],h:[{h:[O,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[O,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[O,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[O,t,"auto","min","max","fit"]}],"font-size":[{text:["base",jt,It]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",ai]}],"font-family":[{font:[Ir]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",O]}],"line-clamp":[{"line-clamp":["none",vn,ai]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",wt,O]}],"list-image":[{"list-image":["none",O]}],"list-style-type":[{list:["none","disc","decimal",O]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[h]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[h]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...Y(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",wt,It]}],"underline-offset":[{"underline-offset":["auto",wt,O]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:R()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",O]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",O]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[h]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...V(),c1]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",l1]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},d1]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[w]}],"gradient-via-pos":[{via:[w]}],"gradient-to-pos":[{to:[w]}],"gradient-from":[{from:[g]}],"gradient-via":[{via:[g]}],"gradient-to":[{to:[g]}],rounded:[{rounded:[i]}],"rounded-s":[{"rounded-s":[i]}],"rounded-e":[{"rounded-e":[i]}],"rounded-t":[{"rounded-t":[i]}],"rounded-r":[{"rounded-r":[i]}],"rounded-b":[{"rounded-b":[i]}],"rounded-l":[{"rounded-l":[i]}],"rounded-ss":[{"rounded-ss":[i]}],"rounded-se":[{"rounded-se":[i]}],"rounded-ee":[{"rounded-ee":[i]}],"rounded-es":[{"rounded-es":[i]}],"rounded-tl":[{"rounded-tl":[i]}],"rounded-tr":[{"rounded-tr":[i]}],"rounded-br":[{"rounded-br":[i]}],"rounded-bl":[{"rounded-bl":[i]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[h]}],"border-style":[{border:[...Y(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[h]}],"divide-style":[{divide:Y()}],"border-color":[{border:[o]}],"border-color-x":[{"border-x":[o]}],"border-color-y":[{"border-y":[o]}],"border-color-t":[{"border-t":[o]}],"border-color-r":[{"border-r":[o]}],"border-color-b":[{"border-b":[o]}],"border-color-l":[{"border-l":[o]}],"divide-color":[{divide:[o]}],"outline-style":[{outline:["",...Y()]}],"outline-offset":[{"outline-offset":[wt,O]}],"outline-w":[{outline:[wt,It]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:q()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[h]}],"ring-offset-w":[{"ring-offset":[wt,It]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",jt,f1]}],"shadow-color":[{shadow:[Ir]}],opacity:[{opacity:[h]}],"mix-blend":[{"mix-blend":F()}],"bg-blend":[{"bg-blend":F()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",jt,O]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[d]}],saturate:[{saturate:[y]}],sepia:[{sepia:[S]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[d]}],"backdrop-opacity":[{"backdrop-opacity":[h]}],"backdrop-saturate":[{"backdrop-saturate":[y]}],"backdrop-sepia":[{"backdrop-sepia":[S]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",O]}],duration:[{duration:H()}],ease:[{ease:["linear","in","out","in-out",O]}],delay:[{delay:H()}],animate:[{animate:["none","spin","ping","pulse","bounce",O]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[k]}],"scale-x":[{"scale-x":[k]}],"scale-y":[{"scale-y":[k]}],rotate:[{rotate:[Rr,O]}],"translate-x":[{"translate-x":[T]}],"translate-y":[{"translate-y":[T]}],"skew-x":[{"skew-x":[C]}],"skew-y":[{"skew-y":[C]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",O]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",O]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":R()}],"scroll-mx":[{"scroll-mx":R()}],"scroll-my":[{"scroll-my":R()}],"scroll-ms":[{"scroll-ms":R()}],"scroll-me":[{"scroll-me":R()}],"scroll-mt":[{"scroll-mt":R()}],"scroll-mr":[{"scroll-mr":R()}],"scroll-mb":[{"scroll-mb":R()}],"scroll-ml":[{"scroll-ml":R()}],"scroll-p":[{"scroll-p":R()}],"scroll-px":[{"scroll-px":R()}],"scroll-py":[{"scroll-py":R()}],"scroll-ps":[{"scroll-ps":R()}],"scroll-pe":[{"scroll-pe":R()}],"scroll-pt":[{"scroll-pt":R()}],"scroll-pr":[{"scroll-pr":R()}],"scroll-pb":[{"scroll-pb":R()}],"scroll-pl":[{"scroll-pl":R()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",O]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[wt,It,ai]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}const v1=Xw(g1);function T3(e){return e.normalize("NFKD").toLowerCase().trim().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\_/g,"-").replace(/\-\-+/g,"-").replace(/\-$/g,"")}function P3(e){return new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}function _3(e){try{return new Date(e).toISOString()}catch{return"2000-01-01T00:00:00.000Z"}}function ae(...e){return v1(Dw(e))}const y1=Mw("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 focus:ring-2 focus:ring-offset-2",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-blue-500",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90 focus:ring-destructive-500",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground focus:ring-accent-500",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80 focus:ring-secondary-500",ghost:"hover:bg-accent hover:text-accent-foreground focus:ring-accent-500",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),nh=f.forwardRef(({className:e,variant:t,size:n,asChild:r=!1,...o},i)=>{const s=r?pr:"button";return b.jsx(s,{className:ae(y1({variant:t,size:n,className:e})),ref:i,...o})});nh.displayName="Button";function U(e,t,{checkForDefaultPrevented:n=!0}={}){return function(o){if(e==null||e(o),n===!1||!o.defaultPrevented)return t==null?void 0:t(o)}}function Io(e,t=[]){let n=[];function r(i,s){const a=f.createContext(s),l=n.length;n=[...n,s];function c(d){const{scope:m,children:g,...w}=d,v=(m==null?void 0:m[e][l])||a,x=f.useMemo(()=>w,Object.values(w));return f.createElement(v.Provider,{value:x},g)}function u(d,m){const g=(m==null?void 0:m[e][l])||a,w=f.useContext(g);if(w)return w;if(s!==void 0)return s;throw new Error(`\`${d}\` must be used within \`${i}\``)}return c.displayName=i+"Provider",[c,u]}const o=()=>{const i=n.map(s=>f.createContext(s));return function(a){const l=(a==null?void 0:a[e])||i;return f.useMemo(()=>({[`__scope${e}`]:{...a,[e]:l}}),[a,l])}};return o.scopeName=e,[r,w1(o,...t)]}function w1(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(i){const s=r.reduce((a,{useScope:l,scopeName:c})=>{const d=l(i)[`__scope${c}`];return{...a,...d}},{});return f.useMemo(()=>({[`__scope${t.scopeName}`]:s}),[s])}};return n.scopeName=t.scopeName,n}function vt(e){const t=f.useRef(e);return f.useEffect(()=>{t.current=e}),f.useMemo(()=>(...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},[])}function rh({prop:e,defaultProp:t,onChange:n=()=>{}}){const[r,o]=b1({defaultProp:t,onChange:n}),i=e!==void 0,s=i?e:r,a=vt(n),l=f.useCallback(c=>{if(i){const d=typeof c=="function"?c(e):c;d!==e&&a(d)}else o(c)},[i,e,o,a]);return[s,l]}function b1({defaultProp:e,onChange:t}){const n=f.useState(e),[r]=n,o=f.useRef(r),i=vt(t);return f.useEffect(()=>{o.current!==r&&(i(r),o.current=r)},[r,o,i]),n}const x1=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],Xe=x1.reduce((e,t)=>{const n=f.forwardRef((r,o)=>{const{asChild:i,...s}=r,a=i?pr:t;return f.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),f.createElement(a,L({},s,{ref:o}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function oh(e,t){e&&No.flushSync(()=>e.dispatchEvent(t))}function ih(e){const t=e+"CollectionProvider",[n,r]=Io(t),[o,i]=n(t,{collectionRef:{current:null},itemMap:new Map}),s=g=>{const{scope:w,children:v}=g,x=I.useRef(null),h=I.useRef(new Map).current;return I.createElement(o,{scope:w,itemMap:h,collectionRef:x},v)},a=e+"CollectionSlot",l=I.forwardRef((g,w)=>{const{scope:v,children:x}=g,h=i(a,v),p=Fe(w,h.collectionRef);return I.createElement(pr,{ref:p},x)}),c=e+"CollectionItemSlot",u="data-radix-collection-item",d=I.forwardRef((g,w)=>{const{scope:v,children:x,...h}=g,p=I.useRef(null),y=Fe(w,p),k=i(c,v);return I.useEffect(()=>(k.itemMap.set(p,{ref:p,...h}),()=>void k.itemMap.delete(p))),I.createElement(pr,{[u]:"",ref:y},x)});function m(g){const w=i(e+"CollectionConsumer",g);return I.useCallback(()=>{const x=w.collectionRef.current;if(!x)return[];const h=Array.from(x.querySelectorAll(`[${u}]`));return Array.from(w.itemMap.values()).sort((k,S)=>h.indexOf(k.ref.current)-h.indexOf(S.ref.current))},[w.collectionRef,w.itemMap])}return[{Provider:s,Slot:l,ItemSlot:d},m,r]}const k1=f.createContext(void 0);function sh(e){const t=f.useContext(k1);return e||t||"ltr"}function S1(e,t=globalThis==null?void 0:globalThis.document){const n=vt(e);f.useEffect(()=>{const r=o=>{o.key==="Escape"&&n(o)};return t.addEventListener("keydown",r),()=>t.removeEventListener("keydown",r)},[n,t])}const Ml="dismissableLayer.update",C1="dismissableLayer.pointerDownOutside",E1="dismissableLayer.focusOutside";let Id;const T1=f.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),P1=f.forwardRef((e,t)=>{var n;const{disableOutsidePointerEvents:r=!1,onEscapeKeyDown:o,onPointerDownOutside:i,onFocusOutside:s,onInteractOutside:a,onDismiss:l,...c}=e,u=f.useContext(T1),[d,m]=f.useState(null),g=(n=d==null?void 0:d.ownerDocument)!==null&&n!==void 0?n:globalThis==null?void 0:globalThis.document,[,w]=f.useState({}),v=Fe(t,T=>m(T)),x=Array.from(u.layers),[h]=[...u.layersWithOutsidePointerEventsDisabled].slice(-1),p=x.indexOf(h),y=d?x.indexOf(d):-1,k=u.layersWithOutsidePointerEventsDisabled.size>0,S=y>=p,C=_1(T=>{const N=T.target,M=[...u.branches].some(D=>D.contains(N));!S||M||(i==null||i(T),a==null||a(T),T.defaultPrevented||l==null||l())},g),E=A1(T=>{const N=T.target;[...u.branches].some(D=>D.contains(N))||(s==null||s(T),a==null||a(T),T.defaultPrevented||l==null||l())},g);return S1(T=>{y===u.layers.size-1&&(o==null||o(T),!T.defaultPrevented&&l&&(T.preventDefault(),l()))},g),f.useEffect(()=>{if(d)return r&&(u.layersWithOutsidePointerEventsDisabled.size===0&&(Id=g.body.style.pointerEvents,g.body.style.pointerEvents="none"),u.layersWithOutsidePointerEventsDisabled.add(d)),u.layers.add(d),jd(),()=>{r&&u.layersWithOutsidePointerEventsDisabled.size===1&&(g.body.style.pointerEvents=Id)}},[d,g,r,u]),f.useEffect(()=>()=>{d&&(u.layers.delete(d),u.layersWithOutsidePointerEventsDisabled.delete(d),jd())},[d,u]),f.useEffect(()=>{const T=()=>w({});return document.addEventListener(Ml,T),()=>document.removeEventListener(Ml,T)},[]),f.createElement(Xe.div,L({},c,{ref:v,style:{pointerEvents:k?S?"auto":"none":void 0,...e.style},onFocusCapture:U(e.onFocusCapture,E.onFocusCapture),onBlurCapture:U(e.onBlurCapture,E.onBlurCapture),onPointerDownCapture:U(e.onPointerDownCapture,C.onPointerDownCapture)}))});function _1(e,t=globalThis==null?void 0:globalThis.document){const n=vt(e),r=f.useRef(!1),o=f.useRef(()=>{});return f.useEffect(()=>{const i=a=>{if(a.target&&!r.current){let c=function(){ah(C1,n,l,{discrete:!0})};const l={originalEvent:a};a.pointerType==="touch"?(t.removeEventListener("click",o.current),o.current=c,t.addEventListener("click",o.current,{once:!0})):c()}else t.removeEventListener("click",o.current);r.current=!1},s=window.setTimeout(()=>{t.addEventListener("pointerdown",i)},0);return()=>{window.clearTimeout(s),t.removeEventListener("pointerdown",i),t.removeEventListener("click",o.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}function A1(e,t=globalThis==null?void 0:globalThis.document){const n=vt(e),r=f.useRef(!1);return f.useEffect(()=>{const o=i=>{i.target&&!r.current&&ah(E1,n,{originalEvent:i},{discrete:!1})};return t.addEventListener("focusin",o),()=>t.removeEventListener("focusin",o)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function jd(){const e=new CustomEvent(Ml);document.dispatchEvent(e)}function ah(e,t,n,{discrete:r}){const o=n.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?oh(o,i):o.dispatchEvent(i)}let ga=0;function M1(){f.useEffect(()=>{var e,t;const n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",(e=n[0])!==null&&e!==void 0?e:Ld()),document.body.insertAdjacentElement("beforeend",(t=n[1])!==null&&t!==void 0?t:Ld()),ga++,()=>{ga===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(r=>r.remove()),ga--}},[])}function Ld(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}const va="focusScope.autoFocusOnMount",ya="focusScope.autoFocusOnUnmount",Od={bubbles:!1,cancelable:!0},$1=f.forwardRef((e,t)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:o,onUnmountAutoFocus:i,...s}=e,[a,l]=f.useState(null),c=vt(o),u=vt(i),d=f.useRef(null),m=Fe(t,v=>l(v)),g=f.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;f.useEffect(()=>{if(r){let v=function(y){if(g.paused||!a)return;const k=y.target;a.contains(k)?d.current=k:Lt(d.current,{select:!0})},x=function(y){if(g.paused||!a)return;const k=y.relatedTarget;k!==null&&(a.contains(k)||Lt(d.current,{select:!0}))},h=function(y){if(document.activeElement===document.body)for(const S of y)S.removedNodes.length>0&&Lt(a)};document.addEventListener("focusin",v),document.addEventListener("focusout",x);const p=new MutationObserver(h);return a&&p.observe(a,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",v),document.removeEventListener("focusout",x),p.disconnect()}}},[r,a,g.paused]),f.useEffect(()=>{if(a){Bd.add(g);const v=document.activeElement;if(!a.contains(v)){const h=new CustomEvent(va,Od);a.addEventListener(va,c),a.dispatchEvent(h),h.defaultPrevented||(N1(L1(lh(a)),{select:!0}),document.activeElement===v&&Lt(a))}return()=>{a.removeEventListener(va,c),setTimeout(()=>{const h=new CustomEvent(ya,Od);a.addEventListener(ya,u),a.dispatchEvent(h),h.defaultPrevented||Lt(v??document.body,{select:!0}),a.removeEventListener(ya,u),Bd.remove(g)},0)}}},[a,c,u,g]);const w=f.useCallback(v=>{if(!n&&!r||g.paused)return;const x=v.key==="Tab"&&!v.altKey&&!v.ctrlKey&&!v.metaKey,h=document.activeElement;if(x&&h){const p=v.currentTarget,[y,k]=z1(p);y&&k?!v.shiftKey&&h===k?(v.preventDefault(),n&&Lt(y,{select:!0})):v.shiftKey&&h===y&&(v.preventDefault(),n&&Lt(k,{select:!0})):h===p&&v.preventDefault()}},[n,r,g.paused]);return f.createElement(Xe.div,L({tabIndex:-1},s,{ref:m,onKeyDown:w}))});function N1(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if(Lt(r,{select:t}),document.activeElement!==n)return}function z1(e){const t=lh(e),n=Dd(t,e),r=Dd(t.reverse(),e);return[n,r]}function lh(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const o=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||o?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function Dd(e,t){for(const n of e)if(!R1(n,{upTo:t}))return n}function R1(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function I1(e){return e instanceof HTMLInputElement&&"select"in e}function Lt(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&I1(e)&&t&&e.select()}}const Bd=j1();function j1(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=Fd(e,t),e.unshift(t)},remove(t){var n;e=Fd(e,t),(n=e[0])===null||n===void 0||n.resume()}}}function Fd(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function L1(e){return e.filter(t=>t.tagName!=="A")}const mr=globalThis!=null&&globalThis.document?f.useLayoutEffect:()=>{},O1=$f.useId||(()=>{});let D1=0;function $l(e){const[t,n]=f.useState(O1());return mr(()=>{e||n(r=>r??String(D1++))},[e]),e||(t?`radix-${t}`:"")}const B1=["top","right","bottom","left"],nn=Math.min,je=Math.max,us=Math.round,li=Math.floor,rn=e=>({x:e,y:e}),F1={left:"right",right:"left",bottom:"top",top:"bottom"},W1={start:"end",end:"start"};function Nl(e,t,n){return je(e,nn(t,n))}function At(e,t){return typeof e=="function"?e(t):e}function Mt(e){return e.split("-")[0]}function Sr(e){return e.split("-")[1]}function Hc(e){return e==="x"?"y":"x"}function Gc(e){return e==="y"?"height":"width"}function Cr(e){return["top","bottom"].includes(Mt(e))?"y":"x"}function Qc(e){return Hc(Cr(e))}function V1(e,t,n){n===void 0&&(n=!1);const r=Sr(e),o=Qc(e),i=Gc(o);let s=o==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[i]>t.floating[i]&&(s=ds(s)),[s,ds(s)]}function U1(e){const t=ds(e);return[zl(e),t,zl(t)]}function zl(e){return e.replace(/start|end/g,t=>W1[t])}function H1(e,t,n){const r=["left","right"],o=["right","left"],i=["top","bottom"],s=["bottom","top"];switch(e){case"top":case"bottom":return n?t?o:r:t?r:o;case"left":case"right":return t?i:s;default:return[]}}function G1(e,t,n,r){const o=Sr(e);let i=H1(Mt(e),n==="start",r);return o&&(i=i.map(s=>s+"-"+o),t&&(i=i.concat(i.map(zl)))),i}function ds(e){return e.replace(/left|right|bottom|top/g,t=>F1[t])}function Q1(e){return{top:0,right:0,bottom:0,left:0,...e}}function ch(e){return typeof e!="number"?Q1(e):{top:e,right:e,bottom:e,left:e}}function fs(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function Wd(e,t,n){let{reference:r,floating:o}=e;const i=Cr(t),s=Qc(t),a=Gc(s),l=Mt(t),c=i==="y",u=r.x+r.width/2-o.width/2,d=r.y+r.height/2-o.height/2,m=r[a]/2-o[a]/2;let g;switch(l){case"top":g={x:u,y:r.y-o.height};break;case"bottom":g={x:u,y:r.y+r.height};break;case"right":g={x:r.x+r.width,y:d};break;case"left":g={x:r.x-o.width,y:d};break;default:g={x:r.x,y:r.y}}switch(Sr(t)){case"start":g[s]-=m*(n&&c?-1:1);break;case"end":g[s]+=m*(n&&c?-1:1);break}return g}const K1=async(e,t,n)=>{const{placement:r="bottom",strategy:o="absolute",middleware:i=[],platform:s}=n,a=i.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(t));let c=await s.getElementRects({reference:e,floating:t,strategy:o}),{x:u,y:d}=Wd(c,r,l),m=r,g={},w=0;for(let v=0;v<a.length;v++){const{name:x,fn:h}=a[v],{x:p,y,data:k,reset:S}=await h({x:u,y:d,initialPlacement:r,placement:m,strategy:o,middlewareData:g,rects:c,platform:s,elements:{reference:e,floating:t}});u=p??u,d=y??d,g={...g,[x]:{...g[x],...k}},S&&w<=50&&(w++,typeof S=="object"&&(S.placement&&(m=S.placement),S.rects&&(c=S.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:o}):S.rects),{x:u,y:d}=Wd(c,m,l)),v=-1)}return{x:u,y:d,placement:m,strategy:o,middlewareData:g}};async function xo(e,t){var n;t===void 0&&(t={});const{x:r,y:o,platform:i,rects:s,elements:a,strategy:l}=e,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:m=!1,padding:g=0}=At(t,e),w=ch(g),x=a[m?d==="floating"?"reference":"floating":d],h=fs(await i.getClippingRect({element:(n=await(i.isElement==null?void 0:i.isElement(x)))==null||n?x:x.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(a.floating)),boundary:c,rootBoundary:u,strategy:l})),p=d==="floating"?{...s.floating,x:r,y:o}:s.reference,y=await(i.getOffsetParent==null?void 0:i.getOffsetParent(a.floating)),k=await(i.isElement==null?void 0:i.isElement(y))?await(i.getScale==null?void 0:i.getScale(y))||{x:1,y:1}:{x:1,y:1},S=fs(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:p,offsetParent:y,strategy:l}):p);return{top:(h.top-S.top+w.top)/k.y,bottom:(S.bottom-h.bottom+w.bottom)/k.y,left:(h.left-S.left+w.left)/k.x,right:(S.right-h.right+w.right)/k.x}}const Y1=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:r,placement:o,rects:i,platform:s,elements:a,middlewareData:l}=t,{element:c,padding:u=0}=At(e,t)||{};if(c==null)return{};const d=ch(u),m={x:n,y:r},g=Qc(o),w=Gc(g),v=await s.getDimensions(c),x=g==="y",h=x?"top":"left",p=x?"bottom":"right",y=x?"clientHeight":"clientWidth",k=i.reference[w]+i.reference[g]-m[g]-i.floating[w],S=m[g]-i.reference[g],C=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c));let E=C?C[y]:0;(!E||!await(s.isElement==null?void 0:s.isElement(C)))&&(E=a.floating[y]||i.floating[w]);const T=k/2-S/2,N=E/2-v[w]/2-1,M=nn(d[h],N),D=nn(d[p],N),R=M,q=E-v[w]-D,B=E/2-v[w]/2+T,V=Nl(R,B,q),Y=!l.arrow&&Sr(o)!=null&&B!==V&&i.reference[w]/2-(B<R?M:D)-v[w]/2<0,F=Y?B<R?B-R:B-q:0;return{[g]:m[g]+F,data:{[g]:V,centerOffset:B-V-F,...Y&&{alignmentOffset:F}},reset:Y}}}),q1=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:o,middlewareData:i,rects:s,initialPlacement:a,platform:l,elements:c}=t,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:m,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:w="none",flipAlignment:v=!0,...x}=At(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};const h=Mt(o),p=Mt(a)===a,y=await(l.isRTL==null?void 0:l.isRTL(c.floating)),k=m||(p||!v?[ds(a)]:U1(a));!m&&w!=="none"&&k.push(...G1(a,v,w,y));const S=[a,...k],C=await xo(t,x),E=[];let T=((r=i.flip)==null?void 0:r.overflows)||[];if(u&&E.push(C[h]),d){const R=V1(o,s,y);E.push(C[R[0]],C[R[1]])}if(T=[...T,{placement:o,overflows:E}],!E.every(R=>R<=0)){var N,M;const R=(((N=i.flip)==null?void 0:N.index)||0)+1,q=S[R];if(q)return{data:{index:R,overflows:T},reset:{placement:q}};let B=(M=T.filter(V=>V.overflows[0]<=0).sort((V,Y)=>V.overflows[1]-Y.overflows[1])[0])==null?void 0:M.placement;if(!B)switch(g){case"bestFit":{var D;const V=(D=T.map(Y=>[Y.placement,Y.overflows.filter(F=>F>0).reduce((F,A)=>F+A,0)]).sort((Y,F)=>Y[1]-F[1])[0])==null?void 0:D[0];V&&(B=V);break}case"initialPlacement":B=a;break}if(o!==B)return{reset:{placement:B}}}return{}}}};function Vd(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function Ud(e){return B1.some(t=>e[t]>=0)}const J1=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:n}=t,{strategy:r="referenceHidden",...o}=At(e,t);switch(r){case"referenceHidden":{const i=await xo(t,{...o,elementContext:"reference"}),s=Vd(i,n.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:Ud(s)}}}case"escaped":{const i=await xo(t,{...o,altBoundary:!0}),s=Vd(i,n.floating);return{data:{escapedOffsets:s,escaped:Ud(s)}}}default:return{}}}}};async function X1(e,t){const{placement:n,platform:r,elements:o}=e,i=await(r.isRTL==null?void 0:r.isRTL(o.floating)),s=Mt(n),a=Sr(n),l=Cr(n)==="y",c=["left","top"].includes(s)?-1:1,u=i&&l?-1:1,d=At(t,e);let{mainAxis:m,crossAxis:g,alignmentAxis:w}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return a&&typeof w=="number"&&(g=a==="end"?w*-1:w),l?{x:g*u,y:m*c}:{x:m*c,y:g*u}}const Z1=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var n,r;const{x:o,y:i,placement:s,middlewareData:a}=t,l=await X1(t,e);return s===((n=a.offset)==null?void 0:n.placement)&&(r=a.arrow)!=null&&r.alignmentOffset?{}:{x:o+l.x,y:i+l.y,data:{...l,placement:s}}}}},eb=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:o}=t,{mainAxis:i=!0,crossAxis:s=!1,limiter:a={fn:x=>{let{x:h,y:p}=x;return{x:h,y:p}}},...l}=At(e,t),c={x:n,y:r},u=await xo(t,l),d=Cr(Mt(o)),m=Hc(d);let g=c[m],w=c[d];if(i){const x=m==="y"?"top":"left",h=m==="y"?"bottom":"right",p=g+u[x],y=g-u[h];g=Nl(p,g,y)}if(s){const x=d==="y"?"top":"left",h=d==="y"?"bottom":"right",p=w+u[x],y=w-u[h];w=Nl(p,w,y)}const v=a.fn({...t,[m]:g,[d]:w});return{...v,data:{x:v.x-n,y:v.y-r}}}}},tb=function(e){return e===void 0&&(e={}),{options:e,fn(t){const{x:n,y:r,placement:o,rects:i,middlewareData:s}=t,{offset:a=0,mainAxis:l=!0,crossAxis:c=!0}=At(e,t),u={x:n,y:r},d=Cr(o),m=Hc(d);let g=u[m],w=u[d];const v=At(a,t),x=typeof v=="number"?{mainAxis:v,crossAxis:0}:{mainAxis:0,crossAxis:0,...v};if(l){const y=m==="y"?"height":"width",k=i.reference[m]-i.floating[y]+x.mainAxis,S=i.reference[m]+i.reference[y]-x.mainAxis;g<k?g=k:g>S&&(g=S)}if(c){var h,p;const y=m==="y"?"width":"height",k=["top","left"].includes(Mt(o)),S=i.reference[d]-i.floating[y]+(k&&((h=s.offset)==null?void 0:h[d])||0)+(k?0:x.crossAxis),C=i.reference[d]+i.reference[y]+(k?0:((p=s.offset)==null?void 0:p[d])||0)-(k?x.crossAxis:0);w<S?w=S:w>C&&(w=C)}return{[m]:g,[d]:w}}}},nb=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:n,rects:r,platform:o,elements:i}=t,{apply:s=()=>{},...a}=At(e,t),l=await xo(t,a),c=Mt(n),u=Sr(n),d=Cr(n)==="y",{width:m,height:g}=r.floating;let w,v;c==="top"||c==="bottom"?(w=c,v=u===(await(o.isRTL==null?void 0:o.isRTL(i.floating))?"start":"end")?"left":"right"):(v=c,w=u==="end"?"top":"bottom");const x=g-l[w],h=m-l[v],p=!t.middlewareData.shift;let y=x,k=h;if(d){const C=m-l.left-l.right;k=u||p?nn(h,C):C}else{const C=g-l.top-l.bottom;y=u||p?nn(x,C):C}if(p&&!u){const C=je(l.left,0),E=je(l.right,0),T=je(l.top,0),N=je(l.bottom,0);d?k=m-2*(C!==0||E!==0?C+E:je(l.left,l.right)):y=g-2*(T!==0||N!==0?T+N:je(l.top,l.bottom))}await s({...t,availableWidth:k,availableHeight:y});const S=await o.getDimensions(i.floating);return m!==S.width||g!==S.height?{reset:{rects:!0}}:{}}}};function on(e){return uh(e)?(e.nodeName||"").toLowerCase():"#document"}function De(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function zt(e){var t;return(t=(uh(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function uh(e){return e instanceof Node||e instanceof De(e).Node}function $t(e){return e instanceof Element||e instanceof De(e).Element}function yt(e){return e instanceof HTMLElement||e instanceof De(e).HTMLElement}function Hd(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof De(e).ShadowRoot}function jo(e){const{overflow:t,overflowX:n,overflowY:r,display:o}=Je(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(o)}function rb(e){return["table","td","th"].includes(on(e))}function Kc(e){const t=Yc(),n=Je(e);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(r=>(n.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(n.contain||"").includes(r))}function ob(e){let t=hr(e);for(;yt(t)&&!Ls(t);){if(Kc(t))return t;t=hr(t)}return null}function Yc(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Ls(e){return["html","body","#document"].includes(on(e))}function Je(e){return De(e).getComputedStyle(e)}function Os(e){return $t(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function hr(e){if(on(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Hd(e)&&e.host||zt(e);return Hd(t)?t.host:t}function dh(e){const t=hr(e);return Ls(t)?e.ownerDocument?e.ownerDocument.body:e.body:yt(t)&&jo(t)?t:dh(t)}function ko(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const o=dh(e),i=o===((r=e.ownerDocument)==null?void 0:r.body),s=De(o);return i?t.concat(s,s.visualViewport||[],jo(o)?o:[],s.frameElement&&n?ko(s.frameElement):[]):t.concat(o,ko(o,[],n))}function fh(e){const t=Je(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const o=yt(e),i=o?e.offsetWidth:n,s=o?e.offsetHeight:r,a=us(n)!==i||us(r)!==s;return a&&(n=i,r=s),{width:n,height:r,$:a}}function qc(e){return $t(e)?e:e.contextElement}function er(e){const t=qc(e);if(!yt(t))return rn(1);const n=t.getBoundingClientRect(),{width:r,height:o,$:i}=fh(t);let s=(i?us(n.width):n.width)/r,a=(i?us(n.height):n.height)/o;return(!s||!Number.isFinite(s))&&(s=1),(!a||!Number.isFinite(a))&&(a=1),{x:s,y:a}}const ib=rn(0);function ph(e){const t=De(e);return!Yc()||!t.visualViewport?ib:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function sb(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==De(e)?!1:t}function En(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const o=e.getBoundingClientRect(),i=qc(e);let s=rn(1);t&&(r?$t(r)&&(s=er(r)):s=er(e));const a=sb(i,n,r)?ph(i):rn(0);let l=(o.left+a.x)/s.x,c=(o.top+a.y)/s.y,u=o.width/s.x,d=o.height/s.y;if(i){const m=De(i),g=r&&$t(r)?De(r):r;let w=m,v=w.frameElement;for(;v&&r&&g!==w;){const x=er(v),h=v.getBoundingClientRect(),p=Je(v),y=h.left+(v.clientLeft+parseFloat(p.paddingLeft))*x.x,k=h.top+(v.clientTop+parseFloat(p.paddingTop))*x.y;l*=x.x,c*=x.y,u*=x.x,d*=x.y,l+=y,c+=k,w=De(v),v=w.frameElement}}return fs({width:u,height:d,x:l,y:c})}const ab=[":popover-open",":modal"];function mh(e){return ab.some(t=>{try{return e.matches(t)}catch{return!1}})}function lb(e){let{elements:t,rect:n,offsetParent:r,strategy:o}=e;const i=o==="fixed",s=zt(r),a=t?mh(t.floating):!1;if(r===s||a&&i)return n;let l={scrollLeft:0,scrollTop:0},c=rn(1);const u=rn(0),d=yt(r);if((d||!d&&!i)&&((on(r)!=="body"||jo(s))&&(l=Os(r)),yt(r))){const m=En(r);c=er(r),u.x=m.x+r.clientLeft,u.y=m.y+r.clientTop}return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-l.scrollLeft*c.x+u.x,y:n.y*c.y-l.scrollTop*c.y+u.y}}function cb(e){return Array.from(e.getClientRects())}function hh(e){return En(zt(e)).left+Os(e).scrollLeft}function ub(e){const t=zt(e),n=Os(e),r=e.ownerDocument.body,o=je(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),i=je(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let s=-n.scrollLeft+hh(e);const a=-n.scrollTop;return Je(r).direction==="rtl"&&(s+=je(t.clientWidth,r.clientWidth)-o),{width:o,height:i,x:s,y:a}}function db(e,t){const n=De(e),r=zt(e),o=n.visualViewport;let i=r.clientWidth,s=r.clientHeight,a=0,l=0;if(o){i=o.width,s=o.height;const c=Yc();(!c||c&&t==="fixed")&&(a=o.offsetLeft,l=o.offsetTop)}return{width:i,height:s,x:a,y:l}}function fb(e,t){const n=En(e,!0,t==="fixed"),r=n.top+e.clientTop,o=n.left+e.clientLeft,i=yt(e)?er(e):rn(1),s=e.clientWidth*i.x,a=e.clientHeight*i.y,l=o*i.x,c=r*i.y;return{width:s,height:a,x:l,y:c}}function Gd(e,t,n){let r;if(t==="viewport")r=db(e,n);else if(t==="document")r=ub(zt(e));else if($t(t))r=fb(t,n);else{const o=ph(e);r={...t,x:t.x-o.x,y:t.y-o.y}}return fs(r)}function gh(e,t){const n=hr(e);return n===t||!$t(n)||Ls(n)?!1:Je(n).position==="fixed"||gh(n,t)}function pb(e,t){const n=t.get(e);if(n)return n;let r=ko(e,[],!1).filter(a=>$t(a)&&on(a)!=="body"),o=null;const i=Je(e).position==="fixed";let s=i?hr(e):e;for(;$t(s)&&!Ls(s);){const a=Je(s),l=Kc(s);!l&&a.position==="fixed"&&(o=null),(i?!l&&!o:!l&&a.position==="static"&&!!o&&["absolute","fixed"].includes(o.position)||jo(s)&&!l&&gh(e,s))?r=r.filter(u=>u!==s):o=a,s=hr(s)}return t.set(e,r),r}function mb(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e;const s=[...n==="clippingAncestors"?pb(t,this._c):[].concat(n),r],a=s[0],l=s.reduce((c,u)=>{const d=Gd(t,u,o);return c.top=je(d.top,c.top),c.right=nn(d.right,c.right),c.bottom=nn(d.bottom,c.bottom),c.left=je(d.left,c.left),c},Gd(t,a,o));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function hb(e){const{width:t,height:n}=fh(e);return{width:t,height:n}}function gb(e,t,n){const r=yt(t),o=zt(t),i=n==="fixed",s=En(e,!0,i,t);let a={scrollLeft:0,scrollTop:0};const l=rn(0);if(r||!r&&!i)if((on(t)!=="body"||jo(o))&&(a=Os(t)),r){const d=En(t,!0,i,t);l.x=d.x+t.clientLeft,l.y=d.y+t.clientTop}else o&&(l.x=hh(o));const c=s.left+a.scrollLeft-l.x,u=s.top+a.scrollTop-l.y;return{x:c,y:u,width:s.width,height:s.height}}function Qd(e,t){return!yt(e)||Je(e).position==="fixed"?null:t?t(e):e.offsetParent}function vh(e,t){const n=De(e);if(!yt(e)||mh(e))return n;let r=Qd(e,t);for(;r&&rb(r)&&Je(r).position==="static";)r=Qd(r,t);return r&&(on(r)==="html"||on(r)==="body"&&Je(r).position==="static"&&!Kc(r))?n:r||ob(e)||n}const vb=async function(e){const t=this.getOffsetParent||vh,n=this.getDimensions;return{reference:gb(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,...await n(e.floating)}}};function yb(e){return Je(e).direction==="rtl"}const wb={convertOffsetParentRelativeRectToViewportRelativeRect:lb,getDocumentElement:zt,getClippingRect:mb,getOffsetParent:vh,getElementRects:vb,getClientRects:cb,getDimensions:hb,getScale:er,isElement:$t,isRTL:yb};function bb(e,t){let n=null,r;const o=zt(e);function i(){var a;clearTimeout(r),(a=n)==null||a.disconnect(),n=null}function s(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),i();const{left:c,top:u,width:d,height:m}=e.getBoundingClientRect();if(a||t(),!d||!m)return;const g=li(u),w=li(o.clientWidth-(c+d)),v=li(o.clientHeight-(u+m)),x=li(c),p={rootMargin:-g+"px "+-w+"px "+-v+"px "+-x+"px",threshold:je(0,nn(1,l))||1};let y=!0;function k(S){const C=S[0].intersectionRatio;if(C!==l){if(!y)return s();C?s(!1,C):r=setTimeout(()=>{s(!1,1e-7)},100)}y=!1}try{n=new IntersectionObserver(k,{...p,root:o.ownerDocument})}catch{n=new IntersectionObserver(k,p)}n.observe(e)}return s(!0),i}function xb(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:o=!0,ancestorResize:i=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=r,c=qc(e),u=o||i?[...c?ko(c):[],...ko(t)]:[];u.forEach(h=>{o&&h.addEventListener("scroll",n,{passive:!0}),i&&h.addEventListener("resize",n)});const d=c&&a?bb(c,n):null;let m=-1,g=null;s&&(g=new ResizeObserver(h=>{let[p]=h;p&&p.target===c&&g&&(g.unobserve(t),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var y;(y=g)==null||y.observe(t)})),n()}),c&&!l&&g.observe(c),g.observe(t));let w,v=l?En(e):null;l&&x();function x(){const h=En(e);v&&(h.x!==v.x||h.y!==v.y||h.width!==v.width||h.height!==v.height)&&n(),v=h,w=requestAnimationFrame(x)}return n(),()=>{var h;u.forEach(p=>{o&&p.removeEventListener("scroll",n),i&&p.removeEventListener("resize",n)}),d==null||d(),(h=g)==null||h.disconnect(),g=null,l&&cancelAnimationFrame(w)}}const kb=eb,Sb=q1,Cb=nb,Eb=J1,Kd=Y1,Tb=tb,Pb=(e,t,n)=>{const r=new Map,o={platform:wb,...n},i={...o.platform,_c:r};return K1(e,t,{...o,platform:i})},_b=e=>{function t(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:e,fn(n){const{element:r,padding:o}=typeof e=="function"?e(n):e;return r&&t(r)?r.current!=null?Kd({element:r.current,padding:o}).fn(n):{}:r?Kd({element:r,padding:o}).fn(n):{}}}};var Ai=typeof document<"u"?f.useLayoutEffect:f.useEffect;function ps(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,r,o;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(r=n;r--!==0;)if(!ps(e[r],t[r]))return!1;return!0}if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!{}.hasOwnProperty.call(t,o[r]))return!1;for(r=n;r--!==0;){const i=o[r];if(!(i==="_owner"&&e.$$typeof)&&!ps(e[i],t[i]))return!1}return!0}return e!==e&&t!==t}function yh(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Yd(e,t){const n=yh(e);return Math.round(t*n)/n}function qd(e){const t=f.useRef(e);return Ai(()=>{t.current=e}),t}function Ab(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:r=[],platform:o,elements:{reference:i,floating:s}={},transform:a=!0,whileElementsMounted:l,open:c}=e,[u,d]=f.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[m,g]=f.useState(r);ps(m,r)||g(r);const[w,v]=f.useState(null),[x,h]=f.useState(null),p=f.useCallback(F=>{F!==C.current&&(C.current=F,v(F))},[]),y=f.useCallback(F=>{F!==E.current&&(E.current=F,h(F))},[]),k=i||w,S=s||x,C=f.useRef(null),E=f.useRef(null),T=f.useRef(u),N=l!=null,M=qd(l),D=qd(o),R=f.useCallback(()=>{if(!C.current||!E.current)return;const F={placement:t,strategy:n,middleware:m};D.current&&(F.platform=D.current),Pb(C.current,E.current,F).then(A=>{const P={...A,isPositioned:!0};q.current&&!ps(T.current,P)&&(T.current=P,No.flushSync(()=>{d(P)}))})},[m,t,n,D]);Ai(()=>{c===!1&&T.current.isPositioned&&(T.current.isPositioned=!1,d(F=>({...F,isPositioned:!1})))},[c]);const q=f.useRef(!1);Ai(()=>(q.current=!0,()=>{q.current=!1}),[]),Ai(()=>{if(k&&(C.current=k),S&&(E.current=S),k&&S){if(M.current)return M.current(k,S,R);R()}},[k,S,R,M,N]);const B=f.useMemo(()=>({reference:C,floating:E,setReference:p,setFloating:y}),[p,y]),V=f.useMemo(()=>({reference:k,floating:S}),[k,S]),Y=f.useMemo(()=>{const F={position:n,left:0,top:0};if(!V.floating)return F;const A=Yd(V.floating,u.x),P=Yd(V.floating,u.y);return a?{...F,transform:"translate("+A+"px, "+P+"px)",...yh(V.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:A,top:P}},[n,a,V.floating,u.x,u.y]);return f.useMemo(()=>({...u,update:R,refs:B,elements:V,floatingStyles:Y}),[u,R,B,V,Y])}function Mb(e){const[t,n]=f.useState(void 0);return mr(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(o=>{if(!Array.isArray(o)||!o.length)return;const i=o[0];let s,a;if("borderBoxSize"in i){const l=i.borderBoxSize,c=Array.isArray(l)?l[0]:l;s=c.inlineSize,a=c.blockSize}else s=e.offsetWidth,a=e.offsetHeight;n({width:s,height:a})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else n(void 0)},[e]),t}const wh="Popper",[bh,xh]=Io(wh),[$b,kh]=bh(wh),Nb=e=>{const{__scopePopper:t,children:n}=e,[r,o]=f.useState(null);return f.createElement($b,{scope:t,anchor:r,onAnchorChange:o},n)},zb="PopperAnchor",Rb=f.forwardRef((e,t)=>{const{__scopePopper:n,virtualRef:r,...o}=e,i=kh(zb,n),s=f.useRef(null),a=Fe(t,s);return f.useEffect(()=>{i.onAnchorChange((r==null?void 0:r.current)||s.current)}),r?null:f.createElement(Xe.div,L({},o,{ref:a}))}),Sh="PopperContent",[Ib,A3]=bh(Sh),jb=f.forwardRef((e,t)=>{var n,r,o,i,s,a,l,c;const{__scopePopper:u,side:d="bottom",sideOffset:m=0,align:g="center",alignOffset:w=0,arrowPadding:v=0,avoidCollisions:x=!0,collisionBoundary:h=[],collisionPadding:p=0,sticky:y="partial",hideWhenDetached:k=!1,updatePositionStrategy:S="optimized",onPlaced:C,...E}=e,T=kh(Sh,u),[N,M]=f.useState(null),D=Fe(t,Er=>M(Er)),[R,q]=f.useState(null),B=Mb(R),V=(n=B==null?void 0:B.width)!==null&&n!==void 0?n:0,Y=(r=B==null?void 0:B.height)!==null&&r!==void 0?r:0,F=d+(g!=="center"?"-"+g:""),A=typeof p=="number"?p:{top:0,right:0,bottom:0,left:0,...p},P=Array.isArray(h)?h:[h],z=P.length>0,j={padding:A,boundary:P.filter(Lb),altBoundary:z},{refs:H,floatingStyles:Ne,placement:ze,isPositioned:et,middlewareData:ce}=Ab({strategy:"fixed",placement:F,whileElementsMounted:(...Er)=>xb(...Er,{animationFrame:S==="always"}),elements:{reference:T.anchor},middleware:[Z1({mainAxis:m+Y,alignmentAxis:w}),x&&kb({mainAxis:!0,crossAxis:!1,limiter:y==="partial"?Tb():void 0,...j}),x&&Sb({...j}),Cb({...j,apply:({elements:Er,rects:fu,availableWidth:Dg,availableHeight:Bg})=>{const{width:Fg,height:Wg}=fu.reference,Vo=Er.floating.style;Vo.setProperty("--radix-popper-available-width",`${Dg}px`),Vo.setProperty("--radix-popper-available-height",`${Bg}px`),Vo.setProperty("--radix-popper-anchor-width",`${Fg}px`),Vo.setProperty("--radix-popper-anchor-height",`${Wg}px`)}}),R&&_b({element:R,padding:v}),Ob({arrowWidth:V,arrowHeight:Y}),k&&Eb({strategy:"referenceHidden",...j})]}),[Re,Fo]=Ch(ze),Te=vt(C);mr(()=>{et&&(Te==null||Te())},[et,Te]);const Wo=(o=ce.arrow)===null||o===void 0?void 0:o.x,Ig=(i=ce.arrow)===null||i===void 0?void 0:i.y,jg=((s=ce.arrow)===null||s===void 0?void 0:s.centerOffset)!==0,[Lg,Og]=f.useState();return mr(()=>{N&&Og(window.getComputedStyle(N).zIndex)},[N]),f.createElement("div",{ref:H.setFloating,"data-radix-popper-content-wrapper":"",style:{...Ne,transform:et?Ne.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:Lg,"--radix-popper-transform-origin":[(a=ce.transformOrigin)===null||a===void 0?void 0:a.x,(l=ce.transformOrigin)===null||l===void 0?void 0:l.y].join(" ")},dir:e.dir},f.createElement(Ib,{scope:u,placedSide:Re,onArrowChange:q,arrowX:Wo,arrowY:Ig,shouldHideArrow:jg},f.createElement(Xe.div,L({"data-side":Re,"data-align":Fo},E,{ref:D,style:{...E.style,animation:et?void 0:"none",opacity:(c=ce.hide)!==null&&c!==void 0&&c.referenceHidden?0:void 0}}))))});function Lb(e){return e!==null}const Ob=e=>({name:"transformOrigin",options:e,fn(t){var n,r,o,i,s;const{placement:a,rects:l,middlewareData:c}=t,d=((n=c.arrow)===null||n===void 0?void 0:n.centerOffset)!==0,m=d?0:e.arrowWidth,g=d?0:e.arrowHeight,[w,v]=Ch(a),x={start:"0%",center:"50%",end:"100%"}[v],h=((r=(o=c.arrow)===null||o===void 0?void 0:o.x)!==null&&r!==void 0?r:0)+m/2,p=((i=(s=c.arrow)===null||s===void 0?void 0:s.y)!==null&&i!==void 0?i:0)+g/2;let y="",k="";return w==="bottom"?(y=d?x:`${h}px`,k=`${-g}px`):w==="top"?(y=d?x:`${h}px`,k=`${l.floating.height+g}px`):w==="right"?(y=`${-g}px`,k=d?x:`${p}px`):w==="left"&&(y=`${l.floating.width+g}px`,k=d?x:`${p}px`),{data:{x:y,y:k}}}});function Ch(e){const[t,n="center"]=e.split("-");return[t,n]}const Db=Nb,Bb=Rb,Fb=jb,Wb=f.forwardRef((e,t)=>{var n;const{container:r=globalThis==null||(n=globalThis.document)===null||n===void 0?void 0:n.body,...o}=e;return r?gy.createPortal(f.createElement(Xe.div,L({},o,{ref:t})),r):null});function Vb(e,t){return f.useReducer((n,r)=>{const o=t[n][r];return o??n},e)}const Lo=e=>{const{present:t,children:n}=e,r=Ub(t),o=typeof n=="function"?n({present:r.isPresent}):f.Children.only(n),i=Fe(r.ref,o.ref);return typeof n=="function"||r.isPresent?f.cloneElement(o,{ref:i}):null};Lo.displayName="Presence";function Ub(e){const[t,n]=f.useState(),r=f.useRef({}),o=f.useRef(e),i=f.useRef("none"),s=e?"mounted":"unmounted",[a,l]=Vb(s,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return f.useEffect(()=>{const c=ci(r.current);i.current=a==="mounted"?c:"none"},[a]),mr(()=>{const c=r.current,u=o.current;if(u!==e){const m=i.current,g=ci(c);e?l("MOUNT"):g==="none"||(c==null?void 0:c.display)==="none"?l("UNMOUNT"):l(u&&m!==g?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,l]),mr(()=>{if(t){const c=d=>{const g=ci(r.current).includes(d.animationName);d.target===t&&g&&No.flushSync(()=>l("ANIMATION_END"))},u=d=>{d.target===t&&(i.current=ci(r.current))};return t.addEventListener("animationstart",u),t.addEventListener("animationcancel",c),t.addEventListener("animationend",c),()=>{t.removeEventListener("animationstart",u),t.removeEventListener("animationcancel",c),t.removeEventListener("animationend",c)}}else l("ANIMATION_END")},[t,l]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:f.useCallback(c=>{c&&(r.current=getComputedStyle(c)),n(c)},[])}}function ci(e){return(e==null?void 0:e.animationName)||"none"}const wa="rovingFocusGroup.onEntryFocus",Hb={bubbles:!1,cancelable:!0},Jc="RovingFocusGroup",[Rl,Eh,Gb]=ih(Jc),[Qb,Th]=Io(Jc,[Gb]),[Kb,Yb]=Qb(Jc),qb=f.forwardRef((e,t)=>f.createElement(Rl.Provider,{scope:e.__scopeRovingFocusGroup},f.createElement(Rl.Slot,{scope:e.__scopeRovingFocusGroup},f.createElement(Jb,L({},e,{ref:t}))))),Jb=f.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:n,orientation:r,loop:o=!1,dir:i,currentTabStopId:s,defaultCurrentTabStopId:a,onCurrentTabStopIdChange:l,onEntryFocus:c,...u}=e,d=f.useRef(null),m=Fe(t,d),g=sh(i),[w=null,v]=rh({prop:s,defaultProp:a,onChange:l}),[x,h]=f.useState(!1),p=vt(c),y=Eh(n),k=f.useRef(!1),[S,C]=f.useState(0);return f.useEffect(()=>{const E=d.current;if(E)return E.addEventListener(wa,p),()=>E.removeEventListener(wa,p)},[p]),f.createElement(Kb,{scope:n,orientation:r,dir:g,loop:o,currentTabStopId:w,onItemFocus:f.useCallback(E=>v(E),[v]),onItemShiftTab:f.useCallback(()=>h(!0),[]),onFocusableItemAdd:f.useCallback(()=>C(E=>E+1),[]),onFocusableItemRemove:f.useCallback(()=>C(E=>E-1),[])},f.createElement(Xe.div,L({tabIndex:x||S===0?-1:0,"data-orientation":r},u,{ref:m,style:{outline:"none",...e.style},onMouseDown:U(e.onMouseDown,()=>{k.current=!0}),onFocus:U(e.onFocus,E=>{const T=!k.current;if(E.target===E.currentTarget&&T&&!x){const N=new CustomEvent(wa,Hb);if(E.currentTarget.dispatchEvent(N),!N.defaultPrevented){const M=y().filter(V=>V.focusable),D=M.find(V=>V.active),R=M.find(V=>V.id===w),B=[D,R,...M].filter(Boolean).map(V=>V.ref.current);Ph(B)}}k.current=!1}),onBlur:U(e.onBlur,()=>h(!1))})))}),Xb="RovingFocusGroupItem",Zb=f.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:n,focusable:r=!0,active:o=!1,tabStopId:i,...s}=e,a=$l(),l=i||a,c=Yb(Xb,n),u=c.currentTabStopId===l,d=Eh(n),{onFocusableItemAdd:m,onFocusableItemRemove:g}=c;return f.useEffect(()=>{if(r)return m(),()=>g()},[r,m,g]),f.createElement(Rl.ItemSlot,{scope:n,id:l,focusable:r,active:o},f.createElement(Xe.span,L({tabIndex:u?0:-1,"data-orientation":c.orientation},s,{ref:t,onMouseDown:U(e.onMouseDown,w=>{r?c.onItemFocus(l):w.preventDefault()}),onFocus:U(e.onFocus,()=>c.onItemFocus(l)),onKeyDown:U(e.onKeyDown,w=>{if(w.key==="Tab"&&w.shiftKey){c.onItemShiftTab();return}if(w.target!==w.currentTarget)return;const v=nx(w,c.orientation,c.dir);if(v!==void 0){w.preventDefault();let h=d().filter(p=>p.focusable).map(p=>p.ref.current);if(v==="last")h.reverse();else if(v==="prev"||v==="next"){v==="prev"&&h.reverse();const p=h.indexOf(w.currentTarget);h=c.loop?rx(h,p+1):h.slice(p+1)}setTimeout(()=>Ph(h))}})})))}),ex={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function tx(e,t){return t!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function nx(e,t,n){const r=tx(e.key,n);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(r))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(r)))return ex[r]}function Ph(e){const t=document.activeElement;for(const n of e)if(n===t||(n.focus(),document.activeElement!==t))return}function rx(e,t){return e.map((n,r)=>e[(t+r)%e.length])}const ox=qb,ix=Zb;var sx=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},Nn=new WeakMap,ui=new WeakMap,di={},ba=0,_h=function(e){return e&&(e.host||_h(e.parentNode))},ax=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=_h(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},lx=function(e,t,n,r){var o=ax(t,Array.isArray(e)?e:[e]);di[n]||(di[n]=new WeakMap);var i=di[n],s=[],a=new Set,l=new Set(o),c=function(d){!d||a.has(d)||(a.add(d),c(d.parentNode))};o.forEach(c);var u=function(d){!d||l.has(d)||Array.prototype.forEach.call(d.children,function(m){if(a.has(m))u(m);else{var g=m.getAttribute(r),w=g!==null&&g!=="false",v=(Nn.get(m)||0)+1,x=(i.get(m)||0)+1;Nn.set(m,v),i.set(m,x),s.push(m),v===1&&w&&ui.set(m,!0),x===1&&m.setAttribute(n,"true"),w||m.setAttribute(r,"true")}})};return u(t),a.clear(),ba++,function(){s.forEach(function(d){var m=Nn.get(d)-1,g=i.get(d)-1;Nn.set(d,m),i.set(d,g),m||(ui.has(d)||d.removeAttribute(r),ui.delete(d)),g||d.removeAttribute(n)}),ba--,ba||(Nn=new WeakMap,Nn=new WeakMap,ui=new WeakMap,di={})}},cx=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=t||sx(e);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),lx(r,o,n,"aria-hidden")):function(){return null}},mt=function(){return mt=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},mt.apply(this,arguments)};function Ah(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function ux(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var Mi="right-scroll-bar-position",$i="width-before-scroll-bar",dx="with-scroll-bars-hidden",fx="--removed-body-scroll-bar-size";function xa(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function px(e,t){var n=f.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var o=n.value;o!==r&&(n.value=r,n.callback(r,o))}}}})[0];return n.callback=t,n.facade}var Jd=new WeakMap;function mx(e,t){var n=px(t||null,function(r){return e.forEach(function(o){return xa(o,r)})});return f.useLayoutEffect(function(){var r=Jd.get(n);if(r){var o=new Set(r),i=new Set(e),s=n.current;o.forEach(function(a){i.has(a)||xa(a,null)}),i.forEach(function(a){o.has(a)||xa(a,s)})}Jd.set(n,e)},[e]),n}function hx(e){return e}function gx(e,t){t===void 0&&(t=hx);var n=[],r=!1,o={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(i){var s=t(i,r);return n.push(s),function(){n=n.filter(function(a){return a!==s})}},assignSyncMedium:function(i){for(r=!0;n.length;){var s=n;n=[],s.forEach(i)}n={push:function(a){return i(a)},filter:function(){return n}}},assignMedium:function(i){r=!0;var s=[];if(n.length){var a=n;n=[],a.forEach(i),s=n}var l=function(){var u=s;s=[],u.forEach(i)},c=function(){return Promise.resolve().then(l)};c(),n={push:function(u){s.push(u),c()},filter:function(u){return s=s.filter(u),n}}}};return o}function vx(e){e===void 0&&(e={});var t=gx(null);return t.options=mt({async:!0,ssr:!1},e),t}var Mh=function(e){var t=e.sideCar,n=Ah(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return f.createElement(r,mt({},n))};Mh.isSideCarExport=!0;function yx(e,t){return e.useMedium(t),Mh}var $h=vx(),ka=function(){},Ds=f.forwardRef(function(e,t){var n=f.useRef(null),r=f.useState({onScrollCapture:ka,onWheelCapture:ka,onTouchMoveCapture:ka}),o=r[0],i=r[1],s=e.forwardProps,a=e.children,l=e.className,c=e.removeScrollBar,u=e.enabled,d=e.shards,m=e.sideCar,g=e.noIsolation,w=e.inert,v=e.allowPinchZoom,x=e.as,h=x===void 0?"div":x,p=Ah(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),y=m,k=mx([n,t]),S=mt(mt({},p),o);return f.createElement(f.Fragment,null,u&&f.createElement(y,{sideCar:$h,removeScrollBar:c,shards:d,noIsolation:g,inert:w,setCallbacks:i,allowPinchZoom:!!v,lockRef:n}),s?f.cloneElement(f.Children.only(a),mt(mt({},S),{ref:k})):f.createElement(h,mt({},S,{className:l,ref:k}),a))});Ds.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};Ds.classNames={fullWidth:$i,zeroRight:Mi};var wx=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function bx(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=wx();return t&&e.setAttribute("nonce",t),e}function xx(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function kx(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var Sx=function(){var e=0,t=null;return{add:function(n){e==0&&(t=bx())&&(xx(t,n),kx(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},Cx=function(){var e=Sx();return function(t,n){f.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},Nh=function(){var e=Cx(),t=function(n){var r=n.styles,o=n.dynamic;return e(r,o),null};return t},Ex={left:0,top:0,right:0,gap:0},Sa=function(e){return parseInt(e||"",10)||0},Tx=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],o=t[e==="padding"?"paddingRight":"marginRight"];return[Sa(n),Sa(r),Sa(o)]},Px=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return Ex;var t=Tx(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},_x=Nh(),ms="data-scroll-locked",Ax=function(e,t,n,r){var o=e.left,i=e.top,s=e.right,a=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(dx,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(a,"px ").concat(r,`;
  }
  body[`).concat(ms,`] {
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
  
  .`).concat(Mi,` {
    right: `).concat(a,"px ").concat(r,`;
  }
  
  .`).concat($i,` {
    margin-right: `).concat(a,"px ").concat(r,`;
  }
  
  .`).concat(Mi," .").concat(Mi,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat($i," .").concat($i,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(ms,`] {
    `).concat(fx,": ").concat(a,`px;
  }
`)},Mx=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=r===void 0?"margin":r,i=f.useMemo(function(){return Px(o)},[o]);return f.useEffect(function(){return document.body.setAttribute(ms,""),function(){document.body.removeAttribute(ms)}},[]),f.createElement(_x,{styles:Ax(i,!t,o,n?"":"!important")})},Il=!1;if(typeof window<"u")try{var fi=Object.defineProperty({},"passive",{get:function(){return Il=!0,!0}});window.addEventListener("test",fi,fi),window.removeEventListener("test",fi,fi)}catch{Il=!1}var zn=Il?{passive:!1}:!1,$x=function(e){return e.tagName==="TEXTAREA"},zh=function(e,t){var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!$x(e)&&n[t]==="visible")},Nx=function(e){return zh(e,"overflowY")},zx=function(e){return zh(e,"overflowX")},Xd=function(e,t){var n=t;do{typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&(n=n.host);var r=Rh(e,n);if(r){var o=Ih(e,n),i=o[1],s=o[2];if(i>s)return!0}n=n.parentNode}while(n&&n!==document.body);return!1},Rx=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},Ix=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},Rh=function(e,t){return e==="v"?Nx(t):zx(t)},Ih=function(e,t){return e==="v"?Rx(t):Ix(t)},jx=function(e,t){return e==="h"&&t==="rtl"?-1:1},Lx=function(e,t,n,r,o){var i=jx(e,window.getComputedStyle(t).direction),s=i*r,a=n.target,l=t.contains(a),c=!1,u=s>0,d=0,m=0;do{var g=Ih(e,a),w=g[0],v=g[1],x=g[2],h=v-x-i*w;(w||h)&&Rh(e,a)&&(d+=h,m+=w),a=a.parentNode}while(!l&&a!==document.body||l&&(t.contains(a)||t===a));return(u&&(o&&d===0||!o&&s>d)||!u&&(o&&m===0||!o&&-s>m))&&(c=!0),c},pi=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},Zd=function(e){return[e.deltaX,e.deltaY]},ef=function(e){return e&&"current"in e?e.current:e},Ox=function(e,t){return e[0]===t[0]&&e[1]===t[1]},Dx=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},Bx=0,Rn=[];function Fx(e){var t=f.useRef([]),n=f.useRef([0,0]),r=f.useRef(),o=f.useState(Bx++)[0],i=f.useState(function(){return Nh()})[0],s=f.useRef(e);f.useEffect(function(){s.current=e},[e]),f.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var v=ux([e.lockRef.current],(e.shards||[]).map(ef),!0).filter(Boolean);return v.forEach(function(x){return x.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),v.forEach(function(x){return x.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var a=f.useCallback(function(v,x){if("touches"in v&&v.touches.length===2)return!s.current.allowPinchZoom;var h=pi(v),p=n.current,y="deltaX"in v?v.deltaX:p[0]-h[0],k="deltaY"in v?v.deltaY:p[1]-h[1],S,C=v.target,E=Math.abs(y)>Math.abs(k)?"h":"v";if("touches"in v&&E==="h"&&C.type==="range")return!1;var T=Xd(E,C);if(!T)return!0;if(T?S=E:(S=E==="v"?"h":"v",T=Xd(E,C)),!T)return!1;if(!r.current&&"changedTouches"in v&&(y||k)&&(r.current=S),!S)return!0;var N=r.current||S;return Lx(N,x,v,N==="h"?y:k,!0)},[]),l=f.useCallback(function(v){var x=v;if(!(!Rn.length||Rn[Rn.length-1]!==i)){var h="deltaY"in x?Zd(x):pi(x),p=t.current.filter(function(S){return S.name===x.type&&S.target===x.target&&Ox(S.delta,h)})[0];if(p&&p.should){x.cancelable&&x.preventDefault();return}if(!p){var y=(s.current.shards||[]).map(ef).filter(Boolean).filter(function(S){return S.contains(x.target)}),k=y.length>0?a(x,y[0]):!s.current.noIsolation;k&&x.cancelable&&x.preventDefault()}}},[]),c=f.useCallback(function(v,x,h,p){var y={name:v,delta:x,target:h,should:p};t.current.push(y),setTimeout(function(){t.current=t.current.filter(function(k){return k!==y})},1)},[]),u=f.useCallback(function(v){n.current=pi(v),r.current=void 0},[]),d=f.useCallback(function(v){c(v.type,Zd(v),v.target,a(v,e.lockRef.current))},[]),m=f.useCallback(function(v){c(v.type,pi(v),v.target,a(v,e.lockRef.current))},[]);f.useEffect(function(){return Rn.push(i),e.setCallbacks({onScrollCapture:d,onWheelCapture:d,onTouchMoveCapture:m}),document.addEventListener("wheel",l,zn),document.addEventListener("touchmove",l,zn),document.addEventListener("touchstart",u,zn),function(){Rn=Rn.filter(function(v){return v!==i}),document.removeEventListener("wheel",l,zn),document.removeEventListener("touchmove",l,zn),document.removeEventListener("touchstart",u,zn)}},[]);var g=e.removeScrollBar,w=e.inert;return f.createElement(f.Fragment,null,w?f.createElement(i,{styles:Dx(o)}):null,g?f.createElement(Mx,{gapMode:"margin"}):null)}const Wx=yx($h,Fx);var jh=f.forwardRef(function(e,t){return f.createElement(Ds,mt({},e,{ref:t,sideCar:Wx}))});jh.classNames=Ds.classNames;const Vx=jh,jl=["Enter"," "],Ux=["ArrowDown","PageUp","Home"],Lh=["ArrowUp","PageDown","End"],Hx=[...Ux,...Lh],Gx={ltr:[...jl,"ArrowRight"],rtl:[...jl,"ArrowLeft"]},Qx={ltr:["ArrowLeft"],rtl:["ArrowRight"]},Bs="Menu",[So,Kx,Yx]=ih(Bs),[An,Oh]=Io(Bs,[Yx,xh,Th]),Xc=xh(),Dh=Th(),[qx,Mn]=An(Bs),[Jx,Oo]=An(Bs),Xx=e=>{const{__scopeMenu:t,open:n=!1,children:r,dir:o,onOpenChange:i,modal:s=!0}=e,a=Xc(t),[l,c]=f.useState(null),u=f.useRef(!1),d=vt(i),m=sh(o);return f.useEffect(()=>{const g=()=>{u.current=!0,document.addEventListener("pointerdown",w,{capture:!0,once:!0}),document.addEventListener("pointermove",w,{capture:!0,once:!0})},w=()=>u.current=!1;return document.addEventListener("keydown",g,{capture:!0}),()=>{document.removeEventListener("keydown",g,{capture:!0}),document.removeEventListener("pointerdown",w,{capture:!0}),document.removeEventListener("pointermove",w,{capture:!0})}},[]),f.createElement(Db,a,f.createElement(qx,{scope:t,open:n,onOpenChange:d,content:l,onContentChange:c},f.createElement(Jx,{scope:t,onClose:f.useCallback(()=>d(!1),[d]),isUsingKeyboardRef:u,dir:m,modal:s},r)))},Bh=f.forwardRef((e,t)=>{const{__scopeMenu:n,...r}=e,o=Xc(n);return f.createElement(Bb,L({},o,r,{ref:t}))}),Fh="MenuPortal",[Zx,Wh]=An(Fh,{forceMount:void 0}),e2=e=>{const{__scopeMenu:t,forceMount:n,children:r,container:o}=e,i=Mn(Fh,t);return f.createElement(Zx,{scope:t,forceMount:n},f.createElement(Lo,{present:n||i.open},f.createElement(Wb,{asChild:!0,container:o},r)))},ct="MenuContent",[t2,Zc]=An(ct),n2=f.forwardRef((e,t)=>{const n=Wh(ct,e.__scopeMenu),{forceMount:r=n.forceMount,...o}=e,i=Mn(ct,e.__scopeMenu),s=Oo(ct,e.__scopeMenu);return f.createElement(So.Provider,{scope:e.__scopeMenu},f.createElement(Lo,{present:r||i.open},f.createElement(So.Slot,{scope:e.__scopeMenu},s.modal?f.createElement(r2,L({},o,{ref:t})):f.createElement(o2,L({},o,{ref:t})))))}),r2=f.forwardRef((e,t)=>{const n=Mn(ct,e.__scopeMenu),r=f.useRef(null),o=Fe(t,r);return f.useEffect(()=>{const i=r.current;if(i)return cx(i)},[]),f.createElement(eu,L({},e,{ref:o,trapFocus:n.open,disableOutsidePointerEvents:n.open,disableOutsideScroll:!0,onFocusOutside:U(e.onFocusOutside,i=>i.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>n.onOpenChange(!1)}))}),o2=f.forwardRef((e,t)=>{const n=Mn(ct,e.__scopeMenu);return f.createElement(eu,L({},e,{ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>n.onOpenChange(!1)}))}),eu=f.forwardRef((e,t)=>{const{__scopeMenu:n,loop:r=!1,trapFocus:o,onOpenAutoFocus:i,onCloseAutoFocus:s,disableOutsidePointerEvents:a,onEntryFocus:l,onEscapeKeyDown:c,onPointerDownOutside:u,onFocusOutside:d,onInteractOutside:m,onDismiss:g,disableOutsideScroll:w,...v}=e,x=Mn(ct,n),h=Oo(ct,n),p=Xc(n),y=Dh(n),k=Kx(n),[S,C]=f.useState(null),E=f.useRef(null),T=Fe(t,E,x.onContentChange),N=f.useRef(0),M=f.useRef(""),D=f.useRef(0),R=f.useRef(null),q=f.useRef("right"),B=f.useRef(0),V=w?Vx:f.Fragment,Y=w?{as:pr,allowPinchZoom:!0}:void 0,F=P=>{var z,j;const H=M.current+P,Ne=k().filter(Te=>!Te.disabled),ze=document.activeElement,et=(z=Ne.find(Te=>Te.ref.current===ze))===null||z===void 0?void 0:z.textValue,ce=Ne.map(Te=>Te.textValue),Re=b2(ce,H,et),Fo=(j=Ne.find(Te=>Te.textValue===Re))===null||j===void 0?void 0:j.ref.current;(function Te(Wo){M.current=Wo,window.clearTimeout(N.current),Wo!==""&&(N.current=window.setTimeout(()=>Te(""),1e3))})(H),Fo&&setTimeout(()=>Fo.focus())};f.useEffect(()=>()=>window.clearTimeout(N.current),[]),M1();const A=f.useCallback(P=>{var z,j;return q.current===((z=R.current)===null||z===void 0?void 0:z.side)&&k2(P,(j=R.current)===null||j===void 0?void 0:j.area)},[]);return f.createElement(t2,{scope:n,searchRef:M,onItemEnter:f.useCallback(P=>{A(P)&&P.preventDefault()},[A]),onItemLeave:f.useCallback(P=>{var z;A(P)||((z=E.current)===null||z===void 0||z.focus(),C(null))},[A]),onTriggerLeave:f.useCallback(P=>{A(P)&&P.preventDefault()},[A]),pointerGraceTimerRef:D,onPointerGraceIntentChange:f.useCallback(P=>{R.current=P},[])},f.createElement(V,Y,f.createElement($1,{asChild:!0,trapped:o,onMountAutoFocus:U(i,P=>{var z;P.preventDefault(),(z=E.current)===null||z===void 0||z.focus()}),onUnmountAutoFocus:s},f.createElement(P1,{asChild:!0,disableOutsidePointerEvents:a,onEscapeKeyDown:c,onPointerDownOutside:u,onFocusOutside:d,onInteractOutside:m,onDismiss:g},f.createElement(ox,L({asChild:!0},y,{dir:h.dir,orientation:"vertical",loop:r,currentTabStopId:S,onCurrentTabStopIdChange:C,onEntryFocus:U(l,P=>{h.isUsingKeyboardRef.current||P.preventDefault()})}),f.createElement(Fb,L({role:"menu","aria-orientation":"vertical","data-state":Qh(x.open),"data-radix-menu-content":"",dir:h.dir},p,v,{ref:T,style:{outline:"none",...v.style},onKeyDown:U(v.onKeyDown,P=>{const j=P.target.closest("[data-radix-menu-content]")===P.currentTarget,H=P.ctrlKey||P.altKey||P.metaKey,Ne=P.key.length===1;j&&(P.key==="Tab"&&P.preventDefault(),!H&&Ne&&F(P.key));const ze=E.current;if(P.target!==ze||!Hx.includes(P.key))return;P.preventDefault();const ce=k().filter(Re=>!Re.disabled).map(Re=>Re.ref.current);Lh.includes(P.key)&&ce.reverse(),y2(ce)}),onBlur:U(e.onBlur,P=>{P.currentTarget.contains(P.target)||(window.clearTimeout(N.current),M.current="")}),onPointerMove:U(e.onPointerMove,Co(P=>{const z=P.target,j=B.current!==P.clientX;if(P.currentTarget.contains(z)&&j){const H=P.clientX>B.current?"right":"left";q.current=H,B.current=P.clientX}}))})))))))}),i2=f.forwardRef((e,t)=>{const{__scopeMenu:n,...r}=e;return f.createElement(Xe.div,L({},r,{ref:t}))}),Ll="MenuItem",tf="menu.itemSelect",tu=f.forwardRef((e,t)=>{const{disabled:n=!1,onSelect:r,...o}=e,i=f.useRef(null),s=Oo(Ll,e.__scopeMenu),a=Zc(Ll,e.__scopeMenu),l=Fe(t,i),c=f.useRef(!1),u=()=>{const d=i.current;if(!n&&d){const m=new CustomEvent(tf,{bubbles:!0,cancelable:!0});d.addEventListener(tf,g=>r==null?void 0:r(g),{once:!0}),oh(d,m),m.defaultPrevented?c.current=!1:s.onClose()}};return f.createElement(Vh,L({},o,{ref:l,disabled:n,onClick:U(e.onClick,u),onPointerDown:d=>{var m;(m=e.onPointerDown)===null||m===void 0||m.call(e,d),c.current=!0},onPointerUp:U(e.onPointerUp,d=>{var m;c.current||(m=d.currentTarget)===null||m===void 0||m.click()}),onKeyDown:U(e.onKeyDown,d=>{const m=a.searchRef.current!=="";n||m&&d.key===" "||jl.includes(d.key)&&(d.currentTarget.click(),d.preventDefault())})}))}),Vh=f.forwardRef((e,t)=>{const{__scopeMenu:n,disabled:r=!1,textValue:o,...i}=e,s=Zc(Ll,n),a=Dh(n),l=f.useRef(null),c=Fe(t,l),[u,d]=f.useState(!1),[m,g]=f.useState("");return f.useEffect(()=>{const w=l.current;if(w){var v;g(((v=w.textContent)!==null&&v!==void 0?v:"").trim())}},[i.children]),f.createElement(So.ItemSlot,{scope:n,disabled:r,textValue:o??m},f.createElement(ix,L({asChild:!0},a,{focusable:!r}),f.createElement(Xe.div,L({role:"menuitem","data-highlighted":u?"":void 0,"aria-disabled":r||void 0,"data-disabled":r?"":void 0},i,{ref:c,onPointerMove:U(e.onPointerMove,Co(w=>{r?s.onItemLeave(w):(s.onItemEnter(w),w.defaultPrevented||w.currentTarget.focus())})),onPointerLeave:U(e.onPointerLeave,Co(w=>s.onItemLeave(w))),onFocus:U(e.onFocus,()=>d(!0)),onBlur:U(e.onBlur,()=>d(!1))}))))}),s2=f.forwardRef((e,t)=>{const{checked:n=!1,onCheckedChange:r,...o}=e;return f.createElement(Hh,{scope:e.__scopeMenu,checked:n},f.createElement(tu,L({role:"menuitemcheckbox","aria-checked":hs(n)?"mixed":n},o,{ref:t,"data-state":nu(n),onSelect:U(o.onSelect,()=>r==null?void 0:r(hs(n)?!0:!n),{checkForDefaultPrevented:!1})})))}),a2="MenuRadioGroup",[M3,l2]=An(a2,{value:void 0,onValueChange:()=>{}}),c2="MenuRadioItem",u2=f.forwardRef((e,t)=>{const{value:n,...r}=e,o=l2(c2,e.__scopeMenu),i=n===o.value;return f.createElement(Hh,{scope:e.__scopeMenu,checked:i},f.createElement(tu,L({role:"menuitemradio","aria-checked":i},r,{ref:t,"data-state":nu(i),onSelect:U(r.onSelect,()=>{var s;return(s=o.onValueChange)===null||s===void 0?void 0:s.call(o,n)},{checkForDefaultPrevented:!1})})))}),Uh="MenuItemIndicator",[Hh,d2]=An(Uh,{checked:!1}),f2=f.forwardRef((e,t)=>{const{__scopeMenu:n,forceMount:r,...o}=e,i=d2(Uh,n);return f.createElement(Lo,{present:r||hs(i.checked)||i.checked===!0},f.createElement(Xe.span,L({},o,{ref:t,"data-state":nu(i.checked)})))}),p2=f.forwardRef((e,t)=>{const{__scopeMenu:n,...r}=e;return f.createElement(Xe.div,L({role:"separator","aria-orientation":"horizontal"},r,{ref:t}))}),m2="MenuSub",[$3,Gh]=An(m2),mi="MenuSubTrigger",h2=f.forwardRef((e,t)=>{const n=Mn(mi,e.__scopeMenu),r=Oo(mi,e.__scopeMenu),o=Gh(mi,e.__scopeMenu),i=Zc(mi,e.__scopeMenu),s=f.useRef(null),{pointerGraceTimerRef:a,onPointerGraceIntentChange:l}=i,c={__scopeMenu:e.__scopeMenu},u=f.useCallback(()=>{s.current&&window.clearTimeout(s.current),s.current=null},[]);return f.useEffect(()=>u,[u]),f.useEffect(()=>{const d=a.current;return()=>{window.clearTimeout(d),l(null)}},[a,l]),f.createElement(Bh,L({asChild:!0},c),f.createElement(Vh,L({id:o.triggerId,"aria-haspopup":"menu","aria-expanded":n.open,"aria-controls":o.contentId,"data-state":Qh(n.open)},e,{ref:js(t,o.onTriggerChange),onClick:d=>{var m;(m=e.onClick)===null||m===void 0||m.call(e,d),!(e.disabled||d.defaultPrevented)&&(d.currentTarget.focus(),n.open||n.onOpenChange(!0))},onPointerMove:U(e.onPointerMove,Co(d=>{i.onItemEnter(d),!d.defaultPrevented&&!e.disabled&&!n.open&&!s.current&&(i.onPointerGraceIntentChange(null),s.current=window.setTimeout(()=>{n.onOpenChange(!0),u()},100))})),onPointerLeave:U(e.onPointerLeave,Co(d=>{var m;u();const g=(m=n.content)===null||m===void 0?void 0:m.getBoundingClientRect();if(g){var w;const v=(w=n.content)===null||w===void 0?void 0:w.dataset.side,x=v==="right",h=x?-5:5,p=g[x?"left":"right"],y=g[x?"right":"left"];i.onPointerGraceIntentChange({area:[{x:d.clientX+h,y:d.clientY},{x:p,y:g.top},{x:y,y:g.top},{x:y,y:g.bottom},{x:p,y:g.bottom}],side:v}),window.clearTimeout(a.current),a.current=window.setTimeout(()=>i.onPointerGraceIntentChange(null),300)}else{if(i.onTriggerLeave(d),d.defaultPrevented)return;i.onPointerGraceIntentChange(null)}})),onKeyDown:U(e.onKeyDown,d=>{const m=i.searchRef.current!=="";if(!(e.disabled||m&&d.key===" ")&&Gx[r.dir].includes(d.key)){var g;n.onOpenChange(!0),(g=n.content)===null||g===void 0||g.focus(),d.preventDefault()}})})))}),g2="MenuSubContent",v2=f.forwardRef((e,t)=>{const n=Wh(ct,e.__scopeMenu),{forceMount:r=n.forceMount,...o}=e,i=Mn(ct,e.__scopeMenu),s=Oo(ct,e.__scopeMenu),a=Gh(g2,e.__scopeMenu),l=f.useRef(null),c=Fe(t,l);return f.createElement(So.Provider,{scope:e.__scopeMenu},f.createElement(Lo,{present:r||i.open},f.createElement(So.Slot,{scope:e.__scopeMenu},f.createElement(eu,L({id:a.contentId,"aria-labelledby":a.triggerId},o,{ref:c,align:"start",side:s.dir==="rtl"?"left":"right",disableOutsidePointerEvents:!1,disableOutsideScroll:!1,trapFocus:!1,onOpenAutoFocus:u=>{var d;s.isUsingKeyboardRef.current&&((d=l.current)===null||d===void 0||d.focus()),u.preventDefault()},onCloseAutoFocus:u=>u.preventDefault(),onFocusOutside:U(e.onFocusOutside,u=>{u.target!==a.trigger&&i.onOpenChange(!1)}),onEscapeKeyDown:U(e.onEscapeKeyDown,u=>{s.onClose(),u.preventDefault()}),onKeyDown:U(e.onKeyDown,u=>{const d=u.currentTarget.contains(u.target),m=Qx[s.dir].includes(u.key);if(d&&m){var g;i.onOpenChange(!1),(g=a.trigger)===null||g===void 0||g.focus(),u.preventDefault()}})})))))});function Qh(e){return e?"open":"closed"}function hs(e){return e==="indeterminate"}function nu(e){return hs(e)?"indeterminate":e?"checked":"unchecked"}function y2(e){const t=document.activeElement;for(const n of e)if(n===t||(n.focus(),document.activeElement!==t))return}function w2(e,t){return e.map((n,r)=>e[(t+r)%e.length])}function b2(e,t,n){const o=t.length>1&&Array.from(t).every(c=>c===t[0])?t[0]:t,i=n?e.indexOf(n):-1;let s=w2(e,Math.max(i,0));o.length===1&&(s=s.filter(c=>c!==n));const l=s.find(c=>c.toLowerCase().startsWith(o.toLowerCase()));return l!==n?l:void 0}function x2(e,t){const{x:n,y:r}=e;let o=!1;for(let i=0,s=t.length-1;i<t.length;s=i++){const a=t[i].x,l=t[i].y,c=t[s].x,u=t[s].y;l>r!=u>r&&n<(c-a)*(r-l)/(u-l)+a&&(o=!o)}return o}function k2(e,t){if(!t)return!1;const n={x:e.clientX,y:e.clientY};return x2(n,t)}function Co(e){return t=>t.pointerType==="mouse"?e(t):void 0}const S2=Xx,C2=Bh,E2=e2,T2=n2,P2=i2,_2=tu,A2=s2,M2=u2,$2=f2,N2=p2,z2=h2,R2=v2,Kh="DropdownMenu",[I2,N3]=Io(Kh,[Oh]),Ze=Oh(),[j2,Yh]=I2(Kh),L2=e=>{const{__scopeDropdownMenu:t,children:n,dir:r,open:o,defaultOpen:i,onOpenChange:s,modal:a=!0}=e,l=Ze(t),c=f.useRef(null),[u=!1,d]=rh({prop:o,defaultProp:i,onChange:s});return f.createElement(j2,{scope:t,triggerId:$l(),triggerRef:c,contentId:$l(),open:u,onOpenChange:d,onOpenToggle:f.useCallback(()=>d(m=>!m),[d]),modal:a},f.createElement(S2,L({},l,{open:u,onOpenChange:d,dir:r,modal:a}),n))},O2="DropdownMenuTrigger",D2=f.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,disabled:r=!1,...o}=e,i=Yh(O2,n),s=Ze(n);return f.createElement(C2,L({asChild:!0},s),f.createElement(Xe.button,L({type:"button",id:i.triggerId,"aria-haspopup":"menu","aria-expanded":i.open,"aria-controls":i.open?i.contentId:void 0,"data-state":i.open?"open":"closed","data-disabled":r?"":void 0,disabled:r},o,{ref:js(t,i.triggerRef),onPointerDown:U(e.onPointerDown,a=>{!r&&a.button===0&&a.ctrlKey===!1&&(i.onOpenToggle(),i.open||a.preventDefault())}),onKeyDown:U(e.onKeyDown,a=>{r||(["Enter"," "].includes(a.key)&&i.onOpenToggle(),a.key==="ArrowDown"&&i.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(a.key)&&a.preventDefault())})})))}),B2=e=>{const{__scopeDropdownMenu:t,...n}=e,r=Ze(t);return f.createElement(E2,L({},r,n))},F2="DropdownMenuContent",W2=f.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,o=Yh(F2,n),i=Ze(n),s=f.useRef(!1);return f.createElement(T2,L({id:o.contentId,"aria-labelledby":o.triggerId},i,r,{ref:t,onCloseAutoFocus:U(e.onCloseAutoFocus,a=>{var l;s.current||(l=o.triggerRef.current)===null||l===void 0||l.focus(),s.current=!1,a.preventDefault()}),onInteractOutside:U(e.onInteractOutside,a=>{const l=a.detail.originalEvent,c=l.button===0&&l.ctrlKey===!0,u=l.button===2||c;(!o.modal||u)&&(s.current=!0)}),style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}}))}),V2=f.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,o=Ze(n);return f.createElement(P2,L({},o,r,{ref:t}))}),U2=f.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,o=Ze(n);return f.createElement(_2,L({},o,r,{ref:t}))}),H2=f.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,o=Ze(n);return f.createElement(A2,L({},o,r,{ref:t}))}),G2=f.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,o=Ze(n);return f.createElement(M2,L({},o,r,{ref:t}))}),Q2=f.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,o=Ze(n);return f.createElement($2,L({},o,r,{ref:t}))}),K2=f.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,o=Ze(n);return f.createElement(N2,L({},o,r,{ref:t}))}),Y2=f.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,o=Ze(n);return f.createElement(z2,L({},o,r,{ref:t}))}),q2=f.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,o=Ze(n);return f.createElement(R2,L({},o,r,{ref:t,style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}}))}),J2=L2,X2=D2,Z2=B2,qh=W2,Jh=V2,Xh=U2,Zh=H2,eg=G2,tg=Q2,ng=K2,rg=Y2,og=q2,ek=J2,tk=X2,nk=f.forwardRef(({className:e,inset:t,children:n,...r},o)=>b.jsxs(rg,{ref:o,className:ae("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",t&&"pl-8",e),...r,children:[n,b.jsx(xw,{className:"ml-auto h-4 w-4"})]}));nk.displayName=rg.displayName;const rk=f.forwardRef(({className:e,...t},n)=>b.jsx(og,{ref:n,className:ae("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...t}));rk.displayName=og.displayName;const ig=f.forwardRef(({className:e,sideOffset:t=4,...n},r)=>b.jsx(Z2,{children:b.jsx(qh,{ref:r,sideOffset:t,className:ae("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...n})}));ig.displayName=qh.displayName;const Ni=f.forwardRef(({className:e,inset:t,...n},r)=>b.jsx(Xh,{ref:r,className:ae("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",t&&"pl-8",e),...n}));Ni.displayName=Xh.displayName;const ok=f.forwardRef(({className:e,children:t,checked:n,...r},o)=>b.jsxs(Zh,{ref:o,className:ae("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),checked:n,...r,children:[b.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:b.jsx(tg,{children:b.jsx(bw,{className:"h-4 w-4"})})}),t]}));ok.displayName=Zh.displayName;const ik=f.forwardRef(({className:e,children:t,...n},r)=>b.jsxs(eg,{ref:r,className:ae("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),...n,children:[b.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:b.jsx(tg,{children:b.jsx(kw,{className:"h-2 w-2 fill-current"})})}),t]}));ik.displayName=eg.displayName;const sk=f.forwardRef(({className:e,inset:t,...n},r)=>b.jsx(Jh,{ref:r,className:ae("px-2 py-1.5 text-sm font-semibold",t&&"pl-8",e),...n}));sk.displayName=Jh.displayName;const ak=f.forwardRef(({className:e,...t},n)=>b.jsx(ng,{ref:n,className:ae("-mx-1 my-1 h-px bg-muted",e),...t}));ak.displayName=ng.displayName;const lk={theme:"system",setTheme:()=>null},sg=f.createContext(lk);function ck({children:e,defaultTheme:t="system",storageKey:n="color-scheme",...r}){const[o,i]=f.useState(()=>localStorage.getItem(n)||t);f.useEffect(()=>{const a=window.document.documentElement;if(a.classList.remove("light","dark"),o==="system"){const l=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";a.classList.add(l);return}a.classList.add(o)},[o]);const s={theme:o,setTheme:a=>{localStorage.setItem(n,a),i(a)}};return b.jsx(sg.Provider,{...r,value:s,children:e})}const uk=()=>{const e=f.useContext(sg);if(e===void 0)throw new Error("useTheme must be used within a ThemeProvider");return e};function dk(){const{setTheme:e}=uk();return b.jsxs(ek,{children:[b.jsx(tk,{asChild:!0,children:b.jsxs(nh,{variant:"outline",size:"icon",children:[b.jsx(Cw,{className:"h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"}),b.jsx(Sw,{className:"absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"}),b.jsx("span",{className:"sr-only",children:"Toggle theme"})]})}),b.jsxs(ig,{align:"end",children:[b.jsx(Ni,{onClick:()=>e("light"),children:"Light"}),b.jsx(Ni,{onClick:()=>e("dark"),children:"Dark"}),b.jsx(Ni,{onClick:()=>e("system"),children:"System"})]})]})}const fk=()=>{const e=({isActive:t})=>["p-4 flex items-center justify-start mw-full hover:text-sky-500 dark:hover:text-sky-400",t?"text-link-dark dark:text-link-dark":""].join(" ");return b.jsx("header",{className:"border-b border-gray-200 dark:border-gray-800 pr-3",children:b.jsxs("div",{className:"flex flex-wrap items-center",children:[b.jsx("div",{className:"absolute z-10 top-2 left-2 sm:static flex-shrink flex-grow-0",children:b.jsx("div",{className:"cursor-pointer",children:b.jsxs(Vc,{to:"/",className:"navbar-brand flex items-center",children:[b.jsx(vw,{className:"w-8 h-8 sm:ml-2 sm:w-12 sm:h-12",title:"MyApp logo"}),b.jsx("span",{className:"hidden ml-2 sm:block text-2xl font-semibold",children:"My App"})]})})}),b.jsx("div",{className:"flex flex-grow flex-shrink flex-nowrap justify-end items-center",children:b.jsx("nav",{className:"relative flex flex-grow leading-6 font-semibold text-slate-700 dark:text-slate-200",children:b.jsxs("ul",{className:"flex flex-wrap items-center justify-end w-full m-0",children:[b.jsx("li",{className:"relative flex flex-wrap just-fu-start m-0",children:b.jsx(gn,{to:"/counter",className:e,children:"Counter"})}),b.jsx("li",{className:"relative flex flex-wrap just-fu-start m-0",children:b.jsx(gn,{to:"/whatsnew",className:e,children:"What's New"})}),b.jsx("li",{className:"relative flex flex-wrap just-fu-start m-0",children:b.jsx(gn,{to:"/blog",className:e,children:"Blog"})}),b.jsx("li",{className:"relative flex flex-wrap just-fu-start m-0",children:b.jsx(gn,{to:"/videos",className:e,children:"Videos"})}),b.jsx("li",{className:"relative flex flex-wrap just-fu-start m-0",children:b.jsx(dk,{})})]})})})]})})},pk=()=>{const e=({isActive:t})=>["text-sm leading-6 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50",t?"font-bold":""].join(" ");return b.jsxs("footer",{className:"bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800",children:[b.jsxs("nav",{className:"pt-8 columns-2 sm:flex sm:justify-center sm:space-x-12","aria-label":"Footer",children:[b.jsx("div",{className:"pb-6",children:b.jsx(gn,{to:"/about",className:e,children:"About"})}),b.jsx("div",{className:"pb-6",children:b.jsx(gn,{to:"/posts",className:e,children:"Archive"})}),b.jsx("div",{className:"pb-6",children:b.jsx(gn,{to:"/privacy",className:e,children:"Privacy"})})]}),b.jsx("div",{className:"container mx-auto px-5",children:b.jsxs("div",{className:"py-28 flex flex-col lg:flex-row items-center",children:[b.jsx("h3",{className:"text-4xl lg:text-6xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2",children:"A ServiceStack Project"}),b.jsxs("div",{className:"flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2",children:[b.jsx("a",{href:"https://docs.servicestack.net",className:"mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0",children:"Read Documentation"}),b.jsx("a",{href:"https://github.com/ServiceStack/press-vue",className:"mx-3 font-bold hover:underline",children:"View on GitHub"})]})]})})]})};var mk=typeof Element<"u",hk=typeof Map=="function",gk=typeof Set=="function",vk=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function zi(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var n,r,o;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(!zi(e[r],t[r]))return!1;return!0}var i;if(hk&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(i=e.entries();!(r=i.next()).done;)if(!t.has(r.value[0]))return!1;for(i=e.entries();!(r=i.next()).done;)if(!zi(r.value[1],t.get(r.value[0])))return!1;return!0}if(gk&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(i=e.entries();!(r=i.next()).done;)if(!t.has(r.value[0]))return!1;return!0}if(vk&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(e[r]!==t[r])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,o[r]))return!1;if(mk&&e instanceof Element)return!1;for(r=n;r--!==0;)if(!((o[r]==="_owner"||o[r]==="__v"||o[r]==="__o")&&e.$$typeof)&&!zi(e[o[r]],t[o[r]]))return!1;return!0}return e!==e&&t!==t}var yk=function(t,n){try{return zi(t,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const wk=gr(yk);var bk=function(e,t,n,r,o,i,s,a){if(!e){var l;if(t===void 0)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,o,i,s,a],u=0;l=new Error(t.replace(/%s/g,function(){return c[u++]})),l.name="Invariant Violation"}throw l.framesToPop=1,l}},xk=bk;const nf=gr(xk);var kk=function(t,n,r,o){var i=r?r.call(o,t,n):void 0;if(i!==void 0)return!!i;if(t===n)return!0;if(typeof t!="object"||!t||typeof n!="object"||!n)return!1;var s=Object.keys(t),a=Object.keys(n);if(s.length!==a.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(n),c=0;c<s.length;c++){var u=s[c];if(!l(u))return!1;var d=t[u],m=n[u];if(i=r?r.call(o,d,m,u):void 0,i===!1||i===void 0&&d!==m)return!1}return!0};const Sk=gr(kk);var ag=(e=>(e.BASE="base",e.BODY="body",e.HEAD="head",e.HTML="html",e.LINK="link",e.META="meta",e.NOSCRIPT="noscript",e.SCRIPT="script",e.STYLE="style",e.TITLE="title",e.FRAGMENT="Symbol(react.fragment)",e))(ag||{}),Ca={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},rf=Object.values(ag),ru={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},Ck=Object.entries(ru).reduce((e,[t,n])=>(e[n]=t,e),{}),st="data-rh",tr={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},nr=(e,t)=>{for(let n=e.length-1;n>=0;n-=1){const r=e[n];if(Object.prototype.hasOwnProperty.call(r,t))return r[t]}return null},Ek=e=>{let t=nr(e,"title");const n=nr(e,tr.TITLE_TEMPLATE);if(Array.isArray(t)&&(t=t.join("")),n&&t)return n.replace(/%s/g,()=>t);const r=nr(e,tr.DEFAULT_TITLE);return t||r||void 0},Tk=e=>nr(e,tr.ON_CHANGE_CLIENT_STATE)||(()=>{}),Ea=(e,t)=>t.filter(n=>typeof n[e]<"u").map(n=>n[e]).reduce((n,r)=>({...n,...r}),{}),Pk=(e,t)=>t.filter(n=>typeof n.base<"u").map(n=>n.base).reverse().reduce((n,r)=>{if(!n.length){const o=Object.keys(r);for(let i=0;i<o.length;i+=1){const a=o[i].toLowerCase();if(e.indexOf(a)!==-1&&r[a])return n.concat(r)}}return n},[]),_k=e=>console&&typeof console.warn=="function"&&console.warn(e),jr=(e,t,n)=>{const r={};return n.filter(o=>Array.isArray(o[e])?!0:(typeof o[e]<"u"&&_k(`Helmet: ${e} should be of type "Array". Instead found type "${typeof o[e]}"`),!1)).map(o=>o[e]).reverse().reduce((o,i)=>{const s={};i.filter(l=>{let c;const u=Object.keys(l);for(let m=0;m<u.length;m+=1){const g=u[m],w=g.toLowerCase();t.indexOf(w)!==-1&&!(c==="rel"&&l[c].toLowerCase()==="canonical")&&!(w==="rel"&&l[w].toLowerCase()==="stylesheet")&&(c=w),t.indexOf(g)!==-1&&(g==="innerHTML"||g==="cssText"||g==="itemprop")&&(c=g)}if(!c||!l[c])return!1;const d=l[c].toLowerCase();return r[c]||(r[c]={}),s[c]||(s[c]={}),r[c][d]?!1:(s[c][d]=!0,!0)}).reverse().forEach(l=>o.push(l));const a=Object.keys(s);for(let l=0;l<a.length;l+=1){const c=a[l],u={...r[c],...s[c]};r[c]=u}return o},[]).reverse()},Ak=(e,t)=>{if(Array.isArray(e)&&e.length){for(let n=0;n<e.length;n+=1)if(e[n][t])return!0}return!1},Mk=e=>({baseTag:Pk(["href"],e),bodyAttributes:Ea("bodyAttributes",e),defer:nr(e,tr.DEFER),encode:nr(e,tr.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:Ea("htmlAttributes",e),linkTags:jr("link",["rel","href"],e),metaTags:jr("meta",["name","charset","http-equiv","property","itemprop"],e),noscriptTags:jr("noscript",["innerHTML"],e),onChangeClientState:Tk(e),scriptTags:jr("script",["src","innerHTML"],e),styleTags:jr("style",["cssText"],e),title:Ek(e),titleAttributes:Ea("titleAttributes",e),prioritizeSeoTags:Ak(e,tr.PRIORITIZE_SEO_TAGS)}),lg=e=>Array.isArray(e)?e.join(""):e,$k=(e,t)=>{const n=Object.keys(e);for(let r=0;r<n.length;r+=1)if(t[n[r]]&&t[n[r]].includes(e[n[r]]))return!0;return!1},Ta=(e,t)=>Array.isArray(e)?e.reduce((n,r)=>($k(r,t)?n.priority.push(r):n.default.push(r),n),{priority:[],default:[]}):{default:e,priority:[]},of=(e,t)=>({...e,[t]:void 0}),Nk=["noscript","script","style"],Ol=(e,t=!0)=>t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),cg=e=>Object.keys(e).reduce((t,n)=>{const r=typeof e[n]<"u"?`${n}="${e[n]}"`:`${n}`;return t?`${t} ${r}`:r},""),zk=(e,t,n,r)=>{const o=cg(n),i=lg(t);return o?`<${e} ${st}="true" ${o}>${Ol(i,r)}</${e}>`:`<${e} ${st}="true">${Ol(i,r)}</${e}>`},Rk=(e,t,n=!0)=>t.reduce((r,o)=>{const i=o,s=Object.keys(i).filter(c=>!(c==="innerHTML"||c==="cssText")).reduce((c,u)=>{const d=typeof i[u]>"u"?u:`${u}="${Ol(i[u],n)}"`;return c?`${c} ${d}`:d},""),a=i.innerHTML||i.cssText||"",l=Nk.indexOf(e)===-1;return`${r}<${e} ${st}="true" ${s}${l?"/>":`>${a}</${e}>`}`},""),ug=(e,t={})=>Object.keys(e).reduce((n,r)=>{const o=ru[r];return n[o||r]=e[r],n},t),Ik=(e,t,n)=>{const r={key:t,[st]:!0},o=ug(n,r);return[I.createElement("title",o,t)]},Ri=(e,t)=>t.map((n,r)=>{const o={key:r,[st]:!0};return Object.keys(n).forEach(i=>{const a=ru[i]||i;if(a==="innerHTML"||a==="cssText"){const l=n.innerHTML||n.cssText;o.dangerouslySetInnerHTML={__html:l}}else o[a]=n[i]}),I.createElement(e,o)}),Ue=(e,t,n=!0)=>{switch(e){case"title":return{toComponent:()=>Ik(e,t.title,t.titleAttributes),toString:()=>zk(e,t.title,t.titleAttributes,n)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>ug(t),toString:()=>cg(t)};default:return{toComponent:()=>Ri(e,t),toString:()=>Rk(e,t,n)}}},jk=({metaTags:e,linkTags:t,scriptTags:n,encode:r})=>{const o=Ta(e,Ca.meta),i=Ta(t,Ca.link),s=Ta(n,Ca.script);return{priorityMethods:{toComponent:()=>[...Ri("meta",o.priority),...Ri("link",i.priority),...Ri("script",s.priority)],toString:()=>`${Ue("meta",o.priority,r)} ${Ue("link",i.priority,r)} ${Ue("script",s.priority,r)}`},metaTags:o.default,linkTags:i.default,scriptTags:s.default}},Lk=e=>{const{baseTag:t,bodyAttributes:n,encode:r=!0,htmlAttributes:o,noscriptTags:i,styleTags:s,title:a="",titleAttributes:l,prioritizeSeoTags:c}=e;let{linkTags:u,metaTags:d,scriptTags:m}=e,g={toComponent:()=>{},toString:()=>""};return c&&({priorityMethods:g,linkTags:u,metaTags:d,scriptTags:m}=jk(e)),{priority:g,base:Ue("base",t,r),bodyAttributes:Ue("bodyAttributes",n,r),htmlAttributes:Ue("htmlAttributes",o,r),link:Ue("link",u,r),meta:Ue("meta",d,r),noscript:Ue("noscript",i,r),script:Ue("script",m,r),style:Ue("style",s,r),title:Ue("title",{title:a,titleAttributes:l},r)}},Dl=Lk,hi=[],dg=!!(typeof window<"u"&&window.document&&window.document.createElement),Bl=class{constructor(e,t){tt(this,"instances",[]);tt(this,"canUseDOM",dg);tt(this,"context");tt(this,"value",{setHelmet:e=>{this.context.helmet=e},helmetInstances:{get:()=>this.canUseDOM?hi:this.instances,add:e=>{(this.canUseDOM?hi:this.instances).push(e)},remove:e=>{const t=(this.canUseDOM?hi:this.instances).indexOf(e);(this.canUseDOM?hi:this.instances).splice(t,1)}}});this.context=e,this.canUseDOM=t||!1,t||(e.helmet=Dl({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},Ok={},fg=I.createContext(Ok),or,ou=(or=class extends f.Component{constructor(n){super(n);tt(this,"helmetData");this.helmetData=new Bl(this.props.context||{},or.canUseDOM)}render(){return I.createElement(fg.Provider,{value:this.helmetData.value},this.props.children)}},tt(or,"canUseDOM",dg),or),In=(e,t)=>{const n=document.head||document.querySelector("head"),r=n.querySelectorAll(`${e}[${st}]`),o=[].slice.call(r),i=[];let s;return t&&t.length&&t.forEach(a=>{const l=document.createElement(e);for(const c in a)if(Object.prototype.hasOwnProperty.call(a,c))if(c==="innerHTML")l.innerHTML=a.innerHTML;else if(c==="cssText")l.styleSheet?l.styleSheet.cssText=a.cssText:l.appendChild(document.createTextNode(a.cssText));else{const u=c,d=typeof a[u]>"u"?"":a[u];l.setAttribute(c,d)}l.setAttribute(st,"true"),o.some((c,u)=>(s=u,l.isEqualNode(c)))?o.splice(s,1):i.push(l)}),o.forEach(a=>{var l;return(l=a.parentNode)==null?void 0:l.removeChild(a)}),i.forEach(a=>n.appendChild(a)),{oldTags:o,newTags:i}},Fl=(e,t)=>{const n=document.getElementsByTagName(e)[0];if(!n)return;const r=n.getAttribute(st),o=r?r.split(","):[],i=[...o],s=Object.keys(t);for(const a of s){const l=t[a]||"";n.getAttribute(a)!==l&&n.setAttribute(a,l),o.indexOf(a)===-1&&o.push(a);const c=i.indexOf(a);c!==-1&&i.splice(c,1)}for(let a=i.length-1;a>=0;a-=1)n.removeAttribute(i[a]);o.length===i.length?n.removeAttribute(st):n.getAttribute(st)!==s.join(",")&&n.setAttribute(st,s.join(","))},Dk=(e,t)=>{typeof e<"u"&&document.title!==e&&(document.title=lg(e)),Fl("title",t)},sf=(e,t)=>{const{baseTag:n,bodyAttributes:r,htmlAttributes:o,linkTags:i,metaTags:s,noscriptTags:a,onChangeClientState:l,scriptTags:c,styleTags:u,title:d,titleAttributes:m}=e;Fl("body",r),Fl("html",o),Dk(d,m);const g={baseTag:In("base",n),linkTags:In("link",i),metaTags:In("meta",s),noscriptTags:In("noscript",a),scriptTags:In("script",c),styleTags:In("style",u)},w={},v={};Object.keys(g).forEach(x=>{const{newTags:h,oldTags:p}=g[x];h.length&&(w[x]=h),p.length&&(v[x]=g[x].oldTags)}),t&&t(),l(e,w,v)},Lr=null,Bk=e=>{Lr&&cancelAnimationFrame(Lr),e.defer?Lr=requestAnimationFrame(()=>{sf(e,()=>{Lr=null})}):(sf(e),Lr=null)},Fk=Bk,af=class extends f.Component{constructor(){super(...arguments);tt(this,"rendered",!1)}shouldComponentUpdate(t){return!Sk(t,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:t}=this.props.context;t.remove(this),this.emitChange()}emitChange(){const{helmetInstances:t,setHelmet:n}=this.props.context;let r=null;const o=Mk(t.get().map(i=>{const s={...i.props};return delete s.context,s}));ou.canUseDOM?Fk(o):Dl&&(r=Dl(o)),n(r)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:t}=this.props.context;t.add(this),this.emitChange()}render(){return this.init(),null}},Ma,pg=(Ma=class extends f.Component{shouldComponentUpdate(e){return!wk(of(this.props,"helmetData"),of(e,"helmetData"))}mapNestedChildrenToProps(e,t){if(!t)return null;switch(e.type){case"script":case"noscript":return{innerHTML:t};case"style":return{cssText:t};default:throw new Error(`<${e.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(e,t,n,r){return{...t,[e.type]:[...t[e.type]||[],{...n,...this.mapNestedChildrenToProps(e,r)}]}}mapObjectTypeChildren(e,t,n,r){switch(e.type){case"title":return{...t,[e.type]:r,titleAttributes:{...n}};case"body":return{...t,bodyAttributes:{...n}};case"html":return{...t,htmlAttributes:{...n}};default:return{...t,[e.type]:{...n}}}}mapArrayTypeChildrenToProps(e,t){let n={...t};return Object.keys(e).forEach(r=>{n={...n,[r]:e[r]}}),n}warnOnInvalidChildren(e,t){return nf(rf.some(n=>e.type===n),typeof e.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${rf.join(", ")} are allowed. Helmet does not support rendering <${e.type}> elements. Refer to our API for more information.`),nf(!t||typeof t=="string"||Array.isArray(t)&&!t.some(n=>typeof n!="string"),`Helmet expects a string as a child of <${e.type}>. Did you forget to wrap your children in braces? ( <${e.type}>{\`\`}</${e.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(e,t){let n={};return I.Children.forEach(e,r=>{if(!r||!r.props)return;const{children:o,...i}=r.props,s=Object.keys(i).reduce((l,c)=>(l[Ck[c]||c]=i[c],l),{});let{type:a}=r;switch(typeof a=="symbol"?a=a.toString():this.warnOnInvalidChildren(r,o),a){case"Symbol(react.fragment)":t=this.mapChildrenToProps(o,t);break;case"link":case"meta":case"noscript":case"script":case"style":n=this.flattenArrayTypeChildren(r,n,s,o);break;default:t=this.mapObjectTypeChildren(r,t,s,o);break}}),this.mapArrayTypeChildrenToProps(n,t)}render(){const{children:e,...t}=this.props;let n={...t},{helmetData:r}=t;if(e&&(n=this.mapChildrenToProps(e,n)),r&&!(r instanceof Bl)){const o=r;r=new Bl(o.context,!0),delete n.helmetData}return r?I.createElement(af,{...n,context:r.value}):I.createElement(fg.Consumer,null,o=>I.createElement(af,{...n,context:o}))}},tt(Ma,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),Ma);const Wk=()=>b.jsx(ou,{children:b.jsxs(pg,{children:[b.jsx("meta",{name:"description",content:"Vite + React SPA"}),b.jsx("meta",{property:"og:image",content:"/img/logo.svg"})]})}),mg=({title:e,children:t})=>b.jsxs(b.Fragment,{children:[e?b.jsx(ou,{children:b.jsx(pg,{children:b.jsx("title",{children:e})})}):null,b.jsx(Wk,{}),b.jsx(fk,{}),b.jsx("div",{className:"min-h-screen",children:b.jsx("main",{role:"main",children:b.jsx("main",{children:t})})}),b.jsx(pk,{})]}),Zr=/^[a-z0-9]+(-[a-z0-9]+)*$/,Fs=(e,t,n,r="")=>{const o=e.split(":");if(e.slice(0,1)==="@"){if(o.length<2||o.length>3)return null;r=o.shift().slice(1)}if(o.length>3||!o.length)return null;if(o.length>1){const a=o.pop(),l=o.pop(),c={provider:o.length>0?o[0]:r,prefix:l,name:a};return t&&!Ii(c)?null:c}const i=o[0],s=i.split("-");if(s.length>1){const a={provider:r,prefix:s.shift(),name:s.join("-")};return t&&!Ii(a)?null:a}if(n&&r===""){const a={provider:r,prefix:"",name:i};return t&&!Ii(a,n)?null:a}return null},Ii=(e,t)=>e?!!((e.provider===""||e.provider.match(Zr))&&(t&&e.prefix===""||e.prefix.match(Zr))&&e.name.match(Zr)):!1,hg=Object.freeze({left:0,top:0,width:16,height:16}),gs=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),iu=Object.freeze({...hg,...gs}),Wl=Object.freeze({...iu,body:"",hidden:!1});function Vk(e,t){const n={};!e.hFlip!=!t.hFlip&&(n.hFlip=!0),!e.vFlip!=!t.vFlip&&(n.vFlip=!0);const r=((e.rotate||0)+(t.rotate||0))%4;return r&&(n.rotate=r),n}function lf(e,t){const n=Vk(e,t);for(const r in Wl)r in gs?r in e&&!(r in n)&&(n[r]=gs[r]):r in t?n[r]=t[r]:r in e&&(n[r]=e[r]);return n}function Uk(e,t){const n=e.icons,r=e.aliases||Object.create(null),o=Object.create(null);function i(s){if(n[s])return o[s]=[];if(!(s in o)){o[s]=null;const a=r[s]&&r[s].parent,l=a&&i(a);l&&(o[s]=[a].concat(l))}return o[s]}return(t||Object.keys(n).concat(Object.keys(r))).forEach(i),o}function Hk(e,t,n){const r=e.icons,o=e.aliases||Object.create(null);let i={};function s(a){i=lf(r[a]||o[a],i)}return s(t),n.forEach(s),lf(e,i)}function gg(e,t){const n=[];if(typeof e!="object"||typeof e.icons!="object")return n;e.not_found instanceof Array&&e.not_found.forEach(o=>{t(o,null),n.push(o)});const r=Uk(e);for(const o in r){const i=r[o];i&&(t(o,Hk(e,o,i)),n.push(o))}return n}const Gk={provider:"",aliases:{},not_found:{},...hg};function Pa(e,t){for(const n in t)if(n in e&&typeof e[n]!=typeof t[n])return!1;return!0}function vg(e){if(typeof e!="object"||e===null)return null;const t=e;if(typeof t.prefix!="string"||!e.icons||typeof e.icons!="object"||!Pa(e,Gk))return null;const n=t.icons;for(const o in n){const i=n[o];if(!o.match(Zr)||typeof i.body!="string"||!Pa(i,Wl))return null}const r=t.aliases||Object.create(null);for(const o in r){const i=r[o],s=i.parent;if(!o.match(Zr)||typeof s!="string"||!n[s]&&!r[s]||!Pa(i,Wl))return null}return t}const cf=Object.create(null);function Qk(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:new Set}}function Tn(e,t){const n=cf[e]||(cf[e]=Object.create(null));return n[t]||(n[t]=Qk(e,t))}function su(e,t){return vg(t)?gg(t,(n,r)=>{r?e.icons[n]=r:e.missing.add(n)}):[]}function Kk(e,t,n){try{if(typeof n.body=="string")return e.icons[t]={...n},!0}catch{}return!1}let Eo=!1;function yg(e){return typeof e=="boolean"&&(Eo=e),Eo}function Yk(e){const t=typeof e=="string"?Fs(e,!0,Eo):e;if(t){const n=Tn(t.provider,t.prefix),r=t.name;return n.icons[r]||(n.missing.has(r)?null:void 0)}}function qk(e,t){const n=Fs(e,!0,Eo);if(!n)return!1;const r=Tn(n.provider,n.prefix);return Kk(r,n.name,t)}function Jk(e,t){if(typeof e!="object")return!1;if(typeof t!="string"&&(t=e.provider||""),Eo&&!t&&!e.prefix){let o=!1;return vg(e)&&(e.prefix="",gg(e,(i,s)=>{s&&qk(i,s)&&(o=!0)})),o}const n=e.prefix;if(!Ii({provider:t,prefix:n,name:"a"}))return!1;const r=Tn(t,n);return!!su(r,e)}const wg=Object.freeze({width:null,height:null}),bg=Object.freeze({...wg,...gs}),Xk=/(-?[0-9.]*[0-9]+[0-9.]*)/g,Zk=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function uf(e,t,n){if(t===1)return e;if(n=n||100,typeof e=="number")return Math.ceil(e*t*n)/n;if(typeof e!="string")return e;const r=e.split(Xk);if(r===null||!r.length)return e;const o=[];let i=r.shift(),s=Zk.test(i);for(;;){if(s){const a=parseFloat(i);isNaN(a)?o.push(i):o.push(Math.ceil(a*t*n)/n)}else o.push(i);if(i=r.shift(),i===void 0)return o.join("");s=!s}}const eS=e=>e==="unset"||e==="undefined"||e==="none";function tS(e,t){const n={...iu,...e},r={...bg,...t},o={left:n.left,top:n.top,width:n.width,height:n.height};let i=n.body;[n,r].forEach(w=>{const v=[],x=w.hFlip,h=w.vFlip;let p=w.rotate;x?h?p+=2:(v.push("translate("+(o.width+o.left).toString()+" "+(0-o.top).toString()+")"),v.push("scale(-1 1)"),o.top=o.left=0):h&&(v.push("translate("+(0-o.left).toString()+" "+(o.height+o.top).toString()+")"),v.push("scale(1 -1)"),o.top=o.left=0);let y;switch(p<0&&(p-=Math.floor(p/4)*4),p=p%4,p){case 1:y=o.height/2+o.top,v.unshift("rotate(90 "+y.toString()+" "+y.toString()+")");break;case 2:v.unshift("rotate(180 "+(o.width/2+o.left).toString()+" "+(o.height/2+o.top).toString()+")");break;case 3:y=o.width/2+o.left,v.unshift("rotate(-90 "+y.toString()+" "+y.toString()+")");break}p%2===1&&(o.left!==o.top&&(y=o.left,o.left=o.top,o.top=y),o.width!==o.height&&(y=o.width,o.width=o.height,o.height=y)),v.length&&(i='<g transform="'+v.join(" ")+'">'+i+"</g>")});const s=r.width,a=r.height,l=o.width,c=o.height;let u,d;s===null?(d=a===null?"1em":a==="auto"?c:a,u=uf(d,l/c)):(u=s==="auto"?l:s,d=a===null?uf(u,c/l):a==="auto"?c:a);const m={},g=(w,v)=>{eS(v)||(m[w]=v.toString())};return g("width",u),g("height",d),m.viewBox=o.left.toString()+" "+o.top.toString()+" "+l.toString()+" "+c.toString(),{attributes:m,body:i}}const nS=/\sid="(\S+)"/g,rS="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let oS=0;function iS(e,t=rS){const n=[];let r;for(;r=nS.exec(e);)n.push(r[1]);if(!n.length)return e;const o="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(i=>{const s=typeof t=="function"?t(i):t+(oS++).toString(),a=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+a+')([")]|\\.[a-z])',"g"),"$1"+s+o+"$3")}),e=e.replace(new RegExp(o,"g"),""),e}const Vl=Object.create(null);function sS(e,t){Vl[e]=t}function Ul(e){return Vl[e]||Vl[""]}function au(e){let t;if(typeof e.resources=="string")t=[e.resources];else if(t=e.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}const lu=Object.create(null),Or=["https://api.simplesvg.com","https://api.unisvg.com"],ji=[];for(;Or.length>0;)Or.length===1||Math.random()>.5?ji.push(Or.shift()):ji.push(Or.pop());lu[""]=au({resources:["https://api.iconify.design"].concat(ji)});function aS(e,t){const n=au(t);return n===null?!1:(lu[e]=n,!0)}function cu(e){return lu[e]}const lS=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}};let df=lS();function cS(e,t){const n=cu(e);if(!n)return 0;let r;if(!n.maxURL)r=0;else{let o=0;n.resources.forEach(s=>{o=Math.max(o,s.length)});const i=t+".json?icons=";r=n.maxURL-o-n.path.length-i.length}return r}function uS(e){return e===404}const dS=(e,t,n)=>{const r=[],o=cS(e,t),i="icons";let s={type:i,provider:e,prefix:t,icons:[]},a=0;return n.forEach((l,c)=>{a+=l.length+1,a>=o&&c>0&&(r.push(s),s={type:i,provider:e,prefix:t,icons:[]},a=l.length),s.icons.push(l)}),r.push(s),r};function fS(e){if(typeof e=="string"){const t=cu(e);if(t)return t.path}return"/"}const pS=(e,t,n)=>{if(!df){n("abort",424);return}let r=fS(t.provider);switch(t.type){case"icons":{const i=t.prefix,a=t.icons.join(","),l=new URLSearchParams({icons:a});r+=i+".json?"+l.toString();break}case"custom":{const i=t.uri;r+=i.slice(0,1)==="/"?i.slice(1):i;break}default:n("abort",400);return}let o=503;df(e+r).then(i=>{const s=i.status;if(s!==200){setTimeout(()=>{n(uS(s)?"abort":"next",s)});return}return o=501,i.json()}).then(i=>{if(typeof i!="object"||i===null){setTimeout(()=>{i===404?n("abort",i):n("next",o)});return}setTimeout(()=>{n("success",i)})}).catch(()=>{n("next",o)})},mS={prepare:dS,send:pS};function hS(e){const t={loaded:[],missing:[],pending:[]},n=Object.create(null);e.sort((o,i)=>o.provider!==i.provider?o.provider.localeCompare(i.provider):o.prefix!==i.prefix?o.prefix.localeCompare(i.prefix):o.name.localeCompare(i.name));let r={provider:"",prefix:"",name:""};return e.forEach(o=>{if(r.name===o.name&&r.prefix===o.prefix&&r.provider===o.provider)return;r=o;const i=o.provider,s=o.prefix,a=o.name,l=n[i]||(n[i]=Object.create(null)),c=l[s]||(l[s]=Tn(i,s));let u;a in c.icons?u=t.loaded:s===""||c.missing.has(a)?u=t.missing:u=t.pending;const d={provider:i,prefix:s,name:a};u.push(d)}),t}function xg(e,t){e.forEach(n=>{const r=n.loaderCallbacks;r&&(n.loaderCallbacks=r.filter(o=>o.id!==t))})}function gS(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;const t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let n=!1;const r=e.provider,o=e.prefix;t.forEach(i=>{const s=i.icons,a=s.pending.length;s.pending=s.pending.filter(l=>{if(l.prefix!==o)return!0;const c=l.name;if(e.icons[c])s.loaded.push({provider:r,prefix:o,name:c});else if(e.missing.has(c))s.missing.push({provider:r,prefix:o,name:c});else return n=!0,!0;return!1}),s.pending.length!==a&&(n||xg([e],i.id),i.callback(s.loaded.slice(0),s.missing.slice(0),s.pending.slice(0),i.abort))})}))}let vS=0;function yS(e,t,n){const r=vS++,o=xg.bind(null,n,r);if(!t.pending.length)return o;const i={id:r,icons:t,callback:e,abort:o};return n.forEach(s=>{(s.loaderCallbacks||(s.loaderCallbacks=[])).push(i)}),o}function wS(e,t=!0,n=!1){const r=[];return e.forEach(o=>{const i=typeof o=="string"?Fs(o,t,n):o;i&&r.push(i)}),r}var bS={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function xS(e,t,n,r){const o=e.resources.length,i=e.random?Math.floor(Math.random()*o):e.index;let s;if(e.random){let C=e.resources.slice(0);for(s=[];C.length>1;){const E=Math.floor(Math.random()*C.length);s.push(C[E]),C=C.slice(0,E).concat(C.slice(E+1))}s=s.concat(C)}else s=e.resources.slice(i).concat(e.resources.slice(0,i));const a=Date.now();let l="pending",c=0,u,d=null,m=[],g=[];typeof r=="function"&&g.push(r);function w(){d&&(clearTimeout(d),d=null)}function v(){l==="pending"&&(l="aborted"),w(),m.forEach(C=>{C.status==="pending"&&(C.status="aborted")}),m=[]}function x(C,E){E&&(g=[]),typeof C=="function"&&g.push(C)}function h(){return{startTime:a,payload:t,status:l,queriesSent:c,queriesPending:m.length,subscribe:x,abort:v}}function p(){l="failed",g.forEach(C=>{C(void 0,u)})}function y(){m.forEach(C=>{C.status==="pending"&&(C.status="aborted")}),m=[]}function k(C,E,T){const N=E!=="success";switch(m=m.filter(M=>M!==C),l){case"pending":break;case"failed":if(N||!e.dataAfterTimeout)return;break;default:return}if(E==="abort"){u=T,p();return}if(N){u=T,m.length||(s.length?S():p());return}if(w(),y(),!e.random){const M=e.resources.indexOf(C.resource);M!==-1&&M!==e.index&&(e.index=M)}l="completed",g.forEach(M=>{M(T)})}function S(){if(l!=="pending")return;w();const C=s.shift();if(C===void 0){if(m.length){d=setTimeout(()=>{w(),l==="pending"&&(y(),p())},e.timeout);return}p();return}const E={status:"pending",resource:C,callback:(T,N)=>{k(E,T,N)}};m.push(E),c++,d=setTimeout(S,e.rotate),n(C,t,E.callback)}return setTimeout(S),h}function kg(e){const t={...bS,...e};let n=[];function r(){n=n.filter(a=>a().status==="pending")}function o(a,l,c){const u=xS(t,a,l,(d,m)=>{r(),c&&c(d,m)});return n.push(u),u}function i(a){return n.find(l=>a(l))||null}return{query:o,find:i,setIndex:a=>{t.index=a},getIndex:()=>t.index,cleanup:r}}function ff(){}const _a=Object.create(null);function kS(e){if(!_a[e]){const t=cu(e);if(!t)return;const n=kg(t),r={config:t,redundancy:n};_a[e]=r}return _a[e]}function SS(e,t,n){let r,o;if(typeof e=="string"){const i=Ul(e);if(!i)return n(void 0,424),ff;o=i.send;const s=kS(e);s&&(r=s.redundancy)}else{const i=au(e);if(i){r=kg(i);const s=e.resources?e.resources[0]:"",a=Ul(s);a&&(o=a.send)}}return!r||!o?(n(void 0,424),ff):r.query(t,o,n)().abort}const pf="iconify2",To="iconify",Sg=To+"-count",mf=To+"-version",Cg=36e5,CS=168;function Hl(e,t){try{return e.getItem(t)}catch{}}function uu(e,t,n){try{return e.setItem(t,n),!0}catch{}}function hf(e,t){try{e.removeItem(t)}catch{}}function Gl(e,t){return uu(e,Sg,t.toString())}function Ql(e){return parseInt(Hl(e,Sg))||0}const Ws={local:!0,session:!0},Eg={local:new Set,session:new Set};let du=!1;function ES(e){du=e}let gi=typeof window>"u"?{}:window;function Tg(e){const t=e+"Storage";try{if(gi&&gi[t]&&typeof gi[t].length=="number")return gi[t]}catch{}Ws[e]=!1}function Pg(e,t){const n=Tg(e);if(!n)return;const r=Hl(n,mf);if(r!==pf){if(r){const a=Ql(n);for(let l=0;l<a;l++)hf(n,To+l.toString())}uu(n,mf,pf),Gl(n,0);return}const o=Math.floor(Date.now()/Cg)-CS,i=a=>{const l=To+a.toString(),c=Hl(n,l);if(typeof c=="string"){try{const u=JSON.parse(c);if(typeof u=="object"&&typeof u.cached=="number"&&u.cached>o&&typeof u.provider=="string"&&typeof u.data=="object"&&typeof u.data.prefix=="string"&&t(u,a))return!0}catch{}hf(n,l)}};let s=Ql(n);for(let a=s-1;a>=0;a--)i(a)||(a===s-1?(s--,Gl(n,s)):Eg[e].add(a))}function _g(){if(!du){ES(!0);for(const e in Ws)Pg(e,t=>{const n=t.data,r=t.provider,o=n.prefix,i=Tn(r,o);if(!su(i,n).length)return!1;const s=n.lastModified||-1;return i.lastModifiedCached=i.lastModifiedCached?Math.min(i.lastModifiedCached,s):s,!0})}}function TS(e,t){const n=e.lastModifiedCached;if(n&&n>=t)return n===t;if(e.lastModifiedCached=t,n)for(const r in Ws)Pg(r,o=>{const i=o.data;return o.provider!==e.provider||i.prefix!==e.prefix||i.lastModified===t});return!0}function PS(e,t){du||_g();function n(r){let o;if(!Ws[r]||!(o=Tg(r)))return;const i=Eg[r];let s;if(i.size)i.delete(s=Array.from(i).shift());else if(s=Ql(o),!Gl(o,s+1))return;const a={cached:Math.floor(Date.now()/Cg),provider:e.provider,data:t};return uu(o,To+s.toString(),JSON.stringify(a))}t.lastModified&&!TS(e,t.lastModified)||Object.keys(t.icons).length&&(t.not_found&&(t=Object.assign({},t),delete t.not_found),n("local")||n("session"))}function gf(){}function _S(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,gS(e)}))}function AS(e,t){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(t).sort():e.iconsToLoad=t,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;const{provider:n,prefix:r}=e,o=e.iconsToLoad;delete e.iconsToLoad;let i;if(!o||!(i=Ul(n)))return;i.prepare(n,r,o).forEach(a=>{SS(n,a,l=>{if(typeof l!="object")a.icons.forEach(c=>{e.missing.add(c)});else try{const c=su(e,l);if(!c.length)return;const u=e.pendingIcons;u&&c.forEach(d=>{u.delete(d)}),PS(e,l)}catch(c){console.error(c)}_S(e)})})}))}const MS=(e,t)=>{const n=wS(e,!0,yg()),r=hS(n);if(!r.pending.length){let l=!0;return t&&setTimeout(()=>{l&&t(r.loaded,r.missing,r.pending,gf)}),()=>{l=!1}}const o=Object.create(null),i=[];let s,a;return r.pending.forEach(l=>{const{provider:c,prefix:u}=l;if(u===a&&c===s)return;s=c,a=u,i.push(Tn(c,u));const d=o[c]||(o[c]=Object.create(null));d[u]||(d[u]=[])}),r.pending.forEach(l=>{const{provider:c,prefix:u,name:d}=l,m=Tn(c,u),g=m.pendingIcons||(m.pendingIcons=new Set);g.has(d)||(g.add(d),o[c][u].push(d))}),i.forEach(l=>{const{provider:c,prefix:u}=l;o[c][u].length&&AS(l,o[c][u])}),t?yS(t,r,i):gf};function $S(e,t){const n={...e};for(const r in t){const o=t[r],i=typeof o;r in wg?(o===null||o&&(i==="string"||i==="number"))&&(n[r]=o):i===typeof n[r]&&(n[r]=r==="rotate"?o%4:o)}return n}const NS=/[\s,]+/;function zS(e,t){t.split(NS).forEach(n=>{switch(n.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}function RS(e,t=0){const n=e.replace(/^-?[0-9.]*/,"");function r(o){for(;o<0;)o+=4;return o%4}if(n===""){const o=parseInt(e);return isNaN(o)?0:r(o)}else if(n!==e){let o=0;switch(n){case"%":o=25;break;case"deg":o=90}if(o){let i=parseFloat(e.slice(0,e.length-n.length));return isNaN(i)?0:(i=i/o,i%1===0?r(i):0)}}return t}function IS(e,t){let n=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in t)n+=" "+r+'="'+t[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+e+"</svg>"}function jS(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function LS(e){return"data:image/svg+xml,"+jS(e)}function OS(e){return'url("'+LS(e)+'")'}let eo;function DS(){try{eo=window.trustedTypes.createPolicy("iconify",{createHTML:e=>e})}catch{eo=null}}function BS(e){return eo===void 0&&DS(),eo?eo.createHTML(e):e}const Ag={...bg,inline:!1},FS={xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},WS={display:"inline-block"},Kl={backgroundColor:"currentColor"},Mg={backgroundColor:"transparent"},vf={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},yf={WebkitMask:Kl,mask:Kl,background:Mg};for(const e in yf){const t=yf[e];for(const n in vf)t[e+n]=vf[n]}const VS={...Ag,inline:!0};function wf(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}const US=(e,t,n,r)=>{const o=n?VS:Ag,i=$S(o,t),s=t.mode||"svg",a={},l=t.style||{},c={...s==="svg"?FS:{},ref:r};for(let h in t){const p=t[h];if(p!==void 0)switch(h){case"icon":case"style":case"children":case"onLoad":case"mode":case"_ref":case"_inline":break;case"inline":case"hFlip":case"vFlip":i[h]=p===!0||p==="true"||p===1;break;case"flip":typeof p=="string"&&zS(i,p);break;case"color":a.color=p;break;case"rotate":typeof p=="string"?i[h]=RS(p):typeof p=="number"&&(i[h]=p);break;case"ariaHidden":case"aria-hidden":p!==!0&&p!=="true"&&delete c["aria-hidden"];break;default:o[h]===void 0&&(c[h]=p)}}const u=tS(e,i),d=u.attributes;if(i.inline&&(a.verticalAlign="-0.125em"),s==="svg"){c.style={...a,...l},Object.assign(c,d);let h=0,p=t.id;return typeof p=="string"&&(p=p.replace(/-/g,"_")),c.dangerouslySetInnerHTML={__html:BS(iS(u.body,p?()=>p+"ID"+h++:"iconifyReact"))},I.createElement("svg",c)}const{body:m,width:g,height:w}=e,v=s==="mask"||(s==="bg"?!1:m.indexOf("currentColor")!==-1),x=IS(m,{...d,width:g+"",height:w+""});return c.style={...a,"--svg":OS(x),width:wf(d.width),height:wf(d.height),...WS,...v?Kl:Mg,...l},I.createElement("span",c)};yg(!0);sS("",mS);if(typeof document<"u"&&typeof window<"u"){_g();const e=window;if(e.IconifyPreload!==void 0){const t=e.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!Jk(r))&&console.error(n)}catch{console.error(n)}})}if(e.IconifyProviders!==void 0){const t=e.IconifyProviders;if(typeof t=="object"&&t!==null)for(let n in t){const r="IconifyProviders["+n+"] is invalid.";try{const o=t[n];if(typeof o!="object"||!o||o.resources===void 0)continue;aS(n,o)||console.error(r)}catch{console.error(r)}}}}class $g extends I.Component{constructor(t){super(t),this.state={icon:null}}_abortLoading(){this._loading&&(this._loading.abort(),this._loading=null)}_setData(t){this.state.icon!==t&&this.setState({icon:t})}_checkIcon(t){const n=this.state,r=this.props.icon;if(typeof r=="object"&&r!==null&&typeof r.body=="string"){this._icon="",this._abortLoading(),(t||n.icon===null)&&this._setData({data:r});return}let o;if(typeof r!="string"||(o=Fs(r,!1,!0))===null){this._abortLoading(),this._setData(null);return}const i=Yk(o);if(!i){(!this._loading||this._loading.name!==r)&&(this._abortLoading(),this._icon="",this._setData(null),i!==null&&(this._loading={name:r,abort:MS([o],this._checkIcon.bind(this,!1))}));return}if(this._icon!==r||n.icon===null){this._abortLoading(),this._icon=r;const s=["iconify"];o.prefix!==""&&s.push("iconify--"+o.prefix),o.provider!==""&&s.push("iconify--"+o.provider),this._setData({data:i,classes:s}),this.props.onLoad&&this.props.onLoad(r)}}componentDidMount(){this._checkIcon(!1)}componentDidUpdate(t){t.icon!==this.props.icon&&this._checkIcon(!0)}componentWillUnmount(){this._abortLoading()}render(){const t=this.props,n=this.state.icon;if(n===null)return t.children?t.children:I.createElement("span",{});let r=t;return n.classes&&(r={...t,className:(typeof t.className=="string"?t.className+" ":"")+n.classes.join(" ")}),US({...iu,...n.data},r,t._inline,t._ref)}}const Do=I.forwardRef(function(t,n){const r={...t,_ref:n,_inline:!1};return I.createElement($g,r)});I.forwardRef(function(t,n){const r={...t,_ref:n,_inline:!0};return I.createElement($g,r)});var Ng={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var i="",s=0;s<arguments.length;s++){var a=arguments[s];a&&(i=o(i,r(a)))}return i}function r(i){if(typeof i=="string"||typeof i=="number")return i;if(typeof i!="object")return"";if(Array.isArray(i))return n.apply(null,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var s="";for(var a in i)t.call(i,a)&&i[a]&&(s=o(s,a));return s}function o(i,s){return s?i?i+" "+s:i+s:i}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(Ng);var HS=Ng.exports;const GS=gr(HS),QS=f.createContext({}),z3=({status:e,className:t,except:n})=>{var i;const r=new zw({responseStatus:e??((i=f.useContext(QS))==null?void 0:i.error)}),o=r.responseStatus?Lw.call(r,n??[]):null;return o?b.jsx("div",{className:GS("bg-red-50 border-l-4 border-red-400 p-4",t),children:b.jsxs("div",{className:"flex",children:[b.jsx("div",{className:"flex-shrink-0",children:b.jsx(Do,{icon:"mdi:close-circle",className:"h-5 w-5 text-red-500","aria-hidden":"true"})}),b.jsx("div",{className:"ml-3",children:b.jsx("p",{className:"text-sm text-red-700",children:o})})]})}):null},KS=({className:e,icon:t,text:n})=>{const r=t||t===void 0,o=n===void 0?"loading...":n;let i=["flex",e];return b.jsxs("div",{className:i.join(" "),title:"loading...",children:[r?b.jsxs("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"24px",height:"30px",viewBox:"0 0 24 30",children:[b.jsxs("rect",{x:"0",y:"10",width:"4",height:"10",fill:"#333",opacity:"0.2",children:[b.jsx("animate",{attributeName:"opacity",attributeType:"XML",values:"0.2; 1; .2",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}),b.jsx("animate",{attributeName:"height",attributeType:"XML",values:"10; 20; 10",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}),b.jsx("animate",{attributeName:"y",attributeType:"XML",values:"10; 5; 10",begin:"0s",dur:"0.6s",repeatCount:"indefinite"})]}),b.jsxs("rect",{x:"8",y:"10",width:"4",height:"10",fill:"#333",opacity:"0.2",children:[b.jsx("animate",{attributeName:"opacity",attributeType:"XML",values:"0.2; 1; .2",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}),b.jsx("animate",{attributeName:"height",attributeType:"XML",values:"10; 20; 10",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}),b.jsx("animate",{attributeName:"y",attributeType:"XML",values:"10; 5; 10",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"})]}),b.jsxs("rect",{x:"16",y:"10",width:"4",height:"10",fill:"#333",opacity:"0.2",children:[b.jsx("animate",{attributeName:"opacity",attributeType:"XML",values:"0.2; 1; .2",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}),b.jsx("animate",{attributeName:"height",attributeType:"XML",values:"10; 20; 10",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}),b.jsx("animate",{attributeName:"y",attributeType:"XML",values:"10; 5; 10",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"})]})]}):null,b.jsx("span",{className:"ml-1 text-gray-400",children:o})]})};var zg,bf=No;zg=bf.createRoot,bf.hydrateRoot;const Aa=({className:e,children:t})=>{let[n,r]=f.useState("");function o(i){var l,c;let s=document.createElement("input"),a=i.target.parentElement.querySelector("label");if(s.setAttribute("value",a.innerText),document.body.appendChild(s),s.select(),document.execCommand("copy"),document.body.removeChild(s),typeof window.getSelection=="function"){const u=document.createRange();u.selectNodeContents(a),(l=window.getSelection())==null||l.removeAllRanges(),(c=window.getSelection())==null||c.addRange(u)}r("copied"),setTimeout(()=>r(""),3e3)}return b.jsxs("div",{className:`${e} relative bg-gray-700 text-gray-300 pl-5 py-3 sm:rounded flex`,children:[b.jsxs("div",{className:"flex ml-2 w-full justify-between cursor-pointer",onClick:o,children:[b.jsxs("div",{children:[b.jsx("span",{children:"$ "}),b.jsx("label",{className:"cursor-pointer",children:t})]}),b.jsx("small",{className:"text-xs text-gray-400 px-3 -mt-1",children:"sh"})]}),n?b.jsx("div",{className:"absolute right-0 -mr-28 -mt-3 rounded-md bg-green-50 p-3",children:b.jsxs("div",{className:"flex",children:[b.jsx("div",{className:"flex-shrink-0",children:b.jsx(Do,{icon:"mdi:check-circle",className:"h-5 w-5 text-green-400"})}),b.jsx("div",{className:"ml-3",children:b.jsx("p",{className:"text-sm font-medium text-green-800",children:n})})]})}):null]})},YS=({template:e})=>{let t="ProjectName",[n,r]=f.useState(t);const o=l=>r(l.target.value),i=l=>`https://account.servicestack.net/archive/${l}?Name=${n||"MyApp"}`,s=f.useMemo(()=>(n||"MyApp")+".zip",[n]);function a(l){if(l.key.match(/[\W]+/g))return l.preventDefault(),!1}return b.jsxs("div",{className:"flex flex-col w-96",children:[b.jsx("h4",{className:"py-6 text-center text-xl",children:"Download New Project"}),b.jsx("input",{type:"text",onChange:o,defaultValue:t,autoComplete:"off",spellCheck:"false",onKeyDown:a,className:"mb-8 sm:text-lg rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 dark:bg-gray-800"}),b.jsx("section",{className:"w-full flex justify-center text-center",children:b.jsx("div",{className:"mb-2",children:b.jsx("div",{className:"flex justify-center text-center",children:b.jsx("a",{className:"archive-url hover:no-underline",href:i(`ServiceStack/${e}`),children:b.jsxs("div",{className:"bg-white dark:bg-gray-800 px-4 py-4 mr-4 mb-4 rounded-lg shadow-lg text-center items-center justify-center hover:shadow-2xl dark:border-2 dark:border-pink-600 dark:hover:border-blue-600",style:{minWidth:"150px"},children:[b.jsx("div",{className:"text-center font-extrabold flex items-center justify-center mb-2",children:b.jsx("div",{className:"text-4xl text-blue-400 my-3",children:b.jsx(Do,{icon:"logos:react",className:"w-12 h-12"})})}),b.jsx("div",{className:"text-xl font-medium text-gray-700 dark:text-gray-300",children:"React SPA"}),b.jsx("div",{className:"flex justify-center h-8"}),b.jsx("span",{className:"archive-name px-4 pb-2 text-blue-600 dark:text-indigo-400",children:s}),b.jsx("div",{className:"count mt-1 text-gray-400 text-sm"})]})})})})}),b.jsx("h4",{className:"pb-4 text-center text-xl",children:"or"}),b.jsx(Aa,{className:"mb-2",children:"npx degit ServiceStack/press-react"}),b.jsx("h4",{className:"py-4 text-center text-xl",children:"or"}),b.jsx("div",{className:"mx-auto",children:b.jsx("a",{href:"https://stackblitz.com/github/ServiceStack/press-react",children:b.jsx("img",{alt:"Open in StackBlitz",src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg"})})}),b.jsx("h4",{className:"py-6 text-center text-xl",children:"Run"}),b.jsx(Aa,{className:"mb-2",children:"npm install"}),b.jsx(Aa,{className:"mb-2",children:"npm run dev"})]})},Bo=f.createContext({});function qS(e,t){const[n,r]=f.useState(!1),[o,i]=f.useState(!1),s=encodeURIComponent(e.id),a=typeof e.playlistCoverId=="string"?encodeURIComponent(e.playlistCoverId):null,l=e.title,c=e.poster||"hqdefault",u=`&${e.params}`||"",d=e.muted?"&mute=1":"",m=e.announce||"Watch",g=e.webp?"webp":"jpg",w=e.webp?"vi_webp":"vi",v=e.thumbnail||(e.playlist?`https://i.ytimg.com/${w}/${a}/${c}.${g}`:`https://i.ytimg.com/${w}/${s}/${c}.${g}`);let x=e.noCookie?"https://www.youtube-nocookie.com":"https://www.youtube.com";x=e.cookie?"https://www.youtube.com":"https://www.youtube-nocookie.com";const h=e.playlist?`${x}/embed/videoseries?autoplay=1${d}&list=${s}${u}`:`${x}/embed/${s}?autoplay=1&state=1${d}${u}`,p=e.activatedClass||"lyt-activated",y=e.adNetwork||!1,k=e.aspectHeight||9,S=e.aspectWidth||16,C=e.iframeClass||"",E=e.playerClass||"lty-playbtn",T=e.wrapperClass||"yt-lite",N=e.onIframeAdded||function(){},M=e.rel?"prefetch":"preload",D=e.containerElement||"article",R=e.style||{},q=()=>{n||r(!0)},B=()=>{o||i(!0)};return f.useEffect(()=>{o&&N()},[o]),b.jsxs(b.Fragment,{children:[b.jsx("link",{rel:M,href:v,as:"image"}),b.jsx(b.Fragment,{children:n&&b.jsxs(b.Fragment,{children:[b.jsx("link",{rel:"preconnect",href:x}),b.jsx("link",{rel:"preconnect",href:"https://www.google.com"}),y&&b.jsxs(b.Fragment,{children:[b.jsx("link",{rel:"preconnect",href:"https://static.doubleclick.net"}),b.jsx("link",{rel:"preconnect",href:"https://googleads.g.doubleclick.net"})]})]})}),b.jsxs(D,{onPointerOver:q,onClick:B,className:`${T} ${o?p:""}`,"data-title":l,style:{backgroundImage:`url(${v})`,"--aspect-ratio":`${k/S*100}%`,...R},children:[b.jsx("button",{type:"button",className:E,"aria-label":`${m} ${l}`}),o&&b.jsx("iframe",{ref:t,className:C,title:l,width:"560",height:"315",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,src:h})]})]})}const Rg=f.forwardRef(qS);function JS({src:e}){const n=I.useContext(Bo).components.includes[e],r=f.lazy(n||(()=>Promise.resolve(b.jsx(b.Fragment,{}))));return n?b.jsx(f.Suspense,{fallback:b.jsx(b.Fragment,{}),children:b.jsx(r,{components:rr})}):b.jsxs("div",{className:"text-red-500",children:["Include '",e,"' not found"]})}function Dr({className:e,title:t,children:n}){return b.jsxs("div",{className:ae(e,"custom-block"),children:[b.jsx("p",{className:"custom-block-title",children:t}),n]})}function xf({className:e,icon:t,box:n,txt:r,children:o}){let[i,s]=f.useState("");function a(l){var m;const c=l.currentTarget;s("copying");let u=document.createElement("textarea"),d=((m=c.querySelector("code")||c.querySelector("p"))==null?void 0:m.innerHTML)??"";u.innerHTML=d,document.body.appendChild(u),u.select(),document.execCommand("copy"),document.body.removeChild(u),setTimeout(()=>s(""),3e3)}return b.jsxs("div",{className:ae(e,i,"flex cursor-pointer mb-3"),onClick:a,children:[b.jsx("div",{className:ae("flex-grow",n||"bg-gray-700"),children:b.jsx("div",{className:ae("pl-4 py-1 pb-1.5 align-middle",r||"text-lg text-white"),children:o})}),b.jsx("div",{className:"flex",children:b.jsxs("div",{className:ae(t,"text-white p-1.5 pb-0"),children:[b.jsx("svg",{className:"copied w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:b.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 13l4 4L19 7"})}),b.jsxs("svg",{className:"nocopy w-6 h-6",fill:"none",stroke:"white",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[b.jsx("title",{children:"copy"}),b.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})]})]})})]})}function XS({arg:e}){return b.jsx(Rg,{id:e})}const rr={Include:JS,Alert:Dr,Tip:({className:e,...t})=>b.jsx(Dr,{title:"TIP",className:ae("tip",e),...t}),Info:({className:e,...t})=>b.jsx(Dr,{title:"INFO",className:ae("info",e),...t}),Warning:({className:e,...t})=>b.jsx(Dr,{title:"WARNING",className:ae("warning",e),...t}),Danger:({className:e,...t})=>b.jsx(Dr,{title:"DANGER",className:ae("danger",e),...t}),Copy:({className:e,...t})=>b.jsx(xf,{className:ae("not-prose copy cp",e),icon:"bg-sky-500",...t}),Sh:({className:e,...t})=>b.jsx(xf,{className:ae("not-prose sh-copy cp",e),box:"bg-gray-800",icon:"bg-green-600",txt:"whitespace-pre text-base text-gray-100",...t}),Youtube:XS};function ZS(e){return(e||"").replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}Object.keys(rr).forEach(e=>rr[ZS(e)]=rr[e]);const e3=({doc:e,type:t,group:n})=>{const o=I.useContext(Bo).components[t]||{},i=n?o[n]&&o[n][e.slug]:o[e.slug],s=f.lazy(i||(()=>Promise.resolve(b.jsx(b.Fragment,{}))));return i?b.jsx(f.Suspense,{fallback:b.jsx(b.Fragment,{}),children:b.jsx(s,{components:rr})}):e.preview?b.jsx("div",{dangerouslySetInnerHTML:{__html:e.preview}}):b.jsx("pre",{dangerouslySetInnerHTML:{__html:e.content}})},t3=({src:e})=>{const n=I.useContext(Bo).components.includes[e],r=f.lazy(n||(()=>Promise.resolve(b.jsx(b.Fragment,{}))));return n?b.jsx(f.Suspense,{fallback:b.jsx(b.Fragment,{}),children:b.jsx(r,{components:rr})}):b.jsxs("div",{className:"text-red-500",children:["Include '",e,"' not found"]})},n3=({group:e,title:t,background:n,summary:r,learnMore:o})=>{const s=f.useContext(Bo).videos[e];function a(c){return Ym(c,"/")}function l(c){return new Date(c).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}return b.jsx("div",{className:ae(n,"py-24 sm:py-32"),children:b.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:b.jsxs("div",{className:"mx-auto max-w-5xl",children:[b.jsx("h2",{className:"text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl",children:t}),b.jsxs("p",{className:"mt-2 text-lg leading-8 text-gray-600 dark:text-gray-400",children:[r,o?b.jsxs("a",{href:o,className:"ml-2 text-sm font-semibold leading-6",children:["Learn more ",b.jsx("span",{"aria-hidden":"true",children:"→"})]}):null]}),b.jsx("div",{className:"mt-16 space-y-20 lg:mt-20 lg:space-y-20",children:s.map(c=>b.jsxs("article",{className:"relative isolate flex flex-col gap-8 lg:flex-row",children:[b.jsx("div",{className:"relative lg:w-1/2 lg:shrink-0",children:b.jsx(Rg,{id:a(c.url),title:c.title})}),b.jsxs("div",{children:[b.jsxs("div",{className:"flex items-center gap-x-4 text-xs",children:[b.jsx("time",{dateTime:"2020-03-16",className:"text-gray-500 dark:text-gray-400",children:l(c.date)}),c.tags.map(u=>b.jsx("span",{className:"relative z-10 rounded-full bg-gray-50 dark:bg-gray-800 py-1.5 px-3 font-medium text-gray-600 dark:text-gray-300",children:u},u))]}),b.jsxs("div",{className:"group relative max-w-xl",children:[b.jsx("h3",{className:"mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-gray-50 group-hover:text-gray-600 dark:group-hover:text-gray-400",children:b.jsx("a",{href:c.url,children:c.title})}),b.jsx("div",{className:"mt-5 text-sm leading-6 text-gray-600 dark:text-gray-400",children:b.jsx("div",{className:"prose dark:prose-invert",children:b.jsx(e3,{type:"videos",doc:c,group:e})})})]})]})]},c.url))})]})})})},r3=({href:e,iconSrc:t,children:n})=>{const r=Ym(e,"/");return t?b.jsxs("a",{href:e,className:"mr-3 text-gray-500 hover:text-gray-600 text-decoration-none",children:[b.jsx("img",{src:t,className:"w-5 h-5 inline-flex text-purple-800 mr-1",alt:"file icon"}),r]}):b.jsxs("a",{href:e,className:"mr-3 text-gray-400 hover:text-gray-500 text-decoration-none",children:[n," ",r]})},o3=({path:e})=>b.jsx(r3,{href:Iw("/example/react-press/src",e),children:b.jsx(Do,{icon:"mdi:react",className:"w-5 h-5 text-link-dark inline"})}),i3=()=>b.jsxs(mg,{title:"React SPA with Vite + TypeScript",children:[b.jsx("div",{className:"mx-auto mt-16 max-w-7xl px-4 sm:mt-24",children:b.jsxs("div",{className:"text-center",children:[b.jsxs("h1",{className:"text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl md:text-6xl",children:[b.jsx("span",{className:"block xl:inline",children:"Welcome to "}),b.jsx("span",{className:"block text-link-dark dark:text-link-dark xl:inline",children:"React SPA"})]}),b.jsx("p",{className:"mx-auto mt-3 max-w-md text-base text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl",children:"Welcome to your new React SPA App"}),b.jsx("div",{className:"mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8",children:b.jsx("div",{className:"mt-3 rounded-md shadow sm:mt-0 sm:ml-3",children:b.jsx(Vc,{to:"https://ui.shadcn.com/docs/components/accordion",className:"flex w-full items-center justify-center rounded-md border border-transparent bg-link-dark dark:bg-link-dark px-8 py-3 text-base font-medium text-white hover:bg-gray-700 md:py-4 md:px-10 md:text-lg",children:"React Component Gallery"})})})]})}),b.jsx("section",{className:"py-8 flex",children:b.jsxs("div",{className:"mt-8 mx-auto",children:[b.jsx("h2",{className:"mt-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl text-center",children:"Getting Started"}),b.jsx("div",{children:b.jsx(YS,{template:"react-spa"})})]})}),b.jsx("div",{className:"flex justify-center my-20 py-20 bg-slate-100 dark:bg-slate-800",children:b.jsxs("div",{className:"text-center",children:[b.jsx(Do,{icon:"mdi:feature-highlight",className:"text-link-dark w-36 h-36 inline-block"}),b.jsx("h1",{className:"text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left",children:"Features"})]})}),b.jsx("div",{className:"text-center text-xl",children:"Opinionated React template for a productive out-of-the-box development UX"}),b.jsx("div",{className:"prose dark:prose-invert lg:prose-xl mx-auto",children:b.jsx(t3,{src:"features.md"})}),b.jsx("div",{className:"flex justify-center my-20 py-20 bg-slate-100 dark:bg-slate-800",children:b.jsxs("div",{className:"text-center",children:[b.jsx("svg",{className:"text-link-dark dark:text-link-dark w-36 h-36 inline-block",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:b.jsx("path",{fill:"currentColor",d:"m18 16l-4-3.2V16H6V8h8v3.2L18 8m2-4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"})}),b.jsx("h1",{className:"text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left",children:"Videos"})]})}),b.jsx(n3,{title:"SPA Development",summary:"Learn about ServiceStack's productive features for rapidly developing Single Page Apps",group:"react"}),b.jsx("div",{className:"my-8 flex justify-center gap-x-4",children:b.jsx(o3,{path:"pages/index.tsx"})})]}),s3=I.lazy(()=>Q(()=>import("./about-CqlhUmn3.js"),__vite__mapDeps([0,1]))),a3=I.lazy(()=>Q(()=>import("./blog-DzV9KjZN.js"),__vite__mapDeps([]))),l3=I.lazy(()=>Q(()=>import("./counter-Cp1L9fkZ.js"),__vite__mapDeps([]))),c3=I.lazy(()=>Q(()=>import("./privacy-B7R3Ke51.js"),__vite__mapDeps([2,1]))),u3=I.lazy(()=>Q(()=>import("./videos-Kh7uy-c4.js"),__vite__mapDeps([]))),d3=I.lazy(()=>Q(()=>import("./whatsnew-DVUfG2-G.js"),__vite__mapDeps([]))),f3=I.lazy(()=>Q(()=>import("./_slug_-B6Ozl4Xg.js"),__vite__mapDeps([]))),p3=I.lazy(()=>Q(()=>import("./index-DHh_2gCP.js"),__vite__mapDeps([3,4]))),m3=I.lazy(()=>Q(()=>import("./_name_-BDzPnSio.js"),__vite__mapDeps([5,4]))),h3=I.lazy(()=>Q(()=>import("./_tag_-D8FOSNH-.js"),__vite__mapDeps([6,4]))),g3=I.lazy(()=>Q(()=>import("./_year_-DCrHR6f4.js"),__vite__mapDeps([7,4]))),v3=[{caseSensitive:!1,path:"about",element:I.createElement(s3)},{caseSensitive:!1,path:"blog",element:I.createElement(a3)},{caseSensitive:!1,path:"counter",element:I.createElement(l3)},{caseSensitive:!1,path:"/",element:I.createElement(i3)},{caseSensitive:!1,path:"privacy",element:I.createElement(c3)},{caseSensitive:!1,path:"videos",element:I.createElement(u3)},{caseSensitive:!1,path:"whatsnew",element:I.createElement(d3)},{caseSensitive:!1,path:"posts",children:[{caseSensitive:!1,path:":slug",element:I.createElement(f3)},{caseSensitive:!1,path:"",element:I.createElement(p3)},{caseSensitive:!1,path:"author",children:[{caseSensitive:!1,path:":name",element:I.createElement(m3)}]},{caseSensitive:!1,path:"tagged",children:[{caseSensitive:!1,path:":tag",element:I.createElement(h3)}]},{caseSensitive:!1,path:"year",children:[{caseSensitive:!1,path:":year",element:I.createElement(g3)}]}]}],y3={blog:{config:{localBaseUrl:"http://localhost:5173",publicBaseUrl:"https://react-vue.servicestack.net",siteTwitter:"@React",blogTitle:"From the blog",blogDescription:"Writing on software design and aerospace industry.",blogEmail:"email@example.org (React)",blogImageUrl:"https://servicestack.net/img/logo.png"},authors:[{name:"Lucy Bates",email:"lucy@email.org",bio:"Works in software design, company building, and the aerospace industry.",profileUrl:"/img/profiles/user1.svg",twitterUrl:"https://twitter.com/lucy",threadsUrl:"https://threads.net/@lucy",gitHubUrl:"https://github.com/lucy"},{name:"Gayle Smith",email:"gayle@email.org",bio:"Gayle is an author, consultant, and founder focusing on improving tech.",profileUrl:"/img/profiles/user2.svg",twitterUrl:"https://twitter.com/gayle",mastodonUrl:"https://mastodon.social/@gayle"},{name:"Brandon Foley",email:"brandon@email.org",bio:"I am a programmer at heart. I like to tinker with code and build generic coding structures.",profileUrl:"/img/profiles/user3.svg",gitHubUrl:"https://github.com/brandon"}],posts:[{slug:"vite-press-plugin",path:"src/_posts/2024-03-01_vite-press-plugin.md",fileName:"vite-press-plugin.md",content:`The Vite Press Plugin is an alternative to [VitePress](https://vitepress.dev) for adding Markdown features 
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

<FileLayout :files="{
    _includes: {},
    _posts: {},
    _videos: {},
    _whatsnew: {},
}"/>

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

<FileLayout :files="{
    _posts: { _: [
      '...',
      '2023-01-21_start.md',
      '2024-02-11_jwt-identity-auth.md',
      '2024-03-01_vite-press-plugin.md',
    ]},
}"/>

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

<FileLayout :files="{
  _whatsnew: {
    '2023-03-08_Animaginary': { _: ['feature1.md'] },
    '2023-03-18_OpenShuttle': { _: ['feature1.md'] },
    '2023-03-28_Planetaria':  { _: ['feature1.md'] },
  }
}"/>

What's New follows the same structure as Pages feature which is rendered in:

 - [whatsnew.vue](https://github.com/NetCoreTemplates/vue-spa/blob/main/MyApp.Client/src/pages/whatsnew.vue)
 - [whatsnew.tsx](https://github.com/NetCoreTemplates/react-spa/blob/main/MyApp.Client/src/pages/whatsnew.tsx)
 
### Videos Feature

The videos feature maintained in the \`_videos\` folder allows grouping of related videos into different folder groups, e.g:

<FileLayout :files="{
  _videos: {
    'vue': {
       _: ['admin.md','autoquerygrid.md','components.md']
    },
    'react': {
       _: ['locode.md','bookings.md','nextjs.md']
    },
  }
}"/>

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

<FileLayout :files="{
  _includes: {
    'features': {
       _: ['videos.md','whatsnew.md']
    },
    _: ['privacy.md']
  }
}"/>


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

<FileLayout :files="{
  meta: {
    2022: { _: ['all.json','posts.json','videos.json'] },
    2023: { _: ['all.json','posts.json'] },
    2024: { _: ['all.json','posts.json','videos.json','whatsnew.json'] },
    _: ['all.json','index.json']
  }
}"/>

With this you can fetch the metadata of all the new **Blog Posts** added in **2023** from:

[/api/2024/blog.json](/api/2024/blog.json)

Or all the website content added in **2024** from:

[/api/2024/all.json](/api/2024/all.json)

Or **ALL** the website metadata content from:

[/api/all.json](/api/all.json)

This feature makes it possible to support use-cases like CreatorKit's
[Generating Newsletters](https://servicestack.net/creatorkit/portal-mailruns#generating-newsletters) feature which generates 
a Monthly Newsletter Email with all new content added within a specified period.

## Components in Markdown Pages

The [Simple, Modern JavaScript](/posts/javascript) blog post is a good example showing how you can import and reference components in Markdown pages:

\`\`\`tsx
<script setup>
import Hello from "./components/Hello.vue";
import Counter from "./components/Counter.vue";
import Plugin from "./components/Plugin.vue";
import HelloApi from "./components/HelloApi.vue";
import VueComponentGallery from "./components/VueComponentGallery.vue";
import VueComponentLibrary from "./components/VueComponentLibrary.vue";
<\/script>

<hello name="Vue 3"></hello>
<counter></counter>
\`\`\`

As well as use Global Components which don't need to be imported, e.g:

\`\`\`xml
<FileLayout :files="{
  _videos: {
    'vue': {
       _: ['admin.md','autoquerygrid.md']
    },
    'react': {
       _: ['locode.md','bookings.md']
    },
  }
}" />
\`\`\`

#### Output

<FileLayout :files="{
  _videos: {
    'vue': {
       _: ['admin.md','autoquerygrid.md']
    },
    'react': {
       _: ['locode.md','bookings.md']
    },
  }
}" />


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

\`\`\`markdown
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
`,date:"2024-03-01",tags:["docs","markdown"],wordCount:1973,lineCount:487,minutesToRead:9,title:"Vite Press Plugin",summary:"Introducing the Vite Press Plugin for Vite Vue & React Apps",author:"Lucy Bates",image:"https://images.unsplash.com/photo-1524668951403-d44b28200ce0?crop=entropy&fit=crop&h=1000&w=2000",url:"/posts/vite-press-plugin"},{slug:"net8-best-blazor",path:"src/_posts/2023-11-22_net8-best-blazor.md",fileName:"net8-best-blazor.md",content:`<script setup>
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
`,date:"2023-11-22",tags:["c#","blazor","servicestack"],wordCount:4094,lineCount:503,minutesToRead:18,title:".NET 8's Best Blazor is not Blazor as we know it",summary:"We explore the exciting new potential of Blazor in .NET 8 to develop fast, interactive Web Apps without compromise",image:"https://images.unsplash.com/photo-1482686115713-0fbcaced6e28?crop=entropy&fit=crop&h=1000&w=2000",author:"Gayle Smith",url:"/posts/net8-best-blazor"},{slug:"net8-blazor-template",path:"src/_posts/2023-11-20_net8-blazor-template.md",fileName:"net8-blazor-template.md",content:`<script setup>
import BlazorTemplate from "./components/BlazorTemplate.vue";
<\/script>

With the release of **.NET 8**, we're happy to announce ServiceStack's new [Blazor](https://blazor.web-templates.io/)
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

<div class="not-prose relative bg-white dark:bg-black py-4">
    <div class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <p class="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl">Create a new Blazor Tailwind App</p>
        <p class="mx-auto mt-5 max-w-prose text-xl text-gray-500"> 
            Create a new Blazor Tailwind project with your preferred project name:
        </p>
    </div>
    <BlazorTemplate />
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
- [Organized Project Structure](https://docs.servicestack.net/physical-project-structure) - Divided into AppHost, Service Interface, Service Model, and Tests projects to promote separation of concerns and maintainability.`,date:"2023-11-20",tags:["dotnet","blazor","templates"],wordCount:1263,lineCount:94,minutesToRead:6,title:"New .NET 8 Blazor Tailwind Template",summary:"The new Blazor for .NET 8 template streamlines web UI development in C#.",image:"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?crop=entropy&fit=crop&h=1000&w=2000",author:"Lucy Bates",url:"/posts/net8-blazor-template"},{slug:"razor-ssg-new-blog-features",path:"src/_posts/2023-08-23_razor-ssg-new-blog-features.md",fileName:"razor-ssg-new-blog-features.md",content:`<script setup>
import ChartJs from "./components/ChartJs";
import FileLayout from "./components/FileLayout.vue";
<\/script>

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

<div class="not-prose my-8">
   <a href="https://razor-ssg.web-templates.io/feed.xml">
      <div class="block flex justify-center shadow hover:shadow-lg rounded overflow-hidden">
         <img class="max-w-3xl py-8" src="https://servicestack.net/img/posts/razor-ssg/valid-rss.png">
      </div>
   </a>
    <div class="mt-4 flex justify-center">
        <a class="text-indigo-600 hover:text-indigo-800" href="https://razor-ssg.web-templates.io/feed.xml">https://razor-ssg.web-templates.io/feed.xml</a>
        <a class="ml-4 text-indigo-600 hover:text-indigo-800" href="https://servicestack.net/feed.xml">https://servicestack.net/feed.xml</a>
    </div>
</div>

### Meta Headers support for Twitter cards and SEO

Blog Posts and Pages now include additional \`<meta>\` HTML Headers to enable support for
[Twitter Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards) in both
Twitter and Meta's new [threads.net](https://threads.net), e.g:

<div class="not-prose my-8 flex justify-center">
   <a class="block max-w-2xl" href="https://www.threads.net/@servicestack/post/CvIFobPBs5h">
      <div class="block flex justify-center shadow hover:shadow-lg rounded overflow-hidden">
         <img class="py-8" src="https://servicestack.net/img/posts/razor-ssg/twitter-cards.png">
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
<getting-started template="razor-ssg"></getting-started>
\`\`\`

#### [/mjs/components/GettingStarted.mjs](https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/wwwroot/mjs/components/GettingStarted.mjs)

<div class="not-prose my-20 flex justify-center">
    <getting-started template="razor-ssg"></getting-started>
</div>

#### Individual Blog Post dependencies

Just like Pages and Docs they can also include specific JavaScript **.mjs** or **.css** in the \`/wwwroot/posts\` folder
which will only be loaded for that post:

<FileLayout :files="{
    wwwroot: {
        posts: { _: ['<slug>.mjs','<slug>.css'] },
    }
}"/>

Now posts that need it can dynamically load large libraries like [Chart.js](https://www.chartjs.org) and use it
inside a custom Vue component by creating a custom \`/posts/<slug>.mjs\` that exports what components and features
your blog post needs, e.g:

#### [/posts/new-blog-features.mjs](https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/wwwroot/posts/new-blog-features.mjs)

\`\`\`js
import ChartJs from './components/ChartJs.mjs'

export default {
    components: { ChartJs }
}
\`\`\`

In this case it enables support for [Chart.js](https://www.chartjs.org) by including a custom Vue component that makes it
easy to create charts from Vue Components embedded in markdown:

#### [/posts/components/ChartJs.mjs](https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/wwwroot/posts/components/ChartJs.mjs)

\`\`\`js
import { ref, onMounted } from "vue"
import { addScript } from "@servicestack/client"

let loadJs = addScript('https://cdn.jsdelivr.net/npm/chart.js/dist/chart.umd.min.js')

export default {
    template:\`<div><canvas ref="chart"></canvas></div>\`,
    props:['type','data','options'],
    setup(props) {
        const chart = ref()
        onMounted(async () => {
            await loadJs

            const options = props.options || {
                responsive: true,
                legend: {
                    position: "top"
                }
            }
            new Chart(chart.value, {
                type: props.type || "bar",
                data: props.data,
                options,
            })

        })
        return { chart }
    }
}
\`\`\`

Which allows this post to embed Chart.js charts using the above custom \`<chart-js>\` Vue component and a JS Object literal, e.g:

\`\`\`html
<chart-js :data="{
    labels: [
        //...
    ],
    datasets: [
        //...
    ]
}"></chart-js>
\`\`\`

Which the [Bulk Insert Performance](https://servicestack.net/posts/bulk-insert-performance) Blog Post uses extensively to embeds its
Chart.js Bar charts:

<chart-js :data="{
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
}
]
}"></chart-js>

### New Markdown Containers

[Custom Containers](https://github.com/xoofx/markdig/blob/master/src/Markdig.Tests/Specs/CustomContainerSpecs.md)
are a popular method for implementing Markdown Extensions for enabling rich, wrist-friendly consistent
content in your Markdown documents.

Most of [VitePress Markdown Containers](https://vitepress.dev/guide/markdown#custom-containers)
are also available in Razor SSG websites for enabling rich, wrist-friendly consistent markup in your Markdown pages, e.g:

\`\`\`md
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

:::pre
::include vue/formatters.md::
:::

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

:::{.text-indigo-600 .text-3xl .text-center}
[https://servicestack.net/ideas](https://servicestack.net/ideas)
:::

### SSG or Dynamic Features

Whilst statically generated websites and blogs are generally limited to features that can be generated at build time, we're able to
add any dynamic features we need in [CreatorKit](https://servicestack.net/creatorkit/) - a Free companion self-host .NET App Mailchimp and Disqus
alternative which powers any dynamic functionality in Razor SSG Apps like the blogs comments and Mailing List features
in this Blog Post.
`,date:"2023-08-23",tags:["razor","markdown","blog","dev"],wordCount:1469,lineCount:335,minutesToRead:7,title:"New Blogging features in Razor SSG",summary:"Explore the new Blogging Features in Razor SSG",image:"https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&fit=crop&h=1000&w=2000",author:"Lucy Bates",url:"/posts/razor-ssg-new-blog-features"},{slug:"razor-ssg",path:"src/_posts/2023-03-30_razor-ssg.md",fileName:"razor-ssg.md",content:`Razor SSG is a Razor Pages powered Markdown alternative to [Ruby's Jekyll](https://jekyllrb.com/) & 
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

<svg className="sm:float-left mr-8 w-24 h-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 630 630">
    <rect width="630" height="630" fill="#f7df1e" />
    <path d="m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z"/>
</svg>

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
    return <b onClick={() => setCount(count++)}>Counter {count}</b>
}
\`\`\`

<div className="text-center text-2xl py-2 cursor-pointer select-none">
    <Counter />
</div>

### React Components in Markdown

Inside \`.mdx\` Markdown pages React Components can be embedded using MDX Syntax:

\`\`\`html
<Hello name="Vue 3" />
<Counter />
\`\`\`

\`\`\`js
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

\`\`\`html
<Plugin />
\`\`\`

<div className="text-center">
    <Plugin id="plugin" className="text-2xl py-4" />
</div>

\`\`\`html
<input type="text" id="txtName">
<div id="result"></div>

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

:::sh
npm run dtos
:::

That can be referenced instead to unlock your IDE's static analysis type-checking and intelli-sense benefits during development:

\`\`\`js
import { Hello } from '/js/dtos.mjs'
client.api(new Hello({ name }))
\`\`\`

You'll typically use all these libraries in your **API-enabled** components as seen in the
[HelloApi.mjs](https://github.com/NetCoreTemplates/razor/blob/main/MyApp/wwwroot/mjs/components/HelloApi.mjs)
component on the home page which calls the [Hello](/ui/Hello) API on each key press:

\`\`\`js
import { ref } from "vue"
import { useClient } from "@servicestack/vue"
import { Hello } from "../dtos.mjs"

export default {
    template:/*html*/\`<div class="flex flex-wrap justify-center">
        <TextInput v-model="name" @keyup="update" />
        <div class="ml-3 mt-2 text-lg">{{ result }}</div>
    </div>\`,
    props:['value'],
    setup(props) {
        let name = ref(props.value)
        let result = ref('')
        let client = useClient()

        async function update() {
            let api = await client.api(new Hello({ name }))
            if (api.succeeded) {
                result.value = api.response.result
            }
        }
        update()

        return { name, update, result }
    }
}
\`\`\`
`,date:"2023-02-01",tags:["js","dev"],wordCount:1018,lineCount:191,minutesToRead:5,title:"Simple, Modern React MDX",summary:"Learn about JS Modules, Vue 3 and available rich UI Components",image:"https://images.unsplash.com/photo-1497515114629-f71d768fd07c?crop=entropy&fit=crop&h=1000&w=2000",author:"Brandon Foley",url:"/posts/javascript"},{slug:"start",path:"src/_posts/2023-01-21_start.md",fileName:"start.md",content:`### Setup 

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
complex animations that would otherwise be time-consuming and challenging to build.`,date:"2023-03-08",tags:[],wordCount:86,lineCount:7,minutesToRead:0,title:"Animaginary",url:"/blog",image:"/img/whatsnew/animaginary.svg",group:"Animaginary"}]},components:{blog:{"vite-press-plugin":()=>Q(()=>import("./2024-03-01_vite-press-plugin-CzPLr7Yl.js"),__vite__mapDeps([])),"net8-best-blazor":()=>Q(()=>import("./2023-11-22_net8-best-blazor-mSImdHqE.js"),__vite__mapDeps([])),"net8-blazor-template":()=>Q(()=>import("./2023-11-20_net8-blazor-template-D8t9FaY8.js"),__vite__mapDeps([])),"razor-ssg-new-blog-features":()=>Q(()=>import("./2023-08-23_razor-ssg-new-blog-features-DhMvUQHA.js"),__vite__mapDeps([])),"razor-ssg":()=>Q(()=>import("./2023-03-30_razor-ssg-DqEnrsVH.js"),__vite__mapDeps([])),javascript:()=>Q(()=>import("./2023-02-01_javascript-BwQcfFUA.js"),__vite__mapDeps([])),start:()=>Q(()=>import("./2023-01-21_start-U-7ILuvr.js"),__vite__mapDeps([])),rider:()=>Q(()=>import("./2023-01-11_rider-iJXokb_x.js"),__vite__mapDeps([])),vs:()=>Q(()=>import("./2023-01-10_vs-DhFv-K-T.js"),__vite__mapDeps([])),deploy:()=>Q(()=>import("./2023-01-01_deploy-DL1yqa0D.js"),__vite__mapDeps([])),typography:()=>Q(()=>import("./2022-12-31_typography-CSD_ETbo.js"),__vite__mapDeps([])),"hetzner-cloud":()=>Q(()=>import("./2022-09-06_hetzner-cloud-hgmiF0MR.js"),__vite__mapDeps([]))},videos:{react:{nextjs:()=>Q(()=>import("./nextjs-wERJMDLT.js"),__vite__mapDeps([])),"autoquery-bookings":()=>Q(()=>import("./autoquery-bookings-DOPrBNz-.js"),__vite__mapDeps([])),"autogen-locode":()=>Q(()=>import("./autogen-locode-DEQfBldg.js"),__vite__mapDeps([])),modern:()=>Q(()=>import("./modern-DuRVDDZi.js"),__vite__mapDeps([])),"razor-ssg":()=>Q(()=>import("./razor-ssg-DXxQTsYV.js"),__vite__mapDeps([]))}},whatsNew:{"2023-03-28_Planetaria":{feature1:()=>Q(()=>import("./feature1-WcVVKkyx.js"),__vite__mapDeps([]))},"2023-03-18_OpenShuttle":{feature1:()=>Q(()=>import("./feature1-yw_9w5-D.js"),__vite__mapDeps([]))},"2023-03-08_Animaginary":{feature1:()=>Q(()=>import("./feature1-ChZmEaAb.js"),__vite__mapDeps([]))}},includes:{"features.md":()=>Q(()=>import("./features-Cx3d-0-t.js"),__vite__mapDeps([]))}}};function w3(){return b.jsx(f.Suspense,{fallback:b.jsx(mg,{children:b.jsx(KS,{className:"p-4"})}),children:b.jsx(ck,{defaultTheme:"light",storageKey:"color-scheme",children:b.jsx(Bo.Provider,{value:y3,children:Uy(v3)})})})}function b3(){const{pathname:e}=xr();return f.useEffect(()=>{window.scrollTo(0,0)},[e]),null}const x3=zg(document.getElementById("root"));x3.render(b.jsx(f.StrictMode,{children:b.jsxs(dw,{children:[b.jsx(b3,{}),b.jsx(w3,{})]})}));export{Io as $,Wb as A,nh as B,ae as C,z3 as E,pk as F,ou as H,t3 as I,mg as L,Wk as M,Bo as P,vw as S,n3 as V,L as _,Vc as a,P3 as b,o3 as c,_3 as d,pg as e,fk as f,T3 as g,e3 as h,E3 as i,b as j,Ro as k,C3 as l,Lo as m,Fe as n,cx as o,U as p,M1 as q,f as r,$1 as s,P1 as t,S3 as u,Xe as v,Vx as w,pr as x,rh as y,$l as z};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/about-CqlhUmn3.js","assets/LayoutArticle-rBPcZk2Q.js","assets/privacy-B7R3Ke51.js","assets/index-DHh_2gCP.js","assets/BlogPosts-Bse1fkxc.js","assets/_name_-BDzPnSio.js","assets/_tag_-D8FOSNH-.js","assets/_year_-DCrHR6f4.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
