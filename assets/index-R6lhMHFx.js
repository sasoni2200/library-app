function py(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function my(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Op={exports:{}},Sl={},Ap={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vs=Symbol.for("react.element"),gy=Symbol.for("react.portal"),_y=Symbol.for("react.fragment"),vy=Symbol.for("react.strict_mode"),yy=Symbol.for("react.profiler"),wy=Symbol.for("react.provider"),Ey=Symbol.for("react.context"),Sy=Symbol.for("react.forward_ref"),Cy=Symbol.for("react.suspense"),Iy=Symbol.for("react.memo"),ky=Symbol.for("react.lazy"),ih=Symbol.iterator;function Ty(t){return t===null||typeof t!="object"?null:(t=ih&&t[ih]||t["@@iterator"],typeof t=="function"?t:null)}var Dp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Lp=Object.assign,Mp={};function Qr(t,e,n){this.props=t,this.context=e,this.refs=Mp,this.updater=n||Dp}Qr.prototype.isReactComponent={};Qr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Qr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function bp(){}bp.prototype=Qr.prototype;function fc(t,e,n){this.props=t,this.context=e,this.refs=Mp,this.updater=n||Dp}var pc=fc.prototype=new bp;pc.constructor=fc;Lp(pc,Qr.prototype);pc.isPureReactComponent=!0;var sh=Array.isArray,Fp=Object.prototype.hasOwnProperty,mc={current:null},Up={key:!0,ref:!0,__self:!0,__source:!0};function jp(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Fp.call(e,r)&&!Up.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:vs,type:t,key:s,ref:o,props:i,_owner:mc.current}}function Ny(t,e){return{$$typeof:vs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function gc(t){return typeof t=="object"&&t!==null&&t.$$typeof===vs}function Ry(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var oh=/\/+/g;function la(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Ry(""+t.key):e.toString(36)}function uo(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case vs:case gy:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+la(o,0):r,sh(i)?(n="",t!=null&&(n=t.replace(oh,"$&/")+"/"),uo(i,e,n,"",function(u){return u})):i!=null&&(gc(i)&&(i=Ny(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(oh,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",sh(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+la(s,l);o+=uo(s,e,n,a,i)}else if(a=Ty(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+la(s,l++),o+=uo(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function zs(t,e,n){if(t==null)return t;var r=[],i=0;return uo(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Py(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var De={current:null},co={transition:null},xy={ReactCurrentDispatcher:De,ReactCurrentBatchConfig:co,ReactCurrentOwner:mc};function zp(){throw Error("act(...) is not supported in production builds of React.")}B.Children={map:zs,forEach:function(t,e,n){zs(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return zs(t,function(){e++}),e},toArray:function(t){return zs(t,function(e){return e})||[]},only:function(t){if(!gc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};B.Component=Qr;B.Fragment=_y;B.Profiler=yy;B.PureComponent=fc;B.StrictMode=vy;B.Suspense=Cy;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xy;B.act=zp;B.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Lp({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=mc.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)Fp.call(e,a)&&!Up.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:vs,type:t.type,key:i,ref:s,props:r,_owner:o}};B.createContext=function(t){return t={$$typeof:Ey,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:wy,_context:t},t.Consumer=t};B.createElement=jp;B.createFactory=function(t){var e=jp.bind(null,t);return e.type=t,e};B.createRef=function(){return{current:null}};B.forwardRef=function(t){return{$$typeof:Sy,render:t}};B.isValidElement=gc;B.lazy=function(t){return{$$typeof:ky,_payload:{_status:-1,_result:t},_init:Py}};B.memo=function(t,e){return{$$typeof:Iy,type:t,compare:e===void 0?null:e}};B.startTransition=function(t){var e=co.transition;co.transition={};try{t()}finally{co.transition=e}};B.unstable_act=zp;B.useCallback=function(t,e){return De.current.useCallback(t,e)};B.useContext=function(t){return De.current.useContext(t)};B.useDebugValue=function(){};B.useDeferredValue=function(t){return De.current.useDeferredValue(t)};B.useEffect=function(t,e){return De.current.useEffect(t,e)};B.useId=function(){return De.current.useId()};B.useImperativeHandle=function(t,e,n){return De.current.useImperativeHandle(t,e,n)};B.useInsertionEffect=function(t,e){return De.current.useInsertionEffect(t,e)};B.useLayoutEffect=function(t,e){return De.current.useLayoutEffect(t,e)};B.useMemo=function(t,e){return De.current.useMemo(t,e)};B.useReducer=function(t,e,n){return De.current.useReducer(t,e,n)};B.useRef=function(t){return De.current.useRef(t)};B.useState=function(t){return De.current.useState(t)};B.useSyncExternalStore=function(t,e,n){return De.current.useSyncExternalStore(t,e,n)};B.useTransition=function(){return De.current.useTransition()};B.version="18.3.1";Ap.exports=B;var S=Ap.exports;const Bp=my(S),Oy=py({__proto__:null,default:Bp},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ay=S,Dy=Symbol.for("react.element"),Ly=Symbol.for("react.fragment"),My=Object.prototype.hasOwnProperty,by=Ay.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Fy={key:!0,ref:!0,__self:!0,__source:!0};function Wp(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)My.call(e,r)&&!Fy.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Dy,type:t,key:s,ref:o,props:i,_owner:by.current}}Sl.Fragment=Ly;Sl.jsx=Wp;Sl.jsxs=Wp;Op.exports=Sl;var g=Op.exports,Qa={},Vp={exports:{}},qe={},$p={exports:{}},Hp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(R,M){var F=R.length;R.push(M);e:for(;0<F;){var se=F-1>>>1,pe=R[se];if(0<i(pe,M))R[se]=M,R[F]=pe,F=se;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var M=R[0],F=R.pop();if(F!==M){R[0]=F;e:for(var se=0,pe=R.length,Us=pe>>>1;se<Us;){var An=2*(se+1)-1,oa=R[An],Dn=An+1,js=R[Dn];if(0>i(oa,F))Dn<pe&&0>i(js,oa)?(R[se]=js,R[Dn]=F,se=Dn):(R[se]=oa,R[An]=F,se=An);else if(Dn<pe&&0>i(js,F))R[se]=js,R[Dn]=F,se=Dn;else break e}}return M}function i(R,M){var F=R.sortIndex-M.sortIndex;return F!==0?F:R.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],d=1,c=null,h=3,_=!1,v=!1,y=!1,E=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(R){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=R)r(u),M.sortIndex=M.expirationTime,e(a,M);else break;M=n(u)}}function w(R){if(y=!1,m(R),!v)if(n(a)!==null)v=!0,ar(T);else{var M=n(u);M!==null&&Fs(w,M.startTime-R)}}function T(R,M){v=!1,y&&(y=!1,p(O),O=-1),_=!0;var F=h;try{for(m(M),c=n(a);c!==null&&(!(c.expirationTime>M)||R&&!b());){var se=c.callback;if(typeof se=="function"){c.callback=null,h=c.priorityLevel;var pe=se(c.expirationTime<=M);M=t.unstable_now(),typeof pe=="function"?c.callback=pe:c===n(a)&&r(a),m(M)}else r(a);c=n(a)}if(c!==null)var Us=!0;else{var An=n(u);An!==null&&Fs(w,An.startTime-M),Us=!1}return Us}finally{c=null,h=F,_=!1}}var x=!1,N=null,O=-1,I=5,A=-1;function b(){return!(t.unstable_now()-A<I)}function X(){if(N!==null){var R=t.unstable_now();A=R;var M=!0;try{M=N(!0,R)}finally{M?fe():(x=!1,N=null)}}else x=!1}var fe;if(typeof f=="function")fe=function(){f(X)};else if(typeof MessageChannel<"u"){var bs=new MessageChannel,sa=bs.port2;bs.port1.onmessage=X,fe=function(){sa.postMessage(null)}}else fe=function(){E(X,0)};function ar(R){N=R,x||(x=!0,fe())}function Fs(R,M){O=E(function(){R(t.unstable_now())},M)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_continueExecution=function(){v||_||(v=!0,ar(T))},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<R?Math.floor(1e3/R):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(R){switch(h){case 1:case 2:case 3:var M=3;break;default:M=h}var F=h;h=M;try{return R()}finally{h=F}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(R,M){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var F=h;h=R;try{return M()}finally{h=F}},t.unstable_scheduleCallback=function(R,M,F){var se=t.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?se+F:se):F=se,R){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=F+pe,R={id:d++,callback:M,priorityLevel:R,startTime:F,expirationTime:pe,sortIndex:-1},F>se?(R.sortIndex=F,e(u,R),n(a)===null&&R===n(u)&&(y?(p(O),O=-1):y=!0,Fs(w,F-se))):(R.sortIndex=pe,e(a,R),v||_||(v=!0,ar(T))),R},t.unstable_shouldYield=b,t.unstable_wrapCallback=function(R){var M=h;return function(){var F=h;h=M;try{return R.apply(this,arguments)}finally{h=F}}}})(Hp);$p.exports=Hp;var Uy=$p.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jy=S,Ke=Uy;function C(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Gp=new Set,zi={};function ir(t,e){Fr(t,e),Fr(t+"Capture",e)}function Fr(t,e){for(zi[t]=e,t=0;t<e.length;t++)Gp.add(e[t])}var bt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ya=Object.prototype.hasOwnProperty,zy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,lh={},ah={};function By(t){return Ya.call(ah,t)?!0:Ya.call(lh,t)?!1:zy.test(t)?ah[t]=!0:(lh[t]=!0,!1)}function Wy(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Vy(t,e,n,r){if(e===null||typeof e>"u"||Wy(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Le(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ce[t]=new Le(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ce[e]=new Le(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ce[t]=new Le(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ce[t]=new Le(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ce[t]=new Le(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ce[t]=new Le(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ce[t]=new Le(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ce[t]=new Le(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ce[t]=new Le(t,5,!1,t.toLowerCase(),null,!1,!1)});var _c=/[\-:]([a-z])/g;function vc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(_c,vc);Ce[e]=new Le(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(_c,vc);Ce[e]=new Le(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(_c,vc);Ce[e]=new Le(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ce[t]=new Le(t,1,!1,t.toLowerCase(),null,!1,!1)});Ce.xlinkHref=new Le("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ce[t]=new Le(t,1,!1,t.toLowerCase(),null,!0,!0)});function yc(t,e,n,r){var i=Ce.hasOwnProperty(e)?Ce[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Vy(e,n,i,r)&&(n=null),r||i===null?By(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Wt=jy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Bs=Symbol.for("react.element"),hr=Symbol.for("react.portal"),fr=Symbol.for("react.fragment"),wc=Symbol.for("react.strict_mode"),Ja=Symbol.for("react.profiler"),Kp=Symbol.for("react.provider"),qp=Symbol.for("react.context"),Ec=Symbol.for("react.forward_ref"),Xa=Symbol.for("react.suspense"),Za=Symbol.for("react.suspense_list"),Sc=Symbol.for("react.memo"),qt=Symbol.for("react.lazy"),Qp=Symbol.for("react.offscreen"),uh=Symbol.iterator;function li(t){return t===null||typeof t!="object"?null:(t=uh&&t[uh]||t["@@iterator"],typeof t=="function"?t:null)}var ne=Object.assign,aa;function yi(t){if(aa===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);aa=e&&e[1]||""}return`
`+aa+t}var ua=!1;function ca(t,e){if(!t||ua)return"";ua=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{ua=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?yi(t):""}function $y(t){switch(t.tag){case 5:return yi(t.type);case 16:return yi("Lazy");case 13:return yi("Suspense");case 19:return yi("SuspenseList");case 0:case 2:case 15:return t=ca(t.type,!1),t;case 11:return t=ca(t.type.render,!1),t;case 1:return t=ca(t.type,!0),t;default:return""}}function eu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case fr:return"Fragment";case hr:return"Portal";case Ja:return"Profiler";case wc:return"StrictMode";case Xa:return"Suspense";case Za:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case qp:return(t.displayName||"Context")+".Consumer";case Kp:return(t._context.displayName||"Context")+".Provider";case Ec:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Sc:return e=t.displayName||null,e!==null?e:eu(t.type)||"Memo";case qt:e=t._payload,t=t._init;try{return eu(t(e))}catch{}}return null}function Hy(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return eu(e);case 8:return e===wc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function wn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Yp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Gy(t){var e=Yp(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ws(t){t._valueTracker||(t._valueTracker=Gy(t))}function Jp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Yp(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function No(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function tu(t,e){var n=e.checked;return ne({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ch(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=wn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Xp(t,e){e=e.checked,e!=null&&yc(t,"checked",e,!1)}function nu(t,e){Xp(t,e);var n=wn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ru(t,e.type,n):e.hasOwnProperty("defaultValue")&&ru(t,e.type,wn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function dh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ru(t,e,n){(e!=="number"||No(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var wi=Array.isArray;function Tr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+wn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function iu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(C(91));return ne({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function hh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(C(92));if(wi(n)){if(1<n.length)throw Error(C(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:wn(n)}}function Zp(t,e){var n=wn(e.value),r=wn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function fh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function em(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function su(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?em(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Vs,tm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Vs=Vs||document.createElement("div"),Vs.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Vs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Bi(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ki={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ky=["Webkit","ms","Moz","O"];Object.keys(ki).forEach(function(t){Ky.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ki[e]=ki[t]})});function nm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ki.hasOwnProperty(t)&&ki[t]?(""+e).trim():e+"px"}function rm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=nm(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var qy=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ou(t,e){if(e){if(qy[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(C(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(C(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(C(61))}if(e.style!=null&&typeof e.style!="object")throw Error(C(62))}}function lu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var au=null;function Cc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var uu=null,Nr=null,Rr=null;function ph(t){if(t=Es(t)){if(typeof uu!="function")throw Error(C(280));var e=t.stateNode;e&&(e=Nl(e),uu(t.stateNode,t.type,e))}}function im(t){Nr?Rr?Rr.push(t):Rr=[t]:Nr=t}function sm(){if(Nr){var t=Nr,e=Rr;if(Rr=Nr=null,ph(t),e)for(t=0;t<e.length;t++)ph(e[t])}}function om(t,e){return t(e)}function lm(){}var da=!1;function am(t,e,n){if(da)return t(e,n);da=!0;try{return om(t,e,n)}finally{da=!1,(Nr!==null||Rr!==null)&&(lm(),sm())}}function Wi(t,e){var n=t.stateNode;if(n===null)return null;var r=Nl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(C(231,e,typeof n));return n}var cu=!1;if(bt)try{var ai={};Object.defineProperty(ai,"passive",{get:function(){cu=!0}}),window.addEventListener("test",ai,ai),window.removeEventListener("test",ai,ai)}catch{cu=!1}function Qy(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var Ti=!1,Ro=null,Po=!1,du=null,Yy={onError:function(t){Ti=!0,Ro=t}};function Jy(t,e,n,r,i,s,o,l,a){Ti=!1,Ro=null,Qy.apply(Yy,arguments)}function Xy(t,e,n,r,i,s,o,l,a){if(Jy.apply(this,arguments),Ti){if(Ti){var u=Ro;Ti=!1,Ro=null}else throw Error(C(198));Po||(Po=!0,du=u)}}function sr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function um(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function mh(t){if(sr(t)!==t)throw Error(C(188))}function Zy(t){var e=t.alternate;if(!e){if(e=sr(t),e===null)throw Error(C(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return mh(i),t;if(s===r)return mh(i),e;s=s.sibling}throw Error(C(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?t:e}function cm(t){return t=Zy(t),t!==null?dm(t):null}function dm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=dm(t);if(e!==null)return e;t=t.sibling}return null}var hm=Ke.unstable_scheduleCallback,gh=Ke.unstable_cancelCallback,ew=Ke.unstable_shouldYield,tw=Ke.unstable_requestPaint,oe=Ke.unstable_now,nw=Ke.unstable_getCurrentPriorityLevel,Ic=Ke.unstable_ImmediatePriority,fm=Ke.unstable_UserBlockingPriority,xo=Ke.unstable_NormalPriority,rw=Ke.unstable_LowPriority,pm=Ke.unstable_IdlePriority,Cl=null,yt=null;function iw(t){if(yt&&typeof yt.onCommitFiberRoot=="function")try{yt.onCommitFiberRoot(Cl,t,void 0,(t.current.flags&128)===128)}catch{}}var ut=Math.clz32?Math.clz32:lw,sw=Math.log,ow=Math.LN2;function lw(t){return t>>>=0,t===0?32:31-(sw(t)/ow|0)|0}var $s=64,Hs=4194304;function Ei(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Oo(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Ei(l):(s&=o,s!==0&&(r=Ei(s)))}else o=n&~i,o!==0?r=Ei(o):s!==0&&(r=Ei(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-ut(e),i=1<<n,r|=t[n],e&=~i;return r}function aw(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function uw(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ut(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=aw(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function hu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function mm(){var t=$s;return $s<<=1,!($s&4194240)&&($s=64),t}function ha(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ys(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ut(e),t[e]=n}function cw(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-ut(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function kc(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-ut(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var $=0;function gm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var _m,Tc,vm,ym,wm,fu=!1,Gs=[],on=null,ln=null,an=null,Vi=new Map,$i=new Map,Yt=[],dw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _h(t,e){switch(t){case"focusin":case"focusout":on=null;break;case"dragenter":case"dragleave":ln=null;break;case"mouseover":case"mouseout":an=null;break;case"pointerover":case"pointerout":Vi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":$i.delete(e.pointerId)}}function ui(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Es(e),e!==null&&Tc(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function hw(t,e,n,r,i){switch(e){case"focusin":return on=ui(on,t,e,n,r,i),!0;case"dragenter":return ln=ui(ln,t,e,n,r,i),!0;case"mouseover":return an=ui(an,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Vi.set(s,ui(Vi.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,$i.set(s,ui($i.get(s)||null,t,e,n,r,i)),!0}return!1}function Em(t){var e=jn(t.target);if(e!==null){var n=sr(e);if(n!==null){if(e=n.tag,e===13){if(e=um(n),e!==null){t.blockedOn=e,wm(t.priority,function(){vm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ho(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=pu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);au=r,n.target.dispatchEvent(r),au=null}else return e=Es(n),e!==null&&Tc(e),t.blockedOn=n,!1;e.shift()}return!0}function vh(t,e,n){ho(t)&&n.delete(e)}function fw(){fu=!1,on!==null&&ho(on)&&(on=null),ln!==null&&ho(ln)&&(ln=null),an!==null&&ho(an)&&(an=null),Vi.forEach(vh),$i.forEach(vh)}function ci(t,e){t.blockedOn===e&&(t.blockedOn=null,fu||(fu=!0,Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority,fw)))}function Hi(t){function e(i){return ci(i,t)}if(0<Gs.length){ci(Gs[0],t);for(var n=1;n<Gs.length;n++){var r=Gs[n];r.blockedOn===t&&(r.blockedOn=null)}}for(on!==null&&ci(on,t),ln!==null&&ci(ln,t),an!==null&&ci(an,t),Vi.forEach(e),$i.forEach(e),n=0;n<Yt.length;n++)r=Yt[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Yt.length&&(n=Yt[0],n.blockedOn===null);)Em(n),n.blockedOn===null&&Yt.shift()}var Pr=Wt.ReactCurrentBatchConfig,Ao=!0;function pw(t,e,n,r){var i=$,s=Pr.transition;Pr.transition=null;try{$=1,Nc(t,e,n,r)}finally{$=i,Pr.transition=s}}function mw(t,e,n,r){var i=$,s=Pr.transition;Pr.transition=null;try{$=4,Nc(t,e,n,r)}finally{$=i,Pr.transition=s}}function Nc(t,e,n,r){if(Ao){var i=pu(t,e,n,r);if(i===null)Sa(t,e,r,Do,n),_h(t,r);else if(hw(i,t,e,n,r))r.stopPropagation();else if(_h(t,r),e&4&&-1<dw.indexOf(t)){for(;i!==null;){var s=Es(i);if(s!==null&&_m(s),s=pu(t,e,n,r),s===null&&Sa(t,e,r,Do,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Sa(t,e,r,null,n)}}var Do=null;function pu(t,e,n,r){if(Do=null,t=Cc(r),t=jn(t),t!==null)if(e=sr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=um(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Do=t,null}function Sm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(nw()){case Ic:return 1;case fm:return 4;case xo:case rw:return 16;case pm:return 536870912;default:return 16}default:return 16}}var nn=null,Rc=null,fo=null;function Cm(){if(fo)return fo;var t,e=Rc,n=e.length,r,i="value"in nn?nn.value:nn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return fo=i.slice(t,1<r?1-r:void 0)}function po(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ks(){return!0}function yh(){return!1}function Qe(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ks:yh,this.isPropagationStopped=yh,this}return ne(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ks)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ks)},persist:function(){},isPersistent:Ks}),e}var Yr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pc=Qe(Yr),ws=ne({},Yr,{view:0,detail:0}),gw=Qe(ws),fa,pa,di,Il=ne({},ws,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==di&&(di&&t.type==="mousemove"?(fa=t.screenX-di.screenX,pa=t.screenY-di.screenY):pa=fa=0,di=t),fa)},movementY:function(t){return"movementY"in t?t.movementY:pa}}),wh=Qe(Il),_w=ne({},Il,{dataTransfer:0}),vw=Qe(_w),yw=ne({},ws,{relatedTarget:0}),ma=Qe(yw),ww=ne({},Yr,{animationName:0,elapsedTime:0,pseudoElement:0}),Ew=Qe(ww),Sw=ne({},Yr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Cw=Qe(Sw),Iw=ne({},Yr,{data:0}),Eh=Qe(Iw),kw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Tw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rw(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Nw[t])?!!e[t]:!1}function xc(){return Rw}var Pw=ne({},ws,{key:function(t){if(t.key){var e=kw[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=po(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Tw[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xc,charCode:function(t){return t.type==="keypress"?po(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?po(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),xw=Qe(Pw),Ow=ne({},Il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sh=Qe(Ow),Aw=ne({},ws,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xc}),Dw=Qe(Aw),Lw=ne({},Yr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Mw=Qe(Lw),bw=ne({},Il,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Fw=Qe(bw),Uw=[9,13,27,32],Oc=bt&&"CompositionEvent"in window,Ni=null;bt&&"documentMode"in document&&(Ni=document.documentMode);var jw=bt&&"TextEvent"in window&&!Ni,Im=bt&&(!Oc||Ni&&8<Ni&&11>=Ni),Ch=" ",Ih=!1;function km(t,e){switch(t){case"keyup":return Uw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var pr=!1;function zw(t,e){switch(t){case"compositionend":return Tm(e);case"keypress":return e.which!==32?null:(Ih=!0,Ch);case"textInput":return t=e.data,t===Ch&&Ih?null:t;default:return null}}function Bw(t,e){if(pr)return t==="compositionend"||!Oc&&km(t,e)?(t=Cm(),fo=Rc=nn=null,pr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Im&&e.locale!=="ko"?null:e.data;default:return null}}var Ww={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Ww[t.type]:e==="textarea"}function Nm(t,e,n,r){im(r),e=Lo(e,"onChange"),0<e.length&&(n=new Pc("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ri=null,Gi=null;function Vw(t){Um(t,0)}function kl(t){var e=_r(t);if(Jp(e))return t}function $w(t,e){if(t==="change")return e}var Rm=!1;if(bt){var ga;if(bt){var _a="oninput"in document;if(!_a){var Th=document.createElement("div");Th.setAttribute("oninput","return;"),_a=typeof Th.oninput=="function"}ga=_a}else ga=!1;Rm=ga&&(!document.documentMode||9<document.documentMode)}function Nh(){Ri&&(Ri.detachEvent("onpropertychange",Pm),Gi=Ri=null)}function Pm(t){if(t.propertyName==="value"&&kl(Gi)){var e=[];Nm(e,Gi,t,Cc(t)),am(Vw,e)}}function Hw(t,e,n){t==="focusin"?(Nh(),Ri=e,Gi=n,Ri.attachEvent("onpropertychange",Pm)):t==="focusout"&&Nh()}function Gw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return kl(Gi)}function Kw(t,e){if(t==="click")return kl(e)}function qw(t,e){if(t==="input"||t==="change")return kl(e)}function Qw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ht=typeof Object.is=="function"?Object.is:Qw;function Ki(t,e){if(ht(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ya.call(e,i)||!ht(t[i],e[i]))return!1}return!0}function Rh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ph(t,e){var n=Rh(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Rh(n)}}function xm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?xm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Om(){for(var t=window,e=No();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=No(t.document)}return e}function Ac(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Yw(t){var e=Om(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&xm(n.ownerDocument.documentElement,n)){if(r!==null&&Ac(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Ph(n,s);var o=Ph(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Jw=bt&&"documentMode"in document&&11>=document.documentMode,mr=null,mu=null,Pi=null,gu=!1;function xh(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;gu||mr==null||mr!==No(r)||(r=mr,"selectionStart"in r&&Ac(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Pi&&Ki(Pi,r)||(Pi=r,r=Lo(mu,"onSelect"),0<r.length&&(e=new Pc("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=mr)))}function qs(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var gr={animationend:qs("Animation","AnimationEnd"),animationiteration:qs("Animation","AnimationIteration"),animationstart:qs("Animation","AnimationStart"),transitionend:qs("Transition","TransitionEnd")},va={},Am={};bt&&(Am=document.createElement("div").style,"AnimationEvent"in window||(delete gr.animationend.animation,delete gr.animationiteration.animation,delete gr.animationstart.animation),"TransitionEvent"in window||delete gr.transitionend.transition);function Tl(t){if(va[t])return va[t];if(!gr[t])return t;var e=gr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Am)return va[t]=e[n];return t}var Dm=Tl("animationend"),Lm=Tl("animationiteration"),Mm=Tl("animationstart"),bm=Tl("transitionend"),Fm=new Map,Oh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kn(t,e){Fm.set(t,e),ir(e,[t])}for(var ya=0;ya<Oh.length;ya++){var wa=Oh[ya],Xw=wa.toLowerCase(),Zw=wa[0].toUpperCase()+wa.slice(1);kn(Xw,"on"+Zw)}kn(Dm,"onAnimationEnd");kn(Lm,"onAnimationIteration");kn(Mm,"onAnimationStart");kn("dblclick","onDoubleClick");kn("focusin","onFocus");kn("focusout","onBlur");kn(bm,"onTransitionEnd");Fr("onMouseEnter",["mouseout","mouseover"]);Fr("onMouseLeave",["mouseout","mouseover"]);Fr("onPointerEnter",["pointerout","pointerover"]);Fr("onPointerLeave",["pointerout","pointerover"]);ir("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ir("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ir("onBeforeInput",["compositionend","keypress","textInput","paste"]);ir("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ir("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ir("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Si="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),e0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Si));function Ah(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Xy(r,e,void 0,t),t.currentTarget=null}function Um(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;Ah(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;Ah(i,l,u),s=a}}}if(Po)throw t=du,Po=!1,du=null,t}function Q(t,e){var n=e[Eu];n===void 0&&(n=e[Eu]=new Set);var r=t+"__bubble";n.has(r)||(jm(e,t,2,!1),n.add(r))}function Ea(t,e,n){var r=0;e&&(r|=4),jm(n,t,r,e)}var Qs="_reactListening"+Math.random().toString(36).slice(2);function qi(t){if(!t[Qs]){t[Qs]=!0,Gp.forEach(function(n){n!=="selectionchange"&&(e0.has(n)||Ea(n,!1,t),Ea(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Qs]||(e[Qs]=!0,Ea("selectionchange",!1,e))}}function jm(t,e,n,r){switch(Sm(e)){case 1:var i=pw;break;case 4:i=mw;break;default:i=Nc}n=i.bind(null,e,n,t),i=void 0,!cu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Sa(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=jn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}am(function(){var u=s,d=Cc(n),c=[];e:{var h=Fm.get(t);if(h!==void 0){var _=Pc,v=t;switch(t){case"keypress":if(po(n)===0)break e;case"keydown":case"keyup":_=xw;break;case"focusin":v="focus",_=ma;break;case"focusout":v="blur",_=ma;break;case"beforeblur":case"afterblur":_=ma;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=wh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=vw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=Dw;break;case Dm:case Lm:case Mm:_=Ew;break;case bm:_=Mw;break;case"scroll":_=gw;break;case"wheel":_=Fw;break;case"copy":case"cut":case"paste":_=Cw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Sh}var y=(e&4)!==0,E=!y&&t==="scroll",p=y?h!==null?h+"Capture":null:h;y=[];for(var f=u,m;f!==null;){m=f;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,p!==null&&(w=Wi(f,p),w!=null&&y.push(Qi(f,w,m)))),E)break;f=f.return}0<y.length&&(h=new _(h,v,null,n,d),c.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",h&&n!==au&&(v=n.relatedTarget||n.fromElement)&&(jn(v)||v[Ft]))break e;if((_||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,_?(v=n.relatedTarget||n.toElement,_=u,v=v?jn(v):null,v!==null&&(E=sr(v),v!==E||v.tag!==5&&v.tag!==6)&&(v=null)):(_=null,v=u),_!==v)){if(y=wh,w="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(y=Sh,w="onPointerLeave",p="onPointerEnter",f="pointer"),E=_==null?h:_r(_),m=v==null?h:_r(v),h=new y(w,f+"leave",_,n,d),h.target=E,h.relatedTarget=m,w=null,jn(d)===u&&(y=new y(p,f+"enter",v,n,d),y.target=m,y.relatedTarget=E,w=y),E=w,_&&v)t:{for(y=_,p=v,f=0,m=y;m;m=ur(m))f++;for(m=0,w=p;w;w=ur(w))m++;for(;0<f-m;)y=ur(y),f--;for(;0<m-f;)p=ur(p),m--;for(;f--;){if(y===p||p!==null&&y===p.alternate)break t;y=ur(y),p=ur(p)}y=null}else y=null;_!==null&&Dh(c,h,_,y,!1),v!==null&&E!==null&&Dh(c,E,v,y,!0)}}e:{if(h=u?_r(u):window,_=h.nodeName&&h.nodeName.toLowerCase(),_==="select"||_==="input"&&h.type==="file")var T=$w;else if(kh(h))if(Rm)T=qw;else{T=Gw;var x=Hw}else(_=h.nodeName)&&_.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(T=Kw);if(T&&(T=T(t,u))){Nm(c,T,n,d);break e}x&&x(t,h,u),t==="focusout"&&(x=h._wrapperState)&&x.controlled&&h.type==="number"&&ru(h,"number",h.value)}switch(x=u?_r(u):window,t){case"focusin":(kh(x)||x.contentEditable==="true")&&(mr=x,mu=u,Pi=null);break;case"focusout":Pi=mu=mr=null;break;case"mousedown":gu=!0;break;case"contextmenu":case"mouseup":case"dragend":gu=!1,xh(c,n,d);break;case"selectionchange":if(Jw)break;case"keydown":case"keyup":xh(c,n,d)}var N;if(Oc)e:{switch(t){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else pr?km(t,n)&&(O="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(Im&&n.locale!=="ko"&&(pr||O!=="onCompositionStart"?O==="onCompositionEnd"&&pr&&(N=Cm()):(nn=d,Rc="value"in nn?nn.value:nn.textContent,pr=!0)),x=Lo(u,O),0<x.length&&(O=new Eh(O,t,null,n,d),c.push({event:O,listeners:x}),N?O.data=N:(N=Tm(n),N!==null&&(O.data=N)))),(N=jw?zw(t,n):Bw(t,n))&&(u=Lo(u,"onBeforeInput"),0<u.length&&(d=new Eh("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=N))}Um(c,e)})}function Qi(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Lo(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Wi(t,n),s!=null&&r.unshift(Qi(t,s,i)),s=Wi(t,e),s!=null&&r.push(Qi(t,s,i))),t=t.return}return r}function ur(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Dh(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=Wi(n,s),a!=null&&o.unshift(Qi(n,a,l))):i||(a=Wi(n,s),a!=null&&o.push(Qi(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var t0=/\r\n?/g,n0=/\u0000|\uFFFD/g;function Lh(t){return(typeof t=="string"?t:""+t).replace(t0,`
`).replace(n0,"")}function Ys(t,e,n){if(e=Lh(e),Lh(t)!==e&&n)throw Error(C(425))}function Mo(){}var _u=null,vu=null;function yu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var wu=typeof setTimeout=="function"?setTimeout:void 0,r0=typeof clearTimeout=="function"?clearTimeout:void 0,Mh=typeof Promise=="function"?Promise:void 0,i0=typeof queueMicrotask=="function"?queueMicrotask:typeof Mh<"u"?function(t){return Mh.resolve(null).then(t).catch(s0)}:wu;function s0(t){setTimeout(function(){throw t})}function Ca(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Hi(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Hi(e)}function un(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function bh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Jr=Math.random().toString(36).slice(2),_t="__reactFiber$"+Jr,Yi="__reactProps$"+Jr,Ft="__reactContainer$"+Jr,Eu="__reactEvents$"+Jr,o0="__reactListeners$"+Jr,l0="__reactHandles$"+Jr;function jn(t){var e=t[_t];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ft]||n[_t]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=bh(t);t!==null;){if(n=t[_t])return n;t=bh(t)}return e}t=n,n=t.parentNode}return null}function Es(t){return t=t[_t]||t[Ft],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function _r(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(C(33))}function Nl(t){return t[Yi]||null}var Su=[],vr=-1;function Tn(t){return{current:t}}function J(t){0>vr||(t.current=Su[vr],Su[vr]=null,vr--)}function q(t,e){vr++,Su[vr]=t.current,t.current=e}var En={},Re=Tn(En),je=Tn(!1),Gn=En;function Ur(t,e){var n=t.type.contextTypes;if(!n)return En;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ze(t){return t=t.childContextTypes,t!=null}function bo(){J(je),J(Re)}function Fh(t,e,n){if(Re.current!==En)throw Error(C(168));q(Re,e),q(je,n)}function zm(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(C(108,Hy(t)||"Unknown",i));return ne({},n,r)}function Fo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||En,Gn=Re.current,q(Re,t),q(je,je.current),!0}function Uh(t,e,n){var r=t.stateNode;if(!r)throw Error(C(169));n?(t=zm(t,e,Gn),r.__reactInternalMemoizedMergedChildContext=t,J(je),J(Re),q(Re,t)):J(je),q(je,n)}var kt=null,Rl=!1,Ia=!1;function Bm(t){kt===null?kt=[t]:kt.push(t)}function a0(t){Rl=!0,Bm(t)}function Nn(){if(!Ia&&kt!==null){Ia=!0;var t=0,e=$;try{var n=kt;for($=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}kt=null,Rl=!1}catch(i){throw kt!==null&&(kt=kt.slice(t+1)),hm(Ic,Nn),i}finally{$=e,Ia=!1}}return null}var yr=[],wr=0,Uo=null,jo=0,Ye=[],Je=0,Kn=null,Tt=1,Nt="";function Ln(t,e){yr[wr++]=jo,yr[wr++]=Uo,Uo=t,jo=e}function Wm(t,e,n){Ye[Je++]=Tt,Ye[Je++]=Nt,Ye[Je++]=Kn,Kn=t;var r=Tt;t=Nt;var i=32-ut(r)-1;r&=~(1<<i),n+=1;var s=32-ut(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Tt=1<<32-ut(e)+i|n<<i|r,Nt=s+t}else Tt=1<<s|n<<i|r,Nt=t}function Dc(t){t.return!==null&&(Ln(t,1),Wm(t,1,0))}function Lc(t){for(;t===Uo;)Uo=yr[--wr],yr[wr]=null,jo=yr[--wr],yr[wr]=null;for(;t===Kn;)Kn=Ye[--Je],Ye[Je]=null,Nt=Ye[--Je],Ye[Je]=null,Tt=Ye[--Je],Ye[Je]=null}var Ge=null,He=null,Z=!1,st=null;function Vm(t,e){var n=Xe(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function jh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ge=t,He=un(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ge=t,He=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Kn!==null?{id:Tt,overflow:Nt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Xe(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ge=t,He=null,!0):!1;default:return!1}}function Cu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Iu(t){if(Z){var e=He;if(e){var n=e;if(!jh(t,e)){if(Cu(t))throw Error(C(418));e=un(n.nextSibling);var r=Ge;e&&jh(t,e)?Vm(r,n):(t.flags=t.flags&-4097|2,Z=!1,Ge=t)}}else{if(Cu(t))throw Error(C(418));t.flags=t.flags&-4097|2,Z=!1,Ge=t}}}function zh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ge=t}function Js(t){if(t!==Ge)return!1;if(!Z)return zh(t),Z=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!yu(t.type,t.memoizedProps)),e&&(e=He)){if(Cu(t))throw $m(),Error(C(418));for(;e;)Vm(t,e),e=un(e.nextSibling)}if(zh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(C(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){He=un(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}He=null}}else He=Ge?un(t.stateNode.nextSibling):null;return!0}function $m(){for(var t=He;t;)t=un(t.nextSibling)}function jr(){He=Ge=null,Z=!1}function Mc(t){st===null?st=[t]:st.push(t)}var u0=Wt.ReactCurrentBatchConfig;function hi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,t))}return t}function Xs(t,e){throw t=Object.prototype.toString.call(e),Error(C(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Bh(t){var e=t._init;return e(t._payload)}function Hm(t){function e(p,f){if(t){var m=p.deletions;m===null?(p.deletions=[f],p.flags|=16):m.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=fn(p,f),p.index=0,p.sibling=null,p}function s(p,f,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<f?(p.flags|=2,f):m):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function l(p,f,m,w){return f===null||f.tag!==6?(f=Oa(m,p.mode,w),f.return=p,f):(f=i(f,m),f.return=p,f)}function a(p,f,m,w){var T=m.type;return T===fr?d(p,f,m.props.children,w,m.key):f!==null&&(f.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===qt&&Bh(T)===f.type)?(w=i(f,m.props),w.ref=hi(p,f,m),w.return=p,w):(w=Eo(m.type,m.key,m.props,null,p.mode,w),w.ref=hi(p,f,m),w.return=p,w)}function u(p,f,m,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=Aa(m,p.mode,w),f.return=p,f):(f=i(f,m.children||[]),f.return=p,f)}function d(p,f,m,w,T){return f===null||f.tag!==7?(f=Hn(m,p.mode,w,T),f.return=p,f):(f=i(f,m),f.return=p,f)}function c(p,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Oa(""+f,p.mode,m),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Bs:return m=Eo(f.type,f.key,f.props,null,p.mode,m),m.ref=hi(p,null,f),m.return=p,m;case hr:return f=Aa(f,p.mode,m),f.return=p,f;case qt:var w=f._init;return c(p,w(f._payload),m)}if(wi(f)||li(f))return f=Hn(f,p.mode,m,null),f.return=p,f;Xs(p,f)}return null}function h(p,f,m,w){var T=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return T!==null?null:l(p,f,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Bs:return m.key===T?a(p,f,m,w):null;case hr:return m.key===T?u(p,f,m,w):null;case qt:return T=m._init,h(p,f,T(m._payload),w)}if(wi(m)||li(m))return T!==null?null:d(p,f,m,w,null);Xs(p,m)}return null}function _(p,f,m,w,T){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(m)||null,l(f,p,""+w,T);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Bs:return p=p.get(w.key===null?m:w.key)||null,a(f,p,w,T);case hr:return p=p.get(w.key===null?m:w.key)||null,u(f,p,w,T);case qt:var x=w._init;return _(p,f,m,x(w._payload),T)}if(wi(w)||li(w))return p=p.get(m)||null,d(f,p,w,T,null);Xs(f,w)}return null}function v(p,f,m,w){for(var T=null,x=null,N=f,O=f=0,I=null;N!==null&&O<m.length;O++){N.index>O?(I=N,N=null):I=N.sibling;var A=h(p,N,m[O],w);if(A===null){N===null&&(N=I);break}t&&N&&A.alternate===null&&e(p,N),f=s(A,f,O),x===null?T=A:x.sibling=A,x=A,N=I}if(O===m.length)return n(p,N),Z&&Ln(p,O),T;if(N===null){for(;O<m.length;O++)N=c(p,m[O],w),N!==null&&(f=s(N,f,O),x===null?T=N:x.sibling=N,x=N);return Z&&Ln(p,O),T}for(N=r(p,N);O<m.length;O++)I=_(N,p,O,m[O],w),I!==null&&(t&&I.alternate!==null&&N.delete(I.key===null?O:I.key),f=s(I,f,O),x===null?T=I:x.sibling=I,x=I);return t&&N.forEach(function(b){return e(p,b)}),Z&&Ln(p,O),T}function y(p,f,m,w){var T=li(m);if(typeof T!="function")throw Error(C(150));if(m=T.call(m),m==null)throw Error(C(151));for(var x=T=null,N=f,O=f=0,I=null,A=m.next();N!==null&&!A.done;O++,A=m.next()){N.index>O?(I=N,N=null):I=N.sibling;var b=h(p,N,A.value,w);if(b===null){N===null&&(N=I);break}t&&N&&b.alternate===null&&e(p,N),f=s(b,f,O),x===null?T=b:x.sibling=b,x=b,N=I}if(A.done)return n(p,N),Z&&Ln(p,O),T;if(N===null){for(;!A.done;O++,A=m.next())A=c(p,A.value,w),A!==null&&(f=s(A,f,O),x===null?T=A:x.sibling=A,x=A);return Z&&Ln(p,O),T}for(N=r(p,N);!A.done;O++,A=m.next())A=_(N,p,O,A.value,w),A!==null&&(t&&A.alternate!==null&&N.delete(A.key===null?O:A.key),f=s(A,f,O),x===null?T=A:x.sibling=A,x=A);return t&&N.forEach(function(X){return e(p,X)}),Z&&Ln(p,O),T}function E(p,f,m,w){if(typeof m=="object"&&m!==null&&m.type===fr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Bs:e:{for(var T=m.key,x=f;x!==null;){if(x.key===T){if(T=m.type,T===fr){if(x.tag===7){n(p,x.sibling),f=i(x,m.props.children),f.return=p,p=f;break e}}else if(x.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===qt&&Bh(T)===x.type){n(p,x.sibling),f=i(x,m.props),f.ref=hi(p,x,m),f.return=p,p=f;break e}n(p,x);break}else e(p,x);x=x.sibling}m.type===fr?(f=Hn(m.props.children,p.mode,w,m.key),f.return=p,p=f):(w=Eo(m.type,m.key,m.props,null,p.mode,w),w.ref=hi(p,f,m),w.return=p,p=w)}return o(p);case hr:e:{for(x=m.key;f!==null;){if(f.key===x)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(p,f.sibling),f=i(f,m.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=Aa(m,p.mode,w),f.return=p,p=f}return o(p);case qt:return x=m._init,E(p,f,x(m._payload),w)}if(wi(m))return v(p,f,m,w);if(li(m))return y(p,f,m,w);Xs(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,m),f.return=p,p=f):(n(p,f),f=Oa(m,p.mode,w),f.return=p,p=f),o(p)):n(p,f)}return E}var zr=Hm(!0),Gm=Hm(!1),zo=Tn(null),Bo=null,Er=null,bc=null;function Fc(){bc=Er=Bo=null}function Uc(t){var e=zo.current;J(zo),t._currentValue=e}function ku(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function xr(t,e){Bo=t,bc=Er=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Fe=!0),t.firstContext=null)}function et(t){var e=t._currentValue;if(bc!==t)if(t={context:t,memoizedValue:e,next:null},Er===null){if(Bo===null)throw Error(C(308));Er=t,Bo.dependencies={lanes:0,firstContext:t}}else Er=Er.next=t;return e}var zn=null;function jc(t){zn===null?zn=[t]:zn.push(t)}function Km(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,jc(e)):(n.next=i.next,i.next=n),e.interleaved=n,Ut(t,r)}function Ut(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Qt=!1;function zc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qm(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function At(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function cn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Ut(t,n)}return i=r.interleaved,i===null?(e.next=e,jc(r)):(e.next=i.next,i.next=e),r.interleaved=e,Ut(t,n)}function mo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,kc(t,n)}}function Wh(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Wo(t,e,n,r){var i=t.updateQueue;Qt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=a))}if(s!==null){var c=i.baseState;o=0,d=u=a=null,l=s;do{var h=l.lane,_=l.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:_,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=t,y=l;switch(h=e,_=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){c=v.call(_,c,h);break e}c=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,h=typeof v=="function"?v.call(_,c,h):v,h==null)break e;c=ne({},c,h);break e;case 2:Qt=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else _={eventTime:_,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=_,a=c):d=d.next=_,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(d===null&&(a=c),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Qn|=o,t.lanes=o,t.memoizedState=c}}function Vh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(C(191,i));i.call(r)}}}var Ss={},wt=Tn(Ss),Ji=Tn(Ss),Xi=Tn(Ss);function Bn(t){if(t===Ss)throw Error(C(174));return t}function Bc(t,e){switch(q(Xi,e),q(Ji,t),q(wt,Ss),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:su(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=su(e,t)}J(wt),q(wt,e)}function Br(){J(wt),J(Ji),J(Xi)}function Qm(t){Bn(Xi.current);var e=Bn(wt.current),n=su(e,t.type);e!==n&&(q(Ji,t),q(wt,n))}function Wc(t){Ji.current===t&&(J(wt),J(Ji))}var ee=Tn(0);function Vo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ka=[];function Vc(){for(var t=0;t<ka.length;t++)ka[t]._workInProgressVersionPrimary=null;ka.length=0}var go=Wt.ReactCurrentDispatcher,Ta=Wt.ReactCurrentBatchConfig,qn=0,te=null,ue=null,ge=null,$o=!1,xi=!1,Zi=0,c0=0;function Ie(){throw Error(C(321))}function $c(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ht(t[n],e[n]))return!1;return!0}function Hc(t,e,n,r,i,s){if(qn=s,te=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,go.current=t===null||t.memoizedState===null?p0:m0,t=n(r,i),xi){s=0;do{if(xi=!1,Zi=0,25<=s)throw Error(C(301));s+=1,ge=ue=null,e.updateQueue=null,go.current=g0,t=n(r,i)}while(xi)}if(go.current=Ho,e=ue!==null&&ue.next!==null,qn=0,ge=ue=te=null,$o=!1,e)throw Error(C(300));return t}function Gc(){var t=Zi!==0;return Zi=0,t}function gt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ge===null?te.memoizedState=ge=t:ge=ge.next=t,ge}function tt(){if(ue===null){var t=te.alternate;t=t!==null?t.memoizedState:null}else t=ue.next;var e=ge===null?te.memoizedState:ge.next;if(e!==null)ge=e,ue=t;else{if(t===null)throw Error(C(310));ue=t,t={memoizedState:ue.memoizedState,baseState:ue.baseState,baseQueue:ue.baseQueue,queue:ue.queue,next:null},ge===null?te.memoizedState=ge=t:ge=ge.next=t}return ge}function es(t,e){return typeof e=="function"?e(t):e}function Na(t){var e=tt(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=ue,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var d=u.lane;if((qn&d)===d)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=c,o=r):a=a.next=c,te.lanes|=d,Qn|=d}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,ht(r,e.memoizedState)||(Fe=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,te.lanes|=s,Qn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ra(t){var e=tt(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);ht(s,e.memoizedState)||(Fe=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Ym(){}function Jm(t,e){var n=te,r=tt(),i=e(),s=!ht(r.memoizedState,i);if(s&&(r.memoizedState=i,Fe=!0),r=r.queue,Kc(eg.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ge!==null&&ge.memoizedState.tag&1){if(n.flags|=2048,ts(9,Zm.bind(null,n,r,i,e),void 0,null),we===null)throw Error(C(349));qn&30||Xm(n,e,i)}return i}function Xm(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=te.updateQueue,e===null?(e={lastEffect:null,stores:null},te.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Zm(t,e,n,r){e.value=n,e.getSnapshot=r,tg(e)&&ng(t)}function eg(t,e,n){return n(function(){tg(e)&&ng(t)})}function tg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ht(t,n)}catch{return!0}}function ng(t){var e=Ut(t,1);e!==null&&ct(e,t,1,-1)}function $h(t){var e=gt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:es,lastRenderedState:t},e.queue=t,t=t.dispatch=f0.bind(null,te,t),[e.memoizedState,t]}function ts(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=te.updateQueue,e===null?(e={lastEffect:null,stores:null},te.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function rg(){return tt().memoizedState}function _o(t,e,n,r){var i=gt();te.flags|=t,i.memoizedState=ts(1|e,n,void 0,r===void 0?null:r)}function Pl(t,e,n,r){var i=tt();r=r===void 0?null:r;var s=void 0;if(ue!==null){var o=ue.memoizedState;if(s=o.destroy,r!==null&&$c(r,o.deps)){i.memoizedState=ts(e,n,s,r);return}}te.flags|=t,i.memoizedState=ts(1|e,n,s,r)}function Hh(t,e){return _o(8390656,8,t,e)}function Kc(t,e){return Pl(2048,8,t,e)}function ig(t,e){return Pl(4,2,t,e)}function sg(t,e){return Pl(4,4,t,e)}function og(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function lg(t,e,n){return n=n!=null?n.concat([t]):null,Pl(4,4,og.bind(null,e,t),n)}function qc(){}function ag(t,e){var n=tt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&$c(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function ug(t,e){var n=tt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&$c(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function cg(t,e,n){return qn&21?(ht(n,e)||(n=mm(),te.lanes|=n,Qn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Fe=!0),t.memoizedState=n)}function d0(t,e){var n=$;$=n!==0&&4>n?n:4,t(!0);var r=Ta.transition;Ta.transition={};try{t(!1),e()}finally{$=n,Ta.transition=r}}function dg(){return tt().memoizedState}function h0(t,e,n){var r=hn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},hg(t))fg(e,n);else if(n=Km(t,e,n,r),n!==null){var i=Ae();ct(n,t,r,i),pg(n,e,r)}}function f0(t,e,n){var r=hn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(hg(t))fg(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,ht(l,o)){var a=e.interleaved;a===null?(i.next=i,jc(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=Km(t,e,i,r),n!==null&&(i=Ae(),ct(n,t,r,i),pg(n,e,r))}}function hg(t){var e=t.alternate;return t===te||e!==null&&e===te}function fg(t,e){xi=$o=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function pg(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,kc(t,n)}}var Ho={readContext:et,useCallback:Ie,useContext:Ie,useEffect:Ie,useImperativeHandle:Ie,useInsertionEffect:Ie,useLayoutEffect:Ie,useMemo:Ie,useReducer:Ie,useRef:Ie,useState:Ie,useDebugValue:Ie,useDeferredValue:Ie,useTransition:Ie,useMutableSource:Ie,useSyncExternalStore:Ie,useId:Ie,unstable_isNewReconciler:!1},p0={readContext:et,useCallback:function(t,e){return gt().memoizedState=[t,e===void 0?null:e],t},useContext:et,useEffect:Hh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,_o(4194308,4,og.bind(null,e,t),n)},useLayoutEffect:function(t,e){return _o(4194308,4,t,e)},useInsertionEffect:function(t,e){return _o(4,2,t,e)},useMemo:function(t,e){var n=gt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=gt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=h0.bind(null,te,t),[r.memoizedState,t]},useRef:function(t){var e=gt();return t={current:t},e.memoizedState=t},useState:$h,useDebugValue:qc,useDeferredValue:function(t){return gt().memoizedState=t},useTransition:function(){var t=$h(!1),e=t[0];return t=d0.bind(null,t[1]),gt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=te,i=gt();if(Z){if(n===void 0)throw Error(C(407));n=n()}else{if(n=e(),we===null)throw Error(C(349));qn&30||Xm(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Hh(eg.bind(null,r,s,t),[t]),r.flags|=2048,ts(9,Zm.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=gt(),e=we.identifierPrefix;if(Z){var n=Nt,r=Tt;n=(r&~(1<<32-ut(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Zi++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=c0++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},m0={readContext:et,useCallback:ag,useContext:et,useEffect:Kc,useImperativeHandle:lg,useInsertionEffect:ig,useLayoutEffect:sg,useMemo:ug,useReducer:Na,useRef:rg,useState:function(){return Na(es)},useDebugValue:qc,useDeferredValue:function(t){var e=tt();return cg(e,ue.memoizedState,t)},useTransition:function(){var t=Na(es)[0],e=tt().memoizedState;return[t,e]},useMutableSource:Ym,useSyncExternalStore:Jm,useId:dg,unstable_isNewReconciler:!1},g0={readContext:et,useCallback:ag,useContext:et,useEffect:Kc,useImperativeHandle:lg,useInsertionEffect:ig,useLayoutEffect:sg,useMemo:ug,useReducer:Ra,useRef:rg,useState:function(){return Ra(es)},useDebugValue:qc,useDeferredValue:function(t){var e=tt();return ue===null?e.memoizedState=t:cg(e,ue.memoizedState,t)},useTransition:function(){var t=Ra(es)[0],e=tt().memoizedState;return[t,e]},useMutableSource:Ym,useSyncExternalStore:Jm,useId:dg,unstable_isNewReconciler:!1};function rt(t,e){if(t&&t.defaultProps){e=ne({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Tu(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ne({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var xl={isMounted:function(t){return(t=t._reactInternals)?sr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ae(),i=hn(t),s=At(r,i);s.payload=e,n!=null&&(s.callback=n),e=cn(t,s,i),e!==null&&(ct(e,t,i,r),mo(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ae(),i=hn(t),s=At(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=cn(t,s,i),e!==null&&(ct(e,t,i,r),mo(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ae(),r=hn(t),i=At(n,r);i.tag=2,e!=null&&(i.callback=e),e=cn(t,i,r),e!==null&&(ct(e,t,r,n),mo(e,t,r))}};function Gh(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ki(n,r)||!Ki(i,s):!0}function mg(t,e,n){var r=!1,i=En,s=e.contextType;return typeof s=="object"&&s!==null?s=et(s):(i=ze(e)?Gn:Re.current,r=e.contextTypes,s=(r=r!=null)?Ur(t,i):En),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=xl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Kh(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&xl.enqueueReplaceState(e,e.state,null)}function Nu(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},zc(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=et(s):(s=ze(e)?Gn:Re.current,i.context=Ur(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Tu(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&xl.enqueueReplaceState(i,i.state,null),Wo(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Wr(t,e){try{var n="",r=e;do n+=$y(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Pa(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ru(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var _0=typeof WeakMap=="function"?WeakMap:Map;function gg(t,e,n){n=At(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ko||(Ko=!0,Uu=r),Ru(t,e)},n}function _g(t,e,n){n=At(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Ru(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ru(t,e),typeof r!="function"&&(dn===null?dn=new Set([this]):dn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function qh(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new _0;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=O0.bind(null,t,e,n),e.then(t,t))}function Qh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Yh(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=At(-1,1),e.tag=2,cn(n,e,1))),n.lanes|=1),t)}var v0=Wt.ReactCurrentOwner,Fe=!1;function xe(t,e,n,r){e.child=t===null?Gm(e,null,n,r):zr(e,t.child,n,r)}function Jh(t,e,n,r,i){n=n.render;var s=e.ref;return xr(e,i),r=Hc(t,e,n,r,s,i),n=Gc(),t!==null&&!Fe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,jt(t,e,i)):(Z&&n&&Dc(e),e.flags|=1,xe(t,e,r,i),e.child)}function Xh(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!nd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,vg(t,e,s,r,i)):(t=Eo(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ki,n(o,r)&&t.ref===e.ref)return jt(t,e,i)}return e.flags|=1,t=fn(s,r),t.ref=e.ref,t.return=e,e.child=t}function vg(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ki(s,r)&&t.ref===e.ref)if(Fe=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Fe=!0);else return e.lanes=t.lanes,jt(t,e,i)}return Pu(t,e,n,r,i)}function yg(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},q(Cr,$e),$e|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,q(Cr,$e),$e|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,q(Cr,$e),$e|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,q(Cr,$e),$e|=r;return xe(t,e,i,n),e.child}function wg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Pu(t,e,n,r,i){var s=ze(n)?Gn:Re.current;return s=Ur(e,s),xr(e,i),n=Hc(t,e,n,r,s,i),r=Gc(),t!==null&&!Fe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,jt(t,e,i)):(Z&&r&&Dc(e),e.flags|=1,xe(t,e,n,i),e.child)}function Zh(t,e,n,r,i){if(ze(n)){var s=!0;Fo(e)}else s=!1;if(xr(e,i),e.stateNode===null)vo(t,e),mg(e,n,r),Nu(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=et(u):(u=ze(n)?Gn:Re.current,u=Ur(e,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&Kh(e,o,r,u),Qt=!1;var h=e.memoizedState;o.state=h,Wo(e,r,o,i),a=e.memoizedState,l!==r||h!==a||je.current||Qt?(typeof d=="function"&&(Tu(e,n,d,r),a=e.memoizedState),(l=Qt||Gh(e,n,l,r,h,a,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,qm(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:rt(e.type,l),o.props=u,c=e.pendingProps,h=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=et(a):(a=ze(n)?Gn:Re.current,a=Ur(e,a));var _=n.getDerivedStateFromProps;(d=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==c||h!==a)&&Kh(e,o,r,a),Qt=!1,h=e.memoizedState,o.state=h,Wo(e,r,o,i);var v=e.memoizedState;l!==c||h!==v||je.current||Qt?(typeof _=="function"&&(Tu(e,n,_,r),v=e.memoizedState),(u=Qt||Gh(e,n,u,r,h,v,a)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return xu(t,e,n,r,s,i)}function xu(t,e,n,r,i,s){wg(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Uh(e,n,!1),jt(t,e,s);r=e.stateNode,v0.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=zr(e,t.child,null,s),e.child=zr(e,null,l,s)):xe(t,e,l,s),e.memoizedState=r.state,i&&Uh(e,n,!0),e.child}function Eg(t){var e=t.stateNode;e.pendingContext?Fh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Fh(t,e.context,!1),Bc(t,e.containerInfo)}function ef(t,e,n,r,i){return jr(),Mc(i),e.flags|=256,xe(t,e,n,r),e.child}var Ou={dehydrated:null,treeContext:null,retryLane:0};function Au(t){return{baseLanes:t,cachePool:null,transitions:null}}function Sg(t,e,n){var r=e.pendingProps,i=ee.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),q(ee,i&1),t===null)return Iu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Dl(o,r,0,null),t=Hn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Au(n),e.memoizedState=Ou,t):Qc(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return y0(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=fn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=fn(l,s):(s=Hn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Au(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ou,r}return s=t.child,t=s.sibling,r=fn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Qc(t,e){return e=Dl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Zs(t,e,n,r){return r!==null&&Mc(r),zr(e,t.child,null,n),t=Qc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function y0(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Pa(Error(C(422))),Zs(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Dl({mode:"visible",children:r.children},i,0,null),s=Hn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&zr(e,t.child,null,o),e.child.memoizedState=Au(o),e.memoizedState=Ou,s);if(!(e.mode&1))return Zs(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(C(419)),r=Pa(s,r,void 0),Zs(t,e,o,r)}if(l=(o&t.childLanes)!==0,Fe||l){if(r=we,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Ut(t,i),ct(r,t,i,-1))}return td(),r=Pa(Error(C(421))),Zs(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=A0.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,He=un(i.nextSibling),Ge=e,Z=!0,st=null,t!==null&&(Ye[Je++]=Tt,Ye[Je++]=Nt,Ye[Je++]=Kn,Tt=t.id,Nt=t.overflow,Kn=e),e=Qc(e,r.children),e.flags|=4096,e)}function tf(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),ku(t.return,e,n)}function xa(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Cg(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(xe(t,e,r.children,n),r=ee.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&tf(t,n,e);else if(t.tag===19)tf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(q(ee,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Vo(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),xa(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Vo(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}xa(e,!0,n,null,s);break;case"together":xa(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function vo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function jt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Qn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(C(153));if(e.child!==null){for(t=e.child,n=fn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=fn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function w0(t,e,n){switch(e.tag){case 3:Eg(e),jr();break;case 5:Qm(e);break;case 1:ze(e.type)&&Fo(e);break;case 4:Bc(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;q(zo,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(q(ee,ee.current&1),e.flags|=128,null):n&e.child.childLanes?Sg(t,e,n):(q(ee,ee.current&1),t=jt(t,e,n),t!==null?t.sibling:null);q(ee,ee.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Cg(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),q(ee,ee.current),r)break;return null;case 22:case 23:return e.lanes=0,yg(t,e,n)}return jt(t,e,n)}var Ig,Du,kg,Tg;Ig=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Du=function(){};kg=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Bn(wt.current);var s=null;switch(n){case"input":i=tu(t,i),r=tu(t,r),s=[];break;case"select":i=ne({},i,{value:void 0}),r=ne({},r,{value:void 0}),s=[];break;case"textarea":i=iu(t,i),r=iu(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Mo)}ou(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(zi.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(zi.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&Q("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Tg=function(t,e,n,r){n!==r&&(e.flags|=4)};function fi(t,e){if(!Z)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ke(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function E0(t,e,n){var r=e.pendingProps;switch(Lc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ke(e),null;case 1:return ze(e.type)&&bo(),ke(e),null;case 3:return r=e.stateNode,Br(),J(je),J(Re),Vc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Js(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,st!==null&&(Bu(st),st=null))),Du(t,e),ke(e),null;case 5:Wc(e);var i=Bn(Xi.current);if(n=e.type,t!==null&&e.stateNode!=null)kg(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(C(166));return ke(e),null}if(t=Bn(wt.current),Js(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[_t]=e,r[Yi]=s,t=(e.mode&1)!==0,n){case"dialog":Q("cancel",r),Q("close",r);break;case"iframe":case"object":case"embed":Q("load",r);break;case"video":case"audio":for(i=0;i<Si.length;i++)Q(Si[i],r);break;case"source":Q("error",r);break;case"img":case"image":case"link":Q("error",r),Q("load",r);break;case"details":Q("toggle",r);break;case"input":ch(r,s),Q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Q("invalid",r);break;case"textarea":hh(r,s),Q("invalid",r)}ou(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Ys(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Ys(r.textContent,l,t),i=["children",""+l]):zi.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Q("scroll",r)}switch(n){case"input":Ws(r),dh(r,s,!0);break;case"textarea":Ws(r),fh(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Mo)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=em(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[_t]=e,t[Yi]=r,Ig(t,e,!1,!1),e.stateNode=t;e:{switch(o=lu(n,r),n){case"dialog":Q("cancel",t),Q("close",t),i=r;break;case"iframe":case"object":case"embed":Q("load",t),i=r;break;case"video":case"audio":for(i=0;i<Si.length;i++)Q(Si[i],t);i=r;break;case"source":Q("error",t),i=r;break;case"img":case"image":case"link":Q("error",t),Q("load",t),i=r;break;case"details":Q("toggle",t),i=r;break;case"input":ch(t,r),i=tu(t,r),Q("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ne({},r,{value:void 0}),Q("invalid",t);break;case"textarea":hh(t,r),i=iu(t,r),Q("invalid",t);break;default:i=r}ou(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?rm(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&tm(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Bi(t,a):typeof a=="number"&&Bi(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(zi.hasOwnProperty(s)?a!=null&&s==="onScroll"&&Q("scroll",t):a!=null&&yc(t,s,a,o))}switch(n){case"input":Ws(t),dh(t,r,!1);break;case"textarea":Ws(t),fh(t);break;case"option":r.value!=null&&t.setAttribute("value",""+wn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Tr(t,!!r.multiple,s,!1):r.defaultValue!=null&&Tr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Mo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ke(e),null;case 6:if(t&&e.stateNode!=null)Tg(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(C(166));if(n=Bn(Xi.current),Bn(wt.current),Js(e)){if(r=e.stateNode,n=e.memoizedProps,r[_t]=e,(s=r.nodeValue!==n)&&(t=Ge,t!==null))switch(t.tag){case 3:Ys(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ys(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[_t]=e,e.stateNode=r}return ke(e),null;case 13:if(J(ee),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Z&&He!==null&&e.mode&1&&!(e.flags&128))$m(),jr(),e.flags|=98560,s=!1;else if(s=Js(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(C(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(C(317));s[_t]=e}else jr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ke(e),s=!1}else st!==null&&(Bu(st),st=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ee.current&1?he===0&&(he=3):td())),e.updateQueue!==null&&(e.flags|=4),ke(e),null);case 4:return Br(),Du(t,e),t===null&&qi(e.stateNode.containerInfo),ke(e),null;case 10:return Uc(e.type._context),ke(e),null;case 17:return ze(e.type)&&bo(),ke(e),null;case 19:if(J(ee),s=e.memoizedState,s===null)return ke(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)fi(s,!1);else{if(he!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Vo(t),o!==null){for(e.flags|=128,fi(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return q(ee,ee.current&1|2),e.child}t=t.sibling}s.tail!==null&&oe()>Vr&&(e.flags|=128,r=!0,fi(s,!1),e.lanes=4194304)}else{if(!r)if(t=Vo(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),fi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Z)return ke(e),null}else 2*oe()-s.renderingStartTime>Vr&&n!==1073741824&&(e.flags|=128,r=!0,fi(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=oe(),e.sibling=null,n=ee.current,q(ee,r?n&1|2:n&1),e):(ke(e),null);case 22:case 23:return ed(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?$e&1073741824&&(ke(e),e.subtreeFlags&6&&(e.flags|=8192)):ke(e),null;case 24:return null;case 25:return null}throw Error(C(156,e.tag))}function S0(t,e){switch(Lc(e),e.tag){case 1:return ze(e.type)&&bo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Br(),J(je),J(Re),Vc(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Wc(e),null;case 13:if(J(ee),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(C(340));jr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return J(ee),null;case 4:return Br(),null;case 10:return Uc(e.type._context),null;case 22:case 23:return ed(),null;case 24:return null;default:return null}}var eo=!1,Te=!1,C0=typeof WeakSet=="function"?WeakSet:Set,P=null;function Sr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){re(t,e,r)}else n.current=null}function Lu(t,e,n){try{n()}catch(r){re(t,e,r)}}var nf=!1;function I0(t,e){if(_u=Ao,t=Om(),Ac(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,d=0,c=t,h=null;t:for(;;){for(var _;c!==n||i!==0&&c.nodeType!==3||(l=o+i),c!==s||r!==0&&c.nodeType!==3||(a=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(_=c.firstChild)!==null;)h=c,c=_;for(;;){if(c===t)break t;if(h===n&&++u===i&&(l=o),h===s&&++d===r&&(a=o),(_=c.nextSibling)!==null)break;c=h,h=c.parentNode}c=_}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(vu={focusedElem:t,selectionRange:n},Ao=!1,P=e;P!==null;)if(e=P,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,P=t;else for(;P!==null;){e=P;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,E=v.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?y:rt(e.type,y),E);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(w){re(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,P=t;break}P=e.return}return v=nf,nf=!1,v}function Oi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Lu(e,n,s)}i=i.next}while(i!==r)}}function Ol(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Mu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Ng(t){var e=t.alternate;e!==null&&(t.alternate=null,Ng(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[_t],delete e[Yi],delete e[Eu],delete e[o0],delete e[l0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Rg(t){return t.tag===5||t.tag===3||t.tag===4}function rf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Rg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function bu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Mo));else if(r!==4&&(t=t.child,t!==null))for(bu(t,e,n),t=t.sibling;t!==null;)bu(t,e,n),t=t.sibling}function Fu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Fu(t,e,n),t=t.sibling;t!==null;)Fu(t,e,n),t=t.sibling}var Ee=null,it=!1;function Gt(t,e,n){for(n=n.child;n!==null;)Pg(t,e,n),n=n.sibling}function Pg(t,e,n){if(yt&&typeof yt.onCommitFiberUnmount=="function")try{yt.onCommitFiberUnmount(Cl,n)}catch{}switch(n.tag){case 5:Te||Sr(n,e);case 6:var r=Ee,i=it;Ee=null,Gt(t,e,n),Ee=r,it=i,Ee!==null&&(it?(t=Ee,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ee.removeChild(n.stateNode));break;case 18:Ee!==null&&(it?(t=Ee,n=n.stateNode,t.nodeType===8?Ca(t.parentNode,n):t.nodeType===1&&Ca(t,n),Hi(t)):Ca(Ee,n.stateNode));break;case 4:r=Ee,i=it,Ee=n.stateNode.containerInfo,it=!0,Gt(t,e,n),Ee=r,it=i;break;case 0:case 11:case 14:case 15:if(!Te&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Lu(n,e,o),i=i.next}while(i!==r)}Gt(t,e,n);break;case 1:if(!Te&&(Sr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){re(n,e,l)}Gt(t,e,n);break;case 21:Gt(t,e,n);break;case 22:n.mode&1?(Te=(r=Te)||n.memoizedState!==null,Gt(t,e,n),Te=r):Gt(t,e,n);break;default:Gt(t,e,n)}}function sf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new C0),e.forEach(function(r){var i=D0.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function nt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ee=l.stateNode,it=!1;break e;case 3:Ee=l.stateNode.containerInfo,it=!0;break e;case 4:Ee=l.stateNode.containerInfo,it=!0;break e}l=l.return}if(Ee===null)throw Error(C(160));Pg(s,o,i),Ee=null,it=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){re(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)xg(e,t),e=e.sibling}function xg(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(nt(e,t),pt(t),r&4){try{Oi(3,t,t.return),Ol(3,t)}catch(y){re(t,t.return,y)}try{Oi(5,t,t.return)}catch(y){re(t,t.return,y)}}break;case 1:nt(e,t),pt(t),r&512&&n!==null&&Sr(n,n.return);break;case 5:if(nt(e,t),pt(t),r&512&&n!==null&&Sr(n,n.return),t.flags&32){var i=t.stateNode;try{Bi(i,"")}catch(y){re(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Xp(i,s),lu(l,o);var u=lu(l,s);for(o=0;o<a.length;o+=2){var d=a[o],c=a[o+1];d==="style"?rm(i,c):d==="dangerouslySetInnerHTML"?tm(i,c):d==="children"?Bi(i,c):yc(i,d,c,u)}switch(l){case"input":nu(i,s);break;case"textarea":Zp(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?Tr(i,!!s.multiple,_,!1):h!==!!s.multiple&&(s.defaultValue!=null?Tr(i,!!s.multiple,s.defaultValue,!0):Tr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Yi]=s}catch(y){re(t,t.return,y)}}break;case 6:if(nt(e,t),pt(t),r&4){if(t.stateNode===null)throw Error(C(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){re(t,t.return,y)}}break;case 3:if(nt(e,t),pt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Hi(e.containerInfo)}catch(y){re(t,t.return,y)}break;case 4:nt(e,t),pt(t);break;case 13:nt(e,t),pt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Xc=oe())),r&4&&sf(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Te=(u=Te)||d,nt(e,t),Te=u):nt(e,t),pt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(P=t,d=t.child;d!==null;){for(c=P=d;P!==null;){switch(h=P,_=h.child,h.tag){case 0:case 11:case 14:case 15:Oi(4,h,h.return);break;case 1:Sr(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){re(r,n,y)}}break;case 5:Sr(h,h.return);break;case 22:if(h.memoizedState!==null){lf(c);continue}}_!==null?(_.return=h,P=_):lf(c)}d=d.sibling}e:for(d=null,c=t;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=c.stateNode,a=c.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=nm("display",o))}catch(y){re(t,t.return,y)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(y){re(t,t.return,y)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:nt(e,t),pt(t),r&4&&sf(t);break;case 21:break;default:nt(e,t),pt(t)}}function pt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Rg(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Bi(i,""),r.flags&=-33);var s=rf(t);Fu(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=rf(t);bu(t,l,o);break;default:throw Error(C(161))}}catch(a){re(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function k0(t,e,n){P=t,Og(t)}function Og(t,e,n){for(var r=(t.mode&1)!==0;P!==null;){var i=P,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||eo;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Te;l=eo;var u=Te;if(eo=o,(Te=a)&&!u)for(P=i;P!==null;)o=P,a=o.child,o.tag===22&&o.memoizedState!==null?af(i):a!==null?(a.return=o,P=a):af(i);for(;s!==null;)P=s,Og(s),s=s.sibling;P=i,eo=l,Te=u}of(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,P=s):of(t)}}function of(t){for(;P!==null;){var e=P;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Te||Ol(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Te)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:rt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Vh(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Vh(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&Hi(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}Te||e.flags&512&&Mu(e)}catch(h){re(e,e.return,h)}}if(e===t){P=null;break}if(n=e.sibling,n!==null){n.return=e.return,P=n;break}P=e.return}}function lf(t){for(;P!==null;){var e=P;if(e===t){P=null;break}var n=e.sibling;if(n!==null){n.return=e.return,P=n;break}P=e.return}}function af(t){for(;P!==null;){var e=P;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ol(4,e)}catch(a){re(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){re(e,i,a)}}var s=e.return;try{Mu(e)}catch(a){re(e,s,a)}break;case 5:var o=e.return;try{Mu(e)}catch(a){re(e,o,a)}}}catch(a){re(e,e.return,a)}if(e===t){P=null;break}var l=e.sibling;if(l!==null){l.return=e.return,P=l;break}P=e.return}}var T0=Math.ceil,Go=Wt.ReactCurrentDispatcher,Yc=Wt.ReactCurrentOwner,Ze=Wt.ReactCurrentBatchConfig,W=0,we=null,ae=null,Se=0,$e=0,Cr=Tn(0),he=0,ns=null,Qn=0,Al=0,Jc=0,Ai=null,be=null,Xc=0,Vr=1/0,It=null,Ko=!1,Uu=null,dn=null,to=!1,rn=null,qo=0,Di=0,ju=null,yo=-1,wo=0;function Ae(){return W&6?oe():yo!==-1?yo:yo=oe()}function hn(t){return t.mode&1?W&2&&Se!==0?Se&-Se:u0.transition!==null?(wo===0&&(wo=mm()),wo):(t=$,t!==0||(t=window.event,t=t===void 0?16:Sm(t.type)),t):1}function ct(t,e,n,r){if(50<Di)throw Di=0,ju=null,Error(C(185));ys(t,n,r),(!(W&2)||t!==we)&&(t===we&&(!(W&2)&&(Al|=n),he===4&&Jt(t,Se)),Be(t,r),n===1&&W===0&&!(e.mode&1)&&(Vr=oe()+500,Rl&&Nn()))}function Be(t,e){var n=t.callbackNode;uw(t,e);var r=Oo(t,t===we?Se:0);if(r===0)n!==null&&gh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&gh(n),e===1)t.tag===0?a0(uf.bind(null,t)):Bm(uf.bind(null,t)),i0(function(){!(W&6)&&Nn()}),n=null;else{switch(gm(r)){case 1:n=Ic;break;case 4:n=fm;break;case 16:n=xo;break;case 536870912:n=pm;break;default:n=xo}n=jg(n,Ag.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Ag(t,e){if(yo=-1,wo=0,W&6)throw Error(C(327));var n=t.callbackNode;if(Or()&&t.callbackNode!==n)return null;var r=Oo(t,t===we?Se:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Qo(t,r);else{e=r;var i=W;W|=2;var s=Lg();(we!==t||Se!==e)&&(It=null,Vr=oe()+500,$n(t,e));do try{P0();break}catch(l){Dg(t,l)}while(!0);Fc(),Go.current=s,W=i,ae!==null?e=0:(we=null,Se=0,e=he)}if(e!==0){if(e===2&&(i=hu(t),i!==0&&(r=i,e=zu(t,i))),e===1)throw n=ns,$n(t,0),Jt(t,r),Be(t,oe()),n;if(e===6)Jt(t,r);else{if(i=t.current.alternate,!(r&30)&&!N0(i)&&(e=Qo(t,r),e===2&&(s=hu(t),s!==0&&(r=s,e=zu(t,s))),e===1))throw n=ns,$n(t,0),Jt(t,r),Be(t,oe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(C(345));case 2:Mn(t,be,It);break;case 3:if(Jt(t,r),(r&130023424)===r&&(e=Xc+500-oe(),10<e)){if(Oo(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ae(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=wu(Mn.bind(null,t,be,It),e);break}Mn(t,be,It);break;case 4:if(Jt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-ut(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*T0(r/1960))-r,10<r){t.timeoutHandle=wu(Mn.bind(null,t,be,It),r);break}Mn(t,be,It);break;case 5:Mn(t,be,It);break;default:throw Error(C(329))}}}return Be(t,oe()),t.callbackNode===n?Ag.bind(null,t):null}function zu(t,e){var n=Ai;return t.current.memoizedState.isDehydrated&&($n(t,e).flags|=256),t=Qo(t,e),t!==2&&(e=be,be=n,e!==null&&Bu(e)),t}function Bu(t){be===null?be=t:be.push.apply(be,t)}function N0(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!ht(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Jt(t,e){for(e&=~Jc,e&=~Al,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ut(e),r=1<<n;t[n]=-1,e&=~r}}function uf(t){if(W&6)throw Error(C(327));Or();var e=Oo(t,0);if(!(e&1))return Be(t,oe()),null;var n=Qo(t,e);if(t.tag!==0&&n===2){var r=hu(t);r!==0&&(e=r,n=zu(t,r))}if(n===1)throw n=ns,$n(t,0),Jt(t,e),Be(t,oe()),n;if(n===6)throw Error(C(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Mn(t,be,It),Be(t,oe()),null}function Zc(t,e){var n=W;W|=1;try{return t(e)}finally{W=n,W===0&&(Vr=oe()+500,Rl&&Nn())}}function Yn(t){rn!==null&&rn.tag===0&&!(W&6)&&Or();var e=W;W|=1;var n=Ze.transition,r=$;try{if(Ze.transition=null,$=1,t)return t()}finally{$=r,Ze.transition=n,W=e,!(W&6)&&Nn()}}function ed(){$e=Cr.current,J(Cr)}function $n(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,r0(n)),ae!==null)for(n=ae.return;n!==null;){var r=n;switch(Lc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&bo();break;case 3:Br(),J(je),J(Re),Vc();break;case 5:Wc(r);break;case 4:Br();break;case 13:J(ee);break;case 19:J(ee);break;case 10:Uc(r.type._context);break;case 22:case 23:ed()}n=n.return}if(we=t,ae=t=fn(t.current,null),Se=$e=e,he=0,ns=null,Jc=Al=Qn=0,be=Ai=null,zn!==null){for(e=0;e<zn.length;e++)if(n=zn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}zn=null}return t}function Dg(t,e){do{var n=ae;try{if(Fc(),go.current=Ho,$o){for(var r=te.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}$o=!1}if(qn=0,ge=ue=te=null,xi=!1,Zi=0,Yc.current=null,n===null||n.return===null){he=1,ns=e,ae=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=Se,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,d=l,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var _=Qh(o);if(_!==null){_.flags&=-257,Yh(_,o,l,s,e),_.mode&1&&qh(s,u,e),e=_,a=u;var v=e.updateQueue;if(v===null){var y=new Set;y.add(a),e.updateQueue=y}else v.add(a);break e}else{if(!(e&1)){qh(s,u,e),td();break e}a=Error(C(426))}}else if(Z&&l.mode&1){var E=Qh(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Yh(E,o,l,s,e),Mc(Wr(a,l));break e}}s=a=Wr(a,l),he!==4&&(he=2),Ai===null?Ai=[s]:Ai.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=gg(s,a,e);Wh(s,p);break e;case 1:l=a;var f=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(dn===null||!dn.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=_g(s,l,e);Wh(s,w);break e}}s=s.return}while(s!==null)}bg(n)}catch(T){e=T,ae===n&&n!==null&&(ae=n=n.return);continue}break}while(!0)}function Lg(){var t=Go.current;return Go.current=Ho,t===null?Ho:t}function td(){(he===0||he===3||he===2)&&(he=4),we===null||!(Qn&268435455)&&!(Al&268435455)||Jt(we,Se)}function Qo(t,e){var n=W;W|=2;var r=Lg();(we!==t||Se!==e)&&(It=null,$n(t,e));do try{R0();break}catch(i){Dg(t,i)}while(!0);if(Fc(),W=n,Go.current=r,ae!==null)throw Error(C(261));return we=null,Se=0,he}function R0(){for(;ae!==null;)Mg(ae)}function P0(){for(;ae!==null&&!ew();)Mg(ae)}function Mg(t){var e=Ug(t.alternate,t,$e);t.memoizedProps=t.pendingProps,e===null?bg(t):ae=e,Yc.current=null}function bg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=S0(n,e),n!==null){n.flags&=32767,ae=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{he=6,ae=null;return}}else if(n=E0(n,e,$e),n!==null){ae=n;return}if(e=e.sibling,e!==null){ae=e;return}ae=e=t}while(e!==null);he===0&&(he=5)}function Mn(t,e,n){var r=$,i=Ze.transition;try{Ze.transition=null,$=1,x0(t,e,n,r)}finally{Ze.transition=i,$=r}return null}function x0(t,e,n,r){do Or();while(rn!==null);if(W&6)throw Error(C(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(C(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(cw(t,s),t===we&&(ae=we=null,Se=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||to||(to=!0,jg(xo,function(){return Or(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ze.transition,Ze.transition=null;var o=$;$=1;var l=W;W|=4,Yc.current=null,I0(t,n),xg(n,t),Yw(vu),Ao=!!_u,vu=_u=null,t.current=n,k0(n),tw(),W=l,$=o,Ze.transition=s}else t.current=n;if(to&&(to=!1,rn=t,qo=i),s=t.pendingLanes,s===0&&(dn=null),iw(n.stateNode),Be(t,oe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ko)throw Ko=!1,t=Uu,Uu=null,t;return qo&1&&t.tag!==0&&Or(),s=t.pendingLanes,s&1?t===ju?Di++:(Di=0,ju=t):Di=0,Nn(),null}function Or(){if(rn!==null){var t=gm(qo),e=Ze.transition,n=$;try{if(Ze.transition=null,$=16>t?16:t,rn===null)var r=!1;else{if(t=rn,rn=null,qo=0,W&6)throw Error(C(331));var i=W;for(W|=4,P=t.current;P!==null;){var s=P,o=s.child;if(P.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(P=u;P!==null;){var d=P;switch(d.tag){case 0:case 11:case 15:Oi(8,d,s)}var c=d.child;if(c!==null)c.return=d,P=c;else for(;P!==null;){d=P;var h=d.sibling,_=d.return;if(Ng(d),d===u){P=null;break}if(h!==null){h.return=_,P=h;break}P=_}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var E=y.sibling;y.sibling=null,y=E}while(y!==null)}}P=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,P=o;else e:for(;P!==null;){if(s=P,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Oi(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,P=p;break e}P=s.return}}var f=t.current;for(P=f;P!==null;){o=P;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,P=m;else e:for(o=f;P!==null;){if(l=P,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ol(9,l)}}catch(T){re(l,l.return,T)}if(l===o){P=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,P=w;break e}P=l.return}}if(W=i,Nn(),yt&&typeof yt.onPostCommitFiberRoot=="function")try{yt.onPostCommitFiberRoot(Cl,t)}catch{}r=!0}return r}finally{$=n,Ze.transition=e}}return!1}function cf(t,e,n){e=Wr(n,e),e=gg(t,e,1),t=cn(t,e,1),e=Ae(),t!==null&&(ys(t,1,e),Be(t,e))}function re(t,e,n){if(t.tag===3)cf(t,t,n);else for(;e!==null;){if(e.tag===3){cf(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(dn===null||!dn.has(r))){t=Wr(n,t),t=_g(e,t,1),e=cn(e,t,1),t=Ae(),e!==null&&(ys(e,1,t),Be(e,t));break}}e=e.return}}function O0(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ae(),t.pingedLanes|=t.suspendedLanes&n,we===t&&(Se&n)===n&&(he===4||he===3&&(Se&130023424)===Se&&500>oe()-Xc?$n(t,0):Jc|=n),Be(t,e)}function Fg(t,e){e===0&&(t.mode&1?(e=Hs,Hs<<=1,!(Hs&130023424)&&(Hs=4194304)):e=1);var n=Ae();t=Ut(t,e),t!==null&&(ys(t,e,n),Be(t,n))}function A0(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Fg(t,n)}function D0(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(e),Fg(t,n)}var Ug;Ug=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||je.current)Fe=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Fe=!1,w0(t,e,n);Fe=!!(t.flags&131072)}else Fe=!1,Z&&e.flags&1048576&&Wm(e,jo,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;vo(t,e),t=e.pendingProps;var i=Ur(e,Re.current);xr(e,n),i=Hc(null,e,r,t,i,n);var s=Gc();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ze(r)?(s=!0,Fo(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,zc(e),i.updater=xl,e.stateNode=i,i._reactInternals=e,Nu(e,r,t,n),e=xu(null,e,r,!0,s,n)):(e.tag=0,Z&&s&&Dc(e),xe(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(vo(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=M0(r),t=rt(r,t),i){case 0:e=Pu(null,e,r,t,n);break e;case 1:e=Zh(null,e,r,t,n);break e;case 11:e=Jh(null,e,r,t,n);break e;case 14:e=Xh(null,e,r,rt(r.type,t),n);break e}throw Error(C(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rt(r,i),Pu(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rt(r,i),Zh(t,e,r,i,n);case 3:e:{if(Eg(e),t===null)throw Error(C(387));r=e.pendingProps,s=e.memoizedState,i=s.element,qm(t,e),Wo(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Wr(Error(C(423)),e),e=ef(t,e,r,n,i);break e}else if(r!==i){i=Wr(Error(C(424)),e),e=ef(t,e,r,n,i);break e}else for(He=un(e.stateNode.containerInfo.firstChild),Ge=e,Z=!0,st=null,n=Gm(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(jr(),r===i){e=jt(t,e,n);break e}xe(t,e,r,n)}e=e.child}return e;case 5:return Qm(e),t===null&&Iu(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,yu(r,i)?o=null:s!==null&&yu(r,s)&&(e.flags|=32),wg(t,e),xe(t,e,o,n),e.child;case 6:return t===null&&Iu(e),null;case 13:return Sg(t,e,n);case 4:return Bc(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=zr(e,null,r,n):xe(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rt(r,i),Jh(t,e,r,i,n);case 7:return xe(t,e,e.pendingProps,n),e.child;case 8:return xe(t,e,e.pendingProps.children,n),e.child;case 12:return xe(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,q(zo,r._currentValue),r._currentValue=o,s!==null)if(ht(s.value,o)){if(s.children===i.children&&!je.current){e=jt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=At(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),ku(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(C(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),ku(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}xe(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,xr(e,n),i=et(i),r=r(i),e.flags|=1,xe(t,e,r,n),e.child;case 14:return r=e.type,i=rt(r,e.pendingProps),i=rt(r.type,i),Xh(t,e,r,i,n);case 15:return vg(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rt(r,i),vo(t,e),e.tag=1,ze(r)?(t=!0,Fo(e)):t=!1,xr(e,n),mg(e,r,i),Nu(e,r,i,n),xu(null,e,r,!0,t,n);case 19:return Cg(t,e,n);case 22:return yg(t,e,n)}throw Error(C(156,e.tag))};function jg(t,e){return hm(t,e)}function L0(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xe(t,e,n,r){return new L0(t,e,n,r)}function nd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function M0(t){if(typeof t=="function")return nd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ec)return 11;if(t===Sc)return 14}return 2}function fn(t,e){var n=t.alternate;return n===null?(n=Xe(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Eo(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")nd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case fr:return Hn(n.children,i,s,e);case wc:o=8,i|=8;break;case Ja:return t=Xe(12,n,e,i|2),t.elementType=Ja,t.lanes=s,t;case Xa:return t=Xe(13,n,e,i),t.elementType=Xa,t.lanes=s,t;case Za:return t=Xe(19,n,e,i),t.elementType=Za,t.lanes=s,t;case Qp:return Dl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Kp:o=10;break e;case qp:o=9;break e;case Ec:o=11;break e;case Sc:o=14;break e;case qt:o=16,r=null;break e}throw Error(C(130,t==null?t:typeof t,""))}return e=Xe(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Hn(t,e,n,r){return t=Xe(7,t,r,e),t.lanes=n,t}function Dl(t,e,n,r){return t=Xe(22,t,r,e),t.elementType=Qp,t.lanes=n,t.stateNode={isHidden:!1},t}function Oa(t,e,n){return t=Xe(6,t,null,e),t.lanes=n,t}function Aa(t,e,n){return e=Xe(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function b0(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ha(0),this.expirationTimes=ha(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ha(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function rd(t,e,n,r,i,s,o,l,a){return t=new b0(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Xe(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},zc(s),t}function F0(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:hr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function zg(t){if(!t)return En;t=t._reactInternals;e:{if(sr(t)!==t||t.tag!==1)throw Error(C(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ze(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(C(171))}if(t.tag===1){var n=t.type;if(ze(n))return zm(t,n,e)}return e}function Bg(t,e,n,r,i,s,o,l,a){return t=rd(n,r,!0,t,i,s,o,l,a),t.context=zg(null),n=t.current,r=Ae(),i=hn(n),s=At(r,i),s.callback=e??null,cn(n,s,i),t.current.lanes=i,ys(t,i,r),Be(t,r),t}function Ll(t,e,n,r){var i=e.current,s=Ae(),o=hn(i);return n=zg(n),e.context===null?e.context=n:e.pendingContext=n,e=At(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=cn(i,e,o),t!==null&&(ct(t,i,o,s),mo(t,i,o)),o}function Yo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function df(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function id(t,e){df(t,e),(t=t.alternate)&&df(t,e)}function U0(){return null}var Wg=typeof reportError=="function"?reportError:function(t){console.error(t)};function sd(t){this._internalRoot=t}Ml.prototype.render=sd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(C(409));Ll(t,e,null,null)};Ml.prototype.unmount=sd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Yn(function(){Ll(null,t,null,null)}),e[Ft]=null}};function Ml(t){this._internalRoot=t}Ml.prototype.unstable_scheduleHydration=function(t){if(t){var e=ym();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Yt.length&&e!==0&&e<Yt[n].priority;n++);Yt.splice(n,0,t),n===0&&Em(t)}};function od(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function bl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function hf(){}function j0(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Yo(o);s.call(u)}}var o=Bg(e,r,t,0,null,!1,!1,"",hf);return t._reactRootContainer=o,t[Ft]=o.current,qi(t.nodeType===8?t.parentNode:t),Yn(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Yo(a);l.call(u)}}var a=rd(t,0,!1,null,null,!1,!1,"",hf);return t._reactRootContainer=a,t[Ft]=a.current,qi(t.nodeType===8?t.parentNode:t),Yn(function(){Ll(e,a,n,r)}),a}function Fl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=Yo(o);l.call(a)}}Ll(e,o,t,i)}else o=j0(n,e,t,i,r);return Yo(o)}_m=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ei(e.pendingLanes);n!==0&&(kc(e,n|1),Be(e,oe()),!(W&6)&&(Vr=oe()+500,Nn()))}break;case 13:Yn(function(){var r=Ut(t,1);if(r!==null){var i=Ae();ct(r,t,1,i)}}),id(t,1)}};Tc=function(t){if(t.tag===13){var e=Ut(t,134217728);if(e!==null){var n=Ae();ct(e,t,134217728,n)}id(t,134217728)}};vm=function(t){if(t.tag===13){var e=hn(t),n=Ut(t,e);if(n!==null){var r=Ae();ct(n,t,e,r)}id(t,e)}};ym=function(){return $};wm=function(t,e){var n=$;try{return $=t,e()}finally{$=n}};uu=function(t,e,n){switch(e){case"input":if(nu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Nl(r);if(!i)throw Error(C(90));Jp(r),nu(r,i)}}}break;case"textarea":Zp(t,n);break;case"select":e=n.value,e!=null&&Tr(t,!!n.multiple,e,!1)}};om=Zc;lm=Yn;var z0={usingClientEntryPoint:!1,Events:[Es,_r,Nl,im,sm,Zc]},pi={findFiberByHostInstance:jn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},B0={bundleType:pi.bundleType,version:pi.version,rendererPackageName:pi.rendererPackageName,rendererConfig:pi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=cm(t),t===null?null:t.stateNode},findFiberByHostInstance:pi.findFiberByHostInstance||U0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var no=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!no.isDisabled&&no.supportsFiber)try{Cl=no.inject(B0),yt=no}catch{}}qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=z0;qe.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!od(e))throw Error(C(200));return F0(t,e,null,n)};qe.createRoot=function(t,e){if(!od(t))throw Error(C(299));var n=!1,r="",i=Wg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=rd(t,1,!1,null,null,n,!1,r,i),t[Ft]=e.current,qi(t.nodeType===8?t.parentNode:t),new sd(e)};qe.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(C(188)):(t=Object.keys(t).join(","),Error(C(268,t)));return t=cm(e),t=t===null?null:t.stateNode,t};qe.flushSync=function(t){return Yn(t)};qe.hydrate=function(t,e,n){if(!bl(e))throw Error(C(200));return Fl(null,t,e,!0,n)};qe.hydrateRoot=function(t,e,n){if(!od(t))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Wg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Bg(e,null,t,1,n??null,i,!1,s,o),t[Ft]=e.current,qi(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ml(e)};qe.render=function(t,e,n){if(!bl(e))throw Error(C(200));return Fl(null,t,e,!1,n)};qe.unmountComponentAtNode=function(t){if(!bl(t))throw Error(C(40));return t._reactRootContainer?(Yn(function(){Fl(null,null,t,!1,function(){t._reactRootContainer=null,t[Ft]=null})}),!0):!1};qe.unstable_batchedUpdates=Zc;qe.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!bl(n))throw Error(C(200));if(t==null||t._reactInternals===void 0)throw Error(C(38));return Fl(t,e,n,!1,r)};qe.version="18.3.1-next-f1338f8080-20240426";function Vg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vg)}catch(t){console.error(t)}}Vg(),Vp.exports=qe;var W0=Vp.exports,ff=W0;Qa.createRoot=ff.createRoot,Qa.hydrateRoot=ff.hydrateRoot;/**
 * @remix-run/router v1.19.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rs(){return rs=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},rs.apply(this,arguments)}var sn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(sn||(sn={}));const pf="popstate";function V0(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return Wu("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Jo(i)}return H0(e,n,null,t)}function le(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function $g(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function $0(){return Math.random().toString(36).substr(2,8)}function mf(t,e){return{usr:t.state,key:t.key,idx:e}}function Wu(t,e,n,r){return n===void 0&&(n=null),rs({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Xr(e):e,{state:n,key:e&&e.key||r||$0()})}function Jo(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Xr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function H0(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=sn.Pop,a=null,u=d();u==null&&(u=0,o.replaceState(rs({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function c(){l=sn.Pop;let E=d(),p=E==null?null:E-u;u=E,a&&a({action:l,location:y.location,delta:p})}function h(E,p){l=sn.Push;let f=Wu(y.location,E,p);u=d()+1;let m=mf(f,u),w=y.createHref(f);try{o.pushState(m,"",w)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;i.location.assign(w)}s&&a&&a({action:l,location:y.location,delta:1})}function _(E,p){l=sn.Replace;let f=Wu(y.location,E,p);u=d();let m=mf(f,u),w=y.createHref(f);o.replaceState(m,"",w),s&&a&&a({action:l,location:y.location,delta:0})}function v(E){let p=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof E=="string"?E:Jo(E);return f=f.replace(/ $/,"%20"),le(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let y={get action(){return l},get location(){return t(i,o)},listen(E){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(pf,c),a=E,()=>{i.removeEventListener(pf,c),a=null}},createHref(E){return e(i,E)},createURL:v,encodeLocation(E){let p=v(E);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:_,go(E){return o.go(E)}};return y}var gf;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(gf||(gf={}));function G0(t,e,n){return n===void 0&&(n="/"),K0(t,e,n,!1)}function K0(t,e,n,r){let i=typeof e=="string"?Xr(e):e,s=ld(i.pathname||"/",n);if(s==null)return null;let o=Hg(t);q0(o);let l=null;for(let a=0;l==null&&a<o.length;++a){let u=sE(s);l=rE(o[a],u,r)}return l}function Hg(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let a={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};a.relativePath.startsWith("/")&&(le(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=pn([r,a.relativePath]),d=n.concat(a);s.children&&s.children.length>0&&(le(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Hg(s.children,e,d,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:tE(u,s.index),routesMeta:d})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let a of Gg(s.path))i(s,o,a)}),e}function Gg(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Gg(r.join("/")),l=[];return l.push(...o.map(a=>a===""?s:[s,a].join("/"))),i&&l.push(...o),l.map(a=>t.startsWith("/")&&a===""?"/":a)}function q0(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:nE(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Q0=/^:[\w-]+$/,Y0=3,J0=2,X0=1,Z0=10,eE=-2,_f=t=>t==="*";function tE(t,e){let n=t.split("/"),r=n.length;return n.some(_f)&&(r+=eE),e&&(r+=J0),n.filter(i=>!_f(i)).reduce((i,s)=>i+(Q0.test(s)?Y0:s===""?X0:Z0),r)}function nE(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function rE(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let a=r[l],u=l===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",c=vf({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},d),h=a.route;if(!c&&u&&n&&!r[r.length-1].route.index&&(c=vf({path:a.relativePath,caseSensitive:a.caseSensitive,end:!1},d)),!c)return null;Object.assign(i,c.params),o.push({params:i,pathname:pn([s,c.pathname]),pathnameBase:uE(pn([s,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(s=pn([s,c.pathnameBase]))}return o}function vf(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=iE(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,d,c)=>{let{paramName:h,isOptional:_}=d;if(h==="*"){let y=l[c]||"";o=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const v=l[c];return _&&!v?u[h]=void 0:u[h]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function iE(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),$g(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,a)=>(r.push({paramName:l,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function sE(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return $g(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function ld(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function oE(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Xr(t):t;return{pathname:n?n.startsWith("/")?n:lE(n,e):e,search:cE(r),hash:dE(i)}}function lE(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Da(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function aE(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function ad(t,e){let n=aE(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function ud(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Xr(t):(i=rs({},t),le(!i.pathname||!i.pathname.includes("?"),Da("?","pathname","search",i)),le(!i.pathname||!i.pathname.includes("#"),Da("#","pathname","hash",i)),le(!i.search||!i.search.includes("#"),Da("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let c=e.length-1;if(!r&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),c-=1;i.pathname=h.join("/")}l=c>=0?e[c]:"/"}let a=oE(i,l),u=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||d)&&(a.pathname+="/"),a}const pn=t=>t.join("/").replace(/\/\/+/g,"/"),uE=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),cE=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,dE=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function hE(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Kg=["post","put","patch","delete"];new Set(Kg);const fE=["get",...Kg];new Set(fE);/**
 * React Router v6.26.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function is(){return is=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},is.apply(this,arguments)}const cd=S.createContext(null),pE=S.createContext(null),Rn=S.createContext(null),Ul=S.createContext(null),Vt=S.createContext({outlet:null,matches:[],isDataRoute:!1}),qg=S.createContext(null);function mE(t,e){let{relative:n}=e===void 0?{}:e;Zr()||le(!1);let{basename:r,navigator:i}=S.useContext(Rn),{hash:s,pathname:o,search:l}=Yg(t,{relative:n}),a=o;return r!=="/"&&(a=o==="/"?r:pn([r,o])),i.createHref({pathname:a,search:l,hash:s})}function Zr(){return S.useContext(Ul)!=null}function Cs(){return Zr()||le(!1),S.useContext(Ul).location}function Qg(t){S.useContext(Rn).static||S.useLayoutEffect(t)}function jl(){let{isDataRoute:t}=S.useContext(Vt);return t?xE():gE()}function gE(){Zr()||le(!1);let t=S.useContext(cd),{basename:e,future:n,navigator:r}=S.useContext(Rn),{matches:i}=S.useContext(Vt),{pathname:s}=Cs(),o=JSON.stringify(ad(i,n.v7_relativeSplatPath)),l=S.useRef(!1);return Qg(()=>{l.current=!0}),S.useCallback(function(u,d){if(d===void 0&&(d={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let c=ud(u,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:pn([e,c.pathname])),(d.replace?r.replace:r.push)(c,d.state,d)},[e,r,o,s,t])}const _E=S.createContext(null);function vE(t){let e=S.useContext(Vt).outlet;return e&&S.createElement(_E.Provider,{value:t},e)}function Yg(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=S.useContext(Rn),{matches:i}=S.useContext(Vt),{pathname:s}=Cs(),o=JSON.stringify(ad(i,r.v7_relativeSplatPath));return S.useMemo(()=>ud(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function yE(t,e){return wE(t,e)}function wE(t,e,n,r){Zr()||le(!1);let{navigator:i}=S.useContext(Rn),{matches:s}=S.useContext(Vt),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let u=Cs(),d;if(e){var c;let E=typeof e=="string"?Xr(e):e;a==="/"||(c=E.pathname)!=null&&c.startsWith(a)||le(!1),d=E}else d=u;let h=d.pathname||"/",_=h;if(a!=="/"){let E=a.replace(/^\//,"").split("/");_="/"+h.replace(/^\//,"").split("/").slice(E.length).join("/")}let v=G0(t,{pathname:_}),y=kE(v&&v.map(E=>Object.assign({},E,{params:Object.assign({},l,E.params),pathname:pn([a,i.encodeLocation?i.encodeLocation(E.pathname).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?a:pn([a,i.encodeLocation?i.encodeLocation(E.pathnameBase).pathname:E.pathnameBase])})),s,n,r);return e&&y?S.createElement(Ul.Provider,{value:{location:is({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:sn.Pop}},y):y}function EE(){let t=PE(),e=hE(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},e),n?S.createElement("pre",{style:i},n):null,null)}const SE=S.createElement(EE,null);class CE extends S.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?S.createElement(Vt.Provider,{value:this.props.routeContext},S.createElement(qg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function IE(t){let{routeContext:e,match:n,children:r}=t,i=S.useContext(cd);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(Vt.Provider,{value:e},r)}function kE(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=o.findIndex(c=>c.route.id&&(l==null?void 0:l[c.route.id])!==void 0);d>=0||le(!1),o=o.slice(0,Math.min(o.length,d+1))}let a=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let c=o[d];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=d),c.route.id){let{loaderData:h,errors:_}=n,v=c.route.loader&&h[c.route.id]===void 0&&(!_||_[c.route.id]===void 0);if(c.route.lazy||v){a=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((d,c,h)=>{let _,v=!1,y=null,E=null;n&&(_=l&&c.route.id?l[c.route.id]:void 0,y=c.route.errorElement||SE,a&&(u<0&&h===0?(v=!0,E=null):u===h&&(v=!0,E=c.route.hydrateFallbackElement||null)));let p=e.concat(o.slice(0,h+1)),f=()=>{let m;return _?m=y:v?m=E:c.route.Component?m=S.createElement(c.route.Component,null):c.route.element?m=c.route.element:m=d,S.createElement(IE,{match:c,routeContext:{outlet:d,matches:p,isDataRoute:n!=null},children:m})};return n&&(c.route.ErrorBoundary||c.route.errorElement||h===0)?S.createElement(CE,{location:n.location,revalidation:n.revalidation,component:y,error:_,children:f(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):f()},null)}var Jg=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Jg||{}),Xo=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Xo||{});function TE(t){let e=S.useContext(cd);return e||le(!1),e}function NE(t){let e=S.useContext(pE);return e||le(!1),e}function RE(t){let e=S.useContext(Vt);return e||le(!1),e}function Xg(t){let e=RE(),n=e.matches[e.matches.length-1];return n.route.id||le(!1),n.route.id}function PE(){var t;let e=S.useContext(qg),n=NE(Xo.UseRouteError),r=Xg(Xo.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function xE(){let{router:t}=TE(Jg.UseNavigateStable),e=Xg(Xo.UseNavigateStable),n=S.useRef(!1);return Qg(()=>{n.current=!0}),S.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,is({fromRouteId:e},s)))},[t,e])}function OE(t){let{to:e,replace:n,state:r,relative:i}=t;Zr()||le(!1);let{future:s,static:o}=S.useContext(Rn),{matches:l}=S.useContext(Vt),{pathname:a}=Cs(),u=jl(),d=ud(e,ad(l,s.v7_relativeSplatPath),a,i==="path"),c=JSON.stringify(d);return S.useEffect(()=>u(JSON.parse(c),{replace:n,state:r,relative:i}),[u,c,i,n,r]),null}function Zg(t){return vE(t.context)}function mt(t){le(!1)}function AE(t){let{basename:e="/",children:n=null,location:r,navigationType:i=sn.Pop,navigator:s,static:o=!1,future:l}=t;Zr()&&le(!1);let a=e.replace(/^\/*/,"/"),u=S.useMemo(()=>({basename:a,navigator:s,static:o,future:is({v7_relativeSplatPath:!1},l)}),[a,l,s,o]);typeof r=="string"&&(r=Xr(r));let{pathname:d="/",search:c="",hash:h="",state:_=null,key:v="default"}=r,y=S.useMemo(()=>{let E=ld(d,a);return E==null?null:{location:{pathname:E,search:c,hash:h,state:_,key:v},navigationType:i}},[a,d,c,h,_,v,i]);return y==null?null:S.createElement(Rn.Provider,{value:u},S.createElement(Ul.Provider,{children:n,value:y}))}function DE(t){let{children:e,location:n}=t;return yE(Vu(e),n)}new Promise(()=>{});function Vu(t,e){e===void 0&&(e=[]);let n=[];return S.Children.forEach(t,(r,i)=>{if(!S.isValidElement(r))return;let s=[...e,i];if(r.type===S.Fragment){n.push.apply(n,Vu(r.props.children,s));return}r.type!==mt&&le(!1),!r.props.index||!r.props.children||le(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Vu(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.26.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $u(){return $u=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},$u.apply(this,arguments)}function LE(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function ME(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function bE(t,e){return t.button===0&&(!e||e==="_self")&&!ME(t)}const FE=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],UE="6";try{window.__reactRouterVersion=UE}catch{}const jE="startTransition",yf=Oy[jE];function zE(t){let{basename:e,children:n,future:r,window:i}=t,s=S.useRef();s.current==null&&(s.current=V0({window:i,v5Compat:!0}));let o=s.current,[l,a]=S.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},d=S.useCallback(c=>{u&&yf?yf(()=>a(c)):a(c)},[a,u]);return S.useLayoutEffect(()=>o.listen(d),[o,d]),S.createElement(AE,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const BE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",WE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Un=S.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:a,to:u,preventScrollReset:d,unstable_viewTransition:c}=e,h=LE(e,FE),{basename:_}=S.useContext(Rn),v,y=!1;if(typeof u=="string"&&WE.test(u)&&(v=u,BE))try{let m=new URL(window.location.href),w=u.startsWith("//")?new URL(m.protocol+u):new URL(u),T=ld(w.pathname,_);w.origin===m.origin&&T!=null?u=T+w.search+w.hash:y=!0}catch{}let E=mE(u,{relative:i}),p=VE(u,{replace:o,state:l,target:a,preventScrollReset:d,relative:i,unstable_viewTransition:c});function f(m){r&&r(m),m.defaultPrevented||p(m)}return S.createElement("a",$u({},h,{href:v||E,onClick:y||s?r:f,ref:n,target:a}))});var wf;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(wf||(wf={}));var Ef;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Ef||(Ef={}));function VE(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l}=e===void 0?{}:e,a=jl(),u=Cs(),d=Yg(t,{relative:o});return S.useCallback(c=>{if(bE(c,n)){c.preventDefault();let h=r!==void 0?r:Jo(u)===Jo(d);a(t,{replace:h,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l})}},[u,a,d,r,i,n,t,s,o,l])}var Sf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e_={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k=function(t,e){if(!t)throw ei(e)},ei=function(t){return new Error("Firebase Database ("+e_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},$E=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},dd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,d=s>>2,c=(s&3)<<4|l>>4;let h=(l&15)<<2|u>>6,_=u&63;a||(_=64,o||(h=64)),r.push(n[d],n[c],n[h],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(t_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):$E(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||c==null)throw new HE;const h=s<<2|l>>4;if(r.push(h),u!==64){const _=l<<4&240|u>>2;if(r.push(_),c!==64){const v=u<<6&192|c;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class HE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const n_=function(t){const e=t_(t);return dd.encodeByteArray(e,!0)},Zo=function(t){return n_(t).replace(/\./g,"")},el=function(t){try{return dd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GE(t){return r_(void 0,t)}function r_(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!KE(n)||(t[n]=r_(t[n],e[n]));return t}function KE(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QE=()=>qE().__FIREBASE_DEFAULTS__,YE=()=>{if(typeof process>"u"||typeof Sf>"u")return;const t=Sf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},JE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&el(t[1]);return e&&JSON.parse(e)},hd=()=>{try{return QE()||YE()||JE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},i_=t=>{var e,n;return(n=(e=hd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},XE=t=>{const e=i_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},s_=()=>{var t;return(t=hd())===null||t===void 0?void 0:t.config},o_=t=>{var e;return(e=hd())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Zo(JSON.stringify(n)),Zo(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pe())}function eS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function l_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function tS(){const t=Pe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function a_(){return e_.NODE_ADMIN===!0}function nS(){try{return typeof indexedDB=="object"}catch{return!1}}function rS(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS="FirebaseError";class Pn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=iS,Object.setPrototypeOf(this,Pn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Is.prototype.create)}}class Is{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?sS(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Pn(i,l,r)}}function sS(t,e){return t.replace(oS,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const oS=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ss(t){return JSON.parse(t)}function ce(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u_=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=ss(el(s[0])||""),n=ss(el(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},lS=function(t){const e=u_(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},aS=function(t){const e=u_(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function $r(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Hu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function tl(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function nl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Cf(s)&&Cf(o)){if(!nl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Cf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ci(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ii(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uS{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)r[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const h=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,d;for(let c=0;c<80;c++){c<40?c<20?(u=l^s&(o^l),d=1518500249):(u=s^o^l,d=1859775393):c<60?(u=s&o|l&(s|o),d=2400959708):(u=s^o^l,d=3395469782);const h=(i<<5|i>>>27)+u+a+d+r[c]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function cS(t,e){const n=new dS(t,e);return n.subscribe.bind(n)}class dS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");hS(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=La),i.error===void 0&&(i.error=La),i.complete===void 0&&(i.complete=La);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function hS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function La(){}function pd(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,k(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Bl=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(t){return t&&t._delegate?t._delegate:t}class Jn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new zl;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(gS(e))try{this.getOrInitializeService({instanceIdentifier:bn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=bn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=bn){return this.instances.has(e)}getOptions(e=bn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:mS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=bn){return this.component?this.component.multipleInstances?e:bn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function mS(t){return t===bn?void 0:t}function gS(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _S{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new pS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var H;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(H||(H={}));const vS={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},yS=H.INFO,wS={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},ES=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=wS[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class md{constructor(e){this.name=e,this._logLevel=yS,this._logHandler=ES,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in H))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?vS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...e),this._logHandler(this,H.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...e),this._logHandler(this,H.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,H.INFO,...e),this._logHandler(this,H.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,H.WARN,...e),this._logHandler(this,H.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...e),this._logHandler(this,H.ERROR,...e)}}const SS=(t,e)=>e.some(n=>t instanceof n);let If,kf;function CS(){return If||(If=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function IS(){return kf||(kf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const c_=new WeakMap,Gu=new WeakMap,d_=new WeakMap,Ma=new WeakMap,gd=new WeakMap;function kS(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(mn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&c_.set(n,t)}).catch(()=>{}),gd.set(e,t),e}function TS(t){if(Gu.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Gu.set(t,e)}let Ku={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Gu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||d_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return mn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function NS(t){Ku=t(Ku)}function RS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ba(this),e,...n);return d_.set(r,e.sort?e.sort():[e]),mn(r)}:IS().includes(t)?function(...e){return t.apply(ba(this),e),mn(c_.get(this))}:function(...e){return mn(t.apply(ba(this),e))}}function PS(t){return typeof t=="function"?RS(t):(t instanceof IDBTransaction&&TS(t),SS(t,CS())?new Proxy(t,Ku):t)}function mn(t){if(t instanceof IDBRequest)return kS(t);if(Ma.has(t))return Ma.get(t);const e=PS(t);return e!==t&&(Ma.set(t,e),gd.set(e,t)),e}const ba=t=>gd.get(t);function xS(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=mn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(mn(o.result),a.oldVersion,a.newVersion,mn(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const OS=["get","getKey","getAll","getAllKeys","count"],AS=["put","add","delete","clear"],Fa=new Map;function Tf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Fa.get(e))return Fa.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=AS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||OS.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return Fa.set(e,s),s}NS(t=>({...t,get:(e,n,r)=>Tf(e,n)||t.get(e,n,r),has:(e,n)=>!!Tf(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(LS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function LS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const qu="@firebase/app",Nf="0.10.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn=new md("@firebase/app"),MS="@firebase/app-compat",bS="@firebase/analytics-compat",FS="@firebase/analytics",US="@firebase/app-check-compat",jS="@firebase/app-check",zS="@firebase/auth",BS="@firebase/auth-compat",WS="@firebase/database",VS="@firebase/database-compat",$S="@firebase/functions",HS="@firebase/functions-compat",GS="@firebase/installations",KS="@firebase/installations-compat",qS="@firebase/messaging",QS="@firebase/messaging-compat",YS="@firebase/performance",JS="@firebase/performance-compat",XS="@firebase/remote-config",ZS="@firebase/remote-config-compat",eC="@firebase/storage",tC="@firebase/storage-compat",nC="@firebase/firestore",rC="@firebase/vertexai-preview",iC="@firebase/firestore-compat",sC="firebase",oC="10.12.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qu="[DEFAULT]",lC={[qu]:"fire-core",[MS]:"fire-core-compat",[FS]:"fire-analytics",[bS]:"fire-analytics-compat",[jS]:"fire-app-check",[US]:"fire-app-check-compat",[zS]:"fire-auth",[BS]:"fire-auth-compat",[WS]:"fire-rtdb",[VS]:"fire-rtdb-compat",[$S]:"fire-fn",[HS]:"fire-fn-compat",[GS]:"fire-iid",[KS]:"fire-iid-compat",[qS]:"fire-fcm",[QS]:"fire-fcm-compat",[YS]:"fire-perf",[JS]:"fire-perf-compat",[XS]:"fire-rc",[ZS]:"fire-rc-compat",[eC]:"fire-gcs",[tC]:"fire-gcs-compat",[nC]:"fire-fst",[iC]:"fire-fst-compat",[rC]:"fire-vertex","fire-js":"fire-js",[sC]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rl=new Map,aC=new Map,Yu=new Map;function Rf(t,e){try{t.container.addComponent(e)}catch(n){Xn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Hr(t){const e=t.name;if(Yu.has(e))return Xn.debug(`There were multiple attempts to register component ${e}.`),!1;Yu.set(e,t);for(const n of rl.values())Rf(n,t);for(const n of aC.values())Rf(n,t);return!0}function _d(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function vt(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},gn=new Is("app","Firebase",uC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Jn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni=oC;function h_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Qu,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw gn.create("bad-app-name",{appName:String(i)});if(n||(n=s_()),!n)throw gn.create("no-options");const s=rl.get(i);if(s){if(nl(n,s.options)&&nl(r,s.config))return s;throw gn.create("duplicate-app",{appName:i})}const o=new _S(i);for(const a of Yu.values())o.addComponent(a);const l=new cC(n,r,o);return rl.set(i,l),l}function f_(t=Qu){const e=rl.get(t);if(!e&&t===Qu&&s_())return h_();if(!e)throw gn.create("no-app",{appName:t});return e}function _n(t,e,n){var r;let i=(r=lC[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Xn.warn(l.join(" "));return}Hr(new Jn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dC="firebase-heartbeat-database",hC=1,os="firebase-heartbeat-store";let Ua=null;function p_(){return Ua||(Ua=xS(dC,hC,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(os)}catch(n){console.warn(n)}}}}).catch(t=>{throw gn.create("idb-open",{originalErrorMessage:t.message})})),Ua}async function fC(t){try{const n=(await p_()).transaction(os),r=await n.objectStore(os).get(m_(t));return await n.done,r}catch(e){if(e instanceof Pn)Xn.warn(e.message);else{const n=gn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Xn.warn(n.message)}}}async function Pf(t,e){try{const r=(await p_()).transaction(os,"readwrite");await r.objectStore(os).put(e,m_(t)),await r.done}catch(n){if(n instanceof Pn)Xn.warn(n.message);else{const r=gn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Xn.warn(r.message)}}}function m_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pC=1024,mC=30*24*60*60*1e3;class gC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new vC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=xf();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=mC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=xf(),{heartbeatsToSend:r,unsentEntries:i}=_C(this._heartbeatsCache.heartbeats),s=Zo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function xf(){return new Date().toISOString().substring(0,10)}function _C(t,e=pC){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Of(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Of(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class vC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return nS()?rS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await fC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Pf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Pf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Of(t){return Zo(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yC(t){Hr(new Jn("platform-logger",e=>new DS(e),"PRIVATE")),Hr(new Jn("heartbeat",e=>new gC(e),"PRIVATE")),_n(qu,Nf,t),_n(qu,Nf,"esm2017"),_n("fire-js","")}yC("");function vd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function g_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const wC=g_,__=new Is("auth","Firebase",g_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const il=new md("@firebase/auth");function EC(t,...e){il.logLevel<=H.WARN&&il.warn(`Auth (${ni}): ${t}`,...e)}function So(t,...e){il.logLevel<=H.ERROR&&il.error(`Auth (${ni}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(t,...e){throw yd(t,...e)}function Et(t,...e){return yd(t,...e)}function v_(t,e,n){const r=Object.assign(Object.assign({},wC()),{[e]:n});return new Is("auth","Firebase",r).create(e,{appName:t.name})}function Dt(t){return v_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function yd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return __.create(t,...e)}function L(t,e,...n){if(!t)throw yd(e,...n)}function Rt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw So(e),new Error(e)}function zt(t,e){t||Rt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ju(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function SC(){return Af()==="http:"||Af()==="https:"}function Af(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(SC()||eS()||"connection"in navigator)?navigator.onLine:!0}function IC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e,n){this.shortDelay=e,this.longDelay=n,zt(n>e,"Short delay should be less than long delay!"),this.isMobile=fd()||l_()}get(){return CC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wd(t,e){zt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Rt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Rt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Rt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TC=new ks(3e4,6e4);function xn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function On(t,e,n,r,i={}){return w_(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=ti(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),y_.fetch()(E_(t,t.config.apiHost,n,l),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},s))})}async function w_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},kC),e);try{const i=new RC(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ro(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw ro(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw ro(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw ro(t,"user-disabled",o);const d=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw v_(t,d,u);ft(t,d)}}catch(i){if(i instanceof Pn)throw i;ft(t,"network-request-failed",{message:String(i)})}}async function Ts(t,e,n,r,i={}){const s=await On(t,e,n,r,i);return"mfaPendingCredential"in s&&ft(t,"multi-factor-auth-required",{_serverResponse:s}),s}function E_(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?wd(t.config,i):`${t.config.apiScheme}://${i}`}function NC(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class RC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Et(this.auth,"network-request-failed")),TC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ro(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Et(t,e,r);return i.customData._tokenResponse=n,i}function Df(t){return t!==void 0&&t.enterprise!==void 0}class PC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return NC(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function xC(t,e){return On(t,"GET","/v2/recaptchaConfig",xn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OC(t,e){return On(t,"POST","/v1/accounts:delete",e)}async function S_(t,e){return On(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Li(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function AC(t,e=!1){const n=Me(t),r=await n.getIdToken(e),i=Ed(r);L(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Li(ja(i.auth_time)),issuedAtTime:Li(ja(i.iat)),expirationTime:Li(ja(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ja(t){return Number(t)*1e3}function Ed(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return So("JWT malformed, contained fewer than 3 sections"),null;try{const i=el(n);return i?JSON.parse(i):(So("Failed to decode base64 JWT payload"),null)}catch(i){return So("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Lf(t){const e=Ed(t);return L(e,"internal-error"),L(typeof e.exp<"u","internal-error"),L(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ls(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Pn&&DC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function DC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Li(this.lastLoginAt),this.creationTime=Li(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ls(t,S_(n,{idToken:r}));L(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?C_(s.providerUserInfo):[],l=bC(t.providerData,o),a=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),d=a?u:!1,c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Xu(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,c)}async function MC(t){const e=Me(t);await sl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bC(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function C_(t){return t.map(e=>{var{providerId:n}=e,r=vd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FC(t,e){const n=await w_(t,{},async()=>{const r=ti({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=E_(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",y_.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function UC(t,e){return On(t,"POST","/v2/accounts:revokeToken",xn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){L(e.idToken,"internal-error"),L(typeof e.idToken<"u","internal-error"),L(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Lf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){L(e.length!==0,"internal-error");const n=Lf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(L(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await FC(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ar;return r&&(L(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(L(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(L(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ar,this.toJSON())}_performRefresh(){return Rt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(t,e){L(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Pt{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=vd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new LC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Xu(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ls(this,this.stsTokenManager.getToken(this.auth,e));return L(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return AC(this,e)}reload(){return MC(this)}_assign(e){this!==e&&(L(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Pt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await sl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(vt(this.auth.app))return Promise.reject(Dt(this.auth));const e=await this.getIdToken();return await ls(this,OC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,a,u,d;const c=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(l=n.tenantId)!==null&&l!==void 0?l:void 0,E=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:m,emailVerified:w,isAnonymous:T,providerData:x,stsTokenManager:N}=n;L(m&&N,e,"internal-error");const O=Ar.fromJSON(this.name,N);L(typeof m=="string",e,"internal-error"),Kt(c,e.name),Kt(h,e.name),L(typeof w=="boolean",e,"internal-error"),L(typeof T=="boolean",e,"internal-error"),Kt(_,e.name),Kt(v,e.name),Kt(y,e.name),Kt(E,e.name),Kt(p,e.name),Kt(f,e.name);const I=new Pt({uid:m,auth:e,email:h,emailVerified:w,displayName:c,isAnonymous:T,photoURL:v,phoneNumber:_,tenantId:y,stsTokenManager:O,createdAt:p,lastLoginAt:f});return x&&Array.isArray(x)&&(I.providerData=x.map(A=>Object.assign({},A))),E&&(I._redirectEventId=E),I}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ar;i.updateFromServerResponse(n);const s=new Pt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await sl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];L(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?C_(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Ar;l.updateFromIdToken(r);const a=new Pt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Xu(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(a,u),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mf=new Map;function xt(t){zt(t instanceof Function,"Expected a class definition");let e=Mf.get(t);return e?(zt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Mf.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}I_.type="NONE";const bf=I_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Co(t,e,n){return`firebase:${t}:${e}:${n}`}class Dr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Co(this.userKey,i.apiKey,s),this.fullPersistenceKey=Co("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Pt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Dr(xt(bf),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||xt(bf);const o=Co(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const d=await u._get(o);if(d){const c=Pt._fromJSON(e,d);u!==s&&(l=c),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new Dr(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Dr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ff(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(N_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(k_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(P_(e))return"Blackberry";if(x_(e))return"Webos";if(Sd(e))return"Safari";if((e.includes("chrome/")||T_(e))&&!e.includes("edge/"))return"Chrome";if(R_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function k_(t=Pe()){return/firefox\//i.test(t)}function Sd(t=Pe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function T_(t=Pe()){return/crios\//i.test(t)}function N_(t=Pe()){return/iemobile/i.test(t)}function R_(t=Pe()){return/android/i.test(t)}function P_(t=Pe()){return/blackberry/i.test(t)}function x_(t=Pe()){return/webos/i.test(t)}function Wl(t=Pe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function jC(t=Pe()){var e;return Wl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function zC(){return tS()&&document.documentMode===10}function O_(t=Pe()){return Wl(t)||R_(t)||x_(t)||P_(t)||/windows phone/i.test(t)||N_(t)}function BC(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A_(t,e=[]){let n;switch(t){case"Browser":n=Ff(Pe());break;case"Worker":n=`${Ff(Pe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ni}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VC(t,e={}){return On(t,"GET","/v2/passwordPolicy",xn(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $C=6;class HC{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:$C,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(i=a.containsLowercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(s=a.containsUppercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(l=a.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Uf(this),this.idTokenSubscription=new Uf(this),this.beforeStateQueue=new WC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=__,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=xt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Dr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await S_(this,{idToken:e}),r=await Pt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(vt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await sl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=IC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(vt(this.app))return Promise.reject(Dt(this));const n=e?Me(e):null;return n&&L(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&L(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return vt(this.app)?Promise.reject(Dt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return vt(this.app)?Promise.reject(Dt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(xt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await VC(this),n=new HC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Is("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await UC(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&xt(e)||this._popupRedirectResolver;L(n,this,"argument-error"),this.redirectPersistenceManager=await Dr.create(this,[xt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(L(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,i);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=A_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&EC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function or(t){return Me(t)}class Uf{constructor(e){this.auth=e,this.observer=null,this.addObserver=cS(n=>this.observer=n)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function KC(t){Vl=t}function D_(t){return Vl.loadJS(t)}function qC(){return Vl.recaptchaEnterpriseScript}function QC(){return Vl.gapiScript}function YC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const JC="recaptcha-enterprise",XC="NO_RECAPTCHA";class ZC{constructor(e){this.type=JC,this.auth=or(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{xC(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new PC(a);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(a=>{l(a)})})}function i(s,o,l){const a=window.grecaptcha;Df(a)?a.enterprise.ready(()=>{a.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(XC)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Df(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let a=qC();a.length!==0&&(a+=l),D_(a).then(()=>{i(l,s,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function jf(t,e,n,r=!1){const i=new ZC(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Zu(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await jf(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await jf(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eI(t,e){const n=_d(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(nl(s,e??{}))return i;ft(i,"already-initialized")}return n.initialize({options:e})}function tI(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(xt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function nI(t,e,n){const r=or(t);L(r._canInitEmulator,r,"emulator-config-failed"),L(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=L_(e),{host:o,port:l}=rI(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),iI()}function L_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function rI(t){const e=L_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:zf(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:zf(o)}}}function zf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function iI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Rt("not implemented")}_getIdTokenResponse(e){return Rt("not implemented")}_linkToIdToken(e,n){return Rt("not implemented")}_getReauthenticationResolver(e){return Rt("not implemented")}}async function sI(t,e){return On(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oI(t,e){return Ts(t,"POST","/v1/accounts:signInWithPassword",xn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lI(t,e){return Ts(t,"POST","/v1/accounts:signInWithEmailLink",xn(t,e))}async function aI(t,e){return Ts(t,"POST","/v1/accounts:signInWithEmailLink",xn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as extends Cd{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new as(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new as(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zu(e,n,"signInWithPassword",oI);case"emailLink":return lI(e,{email:this._email,oobCode:this._password});default:ft(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zu(e,r,"signUpPassword",sI);case"emailLink":return aI(e,{idToken:n,email:this._email,oobCode:this._password});default:ft(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lr(t,e){return Ts(t,"POST","/v1/accounts:signInWithIdp",xn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uI="http://localhost";class Zn extends Cd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Zn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ft("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=vd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Zn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Lr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Lr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Lr(e,n)}buildRequest(){const e={requestUri:uI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ti(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cI(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function dI(t){const e=Ci(Ii(t)).link,n=e?Ci(Ii(e)).deep_link_id:null,r=Ci(Ii(t)).deep_link_id;return(r?Ci(Ii(r)).link:null)||r||n||e||t}class Id{constructor(e){var n,r,i,s,o,l;const a=Ci(Ii(e)),u=(n=a.apiKey)!==null&&n!==void 0?n:null,d=(r=a.oobCode)!==null&&r!==void 0?r:null,c=cI((i=a.mode)!==null&&i!==void 0?i:null);L(u&&d&&c,"argument-error"),this.apiKey=u,this.operation=c,this.code=d,this.continueUrl=(s=a.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=a.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=dI(e);try{return new Id(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(){this.providerId=ri.PROVIDER_ID}static credential(e,n){return as._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Id.parseLink(n);return L(r,"argument-error"),as._fromEmailAndCode(e,r.code,r.tenantId)}}ri.PROVIDER_ID="password";ri.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ri.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns extends M_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt extends Ns{constructor(){super("facebook.com")}static credential(e){return Zn._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xt.credentialFromTaggedObject(e)}static credentialFromError(e){return Xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xt.credential(e.oauthAccessToken)}catch{return null}}}Xt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Xt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt extends Ns{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Zn._fromParams({providerId:Zt.PROVIDER_ID,signInMethod:Zt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Zt.credentialFromTaggedObject(e)}static credentialFromError(e){return Zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Zt.credential(n,r)}catch{return null}}}Zt.GOOGLE_SIGN_IN_METHOD="google.com";Zt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en extends Ns{constructor(){super("github.com")}static credential(e){return Zn._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return en.credentialFromTaggedObject(e)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return en.credential(e.oauthAccessToken)}catch{return null}}}en.GITHUB_SIGN_IN_METHOD="github.com";en.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn extends Ns{constructor(){super("twitter.com")}static credential(e,n){return Zn._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return tn.credential(n,r)}catch{return null}}}tn.TWITTER_SIGN_IN_METHOD="twitter.com";tn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hI(t,e){return Ts(t,"POST","/v1/accounts:signUp",xn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Pt._fromIdTokenResponse(e,r,i),o=Bf(r);return new er({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Bf(r);return new er({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Bf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol extends Pn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ol.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ol(e,n,r,i)}}function b_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ol._fromErrorAndOperation(t,s,e,r):s})}async function fI(t,e,n=!1){const r=await ls(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return er._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pI(t,e,n=!1){const{auth:r}=t;if(vt(r.app))return Promise.reject(Dt(r));const i="reauthenticate";try{const s=await ls(t,b_(r,i,e,t),n);L(s.idToken,r,"internal-error");const o=Ed(s.idToken);L(o,r,"internal-error");const{sub:l}=o;return L(t.uid===l,r,"user-mismatch"),er._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ft(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F_(t,e,n=!1){if(vt(t.app))return Promise.reject(Dt(t));const r="signIn",i=await b_(t,r,e),s=await er._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function mI(t,e){return F_(or(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U_(t){const e=or(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function gI(t,e,n){if(vt(t.app))return Promise.reject(Dt(t));const r=or(t),o=await Zu(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",hI).catch(a=>{throw a.code==="auth/password-does-not-meet-requirements"&&U_(t),a}),l=await er._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function _I(t,e,n){return vt(t.app)?Promise.reject(Dt(t)):mI(Me(t),ri.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&U_(t),r})}function vI(t,e,n,r){return Me(t).onIdTokenChanged(e,n,r)}function yI(t,e,n){return Me(t).beforeAuthStateChanged(e,n)}function wI(t,e,n,r){return Me(t).onAuthStateChanged(e,n,r)}function EI(t){return Me(t).signOut()}const ll="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ll,"1"),this.storage.removeItem(ll),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SI(){const t=Pe();return Sd(t)||Wl(t)}const CI=1e3,II=10;class z_ extends j_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=SI()&&BC(),this.fallbackToPolling=O_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);zC()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,II):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},CI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}z_.type="LOCAL";const kI=z_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_ extends j_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}B_.type="SESSION";const W_=B_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new $l(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await TI(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}$l.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=kd("",20);i.port1.start();const d=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(c){const h=c;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(h.data.response);break;default:clearTimeout(d),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(){return window}function RI(t){St().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V_(){return typeof St().WorkerGlobalScope<"u"&&typeof St().importScripts=="function"}async function PI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function xI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function OI(){return V_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $_="firebaseLocalStorageDb",AI=1,al="firebaseLocalStorage",H_="fbase_key";class Rs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Hl(t,e){return t.transaction([al],e?"readwrite":"readonly").objectStore(al)}function DI(){const t=indexedDB.deleteDatabase($_);return new Rs(t).toPromise()}function ec(){const t=indexedDB.open($_,AI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(al,{keyPath:H_})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(al)?e(r):(r.close(),await DI(),e(await ec()))})})}async function Wf(t,e,n){const r=Hl(t,!0).put({[H_]:e,value:n});return new Rs(r).toPromise()}async function LI(t,e){const n=Hl(t,!1).get(e),r=await new Rs(n).toPromise();return r===void 0?null:r.value}function Vf(t,e){const n=Hl(t,!0).delete(e);return new Rs(n).toPromise()}const MI=800,bI=3;class G_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ec(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>bI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return V_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$l._getInstance(OI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await PI(),!this.activeServiceWorker)return;this.sender=new NI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||xI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ec();return await Wf(e,ll,"1"),await Vf(e,ll),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Wf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>LI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Vf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Hl(i,!1).getAll();return new Rs(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),MI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}G_.type="LOCAL";const FI=G_;new ks(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UI(t,e){return e?xt(e):(L(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td extends Cd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Lr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Lr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Lr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function jI(t){return F_(t.auth,new Td(t),t.bypassAuthState)}function zI(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),pI(n,new Td(t),t.bypassAuthState)}async function BI(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),fI(n,new Td(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return jI;case"linkViaPopup":case"linkViaRedirect":return BI;case"reauthViaPopup":case"reauthViaRedirect":return zI;default:ft(this.auth,"internal-error")}}resolve(e){zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WI=new ks(2e3,1e4);class Ir extends K_{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ir.currentPopupAction&&Ir.currentPopupAction.cancel(),Ir.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return L(e,this.auth,"internal-error"),e}async onExecution(){zt(this.filter.length===1,"Popup operations only handle one event");const e=kd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Et(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Et(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ir.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Et(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,WI.get())};e()}}Ir.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VI="pendingRedirect",Io=new Map;class $I extends K_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Io.get(this.auth._key());if(!e){try{const r=await HI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Io.set(this.auth._key(),e)}return this.bypassAuthState||Io.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function HI(t,e){const n=qI(e),r=KI(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function GI(t,e){Io.set(t._key(),e)}function KI(t){return xt(t._redirectPersistence)}function qI(t){return Co(VI,t.config.apiKey,t.name)}async function QI(t,e,n=!1){if(vt(t.app))return Promise.reject(Dt(t));const r=or(t),i=UI(r,e),o=await new $I(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YI=10*60*1e3;class JI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!XI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!q_(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Et(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=YI&&this.cachedEventUids.clear(),this.cachedEventUids.has($f(e))}saveEventToCache(e){this.cachedEventUids.add($f(e)),this.lastProcessedEventTime=Date.now()}}function $f(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function q_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function XI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return q_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZI(t,e={}){return On(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ek=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,tk=/^https?/;async function nk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ZI(t);for(const n of e)try{if(rk(n))return}catch{}ft(t,"unauthorized-domain")}function rk(t){const e=Ju(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!tk.test(n))return!1;if(ek.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ik=new ks(3e4,6e4);function Hf(){const t=St().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function sk(t){return new Promise((e,n)=>{var r,i,s;function o(){Hf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Hf(),n(Et(t,"network-request-failed"))},timeout:ik.get()})}if(!((i=(r=St().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=St().gapi)===null||s===void 0)&&s.load)o();else{const l=YC("iframefcb");return St()[l]=()=>{gapi.load?o():n(Et(t,"network-request-failed"))},D_(`${QC()}?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw ko=null,e})}let ko=null;function ok(t){return ko=ko||sk(t),ko}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lk=new ks(5e3,15e3),ak="__/auth/iframe",uk="emulator/auth/iframe",ck={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},dk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function hk(t){const e=t.config;L(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?wd(e,uk):`https://${t.config.authDomain}/${ak}`,r={apiKey:e.apiKey,appName:t.name,v:ni},i=dk.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ti(r).slice(1)}`}async function fk(t){const e=await ok(t),n=St().gapi;return L(n,t,"internal-error"),e.open({where:document.body,url:hk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ck,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Et(t,"network-request-failed"),l=St().setTimeout(()=>{s(o)},lk.get());function a(){St().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},mk=500,gk=600,_k="_blank",vk="http://localhost";class Gf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function yk(t,e,n,r=mk,i=gk){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},pk),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Pe().toLowerCase();n&&(l=T_(u)?_k:n),k_(u)&&(e=e||vk,a.scrollbars="yes");const d=Object.entries(a).reduce((h,[_,v])=>`${h}${_}=${v},`,"");if(jC(u)&&l!=="_self")return wk(e||"",l),new Gf(null);const c=window.open(e||"",l,d);L(c,t,"popup-blocked");try{c.focus()}catch{}return new Gf(c)}function wk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ek="__/auth/handler",Sk="emulator/auth/handler",Ck=encodeURIComponent("fac");async function Kf(t,e,n,r,i,s){L(t.config.authDomain,t,"auth-domain-config-required"),L(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ni,eventId:i};if(e instanceof M_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Hu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,c]of Object.entries({}))o[d]=c}if(e instanceof Ns){const d=e.getScopes().filter(c=>c!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const a=await t._getAppCheckToken(),u=a?`#${Ck}=${encodeURIComponent(a)}`:"";return`${Ik(t)}?${ti(l).slice(1)}${u}`}function Ik({config:t}){return t.emulator?wd(t,Sk):`https://${t.authDomain}/${Ek}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const za="webStorageSupport";class kk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=W_,this._completeRedirectFn=QI,this._overrideRedirectResult=GI}async _openPopup(e,n,r,i){var s;zt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Kf(e,n,r,Ju(),i);return yk(e,o,kd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Kf(e,n,r,Ju(),i);return RI(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(zt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await fk(e),r=new JI(e);return n.register("authEvent",i=>(L(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(za,{type:za},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[za];o!==void 0&&n(!!o),ft(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=nk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return O_()||Sd()||Wl()}}const Tk=kk;var qf="@firebase/auth",Qf="1.7.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Pk(t){Hr(new Jn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;L(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:A_(t)},u=new GC(r,i,s,a);return tI(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Hr(new Jn("auth-internal",e=>{const n=or(e.getProvider("auth").getImmediate());return(r=>new Nk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),_n(qf,Qf,Rk(t)),_n(qf,Qf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xk=5*60,Ok=o_("authIdTokenMaxAge")||xk;let Yf=null;const Ak=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Ok)return;const i=n==null?void 0:n.token;Yf!==i&&(Yf=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Gl(t=f_()){const e=_d(t,"auth");if(e.isInitialized())return e.getImmediate();const n=eI(t,{popupRedirectResolver:Tk,persistence:[FI,kI,W_]}),r=o_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=Ak(s.toString());yI(n,o,()=>o(n.currentUser)),vI(n,l=>o(l))}}const i=i_("auth");return i&&nI(n,`http://${i}`),n}function Dk(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}KC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Et("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Dk().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Pk("Browser");var Lk="firebase",Mk="10.12.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_n(Lk,Mk,"app");var Jf={};const Xf="@firebase/database",Zf="1.0.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Q_="";function bk(t){Q_=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fk{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ce(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ss(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uk{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return $t(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y_=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Fk(e)}}catch{}return new Uk},Wn=Y_("localStorage"),jk=Y_("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr=new md("@firebase/database"),zk=function(){let t=1;return function(){return t++}}(),J_=function(t){const e=fS(t),n=new uS;n.update(e);const r=n.digest();return dd.encodeByteArray(r)},Ps=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Ps.apply(null,r):typeof r=="object"?e+=ce(r):e+=r,e+=" "}return e};let Mi=null,ep=!0;const Bk=function(t,e){k(!e,"Can't turn on custom loggers persistently."),Mr.logLevel=H.VERBOSE,Mi=Mr.log.bind(Mr)},Ne=function(...t){if(ep===!0&&(ep=!1,Mi===null&&jk.get("logging_enabled")===!0&&Bk()),Mi){const e=Ps.apply(null,t);Mi(e)}},xs=function(t){return function(...e){Ne(t,...e)}},tc=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ps(...t);Mr.error(e)},Bt=function(...t){const e=`FIREBASE FATAL ERROR: ${Ps(...t)}`;throw Mr.error(e),new Error(e)},We=function(...t){const e="FIREBASE WARNING: "+Ps(...t);Mr.warn(e)},Wk=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&We("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},X_=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Vk=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Gr="[MIN_NAME]",tr="[MAX_NAME]",ii=function(t,e){if(t===e)return 0;if(t===Gr||e===tr)return-1;if(e===Gr||t===tr)return 1;{const n=tp(t),r=tp(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},$k=function(t,e){return t===e?0:t<e?-1:1},mi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ce(e))},Nd=function(t){if(typeof t!="object"||t===null)return ce(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ce(e[r]),n+=":",n+=Nd(t[e[r]]);return n+="}",n},Z_=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Ve(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const ev=function(t){k(!X_(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const d=u.join("");let c="";for(a=0;a<64;a+=8){let h=parseInt(d.substr(a,8),2).toString(16);h.length===1&&(h="0"+h),c=c+h}return c.toLowerCase()},Hk=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Gk=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Kk(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const qk=new RegExp("^-?(0*)\\d{1,10}$"),Qk=-2147483648,Yk=2147483647,tp=function(t){if(qk.test(t)){const e=Number(t);if(e>=Qk&&e<=Yk)return e}return null},si=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw We("Exception was thrown by user callback.",n),e},Math.floor(0))}},Jk=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},bi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xk{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){We(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zk{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ne("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',We(e)}}class To{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}To.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rd="5",tv="v",nv="s",rv="r",iv="f",sv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,ov="ls",lv="p",nc="ac",av="websocket",uv="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Wn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Wn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function eT(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function dv(t,e,n){k(typeof e=="string","typeof type must == string"),k(typeof n=="object","typeof params must == object");let r;if(e===av)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===uv)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);eT(t)&&(n.ns=t.namespace);const i=[];return Ve(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{constructor(){this.counters_={}}incrementCounter(e,n=1){$t(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return GE(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba={},Wa={};function Pd(t){const e=t.toString();return Ba[e]||(Ba[e]=new tT),Ba[e]}function nT(t,e){const n=t.toString();return Wa[n]||(Wa[n]=e()),Wa[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&si(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const np="start",iT="close",sT="pLPCommand",oT="pRTLPCB",hv="id",fv="pw",pv="ser",lT="cb",aT="seg",uT="ts",cT="d",dT="dframe",mv=1870,gv=30,hT=mv-gv,fT=25e3,pT=3e4;class kr{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=xs(e),this.stats_=Pd(n),this.urlFn=a=>(this.appCheckToken&&(a[nc]=this.appCheckToken),dv(n,uv,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new rT(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(pT)),Vk(()=>{if(this.isClosed_)return;this.scriptTagHolder=new xd((...s)=>{const[o,l,a,u,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===np)this.id=l,this.password=a;else if(o===iT)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[np]="t",r[pv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[lT]=this.scriptTagHolder.uniqueCallbackIdentifier),r[tv]=Rd,this.transportSessionId&&(r[nv]=this.transportSessionId),this.lastSessionId&&(r[ov]=this.lastSessionId),this.applicationId&&(r[lv]=this.applicationId),this.appCheckToken&&(r[nc]=this.appCheckToken),typeof location<"u"&&location.hostname&&sv.test(location.hostname)&&(r[rv]=iv);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){kr.forceAllow_=!0}static forceDisallow(){kr.forceDisallow_=!0}static isAvailable(){return kr.forceAllow_?!0:!kr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Hk()&&!Gk()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ce(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=n_(n),i=Z_(r,hT);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[dT]="t",r[hv]=e,r[fv]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ce(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class xd{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=zk(),window[sT+this.uniqueCallbackIdentifier]=e,window[oT+this.uniqueCallbackIdentifier]=n,this.myIFrame=xd.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Ne("frame writing exception"),l.stack&&Ne(l.stack),Ne(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ne("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[hv]=this.myID,e[fv]=this.myPW,e[pv]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+gv+r.length<=mv;){const o=this.pendingSegs.shift();r=r+"&"+aT+i+"="+o.seg+"&"+uT+i+"="+o.ts+"&"+cT+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(fT)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ne("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mT=16384,gT=45e3;let ul=null;typeof MozWebSocket<"u"?ul=MozWebSocket:typeof WebSocket<"u"&&(ul=WebSocket);class ot{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=xs(this.connId),this.stats_=Pd(n),this.connURL=ot.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[tv]=Rd,typeof location<"u"&&location.hostname&&sv.test(location.hostname)&&(o[rv]=iv),n&&(o[nv]=n),r&&(o[ov]=r),i&&(o[nc]=i),s&&(o[lv]=s),dv(e,av,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Wn.set("previous_websocket_failure",!0);try{let r;a_(),this.mySock=new ul(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ot.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&ul!==null&&!ot.forceDisallow_}static previouslyFailed(){return Wn.isInMemoryStorage||Wn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Wn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=ss(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(k(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ce(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Z_(n,mT);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(gT))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ot.responsesRequiredToBeHealthy=2;ot.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[kr,ot]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=ot&&ot.isAvailable();let r=n&&!ot.previouslyFailed();if(e.webSocketOnly&&(n||We("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[ot];else{const i=this.transports_=[];for(const s of us.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);us.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}us.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _T=6e4,vT=5e3,yT=10*1024,wT=100*1024,Va="t",rp="d",ET="s",ip="r",ST="e",sp="o",op="a",lp="n",ap="p",CT="h";class IT{constructor(e,n,r,i,s,o,l,a,u,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=xs("c:"+this.id+":"),this.transportManager_=new us(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=bi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>wT?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>yT?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Va in e){const n=e[Va];n===op?this.upgradeIfSecondaryHealthy_():n===ip?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===sp&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=mi("t",e),r=mi("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ap,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:op,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:lp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=mi("t",e),r=mi("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=mi(Va,e);if(rp in e){const r=e[rp];if(n===CT){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===lp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===ET?this.onConnectionShutdown_(r):n===ip?this.onReset_(r):n===ST?tc("Server Error: "+r):n===sp?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):tc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Rd!==r&&We("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),bi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(_T))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):bi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(vT))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ap,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Wn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{constructor(e){this.allowedEvents_=e,this.listeners_={},k(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){k(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl extends vv{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!fd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new cl}getInitialEvent(e){return k(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const up=32,cp=768;class G{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function V(){return new G("")}function U(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Sn(t){return t.pieces_.length-t.pieceNum_}function K(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new G(t.pieces_,e)}function yv(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function kT(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function wv(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Ev(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new G(e,0)}function de(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof G)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new G(n,0)}function z(t){return t.pieceNum_>=t.pieces_.length}function Oe(t,e){const n=U(t),r=U(e);if(n===null)return e;if(n===r)return Oe(K(t),K(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Od(t,e){if(Sn(t)!==Sn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function lt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Sn(t)>Sn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class TT{constructor(e,n){this.errorPrefix_=n,this.parts_=wv(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Bl(this.parts_[r]);Sv(this)}}function NT(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Bl(e),Sv(t)}function RT(t){const e=t.parts_.pop();t.byteLength_-=Bl(e),t.parts_.length>0&&(t.byteLength_-=1)}function Sv(t){if(t.byteLength_>cp)throw new Error(t.errorPrefix_+"has a key path longer than "+cp+" bytes ("+t.byteLength_+").");if(t.parts_.length>up)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+up+") or object contains a cycle "+Fn(t))}function Fn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad extends vv{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Ad}getInitialEvent(e){return k(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi=1e3,PT=60*5*1e3,dp=30*1e3,xT=1.3,OT=3e4,AT="server_kill",hp=3;class Lt extends _v{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Lt.nextPersistentConnectionId_++,this.log_=xs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=gi,this.maxReconnectDelay_=PT,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!a_())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ad.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&cl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(ce(s)),k(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new zl,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),k(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),k(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;Lt.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&$t(e,"w")){const r=$r(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();We(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||aS(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=dp)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=lS(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),k(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ce(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):tc("Unrecognized action received from server: "+ce(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){k(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=gi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=gi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>OT&&(this.reconnectDelay_=gi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*xT)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Lt.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(c){k(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(c)};this.realtime_={close:a,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,h]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Ne("getToken() completed but was canceled"):(Ne("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=h&&h.token,l=new IT(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,_=>{We(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(AT)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&We(c),a())}}}interrupt(e){Ne("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ne("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Hu(this.interruptReasons_)&&(this.reconnectDelay_=gi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Nd(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new G(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Ne("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=hp&&(this.reconnectDelay_=dp,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ne("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=hp&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Q_.replace(/\./g,"-")]=1,fd()?e["framework.cordova"]=1:l_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=cl.getInstance().currentlyOnline();return Hu(this.interruptReasons_)&&e}}Lt.nextPersistentConnectionId_=0;Lt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new j(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new j(Gr,e),i=new j(Gr,n);return this.compare(r,i)!==0}minPost(){return j.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let io;class Cv extends Kl{static get __EMPTY_NODE(){return io}static set __EMPTY_NODE(e){io=e}compare(e,n){return ii(e.name,n.name)}isDefinedOn(e){throw ei("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return j.MIN}maxPost(){return new j(tr,io)}makePost(e,n){return k(typeof e=="string","KeyIndex indexValue must always be a string."),new j(e,io)}toString(){return".key"}}const br=new Cv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class _e{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??_e.RED,this.left=i??Ue.EMPTY_NODE,this.right=s??Ue.EMPTY_NODE}copy(e,n,r,i,s){return new _e(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ue.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Ue.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,_e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,_e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}_e.RED=!0;_e.BLACK=!1;class DT{copy(e,n,r,i,s){return this}insert(e,n,r){return new _e(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ue{constructor(e,n=Ue.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ue(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,_e.BLACK,null,null))}remove(e){return new Ue(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,_e.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new so(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new so(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new so(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new so(this.root_,null,this.comparator_,!0,e)}}Ue.EMPTY_NODE=new DT;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LT(t,e){return ii(t.name,e.name)}function Dd(t,e){return ii(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rc;function MT(t){rc=t}const Iv=function(t){return typeof t=="number"?"number:"+ev(t):"string:"+t},kv=function(t){if(t.isLeafNode()){const e=t.val();k(typeof e=="string"||typeof e=="number"||typeof e=="object"&&$t(e,".sv"),"Priority must be a string or number.")}else k(t===rc||t.isEmpty(),"priority of unexpected type.");k(t===rc||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fp;class me{constructor(e,n=me.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,k(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),kv(this.priorityNode_)}static set __childrenNodeConstructor(e){fp=e}static get __childrenNodeConstructor(){return fp}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new me(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:me.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return z(e)?this:U(e)===".priority"?this.priorityNode_:me.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:me.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=U(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(k(r!==".priority"||Sn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,me.__childrenNodeConstructor.EMPTY_NODE.updateChild(K(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Iv(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=ev(this.value_):e+=this.value_,this.lazyHash_=J_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===me.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof me.__childrenNodeConstructor?-1:(k(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=me.VALUE_TYPE_ORDER.indexOf(n),s=me.VALUE_TYPE_ORDER.indexOf(r);return k(i>=0,"Unknown leaf type: "+n),k(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}me.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tv,Nv;function bT(t){Tv=t}function FT(t){Nv=t}class UT extends Kl{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?ii(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return j.MIN}maxPost(){return new j(tr,new me("[PRIORITY-POST]",Nv))}makePost(e,n){const r=Tv(e);return new j(n,new me("[PRIORITY-POST]",r))}toString(){return".priority"}}const ie=new UT;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jT=Math.log(2);class zT{constructor(e){const n=s=>parseInt(Math.log(s)/jT,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const dl=function(t,e,n,r){t.sort(e);const i=function(a,u){const d=u-a;let c,h;if(d===0)return null;if(d===1)return c=t[a],h=n?n(c):c,new _e(h,c.node,_e.BLACK,null,null);{const _=parseInt(d/2,10)+a,v=i(a,_),y=i(_+1,u);return c=t[_],h=n?n(c):c,new _e(h,c.node,_e.BLACK,v,y)}},s=function(a){let u=null,d=null,c=t.length;const h=function(v,y){const E=c-v,p=c;c-=v;const f=i(E+1,p),m=t[E],w=n?n(m):m;_(new _e(w,m.node,y,null,f))},_=function(v){u?(u.left=v,u=v):(d=v,u=v)};for(let v=0;v<a.count;++v){const y=a.nextBitIsOne(),E=Math.pow(2,a.count-(v+1));y?h(E,_e.BLACK):(h(E,_e.BLACK),h(E,_e.RED))}return d},o=new zT(t.length),l=s(o);return new Ue(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $a;const cr={};class Ot{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return k(cr&&ie,"ChildrenNode.ts has not been loaded"),$a=$a||new Ot({".priority":cr},{".priority":ie}),$a}get(e){const n=$r(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ue?n:null}hasIndex(e){return $t(this.indexSet_,e.toString())}addIndex(e,n){k(e!==br,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(j.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=dl(r,e.getCompare()):l=cr;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const d=Object.assign({},this.indexes_);return d[a]=l,new Ot(d,u)}addToIndexes(e,n){const r=tl(this.indexes_,(i,s)=>{const o=$r(this.indexSet_,s);if(k(o,"Missing index implementation for "+s),i===cr)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(j.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),dl(l,o.getCompare())}else return cr;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new j(e.name,l))),a.insert(e,e.node)}});return new Ot(r,this.indexSet_)}removeFromIndexes(e,n){const r=tl(this.indexes_,i=>{if(i===cr)return i;{const s=n.get(e.name);return s?i.remove(new j(e.name,s)):i}});return new Ot(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _i;class D{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&kv(this.priorityNode_),this.children_.isEmpty()&&k(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return _i||(_i=new D(new Ue(Dd),null,Ot.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||_i}updatePriority(e){return this.children_.isEmpty()?this:new D(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?_i:n}}getChild(e){const n=U(e);return n===null?this:this.getImmediateChild(n).getChild(K(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(k(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new j(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?_i:this.priorityNode_;return new D(i,o,s)}}updateChild(e,n){const r=U(e);if(r===null)return n;{k(U(e)!==".priority"||Sn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(K(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(ie,(o,l)=>{n[o]=l.val(e),r++,s&&D.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Iv(this.getPriority().val())+":"),this.forEachChild(ie,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":J_(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new j(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new j(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new j(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,j.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,j.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Os?-1:0}withIndex(e){if(e===br||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new D(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===br||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ie),i=n.getIterator(ie);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===br?null:this.indexMap_.get(e.toString())}}D.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class BT extends D{constructor(){super(new Ue(Dd),D.EMPTY_NODE,Ot.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return D.EMPTY_NODE}isEmpty(){return!1}}const Os=new BT;Object.defineProperties(j,{MIN:{value:new j(Gr,D.EMPTY_NODE)},MAX:{value:new j(tr,Os)}});Cv.__EMPTY_NODE=D.EMPTY_NODE;me.__childrenNodeConstructor=D;MT(Os);FT(Os);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WT=!0;function ve(t,e=null){if(t===null)return D.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),k(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new me(n,ve(e))}if(!(t instanceof Array)&&WT){const n=[];let r=!1;if(Ve(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=ve(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new j(o,a)))}}),n.length===0)return D.EMPTY_NODE;const s=dl(n,LT,o=>o.name,Dd);if(r){const o=dl(n,ie.getCompare());return new D(s,ve(e),new Ot({".priority":o},{".priority":ie}))}else return new D(s,ve(e),Ot.Default)}else{let n=D.EMPTY_NODE;return Ve(t,(r,i)=>{if($t(t,r)&&r.substring(0,1)!=="."){const s=ve(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(ve(e))}}bT(ve);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VT extends Kl{constructor(e){super(),this.indexPath_=e,k(!z(e)&&U(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?ii(e.name,n.name):s}makePost(e,n){const r=ve(e),i=D.EMPTY_NODE.updateChild(this.indexPath_,r);return new j(n,i)}maxPost(){const e=D.EMPTY_NODE.updateChild(this.indexPath_,Os);return new j(tr,e)}toString(){return wv(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T extends Kl{compare(e,n){const r=e.node.compareTo(n.node);return r===0?ii(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return j.MIN}maxPost(){return j.MAX}makePost(e,n){const r=ve(e);return new j(n,r)}toString(){return".value"}}const HT=new $T;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rv(t){return{type:"value",snapshotNode:t}}function Kr(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function cs(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ds(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function GT(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){k(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(cs(n,l)):k(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Kr(n,r)):o.trackChildChange(ds(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ie,(i,s)=>{n.hasChild(i)||r.trackChildChange(cs(i,s))}),n.isLeafNode()||n.forEachChild(ie,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(ds(i,s,o))}else r.trackChildChange(Kr(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?D.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e){this.indexedFilter_=new Ld(e.getIndex()),this.index_=e.getIndex(),this.startPost_=hs.getStartPost_(e),this.endPost_=hs.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new j(n,r))||(r=D.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=D.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(D.EMPTY_NODE);const s=this;return n.forEachChild(ie,(o,l)=>{s.matches(new j(o,l))||(i=i.updateImmediateChild(o,D.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KT{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new hs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new j(n,r))||(r=D.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=D.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=D.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(D.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,D.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const c=this.index_.getCompare();o=(h,_)=>c(_,h)}else o=this.index_.getCompare();const l=e;k(l.numChildren()===this.limit_,"");const a=new j(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),d=this.rangedFilter_.matches(a);if(l.hasChild(n)){const c=l.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,u,this.reverse_);for(;h!=null&&(h.name===n||l.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const _=h==null?1:o(h,a);if(d&&!r.isEmpty()&&_>=0)return s!=null&&s.trackChildChange(ds(n,r,c)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(cs(n,c));const y=l.updateImmediateChild(n,D.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(Kr(h.name,h.node)),y.updateImmediateChild(h.name,h.node)):y}}else return r.isEmpty()?e:d&&o(u,a)>=0?(s!=null&&(s.trackChildChange(cs(u.name,u.node)),s.trackChildChange(Kr(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,D.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ie}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return k(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return k(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Gr}hasEnd(){return this.endSet_}getIndexEndValue(){return k(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return k(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:tr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return k(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ie}copy(){const e=new Md;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function qT(t){return t.loadsAllData()?new Ld(t.getIndex()):t.hasLimit()?new KT(t):new hs(t)}function pp(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ie?n="$priority":t.index_===HT?n="$value":t.index_===br?n="$key":(k(t.index_ instanceof VT,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ce(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=ce(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+ce(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=ce(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+ce(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function mp(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ie&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl extends _v{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=xs("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(k(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=hl.getListenId_(e,r),l={};this.listens_[o]=l;const a=pp(e._queryParams);this.restRequest_(s+".json",a,(u,d)=>{let c=d;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,r),$r(this.listens_,o)===l){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",i(h,null)}})}unlisten(e,n){const r=hl.getListenId_(e,n);delete this.listens_[r]}get(e){const n=pp(e._queryParams),r=e._path.toString(),i=new zl;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ti(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=ss(l.responseText)}catch{We("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&We("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QT{constructor(){this.rootNode_=D.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fl(){return{value:null,children:new Map}}function Pv(t,e,n){if(z(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=U(e);t.children.has(r)||t.children.set(r,fl());const i=t.children.get(r);e=K(e),Pv(i,e,n)}}function ic(t,e,n){t.value!==null?n(e,t.value):YT(t,(r,i)=>{const s=new G(e.toString()+"/"+r);ic(i,s,n)})}function YT(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JT{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ve(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gp=10*1e3,XT=30*1e3,ZT=5*60*1e3;class e1{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new JT(e);const r=gp+(XT-gp)*Math.random();bi(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Ve(e,(i,s)=>{s>0&&$t(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),bi(this.reportStats_.bind(this),Math.floor(Math.random()*2*ZT))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var at;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(at||(at={}));function xv(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function bd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Fd(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=at.ACK_USER_WRITE,this.source=xv()}operationForChild(e){if(z(this.path)){if(this.affectedTree.value!=null)return k(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new G(e));return new pl(V(),n,this.revert)}}else return k(U(this.path)===e,"operationForChild called for unrelated child."),new pl(K(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e,n){this.source=e,this.path=n,this.type=at.LISTEN_COMPLETE}operationForChild(e){return z(this.path)?new fs(this.source,V()):new fs(this.source,K(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=at.OVERWRITE}operationForChild(e){return z(this.path)?new nr(this.source,V(),this.snap.getImmediateChild(e)):new nr(this.source,K(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=at.MERGE}operationForChild(e){if(z(this.path)){const n=this.children.subtree(new G(e));return n.isEmpty()?null:n.value?new nr(this.source,V(),n.value):new ps(this.source,V(),n)}else return k(U(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ps(this.source,K(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(z(e))return this.isFullyInitialized()&&!this.filtered_;const n=U(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t1{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function n1(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(GT(o.childName,o.snapshotNode))}),vi(t,i,"child_removed",e,r,n),vi(t,i,"child_added",e,r,n),vi(t,i,"child_moved",s,r,n),vi(t,i,"child_changed",e,r,n),vi(t,i,"value",e,r,n),i}function vi(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>i1(t,l,a)),o.forEach(l=>{const a=r1(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function r1(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function i1(t,e,n){if(e.childName==null||n.childName==null)throw ei("Should only compare child_ events.");const r=new j(e.childName,e.snapshotNode),i=new j(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ql(t,e){return{eventCache:t,serverCache:e}}function Fi(t,e,n,r){return ql(new Cn(e,n,r),t.serverCache)}function Ov(t,e,n,r){return ql(t.eventCache,new Cn(e,n,r))}function ml(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function rr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ha;const s1=()=>(Ha||(Ha=new Ue($k)),Ha);class Y{constructor(e,n=s1()){this.value=e,this.children=n}static fromObject(e){let n=new Y(null);return Ve(e,(r,i)=>{n=n.set(new G(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:V(),value:this.value};if(z(e))return null;{const r=U(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(K(e),n);return s!=null?{path:de(new G(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(z(e))return this;{const n=U(e),r=this.children.get(n);return r!==null?r.subtree(K(e)):new Y(null)}}set(e,n){if(z(e))return new Y(n,this.children);{const r=U(e),s=(this.children.get(r)||new Y(null)).set(K(e),n),o=this.children.insert(r,s);return new Y(this.value,o)}}remove(e){if(z(e))return this.children.isEmpty()?new Y(null):new Y(null,this.children);{const n=U(e),r=this.children.get(n);if(r){const i=r.remove(K(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Y(null):new Y(this.value,s)}else return this}}get(e){if(z(e))return this.value;{const n=U(e),r=this.children.get(n);return r?r.get(K(e)):null}}setTree(e,n){if(z(e))return n;{const r=U(e),s=(this.children.get(r)||new Y(null)).setTree(K(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Y(this.value,o)}}fold(e){return this.fold_(V(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(de(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,V(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(z(e))return null;{const s=U(e),o=this.children.get(s);return o?o.findOnPath_(K(e),de(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,V(),n)}foreachOnPath_(e,n,r){if(z(e))return this;{this.value&&r(n,this.value);const i=U(e),s=this.children.get(i);return s?s.foreachOnPath_(K(e),de(n,i),r):new Y(null)}}foreach(e){this.foreach_(V(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(de(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.writeTree_=e}static empty(){return new dt(new Y(null))}}function Ui(t,e,n){if(z(e))return new dt(new Y(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Oe(i,e);return s=s.updateChild(o,n),new dt(t.writeTree_.set(i,s))}else{const i=new Y(n),s=t.writeTree_.setTree(e,i);return new dt(s)}}}function _p(t,e,n){let r=t;return Ve(n,(i,s)=>{r=Ui(r,de(e,i),s)}),r}function vp(t,e){if(z(e))return dt.empty();{const n=t.writeTree_.setTree(e,new Y(null));return new dt(n)}}function sc(t,e){return lr(t,e)!=null}function lr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Oe(n.path,e)):null}function yp(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ie,(r,i)=>{e.push(new j(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new j(r,i.value))}),e}function vn(t,e){if(z(e))return t;{const n=lr(t,e);return n!=null?new dt(new Y(n)):new dt(t.writeTree_.subtree(e))}}function oc(t){return t.writeTree_.isEmpty()}function qr(t,e){return Av(V(),t.writeTree_,e)}function Av(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(k(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Av(de(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(de(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ql(t,e){return bv(e,t)}function o1(t,e,n,r,i){k(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Ui(t.visibleWrites,e,n)),t.lastWriteId=r}function l1(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function a1(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);k(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&u1(l,r.path)?i=!1:lt(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return c1(t),!0;if(r.snap)t.visibleWrites=vp(t.visibleWrites,r.path);else{const l=r.children;Ve(l,a=>{t.visibleWrites=vp(t.visibleWrites,de(r.path,a))})}return!0}else return!1}function u1(t,e){if(t.snap)return lt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&lt(de(t.path,n),e))return!0;return!1}function c1(t){t.visibleWrites=Dv(t.allWrites,d1,V()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function d1(t){return t.visible}function Dv(t,e,n){let r=dt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)lt(n,o)?(l=Oe(n,o),r=Ui(r,l,s.snap)):lt(o,n)&&(l=Oe(o,n),r=Ui(r,V(),s.snap.getChild(l)));else if(s.children){if(lt(n,o))l=Oe(n,o),r=_p(r,l,s.children);else if(lt(o,n))if(l=Oe(o,n),z(l))r=_p(r,V(),s.children);else{const a=$r(s.children,U(l));if(a){const u=a.getChild(K(l));r=Ui(r,V(),u)}}}else throw ei("WriteRecord should have .snap or .children")}}return r}function Lv(t,e,n,r,i){if(!r&&!i){const s=lr(t.visibleWrites,e);if(s!=null)return s;{const o=vn(t.visibleWrites,e);if(oc(o))return n;if(n==null&&!sc(o,V()))return null;{const l=n||D.EMPTY_NODE;return qr(o,l)}}}else{const s=vn(t.visibleWrites,e);if(!i&&oc(s))return n;if(!i&&n==null&&!sc(s,V()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(lt(u.path,e)||lt(e,u.path))},l=Dv(t.allWrites,o,e),a=n||D.EMPTY_NODE;return qr(l,a)}}}function h1(t,e,n){let r=D.EMPTY_NODE;const i=lr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ie,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=vn(t.visibleWrites,e);return n.forEachChild(ie,(o,l)=>{const a=qr(vn(s,new G(o)),l);r=r.updateImmediateChild(o,a)}),yp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=vn(t.visibleWrites,e);return yp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function f1(t,e,n,r,i){k(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=de(e,n);if(sc(t.visibleWrites,s))return null;{const o=vn(t.visibleWrites,s);return oc(o)?i.getChild(n):qr(o,i.getChild(n))}}function p1(t,e,n,r){const i=de(e,n),s=lr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=vn(t.visibleWrites,i);return qr(o,r.getNode().getImmediateChild(n))}else return null}function m1(t,e){return lr(t.visibleWrites,e)}function g1(t,e,n,r,i,s,o){let l;const a=vn(t.visibleWrites,e),u=lr(a,V());if(u!=null)l=u;else if(n!=null)l=qr(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const d=[],c=o.getCompare(),h=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let _=h.getNext();for(;_&&d.length<i;)c(_,r)!==0&&d.push(_),_=h.getNext();return d}else return[]}function _1(){return{visibleWrites:dt.empty(),allWrites:[],lastWriteId:-1}}function gl(t,e,n,r){return Lv(t.writeTree,t.treePath,e,n,r)}function Ud(t,e){return h1(t.writeTree,t.treePath,e)}function wp(t,e,n,r){return f1(t.writeTree,t.treePath,e,n,r)}function _l(t,e){return m1(t.writeTree,de(t.treePath,e))}function v1(t,e,n,r,i,s){return g1(t.writeTree,t.treePath,e,n,r,i,s)}function jd(t,e,n){return p1(t.writeTree,t.treePath,e,n)}function Mv(t,e){return bv(de(t.treePath,e),t.writeTree)}function bv(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y1{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;k(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),k(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,ds(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,cs(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Kr(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,ds(r,e.snapshotNode,i.oldSnap));else throw ei("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Fv=new w1;class zd{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Cn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return jd(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:rr(this.viewCache_),s=v1(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E1(t){return{filter:t}}function S1(t,e){k(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),k(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function C1(t,e,n,r,i){const s=new y1;let o,l;if(n.type===at.OVERWRITE){const u=n;u.source.fromUser?o=lc(t,e,u.path,u.snap,r,i,s):(k(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!z(u.path),o=vl(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===at.MERGE){const u=n;u.source.fromUser?o=k1(t,e,u.path,u.children,r,i,s):(k(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=ac(t,e,u.path,u.children,r,i,l,s))}else if(n.type===at.ACK_USER_WRITE){const u=n;u.revert?o=R1(t,e,u.path,r,i,s):o=T1(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===at.LISTEN_COMPLETE)o=N1(t,e,n.path,r,s);else throw ei("Unknown operation type: "+n.type);const a=s.getChanges();return I1(e,o,a),{viewCache:o,changes:a}}function I1(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=ml(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Rv(ml(e)))}}function Uv(t,e,n,r,i,s){const o=e.eventCache;if(_l(r,n)!=null)return e;{let l,a;if(z(n))if(k(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=rr(e),d=u instanceof D?u:D.EMPTY_NODE,c=Ud(r,d);l=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const u=gl(r,rr(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=U(n);if(u===".priority"){k(Sn(n)===1,"Can't have a priority with additional path components");const d=o.getNode();a=e.serverCache.getNode();const c=wp(r,n,d,a);c!=null?l=t.filter.updatePriority(d,c):l=o.getNode()}else{const d=K(n);let c;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const h=wp(r,n,o.getNode(),a);h!=null?c=o.getNode().getImmediateChild(u).updateChild(d,h):c=o.getNode().getImmediateChild(u)}else c=jd(r,u,e.serverCache);c!=null?l=t.filter.updateChild(o.getNode(),u,c,d,i,s):l=o.getNode()}}return Fi(e,l,o.isFullyInitialized()||z(n),t.filter.filtersNodes())}}function vl(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const d=o?t.filter:t.filter.getIndexedFilter();if(z(n))u=d.updateFullNode(a.getNode(),r,null);else if(d.filtersNodes()&&!a.isFiltered()){const _=a.getNode().updateChild(n,r);u=d.updateFullNode(a.getNode(),_,null)}else{const _=U(n);if(!a.isCompleteForPath(n)&&Sn(n)>1)return e;const v=K(n),E=a.getNode().getImmediateChild(_).updateChild(v,r);_===".priority"?u=d.updatePriority(a.getNode(),E):u=d.updateChild(a.getNode(),_,E,v,Fv,null)}const c=Ov(e,u,a.isFullyInitialized()||z(n),d.filtersNodes()),h=new zd(i,c,s);return Uv(t,c,n,i,h,l)}function lc(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const d=new zd(i,e,s);if(z(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=Fi(e,u,!0,t.filter.filtersNodes());else{const c=U(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=Fi(e,u,l.isFullyInitialized(),l.isFiltered());else{const h=K(n),_=l.getNode().getImmediateChild(c);let v;if(z(h))v=r;else{const y=d.getCompleteChild(c);y!=null?yv(h)===".priority"&&y.getChild(Ev(h)).isEmpty()?v=y:v=y.updateChild(h,r):v=D.EMPTY_NODE}if(_.equals(v))a=e;else{const y=t.filter.updateChild(l.getNode(),c,v,h,d,o);a=Fi(e,y,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Ep(t,e){return t.eventCache.isCompleteForChild(e)}function k1(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const d=de(n,a);Ep(e,U(d))&&(l=lc(t,l,d,u,i,s,o))}),r.foreach((a,u)=>{const d=de(n,a);Ep(e,U(d))||(l=lc(t,l,d,u,i,s,o))}),l}function Sp(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function ac(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;z(n)?u=r:u=new Y(null).setTree(n,r);const d=e.serverCache.getNode();return u.children.inorderTraversal((c,h)=>{if(d.hasChild(c)){const _=e.serverCache.getNode().getImmediateChild(c),v=Sp(t,_,h);a=vl(t,a,new G(c),v,i,s,o,l)}}),u.children.inorderTraversal((c,h)=>{const _=!e.serverCache.isCompleteForChild(c)&&h.value===null;if(!d.hasChild(c)&&!_){const v=e.serverCache.getNode().getImmediateChild(c),y=Sp(t,v,h);a=vl(t,a,new G(c),y,i,s,o,l)}}),a}function T1(t,e,n,r,i,s,o){if(_l(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(z(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return vl(t,e,n,a.getNode().getChild(n),i,s,l,o);if(z(n)){let u=new Y(null);return a.getNode().forEachChild(br,(d,c)=>{u=u.set(new G(d),c)}),ac(t,e,n,u,i,s,l,o)}else return e}else{let u=new Y(null);return r.foreach((d,c)=>{const h=de(n,d);a.isCompleteForPath(h)&&(u=u.set(d,a.getNode().getChild(h)))}),ac(t,e,n,u,i,s,l,o)}}function N1(t,e,n,r,i){const s=e.serverCache,o=Ov(e,s.getNode(),s.isFullyInitialized()||z(n),s.isFiltered());return Uv(t,o,n,r,Fv,i)}function R1(t,e,n,r,i,s){let o;if(_l(r,n)!=null)return e;{const l=new zd(r,e,i),a=e.eventCache.getNode();let u;if(z(n)||U(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=gl(r,rr(e));else{const c=e.serverCache.getNode();k(c instanceof D,"serverChildren would be complete if leaf node"),d=Ud(r,c)}d=d,u=t.filter.updateFullNode(a,d,s)}else{const d=U(n);let c=jd(r,d,e.serverCache);c==null&&e.serverCache.isCompleteForChild(d)&&(c=a.getImmediateChild(d)),c!=null?u=t.filter.updateChild(a,d,c,K(n),l,s):e.eventCache.getNode().hasChild(d)?u=t.filter.updateChild(a,d,D.EMPTY_NODE,K(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=gl(r,rr(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||_l(r,V())!=null,Fi(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P1{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Ld(r.getIndex()),s=qT(r);this.processor_=E1(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(D.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(D.EMPTY_NODE,l.getNode(),null),d=new Cn(a,o.isFullyInitialized(),i.filtersNodes()),c=new Cn(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=ql(c,d),this.eventGenerator_=new t1(this.query_)}get query(){return this.query_}}function x1(t){return t.viewCache_.serverCache.getNode()}function O1(t){return ml(t.viewCache_)}function A1(t,e){const n=rr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!z(e)&&!n.getImmediateChild(U(e)).isEmpty())?n.getChild(e):null}function Cp(t){return t.eventRegistrations_.length===0}function D1(t,e){t.eventRegistrations_.push(e)}function Ip(t,e,n){const r=[];if(n){k(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function kp(t,e,n,r){e.type===at.MERGE&&e.source.queryId!==null&&(k(rr(t.viewCache_),"We should always have a full cache before handling merges"),k(ml(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=C1(t.processor_,i,e,n,r);return S1(t.processor_,s.viewCache),k(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,jv(t,s.changes,s.viewCache.eventCache.getNode(),null)}function L1(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ie,(s,o)=>{r.push(Kr(s,o))}),n.isFullyInitialized()&&r.push(Rv(n.getNode())),jv(t,r,n.getNode(),e)}function jv(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return n1(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yl;class zv{constructor(){this.views=new Map}}function M1(t){k(!yl,"__referenceConstructor has already been defined"),yl=t}function b1(){return k(yl,"Reference.ts has not been loaded"),yl}function F1(t){return t.views.size===0}function Bd(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return k(s!=null,"SyncTree gave us an op for an invalid query."),kp(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(kp(o,e,n,r));return s}}function Bv(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=gl(n,i?r:null),a=!1;l?a=!0:r instanceof D?(l=Ud(n,r),a=!1):(l=D.EMPTY_NODE,a=!1);const u=ql(new Cn(l,a,!1),new Cn(r,i,!1));return new P1(e,u)}return o}function U1(t,e,n,r,i,s){const o=Bv(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),D1(o,n),L1(o,n)}function j1(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=In(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(Ip(u,n,r)),Cp(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(Ip(a,n,r)),Cp(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!In(t)&&s.push(new(b1())(e._repo,e._path)),{removed:s,events:o}}function Wv(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function yn(t,e){let n=null;for(const r of t.views.values())n=n||A1(r,e);return n}function Vv(t,e){if(e._queryParams.loadsAllData())return Yl(t);{const r=e._queryIdentifier;return t.views.get(r)}}function $v(t,e){return Vv(t,e)!=null}function In(t){return Yl(t)!=null}function Yl(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wl;function z1(t){k(!wl,"__referenceConstructor has already been defined"),wl=t}function B1(){return k(wl,"Reference.ts has not been loaded"),wl}let W1=1;class Tp{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Y(null),this.pendingWriteTree_=_1(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Hv(t,e,n,r,i){return o1(t.pendingWriteTree_,e,n,r,i),i?Ds(t,new nr(xv(),e,n)):[]}function Vn(t,e,n=!1){const r=l1(t.pendingWriteTree_,e);if(a1(t.pendingWriteTree_,e)){let s=new Y(null);return r.snap!=null?s=s.set(V(),!0):Ve(r.children,o=>{s=s.set(new G(o),!0)}),Ds(t,new pl(r.path,s,n))}else return[]}function As(t,e,n){return Ds(t,new nr(bd(),e,n))}function V1(t,e,n){const r=Y.fromObject(n);return Ds(t,new ps(bd(),e,r))}function $1(t,e){return Ds(t,new fs(bd(),e))}function H1(t,e,n){const r=Vd(t,n);if(r){const i=$d(r),s=i.path,o=i.queryId,l=Oe(s,e),a=new fs(Fd(o),l);return Hd(t,s,a)}else return[]}function El(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||$v(o,e))){const a=j1(o,e,n,r);F1(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const d=u.findIndex(h=>h._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(s,(h,_)=>In(_));if(d&&!c){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const _=q1(h);for(let v=0;v<_.length;++v){const y=_[v],E=y.query,p=Qv(t,y);t.listenProvider_.startListening(ji(E),ms(t,E),p.hashFn,p.onComplete)}}}!c&&u.length>0&&!r&&(d?t.listenProvider_.stopListening(ji(e),null):u.forEach(h=>{const _=t.queryToTagMap.get(Jl(h));t.listenProvider_.stopListening(ji(h),_)}))}Q1(t,u)}return l}function Gv(t,e,n,r){const i=Vd(t,r);if(i!=null){const s=$d(i),o=s.path,l=s.queryId,a=Oe(o,e),u=new nr(Fd(l),a,n);return Hd(t,o,u)}else return[]}function G1(t,e,n,r){const i=Vd(t,r);if(i){const s=$d(i),o=s.path,l=s.queryId,a=Oe(o,e),u=Y.fromObject(n),d=new ps(Fd(l),a,u);return Hd(t,o,d)}else return[]}function uc(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,_)=>{const v=Oe(h,i);s=s||yn(_,v),o=o||In(_)});let l=t.syncPointTree_.get(i);l?(o=o||In(l),s=s||yn(l,V())):(l=new zv,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=D.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,v)=>{const y=yn(v,V());y&&(s=s.updateImmediateChild(_,y))}));const u=$v(l,e);if(!u&&!e._queryParams.loadsAllData()){const h=Jl(e);k(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const _=Y1();t.queryToTagMap.set(h,_),t.tagToQueryMap.set(_,h)}const d=Ql(t.pendingWriteTree_,i);let c=U1(l,e,n,d,s,a);if(!u&&!o&&!r){const h=Vv(l,e);c=c.concat(J1(t,e,h))}return c}function Wd(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Oe(o,e),u=yn(l,a);if(u)return u});return Lv(i,e,s,n,!0)}function K1(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,d)=>{const c=Oe(u,n);r=r||yn(d,c)});let i=t.syncPointTree_.get(n);i?r=r||yn(i,V()):(i=new zv,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new Cn(r,!0,!1):null,l=Ql(t.pendingWriteTree_,e._path),a=Bv(i,e,l,s?o.getNode():D.EMPTY_NODE,s);return O1(a)}function Ds(t,e){return Kv(e,t.syncPointTree_,null,Ql(t.pendingWriteTree_,V()))}function Kv(t,e,n,r){if(z(t.path))return qv(t,e,n,r);{const i=e.get(V());n==null&&i!=null&&(n=yn(i,V()));let s=[];const o=U(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,d=Mv(r,o);s=s.concat(Kv(l,a,u,d))}return i&&(s=s.concat(Bd(i,t,r,n))),s}}function qv(t,e,n,r){const i=e.get(V());n==null&&i!=null&&(n=yn(i,V()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=Mv(r,o),d=t.operationForChild(o);d&&(s=s.concat(qv(d,l,a,u)))}),i&&(s=s.concat(Bd(i,t,r,n))),s}function Qv(t,e){const n=e.query,r=ms(t,n);return{hashFn:()=>(x1(e)||D.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?H1(t,n._path,r):$1(t,n._path);{const s=Kk(i,n);return El(t,n,null,s)}}}}function ms(t,e){const n=Jl(e);return t.queryToTagMap.get(n)}function Jl(t){return t._path.toString()+"$"+t._queryIdentifier}function Vd(t,e){return t.tagToQueryMap.get(e)}function $d(t){const e=t.indexOf("$");return k(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new G(t.substr(0,e))}}function Hd(t,e,n){const r=t.syncPointTree_.get(e);k(r,"Missing sync point for query tag that we're tracking");const i=Ql(t.pendingWriteTree_,e);return Bd(r,n,i,null)}function q1(t){return t.fold((e,n,r)=>{if(n&&In(n))return[Yl(n)];{let i=[];return n&&(i=Wv(n)),Ve(r,(s,o)=>{i=i.concat(o)}),i}})}function ji(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(B1())(t._repo,t._path):t}function Q1(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Jl(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function Y1(){return W1++}function J1(t,e,n){const r=e._path,i=ms(t,e),s=Qv(t,n),o=t.listenProvider_.startListening(ji(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)k(!In(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,d,c)=>{if(!z(u)&&d&&In(d))return[Yl(d).query];{let h=[];return d&&(h=h.concat(Wv(d).map(_=>_.query))),Ve(c,(_,v)=>{h=h.concat(v)}),h}});for(let u=0;u<a.length;++u){const d=a[u];t.listenProvider_.stopListening(ji(d),ms(t,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Gd(n)}node(){return this.node_}}class Kd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=de(this.path_,e);return new Kd(this.syncTree_,n)}node(){return Wd(this.syncTree_,this.path_)}}const X1=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Np=function(t,e,n){if(!t||typeof t!="object")return t;if(k(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Z1(t[".sv"],e,n);if(typeof t[".sv"]=="object")return eN(t[".sv"],e);k(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Z1=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:k(!1,"Unexpected server value: "+t)}},eN=function(t,e,n){t.hasOwnProperty("increment")||k(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&k(!1,"Unexpected increment value: "+r);const i=e.node();if(k(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},tN=function(t,e,n,r){return qd(e,new Kd(n,t),r)},Yv=function(t,e,n){return qd(t,new Gd(e),n)};function qd(t,e,n){const r=t.getPriority().val(),i=Np(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=Np(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new me(l,ve(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new me(i))),o.forEachChild(ie,(l,a)=>{const u=qd(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Yd(t,e){let n=e instanceof G?e:new G(e),r=t,i=U(n);for(;i!==null;){const s=$r(r.node.children,i)||{children:{},childCount:0};r=new Qd(i,r,s),n=K(n),i=U(n)}return r}function oi(t){return t.node.value}function Jv(t,e){t.node.value=e,cc(t)}function Xv(t){return t.node.childCount>0}function nN(t){return oi(t)===void 0&&!Xv(t)}function Xl(t,e){Ve(t.node.children,(n,r)=>{e(new Qd(n,t,r))})}function Zv(t,e,n,r){n&&!r&&e(t),Xl(t,i=>{Zv(i,e,!0,r)}),n&&r&&e(t)}function rN(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Ls(t){return new G(t.parent===null?t.name:Ls(t.parent)+"/"+t.name)}function cc(t){t.parent!==null&&iN(t.parent,t.name,t)}function iN(t,e,n){const r=nN(n),i=$t(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,cc(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,cc(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sN=/[\[\].#$\/\u0000-\u001F\u007F]/,oN=/[\[\].#$\u0000-\u001F\u007F]/,Ga=10*1024*1024,ey=function(t){return typeof t=="string"&&t.length!==0&&!sN.test(t)},ty=function(t){return typeof t=="string"&&t.length!==0&&!oN.test(t)},lN=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),ty(t)},aN=function(t,e,n,r){Jd(pd(t,"value"),e,n)},Jd=function(t,e,n){const r=n instanceof G?new TT(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Fn(r));if(typeof e=="function")throw new Error(t+"contains a function "+Fn(r)+" with contents = "+e.toString());if(X_(e))throw new Error(t+"contains "+e.toString()+" "+Fn(r));if(typeof e=="string"&&e.length>Ga/3&&Bl(e)>Ga)throw new Error(t+"contains a string greater than "+Ga+" utf8 bytes "+Fn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Ve(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!ey(o)))throw new Error(t+" contains an invalid key ("+o+") "+Fn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);NT(r,o),Jd(t,l,r),RT(r)}),i&&s)throw new Error(t+' contains ".value" child '+Fn(r)+" in addition to actual children.")}},ny=function(t,e,n,r){if(!ty(n))throw new Error(pd(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},uN=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),ny(t,e,n)},ry=function(t,e){if(U(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},cN=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ey(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!lN(n))throw new Error(pd(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dN{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Xd(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Od(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function iy(t,e,n){Xd(t,n),sy(t,r=>Od(r,e))}function Ct(t,e,n){Xd(t,n),sy(t,r=>lt(r,e)||lt(e,r))}function sy(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(hN(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function hN(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Mi&&Ne("event: "+n.toString()),si(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fN="repo_interrupt",pN=25;class mN{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new dN,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=fl(),this.transactionQueueTree_=new Qd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function gN(t,e,n){if(t.stats_=Pd(t.repoInfo_),t.forceRestClient_||Jk())t.server_=new hl(t.repoInfo_,(r,i,s,o)=>{Rp(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Pp(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ce(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Lt(t.repoInfo_,e,(r,i,s,o)=>{Rp(t,r,i,s,o)},r=>{Pp(t,r)},r=>{vN(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=nT(t.repoInfo_,()=>new e1(t.stats_,t.server_)),t.infoData_=new QT,t.infoSyncTree_=new Tp({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=As(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),eh(t,"connected",!1),t.serverSyncTree_=new Tp({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);Ct(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function _N(t){const n=t.infoData_.getNode(new G(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Zd(t){return X1({timestamp:_N(t)})}function Rp(t,e,n,r,i){t.dataUpdateCount++;const s=new G(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=tl(n,u=>ve(u));o=G1(t.serverSyncTree_,s,a,i)}else{const a=ve(n);o=Gv(t.serverSyncTree_,s,a,i)}else if(r){const a=tl(n,u=>ve(u));o=V1(t.serverSyncTree_,s,a)}else{const a=ve(n);o=As(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=ea(t,s)),Ct(t.eventQueue_,l,o)}function Pp(t,e){eh(t,"connected",e),e===!1&&EN(t)}function vN(t,e){Ve(e,(n,r)=>{eh(t,n,r)})}function eh(t,e,n){const r=new G("/.info/"+e),i=ve(n);t.infoData_.updateSnapshot(r,i);const s=As(t.infoSyncTree_,r,i);Ct(t.eventQueue_,r,s)}function oy(t){return t.nextWriteId_++}function yN(t,e,n){const r=K1(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=ve(i).withIndex(e._queryParams.getIndex());uc(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=As(t.serverSyncTree_,e._path,s);else{const l=ms(t.serverSyncTree_,e);o=Gv(t.serverSyncTree_,e._path,s,l)}return Ct(t.eventQueue_,e._path,o),El(t.serverSyncTree_,e,n,null,!0),s},i=>(Zl(t,"get for query "+ce(e)+" failed: "+i),Promise.reject(new Error(i))))}function wN(t,e,n,r,i){Zl(t,"set",{path:e.toString(),value:n,priority:r});const s=Zd(t),o=ve(n,r),l=Wd(t.serverSyncTree_,e),a=Yv(o,l,s),u=oy(t),d=Hv(t.serverSyncTree_,e,a,u,!0);Xd(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(h,_)=>{const v=h==="ok";v||We("set at "+e+" failed: "+h);const y=Vn(t.serverSyncTree_,u,!v);Ct(t.eventQueue_,e,y),kN(t,i,h,_)});const c=dy(t,e);ea(t,c),Ct(t.eventQueue_,c,[])}function EN(t){Zl(t,"onDisconnectEvents");const e=Zd(t),n=fl();ic(t.onDisconnect_,V(),(i,s)=>{const o=tN(i,s,t.serverSyncTree_,e);Pv(n,i,o)});let r=[];ic(n,V(),(i,s)=>{r=r.concat(As(t.serverSyncTree_,i,s));const o=dy(t,i);ea(t,o)}),t.onDisconnect_=fl(),Ct(t.eventQueue_,V(),r)}function SN(t,e,n){let r;U(e._path)===".info"?r=uc(t.infoSyncTree_,e,n):r=uc(t.serverSyncTree_,e,n),iy(t.eventQueue_,e._path,r)}function CN(t,e,n){let r;U(e._path)===".info"?r=El(t.infoSyncTree_,e,n):r=El(t.serverSyncTree_,e,n),iy(t.eventQueue_,e._path,r)}function IN(t){t.persistentConnection_&&t.persistentConnection_.interrupt(fN)}function Zl(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ne(n,...e)}function kN(t,e,n,r){e&&si(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function ly(t,e,n){return Wd(t.serverSyncTree_,e,n)||D.EMPTY_NODE}function th(t,e=t.transactionQueueTree_){if(e||ta(t,e),oi(e)){const n=uy(t,e);k(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&TN(t,Ls(e),n)}else Xv(e)&&Xl(e,n=>{th(t,n)})}function TN(t,e,n){const r=n.map(u=>u.currentWriteId),i=ly(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const d=n[u];k(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const c=Oe(e,d.path);s=s.updateChild(c,d.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{Zl(t,"transaction put response",{path:a.toString(),status:u});let d=[];if(u==="ok"){const c=[];for(let h=0;h<n.length;h++)n[h].status=2,d=d.concat(Vn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&c.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();ta(t,Yd(t.transactionQueueTree_,e)),th(t,t.transactionQueueTree_),Ct(t.eventQueue_,e,d);for(let h=0;h<c.length;h++)si(c[h])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{We("transaction at "+a.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}ea(t,e)}},o)}function ea(t,e){const n=ay(t,e),r=Ls(n),i=uy(t,n);return NN(t,i,r),r}function NN(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=Oe(n,a.path);let d=!1,c;if(k(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)d=!0,c=a.abortReason,i=i.concat(Vn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=pN)d=!0,c="maxretry",i=i.concat(Vn(t.serverSyncTree_,a.currentWriteId,!0));else{const h=ly(t,a.path,o);a.currentInputSnapshot=h;const _=e[l].update(h.val());if(_!==void 0){Jd("transaction failed: Data returned ",_,a.path);let v=ve(_);typeof _=="object"&&_!=null&&$t(_,".priority")||(v=v.updatePriority(h.getPriority()));const E=a.currentWriteId,p=Zd(t),f=Yv(v,h,p);a.currentOutputSnapshotRaw=v,a.currentOutputSnapshotResolved=f,a.currentWriteId=oy(t),o.splice(o.indexOf(E),1),i=i.concat(Hv(t.serverSyncTree_,a.path,f,a.currentWriteId,a.applyLocally)),i=i.concat(Vn(t.serverSyncTree_,E,!0))}else d=!0,c="nodata",i=i.concat(Vn(t.serverSyncTree_,a.currentWriteId,!0))}Ct(t.eventQueue_,n,i),i=[],d&&(e[l].status=2,function(h){setTimeout(h,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(c==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(c),!1,null))))}ta(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)si(r[l]);th(t,t.transactionQueueTree_)}function ay(t,e){let n,r=t.transactionQueueTree_;for(n=U(e);n!==null&&oi(r)===void 0;)r=Yd(r,n),e=K(e),n=U(e);return r}function uy(t,e){const n=[];return cy(t,e,n),n.sort((r,i)=>r.order-i.order),n}function cy(t,e,n){const r=oi(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Xl(e,i=>{cy(t,i,n)})}function ta(t,e){const n=oi(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Jv(e,n.length>0?n:void 0)}Xl(e,r=>{ta(t,r)})}function dy(t,e){const n=Ls(ay(t,e)),r=Yd(t.transactionQueueTree_,e);return rN(r,i=>{Ka(t,i)}),Ka(t,r),Zv(r,i=>{Ka(t,i)}),n}function Ka(t,e){const n=oi(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(k(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(k(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Vn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Jv(e,void 0):n.length=s+1,Ct(t.eventQueue_,Ls(e),i);for(let o=0;o<r.length;o++)si(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RN(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function PN(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):We(`Invalid query segment '${n}' in query '${t}'`)}return e}const xp=function(t,e){const n=xN(t),r=n.namespace;n.domain==="firebase.com"&&Bt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Bt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Wk();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new cv(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new G(n.pathString)}},xN=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let d=t.indexOf("/");d===-1&&(d=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(d,c)),d<c&&(i=RN(t.substring(d,c)));const h=PN(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const _=e.slice(0,u);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ON{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ce(this.snapshot.exportVal())}}class AN{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return k(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return z(this._path)?null:yv(this._path)}get ref(){return new Ht(this._repo,this._path)}get _queryIdentifier(){const e=mp(this._queryParams),n=Nd(e);return n==="{}"?"default":n}get _queryObject(){return mp(this._queryParams)}isEqual(e){if(e=Me(e),!(e instanceof nh))return!1;const n=this._repo===e._repo,r=Od(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+kT(this._path)}}class Ht extends nh{constructor(e,n){super(e,n,new Md,!1)}get parent(){const e=Ev(this._path);return e===null?null:new Ht(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class gs{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new G(e),r=dc(this.ref,e);return new gs(this._node.getChild(n),r,ie)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new gs(i,dc(this.ref,r),ie)))}hasChild(e){const n=new G(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ye(t,e){return t=Me(t),t._checkNotDeleted("ref"),e!==void 0?dc(t._root,e):t._root}function dc(t,e){return t=Me(t),U(t._path)===null?uN("child","path",e):ny("child","path",e),new Ht(t._repo,de(t._path,e))}function rh(t){return ry("remove",t._path),Mt(t,null)}function Mt(t,e){t=Me(t),ry("set",t._path),aN("set",e,t._path);const n=new zl;return wN(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function qa(t){t=Me(t);const e=new hy(()=>{}),n=new na(e);return yN(t._repo,t,n).then(r=>new gs(r,new Ht(t._repo,t._path),t._queryParams.getIndex()))}class na{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new ON("value",this,new gs(e.snapshotNode,new Ht(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new AN(this,e,n):null}matches(e){return e instanceof na?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function DN(t,e,n,r,i){const s=new hy(n,void 0),o=new na(s);return SN(t._repo,t,o),()=>CN(t._repo,t,o)}function _s(t,e,n,r){return DN(t,"value",e)}M1(Ht);z1(Ht);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LN="FIREBASE_DATABASE_EMULATOR_HOST",hc={};let MN=!1;function bN(t,e,n,r){t.repoInfo_=new cv(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function FN(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Bt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ne("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=xp(s,i),l=o.repoInfo,a;typeof process<"u"&&Jf&&(a=Jf[LN]),a?(s=`http://${a}?ns=${l.namespace}`,o=xp(s,i),l=o.repoInfo):o.repoInfo.secure;const u=new Zk(t.name,t.options,e);cN("Invalid Firebase Database URL",o),z(o.path)||Bt("Database URL must point to the root of a Firebase Database (not including a child path).");const d=jN(l,t,u,new Xk(t.name,n));return new zN(d,t)}function UN(t,e){const n=hc[e];(!n||n[t.key]!==t)&&Bt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),IN(t),delete n[t.key]}function jN(t,e,n,r){let i=hc[e.name];i||(i={},hc[e.name]=i);let s=i[t.toURLString()];return s&&Bt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new mN(t,MN,n,r),i[t.toURLString()]=s,s}class zN{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(gN(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ht(this._repo,V())),this._rootInternal}_delete(){return this._rootInternal!==null&&(UN(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Bt("Cannot call "+e+" on a deleted database.")}}function ra(t=f_(),e){const n=_d(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=XE("database");r&&BN(n,...r)}return n}function BN(t,e,n,r={}){t=Me(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Bt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Bt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new To(To.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:ZE(r.mockUserToken,t.app.options.projectId);s=new To(o)}bN(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WN(t){bk(ni),Hr(new Jn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return FN(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),_n(Xf,Zf,t),_n(Xf,Zf,"esm2017")}Lt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Lt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};WN();const VN={apiKey:"AIzaSyAI-7IUqRvvujW1iTBMMSmhUs512yJOrQ4",authDomain:"app-efd1e.firebaseapp.com",projectId:"app-efd1e",storageBucket:"app-efd1e.appspot.com",messagingSenderId:"421651516908",appId:"1:421651516908:web:23dd5b38a1da02028844c9",databaseURL:"https://app-efd1e-default-rtdb.firebaseio.com/"},Ms=h_(VN),fy=Gl(Ms),dr=ra(Ms),$N=S.createContext();function HN({children:t}){const[e,n]=S.useState(null),[r,i]=S.useState(!0);S.useEffect(()=>{const o=wI(fy,l=>{n(l),i(!1)});return()=>o()},[]);const s={user:e,setUser:n};return g.jsx($N.Provider,{value:s,children:!r&&t})}function ia({message:t,onClose:e}){return S.useEffect(()=>{const n=setTimeout(()=>{e()},5e3);return()=>clearTimeout(n)},[e]),g.jsx("div",{className:"popup-overlay show",onClick:e,children:g.jsxs("div",{className:"popup-content show",onClick:n=>n.stopPropagation(),children:[g.jsx("h2",{children:"Congrats!"}),g.jsx("p",{children:t}),g.jsx("button",{className:"btn-primary",onClick:e,children:"OK"})]})})}const oo=ra(Ms);function GN(){const[t,e]=S.useState([]),[n,r]=S.useState([]),[i,s]=S.useState({userID:"",bookID:""}),[o,l]=S.useState(""),[a,u]=S.useState(!1),d=y=>{l(y),u(!0)},c=()=>{u(!1),l("")},h=()=>{const y=ye(oo,"users/");_s(y,E=>{const p=E.val();if(p){const f=Object.keys(p).map(m=>({...p[m],ID:m}));e(f)}else e([])})},_=()=>{const y=ye(oo,"books/");_s(y,E=>{const p=E.val();if(p){const f=Object.keys(p).map(m=>({...p[m],ID:m,available:p[m].available??!0}));r(f)}else r([])})};S.useEffect(()=>{h(),_()},[]);const v=y=>{y.preventDefault();const{userID:E,bookID:p}=i;if(!E||!p){d("Please select both a user and a book.");return}const f=ye(oo,`users/${E}/issuedBooks/${p}`),m=ye(oo,`books/${p}`);Mt(f,{userID:E,bookID:p,issueDate:new Date().toISOString()}).then(()=>{const w=n.find(T=>T.ID===p);if(w)return Mt(m,{...w,available:!1});throw new Error("Book not found for update.")}).then(()=>{d("Book issued successfully!"),s({userID:"",bookID:""}),_()}).catch(w=>{console.error("Error issuing book: ",w),d("Error issuing book.")})};return g.jsx("div",{className:"containerForm",children:g.jsxs("div",{className:"issue-book-section",children:[g.jsx("header",{className:"app-header",children:g.jsx("h1",{children:"Issue Book"})}),g.jsxs("div",{className:"card",children:[g.jsx("h2",{children:"Book Issue Panel"}),g.jsxs("form",{onSubmit:v,children:[g.jsxs("select",{value:i.userID,onChange:y=>s({...i,userID:y.target.value}),required:!0,children:[g.jsx("option",{value:"",children:"Select User"}),t.map(y=>g.jsx("option",{value:y.ID,children:y.name},y.ID))]}),g.jsxs("select",{value:i.bookID,onChange:y=>s({...i,bookID:y.target.value}),required:!0,children:[g.jsx("option",{value:"",children:"Select Book"}),n.filter(y=>y.available).map(y=>g.jsx("option",{value:y.ID,children:y.title},y.ID))]}),g.jsx("button",{type:"submit",className:"btn-primary",children:"Issue Book"})]})]}),a&&g.jsx(ia,{message:o,onClose:c})]})})}function KN(){const[t,e]=S.useState(""),[n,r]=S.useState(""),i=Gl(),s=jl();async function o(l){l.preventDefault();try{await _I(i,t,n),s("/dashboard/home")}catch(a){console.error("Error signing in: ",a)}}return g.jsx("div",{className:"containerForm",children:g.jsxs("div",{className:"signin-section",children:[g.jsx("header",{className:"app-header",children:g.jsx("h1",{children:"Sign In"})}),g.jsxs("div",{className:"card",children:[g.jsx("h2",{children:"Sign In to Your Account"}),g.jsxs("form",{onSubmit:o,children:[g.jsx("input",{type:"email",placeholder:"Email",value:t,onChange:l=>e(l.target.value),required:!0}),g.jsx("input",{type:"password",placeholder:"Password",value:n,onChange:l=>r(l.target.value),required:!0}),g.jsx("button",{type:"submit",className:"btn-primary",children:"Sign In"})]}),g.jsxs("div",{className:"signchange",children:["Don't have an account? ",g.jsx(Un,{to:"/signup",children:"Sign Up"})]}),g.jsxs("div",{className:"signchange",children:["Test Account",g.jsx("br",{})," sagarsoni@gmail.com",g.jsx("br",{})," pass: sagarsoni.gmail.com"]})]})]})})}const qN=()=>{const[t,e]=S.useState(""),[n,r]=S.useState(""),i=Gl(),s=async o=>{o.preventDefault();try{await gI(i,t,n),console.log("User signed up successfully")}catch(l){console.error("Error signing up: ",l)}};return g.jsx("div",{className:"containerForm",children:g.jsxs("div",{className:"signin-section",children:[g.jsx("header",{className:"app-header",children:g.jsx("h1",{children:"Sign Up"})}),g.jsxs("div",{className:"card",children:[g.jsx("h2",{children:"Create Your Account"}),g.jsxs("form",{onSubmit:s,children:[g.jsx("input",{onChange:o=>e(o.target.value),type:"email",placeholder:"Email",required:!0}),g.jsx("input",{onChange:o=>r(o.target.value),type:"password",placeholder:"Password",required:!0}),g.jsx("button",{className:"btn-primary",type:"submit",children:"Sign Up"})]}),g.jsxs("div",{className:"signchange",children:["Already have an account? ",g.jsx(Un,{to:"/signin",children:"Sign In"})]})]})]})})},lo=ra(Ms);function QN(){const[t,e]=S.useState([]),[n,r]=S.useState(null),[i,s]=S.useState({ID:"",title:"",author:""}),[o,l]=S.useState({ID:"",title:"",author:""}),[a,u]=S.useState(null),[d,c]=S.useState(""),[h,_]=S.useState(!1),v=I=>{c(I),_(!0)},y=()=>{_(!1),c("")},E=I=>{if(I.preventDefault(),o.ID&&o.title&&o.author){const A=ye(lo,`books/${o.ID}`);Mt(A,{ID:o.ID,title:o.title,author:o.author}).then(()=>{l({ID:"",title:"",author:""}),w(),v("Book added successfully! 🎉")}).catch(b=>{console.error("Error adding data: ",b),v("Error adding book.")})}},p=()=>{i.ID&&i.title&&i.author?i.ID!==a?m(a).then(()=>{f(i.ID,i.title,i.author)}).catch(I=>{console.error("Error deleting old data: ",I),v("Error updating book.")}):f(i.ID,i.title,i.author):(console.error("Invalid data for update"),v("Invalid data for update."))},f=(I,A,b)=>{const X=ye(lo,`books/${I}`);Mt(X,{ID:I,title:A,author:b}).then(()=>{r(null),s({ID:"",title:"",author:""}),u(null),w(),v("Book updated successfully! 🎉")}).catch(fe=>{console.error("Error creating/updating data: ",fe),v("Error updating book.")})},m=I=>{const A=ye(lo,`books/${I}`);return rh(A).then(()=>{w(),v("Book deleted successfully! 🎉")}).catch(b=>{console.error("Error deleting data: ",b),v("Error deleting book.")})},w=()=>{const I=ye(lo,"books/");_s(I,A=>{const b=A.val();if(b){const X=Object.keys(b).map(fe=>({...b[fe],key:fe}));e(X)}else e([])})};S.useEffect(()=>{w()},[]);const T=I=>{r(I.ID),s({...I}),u(I.ID)},x=()=>{r(null),s({ID:"",title:"",author:""}),u(null)},N=I=>{const{name:A,value:b}=I.target;s(X=>({...X,[A]:b}))},O=I=>{const{name:A,value:b}=I.target;l(X=>({...X,[A]:b}))};return g.jsxs("div",{className:"book-list-container",children:[g.jsx("header",{className:"app-header",children:g.jsx("h1",{children:"Book Management"})}),g.jsxs("main",{className:"main-content",children:[g.jsx("section",{className:"add-book-section",children:g.jsxs("div",{className:"card",children:[g.jsx("h2",{children:"Add New Book"}),g.jsx("form",{onSubmit:E,children:g.jsxs("div",{className:"form-fields",children:[g.jsx("input",{type:"text",placeholder:"ID",name:"ID",value:o.ID,onChange:O,required:!0,disabled:n!==null}),g.jsx("input",{type:"text",placeholder:"Title",name:"title",value:o.title,onChange:O,required:!0}),g.jsx("input",{type:"text",placeholder:"Author",name:"author",value:o.author,onChange:O,required:!0}),g.jsx("button",{type:"submit",className:"btn btn-primary",children:"Add Book"})]})})]})}),g.jsx("section",{className:"book-list-section",children:g.jsxs("div",{className:"card",children:[g.jsx("h2",{children:"Book List"}),g.jsxs("table",{className:"book-table",children:[g.jsx("thead",{children:g.jsxs("tr",{children:[g.jsx("th",{children:"ID"}),g.jsx("th",{children:"Title"}),g.jsx("th",{children:"Author"}),g.jsx("th",{children:"Actions"})]})}),g.jsx("tbody",{children:t.map(I=>g.jsxs("tr",{children:[g.jsx("td",{children:n===I.ID?g.jsx("input",{type:"text",name:"ID",value:i.ID,onChange:N}):I.ID}),g.jsx("td",{children:n===I.ID?g.jsx("input",{type:"text",name:"title",value:i.title,onChange:N}):I.title}),g.jsx("td",{children:n===I.ID?g.jsx("input",{type:"text",name:"author",value:i.author,onChange:N}):I.author}),g.jsx("td",{className:"booklistItemEdit",children:n===I.ID?g.jsxs(g.Fragment,{children:[g.jsx("button",{onClick:p,className:"btn btn-success",children:"Save"}),g.jsx("button",{onClick:x,className:"btn btn-secondary",children:"Cancel"})]}):g.jsxs(g.Fragment,{children:[g.jsx("button",{onClick:()=>T(I),className:"btn btn-primary",children:"Edit"}),g.jsx("button",{onClick:()=>m(I.ID),className:"btn btn-danger",children:"Delete"})]})})]},I.key))})]})]})})]}),h&&g.jsx(ia,{message:d,onClose:y})]})}const ao=ra(Ms);function YN(){const[t,e]=S.useState([]),[n,r]=S.useState([]),[i,s]=S.useState(""),[o,l]=S.useState(!1);S.useEffect(()=>{const c=()=>{const _=ye(ao,"users/");_s(_,v=>{const y=v.val();if(y){const E=Object.keys(y).map(p=>({...y[p],ID:p}));e(E)}else e([])})},h=()=>{const _=ye(ao,"books/");_s(_,v=>{const y=v.val();if(y){const E=Object.keys(y).map(p=>({...y[p],ID:p,available:y[p].available??!0}));r(E)}else r([])})};c(),h()},[]);const a=(c,h)=>{const _=ye(ao,`users/${c}/issuedBooks/${h}`),v=ye(ao,`books/${h}`);rh(_).then(()=>{const y=n.find(E=>E.ID===h);if(y)return Mt(v,{...y,available:!0}).then(()=>{u("Book returned successfully! 🎉")}).catch(E=>{console.error("Error updating book availability: ",E),u("Error updating book availability.")});console.error("Book not found for update."),u("Book not found for update.")}).catch(y=>{console.error("Error returning book: ",y),u("Error returning book.")})},u=c=>{s(c),l(!0)},d=()=>{l(!1),s("")};return g.jsxs("div",{className:"issued-books-section",children:[g.jsx("header",{className:"app-header",children:g.jsx("h1",{children:"Issued Books"})}),g.jsxs("div",{className:"card",children:[g.jsx("h2",{children:"Issued Books Management"}),g.jsx("div",{className:"table-container",children:g.jsxs("table",{className:"data-table",children:[g.jsx("thead",{children:g.jsxs("tr",{children:[g.jsx("th",{children:"User"}),g.jsx("th",{children:"Book"}),g.jsx("th",{children:"Action"})]})}),g.jsx("tbody",{children:t.map(c=>c.issuedBooks&&Object.keys(c.issuedBooks).map(h=>{const _=n.find(v=>v.ID===h);return _?g.jsxs("tr",{children:[g.jsx("td",{children:c.name}),g.jsx("td",{children:_.title}),g.jsx("td",{children:g.jsx("button",{onClick:()=>a(c.ID,h),className:"btn-primary",children:"Return Book"})})]},h):null}))})]})})]}),o&&g.jsx(ia,{message:i,onClose:d})]})}function JN(){const[t,e]=S.useState([]),[n,r]=S.useState(null),[i,s]=S.useState({ID:"",name:"",age:""}),[o,l]=S.useState({ID:"",name:"",age:""}),[a,u]=S.useState(null),[d,c]=S.useState(""),[h,_]=S.useState(!1),v=I=>{c(I),_(!0)},y=()=>{_(!1),c("")},E=async I=>{if(I.preventDefault(),o.ID&&o.name&&o.age){const A=ye(dr,`users/${o.ID}`);try{await Mt(A,{ID:o.ID,name:o.name,age:o.age}),l({ID:"",name:"",age:""}),w(),v("User added successfully! 🎉")}catch(b){console.error("Error adding data: ",b),v("Error adding user.")}}},p=async()=>{if(i.ID&&i.name&&i.age)if(i.ID!==a)try{await m(a),await f(i.ID,i.name,i.age)}catch(I){console.error("Error updating data: ",I),v("Error updating user.")}else await f(i.ID,i.name,i.age);else console.error("Invalid data for update")},f=async(I,A,b)=>{const X=ye(dr,`users/${I}`);try{await Mt(X,{ID:I,name:A,age:b}),r(null),s({ID:"",name:"",age:""}),u(null),w(),v("User updated successfully! 🎉")}catch(fe){console.error("Error creating/updating data: ",fe),v("Error updating user.")}},m=async I=>{const A=ye(dr,`users/${I}`),b=ye(dr,`users/${I}/issuedBooks`);try{const fe=(await qa(b)).val();if(fe){const bs=Object.keys(fe).map(async sa=>{const ar=ye(dr,`books/${sa}`),R=(await qa(ar)).val();R&&await Mt(ar,{...R,available:!0})});await Promise.all(bs)}await rh(A),w(),v("User deleted successfully! 🎉")}catch(X){console.error("Error deleting user or updating book availability: ",X),v("Error deleting user.")}},w=async()=>{const I=ye(dr,"users/");try{const b=(await qa(I)).val();if(b){const X=Object.keys(b).map(fe=>({...b[fe],key:fe}));e(X)}else e([])}catch(A){console.error("Error fetching data: ",A),v("Error fetching user data.")}};S.useEffect(()=>{w()},[]);const T=I=>{r(I.ID),s({...I}),u(I.ID)},x=()=>{r(null),s({ID:"",name:"",age:""}),u(null)},N=I=>{const{name:A,value:b}=I.target;s(X=>({...X,[A]:b}))},O=I=>{const{name:A,value:b}=I.target;l(X=>({...X,[A]:b}))};return g.jsxs("div",{className:"user-list-container",children:[g.jsx("header",{className:"app-header",children:g.jsx("h1",{children:"User Management"})}),g.jsxs("main",{className:"main-content",children:[g.jsx("section",{className:"add-user-section",children:g.jsxs("div",{className:"card",children:[g.jsx("h2",{children:"Add New User"}),g.jsx("form",{onSubmit:E,children:g.jsxs("div",{className:"form-fields",children:[g.jsx("input",{type:"text",placeholder:"ID",name:"ID",value:o.ID,onChange:O,required:!0,disabled:n!==null}),g.jsx("input",{type:"text",placeholder:"Name",name:"name",value:o.name,onChange:O,required:!0}),g.jsx("input",{type:"number",placeholder:"Age",name:"age",value:o.age,onChange:O,required:!0}),g.jsx("button",{type:"submit",className:"btn btn-primary",children:"Add User"})]})})]})}),g.jsx("section",{className:"user-list-section",children:g.jsxs("div",{className:"card",children:[g.jsx("h2",{children:"User List"}),g.jsxs("table",{className:"user-table",children:[g.jsx("thead",{children:g.jsxs("tr",{children:[g.jsx("th",{children:"ID"}),g.jsx("th",{children:"Name"}),g.jsx("th",{children:"Age"}),g.jsx("th",{children:"Actions"})]})}),g.jsx("tbody",{children:t.map(I=>g.jsxs("tr",{children:[g.jsx("td",{children:n===I.ID?g.jsx("input",{type:"text",name:"ID",value:i.ID,onChange:N}):I.ID}),g.jsx("td",{children:n===I.ID?g.jsx("input",{type:"text",name:"name",value:i.name,onChange:N}):I.name}),g.jsx("td",{children:n===I.ID?g.jsx("input",{type:"number",name:"age",value:i.age,onChange:N}):I.age}),g.jsx("td",{className:"userItemEdit",children:n===I.ID?g.jsxs(g.Fragment,{children:[g.jsx("button",{onClick:p,className:"btn btn-success",children:"Save"}),g.jsx("button",{onClick:x,className:"btn btn-secondary",children:"Cancel"})]}):g.jsxs(g.Fragment,{children:[g.jsx("button",{onClick:()=>T(I),className:"btn btn-primary",children:"Edit"}),g.jsx("button",{onClick:()=>m(I.ID),className:"btn btn-danger",children:"Delete"})]})})]},I.key))})]})]})})]}),h&&g.jsx(ia,{message:d,onClose:y})]})}const XN=()=>g.jsx("div",{children:g.jsx(Zg,{})}),ZN=()=>fy.currentUser?g.jsx(Zg,{}):g.jsx(OE,{to:"/signin"}),eR=()=>{const t=Gl(),[e,n]=S.useState(!1),r=S.useRef(null),i=jl(),s=()=>{n(!e)},o=u=>{r.current&&!r.current.contains(u.target)&&!u.target.closest(".menu-toggle")&&n(!1)},l=()=>{n(!1)};S.useEffect(()=>(document.addEventListener("mousedown",o),()=>{document.removeEventListener("mousedown",o)}),[]);async function a(){try{await EI(t),i("/signin")}catch(u){console.error("Error signing out: ",u)}}return g.jsx("nav",{className:"main-nav",children:g.jsxs("div",{className:"nav-container",children:[g.jsx("div",{className:"logo-section",children:g.jsx(Un,{to:"/",children:g.jsx("img",{src:"/my-logo.svg",alt:"Logo",className:"logo-img"})})}),g.jsx("button",{className:"menu-toggle",onClick:s,children:g.jsx("img",{className:"menu-icon",src:"/ham.png",alt:"Menu"})}),g.jsxs("ul",{ref:r,className:`nav-links ${e?"nav-links-open":""}`,children:[g.jsx("li",{children:g.jsx(Un,{to:"/dashboard/issued",className:"nav-item",onClick:l,children:"Issued Books"})}),g.jsx("li",{children:g.jsx(Un,{to:"/dashboard/users",className:"nav-item",onClick:l,children:"Users"})}),g.jsx("li",{children:g.jsx(Un,{to:"/dashboard/books",className:"nav-item",onClick:l,children:"Books"})}),g.jsxs("div",{className:"navButtons",children:[g.jsx("li",{children:g.jsx(Un,{to:"/",children:g.jsx("button",{className:"action-button",onClick:l,children:"Issue Book"})})}),g.jsx("li",{children:g.jsx("button",{className:"signout",onClick:a,children:"Sign Out"})})]})]})]})})},tR=({children:t})=>g.jsxs(g.Fragment,{children:[g.jsx(eR,{}),t]});function nR(){return g.jsx(HN,{children:g.jsx(zE,{children:g.jsxs(DE,{children:[g.jsxs(mt,{path:"/",element:g.jsx(XN,{}),children:[g.jsx(mt,{path:"signin",element:g.jsx(KN,{})}),g.jsx(mt,{path:"signup",element:g.jsx(qN,{})})]}),g.jsxs(mt,{path:"/dashboard",element:g.jsx(tR,{children:g.jsx(ZN,{})}),children:[g.jsx(mt,{path:"home",element:g.jsx(GN,{})})," ",g.jsx(mt,{path:"books",element:g.jsx(QN,{})}),g.jsx(mt,{path:"issued",element:g.jsx(YN,{})}),g.jsx(mt,{path:"users",element:g.jsx(JN,{})})]}),g.jsx(mt,{path:"*",element:g.jsx("div",{children:"404 Not Found"})})]})})})}Qa.createRoot(document.getElementById("root")).render(g.jsx(Bp.StrictMode,{children:g.jsx(nR,{})}));
