(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Aw(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var E={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ga=Symbol.for("react.element"),vN=Symbol.for("react.portal"),_N=Symbol.for("react.fragment"),wN=Symbol.for("react.strict_mode"),EN=Symbol.for("react.profiler"),CN=Symbol.for("react.provider"),TN=Symbol.for("react.context"),SN=Symbol.for("react.forward_ref"),IN=Symbol.for("react.suspense"),kN=Symbol.for("react.memo"),NN=Symbol.for("react.lazy"),Zy=Symbol.iterator;function RN(t){return t===null||typeof t!="object"?null:(t=Zy&&t[Zy]||t["@@iterator"],typeof t=="function"?t:null)}var Pw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ow=Object.assign,Dw={};function Ys(t,e,n){this.props=t,this.context=e,this.refs=Dw,this.updater=n||Pw}Ys.prototype.isReactComponent={};Ys.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ys.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Mw(){}Mw.prototype=Ys.prototype;function zp(t,e,n){this.props=t,this.context=e,this.refs=Dw,this.updater=n||Pw}var Hp=zp.prototype=new Mw;Hp.constructor=zp;Ow(Hp,Ys.prototype);Hp.isPureReactComponent=!0;var ev=Array.isArray,Lw=Object.prototype.hasOwnProperty,Wp={current:null},Fw={key:!0,ref:!0,__self:!0,__source:!0};function $w(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Lw.call(e,r)&&!Fw.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ga,type:t,key:s,ref:o,props:i,_owner:Wp.current}}function xN(t,e){return{$$typeof:Ga,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function qp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ga}function bN(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var tv=/\/+/g;function Vh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?bN(""+t.key):e.toString(36)}function iu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ga:case vN:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Vh(o,0):r,ev(i)?(n="",t!=null&&(n=t.replace(tv,"$&/")+"/"),iu(i,e,n,"",function(u){return u})):i!=null&&(qp(i)&&(i=xN(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(tv,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",ev(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Vh(s,a);o+=iu(s,e,n,l,i)}else if(l=RN(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Vh(s,a++),o+=iu(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function xl(t,e,n){if(t==null)return t;var r=[],i=0;return iu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function AN(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var yt={current:null},su={transition:null},PN={ReactCurrentDispatcher:yt,ReactCurrentBatchConfig:su,ReactCurrentOwner:Wp};Y.Children={map:xl,forEach:function(t,e,n){xl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return xl(t,function(){e++}),e},toArray:function(t){return xl(t,function(e){return e})||[]},only:function(t){if(!qp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Y.Component=Ys;Y.Fragment=_N;Y.Profiler=EN;Y.PureComponent=zp;Y.StrictMode=wN;Y.Suspense=IN;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=PN;Y.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Ow({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Wp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Lw.call(e,l)&&!Fw.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ga,type:t.type,key:i,ref:s,props:r,_owner:o}};Y.createContext=function(t){return t={$$typeof:TN,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:CN,_context:t},t.Consumer=t};Y.createElement=$w;Y.createFactory=function(t){var e=$w.bind(null,t);return e.type=t,e};Y.createRef=function(){return{current:null}};Y.forwardRef=function(t){return{$$typeof:SN,render:t}};Y.isValidElement=qp;Y.lazy=function(t){return{$$typeof:NN,_payload:{_status:-1,_result:t},_init:AN}};Y.memo=function(t,e){return{$$typeof:kN,type:t,compare:e===void 0?null:e}};Y.startTransition=function(t){var e=su.transition;su.transition={};try{t()}finally{su.transition=e}};Y.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Y.useCallback=function(t,e){return yt.current.useCallback(t,e)};Y.useContext=function(t){return yt.current.useContext(t)};Y.useDebugValue=function(){};Y.useDeferredValue=function(t){return yt.current.useDeferredValue(t)};Y.useEffect=function(t,e){return yt.current.useEffect(t,e)};Y.useId=function(){return yt.current.useId()};Y.useImperativeHandle=function(t,e,n){return yt.current.useImperativeHandle(t,e,n)};Y.useInsertionEffect=function(t,e){return yt.current.useInsertionEffect(t,e)};Y.useLayoutEffect=function(t,e){return yt.current.useLayoutEffect(t,e)};Y.useMemo=function(t,e){return yt.current.useMemo(t,e)};Y.useReducer=function(t,e,n){return yt.current.useReducer(t,e,n)};Y.useRef=function(t){return yt.current.useRef(t)};Y.useState=function(t){return yt.current.useState(t)};Y.useSyncExternalStore=function(t,e,n){return yt.current.useSyncExternalStore(t,e,n)};Y.useTransition=function(){return yt.current.useTransition()};Y.version="18.2.0";(function(t){t.exports=Y})(E);const $n=Aw(E.exports);var Yd={},Kp={exports:{}},$t={},Uw={exports:{}},Vw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(x,$){var U=x.length;x.push($);e:for(;0<U;){var se=U-1>>>1,fe=x[se];if(0<i(fe,$))x[se]=$,x[U]=fe,U=se;else break e}}function n(x){return x.length===0?null:x[0]}function r(x){if(x.length===0)return null;var $=x[0],U=x.pop();if(U!==$){x[0]=U;e:for(var se=0,fe=x.length,ir=fe>>>1;se<ir;){var Vt=2*(se+1)-1,et=x[Vt],ct=Vt+1,sr=x[ct];if(0>i(et,U))ct<fe&&0>i(sr,et)?(x[se]=sr,x[ct]=U,se=ct):(x[se]=et,x[Vt]=U,se=Vt);else if(ct<fe&&0>i(sr,U))x[se]=sr,x[ct]=U,se=ct;else break e}}return $}function i(x,$){var U=x.sortIndex-$.sortIndex;return U!==0?U:x.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,f=!1,g=!1,v=!1,w=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(x){for(var $=n(u);$!==null;){if($.callback===null)r(u);else if($.startTime<=x)r(u),$.sortIndex=$.expirationTime,e(l,$);else break;$=n(u)}}function _(x){if(v=!1,y(x),!g)if(n(l)!==null)g=!0,Hr(I);else{var $=n(u);$!==null&&rr(_,$.startTime-x)}}function I(x,$){g=!1,v&&(v=!1,m(P),P=-1),f=!0;var U=d;try{for(y($),h=n(l);h!==null&&(!(h.expirationTime>$)||x&&!ut());){var se=h.callback;if(typeof se=="function"){h.callback=null,d=h.priorityLevel;var fe=se(h.expirationTime<=$);$=t.unstable_now(),typeof fe=="function"?h.callback=fe:h===n(l)&&r(l),y($)}else r(l);h=n(l)}if(h!==null)var ir=!0;else{var Vt=n(u);Vt!==null&&rr(_,Vt.startTime-$),ir=!1}return ir}finally{h=null,d=U,f=!1}}var N=!1,R=null,P=-1,te=5,H=-1;function ut(){return!(t.unstable_now()-H<te)}function Nn(){if(R!==null){var x=t.unstable_now();H=x;var $=!0;try{$=R(!0,x)}finally{$?Jt():(N=!1,R=null)}}else N=!1}var Jt;if(typeof p=="function")Jt=function(){p(Nn)};else if(typeof MessageChannel<"u"){var fn=new MessageChannel,Re=fn.port2;fn.port1.onmessage=Nn,Jt=function(){Re.postMessage(null)}}else Jt=function(){w(Nn,0)};function Hr(x){R=x,N||(N=!0,Jt())}function rr(x,$){P=w(function(){x(t.unstable_now())},$)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(x){x.callback=null},t.unstable_continueExecution=function(){g||f||(g=!0,Hr(I))},t.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):te=0<x?Math.floor(1e3/x):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(x){switch(d){case 1:case 2:case 3:var $=3;break;default:$=d}var U=d;d=$;try{return x()}finally{d=U}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(x,$){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var U=d;d=x;try{return $()}finally{d=U}},t.unstable_scheduleCallback=function(x,$,U){var se=t.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?se+U:se):U=se,x){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=U+fe,x={id:c++,callback:$,priorityLevel:x,startTime:U,expirationTime:fe,sortIndex:-1},U>se?(x.sortIndex=U,e(u,x),n(l)===null&&x===n(u)&&(v?(m(P),P=-1):v=!0,rr(_,U-se))):(x.sortIndex=fe,e(l,x),g||f||(g=!0,Hr(I))),x},t.unstable_shouldYield=ut,t.unstable_wrapCallback=function(x){var $=d;return function(){var U=d;d=$;try{return x.apply(this,arguments)}finally{d=U}}}})(Vw);(function(t){t.exports=Vw})(Uw);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bw=E.exports,Mt=Uw.exports;function T(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var jw=new Set,na={};function Di(t,e){Ns(t,e),Ns(t+"Capture",e)}function Ns(t,e){for(na[t]=e,t=0;t<e.length;t++)jw.add(e[t])}var zn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xd=Object.prototype.hasOwnProperty,ON=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,nv={},rv={};function DN(t){return Xd.call(rv,t)?!0:Xd.call(nv,t)?!1:ON.test(t)?rv[t]=!0:(nv[t]=!0,!1)}function MN(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function LN(t,e,n,r){if(e===null||typeof e>"u"||MN(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function vt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Xe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Xe[t]=new vt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Xe[e]=new vt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Xe[t]=new vt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Xe[t]=new vt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Xe[t]=new vt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Xe[t]=new vt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Xe[t]=new vt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Xe[t]=new vt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Xe[t]=new vt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Gp=/[\-:]([a-z])/g;function Qp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Gp,Qp);Xe[e]=new vt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Gp,Qp);Xe[e]=new vt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Gp,Qp);Xe[e]=new vt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Xe[t]=new vt(t,1,!1,t.toLowerCase(),null,!1,!1)});Xe.xlinkHref=new vt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Xe[t]=new vt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Yp(t,e,n,r){var i=Xe.hasOwnProperty(e)?Xe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(LN(e,n,i,r)&&(n=null),r||i===null?DN(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Jn=Bw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,bl=Symbol.for("react.element"),Qi=Symbol.for("react.portal"),Yi=Symbol.for("react.fragment"),Xp=Symbol.for("react.strict_mode"),Jd=Symbol.for("react.profiler"),zw=Symbol.for("react.provider"),Hw=Symbol.for("react.context"),Jp=Symbol.for("react.forward_ref"),Zd=Symbol.for("react.suspense"),ef=Symbol.for("react.suspense_list"),Zp=Symbol.for("react.memo"),lr=Symbol.for("react.lazy"),Ww=Symbol.for("react.offscreen"),iv=Symbol.iterator;function po(t){return t===null||typeof t!="object"?null:(t=iv&&t[iv]||t["@@iterator"],typeof t=="function"?t:null)}var _e=Object.assign,Bh;function Ro(t){if(Bh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Bh=e&&e[1]||""}return`
`+Bh+t}var jh=!1;function zh(t,e){if(!t||jh)return"";jh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{jh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ro(t):""}function FN(t){switch(t.tag){case 5:return Ro(t.type);case 16:return Ro("Lazy");case 13:return Ro("Suspense");case 19:return Ro("SuspenseList");case 0:case 2:case 15:return t=zh(t.type,!1),t;case 11:return t=zh(t.type.render,!1),t;case 1:return t=zh(t.type,!0),t;default:return""}}function tf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Yi:return"Fragment";case Qi:return"Portal";case Jd:return"Profiler";case Xp:return"StrictMode";case Zd:return"Suspense";case ef:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Hw:return(t.displayName||"Context")+".Consumer";case zw:return(t._context.displayName||"Context")+".Provider";case Jp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Zp:return e=t.displayName||null,e!==null?e:tf(t.type)||"Memo";case lr:e=t._payload,t=t._init;try{return tf(t(e))}catch{}}return null}function $N(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return tf(e);case 8:return e===Xp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function br(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function qw(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function UN(t){var e=qw(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Al(t){t._valueTracker||(t._valueTracker=UN(t))}function Kw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=qw(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ru(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function nf(t,e){var n=e.checked;return _e({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function sv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=br(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Gw(t,e){e=e.checked,e!=null&&Yp(t,"checked",e,!1)}function rf(t,e){Gw(t,e);var n=br(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?sf(t,e.type,n):e.hasOwnProperty("defaultValue")&&sf(t,e.type,br(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ov(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function sf(t,e,n){(e!=="number"||Ru(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var xo=Array.isArray;function ds(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+br(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function of(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(T(91));return _e({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function av(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(T(92));if(xo(n)){if(1<n.length)throw Error(T(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:br(n)}}function Qw(t,e){var n=br(e.value),r=br(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function lv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Yw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function af(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Yw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Pl,Xw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Pl=Pl||document.createElement("div"),Pl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Pl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ra(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Lo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},VN=["Webkit","ms","Moz","O"];Object.keys(Lo).forEach(function(t){VN.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Lo[e]=Lo[t]})});function Jw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Lo.hasOwnProperty(t)&&Lo[t]?(""+e).trim():e+"px"}function Zw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Jw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var BN=_e({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function lf(t,e){if(e){if(BN[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(T(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(T(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(T(61))}if(e.style!=null&&typeof e.style!="object")throw Error(T(62))}}function uf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cf=null;function em(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var hf=null,fs=null,ps=null;function uv(t){if(t=Xa(t)){if(typeof hf!="function")throw Error(T(280));var e=t.stateNode;e&&(e=Bc(e),hf(t.stateNode,t.type,e))}}function eE(t){fs?ps?ps.push(t):ps=[t]:fs=t}function tE(){if(fs){var t=fs,e=ps;if(ps=fs=null,uv(t),e)for(t=0;t<e.length;t++)uv(e[t])}}function nE(t,e){return t(e)}function rE(){}var Hh=!1;function iE(t,e,n){if(Hh)return t(e,n);Hh=!0;try{return nE(t,e,n)}finally{Hh=!1,(fs!==null||ps!==null)&&(rE(),tE())}}function ia(t,e){var n=t.stateNode;if(n===null)return null;var r=Bc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(T(231,e,typeof n));return n}var df=!1;if(zn)try{var mo={};Object.defineProperty(mo,"passive",{get:function(){df=!0}}),window.addEventListener("test",mo,mo),window.removeEventListener("test",mo,mo)}catch{df=!1}function jN(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Fo=!1,xu=null,bu=!1,ff=null,zN={onError:function(t){Fo=!0,xu=t}};function HN(t,e,n,r,i,s,o,a,l){Fo=!1,xu=null,jN.apply(zN,arguments)}function WN(t,e,n,r,i,s,o,a,l){if(HN.apply(this,arguments),Fo){if(Fo){var u=xu;Fo=!1,xu=null}else throw Error(T(198));bu||(bu=!0,ff=u)}}function Mi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function sE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function cv(t){if(Mi(t)!==t)throw Error(T(188))}function qN(t){var e=t.alternate;if(!e){if(e=Mi(t),e===null)throw Error(T(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return cv(i),t;if(s===r)return cv(i),e;s=s.sibling}throw Error(T(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(T(189))}}if(n.alternate!==r)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?t:e}function oE(t){return t=qN(t),t!==null?aE(t):null}function aE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=aE(t);if(e!==null)return e;t=t.sibling}return null}var lE=Mt.unstable_scheduleCallback,hv=Mt.unstable_cancelCallback,KN=Mt.unstable_shouldYield,GN=Mt.unstable_requestPaint,Ce=Mt.unstable_now,QN=Mt.unstable_getCurrentPriorityLevel,tm=Mt.unstable_ImmediatePriority,uE=Mt.unstable_UserBlockingPriority,Au=Mt.unstable_NormalPriority,YN=Mt.unstable_LowPriority,cE=Mt.unstable_IdlePriority,Fc=null,yn=null;function XN(t){if(yn&&typeof yn.onCommitFiberRoot=="function")try{yn.onCommitFiberRoot(Fc,t,void 0,(t.current.flags&128)===128)}catch{}}var un=Math.clz32?Math.clz32:eR,JN=Math.log,ZN=Math.LN2;function eR(t){return t>>>=0,t===0?32:31-(JN(t)/ZN|0)|0}var Ol=64,Dl=4194304;function bo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Pu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=bo(a):(s&=o,s!==0&&(r=bo(s)))}else o=n&~i,o!==0?r=bo(o):s!==0&&(r=bo(s));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-un(e),i=1<<n,r|=t[n],e&=~i;return r}function tR(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nR(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-un(s),a=1<<o,l=i[o];l===-1?((a&n)===0||(a&r)!==0)&&(i[o]=tR(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function pf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function hE(){var t=Ol;return Ol<<=1,(Ol&4194240)===0&&(Ol=64),t}function Wh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Qa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-un(e),t[e]=n}function rR(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-un(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function nm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-un(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var re=0;function dE(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var fE,rm,pE,mE,gE,mf=!1,Ml=[],_r=null,wr=null,Er=null,sa=new Map,oa=new Map,hr=[],iR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function dv(t,e){switch(t){case"focusin":case"focusout":_r=null;break;case"dragenter":case"dragleave":wr=null;break;case"mouseover":case"mouseout":Er=null;break;case"pointerover":case"pointerout":sa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":oa.delete(e.pointerId)}}function go(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Xa(e),e!==null&&rm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function sR(t,e,n,r,i){switch(e){case"focusin":return _r=go(_r,t,e,n,r,i),!0;case"dragenter":return wr=go(wr,t,e,n,r,i),!0;case"mouseover":return Er=go(Er,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return sa.set(s,go(sa.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,oa.set(s,go(oa.get(s)||null,t,e,n,r,i)),!0}return!1}function yE(t){var e=Jr(t.target);if(e!==null){var n=Mi(e);if(n!==null){if(e=n.tag,e===13){if(e=sE(n),e!==null){t.blockedOn=e,gE(t.priority,function(){pE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ou(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=gf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);cf=r,n.target.dispatchEvent(r),cf=null}else return e=Xa(n),e!==null&&rm(e),t.blockedOn=n,!1;e.shift()}return!0}function fv(t,e,n){ou(t)&&n.delete(e)}function oR(){mf=!1,_r!==null&&ou(_r)&&(_r=null),wr!==null&&ou(wr)&&(wr=null),Er!==null&&ou(Er)&&(Er=null),sa.forEach(fv),oa.forEach(fv)}function yo(t,e){t.blockedOn===e&&(t.blockedOn=null,mf||(mf=!0,Mt.unstable_scheduleCallback(Mt.unstable_NormalPriority,oR)))}function aa(t){function e(i){return yo(i,t)}if(0<Ml.length){yo(Ml[0],t);for(var n=1;n<Ml.length;n++){var r=Ml[n];r.blockedOn===t&&(r.blockedOn=null)}}for(_r!==null&&yo(_r,t),wr!==null&&yo(wr,t),Er!==null&&yo(Er,t),sa.forEach(e),oa.forEach(e),n=0;n<hr.length;n++)r=hr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<hr.length&&(n=hr[0],n.blockedOn===null);)yE(n),n.blockedOn===null&&hr.shift()}var ms=Jn.ReactCurrentBatchConfig,Ou=!0;function aR(t,e,n,r){var i=re,s=ms.transition;ms.transition=null;try{re=1,im(t,e,n,r)}finally{re=i,ms.transition=s}}function lR(t,e,n,r){var i=re,s=ms.transition;ms.transition=null;try{re=4,im(t,e,n,r)}finally{re=i,ms.transition=s}}function im(t,e,n,r){if(Ou){var i=gf(t,e,n,r);if(i===null)td(t,e,r,Du,n),dv(t,r);else if(sR(i,t,e,n,r))r.stopPropagation();else if(dv(t,r),e&4&&-1<iR.indexOf(t)){for(;i!==null;){var s=Xa(i);if(s!==null&&fE(s),s=gf(t,e,n,r),s===null&&td(t,e,r,Du,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else td(t,e,r,null,n)}}var Du=null;function gf(t,e,n,r){if(Du=null,t=em(r),t=Jr(t),t!==null)if(e=Mi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=sE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Du=t,null}function vE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(QN()){case tm:return 1;case uE:return 4;case Au:case YN:return 16;case cE:return 536870912;default:return 16}default:return 16}}var yr=null,sm=null,au=null;function _E(){if(au)return au;var t,e=sm,n=e.length,r,i="value"in yr?yr.value:yr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return au=i.slice(t,1<r?1-r:void 0)}function lu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ll(){return!0}function pv(){return!1}function Ut(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ll:pv,this.isPropagationStopped=pv,this}return _e(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ll)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ll)},persist:function(){},isPersistent:Ll}),e}var Xs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},om=Ut(Xs),Ya=_e({},Xs,{view:0,detail:0}),uR=Ut(Ya),qh,Kh,vo,$c=_e({},Ya,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:am,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==vo&&(vo&&t.type==="mousemove"?(qh=t.screenX-vo.screenX,Kh=t.screenY-vo.screenY):Kh=qh=0,vo=t),qh)},movementY:function(t){return"movementY"in t?t.movementY:Kh}}),mv=Ut($c),cR=_e({},$c,{dataTransfer:0}),hR=Ut(cR),dR=_e({},Ya,{relatedTarget:0}),Gh=Ut(dR),fR=_e({},Xs,{animationName:0,elapsedTime:0,pseudoElement:0}),pR=Ut(fR),mR=_e({},Xs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),gR=Ut(mR),yR=_e({},Xs,{data:0}),gv=Ut(yR),vR={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_R={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wR={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ER(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=wR[t])?!!e[t]:!1}function am(){return ER}var CR=_e({},Ya,{key:function(t){if(t.key){var e=vR[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=lu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?_R[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:am,charCode:function(t){return t.type==="keypress"?lu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?lu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),TR=Ut(CR),SR=_e({},$c,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yv=Ut(SR),IR=_e({},Ya,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:am}),kR=Ut(IR),NR=_e({},Xs,{propertyName:0,elapsedTime:0,pseudoElement:0}),RR=Ut(NR),xR=_e({},$c,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),bR=Ut(xR),AR=[9,13,27,32],lm=zn&&"CompositionEvent"in window,$o=null;zn&&"documentMode"in document&&($o=document.documentMode);var PR=zn&&"TextEvent"in window&&!$o,wE=zn&&(!lm||$o&&8<$o&&11>=$o),vv=String.fromCharCode(32),_v=!1;function EE(t,e){switch(t){case"keyup":return AR.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function CE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Xi=!1;function OR(t,e){switch(t){case"compositionend":return CE(e);case"keypress":return e.which!==32?null:(_v=!0,vv);case"textInput":return t=e.data,t===vv&&_v?null:t;default:return null}}function DR(t,e){if(Xi)return t==="compositionend"||!lm&&EE(t,e)?(t=_E(),au=sm=yr=null,Xi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return wE&&e.locale!=="ko"?null:e.data;default:return null}}var MR={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!MR[t.type]:e==="textarea"}function TE(t,e,n,r){eE(r),e=Mu(e,"onChange"),0<e.length&&(n=new om("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Uo=null,la=null;function LR(t){DE(t,0)}function Uc(t){var e=es(t);if(Kw(e))return t}function FR(t,e){if(t==="change")return e}var SE=!1;if(zn){var Qh;if(zn){var Yh="oninput"in document;if(!Yh){var Ev=document.createElement("div");Ev.setAttribute("oninput","return;"),Yh=typeof Ev.oninput=="function"}Qh=Yh}else Qh=!1;SE=Qh&&(!document.documentMode||9<document.documentMode)}function Cv(){Uo&&(Uo.detachEvent("onpropertychange",IE),la=Uo=null)}function IE(t){if(t.propertyName==="value"&&Uc(la)){var e=[];TE(e,la,t,em(t)),iE(LR,e)}}function $R(t,e,n){t==="focusin"?(Cv(),Uo=e,la=n,Uo.attachEvent("onpropertychange",IE)):t==="focusout"&&Cv()}function UR(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Uc(la)}function VR(t,e){if(t==="click")return Uc(e)}function BR(t,e){if(t==="input"||t==="change")return Uc(e)}function jR(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var dn=typeof Object.is=="function"?Object.is:jR;function ua(t,e){if(dn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Xd.call(e,i)||!dn(t[i],e[i]))return!1}return!0}function Tv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Sv(t,e){var n=Tv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Tv(n)}}function kE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?kE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function NE(){for(var t=window,e=Ru();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ru(t.document)}return e}function um(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function zR(t){var e=NE(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&kE(n.ownerDocument.documentElement,n)){if(r!==null&&um(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Sv(n,s);var o=Sv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var HR=zn&&"documentMode"in document&&11>=document.documentMode,Ji=null,yf=null,Vo=null,vf=!1;function Iv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;vf||Ji==null||Ji!==Ru(r)||(r=Ji,"selectionStart"in r&&um(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Vo&&ua(Vo,r)||(Vo=r,r=Mu(yf,"onSelect"),0<r.length&&(e=new om("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ji)))}function Fl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Zi={animationend:Fl("Animation","AnimationEnd"),animationiteration:Fl("Animation","AnimationIteration"),animationstart:Fl("Animation","AnimationStart"),transitionend:Fl("Transition","TransitionEnd")},Xh={},RE={};zn&&(RE=document.createElement("div").style,"AnimationEvent"in window||(delete Zi.animationend.animation,delete Zi.animationiteration.animation,delete Zi.animationstart.animation),"TransitionEvent"in window||delete Zi.transitionend.transition);function Vc(t){if(Xh[t])return Xh[t];if(!Zi[t])return t;var e=Zi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in RE)return Xh[t]=e[n];return t}var xE=Vc("animationend"),bE=Vc("animationiteration"),AE=Vc("animationstart"),PE=Vc("transitionend"),OE=new Map,kv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $r(t,e){OE.set(t,e),Di(e,[t])}for(var Jh=0;Jh<kv.length;Jh++){var Zh=kv[Jh],WR=Zh.toLowerCase(),qR=Zh[0].toUpperCase()+Zh.slice(1);$r(WR,"on"+qR)}$r(xE,"onAnimationEnd");$r(bE,"onAnimationIteration");$r(AE,"onAnimationStart");$r("dblclick","onDoubleClick");$r("focusin","onFocus");$r("focusout","onBlur");$r(PE,"onTransitionEnd");Ns("onMouseEnter",["mouseout","mouseover"]);Ns("onMouseLeave",["mouseout","mouseover"]);Ns("onPointerEnter",["pointerout","pointerover"]);Ns("onPointerLeave",["pointerout","pointerover"]);Di("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Di("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Di("onBeforeInput",["compositionend","keypress","textInput","paste"]);Di("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Di("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Di("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),KR=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ao));function Nv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,WN(r,e,void 0,t),t.currentTarget=null}function DE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Nv(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Nv(i,a,u),s=l}}}if(bu)throw t=ff,bu=!1,ff=null,t}function ce(t,e){var n=e[Tf];n===void 0&&(n=e[Tf]=new Set);var r=t+"__bubble";n.has(r)||(ME(e,t,2,!1),n.add(r))}function ed(t,e,n){var r=0;e&&(r|=4),ME(n,t,r,e)}var $l="_reactListening"+Math.random().toString(36).slice(2);function ca(t){if(!t[$l]){t[$l]=!0,jw.forEach(function(n){n!=="selectionchange"&&(KR.has(n)||ed(n,!1,t),ed(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[$l]||(e[$l]=!0,ed("selectionchange",!1,e))}}function ME(t,e,n,r){switch(vE(e)){case 1:var i=aR;break;case 4:i=lR;break;default:i=im}n=i.bind(null,e,n,t),i=void 0,!df||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function td(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Jr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}iE(function(){var u=s,c=em(n),h=[];e:{var d=OE.get(t);if(d!==void 0){var f=om,g=t;switch(t){case"keypress":if(lu(n)===0)break e;case"keydown":case"keyup":f=TR;break;case"focusin":g="focus",f=Gh;break;case"focusout":g="blur",f=Gh;break;case"beforeblur":case"afterblur":f=Gh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=mv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=hR;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=kR;break;case xE:case bE:case AE:f=pR;break;case PE:f=RR;break;case"scroll":f=uR;break;case"wheel":f=bR;break;case"copy":case"cut":case"paste":f=gR;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=yv}var v=(e&4)!==0,w=!v&&t==="scroll",m=v?d!==null?d+"Capture":null:d;v=[];for(var p=u,y;p!==null;){y=p;var _=y.stateNode;if(y.tag===5&&_!==null&&(y=_,m!==null&&(_=ia(p,m),_!=null&&v.push(ha(p,_,y)))),w)break;p=p.return}0<v.length&&(d=new f(d,g,null,n,c),h.push({event:d,listeners:v}))}}if((e&7)===0){e:{if(d=t==="mouseover"||t==="pointerover",f=t==="mouseout"||t==="pointerout",d&&n!==cf&&(g=n.relatedTarget||n.fromElement)&&(Jr(g)||g[Hn]))break e;if((f||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,f?(g=n.relatedTarget||n.toElement,f=u,g=g?Jr(g):null,g!==null&&(w=Mi(g),g!==w||g.tag!==5&&g.tag!==6)&&(g=null)):(f=null,g=u),f!==g)){if(v=mv,_="onMouseLeave",m="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(v=yv,_="onPointerLeave",m="onPointerEnter",p="pointer"),w=f==null?d:es(f),y=g==null?d:es(g),d=new v(_,p+"leave",f,n,c),d.target=w,d.relatedTarget=y,_=null,Jr(c)===u&&(v=new v(m,p+"enter",g,n,c),v.target=y,v.relatedTarget=w,_=v),w=_,f&&g)t:{for(v=f,m=g,p=0,y=v;y;y=zi(y))p++;for(y=0,_=m;_;_=zi(_))y++;for(;0<p-y;)v=zi(v),p--;for(;0<y-p;)m=zi(m),y--;for(;p--;){if(v===m||m!==null&&v===m.alternate)break t;v=zi(v),m=zi(m)}v=null}else v=null;f!==null&&Rv(h,d,f,v,!1),g!==null&&w!==null&&Rv(h,w,g,v,!0)}}e:{if(d=u?es(u):window,f=d.nodeName&&d.nodeName.toLowerCase(),f==="select"||f==="input"&&d.type==="file")var I=FR;else if(wv(d))if(SE)I=BR;else{I=UR;var N=$R}else(f=d.nodeName)&&f.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(I=VR);if(I&&(I=I(t,u))){TE(h,I,n,c);break e}N&&N(t,d,u),t==="focusout"&&(N=d._wrapperState)&&N.controlled&&d.type==="number"&&sf(d,"number",d.value)}switch(N=u?es(u):window,t){case"focusin":(wv(N)||N.contentEditable==="true")&&(Ji=N,yf=u,Vo=null);break;case"focusout":Vo=yf=Ji=null;break;case"mousedown":vf=!0;break;case"contextmenu":case"mouseup":case"dragend":vf=!1,Iv(h,n,c);break;case"selectionchange":if(HR)break;case"keydown":case"keyup":Iv(h,n,c)}var R;if(lm)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Xi?EE(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(wE&&n.locale!=="ko"&&(Xi||P!=="onCompositionStart"?P==="onCompositionEnd"&&Xi&&(R=_E()):(yr=c,sm="value"in yr?yr.value:yr.textContent,Xi=!0)),N=Mu(u,P),0<N.length&&(P=new gv(P,t,null,n,c),h.push({event:P,listeners:N}),R?P.data=R:(R=CE(n),R!==null&&(P.data=R)))),(R=PR?OR(t,n):DR(t,n))&&(u=Mu(u,"onBeforeInput"),0<u.length&&(c=new gv("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=R))}DE(h,e)})}function ha(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Mu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ia(t,n),s!=null&&r.unshift(ha(t,s,i)),s=ia(t,e),s!=null&&r.push(ha(t,s,i))),t=t.return}return r}function zi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Rv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ia(n,s),l!=null&&o.unshift(ha(n,l,a))):i||(l=ia(n,s),l!=null&&o.push(ha(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var GR=/\r\n?/g,QR=/\u0000|\uFFFD/g;function xv(t){return(typeof t=="string"?t:""+t).replace(GR,`
`).replace(QR,"")}function Ul(t,e,n){if(e=xv(e),xv(t)!==e&&n)throw Error(T(425))}function Lu(){}var _f=null,wf=null;function Ef(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Cf=typeof setTimeout=="function"?setTimeout:void 0,YR=typeof clearTimeout=="function"?clearTimeout:void 0,bv=typeof Promise=="function"?Promise:void 0,XR=typeof queueMicrotask=="function"?queueMicrotask:typeof bv<"u"?function(t){return bv.resolve(null).then(t).catch(JR)}:Cf;function JR(t){setTimeout(function(){throw t})}function nd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),aa(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);aa(e)}function Cr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Av(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Js=Math.random().toString(36).slice(2),gn="__reactFiber$"+Js,da="__reactProps$"+Js,Hn="__reactContainer$"+Js,Tf="__reactEvents$"+Js,ZR="__reactListeners$"+Js,ex="__reactHandles$"+Js;function Jr(t){var e=t[gn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Hn]||n[gn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Av(t);t!==null;){if(n=t[gn])return n;t=Av(t)}return e}t=n,n=t.parentNode}return null}function Xa(t){return t=t[gn]||t[Hn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function es(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(T(33))}function Bc(t){return t[da]||null}var Sf=[],ts=-1;function Ur(t){return{current:t}}function de(t){0>ts||(t.current=Sf[ts],Sf[ts]=null,ts--)}function ae(t,e){ts++,Sf[ts]=t.current,t.current=e}var Ar={},lt=Ur(Ar),kt=Ur(!1),pi=Ar;function Rs(t,e){var n=t.type.contextTypes;if(!n)return Ar;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Nt(t){return t=t.childContextTypes,t!=null}function Fu(){de(kt),de(lt)}function Pv(t,e,n){if(lt.current!==Ar)throw Error(T(168));ae(lt,e),ae(kt,n)}function LE(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(T(108,$N(t)||"Unknown",i));return _e({},n,r)}function $u(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ar,pi=lt.current,ae(lt,t),ae(kt,kt.current),!0}function Ov(t,e,n){var r=t.stateNode;if(!r)throw Error(T(169));n?(t=LE(t,e,pi),r.__reactInternalMemoizedMergedChildContext=t,de(kt),de(lt),ae(lt,t)):de(kt),ae(kt,n)}var xn=null,jc=!1,rd=!1;function FE(t){xn===null?xn=[t]:xn.push(t)}function tx(t){jc=!0,FE(t)}function Vr(){if(!rd&&xn!==null){rd=!0;var t=0,e=re;try{var n=xn;for(re=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}xn=null,jc=!1}catch(i){throw xn!==null&&(xn=xn.slice(t+1)),lE(tm,Vr),i}finally{re=e,rd=!1}}return null}var ns=[],rs=0,Uu=null,Vu=0,Bt=[],jt=0,mi=null,Pn=1,On="";function qr(t,e){ns[rs++]=Vu,ns[rs++]=Uu,Uu=t,Vu=e}function $E(t,e,n){Bt[jt++]=Pn,Bt[jt++]=On,Bt[jt++]=mi,mi=t;var r=Pn;t=On;var i=32-un(r)-1;r&=~(1<<i),n+=1;var s=32-un(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Pn=1<<32-un(e)+i|n<<i|r,On=s+t}else Pn=1<<s|n<<i|r,On=t}function cm(t){t.return!==null&&(qr(t,1),$E(t,1,0))}function hm(t){for(;t===Uu;)Uu=ns[--rs],ns[rs]=null,Vu=ns[--rs],ns[rs]=null;for(;t===mi;)mi=Bt[--jt],Bt[jt]=null,On=Bt[--jt],Bt[jt]=null,Pn=Bt[--jt],Bt[jt]=null}var Ot=null,Pt=null,pe=!1,nn=null;function UE(t,e){var n=Ht(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Dv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ot=t,Pt=Cr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ot=t,Pt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=mi!==null?{id:Pn,overflow:On}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ht(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ot=t,Pt=null,!0):!1;default:return!1}}function If(t){return(t.mode&1)!==0&&(t.flags&128)===0}function kf(t){if(pe){var e=Pt;if(e){var n=e;if(!Dv(t,e)){if(If(t))throw Error(T(418));e=Cr(n.nextSibling);var r=Ot;e&&Dv(t,e)?UE(r,n):(t.flags=t.flags&-4097|2,pe=!1,Ot=t)}}else{if(If(t))throw Error(T(418));t.flags=t.flags&-4097|2,pe=!1,Ot=t}}}function Mv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ot=t}function Vl(t){if(t!==Ot)return!1;if(!pe)return Mv(t),pe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ef(t.type,t.memoizedProps)),e&&(e=Pt)){if(If(t))throw VE(),Error(T(418));for(;e;)UE(t,e),e=Cr(e.nextSibling)}if(Mv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(T(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Pt=Cr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Pt=null}}else Pt=Ot?Cr(t.stateNode.nextSibling):null;return!0}function VE(){for(var t=Pt;t;)t=Cr(t.nextSibling)}function xs(){Pt=Ot=null,pe=!1}function dm(t){nn===null?nn=[t]:nn.push(t)}var nx=Jn.ReactCurrentBatchConfig;function en(t,e){if(t&&t.defaultProps){e=_e({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Bu=Ur(null),ju=null,is=null,fm=null;function pm(){fm=is=ju=null}function mm(t){var e=Bu.current;de(Bu),t._currentValue=e}function Nf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function gs(t,e){ju=t,fm=is=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(Ct=!0),t.firstContext=null)}function Kt(t){var e=t._currentValue;if(fm!==t)if(t={context:t,memoizedValue:e,next:null},is===null){if(ju===null)throw Error(T(308));is=t,ju.dependencies={lanes:0,firstContext:t}}else is=is.next=t;return e}var Zr=null;function gm(t){Zr===null?Zr=[t]:Zr.push(t)}function BE(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,gm(e)):(n.next=i.next,i.next=n),e.interleaved=n,Wn(t,r)}function Wn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ur=!1;function ym(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Un(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Tr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Z&2)!==0){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Wn(t,n)}return i=r.interleaved,i===null?(e.next=e,gm(r)):(e.next=i.next,i.next=e),r.interleaved=e,Wn(t,n)}function uu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,nm(t,n)}}function Lv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function zu(t,e,n,r){var i=t.updateQueue;ur=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,f=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:f,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,v=a;switch(d=e,f=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){h=g.call(f,h,d);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,d=typeof g=="function"?g.call(f,h,d):g,d==null)break e;h=_e({},h,d);break e;case 2:ur=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else f={eventTime:f,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=f,l=h):c=c.next=f,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);yi|=o,t.lanes=o,t.memoizedState=h}}function Fv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(T(191,i));i.call(r)}}}var zE=new Bw.Component().refs;function Rf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:_e({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var zc={isMounted:function(t){return(t=t._reactInternals)?Mi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=mt(),i=Ir(t),s=Un(r,i);s.payload=e,n!=null&&(s.callback=n),e=Tr(t,s,i),e!==null&&(cn(e,t,i,r),uu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=mt(),i=Ir(t),s=Un(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Tr(t,s,i),e!==null&&(cn(e,t,i,r),uu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=mt(),r=Ir(t),i=Un(n,r);i.tag=2,e!=null&&(i.callback=e),e=Tr(t,i,r),e!==null&&(cn(e,t,r,n),uu(e,t,r))}};function $v(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ua(n,r)||!ua(i,s):!0}function HE(t,e,n){var r=!1,i=Ar,s=e.contextType;return typeof s=="object"&&s!==null?s=Kt(s):(i=Nt(e)?pi:lt.current,r=e.contextTypes,s=(r=r!=null)?Rs(t,i):Ar),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=zc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Uv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&zc.enqueueReplaceState(e,e.state,null)}function xf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=zE,ym(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Kt(s):(s=Nt(e)?pi:lt.current,i.context=Rs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Rf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&zc.enqueueReplaceState(i,i.state,null),zu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function _o(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var r=n.stateNode}if(!r)throw Error(T(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===zE&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,t))}return t}function Bl(t,e){throw t=Object.prototype.toString.call(e),Error(T(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Vv(t){var e=t._init;return e(t._payload)}function WE(t){function e(m,p){if(t){var y=m.deletions;y===null?(m.deletions=[p],m.flags|=16):y.push(p)}}function n(m,p){if(!t)return null;for(;p!==null;)e(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=kr(m,p),m.index=0,m.sibling=null,m}function s(m,p,y){return m.index=y,t?(y=m.alternate,y!==null?(y=y.index,y<p?(m.flags|=2,p):y):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,p,y,_){return p===null||p.tag!==6?(p=cd(y,m.mode,_),p.return=m,p):(p=i(p,y),p.return=m,p)}function l(m,p,y,_){var I=y.type;return I===Yi?c(m,p,y.props.children,_,y.key):p!==null&&(p.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===lr&&Vv(I)===p.type)?(_=i(p,y.props),_.ref=_o(m,p,y),_.return=m,_):(_=mu(y.type,y.key,y.props,null,m.mode,_),_.ref=_o(m,p,y),_.return=m,_)}function u(m,p,y,_){return p===null||p.tag!==4||p.stateNode.containerInfo!==y.containerInfo||p.stateNode.implementation!==y.implementation?(p=hd(y,m.mode,_),p.return=m,p):(p=i(p,y.children||[]),p.return=m,p)}function c(m,p,y,_,I){return p===null||p.tag!==7?(p=li(y,m.mode,_,I),p.return=m,p):(p=i(p,y),p.return=m,p)}function h(m,p,y){if(typeof p=="string"&&p!==""||typeof p=="number")return p=cd(""+p,m.mode,y),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case bl:return y=mu(p.type,p.key,p.props,null,m.mode,y),y.ref=_o(m,null,p),y.return=m,y;case Qi:return p=hd(p,m.mode,y),p.return=m,p;case lr:var _=p._init;return h(m,_(p._payload),y)}if(xo(p)||po(p))return p=li(p,m.mode,y,null),p.return=m,p;Bl(m,p)}return null}function d(m,p,y,_){var I=p!==null?p.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return I!==null?null:a(m,p,""+y,_);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case bl:return y.key===I?l(m,p,y,_):null;case Qi:return y.key===I?u(m,p,y,_):null;case lr:return I=y._init,d(m,p,I(y._payload),_)}if(xo(y)||po(y))return I!==null?null:c(m,p,y,_,null);Bl(m,y)}return null}function f(m,p,y,_,I){if(typeof _=="string"&&_!==""||typeof _=="number")return m=m.get(y)||null,a(p,m,""+_,I);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case bl:return m=m.get(_.key===null?y:_.key)||null,l(p,m,_,I);case Qi:return m=m.get(_.key===null?y:_.key)||null,u(p,m,_,I);case lr:var N=_._init;return f(m,p,y,N(_._payload),I)}if(xo(_)||po(_))return m=m.get(y)||null,c(p,m,_,I,null);Bl(p,_)}return null}function g(m,p,y,_){for(var I=null,N=null,R=p,P=p=0,te=null;R!==null&&P<y.length;P++){R.index>P?(te=R,R=null):te=R.sibling;var H=d(m,R,y[P],_);if(H===null){R===null&&(R=te);break}t&&R&&H.alternate===null&&e(m,R),p=s(H,p,P),N===null?I=H:N.sibling=H,N=H,R=te}if(P===y.length)return n(m,R),pe&&qr(m,P),I;if(R===null){for(;P<y.length;P++)R=h(m,y[P],_),R!==null&&(p=s(R,p,P),N===null?I=R:N.sibling=R,N=R);return pe&&qr(m,P),I}for(R=r(m,R);P<y.length;P++)te=f(R,m,P,y[P],_),te!==null&&(t&&te.alternate!==null&&R.delete(te.key===null?P:te.key),p=s(te,p,P),N===null?I=te:N.sibling=te,N=te);return t&&R.forEach(function(ut){return e(m,ut)}),pe&&qr(m,P),I}function v(m,p,y,_){var I=po(y);if(typeof I!="function")throw Error(T(150));if(y=I.call(y),y==null)throw Error(T(151));for(var N=I=null,R=p,P=p=0,te=null,H=y.next();R!==null&&!H.done;P++,H=y.next()){R.index>P?(te=R,R=null):te=R.sibling;var ut=d(m,R,H.value,_);if(ut===null){R===null&&(R=te);break}t&&R&&ut.alternate===null&&e(m,R),p=s(ut,p,P),N===null?I=ut:N.sibling=ut,N=ut,R=te}if(H.done)return n(m,R),pe&&qr(m,P),I;if(R===null){for(;!H.done;P++,H=y.next())H=h(m,H.value,_),H!==null&&(p=s(H,p,P),N===null?I=H:N.sibling=H,N=H);return pe&&qr(m,P),I}for(R=r(m,R);!H.done;P++,H=y.next())H=f(R,m,P,H.value,_),H!==null&&(t&&H.alternate!==null&&R.delete(H.key===null?P:H.key),p=s(H,p,P),N===null?I=H:N.sibling=H,N=H);return t&&R.forEach(function(Nn){return e(m,Nn)}),pe&&qr(m,P),I}function w(m,p,y,_){if(typeof y=="object"&&y!==null&&y.type===Yi&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case bl:e:{for(var I=y.key,N=p;N!==null;){if(N.key===I){if(I=y.type,I===Yi){if(N.tag===7){n(m,N.sibling),p=i(N,y.props.children),p.return=m,m=p;break e}}else if(N.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===lr&&Vv(I)===N.type){n(m,N.sibling),p=i(N,y.props),p.ref=_o(m,N,y),p.return=m,m=p;break e}n(m,N);break}else e(m,N);N=N.sibling}y.type===Yi?(p=li(y.props.children,m.mode,_,y.key),p.return=m,m=p):(_=mu(y.type,y.key,y.props,null,m.mode,_),_.ref=_o(m,p,y),_.return=m,m=_)}return o(m);case Qi:e:{for(N=y.key;p!==null;){if(p.key===N)if(p.tag===4&&p.stateNode.containerInfo===y.containerInfo&&p.stateNode.implementation===y.implementation){n(m,p.sibling),p=i(p,y.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else e(m,p);p=p.sibling}p=hd(y,m.mode,_),p.return=m,m=p}return o(m);case lr:return N=y._init,w(m,p,N(y._payload),_)}if(xo(y))return g(m,p,y,_);if(po(y))return v(m,p,y,_);Bl(m,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,y),p.return=m,m=p):(n(m,p),p=cd(y,m.mode,_),p.return=m,m=p),o(m)):n(m,p)}return w}var bs=WE(!0),qE=WE(!1),Ja={},vn=Ur(Ja),fa=Ur(Ja),pa=Ur(Ja);function ei(t){if(t===Ja)throw Error(T(174));return t}function vm(t,e){switch(ae(pa,e),ae(fa,t),ae(vn,Ja),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:af(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=af(e,t)}de(vn),ae(vn,e)}function As(){de(vn),de(fa),de(pa)}function KE(t){ei(pa.current);var e=ei(vn.current),n=af(e,t.type);e!==n&&(ae(fa,t),ae(vn,n))}function _m(t){fa.current===t&&(de(vn),de(fa))}var ye=Ur(0);function Hu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var id=[];function wm(){for(var t=0;t<id.length;t++)id[t]._workInProgressVersionPrimary=null;id.length=0}var cu=Jn.ReactCurrentDispatcher,sd=Jn.ReactCurrentBatchConfig,gi=0,ve=null,xe=null,$e=null,Wu=!1,Bo=!1,ma=0,rx=0;function tt(){throw Error(T(321))}function Em(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!dn(t[n],e[n]))return!1;return!0}function Cm(t,e,n,r,i,s){if(gi=s,ve=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,cu.current=t===null||t.memoizedState===null?ax:lx,t=n(r,i),Bo){s=0;do{if(Bo=!1,ma=0,25<=s)throw Error(T(301));s+=1,$e=xe=null,e.updateQueue=null,cu.current=ux,t=n(r,i)}while(Bo)}if(cu.current=qu,e=xe!==null&&xe.next!==null,gi=0,$e=xe=ve=null,Wu=!1,e)throw Error(T(300));return t}function Tm(){var t=ma!==0;return ma=0,t}function mn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?ve.memoizedState=$e=t:$e=$e.next=t,$e}function Gt(){if(xe===null){var t=ve.alternate;t=t!==null?t.memoizedState:null}else t=xe.next;var e=$e===null?ve.memoizedState:$e.next;if(e!==null)$e=e,xe=t;else{if(t===null)throw Error(T(310));xe=t,t={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},$e===null?ve.memoizedState=$e=t:$e=$e.next=t}return $e}function ga(t,e){return typeof e=="function"?e(t):e}function od(t){var e=Gt(),n=e.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=t;var r=xe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((gi&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,ve.lanes|=c,yi|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,dn(r,e.memoizedState)||(Ct=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ve.lanes|=s,yi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ad(t){var e=Gt(),n=e.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);dn(s,e.memoizedState)||(Ct=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function GE(){}function QE(t,e){var n=ve,r=Gt(),i=e(),s=!dn(r.memoizedState,i);if(s&&(r.memoizedState=i,Ct=!0),r=r.queue,Sm(JE.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||$e!==null&&$e.memoizedState.tag&1){if(n.flags|=2048,ya(9,XE.bind(null,n,r,i,e),void 0,null),Be===null)throw Error(T(349));(gi&30)!==0||YE(n,e,i)}return i}function YE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ve.updateQueue,e===null?(e={lastEffect:null,stores:null},ve.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function XE(t,e,n,r){e.value=n,e.getSnapshot=r,ZE(e)&&eC(t)}function JE(t,e,n){return n(function(){ZE(e)&&eC(t)})}function ZE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!dn(t,n)}catch{return!0}}function eC(t){var e=Wn(t,1);e!==null&&cn(e,t,1,-1)}function Bv(t){var e=mn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:t},e.queue=t,t=t.dispatch=ox.bind(null,ve,t),[e.memoizedState,t]}function ya(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ve.updateQueue,e===null?(e={lastEffect:null,stores:null},ve.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function tC(){return Gt().memoizedState}function hu(t,e,n,r){var i=mn();ve.flags|=t,i.memoizedState=ya(1|e,n,void 0,r===void 0?null:r)}function Hc(t,e,n,r){var i=Gt();r=r===void 0?null:r;var s=void 0;if(xe!==null){var o=xe.memoizedState;if(s=o.destroy,r!==null&&Em(r,o.deps)){i.memoizedState=ya(e,n,s,r);return}}ve.flags|=t,i.memoizedState=ya(1|e,n,s,r)}function jv(t,e){return hu(8390656,8,t,e)}function Sm(t,e){return Hc(2048,8,t,e)}function nC(t,e){return Hc(4,2,t,e)}function rC(t,e){return Hc(4,4,t,e)}function iC(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function sC(t,e,n){return n=n!=null?n.concat([t]):null,Hc(4,4,iC.bind(null,e,t),n)}function Im(){}function oC(t,e){var n=Gt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Em(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function aC(t,e){var n=Gt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Em(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function lC(t,e,n){return(gi&21)===0?(t.baseState&&(t.baseState=!1,Ct=!0),t.memoizedState=n):(dn(n,e)||(n=hE(),ve.lanes|=n,yi|=n,t.baseState=!0),e)}function ix(t,e){var n=re;re=n!==0&&4>n?n:4,t(!0);var r=sd.transition;sd.transition={};try{t(!1),e()}finally{re=n,sd.transition=r}}function uC(){return Gt().memoizedState}function sx(t,e,n){var r=Ir(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},cC(t))hC(e,n);else if(n=BE(t,e,n,r),n!==null){var i=mt();cn(n,t,r,i),dC(n,e,r)}}function ox(t,e,n){var r=Ir(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(cC(t))hC(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,dn(a,o)){var l=e.interleaved;l===null?(i.next=i,gm(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=BE(t,e,i,r),n!==null&&(i=mt(),cn(n,t,r,i),dC(n,e,r))}}function cC(t){var e=t.alternate;return t===ve||e!==null&&e===ve}function hC(t,e){Bo=Wu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function dC(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,nm(t,n)}}var qu={readContext:Kt,useCallback:tt,useContext:tt,useEffect:tt,useImperativeHandle:tt,useInsertionEffect:tt,useLayoutEffect:tt,useMemo:tt,useReducer:tt,useRef:tt,useState:tt,useDebugValue:tt,useDeferredValue:tt,useTransition:tt,useMutableSource:tt,useSyncExternalStore:tt,useId:tt,unstable_isNewReconciler:!1},ax={readContext:Kt,useCallback:function(t,e){return mn().memoizedState=[t,e===void 0?null:e],t},useContext:Kt,useEffect:jv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,hu(4194308,4,iC.bind(null,e,t),n)},useLayoutEffect:function(t,e){return hu(4194308,4,t,e)},useInsertionEffect:function(t,e){return hu(4,2,t,e)},useMemo:function(t,e){var n=mn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=mn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=sx.bind(null,ve,t),[r.memoizedState,t]},useRef:function(t){var e=mn();return t={current:t},e.memoizedState=t},useState:Bv,useDebugValue:Im,useDeferredValue:function(t){return mn().memoizedState=t},useTransition:function(){var t=Bv(!1),e=t[0];return t=ix.bind(null,t[1]),mn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ve,i=mn();if(pe){if(n===void 0)throw Error(T(407));n=n()}else{if(n=e(),Be===null)throw Error(T(349));(gi&30)!==0||YE(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,jv(JE.bind(null,r,s,t),[t]),r.flags|=2048,ya(9,XE.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=mn(),e=Be.identifierPrefix;if(pe){var n=On,r=Pn;n=(r&~(1<<32-un(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ma++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=rx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},lx={readContext:Kt,useCallback:oC,useContext:Kt,useEffect:Sm,useImperativeHandle:sC,useInsertionEffect:nC,useLayoutEffect:rC,useMemo:aC,useReducer:od,useRef:tC,useState:function(){return od(ga)},useDebugValue:Im,useDeferredValue:function(t){var e=Gt();return lC(e,xe.memoizedState,t)},useTransition:function(){var t=od(ga)[0],e=Gt().memoizedState;return[t,e]},useMutableSource:GE,useSyncExternalStore:QE,useId:uC,unstable_isNewReconciler:!1},ux={readContext:Kt,useCallback:oC,useContext:Kt,useEffect:Sm,useImperativeHandle:sC,useInsertionEffect:nC,useLayoutEffect:rC,useMemo:aC,useReducer:ad,useRef:tC,useState:function(){return ad(ga)},useDebugValue:Im,useDeferredValue:function(t){var e=Gt();return xe===null?e.memoizedState=t:lC(e,xe.memoizedState,t)},useTransition:function(){var t=ad(ga)[0],e=Gt().memoizedState;return[t,e]},useMutableSource:GE,useSyncExternalStore:QE,useId:uC,unstable_isNewReconciler:!1};function Ps(t,e){try{var n="",r=e;do n+=FN(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function ld(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function bf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var cx=typeof WeakMap=="function"?WeakMap:Map;function fC(t,e,n){n=Un(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Gu||(Gu=!0,Vf=r),bf(t,e)},n}function pC(t,e,n){n=Un(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){bf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){bf(t,e),typeof r!="function"&&(Sr===null?Sr=new Set([this]):Sr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function zv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new cx;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Sx.bind(null,t,e,n),e.then(t,t))}function Hv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Wv(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Un(-1,1),e.tag=2,Tr(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var hx=Jn.ReactCurrentOwner,Ct=!1;function ht(t,e,n,r){e.child=t===null?qE(e,null,n,r):bs(e,t.child,n,r)}function qv(t,e,n,r,i){n=n.render;var s=e.ref;return gs(e,i),r=Cm(t,e,n,r,s,i),n=Tm(),t!==null&&!Ct?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,qn(t,e,i)):(pe&&n&&cm(e),e.flags|=1,ht(t,e,r,i),e.child)}function Kv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Om(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,mC(t,e,s,r,i)):(t=mu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ua,n(o,r)&&t.ref===e.ref)return qn(t,e,i)}return e.flags|=1,t=kr(s,r),t.ref=e.ref,t.return=e,e.child=t}function mC(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ua(s,r)&&t.ref===e.ref)if(Ct=!1,e.pendingProps=r=s,(t.lanes&i)!==0)(t.flags&131072)!==0&&(Ct=!0);else return e.lanes=t.lanes,qn(t,e,i)}return Af(t,e,n,r,i)}function gC(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ae(os,At),At|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ae(os,At),At|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ae(os,At),At|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ae(os,At),At|=r;return ht(t,e,i,n),e.child}function yC(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Af(t,e,n,r,i){var s=Nt(n)?pi:lt.current;return s=Rs(e,s),gs(e,i),n=Cm(t,e,n,r,s,i),r=Tm(),t!==null&&!Ct?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,qn(t,e,i)):(pe&&r&&cm(e),e.flags|=1,ht(t,e,n,i),e.child)}function Gv(t,e,n,r,i){if(Nt(n)){var s=!0;$u(e)}else s=!1;if(gs(e,i),e.stateNode===null)du(t,e),HE(e,n,r),xf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Kt(u):(u=Nt(n)?pi:lt.current,u=Rs(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Uv(e,o,r,u),ur=!1;var d=e.memoizedState;o.state=d,zu(e,r,o,i),l=e.memoizedState,a!==r||d!==l||kt.current||ur?(typeof c=="function"&&(Rf(e,n,c,r),l=e.memoizedState),(a=ur||$v(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,jE(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:en(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Kt(l):(l=Nt(n)?pi:lt.current,l=Rs(e,l));var f=n.getDerivedStateFromProps;(c=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Uv(e,o,r,l),ur=!1,d=e.memoizedState,o.state=d,zu(e,r,o,i);var g=e.memoizedState;a!==h||d!==g||kt.current||ur?(typeof f=="function"&&(Rf(e,n,f,r),g=e.memoizedState),(u=ur||$v(e,n,u,r,d,g,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=g),o.props=r,o.state=g,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Pf(t,e,n,r,s,i)}function Pf(t,e,n,r,i,s){yC(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Ov(e,n,!1),qn(t,e,s);r=e.stateNode,hx.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=bs(e,t.child,null,s),e.child=bs(e,null,a,s)):ht(t,e,a,s),e.memoizedState=r.state,i&&Ov(e,n,!0),e.child}function vC(t){var e=t.stateNode;e.pendingContext?Pv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Pv(t,e.context,!1),vm(t,e.containerInfo)}function Qv(t,e,n,r,i){return xs(),dm(i),e.flags|=256,ht(t,e,n,r),e.child}var Of={dehydrated:null,treeContext:null,retryLane:0};function Df(t){return{baseLanes:t,cachePool:null,transitions:null}}function _C(t,e,n){var r=e.pendingProps,i=ye.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ae(ye,i&1),t===null)return kf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Kc(o,r,0,null),t=li(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Df(n),e.memoizedState=Of,t):km(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return dx(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return(o&1)===0&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=kr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=kr(a,s):(s=li(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Df(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Of,r}return s=t.child,t=s.sibling,r=kr(s,{mode:"visible",children:r.children}),(e.mode&1)===0&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function km(t,e){return e=Kc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function jl(t,e,n,r){return r!==null&&dm(r),bs(e,t.child,null,n),t=km(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function dx(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=ld(Error(T(422))),jl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Kc({mode:"visible",children:r.children},i,0,null),s=li(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,(e.mode&1)!==0&&bs(e,t.child,null,o),e.child.memoizedState=Df(o),e.memoizedState=Of,s);if((e.mode&1)===0)return jl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(T(419)),r=ld(s,r,void 0),jl(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ct||a){if(r=Be,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Wn(t,i),cn(r,t,i,-1))}return Pm(),r=ld(Error(T(421))),jl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Ix.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Pt=Cr(i.nextSibling),Ot=e,pe=!0,nn=null,t!==null&&(Bt[jt++]=Pn,Bt[jt++]=On,Bt[jt++]=mi,Pn=t.id,On=t.overflow,mi=e),e=km(e,r.children),e.flags|=4096,e)}function Yv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Nf(t.return,e,n)}function ud(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function wC(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ht(t,e,r.children,n),r=ye.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Yv(t,n,e);else if(t.tag===19)Yv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ae(ye,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Hu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ud(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Hu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ud(e,!0,n,null,s);break;case"together":ud(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function du(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function qn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),yi|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(T(153));if(e.child!==null){for(t=e.child,n=kr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=kr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function fx(t,e,n){switch(e.tag){case 3:vC(e),xs();break;case 5:KE(e);break;case 1:Nt(e.type)&&$u(e);break;case 4:vm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ae(Bu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ae(ye,ye.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?_C(t,e,n):(ae(ye,ye.current&1),t=qn(t,e,n),t!==null?t.sibling:null);ae(ye,ye.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return wC(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ae(ye,ye.current),r)break;return null;case 22:case 23:return e.lanes=0,gC(t,e,n)}return qn(t,e,n)}var EC,Mf,CC,TC;EC=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Mf=function(){};CC=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ei(vn.current);var s=null;switch(n){case"input":i=nf(t,i),r=nf(t,r),s=[];break;case"select":i=_e({},i,{value:void 0}),r=_e({},r,{value:void 0}),s=[];break;case"textarea":i=of(t,i),r=of(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Lu)}lf(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(na.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(na.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ce("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};TC=function(t,e,n,r){n!==r&&(e.flags|=4)};function wo(t,e){if(!pe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function nt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function px(t,e,n){var r=e.pendingProps;switch(hm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(e),null;case 1:return Nt(e.type)&&Fu(),nt(e),null;case 3:return r=e.stateNode,As(),de(kt),de(lt),wm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Vl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,nn!==null&&(zf(nn),nn=null))),Mf(t,e),nt(e),null;case 5:_m(e);var i=ei(pa.current);if(n=e.type,t!==null&&e.stateNode!=null)CC(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(T(166));return nt(e),null}if(t=ei(vn.current),Vl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[gn]=e,r[da]=s,t=(e.mode&1)!==0,n){case"dialog":ce("cancel",r),ce("close",r);break;case"iframe":case"object":case"embed":ce("load",r);break;case"video":case"audio":for(i=0;i<Ao.length;i++)ce(Ao[i],r);break;case"source":ce("error",r);break;case"img":case"image":case"link":ce("error",r),ce("load",r);break;case"details":ce("toggle",r);break;case"input":sv(r,s),ce("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ce("invalid",r);break;case"textarea":av(r,s),ce("invalid",r)}lf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ul(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ul(r.textContent,a,t),i=["children",""+a]):na.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ce("scroll",r)}switch(n){case"input":Al(r),ov(r,s,!0);break;case"textarea":Al(r),lv(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Lu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Yw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[gn]=e,t[da]=r,EC(t,e,!1,!1),e.stateNode=t;e:{switch(o=uf(n,r),n){case"dialog":ce("cancel",t),ce("close",t),i=r;break;case"iframe":case"object":case"embed":ce("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ao.length;i++)ce(Ao[i],t);i=r;break;case"source":ce("error",t),i=r;break;case"img":case"image":case"link":ce("error",t),ce("load",t),i=r;break;case"details":ce("toggle",t),i=r;break;case"input":sv(t,r),i=nf(t,r),ce("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=_e({},r,{value:void 0}),ce("invalid",t);break;case"textarea":av(t,r),i=of(t,r),ce("invalid",t);break;default:i=r}lf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Zw(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Xw(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ra(t,l):typeof l=="number"&&ra(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(na.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ce("scroll",t):l!=null&&Yp(t,s,l,o))}switch(n){case"input":Al(t),ov(t,r,!1);break;case"textarea":Al(t),lv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+br(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ds(t,!!r.multiple,s,!1):r.defaultValue!=null&&ds(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Lu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return nt(e),null;case 6:if(t&&e.stateNode!=null)TC(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(T(166));if(n=ei(pa.current),ei(vn.current),Vl(e)){if(r=e.stateNode,n=e.memoizedProps,r[gn]=e,(s=r.nodeValue!==n)&&(t=Ot,t!==null))switch(t.tag){case 3:Ul(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ul(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[gn]=e,e.stateNode=r}return nt(e),null;case 13:if(de(ye),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(pe&&Pt!==null&&(e.mode&1)!==0&&(e.flags&128)===0)VE(),xs(),e.flags|=98560,s=!1;else if(s=Vl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(T(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(T(317));s[gn]=e}else xs(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;nt(e),s=!1}else nn!==null&&(zf(nn),nn=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(ye.current&1)!==0?Ae===0&&(Ae=3):Pm())),e.updateQueue!==null&&(e.flags|=4),nt(e),null);case 4:return As(),Mf(t,e),t===null&&ca(e.stateNode.containerInfo),nt(e),null;case 10:return mm(e.type._context),nt(e),null;case 17:return Nt(e.type)&&Fu(),nt(e),null;case 19:if(de(ye),s=e.memoizedState,s===null)return nt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)wo(s,!1);else{if(Ae!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=Hu(t),o!==null){for(e.flags|=128,wo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ae(ye,ye.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ce()>Os&&(e.flags|=128,r=!0,wo(s,!1),e.lanes=4194304)}else{if(!r)if(t=Hu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),wo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!pe)return nt(e),null}else 2*Ce()-s.renderingStartTime>Os&&n!==1073741824&&(e.flags|=128,r=!0,wo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ce(),e.sibling=null,n=ye.current,ae(ye,r?n&1|2:n&1),e):(nt(e),null);case 22:case 23:return Am(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(At&1073741824)!==0&&(nt(e),e.subtreeFlags&6&&(e.flags|=8192)):nt(e),null;case 24:return null;case 25:return null}throw Error(T(156,e.tag))}function mx(t,e){switch(hm(e),e.tag){case 1:return Nt(e.type)&&Fu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return As(),de(kt),de(lt),wm(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return _m(e),null;case 13:if(de(ye),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(T(340));xs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return de(ye),null;case 4:return As(),null;case 10:return mm(e.type._context),null;case 22:case 23:return Am(),null;case 24:return null;default:return null}}var zl=!1,rt=!1,gx=typeof WeakSet=="function"?WeakSet:Set,b=null;function ss(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){we(t,e,r)}else n.current=null}function Lf(t,e,n){try{n()}catch(r){we(t,e,r)}}var Xv=!1;function yx(t,e){if(_f=Ou,t=NE(),um(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var f;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(f=h.firstChild)!==null;)d=h,h=f;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(f=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=f}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(wf={focusedElem:t,selectionRange:n},Ou=!1,b=e;b!==null;)if(e=b,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,b=t;else for(;b!==null;){e=b;try{var g=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,w=g.memoizedState,m=e.stateNode,p=m.getSnapshotBeforeUpdate(e.elementType===e.type?v:en(e.type,v),w);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(_){we(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,b=t;break}b=e.return}return g=Xv,Xv=!1,g}function jo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Lf(e,n,s)}i=i.next}while(i!==r)}}function Wc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ff(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function SC(t){var e=t.alternate;e!==null&&(t.alternate=null,SC(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[gn],delete e[da],delete e[Tf],delete e[ZR],delete e[ex])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function IC(t){return t.tag===5||t.tag===3||t.tag===4}function Jv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||IC(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function $f(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Lu));else if(r!==4&&(t=t.child,t!==null))for($f(t,e,n),t=t.sibling;t!==null;)$f(t,e,n),t=t.sibling}function Uf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Uf(t,e,n),t=t.sibling;t!==null;)Uf(t,e,n),t=t.sibling}var We=null,tn=!1;function or(t,e,n){for(n=n.child;n!==null;)kC(t,e,n),n=n.sibling}function kC(t,e,n){if(yn&&typeof yn.onCommitFiberUnmount=="function")try{yn.onCommitFiberUnmount(Fc,n)}catch{}switch(n.tag){case 5:rt||ss(n,e);case 6:var r=We,i=tn;We=null,or(t,e,n),We=r,tn=i,We!==null&&(tn?(t=We,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):We.removeChild(n.stateNode));break;case 18:We!==null&&(tn?(t=We,n=n.stateNode,t.nodeType===8?nd(t.parentNode,n):t.nodeType===1&&nd(t,n),aa(t)):nd(We,n.stateNode));break;case 4:r=We,i=tn,We=n.stateNode.containerInfo,tn=!0,or(t,e,n),We=r,tn=i;break;case 0:case 11:case 14:case 15:if(!rt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&Lf(n,e,o),i=i.next}while(i!==r)}or(t,e,n);break;case 1:if(!rt&&(ss(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){we(n,e,a)}or(t,e,n);break;case 21:or(t,e,n);break;case 22:n.mode&1?(rt=(r=rt)||n.memoizedState!==null,or(t,e,n),rt=r):or(t,e,n);break;default:or(t,e,n)}}function Zv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new gx),e.forEach(function(r){var i=kx.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Zt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:We=a.stateNode,tn=!1;break e;case 3:We=a.stateNode.containerInfo,tn=!0;break e;case 4:We=a.stateNode.containerInfo,tn=!0;break e}a=a.return}if(We===null)throw Error(T(160));kC(s,o,i),We=null,tn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){we(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)NC(e,t),e=e.sibling}function NC(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Zt(e,t),pn(t),r&4){try{jo(3,t,t.return),Wc(3,t)}catch(v){we(t,t.return,v)}try{jo(5,t,t.return)}catch(v){we(t,t.return,v)}}break;case 1:Zt(e,t),pn(t),r&512&&n!==null&&ss(n,n.return);break;case 5:if(Zt(e,t),pn(t),r&512&&n!==null&&ss(n,n.return),t.flags&32){var i=t.stateNode;try{ra(i,"")}catch(v){we(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Gw(i,s),uf(a,o);var u=uf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?Zw(i,h):c==="dangerouslySetInnerHTML"?Xw(i,h):c==="children"?ra(i,h):Yp(i,c,h,u)}switch(a){case"input":rf(i,s);break;case"textarea":Qw(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var f=s.value;f!=null?ds(i,!!s.multiple,f,!1):d!==!!s.multiple&&(s.defaultValue!=null?ds(i,!!s.multiple,s.defaultValue,!0):ds(i,!!s.multiple,s.multiple?[]:"",!1))}i[da]=s}catch(v){we(t,t.return,v)}}break;case 6:if(Zt(e,t),pn(t),r&4){if(t.stateNode===null)throw Error(T(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){we(t,t.return,v)}}break;case 3:if(Zt(e,t),pn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{aa(e.containerInfo)}catch(v){we(t,t.return,v)}break;case 4:Zt(e,t),pn(t);break;case 13:Zt(e,t),pn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(xm=Ce())),r&4&&Zv(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(rt=(u=rt)||c,Zt(e,t),rt=u):Zt(e,t),pn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&(t.mode&1)!==0)for(b=t,c=t.child;c!==null;){for(h=b=c;b!==null;){switch(d=b,f=d.child,d.tag){case 0:case 11:case 14:case 15:jo(4,d,d.return);break;case 1:ss(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(v){we(r,n,v)}}break;case 5:ss(d,d.return);break;case 22:if(d.memoizedState!==null){t_(h);continue}}f!==null?(f.return=d,b=f):t_(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Jw("display",o))}catch(v){we(t,t.return,v)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){we(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Zt(e,t),pn(t),r&4&&Zv(t);break;case 21:break;default:Zt(e,t),pn(t)}}function pn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(IC(n)){var r=n;break e}n=n.return}throw Error(T(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ra(i,""),r.flags&=-33);var s=Jv(t);Uf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Jv(t);$f(t,a,o);break;default:throw Error(T(161))}}catch(l){we(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function vx(t,e,n){b=t,RC(t)}function RC(t,e,n){for(var r=(t.mode&1)!==0;b!==null;){var i=b,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||zl;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||rt;a=zl;var u=rt;if(zl=o,(rt=l)&&!u)for(b=i;b!==null;)o=b,l=o.child,o.tag===22&&o.memoizedState!==null?n_(i):l!==null?(l.return=o,b=l):n_(i);for(;s!==null;)b=s,RC(s),s=s.sibling;b=i,zl=a,rt=u}e_(t)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,b=s):e_(t)}}function e_(t){for(;b!==null;){var e=b;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:rt||Wc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!rt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:en(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Fv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Fv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&aa(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}rt||e.flags&512&&Ff(e)}catch(d){we(e,e.return,d)}}if(e===t){b=null;break}if(n=e.sibling,n!==null){n.return=e.return,b=n;break}b=e.return}}function t_(t){for(;b!==null;){var e=b;if(e===t){b=null;break}var n=e.sibling;if(n!==null){n.return=e.return,b=n;break}b=e.return}}function n_(t){for(;b!==null;){var e=b;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Wc(4,e)}catch(l){we(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){we(e,i,l)}}var s=e.return;try{Ff(e)}catch(l){we(e,s,l)}break;case 5:var o=e.return;try{Ff(e)}catch(l){we(e,o,l)}}}catch(l){we(e,e.return,l)}if(e===t){b=null;break}var a=e.sibling;if(a!==null){a.return=e.return,b=a;break}b=e.return}}var _x=Math.ceil,Ku=Jn.ReactCurrentDispatcher,Nm=Jn.ReactCurrentOwner,Wt=Jn.ReactCurrentBatchConfig,Z=0,Be=null,Ie=null,Ge=0,At=0,os=Ur(0),Ae=0,va=null,yi=0,qc=0,Rm=0,zo=null,wt=null,xm=0,Os=1/0,Rn=null,Gu=!1,Vf=null,Sr=null,Hl=!1,vr=null,Qu=0,Ho=0,Bf=null,fu=-1,pu=0;function mt(){return(Z&6)!==0?Ce():fu!==-1?fu:fu=Ce()}function Ir(t){return(t.mode&1)===0?1:(Z&2)!==0&&Ge!==0?Ge&-Ge:nx.transition!==null?(pu===0&&(pu=hE()),pu):(t=re,t!==0||(t=window.event,t=t===void 0?16:vE(t.type)),t)}function cn(t,e,n,r){if(50<Ho)throw Ho=0,Bf=null,Error(T(185));Qa(t,n,r),((Z&2)===0||t!==Be)&&(t===Be&&((Z&2)===0&&(qc|=n),Ae===4&&dr(t,Ge)),Rt(t,r),n===1&&Z===0&&(e.mode&1)===0&&(Os=Ce()+500,jc&&Vr()))}function Rt(t,e){var n=t.callbackNode;nR(t,e);var r=Pu(t,t===Be?Ge:0);if(r===0)n!==null&&hv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&hv(n),e===1)t.tag===0?tx(r_.bind(null,t)):FE(r_.bind(null,t)),XR(function(){(Z&6)===0&&Vr()}),n=null;else{switch(dE(r)){case 1:n=tm;break;case 4:n=uE;break;case 16:n=Au;break;case 536870912:n=cE;break;default:n=Au}n=LC(n,xC.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function xC(t,e){if(fu=-1,pu=0,(Z&6)!==0)throw Error(T(327));var n=t.callbackNode;if(ys()&&t.callbackNode!==n)return null;var r=Pu(t,t===Be?Ge:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=Yu(t,r);else{e=r;var i=Z;Z|=2;var s=AC();(Be!==t||Ge!==e)&&(Rn=null,Os=Ce()+500,ai(t,e));do try{Cx();break}catch(a){bC(t,a)}while(1);pm(),Ku.current=s,Z=i,Ie!==null?e=0:(Be=null,Ge=0,e=Ae)}if(e!==0){if(e===2&&(i=pf(t),i!==0&&(r=i,e=jf(t,i))),e===1)throw n=va,ai(t,0),dr(t,r),Rt(t,Ce()),n;if(e===6)dr(t,r);else{if(i=t.current.alternate,(r&30)===0&&!wx(i)&&(e=Yu(t,r),e===2&&(s=pf(t),s!==0&&(r=s,e=jf(t,s))),e===1))throw n=va,ai(t,0),dr(t,r),Rt(t,Ce()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(T(345));case 2:Kr(t,wt,Rn);break;case 3:if(dr(t,r),(r&130023424)===r&&(e=xm+500-Ce(),10<e)){if(Pu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){mt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Cf(Kr.bind(null,t,wt,Rn),e);break}Kr(t,wt,Rn);break;case 4:if(dr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-un(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*_x(r/1960))-r,10<r){t.timeoutHandle=Cf(Kr.bind(null,t,wt,Rn),r);break}Kr(t,wt,Rn);break;case 5:Kr(t,wt,Rn);break;default:throw Error(T(329))}}}return Rt(t,Ce()),t.callbackNode===n?xC.bind(null,t):null}function jf(t,e){var n=zo;return t.current.memoizedState.isDehydrated&&(ai(t,e).flags|=256),t=Yu(t,e),t!==2&&(e=wt,wt=n,e!==null&&zf(e)),t}function zf(t){wt===null?wt=t:wt.push.apply(wt,t)}function wx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!dn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function dr(t,e){for(e&=~Rm,e&=~qc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-un(e),r=1<<n;t[n]=-1,e&=~r}}function r_(t){if((Z&6)!==0)throw Error(T(327));ys();var e=Pu(t,0);if((e&1)===0)return Rt(t,Ce()),null;var n=Yu(t,e);if(t.tag!==0&&n===2){var r=pf(t);r!==0&&(e=r,n=jf(t,r))}if(n===1)throw n=va,ai(t,0),dr(t,e),Rt(t,Ce()),n;if(n===6)throw Error(T(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Kr(t,wt,Rn),Rt(t,Ce()),null}function bm(t,e){var n=Z;Z|=1;try{return t(e)}finally{Z=n,Z===0&&(Os=Ce()+500,jc&&Vr())}}function vi(t){vr!==null&&vr.tag===0&&(Z&6)===0&&ys();var e=Z;Z|=1;var n=Wt.transition,r=re;try{if(Wt.transition=null,re=1,t)return t()}finally{re=r,Wt.transition=n,Z=e,(Z&6)===0&&Vr()}}function Am(){At=os.current,de(os)}function ai(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,YR(n)),Ie!==null)for(n=Ie.return;n!==null;){var r=n;switch(hm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Fu();break;case 3:As(),de(kt),de(lt),wm();break;case 5:_m(r);break;case 4:As();break;case 13:de(ye);break;case 19:de(ye);break;case 10:mm(r.type._context);break;case 22:case 23:Am()}n=n.return}if(Be=t,Ie=t=kr(t.current,null),Ge=At=e,Ae=0,va=null,Rm=qc=yi=0,wt=zo=null,Zr!==null){for(e=0;e<Zr.length;e++)if(n=Zr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Zr=null}return t}function bC(t,e){do{var n=Ie;try{if(pm(),cu.current=qu,Wu){for(var r=ve.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Wu=!1}if(gi=0,$e=xe=ve=null,Bo=!1,ma=0,Nm.current=null,n===null||n.return===null){Ae=1,va=e,Ie=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ge,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if((c.mode&1)===0&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var f=Hv(o);if(f!==null){f.flags&=-257,Wv(f,o,a,s,e),f.mode&1&&zv(s,u,e),e=f,l=u;var g=e.updateQueue;if(g===null){var v=new Set;v.add(l),e.updateQueue=v}else g.add(l);break e}else{if((e&1)===0){zv(s,u,e),Pm();break e}l=Error(T(426))}}else if(pe&&a.mode&1){var w=Hv(o);if(w!==null){(w.flags&65536)===0&&(w.flags|=256),Wv(w,o,a,s,e),dm(Ps(l,a));break e}}s=l=Ps(l,a),Ae!==4&&(Ae=2),zo===null?zo=[s]:zo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=fC(s,l,e);Lv(s,m);break e;case 1:a=l;var p=s.type,y=s.stateNode;if((s.flags&128)===0&&(typeof p.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Sr===null||!Sr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var _=pC(s,a,e);Lv(s,_);break e}}s=s.return}while(s!==null)}OC(n)}catch(I){e=I,Ie===n&&n!==null&&(Ie=n=n.return);continue}break}while(1)}function AC(){var t=Ku.current;return Ku.current=qu,t===null?qu:t}function Pm(){(Ae===0||Ae===3||Ae===2)&&(Ae=4),Be===null||(yi&268435455)===0&&(qc&268435455)===0||dr(Be,Ge)}function Yu(t,e){var n=Z;Z|=2;var r=AC();(Be!==t||Ge!==e)&&(Rn=null,ai(t,e));do try{Ex();break}catch(i){bC(t,i)}while(1);if(pm(),Z=n,Ku.current=r,Ie!==null)throw Error(T(261));return Be=null,Ge=0,Ae}function Ex(){for(;Ie!==null;)PC(Ie)}function Cx(){for(;Ie!==null&&!KN();)PC(Ie)}function PC(t){var e=MC(t.alternate,t,At);t.memoizedProps=t.pendingProps,e===null?OC(t):Ie=e,Nm.current=null}function OC(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=px(n,e,At),n!==null){Ie=n;return}}else{if(n=mx(n,e),n!==null){n.flags&=32767,Ie=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ae=6,Ie=null;return}}if(e=e.sibling,e!==null){Ie=e;return}Ie=e=t}while(e!==null);Ae===0&&(Ae=5)}function Kr(t,e,n){var r=re,i=Wt.transition;try{Wt.transition=null,re=1,Tx(t,e,n,r)}finally{Wt.transition=i,re=r}return null}function Tx(t,e,n,r){do ys();while(vr!==null);if((Z&6)!==0)throw Error(T(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(T(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(rR(t,s),t===Be&&(Ie=Be=null,Ge=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Hl||(Hl=!0,LC(Au,function(){return ys(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=Wt.transition,Wt.transition=null;var o=re;re=1;var a=Z;Z|=4,Nm.current=null,yx(t,n),NC(n,t),zR(wf),Ou=!!_f,wf=_f=null,t.current=n,vx(n),GN(),Z=a,re=o,Wt.transition=s}else t.current=n;if(Hl&&(Hl=!1,vr=t,Qu=i),s=t.pendingLanes,s===0&&(Sr=null),XN(n.stateNode),Rt(t,Ce()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Gu)throw Gu=!1,t=Vf,Vf=null,t;return(Qu&1)!==0&&t.tag!==0&&ys(),s=t.pendingLanes,(s&1)!==0?t===Bf?Ho++:(Ho=0,Bf=t):Ho=0,Vr(),null}function ys(){if(vr!==null){var t=dE(Qu),e=Wt.transition,n=re;try{if(Wt.transition=null,re=16>t?16:t,vr===null)var r=!1;else{if(t=vr,vr=null,Qu=0,(Z&6)!==0)throw Error(T(331));var i=Z;for(Z|=4,b=t.current;b!==null;){var s=b,o=s.child;if((b.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(b=u;b!==null;){var c=b;switch(c.tag){case 0:case 11:case 15:jo(8,c,s)}var h=c.child;if(h!==null)h.return=c,b=h;else for(;b!==null;){c=b;var d=c.sibling,f=c.return;if(SC(c),c===u){b=null;break}if(d!==null){d.return=f,b=d;break}b=f}}}var g=s.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var w=v.sibling;v.sibling=null,v=w}while(v!==null)}}b=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,b=o;else e:for(;b!==null;){if(s=b,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:jo(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,b=m;break e}b=s.return}}var p=t.current;for(b=p;b!==null;){o=b;var y=o.child;if((o.subtreeFlags&2064)!==0&&y!==null)y.return=o,b=y;else e:for(o=p;b!==null;){if(a=b,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:Wc(9,a)}}catch(I){we(a,a.return,I)}if(a===o){b=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,b=_;break e}b=a.return}}if(Z=i,Vr(),yn&&typeof yn.onPostCommitFiberRoot=="function")try{yn.onPostCommitFiberRoot(Fc,t)}catch{}r=!0}return r}finally{re=n,Wt.transition=e}}return!1}function i_(t,e,n){e=Ps(n,e),e=fC(t,e,1),t=Tr(t,e,1),e=mt(),t!==null&&(Qa(t,1,e),Rt(t,e))}function we(t,e,n){if(t.tag===3)i_(t,t,n);else for(;e!==null;){if(e.tag===3){i_(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Sr===null||!Sr.has(r))){t=Ps(n,t),t=pC(e,t,1),e=Tr(e,t,1),t=mt(),e!==null&&(Qa(e,1,t),Rt(e,t));break}}e=e.return}}function Sx(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=mt(),t.pingedLanes|=t.suspendedLanes&n,Be===t&&(Ge&n)===n&&(Ae===4||Ae===3&&(Ge&130023424)===Ge&&500>Ce()-xm?ai(t,0):Rm|=n),Rt(t,e)}function DC(t,e){e===0&&((t.mode&1)===0?e=1:(e=Dl,Dl<<=1,(Dl&130023424)===0&&(Dl=4194304)));var n=mt();t=Wn(t,e),t!==null&&(Qa(t,e,n),Rt(t,n))}function Ix(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),DC(t,n)}function kx(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(e),DC(t,n)}var MC;MC=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||kt.current)Ct=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return Ct=!1,fx(t,e,n);Ct=(t.flags&131072)!==0}else Ct=!1,pe&&(e.flags&1048576)!==0&&$E(e,Vu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;du(t,e),t=e.pendingProps;var i=Rs(e,lt.current);gs(e,n),i=Cm(null,e,r,t,i,n);var s=Tm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Nt(r)?(s=!0,$u(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ym(e),i.updater=zc,e.stateNode=i,i._reactInternals=e,xf(e,r,t,n),e=Pf(null,e,r,!0,s,n)):(e.tag=0,pe&&s&&cm(e),ht(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(du(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Rx(r),t=en(r,t),i){case 0:e=Af(null,e,r,t,n);break e;case 1:e=Gv(null,e,r,t,n);break e;case 11:e=qv(null,e,r,t,n);break e;case 14:e=Kv(null,e,r,en(r.type,t),n);break e}throw Error(T(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:en(r,i),Af(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:en(r,i),Gv(t,e,r,i,n);case 3:e:{if(vC(e),t===null)throw Error(T(387));r=e.pendingProps,s=e.memoizedState,i=s.element,jE(t,e),zu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ps(Error(T(423)),e),e=Qv(t,e,r,n,i);break e}else if(r!==i){i=Ps(Error(T(424)),e),e=Qv(t,e,r,n,i);break e}else for(Pt=Cr(e.stateNode.containerInfo.firstChild),Ot=e,pe=!0,nn=null,n=qE(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(xs(),r===i){e=qn(t,e,n);break e}ht(t,e,r,n)}e=e.child}return e;case 5:return KE(e),t===null&&kf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Ef(r,i)?o=null:s!==null&&Ef(r,s)&&(e.flags|=32),yC(t,e),ht(t,e,o,n),e.child;case 6:return t===null&&kf(e),null;case 13:return _C(t,e,n);case 4:return vm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=bs(e,null,r,n):ht(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:en(r,i),qv(t,e,r,i,n);case 7:return ht(t,e,e.pendingProps,n),e.child;case 8:return ht(t,e,e.pendingProps.children,n),e.child;case 12:return ht(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ae(Bu,r._currentValue),r._currentValue=o,s!==null)if(dn(s.value,o)){if(s.children===i.children&&!kt.current){e=qn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Un(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Nf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(T(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Nf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ht(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,gs(e,n),i=Kt(i),r=r(i),e.flags|=1,ht(t,e,r,n),e.child;case 14:return r=e.type,i=en(r,e.pendingProps),i=en(r.type,i),Kv(t,e,r,i,n);case 15:return mC(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:en(r,i),du(t,e),e.tag=1,Nt(r)?(t=!0,$u(e)):t=!1,gs(e,n),HE(e,r,i),xf(e,r,i,n),Pf(null,e,r,!0,t,n);case 19:return wC(t,e,n);case 22:return gC(t,e,n)}throw Error(T(156,e.tag))};function LC(t,e){return lE(t,e)}function Nx(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ht(t,e,n,r){return new Nx(t,e,n,r)}function Om(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Rx(t){if(typeof t=="function")return Om(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Jp)return 11;if(t===Zp)return 14}return 2}function kr(t,e){var n=t.alternate;return n===null?(n=Ht(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function mu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Om(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Yi:return li(n.children,i,s,e);case Xp:o=8,i|=8;break;case Jd:return t=Ht(12,n,e,i|2),t.elementType=Jd,t.lanes=s,t;case Zd:return t=Ht(13,n,e,i),t.elementType=Zd,t.lanes=s,t;case ef:return t=Ht(19,n,e,i),t.elementType=ef,t.lanes=s,t;case Ww:return Kc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case zw:o=10;break e;case Hw:o=9;break e;case Jp:o=11;break e;case Zp:o=14;break e;case lr:o=16,r=null;break e}throw Error(T(130,t==null?t:typeof t,""))}return e=Ht(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function li(t,e,n,r){return t=Ht(7,t,r,e),t.lanes=n,t}function Kc(t,e,n,r){return t=Ht(22,t,r,e),t.elementType=Ww,t.lanes=n,t.stateNode={isHidden:!1},t}function cd(t,e,n){return t=Ht(6,t,null,e),t.lanes=n,t}function hd(t,e,n){return e=Ht(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function xx(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wh(0),this.expirationTimes=Wh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Dm(t,e,n,r,i,s,o,a,l){return t=new xx(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ht(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ym(s),t}function bx(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function FC(t){if(!t)return Ar;t=t._reactInternals;e:{if(Mi(t)!==t||t.tag!==1)throw Error(T(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Nt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(T(171))}if(t.tag===1){var n=t.type;if(Nt(n))return LE(t,n,e)}return e}function $C(t,e,n,r,i,s,o,a,l){return t=Dm(n,r,!0,t,i,s,o,a,l),t.context=FC(null),n=t.current,r=mt(),i=Ir(n),s=Un(r,i),s.callback=e!=null?e:null,Tr(n,s,i),t.current.lanes=i,Qa(t,i,r),Rt(t,r),t}function Gc(t,e,n,r){var i=e.current,s=mt(),o=Ir(i);return n=FC(n),e.context===null?e.context=n:e.pendingContext=n,e=Un(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Tr(i,e,o),t!==null&&(cn(t,i,o,s),uu(t,i,o)),o}function Xu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function s_(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Mm(t,e){s_(t,e),(t=t.alternate)&&s_(t,e)}function Ax(){return null}var UC=typeof reportError=="function"?reportError:function(t){console.error(t)};function Lm(t){this._internalRoot=t}Qc.prototype.render=Lm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(T(409));Gc(t,e,null,null)};Qc.prototype.unmount=Lm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;vi(function(){Gc(null,t,null,null)}),e[Hn]=null}};function Qc(t){this._internalRoot=t}Qc.prototype.unstable_scheduleHydration=function(t){if(t){var e=mE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<hr.length&&e!==0&&e<hr[n].priority;n++);hr.splice(n,0,t),n===0&&yE(t)}};function Fm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Yc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function o_(){}function Px(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Xu(o);s.call(u)}}var o=$C(e,r,t,0,null,!1,!1,"",o_);return t._reactRootContainer=o,t[Hn]=o.current,ca(t.nodeType===8?t.parentNode:t),vi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Xu(l);a.call(u)}}var l=Dm(t,0,!1,null,null,!1,!1,"",o_);return t._reactRootContainer=l,t[Hn]=l.current,ca(t.nodeType===8?t.parentNode:t),vi(function(){Gc(e,l,n,r)}),l}function Xc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Xu(o);a.call(l)}}Gc(e,o,t,i)}else o=Px(n,e,t,i,r);return Xu(o)}fE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=bo(e.pendingLanes);n!==0&&(nm(e,n|1),Rt(e,Ce()),(Z&6)===0&&(Os=Ce()+500,Vr()))}break;case 13:vi(function(){var r=Wn(t,1);if(r!==null){var i=mt();cn(r,t,1,i)}}),Mm(t,1)}};rm=function(t){if(t.tag===13){var e=Wn(t,134217728);if(e!==null){var n=mt();cn(e,t,134217728,n)}Mm(t,134217728)}};pE=function(t){if(t.tag===13){var e=Ir(t),n=Wn(t,e);if(n!==null){var r=mt();cn(n,t,e,r)}Mm(t,e)}};mE=function(){return re};gE=function(t,e){var n=re;try{return re=t,e()}finally{re=n}};hf=function(t,e,n){switch(e){case"input":if(rf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Bc(r);if(!i)throw Error(T(90));Kw(r),rf(r,i)}}}break;case"textarea":Qw(t,n);break;case"select":e=n.value,e!=null&&ds(t,!!n.multiple,e,!1)}};nE=bm;rE=vi;var Ox={usingClientEntryPoint:!1,Events:[Xa,es,Bc,eE,tE,bm]},Eo={findFiberByHostInstance:Jr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Dx={bundleType:Eo.bundleType,version:Eo.version,rendererPackageName:Eo.rendererPackageName,rendererConfig:Eo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Jn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=oE(t),t===null?null:t.stateNode},findFiberByHostInstance:Eo.findFiberByHostInstance||Ax,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wl.isDisabled&&Wl.supportsFiber)try{Fc=Wl.inject(Dx),yn=Wl}catch{}}$t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ox;$t.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fm(e))throw Error(T(200));return bx(t,e,null,n)};$t.createRoot=function(t,e){if(!Fm(t))throw Error(T(299));var n=!1,r="",i=UC;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Dm(t,1,!1,null,null,n,!1,r,i),t[Hn]=e.current,ca(t.nodeType===8?t.parentNode:t),new Lm(e)};$t.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(T(188)):(t=Object.keys(t).join(","),Error(T(268,t)));return t=oE(e),t=t===null?null:t.stateNode,t};$t.flushSync=function(t){return vi(t)};$t.hydrate=function(t,e,n){if(!Yc(e))throw Error(T(200));return Xc(null,t,e,!0,n)};$t.hydrateRoot=function(t,e,n){if(!Fm(t))throw Error(T(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=UC;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=$C(e,null,t,1,n!=null?n:null,i,!1,s,o),t[Hn]=e.current,ca(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Qc(e)};$t.render=function(t,e,n){if(!Yc(e))throw Error(T(200));return Xc(null,t,e,!1,n)};$t.unmountComponentAtNode=function(t){if(!Yc(t))throw Error(T(40));return t._reactRootContainer?(vi(function(){Xc(null,null,t,!1,function(){t._reactRootContainer=null,t[Hn]=null})}),!0):!1};$t.unstable_batchedUpdates=bm;$t.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Yc(n))throw Error(T(200));if(t==null||t._reactInternals===void 0)throw Error(T(38));return Xc(t,e,n,!1,r)};$t.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=$t})(Kp);const as=Aw(Kp.exports);var a_=Kp.exports;Yd.createRoot=a_.createRoot,Yd.hydrateRoot=a_.hydrateRoot;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VC={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k=function(t,e){if(!t)throw Zs(e)},Zs=function(t){return new Error("Firebase Database ("+VC.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BC=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Mx=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},$m={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;l||(f=64,o||(d=64)),r.push(n[c],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(BC(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Mx(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw Error();const d=s<<2|a>>4;if(r.push(d),u!==64){const f=a<<4&240|u>>2;if(r.push(f),h!==64){const g=u<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},jC=function(t){const e=BC(t);return $m.encodeByteArray(e,!0)},zC=function(t){return jC(t).replace(/\./g,"")},Hf=function(t){try{return $m.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lx(t){return HC(void 0,t)}function HC(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Fx(n)||(t[n]=HC(t[n],e[n]));return t}function Fx(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Jc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(je())}function WC(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Vm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $x(){return je().indexOf("Electron/")>=0}function qC(){const t=je();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ux(){return je().indexOf("MSAppHost/")>=0}function KC(){return VC.NODE_ADMIN===!0}function GC(){return typeof indexedDB=="object"}function Vx(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bx="FirebaseError";class Xt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Bx,Object.setPrototypeOf(this,Xt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Li.prototype.create)}}class Li{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?jx(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Xt(i,a,r)}}function jx(t,e){return t.replace(zx,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const zx=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _a(t){return JSON.parse(t)}function Ve(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QC=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=_a(Hf(s[0])||""),n=_a(Hf(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},Hx=function(t){const e=QC(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Wx=function(t){const e=QC(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ds(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Wf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ju(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Zu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(l_(s)&&l_(o)){if(!Zu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function l_(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qx{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)r[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let h=0;h<80;h++){h<40?h<20?(u=a^s&(o^a),c=1518500249):(u=s^o^a,c=1859775393):h<60?(u=s&o|a&(s|o),c=2400959708):(u=s^o^a,c=3395469782);const d=(i<<5|i>>>27)+u+l+c+r[h]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Kx(t,e){const n=new Gx(t,e);return n.subscribe.bind(n)}class Gx{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Qx(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=dd),i.error===void 0&&(i.error=dd),i.complete===void 0&&(i.complete=dd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Qx(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function dd(){}function YC(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yx=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,k(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Zc=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const Xx=1e3,Jx=2,Zx=4*60*60*1e3,eb=.5;function tb(t,e=Xx,n=Jx){const r=e*Math.pow(n,t),i=Math.round(eb*r*(Math.random()-.5)*2);return Math.min(Zx,r+i)}/**
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
 */function ze(t){return t&&t._delegate?t._delegate:t}class Lt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Gr="[DEFAULT]";/**
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
 */class nb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Um;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ib(e))try{this.getOrInitializeService({instanceIdentifier:Gr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Gr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Gr){return this.instances.has(e)}getOptions(e=Gr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:rb(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Gr){return this.component?this.component.multipleInstances?e:Gr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rb(t){return t===Gr?void 0:t}function ib(t){return t.instantiationMode==="EAGER"}/**
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
 */class sb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new nb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var J;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(J||(J={}));const ob={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},ab=J.INFO,lb={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},ub=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=lb[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Za{constructor(e){this.name=e,this._logLevel=ab,this._logHandler=ub,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in J))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ob[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...e),this._logHandler(this,J.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...e),this._logHandler(this,J.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,J.INFO,...e),this._logHandler(this,J.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,J.WARN,...e),this._logHandler(this,J.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...e),this._logHandler(this,J.ERROR,...e)}}const cb=(t,e)=>e.some(n=>t instanceof n);let u_,c_;function hb(){return u_||(u_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function db(){return c_||(c_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const XC=new WeakMap,qf=new WeakMap,JC=new WeakMap,fd=new WeakMap,Bm=new WeakMap;function fb(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Nr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&XC.set(n,t)}).catch(()=>{}),Bm.set(e,t),e}function pb(t){if(qf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});qf.set(t,e)}let Kf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return qf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||JC.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Nr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function mb(t){Kf=t(Kf)}function gb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(pd(this),e,...n);return JC.set(r,e.sort?e.sort():[e]),Nr(r)}:db().includes(t)?function(...e){return t.apply(pd(this),e),Nr(XC.get(this))}:function(...e){return Nr(t.apply(pd(this),e))}}function yb(t){return typeof t=="function"?gb(t):(t instanceof IDBTransaction&&pb(t),cb(t,hb())?new Proxy(t,Kf):t)}function Nr(t){if(t instanceof IDBRequest)return fb(t);if(fd.has(t))return fd.get(t);const e=yb(t);return e!==t&&(fd.set(t,e),Bm.set(e,t)),e}const pd=t=>Bm.get(t);function ZC(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Nr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Nr(o.result),l.oldVersion,l.newVersion,Nr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const vb=["get","getKey","getAll","getAllKeys","count"],_b=["put","add","delete","clear"],md=new Map;function h_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(md.get(e))return md.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=_b.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||vb.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return md.set(e,s),s}mb(t=>({...t,get:(e,n,r)=>h_(e,n)||t.get(e,n,r),has:(e,n)=>!!h_(e,n)||t.has(e,n)}));/**
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
 */class wb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Eb(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Eb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Gf="@firebase/app",d_="0.7.32";/**
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
 */const _i=new Za("@firebase/app"),Cb="@firebase/app-compat",Tb="@firebase/analytics-compat",Sb="@firebase/analytics",Ib="@firebase/app-check-compat",kb="@firebase/app-check",Nb="@firebase/auth",Rb="@firebase/auth-compat",xb="@firebase/database",bb="@firebase/database-compat",Ab="@firebase/functions",Pb="@firebase/functions-compat",Ob="@firebase/installations",Db="@firebase/installations-compat",Mb="@firebase/messaging",Lb="@firebase/messaging-compat",Fb="@firebase/performance",$b="@firebase/performance-compat",Ub="@firebase/remote-config",Vb="@firebase/remote-config-compat",Bb="@firebase/storage",jb="@firebase/storage-compat",zb="@firebase/firestore",Hb="@firebase/firestore-compat",Wb="firebase",qb="9.9.4";/**
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
 */const eT="[DEFAULT]",Kb={[Gf]:"fire-core",[Cb]:"fire-core-compat",[Sb]:"fire-analytics",[Tb]:"fire-analytics-compat",[kb]:"fire-app-check",[Ib]:"fire-app-check-compat",[Nb]:"fire-auth",[Rb]:"fire-auth-compat",[xb]:"fire-rtdb",[bb]:"fire-rtdb-compat",[Ab]:"fire-fn",[Pb]:"fire-fn-compat",[Ob]:"fire-iid",[Db]:"fire-iid-compat",[Mb]:"fire-fcm",[Lb]:"fire-fcm-compat",[Fb]:"fire-perf",[$b]:"fire-perf-compat",[Ub]:"fire-rc",[Vb]:"fire-rc-compat",[Bb]:"fire-gcs",[jb]:"fire-gcs-compat",[zb]:"fire-fst",[Hb]:"fire-fst-compat","fire-js":"fire-js",[Wb]:"fire-js-all"};/**
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
 */const wa=new Map,Qf=new Map;function Gb(t,e){try{t.container.addComponent(e)}catch(n){_i.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Qt(t){const e=t.name;if(Qf.has(e))return _i.debug(`There were multiple attempts to register component ${e}.`),!1;Qf.set(e,t);for(const n of wa.values())Gb(n,t);return!0}function to(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Qb={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},wi=new Li("app","Firebase",Qb);/**
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
 */class Yb{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Lt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw wi.create("app-deleted",{appName:this._name})}}/**
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
 */const Br=qb;function Xb(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:eT,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw wi.create("bad-app-name",{appName:String(r)});const i=wa.get(r);if(i){if(Zu(t,i.options)&&Zu(n,i.config))return i;throw wi.create("duplicate-app",{appName:r})}const s=new sb(r);for(const a of Qf.values())s.addComponent(a);const o=new Yb(t,n,s);return wa.set(r,o),o}function jm(t=eT){const e=wa.get(t);if(!e)throw wi.create("no-app",{appName:t});return e}function Jb(){return Array.from(wa.values())}function ke(t,e,n){var r;let i=(r=Kb[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_i.warn(a.join(" "));return}Qt(new Lt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Zb="firebase-heartbeat-database",eA=1,Ea="firebase-heartbeat-store";let gd=null;function tT(){return gd||(gd=ZC(Zb,eA,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ea)}}}).catch(t=>{throw wi.create("idb-open",{originalErrorMessage:t.message})})),gd}async function tA(t){var e;try{return(await tT()).transaction(Ea).objectStore(Ea).get(nT(t))}catch(n){if(n instanceof Xt)_i.warn(n.message);else{const r=wi.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});_i.warn(r.message)}}}async function f_(t,e){var n;try{const i=(await tT()).transaction(Ea,"readwrite");return await i.objectStore(Ea).put(e,nT(t)),i.done}catch(r){if(r instanceof Xt)_i.warn(r.message);else{const i=wi.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});_i.warn(i.message)}}}function nT(t){return`${t.name}!${t.options.appId}`}/**
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
 */const nA=1024,rA=30*24*60*60*1e3;class iA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new oA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=p_();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=rA}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=p_(),{heartbeatsToSend:n,unsentEntries:r}=sA(this._heartbeatsCache.heartbeats),i=zC(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function p_(){return new Date().toISOString().substring(0,10)}function sA(t,e=nA){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),m_(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),m_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class oA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return GC()?Vx().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await tA(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return f_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return f_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function m_(t){return zC(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function aA(t){Qt(new Lt("platform-logger",e=>new wb(e),"PRIVATE")),Qt(new Lt("heartbeat",e=>new iA(e),"PRIVATE")),ke(Gf,d_,t),ke(Gf,d_,"esm2017"),ke("fire-js","")}aA("");function zm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function rT(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const lA=rT,iT=new Li("auth","Firebase",rT());/**
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
 */const g_=new Za("@firebase/auth");function gu(t,...e){g_.logLevel<=J.ERROR&&g_.error(`Auth (${Br}): ${t}`,...e)}/**
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
 */function Tn(t,...e){throw Hm(t,...e)}function _n(t,...e){return Hm(t,...e)}function sT(t,e,n){const r=Object.assign(Object.assign({},lA()),{[e]:n});return new Li("auth","Firebase",r).create(e,{appName:t.name})}function uA(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Tn(t,"argument-error"),sT(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Hm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return iT.create(t,...e)}function B(t,e,...n){if(!t)throw Hm(e,...n)}function Dn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw gu(e),new Error(e)}function Kn(t,e){t||Dn(e)}/**
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
 */const y_=new Map;function Mn(t){Kn(t instanceof Function,"Expected a class definition");let e=y_.get(t);return e?(Kn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,y_.set(t,e),e)}/**
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
 */function cA(t,e){const n=to(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Zu(s,e!=null?e:{}))return i;Tn(i,"already-initialized")}return n.initialize({options:e})}function hA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Mn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Yf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function dA(){return v_()==="http:"||v_()==="https:"}function v_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function fA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(dA()||WC()||"connection"in navigator)?navigator.onLine:!0}function pA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class el{constructor(e,n){this.shortDelay=e,this.longDelay=n,Kn(n>e,"Short delay should be less than long delay!"),this.isMobile=Jc()||Vm()}get(){return fA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Wm(t,e){Kn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class oT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const mA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const gA=new el(3e4,6e4);function yA(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function eh(t,e,n,r,i={}){return aT(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=eo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),oT.fetch()(lT(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function aT(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},mA),e);try{const i=new _A(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ql(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ql(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ql(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ql(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw sT(t,c,u);Tn(t,c)}}catch(i){if(i instanceof Xt)throw i;Tn(t,"network-request-failed")}}async function vA(t,e,n,r,i={}){const s=await eh(t,e,n,r,i);return"mfaPendingCredential"in s&&Tn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function lT(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Wm(t.config,i):`${t.config.apiScheme}://${i}`}class _A{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(_n(this.auth,"network-request-failed")),gA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ql(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=_n(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function wA(t,e){return eh(t,"POST","/v1/accounts:delete",e)}async function EA(t,e){return eh(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Wo(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function CA(t,e=!1){const n=ze(t),r=await n.getIdToken(e),i=qm(r);B(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Wo(yd(i.auth_time)),issuedAtTime:Wo(yd(i.iat)),expirationTime:Wo(yd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function yd(t){return Number(t)*1e3}function qm(t){var e;const[n,r,i]=t.split(".");if(n===void 0||r===void 0||i===void 0)return gu("JWT malformed, contained fewer than 3 sections"),null;try{const s=Hf(r);return s?JSON.parse(s):(gu("Failed to decode base64 JWT payload"),null)}catch(s){return gu("Caught error parsing JWT payload as JSON",(e=s)===null||e===void 0?void 0:e.toString()),null}}function TA(t){const e=qm(t);return B(e,"internal-error"),B(typeof e.exp<"u","internal-error"),B(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ca(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Xt&&SA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function SA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class IA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class uT{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Wo(this.lastLoginAt),this.creationTime=Wo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ec(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ca(t,EA(n,{idToken:r}));B(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?RA(s.providerUserInfo):[],a=NA(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new uT(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function kA(t){const e=ze(t);await ec(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function NA(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function RA(t){return t.map(e=>{var{providerId:n}=e,r=zm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function xA(t,e){const n=await aT(t,{},async()=>{const r=eo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=lT(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",oT.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Ta{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){B(e.idToken,"internal-error"),B(typeof e.idToken<"u","internal-error"),B(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):TA(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return B(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await xA(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ta;return r&&(B(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(B(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(B(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ta,this.toJSON())}_performRefresh(){return Dn("not implemented")}}/**
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
 */function ar(t,e){B(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ui{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=zm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new IA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new uT(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ca(this,this.stsTokenManager.getToken(this.auth,e));return B(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return CA(this,e)}reload(){return kA(this)}_assign(e){this!==e&&(B(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new ui(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ec(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ca(this,wA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:y,emailVerified:_,isAnonymous:I,providerData:N,stsTokenManager:R}=n;B(y&&R,e,"internal-error");const P=Ta.fromJSON(this.name,R);B(typeof y=="string",e,"internal-error"),ar(h,e.name),ar(d,e.name),B(typeof _=="boolean",e,"internal-error"),B(typeof I=="boolean",e,"internal-error"),ar(f,e.name),ar(g,e.name),ar(v,e.name),ar(w,e.name),ar(m,e.name),ar(p,e.name);const te=new ui({uid:y,auth:e,email:d,emailVerified:_,displayName:h,isAnonymous:I,photoURL:g,phoneNumber:f,tenantId:v,stsTokenManager:P,createdAt:m,lastLoginAt:p});return N&&Array.isArray(N)&&(te.providerData=N.map(H=>Object.assign({},H))),w&&(te._redirectEventId=w),te}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ta;i.updateFromServerResponse(n);const s=new ui({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ec(s),s}}/**
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
 */class cT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}cT.type="NONE";const __=cT;/**
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
 */function yu(t,e,n){return`firebase:${t}:${e}:${n}`}class vs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=yu(this.userKey,i.apiKey,s),this.fullPersistenceKey=yu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ui._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new vs(Mn(__),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Mn(__);const o=yu(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=ui._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new vs(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new vs(s,e,r))}}/**
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
 */function w_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(fT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(hT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(mT(e))return"Blackberry";if(gT(e))return"Webos";if(Km(e))return"Safari";if((e.includes("chrome/")||dT(e))&&!e.includes("edge/"))return"Chrome";if(pT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function hT(t=je()){return/firefox\//i.test(t)}function Km(t=je()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function dT(t=je()){return/crios\//i.test(t)}function fT(t=je()){return/iemobile/i.test(t)}function pT(t=je()){return/android/i.test(t)}function mT(t=je()){return/blackberry/i.test(t)}function gT(t=je()){return/webos/i.test(t)}function th(t=je()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function bA(t=je()){var e;return th(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function AA(){return qC()&&document.documentMode===10}function yT(t=je()){return th(t)||pT(t)||gT(t)||mT(t)||/windows phone/i.test(t)||fT(t)}function PA(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function vT(t,e=[]){let n;switch(t){case"Browser":n=w_(je());break;case"Worker":n=`${w_(je())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Br}/${r}`}/**
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
 */class OA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const i of this.queue)await i(e),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const s of r)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
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
 */class DA{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new E_(this),this.idTokenSubscription=new E_(this),this.beforeStateQueue=new OA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=iT,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Mn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await vs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await ec(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=pA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ze(e):null;return n&&B(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&B(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Mn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Li("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Mn(e)||this._popupRedirectResolver;B(n,this,"argument-error"),this.redirectPersistenceManager=await vs.create(this,[Mn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return B(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=vT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Gm(t){return ze(t)}class E_{constructor(e){this.auth=e,this.observer=null,this.addObserver=Kx(n=>this.observer=n)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class _T{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Dn("not implemented")}_getIdTokenResponse(e){return Dn("not implemented")}_linkToIdToken(e,n){return Dn("not implemented")}_getReauthenticationResolver(e){return Dn("not implemented")}}/**
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
 */async function _s(t,e){return vA(t,"POST","/v1/accounts:signInWithIdp",yA(t,e))}/**
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
 */const MA="http://localhost";class Ei extends _T{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ei(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Tn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=zm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ei(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return _s(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,_s(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,_s(e,n)}buildRequest(){const e={requestUri:MA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=eo(n)}return e}}/**
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
 */class Qm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class tl extends Qm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class fr extends tl{constructor(){super("facebook.com")}static credential(e){return Ei._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fr.credential(e.oauthAccessToken)}catch{return null}}}fr.FACEBOOK_SIGN_IN_METHOD="facebook.com";fr.PROVIDER_ID="facebook.com";/**
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
 */class bn extends tl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ei._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return bn.credential(n,r)}catch{return null}}}bn.GOOGLE_SIGN_IN_METHOD="google.com";bn.PROVIDER_ID="google.com";/**
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
 */class pr extends tl{constructor(){super("github.com")}static credential(e){return Ei._fromParams({providerId:pr.PROVIDER_ID,signInMethod:pr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pr.credentialFromTaggedObject(e)}static credentialFromError(e){return pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pr.credential(e.oauthAccessToken)}catch{return null}}}pr.GITHUB_SIGN_IN_METHOD="github.com";pr.PROVIDER_ID="github.com";/**
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
 */class mr extends tl{constructor(){super("twitter.com")}static credential(e,n){return Ei._fromParams({providerId:mr.PROVIDER_ID,signInMethod:mr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return mr.credentialFromTaggedObject(e)}static credentialFromError(e){return mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return mr.credential(n,r)}catch{return null}}}mr.TWITTER_SIGN_IN_METHOD="twitter.com";mr.PROVIDER_ID="twitter.com";/**
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
 */class Ms{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await ui._fromIdTokenResponse(e,r,i),o=C_(r);return new Ms({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=C_(r);return new Ms({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function C_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class tc extends Xt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,tc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new tc(e,n,r,i)}}function wT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?tc._fromErrorAndOperation(t,s,e,r):s})}async function LA(t,e,n=!1){const r=await Ca(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ms._forOperation(t,"link",r)}/**
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
 */async function FA(t,e,n=!1){var r;const{auth:i}=t,s="reauthenticate";try{const o=await Ca(t,wT(i,s,e,t),n);B(o.idToken,i,"internal-error");const a=qm(o.idToken);B(a,i,"internal-error");const{sub:l}=a;return B(t.uid===l,i,"user-mismatch"),Ms._forOperation(t,s,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&Tn(i,"user-mismatch"),o}}/**
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
 */async function $A(t,e,n=!1){const r="signIn",i=await wT(t,r,e),s=await Ms._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function UA(t,e,n,r){return ze(t).onIdTokenChanged(e,n,r)}function VA(t){ze(t).useDeviceLanguage()}function BA(t){return ze(t).signOut()}const nc="__sak";/**
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
 */class ET{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(nc,"1"),this.storage.removeItem(nc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function jA(){const t=je();return Km(t)||th(t)}const zA=1e3,HA=10;class CT extends ET{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=jA()&&PA(),this.fallbackToPolling=yT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);AA()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,HA):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},zA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}CT.type="LOCAL";const WA=CT;/**
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
 */class TT extends ET{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}TT.type="SESSION";const ST=TT;/**
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
 */function qA(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class nh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new nh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await qA(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}nh.receivers=[];/**
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
 */function Ym(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class KA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Ym("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function wn(){return window}function GA(t){wn().location.href=t}/**
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
 */function IT(){return typeof wn().WorkerGlobalScope<"u"&&typeof wn().importScripts=="function"}async function QA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function YA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function XA(){return IT()?self:null}/**
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
 */const kT="firebaseLocalStorageDb",JA=1,rc="firebaseLocalStorage",NT="fbase_key";class nl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function rh(t,e){return t.transaction([rc],e?"readwrite":"readonly").objectStore(rc)}function ZA(){const t=indexedDB.deleteDatabase(kT);return new nl(t).toPromise()}function Xf(){const t=indexedDB.open(kT,JA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(rc,{keyPath:NT})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(rc)?e(r):(r.close(),await ZA(),e(await Xf()))})})}async function T_(t,e,n){const r=rh(t,!0).put({[NT]:e,value:n});return new nl(r).toPromise()}async function eP(t,e){const n=rh(t,!1).get(e),r=await new nl(n).toPromise();return r===void 0?null:r.value}function S_(t,e){const n=rh(t,!0).delete(e);return new nl(n).toPromise()}const tP=800,nP=3;class RT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Xf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>nP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return IT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=nh._getInstance(XA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await QA(),!this.activeServiceWorker)return;this.sender=new KA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||YA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Xf();return await T_(e,nc,"1"),await S_(e,nc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>T_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>eP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>S_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=rh(i,!1).getAll();return new nl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),tP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}RT.type="LOCAL";const rP=RT;/**
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
 */function iP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function sP(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=_n("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",iP().appendChild(r)})}function oP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new el(3e4,6e4);/**
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
 */function xT(t,e){return e?Mn(e):(B(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Xm extends _T{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return _s(e,this._buildIdpRequest())}_linkToIdToken(e,n){return _s(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return _s(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function aP(t){return $A(t.auth,new Xm(t),t.bypassAuthState)}function lP(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),FA(n,new Xm(t),t.bypassAuthState)}async function uP(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),LA(n,new Xm(t),t.bypassAuthState)}/**
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
 */class bT{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return aP;case"linkViaPopup":case"linkViaRedirect":return uP;case"reauthViaPopup":case"reauthViaRedirect":return lP;default:Tn(this.auth,"internal-error")}}resolve(e){Kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const cP=new el(2e3,1e4);async function hP(t,e,n){const r=Gm(t);uA(t,e,Qm);const i=xT(r,n);return new ti(r,"signInViaPopup",e,i).executeNotNull()}class ti extends bT{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ti.currentPopupAction&&ti.currentPopupAction.cancel(),ti.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return B(e,this.auth,"internal-error"),e}async onExecution(){Kn(this.filter.length===1,"Popup operations only handle one event");const e=Ym();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(_n(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(_n(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ti.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_n(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,cP.get())};e()}}ti.currentPopupAction=null;/**
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
 */const dP="pendingRedirect",vu=new Map;class fP extends bT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=vu.get(this.auth._key());if(!e){try{const r=await pP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}vu.set(this.auth._key(),e)}return this.bypassAuthState||vu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function pP(t,e){const n=yP(e),r=gP(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function mP(t,e){vu.set(t._key(),e)}function gP(t){return Mn(t._redirectPersistence)}function yP(t){return yu(dP,t.config.apiKey,t.name)}async function vP(t,e,n=!1){const r=Gm(t),i=xT(r,e),o=await new fP(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const _P=10*60*1e3;class wP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!EP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!AT(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(_n(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=_P&&this.cachedEventUids.clear(),this.cachedEventUids.has(I_(e))}saveEventToCache(e){this.cachedEventUids.add(I_(e)),this.lastProcessedEventTime=Date.now()}}function I_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function AT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function EP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return AT(t);default:return!1}}/**
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
 */async function CP(t,e={}){return eh(t,"GET","/v1/projects",e)}/**
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
 */const TP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,SP=/^https?/;async function IP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await CP(t);for(const n of e)try{if(kP(n))return}catch{}Tn(t,"unauthorized-domain")}function kP(t){const e=Yf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!SP.test(n))return!1;if(TP.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const NP=new el(3e4,6e4);function k_(){const t=wn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function RP(t){return new Promise((e,n)=>{var r,i,s;function o(){k_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{k_(),n(_n(t,"network-request-failed"))},timeout:NP.get()})}if(!((i=(r=wn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=wn().gapi)===null||s===void 0)&&s.load)o();else{const a=oP("iframefcb");return wn()[a]=()=>{gapi.load?o():n(_n(t,"network-request-failed"))},sP(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw _u=null,e})}let _u=null;function xP(t){return _u=_u||RP(t),_u}/**
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
 */const bP=new el(5e3,15e3),AP="__/auth/iframe",PP="emulator/auth/iframe",OP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},DP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function MP(t){const e=t.config;B(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Wm(e,PP):`https://${t.config.authDomain}/${AP}`,r={apiKey:e.apiKey,appName:t.name,v:Br},i=DP.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${eo(r).slice(1)}`}async function LP(t){const e=await xP(t),n=wn().gapi;return B(n,t,"internal-error"),e.open({where:document.body,url:MP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:OP,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=_n(t,"network-request-failed"),a=wn().setTimeout(()=>{s(o)},bP.get());function l(){wn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const FP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$P=500,UP=600,VP="_blank",BP="http://localhost";class N_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function jP(t,e,n,r=$P,i=UP){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},FP),{width:r.toString(),height:i.toString(),top:s,left:o}),u=je().toLowerCase();n&&(a=dT(u)?VP:n),hT(u)&&(e=e||BP,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[f,g])=>`${d}${f}=${g},`,"");if(bA(u)&&a!=="_self")return zP(e||"",a),new N_(null);const h=window.open(e||"",a,c);B(h,t,"popup-blocked");try{h.focus()}catch{}return new N_(h)}function zP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const HP="__/auth/handler",WP="emulator/auth/handler";function R_(t,e,n,r,i,s){B(t.config.authDomain,t,"auth-domain-config-required"),B(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Br,eventId:i};if(e instanceof Qm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Wf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof tl){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${qP(t)}?${eo(a).slice(1)}`}function qP({config:t}){return t.emulator?Wm(t,WP):`https://${t.authDomain}/${HP}`}/**
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
 */const vd="webStorageSupport";class KP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ST,this._completeRedirectFn=vP,this._overrideRedirectResult=mP}async _openPopup(e,n,r,i){var s;Kn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=R_(e,n,r,Yf(),i);return jP(e,o,Ym())}async _openRedirect(e,n,r,i){return await this._originValidation(e),GA(R_(e,n,r,Yf(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Kn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await LP(e),r=new wP(e);return n.register("authEvent",i=>(B(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(vd,{type:vd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[vd];o!==void 0&&n(!!o),Tn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=IP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return yT()||Km()||th()}}const GP=KP;var x_="@firebase/auth",b_="0.20.6";/**
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
 */class QP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function YP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function XP(t){Qt(new Lt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{B(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),B(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:vT(t)},c=new DA(a,l,u);return hA(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Qt(new Lt("auth-internal",e=>{const n=Gm(e.getProvider("auth").getImmediate());return(r=>new QP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ke(x_,b_,YP(t)),ke(x_,b_,"esm2017")}/**
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
 */function JP(t=jm()){const e=to(t,"auth");return e.isInitialized()?e.getImmediate():cA(t,{popupRedirectResolver:GP,persistence:[rP,WA,ST]})}XP("Browser");const A_="@firebase/database",P_="0.13.6";/**
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
 */let PT="";function ZP(t){PT=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eO{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ve(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:_a(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tO{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Zn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OT=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new eO(e)}}catch{}return new tO},ni=OT("localStorage"),Jf=OT("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ws=new Za("@firebase/database"),nO=function(){let t=1;return function(){return t++}}(),DT=function(t){const e=Yx(t),n=new qx;n.update(e);const r=n.digest();return $m.encodeByteArray(r)},rl=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=rl.apply(null,r):typeof r=="object"?e+=Ve(r):e+=r,e+=" "}return e};let ci=null,O_=!0;const rO=function(t,e){k(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(ws.logLevel=J.VERBOSE,ci=ws.log.bind(ws),e&&Jf.set("logging_enabled",!0)):typeof t=="function"?ci=t:(ci=null,Jf.remove("logging_enabled"))},it=function(...t){if(O_===!0&&(O_=!1,ci===null&&Jf.get("logging_enabled")===!0&&rO(!0)),ci){const e=rl.apply(null,t);ci(e)}},il=function(t){return function(...e){it(t,...e)}},Zf=function(...t){const e="FIREBASE INTERNAL ERROR: "+rl(...t);ws.error(e)},Ci=function(...t){const e=`FIREBASE FATAL ERROR: ${rl(...t)}`;throw ws.error(e),new Error(e)},Dt=function(...t){const e="FIREBASE WARNING: "+rl(...t);ws.warn(e)},iO=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Dt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},MT=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},sO=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ls="[MIN_NAME]",Ti="[MAX_NAME]",no=function(t,e){if(t===e)return 0;if(t===Ls||e===Ti)return-1;if(e===Ls||t===Ti)return 1;{const n=D_(t),r=D_(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},oO=function(t,e){return t===e?0:t<e?-1:1},Co=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ve(e))},Jm=function(t){if(typeof t!="object"||t===null)return Ve(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Ve(e[r]),n+=":",n+=Jm(t[e[r]]);return n+="}",n},LT=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function xt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const FT=function(t){k(!MT(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(c.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},aO=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},lO=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function uO(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const cO=new RegExp("^-?(0*)\\d{1,10}$"),hO=-2147483648,dO=2147483647,D_=function(t){if(cO.test(t)){const e=Number(t);if(e>=hO&&e<=dO)return e}return null},sl=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Dt("Exception was thrown by user callback.",n),e},Math.floor(0))}},fO=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},qo=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class pO{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Dt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mO{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(it("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Dt(e)}}class ep{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ep.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zm="5",$T="v",UT="s",VT="r",BT="f",jT=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,zT="ls",HT="p",tp="ac",WT="websocket",qT="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gO{constructor(e,n,r,i,s=!1,o="",a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ni.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ni.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function yO(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function KT(t,e,n){k(typeof e=="string","typeof type must == string"),k(typeof n=="object","typeof params must == object");let r;if(e===WT)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===qT)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);yO(t)&&(n.ns=t.namespace);const i=[];return xt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vO{constructor(){this.counters_={}}incrementCounter(e,n=1){Zn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Lx(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _d={},wd={};function eg(t){const e=t.toString();return _d[e]||(_d[e]=new vO),_d[e]}function _O(t,e){const n=t.toString();return wd[n]||(wd[n]=e()),wd[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wO{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&sl(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M_="start",EO="close",CO="pLPCommand",TO="pRTLPCB",GT="id",QT="pw",YT="ser",SO="cb",IO="seg",kO="ts",NO="d",RO="dframe",XT=1870,JT=30,xO=XT-JT,bO=25e3,AO=3e4;class ls{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=il(e),this.stats_=eg(n),this.urlFn=l=>(this.appCheckToken&&(l[tp]=this.appCheckToken),KT(n,qT,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new wO(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(AO)),sO(()=>{if(this.isClosed_)return;this.scriptTagHolder=new tg((...s)=>{const[o,a,l,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===M_)this.id=a,this.password=l;else if(o===EO)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[M_]="t",r[YT]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[SO]=this.scriptTagHolder.uniqueCallbackIdentifier),r[$T]=Zm,this.transportSessionId&&(r[UT]=this.transportSessionId),this.lastSessionId&&(r[zT]=this.lastSessionId),this.applicationId&&(r[HT]=this.applicationId),this.appCheckToken&&(r[tp]=this.appCheckToken),typeof location<"u"&&location.hostname&&jT.test(location.hostname)&&(r[VT]=BT);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ls.forceAllow_=!0}static forceDisallow(){ls.forceDisallow_=!0}static isAvailable(){return ls.forceAllow_?!0:!ls.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!aO()&&!lO()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ve(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=jC(n),i=LT(r,xO);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[RO]="t",r[GT]=e,r[QT]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ve(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class tg{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=nO(),window[CO+this.uniqueCallbackIdentifier]=e,window[TO+this.uniqueCallbackIdentifier]=n,this.myIFrame=tg.createIFrame_();let s="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const a=document.domain;s='<script>document.domain="'+a+'";<\/script>'}const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){it("frame writing exception"),a.stack&&it(a.stack),it(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||it("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[GT]=this.myID,e[QT]=this.myPW,e[YT]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+JT+r.length<=XT;){const o=this.pendingSegs.shift();r=r+"&"+IO+i+"="+o.seg+"&"+kO+i+"="+o.ts+"&"+NO+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(bO)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{it("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PO=16384,OO=45e3;let ic=null;typeof MozWebSocket<"u"?ic=MozWebSocket:typeof WebSocket<"u"&&(ic=WebSocket);class sn{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=il(this.connId),this.stats_=eg(n),this.connURL=sn.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[$T]=Zm,typeof location<"u"&&location.hostname&&jT.test(location.hostname)&&(o[VT]=BT),n&&(o[UT]=n),r&&(o[zT]=r),i&&(o[tp]=i),s&&(o[HT]=s),KT(e,WT,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ni.set("previous_websocket_failure",!0);try{let r;KC(),this.mySock=new ic(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){sn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&ic!==null&&!sn.forceDisallow_}static previouslyFailed(){return ni.isInMemoryStorage||ni.get("previous_websocket_failure")===!0}markConnectionHealthy(){ni.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=_a(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(k(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Ve(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=LT(n,PO);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(OO))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}sn.responsesRequiredToBeHealthy=2;sn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ls,sn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=sn&&sn.isAvailable();let r=n&&!sn.previouslyFailed();if(e.webSocketOnly&&(n||Dt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[sn];else{const i=this.transports_=[];for(const s of Sa.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Sa.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Sa.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DO=6e4,MO=5e3,LO=10*1024,FO=100*1024,Ed="t",L_="d",$O="s",F_="r",UO="e",$_="o",U_="a",V_="n",B_="p",VO="h";class BO{constructor(e,n,r,i,s,o,a,l,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=il("c:"+this.id+":"),this.transportManager_=new Sa(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=qo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>FO?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>LO?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ed in e){const n=e[Ed];n===U_?this.upgradeIfSecondaryHealthy_():n===F_?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===$_&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Co("t",e),r=Co("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:B_,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:U_,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:V_,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Co("t",e),r=Co("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Co(Ed,e);if(L_ in e){const r=e[L_];if(n===VO)this.onHandshake_(r);else if(n===V_){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===$O?this.onConnectionShutdown_(r):n===F_?this.onReset_(r):n===UO?Zf("Server Error: "+r):n===$_?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Zf("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Zm!==r&&Dt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),qo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(DO))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):qo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(MO))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:B_,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ni.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(e){this.allowedEvents_=e,this.listeners_={},k(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){k(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc extends eS{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Jc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new sc}getInitialEvent(e){return k(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j_=32,z_=768;class ie{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ee(){return new ie("")}function K(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Pr(t){return t.pieces_.length-t.pieceNum_}function oe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ie(t.pieces_,e)}function tS(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function jO(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function nS(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function rS(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ie(e,0)}function be(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof ie)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new ie(n,0)}function G(t){return t.pieceNum_>=t.pieces_.length}function Tt(t,e){const n=K(t),r=K(e);if(n===null)return e;if(n===r)return Tt(oe(t),oe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function ng(t,e){if(Pr(t)!==Pr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function on(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Pr(t)>Pr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class zO{constructor(e,n){this.errorPrefix_=n,this.parts_=nS(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Zc(this.parts_[r]);iS(this)}}function HO(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Zc(e),iS(t)}function WO(t){const e=t.parts_.pop();t.byteLength_-=Zc(e),t.parts_.length>0&&(t.byteLength_-=1)}function iS(t){if(t.byteLength_>z_)throw new Error(t.errorPrefix_+"has a key path longer than "+z_+" bytes ("+t.byteLength_+").");if(t.parts_.length>j_)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+j_+") or object contains a cycle "+Qr(t))}function Qr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg extends eS{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new rg}getInitialEvent(e){return k(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const To=1e3,qO=60*5*1e3,H_=30*1e3,KO=1.3,GO=3e4,QO="server_kill",W_=3;class Vn extends ZT{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Vn.nextPersistentConnectionId_++,this.log_=il("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=To,this.maxReconnectDelay_=qO,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!KC())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");rg.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&sc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Ve(s)),k(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Um,r={p:e._path.toString(),q:e._queryObject},i={action:"g",request:r,onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),k(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),k(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;Vn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Zn(e,"w")){const r=Ds(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Dt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Wx(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=H_)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Hx(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),k(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ve(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Zf("Unrecognized action received from server: "+Ve(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){k(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=To,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=To,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>GO&&(this.reconnectDelay_=To),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*KO)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Vn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(h){k(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?it("getToken() completed but was canceled"):(it("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new BO(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,f=>{Dt(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(QO)},s))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Dt(h),l())}}}interrupt(e){it("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){it("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Wf(this.interruptReasons_)&&(this.reconnectDelay_=To,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Jm(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new ie(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){it("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=W_&&(this.reconnectDelay_=H_,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){it("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=W_&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+PT.replace(/\./g,"-")]=1,Jc()?e["framework.cordova"]=1:Vm()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=sc.getInstance().currentlyOnline();return Wf(this.interruptReasons_)&&e}}Vn.nextPersistentConnectionId_=0;Vn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new W(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new W(Ls,e),i=new W(Ls,n);return this.compare(r,i)!==0}minPost(){return W.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kl;class sS extends ih{static get __EMPTY_NODE(){return Kl}static set __EMPTY_NODE(e){Kl=e}compare(e,n){return no(e.name,n.name)}isDefinedOn(e){throw Zs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return W.MIN}maxPost(){return new W(Ti,Kl)}makePost(e,n){return k(typeof e=="string","KeyIndex indexValue must always be a string."),new W(e,Kl)}toString(){return".key"}}const Es=new sS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ue{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:Ue.RED,this.left=i!=null?i:St.EMPTY_NODE,this.right=s!=null?s:St.EMPTY_NODE}copy(e,n,r,i,s){return new Ue(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return St.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return St.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ue.RED=!0;Ue.BLACK=!1;class YO{copy(e,n,r,i,s){return this}insert(e,n,r){return new Ue(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class St{constructor(e,n=St.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new St(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ue.BLACK,null,null))}remove(e){return new St(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ue.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Gl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Gl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Gl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Gl(this.root_,null,this.comparator_,!0,e)}}St.EMPTY_NODE=new YO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XO(t,e){return no(t.name,e.name)}function ig(t,e){return no(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let np;function JO(t){np=t}const oS=function(t){return typeof t=="number"?"number:"+FT(t):"string:"+t},aS=function(t){if(t.isLeafNode()){const e=t.val();k(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Zn(e,".sv"),"Priority must be a string or number.")}else k(t===np||t.isEmpty(),"priority of unexpected type.");k(t===np||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let q_;class Le{constructor(e,n=Le.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,k(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),aS(this.priorityNode_)}static set __childrenNodeConstructor(e){q_=e}static get __childrenNodeConstructor(){return q_}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Le(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Le.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return G(e)?this:K(e)===".priority"?this.priorityNode_:Le.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Le.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=K(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(k(r!==".priority"||Pr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Le.__childrenNodeConstructor.EMPTY_NODE.updateChild(oe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+oS(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=FT(this.value_):e+=this.value_,this.lazyHash_=DT(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Le.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Le.__childrenNodeConstructor?-1:(k(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Le.VALUE_TYPE_ORDER.indexOf(n),s=Le.VALUE_TYPE_ORDER.indexOf(r);return k(i>=0,"Unknown leaf type: "+n),k(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Le.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lS,uS;function ZO(t){lS=t}function eD(t){uS=t}class tD extends ih{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?no(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return W.MIN}maxPost(){return new W(Ti,new Le("[PRIORITY-POST]",uS))}makePost(e,n){const r=lS(e);return new W(n,new Le("[PRIORITY-POST]",r))}toString(){return".priority"}}const Ee=new tD;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nD=Math.log(2);class rD{constructor(e){const n=s=>parseInt(Math.log(s)/nD,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const oc=function(t,e,n,r){t.sort(e);const i=function(l,u){const c=u-l;let h,d;if(c===0)return null;if(c===1)return h=t[l],d=n?n(h):h,new Ue(d,h.node,Ue.BLACK,null,null);{const f=parseInt(c/2,10)+l,g=i(l,f),v=i(f+1,u);return h=t[f],d=n?n(h):h,new Ue(d,h.node,Ue.BLACK,g,v)}},s=function(l){let u=null,c=null,h=t.length;const d=function(g,v){const w=h-g,m=h;h-=g;const p=i(w+1,m),y=t[w],_=n?n(y):y;f(new Ue(_,y.node,v,null,p))},f=function(g){u?(u.left=g,u=g):(c=g,u=g)};for(let g=0;g<l.count;++g){const v=l.nextBitIsOne(),w=Math.pow(2,l.count-(g+1));v?d(w,Ue.BLACK):(d(w,Ue.BLACK),d(w,Ue.RED))}return c},o=new rD(t.length),a=s(o);return new St(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cd;const Hi={};class Ln{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return k(Hi&&Ee,"ChildrenNode.ts has not been loaded"),Cd=Cd||new Ln({".priority":Hi},{".priority":Ee}),Cd}get(e){const n=Ds(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof St?n:null}hasIndex(e){return Zn(this.indexSet_,e.toString())}addIndex(e,n){k(e!==Es,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(W.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=oc(r,e.getCompare()):a=Hi;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const c=Object.assign({},this.indexes_);return c[l]=a,new Ln(c,u)}addToIndexes(e,n){const r=Ju(this.indexes_,(i,s)=>{const o=Ds(this.indexSet_,s);if(k(o,"Missing index implementation for "+s),i===Hi)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(W.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),oc(a,o.getCompare())}else return Hi;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new W(e.name,a))),l.insert(e,e.node)}});return new Ln(r,this.indexSet_)}removeFromIndexes(e,n){const r=Ju(this.indexes_,i=>{if(i===Hi)return i;{const s=n.get(e.name);return s?i.remove(new W(e.name,s)):i}});return new Ln(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let So;class F{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&aS(this.priorityNode_),this.children_.isEmpty()&&k(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return So||(So=new F(new St(ig),null,Ln.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||So}updatePriority(e){return this.children_.isEmpty()?this:new F(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?So:n}}getChild(e){const n=K(e);return n===null?this:this.getImmediateChild(n).getChild(oe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(k(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new W(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?So:this.priorityNode_;return new F(i,o,s)}}updateChild(e,n){const r=K(e);if(r===null)return n;{k(K(e)!==".priority"||Pr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(oe(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Ee,(o,a)=>{n[o]=a.val(e),r++,s&&F.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+oS(this.getPriority().val())+":"),this.forEachChild(Ee,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":DT(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new W(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new W(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new W(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,W.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,W.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ol?-1:0}withIndex(e){if(e===Es||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new F(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Es||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Ee),i=n.getIterator(Ee);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Es?null:this.indexMap_.get(e.toString())}}F.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class iD extends F{constructor(){super(new St(ig),F.EMPTY_NODE,Ln.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return F.EMPTY_NODE}isEmpty(){return!1}}const ol=new iD;Object.defineProperties(W,{MIN:{value:new W(Ls,F.EMPTY_NODE)},MAX:{value:new W(Ti,ol)}});sS.__EMPTY_NODE=F.EMPTY_NODE;Le.__childrenNodeConstructor=F;JO(ol);eD(ol);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sD=!0;function st(t,e=null){if(t===null)return F.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),k(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Le(n,st(e))}if(!(t instanceof Array)&&sD){const n=[];let r=!1;if(xt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=st(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new W(o,l)))}}),n.length===0)return F.EMPTY_NODE;const s=oc(n,XO,o=>o.name,ig);if(r){const o=oc(n,Ee.getCompare());return new F(s,st(e),new Ln({".priority":o},{".priority":Ee}))}else return new F(s,st(e),Ln.Default)}else{let n=F.EMPTY_NODE;return xt(t,(r,i)=>{if(Zn(t,r)&&r.substring(0,1)!=="."){const s=st(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(st(e))}}ZO(st);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oD extends ih{constructor(e){super(),this.indexPath_=e,k(!G(e)&&K(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?no(e.name,n.name):s}makePost(e,n){const r=st(e),i=F.EMPTY_NODE.updateChild(this.indexPath_,r);return new W(n,i)}maxPost(){const e=F.EMPTY_NODE.updateChild(this.indexPath_,ol);return new W(Ti,e)}toString(){return nS(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aD extends ih{compare(e,n){const r=e.node.compareTo(n.node);return r===0?no(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return W.MIN}maxPost(){return W.MAX}makePost(e,n){const r=st(e);return new W(n,r)}toString(){return".value"}}const lD=new aD;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cS(t){return{type:"value",snapshotNode:t}}function Fs(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ia(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ka(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function uD(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){k(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Ia(n,a)):k(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Fs(n,r)):o.trackChildChange(ka(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Ee,(i,s)=>{n.hasChild(i)||r.trackChildChange(Ia(i,s))}),n.isLeafNode()||n.forEachChild(Ee,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(ka(i,s,o))}else r.trackChildChange(Fs(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?F.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e){this.indexedFilter_=new sg(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Na.getStartPost_(e),this.endPost_=Na.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,r,i,s,o){return this.matches(new W(n,r))||(r=F.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=F.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(F.EMPTY_NODE);const s=this;return n.forEachChild(Ee,(o,a)=>{s.matches(new W(o,a))||(i=i.updateImmediateChild(o,F.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cD{constructor(e){this.rangedFilter_=new Na(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new W(n,r))||(r=F.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=F.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=F.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();let l;if(this.reverse_?l=this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:l=this.index_.compare(a,this.rangedFilter_.getEndPost())<=0,l)i=i.updateImmediateChild(a.name,a.node),o++;else break}}else{i=n.withIndex(this.index_),i=i.updatePriority(F.EMPTY_NODE);let s,o,a,l;if(this.reverse_){l=i.getReverseIterator(this.index_),s=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const h=this.index_.getCompare();a=(d,f)=>h(f,d)}else l=i.getIterator(this.index_),s=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),a=this.index_.getCompare();let u=0,c=!1;for(;l.hasNext();){const h=l.getNext();!c&&a(s,h)<=0&&(c=!0),c&&u<this.limit_&&a(h,o)<=0?u++:i=i.updateImmediateChild(h.name,F.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,f)=>h(f,d)}else o=this.index_.getCompare();const a=e;k(a.numChildren()===this.limit_,"");const l=new W(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),c=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,u,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const f=d==null?1:o(d,l);if(c&&!r.isEmpty()&&f>=0)return s!=null&&s.trackChildChange(ka(n,r,h)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Ia(n,h));const v=a.updateImmediateChild(n,F.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(s!=null&&s.trackChildChange(Fs(d.name,d.node)),v.updateImmediateChild(d.name,d.node)):v}}else return r.isEmpty()?e:c&&o(u,l)>=0?(s!=null&&(s.trackChildChange(Ia(u.name,u.node)),s.trackChildChange(Fs(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,F.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ee}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return k(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return k(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ls}hasEnd(){return this.endSet_}getIndexEndValue(){return k(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return k(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ti}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return k(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ee}copy(){const e=new og;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function hD(t){return t.loadsAllData()?new sg(t.getIndex()):t.hasLimit()?new cD(t):new Na(t)}function K_(t){const e={};if(t.isDefault())return e;let n;return t.index_===Ee?n="$priority":t.index_===lD?n="$value":t.index_===Es?n="$key":(k(t.index_ instanceof oD,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ve(n),t.startSet_&&(e.startAt=Ve(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+Ve(t.indexStartName_))),t.endSet_&&(e.endAt=Ve(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+Ve(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function G_(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ee&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac extends ZT{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=il("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(k(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=ac.getListenId_(e,r),a={};this.listens_[o]=a;const l=K_(e._queryParams);this.restRequest_(s+".json",l,(u,c)=>{let h=c;if(u===404&&(h=null,u=null),u===null&&this.onDataUpdate_(s,h,!1,r),Ds(this.listens_,o)===a){let d;u?u===401?d="permission_denied":d="rest_error:"+u:d="ok",i(d,null)}})}unlisten(e,n){const r=ac.getListenId_(e,n);delete this.listens_[r]}get(e){const n=K_(e._queryParams),r=e._path.toString(),i=new Um;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+eo(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=_a(a.responseText)}catch{Dt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Dt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dD{constructor(){this.rootNode_=F.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lc(){return{value:null,children:new Map}}function hS(t,e,n){if(G(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=K(e);t.children.has(r)||t.children.set(r,lc());const i=t.children.get(r);e=oe(e),hS(i,e,n)}}function rp(t,e,n){t.value!==null?n(e,t.value):fD(t,(r,i)=>{const s=new ie(e.toString()+"/"+r);rp(i,s,n)})}function fD(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pD{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&xt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q_=10*1e3,mD=30*1e3,gD=5*60*1e3;class yD{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new pD(e);const r=Q_+(mD-Q_)*Math.random();qo(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;xt(e,(i,s)=>{s>0&&Zn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),qo(this.reportStats_.bind(this),Math.floor(Math.random()*2*gD))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var an;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(an||(an={}));function dS(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ag(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function lg(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=an.ACK_USER_WRITE,this.source=dS()}operationForChild(e){if(G(this.path)){if(this.affectedTree.value!=null)return k(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ie(e));return new uc(ee(),n,this.revert)}}else return k(K(this.path)===e,"operationForChild called for unrelated child."),new uc(oe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(e,n){this.source=e,this.path=n,this.type=an.LISTEN_COMPLETE}operationForChild(e){return G(this.path)?new Ra(this.source,ee()):new Ra(this.source,oe(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=an.OVERWRITE}operationForChild(e){return G(this.path)?new Si(this.source,ee(),this.snap.getImmediateChild(e)):new Si(this.source,oe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=an.MERGE}operationForChild(e){if(G(this.path)){const n=this.children.subtree(new ie(e));return n.isEmpty()?null:n.value?new Si(this.source,ee(),n.value):new xa(this.source,ee(),n)}else return k(K(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new xa(this.source,oe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(G(e))return this.isFullyInitialized()&&!this.filtered_;const n=K(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vD{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function _D(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(uD(o.childName,o.snapshotNode))}),Io(t,i,"child_removed",e,r,n),Io(t,i,"child_added",e,r,n),Io(t,i,"child_moved",s,r,n),Io(t,i,"child_changed",e,r,n),Io(t,i,"value",e,r,n),i}function Io(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>ED(t,a,l)),o.forEach(a=>{const l=wD(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function wD(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function ED(t,e,n){if(e.childName==null||n.childName==null)throw Zs("Should only compare child_ events.");const r=new W(e.childName,e.snapshotNode),i=new W(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sh(t,e){return{eventCache:t,serverCache:e}}function Ko(t,e,n,r){return sh(new Ii(e,n,r),t.serverCache)}function fS(t,e,n,r){return sh(t.eventCache,new Ii(e,n,r))}function ip(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ki(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Td;const CD=()=>(Td||(Td=new St(oO)),Td);class he{constructor(e,n=CD()){this.value=e,this.children=n}static fromObject(e){let n=new he(null);return xt(e,(r,i)=>{n=n.set(new ie(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ee(),value:this.value};if(G(e))return null;{const r=K(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(oe(e),n);return s!=null?{path:be(new ie(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(G(e))return this;{const n=K(e),r=this.children.get(n);return r!==null?r.subtree(oe(e)):new he(null)}}set(e,n){if(G(e))return new he(n,this.children);{const r=K(e),s=(this.children.get(r)||new he(null)).set(oe(e),n),o=this.children.insert(r,s);return new he(this.value,o)}}remove(e){if(G(e))return this.children.isEmpty()?new he(null):new he(null,this.children);{const n=K(e),r=this.children.get(n);if(r){const i=r.remove(oe(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new he(null):new he(this.value,s)}else return this}}get(e){if(G(e))return this.value;{const n=K(e),r=this.children.get(n);return r?r.get(oe(e)):null}}setTree(e,n){if(G(e))return n;{const r=K(e),s=(this.children.get(r)||new he(null)).setTree(oe(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new he(this.value,o)}}fold(e){return this.fold_(ee(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(be(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ee(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(G(e))return null;{const s=K(e),o=this.children.get(s);return o?o.findOnPath_(oe(e),be(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ee(),n)}foreachOnPath_(e,n,r){if(G(e))return this;{this.value&&r(n,this.value);const i=K(e),s=this.children.get(i);return s?s.foreachOnPath_(oe(e),be(n,i),r):new he(null)}}foreach(e){this.foreach_(ee(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(be(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e){this.writeTree_=e}static empty(){return new hn(new he(null))}}function Go(t,e,n){if(G(e))return new hn(new he(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Tt(i,e);return s=s.updateChild(o,n),new hn(t.writeTree_.set(i,s))}else{const i=new he(n),s=t.writeTree_.setTree(e,i);return new hn(s)}}}function Y_(t,e,n){let r=t;return xt(n,(i,s)=>{r=Go(r,be(e,i),s)}),r}function X_(t,e){if(G(e))return hn.empty();{const n=t.writeTree_.setTree(e,new he(null));return new hn(n)}}function sp(t,e){return Fi(t,e)!=null}function Fi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Tt(n.path,e)):null}function J_(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ee,(r,i)=>{e.push(new W(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new W(r,i.value))}),e}function Rr(t,e){if(G(e))return t;{const n=Fi(t,e);return n!=null?new hn(new he(n)):new hn(t.writeTree_.subtree(e))}}function op(t){return t.writeTree_.isEmpty()}function $s(t,e){return pS(ee(),t.writeTree_,e)}function pS(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(k(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=pS(be(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(be(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ug(t,e){return vS(e,t)}function TD(t,e,n,r,i){k(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Go(t.visibleWrites,e,n)),t.lastWriteId=r}function SD(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function ID(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);k(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&kD(a,r.path)?i=!1:on(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return ND(t),!0;if(r.snap)t.visibleWrites=X_(t.visibleWrites,r.path);else{const a=r.children;xt(a,l=>{t.visibleWrites=X_(t.visibleWrites,be(r.path,l))})}return!0}else return!1}function kD(t,e){if(t.snap)return on(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&on(be(t.path,n),e))return!0;return!1}function ND(t){t.visibleWrites=mS(t.allWrites,RD,ee()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function RD(t){return t.visible}function mS(t,e,n){let r=hn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)on(n,o)?(a=Tt(n,o),r=Go(r,a,s.snap)):on(o,n)&&(a=Tt(o,n),r=Go(r,ee(),s.snap.getChild(a)));else if(s.children){if(on(n,o))a=Tt(n,o),r=Y_(r,a,s.children);else if(on(o,n))if(a=Tt(o,n),G(a))r=Y_(r,ee(),s.children);else{const l=Ds(s.children,K(a));if(l){const u=l.getChild(oe(a));r=Go(r,ee(),u)}}}else throw Zs("WriteRecord should have .snap or .children")}}return r}function gS(t,e,n,r,i){if(!r&&!i){const s=Fi(t.visibleWrites,e);if(s!=null)return s;{const o=Rr(t.visibleWrites,e);if(op(o))return n;if(n==null&&!sp(o,ee()))return null;{const a=n||F.EMPTY_NODE;return $s(o,a)}}}else{const s=Rr(t.visibleWrites,e);if(!i&&op(s))return n;if(!i&&n==null&&!sp(s,ee()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(on(u.path,e)||on(e,u.path))},a=mS(t.allWrites,o,e),l=n||F.EMPTY_NODE;return $s(a,l)}}}function xD(t,e,n){let r=F.EMPTY_NODE;const i=Fi(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Ee,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Rr(t.visibleWrites,e);return n.forEachChild(Ee,(o,a)=>{const l=$s(Rr(s,new ie(o)),a);r=r.updateImmediateChild(o,l)}),J_(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Rr(t.visibleWrites,e);return J_(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function bD(t,e,n,r,i){k(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=be(e,n);if(sp(t.visibleWrites,s))return null;{const o=Rr(t.visibleWrites,s);return op(o)?i.getChild(n):$s(o,i.getChild(n))}}function AD(t,e,n,r){const i=be(e,n),s=Fi(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Rr(t.visibleWrites,i);return $s(o,r.getNode().getImmediateChild(n))}else return null}function PD(t,e){return Fi(t.visibleWrites,e)}function OD(t,e,n,r,i,s,o){let a;const l=Rr(t.visibleWrites,e),u=Fi(l,ee());if(u!=null)a=u;else if(n!=null)a=$s(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],h=o.getCompare(),d=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let f=d.getNext();for(;f&&c.length<i;)h(f,r)!==0&&c.push(f),f=d.getNext();return c}else return[]}function DD(){return{visibleWrites:hn.empty(),allWrites:[],lastWriteId:-1}}function cc(t,e,n,r){return gS(t.writeTree,t.treePath,e,n,r)}function cg(t,e){return xD(t.writeTree,t.treePath,e)}function Z_(t,e,n,r){return bD(t.writeTree,t.treePath,e,n,r)}function hc(t,e){return PD(t.writeTree,be(t.treePath,e))}function MD(t,e,n,r,i,s){return OD(t.writeTree,t.treePath,e,n,r,i,s)}function hg(t,e,n){return AD(t.writeTree,t.treePath,e,n)}function yS(t,e){return vS(be(t.treePath,e),t.writeTree)}function vS(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LD{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;k(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),k(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,ka(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Ia(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Fs(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,ka(r,e.snapshotNode,i.oldSnap));else throw Zs("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FD{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const _S=new FD;class dg{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Ii(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return hg(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ki(this.viewCache_),s=MD(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $D(t){return{filter:t}}function UD(t,e){k(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),k(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function VD(t,e,n,r,i){const s=new LD;let o,a;if(n.type===an.OVERWRITE){const u=n;u.source.fromUser?o=ap(t,e,u.path,u.snap,r,i,s):(k(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!G(u.path),o=dc(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===an.MERGE){const u=n;u.source.fromUser?o=jD(t,e,u.path,u.children,r,i,s):(k(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=lp(t,e,u.path,u.children,r,i,a,s))}else if(n.type===an.ACK_USER_WRITE){const u=n;u.revert?o=WD(t,e,u.path,r,i,s):o=zD(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===an.LISTEN_COMPLETE)o=HD(t,e,n.path,r,s);else throw Zs("Unknown operation type: "+n.type);const l=s.getChanges();return BD(e,o,l),{viewCache:o,changes:l}}function BD(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=ip(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(cS(ip(e)))}}function wS(t,e,n,r,i,s){const o=e.eventCache;if(hc(r,n)!=null)return e;{let a,l;if(G(n))if(k(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=ki(e),c=u instanceof F?u:F.EMPTY_NODE,h=cg(r,c);a=t.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const u=cc(r,ki(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=K(n);if(u===".priority"){k(Pr(n)===1,"Can't have a priority with additional path components");const c=o.getNode();l=e.serverCache.getNode();const h=Z_(r,n,c,l);h!=null?a=t.filter.updatePriority(c,h):a=o.getNode()}else{const c=oe(n);let h;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const d=Z_(r,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(u).updateChild(c,d):h=o.getNode().getImmediateChild(u)}else h=hg(r,u,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),u,h,c,i,s):a=o.getNode()}}return Ko(e,a,o.isFullyInitialized()||G(n),t.filter.filtersNodes())}}function dc(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(G(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),f,null)}else{const f=K(n);if(!l.isCompleteForPath(n)&&Pr(n)>1)return e;const g=oe(n),w=l.getNode().getImmediateChild(f).updateChild(g,r);f===".priority"?u=c.updatePriority(l.getNode(),w):u=c.updateChild(l.getNode(),f,w,g,_S,null)}const h=fS(e,u,l.isFullyInitialized()||G(n),c.filtersNodes()),d=new dg(i,h,s);return wS(t,h,n,i,d,a)}function ap(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const c=new dg(i,e,s);if(G(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Ko(e,u,!0,t.filter.filtersNodes());else{const h=K(n);if(h===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=Ko(e,u,a.isFullyInitialized(),a.isFiltered());else{const d=oe(n),f=a.getNode().getImmediateChild(h);let g;if(G(d))g=r;else{const v=c.getCompleteChild(h);v!=null?tS(d)===".priority"&&v.getChild(rS(d)).isEmpty()?g=v:g=v.updateChild(d,r):g=F.EMPTY_NODE}if(f.equals(g))l=e;else{const v=t.filter.updateChild(a.getNode(),h,g,d,c,o);l=Ko(e,v,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function e0(t,e){return t.eventCache.isCompleteForChild(e)}function jD(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const c=be(n,l);e0(e,K(c))&&(a=ap(t,a,c,u,i,s,o))}),r.foreach((l,u)=>{const c=be(n,l);e0(e,K(c))||(a=ap(t,a,c,u,i,s,o))}),a}function t0(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function lp(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;G(n)?u=r:u=new he(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((h,d)=>{if(c.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),g=t0(t,f,d);l=dc(t,l,new ie(h),g,i,s,o,a)}}),u.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!c.hasChild(h)&&!f){const g=e.serverCache.getNode().getImmediateChild(h),v=t0(t,g,d);l=dc(t,l,new ie(h),v,i,s,o,a)}}),l}function zD(t,e,n,r,i,s,o){if(hc(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(G(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return dc(t,e,n,l.getNode().getChild(n),i,s,a,o);if(G(n)){let u=new he(null);return l.getNode().forEachChild(Es,(c,h)=>{u=u.set(new ie(c),h)}),lp(t,e,n,u,i,s,a,o)}else return e}else{let u=new he(null);return r.foreach((c,h)=>{const d=be(n,c);l.isCompleteForPath(d)&&(u=u.set(c,l.getNode().getChild(d)))}),lp(t,e,n,u,i,s,a,o)}}function HD(t,e,n,r,i){const s=e.serverCache,o=fS(e,s.getNode(),s.isFullyInitialized()||G(n),s.isFiltered());return wS(t,o,n,r,_S,i)}function WD(t,e,n,r,i,s){let o;if(hc(r,n)!=null)return e;{const a=new dg(r,e,i),l=e.eventCache.getNode();let u;if(G(n)||K(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=cc(r,ki(e));else{const h=e.serverCache.getNode();k(h instanceof F,"serverChildren would be complete if leaf node"),c=cg(r,h)}c=c,u=t.filter.updateFullNode(l,c,s)}else{const c=K(n);let h=hg(r,c,e.serverCache);h==null&&e.serverCache.isCompleteForChild(c)&&(h=l.getImmediateChild(c)),h!=null?u=t.filter.updateChild(l,c,h,oe(n),a,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(l,c,F.EMPTY_NODE,oe(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=cc(r,ki(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||hc(r,ee())!=null,Ko(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qD{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new sg(r.getIndex()),s=hD(r);this.processor_=$D(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(F.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(F.EMPTY_NODE,a.getNode(),null),c=new Ii(l,o.isFullyInitialized(),i.filtersNodes()),h=new Ii(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=sh(h,c),this.eventGenerator_=new vD(this.query_)}get query(){return this.query_}}function KD(t){return t.viewCache_.serverCache.getNode()}function GD(t,e){const n=ki(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!G(e)&&!n.getImmediateChild(K(e)).isEmpty())?n.getChild(e):null}function n0(t){return t.eventRegistrations_.length===0}function QD(t,e){t.eventRegistrations_.push(e)}function r0(t,e,n){const r=[];if(n){k(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function i0(t,e,n,r){e.type===an.MERGE&&e.source.queryId!==null&&(k(ki(t.viewCache_),"We should always have a full cache before handling merges"),k(ip(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=VD(t.processor_,i,e,n,r);return UD(t.processor_,s.viewCache),k(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,ES(t,s.changes,s.viewCache.eventCache.getNode(),null)}function YD(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Ee,(s,o)=>{r.push(Fs(s,o))}),n.isFullyInitialized()&&r.push(cS(n.getNode())),ES(t,r,n.getNode(),e)}function ES(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return _D(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fc;class XD{constructor(){this.views=new Map}}function JD(t){k(!fc,"__referenceConstructor has already been defined"),fc=t}function ZD(){return k(fc,"Reference.ts has not been loaded"),fc}function eM(t){return t.views.size===0}function fg(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return k(s!=null,"SyncTree gave us an op for an invalid query."),i0(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(i0(o,e,n,r));return s}}function tM(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=cc(n,i?r:null),l=!1;a?l=!0:r instanceof F?(a=cg(n,r),l=!1):(a=F.EMPTY_NODE,l=!1);const u=sh(new Ii(a,l,!1),new Ii(r,i,!1));return new qD(e,u)}return o}function nM(t,e,n,r,i,s){const o=tM(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),QD(o,n),YD(o,n)}function rM(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Or(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(r0(u,n,r)),n0(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(r0(l,n,r)),n0(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Or(t)&&s.push(new(ZD())(e._repo,e._path)),{removed:s,events:o}}function CS(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Cs(t,e){let n=null;for(const r of t.views.values())n=n||GD(r,e);return n}function TS(t,e){if(e._queryParams.loadsAllData())return oh(t);{const r=e._queryIdentifier;return t.views.get(r)}}function SS(t,e){return TS(t,e)!=null}function Or(t){return oh(t)!=null}function oh(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pc;function iM(t){k(!pc,"__referenceConstructor has already been defined"),pc=t}function sM(){return k(pc,"Reference.ts has not been loaded"),pc}let oM=1;class s0{constructor(e){this.listenProvider_=e,this.syncPointTree_=new he(null),this.pendingWriteTree_=DD(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function aM(t,e,n,r,i){return TD(t.pendingWriteTree_,e,n,r,i),i?al(t,new Si(dS(),e,n)):[]}function us(t,e,n=!1){const r=SD(t.pendingWriteTree_,e);if(ID(t.pendingWriteTree_,e)){let s=new he(null);return r.snap!=null?s=s.set(ee(),!0):xt(r.children,o=>{s=s.set(new ie(o),!0)}),al(t,new uc(r.path,s,n))}else return[]}function ah(t,e,n){return al(t,new Si(ag(),e,n))}function lM(t,e,n){const r=he.fromObject(n);return al(t,new xa(ag(),e,r))}function uM(t,e){return al(t,new Ra(ag(),e))}function cM(t,e,n){const r=pg(t,n);if(r){const i=mg(r),s=i.path,o=i.queryId,a=Tt(s,e),l=new Ra(lg(o),a);return gg(t,s,l)}else return[]}function up(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||SS(o,e))){const l=rM(o,e,n,r);eM(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const c=u.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(s,(d,f)=>Or(f));if(c&&!h){const d=t.syncPointTree_.subtree(s);if(!d.isEmpty()){const f=fM(d);for(let g=0;g<f.length;++g){const v=f[g],w=v.query,m=RS(t,v);t.listenProvider_.startListening(Qo(w),mc(t,w),m.hashFn,m.onComplete)}}}!h&&u.length>0&&!r&&(c?t.listenProvider_.stopListening(Qo(e),null):u.forEach(d=>{const f=t.queryToTagMap.get(lh(d));t.listenProvider_.stopListening(Qo(d),f)}))}pM(t,u)}return a}function hM(t,e,n,r){const i=pg(t,r);if(i!=null){const s=mg(i),o=s.path,a=s.queryId,l=Tt(o,e),u=new Si(lg(a),l,n);return gg(t,o,u)}else return[]}function dM(t,e,n,r){const i=pg(t,r);if(i){const s=mg(i),o=s.path,a=s.queryId,l=Tt(o,e),u=he.fromObject(n),c=new xa(lg(a),l,u);return gg(t,o,c)}else return[]}function o0(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,f)=>{const g=Tt(d,i);s=s||Cs(f,g),o=o||Or(f)});let a=t.syncPointTree_.get(i);a?(o=o||Or(a),s=s||Cs(a,ee())):(a=new XD,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=F.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((f,g)=>{const v=Cs(g,ee());v&&(s=s.updateImmediateChild(f,v))}));const u=SS(a,e);if(!u&&!e._queryParams.loadsAllData()){const d=lh(e);k(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const f=mM();t.queryToTagMap.set(d,f),t.tagToQueryMap.set(f,d)}const c=ug(t.pendingWriteTree_,i);let h=nM(a,e,n,c,s,l);if(!u&&!o&&!r){const d=TS(a,e);h=h.concat(gM(t,e,d))}return h}function IS(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Tt(o,e),u=Cs(a,l);if(u)return u});return gS(i,e,s,n,!0)}function al(t,e){return kS(e,t.syncPointTree_,null,ug(t.pendingWriteTree_,ee()))}function kS(t,e,n,r){if(G(t.path))return NS(t,e,n,r);{const i=e.get(ee());n==null&&i!=null&&(n=Cs(i,ee()));let s=[];const o=K(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,c=yS(r,o);s=s.concat(kS(a,l,u,c))}return i&&(s=s.concat(fg(i,t,r,n))),s}}function NS(t,e,n,r){const i=e.get(ee());n==null&&i!=null&&(n=Cs(i,ee()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=yS(r,o),c=t.operationForChild(o);c&&(s=s.concat(NS(c,a,l,u)))}),i&&(s=s.concat(fg(i,t,r,n))),s}function RS(t,e){const n=e.query,r=mc(t,n);return{hashFn:()=>(KD(e)||F.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?cM(t,n._path,r):uM(t,n._path);{const s=uO(i,n);return up(t,n,null,s)}}}}function mc(t,e){const n=lh(e);return t.queryToTagMap.get(n)}function lh(t){return t._path.toString()+"$"+t._queryIdentifier}function pg(t,e){return t.tagToQueryMap.get(e)}function mg(t){const e=t.indexOf("$");return k(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ie(t.substr(0,e))}}function gg(t,e,n){const r=t.syncPointTree_.get(e);k(r,"Missing sync point for query tag that we're tracking");const i=ug(t.pendingWriteTree_,e);return fg(r,n,i,null)}function fM(t){return t.fold((e,n,r)=>{if(n&&Or(n))return[oh(n)];{let i=[];return n&&(i=CS(n)),xt(r,(s,o)=>{i=i.concat(o)}),i}})}function Qo(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(sM())(t._repo,t._path):t}function pM(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=lh(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function mM(){return oM++}function gM(t,e,n){const r=e._path,i=mc(t,e),s=RS(t,n),o=t.listenProvider_.startListening(Qo(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)k(!Or(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,c,h)=>{if(!G(u)&&c&&Or(c))return[oh(c).query];{let d=[];return c&&(d=d.concat(CS(c).map(f=>f.query))),xt(h,(f,g)=>{d=d.concat(g)}),d}});for(let u=0;u<l.length;++u){const c=l[u];t.listenProvider_.stopListening(Qo(c),mc(t,c))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new yg(n)}node(){return this.node_}}class vg{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=be(this.path_,e);return new vg(this.syncTree_,n)}node(){return IS(this.syncTree_,this.path_)}}const yM=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},a0=function(t,e,n){if(!t||typeof t!="object")return t;if(k(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return vM(t[".sv"],e,n);if(typeof t[".sv"]=="object")return _M(t[".sv"],e);k(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},vM=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:k(!1,"Unexpected server value: "+t)}},_M=function(t,e,n){t.hasOwnProperty("increment")||k(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&k(!1,"Unexpected increment value: "+r);const i=e.node();if(k(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},wM=function(t,e,n,r){return _g(e,new vg(n,t),r)},EM=function(t,e,n){return _g(t,new yg(e),n)};function _g(t,e,n){const r=t.getPriority().val(),i=a0(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=a0(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Le(a,st(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Le(i))),o.forEachChild(Ee,(a,l)=>{const u=_g(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Eg(t,e){let n=e instanceof ie?e:new ie(e),r=t,i=K(n);for(;i!==null;){const s=Ds(r.node.children,i)||{children:{},childCount:0};r=new wg(i,r,s),n=oe(n),i=K(n)}return r}function ro(t){return t.node.value}function xS(t,e){t.node.value=e,cp(t)}function bS(t){return t.node.childCount>0}function CM(t){return ro(t)===void 0&&!bS(t)}function uh(t,e){xt(t.node.children,(n,r)=>{e(new wg(n,t,r))})}function AS(t,e,n,r){n&&!r&&e(t),uh(t,i=>{AS(i,e,!0,r)}),n&&r&&e(t)}function TM(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function ll(t){return new ie(t.parent===null?t.name:ll(t.parent)+"/"+t.name)}function cp(t){t.parent!==null&&SM(t.parent,t.name,t)}function SM(t,e,n){const r=CM(n),i=Zn(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,cp(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,cp(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IM=/[\[\].#$\/\u0000-\u001F\u007F]/,kM=/[\[\].#$\u0000-\u001F\u007F]/,Sd=10*1024*1024,PS=function(t){return typeof t=="string"&&t.length!==0&&!IM.test(t)},OS=function(t){return typeof t=="string"&&t.length!==0&&!kM.test(t)},NM=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),OS(t)},DS=function(t,e,n){const r=n instanceof ie?new zO(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Qr(r));if(typeof e=="function")throw new Error(t+"contains a function "+Qr(r)+" with contents = "+e.toString());if(MT(e))throw new Error(t+"contains "+e.toString()+" "+Qr(r));if(typeof e=="string"&&e.length>Sd/3&&Zc(e)>Sd)throw new Error(t+"contains a string greater than "+Sd+" utf8 bytes "+Qr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(xt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!PS(o)))throw new Error(t+" contains an invalid key ("+o+") "+Qr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);HO(r,o),DS(t,a,r),WO(r)}),i&&s)throw new Error(t+' contains ".value" child '+Qr(r)+" in addition to actual children.")}},MS=function(t,e,n,r){if(!(r&&n===void 0)&&!OS(n))throw new Error(YC(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},RM=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),MS(t,e,n,r)},xM=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!PS(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!NM(n))throw new Error(YC(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bM{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function LS(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!ng(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function FS(t,e,n){LS(t,n),$S(t,r=>ng(r,e))}function $i(t,e,n){LS(t,n),$S(t,r=>on(r,e)||on(e,r))}function $S(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(AM(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function AM(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();ci&&it("event: "+n.toString()),sl(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PM="repo_interrupt",OM=25;class DM{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new bM,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=lc(),this.transactionQueueTree_=new wg,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function MM(t,e,n){if(t.stats_=eg(t.repoInfo_),t.forceRestClient_||fO())t.server_=new ac(t.repoInfo_,(r,i,s,o)=>{l0(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>u0(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ve(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Vn(t.repoInfo_,e,(r,i,s,o)=>{l0(t,r,i,s,o)},r=>{u0(t,r)},r=>{FM(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=_O(t.repoInfo_,()=>new yD(t.stats_,t.server_)),t.infoData_=new dD,t.infoSyncTree_=new s0({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=ah(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Cg(t,"connected",!1),t.serverSyncTree_=new s0({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);$i(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function LM(t){const n=t.infoData_.getNode(new ie(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function US(t){return yM({timestamp:LM(t)})}function l0(t,e,n,r,i){t.dataUpdateCount++;const s=new ie(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=Ju(n,u=>st(u));o=dM(t.serverSyncTree_,s,l,i)}else{const l=st(n);o=hM(t.serverSyncTree_,s,l,i)}else if(r){const l=Ju(n,u=>st(u));o=lM(t.serverSyncTree_,s,l)}else{const l=st(n);o=ah(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Sg(t,s)),$i(t.eventQueue_,a,o)}function u0(t,e){Cg(t,"connected",e),e===!1&&UM(t)}function FM(t,e){xt(e,(n,r)=>{Cg(t,n,r)})}function Cg(t,e,n){const r=new ie("/.info/"+e),i=st(n);t.infoData_.updateSnapshot(r,i);const s=ah(t.infoSyncTree_,r,i);$i(t.eventQueue_,r,s)}function $M(t){return t.nextWriteId_++}function UM(t){VS(t,"onDisconnectEvents");const e=US(t),n=lc();rp(t.onDisconnect_,ee(),(i,s)=>{const o=wM(i,s,t.serverSyncTree_,e);hS(n,i,o)});let r=[];rp(n,ee(),(i,s)=>{r=r.concat(ah(t.serverSyncTree_,i,s));const o=HM(t,i);Sg(t,o)}),t.onDisconnect_=lc(),$i(t.eventQueue_,ee(),r)}function VM(t,e,n){let r;K(e._path)===".info"?r=o0(t.infoSyncTree_,e,n):r=o0(t.serverSyncTree_,e,n),FS(t.eventQueue_,e._path,r)}function c0(t,e,n){let r;K(e._path)===".info"?r=up(t.infoSyncTree_,e,n):r=up(t.serverSyncTree_,e,n),FS(t.eventQueue_,e._path,r)}function BM(t){t.persistentConnection_&&t.persistentConnection_.interrupt(PM)}function VS(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),it(n,...e)}function BS(t,e,n){return IS(t.serverSyncTree_,e,n)||F.EMPTY_NODE}function Tg(t,e=t.transactionQueueTree_){if(e||ch(t,e),ro(e)){const n=zS(t,e);k(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&jM(t,ll(e),n)}else bS(e)&&uh(e,n=>{Tg(t,n)})}function jM(t,e,n){const r=n.map(u=>u.currentWriteId),i=BS(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];k(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const h=Tt(e,c.path);s=s.updateChild(h,c.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{VS(t,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,c=c.concat(us(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();ch(t,Eg(t.transactionQueueTree_,e)),Tg(t,t.transactionQueueTree_),$i(t.eventQueue_,e,c);for(let d=0;d<h.length;d++)sl(h[d])}else{if(u==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Dt("transaction at "+l.toString()+" failed: "+u);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=u}Sg(t,e)}},o)}function Sg(t,e){const n=jS(t,e),r=ll(n),i=zS(t,n);return zM(t,i,r),r}function zM(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=Tt(n,l.path);let c=!1,h;if(k(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,h=l.abortReason,i=i.concat(us(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=OM)c=!0,h="maxretry",i=i.concat(us(t.serverSyncTree_,l.currentWriteId,!0));else{const d=BS(t,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){DS("transaction failed: Data returned ",f,l.path);let g=st(f);typeof f=="object"&&f!=null&&Zn(f,".priority")||(g=g.updatePriority(d.getPriority()));const w=l.currentWriteId,m=US(t),p=EM(g,d,m);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=p,l.currentWriteId=$M(t),o.splice(o.indexOf(w),1),i=i.concat(aM(t.serverSyncTree_,l.path,p,l.currentWriteId,l.applyLocally)),i=i.concat(us(t.serverSyncTree_,w,!0))}else c=!0,h="nodata",i=i.concat(us(t.serverSyncTree_,l.currentWriteId,!0))}$i(t.eventQueue_,n,i),i=[],c&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(h),!1,null))))}ch(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)sl(r[a]);Tg(t,t.transactionQueueTree_)}function jS(t,e){let n,r=t.transactionQueueTree_;for(n=K(e);n!==null&&ro(r)===void 0;)r=Eg(r,n),e=oe(e),n=K(e);return r}function zS(t,e){const n=[];return HS(t,e,n),n.sort((r,i)=>r.order-i.order),n}function HS(t,e,n){const r=ro(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);uh(e,i=>{HS(t,i,n)})}function ch(t,e){const n=ro(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,xS(e,n.length>0?n:void 0)}uh(e,r=>{ch(t,r)})}function HM(t,e){const n=ll(jS(t,e)),r=Eg(t.transactionQueueTree_,e);return TM(r,i=>{Id(t,i)}),Id(t,r),AS(r,i=>{Id(t,i)}),n}function Id(t,e){const n=ro(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(k(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(k(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(us(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?xS(e,void 0):n.length=s+1,$i(t.eventQueue_,ll(e),i);for(let o=0;o<r.length;o++)sl(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WM(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function qM(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Dt(`Invalid query segment '${n}' in query '${t}'`)}return e}const h0=function(t,e){const n=KM(t),r=n.namespace;n.domain==="firebase.com"&&Ci(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Ci("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||iO();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new gO(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new ie(n.pathString)}},KM=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(c,h)),c<h&&(i=WM(t.substring(c,h)));const d=qM(t.substring(Math.min(t.length,h)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const f=e.slice(0,u);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const g=e.indexOf(".");r=e.substring(0,g).toLowerCase(),n=e.substring(g+1),s=r}"ns"in d&&(s=d.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ve(this.snapshot.exportVal())}}class qS{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GM{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return k(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Ig{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return G(this._path)?null:tS(this._path)}get ref(){return new er(this._repo,this._path)}get _queryIdentifier(){const e=G_(this._queryParams),n=Jm(e);return n==="{}"?"default":n}get _queryObject(){return G_(this._queryParams)}isEqual(e){if(e=ze(e),!(e instanceof Ig))return!1;const n=this._repo===e._repo,r=ng(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+jO(this._path)}}class er extends Ig{constructor(e,n){super(e,n,new og,!1)}get parent(){const e=rS(this._path);return e===null?null:new er(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ba{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ie(e),r=hp(this.ref,e);return new ba(this._node.getChild(n),r,Ee)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new ba(i,hp(this.ref,r),Ee)))}hasChild(e){const n=new ie(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function hp(t,e){return t=ze(t),K(t._path)===null?RM("child","path",e,!1):MS("child","path",e,!1),new er(t._repo,be(t._path,e))}class kg{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new WS("value",this,new ba(e.snapshotNode,new er(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new qS(this,e,n):null}matches(e){return e instanceof kg?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Ng{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new qS(this,e,n):null}createEvent(e,n){k(e.childName!=null,"Child events should have a childName.");const r=hp(new er(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new WS(e.type,this,new ba(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Ng?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function ul(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,u=(c,h)=>{c0(t._repo,t,a),l(c,h)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new GM(n,s||void 0),a=e==="value"?new kg(o):new Ng(e,o);return VM(t._repo,t,a),()=>c0(t._repo,t,a)}function QM(t,e,n,r){return ul(t,"value",e,n,r)}function YM(t,e,n,r){return ul(t,"child_added",e,n,r)}function XM(t,e,n,r){return ul(t,"child_changed",e,n,r)}function JM(t,e,n,r){return ul(t,"child_moved",e,n,r)}function ZM(t,e,n,r){return ul(t,"child_removed",e,n,r)}JD(er);iM(er);/**
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
 */const eL="FIREBASE_DATABASE_EMULATOR_HOST",dp={};let tL=!1;function nL(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Ci("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),it("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=h0(s,i),a=o.repoInfo,l,u;typeof process<"u"&&process.env&&(u=process.env[eL]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=h0(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const c=i&&l?new ep(ep.OWNER):new mO(t.name,t.options,e);xM("Invalid Firebase Database URL",o),G(o.path)||Ci("Database URL must point to the root of a Firebase Database (not including a child path).");const h=iL(a,t,c,new pO(t.name,n));return new sL(h,t)}function rL(t,e){const n=dp[e];(!n||n[t.key]!==t)&&Ci(`Database ${e}(${t.repoInfo_}) has already been deleted.`),BM(t),delete n[t.key]}function iL(t,e,n,r){let i=dp[e.name];i||(i={},dp[e.name]=i);let s=i[t.toURLString()];return s&&Ci("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new DM(t,tL,n,r),i[t.toURLString()]=s,s}class sL{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(MM(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new er(this._repo,ee())),this._rootInternal}_delete(){return this._rootInternal!==null&&(rL(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ci("Cannot call "+e+" on a deleted database.")}}function oL(t=jm(),e){return to(t,"database").getImmediate({identifier:e})}/**
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
 */function aL(t){ZP(Br),Qt(new Lt("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return nL(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),ke(A_,P_,t),ke(A_,P_,"esm2017")}Vn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Vn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};aL();var lL="firebase",uL="9.9.4";/**
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
 */ke(lL,uL,"app");var cL=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},A,Rg=Rg||{},V=cL||self;function gc(){}function fp(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function cl(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function hL(t){return Object.prototype.hasOwnProperty.call(t,kd)&&t[kd]||(t[kd]=++dL)}var kd="closure_uid_"+(1e9*Math.random()>>>0),dL=0;function fL(t,e,n){return t.call.apply(t.bind,arguments)}function pL(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Qe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Qe=fL:Qe=pL,Qe.apply(null,arguments)}function Ql(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ze(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function jr(){this.s=this.s,this.o=this.o}var mL=0;jr.prototype.s=!1;jr.prototype.na=function(){!this.s&&(this.s=!0,this.M(),mL!=0)&&hL(this)};jr.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const KS=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},GS=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i=typeof t=="string"?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function gL(t){e:{var e=aF;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function d0(t){return Array.prototype.concat.apply([],arguments)}function xg(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function yc(t){return/^[\s\xa0]*$/.test(t)}var f0=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function dt(t,e){return t.indexOf(e)!=-1}function Nd(t,e){return t<e?-1:t>e?1:0}var ft;e:{var p0=V.navigator;if(p0){var m0=p0.userAgent;if(m0){ft=m0;break e}}ft=""}function bg(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function QS(t){const e={};for(const n in t)e[n]=t[n];return e}var g0="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function YS(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<g0.length;s++)n=g0[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Ag(t){return Ag[" "](t),t}Ag[" "]=gc;function yL(t){var e=wL;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var vL=dt(ft,"Opera"),Us=dt(ft,"Trident")||dt(ft,"MSIE"),XS=dt(ft,"Edge"),pp=XS||Us,JS=dt(ft,"Gecko")&&!(dt(ft.toLowerCase(),"webkit")&&!dt(ft,"Edge"))&&!(dt(ft,"Trident")||dt(ft,"MSIE"))&&!dt(ft,"Edge"),_L=dt(ft.toLowerCase(),"webkit")&&!dt(ft,"Edge");function ZS(){var t=V.document;return t?t.documentMode:void 0}var vc;e:{var Rd="",xd=function(){var t=ft;if(JS)return/rv:([^\);]+)(\)|;)/.exec(t);if(XS)return/Edge\/([\d\.]+)/.exec(t);if(Us)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(_L)return/WebKit\/(\S+)/.exec(t);if(vL)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(xd&&(Rd=xd?xd[1]:""),Us){var bd=ZS();if(bd!=null&&bd>parseFloat(Rd)){vc=String(bd);break e}}vc=Rd}var wL={};function EL(){return yL(function(){let t=0;const e=f0(String(vc)).split("."),n=f0("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Nd(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Nd(i[2].length==0,s[2].length==0)||Nd(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var mp;if(V.document&&Us){var y0=ZS();mp=y0||parseInt(vc,10)||void 0}else mp=void 0;var CL=mp,TL=function(){if(!V.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{V.addEventListener("test",gc,e),V.removeEventListener("test",gc,e)}catch{}return t}();function at(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}at.prototype.h=function(){this.defaultPrevented=!0};function Aa(t,e){if(at.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(JS){e:{try{Ag(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:SL[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Aa.Z.h.call(this)}}Ze(Aa,at);var SL={2:"touch",3:"pen",4:"mouse"};Aa.prototype.h=function(){Aa.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var hl="closure_listenable_"+(1e6*Math.random()|0),IL=0;function kL(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++IL,this.ca=this.fa=!1}function hh(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function dh(t){this.src=t,this.g={},this.h=0}dh.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=yp(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new kL(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};function gp(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=KS(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(hh(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function yp(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}var Pg="closure_lm_"+(1e6*Math.random()|0),Ad={};function e1(t,e,n,r,i){if(r&&r.once)return n1(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)e1(t,e[s],n,r,i);return null}return n=Mg(n),t&&t[hl]?t.N(e,n,cl(r)?!!r.capture:!!r,i):t1(t,e,n,!1,r,i)}function t1(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=cl(i)?!!i.capture:!!i,a=Dg(t);if(a||(t[Pg]=a=new dh(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=NL(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)TL||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(i1(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function NL(){function t(n){return e.call(t.src,t.listener,n)}var e=RL;return t}function n1(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)n1(t,e[s],n,r,i);return null}return n=Mg(n),t&&t[hl]?t.O(e,n,cl(r)?!!r.capture:!!r,i):t1(t,e,n,!0,r,i)}function r1(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)r1(t,e[s],n,r,i);else r=cl(r)?!!r.capture:!!r,n=Mg(n),t&&t[hl]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=yp(s,n,r,i),-1<n&&(hh(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Dg(t))&&(e=t.g[e.toString()],t=-1,e&&(t=yp(e,n,r,i)),(n=-1<t?e[t]:null)&&Og(n))}function Og(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[hl])gp(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(i1(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Dg(e))?(gp(n,t),n.h==0&&(n.src=null,e[Pg]=null)):hh(t)}}}function i1(t){return t in Ad?Ad[t]:Ad[t]="on"+t}function RL(t,e){if(t.ca)t=!0;else{e=new Aa(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&Og(t),t=n.call(r,e)}return t}function Dg(t){return t=t[Pg],t instanceof dh?t:null}var Pd="__closure_events_fn_"+(1e9*Math.random()>>>0);function Mg(t){return typeof t=="function"?t:(t[Pd]||(t[Pd]=function(e){return t.handleEvent(e)}),t[Pd])}function He(){jr.call(this),this.i=new dh(this),this.P=this,this.I=null}Ze(He,jr);He.prototype[hl]=!0;He.prototype.removeEventListener=function(t,e,n,r){r1(this,t,e,n,r)};function Ye(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new at(e,t);else if(e instanceof at)e.target=e.target||t;else{var i=e;e=new at(r,t),YS(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Yl(o,r,!0,e)&&i}if(o=e.g=t,i=Yl(o,r,!0,e)&&i,i=Yl(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Yl(o,r,!1,e)&&i}He.prototype.M=function(){if(He.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)hh(n[r]);delete t.g[e],t.h--}}this.I=null};He.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};He.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Yl(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,l=o.ia||o.src;o.fa&&gp(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Lg=V.JSON.stringify;function xL(){var t=o1;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class bL{constructor(){this.h=this.g=null}add(e,n){const r=s1.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var s1=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new AL,t=>t.reset());class AL{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function PL(t){V.setTimeout(()=>{throw t},0)}function Fg(t,e){vp||OL(),_p||(vp(),_p=!0),o1.add(t,e)}var vp;function OL(){var t=V.Promise.resolve(void 0);vp=function(){t.then(DL)}}var _p=!1,o1=new bL;function DL(){for(var t;t=xL();){try{t.h.call(t.g)}catch(n){PL(n)}var e=s1;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}_p=!1}function fh(t,e){He.call(this),this.h=t||1,this.g=e||V,this.j=Qe(this.kb,this),this.l=Date.now()}Ze(fh,He);A=fh.prototype;A.da=!1;A.S=null;A.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Ye(this,"tick"),this.da&&($g(this),this.start()))}};A.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function $g(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}A.M=function(){fh.Z.M.call(this),$g(this),delete this.g};function Ug(t,e,n){if(typeof t=="function")n&&(t=Qe(t,n));else if(t&&typeof t.handleEvent=="function")t=Qe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:V.setTimeout(t,e||0)}function a1(t){t.g=Ug(()=>{t.g=null,t.i&&(t.i=!1,a1(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class ML extends jr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:a1(this)}M(){super.M(),this.g&&(V.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Pa(t){jr.call(this),this.h=t,this.g={}}Ze(Pa,jr);var v0=[];function l1(t,e,n,r){Array.isArray(n)||(n&&(v0[0]=n.toString()),n=v0);for(var i=0;i<n.length;i++){var s=e1(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function u1(t){bg(t.g,function(e,n){this.g.hasOwnProperty(n)&&Og(e)},t),t.g={}}Pa.prototype.M=function(){Pa.Z.M.call(this),u1(this)};Pa.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ph(){this.g=!0}ph.prototype.Aa=function(){this.g=!1};function LL(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function FL(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function cs(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+UL(t,n)+(r?" "+r:"")})}function $L(t,e){t.info(function(){return"TIMEOUT: "+e})}ph.prototype.info=function(){};function UL(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Lg(n)}catch{return e}}var Ui={},_0=null;function mh(){return _0=_0||new He}Ui.Ma="serverreachability";function c1(t){at.call(this,Ui.Ma,t)}Ze(c1,at);function Oa(t){const e=mh();Ye(e,new c1(e))}Ui.STAT_EVENT="statevent";function h1(t,e){at.call(this,Ui.STAT_EVENT,t),this.stat=e}Ze(h1,at);function pt(t){const e=mh();Ye(e,new h1(e,t))}Ui.Na="timingevent";function d1(t,e){at.call(this,Ui.Na,t),this.size=e}Ze(d1,at);function dl(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return V.setTimeout(function(){t()},e)}var gh={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},f1={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Vg(){}Vg.prototype.h=null;function w0(t){return t.h||(t.h=t.i())}function p1(){}var fl={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Bg(){at.call(this,"d")}Ze(Bg,at);function jg(){at.call(this,"c")}Ze(jg,at);var wp;function yh(){}Ze(yh,Vg);yh.prototype.g=function(){return new XMLHttpRequest};yh.prototype.i=function(){return{}};wp=new yh;function pl(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new Pa(this),this.P=VL,t=pp?125:void 0,this.W=new fh(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new m1}function m1(){this.i=null,this.g="",this.h=!1}var VL=45e3,Ep={},_c={};A=pl.prototype;A.setTimeout=function(t){this.P=t};function Cp(t,e,n){t.K=1,t.v=_h(Gn(e)),t.s=n,t.U=!0,g1(t,null)}function g1(t,e){t.F=Date.now(),ml(t),t.A=Gn(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),T1(n.h,"t",r),t.C=0,n=t.l.H,t.h=new m1,t.g=z1(t.l,n?e:null,!t.s),0<t.O&&(t.L=new ML(Qe(t.Ia,t,t.g),t.O)),l1(t.V,t.g,"readystatechange",t.gb),e=t.H?QS(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Oa(),LL(t.j,t.u,t.A,t.m,t.X,t.s)}A.gb=function(t){t=t.target;const e=this.L;e&&Fn(t)==3?e.l():this.Ia(t)};A.Ia=function(t){try{if(t==this.g)e:{const c=Fn(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>c)&&(c!=3||pp||this.g&&(this.h.h||this.g.ga()||S0(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?Oa(3):Oa(2)),vh(this);var n=this.g.ba();this.N=n;t:if(y1(this)){var r=S0(this.g);t="";var i=r.length,s=Fn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ri(this),Yo(this);var o="";break t}this.h.i=new V.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,FL(this.j,this.u,this.A,this.m,this.X,c,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!yc(a)){var u=a;break t}}u=null}if(n=u)cs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Tp(this,n);else{this.i=!1,this.o=3,pt(12),ri(this),Yo(this);break e}}this.U?(v1(this,c,o),pp&&this.i&&c==3&&(l1(this.V,this.W,"tick",this.fb),this.W.start())):(cs(this.j,this.m,o,null),Tp(this,o)),c==4&&ri(this),this.i&&!this.I&&(c==4?U1(this.l,this):(this.i=!1,ml(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,pt(12)):(this.o=0,pt(13)),ri(this),Yo(this)}}}catch{}finally{}};function y1(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function v1(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=BL(t,n),i==_c){e==4&&(t.o=4,pt(14),r=!1),cs(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Ep){t.o=4,pt(15),cs(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else cs(t.j,t.m,i,null),Tp(t,i);y1(t)&&i!=_c&&i!=Ep&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,pt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Xg(e),e.L=!0,pt(11))):(cs(t.j,t.m,n,"[Invalid Chunked Response]"),ri(t),Yo(t))}A.fb=function(){if(this.g){var t=Fn(this.g),e=this.g.ga();this.C<e.length&&(vh(this),v1(this,t,e),this.i&&t!=4&&ml(this))}};function BL(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?_c:(n=Number(e.substring(n,r)),isNaN(n)?Ep:(r+=1,r+n>e.length?_c:(e=e.substr(r,n),t.C=r+n,e)))}A.cancel=function(){this.I=!0,ri(this)};function ml(t){t.Y=Date.now()+t.P,_1(t,t.P)}function _1(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=dl(Qe(t.eb,t),e)}function vh(t){t.B&&(V.clearTimeout(t.B),t.B=null)}A.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?($L(this.j,this.A),this.K!=2&&(Oa(),pt(17)),ri(this),this.o=2,Yo(this)):_1(this,this.Y-t)};function Yo(t){t.l.G==0||t.I||U1(t.l,t)}function ri(t){vh(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,$g(t.W),u1(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Tp(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Sp(n.i,t))){if(n.I=t.N,!t.J&&Sp(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Tc(n),Ch(n);else break e;Yg(n),pt(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=dl(Qe(n.ab,n),6e3));if(1>=k1(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else ii(n,11)}else if((t.J||n.g==t)&&Tc(n),!yc(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.U=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.J=u[1],n.la=u[2];const c=u[3];c!=null&&(n.ma=c,n.h.info("VER="+n.ma));const h=u[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const g=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var s=r.i;!s.g&&(dt(g,"spdy")||dt(g,"quic")||dt(g,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(Wg(s,s.h),s.h=null))}if(r.D){const v=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.sa=v,me(r.F,r.D,v))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=j1(r,r.H?r.la:null,r.W),o.J){N1(r.i,o);var a=o,l=r.K;l&&a.setTimeout(l),a.B&&(vh(a),ml(a)),r.g=o}else F1(r);0<n.l.length&&Th(n)}else u[0]!="stop"&&u[0]!="close"||ii(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?ii(n,7):Qg(n):u[0]!="noop"&&n.j&&n.j.wa(u),n.A=0)}}Oa(4)}catch{}}function jL(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(fp(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function zg(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(fp(t)||typeof t=="string")GS(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(fp(t)||typeof t=="string"){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=jL(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function io(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof io)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}A=io.prototype;A.R=function(){Hg(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};A.T=function(){return Hg(this),this.g.concat()};function Hg(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];Ni(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],Ni(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}A.get=function(t,e){return Ni(this.h,t)?this.h[t]:e};A.set=function(t,e){Ni(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};A.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};function Ni(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var w1=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function zL(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ri(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Ri){this.g=e!==void 0?e:t.g,wc(this,t.j),this.s=t.s,Ec(this,t.i),Cc(this,t.m),this.l=t.l,e=t.h;var n=new Da;n.i=e.i,e.g&&(n.g=new io(e.g),n.h=e.h),E0(this,n),this.o=t.o}else t&&(n=String(t).match(w1))?(this.g=!!e,wc(this,n[1]||"",!0),this.s=Xo(n[2]||""),Ec(this,n[3]||"",!0),Cc(this,n[4]),this.l=Xo(n[5]||"",!0),E0(this,n[6]||"",!0),this.o=Xo(n[7]||"")):(this.g=!!e,this.h=new Da(null,this.g))}Ri.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Po(e,C0,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Po(e,C0,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(Po(n,n.charAt(0)=="/"?GL:KL,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Po(n,YL)),t.join("")};function Gn(t){return new Ri(t)}function wc(t,e,n){t.j=n?Xo(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ec(t,e,n){t.i=n?Xo(e,!0):e}function Cc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function E0(t,e,n){e instanceof Da?(t.h=e,XL(t.h,t.g)):(n||(e=Po(e,QL)),t.h=new Da(e,t.g))}function me(t,e,n){t.h.set(e,n)}function _h(t){return me(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function HL(t){return t instanceof Ri?Gn(t):new Ri(t,void 0)}function WL(t,e,n,r){var i=new Ri(null,void 0);return t&&wc(i,t),e&&Ec(i,e),n&&Cc(i,n),r&&(i.l=r),i}function Xo(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Po(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,qL),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function qL(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var C0=/[#\/\?@]/g,KL=/[#\?:]/g,GL=/[#\?]/g,QL=/[#\?@]/g,YL=/#/g;function Da(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function zr(t){t.g||(t.g=new io,t.h=0,t.i&&zL(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}A=Da.prototype;A.add=function(t,e){zr(this),this.i=null,t=so(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function E1(t,e){zr(t),e=so(t,e),Ni(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Ni(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Hg(t)))}function C1(t,e){return zr(t),e=so(t,e),Ni(t.g.h,e)}A.forEach=function(t,e){zr(this),this.g.forEach(function(n,r){GS(n,function(i){t.call(e,i,r,this)},this)},this)};A.T=function(){zr(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n};A.R=function(t){zr(this);var e=[];if(typeof t=="string")C1(this,t)&&(e=d0(e,this.g.get(so(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=d0(e,t[n])}return e};A.set=function(t,e){return zr(this),this.i=null,t=so(this,t),C1(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};A.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function T1(t,e,n){E1(t,e),0<n.length&&(t.i=null,t.g.set(so(t,e),xg(n)),t.h+=n.length)}A.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;r[s]!==""&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};function so(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function XL(t,e){e&&!t.j&&(zr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(E1(this,r),T1(this,i,n))},t)),t.j=e}var JL=class{constructor(t,e){this.h=t,this.g=e}};function S1(t){this.l=t||ZL,V.PerformanceNavigationTiming?(t=V.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(V.g&&V.g.Ea&&V.g.Ea()&&V.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ZL=10;function I1(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function k1(t){return t.h?1:t.g?t.g.size:0}function Sp(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Wg(t,e){t.g?t.g.add(e):t.h=e}function N1(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}S1.prototype.cancel=function(){if(this.i=R1(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function R1(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return xg(t.i)}function qg(){}qg.prototype.stringify=function(t){return V.JSON.stringify(t,void 0)};qg.prototype.parse=function(t){return V.JSON.parse(t,void 0)};function eF(){this.g=new qg}function tF(t,e,n){const r=n||"";try{zg(t,function(i,s){let o=i;cl(i)&&(o=Lg(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function nF(t,e){const n=new ph;if(V.Image){const r=new Image;r.onload=Ql(Xl,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Ql(Xl,n,r,"TestLoadImage: error",!1,e),r.onabort=Ql(Xl,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Ql(Xl,n,r,"TestLoadImage: timeout",!1,e),V.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Xl(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function gl(t){this.l=t.$b||null,this.j=t.ib||!1}Ze(gl,Vg);gl.prototype.g=function(){return new wh(this.l,this.j)};gl.prototype.i=function(t){return function(){return t}}({});function wh(t,e){He.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Kg,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ze(wh,He);var Kg=0;A=wh.prototype;A.open=function(t,e){if(this.readyState!=Kg)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ma(this)};A.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||V).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};A.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,yl(this)),this.readyState=Kg};A.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ma(this)),this.g&&(this.readyState=3,Ma(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof V.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;x1(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function x1(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}A.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?yl(this):Ma(this),this.readyState==3&&x1(this)}};A.Ua=function(t){this.g&&(this.response=this.responseText=t,yl(this))};A.Ta=function(t){this.g&&(this.response=t,yl(this))};A.ha=function(){this.g&&yl(this)};function yl(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ma(t)}A.setRequestHeader=function(t,e){this.v.append(t,e)};A.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};A.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ma(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(wh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var rF=V.JSON.parse;function Ne(t){He.call(this),this.headers=new io,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=b1,this.K=this.L=!1}Ze(Ne,He);var b1="",iF=/^https?$/i,sF=["POST","PUT"];A=Ne.prototype;A.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():wp.g(),this.C=this.u?w0(this.u):w0(wp),this.g.onreadystatechange=Qe(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){T0(this,s);return}t=n||"";const i=new io(this.headers);r&&zg(r,function(s,o){i.set(o,s)}),r=gL(i.T()),n=V.FormData&&t instanceof V.FormData,!(0<=KS(sF,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(s,o){this.g.setRequestHeader(o,s)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{O1(this),0<this.B&&((this.K=oF(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Qe(this.pa,this)):this.A=Ug(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){T0(this,s)}};function oF(t){return Us&&EL()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function aF(t){return t.toLowerCase()=="content-type"}A.pa=function(){typeof Rg<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ye(this,"timeout"),this.abort(8))};function T0(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,A1(t),Eh(t)}function A1(t){t.D||(t.D=!0,Ye(t,"complete"),Ye(t,"error"))}A.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ye(this,"complete"),Ye(this,"abort"),Eh(this))};A.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Eh(this,!0)),Ne.Z.M.call(this)};A.Fa=function(){this.s||(this.F||this.v||this.l?P1(this):this.cb())};A.cb=function(){P1(this)};function P1(t){if(t.h&&typeof Rg<"u"&&(!t.C[1]||Fn(t)!=4||t.ba()!=2)){if(t.v&&Fn(t)==4)Ug(t.Fa,0,t);else if(Ye(t,"readystatechange"),Fn(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(w1)[1]||null;if(!i&&V.self&&V.self.location){var s=V.self.location.protocol;i=s.substr(0,s.length-1)}r=!iF.test(i?i.toLowerCase():"")}n=r}if(n)Ye(t,"complete"),Ye(t,"success");else{t.m=6;try{var o=2<Fn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",A1(t)}}finally{Eh(t)}}}}function Eh(t,e){if(t.g){O1(t);const n=t.g,r=t.C[0]?gc:null;t.g=null,t.C=null,e||Ye(t,"ready");try{n.onreadystatechange=r}catch{}}}function O1(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(V.clearTimeout(t.A),t.A=null)}function Fn(t){return t.g?t.g.readyState:0}A.ba=function(){try{return 2<Fn(this)?this.g.status:-1}catch{return-1}};A.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};A.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),rF(e)}};function S0(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case b1:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}A.Da=function(){return this.m};A.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function lF(t){let e="";return bg(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Gg(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=lF(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):me(t,e,n))}function ko(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function D1(t){this.za=0,this.l=[],this.h=new ph,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=ko("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=ko("baseRetryDelayMs",5e3,t),this.$a=ko("retryDelaySeedMs",1e4,t),this.Ya=ko("forwardChannelMaxRetries",2,t),this.ra=ko("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new S1(t&&t.concurrentRequestLimit),this.Ca=new eF,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}A=D1.prototype;A.ma=8;A.G=1;function Qg(t){if(M1(t),t.G==3){var e=t.V++,n=Gn(t.F);me(n,"SID",t.J),me(n,"RID",e),me(n,"TYPE","terminate"),vl(t,n),e=new pl(t,t.h,e,void 0),e.K=2,e.v=_h(Gn(n)),n=!1,V.navigator&&V.navigator.sendBeacon&&(n=V.navigator.sendBeacon(e.v.toString(),"")),!n&&V.Image&&(new Image().src=e.v,n=!0),n||(e.g=z1(e.l,null),e.g.ea(e.v)),e.F=Date.now(),ml(e)}B1(t)}A.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function Ch(t){t.g&&(Xg(t),t.g.cancel(),t.g=null)}function M1(t){Ch(t),t.u&&(V.clearTimeout(t.u),t.u=null),Tc(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&V.clearTimeout(t.m),t.m=null)}function Od(t,e){t.l.push(new JL(t.Za++,e)),t.G==3&&Th(t)}function Th(t){I1(t.i)||t.m||(t.m=!0,Fg(t.Ha,t),t.C=0)}function uF(t,e){return k1(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=dl(Qe(t.Ha,t,e),V1(t,t.C)),t.C++,!0)}A.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new pl(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=QS(s),YS(s,this.P)):s=this.P),this.o===null&&(i.H=s),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=L1(this,i,e),n=Gn(this.F),me(n,"RID",t),me(n,"CVER",22),this.D&&me(n,"X-HTTP-Session-Id",this.D),vl(this,n),this.o&&s&&Gg(n,this.o,s),Wg(this.i,i),this.Ra&&me(n,"TYPE","init"),this.ja?(me(n,"$req",e),me(n,"SID","null"),i.$=!0,Cp(i,n,null)):Cp(i,n,e),this.G=2}}else this.G==3&&(t?I0(this,t):this.l.length==0||I1(this.i)||I0(this))};function I0(t,e){var n;e?n=e.m:n=t.V++;const r=Gn(t.F);me(r,"SID",t.J),me(r,"RID",n),me(r,"AID",t.U),vl(t,r),t.o&&t.s&&Gg(r,t.o,t.s),n=new pl(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=L1(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Wg(t.i,n),Cp(n,r,e)}function vl(t,e){t.j&&zg({},function(n,r){me(e,r,n)})}function L1(t,e,n){n=Math.min(t.l.length,n);var r=t.j?Qe(t.j.Oa,t.j,t):null;e:{var i=t.l;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{tF(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function F1(t){t.g||t.u||(t.Y=1,Fg(t.Ga,t),t.A=0)}function Yg(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=dl(Qe(t.Ga,t),V1(t,t.A)),t.A++,!0)}A.Ga=function(){if(this.u=null,$1(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=dl(Qe(this.bb,this),t)}};A.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,pt(10),Ch(this),$1(this))};function Xg(t){t.B!=null&&(V.clearTimeout(t.B),t.B=null)}function $1(t){t.g=new pl(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=Gn(t.oa);me(e,"RID","rpc"),me(e,"SID",t.J),me(e,"CI",t.N?"0":"1"),me(e,"AID",t.U),vl(t,e),me(e,"TYPE","xmlhttp"),t.o&&t.s&&Gg(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=_h(Gn(e)),n.s=null,n.U=!0,g1(n,t)}A.ab=function(){this.v!=null&&(this.v=null,Ch(this),Yg(this),pt(19))};function Tc(t){t.v!=null&&(V.clearTimeout(t.v),t.v=null)}function U1(t,e){var n=null;if(t.g==e){Tc(t),Xg(t),t.g=null;var r=2}else if(Sp(t.i,e))n=e.D,N1(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=mh(),Ye(r,new d1(r,n)),Th(t)}else F1(t);else if(i=e.o,i==3||i==0&&0<t.I||!(r==1&&uF(t,e)||r==2&&Yg(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:ii(t,5);break;case 4:ii(t,10);break;case 3:ii(t,6);break;default:ii(t,2)}}}function V1(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function ii(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=Qe(t.jb,t);n||(n=new Ri("//www.google.com/images/cleardot.gif"),V.location&&V.location.protocol=="http"||wc(n,"https"),_h(n)),nF(n.toString(),r)}else pt(2);t.G=0,t.j&&t.j.va(e),B1(t),M1(t)}A.jb=function(t){t?(this.h.info("Successfully pinged google.com"),pt(2)):(this.h.info("Failed to ping google.com"),pt(1))};function B1(t){t.G=0,t.I=-1,t.j&&((R1(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,xg(t.l),t.l.length=0),t.j.ua())}function j1(t,e,n){let r=HL(n);if(r.i!="")e&&Ec(r,e+"."+r.i),Cc(r,r.m);else{const i=V.location;r=WL(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&bg(t.aa,function(i,s){me(r,s,i)}),e=t.D,n=t.sa,e&&n&&me(r,e,n),me(r,"VER",t.ma),vl(t,r),r}function z1(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Ne(new gl({ib:!0})):new Ne(t.qa),e.L=t.H,e}function H1(){}A=H1.prototype;A.xa=function(){};A.wa=function(){};A.va=function(){};A.ua=function(){};A.Oa=function(){};function Sc(){if(Us&&!(10<=Number(CL)))throw Error("Environmental error: no available transport.")}Sc.prototype.g=function(t,e){return new Ft(t,e)};function Ft(t,e){He.call(this),this.g=new D1(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!yc(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!yc(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new oo(this)}Ze(Ft,He);Ft.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Fg(Qe(t.hb,t,e))),pt(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=j1(t,null,t.W),Th(t)};Ft.prototype.close=function(){Qg(this.g)};Ft.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,Od(this.g,e)}else this.v?(e={},e.__data__=Lg(t),Od(this.g,e)):Od(this.g,t)};Ft.prototype.M=function(){this.g.j=null,delete this.j,Qg(this.g),delete this.g,Ft.Z.M.call(this)};function W1(t){Bg.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ze(W1,Bg);function q1(){jg.call(this),this.status=1}Ze(q1,jg);function oo(t){this.g=t}Ze(oo,H1);oo.prototype.xa=function(){Ye(this.g,"a")};oo.prototype.wa=function(t){Ye(this.g,new W1(t))};oo.prototype.va=function(t){Ye(this.g,new q1)};oo.prototype.ua=function(){Ye(this.g,"b")};Sc.prototype.createWebChannel=Sc.prototype.g;Ft.prototype.send=Ft.prototype.u;Ft.prototype.open=Ft.prototype.m;Ft.prototype.close=Ft.prototype.close;gh.NO_ERROR=0;gh.TIMEOUT=8;gh.HTTP_ERROR=6;f1.COMPLETE="complete";p1.EventType=fl;fl.OPEN="a";fl.CLOSE="b";fl.ERROR="c";fl.MESSAGE="d";He.prototype.listen=He.prototype.N;Ne.prototype.listenOnce=Ne.prototype.O;Ne.prototype.getLastError=Ne.prototype.La;Ne.prototype.getLastErrorCode=Ne.prototype.Da;Ne.prototype.getStatus=Ne.prototype.ba;Ne.prototype.getResponseJson=Ne.prototype.Qa;Ne.prototype.getResponseText=Ne.prototype.ga;Ne.prototype.send=Ne.prototype.ea;var cF=function(){return new Sc},hF=function(){return mh()},Dd=gh,dF=f1,fF=Ui,k0={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},pF=gl,Jl=p1,mF=Ne;const N0="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}_t.UNAUTHENTICATED=new _t(null),_t.GOOGLE_CREDENTIALS=new _t("google-credentials-uid"),_t.FIRST_PARTY=new _t("first-party-uid"),_t.MOCK_USER=new _t("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ao="9.9.4";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi=new Za("@firebase/firestore");function R0(){return xi.logLevel}function D(t,...e){if(xi.logLevel<=J.DEBUG){const n=e.map(Jg);xi.debug(`Firestore (${ao}): ${t}`,...n)}}function Qn(t,...e){if(xi.logLevel<=J.ERROR){const n=e.map(Jg);xi.error(`Firestore (${ao}): ${t}`,...n)}}function x0(t,...e){if(xi.logLevel<=J.WARN){const n=e.map(Jg);xi.warn(`Firestore (${ao}): ${t}`,...n)}}function Jg(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function j(t="Unexpected state"){const e=`FIRESTORE (${ao}) INTERNAL ASSERTION FAILED: `+t;throw Qn(e),new Error(e)}function le(t,e){t||j()}function z(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends Xt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gF{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class yF{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(_t.UNAUTHENTICATED))}shutdown(){}}class vF{constructor(e){this.t=e,this.currentUser=_t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new hi;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new hi,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new hi)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(le(typeof r.accessToken=="string"),new gF(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return le(e===null||typeof e=="string"),new _t(e)}}class _F{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=_t.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(le(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class wF{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new _F(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(_t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class EF{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class CF{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=s=>{s.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,D("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?i(s):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(le(typeof n.token=="string"),this.A=n.token,new EF(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function TF(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K1{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=TF(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ne(t,e){return t<e?-1:t>e?1:0}function Vs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new M(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new M(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new M(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new M(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Pe.fromMillis(Date.now())}static fromDate(e){return Pe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Pe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new q(e)}static min(){return new q(new Pe(0,0))}static max(){return new q(new Pe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e,n,r){n===void 0?n=0:n>e.length&&j(),r===void 0?r=e.length-n:r>e.length-n&&j(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return La.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof La?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ge extends La{construct(e,n,r){return new ge(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new M(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ge(n)}static emptyPath(){return new ge([])}}const SF=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ot extends La{construct(e,n,r){return new ot(e,n,r)}static isValidIdentifier(e){return SF.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ot.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ot(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new M(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new M(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new M(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new M(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ot(n)}static emptyPath(){return new ot([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.path=e}static fromPath(e){return new L(ge.fromString(e))}static fromName(e){return new L(ge.fromString(e).popFirst(5))}static empty(){return new L(ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ge.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new L(new ge(e.slice()))}}function IF(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=q.fromTimestamp(r===1e9?new Pe(n+1,0):new Pe(n,r));return new Dr(i,L.empty(),e)}function kF(t){return new Dr(t.readTime,t.key,-1)}class Dr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Dr(q.min(),L.empty(),-1)}static max(){return new Dr(q.max(),L.empty(),-1)}}function NF(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=L.comparator(t.documentKey,e.documentKey),n!==0?n:ne(t.largestBatchId,e.largestBatchId))}/**
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
 */const RF="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class xF{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _l(t){if(t.code!==C.FAILED_PRECONDITION||t.message!==RF)throw t;D("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&j(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new S((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof S?n:S.resolve(n)}catch(n){return S.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):S.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):S.reject(n)}static resolve(e){return new S((n,r)=>{n(e)})}static reject(e){return new S((n,r)=>{r(e)})}static waitFor(e){return new S((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=S.resolve(!1);for(const r of e)n=n.next(i=>i?S.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new S((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new S((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function wl(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Zg{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function lo(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function G1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zg.at=-1;class Me{constructor(e,n){this.comparator=e,this.root=n||qe.EMPTY}insert(e,n){return new Me(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,qe.BLACK,null,null))}remove(e){return new Me(this.comparator,this.root.remove(e,this.comparator).copy(null,null,qe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Zl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Zl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Zl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Zl(this.root,e,this.comparator,!0)}}class Zl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class qe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:qe.RED,this.left=i!=null?i:qe.EMPTY,this.right=s!=null?s:qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new qe(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return qe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw j();const e=this.left.check();if(e!==this.right.check())throw j();return e+(this.isRed()?0:1)}}qe.EMPTY=null,qe.RED=!0,qe.BLACK=!1;qe.EMPTY=new class{constructor(){this.size=0}get key(){throw j()}get value(){throw j()}get color(){throw j()}get left(){throw j()}get right(){throw j()}copy(t,e,n,r,i){return this}insert(t,e,n){return new qe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e){this.comparator=e,this.data=new Me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new A0(this.data.getIterator())}getIteratorFrom(e){return new A0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Oe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Oe(this.comparator);return n.data=e,n}}class A0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class En{constructor(e){this.fields=e,e.sort(ot.comparator)}static empty(){return new En([])}unionWith(e){let n=new Oe(ot.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new En(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Vs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Je{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Je(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Je(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Je.EMPTY_BYTE_STRING=new Je("");const bF=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Mr(t){if(le(!!t),typeof t=="string"){let e=0;const n=bF.exec(t);if(le(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Se(t.seconds),nanos:Se(t.nanos)}}function Se(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Bs(t){return typeof t=="string"?Je.fromBase64String(t):Je.fromUint8Array(t)}/**
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
 */function Q1(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Y1(t){const e=t.mapValue.fields.__previous_value__;return Q1(e)?Y1(e):e}function Fa(t){const e=Mr(t.mapValue.fields.__local_write_time__.timestampValue);return new Pe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AF{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class $a{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new $a("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof $a&&e.projectId===this.projectId&&e.database===this.database}}function Sh(t){return t==null}function Ic(t){return t===0&&1/t==-1/0}function PF(t){return typeof t=="number"&&Number.isInteger(t)&&!Ic(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const eu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function bi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Q1(t)?4:OF(t)?9007199254740991:10:j()}function Sn(t,e){if(t===e)return!0;const n=bi(t);if(n!==bi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Fa(t).isEqual(Fa(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Mr(r.timestampValue),o=Mr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Bs(r.bytesValue).isEqual(Bs(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Se(r.geoPointValue.latitude)===Se(i.geoPointValue.latitude)&&Se(r.geoPointValue.longitude)===Se(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Se(r.integerValue)===Se(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Se(r.doubleValue),o=Se(i.doubleValue);return s===o?Ic(s)===Ic(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return Vs(t.arrayValue.values||[],e.arrayValue.values||[],Sn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(b0(s)!==b0(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Sn(s[a],o[a])))return!1;return!0}(t,e);default:return j()}}function Ua(t,e){return(t.values||[]).find(n=>Sn(n,e))!==void 0}function js(t,e){if(t===e)return 0;const n=bi(t),r=bi(e);if(n!==r)return ne(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ne(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Se(i.integerValue||i.doubleValue),a=Se(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return P0(t.timestampValue,e.timestampValue);case 4:return P0(Fa(t),Fa(e));case 5:return ne(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Bs(i),a=Bs(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=ne(o[l],a[l]);if(u!==0)return u}return ne(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=ne(Se(i.latitude),Se(s.latitude));return o!==0?o:ne(Se(i.longitude),Se(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=js(o[l],a[l]);if(u)return u}return ne(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===eu.mapValue&&s===eu.mapValue)return 0;if(i===eu.mapValue)return 1;if(s===eu.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=ne(a[c],u[c]);if(h!==0)return h;const d=js(o[a[c]],l[u[c]]);if(d!==0)return d}return ne(a.length,u.length)}(t.mapValue,e.mapValue);default:throw j()}}function P0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ne(t,e);const n=Mr(t),r=Mr(e),i=ne(n.seconds,r.seconds);return i!==0?i:ne(n.nanos,r.nanos)}function Ts(t){return Ip(t)}function Ip(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=Mr(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Bs(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,L.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Ip(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Ip(r.fields[a])}`;return s+"}"}(t.mapValue):j();var e,n}function kp(t){return!!t&&"integerValue"in t}function ey(t){return!!t&&"arrayValue"in t}function O0(t){return!!t&&"nullValue"in t}function D0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function wu(t){return!!t&&"mapValue"in t}function Jo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return lo(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Jo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Jo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function OF(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.value=e}static empty(){return new zt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!wu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Jo(n)}setAll(e){let n=ot.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Jo(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());wu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Sn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];wu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){lo(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new zt(Jo(this.value))}}function X1(t){const e=[];return lo(t.fields,(n,r)=>{const i=new ot([n]);if(wu(r)){const s=X1(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new En(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,n,r,i,s,o){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new Ke(e,0,q.min(),q.min(),zt.empty(),0)}static newFoundDocument(e,n,r){return new Ke(e,1,n,q.min(),r,0)}static newNoDocument(e,n){return new Ke(e,2,n,q.min(),zt.empty(),0)}static newUnknownDocument(e,n){return new Ke(e,3,n,q.min(),zt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=zt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=zt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ke&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ke(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class DF{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ht=null}}function M0(t,e=null,n=[],r=[],i=null,s=null,o=null){return new DF(t,e,n,r,i,s,o)}function ty(t){const e=z(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(i=r).field.canonicalString()+i.op.toString()+Ts(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Sh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ts(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ts(r)).join(",")),e.ht=n}return e.ht}function MF(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${Ts(r.value)}`;var r}).join(", ")}]`),Sh(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Ts(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Ts(n)).join(",")),`Target(${e})`}function ny(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!zF(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!Sn(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!F0(t.startAt,e.startAt)&&F0(t.endAt,e.endAt)}function Np(t){return L.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class It extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,r):new LF(e,n,r):n==="array-contains"?new UF(e,r):n==="in"?new VF(e,r):n==="not-in"?new BF(e,r):n==="array-contains-any"?new jF(e,r):new It(e,n,r)}static lt(e,n,r){return n==="in"?new FF(e,r):new $F(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(js(n,this.value)):n!==null&&bi(this.value)===bi(n)&&this.ft(js(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return j()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class LF extends It{constructor(e,n,r){super(e,n,r),this.key=L.fromName(r.referenceValue)}matches(e){const n=L.comparator(e.key,this.key);return this.ft(n)}}class FF extends It{constructor(e,n){super(e,"in",n),this.keys=J1("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class $F extends It{constructor(e,n){super(e,"not-in",n),this.keys=J1("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function J1(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>L.fromName(r.referenceValue))}class UF extends It{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ey(n)&&Ua(n.arrayValue,this.value)}}class VF extends It{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ua(this.value.arrayValue,n)}}class BF extends It{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ua(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ua(this.value.arrayValue,n)}}class jF extends It{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ey(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ua(this.value.arrayValue,r))}}class kc{constructor(e,n){this.position=e,this.inclusive=n}}class Ss{constructor(e,n="asc"){this.field=e,this.dir=n}}function zF(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function L0(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=L.comparator(L.fromName(o.referenceValue),n.key):r=js(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function F0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Sn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this._t=null,this.wt=null,this.startAt,this.endAt}}function HF(t,e,n,r,i,s,o,a){return new El(t,e,n,r,i,s,o,a)}function ry(t){return new El(t)}function $0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Z1(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function eI(t){for(const e of t.filters)if(e.dt())return e.field;return null}function WF(t){return t.collectionGroup!==null}function Va(t){const e=z(t);if(e._t===null){e._t=[];const n=eI(e),r=Z1(e);if(n!==null&&r===null)n.isKeyField()||e._t.push(new Ss(n)),e._t.push(new Ss(ot.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e._t.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new Ss(ot.keyField(),s))}}}return e._t}function Yn(t){const e=z(t);if(!e.wt)if(e.limitType==="F")e.wt=M0(e.path,e.collectionGroup,Va(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Va(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Ss(s.field,o))}const r=e.endAt?new kc(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new kc(e.startAt.position,e.startAt.inclusive):null;e.wt=M0(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.wt}function Nc(t,e,n){return new El(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Cl(t,e){return ny(Yn(t),Yn(e))&&t.limitType===e.limitType}function tI(t){return`${ty(Yn(t))}|lt:${t.limitType}`}function Rp(t){return`Query(target=${MF(Yn(t))}; limitType=${t.limitType})`}function iy(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):L.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=L0(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Va(n),r)||n.endAt&&!function(i,s,o){const a=L0(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Va(n),r))}(t,e)}function qF(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function nI(t){return(e,n)=>{let r=!1;for(const i of Va(t)){const s=KF(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function KF(t,e,n){const r=t.field.isKeyField()?L.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?js(a,l):j()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return j()}}/**
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
 */function rI(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ic(e)?"-0":e}}function iI(t){return{integerValue:""+t}}function GF(t,e){return PF(e)?iI(e):rI(t,e)}/**
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
 */class Ih{constructor(){this._=void 0}}function QF(t,e,n){return t instanceof Ba?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof ja?oI(t,e):t instanceof za?aI(t,e):function(r,i){const s=sI(r,i),o=U0(s)+U0(r.yt);return kp(s)&&kp(r.yt)?iI(o):rI(r.It,o)}(t,e)}function YF(t,e,n){return t instanceof ja?oI(t,e):t instanceof za?aI(t,e):n}function sI(t,e){return t instanceof Rc?kp(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Ba extends Ih{}class ja extends Ih{constructor(e){super(),this.elements=e}}function oI(t,e){const n=lI(e);for(const r of t.elements)n.some(i=>Sn(i,r))||n.push(r);return{arrayValue:{values:n}}}class za extends Ih{constructor(e){super(),this.elements=e}}function aI(t,e){let n=lI(e);for(const r of t.elements)n=n.filter(i=>!Sn(i,r));return{arrayValue:{values:n}}}class Rc extends Ih{constructor(e,n){super(),this.It=e,this.yt=n}}function U0(t){return Se(t.integerValue||t.doubleValue)}function lI(t){return ey(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XF{constructor(e,n){this.field=e,this.transform=n}}function JF(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof ja&&r instanceof ja||n instanceof za&&r instanceof za?Vs(n.elements,r.elements,Sn):n instanceof Rc&&r instanceof Rc?Sn(n.yt,r.yt):n instanceof Ba&&r instanceof Ba}(t.transform,e.transform)}class ZF{constructor(e,n){this.version=e,this.transformResults=n}}class Cn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Cn}static exists(e){return new Cn(void 0,e)}static updateTime(e){return new Cn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Eu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class kh{}function uI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new sy(t.key,Cn.none()):new Tl(t.key,t.data,Cn.none());{const n=t.data,r=zt.empty();let i=new Oe(ot.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Vi(t.key,r,new En(i.toArray()),Cn.none())}}function e$(t,e,n){t instanceof Tl?function(r,i,s){const o=r.value.clone(),a=B0(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Vi?function(r,i,s){if(!Eu(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=B0(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(cI(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Zo(t,e,n,r){return t instanceof Tl?function(i,s,o,a){if(!Eu(i.precondition,s))return o;const l=i.value.clone(),u=j0(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Vi?function(i,s,o,a){if(!Eu(i.precondition,s))return o;const l=j0(i.fieldTransforms,a,s),u=s.data;return u.setAll(cI(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return Eu(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function t$(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=sI(r.transform,i||null);s!=null&&(n===null&&(n=zt.empty()),n.set(r.field,s))}return n||null}function V0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Vs(n,r,(i,s)=>JF(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Tl extends kh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Vi extends kh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function cI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function B0(t,e,n){const r=new Map;le(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,YF(o,a,n[i]))}return r}function j0(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,QF(s,o,e))}return r}class sy extends kh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class n$ extends kh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r${constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Te,X;function i$(t){switch(t){default:return j();case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0}}function hI(t){if(t===void 0)return Qn("GRPC error has no .code"),C.UNKNOWN;switch(t){case Te.OK:return C.OK;case Te.CANCELLED:return C.CANCELLED;case Te.UNKNOWN:return C.UNKNOWN;case Te.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case Te.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case Te.INTERNAL:return C.INTERNAL;case Te.UNAVAILABLE:return C.UNAVAILABLE;case Te.UNAUTHENTICATED:return C.UNAUTHENTICATED;case Te.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case Te.NOT_FOUND:return C.NOT_FOUND;case Te.ALREADY_EXISTS:return C.ALREADY_EXISTS;case Te.PERMISSION_DENIED:return C.PERMISSION_DENIED;case Te.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case Te.ABORTED:return C.ABORTED;case Te.OUT_OF_RANGE:return C.OUT_OF_RANGE;case Te.UNIMPLEMENTED:return C.UNIMPLEMENTED;case Te.DATA_LOSS:return C.DATA_LOSS;default:return j()}}(X=Te||(Te={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){lo(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return G1(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s$=new Me(L.comparator);function Xn(){return s$}const dI=new Me(L.comparator);function Oo(...t){let e=dI;for(const n of t)e=e.insert(n.key,n);return e}function fI(t){let e=dI;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function si(){return ea()}function pI(){return ea()}function ea(){return new uo(t=>t.toString(),(t,e)=>t.isEqual(e))}const o$=new Me(L.comparator),a$=new Oe(L.comparator);function Q(...t){let e=a$;for(const n of t)e=e.add(n);return e}const l$=new Oe(ne);function mI(){return l$}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,Sl.createSynthesizedTargetChangeForCurrentChange(e,n)),new Nh(q.min(),r,mI(),Xn(),Q())}}class Sl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Sl(Je.EMPTY_BYTE_STRING,n,Q(),Q(),Q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e,n,r,i){this.Tt=e,this.removedTargetIds=n,this.key=r,this.Et=i}}class gI{constructor(e,n){this.targetId=e,this.At=n}}class yI{constructor(e,n,r=Je.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class z0{constructor(){this.Rt=0,this.bt=W0(),this.Pt=Je.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=Q(),n=Q(),r=Q();return this.bt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:j()}}),new Sl(this.Pt,this.vt,e,n,r)}Nt(){this.Vt=!1,this.bt=W0()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Mt(e){this.Vt=!0,this.bt=this.bt.remove(e)}Ot(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class u${constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=Xn(),this.qt=H0(),this.Kt=new Oe(ne)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const r=this.zt(n);switch(e.state){case 0:this.Ht(n)&&r.Ct(e.resumeToken);break;case 1:r.Ft(),r.St||r.Nt(),r.Ct(e.resumeToken);break;case 2:r.Ft(),r.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(r.$t(),r.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),r.Ct(e.resumeToken));break;default:j()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((r,i)=>{this.Ht(i)&&n(i)})}Yt(e){const n=e.targetId,r=e.At.count,i=this.Xt(n);if(i){const s=i.target;if(Np(s))if(r===0){const o=new L(s.path);this.jt(n,o,Ke.newNoDocument(o,q.min()))}else le(r===1);else this.Zt(n)!==r&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((s,o)=>{const a=this.Xt(o);if(a){if(s.current&&Np(a.target)){const l=new L(a.target.path);this.Ut.get(l)!==null||this.ee(o,l)||this.jt(o,l,Ke.newNoDocument(l,e))}s.Dt&&(n.set(o,s.xt()),s.Nt())}});let r=Q();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Xt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ut.forEach((s,o)=>o.setReadTime(e));const i=new Nh(e,n,this.Kt,this.Ut,r);return this.Ut=Xn(),this.qt=H0(),this.Kt=new Oe(ne),i}Qt(e,n){if(!this.Ht(e))return;const r=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,r),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,r){if(!this.Ht(e))return;const i=this.zt(e);this.ee(e,n)?i.kt(n,1):i.Mt(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),r&&(this.Ut=this.Ut.insert(n,r))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.zt(e).Ot()}zt(e){let n=this.Lt.get(e);return n||(n=new z0,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new Oe(ne),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||D("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new z0),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function H0(){return new Me(L.comparator)}function W0(){return new Me(L.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c$=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),h$=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class d${constructor(e,n){this.databaseId=e,this.gt=n}}function xc(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function vI(t,e){return t.gt?e.toBase64():e.toUint8Array()}function f$(t,e){return xc(t,e.toTimestamp())}function Bn(t){return le(!!t),q.fromTimestamp(function(e){const n=Mr(e);return new Pe(n.seconds,n.nanos)}(t))}function oy(t,e){return function(n){return new ge(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function _I(t){const e=ge.fromString(t);return le(CI(e)),e}function xp(t,e){return oy(t.databaseId,e.path)}function Md(t,e){const n=_I(e);if(n.get(1)!==t.databaseId.projectId)throw new M(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new M(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new L(wI(n))}function bp(t,e){return oy(t.databaseId,e)}function p$(t){const e=_I(t);return e.length===4?ge.emptyPath():wI(e)}function Ap(t){return new ge(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function wI(t){return le(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function q0(t,e,n){return{name:xp(t,e),fields:n.value.mapValue.fields}}function m$(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:j()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.gt?(le(u===void 0||typeof u=="string"),Je.fromBase64String(u||"")):(le(u===void 0||u instanceof Uint8Array),Je.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?C.UNKNOWN:hI(l.code);return new M(u,l.message||"")}(o);n=new yI(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Md(t,r.document.name),s=Bn(r.document.updateTime),o=new zt({mapValue:{fields:r.document.fields}}),a=Ke.newFoundDocument(i,s,o),l=r.targetIds||[],u=r.removedTargetIds||[];n=new Cu(l,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Md(t,r.document),s=r.readTime?Bn(r.readTime):q.min(),o=Ke.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Cu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Md(t,r.document),s=r.removedTargetIds||[];n=new Cu([],s,i,null)}else{if(!("filter"in e))return j();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new r$(i),o=r.targetId;n=new gI(o,s)}}return n}function g$(t,e){let n;if(e instanceof Tl)n={update:q0(t,e.key,e.value)};else if(e instanceof sy)n={delete:xp(t,e.key)};else if(e instanceof Vi)n={update:q0(t,e.key,e.data),updateMask:k$(e.fieldMask)};else{if(!(e instanceof n$))return j();n={verify:xp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Ba)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ja)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof za)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Rc)return{fieldPath:s.field.canonicalString(),increment:o.yt};throw j()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:f$(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:j()}(t,e.precondition)),n}function y$(t,e){return t&&t.length>0?(le(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Bn(r.updateTime):Bn(i);return s.isEqual(q.min())&&(s=Bn(i)),new ZF(s,r.transformResults||[])}(n,e))):[]}function v$(t,e){return{documents:[bp(t,e.path)]}}function _$(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=bp(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=bp(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length===0)return;const u=l.map(c=>function(h){if(h.op==="=="){if(D0(h.value))return{unaryFilter:{field:Wi(h.field),op:"IS_NAN"}};if(O0(h.value))return{unaryFilter:{field:Wi(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(D0(h.value))return{unaryFilter:{field:Wi(h.field),op:"IS_NOT_NAN"}};if(O0(h.value))return{unaryFilter:{field:Wi(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Wi(h.field),op:T$(h.op),value:h.value}}}(c));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:Wi(c.field),direction:C$(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.gt||Sh(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function w$(t){let e=p$(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){le(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=EI(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new Ss(hs(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,Sh(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new kc(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new kc(d,h)}(n.endAt)),HF(e,i,o,s,a,"F",l,u)}function E$(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return j()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function EI(t){return t?t.unaryFilter!==void 0?[I$(t)]:t.fieldFilter!==void 0?[S$(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>EI(e)).reduce((e,n)=>e.concat(n)):j():[]}function C$(t){return c$[t]}function T$(t){return h$[t]}function Wi(t){return{fieldPath:t.canonicalString()}}function hs(t){return ot.fromServerFormat(t.fieldPath)}function S$(t){return It.create(hs(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return j()}}(t.fieldFilter.op),t.fieldFilter.value)}function I$(t){switch(t.unaryFilter.op){case"IS_NAN":const e=hs(t.unaryFilter.field);return It.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=hs(t.unaryFilter.field);return It.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=hs(t.unaryFilter.field);return It.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=hs(t.unaryFilter.field);return It.create(i,"!=",{nullValue:"NULL_VALUE"});default:return j()}}function k$(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function CI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N${constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&e$(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Zo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Zo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=pI();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=uI(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(q.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Q())}isEqual(e){return this.batchId===e.batchId&&Vs(this.mutations,e.mutations,(n,r)=>V0(n,r))&&Vs(this.baseMutations,e.baseMutations,(n,r)=>V0(n,r))}}class ay{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){le(e.mutations.length===r.length);let i=o$;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new ay(e,n,r,i)}}/**
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
 */class R${constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class di{constructor(e,n,r,i,s=q.min(),o=q.min(),a=Je.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new di(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new di(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new di(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x${constructor(e){this.re=e}}function b$(t){const e=w$({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Nc(e,e.limit,"L"):e}/**
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
 */class A${constructor(){this.Ye=new P$}addToCollectionParentIndex(e,n){return this.Ye.add(n),S.resolve()}getCollectionParents(e,n){return S.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return S.resolve()}deleteFieldIndex(e,n){return S.resolve()}getDocumentsMatchingTarget(e,n){return S.resolve(null)}getIndexType(e,n){return S.resolve(0)}getFieldIndexes(e,n){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,n){return S.resolve(Dr.min())}getMinOffsetFromCollectionGroup(e,n){return S.resolve(Dr.min())}updateCollectionGroup(e,n,r){return S.resolve()}updateIndexEntries(e,n){return S.resolve()}}class P${constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Oe(ge.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Oe(ge.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new zs(0)}static vn(){return new zs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O${constructor(){this.changes=new uo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ke.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?S.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class D${constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M${constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.getBaseDocument(e,n,r))).next(i=>(r!==null&&Zo(r.mutation,i,En.empty(),Pe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Q()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Q()){const i=si();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Oo();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=si();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Q()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Xn();const o=ea(),a=ea();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Vi)?s=s.insert(u.key,u):c!==void 0&&(o.set(u.key,c.mutation.getFieldMask()),Zo(c.mutation,u,c.mutation.getFieldMask(),Pe.now()))}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new D$(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ea();let i=new Me((o,a)=>o-a),s=Q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||En.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||Q()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=pI();c.forEach(d=>{if(!s.has(d)){const f=uI(n.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return S.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return L.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):WF(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):S.resolve(si());let a=-1,l=s;return o.next(u=>S.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?S.resolve():this.getBaseDocument(e,c,h).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,Q())).next(c=>({batchId:a,changes:fI(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new L(n)).next(r=>{let i=Oo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Oo();return this.indexManager.getCollectionParents(e,i).next(o=>S.forEach(o,a=>{const l=function(u,c){return new El(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(s=>{s.forEach((a,l)=>{const u=l.getKey();i.get(u)===null&&(i=i.insert(u,Ke.newInvalidDocument(u)))});let o=Oo();return i.forEach((a,l)=>{const u=s.get(a);u!==void 0&&Zo(u.mutation,l,En.empty(),Pe.now()),iy(n,l)&&(o=o.insert(a,l))}),o})}getBaseDocument(e,n,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):S.resolve(Ke.newInvalidDocument(n))}}/**
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
 */class L${constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return S.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:Bn(r.createTime)}),S.resolve()}getNamedQuery(e,n){return S.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(r){return{name:r.name,query:b$(r.bundledQuery),readTime:Bn(r.readTime)}}(n)),S.resolve()}}/**
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
 */class F${constructor(){this.overlays=new Me(L.comparator),this.es=new Map}getOverlay(e,n){return S.resolve(this.overlays.get(n))}getOverlays(e,n){const r=si();return S.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ue(e,n,s)}),S.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.es.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.es.delete(r)),S.resolve()}getOverlaysForCollection(e,n,r){const i=si(),s=n.length+1,o=new L(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return S.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Me((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=si(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=si(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return S.resolve(a)}ue(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(r.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new R$(n,r));let s=this.es.get(n);s===void 0&&(s=Q(),this.es.set(n,s)),this.es.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(){this.ns=new Oe(Fe.ss),this.rs=new Oe(Fe.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const r=new Fe(e,n);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.cs(new Fe(e,n))}hs(e,n){e.forEach(r=>this.removeReference(r,n))}ls(e){const n=new L(new ge([])),r=new Fe(n,e),i=new Fe(n,e+1),s=[];return this.rs.forEachInRange([r,i],o=>{this.cs(o),s.push(o.key)}),s}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new L(new ge([])),r=new Fe(n,e),i=new Fe(n,e+1);let s=Q();return this.rs.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Fe(e,0),r=this.ns.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Fe{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return L.comparator(e.key,n.key)||ne(e._s,n._s)}static os(e,n){return ne(e._s,n._s)||L.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $${constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new Oe(Fe.ss)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new N$(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new Fe(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,n){return S.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ps(r),s=i<0?0:i;return S.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Fe(n,0),i=new Fe(n,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([r,i],o=>{const a=this.ys(o._s);s.push(a)}),S.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Oe(ne);return n.forEach(i=>{const s=new Fe(i,0),o=new Fe(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([s,o],a=>{r=r.add(a._s)})}),S.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;L.isDocumentKey(s)||(s=s.child(""));const o=new Fe(new L(s),0);let a=new Oe(ne);return this.gs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l._s)),!0)},o),S.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(r=>{const i=this.ys(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){le(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return S.forEach(n.mutations,i=>{const s=new Fe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,n){const r=new Fe(n,0),i=this.gs.firstAfterOrEqual(r);return S.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U${constructor(e){this.Es=e,this.docs=new Me(L.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return S.resolve(r?r.document.mutableCopy():Ke.newInvalidDocument(n))}getEntries(e,n){let r=Xn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ke.newInvalidDocument(i))}),S.resolve(r)}getAllFromCollection(e,n,r){let i=Xn();const s=new L(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||NF(kF(l),r)<=0||(i=i.insert(l.key,l.mutableCopy()))}return S.resolve(i)}getAllFromCollectionGroup(e,n,r,i){j()}As(e,n){return S.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new V$(this)}getSize(e){return S.resolve(this.size)}}class V$ extends O${constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(r)}),S.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B${constructor(e){this.persistence=e,this.Rs=new uo(n=>ty(n),ny),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.bs=0,this.Ps=new ly,this.targetCount=0,this.vs=zs.Pn()}forEachTarget(e,n){return this.Rs.forEach((r,i)=>n(i)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),S.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new zs(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,S.resolve()}updateTargetData(e,n){return this.Dn(n),S.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Rs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),S.waitFor(s).next(()=>i)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,n){const r=this.Rs.get(n)||null;return S.resolve(r)}addMatchingKeys(e,n,r){return this.Ps.us(n,r),S.resolve()}removeMatchingKeys(e,n,r){this.Ps.hs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),S.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),S.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ps.ds(n);return S.resolve(r)}containsKey(e,n){return S.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j${constructor(e,n){this.Vs={},this.overlays={},this.Ss=new Zg(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new B$(this),this.indexManager=new A$,this.remoteDocumentCache=function(r){return new U$(r)}(r=>this.referenceDelegate.xs(r)),this.It=new x$(n),this.Ns=new L$(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new F$,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Vs[e.toKey()];return r||(r=new $$(n,this.referenceDelegate),this.Vs[e.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,r){D("MemoryPersistence","Starting transaction:",e);const i=new z$(this.Ss.next());return this.referenceDelegate.ks(),r(i).next(s=>this.referenceDelegate.Ms(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Os(e,n){return S.or(Object.values(this.Vs).map(r=>()=>r.containsKey(e,n)))}}class z$ extends xF{constructor(e){super(),this.currentSequenceNumber=e}}class uy{constructor(e){this.persistence=e,this.Fs=new ly,this.$s=null}static Bs(e){return new uy(e)}get Ls(){if(this.$s)return this.$s;throw j()}addReference(e,n,r){return this.Fs.addReference(r,n),this.Ls.delete(r.toString()),S.resolve()}removeReference(e,n,r){return this.Fs.removeReference(r,n),this.Ls.add(r.toString()),S.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),S.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ls.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}ks(){this.$s=new Set}Ms(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Ls,r=>{const i=L.fromPath(r);return this.Us(e,i).next(s=>{s||n.removeEntry(i,q.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(r=>{r?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return S.or([()=>S.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cy{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Si=r,this.Di=i}static Ci(e,n){let r=Q(),i=Q();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new cy(e,n.fromCache,r,i)}}/**
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
 */class H${constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.ki(e,n).next(s=>s||this.Mi(e,n,i,r)).next(s=>s||this.Oi(e,n))}ki(e,n){if($0(n))return S.resolve(null);let r=Yn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Nc(n,null,"F"),r=Yn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Q(...s);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Fi(n,a);return this.$i(n,u,o,l.readTime)?this.ki(e,Nc(n,null,"F")):this.Bi(e,u,n,l)}))})))}Mi(e,n,r,i){return $0(n)||i.isEqual(q.min())?this.Oi(e,n):this.Ni.getDocuments(e,r).next(s=>{const o=this.Fi(n,s);return this.$i(n,o,r,i)?this.Oi(e,n):(R0()<=J.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Rp(n)),this.Bi(e,o,n,IF(i,-1)))})}Fi(e,n){let r=new Oe(nI(e));return n.forEach((i,s)=>{iy(e,s)&&(r=r.add(s))}),r}$i(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Oi(e,n){return R0()<=J.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",Rp(n)),this.Ni.getDocumentsMatchingQuery(e,n,Dr.min())}Bi(e,n,r,i){return this.Ni.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class W${constructor(e,n,r,i){this.persistence=e,this.Li=n,this.It=i,this.Ui=new Me(ne),this.qi=new uo(s=>ty(s),ny),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(r)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new M$(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function q$(t,e,n,r){return new W$(t,e,n,r)}async function TI(t,e){const n=z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Qi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=Q();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function K$(t,e){const n=z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let d=S.resolve();return h.forEach(f=>{d=d.next(()=>u.getEntry(a,f)).next(g=>{const v=l.docVersions.get(f);le(v!==null),g.version.compareTo(v)<0&&(c.applyToRemoteDocument(g,l),g.isValidDocument()&&(g.setReadTime(l.commitVersion),u.addEntry(g)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=Q();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function SI(t){const e=z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function G$(t,e){const n=z(t),r=e.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(s,c.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?f=f.withResumeToken(Je.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):c.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(c.resumeToken,r)),i=i.insert(h,f),function(g,v,w){return g.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(d,f,c)&&a.push(n.Cs.updateTargetData(s,f))});let l=Xn(),u=Q();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(Q$(s,o,e.documentUpdates).next(c=>{l=c.Wi,u=c.zi})),!r.isEqual(q.min())){const c=n.Cs.getLastRemoteSnapshotVersion(s).next(h=>n.Cs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return S.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ui=i,s))}function Q$(t,e,n){let r=Q(),i=Q();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Xn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(q.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):D("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Wi:o,zi:i}})}function Y$(t,e){const n=z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function X$(t,e){const n=z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Cs.getTargetData(r,e).next(s=>s?(i=s,S.resolve(i)):n.Cs.allocateTargetId(r).next(o=>(i=new di(e,o,0,r.currentSequenceNumber),n.Cs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ui.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(r.targetId,r),n.qi.set(e,r.targetId)),r})}async function Pp(t,e,n){const r=z(t),i=r.Ui.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!wl(o))throw o;D("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ui=r.Ui.remove(e),r.qi.delete(i.target)}function K0(t,e,n){const r=z(t);let i=q.min(),s=Q();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=z(a),h=c.qi.get(u);return h!==void 0?S.resolve(c.Ui.get(h)):c.Cs.getTargetData(l,u)}(r,o,Yn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Li.getDocumentsMatchingQuery(o,e,n?i:q.min(),n?s:Q())).next(a=>(J$(r,qF(e),a),{documents:a,Hi:s})))}function J$(t,e,n){let r=q.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ki.set(e,r)}class G0{constructor(){this.activeTargetIds=mI()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Z${constructor(){this.Lr=new G0,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,r){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new G0,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class e2{qr(e){}shutdown(){}}/**
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
 */class Q0{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){D("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){D("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const t2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n2{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r2 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}co(e,n,r,i,s){const o=this.ao(e,n);D("RestConnection","Sending: ",o,r);const a={};return this.ho(a,i,s),this.lo(e,o,a,r).then(l=>(D("RestConnection","Received: ",l),l),l=>{throw x0("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}fo(e,n,r,i,s,o){return this.co(e,n,r,i,s)}ho(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+ao,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ao(e,n){const r=t2[e];return`${this.oo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,r,i){return new Promise((s,o)=>{const a=new mF;a.listenOnce(dF.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Dd.NO_ERROR:const u=a.getResponseJson();D("Connection","XHR received:",JSON.stringify(u)),s(u);break;case Dd.TIMEOUT:D("Connection",'RPC "'+e+'" timed out'),o(new M(C.DEADLINE_EXCEEDED,"Request time out"));break;case Dd.HTTP_ERROR:const c=a.getStatus();if(D("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(f){const g=f.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(g)>=0?g:C.UNKNOWN}(h.status);o(new M(d,h.message))}else o(new M(C.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new M(C.UNAVAILABLE,"Connection failed."));break;default:j()}}finally{D("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,r,15)})}_o(e,n,r){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=cF(),o=hF(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new pF({})),this.ho(a.initMessageHeaders,n,r),Jc()||Vm()||$x()||qC()||Ux()||WC()||(a.httpHeadersOverwriteParam="$httpHeaders");const l=i.join("");D("Connection","Creating WebChannel: "+l,a);const u=s.createWebChannel(l,a);let c=!1,h=!1;const d=new n2({Hr:g=>{h?D("Connection","Not sending because WebChannel is closed:",g):(c||(D("Connection","Opening WebChannel transport."),u.open(),c=!0),D("Connection","WebChannel sending:",g),u.send(g))},Jr:()=>u.close()}),f=(g,v,w)=>{g.listen(v,m=>{try{w(m)}catch(p){setTimeout(()=>{throw p},0)}})};return f(u,Jl.EventType.OPEN,()=>{h||D("Connection","WebChannel transport opened.")}),f(u,Jl.EventType.CLOSE,()=>{h||(h=!0,D("Connection","WebChannel transport closed"),d.io())}),f(u,Jl.EventType.ERROR,g=>{h||(h=!0,x0("Connection","WebChannel transport errored:",g),d.io(new M(C.UNAVAILABLE,"The operation could not be completed")))}),f(u,Jl.EventType.MESSAGE,g=>{var v;if(!h){const w=g.data[0];le(!!w);const m=w,p=m.error||((v=m[0])===null||v===void 0?void 0:v.error);if(p){D("Connection","WebChannel received error:",p);const y=p.status;let _=function(N){const R=Te[N];if(R!==void 0)return hI(R)}(y),I=p.message;_===void 0&&(_=C.INTERNAL,I="Unknown error status: "+y+" with message "+p.message),h=!0,d.io(new M(_,I)),u.close()}else D("Connection","WebChannel received:",w),d.ro(w)}}),f(o,fF.STAT_EVENT,g=>{g.stat===k0.PROXY?D("Connection","Detected buffering proxy"):g.stat===k0.NOPROXY&&D("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function Ld(){return typeof document<"u"?document:null}/**
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
 */function Rh(t){return new d$(t,!0)}class II{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Hs=e,this.timerId=n,this.wo=r,this.mo=i,this.yo=s,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),r=Math.max(0,Date.now()-this.To),i=Math.max(0,n-r);i>0&&D("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Io=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this.wo&&(this.po=this.wo),this.po>this.yo&&(this.po=this.yo)}bo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kI{constructor(e,n,r,i,s,o,a,l){this.Hs=e,this.Po=r,this.vo=i,this.Vo=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new II(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Mo()}async stop(){this.No()&&await this.close(0)}Oo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.Po,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===C.RESOURCE_EXHAUSTED?(Qn(n.toString()),Qn("Using maximum backoff delay to prevent overloading the backend."),this.xo.Eo()):n&&n.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.So===n&&this.Go(r,i)},r=>{e(()=>{const i=new M(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Qo(i)})})}Go(e,n){const r=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{r(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{r(()=>this.Qo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Mo(){this.state=5,this.xo.Ao(async()=>{this.state=0,this.start()})}Qo(e){return D("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(D("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class i2 extends kI{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.It=s}jo(e,n){return this.Vo._o("Listen",e,n)}onMessage(e){this.xo.reset();const n=m$(this.It,e),r=function(i){if(!("targetChange"in i))return q.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?q.min():s.readTime?Bn(s.readTime):q.min()}(e);return this.listener.Wo(n,r)}zo(e){const n={};n.database=Ap(this.It),n.addTarget=function(i,s){let o;const a=s.target;return o=Np(a)?{documents:v$(i,a)}:{query:_$(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=vI(i,s.resumeToken):s.snapshotVersion.compareTo(q.min())>0&&(o.readTime=xc(i,s.snapshotVersion.toTimestamp())),o}(this.It,e);const r=E$(this.It,e);r&&(n.labels=r),this.Bo(n)}Ho(e){const n={};n.database=Ap(this.It),n.removeTarget=e,this.Bo(n)}}class s2 extends kI{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.It=s,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(e,n){return this.Vo._o("Write",e,n)}onMessage(e){if(le(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=y$(e.writeResults,e.commitTime),r=Bn(e.commitTime);return this.listener.Zo(r,n)}return le(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=Ap(this.It),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>g$(this.It,r))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o2 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.Vo=r,this.It=i,this.nu=!1}su(){if(this.nu)throw new M(C.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.Vo.co(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new M(C.UNKNOWN,i.toString())})}fo(e,n,r,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.Vo.fo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new M(C.UNKNOWN,s.toString())})}terminate(){this.nu=!0}}class a2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Qn(n),this.ou=!1):D("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l2{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=s,this.mu.qr(o=>{r.enqueueAndForget(async()=>{Bi(this)&&(D("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=z(a);l._u.add(4),await Il(l),l.gu.set("Unknown"),l._u.delete(4),await xh(l)}(this))})}),this.gu=new a2(r,i)}}async function xh(t){if(Bi(t))for(const e of t.wu)await e(!0)}async function Il(t){for(const e of t.wu)await e(!1)}function NI(t,e){const n=z(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),fy(n)?dy(n):co(n).ko()&&hy(n,e))}function RI(t,e){const n=z(t),r=co(n);n.du.delete(e),r.ko()&&xI(n,e),n.du.size===0&&(r.ko()?r.Fo():Bi(n)&&n.gu.set("Unknown"))}function hy(t,e){t.yu.Ot(e.targetId),co(t).zo(e)}function xI(t,e){t.yu.Ot(e),co(t).Ho(e)}function dy(t){t.yu=new u$({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t.du.get(e)||null}),co(t).start(),t.gu.uu()}function fy(t){return Bi(t)&&!co(t).No()&&t.du.size>0}function Bi(t){return z(t)._u.size===0}function bI(t){t.yu=void 0}async function u2(t){t.du.forEach((e,n)=>{hy(t,e)})}async function c2(t,e){bI(t),fy(t)?(t.gu.hu(e),dy(t)):t.gu.set("Unknown")}async function h2(t,e,n){if(t.gu.set("Online"),e instanceof yI&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.du.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.du.delete(o),r.yu.removeTarget(o))}(t,e)}catch(r){D("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await bc(t,r)}else if(e instanceof Cu?t.yu.Gt(e):e instanceof gI?t.yu.Yt(e):t.yu.Wt(e),!n.isEqual(q.min()))try{const r=await SI(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.yu.te(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.du.get(l);u&&i.du.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i.du.get(a);if(!l)return;i.du.set(a,l.withResumeToken(Je.EMPTY_BYTE_STRING,l.snapshotVersion)),xI(i,a);const u=new di(l.target,a,1,l.sequenceNumber);hy(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){D("RemoteStore","Failed to raise snapshot:",r),await bc(t,r)}}async function bc(t,e,n){if(!wl(e))throw e;t._u.add(1),await Il(t),t.gu.set("Offline"),n||(n=()=>SI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{D("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await xh(t)})}function AI(t,e){return e().catch(n=>bc(t,n,e))}async function bh(t){const e=z(t),n=Lr(e);let r=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;d2(e);)try{const i=await Y$(e.localStore,r);if(i===null){e.fu.length===0&&n.Fo();break}r=i.batchId,f2(e,i)}catch(i){await bc(e,i)}PI(e)&&OI(e)}function d2(t){return Bi(t)&&t.fu.length<10}function f2(t,e){t.fu.push(e);const n=Lr(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function PI(t){return Bi(t)&&!Lr(t).No()&&t.fu.length>0}function OI(t){Lr(t).start()}async function p2(t){Lr(t).eu()}async function m2(t){const e=Lr(t);for(const n of t.fu)e.Xo(n.mutations)}async function g2(t,e,n){const r=t.fu.shift(),i=ay.from(r,e,n);await AI(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await bh(t)}async function y2(t,e){e&&Lr(t).Yo&&await async function(n,r){if(i=r.code,i$(i)&&i!==C.ABORTED){const s=n.fu.shift();Lr(n).Oo(),await AI(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await bh(n)}var i}(t,e),PI(t)&&OI(t)}async function Y0(t,e){const n=z(t);n.asyncQueue.verifyOperationInProgress(),D("RemoteStore","RemoteStore received new credentials");const r=Bi(n);n._u.add(3),await Il(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await xh(n)}async function v2(t,e){const n=z(t);e?(n._u.delete(2),await xh(n)):e||(n._u.add(2),await Il(n),n.gu.set("Unknown"))}function co(t){return t.pu||(t.pu=function(e,n,r){const i=z(e);return i.su(),new i2(n,i.Vo,i.authCredentials,i.appCheckCredentials,i.It,r)}(t.datastore,t.asyncQueue,{Yr:u2.bind(null,t),Zr:c2.bind(null,t),Wo:h2.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),fy(t)?dy(t):t.gu.set("Unknown")):(await t.pu.stop(),bI(t))})),t.pu}function Lr(t){return t.Iu||(t.Iu=function(e,n,r){const i=z(e);return i.su(),new s2(n,i.Vo,i.authCredentials,i.appCheckCredentials,i.It,r)}(t.datastore,t.asyncQueue,{Yr:p2.bind(null,t),Zr:y2.bind(null,t),tu:m2.bind(null,t),Zo:g2.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Oo(),await bh(t)):(await t.Iu.stop(),t.fu.length>0&&(D("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new hi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new py(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function my(t,e){if(Qn("AsyncQueue",`${e}: ${t}`),wl(t))return new M(C.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e){this.comparator=e?(n,r)=>e(n,r)||L.comparator(n.key,r.key):(n,r)=>L.comparator(n.key,r.key),this.keyedMap=Oo(),this.sortedSet=new Me(this.comparator)}static emptySet(e){return new Is(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Is)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Is;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X0{constructor(){this.Tu=new Me(L.comparator)}track(e){const n=e.doc.key,r=this.Tu.get(n);r?e.type!==0&&r.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&r.type!==1?this.Tu=this.Tu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Tu=this.Tu.remove(n):e.type===1&&r.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):j():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,r)=>{e.push(r)}),e}}class Hs{constructor(e,n,r,i,s,o,a,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l}static fromInitialDocuments(e,n,r,i){const s=[];return n.forEach(o=>{s.push({type:0,doc:o})}),new Hs(e,n,Is.emptySet(n),s,r,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Cl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _2{constructor(){this.Au=void 0,this.listeners=[]}}class w2{constructor(){this.queries=new uo(e=>tI(e),Cl),this.onlineState="Unknown",this.Ru=new Set}}async function E2(t,e){const n=z(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new _2),i)try{s.Au=await n.onListen(r)}catch(o){const a=my(o,`Initialization of query '${Rp(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.bu(n.onlineState),s.Au&&e.Pu(s.Au)&&gy(n)}async function C2(t,e){const n=z(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function T2(t,e){const n=z(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Pu(i)&&(r=!0);o.Au=i}}r&&gy(n)}function S2(t,e,n){const r=z(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function gy(t){t.Ru.forEach(e=>{e.next()})}class I2{constructor(e,n,r){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=r||{}}Pu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Hs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Nu||!r)&&(!e.docs.isEmpty()||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=Hs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(e){this.key=e}}class MI{constructor(e){this.key=e}}class k2{constructor(e,n){this.query=e,this.Lu=n,this.Uu=null,this.current=!1,this.qu=Q(),this.mutatedKeys=Q(),this.Ku=nI(e),this.Gu=new Is(this.Ku)}get Qu(){return this.Lu}ju(e,n){const r=n?n.Wu:new X0,i=n?n.Gu:this.Gu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),f=iy(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),v=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let w=!1;d&&f?d.data.isEqual(f.data)?g!==v&&(r.track({type:3,doc:f}),w=!0):this.zu(d,f)||(r.track({type:2,doc:f}),w=!0,(l&&this.Ku(f,l)>0||u&&this.Ku(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),w=!0):d&&!f&&(r.track({type:1,doc:d}),w=!0,(l||u)&&(a=!0)),w&&(f?(o=o.add(f),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Gu:o,Wu:r,$i:a,mutatedKeys:s}}zu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const s=e.Wu.Eu();s.sort((u,c)=>function(h,d){const f=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return j()}};return f(h)-f(d)}(u.type,c.type)||this.Ku(u.doc,c.doc)),this.Hu(r);const o=n?this.Ju():[],a=this.qu.size===0&&this.current?1:0,l=a!==this.Uu;return this.Uu=a,s.length!==0||l?{snapshot:new Hs(this.query,e.Gu,i,s,e.mutatedKeys,a===0,l,!1),Yu:o}:{Yu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,Wu:new X0,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Yu:[]}}Xu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.qu;this.qu=Q(),this.Gu.forEach(r=>{this.Xu(r.key)&&(this.qu=this.qu.add(r.key))});const n=[];return e.forEach(r=>{this.qu.has(r)||n.push(new MI(r))}),this.qu.forEach(r=>{e.has(r)||n.push(new DI(r))}),n}Zu(e){this.Lu=e.Hi,this.qu=Q();const n=this.ju(e.documents);return this.applyChanges(n,!0)}tc(){return Hs.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.Uu===0)}}class N2{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class R2{constructor(e){this.key=e,this.ec=!1}}class x2{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new uo(a=>tI(a),Cl),this.ic=new Map,this.rc=new Set,this.oc=new Me(L.comparator),this.uc=new Map,this.cc=new ly,this.ac={},this.hc=new Map,this.lc=zs.vn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function b2(t,e){const n=V2(t);let r,i;const s=n.sc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.tc();else{const o=await X$(n.localStore,Yn(e));n.isPrimaryClient&&NI(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await A2(n,e,r,a==="current")}return i}async function A2(t,e,n,r){t.dc=(c,h,d)=>async function(f,g,v,w){let m=g.view.ju(v);m.$i&&(m=await K0(f.localStore,g.query,!1).then(({documents:_})=>g.view.ju(_,m)));const p=w&&w.targetChanges.get(g.targetId),y=g.view.applyChanges(m,f.isPrimaryClient,p);return Z0(f,g.targetId,y.Yu),y.snapshot}(t,c,h,d);const i=await K0(t.localStore,e,!0),s=new k2(e,i.Hi),o=s.ju(i.documents),a=Sl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),l=s.applyChanges(o,t.isPrimaryClient,a);Z0(t,n,l.Yu);const u=new N2(e,n,s);return t.sc.set(e,u),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),l.snapshot}async function P2(t,e){const n=z(t),r=n.sc.get(e),i=n.ic.get(r.targetId);if(i.length>1)return n.ic.set(r.targetId,i.filter(s=>!Cl(s,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Pp(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),RI(n.remoteStore,r.targetId),Op(n,r.targetId)}).catch(_l)):(Op(n,r.targetId),await Pp(n.localStore,r.targetId,!0))}async function O2(t,e,n){const r=B2(t);try{const i=await function(s,o){const a=z(s),l=Pe.now(),u=o.reduce((d,f)=>d.add(f.key),Q());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=Xn(),g=Q();return a.Gi.getEntries(d,u).next(v=>{f=v,f.forEach((w,m)=>{m.isValidDocument()||(g=g.add(w))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,f)).next(v=>{c=v;const w=[];for(const m of o){const p=t$(m,c.get(m.key).overlayedDocument);p!=null&&w.push(new Vi(m.key,p,X1(p.value.mapValue),Cn.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,w,o)}).next(v=>{h=v;const w=v.applyToLocalDocumentSet(c,g);return a.documentOverlayCache.saveOverlays(d,v.batchId,w)})}).then(()=>({batchId:h.batchId,changes:fI(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.ac[s.currentUser.toKey()];l||(l=new Me(ne)),l=l.insert(o,a),s.ac[s.currentUser.toKey()]=l}(r,i.batchId,n),await kl(r,i.changes),await bh(r.remoteStore)}catch(i){const s=my(i,"Failed to persist write");n.reject(s)}}async function LI(t,e){const n=z(t);try{const r=await G$(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.uc.get(s);o&&(le(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ec=!0:i.modifiedDocuments.size>0?le(o.ec):i.removedDocuments.size>0&&(le(o.ec),o.ec=!1))}),await kl(n,r,e)}catch(r){await _l(r)}}function J0(t,e,n){const r=z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.sc.forEach((s,o)=>{const a=o.view.bu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=z(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.bu(o)&&(l=!0)}),l&&gy(a)}(r.eventManager,e),i.length&&r.nc.Wo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function D2(t,e,n){const r=z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.uc.get(e),s=i&&i.key;if(s){let o=new Me(L.comparator);o=o.insert(s,Ke.newNoDocument(s,q.min()));const a=Q().add(s),l=new Nh(q.min(),new Map,new Oe(ne),o,a);await LI(r,l),r.oc=r.oc.remove(s),r.uc.delete(e),yy(r)}else await Pp(r.localStore,e,!1).then(()=>Op(r,e,n)).catch(_l)}async function M2(t,e){const n=z(t),r=e.batch.batchId;try{const i=await K$(n.localStore,e);$I(n,r,null),FI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await kl(n,i)}catch(i){await _l(i)}}async function L2(t,e,n){const r=z(t);try{const i=await function(s,o){const a=z(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(le(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);$I(r,e,n),FI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await kl(r,i)}catch(i){await _l(i)}}function FI(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function $I(t,e,n){const r=z(t);let i=r.ac[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.ac[r.currentUser.toKey()]=i}}function Op(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ic.get(e))t.sc.delete(r),n&&t.nc._c(r,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.ls(e).forEach(r=>{t.cc.containsKey(r)||UI(t,r)})}function UI(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(RI(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),yy(t))}function Z0(t,e,n){for(const r of n)r instanceof DI?(t.cc.addReference(r.key,e),F2(t,r)):r instanceof MI?(D("SyncEngine","Document no longer in limbo: "+r.key),t.cc.removeReference(r.key,e),t.cc.containsKey(r.key)||UI(t,r.key)):j()}function F2(t,e){const n=e.key,r=n.path.canonicalString();t.oc.get(n)||t.rc.has(r)||(D("SyncEngine","New document in limbo: "+n),t.rc.add(r),yy(t))}function yy(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new L(ge.fromString(e)),r=t.lc.next();t.uc.set(r,new R2(n)),t.oc=t.oc.insert(n,r),NI(t.remoteStore,new di(Yn(ry(n.path)),r,2,Zg.at))}}async function kl(t,e,n){const r=z(t),i=[],s=[],o=[];r.sc.isEmpty()||(r.sc.forEach((a,l)=>{o.push(r.dc(l,e,n).then(u=>{if(u){r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u.fromCache?"not-current":"current"),i.push(u);const c=cy.Ci(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.nc.Wo(i),await async function(a,l){const u=z(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>S.forEach(l,h=>S.forEach(h.Si,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>S.forEach(h.Di,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!wl(c))throw c;D("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.Ui.get(h),f=d.snapshotVersion,g=d.withLastLimboFreeSnapshotVersion(f);u.Ui=u.Ui.insert(h,g)}}}(r.localStore,s))}async function $2(t,e){const n=z(t);if(!n.currentUser.isEqual(e)){D("SyncEngine","User change. New user:",e.toKey());const r=await TI(n.localStore,e);n.currentUser=e,function(i,s){i.hc.forEach(o=>{o.forEach(a=>{a.reject(new M(C.CANCELLED,s))})}),i.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await kl(n,r.ji)}}function U2(t,e){const n=z(t),r=n.uc.get(e);if(r&&r.ec)return Q().add(r.key);{let i=Q();const s=n.ic.get(e);if(!s)return i;for(const o of s){const a=n.sc.get(o);i=i.unionWith(a.view.Qu)}return i}}function V2(t){const e=z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=LI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=U2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=D2.bind(null,e),e.nc.Wo=T2.bind(null,e.eventManager),e.nc._c=S2.bind(null,e.eventManager),e}function B2(t){const e=z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=M2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=L2.bind(null,e),e}class j2{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=Rh(e.databaseInfo.databaseId),this.sharedClientState=this.mc(e),this.persistence=this.gc(e),await this.persistence.start(),this.localStore=this.yc(e),this.gcScheduler=this.Ic(e,this.localStore),this.indexBackfillerScheduler=this.Tc(e,this.localStore)}Ic(e,n){return null}Tc(e,n){return null}yc(e){return q$(this.persistence,new H$,e.initialUser,this.It)}gc(e){return new j$(uy.Bs,this.It)}mc(e){return new Z$}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class z2{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>J0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=$2.bind(null,this.syncEngine),await v2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new w2}createDatastore(e){const n=Rh(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new r2(i));var i;return function(s,o,a,l){return new o2(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>J0(this.syncEngine,a,0),o=Q0.C()?new Q0:new e2,new l2(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new x2(r,i,s,o,a,l);return u&&(c.fc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=z(e);D("RemoteStore","RemoteStore shutting down."),n._u.add(5),await Il(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
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
 */class H2{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ac(this.observer.next,e)}error(e){this.observer.error?this.Ac(this.observer.error,e):Qn("Uncaught Error in snapshot listener:",e)}Rc(){this.muted=!0}Ac(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W2{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=_t.UNAUTHENTICATED,this.clientId=K1.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{D("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(D("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new M(C.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new hi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=my(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function q2(t,e){t.asyncQueue.verifyOperationInProgress(),D("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await TI(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function K2(t,e){t.asyncQueue.verifyOperationInProgress();const n=await G2(t);D("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>Y0(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>Y0(e.remoteStore,s)),t.onlineComponents=e}async function G2(t){return t.offlineComponents||(D("FirestoreClient","Using default OfflineComponentProvider"),await q2(t,new j2)),t.offlineComponents}async function VI(t){return t.onlineComponents||(D("FirestoreClient","Using default OnlineComponentProvider"),await K2(t,new z2)),t.onlineComponents}function Q2(t){return VI(t).then(e=>e.syncEngine)}async function ew(t){const e=await VI(t),n=e.eventManager;return n.onListen=b2.bind(null,e.syncEngine),n.onUnlisten=P2.bind(null,e.syncEngine),n}const tw=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BI(t,e,n){if(!n)throw new M(C.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Y2(t,e,n,r){if(e===!0&&r===!0)throw new M(C.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function nw(t){if(!L.isDocumentKey(t))throw new M(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function rw(t){if(L.isDocumentKey(t))throw new M(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function vy(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":j()}function ta(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new M(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=vy(t);throw new M(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function X2(t,e){if(e<=0)throw new M(C.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class iw{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new M(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new M(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Y2("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class _y{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new iw({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new M(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new M(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new iw(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new yF;switch(n.type){case"gapi":const r=n.client;return new wF(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new M(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=tw.get(e);n&&(D("ComponentProvider","Removing Datastore"),tw.delete(e),n.terminate())}(this),Promise.resolve()}}/**
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
 */class qt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new xr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new qt(this.firestore,e,this._key)}}class Fr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Fr(this.firestore,e,this._query)}}class xr extends Fr{constructor(e,n,r){super(e,n,ry(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new qt(this.firestore,null,new L(e))}withConverter(e){return new xr(this.firestore,e,this._path)}}function J2(t,e,...n){if(t=ze(t),BI("collection","path",e),t instanceof _y){const r=ge.fromString(e,...n);return rw(r),new xr(t,null,r)}{if(!(t instanceof qt||t instanceof xr))throw new M(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ge.fromString(e,...n));return rw(r),new xr(t.firestore,null,r)}}function jI(t,e,...n){if(t=ze(t),arguments.length===1&&(e=K1.R()),BI("doc","path",e),t instanceof _y){const r=ge.fromString(e,...n);return nw(r),new qt(t,null,new L(r))}{if(!(t instanceof qt||t instanceof xr))throw new M(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ge.fromString(e,...n));return nw(r),new qt(t.firestore,t instanceof xr?t.converter:null,new L(r))}}function Z2(t,e){return t=ze(t),e=ze(e),t instanceof Fr&&e instanceof Fr&&t.firestore===e.firestore&&Cl(t._query,e._query)&&t.converter===e.converter}/**
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
 */class eU{constructor(){this.$c=Promise.resolve(),this.Bc=[],this.Lc=!1,this.Uc=[],this.qc=null,this.Kc=!1,this.Gc=!1,this.Qc=[],this.xo=new II(this,"async_queue_retry"),this.jc=()=>{const n=Ld();n&&D("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.bo()};const e=Ld();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.jc)}get isShuttingDown(){return this.Lc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Wc(),this.zc(e)}enterRestrictedMode(e){if(!this.Lc){this.Lc=!0,this.Gc=e||!1;const n=Ld();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.jc)}}enqueue(e){if(this.Wc(),this.Lc)return new Promise(()=>{});const n=new hi;return this.zc(()=>this.Lc&&this.Gc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Bc.push(e),this.Hc()))}async Hc(){if(this.Bc.length!==0){try{await this.Bc[0](),this.Bc.shift(),this.xo.reset()}catch(e){if(!wl(e))throw e;D("AsyncQueue","Operation failed with retryable error: "+e)}this.Bc.length>0&&this.xo.Ao(()=>this.Hc())}}zc(e){const n=this.$c.then(()=>(this.Kc=!0,e().catch(r=>{this.qc=r,this.Kc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Qn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Kc=!1,r))));return this.$c=n,n}enqueueAfterDelay(e,n,r){this.Wc(),this.Qc.indexOf(e)>-1&&(n=0);const i=py.createAndSchedule(this,e,n,r,s=>this.Jc(s));return this.Uc.push(i),i}Wc(){this.qc&&j()}verifyOperationInProgress(){}async Yc(){let e;do e=this.$c,await e;while(e!==this.$c)}Xc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}Zc(e){return this.Yc().then(()=>{this.Uc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Yc()})}ta(e){this.Qc.push(e)}Jc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}function sw(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Ha extends _y{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new eU,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||HI(this),this._firestoreClient.terminate()}}function tU(t,e){const n=typeof t=="object"?t:jm(),r=typeof t=="string"?t:e||"(default)";return to(n,"firestore").getImmediate({identifier:r})}function zI(t){return t._firestoreClient||HI(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function HI(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new AF(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new W2(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
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
 */class wy{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new M(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ot(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ws{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ws(Je.fromBase64String(e))}catch(n){throw new M(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ws(Je.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Ey{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new M(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new M(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nU=/^__.*__$/;class rU{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Vi(e,this.data,this.fieldMask,n,this.fieldTransforms):new Tl(e,this.data,n,this.fieldTransforms)}}function WI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw j()}}class Ty{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.It=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ea(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get na(){return this.settings.na}sa(e){return new Ty(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ia(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.sa({path:r,ra:!1});return i.oa(e),i}ua(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.sa({path:r,ra:!1});return i.ea(),i}ca(e){return this.sa({path:void 0,ra:!0})}aa(e){return Ac(e,this.settings.methodName,this.settings.ha||!1,this.path,this.settings.la)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ea(){if(this.path)for(let e=0;e<this.path.length;e++)this.oa(this.path.get(e))}oa(e){if(e.length===0)throw this.aa("Document fields must not be empty");if(WI(this.na)&&nU.test(e))throw this.aa('Document fields cannot begin and end with "__"')}}class iU{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=r||Rh(e)}fa(e,n,r,i=!1){return new Ty({na:e,methodName:n,la:r,path:ot.emptyPath(),ra:!1,ha:i},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function sU(t){const e=t._freezeSettings(),n=Rh(t._databaseId);return new iU(t._databaseId,!!e.ignoreUndefinedProperties,n)}function oU(t,e,n,r,i,s={}){const o=t.fa(s.merge||s.mergeFields?2:0,e,n,i);QI("Data must be an object, but it was:",o,r);const a=KI(r,o);let l,u;if(s.merge)l=new En(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=aU(e,h,n);if(!o.contains(d))throw new M(C.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);uU(c,d)||c.push(d)}l=new En(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new rU(new zt(a),l,u)}class Sy extends Ey{_toFieldTransform(e){return new XF(e.path,new Ba)}isEqual(e){return e instanceof Sy}}function qI(t,e){if(GI(t=ze(t)))return QI("Unsupported field value:",e,t),KI(t,e);if(t instanceof Ey)return function(n,r){if(!WI(r.na))throw r.aa(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.aa(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ra&&e.na!==4)throw e.aa("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=qI(o,r.ca(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=ze(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return GF(r.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Pe.fromDate(n);return{timestampValue:xc(r.It,i)}}if(n instanceof Pe){const i=new Pe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:xc(r.It,i)}}if(n instanceof Cy)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ws)return{bytesValue:vI(r.It,n._byteString)};if(n instanceof qt){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.aa(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:oy(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.aa(`Unsupported field value: ${vy(n)}`)}(t,e)}function KI(t,e){const n={};return G1(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):lo(t,(r,i)=>{const s=qI(i,e.ia(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function GI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Pe||t instanceof Cy||t instanceof Ws||t instanceof qt||t instanceof Ey)}function QI(t,e,n){if(!GI(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=vy(n);throw r==="an object"?e.aa(t+" a custom object"):e.aa(t+" "+r)}}function aU(t,e,n){if((e=ze(e))instanceof wy)return e._internalPath;if(typeof e=="string")return YI(t,e);throw Ac("Field path arguments must be of type string or ",t,!1,void 0,n)}const lU=new RegExp("[~\\*/\\[\\]]");function YI(t,e,n){if(e.search(lU)>=0)throw Ac(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new wy(...e.split("."))._internalPath}catch{throw Ac(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ac(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new M(C.INVALID_ARGUMENT,a+t+l)}function uU(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class XI{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new qt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new cU(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Iy("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class cU extends XI{data(){return super.data()}}function Iy(t,e){return typeof e=="string"?YI(t,e):e instanceof wy?e._internalPath:e._delegate._internalPath}/**
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
 */class Do{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class JI extends XI{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Tu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Iy("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Tu extends JI{data(e={}){return super.data(e)}}class hU{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Do(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Tu(this._firestore,this._userDataWriter,r.key,r,new Do(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new M(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new Tu(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Do(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:s++}))}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Tu(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Do(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:dU(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function dU(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return j()}}/**
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
 */function fU(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new M(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ZI{}function pU(t,...e){for(const n of e)t=n._apply(t);return t}class mU extends ZI{constructor(e,n){super(),this.wa=e,this.ya=n,this.type="orderBy"}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new M(C.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new M(C.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Ss(i,s);return function(a,l){if(Z1(a)===null){const u=eI(a);u!==null&&_U(a,u,l.field)}}(r,o),o}(e._query,this.wa,this.ya);return new Fr(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new El(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function gU(t,e="asc"){const n=e,r=Iy("orderBy",t);return new mU(r,n)}class yU extends ZI{constructor(e,n,r){super(),this.type=e,this.pa=n,this.Ia=r}_apply(e){return new Fr(e.firestore,e.converter,Nc(e._query,this.pa,this.Ia))}}function vU(t){return X2("limit",t),new yU("limit",t,"F")}function _U(t,e,n){if(!n.isEqual(e))throw new M(C.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
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
 */class wU{convertValue(e,n="none"){switch(bi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Se(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Bs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw j()}}convertObject(e,n){const r={};return lo(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Cy(Se(e.latitude),Se(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Y1(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Fa(e));default:return null}}convertTimestamp(e){const n=Mr(e);return new Pe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ge.fromString(e);le(CI(r));const i=new $a(r.get(1),r.get(3)),s=new L(r.popFirst(5));return i.isEqual(n)||Qn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function EU(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class ek extends wU{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ws(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new qt(this.firestore,null,n)}}function CU(t){return tk(ta(t.firestore,Ha),[new sy(t._key,Cn.none())])}function TU(t,e){const n=ta(t.firestore,Ha),r=jI(t),i=EU(t.converter,e);return tk(n,[oU(sU(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Cn.exists(!1))]).then(()=>r)}function SU(t,...e){var n,r,i;t=ze(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||sw(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(sw(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof qt)u=ta(t.firestore,Ha),c=ry(t._key.path),l={next:h=>{e[o]&&e[o](IU(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=ta(t,Fr);u=ta(h.firestore,Ha),c=h._query;const d=new ek(u);l={next:f=>{e[o]&&e[o](new hU(u,d,h,f))},error:e[o+1],complete:e[o+2]},fU(t._query)}return function(h,d,f,g){const v=new H2(g),w=new I2(d,v,f);return h.asyncQueue.enqueueAndForget(async()=>E2(await ew(h),w)),()=>{v.Rc(),h.asyncQueue.enqueueAndForget(async()=>C2(await ew(h),w))}}(zI(u),c,a,l)}function tk(t,e){return function(n,r){const i=new hi;return n.asyncQueue.enqueueAndForget(async()=>O2(await Q2(n),r,i)),i.promise}(zI(t),e)}function IU(t,e,n){const r=n.docs.get(e._key),i=new ek(t);return new JI(t,i,e._key,r,new Do(n.hasPendingWrites,n.fromCache),e.converter)}function kU(){return new Sy("serverTimestamp")}(function(t,e=!0){(function(n){ao=n})(Br),Qt(new Lt("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new Ha(new vF(n.getProvider("auth-internal")),new CF(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new M(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $a(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),ke(N0,"3.4.15",t),ke(N0,"3.4.15","esm2017")})();/**
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
 */const NU="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RU{constructor(e,n,r){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||e.get().then(i=>this.auth=i,()=>{}),this.messaging||n.get().then(i=>this.messaging=i,()=>{}),this.appCheck||r.get().then(i=>this.appCheck=i,()=>{})}async getAuthToken(){if(!!this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(){if(this.appCheck){const e=await this.appCheck.getToken();return e.error?null:e.token}return null}async getContext(){const e=await this.getAuthToken(),n=await this.getMessagingToken(),r=await this.getAppCheckToken();return{authToken:e,messagingToken:n,appCheckToken:r}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ow="us-central1";class xU{constructor(e,n,r,i,s=ow,o){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new RU(n,r,i),this.cancelAllRequests=new Promise(a=>{this.deleteService=()=>Promise.resolve(a())});try{const a=new URL(s);this.customDomain=a.origin,this.region=ow}catch{this.customDomain=null,this.region=s}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}const aw="@firebase/functions",lw="0.8.4";/**
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
 */const bU="auth-internal",AU="app-check-internal",PU="messaging-internal";function OU(t,e){const n=(r,{instanceIdentifier:i})=>{const s=r.getProvider("app").getImmediate(),o=r.getProvider(bU),a=r.getProvider(PU),l=r.getProvider(AU);return new xU(s,o,a,l,i,t)};Qt(new Lt(NU,n,"PUBLIC").setMultipleInstances(!0)),ke(aw,lw,e),ke(aw,lw,"esm2017")}OU(fetch.bind(self));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nk="firebasestorage.googleapis.com",DU="storageBucket",MU=2*60*1e3,LU=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In extends Xt{constructor(e,n){super(Fd(e),`Firebase Storage: ${n} (${Fd(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,In.prototype)}_codeEquals(e){return Fd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function Fd(t){return"storage/"+t}function FU(){const t="An unknown error occurred, please check the error payload for server response.";return new In("unknown",t)}function $U(){return new In("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function UU(){return new In("canceled","User canceled the upload/download.")}function VU(t){return new In("invalid-url","Invalid URL '"+t+"'.")}function BU(t){return new In("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function uw(t){return new In("invalid-argument",t)}function rk(){return new In("app-deleted","The Firebase app was deleted.")}function jU(t){return new In("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=ln.makeFromUrl(e,n)}catch{return new ln(e,"")}if(r.path==="")return r;throw BU(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(_){_.path.charAt(_.path.length-1)==="/"&&(_.path_=_.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(_){_.path_=decodeURIComponent(_.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),g={bucket:1,path:3},v=n===nk?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",m=new RegExp(`^https?://${v}/${i}/${w}`,"i"),y=[{regex:a,indices:l,postModify:s},{regex:f,indices:g,postModify:u},{regex:m,indices:{bucket:1,path:2},postModify:u}];for(let _=0;_<y.length;_++){const I=y[_],N=I.regex.exec(e);if(N){const R=N[I.indices.bucket];let P=N[I.indices.path];P||(P=""),r=new ln(R,P),I.postModify(r);break}}if(r==null)throw VU(e);return r}}class zU{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HU(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...w){u||(u=!0,e.apply(null,w))}function h(w){i=setTimeout(()=>{i=null,t(f,l())},w)}function d(){s&&clearTimeout(s)}function f(w,...m){if(u){d();return}if(w){d(),c.call(null,w,...m);return}if(l()||o){d(),c.call(null,w,...m);return}r<64&&(r*=2);let y;a===1?(a=2,y=0):y=(r+Math.random())*1e3,h(y)}let g=!1;function v(w){g||(g=!0,d(),!u&&(i!==null?(w||(a=2),clearTimeout(i),h(0)):w||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,v(!0)},n),v}function WU(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qU(t){return t!==void 0}function cw(t,e,n,r){if(r<e)throw uw(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw uw(`Invalid value for '${t}'. Expected ${n} or less.`)}function KU(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pc;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Pc||(Pc={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GU{constructor(e,n,r,i,s,o,a,l,u,c,h){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,f)=>{this.resolve_=d,this.reject_=f,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new tu(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Pc.NO_ERROR,l=s.getStatus();if(!a||this.isRetryStatusCode_(l)){const c=s.getErrorCode()===Pc.ABORT;r(!1,new tu(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new tu(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());qU(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=FU();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?rk():UU();o(l)}else{const l=$U();o(l)}};this.canceled_?n(!1,new tu(!1,null,!0)):this.backoffId_=HU(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&WU(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,s=this.additionalRetryCodes_.indexOf(e)!==-1;return n||i||s}}class tu{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function QU(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function YU(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function XU(t,e){e&&(t["X-Firebase-GMPID"]=e)}function JU(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function ZU(t,e,n,r,i,s){const o=KU(t.urlParams),a=t.url+o,l=Object.assign({},t.headers);return XU(l,e),QU(l,n),YU(l,s),JU(l,r),new GU(a,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eV(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function tV(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Oc{constructor(e,n){this._service=e,n instanceof ln?this._location=n:this._location=ln.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Oc(e,n)}get root(){const e=new ln(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return tV(this._location.path)}get storage(){return this._service}get parent(){const e=eV(this._location.path);if(e===null)return null;const n=new ln(this._location.bucket,e);return new Oc(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw jU(e)}}function hw(t,e){const n=e==null?void 0:e[DU];return n==null?null:ln.makeFromBucketSpec(n,t)}class nV{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=nk,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=MU,this._maxUploadRetryTime=LU,this._requests=new Set,i!=null?this._bucket=ln.makeFromBucketSpec(i,this._host):this._bucket=hw(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ln.makeFromBucketSpec(this._url,e):this._bucket=hw(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){cw("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){cw("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Oc(this,e)}_makeRequest(e,n,r,i){if(this._deleted)return new zU(rk());{const s=ZU(e,this._appId,r,i,n,this._firebaseVersion);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const dw="@firebase/storage",fw="0.9.9";/**
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
 */const rV="storage";function iV(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new nV(n,r,i,e,Br)}function sV(){Qt(new Lt(rV,iV,"PUBLIC").setMultipleInstances(!0)),ke(dw,fw,""),ke(dw,fw,"esm2017")}sV();const ik="@firebase/installations",ky="0.5.12";/**
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
 */const sk=1e4,ok=`w:${ky}`,ak="FIS_v2",oV="https://firebaseinstallations.googleapis.com/v1",aV=60*60*1e3,lV="installations",uV="Installations";/**
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
 */const cV={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Ai=new Li(lV,uV,cV);function lk(t){return t instanceof Xt&&t.code.includes("request-failed")}/**
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
 */function uk({projectId:t}){return`${oV}/projects/${t}/installations`}function ck(t){return{token:t.token,requestStatus:2,expiresIn:dV(t.expiresIn),creationTime:Date.now()}}async function hk(t,e){const r=(await e.json()).error;return Ai.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function dk({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function hV(t,{refreshToken:e}){const n=dk(t);return n.append("Authorization",fV(e)),n}async function fk(t){const e=await t();return e.status>=500&&e.status<600?t():e}function dV(t){return Number(t.replace("s","000"))}function fV(t){return`${ak} ${t}`}/**
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
 */async function pV({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=uk(t),i=dk(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:ak,appId:t.appId,sdkVersion:ok},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await fk(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:ck(u.authToken)}}else throw await hk("Create Installation",l)}/**
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
 */function pk(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function mV(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const gV=/^[cdef][\w-]{21}$/,Dp="";function yV(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=vV(t);return gV.test(n)?n:Dp}catch{return Dp}}function vV(t){return mV(t).substr(0,22)}/**
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
 */function Ah(t){return`${t.appName}!${t.appId}`}/**
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
 */const mk=new Map;function gk(t,e){const n=Ah(t);yk(n,e),_V(n,e)}function yk(t,e){const n=mk.get(t);if(!!n)for(const r of n)r(e)}function _V(t,e){const n=wV();n&&n.postMessage({key:t,fid:e}),EV()}let oi=null;function wV(){return!oi&&"BroadcastChannel"in self&&(oi=new BroadcastChannel("[Firebase] FID Change"),oi.onmessage=t=>{yk(t.data.key,t.data.fid)}),oi}function EV(){mk.size===0&&oi&&(oi.close(),oi=null)}/**
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
 */const CV="firebase-installations-database",TV=1,Pi="firebase-installations-store";let $d=null;function Ny(){return $d||($d=ZC(CV,TV,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Pi)}}})),$d}async function Dc(t,e){const n=Ah(t),i=(await Ny()).transaction(Pi,"readwrite"),s=i.objectStore(Pi),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&gk(t,e.fid),e}async function vk(t){const e=Ah(t),r=(await Ny()).transaction(Pi,"readwrite");await r.objectStore(Pi).delete(e),await r.done}async function Ph(t,e){const n=Ah(t),i=(await Ny()).transaction(Pi,"readwrite"),s=i.objectStore(Pi),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&gk(t,a.fid),a}/**
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
 */async function Ry(t){let e;const n=await Ph(t.appConfig,r=>{const i=SV(r),s=IV(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Dp?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function SV(t){const e=t||{fid:yV(),registrationStatus:0};return _k(e)}function IV(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Ai.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=kV(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:NV(t)}:{installationEntry:e}}async function kV(t,e){try{const n=await pV(t,e);return Dc(t.appConfig,n)}catch(n){throw lk(n)&&n.customData.serverCode===409?await vk(t.appConfig):await Dc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function NV(t){let e=await pw(t.appConfig);for(;e.registrationStatus===1;)await pk(100),e=await pw(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Ry(t);return r||n}return e}function pw(t){return Ph(t,e=>{if(!e)throw Ai.create("installation-not-found");return _k(e)})}function _k(t){return RV(t)?{fid:t.fid,registrationStatus:0}:t}function RV(t){return t.registrationStatus===1&&t.registrationTime+sk<Date.now()}/**
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
 */async function xV({appConfig:t,heartbeatServiceProvider:e},n){const r=bV(t,n),i=hV(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:ok,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await fk(()=>fetch(r,a));if(l.ok){const u=await l.json();return ck(u)}else throw await hk("Generate Auth Token",l)}function bV(t,{fid:e}){return`${uk(t)}/${e}/authTokens:generate`}/**
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
 */async function xy(t,e=!1){let n;const r=await Ph(t.appConfig,s=>{if(!wk(s))throw Ai.create("not-registered");const o=s.authToken;if(!e&&OV(o))return s;if(o.requestStatus===1)return n=AV(t,e),s;{if(!navigator.onLine)throw Ai.create("app-offline");const a=MV(s);return n=PV(t,a),a}});return n?await n:r.authToken}async function AV(t,e){let n=await mw(t.appConfig);for(;n.authToken.requestStatus===1;)await pk(100),n=await mw(t.appConfig);const r=n.authToken;return r.requestStatus===0?xy(t,e):r}function mw(t){return Ph(t,e=>{if(!wk(e))throw Ai.create("not-registered");const n=e.authToken;return LV(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function PV(t,e){try{const n=await xV(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Dc(t.appConfig,r),n}catch(n){if(lk(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await vk(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Dc(t.appConfig,r)}throw n}}function wk(t){return t!==void 0&&t.registrationStatus===2}function OV(t){return t.requestStatus===2&&!DV(t)}function DV(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+aV}function MV(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function LV(t){return t.requestStatus===1&&t.requestTime+sk<Date.now()}/**
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
 */async function FV(t){const e=t,{installationEntry:n,registrationPromise:r}=await Ry(e);return r?r.catch(console.error):xy(e).catch(console.error),n.fid}/**
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
 */async function $V(t,e=!1){const n=t;return await UV(n),(await xy(n,e)).token}async function UV(t){const{registrationPromise:e}=await Ry(t);e&&await e}/**
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
 */function VV(t){if(!t||!t.options)throw Ud("App Configuration");if(!t.name)throw Ud("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Ud(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Ud(t){return Ai.create("missing-app-config-values",{valueName:t})}/**
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
 */const Ek="installations",BV="installations-internal",jV=t=>{const e=t.getProvider("app").getImmediate(),n=VV(e),r=to(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},zV=t=>{const e=t.getProvider("app").getImmediate(),n=to(e,Ek).getImmediate();return{getId:()=>FV(n),getToken:i=>$V(n,i)}};function HV(){Qt(new Lt(Ek,jV,"PUBLIC")),Qt(new Lt(BV,zV,"PRIVATE"))}HV();ke(ik,ky);ke(ik,ky,"esm2017");const Vd="@firebase/remote-config",gw="0.3.11";/**
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
 */const WV="remote-config";/**
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
 */const qV={["registration-window"]:"Undefined window object. This SDK only supports usage in a browser environment.",["registration-project-id"]:"Undefined project identifier. Check Firebase app initialization.",["registration-api-key"]:"Undefined API key. Check Firebase app initialization.",["registration-app-id"]:"Undefined app identifier. Check Firebase app initialization.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}.",["fetch-client-network"]:"Fetch client failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-timeout"]:'The config fetch request timed out.  Configure timeout using "fetchTimeoutMillis" SDK setting.',["fetch-throttle"]:'The config fetch request timed out while in an exponential backoff state. Configure timeout using "fetchTimeoutMillis" SDK setting. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.',["fetch-client-parse"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["indexed-db-unavailable"]:"Indexed DB is not supported by current browser"},Et=new Li("remoteconfig","Remote Config",qV);function KV(t){const e=ze(t);return e._initializePromise||(e._initializePromise=e._storageCache.loadFromStorage().then(()=>{e._isInitializationComplete=!0})),e._initializePromise}/**
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
 */class GV{constructor(e,n,r,i){this.client=e,this.storage=n,this.storageCache=r,this.logger=i}isCachedDataFresh(e,n){if(!n)return this.logger.debug("Config fetch cache check. Cache unpopulated."),!1;const r=Date.now()-n,i=r<=e;return this.logger.debug(`Config fetch cache check. Cache age millis: ${r}. Cache max age millis (minimumFetchIntervalMillis setting): ${e}. Is cache hit: ${i}.`),i}async fetch(e){const[n,r]=await Promise.all([this.storage.getLastSuccessfulFetchTimestampMillis(),this.storage.getLastSuccessfulFetchResponse()]);if(r&&this.isCachedDataFresh(e.cacheMaxAgeMillis,n))return r;e.eTag=r&&r.eTag;const i=await this.client.fetch(e),s=[this.storageCache.setLastSuccessfulFetchTimestampMillis(Date.now())];return i.status===200&&s.push(this.storage.setLastSuccessfulFetchResponse(i)),await Promise.all(s),i}}/**
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
 */function QV(t=navigator){return t.languages&&t.languages[0]||t.language}/**
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
 */class YV{constructor(e,n,r,i,s,o){this.firebaseInstallations=e,this.sdkVersion=n,this.namespace=r,this.projectId=i,this.apiKey=s,this.appId=o}async fetch(e){var n,r,i;const[s,o]=await Promise.all([this.firebaseInstallations.getId(),this.firebaseInstallations.getToken()]),l=`${window.FIREBASE_REMOTE_CONFIG_URL_BASE||"https://firebaseremoteconfig.googleapis.com"}/v1/projects/${this.projectId}/namespaces/${this.namespace}:fetch?key=${this.apiKey}`,u={"Content-Type":"application/json","Content-Encoding":"gzip","If-None-Match":e.eTag||"*"},c={sdk_version:this.sdkVersion,app_instance_id:s,app_instance_id_token:o,app_id:this.appId,language_code:QV()},h={method:"POST",headers:u,body:JSON.stringify(c)},d=fetch(l,h),f=new Promise((y,_)=>{e.signal.addEventListener(()=>{const I=new Error("The operation was aborted.");I.name="AbortError",_(I)})});let g;try{await Promise.race([d,f]),g=await d}catch(y){let _="fetch-client-network";throw((n=y)===null||n===void 0?void 0:n.name)==="AbortError"&&(_="fetch-timeout"),Et.create(_,{originalErrorMessage:(r=y)===null||r===void 0?void 0:r.message})}let v=g.status;const w=g.headers.get("ETag")||void 0;let m,p;if(g.status===200){let y;try{y=await g.json()}catch(_){throw Et.create("fetch-client-parse",{originalErrorMessage:(i=_)===null||i===void 0?void 0:i.message})}m=y.entries,p=y.state}if(p==="INSTANCE_STATE_UNSPECIFIED"?v=500:p==="NO_CHANGE"?v=304:(p==="NO_TEMPLATE"||p==="EMPTY_CONFIG")&&(m={}),v!==304&&v!==200)throw Et.create("fetch-status",{httpStatus:v});return{status:v,eTag:w,config:m}}}/**
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
 */function XV(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Et.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function JV(t){if(!(t instanceof Xt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class ZV{constructor(e,n){this.client=e,this.storage=n}async fetch(e){const n=await this.storage.getThrottleMetadata()||{backoffCount:0,throttleEndTimeMillis:Date.now()};return this.attemptFetch(e,n)}async attemptFetch(e,{throttleEndTimeMillis:n,backoffCount:r}){await XV(e.signal,n);try{const i=await this.client.fetch(e);return await this.storage.deleteThrottleMetadata(),i}catch(i){if(!JV(i))throw i;const s={throttleEndTimeMillis:Date.now()+tb(r),backoffCount:r+1};return await this.storage.setThrottleMetadata(s),this.attemptFetch(e,s)}}}/**
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
 */const eB=60*1e3,tB=12*60*60*1e3;class nB{constructor(e,n,r,i,s){this.app=e,this._client=n,this._storageCache=r,this._storage=i,this._logger=s,this._isInitializationComplete=!1,this.settings={fetchTimeoutMillis:eB,minimumFetchIntervalMillis:tB},this.defaultConfig={}}get fetchTimeMillis(){return this._storageCache.getLastSuccessfulFetchTimestampMillis()||-1}get lastFetchStatus(){return this._storageCache.getLastFetchStatus()||"no-fetch-yet"}}/**
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
 */function Su(t,e){var n;const r=t.target.error||void 0;return Et.create(e,{originalErrorMessage:r&&((n=r)===null||n===void 0?void 0:n.message)})}const Yr="app_namespace_store",rB="firebase_remote_config",iB=1;function sB(){return new Promise((t,e)=>{var n;try{const r=indexedDB.open(rB,iB);r.onerror=i=>{e(Su(i,"storage-open"))},r.onsuccess=i=>{t(i.target.result)},r.onupgradeneeded=i=>{const s=i.target.result;switch(i.oldVersion){case 0:s.createObjectStore(Yr,{keyPath:"compositeKey"})}}}catch(r){e(Et.create("storage-open",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message}))}})}class oB{constructor(e,n,r,i=sB()){this.appId=e,this.appName=n,this.namespace=r,this.openDbPromise=i}getLastFetchStatus(){return this.get("last_fetch_status")}setLastFetchStatus(e){return this.set("last_fetch_status",e)}getLastSuccessfulFetchTimestampMillis(){return this.get("last_successful_fetch_timestamp_millis")}setLastSuccessfulFetchTimestampMillis(e){return this.set("last_successful_fetch_timestamp_millis",e)}getLastSuccessfulFetchResponse(){return this.get("last_successful_fetch_response")}setLastSuccessfulFetchResponse(e){return this.set("last_successful_fetch_response",e)}getActiveConfig(){return this.get("active_config")}setActiveConfig(e){return this.set("active_config",e)}getActiveConfigEtag(){return this.get("active_config_etag")}setActiveConfigEtag(e){return this.set("active_config_etag",e)}getThrottleMetadata(){return this.get("throttle_metadata")}setThrottleMetadata(e){return this.set("throttle_metadata",e)}deleteThrottleMetadata(){return this.delete("throttle_metadata")}async get(e){const n=await this.openDbPromise;return new Promise((r,i)=>{var s;const a=n.transaction([Yr],"readonly").objectStore(Yr),l=this.createCompositeKey(e);try{const u=a.get(l);u.onerror=c=>{i(Su(c,"storage-get"))},u.onsuccess=c=>{const h=c.target.result;r(h?h.value:void 0)}}catch(u){i(Et.create("storage-get",{originalErrorMessage:(s=u)===null||s===void 0?void 0:s.message}))}})}async set(e,n){const r=await this.openDbPromise;return new Promise((i,s)=>{var o;const l=r.transaction([Yr],"readwrite").objectStore(Yr),u=this.createCompositeKey(e);try{const c=l.put({compositeKey:u,value:n});c.onerror=h=>{s(Su(h,"storage-set"))},c.onsuccess=()=>{i()}}catch(c){s(Et.create("storage-set",{originalErrorMessage:(o=c)===null||o===void 0?void 0:o.message}))}})}async delete(e){const n=await this.openDbPromise;return new Promise((r,i)=>{var s;const a=n.transaction([Yr],"readwrite").objectStore(Yr),l=this.createCompositeKey(e);try{const u=a.delete(l);u.onerror=c=>{i(Su(c,"storage-delete"))},u.onsuccess=()=>{r()}}catch(u){i(Et.create("storage-delete",{originalErrorMessage:(s=u)===null||s===void 0?void 0:s.message}))}})}createCompositeKey(e){return[this.appId,this.appName,this.namespace,e].join()}}/**
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
 */class aB{constructor(e){this.storage=e}getLastFetchStatus(){return this.lastFetchStatus}getLastSuccessfulFetchTimestampMillis(){return this.lastSuccessfulFetchTimestampMillis}getActiveConfig(){return this.activeConfig}async loadFromStorage(){const e=this.storage.getLastFetchStatus(),n=this.storage.getLastSuccessfulFetchTimestampMillis(),r=this.storage.getActiveConfig(),i=await e;i&&(this.lastFetchStatus=i);const s=await n;s&&(this.lastSuccessfulFetchTimestampMillis=s);const o=await r;o&&(this.activeConfig=o)}setLastFetchStatus(e){return this.lastFetchStatus=e,this.storage.setLastFetchStatus(e)}setLastSuccessfulFetchTimestampMillis(e){return this.lastSuccessfulFetchTimestampMillis=e,this.storage.setLastSuccessfulFetchTimestampMillis(e)}setActiveConfig(e){return this.activeConfig=e,this.storage.setActiveConfig(e)}}/**
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
 */function lB(){Qt(new Lt(WV,t,"PUBLIC").setMultipleInstances(!0)),ke(Vd,gw),ke(Vd,gw,"esm2017");function t(e,{instanceIdentifier:n}){const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();if(typeof window>"u")throw Et.create("registration-window");if(!GC())throw Et.create("indexed-db-unavailable");const{projectId:s,apiKey:o,appId:a}=r.options;if(!s)throw Et.create("registration-project-id");if(!o)throw Et.create("registration-api-key");if(!a)throw Et.create("registration-app-id");n=n||"firebase";const l=new oB(a,r.name,n),u=new aB(l),c=new Za(Vd);c.logLevel=J.ERROR;const h=new YV(i,Br,n,s,o,a),d=new ZV(h,l),f=new GV(d,l,u,c),g=new nB(r,f,u,l,c);return KV(g),g}}lB();var Oh={exports:{}},Dh={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uB=E.exports,cB=Symbol.for("react.element"),hB=Symbol.for("react.fragment"),dB=Object.prototype.hasOwnProperty,fB=uB.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,pB={key:!0,ref:!0,__self:!0,__source:!0};function Ck(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)dB.call(e,r)&&!pB.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:cB,type:t,key:s,ref:o,props:i,_owner:fB.current}}Dh.Fragment=hB;Dh.jsx=Ck;Dh.jsxs=Ck;(function(t){t.exports=Dh})(Oh);const Oi=Oh.exports.Fragment,O=Oh.exports.jsx,Yt=Oh.exports.jsxs;var Mp=function(t,e){return Mp=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])},Mp(t,e)};function tr(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Mp(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}function mB(t,e,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(c){try{u(r.next(c))}catch(h){o(h)}}function l(c){try{u(r.throw(c))}catch(h){o(h)}}function u(c){c.done?s(c.value):i(c.value).then(a,l)}u((r=r.apply(t,e||[])).next())})}function Tk(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(u){return function(c){return l([u,c])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=u[0]&2?i.return:u[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,u[1])).done)return s;switch(i=0,s&&(u=[u[0]&2,s.value]),u[0]){case 0:case 1:s=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!s||u[1]>s[0]&&u[1]<s[3])){n.label=u[1];break}if(u[0]===6&&n.label<s[1]){n.label=s[1],s=u;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(u);break}s[2]&&n.ops.pop(),n.trys.pop();continue}u=e.call(t,n)}catch(c){u=[6,c],i=0}finally{r=s=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}function qs(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Ks(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),i,s=[],o;try{for(;(e===void 0||e-- >0)&&!(i=r.next()).done;)s.push(i.value)}catch(a){o={error:a}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(o)throw o.error}}return s}function Gs(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}function ks(t){return this instanceof ks?(this.v=t,this):new ks(t)}function gB(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(t,e||[]),i,s=[];return i={},o("next"),o("throw"),o("return"),i[Symbol.asyncIterator]=function(){return this},i;function o(d){r[d]&&(i[d]=function(f){return new Promise(function(g,v){s.push([d,f,g,v])>1||a(d,f)})})}function a(d,f){try{l(r[d](f))}catch(g){h(s[0][3],g)}}function l(d){d.value instanceof ks?Promise.resolve(d.value.v).then(u,c):h(s[0][2],d)}function u(d){a("next",d)}function c(d){a("throw",d)}function h(d,f){d(f),s.shift(),s.length&&a(s[0][0],s[0][1])}}function yB(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=t[Symbol.asyncIterator],n;return e?e.call(t):(t=typeof qs=="function"?qs(t):t[Symbol.iterator](),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(s){n[s]=t[s]&&function(o){return new Promise(function(a,l){o=t[s](o),i(a,l,o.done,o.value)})}}function i(s,o,a,l){Promise.resolve(l).then(function(u){s({value:u,done:a})},o)}}function De(t){return typeof t=="function"}function by(t){var e=function(r){Error.call(r),r.stack=new Error().stack},n=t(e);return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var Bd=by(function(t){return function(e){t(this),this.message=e?e.length+` errors occurred during unsubscription:
`+e.map(function(n,r){return r+1+") "+n.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=e}});function Mc(t,e){if(t){var n=t.indexOf(e);0<=n&&t.splice(n,1)}}var Nl=function(){function t(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}return t.prototype.unsubscribe=function(){var e,n,r,i,s;if(!this.closed){this.closed=!0;var o=this._parentage;if(o)if(this._parentage=null,Array.isArray(o))try{for(var a=qs(o),l=a.next();!l.done;l=a.next()){var u=l.value;u.remove(this)}}catch(v){e={error:v}}finally{try{l&&!l.done&&(n=a.return)&&n.call(a)}finally{if(e)throw e.error}}else o.remove(this);var c=this.initialTeardown;if(De(c))try{c()}catch(v){s=v instanceof Bd?v.errors:[v]}var h=this._finalizers;if(h){this._finalizers=null;try{for(var d=qs(h),f=d.next();!f.done;f=d.next()){var g=f.value;try{yw(g)}catch(v){s=s!=null?s:[],v instanceof Bd?s=Gs(Gs([],Ks(s)),Ks(v.errors)):s.push(v)}}}catch(v){r={error:v}}finally{try{f&&!f.done&&(i=d.return)&&i.call(d)}finally{if(r)throw r.error}}}if(s)throw new Bd(s)}},t.prototype.add=function(e){var n;if(e&&e!==this)if(this.closed)yw(e);else{if(e instanceof t){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(e)}},t.prototype._hasParent=function(e){var n=this._parentage;return n===e||Array.isArray(n)&&n.includes(e)},t.prototype._addParent=function(e){var n=this._parentage;this._parentage=Array.isArray(n)?(n.push(e),n):n?[n,e]:e},t.prototype._removeParent=function(e){var n=this._parentage;n===e?this._parentage=null:Array.isArray(n)&&Mc(n,e)},t.prototype.remove=function(e){var n=this._finalizers;n&&Mc(n,e),e instanceof t&&e._removeParent(this)},t.EMPTY=function(){var e=new t;return e.closed=!0,e}(),t}(),Sk=Nl.EMPTY;function Ik(t){return t instanceof Nl||t&&"closed"in t&&De(t.remove)&&De(t.add)&&De(t.unsubscribe)}function yw(t){De(t)?t():t.unsubscribe()}var kk={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},vB={setTimeout:function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];return setTimeout.apply(void 0,Gs([t,e],Ks(n)))},clearTimeout:function(t){return clearTimeout(t)},delegate:void 0};function Nk(t){vB.setTimeout(function(){throw t})}function vw(){}function Iu(t){t()}var Ay=function(t){tr(e,t);function e(n){var r=t.call(this)||this;return r.isStopped=!1,n?(r.destination=n,Ik(n)&&n.add(r)):r.destination=CB,r}return e.create=function(n,r,i){return new Wa(n,r,i)},e.prototype.next=function(n){this.isStopped||this._next(n)},e.prototype.error=function(n){this.isStopped||(this.isStopped=!0,this._error(n))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(n){this.destination.next(n)},e.prototype._error=function(n){try{this.destination.error(n)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e}(Nl),_B=Function.prototype.bind;function jd(t,e){return _B.call(t,e)}var wB=function(){function t(e){this.partialObserver=e}return t.prototype.next=function(e){var n=this.partialObserver;if(n.next)try{n.next(e)}catch(r){nu(r)}},t.prototype.error=function(e){var n=this.partialObserver;if(n.error)try{n.error(e)}catch(r){nu(r)}else nu(e)},t.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(n){nu(n)}},t}(),Wa=function(t){tr(e,t);function e(n,r,i){var s=t.call(this)||this,o;if(De(n)||!n)o={next:n!=null?n:void 0,error:r!=null?r:void 0,complete:i!=null?i:void 0};else{var a;s&&kk.useDeprecatedNextContext?(a=Object.create(n),a.unsubscribe=function(){return s.unsubscribe()},o={next:n.next&&jd(n.next,a),error:n.error&&jd(n.error,a),complete:n.complete&&jd(n.complete,a)}):o=n}return s.destination=new wB(o),s}return e}(Ay);function nu(t){Nk(t)}function EB(t){throw t}var CB={closed:!0,next:vw,error:EB,complete:vw},Py=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function Rk(t){return t}function TB(t){return t.length===0?Rk:t.length===1?t[0]:function(e){return t.reduce(function(n,r){return r(n)},e)}}var gt=function(){function t(e){e&&(this._subscribe=e)}return t.prototype.lift=function(e){var n=new t;return n.source=this,n.operator=e,n},t.prototype.subscribe=function(e,n,r){var i=this,s=IB(e)?e:new Wa(e,n,r);return Iu(function(){var o=i,a=o.operator,l=o.source;s.add(a?a.call(s,l):l?i._subscribe(s):i._trySubscribe(s))}),s},t.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(n){e.error(n)}},t.prototype.forEach=function(e,n){var r=this;return n=_w(n),new n(function(i,s){var o=new Wa({next:function(a){try{e(a)}catch(l){s(l),o.unsubscribe()}},error:s,complete:i});r.subscribe(o)})},t.prototype._subscribe=function(e){var n;return(n=this.source)===null||n===void 0?void 0:n.subscribe(e)},t.prototype[Py]=function(){return this},t.prototype.pipe=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return TB(e)(this)},t.prototype.toPromise=function(e){var n=this;return e=_w(e),new e(function(r,i){var s;n.subscribe(function(o){return s=o},function(o){return i(o)},function(){return r(s)})})},t.create=function(e){return new t(e)},t}();function _w(t){var e;return(e=t!=null?t:kk.Promise)!==null&&e!==void 0?e:Promise}function SB(t){return t&&De(t.next)&&De(t.error)&&De(t.complete)}function IB(t){return t&&t instanceof Ay||SB(t)&&Ik(t)}function kB(t){return De(t==null?void 0:t.lift)}function ji(t){return function(e){if(kB(e))return e.lift(function(n){try{return t(n,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function Qs(t,e,n,r,i){return new NB(t,e,n,r,i)}var NB=function(t){tr(e,t);function e(n,r,i,s,o,a){var l=t.call(this,n)||this;return l.onFinalize=o,l.shouldUnsubscribe=a,l._next=r?function(u){try{r(u)}catch(c){n.error(c)}}:t.prototype._next,l._error=s?function(u){try{s(u)}catch(c){n.error(c)}finally{this.unsubscribe()}}:t.prototype._error,l._complete=i?function(){try{i()}catch(u){n.error(u)}finally{this.unsubscribe()}}:t.prototype._complete,l}return e.prototype.unsubscribe=function(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var r=this.closed;t.prototype.unsubscribe.call(this),!r&&((n=this.onFinalize)===null||n===void 0||n.call(this))}},e}(Ay),RB=by(function(t){return function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),Mh=function(t){tr(e,t);function e(){var n=t.call(this)||this;return n.closed=!1,n.currentObservers=null,n.observers=[],n.isStopped=!1,n.hasError=!1,n.thrownError=null,n}return e.prototype.lift=function(n){var r=new ww(this,this);return r.operator=n,r},e.prototype._throwIfClosed=function(){if(this.closed)throw new RB},e.prototype.next=function(n){var r=this;Iu(function(){var i,s;if(r._throwIfClosed(),!r.isStopped){r.currentObservers||(r.currentObservers=Array.from(r.observers));try{for(var o=qs(r.currentObservers),a=o.next();!a.done;a=o.next()){var l=a.value;l.next(n)}}catch(u){i={error:u}}finally{try{a&&!a.done&&(s=o.return)&&s.call(o)}finally{if(i)throw i.error}}}})},e.prototype.error=function(n){var r=this;Iu(function(){if(r._throwIfClosed(),!r.isStopped){r.hasError=r.isStopped=!0,r.thrownError=n;for(var i=r.observers;i.length;)i.shift().error(n)}})},e.prototype.complete=function(){var n=this;Iu(function(){if(n._throwIfClosed(),!n.isStopped){n.isStopped=!0;for(var r=n.observers;r.length;)r.shift().complete()}})},e.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(e.prototype,"observed",{get:function(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0},enumerable:!1,configurable:!0}),e.prototype._trySubscribe=function(n){return this._throwIfClosed(),t.prototype._trySubscribe.call(this,n)},e.prototype._subscribe=function(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)},e.prototype._innerSubscribe=function(n){var r=this,i=this,s=i.hasError,o=i.isStopped,a=i.observers;return s||o?Sk:(this.currentObservers=null,a.push(n),new Nl(function(){r.currentObservers=null,Mc(a,n)}))},e.prototype._checkFinalizedStatuses=function(n){var r=this,i=r.hasError,s=r.thrownError,o=r.isStopped;i?n.error(s):o&&n.complete()},e.prototype.asObservable=function(){var n=new gt;return n.source=this,n},e.create=function(n,r){return new ww(n,r)},e}(gt),ww=function(t){tr(e,t);function e(n,r){var i=t.call(this)||this;return i.destination=n,i.source=r,i}return e.prototype.next=function(n){var r,i;(i=(r=this.destination)===null||r===void 0?void 0:r.next)===null||i===void 0||i.call(r,n)},e.prototype.error=function(n){var r,i;(i=(r=this.destination)===null||r===void 0?void 0:r.error)===null||i===void 0||i.call(r,n)},e.prototype.complete=function(){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||r===void 0||r.call(n)},e.prototype._subscribe=function(n){var r,i;return(i=(r=this.source)===null||r===void 0?void 0:r.subscribe(n))!==null&&i!==void 0?i:Sk},e}(Mh),Oy={now:function(){return(Oy.delegate||Date).now()},delegate:void 0},xB=function(t){tr(e,t);function e(n,r,i){n===void 0&&(n=1/0),r===void 0&&(r=1/0),i===void 0&&(i=Oy);var s=t.call(this)||this;return s._bufferSize=n,s._windowTime=r,s._timestampProvider=i,s._buffer=[],s._infiniteTimeWindow=!0,s._infiniteTimeWindow=r===1/0,s._bufferSize=Math.max(1,n),s._windowTime=Math.max(1,r),s}return e.prototype.next=function(n){var r=this,i=r.isStopped,s=r._buffer,o=r._infiniteTimeWindow,a=r._timestampProvider,l=r._windowTime;i||(s.push(n),!o&&s.push(a.now()+l)),this._trimBuffer(),t.prototype.next.call(this,n)},e.prototype._subscribe=function(n){this._throwIfClosed(),this._trimBuffer();for(var r=this._innerSubscribe(n),i=this,s=i._infiniteTimeWindow,o=i._buffer,a=o.slice(),l=0;l<a.length&&!n.closed;l+=s?1:2)n.next(a[l]);return this._checkFinalizedStatuses(n),r},e.prototype._trimBuffer=function(){var n=this,r=n._bufferSize,i=n._timestampProvider,s=n._buffer,o=n._infiniteTimeWindow,a=(o?1:2)*r;if(r<1/0&&a<s.length&&s.splice(0,s.length-a),!o){for(var l=i.now(),u=0,c=1;c<s.length&&s[c]<=l;c+=2)u=c;u&&s.splice(0,u+1)}},e}(Mh),bB=function(t){tr(e,t);function e(n,r){return t.call(this)||this}return e.prototype.schedule=function(n,r){return this},e}(Nl),Lp={setInterval:function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i=Lp.delegate;return i!=null&&i.setInterval?i.setInterval.apply(i,Gs([t,e],Ks(n))):setInterval.apply(void 0,Gs([t,e],Ks(n)))},clearInterval:function(t){return clearInterval(t)},delegate:void 0},AB=function(t){tr(e,t);function e(n,r){var i=t.call(this,n,r)||this;return i.scheduler=n,i.work=r,i.pending=!1,i}return e.prototype.schedule=function(n,r){if(r===void 0&&(r=0),this.closed)return this;this.state=n;var i=this.id,s=this.scheduler;return i!=null&&(this.id=this.recycleAsyncId(s,i,r)),this.pending=!0,this.delay=r,this.id=this.id||this.requestAsyncId(s,this.id,r),this},e.prototype.requestAsyncId=function(n,r,i){return i===void 0&&(i=0),Lp.setInterval(n.flush.bind(n,this),i)},e.prototype.recycleAsyncId=function(n,r,i){if(i===void 0&&(i=0),i!=null&&this.delay===i&&this.pending===!1)return r;Lp.clearInterval(r)},e.prototype.execute=function(n,r){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var i=this._execute(n,r);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},e.prototype._execute=function(n,r){var i=!1,s;try{this.work(n)}catch(o){i=!0,s=o||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),s},e.prototype.unsubscribe=function(){if(!this.closed){var n=this,r=n.id,i=n.scheduler,s=i.actions;this.work=this.state=this.scheduler=null,this.pending=!1,Mc(s,this),r!=null&&(this.id=this.recycleAsyncId(i,r,null)),this.delay=null,t.prototype.unsubscribe.call(this)}},e}(bB),Ew=function(){function t(e,n){n===void 0&&(n=t.now),this.schedulerActionCtor=e,this.now=n}return t.prototype.schedule=function(e,n,r){return n===void 0&&(n=0),new this.schedulerActionCtor(this,e).schedule(r,n)},t.now=Oy.now,t}(),PB=function(t){tr(e,t);function e(n,r){r===void 0&&(r=Ew.now);var i=t.call(this,n,r)||this;return i.actions=[],i._active=!1,i._scheduled=void 0,i}return e.prototype.flush=function(n){var r=this.actions;if(this._active){r.push(n);return}var i;this._active=!0;do if(i=n.execute(n.state,n.delay))break;while(n=r.shift());if(this._active=!1,i){for(;n=r.shift();)n.unsubscribe();throw i}},e}(Ew);new PB(AB);var OB=new gt(function(t){return t.complete()});function DB(t){return t?MB(t):OB}function MB(t){return new gt(function(e){return t.schedule(function(){return e.complete()})})}function LB(t){return t&&De(t.schedule)}function FB(t){return t[t.length-1]}function $B(t){return LB(FB(t))?t.pop():void 0}var xk=function(t){return t&&typeof t.length=="number"&&typeof t!="function"};function bk(t){return De(t==null?void 0:t.then)}function Ak(t){return De(t[Py])}function Pk(t){return Symbol.asyncIterator&&De(t==null?void 0:t[Symbol.asyncIterator])}function Ok(t){return new TypeError("You provided "+(t!==null&&typeof t=="object"?"an invalid object":"'"+t+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function UB(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Dk=UB();function Mk(t){return De(t==null?void 0:t[Dk])}function Lk(t){return gB(this,arguments,function(){var e,n,r,i;return Tk(this,function(s){switch(s.label){case 0:e=t.getReader(),s.label=1;case 1:s.trys.push([1,,9,10]),s.label=2;case 2:return[4,ks(e.read())];case 3:return n=s.sent(),r=n.value,i=n.done,i?[4,ks(void 0)]:[3,5];case 4:return[2,s.sent()];case 5:return[4,ks(r)];case 6:return[4,s.sent()];case 7:return s.sent(),[3,2];case 8:return[3,10];case 9:return e.releaseLock(),[7];case 10:return[2]}})})}function Fk(t){return De(t==null?void 0:t.getReader)}function ho(t){if(t instanceof gt)return t;if(t!=null){if(Ak(t))return VB(t);if(xk(t))return BB(t);if(bk(t))return jB(t);if(Pk(t))return $k(t);if(Mk(t))return zB(t);if(Fk(t))return HB(t)}throw Ok(t)}function VB(t){return new gt(function(e){var n=t[Py]();if(De(n.subscribe))return n.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function BB(t){return new gt(function(e){for(var n=0;n<t.length&&!e.closed;n++)e.next(t[n]);e.complete()})}function jB(t){return new gt(function(e){t.then(function(n){e.closed||(e.next(n),e.complete())},function(n){return e.error(n)}).then(null,Nk)})}function zB(t){return new gt(function(e){var n,r;try{for(var i=qs(t),s=i.next();!s.done;s=i.next()){var o=s.value;if(e.next(o),e.closed)return}}catch(a){n={error:a}}finally{try{s&&!s.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}e.complete()})}function $k(t){return new gt(function(e){WB(t,e).catch(function(n){return e.error(n)})})}function HB(t){return $k(Lk(t))}function WB(t,e){var n,r,i,s;return mB(this,void 0,void 0,function(){var o,a;return Tk(this,function(l){switch(l.label){case 0:l.trys.push([0,5,6,11]),n=yB(t),l.label=1;case 1:return[4,n.next()];case 2:if(r=l.sent(),!!r.done)return[3,4];if(o=r.value,e.next(o),e.closed)return[2];l.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return a=l.sent(),i={error:a},[3,11];case 6:return l.trys.push([6,,9,10]),r&&!r.done&&(s=n.return)?[4,s.call(n)]:[3,8];case 7:l.sent(),l.label=8;case 8:return[3,10];case 9:if(i)throw i.error;return[7];case 10:return[7];case 11:return e.complete(),[2]}})})}function fi(t,e,n,r,i){r===void 0&&(r=0),i===void 0&&(i=!1);var s=e.schedule(function(){n(),i?t.add(this.schedule(null,r)):this.unsubscribe()},r);if(t.add(s),!i)return s}function Uk(t,e){return e===void 0&&(e=0),ji(function(n,r){n.subscribe(Qs(r,function(i){return fi(r,t,function(){return r.next(i)},e)},function(){return fi(r,t,function(){return r.complete()},e)},function(i){return fi(r,t,function(){return r.error(i)},e)}))})}function Vk(t,e){return e===void 0&&(e=0),ji(function(n,r){r.add(t.schedule(function(){return n.subscribe(r)},e))})}function qB(t,e){return ho(t).pipe(Vk(e),Uk(e))}function KB(t,e){return ho(t).pipe(Vk(e),Uk(e))}function GB(t,e){return new gt(function(n){var r=0;return e.schedule(function(){r===t.length?n.complete():(n.next(t[r++]),n.closed||this.schedule())})})}function QB(t,e){return new gt(function(n){var r;return fi(n,e,function(){r=t[Dk](),fi(n,e,function(){var i,s,o;try{i=r.next(),s=i.value,o=i.done}catch(a){n.error(a);return}o?n.complete():n.next(s)},0,!0)}),function(){return De(r==null?void 0:r.return)&&r.return()}})}function Bk(t,e){if(!t)throw new Error("Iterable cannot be null");return new gt(function(n){fi(n,e,function(){var r=t[Symbol.asyncIterator]();fi(n,e,function(){r.next().then(function(i){i.done?n.complete():n.next(i.value)})},0,!0)})})}function YB(t,e){return Bk(Lk(t),e)}function XB(t,e){if(t!=null){if(Ak(t))return qB(t,e);if(xk(t))return GB(t,e);if(bk(t))return KB(t,e);if(Pk(t))return Bk(t,e);if(Mk(t))return QB(t,e);if(Fk(t))return YB(t,e)}throw Ok(t)}function jk(t,e){return e?XB(t,e):ho(t)}function Cw(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=$B(t);return jk(t,n)}by(function(t){return function(){t(this),this.name="EmptyError",this.message="no elements in sequence"}});function Dy(t,e){return ji(function(n,r){var i=0;n.subscribe(Qs(r,function(s){r.next(t.call(e,s,i++))}))})}function zk(t){return ji(function(e,n){var r=null,i=!1,s;r=e.subscribe(Qs(n,void 0,void 0,function(o){s=ho(t(o,zk(t)(e))),r?(r.unsubscribe(),r=null,s.subscribe(n)):i=!0})),i&&(r.unsubscribe(),r=null,s.subscribe(n))})}function JB(t){t===void 0&&(t={});var e=t.connector,n=e===void 0?function(){return new Mh}:e,r=t.resetOnError,i=r===void 0?!0:r,s=t.resetOnComplete,o=s===void 0?!0:s,a=t.resetOnRefCountZero,l=a===void 0?!0:a;return function(u){var c,h,d,f=0,g=!1,v=!1,w=function(){h==null||h.unsubscribe(),h=void 0},m=function(){w(),c=d=void 0,g=v=!1},p=function(){var y=c;m(),y==null||y.unsubscribe()};return ji(function(y,_){f++,!v&&!g&&w();var I=d=d!=null?d:n();_.add(function(){f--,f===0&&!v&&!g&&(h=zd(p,l))}),I.subscribe(_),!c&&f>0&&(c=new Wa({next:function(N){return I.next(N)},error:function(N){v=!0,w(),h=zd(m,i,N),I.error(N)},complete:function(){g=!0,w(),h=zd(m,o),I.complete()}}),ho(y).subscribe(c))})(u)}}function zd(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(e===!0){t();return}if(e!==!1){var i=new Wa({next:function(){i.unsubscribe(),t()}});return e.apply(void 0,Gs([],Ks(n))).subscribe(i)}}function ZB(t,e,n){var r,i,s,o,a=!1;return t&&typeof t=="object"?(r=t.bufferSize,o=r===void 0?1/0:r,i=t.windowTime,e=i===void 0?1/0:i,s=t.refCount,a=s===void 0?!1:s,n=t.scheduler):o=t!=null?t:1/0,JB({connector:function(){return new xB(o,e,n)},resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:a})}function ej(t,e){return ji(function(n,r){var i=null,s=0,o=!1,a=function(){return o&&!i&&r.complete()};n.subscribe(Qs(r,function(l){i==null||i.unsubscribe();var u=0,c=s++;ho(t(l,c)).subscribe(i=Qs(r,function(h){return r.next(e?e(l,h,c,u++):h)},function(){i=null,a()}))},function(){o=!0,a()}))})}function tj(t,e,n){var r=De(t)||e||n?{next:t,error:e,complete:n}:t;return r?ji(function(i,s){var o;(o=r.subscribe)===null||o===void 0||o.call(r);var a=!0;i.subscribe(Qs(s,function(l){var u;(u=r.next)===null||u===void 0||u.call(r,l),s.next(l)},function(){var l;a=!1,(l=r.complete)===null||l===void 0||l.call(r),s.complete()},function(l){var u;a=!1,(u=r.error)===null||u===void 0||u.call(r,l),s.error(l)},function(){var l,u;a&&((l=r.unsubscribe)===null||l===void 0||l.call(r)),(u=r.finalize)===null||u===void 0||u.call(r)}))}):Rk}function Hk(t){return new gt(function(e){var n=UA(t,e.next.bind(e),e.error.bind(e),e.complete.bind(e));return{unsubscribe:n}})}const nj="[DEFAULT]",Wk=E.exports.createContext(void 0),qk=E.exports.createContext(!1),rj="4.2.2",ij=(t,e)=>t===e||[...Object.keys(t),...Object.keys(e)].every(n=>t[n]===e[n]);function sj(t){const{firebaseConfig:e,appName:n,suspense:r}=t,i=E.exports.useMemo(()=>{if(t.firebaseApp)return t.firebaseApp;const s=Jb().find(o=>o.name===(n||nj));if(s){if(e&&ij(s.options,e))return s;throw new Error(`Does not match the options already provided to the ${n||"default"} firebase app instance, give this new instance a different appName.`)}else{if(!e)throw new Error("No firebaseConfig provided");const o=E.exports.version||"unknown";return ke("react",o),ke("reactfire",rj),Xb(e,n)}},[t.firebaseApp,e,n]);return E.exports.createElement(Wk.Provider,{value:i},O(qk.Provider,{...Object.assign({value:r!=null?r:!1},t)}))}function oj(t){let e=E.exports.useContext(qk);return t!==void 0?t:e}function Kk(){const t=E.exports.useContext(Wk);if(!t)throw new Error("Cannot call useFirebaseApp unless your component is within a FirebaseAppProvider");return t}function My(t){var e;const n=$y(),r=`auth:user:${n.name}`,i=Hk(n),s=(e=Object.assign({},t))!==null&&e!==void 0?e:{};return n.currentUser!==void 0&&(s.initialData=n.currentUser,s.startWithValue=n.currentUser),Ly(r,i,s)}function Gk(t){if((t==null?void 0:t.hasOwnProperty("requiredClaims"))&&(t==null?void 0:t.hasOwnProperty("validateCustomClaims")))throw new Error('Cannot have both "requiredClaims" and "validateCustomClaims". Use one or the other.');const e=$y();let n=`auth:signInCheck:${e.name}::forceRefresh:${!!(t!=null&&t.forceRefresh)}`;t!=null&&t.forceRefresh&&(n=`${n}:forceRefresh:${t.forceRefresh}`),t!=null&&t.hasOwnProperty("requiredClaims")?n=`${n}:requiredClaims:${JSON.stringify(t.requiredClaims)}`:t!=null&&t.hasOwnProperty("validateCustomClaims")&&(n=`${n}:validateCustomClaims:${JSON.stringify(t.validateCustomClaims)}`);const r=Hk(e).pipe(ej(i=>{var s;return i?t&&(t.hasOwnProperty("requiredClaims")||t.hasOwnProperty("validateCustomClaims"))?jk(i.getIdTokenResult((s=t==null?void 0:t.forceRefresh)!==null&&s!==void 0?s:!1)).pipe(Dy(o=>{let a;t.hasOwnProperty("requiredClaims")?a=aj(t.requiredClaims):a=t.validateCustomClaims;const{hasRequiredClaims:l,errors:u}=a(o.claims);return{signedIn:!0,hasRequiredClaims:l,errors:u,user:i}})):Cw({signedIn:!0,hasRequiredClaims:!0,errors:{},user:i}):Cw({signedIn:!1,hasRequiredClaims:!1,errors:{},user:null})}));return Ly(n,r)}function aj(t){return function(e){const n={};return Object.keys(t).forEach(r=>{t[r]!==e[r]&&(n[r]=[new Uy("auth/missing-claim",`Expected "${t[r]}", but user has "${e[r]}" instead`)])}),{hasRequiredClaims:Object.keys(n).length===0,errors:n}}}/**
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
 */var Wr,Xr;(function(t){t.added="child_added",t.removed="child_removed",t.changed="child_changed",t.moved="child_moved",t.value="value"})(Xr||(Xr={}));Object.freeze((Wr={},Wr[Xr.added]=YM,Wr[Xr.removed]=ZM,Wr[Xr.changed]=XM,Wr[Xr.moved]=JM,Wr[Xr.value]=QM,Wr));const lj=globalThis._reactFireDatabaseCachedQueries||[];globalThis._reactFireDatabaseCachedQueries||(globalThis._reactFireDatabaseCachedQueries=lj);/**
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
 */var uj={includeMetadataChanges:!1};function cj(t,e){return e===void 0&&(e=uj),new gt(function(n){var r=SU(t,e,{next:n.next.bind(n),error:n.error.bind(n),complete:n.complete.bind(n)});return{unsubscribe:r}})}function hj(t,e){e===void 0&&(e={});var n=t.data();return!t.exists()||typeof n!="object"||n===null||e.idField&&(n[e.idField]=t.id),n}function dj(t){return cj(t,{includeMetadataChanges:!0}).pipe(Dy(function(e){return e.docs}))}function fj(t,e){return e===void 0&&(e={}),dj(t).pipe(Dy(function(n){return n.map(function(r){return hj(r,e)})}))}class pj extends Mh{constructor(e,n){super(),this._timeoutWindow=n,this._hasValue=!1,this._error=void 0,this._firstEmission=new Promise(r=>this._resolveFirstEmission=r),this._innerObservable=e.pipe(tj({next:r=>{this._next(r)},error:r=>{this._error=r,this._resolveFirstEmission()}}),zk(()=>DB()),ZB(1)),this._warmupSubscription=this._innerObservable.subscribe(),this._timeoutHandler=setTimeout(this._reset.bind(this),this._timeoutWindow)}get hasValue(){return this._hasValue||!!this._error}get value(){if(this._error)throw this._error;if(!this.hasValue)throw Error("Can only get value if SuspenseSubject has a value");return this._value}get firstEmission(){return this._firstEmission}_next(e){this._hasValue=!0,this._value=e,this._resolveFirstEmission()}_reset(){this._warmupSubscription&&this._warmupSubscription.unsubscribe(),this._hasValue=!1,this._value=void 0,this._error=void 0,this._firstEmission=new Promise(e=>this._resolveFirstEmission=e)}_subscribe(e){return this._timeoutHandler&&clearTimeout(this._timeoutHandler),this._innerSubscriber=this._innerObservable.subscribe(e),this._innerSubscriber}get ourError(){return this._error}}const mj=3e4,ku=globalThis._reactFirePreloadedObservables||new Map;globalThis._reactFirePreloadedObservables||(globalThis._reactFirePreloadedObservables=ku);function gj(t,e){if(ku.has(e))return ku.get(e);{const n=new pj(t,mj);return ku.set(e,n),n}}function yj(t){return function(e,n){const r=Object.assign(Object.assign({},e),{hasEmitted:e.hasEmitted||t.hasValue,error:t.ourError,firstValuePromise:t.firstEmission});switch(t.hasValue&&(r.data=t.value),n){case"value":return r.status="success",r;case"error":return r.status="error",r;case"complete":return r.isComplete=!0,r;default:throw new Error(`invalid action "${n}"`)}}}function Ly(t,e,n={}){var r;if(!t)throw new Error("cannot call useObservable without an observableId");const i=gj(e,t),s=n.hasOwnProperty("initialData")||n.hasOwnProperty("startWithValue"),o=i.hasValue||s;if(oj(n.suspense)===!0&&!o)throw i.firstEmission;const a={status:o?"success":"loading",hasEmitted:o,isComplete:!1,data:i.hasValue?i.value:(r=n==null?void 0:n.initialData)!==null&&r!==void 0?r:n==null?void 0:n.startWithValue,error:i.ourError,firstValuePromise:i.firstEmission},[l,u]=E.exports.useReducer(yj(i),a);return E.exports.useEffect(()=>{const c=i.subscribe({next:()=>{u("value")},error:h=>{throw u("error"),h},complete:()=>{u("complete")}});return()=>c.unsubscribe()},[i]),l}const Fp=globalThis._reactFireFirestoreQueryCache||[];globalThis._reactFireFirestoreQueryCache||(globalThis._reactFireFirestoreQueryCache=Fp);function vj(t){const e=Fp.findIndex(n=>Z2(n,t));return e>-1?e:Fp.push(t)-1}function _j(t,e){const n=e?Ij(e):"NO_ID_FIELD",r=`firestore:collectionData:${vj(t)}:idField=${n}`,i=fj(t,{idField:n});return Ly(r,i,e)}E.exports.createContext(void 0);const Qk=E.exports.createContext(void 0);E.exports.createContext(void 0);const wj=E.exports.createContext(void 0),Yk=E.exports.createContext(void 0);E.exports.createContext(void 0);E.exports.createContext(void 0);E.exports.createContext(void 0);E.exports.createContext(void 0);function Fy(t){return function(e){var n,r;if(!e.sdk)throw new Error("no sdk provided");const i=Kk().name;if(((r=(n=e==null?void 0:e.sdk)===null||n===void 0?void 0:n.app)===null||r===void 0?void 0:r.name)!==i)throw new Error("sdk was initialized with a different firebase app");return E.exports.createElement(t.Provider,Object.assign({value:e.sdk},e))}}function Xk(t){const e=E.exports.useContext(t);if(!e)throw new Error("SDK not found. useSdk must be called from within a provider");return e}const Ej=Fy(Qk),Cj=Fy(wj),Tj=Fy(Yk),$y=()=>Xk(Qk),Jk=()=>Xk(Yk);class Uy extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name="ReactFireError",Object.setPrototypeOf(this,Uy.prototype)}}function Sj(t,e){if(e==="idField"||e==="initialData"||e==="suspense")return t?t[e]:void 0;throw new Error(`Field "${e}" is not a valid key in ReactFireOptions`)}function Ij(t){return Sj(t,"idField")}var Zk={exports:{}};/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var s=arguments[i];if(!!s){var o=typeof s;if(o==="string"||o==="number")r.push(s);else if(Array.isArray(s)){if(s.length){var a=n.apply(null,s);a&&r.push(a)}}else if(o==="object")if(s.toString===Object.prototype.toString)for(var l in s)e.call(s,l)&&s[l]&&r.push(l);else r.push(s.toString())}}return r.join(" ")}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(Zk);const bt=Zk.exports,kj=["as","disabled"];function Nj(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Rj(t){return!t||t.trim()==="#"}function eN({tagName:t,disabled:e,href:n,target:r,rel:i,role:s,onClick:o,tabIndex:a=0,type:l}){t||(n!=null||r!=null||i!=null?t="a":t="button");const u={tagName:t};if(t==="button")return[{type:l||"button",disabled:e},u];const c=d=>{if((e||t==="a"&&Rj(n))&&d.preventDefault(),e){d.stopPropagation();return}o==null||o(d)},h=d=>{d.key===" "&&(d.preventDefault(),c(d))};return t==="a"&&(n||(n="#"),e&&(n=void 0)),[{role:s!=null?s:"button",disabled:void 0,tabIndex:e?void 0:a,href:n,target:t==="a"?r:void 0,"aria-disabled":e||void 0,rel:t==="a"?i:void 0,onClick:c,onKeyDown:h},u]}const xj=E.exports.forwardRef((t,e)=>{let{as:n,disabled:r}=t,i=Nj(t,kj);const[s,{tagName:o}]=eN(Object.assign({tagName:n,disabled:r},i));return O(o,Object.assign({},i,s,{ref:e}))});xj.displayName="Button";const bj=["xxl","xl","lg","md","sm","xs"],Aj="xs",Pj=E.exports.createContext({prefixes:{},breakpoints:bj,minBreakpoint:Aj});function kn(t,e){const{prefixes:n}=E.exports.useContext(Pj);return t||n[e]||e}const Oj={variant:"primary",active:!1,disabled:!1},qa=E.exports.forwardRef(({as:t,bsPrefix:e,variant:n,size:r,active:i,className:s,...o},a)=>{const l=kn(e,"btn"),[u,{tagName:c}]=eN({tagName:t,...o});return O(c,{...u,...o,ref:a,className:bt(s,l,i&&"active",n&&`${l}-${n}`,r&&`${l}-${r}`,o.href&&o.disabled&&"disabled")})});qa.displayName="Button";qa.defaultProps=Oj;function Dj({messagesCollection:t}){const[e,n]=E.exports.useState(""),{data:r}=My(),{uid:i,displayName:s,photoURL:o}=r;return Yt("form",{onSubmit:u=>{u.preventDefault();const c=e.trim();c&&(TU(t,{text:c,createdAt:kU(),uid:i,displayName:s,photoURL:o}),n(""))},children:[O("input",{value:e,onChange:u=>{n(u.target.value)},placeholder:"Type your message here..."}),O(qa,{variant:"outline-danger",disabled:!e,children:"Send"})]})}const Mj=new Intl.DateTimeFormat("en-GB",{hour:"numeric",minute:"numeric",second:"numeric",hour12:!1});function Lj({createdAt:t,text:e,displayName:n,id:r,uid:i}){const{data:s}=My(),o=Jk();return Yt("div",{children:["[",t!=null&&t.seconds?O("span",{children:Mj.format(new Date(t.seconds*1e3))}):null,"]"," ",Yt("strong",{children:["<",n||null,">"]})," ",e,i===s.uid?O("button",{onClick:async()=>{await CU(jI(o,"messages",r))},children:"Poista"}):null]})}function Fj({messages:t}){return O("pre",{children:t==null?void 0:t.map(e=>O(Lj,{...e},e.id))})}function $j(){const t=Jk(),e=J2(t,"messages"),n=pU(e,gU("createdAt"),vU(100)),{status:r,data:i}=_j(n,{idField:"id"});return Yt("div",{children:[r==="loading"?O("span",{children:"loading..."}):O(Fj,{messages:i}),O(Dj,{messagesCollection:e})]})}const Uj={fluid:!1},Vy=E.exports.forwardRef(({bsPrefix:t,fluid:e,as:n="div",className:r,...i},s)=>{const o=kn(t,"container"),a=typeof e=="string"?`-${e}`:"-fluid";return O(n,{ref:s,...i,className:bt(r,e?`${o}${a}`:o)})});Vy.displayName="Container";Vy.defaultProps=Uj;const Vj=E.exports.createContext(null);function $p(){return $p=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},$p.apply(this,arguments)}function tN(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Tw(t){return"default"+t.charAt(0).toUpperCase()+t.substr(1)}function Bj(t){var e=jj(t,"string");return typeof e=="symbol"?e:String(e)}function jj(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function zj(t,e,n){var r=E.exports.useRef(t!==void 0),i=E.exports.useState(e),s=i[0],o=i[1],a=t!==void 0,l=r.current;return r.current=a,!a&&l&&s!==e&&o(e),[a?t:s,E.exports.useCallback(function(u){for(var c=arguments.length,h=new Array(c>1?c-1:0),d=1;d<c;d++)h[d-1]=arguments[d];n&&n.apply(void 0,[u].concat(h)),o(u)},[n])]}function Hj(t,e){return Object.keys(e).reduce(function(n,r){var i,s=n,o=s[Tw(r)],a=s[r],l=tN(s,[Tw(r),r].map(Bj)),u=e[r],c=zj(a,o,t[u]),h=c[0],d=c[1];return $p({},l,(i={},i[r]=h,i[u]=d,i))},t)}function Up(t,e){return Up=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Up(t,e)}function Wj(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Up(t,e)}var qj=/-(.)/g;function Kj(t){return t.replace(qj,function(e,n){return n.toUpperCase()})}const Gj=t=>t[0].toUpperCase()+Kj(t).slice(1);function By(t,{displayName:e=Gj(t),Component:n,defaultProps:r}={}){const i=E.exports.forwardRef(({className:s,bsPrefix:o,as:a=n||"div",...l},u)=>{const c=kn(o,t);return O(a,{ref:u,className:bt(s,c),...l})});return i.defaultProps=r,i.displayName=e,i}const nN=E.exports.forwardRef(({bsPrefix:t,className:e,as:n,...r},i)=>{t=kn(t,"navbar-brand");const s=n||(r.href?"a":"span");return O(s,{...r,ref:i,className:bt(e,t)})});nN.displayName="NavbarBrand";function jy(t){return t&&t.ownerDocument||document}function Qj(t){var e=jy(t);return e&&e.defaultView||window}function Yj(t,e){return Qj(t).getComputedStyle(t,e)}var Xj=/([A-Z])/g;function Jj(t){return t.replace(Xj,"-$1").toLowerCase()}var Zj=/^ms-/;function ru(t){return Jj(t).replace(Zj,"-ms-")}var ez=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function tz(t){return!!(t&&ez.test(t))}function jn(t,e){var n="",r="";if(typeof e=="string")return t.style.getPropertyValue(ru(e))||Yj(t).getPropertyValue(ru(e));Object.keys(e).forEach(function(i){var s=e[i];!s&&s!==0?t.style.removeProperty(ru(i)):tz(i)?r+=i+"("+s+") ":n+=ru(i)+": "+s+";"}),r&&(n+="transform: "+r+";"),t.style.cssText+=";"+n}var Nu={exports:{}},nz="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",rz=nz,iz=rz;function rN(){}function iN(){}iN.resetWarningCache=rN;var sz=function(){function t(r,i,s,o,a,l){if(l!==iz){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:iN,resetWarningCache:rN};return n.PropTypes=n,n};Nu.exports=sz();const Sw={disabled:!1},sN=$n.createContext(null);var oz=function(e){return e.scrollTop},Mo="unmounted",cr="exited",rn="entering",An="entered",Ka="exiting",nr=function(t){Wj(e,t);function e(r,i){var s;s=t.call(this,r,i)||this;var o=i,a=o&&!o.isMounting?r.enter:r.appear,l;return s.appearStatus=null,r.in?a?(l=cr,s.appearStatus=rn):l=An:r.unmountOnExit||r.mountOnEnter?l=Mo:l=cr,s.state={status:l},s.nextCallback=null,s}e.getDerivedStateFromProps=function(i,s){var o=i.in;return o&&s.status===Mo?{status:cr}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(i){var s=null;if(i!==this.props){var o=this.state.status;this.props.in?o!==rn&&o!==An&&(s=rn):(o===rn||o===An)&&(s=Ka)}this.updateStatus(!1,s)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var i=this.props.timeout,s,o,a;return s=o=a=i,i!=null&&typeof i!="number"&&(s=i.exit,o=i.enter,a=i.appear!==void 0?i.appear:o),{exit:s,enter:o,appear:a}},n.updateStatus=function(i,s){if(i===void 0&&(i=!1),s!==null)if(this.cancelNextCallback(),s===rn){if(this.props.unmountOnExit||this.props.mountOnEnter){var o=this.props.nodeRef?this.props.nodeRef.current:as.findDOMNode(this);o&&oz(o)}this.performEnter(i)}else this.performExit();else this.props.unmountOnExit&&this.state.status===cr&&this.setState({status:Mo})},n.performEnter=function(i){var s=this,o=this.props.enter,a=this.context?this.context.isMounting:i,l=this.props.nodeRef?[a]:[as.findDOMNode(this),a],u=l[0],c=l[1],h=this.getTimeouts(),d=a?h.appear:h.enter;if(!i&&!o||Sw.disabled){this.safeSetState({status:An},function(){s.props.onEntered(u)});return}this.props.onEnter(u,c),this.safeSetState({status:rn},function(){s.props.onEntering(u,c),s.onTransitionEnd(d,function(){s.safeSetState({status:An},function(){s.props.onEntered(u,c)})})})},n.performExit=function(){var i=this,s=this.props.exit,o=this.getTimeouts(),a=this.props.nodeRef?void 0:as.findDOMNode(this);if(!s||Sw.disabled){this.safeSetState({status:cr},function(){i.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:Ka},function(){i.props.onExiting(a),i.onTransitionEnd(o.exit,function(){i.safeSetState({status:cr},function(){i.props.onExited(a)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(i,s){s=this.setNextCallback(s),this.setState(i,s)},n.setNextCallback=function(i){var s=this,o=!0;return this.nextCallback=function(a){o&&(o=!1,s.nextCallback=null,i(a))},this.nextCallback.cancel=function(){o=!1},this.nextCallback},n.onTransitionEnd=function(i,s){this.setNextCallback(s);var o=this.props.nodeRef?this.props.nodeRef.current:as.findDOMNode(this),a=i==null&&!this.props.addEndListener;if(!o||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[o,this.nextCallback],u=l[0],c=l[1];this.props.addEndListener(u,c)}i!=null&&setTimeout(this.nextCallback,i)},n.render=function(){var i=this.state.status;if(i===Mo)return null;var s=this.props,o=s.children;s.in,s.mountOnEnter,s.unmountOnExit,s.appear,s.enter,s.exit,s.timeout,s.addEndListener,s.onEnter,s.onEntering,s.onEntered,s.onExit,s.onExiting,s.onExited,s.nodeRef;var a=tN(s,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return O(sN.Provider,{value:null,children:typeof o=="function"?o(i,a):$n.cloneElement($n.Children.only(o),a)})},e}($n.Component);nr.contextType=sN;nr.propTypes={};function qi(){}nr.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:qi,onEntering:qi,onEntered:qi,onExit:qi,onExiting:qi,onExited:qi};nr.UNMOUNTED=Mo;nr.EXITED=cr;nr.ENTERING=rn;nr.ENTERED=An;nr.EXITING=Ka;const Lh=!!(typeof window<"u"&&window.document&&window.document.createElement);var Vp=!1,Bp=!1;try{var Hd={get passive(){return Vp=!0},get once(){return Bp=Vp=!0}};Lh&&(window.addEventListener("test",Hd,Hd),window.removeEventListener("test",Hd,!0))}catch{}function az(t,e,n,r){if(r&&typeof r!="boolean"&&!Bp){var i=r.once,s=r.capture,o=n;!Bp&&i&&(o=n.__once||function a(l){this.removeEventListener(e,a,s),n.call(this,l)},n.__once=o),t.addEventListener(e,o,Vp?r:s)}t.addEventListener(e,n,r)}function lz(t,e,n,r){var i=r&&typeof r!="boolean"?r.capture:r;t.removeEventListener(e,n,i),n.__once&&t.removeEventListener(e,n.__once,i)}function Lc(t,e,n,r){return az(t,e,n,r),function(){lz(t,e,n,r)}}function uz(t,e,n,r){if(n===void 0&&(n=!1),r===void 0&&(r=!0),t){var i=document.createEvent("HTMLEvents");i.initEvent(e,n,r),t.dispatchEvent(i)}}function cz(t){var e=jn(t,"transitionDuration")||"",n=e.indexOf("ms")===-1?1e3:1;return parseFloat(e)*n}function hz(t,e,n){n===void 0&&(n=5);var r=!1,i=setTimeout(function(){r||uz(t,"transitionend",!0)},e+n),s=Lc(t,"transitionend",function(){r=!0},{once:!0});return function(){clearTimeout(i),s()}}function dz(t,e,n,r){n==null&&(n=cz(t)||0);var i=hz(t,n,r),s=Lc(t,"transitionend",e);return function(){i(),s()}}function Iw(t,e){const n=jn(t,e)||"",r=n.indexOf("ms")===-1?1e3:1;return parseFloat(n)*r}function zy(t,e){const n=Iw(t,"transitionDuration"),r=Iw(t,"transitionDelay"),i=dz(t,s=>{s.target===t&&(i(),e(s))},n+r)}function No(...t){return t.filter(e=>e!=null).reduce((e,n)=>{if(typeof n!="function")throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return e===null?n:function(...i){e.apply(this,i),n.apply(this,i)}},null)}function oN(t){t.offsetHeight}var kw=function(e){return!e||typeof e=="function"?e:function(n){e.current=n}};function fz(t,e){var n=kw(t),r=kw(e);return function(i){n&&n(i),r&&r(i)}}function pz(t,e){return E.exports.useMemo(function(){return fz(t,e)},[t,e])}function mz(t){return t&&"setState"in t?as.findDOMNode(t):t!=null?t:null}const Hy=$n.forwardRef(({onEnter:t,onEntering:e,onEntered:n,onExit:r,onExiting:i,onExited:s,addEndListener:o,children:a,childRef:l,...u},c)=>{const h=E.exports.useRef(null),d=pz(h,l),f=N=>{d(mz(N))},g=N=>R=>{N&&h.current&&N(h.current,R)},v=E.exports.useCallback(g(t),[t]),w=E.exports.useCallback(g(e),[e]),m=E.exports.useCallback(g(n),[n]),p=E.exports.useCallback(g(r),[r]),y=E.exports.useCallback(g(i),[i]),_=E.exports.useCallback(g(s),[s]),I=E.exports.useCallback(g(o),[o]);return O(nr,{ref:c,...u,onEnter:v,onEntered:m,onEntering:w,onExit:p,onExited:_,onExiting:y,addEndListener:I,nodeRef:h,children:typeof a=="function"?(N,R)=>a(N,{...R,ref:f}):$n.cloneElement(a,{ref:f})})}),gz={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function aN(t,e){const n=`offset${t[0].toUpperCase()}${t.slice(1)}`,r=e[n],i=gz[t];return r+parseInt(jn(e,i[0]),10)+parseInt(jn(e,i[1]),10)}const yz={[cr]:"collapse",[Ka]:"collapsing",[rn]:"collapsing",[An]:"collapse show"},vz={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:aN},lN=$n.forwardRef(({onEnter:t,onEntering:e,onEntered:n,onExit:r,onExiting:i,className:s,children:o,dimension:a="height",getDimensionValue:l=aN,...u},c)=>{const h=typeof a=="function"?a():a,d=E.exports.useMemo(()=>No(m=>{m.style[h]="0"},t),[h,t]),f=E.exports.useMemo(()=>No(m=>{const p=`scroll${h[0].toUpperCase()}${h.slice(1)}`;m.style[h]=`${m[p]}px`},e),[h,e]),g=E.exports.useMemo(()=>No(m=>{m.style[h]=null},n),[h,n]),v=E.exports.useMemo(()=>No(m=>{m.style[h]=`${l(h,m)}px`,oN(m)},r),[r,l,h]),w=E.exports.useMemo(()=>No(m=>{m.style[h]=null},i),[h,i]);return O(Hy,{ref:c,addEndListener:zy,...u,"aria-expanded":u.role?u.in:null,onEnter:d,onEntering:f,onEntered:g,onExit:v,onExiting:w,childRef:o.ref,children:(m,p)=>$n.cloneElement(o,{...p,className:bt(s,o.props.className,yz[m],h==="width"&&"collapse-horizontal")})})});lN.defaultProps=vz;const fo=E.exports.createContext(null);fo.displayName="NavbarContext";const uN=E.exports.forwardRef(({children:t,bsPrefix:e,...n},r)=>{e=kn(e,"navbar-collapse");const i=E.exports.useContext(fo);return O(lN,{in:!!(i&&i.expanded),...n,children:O("div",{ref:r,className:e,children:t})})});uN.displayName="NavbarCollapse";function _z(t){var e=E.exports.useRef(t);return E.exports.useEffect(function(){e.current=t},[t]),e}function gr(t){var e=_z(t);return E.exports.useCallback(function(){return e.current&&e.current.apply(e,arguments)},[e])}const wz={label:"Toggle navigation"},Wy=E.exports.forwardRef(({bsPrefix:t,className:e,children:n,label:r,as:i="button",onClick:s,...o},a)=>{t=kn(t,"navbar-toggler");const{onToggle:l,expanded:u}=E.exports.useContext(fo)||{},c=gr(h=>{s&&s(h),l&&l()});return i==="button"&&(o.type="button"),O(i,{...o,ref:a,onClick:c,"aria-label":r,className:bt(e,t,!u&&"collapsed"),children:n||O("span",{className:`${t}-icon`})})});Wy.displayName="NavbarToggle";Wy.defaultProps=wz;var Ez=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",Cz=typeof document<"u";const Tz=Cz||Ez?E.exports.useLayoutEffect:E.exports.useEffect;var jp=new WeakMap,Nw=function(e,n){if(!(!e||!n)){var r=jp.get(n)||new Map;jp.set(n,r);var i=r.get(e);return i||(i=n.matchMedia(e),i.refCount=0,r.set(i.media,i)),i}};function Sz(t,e){e===void 0&&(e=typeof window>"u"?void 0:window);var n=Nw(t,e),r=E.exports.useState(function(){return n?n.matches:!1}),i=r[0],s=r[1];return Tz(function(){var o=Nw(t,e);if(!o)return s(!1);var a=jp.get(e),l=function(){s(o.matches)};return o.refCount++,o.addListener(l),l(),function(){o.removeListener(l),o.refCount--,o.refCount<=0&&(a==null||a.delete(o.media)),o=void 0}},[t]),i}function Iz(t){var e=Object.keys(t);function n(a,l){return a===l?l:a?a+" and "+l:l}function r(a){return e[Math.min(e.indexOf(a)+1,e.length-1)]}function i(a){var l=r(a),u=t[l];return typeof u=="number"?u=u-.2+"px":u="calc("+u+" - 0.2px)","(max-width: "+u+")"}function s(a){var l=t[a];return typeof l=="number"&&(l=l+"px"),"(min-width: "+l+")"}function o(a,l,u){var c;if(typeof a=="object")c=a,u=l,l=!0;else{var h;l=l||!0,c=(h={},h[a]=l,h)}var d=E.exports.useMemo(function(){return Object.entries(c).reduce(function(f,g){var v=g[0],w=g[1];return(w==="up"||w===!0)&&(f=n(f,s(v))),(w==="down"||w===!0)&&(f=n(f,i(v))),f},"")},[JSON.stringify(c)]);return Sz(d,u)}return o}var kz=Iz({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400});function Wd(t){t===void 0&&(t=jy());try{var e=t.activeElement;return!e||!e.nodeName?null:e}catch{return t.body}}function Rw(t,e){if(t.contains)return t.contains(e);if(t.compareDocumentPosition)return t===e||!!(t.compareDocumentPosition(e)&16)}function Nz(){var t=E.exports.useRef(!0),e=E.exports.useRef(function(){return t.current});return E.exports.useEffect(function(){return t.current=!0,function(){t.current=!1}},[]),e.current}function Rz(t){var e=E.exports.useRef(t);return e.current=t,e}function xz(t){var e=Rz(t);E.exports.useEffect(function(){return function(){return e.current()}},[])}function bz(t){var e=E.exports.useRef(null);return E.exports.useEffect(function(){e.current=t}),e.current}const Az="data-rr-ui-";function Pz(t){return`${Az}${t}`}function Oz(t=document){const e=t.defaultView;return Math.abs(e.innerWidth-t.documentElement.clientWidth)}const xw=Pz("modal-open");class qy{constructor({ownerDocument:e,handleContainerOverflow:n=!0,isRTL:r=!1}={}){this.handleContainerOverflow=n,this.isRTL=r,this.modals=[],this.ownerDocument=e}getScrollbarWidth(){return Oz(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(e){}removeModalAttributes(e){}setContainerStyle(e){const n={overflow:"hidden"},r=this.isRTL?"paddingLeft":"paddingRight",i=this.getElement();e.style={overflow:i.style.overflow,[r]:i.style[r]},e.scrollBarWidth&&(n[r]=`${parseInt(jn(i,r)||"0",10)+e.scrollBarWidth}px`),i.setAttribute(xw,""),jn(i,n)}reset(){[...this.modals].forEach(e=>this.remove(e))}removeContainerStyle(e){const n=this.getElement();n.removeAttribute(xw),Object.assign(n.style,e.style)}add(e){let n=this.modals.indexOf(e);return n!==-1||(n=this.modals.length,this.modals.push(e),this.setModalAttributes(e),n!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),n}remove(e){const n=this.modals.indexOf(e);n!==-1&&(this.modals.splice(n,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}isTopModal(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}}const cN=E.exports.createContext(Lh?window:void 0);cN.Provider;function hN(){return E.exports.useContext(cN)}const qd=(t,e)=>Lh?t==null?(e||jy()).body:(typeof t=="function"&&(t=t()),t&&"current"in t&&(t=t.current),t&&("nodeType"in t||t.getBoundingClientRect)?t:null):null;function Dz(t,e){const n=hN(),[r,i]=E.exports.useState(()=>qd(t,n==null?void 0:n.document));if(!r){const s=qd(t);s&&i(s)}return E.exports.useEffect(()=>{e&&r&&e(r)},[e,r]),E.exports.useEffect(()=>{const s=qd(t);s!==r&&i(s)},[t,r]),r}const Mz=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","backdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function Lz(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}let Kd;function Fz(t){return Kd||(Kd=new qy({ownerDocument:t==null?void 0:t.document})),Kd}function $z(t){const e=hN(),n=t||Fz(e),r=E.exports.useRef({dialog:null,backdrop:null});return Object.assign(r.current,{add:()=>n.add(r.current),remove:()=>n.remove(r.current),isTopModal:()=>n.isTopModal(r.current),setDialogRef:E.exports.useCallback(i=>{r.current.dialog=i},[]),setBackdropRef:E.exports.useCallback(i=>{r.current.backdrop=i},[])})}const dN=E.exports.forwardRef((t,e)=>{let{show:n=!1,role:r="dialog",className:i,style:s,children:o,backdrop:a=!0,keyboard:l=!0,onBackdropClick:u,onEscapeKeyDown:c,transition:h,backdropTransition:d,autoFocus:f=!0,enforceFocus:g=!0,restoreFocus:v=!0,restoreFocusOptions:w,renderDialog:m,renderBackdrop:p=ue=>O("div",Object.assign({},ue)),manager:y,container:_,onShow:I,onHide:N=()=>{},onExit:R,onExited:P,onExiting:te,onEnter:H,onEntering:ut,onEntered:Nn}=t,Jt=Lz(t,Mz);const fn=Dz(_),Re=$z(y),Hr=Nz(),rr=bz(n),[x,$]=E.exports.useState(!n),U=E.exports.useRef(null);E.exports.useImperativeHandle(e,()=>Re,[Re]),Lh&&!rr&&n&&(U.current=Wd()),!h&&!n&&!x?$(!0):n&&x&&$(!1);const se=gr(()=>{if(Re.add(),sr.current=Lc(document,"keydown",et),ct.current=Lc(document,"focus",()=>setTimeout(ir),!0),I&&I(),f){const ue=Wd(document);Re.dialog&&ue&&!Rw(Re.dialog,ue)&&(U.current=ue,Re.dialog.focus())}}),fe=gr(()=>{if(Re.remove(),sr.current==null||sr.current(),ct.current==null||ct.current(),v){var ue;(ue=U.current)==null||ue.focus==null||ue.focus(w),U.current=null}});E.exports.useEffect(()=>{!n||!fn||se()},[n,fn,se]),E.exports.useEffect(()=>{!x||fe()},[x,fe]),xz(()=>{fe()});const ir=gr(()=>{if(!g||!Hr()||!Re.isTopModal())return;const ue=Wd();Re.dialog&&ue&&!Rw(Re.dialog,ue)&&Re.dialog.focus()}),Vt=gr(ue=>{ue.target===ue.currentTarget&&(u==null||u(ue),a===!0&&N())}),et=gr(ue=>{l&&ue.keyCode===27&&Re.isTopModal()&&(c==null||c(ue),ue.defaultPrevented||N())}),ct=E.exports.useRef(),sr=E.exports.useRef(),yN=(...ue)=>{$(!0),P==null||P(...ue)},$h=h;if(!fn||!(n||$h&&!x))return null;const Jy=Object.assign({role:r,ref:Re.setDialogRef,"aria-modal":r==="dialog"?!0:void 0},Jt,{style:s,className:i,tabIndex:-1});let Uh=m?m(Jy):O("div",Object.assign({},Jy,{children:E.exports.cloneElement(o,{role:"document"})}));$h&&(Uh=O($h,{appear:!0,unmountOnExit:!0,in:!!n,onExit:R,onExiting:te,onExited:yN,onEnter:H,onEntering:ut,onEntered:Nn,children:Uh}));let Rl=null;if(a){const ue=d;Rl=p({ref:Re.setBackdropRef,onClick:Vt}),ue&&(Rl=O(ue,{appear:!0,in:!!n,children:Rl}))}return O(Oi,{children:as.createPortal(Yt(Oi,{children:[Rl,Uh]}),fn)})});dN.displayName="Modal";const Uz=Object.assign(dN,{Manager:qy}),Vz={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},Bz={[rn]:"show",[An]:"show"},Ky=E.exports.forwardRef(({className:t,children:e,transitionClasses:n={},...r},i)=>{const s=E.exports.useCallback((o,a)=>{oN(o),r.onEnter==null||r.onEnter(o,a)},[r]);return O(Hy,{ref:i,addEndListener:zy,...r,onEnter:s,childRef:e.ref,children:(o,a)=>E.exports.cloneElement(e,{...a,className:bt("fade",t,e.props.className,Bz[o],n[o])})})});Ky.defaultProps=Vz;Ky.displayName="Fade";const jz=By("offcanvas-body"),zz={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1},Hz={[rn]:"show",[An]:"show"},Gy=E.exports.forwardRef(({bsPrefix:t,className:e,children:n,...r},i)=>(t=kn(t,"offcanvas"),O(Hy,{ref:i,addEndListener:zy,...r,childRef:n.ref,children:(s,o)=>E.exports.cloneElement(n,{...o,className:bt(e,n.props.className,(s===rn||s===Ka)&&`${t}-toggling`,Hz[s])})})));Gy.defaultProps=zz;Gy.displayName="OffcanvasToggling";const fN=E.exports.createContext({onHide(){}}),Wz={"aria-label":Nu.exports.string,onClick:Nu.exports.func,variant:Nu.exports.oneOf(["white"])},qz={"aria-label":"Close"},Fh=E.exports.forwardRef(({className:t,variant:e,...n},r)=>O("button",{ref:r,type:"button",className:bt("btn-close",e&&`btn-close-${e}`,t),...n}));Fh.displayName="CloseButton";Fh.propTypes=Wz;Fh.defaultProps=qz;const Kz={closeLabel:"Close",closeButton:!1},pN=E.exports.forwardRef(({closeLabel:t,closeVariant:e,closeButton:n,onHide:r,children:i,...s},o)=>{const a=E.exports.useContext(fN),l=gr(()=>{a==null||a.onHide(),r==null||r()});return Yt("div",{ref:o,...s,children:[i,n&&O(Fh,{"aria-label":t,variant:e,onClick:l})]})});pN.defaultProps=Kz;const Gz={closeLabel:"Close",closeButton:!1},Qy=E.exports.forwardRef(({bsPrefix:t,className:e,...n},r)=>(t=kn(t,"offcanvas-header"),O(pN,{ref:r,...n,className:bt(e,t)})));Qy.displayName="OffcanvasHeader";Qy.defaultProps=Gz;const Qz=t=>E.exports.forwardRef((e,n)=>O("div",{...e,ref:n,className:bt(e.className,t)})),Yz=Qz("h5"),Xz=By("offcanvas-title",{Component:Yz});function Jz(t,e){return t.classList?!!e&&t.classList.contains(e):(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+e+" ")!==-1}function Zz(t,e){t.classList?t.classList.add(e):Jz(t,e)||(typeof t.className=="string"?t.className=t.className+" "+e:t.setAttribute("class",(t.className&&t.className.baseVal||"")+" "+e))}var e3=Function.prototype.bind.call(Function.prototype.call,[].slice);function Ki(t,e){return e3(t.querySelectorAll(e))}function bw(t,e){return t.replace(new RegExp("(^|\\s)"+e+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function t3(t,e){t.classList?t.classList.remove(e):typeof t.className=="string"?t.className=bw(t.className,e):t.setAttribute("class",bw(t.className&&t.className.baseVal||"",e))}const Gi={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class mN extends qy{adjustAndStore(e,n,r){const i=n.style[e];n.dataset[e]=i,jn(n,{[e]:`${parseFloat(jn(n,e))+r}px`})}restore(e,n){const r=n.dataset[e];r!==void 0&&(delete n.dataset[e],jn(n,{[e]:r}))}setContainerStyle(e){super.setContainerStyle(e);const n=this.getElement();if(Zz(n,"modal-open"),!e.scrollBarWidth)return;const r=this.isRTL?"paddingLeft":"paddingRight",i=this.isRTL?"marginLeft":"marginRight";Ki(n,Gi.FIXED_CONTENT).forEach(s=>this.adjustAndStore(r,s,e.scrollBarWidth)),Ki(n,Gi.STICKY_CONTENT).forEach(s=>this.adjustAndStore(i,s,-e.scrollBarWidth)),Ki(n,Gi.NAVBAR_TOGGLER).forEach(s=>this.adjustAndStore(i,s,e.scrollBarWidth))}removeContainerStyle(e){super.removeContainerStyle(e);const n=this.getElement();t3(n,"modal-open");const r=this.isRTL?"paddingLeft":"paddingRight",i=this.isRTL?"marginLeft":"marginRight";Ki(n,Gi.FIXED_CONTENT).forEach(s=>this.restore(r,s)),Ki(n,Gi.STICKY_CONTENT).forEach(s=>this.restore(i,s)),Ki(n,Gi.NAVBAR_TOGGLER).forEach(s=>this.restore(i,s))}}let Gd;function n3(t){return Gd||(Gd=new mN(t)),Gd}const r3={show:!1,backdrop:!0,keyboard:!0,scroll:!1,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,placement:"start",renderStaticNode:!1};function i3(t){return O(Gy,{...t})}function s3(t){return O(Ky,{...t})}const Yy=E.exports.forwardRef(({bsPrefix:t,className:e,children:n,"aria-labelledby":r,placement:i,responsive:s,show:o,backdrop:a,keyboard:l,scroll:u,onEscapeKeyDown:c,onShow:h,onHide:d,container:f,autoFocus:g,enforceFocus:v,restoreFocus:w,restoreFocusOptions:m,onEntered:p,onExit:y,onExiting:_,onEnter:I,onEntering:N,onExited:R,backdropClassName:P,manager:te,renderStaticNode:H,...ut},Nn)=>{const Jt=E.exports.useRef();t=kn(t,"offcanvas");const{onToggle:fn}=E.exports.useContext(fo)||{},[Re,Hr]=E.exports.useState(!1),rr=kz(s||"xs","up");E.exports.useEffect(()=>{Hr(s?o&&!rr:o)},[o,s,rr]);const x=gr(()=>{fn==null||fn(),d==null||d()}),$=E.exports.useMemo(()=>({onHide:x}),[x]);function U(){return te||(u?(Jt.current||(Jt.current=new mN({handleContainerOverflow:!1})),Jt.current):n3())}const se=(et,...ct)=>{et&&(et.style.visibility="visible"),I==null||I(et,...ct)},fe=(et,...ct)=>{et&&(et.style.visibility=""),R==null||R(...ct)},ir=E.exports.useCallback(et=>O("div",{...et,className:bt(`${t}-backdrop`,P)}),[P,t]),Vt=et=>O("div",{...et,...ut,className:bt(e,s?`${t}-${s}`:t,`${t}-${i}`),"aria-labelledby":r,children:n});return Yt(Oi,{children:[!Re&&(s||H)&&Vt({}),O(fN.Provider,{value:$,children:O(Uz,{show:Re,ref:Nn,backdrop:a,container:f,keyboard:l,autoFocus:g,enforceFocus:v&&!u,restoreFocus:w,restoreFocusOptions:m,onEscapeKeyDown:c,onShow:h,onHide:x,onEnter:se,onEntering:N,onEntered:p,onExit:y,onExiting:_,onExited:fe,manager:U(),transition:i3,backdropTransition:s3,renderBackdrop:ir,renderDialog:Vt})})]})});Yy.displayName="Offcanvas";Yy.defaultProps=r3;const o3=Object.assign(Yy,{Body:jz,Header:Qy,Title:Xz}),gN=E.exports.forwardRef((t,e)=>{const n=E.exports.useContext(fo);return O(o3,{ref:e,show:!!(n!=null&&n.expanded),...t,renderStaticNode:!0})});gN.displayName="NavbarOffcanvas";const a3=By("navbar-text",{Component:"span"}),l3={expand:!0,variant:"light",collapseOnSelect:!1},Xy=E.exports.forwardRef((t,e)=>{const{bsPrefix:n,expand:r,variant:i,bg:s,fixed:o,sticky:a,className:l,as:u="nav",expanded:c,onToggle:h,onSelect:d,collapseOnSelect:f,...g}=Hj(t,{expanded:"onToggle"}),v=kn(n,"navbar"),w=E.exports.useCallback((...y)=>{d==null||d(...y),f&&c&&(h==null||h(!1))},[d,f,c,h]);g.role===void 0&&u!=="nav"&&(g.role="navigation");let m=`${v}-expand`;typeof r=="string"&&(m=`${m}-${r}`);const p=E.exports.useMemo(()=>({onToggle:()=>h==null?void 0:h(!c),bsPrefix:v,expanded:!!c,expand:r}),[v,c,r,h]);return O(fo.Provider,{value:p,children:O(Vj.Provider,{value:w,children:O(u,{ref:e,...g,className:bt(l,v,r&&m,i&&`${v}-${i}`,s&&`bg-${s}`,a&&`sticky-${a}`,o&&`fixed-${o}`)})})})});Xy.defaultProps=l3;Xy.displayName="Navbar";const Qd=Object.assign(Xy,{Brand:nN,Collapse:uN,Offcanvas:gN,Text:a3,Toggle:Wy}),u3=async t=>{VA(t),await hP(t,new bn)},c3=()=>{const t=globalThis._reactFirePreloadedObservables;Array.from(t.keys()).forEach(e=>e.includes("firestore")&&t.delete(e))},h3=async t=>{await BA(t),c3()};function d3(){const{data:t}=Gk(),e=$y();return t.signedIn?Yt(Oi,{children:[O(qa,{variant:"outline-danger",onClick:()=>h3(e),children:"Sign out"})," "]}):Yt(Oi,{children:[O(qa,{variant:"outline-danger",onClick:()=>u3(e),children:"Sign in with Google"})," "]})}function f3(){const{data:t}=My();return O(Oi,{children:O(Qd,{bg:"light",expand:"sm",children:Yt(Vy,{children:[O(Qd.Brand,{children:"Chat"}),t&&Yt(Qd.Text,{children:["Sis\xE4\xE4nkirjautunut : ",O("a",{children:t.displayName})]}),O(d3,{})]})})})}function p3(){const{status:t,data:e}=Gk();return t==="loading"?O("span",{children:"loading..."}):Yt(Oi,{children:[O(f3,{}),e.signedIn&&O($j,{})]})}const m3={apiKey:"AIzaSyCxXnUidB20eJPotUbQjUUQmVDk_LFIzQk",authDomain:"example-44ced.firebaseapp.com",projectId:"example-44ced",storageBucket:"example-44ced.appspot.com",messagingSenderId:"340859330515",appId:"1:340859330515:web:98a9e55130e5fbcaced926"};function g3({children:t}){const e=Kk(),n=JP(e),r=oL(e);return O(Tj,{sdk:tU(e),children:O(Ej,{sdk:n,children:O(Cj,{sdk:r,children:t})})})}Yd.createRoot(document.getElementById("root")).render(O($n.StrictMode,{children:O(sj,{firebaseConfig:m3,children:O(g3,{children:O(p3,{})})})}));
