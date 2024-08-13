function xy(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function $p(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function Oy(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),n}var Hp={exports:{}},Nl={},Gp={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ss=Symbol.for("react.element"),Ay=Symbol.for("react.portal"),Dy=Symbol.for("react.fragment"),Ly=Symbol.for("react.strict_mode"),My=Symbol.for("react.profiler"),by=Symbol.for("react.provider"),Fy=Symbol.for("react.context"),Uy=Symbol.for("react.forward_ref"),jy=Symbol.for("react.suspense"),By=Symbol.for("react.memo"),zy=Symbol.for("react.lazy"),ph=Symbol.iterator;function Vy(t){return t===null||typeof t!="object"?null:(t=ph&&t[ph]||t["@@iterator"],typeof t=="function"?t:null)}var Kp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Yp=Object.assign,qp={};function Xr(t,e,n){this.props=t,this.context=e,this.refs=qp,this.updater=n||Kp}Xr.prototype.isReactComponent={};Xr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Xr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Qp(){}Qp.prototype=Xr.prototype;function wc(t,e,n){this.props=t,this.context=e,this.refs=qp,this.updater=n||Kp}var Sc=wc.prototype=new Qp;Sc.constructor=wc;Yp(Sc,Xr.prototype);Sc.isPureReactComponent=!0;var mh=Array.isArray,Jp=Object.prototype.hasOwnProperty,Cc={current:null},Xp={key:!0,ref:!0,__self:!0,__source:!0};function Zp(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Jp.call(e,r)&&!Xp.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ss,type:t,key:s,ref:o,props:i,_owner:Cc.current}}function Wy(t,e){return{$$typeof:Ss,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ic(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ss}function $y(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var gh=/\/+/g;function fa(t,e){return typeof t=="object"&&t!==null&&t.key!=null?$y(""+t.key):e.toString(36)}function po(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ss:case Ay:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+fa(o,0):r,mh(i)?(n="",t!=null&&(n=t.replace(gh,"$&/")+"/"),po(i,e,n,"",function(u){return u})):i!=null&&(Ic(i)&&(i=Wy(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(gh,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",mh(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+fa(s,l);o+=po(s,e,n,a,i)}else if(a=Vy(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+fa(s,l++),o+=po(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function $s(t,e,n){if(t==null)return t;var r=[],i=0;return po(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Hy(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Le={current:null},mo={transition:null},Gy={ReactCurrentDispatcher:Le,ReactCurrentBatchConfig:mo,ReactCurrentOwner:Cc};function em(){throw Error("act(...) is not supported in production builds of React.")}z.Children={map:$s,forEach:function(t,e,n){$s(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return $s(t,function(){e++}),e},toArray:function(t){return $s(t,function(e){return e})||[]},only:function(t){if(!Ic(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};z.Component=Xr;z.Fragment=Dy;z.Profiler=My;z.PureComponent=wc;z.StrictMode=Ly;z.Suspense=jy;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gy;z.act=em;z.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Yp({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Cc.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)Jp.call(e,a)&&!Xp.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Ss,type:t.type,key:i,ref:s,props:r,_owner:o}};z.createContext=function(t){return t={$$typeof:Fy,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:by,_context:t},t.Consumer=t};z.createElement=Zp;z.createFactory=function(t){var e=Zp.bind(null,t);return e.type=t,e};z.createRef=function(){return{current:null}};z.forwardRef=function(t){return{$$typeof:Uy,render:t}};z.isValidElement=Ic;z.lazy=function(t){return{$$typeof:zy,_payload:{_status:-1,_result:t},_init:Hy}};z.memo=function(t,e){return{$$typeof:By,type:t,compare:e===void 0?null:e}};z.startTransition=function(t){var e=mo.transition;mo.transition={};try{t()}finally{mo.transition=e}};z.unstable_act=em;z.useCallback=function(t,e){return Le.current.useCallback(t,e)};z.useContext=function(t){return Le.current.useContext(t)};z.useDebugValue=function(){};z.useDeferredValue=function(t){return Le.current.useDeferredValue(t)};z.useEffect=function(t,e){return Le.current.useEffect(t,e)};z.useId=function(){return Le.current.useId()};z.useImperativeHandle=function(t,e,n){return Le.current.useImperativeHandle(t,e,n)};z.useInsertionEffect=function(t,e){return Le.current.useInsertionEffect(t,e)};z.useLayoutEffect=function(t,e){return Le.current.useLayoutEffect(t,e)};z.useMemo=function(t,e){return Le.current.useMemo(t,e)};z.useReducer=function(t,e,n){return Le.current.useReducer(t,e,n)};z.useRef=function(t){return Le.current.useRef(t)};z.useState=function(t){return Le.current.useState(t)};z.useSyncExternalStore=function(t,e,n){return Le.current.useSyncExternalStore(t,e,n)};z.useTransition=function(){return Le.current.useTransition()};z.version="18.3.1";Gp.exports=z;var S=Gp.exports;const tm=$p(S),Ky=xy({__proto__:null,default:tm},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yy=S,qy=Symbol.for("react.element"),Qy=Symbol.for("react.fragment"),Jy=Object.prototype.hasOwnProperty,Xy=Yy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Zy={key:!0,ref:!0,__self:!0,__source:!0};function nm(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Jy.call(e,r)&&!Zy.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:qy,type:t,key:s,ref:o,props:i,_owner:Xy.current}}Nl.Fragment=Qy;Nl.jsx=nm;Nl.jsxs=nm;Hp.exports=Nl;var m=Hp.exports,nu={},rm={exports:{}},qe={},im={exports:{}},sm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(R,M){var F=R.length;R.push(M);e:for(;0<F;){var se=F-1>>>1,me=R[se];if(0<i(me,M))R[se]=M,R[F]=me,F=se;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var M=R[0],F=R.pop();if(F!==M){R[0]=F;e:for(var se=0,me=R.length,Vs=me>>>1;se<Vs;){var Ln=2*(se+1)-1,ha=R[Ln],Mn=Ln+1,Ws=R[Mn];if(0>i(ha,F))Mn<me&&0>i(Ws,ha)?(R[se]=Ws,R[Mn]=F,se=Mn):(R[se]=ha,R[Ln]=F,se=Ln);else if(Mn<me&&0>i(Ws,F))R[se]=Ws,R[Mn]=F,se=Mn;else break e}}return M}function i(R,M){var F=R.sortIndex-M.sortIndex;return F!==0?F:R.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],d=1,c=null,h=3,_=!1,v=!1,y=!1,w=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(R){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=R)r(u),M.sortIndex=M.expirationTime,e(a,M);else break;M=n(u)}}function E(R){if(y=!1,g(R),!v)if(n(a)!==null)v=!0,dr(T);else{var M=n(u);M!==null&&zs(E,M.startTime-R)}}function T(R,M){v=!1,y&&(y=!1,p(O),O=-1),_=!0;var F=h;try{for(g(M),c=n(a);c!==null&&(!(c.expirationTime>M)||R&&!b());){var se=c.callback;if(typeof se=="function"){c.callback=null,h=c.priorityLevel;var me=se(c.expirationTime<=M);M=t.unstable_now(),typeof me=="function"?c.callback=me:c===n(a)&&r(a),g(M)}else r(a);c=n(a)}if(c!==null)var Vs=!0;else{var Ln=n(u);Ln!==null&&zs(E,Ln.startTime-M),Vs=!1}return Vs}finally{c=null,h=F,_=!1}}var x=!1,N=null,O=-1,I=5,A=-1;function b(){return!(t.unstable_now()-A<I)}function X(){if(N!==null){var R=t.unstable_now();A=R;var M=!0;try{M=N(!0,R)}finally{M?pe():(x=!1,N=null)}}else x=!1}var pe;if(typeof f=="function")pe=function(){f(X)};else if(typeof MessageChannel<"u"){var Bs=new MessageChannel,da=Bs.port2;Bs.port1.onmessage=X,pe=function(){da.postMessage(null)}}else pe=function(){w(X,0)};function dr(R){N=R,x||(x=!0,pe())}function zs(R,M){O=w(function(){R(t.unstable_now())},M)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_continueExecution=function(){v||_||(v=!0,dr(T))},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<R?Math.floor(1e3/R):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(R){switch(h){case 1:case 2:case 3:var M=3;break;default:M=h}var F=h;h=M;try{return R()}finally{h=F}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(R,M){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var F=h;h=R;try{return M()}finally{h=F}},t.unstable_scheduleCallback=function(R,M,F){var se=t.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?se+F:se):F=se,R){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=F+me,R={id:d++,callback:M,priorityLevel:R,startTime:F,expirationTime:me,sortIndex:-1},F>se?(R.sortIndex=F,e(u,R),n(a)===null&&R===n(u)&&(y?(p(O),O=-1):y=!0,zs(E,F-se))):(R.sortIndex=me,e(a,R),v||_||(v=!0,dr(T))),R},t.unstable_shouldYield=b,t.unstable_wrapCallback=function(R){var M=h;return function(){var F=h;h=M;try{return R.apply(this,arguments)}finally{h=F}}}})(sm);im.exports=sm;var eE=im.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tE=S,Ye=eE;function C(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var om=new Set,$i={};function lr(t,e){Br(t,e),Br(t+"Capture",e)}function Br(t,e){for($i[t]=e,t=0;t<e.length;t++)om.add(e[t])}var Ft=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ru=Object.prototype.hasOwnProperty,nE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_h={},vh={};function rE(t){return ru.call(vh,t)?!0:ru.call(_h,t)?!1:nE.test(t)?vh[t]=!0:(_h[t]=!0,!1)}function iE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function sE(t,e,n,r){if(e===null||typeof e>"u"||iE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Me(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ie[t]=new Me(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ie[e]=new Me(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ie[t]=new Me(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ie[t]=new Me(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ie[t]=new Me(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ie[t]=new Me(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ie[t]=new Me(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ie[t]=new Me(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ie[t]=new Me(t,5,!1,t.toLowerCase(),null,!1,!1)});var kc=/[\-:]([a-z])/g;function Tc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(kc,Tc);Ie[e]=new Me(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(kc,Tc);Ie[e]=new Me(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(kc,Tc);Ie[e]=new Me(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ie[t]=new Me(t,1,!1,t.toLowerCase(),null,!1,!1)});Ie.xlinkHref=new Me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ie[t]=new Me(t,1,!1,t.toLowerCase(),null,!0,!0)});function Nc(t,e,n,r){var i=Ie.hasOwnProperty(e)?Ie[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(sE(e,n,i,r)&&(n=null),r||i===null?rE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Wt=tE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Hs=Symbol.for("react.element"),mr=Symbol.for("react.portal"),gr=Symbol.for("react.fragment"),Rc=Symbol.for("react.strict_mode"),iu=Symbol.for("react.profiler"),lm=Symbol.for("react.provider"),am=Symbol.for("react.context"),Pc=Symbol.for("react.forward_ref"),su=Symbol.for("react.suspense"),ou=Symbol.for("react.suspense_list"),xc=Symbol.for("react.memo"),Qt=Symbol.for("react.lazy"),um=Symbol.for("react.offscreen"),yh=Symbol.iterator;function ci(t){return t===null||typeof t!="object"?null:(t=yh&&t[yh]||t["@@iterator"],typeof t=="function"?t:null)}var ne=Object.assign,pa;function Si(t){if(pa===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);pa=e&&e[1]||""}return`
`+pa+t}var ma=!1;function ga(t,e){if(!t||ma)return"";ma=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{ma=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Si(t):""}function oE(t){switch(t.tag){case 5:return Si(t.type);case 16:return Si("Lazy");case 13:return Si("Suspense");case 19:return Si("SuspenseList");case 0:case 2:case 15:return t=ga(t.type,!1),t;case 11:return t=ga(t.type.render,!1),t;case 1:return t=ga(t.type,!0),t;default:return""}}function lu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case gr:return"Fragment";case mr:return"Portal";case iu:return"Profiler";case Rc:return"StrictMode";case su:return"Suspense";case ou:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case am:return(t.displayName||"Context")+".Consumer";case lm:return(t._context.displayName||"Context")+".Provider";case Pc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case xc:return e=t.displayName||null,e!==null?e:lu(t.type)||"Memo";case Qt:e=t._payload,t=t._init;try{return lu(t(e))}catch{}}return null}function lE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return lu(e);case 8:return e===Rc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Sn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function cm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function aE(t){var e=cm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Gs(t){t._valueTracker||(t._valueTracker=aE(t))}function dm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=cm(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Oo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function au(t,e){var n=e.checked;return ne({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Eh(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Sn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function hm(t,e){e=e.checked,e!=null&&Nc(t,"checked",e,!1)}function uu(t,e){hm(t,e);var n=Sn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?cu(t,e.type,n):e.hasOwnProperty("defaultValue")&&cu(t,e.type,Sn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function wh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function cu(t,e,n){(e!=="number"||Oo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ci=Array.isArray;function Pr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Sn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function du(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(C(91));return ne({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Sh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(C(92));if(Ci(n)){if(1<n.length)throw Error(C(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Sn(n)}}function fm(t,e){var n=Sn(e.value),r=Sn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Ch(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function pm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?pm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ks,mm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ks=Ks||document.createElement("div"),Ks.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ks.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Hi(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ri={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},uE=["Webkit","ms","Moz","O"];Object.keys(Ri).forEach(function(t){uE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ri[e]=Ri[t]})});function gm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ri.hasOwnProperty(t)&&Ri[t]?(""+e).trim():e+"px"}function _m(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=gm(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var cE=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fu(t,e){if(e){if(cE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(C(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(C(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(C(61))}if(e.style!=null&&typeof e.style!="object")throw Error(C(62))}}function pu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mu=null;function Oc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var gu=null,xr=null,Or=null;function Ih(t){if(t=ks(t)){if(typeof gu!="function")throw Error(C(280));var e=t.stateNode;e&&(e=Al(e),gu(t.stateNode,t.type,e))}}function vm(t){xr?Or?Or.push(t):Or=[t]:xr=t}function ym(){if(xr){var t=xr,e=Or;if(Or=xr=null,Ih(t),e)for(t=0;t<e.length;t++)Ih(e[t])}}function Em(t,e){return t(e)}function wm(){}var _a=!1;function Sm(t,e,n){if(_a)return t(e,n);_a=!0;try{return Em(t,e,n)}finally{_a=!1,(xr!==null||Or!==null)&&(wm(),ym())}}function Gi(t,e){var n=t.stateNode;if(n===null)return null;var r=Al(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(C(231,e,typeof n));return n}var _u=!1;if(Ft)try{var di={};Object.defineProperty(di,"passive",{get:function(){_u=!0}}),window.addEventListener("test",di,di),window.removeEventListener("test",di,di)}catch{_u=!1}function dE(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var Pi=!1,Ao=null,Do=!1,vu=null,hE={onError:function(t){Pi=!0,Ao=t}};function fE(t,e,n,r,i,s,o,l,a){Pi=!1,Ao=null,dE.apply(hE,arguments)}function pE(t,e,n,r,i,s,o,l,a){if(fE.apply(this,arguments),Pi){if(Pi){var u=Ao;Pi=!1,Ao=null}else throw Error(C(198));Do||(Do=!0,vu=u)}}function ar(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Cm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function kh(t){if(ar(t)!==t)throw Error(C(188))}function mE(t){var e=t.alternate;if(!e){if(e=ar(t),e===null)throw Error(C(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return kh(i),t;if(s===r)return kh(i),e;s=s.sibling}throw Error(C(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?t:e}function Im(t){return t=mE(t),t!==null?km(t):null}function km(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=km(t);if(e!==null)return e;t=t.sibling}return null}var Tm=Ye.unstable_scheduleCallback,Th=Ye.unstable_cancelCallback,gE=Ye.unstable_shouldYield,_E=Ye.unstable_requestPaint,oe=Ye.unstable_now,vE=Ye.unstable_getCurrentPriorityLevel,Ac=Ye.unstable_ImmediatePriority,Nm=Ye.unstable_UserBlockingPriority,Lo=Ye.unstable_NormalPriority,yE=Ye.unstable_LowPriority,Rm=Ye.unstable_IdlePriority,Rl=null,Et=null;function EE(t){if(Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(Rl,t,void 0,(t.current.flags&128)===128)}catch{}}var dt=Math.clz32?Math.clz32:CE,wE=Math.log,SE=Math.LN2;function CE(t){return t>>>=0,t===0?32:31-(wE(t)/SE|0)|0}var Ys=64,qs=4194304;function Ii(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Mo(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Ii(l):(s&=o,s!==0&&(r=Ii(s)))}else o=n&~i,o!==0?r=Ii(o):s!==0&&(r=Ii(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-dt(e),i=1<<n,r|=t[n],e&=~i;return r}function IE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kE(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-dt(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=IE(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function yu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Pm(){var t=Ys;return Ys<<=1,!(Ys&4194240)&&(Ys=64),t}function va(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Cs(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-dt(e),t[e]=n}function TE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-dt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Dc(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-dt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var $=0;function xm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Om,Lc,Am,Dm,Lm,Eu=!1,Qs=[],an=null,un=null,cn=null,Ki=new Map,Yi=new Map,Xt=[],NE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Nh(t,e){switch(t){case"focusin":case"focusout":an=null;break;case"dragenter":case"dragleave":un=null;break;case"mouseover":case"mouseout":cn=null;break;case"pointerover":case"pointerout":Ki.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yi.delete(e.pointerId)}}function hi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ks(e),e!==null&&Lc(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function RE(t,e,n,r,i){switch(e){case"focusin":return an=hi(an,t,e,n,r,i),!0;case"dragenter":return un=hi(un,t,e,n,r,i),!0;case"mouseover":return cn=hi(cn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ki.set(s,hi(Ki.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Yi.set(s,hi(Yi.get(s)||null,t,e,n,r,i)),!0}return!1}function Mm(t){var e=Vn(t.target);if(e!==null){var n=ar(e);if(n!==null){if(e=n.tag,e===13){if(e=Cm(n),e!==null){t.blockedOn=e,Lm(t.priority,function(){Am(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function go(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=wu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);mu=r,n.target.dispatchEvent(r),mu=null}else return e=ks(n),e!==null&&Lc(e),t.blockedOn=n,!1;e.shift()}return!0}function Rh(t,e,n){go(t)&&n.delete(e)}function PE(){Eu=!1,an!==null&&go(an)&&(an=null),un!==null&&go(un)&&(un=null),cn!==null&&go(cn)&&(cn=null),Ki.forEach(Rh),Yi.forEach(Rh)}function fi(t,e){t.blockedOn===e&&(t.blockedOn=null,Eu||(Eu=!0,Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority,PE)))}function qi(t){function e(i){return fi(i,t)}if(0<Qs.length){fi(Qs[0],t);for(var n=1;n<Qs.length;n++){var r=Qs[n];r.blockedOn===t&&(r.blockedOn=null)}}for(an!==null&&fi(an,t),un!==null&&fi(un,t),cn!==null&&fi(cn,t),Ki.forEach(e),Yi.forEach(e),n=0;n<Xt.length;n++)r=Xt[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Xt.length&&(n=Xt[0],n.blockedOn===null);)Mm(n),n.blockedOn===null&&Xt.shift()}var Ar=Wt.ReactCurrentBatchConfig,bo=!0;function xE(t,e,n,r){var i=$,s=Ar.transition;Ar.transition=null;try{$=1,Mc(t,e,n,r)}finally{$=i,Ar.transition=s}}function OE(t,e,n,r){var i=$,s=Ar.transition;Ar.transition=null;try{$=4,Mc(t,e,n,r)}finally{$=i,Ar.transition=s}}function Mc(t,e,n,r){if(bo){var i=wu(t,e,n,r);if(i===null)Ra(t,e,r,Fo,n),Nh(t,r);else if(RE(i,t,e,n,r))r.stopPropagation();else if(Nh(t,r),e&4&&-1<NE.indexOf(t)){for(;i!==null;){var s=ks(i);if(s!==null&&Om(s),s=wu(t,e,n,r),s===null&&Ra(t,e,r,Fo,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ra(t,e,r,null,n)}}var Fo=null;function wu(t,e,n,r){if(Fo=null,t=Oc(r),t=Vn(t),t!==null)if(e=ar(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Cm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Fo=t,null}function bm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(vE()){case Ac:return 1;case Nm:return 4;case Lo:case yE:return 16;case Rm:return 536870912;default:return 16}default:return 16}}var sn=null,bc=null,_o=null;function Fm(){if(_o)return _o;var t,e=bc,n=e.length,r,i="value"in sn?sn.value:sn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return _o=i.slice(t,1<r?1-r:void 0)}function vo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Js(){return!0}function Ph(){return!1}function Qe(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Js:Ph,this.isPropagationStopped=Ph,this}return ne(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Js)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Js)},persist:function(){},isPersistent:Js}),e}var Zr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fc=Qe(Zr),Is=ne({},Zr,{view:0,detail:0}),AE=Qe(Is),ya,Ea,pi,Pl=ne({},Is,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Uc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==pi&&(pi&&t.type==="mousemove"?(ya=t.screenX-pi.screenX,Ea=t.screenY-pi.screenY):Ea=ya=0,pi=t),ya)},movementY:function(t){return"movementY"in t?t.movementY:Ea}}),xh=Qe(Pl),DE=ne({},Pl,{dataTransfer:0}),LE=Qe(DE),ME=ne({},Is,{relatedTarget:0}),wa=Qe(ME),bE=ne({},Zr,{animationName:0,elapsedTime:0,pseudoElement:0}),FE=Qe(bE),UE=ne({},Zr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),jE=Qe(UE),BE=ne({},Zr,{data:0}),Oh=Qe(BE),zE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},VE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},WE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $E(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=WE[t])?!!e[t]:!1}function Uc(){return $E}var HE=ne({},Is,{key:function(t){if(t.key){var e=zE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=vo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?VE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Uc,charCode:function(t){return t.type==="keypress"?vo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?vo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),GE=Qe(HE),KE=ne({},Pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ah=Qe(KE),YE=ne({},Is,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Uc}),qE=Qe(YE),QE=ne({},Zr,{propertyName:0,elapsedTime:0,pseudoElement:0}),JE=Qe(QE),XE=ne({},Pl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ZE=Qe(XE),ew=[9,13,27,32],jc=Ft&&"CompositionEvent"in window,xi=null;Ft&&"documentMode"in document&&(xi=document.documentMode);var tw=Ft&&"TextEvent"in window&&!xi,Um=Ft&&(!jc||xi&&8<xi&&11>=xi),Dh=" ",Lh=!1;function jm(t,e){switch(t){case"keyup":return ew.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var _r=!1;function nw(t,e){switch(t){case"compositionend":return Bm(e);case"keypress":return e.which!==32?null:(Lh=!0,Dh);case"textInput":return t=e.data,t===Dh&&Lh?null:t;default:return null}}function rw(t,e){if(_r)return t==="compositionend"||!jc&&jm(t,e)?(t=Fm(),_o=bc=sn=null,_r=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Um&&e.locale!=="ko"?null:e.data;default:return null}}var iw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!iw[t.type]:e==="textarea"}function zm(t,e,n,r){vm(r),e=Uo(e,"onChange"),0<e.length&&(n=new Fc("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Oi=null,Qi=null;function sw(t){Xm(t,0)}function xl(t){var e=Er(t);if(dm(e))return t}function ow(t,e){if(t==="change")return e}var Vm=!1;if(Ft){var Sa;if(Ft){var Ca="oninput"in document;if(!Ca){var bh=document.createElement("div");bh.setAttribute("oninput","return;"),Ca=typeof bh.oninput=="function"}Sa=Ca}else Sa=!1;Vm=Sa&&(!document.documentMode||9<document.documentMode)}function Fh(){Oi&&(Oi.detachEvent("onpropertychange",Wm),Qi=Oi=null)}function Wm(t){if(t.propertyName==="value"&&xl(Qi)){var e=[];zm(e,Qi,t,Oc(t)),Sm(sw,e)}}function lw(t,e,n){t==="focusin"?(Fh(),Oi=e,Qi=n,Oi.attachEvent("onpropertychange",Wm)):t==="focusout"&&Fh()}function aw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return xl(Qi)}function uw(t,e){if(t==="click")return xl(e)}function cw(t,e){if(t==="input"||t==="change")return xl(e)}function dw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var pt=typeof Object.is=="function"?Object.is:dw;function Ji(t,e){if(pt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ru.call(e,i)||!pt(t[i],e[i]))return!1}return!0}function Uh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function jh(t,e){var n=Uh(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Uh(n)}}function $m(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?$m(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Hm(){for(var t=window,e=Oo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Oo(t.document)}return e}function Bc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function hw(t){var e=Hm(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&$m(n.ownerDocument.documentElement,n)){if(r!==null&&Bc(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=jh(n,s);var o=jh(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var fw=Ft&&"documentMode"in document&&11>=document.documentMode,vr=null,Su=null,Ai=null,Cu=!1;function Bh(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Cu||vr==null||vr!==Oo(r)||(r=vr,"selectionStart"in r&&Bc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ai&&Ji(Ai,r)||(Ai=r,r=Uo(Su,"onSelect"),0<r.length&&(e=new Fc("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=vr)))}function Xs(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var yr={animationend:Xs("Animation","AnimationEnd"),animationiteration:Xs("Animation","AnimationIteration"),animationstart:Xs("Animation","AnimationStart"),transitionend:Xs("Transition","TransitionEnd")},Ia={},Gm={};Ft&&(Gm=document.createElement("div").style,"AnimationEvent"in window||(delete yr.animationend.animation,delete yr.animationiteration.animation,delete yr.animationstart.animation),"TransitionEvent"in window||delete yr.transitionend.transition);function Ol(t){if(Ia[t])return Ia[t];if(!yr[t])return t;var e=yr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Gm)return Ia[t]=e[n];return t}var Km=Ol("animationend"),Ym=Ol("animationiteration"),qm=Ol("animationstart"),Qm=Ol("transitionend"),Jm=new Map,zh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nn(t,e){Jm.set(t,e),lr(e,[t])}for(var ka=0;ka<zh.length;ka++){var Ta=zh[ka],pw=Ta.toLowerCase(),mw=Ta[0].toUpperCase()+Ta.slice(1);Nn(pw,"on"+mw)}Nn(Km,"onAnimationEnd");Nn(Ym,"onAnimationIteration");Nn(qm,"onAnimationStart");Nn("dblclick","onDoubleClick");Nn("focusin","onFocus");Nn("focusout","onBlur");Nn(Qm,"onTransitionEnd");Br("onMouseEnter",["mouseout","mouseover"]);Br("onMouseLeave",["mouseout","mouseover"]);Br("onPointerEnter",["pointerout","pointerover"]);Br("onPointerLeave",["pointerout","pointerover"]);lr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));lr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));lr("onBeforeInput",["compositionend","keypress","textInput","paste"]);lr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));lr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));lr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ki="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gw=new Set("cancel close invalid load scroll toggle".split(" ").concat(ki));function Vh(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,pE(r,e,void 0,t),t.currentTarget=null}function Xm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;Vh(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;Vh(i,l,u),s=a}}}if(Do)throw t=vu,Do=!1,vu=null,t}function q(t,e){var n=e[Ru];n===void 0&&(n=e[Ru]=new Set);var r=t+"__bubble";n.has(r)||(Zm(e,t,2,!1),n.add(r))}function Na(t,e,n){var r=0;e&&(r|=4),Zm(n,t,r,e)}var Zs="_reactListening"+Math.random().toString(36).slice(2);function Xi(t){if(!t[Zs]){t[Zs]=!0,om.forEach(function(n){n!=="selectionchange"&&(gw.has(n)||Na(n,!1,t),Na(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Zs]||(e[Zs]=!0,Na("selectionchange",!1,e))}}function Zm(t,e,n,r){switch(bm(e)){case 1:var i=xE;break;case 4:i=OE;break;default:i=Mc}n=i.bind(null,e,n,t),i=void 0,!_u||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Ra(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Vn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Sm(function(){var u=s,d=Oc(n),c=[];e:{var h=Jm.get(t);if(h!==void 0){var _=Fc,v=t;switch(t){case"keypress":if(vo(n)===0)break e;case"keydown":case"keyup":_=GE;break;case"focusin":v="focus",_=wa;break;case"focusout":v="blur",_=wa;break;case"beforeblur":case"afterblur":_=wa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=xh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=LE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=qE;break;case Km:case Ym:case qm:_=FE;break;case Qm:_=JE;break;case"scroll":_=AE;break;case"wheel":_=ZE;break;case"copy":case"cut":case"paste":_=jE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Ah}var y=(e&4)!==0,w=!y&&t==="scroll",p=y?h!==null?h+"Capture":null:h;y=[];for(var f=u,g;f!==null;){g=f;var E=g.stateNode;if(g.tag===5&&E!==null&&(g=E,p!==null&&(E=Gi(f,p),E!=null&&y.push(Zi(f,E,g)))),w)break;f=f.return}0<y.length&&(h=new _(h,v,null,n,d),c.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",h&&n!==mu&&(v=n.relatedTarget||n.fromElement)&&(Vn(v)||v[Ut]))break e;if((_||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,_?(v=n.relatedTarget||n.toElement,_=u,v=v?Vn(v):null,v!==null&&(w=ar(v),v!==w||v.tag!==5&&v.tag!==6)&&(v=null)):(_=null,v=u),_!==v)){if(y=xh,E="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(y=Ah,E="onPointerLeave",p="onPointerEnter",f="pointer"),w=_==null?h:Er(_),g=v==null?h:Er(v),h=new y(E,f+"leave",_,n,d),h.target=w,h.relatedTarget=g,E=null,Vn(d)===u&&(y=new y(p,f+"enter",v,n,d),y.target=g,y.relatedTarget=w,E=y),w=E,_&&v)t:{for(y=_,p=v,f=0,g=y;g;g=hr(g))f++;for(g=0,E=p;E;E=hr(E))g++;for(;0<f-g;)y=hr(y),f--;for(;0<g-f;)p=hr(p),g--;for(;f--;){if(y===p||p!==null&&y===p.alternate)break t;y=hr(y),p=hr(p)}y=null}else y=null;_!==null&&Wh(c,h,_,y,!1),v!==null&&w!==null&&Wh(c,w,v,y,!0)}}e:{if(h=u?Er(u):window,_=h.nodeName&&h.nodeName.toLowerCase(),_==="select"||_==="input"&&h.type==="file")var T=ow;else if(Mh(h))if(Vm)T=cw;else{T=aw;var x=lw}else(_=h.nodeName)&&_.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(T=uw);if(T&&(T=T(t,u))){zm(c,T,n,d);break e}x&&x(t,h,u),t==="focusout"&&(x=h._wrapperState)&&x.controlled&&h.type==="number"&&cu(h,"number",h.value)}switch(x=u?Er(u):window,t){case"focusin":(Mh(x)||x.contentEditable==="true")&&(vr=x,Su=u,Ai=null);break;case"focusout":Ai=Su=vr=null;break;case"mousedown":Cu=!0;break;case"contextmenu":case"mouseup":case"dragend":Cu=!1,Bh(c,n,d);break;case"selectionchange":if(fw)break;case"keydown":case"keyup":Bh(c,n,d)}var N;if(jc)e:{switch(t){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else _r?jm(t,n)&&(O="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(Um&&n.locale!=="ko"&&(_r||O!=="onCompositionStart"?O==="onCompositionEnd"&&_r&&(N=Fm()):(sn=d,bc="value"in sn?sn.value:sn.textContent,_r=!0)),x=Uo(u,O),0<x.length&&(O=new Oh(O,t,null,n,d),c.push({event:O,listeners:x}),N?O.data=N:(N=Bm(n),N!==null&&(O.data=N)))),(N=tw?nw(t,n):rw(t,n))&&(u=Uo(u,"onBeforeInput"),0<u.length&&(d=new Oh("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=N))}Xm(c,e)})}function Zi(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Uo(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Gi(t,n),s!=null&&r.unshift(Zi(t,s,i)),s=Gi(t,e),s!=null&&r.push(Zi(t,s,i))),t=t.return}return r}function hr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Wh(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=Gi(n,s),a!=null&&o.unshift(Zi(n,a,l))):i||(a=Gi(n,s),a!=null&&o.push(Zi(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var _w=/\r\n?/g,vw=/\u0000|\uFFFD/g;function $h(t){return(typeof t=="string"?t:""+t).replace(_w,`
`).replace(vw,"")}function eo(t,e,n){if(e=$h(e),$h(t)!==e&&n)throw Error(C(425))}function jo(){}var Iu=null,ku=null;function Tu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Nu=typeof setTimeout=="function"?setTimeout:void 0,yw=typeof clearTimeout=="function"?clearTimeout:void 0,Hh=typeof Promise=="function"?Promise:void 0,Ew=typeof queueMicrotask=="function"?queueMicrotask:typeof Hh<"u"?function(t){return Hh.resolve(null).then(t).catch(ww)}:Nu;function ww(t){setTimeout(function(){throw t})}function Pa(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),qi(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);qi(e)}function dn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Gh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ei=Math.random().toString(36).slice(2),vt="__reactFiber$"+ei,es="__reactProps$"+ei,Ut="__reactContainer$"+ei,Ru="__reactEvents$"+ei,Sw="__reactListeners$"+ei,Cw="__reactHandles$"+ei;function Vn(t){var e=t[vt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ut]||n[vt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Gh(t);t!==null;){if(n=t[vt])return n;t=Gh(t)}return e}t=n,n=t.parentNode}return null}function ks(t){return t=t[vt]||t[Ut],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Er(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(C(33))}function Al(t){return t[es]||null}var Pu=[],wr=-1;function Rn(t){return{current:t}}function J(t){0>wr||(t.current=Pu[wr],Pu[wr]=null,wr--)}function Y(t,e){wr++,Pu[wr]=t.current,t.current=e}var Cn={},Pe=Rn(Cn),Be=Rn(!1),qn=Cn;function zr(t,e){var n=t.type.contextTypes;if(!n)return Cn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ze(t){return t=t.childContextTypes,t!=null}function Bo(){J(Be),J(Pe)}function Kh(t,e,n){if(Pe.current!==Cn)throw Error(C(168));Y(Pe,e),Y(Be,n)}function eg(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(C(108,lE(t)||"Unknown",i));return ne({},n,r)}function zo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Cn,qn=Pe.current,Y(Pe,t),Y(Be,Be.current),!0}function Yh(t,e,n){var r=t.stateNode;if(!r)throw Error(C(169));n?(t=eg(t,e,qn),r.__reactInternalMemoizedMergedChildContext=t,J(Be),J(Pe),Y(Pe,t)):J(Be),Y(Be,n)}var Tt=null,Dl=!1,xa=!1;function tg(t){Tt===null?Tt=[t]:Tt.push(t)}function Iw(t){Dl=!0,tg(t)}function Pn(){if(!xa&&Tt!==null){xa=!0;var t=0,e=$;try{var n=Tt;for($=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Tt=null,Dl=!1}catch(i){throw Tt!==null&&(Tt=Tt.slice(t+1)),Tm(Ac,Pn),i}finally{$=e,xa=!1}}return null}var Sr=[],Cr=0,Vo=null,Wo=0,Xe=[],Ze=0,Qn=null,Nt=1,Rt="";function Fn(t,e){Sr[Cr++]=Wo,Sr[Cr++]=Vo,Vo=t,Wo=e}function ng(t,e,n){Xe[Ze++]=Nt,Xe[Ze++]=Rt,Xe[Ze++]=Qn,Qn=t;var r=Nt;t=Rt;var i=32-dt(r)-1;r&=~(1<<i),n+=1;var s=32-dt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Nt=1<<32-dt(e)+i|n<<i|r,Rt=s+t}else Nt=1<<s|n<<i|r,Rt=t}function zc(t){t.return!==null&&(Fn(t,1),ng(t,1,0))}function Vc(t){for(;t===Vo;)Vo=Sr[--Cr],Sr[Cr]=null,Wo=Sr[--Cr],Sr[Cr]=null;for(;t===Qn;)Qn=Xe[--Ze],Xe[Ze]=null,Rt=Xe[--Ze],Xe[Ze]=null,Nt=Xe[--Ze],Xe[Ze]=null}var Ke=null,Ge=null,Z=!1,lt=null;function rg(t,e){var n=et(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function qh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ke=t,Ge=dn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ke=t,Ge=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Qn!==null?{id:Nt,overflow:Rt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=et(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ke=t,Ge=null,!0):!1;default:return!1}}function xu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ou(t){if(Z){var e=Ge;if(e){var n=e;if(!qh(t,e)){if(xu(t))throw Error(C(418));e=dn(n.nextSibling);var r=Ke;e&&qh(t,e)?rg(r,n):(t.flags=t.flags&-4097|2,Z=!1,Ke=t)}}else{if(xu(t))throw Error(C(418));t.flags=t.flags&-4097|2,Z=!1,Ke=t}}}function Qh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ke=t}function to(t){if(t!==Ke)return!1;if(!Z)return Qh(t),Z=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Tu(t.type,t.memoizedProps)),e&&(e=Ge)){if(xu(t))throw ig(),Error(C(418));for(;e;)rg(t,e),e=dn(e.nextSibling)}if(Qh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(C(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ge=dn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ge=null}}else Ge=Ke?dn(t.stateNode.nextSibling):null;return!0}function ig(){for(var t=Ge;t;)t=dn(t.nextSibling)}function Vr(){Ge=Ke=null,Z=!1}function Wc(t){lt===null?lt=[t]:lt.push(t)}var kw=Wt.ReactCurrentBatchConfig;function mi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,t))}return t}function no(t,e){throw t=Object.prototype.toString.call(e),Error(C(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Jh(t){var e=t._init;return e(t._payload)}function sg(t){function e(p,f){if(t){var g=p.deletions;g===null?(p.deletions=[f],p.flags|=16):g.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=mn(p,f),p.index=0,p.sibling=null,p}function s(p,f,g){return p.index=g,t?(g=p.alternate,g!==null?(g=g.index,g<f?(p.flags|=2,f):g):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function l(p,f,g,E){return f===null||f.tag!==6?(f=Fa(g,p.mode,E),f.return=p,f):(f=i(f,g),f.return=p,f)}function a(p,f,g,E){var T=g.type;return T===gr?d(p,f,g.props.children,E,g.key):f!==null&&(f.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Qt&&Jh(T)===f.type)?(E=i(f,g.props),E.ref=mi(p,f,g),E.return=p,E):(E=ko(g.type,g.key,g.props,null,p.mode,E),E.ref=mi(p,f,g),E.return=p,E)}function u(p,f,g,E){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=Ua(g,p.mode,E),f.return=p,f):(f=i(f,g.children||[]),f.return=p,f)}function d(p,f,g,E,T){return f===null||f.tag!==7?(f=Yn(g,p.mode,E,T),f.return=p,f):(f=i(f,g),f.return=p,f)}function c(p,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Fa(""+f,p.mode,g),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Hs:return g=ko(f.type,f.key,f.props,null,p.mode,g),g.ref=mi(p,null,f),g.return=p,g;case mr:return f=Ua(f,p.mode,g),f.return=p,f;case Qt:var E=f._init;return c(p,E(f._payload),g)}if(Ci(f)||ci(f))return f=Yn(f,p.mode,g,null),f.return=p,f;no(p,f)}return null}function h(p,f,g,E){var T=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return T!==null?null:l(p,f,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Hs:return g.key===T?a(p,f,g,E):null;case mr:return g.key===T?u(p,f,g,E):null;case Qt:return T=g._init,h(p,f,T(g._payload),E)}if(Ci(g)||ci(g))return T!==null?null:d(p,f,g,E,null);no(p,g)}return null}function _(p,f,g,E,T){if(typeof E=="string"&&E!==""||typeof E=="number")return p=p.get(g)||null,l(f,p,""+E,T);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Hs:return p=p.get(E.key===null?g:E.key)||null,a(f,p,E,T);case mr:return p=p.get(E.key===null?g:E.key)||null,u(f,p,E,T);case Qt:var x=E._init;return _(p,f,g,x(E._payload),T)}if(Ci(E)||ci(E))return p=p.get(g)||null,d(f,p,E,T,null);no(f,E)}return null}function v(p,f,g,E){for(var T=null,x=null,N=f,O=f=0,I=null;N!==null&&O<g.length;O++){N.index>O?(I=N,N=null):I=N.sibling;var A=h(p,N,g[O],E);if(A===null){N===null&&(N=I);break}t&&N&&A.alternate===null&&e(p,N),f=s(A,f,O),x===null?T=A:x.sibling=A,x=A,N=I}if(O===g.length)return n(p,N),Z&&Fn(p,O),T;if(N===null){for(;O<g.length;O++)N=c(p,g[O],E),N!==null&&(f=s(N,f,O),x===null?T=N:x.sibling=N,x=N);return Z&&Fn(p,O),T}for(N=r(p,N);O<g.length;O++)I=_(N,p,O,g[O],E),I!==null&&(t&&I.alternate!==null&&N.delete(I.key===null?O:I.key),f=s(I,f,O),x===null?T=I:x.sibling=I,x=I);return t&&N.forEach(function(b){return e(p,b)}),Z&&Fn(p,O),T}function y(p,f,g,E){var T=ci(g);if(typeof T!="function")throw Error(C(150));if(g=T.call(g),g==null)throw Error(C(151));for(var x=T=null,N=f,O=f=0,I=null,A=g.next();N!==null&&!A.done;O++,A=g.next()){N.index>O?(I=N,N=null):I=N.sibling;var b=h(p,N,A.value,E);if(b===null){N===null&&(N=I);break}t&&N&&b.alternate===null&&e(p,N),f=s(b,f,O),x===null?T=b:x.sibling=b,x=b,N=I}if(A.done)return n(p,N),Z&&Fn(p,O),T;if(N===null){for(;!A.done;O++,A=g.next())A=c(p,A.value,E),A!==null&&(f=s(A,f,O),x===null?T=A:x.sibling=A,x=A);return Z&&Fn(p,O),T}for(N=r(p,N);!A.done;O++,A=g.next())A=_(N,p,O,A.value,E),A!==null&&(t&&A.alternate!==null&&N.delete(A.key===null?O:A.key),f=s(A,f,O),x===null?T=A:x.sibling=A,x=A);return t&&N.forEach(function(X){return e(p,X)}),Z&&Fn(p,O),T}function w(p,f,g,E){if(typeof g=="object"&&g!==null&&g.type===gr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Hs:e:{for(var T=g.key,x=f;x!==null;){if(x.key===T){if(T=g.type,T===gr){if(x.tag===7){n(p,x.sibling),f=i(x,g.props.children),f.return=p,p=f;break e}}else if(x.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Qt&&Jh(T)===x.type){n(p,x.sibling),f=i(x,g.props),f.ref=mi(p,x,g),f.return=p,p=f;break e}n(p,x);break}else e(p,x);x=x.sibling}g.type===gr?(f=Yn(g.props.children,p.mode,E,g.key),f.return=p,p=f):(E=ko(g.type,g.key,g.props,null,p.mode,E),E.ref=mi(p,f,g),E.return=p,p=E)}return o(p);case mr:e:{for(x=g.key;f!==null;){if(f.key===x)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(p,f.sibling),f=i(f,g.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=Ua(g,p.mode,E),f.return=p,p=f}return o(p);case Qt:return x=g._init,w(p,f,x(g._payload),E)}if(Ci(g))return v(p,f,g,E);if(ci(g))return y(p,f,g,E);no(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,g),f.return=p,p=f):(n(p,f),f=Fa(g,p.mode,E),f.return=p,p=f),o(p)):n(p,f)}return w}var Wr=sg(!0),og=sg(!1),$o=Rn(null),Ho=null,Ir=null,$c=null;function Hc(){$c=Ir=Ho=null}function Gc(t){var e=$o.current;J($o),t._currentValue=e}function Au(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Dr(t,e){Ho=t,$c=Ir=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ue=!0),t.firstContext=null)}function nt(t){var e=t._currentValue;if($c!==t)if(t={context:t,memoizedValue:e,next:null},Ir===null){if(Ho===null)throw Error(C(308));Ir=t,Ho.dependencies={lanes:0,firstContext:t}}else Ir=Ir.next=t;return e}var Wn=null;function Kc(t){Wn===null?Wn=[t]:Wn.push(t)}function lg(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Kc(e)):(n.next=i.next,i.next=n),e.interleaved=n,jt(t,r)}function jt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Jt=!1;function Yc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ag(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Dt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function hn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,V&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,jt(t,n)}return i=r.interleaved,i===null?(e.next=e,Kc(r)):(e.next=i.next,i.next=e),r.interleaved=e,jt(t,n)}function yo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Dc(t,n)}}function Xh(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Go(t,e,n,r){var i=t.updateQueue;Jt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=a))}if(s!==null){var c=i.baseState;o=0,d=u=a=null,l=s;do{var h=l.lane,_=l.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:_,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=t,y=l;switch(h=e,_=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){c=v.call(_,c,h);break e}c=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,h=typeof v=="function"?v.call(_,c,h):v,h==null)break e;c=ne({},c,h);break e;case 2:Jt=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else _={eventTime:_,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=_,a=c):d=d.next=_,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(d===null&&(a=c),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Xn|=o,t.lanes=o,t.memoizedState=c}}function Zh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(C(191,i));i.call(r)}}}var Ts={},wt=Rn(Ts),ts=Rn(Ts),ns=Rn(Ts);function $n(t){if(t===Ts)throw Error(C(174));return t}function qc(t,e){switch(Y(ns,e),Y(ts,t),Y(wt,Ts),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:hu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=hu(e,t)}J(wt),Y(wt,e)}function $r(){J(wt),J(ts),J(ns)}function ug(t){$n(ns.current);var e=$n(wt.current),n=hu(e,t.type);e!==n&&(Y(ts,t),Y(wt,n))}function Qc(t){ts.current===t&&(J(wt),J(ts))}var ee=Rn(0);function Ko(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Oa=[];function Jc(){for(var t=0;t<Oa.length;t++)Oa[t]._workInProgressVersionPrimary=null;Oa.length=0}var Eo=Wt.ReactCurrentDispatcher,Aa=Wt.ReactCurrentBatchConfig,Jn=0,te=null,ue=null,_e=null,Yo=!1,Di=!1,rs=0,Tw=0;function ke(){throw Error(C(321))}function Xc(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!pt(t[n],e[n]))return!1;return!0}function Zc(t,e,n,r,i,s){if(Jn=s,te=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Eo.current=t===null||t.memoizedState===null?xw:Ow,t=n(r,i),Di){s=0;do{if(Di=!1,rs=0,25<=s)throw Error(C(301));s+=1,_e=ue=null,e.updateQueue=null,Eo.current=Aw,t=n(r,i)}while(Di)}if(Eo.current=qo,e=ue!==null&&ue.next!==null,Jn=0,_e=ue=te=null,Yo=!1,e)throw Error(C(300));return t}function ed(){var t=rs!==0;return rs=0,t}function _t(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _e===null?te.memoizedState=_e=t:_e=_e.next=t,_e}function rt(){if(ue===null){var t=te.alternate;t=t!==null?t.memoizedState:null}else t=ue.next;var e=_e===null?te.memoizedState:_e.next;if(e!==null)_e=e,ue=t;else{if(t===null)throw Error(C(310));ue=t,t={memoizedState:ue.memoizedState,baseState:ue.baseState,baseQueue:ue.baseQueue,queue:ue.queue,next:null},_e===null?te.memoizedState=_e=t:_e=_e.next=t}return _e}function is(t,e){return typeof e=="function"?e(t):e}function Da(t){var e=rt(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=ue,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var d=u.lane;if((Jn&d)===d)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=c,o=r):a=a.next=c,te.lanes|=d,Xn|=d}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,pt(r,e.memoizedState)||(Ue=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,te.lanes|=s,Xn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function La(t){var e=rt(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);pt(s,e.memoizedState)||(Ue=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function cg(){}function dg(t,e){var n=te,r=rt(),i=e(),s=!pt(r.memoizedState,i);if(s&&(r.memoizedState=i,Ue=!0),r=r.queue,td(pg.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||_e!==null&&_e.memoizedState.tag&1){if(n.flags|=2048,ss(9,fg.bind(null,n,r,i,e),void 0,null),we===null)throw Error(C(349));Jn&30||hg(n,e,i)}return i}function hg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=te.updateQueue,e===null?(e={lastEffect:null,stores:null},te.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function fg(t,e,n,r){e.value=n,e.getSnapshot=r,mg(e)&&gg(t)}function pg(t,e,n){return n(function(){mg(e)&&gg(t)})}function mg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!pt(t,n)}catch{return!0}}function gg(t){var e=jt(t,1);e!==null&&ht(e,t,1,-1)}function ef(t){var e=_t();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:is,lastRenderedState:t},e.queue=t,t=t.dispatch=Pw.bind(null,te,t),[e.memoizedState,t]}function ss(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=te.updateQueue,e===null?(e={lastEffect:null,stores:null},te.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function _g(){return rt().memoizedState}function wo(t,e,n,r){var i=_t();te.flags|=t,i.memoizedState=ss(1|e,n,void 0,r===void 0?null:r)}function Ll(t,e,n,r){var i=rt();r=r===void 0?null:r;var s=void 0;if(ue!==null){var o=ue.memoizedState;if(s=o.destroy,r!==null&&Xc(r,o.deps)){i.memoizedState=ss(e,n,s,r);return}}te.flags|=t,i.memoizedState=ss(1|e,n,s,r)}function tf(t,e){return wo(8390656,8,t,e)}function td(t,e){return Ll(2048,8,t,e)}function vg(t,e){return Ll(4,2,t,e)}function yg(t,e){return Ll(4,4,t,e)}function Eg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function wg(t,e,n){return n=n!=null?n.concat([t]):null,Ll(4,4,Eg.bind(null,e,t),n)}function nd(){}function Sg(t,e){var n=rt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Xc(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Cg(t,e){var n=rt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Xc(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Ig(t,e,n){return Jn&21?(pt(n,e)||(n=Pm(),te.lanes|=n,Xn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ue=!0),t.memoizedState=n)}function Nw(t,e){var n=$;$=n!==0&&4>n?n:4,t(!0);var r=Aa.transition;Aa.transition={};try{t(!1),e()}finally{$=n,Aa.transition=r}}function kg(){return rt().memoizedState}function Rw(t,e,n){var r=pn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Tg(t))Ng(e,n);else if(n=lg(t,e,n,r),n!==null){var i=De();ht(n,t,r,i),Rg(n,e,r)}}function Pw(t,e,n){var r=pn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Tg(t))Ng(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,pt(l,o)){var a=e.interleaved;a===null?(i.next=i,Kc(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=lg(t,e,i,r),n!==null&&(i=De(),ht(n,t,r,i),Rg(n,e,r))}}function Tg(t){var e=t.alternate;return t===te||e!==null&&e===te}function Ng(t,e){Di=Yo=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Rg(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Dc(t,n)}}var qo={readContext:nt,useCallback:ke,useContext:ke,useEffect:ke,useImperativeHandle:ke,useInsertionEffect:ke,useLayoutEffect:ke,useMemo:ke,useReducer:ke,useRef:ke,useState:ke,useDebugValue:ke,useDeferredValue:ke,useTransition:ke,useMutableSource:ke,useSyncExternalStore:ke,useId:ke,unstable_isNewReconciler:!1},xw={readContext:nt,useCallback:function(t,e){return _t().memoizedState=[t,e===void 0?null:e],t},useContext:nt,useEffect:tf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,wo(4194308,4,Eg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return wo(4194308,4,t,e)},useInsertionEffect:function(t,e){return wo(4,2,t,e)},useMemo:function(t,e){var n=_t();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=_t();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Rw.bind(null,te,t),[r.memoizedState,t]},useRef:function(t){var e=_t();return t={current:t},e.memoizedState=t},useState:ef,useDebugValue:nd,useDeferredValue:function(t){return _t().memoizedState=t},useTransition:function(){var t=ef(!1),e=t[0];return t=Nw.bind(null,t[1]),_t().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=te,i=_t();if(Z){if(n===void 0)throw Error(C(407));n=n()}else{if(n=e(),we===null)throw Error(C(349));Jn&30||hg(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,tf(pg.bind(null,r,s,t),[t]),r.flags|=2048,ss(9,fg.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=_t(),e=we.identifierPrefix;if(Z){var n=Rt,r=Nt;n=(r&~(1<<32-dt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=rs++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Tw++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Ow={readContext:nt,useCallback:Sg,useContext:nt,useEffect:td,useImperativeHandle:wg,useInsertionEffect:vg,useLayoutEffect:yg,useMemo:Cg,useReducer:Da,useRef:_g,useState:function(){return Da(is)},useDebugValue:nd,useDeferredValue:function(t){var e=rt();return Ig(e,ue.memoizedState,t)},useTransition:function(){var t=Da(is)[0],e=rt().memoizedState;return[t,e]},useMutableSource:cg,useSyncExternalStore:dg,useId:kg,unstable_isNewReconciler:!1},Aw={readContext:nt,useCallback:Sg,useContext:nt,useEffect:td,useImperativeHandle:wg,useInsertionEffect:vg,useLayoutEffect:yg,useMemo:Cg,useReducer:La,useRef:_g,useState:function(){return La(is)},useDebugValue:nd,useDeferredValue:function(t){var e=rt();return ue===null?e.memoizedState=t:Ig(e,ue.memoizedState,t)},useTransition:function(){var t=La(is)[0],e=rt().memoizedState;return[t,e]},useMutableSource:cg,useSyncExternalStore:dg,useId:kg,unstable_isNewReconciler:!1};function st(t,e){if(t&&t.defaultProps){e=ne({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Du(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ne({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ml={isMounted:function(t){return(t=t._reactInternals)?ar(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=De(),i=pn(t),s=Dt(r,i);s.payload=e,n!=null&&(s.callback=n),e=hn(t,s,i),e!==null&&(ht(e,t,i,r),yo(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=De(),i=pn(t),s=Dt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=hn(t,s,i),e!==null&&(ht(e,t,i,r),yo(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=De(),r=pn(t),i=Dt(n,r);i.tag=2,e!=null&&(i.callback=e),e=hn(t,i,r),e!==null&&(ht(e,t,r,n),yo(e,t,r))}};function nf(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ji(n,r)||!Ji(i,s):!0}function Pg(t,e,n){var r=!1,i=Cn,s=e.contextType;return typeof s=="object"&&s!==null?s=nt(s):(i=ze(e)?qn:Pe.current,r=e.contextTypes,s=(r=r!=null)?zr(t,i):Cn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ml,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function rf(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ml.enqueueReplaceState(e,e.state,null)}function Lu(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Yc(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=nt(s):(s=ze(e)?qn:Pe.current,i.context=zr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Du(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ml.enqueueReplaceState(i,i.state,null),Go(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Hr(t,e){try{var n="",r=e;do n+=oE(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ma(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Mu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Dw=typeof WeakMap=="function"?WeakMap:Map;function xg(t,e,n){n=Dt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Jo||(Jo=!0,Hu=r),Mu(t,e)},n}function Og(t,e,n){n=Dt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Mu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Mu(t,e),typeof r!="function"&&(fn===null?fn=new Set([this]):fn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function sf(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Dw;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Kw.bind(null,t,e,n),e.then(t,t))}function of(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function lf(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Dt(-1,1),e.tag=2,hn(n,e,1))),n.lanes|=1),t)}var Lw=Wt.ReactCurrentOwner,Ue=!1;function Oe(t,e,n,r){e.child=t===null?og(e,null,n,r):Wr(e,t.child,n,r)}function af(t,e,n,r,i){n=n.render;var s=e.ref;return Dr(e,i),r=Zc(t,e,n,r,s,i),n=ed(),t!==null&&!Ue?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Bt(t,e,i)):(Z&&n&&zc(e),e.flags|=1,Oe(t,e,r,i),e.child)}function uf(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!cd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Ag(t,e,s,r,i)):(t=ko(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ji,n(o,r)&&t.ref===e.ref)return Bt(t,e,i)}return e.flags|=1,t=mn(s,r),t.ref=e.ref,t.return=e,e.child=t}function Ag(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ji(s,r)&&t.ref===e.ref)if(Ue=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ue=!0);else return e.lanes=t.lanes,Bt(t,e,i)}return bu(t,e,n,r,i)}function Dg(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Y(Tr,He),He|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Y(Tr,He),He|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Y(Tr,He),He|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Y(Tr,He),He|=r;return Oe(t,e,i,n),e.child}function Lg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function bu(t,e,n,r,i){var s=ze(n)?qn:Pe.current;return s=zr(e,s),Dr(e,i),n=Zc(t,e,n,r,s,i),r=ed(),t!==null&&!Ue?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Bt(t,e,i)):(Z&&r&&zc(e),e.flags|=1,Oe(t,e,n,i),e.child)}function cf(t,e,n,r,i){if(ze(n)){var s=!0;zo(e)}else s=!1;if(Dr(e,i),e.stateNode===null)So(t,e),Pg(e,n,r),Lu(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=nt(u):(u=ze(n)?qn:Pe.current,u=zr(e,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&rf(e,o,r,u),Jt=!1;var h=e.memoizedState;o.state=h,Go(e,r,o,i),a=e.memoizedState,l!==r||h!==a||Be.current||Jt?(typeof d=="function"&&(Du(e,n,d,r),a=e.memoizedState),(l=Jt||nf(e,n,l,r,h,a,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,ag(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:st(e.type,l),o.props=u,c=e.pendingProps,h=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=nt(a):(a=ze(n)?qn:Pe.current,a=zr(e,a));var _=n.getDerivedStateFromProps;(d=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==c||h!==a)&&rf(e,o,r,a),Jt=!1,h=e.memoizedState,o.state=h,Go(e,r,o,i);var v=e.memoizedState;l!==c||h!==v||Be.current||Jt?(typeof _=="function"&&(Du(e,n,_,r),v=e.memoizedState),(u=Jt||nf(e,n,u,r,h,v,a)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return Fu(t,e,n,r,s,i)}function Fu(t,e,n,r,i,s){Lg(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Yh(e,n,!1),Bt(t,e,s);r=e.stateNode,Lw.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Wr(e,t.child,null,s),e.child=Wr(e,null,l,s)):Oe(t,e,l,s),e.memoizedState=r.state,i&&Yh(e,n,!0),e.child}function Mg(t){var e=t.stateNode;e.pendingContext?Kh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Kh(t,e.context,!1),qc(t,e.containerInfo)}function df(t,e,n,r,i){return Vr(),Wc(i),e.flags|=256,Oe(t,e,n,r),e.child}var Uu={dehydrated:null,treeContext:null,retryLane:0};function ju(t){return{baseLanes:t,cachePool:null,transitions:null}}function bg(t,e,n){var r=e.pendingProps,i=ee.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Y(ee,i&1),t===null)return Ou(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ul(o,r,0,null),t=Yn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ju(n),e.memoizedState=Uu,t):rd(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Mw(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=mn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=mn(l,s):(s=Yn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?ju(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Uu,r}return s=t.child,t=s.sibling,r=mn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function rd(t,e){return e=Ul({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ro(t,e,n,r){return r!==null&&Wc(r),Wr(e,t.child,null,n),t=rd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Mw(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Ma(Error(C(422))),ro(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ul({mode:"visible",children:r.children},i,0,null),s=Yn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Wr(e,t.child,null,o),e.child.memoizedState=ju(o),e.memoizedState=Uu,s);if(!(e.mode&1))return ro(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(C(419)),r=Ma(s,r,void 0),ro(t,e,o,r)}if(l=(o&t.childLanes)!==0,Ue||l){if(r=we,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,jt(t,i),ht(r,t,i,-1))}return ud(),r=Ma(Error(C(421))),ro(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Yw.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ge=dn(i.nextSibling),Ke=e,Z=!0,lt=null,t!==null&&(Xe[Ze++]=Nt,Xe[Ze++]=Rt,Xe[Ze++]=Qn,Nt=t.id,Rt=t.overflow,Qn=e),e=rd(e,r.children),e.flags|=4096,e)}function hf(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Au(t.return,e,n)}function ba(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Fg(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Oe(t,e,r.children,n),r=ee.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&hf(t,n,e);else if(t.tag===19)hf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Y(ee,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ko(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ba(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ko(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ba(e,!0,n,null,s);break;case"together":ba(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function So(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Bt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Xn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(C(153));if(e.child!==null){for(t=e.child,n=mn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=mn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function bw(t,e,n){switch(e.tag){case 3:Mg(e),Vr();break;case 5:ug(e);break;case 1:ze(e.type)&&zo(e);break;case 4:qc(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Y($o,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Y(ee,ee.current&1),e.flags|=128,null):n&e.child.childLanes?bg(t,e,n):(Y(ee,ee.current&1),t=Bt(t,e,n),t!==null?t.sibling:null);Y(ee,ee.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Fg(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Y(ee,ee.current),r)break;return null;case 22:case 23:return e.lanes=0,Dg(t,e,n)}return Bt(t,e,n)}var Ug,Bu,jg,Bg;Ug=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Bu=function(){};jg=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,$n(wt.current);var s=null;switch(n){case"input":i=au(t,i),r=au(t,r),s=[];break;case"select":i=ne({},i,{value:void 0}),r=ne({},r,{value:void 0}),s=[];break;case"textarea":i=du(t,i),r=du(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=jo)}fu(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&($i.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&($i.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&q("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Bg=function(t,e,n,r){n!==r&&(e.flags|=4)};function gi(t,e){if(!Z)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Te(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Fw(t,e,n){var r=e.pendingProps;switch(Vc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(e),null;case 1:return ze(e.type)&&Bo(),Te(e),null;case 3:return r=e.stateNode,$r(),J(Be),J(Pe),Jc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(to(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,lt!==null&&(Yu(lt),lt=null))),Bu(t,e),Te(e),null;case 5:Qc(e);var i=$n(ns.current);if(n=e.type,t!==null&&e.stateNode!=null)jg(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(C(166));return Te(e),null}if(t=$n(wt.current),to(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[vt]=e,r[es]=s,t=(e.mode&1)!==0,n){case"dialog":q("cancel",r),q("close",r);break;case"iframe":case"object":case"embed":q("load",r);break;case"video":case"audio":for(i=0;i<ki.length;i++)q(ki[i],r);break;case"source":q("error",r);break;case"img":case"image":case"link":q("error",r),q("load",r);break;case"details":q("toggle",r);break;case"input":Eh(r,s),q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},q("invalid",r);break;case"textarea":Sh(r,s),q("invalid",r)}fu(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&eo(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&eo(r.textContent,l,t),i=["children",""+l]):$i.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&q("scroll",r)}switch(n){case"input":Gs(r),wh(r,s,!0);break;case"textarea":Gs(r),Ch(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=jo)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=pm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[vt]=e,t[es]=r,Ug(t,e,!1,!1),e.stateNode=t;e:{switch(o=pu(n,r),n){case"dialog":q("cancel",t),q("close",t),i=r;break;case"iframe":case"object":case"embed":q("load",t),i=r;break;case"video":case"audio":for(i=0;i<ki.length;i++)q(ki[i],t);i=r;break;case"source":q("error",t),i=r;break;case"img":case"image":case"link":q("error",t),q("load",t),i=r;break;case"details":q("toggle",t),i=r;break;case"input":Eh(t,r),i=au(t,r),q("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ne({},r,{value:void 0}),q("invalid",t);break;case"textarea":Sh(t,r),i=du(t,r),q("invalid",t);break;default:i=r}fu(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?_m(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&mm(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Hi(t,a):typeof a=="number"&&Hi(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&($i.hasOwnProperty(s)?a!=null&&s==="onScroll"&&q("scroll",t):a!=null&&Nc(t,s,a,o))}switch(n){case"input":Gs(t),wh(t,r,!1);break;case"textarea":Gs(t),Ch(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Sn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Pr(t,!!r.multiple,s,!1):r.defaultValue!=null&&Pr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=jo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Te(e),null;case 6:if(t&&e.stateNode!=null)Bg(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(C(166));if(n=$n(ns.current),$n(wt.current),to(e)){if(r=e.stateNode,n=e.memoizedProps,r[vt]=e,(s=r.nodeValue!==n)&&(t=Ke,t!==null))switch(t.tag){case 3:eo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&eo(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[vt]=e,e.stateNode=r}return Te(e),null;case 13:if(J(ee),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Z&&Ge!==null&&e.mode&1&&!(e.flags&128))ig(),Vr(),e.flags|=98560,s=!1;else if(s=to(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(C(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(C(317));s[vt]=e}else Vr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Te(e),s=!1}else lt!==null&&(Yu(lt),lt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ee.current&1?he===0&&(he=3):ud())),e.updateQueue!==null&&(e.flags|=4),Te(e),null);case 4:return $r(),Bu(t,e),t===null&&Xi(e.stateNode.containerInfo),Te(e),null;case 10:return Gc(e.type._context),Te(e),null;case 17:return ze(e.type)&&Bo(),Te(e),null;case 19:if(J(ee),s=e.memoizedState,s===null)return Te(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)gi(s,!1);else{if(he!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ko(t),o!==null){for(e.flags|=128,gi(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Y(ee,ee.current&1|2),e.child}t=t.sibling}s.tail!==null&&oe()>Gr&&(e.flags|=128,r=!0,gi(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ko(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),gi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Z)return Te(e),null}else 2*oe()-s.renderingStartTime>Gr&&n!==1073741824&&(e.flags|=128,r=!0,gi(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=oe(),e.sibling=null,n=ee.current,Y(ee,r?n&1|2:n&1),e):(Te(e),null);case 22:case 23:return ad(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?He&1073741824&&(Te(e),e.subtreeFlags&6&&(e.flags|=8192)):Te(e),null;case 24:return null;case 25:return null}throw Error(C(156,e.tag))}function Uw(t,e){switch(Vc(e),e.tag){case 1:return ze(e.type)&&Bo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return $r(),J(Be),J(Pe),Jc(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Qc(e),null;case 13:if(J(ee),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(C(340));Vr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return J(ee),null;case 4:return $r(),null;case 10:return Gc(e.type._context),null;case 22:case 23:return ad(),null;case 24:return null;default:return null}}var io=!1,Ne=!1,jw=typeof WeakSet=="function"?WeakSet:Set,P=null;function kr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){re(t,e,r)}else n.current=null}function zu(t,e,n){try{n()}catch(r){re(t,e,r)}}var ff=!1;function Bw(t,e){if(Iu=bo,t=Hm(),Bc(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,d=0,c=t,h=null;t:for(;;){for(var _;c!==n||i!==0&&c.nodeType!==3||(l=o+i),c!==s||r!==0&&c.nodeType!==3||(a=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(_=c.firstChild)!==null;)h=c,c=_;for(;;){if(c===t)break t;if(h===n&&++u===i&&(l=o),h===s&&++d===r&&(a=o),(_=c.nextSibling)!==null)break;c=h,h=c.parentNode}c=_}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(ku={focusedElem:t,selectionRange:n},bo=!1,P=e;P!==null;)if(e=P,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,P=t;else for(;P!==null;){e=P;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,w=v.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?y:st(e.type,y),w);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(E){re(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,P=t;break}P=e.return}return v=ff,ff=!1,v}function Li(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&zu(e,n,s)}i=i.next}while(i!==r)}}function bl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Vu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function zg(t){var e=t.alternate;e!==null&&(t.alternate=null,zg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[vt],delete e[es],delete e[Ru],delete e[Sw],delete e[Cw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Vg(t){return t.tag===5||t.tag===3||t.tag===4}function pf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Vg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Wu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=jo));else if(r!==4&&(t=t.child,t!==null))for(Wu(t,e,n),t=t.sibling;t!==null;)Wu(t,e,n),t=t.sibling}function $u(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for($u(t,e,n),t=t.sibling;t!==null;)$u(t,e,n),t=t.sibling}var Se=null,ot=!1;function Yt(t,e,n){for(n=n.child;n!==null;)Wg(t,e,n),n=n.sibling}function Wg(t,e,n){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(Rl,n)}catch{}switch(n.tag){case 5:Ne||kr(n,e);case 6:var r=Se,i=ot;Se=null,Yt(t,e,n),Se=r,ot=i,Se!==null&&(ot?(t=Se,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Se.removeChild(n.stateNode));break;case 18:Se!==null&&(ot?(t=Se,n=n.stateNode,t.nodeType===8?Pa(t.parentNode,n):t.nodeType===1&&Pa(t,n),qi(t)):Pa(Se,n.stateNode));break;case 4:r=Se,i=ot,Se=n.stateNode.containerInfo,ot=!0,Yt(t,e,n),Se=r,ot=i;break;case 0:case 11:case 14:case 15:if(!Ne&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&zu(n,e,o),i=i.next}while(i!==r)}Yt(t,e,n);break;case 1:if(!Ne&&(kr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){re(n,e,l)}Yt(t,e,n);break;case 21:Yt(t,e,n);break;case 22:n.mode&1?(Ne=(r=Ne)||n.memoizedState!==null,Yt(t,e,n),Ne=r):Yt(t,e,n);break;default:Yt(t,e,n)}}function mf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new jw),e.forEach(function(r){var i=qw.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function it(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Se=l.stateNode,ot=!1;break e;case 3:Se=l.stateNode.containerInfo,ot=!0;break e;case 4:Se=l.stateNode.containerInfo,ot=!0;break e}l=l.return}if(Se===null)throw Error(C(160));Wg(s,o,i),Se=null,ot=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){re(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)$g(e,t),e=e.sibling}function $g(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(it(e,t),gt(t),r&4){try{Li(3,t,t.return),bl(3,t)}catch(y){re(t,t.return,y)}try{Li(5,t,t.return)}catch(y){re(t,t.return,y)}}break;case 1:it(e,t),gt(t),r&512&&n!==null&&kr(n,n.return);break;case 5:if(it(e,t),gt(t),r&512&&n!==null&&kr(n,n.return),t.flags&32){var i=t.stateNode;try{Hi(i,"")}catch(y){re(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&hm(i,s),pu(l,o);var u=pu(l,s);for(o=0;o<a.length;o+=2){var d=a[o],c=a[o+1];d==="style"?_m(i,c):d==="dangerouslySetInnerHTML"?mm(i,c):d==="children"?Hi(i,c):Nc(i,d,c,u)}switch(l){case"input":uu(i,s);break;case"textarea":fm(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?Pr(i,!!s.multiple,_,!1):h!==!!s.multiple&&(s.defaultValue!=null?Pr(i,!!s.multiple,s.defaultValue,!0):Pr(i,!!s.multiple,s.multiple?[]:"",!1))}i[es]=s}catch(y){re(t,t.return,y)}}break;case 6:if(it(e,t),gt(t),r&4){if(t.stateNode===null)throw Error(C(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){re(t,t.return,y)}}break;case 3:if(it(e,t),gt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{qi(e.containerInfo)}catch(y){re(t,t.return,y)}break;case 4:it(e,t),gt(t);break;case 13:it(e,t),gt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(od=oe())),r&4&&mf(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Ne=(u=Ne)||d,it(e,t),Ne=u):it(e,t),gt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(P=t,d=t.child;d!==null;){for(c=P=d;P!==null;){switch(h=P,_=h.child,h.tag){case 0:case 11:case 14:case 15:Li(4,h,h.return);break;case 1:kr(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){re(r,n,y)}}break;case 5:kr(h,h.return);break;case 22:if(h.memoizedState!==null){_f(c);continue}}_!==null?(_.return=h,P=_):_f(c)}d=d.sibling}e:for(d=null,c=t;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=c.stateNode,a=c.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=gm("display",o))}catch(y){re(t,t.return,y)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(y){re(t,t.return,y)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:it(e,t),gt(t),r&4&&mf(t);break;case 21:break;default:it(e,t),gt(t)}}function gt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Vg(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Hi(i,""),r.flags&=-33);var s=pf(t);$u(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=pf(t);Wu(t,l,o);break;default:throw Error(C(161))}}catch(a){re(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function zw(t,e,n){P=t,Hg(t)}function Hg(t,e,n){for(var r=(t.mode&1)!==0;P!==null;){var i=P,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||io;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Ne;l=io;var u=Ne;if(io=o,(Ne=a)&&!u)for(P=i;P!==null;)o=P,a=o.child,o.tag===22&&o.memoizedState!==null?vf(i):a!==null?(a.return=o,P=a):vf(i);for(;s!==null;)P=s,Hg(s),s=s.sibling;P=i,io=l,Ne=u}gf(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,P=s):gf(t)}}function gf(t){for(;P!==null;){var e=P;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ne||bl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ne)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:st(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Zh(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Zh(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&qi(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}Ne||e.flags&512&&Vu(e)}catch(h){re(e,e.return,h)}}if(e===t){P=null;break}if(n=e.sibling,n!==null){n.return=e.return,P=n;break}P=e.return}}function _f(t){for(;P!==null;){var e=P;if(e===t){P=null;break}var n=e.sibling;if(n!==null){n.return=e.return,P=n;break}P=e.return}}function vf(t){for(;P!==null;){var e=P;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{bl(4,e)}catch(a){re(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){re(e,i,a)}}var s=e.return;try{Vu(e)}catch(a){re(e,s,a)}break;case 5:var o=e.return;try{Vu(e)}catch(a){re(e,o,a)}}}catch(a){re(e,e.return,a)}if(e===t){P=null;break}var l=e.sibling;if(l!==null){l.return=e.return,P=l;break}P=e.return}}var Vw=Math.ceil,Qo=Wt.ReactCurrentDispatcher,id=Wt.ReactCurrentOwner,tt=Wt.ReactCurrentBatchConfig,V=0,we=null,ae=null,Ce=0,He=0,Tr=Rn(0),he=0,os=null,Xn=0,Fl=0,sd=0,Mi=null,Fe=null,od=0,Gr=1/0,kt=null,Jo=!1,Hu=null,fn=null,so=!1,on=null,Xo=0,bi=0,Gu=null,Co=-1,Io=0;function De(){return V&6?oe():Co!==-1?Co:Co=oe()}function pn(t){return t.mode&1?V&2&&Ce!==0?Ce&-Ce:kw.transition!==null?(Io===0&&(Io=Pm()),Io):(t=$,t!==0||(t=window.event,t=t===void 0?16:bm(t.type)),t):1}function ht(t,e,n,r){if(50<bi)throw bi=0,Gu=null,Error(C(185));Cs(t,n,r),(!(V&2)||t!==we)&&(t===we&&(!(V&2)&&(Fl|=n),he===4&&Zt(t,Ce)),Ve(t,r),n===1&&V===0&&!(e.mode&1)&&(Gr=oe()+500,Dl&&Pn()))}function Ve(t,e){var n=t.callbackNode;kE(t,e);var r=Mo(t,t===we?Ce:0);if(r===0)n!==null&&Th(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Th(n),e===1)t.tag===0?Iw(yf.bind(null,t)):tg(yf.bind(null,t)),Ew(function(){!(V&6)&&Pn()}),n=null;else{switch(xm(r)){case 1:n=Ac;break;case 4:n=Nm;break;case 16:n=Lo;break;case 536870912:n=Rm;break;default:n=Lo}n=Zg(n,Gg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Gg(t,e){if(Co=-1,Io=0,V&6)throw Error(C(327));var n=t.callbackNode;if(Lr()&&t.callbackNode!==n)return null;var r=Mo(t,t===we?Ce:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Zo(t,r);else{e=r;var i=V;V|=2;var s=Yg();(we!==t||Ce!==e)&&(kt=null,Gr=oe()+500,Kn(t,e));do try{Hw();break}catch(l){Kg(t,l)}while(!0);Hc(),Qo.current=s,V=i,ae!==null?e=0:(we=null,Ce=0,e=he)}if(e!==0){if(e===2&&(i=yu(t),i!==0&&(r=i,e=Ku(t,i))),e===1)throw n=os,Kn(t,0),Zt(t,r),Ve(t,oe()),n;if(e===6)Zt(t,r);else{if(i=t.current.alternate,!(r&30)&&!Ww(i)&&(e=Zo(t,r),e===2&&(s=yu(t),s!==0&&(r=s,e=Ku(t,s))),e===1))throw n=os,Kn(t,0),Zt(t,r),Ve(t,oe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(C(345));case 2:Un(t,Fe,kt);break;case 3:if(Zt(t,r),(r&130023424)===r&&(e=od+500-oe(),10<e)){if(Mo(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){De(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Nu(Un.bind(null,t,Fe,kt),e);break}Un(t,Fe,kt);break;case 4:if(Zt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-dt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Vw(r/1960))-r,10<r){t.timeoutHandle=Nu(Un.bind(null,t,Fe,kt),r);break}Un(t,Fe,kt);break;case 5:Un(t,Fe,kt);break;default:throw Error(C(329))}}}return Ve(t,oe()),t.callbackNode===n?Gg.bind(null,t):null}function Ku(t,e){var n=Mi;return t.current.memoizedState.isDehydrated&&(Kn(t,e).flags|=256),t=Zo(t,e),t!==2&&(e=Fe,Fe=n,e!==null&&Yu(e)),t}function Yu(t){Fe===null?Fe=t:Fe.push.apply(Fe,t)}function Ww(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!pt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Zt(t,e){for(e&=~sd,e&=~Fl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-dt(e),r=1<<n;t[n]=-1,e&=~r}}function yf(t){if(V&6)throw Error(C(327));Lr();var e=Mo(t,0);if(!(e&1))return Ve(t,oe()),null;var n=Zo(t,e);if(t.tag!==0&&n===2){var r=yu(t);r!==0&&(e=r,n=Ku(t,r))}if(n===1)throw n=os,Kn(t,0),Zt(t,e),Ve(t,oe()),n;if(n===6)throw Error(C(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Un(t,Fe,kt),Ve(t,oe()),null}function ld(t,e){var n=V;V|=1;try{return t(e)}finally{V=n,V===0&&(Gr=oe()+500,Dl&&Pn())}}function Zn(t){on!==null&&on.tag===0&&!(V&6)&&Lr();var e=V;V|=1;var n=tt.transition,r=$;try{if(tt.transition=null,$=1,t)return t()}finally{$=r,tt.transition=n,V=e,!(V&6)&&Pn()}}function ad(){He=Tr.current,J(Tr)}function Kn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,yw(n)),ae!==null)for(n=ae.return;n!==null;){var r=n;switch(Vc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Bo();break;case 3:$r(),J(Be),J(Pe),Jc();break;case 5:Qc(r);break;case 4:$r();break;case 13:J(ee);break;case 19:J(ee);break;case 10:Gc(r.type._context);break;case 22:case 23:ad()}n=n.return}if(we=t,ae=t=mn(t.current,null),Ce=He=e,he=0,os=null,sd=Fl=Xn=0,Fe=Mi=null,Wn!==null){for(e=0;e<Wn.length;e++)if(n=Wn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Wn=null}return t}function Kg(t,e){do{var n=ae;try{if(Hc(),Eo.current=qo,Yo){for(var r=te.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Yo=!1}if(Jn=0,_e=ue=te=null,Di=!1,rs=0,id.current=null,n===null||n.return===null){he=1,os=e,ae=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=Ce,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,d=l,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var _=of(o);if(_!==null){_.flags&=-257,lf(_,o,l,s,e),_.mode&1&&sf(s,u,e),e=_,a=u;var v=e.updateQueue;if(v===null){var y=new Set;y.add(a),e.updateQueue=y}else v.add(a);break e}else{if(!(e&1)){sf(s,u,e),ud();break e}a=Error(C(426))}}else if(Z&&l.mode&1){var w=of(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),lf(w,o,l,s,e),Wc(Hr(a,l));break e}}s=a=Hr(a,l),he!==4&&(he=2),Mi===null?Mi=[s]:Mi.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=xg(s,a,e);Xh(s,p);break e;case 1:l=a;var f=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(fn===null||!fn.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=Og(s,l,e);Xh(s,E);break e}}s=s.return}while(s!==null)}Qg(n)}catch(T){e=T,ae===n&&n!==null&&(ae=n=n.return);continue}break}while(!0)}function Yg(){var t=Qo.current;return Qo.current=qo,t===null?qo:t}function ud(){(he===0||he===3||he===2)&&(he=4),we===null||!(Xn&268435455)&&!(Fl&268435455)||Zt(we,Ce)}function Zo(t,e){var n=V;V|=2;var r=Yg();(we!==t||Ce!==e)&&(kt=null,Kn(t,e));do try{$w();break}catch(i){Kg(t,i)}while(!0);if(Hc(),V=n,Qo.current=r,ae!==null)throw Error(C(261));return we=null,Ce=0,he}function $w(){for(;ae!==null;)qg(ae)}function Hw(){for(;ae!==null&&!gE();)qg(ae)}function qg(t){var e=Xg(t.alternate,t,He);t.memoizedProps=t.pendingProps,e===null?Qg(t):ae=e,id.current=null}function Qg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Uw(n,e),n!==null){n.flags&=32767,ae=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{he=6,ae=null;return}}else if(n=Fw(n,e,He),n!==null){ae=n;return}if(e=e.sibling,e!==null){ae=e;return}ae=e=t}while(e!==null);he===0&&(he=5)}function Un(t,e,n){var r=$,i=tt.transition;try{tt.transition=null,$=1,Gw(t,e,n,r)}finally{tt.transition=i,$=r}return null}function Gw(t,e,n,r){do Lr();while(on!==null);if(V&6)throw Error(C(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(C(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(TE(t,s),t===we&&(ae=we=null,Ce=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||so||(so=!0,Zg(Lo,function(){return Lr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=tt.transition,tt.transition=null;var o=$;$=1;var l=V;V|=4,id.current=null,Bw(t,n),$g(n,t),hw(ku),bo=!!Iu,ku=Iu=null,t.current=n,zw(n),_E(),V=l,$=o,tt.transition=s}else t.current=n;if(so&&(so=!1,on=t,Xo=i),s=t.pendingLanes,s===0&&(fn=null),EE(n.stateNode),Ve(t,oe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Jo)throw Jo=!1,t=Hu,Hu=null,t;return Xo&1&&t.tag!==0&&Lr(),s=t.pendingLanes,s&1?t===Gu?bi++:(bi=0,Gu=t):bi=0,Pn(),null}function Lr(){if(on!==null){var t=xm(Xo),e=tt.transition,n=$;try{if(tt.transition=null,$=16>t?16:t,on===null)var r=!1;else{if(t=on,on=null,Xo=0,V&6)throw Error(C(331));var i=V;for(V|=4,P=t.current;P!==null;){var s=P,o=s.child;if(P.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(P=u;P!==null;){var d=P;switch(d.tag){case 0:case 11:case 15:Li(8,d,s)}var c=d.child;if(c!==null)c.return=d,P=c;else for(;P!==null;){d=P;var h=d.sibling,_=d.return;if(zg(d),d===u){P=null;break}if(h!==null){h.return=_,P=h;break}P=_}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var w=y.sibling;y.sibling=null,y=w}while(y!==null)}}P=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,P=o;else e:for(;P!==null;){if(s=P,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Li(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,P=p;break e}P=s.return}}var f=t.current;for(P=f;P!==null;){o=P;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,P=g;else e:for(o=f;P!==null;){if(l=P,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:bl(9,l)}}catch(T){re(l,l.return,T)}if(l===o){P=null;break e}var E=l.sibling;if(E!==null){E.return=l.return,P=E;break e}P=l.return}}if(V=i,Pn(),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(Rl,t)}catch{}r=!0}return r}finally{$=n,tt.transition=e}}return!1}function Ef(t,e,n){e=Hr(n,e),e=xg(t,e,1),t=hn(t,e,1),e=De(),t!==null&&(Cs(t,1,e),Ve(t,e))}function re(t,e,n){if(t.tag===3)Ef(t,t,n);else for(;e!==null;){if(e.tag===3){Ef(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(fn===null||!fn.has(r))){t=Hr(n,t),t=Og(e,t,1),e=hn(e,t,1),t=De(),e!==null&&(Cs(e,1,t),Ve(e,t));break}}e=e.return}}function Kw(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=De(),t.pingedLanes|=t.suspendedLanes&n,we===t&&(Ce&n)===n&&(he===4||he===3&&(Ce&130023424)===Ce&&500>oe()-od?Kn(t,0):sd|=n),Ve(t,e)}function Jg(t,e){e===0&&(t.mode&1?(e=qs,qs<<=1,!(qs&130023424)&&(qs=4194304)):e=1);var n=De();t=jt(t,e),t!==null&&(Cs(t,e,n),Ve(t,n))}function Yw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Jg(t,n)}function qw(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(e),Jg(t,n)}var Xg;Xg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Be.current)Ue=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ue=!1,bw(t,e,n);Ue=!!(t.flags&131072)}else Ue=!1,Z&&e.flags&1048576&&ng(e,Wo,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;So(t,e),t=e.pendingProps;var i=zr(e,Pe.current);Dr(e,n),i=Zc(null,e,r,t,i,n);var s=ed();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ze(r)?(s=!0,zo(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Yc(e),i.updater=Ml,e.stateNode=i,i._reactInternals=e,Lu(e,r,t,n),e=Fu(null,e,r,!0,s,n)):(e.tag=0,Z&&s&&zc(e),Oe(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(So(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Jw(r),t=st(r,t),i){case 0:e=bu(null,e,r,t,n);break e;case 1:e=cf(null,e,r,t,n);break e;case 11:e=af(null,e,r,t,n);break e;case 14:e=uf(null,e,r,st(r.type,t),n);break e}throw Error(C(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:st(r,i),bu(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:st(r,i),cf(t,e,r,i,n);case 3:e:{if(Mg(e),t===null)throw Error(C(387));r=e.pendingProps,s=e.memoizedState,i=s.element,ag(t,e),Go(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Hr(Error(C(423)),e),e=df(t,e,r,n,i);break e}else if(r!==i){i=Hr(Error(C(424)),e),e=df(t,e,r,n,i);break e}else for(Ge=dn(e.stateNode.containerInfo.firstChild),Ke=e,Z=!0,lt=null,n=og(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Vr(),r===i){e=Bt(t,e,n);break e}Oe(t,e,r,n)}e=e.child}return e;case 5:return ug(e),t===null&&Ou(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Tu(r,i)?o=null:s!==null&&Tu(r,s)&&(e.flags|=32),Lg(t,e),Oe(t,e,o,n),e.child;case 6:return t===null&&Ou(e),null;case 13:return bg(t,e,n);case 4:return qc(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Wr(e,null,r,n):Oe(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:st(r,i),af(t,e,r,i,n);case 7:return Oe(t,e,e.pendingProps,n),e.child;case 8:return Oe(t,e,e.pendingProps.children,n),e.child;case 12:return Oe(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Y($o,r._currentValue),r._currentValue=o,s!==null)if(pt(s.value,o)){if(s.children===i.children&&!Be.current){e=Bt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=Dt(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Au(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(C(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Au(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Oe(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Dr(e,n),i=nt(i),r=r(i),e.flags|=1,Oe(t,e,r,n),e.child;case 14:return r=e.type,i=st(r,e.pendingProps),i=st(r.type,i),uf(t,e,r,i,n);case 15:return Ag(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:st(r,i),So(t,e),e.tag=1,ze(r)?(t=!0,zo(e)):t=!1,Dr(e,n),Pg(e,r,i),Lu(e,r,i,n),Fu(null,e,r,!0,t,n);case 19:return Fg(t,e,n);case 22:return Dg(t,e,n)}throw Error(C(156,e.tag))};function Zg(t,e){return Tm(t,e)}function Qw(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function et(t,e,n,r){return new Qw(t,e,n,r)}function cd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Jw(t){if(typeof t=="function")return cd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Pc)return 11;if(t===xc)return 14}return 2}function mn(t,e){var n=t.alternate;return n===null?(n=et(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ko(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")cd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case gr:return Yn(n.children,i,s,e);case Rc:o=8,i|=8;break;case iu:return t=et(12,n,e,i|2),t.elementType=iu,t.lanes=s,t;case su:return t=et(13,n,e,i),t.elementType=su,t.lanes=s,t;case ou:return t=et(19,n,e,i),t.elementType=ou,t.lanes=s,t;case um:return Ul(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case lm:o=10;break e;case am:o=9;break e;case Pc:o=11;break e;case xc:o=14;break e;case Qt:o=16,r=null;break e}throw Error(C(130,t==null?t:typeof t,""))}return e=et(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Yn(t,e,n,r){return t=et(7,t,r,e),t.lanes=n,t}function Ul(t,e,n,r){return t=et(22,t,r,e),t.elementType=um,t.lanes=n,t.stateNode={isHidden:!1},t}function Fa(t,e,n){return t=et(6,t,null,e),t.lanes=n,t}function Ua(t,e,n){return e=et(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Xw(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=va(0),this.expirationTimes=va(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=va(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function dd(t,e,n,r,i,s,o,l,a){return t=new Xw(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=et(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yc(s),t}function Zw(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:mr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function e_(t){if(!t)return Cn;t=t._reactInternals;e:{if(ar(t)!==t||t.tag!==1)throw Error(C(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ze(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(C(171))}if(t.tag===1){var n=t.type;if(ze(n))return eg(t,n,e)}return e}function t_(t,e,n,r,i,s,o,l,a){return t=dd(n,r,!0,t,i,s,o,l,a),t.context=e_(null),n=t.current,r=De(),i=pn(n),s=Dt(r,i),s.callback=e??null,hn(n,s,i),t.current.lanes=i,Cs(t,i,r),Ve(t,r),t}function jl(t,e,n,r){var i=e.current,s=De(),o=pn(i);return n=e_(n),e.context===null?e.context=n:e.pendingContext=n,e=Dt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=hn(i,e,o),t!==null&&(ht(t,i,o,s),yo(t,i,o)),o}function el(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function wf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function hd(t,e){wf(t,e),(t=t.alternate)&&wf(t,e)}function e0(){return null}var n_=typeof reportError=="function"?reportError:function(t){console.error(t)};function fd(t){this._internalRoot=t}Bl.prototype.render=fd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(C(409));jl(t,e,null,null)};Bl.prototype.unmount=fd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Zn(function(){jl(null,t,null,null)}),e[Ut]=null}};function Bl(t){this._internalRoot=t}Bl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Dm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Xt.length&&e!==0&&e<Xt[n].priority;n++);Xt.splice(n,0,t),n===0&&Mm(t)}};function pd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function zl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Sf(){}function t0(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=el(o);s.call(u)}}var o=t_(e,r,t,0,null,!1,!1,"",Sf);return t._reactRootContainer=o,t[Ut]=o.current,Xi(t.nodeType===8?t.parentNode:t),Zn(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=el(a);l.call(u)}}var a=dd(t,0,!1,null,null,!1,!1,"",Sf);return t._reactRootContainer=a,t[Ut]=a.current,Xi(t.nodeType===8?t.parentNode:t),Zn(function(){jl(e,a,n,r)}),a}function Vl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=el(o);l.call(a)}}jl(e,o,t,i)}else o=t0(n,e,t,i,r);return el(o)}Om=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ii(e.pendingLanes);n!==0&&(Dc(e,n|1),Ve(e,oe()),!(V&6)&&(Gr=oe()+500,Pn()))}break;case 13:Zn(function(){var r=jt(t,1);if(r!==null){var i=De();ht(r,t,1,i)}}),hd(t,1)}};Lc=function(t){if(t.tag===13){var e=jt(t,134217728);if(e!==null){var n=De();ht(e,t,134217728,n)}hd(t,134217728)}};Am=function(t){if(t.tag===13){var e=pn(t),n=jt(t,e);if(n!==null){var r=De();ht(n,t,e,r)}hd(t,e)}};Dm=function(){return $};Lm=function(t,e){var n=$;try{return $=t,e()}finally{$=n}};gu=function(t,e,n){switch(e){case"input":if(uu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Al(r);if(!i)throw Error(C(90));dm(r),uu(r,i)}}}break;case"textarea":fm(t,n);break;case"select":e=n.value,e!=null&&Pr(t,!!n.multiple,e,!1)}};Em=ld;wm=Zn;var n0={usingClientEntryPoint:!1,Events:[ks,Er,Al,vm,ym,ld]},_i={findFiberByHostInstance:Vn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},r0={bundleType:_i.bundleType,version:_i.version,rendererPackageName:_i.rendererPackageName,rendererConfig:_i.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Im(t),t===null?null:t.stateNode},findFiberByHostInstance:_i.findFiberByHostInstance||e0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var oo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!oo.isDisabled&&oo.supportsFiber)try{Rl=oo.inject(r0),Et=oo}catch{}}qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=n0;qe.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!pd(e))throw Error(C(200));return Zw(t,e,null,n)};qe.createRoot=function(t,e){if(!pd(t))throw Error(C(299));var n=!1,r="",i=n_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=dd(t,1,!1,null,null,n,!1,r,i),t[Ut]=e.current,Xi(t.nodeType===8?t.parentNode:t),new fd(e)};qe.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(C(188)):(t=Object.keys(t).join(","),Error(C(268,t)));return t=Im(e),t=t===null?null:t.stateNode,t};qe.flushSync=function(t){return Zn(t)};qe.hydrate=function(t,e,n){if(!zl(e))throw Error(C(200));return Vl(null,t,e,!0,n)};qe.hydrateRoot=function(t,e,n){if(!pd(t))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=n_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=t_(e,null,t,1,n??null,i,!1,s,o),t[Ut]=e.current,Xi(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Bl(e)};qe.render=function(t,e,n){if(!zl(e))throw Error(C(200));return Vl(null,t,e,!1,n)};qe.unmountComponentAtNode=function(t){if(!zl(t))throw Error(C(40));return t._reactRootContainer?(Zn(function(){Vl(null,null,t,!1,function(){t._reactRootContainer=null,t[Ut]=null})}),!0):!1};qe.unstable_batchedUpdates=ld;qe.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!zl(n))throw Error(C(200));if(t==null||t._reactInternals===void 0)throw Error(C(38));return Vl(t,e,n,!1,r)};qe.version="18.3.1-next-f1338f8080-20240426";function r_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r_)}catch(t){console.error(t)}}r_(),rm.exports=qe;var i0=rm.exports,Cf=i0;nu.createRoot=Cf.createRoot,nu.hydrateRoot=Cf.hydrateRoot;/**
 * @remix-run/router v1.19.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ls(){return ls=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ls.apply(this,arguments)}var ln;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ln||(ln={}));const If="popstate";function s0(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return qu("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:tl(i)}return l0(e,n,null,t)}function le(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function i_(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function o0(){return Math.random().toString(36).substr(2,8)}function kf(t,e){return{usr:t.state,key:t.key,idx:e}}function qu(t,e,n,r){return n===void 0&&(n=null),ls({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ti(e):e,{state:n,key:e&&e.key||r||o0()})}function tl(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ti(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function l0(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=ln.Pop,a=null,u=d();u==null&&(u=0,o.replaceState(ls({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function c(){l=ln.Pop;let w=d(),p=w==null?null:w-u;u=w,a&&a({action:l,location:y.location,delta:p})}function h(w,p){l=ln.Push;let f=qu(y.location,w,p);u=d()+1;let g=kf(f,u),E=y.createHref(f);try{o.pushState(g,"",E)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;i.location.assign(E)}s&&a&&a({action:l,location:y.location,delta:1})}function _(w,p){l=ln.Replace;let f=qu(y.location,w,p);u=d();let g=kf(f,u),E=y.createHref(f);o.replaceState(g,"",E),s&&a&&a({action:l,location:y.location,delta:0})}function v(w){let p=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof w=="string"?w:tl(w);return f=f.replace(/ $/,"%20"),le(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let y={get action(){return l},get location(){return t(i,o)},listen(w){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(If,c),a=w,()=>{i.removeEventListener(If,c),a=null}},createHref(w){return e(i,w)},createURL:v,encodeLocation(w){let p=v(w);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:_,go(w){return o.go(w)}};return y}var Tf;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Tf||(Tf={}));function a0(t,e,n){return n===void 0&&(n="/"),u0(t,e,n,!1)}function u0(t,e,n,r){let i=typeof e=="string"?ti(e):e,s=md(i.pathname||"/",n);if(s==null)return null;let o=s_(t);c0(o);let l=null;for(let a=0;l==null&&a<o.length;++a){let u=w0(s);l=y0(o[a],u,r)}return l}function s_(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let a={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};a.relativePath.startsWith("/")&&(le(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=gn([r,a.relativePath]),d=n.concat(a);s.children&&s.children.length>0&&(le(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),s_(s.children,e,d,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:_0(u,s.index),routesMeta:d})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let a of o_(s.path))i(s,o,a)}),e}function o_(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=o_(r.join("/")),l=[];return l.push(...o.map(a=>a===""?s:[s,a].join("/"))),i&&l.push(...o),l.map(a=>t.startsWith("/")&&a===""?"/":a)}function c0(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:v0(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const d0=/^:[\w-]+$/,h0=3,f0=2,p0=1,m0=10,g0=-2,Nf=t=>t==="*";function _0(t,e){let n=t.split("/"),r=n.length;return n.some(Nf)&&(r+=g0),e&&(r+=f0),n.filter(i=>!Nf(i)).reduce((i,s)=>i+(d0.test(s)?h0:s===""?p0:m0),r)}function v0(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function y0(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let a=r[l],u=l===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",c=Rf({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},d),h=a.route;if(!c&&u&&n&&!r[r.length-1].route.index&&(c=Rf({path:a.relativePath,caseSensitive:a.caseSensitive,end:!1},d)),!c)return null;Object.assign(i,c.params),o.push({params:i,pathname:gn([s,c.pathname]),pathnameBase:k0(gn([s,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(s=gn([s,c.pathnameBase]))}return o}function Rf(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=E0(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,d,c)=>{let{paramName:h,isOptional:_}=d;if(h==="*"){let y=l[c]||"";o=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const v=l[c];return _&&!v?u[h]=void 0:u[h]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function E0(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),i_(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,a)=>(r.push({paramName:l,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function w0(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return i_(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function md(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function S0(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ti(t):t;return{pathname:n?n.startsWith("/")?n:C0(n,e):e,search:T0(r),hash:N0(i)}}function C0(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ja(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function I0(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function gd(t,e){let n=I0(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function _d(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ti(t):(i=ls({},t),le(!i.pathname||!i.pathname.includes("?"),ja("?","pathname","search",i)),le(!i.pathname||!i.pathname.includes("#"),ja("#","pathname","hash",i)),le(!i.search||!i.search.includes("#"),ja("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let c=e.length-1;if(!r&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),c-=1;i.pathname=h.join("/")}l=c>=0?e[c]:"/"}let a=S0(i,l),u=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||d)&&(a.pathname+="/"),a}const gn=t=>t.join("/").replace(/\/\/+/g,"/"),k0=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),T0=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,N0=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function R0(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const l_=["post","put","patch","delete"];new Set(l_);const P0=["get",...l_];new Set(P0);/**
 * React Router v6.26.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function as(){return as=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},as.apply(this,arguments)}const vd=S.createContext(null),x0=S.createContext(null),xn=S.createContext(null),Wl=S.createContext(null),$t=S.createContext({outlet:null,matches:[],isDataRoute:!1}),a_=S.createContext(null);function O0(t,e){let{relative:n}=e===void 0?{}:e;ni()||le(!1);let{basename:r,navigator:i}=S.useContext(xn),{hash:s,pathname:o,search:l}=c_(t,{relative:n}),a=o;return r!=="/"&&(a=o==="/"?r:gn([r,o])),i.createHref({pathname:a,search:l,hash:s})}function ni(){return S.useContext(Wl)!=null}function Ns(){return ni()||le(!1),S.useContext(Wl).location}function u_(t){S.useContext(xn).static||S.useLayoutEffect(t)}function $l(){let{isDataRoute:t}=S.useContext($t);return t?G0():A0()}function A0(){ni()||le(!1);let t=S.useContext(vd),{basename:e,future:n,navigator:r}=S.useContext(xn),{matches:i}=S.useContext($t),{pathname:s}=Ns(),o=JSON.stringify(gd(i,n.v7_relativeSplatPath)),l=S.useRef(!1);return u_(()=>{l.current=!0}),S.useCallback(function(u,d){if(d===void 0&&(d={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let c=_d(u,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:gn([e,c.pathname])),(d.replace?r.replace:r.push)(c,d.state,d)},[e,r,o,s,t])}const D0=S.createContext(null);function L0(t){let e=S.useContext($t).outlet;return e&&S.createElement(D0.Provider,{value:t},e)}function c_(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=S.useContext(xn),{matches:i}=S.useContext($t),{pathname:s}=Ns(),o=JSON.stringify(gd(i,r.v7_relativeSplatPath));return S.useMemo(()=>_d(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function M0(t,e){return b0(t,e)}function b0(t,e,n,r){ni()||le(!1);let{navigator:i}=S.useContext(xn),{matches:s}=S.useContext($t),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let u=Ns(),d;if(e){var c;let w=typeof e=="string"?ti(e):e;a==="/"||(c=w.pathname)!=null&&c.startsWith(a)||le(!1),d=w}else d=u;let h=d.pathname||"/",_=h;if(a!=="/"){let w=a.replace(/^\//,"").split("/");_="/"+h.replace(/^\//,"").split("/").slice(w.length).join("/")}let v=a0(t,{pathname:_}),y=z0(v&&v.map(w=>Object.assign({},w,{params:Object.assign({},l,w.params),pathname:gn([a,i.encodeLocation?i.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?a:gn([a,i.encodeLocation?i.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),s,n,r);return e&&y?S.createElement(Wl.Provider,{value:{location:as({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:ln.Pop}},y):y}function F0(){let t=H0(),e=R0(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},e),n?S.createElement("pre",{style:i},n):null,null)}const U0=S.createElement(F0,null);class j0 extends S.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?S.createElement($t.Provider,{value:this.props.routeContext},S.createElement(a_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function B0(t){let{routeContext:e,match:n,children:r}=t,i=S.useContext(vd);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement($t.Provider,{value:e},r)}function z0(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=o.findIndex(c=>c.route.id&&(l==null?void 0:l[c.route.id])!==void 0);d>=0||le(!1),o=o.slice(0,Math.min(o.length,d+1))}let a=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let c=o[d];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=d),c.route.id){let{loaderData:h,errors:_}=n,v=c.route.loader&&h[c.route.id]===void 0&&(!_||_[c.route.id]===void 0);if(c.route.lazy||v){a=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((d,c,h)=>{let _,v=!1,y=null,w=null;n&&(_=l&&c.route.id?l[c.route.id]:void 0,y=c.route.errorElement||U0,a&&(u<0&&h===0?(v=!0,w=null):u===h&&(v=!0,w=c.route.hydrateFallbackElement||null)));let p=e.concat(o.slice(0,h+1)),f=()=>{let g;return _?g=y:v?g=w:c.route.Component?g=S.createElement(c.route.Component,null):c.route.element?g=c.route.element:g=d,S.createElement(B0,{match:c,routeContext:{outlet:d,matches:p,isDataRoute:n!=null},children:g})};return n&&(c.route.ErrorBoundary||c.route.errorElement||h===0)?S.createElement(j0,{location:n.location,revalidation:n.revalidation,component:y,error:_,children:f(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):f()},null)}var d_=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(d_||{}),nl=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(nl||{});function V0(t){let e=S.useContext(vd);return e||le(!1),e}function W0(t){let e=S.useContext(x0);return e||le(!1),e}function $0(t){let e=S.useContext($t);return e||le(!1),e}function h_(t){let e=$0(),n=e.matches[e.matches.length-1];return n.route.id||le(!1),n.route.id}function H0(){var t;let e=S.useContext(a_),n=W0(nl.UseRouteError),r=h_(nl.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function G0(){let{router:t}=V0(d_.UseNavigateStable),e=h_(nl.UseNavigateStable),n=S.useRef(!1);return u_(()=>{n.current=!0}),S.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,as({fromRouteId:e},s)))},[t,e])}function K0(t){let{to:e,replace:n,state:r,relative:i}=t;ni()||le(!1);let{future:s,static:o}=S.useContext(xn),{matches:l}=S.useContext($t),{pathname:a}=Ns(),u=$l(),d=_d(e,gd(l,s.v7_relativeSplatPath),a,i==="path"),c=JSON.stringify(d);return S.useEffect(()=>u(JSON.parse(c),{replace:n,state:r,relative:i}),[u,c,i,n,r]),null}function f_(t){return L0(t.context)}function Je(t){le(!1)}function Y0(t){let{basename:e="/",children:n=null,location:r,navigationType:i=ln.Pop,navigator:s,static:o=!1,future:l}=t;ni()&&le(!1);let a=e.replace(/^\/*/,"/"),u=S.useMemo(()=>({basename:a,navigator:s,static:o,future:as({v7_relativeSplatPath:!1},l)}),[a,l,s,o]);typeof r=="string"&&(r=ti(r));let{pathname:d="/",search:c="",hash:h="",state:_=null,key:v="default"}=r,y=S.useMemo(()=>{let w=md(d,a);return w==null?null:{location:{pathname:w,search:c,hash:h,state:_,key:v},navigationType:i}},[a,d,c,h,_,v,i]);return y==null?null:S.createElement(xn.Provider,{value:u},S.createElement(Wl.Provider,{children:n,value:y}))}function q0(t){let{children:e,location:n}=t;return M0(Qu(e),n)}new Promise(()=>{});function Qu(t,e){e===void 0&&(e=[]);let n=[];return S.Children.forEach(t,(r,i)=>{if(!S.isValidElement(r))return;let s=[...e,i];if(r.type===S.Fragment){n.push.apply(n,Qu(r.props.children,s));return}r.type!==Je&&le(!1),!r.props.index||!r.props.children||le(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Qu(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.26.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ju(){return Ju=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ju.apply(this,arguments)}function Q0(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function J0(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function X0(t,e){return t.button===0&&(!e||e==="_self")&&!J0(t)}const Z0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],eS="6";try{window.__reactRouterVersion=eS}catch{}const tS="startTransition",Pf=Ky[tS];function nS(t){let{basename:e,children:n,future:r,window:i}=t,s=S.useRef();s.current==null&&(s.current=s0({window:i,v5Compat:!0}));let o=s.current,[l,a]=S.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},d=S.useCallback(c=>{u&&Pf?Pf(()=>a(c)):a(c)},[a,u]);return S.useLayoutEffect(()=>o.listen(d),[o,d]),S.createElement(Y0,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const rS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",iS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,zn=S.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:a,to:u,preventScrollReset:d,unstable_viewTransition:c}=e,h=Q0(e,Z0),{basename:_}=S.useContext(xn),v,y=!1;if(typeof u=="string"&&iS.test(u)&&(v=u,rS))try{let g=new URL(window.location.href),E=u.startsWith("//")?new URL(g.protocol+u):new URL(u),T=md(E.pathname,_);E.origin===g.origin&&T!=null?u=T+E.search+E.hash:y=!0}catch{}let w=O0(u,{relative:i}),p=sS(u,{replace:o,state:l,target:a,preventScrollReset:d,relative:i,unstable_viewTransition:c});function f(g){r&&r(g),g.defaultPrevented||p(g)}return S.createElement("a",Ju({},h,{href:v||w,onClick:y||s?r:f,ref:n,target:a}))});var xf;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(xf||(xf={}));var Of;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Of||(Of={}));function sS(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l}=e===void 0?{}:e,a=$l(),u=Ns(),d=c_(t,{relative:o});return S.useCallback(c=>{if(X0(c,n)){c.preventDefault();let h=r!==void 0?r:tl(u)===tl(d);a(t,{replace:h,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l})}},[u,a,d,r,i,n,t,s,o,l])}var Af={};/**
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
 */const p_={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const k=function(t,e){if(!t)throw ri(e)},ri=function(t){return new Error("Firebase Database ("+p_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const m_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},oS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},yd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,d=s>>2,c=(s&3)<<4|l>>4;let h=(l&15)<<2|u>>6,_=u&63;a||(_=64,o||(h=64)),r.push(n[d],n[c],n[h],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(m_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):oS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||c==null)throw new lS;const h=s<<2|l>>4;if(r.push(h),u!==64){const _=l<<4&240|u>>2;if(r.push(_),c!==64){const v=u<<6&192|c;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class lS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const g_=function(t){const e=m_(t);return yd.encodeByteArray(e,!0)},rl=function(t){return g_(t).replace(/\./g,"")},il=function(t){try{return yd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function aS(t){return __(void 0,t)}function __(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!uS(n)||(t[n]=__(t[n],e[n]));return t}function uS(t){return t!=="__proto__"}/**
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
 */function cS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const dS=()=>cS().__FIREBASE_DEFAULTS__,hS=()=>{if(typeof process>"u"||typeof Af>"u")return;const t=Af.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},fS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&il(t[1]);return e&&JSON.parse(e)},Ed=()=>{try{return dS()||hS()||fS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},v_=t=>{var e,n;return(n=(e=Ed())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},pS=t=>{const e=v_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},y_=()=>{var t;return(t=Ed())===null||t===void 0?void 0:t.config},E_=t=>{var e;return(e=Ed())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Hl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function mS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[rl(JSON.stringify(n)),rl(JSON.stringify(o)),""].join(".")}/**
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
 */function xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function wd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xe())}function gS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function w_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _S(){const t=xe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function S_(){return p_.NODE_ADMIN===!0}function vS(){try{return typeof indexedDB=="object"}catch{return!1}}function yS(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const ES="FirebaseError";class On extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ES,Object.setPrototypeOf(this,On.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Rs.prototype.create)}}class Rs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?wS(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new On(i,l,r)}}function wS(t,e){return t.replace(SS,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const SS=/\{\$([^}]+)}/g;/**
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
 */function us(t){return JSON.parse(t)}function ce(t){return JSON.stringify(t)}/**
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
 */const C_=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=us(il(s[0])||""),n=us(il(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},CS=function(t){const e=C_(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},IS=function(t){const e=C_(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Ht(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Kr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Xu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function sl(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function ol(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Df(s)&&Df(o)){if(!ol(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Df(t){return t!==null&&typeof t=="object"}/**
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
 */function ii(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ti(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ni(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class kS{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)r[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const h=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,d;for(let c=0;c<80;c++){c<40?c<20?(u=l^s&(o^l),d=1518500249):(u=s^o^l,d=1859775393):c<60?(u=s&o|l&(s|o),d=2400959708):(u=s^o^l,d=3395469782);const h=(i<<5|i>>>27)+u+a+d+r[c]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function TS(t,e){const n=new NS(t,e);return n.subscribe.bind(n)}class NS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");RS(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ba),i.error===void 0&&(i.error=Ba),i.complete===void 0&&(i.complete=Ba);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function RS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ba(){}function Sd(t,e){return`${t} failed: ${e} argument `}/**
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
 */const PS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,k(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Gl=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function be(t){return t&&t._delegate?t._delegate:t}class er{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const jn="[DEFAULT]";/**
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
 */class xS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Hl;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(AS(e))try{this.getOrInitializeService({instanceIdentifier:jn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=jn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=jn){return this.instances.has(e)}getOptions(e=jn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:OS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=jn){return this.component?this.component.multipleInstances?e:jn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function OS(t){return t===jn?void 0:t}function AS(t){return t.instantiationMode==="EAGER"}/**
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
 */class DS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new xS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var H;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(H||(H={}));const LS={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},MS=H.INFO,bS={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},FS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=bS[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Cd{constructor(e){this.name=e,this._logLevel=MS,this._logHandler=FS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in H))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?LS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...e),this._logHandler(this,H.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...e),this._logHandler(this,H.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,H.INFO,...e),this._logHandler(this,H.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,H.WARN,...e),this._logHandler(this,H.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...e),this._logHandler(this,H.ERROR,...e)}}const US=(t,e)=>e.some(n=>t instanceof n);let Lf,Mf;function jS(){return Lf||(Lf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function BS(){return Mf||(Mf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const I_=new WeakMap,Zu=new WeakMap,k_=new WeakMap,za=new WeakMap,Id=new WeakMap;function zS(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(_n(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&I_.set(n,t)}).catch(()=>{}),Id.set(e,t),e}function VS(t){if(Zu.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Zu.set(t,e)}let ec={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Zu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||k_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _n(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function WS(t){ec=t(ec)}function $S(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Va(this),e,...n);return k_.set(r,e.sort?e.sort():[e]),_n(r)}:BS().includes(t)?function(...e){return t.apply(Va(this),e),_n(I_.get(this))}:function(...e){return _n(t.apply(Va(this),e))}}function HS(t){return typeof t=="function"?$S(t):(t instanceof IDBTransaction&&VS(t),US(t,jS())?new Proxy(t,ec):t)}function _n(t){if(t instanceof IDBRequest)return zS(t);if(za.has(t))return za.get(t);const e=HS(t);return e!==t&&(za.set(t,e),Id.set(e,t)),e}const Va=t=>Id.get(t);function GS(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=_n(o);return r&&o.addEventListener("upgradeneeded",a=>{r(_n(o.result),a.oldVersion,a.newVersion,_n(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const KS=["get","getKey","getAll","getAllKeys","count"],YS=["put","add","delete","clear"],Wa=new Map;function bf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Wa.get(e))return Wa.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=YS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||KS.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return Wa.set(e,s),s}WS(t=>({...t,get:(e,n,r)=>bf(e,n)||t.get(e,n,r),has:(e,n)=>!!bf(e,n)||t.has(e,n)}));/**
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
 */class qS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(QS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function QS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const tc="@firebase/app",Ff="0.10.8";/**
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
 */const tr=new Cd("@firebase/app"),JS="@firebase/app-compat",XS="@firebase/analytics-compat",ZS="@firebase/analytics",eC="@firebase/app-check-compat",tC="@firebase/app-check",nC="@firebase/auth",rC="@firebase/auth-compat",iC="@firebase/database",sC="@firebase/database-compat",oC="@firebase/functions",lC="@firebase/functions-compat",aC="@firebase/installations",uC="@firebase/installations-compat",cC="@firebase/messaging",dC="@firebase/messaging-compat",hC="@firebase/performance",fC="@firebase/performance-compat",pC="@firebase/remote-config",mC="@firebase/remote-config-compat",gC="@firebase/storage",_C="@firebase/storage-compat",vC="@firebase/firestore",yC="@firebase/vertexai-preview",EC="@firebase/firestore-compat",wC="firebase",SC="10.12.5";/**
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
 */const nc="[DEFAULT]",CC={[tc]:"fire-core",[JS]:"fire-core-compat",[ZS]:"fire-analytics",[XS]:"fire-analytics-compat",[tC]:"fire-app-check",[eC]:"fire-app-check-compat",[nC]:"fire-auth",[rC]:"fire-auth-compat",[iC]:"fire-rtdb",[sC]:"fire-rtdb-compat",[oC]:"fire-fn",[lC]:"fire-fn-compat",[aC]:"fire-iid",[uC]:"fire-iid-compat",[cC]:"fire-fcm",[dC]:"fire-fcm-compat",[hC]:"fire-perf",[fC]:"fire-perf-compat",[pC]:"fire-rc",[mC]:"fire-rc-compat",[gC]:"fire-gcs",[_C]:"fire-gcs-compat",[vC]:"fire-fst",[EC]:"fire-fst-compat",[yC]:"fire-vertex","fire-js":"fire-js",[wC]:"fire-js-all"};/**
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
 */const ll=new Map,IC=new Map,rc=new Map;function Uf(t,e){try{t.container.addComponent(e)}catch(n){tr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Yr(t){const e=t.name;if(rc.has(e))return tr.debug(`There were multiple attempts to register component ${e}.`),!1;rc.set(e,t);for(const n of ll.values())Uf(n,t);for(const n of IC.values())Uf(n,t);return!0}function kd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function yt(t){return t.settings!==void 0}/**
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
 */const kC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},vn=new Rs("app","Firebase",kC);/**
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
 */class TC{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new er("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vn.create("app-deleted",{appName:this._name})}}/**
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
 */const si=SC;function T_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:nc,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw vn.create("bad-app-name",{appName:String(i)});if(n||(n=y_()),!n)throw vn.create("no-options");const s=ll.get(i);if(s){if(ol(n,s.options)&&ol(r,s.config))return s;throw vn.create("duplicate-app",{appName:i})}const o=new DS(i);for(const a of rc.values())o.addComponent(a);const l=new TC(n,r,o);return ll.set(i,l),l}function N_(t=nc){const e=ll.get(t);if(!e&&t===nc&&y_())return T_();if(!e)throw vn.create("no-app",{appName:t});return e}function yn(t,e,n){var r;let i=(r=CC[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),tr.warn(l.join(" "));return}Yr(new er(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const NC="firebase-heartbeat-database",RC=1,cs="firebase-heartbeat-store";let $a=null;function R_(){return $a||($a=GS(NC,RC,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(cs)}catch(n){console.warn(n)}}}}).catch(t=>{throw vn.create("idb-open",{originalErrorMessage:t.message})})),$a}async function PC(t){try{const n=(await R_()).transaction(cs),r=await n.objectStore(cs).get(P_(t));return await n.done,r}catch(e){if(e instanceof On)tr.warn(e.message);else{const n=vn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});tr.warn(n.message)}}}async function jf(t,e){try{const r=(await R_()).transaction(cs,"readwrite");await r.objectStore(cs).put(e,P_(t)),await r.done}catch(n){if(n instanceof On)tr.warn(n.message);else{const r=vn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});tr.warn(r.message)}}}function P_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const xC=1024,OC=30*24*60*60*1e3;class AC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new LC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Bf();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=OC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Bf(),{heartbeatsToSend:r,unsentEntries:i}=DC(this._heartbeatsCache.heartbeats),s=rl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Bf(){return new Date().toISOString().substring(0,10)}function DC(t,e=xC){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),zf(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),zf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class LC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vS()?yS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await PC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return jf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return jf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function zf(t){return rl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function MC(t){Yr(new er("platform-logger",e=>new qS(e),"PRIVATE")),Yr(new er("heartbeat",e=>new AC(e),"PRIVATE")),yn(tc,Ff,t),yn(tc,Ff,"esm2017"),yn("fire-js","")}MC("");function Td(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function x_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const bC=x_,O_=new Rs("auth","Firebase",x_());/**
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
 */const al=new Cd("@firebase/auth");function FC(t,...e){al.logLevel<=H.WARN&&al.warn(`Auth (${si}): ${t}`,...e)}function To(t,...e){al.logLevel<=H.ERROR&&al.error(`Auth (${si}): ${t}`,...e)}/**
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
 */function mt(t,...e){throw Nd(t,...e)}function St(t,...e){return Nd(t,...e)}function A_(t,e,n){const r=Object.assign(Object.assign({},bC()),{[e]:n});return new Rs("auth","Firebase",r).create(e,{appName:t.name})}function Lt(t){return A_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Nd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return O_.create(t,...e)}function L(t,e,...n){if(!t)throw Nd(e,...n)}function Pt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw To(e),new Error(e)}function zt(t,e){t||Pt(e)}/**
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
 */function ic(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function UC(){return Vf()==="http:"||Vf()==="https:"}function Vf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function jC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(UC()||gS()||"connection"in navigator)?navigator.onLine:!0}function BC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ps{constructor(e,n){this.shortDelay=e,this.longDelay=n,zt(n>e,"Short delay should be less than long delay!"),this.isMobile=wd()||w_()}get(){return jC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Rd(t,e){zt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class D_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Pt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Pt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Pt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const zC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const VC=new Ps(3e4,6e4);function An(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Dn(t,e,n,r,i={}){return L_(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=ii(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),D_.fetch()(M_(t,t.config.apiHost,n,l),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},s))})}async function L_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},zC),e);try{const i=new $C(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw lo(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw lo(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw lo(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw lo(t,"user-disabled",o);const d=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw A_(t,d,u);mt(t,d)}}catch(i){if(i instanceof On)throw i;mt(t,"network-request-failed",{message:String(i)})}}async function xs(t,e,n,r,i={}){const s=await Dn(t,e,n,r,i);return"mfaPendingCredential"in s&&mt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function M_(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Rd(t.config,i):`${t.config.apiScheme}://${i}`}function WC(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class $C{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(St(this.auth,"network-request-failed")),VC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function lo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=St(t,e,r);return i.customData._tokenResponse=n,i}function Wf(t){return t!==void 0&&t.enterprise!==void 0}class HC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return WC(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function GC(t,e){return Dn(t,"GET","/v2/recaptchaConfig",An(t,e))}/**
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
 */async function KC(t,e){return Dn(t,"POST","/v1/accounts:delete",e)}async function b_(t,e){return Dn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Fi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function YC(t,e=!1){const n=be(t),r=await n.getIdToken(e),i=Pd(r);L(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Fi(Ha(i.auth_time)),issuedAtTime:Fi(Ha(i.iat)),expirationTime:Fi(Ha(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ha(t){return Number(t)*1e3}function Pd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return To("JWT malformed, contained fewer than 3 sections"),null;try{const i=il(n);return i?JSON.parse(i):(To("Failed to decode base64 JWT payload"),null)}catch(i){return To("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function $f(t){const e=Pd(t);return L(e,"internal-error"),L(typeof e.exp<"u","internal-error"),L(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ds(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof On&&qC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function qC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class QC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class sc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Fi(this.lastLoginAt),this.creationTime=Fi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ul(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ds(t,b_(n,{idToken:r}));L(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?F_(s.providerUserInfo):[],l=XC(t.providerData,o),a=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),d=a?u:!1,c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new sc(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,c)}async function JC(t){const e=be(t);await ul(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function XC(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function F_(t){return t.map(e=>{var{providerId:n}=e,r=Td(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function ZC(t,e){const n=await L_(t,{},async()=>{const r=ii({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=M_(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",D_.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function eI(t,e){return Dn(t,"POST","/v2/accounts:revokeToken",An(t,e))}/**
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
 */class Mr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){L(e.idToken,"internal-error"),L(typeof e.idToken<"u","internal-error"),L(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):$f(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){L(e.length!==0,"internal-error");const n=$f(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(L(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await ZC(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Mr;return r&&(L(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(L(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(L(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Mr,this.toJSON())}_performRefresh(){return Pt("not implemented")}}/**
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
 */function qt(t,e){L(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class xt{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Td(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new QC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new sc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ds(this,this.stsTokenManager.getToken(this.auth,e));return L(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return YC(this,e)}reload(){return JC(this)}_assign(e){this!==e&&(L(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new xt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ul(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(yt(this.auth.app))return Promise.reject(Lt(this.auth));const e=await this.getIdToken();return await ds(this,KC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,a,u,d;const c=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(l=n.tenantId)!==null&&l!==void 0?l:void 0,w=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:g,emailVerified:E,isAnonymous:T,providerData:x,stsTokenManager:N}=n;L(g&&N,e,"internal-error");const O=Mr.fromJSON(this.name,N);L(typeof g=="string",e,"internal-error"),qt(c,e.name),qt(h,e.name),L(typeof E=="boolean",e,"internal-error"),L(typeof T=="boolean",e,"internal-error"),qt(_,e.name),qt(v,e.name),qt(y,e.name),qt(w,e.name),qt(p,e.name),qt(f,e.name);const I=new xt({uid:g,auth:e,email:h,emailVerified:E,displayName:c,isAnonymous:T,photoURL:v,phoneNumber:_,tenantId:y,stsTokenManager:O,createdAt:p,lastLoginAt:f});return x&&Array.isArray(x)&&(I.providerData=x.map(A=>Object.assign({},A))),w&&(I._redirectEventId=w),I}static async _fromIdTokenResponse(e,n,r=!1){const i=new Mr;i.updateFromServerResponse(n);const s=new xt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ul(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];L(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?F_(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Mr;l.updateFromIdToken(r);const a=new xt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new sc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(a,u),a}}/**
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
 */const Hf=new Map;function Ot(t){zt(t instanceof Function,"Expected a class definition");let e=Hf.get(t);return e?(zt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Hf.set(t,e),e)}/**
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
 */class U_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}U_.type="NONE";const Gf=U_;/**
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
 */function No(t,e,n){return`firebase:${t}:${e}:${n}`}class br{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=No(this.userKey,i.apiKey,s),this.fullPersistenceKey=No("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?xt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new br(Ot(Gf),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Ot(Gf);const o=No(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const d=await u._get(o);if(d){const c=xt._fromJSON(e,d);u!==s&&(l=c),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new br(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new br(s,e,r))}}/**
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
 */function Kf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(z_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(j_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(W_(e))return"Blackberry";if($_(e))return"Webos";if(xd(e))return"Safari";if((e.includes("chrome/")||B_(e))&&!e.includes("edge/"))return"Chrome";if(V_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function j_(t=xe()){return/firefox\//i.test(t)}function xd(t=xe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function B_(t=xe()){return/crios\//i.test(t)}function z_(t=xe()){return/iemobile/i.test(t)}function V_(t=xe()){return/android/i.test(t)}function W_(t=xe()){return/blackberry/i.test(t)}function $_(t=xe()){return/webos/i.test(t)}function Kl(t=xe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function tI(t=xe()){var e;return Kl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function nI(){return _S()&&document.documentMode===10}function H_(t=xe()){return Kl(t)||V_(t)||$_(t)||W_(t)||/windows phone/i.test(t)||z_(t)}function rI(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function G_(t,e=[]){let n;switch(t){case"Browser":n=Kf(xe());break;case"Worker":n=`${Kf(xe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${si}/${r}`}/**
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
 */class iI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function sI(t,e={}){return Dn(t,"GET","/v2/passwordPolicy",An(t,e))}/**
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
 */const oI=6;class lI{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:oI,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(i=a.containsLowercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(s=a.containsUppercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(l=a.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class aI{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Yf(this),this.idTokenSubscription=new Yf(this),this.beforeStateQueue=new iI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=O_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ot(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await br.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await b_(this,{idToken:e}),r=await xt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(yt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ul(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=BC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(yt(this.app))return Promise.reject(Lt(this));const n=e?be(e):null;return n&&L(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&L(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return yt(this.app)?Promise.reject(Lt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return yt(this.app)?Promise.reject(Lt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ot(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await sI(this),n=new lI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Rs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await eI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ot(e)||this._popupRedirectResolver;L(n,this,"argument-error"),this.redirectPersistenceManager=await br.create(this,[Ot(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(L(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,i);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=G_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&FC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ur(t){return be(t)}class Yf{constructor(e){this.auth=e,this.observer=null,this.addObserver=TS(n=>this.observer=n)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Yl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function uI(t){Yl=t}function K_(t){return Yl.loadJS(t)}function cI(){return Yl.recaptchaEnterpriseScript}function dI(){return Yl.gapiScript}function hI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const fI="recaptcha-enterprise",pI="NO_RECAPTCHA";class mI{constructor(e){this.type=fI,this.auth=ur(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{GC(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new HC(a);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(a=>{l(a)})})}function i(s,o,l){const a=window.grecaptcha;Wf(a)?a.enterprise.ready(()=>{a.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(pI)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Wf(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let a=cI();a.length!==0&&(a+=l),K_(a).then(()=>{i(l,s,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function qf(t,e,n,r=!1){const i=new mI(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function oc(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await qf(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await qf(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function gI(t,e){const n=kd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ol(s,e??{}))return i;mt(i,"already-initialized")}return n.initialize({options:e})}function _I(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ot);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function vI(t,e,n){const r=ur(t);L(r._canInitEmulator,r,"emulator-config-failed"),L(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Y_(e),{host:o,port:l}=yI(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),EI()}function Y_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function yI(t){const e=Y_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Qf(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Qf(o)}}}function Qf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function EI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Od{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Pt("not implemented")}_getIdTokenResponse(e){return Pt("not implemented")}_linkToIdToken(e,n){return Pt("not implemented")}_getReauthenticationResolver(e){return Pt("not implemented")}}async function wI(t,e){return Dn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function SI(t,e){return xs(t,"POST","/v1/accounts:signInWithPassword",An(t,e))}/**
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
 */async function CI(t,e){return xs(t,"POST","/v1/accounts:signInWithEmailLink",An(t,e))}async function II(t,e){return xs(t,"POST","/v1/accounts:signInWithEmailLink",An(t,e))}/**
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
 */class hs extends Od{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new hs(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new hs(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return oc(e,n,"signInWithPassword",SI);case"emailLink":return CI(e,{email:this._email,oobCode:this._password});default:mt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return oc(e,r,"signUpPassword",wI);case"emailLink":return II(e,{idToken:n,email:this._email,oobCode:this._password});default:mt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Fr(t,e){return xs(t,"POST","/v1/accounts:signInWithIdp",An(t,e))}/**
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
 */const kI="http://localhost";class nr extends Od{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new nr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):mt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Td(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new nr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Fr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Fr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Fr(e,n)}buildRequest(){const e={requestUri:kI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ii(n)}return e}}/**
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
 */function TI(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function NI(t){const e=Ti(Ni(t)).link,n=e?Ti(Ni(e)).deep_link_id:null,r=Ti(Ni(t)).deep_link_id;return(r?Ti(Ni(r)).link:null)||r||n||e||t}class Ad{constructor(e){var n,r,i,s,o,l;const a=Ti(Ni(e)),u=(n=a.apiKey)!==null&&n!==void 0?n:null,d=(r=a.oobCode)!==null&&r!==void 0?r:null,c=TI((i=a.mode)!==null&&i!==void 0?i:null);L(u&&d&&c,"argument-error"),this.apiKey=u,this.operation=c,this.code=d,this.continueUrl=(s=a.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=a.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=NI(e);try{return new Ad(n)}catch{return null}}}/**
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
 */class oi{constructor(){this.providerId=oi.PROVIDER_ID}static credential(e,n){return hs._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ad.parseLink(n);return L(r,"argument-error"),hs._fromEmailAndCode(e,r.code,r.tenantId)}}oi.PROVIDER_ID="password";oi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";oi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class q_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Os extends q_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class en extends Os{constructor(){super("facebook.com")}static credential(e){return nr._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return en.credentialFromTaggedObject(e)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return en.credential(e.oauthAccessToken)}catch{return null}}}en.FACEBOOK_SIGN_IN_METHOD="facebook.com";en.PROVIDER_ID="facebook.com";/**
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
 */class tn extends Os{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return nr._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return tn.credential(n,r)}catch{return null}}}tn.GOOGLE_SIGN_IN_METHOD="google.com";tn.PROVIDER_ID="google.com";/**
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
 */class nn extends Os{constructor(){super("github.com")}static credential(e){return nr._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nn.credentialFromTaggedObject(e)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nn.credential(e.oauthAccessToken)}catch{return null}}}nn.GITHUB_SIGN_IN_METHOD="github.com";nn.PROVIDER_ID="github.com";/**
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
 */class rn extends Os{constructor(){super("twitter.com")}static credential(e,n){return nr._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return rn.credentialFromTaggedObject(e)}static credentialFromError(e){return rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return rn.credential(n,r)}catch{return null}}}rn.TWITTER_SIGN_IN_METHOD="twitter.com";rn.PROVIDER_ID="twitter.com";/**
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
 */async function RI(t,e){return xs(t,"POST","/v1/accounts:signUp",An(t,e))}/**
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
 */class rr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await xt._fromIdTokenResponse(e,r,i),o=Jf(r);return new rr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Jf(r);return new rr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Jf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class cl extends On{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,cl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new cl(e,n,r,i)}}function Q_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?cl._fromErrorAndOperation(t,s,e,r):s})}async function PI(t,e,n=!1){const r=await ds(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return rr._forOperation(t,"link",r)}/**
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
 */async function xI(t,e,n=!1){const{auth:r}=t;if(yt(r.app))return Promise.reject(Lt(r));const i="reauthenticate";try{const s=await ds(t,Q_(r,i,e,t),n);L(s.idToken,r,"internal-error");const o=Pd(s.idToken);L(o,r,"internal-error");const{sub:l}=o;return L(t.uid===l,r,"user-mismatch"),rr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&mt(r,"user-mismatch"),s}}/**
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
 */async function J_(t,e,n=!1){if(yt(t.app))return Promise.reject(Lt(t));const r="signIn",i=await Q_(t,r,e),s=await rr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function OI(t,e){return J_(ur(t),e)}/**
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
 */async function X_(t){const e=ur(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function AI(t,e,n){if(yt(t.app))return Promise.reject(Lt(t));const r=ur(t),o=await oc(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",RI).catch(a=>{throw a.code==="auth/password-does-not-meet-requirements"&&X_(t),a}),l=await rr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function DI(t,e,n){return yt(t.app)?Promise.reject(Lt(t)):OI(be(t),oi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&X_(t),r})}function LI(t,e,n,r){return be(t).onIdTokenChanged(e,n,r)}function MI(t,e,n){return be(t).beforeAuthStateChanged(e,n)}function bI(t,e,n,r){return be(t).onAuthStateChanged(e,n,r)}function FI(t){return be(t).signOut()}const dl="__sak";/**
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
 */class Z_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(dl,"1"),this.storage.removeItem(dl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function UI(){const t=xe();return xd(t)||Kl(t)}const jI=1e3,BI=10;class ev extends Z_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=UI()&&rI(),this.fallbackToPolling=H_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);nI()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,BI):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},jI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ev.type="LOCAL";const zI=ev;/**
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
 */class tv extends Z_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}tv.type="SESSION";const nv=tv;/**
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
 */function VI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ql{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ql(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await VI(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ql.receivers=[];/**
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
 */function Dd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class WI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=Dd("",20);i.port1.start();const d=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(c){const h=c;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(h.data.response);break;default:clearTimeout(d),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ct(){return window}function $I(t){Ct().location.href=t}/**
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
 */function rv(){return typeof Ct().WorkerGlobalScope<"u"&&typeof Ct().importScripts=="function"}async function HI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function GI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function KI(){return rv()?self:null}/**
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
 */const iv="firebaseLocalStorageDb",YI=1,hl="firebaseLocalStorage",sv="fbase_key";class As{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ql(t,e){return t.transaction([hl],e?"readwrite":"readonly").objectStore(hl)}function qI(){const t=indexedDB.deleteDatabase(iv);return new As(t).toPromise()}function lc(){const t=indexedDB.open(iv,YI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(hl,{keyPath:sv})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(hl)?e(r):(r.close(),await qI(),e(await lc()))})})}async function Xf(t,e,n){const r=Ql(t,!0).put({[sv]:e,value:n});return new As(r).toPromise()}async function QI(t,e){const n=Ql(t,!1).get(e),r=await new As(n).toPromise();return r===void 0?null:r.value}function Zf(t,e){const n=Ql(t,!0).delete(e);return new As(n).toPromise()}const JI=800,XI=3;class ov{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await lc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>XI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ql._getInstance(KI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await HI(),!this.activeServiceWorker)return;this.sender=new WI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||GI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await lc();return await Xf(e,dl,"1"),await Zf(e,dl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Xf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>QI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Zf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ql(i,!1).getAll();return new As(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),JI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ov.type="LOCAL";const ZI=ov;new Ps(3e4,6e4);/**
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
 */function ek(t,e){return e?Ot(e):(L(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ld extends Od{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Fr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Fr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Fr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function tk(t){return J_(t.auth,new Ld(t),t.bypassAuthState)}function nk(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),xI(n,new Ld(t),t.bypassAuthState)}async function rk(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),PI(n,new Ld(t),t.bypassAuthState)}/**
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
 */class lv{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return tk;case"linkViaPopup":case"linkViaRedirect":return rk;case"reauthViaPopup":case"reauthViaRedirect":return nk;default:mt(this.auth,"internal-error")}}resolve(e){zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const ik=new Ps(2e3,1e4);class Nr extends lv{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Nr.currentPopupAction&&Nr.currentPopupAction.cancel(),Nr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return L(e,this.auth,"internal-error"),e}async onExecution(){zt(this.filter.length===1,"Popup operations only handle one event");const e=Dd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(St(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(St(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Nr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(St(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ik.get())};e()}}Nr.currentPopupAction=null;/**
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
 */const sk="pendingRedirect",Ro=new Map;class ok extends lv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ro.get(this.auth._key());if(!e){try{const r=await lk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ro.set(this.auth._key(),e)}return this.bypassAuthState||Ro.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function lk(t,e){const n=ck(e),r=uk(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function ak(t,e){Ro.set(t._key(),e)}function uk(t){return Ot(t._redirectPersistence)}function ck(t){return No(sk,t.config.apiKey,t.name)}async function dk(t,e,n=!1){if(yt(t.app))return Promise.reject(Lt(t));const r=ur(t),i=ek(r,e),o=await new ok(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const hk=10*60*1e3;class fk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!pk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!av(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(St(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=hk&&this.cachedEventUids.clear(),this.cachedEventUids.has(ep(e))}saveEventToCache(e){this.cachedEventUids.add(ep(e)),this.lastProcessedEventTime=Date.now()}}function ep(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function av({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function pk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return av(t);default:return!1}}/**
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
 */async function mk(t,e={}){return Dn(t,"GET","/v1/projects",e)}/**
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
 */const gk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,_k=/^https?/;async function vk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await mk(t);for(const n of e)try{if(yk(n))return}catch{}mt(t,"unauthorized-domain")}function yk(t){const e=ic(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!_k.test(n))return!1;if(gk.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Ek=new Ps(3e4,6e4);function tp(){const t=Ct().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function wk(t){return new Promise((e,n)=>{var r,i,s;function o(){tp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{tp(),n(St(t,"network-request-failed"))},timeout:Ek.get()})}if(!((i=(r=Ct().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Ct().gapi)===null||s===void 0)&&s.load)o();else{const l=hI("iframefcb");return Ct()[l]=()=>{gapi.load?o():n(St(t,"network-request-failed"))},K_(`${dI()}?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw Po=null,e})}let Po=null;function Sk(t){return Po=Po||wk(t),Po}/**
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
 */const Ck=new Ps(5e3,15e3),Ik="__/auth/iframe",kk="emulator/auth/iframe",Tk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Nk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Rk(t){const e=t.config;L(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Rd(e,kk):`https://${t.config.authDomain}/${Ik}`,r={apiKey:e.apiKey,appName:t.name,v:si},i=Nk.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ii(r).slice(1)}`}async function Pk(t){const e=await Sk(t),n=Ct().gapi;return L(n,t,"internal-error"),e.open({where:document.body,url:Rk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Tk,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=St(t,"network-request-failed"),l=Ct().setTimeout(()=>{s(o)},Ck.get());function a(){Ct().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
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
 */const xk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ok=500,Ak=600,Dk="_blank",Lk="http://localhost";class np{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Mk(t,e,n,r=Ok,i=Ak){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},xk),{width:r.toString(),height:i.toString(),top:s,left:o}),u=xe().toLowerCase();n&&(l=B_(u)?Dk:n),j_(u)&&(e=e||Lk,a.scrollbars="yes");const d=Object.entries(a).reduce((h,[_,v])=>`${h}${_}=${v},`,"");if(tI(u)&&l!=="_self")return bk(e||"",l),new np(null);const c=window.open(e||"",l,d);L(c,t,"popup-blocked");try{c.focus()}catch{}return new np(c)}function bk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Fk="__/auth/handler",Uk="emulator/auth/handler",jk=encodeURIComponent("fac");async function rp(t,e,n,r,i,s){L(t.config.authDomain,t,"auth-domain-config-required"),L(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:si,eventId:i};if(e instanceof q_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Xu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,c]of Object.entries({}))o[d]=c}if(e instanceof Os){const d=e.getScopes().filter(c=>c!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const a=await t._getAppCheckToken(),u=a?`#${jk}=${encodeURIComponent(a)}`:"";return`${Bk(t)}?${ii(l).slice(1)}${u}`}function Bk({config:t}){return t.emulator?Rd(t,Uk):`https://${t.authDomain}/${Fk}`}/**
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
 */const Ga="webStorageSupport";class zk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=nv,this._completeRedirectFn=dk,this._overrideRedirectResult=ak}async _openPopup(e,n,r,i){var s;zt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await rp(e,n,r,ic(),i);return Mk(e,o,Dd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await rp(e,n,r,ic(),i);return $I(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(zt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Pk(e),r=new fk(e);return n.register("authEvent",i=>(L(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ga,{type:Ga},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ga];o!==void 0&&n(!!o),mt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=vk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return H_()||xd()||Kl()}}const Vk=zk;var ip="@firebase/auth",sp="1.7.6";/**
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
 */class Wk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function $k(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Hk(t){Yr(new er("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;L(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:G_(t)},u=new aI(r,i,s,a);return _I(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Yr(new er("auth-internal",e=>{const n=ur(e.getProvider("auth").getImmediate());return(r=>new Wk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),yn(ip,sp,$k(t)),yn(ip,sp,"esm2017")}/**
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
 */const Gk=5*60,Kk=E_("authIdTokenMaxAge")||Gk;let op=null;const Yk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Kk)return;const i=n==null?void 0:n.token;op!==i&&(op=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Jl(t=N_()){const e=kd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=gI(t,{popupRedirectResolver:Vk,persistence:[ZI,zI,nv]}),r=E_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=Yk(s.toString());MI(n,o,()=>o(n.currentUser)),LI(n,l=>o(l))}}const i=v_("auth");return i&&vI(n,`http://${i}`),n}function qk(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}uI({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=St("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",qk().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Hk("Browser");var Qk="firebase",Jk="10.12.5";/**
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
 */yn(Qk,Jk,"app");var lp={};const ap="@firebase/database",up="1.0.7";/**
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
 */let uv="";function Xk(t){uv=t}/**
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
 */class Zk{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ce(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:us(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class eT{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Ht(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const cv=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Zk(e)}}catch{}return new eT},Hn=cv("localStorage"),tT=cv("sessionStorage");/**
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
 */const Ur=new Cd("@firebase/database"),nT=function(){let t=1;return function(){return t++}}(),dv=function(t){const e=PS(t),n=new kS;n.update(e);const r=n.digest();return yd.encodeByteArray(r)},Ds=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Ds.apply(null,r):typeof r=="object"?e+=ce(r):e+=r,e+=" "}return e};let Ui=null,cp=!0;const rT=function(t,e){k(!e,"Can't turn on custom loggers persistently."),Ur.logLevel=H.VERBOSE,Ui=Ur.log.bind(Ur)},Re=function(...t){if(cp===!0&&(cp=!1,Ui===null&&tT.get("logging_enabled")===!0&&rT()),Ui){const e=Ds.apply(null,t);Ui(e)}},Ls=function(t){return function(...e){Re(t,...e)}},ac=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ds(...t);Ur.error(e)},Vt=function(...t){const e=`FIREBASE FATAL ERROR: ${Ds(...t)}`;throw Ur.error(e),new Error(e)},We=function(...t){const e="FIREBASE WARNING: "+Ds(...t);Ur.warn(e)},iT=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&We("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},hv=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},sT=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},qr="[MIN_NAME]",ir="[MAX_NAME]",li=function(t,e){if(t===e)return 0;if(t===qr||e===ir)return-1;if(e===qr||t===ir)return 1;{const n=dp(t),r=dp(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},oT=function(t,e){return t===e?0:t<e?-1:1},vi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ce(e))},Md=function(t){if(typeof t!="object"||t===null)return ce(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ce(e[r]),n+=":",n+=Md(t[e[r]]);return n+="}",n},fv=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function $e(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const pv=function(t){k(!hv(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const d=u.join("");let c="";for(a=0;a<64;a+=8){let h=parseInt(d.substr(a,8),2).toString(16);h.length===1&&(h="0"+h),c=c+h}return c.toLowerCase()},lT=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},aT=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function uT(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const cT=new RegExp("^-?(0*)\\d{1,10}$"),dT=-2147483648,hT=2147483647,dp=function(t){if(cT.test(t)){const e=Number(t);if(e>=dT&&e<=hT)return e}return null},ai=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw We("Exception was thrown by user callback.",n),e},Math.floor(0))}},fT=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ji=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class pT{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){We(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class mT{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Re("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',We(e)}}class xo{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}xo.OWNER="owner";/**
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
 */const bd="5",mv="v",gv="s",_v="r",vv="f",yv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ev="ls",wv="p",uc="ac",Sv="websocket",Cv="long_polling";/**
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
 */class Iv{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Hn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Hn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function gT(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function kv(t,e,n){k(typeof e=="string","typeof type must == string"),k(typeof n=="object","typeof params must == object");let r;if(e===Sv)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Cv)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);gT(t)&&(n.ns=t.namespace);const i=[];return $e(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class _T{constructor(){this.counters_={}}incrementCounter(e,n=1){Ht(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return aS(this.counters_)}}/**
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
 */const Ka={},Ya={};function Fd(t){const e=t.toString();return Ka[e]||(Ka[e]=new _T),Ka[e]}function vT(t,e){const n=t.toString();return Ya[n]||(Ya[n]=e()),Ya[n]}/**
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
 */class yT{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&ai(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const hp="start",ET="close",wT="pLPCommand",ST="pRTLPCB",Tv="id",Nv="pw",Rv="ser",CT="cb",IT="seg",kT="ts",TT="d",NT="dframe",Pv=1870,xv=30,RT=Pv-xv,PT=25e3,xT=3e4;class Rr{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ls(e),this.stats_=Fd(n),this.urlFn=a=>(this.appCheckToken&&(a[uc]=this.appCheckToken),kv(n,Cv,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new yT(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(xT)),sT(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ud((...s)=>{const[o,l,a,u,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===hp)this.id=l,this.password=a;else if(o===ET)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[hp]="t",r[Rv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[CT]=this.scriptTagHolder.uniqueCallbackIdentifier),r[mv]=bd,this.transportSessionId&&(r[gv]=this.transportSessionId),this.lastSessionId&&(r[Ev]=this.lastSessionId),this.applicationId&&(r[wv]=this.applicationId),this.appCheckToken&&(r[uc]=this.appCheckToken),typeof location<"u"&&location.hostname&&yv.test(location.hostname)&&(r[_v]=vv);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Rr.forceAllow_=!0}static forceDisallow(){Rr.forceDisallow_=!0}static isAvailable(){return Rr.forceAllow_?!0:!Rr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!lT()&&!aT()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ce(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=g_(n),i=fv(r,RT);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[NT]="t",r[Tv]=e,r[Nv]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ce(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Ud{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=nT(),window[wT+this.uniqueCallbackIdentifier]=e,window[ST+this.uniqueCallbackIdentifier]=n,this.myIFrame=Ud.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Re("frame writing exception"),l.stack&&Re(l.stack),Re(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Re("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Tv]=this.myID,e[Nv]=this.myPW,e[Rv]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+xv+r.length<=Pv;){const o=this.pendingSegs.shift();r=r+"&"+IT+i+"="+o.seg+"&"+kT+i+"="+o.ts+"&"+TT+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(PT)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Re("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const OT=16384,AT=45e3;let fl=null;typeof MozWebSocket<"u"?fl=MozWebSocket:typeof WebSocket<"u"&&(fl=WebSocket);class at{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ls(this.connId),this.stats_=Fd(n),this.connURL=at.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[mv]=bd,typeof location<"u"&&location.hostname&&yv.test(location.hostname)&&(o[_v]=vv),n&&(o[gv]=n),r&&(o[Ev]=r),i&&(o[uc]=i),s&&(o[wv]=s),kv(e,Sv,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Hn.set("previous_websocket_failure",!0);try{let r;S_(),this.mySock=new fl(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){at.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&fl!==null&&!at.forceDisallow_}static previouslyFailed(){return Hn.isInMemoryStorage||Hn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Hn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=us(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(k(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ce(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=fv(n,OT);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(AT))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}at.responsesRequiredToBeHealthy=2;at.healthyTimeout=3e4;/**
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
 */class fs{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Rr,at]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=at&&at.isAvailable();let r=n&&!at.previouslyFailed();if(e.webSocketOnly&&(n||We("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[at];else{const i=this.transports_=[];for(const s of fs.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);fs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}fs.globalTransportInitialized_=!1;/**
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
 */const DT=6e4,LT=5e3,MT=10*1024,bT=100*1024,qa="t",fp="d",FT="s",pp="r",UT="e",mp="o",gp="a",_p="n",vp="p",jT="h";class BT{constructor(e,n,r,i,s,o,l,a,u,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ls("c:"+this.id+":"),this.transportManager_=new fs(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ji(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>bT?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>MT?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(qa in e){const n=e[qa];n===gp?this.upgradeIfSecondaryHealthy_():n===pp?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===mp&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=vi("t",e),r=vi("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:vp,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:gp,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:_p,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=vi("t",e),r=vi("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=vi(qa,e);if(fp in e){const r=e[fp];if(n===jT){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===_p){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===FT?this.onConnectionShutdown_(r):n===pp?this.onReset_(r):n===UT?ac("Server Error: "+r):n===mp?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ac("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),bd!==r&&We("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),ji(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(DT))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ji(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(LT))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:vp,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Hn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Ov{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Av{constructor(e){this.allowedEvents_=e,this.listeners_={},k(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){k(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class pl extends Av{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!wd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new pl}getInitialEvent(e){return k(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const yp=32,Ep=768;class G{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function W(){return new G("")}function U(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function In(t){return t.pieces_.length-t.pieceNum_}function K(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new G(t.pieces_,e)}function Dv(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function zT(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Lv(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Mv(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new G(e,0)}function de(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof G)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new G(n,0)}function B(t){return t.pieceNum_>=t.pieces_.length}function Ae(t,e){const n=U(t),r=U(e);if(n===null)return e;if(n===r)return Ae(K(t),K(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function jd(t,e){if(In(t)!==In(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function ut(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(In(t)>In(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class VT{constructor(e,n){this.errorPrefix_=n,this.parts_=Lv(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Gl(this.parts_[r]);bv(this)}}function WT(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Gl(e),bv(t)}function $T(t){const e=t.parts_.pop();t.byteLength_-=Gl(e),t.parts_.length>0&&(t.byteLength_-=1)}function bv(t){if(t.byteLength_>Ep)throw new Error(t.errorPrefix_+"has a key path longer than "+Ep+" bytes ("+t.byteLength_+").");if(t.parts_.length>yp)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+yp+") or object contains a cycle "+Bn(t))}function Bn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Bd extends Av{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Bd}getInitialEvent(e){return k(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const yi=1e3,HT=60*5*1e3,wp=30*1e3,GT=1.3,KT=3e4,YT="server_kill",Sp=3;class Mt extends Ov{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Mt.nextPersistentConnectionId_++,this.log_=Ls("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=yi,this.maxReconnectDelay_=HT,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!S_())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Bd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&pl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(ce(s)),k(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Hl,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),k(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),k(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;Mt.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Ht(e,"w")){const r=Kr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();We(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||IS(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=wp)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=CS(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),k(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ce(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):ac("Unrecognized action received from server: "+ce(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){k(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=yi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=yi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>KT&&(this.reconnectDelay_=yi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*GT)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Mt.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(c){k(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(c)};this.realtime_={close:a,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,h]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Re("getToken() completed but was canceled"):(Re("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=h&&h.token,l=new BT(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,_=>{We(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(YT)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&We(c),a())}}}interrupt(e){Re("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Re("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Xu(this.interruptReasons_)&&(this.reconnectDelay_=yi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Md(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new G(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Re("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Sp&&(this.reconnectDelay_=wp,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Re("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Sp&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+uv.replace(/\./g,"-")]=1,wd()?e["framework.cordova"]=1:w_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=pl.getInstance().currentlyOnline();return Xu(this.interruptReasons_)&&e}}Mt.nextPersistentConnectionId_=0;Mt.nextConnectionId_=0;/**
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
 */class Xl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new j(qr,e),i=new j(qr,n);return this.compare(r,i)!==0}minPost(){return j.MIN}}/**
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
 */let ao;class Fv extends Xl{static get __EMPTY_NODE(){return ao}static set __EMPTY_NODE(e){ao=e}compare(e,n){return li(e.name,n.name)}isDefinedOn(e){throw ri("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return j.MIN}maxPost(){return new j(ir,ao)}makePost(e,n){return k(typeof e=="string","KeyIndex indexValue must always be a string."),new j(e,ao)}toString(){return".key"}}const jr=new Fv;/**
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
 */class uo{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ve{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ve.RED,this.left=i??je.EMPTY_NODE,this.right=s??je.EMPTY_NODE}copy(e,n,r,i,s){return new ve(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return je.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return je.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ve.RED=!0;ve.BLACK=!1;class qT{copy(e,n,r,i,s){return this}insert(e,n,r){return new ve(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class je{constructor(e,n=je.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new je(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ve.BLACK,null,null))}remove(e){return new je(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ve.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new uo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new uo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new uo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new uo(this.root_,null,this.comparator_,!0,e)}}je.EMPTY_NODE=new qT;/**
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
 */function QT(t,e){return li(t.name,e.name)}function zd(t,e){return li(t,e)}/**
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
 */let cc;function JT(t){cc=t}const Uv=function(t){return typeof t=="number"?"number:"+pv(t):"string:"+t},jv=function(t){if(t.isLeafNode()){const e=t.val();k(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ht(e,".sv"),"Priority must be a string or number.")}else k(t===cc||t.isEmpty(),"priority of unexpected type.");k(t===cc||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Cp;class ge{constructor(e,n=ge.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,k(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),jv(this.priorityNode_)}static set __childrenNodeConstructor(e){Cp=e}static get __childrenNodeConstructor(){return Cp}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ge(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ge.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return B(e)?this:U(e)===".priority"?this.priorityNode_:ge.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ge.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=U(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(k(r!==".priority"||In(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,ge.__childrenNodeConstructor.EMPTY_NODE.updateChild(K(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Uv(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=pv(this.value_):e+=this.value_,this.lazyHash_=dv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ge.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ge.__childrenNodeConstructor?-1:(k(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=ge.VALUE_TYPE_ORDER.indexOf(n),s=ge.VALUE_TYPE_ORDER.indexOf(r);return k(i>=0,"Unknown leaf type: "+n),k(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ge.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Bv,zv;function XT(t){Bv=t}function ZT(t){zv=t}class e1 extends Xl{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?li(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return j.MIN}maxPost(){return new j(ir,new ge("[PRIORITY-POST]",zv))}makePost(e,n){const r=Bv(e);return new j(n,new ge("[PRIORITY-POST]",r))}toString(){return".priority"}}const ie=new e1;/**
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
 */const t1=Math.log(2);class n1{constructor(e){const n=s=>parseInt(Math.log(s)/t1,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ml=function(t,e,n,r){t.sort(e);const i=function(a,u){const d=u-a;let c,h;if(d===0)return null;if(d===1)return c=t[a],h=n?n(c):c,new ve(h,c.node,ve.BLACK,null,null);{const _=parseInt(d/2,10)+a,v=i(a,_),y=i(_+1,u);return c=t[_],h=n?n(c):c,new ve(h,c.node,ve.BLACK,v,y)}},s=function(a){let u=null,d=null,c=t.length;const h=function(v,y){const w=c-v,p=c;c-=v;const f=i(w+1,p),g=t[w],E=n?n(g):g;_(new ve(E,g.node,y,null,f))},_=function(v){u?(u.left=v,u=v):(d=v,u=v)};for(let v=0;v<a.count;++v){const y=a.nextBitIsOne(),w=Math.pow(2,a.count-(v+1));y?h(w,ve.BLACK):(h(w,ve.BLACK),h(w,ve.RED))}return d},o=new n1(t.length),l=s(o);return new je(r||e,l)};/**
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
 */let Qa;const fr={};class At{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return k(fr&&ie,"ChildrenNode.ts has not been loaded"),Qa=Qa||new At({".priority":fr},{".priority":ie}),Qa}get(e){const n=Kr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof je?n:null}hasIndex(e){return Ht(this.indexSet_,e.toString())}addIndex(e,n){k(e!==jr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(j.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=ml(r,e.getCompare()):l=fr;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const d=Object.assign({},this.indexes_);return d[a]=l,new At(d,u)}addToIndexes(e,n){const r=sl(this.indexes_,(i,s)=>{const o=Kr(this.indexSet_,s);if(k(o,"Missing index implementation for "+s),i===fr)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(j.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),ml(l,o.getCompare())}else return fr;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new j(e.name,l))),a.insert(e,e.node)}});return new At(r,this.indexSet_)}removeFromIndexes(e,n){const r=sl(this.indexes_,i=>{if(i===fr)return i;{const s=n.get(e.name);return s?i.remove(new j(e.name,s)):i}});return new At(r,this.indexSet_)}}/**
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
 */let Ei;class D{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&jv(this.priorityNode_),this.children_.isEmpty()&&k(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ei||(Ei=new D(new je(zd),null,At.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ei}updatePriority(e){return this.children_.isEmpty()?this:new D(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ei:n}}getChild(e){const n=U(e);return n===null?this:this.getImmediateChild(n).getChild(K(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(k(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new j(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Ei:this.priorityNode_;return new D(i,o,s)}}updateChild(e,n){const r=U(e);if(r===null)return n;{k(U(e)!==".priority"||In(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(K(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(ie,(o,l)=>{n[o]=l.val(e),r++,s&&D.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Uv(this.getPriority().val())+":"),this.forEachChild(ie,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":dv(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new j(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new j(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new j(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,j.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,j.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ms?-1:0}withIndex(e){if(e===jr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new D(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===jr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ie),i=n.getIterator(ie);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===jr?null:this.indexMap_.get(e.toString())}}D.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class r1 extends D{constructor(){super(new je(zd),D.EMPTY_NODE,At.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return D.EMPTY_NODE}isEmpty(){return!1}}const Ms=new r1;Object.defineProperties(j,{MIN:{value:new j(qr,D.EMPTY_NODE)},MAX:{value:new j(ir,Ms)}});Fv.__EMPTY_NODE=D.EMPTY_NODE;ge.__childrenNodeConstructor=D;JT(Ms);ZT(Ms);/**
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
 */const i1=!0;function ye(t,e=null){if(t===null)return D.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),k(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ge(n,ye(e))}if(!(t instanceof Array)&&i1){const n=[];let r=!1;if($e(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=ye(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new j(o,a)))}}),n.length===0)return D.EMPTY_NODE;const s=ml(n,QT,o=>o.name,zd);if(r){const o=ml(n,ie.getCompare());return new D(s,ye(e),new At({".priority":o},{".priority":ie}))}else return new D(s,ye(e),At.Default)}else{let n=D.EMPTY_NODE;return $e(t,(r,i)=>{if(Ht(t,r)&&r.substring(0,1)!=="."){const s=ye(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(ye(e))}}XT(ye);/**
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
 */class s1 extends Xl{constructor(e){super(),this.indexPath_=e,k(!B(e)&&U(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?li(e.name,n.name):s}makePost(e,n){const r=ye(e),i=D.EMPTY_NODE.updateChild(this.indexPath_,r);return new j(n,i)}maxPost(){const e=D.EMPTY_NODE.updateChild(this.indexPath_,Ms);return new j(ir,e)}toString(){return Lv(this.indexPath_,0).join("/")}}/**
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
 */class o1 extends Xl{compare(e,n){const r=e.node.compareTo(n.node);return r===0?li(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return j.MIN}maxPost(){return j.MAX}makePost(e,n){const r=ye(e);return new j(n,r)}toString(){return".value"}}const l1=new o1;/**
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
 */function Vv(t){return{type:"value",snapshotNode:t}}function Qr(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ps(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ms(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function a1(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Vd{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){k(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(ps(n,l)):k(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Qr(n,r)):o.trackChildChange(ms(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ie,(i,s)=>{n.hasChild(i)||r.trackChildChange(ps(i,s))}),n.isLeafNode()||n.forEachChild(ie,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(ms(i,s,o))}else r.trackChildChange(Qr(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?D.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class gs{constructor(e){this.indexedFilter_=new Vd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=gs.getStartPost_(e),this.endPost_=gs.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new j(n,r))||(r=D.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=D.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(D.EMPTY_NODE);const s=this;return n.forEachChild(ie,(o,l)=>{s.matches(new j(o,l))||(i=i.updateImmediateChild(o,D.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class u1{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new gs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new j(n,r))||(r=D.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=D.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=D.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(D.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,D.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const c=this.index_.getCompare();o=(h,_)=>c(_,h)}else o=this.index_.getCompare();const l=e;k(l.numChildren()===this.limit_,"");const a=new j(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),d=this.rangedFilter_.matches(a);if(l.hasChild(n)){const c=l.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,u,this.reverse_);for(;h!=null&&(h.name===n||l.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const _=h==null?1:o(h,a);if(d&&!r.isEmpty()&&_>=0)return s!=null&&s.trackChildChange(ms(n,r,c)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(ps(n,c));const y=l.updateImmediateChild(n,D.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(Qr(h.name,h.node)),y.updateImmediateChild(h.name,h.node)):y}}else return r.isEmpty()?e:d&&o(u,a)>=0?(s!=null&&(s.trackChildChange(ps(u.name,u.node)),s.trackChildChange(Qr(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,D.EMPTY_NODE)):e}}/**
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
 */class Wd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ie}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return k(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return k(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:qr}hasEnd(){return this.endSet_}getIndexEndValue(){return k(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return k(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ir}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return k(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ie}copy(){const e=new Wd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function c1(t){return t.loadsAllData()?new Vd(t.getIndex()):t.hasLimit()?new u1(t):new gs(t)}function Ip(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ie?n="$priority":t.index_===l1?n="$value":t.index_===jr?n="$key":(k(t.index_ instanceof s1,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ce(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=ce(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+ce(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=ce(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+ce(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function kp(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ie&&(e.i=t.index_.toString()),e}/**
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
 */class gl extends Ov{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Ls("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(k(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=gl.getListenId_(e,r),l={};this.listens_[o]=l;const a=Ip(e._queryParams);this.restRequest_(s+".json",a,(u,d)=>{let c=d;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,r),Kr(this.listens_,o)===l){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",i(h,null)}})}unlisten(e,n){const r=gl.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Ip(e._queryParams),r=e._path.toString(),i=new Hl;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ii(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=us(l.responseText)}catch{We("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&We("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class d1{constructor(){this.rootNode_=D.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function _l(){return{value:null,children:new Map}}function Wv(t,e,n){if(B(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=U(e);t.children.has(r)||t.children.set(r,_l());const i=t.children.get(r);e=K(e),Wv(i,e,n)}}function dc(t,e,n){t.value!==null?n(e,t.value):h1(t,(r,i)=>{const s=new G(e.toString()+"/"+r);dc(i,s,n)})}function h1(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class f1{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&$e(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const Tp=10*1e3,p1=30*1e3,m1=5*60*1e3;class g1{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new f1(e);const r=Tp+(p1-Tp)*Math.random();ji(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;$e(e,(i,s)=>{s>0&&Ht(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),ji(this.reportStats_.bind(this),Math.floor(Math.random()*2*m1))}}/**
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
 */var ct;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ct||(ct={}));function $v(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function $d(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Hd(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class vl{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=ct.ACK_USER_WRITE,this.source=$v()}operationForChild(e){if(B(this.path)){if(this.affectedTree.value!=null)return k(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new G(e));return new vl(W(),n,this.revert)}}else return k(U(this.path)===e,"operationForChild called for unrelated child."),new vl(K(this.path),this.affectedTree,this.revert)}}/**
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
 */class _s{constructor(e,n){this.source=e,this.path=n,this.type=ct.LISTEN_COMPLETE}operationForChild(e){return B(this.path)?new _s(this.source,W()):new _s(this.source,K(this.path))}}/**
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
 */class sr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=ct.OVERWRITE}operationForChild(e){return B(this.path)?new sr(this.source,W(),this.snap.getImmediateChild(e)):new sr(this.source,K(this.path),this.snap)}}/**
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
 */class vs{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=ct.MERGE}operationForChild(e){if(B(this.path)){const n=this.children.subtree(new G(e));return n.isEmpty()?null:n.value?new sr(this.source,W(),n.value):new vs(this.source,W(),n)}else return k(U(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new vs(this.source,K(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class kn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(B(e))return this.isFullyInitialized()&&!this.filtered_;const n=U(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class _1{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function v1(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(a1(o.childName,o.snapshotNode))}),wi(t,i,"child_removed",e,r,n),wi(t,i,"child_added",e,r,n),wi(t,i,"child_moved",s,r,n),wi(t,i,"child_changed",e,r,n),wi(t,i,"value",e,r,n),i}function wi(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>E1(t,l,a)),o.forEach(l=>{const a=y1(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function y1(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function E1(t,e,n){if(e.childName==null||n.childName==null)throw ri("Should only compare child_ events.");const r=new j(e.childName,e.snapshotNode),i=new j(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function Zl(t,e){return{eventCache:t,serverCache:e}}function Bi(t,e,n,r){return Zl(new kn(e,n,r),t.serverCache)}function Hv(t,e,n,r){return Zl(t.eventCache,new kn(e,n,r))}function yl(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function or(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Ja;const w1=()=>(Ja||(Ja=new je(oT)),Ja);class Q{constructor(e,n=w1()){this.value=e,this.children=n}static fromObject(e){let n=new Q(null);return $e(e,(r,i)=>{n=n.set(new G(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:W(),value:this.value};if(B(e))return null;{const r=U(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(K(e),n);return s!=null?{path:de(new G(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(B(e))return this;{const n=U(e),r=this.children.get(n);return r!==null?r.subtree(K(e)):new Q(null)}}set(e,n){if(B(e))return new Q(n,this.children);{const r=U(e),s=(this.children.get(r)||new Q(null)).set(K(e),n),o=this.children.insert(r,s);return new Q(this.value,o)}}remove(e){if(B(e))return this.children.isEmpty()?new Q(null):new Q(null,this.children);{const n=U(e),r=this.children.get(n);if(r){const i=r.remove(K(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Q(null):new Q(this.value,s)}else return this}}get(e){if(B(e))return this.value;{const n=U(e),r=this.children.get(n);return r?r.get(K(e)):null}}setTree(e,n){if(B(e))return n;{const r=U(e),s=(this.children.get(r)||new Q(null)).setTree(K(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Q(this.value,o)}}fold(e){return this.fold_(W(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(de(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,W(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(B(e))return null;{const s=U(e),o=this.children.get(s);return o?o.findOnPath_(K(e),de(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,W(),n)}foreachOnPath_(e,n,r){if(B(e))return this;{this.value&&r(n,this.value);const i=U(e),s=this.children.get(i);return s?s.foreachOnPath_(K(e),de(n,i),r):new Q(null)}}foreach(e){this.foreach_(W(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(de(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class ft{constructor(e){this.writeTree_=e}static empty(){return new ft(new Q(null))}}function zi(t,e,n){if(B(e))return new ft(new Q(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Ae(i,e);return s=s.updateChild(o,n),new ft(t.writeTree_.set(i,s))}else{const i=new Q(n),s=t.writeTree_.setTree(e,i);return new ft(s)}}}function Np(t,e,n){let r=t;return $e(n,(i,s)=>{r=zi(r,de(e,i),s)}),r}function Rp(t,e){if(B(e))return ft.empty();{const n=t.writeTree_.setTree(e,new Q(null));return new ft(n)}}function hc(t,e){return cr(t,e)!=null}function cr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ae(n.path,e)):null}function Pp(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ie,(r,i)=>{e.push(new j(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new j(r,i.value))}),e}function En(t,e){if(B(e))return t;{const n=cr(t,e);return n!=null?new ft(new Q(n)):new ft(t.writeTree_.subtree(e))}}function fc(t){return t.writeTree_.isEmpty()}function Jr(t,e){return Gv(W(),t.writeTree_,e)}function Gv(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(k(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Gv(de(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(de(t,".priority"),r)),n}}/**
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
 */function ea(t,e){return Qv(e,t)}function S1(t,e,n,r,i){k(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=zi(t.visibleWrites,e,n)),t.lastWriteId=r}function C1(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function I1(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);k(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&k1(l,r.path)?i=!1:ut(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return T1(t),!0;if(r.snap)t.visibleWrites=Rp(t.visibleWrites,r.path);else{const l=r.children;$e(l,a=>{t.visibleWrites=Rp(t.visibleWrites,de(r.path,a))})}return!0}else return!1}function k1(t,e){if(t.snap)return ut(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ut(de(t.path,n),e))return!0;return!1}function T1(t){t.visibleWrites=Kv(t.allWrites,N1,W()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function N1(t){return t.visible}function Kv(t,e,n){let r=ft.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)ut(n,o)?(l=Ae(n,o),r=zi(r,l,s.snap)):ut(o,n)&&(l=Ae(o,n),r=zi(r,W(),s.snap.getChild(l)));else if(s.children){if(ut(n,o))l=Ae(n,o),r=Np(r,l,s.children);else if(ut(o,n))if(l=Ae(o,n),B(l))r=Np(r,W(),s.children);else{const a=Kr(s.children,U(l));if(a){const u=a.getChild(K(l));r=zi(r,W(),u)}}}else throw ri("WriteRecord should have .snap or .children")}}return r}function Yv(t,e,n,r,i){if(!r&&!i){const s=cr(t.visibleWrites,e);if(s!=null)return s;{const o=En(t.visibleWrites,e);if(fc(o))return n;if(n==null&&!hc(o,W()))return null;{const l=n||D.EMPTY_NODE;return Jr(o,l)}}}else{const s=En(t.visibleWrites,e);if(!i&&fc(s))return n;if(!i&&n==null&&!hc(s,W()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(ut(u.path,e)||ut(e,u.path))},l=Kv(t.allWrites,o,e),a=n||D.EMPTY_NODE;return Jr(l,a)}}}function R1(t,e,n){let r=D.EMPTY_NODE;const i=cr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ie,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=En(t.visibleWrites,e);return n.forEachChild(ie,(o,l)=>{const a=Jr(En(s,new G(o)),l);r=r.updateImmediateChild(o,a)}),Pp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=En(t.visibleWrites,e);return Pp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function P1(t,e,n,r,i){k(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=de(e,n);if(hc(t.visibleWrites,s))return null;{const o=En(t.visibleWrites,s);return fc(o)?i.getChild(n):Jr(o,i.getChild(n))}}function x1(t,e,n,r){const i=de(e,n),s=cr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=En(t.visibleWrites,i);return Jr(o,r.getNode().getImmediateChild(n))}else return null}function O1(t,e){return cr(t.visibleWrites,e)}function A1(t,e,n,r,i,s,o){let l;const a=En(t.visibleWrites,e),u=cr(a,W());if(u!=null)l=u;else if(n!=null)l=Jr(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const d=[],c=o.getCompare(),h=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let _=h.getNext();for(;_&&d.length<i;)c(_,r)!==0&&d.push(_),_=h.getNext();return d}else return[]}function D1(){return{visibleWrites:ft.empty(),allWrites:[],lastWriteId:-1}}function El(t,e,n,r){return Yv(t.writeTree,t.treePath,e,n,r)}function Gd(t,e){return R1(t.writeTree,t.treePath,e)}function xp(t,e,n,r){return P1(t.writeTree,t.treePath,e,n,r)}function wl(t,e){return O1(t.writeTree,de(t.treePath,e))}function L1(t,e,n,r,i,s){return A1(t.writeTree,t.treePath,e,n,r,i,s)}function Kd(t,e,n){return x1(t.writeTree,t.treePath,e,n)}function qv(t,e){return Qv(de(t.treePath,e),t.writeTree)}function Qv(t,e){return{treePath:t,writeTree:e}}/**
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
 */class M1{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;k(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),k(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,ms(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,ps(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Qr(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,ms(r,e.snapshotNode,i.oldSnap));else throw ri("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class b1{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Jv=new b1;class Yd{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new kn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Kd(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:or(this.viewCache_),s=L1(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function F1(t){return{filter:t}}function U1(t,e){k(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),k(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function j1(t,e,n,r,i){const s=new M1;let o,l;if(n.type===ct.OVERWRITE){const u=n;u.source.fromUser?o=pc(t,e,u.path,u.snap,r,i,s):(k(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!B(u.path),o=Sl(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===ct.MERGE){const u=n;u.source.fromUser?o=z1(t,e,u.path,u.children,r,i,s):(k(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=mc(t,e,u.path,u.children,r,i,l,s))}else if(n.type===ct.ACK_USER_WRITE){const u=n;u.revert?o=$1(t,e,u.path,r,i,s):o=V1(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===ct.LISTEN_COMPLETE)o=W1(t,e,n.path,r,s);else throw ri("Unknown operation type: "+n.type);const a=s.getChanges();return B1(e,o,a),{viewCache:o,changes:a}}function B1(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=yl(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Vv(yl(e)))}}function Xv(t,e,n,r,i,s){const o=e.eventCache;if(wl(r,n)!=null)return e;{let l,a;if(B(n))if(k(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=or(e),d=u instanceof D?u:D.EMPTY_NODE,c=Gd(r,d);l=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const u=El(r,or(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=U(n);if(u===".priority"){k(In(n)===1,"Can't have a priority with additional path components");const d=o.getNode();a=e.serverCache.getNode();const c=xp(r,n,d,a);c!=null?l=t.filter.updatePriority(d,c):l=o.getNode()}else{const d=K(n);let c;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const h=xp(r,n,o.getNode(),a);h!=null?c=o.getNode().getImmediateChild(u).updateChild(d,h):c=o.getNode().getImmediateChild(u)}else c=Kd(r,u,e.serverCache);c!=null?l=t.filter.updateChild(o.getNode(),u,c,d,i,s):l=o.getNode()}}return Bi(e,l,o.isFullyInitialized()||B(n),t.filter.filtersNodes())}}function Sl(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const d=o?t.filter:t.filter.getIndexedFilter();if(B(n))u=d.updateFullNode(a.getNode(),r,null);else if(d.filtersNodes()&&!a.isFiltered()){const _=a.getNode().updateChild(n,r);u=d.updateFullNode(a.getNode(),_,null)}else{const _=U(n);if(!a.isCompleteForPath(n)&&In(n)>1)return e;const v=K(n),w=a.getNode().getImmediateChild(_).updateChild(v,r);_===".priority"?u=d.updatePriority(a.getNode(),w):u=d.updateChild(a.getNode(),_,w,v,Jv,null)}const c=Hv(e,u,a.isFullyInitialized()||B(n),d.filtersNodes()),h=new Yd(i,c,s);return Xv(t,c,n,i,h,l)}function pc(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const d=new Yd(i,e,s);if(B(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=Bi(e,u,!0,t.filter.filtersNodes());else{const c=U(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=Bi(e,u,l.isFullyInitialized(),l.isFiltered());else{const h=K(n),_=l.getNode().getImmediateChild(c);let v;if(B(h))v=r;else{const y=d.getCompleteChild(c);y!=null?Dv(h)===".priority"&&y.getChild(Mv(h)).isEmpty()?v=y:v=y.updateChild(h,r):v=D.EMPTY_NODE}if(_.equals(v))a=e;else{const y=t.filter.updateChild(l.getNode(),c,v,h,d,o);a=Bi(e,y,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Op(t,e){return t.eventCache.isCompleteForChild(e)}function z1(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const d=de(n,a);Op(e,U(d))&&(l=pc(t,l,d,u,i,s,o))}),r.foreach((a,u)=>{const d=de(n,a);Op(e,U(d))||(l=pc(t,l,d,u,i,s,o))}),l}function Ap(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function mc(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;B(n)?u=r:u=new Q(null).setTree(n,r);const d=e.serverCache.getNode();return u.children.inorderTraversal((c,h)=>{if(d.hasChild(c)){const _=e.serverCache.getNode().getImmediateChild(c),v=Ap(t,_,h);a=Sl(t,a,new G(c),v,i,s,o,l)}}),u.children.inorderTraversal((c,h)=>{const _=!e.serverCache.isCompleteForChild(c)&&h.value===null;if(!d.hasChild(c)&&!_){const v=e.serverCache.getNode().getImmediateChild(c),y=Ap(t,v,h);a=Sl(t,a,new G(c),y,i,s,o,l)}}),a}function V1(t,e,n,r,i,s,o){if(wl(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(B(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Sl(t,e,n,a.getNode().getChild(n),i,s,l,o);if(B(n)){let u=new Q(null);return a.getNode().forEachChild(jr,(d,c)=>{u=u.set(new G(d),c)}),mc(t,e,n,u,i,s,l,o)}else return e}else{let u=new Q(null);return r.foreach((d,c)=>{const h=de(n,d);a.isCompleteForPath(h)&&(u=u.set(d,a.getNode().getChild(h)))}),mc(t,e,n,u,i,s,l,o)}}function W1(t,e,n,r,i){const s=e.serverCache,o=Hv(e,s.getNode(),s.isFullyInitialized()||B(n),s.isFiltered());return Xv(t,o,n,r,Jv,i)}function $1(t,e,n,r,i,s){let o;if(wl(r,n)!=null)return e;{const l=new Yd(r,e,i),a=e.eventCache.getNode();let u;if(B(n)||U(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=El(r,or(e));else{const c=e.serverCache.getNode();k(c instanceof D,"serverChildren would be complete if leaf node"),d=Gd(r,c)}d=d,u=t.filter.updateFullNode(a,d,s)}else{const d=U(n);let c=Kd(r,d,e.serverCache);c==null&&e.serverCache.isCompleteForChild(d)&&(c=a.getImmediateChild(d)),c!=null?u=t.filter.updateChild(a,d,c,K(n),l,s):e.eventCache.getNode().hasChild(d)?u=t.filter.updateChild(a,d,D.EMPTY_NODE,K(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=El(r,or(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||wl(r,W())!=null,Bi(e,u,o,t.filter.filtersNodes())}}/**
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
 */class H1{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Vd(r.getIndex()),s=c1(r);this.processor_=F1(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(D.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(D.EMPTY_NODE,l.getNode(),null),d=new kn(a,o.isFullyInitialized(),i.filtersNodes()),c=new kn(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=Zl(c,d),this.eventGenerator_=new _1(this.query_)}get query(){return this.query_}}function G1(t){return t.viewCache_.serverCache.getNode()}function K1(t){return yl(t.viewCache_)}function Y1(t,e){const n=or(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!B(e)&&!n.getImmediateChild(U(e)).isEmpty())?n.getChild(e):null}function Dp(t){return t.eventRegistrations_.length===0}function q1(t,e){t.eventRegistrations_.push(e)}function Lp(t,e,n){const r=[];if(n){k(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Mp(t,e,n,r){e.type===ct.MERGE&&e.source.queryId!==null&&(k(or(t.viewCache_),"We should always have a full cache before handling merges"),k(yl(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=j1(t.processor_,i,e,n,r);return U1(t.processor_,s.viewCache),k(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Zv(t,s.changes,s.viewCache.eventCache.getNode(),null)}function Q1(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ie,(s,o)=>{r.push(Qr(s,o))}),n.isFullyInitialized()&&r.push(Vv(n.getNode())),Zv(t,r,n.getNode(),e)}function Zv(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return v1(t.eventGenerator_,e,n,i)}/**
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
 */let Cl;class ey{constructor(){this.views=new Map}}function J1(t){k(!Cl,"__referenceConstructor has already been defined"),Cl=t}function X1(){return k(Cl,"Reference.ts has not been loaded"),Cl}function Z1(t){return t.views.size===0}function qd(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return k(s!=null,"SyncTree gave us an op for an invalid query."),Mp(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Mp(o,e,n,r));return s}}function ty(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=El(n,i?r:null),a=!1;l?a=!0:r instanceof D?(l=Gd(n,r),a=!1):(l=D.EMPTY_NODE,a=!1);const u=Zl(new kn(l,a,!1),new kn(r,i,!1));return new H1(e,u)}return o}function eN(t,e,n,r,i,s){const o=ty(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),q1(o,n),Q1(o,n)}function tN(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=Tn(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(Lp(u,n,r)),Dp(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(Lp(a,n,r)),Dp(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!Tn(t)&&s.push(new(X1())(e._repo,e._path)),{removed:s,events:o}}function ny(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function wn(t,e){let n=null;for(const r of t.views.values())n=n||Y1(r,e);return n}function ry(t,e){if(e._queryParams.loadsAllData())return ta(t);{const r=e._queryIdentifier;return t.views.get(r)}}function iy(t,e){return ry(t,e)!=null}function Tn(t){return ta(t)!=null}function ta(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Il;function nN(t){k(!Il,"__referenceConstructor has already been defined"),Il=t}function rN(){return k(Il,"Reference.ts has not been loaded"),Il}let iN=1;class bp{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Q(null),this.pendingWriteTree_=D1(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function sy(t,e,n,r,i){return S1(t.pendingWriteTree_,e,n,r,i),i?Fs(t,new sr($v(),e,n)):[]}function Gn(t,e,n=!1){const r=C1(t.pendingWriteTree_,e);if(I1(t.pendingWriteTree_,e)){let s=new Q(null);return r.snap!=null?s=s.set(W(),!0):$e(r.children,o=>{s=s.set(new G(o),!0)}),Fs(t,new vl(r.path,s,n))}else return[]}function bs(t,e,n){return Fs(t,new sr($d(),e,n))}function sN(t,e,n){const r=Q.fromObject(n);return Fs(t,new vs($d(),e,r))}function oN(t,e){return Fs(t,new _s($d(),e))}function lN(t,e,n){const r=Jd(t,n);if(r){const i=Xd(r),s=i.path,o=i.queryId,l=Ae(s,e),a=new _s(Hd(o),l);return Zd(t,s,a)}else return[]}function kl(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||iy(o,e))){const a=tN(o,e,n,r);Z1(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const d=u.findIndex(h=>h._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(s,(h,_)=>Tn(_));if(d&&!c){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const _=cN(h);for(let v=0;v<_.length;++v){const y=_[v],w=y.query,p=uy(t,y);t.listenProvider_.startListening(Vi(w),ys(t,w),p.hashFn,p.onComplete)}}}!c&&u.length>0&&!r&&(d?t.listenProvider_.stopListening(Vi(e),null):u.forEach(h=>{const _=t.queryToTagMap.get(na(h));t.listenProvider_.stopListening(Vi(h),_)}))}dN(t,u)}return l}function oy(t,e,n,r){const i=Jd(t,r);if(i!=null){const s=Xd(i),o=s.path,l=s.queryId,a=Ae(o,e),u=new sr(Hd(l),a,n);return Zd(t,o,u)}else return[]}function aN(t,e,n,r){const i=Jd(t,r);if(i){const s=Xd(i),o=s.path,l=s.queryId,a=Ae(o,e),u=Q.fromObject(n),d=new vs(Hd(l),a,u);return Zd(t,o,d)}else return[]}function gc(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,_)=>{const v=Ae(h,i);s=s||wn(_,v),o=o||Tn(_)});let l=t.syncPointTree_.get(i);l?(o=o||Tn(l),s=s||wn(l,W())):(l=new ey,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=D.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,v)=>{const y=wn(v,W());y&&(s=s.updateImmediateChild(_,y))}));const u=iy(l,e);if(!u&&!e._queryParams.loadsAllData()){const h=na(e);k(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const _=hN();t.queryToTagMap.set(h,_),t.tagToQueryMap.set(_,h)}const d=ea(t.pendingWriteTree_,i);let c=eN(l,e,n,d,s,a);if(!u&&!o&&!r){const h=ry(l,e);c=c.concat(fN(t,e,h))}return c}function Qd(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Ae(o,e),u=wn(l,a);if(u)return u});return Yv(i,e,s,n,!0)}function uN(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,d)=>{const c=Ae(u,n);r=r||wn(d,c)});let i=t.syncPointTree_.get(n);i?r=r||wn(i,W()):(i=new ey,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new kn(r,!0,!1):null,l=ea(t.pendingWriteTree_,e._path),a=ty(i,e,l,s?o.getNode():D.EMPTY_NODE,s);return K1(a)}function Fs(t,e){return ly(e,t.syncPointTree_,null,ea(t.pendingWriteTree_,W()))}function ly(t,e,n,r){if(B(t.path))return ay(t,e,n,r);{const i=e.get(W());n==null&&i!=null&&(n=wn(i,W()));let s=[];const o=U(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,d=qv(r,o);s=s.concat(ly(l,a,u,d))}return i&&(s=s.concat(qd(i,t,r,n))),s}}function ay(t,e,n,r){const i=e.get(W());n==null&&i!=null&&(n=wn(i,W()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=qv(r,o),d=t.operationForChild(o);d&&(s=s.concat(ay(d,l,a,u)))}),i&&(s=s.concat(qd(i,t,r,n))),s}function uy(t,e){const n=e.query,r=ys(t,n);return{hashFn:()=>(G1(e)||D.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?lN(t,n._path,r):oN(t,n._path);{const s=uT(i,n);return kl(t,n,null,s)}}}}function ys(t,e){const n=na(e);return t.queryToTagMap.get(n)}function na(t){return t._path.toString()+"$"+t._queryIdentifier}function Jd(t,e){return t.tagToQueryMap.get(e)}function Xd(t){const e=t.indexOf("$");return k(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new G(t.substr(0,e))}}function Zd(t,e,n){const r=t.syncPointTree_.get(e);k(r,"Missing sync point for query tag that we're tracking");const i=ea(t.pendingWriteTree_,e);return qd(r,n,i,null)}function cN(t){return t.fold((e,n,r)=>{if(n&&Tn(n))return[ta(n)];{let i=[];return n&&(i=ny(n)),$e(r,(s,o)=>{i=i.concat(o)}),i}})}function Vi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(rN())(t._repo,t._path):t}function dN(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=na(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function hN(){return iN++}function fN(t,e,n){const r=e._path,i=ys(t,e),s=uy(t,n),o=t.listenProvider_.startListening(Vi(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)k(!Tn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,d,c)=>{if(!B(u)&&d&&Tn(d))return[ta(d).query];{let h=[];return d&&(h=h.concat(ny(d).map(_=>_.query))),$e(c,(_,v)=>{h=h.concat(v)}),h}});for(let u=0;u<a.length;++u){const d=a[u];t.listenProvider_.stopListening(Vi(d),ys(t,d))}}return o}/**
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
 */class eh{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new eh(n)}node(){return this.node_}}class th{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=de(this.path_,e);return new th(this.syncTree_,n)}node(){return Qd(this.syncTree_,this.path_)}}const pN=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Fp=function(t,e,n){if(!t||typeof t!="object")return t;if(k(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return mN(t[".sv"],e,n);if(typeof t[".sv"]=="object")return gN(t[".sv"],e);k(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},mN=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:k(!1,"Unexpected server value: "+t)}},gN=function(t,e,n){t.hasOwnProperty("increment")||k(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&k(!1,"Unexpected increment value: "+r);const i=e.node();if(k(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},_N=function(t,e,n,r){return nh(e,new th(n,t),r)},cy=function(t,e,n){return nh(t,new eh(e),n)};function nh(t,e,n){const r=t.getPriority().val(),i=Fp(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=Fp(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new ge(l,ye(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new ge(i))),o.forEachChild(ie,(l,a)=>{const u=nh(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
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
 */class rh{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function ih(t,e){let n=e instanceof G?e:new G(e),r=t,i=U(n);for(;i!==null;){const s=Kr(r.node.children,i)||{children:{},childCount:0};r=new rh(i,r,s),n=K(n),i=U(n)}return r}function ui(t){return t.node.value}function dy(t,e){t.node.value=e,_c(t)}function hy(t){return t.node.childCount>0}function vN(t){return ui(t)===void 0&&!hy(t)}function ra(t,e){$e(t.node.children,(n,r)=>{e(new rh(n,t,r))})}function fy(t,e,n,r){n&&!r&&e(t),ra(t,i=>{fy(i,e,!0,r)}),n&&r&&e(t)}function yN(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Us(t){return new G(t.parent===null?t.name:Us(t.parent)+"/"+t.name)}function _c(t){t.parent!==null&&EN(t.parent,t.name,t)}function EN(t,e,n){const r=vN(n),i=Ht(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,_c(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,_c(t))}/**
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
 */const wN=/[\[\].#$\/\u0000-\u001F\u007F]/,SN=/[\[\].#$\u0000-\u001F\u007F]/,Xa=10*1024*1024,py=function(t){return typeof t=="string"&&t.length!==0&&!wN.test(t)},my=function(t){return typeof t=="string"&&t.length!==0&&!SN.test(t)},CN=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),my(t)},IN=function(t,e,n,r){sh(Sd(t,"value"),e,n)},sh=function(t,e,n){const r=n instanceof G?new VT(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Bn(r));if(typeof e=="function")throw new Error(t+"contains a function "+Bn(r)+" with contents = "+e.toString());if(hv(e))throw new Error(t+"contains "+e.toString()+" "+Bn(r));if(typeof e=="string"&&e.length>Xa/3&&Gl(e)>Xa)throw new Error(t+"contains a string greater than "+Xa+" utf8 bytes "+Bn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if($e(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!py(o)))throw new Error(t+" contains an invalid key ("+o+") "+Bn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);WT(r,o),sh(t,l,r),$T(r)}),i&&s)throw new Error(t+' contains ".value" child '+Bn(r)+" in addition to actual children.")}},gy=function(t,e,n,r){if(!my(n))throw new Error(Sd(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},kN=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),gy(t,e,n)},_y=function(t,e){if(U(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},TN=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!py(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!CN(n))throw new Error(Sd(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class NN{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function oh(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!jd(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function vy(t,e,n){oh(t,n),yy(t,r=>jd(r,e))}function It(t,e,n){oh(t,n),yy(t,r=>ut(r,e)||ut(e,r))}function yy(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(RN(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function RN(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Ui&&Re("event: "+n.toString()),ai(r)}}}/**
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
 */const PN="repo_interrupt",xN=25;class ON{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new NN,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=_l(),this.transactionQueueTree_=new rh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function AN(t,e,n){if(t.stats_=Fd(t.repoInfo_),t.forceRestClient_||fT())t.server_=new gl(t.repoInfo_,(r,i,s,o)=>{Up(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>jp(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ce(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Mt(t.repoInfo_,e,(r,i,s,o)=>{Up(t,r,i,s,o)},r=>{jp(t,r)},r=>{LN(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=vT(t.repoInfo_,()=>new g1(t.stats_,t.server_)),t.infoData_=new d1,t.infoSyncTree_=new bp({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=bs(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),ah(t,"connected",!1),t.serverSyncTree_=new bp({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);It(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function DN(t){const n=t.infoData_.getNode(new G(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function lh(t){return pN({timestamp:DN(t)})}function Up(t,e,n,r,i){t.dataUpdateCount++;const s=new G(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=sl(n,u=>ye(u));o=aN(t.serverSyncTree_,s,a,i)}else{const a=ye(n);o=oy(t.serverSyncTree_,s,a,i)}else if(r){const a=sl(n,u=>ye(u));o=sN(t.serverSyncTree_,s,a)}else{const a=ye(n);o=bs(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=sa(t,s)),It(t.eventQueue_,l,o)}function jp(t,e){ah(t,"connected",e),e===!1&&FN(t)}function LN(t,e){$e(e,(n,r)=>{ah(t,n,r)})}function ah(t,e,n){const r=new G("/.info/"+e),i=ye(n);t.infoData_.updateSnapshot(r,i);const s=bs(t.infoSyncTree_,r,i);It(t.eventQueue_,r,s)}function Ey(t){return t.nextWriteId_++}function MN(t,e,n){const r=uN(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=ye(i).withIndex(e._queryParams.getIndex());gc(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=bs(t.serverSyncTree_,e._path,s);else{const l=ys(t.serverSyncTree_,e);o=oy(t.serverSyncTree_,e._path,s,l)}return It(t.eventQueue_,e._path,o),kl(t.serverSyncTree_,e,n,null,!0),s},i=>(ia(t,"get for query "+ce(e)+" failed: "+i),Promise.reject(new Error(i))))}function bN(t,e,n,r,i){ia(t,"set",{path:e.toString(),value:n,priority:r});const s=lh(t),o=ye(n,r),l=Qd(t.serverSyncTree_,e),a=cy(o,l,s),u=Ey(t),d=sy(t.serverSyncTree_,e,a,u,!0);oh(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(h,_)=>{const v=h==="ok";v||We("set at "+e+" failed: "+h);const y=Gn(t.serverSyncTree_,u,!v);It(t.eventQueue_,e,y),zN(t,i,h,_)});const c=ky(t,e);sa(t,c),It(t.eventQueue_,c,[])}function FN(t){ia(t,"onDisconnectEvents");const e=lh(t),n=_l();dc(t.onDisconnect_,W(),(i,s)=>{const o=_N(i,s,t.serverSyncTree_,e);Wv(n,i,o)});let r=[];dc(n,W(),(i,s)=>{r=r.concat(bs(t.serverSyncTree_,i,s));const o=ky(t,i);sa(t,o)}),t.onDisconnect_=_l(),It(t.eventQueue_,W(),r)}function UN(t,e,n){let r;U(e._path)===".info"?r=gc(t.infoSyncTree_,e,n):r=gc(t.serverSyncTree_,e,n),vy(t.eventQueue_,e._path,r)}function jN(t,e,n){let r;U(e._path)===".info"?r=kl(t.infoSyncTree_,e,n):r=kl(t.serverSyncTree_,e,n),vy(t.eventQueue_,e._path,r)}function BN(t){t.persistentConnection_&&t.persistentConnection_.interrupt(PN)}function ia(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Re(n,...e)}function zN(t,e,n,r){e&&ai(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function wy(t,e,n){return Qd(t.serverSyncTree_,e,n)||D.EMPTY_NODE}function uh(t,e=t.transactionQueueTree_){if(e||oa(t,e),ui(e)){const n=Cy(t,e);k(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&VN(t,Us(e),n)}else hy(e)&&ra(e,n=>{uh(t,n)})}function VN(t,e,n){const r=n.map(u=>u.currentWriteId),i=wy(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const d=n[u];k(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const c=Ae(e,d.path);s=s.updateChild(c,d.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{ia(t,"transaction put response",{path:a.toString(),status:u});let d=[];if(u==="ok"){const c=[];for(let h=0;h<n.length;h++)n[h].status=2,d=d.concat(Gn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&c.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();oa(t,ih(t.transactionQueueTree_,e)),uh(t,t.transactionQueueTree_),It(t.eventQueue_,e,d);for(let h=0;h<c.length;h++)ai(c[h])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{We("transaction at "+a.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}sa(t,e)}},o)}function sa(t,e){const n=Sy(t,e),r=Us(n),i=Cy(t,n);return WN(t,i,r),r}function WN(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=Ae(n,a.path);let d=!1,c;if(k(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)d=!0,c=a.abortReason,i=i.concat(Gn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=xN)d=!0,c="maxretry",i=i.concat(Gn(t.serverSyncTree_,a.currentWriteId,!0));else{const h=wy(t,a.path,o);a.currentInputSnapshot=h;const _=e[l].update(h.val());if(_!==void 0){sh("transaction failed: Data returned ",_,a.path);let v=ye(_);typeof _=="object"&&_!=null&&Ht(_,".priority")||(v=v.updatePriority(h.getPriority()));const w=a.currentWriteId,p=lh(t),f=cy(v,h,p);a.currentOutputSnapshotRaw=v,a.currentOutputSnapshotResolved=f,a.currentWriteId=Ey(t),o.splice(o.indexOf(w),1),i=i.concat(sy(t.serverSyncTree_,a.path,f,a.currentWriteId,a.applyLocally)),i=i.concat(Gn(t.serverSyncTree_,w,!0))}else d=!0,c="nodata",i=i.concat(Gn(t.serverSyncTree_,a.currentWriteId,!0))}It(t.eventQueue_,n,i),i=[],d&&(e[l].status=2,function(h){setTimeout(h,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(c==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(c),!1,null))))}oa(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)ai(r[l]);uh(t,t.transactionQueueTree_)}function Sy(t,e){let n,r=t.transactionQueueTree_;for(n=U(e);n!==null&&ui(r)===void 0;)r=ih(r,n),e=K(e),n=U(e);return r}function Cy(t,e){const n=[];return Iy(t,e,n),n.sort((r,i)=>r.order-i.order),n}function Iy(t,e,n){const r=ui(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);ra(e,i=>{Iy(t,i,n)})}function oa(t,e){const n=ui(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,dy(e,n.length>0?n:void 0)}ra(e,r=>{oa(t,r)})}function ky(t,e){const n=Us(Sy(t,e)),r=ih(t.transactionQueueTree_,e);return yN(r,i=>{Za(t,i)}),Za(t,r),fy(r,i=>{Za(t,i)}),n}function Za(t,e){const n=ui(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(k(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(k(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Gn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?dy(e,void 0):n.length=s+1,It(t.eventQueue_,Us(e),i);for(let o=0;o<r.length;o++)ai(r[o])}}/**
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
 */function $N(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function HN(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):We(`Invalid query segment '${n}' in query '${t}'`)}return e}const Bp=function(t,e){const n=GN(t),r=n.namespace;n.domain==="firebase.com"&&Vt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Vt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||iT();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Iv(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new G(n.pathString)}},GN=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let d=t.indexOf("/");d===-1&&(d=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(d,c)),d<c&&(i=$N(t.substring(d,c)));const h=HN(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const _=e.slice(0,u);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
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
 */class KN{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ce(this.snapshot.exportVal())}}class YN{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Ty{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return k(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class ch{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return B(this._path)?null:Dv(this._path)}get ref(){return new Gt(this._repo,this._path)}get _queryIdentifier(){const e=kp(this._queryParams),n=Md(e);return n==="{}"?"default":n}get _queryObject(){return kp(this._queryParams)}isEqual(e){if(e=be(e),!(e instanceof ch))return!1;const n=this._repo===e._repo,r=jd(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+zT(this._path)}}class Gt extends ch{constructor(e,n){super(e,n,new Wd,!1)}get parent(){const e=Mv(this._path);return e===null?null:new Gt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Es{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new G(e),r=vc(this.ref,e);return new Es(this._node.getChild(n),r,ie)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Es(i,vc(this.ref,r),ie)))}hasChild(e){const n=new G(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ee(t,e){return t=be(t),t._checkNotDeleted("ref"),e!==void 0?vc(t._root,e):t._root}function vc(t,e){return t=be(t),U(t._path)===null?kN("child","path",e):gy("child","path",e),new Gt(t._repo,de(t._path,e))}function dh(t){return _y("remove",t._path),bt(t,null)}function bt(t,e){t=be(t),_y("set",t._path),IN("set",e,t._path);const n=new Hl;return bN(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function eu(t){t=be(t);const e=new Ty(()=>{}),n=new la(e);return MN(t._repo,t,n).then(r=>new Es(r,new Gt(t._repo,t._path),t._queryParams.getIndex()))}class la{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new KN("value",this,new Es(e.snapshotNode,new Gt(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new YN(this,e,n):null}matches(e){return e instanceof la?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function qN(t,e,n,r,i){const s=new Ty(n,void 0),o=new la(s);return UN(t._repo,t,o),()=>jN(t._repo,t,o)}function ws(t,e,n,r){return qN(t,"value",e)}J1(Gt);nN(Gt);/**
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
 */const QN="FIREBASE_DATABASE_EMULATOR_HOST",yc={};let JN=!1;function XN(t,e,n,r){t.repoInfo_=new Iv(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function ZN(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Vt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Re("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Bp(s,i),l=o.repoInfo,a;typeof process<"u"&&lp&&(a=lp[QN]),a?(s=`http://${a}?ns=${l.namespace}`,o=Bp(s,i),l=o.repoInfo):o.repoInfo.secure;const u=new mT(t.name,t.options,e);TN("Invalid Firebase Database URL",o),B(o.path)||Vt("Database URL must point to the root of a Firebase Database (not including a child path).");const d=tR(l,t,u,new pT(t.name,n));return new nR(d,t)}function eR(t,e){const n=yc[e];(!n||n[t.key]!==t)&&Vt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),BN(t),delete n[t.key]}function tR(t,e,n,r){let i=yc[e.name];i||(i={},yc[e.name]=i);let s=i[t.toURLString()];return s&&Vt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new ON(t,JN,n,r),i[t.toURLString()]=s,s}class nR{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(AN(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Gt(this._repo,W())),this._rootInternal}_delete(){return this._rootInternal!==null&&(eR(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Vt("Cannot call "+e+" on a deleted database.")}}function aa(t=N_(),e){const n=kd(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=pS("database");r&&rR(n,...r)}return n}function rR(t,e,n,r={}){t=be(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Vt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Vt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new xo(xo.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:mS(r.mockUserToken,t.app.options.projectId);s=new xo(o)}XN(i,e,n,s)}/**
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
 */function iR(t){Xk(si),Yr(new er("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return ZN(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),yn(ap,up,t),yn(ap,up,"esm2017")}Mt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Mt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};iR();var Kt={exports:{}};const sR={},oR=Object.freeze(Object.defineProperty({__proto__:null,default:sR},Symbol.toStringTag,{value:"Module"})),ua=Oy(oR),lR="dotenv",aR="16.4.5",uR="Loads environment variables from .env file",cR="lib/main.js",dR="lib/main.d.ts",hR={".":{types:"./lib/main.d.ts",require:"./lib/main.js",default:"./lib/main.js"},"./config":"./config.js","./config.js":"./config.js","./lib/env-options":"./lib/env-options.js","./lib/env-options.js":"./lib/env-options.js","./lib/cli-options":"./lib/cli-options.js","./lib/cli-options.js":"./lib/cli-options.js","./package.json":"./package.json"},fR={"dts-check":"tsc --project tests/types/tsconfig.json",lint:"standard","lint-readme":"standard-markdown",pretest:"npm run lint && npm run dts-check",test:"tap tests/*.js --100 -Rspec","test:coverage":"tap --coverage-report=lcov",prerelease:"npm test",release:"standard-version"},pR={type:"git",url:"git://github.com/motdotla/dotenv.git"},mR="https://dotenvx.com",gR=["dotenv","env",".env","environment","variables","config","settings"],_R="README.md",vR="BSD-2-Clause",yR={"@definitelytyped/dtslint":"^0.0.133","@types/node":"^18.11.3",decache:"^4.6.1",sinon:"^14.0.1",standard:"^17.0.0","standard-markdown":"^7.1.0","standard-version":"^9.5.0",tap:"^16.3.0",tar:"^6.1.11",typescript:"^4.8.4"},ER={node:">=12"},wR={fs:!1},SR={name:lR,version:aR,description:uR,main:cR,types:dR,exports:hR,scripts:fR,repository:pR,funding:mR,keywords:gR,readmeFilename:_R,license:vR,devDependencies:yR,engines:ER,browser:wR};var Wi={};const Ec=ua,hh=ua,CR=ua,IR=ua,kR=SR,fh=kR.version,TR=/(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;function NR(t){const e={};let n=t.toString();n=n.replace(/\r\n?/mg,`
`);let r;for(;(r=TR.exec(n))!=null;){const i=r[1];let s=r[2]||"";s=s.trim();const o=s[0];s=s.replace(/^(['"`])([\s\S]*)\1$/mg,"$2"),o==='"'&&(s=s.replace(/\\n/g,`
`),s=s.replace(/\\r/g,"\r")),e[i]=s}return e}function RR(t){const e=Ry(t),n=fe.configDotenv({path:e});if(!n.parsed){const o=new Error(`MISSING_DATA: Cannot parse ${e} for an unknown reason`);throw o.code="MISSING_DATA",o}const r=Ny(t).split(","),i=r.length;let s;for(let o=0;o<i;o++)try{const l=r[o].trim(),a=OR(n,l);s=fe.decrypt(a.ciphertext,a.key);break}catch(l){if(o+1>=i)throw l}return fe.parse(s)}function PR(t){console.log(`[dotenv@${fh}][INFO] ${t}`)}function xR(t){console.log(`[dotenv@${fh}][WARN] ${t}`)}function Tl(t){console.log(`[dotenv@${fh}][DEBUG] ${t}`)}function Ny(t){return t&&t.DOTENV_KEY&&t.DOTENV_KEY.length>0?t.DOTENV_KEY:Wi.DOTENV_KEY&&Wi.DOTENV_KEY.length>0?Wi.DOTENV_KEY:""}function OR(t,e){let n;try{n=new URL(e)}catch(l){if(l.code==="ERR_INVALID_URL"){const a=new Error("INVALID_DOTENV_KEY: Wrong format. Must be in valid uri format like dotenv://:key_1234@dotenvx.com/vault/.env.vault?environment=development");throw a.code="INVALID_DOTENV_KEY",a}throw l}const r=n.password;if(!r){const l=new Error("INVALID_DOTENV_KEY: Missing key part");throw l.code="INVALID_DOTENV_KEY",l}const i=n.searchParams.get("environment");if(!i){const l=new Error("INVALID_DOTENV_KEY: Missing environment part");throw l.code="INVALID_DOTENV_KEY",l}const s=`DOTENV_VAULT_${i.toUpperCase()}`,o=t.parsed[s];if(!o){const l=new Error(`NOT_FOUND_DOTENV_ENVIRONMENT: Cannot locate environment ${s} in your .env.vault file.`);throw l.code="NOT_FOUND_DOTENV_ENVIRONMENT",l}return{ciphertext:o,key:r}}function Ry(t){let e=null;if(t&&t.path&&t.path.length>0)if(Array.isArray(t.path))for(const n of t.path)Ec.existsSync(n)&&(e=n.endsWith(".vault")?n:`${n}.vault`);else e=t.path.endsWith(".vault")?t.path:`${t.path}.vault`;else e=hh.resolve(process.cwd(),".env.vault");return Ec.existsSync(e)?e:null}function zp(t){return t[0]==="~"?hh.join(CR.homedir(),t.slice(1)):t}function AR(t){PR("Loading env from encrypted .env.vault");const e=fe._parseVault(t);let n=Wi;return t&&t.processEnv!=null&&(n=t.processEnv),fe.populate(n,e,t),{parsed:e}}function DR(t){const e=hh.resolve(process.cwd(),".env");let n="utf8";const r=!!(t&&t.debug);t&&t.encoding?n=t.encoding:r&&Tl("No encoding is specified. UTF-8 is used by default");let i=[e];if(t&&t.path)if(!Array.isArray(t.path))i=[zp(t.path)];else{i=[];for(const a of t.path)i.push(zp(a))}let s;const o={};for(const a of i)try{const u=fe.parse(Ec.readFileSync(a,{encoding:n}));fe.populate(o,u,t)}catch(u){r&&Tl(`Failed to load ${a} ${u.message}`),s=u}let l=Wi;return t&&t.processEnv!=null&&(l=t.processEnv),fe.populate(l,o,t),s?{parsed:o,error:s}:{parsed:o}}function LR(t){if(Ny(t).length===0)return fe.configDotenv(t);const e=Ry(t);return e?fe._configVault(t):(xR(`You set DOTENV_KEY but you are missing a .env.vault file at ${e}. Did you forget to build it?`),fe.configDotenv(t))}function MR(t,e){const n=Buffer.from(e.slice(-64),"hex");let r=Buffer.from(t,"base64");const i=r.subarray(0,12),s=r.subarray(-16);r=r.subarray(12,-16);try{const o=IR.createDecipheriv("aes-256-gcm",n,i);return o.setAuthTag(s),`${o.update(r)}${o.final()}`}catch(o){const l=o instanceof RangeError,a=o.message==="Invalid key length",u=o.message==="Unsupported state or unable to authenticate data";if(l||a){const d=new Error("INVALID_DOTENV_KEY: It must be 64 characters long (or more)");throw d.code="INVALID_DOTENV_KEY",d}else if(u){const d=new Error("DECRYPTION_FAILED: Please check your DOTENV_KEY");throw d.code="DECRYPTION_FAILED",d}else throw o}}function bR(t,e,n={}){const r=!!(n&&n.debug),i=!!(n&&n.override);if(typeof e!="object"){const s=new Error("OBJECT_REQUIRED: Please check the processEnv argument being passed to populate");throw s.code="OBJECT_REQUIRED",s}for(const s of Object.keys(e))Object.prototype.hasOwnProperty.call(t,s)?(i===!0&&(t[s]=e[s]),r&&Tl(i===!0?`"${s}" is already defined and WAS overwritten`:`"${s}" is already defined and was NOT overwritten`)):t[s]=e[s]}const fe={configDotenv:DR,_configVault:AR,_parseVault:RR,config:LR,decrypt:MR,parse:NR,populate:bR};Kt.exports.configDotenv=fe.configDotenv;Kt.exports._configVault=fe._configVault;Kt.exports._parseVault=fe._parseVault;Kt.exports.config=fe.config;Kt.exports.decrypt=fe.decrypt;Kt.exports.parse=fe.parse;Kt.exports.populate=fe.populate;Kt.exports=fe;var FR=Kt.exports;const UR=$p(FR);var bn={};UR.config();const jR={apiKey:bn.FIREBASE_API_KEY,authDomain:bn.FIREBASE_AUTH_DOMAIN,projectId:bn.FIREBASE_PROJECT_ID,storageBucket:bn.FIREBASE_STORAGE_BUCKET,messagingSenderId:bn.FIREBASE_MESSAGING_SENDER_ID,appId:bn.FIREBASE_APP_ID,databaseURL:bn.FIREBASE_DATABASE_URL},js=T_(jR),Py=Jl(js),pr=aa(js),BR=S.createContext();function zR({children:t}){const[e,n]=S.useState(null),[r,i]=S.useState(!0);S.useEffect(()=>{const o=bI(Py,l=>{n(l),i(!1)});return()=>o()},[]);const s={user:e,setUser:n};return m.jsx(BR.Provider,{value:s,children:!r&&t})}function ca({message:t,onClose:e}){return S.useEffect(()=>{const n=setTimeout(()=>{e()},5e3);return()=>clearTimeout(n)},[e]),m.jsx("div",{className:"popup-overlay show",onClick:e,children:m.jsxs("div",{className:"popup-content show",onClick:n=>n.stopPropagation(),children:[m.jsx("h2",{children:"Congrats!"}),m.jsx("p",{children:t}),m.jsx("button",{className:"btn-primary",onClick:e,children:"OK"})]})})}const co=aa(js);function tu(){const[t,e]=S.useState([]),[n,r]=S.useState([]),[i,s]=S.useState({userID:"",bookID:""}),[o,l]=S.useState(""),[a,u]=S.useState(!1),d=y=>{l(y),u(!0)},c=()=>{u(!1),l("")},h=()=>{const y=Ee(co,"users/");ws(y,w=>{const p=w.val();if(p){const f=Object.keys(p).map(g=>({...p[g],ID:g}));e(f)}else e([])})},_=()=>{const y=Ee(co,"books/");ws(y,w=>{const p=w.val();if(p){const f=Object.keys(p).map(g=>({...p[g],ID:g,available:p[g].available??!0}));r(f)}else r([])})};S.useEffect(()=>{h(),_()},[]);const v=y=>{y.preventDefault();const{userID:w,bookID:p}=i;if(!w||!p){d("Please select both a user and a book.");return}const f=Ee(co,`users/${w}/issuedBooks/${p}`),g=Ee(co,`books/${p}`);bt(f,{userID:w,bookID:p,issueDate:new Date().toISOString()}).then(()=>{const E=n.find(T=>T.ID===p);if(E)return bt(g,{...E,available:!1});throw new Error("Book not found for update.")}).then(()=>{d("Book issued successfully!"),s({userID:"",bookID:""}),_()}).catch(E=>{console.error("Error issuing book: ",E),d("Error issuing book.")})};return m.jsx("div",{className:"containerForm",children:m.jsxs("div",{className:"issue-book-section",children:[m.jsx("header",{className:"app-header",children:m.jsx("h1",{children:"Issue Book"})}),m.jsxs("div",{className:"card",children:[m.jsx("h2",{children:"Book Issue Panel"}),m.jsxs("form",{onSubmit:v,children:[m.jsxs("select",{value:i.userID,onChange:y=>s({...i,userID:y.target.value}),required:!0,children:[m.jsx("option",{value:"",children:"Select User"}),t.map(y=>m.jsx("option",{value:y.ID,children:y.name},y.ID))]}),m.jsxs("select",{value:i.bookID,onChange:y=>s({...i,bookID:y.target.value}),required:!0,children:[m.jsx("option",{value:"",children:"Select Book"}),n.filter(y=>y.available).map(y=>m.jsx("option",{value:y.ID,children:y.title},y.ID))]}),m.jsx("button",{type:"submit",className:"btn-primary",children:"Issue Book"})]})]}),a&&m.jsx(ca,{message:o,onClose:c})]})})}function Vp(){const[t,e]=S.useState(""),[n,r]=S.useState(""),i=Jl(),s=$l();async function o(l){l.preventDefault();try{await DI(i,t,n),s("/dashboard/")}catch(a){console.error("Error signing in: ",a)}}return m.jsx("div",{className:"containerForm",children:m.jsxs("div",{className:"signin-section",children:[m.jsx("header",{className:"app-header",children:m.jsx("h1",{children:"Sign In"})}),m.jsxs("div",{className:"card",children:[m.jsx("h2",{children:"Sign In to Your Account"}),m.jsxs("form",{onSubmit:o,children:[m.jsx("input",{type:"email",placeholder:"Email",value:t,onChange:l=>e(l.target.value),required:!0}),m.jsx("input",{type:"password",placeholder:"Password",value:n,onChange:l=>r(l.target.value),required:!0}),m.jsx("button",{type:"submit",className:"btn-primary",children:"Sign In"})]}),m.jsxs("div",{className:"signchange",children:["Don't have an account? ",m.jsx(zn,{to:"/signup",children:"Sign Up"})]}),m.jsxs("div",{className:"signchange",children:["Test Account",m.jsx("br",{})," sagarsoni@gmail.com",m.jsx("br",{})," pass: sagarsoni.gmail.com"]})]})]})})}const VR=()=>{const[t,e]=S.useState(""),[n,r]=S.useState(""),i=Jl(),s=async o=>{o.preventDefault();try{await AI(i,t,n),console.log("User signed up successfully")}catch(l){console.error("Error signing up: ",l)}};return m.jsx("div",{className:"containerForm",children:m.jsxs("div",{className:"signin-section",children:[m.jsx("header",{className:"app-header",children:m.jsx("h1",{children:"Sign Up"})}),m.jsxs("div",{className:"card",children:[m.jsx("h2",{children:"Create Your Account"}),m.jsxs("form",{onSubmit:s,children:[m.jsx("input",{onChange:o=>e(o.target.value),type:"email",placeholder:"Email",required:!0}),m.jsx("input",{onChange:o=>r(o.target.value),type:"password",placeholder:"Password",required:!0}),m.jsx("button",{className:"btn-primary",type:"submit",children:"Sign Up"})]}),m.jsxs("div",{className:"signchange",children:["Already have an account? ",m.jsx(zn,{to:"/signin",children:"Sign In"})]})]})]})})},ho=aa(js);function WR(){const[t,e]=S.useState([]),[n,r]=S.useState(null),[i,s]=S.useState({ID:"",title:"",author:""}),[o,l]=S.useState({ID:"",title:"",author:""}),[a,u]=S.useState(null),[d,c]=S.useState(""),[h,_]=S.useState(!1),v=I=>{c(I),_(!0)},y=()=>{_(!1),c("")},w=I=>{if(I.preventDefault(),o.ID&&o.title&&o.author){const A=Ee(ho,`books/${o.ID}`);bt(A,{ID:o.ID,title:o.title,author:o.author}).then(()=>{l({ID:"",title:"",author:""}),E(),v("Book added successfully! 🎉")}).catch(b=>{console.error("Error adding data: ",b),v("Error adding book.")})}},p=()=>{i.ID&&i.title&&i.author?i.ID!==a?g(a).then(()=>{f(i.ID,i.title,i.author)}).catch(I=>{console.error("Error deleting old data: ",I),v("Error updating book.")}):f(i.ID,i.title,i.author):(console.error("Invalid data for update"),v("Invalid data for update."))},f=(I,A,b)=>{const X=Ee(ho,`books/${I}`);bt(X,{ID:I,title:A,author:b}).then(()=>{r(null),s({ID:"",title:"",author:""}),u(null),E(),v("Book updated successfully! 🎉")}).catch(pe=>{console.error("Error creating/updating data: ",pe),v("Error updating book.")})},g=I=>{const A=Ee(ho,`books/${I}`);return dh(A).then(()=>{E(),v("Book deleted successfully! 🎉")}).catch(b=>{console.error("Error deleting data: ",b),v("Error deleting book.")})},E=()=>{const I=Ee(ho,"books/");ws(I,A=>{const b=A.val();if(b){const X=Object.keys(b).map(pe=>({...b[pe],key:pe}));e(X)}else e([])})};S.useEffect(()=>{E()},[]);const T=I=>{r(I.ID),s({...I}),u(I.ID)},x=()=>{r(null),s({ID:"",title:"",author:""}),u(null)},N=I=>{const{name:A,value:b}=I.target;s(X=>({...X,[A]:b}))},O=I=>{const{name:A,value:b}=I.target;l(X=>({...X,[A]:b}))};return m.jsxs("div",{className:"book-list-container",children:[m.jsx("header",{className:"app-header",children:m.jsx("h1",{children:"Book Management"})}),m.jsxs("main",{className:"main-content",children:[m.jsx("section",{className:"add-book-section",children:m.jsxs("div",{className:"card",children:[m.jsx("h2",{children:"Add New Book"}),m.jsx("form",{onSubmit:w,children:m.jsxs("div",{className:"form-fields",children:[m.jsx("input",{type:"text",placeholder:"ID",name:"ID",value:o.ID,onChange:O,required:!0,disabled:n!==null}),m.jsx("input",{type:"text",placeholder:"Title",name:"title",value:o.title,onChange:O,required:!0}),m.jsx("input",{type:"text",placeholder:"Author",name:"author",value:o.author,onChange:O,required:!0}),m.jsx("button",{type:"submit",className:"btn btn-primary",children:"Add Book"})]})})]})}),m.jsx("section",{className:"book-list-section",children:m.jsxs("div",{className:"card",children:[m.jsx("h2",{children:"Book List"}),m.jsxs("table",{className:"book-table",children:[m.jsx("thead",{children:m.jsxs("tr",{children:[m.jsx("th",{children:"ID"}),m.jsx("th",{children:"Title"}),m.jsx("th",{children:"Author"}),m.jsx("th",{children:"Actions"})]})}),m.jsx("tbody",{children:t.map(I=>m.jsxs("tr",{children:[m.jsx("td",{children:n===I.ID?m.jsx("input",{type:"text",name:"ID",value:i.ID,onChange:N}):I.ID}),m.jsx("td",{children:n===I.ID?m.jsx("input",{type:"text",name:"title",value:i.title,onChange:N}):I.title}),m.jsx("td",{children:n===I.ID?m.jsx("input",{type:"text",name:"author",value:i.author,onChange:N}):I.author}),m.jsx("td",{className:"booklistItemEdit",children:n===I.ID?m.jsxs(m.Fragment,{children:[m.jsx("button",{onClick:p,className:"btn btn-success",children:"Save"}),m.jsx("button",{onClick:x,className:"btn btn-secondary",children:"Cancel"})]}):m.jsxs(m.Fragment,{children:[m.jsx("button",{onClick:()=>T(I),className:"btn btn-primary",children:"Edit"}),m.jsx("button",{onClick:()=>g(I.ID),className:"btn btn-danger",children:"Delete"})]})})]},I.key))})]})]})})]}),h&&m.jsx(ca,{message:d,onClose:y})]})}const fo=aa(js);function $R(){const[t,e]=S.useState([]),[n,r]=S.useState([]),[i,s]=S.useState(""),[o,l]=S.useState(!1);S.useEffect(()=>{const c=()=>{const _=Ee(fo,"users/");ws(_,v=>{const y=v.val();if(y){const w=Object.keys(y).map(p=>({...y[p],ID:p}));e(w)}else e([])})},h=()=>{const _=Ee(fo,"books/");ws(_,v=>{const y=v.val();if(y){const w=Object.keys(y).map(p=>({...y[p],ID:p,available:y[p].available??!0}));r(w)}else r([])})};c(),h()},[]);const a=(c,h)=>{const _=Ee(fo,`users/${c}/issuedBooks/${h}`),v=Ee(fo,`books/${h}`);dh(_).then(()=>{const y=n.find(w=>w.ID===h);if(y)return bt(v,{...y,available:!0}).then(()=>{u("Book returned successfully! 🎉")}).catch(w=>{console.error("Error updating book availability: ",w),u("Error updating book availability.")});console.error("Book not found for update."),u("Book not found for update.")}).catch(y=>{console.error("Error returning book: ",y),u("Error returning book.")})},u=c=>{s(c),l(!0)},d=()=>{l(!1),s("")};return m.jsxs("div",{className:"issued-books-section",children:[m.jsx("header",{className:"app-header",children:m.jsx("h1",{children:"Issued Books"})}),m.jsxs("div",{className:"card",children:[m.jsx("h2",{children:"Issued Books Management"}),m.jsx("div",{className:"table-container",children:m.jsxs("table",{className:"data-table",children:[m.jsx("thead",{children:m.jsxs("tr",{children:[m.jsx("th",{children:"User"}),m.jsx("th",{children:"Book"}),m.jsx("th",{children:"Action"})]})}),m.jsx("tbody",{children:t.map(c=>c.issuedBooks&&Object.keys(c.issuedBooks).map(h=>{const _=n.find(v=>v.ID===h);return _?m.jsxs("tr",{children:[m.jsx("td",{children:c.name}),m.jsx("td",{children:_.title}),m.jsx("td",{children:m.jsx("button",{onClick:()=>a(c.ID,h),className:"btn-primary",children:"Return Book"})})]},h):null}))})]})})]}),o&&m.jsx(ca,{message:i,onClose:d})]})}function HR(){const[t,e]=S.useState([]),[n,r]=S.useState(null),[i,s]=S.useState({ID:"",name:"",age:""}),[o,l]=S.useState({ID:"",name:"",age:""}),[a,u]=S.useState(null),[d,c]=S.useState(""),[h,_]=S.useState(!1),v=I=>{c(I),_(!0)},y=()=>{_(!1),c("")},w=async I=>{if(I.preventDefault(),o.ID&&o.name&&o.age){const A=Ee(pr,`users/${o.ID}`);try{await bt(A,{ID:o.ID,name:o.name,age:o.age}),l({ID:"",name:"",age:""}),E(),v("User added successfully! 🎉")}catch(b){console.error("Error adding data: ",b),v("Error adding user.")}}},p=async()=>{if(i.ID&&i.name&&i.age)if(i.ID!==a)try{await g(a),await f(i.ID,i.name,i.age)}catch(I){console.error("Error updating data: ",I),v("Error updating user.")}else await f(i.ID,i.name,i.age);else console.error("Invalid data for update")},f=async(I,A,b)=>{const X=Ee(pr,`users/${I}`);try{await bt(X,{ID:I,name:A,age:b}),r(null),s({ID:"",name:"",age:""}),u(null),E(),v("User updated successfully! 🎉")}catch(pe){console.error("Error creating/updating data: ",pe),v("Error updating user.")}},g=async I=>{const A=Ee(pr,`users/${I}`),b=Ee(pr,`users/${I}/issuedBooks`);try{const pe=(await eu(b)).val();if(pe){const Bs=Object.keys(pe).map(async da=>{const dr=Ee(pr,`books/${da}`),R=(await eu(dr)).val();R&&await bt(dr,{...R,available:!0})});await Promise.all(Bs)}await dh(A),E(),v("User deleted successfully! 🎉")}catch(X){console.error("Error deleting user or updating book availability: ",X),v("Error deleting user.")}},E=async()=>{const I=Ee(pr,"users/");try{const b=(await eu(I)).val();if(b){const X=Object.keys(b).map(pe=>({...b[pe],key:pe}));e(X)}else e([])}catch(A){console.error("Error fetching data: ",A),v("Error fetching user data.")}};S.useEffect(()=>{E()},[]);const T=I=>{r(I.ID),s({...I}),u(I.ID)},x=()=>{r(null),s({ID:"",name:"",age:""}),u(null)},N=I=>{const{name:A,value:b}=I.target;s(X=>({...X,[A]:b}))},O=I=>{const{name:A,value:b}=I.target;l(X=>({...X,[A]:b}))};return m.jsxs("div",{className:"user-list-container",children:[m.jsx("header",{className:"app-header",children:m.jsx("h1",{children:"User Management"})}),m.jsxs("main",{className:"main-content",children:[m.jsx("section",{className:"add-user-section",children:m.jsxs("div",{className:"card",children:[m.jsx("h2",{children:"Add New User"}),m.jsx("form",{onSubmit:w,children:m.jsxs("div",{className:"form-fields",children:[m.jsx("input",{type:"text",placeholder:"ID",name:"ID",value:o.ID,onChange:O,required:!0,disabled:n!==null}),m.jsx("input",{type:"text",placeholder:"Name",name:"name",value:o.name,onChange:O,required:!0}),m.jsx("input",{type:"number",placeholder:"Age",name:"age",value:o.age,onChange:O,required:!0}),m.jsx("button",{type:"submit",className:"btn btn-primary",children:"Add User"})]})})]})}),m.jsx("section",{className:"user-list-section",children:m.jsxs("div",{className:"card",children:[m.jsx("h2",{children:"User List"}),m.jsxs("table",{className:"user-table",children:[m.jsx("thead",{children:m.jsxs("tr",{children:[m.jsx("th",{children:"ID"}),m.jsx("th",{children:"Name"}),m.jsx("th",{children:"Age"}),m.jsx("th",{children:"Actions"})]})}),m.jsx("tbody",{children:t.map(I=>m.jsxs("tr",{children:[m.jsx("td",{children:n===I.ID?m.jsx("input",{type:"text",name:"ID",value:i.ID,onChange:N}):I.ID}),m.jsx("td",{children:n===I.ID?m.jsx("input",{type:"text",name:"name",value:i.name,onChange:N}):I.name}),m.jsx("td",{children:n===I.ID?m.jsx("input",{type:"number",name:"age",value:i.age,onChange:N}):I.age}),m.jsx("td",{className:"userItemEdit",children:n===I.ID?m.jsxs(m.Fragment,{children:[m.jsx("button",{onClick:p,className:"btn btn-success",children:"Save"}),m.jsx("button",{onClick:x,className:"btn btn-secondary",children:"Cancel"})]}):m.jsxs(m.Fragment,{children:[m.jsx("button",{onClick:()=>T(I),className:"btn btn-primary",children:"Edit"}),m.jsx("button",{onClick:()=>g(I.ID),className:"btn btn-danger",children:"Delete"})]})})]},I.key))})]})]})})]}),h&&m.jsx(ca,{message:d,onClose:y})]})}const GR=()=>m.jsx("div",{children:m.jsx(f_,{})}),KR=()=>Py.currentUser?m.jsx(f_,{}):m.jsx(K0,{to:"/signin"}),YR=()=>{const t=Jl(),[e,n]=S.useState(!1),r=S.useRef(null),i=$l(),s=()=>{n(!e)},o=d=>{r.current&&!r.current.contains(d.target)&&!d.target.closest(".menu-toggle")&&n(!1)},l=()=>{n(!1)};S.useEffect(()=>(document.addEventListener("mousedown",o),()=>{document.removeEventListener("mousedown",o)}),[]);const a=()=>{u(),l()};async function u(){try{await FI(t),i("/signin")}catch(d){console.error("Error signing out: ",d)}}return m.jsx("nav",{className:"main-nav",children:m.jsxs("div",{className:"nav-container",children:[m.jsx("div",{className:"logo-section",children:m.jsx(zn,{to:"/",children:m.jsx("img",{src:"./my-logo.svg",alt:"Logo",className:"logo-img"})})}),m.jsx("button",{className:"menu-toggle",onClick:s,children:m.jsx("img",{className:"menu-icon",src:"./ham.png",alt:"Menu"})}),m.jsxs("ul",{ref:r,className:`nav-links ${e?"nav-links-open":""}`,children:[m.jsx("li",{children:m.jsx(zn,{to:"/dashboard/issued",className:"nav-item",onClick:l,children:"Issued Books"})}),m.jsx("li",{children:m.jsx(zn,{to:"/dashboard/users",className:"nav-item",onClick:l,children:"Users"})}),m.jsx("li",{children:m.jsx(zn,{to:"/dashboard/books",className:"nav-item",onClick:l,children:"Books"})}),m.jsxs("div",{className:"navButtons",children:[m.jsx("li",{children:m.jsx(zn,{to:"/",children:m.jsx("button",{className:"action-button",onClick:l,children:"Issue Book"})})}),m.jsx("li",{children:m.jsx("button",{className:"signout",onClick:a,children:"Sign Out"})})]})]})]})})},Wp=({children:t})=>m.jsxs(m.Fragment,{children:[m.jsx(YR,{}),t]});function qR(){return m.jsx(zR,{children:m.jsx(nS,{basename:"/library-app",children:m.jsxs(q0,{children:[m.jsxs(Je,{path:"/",element:m.jsx(Wp,{children:m.jsx(GR,{})}),children:[m.jsx(Je,{path:"",element:m.jsx(tu,{})}),m.jsx(Je,{path:"signin",element:m.jsx(Vp,{})}),m.jsx(Je,{path:"signup",element:m.jsx(VR,{})}),m.jsx(Je,{path:"issuebook",element:m.jsx(tu,{})})]}),m.jsxs(Je,{path:"/dashboard",element:m.jsx(Wp,{children:m.jsx(KR,{})}),children:[m.jsx(Je,{path:"",element:m.jsx(tu,{})}),m.jsx(Je,{path:"books",element:m.jsx(WR,{})}),m.jsx(Je,{path:"issued",element:m.jsx($R,{})}),m.jsx(Je,{path:"users",element:m.jsx(HR,{})})]}),m.jsx(Je,{path:"*",element:m.jsx(Vp,{})})]})})})}nu.createRoot(document.getElementById("root")).render(m.jsx(tm.StrictMode,{children:m.jsx(qR,{})}));
