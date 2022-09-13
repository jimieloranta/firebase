(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function HI(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ee={exports:{}},G={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _a=Symbol.for("react.element"),WI=Symbol.for("react.portal"),qI=Symbol.for("react.fragment"),KI=Symbol.for("react.strict_mode"),GI=Symbol.for("react.profiler"),QI=Symbol.for("react.provider"),YI=Symbol.for("react.context"),XI=Symbol.for("react.forward_ref"),JI=Symbol.for("react.suspense"),ZI=Symbol.for("react.memo"),ek=Symbol.for("react.lazy"),Xg=Symbol.iterator;function tk(t){return t===null||typeof t!="object"?null:(t=Xg&&t[Xg]||t["@@iterator"],typeof t=="function"?t:null)}var E0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C0=Object.assign,S0={};function ks(t,e,n){this.props=t,this.context=e,this.refs=S0,this.updater=n||E0}ks.prototype.isReactComponent={};ks.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ks.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function T0(){}T0.prototype=ks.prototype;function ip(t,e,n){this.props=t,this.context=e,this.refs=S0,this.updater=n||E0}var sp=ip.prototype=new T0;sp.constructor=ip;C0(sp,ks.prototype);sp.isPureReactComponent=!0;var Jg=Array.isArray,I0=Object.prototype.hasOwnProperty,op={current:null},k0={key:!0,ref:!0,__self:!0,__source:!0};function N0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)I0.call(e,r)&&!k0.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:_a,type:t,key:s,ref:o,props:i,_owner:op.current}}function nk(t,e){return{$$typeof:_a,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ap(t){return typeof t=="object"&&t!==null&&t.$$typeof===_a}function rk(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Zg=/\/+/g;function hh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?rk(""+t.key):e.toString(36)}function Al(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case _a:case WI:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+hh(o,0):r,Jg(i)?(n="",t!=null&&(n=t.replace(Zg,"$&/")+"/"),Al(i,e,n,"",function(u){return u})):i!=null&&(ap(i)&&(i=nk(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Zg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Jg(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+hh(s,a);o+=Al(s,e,n,l,i)}else if(l=tk(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+hh(s,a++),o+=Al(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function tl(t,e,n){if(t==null)return t;var r=[],i=0;return Al(t,r,"","",function(s){return e.call(n,s,i++)}),r}function ik(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var dt={current:null},xl={transition:null},sk={ReactCurrentDispatcher:dt,ReactCurrentBatchConfig:xl,ReactCurrentOwner:op};G.Children={map:tl,forEach:function(t,e,n){tl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return tl(t,function(){e++}),e},toArray:function(t){return tl(t,function(e){return e})||[]},only:function(t){if(!ap(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};G.Component=ks;G.Fragment=qI;G.Profiler=GI;G.PureComponent=ip;G.StrictMode=KI;G.Suspense=JI;G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sk;G.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=C0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=op.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)I0.call(e,l)&&!k0.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:_a,type:t.type,key:i,ref:s,props:r,_owner:o}};G.createContext=function(t){return t={$$typeof:YI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:QI,_context:t},t.Consumer=t};G.createElement=N0;G.createFactory=function(t){var e=N0.bind(null,t);return e.type=t,e};G.createRef=function(){return{current:null}};G.forwardRef=function(t){return{$$typeof:XI,render:t}};G.isValidElement=ap;G.lazy=function(t){return{$$typeof:ek,_payload:{_status:-1,_result:t},_init:ik}};G.memo=function(t,e){return{$$typeof:ZI,type:t,compare:e===void 0?null:e}};G.startTransition=function(t){var e=xl.transition;xl.transition={};try{t()}finally{xl.transition=e}};G.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};G.useCallback=function(t,e){return dt.current.useCallback(t,e)};G.useContext=function(t){return dt.current.useContext(t)};G.useDebugValue=function(){};G.useDeferredValue=function(t){return dt.current.useDeferredValue(t)};G.useEffect=function(t,e){return dt.current.useEffect(t,e)};G.useId=function(){return dt.current.useId()};G.useImperativeHandle=function(t,e,n){return dt.current.useImperativeHandle(t,e,n)};G.useInsertionEffect=function(t,e){return dt.current.useInsertionEffect(t,e)};G.useLayoutEffect=function(t,e){return dt.current.useLayoutEffect(t,e)};G.useMemo=function(t,e){return dt.current.useMemo(t,e)};G.useReducer=function(t,e,n){return dt.current.useReducer(t,e,n)};G.useRef=function(t){return dt.current.useRef(t)};G.useState=function(t){return dt.current.useState(t)};G.useSyncExternalStore=function(t,e,n){return dt.current.useSyncExternalStore(t,e,n)};G.useTransition=function(){return dt.current.useTransition()};G.version="18.2.0";(function(t){t.exports=G})(ee);const ok=HI(ee.exports);var md={},R0={exports:{}},Pt={},A0={exports:{}},x0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(x,V){var B=x.length;x.push(V);e:for(;0<B;){var _e=B-1>>>1,De=x[_e];if(0<i(De,V))x[_e]=V,x[B]=De,B=_e;else break e}}function n(x){return x.length===0?null:x[0]}function r(x){if(x.length===0)return null;var V=x[0],B=x.pop();if(B!==V){x[0]=B;e:for(var _e=0,De=x.length,Za=De>>>1;_e<Za;){var Sr=2*(_e+1)-1,ch=x[Sr],Tr=Sr+1,el=x[Tr];if(0>i(ch,B))Tr<De&&0>i(el,ch)?(x[_e]=el,x[Tr]=B,_e=Tr):(x[_e]=ch,x[Sr]=B,_e=Sr);else if(Tr<De&&0>i(el,B))x[_e]=el,x[Tr]=B,_e=Tr;else break e}}return V}function i(x,V){var B=x.sortIndex-V.sortIndex;return B!==0?B:x.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,f=!1,g=!1,v=!1,w=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(x){for(var V=n(u);V!==null;){if(V.callback===null)r(u);else if(V.startTime<=x)r(u),V.sortIndex=V.expirationTime,e(l,V);else break;V=n(u)}}function _(x){if(v=!1,y(x),!g)if(n(l)!==null)g=!0,lh(I);else{var V=n(u);V!==null&&uh(_,V.startTime-x)}}function I(x,V){g=!1,v&&(v=!1,m(b),b=-1),f=!0;var B=d;try{for(y(V),h=n(l);h!==null&&(!(h.expirationTime>V)||x&&!Ht());){var _e=h.callback;if(typeof _e=="function"){h.callback=null,d=h.priorityLevel;var De=_e(h.expirationTime<=V);V=t.unstable_now(),typeof De=="function"?h.callback=De:h===n(l)&&r(l),y(V)}else r(l);h=n(l)}if(h!==null)var Za=!0;else{var Sr=n(u);Sr!==null&&uh(_,Sr.startTime-V),Za=!1}return Za}finally{h=null,d=B,f=!1}}var k=!1,A=null,b=-1,oe=5,H=-1;function Ht(){return!(t.unstable_now()-H<oe)}function zs(){if(A!==null){var x=t.unstable_now();H=x;var V=!0;try{V=A(!0,x)}finally{V?js():(k=!1,A=null)}}else k=!1}var js;if(typeof p=="function")js=function(){p(zs)};else if(typeof MessageChannel<"u"){var Yg=new MessageChannel,jI=Yg.port2;Yg.port1.onmessage=zs,js=function(){jI.postMessage(null)}}else js=function(){w(zs,0)};function lh(x){A=x,k||(k=!0,js())}function uh(x,V){b=w(function(){x(t.unstable_now())},V)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(x){x.callback=null},t.unstable_continueExecution=function(){g||f||(g=!0,lh(I))},t.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):oe=0<x?Math.floor(1e3/x):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(x){switch(d){case 1:case 2:case 3:var V=3;break;default:V=d}var B=d;d=V;try{return x()}finally{d=B}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(x,V){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var B=d;d=x;try{return V()}finally{d=B}},t.unstable_scheduleCallback=function(x,V,B){var _e=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?_e+B:_e):B=_e,x){case 1:var De=-1;break;case 2:De=250;break;case 5:De=1073741823;break;case 4:De=1e4;break;default:De=5e3}return De=B+De,x={id:c++,callback:V,priorityLevel:x,startTime:B,expirationTime:De,sortIndex:-1},B>_e?(x.sortIndex=B,e(u,x),n(l)===null&&x===n(u)&&(v?(m(b),b=-1):v=!0,uh(_,B-_e))):(x.sortIndex=De,e(l,x),g||f||(g=!0,lh(I))),x},t.unstable_shouldYield=Ht,t.unstable_wrapCallback=function(x){var V=d;return function(){var B=d;d=V;try{return x.apply(this,arguments)}finally{d=B}}}})(x0);(function(t){t.exports=x0})(A0);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b0=ee.exports,At=A0.exports;function C(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var P0=new Set,xo={};function fi(t,e){rs(t,e),rs(t+"Capture",e)}function rs(t,e){for(xo[t]=e,t=0;t<e.length;t++)P0.add(e[t])}var kn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),gd=Object.prototype.hasOwnProperty,ak=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ey={},ty={};function lk(t){return gd.call(ty,t)?!0:gd.call(ey,t)?!1:ak.test(t)?ty[t]=!0:(ey[t]=!0,!1)}function uk(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function ck(t,e,n,r){if(e===null||typeof e>"u"||uk(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ft(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ge={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ge[t]=new ft(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ge[e]=new ft(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ge[t]=new ft(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ge[t]=new ft(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ge[t]=new ft(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ge[t]=new ft(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ge[t]=new ft(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ge[t]=new ft(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ge[t]=new ft(t,5,!1,t.toLowerCase(),null,!1,!1)});var lp=/[\-:]([a-z])/g;function up(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(lp,up);Ge[e]=new ft(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(lp,up);Ge[e]=new ft(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(lp,up);Ge[e]=new ft(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ge[t]=new ft(t,1,!1,t.toLowerCase(),null,!1,!1)});Ge.xlinkHref=new ft("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ge[t]=new ft(t,1,!1,t.toLowerCase(),null,!0,!0)});function cp(t,e,n,r){var i=Ge.hasOwnProperty(e)?Ge[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ck(e,n,i,r)&&(n=null),r||i===null?lk(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Ln=b0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,nl=Symbol.for("react.element"),Ii=Symbol.for("react.portal"),ki=Symbol.for("react.fragment"),hp=Symbol.for("react.strict_mode"),yd=Symbol.for("react.profiler"),D0=Symbol.for("react.provider"),O0=Symbol.for("react.context"),dp=Symbol.for("react.forward_ref"),vd=Symbol.for("react.suspense"),_d=Symbol.for("react.suspense_list"),fp=Symbol.for("react.memo"),zn=Symbol.for("react.lazy"),M0=Symbol.for("react.offscreen"),ny=Symbol.iterator;function Hs(t){return t===null||typeof t!="object"?null:(t=ny&&t[ny]||t["@@iterator"],typeof t=="function"?t:null)}var ge=Object.assign,dh;function ro(t){if(dh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);dh=e&&e[1]||""}return`
`+dh+t}var fh=!1;function ph(t,e){if(!t||fh)return"";fh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{fh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ro(t):""}function hk(t){switch(t.tag){case 5:return ro(t.type);case 16:return ro("Lazy");case 13:return ro("Suspense");case 19:return ro("SuspenseList");case 0:case 2:case 15:return t=ph(t.type,!1),t;case 11:return t=ph(t.type.render,!1),t;case 1:return t=ph(t.type,!0),t;default:return""}}function wd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ki:return"Fragment";case Ii:return"Portal";case yd:return"Profiler";case hp:return"StrictMode";case vd:return"Suspense";case _d:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case O0:return(t.displayName||"Context")+".Consumer";case D0:return(t._context.displayName||"Context")+".Provider";case dp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case fp:return e=t.displayName||null,e!==null?e:wd(t.type)||"Memo";case zn:e=t._payload,t=t._init;try{return wd(t(e))}catch{}}return null}function dk(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return wd(e);case 8:return e===hp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ur(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function L0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function fk(t){var e=L0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function rl(t){t._valueTracker||(t._valueTracker=fk(t))}function F0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=L0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Zl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ed(t,e){var n=e.checked;return ge({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function ry(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ur(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function $0(t,e){e=e.checked,e!=null&&cp(t,"checked",e,!1)}function Cd(t,e){$0(t,e);var n=ur(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Sd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Sd(t,e.type,ur(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function iy(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Sd(t,e,n){(e!=="number"||Zl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var io=Array.isArray;function zi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ur(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Td(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(C(91));return ge({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function sy(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(C(92));if(io(n)){if(1<n.length)throw Error(C(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ur(n)}}function U0(t,e){var n=ur(e.value),r=ur(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function oy(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function V0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Id(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?V0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var il,B0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(il=il||document.createElement("div"),il.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=il.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function bo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var co={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pk=["Webkit","ms","Moz","O"];Object.keys(co).forEach(function(t){pk.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),co[e]=co[t]})});function z0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||co.hasOwnProperty(t)&&co[t]?(""+e).trim():e+"px"}function j0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=z0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var mk=ge({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function kd(t,e){if(e){if(mk[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(C(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(C(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(C(61))}if(e.style!=null&&typeof e.style!="object")throw Error(C(62))}}function Nd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rd=null;function pp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ad=null,ji=null,Hi=null;function ay(t){if(t=Ca(t)){if(typeof Ad!="function")throw Error(C(280));var e=t.stateNode;e&&(e=fc(e),Ad(t.stateNode,t.type,e))}}function H0(t){ji?Hi?Hi.push(t):Hi=[t]:ji=t}function W0(){if(ji){var t=ji,e=Hi;if(Hi=ji=null,ay(t),e)for(t=0;t<e.length;t++)ay(e[t])}}function q0(t,e){return t(e)}function K0(){}var mh=!1;function G0(t,e,n){if(mh)return t(e,n);mh=!0;try{return q0(t,e,n)}finally{mh=!1,(ji!==null||Hi!==null)&&(K0(),W0())}}function Po(t,e){var n=t.stateNode;if(n===null)return null;var r=fc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(C(231,e,typeof n));return n}var xd=!1;if(kn)try{var Ws={};Object.defineProperty(Ws,"passive",{get:function(){xd=!0}}),window.addEventListener("test",Ws,Ws),window.removeEventListener("test",Ws,Ws)}catch{xd=!1}function gk(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var ho=!1,eu=null,tu=!1,bd=null,yk={onError:function(t){ho=!0,eu=t}};function vk(t,e,n,r,i,s,o,a,l){ho=!1,eu=null,gk.apply(yk,arguments)}function _k(t,e,n,r,i,s,o,a,l){if(vk.apply(this,arguments),ho){if(ho){var u=eu;ho=!1,eu=null}else throw Error(C(198));tu||(tu=!0,bd=u)}}function pi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Q0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ly(t){if(pi(t)!==t)throw Error(C(188))}function wk(t){var e=t.alternate;if(!e){if(e=pi(t),e===null)throw Error(C(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return ly(i),t;if(s===r)return ly(i),e;s=s.sibling}throw Error(C(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?t:e}function Y0(t){return t=wk(t),t!==null?X0(t):null}function X0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=X0(t);if(e!==null)return e;t=t.sibling}return null}var J0=At.unstable_scheduleCallback,uy=At.unstable_cancelCallback,Ek=At.unstable_shouldYield,Ck=At.unstable_requestPaint,we=At.unstable_now,Sk=At.unstable_getCurrentPriorityLevel,mp=At.unstable_ImmediatePriority,Z0=At.unstable_UserBlockingPriority,nu=At.unstable_NormalPriority,Tk=At.unstable_LowPriority,ew=At.unstable_IdlePriority,uc=null,an=null;function Ik(t){if(an&&typeof an.onCommitFiberRoot=="function")try{an.onCommitFiberRoot(uc,t,void 0,(t.current.flags&128)===128)}catch{}}var Zt=Math.clz32?Math.clz32:Rk,kk=Math.log,Nk=Math.LN2;function Rk(t){return t>>>=0,t===0?32:31-(kk(t)/Nk|0)|0}var sl=64,ol=4194304;function so(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ru(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=so(a):(s&=o,s!==0&&(r=so(s)))}else o=n&~i,o!==0?r=so(o):s!==0&&(r=so(s));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Zt(e),i=1<<n,r|=t[n],e&=~i;return r}function Ak(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xk(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Zt(s),a=1<<o,l=i[o];l===-1?((a&n)===0||(a&r)!==0)&&(i[o]=Ak(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Pd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function tw(){var t=sl;return sl<<=1,(sl&4194240)===0&&(sl=64),t}function gh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function wa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Zt(e),t[e]=n}function bk(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Zt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function gp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Zt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var te=0;function nw(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var rw,yp,iw,sw,ow,Dd=!1,al=[],Jn=null,Zn=null,er=null,Do=new Map,Oo=new Map,Hn=[],Pk="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function cy(t,e){switch(t){case"focusin":case"focusout":Jn=null;break;case"dragenter":case"dragleave":Zn=null;break;case"mouseover":case"mouseout":er=null;break;case"pointerover":case"pointerout":Do.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oo.delete(e.pointerId)}}function qs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ca(e),e!==null&&yp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Dk(t,e,n,r,i){switch(e){case"focusin":return Jn=qs(Jn,t,e,n,r,i),!0;case"dragenter":return Zn=qs(Zn,t,e,n,r,i),!0;case"mouseover":return er=qs(er,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Do.set(s,qs(Do.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Oo.set(s,qs(Oo.get(s)||null,t,e,n,r,i)),!0}return!1}function aw(t){var e=Pr(t.target);if(e!==null){var n=pi(e);if(n!==null){if(e=n.tag,e===13){if(e=Q0(n),e!==null){t.blockedOn=e,ow(t.priority,function(){iw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function bl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Od(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Rd=r,n.target.dispatchEvent(r),Rd=null}else return e=Ca(n),e!==null&&yp(e),t.blockedOn=n,!1;e.shift()}return!0}function hy(t,e,n){bl(t)&&n.delete(e)}function Ok(){Dd=!1,Jn!==null&&bl(Jn)&&(Jn=null),Zn!==null&&bl(Zn)&&(Zn=null),er!==null&&bl(er)&&(er=null),Do.forEach(hy),Oo.forEach(hy)}function Ks(t,e){t.blockedOn===e&&(t.blockedOn=null,Dd||(Dd=!0,At.unstable_scheduleCallback(At.unstable_NormalPriority,Ok)))}function Mo(t){function e(i){return Ks(i,t)}if(0<al.length){Ks(al[0],t);for(var n=1;n<al.length;n++){var r=al[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Jn!==null&&Ks(Jn,t),Zn!==null&&Ks(Zn,t),er!==null&&Ks(er,t),Do.forEach(e),Oo.forEach(e),n=0;n<Hn.length;n++)r=Hn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Hn.length&&(n=Hn[0],n.blockedOn===null);)aw(n),n.blockedOn===null&&Hn.shift()}var Wi=Ln.ReactCurrentBatchConfig,iu=!0;function Mk(t,e,n,r){var i=te,s=Wi.transition;Wi.transition=null;try{te=1,vp(t,e,n,r)}finally{te=i,Wi.transition=s}}function Lk(t,e,n,r){var i=te,s=Wi.transition;Wi.transition=null;try{te=4,vp(t,e,n,r)}finally{te=i,Wi.transition=s}}function vp(t,e,n,r){if(iu){var i=Od(t,e,n,r);if(i===null)kh(t,e,r,su,n),cy(t,r);else if(Dk(i,t,e,n,r))r.stopPropagation();else if(cy(t,r),e&4&&-1<Pk.indexOf(t)){for(;i!==null;){var s=Ca(i);if(s!==null&&rw(s),s=Od(t,e,n,r),s===null&&kh(t,e,r,su,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else kh(t,e,r,null,n)}}var su=null;function Od(t,e,n,r){if(su=null,t=pp(r),t=Pr(t),t!==null)if(e=pi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Q0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return su=t,null}function lw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Sk()){case mp:return 1;case Z0:return 4;case nu:case Tk:return 16;case ew:return 536870912;default:return 16}default:return 16}}var Yn=null,_p=null,Pl=null;function uw(){if(Pl)return Pl;var t,e=_p,n=e.length,r,i="value"in Yn?Yn.value:Yn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Pl=i.slice(t,1<r?1-r:void 0)}function Dl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ll(){return!0}function dy(){return!1}function Dt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ll:dy,this.isPropagationStopped=dy,this}return ge(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ll)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ll)},persist:function(){},isPersistent:ll}),e}var Ns={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wp=Dt(Ns),Ea=ge({},Ns,{view:0,detail:0}),Fk=Dt(Ea),yh,vh,Gs,cc=ge({},Ea,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ep,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Gs&&(Gs&&t.type==="mousemove"?(yh=t.screenX-Gs.screenX,vh=t.screenY-Gs.screenY):vh=yh=0,Gs=t),yh)},movementY:function(t){return"movementY"in t?t.movementY:vh}}),fy=Dt(cc),$k=ge({},cc,{dataTransfer:0}),Uk=Dt($k),Vk=ge({},Ea,{relatedTarget:0}),_h=Dt(Vk),Bk=ge({},Ns,{animationName:0,elapsedTime:0,pseudoElement:0}),zk=Dt(Bk),jk=ge({},Ns,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Hk=Dt(jk),Wk=ge({},Ns,{data:0}),py=Dt(Wk),qk={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Kk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qk(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Gk[t])?!!e[t]:!1}function Ep(){return Qk}var Yk=ge({},Ea,{key:function(t){if(t.key){var e=qk[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Dl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Kk[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ep,charCode:function(t){return t.type==="keypress"?Dl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Dl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Xk=Dt(Yk),Jk=ge({},cc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),my=Dt(Jk),Zk=ge({},Ea,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ep}),eN=Dt(Zk),tN=ge({},Ns,{propertyName:0,elapsedTime:0,pseudoElement:0}),nN=Dt(tN),rN=ge({},cc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),iN=Dt(rN),sN=[9,13,27,32],Cp=kn&&"CompositionEvent"in window,fo=null;kn&&"documentMode"in document&&(fo=document.documentMode);var oN=kn&&"TextEvent"in window&&!fo,cw=kn&&(!Cp||fo&&8<fo&&11>=fo),gy=String.fromCharCode(32),yy=!1;function hw(t,e){switch(t){case"keyup":return sN.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ni=!1;function aN(t,e){switch(t){case"compositionend":return dw(e);case"keypress":return e.which!==32?null:(yy=!0,gy);case"textInput":return t=e.data,t===gy&&yy?null:t;default:return null}}function lN(t,e){if(Ni)return t==="compositionend"||!Cp&&hw(t,e)?(t=uw(),Pl=_p=Yn=null,Ni=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return cw&&e.locale!=="ko"?null:e.data;default:return null}}var uN={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!uN[t.type]:e==="textarea"}function fw(t,e,n,r){H0(r),e=ou(e,"onChange"),0<e.length&&(n=new wp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var po=null,Lo=null;function cN(t){Tw(t,0)}function hc(t){var e=xi(t);if(F0(e))return t}function hN(t,e){if(t==="change")return e}var pw=!1;if(kn){var wh;if(kn){var Eh="oninput"in document;if(!Eh){var _y=document.createElement("div");_y.setAttribute("oninput","return;"),Eh=typeof _y.oninput=="function"}wh=Eh}else wh=!1;pw=wh&&(!document.documentMode||9<document.documentMode)}function wy(){po&&(po.detachEvent("onpropertychange",mw),Lo=po=null)}function mw(t){if(t.propertyName==="value"&&hc(Lo)){var e=[];fw(e,Lo,t,pp(t)),G0(cN,e)}}function dN(t,e,n){t==="focusin"?(wy(),po=e,Lo=n,po.attachEvent("onpropertychange",mw)):t==="focusout"&&wy()}function fN(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return hc(Lo)}function pN(t,e){if(t==="click")return hc(e)}function mN(t,e){if(t==="input"||t==="change")return hc(e)}function gN(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var nn=typeof Object.is=="function"?Object.is:gN;function Fo(t,e){if(nn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!gd.call(e,i)||!nn(t[i],e[i]))return!1}return!0}function Ey(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Cy(t,e){var n=Ey(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ey(n)}}function gw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?gw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function yw(){for(var t=window,e=Zl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Zl(t.document)}return e}function Sp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function yN(t){var e=yw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&gw(n.ownerDocument.documentElement,n)){if(r!==null&&Sp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Cy(n,s);var o=Cy(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var vN=kn&&"documentMode"in document&&11>=document.documentMode,Ri=null,Md=null,mo=null,Ld=!1;function Sy(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ld||Ri==null||Ri!==Zl(r)||(r=Ri,"selectionStart"in r&&Sp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),mo&&Fo(mo,r)||(mo=r,r=ou(Md,"onSelect"),0<r.length&&(e=new wp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ri)))}function ul(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ai={animationend:ul("Animation","AnimationEnd"),animationiteration:ul("Animation","AnimationIteration"),animationstart:ul("Animation","AnimationStart"),transitionend:ul("Transition","TransitionEnd")},Ch={},vw={};kn&&(vw=document.createElement("div").style,"AnimationEvent"in window||(delete Ai.animationend.animation,delete Ai.animationiteration.animation,delete Ai.animationstart.animation),"TransitionEvent"in window||delete Ai.transitionend.transition);function dc(t){if(Ch[t])return Ch[t];if(!Ai[t])return t;var e=Ai[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in vw)return Ch[t]=e[n];return t}var _w=dc("animationend"),ww=dc("animationiteration"),Ew=dc("animationstart"),Cw=dc("transitionend"),Sw=new Map,Ty="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yr(t,e){Sw.set(t,e),fi(e,[t])}for(var Sh=0;Sh<Ty.length;Sh++){var Th=Ty[Sh],_N=Th.toLowerCase(),wN=Th[0].toUpperCase()+Th.slice(1);yr(_N,"on"+wN)}yr(_w,"onAnimationEnd");yr(ww,"onAnimationIteration");yr(Ew,"onAnimationStart");yr("dblclick","onDoubleClick");yr("focusin","onFocus");yr("focusout","onBlur");yr(Cw,"onTransitionEnd");rs("onMouseEnter",["mouseout","mouseover"]);rs("onMouseLeave",["mouseout","mouseover"]);rs("onPointerEnter",["pointerout","pointerover"]);rs("onPointerLeave",["pointerout","pointerover"]);fi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fi("onBeforeInput",["compositionend","keypress","textInput","paste"]);fi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),EN=new Set("cancel close invalid load scroll toggle".split(" ").concat(oo));function Iy(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,_k(r,e,void 0,t),t.currentTarget=null}function Tw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Iy(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Iy(i,a,u),s=l}}}if(tu)throw t=bd,tu=!1,bd=null,t}function ae(t,e){var n=e[Bd];n===void 0&&(n=e[Bd]=new Set);var r=t+"__bubble";n.has(r)||(Iw(e,t,2,!1),n.add(r))}function Ih(t,e,n){var r=0;e&&(r|=4),Iw(n,t,r,e)}var cl="_reactListening"+Math.random().toString(36).slice(2);function $o(t){if(!t[cl]){t[cl]=!0,P0.forEach(function(n){n!=="selectionchange"&&(EN.has(n)||Ih(n,!1,t),Ih(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[cl]||(e[cl]=!0,Ih("selectionchange",!1,e))}}function Iw(t,e,n,r){switch(lw(e)){case 1:var i=Mk;break;case 4:i=Lk;break;default:i=vp}n=i.bind(null,e,n,t),i=void 0,!xd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function kh(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Pr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}G0(function(){var u=s,c=pp(n),h=[];e:{var d=Sw.get(t);if(d!==void 0){var f=wp,g=t;switch(t){case"keypress":if(Dl(n)===0)break e;case"keydown":case"keyup":f=Xk;break;case"focusin":g="focus",f=_h;break;case"focusout":g="blur",f=_h;break;case"beforeblur":case"afterblur":f=_h;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=fy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=Uk;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=eN;break;case _w:case ww:case Ew:f=zk;break;case Cw:f=nN;break;case"scroll":f=Fk;break;case"wheel":f=iN;break;case"copy":case"cut":case"paste":f=Hk;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=my}var v=(e&4)!==0,w=!v&&t==="scroll",m=v?d!==null?d+"Capture":null:d;v=[];for(var p=u,y;p!==null;){y=p;var _=y.stateNode;if(y.tag===5&&_!==null&&(y=_,m!==null&&(_=Po(p,m),_!=null&&v.push(Uo(p,_,y)))),w)break;p=p.return}0<v.length&&(d=new f(d,g,null,n,c),h.push({event:d,listeners:v}))}}if((e&7)===0){e:{if(d=t==="mouseover"||t==="pointerover",f=t==="mouseout"||t==="pointerout",d&&n!==Rd&&(g=n.relatedTarget||n.fromElement)&&(Pr(g)||g[Nn]))break e;if((f||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,f?(g=n.relatedTarget||n.toElement,f=u,g=g?Pr(g):null,g!==null&&(w=pi(g),g!==w||g.tag!==5&&g.tag!==6)&&(g=null)):(f=null,g=u),f!==g)){if(v=fy,_="onMouseLeave",m="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(v=my,_="onPointerLeave",m="onPointerEnter",p="pointer"),w=f==null?d:xi(f),y=g==null?d:xi(g),d=new v(_,p+"leave",f,n,c),d.target=w,d.relatedTarget=y,_=null,Pr(c)===u&&(v=new v(m,p+"enter",g,n,c),v.target=y,v.relatedTarget=w,_=v),w=_,f&&g)t:{for(v=f,m=g,p=0,y=v;y;y=Ci(y))p++;for(y=0,_=m;_;_=Ci(_))y++;for(;0<p-y;)v=Ci(v),p--;for(;0<y-p;)m=Ci(m),y--;for(;p--;){if(v===m||m!==null&&v===m.alternate)break t;v=Ci(v),m=Ci(m)}v=null}else v=null;f!==null&&ky(h,d,f,v,!1),g!==null&&w!==null&&ky(h,w,g,v,!0)}}e:{if(d=u?xi(u):window,f=d.nodeName&&d.nodeName.toLowerCase(),f==="select"||f==="input"&&d.type==="file")var I=hN;else if(vy(d))if(pw)I=mN;else{I=fN;var k=dN}else(f=d.nodeName)&&f.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(I=pN);if(I&&(I=I(t,u))){fw(h,I,n,c);break e}k&&k(t,d,u),t==="focusout"&&(k=d._wrapperState)&&k.controlled&&d.type==="number"&&Sd(d,"number",d.value)}switch(k=u?xi(u):window,t){case"focusin":(vy(k)||k.contentEditable==="true")&&(Ri=k,Md=u,mo=null);break;case"focusout":mo=Md=Ri=null;break;case"mousedown":Ld=!0;break;case"contextmenu":case"mouseup":case"dragend":Ld=!1,Sy(h,n,c);break;case"selectionchange":if(vN)break;case"keydown":case"keyup":Sy(h,n,c)}var A;if(Cp)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Ni?hw(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(cw&&n.locale!=="ko"&&(Ni||b!=="onCompositionStart"?b==="onCompositionEnd"&&Ni&&(A=uw()):(Yn=c,_p="value"in Yn?Yn.value:Yn.textContent,Ni=!0)),k=ou(u,b),0<k.length&&(b=new py(b,t,null,n,c),h.push({event:b,listeners:k}),A?b.data=A:(A=dw(n),A!==null&&(b.data=A)))),(A=oN?aN(t,n):lN(t,n))&&(u=ou(u,"onBeforeInput"),0<u.length&&(c=new py("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=A))}Tw(h,e)})}function Uo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ou(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Po(t,n),s!=null&&r.unshift(Uo(t,s,i)),s=Po(t,e),s!=null&&r.push(Uo(t,s,i))),t=t.return}return r}function Ci(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ky(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Po(n,s),l!=null&&o.unshift(Uo(n,l,a))):i||(l=Po(n,s),l!=null&&o.push(Uo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var CN=/\r\n?/g,SN=/\u0000|\uFFFD/g;function Ny(t){return(typeof t=="string"?t:""+t).replace(CN,`
`).replace(SN,"")}function hl(t,e,n){if(e=Ny(e),Ny(t)!==e&&n)throw Error(C(425))}function au(){}var Fd=null,$d=null;function Ud(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Vd=typeof setTimeout=="function"?setTimeout:void 0,TN=typeof clearTimeout=="function"?clearTimeout:void 0,Ry=typeof Promise=="function"?Promise:void 0,IN=typeof queueMicrotask=="function"?queueMicrotask:typeof Ry<"u"?function(t){return Ry.resolve(null).then(t).catch(kN)}:Vd;function kN(t){setTimeout(function(){throw t})}function Nh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Mo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Mo(e)}function tr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ay(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Rs=Math.random().toString(36).slice(2),on="__reactFiber$"+Rs,Vo="__reactProps$"+Rs,Nn="__reactContainer$"+Rs,Bd="__reactEvents$"+Rs,NN="__reactListeners$"+Rs,RN="__reactHandles$"+Rs;function Pr(t){var e=t[on];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Nn]||n[on]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ay(t);t!==null;){if(n=t[on])return n;t=Ay(t)}return e}t=n,n=t.parentNode}return null}function Ca(t){return t=t[on]||t[Nn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function xi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(C(33))}function fc(t){return t[Vo]||null}var zd=[],bi=-1;function vr(t){return{current:t}}function ue(t){0>bi||(t.current=zd[bi],zd[bi]=null,bi--)}function ie(t,e){bi++,zd[bi]=t.current,t.current=e}var cr={},st=vr(cr),Et=vr(!1),Kr=cr;function is(t,e){var n=t.type.contextTypes;if(!n)return cr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ct(t){return t=t.childContextTypes,t!=null}function lu(){ue(Et),ue(st)}function xy(t,e,n){if(st.current!==cr)throw Error(C(168));ie(st,e),ie(Et,n)}function kw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(C(108,dk(t)||"Unknown",i));return ge({},n,r)}function uu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||cr,Kr=st.current,ie(st,t),ie(Et,Et.current),!0}function by(t,e,n){var r=t.stateNode;if(!r)throw Error(C(169));n?(t=kw(t,e,Kr),r.__reactInternalMemoizedMergedChildContext=t,ue(Et),ue(st),ie(st,t)):ue(Et),ie(Et,n)}var mn=null,pc=!1,Rh=!1;function Nw(t){mn===null?mn=[t]:mn.push(t)}function AN(t){pc=!0,Nw(t)}function _r(){if(!Rh&&mn!==null){Rh=!0;var t=0,e=te;try{var n=mn;for(te=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}mn=null,pc=!1}catch(i){throw mn!==null&&(mn=mn.slice(t+1)),J0(mp,_r),i}finally{te=e,Rh=!1}}return null}var Pi=[],Di=0,cu=null,hu=0,Ot=[],Mt=0,Gr=null,gn=1,yn="";function kr(t,e){Pi[Di++]=hu,Pi[Di++]=cu,cu=t,hu=e}function Rw(t,e,n){Ot[Mt++]=gn,Ot[Mt++]=yn,Ot[Mt++]=Gr,Gr=t;var r=gn;t=yn;var i=32-Zt(r)-1;r&=~(1<<i),n+=1;var s=32-Zt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,gn=1<<32-Zt(e)+i|n<<i|r,yn=s+t}else gn=1<<s|n<<i|r,yn=t}function Tp(t){t.return!==null&&(kr(t,1),Rw(t,1,0))}function Ip(t){for(;t===cu;)cu=Pi[--Di],Pi[Di]=null,hu=Pi[--Di],Pi[Di]=null;for(;t===Gr;)Gr=Ot[--Mt],Ot[Mt]=null,yn=Ot[--Mt],Ot[Mt]=null,gn=Ot[--Mt],Ot[Mt]=null}var Nt=null,kt=null,ce=!1,Gt=null;function Aw(t,e){var n=Ft(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Py(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Nt=t,kt=tr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Nt=t,kt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Gr!==null?{id:gn,overflow:yn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ft(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Nt=t,kt=null,!0):!1;default:return!1}}function jd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Hd(t){if(ce){var e=kt;if(e){var n=e;if(!Py(t,e)){if(jd(t))throw Error(C(418));e=tr(n.nextSibling);var r=Nt;e&&Py(t,e)?Aw(r,n):(t.flags=t.flags&-4097|2,ce=!1,Nt=t)}}else{if(jd(t))throw Error(C(418));t.flags=t.flags&-4097|2,ce=!1,Nt=t}}}function Dy(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Nt=t}function dl(t){if(t!==Nt)return!1;if(!ce)return Dy(t),ce=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ud(t.type,t.memoizedProps)),e&&(e=kt)){if(jd(t))throw xw(),Error(C(418));for(;e;)Aw(t,e),e=tr(e.nextSibling)}if(Dy(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(C(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){kt=tr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}kt=null}}else kt=Nt?tr(t.stateNode.nextSibling):null;return!0}function xw(){for(var t=kt;t;)t=tr(t.nextSibling)}function ss(){kt=Nt=null,ce=!1}function kp(t){Gt===null?Gt=[t]:Gt.push(t)}var xN=Ln.ReactCurrentBatchConfig;function qt(t,e){if(t&&t.defaultProps){e=ge({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var du=vr(null),fu=null,Oi=null,Np=null;function Rp(){Np=Oi=fu=null}function Ap(t){var e=du.current;ue(du),t._currentValue=e}function Wd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function qi(t,e){fu=t,Np=Oi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(yt=!0),t.firstContext=null)}function Vt(t){var e=t._currentValue;if(Np!==t)if(t={context:t,memoizedValue:e,next:null},Oi===null){if(fu===null)throw Error(C(308));Oi=t,fu.dependencies={lanes:0,firstContext:t}}else Oi=Oi.next=t;return e}var Dr=null;function xp(t){Dr===null?Dr=[t]:Dr.push(t)}function bw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,xp(e)):(n.next=i.next,i.next=n),e.interleaved=n,Rn(t,r)}function Rn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var jn=!1;function bp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Pw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Cn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function nr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(X&2)!==0){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Rn(t,n)}return i=r.interleaved,i===null?(e.next=e,xp(r)):(e.next=i.next,i.next=e),r.interleaved=e,Rn(t,n)}function Ol(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,gp(t,n)}}function Oy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function pu(t,e,n,r){var i=t.updateQueue;jn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,f=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:f,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,v=a;switch(d=e,f=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){h=g.call(f,h,d);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,d=typeof g=="function"?g.call(f,h,d):g,d==null)break e;h=ge({},h,d);break e;case 2:jn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else f={eventTime:f,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=f,l=h):c=c.next=f,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Yr|=o,t.lanes=o,t.memoizedState=h}}function My(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(C(191,i));i.call(r)}}}var Dw=new b0.Component().refs;function qd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ge({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var mc={isMounted:function(t){return(t=t._reactInternals)?pi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ct(),i=ir(t),s=Cn(r,i);s.payload=e,n!=null&&(s.callback=n),e=nr(t,s,i),e!==null&&(en(e,t,i,r),Ol(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ct(),i=ir(t),s=Cn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=nr(t,s,i),e!==null&&(en(e,t,i,r),Ol(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ct(),r=ir(t),i=Cn(n,r);i.tag=2,e!=null&&(i.callback=e),e=nr(t,i,r),e!==null&&(en(e,t,r,n),Ol(e,t,r))}};function Ly(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Fo(n,r)||!Fo(i,s):!0}function Ow(t,e,n){var r=!1,i=cr,s=e.contextType;return typeof s=="object"&&s!==null?s=Vt(s):(i=Ct(e)?Kr:st.current,r=e.contextTypes,s=(r=r!=null)?is(t,i):cr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=mc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Fy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&mc.enqueueReplaceState(e,e.state,null)}function Kd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Dw,bp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Vt(s):(s=Ct(e)?Kr:st.current,i.context=is(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(qd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&mc.enqueueReplaceState(i,i.state,null),pu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Qs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===Dw&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,t))}return t}function fl(t,e){throw t=Object.prototype.toString.call(e),Error(C(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function $y(t){var e=t._init;return e(t._payload)}function Mw(t){function e(m,p){if(t){var y=m.deletions;y===null?(m.deletions=[p],m.flags|=16):y.push(p)}}function n(m,p){if(!t)return null;for(;p!==null;)e(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=sr(m,p),m.index=0,m.sibling=null,m}function s(m,p,y){return m.index=y,t?(y=m.alternate,y!==null?(y=y.index,y<p?(m.flags|=2,p):y):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,p,y,_){return p===null||p.tag!==6?(p=Mh(y,m.mode,_),p.return=m,p):(p=i(p,y),p.return=m,p)}function l(m,p,y,_){var I=y.type;return I===ki?c(m,p,y.props.children,_,y.key):p!==null&&(p.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===zn&&$y(I)===p.type)?(_=i(p,y.props),_.ref=Qs(m,p,y),_.return=m,_):(_=Vl(y.type,y.key,y.props,null,m.mode,_),_.ref=Qs(m,p,y),_.return=m,_)}function u(m,p,y,_){return p===null||p.tag!==4||p.stateNode.containerInfo!==y.containerInfo||p.stateNode.implementation!==y.implementation?(p=Lh(y,m.mode,_),p.return=m,p):(p=i(p,y.children||[]),p.return=m,p)}function c(m,p,y,_,I){return p===null||p.tag!==7?(p=Br(y,m.mode,_,I),p.return=m,p):(p=i(p,y),p.return=m,p)}function h(m,p,y){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Mh(""+p,m.mode,y),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case nl:return y=Vl(p.type,p.key,p.props,null,m.mode,y),y.ref=Qs(m,null,p),y.return=m,y;case Ii:return p=Lh(p,m.mode,y),p.return=m,p;case zn:var _=p._init;return h(m,_(p._payload),y)}if(io(p)||Hs(p))return p=Br(p,m.mode,y,null),p.return=m,p;fl(m,p)}return null}function d(m,p,y,_){var I=p!==null?p.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return I!==null?null:a(m,p,""+y,_);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case nl:return y.key===I?l(m,p,y,_):null;case Ii:return y.key===I?u(m,p,y,_):null;case zn:return I=y._init,d(m,p,I(y._payload),_)}if(io(y)||Hs(y))return I!==null?null:c(m,p,y,_,null);fl(m,y)}return null}function f(m,p,y,_,I){if(typeof _=="string"&&_!==""||typeof _=="number")return m=m.get(y)||null,a(p,m,""+_,I);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case nl:return m=m.get(_.key===null?y:_.key)||null,l(p,m,_,I);case Ii:return m=m.get(_.key===null?y:_.key)||null,u(p,m,_,I);case zn:var k=_._init;return f(m,p,y,k(_._payload),I)}if(io(_)||Hs(_))return m=m.get(y)||null,c(p,m,_,I,null);fl(p,_)}return null}function g(m,p,y,_){for(var I=null,k=null,A=p,b=p=0,oe=null;A!==null&&b<y.length;b++){A.index>b?(oe=A,A=null):oe=A.sibling;var H=d(m,A,y[b],_);if(H===null){A===null&&(A=oe);break}t&&A&&H.alternate===null&&e(m,A),p=s(H,p,b),k===null?I=H:k.sibling=H,k=H,A=oe}if(b===y.length)return n(m,A),ce&&kr(m,b),I;if(A===null){for(;b<y.length;b++)A=h(m,y[b],_),A!==null&&(p=s(A,p,b),k===null?I=A:k.sibling=A,k=A);return ce&&kr(m,b),I}for(A=r(m,A);b<y.length;b++)oe=f(A,m,b,y[b],_),oe!==null&&(t&&oe.alternate!==null&&A.delete(oe.key===null?b:oe.key),p=s(oe,p,b),k===null?I=oe:k.sibling=oe,k=oe);return t&&A.forEach(function(Ht){return e(m,Ht)}),ce&&kr(m,b),I}function v(m,p,y,_){var I=Hs(y);if(typeof I!="function")throw Error(C(150));if(y=I.call(y),y==null)throw Error(C(151));for(var k=I=null,A=p,b=p=0,oe=null,H=y.next();A!==null&&!H.done;b++,H=y.next()){A.index>b?(oe=A,A=null):oe=A.sibling;var Ht=d(m,A,H.value,_);if(Ht===null){A===null&&(A=oe);break}t&&A&&Ht.alternate===null&&e(m,A),p=s(Ht,p,b),k===null?I=Ht:k.sibling=Ht,k=Ht,A=oe}if(H.done)return n(m,A),ce&&kr(m,b),I;if(A===null){for(;!H.done;b++,H=y.next())H=h(m,H.value,_),H!==null&&(p=s(H,p,b),k===null?I=H:k.sibling=H,k=H);return ce&&kr(m,b),I}for(A=r(m,A);!H.done;b++,H=y.next())H=f(A,m,b,H.value,_),H!==null&&(t&&H.alternate!==null&&A.delete(H.key===null?b:H.key),p=s(H,p,b),k===null?I=H:k.sibling=H,k=H);return t&&A.forEach(function(zs){return e(m,zs)}),ce&&kr(m,b),I}function w(m,p,y,_){if(typeof y=="object"&&y!==null&&y.type===ki&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case nl:e:{for(var I=y.key,k=p;k!==null;){if(k.key===I){if(I=y.type,I===ki){if(k.tag===7){n(m,k.sibling),p=i(k,y.props.children),p.return=m,m=p;break e}}else if(k.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===zn&&$y(I)===k.type){n(m,k.sibling),p=i(k,y.props),p.ref=Qs(m,k,y),p.return=m,m=p;break e}n(m,k);break}else e(m,k);k=k.sibling}y.type===ki?(p=Br(y.props.children,m.mode,_,y.key),p.return=m,m=p):(_=Vl(y.type,y.key,y.props,null,m.mode,_),_.ref=Qs(m,p,y),_.return=m,m=_)}return o(m);case Ii:e:{for(k=y.key;p!==null;){if(p.key===k)if(p.tag===4&&p.stateNode.containerInfo===y.containerInfo&&p.stateNode.implementation===y.implementation){n(m,p.sibling),p=i(p,y.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else e(m,p);p=p.sibling}p=Lh(y,m.mode,_),p.return=m,m=p}return o(m);case zn:return k=y._init,w(m,p,k(y._payload),_)}if(io(y))return g(m,p,y,_);if(Hs(y))return v(m,p,y,_);fl(m,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,y),p.return=m,m=p):(n(m,p),p=Mh(y,m.mode,_),p.return=m,m=p),o(m)):n(m,p)}return w}var os=Mw(!0),Lw=Mw(!1),Sa={},ln=vr(Sa),Bo=vr(Sa),zo=vr(Sa);function Or(t){if(t===Sa)throw Error(C(174));return t}function Pp(t,e){switch(ie(zo,e),ie(Bo,t),ie(ln,Sa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Id(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Id(e,t)}ue(ln),ie(ln,e)}function as(){ue(ln),ue(Bo),ue(zo)}function Fw(t){Or(zo.current);var e=Or(ln.current),n=Id(e,t.type);e!==n&&(ie(Bo,t),ie(ln,n))}function Dp(t){Bo.current===t&&(ue(ln),ue(Bo))}var fe=vr(0);function mu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ah=[];function Op(){for(var t=0;t<Ah.length;t++)Ah[t]._workInProgressVersionPrimary=null;Ah.length=0}var Ml=Ln.ReactCurrentDispatcher,xh=Ln.ReactCurrentBatchConfig,Qr=0,me=null,ke=null,Le=null,gu=!1,go=!1,jo=0,bN=0;function Je(){throw Error(C(321))}function Mp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!nn(t[n],e[n]))return!1;return!0}function Lp(t,e,n,r,i,s){if(Qr=s,me=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ml.current=t===null||t.memoizedState===null?MN:LN,t=n(r,i),go){s=0;do{if(go=!1,jo=0,25<=s)throw Error(C(301));s+=1,Le=ke=null,e.updateQueue=null,Ml.current=FN,t=n(r,i)}while(go)}if(Ml.current=yu,e=ke!==null&&ke.next!==null,Qr=0,Le=ke=me=null,gu=!1,e)throw Error(C(300));return t}function Fp(){var t=jo!==0;return jo=0,t}function sn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?me.memoizedState=Le=t:Le=Le.next=t,Le}function Bt(){if(ke===null){var t=me.alternate;t=t!==null?t.memoizedState:null}else t=ke.next;var e=Le===null?me.memoizedState:Le.next;if(e!==null)Le=e,ke=t;else{if(t===null)throw Error(C(310));ke=t,t={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},Le===null?me.memoizedState=Le=t:Le=Le.next=t}return Le}function Ho(t,e){return typeof e=="function"?e(t):e}function bh(t){var e=Bt(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=ke,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Qr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,me.lanes|=c,Yr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,nn(r,e.memoizedState)||(yt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,me.lanes|=s,Yr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ph(t){var e=Bt(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);nn(s,e.memoizedState)||(yt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function $w(){}function Uw(t,e){var n=me,r=Bt(),i=e(),s=!nn(r.memoizedState,i);if(s&&(r.memoizedState=i,yt=!0),r=r.queue,$p(zw.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Le!==null&&Le.memoizedState.tag&1){if(n.flags|=2048,Wo(9,Bw.bind(null,n,r,i,e),void 0,null),Ue===null)throw Error(C(349));(Qr&30)!==0||Vw(n,e,i)}return i}function Vw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=me.updateQueue,e===null?(e={lastEffect:null,stores:null},me.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Bw(t,e,n,r){e.value=n,e.getSnapshot=r,jw(e)&&Hw(t)}function zw(t,e,n){return n(function(){jw(e)&&Hw(t)})}function jw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!nn(t,n)}catch{return!0}}function Hw(t){var e=Rn(t,1);e!==null&&en(e,t,1,-1)}function Uy(t){var e=sn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ho,lastRenderedState:t},e.queue=t,t=t.dispatch=ON.bind(null,me,t),[e.memoizedState,t]}function Wo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=me.updateQueue,e===null?(e={lastEffect:null,stores:null},me.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Ww(){return Bt().memoizedState}function Ll(t,e,n,r){var i=sn();me.flags|=t,i.memoizedState=Wo(1|e,n,void 0,r===void 0?null:r)}function gc(t,e,n,r){var i=Bt();r=r===void 0?null:r;var s=void 0;if(ke!==null){var o=ke.memoizedState;if(s=o.destroy,r!==null&&Mp(r,o.deps)){i.memoizedState=Wo(e,n,s,r);return}}me.flags|=t,i.memoizedState=Wo(1|e,n,s,r)}function Vy(t,e){return Ll(8390656,8,t,e)}function $p(t,e){return gc(2048,8,t,e)}function qw(t,e){return gc(4,2,t,e)}function Kw(t,e){return gc(4,4,t,e)}function Gw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Qw(t,e,n){return n=n!=null?n.concat([t]):null,gc(4,4,Gw.bind(null,e,t),n)}function Up(){}function Yw(t,e){var n=Bt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Mp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Xw(t,e){var n=Bt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Mp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Jw(t,e,n){return(Qr&21)===0?(t.baseState&&(t.baseState=!1,yt=!0),t.memoizedState=n):(nn(n,e)||(n=tw(),me.lanes|=n,Yr|=n,t.baseState=!0),e)}function PN(t,e){var n=te;te=n!==0&&4>n?n:4,t(!0);var r=xh.transition;xh.transition={};try{t(!1),e()}finally{te=n,xh.transition=r}}function Zw(){return Bt().memoizedState}function DN(t,e,n){var r=ir(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},eE(t))tE(e,n);else if(n=bw(t,e,n,r),n!==null){var i=ct();en(n,t,r,i),nE(n,e,r)}}function ON(t,e,n){var r=ir(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(eE(t))tE(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,nn(a,o)){var l=e.interleaved;l===null?(i.next=i,xp(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=bw(t,e,i,r),n!==null&&(i=ct(),en(n,t,r,i),nE(n,e,r))}}function eE(t){var e=t.alternate;return t===me||e!==null&&e===me}function tE(t,e){go=gu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function nE(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,gp(t,n)}}var yu={readContext:Vt,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useInsertionEffect:Je,useLayoutEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useMutableSource:Je,useSyncExternalStore:Je,useId:Je,unstable_isNewReconciler:!1},MN={readContext:Vt,useCallback:function(t,e){return sn().memoizedState=[t,e===void 0?null:e],t},useContext:Vt,useEffect:Vy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ll(4194308,4,Gw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ll(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ll(4,2,t,e)},useMemo:function(t,e){var n=sn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=sn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=DN.bind(null,me,t),[r.memoizedState,t]},useRef:function(t){var e=sn();return t={current:t},e.memoizedState=t},useState:Uy,useDebugValue:Up,useDeferredValue:function(t){return sn().memoizedState=t},useTransition:function(){var t=Uy(!1),e=t[0];return t=PN.bind(null,t[1]),sn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=me,i=sn();if(ce){if(n===void 0)throw Error(C(407));n=n()}else{if(n=e(),Ue===null)throw Error(C(349));(Qr&30)!==0||Vw(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Vy(zw.bind(null,r,s,t),[t]),r.flags|=2048,Wo(9,Bw.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=sn(),e=Ue.identifierPrefix;if(ce){var n=yn,r=gn;n=(r&~(1<<32-Zt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=jo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=bN++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},LN={readContext:Vt,useCallback:Yw,useContext:Vt,useEffect:$p,useImperativeHandle:Qw,useInsertionEffect:qw,useLayoutEffect:Kw,useMemo:Xw,useReducer:bh,useRef:Ww,useState:function(){return bh(Ho)},useDebugValue:Up,useDeferredValue:function(t){var e=Bt();return Jw(e,ke.memoizedState,t)},useTransition:function(){var t=bh(Ho)[0],e=Bt().memoizedState;return[t,e]},useMutableSource:$w,useSyncExternalStore:Uw,useId:Zw,unstable_isNewReconciler:!1},FN={readContext:Vt,useCallback:Yw,useContext:Vt,useEffect:$p,useImperativeHandle:Qw,useInsertionEffect:qw,useLayoutEffect:Kw,useMemo:Xw,useReducer:Ph,useRef:Ww,useState:function(){return Ph(Ho)},useDebugValue:Up,useDeferredValue:function(t){var e=Bt();return ke===null?e.memoizedState=t:Jw(e,ke.memoizedState,t)},useTransition:function(){var t=Ph(Ho)[0],e=Bt().memoizedState;return[t,e]},useMutableSource:$w,useSyncExternalStore:Uw,useId:Zw,unstable_isNewReconciler:!1};function ls(t,e){try{var n="",r=e;do n+=hk(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Dh(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function Gd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var $N=typeof WeakMap=="function"?WeakMap:Map;function rE(t,e,n){n=Cn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){_u||(_u=!0,sf=r),Gd(t,e)},n}function iE(t,e,n){n=Cn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Gd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Gd(t,e),typeof r!="function"&&(rr===null?rr=new Set([this]):rr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function By(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new $N;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=JN.bind(null,t,e,n),e.then(t,t))}function zy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function jy(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Cn(-1,1),e.tag=2,nr(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var UN=Ln.ReactCurrentOwner,yt=!1;function ot(t,e,n,r){e.child=t===null?Lw(e,null,n,r):os(e,t.child,n,r)}function Hy(t,e,n,r,i){n=n.render;var s=e.ref;return qi(e,i),r=Lp(t,e,n,r,s,i),n=Fp(),t!==null&&!yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,An(t,e,i)):(ce&&n&&Tp(e),e.flags|=1,ot(t,e,r,i),e.child)}function Wy(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Kp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,sE(t,e,s,r,i)):(t=Vl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Fo,n(o,r)&&t.ref===e.ref)return An(t,e,i)}return e.flags|=1,t=sr(s,r),t.ref=e.ref,t.return=e,e.child=t}function sE(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Fo(s,r)&&t.ref===e.ref)if(yt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)(t.flags&131072)!==0&&(yt=!0);else return e.lanes=t.lanes,An(t,e,i)}return Qd(t,e,n,r,i)}function oE(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ie(Li,It),It|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ie(Li,It),It|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ie(Li,It),It|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ie(Li,It),It|=r;return ot(t,e,i,n),e.child}function aE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Qd(t,e,n,r,i){var s=Ct(n)?Kr:st.current;return s=is(e,s),qi(e,i),n=Lp(t,e,n,r,s,i),r=Fp(),t!==null&&!yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,An(t,e,i)):(ce&&r&&Tp(e),e.flags|=1,ot(t,e,n,i),e.child)}function qy(t,e,n,r,i){if(Ct(n)){var s=!0;uu(e)}else s=!1;if(qi(e,i),e.stateNode===null)Fl(t,e),Ow(e,n,r),Kd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Vt(u):(u=Ct(n)?Kr:st.current,u=is(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Fy(e,o,r,u),jn=!1;var d=e.memoizedState;o.state=d,pu(e,r,o,i),l=e.memoizedState,a!==r||d!==l||Et.current||jn?(typeof c=="function"&&(qd(e,n,c,r),l=e.memoizedState),(a=jn||Ly(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Pw(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:qt(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Vt(l):(l=Ct(n)?Kr:st.current,l=is(e,l));var f=n.getDerivedStateFromProps;(c=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Fy(e,o,r,l),jn=!1,d=e.memoizedState,o.state=d,pu(e,r,o,i);var g=e.memoizedState;a!==h||d!==g||Et.current||jn?(typeof f=="function"&&(qd(e,n,f,r),g=e.memoizedState),(u=jn||Ly(e,n,u,r,d,g,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=g),o.props=r,o.state=g,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Yd(t,e,n,r,s,i)}function Yd(t,e,n,r,i,s){aE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&by(e,n,!1),An(t,e,s);r=e.stateNode,UN.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=os(e,t.child,null,s),e.child=os(e,null,a,s)):ot(t,e,a,s),e.memoizedState=r.state,i&&by(e,n,!0),e.child}function lE(t){var e=t.stateNode;e.pendingContext?xy(t,e.pendingContext,e.pendingContext!==e.context):e.context&&xy(t,e.context,!1),Pp(t,e.containerInfo)}function Ky(t,e,n,r,i){return ss(),kp(i),e.flags|=256,ot(t,e,n,r),e.child}var Xd={dehydrated:null,treeContext:null,retryLane:0};function Jd(t){return{baseLanes:t,cachePool:null,transitions:null}}function uE(t,e,n){var r=e.pendingProps,i=fe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ie(fe,i&1),t===null)return Hd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=_c(o,r,0,null),t=Br(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Jd(n),e.memoizedState=Xd,t):Vp(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return VN(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return(o&1)===0&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=sr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=sr(a,s):(s=Br(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Jd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Xd,r}return s=t.child,t=s.sibling,r=sr(s,{mode:"visible",children:r.children}),(e.mode&1)===0&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Vp(t,e){return e=_c({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function pl(t,e,n,r){return r!==null&&kp(r),os(e,t.child,null,n),t=Vp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function VN(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Dh(Error(C(422))),pl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=_c({mode:"visible",children:r.children},i,0,null),s=Br(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,(e.mode&1)!==0&&os(e,t.child,null,o),e.child.memoizedState=Jd(o),e.memoizedState=Xd,s);if((e.mode&1)===0)return pl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(C(419)),r=Dh(s,r,void 0),pl(t,e,o,r)}if(a=(o&t.childLanes)!==0,yt||a){if(r=Ue,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Rn(t,i),en(r,t,i,-1))}return qp(),r=Dh(Error(C(421))),pl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=ZN.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,kt=tr(i.nextSibling),Nt=e,ce=!0,Gt=null,t!==null&&(Ot[Mt++]=gn,Ot[Mt++]=yn,Ot[Mt++]=Gr,gn=t.id,yn=t.overflow,Gr=e),e=Vp(e,r.children),e.flags|=4096,e)}function Gy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Wd(t.return,e,n)}function Oh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function cE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ot(t,e,r.children,n),r=fe.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Gy(t,n,e);else if(t.tag===19)Gy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ie(fe,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&mu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Oh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&mu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Oh(e,!0,n,null,s);break;case"together":Oh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Fl(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function An(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Yr|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(C(153));if(e.child!==null){for(t=e.child,n=sr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=sr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function BN(t,e,n){switch(e.tag){case 3:lE(e),ss();break;case 5:Fw(e);break;case 1:Ct(e.type)&&uu(e);break;case 4:Pp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ie(du,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ie(fe,fe.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?uE(t,e,n):(ie(fe,fe.current&1),t=An(t,e,n),t!==null?t.sibling:null);ie(fe,fe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return cE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ie(fe,fe.current),r)break;return null;case 22:case 23:return e.lanes=0,oE(t,e,n)}return An(t,e,n)}var hE,Zd,dE,fE;hE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Zd=function(){};dE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Or(ln.current);var s=null;switch(n){case"input":i=Ed(t,i),r=Ed(t,r),s=[];break;case"select":i=ge({},i,{value:void 0}),r=ge({},r,{value:void 0}),s=[];break;case"textarea":i=Td(t,i),r=Td(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=au)}kd(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(xo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(xo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ae("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};fE=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ys(t,e){if(!ce)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ze(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function zN(t,e,n){var r=e.pendingProps;switch(Ip(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(e),null;case 1:return Ct(e.type)&&lu(),Ze(e),null;case 3:return r=e.stateNode,as(),ue(Et),ue(st),Op(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(dl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Gt!==null&&(lf(Gt),Gt=null))),Zd(t,e),Ze(e),null;case 5:Dp(e);var i=Or(zo.current);if(n=e.type,t!==null&&e.stateNode!=null)dE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(C(166));return Ze(e),null}if(t=Or(ln.current),dl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[on]=e,r[Vo]=s,t=(e.mode&1)!==0,n){case"dialog":ae("cancel",r),ae("close",r);break;case"iframe":case"object":case"embed":ae("load",r);break;case"video":case"audio":for(i=0;i<oo.length;i++)ae(oo[i],r);break;case"source":ae("error",r);break;case"img":case"image":case"link":ae("error",r),ae("load",r);break;case"details":ae("toggle",r);break;case"input":ry(r,s),ae("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ae("invalid",r);break;case"textarea":sy(r,s),ae("invalid",r)}kd(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&hl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&hl(r.textContent,a,t),i=["children",""+a]):xo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ae("scroll",r)}switch(n){case"input":rl(r),iy(r,s,!0);break;case"textarea":rl(r),oy(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=au)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=V0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[on]=e,t[Vo]=r,hE(t,e,!1,!1),e.stateNode=t;e:{switch(o=Nd(n,r),n){case"dialog":ae("cancel",t),ae("close",t),i=r;break;case"iframe":case"object":case"embed":ae("load",t),i=r;break;case"video":case"audio":for(i=0;i<oo.length;i++)ae(oo[i],t);i=r;break;case"source":ae("error",t),i=r;break;case"img":case"image":case"link":ae("error",t),ae("load",t),i=r;break;case"details":ae("toggle",t),i=r;break;case"input":ry(t,r),i=Ed(t,r),ae("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ge({},r,{value:void 0}),ae("invalid",t);break;case"textarea":sy(t,r),i=Td(t,r),ae("invalid",t);break;default:i=r}kd(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?j0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&B0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&bo(t,l):typeof l=="number"&&bo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(xo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ae("scroll",t):l!=null&&cp(t,s,l,o))}switch(n){case"input":rl(t),iy(t,r,!1);break;case"textarea":rl(t),oy(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ur(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?zi(t,!!r.multiple,s,!1):r.defaultValue!=null&&zi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=au)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ze(e),null;case 6:if(t&&e.stateNode!=null)fE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(C(166));if(n=Or(zo.current),Or(ln.current),dl(e)){if(r=e.stateNode,n=e.memoizedProps,r[on]=e,(s=r.nodeValue!==n)&&(t=Nt,t!==null))switch(t.tag){case 3:hl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&hl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[on]=e,e.stateNode=r}return Ze(e),null;case 13:if(ue(fe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ce&&kt!==null&&(e.mode&1)!==0&&(e.flags&128)===0)xw(),ss(),e.flags|=98560,s=!1;else if(s=dl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(C(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(C(317));s[on]=e}else ss(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Ze(e),s=!1}else Gt!==null&&(lf(Gt),Gt=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(fe.current&1)!==0?Re===0&&(Re=3):qp())),e.updateQueue!==null&&(e.flags|=4),Ze(e),null);case 4:return as(),Zd(t,e),t===null&&$o(e.stateNode.containerInfo),Ze(e),null;case 10:return Ap(e.type._context),Ze(e),null;case 17:return Ct(e.type)&&lu(),Ze(e),null;case 19:if(ue(fe),s=e.memoizedState,s===null)return Ze(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ys(s,!1);else{if(Re!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=mu(t),o!==null){for(e.flags|=128,Ys(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ie(fe,fe.current&1|2),e.child}t=t.sibling}s.tail!==null&&we()>us&&(e.flags|=128,r=!0,Ys(s,!1),e.lanes=4194304)}else{if(!r)if(t=mu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ys(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ce)return Ze(e),null}else 2*we()-s.renderingStartTime>us&&n!==1073741824&&(e.flags|=128,r=!0,Ys(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=we(),e.sibling=null,n=fe.current,ie(fe,r?n&1|2:n&1),e):(Ze(e),null);case 22:case 23:return Wp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(It&1073741824)!==0&&(Ze(e),e.subtreeFlags&6&&(e.flags|=8192)):Ze(e),null;case 24:return null;case 25:return null}throw Error(C(156,e.tag))}function jN(t,e){switch(Ip(e),e.tag){case 1:return Ct(e.type)&&lu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return as(),ue(Et),ue(st),Op(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return Dp(e),null;case 13:if(ue(fe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(C(340));ss()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ue(fe),null;case 4:return as(),null;case 10:return Ap(e.type._context),null;case 22:case 23:return Wp(),null;case 24:return null;default:return null}}var ml=!1,et=!1,HN=typeof WeakSet=="function"?WeakSet:Set,N=null;function Mi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ye(t,e,r)}else n.current=null}function ef(t,e,n){try{n()}catch(r){ye(t,e,r)}}var Qy=!1;function WN(t,e){if(Fd=iu,t=yw(),Sp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var f;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(f=h.firstChild)!==null;)d=h,h=f;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(f=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=f}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for($d={focusedElem:t,selectionRange:n},iu=!1,N=e;N!==null;)if(e=N,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,N=t;else for(;N!==null;){e=N;try{var g=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,w=g.memoizedState,m=e.stateNode,p=m.getSnapshotBeforeUpdate(e.elementType===e.type?v:qt(e.type,v),w);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(_){ye(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,N=t;break}N=e.return}return g=Qy,Qy=!1,g}function yo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&ef(e,n,s)}i=i.next}while(i!==r)}}function yc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function tf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function pE(t){var e=t.alternate;e!==null&&(t.alternate=null,pE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[on],delete e[Vo],delete e[Bd],delete e[NN],delete e[RN])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function mE(t){return t.tag===5||t.tag===3||t.tag===4}function Yy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||mE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function nf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=au));else if(r!==4&&(t=t.child,t!==null))for(nf(t,e,n),t=t.sibling;t!==null;)nf(t,e,n),t=t.sibling}function rf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(rf(t,e,n),t=t.sibling;t!==null;)rf(t,e,n),t=t.sibling}var ze=null,Kt=!1;function Vn(t,e,n){for(n=n.child;n!==null;)gE(t,e,n),n=n.sibling}function gE(t,e,n){if(an&&typeof an.onCommitFiberUnmount=="function")try{an.onCommitFiberUnmount(uc,n)}catch{}switch(n.tag){case 5:et||Mi(n,e);case 6:var r=ze,i=Kt;ze=null,Vn(t,e,n),ze=r,Kt=i,ze!==null&&(Kt?(t=ze,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ze.removeChild(n.stateNode));break;case 18:ze!==null&&(Kt?(t=ze,n=n.stateNode,t.nodeType===8?Nh(t.parentNode,n):t.nodeType===1&&Nh(t,n),Mo(t)):Nh(ze,n.stateNode));break;case 4:r=ze,i=Kt,ze=n.stateNode.containerInfo,Kt=!0,Vn(t,e,n),ze=r,Kt=i;break;case 0:case 11:case 14:case 15:if(!et&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&ef(n,e,o),i=i.next}while(i!==r)}Vn(t,e,n);break;case 1:if(!et&&(Mi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ye(n,e,a)}Vn(t,e,n);break;case 21:Vn(t,e,n);break;case 22:n.mode&1?(et=(r=et)||n.memoizedState!==null,Vn(t,e,n),et=r):Vn(t,e,n);break;default:Vn(t,e,n)}}function Xy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new HN),e.forEach(function(r){var i=eR.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Wt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:ze=a.stateNode,Kt=!1;break e;case 3:ze=a.stateNode.containerInfo,Kt=!0;break e;case 4:ze=a.stateNode.containerInfo,Kt=!0;break e}a=a.return}if(ze===null)throw Error(C(160));gE(s,o,i),ze=null,Kt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ye(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)yE(e,t),e=e.sibling}function yE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Wt(e,t),rn(t),r&4){try{yo(3,t,t.return),yc(3,t)}catch(v){ye(t,t.return,v)}try{yo(5,t,t.return)}catch(v){ye(t,t.return,v)}}break;case 1:Wt(e,t),rn(t),r&512&&n!==null&&Mi(n,n.return);break;case 5:if(Wt(e,t),rn(t),r&512&&n!==null&&Mi(n,n.return),t.flags&32){var i=t.stateNode;try{bo(i,"")}catch(v){ye(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&$0(i,s),Nd(a,o);var u=Nd(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?j0(i,h):c==="dangerouslySetInnerHTML"?B0(i,h):c==="children"?bo(i,h):cp(i,c,h,u)}switch(a){case"input":Cd(i,s);break;case"textarea":U0(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var f=s.value;f!=null?zi(i,!!s.multiple,f,!1):d!==!!s.multiple&&(s.defaultValue!=null?zi(i,!!s.multiple,s.defaultValue,!0):zi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Vo]=s}catch(v){ye(t,t.return,v)}}break;case 6:if(Wt(e,t),rn(t),r&4){if(t.stateNode===null)throw Error(C(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){ye(t,t.return,v)}}break;case 3:if(Wt(e,t),rn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Mo(e.containerInfo)}catch(v){ye(t,t.return,v)}break;case 4:Wt(e,t),rn(t);break;case 13:Wt(e,t),rn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(jp=we())),r&4&&Xy(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(et=(u=et)||c,Wt(e,t),et=u):Wt(e,t),rn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&(t.mode&1)!==0)for(N=t,c=t.child;c!==null;){for(h=N=c;N!==null;){switch(d=N,f=d.child,d.tag){case 0:case 11:case 14:case 15:yo(4,d,d.return);break;case 1:Mi(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(v){ye(r,n,v)}}break;case 5:Mi(d,d.return);break;case 22:if(d.memoizedState!==null){Zy(h);continue}}f!==null?(f.return=d,N=f):Zy(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=z0("display",o))}catch(v){ye(t,t.return,v)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){ye(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Wt(e,t),rn(t),r&4&&Xy(t);break;case 21:break;default:Wt(e,t),rn(t)}}function rn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(mE(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(bo(i,""),r.flags&=-33);var s=Yy(t);rf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Yy(t);nf(t,a,o);break;default:throw Error(C(161))}}catch(l){ye(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function qN(t,e,n){N=t,vE(t)}function vE(t,e,n){for(var r=(t.mode&1)!==0;N!==null;){var i=N,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ml;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||et;a=ml;var u=et;if(ml=o,(et=l)&&!u)for(N=i;N!==null;)o=N,l=o.child,o.tag===22&&o.memoizedState!==null?ev(i):l!==null?(l.return=o,N=l):ev(i);for(;s!==null;)N=s,vE(s),s=s.sibling;N=i,ml=a,et=u}Jy(t)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,N=s):Jy(t)}}function Jy(t){for(;N!==null;){var e=N;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:et||yc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!et)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:qt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&My(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}My(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Mo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}et||e.flags&512&&tf(e)}catch(d){ye(e,e.return,d)}}if(e===t){N=null;break}if(n=e.sibling,n!==null){n.return=e.return,N=n;break}N=e.return}}function Zy(t){for(;N!==null;){var e=N;if(e===t){N=null;break}var n=e.sibling;if(n!==null){n.return=e.return,N=n;break}N=e.return}}function ev(t){for(;N!==null;){var e=N;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{yc(4,e)}catch(l){ye(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ye(e,i,l)}}var s=e.return;try{tf(e)}catch(l){ye(e,s,l)}break;case 5:var o=e.return;try{tf(e)}catch(l){ye(e,o,l)}}}catch(l){ye(e,e.return,l)}if(e===t){N=null;break}var a=e.sibling;if(a!==null){a.return=e.return,N=a;break}N=e.return}}var KN=Math.ceil,vu=Ln.ReactCurrentDispatcher,Bp=Ln.ReactCurrentOwner,$t=Ln.ReactCurrentBatchConfig,X=0,Ue=null,Se=null,We=0,It=0,Li=vr(0),Re=0,qo=null,Yr=0,vc=0,zp=0,vo=null,mt=null,jp=0,us=1/0,pn=null,_u=!1,sf=null,rr=null,gl=!1,Xn=null,wu=0,_o=0,of=null,$l=-1,Ul=0;function ct(){return(X&6)!==0?we():$l!==-1?$l:$l=we()}function ir(t){return(t.mode&1)===0?1:(X&2)!==0&&We!==0?We&-We:xN.transition!==null?(Ul===0&&(Ul=tw()),Ul):(t=te,t!==0||(t=window.event,t=t===void 0?16:lw(t.type)),t)}function en(t,e,n,r){if(50<_o)throw _o=0,of=null,Error(C(185));wa(t,n,r),((X&2)===0||t!==Ue)&&(t===Ue&&((X&2)===0&&(vc|=n),Re===4&&Wn(t,We)),St(t,r),n===1&&X===0&&(e.mode&1)===0&&(us=we()+500,pc&&_r()))}function St(t,e){var n=t.callbackNode;xk(t,e);var r=ru(t,t===Ue?We:0);if(r===0)n!==null&&uy(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&uy(n),e===1)t.tag===0?AN(tv.bind(null,t)):Nw(tv.bind(null,t)),IN(function(){(X&6)===0&&_r()}),n=null;else{switch(nw(r)){case 1:n=mp;break;case 4:n=Z0;break;case 16:n=nu;break;case 536870912:n=ew;break;default:n=nu}n=kE(n,_E.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function _E(t,e){if($l=-1,Ul=0,(X&6)!==0)throw Error(C(327));var n=t.callbackNode;if(Ki()&&t.callbackNode!==n)return null;var r=ru(t,t===Ue?We:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=Eu(t,r);else{e=r;var i=X;X|=2;var s=EE();(Ue!==t||We!==e)&&(pn=null,us=we()+500,Vr(t,e));do try{YN();break}catch(a){wE(t,a)}while(1);Rp(),vu.current=s,X=i,Se!==null?e=0:(Ue=null,We=0,e=Re)}if(e!==0){if(e===2&&(i=Pd(t),i!==0&&(r=i,e=af(t,i))),e===1)throw n=qo,Vr(t,0),Wn(t,r),St(t,we()),n;if(e===6)Wn(t,r);else{if(i=t.current.alternate,(r&30)===0&&!GN(i)&&(e=Eu(t,r),e===2&&(s=Pd(t),s!==0&&(r=s,e=af(t,s))),e===1))throw n=qo,Vr(t,0),Wn(t,r),St(t,we()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(C(345));case 2:Nr(t,mt,pn);break;case 3:if(Wn(t,r),(r&130023424)===r&&(e=jp+500-we(),10<e)){if(ru(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ct(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Vd(Nr.bind(null,t,mt,pn),e);break}Nr(t,mt,pn);break;case 4:if(Wn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Zt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=we()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*KN(r/1960))-r,10<r){t.timeoutHandle=Vd(Nr.bind(null,t,mt,pn),r);break}Nr(t,mt,pn);break;case 5:Nr(t,mt,pn);break;default:throw Error(C(329))}}}return St(t,we()),t.callbackNode===n?_E.bind(null,t):null}function af(t,e){var n=vo;return t.current.memoizedState.isDehydrated&&(Vr(t,e).flags|=256),t=Eu(t,e),t!==2&&(e=mt,mt=n,e!==null&&lf(e)),t}function lf(t){mt===null?mt=t:mt.push.apply(mt,t)}function GN(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!nn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Wn(t,e){for(e&=~zp,e&=~vc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Zt(e),r=1<<n;t[n]=-1,e&=~r}}function tv(t){if((X&6)!==0)throw Error(C(327));Ki();var e=ru(t,0);if((e&1)===0)return St(t,we()),null;var n=Eu(t,e);if(t.tag!==0&&n===2){var r=Pd(t);r!==0&&(e=r,n=af(t,r))}if(n===1)throw n=qo,Vr(t,0),Wn(t,e),St(t,we()),n;if(n===6)throw Error(C(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Nr(t,mt,pn),St(t,we()),null}function Hp(t,e){var n=X;X|=1;try{return t(e)}finally{X=n,X===0&&(us=we()+500,pc&&_r())}}function Xr(t){Xn!==null&&Xn.tag===0&&(X&6)===0&&Ki();var e=X;X|=1;var n=$t.transition,r=te;try{if($t.transition=null,te=1,t)return t()}finally{te=r,$t.transition=n,X=e,(X&6)===0&&_r()}}function Wp(){It=Li.current,ue(Li)}function Vr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,TN(n)),Se!==null)for(n=Se.return;n!==null;){var r=n;switch(Ip(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&lu();break;case 3:as(),ue(Et),ue(st),Op();break;case 5:Dp(r);break;case 4:as();break;case 13:ue(fe);break;case 19:ue(fe);break;case 10:Ap(r.type._context);break;case 22:case 23:Wp()}n=n.return}if(Ue=t,Se=t=sr(t.current,null),We=It=e,Re=0,qo=null,zp=vc=Yr=0,mt=vo=null,Dr!==null){for(e=0;e<Dr.length;e++)if(n=Dr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Dr=null}return t}function wE(t,e){do{var n=Se;try{if(Rp(),Ml.current=yu,gu){for(var r=me.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}gu=!1}if(Qr=0,Le=ke=me=null,go=!1,jo=0,Bp.current=null,n===null||n.return===null){Re=1,qo=e,Se=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=We,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if((c.mode&1)===0&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var f=zy(o);if(f!==null){f.flags&=-257,jy(f,o,a,s,e),f.mode&1&&By(s,u,e),e=f,l=u;var g=e.updateQueue;if(g===null){var v=new Set;v.add(l),e.updateQueue=v}else g.add(l);break e}else{if((e&1)===0){By(s,u,e),qp();break e}l=Error(C(426))}}else if(ce&&a.mode&1){var w=zy(o);if(w!==null){(w.flags&65536)===0&&(w.flags|=256),jy(w,o,a,s,e),kp(ls(l,a));break e}}s=l=ls(l,a),Re!==4&&(Re=2),vo===null?vo=[s]:vo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=rE(s,l,e);Oy(s,m);break e;case 1:a=l;var p=s.type,y=s.stateNode;if((s.flags&128)===0&&(typeof p.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(rr===null||!rr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var _=iE(s,a,e);Oy(s,_);break e}}s=s.return}while(s!==null)}SE(n)}catch(I){e=I,Se===n&&n!==null&&(Se=n=n.return);continue}break}while(1)}function EE(){var t=vu.current;return vu.current=yu,t===null?yu:t}function qp(){(Re===0||Re===3||Re===2)&&(Re=4),Ue===null||(Yr&268435455)===0&&(vc&268435455)===0||Wn(Ue,We)}function Eu(t,e){var n=X;X|=2;var r=EE();(Ue!==t||We!==e)&&(pn=null,Vr(t,e));do try{QN();break}catch(i){wE(t,i)}while(1);if(Rp(),X=n,vu.current=r,Se!==null)throw Error(C(261));return Ue=null,We=0,Re}function QN(){for(;Se!==null;)CE(Se)}function YN(){for(;Se!==null&&!Ek();)CE(Se)}function CE(t){var e=IE(t.alternate,t,It);t.memoizedProps=t.pendingProps,e===null?SE(t):Se=e,Bp.current=null}function SE(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=zN(n,e,It),n!==null){Se=n;return}}else{if(n=jN(n,e),n!==null){n.flags&=32767,Se=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Re=6,Se=null;return}}if(e=e.sibling,e!==null){Se=e;return}Se=e=t}while(e!==null);Re===0&&(Re=5)}function Nr(t,e,n){var r=te,i=$t.transition;try{$t.transition=null,te=1,XN(t,e,n,r)}finally{$t.transition=i,te=r}return null}function XN(t,e,n,r){do Ki();while(Xn!==null);if((X&6)!==0)throw Error(C(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(C(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(bk(t,s),t===Ue&&(Se=Ue=null,We=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||gl||(gl=!0,kE(nu,function(){return Ki(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=$t.transition,$t.transition=null;var o=te;te=1;var a=X;X|=4,Bp.current=null,WN(t,n),yE(n,t),yN($d),iu=!!Fd,$d=Fd=null,t.current=n,qN(n),Ck(),X=a,te=o,$t.transition=s}else t.current=n;if(gl&&(gl=!1,Xn=t,wu=i),s=t.pendingLanes,s===0&&(rr=null),Ik(n.stateNode),St(t,we()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(_u)throw _u=!1,t=sf,sf=null,t;return(wu&1)!==0&&t.tag!==0&&Ki(),s=t.pendingLanes,(s&1)!==0?t===of?_o++:(_o=0,of=t):_o=0,_r(),null}function Ki(){if(Xn!==null){var t=nw(wu),e=$t.transition,n=te;try{if($t.transition=null,te=16>t?16:t,Xn===null)var r=!1;else{if(t=Xn,Xn=null,wu=0,(X&6)!==0)throw Error(C(331));var i=X;for(X|=4,N=t.current;N!==null;){var s=N,o=s.child;if((N.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(N=u;N!==null;){var c=N;switch(c.tag){case 0:case 11:case 15:yo(8,c,s)}var h=c.child;if(h!==null)h.return=c,N=h;else for(;N!==null;){c=N;var d=c.sibling,f=c.return;if(pE(c),c===u){N=null;break}if(d!==null){d.return=f,N=d;break}N=f}}}var g=s.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var w=v.sibling;v.sibling=null,v=w}while(v!==null)}}N=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,N=o;else e:for(;N!==null;){if(s=N,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:yo(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,N=m;break e}N=s.return}}var p=t.current;for(N=p;N!==null;){o=N;var y=o.child;if((o.subtreeFlags&2064)!==0&&y!==null)y.return=o,N=y;else e:for(o=p;N!==null;){if(a=N,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:yc(9,a)}}catch(I){ye(a,a.return,I)}if(a===o){N=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,N=_;break e}N=a.return}}if(X=i,_r(),an&&typeof an.onPostCommitFiberRoot=="function")try{an.onPostCommitFiberRoot(uc,t)}catch{}r=!0}return r}finally{te=n,$t.transition=e}}return!1}function nv(t,e,n){e=ls(n,e),e=rE(t,e,1),t=nr(t,e,1),e=ct(),t!==null&&(wa(t,1,e),St(t,e))}function ye(t,e,n){if(t.tag===3)nv(t,t,n);else for(;e!==null;){if(e.tag===3){nv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(rr===null||!rr.has(r))){t=ls(n,t),t=iE(e,t,1),e=nr(e,t,1),t=ct(),e!==null&&(wa(e,1,t),St(e,t));break}}e=e.return}}function JN(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ct(),t.pingedLanes|=t.suspendedLanes&n,Ue===t&&(We&n)===n&&(Re===4||Re===3&&(We&130023424)===We&&500>we()-jp?Vr(t,0):zp|=n),St(t,e)}function TE(t,e){e===0&&((t.mode&1)===0?e=1:(e=ol,ol<<=1,(ol&130023424)===0&&(ol=4194304)));var n=ct();t=Rn(t,e),t!==null&&(wa(t,e,n),St(t,n))}function ZN(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),TE(t,n)}function eR(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(e),TE(t,n)}var IE;IE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Et.current)yt=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return yt=!1,BN(t,e,n);yt=(t.flags&131072)!==0}else yt=!1,ce&&(e.flags&1048576)!==0&&Rw(e,hu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Fl(t,e),t=e.pendingProps;var i=is(e,st.current);qi(e,n),i=Lp(null,e,r,t,i,n);var s=Fp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ct(r)?(s=!0,uu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,bp(e),i.updater=mc,e.stateNode=i,i._reactInternals=e,Kd(e,r,t,n),e=Yd(null,e,r,!0,s,n)):(e.tag=0,ce&&s&&Tp(e),ot(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Fl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=nR(r),t=qt(r,t),i){case 0:e=Qd(null,e,r,t,n);break e;case 1:e=qy(null,e,r,t,n);break e;case 11:e=Hy(null,e,r,t,n);break e;case 14:e=Wy(null,e,r,qt(r.type,t),n);break e}throw Error(C(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qt(r,i),Qd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qt(r,i),qy(t,e,r,i,n);case 3:e:{if(lE(e),t===null)throw Error(C(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Pw(t,e),pu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ls(Error(C(423)),e),e=Ky(t,e,r,n,i);break e}else if(r!==i){i=ls(Error(C(424)),e),e=Ky(t,e,r,n,i);break e}else for(kt=tr(e.stateNode.containerInfo.firstChild),Nt=e,ce=!0,Gt=null,n=Lw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ss(),r===i){e=An(t,e,n);break e}ot(t,e,r,n)}e=e.child}return e;case 5:return Fw(e),t===null&&Hd(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Ud(r,i)?o=null:s!==null&&Ud(r,s)&&(e.flags|=32),aE(t,e),ot(t,e,o,n),e.child;case 6:return t===null&&Hd(e),null;case 13:return uE(t,e,n);case 4:return Pp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=os(e,null,r,n):ot(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qt(r,i),Hy(t,e,r,i,n);case 7:return ot(t,e,e.pendingProps,n),e.child;case 8:return ot(t,e,e.pendingProps.children,n),e.child;case 12:return ot(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ie(du,r._currentValue),r._currentValue=o,s!==null)if(nn(s.value,o)){if(s.children===i.children&&!Et.current){e=An(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Cn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Wd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(C(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Wd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ot(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,qi(e,n),i=Vt(i),r=r(i),e.flags|=1,ot(t,e,r,n),e.child;case 14:return r=e.type,i=qt(r,e.pendingProps),i=qt(r.type,i),Wy(t,e,r,i,n);case 15:return sE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qt(r,i),Fl(t,e),e.tag=1,Ct(r)?(t=!0,uu(e)):t=!1,qi(e,n),Ow(e,r,i),Kd(e,r,i,n),Yd(null,e,r,!0,t,n);case 19:return cE(t,e,n);case 22:return oE(t,e,n)}throw Error(C(156,e.tag))};function kE(t,e){return J0(t,e)}function tR(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ft(t,e,n,r){return new tR(t,e,n,r)}function Kp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function nR(t){if(typeof t=="function")return Kp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===dp)return 11;if(t===fp)return 14}return 2}function sr(t,e){var n=t.alternate;return n===null?(n=Ft(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Vl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Kp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ki:return Br(n.children,i,s,e);case hp:o=8,i|=8;break;case yd:return t=Ft(12,n,e,i|2),t.elementType=yd,t.lanes=s,t;case vd:return t=Ft(13,n,e,i),t.elementType=vd,t.lanes=s,t;case _d:return t=Ft(19,n,e,i),t.elementType=_d,t.lanes=s,t;case M0:return _c(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case D0:o=10;break e;case O0:o=9;break e;case dp:o=11;break e;case fp:o=14;break e;case zn:o=16,r=null;break e}throw Error(C(130,t==null?t:typeof t,""))}return e=Ft(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Br(t,e,n,r){return t=Ft(7,t,r,e),t.lanes=n,t}function _c(t,e,n,r){return t=Ft(22,t,r,e),t.elementType=M0,t.lanes=n,t.stateNode={isHidden:!1},t}function Mh(t,e,n){return t=Ft(6,t,null,e),t.lanes=n,t}function Lh(t,e,n){return e=Ft(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function rR(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gh(0),this.expirationTimes=gh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Gp(t,e,n,r,i,s,o,a,l){return t=new rR(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ft(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},bp(s),t}function iR(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ii,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function NE(t){if(!t)return cr;t=t._reactInternals;e:{if(pi(t)!==t||t.tag!==1)throw Error(C(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ct(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(C(171))}if(t.tag===1){var n=t.type;if(Ct(n))return kw(t,n,e)}return e}function RE(t,e,n,r,i,s,o,a,l){return t=Gp(n,r,!0,t,i,s,o,a,l),t.context=NE(null),n=t.current,r=ct(),i=ir(n),s=Cn(r,i),s.callback=e!=null?e:null,nr(n,s,i),t.current.lanes=i,wa(t,i,r),St(t,r),t}function wc(t,e,n,r){var i=e.current,s=ct(),o=ir(i);return n=NE(n),e.context===null?e.context=n:e.pendingContext=n,e=Cn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=nr(i,e,o),t!==null&&(en(t,i,o,s),Ol(t,i,o)),o}function Cu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function rv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Qp(t,e){rv(t,e),(t=t.alternate)&&rv(t,e)}function sR(){return null}var AE=typeof reportError=="function"?reportError:function(t){console.error(t)};function Yp(t){this._internalRoot=t}Ec.prototype.render=Yp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(C(409));wc(t,e,null,null)};Ec.prototype.unmount=Yp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Xr(function(){wc(null,t,null,null)}),e[Nn]=null}};function Ec(t){this._internalRoot=t}Ec.prototype.unstable_scheduleHydration=function(t){if(t){var e=sw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Hn.length&&e!==0&&e<Hn[n].priority;n++);Hn.splice(n,0,t),n===0&&aw(t)}};function Xp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Cc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function iv(){}function oR(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Cu(o);s.call(u)}}var o=RE(e,r,t,0,null,!1,!1,"",iv);return t._reactRootContainer=o,t[Nn]=o.current,$o(t.nodeType===8?t.parentNode:t),Xr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Cu(l);a.call(u)}}var l=Gp(t,0,!1,null,null,!1,!1,"",iv);return t._reactRootContainer=l,t[Nn]=l.current,$o(t.nodeType===8?t.parentNode:t),Xr(function(){wc(e,l,n,r)}),l}function Sc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Cu(o);a.call(l)}}wc(e,o,t,i)}else o=oR(n,e,t,i,r);return Cu(o)}rw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=so(e.pendingLanes);n!==0&&(gp(e,n|1),St(e,we()),(X&6)===0&&(us=we()+500,_r()))}break;case 13:Xr(function(){var r=Rn(t,1);if(r!==null){var i=ct();en(r,t,1,i)}}),Qp(t,1)}};yp=function(t){if(t.tag===13){var e=Rn(t,134217728);if(e!==null){var n=ct();en(e,t,134217728,n)}Qp(t,134217728)}};iw=function(t){if(t.tag===13){var e=ir(t),n=Rn(t,e);if(n!==null){var r=ct();en(n,t,e,r)}Qp(t,e)}};sw=function(){return te};ow=function(t,e){var n=te;try{return te=t,e()}finally{te=n}};Ad=function(t,e,n){switch(e){case"input":if(Cd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=fc(r);if(!i)throw Error(C(90));F0(r),Cd(r,i)}}}break;case"textarea":U0(t,n);break;case"select":e=n.value,e!=null&&zi(t,!!n.multiple,e,!1)}};q0=Hp;K0=Xr;var aR={usingClientEntryPoint:!1,Events:[Ca,xi,fc,H0,W0,Hp]},Xs={findFiberByHostInstance:Pr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},lR={bundleType:Xs.bundleType,version:Xs.version,rendererPackageName:Xs.rendererPackageName,rendererConfig:Xs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ln.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Y0(t),t===null?null:t.stateNode},findFiberByHostInstance:Xs.findFiberByHostInstance||sR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yl.isDisabled&&yl.supportsFiber)try{uc=yl.inject(lR),an=yl}catch{}}Pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=aR;Pt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xp(e))throw Error(C(200));return iR(t,e,null,n)};Pt.createRoot=function(t,e){if(!Xp(t))throw Error(C(299));var n=!1,r="",i=AE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Gp(t,1,!1,null,null,n,!1,r,i),t[Nn]=e.current,$o(t.nodeType===8?t.parentNode:t),new Yp(e)};Pt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(C(188)):(t=Object.keys(t).join(","),Error(C(268,t)));return t=Y0(e),t=t===null?null:t.stateNode,t};Pt.flushSync=function(t){return Xr(t)};Pt.hydrate=function(t,e,n){if(!Cc(e))throw Error(C(200));return Sc(null,t,e,!0,n)};Pt.hydrateRoot=function(t,e,n){if(!Xp(t))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=AE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=RE(e,null,t,1,n!=null?n:null,i,!1,s,o),t[Nn]=e.current,$o(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ec(e)};Pt.render=function(t,e,n){if(!Cc(e))throw Error(C(200));return Sc(null,t,e,!1,n)};Pt.unmountComponentAtNode=function(t){if(!Cc(t))throw Error(C(40));return t._reactRootContainer?(Xr(function(){Sc(null,null,t,!1,function(){t._reactRootContainer=null,t[Nn]=null})}),!0):!1};Pt.unstable_batchedUpdates=Hp;Pt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Cc(n))throw Error(C(200));if(t==null||t._reactInternals===void 0)throw Error(C(38));return Sc(t,e,n,!1,r)};Pt.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=Pt})(R0);var sv=R0.exports;md.createRoot=sv.createRoot,md.hydrateRoot=sv.hydrateRoot;/**
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
 */const xE={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const T=function(t,e){if(!t)throw As(e)},As=function(t){return new Error("Firebase Database ("+xE.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const bE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},uR=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Jp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;l||(f=64,o||(d=64)),r.push(n[c],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(bE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):uR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw Error();const d=s<<2|a>>4;if(r.push(d),u!==64){const f=a<<4&240|u>>2;if(r.push(f),h!==64){const g=u<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},PE=function(t){const e=bE(t);return Jp.encodeByteArray(e,!0)},DE=function(t){return PE(t).replace(/\./g,"")},uf=function(t){try{return Jp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function cR(t){return OE(void 0,t)}function OE(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!hR(n)||(t[n]=OE(t[n],e[n]));return t}function hR(t){return t!=="__proto__"}/**
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
 */class Zp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Ve(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Tc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ve())}function ME(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function em(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function dR(){return Ve().indexOf("Electron/")>=0}function LE(){const t=Ve();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function fR(){return Ve().indexOf("MSAppHost/")>=0}function FE(){return xE.NODE_ADMIN===!0}function $E(){return typeof indexedDB=="object"}function pR(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const mR="FirebaseError";class jt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=mR,Object.setPrototypeOf(this,jt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,mi.prototype.create)}}class mi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?gR(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new jt(i,a,r)}}function gR(t,e){return t.replace(yR,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const yR=/\{\$([^}]+)}/g;/**
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
 */function Ko(t){return JSON.parse(t)}function $e(t){return JSON.stringify(t)}/**
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
 */const UE=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Ko(uf(s[0])||""),n=Ko(uf(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},vR=function(t){const e=UE(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},_R=function(t){const e=UE(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Fn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function cs(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function cf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Su(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Tu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(ov(s)&&ov(o)){if(!Tu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function ov(t){return t!==null&&typeof t=="object"}/**
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
 */function xs(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
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
 */class wR{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)r[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let h=0;h<80;h++){h<40?h<20?(u=a^s&(o^a),c=1518500249):(u=s^o^a,c=1859775393):h<60?(u=s&o|a&(s|o),c=2400959708):(u=s^o^a,c=3395469782);const d=(i<<5|i>>>27)+u+l+c+r[h]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function ER(t,e){const n=new CR(t,e);return n.subscribe.bind(n)}class CR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");SR(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Fh),i.error===void 0&&(i.error=Fh),i.complete===void 0&&(i.complete=Fh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function SR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Fh(){}function VE(t,e){return`${t} failed: ${e} argument `}/**
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
 */const TR=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,T(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ic=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const IR=1e3,kR=2,NR=4*60*60*1e3,RR=.5;function AR(t,e=IR,n=kR){const r=e*Math.pow(n,t),i=Math.round(RR*r*(Math.random()-.5)*2);return Math.min(NR,r+i)}/**
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
 */function Qe(t){return t&&t._delegate?t._delegate:t}class xt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Rr="[DEFAULT]";/**
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
 */class xR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Zp;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(PR(e))try{this.getOrInitializeService({instanceIdentifier:Rr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Rr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Rr){return this.instances.has(e)}getOptions(e=Rr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:bR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Rr){return this.component?this.component.multipleInstances?e:Rr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function bR(t){return t===Rr?void 0:t}function PR(t){return t.instantiationMode==="EAGER"}/**
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
 */class DR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new xR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Y;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Y||(Y={}));const OR={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},MR=Y.INFO,LR={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},FR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=LR[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ta{constructor(e){this.name=e,this._logLevel=MR,this._logHandler=FR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?OR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const $R=(t,e)=>e.some(n=>t instanceof n);let av,lv;function UR(){return av||(av=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function VR(){return lv||(lv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const BE=new WeakMap,hf=new WeakMap,zE=new WeakMap,$h=new WeakMap,tm=new WeakMap;function BR(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(or(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&BE.set(n,t)}).catch(()=>{}),tm.set(e,t),e}function zR(t){if(hf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});hf.set(t,e)}let df={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return hf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||zE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return or(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function jR(t){df=t(df)}function HR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Uh(this),e,...n);return zE.set(r,e.sort?e.sort():[e]),or(r)}:VR().includes(t)?function(...e){return t.apply(Uh(this),e),or(BE.get(this))}:function(...e){return or(t.apply(Uh(this),e))}}function WR(t){return typeof t=="function"?HR(t):(t instanceof IDBTransaction&&zR(t),$R(t,UR())?new Proxy(t,df):t)}function or(t){if(t instanceof IDBRequest)return BR(t);if($h.has(t))return $h.get(t);const e=WR(t);return e!==t&&($h.set(t,e),tm.set(e,t)),e}const Uh=t=>tm.get(t);function jE(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=or(o);return r&&o.addEventListener("upgradeneeded",l=>{r(or(o.result),l.oldVersion,l.newVersion,or(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const qR=["get","getKey","getAll","getAllKeys","count"],KR=["put","add","delete","clear"],Vh=new Map;function uv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Vh.get(e))return Vh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=KR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||qR.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Vh.set(e,s),s}jR(t=>({...t,get:(e,n,r)=>uv(e,n)||t.get(e,n,r),has:(e,n)=>!!uv(e,n)||t.has(e,n)}));/**
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
 */class GR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(QR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function QR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ff="@firebase/app",cv="0.7.32";/**
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
 */const Jr=new Ta("@firebase/app"),YR="@firebase/app-compat",XR="@firebase/analytics-compat",JR="@firebase/analytics",ZR="@firebase/app-check-compat",eA="@firebase/app-check",tA="@firebase/auth",nA="@firebase/auth-compat",rA="@firebase/database",iA="@firebase/database-compat",sA="@firebase/functions",oA="@firebase/functions-compat",aA="@firebase/installations",lA="@firebase/installations-compat",uA="@firebase/messaging",cA="@firebase/messaging-compat",hA="@firebase/performance",dA="@firebase/performance-compat",fA="@firebase/remote-config",pA="@firebase/remote-config-compat",mA="@firebase/storage",gA="@firebase/storage-compat",yA="@firebase/firestore",vA="@firebase/firestore-compat",_A="firebase",wA="9.9.4";/**
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
 */const HE="[DEFAULT]",EA={[ff]:"fire-core",[YR]:"fire-core-compat",[JR]:"fire-analytics",[XR]:"fire-analytics-compat",[eA]:"fire-app-check",[ZR]:"fire-app-check-compat",[tA]:"fire-auth",[nA]:"fire-auth-compat",[rA]:"fire-rtdb",[iA]:"fire-rtdb-compat",[sA]:"fire-fn",[oA]:"fire-fn-compat",[aA]:"fire-iid",[lA]:"fire-iid-compat",[uA]:"fire-fcm",[cA]:"fire-fcm-compat",[hA]:"fire-perf",[dA]:"fire-perf-compat",[fA]:"fire-rc",[pA]:"fire-rc-compat",[mA]:"fire-gcs",[gA]:"fire-gcs-compat",[yA]:"fire-fst",[vA]:"fire-fst-compat","fire-js":"fire-js",[_A]:"fire-js-all"};/**
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
 */const Go=new Map,pf=new Map;function CA(t,e){try{t.container.addComponent(e)}catch(n){Jr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function zt(t){const e=t.name;if(pf.has(e))return Jr.debug(`There were multiple attempts to register component ${e}.`),!1;pf.set(e,t);for(const n of Go.values())CA(n,t);return!0}function bs(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const SA={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Zr=new mi("app","Firebase",SA);/**
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
 */class TA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new xt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Zr.create("app-deleted",{appName:this._name})}}/**
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
 */const wr=wA;function IA(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:HE,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw Zr.create("bad-app-name",{appName:String(r)});const i=Go.get(r);if(i){if(Tu(t,i.options)&&Tu(n,i.config))return i;throw Zr.create("duplicate-app",{appName:r})}const s=new DR(r);for(const a of pf.values())s.addComponent(a);const o=new TA(t,n,s);return Go.set(r,o),o}function nm(t=HE){const e=Go.get(t);if(!e)throw Zr.create("no-app",{appName:t});return e}function kA(){return Array.from(Go.values())}function Te(t,e,n){var r;let i=(r=EA[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Jr.warn(a.join(" "));return}zt(new xt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const NA="firebase-heartbeat-database",RA=1,Qo="firebase-heartbeat-store";let Bh=null;function WE(){return Bh||(Bh=jE(NA,RA,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Qo)}}}).catch(t=>{throw Zr.create("idb-open",{originalErrorMessage:t.message})})),Bh}async function AA(t){var e;try{return(await WE()).transaction(Qo).objectStore(Qo).get(qE(t))}catch(n){if(n instanceof jt)Jr.warn(n.message);else{const r=Zr.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Jr.warn(r.message)}}}async function hv(t,e){var n;try{const i=(await WE()).transaction(Qo,"readwrite");return await i.objectStore(Qo).put(e,qE(t)),i.done}catch(r){if(r instanceof jt)Jr.warn(r.message);else{const i=Zr.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});Jr.warn(i.message)}}}function qE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const xA=1024,bA=30*24*60*60*1e3;class PA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new OA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=dv();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=bA}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=dv(),{heartbeatsToSend:n,unsentEntries:r}=DA(this._heartbeatsCache.heartbeats),i=DE(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function dv(){return new Date().toISOString().substring(0,10)}function DA(t,e=xA){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),fv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),fv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class OA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $E()?pR().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await AA(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return hv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return hv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function fv(t){return DE(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function MA(t){zt(new xt("platform-logger",e=>new GR(e),"PRIVATE")),zt(new xt("heartbeat",e=>new PA(e),"PRIVATE")),Te(ff,cv,t),Te(ff,cv,"esm2017"),Te("fire-js","")}MA("");function rm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function KE(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const LA=KE,GE=new mi("auth","Firebase",KE());/**
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
 */const pv=new Ta("@firebase/auth");function Bl(t,...e){pv.logLevel<=Y.ERROR&&pv.error(`Auth (${wr}): ${t}`,...e)}/**
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
 */function xn(t,...e){throw im(t,...e)}function un(t,...e){return im(t,...e)}function FA(t,e,n){const r=Object.assign(Object.assign({},LA()),{[e]:n});return new mi("auth","Firebase",r).create(e,{appName:t.name})}function im(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return GE.create(t,...e)}function F(t,e,...n){if(!t)throw im(e,...n)}function vn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Bl(e),new Error(e)}function bn(t,e){t||vn(e)}/**
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
 */const mv=new Map;function _n(t){bn(t instanceof Function,"Expected a class definition");let e=mv.get(t);return e?(bn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,mv.set(t,e),e)}/**
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
 */function $A(t,e){const n=bs(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Tu(s,e!=null?e:{}))return i;xn(i,"already-initialized")}return n.initialize({options:e})}function UA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(_n);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function mf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function VA(){return gv()==="http:"||gv()==="https:"}function gv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function BA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(VA()||ME()||"connection"in navigator)?navigator.onLine:!0}function zA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ia{constructor(e,n){this.shortDelay=e,this.longDelay=n,bn(n>e,"Short delay should be less than long delay!"),this.isMobile=Tc()||em()}get(){return BA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function sm(t,e){bn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class QE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;vn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;vn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;vn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const jA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const HA=new Ia(3e4,6e4);function WA(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function kc(t,e,n,r,i={}){return YE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=xs(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),QE.fetch()(XE(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function YE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},jA),e);try{const i=new KA(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw vl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw vl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw vl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw vl(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw FA(t,c,u);xn(t,c)}}catch(i){if(i instanceof jt)throw i;xn(t,"network-request-failed")}}async function qA(t,e,n,r,i={}){const s=await kc(t,e,n,r,i);return"mfaPendingCredential"in s&&xn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function XE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?sm(t.config,i):`${t.config.apiScheme}://${i}`}class KA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(un(this.auth,"network-request-failed")),HA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function vl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=un(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function GA(t,e){return kc(t,"POST","/v1/accounts:delete",e)}async function QA(t,e){return kc(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function wo(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function YA(t,e=!1){const n=Qe(t),r=await n.getIdToken(e),i=om(r);F(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:wo(zh(i.auth_time)),issuedAtTime:wo(zh(i.iat)),expirationTime:wo(zh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function zh(t){return Number(t)*1e3}function om(t){var e;const[n,r,i]=t.split(".");if(n===void 0||r===void 0||i===void 0)return Bl("JWT malformed, contained fewer than 3 sections"),null;try{const s=uf(r);return s?JSON.parse(s):(Bl("Failed to decode base64 JWT payload"),null)}catch(s){return Bl("Caught error parsing JWT payload as JSON",(e=s)===null||e===void 0?void 0:e.toString()),null}}function XA(t){const e=om(t);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Yo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof jt&&JA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function JA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class ZA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class JE{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=wo(this.lastLoginAt),this.creationTime=wo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Iu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Yo(t,QA(n,{idToken:r}));F(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?nx(s.providerUserInfo):[],a=tx(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new JE(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function ex(t){const e=Qe(t);await Iu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function tx(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function nx(t){return t.map(e=>{var{providerId:n}=e,r=rm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function rx(t,e){const n=await YE(t,{},async()=>{const r=xs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=XE(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",QE.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Xo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):XA(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return F(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await rx(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Xo;return r&&(F(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(F(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(F(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Xo,this.toJSON())}_performRefresh(){return vn("not implemented")}}/**
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
 */function Bn(t,e){F(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class zr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=rm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ZA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new JE(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Yo(this,this.stsTokenManager.getToken(this.auth,e));return F(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return YA(this,e)}reload(){return ex(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new zr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Iu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Yo(this,GA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:y,emailVerified:_,isAnonymous:I,providerData:k,stsTokenManager:A}=n;F(y&&A,e,"internal-error");const b=Xo.fromJSON(this.name,A);F(typeof y=="string",e,"internal-error"),Bn(h,e.name),Bn(d,e.name),F(typeof _=="boolean",e,"internal-error"),F(typeof I=="boolean",e,"internal-error"),Bn(f,e.name),Bn(g,e.name),Bn(v,e.name),Bn(w,e.name),Bn(m,e.name),Bn(p,e.name);const oe=new zr({uid:y,auth:e,email:d,emailVerified:_,displayName:h,isAnonymous:I,photoURL:g,phoneNumber:f,tenantId:v,stsTokenManager:b,createdAt:m,lastLoginAt:p});return k&&Array.isArray(k)&&(oe.providerData=k.map(H=>Object.assign({},H))),w&&(oe._redirectEventId=w),oe}static async _fromIdTokenResponse(e,n,r=!1){const i=new Xo;i.updateFromServerResponse(n);const s=new zr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Iu(s),s}}/**
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
 */class ZE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ZE.type="NONE";const yv=ZE;/**
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
 */function zl(t,e,n){return`firebase:${t}:${e}:${n}`}class Gi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=zl(this.userKey,i.apiKey,s),this.fullPersistenceKey=zl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?zr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Gi(_n(yv),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||_n(yv);const o=zl(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=zr._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Gi(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Gi(s,e,r))}}/**
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
 */function vv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(nC(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(eC(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(iC(e))return"Blackberry";if(sC(e))return"Webos";if(am(e))return"Safari";if((e.includes("chrome/")||tC(e))&&!e.includes("edge/"))return"Chrome";if(rC(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function eC(t=Ve()){return/firefox\//i.test(t)}function am(t=Ve()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function tC(t=Ve()){return/crios\//i.test(t)}function nC(t=Ve()){return/iemobile/i.test(t)}function rC(t=Ve()){return/android/i.test(t)}function iC(t=Ve()){return/blackberry/i.test(t)}function sC(t=Ve()){return/webos/i.test(t)}function Nc(t=Ve()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ix(t=Ve()){var e;return Nc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function sx(){return LE()&&document.documentMode===10}function oC(t=Ve()){return Nc(t)||rC(t)||sC(t)||iC(t)||/windows phone/i.test(t)||nC(t)}function ox(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function aC(t,e=[]){let n;switch(t){case"Browser":n=vv(Ve());break;case"Worker":n=`${vv(Ve())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${wr}/${r}`}/**
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
 */class ax{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const i of this.queue)await i(e),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const s of r)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
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
 */class lx{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _v(this),this.idTokenSubscription=new _v(this),this.beforeStateQueue=new ax(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=GE,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=_n(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Gi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await Iu(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=zA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Qe(e):null;return n&&F(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(_n(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new mi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&_n(e)||this._popupRedirectResolver;F(n,this,"argument-error"),this.redirectPersistenceManager=await Gi.create(this,[_n(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return F(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=aC(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function lC(t){return Qe(t)}class _v{constructor(e){this.auth=e,this.observer=null,this.addObserver=ER(n=>this.observer=n)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class uC{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return vn("not implemented")}_getIdTokenResponse(e){return vn("not implemented")}_linkToIdToken(e,n){return vn("not implemented")}_getReauthenticationResolver(e){return vn("not implemented")}}/**
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
 */async function Qi(t,e){return qA(t,"POST","/v1/accounts:signInWithIdp",WA(t,e))}/**
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
 */const ux="http://localhost";class ei extends uC{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ei(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):xn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=rm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ei(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Qi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Qi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Qi(e,n)}buildRequest(){const e={requestUri:ux,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=xs(n)}return e}}/**
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
 */class cC{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ka extends cC{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class qn extends ka{constructor(){super("facebook.com")}static credential(e){return ei._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qn.credential(e.oauthAccessToken)}catch{return null}}}qn.FACEBOOK_SIGN_IN_METHOD="facebook.com";qn.PROVIDER_ID="facebook.com";/**
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
 */class Kn extends ka{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ei._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Kn.credential(n,r)}catch{return null}}}Kn.GOOGLE_SIGN_IN_METHOD="google.com";Kn.PROVIDER_ID="google.com";/**
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
 */class Gn extends ka{constructor(){super("github.com")}static credential(e){return ei._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gn.credential(e.oauthAccessToken)}catch{return null}}}Gn.GITHUB_SIGN_IN_METHOD="github.com";Gn.PROVIDER_ID="github.com";/**
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
 */class Qn extends ka{constructor(){super("twitter.com")}static credential(e,n){return ei._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Qn.credential(n,r)}catch{return null}}}Qn.TWITTER_SIGN_IN_METHOD="twitter.com";Qn.PROVIDER_ID="twitter.com";/**
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
 */class hs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await zr._fromIdTokenResponse(e,r,i),o=wv(r);return new hs({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=wv(r);return new hs({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function wv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ku extends jt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ku.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ku(e,n,r,i)}}function hC(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ku._fromErrorAndOperation(t,s,e,r):s})}async function cx(t,e,n=!1){const r=await Yo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return hs._forOperation(t,"link",r)}/**
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
 */async function hx(t,e,n=!1){var r;const{auth:i}=t,s="reauthenticate";try{const o=await Yo(t,hC(i,s,e,t),n);F(o.idToken,i,"internal-error");const a=om(o.idToken);F(a,i,"internal-error");const{sub:l}=a;return F(t.uid===l,i,"user-mismatch"),hs._forOperation(t,s,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&xn(i,"user-mismatch"),o}}/**
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
 */async function dx(t,e,n=!1){const r="signIn",i=await hC(t,r,e),s=await hs._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function fx(t,e,n,r){return Qe(t).onIdTokenChanged(e,n,r)}function px(t){return Qe(t).signOut()}const Nu="__sak";/**
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
 */class dC{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Nu,"1"),this.storage.removeItem(Nu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function mx(){const t=Ve();return am(t)||Nc(t)}const gx=1e3,yx=10;class fC extends dC{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=mx()&&ox(),this.fallbackToPolling=oC(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);sx()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,yx):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},gx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}fC.type="LOCAL";const vx=fC;/**
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
 */class pC extends dC{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}pC.type="SESSION";const mC=pC;/**
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
 */function _x(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Rc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Rc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await _x(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Rc.receivers=[];/**
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
 */function lm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class wx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=lm("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function cn(){return window}function Ex(t){cn().location.href=t}/**
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
 */function gC(){return typeof cn().WorkerGlobalScope<"u"&&typeof cn().importScripts=="function"}async function Cx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Sx(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Tx(){return gC()?self:null}/**
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
 */const yC="firebaseLocalStorageDb",Ix=1,Ru="firebaseLocalStorage",vC="fbase_key";class Na{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ac(t,e){return t.transaction([Ru],e?"readwrite":"readonly").objectStore(Ru)}function kx(){const t=indexedDB.deleteDatabase(yC);return new Na(t).toPromise()}function gf(){const t=indexedDB.open(yC,Ix);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ru,{keyPath:vC})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ru)?e(r):(r.close(),await kx(),e(await gf()))})})}async function Ev(t,e,n){const r=Ac(t,!0).put({[vC]:e,value:n});return new Na(r).toPromise()}async function Nx(t,e){const n=Ac(t,!1).get(e),r=await new Na(n).toPromise();return r===void 0?null:r.value}function Cv(t,e){const n=Ac(t,!0).delete(e);return new Na(n).toPromise()}const Rx=800,Ax=3;class _C{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await gf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Ax)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gC()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Rc._getInstance(Tx()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Cx(),!this.activeServiceWorker)return;this.sender=new wx(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Sx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await gf();return await Ev(e,Nu,"1"),await Cv(e,Nu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ev(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Nx(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Cv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ac(i,!1).getAll();return new Na(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Rx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}_C.type="LOCAL";const xx=_C;/**
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
 */function bx(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Px(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=un("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",bx().appendChild(r)})}function Dx(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Ia(3e4,6e4);/**
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
 */function Ox(t,e){return e?_n(e):(F(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class um extends uC{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Qi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Qi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Mx(t){return dx(t.auth,new um(t),t.bypassAuthState)}function Lx(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),hx(n,new um(t),t.bypassAuthState)}async function Fx(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),cx(n,new um(t),t.bypassAuthState)}/**
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
 */class wC{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Mx;case"linkViaPopup":case"linkViaRedirect":return Fx;case"reauthViaPopup":case"reauthViaRedirect":return Lx;default:xn(this.auth,"internal-error")}}resolve(e){bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const $x=new Ia(2e3,1e4);class Fi extends wC{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Fi.currentPopupAction&&Fi.currentPopupAction.cancel(),Fi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){bn(this.filter.length===1,"Popup operations only handle one event");const e=lm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(un(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(un(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Fi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(un(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,$x.get())};e()}}Fi.currentPopupAction=null;/**
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
 */const Ux="pendingRedirect",jl=new Map;class Vx extends wC{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=jl.get(this.auth._key());if(!e){try{const r=await Bx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}jl.set(this.auth._key(),e)}return this.bypassAuthState||jl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Bx(t,e){const n=Hx(e),r=jx(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function zx(t,e){jl.set(t._key(),e)}function jx(t){return _n(t._redirectPersistence)}function Hx(t){return zl(Ux,t.config.apiKey,t.name)}async function Wx(t,e,n=!1){const r=lC(t),i=Ox(r,e),o=await new Vx(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const qx=10*60*1e3;class Kx{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Gx(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!EC(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(un(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=qx&&this.cachedEventUids.clear(),this.cachedEventUids.has(Sv(e))}saveEventToCache(e){this.cachedEventUids.add(Sv(e)),this.lastProcessedEventTime=Date.now()}}function Sv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function EC({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Gx(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return EC(t);default:return!1}}/**
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
 */async function Qx(t,e={}){return kc(t,"GET","/v1/projects",e)}/**
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
 */const Yx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Xx=/^https?/;async function Jx(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Qx(t);for(const n of e)try{if(Zx(n))return}catch{}xn(t,"unauthorized-domain")}function Zx(t){const e=mf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Xx.test(n))return!1;if(Yx.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const eb=new Ia(3e4,6e4);function Tv(){const t=cn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function tb(t){return new Promise((e,n)=>{var r,i,s;function o(){Tv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Tv(),n(un(t,"network-request-failed"))},timeout:eb.get()})}if(!((i=(r=cn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=cn().gapi)===null||s===void 0)&&s.load)o();else{const a=Dx("iframefcb");return cn()[a]=()=>{gapi.load?o():n(un(t,"network-request-failed"))},Px(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Hl=null,e})}let Hl=null;function nb(t){return Hl=Hl||tb(t),Hl}/**
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
 */const rb=new Ia(5e3,15e3),ib="__/auth/iframe",sb="emulator/auth/iframe",ob={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ab=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function lb(t){const e=t.config;F(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?sm(e,sb):`https://${t.config.authDomain}/${ib}`,r={apiKey:e.apiKey,appName:t.name,v:wr},i=ab.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${xs(r).slice(1)}`}async function ub(t){const e=await nb(t),n=cn().gapi;return F(n,t,"internal-error"),e.open({where:document.body,url:lb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ob,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=un(t,"network-request-failed"),a=cn().setTimeout(()=>{s(o)},rb.get());function l(){cn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const cb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},hb=500,db=600,fb="_blank",pb="http://localhost";class Iv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function mb(t,e,n,r=hb,i=db){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},cb),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ve().toLowerCase();n&&(a=tC(u)?fb:n),eC(u)&&(e=e||pb,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[f,g])=>`${d}${f}=${g},`,"");if(ix(u)&&a!=="_self")return gb(e||"",a),new Iv(null);const h=window.open(e||"",a,c);F(h,t,"popup-blocked");try{h.focus()}catch{}return new Iv(h)}function gb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const yb="__/auth/handler",vb="emulator/auth/handler";function kv(t,e,n,r,i,s){F(t.config.authDomain,t,"auth-domain-config-required"),F(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:wr,eventId:i};if(e instanceof cC){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",cf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof ka){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${_b(t)}?${xs(a).slice(1)}`}function _b({config:t}){return t.emulator?sm(t,vb):`https://${t.authDomain}/${yb}`}/**
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
 */const jh="webStorageSupport";class wb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=mC,this._completeRedirectFn=Wx,this._overrideRedirectResult=zx}async _openPopup(e,n,r,i){var s;bn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=kv(e,n,r,mf(),i);return mb(e,o,lm())}async _openRedirect(e,n,r,i){return await this._originValidation(e),Ex(kv(e,n,r,mf(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(bn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await ub(e),r=new Kx(e);return n.register("authEvent",i=>(F(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(jh,{type:jh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[jh];o!==void 0&&n(!!o),xn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Jx(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return oC()||am()||Nc()}}const Eb=wb;var Nv="@firebase/auth",Rv="0.20.6";/**
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
 */class Cb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Sb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Tb(t){zt(new xt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{F(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),F(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:aC(t)},c=new lx(a,l,u);return UA(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),zt(new xt("auth-internal",e=>{const n=lC(e.getProvider("auth").getImmediate());return(r=>new Cb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Te(Nv,Rv,Sb(t)),Te(Nv,Rv,"esm2017")}/**
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
 */function Ib(t=nm()){const e=bs(t,"auth");return e.isInitialized()?e.getImmediate():$A(t,{popupRedirectResolver:Eb,persistence:[xx,vx,mC]})}Tb("Browser");const Av="@firebase/database",xv="0.13.6";/**
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
 */let CC="";function kb(t){CC=t}/**
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
 */class Nb{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),$e(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ko(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Rb{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Fn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const SC=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Nb(e)}}catch{}return new Rb},Mr=SC("localStorage"),yf=SC("sessionStorage");/**
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
 */const Yi=new Ta("@firebase/database"),Ab=function(){let t=1;return function(){return t++}}(),TC=function(t){const e=TR(t),n=new wR;n.update(e);const r=n.digest();return Jp.encodeByteArray(r)},Ra=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Ra.apply(null,r):typeof r=="object"?e+=$e(r):e+=r,e+=" "}return e};let jr=null,bv=!0;const xb=function(t,e){T(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Yi.logLevel=Y.VERBOSE,jr=Yi.log.bind(Yi),e&&yf.set("logging_enabled",!0)):typeof t=="function"?jr=t:(jr=null,yf.remove("logging_enabled"))},tt=function(...t){if(bv===!0&&(bv=!1,jr===null&&yf.get("logging_enabled")===!0&&xb(!0)),jr){const e=Ra.apply(null,t);jr(e)}},Aa=function(t){return function(...e){tt(t,...e)}},vf=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ra(...t);Yi.error(e)},ti=function(...t){const e=`FIREBASE FATAL ERROR: ${Ra(...t)}`;throw Yi.error(e),new Error(e)},Rt=function(...t){const e="FIREBASE WARNING: "+Ra(...t);Yi.warn(e)},bb=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Rt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},IC=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Pb=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ds="[MIN_NAME]",ni="[MAX_NAME]",Ps=function(t,e){if(t===e)return 0;if(t===ds||e===ni)return-1;if(e===ds||t===ni)return 1;{const n=Pv(t),r=Pv(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},Db=function(t,e){return t===e?0:t<e?-1:1},Js=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+$e(e))},cm=function(t){if(typeof t!="object"||t===null)return $e(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=$e(e[r]),n+=":",n+=cm(t[e[r]]);return n+="}",n},kC=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Tt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const NC=function(t){T(!IC(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(c.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},Ob=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Mb=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Lb(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const Fb=new RegExp("^-?(0*)\\d{1,10}$"),$b=-2147483648,Ub=2147483647,Pv=function(t){if(Fb.test(t)){const e=Number(t);if(e>=$b&&e<=Ub)return e}return null},xa=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Rt("Exception was thrown by user callback.",n),e},Math.floor(0))}},Vb=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Eo=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class Bb{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Rt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class zb{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(tt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Rt(e)}}class _f{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}_f.OWNER="owner";/**
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
 */const hm="5",RC="v",AC="s",xC="r",bC="f",PC=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,DC="ls",OC="p",wf="ac",MC="websocket",LC="long_polling";/**
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
 */class jb{constructor(e,n,r,i,s=!1,o="",a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Mr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Mr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Hb(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function FC(t,e,n){T(typeof e=="string","typeof type must == string"),T(typeof n=="object","typeof params must == object");let r;if(e===MC)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===LC)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Hb(t)&&(n.ns=t.namespace);const i=[];return Tt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class Wb{constructor(){this.counters_={}}incrementCounter(e,n=1){Fn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return cR(this.counters_)}}/**
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
 */const Hh={},Wh={};function dm(t){const e=t.toString();return Hh[e]||(Hh[e]=new Wb),Hh[e]}function qb(t,e){const n=t.toString();return Wh[n]||(Wh[n]=e()),Wh[n]}/**
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
 */class Kb{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&xa(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Dv="start",Gb="close",Qb="pLPCommand",Yb="pRTLPCB",$C="id",UC="pw",VC="ser",Xb="cb",Jb="seg",Zb="ts",eP="d",tP="dframe",BC=1870,zC=30,nP=BC-zC,rP=25e3,iP=3e4;class $i{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Aa(e),this.stats_=dm(n),this.urlFn=l=>(this.appCheckToken&&(l[wf]=this.appCheckToken),FC(n,LC,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Kb(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(iP)),Pb(()=>{if(this.isClosed_)return;this.scriptTagHolder=new fm((...s)=>{const[o,a,l,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Dv)this.id=a,this.password=l;else if(o===Gb)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Dv]="t",r[VC]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[Xb]=this.scriptTagHolder.uniqueCallbackIdentifier),r[RC]=hm,this.transportSessionId&&(r[AC]=this.transportSessionId),this.lastSessionId&&(r[DC]=this.lastSessionId),this.applicationId&&(r[OC]=this.applicationId),this.appCheckToken&&(r[wf]=this.appCheckToken),typeof location<"u"&&location.hostname&&PC.test(location.hostname)&&(r[xC]=bC);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){$i.forceAllow_=!0}static forceDisallow(){$i.forceDisallow_=!0}static isAvailable(){return $i.forceAllow_?!0:!$i.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Ob()&&!Mb()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=$e(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=PE(n),i=kC(r,nP);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[tP]="t",r[$C]=e,r[UC]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=$e(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class fm{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Ab(),window[Qb+this.uniqueCallbackIdentifier]=e,window[Yb+this.uniqueCallbackIdentifier]=n,this.myIFrame=fm.createIFrame_();let s="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const a=document.domain;s='<script>document.domain="'+a+'";<\/script>'}const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){tt("frame writing exception"),a.stack&&tt(a.stack),tt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||tt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[$C]=this.myID,e[UC]=this.myPW,e[VC]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+zC+r.length<=BC;){const o=this.pendingSegs.shift();r=r+"&"+Jb+i+"="+o.seg+"&"+Zb+i+"="+o.ts+"&"+eP+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(rP)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{tt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const sP=16384,oP=45e3;let Au=null;typeof MozWebSocket<"u"?Au=MozWebSocket:typeof WebSocket<"u"&&(Au=WebSocket);class Qt{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Aa(this.connId),this.stats_=dm(n),this.connURL=Qt.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[RC]=hm,typeof location<"u"&&location.hostname&&PC.test(location.hostname)&&(o[xC]=bC),n&&(o[AC]=n),r&&(o[DC]=r),i&&(o[wf]=i),s&&(o[OC]=s),FC(e,MC,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Mr.set("previous_websocket_failure",!0);try{let r;FE(),this.mySock=new Au(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Qt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Au!==null&&!Qt.forceDisallow_}static previouslyFailed(){return Mr.isInMemoryStorage||Mr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Mr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Ko(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(T(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=$e(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=kC(n,sP);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(oP))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Qt.responsesRequiredToBeHealthy=2;Qt.healthyTimeout=3e4;/**
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
 */class Jo{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[$i,Qt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Qt&&Qt.isAvailable();let r=n&&!Qt.previouslyFailed();if(e.webSocketOnly&&(n||Rt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Qt];else{const i=this.transports_=[];for(const s of Jo.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Jo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Jo.globalTransportInitialized_=!1;/**
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
 */const aP=6e4,lP=5e3,uP=10*1024,cP=100*1024,qh="t",Ov="d",hP="s",Mv="r",dP="e",Lv="o",Fv="a",$v="n",Uv="p",fP="h";class pP{constructor(e,n,r,i,s,o,a,l,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Aa("c:"+this.id+":"),this.transportManager_=new Jo(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Eo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>cP?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>uP?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(qh in e){const n=e[qh];n===Fv?this.upgradeIfSecondaryHealthy_():n===Mv?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Lv&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Js("t",e),r=Js("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Uv,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Fv,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:$v,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Js("t",e),r=Js("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Js(qh,e);if(Ov in e){const r=e[Ov];if(n===fP)this.onHandshake_(r);else if(n===$v){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===hP?this.onConnectionShutdown_(r):n===Mv?this.onReset_(r):n===dP?vf("Server Error: "+r):n===Lv?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):vf("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),hm!==r&&Rt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Eo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(aP))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Eo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(lP))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Uv,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Mr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class jC{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class HC{constructor(e){this.allowedEvents_=e,this.listeners_={},T(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){T(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class xu extends HC{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Tc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new xu}getInitialEvent(e){return T(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Vv=32,Bv=768;class ne{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function J(){return new ne("")}function W(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function hr(t){return t.pieces_.length-t.pieceNum_}function re(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ne(t.pieces_,e)}function WC(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function mP(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function qC(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function KC(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ne(e,0)}function Ne(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof ne)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new ne(n,0)}function q(t){return t.pieceNum_>=t.pieces_.length}function vt(t,e){const n=W(t),r=W(e);if(n===null)return e;if(n===r)return vt(re(t),re(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function pm(t,e){if(hr(t)!==hr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Yt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(hr(t)>hr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class gP{constructor(e,n){this.errorPrefix_=n,this.parts_=qC(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Ic(this.parts_[r]);GC(this)}}function yP(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Ic(e),GC(t)}function vP(t){const e=t.parts_.pop();t.byteLength_-=Ic(e),t.parts_.length>0&&(t.byteLength_-=1)}function GC(t){if(t.byteLength_>Bv)throw new Error(t.errorPrefix_+"has a key path longer than "+Bv+" bytes ("+t.byteLength_+").");if(t.parts_.length>Vv)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Vv+") or object contains a cycle "+Ar(t))}function Ar(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class mm extends HC{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new mm}getInitialEvent(e){return T(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Zs=1e3,_P=60*5*1e3,zv=30*1e3,wP=1.3,EP=3e4,CP="server_kill",jv=3;class Sn extends jC{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Sn.nextPersistentConnectionId_++,this.log_=Aa("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Zs,this.maxReconnectDelay_=_P,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!FE())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");mm.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&xu.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_($e(s)),T(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Zp,r={p:e._path.toString(),q:e._queryObject},i={action:"g",request:r,onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),T(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;Sn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Fn(e,"w")){const r=cs(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Rt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||_R(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=zv)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=vR(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+$e(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):vf("Unrecognized action received from server: "+$e(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){T(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Zs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Zs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>EP&&(this.reconnectDelay_=Zs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*wP)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Sn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(h){T(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?tt("getToken() completed but was canceled"):(tt("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new pP(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,f=>{Rt(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(CP)},s))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Rt(h),l())}}}interrupt(e){tt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){tt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],cf(this.interruptReasons_)&&(this.reconnectDelay_=Zs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>cm(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new ne(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){tt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=jv&&(this.reconnectDelay_=zv,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){tt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=jv&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+CC.replace(/\./g,"-")]=1,Tc()?e["framework.cordova"]=1:em()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=xu.getInstance().currentlyOnline();return cf(this.interruptReasons_)&&e}}Sn.nextPersistentConnectionId_=0;Sn.nextConnectionId_=0;/**
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
 */class z{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new z(e,n)}}/**
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
 */class xc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new z(ds,e),i=new z(ds,n);return this.compare(r,i)!==0}minPost(){return z.MIN}}/**
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
 */let _l;class QC extends xc{static get __EMPTY_NODE(){return _l}static set __EMPTY_NODE(e){_l=e}compare(e,n){return Ps(e.name,n.name)}isDefinedOn(e){throw As("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return z.MIN}maxPost(){return new z(ni,_l)}makePost(e,n){return T(typeof e=="string","KeyIndex indexValue must always be a string."),new z(e,_l)}toString(){return".key"}}const Xi=new QC;/**
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
 */class wl{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Fe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:Fe.RED,this.left=i!=null?i:_t.EMPTY_NODE,this.right=s!=null?s:_t.EMPTY_NODE}copy(e,n,r,i,s){return new Fe(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return _t.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return _t.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Fe.RED=!0;Fe.BLACK=!1;class SP{copy(e,n,r,i,s){return this}insert(e,n,r){return new Fe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class _t{constructor(e,n=_t.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new _t(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Fe.BLACK,null,null))}remove(e){return new _t(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Fe.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new wl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new wl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new wl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new wl(this.root_,null,this.comparator_,!0,e)}}_t.EMPTY_NODE=new SP;/**
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
 */function TP(t,e){return Ps(t.name,e.name)}function gm(t,e){return Ps(t,e)}/**
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
 */let Ef;function IP(t){Ef=t}const YC=function(t){return typeof t=="number"?"number:"+NC(t):"string:"+t},XC=function(t){if(t.isLeafNode()){const e=t.val();T(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Fn(e,".sv"),"Priority must be a string or number.")}else T(t===Ef||t.isEmpty(),"priority of unexpected type.");T(t===Ef||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Hv;class Oe{constructor(e,n=Oe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,T(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),XC(this.priorityNode_)}static set __childrenNodeConstructor(e){Hv=e}static get __childrenNodeConstructor(){return Hv}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Oe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Oe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return q(e)?this:W(e)===".priority"?this.priorityNode_:Oe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Oe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=W(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(T(r!==".priority"||hr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Oe.__childrenNodeConstructor.EMPTY_NODE.updateChild(re(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+YC(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=NC(this.value_):e+=this.value_,this.lazyHash_=TC(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Oe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Oe.__childrenNodeConstructor?-1:(T(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Oe.VALUE_TYPE_ORDER.indexOf(n),s=Oe.VALUE_TYPE_ORDER.indexOf(r);return T(i>=0,"Unknown leaf type: "+n),T(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Oe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let JC,ZC;function kP(t){JC=t}function NP(t){ZC=t}class RP extends xc{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Ps(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return z.MIN}maxPost(){return new z(ni,new Oe("[PRIORITY-POST]",ZC))}makePost(e,n){const r=JC(e);return new z(n,new Oe("[PRIORITY-POST]",r))}toString(){return".priority"}}const ve=new RP;/**
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
 */const AP=Math.log(2);class xP{constructor(e){const n=s=>parseInt(Math.log(s)/AP,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const bu=function(t,e,n,r){t.sort(e);const i=function(l,u){const c=u-l;let h,d;if(c===0)return null;if(c===1)return h=t[l],d=n?n(h):h,new Fe(d,h.node,Fe.BLACK,null,null);{const f=parseInt(c/2,10)+l,g=i(l,f),v=i(f+1,u);return h=t[f],d=n?n(h):h,new Fe(d,h.node,Fe.BLACK,g,v)}},s=function(l){let u=null,c=null,h=t.length;const d=function(g,v){const w=h-g,m=h;h-=g;const p=i(w+1,m),y=t[w],_=n?n(y):y;f(new Fe(_,y.node,v,null,p))},f=function(g){u?(u.left=g,u=g):(c=g,u=g)};for(let g=0;g<l.count;++g){const v=l.nextBitIsOne(),w=Math.pow(2,l.count-(g+1));v?d(w,Fe.BLACK):(d(w,Fe.BLACK),d(w,Fe.RED))}return c},o=new xP(t.length),a=s(o);return new _t(r||e,a)};/**
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
 */let Kh;const Si={};class wn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return T(Si&&ve,"ChildrenNode.ts has not been loaded"),Kh=Kh||new wn({".priority":Si},{".priority":ve}),Kh}get(e){const n=cs(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof _t?n:null}hasIndex(e){return Fn(this.indexSet_,e.toString())}addIndex(e,n){T(e!==Xi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(z.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=bu(r,e.getCompare()):a=Si;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const c=Object.assign({},this.indexes_);return c[l]=a,new wn(c,u)}addToIndexes(e,n){const r=Su(this.indexes_,(i,s)=>{const o=cs(this.indexSet_,s);if(T(o,"Missing index implementation for "+s),i===Si)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(z.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),bu(a,o.getCompare())}else return Si;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new z(e.name,a))),l.insert(e,e.node)}});return new wn(r,this.indexSet_)}removeFromIndexes(e,n){const r=Su(this.indexes_,i=>{if(i===Si)return i;{const s=n.get(e.name);return s?i.remove(new z(e.name,s)):i}});return new wn(r,this.indexSet_)}}/**
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
 */let eo;class M{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&XC(this.priorityNode_),this.children_.isEmpty()&&T(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return eo||(eo=new M(new _t(gm),null,wn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||eo}updatePriority(e){return this.children_.isEmpty()?this:new M(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?eo:n}}getChild(e){const n=W(e);return n===null?this:this.getImmediateChild(n).getChild(re(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(T(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new z(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?eo:this.priorityNode_;return new M(i,o,s)}}updateChild(e,n){const r=W(e);if(r===null)return n;{T(W(e)!==".priority"||hr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(re(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(ve,(o,a)=>{n[o]=a.val(e),r++,s&&M.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+YC(this.getPriority().val())+":"),this.forEachChild(ve,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":TC(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new z(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new z(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new z(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,z.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,z.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ba?-1:0}withIndex(e){if(e===Xi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new M(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Xi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ve),i=n.getIterator(ve);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Xi?null:this.indexMap_.get(e.toString())}}M.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class bP extends M{constructor(){super(new _t(gm),M.EMPTY_NODE,wn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return M.EMPTY_NODE}isEmpty(){return!1}}const ba=new bP;Object.defineProperties(z,{MIN:{value:new z(ds,M.EMPTY_NODE)},MAX:{value:new z(ni,ba)}});QC.__EMPTY_NODE=M.EMPTY_NODE;Oe.__childrenNodeConstructor=M;IP(ba);NP(ba);/**
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
 */const PP=!0;function nt(t,e=null){if(t===null)return M.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),T(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Oe(n,nt(e))}if(!(t instanceof Array)&&PP){const n=[];let r=!1;if(Tt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=nt(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new z(o,l)))}}),n.length===0)return M.EMPTY_NODE;const s=bu(n,TP,o=>o.name,gm);if(r){const o=bu(n,ve.getCompare());return new M(s,nt(e),new wn({".priority":o},{".priority":ve}))}else return new M(s,nt(e),wn.Default)}else{let n=M.EMPTY_NODE;return Tt(t,(r,i)=>{if(Fn(t,r)&&r.substring(0,1)!=="."){const s=nt(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(nt(e))}}kP(nt);/**
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
 */class DP extends xc{constructor(e){super(),this.indexPath_=e,T(!q(e)&&W(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Ps(e.name,n.name):s}makePost(e,n){const r=nt(e),i=M.EMPTY_NODE.updateChild(this.indexPath_,r);return new z(n,i)}maxPost(){const e=M.EMPTY_NODE.updateChild(this.indexPath_,ba);return new z(ni,e)}toString(){return qC(this.indexPath_,0).join("/")}}/**
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
 */class OP extends xc{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Ps(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return z.MIN}maxPost(){return z.MAX}makePost(e,n){const r=nt(e);return new z(n,r)}toString(){return".value"}}const MP=new OP;/**
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
 */function eS(t){return{type:"value",snapshotNode:t}}function fs(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Zo(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ea(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function LP(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class ym{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){T(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Zo(n,a)):T(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(fs(n,r)):o.trackChildChange(ea(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ve,(i,s)=>{n.hasChild(i)||r.trackChildChange(Zo(i,s))}),n.isLeafNode()||n.forEachChild(ve,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(ea(i,s,o))}else r.trackChildChange(fs(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?M.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class ta{constructor(e){this.indexedFilter_=new ym(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ta.getStartPost_(e),this.endPost_=ta.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,r,i,s,o){return this.matches(new z(n,r))||(r=M.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=M.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(M.EMPTY_NODE);const s=this;return n.forEachChild(ve,(o,a)=>{s.matches(new z(o,a))||(i=i.updateImmediateChild(o,M.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class FP{constructor(e){this.rangedFilter_=new ta(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new z(n,r))||(r=M.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=M.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=M.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();let l;if(this.reverse_?l=this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:l=this.index_.compare(a,this.rangedFilter_.getEndPost())<=0,l)i=i.updateImmediateChild(a.name,a.node),o++;else break}}else{i=n.withIndex(this.index_),i=i.updatePriority(M.EMPTY_NODE);let s,o,a,l;if(this.reverse_){l=i.getReverseIterator(this.index_),s=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const h=this.index_.getCompare();a=(d,f)=>h(f,d)}else l=i.getIterator(this.index_),s=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),a=this.index_.getCompare();let u=0,c=!1;for(;l.hasNext();){const h=l.getNext();!c&&a(s,h)<=0&&(c=!0),c&&u<this.limit_&&a(h,o)<=0?u++:i=i.updateImmediateChild(h.name,M.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,f)=>h(f,d)}else o=this.index_.getCompare();const a=e;T(a.numChildren()===this.limit_,"");const l=new z(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),c=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,u,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const f=d==null?1:o(d,l);if(c&&!r.isEmpty()&&f>=0)return s!=null&&s.trackChildChange(ea(n,r,h)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Zo(n,h));const v=a.updateImmediateChild(n,M.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(s!=null&&s.trackChildChange(fs(d.name,d.node)),v.updateImmediateChild(d.name,d.node)):v}}else return r.isEmpty()?e:c&&o(u,l)>=0?(s!=null&&(s.trackChildChange(Zo(u.name,u.node)),s.trackChildChange(fs(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,M.EMPTY_NODE)):e}}/**
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
 */class vm{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ve}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return T(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return T(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ds}hasEnd(){return this.endSet_}getIndexEndValue(){return T(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return T(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ni}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return T(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ve}copy(){const e=new vm;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function $P(t){return t.loadsAllData()?new ym(t.getIndex()):t.hasLimit()?new FP(t):new ta(t)}function Wv(t){const e={};if(t.isDefault())return e;let n;return t.index_===ve?n="$priority":t.index_===MP?n="$value":t.index_===Xi?n="$key":(T(t.index_ instanceof DP,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=$e(n),t.startSet_&&(e.startAt=$e(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+$e(t.indexStartName_))),t.endSet_&&(e.endAt=$e(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+$e(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function qv(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ve&&(e.i=t.index_.toString()),e}/**
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
 */class Pu extends jC{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Aa("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(T(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Pu.getListenId_(e,r),a={};this.listens_[o]=a;const l=Wv(e._queryParams);this.restRequest_(s+".json",l,(u,c)=>{let h=c;if(u===404&&(h=null,u=null),u===null&&this.onDataUpdate_(s,h,!1,r),cs(this.listens_,o)===a){let d;u?u===401?d="permission_denied":d="rest_error:"+u:d="ok",i(d,null)}})}unlisten(e,n){const r=Pu.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Wv(e._queryParams),r=e._path.toString(),i=new Zp;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+xs(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Ko(a.responseText)}catch{Rt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Rt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class UP{constructor(){this.rootNode_=M.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Du(){return{value:null,children:new Map}}function tS(t,e,n){if(q(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=W(e);t.children.has(r)||t.children.set(r,Du());const i=t.children.get(r);e=re(e),tS(i,e,n)}}function Cf(t,e,n){t.value!==null?n(e,t.value):VP(t,(r,i)=>{const s=new ne(e.toString()+"/"+r);Cf(i,s,n)})}function VP(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class BP{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Tt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const Kv=10*1e3,zP=30*1e3,jP=5*60*1e3;class HP{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new BP(e);const r=Kv+(zP-Kv)*Math.random();Eo(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Tt(e,(i,s)=>{s>0&&Fn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Eo(this.reportStats_.bind(this),Math.floor(Math.random()*2*jP))}}/**
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
 */var Xt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Xt||(Xt={}));function nS(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function _m(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function wm(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Ou{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Xt.ACK_USER_WRITE,this.source=nS()}operationForChild(e){if(q(this.path)){if(this.affectedTree.value!=null)return T(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ne(e));return new Ou(J(),n,this.revert)}}else return T(W(this.path)===e,"operationForChild called for unrelated child."),new Ou(re(this.path),this.affectedTree,this.revert)}}/**
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
 */class na{constructor(e,n){this.source=e,this.path=n,this.type=Xt.LISTEN_COMPLETE}operationForChild(e){return q(this.path)?new na(this.source,J()):new na(this.source,re(this.path))}}/**
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
 */class ri{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Xt.OVERWRITE}operationForChild(e){return q(this.path)?new ri(this.source,J(),this.snap.getImmediateChild(e)):new ri(this.source,re(this.path),this.snap)}}/**
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
 */class ra{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Xt.MERGE}operationForChild(e){if(q(this.path)){const n=this.children.subtree(new ne(e));return n.isEmpty()?null:n.value?new ri(this.source,J(),n.value):new ra(this.source,J(),n)}else return T(W(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ra(this.source,re(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class ii{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(q(e))return this.isFullyInitialized()&&!this.filtered_;const n=W(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class WP{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function qP(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(LP(o.childName,o.snapshotNode))}),to(t,i,"child_removed",e,r,n),to(t,i,"child_added",e,r,n),to(t,i,"child_moved",s,r,n),to(t,i,"child_changed",e,r,n),to(t,i,"value",e,r,n),i}function to(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>GP(t,a,l)),o.forEach(a=>{const l=KP(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function KP(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function GP(t,e,n){if(e.childName==null||n.childName==null)throw As("Should only compare child_ events.");const r=new z(e.childName,e.snapshotNode),i=new z(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function bc(t,e){return{eventCache:t,serverCache:e}}function Co(t,e,n,r){return bc(new ii(e,n,r),t.serverCache)}function rS(t,e,n,r){return bc(t.eventCache,new ii(e,n,r))}function Sf(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function si(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Gh;const QP=()=>(Gh||(Gh=new _t(Db)),Gh);class le{constructor(e,n=QP()){this.value=e,this.children=n}static fromObject(e){let n=new le(null);return Tt(e,(r,i)=>{n=n.set(new ne(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:J(),value:this.value};if(q(e))return null;{const r=W(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(re(e),n);return s!=null?{path:Ne(new ne(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(q(e))return this;{const n=W(e),r=this.children.get(n);return r!==null?r.subtree(re(e)):new le(null)}}set(e,n){if(q(e))return new le(n,this.children);{const r=W(e),s=(this.children.get(r)||new le(null)).set(re(e),n),o=this.children.insert(r,s);return new le(this.value,o)}}remove(e){if(q(e))return this.children.isEmpty()?new le(null):new le(null,this.children);{const n=W(e),r=this.children.get(n);if(r){const i=r.remove(re(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new le(null):new le(this.value,s)}else return this}}get(e){if(q(e))return this.value;{const n=W(e),r=this.children.get(n);return r?r.get(re(e)):null}}setTree(e,n){if(q(e))return n;{const r=W(e),s=(this.children.get(r)||new le(null)).setTree(re(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new le(this.value,o)}}fold(e){return this.fold_(J(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Ne(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,J(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(q(e))return null;{const s=W(e),o=this.children.get(s);return o?o.findOnPath_(re(e),Ne(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,J(),n)}foreachOnPath_(e,n,r){if(q(e))return this;{this.value&&r(n,this.value);const i=W(e),s=this.children.get(i);return s?s.foreachOnPath_(re(e),Ne(n,i),r):new le(null)}}foreach(e){this.foreach_(J(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Ne(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class tn{constructor(e){this.writeTree_=e}static empty(){return new tn(new le(null))}}function So(t,e,n){if(q(e))return new tn(new le(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=vt(i,e);return s=s.updateChild(o,n),new tn(t.writeTree_.set(i,s))}else{const i=new le(n),s=t.writeTree_.setTree(e,i);return new tn(s)}}}function Gv(t,e,n){let r=t;return Tt(n,(i,s)=>{r=So(r,Ne(e,i),s)}),r}function Qv(t,e){if(q(e))return tn.empty();{const n=t.writeTree_.setTree(e,new le(null));return new tn(n)}}function Tf(t,e){return gi(t,e)!=null}function gi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(vt(n.path,e)):null}function Yv(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ve,(r,i)=>{e.push(new z(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new z(r,i.value))}),e}function ar(t,e){if(q(e))return t;{const n=gi(t,e);return n!=null?new tn(new le(n)):new tn(t.writeTree_.subtree(e))}}function If(t){return t.writeTree_.isEmpty()}function ps(t,e){return iS(J(),t.writeTree_,e)}function iS(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(T(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=iS(Ne(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Ne(t,".priority"),r)),n}}/**
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
 */function Em(t,e){return lS(e,t)}function YP(t,e,n,r,i){T(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=So(t.visibleWrites,e,n)),t.lastWriteId=r}function XP(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function JP(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);T(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&ZP(a,r.path)?i=!1:Yt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return eD(t),!0;if(r.snap)t.visibleWrites=Qv(t.visibleWrites,r.path);else{const a=r.children;Tt(a,l=>{t.visibleWrites=Qv(t.visibleWrites,Ne(r.path,l))})}return!0}else return!1}function ZP(t,e){if(t.snap)return Yt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Yt(Ne(t.path,n),e))return!0;return!1}function eD(t){t.visibleWrites=sS(t.allWrites,tD,J()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function tD(t){return t.visible}function sS(t,e,n){let r=tn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)Yt(n,o)?(a=vt(n,o),r=So(r,a,s.snap)):Yt(o,n)&&(a=vt(o,n),r=So(r,J(),s.snap.getChild(a)));else if(s.children){if(Yt(n,o))a=vt(n,o),r=Gv(r,a,s.children);else if(Yt(o,n))if(a=vt(o,n),q(a))r=Gv(r,J(),s.children);else{const l=cs(s.children,W(a));if(l){const u=l.getChild(re(a));r=So(r,J(),u)}}}else throw As("WriteRecord should have .snap or .children")}}return r}function oS(t,e,n,r,i){if(!r&&!i){const s=gi(t.visibleWrites,e);if(s!=null)return s;{const o=ar(t.visibleWrites,e);if(If(o))return n;if(n==null&&!Tf(o,J()))return null;{const a=n||M.EMPTY_NODE;return ps(o,a)}}}else{const s=ar(t.visibleWrites,e);if(!i&&If(s))return n;if(!i&&n==null&&!Tf(s,J()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(Yt(u.path,e)||Yt(e,u.path))},a=sS(t.allWrites,o,e),l=n||M.EMPTY_NODE;return ps(a,l)}}}function nD(t,e,n){let r=M.EMPTY_NODE;const i=gi(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ve,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=ar(t.visibleWrites,e);return n.forEachChild(ve,(o,a)=>{const l=ps(ar(s,new ne(o)),a);r=r.updateImmediateChild(o,l)}),Yv(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=ar(t.visibleWrites,e);return Yv(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function rD(t,e,n,r,i){T(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Ne(e,n);if(Tf(t.visibleWrites,s))return null;{const o=ar(t.visibleWrites,s);return If(o)?i.getChild(n):ps(o,i.getChild(n))}}function iD(t,e,n,r){const i=Ne(e,n),s=gi(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=ar(t.visibleWrites,i);return ps(o,r.getNode().getImmediateChild(n))}else return null}function sD(t,e){return gi(t.visibleWrites,e)}function oD(t,e,n,r,i,s,o){let a;const l=ar(t.visibleWrites,e),u=gi(l,J());if(u!=null)a=u;else if(n!=null)a=ps(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],h=o.getCompare(),d=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let f=d.getNext();for(;f&&c.length<i;)h(f,r)!==0&&c.push(f),f=d.getNext();return c}else return[]}function aD(){return{visibleWrites:tn.empty(),allWrites:[],lastWriteId:-1}}function Mu(t,e,n,r){return oS(t.writeTree,t.treePath,e,n,r)}function Cm(t,e){return nD(t.writeTree,t.treePath,e)}function Xv(t,e,n,r){return rD(t.writeTree,t.treePath,e,n,r)}function Lu(t,e){return sD(t.writeTree,Ne(t.treePath,e))}function lD(t,e,n,r,i,s){return oD(t.writeTree,t.treePath,e,n,r,i,s)}function Sm(t,e,n){return iD(t.writeTree,t.treePath,e,n)}function aS(t,e){return lS(Ne(t.treePath,e),t.writeTree)}function lS(t,e){return{treePath:t,writeTree:e}}/**
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
 */class uD{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;T(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),T(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,ea(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Zo(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,fs(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,ea(r,e.snapshotNode,i.oldSnap));else throw As("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class cD{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const uS=new cD;class Tm{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new ii(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Sm(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:si(this.viewCache_),s=lD(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function hD(t){return{filter:t}}function dD(t,e){T(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),T(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function fD(t,e,n,r,i){const s=new uD;let o,a;if(n.type===Xt.OVERWRITE){const u=n;u.source.fromUser?o=kf(t,e,u.path,u.snap,r,i,s):(T(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!q(u.path),o=Fu(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===Xt.MERGE){const u=n;u.source.fromUser?o=mD(t,e,u.path,u.children,r,i,s):(T(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=Nf(t,e,u.path,u.children,r,i,a,s))}else if(n.type===Xt.ACK_USER_WRITE){const u=n;u.revert?o=vD(t,e,u.path,r,i,s):o=gD(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===Xt.LISTEN_COMPLETE)o=yD(t,e,n.path,r,s);else throw As("Unknown operation type: "+n.type);const l=s.getChanges();return pD(e,o,l),{viewCache:o,changes:l}}function pD(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Sf(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(eS(Sf(e)))}}function cS(t,e,n,r,i,s){const o=e.eventCache;if(Lu(r,n)!=null)return e;{let a,l;if(q(n))if(T(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=si(e),c=u instanceof M?u:M.EMPTY_NODE,h=Cm(r,c);a=t.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const u=Mu(r,si(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=W(n);if(u===".priority"){T(hr(n)===1,"Can't have a priority with additional path components");const c=o.getNode();l=e.serverCache.getNode();const h=Xv(r,n,c,l);h!=null?a=t.filter.updatePriority(c,h):a=o.getNode()}else{const c=re(n);let h;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const d=Xv(r,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(u).updateChild(c,d):h=o.getNode().getImmediateChild(u)}else h=Sm(r,u,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),u,h,c,i,s):a=o.getNode()}}return Co(e,a,o.isFullyInitialized()||q(n),t.filter.filtersNodes())}}function Fu(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(q(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),f,null)}else{const f=W(n);if(!l.isCompleteForPath(n)&&hr(n)>1)return e;const g=re(n),w=l.getNode().getImmediateChild(f).updateChild(g,r);f===".priority"?u=c.updatePriority(l.getNode(),w):u=c.updateChild(l.getNode(),f,w,g,uS,null)}const h=rS(e,u,l.isFullyInitialized()||q(n),c.filtersNodes()),d=new Tm(i,h,s);return cS(t,h,n,i,d,a)}function kf(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const c=new Tm(i,e,s);if(q(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Co(e,u,!0,t.filter.filtersNodes());else{const h=W(n);if(h===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=Co(e,u,a.isFullyInitialized(),a.isFiltered());else{const d=re(n),f=a.getNode().getImmediateChild(h);let g;if(q(d))g=r;else{const v=c.getCompleteChild(h);v!=null?WC(d)===".priority"&&v.getChild(KC(d)).isEmpty()?g=v:g=v.updateChild(d,r):g=M.EMPTY_NODE}if(f.equals(g))l=e;else{const v=t.filter.updateChild(a.getNode(),h,g,d,c,o);l=Co(e,v,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Jv(t,e){return t.eventCache.isCompleteForChild(e)}function mD(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const c=Ne(n,l);Jv(e,W(c))&&(a=kf(t,a,c,u,i,s,o))}),r.foreach((l,u)=>{const c=Ne(n,l);Jv(e,W(c))||(a=kf(t,a,c,u,i,s,o))}),a}function Zv(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Nf(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;q(n)?u=r:u=new le(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((h,d)=>{if(c.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),g=Zv(t,f,d);l=Fu(t,l,new ne(h),g,i,s,o,a)}}),u.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!c.hasChild(h)&&!f){const g=e.serverCache.getNode().getImmediateChild(h),v=Zv(t,g,d);l=Fu(t,l,new ne(h),v,i,s,o,a)}}),l}function gD(t,e,n,r,i,s,o){if(Lu(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(q(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Fu(t,e,n,l.getNode().getChild(n),i,s,a,o);if(q(n)){let u=new le(null);return l.getNode().forEachChild(Xi,(c,h)=>{u=u.set(new ne(c),h)}),Nf(t,e,n,u,i,s,a,o)}else return e}else{let u=new le(null);return r.foreach((c,h)=>{const d=Ne(n,c);l.isCompleteForPath(d)&&(u=u.set(c,l.getNode().getChild(d)))}),Nf(t,e,n,u,i,s,a,o)}}function yD(t,e,n,r,i){const s=e.serverCache,o=rS(e,s.getNode(),s.isFullyInitialized()||q(n),s.isFiltered());return cS(t,o,n,r,uS,i)}function vD(t,e,n,r,i,s){let o;if(Lu(r,n)!=null)return e;{const a=new Tm(r,e,i),l=e.eventCache.getNode();let u;if(q(n)||W(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=Mu(r,si(e));else{const h=e.serverCache.getNode();T(h instanceof M,"serverChildren would be complete if leaf node"),c=Cm(r,h)}c=c,u=t.filter.updateFullNode(l,c,s)}else{const c=W(n);let h=Sm(r,c,e.serverCache);h==null&&e.serverCache.isCompleteForChild(c)&&(h=l.getImmediateChild(c)),h!=null?u=t.filter.updateChild(l,c,h,re(n),a,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(l,c,M.EMPTY_NODE,re(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Mu(r,si(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Lu(r,J())!=null,Co(e,u,o,t.filter.filtersNodes())}}/**
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
 */class _D{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new ym(r.getIndex()),s=$P(r);this.processor_=hD(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(M.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(M.EMPTY_NODE,a.getNode(),null),c=new ii(l,o.isFullyInitialized(),i.filtersNodes()),h=new ii(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=bc(h,c),this.eventGenerator_=new WP(this.query_)}get query(){return this.query_}}function wD(t){return t.viewCache_.serverCache.getNode()}function ED(t,e){const n=si(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!q(e)&&!n.getImmediateChild(W(e)).isEmpty())?n.getChild(e):null}function e_(t){return t.eventRegistrations_.length===0}function CD(t,e){t.eventRegistrations_.push(e)}function t_(t,e,n){const r=[];if(n){T(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function n_(t,e,n,r){e.type===Xt.MERGE&&e.source.queryId!==null&&(T(si(t.viewCache_),"We should always have a full cache before handling merges"),T(Sf(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=fD(t.processor_,i,e,n,r);return dD(t.processor_,s.viewCache),T(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,hS(t,s.changes,s.viewCache.eventCache.getNode(),null)}function SD(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ve,(s,o)=>{r.push(fs(s,o))}),n.isFullyInitialized()&&r.push(eS(n.getNode())),hS(t,r,n.getNode(),e)}function hS(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return qP(t.eventGenerator_,e,n,i)}/**
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
 */let $u;class TD{constructor(){this.views=new Map}}function ID(t){T(!$u,"__referenceConstructor has already been defined"),$u=t}function kD(){return T($u,"Reference.ts has not been loaded"),$u}function ND(t){return t.views.size===0}function Im(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return T(s!=null,"SyncTree gave us an op for an invalid query."),n_(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(n_(o,e,n,r));return s}}function RD(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Mu(n,i?r:null),l=!1;a?l=!0:r instanceof M?(a=Cm(n,r),l=!1):(a=M.EMPTY_NODE,l=!1);const u=bc(new ii(a,l,!1),new ii(r,i,!1));return new _D(e,u)}return o}function AD(t,e,n,r,i,s){const o=RD(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),CD(o,n),SD(o,n)}function xD(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=dr(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(t_(u,n,r)),e_(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(t_(l,n,r)),e_(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!dr(t)&&s.push(new(kD())(e._repo,e._path)),{removed:s,events:o}}function dS(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Ji(t,e){let n=null;for(const r of t.views.values())n=n||ED(r,e);return n}function fS(t,e){if(e._queryParams.loadsAllData())return Pc(t);{const r=e._queryIdentifier;return t.views.get(r)}}function pS(t,e){return fS(t,e)!=null}function dr(t){return Pc(t)!=null}function Pc(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Uu;function bD(t){T(!Uu,"__referenceConstructor has already been defined"),Uu=t}function PD(){return T(Uu,"Reference.ts has not been loaded"),Uu}let DD=1;class r_{constructor(e){this.listenProvider_=e,this.syncPointTree_=new le(null),this.pendingWriteTree_=aD(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function OD(t,e,n,r,i){return YP(t.pendingWriteTree_,e,n,r,i),i?Pa(t,new ri(nS(),e,n)):[]}function Ui(t,e,n=!1){const r=XP(t.pendingWriteTree_,e);if(JP(t.pendingWriteTree_,e)){let s=new le(null);return r.snap!=null?s=s.set(J(),!0):Tt(r.children,o=>{s=s.set(new ne(o),!0)}),Pa(t,new Ou(r.path,s,n))}else return[]}function Dc(t,e,n){return Pa(t,new ri(_m(),e,n))}function MD(t,e,n){const r=le.fromObject(n);return Pa(t,new ra(_m(),e,r))}function LD(t,e){return Pa(t,new na(_m(),e))}function FD(t,e,n){const r=km(t,n);if(r){const i=Nm(r),s=i.path,o=i.queryId,a=vt(s,e),l=new na(wm(o),a);return Rm(t,s,l)}else return[]}function Rf(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||pS(o,e))){const l=xD(o,e,n,r);ND(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const c=u.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(s,(d,f)=>dr(f));if(c&&!h){const d=t.syncPointTree_.subtree(s);if(!d.isEmpty()){const f=VD(d);for(let g=0;g<f.length;++g){const v=f[g],w=v.query,m=vS(t,v);t.listenProvider_.startListening(To(w),Vu(t,w),m.hashFn,m.onComplete)}}}!h&&u.length>0&&!r&&(c?t.listenProvider_.stopListening(To(e),null):u.forEach(d=>{const f=t.queryToTagMap.get(Oc(d));t.listenProvider_.stopListening(To(d),f)}))}BD(t,u)}return a}function $D(t,e,n,r){const i=km(t,r);if(i!=null){const s=Nm(i),o=s.path,a=s.queryId,l=vt(o,e),u=new ri(wm(a),l,n);return Rm(t,o,u)}else return[]}function UD(t,e,n,r){const i=km(t,r);if(i){const s=Nm(i),o=s.path,a=s.queryId,l=vt(o,e),u=le.fromObject(n),c=new ra(wm(a),l,u);return Rm(t,o,c)}else return[]}function i_(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,f)=>{const g=vt(d,i);s=s||Ji(f,g),o=o||dr(f)});let a=t.syncPointTree_.get(i);a?(o=o||dr(a),s=s||Ji(a,J())):(a=new TD,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=M.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((f,g)=>{const v=Ji(g,J());v&&(s=s.updateImmediateChild(f,v))}));const u=pS(a,e);if(!u&&!e._queryParams.loadsAllData()){const d=Oc(e);T(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const f=zD();t.queryToTagMap.set(d,f),t.tagToQueryMap.set(f,d)}const c=Em(t.pendingWriteTree_,i);let h=AD(a,e,n,c,s,l);if(!u&&!o&&!r){const d=fS(a,e);h=h.concat(jD(t,e,d))}return h}function mS(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=vt(o,e),u=Ji(a,l);if(u)return u});return oS(i,e,s,n,!0)}function Pa(t,e){return gS(e,t.syncPointTree_,null,Em(t.pendingWriteTree_,J()))}function gS(t,e,n,r){if(q(t.path))return yS(t,e,n,r);{const i=e.get(J());n==null&&i!=null&&(n=Ji(i,J()));let s=[];const o=W(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,c=aS(r,o);s=s.concat(gS(a,l,u,c))}return i&&(s=s.concat(Im(i,t,r,n))),s}}function yS(t,e,n,r){const i=e.get(J());n==null&&i!=null&&(n=Ji(i,J()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=aS(r,o),c=t.operationForChild(o);c&&(s=s.concat(yS(c,a,l,u)))}),i&&(s=s.concat(Im(i,t,r,n))),s}function vS(t,e){const n=e.query,r=Vu(t,n);return{hashFn:()=>(wD(e)||M.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?FD(t,n._path,r):LD(t,n._path);{const s=Lb(i,n);return Rf(t,n,null,s)}}}}function Vu(t,e){const n=Oc(e);return t.queryToTagMap.get(n)}function Oc(t){return t._path.toString()+"$"+t._queryIdentifier}function km(t,e){return t.tagToQueryMap.get(e)}function Nm(t){const e=t.indexOf("$");return T(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ne(t.substr(0,e))}}function Rm(t,e,n){const r=t.syncPointTree_.get(e);T(r,"Missing sync point for query tag that we're tracking");const i=Em(t.pendingWriteTree_,e);return Im(r,n,i,null)}function VD(t){return t.fold((e,n,r)=>{if(n&&dr(n))return[Pc(n)];{let i=[];return n&&(i=dS(n)),Tt(r,(s,o)=>{i=i.concat(o)}),i}})}function To(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(PD())(t._repo,t._path):t}function BD(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Oc(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function zD(){return DD++}function jD(t,e,n){const r=e._path,i=Vu(t,e),s=vS(t,n),o=t.listenProvider_.startListening(To(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)T(!dr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,c,h)=>{if(!q(u)&&c&&dr(c))return[Pc(c).query];{let d=[];return c&&(d=d.concat(dS(c).map(f=>f.query))),Tt(h,(f,g)=>{d=d.concat(g)}),d}});for(let u=0;u<l.length;++u){const c=l[u];t.listenProvider_.stopListening(To(c),Vu(t,c))}}return o}/**
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
 */class Am{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Am(n)}node(){return this.node_}}class xm{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ne(this.path_,e);return new xm(this.syncTree_,n)}node(){return mS(this.syncTree_,this.path_)}}const HD=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},s_=function(t,e,n){if(!t||typeof t!="object")return t;if(T(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return WD(t[".sv"],e,n);if(typeof t[".sv"]=="object")return qD(t[".sv"],e);T(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},WD=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:T(!1,"Unexpected server value: "+t)}},qD=function(t,e,n){t.hasOwnProperty("increment")||T(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&T(!1,"Unexpected increment value: "+r);const i=e.node();if(T(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},KD=function(t,e,n,r){return bm(e,new xm(n,t),r)},GD=function(t,e,n){return bm(t,new Am(e),n)};function bm(t,e,n){const r=t.getPriority().val(),i=s_(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=s_(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Oe(a,nt(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Oe(i))),o.forEachChild(ve,(a,l)=>{const u=bm(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
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
 */class Pm{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Dm(t,e){let n=e instanceof ne?e:new ne(e),r=t,i=W(n);for(;i!==null;){const s=cs(r.node.children,i)||{children:{},childCount:0};r=new Pm(i,r,s),n=re(n),i=W(n)}return r}function Ds(t){return t.node.value}function _S(t,e){t.node.value=e,Af(t)}function wS(t){return t.node.childCount>0}function QD(t){return Ds(t)===void 0&&!wS(t)}function Mc(t,e){Tt(t.node.children,(n,r)=>{e(new Pm(n,t,r))})}function ES(t,e,n,r){n&&!r&&e(t),Mc(t,i=>{ES(i,e,!0,r)}),n&&r&&e(t)}function YD(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Da(t){return new ne(t.parent===null?t.name:Da(t.parent)+"/"+t.name)}function Af(t){t.parent!==null&&XD(t.parent,t.name,t)}function XD(t,e,n){const r=QD(n),i=Fn(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Af(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Af(t))}/**
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
 */const JD=/[\[\].#$\/\u0000-\u001F\u007F]/,ZD=/[\[\].#$\u0000-\u001F\u007F]/,Qh=10*1024*1024,CS=function(t){return typeof t=="string"&&t.length!==0&&!JD.test(t)},SS=function(t){return typeof t=="string"&&t.length!==0&&!ZD.test(t)},eO=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),SS(t)},TS=function(t,e,n){const r=n instanceof ne?new gP(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ar(r));if(typeof e=="function")throw new Error(t+"contains a function "+Ar(r)+" with contents = "+e.toString());if(IC(e))throw new Error(t+"contains "+e.toString()+" "+Ar(r));if(typeof e=="string"&&e.length>Qh/3&&Ic(e)>Qh)throw new Error(t+"contains a string greater than "+Qh+" utf8 bytes "+Ar(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Tt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!CS(o)))throw new Error(t+" contains an invalid key ("+o+") "+Ar(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);yP(r,o),TS(t,a,r),vP(r)}),i&&s)throw new Error(t+' contains ".value" child '+Ar(r)+" in addition to actual children.")}},IS=function(t,e,n,r){if(!(r&&n===void 0)&&!SS(n))throw new Error(VE(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},tO=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),IS(t,e,n,r)},nO=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!CS(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!eO(n))throw new Error(VE(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class rO{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function kS(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!pm(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function NS(t,e,n){kS(t,n),RS(t,r=>pm(r,e))}function yi(t,e,n){kS(t,n),RS(t,r=>Yt(r,e)||Yt(e,r))}function RS(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(iO(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function iO(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();jr&&tt("event: "+n.toString()),xa(r)}}}/**
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
 */const sO="repo_interrupt",oO=25;class aO{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new rO,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Du(),this.transactionQueueTree_=new Pm,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function lO(t,e,n){if(t.stats_=dm(t.repoInfo_),t.forceRestClient_||Vb())t.server_=new Pu(t.repoInfo_,(r,i,s,o)=>{o_(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>a_(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{$e(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Sn(t.repoInfo_,e,(r,i,s,o)=>{o_(t,r,i,s,o)},r=>{a_(t,r)},r=>{cO(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=qb(t.repoInfo_,()=>new HP(t.stats_,t.server_)),t.infoData_=new UP,t.infoSyncTree_=new r_({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Dc(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Om(t,"connected",!1),t.serverSyncTree_=new r_({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);yi(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function uO(t){const n=t.infoData_.getNode(new ne(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function AS(t){return HD({timestamp:uO(t)})}function o_(t,e,n,r,i){t.dataUpdateCount++;const s=new ne(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=Su(n,u=>nt(u));o=UD(t.serverSyncTree_,s,l,i)}else{const l=nt(n);o=$D(t.serverSyncTree_,s,l,i)}else if(r){const l=Su(n,u=>nt(u));o=MD(t.serverSyncTree_,s,l)}else{const l=nt(n);o=Dc(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Lm(t,s)),yi(t.eventQueue_,a,o)}function a_(t,e){Om(t,"connected",e),e===!1&&dO(t)}function cO(t,e){Tt(e,(n,r)=>{Om(t,n,r)})}function Om(t,e,n){const r=new ne("/.info/"+e),i=nt(n);t.infoData_.updateSnapshot(r,i);const s=Dc(t.infoSyncTree_,r,i);yi(t.eventQueue_,r,s)}function hO(t){return t.nextWriteId_++}function dO(t){xS(t,"onDisconnectEvents");const e=AS(t),n=Du();Cf(t.onDisconnect_,J(),(i,s)=>{const o=KD(i,s,t.serverSyncTree_,e);tS(n,i,o)});let r=[];Cf(n,J(),(i,s)=>{r=r.concat(Dc(t.serverSyncTree_,i,s));const o=yO(t,i);Lm(t,o)}),t.onDisconnect_=Du(),yi(t.eventQueue_,J(),r)}function fO(t,e,n){let r;W(e._path)===".info"?r=i_(t.infoSyncTree_,e,n):r=i_(t.serverSyncTree_,e,n),NS(t.eventQueue_,e._path,r)}function l_(t,e,n){let r;W(e._path)===".info"?r=Rf(t.infoSyncTree_,e,n):r=Rf(t.serverSyncTree_,e,n),NS(t.eventQueue_,e._path,r)}function pO(t){t.persistentConnection_&&t.persistentConnection_.interrupt(sO)}function xS(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),tt(n,...e)}function bS(t,e,n){return mS(t.serverSyncTree_,e,n)||M.EMPTY_NODE}function Mm(t,e=t.transactionQueueTree_){if(e||Lc(t,e),Ds(e)){const n=DS(t,e);T(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&mO(t,Da(e),n)}else wS(e)&&Mc(e,n=>{Mm(t,n)})}function mO(t,e,n){const r=n.map(u=>u.currentWriteId),i=bS(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];T(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const h=vt(e,c.path);s=s.updateChild(h,c.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{xS(t,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,c=c.concat(Ui(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Lc(t,Dm(t.transactionQueueTree_,e)),Mm(t,t.transactionQueueTree_),yi(t.eventQueue_,e,c);for(let d=0;d<h.length;d++)xa(h[d])}else{if(u==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Rt("transaction at "+l.toString()+" failed: "+u);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=u}Lm(t,e)}},o)}function Lm(t,e){const n=PS(t,e),r=Da(n),i=DS(t,n);return gO(t,i,r),r}function gO(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=vt(n,l.path);let c=!1,h;if(T(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,h=l.abortReason,i=i.concat(Ui(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=oO)c=!0,h="maxretry",i=i.concat(Ui(t.serverSyncTree_,l.currentWriteId,!0));else{const d=bS(t,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){TS("transaction failed: Data returned ",f,l.path);let g=nt(f);typeof f=="object"&&f!=null&&Fn(f,".priority")||(g=g.updatePriority(d.getPriority()));const w=l.currentWriteId,m=AS(t),p=GD(g,d,m);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=p,l.currentWriteId=hO(t),o.splice(o.indexOf(w),1),i=i.concat(OD(t.serverSyncTree_,l.path,p,l.currentWriteId,l.applyLocally)),i=i.concat(Ui(t.serverSyncTree_,w,!0))}else c=!0,h="nodata",i=i.concat(Ui(t.serverSyncTree_,l.currentWriteId,!0))}yi(t.eventQueue_,n,i),i=[],c&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(h),!1,null))))}Lc(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)xa(r[a]);Mm(t,t.transactionQueueTree_)}function PS(t,e){let n,r=t.transactionQueueTree_;for(n=W(e);n!==null&&Ds(r)===void 0;)r=Dm(r,n),e=re(e),n=W(e);return r}function DS(t,e){const n=[];return OS(t,e,n),n.sort((r,i)=>r.order-i.order),n}function OS(t,e,n){const r=Ds(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Mc(e,i=>{OS(t,i,n)})}function Lc(t,e){const n=Ds(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,_S(e,n.length>0?n:void 0)}Mc(e,r=>{Lc(t,r)})}function yO(t,e){const n=Da(PS(t,e)),r=Dm(t.transactionQueueTree_,e);return YD(r,i=>{Yh(t,i)}),Yh(t,r),ES(r,i=>{Yh(t,i)}),n}function Yh(t,e){const n=Ds(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(T(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(T(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Ui(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?_S(e,void 0):n.length=s+1,yi(t.eventQueue_,Da(e),i);for(let o=0;o<r.length;o++)xa(r[o])}}/**
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
 */function vO(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function _O(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Rt(`Invalid query segment '${n}' in query '${t}'`)}return e}const u_=function(t,e){const n=wO(t),r=n.namespace;n.domain==="firebase.com"&&ti(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&ti("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||bb();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new jb(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new ne(n.pathString)}},wO=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(c,h)),c<h&&(i=vO(t.substring(c,h)));const d=_O(t.substring(Math.min(t.length,h)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const f=e.slice(0,u);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const g=e.indexOf(".");r=e.substring(0,g).toLowerCase(),n=e.substring(g+1),s=r}"ns"in d&&(s=d.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */class MS{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+$e(this.snapshot.exportVal())}}class LS{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class EO{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return T(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Fm{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return q(this._path)?null:WC(this._path)}get ref(){return new $n(this._repo,this._path)}get _queryIdentifier(){const e=qv(this._queryParams),n=cm(e);return n==="{}"?"default":n}get _queryObject(){return qv(this._queryParams)}isEqual(e){if(e=Qe(e),!(e instanceof Fm))return!1;const n=this._repo===e._repo,r=pm(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+mP(this._path)}}class $n extends Fm{constructor(e,n){super(e,n,new vm,!1)}get parent(){const e=KC(this._path);return e===null?null:new $n(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ia{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ne(e),r=xf(this.ref,e);return new ia(this._node.getChild(n),r,ve)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new ia(i,xf(this.ref,r),ve)))}hasChild(e){const n=new ne(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function xf(t,e){return t=Qe(t),W(t._path)===null?tO("child","path",e,!1):IS("child","path",e,!1),new $n(t._repo,Ne(t._path,e))}class $m{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new MS("value",this,new ia(e.snapshotNode,new $n(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new LS(this,e,n):null}matches(e){return e instanceof $m?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Um{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new LS(this,e,n):null}createEvent(e,n){T(e.childName!=null,"Child events should have a childName.");const r=xf(new $n(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new MS(e.type,this,new ia(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Um?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Oa(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,u=(c,h)=>{l_(t._repo,t,a),l(c,h)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new EO(n,s||void 0),a=e==="value"?new $m(o):new Um(e,o);return fO(t._repo,t,a),()=>l_(t._repo,t,a)}function CO(t,e,n,r){return Oa(t,"value",e,n,r)}function SO(t,e,n,r){return Oa(t,"child_added",e,n,r)}function TO(t,e,n,r){return Oa(t,"child_changed",e,n,r)}function IO(t,e,n,r){return Oa(t,"child_moved",e,n,r)}function kO(t,e,n,r){return Oa(t,"child_removed",e,n,r)}ID($n);bD($n);/**
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
 */const NO="FIREBASE_DATABASE_EMULATOR_HOST",bf={};let RO=!1;function AO(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||ti("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),tt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=u_(s,i),a=o.repoInfo,l,u;typeof process<"u"&&process.env&&(u=process.env[NO]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=u_(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const c=i&&l?new _f(_f.OWNER):new zb(t.name,t.options,e);nO("Invalid Firebase Database URL",o),q(o.path)||ti("Database URL must point to the root of a Firebase Database (not including a child path).");const h=bO(a,t,c,new Bb(t.name,n));return new PO(h,t)}function xO(t,e){const n=bf[e];(!n||n[t.key]!==t)&&ti(`Database ${e}(${t.repoInfo_}) has already been deleted.`),pO(t),delete n[t.key]}function bO(t,e,n,r){let i=bf[e.name];i||(i={},bf[e.name]=i);let s=i[t.toURLString()];return s&&ti("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new aO(t,RO,n,r),i[t.toURLString()]=s,s}class PO{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(lO(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new $n(this._repo,J())),this._rootInternal}_delete(){return this._rootInternal!==null&&(xO(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ti("Cannot call "+e+" on a deleted database.")}}function DO(t=nm(),e){return bs(t,"database").getImmediate({identifier:e})}/**
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
 */function OO(t){kb(wr),zt(new xt("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return AO(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Te(Av,xv,t),Te(Av,xv,"esm2017")}Sn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Sn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};OO();var MO="firebase",LO="9.9.4";/**
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
 */Te(MO,LO,"app");var FO=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},R,Vm=Vm||{},L=FO||self;function Bu(){}function Pf(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ma(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function $O(t){return Object.prototype.hasOwnProperty.call(t,Xh)&&t[Xh]||(t[Xh]=++UO)}var Xh="closure_uid_"+(1e9*Math.random()>>>0),UO=0;function VO(t,e,n){return t.call.apply(t.bind,arguments)}function BO(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function qe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?qe=VO:qe=BO,qe.apply(null,arguments)}function El(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Xe(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Er(){this.s=this.s,this.o=this.o}var zO=0;Er.prototype.s=!1;Er.prototype.na=function(){!this.s&&(this.s=!0,this.M(),zO!=0)&&$O(this)};Er.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const FS=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},$S=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i=typeof t=="string"?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function jO(t){e:{var e=OM;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function c_(t){return Array.prototype.concat.apply([],arguments)}function Bm(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function zu(t){return/^[\s\xa0]*$/.test(t)}var h_=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function at(t,e){return t.indexOf(e)!=-1}function Jh(t,e){return t<e?-1:t>e?1:0}var lt;e:{var d_=L.navigator;if(d_){var f_=d_.userAgent;if(f_){lt=f_;break e}}lt=""}function zm(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function US(t){const e={};for(const n in t)e[n]=t[n];return e}var p_="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function VS(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<p_.length;s++)n=p_[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function jm(t){return jm[" "](t),t}jm[" "]=Bu;function HO(t){var e=KO;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var WO=at(lt,"Opera"),ms=at(lt,"Trident")||at(lt,"MSIE"),BS=at(lt,"Edge"),Df=BS||ms,zS=at(lt,"Gecko")&&!(at(lt.toLowerCase(),"webkit")&&!at(lt,"Edge"))&&!(at(lt,"Trident")||at(lt,"MSIE"))&&!at(lt,"Edge"),qO=at(lt.toLowerCase(),"webkit")&&!at(lt,"Edge");function jS(){var t=L.document;return t?t.documentMode:void 0}var ju;e:{var Zh="",ed=function(){var t=lt;if(zS)return/rv:([^\);]+)(\)|;)/.exec(t);if(BS)return/Edge\/([\d\.]+)/.exec(t);if(ms)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(qO)return/WebKit\/(\S+)/.exec(t);if(WO)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(ed&&(Zh=ed?ed[1]:""),ms){var td=jS();if(td!=null&&td>parseFloat(Zh)){ju=String(td);break e}}ju=Zh}var KO={};function GO(){return HO(function(){let t=0;const e=h_(String(ju)).split("."),n=h_("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Jh(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Jh(i[2].length==0,s[2].length==0)||Jh(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var Of;if(L.document&&ms){var m_=jS();Of=m_||parseInt(ju,10)||void 0}else Of=void 0;var QO=Of,YO=function(){if(!L.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{L.addEventListener("test",Bu,e),L.removeEventListener("test",Bu,e)}catch{}return t}();function it(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}it.prototype.h=function(){this.defaultPrevented=!0};function sa(t,e){if(it.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(zS){e:{try{jm(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:XO[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&sa.Z.h.call(this)}}Xe(sa,it);var XO={2:"touch",3:"pen",4:"mouse"};sa.prototype.h=function(){sa.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var La="closure_listenable_"+(1e6*Math.random()|0),JO=0;function ZO(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++JO,this.ca=this.fa=!1}function Fc(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function $c(t){this.src=t,this.g={},this.h=0}$c.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Lf(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new ZO(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};function Mf(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=FS(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Fc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Lf(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}var Hm="closure_lm_"+(1e6*Math.random()|0),nd={};function HS(t,e,n,r,i){if(r&&r.once)return qS(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)HS(t,e[s],n,r,i);return null}return n=Km(n),t&&t[La]?t.N(e,n,Ma(r)?!!r.capture:!!r,i):WS(t,e,n,!1,r,i)}function WS(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Ma(i)?!!i.capture:!!i,a=qm(t);if(a||(t[Hm]=a=new $c(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=eM(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)YO||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(GS(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function eM(){function t(n){return e.call(t.src,t.listener,n)}var e=tM;return t}function qS(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)qS(t,e[s],n,r,i);return null}return n=Km(n),t&&t[La]?t.O(e,n,Ma(r)?!!r.capture:!!r,i):WS(t,e,n,!0,r,i)}function KS(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)KS(t,e[s],n,r,i);else r=Ma(r)?!!r.capture:!!r,n=Km(n),t&&t[La]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Lf(s,n,r,i),-1<n&&(Fc(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=qm(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Lf(e,n,r,i)),(n=-1<t?e[t]:null)&&Wm(n))}function Wm(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[La])Mf(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(GS(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=qm(e))?(Mf(n,t),n.h==0&&(n.src=null,e[Hm]=null)):Fc(t)}}}function GS(t){return t in nd?nd[t]:nd[t]="on"+t}function tM(t,e){if(t.ca)t=!0;else{e=new sa(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&Wm(t),t=n.call(r,e)}return t}function qm(t){return t=t[Hm],t instanceof $c?t:null}var rd="__closure_events_fn_"+(1e9*Math.random()>>>0);function Km(t){return typeof t=="function"?t:(t[rd]||(t[rd]=function(e){return t.handleEvent(e)}),t[rd])}function Be(){Er.call(this),this.i=new $c(this),this.P=this,this.I=null}Xe(Be,Er);Be.prototype[La]=!0;Be.prototype.removeEventListener=function(t,e,n,r){KS(this,t,e,n,r)};function Ke(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new it(e,t);else if(e instanceof it)e.target=e.target||t;else{var i=e;e=new it(r,t),VS(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Cl(o,r,!0,e)&&i}if(o=e.g=t,i=Cl(o,r,!0,e)&&i,i=Cl(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Cl(o,r,!1,e)&&i}Be.prototype.M=function(){if(Be.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Fc(n[r]);delete t.g[e],t.h--}}this.I=null};Be.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Be.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Cl(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,l=o.ia||o.src;o.fa&&Mf(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Gm=L.JSON.stringify;function nM(){var t=YS;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class rM{constructor(){this.h=this.g=null}add(e,n){const r=QS.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var QS=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new iM,t=>t.reset());class iM{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function sM(t){L.setTimeout(()=>{throw t},0)}function Qm(t,e){Ff||oM(),$f||(Ff(),$f=!0),YS.add(t,e)}var Ff;function oM(){var t=L.Promise.resolve(void 0);Ff=function(){t.then(aM)}}var $f=!1,YS=new rM;function aM(){for(var t;t=nM();){try{t.h.call(t.g)}catch(n){sM(n)}var e=QS;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}$f=!1}function Uc(t,e){Be.call(this),this.h=t||1,this.g=e||L,this.j=qe(this.kb,this),this.l=Date.now()}Xe(Uc,Be);R=Uc.prototype;R.da=!1;R.S=null;R.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Ke(this,"tick"),this.da&&(Ym(this),this.start()))}};R.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ym(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}R.M=function(){Uc.Z.M.call(this),Ym(this),delete this.g};function Xm(t,e,n){if(typeof t=="function")n&&(t=qe(t,n));else if(t&&typeof t.handleEvent=="function")t=qe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:L.setTimeout(t,e||0)}function XS(t){t.g=Xm(()=>{t.g=null,t.i&&(t.i=!1,XS(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class lM extends Er{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:XS(this)}M(){super.M(),this.g&&(L.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function oa(t){Er.call(this),this.h=t,this.g={}}Xe(oa,Er);var g_=[];function JS(t,e,n,r){Array.isArray(n)||(n&&(g_[0]=n.toString()),n=g_);for(var i=0;i<n.length;i++){var s=HS(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function ZS(t){zm(t.g,function(e,n){this.g.hasOwnProperty(n)&&Wm(e)},t),t.g={}}oa.prototype.M=function(){oa.Z.M.call(this),ZS(this)};oa.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Vc(){this.g=!0}Vc.prototype.Aa=function(){this.g=!1};function uM(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function cM(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Vi(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+dM(t,n)+(r?" "+r:"")})}function hM(t,e){t.info(function(){return"TIMEOUT: "+e})}Vc.prototype.info=function(){};function dM(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Gm(n)}catch{return e}}var vi={},y_=null;function Bc(){return y_=y_||new Be}vi.Ma="serverreachability";function eT(t){it.call(this,vi.Ma,t)}Xe(eT,it);function aa(t){const e=Bc();Ke(e,new eT(e))}vi.STAT_EVENT="statevent";function tT(t,e){it.call(this,vi.STAT_EVENT,t),this.stat=e}Xe(tT,it);function ut(t){const e=Bc();Ke(e,new tT(e,t))}vi.Na="timingevent";function nT(t,e){it.call(this,vi.Na,t),this.size=e}Xe(nT,it);function Fa(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return L.setTimeout(function(){t()},e)}var zc={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},rT={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Jm(){}Jm.prototype.h=null;function v_(t){return t.h||(t.h=t.i())}function iT(){}var $a={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Zm(){it.call(this,"d")}Xe(Zm,it);function eg(){it.call(this,"c")}Xe(eg,it);var Uf;function jc(){}Xe(jc,Jm);jc.prototype.g=function(){return new XMLHttpRequest};jc.prototype.i=function(){return{}};Uf=new jc;function Ua(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new oa(this),this.P=fM,t=Df?125:void 0,this.W=new Uc(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new sT}function sT(){this.i=null,this.g="",this.h=!1}var fM=45e3,Vf={},Hu={};R=Ua.prototype;R.setTimeout=function(t){this.P=t};function Bf(t,e,n){t.K=1,t.v=Wc(Pn(e)),t.s=n,t.U=!0,oT(t,null)}function oT(t,e){t.F=Date.now(),Va(t),t.A=Pn(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),fT(n.h,"t",r),t.C=0,n=t.l.H,t.h=new sT,t.g=DT(t.l,n?e:null,!t.s),0<t.O&&(t.L=new lM(qe(t.Ia,t,t.g),t.O)),JS(t.V,t.g,"readystatechange",t.gb),e=t.H?US(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),aa(),uM(t.j,t.u,t.A,t.m,t.X,t.s)}R.gb=function(t){t=t.target;const e=this.L;e&&En(t)==3?e.l():this.Ia(t)};R.Ia=function(t){try{if(t==this.g)e:{const c=En(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>c)&&(c!=3||Df||this.g&&(this.h.h||this.g.ga()||C_(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?aa(3):aa(2)),Hc(this);var n=this.g.ba();this.N=n;t:if(aT(this)){var r=C_(this.g);t="";var i=r.length,s=En(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Lr(this),Io(this);var o="";break t}this.h.i=new L.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,cM(this.j,this.u,this.A,this.m,this.X,c,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!zu(a)){var u=a;break t}}u=null}if(n=u)Vi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,zf(this,n);else{this.i=!1,this.o=3,ut(12),Lr(this),Io(this);break e}}this.U?(lT(this,c,o),Df&&this.i&&c==3&&(JS(this.V,this.W,"tick",this.fb),this.W.start())):(Vi(this.j,this.m,o,null),zf(this,o)),c==4&&Lr(this),this.i&&!this.I&&(c==4?AT(this.l,this):(this.i=!1,Va(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ut(12)):(this.o=0,ut(13)),Lr(this),Io(this)}}}catch{}finally{}};function aT(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function lT(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=pM(t,n),i==Hu){e==4&&(t.o=4,ut(14),r=!1),Vi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Vf){t.o=4,ut(15),Vi(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Vi(t.j,t.m,i,null),zf(t,i);aT(t)&&i!=Hu&&i!=Vf&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ut(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),ug(e),e.L=!0,ut(11))):(Vi(t.j,t.m,n,"[Invalid Chunked Response]"),Lr(t),Io(t))}R.fb=function(){if(this.g){var t=En(this.g),e=this.g.ga();this.C<e.length&&(Hc(this),lT(this,t,e),this.i&&t!=4&&Va(this))}};function pM(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Hu:(n=Number(e.substring(n,r)),isNaN(n)?Vf:(r+=1,r+n>e.length?Hu:(e=e.substr(r,n),t.C=r+n,e)))}R.cancel=function(){this.I=!0,Lr(this)};function Va(t){t.Y=Date.now()+t.P,uT(t,t.P)}function uT(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Fa(qe(t.eb,t),e)}function Hc(t){t.B&&(L.clearTimeout(t.B),t.B=null)}R.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(hM(this.j,this.A),this.K!=2&&(aa(),ut(17)),Lr(this),this.o=2,Io(this)):uT(this,this.Y-t)};function Io(t){t.l.G==0||t.I||AT(t.l,t)}function Lr(t){Hc(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Ym(t.W),ZS(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function zf(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||jf(n.i,t))){if(n.I=t.N,!t.J&&jf(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Gu(n),Gc(n);else break e;lg(n),ut(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=Fa(qe(n.ab,n),6e3));if(1>=gT(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Fr(n,11)}else if((t.J||n.g==t)&&Gu(n),!zu(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.U=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.J=u[1],n.la=u[2];const c=u[3];c!=null&&(n.ma=c,n.h.info("VER="+n.ma));const h=u[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const g=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var s=r.i;!s.g&&(at(g,"spdy")||at(g,"quic")||at(g,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(rg(s,s.h),s.h=null))}if(r.D){const v=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.sa=v,he(r.F,r.D,v))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=PT(r,r.H?r.la:null,r.W),o.J){yT(r.i,o);var a=o,l=r.K;l&&a.setTimeout(l),a.B&&(Hc(a),Va(a)),r.g=o}else NT(r);0<n.l.length&&Qc(n)}else u[0]!="stop"&&u[0]!="close"||Fr(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Fr(n,7):ag(n):u[0]!="noop"&&n.j&&n.j.wa(u),n.A=0)}}aa(4)}catch{}}function mM(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(Pf(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function tg(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Pf(t)||typeof t=="string")$S(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(Pf(t)||typeof t=="string"){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=mM(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function Os(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Os)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}R=Os.prototype;R.R=function(){ng(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};R.T=function(){return ng(this),this.g.concat()};function ng(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];oi(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],oi(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}R.get=function(t,e){return oi(this.h,t)?this.h[t]:e};R.set=function(t,e){oi(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};R.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};function oi(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var cT=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function gM(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ai(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof ai){this.g=e!==void 0?e:t.g,Wu(this,t.j),this.s=t.s,qu(this,t.i),Ku(this,t.m),this.l=t.l,e=t.h;var n=new la;n.i=e.i,e.g&&(n.g=new Os(e.g),n.h=e.h),__(this,n),this.o=t.o}else t&&(n=String(t).match(cT))?(this.g=!!e,Wu(this,n[1]||"",!0),this.s=ko(n[2]||""),qu(this,n[3]||"",!0),Ku(this,n[4]),this.l=ko(n[5]||"",!0),__(this,n[6]||"",!0),this.o=ko(n[7]||"")):(this.g=!!e,this.h=new la(null,this.g))}ai.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ao(e,w_,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ao(e,w_,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(ao(n,n.charAt(0)=="/"?EM:wM,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ao(n,SM)),t.join("")};function Pn(t){return new ai(t)}function Wu(t,e,n){t.j=n?ko(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function qu(t,e,n){t.i=n?ko(e,!0):e}function Ku(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function __(t,e,n){e instanceof la?(t.h=e,TM(t.h,t.g)):(n||(e=ao(e,CM)),t.h=new la(e,t.g))}function he(t,e,n){t.h.set(e,n)}function Wc(t){return he(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function yM(t){return t instanceof ai?Pn(t):new ai(t,void 0)}function vM(t,e,n,r){var i=new ai(null,void 0);return t&&Wu(i,t),e&&qu(i,e),n&&Ku(i,n),r&&(i.l=r),i}function ko(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ao(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,_M),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function _M(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var w_=/[#\/\?@]/g,wM=/[#\?:]/g,EM=/[#\?]/g,CM=/[#\?@]/g,SM=/#/g;function la(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Cr(t){t.g||(t.g=new Os,t.h=0,t.i&&gM(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}R=la.prototype;R.add=function(t,e){Cr(this),this.i=null,t=Ms(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function hT(t,e){Cr(t),e=Ms(t,e),oi(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,oi(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&ng(t)))}function dT(t,e){return Cr(t),e=Ms(t,e),oi(t.g.h,e)}R.forEach=function(t,e){Cr(this),this.g.forEach(function(n,r){$S(n,function(i){t.call(e,i,r,this)},this)},this)};R.T=function(){Cr(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n};R.R=function(t){Cr(this);var e=[];if(typeof t=="string")dT(this,t)&&(e=c_(e,this.g.get(Ms(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=c_(e,t[n])}return e};R.set=function(t,e){return Cr(this),this.i=null,t=Ms(this,t),dT(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};R.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function fT(t,e,n){hT(t,e),0<n.length&&(t.i=null,t.g.set(Ms(t,e),Bm(n)),t.h+=n.length)}R.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;r[s]!==""&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};function Ms(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function TM(t,e){e&&!t.j&&(Cr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(hT(this,r),fT(this,i,n))},t)),t.j=e}var IM=class{constructor(t,e){this.h=t,this.g=e}};function pT(t){this.l=t||kM,L.PerformanceNavigationTiming?(t=L.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(L.g&&L.g.Ea&&L.g.Ea()&&L.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var kM=10;function mT(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function gT(t){return t.h?1:t.g?t.g.size:0}function jf(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function rg(t,e){t.g?t.g.add(e):t.h=e}function yT(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}pT.prototype.cancel=function(){if(this.i=vT(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function vT(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Bm(t.i)}function ig(){}ig.prototype.stringify=function(t){return L.JSON.stringify(t,void 0)};ig.prototype.parse=function(t){return L.JSON.parse(t,void 0)};function NM(){this.g=new ig}function RM(t,e,n){const r=n||"";try{tg(t,function(i,s){let o=i;Ma(i)&&(o=Gm(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function AM(t,e){const n=new Vc;if(L.Image){const r=new Image;r.onload=El(Sl,n,r,"TestLoadImage: loaded",!0,e),r.onerror=El(Sl,n,r,"TestLoadImage: error",!1,e),r.onabort=El(Sl,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=El(Sl,n,r,"TestLoadImage: timeout",!1,e),L.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Sl(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Ba(t){this.l=t.$b||null,this.j=t.ib||!1}Xe(Ba,Jm);Ba.prototype.g=function(){return new qc(this.l,this.j)};Ba.prototype.i=function(t){return function(){return t}}({});function qc(t,e){Be.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=sg,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Xe(qc,Be);var sg=0;R=qc.prototype;R.open=function(t,e){if(this.readyState!=sg)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ua(this)};R.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||L).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};R.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,za(this)),this.readyState=sg};R.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ua(this)),this.g&&(this.readyState=3,ua(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof L.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;_T(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function _T(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}R.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?za(this):ua(this),this.readyState==3&&_T(this)}};R.Ua=function(t){this.g&&(this.response=this.responseText=t,za(this))};R.Ta=function(t){this.g&&(this.response=t,za(this))};R.ha=function(){this.g&&za(this)};function za(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ua(t)}R.setRequestHeader=function(t,e){this.v.append(t,e)};R.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};R.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ua(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(qc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var xM=L.JSON.parse;function Ie(t){Be.call(this),this.headers=new Os,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=wT,this.K=this.L=!1}Xe(Ie,Be);var wT="",bM=/^https?$/i,PM=["POST","PUT"];R=Ie.prototype;R.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Uf.g(),this.C=this.u?v_(this.u):v_(Uf),this.g.onreadystatechange=qe(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){E_(this,s);return}t=n||"";const i=new Os(this.headers);r&&tg(r,function(s,o){i.set(o,s)}),r=jO(i.T()),n=L.FormData&&t instanceof L.FormData,!(0<=FS(PM,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(s,o){this.g.setRequestHeader(o,s)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{ST(this),0<this.B&&((this.K=DM(this.g))?(this.g.timeout=this.B,this.g.ontimeout=qe(this.pa,this)):this.A=Xm(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){E_(this,s)}};function DM(t){return ms&&GO()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function OM(t){return t.toLowerCase()=="content-type"}R.pa=function(){typeof Vm<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ke(this,"timeout"),this.abort(8))};function E_(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,ET(t),Kc(t)}function ET(t){t.D||(t.D=!0,Ke(t,"complete"),Ke(t,"error"))}R.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ke(this,"complete"),Ke(this,"abort"),Kc(this))};R.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Kc(this,!0)),Ie.Z.M.call(this)};R.Fa=function(){this.s||(this.F||this.v||this.l?CT(this):this.cb())};R.cb=function(){CT(this)};function CT(t){if(t.h&&typeof Vm<"u"&&(!t.C[1]||En(t)!=4||t.ba()!=2)){if(t.v&&En(t)==4)Xm(t.Fa,0,t);else if(Ke(t,"readystatechange"),En(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(cT)[1]||null;if(!i&&L.self&&L.self.location){var s=L.self.location.protocol;i=s.substr(0,s.length-1)}r=!bM.test(i?i.toLowerCase():"")}n=r}if(n)Ke(t,"complete"),Ke(t,"success");else{t.m=6;try{var o=2<En(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",ET(t)}}finally{Kc(t)}}}}function Kc(t,e){if(t.g){ST(t);const n=t.g,r=t.C[0]?Bu:null;t.g=null,t.C=null,e||Ke(t,"ready");try{n.onreadystatechange=r}catch{}}}function ST(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(L.clearTimeout(t.A),t.A=null)}function En(t){return t.g?t.g.readyState:0}R.ba=function(){try{return 2<En(this)?this.g.status:-1}catch{return-1}};R.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};R.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),xM(e)}};function C_(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case wT:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}R.Da=function(){return this.m};R.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function MM(t){let e="";return zm(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function og(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=MM(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):he(t,e,n))}function no(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function TT(t){this.za=0,this.l=[],this.h=new Vc,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=no("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=no("baseRetryDelayMs",5e3,t),this.$a=no("retryDelaySeedMs",1e4,t),this.Ya=no("forwardChannelMaxRetries",2,t),this.ra=no("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new pT(t&&t.concurrentRequestLimit),this.Ca=new NM,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}R=TT.prototype;R.ma=8;R.G=1;function ag(t){if(IT(t),t.G==3){var e=t.V++,n=Pn(t.F);he(n,"SID",t.J),he(n,"RID",e),he(n,"TYPE","terminate"),ja(t,n),e=new Ua(t,t.h,e,void 0),e.K=2,e.v=Wc(Pn(n)),n=!1,L.navigator&&L.navigator.sendBeacon&&(n=L.navigator.sendBeacon(e.v.toString(),"")),!n&&L.Image&&(new Image().src=e.v,n=!0),n||(e.g=DT(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Va(e)}bT(t)}R.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function Gc(t){t.g&&(ug(t),t.g.cancel(),t.g=null)}function IT(t){Gc(t),t.u&&(L.clearTimeout(t.u),t.u=null),Gu(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&L.clearTimeout(t.m),t.m=null)}function id(t,e){t.l.push(new IM(t.Za++,e)),t.G==3&&Qc(t)}function Qc(t){mT(t.i)||t.m||(t.m=!0,Qm(t.Ha,t),t.C=0)}function LM(t,e){return gT(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=Fa(qe(t.Ha,t,e),xT(t,t.C)),t.C++,!0)}R.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new Ua(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=US(s),VS(s,this.P)):s=this.P),this.o===null&&(i.H=s),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=kT(this,i,e),n=Pn(this.F),he(n,"RID",t),he(n,"CVER",22),this.D&&he(n,"X-HTTP-Session-Id",this.D),ja(this,n),this.o&&s&&og(n,this.o,s),rg(this.i,i),this.Ra&&he(n,"TYPE","init"),this.ja?(he(n,"$req",e),he(n,"SID","null"),i.$=!0,Bf(i,n,null)):Bf(i,n,e),this.G=2}}else this.G==3&&(t?S_(this,t):this.l.length==0||mT(this.i)||S_(this))};function S_(t,e){var n;e?n=e.m:n=t.V++;const r=Pn(t.F);he(r,"SID",t.J),he(r,"RID",n),he(r,"AID",t.U),ja(t,r),t.o&&t.s&&og(r,t.o,t.s),n=new Ua(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=kT(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),rg(t.i,n),Bf(n,r,e)}function ja(t,e){t.j&&tg({},function(n,r){he(e,r,n)})}function kT(t,e,n){n=Math.min(t.l.length,n);var r=t.j?qe(t.j.Oa,t.j,t):null;e:{var i=t.l;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{RM(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function NT(t){t.g||t.u||(t.Y=1,Qm(t.Ga,t),t.A=0)}function lg(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=Fa(qe(t.Ga,t),xT(t,t.A)),t.A++,!0)}R.Ga=function(){if(this.u=null,RT(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Fa(qe(this.bb,this),t)}};R.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ut(10),Gc(this),RT(this))};function ug(t){t.B!=null&&(L.clearTimeout(t.B),t.B=null)}function RT(t){t.g=new Ua(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=Pn(t.oa);he(e,"RID","rpc"),he(e,"SID",t.J),he(e,"CI",t.N?"0":"1"),he(e,"AID",t.U),ja(t,e),he(e,"TYPE","xmlhttp"),t.o&&t.s&&og(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Wc(Pn(e)),n.s=null,n.U=!0,oT(n,t)}R.ab=function(){this.v!=null&&(this.v=null,Gc(this),lg(this),ut(19))};function Gu(t){t.v!=null&&(L.clearTimeout(t.v),t.v=null)}function AT(t,e){var n=null;if(t.g==e){Gu(t),ug(t),t.g=null;var r=2}else if(jf(t.i,e))n=e.D,yT(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=Bc(),Ke(r,new nT(r,n)),Qc(t)}else NT(t);else if(i=e.o,i==3||i==0&&0<t.I||!(r==1&&LM(t,e)||r==2&&lg(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Fr(t,5);break;case 4:Fr(t,10);break;case 3:Fr(t,6);break;default:Fr(t,2)}}}function xT(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Fr(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=qe(t.jb,t);n||(n=new ai("//www.google.com/images/cleardot.gif"),L.location&&L.location.protocol=="http"||Wu(n,"https"),Wc(n)),AM(n.toString(),r)}else ut(2);t.G=0,t.j&&t.j.va(e),bT(t),IT(t)}R.jb=function(t){t?(this.h.info("Successfully pinged google.com"),ut(2)):(this.h.info("Failed to ping google.com"),ut(1))};function bT(t){t.G=0,t.I=-1,t.j&&((vT(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Bm(t.l),t.l.length=0),t.j.ua())}function PT(t,e,n){let r=yM(n);if(r.i!="")e&&qu(r,e+"."+r.i),Ku(r,r.m);else{const i=L.location;r=vM(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&zm(t.aa,function(i,s){he(r,s,i)}),e=t.D,n=t.sa,e&&n&&he(r,e,n),he(r,"VER",t.ma),ja(t,r),r}function DT(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Ie(new Ba({ib:!0})):new Ie(t.qa),e.L=t.H,e}function OT(){}R=OT.prototype;R.xa=function(){};R.wa=function(){};R.va=function(){};R.ua=function(){};R.Oa=function(){};function Qu(){if(ms&&!(10<=Number(QO)))throw Error("Environmental error: no available transport.")}Qu.prototype.g=function(t,e){return new bt(t,e)};function bt(t,e){Be.call(this),this.g=new TT(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!zu(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!zu(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ls(this)}Xe(bt,Be);bt.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Qm(qe(t.hb,t,e))),ut(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=PT(t,null,t.W),Qc(t)};bt.prototype.close=function(){ag(this.g)};bt.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,id(this.g,e)}else this.v?(e={},e.__data__=Gm(t),id(this.g,e)):id(this.g,t)};bt.prototype.M=function(){this.g.j=null,delete this.j,ag(this.g),delete this.g,bt.Z.M.call(this)};function MT(t){Zm.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Xe(MT,Zm);function LT(){eg.call(this),this.status=1}Xe(LT,eg);function Ls(t){this.g=t}Xe(Ls,OT);Ls.prototype.xa=function(){Ke(this.g,"a")};Ls.prototype.wa=function(t){Ke(this.g,new MT(t))};Ls.prototype.va=function(t){Ke(this.g,new LT)};Ls.prototype.ua=function(){Ke(this.g,"b")};Qu.prototype.createWebChannel=Qu.prototype.g;bt.prototype.send=bt.prototype.u;bt.prototype.open=bt.prototype.m;bt.prototype.close=bt.prototype.close;zc.NO_ERROR=0;zc.TIMEOUT=8;zc.HTTP_ERROR=6;rT.COMPLETE="complete";iT.EventType=$a;$a.OPEN="a";$a.CLOSE="b";$a.ERROR="c";$a.MESSAGE="d";Be.prototype.listen=Be.prototype.N;Ie.prototype.listenOnce=Ie.prototype.O;Ie.prototype.getLastError=Ie.prototype.La;Ie.prototype.getLastErrorCode=Ie.prototype.Da;Ie.prototype.getStatus=Ie.prototype.ba;Ie.prototype.getResponseJson=Ie.prototype.Qa;Ie.prototype.getResponseText=Ie.prototype.ga;Ie.prototype.send=Ie.prototype.ea;var FM=function(){return new Qu},$M=function(){return Bc()},sd=zc,UM=rT,VM=vi,T_={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},BM=Ba,Tl=iT,zM=Ie;const I_="@firebase/firestore";/**
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
 */class pt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}pt.UNAUTHENTICATED=new pt(null),pt.GOOGLE_CREDENTIALS=new pt("google-credentials-uid"),pt.FIRST_PARTY=new pt("first-party-uid"),pt.MOCK_USER=new pt("mock-user");/**
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
 */let Fs="9.9.4";/**
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
 */const li=new Ta("@firebase/firestore");function k_(){return li.logLevel}function P(t,...e){if(li.logLevel<=Y.DEBUG){const n=e.map(cg);li.debug(`Firestore (${Fs}): ${t}`,...n)}}function Dn(t,...e){if(li.logLevel<=Y.ERROR){const n=e.map(cg);li.error(`Firestore (${Fs}): ${t}`,...n)}}function N_(t,...e){if(li.logLevel<=Y.WARN){const n=e.map(cg);li.warn(`Firestore (${Fs}): ${t}`,...n)}}function cg(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function $(t="Unexpected state"){const e=`FIRESTORE (${Fs}) INTERNAL ASSERTION FAILED: `+t;throw Dn(e),new Error(e)}function se(t,e){t||$()}function U(t,e){return t}/**
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
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends jt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Hr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class jM{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class HM{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(pt.UNAUTHENTICATED))}shutdown(){}}class WM{constructor(e){this.t=e,this.currentUser=pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Hr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Hr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{P("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(P("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Hr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(P("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(se(typeof r.accessToken=="string"),new jM(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return se(e===null||typeof e=="string"),new pt(e)}}class qM{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=pt.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(se(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class KM{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new qM(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class GM{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class QM{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=s=>{s.error!=null&&P("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,P("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{P("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?i(s):P("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(se(typeof n.token=="string"),this.A=n.token,new GM(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function YM(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class FT{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=YM(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Z(t,e){return t<e?-1:t>e?1:0}function gs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class Ae{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new D(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new D(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new D(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new D(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ae.fromMillis(Date.now())}static fromDate(e){return Ae.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ae(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Z(this.nanoseconds,e.nanoseconds):Z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class j{constructor(e){this.timestamp=e}static fromTimestamp(e){return new j(e)}static min(){return new j(new Ae(0,0))}static max(){return new j(new Ae(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class ca{constructor(e,n,r){n===void 0?n=0:n>e.length&&$(),r===void 0?r=e.length-n:r>e.length-n&&$(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ca.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ca?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class de extends ca{construct(e,n,r){return new de(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new D(E.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new de(n)}static emptyPath(){return new de([])}}const XM=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class rt extends ca{construct(e,n,r){return new rt(e,n,r)}static isValidIdentifier(e){return XM.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new rt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new D(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new D(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new D(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new D(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new rt(n)}static emptyPath(){return new rt([])}}/**
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
 */class O{constructor(e){this.path=e}static fromPath(e){return new O(de.fromString(e))}static fromName(e){return new O(de.fromString(e).popFirst(5))}static empty(){return new O(de.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&de.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return de.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new O(new de(e.slice()))}}function JM(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=j.fromTimestamp(r===1e9?new Ae(n+1,0):new Ae(n,r));return new fr(i,O.empty(),e)}function ZM(t){return new fr(t.readTime,t.key,-1)}class fr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new fr(j.min(),O.empty(),-1)}static max(){return new fr(j.max(),O.empty(),-1)}}function eL(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=O.comparator(t.documentKey,e.documentKey),n!==0?n:Z(t.largestBatchId,e.largestBatchId))}/**
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
 */const tL="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class nL{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ha(t){if(t.code!==E.FAILED_PRECONDITION||t.message!==tL)throw t;P("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&$(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new S((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof S?n:S.resolve(n)}catch(n){return S.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):S.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):S.reject(n)}static resolve(e){return new S((n,r)=>{n(e)})}static reject(e){return new S((n,r)=>{r(e)})}static waitFor(e){return new S((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=S.resolve(!1);for(const r of e)n=n.next(i=>i?S.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new S((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new S((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Wa(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
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
 */function R_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function $s(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function $T(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */hg.at=-1;class Pe{constructor(e,n){this.comparator=e,this.root=n||je.EMPTY}insert(e,n){return new Pe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,je.BLACK,null,null))}remove(e){return new Pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,je.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Il(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Il(this.root,e,this.comparator,!1)}getReverseIterator(){return new Il(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Il(this.root,e,this.comparator,!0)}}class Il{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class je{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:je.RED,this.left=i!=null?i:je.EMPTY,this.right=s!=null?s:je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new je(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return je.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw $();const e=this.left.check();if(e!==this.right.check())throw $();return e+(this.isRed()?0:1)}}je.EMPTY=null,je.RED=!0,je.BLACK=!1;je.EMPTY=new class{constructor(){this.size=0}get key(){throw $()}get value(){throw $()}get color(){throw $()}get left(){throw $()}get right(){throw $()}copy(t,e,n,r,i){return this}insert(t,e,n){return new je(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class xe{constructor(e){this.comparator=e,this.data=new Pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new A_(this.data.getIterator())}getIteratorFrom(e){return new A_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof xe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new xe(this.comparator);return n.data=e,n}}class A_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class hn{constructor(e){this.fields=e,e.sort(rt.comparator)}static empty(){return new hn([])}unionWith(e){let n=new xe(rt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new hn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return gs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Ye{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Ye(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Ye(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ye.EMPTY_BYTE_STRING=new Ye("");const rL=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function pr(t){if(se(!!t),typeof t=="string"){let e=0;const n=rL.exec(t);if(se(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ce(t.seconds),nanos:Ce(t.nanos)}}function Ce(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ys(t){return typeof t=="string"?Ye.fromBase64String(t):Ye.fromUint8Array(t)}/**
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
 */function UT(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function VT(t){const e=t.mapValue.fields.__previous_value__;return UT(e)?VT(e):e}function ha(t){const e=pr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ae(e.seconds,e.nanos)}/**
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
 */class iL{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class da{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new da("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof da&&e.projectId===this.projectId&&e.database===this.database}}function Yc(t){return t==null}function Yu(t){return t===0&&1/t==-1/0}function sL(t){return typeof t=="number"&&Number.isInteger(t)&&!Yu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const kl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ui(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?UT(t)?4:oL(t)?9007199254740991:10:$()}function dn(t,e){if(t===e)return!0;const n=ui(t);if(n!==ui(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ha(t).isEqual(ha(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=pr(r.timestampValue),o=pr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return ys(r.bytesValue).isEqual(ys(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Ce(r.geoPointValue.latitude)===Ce(i.geoPointValue.latitude)&&Ce(r.geoPointValue.longitude)===Ce(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Ce(r.integerValue)===Ce(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Ce(r.doubleValue),o=Ce(i.doubleValue);return s===o?Yu(s)===Yu(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return gs(t.arrayValue.values||[],e.arrayValue.values||[],dn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(R_(s)!==R_(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!dn(s[a],o[a])))return!1;return!0}(t,e);default:return $()}}function fa(t,e){return(t.values||[]).find(n=>dn(n,e))!==void 0}function vs(t,e){if(t===e)return 0;const n=ui(t),r=ui(e);if(n!==r)return Z(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Z(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Ce(i.integerValue||i.doubleValue),a=Ce(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return x_(t.timestampValue,e.timestampValue);case 4:return x_(ha(t),ha(e));case 5:return Z(t.stringValue,e.stringValue);case 6:return function(i,s){const o=ys(i),a=ys(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=Z(o[l],a[l]);if(u!==0)return u}return Z(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=Z(Ce(i.latitude),Ce(s.latitude));return o!==0?o:Z(Ce(i.longitude),Ce(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=vs(o[l],a[l]);if(u)return u}return Z(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===kl.mapValue&&s===kl.mapValue)return 0;if(i===kl.mapValue)return 1;if(s===kl.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=Z(a[c],u[c]);if(h!==0)return h;const d=vs(o[a[c]],l[u[c]]);if(d!==0)return d}return Z(a.length,u.length)}(t.mapValue,e.mapValue);default:throw $()}}function x_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Z(t,e);const n=pr(t),r=pr(e),i=Z(n.seconds,r.seconds);return i!==0?i:Z(n.nanos,r.nanos)}function Zi(t){return Hf(t)}function Hf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=pr(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ys(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,O.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Hf(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Hf(r.fields[a])}`;return s+"}"}(t.mapValue):$();var e,n}function Wf(t){return!!t&&"integerValue"in t}function dg(t){return!!t&&"arrayValue"in t}function b_(t){return!!t&&"nullValue"in t}function P_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Wl(t){return!!t&&"mapValue"in t}function No(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return $s(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=No(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=No(t.arrayValue.values[n]);return e}return Object.assign({},t)}function oL(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Lt{constructor(e){this.value=e}static empty(){return new Lt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Wl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=No(n)}setAll(e){let n=rt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=No(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Wl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return dn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Wl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){$s(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Lt(No(this.value))}}function BT(t){const e=[];return $s(t.fields,(n,r)=>{const i=new rt([n]);if(Wl(r)){const s=BT(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new hn(e)}/**
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
 */class He{constructor(e,n,r,i,s,o){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new He(e,0,j.min(),j.min(),Lt.empty(),0)}static newFoundDocument(e,n,r){return new He(e,1,n,j.min(),r,0)}static newNoDocument(e,n){return new He(e,2,n,j.min(),Lt.empty(),0)}static newUnknownDocument(e,n){return new He(e,3,n,j.min(),Lt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Lt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Lt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=j.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof He&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new He(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class aL{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ht=null}}function D_(t,e=null,n=[],r=[],i=null,s=null,o=null){return new aL(t,e,n,r,i,s,o)}function fg(t){const e=U(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(i=r).field.canonicalString()+i.op.toString()+Zi(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Yc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Zi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Zi(r)).join(",")),e.ht=n}return e.ht}function lL(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${Zi(r.value)}`;var r}).join(", ")}]`),Yc(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Zi(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Zi(n)).join(",")),`Target(${e})`}function pg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!gL(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!dn(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!M_(t.startAt,e.startAt)&&M_(t.endAt,e.endAt)}function qf(t){return O.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class wt extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,r):new uL(e,n,r):n==="array-contains"?new dL(e,r):n==="in"?new fL(e,r):n==="not-in"?new pL(e,r):n==="array-contains-any"?new mL(e,r):new wt(e,n,r)}static lt(e,n,r){return n==="in"?new cL(e,r):new hL(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(vs(n,this.value)):n!==null&&ui(this.value)===ui(n)&&this.ft(vs(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return $()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class uL extends wt{constructor(e,n,r){super(e,n,r),this.key=O.fromName(r.referenceValue)}matches(e){const n=O.comparator(e.key,this.key);return this.ft(n)}}class cL extends wt{constructor(e,n){super(e,"in",n),this.keys=zT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class hL extends wt{constructor(e,n){super(e,"not-in",n),this.keys=zT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function zT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>O.fromName(r.referenceValue))}class dL extends wt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return dg(n)&&fa(n.arrayValue,this.value)}}class fL extends wt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&fa(this.value.arrayValue,n)}}class pL extends wt{constructor(e,n){super(e,"not-in",n)}matches(e){if(fa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!fa(this.value.arrayValue,n)}}class mL extends wt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!dg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>fa(this.value.arrayValue,r))}}class Xu{constructor(e,n){this.position=e,this.inclusive=n}}class es{constructor(e,n="asc"){this.field=e,this.dir=n}}function gL(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function O_(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=O.comparator(O.fromName(o.referenceValue),n.key):r=vs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function M_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!dn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class qa{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this._t=null,this.wt=null,this.startAt,this.endAt}}function yL(t,e,n,r,i,s,o,a){return new qa(t,e,n,r,i,s,o,a)}function mg(t){return new qa(t)}function L_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function jT(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function HT(t){for(const e of t.filters)if(e.dt())return e.field;return null}function vL(t){return t.collectionGroup!==null}function pa(t){const e=U(t);if(e._t===null){e._t=[];const n=HT(e),r=jT(e);if(n!==null&&r===null)n.isKeyField()||e._t.push(new es(n)),e._t.push(new es(rt.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e._t.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new es(rt.keyField(),s))}}}return e._t}function On(t){const e=U(t);if(!e.wt)if(e.limitType==="F")e.wt=D_(e.path,e.collectionGroup,pa(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of pa(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new es(s.field,o))}const r=e.endAt?new Xu(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Xu(e.startAt.position,e.startAt.inclusive):null;e.wt=D_(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.wt}function Ju(t,e,n){return new qa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ka(t,e){return pg(On(t),On(e))&&t.limitType===e.limitType}function WT(t){return`${fg(On(t))}|lt:${t.limitType}`}function Kf(t){return`Query(target=${lL(On(t))}; limitType=${t.limitType})`}function gg(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):O.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=O_(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,pa(n),r)||n.endAt&&!function(i,s,o){const a=O_(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,pa(n),r))}(t,e)}function _L(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function qT(t){return(e,n)=>{let r=!1;for(const i of pa(t)){const s=wL(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function wL(t,e,n){const r=t.field.isKeyField()?O.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?vs(a,l):$()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return $()}}/**
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
 */function KT(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Yu(e)?"-0":e}}function GT(t){return{integerValue:""+t}}function EL(t,e){return sL(e)?GT(e):KT(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(){this._=void 0}}function CL(t,e,n){return t instanceof ma?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof ga?YT(t,e):t instanceof ya?XT(t,e):function(r,i){const s=QT(r,i),o=F_(s)+F_(r.yt);return Wf(s)&&Wf(r.yt)?GT(o):KT(r.It,o)}(t,e)}function SL(t,e,n){return t instanceof ga?YT(t,e):t instanceof ya?XT(t,e):n}function QT(t,e){return t instanceof Zu?Wf(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class ma extends Xc{}class ga extends Xc{constructor(e){super(),this.elements=e}}function YT(t,e){const n=JT(e);for(const r of t.elements)n.some(i=>dn(i,r))||n.push(r);return{arrayValue:{values:n}}}class ya extends Xc{constructor(e){super(),this.elements=e}}function XT(t,e){let n=JT(e);for(const r of t.elements)n=n.filter(i=>!dn(i,r));return{arrayValue:{values:n}}}class Zu extends Xc{constructor(e,n){super(),this.It=e,this.yt=n}}function F_(t){return Ce(t.integerValue||t.doubleValue)}function JT(t){return dg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class TL{constructor(e,n){this.field=e,this.transform=n}}function IL(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof ga&&r instanceof ga||n instanceof ya&&r instanceof ya?gs(n.elements,r.elements,dn):n instanceof Zu&&r instanceof Zu?dn(n.yt,r.yt):n instanceof ma&&r instanceof ma}(t.transform,e.transform)}class kL{constructor(e,n){this.version=e,this.transformResults=n}}class Tn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Tn}static exists(e){return new Tn(void 0,e)}static updateTime(e){return new Tn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ql(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Jc{}function ZT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new t1(t.key,Tn.none()):new Ga(t.key,t.data,Tn.none());{const n=t.data,r=Lt.empty();let i=new xe(rt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new _i(t.key,r,new hn(i.toArray()),Tn.none())}}function NL(t,e,n){t instanceof Ga?function(r,i,s){const o=r.value.clone(),a=U_(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof _i?function(r,i,s){if(!ql(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=U_(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(e1(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Ro(t,e,n,r){return t instanceof Ga?function(i,s,o,a){if(!ql(i.precondition,s))return o;const l=i.value.clone(),u=V_(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof _i?function(i,s,o,a){if(!ql(i.precondition,s))return o;const l=V_(i.fieldTransforms,a,s),u=s.data;return u.setAll(e1(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return ql(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function RL(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=QT(r.transform,i||null);s!=null&&(n===null&&(n=Lt.empty()),n.set(r.field,s))}return n||null}function $_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&gs(n,r,(i,s)=>IL(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ga extends Jc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class _i extends Jc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function e1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function U_(t,e,n){const r=new Map;se(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,SL(o,a,n[i]))}return r}function V_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,CL(s,o,e))}return r}class t1 extends Jc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class AL extends Jc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class xL{constructor(e){this.count=e}}/**
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
 */var Ee,Q;function bL(t){switch(t){default:return $();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function n1(t){if(t===void 0)return Dn("GRPC error has no .code"),E.UNKNOWN;switch(t){case Ee.OK:return E.OK;case Ee.CANCELLED:return E.CANCELLED;case Ee.UNKNOWN:return E.UNKNOWN;case Ee.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case Ee.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case Ee.INTERNAL:return E.INTERNAL;case Ee.UNAVAILABLE:return E.UNAVAILABLE;case Ee.UNAUTHENTICATED:return E.UNAUTHENTICATED;case Ee.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case Ee.NOT_FOUND:return E.NOT_FOUND;case Ee.ALREADY_EXISTS:return E.ALREADY_EXISTS;case Ee.PERMISSION_DENIED:return E.PERMISSION_DENIED;case Ee.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case Ee.ABORTED:return E.ABORTED;case Ee.OUT_OF_RANGE:return E.OUT_OF_RANGE;case Ee.UNIMPLEMENTED:return E.UNIMPLEMENTED;case Ee.DATA_LOSS:return E.DATA_LOSS;default:return $()}}(Q=Ee||(Ee={}))[Q.OK=0]="OK",Q[Q.CANCELLED=1]="CANCELLED",Q[Q.UNKNOWN=2]="UNKNOWN",Q[Q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Q[Q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Q[Q.NOT_FOUND=5]="NOT_FOUND",Q[Q.ALREADY_EXISTS=6]="ALREADY_EXISTS",Q[Q.PERMISSION_DENIED=7]="PERMISSION_DENIED",Q[Q.UNAUTHENTICATED=16]="UNAUTHENTICATED",Q[Q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Q[Q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Q[Q.ABORTED=10]="ABORTED",Q[Q.OUT_OF_RANGE=11]="OUT_OF_RANGE",Q[Q.UNIMPLEMENTED=12]="UNIMPLEMENTED",Q[Q.INTERNAL=13]="INTERNAL",Q[Q.UNAVAILABLE=14]="UNAVAILABLE",Q[Q.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Us{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){$s(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return $T(this.inner)}size(){return this.innerSize}}/**
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
 */const PL=new Pe(O.comparator);function Mn(){return PL}const r1=new Pe(O.comparator);function lo(...t){let e=r1;for(const n of t)e=e.insert(n.key,n);return e}function i1(t){let e=r1;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function $r(){return Ao()}function s1(){return Ao()}function Ao(){return new Us(t=>t.toString(),(t,e)=>t.isEqual(e))}const DL=new Pe(O.comparator),OL=new xe(O.comparator);function K(...t){let e=OL;for(const n of t)e=e.add(n);return e}const ML=new xe(Z);function o1(){return ML}/**
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
 */class Zc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,Qa.createSynthesizedTargetChangeForCurrentChange(e,n)),new Zc(j.min(),r,o1(),Mn(),K())}}class Qa{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Qa(Ye.EMPTY_BYTE_STRING,n,K(),K(),K())}}/**
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
 */class Kl{constructor(e,n,r,i){this.Tt=e,this.removedTargetIds=n,this.key=r,this.Et=i}}class a1{constructor(e,n){this.targetId=e,this.At=n}}class l1{constructor(e,n,r=Ye.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class B_{constructor(){this.Rt=0,this.bt=j_(),this.Pt=Ye.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=K(),n=K(),r=K();return this.bt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:$()}}),new Qa(this.Pt,this.vt,e,n,r)}Nt(){this.Vt=!1,this.bt=j_()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Mt(e){this.Vt=!0,this.bt=this.bt.remove(e)}Ot(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class LL{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=Mn(),this.qt=z_(),this.Kt=new xe(Z)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const r=this.zt(n);switch(e.state){case 0:this.Ht(n)&&r.Ct(e.resumeToken);break;case 1:r.Ft(),r.St||r.Nt(),r.Ct(e.resumeToken);break;case 2:r.Ft(),r.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(r.$t(),r.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),r.Ct(e.resumeToken));break;default:$()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((r,i)=>{this.Ht(i)&&n(i)})}Yt(e){const n=e.targetId,r=e.At.count,i=this.Xt(n);if(i){const s=i.target;if(qf(s))if(r===0){const o=new O(s.path);this.jt(n,o,He.newNoDocument(o,j.min()))}else se(r===1);else this.Zt(n)!==r&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((s,o)=>{const a=this.Xt(o);if(a){if(s.current&&qf(a.target)){const l=new O(a.target.path);this.Ut.get(l)!==null||this.ee(o,l)||this.jt(o,l,He.newNoDocument(l,e))}s.Dt&&(n.set(o,s.xt()),s.Nt())}});let r=K();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Xt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ut.forEach((s,o)=>o.setReadTime(e));const i=new Zc(e,n,this.Kt,this.Ut,r);return this.Ut=Mn(),this.qt=z_(),this.Kt=new xe(Z),i}Qt(e,n){if(!this.Ht(e))return;const r=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,r),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,r){if(!this.Ht(e))return;const i=this.zt(e);this.ee(e,n)?i.kt(n,1):i.Mt(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),r&&(this.Ut=this.Ut.insert(n,r))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.zt(e).Ot()}zt(e){let n=this.Lt.get(e);return n||(n=new B_,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new xe(Z),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||P("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new B_),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function z_(){return new Pe(O.comparator)}function j_(){return new Pe(O.comparator)}/**
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
 */const FL=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),$L=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class UL{constructor(e,n){this.databaseId=e,this.gt=n}}function ec(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function u1(t,e){return t.gt?e.toBase64():e.toUint8Array()}function VL(t,e){return ec(t,e.toTimestamp())}function In(t){return se(!!t),j.fromTimestamp(function(e){const n=pr(e);return new Ae(n.seconds,n.nanos)}(t))}function yg(t,e){return function(n){return new de(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function c1(t){const e=de.fromString(t);return se(f1(e)),e}function Gf(t,e){return yg(t.databaseId,e.path)}function od(t,e){const n=c1(e);if(n.get(1)!==t.databaseId.projectId)throw new D(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new D(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new O(h1(n))}function Qf(t,e){return yg(t.databaseId,e)}function BL(t){const e=c1(t);return e.length===4?de.emptyPath():h1(e)}function Yf(t){return new de(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function h1(t){return se(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function H_(t,e,n){return{name:Gf(t,e),fields:n.value.mapValue.fields}}function zL(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:$()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.gt?(se(u===void 0||typeof u=="string"),Ye.fromBase64String(u||"")):(se(u===void 0||u instanceof Uint8Array),Ye.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?E.UNKNOWN:n1(l.code);return new D(u,l.message||"")}(o);n=new l1(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=od(t,r.document.name),s=In(r.document.updateTime),o=new Lt({mapValue:{fields:r.document.fields}}),a=He.newFoundDocument(i,s,o),l=r.targetIds||[],u=r.removedTargetIds||[];n=new Kl(l,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=od(t,r.document),s=r.readTime?In(r.readTime):j.min(),o=He.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Kl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=od(t,r.document),s=r.removedTargetIds||[];n=new Kl([],s,i,null)}else{if(!("filter"in e))return $();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new xL(i),o=r.targetId;n=new a1(o,s)}}return n}function jL(t,e){let n;if(e instanceof Ga)n={update:H_(t,e.key,e.value)};else if(e instanceof t1)n={delete:Gf(t,e.key)};else if(e instanceof _i)n={update:H_(t,e.key,e.data),updateMask:ZL(e.fieldMask)};else{if(!(e instanceof AL))return $();n={verify:Gf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof ma)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ga)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ya)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Zu)return{fieldPath:s.field.canonicalString(),increment:o.yt};throw $()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:VL(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:$()}(t,e.precondition)),n}function HL(t,e){return t&&t.length>0?(se(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?In(r.updateTime):In(i);return s.isEqual(j.min())&&(s=In(i)),new kL(s,r.transformResults||[])}(n,e))):[]}function WL(t,e){return{documents:[Qf(t,e.path)]}}function qL(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Qf(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Qf(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length===0)return;const u=l.map(c=>function(h){if(h.op==="=="){if(P_(h.value))return{unaryFilter:{field:Ti(h.field),op:"IS_NAN"}};if(b_(h.value))return{unaryFilter:{field:Ti(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(P_(h.value))return{unaryFilter:{field:Ti(h.field),op:"IS_NOT_NAN"}};if(b_(h.value))return{unaryFilter:{field:Ti(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ti(h.field),op:YL(h.op),value:h.value}}}(c));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:Ti(c.field),direction:QL(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.gt||Yc(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function KL(t){let e=BL(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){se(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=d1(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new es(Bi(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,Yc(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new Xu(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new Xu(d,h)}(n.endAt)),yL(e,i,o,s,a,"F",l,u)}function GL(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return $()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function d1(t){return t?t.unaryFilter!==void 0?[JL(t)]:t.fieldFilter!==void 0?[XL(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>d1(e)).reduce((e,n)=>e.concat(n)):$():[]}function QL(t){return FL[t]}function YL(t){return $L[t]}function Ti(t){return{fieldPath:t.canonicalString()}}function Bi(t){return rt.fromServerFormat(t.fieldPath)}function XL(t){return wt.create(Bi(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return $()}}(t.fieldFilter.op),t.fieldFilter.value)}function JL(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Bi(t.unaryFilter.field);return wt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Bi(t.unaryFilter.field);return wt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Bi(t.unaryFilter.field);return wt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Bi(t.unaryFilter.field);return wt.create(i,"!=",{nullValue:"NULL_VALUE"});default:return $()}}function ZL(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function f1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class eF{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&NL(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ro(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ro(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=s1();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=ZT(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(j.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),K())}isEqual(e){return this.batchId===e.batchId&&gs(this.mutations,e.mutations,(n,r)=>$_(n,r))&&gs(this.baseMutations,e.baseMutations,(n,r)=>$_(n,r))}}class vg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){se(e.mutations.length===r.length);let i=DL;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new vg(e,n,r,i)}}/**
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
 */class tF{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class Wr{constructor(e,n,r,i,s=j.min(),o=j.min(),a=Ye.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Wr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Wr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Wr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class nF{constructor(e){this.re=e}}function rF(t){const e=KL({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ju(e,e.limit,"L"):e}/**
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
 */class iF{constructor(){this.Ye=new sF}addToCollectionParentIndex(e,n){return this.Ye.add(n),S.resolve()}getCollectionParents(e,n){return S.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return S.resolve()}deleteFieldIndex(e,n){return S.resolve()}getDocumentsMatchingTarget(e,n){return S.resolve(null)}getIndexType(e,n){return S.resolve(0)}getFieldIndexes(e,n){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,n){return S.resolve(fr.min())}getMinOffsetFromCollectionGroup(e,n){return S.resolve(fr.min())}updateCollectionGroup(e,n,r){return S.resolve()}updateIndexEntries(e,n){return S.resolve()}}class sF{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new xe(de.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new xe(de.comparator)).toArray()}}/**
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
 */class _s{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new _s(0)}static vn(){return new _s(-1)}}/**
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
 */class oF{constructor(){this.changes=new Us(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,He.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?S.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class aF{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class lF{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.getBaseDocument(e,n,r))).next(i=>(r!==null&&Ro(r.mutation,i,hn.empty(),Ae.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,K()).next(()=>r))}getLocalViewOfDocuments(e,n,r=K()){const i=$r();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=lo();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=$r();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,K()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Mn();const o=Ao(),a=Ao();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof _i)?s=s.insert(u.key,u):c!==void 0&&(o.set(u.key,c.mutation.getFieldMask()),Ro(c.mutation,u,c.mutation.getFieldMask(),Ae.now()))}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new aF(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ao();let i=new Pe((o,a)=>o-a),s=K();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||hn.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||K()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=s1();c.forEach(d=>{if(!s.has(d)){const f=ZT(n.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return S.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return O.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):vL(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):S.resolve($r());let a=-1,l=s;return o.next(u=>S.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?S.resolve():this.getBaseDocument(e,c,h).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,K())).next(c=>({batchId:a,changes:i1(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new O(n)).next(r=>{let i=lo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=lo();return this.indexManager.getCollectionParents(e,i).next(o=>S.forEach(o,a=>{const l=function(u,c){return new qa(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(s=>{s.forEach((a,l)=>{const u=l.getKey();i.get(u)===null&&(i=i.insert(u,He.newInvalidDocument(u)))});let o=lo();return i.forEach((a,l)=>{const u=s.get(a);u!==void 0&&Ro(u.mutation,l,hn.empty(),Ae.now()),gg(n,l)&&(o=o.insert(a,l))}),o})}getBaseDocument(e,n,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):S.resolve(He.newInvalidDocument(n))}}/**
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
 */class uF{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return S.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:In(r.createTime)}),S.resolve()}getNamedQuery(e,n){return S.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(r){return{name:r.name,query:rF(r.bundledQuery),readTime:In(r.readTime)}}(n)),S.resolve()}}/**
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
 */class cF{constructor(){this.overlays=new Pe(O.comparator),this.es=new Map}getOverlay(e,n){return S.resolve(this.overlays.get(n))}getOverlays(e,n){const r=$r();return S.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ue(e,n,s)}),S.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.es.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.es.delete(r)),S.resolve()}getOverlaysForCollection(e,n,r){const i=$r(),s=n.length+1,o=new O(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return S.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Pe((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=$r(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=$r(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return S.resolve(a)}ue(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(r.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new tF(n,r));let s=this.es.get(n);s===void 0&&(s=K(),this.es.set(n,s)),this.es.set(n,s.add(r.key))}}/**
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
 */class _g{constructor(){this.ns=new xe(Me.ss),this.rs=new xe(Me.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const r=new Me(e,n);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.cs(new Me(e,n))}hs(e,n){e.forEach(r=>this.removeReference(r,n))}ls(e){const n=new O(new de([])),r=new Me(n,e),i=new Me(n,e+1),s=[];return this.rs.forEachInRange([r,i],o=>{this.cs(o),s.push(o.key)}),s}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new O(new de([])),r=new Me(n,e),i=new Me(n,e+1);let s=K();return this.rs.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Me(e,0),r=this.ns.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Me{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return O.comparator(e.key,n.key)||Z(e._s,n._s)}static os(e,n){return Z(e._s,n._s)||O.comparator(e.key,n.key)}}/**
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
 */class hF{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new xe(Me.ss)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new eF(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new Me(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,n){return S.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ps(r),s=i<0?0:i;return S.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Me(n,0),i=new Me(n,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([r,i],o=>{const a=this.ys(o._s);s.push(a)}),S.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new xe(Z);return n.forEach(i=>{const s=new Me(i,0),o=new Me(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([s,o],a=>{r=r.add(a._s)})}),S.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;O.isDocumentKey(s)||(s=s.child(""));const o=new Me(new O(s),0);let a=new xe(Z);return this.gs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l._s)),!0)},o),S.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(r=>{const i=this.ys(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){se(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return S.forEach(n.mutations,i=>{const s=new Me(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,n){const r=new Me(n,0),i=this.gs.firstAfterOrEqual(r);return S.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class dF{constructor(e){this.Es=e,this.docs=new Pe(O.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return S.resolve(r?r.document.mutableCopy():He.newInvalidDocument(n))}getEntries(e,n){let r=Mn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():He.newInvalidDocument(i))}),S.resolve(r)}getAllFromCollection(e,n,r){let i=Mn();const s=new O(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||eL(ZM(l),r)<=0||(i=i.insert(l.key,l.mutableCopy()))}return S.resolve(i)}getAllFromCollectionGroup(e,n,r,i){$()}As(e,n){return S.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new fF(this)}getSize(e){return S.resolve(this.size)}}class fF extends oF{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(r)}),S.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
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
 */class pF{constructor(e){this.persistence=e,this.Rs=new Us(n=>fg(n),pg),this.lastRemoteSnapshotVersion=j.min(),this.highestTargetId=0,this.bs=0,this.Ps=new _g,this.targetCount=0,this.vs=_s.Pn()}forEachTarget(e,n){return this.Rs.forEach((r,i)=>n(i)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),S.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new _s(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,S.resolve()}updateTargetData(e,n){return this.Dn(n),S.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Rs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),S.waitFor(s).next(()=>i)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,n){const r=this.Rs.get(n)||null;return S.resolve(r)}addMatchingKeys(e,n,r){return this.Ps.us(n,r),S.resolve()}removeMatchingKeys(e,n,r){this.Ps.hs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),S.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),S.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ps.ds(n);return S.resolve(r)}containsKey(e,n){return S.resolve(this.Ps.containsKey(n))}}/**
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
 */class mF{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new hg(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new pF(this),this.indexManager=new iF,this.remoteDocumentCache=function(r){return new dF(r)}(r=>this.referenceDelegate.xs(r)),this.It=new nF(n),this.Ns=new uF(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new cF,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Vs[e.toKey()];return r||(r=new hF(n,this.referenceDelegate),this.Vs[e.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,r){P("MemoryPersistence","Starting transaction:",e);const i=new gF(this.Ss.next());return this.referenceDelegate.ks(),r(i).next(s=>this.referenceDelegate.Ms(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Os(e,n){return S.or(Object.values(this.Vs).map(r=>()=>r.containsKey(e,n)))}}class gF extends nL{constructor(e){super(),this.currentSequenceNumber=e}}class wg{constructor(e){this.persistence=e,this.Fs=new _g,this.$s=null}static Bs(e){return new wg(e)}get Ls(){if(this.$s)return this.$s;throw $()}addReference(e,n,r){return this.Fs.addReference(r,n),this.Ls.delete(r.toString()),S.resolve()}removeReference(e,n,r){return this.Fs.removeReference(r,n),this.Ls.add(r.toString()),S.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),S.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ls.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}ks(){this.$s=new Set}Ms(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Ls,r=>{const i=O.fromPath(r);return this.Us(e,i).next(s=>{s||n.removeEntry(i,j.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(r=>{r?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return S.or([()=>S.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
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
 */class Eg{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Si=r,this.Di=i}static Ci(e,n){let r=K(),i=K();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Eg(e,n.fromCache,r,i)}}/**
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
 */class yF{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.ki(e,n).next(s=>s||this.Mi(e,n,i,r)).next(s=>s||this.Oi(e,n))}ki(e,n){if(L_(n))return S.resolve(null);let r=On(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Ju(n,null,"F"),r=On(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=K(...s);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Fi(n,a);return this.$i(n,u,o,l.readTime)?this.ki(e,Ju(n,null,"F")):this.Bi(e,u,n,l)}))})))}Mi(e,n,r,i){return L_(n)||i.isEqual(j.min())?this.Oi(e,n):this.Ni.getDocuments(e,r).next(s=>{const o=this.Fi(n,s);return this.$i(n,o,r,i)?this.Oi(e,n):(k_()<=Y.DEBUG&&P("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Kf(n)),this.Bi(e,o,n,JM(i,-1)))})}Fi(e,n){let r=new xe(qT(e));return n.forEach((i,s)=>{gg(e,s)&&(r=r.add(s))}),r}$i(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Oi(e,n){return k_()<=Y.DEBUG&&P("QueryEngine","Using full collection scan to execute query:",Kf(n)),this.Ni.getDocumentsMatchingQuery(e,n,fr.min())}Bi(e,n,r,i){return this.Ni.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class vF{constructor(e,n,r,i){this.persistence=e,this.Li=n,this.It=i,this.Ui=new Pe(Z),this.qi=new Us(s=>fg(s),pg),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(r)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new lF(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function _F(t,e,n,r){return new vF(t,e,n,r)}async function p1(t,e){const n=U(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Qi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=K();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function wF(t,e){const n=U(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let d=S.resolve();return h.forEach(f=>{d=d.next(()=>u.getEntry(a,f)).next(g=>{const v=l.docVersions.get(f);se(v!==null),g.version.compareTo(v)<0&&(c.applyToRemoteDocument(g,l),g.isValidDocument()&&(g.setReadTime(l.commitVersion),u.addEntry(g)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=K();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function m1(t){const e=U(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function EF(t,e){const n=U(t),r=e.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(s,c.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?f=f.withResumeToken(Ye.EMPTY_BYTE_STRING,j.min()).withLastLimboFreeSnapshotVersion(j.min()):c.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(c.resumeToken,r)),i=i.insert(h,f),function(g,v,w){return g.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(d,f,c)&&a.push(n.Cs.updateTargetData(s,f))});let l=Mn(),u=K();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(CF(s,o,e.documentUpdates).next(c=>{l=c.Wi,u=c.zi})),!r.isEqual(j.min())){const c=n.Cs.getLastRemoteSnapshotVersion(s).next(h=>n.Cs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return S.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ui=i,s))}function CF(t,e,n){let r=K(),i=K();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Mn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(j.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):P("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Wi:o,zi:i}})}function SF(t,e){const n=U(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function TF(t,e){const n=U(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Cs.getTargetData(r,e).next(s=>s?(i=s,S.resolve(i)):n.Cs.allocateTargetId(r).next(o=>(i=new Wr(e,o,0,r.currentSequenceNumber),n.Cs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ui.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(r.targetId,r),n.qi.set(e,r.targetId)),r})}async function Xf(t,e,n){const r=U(t),i=r.Ui.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Wa(o))throw o;P("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ui=r.Ui.remove(e),r.qi.delete(i.target)}function W_(t,e,n){const r=U(t);let i=j.min(),s=K();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=U(a),h=c.qi.get(u);return h!==void 0?S.resolve(c.Ui.get(h)):c.Cs.getTargetData(l,u)}(r,o,On(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Li.getDocumentsMatchingQuery(o,e,n?i:j.min(),n?s:K())).next(a=>(IF(r,_L(e),a),{documents:a,Hi:s})))}function IF(t,e,n){let r=j.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ki.set(e,r)}class q_{constructor(){this.activeTargetIds=o1()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class kF{constructor(){this.Lr=new q_,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,r){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new q_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class NF{qr(e){}shutdown(){}}/**
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
 */class K_{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){P("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){P("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const RF={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class AF{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
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
 */class xF extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}co(e,n,r,i,s){const o=this.ao(e,n);P("RestConnection","Sending: ",o,r);const a={};return this.ho(a,i,s),this.lo(e,o,a,r).then(l=>(P("RestConnection","Received: ",l),l),l=>{throw N_("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}fo(e,n,r,i,s,o){return this.co(e,n,r,i,s)}ho(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Fs,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ao(e,n){const r=RF[e];return`${this.oo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,r,i){return new Promise((s,o)=>{const a=new zM;a.listenOnce(UM.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case sd.NO_ERROR:const u=a.getResponseJson();P("Connection","XHR received:",JSON.stringify(u)),s(u);break;case sd.TIMEOUT:P("Connection",'RPC "'+e+'" timed out'),o(new D(E.DEADLINE_EXCEEDED,"Request time out"));break;case sd.HTTP_ERROR:const c=a.getStatus();if(P("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(f){const g=f.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(g)>=0?g:E.UNKNOWN}(h.status);o(new D(d,h.message))}else o(new D(E.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new D(E.UNAVAILABLE,"Connection failed."));break;default:$()}}finally{P("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,r,15)})}_o(e,n,r){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=FM(),o=$M(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new BM({})),this.ho(a.initMessageHeaders,n,r),Tc()||em()||dR()||LE()||fR()||ME()||(a.httpHeadersOverwriteParam="$httpHeaders");const l=i.join("");P("Connection","Creating WebChannel: "+l,a);const u=s.createWebChannel(l,a);let c=!1,h=!1;const d=new AF({Hr:g=>{h?P("Connection","Not sending because WebChannel is closed:",g):(c||(P("Connection","Opening WebChannel transport."),u.open(),c=!0),P("Connection","WebChannel sending:",g),u.send(g))},Jr:()=>u.close()}),f=(g,v,w)=>{g.listen(v,m=>{try{w(m)}catch(p){setTimeout(()=>{throw p},0)}})};return f(u,Tl.EventType.OPEN,()=>{h||P("Connection","WebChannel transport opened.")}),f(u,Tl.EventType.CLOSE,()=>{h||(h=!0,P("Connection","WebChannel transport closed"),d.io())}),f(u,Tl.EventType.ERROR,g=>{h||(h=!0,N_("Connection","WebChannel transport errored:",g),d.io(new D(E.UNAVAILABLE,"The operation could not be completed")))}),f(u,Tl.EventType.MESSAGE,g=>{var v;if(!h){const w=g.data[0];se(!!w);const m=w,p=m.error||((v=m[0])===null||v===void 0?void 0:v.error);if(p){P("Connection","WebChannel received error:",p);const y=p.status;let _=function(k){const A=Ee[k];if(A!==void 0)return n1(A)}(y),I=p.message;_===void 0&&(_=E.INTERNAL,I="Unknown error status: "+y+" with message "+p.message),h=!0,d.io(new D(_,I)),u.close()}else P("Connection","WebChannel received:",w),d.ro(w)}}),f(o,VM.STAT_EVENT,g=>{g.stat===T_.PROXY?P("Connection","Detected buffering proxy"):g.stat===T_.NOPROXY&&P("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function ad(){return typeof document<"u"?document:null}/**
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
 */function eh(t){return new UL(t,!0)}class g1{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Hs=e,this.timerId=n,this.wo=r,this.mo=i,this.yo=s,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),r=Math.max(0,Date.now()-this.To),i=Math.max(0,n-r);i>0&&P("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Io=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this.wo&&(this.po=this.wo),this.po>this.yo&&(this.po=this.yo)}bo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
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
 */class y1{constructor(e,n,r,i,s,o,a,l){this.Hs=e,this.Po=r,this.vo=i,this.Vo=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new g1(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Mo()}async stop(){this.No()&&await this.close(0)}Oo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.Po,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===E.RESOURCE_EXHAUSTED?(Dn(n.toString()),Dn("Using maximum backoff delay to prevent overloading the backend."),this.xo.Eo()):n&&n.code===E.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.So===n&&this.Go(r,i)},r=>{e(()=>{const i=new D(E.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Qo(i)})})}Go(e,n){const r=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{r(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{r(()=>this.Qo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Mo(){this.state=5,this.xo.Ao(async()=>{this.state=0,this.start()})}Qo(e){return P("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(P("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class bF extends y1{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.It=s}jo(e,n){return this.Vo._o("Listen",e,n)}onMessage(e){this.xo.reset();const n=zL(this.It,e),r=function(i){if(!("targetChange"in i))return j.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?j.min():s.readTime?In(s.readTime):j.min()}(e);return this.listener.Wo(n,r)}zo(e){const n={};n.database=Yf(this.It),n.addTarget=function(i,s){let o;const a=s.target;return o=qf(a)?{documents:WL(i,a)}:{query:qL(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=u1(i,s.resumeToken):s.snapshotVersion.compareTo(j.min())>0&&(o.readTime=ec(i,s.snapshotVersion.toTimestamp())),o}(this.It,e);const r=GL(this.It,e);r&&(n.labels=r),this.Bo(n)}Ho(e){const n={};n.database=Yf(this.It),n.removeTarget=e,this.Bo(n)}}class PF extends y1{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.It=s,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(e,n){return this.Vo._o("Write",e,n)}onMessage(e){if(se(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=HL(e.writeResults,e.commitTime),r=In(e.commitTime);return this.listener.Zo(r,n)}return se(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=Yf(this.It),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>jL(this.It,r))};this.Bo(n)}}/**
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
 */class DF extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.Vo=r,this.It=i,this.nu=!1}su(){if(this.nu)throw new D(E.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.Vo.co(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new D(E.UNKNOWN,i.toString())})}fo(e,n,r,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.Vo.fo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new D(E.UNKNOWN,s.toString())})}terminate(){this.nu=!0}}class OF{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Dn(n),this.ou=!1):P("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
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
 */class MF{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=s,this.mu.qr(o=>{r.enqueueAndForget(async()=>{wi(this)&&(P("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=U(a);l._u.add(4),await Ya(l),l.gu.set("Unknown"),l._u.delete(4),await th(l)}(this))})}),this.gu=new OF(r,i)}}async function th(t){if(wi(t))for(const e of t.wu)await e(!0)}async function Ya(t){for(const e of t.wu)await e(!1)}function v1(t,e){const n=U(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Tg(n)?Sg(n):Vs(n).ko()&&Cg(n,e))}function _1(t,e){const n=U(t),r=Vs(n);n.du.delete(e),r.ko()&&w1(n,e),n.du.size===0&&(r.ko()?r.Fo():wi(n)&&n.gu.set("Unknown"))}function Cg(t,e){t.yu.Ot(e.targetId),Vs(t).zo(e)}function w1(t,e){t.yu.Ot(e),Vs(t).Ho(e)}function Sg(t){t.yu=new LL({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t.du.get(e)||null}),Vs(t).start(),t.gu.uu()}function Tg(t){return wi(t)&&!Vs(t).No()&&t.du.size>0}function wi(t){return U(t)._u.size===0}function E1(t){t.yu=void 0}async function LF(t){t.du.forEach((e,n)=>{Cg(t,e)})}async function FF(t,e){E1(t),Tg(t)?(t.gu.hu(e),Sg(t)):t.gu.set("Unknown")}async function $F(t,e,n){if(t.gu.set("Online"),e instanceof l1&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.du.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.du.delete(o),r.yu.removeTarget(o))}(t,e)}catch(r){P("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await tc(t,r)}else if(e instanceof Kl?t.yu.Gt(e):e instanceof a1?t.yu.Yt(e):t.yu.Wt(e),!n.isEqual(j.min()))try{const r=await m1(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.yu.te(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.du.get(l);u&&i.du.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i.du.get(a);if(!l)return;i.du.set(a,l.withResumeToken(Ye.EMPTY_BYTE_STRING,l.snapshotVersion)),w1(i,a);const u=new Wr(l.target,a,1,l.sequenceNumber);Cg(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){P("RemoteStore","Failed to raise snapshot:",r),await tc(t,r)}}async function tc(t,e,n){if(!Wa(e))throw e;t._u.add(1),await Ya(t),t.gu.set("Offline"),n||(n=()=>m1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{P("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await th(t)})}function C1(t,e){return e().catch(n=>tc(t,n,e))}async function nh(t){const e=U(t),n=mr(e);let r=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;UF(e);)try{const i=await SF(e.localStore,r);if(i===null){e.fu.length===0&&n.Fo();break}r=i.batchId,VF(e,i)}catch(i){await tc(e,i)}S1(e)&&T1(e)}function UF(t){return wi(t)&&t.fu.length<10}function VF(t,e){t.fu.push(e);const n=mr(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function S1(t){return wi(t)&&!mr(t).No()&&t.fu.length>0}function T1(t){mr(t).start()}async function BF(t){mr(t).eu()}async function zF(t){const e=mr(t);for(const n of t.fu)e.Xo(n.mutations)}async function jF(t,e,n){const r=t.fu.shift(),i=vg.from(r,e,n);await C1(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await nh(t)}async function HF(t,e){e&&mr(t).Yo&&await async function(n,r){if(i=r.code,bL(i)&&i!==E.ABORTED){const s=n.fu.shift();mr(n).Oo(),await C1(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await nh(n)}var i}(t,e),S1(t)&&T1(t)}async function G_(t,e){const n=U(t);n.asyncQueue.verifyOperationInProgress(),P("RemoteStore","RemoteStore received new credentials");const r=wi(n);n._u.add(3),await Ya(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await th(n)}async function WF(t,e){const n=U(t);e?(n._u.delete(2),await th(n)):e||(n._u.add(2),await Ya(n),n.gu.set("Unknown"))}function Vs(t){return t.pu||(t.pu=function(e,n,r){const i=U(e);return i.su(),new bF(n,i.Vo,i.authCredentials,i.appCheckCredentials,i.It,r)}(t.datastore,t.asyncQueue,{Yr:LF.bind(null,t),Zr:FF.bind(null,t),Wo:$F.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),Tg(t)?Sg(t):t.gu.set("Unknown")):(await t.pu.stop(),E1(t))})),t.pu}function mr(t){return t.Iu||(t.Iu=function(e,n,r){const i=U(e);return i.su(),new PF(n,i.Vo,i.authCredentials,i.appCheckCredentials,i.It,r)}(t.datastore,t.asyncQueue,{Yr:BF.bind(null,t),Zr:HF.bind(null,t),tu:zF.bind(null,t),Zo:jF.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Oo(),await nh(t)):(await t.Iu.stop(),t.fu.length>0&&(P("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
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
 */class Ig{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Hr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Ig(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function kg(t,e){if(Dn("AsyncQueue",`${e}: ${t}`),Wa(t))return new D(E.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ts{constructor(e){this.comparator=e?(n,r)=>e(n,r)||O.comparator(n.key,r.key):(n,r)=>O.comparator(n.key,r.key),this.keyedMap=lo(),this.sortedSet=new Pe(this.comparator)}static emptySet(e){return new ts(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ts)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ts;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Q_{constructor(){this.Tu=new Pe(O.comparator)}track(e){const n=e.doc.key,r=this.Tu.get(n);r?e.type!==0&&r.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&r.type!==1?this.Tu=this.Tu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Tu=this.Tu.remove(n):e.type===1&&r.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):$():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,r)=>{e.push(r)}),e}}class ws{constructor(e,n,r,i,s,o,a,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l}static fromInitialDocuments(e,n,r,i){const s=[];return n.forEach(o=>{s.push({type:0,doc:o})}),new ws(e,n,ts.emptySet(n),s,r,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ka(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class qF{constructor(){this.Au=void 0,this.listeners=[]}}class KF{constructor(){this.queries=new Us(e=>WT(e),Ka),this.onlineState="Unknown",this.Ru=new Set}}async function GF(t,e){const n=U(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new qF),i)try{s.Au=await n.onListen(r)}catch(o){const a=kg(o,`Initialization of query '${Kf(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.bu(n.onlineState),s.Au&&e.Pu(s.Au)&&Ng(n)}async function QF(t,e){const n=U(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function YF(t,e){const n=U(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Pu(i)&&(r=!0);o.Au=i}}r&&Ng(n)}function XF(t,e,n){const r=U(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Ng(t){t.Ru.forEach(e=>{e.next()})}class JF{constructor(e,n,r){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=r||{}}Pu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ws(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Nu||!r)&&(!e.docs.isEmpty()||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=ws.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.Vu=!0,this.vu.next(e)}}/**
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
 */class I1{constructor(e){this.key=e}}class k1{constructor(e){this.key=e}}class ZF{constructor(e,n){this.query=e,this.Lu=n,this.Uu=null,this.current=!1,this.qu=K(),this.mutatedKeys=K(),this.Ku=qT(e),this.Gu=new ts(this.Ku)}get Qu(){return this.Lu}ju(e,n){const r=n?n.Wu:new Q_,i=n?n.Gu:this.Gu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),f=gg(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),v=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let w=!1;d&&f?d.data.isEqual(f.data)?g!==v&&(r.track({type:3,doc:f}),w=!0):this.zu(d,f)||(r.track({type:2,doc:f}),w=!0,(l&&this.Ku(f,l)>0||u&&this.Ku(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),w=!0):d&&!f&&(r.track({type:1,doc:d}),w=!0,(l||u)&&(a=!0)),w&&(f?(o=o.add(f),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Gu:o,Wu:r,$i:a,mutatedKeys:s}}zu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const s=e.Wu.Eu();s.sort((u,c)=>function(h,d){const f=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return $()}};return f(h)-f(d)}(u.type,c.type)||this.Ku(u.doc,c.doc)),this.Hu(r);const o=n?this.Ju():[],a=this.qu.size===0&&this.current?1:0,l=a!==this.Uu;return this.Uu=a,s.length!==0||l?{snapshot:new ws(this.query,e.Gu,i,s,e.mutatedKeys,a===0,l,!1),Yu:o}:{Yu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,Wu:new Q_,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Yu:[]}}Xu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.qu;this.qu=K(),this.Gu.forEach(r=>{this.Xu(r.key)&&(this.qu=this.qu.add(r.key))});const n=[];return e.forEach(r=>{this.qu.has(r)||n.push(new k1(r))}),this.qu.forEach(r=>{e.has(r)||n.push(new I1(r))}),n}Zu(e){this.Lu=e.Hi,this.qu=K();const n=this.ju(e.documents);return this.applyChanges(n,!0)}tc(){return ws.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.Uu===0)}}class e${constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class t${constructor(e){this.key=e,this.ec=!1}}class n${constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new Us(a=>WT(a),Ka),this.ic=new Map,this.rc=new Set,this.oc=new Pe(O.comparator),this.uc=new Map,this.cc=new _g,this.ac={},this.hc=new Map,this.lc=_s.vn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function r$(t,e){const n=f$(t);let r,i;const s=n.sc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.tc();else{const o=await TF(n.localStore,On(e));n.isPrimaryClient&&v1(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await i$(n,e,r,a==="current")}return i}async function i$(t,e,n,r){t.dc=(c,h,d)=>async function(f,g,v,w){let m=g.view.ju(v);m.$i&&(m=await W_(f.localStore,g.query,!1).then(({documents:_})=>g.view.ju(_,m)));const p=w&&w.targetChanges.get(g.targetId),y=g.view.applyChanges(m,f.isPrimaryClient,p);return X_(f,g.targetId,y.Yu),y.snapshot}(t,c,h,d);const i=await W_(t.localStore,e,!0),s=new ZF(e,i.Hi),o=s.ju(i.documents),a=Qa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),l=s.applyChanges(o,t.isPrimaryClient,a);X_(t,n,l.Yu);const u=new e$(e,n,s);return t.sc.set(e,u),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),l.snapshot}async function s$(t,e){const n=U(t),r=n.sc.get(e),i=n.ic.get(r.targetId);if(i.length>1)return n.ic.set(r.targetId,i.filter(s=>!Ka(s,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Xf(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),_1(n.remoteStore,r.targetId),Jf(n,r.targetId)}).catch(Ha)):(Jf(n,r.targetId),await Xf(n.localStore,r.targetId,!0))}async function o$(t,e,n){const r=p$(t);try{const i=await function(s,o){const a=U(s),l=Ae.now(),u=o.reduce((d,f)=>d.add(f.key),K());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=Mn(),g=K();return a.Gi.getEntries(d,u).next(v=>{f=v,f.forEach((w,m)=>{m.isValidDocument()||(g=g.add(w))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,f)).next(v=>{c=v;const w=[];for(const m of o){const p=RL(m,c.get(m.key).overlayedDocument);p!=null&&w.push(new _i(m.key,p,BT(p.value.mapValue),Tn.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,w,o)}).next(v=>{h=v;const w=v.applyToLocalDocumentSet(c,g);return a.documentOverlayCache.saveOverlays(d,v.batchId,w)})}).then(()=>({batchId:h.batchId,changes:i1(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.ac[s.currentUser.toKey()];l||(l=new Pe(Z)),l=l.insert(o,a),s.ac[s.currentUser.toKey()]=l}(r,i.batchId,n),await Xa(r,i.changes),await nh(r.remoteStore)}catch(i){const s=kg(i,"Failed to persist write");n.reject(s)}}async function N1(t,e){const n=U(t);try{const r=await EF(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.uc.get(s);o&&(se(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ec=!0:i.modifiedDocuments.size>0?se(o.ec):i.removedDocuments.size>0&&(se(o.ec),o.ec=!1))}),await Xa(n,r,e)}catch(r){await Ha(r)}}function Y_(t,e,n){const r=U(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.sc.forEach((s,o)=>{const a=o.view.bu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=U(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.bu(o)&&(l=!0)}),l&&Ng(a)}(r.eventManager,e),i.length&&r.nc.Wo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function a$(t,e,n){const r=U(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.uc.get(e),s=i&&i.key;if(s){let o=new Pe(O.comparator);o=o.insert(s,He.newNoDocument(s,j.min()));const a=K().add(s),l=new Zc(j.min(),new Map,new xe(Z),o,a);await N1(r,l),r.oc=r.oc.remove(s),r.uc.delete(e),Rg(r)}else await Xf(r.localStore,e,!1).then(()=>Jf(r,e,n)).catch(Ha)}async function l$(t,e){const n=U(t),r=e.batch.batchId;try{const i=await wF(n.localStore,e);A1(n,r,null),R1(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Xa(n,i)}catch(i){await Ha(i)}}async function u$(t,e,n){const r=U(t);try{const i=await function(s,o){const a=U(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(se(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);A1(r,e,n),R1(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Xa(r,i)}catch(i){await Ha(i)}}function R1(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function A1(t,e,n){const r=U(t);let i=r.ac[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.ac[r.currentUser.toKey()]=i}}function Jf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ic.get(e))t.sc.delete(r),n&&t.nc._c(r,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.ls(e).forEach(r=>{t.cc.containsKey(r)||x1(t,r)})}function x1(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(_1(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),Rg(t))}function X_(t,e,n){for(const r of n)r instanceof I1?(t.cc.addReference(r.key,e),c$(t,r)):r instanceof k1?(P("SyncEngine","Document no longer in limbo: "+r.key),t.cc.removeReference(r.key,e),t.cc.containsKey(r.key)||x1(t,r.key)):$()}function c$(t,e){const n=e.key,r=n.path.canonicalString();t.oc.get(n)||t.rc.has(r)||(P("SyncEngine","New document in limbo: "+n),t.rc.add(r),Rg(t))}function Rg(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new O(de.fromString(e)),r=t.lc.next();t.uc.set(r,new t$(n)),t.oc=t.oc.insert(n,r),v1(t.remoteStore,new Wr(On(mg(n.path)),r,2,hg.at))}}async function Xa(t,e,n){const r=U(t),i=[],s=[],o=[];r.sc.isEmpty()||(r.sc.forEach((a,l)=>{o.push(r.dc(l,e,n).then(u=>{if(u){r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u.fromCache?"not-current":"current"),i.push(u);const c=Eg.Ci(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.nc.Wo(i),await async function(a,l){const u=U(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>S.forEach(l,h=>S.forEach(h.Si,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>S.forEach(h.Di,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!Wa(c))throw c;P("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.Ui.get(h),f=d.snapshotVersion,g=d.withLastLimboFreeSnapshotVersion(f);u.Ui=u.Ui.insert(h,g)}}}(r.localStore,s))}async function h$(t,e){const n=U(t);if(!n.currentUser.isEqual(e)){P("SyncEngine","User change. New user:",e.toKey());const r=await p1(n.localStore,e);n.currentUser=e,function(i,s){i.hc.forEach(o=>{o.forEach(a=>{a.reject(new D(E.CANCELLED,s))})}),i.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Xa(n,r.ji)}}function d$(t,e){const n=U(t),r=n.uc.get(e);if(r&&r.ec)return K().add(r.key);{let i=K();const s=n.ic.get(e);if(!s)return i;for(const o of s){const a=n.sc.get(o);i=i.unionWith(a.view.Qu)}return i}}function f$(t){const e=U(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=N1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=d$.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=a$.bind(null,e),e.nc.Wo=YF.bind(null,e.eventManager),e.nc._c=XF.bind(null,e.eventManager),e}function p$(t){const e=U(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=l$.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=u$.bind(null,e),e}class m${constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=eh(e.databaseInfo.databaseId),this.sharedClientState=this.mc(e),this.persistence=this.gc(e),await this.persistence.start(),this.localStore=this.yc(e),this.gcScheduler=this.Ic(e,this.localStore),this.indexBackfillerScheduler=this.Tc(e,this.localStore)}Ic(e,n){return null}Tc(e,n){return null}yc(e){return _F(this.persistence,new yF,e.initialUser,this.It)}gc(e){return new mF(wg.Bs,this.It)}mc(e){return new kF}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class g${async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Y_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=h$.bind(null,this.syncEngine),await WF(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new KF}createDatastore(e){const n=eh(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new xF(i));var i;return function(s,o,a,l){return new DF(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>Y_(this.syncEngine,a,0),o=K_.C()?new K_:new NF,new MF(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new n$(r,i,s,o,a,l);return u&&(c.fc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=U(e);P("RemoteStore","RemoteStore shutting down."),n._u.add(5),await Ya(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
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
 *//**
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
 */class y${constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ac(this.observer.next,e)}error(e){this.observer.error?this.Ac(this.observer.error,e):Dn("Uncaught Error in snapshot listener:",e)}Rc(){this.muted=!0}Ac(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class v${constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=pt.UNAUTHENTICATED,this.clientId=FT.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{P("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(P("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new D(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Hr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=kg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function _$(t,e){t.asyncQueue.verifyOperationInProgress(),P("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await p1(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function w$(t,e){t.asyncQueue.verifyOperationInProgress();const n=await E$(t);P("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>G_(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>G_(e.remoteStore,s)),t.onlineComponents=e}async function E$(t){return t.offlineComponents||(P("FirestoreClient","Using default OfflineComponentProvider"),await _$(t,new m$)),t.offlineComponents}async function b1(t){return t.onlineComponents||(P("FirestoreClient","Using default OnlineComponentProvider"),await w$(t,new g$)),t.onlineComponents}function C$(t){return b1(t).then(e=>e.syncEngine)}async function J_(t){const e=await b1(t),n=e.eventManager;return n.onListen=r$.bind(null,e.syncEngine),n.onUnlisten=s$.bind(null,e.syncEngine),n}const Z_=new Map;/**
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
 */function P1(t,e,n){if(!n)throw new D(E.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function S$(t,e,n,r){if(e===!0&&r===!0)throw new D(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function e0(t){if(!O.isDocumentKey(t))throw new D(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function t0(t){if(O.isDocumentKey(t))throw new D(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ag(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":$()}function Gl(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new D(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ag(t);throw new D(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function T$(t,e){if(e<=0)throw new D(E.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class n0{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new D(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new D(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,S$("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class xg{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new n0({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new D(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new D(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new n0(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new HM;switch(n.type){case"gapi":const r=n.client;return new KM(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new D(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Z_.get(e);n&&(P("ComponentProvider","Removing Datastore"),Z_.delete(e),n.terminate())}(this),Promise.resolve()}}/**
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
 */class Ut{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new lr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ut(this.firestore,e,this._key)}}class gr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new gr(this.firestore,e,this._query)}}class lr extends gr{constructor(e,n,r){super(e,n,mg(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ut(this.firestore,null,new O(e))}withConverter(e){return new lr(this.firestore,e,this._path)}}function I$(t,e,...n){if(t=Qe(t),P1("collection","path",e),t instanceof xg){const r=de.fromString(e,...n);return t0(r),new lr(t,null,r)}{if(!(t instanceof Ut||t instanceof lr))throw new D(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(de.fromString(e,...n));return t0(r),new lr(t.firestore,null,r)}}function k$(t,e,...n){if(t=Qe(t),arguments.length===1&&(e=FT.R()),P1("doc","path",e),t instanceof xg){const r=de.fromString(e,...n);return e0(r),new Ut(t,null,new O(r))}{if(!(t instanceof Ut||t instanceof lr))throw new D(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(de.fromString(e,...n));return e0(r),new Ut(t.firestore,t instanceof lr?t.converter:null,new O(r))}}function N$(t,e){return t=Qe(t),e=Qe(e),t instanceof gr&&e instanceof gr&&t.firestore===e.firestore&&Ka(t._query,e._query)&&t.converter===e.converter}/**
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
 */class R${constructor(){this.$c=Promise.resolve(),this.Bc=[],this.Lc=!1,this.Uc=[],this.qc=null,this.Kc=!1,this.Gc=!1,this.Qc=[],this.xo=new g1(this,"async_queue_retry"),this.jc=()=>{const n=ad();n&&P("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.bo()};const e=ad();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.jc)}get isShuttingDown(){return this.Lc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Wc(),this.zc(e)}enterRestrictedMode(e){if(!this.Lc){this.Lc=!0,this.Gc=e||!1;const n=ad();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.jc)}}enqueue(e){if(this.Wc(),this.Lc)return new Promise(()=>{});const n=new Hr;return this.zc(()=>this.Lc&&this.Gc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Bc.push(e),this.Hc()))}async Hc(){if(this.Bc.length!==0){try{await this.Bc[0](),this.Bc.shift(),this.xo.reset()}catch(e){if(!Wa(e))throw e;P("AsyncQueue","Operation failed with retryable error: "+e)}this.Bc.length>0&&this.xo.Ao(()=>this.Hc())}}zc(e){const n=this.$c.then(()=>(this.Kc=!0,e().catch(r=>{this.qc=r,this.Kc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Dn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Kc=!1,r))));return this.$c=n,n}enqueueAfterDelay(e,n,r){this.Wc(),this.Qc.indexOf(e)>-1&&(n=0);const i=Ig.createAndSchedule(this,e,n,r,s=>this.Jc(s));return this.Uc.push(i),i}Wc(){this.qc&&$()}verifyOperationInProgress(){}async Yc(){let e;do e=this.$c,await e;while(e!==this.$c)}Xc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}Zc(e){return this.Yc().then(()=>{this.Uc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Yc()})}ta(e){this.Qc.push(e)}Jc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}function r0(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class nc extends xg{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new R$,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||O1(this),this._firestoreClient.terminate()}}function A$(t,e){const n=typeof t=="object"?t:nm(),r=typeof t=="string"?t:e||"(default)";return bs(n,"firestore").getImmediate({identifier:r})}function D1(t){return t._firestoreClient||O1(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function O1(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new iL(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new v$(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
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
 *//**
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
 */class bg{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new D(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Es{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Es(Ye.fromBase64String(e))}catch(n){throw new D(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Es(Ye.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Pg{constructor(e){this._methodName=e}}/**
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
 */class Dg{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new D(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new D(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Z(this._lat,e._lat)||Z(this._long,e._long)}}/**
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
 */const x$=/^__.*__$/;class b${constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new _i(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ga(e,this.data,n,this.fieldTransforms)}}function M1(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw $()}}class Og{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.It=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ea(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get na(){return this.settings.na}sa(e){return new Og(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ia(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.sa({path:r,ra:!1});return i.oa(e),i}ua(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.sa({path:r,ra:!1});return i.ea(),i}ca(e){return this.sa({path:void 0,ra:!0})}aa(e){return rc(e,this.settings.methodName,this.settings.ha||!1,this.path,this.settings.la)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ea(){if(this.path)for(let e=0;e<this.path.length;e++)this.oa(this.path.get(e))}oa(e){if(e.length===0)throw this.aa("Document fields must not be empty");if(M1(this.na)&&x$.test(e))throw this.aa('Document fields cannot begin and end with "__"')}}class P${constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=r||eh(e)}fa(e,n,r,i=!1){return new Og({na:e,methodName:n,la:r,path:rt.emptyPath(),ra:!1,ha:i},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function D$(t){const e=t._freezeSettings(),n=eh(t._databaseId);return new P$(t._databaseId,!!e.ignoreUndefinedProperties,n)}function O$(t,e,n,r,i,s={}){const o=t.fa(s.merge||s.mergeFields?2:0,e,n,i);U1("Data must be an object, but it was:",o,r);const a=F1(r,o);let l,u;if(s.merge)l=new hn(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=M$(e,h,n);if(!o.contains(d))throw new D(E.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);F$(c,d)||c.push(d)}l=new hn(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new b$(new Lt(a),l,u)}class Mg extends Pg{_toFieldTransform(e){return new TL(e.path,new ma)}isEqual(e){return e instanceof Mg}}function L1(t,e){if($1(t=Qe(t)))return U1("Unsupported field value:",e,t),F1(t,e);if(t instanceof Pg)return function(n,r){if(!M1(r.na))throw r.aa(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.aa(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ra&&e.na!==4)throw e.aa("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=L1(o,r.ca(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=Qe(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return EL(r.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Ae.fromDate(n);return{timestampValue:ec(r.It,i)}}if(n instanceof Ae){const i=new Ae(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ec(r.It,i)}}if(n instanceof Dg)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Es)return{bytesValue:u1(r.It,n._byteString)};if(n instanceof Ut){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.aa(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:yg(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.aa(`Unsupported field value: ${Ag(n)}`)}(t,e)}function F1(t,e){const n={};return $T(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):$s(t,(r,i)=>{const s=L1(i,e.ia(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function $1(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ae||t instanceof Dg||t instanceof Es||t instanceof Ut||t instanceof Pg)}function U1(t,e,n){if(!$1(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Ag(n);throw r==="an object"?e.aa(t+" a custom object"):e.aa(t+" "+r)}}function M$(t,e,n){if((e=Qe(e))instanceof bg)return e._internalPath;if(typeof e=="string")return V1(t,e);throw rc("Field path arguments must be of type string or ",t,!1,void 0,n)}const L$=new RegExp("[~\\*/\\[\\]]");function V1(t,e,n){if(e.search(L$)>=0)throw rc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new bg(...e.split("."))._internalPath}catch{throw rc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function rc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new D(E.INVALID_ARGUMENT,a+t+l)}function F$(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class B1{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ut(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new $$(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Lg("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class $$ extends B1{data(){return super.data()}}function Lg(t,e){return typeof e=="string"?V1(t,e):e instanceof bg?e._internalPath:e._delegate._internalPath}/**
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
 */class uo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class z1 extends B1{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ql(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Lg("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ql extends z1{data(e={}){return super.data(e)}}class U${constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new uo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ql(this._firestore,this._userDataWriter,r.key,r,new uo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new D(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new Ql(r._firestore,r._userDataWriter,o.doc.key,o.doc,new uo(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:s++}))}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Ql(r._firestore,r._userDataWriter,o.doc.key,o.doc,new uo(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:V$(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function V$(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return $()}}/**
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
 */function B$(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new D(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class j1{}function z$(t,...e){for(const n of e)t=n._apply(t);return t}class j$ extends j1{constructor(e,n){super(),this.wa=e,this.ya=n,this.type="orderBy"}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new D(E.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new D(E.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new es(i,s);return function(a,l){if(jT(a)===null){const u=HT(a);u!==null&&K$(a,u,l.field)}}(r,o),o}(e._query,this.wa,this.ya);return new gr(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new qa(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function H$(t,e="asc"){const n=e,r=Lg("orderBy",t);return new j$(r,n)}class W$ extends j1{constructor(e,n,r){super(),this.type=e,this.pa=n,this.Ia=r}_apply(e){return new gr(e.firestore,e.converter,Ju(e._query,this.pa,this.Ia))}}function q$(t){return T$("limit",t),new W$("limit",t,"F")}function K$(t,e,n){if(!n.isEqual(e))throw new D(E.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
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
 */class G${convertValue(e,n="none"){switch(ui(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ce(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ys(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw $()}}convertObject(e,n){const r={};return $s(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Dg(Ce(e.latitude),Ce(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=VT(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ha(e));default:return null}}convertTimestamp(e){const n=pr(e);return new Ae(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=de.fromString(e);se(f1(r));const i=new da(r.get(1),r.get(3)),s=new O(r.popFirst(5));return i.isEqual(n)||Dn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function Q$(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class H1 extends G${constructor(e){super(),this.firestore=e}convertBytes(e){return new Es(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ut(this.firestore,null,n)}}function Y$(t,e){const n=Gl(t.firestore,nc),r=k$(t),i=Q$(t.converter,e);return J$(n,[O$(D$(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Tn.exists(!1))]).then(()=>r)}function X$(t,...e){var n,r,i;t=Qe(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||r0(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(r0(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof Ut)u=Gl(t.firestore,nc),c=mg(t._key.path),l={next:h=>{e[o]&&e[o](Z$(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Gl(t,gr);u=Gl(h.firestore,nc),c=h._query;const d=new H1(u);l={next:f=>{e[o]&&e[o](new U$(u,d,h,f))},error:e[o+1],complete:e[o+2]},B$(t._query)}return function(h,d,f,g){const v=new y$(g),w=new JF(d,v,f);return h.asyncQueue.enqueueAndForget(async()=>GF(await J_(h),w)),()=>{v.Rc(),h.asyncQueue.enqueueAndForget(async()=>QF(await J_(h),w))}}(D1(u),c,a,l)}function J$(t,e){return function(n,r){const i=new Hr;return n.asyncQueue.enqueueAndForget(async()=>o$(await C$(n),r,i)),i.promise}(D1(t),e)}function Z$(t,e,n){const r=n.docs.get(e._key),i=new H1(t);return new z1(t,i,e._key,r,new uo(n.hasPendingWrites,n.fromCache),e.converter)}function e2(){return new Mg("serverTimestamp")}(function(t,e=!0){(function(n){Fs=n})(wr),zt(new xt("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new nc(new WM(n.getProvider("auth-internal")),new QM(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new D(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new da(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Te(I_,"3.4.15",t),Te(I_,"3.4.15","esm2017")})();/**
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
 */const t2="functions";/**
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
 */class n2{constructor(e,n,r){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||e.get().then(i=>this.auth=i,()=>{}),this.messaging||n.get().then(i=>this.messaging=i,()=>{}),this.appCheck||r.get().then(i=>this.appCheck=i,()=>{})}async getAuthToken(){if(!!this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(){if(this.appCheck){const e=await this.appCheck.getToken();return e.error?null:e.token}return null}async getContext(){const e=await this.getAuthToken(),n=await this.getMessagingToken(),r=await this.getAppCheckToken();return{authToken:e,messagingToken:n,appCheckToken:r}}}/**
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
 */const i0="us-central1";class r2{constructor(e,n,r,i,s=i0,o){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new n2(n,r,i),this.cancelAllRequests=new Promise(a=>{this.deleteService=()=>Promise.resolve(a())});try{const a=new URL(s);this.customDomain=a.origin,this.region=i0}catch{this.customDomain=null,this.region=s}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}const s0="@firebase/functions",o0="0.8.4";/**
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
 */const i2="auth-internal",s2="app-check-internal",o2="messaging-internal";function a2(t,e){const n=(r,{instanceIdentifier:i})=>{const s=r.getProvider("app").getImmediate(),o=r.getProvider(i2),a=r.getProvider(o2),l=r.getProvider(s2);return new r2(s,o,a,l,i,t)};zt(new xt(t2,n,"PUBLIC").setMultipleInstances(!0)),Te(s0,o0,e),Te(s0,o0,"esm2017")}a2(fetch.bind(self));/**
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
 */const W1="firebasestorage.googleapis.com",l2="storageBucket",u2=2*60*1e3,c2=10*60*1e3;/**
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
 */class fn extends jt{constructor(e,n){super(ld(e),`Firebase Storage: ${n} (${ld(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,fn.prototype)}_codeEquals(e){return ld(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function ld(t){return"storage/"+t}function h2(){const t="An unknown error occurred, please check the error payload for server response.";return new fn("unknown",t)}function d2(){return new fn("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function f2(){return new fn("canceled","User canceled the upload/download.")}function p2(t){return new fn("invalid-url","Invalid URL '"+t+"'.")}function m2(t){return new fn("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function a0(t){return new fn("invalid-argument",t)}function q1(){return new fn("app-deleted","The Firebase app was deleted.")}function g2(t){return new fn("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class Jt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Jt.makeFromUrl(e,n)}catch{return new Jt(e,"")}if(r.path==="")return r;throw m2(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(_){_.path.charAt(_.path.length-1)==="/"&&(_.path_=_.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(_){_.path_=decodeURIComponent(_.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),g={bucket:1,path:3},v=n===W1?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",m=new RegExp(`^https?://${v}/${i}/${w}`,"i"),y=[{regex:a,indices:l,postModify:s},{regex:f,indices:g,postModify:u},{regex:m,indices:{bucket:1,path:2},postModify:u}];for(let _=0;_<y.length;_++){const I=y[_],k=I.regex.exec(e);if(k){const A=k[I.indices.bucket];let b=k[I.indices.path];b||(b=""),r=new Jt(A,b),I.postModify(r);break}}if(r==null)throw p2(e);return r}}class y2{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function v2(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...w){u||(u=!0,e.apply(null,w))}function h(w){i=setTimeout(()=>{i=null,t(f,l())},w)}function d(){s&&clearTimeout(s)}function f(w,...m){if(u){d();return}if(w){d(),c.call(null,w,...m);return}if(l()||o){d(),c.call(null,w,...m);return}r<64&&(r*=2);let y;a===1?(a=2,y=0):y=(r+Math.random())*1e3,h(y)}let g=!1;function v(w){g||(g=!0,d(),!u&&(i!==null?(w||(a=2),clearTimeout(i),h(0)):w||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,v(!0)},n),v}function _2(t){t(!1)}/**
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
 */function w2(t){return t!==void 0}function l0(t,e,n,r){if(r<e)throw a0(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw a0(`Invalid value for '${t}'. Expected ${n} or less.`)}function E2(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var ic;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ic||(ic={}));/**
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
 */class C2{constructor(e,n,r,i,s,o,a,l,u,c,h){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,f)=>{this.resolve_=d,this.reject_=f,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Nl(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===ic.NO_ERROR,l=s.getStatus();if(!a||this.isRetryStatusCode_(l)){const c=s.getErrorCode()===ic.ABORT;r(!1,new Nl(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Nl(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());w2(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=h2();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?q1():f2();o(l)}else{const l=d2();o(l)}};this.canceled_?n(!1,new Nl(!1,null,!0)):this.backoffId_=v2(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&_2(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,s=this.additionalRetryCodes_.indexOf(e)!==-1;return n||i||s}}class Nl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function S2(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function T2(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function I2(t,e){e&&(t["X-Firebase-GMPID"]=e)}function k2(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function N2(t,e,n,r,i,s){const o=E2(t.urlParams),a=t.url+o,l=Object.assign({},t.headers);return I2(l,e),S2(l,n),T2(l,s),k2(l,r),new C2(a,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i)}/**
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
 */function R2(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function A2(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class sc{constructor(e,n){this._service=e,n instanceof Jt?this._location=n:this._location=Jt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new sc(e,n)}get root(){const e=new Jt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return A2(this._location.path)}get storage(){return this._service}get parent(){const e=R2(this._location.path);if(e===null)return null;const n=new Jt(this._location.bucket,e);return new sc(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw g2(e)}}function u0(t,e){const n=e==null?void 0:e[l2];return n==null?null:Jt.makeFromBucketSpec(n,t)}class x2{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=W1,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=u2,this._maxUploadRetryTime=c2,this._requests=new Set,i!=null?this._bucket=Jt.makeFromBucketSpec(i,this._host):this._bucket=u0(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Jt.makeFromBucketSpec(this._url,e):this._bucket=u0(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){l0("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){l0("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new sc(this,e)}_makeRequest(e,n,r,i){if(this._deleted)return new y2(q1());{const s=N2(e,this._appId,r,i,n,this._firebaseVersion);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const c0="@firebase/storage",h0="0.9.9";/**
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
 */const b2="storage";function P2(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new x2(n,r,i,e,wr)}function D2(){zt(new xt(b2,P2,"PUBLIC").setMultipleInstances(!0)),Te(c0,h0,""),Te(c0,h0,"esm2017")}D2();const K1="@firebase/installations",Fg="0.5.12";/**
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
 */const G1=1e4,Q1=`w:${Fg}`,Y1="FIS_v2",O2="https://firebaseinstallations.googleapis.com/v1",M2=60*60*1e3,L2="installations",F2="Installations";/**
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
 */const $2={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},ci=new mi(L2,F2,$2);function X1(t){return t instanceof jt&&t.code.includes("request-failed")}/**
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
 */function J1({projectId:t}){return`${O2}/projects/${t}/installations`}function Z1(t){return{token:t.token,requestStatus:2,expiresIn:V2(t.expiresIn),creationTime:Date.now()}}async function eI(t,e){const r=(await e.json()).error;return ci.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function tI({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function U2(t,{refreshToken:e}){const n=tI(t);return n.append("Authorization",B2(e)),n}async function nI(t){const e=await t();return e.status>=500&&e.status<600?t():e}function V2(t){return Number(t.replace("s","000"))}function B2(t){return`${Y1} ${t}`}/**
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
 */async function z2({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=J1(t),i=tI(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:Y1,appId:t.appId,sdkVersion:Q1},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await nI(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Z1(u.authToken)}}else throw await eI("Create Installation",l)}/**
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
 */function rI(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function j2(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const H2=/^[cdef][\w-]{21}$/,Zf="";function W2(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=q2(t);return H2.test(n)?n:Zf}catch{return Zf}}function q2(t){return j2(t).substr(0,22)}/**
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
 */function rh(t){return`${t.appName}!${t.appId}`}/**
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
 */const iI=new Map;function sI(t,e){const n=rh(t);oI(n,e),K2(n,e)}function oI(t,e){const n=iI.get(t);if(!!n)for(const r of n)r(e)}function K2(t,e){const n=G2();n&&n.postMessage({key:t,fid:e}),Q2()}let Ur=null;function G2(){return!Ur&&"BroadcastChannel"in self&&(Ur=new BroadcastChannel("[Firebase] FID Change"),Ur.onmessage=t=>{oI(t.data.key,t.data.fid)}),Ur}function Q2(){iI.size===0&&Ur&&(Ur.close(),Ur=null)}/**
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
 */const Y2="firebase-installations-database",X2=1,hi="firebase-installations-store";let ud=null;function $g(){return ud||(ud=jE(Y2,X2,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(hi)}}})),ud}async function oc(t,e){const n=rh(t),i=(await $g()).transaction(hi,"readwrite"),s=i.objectStore(hi),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&sI(t,e.fid),e}async function aI(t){const e=rh(t),r=(await $g()).transaction(hi,"readwrite");await r.objectStore(hi).delete(e),await r.done}async function ih(t,e){const n=rh(t),i=(await $g()).transaction(hi,"readwrite"),s=i.objectStore(hi),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&sI(t,a.fid),a}/**
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
 */async function Ug(t){let e;const n=await ih(t.appConfig,r=>{const i=J2(r),s=Z2(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Zf?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function J2(t){const e=t||{fid:W2(),registrationStatus:0};return lI(e)}function Z2(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(ci.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=eU(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:tU(t)}:{installationEntry:e}}async function eU(t,e){try{const n=await z2(t,e);return oc(t.appConfig,n)}catch(n){throw X1(n)&&n.customData.serverCode===409?await aI(t.appConfig):await oc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function tU(t){let e=await d0(t.appConfig);for(;e.registrationStatus===1;)await rI(100),e=await d0(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Ug(t);return r||n}return e}function d0(t){return ih(t,e=>{if(!e)throw ci.create("installation-not-found");return lI(e)})}function lI(t){return nU(t)?{fid:t.fid,registrationStatus:0}:t}function nU(t){return t.registrationStatus===1&&t.registrationTime+G1<Date.now()}/**
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
 */async function rU({appConfig:t,heartbeatServiceProvider:e},n){const r=iU(t,n),i=U2(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:Q1,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await nI(()=>fetch(r,a));if(l.ok){const u=await l.json();return Z1(u)}else throw await eI("Generate Auth Token",l)}function iU(t,{fid:e}){return`${J1(t)}/${e}/authTokens:generate`}/**
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
 */async function Vg(t,e=!1){let n;const r=await ih(t.appConfig,s=>{if(!uI(s))throw ci.create("not-registered");const o=s.authToken;if(!e&&aU(o))return s;if(o.requestStatus===1)return n=sU(t,e),s;{if(!navigator.onLine)throw ci.create("app-offline");const a=uU(s);return n=oU(t,a),a}});return n?await n:r.authToken}async function sU(t,e){let n=await f0(t.appConfig);for(;n.authToken.requestStatus===1;)await rI(100),n=await f0(t.appConfig);const r=n.authToken;return r.requestStatus===0?Vg(t,e):r}function f0(t){return ih(t,e=>{if(!uI(e))throw ci.create("not-registered");const n=e.authToken;return cU(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function oU(t,e){try{const n=await rU(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await oc(t.appConfig,r),n}catch(n){if(X1(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await aI(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await oc(t.appConfig,r)}throw n}}function uI(t){return t!==void 0&&t.registrationStatus===2}function aU(t){return t.requestStatus===2&&!lU(t)}function lU(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+M2}function uU(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function cU(t){return t.requestStatus===1&&t.requestTime+G1<Date.now()}/**
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
 */async function hU(t){const e=t,{installationEntry:n,registrationPromise:r}=await Ug(e);return r?r.catch(console.error):Vg(e).catch(console.error),n.fid}/**
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
 */async function dU(t,e=!1){const n=t;return await fU(n),(await Vg(n,e)).token}async function fU(t){const{registrationPromise:e}=await Ug(t);e&&await e}/**
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
 */function pU(t){if(!t||!t.options)throw cd("App Configuration");if(!t.name)throw cd("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw cd(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function cd(t){return ci.create("missing-app-config-values",{valueName:t})}/**
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
 */const cI="installations",mU="installations-internal",gU=t=>{const e=t.getProvider("app").getImmediate(),n=pU(e),r=bs(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},yU=t=>{const e=t.getProvider("app").getImmediate(),n=bs(e,cI).getImmediate();return{getId:()=>hU(n),getToken:i=>dU(n,i)}};function vU(){zt(new xt(cI,gU,"PUBLIC")),zt(new xt(mU,yU,"PRIVATE"))}vU();Te(K1,Fg);Te(K1,Fg,"esm2017");const hd="@firebase/remote-config",p0="0.3.11";/**
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
 */const _U="remote-config";/**
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
 */const wU={["registration-window"]:"Undefined window object. This SDK only supports usage in a browser environment.",["registration-project-id"]:"Undefined project identifier. Check Firebase app initialization.",["registration-api-key"]:"Undefined API key. Check Firebase app initialization.",["registration-app-id"]:"Undefined app identifier. Check Firebase app initialization.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}.",["fetch-client-network"]:"Fetch client failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-timeout"]:'The config fetch request timed out.  Configure timeout using "fetchTimeoutMillis" SDK setting.',["fetch-throttle"]:'The config fetch request timed out while in an exponential backoff state. Configure timeout using "fetchTimeoutMillis" SDK setting. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.',["fetch-client-parse"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["indexed-db-unavailable"]:"Indexed DB is not supported by current browser"},gt=new mi("remoteconfig","Remote Config",wU);function EU(t){const e=Qe(t);return e._initializePromise||(e._initializePromise=e._storageCache.loadFromStorage().then(()=>{e._isInitializationComplete=!0})),e._initializePromise}/**
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
 */class CU{constructor(e,n,r,i){this.client=e,this.storage=n,this.storageCache=r,this.logger=i}isCachedDataFresh(e,n){if(!n)return this.logger.debug("Config fetch cache check. Cache unpopulated."),!1;const r=Date.now()-n,i=r<=e;return this.logger.debug(`Config fetch cache check. Cache age millis: ${r}. Cache max age millis (minimumFetchIntervalMillis setting): ${e}. Is cache hit: ${i}.`),i}async fetch(e){const[n,r]=await Promise.all([this.storage.getLastSuccessfulFetchTimestampMillis(),this.storage.getLastSuccessfulFetchResponse()]);if(r&&this.isCachedDataFresh(e.cacheMaxAgeMillis,n))return r;e.eTag=r&&r.eTag;const i=await this.client.fetch(e),s=[this.storageCache.setLastSuccessfulFetchTimestampMillis(Date.now())];return i.status===200&&s.push(this.storage.setLastSuccessfulFetchResponse(i)),await Promise.all(s),i}}/**
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
 */function SU(t=navigator){return t.languages&&t.languages[0]||t.language}/**
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
 */class TU{constructor(e,n,r,i,s,o){this.firebaseInstallations=e,this.sdkVersion=n,this.namespace=r,this.projectId=i,this.apiKey=s,this.appId=o}async fetch(e){var n,r,i;const[s,o]=await Promise.all([this.firebaseInstallations.getId(),this.firebaseInstallations.getToken()]),l=`${window.FIREBASE_REMOTE_CONFIG_URL_BASE||"https://firebaseremoteconfig.googleapis.com"}/v1/projects/${this.projectId}/namespaces/${this.namespace}:fetch?key=${this.apiKey}`,u={"Content-Type":"application/json","Content-Encoding":"gzip","If-None-Match":e.eTag||"*"},c={sdk_version:this.sdkVersion,app_instance_id:s,app_instance_id_token:o,app_id:this.appId,language_code:SU()},h={method:"POST",headers:u,body:JSON.stringify(c)},d=fetch(l,h),f=new Promise((y,_)=>{e.signal.addEventListener(()=>{const I=new Error("The operation was aborted.");I.name="AbortError",_(I)})});let g;try{await Promise.race([d,f]),g=await d}catch(y){let _="fetch-client-network";throw((n=y)===null||n===void 0?void 0:n.name)==="AbortError"&&(_="fetch-timeout"),gt.create(_,{originalErrorMessage:(r=y)===null||r===void 0?void 0:r.message})}let v=g.status;const w=g.headers.get("ETag")||void 0;let m,p;if(g.status===200){let y;try{y=await g.json()}catch(_){throw gt.create("fetch-client-parse",{originalErrorMessage:(i=_)===null||i===void 0?void 0:i.message})}m=y.entries,p=y.state}if(p==="INSTANCE_STATE_UNSPECIFIED"?v=500:p==="NO_CHANGE"?v=304:(p==="NO_TEMPLATE"||p==="EMPTY_CONFIG")&&(m={}),v!==304&&v!==200)throw gt.create("fetch-status",{httpStatus:v});return{status:v,eTag:w,config:m}}}/**
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
 */function IU(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(gt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function kU(t){if(!(t instanceof jt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class NU{constructor(e,n){this.client=e,this.storage=n}async fetch(e){const n=await this.storage.getThrottleMetadata()||{backoffCount:0,throttleEndTimeMillis:Date.now()};return this.attemptFetch(e,n)}async attemptFetch(e,{throttleEndTimeMillis:n,backoffCount:r}){await IU(e.signal,n);try{const i=await this.client.fetch(e);return await this.storage.deleteThrottleMetadata(),i}catch(i){if(!kU(i))throw i;const s={throttleEndTimeMillis:Date.now()+AR(r),backoffCount:r+1};return await this.storage.setThrottleMetadata(s),this.attemptFetch(e,s)}}}/**
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
 */const RU=60*1e3,AU=12*60*60*1e3;class xU{constructor(e,n,r,i,s){this.app=e,this._client=n,this._storageCache=r,this._storage=i,this._logger=s,this._isInitializationComplete=!1,this.settings={fetchTimeoutMillis:RU,minimumFetchIntervalMillis:AU},this.defaultConfig={}}get fetchTimeMillis(){return this._storageCache.getLastSuccessfulFetchTimestampMillis()||-1}get lastFetchStatus(){return this._storageCache.getLastFetchStatus()||"no-fetch-yet"}}/**
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
 */function Yl(t,e){var n;const r=t.target.error||void 0;return gt.create(e,{originalErrorMessage:r&&((n=r)===null||n===void 0?void 0:n.message)})}const xr="app_namespace_store",bU="firebase_remote_config",PU=1;function DU(){return new Promise((t,e)=>{var n;try{const r=indexedDB.open(bU,PU);r.onerror=i=>{e(Yl(i,"storage-open"))},r.onsuccess=i=>{t(i.target.result)},r.onupgradeneeded=i=>{const s=i.target.result;switch(i.oldVersion){case 0:s.createObjectStore(xr,{keyPath:"compositeKey"})}}}catch(r){e(gt.create("storage-open",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message}))}})}class OU{constructor(e,n,r,i=DU()){this.appId=e,this.appName=n,this.namespace=r,this.openDbPromise=i}getLastFetchStatus(){return this.get("last_fetch_status")}setLastFetchStatus(e){return this.set("last_fetch_status",e)}getLastSuccessfulFetchTimestampMillis(){return this.get("last_successful_fetch_timestamp_millis")}setLastSuccessfulFetchTimestampMillis(e){return this.set("last_successful_fetch_timestamp_millis",e)}getLastSuccessfulFetchResponse(){return this.get("last_successful_fetch_response")}setLastSuccessfulFetchResponse(e){return this.set("last_successful_fetch_response",e)}getActiveConfig(){return this.get("active_config")}setActiveConfig(e){return this.set("active_config",e)}getActiveConfigEtag(){return this.get("active_config_etag")}setActiveConfigEtag(e){return this.set("active_config_etag",e)}getThrottleMetadata(){return this.get("throttle_metadata")}setThrottleMetadata(e){return this.set("throttle_metadata",e)}deleteThrottleMetadata(){return this.delete("throttle_metadata")}async get(e){const n=await this.openDbPromise;return new Promise((r,i)=>{var s;const a=n.transaction([xr],"readonly").objectStore(xr),l=this.createCompositeKey(e);try{const u=a.get(l);u.onerror=c=>{i(Yl(c,"storage-get"))},u.onsuccess=c=>{const h=c.target.result;r(h?h.value:void 0)}}catch(u){i(gt.create("storage-get",{originalErrorMessage:(s=u)===null||s===void 0?void 0:s.message}))}})}async set(e,n){const r=await this.openDbPromise;return new Promise((i,s)=>{var o;const l=r.transaction([xr],"readwrite").objectStore(xr),u=this.createCompositeKey(e);try{const c=l.put({compositeKey:u,value:n});c.onerror=h=>{s(Yl(h,"storage-set"))},c.onsuccess=()=>{i()}}catch(c){s(gt.create("storage-set",{originalErrorMessage:(o=c)===null||o===void 0?void 0:o.message}))}})}async delete(e){const n=await this.openDbPromise;return new Promise((r,i)=>{var s;const a=n.transaction([xr],"readwrite").objectStore(xr),l=this.createCompositeKey(e);try{const u=a.delete(l);u.onerror=c=>{i(Yl(c,"storage-delete"))},u.onsuccess=()=>{r()}}catch(u){i(gt.create("storage-delete",{originalErrorMessage:(s=u)===null||s===void 0?void 0:s.message}))}})}createCompositeKey(e){return[this.appId,this.appName,this.namespace,e].join()}}/**
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
 */class MU{constructor(e){this.storage=e}getLastFetchStatus(){return this.lastFetchStatus}getLastSuccessfulFetchTimestampMillis(){return this.lastSuccessfulFetchTimestampMillis}getActiveConfig(){return this.activeConfig}async loadFromStorage(){const e=this.storage.getLastFetchStatus(),n=this.storage.getLastSuccessfulFetchTimestampMillis(),r=this.storage.getActiveConfig(),i=await e;i&&(this.lastFetchStatus=i);const s=await n;s&&(this.lastSuccessfulFetchTimestampMillis=s);const o=await r;o&&(this.activeConfig=o)}setLastFetchStatus(e){return this.lastFetchStatus=e,this.storage.setLastFetchStatus(e)}setLastSuccessfulFetchTimestampMillis(e){return this.lastSuccessfulFetchTimestampMillis=e,this.storage.setLastSuccessfulFetchTimestampMillis(e)}setActiveConfig(e){return this.activeConfig=e,this.storage.setActiveConfig(e)}}/**
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
 */function LU(){zt(new xt(_U,t,"PUBLIC").setMultipleInstances(!0)),Te(hd,p0),Te(hd,p0,"esm2017");function t(e,{instanceIdentifier:n}){const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();if(typeof window>"u")throw gt.create("registration-window");if(!$E())throw gt.create("indexed-db-unavailable");const{projectId:s,apiKey:o,appId:a}=r.options;if(!s)throw gt.create("registration-project-id");if(!o)throw gt.create("registration-api-key");if(!a)throw gt.create("registration-app-id");n=n||"firebase";const l=new OU(a,r.name,n),u=new MU(l),c=new Ta(hd);c.logLevel=Y.ERROR;const h=new TU(i,wr,n,s,o,a),d=new NU(h,l),f=new CU(d,l,u,c),g=new xU(r,f,u,l,c);return EU(g),g}}LU();var sh={exports:{}},oh={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var FU=ee.exports,$U=Symbol.for("react.element"),UU=Symbol.for("react.fragment"),VU=Object.prototype.hasOwnProperty,BU=FU.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,zU={key:!0,ref:!0,__self:!0,__source:!0};function hI(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)VU.call(e,r)&&!zU.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:$U,type:t,key:s,ref:o,props:i,_owner:BU.current}}oh.Fragment=UU;oh.jsx=hI;oh.jsxs=hI;(function(t){t.exports=oh})(sh);const ep=sh.exports.Fragment,pe=sh.exports.jsx,di=sh.exports.jsxs;var tp=function(t,e){return tp=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])},tp(t,e)};function Un(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");tp(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}function jU(t,e,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(c){try{u(r.next(c))}catch(h){o(h)}}function l(c){try{u(r.throw(c))}catch(h){o(h)}}function u(c){c.done?s(c.value):i(c.value).then(a,l)}u((r=r.apply(t,e||[])).next())})}function dI(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(u){return function(c){return l([u,c])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=u[0]&2?i.return:u[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,u[1])).done)return s;switch(i=0,s&&(u=[u[0]&2,s.value]),u[0]){case 0:case 1:s=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!s||u[1]>s[0]&&u[1]<s[3])){n.label=u[1];break}if(u[0]===6&&n.label<s[1]){n.label=s[1],s=u;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(u);break}s[2]&&n.ops.pop(),n.trys.pop();continue}u=e.call(t,n)}catch(c){u=[6,c],i=0}finally{r=s=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}function Cs(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Ss(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),i,s=[],o;try{for(;(e===void 0||e-- >0)&&!(i=r.next()).done;)s.push(i.value)}catch(a){o={error:a}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(o)throw o.error}}return s}function Ts(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}function ns(t){return this instanceof ns?(this.v=t,this):new ns(t)}function HU(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(t,e||[]),i,s=[];return i={},o("next"),o("throw"),o("return"),i[Symbol.asyncIterator]=function(){return this},i;function o(d){r[d]&&(i[d]=function(f){return new Promise(function(g,v){s.push([d,f,g,v])>1||a(d,f)})})}function a(d,f){try{l(r[d](f))}catch(g){h(s[0][3],g)}}function l(d){d.value instanceof ns?Promise.resolve(d.value.v).then(u,c):h(s[0][2],d)}function u(d){a("next",d)}function c(d){a("throw",d)}function h(d,f){d(f),s.shift(),s.length&&a(s[0][0],s[0][1])}}function WU(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=t[Symbol.asyncIterator],n;return e?e.call(t):(t=typeof Cs=="function"?Cs(t):t[Symbol.iterator](),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(s){n[s]=t[s]&&function(o){return new Promise(function(a,l){o=t[s](o),i(a,l,o.done,o.value)})}}function i(s,o,a,l){Promise.resolve(l).then(function(u){s({value:u,done:a})},o)}}function be(t){return typeof t=="function"}function Bg(t){var e=function(r){Error.call(r),r.stack=new Error().stack},n=t(e);return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var dd=Bg(function(t){return function(e){t(this),this.message=e?e.length+` errors occurred during unsubscription:
`+e.map(function(n,r){return r+1+") "+n.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=e}});function ac(t,e){if(t){var n=t.indexOf(e);0<=n&&t.splice(n,1)}}var Ja=function(){function t(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}return t.prototype.unsubscribe=function(){var e,n,r,i,s;if(!this.closed){this.closed=!0;var o=this._parentage;if(o)if(this._parentage=null,Array.isArray(o))try{for(var a=Cs(o),l=a.next();!l.done;l=a.next()){var u=l.value;u.remove(this)}}catch(v){e={error:v}}finally{try{l&&!l.done&&(n=a.return)&&n.call(a)}finally{if(e)throw e.error}}else o.remove(this);var c=this.initialTeardown;if(be(c))try{c()}catch(v){s=v instanceof dd?v.errors:[v]}var h=this._finalizers;if(h){this._finalizers=null;try{for(var d=Cs(h),f=d.next();!f.done;f=d.next()){var g=f.value;try{m0(g)}catch(v){s=s!=null?s:[],v instanceof dd?s=Ts(Ts([],Ss(s)),Ss(v.errors)):s.push(v)}}}catch(v){r={error:v}}finally{try{f&&!f.done&&(i=d.return)&&i.call(d)}finally{if(r)throw r.error}}}if(s)throw new dd(s)}},t.prototype.add=function(e){var n;if(e&&e!==this)if(this.closed)m0(e);else{if(e instanceof t){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(e)}},t.prototype._hasParent=function(e){var n=this._parentage;return n===e||Array.isArray(n)&&n.includes(e)},t.prototype._addParent=function(e){var n=this._parentage;this._parentage=Array.isArray(n)?(n.push(e),n):n?[n,e]:e},t.prototype._removeParent=function(e){var n=this._parentage;n===e?this._parentage=null:Array.isArray(n)&&ac(n,e)},t.prototype.remove=function(e){var n=this._finalizers;n&&ac(n,e),e instanceof t&&e._removeParent(this)},t.EMPTY=function(){var e=new t;return e.closed=!0,e}(),t}(),fI=Ja.EMPTY;function pI(t){return t instanceof Ja||t&&"closed"in t&&be(t.remove)&&be(t.add)&&be(t.unsubscribe)}function m0(t){be(t)?t():t.unsubscribe()}var mI={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},qU={setTimeout:function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];return setTimeout.apply(void 0,Ts([t,e],Ss(n)))},clearTimeout:function(t){return clearTimeout(t)},delegate:void 0};function gI(t){qU.setTimeout(function(){throw t})}function g0(){}function Xl(t){t()}var zg=function(t){Un(e,t);function e(n){var r=t.call(this)||this;return r.isStopped=!1,n?(r.destination=n,pI(n)&&n.add(r)):r.destination=YU,r}return e.create=function(n,r,i){return new va(n,r,i)},e.prototype.next=function(n){this.isStopped||this._next(n)},e.prototype.error=function(n){this.isStopped||(this.isStopped=!0,this._error(n))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(n){this.destination.next(n)},e.prototype._error=function(n){try{this.destination.error(n)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e}(Ja),KU=Function.prototype.bind;function fd(t,e){return KU.call(t,e)}var GU=function(){function t(e){this.partialObserver=e}return t.prototype.next=function(e){var n=this.partialObserver;if(n.next)try{n.next(e)}catch(r){Rl(r)}},t.prototype.error=function(e){var n=this.partialObserver;if(n.error)try{n.error(e)}catch(r){Rl(r)}else Rl(e)},t.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(n){Rl(n)}},t}(),va=function(t){Un(e,t);function e(n,r,i){var s=t.call(this)||this,o;if(be(n)||!n)o={next:n!=null?n:void 0,error:r!=null?r:void 0,complete:i!=null?i:void 0};else{var a;s&&mI.useDeprecatedNextContext?(a=Object.create(n),a.unsubscribe=function(){return s.unsubscribe()},o={next:n.next&&fd(n.next,a),error:n.error&&fd(n.error,a),complete:n.complete&&fd(n.complete,a)}):o=n}return s.destination=new GU(o),s}return e}(zg);function Rl(t){gI(t)}function QU(t){throw t}var YU={closed:!0,next:g0,error:QU,complete:g0},jg=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function yI(t){return t}function XU(t){return t.length===0?yI:t.length===1?t[0]:function(e){return t.reduce(function(n,r){return r(n)},e)}}var ht=function(){function t(e){e&&(this._subscribe=e)}return t.prototype.lift=function(e){var n=new t;return n.source=this,n.operator=e,n},t.prototype.subscribe=function(e,n,r){var i=this,s=ZU(e)?e:new va(e,n,r);return Xl(function(){var o=i,a=o.operator,l=o.source;s.add(a?a.call(s,l):l?i._subscribe(s):i._trySubscribe(s))}),s},t.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(n){e.error(n)}},t.prototype.forEach=function(e,n){var r=this;return n=y0(n),new n(function(i,s){var o=new va({next:function(a){try{e(a)}catch(l){s(l),o.unsubscribe()}},error:s,complete:i});r.subscribe(o)})},t.prototype._subscribe=function(e){var n;return(n=this.source)===null||n===void 0?void 0:n.subscribe(e)},t.prototype[jg]=function(){return this},t.prototype.pipe=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return XU(e)(this)},t.prototype.toPromise=function(e){var n=this;return e=y0(e),new e(function(r,i){var s;n.subscribe(function(o){return s=o},function(o){return i(o)},function(){return r(s)})})},t.create=function(e){return new t(e)},t}();function y0(t){var e;return(e=t!=null?t:mI.Promise)!==null&&e!==void 0?e:Promise}function JU(t){return t&&be(t.next)&&be(t.error)&&be(t.complete)}function ZU(t){return t&&t instanceof zg||JU(t)&&pI(t)}function eV(t){return be(t==null?void 0:t.lift)}function Ei(t){return function(e){if(eV(e))return e.lift(function(n){try{return t(n,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function Is(t,e,n,r,i){return new tV(t,e,n,r,i)}var tV=function(t){Un(e,t);function e(n,r,i,s,o,a){var l=t.call(this,n)||this;return l.onFinalize=o,l.shouldUnsubscribe=a,l._next=r?function(u){try{r(u)}catch(c){n.error(c)}}:t.prototype._next,l._error=s?function(u){try{s(u)}catch(c){n.error(c)}finally{this.unsubscribe()}}:t.prototype._error,l._complete=i?function(){try{i()}catch(u){n.error(u)}finally{this.unsubscribe()}}:t.prototype._complete,l}return e.prototype.unsubscribe=function(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var r=this.closed;t.prototype.unsubscribe.call(this),!r&&((n=this.onFinalize)===null||n===void 0||n.call(this))}},e}(zg),nV=Bg(function(t){return function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),ah=function(t){Un(e,t);function e(){var n=t.call(this)||this;return n.closed=!1,n.currentObservers=null,n.observers=[],n.isStopped=!1,n.hasError=!1,n.thrownError=null,n}return e.prototype.lift=function(n){var r=new v0(this,this);return r.operator=n,r},e.prototype._throwIfClosed=function(){if(this.closed)throw new nV},e.prototype.next=function(n){var r=this;Xl(function(){var i,s;if(r._throwIfClosed(),!r.isStopped){r.currentObservers||(r.currentObservers=Array.from(r.observers));try{for(var o=Cs(r.currentObservers),a=o.next();!a.done;a=o.next()){var l=a.value;l.next(n)}}catch(u){i={error:u}}finally{try{a&&!a.done&&(s=o.return)&&s.call(o)}finally{if(i)throw i.error}}}})},e.prototype.error=function(n){var r=this;Xl(function(){if(r._throwIfClosed(),!r.isStopped){r.hasError=r.isStopped=!0,r.thrownError=n;for(var i=r.observers;i.length;)i.shift().error(n)}})},e.prototype.complete=function(){var n=this;Xl(function(){if(n._throwIfClosed(),!n.isStopped){n.isStopped=!0;for(var r=n.observers;r.length;)r.shift().complete()}})},e.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(e.prototype,"observed",{get:function(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0},enumerable:!1,configurable:!0}),e.prototype._trySubscribe=function(n){return this._throwIfClosed(),t.prototype._trySubscribe.call(this,n)},e.prototype._subscribe=function(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)},e.prototype._innerSubscribe=function(n){var r=this,i=this,s=i.hasError,o=i.isStopped,a=i.observers;return s||o?fI:(this.currentObservers=null,a.push(n),new Ja(function(){r.currentObservers=null,ac(a,n)}))},e.prototype._checkFinalizedStatuses=function(n){var r=this,i=r.hasError,s=r.thrownError,o=r.isStopped;i?n.error(s):o&&n.complete()},e.prototype.asObservable=function(){var n=new ht;return n.source=this,n},e.create=function(n,r){return new v0(n,r)},e}(ht),v0=function(t){Un(e,t);function e(n,r){var i=t.call(this)||this;return i.destination=n,i.source=r,i}return e.prototype.next=function(n){var r,i;(i=(r=this.destination)===null||r===void 0?void 0:r.next)===null||i===void 0||i.call(r,n)},e.prototype.error=function(n){var r,i;(i=(r=this.destination)===null||r===void 0?void 0:r.error)===null||i===void 0||i.call(r,n)},e.prototype.complete=function(){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||r===void 0||r.call(n)},e.prototype._subscribe=function(n){var r,i;return(i=(r=this.source)===null||r===void 0?void 0:r.subscribe(n))!==null&&i!==void 0?i:fI},e}(ah),Hg={now:function(){return(Hg.delegate||Date).now()},delegate:void 0},rV=function(t){Un(e,t);function e(n,r,i){n===void 0&&(n=1/0),r===void 0&&(r=1/0),i===void 0&&(i=Hg);var s=t.call(this)||this;return s._bufferSize=n,s._windowTime=r,s._timestampProvider=i,s._buffer=[],s._infiniteTimeWindow=!0,s._infiniteTimeWindow=r===1/0,s._bufferSize=Math.max(1,n),s._windowTime=Math.max(1,r),s}return e.prototype.next=function(n){var r=this,i=r.isStopped,s=r._buffer,o=r._infiniteTimeWindow,a=r._timestampProvider,l=r._windowTime;i||(s.push(n),!o&&s.push(a.now()+l)),this._trimBuffer(),t.prototype.next.call(this,n)},e.prototype._subscribe=function(n){this._throwIfClosed(),this._trimBuffer();for(var r=this._innerSubscribe(n),i=this,s=i._infiniteTimeWindow,o=i._buffer,a=o.slice(),l=0;l<a.length&&!n.closed;l+=s?1:2)n.next(a[l]);return this._checkFinalizedStatuses(n),r},e.prototype._trimBuffer=function(){var n=this,r=n._bufferSize,i=n._timestampProvider,s=n._buffer,o=n._infiniteTimeWindow,a=(o?1:2)*r;if(r<1/0&&a<s.length&&s.splice(0,s.length-a),!o){for(var l=i.now(),u=0,c=1;c<s.length&&s[c]<=l;c+=2)u=c;u&&s.splice(0,u+1)}},e}(ah),iV=function(t){Un(e,t);function e(n,r){return t.call(this)||this}return e.prototype.schedule=function(n,r){return this},e}(Ja),np={setInterval:function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i=np.delegate;return i!=null&&i.setInterval?i.setInterval.apply(i,Ts([t,e],Ss(n))):setInterval.apply(void 0,Ts([t,e],Ss(n)))},clearInterval:function(t){return clearInterval(t)},delegate:void 0},sV=function(t){Un(e,t);function e(n,r){var i=t.call(this,n,r)||this;return i.scheduler=n,i.work=r,i.pending=!1,i}return e.prototype.schedule=function(n,r){if(r===void 0&&(r=0),this.closed)return this;this.state=n;var i=this.id,s=this.scheduler;return i!=null&&(this.id=this.recycleAsyncId(s,i,r)),this.pending=!0,this.delay=r,this.id=this.id||this.requestAsyncId(s,this.id,r),this},e.prototype.requestAsyncId=function(n,r,i){return i===void 0&&(i=0),np.setInterval(n.flush.bind(n,this),i)},e.prototype.recycleAsyncId=function(n,r,i){if(i===void 0&&(i=0),i!=null&&this.delay===i&&this.pending===!1)return r;np.clearInterval(r)},e.prototype.execute=function(n,r){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var i=this._execute(n,r);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},e.prototype._execute=function(n,r){var i=!1,s;try{this.work(n)}catch(o){i=!0,s=o||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),s},e.prototype.unsubscribe=function(){if(!this.closed){var n=this,r=n.id,i=n.scheduler,s=i.actions;this.work=this.state=this.scheduler=null,this.pending=!1,ac(s,this),r!=null&&(this.id=this.recycleAsyncId(i,r,null)),this.delay=null,t.prototype.unsubscribe.call(this)}},e}(iV),_0=function(){function t(e,n){n===void 0&&(n=t.now),this.schedulerActionCtor=e,this.now=n}return t.prototype.schedule=function(e,n,r){return n===void 0&&(n=0),new this.schedulerActionCtor(this,e).schedule(r,n)},t.now=Hg.now,t}(),oV=function(t){Un(e,t);function e(n,r){r===void 0&&(r=_0.now);var i=t.call(this,n,r)||this;return i.actions=[],i._active=!1,i._scheduled=void 0,i}return e.prototype.flush=function(n){var r=this.actions;if(this._active){r.push(n);return}var i;this._active=!0;do if(i=n.execute(n.state,n.delay))break;while(n=r.shift());if(this._active=!1,i){for(;n=r.shift();)n.unsubscribe();throw i}},e}(_0);new oV(sV);var aV=new ht(function(t){return t.complete()});function lV(t){return t?uV(t):aV}function uV(t){return new ht(function(e){return t.schedule(function(){return e.complete()})})}function cV(t){return t&&be(t.schedule)}function hV(t){return t[t.length-1]}function dV(t){return cV(hV(t))?t.pop():void 0}var vI=function(t){return t&&typeof t.length=="number"&&typeof t!="function"};function _I(t){return be(t==null?void 0:t.then)}function wI(t){return be(t[jg])}function EI(t){return Symbol.asyncIterator&&be(t==null?void 0:t[Symbol.asyncIterator])}function CI(t){return new TypeError("You provided "+(t!==null&&typeof t=="object"?"an invalid object":"'"+t+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function fV(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var SI=fV();function TI(t){return be(t==null?void 0:t[SI])}function II(t){return HU(this,arguments,function(){var e,n,r,i;return dI(this,function(s){switch(s.label){case 0:e=t.getReader(),s.label=1;case 1:s.trys.push([1,,9,10]),s.label=2;case 2:return[4,ns(e.read())];case 3:return n=s.sent(),r=n.value,i=n.done,i?[4,ns(void 0)]:[3,5];case 4:return[2,s.sent()];case 5:return[4,ns(r)];case 6:return[4,s.sent()];case 7:return s.sent(),[3,2];case 8:return[3,10];case 9:return e.releaseLock(),[7];case 10:return[2]}})})}function kI(t){return be(t==null?void 0:t.getReader)}function Bs(t){if(t instanceof ht)return t;if(t!=null){if(wI(t))return pV(t);if(vI(t))return mV(t);if(_I(t))return gV(t);if(EI(t))return NI(t);if(TI(t))return yV(t);if(kI(t))return vV(t)}throw CI(t)}function pV(t){return new ht(function(e){var n=t[jg]();if(be(n.subscribe))return n.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function mV(t){return new ht(function(e){for(var n=0;n<t.length&&!e.closed;n++)e.next(t[n]);e.complete()})}function gV(t){return new ht(function(e){t.then(function(n){e.closed||(e.next(n),e.complete())},function(n){return e.error(n)}).then(null,gI)})}function yV(t){return new ht(function(e){var n,r;try{for(var i=Cs(t),s=i.next();!s.done;s=i.next()){var o=s.value;if(e.next(o),e.closed)return}}catch(a){n={error:a}}finally{try{s&&!s.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}e.complete()})}function NI(t){return new ht(function(e){_V(t,e).catch(function(n){return e.error(n)})})}function vV(t){return NI(II(t))}function _V(t,e){var n,r,i,s;return jU(this,void 0,void 0,function(){var o,a;return dI(this,function(l){switch(l.label){case 0:l.trys.push([0,5,6,11]),n=WU(t),l.label=1;case 1:return[4,n.next()];case 2:if(r=l.sent(),!!r.done)return[3,4];if(o=r.value,e.next(o),e.closed)return[2];l.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return a=l.sent(),i={error:a},[3,11];case 6:return l.trys.push([6,,9,10]),r&&!r.done&&(s=n.return)?[4,s.call(n)]:[3,8];case 7:l.sent(),l.label=8;case 8:return[3,10];case 9:if(i)throw i.error;return[7];case 10:return[7];case 11:return e.complete(),[2]}})})}function qr(t,e,n,r,i){r===void 0&&(r=0),i===void 0&&(i=!1);var s=e.schedule(function(){n(),i?t.add(this.schedule(null,r)):this.unsubscribe()},r);if(t.add(s),!i)return s}function RI(t,e){return e===void 0&&(e=0),Ei(function(n,r){n.subscribe(Is(r,function(i){return qr(r,t,function(){return r.next(i)},e)},function(){return qr(r,t,function(){return r.complete()},e)},function(i){return qr(r,t,function(){return r.error(i)},e)}))})}function AI(t,e){return e===void 0&&(e=0),Ei(function(n,r){r.add(t.schedule(function(){return n.subscribe(r)},e))})}function wV(t,e){return Bs(t).pipe(AI(e),RI(e))}function EV(t,e){return Bs(t).pipe(AI(e),RI(e))}function CV(t,e){return new ht(function(n){var r=0;return e.schedule(function(){r===t.length?n.complete():(n.next(t[r++]),n.closed||this.schedule())})})}function SV(t,e){return new ht(function(n){var r;return qr(n,e,function(){r=t[SI](),qr(n,e,function(){var i,s,o;try{i=r.next(),s=i.value,o=i.done}catch(a){n.error(a);return}o?n.complete():n.next(s)},0,!0)}),function(){return be(r==null?void 0:r.return)&&r.return()}})}function xI(t,e){if(!t)throw new Error("Iterable cannot be null");return new ht(function(n){qr(n,e,function(){var r=t[Symbol.asyncIterator]();qr(n,e,function(){r.next().then(function(i){i.done?n.complete():n.next(i.value)})},0,!0)})})}function TV(t,e){return xI(II(t),e)}function IV(t,e){if(t!=null){if(wI(t))return wV(t,e);if(vI(t))return CV(t,e);if(_I(t))return EV(t,e);if(EI(t))return xI(t,e);if(TI(t))return SV(t,e);if(kI(t))return TV(t,e)}throw CI(t)}function bI(t,e){return e?IV(t,e):Bs(t)}function w0(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=dV(t);return bI(t,n)}Bg(function(t){return function(){t(this),this.name="EmptyError",this.message="no elements in sequence"}});function Wg(t,e){return Ei(function(n,r){var i=0;n.subscribe(Is(r,function(s){r.next(t.call(e,s,i++))}))})}function PI(t){return Ei(function(e,n){var r=null,i=!1,s;r=e.subscribe(Is(n,void 0,void 0,function(o){s=Bs(t(o,PI(t)(e))),r?(r.unsubscribe(),r=null,s.subscribe(n)):i=!0})),i&&(r.unsubscribe(),r=null,s.subscribe(n))})}function kV(t){t===void 0&&(t={});var e=t.connector,n=e===void 0?function(){return new ah}:e,r=t.resetOnError,i=r===void 0?!0:r,s=t.resetOnComplete,o=s===void 0?!0:s,a=t.resetOnRefCountZero,l=a===void 0?!0:a;return function(u){var c,h,d,f=0,g=!1,v=!1,w=function(){h==null||h.unsubscribe(),h=void 0},m=function(){w(),c=d=void 0,g=v=!1},p=function(){var y=c;m(),y==null||y.unsubscribe()};return Ei(function(y,_){f++,!v&&!g&&w();var I=d=d!=null?d:n();_.add(function(){f--,f===0&&!v&&!g&&(h=pd(p,l))}),I.subscribe(_),!c&&f>0&&(c=new va({next:function(k){return I.next(k)},error:function(k){v=!0,w(),h=pd(m,i,k),I.error(k)},complete:function(){g=!0,w(),h=pd(m,o),I.complete()}}),Bs(y).subscribe(c))})(u)}}function pd(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(e===!0){t();return}if(e!==!1){var i=new va({next:function(){i.unsubscribe(),t()}});return e.apply(void 0,Ts([],Ss(n))).subscribe(i)}}function NV(t,e,n){var r,i,s,o,a=!1;return t&&typeof t=="object"?(r=t.bufferSize,o=r===void 0?1/0:r,i=t.windowTime,e=i===void 0?1/0:i,s=t.refCount,a=s===void 0?!1:s,n=t.scheduler):o=t!=null?t:1/0,kV({connector:function(){return new rV(o,e,n)},resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:a})}function RV(t,e){return Ei(function(n,r){var i=null,s=0,o=!1,a=function(){return o&&!i&&r.complete()};n.subscribe(Is(r,function(l){i==null||i.unsubscribe();var u=0,c=s++;Bs(t(l,c)).subscribe(i=Is(r,function(h){return r.next(e?e(l,h,c,u++):h)},function(){i=null,a()}))},function(){o=!0,a()}))})}function AV(t,e,n){var r=be(t)||e||n?{next:t,error:e,complete:n}:t;return r?Ei(function(i,s){var o;(o=r.subscribe)===null||o===void 0||o.call(r);var a=!0;i.subscribe(Is(s,function(l){var u;(u=r.next)===null||u===void 0||u.call(r,l),s.next(l)},function(){var l;a=!1,(l=r.complete)===null||l===void 0||l.call(r),s.complete()},function(l){var u;a=!1,(u=r.error)===null||u===void 0||u.call(r,l),s.error(l)},function(){var l,u;a&&((l=r.unsubscribe)===null||l===void 0||l.call(r)),(u=r.finalize)===null||u===void 0||u.call(r)}))}):yI}function DI(t){return new ht(function(e){var n=fx(t,e.next.bind(e),e.error.bind(e),e.complete.bind(e));return{unsubscribe:n}})}const xV="[DEFAULT]",OI=ee.exports.createContext(void 0),MI=ee.exports.createContext(!1),bV="4.2.2",PV=(t,e)=>t===e||[...Object.keys(t),...Object.keys(e)].every(n=>t[n]===e[n]);function DV(t){const{firebaseConfig:e,appName:n,suspense:r}=t,i=ee.exports.useMemo(()=>{if(t.firebaseApp)return t.firebaseApp;const s=kA().find(o=>o.name===(n||xV));if(s){if(e&&PV(s.options,e))return s;throw new Error(`Does not match the options already provided to the ${n||"default"} firebase app instance, give this new instance a different appName.`)}else{if(!e)throw new Error("No firebaseConfig provided");const o=ee.exports.version||"unknown";return Te("react",o),Te("reactfire",bV),IA(e,n)}},[t.firebaseApp,e,n]);return ee.exports.createElement(OI.Provider,{value:i},pe(MI.Provider,{...Object.assign({value:r!=null?r:!1},t)}))}function OV(t){let e=ee.exports.useContext(MI);return t!==void 0?t:e}function LI(){const t=ee.exports.useContext(OI);if(!t)throw new Error("Cannot call useFirebaseApp unless your component is within a FirebaseAppProvider");return t}function MV(t){var e;const n=Gg(),r=`auth:user:${n.name}`,i=DI(n),s=(e=Object.assign({},t))!==null&&e!==void 0?e:{};return n.currentUser!==void 0&&(s.initialData=n.currentUser,s.startWithValue=n.currentUser),qg(r,i,s)}function FI(t){if((t==null?void 0:t.hasOwnProperty("requiredClaims"))&&(t==null?void 0:t.hasOwnProperty("validateCustomClaims")))throw new Error('Cannot have both "requiredClaims" and "validateCustomClaims". Use one or the other.');const e=Gg();let n=`auth:signInCheck:${e.name}::forceRefresh:${!!(t!=null&&t.forceRefresh)}`;t!=null&&t.forceRefresh&&(n=`${n}:forceRefresh:${t.forceRefresh}`),t!=null&&t.hasOwnProperty("requiredClaims")?n=`${n}:requiredClaims:${JSON.stringify(t.requiredClaims)}`:t!=null&&t.hasOwnProperty("validateCustomClaims")&&(n=`${n}:validateCustomClaims:${JSON.stringify(t.validateCustomClaims)}`);const r=DI(e).pipe(RV(i=>{var s;return i?t&&(t.hasOwnProperty("requiredClaims")||t.hasOwnProperty("validateCustomClaims"))?bI(i.getIdTokenResult((s=t==null?void 0:t.forceRefresh)!==null&&s!==void 0?s:!1)).pipe(Wg(o=>{let a;t.hasOwnProperty("requiredClaims")?a=LV(t.requiredClaims):a=t.validateCustomClaims;const{hasRequiredClaims:l,errors:u}=a(o.claims);return{signedIn:!0,hasRequiredClaims:l,errors:u,user:i}})):w0({signedIn:!0,hasRequiredClaims:!0,errors:{},user:i}):w0({signedIn:!1,hasRequiredClaims:!1,errors:{},user:null})}));return qg(n,r)}function LV(t){return function(e){const n={};return Object.keys(t).forEach(r=>{t[r]!==e[r]&&(n[r]=[new Qg("auth/missing-claim",`Expected "${t[r]}", but user has "${e[r]}" instead`)])}),{hasRequiredClaims:Object.keys(n).length===0,errors:n}}}/**
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
 */var Ir,br;(function(t){t.added="child_added",t.removed="child_removed",t.changed="child_changed",t.moved="child_moved",t.value="value"})(br||(br={}));Object.freeze((Ir={},Ir[br.added]=SO,Ir[br.removed]=kO,Ir[br.changed]=TO,Ir[br.moved]=IO,Ir[br.value]=CO,Ir));const FV=globalThis._reactFireDatabaseCachedQueries||[];globalThis._reactFireDatabaseCachedQueries||(globalThis._reactFireDatabaseCachedQueries=FV);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $V={includeMetadataChanges:!1};function UV(t,e){return e===void 0&&(e=$V),new ht(function(n){var r=X$(t,e,{next:n.next.bind(n),error:n.error.bind(n),complete:n.complete.bind(n)});return{unsubscribe:r}})}function VV(t,e){e===void 0&&(e={});var n=t.data();return!t.exists()||typeof n!="object"||n===null||e.idField&&(n[e.idField]=t.id),n}function BV(t){return UV(t,{includeMetadataChanges:!0}).pipe(Wg(function(e){return e.docs}))}function zV(t,e){return e===void 0&&(e={}),BV(t).pipe(Wg(function(n){return n.map(function(r){return VV(r,e)})}))}class jV extends ah{constructor(e,n){super(),this._timeoutWindow=n,this._hasValue=!1,this._error=void 0,this._firstEmission=new Promise(r=>this._resolveFirstEmission=r),this._innerObservable=e.pipe(AV({next:r=>{this._next(r)},error:r=>{this._error=r,this._resolveFirstEmission()}}),PI(()=>lV()),NV(1)),this._warmupSubscription=this._innerObservable.subscribe(),this._timeoutHandler=setTimeout(this._reset.bind(this),this._timeoutWindow)}get hasValue(){return this._hasValue||!!this._error}get value(){if(this._error)throw this._error;if(!this.hasValue)throw Error("Can only get value if SuspenseSubject has a value");return this._value}get firstEmission(){return this._firstEmission}_next(e){this._hasValue=!0,this._value=e,this._resolveFirstEmission()}_reset(){this._warmupSubscription&&this._warmupSubscription.unsubscribe(),this._hasValue=!1,this._value=void 0,this._error=void 0,this._firstEmission=new Promise(e=>this._resolveFirstEmission=e)}_subscribe(e){return this._timeoutHandler&&clearTimeout(this._timeoutHandler),this._innerSubscriber=this._innerObservable.subscribe(e),this._innerSubscriber}get ourError(){return this._error}}const HV=3e4,Jl=globalThis._reactFirePreloadedObservables||new Map;globalThis._reactFirePreloadedObservables||(globalThis._reactFirePreloadedObservables=Jl);function WV(t,e){if(Jl.has(e))return Jl.get(e);{const n=new jV(t,HV);return Jl.set(e,n),n}}function qV(t){return function(e,n){const r=Object.assign(Object.assign({},e),{hasEmitted:e.hasEmitted||t.hasValue,error:t.ourError,firstValuePromise:t.firstEmission});switch(t.hasValue&&(r.data=t.value),n){case"value":return r.status="success",r;case"error":return r.status="error",r;case"complete":return r.isComplete=!0,r;default:throw new Error(`invalid action "${n}"`)}}}function qg(t,e,n={}){var r;if(!t)throw new Error("cannot call useObservable without an observableId");const i=WV(e,t),s=n.hasOwnProperty("initialData")||n.hasOwnProperty("startWithValue"),o=i.hasValue||s;if(OV(n.suspense)===!0&&!o)throw i.firstEmission;const a={status:o?"success":"loading",hasEmitted:o,isComplete:!1,data:i.hasValue?i.value:(r=n==null?void 0:n.initialData)!==null&&r!==void 0?r:n==null?void 0:n.startWithValue,error:i.ourError,firstValuePromise:i.firstEmission},[l,u]=ee.exports.useReducer(qV(i),a);return ee.exports.useEffect(()=>{const c=i.subscribe({next:()=>{u("value")},error:h=>{throw u("error"),h},complete:()=>{u("complete")}});return()=>c.unsubscribe()},[i]),l}const rp=globalThis._reactFireFirestoreQueryCache||[];globalThis._reactFireFirestoreQueryCache||(globalThis._reactFireFirestoreQueryCache=rp);function KV(t){const e=rp.findIndex(n=>N$(n,t));return e>-1?e:rp.push(t)-1}function GV(t,e){const n=e?tB(e):"NO_ID_FIELD",r=`firestore:collectionData:${KV(t)}:idField=${n}`,i=zV(t,{idField:n});return qg(r,i,e)}ee.exports.createContext(void 0);const $I=ee.exports.createContext(void 0);ee.exports.createContext(void 0);const QV=ee.exports.createContext(void 0),UI=ee.exports.createContext(void 0);ee.exports.createContext(void 0);ee.exports.createContext(void 0);ee.exports.createContext(void 0);ee.exports.createContext(void 0);function Kg(t){return function(e){var n,r;if(!e.sdk)throw new Error("no sdk provided");const i=LI().name;if(((r=(n=e==null?void 0:e.sdk)===null||n===void 0?void 0:n.app)===null||r===void 0?void 0:r.name)!==i)throw new Error("sdk was initialized with a different firebase app");return ee.exports.createElement(t.Provider,Object.assign({value:e.sdk},e))}}function VI(t){const e=ee.exports.useContext(t);if(!e)throw new Error("SDK not found. useSdk must be called from within a provider");return e}const YV=Kg($I),XV=Kg(QV),JV=Kg(UI),Gg=()=>VI($I),ZV=()=>VI(UI);class Qg extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name="ReactFireError",Object.setPrototypeOf(this,Qg.prototype)}}function eB(t,e){if(e==="idField"||e==="initialData"||e==="suspense")return t?t[e]:void 0;throw new Error(`Field "${e}" is not a valid key in ReactFireOptions`)}function tB(t){return eB(t,"idField")}function nB({messagesCollection:t}){const[e,n]=ee.exports.useState(""),{data:r}=MV(),{uid:i,displayName:s,photoURL:o}=r;return di("form",{onSubmit:u=>{u.preventDefault();const c=e.trim();c&&(Y$(t,{text:c,createdAt:e2(),uid:i,displayName:s,photoURL:o}),n(""))},children:[pe("input",{value:e,onChange:u=>{n(u.target.value)},placeholder:"Type your message here..."}),pe(Button,{variant:"danger",disabled:!e,children:"Send"})]})}const rB=new Intl.DateTimeFormat("en-GB",{hour:"numeric",minute:"numeric",second:"numeric",hour12:!1});function iB({createdAt:t,text:e,displayName:n}){return di("div",{children:["[",t!=null&&t.seconds?pe("span",{children:rB.format(new Date(t.seconds*1e3))}):null,"]"," ",di("strong",{children:["<",n||null,">"]})," ",e]})}function sB({messages:t}){return pe("pre",{children:t==null?void 0:t.map(e=>pe(iB,{...e},e.id))})}function oB(){const t=ZV(),e=I$(t,"messages"),n=z$(e,H$("createdAt"),q$(100)),{status:r,data:i}=GV(n,{idField:"id"});return di("div",{children:[r==="loading"?pe("span",{children:"loading..."}):pe(sB,{messages:i}),pe(nB,{messagesCollection:e})]})}const aB=()=>{const t=globalThis._reactFirePreloadedObservables;Array.from(t.keys()).forEach(e=>e.includes("firestore")&&t.delete(e))},lB=async t=>{await px(t),aB()};var BI={exports:{}};/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var s=arguments[i];if(!!s){var o=typeof s;if(o==="string"||o==="number")r.push(s);else if(Array.isArray(s)){if(s.length){var a=n.apply(null,s);a&&r.push(a)}}else if(o==="object")if(s.toString===Object.prototype.toString)for(var l in s)e.call(s,l)&&s[l]&&r.push(l);else r.push(s.toString())}}return r.join(" ")}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(BI);const uB=BI.exports,cB=["as","disabled"];function hB(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function dB(t){return!t||t.trim()==="#"}function zI({tagName:t,disabled:e,href:n,target:r,rel:i,role:s,onClick:o,tabIndex:a=0,type:l}){t||(n!=null||r!=null||i!=null?t="a":t="button");const u={tagName:t};if(t==="button")return[{type:l||"button",disabled:e},u];const c=d=>{if((e||t==="a"&&dB(n))&&d.preventDefault(),e){d.stopPropagation();return}o==null||o(d)},h=d=>{d.key===" "&&(d.preventDefault(),c(d))};return t==="a"&&(n||(n="#"),e&&(n=void 0)),[{role:s!=null?s:"button",disabled:void 0,tabIndex:e?void 0:a,href:n,target:t==="a"?r:void 0,"aria-disabled":e||void 0,rel:t==="a"?i:void 0,onClick:c,onKeyDown:h},u]}const fB=ee.exports.forwardRef((t,e)=>{let{as:n,disabled:r}=t,i=hB(t,cB);const[s,{tagName:o}]=zI(Object.assign({tagName:n,disabled:r},i));return pe(o,Object.assign({},i,s,{ref:e}))});fB.displayName="Button";const pB=["xxl","xl","lg","md","sm","xs"],mB="xs",gB=ee.exports.createContext({prefixes:{},breakpoints:pB,minBreakpoint:mB});function yB(t,e){const{prefixes:n}=ee.exports.useContext(gB);return t||n[e]||e}const vB={variant:"primary",active:!1,disabled:!1},lc=ee.exports.forwardRef(({as:t,bsPrefix:e,variant:n,size:r,active:i,className:s,...o},a)=>{const l=yB(e,"btn"),[u,{tagName:c}]=zI({tagName:t,...o});return pe(c,{...u,...o,ref:a,className:uB(s,l,i&&"active",n&&`${l}-${n}`,r&&`${l}-${r}`,o.href&&o.disabled&&"disabled")})});lc.displayName="Button";lc.defaultProps=vB;function _B(){const{data:t}=FI(),e=Gg();return t.signedIn?di(ep,{children:[pe(lc,{variant:"danger",onClick:()=>lB(e),children:"Sign out"})," "]}):di(ep,{children:[pe(lc,{variant:"danger",onClick:()=>SignInWithGoogle(e),children:"Sign in with Google"})," "]})}function wB(){const{status:t,data:e}=FI();return t==="loading"?pe("span",{children:"loading..."}):di(ep,{children:[pe(_B,{}),e.signedIn&&pe(oB,{})]})}const EB={apiKey:"AIzaSyCxXnUidB20eJPotUbQjUUQmVDk_LFIzQk",authDomain:"example-44ced.firebaseapp.com",projectId:"example-44ced",storageBucket:"example-44ced.appspot.com",messagingSenderId:"340859330515",appId:"1:340859330515:web:98a9e55130e5fbcaced926"};function CB({children:t}){const e=LI(),n=Ib(e),r=DO(e);return pe(JV,{sdk:A$(e),children:pe(YV,{sdk:n,children:pe(XV,{sdk:r,children:t})})})}md.createRoot(document.getElementById("root")).render(pe(ok.StrictMode,{children:pe(DV,{firebaseConfig:EB,children:pe(CB,{children:pe(wB,{})})})}));
