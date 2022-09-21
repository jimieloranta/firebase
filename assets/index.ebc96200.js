(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function dC(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var E={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nl=Symbol.for("react.element"),DN=Symbol.for("react.portal"),MN=Symbol.for("react.fragment"),LN=Symbol.for("react.strict_mode"),$N=Symbol.for("react.profiler"),FN=Symbol.for("react.provider"),UN=Symbol.for("react.context"),VN=Symbol.for("react.forward_ref"),BN=Symbol.for("react.suspense"),jN=Symbol.for("react.memo"),zN=Symbol.for("react.lazy"),g_=Symbol.iterator;function WN(t){return t===null||typeof t!="object"?null:(t=g_&&t[g_]||t["@@iterator"],typeof t=="function"?t:null)}var fC={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},pC=Object.assign,mC={};function ko(t,e,n){this.props=t,this.context=e,this.refs=mC,this.updater=n||fC}ko.prototype.isReactComponent={};ko.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ko.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function gC(){}gC.prototype=ko.prototype;function Um(t,e,n){this.props=t,this.context=e,this.refs=mC,this.updater=n||fC}var Vm=Um.prototype=new gC;Vm.constructor=Um;pC(Vm,ko.prototype);Vm.isPureReactComponent=!0;var v_=Array.isArray,vC=Object.prototype.hasOwnProperty,Bm={current:null},yC={key:!0,ref:!0,__self:!0,__source:!0};function _C(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)vC.call(e,r)&&!yC.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Nl,type:t,key:s,ref:o,props:i,_owner:Bm.current}}function HN(t,e){return{$$typeof:Nl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function jm(t){return typeof t=="object"&&t!==null&&t.$$typeof===Nl}function qN(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var y_=/\/+/g;function Pd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?qN(""+t.key):e.toString(36)}function Wu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Nl:case DN:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Pd(o,0):r,v_(i)?(n="",t!=null&&(n=t.replace(y_,"$&/")+"/"),Wu(i,e,n,"",function(u){return u})):i!=null&&(jm(i)&&(i=HN(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(y_,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",v_(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Pd(s,a);o+=Wu(s,e,n,l,i)}else if(l=WN(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Pd(s,a++),o+=Wu(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function pu(t,e,n){if(t==null)return t;var r=[],i=0;return Wu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function KN(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var kt={current:null},Hu={transition:null},GN={ReactCurrentDispatcher:kt,ReactCurrentBatchConfig:Hu,ReactCurrentOwner:Bm};ee.Children={map:pu,forEach:function(t,e,n){pu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return pu(t,function(){e++}),e},toArray:function(t){return pu(t,function(e){return e})||[]},only:function(t){if(!jm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ee.Component=ko;ee.Fragment=MN;ee.Profiler=$N;ee.PureComponent=Um;ee.StrictMode=LN;ee.Suspense=BN;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=GN;ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=pC({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Bm.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)vC.call(e,l)&&!yC.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Nl,type:t.type,key:i,ref:s,props:r,_owner:o}};ee.createContext=function(t){return t={$$typeof:UN,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:FN,_context:t},t.Consumer=t};ee.createElement=_C;ee.createFactory=function(t){var e=_C.bind(null,t);return e.type=t,e};ee.createRef=function(){return{current:null}};ee.forwardRef=function(t){return{$$typeof:VN,render:t}};ee.isValidElement=jm;ee.lazy=function(t){return{$$typeof:zN,_payload:{_status:-1,_result:t},_init:KN}};ee.memo=function(t,e){return{$$typeof:jN,type:t,compare:e===void 0?null:e}};ee.startTransition=function(t){var e=Hu.transition;Hu.transition={};try{t()}finally{Hu.transition=e}};ee.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ee.useCallback=function(t,e){return kt.current.useCallback(t,e)};ee.useContext=function(t){return kt.current.useContext(t)};ee.useDebugValue=function(){};ee.useDeferredValue=function(t){return kt.current.useDeferredValue(t)};ee.useEffect=function(t,e){return kt.current.useEffect(t,e)};ee.useId=function(){return kt.current.useId()};ee.useImperativeHandle=function(t,e,n){return kt.current.useImperativeHandle(t,e,n)};ee.useInsertionEffect=function(t,e){return kt.current.useInsertionEffect(t,e)};ee.useLayoutEffect=function(t,e){return kt.current.useLayoutEffect(t,e)};ee.useMemo=function(t,e){return kt.current.useMemo(t,e)};ee.useReducer=function(t,e,n){return kt.current.useReducer(t,e,n)};ee.useRef=function(t){return kt.current.useRef(t)};ee.useState=function(t){return kt.current.useState(t)};ee.useSyncExternalStore=function(t,e,n){return kt.current.useSyncExternalStore(t,e,n)};ee.useTransition=function(){return kt.current.useTransition()};ee.version="18.2.0";(function(t){t.exports=ee})(E);const Rn=dC(E.exports);var Wf={},zm={exports:{}},Yt={},wC={exports:{}},EC={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(R,L){var M=R.length;R.push(L);e:for(;0<M;){var re=M-1>>>1,ae=R[re];if(0<i(ae,L))R[re]=L,R[M]=ae,M=re;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var L=R[0],M=R.pop();if(M!==L){R[0]=M;e:for(var re=0,ae=R.length,Bt=ae>>>1;re<Bt;){var Fe=2*(re+1)-1,ge=R[Fe],Re=Fe+1,jt=R[Re];if(0>i(ge,M))Re<ae&&0>i(jt,ge)?(R[re]=jt,R[Re]=M,re=Re):(R[re]=ge,R[Fe]=M,re=Fe);else if(Re<ae&&0>i(jt,M))R[re]=jt,R[Re]=M,re=Re;else break e}}return L}function i(R,L){var M=R.sortIndex-L.sortIndex;return M!==0?M:R.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,f=!1,p=!1,y=!1,w=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(R){for(var L=n(u);L!==null;){if(L.callback===null)r(u);else if(L.startTime<=R)r(u),L.sortIndex=L.expirationTime,e(l,L);else break;L=n(u)}}function _(R){if(y=!1,v(R),!p)if(n(l)!==null)p=!0,we(C);else{var L=n(u);L!==null&&xe(_,L.startTime-R)}}function C(R,L){p=!1,y&&(y=!1,g(I),I=-1),f=!0;var M=d;try{for(v(L),h=n(l);h!==null&&(!(h.expirationTime>L)||R&&!U());){var re=h.callback;if(typeof re=="function"){h.callback=null,d=h.priorityLevel;var ae=re(h.expirationTime<=L);L=t.unstable_now(),typeof ae=="function"?h.callback=ae:h===n(l)&&r(l),v(L)}else r(l);h=n(l)}if(h!==null)var Bt=!0;else{var Fe=n(u);Fe!==null&&xe(_,Fe.startTime-L),Bt=!1}return Bt}finally{h=null,d=M,f=!1}}var T=!1,S=null,I=-1,F=5,O=-1;function U(){return!(t.unstable_now()-O<F)}function W(){if(S!==null){var R=t.unstable_now();O=R;var L=!0;try{L=S(!0,R)}finally{L?H():(T=!1,S=null)}}else T=!1}var H;if(typeof m=="function")H=function(){m(W)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,te=ue.port2;ue.port1.onmessage=W,H=function(){te.postMessage(null)}}else H=function(){w(W,0)};function we(R){S=R,T||(T=!0,H())}function xe(R,L){I=w(function(){R(t.unstable_now())},L)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_continueExecution=function(){p||f||(p=!0,we(C))},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<R?Math.floor(1e3/R):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(R){switch(d){case 1:case 2:case 3:var L=3;break;default:L=d}var M=d;d=L;try{return R()}finally{d=M}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(R,L){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var M=d;d=R;try{return L()}finally{d=M}},t.unstable_scheduleCallback=function(R,L,M){var re=t.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?re+M:re):M=re,R){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=M+ae,R={id:c++,callback:L,priorityLevel:R,startTime:M,expirationTime:ae,sortIndex:-1},M>re?(R.sortIndex=M,e(u,R),n(l)===null&&R===n(u)&&(y?(g(I),I=-1):y=!0,xe(_,M-re))):(R.sortIndex=ae,e(l,R),p||f||(p=!0,we(C))),R},t.unstable_shouldYield=U,t.unstable_wrapCallback=function(R){var L=d;return function(){var M=d;d=L;try{return R.apply(this,arguments)}finally{d=M}}}})(EC);(function(t){t.exports=EC})(wC);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var CC=E.exports,Kt=wC.exports;function x(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var TC=new Set,Ma={};function ns(t,e){Xs(t,e),Xs(t+"Capture",e)}function Xs(t,e){for(Ma[t]=e,t=0;t<e.length;t++)TC.add(e[t])}var ir=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hf=Object.prototype.hasOwnProperty,QN=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,__={},w_={};function YN(t){return Hf.call(w_,t)?!0:Hf.call(__,t)?!1:QN.test(t)?w_[t]=!0:(__[t]=!0,!1)}function XN(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function JN(t,e,n,r){if(e===null||typeof e>"u"||XN(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function xt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var lt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){lt[t]=new xt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];lt[e]=new xt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){lt[t]=new xt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){lt[t]=new xt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){lt[t]=new xt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){lt[t]=new xt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){lt[t]=new xt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){lt[t]=new xt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){lt[t]=new xt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Wm=/[\-:]([a-z])/g;function Hm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Wm,Hm);lt[e]=new xt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Wm,Hm);lt[e]=new xt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Wm,Hm);lt[e]=new xt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){lt[t]=new xt(t,1,!1,t.toLowerCase(),null,!1,!1)});lt.xlinkHref=new xt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){lt[t]=new xt(t,1,!1,t.toLowerCase(),null,!0,!0)});function qm(t,e,n,r){var i=lt.hasOwnProperty(e)?lt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(JN(e,n,i,r)&&(n=null),r||i===null?YN(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var pr=CC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,mu=Symbol.for("react.element"),_s=Symbol.for("react.portal"),ws=Symbol.for("react.fragment"),Km=Symbol.for("react.strict_mode"),qf=Symbol.for("react.profiler"),SC=Symbol.for("react.provider"),IC=Symbol.for("react.context"),Gm=Symbol.for("react.forward_ref"),Kf=Symbol.for("react.suspense"),Gf=Symbol.for("react.suspense_list"),Qm=Symbol.for("react.memo"),Er=Symbol.for("react.lazy"),kC=Symbol.for("react.offscreen"),E_=Symbol.iterator;function zo(t){return t===null||typeof t!="object"?null:(t=E_&&t[E_]||t["@@iterator"],typeof t=="function"?t:null)}var ke=Object.assign,Dd;function ia(t){if(Dd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Dd=e&&e[1]||""}return`
`+Dd+t}var Md=!1;function Ld(t,e){if(!t||Md)return"";Md=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Md=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ia(t):""}function ZN(t){switch(t.tag){case 5:return ia(t.type);case 16:return ia("Lazy");case 13:return ia("Suspense");case 19:return ia("SuspenseList");case 0:case 2:case 15:return t=Ld(t.type,!1),t;case 11:return t=Ld(t.type.render,!1),t;case 1:return t=Ld(t.type,!0),t;default:return""}}function Qf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ws:return"Fragment";case _s:return"Portal";case qf:return"Profiler";case Km:return"StrictMode";case Kf:return"Suspense";case Gf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case IC:return(t.displayName||"Context")+".Consumer";case SC:return(t._context.displayName||"Context")+".Provider";case Gm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Qm:return e=t.displayName||null,e!==null?e:Qf(t.type)||"Memo";case Er:e=t._payload,t=t._init;try{return Qf(t(e))}catch{}}return null}function eR(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qf(e);case 8:return e===Km?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function zr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function xC(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function tR(t){var e=xC(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function gu(t){t._valueTracker||(t._valueTracker=tR(t))}function bC(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=xC(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function pc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Yf(t,e){var n=e.checked;return ke({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function C_(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=zr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function NC(t,e){e=e.checked,e!=null&&qm(t,"checked",e,!1)}function Xf(t,e){NC(t,e);var n=zr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Jf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Jf(t,e.type,zr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function T_(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Jf(t,e,n){(e!=="number"||pc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var sa=Array.isArray;function Ls(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+zr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Zf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(x(91));return ke({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function S_(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(x(92));if(sa(n)){if(1<n.length)throw Error(x(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:zr(n)}}function RC(t,e){var n=zr(e.value),r=zr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function I_(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function AC(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ep(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?AC(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var vu,OC=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(vu=vu||document.createElement("div"),vu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=vu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function La(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var da={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nR=["Webkit","ms","Moz","O"];Object.keys(da).forEach(function(t){nR.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),da[e]=da[t]})});function PC(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||da.hasOwnProperty(t)&&da[t]?(""+e).trim():e+"px"}function DC(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=PC(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var rR=ke({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function tp(t,e){if(e){if(rR[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(x(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(x(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(x(61))}if(e.style!=null&&typeof e.style!="object")throw Error(x(62))}}function np(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rp=null;function Ym(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ip=null,$s=null,Fs=null;function k_(t){if(t=Ol(t)){if(typeof ip!="function")throw Error(x(280));var e=t.stateNode;e&&(e=bh(e),ip(t.stateNode,t.type,e))}}function MC(t){$s?Fs?Fs.push(t):Fs=[t]:$s=t}function LC(){if($s){var t=$s,e=Fs;if(Fs=$s=null,k_(t),e)for(t=0;t<e.length;t++)k_(e[t])}}function $C(t,e){return t(e)}function FC(){}var $d=!1;function UC(t,e,n){if($d)return t(e,n);$d=!0;try{return $C(t,e,n)}finally{$d=!1,($s!==null||Fs!==null)&&(FC(),LC())}}function $a(t,e){var n=t.stateNode;if(n===null)return null;var r=bh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(x(231,e,typeof n));return n}var sp=!1;if(ir)try{var Wo={};Object.defineProperty(Wo,"passive",{get:function(){sp=!0}}),window.addEventListener("test",Wo,Wo),window.removeEventListener("test",Wo,Wo)}catch{sp=!1}function iR(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var fa=!1,mc=null,gc=!1,op=null,sR={onError:function(t){fa=!0,mc=t}};function oR(t,e,n,r,i,s,o,a,l){fa=!1,mc=null,iR.apply(sR,arguments)}function aR(t,e,n,r,i,s,o,a,l){if(oR.apply(this,arguments),fa){if(fa){var u=mc;fa=!1,mc=null}else throw Error(x(198));gc||(gc=!0,op=u)}}function rs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function VC(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function x_(t){if(rs(t)!==t)throw Error(x(188))}function lR(t){var e=t.alternate;if(!e){if(e=rs(t),e===null)throw Error(x(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return x_(i),t;if(s===r)return x_(i),e;s=s.sibling}throw Error(x(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?t:e}function BC(t){return t=lR(t),t!==null?jC(t):null}function jC(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=jC(t);if(e!==null)return e;t=t.sibling}return null}var zC=Kt.unstable_scheduleCallback,b_=Kt.unstable_cancelCallback,uR=Kt.unstable_shouldYield,cR=Kt.unstable_requestPaint,Ae=Kt.unstable_now,hR=Kt.unstable_getCurrentPriorityLevel,Xm=Kt.unstable_ImmediatePriority,WC=Kt.unstable_UserBlockingPriority,vc=Kt.unstable_NormalPriority,dR=Kt.unstable_LowPriority,HC=Kt.unstable_IdlePriority,Sh=null,An=null;function fR(t){if(An&&typeof An.onCommitFiberRoot=="function")try{An.onCommitFiberRoot(Sh,t,void 0,(t.current.flags&128)===128)}catch{}}var Tn=Math.clz32?Math.clz32:gR,pR=Math.log,mR=Math.LN2;function gR(t){return t>>>=0,t===0?32:31-(pR(t)/mR|0)|0}var yu=64,_u=4194304;function oa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function yc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=oa(a):(s&=o,s!==0&&(r=oa(s)))}else o=n&~i,o!==0?r=oa(o):s!==0&&(r=oa(s));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Tn(e),i=1<<n,r|=t[n],e&=~i;return r}function vR(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yR(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Tn(s),a=1<<o,l=i[o];l===-1?((a&n)===0||(a&r)!==0)&&(i[o]=vR(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function ap(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function qC(){var t=yu;return yu<<=1,(yu&4194240)===0&&(yu=64),t}function Fd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Rl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Tn(e),t[e]=n}function _R(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Tn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Jm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Tn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ce=0;function KC(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var GC,Zm,QC,YC,XC,lp=!1,wu=[],Or=null,Pr=null,Dr=null,Fa=new Map,Ua=new Map,Sr=[],wR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function N_(t,e){switch(t){case"focusin":case"focusout":Or=null;break;case"dragenter":case"dragleave":Pr=null;break;case"mouseover":case"mouseout":Dr=null;break;case"pointerover":case"pointerout":Fa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ua.delete(e.pointerId)}}function Ho(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ol(e),e!==null&&Zm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function ER(t,e,n,r,i){switch(e){case"focusin":return Or=Ho(Or,t,e,n,r,i),!0;case"dragenter":return Pr=Ho(Pr,t,e,n,r,i),!0;case"mouseover":return Dr=Ho(Dr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Fa.set(s,Ho(Fa.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ua.set(s,Ho(Ua.get(s)||null,t,e,n,r,i)),!0}return!1}function JC(t){var e=vi(t.target);if(e!==null){var n=rs(e);if(n!==null){if(e=n.tag,e===13){if(e=VC(n),e!==null){t.blockedOn=e,XC(t.priority,function(){QC(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function qu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=up(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);rp=r,n.target.dispatchEvent(r),rp=null}else return e=Ol(n),e!==null&&Zm(e),t.blockedOn=n,!1;e.shift()}return!0}function R_(t,e,n){qu(t)&&n.delete(e)}function CR(){lp=!1,Or!==null&&qu(Or)&&(Or=null),Pr!==null&&qu(Pr)&&(Pr=null),Dr!==null&&qu(Dr)&&(Dr=null),Fa.forEach(R_),Ua.forEach(R_)}function qo(t,e){t.blockedOn===e&&(t.blockedOn=null,lp||(lp=!0,Kt.unstable_scheduleCallback(Kt.unstable_NormalPriority,CR)))}function Va(t){function e(i){return qo(i,t)}if(0<wu.length){qo(wu[0],t);for(var n=1;n<wu.length;n++){var r=wu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Or!==null&&qo(Or,t),Pr!==null&&qo(Pr,t),Dr!==null&&qo(Dr,t),Fa.forEach(e),Ua.forEach(e),n=0;n<Sr.length;n++)r=Sr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Sr.length&&(n=Sr[0],n.blockedOn===null);)JC(n),n.blockedOn===null&&Sr.shift()}var Us=pr.ReactCurrentBatchConfig,_c=!0;function TR(t,e,n,r){var i=ce,s=Us.transition;Us.transition=null;try{ce=1,eg(t,e,n,r)}finally{ce=i,Us.transition=s}}function SR(t,e,n,r){var i=ce,s=Us.transition;Us.transition=null;try{ce=4,eg(t,e,n,r)}finally{ce=i,Us.transition=s}}function eg(t,e,n,r){if(_c){var i=up(t,e,n,r);if(i===null)Gd(t,e,r,wc,n),N_(t,r);else if(ER(i,t,e,n,r))r.stopPropagation();else if(N_(t,r),e&4&&-1<wR.indexOf(t)){for(;i!==null;){var s=Ol(i);if(s!==null&&GC(s),s=up(t,e,n,r),s===null&&Gd(t,e,r,wc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Gd(t,e,r,null,n)}}var wc=null;function up(t,e,n,r){if(wc=null,t=Ym(r),t=vi(t),t!==null)if(e=rs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=VC(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return wc=t,null}function ZC(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(hR()){case Xm:return 1;case WC:return 4;case vc:case dR:return 16;case HC:return 536870912;default:return 16}default:return 16}}var Nr=null,tg=null,Ku=null;function eT(){if(Ku)return Ku;var t,e=tg,n=e.length,r,i="value"in Nr?Nr.value:Nr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ku=i.slice(t,1<r?1-r:void 0)}function Gu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Eu(){return!0}function A_(){return!1}function Xt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Eu:A_,this.isPropagationStopped=A_,this}return ke(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Eu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Eu)},persist:function(){},isPersistent:Eu}),e}var xo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ng=Xt(xo),Al=ke({},xo,{view:0,detail:0}),IR=Xt(Al),Ud,Vd,Ko,Ih=ke({},Al,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rg,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ko&&(Ko&&t.type==="mousemove"?(Ud=t.screenX-Ko.screenX,Vd=t.screenY-Ko.screenY):Vd=Ud=0,Ko=t),Ud)},movementY:function(t){return"movementY"in t?t.movementY:Vd}}),O_=Xt(Ih),kR=ke({},Ih,{dataTransfer:0}),xR=Xt(kR),bR=ke({},Al,{relatedTarget:0}),Bd=Xt(bR),NR=ke({},xo,{animationName:0,elapsedTime:0,pseudoElement:0}),RR=Xt(NR),AR=ke({},xo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),OR=Xt(AR),PR=ke({},xo,{data:0}),P_=Xt(PR),DR={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},MR={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},LR={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $R(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=LR[t])?!!e[t]:!1}function rg(){return $R}var FR=ke({},Al,{key:function(t){if(t.key){var e=DR[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Gu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?MR[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rg,charCode:function(t){return t.type==="keypress"?Gu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Gu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),UR=Xt(FR),VR=ke({},Ih,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),D_=Xt(VR),BR=ke({},Al,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rg}),jR=Xt(BR),zR=ke({},xo,{propertyName:0,elapsedTime:0,pseudoElement:0}),WR=Xt(zR),HR=ke({},Ih,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),qR=Xt(HR),KR=[9,13,27,32],ig=ir&&"CompositionEvent"in window,pa=null;ir&&"documentMode"in document&&(pa=document.documentMode);var GR=ir&&"TextEvent"in window&&!pa,tT=ir&&(!ig||pa&&8<pa&&11>=pa),M_=String.fromCharCode(32),L_=!1;function nT(t,e){switch(t){case"keyup":return KR.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rT(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Es=!1;function QR(t,e){switch(t){case"compositionend":return rT(e);case"keypress":return e.which!==32?null:(L_=!0,M_);case"textInput":return t=e.data,t===M_&&L_?null:t;default:return null}}function YR(t,e){if(Es)return t==="compositionend"||!ig&&nT(t,e)?(t=eT(),Ku=tg=Nr=null,Es=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return tT&&e.locale!=="ko"?null:e.data;default:return null}}var XR={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $_(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!XR[t.type]:e==="textarea"}function iT(t,e,n,r){MC(r),e=Ec(e,"onChange"),0<e.length&&(n=new ng("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ma=null,Ba=null;function JR(t){mT(t,0)}function kh(t){var e=Ss(t);if(bC(e))return t}function ZR(t,e){if(t==="change")return e}var sT=!1;if(ir){var jd;if(ir){var zd="oninput"in document;if(!zd){var F_=document.createElement("div");F_.setAttribute("oninput","return;"),zd=typeof F_.oninput=="function"}jd=zd}else jd=!1;sT=jd&&(!document.documentMode||9<document.documentMode)}function U_(){ma&&(ma.detachEvent("onpropertychange",oT),Ba=ma=null)}function oT(t){if(t.propertyName==="value"&&kh(Ba)){var e=[];iT(e,Ba,t,Ym(t)),UC(JR,e)}}function eA(t,e,n){t==="focusin"?(U_(),ma=e,Ba=n,ma.attachEvent("onpropertychange",oT)):t==="focusout"&&U_()}function tA(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return kh(Ba)}function nA(t,e){if(t==="click")return kh(e)}function rA(t,e){if(t==="input"||t==="change")return kh(e)}function iA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var kn=typeof Object.is=="function"?Object.is:iA;function ja(t,e){if(kn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Hf.call(e,i)||!kn(t[i],e[i]))return!1}return!0}function V_(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function B_(t,e){var n=V_(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=V_(n)}}function aT(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?aT(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function lT(){for(var t=window,e=pc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=pc(t.document)}return e}function sg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function sA(t){var e=lT(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&aT(n.ownerDocument.documentElement,n)){if(r!==null&&sg(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=B_(n,s);var o=B_(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var oA=ir&&"documentMode"in document&&11>=document.documentMode,Cs=null,cp=null,ga=null,hp=!1;function j_(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;hp||Cs==null||Cs!==pc(r)||(r=Cs,"selectionStart"in r&&sg(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ga&&ja(ga,r)||(ga=r,r=Ec(cp,"onSelect"),0<r.length&&(e=new ng("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Cs)))}function Cu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ts={animationend:Cu("Animation","AnimationEnd"),animationiteration:Cu("Animation","AnimationIteration"),animationstart:Cu("Animation","AnimationStart"),transitionend:Cu("Transition","TransitionEnd")},Wd={},uT={};ir&&(uT=document.createElement("div").style,"AnimationEvent"in window||(delete Ts.animationend.animation,delete Ts.animationiteration.animation,delete Ts.animationstart.animation),"TransitionEvent"in window||delete Ts.transitionend.transition);function xh(t){if(Wd[t])return Wd[t];if(!Ts[t])return t;var e=Ts[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in uT)return Wd[t]=e[n];return t}var cT=xh("animationend"),hT=xh("animationiteration"),dT=xh("animationstart"),fT=xh("transitionend"),pT=new Map,z_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zr(t,e){pT.set(t,e),ns(e,[t])}for(var Hd=0;Hd<z_.length;Hd++){var qd=z_[Hd],aA=qd.toLowerCase(),lA=qd[0].toUpperCase()+qd.slice(1);Zr(aA,"on"+lA)}Zr(cT,"onAnimationEnd");Zr(hT,"onAnimationIteration");Zr(dT,"onAnimationStart");Zr("dblclick","onDoubleClick");Zr("focusin","onFocus");Zr("focusout","onBlur");Zr(fT,"onTransitionEnd");Xs("onMouseEnter",["mouseout","mouseover"]);Xs("onMouseLeave",["mouseout","mouseover"]);Xs("onPointerEnter",["pointerout","pointerover"]);Xs("onPointerLeave",["pointerout","pointerover"]);ns("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ns("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ns("onBeforeInput",["compositionend","keypress","textInput","paste"]);ns("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ns("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ns("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var aa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uA=new Set("cancel close invalid load scroll toggle".split(" ").concat(aa));function W_(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,aR(r,e,void 0,t),t.currentTarget=null}function mT(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;W_(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;W_(i,a,u),s=l}}}if(gc)throw t=op,gc=!1,op=null,t}function ve(t,e){var n=e[gp];n===void 0&&(n=e[gp]=new Set);var r=t+"__bubble";n.has(r)||(gT(e,t,2,!1),n.add(r))}function Kd(t,e,n){var r=0;e&&(r|=4),gT(n,t,r,e)}var Tu="_reactListening"+Math.random().toString(36).slice(2);function za(t){if(!t[Tu]){t[Tu]=!0,TC.forEach(function(n){n!=="selectionchange"&&(uA.has(n)||Kd(n,!1,t),Kd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Tu]||(e[Tu]=!0,Kd("selectionchange",!1,e))}}function gT(t,e,n,r){switch(ZC(e)){case 1:var i=TR;break;case 4:i=SR;break;default:i=eg}n=i.bind(null,e,n,t),i=void 0,!sp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Gd(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=vi(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}UC(function(){var u=s,c=Ym(n),h=[];e:{var d=pT.get(t);if(d!==void 0){var f=ng,p=t;switch(t){case"keypress":if(Gu(n)===0)break e;case"keydown":case"keyup":f=UR;break;case"focusin":p="focus",f=Bd;break;case"focusout":p="blur",f=Bd;break;case"beforeblur":case"afterblur":f=Bd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=O_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=xR;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=jR;break;case cT:case hT:case dT:f=RR;break;case fT:f=WR;break;case"scroll":f=IR;break;case"wheel":f=qR;break;case"copy":case"cut":case"paste":f=OR;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=D_}var y=(e&4)!==0,w=!y&&t==="scroll",g=y?d!==null?d+"Capture":null:d;y=[];for(var m=u,v;m!==null;){v=m;var _=v.stateNode;if(v.tag===5&&_!==null&&(v=_,g!==null&&(_=$a(m,g),_!=null&&y.push(Wa(m,_,v)))),w)break;m=m.return}0<y.length&&(d=new f(d,p,null,n,c),h.push({event:d,listeners:y}))}}if((e&7)===0){e:{if(d=t==="mouseover"||t==="pointerover",f=t==="mouseout"||t==="pointerout",d&&n!==rp&&(p=n.relatedTarget||n.fromElement)&&(vi(p)||p[sr]))break e;if((f||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,f?(p=n.relatedTarget||n.toElement,f=u,p=p?vi(p):null,p!==null&&(w=rs(p),p!==w||p.tag!==5&&p.tag!==6)&&(p=null)):(f=null,p=u),f!==p)){if(y=O_,_="onMouseLeave",g="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(y=D_,_="onPointerLeave",g="onPointerEnter",m="pointer"),w=f==null?d:Ss(f),v=p==null?d:Ss(p),d=new y(_,m+"leave",f,n,c),d.target=w,d.relatedTarget=v,_=null,vi(c)===u&&(y=new y(g,m+"enter",p,n,c),y.target=v,y.relatedTarget=w,_=y),w=_,f&&p)t:{for(y=f,g=p,m=0,v=y;v;v=fs(v))m++;for(v=0,_=g;_;_=fs(_))v++;for(;0<m-v;)y=fs(y),m--;for(;0<v-m;)g=fs(g),v--;for(;m--;){if(y===g||g!==null&&y===g.alternate)break t;y=fs(y),g=fs(g)}y=null}else y=null;f!==null&&H_(h,d,f,y,!1),p!==null&&w!==null&&H_(h,w,p,y,!0)}}e:{if(d=u?Ss(u):window,f=d.nodeName&&d.nodeName.toLowerCase(),f==="select"||f==="input"&&d.type==="file")var C=ZR;else if($_(d))if(sT)C=rA;else{C=tA;var T=eA}else(f=d.nodeName)&&f.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(C=nA);if(C&&(C=C(t,u))){iT(h,C,n,c);break e}T&&T(t,d,u),t==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&Jf(d,"number",d.value)}switch(T=u?Ss(u):window,t){case"focusin":($_(T)||T.contentEditable==="true")&&(Cs=T,cp=u,ga=null);break;case"focusout":ga=cp=Cs=null;break;case"mousedown":hp=!0;break;case"contextmenu":case"mouseup":case"dragend":hp=!1,j_(h,n,c);break;case"selectionchange":if(oA)break;case"keydown":case"keyup":j_(h,n,c)}var S;if(ig)e:{switch(t){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else Es?nT(t,n)&&(I="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(tT&&n.locale!=="ko"&&(Es||I!=="onCompositionStart"?I==="onCompositionEnd"&&Es&&(S=eT()):(Nr=c,tg="value"in Nr?Nr.value:Nr.textContent,Es=!0)),T=Ec(u,I),0<T.length&&(I=new P_(I,t,null,n,c),h.push({event:I,listeners:T}),S?I.data=S:(S=rT(n),S!==null&&(I.data=S)))),(S=GR?QR(t,n):YR(t,n))&&(u=Ec(u,"onBeforeInput"),0<u.length&&(c=new P_("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=S))}mT(h,e)})}function Wa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ec(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=$a(t,n),s!=null&&r.unshift(Wa(t,s,i)),s=$a(t,e),s!=null&&r.push(Wa(t,s,i))),t=t.return}return r}function fs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function H_(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=$a(n,s),l!=null&&o.unshift(Wa(n,l,a))):i||(l=$a(n,s),l!=null&&o.push(Wa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var cA=/\r\n?/g,hA=/\u0000|\uFFFD/g;function q_(t){return(typeof t=="string"?t:""+t).replace(cA,`
`).replace(hA,"")}function Su(t,e,n){if(e=q_(e),q_(t)!==e&&n)throw Error(x(425))}function Cc(){}var dp=null,fp=null;function pp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var mp=typeof setTimeout=="function"?setTimeout:void 0,dA=typeof clearTimeout=="function"?clearTimeout:void 0,K_=typeof Promise=="function"?Promise:void 0,fA=typeof queueMicrotask=="function"?queueMicrotask:typeof K_<"u"?function(t){return K_.resolve(null).then(t).catch(pA)}:mp;function pA(t){setTimeout(function(){throw t})}function Qd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Va(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Va(e)}function Mr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function G_(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var bo=Math.random().toString(36).slice(2),Nn="__reactFiber$"+bo,Ha="__reactProps$"+bo,sr="__reactContainer$"+bo,gp="__reactEvents$"+bo,mA="__reactListeners$"+bo,gA="__reactHandles$"+bo;function vi(t){var e=t[Nn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[sr]||n[Nn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=G_(t);t!==null;){if(n=t[Nn])return n;t=G_(t)}return e}t=n,n=t.parentNode}return null}function Ol(t){return t=t[Nn]||t[sr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ss(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(x(33))}function bh(t){return t[Ha]||null}var vp=[],Is=-1;function ei(t){return{current:t}}function _e(t){0>Is||(t.current=vp[Is],vp[Is]=null,Is--)}function pe(t,e){Is++,vp[Is]=t.current,t.current=e}var Wr={},_t=ei(Wr),Mt=ei(!1),Mi=Wr;function Js(t,e){var n=t.type.contextTypes;if(!n)return Wr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Lt(t){return t=t.childContextTypes,t!=null}function Tc(){_e(Mt),_e(_t)}function Q_(t,e,n){if(_t.current!==Wr)throw Error(x(168));pe(_t,e),pe(Mt,n)}function vT(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(x(108,eR(t)||"Unknown",i));return ke({},n,r)}function Sc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Wr,Mi=_t.current,pe(_t,t),pe(Mt,Mt.current),!0}function Y_(t,e,n){var r=t.stateNode;if(!r)throw Error(x(169));n?(t=vT(t,e,Mi),r.__reactInternalMemoizedMergedChildContext=t,_e(Mt),_e(_t),pe(_t,t)):_e(Mt),pe(Mt,n)}var Wn=null,Nh=!1,Yd=!1;function yT(t){Wn===null?Wn=[t]:Wn.push(t)}function vA(t){Nh=!0,yT(t)}function ti(){if(!Yd&&Wn!==null){Yd=!0;var t=0,e=ce;try{var n=Wn;for(ce=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Wn=null,Nh=!1}catch(i){throw Wn!==null&&(Wn=Wn.slice(t+1)),zC(Xm,ti),i}finally{ce=e,Yd=!1}}return null}var ks=[],xs=0,Ic=null,kc=0,Zt=[],en=0,Li=null,Gn=1,Qn="";function hi(t,e){ks[xs++]=kc,ks[xs++]=Ic,Ic=t,kc=e}function _T(t,e,n){Zt[en++]=Gn,Zt[en++]=Qn,Zt[en++]=Li,Li=t;var r=Gn;t=Qn;var i=32-Tn(r)-1;r&=~(1<<i),n+=1;var s=32-Tn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Gn=1<<32-Tn(e)+i|n<<i|r,Qn=s+t}else Gn=1<<s|n<<i|r,Qn=t}function og(t){t.return!==null&&(hi(t,1),_T(t,1,0))}function ag(t){for(;t===Ic;)Ic=ks[--xs],ks[xs]=null,kc=ks[--xs],ks[xs]=null;for(;t===Li;)Li=Zt[--en],Zt[en]=null,Qn=Zt[--en],Zt[en]=null,Gn=Zt[--en],Zt[en]=null}var Ht=null,Wt=null,Ee=!1,vn=null;function wT(t,e){var n=nn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function X_(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ht=t,Wt=Mr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ht=t,Wt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Li!==null?{id:Gn,overflow:Qn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=nn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ht=t,Wt=null,!0):!1;default:return!1}}function yp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function _p(t){if(Ee){var e=Wt;if(e){var n=e;if(!X_(t,e)){if(yp(t))throw Error(x(418));e=Mr(n.nextSibling);var r=Ht;e&&X_(t,e)?wT(r,n):(t.flags=t.flags&-4097|2,Ee=!1,Ht=t)}}else{if(yp(t))throw Error(x(418));t.flags=t.flags&-4097|2,Ee=!1,Ht=t}}}function J_(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ht=t}function Iu(t){if(t!==Ht)return!1;if(!Ee)return J_(t),Ee=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!pp(t.type,t.memoizedProps)),e&&(e=Wt)){if(yp(t))throw ET(),Error(x(418));for(;e;)wT(t,e),e=Mr(e.nextSibling)}if(J_(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(x(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Wt=Mr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Wt=null}}else Wt=Ht?Mr(t.stateNode.nextSibling):null;return!0}function ET(){for(var t=Wt;t;)t=Mr(t.nextSibling)}function Zs(){Wt=Ht=null,Ee=!1}function lg(t){vn===null?vn=[t]:vn.push(t)}var yA=pr.ReactCurrentBatchConfig;function mn(t,e){if(t&&t.defaultProps){e=ke({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var xc=ei(null),bc=null,bs=null,ug=null;function cg(){ug=bs=bc=null}function hg(t){var e=xc.current;_e(xc),t._currentValue=e}function wp(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Vs(t,e){bc=t,ug=bs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(At=!0),t.firstContext=null)}function on(t){var e=t._currentValue;if(ug!==t)if(t={context:t,memoizedValue:e,next:null},bs===null){if(bc===null)throw Error(x(308));bs=t,bc.dependencies={lanes:0,firstContext:t}}else bs=bs.next=t;return e}var yi=null;function dg(t){yi===null?yi=[t]:yi.push(t)}function CT(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,dg(e)):(n.next=i.next,i.next=n),e.interleaved=n,or(t,r)}function or(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Cr=!1;function fg(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function TT(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function er(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Lr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(se&2)!==0){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,or(t,n)}return i=r.interleaved,i===null?(e.next=e,dg(r)):(e.next=i.next,i.next=e),r.interleaved=e,or(t,n)}function Qu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Jm(t,n)}}function Z_(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Nc(t,e,n,r){var i=t.updateQueue;Cr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,f=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:f,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var p=t,y=a;switch(d=e,f=n,y.tag){case 1:if(p=y.payload,typeof p=="function"){h=p.call(f,h,d);break e}h=p;break e;case 3:p.flags=p.flags&-65537|128;case 0:if(p=y.payload,d=typeof p=="function"?p.call(f,h,d):p,d==null)break e;h=ke({},h,d);break e;case 2:Cr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else f={eventTime:f,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=f,l=h):c=c.next=f,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Fi|=o,t.lanes=o,t.memoizedState=h}}function ew(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(x(191,i));i.call(r)}}}var ST=new CC.Component().refs;function Ep(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ke({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Rh={isMounted:function(t){return(t=t._reactInternals)?rs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=St(),i=Fr(t),s=er(r,i);s.payload=e,n!=null&&(s.callback=n),e=Lr(t,s,i),e!==null&&(Sn(e,t,i,r),Qu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=St(),i=Fr(t),s=er(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Lr(t,s,i),e!==null&&(Sn(e,t,i,r),Qu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=St(),r=Fr(t),i=er(n,r);i.tag=2,e!=null&&(i.callback=e),e=Lr(t,i,r),e!==null&&(Sn(e,t,r,n),Qu(e,t,r))}};function tw(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ja(n,r)||!ja(i,s):!0}function IT(t,e,n){var r=!1,i=Wr,s=e.contextType;return typeof s=="object"&&s!==null?s=on(s):(i=Lt(e)?Mi:_t.current,r=e.contextTypes,s=(r=r!=null)?Js(t,i):Wr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Rh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function nw(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Rh.enqueueReplaceState(e,e.state,null)}function Cp(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=ST,fg(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=on(s):(s=Lt(e)?Mi:_t.current,i.context=Js(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ep(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Rh.enqueueReplaceState(i,i.state,null),Nc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Go(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===ST&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,t))}return t}function ku(t,e){throw t=Object.prototype.toString.call(e),Error(x(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function rw(t){var e=t._init;return e(t._payload)}function kT(t){function e(g,m){if(t){var v=g.deletions;v===null?(g.deletions=[m],g.flags|=16):v.push(m)}}function n(g,m){if(!t)return null;for(;m!==null;)e(g,m),m=m.sibling;return null}function r(g,m){for(g=new Map;m!==null;)m.key!==null?g.set(m.key,m):g.set(m.index,m),m=m.sibling;return g}function i(g,m){return g=Ur(g,m),g.index=0,g.sibling=null,g}function s(g,m,v){return g.index=v,t?(v=g.alternate,v!==null?(v=v.index,v<m?(g.flags|=2,m):v):(g.flags|=2,m)):(g.flags|=1048576,m)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,m,v,_){return m===null||m.tag!==6?(m=rf(v,g.mode,_),m.return=g,m):(m=i(m,v),m.return=g,m)}function l(g,m,v,_){var C=v.type;return C===ws?c(g,m,v.props.children,_,v.key):m!==null&&(m.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Er&&rw(C)===m.type)?(_=i(m,v.props),_.ref=Go(g,m,v),_.return=g,_):(_=tc(v.type,v.key,v.props,null,g.mode,_),_.ref=Go(g,m,v),_.return=g,_)}function u(g,m,v,_){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=sf(v,g.mode,_),m.return=g,m):(m=i(m,v.children||[]),m.return=g,m)}function c(g,m,v,_,C){return m===null||m.tag!==7?(m=bi(v,g.mode,_,C),m.return=g,m):(m=i(m,v),m.return=g,m)}function h(g,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=rf(""+m,g.mode,v),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case mu:return v=tc(m.type,m.key,m.props,null,g.mode,v),v.ref=Go(g,null,m),v.return=g,v;case _s:return m=sf(m,g.mode,v),m.return=g,m;case Er:var _=m._init;return h(g,_(m._payload),v)}if(sa(m)||zo(m))return m=bi(m,g.mode,v,null),m.return=g,m;ku(g,m)}return null}function d(g,m,v,_){var C=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return C!==null?null:a(g,m,""+v,_);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case mu:return v.key===C?l(g,m,v,_):null;case _s:return v.key===C?u(g,m,v,_):null;case Er:return C=v._init,d(g,m,C(v._payload),_)}if(sa(v)||zo(v))return C!==null?null:c(g,m,v,_,null);ku(g,v)}return null}function f(g,m,v,_,C){if(typeof _=="string"&&_!==""||typeof _=="number")return g=g.get(v)||null,a(m,g,""+_,C);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case mu:return g=g.get(_.key===null?v:_.key)||null,l(m,g,_,C);case _s:return g=g.get(_.key===null?v:_.key)||null,u(m,g,_,C);case Er:var T=_._init;return f(g,m,v,T(_._payload),C)}if(sa(_)||zo(_))return g=g.get(v)||null,c(m,g,_,C,null);ku(m,_)}return null}function p(g,m,v,_){for(var C=null,T=null,S=m,I=m=0,F=null;S!==null&&I<v.length;I++){S.index>I?(F=S,S=null):F=S.sibling;var O=d(g,S,v[I],_);if(O===null){S===null&&(S=F);break}t&&S&&O.alternate===null&&e(g,S),m=s(O,m,I),T===null?C=O:T.sibling=O,T=O,S=F}if(I===v.length)return n(g,S),Ee&&hi(g,I),C;if(S===null){for(;I<v.length;I++)S=h(g,v[I],_),S!==null&&(m=s(S,m,I),T===null?C=S:T.sibling=S,T=S);return Ee&&hi(g,I),C}for(S=r(g,S);I<v.length;I++)F=f(S,g,I,v[I],_),F!==null&&(t&&F.alternate!==null&&S.delete(F.key===null?I:F.key),m=s(F,m,I),T===null?C=F:T.sibling=F,T=F);return t&&S.forEach(function(U){return e(g,U)}),Ee&&hi(g,I),C}function y(g,m,v,_){var C=zo(v);if(typeof C!="function")throw Error(x(150));if(v=C.call(v),v==null)throw Error(x(151));for(var T=C=null,S=m,I=m=0,F=null,O=v.next();S!==null&&!O.done;I++,O=v.next()){S.index>I?(F=S,S=null):F=S.sibling;var U=d(g,S,O.value,_);if(U===null){S===null&&(S=F);break}t&&S&&U.alternate===null&&e(g,S),m=s(U,m,I),T===null?C=U:T.sibling=U,T=U,S=F}if(O.done)return n(g,S),Ee&&hi(g,I),C;if(S===null){for(;!O.done;I++,O=v.next())O=h(g,O.value,_),O!==null&&(m=s(O,m,I),T===null?C=O:T.sibling=O,T=O);return Ee&&hi(g,I),C}for(S=r(g,S);!O.done;I++,O=v.next())O=f(S,g,I,O.value,_),O!==null&&(t&&O.alternate!==null&&S.delete(O.key===null?I:O.key),m=s(O,m,I),T===null?C=O:T.sibling=O,T=O);return t&&S.forEach(function(W){return e(g,W)}),Ee&&hi(g,I),C}function w(g,m,v,_){if(typeof v=="object"&&v!==null&&v.type===ws&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case mu:e:{for(var C=v.key,T=m;T!==null;){if(T.key===C){if(C=v.type,C===ws){if(T.tag===7){n(g,T.sibling),m=i(T,v.props.children),m.return=g,g=m;break e}}else if(T.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Er&&rw(C)===T.type){n(g,T.sibling),m=i(T,v.props),m.ref=Go(g,T,v),m.return=g,g=m;break e}n(g,T);break}else e(g,T);T=T.sibling}v.type===ws?(m=bi(v.props.children,g.mode,_,v.key),m.return=g,g=m):(_=tc(v.type,v.key,v.props,null,g.mode,_),_.ref=Go(g,m,v),_.return=g,g=_)}return o(g);case _s:e:{for(T=v.key;m!==null;){if(m.key===T)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){n(g,m.sibling),m=i(m,v.children||[]),m.return=g,g=m;break e}else{n(g,m);break}else e(g,m);m=m.sibling}m=sf(v,g.mode,_),m.return=g,g=m}return o(g);case Er:return T=v._init,w(g,m,T(v._payload),_)}if(sa(v))return p(g,m,v,_);if(zo(v))return y(g,m,v,_);ku(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(n(g,m.sibling),m=i(m,v),m.return=g,g=m):(n(g,m),m=rf(v,g.mode,_),m.return=g,g=m),o(g)):n(g,m)}return w}var eo=kT(!0),xT=kT(!1),Pl={},On=ei(Pl),qa=ei(Pl),Ka=ei(Pl);function _i(t){if(t===Pl)throw Error(x(174));return t}function pg(t,e){switch(pe(Ka,e),pe(qa,t),pe(On,Pl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ep(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ep(e,t)}_e(On),pe(On,e)}function to(){_e(On),_e(qa),_e(Ka)}function bT(t){_i(Ka.current);var e=_i(On.current),n=ep(e,t.type);e!==n&&(pe(qa,t),pe(On,n))}function mg(t){qa.current===t&&(_e(On),_e(qa))}var Se=ei(0);function Rc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Xd=[];function gg(){for(var t=0;t<Xd.length;t++)Xd[t]._workInProgressVersionPrimary=null;Xd.length=0}var Yu=pr.ReactCurrentDispatcher,Jd=pr.ReactCurrentBatchConfig,$i=0,Ie=null,Ue=null,Ge=null,Ac=!1,va=!1,Ga=0,_A=0;function dt(){throw Error(x(321))}function vg(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!kn(t[n],e[n]))return!1;return!0}function yg(t,e,n,r,i,s){if($i=s,Ie=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Yu.current=t===null||t.memoizedState===null?TA:SA,t=n(r,i),va){s=0;do{if(va=!1,Ga=0,25<=s)throw Error(x(301));s+=1,Ge=Ue=null,e.updateQueue=null,Yu.current=IA,t=n(r,i)}while(va)}if(Yu.current=Oc,e=Ue!==null&&Ue.next!==null,$i=0,Ge=Ue=Ie=null,Ac=!1,e)throw Error(x(300));return t}function _g(){var t=Ga!==0;return Ga=0,t}function bn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?Ie.memoizedState=Ge=t:Ge=Ge.next=t,Ge}function an(){if(Ue===null){var t=Ie.alternate;t=t!==null?t.memoizedState:null}else t=Ue.next;var e=Ge===null?Ie.memoizedState:Ge.next;if(e!==null)Ge=e,Ue=t;else{if(t===null)throw Error(x(310));Ue=t,t={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},Ge===null?Ie.memoizedState=Ge=t:Ge=Ge.next=t}return Ge}function Qa(t,e){return typeof e=="function"?e(t):e}function Zd(t){var e=an(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=Ue,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if(($i&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,Ie.lanes|=c,Fi|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,kn(r,e.memoizedState)||(At=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ie.lanes|=s,Fi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ef(t){var e=an(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);kn(s,e.memoizedState)||(At=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function NT(){}function RT(t,e){var n=Ie,r=an(),i=e(),s=!kn(r.memoizedState,i);if(s&&(r.memoizedState=i,At=!0),r=r.queue,wg(PT.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ge!==null&&Ge.memoizedState.tag&1){if(n.flags|=2048,Ya(9,OT.bind(null,n,r,i,e),void 0,null),Je===null)throw Error(x(349));($i&30)!==0||AT(n,e,i)}return i}function AT(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ie.updateQueue,e===null?(e={lastEffect:null,stores:null},Ie.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function OT(t,e,n,r){e.value=n,e.getSnapshot=r,DT(e)&&MT(t)}function PT(t,e,n){return n(function(){DT(e)&&MT(t)})}function DT(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!kn(t,n)}catch{return!0}}function MT(t){var e=or(t,1);e!==null&&Sn(e,t,1,-1)}function iw(t){var e=bn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qa,lastRenderedState:t},e.queue=t,t=t.dispatch=CA.bind(null,Ie,t),[e.memoizedState,t]}function Ya(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ie.updateQueue,e===null?(e={lastEffect:null,stores:null},Ie.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function LT(){return an().memoizedState}function Xu(t,e,n,r){var i=bn();Ie.flags|=t,i.memoizedState=Ya(1|e,n,void 0,r===void 0?null:r)}function Ah(t,e,n,r){var i=an();r=r===void 0?null:r;var s=void 0;if(Ue!==null){var o=Ue.memoizedState;if(s=o.destroy,r!==null&&vg(r,o.deps)){i.memoizedState=Ya(e,n,s,r);return}}Ie.flags|=t,i.memoizedState=Ya(1|e,n,s,r)}function sw(t,e){return Xu(8390656,8,t,e)}function wg(t,e){return Ah(2048,8,t,e)}function $T(t,e){return Ah(4,2,t,e)}function FT(t,e){return Ah(4,4,t,e)}function UT(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function VT(t,e,n){return n=n!=null?n.concat([t]):null,Ah(4,4,UT.bind(null,e,t),n)}function Eg(){}function BT(t,e){var n=an();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&vg(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function jT(t,e){var n=an();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&vg(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function zT(t,e,n){return($i&21)===0?(t.baseState&&(t.baseState=!1,At=!0),t.memoizedState=n):(kn(n,e)||(n=qC(),Ie.lanes|=n,Fi|=n,t.baseState=!0),e)}function wA(t,e){var n=ce;ce=n!==0&&4>n?n:4,t(!0);var r=Jd.transition;Jd.transition={};try{t(!1),e()}finally{ce=n,Jd.transition=r}}function WT(){return an().memoizedState}function EA(t,e,n){var r=Fr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},HT(t))qT(e,n);else if(n=CT(t,e,n,r),n!==null){var i=St();Sn(n,t,r,i),KT(n,e,r)}}function CA(t,e,n){var r=Fr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(HT(t))qT(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,kn(a,o)){var l=e.interleaved;l===null?(i.next=i,dg(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=CT(t,e,i,r),n!==null&&(i=St(),Sn(n,t,r,i),KT(n,e,r))}}function HT(t){var e=t.alternate;return t===Ie||e!==null&&e===Ie}function qT(t,e){va=Ac=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function KT(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Jm(t,n)}}var Oc={readContext:on,useCallback:dt,useContext:dt,useEffect:dt,useImperativeHandle:dt,useInsertionEffect:dt,useLayoutEffect:dt,useMemo:dt,useReducer:dt,useRef:dt,useState:dt,useDebugValue:dt,useDeferredValue:dt,useTransition:dt,useMutableSource:dt,useSyncExternalStore:dt,useId:dt,unstable_isNewReconciler:!1},TA={readContext:on,useCallback:function(t,e){return bn().memoizedState=[t,e===void 0?null:e],t},useContext:on,useEffect:sw,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Xu(4194308,4,UT.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Xu(4194308,4,t,e)},useInsertionEffect:function(t,e){return Xu(4,2,t,e)},useMemo:function(t,e){var n=bn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=bn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=EA.bind(null,Ie,t),[r.memoizedState,t]},useRef:function(t){var e=bn();return t={current:t},e.memoizedState=t},useState:iw,useDebugValue:Eg,useDeferredValue:function(t){return bn().memoizedState=t},useTransition:function(){var t=iw(!1),e=t[0];return t=wA.bind(null,t[1]),bn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ie,i=bn();if(Ee){if(n===void 0)throw Error(x(407));n=n()}else{if(n=e(),Je===null)throw Error(x(349));($i&30)!==0||AT(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,sw(PT.bind(null,r,s,t),[t]),r.flags|=2048,Ya(9,OT.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=bn(),e=Je.identifierPrefix;if(Ee){var n=Qn,r=Gn;n=(r&~(1<<32-Tn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ga++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=_A++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},SA={readContext:on,useCallback:BT,useContext:on,useEffect:wg,useImperativeHandle:VT,useInsertionEffect:$T,useLayoutEffect:FT,useMemo:jT,useReducer:Zd,useRef:LT,useState:function(){return Zd(Qa)},useDebugValue:Eg,useDeferredValue:function(t){var e=an();return zT(e,Ue.memoizedState,t)},useTransition:function(){var t=Zd(Qa)[0],e=an().memoizedState;return[t,e]},useMutableSource:NT,useSyncExternalStore:RT,useId:WT,unstable_isNewReconciler:!1},IA={readContext:on,useCallback:BT,useContext:on,useEffect:wg,useImperativeHandle:VT,useInsertionEffect:$T,useLayoutEffect:FT,useMemo:jT,useReducer:ef,useRef:LT,useState:function(){return ef(Qa)},useDebugValue:Eg,useDeferredValue:function(t){var e=an();return Ue===null?e.memoizedState=t:zT(e,Ue.memoizedState,t)},useTransition:function(){var t=ef(Qa)[0],e=an().memoizedState;return[t,e]},useMutableSource:NT,useSyncExternalStore:RT,useId:WT,unstable_isNewReconciler:!1};function no(t,e){try{var n="",r=e;do n+=ZN(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function tf(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function Tp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var kA=typeof WeakMap=="function"?WeakMap:Map;function GT(t,e,n){n=er(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Dc||(Dc=!0,Pp=r),Tp(t,e)},n}function QT(t,e,n){n=er(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Tp(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Tp(t,e),typeof r!="function"&&($r===null?$r=new Set([this]):$r.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function ow(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new kA;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=VA.bind(null,t,e,n),e.then(t,t))}function aw(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function lw(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=er(-1,1),e.tag=2,Lr(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var xA=pr.ReactCurrentOwner,At=!1;function wt(t,e,n,r){e.child=t===null?xT(e,null,n,r):eo(e,t.child,n,r)}function uw(t,e,n,r,i){n=n.render;var s=e.ref;return Vs(e,i),r=yg(t,e,n,r,s,i),n=_g(),t!==null&&!At?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,ar(t,e,i)):(Ee&&n&&og(e),e.flags|=1,wt(t,e,r,i),e.child)}function cw(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Ng(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,YT(t,e,s,r,i)):(t=tc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ja,n(o,r)&&t.ref===e.ref)return ar(t,e,i)}return e.flags|=1,t=Ur(s,r),t.ref=e.ref,t.return=e,e.child=t}function YT(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ja(s,r)&&t.ref===e.ref)if(At=!1,e.pendingProps=r=s,(t.lanes&i)!==0)(t.flags&131072)!==0&&(At=!0);else return e.lanes=t.lanes,ar(t,e,i)}return Sp(t,e,n,r,i)}function XT(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},pe(Rs,zt),zt|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,pe(Rs,zt),zt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,pe(Rs,zt),zt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,pe(Rs,zt),zt|=r;return wt(t,e,i,n),e.child}function JT(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Sp(t,e,n,r,i){var s=Lt(n)?Mi:_t.current;return s=Js(e,s),Vs(e,i),n=yg(t,e,n,r,s,i),r=_g(),t!==null&&!At?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,ar(t,e,i)):(Ee&&r&&og(e),e.flags|=1,wt(t,e,n,i),e.child)}function hw(t,e,n,r,i){if(Lt(n)){var s=!0;Sc(e)}else s=!1;if(Vs(e,i),e.stateNode===null)Ju(t,e),IT(e,n,r),Cp(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=on(u):(u=Lt(n)?Mi:_t.current,u=Js(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&nw(e,o,r,u),Cr=!1;var d=e.memoizedState;o.state=d,Nc(e,r,o,i),l=e.memoizedState,a!==r||d!==l||Mt.current||Cr?(typeof c=="function"&&(Ep(e,n,c,r),l=e.memoizedState),(a=Cr||tw(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,TT(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:mn(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=on(l):(l=Lt(n)?Mi:_t.current,l=Js(e,l));var f=n.getDerivedStateFromProps;(c=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&nw(e,o,r,l),Cr=!1,d=e.memoizedState,o.state=d,Nc(e,r,o,i);var p=e.memoizedState;a!==h||d!==p||Mt.current||Cr?(typeof f=="function"&&(Ep(e,n,f,r),p=e.memoizedState),(u=Cr||tw(e,n,u,r,d,p,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,p,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,p,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=p),o.props=r,o.state=p,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Ip(t,e,n,r,s,i)}function Ip(t,e,n,r,i,s){JT(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Y_(e,n,!1),ar(t,e,s);r=e.stateNode,xA.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=eo(e,t.child,null,s),e.child=eo(e,null,a,s)):wt(t,e,a,s),e.memoizedState=r.state,i&&Y_(e,n,!0),e.child}function ZT(t){var e=t.stateNode;e.pendingContext?Q_(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Q_(t,e.context,!1),pg(t,e.containerInfo)}function dw(t,e,n,r,i){return Zs(),lg(i),e.flags|=256,wt(t,e,n,r),e.child}var kp={dehydrated:null,treeContext:null,retryLane:0};function xp(t){return{baseLanes:t,cachePool:null,transitions:null}}function eS(t,e,n){var r=e.pendingProps,i=Se.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),pe(Se,i&1),t===null)return _p(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Dh(o,r,0,null),t=bi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=xp(n),e.memoizedState=kp,t):Cg(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return bA(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return(o&1)===0&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Ur(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Ur(a,s):(s=bi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?xp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=kp,r}return s=t.child,t=s.sibling,r=Ur(s,{mode:"visible",children:r.children}),(e.mode&1)===0&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Cg(t,e){return e=Dh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function xu(t,e,n,r){return r!==null&&lg(r),eo(e,t.child,null,n),t=Cg(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function bA(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=tf(Error(x(422))),xu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Dh({mode:"visible",children:r.children},i,0,null),s=bi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,(e.mode&1)!==0&&eo(e,t.child,null,o),e.child.memoizedState=xp(o),e.memoizedState=kp,s);if((e.mode&1)===0)return xu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(x(419)),r=tf(s,r,void 0),xu(t,e,o,r)}if(a=(o&t.childLanes)!==0,At||a){if(r=Je,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,or(t,i),Sn(r,t,i,-1))}return bg(),r=tf(Error(x(421))),xu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=BA.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Wt=Mr(i.nextSibling),Ht=e,Ee=!0,vn=null,t!==null&&(Zt[en++]=Gn,Zt[en++]=Qn,Zt[en++]=Li,Gn=t.id,Qn=t.overflow,Li=e),e=Cg(e,r.children),e.flags|=4096,e)}function fw(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),wp(t.return,e,n)}function nf(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function tS(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(wt(t,e,r.children,n),r=Se.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&fw(t,n,e);else if(t.tag===19)fw(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(pe(Se,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Rc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),nf(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Rc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}nf(e,!0,n,null,s);break;case"together":nf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ju(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ar(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Fi|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(x(153));if(e.child!==null){for(t=e.child,n=Ur(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ur(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function NA(t,e,n){switch(e.tag){case 3:ZT(e),Zs();break;case 5:bT(e);break;case 1:Lt(e.type)&&Sc(e);break;case 4:pg(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;pe(xc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(pe(Se,Se.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?eS(t,e,n):(pe(Se,Se.current&1),t=ar(t,e,n),t!==null?t.sibling:null);pe(Se,Se.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return tS(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),pe(Se,Se.current),r)break;return null;case 22:case 23:return e.lanes=0,XT(t,e,n)}return ar(t,e,n)}var nS,bp,rS,iS;nS=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};bp=function(){};rS=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,_i(On.current);var s=null;switch(n){case"input":i=Yf(t,i),r=Yf(t,r),s=[];break;case"select":i=ke({},i,{value:void 0}),r=ke({},r,{value:void 0}),s=[];break;case"textarea":i=Zf(t,i),r=Zf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Cc)}tp(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ma.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ma.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ve("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};iS=function(t,e,n,r){n!==r&&(e.flags|=4)};function Qo(t,e){if(!Ee)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ft(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function RA(t,e,n){var r=e.pendingProps;switch(ag(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ft(e),null;case 1:return Lt(e.type)&&Tc(),ft(e),null;case 3:return r=e.stateNode,to(),_e(Mt),_e(_t),gg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Iu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,vn!==null&&(Lp(vn),vn=null))),bp(t,e),ft(e),null;case 5:mg(e);var i=_i(Ka.current);if(n=e.type,t!==null&&e.stateNode!=null)rS(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(x(166));return ft(e),null}if(t=_i(On.current),Iu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Nn]=e,r[Ha]=s,t=(e.mode&1)!==0,n){case"dialog":ve("cancel",r),ve("close",r);break;case"iframe":case"object":case"embed":ve("load",r);break;case"video":case"audio":for(i=0;i<aa.length;i++)ve(aa[i],r);break;case"source":ve("error",r);break;case"img":case"image":case"link":ve("error",r),ve("load",r);break;case"details":ve("toggle",r);break;case"input":C_(r,s),ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ve("invalid",r);break;case"textarea":S_(r,s),ve("invalid",r)}tp(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Su(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Su(r.textContent,a,t),i=["children",""+a]):Ma.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ve("scroll",r)}switch(n){case"input":gu(r),T_(r,s,!0);break;case"textarea":gu(r),I_(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Cc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=AC(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Nn]=e,t[Ha]=r,nS(t,e,!1,!1),e.stateNode=t;e:{switch(o=np(n,r),n){case"dialog":ve("cancel",t),ve("close",t),i=r;break;case"iframe":case"object":case"embed":ve("load",t),i=r;break;case"video":case"audio":for(i=0;i<aa.length;i++)ve(aa[i],t);i=r;break;case"source":ve("error",t),i=r;break;case"img":case"image":case"link":ve("error",t),ve("load",t),i=r;break;case"details":ve("toggle",t),i=r;break;case"input":C_(t,r),i=Yf(t,r),ve("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ke({},r,{value:void 0}),ve("invalid",t);break;case"textarea":S_(t,r),i=Zf(t,r),ve("invalid",t);break;default:i=r}tp(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?DC(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&OC(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&La(t,l):typeof l=="number"&&La(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ma.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ve("scroll",t):l!=null&&qm(t,s,l,o))}switch(n){case"input":gu(t),T_(t,r,!1);break;case"textarea":gu(t),I_(t);break;case"option":r.value!=null&&t.setAttribute("value",""+zr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ls(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ls(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Cc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ft(e),null;case 6:if(t&&e.stateNode!=null)iS(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(x(166));if(n=_i(Ka.current),_i(On.current),Iu(e)){if(r=e.stateNode,n=e.memoizedProps,r[Nn]=e,(s=r.nodeValue!==n)&&(t=Ht,t!==null))switch(t.tag){case 3:Su(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Su(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Nn]=e,e.stateNode=r}return ft(e),null;case 13:if(_e(Se),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ee&&Wt!==null&&(e.mode&1)!==0&&(e.flags&128)===0)ET(),Zs(),e.flags|=98560,s=!1;else if(s=Iu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(x(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(x(317));s[Nn]=e}else Zs(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;ft(e),s=!1}else vn!==null&&(Lp(vn),vn=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(Se.current&1)!==0?Be===0&&(Be=3):bg())),e.updateQueue!==null&&(e.flags|=4),ft(e),null);case 4:return to(),bp(t,e),t===null&&za(e.stateNode.containerInfo),ft(e),null;case 10:return hg(e.type._context),ft(e),null;case 17:return Lt(e.type)&&Tc(),ft(e),null;case 19:if(_e(Se),s=e.memoizedState,s===null)return ft(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Qo(s,!1);else{if(Be!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=Rc(t),o!==null){for(e.flags|=128,Qo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return pe(Se,Se.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ae()>ro&&(e.flags|=128,r=!0,Qo(s,!1),e.lanes=4194304)}else{if(!r)if(t=Rc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Qo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ee)return ft(e),null}else 2*Ae()-s.renderingStartTime>ro&&n!==1073741824&&(e.flags|=128,r=!0,Qo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ae(),e.sibling=null,n=Se.current,pe(Se,r?n&1|2:n&1),e):(ft(e),null);case 22:case 23:return xg(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(zt&1073741824)!==0&&(ft(e),e.subtreeFlags&6&&(e.flags|=8192)):ft(e),null;case 24:return null;case 25:return null}throw Error(x(156,e.tag))}function AA(t,e){switch(ag(e),e.tag){case 1:return Lt(e.type)&&Tc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return to(),_e(Mt),_e(_t),gg(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return mg(e),null;case 13:if(_e(Se),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(x(340));Zs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return _e(Se),null;case 4:return to(),null;case 10:return hg(e.type._context),null;case 22:case 23:return xg(),null;case 24:return null;default:return null}}var bu=!1,pt=!1,OA=typeof WeakSet=="function"?WeakSet:Set,P=null;function Ns(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){be(t,e,r)}else n.current=null}function Np(t,e,n){try{n()}catch(r){be(t,e,r)}}var pw=!1;function PA(t,e){if(dp=_c,t=lT(),sg(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var f;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(f=h.firstChild)!==null;)d=h,h=f;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(f=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=f}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(fp={focusedElem:t,selectionRange:n},_c=!1,P=e;P!==null;)if(e=P,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,P=t;else for(;P!==null;){e=P;try{var p=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(p!==null){var y=p.memoizedProps,w=p.memoizedState,g=e.stateNode,m=g.getSnapshotBeforeUpdate(e.elementType===e.type?y:mn(e.type,y),w);g.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(_){be(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,P=t;break}P=e.return}return p=pw,pw=!1,p}function ya(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Np(e,n,s)}i=i.next}while(i!==r)}}function Oh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Rp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function sS(t){var e=t.alternate;e!==null&&(t.alternate=null,sS(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Nn],delete e[Ha],delete e[gp],delete e[mA],delete e[gA])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function oS(t){return t.tag===5||t.tag===3||t.tag===4}function mw(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||oS(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ap(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Cc));else if(r!==4&&(t=t.child,t!==null))for(Ap(t,e,n),t=t.sibling;t!==null;)Ap(t,e,n),t=t.sibling}function Op(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Op(t,e,n),t=t.sibling;t!==null;)Op(t,e,n),t=t.sibling}var nt=null,gn=!1;function _r(t,e,n){for(n=n.child;n!==null;)aS(t,e,n),n=n.sibling}function aS(t,e,n){if(An&&typeof An.onCommitFiberUnmount=="function")try{An.onCommitFiberUnmount(Sh,n)}catch{}switch(n.tag){case 5:pt||Ns(n,e);case 6:var r=nt,i=gn;nt=null,_r(t,e,n),nt=r,gn=i,nt!==null&&(gn?(t=nt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):nt.removeChild(n.stateNode));break;case 18:nt!==null&&(gn?(t=nt,n=n.stateNode,t.nodeType===8?Qd(t.parentNode,n):t.nodeType===1&&Qd(t,n),Va(t)):Qd(nt,n.stateNode));break;case 4:r=nt,i=gn,nt=n.stateNode.containerInfo,gn=!0,_r(t,e,n),nt=r,gn=i;break;case 0:case 11:case 14:case 15:if(!pt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&Np(n,e,o),i=i.next}while(i!==r)}_r(t,e,n);break;case 1:if(!pt&&(Ns(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){be(n,e,a)}_r(t,e,n);break;case 21:_r(t,e,n);break;case 22:n.mode&1?(pt=(r=pt)||n.memoizedState!==null,_r(t,e,n),pt=r):_r(t,e,n);break;default:_r(t,e,n)}}function gw(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new OA),e.forEach(function(r){var i=jA.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function pn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:nt=a.stateNode,gn=!1;break e;case 3:nt=a.stateNode.containerInfo,gn=!0;break e;case 4:nt=a.stateNode.containerInfo,gn=!0;break e}a=a.return}if(nt===null)throw Error(x(160));aS(s,o,i),nt=null,gn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){be(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)lS(e,t),e=e.sibling}function lS(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(pn(e,t),xn(t),r&4){try{ya(3,t,t.return),Oh(3,t)}catch(y){be(t,t.return,y)}try{ya(5,t,t.return)}catch(y){be(t,t.return,y)}}break;case 1:pn(e,t),xn(t),r&512&&n!==null&&Ns(n,n.return);break;case 5:if(pn(e,t),xn(t),r&512&&n!==null&&Ns(n,n.return),t.flags&32){var i=t.stateNode;try{La(i,"")}catch(y){be(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&NC(i,s),np(a,o);var u=np(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?DC(i,h):c==="dangerouslySetInnerHTML"?OC(i,h):c==="children"?La(i,h):qm(i,c,h,u)}switch(a){case"input":Xf(i,s);break;case"textarea":RC(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var f=s.value;f!=null?Ls(i,!!s.multiple,f,!1):d!==!!s.multiple&&(s.defaultValue!=null?Ls(i,!!s.multiple,s.defaultValue,!0):Ls(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ha]=s}catch(y){be(t,t.return,y)}}break;case 6:if(pn(e,t),xn(t),r&4){if(t.stateNode===null)throw Error(x(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){be(t,t.return,y)}}break;case 3:if(pn(e,t),xn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Va(e.containerInfo)}catch(y){be(t,t.return,y)}break;case 4:pn(e,t),xn(t);break;case 13:pn(e,t),xn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Ig=Ae())),r&4&&gw(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(pt=(u=pt)||c,pn(e,t),pt=u):pn(e,t),xn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&(t.mode&1)!==0)for(P=t,c=t.child;c!==null;){for(h=P=c;P!==null;){switch(d=P,f=d.child,d.tag){case 0:case 11:case 14:case 15:ya(4,d,d.return);break;case 1:Ns(d,d.return);var p=d.stateNode;if(typeof p.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,p.props=e.memoizedProps,p.state=e.memoizedState,p.componentWillUnmount()}catch(y){be(r,n,y)}}break;case 5:Ns(d,d.return);break;case 22:if(d.memoizedState!==null){yw(h);continue}}f!==null?(f.return=d,P=f):yw(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=PC("display",o))}catch(y){be(t,t.return,y)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(y){be(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:pn(e,t),xn(t),r&4&&gw(t);break;case 21:break;default:pn(e,t),xn(t)}}function xn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(oS(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(La(i,""),r.flags&=-33);var s=mw(t);Op(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=mw(t);Ap(t,a,o);break;default:throw Error(x(161))}}catch(l){be(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function DA(t,e,n){P=t,uS(t)}function uS(t,e,n){for(var r=(t.mode&1)!==0;P!==null;){var i=P,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||bu;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||pt;a=bu;var u=pt;if(bu=o,(pt=l)&&!u)for(P=i;P!==null;)o=P,l=o.child,o.tag===22&&o.memoizedState!==null?_w(i):l!==null?(l.return=o,P=l):_w(i);for(;s!==null;)P=s,uS(s),s=s.sibling;P=i,bu=a,pt=u}vw(t)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,P=s):vw(t)}}function vw(t){for(;P!==null;){var e=P;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:pt||Oh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!pt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:mn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ew(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ew(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Va(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}pt||e.flags&512&&Rp(e)}catch(d){be(e,e.return,d)}}if(e===t){P=null;break}if(n=e.sibling,n!==null){n.return=e.return,P=n;break}P=e.return}}function yw(t){for(;P!==null;){var e=P;if(e===t){P=null;break}var n=e.sibling;if(n!==null){n.return=e.return,P=n;break}P=e.return}}function _w(t){for(;P!==null;){var e=P;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Oh(4,e)}catch(l){be(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){be(e,i,l)}}var s=e.return;try{Rp(e)}catch(l){be(e,s,l)}break;case 5:var o=e.return;try{Rp(e)}catch(l){be(e,o,l)}}}catch(l){be(e,e.return,l)}if(e===t){P=null;break}var a=e.sibling;if(a!==null){a.return=e.return,P=a;break}P=e.return}}var MA=Math.ceil,Pc=pr.ReactCurrentDispatcher,Tg=pr.ReactCurrentOwner,rn=pr.ReactCurrentBatchConfig,se=0,Je=null,Me=null,st=0,zt=0,Rs=ei(0),Be=0,Xa=null,Fi=0,Ph=0,Sg=0,_a=null,Nt=null,Ig=0,ro=1/0,zn=null,Dc=!1,Pp=null,$r=null,Nu=!1,Rr=null,Mc=0,wa=0,Dp=null,Zu=-1,ec=0;function St(){return(se&6)!==0?Ae():Zu!==-1?Zu:Zu=Ae()}function Fr(t){return(t.mode&1)===0?1:(se&2)!==0&&st!==0?st&-st:yA.transition!==null?(ec===0&&(ec=qC()),ec):(t=ce,t!==0||(t=window.event,t=t===void 0?16:ZC(t.type)),t)}function Sn(t,e,n,r){if(50<wa)throw wa=0,Dp=null,Error(x(185));Rl(t,n,r),((se&2)===0||t!==Je)&&(t===Je&&((se&2)===0&&(Ph|=n),Be===4&&Ir(t,st)),$t(t,r),n===1&&se===0&&(e.mode&1)===0&&(ro=Ae()+500,Nh&&ti()))}function $t(t,e){var n=t.callbackNode;yR(t,e);var r=yc(t,t===Je?st:0);if(r===0)n!==null&&b_(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&b_(n),e===1)t.tag===0?vA(ww.bind(null,t)):yT(ww.bind(null,t)),fA(function(){(se&6)===0&&ti()}),n=null;else{switch(KC(r)){case 1:n=Xm;break;case 4:n=WC;break;case 16:n=vc;break;case 536870912:n=HC;break;default:n=vc}n=vS(n,cS.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function cS(t,e){if(Zu=-1,ec=0,(se&6)!==0)throw Error(x(327));var n=t.callbackNode;if(Bs()&&t.callbackNode!==n)return null;var r=yc(t,t===Je?st:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=Lc(t,r);else{e=r;var i=se;se|=2;var s=dS();(Je!==t||st!==e)&&(zn=null,ro=Ae()+500,xi(t,e));do try{FA();break}catch(a){hS(t,a)}while(1);cg(),Pc.current=s,se=i,Me!==null?e=0:(Je=null,st=0,e=Be)}if(e!==0){if(e===2&&(i=ap(t),i!==0&&(r=i,e=Mp(t,i))),e===1)throw n=Xa,xi(t,0),Ir(t,r),$t(t,Ae()),n;if(e===6)Ir(t,r);else{if(i=t.current.alternate,(r&30)===0&&!LA(i)&&(e=Lc(t,r),e===2&&(s=ap(t),s!==0&&(r=s,e=Mp(t,s))),e===1))throw n=Xa,xi(t,0),Ir(t,r),$t(t,Ae()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(x(345));case 2:di(t,Nt,zn);break;case 3:if(Ir(t,r),(r&130023424)===r&&(e=Ig+500-Ae(),10<e)){if(yc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){St(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=mp(di.bind(null,t,Nt,zn),e);break}di(t,Nt,zn);break;case 4:if(Ir(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Tn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*MA(r/1960))-r,10<r){t.timeoutHandle=mp(di.bind(null,t,Nt,zn),r);break}di(t,Nt,zn);break;case 5:di(t,Nt,zn);break;default:throw Error(x(329))}}}return $t(t,Ae()),t.callbackNode===n?cS.bind(null,t):null}function Mp(t,e){var n=_a;return t.current.memoizedState.isDehydrated&&(xi(t,e).flags|=256),t=Lc(t,e),t!==2&&(e=Nt,Nt=n,e!==null&&Lp(e)),t}function Lp(t){Nt===null?Nt=t:Nt.push.apply(Nt,t)}function LA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!kn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ir(t,e){for(e&=~Sg,e&=~Ph,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Tn(e),r=1<<n;t[n]=-1,e&=~r}}function ww(t){if((se&6)!==0)throw Error(x(327));Bs();var e=yc(t,0);if((e&1)===0)return $t(t,Ae()),null;var n=Lc(t,e);if(t.tag!==0&&n===2){var r=ap(t);r!==0&&(e=r,n=Mp(t,r))}if(n===1)throw n=Xa,xi(t,0),Ir(t,e),$t(t,Ae()),n;if(n===6)throw Error(x(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,di(t,Nt,zn),$t(t,Ae()),null}function kg(t,e){var n=se;se|=1;try{return t(e)}finally{se=n,se===0&&(ro=Ae()+500,Nh&&ti())}}function Ui(t){Rr!==null&&Rr.tag===0&&(se&6)===0&&Bs();var e=se;se|=1;var n=rn.transition,r=ce;try{if(rn.transition=null,ce=1,t)return t()}finally{ce=r,rn.transition=n,se=e,(se&6)===0&&ti()}}function xg(){zt=Rs.current,_e(Rs)}function xi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,dA(n)),Me!==null)for(n=Me.return;n!==null;){var r=n;switch(ag(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Tc();break;case 3:to(),_e(Mt),_e(_t),gg();break;case 5:mg(r);break;case 4:to();break;case 13:_e(Se);break;case 19:_e(Se);break;case 10:hg(r.type._context);break;case 22:case 23:xg()}n=n.return}if(Je=t,Me=t=Ur(t.current,null),st=zt=e,Be=0,Xa=null,Sg=Ph=Fi=0,Nt=_a=null,yi!==null){for(e=0;e<yi.length;e++)if(n=yi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}yi=null}return t}function hS(t,e){do{var n=Me;try{if(cg(),Yu.current=Oc,Ac){for(var r=Ie.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ac=!1}if($i=0,Ge=Ue=Ie=null,va=!1,Ga=0,Tg.current=null,n===null||n.return===null){Be=1,Xa=e,Me=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=st,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if((c.mode&1)===0&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var f=aw(o);if(f!==null){f.flags&=-257,lw(f,o,a,s,e),f.mode&1&&ow(s,u,e),e=f,l=u;var p=e.updateQueue;if(p===null){var y=new Set;y.add(l),e.updateQueue=y}else p.add(l);break e}else{if((e&1)===0){ow(s,u,e),bg();break e}l=Error(x(426))}}else if(Ee&&a.mode&1){var w=aw(o);if(w!==null){(w.flags&65536)===0&&(w.flags|=256),lw(w,o,a,s,e),lg(no(l,a));break e}}s=l=no(l,a),Be!==4&&(Be=2),_a===null?_a=[s]:_a.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=GT(s,l,e);Z_(s,g);break e;case 1:a=l;var m=s.type,v=s.stateNode;if((s.flags&128)===0&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&($r===null||!$r.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var _=QT(s,a,e);Z_(s,_);break e}}s=s.return}while(s!==null)}pS(n)}catch(C){e=C,Me===n&&n!==null&&(Me=n=n.return);continue}break}while(1)}function dS(){var t=Pc.current;return Pc.current=Oc,t===null?Oc:t}function bg(){(Be===0||Be===3||Be===2)&&(Be=4),Je===null||(Fi&268435455)===0&&(Ph&268435455)===0||Ir(Je,st)}function Lc(t,e){var n=se;se|=2;var r=dS();(Je!==t||st!==e)&&(zn=null,xi(t,e));do try{$A();break}catch(i){hS(t,i)}while(1);if(cg(),se=n,Pc.current=r,Me!==null)throw Error(x(261));return Je=null,st=0,Be}function $A(){for(;Me!==null;)fS(Me)}function FA(){for(;Me!==null&&!uR();)fS(Me)}function fS(t){var e=gS(t.alternate,t,zt);t.memoizedProps=t.pendingProps,e===null?pS(t):Me=e,Tg.current=null}function pS(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=RA(n,e,zt),n!==null){Me=n;return}}else{if(n=AA(n,e),n!==null){n.flags&=32767,Me=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Be=6,Me=null;return}}if(e=e.sibling,e!==null){Me=e;return}Me=e=t}while(e!==null);Be===0&&(Be=5)}function di(t,e,n){var r=ce,i=rn.transition;try{rn.transition=null,ce=1,UA(t,e,n,r)}finally{rn.transition=i,ce=r}return null}function UA(t,e,n,r){do Bs();while(Rr!==null);if((se&6)!==0)throw Error(x(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(x(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(_R(t,s),t===Je&&(Me=Je=null,st=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Nu||(Nu=!0,vS(vc,function(){return Bs(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=rn.transition,rn.transition=null;var o=ce;ce=1;var a=se;se|=4,Tg.current=null,PA(t,n),lS(n,t),sA(fp),_c=!!dp,fp=dp=null,t.current=n,DA(n),cR(),se=a,ce=o,rn.transition=s}else t.current=n;if(Nu&&(Nu=!1,Rr=t,Mc=i),s=t.pendingLanes,s===0&&($r=null),fR(n.stateNode),$t(t,Ae()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Dc)throw Dc=!1,t=Pp,Pp=null,t;return(Mc&1)!==0&&t.tag!==0&&Bs(),s=t.pendingLanes,(s&1)!==0?t===Dp?wa++:(wa=0,Dp=t):wa=0,ti(),null}function Bs(){if(Rr!==null){var t=KC(Mc),e=rn.transition,n=ce;try{if(rn.transition=null,ce=16>t?16:t,Rr===null)var r=!1;else{if(t=Rr,Rr=null,Mc=0,(se&6)!==0)throw Error(x(331));var i=se;for(se|=4,P=t.current;P!==null;){var s=P,o=s.child;if((P.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(P=u;P!==null;){var c=P;switch(c.tag){case 0:case 11:case 15:ya(8,c,s)}var h=c.child;if(h!==null)h.return=c,P=h;else for(;P!==null;){c=P;var d=c.sibling,f=c.return;if(sS(c),c===u){P=null;break}if(d!==null){d.return=f,P=d;break}P=f}}}var p=s.alternate;if(p!==null){var y=p.child;if(y!==null){p.child=null;do{var w=y.sibling;y.sibling=null,y=w}while(y!==null)}}P=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,P=o;else e:for(;P!==null;){if(s=P,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:ya(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,P=g;break e}P=s.return}}var m=t.current;for(P=m;P!==null;){o=P;var v=o.child;if((o.subtreeFlags&2064)!==0&&v!==null)v.return=o,P=v;else e:for(o=m;P!==null;){if(a=P,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:Oh(9,a)}}catch(C){be(a,a.return,C)}if(a===o){P=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,P=_;break e}P=a.return}}if(se=i,ti(),An&&typeof An.onPostCommitFiberRoot=="function")try{An.onPostCommitFiberRoot(Sh,t)}catch{}r=!0}return r}finally{ce=n,rn.transition=e}}return!1}function Ew(t,e,n){e=no(n,e),e=GT(t,e,1),t=Lr(t,e,1),e=St(),t!==null&&(Rl(t,1,e),$t(t,e))}function be(t,e,n){if(t.tag===3)Ew(t,t,n);else for(;e!==null;){if(e.tag===3){Ew(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&($r===null||!$r.has(r))){t=no(n,t),t=QT(e,t,1),e=Lr(e,t,1),t=St(),e!==null&&(Rl(e,1,t),$t(e,t));break}}e=e.return}}function VA(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=St(),t.pingedLanes|=t.suspendedLanes&n,Je===t&&(st&n)===n&&(Be===4||Be===3&&(st&130023424)===st&&500>Ae()-Ig?xi(t,0):Sg|=n),$t(t,e)}function mS(t,e){e===0&&((t.mode&1)===0?e=1:(e=_u,_u<<=1,(_u&130023424)===0&&(_u=4194304)));var n=St();t=or(t,e),t!==null&&(Rl(t,e,n),$t(t,n))}function BA(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),mS(t,n)}function jA(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(e),mS(t,n)}var gS;gS=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Mt.current)At=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return At=!1,NA(t,e,n);At=(t.flags&131072)!==0}else At=!1,Ee&&(e.flags&1048576)!==0&&_T(e,kc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ju(t,e),t=e.pendingProps;var i=Js(e,_t.current);Vs(e,n),i=yg(null,e,r,t,i,n);var s=_g();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Lt(r)?(s=!0,Sc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,fg(e),i.updater=Rh,e.stateNode=i,i._reactInternals=e,Cp(e,r,t,n),e=Ip(null,e,r,!0,s,n)):(e.tag=0,Ee&&s&&og(e),wt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ju(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=WA(r),t=mn(r,t),i){case 0:e=Sp(null,e,r,t,n);break e;case 1:e=hw(null,e,r,t,n);break e;case 11:e=uw(null,e,r,t,n);break e;case 14:e=cw(null,e,r,mn(r.type,t),n);break e}throw Error(x(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mn(r,i),Sp(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mn(r,i),hw(t,e,r,i,n);case 3:e:{if(ZT(e),t===null)throw Error(x(387));r=e.pendingProps,s=e.memoizedState,i=s.element,TT(t,e),Nc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=no(Error(x(423)),e),e=dw(t,e,r,n,i);break e}else if(r!==i){i=no(Error(x(424)),e),e=dw(t,e,r,n,i);break e}else for(Wt=Mr(e.stateNode.containerInfo.firstChild),Ht=e,Ee=!0,vn=null,n=xT(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Zs(),r===i){e=ar(t,e,n);break e}wt(t,e,r,n)}e=e.child}return e;case 5:return bT(e),t===null&&_p(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,pp(r,i)?o=null:s!==null&&pp(r,s)&&(e.flags|=32),JT(t,e),wt(t,e,o,n),e.child;case 6:return t===null&&_p(e),null;case 13:return eS(t,e,n);case 4:return pg(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=eo(e,null,r,n):wt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mn(r,i),uw(t,e,r,i,n);case 7:return wt(t,e,e.pendingProps,n),e.child;case 8:return wt(t,e,e.pendingProps.children,n),e.child;case 12:return wt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,pe(xc,r._currentValue),r._currentValue=o,s!==null)if(kn(s.value,o)){if(s.children===i.children&&!Mt.current){e=ar(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=er(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),wp(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(x(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),wp(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}wt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Vs(e,n),i=on(i),r=r(i),e.flags|=1,wt(t,e,r,n),e.child;case 14:return r=e.type,i=mn(r,e.pendingProps),i=mn(r.type,i),cw(t,e,r,i,n);case 15:return YT(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mn(r,i),Ju(t,e),e.tag=1,Lt(r)?(t=!0,Sc(e)):t=!1,Vs(e,n),IT(e,r,i),Cp(e,r,i,n),Ip(null,e,r,!0,t,n);case 19:return tS(t,e,n);case 22:return XT(t,e,n)}throw Error(x(156,e.tag))};function vS(t,e){return zC(t,e)}function zA(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nn(t,e,n,r){return new zA(t,e,n,r)}function Ng(t){return t=t.prototype,!(!t||!t.isReactComponent)}function WA(t){if(typeof t=="function")return Ng(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Gm)return 11;if(t===Qm)return 14}return 2}function Ur(t,e){var n=t.alternate;return n===null?(n=nn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function tc(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Ng(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ws:return bi(n.children,i,s,e);case Km:o=8,i|=8;break;case qf:return t=nn(12,n,e,i|2),t.elementType=qf,t.lanes=s,t;case Kf:return t=nn(13,n,e,i),t.elementType=Kf,t.lanes=s,t;case Gf:return t=nn(19,n,e,i),t.elementType=Gf,t.lanes=s,t;case kC:return Dh(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case SC:o=10;break e;case IC:o=9;break e;case Gm:o=11;break e;case Qm:o=14;break e;case Er:o=16,r=null;break e}throw Error(x(130,t==null?t:typeof t,""))}return e=nn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function bi(t,e,n,r){return t=nn(7,t,r,e),t.lanes=n,t}function Dh(t,e,n,r){return t=nn(22,t,r,e),t.elementType=kC,t.lanes=n,t.stateNode={isHidden:!1},t}function rf(t,e,n){return t=nn(6,t,null,e),t.lanes=n,t}function sf(t,e,n){return e=nn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function HA(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fd(0),this.expirationTimes=Fd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Rg(t,e,n,r,i,s,o,a,l){return t=new HA(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=nn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},fg(s),t}function qA(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_s,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function yS(t){if(!t)return Wr;t=t._reactInternals;e:{if(rs(t)!==t||t.tag!==1)throw Error(x(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Lt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(x(171))}if(t.tag===1){var n=t.type;if(Lt(n))return vT(t,n,e)}return e}function _S(t,e,n,r,i,s,o,a,l){return t=Rg(n,r,!0,t,i,s,o,a,l),t.context=yS(null),n=t.current,r=St(),i=Fr(n),s=er(r,i),s.callback=e!=null?e:null,Lr(n,s,i),t.current.lanes=i,Rl(t,i,r),$t(t,r),t}function Mh(t,e,n,r){var i=e.current,s=St(),o=Fr(i);return n=yS(n),e.context===null?e.context=n:e.pendingContext=n,e=er(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Lr(i,e,o),t!==null&&(Sn(t,i,o,s),Qu(t,i,o)),o}function $c(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Cw(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ag(t,e){Cw(t,e),(t=t.alternate)&&Cw(t,e)}function KA(){return null}var wS=typeof reportError=="function"?reportError:function(t){console.error(t)};function Og(t){this._internalRoot=t}Lh.prototype.render=Og.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(x(409));Mh(t,e,null,null)};Lh.prototype.unmount=Og.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ui(function(){Mh(null,t,null,null)}),e[sr]=null}};function Lh(t){this._internalRoot=t}Lh.prototype.unstable_scheduleHydration=function(t){if(t){var e=YC();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Sr.length&&e!==0&&e<Sr[n].priority;n++);Sr.splice(n,0,t),n===0&&JC(t)}};function Pg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function $h(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Tw(){}function GA(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=$c(o);s.call(u)}}var o=_S(e,r,t,0,null,!1,!1,"",Tw);return t._reactRootContainer=o,t[sr]=o.current,za(t.nodeType===8?t.parentNode:t),Ui(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=$c(l);a.call(u)}}var l=Rg(t,0,!1,null,null,!1,!1,"",Tw);return t._reactRootContainer=l,t[sr]=l.current,za(t.nodeType===8?t.parentNode:t),Ui(function(){Mh(e,l,n,r)}),l}function Fh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=$c(o);a.call(l)}}Mh(e,o,t,i)}else o=GA(n,e,t,i,r);return $c(o)}GC=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=oa(e.pendingLanes);n!==0&&(Jm(e,n|1),$t(e,Ae()),(se&6)===0&&(ro=Ae()+500,ti()))}break;case 13:Ui(function(){var r=or(t,1);if(r!==null){var i=St();Sn(r,t,1,i)}}),Ag(t,1)}};Zm=function(t){if(t.tag===13){var e=or(t,134217728);if(e!==null){var n=St();Sn(e,t,134217728,n)}Ag(t,134217728)}};QC=function(t){if(t.tag===13){var e=Fr(t),n=or(t,e);if(n!==null){var r=St();Sn(n,t,e,r)}Ag(t,e)}};YC=function(){return ce};XC=function(t,e){var n=ce;try{return ce=t,e()}finally{ce=n}};ip=function(t,e,n){switch(e){case"input":if(Xf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=bh(r);if(!i)throw Error(x(90));bC(r),Xf(r,i)}}}break;case"textarea":RC(t,n);break;case"select":e=n.value,e!=null&&Ls(t,!!n.multiple,e,!1)}};$C=kg;FC=Ui;var QA={usingClientEntryPoint:!1,Events:[Ol,Ss,bh,MC,LC,kg]},Yo={findFiberByHostInstance:vi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},YA={bundleType:Yo.bundleType,version:Yo.version,rendererPackageName:Yo.rendererPackageName,rendererConfig:Yo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=BC(t),t===null?null:t.stateNode},findFiberByHostInstance:Yo.findFiberByHostInstance||KA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ru=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ru.isDisabled&&Ru.supportsFiber)try{Sh=Ru.inject(YA),An=Ru}catch{}}Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=QA;Yt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pg(e))throw Error(x(200));return qA(t,e,null,n)};Yt.createRoot=function(t,e){if(!Pg(t))throw Error(x(299));var n=!1,r="",i=wS;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Rg(t,1,!1,null,null,n,!1,r,i),t[sr]=e.current,za(t.nodeType===8?t.parentNode:t),new Og(e)};Yt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(x(188)):(t=Object.keys(t).join(","),Error(x(268,t)));return t=BC(e),t=t===null?null:t.stateNode,t};Yt.flushSync=function(t){return Ui(t)};Yt.hydrate=function(t,e,n){if(!$h(e))throw Error(x(200));return Fh(null,t,e,!0,n)};Yt.hydrateRoot=function(t,e,n){if(!Pg(t))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=wS;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=_S(e,null,t,1,n!=null?n:null,i,!1,s,o),t[sr]=e.current,za(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Lh(e)};Yt.render=function(t,e,n){if(!$h(e))throw Error(x(200));return Fh(null,t,e,!1,n)};Yt.unmountComponentAtNode=function(t){if(!$h(t))throw Error(x(40));return t._reactRootContainer?(Ui(function(){Fh(null,null,t,!1,function(){t._reactRootContainer=null,t[sr]=null})}),!0):!1};Yt.unstable_batchedUpdates=kg;Yt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!$h(n))throw Error(x(200));if(t==null||t._reactInternals===void 0)throw Error(x(38));return Fh(t,e,n,!1,r)};Yt.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=Yt})(zm);const As=dC(zm.exports);var Sw=zm.exports;Wf.createRoot=Sw.createRoot,Wf.hydrateRoot=Sw.hydrateRoot;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ES={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N=function(t,e){if(!t)throw No(e)},No=function(t){return new Error("Firebase Database ("+ES.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},XA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Dg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;l||(f=64,o||(d=64)),r.push(n[c],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(CS(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):XA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw Error();const d=s<<2|a>>4;if(r.push(d),u!==64){const f=a<<4&240|u>>2;if(r.push(f),h!==64){const p=u<<6&192|h;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},TS=function(t){const e=CS(t);return Dg.encodeByteArray(e,!0)},SS=function(t){return TS(t).replace(/\./g,"")},$p=function(t){try{return Dg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JA(t){return IS(void 0,t)}function IS(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!ZA(n)||(t[n]=IS(t[n],e[n]));return t}function ZA(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Uh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ze())}function kS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Lg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function eO(){return Ze().indexOf("Electron/")>=0}function xS(){const t=Ze();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function tO(){return Ze().indexOf("MSAppHost/")>=0}function bS(){return ES.NODE_ADMIN===!0}function NS(){return typeof indexedDB=="object"}function nO(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rO="FirebaseError";class dn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=rO,Object.setPrototypeOf(this,dn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,is.prototype.create)}}class is{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?iO(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new dn(i,a,r)}}function iO(t,e){return t.replace(sO,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const sO=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ja(t){return JSON.parse(t)}function Ye(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RS=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Ja($p(s[0])||""),n=Ja($p(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},oO=function(t){const e=RS(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},aO=function(t){const e=RS(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function io(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Fp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Fc(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Uc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Iw(s)&&Iw(o)){if(!Uc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Iw(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lO{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)r[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let h=0;h<80;h++){h<40?h<20?(u=a^s&(o^a),c=1518500249):(u=s^o^a,c=1859775393):h<60?(u=s&o|a&(s|o),c=2400959708):(u=s^o^a,c=3395469782);const d=(i<<5|i>>>27)+u+l+c+r[h]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function uO(t,e){const n=new cO(t,e);return n.subscribe.bind(n)}class cO{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");hO(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=of),i.error===void 0&&(i.error=of),i.complete===void 0&&(i.complete=of);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function hO(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function of(){}function AS(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dO=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,N(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Vh=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const fO=1e3,pO=2,mO=4*60*60*1e3,gO=.5;function vO(t,e=fO,n=pO){const r=e*Math.pow(n,t),i=Math.round(gO*r*(Math.random()-.5)*2);return Math.min(mO,r+i)}/**
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
 */function et(t){return t&&t._delegate?t._delegate:t}class Gt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const fi="[DEFAULT]";/**
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
 */class yO{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Mg;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(wO(e))try{this.getOrInitializeService({instanceIdentifier:fi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=fi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=fi){return this.instances.has(e)}getOptions(e=fi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:_O(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=fi){return this.component?this.component.multipleInstances?e:fi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _O(t){return t===fi?void 0:t}function wO(t){return t.instantiationMode==="EAGER"}/**
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
 */class EO{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new yO(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const CO={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},TO=ie.INFO,SO={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},IO=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=SO[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Dl{constructor(e){this.name=e,this._logLevel=TO,this._logHandler=IO,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?CO[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const kO=(t,e)=>e.some(n=>t instanceof n);let kw,xw;function xO(){return kw||(kw=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function bO(){return xw||(xw=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const OS=new WeakMap,Up=new WeakMap,PS=new WeakMap,af=new WeakMap,$g=new WeakMap;function NO(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Vr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&OS.set(n,t)}).catch(()=>{}),$g.set(e,t),e}function RO(t){if(Up.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Up.set(t,e)}let Vp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Up.get(t);if(e==="objectStoreNames")return t.objectStoreNames||PS.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Vr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function AO(t){Vp=t(Vp)}function OO(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(lf(this),e,...n);return PS.set(r,e.sort?e.sort():[e]),Vr(r)}:bO().includes(t)?function(...e){return t.apply(lf(this),e),Vr(OS.get(this))}:function(...e){return Vr(t.apply(lf(this),e))}}function PO(t){return typeof t=="function"?OO(t):(t instanceof IDBTransaction&&RO(t),kO(t,xO())?new Proxy(t,Vp):t)}function Vr(t){if(t instanceof IDBRequest)return NO(t);if(af.has(t))return af.get(t);const e=PO(t);return e!==t&&(af.set(t,e),$g.set(e,t)),e}const lf=t=>$g.get(t);function DS(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Vr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Vr(o.result),l.oldVersion,l.newVersion,Vr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const DO=["get","getKey","getAll","getAllKeys","count"],MO=["put","add","delete","clear"],uf=new Map;function bw(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(uf.get(e))return uf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=MO.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||DO.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return uf.set(e,s),s}AO(t=>({...t,get:(e,n,r)=>bw(e,n)||t.get(e,n,r),has:(e,n)=>!!bw(e,n)||t.has(e,n)}));/**
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
 */class LO{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if($O(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function $O(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Bp="@firebase/app",Nw="0.7.32";/**
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
 */const Vi=new Dl("@firebase/app"),FO="@firebase/app-compat",UO="@firebase/analytics-compat",VO="@firebase/analytics",BO="@firebase/app-check-compat",jO="@firebase/app-check",zO="@firebase/auth",WO="@firebase/auth-compat",HO="@firebase/database",qO="@firebase/database-compat",KO="@firebase/functions",GO="@firebase/functions-compat",QO="@firebase/installations",YO="@firebase/installations-compat",XO="@firebase/messaging",JO="@firebase/messaging-compat",ZO="@firebase/performance",eP="@firebase/performance-compat",tP="@firebase/remote-config",nP="@firebase/remote-config-compat",rP="@firebase/storage",iP="@firebase/storage-compat",sP="@firebase/firestore",oP="@firebase/firestore-compat",aP="firebase",lP="9.9.4";/**
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
 */const MS="[DEFAULT]",uP={[Bp]:"fire-core",[FO]:"fire-core-compat",[VO]:"fire-analytics",[UO]:"fire-analytics-compat",[jO]:"fire-app-check",[BO]:"fire-app-check-compat",[zO]:"fire-auth",[WO]:"fire-auth-compat",[HO]:"fire-rtdb",[qO]:"fire-rtdb-compat",[KO]:"fire-fn",[GO]:"fire-fn-compat",[QO]:"fire-iid",[YO]:"fire-iid-compat",[XO]:"fire-fcm",[JO]:"fire-fcm-compat",[ZO]:"fire-perf",[eP]:"fire-perf-compat",[tP]:"fire-rc",[nP]:"fire-rc-compat",[rP]:"fire-gcs",[iP]:"fire-gcs-compat",[sP]:"fire-fst",[oP]:"fire-fst-compat","fire-js":"fire-js",[aP]:"fire-js-all"};/**
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
 */const Za=new Map,jp=new Map;function cP(t,e){try{t.container.addComponent(e)}catch(n){Vi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ln(t){const e=t.name;if(jp.has(e))return Vi.debug(`There were multiple attempts to register component ${e}.`),!1;jp.set(e,t);for(const n of Za.values())cP(n,t);return!0}function Ao(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const hP={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Bi=new is("app","Firebase",hP);/**
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
 */class dP{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Gt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Bi.create("app-deleted",{appName:this._name})}}/**
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
 */const ni=lP;function fP(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:MS,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw Bi.create("bad-app-name",{appName:String(r)});const i=Za.get(r);if(i){if(Uc(t,i.options)&&Uc(n,i.config))return i;throw Bi.create("duplicate-app",{appName:r})}const s=new EO(r);for(const a of jp.values())s.addComponent(a);const o=new dP(t,n,s);return Za.set(r,o),o}function Fg(t=MS){const e=Za.get(t);if(!e)throw Bi.create("no-app",{appName:t});return e}function pP(){return Array.from(Za.values())}function Le(t,e,n){var r;let i=(r=uP[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Vi.warn(a.join(" "));return}ln(new Gt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const mP="firebase-heartbeat-database",gP=1,el="firebase-heartbeat-store";let cf=null;function LS(){return cf||(cf=DS(mP,gP,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(el)}}}).catch(t=>{throw Bi.create("idb-open",{originalErrorMessage:t.message})})),cf}async function vP(t){var e;try{return(await LS()).transaction(el).objectStore(el).get($S(t))}catch(n){if(n instanceof dn)Vi.warn(n.message);else{const r=Bi.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Vi.warn(r.message)}}}async function Rw(t,e){var n;try{const i=(await LS()).transaction(el,"readwrite");return await i.objectStore(el).put(e,$S(t)),i.done}catch(r){if(r instanceof dn)Vi.warn(r.message);else{const i=Bi.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});Vi.warn(i.message)}}}function $S(t){return`${t.name}!${t.options.appId}`}/**
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
 */const yP=1024,_P=30*24*60*60*1e3;class wP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new CP(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Aw();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=_P}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Aw(),{heartbeatsToSend:n,unsentEntries:r}=EP(this._heartbeatsCache.heartbeats),i=SS(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Aw(){return new Date().toISOString().substring(0,10)}function EP(t,e=yP){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Ow(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ow(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class CP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return NS()?nO().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await vP(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Rw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Rw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ow(t){return SS(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function TP(t){ln(new Gt("platform-logger",e=>new LO(e),"PRIVATE")),ln(new Gt("heartbeat",e=>new wP(e),"PRIVATE")),Le(Bp,Nw,t),Le(Bp,Nw,"esm2017"),Le("fire-js","")}TP("");function Ug(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function FS(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const SP=FS,US=new is("auth","Firebase",FS());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pw=new Dl("@firebase/auth");function nc(t,...e){Pw.logLevel<=ie.ERROR&&Pw.error(`Auth (${ni}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(t,...e){throw Vg(t,...e)}function Pn(t,...e){return Vg(t,...e)}function VS(t,e,n){const r=Object.assign(Object.assign({},SP()),{[e]:n});return new is("auth","Firebase",r).create(e,{appName:t.name})}function IP(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Un(t,"argument-error"),VS(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Vg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return US.create(t,...e)}function q(t,e,...n){if(!t)throw Vg(e,...n)}function Yn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw nc(e),new Error(e)}function lr(t,e){t||Yn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw=new Map;function Xn(t){lr(t instanceof Function,"Expected a class definition");let e=Dw.get(t);return e?(lr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Dw.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kP(t,e){const n=Ao(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Uc(s,e!=null?e:{}))return i;Un(i,"already-initialized")}return n.initialize({options:e})}function xP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Xn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function bP(){return Mw()==="http:"||Mw()==="https:"}function Mw(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(bP()||kS()||"connection"in navigator)?navigator.onLine:!0}function RP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(e,n){this.shortDelay=e,this.longDelay=n,lr(n>e,"Short delay should be less than long delay!"),this.isMobile=Uh()||Lg()}get(){return NP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bg(t,e){lr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BS{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Yn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Yn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Yn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OP=new Ml(3e4,6e4);function PP(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Bh(t,e,n,r,i={}){return jS(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ro(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),BS.fetch()(zS(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function jS(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},AP),e);try{const i=new MP(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Au(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Au(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Au(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Au(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw VS(t,c,u);Un(t,c)}}catch(i){if(i instanceof dn)throw i;Un(t,"network-request-failed")}}async function DP(t,e,n,r,i={}){const s=await Bh(t,e,n,r,i);return"mfaPendingCredential"in s&&Un(t,"multi-factor-auth-required",{_serverResponse:s}),s}function zS(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Bg(t.config,i):`${t.config.apiScheme}://${i}`}class MP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Pn(this.auth,"network-request-failed")),OP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Au(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Pn(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LP(t,e){return Bh(t,"POST","/v1/accounts:delete",e)}async function $P(t,e){return Bh(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ea(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function FP(t,e=!1){const n=et(t),r=await n.getIdToken(e),i=jg(r);q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ea(hf(i.auth_time)),issuedAtTime:Ea(hf(i.iat)),expirationTime:Ea(hf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function hf(t){return Number(t)*1e3}function jg(t){var e;const[n,r,i]=t.split(".");if(n===void 0||r===void 0||i===void 0)return nc("JWT malformed, contained fewer than 3 sections"),null;try{const s=$p(r);return s?JSON.parse(s):(nc("Failed to decode base64 JWT payload"),null)}catch(s){return nc("Caught error parsing JWT payload as JSON",(e=s)===null||e===void 0?void 0:e.toString()),null}}function UP(t){const e=jg(t);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tl(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof dn&&VP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function VP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ea(this.lastLoginAt),this.creationTime=Ea(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Vc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await tl(t,$P(n,{idToken:r}));q(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?WP(s.providerUserInfo):[],a=zP(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new WS(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function jP(t){const e=et(t);await Vc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function zP(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function WP(t){return t.map(e=>{var{providerId:n}=e,r=Ug(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HP(t,e){const n=await jS(t,{},async()=>{const r=Ro({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=zS(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",BS.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):UP(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return q(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await HP(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new nl;return r&&(q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new nl,this.toJSON())}_performRefresh(){return Yn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wr(t,e){q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ni{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Ug(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new BP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new WS(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await tl(this,this.stsTokenManager.getToken(this.auth,e));return q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return FP(this,e)}reload(){return jP(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Ni(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Vc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await tl(this,LP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(u=n.createdAt)!==null&&u!==void 0?u:void 0,m=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:v,emailVerified:_,isAnonymous:C,providerData:T,stsTokenManager:S}=n;q(v&&S,e,"internal-error");const I=nl.fromJSON(this.name,S);q(typeof v=="string",e,"internal-error"),wr(h,e.name),wr(d,e.name),q(typeof _=="boolean",e,"internal-error"),q(typeof C=="boolean",e,"internal-error"),wr(f,e.name),wr(p,e.name),wr(y,e.name),wr(w,e.name),wr(g,e.name),wr(m,e.name);const F=new Ni({uid:v,auth:e,email:d,emailVerified:_,displayName:h,isAnonymous:C,photoURL:p,phoneNumber:f,tenantId:y,stsTokenManager:I,createdAt:g,lastLoginAt:m});return T&&Array.isArray(T)&&(F.providerData=T.map(O=>Object.assign({},O))),w&&(F._redirectEventId=w),F}static async _fromIdTokenResponse(e,n,r=!1){const i=new nl;i.updateFromServerResponse(n);const s=new Ni({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Vc(s),s}}/**
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
 */class HS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}HS.type="NONE";const Lw=HS;/**
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
 */function rc(t,e,n){return`firebase:${t}:${e}:${n}`}class js{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=rc(this.userKey,i.apiKey,s),this.fullPersistenceKey=rc("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ni._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new js(Xn(Lw),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Xn(Lw);const o=rc(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Ni._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new js(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new js(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $w(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(GS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(qS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(YS(e))return"Blackberry";if(XS(e))return"Webos";if(zg(e))return"Safari";if((e.includes("chrome/")||KS(e))&&!e.includes("edge/"))return"Chrome";if(QS(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function qS(t=Ze()){return/firefox\//i.test(t)}function zg(t=Ze()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function KS(t=Ze()){return/crios\//i.test(t)}function GS(t=Ze()){return/iemobile/i.test(t)}function QS(t=Ze()){return/android/i.test(t)}function YS(t=Ze()){return/blackberry/i.test(t)}function XS(t=Ze()){return/webos/i.test(t)}function jh(t=Ze()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function qP(t=Ze()){var e;return jh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function KP(){return xS()&&document.documentMode===10}function JS(t=Ze()){return jh(t)||QS(t)||XS(t)||YS(t)||/windows phone/i.test(t)||GS(t)}function GP(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZS(t,e=[]){let n;switch(t){case"Browser":n=$w(Ze());break;case"Worker":n=`${$w(Ze())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ni}/${r}`}/**
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
 */class QP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const i of this.queue)await i(e),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const s of r)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YP{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Fw(this),this.idTokenSubscription=new Fw(this),this.beforeStateQueue=new QP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=US,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Xn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await js.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await Vc(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=RP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?et(e):null;return n&&q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Xn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new is("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Xn(e)||this._popupRedirectResolver;q(n,this,"argument-error"),this.redirectPersistenceManager=await js.create(this,[Xn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return q(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ZS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Wg(t){return et(t)}class Fw{constructor(e){this.auth=e,this.observer=null,this.addObserver=uO(n=>this.observer=n)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e1{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Yn("not implemented")}_getIdTokenResponse(e){return Yn("not implemented")}_linkToIdToken(e,n){return Yn("not implemented")}_getReauthenticationResolver(e){return Yn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zs(t,e){return DP(t,"POST","/v1/accounts:signInWithIdp",PP(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XP="http://localhost";class ji extends e1{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ji(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Un("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Ug(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ji(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return zs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,zs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,zs(e,n)}buildRequest(){const e={requestUri:XP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ro(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ll extends Hg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr extends Ll{constructor(){super("facebook.com")}static credential(e){return ji._fromParams({providerId:kr.PROVIDER_ID,signInMethod:kr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kr.credentialFromTaggedObject(e)}static credentialFromError(e){return kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kr.credential(e.oauthAccessToken)}catch{return null}}}kr.FACEBOOK_SIGN_IN_METHOD="facebook.com";kr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn extends Ll{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ji._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return qn.credential(n,r)}catch{return null}}}qn.GOOGLE_SIGN_IN_METHOD="google.com";qn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr extends Ll{constructor(){super("github.com")}static credential(e){return ji._fromParams({providerId:xr.PROVIDER_ID,signInMethod:xr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xr.credentialFromTaggedObject(e)}static credentialFromError(e){return xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xr.credential(e.oauthAccessToken)}catch{return null}}}xr.GITHUB_SIGN_IN_METHOD="github.com";xr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br extends Ll{constructor(){super("twitter.com")}static credential(e,n){return ji._fromParams({providerId:br.PROVIDER_ID,signInMethod:br.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return br.credentialFromTaggedObject(e)}static credentialFromError(e){return br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return br.credential(n,r)}catch{return null}}}br.TWITTER_SIGN_IN_METHOD="twitter.com";br.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Ni._fromIdTokenResponse(e,r,i),o=Uw(r);return new so({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Uw(r);return new so({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Uw(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc extends dn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Bc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Bc(e,n,r,i)}}function t1(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Bc._fromErrorAndOperation(t,s,e,r):s})}async function JP(t,e,n=!1){const r=await tl(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return so._forOperation(t,"link",r)}/**
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
 */async function ZP(t,e,n=!1){var r;const{auth:i}=t,s="reauthenticate";try{const o=await tl(t,t1(i,s,e,t),n);q(o.idToken,i,"internal-error");const a=jg(o.idToken);q(a,i,"internal-error");const{sub:l}=a;return q(t.uid===l,i,"user-mismatch"),so._forOperation(t,s,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&Un(i,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eD(t,e,n=!1){const r="signIn",i=await t1(t,r,e),s=await so._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function tD(t,e,n,r){return et(t).onIdTokenChanged(e,n,r)}function nD(t){et(t).useDeviceLanguage()}function rD(t){return et(t).signOut()}const jc="__sak";/**
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
 */class n1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(jc,"1"),this.storage.removeItem(jc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iD(){const t=Ze();return zg(t)||jh(t)}const sD=1e3,oD=10;class r1 extends n1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=iD()&&GP(),this.fallbackToPolling=JS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);KP()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,oD):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},sD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}r1.type="LOCAL";const aD=r1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1 extends n1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}i1.type="SESSION";const s1=i1;/**
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
 */function lD(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class zh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new zh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await lD(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}zh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class uD{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=qg("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(){return window}function cD(t){Dn().location.href=t}/**
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
 */function o1(){return typeof Dn().WorkerGlobalScope<"u"&&typeof Dn().importScripts=="function"}async function hD(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function dD(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function fD(){return o1()?self:null}/**
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
 */const a1="firebaseLocalStorageDb",pD=1,zc="firebaseLocalStorage",l1="fbase_key";class $l{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Wh(t,e){return t.transaction([zc],e?"readwrite":"readonly").objectStore(zc)}function mD(){const t=indexedDB.deleteDatabase(a1);return new $l(t).toPromise()}function Wp(){const t=indexedDB.open(a1,pD);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(zc,{keyPath:l1})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(zc)?e(r):(r.close(),await mD(),e(await Wp()))})})}async function Vw(t,e,n){const r=Wh(t,!0).put({[l1]:e,value:n});return new $l(r).toPromise()}async function gD(t,e){const n=Wh(t,!1).get(e),r=await new $l(n).toPromise();return r===void 0?null:r.value}function Bw(t,e){const n=Wh(t,!0).delete(e);return new $l(n).toPromise()}const vD=800,yD=3;class u1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Wp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>yD)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return o1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=zh._getInstance(fD()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await hD(),!this.activeServiceWorker)return;this.sender=new uD(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||dD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Wp();return await Vw(e,jc,"1"),await Bw(e,jc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Vw(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>gD(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Bw(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Wh(i,!1).getAll();return new $l(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),vD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}u1.type="LOCAL";const _D=u1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wD(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function ED(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Pn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",wD().appendChild(r)})}function CD(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Ml(3e4,6e4);/**
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
 */function c1(t,e){return e?Xn(e):(q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Kg extends e1{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return zs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return zs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function TD(t){return eD(t.auth,new Kg(t),t.bypassAuthState)}function SD(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),ZP(n,new Kg(t),t.bypassAuthState)}async function ID(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),JP(n,new Kg(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h1{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return TD;case"linkViaPopup":case"linkViaRedirect":return ID;case"reauthViaPopup":case"reauthViaRedirect":return SD;default:Un(this.auth,"internal-error")}}resolve(e){lr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){lr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kD=new Ml(2e3,1e4);async function xD(t,e,n){const r=Wg(t);IP(t,e,Hg);const i=c1(r,n);return new wi(r,"signInViaPopup",e,i).executeNotNull()}class wi extends h1{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,wi.currentPopupAction&&wi.currentPopupAction.cancel(),wi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){lr(this.filter.length===1,"Popup operations only handle one event");const e=qg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Pn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Pn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,wi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Pn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,kD.get())};e()}}wi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bD="pendingRedirect",ic=new Map;class ND extends h1{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ic.get(this.auth._key());if(!e){try{const r=await RD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ic.set(this.auth._key(),e)}return this.bypassAuthState||ic.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function RD(t,e){const n=PD(e),r=OD(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function AD(t,e){ic.set(t._key(),e)}function OD(t){return Xn(t._redirectPersistence)}function PD(t){return rc(bD,t.config.apiKey,t.name)}async function DD(t,e,n=!1){const r=Wg(t),i=c1(r,e),o=await new ND(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MD=10*60*1e3;class LD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$D(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!d1(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Pn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=MD&&this.cachedEventUids.clear(),this.cachedEventUids.has(jw(e))}saveEventToCache(e){this.cachedEventUids.add(jw(e)),this.lastProcessedEventTime=Date.now()}}function jw(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function d1({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function $D(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return d1(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FD(t,e={}){return Bh(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,VD=/^https?/;async function BD(t){if(t.config.emulator)return;const{authorizedDomains:e}=await FD(t);for(const n of e)try{if(jD(n))return}catch{}Un(t,"unauthorized-domain")}function jD(t){const e=zp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!VD.test(n))return!1;if(UD.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const zD=new Ml(3e4,6e4);function zw(){const t=Dn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function WD(t){return new Promise((e,n)=>{var r,i,s;function o(){zw(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{zw(),n(Pn(t,"network-request-failed"))},timeout:zD.get()})}if(!((i=(r=Dn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Dn().gapi)===null||s===void 0)&&s.load)o();else{const a=CD("iframefcb");return Dn()[a]=()=>{gapi.load?o():n(Pn(t,"network-request-failed"))},ED(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw sc=null,e})}let sc=null;function HD(t){return sc=sc||WD(t),sc}/**
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
 */const qD=new Ml(5e3,15e3),KD="__/auth/iframe",GD="emulator/auth/iframe",QD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},YD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function XD(t){const e=t.config;q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Bg(e,GD):`https://${t.config.authDomain}/${KD}`,r={apiKey:e.apiKey,appName:t.name,v:ni},i=YD.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ro(r).slice(1)}`}async function JD(t){const e=await HD(t),n=Dn().gapi;return q(n,t,"internal-error"),e.open({where:document.body,url:XD(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:QD,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Pn(t,"network-request-failed"),a=Dn().setTimeout(()=>{s(o)},qD.get());function l(){Dn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const ZD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},eM=500,tM=600,nM="_blank",rM="http://localhost";class Ww{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function iM(t,e,n,r=eM,i=tM){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},ZD),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ze().toLowerCase();n&&(a=KS(u)?nM:n),qS(u)&&(e=e||rM,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[f,p])=>`${d}${f}=${p},`,"");if(qP(u)&&a!=="_self")return sM(e||"",a),new Ww(null);const h=window.open(e||"",a,c);q(h,t,"popup-blocked");try{h.focus()}catch{}return new Ww(h)}function sM(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const oM="__/auth/handler",aM="emulator/auth/handler";function Hw(t,e,n,r,i,s){q(t.config.authDomain,t,"auth-domain-config-required"),q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ni,eventId:i};if(e instanceof Hg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Fp(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof Ll){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${lM(t)}?${Ro(a).slice(1)}`}function lM({config:t}){return t.emulator?Bg(t,aM):`https://${t.authDomain}/${oM}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const df="webStorageSupport";class uM{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=s1,this._completeRedirectFn=DD,this._overrideRedirectResult=AD}async _openPopup(e,n,r,i){var s;lr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Hw(e,n,r,zp(),i);return iM(e,o,qg())}async _openRedirect(e,n,r,i){return await this._originValidation(e),cD(Hw(e,n,r,zp(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(lr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await JD(e),r=new LD(e);return n.register("authEvent",i=>(q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(df,{type:df},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[df];o!==void 0&&n(!!o),Un(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=BD(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return JS()||zg()||jh()}}const cM=uM;var qw="@firebase/auth",Kw="0.20.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hM{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dM(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function fM(t){ln(new Gt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{q(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),q(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ZS(t)},c=new YP(a,l,u);return xP(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ln(new Gt("auth-internal",e=>{const n=Wg(e.getProvider("auth").getImmediate());return(r=>new hM(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Le(qw,Kw,dM(t)),Le(qw,Kw,"esm2017")}/**
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
 */function pM(t=Fg()){const e=Ao(t,"auth");return e.isInitialized()?e.getImmediate():kP(t,{popupRedirectResolver:cM,persistence:[_D,aD,s1]})}fM("Browser");const Gw="@firebase/database",Qw="0.13.6";/**
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
 */let f1="";function mM(t){f1=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gM{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ye(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ja(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vM{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return mr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p1=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new gM(e)}}catch{}return new vM},Ei=p1("localStorage"),Hp=p1("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ws=new Dl("@firebase/database"),yM=function(){let t=1;return function(){return t++}}(),m1=function(t){const e=dO(t),n=new lO;n.update(e);const r=n.digest();return Dg.encodeByteArray(r)},Fl=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Fl.apply(null,r):typeof r=="object"?e+=Ye(r):e+=r,e+=" "}return e};let Ri=null,Yw=!0;const _M=function(t,e){N(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Ws.logLevel=ie.VERBOSE,Ri=Ws.log.bind(Ws),e&&Hp.set("logging_enabled",!0)):typeof t=="function"?Ri=t:(Ri=null,Hp.remove("logging_enabled"))},mt=function(...t){if(Yw===!0&&(Yw=!1,Ri===null&&Hp.get("logging_enabled")===!0&&_M(!0)),Ri){const e=Fl.apply(null,t);Ri(e)}},Ul=function(t){return function(...e){mt(t,...e)}},qp=function(...t){const e="FIREBASE INTERNAL ERROR: "+Fl(...t);Ws.error(e)},zi=function(...t){const e=`FIREBASE FATAL ERROR: ${Fl(...t)}`;throw Ws.error(e),new Error(e)},qt=function(...t){const e="FIREBASE WARNING: "+Fl(...t);Ws.warn(e)},wM=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&qt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},g1=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},EM=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},oo="[MIN_NAME]",Wi="[MAX_NAME]",Oo=function(t,e){if(t===e)return 0;if(t===oo||e===Wi)return-1;if(e===oo||t===Wi)return 1;{const n=Xw(t),r=Xw(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},CM=function(t,e){return t===e?0:t<e?-1:1},Xo=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ye(e))},Gg=function(t){if(typeof t!="object"||t===null)return Ye(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Ye(e[r]),n+=":",n+=Gg(t[e[r]]);return n+="}",n},v1=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Vt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const y1=function(t){N(!g1(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(c.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},TM=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},SM=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function IM(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const kM=new RegExp("^-?(0*)\\d{1,10}$"),xM=-2147483648,bM=2147483647,Xw=function(t){if(kM.test(t)){const e=Number(t);if(e>=xM&&e<=bM)return e}return null},Vl=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw qt("Exception was thrown by user callback.",n),e},Math.floor(0))}},NM=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ca=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class RM{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){qt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AM{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(mt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',qt(e)}}class Kp{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Kp.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qg="5",_1="v",w1="s",E1="r",C1="f",T1=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,S1="ls",I1="p",Gp="ac",k1="websocket",x1="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OM{constructor(e,n,r,i,s=!1,o="",a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ei.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ei.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function PM(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function b1(t,e,n){N(typeof e=="string","typeof type must == string"),N(typeof n=="object","typeof params must == object");let r;if(e===k1)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===x1)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);PM(t)&&(n.ns=t.namespace);const i=[];return Vt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DM{constructor(){this.counters_={}}incrementCounter(e,n=1){mr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return JA(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ff={},pf={};function Yg(t){const e=t.toString();return ff[e]||(ff[e]=new DM),ff[e]}function MM(t,e){const n=t.toString();return pf[n]||(pf[n]=e()),pf[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LM{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Vl(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jw="start",$M="close",FM="pLPCommand",UM="pRTLPCB",N1="id",R1="pw",A1="ser",VM="cb",BM="seg",jM="ts",zM="d",WM="dframe",O1=1870,P1=30,HM=O1-P1,qM=25e3,KM=3e4;class Os{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ul(e),this.stats_=Yg(n),this.urlFn=l=>(this.appCheckToken&&(l[Gp]=this.appCheckToken),b1(n,x1,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new LM(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(KM)),EM(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Xg((...s)=>{const[o,a,l,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Jw)this.id=a,this.password=l;else if(o===$M)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Jw]="t",r[A1]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[VM]=this.scriptTagHolder.uniqueCallbackIdentifier),r[_1]=Qg,this.transportSessionId&&(r[w1]=this.transportSessionId),this.lastSessionId&&(r[S1]=this.lastSessionId),this.applicationId&&(r[I1]=this.applicationId),this.appCheckToken&&(r[Gp]=this.appCheckToken),typeof location<"u"&&location.hostname&&T1.test(location.hostname)&&(r[E1]=C1);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Os.forceAllow_=!0}static forceDisallow(){Os.forceDisallow_=!0}static isAvailable(){return Os.forceAllow_?!0:!Os.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!TM()&&!SM()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ye(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=TS(n),i=v1(r,HM);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[WM]="t",r[N1]=e,r[R1]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ye(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Xg{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=yM(),window[FM+this.uniqueCallbackIdentifier]=e,window[UM+this.uniqueCallbackIdentifier]=n,this.myIFrame=Xg.createIFrame_();let s="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const a=document.domain;s='<script>document.domain="'+a+'";<\/script>'}const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){mt("frame writing exception"),a.stack&&mt(a.stack),mt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||mt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[N1]=this.myID,e[R1]=this.myPW,e[A1]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+P1+r.length<=O1;){const o=this.pendingSegs.shift();r=r+"&"+BM+i+"="+o.seg+"&"+jM+i+"="+o.ts+"&"+zM+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(qM)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{mt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GM=16384,QM=45e3;let Wc=null;typeof MozWebSocket<"u"?Wc=MozWebSocket:typeof WebSocket<"u"&&(Wc=WebSocket);class _n{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ul(this.connId),this.stats_=Yg(n),this.connURL=_n.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[_1]=Qg,typeof location<"u"&&location.hostname&&T1.test(location.hostname)&&(o[E1]=C1),n&&(o[w1]=n),r&&(o[S1]=r),i&&(o[Gp]=i),s&&(o[I1]=s),b1(e,k1,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ei.set("previous_websocket_failure",!0);try{let r;bS(),this.mySock=new Wc(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){_n.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Wc!==null&&!_n.forceDisallow_}static previouslyFailed(){return Ei.isInMemoryStorage||Ei.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ei.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Ja(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(N(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Ye(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=v1(n,GM);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(QM))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}_n.responsesRequiredToBeHealthy=2;_n.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Os,_n]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=_n&&_n.isAvailable();let r=n&&!_n.previouslyFailed();if(e.webSocketOnly&&(n||qt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[_n];else{const i=this.transports_=[];for(const s of rl.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);rl.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}rl.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YM=6e4,XM=5e3,JM=10*1024,ZM=100*1024,mf="t",Zw="d",eL="s",e0="r",tL="e",t0="o",n0="a",r0="n",i0="p",nL="h";class rL{constructor(e,n,r,i,s,o,a,l,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ul("c:"+this.id+":"),this.transportManager_=new rl(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ca(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>ZM?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>JM?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(mf in e){const n=e[mf];n===n0?this.upgradeIfSecondaryHealthy_():n===e0?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===t0&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Xo("t",e),r=Xo("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:i0,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:n0,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:r0,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Xo("t",e),r=Xo("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Xo(mf,e);if(Zw in e){const r=e[Zw];if(n===nL)this.onHandshake_(r);else if(n===r0){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===eL?this.onConnectionShutdown_(r):n===e0?this.onReset_(r):n===tL?qp("Server Error: "+r):n===t0?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):qp("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Qg!==r&&qt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Ca(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(YM))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ca(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(XM))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:i0,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ei.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D1{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M1{constructor(e){this.allowedEvents_=e,this.listeners_={},N(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){N(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc extends M1{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Uh()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Hc}getInitialEvent(e){return N(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s0=32,o0=768;class de{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function oe(){return new de("")}function X(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Hr(t){return t.pieces_.length-t.pieceNum_}function fe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new de(t.pieces_,e)}function L1(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function iL(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function $1(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function F1(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new de(e,0)}function Ve(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof de)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new de(n,0)}function J(t){return t.pieceNum_>=t.pieces_.length}function Ot(t,e){const n=X(t),r=X(e);if(n===null)return e;if(n===r)return Ot(fe(t),fe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Jg(t,e){if(Hr(t)!==Hr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function wn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Hr(t)>Hr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class sL{constructor(e,n){this.errorPrefix_=n,this.parts_=$1(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Vh(this.parts_[r]);U1(this)}}function oL(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Vh(e),U1(t)}function aL(t){const e=t.parts_.pop();t.byteLength_-=Vh(e),t.parts_.length>0&&(t.byteLength_-=1)}function U1(t){if(t.byteLength_>o0)throw new Error(t.errorPrefix_+"has a key path longer than "+o0+" bytes ("+t.byteLength_+").");if(t.parts_.length>s0)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+s0+") or object contains a cycle "+pi(t))}function pi(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg extends M1{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Zg}getInitialEvent(e){return N(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jo=1e3,lL=60*5*1e3,a0=30*1e3,uL=1.3,cL=3e4,hL="server_kill",l0=3;class tr extends D1{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=tr.nextPersistentConnectionId_++,this.log_=Ul("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Jo,this.maxReconnectDelay_=lL,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!bS())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Zg.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Hc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Ye(s)),N(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Mg,r={p:e._path.toString(),q:e._queryObject},i={action:"g",request:r,onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),N(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),N(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;tr.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&mr(e,"w")){const r=io(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();qt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||aO(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=a0)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=oO(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),N(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ye(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):qp("Unrecognized action received from server: "+Ye(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){N(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Jo,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Jo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>cL&&(this.reconnectDelay_=Jo),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*uL)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+tr.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(h){N(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?mt("getToken() completed but was canceled"):(mt("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new rL(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,f=>{qt(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(hL)},s))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&qt(h),l())}}}interrupt(e){mt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){mt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Fp(this.interruptReasons_)&&(this.reconnectDelay_=Jo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Gg(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new de(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){mt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=l0&&(this.reconnectDelay_=a0,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){mt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=l0&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+f1.replace(/\./g,"-")]=1,Uh()?e["framework.cordova"]=1:Lg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Hc.getInstance().currentlyOnline();return Fp(this.interruptReasons_)&&e}}tr.nextPersistentConnectionId_=0;tr.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Q(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new Q(oo,e),i=new Q(oo,n);return this.compare(r,i)!==0}minPost(){return Q.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ou;class V1 extends Hh{static get __EMPTY_NODE(){return Ou}static set __EMPTY_NODE(e){Ou=e}compare(e,n){return Oo(e.name,n.name)}isDefinedOn(e){throw No("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Q.MIN}maxPost(){return new Q(Wi,Ou)}makePost(e,n){return N(typeof e=="string","KeyIndex indexValue must always be a string."),new Q(e,Ou)}toString(){return".key"}}const Hs=new V1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Qe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:Qe.RED,this.left=i!=null?i:Pt.EMPTY_NODE,this.right=s!=null?s:Pt.EMPTY_NODE}copy(e,n,r,i,s){return new Qe(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Pt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Pt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Qe.RED=!0;Qe.BLACK=!1;class dL{copy(e,n,r,i,s){return this}insert(e,n,r){return new Qe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Pt{constructor(e,n=Pt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Pt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Qe.BLACK,null,null))}remove(e){return new Pt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Qe.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Pu(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Pu(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Pu(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Pu(this.root_,null,this.comparator_,!0,e)}}Pt.EMPTY_NODE=new dL;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fL(t,e){return Oo(t.name,e.name)}function ev(t,e){return Oo(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qp;function pL(t){Qp=t}const B1=function(t){return typeof t=="number"?"number:"+y1(t):"string:"+t},j1=function(t){if(t.isLeafNode()){const e=t.val();N(typeof e=="string"||typeof e=="number"||typeof e=="object"&&mr(e,".sv"),"Priority must be a string or number.")}else N(t===Qp||t.isEmpty(),"priority of unexpected type.");N(t===Qp||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let u0;class qe{constructor(e,n=qe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,N(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),j1(this.priorityNode_)}static set __childrenNodeConstructor(e){u0=e}static get __childrenNodeConstructor(){return u0}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new qe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:qe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return J(e)?this:X(e)===".priority"?this.priorityNode_:qe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:qe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=X(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(N(r!==".priority"||Hr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,qe.__childrenNodeConstructor.EMPTY_NODE.updateChild(fe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+B1(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=y1(this.value_):e+=this.value_,this.lazyHash_=m1(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===qe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof qe.__childrenNodeConstructor?-1:(N(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=qe.VALUE_TYPE_ORDER.indexOf(n),s=qe.VALUE_TYPE_ORDER.indexOf(r);return N(i>=0,"Unknown leaf type: "+n),N(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}qe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let z1,W1;function mL(t){z1=t}function gL(t){W1=t}class vL extends Hh{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Oo(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Q.MIN}maxPost(){return new Q(Wi,new qe("[PRIORITY-POST]",W1))}makePost(e,n){const r=z1(e);return new Q(n,new qe("[PRIORITY-POST]",r))}toString(){return".priority"}}const Ne=new vL;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yL=Math.log(2);class _L{constructor(e){const n=s=>parseInt(Math.log(s)/yL,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const qc=function(t,e,n,r){t.sort(e);const i=function(l,u){const c=u-l;let h,d;if(c===0)return null;if(c===1)return h=t[l],d=n?n(h):h,new Qe(d,h.node,Qe.BLACK,null,null);{const f=parseInt(c/2,10)+l,p=i(l,f),y=i(f+1,u);return h=t[f],d=n?n(h):h,new Qe(d,h.node,Qe.BLACK,p,y)}},s=function(l){let u=null,c=null,h=t.length;const d=function(p,y){const w=h-p,g=h;h-=p;const m=i(w+1,g),v=t[w],_=n?n(v):v;f(new Qe(_,v.node,y,null,m))},f=function(p){u?(u.left=p,u=p):(c=p,u=p)};for(let p=0;p<l.count;++p){const y=l.nextBitIsOne(),w=Math.pow(2,l.count-(p+1));y?d(w,Qe.BLACK):(d(w,Qe.BLACK),d(w,Qe.RED))}return c},o=new _L(t.length),a=s(o);return new Pt(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gf;const ps={};class Jn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return N(ps&&Ne,"ChildrenNode.ts has not been loaded"),gf=gf||new Jn({".priority":ps},{".priority":Ne}),gf}get(e){const n=io(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Pt?n:null}hasIndex(e){return mr(this.indexSet_,e.toString())}addIndex(e,n){N(e!==Hs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(Q.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=qc(r,e.getCompare()):a=ps;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const c=Object.assign({},this.indexes_);return c[l]=a,new Jn(c,u)}addToIndexes(e,n){const r=Fc(this.indexes_,(i,s)=>{const o=io(this.indexSet_,s);if(N(o,"Missing index implementation for "+s),i===ps)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(Q.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),qc(a,o.getCompare())}else return ps;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new Q(e.name,a))),l.insert(e,e.node)}});return new Jn(r,this.indexSet_)}removeFromIndexes(e,n){const r=Fc(this.indexes_,i=>{if(i===ps)return i;{const s=n.get(e.name);return s?i.remove(new Q(e.name,s)):i}});return new Jn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zo;class j{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&j1(this.priorityNode_),this.children_.isEmpty()&&N(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Zo||(Zo=new j(new Pt(ev),null,Jn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Zo}updatePriority(e){return this.children_.isEmpty()?this:new j(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Zo:n}}getChild(e){const n=X(e);return n===null?this:this.getImmediateChild(n).getChild(fe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(N(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new Q(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Zo:this.priorityNode_;return new j(i,o,s)}}updateChild(e,n){const r=X(e);if(r===null)return n;{N(X(e)!==".priority"||Hr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(fe(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Ne,(o,a)=>{n[o]=a.val(e),r++,s&&j.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+B1(this.getPriority().val())+":"),this.forEachChild(Ne,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":m1(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new Q(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Q(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Q(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,Q.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,Q.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Bl?-1:0}withIndex(e){if(e===Hs||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new j(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Hs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Ne),i=n.getIterator(Ne);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Hs?null:this.indexMap_.get(e.toString())}}j.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class wL extends j{constructor(){super(new Pt(ev),j.EMPTY_NODE,Jn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return j.EMPTY_NODE}isEmpty(){return!1}}const Bl=new wL;Object.defineProperties(Q,{MIN:{value:new Q(oo,j.EMPTY_NODE)},MAX:{value:new Q(Wi,Bl)}});V1.__EMPTY_NODE=j.EMPTY_NODE;qe.__childrenNodeConstructor=j;pL(Bl);gL(Bl);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EL=!0;function gt(t,e=null){if(t===null)return j.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),N(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new qe(n,gt(e))}if(!(t instanceof Array)&&EL){const n=[];let r=!1;if(Vt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=gt(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new Q(o,l)))}}),n.length===0)return j.EMPTY_NODE;const s=qc(n,fL,o=>o.name,ev);if(r){const o=qc(n,Ne.getCompare());return new j(s,gt(e),new Jn({".priority":o},{".priority":Ne}))}else return new j(s,gt(e),Jn.Default)}else{let n=j.EMPTY_NODE;return Vt(t,(r,i)=>{if(mr(t,r)&&r.substring(0,1)!=="."){const s=gt(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(gt(e))}}mL(gt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CL extends Hh{constructor(e){super(),this.indexPath_=e,N(!J(e)&&X(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Oo(e.name,n.name):s}makePost(e,n){const r=gt(e),i=j.EMPTY_NODE.updateChild(this.indexPath_,r);return new Q(n,i)}maxPost(){const e=j.EMPTY_NODE.updateChild(this.indexPath_,Bl);return new Q(Wi,e)}toString(){return $1(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TL extends Hh{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Oo(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Q.MIN}maxPost(){return Q.MAX}makePost(e,n){const r=gt(e);return new Q(n,r)}toString(){return".value"}}const SL=new TL;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H1(t){return{type:"value",snapshotNode:t}}function ao(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function il(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function sl(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function IL(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){N(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(il(n,a)):N(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(ao(n,r)):o.trackChildChange(sl(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Ne,(i,s)=>{n.hasChild(i)||r.trackChildChange(il(i,s))}),n.isLeafNode()||n.forEachChild(Ne,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(sl(i,s,o))}else r.trackChildChange(ao(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?j.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e){this.indexedFilter_=new tv(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ol.getStartPost_(e),this.endPost_=ol.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,r,i,s,o){return this.matches(new Q(n,r))||(r=j.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=j.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(j.EMPTY_NODE);const s=this;return n.forEachChild(Ne,(o,a)=>{s.matches(new Q(o,a))||(i=i.updateImmediateChild(o,j.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kL{constructor(e){this.rangedFilter_=new ol(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new Q(n,r))||(r=j.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=j.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=j.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();let l;if(this.reverse_?l=this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:l=this.index_.compare(a,this.rangedFilter_.getEndPost())<=0,l)i=i.updateImmediateChild(a.name,a.node),o++;else break}}else{i=n.withIndex(this.index_),i=i.updatePriority(j.EMPTY_NODE);let s,o,a,l;if(this.reverse_){l=i.getReverseIterator(this.index_),s=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const h=this.index_.getCompare();a=(d,f)=>h(f,d)}else l=i.getIterator(this.index_),s=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),a=this.index_.getCompare();let u=0,c=!1;for(;l.hasNext();){const h=l.getNext();!c&&a(s,h)<=0&&(c=!0),c&&u<this.limit_&&a(h,o)<=0?u++:i=i.updateImmediateChild(h.name,j.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,f)=>h(f,d)}else o=this.index_.getCompare();const a=e;N(a.numChildren()===this.limit_,"");const l=new Q(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),c=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,u,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const f=d==null?1:o(d,l);if(c&&!r.isEmpty()&&f>=0)return s!=null&&s.trackChildChange(sl(n,r,h)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(il(n,h));const y=a.updateImmediateChild(n,j.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(s!=null&&s.trackChildChange(ao(d.name,d.node)),y.updateImmediateChild(d.name,d.node)):y}}else return r.isEmpty()?e:c&&o(u,l)>=0?(s!=null&&(s.trackChildChange(il(u.name,u.node)),s.trackChildChange(ao(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,j.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ne}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return N(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return N(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:oo}hasEnd(){return this.endSet_}getIndexEndValue(){return N(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return N(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Wi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return N(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ne}copy(){const e=new nv;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function xL(t){return t.loadsAllData()?new tv(t.getIndex()):t.hasLimit()?new kL(t):new ol(t)}function c0(t){const e={};if(t.isDefault())return e;let n;return t.index_===Ne?n="$priority":t.index_===SL?n="$value":t.index_===Hs?n="$key":(N(t.index_ instanceof CL,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ye(n),t.startSet_&&(e.startAt=Ye(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+Ye(t.indexStartName_))),t.endSet_&&(e.endAt=Ye(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+Ye(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function h0(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ne&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc extends D1{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Ul("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(N(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Kc.getListenId_(e,r),a={};this.listens_[o]=a;const l=c0(e._queryParams);this.restRequest_(s+".json",l,(u,c)=>{let h=c;if(u===404&&(h=null,u=null),u===null&&this.onDataUpdate_(s,h,!1,r),io(this.listens_,o)===a){let d;u?u===401?d="permission_denied":d="rest_error:"+u:d="ok",i(d,null)}})}unlisten(e,n){const r=Kc.getListenId_(e,n);delete this.listens_[r]}get(e){const n=c0(e._queryParams),r=e._path.toString(),i=new Mg;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ro(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Ja(a.responseText)}catch{qt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&qt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bL{constructor(){this.rootNode_=j.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gc(){return{value:null,children:new Map}}function q1(t,e,n){if(J(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=X(e);t.children.has(r)||t.children.set(r,Gc());const i=t.children.get(r);e=fe(e),q1(i,e,n)}}function Yp(t,e,n){t.value!==null?n(e,t.value):NL(t,(r,i)=>{const s=new de(e.toString()+"/"+r);Yp(i,s,n)})}function NL(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RL{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Vt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d0=10*1e3,AL=30*1e3,OL=5*60*1e3;class PL{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new RL(e);const r=d0+(AL-d0)*Math.random();Ca(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Vt(e,(i,s)=>{s>0&&mr(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Ca(this.reportStats_.bind(this),Math.floor(Math.random()*2*OL))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var En;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(En||(En={}));function K1(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function rv(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function iv(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=En.ACK_USER_WRITE,this.source=K1()}operationForChild(e){if(J(this.path)){if(this.affectedTree.value!=null)return N(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new de(e));return new Qc(oe(),n,this.revert)}}else return N(X(this.path)===e,"operationForChild called for unrelated child."),new Qc(fe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(e,n){this.source=e,this.path=n,this.type=En.LISTEN_COMPLETE}operationForChild(e){return J(this.path)?new al(this.source,oe()):new al(this.source,fe(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=En.OVERWRITE}operationForChild(e){return J(this.path)?new Hi(this.source,oe(),this.snap.getImmediateChild(e)):new Hi(this.source,fe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=En.MERGE}operationForChild(e){if(J(this.path)){const n=this.children.subtree(new de(e));return n.isEmpty()?null:n.value?new Hi(this.source,oe(),n.value):new ll(this.source,oe(),n)}else return N(X(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ll(this.source,fe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(J(e))return this.isFullyInitialized()&&!this.filtered_;const n=X(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DL{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function ML(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(IL(o.childName,o.snapshotNode))}),ea(t,i,"child_removed",e,r,n),ea(t,i,"child_added",e,r,n),ea(t,i,"child_moved",s,r,n),ea(t,i,"child_changed",e,r,n),ea(t,i,"value",e,r,n),i}function ea(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>$L(t,a,l)),o.forEach(a=>{const l=LL(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function LL(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function $L(t,e,n){if(e.childName==null||n.childName==null)throw No("Should only compare child_ events.");const r=new Q(e.childName,e.snapshotNode),i=new Q(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qh(t,e){return{eventCache:t,serverCache:e}}function Ta(t,e,n,r){return qh(new qi(e,n,r),t.serverCache)}function G1(t,e,n,r){return qh(t.eventCache,new qi(e,n,r))}function Xp(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ki(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vf;const FL=()=>(vf||(vf=new Pt(CM)),vf);class ye{constructor(e,n=FL()){this.value=e,this.children=n}static fromObject(e){let n=new ye(null);return Vt(e,(r,i)=>{n=n.set(new de(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:oe(),value:this.value};if(J(e))return null;{const r=X(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(fe(e),n);return s!=null?{path:Ve(new de(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(J(e))return this;{const n=X(e),r=this.children.get(n);return r!==null?r.subtree(fe(e)):new ye(null)}}set(e,n){if(J(e))return new ye(n,this.children);{const r=X(e),s=(this.children.get(r)||new ye(null)).set(fe(e),n),o=this.children.insert(r,s);return new ye(this.value,o)}}remove(e){if(J(e))return this.children.isEmpty()?new ye(null):new ye(null,this.children);{const n=X(e),r=this.children.get(n);if(r){const i=r.remove(fe(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new ye(null):new ye(this.value,s)}else return this}}get(e){if(J(e))return this.value;{const n=X(e),r=this.children.get(n);return r?r.get(fe(e)):null}}setTree(e,n){if(J(e))return n;{const r=X(e),s=(this.children.get(r)||new ye(null)).setTree(fe(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new ye(this.value,o)}}fold(e){return this.fold_(oe(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Ve(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,oe(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(J(e))return null;{const s=X(e),o=this.children.get(s);return o?o.findOnPath_(fe(e),Ve(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,oe(),n)}foreachOnPath_(e,n,r){if(J(e))return this;{this.value&&r(n,this.value);const i=X(e),s=this.children.get(i);return s?s.foreachOnPath_(fe(e),Ve(n,i),r):new ye(null)}}foreach(e){this.foreach_(oe(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Ve(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e){this.writeTree_=e}static empty(){return new In(new ye(null))}}function Sa(t,e,n){if(J(e))return new In(new ye(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Ot(i,e);return s=s.updateChild(o,n),new In(t.writeTree_.set(i,s))}else{const i=new ye(n),s=t.writeTree_.setTree(e,i);return new In(s)}}}function f0(t,e,n){let r=t;return Vt(n,(i,s)=>{r=Sa(r,Ve(e,i),s)}),r}function p0(t,e){if(J(e))return In.empty();{const n=t.writeTree_.setTree(e,new ye(null));return new In(n)}}function Jp(t,e){return ss(t,e)!=null}function ss(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ot(n.path,e)):null}function m0(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ne,(r,i)=>{e.push(new Q(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new Q(r,i.value))}),e}function Br(t,e){if(J(e))return t;{const n=ss(t,e);return n!=null?new In(new ye(n)):new In(t.writeTree_.subtree(e))}}function Zp(t){return t.writeTree_.isEmpty()}function lo(t,e){return Q1(oe(),t.writeTree_,e)}function Q1(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(N(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Q1(Ve(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Ve(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sv(t,e){return Z1(e,t)}function UL(t,e,n,r,i){N(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Sa(t.visibleWrites,e,n)),t.lastWriteId=r}function VL(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function BL(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);N(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&jL(a,r.path)?i=!1:wn(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return zL(t),!0;if(r.snap)t.visibleWrites=p0(t.visibleWrites,r.path);else{const a=r.children;Vt(a,l=>{t.visibleWrites=p0(t.visibleWrites,Ve(r.path,l))})}return!0}else return!1}function jL(t,e){if(t.snap)return wn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&wn(Ve(t.path,n),e))return!0;return!1}function zL(t){t.visibleWrites=Y1(t.allWrites,WL,oe()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function WL(t){return t.visible}function Y1(t,e,n){let r=In.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)wn(n,o)?(a=Ot(n,o),r=Sa(r,a,s.snap)):wn(o,n)&&(a=Ot(o,n),r=Sa(r,oe(),s.snap.getChild(a)));else if(s.children){if(wn(n,o))a=Ot(n,o),r=f0(r,a,s.children);else if(wn(o,n))if(a=Ot(o,n),J(a))r=f0(r,oe(),s.children);else{const l=io(s.children,X(a));if(l){const u=l.getChild(fe(a));r=Sa(r,oe(),u)}}}else throw No("WriteRecord should have .snap or .children")}}return r}function X1(t,e,n,r,i){if(!r&&!i){const s=ss(t.visibleWrites,e);if(s!=null)return s;{const o=Br(t.visibleWrites,e);if(Zp(o))return n;if(n==null&&!Jp(o,oe()))return null;{const a=n||j.EMPTY_NODE;return lo(o,a)}}}else{const s=Br(t.visibleWrites,e);if(!i&&Zp(s))return n;if(!i&&n==null&&!Jp(s,oe()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(wn(u.path,e)||wn(e,u.path))},a=Y1(t.allWrites,o,e),l=n||j.EMPTY_NODE;return lo(a,l)}}}function HL(t,e,n){let r=j.EMPTY_NODE;const i=ss(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Ne,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Br(t.visibleWrites,e);return n.forEachChild(Ne,(o,a)=>{const l=lo(Br(s,new de(o)),a);r=r.updateImmediateChild(o,l)}),m0(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Br(t.visibleWrites,e);return m0(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function qL(t,e,n,r,i){N(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Ve(e,n);if(Jp(t.visibleWrites,s))return null;{const o=Br(t.visibleWrites,s);return Zp(o)?i.getChild(n):lo(o,i.getChild(n))}}function KL(t,e,n,r){const i=Ve(e,n),s=ss(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Br(t.visibleWrites,i);return lo(o,r.getNode().getImmediateChild(n))}else return null}function GL(t,e){return ss(t.visibleWrites,e)}function QL(t,e,n,r,i,s,o){let a;const l=Br(t.visibleWrites,e),u=ss(l,oe());if(u!=null)a=u;else if(n!=null)a=lo(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],h=o.getCompare(),d=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let f=d.getNext();for(;f&&c.length<i;)h(f,r)!==0&&c.push(f),f=d.getNext();return c}else return[]}function YL(){return{visibleWrites:In.empty(),allWrites:[],lastWriteId:-1}}function Yc(t,e,n,r){return X1(t.writeTree,t.treePath,e,n,r)}function ov(t,e){return HL(t.writeTree,t.treePath,e)}function g0(t,e,n,r){return qL(t.writeTree,t.treePath,e,n,r)}function Xc(t,e){return GL(t.writeTree,Ve(t.treePath,e))}function XL(t,e,n,r,i,s){return QL(t.writeTree,t.treePath,e,n,r,i,s)}function av(t,e,n){return KL(t.writeTree,t.treePath,e,n)}function J1(t,e){return Z1(Ve(t.treePath,e),t.writeTree)}function Z1(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JL{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;N(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),N(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,sl(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,il(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,ao(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,sl(r,e.snapshotNode,i.oldSnap));else throw No("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZL{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const eI=new ZL;class lv{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new qi(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return av(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ki(this.viewCache_),s=XL(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e$(t){return{filter:t}}function t$(t,e){N(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),N(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function n$(t,e,n,r,i){const s=new JL;let o,a;if(n.type===En.OVERWRITE){const u=n;u.source.fromUser?o=em(t,e,u.path,u.snap,r,i,s):(N(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!J(u.path),o=Jc(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===En.MERGE){const u=n;u.source.fromUser?o=i$(t,e,u.path,u.children,r,i,s):(N(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=tm(t,e,u.path,u.children,r,i,a,s))}else if(n.type===En.ACK_USER_WRITE){const u=n;u.revert?o=a$(t,e,u.path,r,i,s):o=s$(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===En.LISTEN_COMPLETE)o=o$(t,e,n.path,r,s);else throw No("Unknown operation type: "+n.type);const l=s.getChanges();return r$(e,o,l),{viewCache:o,changes:l}}function r$(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Xp(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(H1(Xp(e)))}}function tI(t,e,n,r,i,s){const o=e.eventCache;if(Xc(r,n)!=null)return e;{let a,l;if(J(n))if(N(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Ki(e),c=u instanceof j?u:j.EMPTY_NODE,h=ov(r,c);a=t.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const u=Yc(r,Ki(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=X(n);if(u===".priority"){N(Hr(n)===1,"Can't have a priority with additional path components");const c=o.getNode();l=e.serverCache.getNode();const h=g0(r,n,c,l);h!=null?a=t.filter.updatePriority(c,h):a=o.getNode()}else{const c=fe(n);let h;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const d=g0(r,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(u).updateChild(c,d):h=o.getNode().getImmediateChild(u)}else h=av(r,u,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),u,h,c,i,s):a=o.getNode()}}return Ta(e,a,o.isFullyInitialized()||J(n),t.filter.filtersNodes())}}function Jc(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(J(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),f,null)}else{const f=X(n);if(!l.isCompleteForPath(n)&&Hr(n)>1)return e;const p=fe(n),w=l.getNode().getImmediateChild(f).updateChild(p,r);f===".priority"?u=c.updatePriority(l.getNode(),w):u=c.updateChild(l.getNode(),f,w,p,eI,null)}const h=G1(e,u,l.isFullyInitialized()||J(n),c.filtersNodes()),d=new lv(i,h,s);return tI(t,h,n,i,d,a)}function em(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const c=new lv(i,e,s);if(J(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Ta(e,u,!0,t.filter.filtersNodes());else{const h=X(n);if(h===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=Ta(e,u,a.isFullyInitialized(),a.isFiltered());else{const d=fe(n),f=a.getNode().getImmediateChild(h);let p;if(J(d))p=r;else{const y=c.getCompleteChild(h);y!=null?L1(d)===".priority"&&y.getChild(F1(d)).isEmpty()?p=y:p=y.updateChild(d,r):p=j.EMPTY_NODE}if(f.equals(p))l=e;else{const y=t.filter.updateChild(a.getNode(),h,p,d,c,o);l=Ta(e,y,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function v0(t,e){return t.eventCache.isCompleteForChild(e)}function i$(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const c=Ve(n,l);v0(e,X(c))&&(a=em(t,a,c,u,i,s,o))}),r.foreach((l,u)=>{const c=Ve(n,l);v0(e,X(c))||(a=em(t,a,c,u,i,s,o))}),a}function y0(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function tm(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;J(n)?u=r:u=new ye(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((h,d)=>{if(c.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),p=y0(t,f,d);l=Jc(t,l,new de(h),p,i,s,o,a)}}),u.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!c.hasChild(h)&&!f){const p=e.serverCache.getNode().getImmediateChild(h),y=y0(t,p,d);l=Jc(t,l,new de(h),y,i,s,o,a)}}),l}function s$(t,e,n,r,i,s,o){if(Xc(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(J(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Jc(t,e,n,l.getNode().getChild(n),i,s,a,o);if(J(n)){let u=new ye(null);return l.getNode().forEachChild(Hs,(c,h)=>{u=u.set(new de(c),h)}),tm(t,e,n,u,i,s,a,o)}else return e}else{let u=new ye(null);return r.foreach((c,h)=>{const d=Ve(n,c);l.isCompleteForPath(d)&&(u=u.set(c,l.getNode().getChild(d)))}),tm(t,e,n,u,i,s,a,o)}}function o$(t,e,n,r,i){const s=e.serverCache,o=G1(e,s.getNode(),s.isFullyInitialized()||J(n),s.isFiltered());return tI(t,o,n,r,eI,i)}function a$(t,e,n,r,i,s){let o;if(Xc(r,n)!=null)return e;{const a=new lv(r,e,i),l=e.eventCache.getNode();let u;if(J(n)||X(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=Yc(r,Ki(e));else{const h=e.serverCache.getNode();N(h instanceof j,"serverChildren would be complete if leaf node"),c=ov(r,h)}c=c,u=t.filter.updateFullNode(l,c,s)}else{const c=X(n);let h=av(r,c,e.serverCache);h==null&&e.serverCache.isCompleteForChild(c)&&(h=l.getImmediateChild(c)),h!=null?u=t.filter.updateChild(l,c,h,fe(n),a,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(l,c,j.EMPTY_NODE,fe(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Yc(r,Ki(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Xc(r,oe())!=null,Ta(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l${constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new tv(r.getIndex()),s=xL(r);this.processor_=e$(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(j.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(j.EMPTY_NODE,a.getNode(),null),c=new qi(l,o.isFullyInitialized(),i.filtersNodes()),h=new qi(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=qh(h,c),this.eventGenerator_=new DL(this.query_)}get query(){return this.query_}}function u$(t){return t.viewCache_.serverCache.getNode()}function c$(t,e){const n=Ki(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!J(e)&&!n.getImmediateChild(X(e)).isEmpty())?n.getChild(e):null}function _0(t){return t.eventRegistrations_.length===0}function h$(t,e){t.eventRegistrations_.push(e)}function w0(t,e,n){const r=[];if(n){N(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function E0(t,e,n,r){e.type===En.MERGE&&e.source.queryId!==null&&(N(Ki(t.viewCache_),"We should always have a full cache before handling merges"),N(Xp(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=n$(t.processor_,i,e,n,r);return t$(t.processor_,s.viewCache),N(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,nI(t,s.changes,s.viewCache.eventCache.getNode(),null)}function d$(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Ne,(s,o)=>{r.push(ao(s,o))}),n.isFullyInitialized()&&r.push(H1(n.getNode())),nI(t,r,n.getNode(),e)}function nI(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return ML(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zc;class f${constructor(){this.views=new Map}}function p$(t){N(!Zc,"__referenceConstructor has already been defined"),Zc=t}function m$(){return N(Zc,"Reference.ts has not been loaded"),Zc}function g$(t){return t.views.size===0}function uv(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return N(s!=null,"SyncTree gave us an op for an invalid query."),E0(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(E0(o,e,n,r));return s}}function v$(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Yc(n,i?r:null),l=!1;a?l=!0:r instanceof j?(a=ov(n,r),l=!1):(a=j.EMPTY_NODE,l=!1);const u=qh(new qi(a,l,!1),new qi(r,i,!1));return new l$(e,u)}return o}function y$(t,e,n,r,i,s){const o=v$(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),h$(o,n),d$(o,n)}function _$(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=qr(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(w0(u,n,r)),_0(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(w0(l,n,r)),_0(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!qr(t)&&s.push(new(m$())(e._repo,e._path)),{removed:s,events:o}}function rI(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function qs(t,e){let n=null;for(const r of t.views.values())n=n||c$(r,e);return n}function iI(t,e){if(e._queryParams.loadsAllData())return Kh(t);{const r=e._queryIdentifier;return t.views.get(r)}}function sI(t,e){return iI(t,e)!=null}function qr(t){return Kh(t)!=null}function Kh(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eh;function w$(t){N(!eh,"__referenceConstructor has already been defined"),eh=t}function E$(){return N(eh,"Reference.ts has not been loaded"),eh}let C$=1;class C0{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ye(null),this.pendingWriteTree_=YL(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function T$(t,e,n,r,i){return UL(t.pendingWriteTree_,e,n,r,i),i?jl(t,new Hi(K1(),e,n)):[]}function Ps(t,e,n=!1){const r=VL(t.pendingWriteTree_,e);if(BL(t.pendingWriteTree_,e)){let s=new ye(null);return r.snap!=null?s=s.set(oe(),!0):Vt(r.children,o=>{s=s.set(new de(o),!0)}),jl(t,new Qc(r.path,s,n))}else return[]}function Gh(t,e,n){return jl(t,new Hi(rv(),e,n))}function S$(t,e,n){const r=ye.fromObject(n);return jl(t,new ll(rv(),e,r))}function I$(t,e){return jl(t,new al(rv(),e))}function k$(t,e,n){const r=cv(t,n);if(r){const i=hv(r),s=i.path,o=i.queryId,a=Ot(s,e),l=new al(iv(o),a);return dv(t,s,l)}else return[]}function nm(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||sI(o,e))){const l=_$(o,e,n,r);g$(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const c=u.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(s,(d,f)=>qr(f));if(c&&!h){const d=t.syncPointTree_.subtree(s);if(!d.isEmpty()){const f=N$(d);for(let p=0;p<f.length;++p){const y=f[p],w=y.query,g=uI(t,y);t.listenProvider_.startListening(Ia(w),th(t,w),g.hashFn,g.onComplete)}}}!h&&u.length>0&&!r&&(c?t.listenProvider_.stopListening(Ia(e),null):u.forEach(d=>{const f=t.queryToTagMap.get(Qh(d));t.listenProvider_.stopListening(Ia(d),f)}))}R$(t,u)}return a}function x$(t,e,n,r){const i=cv(t,r);if(i!=null){const s=hv(i),o=s.path,a=s.queryId,l=Ot(o,e),u=new Hi(iv(a),l,n);return dv(t,o,u)}else return[]}function b$(t,e,n,r){const i=cv(t,r);if(i){const s=hv(i),o=s.path,a=s.queryId,l=Ot(o,e),u=ye.fromObject(n),c=new ll(iv(a),l,u);return dv(t,o,c)}else return[]}function T0(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,f)=>{const p=Ot(d,i);s=s||qs(f,p),o=o||qr(f)});let a=t.syncPointTree_.get(i);a?(o=o||qr(a),s=s||qs(a,oe())):(a=new f$,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=j.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((f,p)=>{const y=qs(p,oe());y&&(s=s.updateImmediateChild(f,y))}));const u=sI(a,e);if(!u&&!e._queryParams.loadsAllData()){const d=Qh(e);N(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const f=A$();t.queryToTagMap.set(d,f),t.tagToQueryMap.set(f,d)}const c=sv(t.pendingWriteTree_,i);let h=y$(a,e,n,c,s,l);if(!u&&!o&&!r){const d=iI(a,e);h=h.concat(O$(t,e,d))}return h}function oI(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Ot(o,e),u=qs(a,l);if(u)return u});return X1(i,e,s,n,!0)}function jl(t,e){return aI(e,t.syncPointTree_,null,sv(t.pendingWriteTree_,oe()))}function aI(t,e,n,r){if(J(t.path))return lI(t,e,n,r);{const i=e.get(oe());n==null&&i!=null&&(n=qs(i,oe()));let s=[];const o=X(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,c=J1(r,o);s=s.concat(aI(a,l,u,c))}return i&&(s=s.concat(uv(i,t,r,n))),s}}function lI(t,e,n,r){const i=e.get(oe());n==null&&i!=null&&(n=qs(i,oe()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=J1(r,o),c=t.operationForChild(o);c&&(s=s.concat(lI(c,a,l,u)))}),i&&(s=s.concat(uv(i,t,r,n))),s}function uI(t,e){const n=e.query,r=th(t,n);return{hashFn:()=>(u$(e)||j.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?k$(t,n._path,r):I$(t,n._path);{const s=IM(i,n);return nm(t,n,null,s)}}}}function th(t,e){const n=Qh(e);return t.queryToTagMap.get(n)}function Qh(t){return t._path.toString()+"$"+t._queryIdentifier}function cv(t,e){return t.tagToQueryMap.get(e)}function hv(t){const e=t.indexOf("$");return N(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new de(t.substr(0,e))}}function dv(t,e,n){const r=t.syncPointTree_.get(e);N(r,"Missing sync point for query tag that we're tracking");const i=sv(t.pendingWriteTree_,e);return uv(r,n,i,null)}function N$(t){return t.fold((e,n,r)=>{if(n&&qr(n))return[Kh(n)];{let i=[];return n&&(i=rI(n)),Vt(r,(s,o)=>{i=i.concat(o)}),i}})}function Ia(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(E$())(t._repo,t._path):t}function R$(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Qh(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function A$(){return C$++}function O$(t,e,n){const r=e._path,i=th(t,e),s=uI(t,n),o=t.listenProvider_.startListening(Ia(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)N(!qr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,c,h)=>{if(!J(u)&&c&&qr(c))return[Kh(c).query];{let d=[];return c&&(d=d.concat(rI(c).map(f=>f.query))),Vt(h,(f,p)=>{d=d.concat(p)}),d}});for(let u=0;u<l.length;++u){const c=l[u];t.listenProvider_.stopListening(Ia(c),th(t,c))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new fv(n)}node(){return this.node_}}class pv{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ve(this.path_,e);return new pv(this.syncTree_,n)}node(){return oI(this.syncTree_,this.path_)}}const P$=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},S0=function(t,e,n){if(!t||typeof t!="object")return t;if(N(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return D$(t[".sv"],e,n);if(typeof t[".sv"]=="object")return M$(t[".sv"],e);N(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},D$=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:N(!1,"Unexpected server value: "+t)}},M$=function(t,e,n){t.hasOwnProperty("increment")||N(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&N(!1,"Unexpected increment value: "+r);const i=e.node();if(N(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},L$=function(t,e,n,r){return mv(e,new pv(n,t),r)},$$=function(t,e,n){return mv(t,new fv(e),n)};function mv(t,e,n){const r=t.getPriority().val(),i=S0(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=S0(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new qe(a,gt(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new qe(i))),o.forEachChild(Ne,(a,l)=>{const u=mv(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function vv(t,e){let n=e instanceof de?e:new de(e),r=t,i=X(n);for(;i!==null;){const s=io(r.node.children,i)||{children:{},childCount:0};r=new gv(i,r,s),n=fe(n),i=X(n)}return r}function Po(t){return t.node.value}function cI(t,e){t.node.value=e,rm(t)}function hI(t){return t.node.childCount>0}function F$(t){return Po(t)===void 0&&!hI(t)}function Yh(t,e){Vt(t.node.children,(n,r)=>{e(new gv(n,t,r))})}function dI(t,e,n,r){n&&!r&&e(t),Yh(t,i=>{dI(i,e,!0,r)}),n&&r&&e(t)}function U$(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function zl(t){return new de(t.parent===null?t.name:zl(t.parent)+"/"+t.name)}function rm(t){t.parent!==null&&V$(t.parent,t.name,t)}function V$(t,e,n){const r=F$(n),i=mr(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,rm(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,rm(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B$=/[\[\].#$\/\u0000-\u001F\u007F]/,j$=/[\[\].#$\u0000-\u001F\u007F]/,yf=10*1024*1024,fI=function(t){return typeof t=="string"&&t.length!==0&&!B$.test(t)},pI=function(t){return typeof t=="string"&&t.length!==0&&!j$.test(t)},z$=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),pI(t)},mI=function(t,e,n){const r=n instanceof de?new sL(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+pi(r));if(typeof e=="function")throw new Error(t+"contains a function "+pi(r)+" with contents = "+e.toString());if(g1(e))throw new Error(t+"contains "+e.toString()+" "+pi(r));if(typeof e=="string"&&e.length>yf/3&&Vh(e)>yf)throw new Error(t+"contains a string greater than "+yf+" utf8 bytes "+pi(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Vt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!fI(o)))throw new Error(t+" contains an invalid key ("+o+") "+pi(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);oL(r,o),mI(t,a,r),aL(r)}),i&&s)throw new Error(t+' contains ".value" child '+pi(r)+" in addition to actual children.")}},gI=function(t,e,n,r){if(!(r&&n===void 0)&&!pI(n))throw new Error(AS(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},W$=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),gI(t,e,n,r)},H$=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!fI(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!z$(n))throw new Error(AS(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q${constructor(){this.eventLists_=[],this.recursionDepth_=0}}function vI(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Jg(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function yI(t,e,n){vI(t,n),_I(t,r=>Jg(r,e))}function os(t,e,n){vI(t,n),_I(t,r=>wn(r,e)||wn(e,r))}function _I(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(K$(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function K$(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Ri&&mt("event: "+n.toString()),Vl(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G$="repo_interrupt",Q$=25;class Y${constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new q$,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Gc(),this.transactionQueueTree_=new gv,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function X$(t,e,n){if(t.stats_=Yg(t.repoInfo_),t.forceRestClient_||NM())t.server_=new Kc(t.repoInfo_,(r,i,s,o)=>{I0(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>k0(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ye(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new tr(t.repoInfo_,e,(r,i,s,o)=>{I0(t,r,i,s,o)},r=>{k0(t,r)},r=>{Z$(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=MM(t.repoInfo_,()=>new PL(t.stats_,t.server_)),t.infoData_=new bL,t.infoSyncTree_=new C0({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Gh(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),yv(t,"connected",!1),t.serverSyncTree_=new C0({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);os(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function J$(t){const n=t.infoData_.getNode(new de(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function wI(t){return P$({timestamp:J$(t)})}function I0(t,e,n,r,i){t.dataUpdateCount++;const s=new de(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=Fc(n,u=>gt(u));o=b$(t.serverSyncTree_,s,l,i)}else{const l=gt(n);o=x$(t.serverSyncTree_,s,l,i)}else if(r){const l=Fc(n,u=>gt(u));o=S$(t.serverSyncTree_,s,l)}else{const l=gt(n);o=Gh(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=wv(t,s)),os(t.eventQueue_,a,o)}function k0(t,e){yv(t,"connected",e),e===!1&&tF(t)}function Z$(t,e){Vt(e,(n,r)=>{yv(t,n,r)})}function yv(t,e,n){const r=new de("/.info/"+e),i=gt(n);t.infoData_.updateSnapshot(r,i);const s=Gh(t.infoSyncTree_,r,i);os(t.eventQueue_,r,s)}function eF(t){return t.nextWriteId_++}function tF(t){EI(t,"onDisconnectEvents");const e=wI(t),n=Gc();Yp(t.onDisconnect_,oe(),(i,s)=>{const o=L$(i,s,t.serverSyncTree_,e);q1(n,i,o)});let r=[];Yp(n,oe(),(i,s)=>{r=r.concat(Gh(t.serverSyncTree_,i,s));const o=oF(t,i);wv(t,o)}),t.onDisconnect_=Gc(),os(t.eventQueue_,oe(),r)}function nF(t,e,n){let r;X(e._path)===".info"?r=T0(t.infoSyncTree_,e,n):r=T0(t.serverSyncTree_,e,n),yI(t.eventQueue_,e._path,r)}function x0(t,e,n){let r;X(e._path)===".info"?r=nm(t.infoSyncTree_,e,n):r=nm(t.serverSyncTree_,e,n),yI(t.eventQueue_,e._path,r)}function rF(t){t.persistentConnection_&&t.persistentConnection_.interrupt(G$)}function EI(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),mt(n,...e)}function CI(t,e,n){return oI(t.serverSyncTree_,e,n)||j.EMPTY_NODE}function _v(t,e=t.transactionQueueTree_){if(e||Xh(t,e),Po(e)){const n=SI(t,e);N(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&iF(t,zl(e),n)}else hI(e)&&Yh(e,n=>{_v(t,n)})}function iF(t,e,n){const r=n.map(u=>u.currentWriteId),i=CI(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];N(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const h=Ot(e,c.path);s=s.updateChild(h,c.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{EI(t,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,c=c.concat(Ps(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Xh(t,vv(t.transactionQueueTree_,e)),_v(t,t.transactionQueueTree_),os(t.eventQueue_,e,c);for(let d=0;d<h.length;d++)Vl(h[d])}else{if(u==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{qt("transaction at "+l.toString()+" failed: "+u);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=u}wv(t,e)}},o)}function wv(t,e){const n=TI(t,e),r=zl(n),i=SI(t,n);return sF(t,i,r),r}function sF(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=Ot(n,l.path);let c=!1,h;if(N(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,h=l.abortReason,i=i.concat(Ps(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Q$)c=!0,h="maxretry",i=i.concat(Ps(t.serverSyncTree_,l.currentWriteId,!0));else{const d=CI(t,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){mI("transaction failed: Data returned ",f,l.path);let p=gt(f);typeof f=="object"&&f!=null&&mr(f,".priority")||(p=p.updatePriority(d.getPriority()));const w=l.currentWriteId,g=wI(t),m=$$(p,d,g);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=m,l.currentWriteId=eF(t),o.splice(o.indexOf(w),1),i=i.concat(T$(t.serverSyncTree_,l.path,m,l.currentWriteId,l.applyLocally)),i=i.concat(Ps(t.serverSyncTree_,w,!0))}else c=!0,h="nodata",i=i.concat(Ps(t.serverSyncTree_,l.currentWriteId,!0))}os(t.eventQueue_,n,i),i=[],c&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(h),!1,null))))}Xh(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Vl(r[a]);_v(t,t.transactionQueueTree_)}function TI(t,e){let n,r=t.transactionQueueTree_;for(n=X(e);n!==null&&Po(r)===void 0;)r=vv(r,n),e=fe(e),n=X(e);return r}function SI(t,e){const n=[];return II(t,e,n),n.sort((r,i)=>r.order-i.order),n}function II(t,e,n){const r=Po(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Yh(e,i=>{II(t,i,n)})}function Xh(t,e){const n=Po(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,cI(e,n.length>0?n:void 0)}Yh(e,r=>{Xh(t,r)})}function oF(t,e){const n=zl(TI(t,e)),r=vv(t.transactionQueueTree_,e);return U$(r,i=>{_f(t,i)}),_f(t,r),dI(r,i=>{_f(t,i)}),n}function _f(t,e){const n=Po(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(N(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(N(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Ps(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?cI(e,void 0):n.length=s+1,os(t.eventQueue_,zl(e),i);for(let o=0;o<r.length;o++)Vl(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aF(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function lF(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):qt(`Invalid query segment '${n}' in query '${t}'`)}return e}const b0=function(t,e){const n=uF(t),r=n.namespace;n.domain==="firebase.com"&&zi(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&zi("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||wM();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new OM(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new de(n.pathString)}},uF=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(c,h)),c<h&&(i=aF(t.substring(c,h)));const d=lF(t.substring(Math.min(t.length,h)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const f=e.slice(0,u);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const p=e.indexOf(".");r=e.substring(0,p).toLowerCase(),n=e.substring(p+1),s=r}"ns"in d&&(s=d.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kI{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ye(this.snapshot.exportVal())}}class xI{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cF{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return N(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return J(this._path)?null:L1(this._path)}get ref(){return new gr(this._repo,this._path)}get _queryIdentifier(){const e=h0(this._queryParams),n=Gg(e);return n==="{}"?"default":n}get _queryObject(){return h0(this._queryParams)}isEqual(e){if(e=et(e),!(e instanceof Ev))return!1;const n=this._repo===e._repo,r=Jg(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+iL(this._path)}}class gr extends Ev{constructor(e,n){super(e,n,new nv,!1)}get parent(){const e=F1(this._path);return e===null?null:new gr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ul{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new de(e),r=im(this.ref,e);return new ul(this._node.getChild(n),r,Ne)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new ul(i,im(this.ref,r),Ne)))}hasChild(e){const n=new de(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function im(t,e){return t=et(t),X(t._path)===null?W$("child","path",e,!1):gI("child","path",e,!1),new gr(t._repo,Ve(t._path,e))}class Cv{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new kI("value",this,new ul(e.snapshotNode,new gr(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new xI(this,e,n):null}matches(e){return e instanceof Cv?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Tv{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new xI(this,e,n):null}createEvent(e,n){N(e.childName!=null,"Child events should have a childName.");const r=im(new gr(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new kI(e.type,this,new ul(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Tv?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Wl(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,u=(c,h)=>{x0(t._repo,t,a),l(c,h)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new cF(n,s||void 0),a=e==="value"?new Cv(o):new Tv(e,o);return nF(t._repo,t,a),()=>x0(t._repo,t,a)}function hF(t,e,n,r){return Wl(t,"value",e,n,r)}function dF(t,e,n,r){return Wl(t,"child_added",e,n,r)}function fF(t,e,n,r){return Wl(t,"child_changed",e,n,r)}function pF(t,e,n,r){return Wl(t,"child_moved",e,n,r)}function mF(t,e,n,r){return Wl(t,"child_removed",e,n,r)}p$(gr);w$(gr);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gF="FIREBASE_DATABASE_EMULATOR_HOST",sm={};let vF=!1;function yF(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||zi("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),mt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=b0(s,i),a=o.repoInfo,l,u;typeof process<"u"&&process.env&&(u=process.env[gF]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=b0(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const c=i&&l?new Kp(Kp.OWNER):new AM(t.name,t.options,e);H$("Invalid Firebase Database URL",o),J(o.path)||zi("Database URL must point to the root of a Firebase Database (not including a child path).");const h=wF(a,t,c,new RM(t.name,n));return new EF(h,t)}function _F(t,e){const n=sm[e];(!n||n[t.key]!==t)&&zi(`Database ${e}(${t.repoInfo_}) has already been deleted.`),rF(t),delete n[t.key]}function wF(t,e,n,r){let i=sm[e.name];i||(i={},sm[e.name]=i);let s=i[t.toURLString()];return s&&zi("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new Y$(t,vF,n,r),i[t.toURLString()]=s,s}class EF{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(X$(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new gr(this._repo,oe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(_F(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&zi("Cannot call "+e+" on a deleted database.")}}function CF(t=Fg(),e){return Ao(t,"database").getImmediate({identifier:e})}/**
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
 */function TF(t){mM(ni),ln(new Gt("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return yF(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Le(Gw,Qw,t),Le(Gw,Qw,"esm2017")}tr.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};tr.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};TF();var SF="firebase",IF="9.9.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Le(SF,IF,"app");var kF=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},D,Sv=Sv||{},z=kF||self;function nh(){}function om(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Hl(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function xF(t){return Object.prototype.hasOwnProperty.call(t,wf)&&t[wf]||(t[wf]=++bF)}var wf="closure_uid_"+(1e9*Math.random()>>>0),bF=0;function NF(t,e,n){return t.call.apply(t.bind,arguments)}function RF(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function ot(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ot=NF:ot=RF,ot.apply(null,arguments)}function Du(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function ct(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function ri(){this.s=this.s,this.o=this.o}var AF=0;ri.prototype.s=!1;ri.prototype.na=function(){!this.s&&(this.s=!0,this.M(),AF!=0)&&xF(this)};ri.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const bI=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},NI=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i=typeof t=="string"?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function OF(t){e:{var e=TU;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function N0(t){return Array.prototype.concat.apply([],arguments)}function Iv(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function rh(t){return/^[\s\xa0]*$/.test(t)}var R0=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Et(t,e){return t.indexOf(e)!=-1}function Ef(t,e){return t<e?-1:t>e?1:0}var Ct;e:{var A0=z.navigator;if(A0){var O0=A0.userAgent;if(O0){Ct=O0;break e}}Ct=""}function kv(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function RI(t){const e={};for(const n in t)e[n]=t[n];return e}var P0="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function AI(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<P0.length;s++)n=P0[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function xv(t){return xv[" "](t),t}xv[" "]=nh;function PF(t){var e=LF;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var DF=Et(Ct,"Opera"),uo=Et(Ct,"Trident")||Et(Ct,"MSIE"),OI=Et(Ct,"Edge"),am=OI||uo,PI=Et(Ct,"Gecko")&&!(Et(Ct.toLowerCase(),"webkit")&&!Et(Ct,"Edge"))&&!(Et(Ct,"Trident")||Et(Ct,"MSIE"))&&!Et(Ct,"Edge"),MF=Et(Ct.toLowerCase(),"webkit")&&!Et(Ct,"Edge");function DI(){var t=z.document;return t?t.documentMode:void 0}var ih;e:{var Cf="",Tf=function(){var t=Ct;if(PI)return/rv:([^\);]+)(\)|;)/.exec(t);if(OI)return/Edge\/([\d\.]+)/.exec(t);if(uo)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(MF)return/WebKit\/(\S+)/.exec(t);if(DF)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Tf&&(Cf=Tf?Tf[1]:""),uo){var Sf=DI();if(Sf!=null&&Sf>parseFloat(Cf)){ih=String(Sf);break e}}ih=Cf}var LF={};function $F(){return PF(function(){let t=0;const e=R0(String(ih)).split("."),n=R0("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Ef(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Ef(i[2].length==0,s[2].length==0)||Ef(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var lm;if(z.document&&uo){var D0=DI();lm=D0||parseInt(ih,10)||void 0}else lm=void 0;var FF=lm,UF=function(){if(!z.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{z.addEventListener("test",nh,e),z.removeEventListener("test",nh,e)}catch{}return t}();function yt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}yt.prototype.h=function(){this.defaultPrevented=!0};function cl(t,e){if(yt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(PI){e:{try{xv(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:VF[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&cl.Z.h.call(this)}}ct(cl,yt);var VF={2:"touch",3:"pen",4:"mouse"};cl.prototype.h=function(){cl.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ql="closure_listenable_"+(1e6*Math.random()|0),BF=0;function jF(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++BF,this.ca=this.fa=!1}function Jh(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Zh(t){this.src=t,this.g={},this.h=0}Zh.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=cm(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new jF(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};function um(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=bI(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Jh(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function cm(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}var bv="closure_lm_"+(1e6*Math.random()|0),If={};function MI(t,e,n,r,i){if(r&&r.once)return $I(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)MI(t,e[s],n,r,i);return null}return n=Av(n),t&&t[ql]?t.N(e,n,Hl(r)?!!r.capture:!!r,i):LI(t,e,n,!1,r,i)}function LI(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Hl(i)?!!i.capture:!!i,a=Rv(t);if(a||(t[bv]=a=new Zh(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=zF(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)UF||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(UI(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function zF(){function t(n){return e.call(t.src,t.listener,n)}var e=WF;return t}function $I(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)$I(t,e[s],n,r,i);return null}return n=Av(n),t&&t[ql]?t.O(e,n,Hl(r)?!!r.capture:!!r,i):LI(t,e,n,!0,r,i)}function FI(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)FI(t,e[s],n,r,i);else r=Hl(r)?!!r.capture:!!r,n=Av(n),t&&t[ql]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=cm(s,n,r,i),-1<n&&(Jh(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Rv(t))&&(e=t.g[e.toString()],t=-1,e&&(t=cm(e,n,r,i)),(n=-1<t?e[t]:null)&&Nv(n))}function Nv(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[ql])um(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(UI(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Rv(e))?(um(n,t),n.h==0&&(n.src=null,e[bv]=null)):Jh(t)}}}function UI(t){return t in If?If[t]:If[t]="on"+t}function WF(t,e){if(t.ca)t=!0;else{e=new cl(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&Nv(t),t=n.call(r,e)}return t}function Rv(t){return t=t[bv],t instanceof Zh?t:null}var kf="__closure_events_fn_"+(1e9*Math.random()>>>0);function Av(t){return typeof t=="function"?t:(t[kf]||(t[kf]=function(e){return t.handleEvent(e)}),t[kf])}function tt(){ri.call(this),this.i=new Zh(this),this.P=this,this.I=null}ct(tt,ri);tt.prototype[ql]=!0;tt.prototype.removeEventListener=function(t,e,n,r){FI(this,t,e,n,r)};function at(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new yt(e,t);else if(e instanceof yt)e.target=e.target||t;else{var i=e;e=new yt(r,t),AI(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Mu(o,r,!0,e)&&i}if(o=e.g=t,i=Mu(o,r,!0,e)&&i,i=Mu(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Mu(o,r,!1,e)&&i}tt.prototype.M=function(){if(tt.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Jh(n[r]);delete t.g[e],t.h--}}this.I=null};tt.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};tt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Mu(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,l=o.ia||o.src;o.fa&&um(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Ov=z.JSON.stringify;function HF(){var t=BI;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class qF{constructor(){this.h=this.g=null}add(e,n){const r=VI.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var VI=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new KF,t=>t.reset());class KF{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function GF(t){z.setTimeout(()=>{throw t},0)}function Pv(t,e){hm||QF(),dm||(hm(),dm=!0),BI.add(t,e)}var hm;function QF(){var t=z.Promise.resolve(void 0);hm=function(){t.then(YF)}}var dm=!1,BI=new qF;function YF(){for(var t;t=HF();){try{t.h.call(t.g)}catch(n){GF(n)}var e=VI;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}dm=!1}function ed(t,e){tt.call(this),this.h=t||1,this.g=e||z,this.j=ot(this.kb,this),this.l=Date.now()}ct(ed,tt);D=ed.prototype;D.da=!1;D.S=null;D.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),at(this,"tick"),this.da&&(Dv(this),this.start()))}};D.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Dv(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}D.M=function(){ed.Z.M.call(this),Dv(this),delete this.g};function Mv(t,e,n){if(typeof t=="function")n&&(t=ot(t,n));else if(t&&typeof t.handleEvent=="function")t=ot(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:z.setTimeout(t,e||0)}function jI(t){t.g=Mv(()=>{t.g=null,t.i&&(t.i=!1,jI(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class XF extends ri{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:jI(this)}M(){super.M(),this.g&&(z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function hl(t){ri.call(this),this.h=t,this.g={}}ct(hl,ri);var M0=[];function zI(t,e,n,r){Array.isArray(n)||(n&&(M0[0]=n.toString()),n=M0);for(var i=0;i<n.length;i++){var s=MI(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function WI(t){kv(t.g,function(e,n){this.g.hasOwnProperty(n)&&Nv(e)},t),t.g={}}hl.prototype.M=function(){hl.Z.M.call(this),WI(this)};hl.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function td(){this.g=!0}td.prototype.Aa=function(){this.g=!1};function JF(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function ZF(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Ds(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+tU(t,n)+(r?" "+r:"")})}function eU(t,e){t.info(function(){return"TIMEOUT: "+e})}td.prototype.info=function(){};function tU(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Ov(n)}catch{return e}}var as={},L0=null;function nd(){return L0=L0||new tt}as.Ma="serverreachability";function HI(t){yt.call(this,as.Ma,t)}ct(HI,yt);function dl(t){const e=nd();at(e,new HI(e))}as.STAT_EVENT="statevent";function qI(t,e){yt.call(this,as.STAT_EVENT,t),this.stat=e}ct(qI,yt);function Tt(t){const e=nd();at(e,new qI(e,t))}as.Na="timingevent";function KI(t,e){yt.call(this,as.Na,t),this.size=e}ct(KI,yt);function Kl(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return z.setTimeout(function(){t()},e)}var rd={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},GI={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Lv(){}Lv.prototype.h=null;function $0(t){return t.h||(t.h=t.i())}function QI(){}var Gl={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function $v(){yt.call(this,"d")}ct($v,yt);function Fv(){yt.call(this,"c")}ct(Fv,yt);var fm;function id(){}ct(id,Lv);id.prototype.g=function(){return new XMLHttpRequest};id.prototype.i=function(){return{}};fm=new id;function Ql(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new hl(this),this.P=nU,t=am?125:void 0,this.W=new ed(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new YI}function YI(){this.i=null,this.g="",this.h=!1}var nU=45e3,pm={},sh={};D=Ql.prototype;D.setTimeout=function(t){this.P=t};function mm(t,e,n){t.K=1,t.v=od(ur(e)),t.s=n,t.U=!0,XI(t,null)}function XI(t,e){t.F=Date.now(),Yl(t),t.A=ur(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),ik(n.h,"t",r),t.C=0,n=t.l.H,t.h=new YI,t.g=Sk(t.l,n?e:null,!t.s),0<t.O&&(t.L=new XF(ot(t.Ia,t,t.g),t.O)),zI(t.V,t.g,"readystatechange",t.gb),e=t.H?RI(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),dl(),JF(t.j,t.u,t.A,t.m,t.X,t.s)}D.gb=function(t){t=t.target;const e=this.L;e&&Zn(t)==3?e.l():this.Ia(t)};D.Ia=function(t){try{if(t==this.g)e:{const c=Zn(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>c)&&(c!=3||am||this.g&&(this.h.h||this.g.ga()||B0(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?dl(3):dl(2)),sd(this);var n=this.g.ba();this.N=n;t:if(JI(this)){var r=B0(this.g);t="";var i=r.length,s=Zn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ci(this),ka(this);var o="";break t}this.h.i=new z.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,ZF(this.j,this.u,this.A,this.m,this.X,c,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!rh(a)){var u=a;break t}}u=null}if(n=u)Ds(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,gm(this,n);else{this.i=!1,this.o=3,Tt(12),Ci(this),ka(this);break e}}this.U?(ZI(this,c,o),am&&this.i&&c==3&&(zI(this.V,this.W,"tick",this.fb),this.W.start())):(Ds(this.j,this.m,o,null),gm(this,o)),c==4&&Ci(this),this.i&&!this.I&&(c==4?wk(this.l,this):(this.i=!1,Yl(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Tt(12)):(this.o=0,Tt(13)),Ci(this),ka(this)}}}catch{}finally{}};function JI(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function ZI(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=rU(t,n),i==sh){e==4&&(t.o=4,Tt(14),r=!1),Ds(t.j,t.m,null,"[Incomplete Response]");break}else if(i==pm){t.o=4,Tt(15),Ds(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Ds(t.j,t.m,i,null),gm(t,i);JI(t)&&i!=sh&&i!=pm&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Tt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Kv(e),e.L=!0,Tt(11))):(Ds(t.j,t.m,n,"[Invalid Chunked Response]"),Ci(t),ka(t))}D.fb=function(){if(this.g){var t=Zn(this.g),e=this.g.ga();this.C<e.length&&(sd(this),ZI(this,t,e),this.i&&t!=4&&Yl(this))}};function rU(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?sh:(n=Number(e.substring(n,r)),isNaN(n)?pm:(r+=1,r+n>e.length?sh:(e=e.substr(r,n),t.C=r+n,e)))}D.cancel=function(){this.I=!0,Ci(this)};function Yl(t){t.Y=Date.now()+t.P,ek(t,t.P)}function ek(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Kl(ot(t.eb,t),e)}function sd(t){t.B&&(z.clearTimeout(t.B),t.B=null)}D.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(eU(this.j,this.A),this.K!=2&&(dl(),Tt(17)),Ci(this),this.o=2,ka(this)):ek(this,this.Y-t)};function ka(t){t.l.G==0||t.I||wk(t.l,t)}function Ci(t){sd(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Dv(t.W),WI(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function gm(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||vm(n.i,t))){if(n.I=t.N,!t.J&&vm(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)uh(n),ud(n);else break e;qv(n),Tt(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=Kl(ot(n.ab,n),6e3));if(1>=ak(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Ti(n,11)}else if((t.J||n.g==t)&&uh(n),!rh(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.U=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.J=u[1],n.la=u[2];const c=u[3];c!=null&&(n.ma=c,n.h.info("VER="+n.ma));const h=u[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const p=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var s=r.i;!s.g&&(Et(p,"spdy")||Et(p,"quic")||Et(p,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(Bv(s,s.h),s.h=null))}if(r.D){const y=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.sa=y,Ce(r.F,r.D,y))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=Tk(r,r.H?r.la:null,r.W),o.J){lk(r.i,o);var a=o,l=r.K;l&&a.setTimeout(l),a.B&&(sd(a),Yl(a)),r.g=o}else yk(r);0<n.l.length&&cd(n)}else u[0]!="stop"&&u[0]!="close"||Ti(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Ti(n,7):Hv(n):u[0]!="noop"&&n.j&&n.j.wa(u),n.A=0)}}dl(4)}catch{}}function iU(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(om(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function Uv(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(om(t)||typeof t=="string")NI(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(om(t)||typeof t=="string"){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=iU(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function Do(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Do)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}D=Do.prototype;D.R=function(){Vv(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};D.T=function(){return Vv(this),this.g.concat()};function Vv(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];Gi(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],Gi(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}D.get=function(t,e){return Gi(this.h,t)?this.h[t]:e};D.set=function(t,e){Gi(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};D.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};function Gi(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var tk=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function sU(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Qi(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Qi){this.g=e!==void 0?e:t.g,oh(this,t.j),this.s=t.s,ah(this,t.i),lh(this,t.m),this.l=t.l,e=t.h;var n=new fl;n.i=e.i,e.g&&(n.g=new Do(e.g),n.h=e.h),F0(this,n),this.o=t.o}else t&&(n=String(t).match(tk))?(this.g=!!e,oh(this,n[1]||"",!0),this.s=xa(n[2]||""),ah(this,n[3]||"",!0),lh(this,n[4]),this.l=xa(n[5]||"",!0),F0(this,n[6]||"",!0),this.o=xa(n[7]||"")):(this.g=!!e,this.h=new fl(null,this.g))}Qi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(la(e,U0,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(la(e,U0,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(la(n,n.charAt(0)=="/"?cU:uU,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",la(n,dU)),t.join("")};function ur(t){return new Qi(t)}function oh(t,e,n){t.j=n?xa(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ah(t,e,n){t.i=n?xa(e,!0):e}function lh(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function F0(t,e,n){e instanceof fl?(t.h=e,fU(t.h,t.g)):(n||(e=la(e,hU)),t.h=new fl(e,t.g))}function Ce(t,e,n){t.h.set(e,n)}function od(t){return Ce(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function oU(t){return t instanceof Qi?ur(t):new Qi(t,void 0)}function aU(t,e,n,r){var i=new Qi(null,void 0);return t&&oh(i,t),e&&ah(i,e),n&&lh(i,n),r&&(i.l=r),i}function xa(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function la(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,lU),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function lU(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var U0=/[#\/\?@]/g,uU=/[#\?:]/g,cU=/[#\?]/g,hU=/[#\?@]/g,dU=/#/g;function fl(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ii(t){t.g||(t.g=new Do,t.h=0,t.i&&sU(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}D=fl.prototype;D.add=function(t,e){ii(this),this.i=null,t=Mo(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function nk(t,e){ii(t),e=Mo(t,e),Gi(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Gi(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Vv(t)))}function rk(t,e){return ii(t),e=Mo(t,e),Gi(t.g.h,e)}D.forEach=function(t,e){ii(this),this.g.forEach(function(n,r){NI(n,function(i){t.call(e,i,r,this)},this)},this)};D.T=function(){ii(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n};D.R=function(t){ii(this);var e=[];if(typeof t=="string")rk(this,t)&&(e=N0(e,this.g.get(Mo(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=N0(e,t[n])}return e};D.set=function(t,e){return ii(this),this.i=null,t=Mo(this,t),rk(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};D.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function ik(t,e,n){nk(t,e),0<n.length&&(t.i=null,t.g.set(Mo(t,e),Iv(n)),t.h+=n.length)}D.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;r[s]!==""&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};function Mo(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function fU(t,e){e&&!t.j&&(ii(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(nk(this,r),ik(this,i,n))},t)),t.j=e}var pU=class{constructor(t,e){this.h=t,this.g=e}};function sk(t){this.l=t||mU,z.PerformanceNavigationTiming?(t=z.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(z.g&&z.g.Ea&&z.g.Ea()&&z.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var mU=10;function ok(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function ak(t){return t.h?1:t.g?t.g.size:0}function vm(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Bv(t,e){t.g?t.g.add(e):t.h=e}function lk(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}sk.prototype.cancel=function(){if(this.i=uk(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function uk(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Iv(t.i)}function jv(){}jv.prototype.stringify=function(t){return z.JSON.stringify(t,void 0)};jv.prototype.parse=function(t){return z.JSON.parse(t,void 0)};function gU(){this.g=new jv}function vU(t,e,n){const r=n||"";try{Uv(t,function(i,s){let o=i;Hl(i)&&(o=Ov(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function yU(t,e){const n=new td;if(z.Image){const r=new Image;r.onload=Du(Lu,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Du(Lu,n,r,"TestLoadImage: error",!1,e),r.onabort=Du(Lu,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Du(Lu,n,r,"TestLoadImage: timeout",!1,e),z.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Lu(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Xl(t){this.l=t.$b||null,this.j=t.ib||!1}ct(Xl,Lv);Xl.prototype.g=function(){return new ad(this.l,this.j)};Xl.prototype.i=function(t){return function(){return t}}({});function ad(t,e){tt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=zv,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ct(ad,tt);var zv=0;D=ad.prototype;D.open=function(t,e){if(this.readyState!=zv)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,pl(this)};D.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||z).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};D.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Jl(this)),this.readyState=zv};D.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,pl(this)),this.g&&(this.readyState=3,pl(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof z.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ck(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function ck(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}D.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Jl(this):pl(this),this.readyState==3&&ck(this)}};D.Ua=function(t){this.g&&(this.response=this.responseText=t,Jl(this))};D.Ta=function(t){this.g&&(this.response=t,Jl(this))};D.ha=function(){this.g&&Jl(this)};function Jl(t){t.readyState=4,t.l=null,t.j=null,t.A=null,pl(t)}D.setRequestHeader=function(t,e){this.v.append(t,e)};D.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};D.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function pl(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ad.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var _U=z.JSON.parse;function $e(t){tt.call(this),this.headers=new Do,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=hk,this.K=this.L=!1}ct($e,tt);var hk="",wU=/^https?$/i,EU=["POST","PUT"];D=$e.prototype;D.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():fm.g(),this.C=this.u?$0(this.u):$0(fm),this.g.onreadystatechange=ot(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){V0(this,s);return}t=n||"";const i=new Do(this.headers);r&&Uv(r,function(s,o){i.set(o,s)}),r=OF(i.T()),n=z.FormData&&t instanceof z.FormData,!(0<=bI(EU,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(s,o){this.g.setRequestHeader(o,s)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{pk(this),0<this.B&&((this.K=CU(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ot(this.pa,this)):this.A=Mv(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){V0(this,s)}};function CU(t){return uo&&$F()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function TU(t){return t.toLowerCase()=="content-type"}D.pa=function(){typeof Sv<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,at(this,"timeout"),this.abort(8))};function V0(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,dk(t),ld(t)}function dk(t){t.D||(t.D=!0,at(t,"complete"),at(t,"error"))}D.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,at(this,"complete"),at(this,"abort"),ld(this))};D.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ld(this,!0)),$e.Z.M.call(this)};D.Fa=function(){this.s||(this.F||this.v||this.l?fk(this):this.cb())};D.cb=function(){fk(this)};function fk(t){if(t.h&&typeof Sv<"u"&&(!t.C[1]||Zn(t)!=4||t.ba()!=2)){if(t.v&&Zn(t)==4)Mv(t.Fa,0,t);else if(at(t,"readystatechange"),Zn(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(tk)[1]||null;if(!i&&z.self&&z.self.location){var s=z.self.location.protocol;i=s.substr(0,s.length-1)}r=!wU.test(i?i.toLowerCase():"")}n=r}if(n)at(t,"complete"),at(t,"success");else{t.m=6;try{var o=2<Zn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",dk(t)}}finally{ld(t)}}}}function ld(t,e){if(t.g){pk(t);const n=t.g,r=t.C[0]?nh:null;t.g=null,t.C=null,e||at(t,"ready");try{n.onreadystatechange=r}catch{}}}function pk(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(z.clearTimeout(t.A),t.A=null)}function Zn(t){return t.g?t.g.readyState:0}D.ba=function(){try{return 2<Zn(this)?this.g.status:-1}catch{return-1}};D.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};D.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),_U(e)}};function B0(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case hk:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}D.Da=function(){return this.m};D.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function SU(t){let e="";return kv(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Wv(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=SU(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ce(t,e,n))}function ta(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function mk(t){this.za=0,this.l=[],this.h=new td,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=ta("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=ta("baseRetryDelayMs",5e3,t),this.$a=ta("retryDelaySeedMs",1e4,t),this.Ya=ta("forwardChannelMaxRetries",2,t),this.ra=ta("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new sk(t&&t.concurrentRequestLimit),this.Ca=new gU,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}D=mk.prototype;D.ma=8;D.G=1;function Hv(t){if(gk(t),t.G==3){var e=t.V++,n=ur(t.F);Ce(n,"SID",t.J),Ce(n,"RID",e),Ce(n,"TYPE","terminate"),Zl(t,n),e=new Ql(t,t.h,e,void 0),e.K=2,e.v=od(ur(n)),n=!1,z.navigator&&z.navigator.sendBeacon&&(n=z.navigator.sendBeacon(e.v.toString(),"")),!n&&z.Image&&(new Image().src=e.v,n=!0),n||(e.g=Sk(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Yl(e)}Ck(t)}D.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function ud(t){t.g&&(Kv(t),t.g.cancel(),t.g=null)}function gk(t){ud(t),t.u&&(z.clearTimeout(t.u),t.u=null),uh(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&z.clearTimeout(t.m),t.m=null)}function xf(t,e){t.l.push(new pU(t.Za++,e)),t.G==3&&cd(t)}function cd(t){ok(t.i)||t.m||(t.m=!0,Pv(t.Ha,t),t.C=0)}function IU(t,e){return ak(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=Kl(ot(t.Ha,t,e),Ek(t,t.C)),t.C++,!0)}D.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new Ql(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=RI(s),AI(s,this.P)):s=this.P),this.o===null&&(i.H=s),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=vk(this,i,e),n=ur(this.F),Ce(n,"RID",t),Ce(n,"CVER",22),this.D&&Ce(n,"X-HTTP-Session-Id",this.D),Zl(this,n),this.o&&s&&Wv(n,this.o,s),Bv(this.i,i),this.Ra&&Ce(n,"TYPE","init"),this.ja?(Ce(n,"$req",e),Ce(n,"SID","null"),i.$=!0,mm(i,n,null)):mm(i,n,e),this.G=2}}else this.G==3&&(t?j0(this,t):this.l.length==0||ok(this.i)||j0(this))};function j0(t,e){var n;e?n=e.m:n=t.V++;const r=ur(t.F);Ce(r,"SID",t.J),Ce(r,"RID",n),Ce(r,"AID",t.U),Zl(t,r),t.o&&t.s&&Wv(r,t.o,t.s),n=new Ql(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=vk(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Bv(t.i,n),mm(n,r,e)}function Zl(t,e){t.j&&Uv({},function(n,r){Ce(e,r,n)})}function vk(t,e,n){n=Math.min(t.l.length,n);var r=t.j?ot(t.j.Oa,t.j,t):null;e:{var i=t.l;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{vU(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function yk(t){t.g||t.u||(t.Y=1,Pv(t.Ga,t),t.A=0)}function qv(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=Kl(ot(t.Ga,t),Ek(t,t.A)),t.A++,!0)}D.Ga=function(){if(this.u=null,_k(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Kl(ot(this.bb,this),t)}};D.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Tt(10),ud(this),_k(this))};function Kv(t){t.B!=null&&(z.clearTimeout(t.B),t.B=null)}function _k(t){t.g=new Ql(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=ur(t.oa);Ce(e,"RID","rpc"),Ce(e,"SID",t.J),Ce(e,"CI",t.N?"0":"1"),Ce(e,"AID",t.U),Zl(t,e),Ce(e,"TYPE","xmlhttp"),t.o&&t.s&&Wv(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=od(ur(e)),n.s=null,n.U=!0,XI(n,t)}D.ab=function(){this.v!=null&&(this.v=null,ud(this),qv(this),Tt(19))};function uh(t){t.v!=null&&(z.clearTimeout(t.v),t.v=null)}function wk(t,e){var n=null;if(t.g==e){uh(t),Kv(t),t.g=null;var r=2}else if(vm(t.i,e))n=e.D,lk(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=nd(),at(r,new KI(r,n)),cd(t)}else yk(t);else if(i=e.o,i==3||i==0&&0<t.I||!(r==1&&IU(t,e)||r==2&&qv(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Ti(t,5);break;case 4:Ti(t,10);break;case 3:Ti(t,6);break;default:Ti(t,2)}}}function Ek(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Ti(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=ot(t.jb,t);n||(n=new Qi("//www.google.com/images/cleardot.gif"),z.location&&z.location.protocol=="http"||oh(n,"https"),od(n)),yU(n.toString(),r)}else Tt(2);t.G=0,t.j&&t.j.va(e),Ck(t),gk(t)}D.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Tt(2)):(this.h.info("Failed to ping google.com"),Tt(1))};function Ck(t){t.G=0,t.I=-1,t.j&&((uk(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Iv(t.l),t.l.length=0),t.j.ua())}function Tk(t,e,n){let r=oU(n);if(r.i!="")e&&ah(r,e+"."+r.i),lh(r,r.m);else{const i=z.location;r=aU(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&kv(t.aa,function(i,s){Ce(r,s,i)}),e=t.D,n=t.sa,e&&n&&Ce(r,e,n),Ce(r,"VER",t.ma),Zl(t,r),r}function Sk(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new $e(new Xl({ib:!0})):new $e(t.qa),e.L=t.H,e}function Ik(){}D=Ik.prototype;D.xa=function(){};D.wa=function(){};D.va=function(){};D.ua=function(){};D.Oa=function(){};function ch(){if(uo&&!(10<=Number(FF)))throw Error("Environmental error: no available transport.")}ch.prototype.g=function(t,e){return new Qt(t,e)};function Qt(t,e){tt.call(this),this.g=new mk(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!rh(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!rh(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Lo(this)}ct(Qt,tt);Qt.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Pv(ot(t.hb,t,e))),Tt(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Tk(t,null,t.W),cd(t)};Qt.prototype.close=function(){Hv(this.g)};Qt.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,xf(this.g,e)}else this.v?(e={},e.__data__=Ov(t),xf(this.g,e)):xf(this.g,t)};Qt.prototype.M=function(){this.g.j=null,delete this.j,Hv(this.g),delete this.g,Qt.Z.M.call(this)};function kk(t){$v.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ct(kk,$v);function xk(){Fv.call(this),this.status=1}ct(xk,Fv);function Lo(t){this.g=t}ct(Lo,Ik);Lo.prototype.xa=function(){at(this.g,"a")};Lo.prototype.wa=function(t){at(this.g,new kk(t))};Lo.prototype.va=function(t){at(this.g,new xk)};Lo.prototype.ua=function(){at(this.g,"b")};ch.prototype.createWebChannel=ch.prototype.g;Qt.prototype.send=Qt.prototype.u;Qt.prototype.open=Qt.prototype.m;Qt.prototype.close=Qt.prototype.close;rd.NO_ERROR=0;rd.TIMEOUT=8;rd.HTTP_ERROR=6;GI.COMPLETE="complete";QI.EventType=Gl;Gl.OPEN="a";Gl.CLOSE="b";Gl.ERROR="c";Gl.MESSAGE="d";tt.prototype.listen=tt.prototype.N;$e.prototype.listenOnce=$e.prototype.O;$e.prototype.getLastError=$e.prototype.La;$e.prototype.getLastErrorCode=$e.prototype.Da;$e.prototype.getStatus=$e.prototype.ba;$e.prototype.getResponseJson=$e.prototype.Qa;$e.prototype.getResponseText=$e.prototype.ga;$e.prototype.send=$e.prototype.ea;var kU=function(){return new ch},xU=function(){return nd()},bf=rd,bU=GI,NU=as,z0={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},RU=Xl,$u=QI,AU=$e;const W0="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}bt.UNAUTHENTICATED=new bt(null),bt.GOOGLE_CREDENTIALS=new bt("google-credentials-uid"),bt.FIRST_PARTY=new bt("first-party-uid"),bt.MOCK_USER=new bt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $o="9.9.4";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yi=new Dl("@firebase/firestore");function H0(){return Yi.logLevel}function $(t,...e){if(Yi.logLevel<=ie.DEBUG){const n=e.map(Gv);Yi.debug(`Firestore (${$o}): ${t}`,...n)}}function cr(t,...e){if(Yi.logLevel<=ie.ERROR){const n=e.map(Gv);Yi.error(`Firestore (${$o}): ${t}`,...n)}}function q0(t,...e){if(Yi.logLevel<=ie.WARN){const n=e.map(Gv);Yi.warn(`Firestore (${$o}): ${t}`,...n)}}function Gv(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function K(t="Unexpected state"){const e=`FIRESTORE (${$o}) INTERNAL ASSERTION FAILED: `+t;throw cr(e),new Error(e)}function me(t,e){t||K()}function G(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class V extends dn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OU{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class PU{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(bt.UNAUTHENTICATED))}shutdown(){}}class DU{constructor(e){this.t=e,this.currentUser=bt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Ai;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ai,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ai)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(me(typeof r.accessToken=="string"),new OU(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return me(e===null||typeof e=="string"),new bt(e)}}class MU{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=bt.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(me(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class LU{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new MU(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(bt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class $U{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class FU{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=s=>{s.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?i(s):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(me(typeof n.token=="string"),this.A=n.token,new $U(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UU(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bk{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=UU(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function le(t,e){return t<e?-1:t>e?1:0}function co(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new V(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new V(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new V(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return je.fromMillis(Date.now())}static fromDate(e){return je.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new je(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?le(this.nanoseconds,e.nanoseconds):le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Y(e)}static min(){return new Y(new je(0,0))}static max(){return new Y(new je(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(e,n,r){n===void 0?n=0:n>e.length&&K(),r===void 0?r=e.length-n:r>e.length-n&&K(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ml.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ml?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Te extends ml{construct(e,n,r){return new Te(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new V(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Te(n)}static emptyPath(){return new Te([])}}const VU=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class vt extends ml{construct(e,n,r){return new vt(e,n,r)}static isValidIdentifier(e){return VU.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),vt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new vt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new V(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new V(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new V(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new V(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new vt(n)}static emptyPath(){return new vt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.path=e}static fromPath(e){return new B(Te.fromString(e))}static fromName(e){return new B(Te.fromString(e).popFirst(5))}static empty(){return new B(Te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Te.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new B(new Te(e.slice()))}}function BU(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(r===1e9?new je(n+1,0):new je(n,r));return new Kr(i,B.empty(),e)}function jU(t){return new Kr(t.readTime,t.key,-1)}class Kr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Kr(Y.min(),B.empty(),-1)}static max(){return new Kr(Y.max(),B.empty(),-1)}}function zU(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=B.comparator(t.documentKey,e.documentKey),n!==0?n:le(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WU="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class HU{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eu(t){if(t.code!==k.FAILED_PRECONDITION||t.message!==WU)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new b((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof b?n:b.resolve(n)}catch(n){return b.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):b.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):b.reject(n)}static resolve(e){return new b((n,r)=>{n(e)})}static reject(e){return new b((n,r)=>{r(e)})}static waitFor(e){return new b((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=b.resolve(!1);for(const r of e)n=n.next(i=>i?b.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new b((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new b((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function tu(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Qv{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Fo(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Nk(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qv.at=-1;class He{constructor(e,n){this.comparator=e,this.root=n||rt.EMPTY}insert(e,n){return new He(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,rt.BLACK,null,null))}remove(e){return new He(this.comparator,this.root.remove(e,this.comparator).copy(null,null,rt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Fu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Fu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Fu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Fu(this.root,e,this.comparator,!0)}}class Fu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class rt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:rt.RED,this.left=i!=null?i:rt.EMPTY,this.right=s!=null?s:rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new rt(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return rt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}}rt.EMPTY=null,rt.RED=!0,rt.BLACK=!1;rt.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(t,e,n,r,i){return this}insert(t,e,n){return new rt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.comparator=e,this.data=new He(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new G0(this.data.getIterator())}getIteratorFrom(e){return new G0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ze)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ze(this.comparator);return n.data=e,n}}class G0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e){this.fields=e,e.sort(vt.comparator)}static empty(){return new Mn([])}unionWith(e){let n=new ze(vt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Mn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return co(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new ut(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new ut(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ut.EMPTY_BYTE_STRING=new ut("");const qU=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Gr(t){if(me(!!t),typeof t=="string"){let e=0;const n=qU.exec(t);if(me(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:De(t.seconds),nanos:De(t.nanos)}}function De(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ho(t){return typeof t=="string"?ut.fromBase64String(t):ut.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rk(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ak(t){const e=t.mapValue.fields.__previous_value__;return Rk(e)?Ak(e):e}function gl(t){const e=Gr(t.mapValue.fields.__local_write_time__.timestampValue);return new je(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KU{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class vl{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new vl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof vl&&e.projectId===this.projectId&&e.database===this.database}}function hd(t){return t==null}function hh(t){return t===0&&1/t==-1/0}function GU(t){return typeof t=="number"&&Number.isInteger(t)&&!hh(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Xi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Rk(t)?4:QU(t)?9007199254740991:10:K()}function Vn(t,e){if(t===e)return!0;const n=Xi(t);if(n!==Xi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return gl(t).isEqual(gl(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Gr(r.timestampValue),o=Gr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return ho(r.bytesValue).isEqual(ho(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return De(r.geoPointValue.latitude)===De(i.geoPointValue.latitude)&&De(r.geoPointValue.longitude)===De(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return De(r.integerValue)===De(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=De(r.doubleValue),o=De(i.doubleValue);return s===o?hh(s)===hh(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return co(t.arrayValue.values||[],e.arrayValue.values||[],Vn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(K0(s)!==K0(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Vn(s[a],o[a])))return!1;return!0}(t,e);default:return K()}}function yl(t,e){return(t.values||[]).find(n=>Vn(n,e))!==void 0}function fo(t,e){if(t===e)return 0;const n=Xi(t),r=Xi(e);if(n!==r)return le(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return le(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=De(i.integerValue||i.doubleValue),a=De(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Q0(t.timestampValue,e.timestampValue);case 4:return Q0(gl(t),gl(e));case 5:return le(t.stringValue,e.stringValue);case 6:return function(i,s){const o=ho(i),a=ho(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=le(o[l],a[l]);if(u!==0)return u}return le(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=le(De(i.latitude),De(s.latitude));return o!==0?o:le(De(i.longitude),De(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=fo(o[l],a[l]);if(u)return u}return le(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Uu.mapValue&&s===Uu.mapValue)return 0;if(i===Uu.mapValue)return 1;if(s===Uu.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=le(a[c],u[c]);if(h!==0)return h;const d=fo(o[a[c]],l[u[c]]);if(d!==0)return d}return le(a.length,u.length)}(t.mapValue,e.mapValue);default:throw K()}}function Q0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return le(t,e);const n=Gr(t),r=Gr(e),i=le(n.seconds,r.seconds);return i!==0?i:le(n.nanos,r.nanos)}function Ks(t){return ym(t)}function ym(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=Gr(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ho(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,B.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=ym(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${ym(r.fields[a])}`;return s+"}"}(t.mapValue):K();var e,n}function _m(t){return!!t&&"integerValue"in t}function Yv(t){return!!t&&"arrayValue"in t}function Y0(t){return!!t&&"nullValue"in t}function X0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function oc(t){return!!t&&"mapValue"in t}function ba(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Fo(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ba(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ba(t.arrayValue.values[n]);return e}return Object.assign({},t)}function QU(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e){this.value=e}static empty(){return new tn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!oc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ba(n)}setAll(e){let n=vt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=ba(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());oc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Vn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];oc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Fo(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new tn(ba(this.value))}}function Ok(t){const e=[];return Fo(t.fields,(n,r)=>{const i=new vt([n]);if(oc(r)){const s=Ok(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Mn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,n,r,i,s,o){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new it(e,0,Y.min(),Y.min(),tn.empty(),0)}static newFoundDocument(e,n,r){return new it(e,1,n,Y.min(),r,0)}static newNoDocument(e,n){return new it(e,2,n,Y.min(),tn.empty(),0)}static newUnknownDocument(e,n){return new it(e,3,n,Y.min(),tn.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=tn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=tn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof it&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new it(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class YU{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ht=null}}function J0(t,e=null,n=[],r=[],i=null,s=null,o=null){return new YU(t,e,n,r,i,s,o)}function Xv(t){const e=G(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(i=r).field.canonicalString()+i.op.toString()+Ks(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),hd(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ks(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ks(r)).join(",")),e.ht=n}return e.ht}function XU(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${Ks(r.value)}`;var r}).join(", ")}]`),hd(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Ks(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Ks(n)).join(",")),`Target(${e})`}function Jv(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!s2(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!Vn(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!eE(t.startAt,e.startAt)&&eE(t.endAt,e.endAt)}function wm(t){return B.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class Dt extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,r):new JU(e,n,r):n==="array-contains"?new t2(e,r):n==="in"?new n2(e,r):n==="not-in"?new r2(e,r):n==="array-contains-any"?new i2(e,r):new Dt(e,n,r)}static lt(e,n,r){return n==="in"?new ZU(e,r):new e2(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(fo(n,this.value)):n!==null&&Xi(this.value)===Xi(n)&&this.ft(fo(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class JU extends Dt{constructor(e,n,r){super(e,n,r),this.key=B.fromName(r.referenceValue)}matches(e){const n=B.comparator(e.key,this.key);return this.ft(n)}}class ZU extends Dt{constructor(e,n){super(e,"in",n),this.keys=Pk("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class e2 extends Dt{constructor(e,n){super(e,"not-in",n),this.keys=Pk("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Pk(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>B.fromName(r.referenceValue))}class t2 extends Dt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Yv(n)&&yl(n.arrayValue,this.value)}}class n2 extends Dt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&yl(this.value.arrayValue,n)}}class r2 extends Dt{constructor(e,n){super(e,"not-in",n)}matches(e){if(yl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!yl(this.value.arrayValue,n)}}class i2 extends Dt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Yv(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>yl(this.value.arrayValue,r))}}class dh{constructor(e,n){this.position=e,this.inclusive=n}}class Gs{constructor(e,n="asc"){this.field=e,this.dir=n}}function s2(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Z0(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=B.comparator(B.fromName(o.referenceValue),n.key):r=fo(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function eE(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Vn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this._t=null,this.wt=null,this.startAt,this.endAt}}function o2(t,e,n,r,i,s,o,a){return new nu(t,e,n,r,i,s,o,a)}function Zv(t){return new nu(t)}function tE(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Dk(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Mk(t){for(const e of t.filters)if(e.dt())return e.field;return null}function a2(t){return t.collectionGroup!==null}function _l(t){const e=G(t);if(e._t===null){e._t=[];const n=Mk(e),r=Dk(e);if(n!==null&&r===null)n.isKeyField()||e._t.push(new Gs(n)),e._t.push(new Gs(vt.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e._t.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new Gs(vt.keyField(),s))}}}return e._t}function hr(t){const e=G(t);if(!e.wt)if(e.limitType==="F")e.wt=J0(e.path,e.collectionGroup,_l(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of _l(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Gs(s.field,o))}const r=e.endAt?new dh(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new dh(e.startAt.position,e.startAt.inclusive):null;e.wt=J0(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.wt}function fh(t,e,n){return new nu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ru(t,e){return Jv(hr(t),hr(e))&&t.limitType===e.limitType}function Lk(t){return`${Xv(hr(t))}|lt:${t.limitType}`}function Em(t){return`Query(target=${XU(hr(t))}; limitType=${t.limitType})`}function ey(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):B.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=Z0(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,_l(n),r)||n.endAt&&!function(i,s,o){const a=Z0(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,_l(n),r))}(t,e)}function l2(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function $k(t){return(e,n)=>{let r=!1;for(const i of _l(t)){const s=u2(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function u2(t,e,n){const r=t.field.isKeyField()?B.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?fo(a,l):K()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return K()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fk(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:hh(e)?"-0":e}}function Uk(t){return{integerValue:""+t}}function c2(t,e){return GU(e)?Uk(e):Fk(t,e)}/**
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
 */class dd{constructor(){this._=void 0}}function h2(t,e,n){return t instanceof wl?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof El?Bk(t,e):t instanceof Cl?jk(t,e):function(r,i){const s=Vk(r,i),o=nE(s)+nE(r.yt);return _m(s)&&_m(r.yt)?Uk(o):Fk(r.It,o)}(t,e)}function d2(t,e,n){return t instanceof El?Bk(t,e):t instanceof Cl?jk(t,e):n}function Vk(t,e){return t instanceof ph?_m(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class wl extends dd{}class El extends dd{constructor(e){super(),this.elements=e}}function Bk(t,e){const n=zk(e);for(const r of t.elements)n.some(i=>Vn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Cl extends dd{constructor(e){super(),this.elements=e}}function jk(t,e){let n=zk(e);for(const r of t.elements)n=n.filter(i=>!Vn(i,r));return{arrayValue:{values:n}}}class ph extends dd{constructor(e,n){super(),this.It=e,this.yt=n}}function nE(t){return De(t.integerValue||t.doubleValue)}function zk(t){return Yv(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f2{constructor(e,n){this.field=e,this.transform=n}}function p2(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof El&&r instanceof El||n instanceof Cl&&r instanceof Cl?co(n.elements,r.elements,Vn):n instanceof ph&&r instanceof ph?Vn(n.yt,r.yt):n instanceof wl&&r instanceof wl}(t.transform,e.transform)}class m2{constructor(e,n){this.version=e,this.transformResults=n}}class Ln{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ln}static exists(e){return new Ln(void 0,e)}static updateTime(e){return new Ln(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ac(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class fd{}function Wk(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ty(t.key,Ln.none()):new iu(t.key,t.data,Ln.none());{const n=t.data,r=tn.empty();let i=new ze(vt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ls(t.key,r,new Mn(i.toArray()),Ln.none())}}function g2(t,e,n){t instanceof iu?function(r,i,s){const o=r.value.clone(),a=iE(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof ls?function(r,i,s){if(!ac(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=iE(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(Hk(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Na(t,e,n,r){return t instanceof iu?function(i,s,o,a){if(!ac(i.precondition,s))return o;const l=i.value.clone(),u=sE(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof ls?function(i,s,o,a){if(!ac(i.precondition,s))return o;const l=sE(i.fieldTransforms,a,s),u=s.data;return u.setAll(Hk(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return ac(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function v2(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Vk(r.transform,i||null);s!=null&&(n===null&&(n=tn.empty()),n.set(r.field,s))}return n||null}function rE(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&co(n,r,(i,s)=>p2(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class iu extends fd{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ls extends fd{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Hk(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function iE(t,e,n){const r=new Map;me(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,d2(o,a,n[i]))}return r}function sE(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,h2(s,o,e))}return r}class ty extends fd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class y2 extends fd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _2{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pe,ne;function w2(t){switch(t){default:return K();case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0}}function qk(t){if(t===void 0)return cr("GRPC error has no .code"),k.UNKNOWN;switch(t){case Pe.OK:return k.OK;case Pe.CANCELLED:return k.CANCELLED;case Pe.UNKNOWN:return k.UNKNOWN;case Pe.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case Pe.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case Pe.INTERNAL:return k.INTERNAL;case Pe.UNAVAILABLE:return k.UNAVAILABLE;case Pe.UNAUTHENTICATED:return k.UNAUTHENTICATED;case Pe.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case Pe.NOT_FOUND:return k.NOT_FOUND;case Pe.ALREADY_EXISTS:return k.ALREADY_EXISTS;case Pe.PERMISSION_DENIED:return k.PERMISSION_DENIED;case Pe.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case Pe.ABORTED:return k.ABORTED;case Pe.OUT_OF_RANGE:return k.OUT_OF_RANGE;case Pe.UNIMPLEMENTED:return k.UNIMPLEMENTED;case Pe.DATA_LOSS:return k.DATA_LOSS;default:return K()}}(ne=Pe||(Pe={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Fo(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Nk(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E2=new He(B.comparator);function dr(){return E2}const Kk=new He(B.comparator);function ua(...t){let e=Kk;for(const n of t)e=e.insert(n.key,n);return e}function Gk(t){let e=Kk;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Si(){return Ra()}function Qk(){return Ra()}function Ra(){return new Uo(t=>t.toString(),(t,e)=>t.isEqual(e))}const C2=new He(B.comparator),T2=new ze(B.comparator);function Z(...t){let e=T2;for(const n of t)e=e.add(n);return e}const S2=new ze(le);function Yk(){return S2}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,su.createSynthesizedTargetChangeForCurrentChange(e,n)),new pd(Y.min(),r,Yk(),dr(),Z())}}class su{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n){return new su(ut.EMPTY_BYTE_STRING,n,Z(),Z(),Z())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(e,n,r,i){this.Tt=e,this.removedTargetIds=n,this.key=r,this.Et=i}}class Xk{constructor(e,n){this.targetId=e,this.At=n}}class Jk{constructor(e,n,r=ut.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class oE{constructor(){this.Rt=0,this.bt=lE(),this.Pt=ut.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=Z(),n=Z(),r=Z();return this.bt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:K()}}),new su(this.Pt,this.vt,e,n,r)}Nt(){this.Vt=!1,this.bt=lE()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Mt(e){this.Vt=!0,this.bt=this.bt.remove(e)}Ot(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class I2{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=dr(),this.qt=aE(),this.Kt=new ze(le)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const r=this.zt(n);switch(e.state){case 0:this.Ht(n)&&r.Ct(e.resumeToken);break;case 1:r.Ft(),r.St||r.Nt(),r.Ct(e.resumeToken);break;case 2:r.Ft(),r.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(r.$t(),r.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),r.Ct(e.resumeToken));break;default:K()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((r,i)=>{this.Ht(i)&&n(i)})}Yt(e){const n=e.targetId,r=e.At.count,i=this.Xt(n);if(i){const s=i.target;if(wm(s))if(r===0){const o=new B(s.path);this.jt(n,o,it.newNoDocument(o,Y.min()))}else me(r===1);else this.Zt(n)!==r&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((s,o)=>{const a=this.Xt(o);if(a){if(s.current&&wm(a.target)){const l=new B(a.target.path);this.Ut.get(l)!==null||this.ee(o,l)||this.jt(o,l,it.newNoDocument(l,e))}s.Dt&&(n.set(o,s.xt()),s.Nt())}});let r=Z();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Xt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ut.forEach((s,o)=>o.setReadTime(e));const i=new pd(e,n,this.Kt,this.Ut,r);return this.Ut=dr(),this.qt=aE(),this.Kt=new ze(le),i}Qt(e,n){if(!this.Ht(e))return;const r=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,r),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,r){if(!this.Ht(e))return;const i=this.zt(e);this.ee(e,n)?i.kt(n,1):i.Mt(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),r&&(this.Ut=this.Ut.insert(n,r))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.zt(e).Ot()}zt(e){let n=this.Lt.get(e);return n||(n=new oE,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new ze(le),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||$("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new oE),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function aE(){return new He(B.comparator)}function lE(){return new He(B.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k2=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),x2=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class b2{constructor(e,n){this.databaseId=e,this.gt=n}}function mh(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Zk(t,e){return t.gt?e.toBase64():e.toUint8Array()}function N2(t,e){return mh(t,e.toTimestamp())}function nr(t){return me(!!t),Y.fromTimestamp(function(e){const n=Gr(e);return new je(n.seconds,n.nanos)}(t))}function ny(t,e){return function(n){return new Te(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function ex(t){const e=Te.fromString(t);return me(rx(e)),e}function Cm(t,e){return ny(t.databaseId,e.path)}function Nf(t,e){const n=ex(e);if(n.get(1)!==t.databaseId.projectId)throw new V(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new V(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new B(tx(n))}function Tm(t,e){return ny(t.databaseId,e)}function R2(t){const e=ex(t);return e.length===4?Te.emptyPath():tx(e)}function Sm(t){return new Te(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function tx(t){return me(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function uE(t,e,n){return{name:Cm(t,e),fields:n.value.mapValue.fields}}function A2(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.gt?(me(u===void 0||typeof u=="string"),ut.fromBase64String(u||"")):(me(u===void 0||u instanceof Uint8Array),ut.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?k.UNKNOWN:qk(l.code);return new V(u,l.message||"")}(o);n=new Jk(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Nf(t,r.document.name),s=nr(r.document.updateTime),o=new tn({mapValue:{fields:r.document.fields}}),a=it.newFoundDocument(i,s,o),l=r.targetIds||[],u=r.removedTargetIds||[];n=new lc(l,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Nf(t,r.document),s=r.readTime?nr(r.readTime):Y.min(),o=it.newNoDocument(i,s),a=r.removedTargetIds||[];n=new lc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Nf(t,r.document),s=r.removedTargetIds||[];n=new lc([],s,i,null)}else{if(!("filter"in e))return K();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new _2(i),o=r.targetId;n=new Xk(o,s)}}return n}function O2(t,e){let n;if(e instanceof iu)n={update:uE(t,e.key,e.value)};else if(e instanceof ty)n={delete:Cm(t,e.key)};else if(e instanceof ls)n={update:uE(t,e.key,e.data),updateMask:j2(e.fieldMask)};else{if(!(e instanceof y2))return K();n={verify:Cm(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof wl)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof El)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Cl)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ph)return{fieldPath:s.field.canonicalString(),increment:o.yt};throw K()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:N2(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:K()}(t,e.precondition)),n}function P2(t,e){return t&&t.length>0?(me(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?nr(r.updateTime):nr(i);return s.isEqual(Y.min())&&(s=nr(i)),new m2(s,r.transformResults||[])}(n,e))):[]}function D2(t,e){return{documents:[Tm(t,e.path)]}}function M2(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Tm(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Tm(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length===0)return;const u=l.map(c=>function(h){if(h.op==="=="){if(X0(h.value))return{unaryFilter:{field:ms(h.field),op:"IS_NAN"}};if(Y0(h.value))return{unaryFilter:{field:ms(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(X0(h.value))return{unaryFilter:{field:ms(h.field),op:"IS_NOT_NAN"}};if(Y0(h.value))return{unaryFilter:{field:ms(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ms(h.field),op:U2(h.op),value:h.value}}}(c));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:ms(c.field),direction:F2(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.gt||hd(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function L2(t){let e=R2(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){me(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=nx(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new Gs(Ms(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,hd(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new dh(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new dh(d,h)}(n.endAt)),o2(e,i,o,s,a,"F",l,u)}function $2(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return K()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function nx(t){return t?t.unaryFilter!==void 0?[B2(t)]:t.fieldFilter!==void 0?[V2(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>nx(e)).reduce((e,n)=>e.concat(n)):K():[]}function F2(t){return k2[t]}function U2(t){return x2[t]}function ms(t){return{fieldPath:t.canonicalString()}}function Ms(t){return vt.fromServerFormat(t.fieldPath)}function V2(t){return Dt.create(Ms(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(t.fieldFilter.op),t.fieldFilter.value)}function B2(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Ms(t.unaryFilter.field);return Dt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Ms(t.unaryFilter.field);return Dt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Ms(t.unaryFilter.field);return Dt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Ms(t.unaryFilter.field);return Dt.create(i,"!=",{nullValue:"NULL_VALUE"});default:return K()}}function j2(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function rx(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z2{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&g2(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Na(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Na(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Qk();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=Wk(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Z())}isEqual(e){return this.batchId===e.batchId&&co(this.mutations,e.mutations,(n,r)=>rE(n,r))&&co(this.baseMutations,e.baseMutations,(n,r)=>rE(n,r))}}class ry{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){me(e.mutations.length===r.length);let i=C2;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new ry(e,n,r,i)}}/**
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
 */class W2{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Oi{constructor(e,n,r,i,s=Y.min(),o=Y.min(),a=ut.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Oi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Oi(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Oi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H2{constructor(e){this.re=e}}function q2(t){const e=L2({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?fh(e,e.limit,"L"):e}/**
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
 */class K2{constructor(){this.Ye=new G2}addToCollectionParentIndex(e,n){return this.Ye.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return b.resolve()}deleteFieldIndex(e,n){return b.resolve()}getDocumentsMatchingTarget(e,n){return b.resolve(null)}getIndexType(e,n){return b.resolve(0)}getFieldIndexes(e,n){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,n){return b.resolve(Kr.min())}getMinOffsetFromCollectionGroup(e,n){return b.resolve(Kr.min())}updateCollectionGroup(e,n,r){return b.resolve()}updateIndexEntries(e,n){return b.resolve()}}class G2{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ze(Te.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ze(Te.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new po(0)}static vn(){return new po(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q2{constructor(){this.changes=new Uo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,it.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?b.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Y2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X2{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.getBaseDocument(e,n,r))).next(i=>(r!==null&&Na(r.mutation,i,Mn.empty(),je.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Z()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Z()){const i=Si();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ua();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Si();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Z()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=dr();const o=Ra(),a=Ra();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof ls)?s=s.insert(u.key,u):c!==void 0&&(o.set(u.key,c.mutation.getFieldMask()),Na(c.mutation,u,c.mutation.getFieldMask(),je.now()))}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new Y2(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ra();let i=new He((o,a)=>o-a),s=Z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Mn.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||Z()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=Qk();c.forEach(d=>{if(!s.has(d)){const f=Wk(n.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return b.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return B.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):a2(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):b.resolve(Si());let a=-1,l=s;return o.next(u=>b.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?b.resolve():this.getBaseDocument(e,c,h).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,Z())).next(c=>({batchId:a,changes:Gk(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new B(n)).next(r=>{let i=ua();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=ua();return this.indexManager.getCollectionParents(e,i).next(o=>b.forEach(o,a=>{const l=function(u,c){return new nu(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(s=>{s.forEach((a,l)=>{const u=l.getKey();i.get(u)===null&&(i=i.insert(u,it.newInvalidDocument(u)))});let o=ua();return i.forEach((a,l)=>{const u=s.get(a);u!==void 0&&Na(u.mutation,l,Mn.empty(),je.now()),ey(n,l)&&(o=o.insert(a,l))}),o})}getBaseDocument(e,n,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):b.resolve(it.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J2{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return b.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:nr(r.createTime)}),b.resolve()}getNamedQuery(e,n){return b.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(r){return{name:r.name,query:q2(r.bundledQuery),readTime:nr(r.readTime)}}(n)),b.resolve()}}/**
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
 */class Z2{constructor(){this.overlays=new He(B.comparator),this.es=new Map}getOverlay(e,n){return b.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Si();return b.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ue(e,n,s)}),b.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.es.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.es.delete(r)),b.resolve()}getOverlaysForCollection(e,n,r){const i=Si(),s=n.length+1,o=new B(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return b.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new He((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Si(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Si(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return b.resolve(a)}ue(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(r.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new W2(n,r));let s=this.es.get(n);s===void 0&&(s=Z(),this.es.set(n,s)),this.es.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(){this.ns=new ze(Ke.ss),this.rs=new ze(Ke.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const r=new Ke(e,n);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.cs(new Ke(e,n))}hs(e,n){e.forEach(r=>this.removeReference(r,n))}ls(e){const n=new B(new Te([])),r=new Ke(n,e),i=new Ke(n,e+1),s=[];return this.rs.forEachInRange([r,i],o=>{this.cs(o),s.push(o.key)}),s}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new B(new Te([])),r=new Ke(n,e),i=new Ke(n,e+1);let s=Z();return this.rs.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ke(e,0),r=this.ns.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ke{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return B.comparator(e.key,n.key)||le(e._s,n._s)}static os(e,n){return le(e._s,n._s)||B.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eV{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new ze(Ke.ss)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new z2(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new Ke(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,n){return b.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ps(r),s=i<0?0:i;return b.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ke(n,0),i=new Ke(n,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([r,i],o=>{const a=this.ys(o._s);s.push(a)}),b.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ze(le);return n.forEach(i=>{const s=new Ke(i,0),o=new Ke(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([s,o],a=>{r=r.add(a._s)})}),b.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;B.isDocumentKey(s)||(s=s.child(""));const o=new Ke(new B(s),0);let a=new ze(le);return this.gs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l._s)),!0)},o),b.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(r=>{const i=this.ys(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){me(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return b.forEach(n.mutations,i=>{const s=new Ke(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,n){const r=new Ke(n,0),i=this.gs.firstAfterOrEqual(r);return b.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tV{constructor(e){this.Es=e,this.docs=new He(B.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return b.resolve(r?r.document.mutableCopy():it.newInvalidDocument(n))}getEntries(e,n){let r=dr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():it.newInvalidDocument(i))}),b.resolve(r)}getAllFromCollection(e,n,r){let i=dr();const s=new B(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||zU(jU(l),r)<=0||(i=i.insert(l.key,l.mutableCopy()))}return b.resolve(i)}getAllFromCollectionGroup(e,n,r,i){K()}As(e,n){return b.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new nV(this)}getSize(e){return b.resolve(this.size)}}class nV extends Q2{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(r)}),b.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rV{constructor(e){this.persistence=e,this.Rs=new Uo(n=>Xv(n),Jv),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.bs=0,this.Ps=new iy,this.targetCount=0,this.vs=po.Pn()}forEachTarget(e,n){return this.Rs.forEach((r,i)=>n(i)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),b.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new po(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.Dn(n),b.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Rs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),b.waitFor(s).next(()=>i)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const r=this.Rs.get(n)||null;return b.resolve(r)}addMatchingKeys(e,n,r){return this.Ps.us(n,r),b.resolve()}removeMatchingKeys(e,n,r){this.Ps.hs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),b.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),b.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ps.ds(n);return b.resolve(r)}containsKey(e,n){return b.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iV{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new Qv(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new rV(this),this.indexManager=new K2,this.remoteDocumentCache=function(r){return new tV(r)}(r=>this.referenceDelegate.xs(r)),this.It=new H2(n),this.Ns=new J2(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Z2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Vs[e.toKey()];return r||(r=new eV(n,this.referenceDelegate),this.Vs[e.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,r){$("MemoryPersistence","Starting transaction:",e);const i=new sV(this.Ss.next());return this.referenceDelegate.ks(),r(i).next(s=>this.referenceDelegate.Ms(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Os(e,n){return b.or(Object.values(this.Vs).map(r=>()=>r.containsKey(e,n)))}}class sV extends HU{constructor(e){super(),this.currentSequenceNumber=e}}class sy{constructor(e){this.persistence=e,this.Fs=new iy,this.$s=null}static Bs(e){return new sy(e)}get Ls(){if(this.$s)return this.$s;throw K()}addReference(e,n,r){return this.Fs.addReference(r,n),this.Ls.delete(r.toString()),b.resolve()}removeReference(e,n,r){return this.Fs.removeReference(r,n),this.Ls.add(r.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),b.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ls.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}ks(){this.$s=new Set}Ms(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Ls,r=>{const i=B.fromPath(r);return this.Us(e,i).next(s=>{s||n.removeEntry(i,Y.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(r=>{r?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return b.or([()=>b.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Si=r,this.Di=i}static Ci(e,n){let r=Z(),i=Z();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new oy(e,n.fromCache,r,i)}}/**
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
 */class oV{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.ki(e,n).next(s=>s||this.Mi(e,n,i,r)).next(s=>s||this.Oi(e,n))}ki(e,n){if(tE(n))return b.resolve(null);let r=hr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=fh(n,null,"F"),r=hr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Z(...s);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Fi(n,a);return this.$i(n,u,o,l.readTime)?this.ki(e,fh(n,null,"F")):this.Bi(e,u,n,l)}))})))}Mi(e,n,r,i){return tE(n)||i.isEqual(Y.min())?this.Oi(e,n):this.Ni.getDocuments(e,r).next(s=>{const o=this.Fi(n,s);return this.$i(n,o,r,i)?this.Oi(e,n):(H0()<=ie.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Em(n)),this.Bi(e,o,n,BU(i,-1)))})}Fi(e,n){let r=new ze($k(e));return n.forEach((i,s)=>{ey(e,s)&&(r=r.add(s))}),r}$i(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Oi(e,n){return H0()<=ie.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",Em(n)),this.Ni.getDocumentsMatchingQuery(e,n,Kr.min())}Bi(e,n,r,i){return this.Ni.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aV{constructor(e,n,r,i){this.persistence=e,this.Li=n,this.It=i,this.Ui=new He(le),this.qi=new Uo(s=>Xv(s),Jv),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(r)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new X2(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function lV(t,e,n,r){return new aV(t,e,n,r)}async function ix(t,e){const n=G(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Qi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=Z();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function uV(t,e){const n=G(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let d=b.resolve();return h.forEach(f=>{d=d.next(()=>u.getEntry(a,f)).next(p=>{const y=l.docVersions.get(f);me(y!==null),p.version.compareTo(y)<0&&(c.applyToRemoteDocument(p,l),p.isValidDocument()&&(p.setReadTime(l.commitVersion),u.addEntry(p)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=Z();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function sx(t){const e=G(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function cV(t,e){const n=G(t),r=e.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(s,c.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?f=f.withResumeToken(ut.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):c.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(c.resumeToken,r)),i=i.insert(h,f),function(p,y,w){return p.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(d,f,c)&&a.push(n.Cs.updateTargetData(s,f))});let l=dr(),u=Z();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(hV(s,o,e.documentUpdates).next(c=>{l=c.Wi,u=c.zi})),!r.isEqual(Y.min())){const c=n.Cs.getLastRemoteSnapshotVersion(s).next(h=>n.Cs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return b.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ui=i,s))}function hV(t,e,n){let r=Z(),i=Z();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=dr();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(Y.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):$("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Wi:o,zi:i}})}function dV(t,e){const n=G(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function fV(t,e){const n=G(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Cs.getTargetData(r,e).next(s=>s?(i=s,b.resolve(i)):n.Cs.allocateTargetId(r).next(o=>(i=new Oi(e,o,0,r.currentSequenceNumber),n.Cs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ui.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(r.targetId,r),n.qi.set(e,r.targetId)),r})}async function Im(t,e,n){const r=G(t),i=r.Ui.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!tu(o))throw o;$("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ui=r.Ui.remove(e),r.qi.delete(i.target)}function cE(t,e,n){const r=G(t);let i=Y.min(),s=Z();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=G(a),h=c.qi.get(u);return h!==void 0?b.resolve(c.Ui.get(h)):c.Cs.getTargetData(l,u)}(r,o,hr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Li.getDocumentsMatchingQuery(o,e,n?i:Y.min(),n?s:Z())).next(a=>(pV(r,l2(e),a),{documents:a,Hi:s})))}function pV(t,e,n){let r=Y.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ki.set(e,r)}class hE{constructor(){this.activeTargetIds=Yk()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class mV{constructor(){this.Lr=new hE,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,r){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new hE,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class gV{qr(e){}shutdown(){}}/**
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
 */class dE{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){$("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vV={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yV{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _V extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}co(e,n,r,i,s){const o=this.ao(e,n);$("RestConnection","Sending: ",o,r);const a={};return this.ho(a,i,s),this.lo(e,o,a,r).then(l=>($("RestConnection","Received: ",l),l),l=>{throw q0("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}fo(e,n,r,i,s,o){return this.co(e,n,r,i,s)}ho(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+$o,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ao(e,n){const r=vV[e];return`${this.oo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,r,i){return new Promise((s,o)=>{const a=new AU;a.listenOnce(bU.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case bf.NO_ERROR:const u=a.getResponseJson();$("Connection","XHR received:",JSON.stringify(u)),s(u);break;case bf.TIMEOUT:$("Connection",'RPC "'+e+'" timed out'),o(new V(k.DEADLINE_EXCEEDED,"Request time out"));break;case bf.HTTP_ERROR:const c=a.getStatus();if($("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(f){const p=f.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(p)>=0?p:k.UNKNOWN}(h.status);o(new V(d,h.message))}else o(new V(k.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new V(k.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{$("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,r,15)})}_o(e,n,r){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=kU(),o=xU(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new RU({})),this.ho(a.initMessageHeaders,n,r),Uh()||Lg()||eO()||xS()||tO()||kS()||(a.httpHeadersOverwriteParam="$httpHeaders");const l=i.join("");$("Connection","Creating WebChannel: "+l,a);const u=s.createWebChannel(l,a);let c=!1,h=!1;const d=new yV({Hr:p=>{h?$("Connection","Not sending because WebChannel is closed:",p):(c||($("Connection","Opening WebChannel transport."),u.open(),c=!0),$("Connection","WebChannel sending:",p),u.send(p))},Jr:()=>u.close()}),f=(p,y,w)=>{p.listen(y,g=>{try{w(g)}catch(m){setTimeout(()=>{throw m},0)}})};return f(u,$u.EventType.OPEN,()=>{h||$("Connection","WebChannel transport opened.")}),f(u,$u.EventType.CLOSE,()=>{h||(h=!0,$("Connection","WebChannel transport closed"),d.io())}),f(u,$u.EventType.ERROR,p=>{h||(h=!0,q0("Connection","WebChannel transport errored:",p),d.io(new V(k.UNAVAILABLE,"The operation could not be completed")))}),f(u,$u.EventType.MESSAGE,p=>{var y;if(!h){const w=p.data[0];me(!!w);const g=w,m=g.error||((y=g[0])===null||y===void 0?void 0:y.error);if(m){$("Connection","WebChannel received error:",m);const v=m.status;let _=function(T){const S=Pe[T];if(S!==void 0)return qk(S)}(v),C=m.message;_===void 0&&(_=k.INTERNAL,C="Unknown error status: "+v+" with message "+m.message),h=!0,d.io(new V(_,C)),u.close()}else $("Connection","WebChannel received:",w),d.ro(w)}}),f(o,NU.STAT_EVENT,p=>{p.stat===z0.PROXY?$("Connection","Detected buffering proxy"):p.stat===z0.NOPROXY&&$("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function Rf(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function md(t){return new b2(t,!0)}class ox{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Hs=e,this.timerId=n,this.wo=r,this.mo=i,this.yo=s,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),r=Math.max(0,Date.now()-this.To),i=Math.max(0,n-r);i>0&&$("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Io=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this.wo&&(this.po=this.wo),this.po>this.yo&&(this.po=this.yo)}bo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ax{constructor(e,n,r,i,s,o,a,l){this.Hs=e,this.Po=r,this.vo=i,this.Vo=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new ox(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Mo()}async stop(){this.No()&&await this.close(0)}Oo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.Po,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===k.RESOURCE_EXHAUSTED?(cr(n.toString()),cr("Using maximum backoff delay to prevent overloading the backend."),this.xo.Eo()):n&&n.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.So===n&&this.Go(r,i)},r=>{e(()=>{const i=new V(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Qo(i)})})}Go(e,n){const r=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{r(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{r(()=>this.Qo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Mo(){this.state=5,this.xo.Ao(async()=>{this.state=0,this.start()})}Qo(e){return $("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():($("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class wV extends ax{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.It=s}jo(e,n){return this.Vo._o("Listen",e,n)}onMessage(e){this.xo.reset();const n=A2(this.It,e),r=function(i){if(!("targetChange"in i))return Y.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?Y.min():s.readTime?nr(s.readTime):Y.min()}(e);return this.listener.Wo(n,r)}zo(e){const n={};n.database=Sm(this.It),n.addTarget=function(i,s){let o;const a=s.target;return o=wm(a)?{documents:D2(i,a)}:{query:M2(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=Zk(i,s.resumeToken):s.snapshotVersion.compareTo(Y.min())>0&&(o.readTime=mh(i,s.snapshotVersion.toTimestamp())),o}(this.It,e);const r=$2(this.It,e);r&&(n.labels=r),this.Bo(n)}Ho(e){const n={};n.database=Sm(this.It),n.removeTarget=e,this.Bo(n)}}class EV extends ax{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.It=s,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(e,n){return this.Vo._o("Write",e,n)}onMessage(e){if(me(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=P2(e.writeResults,e.commitTime),r=nr(e.commitTime);return this.listener.Zo(r,n)}return me(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=Sm(this.It),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>O2(this.It,r))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CV extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.Vo=r,this.It=i,this.nu=!1}su(){if(this.nu)throw new V(k.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.Vo.co(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new V(k.UNKNOWN,i.toString())})}fo(e,n,r,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.Vo.fo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new V(k.UNKNOWN,s.toString())})}terminate(){this.nu=!0}}class TV{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(cr(n),this.ou=!1):$("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SV{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=s,this.mu.qr(o=>{r.enqueueAndForget(async()=>{us(this)&&($("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=G(a);l._u.add(4),await ou(l),l.gu.set("Unknown"),l._u.delete(4),await gd(l)}(this))})}),this.gu=new TV(r,i)}}async function gd(t){if(us(t))for(const e of t.wu)await e(!0)}async function ou(t){for(const e of t.wu)await e(!1)}function lx(t,e){const n=G(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),uy(n)?ly(n):Vo(n).ko()&&ay(n,e))}function ux(t,e){const n=G(t),r=Vo(n);n.du.delete(e),r.ko()&&cx(n,e),n.du.size===0&&(r.ko()?r.Fo():us(n)&&n.gu.set("Unknown"))}function ay(t,e){t.yu.Ot(e.targetId),Vo(t).zo(e)}function cx(t,e){t.yu.Ot(e),Vo(t).Ho(e)}function ly(t){t.yu=new I2({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t.du.get(e)||null}),Vo(t).start(),t.gu.uu()}function uy(t){return us(t)&&!Vo(t).No()&&t.du.size>0}function us(t){return G(t)._u.size===0}function hx(t){t.yu=void 0}async function IV(t){t.du.forEach((e,n)=>{ay(t,e)})}async function kV(t,e){hx(t),uy(t)?(t.gu.hu(e),ly(t)):t.gu.set("Unknown")}async function xV(t,e,n){if(t.gu.set("Online"),e instanceof Jk&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.du.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.du.delete(o),r.yu.removeTarget(o))}(t,e)}catch(r){$("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await gh(t,r)}else if(e instanceof lc?t.yu.Gt(e):e instanceof Xk?t.yu.Yt(e):t.yu.Wt(e),!n.isEqual(Y.min()))try{const r=await sx(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.yu.te(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.du.get(l);u&&i.du.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i.du.get(a);if(!l)return;i.du.set(a,l.withResumeToken(ut.EMPTY_BYTE_STRING,l.snapshotVersion)),cx(i,a);const u=new Oi(l.target,a,1,l.sequenceNumber);ay(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){$("RemoteStore","Failed to raise snapshot:",r),await gh(t,r)}}async function gh(t,e,n){if(!tu(e))throw e;t._u.add(1),await ou(t),t.gu.set("Offline"),n||(n=()=>sx(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await gd(t)})}function dx(t,e){return e().catch(n=>gh(t,n,e))}async function vd(t){const e=G(t),n=Qr(e);let r=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;bV(e);)try{const i=await dV(e.localStore,r);if(i===null){e.fu.length===0&&n.Fo();break}r=i.batchId,NV(e,i)}catch(i){await gh(e,i)}fx(e)&&px(e)}function bV(t){return us(t)&&t.fu.length<10}function NV(t,e){t.fu.push(e);const n=Qr(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function fx(t){return us(t)&&!Qr(t).No()&&t.fu.length>0}function px(t){Qr(t).start()}async function RV(t){Qr(t).eu()}async function AV(t){const e=Qr(t);for(const n of t.fu)e.Xo(n.mutations)}async function OV(t,e,n){const r=t.fu.shift(),i=ry.from(r,e,n);await dx(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await vd(t)}async function PV(t,e){e&&Qr(t).Yo&&await async function(n,r){if(i=r.code,w2(i)&&i!==k.ABORTED){const s=n.fu.shift();Qr(n).Oo(),await dx(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await vd(n)}var i}(t,e),fx(t)&&px(t)}async function fE(t,e){const n=G(t);n.asyncQueue.verifyOperationInProgress(),$("RemoteStore","RemoteStore received new credentials");const r=us(n);n._u.add(3),await ou(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await gd(n)}async function DV(t,e){const n=G(t);e?(n._u.delete(2),await gd(n)):e||(n._u.add(2),await ou(n),n.gu.set("Unknown"))}function Vo(t){return t.pu||(t.pu=function(e,n,r){const i=G(e);return i.su(),new wV(n,i.Vo,i.authCredentials,i.appCheckCredentials,i.It,r)}(t.datastore,t.asyncQueue,{Yr:IV.bind(null,t),Zr:kV.bind(null,t),Wo:xV.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),uy(t)?ly(t):t.gu.set("Unknown")):(await t.pu.stop(),hx(t))})),t.pu}function Qr(t){return t.Iu||(t.Iu=function(e,n,r){const i=G(e);return i.su(),new EV(n,i.Vo,i.authCredentials,i.appCheckCredentials,i.It,r)}(t.datastore,t.asyncQueue,{Yr:RV.bind(null,t),Zr:PV.bind(null,t),tu:AV.bind(null,t),Zo:OV.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Oo(),await vd(t)):(await t.Iu.stop(),t.fu.length>0&&($("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cy{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ai,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new cy(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function hy(t,e){if(cr("AsyncQueue",`${e}: ${t}`),tu(t))return new V(k.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||B.comparator(n.key,r.key):(n,r)=>B.comparator(n.key,r.key),this.keyedMap=ua(),this.sortedSet=new He(this.comparator)}static emptySet(e){return new Qs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Qs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Qs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(){this.Tu=new He(B.comparator)}track(e){const n=e.doc.key,r=this.Tu.get(n);r?e.type!==0&&r.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&r.type!==1?this.Tu=this.Tu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Tu=this.Tu.remove(n):e.type===1&&r.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):K():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,r)=>{e.push(r)}),e}}class mo{constructor(e,n,r,i,s,o,a,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l}static fromInitialDocuments(e,n,r,i){const s=[];return n.forEach(o=>{s.push({type:0,doc:o})}),new mo(e,n,Qs.emptySet(n),s,r,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ru(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MV{constructor(){this.Au=void 0,this.listeners=[]}}class LV{constructor(){this.queries=new Uo(e=>Lk(e),ru),this.onlineState="Unknown",this.Ru=new Set}}async function $V(t,e){const n=G(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new MV),i)try{s.Au=await n.onListen(r)}catch(o){const a=hy(o,`Initialization of query '${Em(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.bu(n.onlineState),s.Au&&e.Pu(s.Au)&&dy(n)}async function FV(t,e){const n=G(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function UV(t,e){const n=G(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Pu(i)&&(r=!0);o.Au=i}}r&&dy(n)}function VV(t,e,n){const r=G(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function dy(t){t.Ru.forEach(e=>{e.next()})}class BV{constructor(e,n,r){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=r||{}}Pu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new mo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Nu||!r)&&(!e.docs.isEmpty()||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=mo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mx{constructor(e){this.key=e}}class gx{constructor(e){this.key=e}}class jV{constructor(e,n){this.query=e,this.Lu=n,this.Uu=null,this.current=!1,this.qu=Z(),this.mutatedKeys=Z(),this.Ku=$k(e),this.Gu=new Qs(this.Ku)}get Qu(){return this.Lu}ju(e,n){const r=n?n.Wu:new pE,i=n?n.Gu:this.Gu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),f=ey(this.query,h)?h:null,p=!!d&&this.mutatedKeys.has(d.key),y=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let w=!1;d&&f?d.data.isEqual(f.data)?p!==y&&(r.track({type:3,doc:f}),w=!0):this.zu(d,f)||(r.track({type:2,doc:f}),w=!0,(l&&this.Ku(f,l)>0||u&&this.Ku(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),w=!0):d&&!f&&(r.track({type:1,doc:d}),w=!0,(l||u)&&(a=!0)),w&&(f?(o=o.add(f),s=y?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Gu:o,Wu:r,$i:a,mutatedKeys:s}}zu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const s=e.Wu.Eu();s.sort((u,c)=>function(h,d){const f=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return f(h)-f(d)}(u.type,c.type)||this.Ku(u.doc,c.doc)),this.Hu(r);const o=n?this.Ju():[],a=this.qu.size===0&&this.current?1:0,l=a!==this.Uu;return this.Uu=a,s.length!==0||l?{snapshot:new mo(this.query,e.Gu,i,s,e.mutatedKeys,a===0,l,!1),Yu:o}:{Yu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,Wu:new pE,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Yu:[]}}Xu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.qu;this.qu=Z(),this.Gu.forEach(r=>{this.Xu(r.key)&&(this.qu=this.qu.add(r.key))});const n=[];return e.forEach(r=>{this.qu.has(r)||n.push(new gx(r))}),this.qu.forEach(r=>{e.has(r)||n.push(new mx(r))}),n}Zu(e){this.Lu=e.Hi,this.qu=Z();const n=this.ju(e.documents);return this.applyChanges(n,!0)}tc(){return mo.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.Uu===0)}}class zV{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class WV{constructor(e){this.key=e,this.ec=!1}}class HV{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new Uo(a=>Lk(a),ru),this.ic=new Map,this.rc=new Set,this.oc=new He(B.comparator),this.uc=new Map,this.cc=new iy,this.ac={},this.hc=new Map,this.lc=po.vn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function qV(t,e){const n=nB(t);let r,i;const s=n.sc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.tc();else{const o=await fV(n.localStore,hr(e));n.isPrimaryClient&&lx(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await KV(n,e,r,a==="current")}return i}async function KV(t,e,n,r){t.dc=(c,h,d)=>async function(f,p,y,w){let g=p.view.ju(y);g.$i&&(g=await cE(f.localStore,p.query,!1).then(({documents:_})=>p.view.ju(_,g)));const m=w&&w.targetChanges.get(p.targetId),v=p.view.applyChanges(g,f.isPrimaryClient,m);return gE(f,p.targetId,v.Yu),v.snapshot}(t,c,h,d);const i=await cE(t.localStore,e,!0),s=new jV(e,i.Hi),o=s.ju(i.documents),a=su.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),l=s.applyChanges(o,t.isPrimaryClient,a);gE(t,n,l.Yu);const u=new zV(e,n,s);return t.sc.set(e,u),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),l.snapshot}async function GV(t,e){const n=G(t),r=n.sc.get(e),i=n.ic.get(r.targetId);if(i.length>1)return n.ic.set(r.targetId,i.filter(s=>!ru(s,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Im(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),ux(n.remoteStore,r.targetId),km(n,r.targetId)}).catch(eu)):(km(n,r.targetId),await Im(n.localStore,r.targetId,!0))}async function QV(t,e,n){const r=rB(t);try{const i=await function(s,o){const a=G(s),l=je.now(),u=o.reduce((d,f)=>d.add(f.key),Z());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=dr(),p=Z();return a.Gi.getEntries(d,u).next(y=>{f=y,f.forEach((w,g)=>{g.isValidDocument()||(p=p.add(w))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,f)).next(y=>{c=y;const w=[];for(const g of o){const m=v2(g,c.get(g.key).overlayedDocument);m!=null&&w.push(new ls(g.key,m,Ok(m.value.mapValue),Ln.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,w,o)}).next(y=>{h=y;const w=y.applyToLocalDocumentSet(c,p);return a.documentOverlayCache.saveOverlays(d,y.batchId,w)})}).then(()=>({batchId:h.batchId,changes:Gk(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.ac[s.currentUser.toKey()];l||(l=new He(le)),l=l.insert(o,a),s.ac[s.currentUser.toKey()]=l}(r,i.batchId,n),await au(r,i.changes),await vd(r.remoteStore)}catch(i){const s=hy(i,"Failed to persist write");n.reject(s)}}async function vx(t,e){const n=G(t);try{const r=await cV(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.uc.get(s);o&&(me(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ec=!0:i.modifiedDocuments.size>0?me(o.ec):i.removedDocuments.size>0&&(me(o.ec),o.ec=!1))}),await au(n,r,e)}catch(r){await eu(r)}}function mE(t,e,n){const r=G(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.sc.forEach((s,o)=>{const a=o.view.bu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=G(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.bu(o)&&(l=!0)}),l&&dy(a)}(r.eventManager,e),i.length&&r.nc.Wo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function YV(t,e,n){const r=G(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.uc.get(e),s=i&&i.key;if(s){let o=new He(B.comparator);o=o.insert(s,it.newNoDocument(s,Y.min()));const a=Z().add(s),l=new pd(Y.min(),new Map,new ze(le),o,a);await vx(r,l),r.oc=r.oc.remove(s),r.uc.delete(e),fy(r)}else await Im(r.localStore,e,!1).then(()=>km(r,e,n)).catch(eu)}async function XV(t,e){const n=G(t),r=e.batch.batchId;try{const i=await uV(n.localStore,e);_x(n,r,null),yx(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await au(n,i)}catch(i){await eu(i)}}async function JV(t,e,n){const r=G(t);try{const i=await function(s,o){const a=G(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(me(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);_x(r,e,n),yx(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await au(r,i)}catch(i){await eu(i)}}function yx(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function _x(t,e,n){const r=G(t);let i=r.ac[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.ac[r.currentUser.toKey()]=i}}function km(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ic.get(e))t.sc.delete(r),n&&t.nc._c(r,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.ls(e).forEach(r=>{t.cc.containsKey(r)||wx(t,r)})}function wx(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(ux(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),fy(t))}function gE(t,e,n){for(const r of n)r instanceof mx?(t.cc.addReference(r.key,e),ZV(t,r)):r instanceof gx?($("SyncEngine","Document no longer in limbo: "+r.key),t.cc.removeReference(r.key,e),t.cc.containsKey(r.key)||wx(t,r.key)):K()}function ZV(t,e){const n=e.key,r=n.path.canonicalString();t.oc.get(n)||t.rc.has(r)||($("SyncEngine","New document in limbo: "+n),t.rc.add(r),fy(t))}function fy(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new B(Te.fromString(e)),r=t.lc.next();t.uc.set(r,new WV(n)),t.oc=t.oc.insert(n,r),lx(t.remoteStore,new Oi(hr(Zv(n.path)),r,2,Qv.at))}}async function au(t,e,n){const r=G(t),i=[],s=[],o=[];r.sc.isEmpty()||(r.sc.forEach((a,l)=>{o.push(r.dc(l,e,n).then(u=>{if(u){r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u.fromCache?"not-current":"current"),i.push(u);const c=oy.Ci(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.nc.Wo(i),await async function(a,l){const u=G(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>b.forEach(l,h=>b.forEach(h.Si,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>b.forEach(h.Di,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!tu(c))throw c;$("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.Ui.get(h),f=d.snapshotVersion,p=d.withLastLimboFreeSnapshotVersion(f);u.Ui=u.Ui.insert(h,p)}}}(r.localStore,s))}async function eB(t,e){const n=G(t);if(!n.currentUser.isEqual(e)){$("SyncEngine","User change. New user:",e.toKey());const r=await ix(n.localStore,e);n.currentUser=e,function(i,s){i.hc.forEach(o=>{o.forEach(a=>{a.reject(new V(k.CANCELLED,s))})}),i.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await au(n,r.ji)}}function tB(t,e){const n=G(t),r=n.uc.get(e);if(r&&r.ec)return Z().add(r.key);{let i=Z();const s=n.ic.get(e);if(!s)return i;for(const o of s){const a=n.sc.get(o);i=i.unionWith(a.view.Qu)}return i}}function nB(t){const e=G(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=vx.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=tB.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=YV.bind(null,e),e.nc.Wo=UV.bind(null,e.eventManager),e.nc._c=VV.bind(null,e.eventManager),e}function rB(t){const e=G(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=XV.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=JV.bind(null,e),e}class iB{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=md(e.databaseInfo.databaseId),this.sharedClientState=this.mc(e),this.persistence=this.gc(e),await this.persistence.start(),this.localStore=this.yc(e),this.gcScheduler=this.Ic(e,this.localStore),this.indexBackfillerScheduler=this.Tc(e,this.localStore)}Ic(e,n){return null}Tc(e,n){return null}yc(e){return lV(this.persistence,new oV,e.initialUser,this.It)}gc(e){return new iV(sy.Bs,this.It)}mc(e){return new mV}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class sB{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>mE(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=eB.bind(null,this.syncEngine),await DV(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new LV}createDatastore(e){const n=md(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new _V(i));var i;return function(s,o,a,l){return new CV(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>mE(this.syncEngine,a,0),o=dE.C()?new dE:new gV,new SV(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new HV(r,i,s,o,a,l);return u&&(c.fc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=G(e);$("RemoteStore","RemoteStore shutting down."),n._u.add(5),await ou(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class oB{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ac(this.observer.next,e)}error(e){this.observer.error?this.Ac(this.observer.error,e):cr("Uncaught Error in snapshot listener:",e)}Rc(){this.muted=!0}Ac(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aB{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=bt.UNAUTHENTICATED,this.clientId=bk.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{$("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>($("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new V(k.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ai;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=hy(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function lB(t,e){t.asyncQueue.verifyOperationInProgress(),$("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await ix(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function uB(t,e){t.asyncQueue.verifyOperationInProgress();const n=await cB(t);$("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>fE(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>fE(e.remoteStore,s)),t.onlineComponents=e}async function cB(t){return t.offlineComponents||($("FirestoreClient","Using default OfflineComponentProvider"),await lB(t,new iB)),t.offlineComponents}async function Ex(t){return t.onlineComponents||($("FirestoreClient","Using default OnlineComponentProvider"),await uB(t,new sB)),t.onlineComponents}function hB(t){return Ex(t).then(e=>e.syncEngine)}async function vE(t){const e=await Ex(t),n=e.eventManager;return n.onListen=qV.bind(null,e.syncEngine),n.onUnlisten=GV.bind(null,e.syncEngine),n}const yE=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cx(t,e,n){if(!n)throw new V(k.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function dB(t,e,n,r){if(e===!0&&r===!0)throw new V(k.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function _E(t){if(!B.isDocumentKey(t))throw new V(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function wE(t){if(B.isDocumentKey(t))throw new V(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function py(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K()}function Aa(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new V(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=py(t);throw new V(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function fB(t,e){if(e<=0)throw new V(k.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new V(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new V(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,dB("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new EE({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new V(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new V(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new EE(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new PU;switch(n.type){case"gapi":const r=n.client;return new LU(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new V(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=yE.get(e);n&&($("ComponentProvider","Removing Datastore"),yE.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new jr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new sn(this.firestore,e,this._key)}}class Yr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Yr(this.firestore,e,this._query)}}class jr extends Yr{constructor(e,n,r){super(e,n,Zv(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new sn(this.firestore,null,new B(e))}withConverter(e){return new jr(this.firestore,e,this._path)}}function pB(t,e,...n){if(t=et(t),Cx("collection","path",e),t instanceof my){const r=Te.fromString(e,...n);return wE(r),new jr(t,null,r)}{if(!(t instanceof sn||t instanceof jr))throw new V(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return wE(r),new jr(t.firestore,null,r)}}function Tx(t,e,...n){if(t=et(t),arguments.length===1&&(e=bk.R()),Cx("doc","path",e),t instanceof my){const r=Te.fromString(e,...n);return _E(r),new sn(t,null,new B(r))}{if(!(t instanceof sn||t instanceof jr))throw new V(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return _E(r),new sn(t.firestore,t instanceof jr?t.converter:null,new B(r))}}function mB(t,e){return t=et(t),e=et(e),t instanceof Yr&&e instanceof Yr&&t.firestore===e.firestore&&ru(t._query,e._query)&&t.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gB{constructor(){this.$c=Promise.resolve(),this.Bc=[],this.Lc=!1,this.Uc=[],this.qc=null,this.Kc=!1,this.Gc=!1,this.Qc=[],this.xo=new ox(this,"async_queue_retry"),this.jc=()=>{const n=Rf();n&&$("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.bo()};const e=Rf();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.jc)}get isShuttingDown(){return this.Lc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Wc(),this.zc(e)}enterRestrictedMode(e){if(!this.Lc){this.Lc=!0,this.Gc=e||!1;const n=Rf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.jc)}}enqueue(e){if(this.Wc(),this.Lc)return new Promise(()=>{});const n=new Ai;return this.zc(()=>this.Lc&&this.Gc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Bc.push(e),this.Hc()))}async Hc(){if(this.Bc.length!==0){try{await this.Bc[0](),this.Bc.shift(),this.xo.reset()}catch(e){if(!tu(e))throw e;$("AsyncQueue","Operation failed with retryable error: "+e)}this.Bc.length>0&&this.xo.Ao(()=>this.Hc())}}zc(e){const n=this.$c.then(()=>(this.Kc=!0,e().catch(r=>{this.qc=r,this.Kc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw cr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Kc=!1,r))));return this.$c=n,n}enqueueAfterDelay(e,n,r){this.Wc(),this.Qc.indexOf(e)>-1&&(n=0);const i=cy.createAndSchedule(this,e,n,r,s=>this.Jc(s));return this.Uc.push(i),i}Wc(){this.qc&&K()}verifyOperationInProgress(){}async Yc(){let e;do e=this.$c,await e;while(e!==this.$c)}Xc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}Zc(e){return this.Yc().then(()=>{this.Uc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Yc()})}ta(e){this.Qc.push(e)}Jc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}function CE(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Tl extends my{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new gB,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Ix(this),this._firestoreClient.terminate()}}function vB(t,e){const n=typeof t=="object"?t:Fg(),r=typeof t=="string"?t:e||"(default)";return Ao(n,"firestore").getImmediate({identifier:r})}function Sx(t){return t._firestoreClient||Ix(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Ix(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new KU(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new aB(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class gy{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new V(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new vt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e){this._byteString=e}static fromBase64String(e){try{return new go(ut.fromBase64String(e))}catch(n){throw new V(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new go(ut.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new V(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new V(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return le(this._lat,e._lat)||le(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yB=/^__.*__$/;class _B{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ls(e,this.data,this.fieldMask,n,this.fieldTransforms):new iu(e,this.data,n,this.fieldTransforms)}}function kx(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class _y{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.It=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ea(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get na(){return this.settings.na}sa(e){return new _y(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ia(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.sa({path:r,ra:!1});return i.oa(e),i}ua(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.sa({path:r,ra:!1});return i.ea(),i}ca(e){return this.sa({path:void 0,ra:!0})}aa(e){return vh(e,this.settings.methodName,this.settings.ha||!1,this.path,this.settings.la)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ea(){if(this.path)for(let e=0;e<this.path.length;e++)this.oa(this.path.get(e))}oa(e){if(e.length===0)throw this.aa("Document fields must not be empty");if(kx(this.na)&&yB.test(e))throw this.aa('Document fields cannot begin and end with "__"')}}class wB{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=r||md(e)}fa(e,n,r,i=!1){return new _y({na:e,methodName:n,la:r,path:vt.emptyPath(),ra:!1,ha:i},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function EB(t){const e=t._freezeSettings(),n=md(t._databaseId);return new wB(t._databaseId,!!e.ignoreUndefinedProperties,n)}function CB(t,e,n,r,i,s={}){const o=t.fa(s.merge||s.mergeFields?2:0,e,n,i);Rx("Data must be an object, but it was:",o,r);const a=bx(r,o);let l,u;if(s.merge)l=new Mn(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=TB(e,h,n);if(!o.contains(d))throw new V(k.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);IB(c,d)||c.push(d)}l=new Mn(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new _B(new tn(a),l,u)}class wy extends vy{_toFieldTransform(e){return new f2(e.path,new wl)}isEqual(e){return e instanceof wy}}function xx(t,e){if(Nx(t=et(t)))return Rx("Unsupported field value:",e,t),bx(t,e);if(t instanceof vy)return function(n,r){if(!kx(r.na))throw r.aa(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.aa(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ra&&e.na!==4)throw e.aa("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=xx(o,r.ca(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=et(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return c2(r.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=je.fromDate(n);return{timestampValue:mh(r.It,i)}}if(n instanceof je){const i=new je(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:mh(r.It,i)}}if(n instanceof yy)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof go)return{bytesValue:Zk(r.It,n._byteString)};if(n instanceof sn){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.aa(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ny(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.aa(`Unsupported field value: ${py(n)}`)}(t,e)}function bx(t,e){const n={};return Nk(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Fo(t,(r,i)=>{const s=xx(i,e.ia(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Nx(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof je||t instanceof yy||t instanceof go||t instanceof sn||t instanceof vy)}function Rx(t,e,n){if(!Nx(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=py(n);throw r==="an object"?e.aa(t+" a custom object"):e.aa(t+" "+r)}}function TB(t,e,n){if((e=et(e))instanceof gy)return e._internalPath;if(typeof e=="string")return Ax(t,e);throw vh("Field path arguments must be of type string or ",t,!1,void 0,n)}const SB=new RegExp("[~\\*/\\[\\]]");function Ax(t,e,n){if(e.search(SB)>=0)throw vh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new gy(...e.split("."))._internalPath}catch{throw vh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function vh(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new V(k.INVALID_ARGUMENT,a+t+l)}function IB(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ox{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new sn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new kB(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ey("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class kB extends Ox{data(){return super.data()}}function Ey(t,e){return typeof e=="string"?Ax(t,e):e instanceof gy?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Px extends Ox{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new uc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ey("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class uc extends Px{data(e={}){return super.data(e)}}class xB{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ca(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new uc(this._firestore,this._userDataWriter,r.key,r,new ca(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new V(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new uc(r._firestore,r._userDataWriter,o.doc.key,o.doc,new ca(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:s++}))}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new uc(r._firestore,r._userDataWriter,o.doc.key,o.doc,new ca(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:bB(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function bB(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NB(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new V(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Dx{}function RB(t,...e){for(const n of e)t=n._apply(t);return t}class AB extends Dx{constructor(e,n){super(),this.wa=e,this.ya=n,this.type="orderBy"}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new V(k.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new V(k.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Gs(i,s);return function(a,l){if(Dk(a)===null){const u=Mk(a);u!==null&&MB(a,u,l.field)}}(r,o),o}(e._query,this.wa,this.ya);return new Yr(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new nu(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function OB(t,e="asc"){const n=e,r=Ey("orderBy",t);return new AB(r,n)}class PB extends Dx{constructor(e,n,r){super(),this.type=e,this.pa=n,this.Ia=r}_apply(e){return new Yr(e.firestore,e.converter,fh(e._query,this.pa,this.Ia))}}function DB(t){return fB("limit",t),new PB("limit",t,"F")}function MB(t,e,n){if(!n.isEqual(e))throw new V(k.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LB{convertValue(e,n="none"){switch(Xi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return De(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ho(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw K()}}convertObject(e,n){const r={};return Fo(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new yy(De(e.latitude),De(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Ak(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(gl(e));default:return null}}convertTimestamp(e){const n=Gr(e);return new je(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Te.fromString(e);me(rx(r));const i=new vl(r.get(1),r.get(3)),s=new B(r.popFirst(5));return i.isEqual(n)||cr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $B(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Mx extends LB{constructor(e){super(),this.firestore=e}convertBytes(e){return new go(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new sn(this.firestore,null,n)}}function FB(t){return Lx(Aa(t.firestore,Tl),[new ty(t._key,Ln.none())])}function UB(t,e){const n=Aa(t.firestore,Tl),r=Tx(t),i=$B(t.converter,e);return Lx(n,[CB(EB(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Ln.exists(!1))]).then(()=>r)}function VB(t,...e){var n,r,i;t=et(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||CE(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(CE(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof sn)u=Aa(t.firestore,Tl),c=Zv(t._key.path),l={next:h=>{e[o]&&e[o](BB(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Aa(t,Yr);u=Aa(h.firestore,Tl),c=h._query;const d=new Mx(u);l={next:f=>{e[o]&&e[o](new xB(u,d,h,f))},error:e[o+1],complete:e[o+2]},NB(t._query)}return function(h,d,f,p){const y=new oB(p),w=new BV(d,y,f);return h.asyncQueue.enqueueAndForget(async()=>$V(await vE(h),w)),()=>{y.Rc(),h.asyncQueue.enqueueAndForget(async()=>FV(await vE(h),w))}}(Sx(u),c,a,l)}function Lx(t,e){return function(n,r){const i=new Ai;return n.asyncQueue.enqueueAndForget(async()=>QV(await hB(n),r,i)),i.promise}(Sx(t),e)}function BB(t,e,n){const r=n.docs.get(e._key),i=new Mx(t);return new Px(t,i,e._key,r,new ca(n.hasPendingWrites,n.fromCache),e.converter)}function jB(){return new wy("serverTimestamp")}(function(t,e=!0){(function(n){$o=n})(ni),ln(new Gt("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new Tl(new DU(n.getProvider("auth-internal")),new FU(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new V(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new vl(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Le(W0,"3.4.15",t),Le(W0,"3.4.15","esm2017")})();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zB="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WB{constructor(e,n,r){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||e.get().then(i=>this.auth=i,()=>{}),this.messaging||n.get().then(i=>this.messaging=i,()=>{}),this.appCheck||r.get().then(i=>this.appCheck=i,()=>{})}async getAuthToken(){if(!!this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(){if(this.appCheck){const e=await this.appCheck.getToken();return e.error?null:e.token}return null}async getContext(){const e=await this.getAuthToken(),n=await this.getMessagingToken(),r=await this.getAppCheckToken();return{authToken:e,messagingToken:n,appCheckToken:r}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TE="us-central1";class HB{constructor(e,n,r,i,s=TE,o){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new WB(n,r,i),this.cancelAllRequests=new Promise(a=>{this.deleteService=()=>Promise.resolve(a())});try{const a=new URL(s);this.customDomain=a.origin,this.region=TE}catch{this.customDomain=null,this.region=s}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}const SE="@firebase/functions",IE="0.8.4";/**
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
 */const qB="auth-internal",KB="app-check-internal",GB="messaging-internal";function QB(t,e){const n=(r,{instanceIdentifier:i})=>{const s=r.getProvider("app").getImmediate(),o=r.getProvider(qB),a=r.getProvider(GB),l=r.getProvider(KB);return new HB(s,o,a,l,i,t)};ln(new Gt(zB,n,"PUBLIC").setMultipleInstances(!0)),Le(SE,IE,e),Le(SE,IE,"esm2017")}QB(fetch.bind(self));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $x="firebasestorage.googleapis.com",YB="storageBucket",XB=2*60*1e3,JB=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends dn{constructor(e,n){super(Af(e),`Firebase Storage: ${n} (${Af(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Bn.prototype)}_codeEquals(e){return Af(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function Af(t){return"storage/"+t}function ZB(){const t="An unknown error occurred, please check the error payload for server response.";return new Bn("unknown",t)}function ej(){return new Bn("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function tj(){return new Bn("canceled","User canceled the upload/download.")}function nj(t){return new Bn("invalid-url","Invalid URL '"+t+"'.")}function rj(t){return new Bn("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function kE(t){return new Bn("invalid-argument",t)}function Fx(){return new Bn("app-deleted","The Firebase app was deleted.")}function ij(t){return new Bn("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Cn.makeFromUrl(e,n)}catch{return new Cn(e,"")}if(r.path==="")return r;throw rj(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(_){_.path.charAt(_.path.length-1)==="/"&&(_.path_=_.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(_){_.path_=decodeURIComponent(_.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),p={bucket:1,path:3},y=n===$x?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",g=new RegExp(`^https?://${y}/${i}/${w}`,"i"),v=[{regex:a,indices:l,postModify:s},{regex:f,indices:p,postModify:u},{regex:g,indices:{bucket:1,path:2},postModify:u}];for(let _=0;_<v.length;_++){const C=v[_],T=C.regex.exec(e);if(T){const S=T[C.indices.bucket];let I=T[C.indices.path];I||(I=""),r=new Cn(S,I),C.postModify(r);break}}if(r==null)throw nj(e);return r}}class sj{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oj(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...w){u||(u=!0,e.apply(null,w))}function h(w){i=setTimeout(()=>{i=null,t(f,l())},w)}function d(){s&&clearTimeout(s)}function f(w,...g){if(u){d();return}if(w){d(),c.call(null,w,...g);return}if(l()||o){d(),c.call(null,w,...g);return}r<64&&(r*=2);let v;a===1?(a=2,v=0):v=(r+Math.random())*1e3,h(v)}let p=!1;function y(w){p||(p=!0,d(),!u&&(i!==null?(w||(a=2),clearTimeout(i),h(0)):w||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,y(!0)},n),y}function aj(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lj(t){return t!==void 0}function xE(t,e,n,r){if(r<e)throw kE(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw kE(`Invalid value for '${t}'. Expected ${n} or less.`)}function uj(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yh;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(yh||(yh={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cj{constructor(e,n,r,i,s,o,a,l,u,c,h){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,f)=>{this.resolve_=d,this.reject_=f,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Vu(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===yh.NO_ERROR,l=s.getStatus();if(!a||this.isRetryStatusCode_(l)){const c=s.getErrorCode()===yh.ABORT;r(!1,new Vu(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Vu(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());lj(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=ZB();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?Fx():tj();o(l)}else{const l=ej();o(l)}};this.canceled_?n(!1,new Vu(!1,null,!0)):this.backoffId_=oj(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&aj(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,s=this.additionalRetryCodes_.indexOf(e)!==-1;return n||i||s}}class Vu{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function hj(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function dj(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function fj(t,e){e&&(t["X-Firebase-GMPID"]=e)}function pj(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function mj(t,e,n,r,i,s){const o=uj(t.urlParams),a=t.url+o,l=Object.assign({},t.headers);return fj(l,e),hj(l,n),dj(l,s),pj(l,r),new cj(a,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gj(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function vj(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class _h{constructor(e,n){this._service=e,n instanceof Cn?this._location=n:this._location=Cn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new _h(e,n)}get root(){const e=new Cn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return vj(this._location.path)}get storage(){return this._service}get parent(){const e=gj(this._location.path);if(e===null)return null;const n=new Cn(this._location.bucket,e);return new _h(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw ij(e)}}function bE(t,e){const n=e==null?void 0:e[YB];return n==null?null:Cn.makeFromBucketSpec(n,t)}class yj{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=$x,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=XB,this._maxUploadRetryTime=JB,this._requests=new Set,i!=null?this._bucket=Cn.makeFromBucketSpec(i,this._host):this._bucket=bE(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Cn.makeFromBucketSpec(this._url,e):this._bucket=bE(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){xE("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){xE("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new _h(this,e)}_makeRequest(e,n,r,i){if(this._deleted)return new sj(Fx());{const s=mj(e,this._appId,r,i,n,this._firebaseVersion);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const NE="@firebase/storage",RE="0.9.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _j="storage";function wj(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new yj(n,r,i,e,ni)}function Ej(){ln(new Gt(_j,wj,"PUBLIC").setMultipleInstances(!0)),Le(NE,RE,""),Le(NE,RE,"esm2017")}Ej();const Ux="@firebase/installations",Cy="0.5.12";/**
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
 */const Vx=1e4,Bx=`w:${Cy}`,jx="FIS_v2",Cj="https://firebaseinstallations.googleapis.com/v1",Tj=60*60*1e3,Sj="installations",Ij="Installations";/**
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
 */const kj={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Ji=new is(Sj,Ij,kj);function zx(t){return t instanceof dn&&t.code.includes("request-failed")}/**
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
 */function Wx({projectId:t}){return`${Cj}/projects/${t}/installations`}function Hx(t){return{token:t.token,requestStatus:2,expiresIn:bj(t.expiresIn),creationTime:Date.now()}}async function qx(t,e){const r=(await e.json()).error;return Ji.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Kx({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function xj(t,{refreshToken:e}){const n=Kx(t);return n.append("Authorization",Nj(e)),n}async function Gx(t){const e=await t();return e.status>=500&&e.status<600?t():e}function bj(t){return Number(t.replace("s","000"))}function Nj(t){return`${jx} ${t}`}/**
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
 */async function Rj({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Wx(t),i=Kx(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:jx,appId:t.appId,sdkVersion:Bx},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await Gx(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Hx(u.authToken)}}else throw await qx("Create Installation",l)}/**
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
 */function Qx(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function Aj(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Oj=/^[cdef][\w-]{21}$/,xm="";function Pj(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Dj(t);return Oj.test(n)?n:xm}catch{return xm}}function Dj(t){return Aj(t).substr(0,22)}/**
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
 */function yd(t){return`${t.appName}!${t.appId}`}/**
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
 */const Yx=new Map;function Xx(t,e){const n=yd(t);Jx(n,e),Mj(n,e)}function Jx(t,e){const n=Yx.get(t);if(!!n)for(const r of n)r(e)}function Mj(t,e){const n=Lj();n&&n.postMessage({key:t,fid:e}),$j()}let Ii=null;function Lj(){return!Ii&&"BroadcastChannel"in self&&(Ii=new BroadcastChannel("[Firebase] FID Change"),Ii.onmessage=t=>{Jx(t.data.key,t.data.fid)}),Ii}function $j(){Yx.size===0&&Ii&&(Ii.close(),Ii=null)}/**
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
 */const Fj="firebase-installations-database",Uj=1,Zi="firebase-installations-store";let Of=null;function Ty(){return Of||(Of=DS(Fj,Uj,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Zi)}}})),Of}async function wh(t,e){const n=yd(t),i=(await Ty()).transaction(Zi,"readwrite"),s=i.objectStore(Zi),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&Xx(t,e.fid),e}async function Zx(t){const e=yd(t),r=(await Ty()).transaction(Zi,"readwrite");await r.objectStore(Zi).delete(e),await r.done}async function _d(t,e){const n=yd(t),i=(await Ty()).transaction(Zi,"readwrite"),s=i.objectStore(Zi),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&Xx(t,a.fid),a}/**
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
 */async function Sy(t){let e;const n=await _d(t.appConfig,r=>{const i=Vj(r),s=Bj(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===xm?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Vj(t){const e=t||{fid:Pj(),registrationStatus:0};return eb(e)}function Bj(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Ji.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=jj(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:zj(t)}:{installationEntry:e}}async function jj(t,e){try{const n=await Rj(t,e);return wh(t.appConfig,n)}catch(n){throw zx(n)&&n.customData.serverCode===409?await Zx(t.appConfig):await wh(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function zj(t){let e=await AE(t.appConfig);for(;e.registrationStatus===1;)await Qx(100),e=await AE(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Sy(t);return r||n}return e}function AE(t){return _d(t,e=>{if(!e)throw Ji.create("installation-not-found");return eb(e)})}function eb(t){return Wj(t)?{fid:t.fid,registrationStatus:0}:t}function Wj(t){return t.registrationStatus===1&&t.registrationTime+Vx<Date.now()}/**
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
 */async function Hj({appConfig:t,heartbeatServiceProvider:e},n){const r=qj(t,n),i=xj(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:Bx,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await Gx(()=>fetch(r,a));if(l.ok){const u=await l.json();return Hx(u)}else throw await qx("Generate Auth Token",l)}function qj(t,{fid:e}){return`${Wx(t)}/${e}/authTokens:generate`}/**
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
 */async function Iy(t,e=!1){let n;const r=await _d(t.appConfig,s=>{if(!tb(s))throw Ji.create("not-registered");const o=s.authToken;if(!e&&Qj(o))return s;if(o.requestStatus===1)return n=Kj(t,e),s;{if(!navigator.onLine)throw Ji.create("app-offline");const a=Xj(s);return n=Gj(t,a),a}});return n?await n:r.authToken}async function Kj(t,e){let n=await OE(t.appConfig);for(;n.authToken.requestStatus===1;)await Qx(100),n=await OE(t.appConfig);const r=n.authToken;return r.requestStatus===0?Iy(t,e):r}function OE(t){return _d(t,e=>{if(!tb(e))throw Ji.create("not-registered");const n=e.authToken;return Jj(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Gj(t,e){try{const n=await Hj(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await wh(t.appConfig,r),n}catch(n){if(zx(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Zx(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await wh(t.appConfig,r)}throw n}}function tb(t){return t!==void 0&&t.registrationStatus===2}function Qj(t){return t.requestStatus===2&&!Yj(t)}function Yj(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Tj}function Xj(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Jj(t){return t.requestStatus===1&&t.requestTime+Vx<Date.now()}/**
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
 */async function Zj(t){const e=t,{installationEntry:n,registrationPromise:r}=await Sy(e);return r?r.catch(console.error):Iy(e).catch(console.error),n.fid}/**
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
 */async function ez(t,e=!1){const n=t;return await tz(n),(await Iy(n,e)).token}async function tz(t){const{registrationPromise:e}=await Sy(t);e&&await e}/**
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
 */function nz(t){if(!t||!t.options)throw Pf("App Configuration");if(!t.name)throw Pf("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Pf(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Pf(t){return Ji.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nb="installations",rz="installations-internal",iz=t=>{const e=t.getProvider("app").getImmediate(),n=nz(e),r=Ao(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},sz=t=>{const e=t.getProvider("app").getImmediate(),n=Ao(e,nb).getImmediate();return{getId:()=>Zj(n),getToken:i=>ez(n,i)}};function oz(){ln(new Gt(nb,iz,"PUBLIC")),ln(new Gt(rz,sz,"PRIVATE"))}oz();Le(Ux,Cy);Le(Ux,Cy,"esm2017");const Df="@firebase/remote-config",PE="0.3.11";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const az="remote-config";/**
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
 */const lz={["registration-window"]:"Undefined window object. This SDK only supports usage in a browser environment.",["registration-project-id"]:"Undefined project identifier. Check Firebase app initialization.",["registration-api-key"]:"Undefined API key. Check Firebase app initialization.",["registration-app-id"]:"Undefined app identifier. Check Firebase app initialization.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}.",["fetch-client-network"]:"Fetch client failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-timeout"]:'The config fetch request timed out.  Configure timeout using "fetchTimeoutMillis" SDK setting.',["fetch-throttle"]:'The config fetch request timed out while in an exponential backoff state. Configure timeout using "fetchTimeoutMillis" SDK setting. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.',["fetch-client-parse"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["indexed-db-unavailable"]:"Indexed DB is not supported by current browser"},Rt=new is("remoteconfig","Remote Config",lz);function uz(t){const e=et(t);return e._initializePromise||(e._initializePromise=e._storageCache.loadFromStorage().then(()=>{e._isInitializationComplete=!0})),e._initializePromise}/**
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
 */class cz{constructor(e,n,r,i){this.client=e,this.storage=n,this.storageCache=r,this.logger=i}isCachedDataFresh(e,n){if(!n)return this.logger.debug("Config fetch cache check. Cache unpopulated."),!1;const r=Date.now()-n,i=r<=e;return this.logger.debug(`Config fetch cache check. Cache age millis: ${r}. Cache max age millis (minimumFetchIntervalMillis setting): ${e}. Is cache hit: ${i}.`),i}async fetch(e){const[n,r]=await Promise.all([this.storage.getLastSuccessfulFetchTimestampMillis(),this.storage.getLastSuccessfulFetchResponse()]);if(r&&this.isCachedDataFresh(e.cacheMaxAgeMillis,n))return r;e.eTag=r&&r.eTag;const i=await this.client.fetch(e),s=[this.storageCache.setLastSuccessfulFetchTimestampMillis(Date.now())];return i.status===200&&s.push(this.storage.setLastSuccessfulFetchResponse(i)),await Promise.all(s),i}}/**
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
 */function hz(t=navigator){return t.languages&&t.languages[0]||t.language}/**
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
 */class dz{constructor(e,n,r,i,s,o){this.firebaseInstallations=e,this.sdkVersion=n,this.namespace=r,this.projectId=i,this.apiKey=s,this.appId=o}async fetch(e){var n,r,i;const[s,o]=await Promise.all([this.firebaseInstallations.getId(),this.firebaseInstallations.getToken()]),l=`${window.FIREBASE_REMOTE_CONFIG_URL_BASE||"https://firebaseremoteconfig.googleapis.com"}/v1/projects/${this.projectId}/namespaces/${this.namespace}:fetch?key=${this.apiKey}`,u={"Content-Type":"application/json","Content-Encoding":"gzip","If-None-Match":e.eTag||"*"},c={sdk_version:this.sdkVersion,app_instance_id:s,app_instance_id_token:o,app_id:this.appId,language_code:hz()},h={method:"POST",headers:u,body:JSON.stringify(c)},d=fetch(l,h),f=new Promise((v,_)=>{e.signal.addEventListener(()=>{const C=new Error("The operation was aborted.");C.name="AbortError",_(C)})});let p;try{await Promise.race([d,f]),p=await d}catch(v){let _="fetch-client-network";throw((n=v)===null||n===void 0?void 0:n.name)==="AbortError"&&(_="fetch-timeout"),Rt.create(_,{originalErrorMessage:(r=v)===null||r===void 0?void 0:r.message})}let y=p.status;const w=p.headers.get("ETag")||void 0;let g,m;if(p.status===200){let v;try{v=await p.json()}catch(_){throw Rt.create("fetch-client-parse",{originalErrorMessage:(i=_)===null||i===void 0?void 0:i.message})}g=v.entries,m=v.state}if(m==="INSTANCE_STATE_UNSPECIFIED"?y=500:m==="NO_CHANGE"?y=304:(m==="NO_TEMPLATE"||m==="EMPTY_CONFIG")&&(g={}),y!==304&&y!==200)throw Rt.create("fetch-status",{httpStatus:y});return{status:y,eTag:w,config:g}}}/**
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
 */function fz(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Rt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function pz(t){if(!(t instanceof dn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class mz{constructor(e,n){this.client=e,this.storage=n}async fetch(e){const n=await this.storage.getThrottleMetadata()||{backoffCount:0,throttleEndTimeMillis:Date.now()};return this.attemptFetch(e,n)}async attemptFetch(e,{throttleEndTimeMillis:n,backoffCount:r}){await fz(e.signal,n);try{const i=await this.client.fetch(e);return await this.storage.deleteThrottleMetadata(),i}catch(i){if(!pz(i))throw i;const s={throttleEndTimeMillis:Date.now()+vO(r),backoffCount:r+1};return await this.storage.setThrottleMetadata(s),this.attemptFetch(e,s)}}}/**
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
 */const gz=60*1e3,vz=12*60*60*1e3;class yz{constructor(e,n,r,i,s){this.app=e,this._client=n,this._storageCache=r,this._storage=i,this._logger=s,this._isInitializationComplete=!1,this.settings={fetchTimeoutMillis:gz,minimumFetchIntervalMillis:vz},this.defaultConfig={}}get fetchTimeMillis(){return this._storageCache.getLastSuccessfulFetchTimestampMillis()||-1}get lastFetchStatus(){return this._storageCache.getLastFetchStatus()||"no-fetch-yet"}}/**
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
 */function cc(t,e){var n;const r=t.target.error||void 0;return Rt.create(e,{originalErrorMessage:r&&((n=r)===null||n===void 0?void 0:n.message)})}const mi="app_namespace_store",_z="firebase_remote_config",wz=1;function Ez(){return new Promise((t,e)=>{var n;try{const r=indexedDB.open(_z,wz);r.onerror=i=>{e(cc(i,"storage-open"))},r.onsuccess=i=>{t(i.target.result)},r.onupgradeneeded=i=>{const s=i.target.result;switch(i.oldVersion){case 0:s.createObjectStore(mi,{keyPath:"compositeKey"})}}}catch(r){e(Rt.create("storage-open",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message}))}})}class Cz{constructor(e,n,r,i=Ez()){this.appId=e,this.appName=n,this.namespace=r,this.openDbPromise=i}getLastFetchStatus(){return this.get("last_fetch_status")}setLastFetchStatus(e){return this.set("last_fetch_status",e)}getLastSuccessfulFetchTimestampMillis(){return this.get("last_successful_fetch_timestamp_millis")}setLastSuccessfulFetchTimestampMillis(e){return this.set("last_successful_fetch_timestamp_millis",e)}getLastSuccessfulFetchResponse(){return this.get("last_successful_fetch_response")}setLastSuccessfulFetchResponse(e){return this.set("last_successful_fetch_response",e)}getActiveConfig(){return this.get("active_config")}setActiveConfig(e){return this.set("active_config",e)}getActiveConfigEtag(){return this.get("active_config_etag")}setActiveConfigEtag(e){return this.set("active_config_etag",e)}getThrottleMetadata(){return this.get("throttle_metadata")}setThrottleMetadata(e){return this.set("throttle_metadata",e)}deleteThrottleMetadata(){return this.delete("throttle_metadata")}async get(e){const n=await this.openDbPromise;return new Promise((r,i)=>{var s;const a=n.transaction([mi],"readonly").objectStore(mi),l=this.createCompositeKey(e);try{const u=a.get(l);u.onerror=c=>{i(cc(c,"storage-get"))},u.onsuccess=c=>{const h=c.target.result;r(h?h.value:void 0)}}catch(u){i(Rt.create("storage-get",{originalErrorMessage:(s=u)===null||s===void 0?void 0:s.message}))}})}async set(e,n){const r=await this.openDbPromise;return new Promise((i,s)=>{var o;const l=r.transaction([mi],"readwrite").objectStore(mi),u=this.createCompositeKey(e);try{const c=l.put({compositeKey:u,value:n});c.onerror=h=>{s(cc(h,"storage-set"))},c.onsuccess=()=>{i()}}catch(c){s(Rt.create("storage-set",{originalErrorMessage:(o=c)===null||o===void 0?void 0:o.message}))}})}async delete(e){const n=await this.openDbPromise;return new Promise((r,i)=>{var s;const a=n.transaction([mi],"readwrite").objectStore(mi),l=this.createCompositeKey(e);try{const u=a.delete(l);u.onerror=c=>{i(cc(c,"storage-delete"))},u.onsuccess=()=>{r()}}catch(u){i(Rt.create("storage-delete",{originalErrorMessage:(s=u)===null||s===void 0?void 0:s.message}))}})}createCompositeKey(e){return[this.appId,this.appName,this.namespace,e].join()}}/**
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
 */class Tz{constructor(e){this.storage=e}getLastFetchStatus(){return this.lastFetchStatus}getLastSuccessfulFetchTimestampMillis(){return this.lastSuccessfulFetchTimestampMillis}getActiveConfig(){return this.activeConfig}async loadFromStorage(){const e=this.storage.getLastFetchStatus(),n=this.storage.getLastSuccessfulFetchTimestampMillis(),r=this.storage.getActiveConfig(),i=await e;i&&(this.lastFetchStatus=i);const s=await n;s&&(this.lastSuccessfulFetchTimestampMillis=s);const o=await r;o&&(this.activeConfig=o)}setLastFetchStatus(e){return this.lastFetchStatus=e,this.storage.setLastFetchStatus(e)}setLastSuccessfulFetchTimestampMillis(e){return this.lastSuccessfulFetchTimestampMillis=e,this.storage.setLastSuccessfulFetchTimestampMillis(e)}setActiveConfig(e){return this.activeConfig=e,this.storage.setActiveConfig(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sz(){ln(new Gt(az,t,"PUBLIC").setMultipleInstances(!0)),Le(Df,PE),Le(Df,PE,"esm2017");function t(e,{instanceIdentifier:n}){const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();if(typeof window>"u")throw Rt.create("registration-window");if(!NS())throw Rt.create("indexed-db-unavailable");const{projectId:s,apiKey:o,appId:a}=r.options;if(!s)throw Rt.create("registration-project-id");if(!o)throw Rt.create("registration-api-key");if(!a)throw Rt.create("registration-app-id");n=n||"firebase";const l=new Cz(a,r.name,n),u=new Tz(l),c=new Dl(Df);c.logLevel=ie.ERROR;const h=new dz(i,ni,n,s,o,a),d=new mz(h,l),f=new cz(d,l,u,c),p=new yz(r,f,u,l,c);return uz(p),p}}Sz();var wd={exports:{}},Ed={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iz=E.exports,kz=Symbol.for("react.element"),xz=Symbol.for("react.fragment"),bz=Object.prototype.hasOwnProperty,Nz=Iz.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Rz={key:!0,ref:!0,__self:!0,__source:!0};function rb(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)bz.call(e,r)&&!Rz.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:kz,type:t,key:s,ref:o,props:i,_owner:Nz.current}}Ed.Fragment=xz;Ed.jsx=rb;Ed.jsxs=rb;(function(t){t.exports=Ed})(wd);const Xr=wd.exports.Fragment,A=wd.exports.jsx,un=wd.exports.jsxs;var bm=function(t,e){return bm=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])},bm(t,e)};function vr(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");bm(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}function Az(t,e,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(c){try{u(r.next(c))}catch(h){o(h)}}function l(c){try{u(r.throw(c))}catch(h){o(h)}}function u(c){c.done?s(c.value):i(c.value).then(a,l)}u((r=r.apply(t,e||[])).next())})}function ib(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(u){return function(c){return l([u,c])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=u[0]&2?i.return:u[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,u[1])).done)return s;switch(i=0,s&&(u=[u[0]&2,s.value]),u[0]){case 0:case 1:s=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!s||u[1]>s[0]&&u[1]<s[3])){n.label=u[1];break}if(u[0]===6&&n.label<s[1]){n.label=s[1],s=u;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(u);break}s[2]&&n.ops.pop(),n.trys.pop();continue}u=e.call(t,n)}catch(c){u=[6,c],i=0}finally{r=s=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}function vo(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function yo(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),i,s=[],o;try{for(;(e===void 0||e-- >0)&&!(i=r.next()).done;)s.push(i.value)}catch(a){o={error:a}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(o)throw o.error}}return s}function _o(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}function Ys(t){return this instanceof Ys?(this.v=t,this):new Ys(t)}function Oz(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(t,e||[]),i,s=[];return i={},o("next"),o("throw"),o("return"),i[Symbol.asyncIterator]=function(){return this},i;function o(d){r[d]&&(i[d]=function(f){return new Promise(function(p,y){s.push([d,f,p,y])>1||a(d,f)})})}function a(d,f){try{l(r[d](f))}catch(p){h(s[0][3],p)}}function l(d){d.value instanceof Ys?Promise.resolve(d.value.v).then(u,c):h(s[0][2],d)}function u(d){a("next",d)}function c(d){a("throw",d)}function h(d,f){d(f),s.shift(),s.length&&a(s[0][0],s[0][1])}}function Pz(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=t[Symbol.asyncIterator],n;return e?e.call(t):(t=typeof vo=="function"?vo(t):t[Symbol.iterator](),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(s){n[s]=t[s]&&function(o){return new Promise(function(a,l){o=t[s](o),i(a,l,o.done,o.value)})}}function i(s,o,a,l){Promise.resolve(l).then(function(u){s({value:u,done:a})},o)}}function We(t){return typeof t=="function"}function ky(t){var e=function(r){Error.call(r),r.stack=new Error().stack},n=t(e);return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var Mf=ky(function(t){return function(e){t(this),this.message=e?e.length+` errors occurred during unsubscription:
`+e.map(function(n,r){return r+1+") "+n.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=e}});function Eh(t,e){if(t){var n=t.indexOf(e);0<=n&&t.splice(n,1)}}var lu=function(){function t(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}return t.prototype.unsubscribe=function(){var e,n,r,i,s;if(!this.closed){this.closed=!0;var o=this._parentage;if(o)if(this._parentage=null,Array.isArray(o))try{for(var a=vo(o),l=a.next();!l.done;l=a.next()){var u=l.value;u.remove(this)}}catch(y){e={error:y}}finally{try{l&&!l.done&&(n=a.return)&&n.call(a)}finally{if(e)throw e.error}}else o.remove(this);var c=this.initialTeardown;if(We(c))try{c()}catch(y){s=y instanceof Mf?y.errors:[y]}var h=this._finalizers;if(h){this._finalizers=null;try{for(var d=vo(h),f=d.next();!f.done;f=d.next()){var p=f.value;try{DE(p)}catch(y){s=s!=null?s:[],y instanceof Mf?s=_o(_o([],yo(s)),yo(y.errors)):s.push(y)}}}catch(y){r={error:y}}finally{try{f&&!f.done&&(i=d.return)&&i.call(d)}finally{if(r)throw r.error}}}if(s)throw new Mf(s)}},t.prototype.add=function(e){var n;if(e&&e!==this)if(this.closed)DE(e);else{if(e instanceof t){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(e)}},t.prototype._hasParent=function(e){var n=this._parentage;return n===e||Array.isArray(n)&&n.includes(e)},t.prototype._addParent=function(e){var n=this._parentage;this._parentage=Array.isArray(n)?(n.push(e),n):n?[n,e]:e},t.prototype._removeParent=function(e){var n=this._parentage;n===e?this._parentage=null:Array.isArray(n)&&Eh(n,e)},t.prototype.remove=function(e){var n=this._finalizers;n&&Eh(n,e),e instanceof t&&e._removeParent(this)},t.EMPTY=function(){var e=new t;return e.closed=!0,e}(),t}(),sb=lu.EMPTY;function ob(t){return t instanceof lu||t&&"closed"in t&&We(t.remove)&&We(t.add)&&We(t.unsubscribe)}function DE(t){We(t)?t():t.unsubscribe()}var ab={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},Dz={setTimeout:function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];return setTimeout.apply(void 0,_o([t,e],yo(n)))},clearTimeout:function(t){return clearTimeout(t)},delegate:void 0};function lb(t){Dz.setTimeout(function(){throw t})}function ME(){}function hc(t){t()}var xy=function(t){vr(e,t);function e(n){var r=t.call(this)||this;return r.isStopped=!1,n?(r.destination=n,ob(n)&&n.add(r)):r.destination=Fz,r}return e.create=function(n,r,i){return new Sl(n,r,i)},e.prototype.next=function(n){this.isStopped||this._next(n)},e.prototype.error=function(n){this.isStopped||(this.isStopped=!0,this._error(n))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(n){this.destination.next(n)},e.prototype._error=function(n){try{this.destination.error(n)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e}(lu),Mz=Function.prototype.bind;function Lf(t,e){return Mz.call(t,e)}var Lz=function(){function t(e){this.partialObserver=e}return t.prototype.next=function(e){var n=this.partialObserver;if(n.next)try{n.next(e)}catch(r){Bu(r)}},t.prototype.error=function(e){var n=this.partialObserver;if(n.error)try{n.error(e)}catch(r){Bu(r)}else Bu(e)},t.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(n){Bu(n)}},t}(),Sl=function(t){vr(e,t);function e(n,r,i){var s=t.call(this)||this,o;if(We(n)||!n)o={next:n!=null?n:void 0,error:r!=null?r:void 0,complete:i!=null?i:void 0};else{var a;s&&ab.useDeprecatedNextContext?(a=Object.create(n),a.unsubscribe=function(){return s.unsubscribe()},o={next:n.next&&Lf(n.next,a),error:n.error&&Lf(n.error,a),complete:n.complete&&Lf(n.complete,a)}):o=n}return s.destination=new Lz(o),s}return e}(xy);function Bu(t){lb(t)}function $z(t){throw t}var Fz={closed:!0,next:ME,error:$z,complete:ME},by=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function ub(t){return t}function Uz(t){return t.length===0?ub:t.length===1?t[0]:function(e){return t.reduce(function(n,r){return r(n)},e)}}var It=function(){function t(e){e&&(this._subscribe=e)}return t.prototype.lift=function(e){var n=new t;return n.source=this,n.operator=e,n},t.prototype.subscribe=function(e,n,r){var i=this,s=Bz(e)?e:new Sl(e,n,r);return hc(function(){var o=i,a=o.operator,l=o.source;s.add(a?a.call(s,l):l?i._subscribe(s):i._trySubscribe(s))}),s},t.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(n){e.error(n)}},t.prototype.forEach=function(e,n){var r=this;return n=LE(n),new n(function(i,s){var o=new Sl({next:function(a){try{e(a)}catch(l){s(l),o.unsubscribe()}},error:s,complete:i});r.subscribe(o)})},t.prototype._subscribe=function(e){var n;return(n=this.source)===null||n===void 0?void 0:n.subscribe(e)},t.prototype[by]=function(){return this},t.prototype.pipe=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return Uz(e)(this)},t.prototype.toPromise=function(e){var n=this;return e=LE(e),new e(function(r,i){var s;n.subscribe(function(o){return s=o},function(o){return i(o)},function(){return r(s)})})},t.create=function(e){return new t(e)},t}();function LE(t){var e;return(e=t!=null?t:ab.Promise)!==null&&e!==void 0?e:Promise}function Vz(t){return t&&We(t.next)&&We(t.error)&&We(t.complete)}function Bz(t){return t&&t instanceof xy||Vz(t)&&ob(t)}function jz(t){return We(t==null?void 0:t.lift)}function cs(t){return function(e){if(jz(e))return e.lift(function(n){try{return t(n,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function wo(t,e,n,r,i){return new zz(t,e,n,r,i)}var zz=function(t){vr(e,t);function e(n,r,i,s,o,a){var l=t.call(this,n)||this;return l.onFinalize=o,l.shouldUnsubscribe=a,l._next=r?function(u){try{r(u)}catch(c){n.error(c)}}:t.prototype._next,l._error=s?function(u){try{s(u)}catch(c){n.error(c)}finally{this.unsubscribe()}}:t.prototype._error,l._complete=i?function(){try{i()}catch(u){n.error(u)}finally{this.unsubscribe()}}:t.prototype._complete,l}return e.prototype.unsubscribe=function(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var r=this.closed;t.prototype.unsubscribe.call(this),!r&&((n=this.onFinalize)===null||n===void 0||n.call(this))}},e}(xy),Wz=ky(function(t){return function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),Cd=function(t){vr(e,t);function e(){var n=t.call(this)||this;return n.closed=!1,n.currentObservers=null,n.observers=[],n.isStopped=!1,n.hasError=!1,n.thrownError=null,n}return e.prototype.lift=function(n){var r=new $E(this,this);return r.operator=n,r},e.prototype._throwIfClosed=function(){if(this.closed)throw new Wz},e.prototype.next=function(n){var r=this;hc(function(){var i,s;if(r._throwIfClosed(),!r.isStopped){r.currentObservers||(r.currentObservers=Array.from(r.observers));try{for(var o=vo(r.currentObservers),a=o.next();!a.done;a=o.next()){var l=a.value;l.next(n)}}catch(u){i={error:u}}finally{try{a&&!a.done&&(s=o.return)&&s.call(o)}finally{if(i)throw i.error}}}})},e.prototype.error=function(n){var r=this;hc(function(){if(r._throwIfClosed(),!r.isStopped){r.hasError=r.isStopped=!0,r.thrownError=n;for(var i=r.observers;i.length;)i.shift().error(n)}})},e.prototype.complete=function(){var n=this;hc(function(){if(n._throwIfClosed(),!n.isStopped){n.isStopped=!0;for(var r=n.observers;r.length;)r.shift().complete()}})},e.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(e.prototype,"observed",{get:function(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0},enumerable:!1,configurable:!0}),e.prototype._trySubscribe=function(n){return this._throwIfClosed(),t.prototype._trySubscribe.call(this,n)},e.prototype._subscribe=function(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)},e.prototype._innerSubscribe=function(n){var r=this,i=this,s=i.hasError,o=i.isStopped,a=i.observers;return s||o?sb:(this.currentObservers=null,a.push(n),new lu(function(){r.currentObservers=null,Eh(a,n)}))},e.prototype._checkFinalizedStatuses=function(n){var r=this,i=r.hasError,s=r.thrownError,o=r.isStopped;i?n.error(s):o&&n.complete()},e.prototype.asObservable=function(){var n=new It;return n.source=this,n},e.create=function(n,r){return new $E(n,r)},e}(It),$E=function(t){vr(e,t);function e(n,r){var i=t.call(this)||this;return i.destination=n,i.source=r,i}return e.prototype.next=function(n){var r,i;(i=(r=this.destination)===null||r===void 0?void 0:r.next)===null||i===void 0||i.call(r,n)},e.prototype.error=function(n){var r,i;(i=(r=this.destination)===null||r===void 0?void 0:r.error)===null||i===void 0||i.call(r,n)},e.prototype.complete=function(){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||r===void 0||r.call(n)},e.prototype._subscribe=function(n){var r,i;return(i=(r=this.source)===null||r===void 0?void 0:r.subscribe(n))!==null&&i!==void 0?i:sb},e}(Cd),Ny={now:function(){return(Ny.delegate||Date).now()},delegate:void 0},Hz=function(t){vr(e,t);function e(n,r,i){n===void 0&&(n=1/0),r===void 0&&(r=1/0),i===void 0&&(i=Ny);var s=t.call(this)||this;return s._bufferSize=n,s._windowTime=r,s._timestampProvider=i,s._buffer=[],s._infiniteTimeWindow=!0,s._infiniteTimeWindow=r===1/0,s._bufferSize=Math.max(1,n),s._windowTime=Math.max(1,r),s}return e.prototype.next=function(n){var r=this,i=r.isStopped,s=r._buffer,o=r._infiniteTimeWindow,a=r._timestampProvider,l=r._windowTime;i||(s.push(n),!o&&s.push(a.now()+l)),this._trimBuffer(),t.prototype.next.call(this,n)},e.prototype._subscribe=function(n){this._throwIfClosed(),this._trimBuffer();for(var r=this._innerSubscribe(n),i=this,s=i._infiniteTimeWindow,o=i._buffer,a=o.slice(),l=0;l<a.length&&!n.closed;l+=s?1:2)n.next(a[l]);return this._checkFinalizedStatuses(n),r},e.prototype._trimBuffer=function(){var n=this,r=n._bufferSize,i=n._timestampProvider,s=n._buffer,o=n._infiniteTimeWindow,a=(o?1:2)*r;if(r<1/0&&a<s.length&&s.splice(0,s.length-a),!o){for(var l=i.now(),u=0,c=1;c<s.length&&s[c]<=l;c+=2)u=c;u&&s.splice(0,u+1)}},e}(Cd),qz=function(t){vr(e,t);function e(n,r){return t.call(this)||this}return e.prototype.schedule=function(n,r){return this},e}(lu),Nm={setInterval:function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i=Nm.delegate;return i!=null&&i.setInterval?i.setInterval.apply(i,_o([t,e],yo(n))):setInterval.apply(void 0,_o([t,e],yo(n)))},clearInterval:function(t){return clearInterval(t)},delegate:void 0},Kz=function(t){vr(e,t);function e(n,r){var i=t.call(this,n,r)||this;return i.scheduler=n,i.work=r,i.pending=!1,i}return e.prototype.schedule=function(n,r){if(r===void 0&&(r=0),this.closed)return this;this.state=n;var i=this.id,s=this.scheduler;return i!=null&&(this.id=this.recycleAsyncId(s,i,r)),this.pending=!0,this.delay=r,this.id=this.id||this.requestAsyncId(s,this.id,r),this},e.prototype.requestAsyncId=function(n,r,i){return i===void 0&&(i=0),Nm.setInterval(n.flush.bind(n,this),i)},e.prototype.recycleAsyncId=function(n,r,i){if(i===void 0&&(i=0),i!=null&&this.delay===i&&this.pending===!1)return r;Nm.clearInterval(r)},e.prototype.execute=function(n,r){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var i=this._execute(n,r);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},e.prototype._execute=function(n,r){var i=!1,s;try{this.work(n)}catch(o){i=!0,s=o||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),s},e.prototype.unsubscribe=function(){if(!this.closed){var n=this,r=n.id,i=n.scheduler,s=i.actions;this.work=this.state=this.scheduler=null,this.pending=!1,Eh(s,this),r!=null&&(this.id=this.recycleAsyncId(i,r,null)),this.delay=null,t.prototype.unsubscribe.call(this)}},e}(qz),FE=function(){function t(e,n){n===void 0&&(n=t.now),this.schedulerActionCtor=e,this.now=n}return t.prototype.schedule=function(e,n,r){return n===void 0&&(n=0),new this.schedulerActionCtor(this,e).schedule(r,n)},t.now=Ny.now,t}(),Gz=function(t){vr(e,t);function e(n,r){r===void 0&&(r=FE.now);var i=t.call(this,n,r)||this;return i.actions=[],i._active=!1,i._scheduled=void 0,i}return e.prototype.flush=function(n){var r=this.actions;if(this._active){r.push(n);return}var i;this._active=!0;do if(i=n.execute(n.state,n.delay))break;while(n=r.shift());if(this._active=!1,i){for(;n=r.shift();)n.unsubscribe();throw i}},e}(FE);new Gz(Kz);var Qz=new It(function(t){return t.complete()});function Yz(t){return t?Xz(t):Qz}function Xz(t){return new It(function(e){return t.schedule(function(){return e.complete()})})}function Jz(t){return t&&We(t.schedule)}function Zz(t){return t[t.length-1]}function e3(t){return Jz(Zz(t))?t.pop():void 0}var cb=function(t){return t&&typeof t.length=="number"&&typeof t!="function"};function hb(t){return We(t==null?void 0:t.then)}function db(t){return We(t[by])}function fb(t){return Symbol.asyncIterator&&We(t==null?void 0:t[Symbol.asyncIterator])}function pb(t){return new TypeError("You provided "+(t!==null&&typeof t=="object"?"an invalid object":"'"+t+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function t3(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var mb=t3();function gb(t){return We(t==null?void 0:t[mb])}function vb(t){return Oz(this,arguments,function(){var e,n,r,i;return ib(this,function(s){switch(s.label){case 0:e=t.getReader(),s.label=1;case 1:s.trys.push([1,,9,10]),s.label=2;case 2:return[4,Ys(e.read())];case 3:return n=s.sent(),r=n.value,i=n.done,i?[4,Ys(void 0)]:[3,5];case 4:return[2,s.sent()];case 5:return[4,Ys(r)];case 6:return[4,s.sent()];case 7:return s.sent(),[3,2];case 8:return[3,10];case 9:return e.releaseLock(),[7];case 10:return[2]}})})}function yb(t){return We(t==null?void 0:t.getReader)}function Bo(t){if(t instanceof It)return t;if(t!=null){if(db(t))return n3(t);if(cb(t))return r3(t);if(hb(t))return i3(t);if(fb(t))return _b(t);if(gb(t))return s3(t);if(yb(t))return o3(t)}throw pb(t)}function n3(t){return new It(function(e){var n=t[by]();if(We(n.subscribe))return n.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function r3(t){return new It(function(e){for(var n=0;n<t.length&&!e.closed;n++)e.next(t[n]);e.complete()})}function i3(t){return new It(function(e){t.then(function(n){e.closed||(e.next(n),e.complete())},function(n){return e.error(n)}).then(null,lb)})}function s3(t){return new It(function(e){var n,r;try{for(var i=vo(t),s=i.next();!s.done;s=i.next()){var o=s.value;if(e.next(o),e.closed)return}}catch(a){n={error:a}}finally{try{s&&!s.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}e.complete()})}function _b(t){return new It(function(e){a3(t,e).catch(function(n){return e.error(n)})})}function o3(t){return _b(vb(t))}function a3(t,e){var n,r,i,s;return Az(this,void 0,void 0,function(){var o,a;return ib(this,function(l){switch(l.label){case 0:l.trys.push([0,5,6,11]),n=Pz(t),l.label=1;case 1:return[4,n.next()];case 2:if(r=l.sent(),!!r.done)return[3,4];if(o=r.value,e.next(o),e.closed)return[2];l.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return a=l.sent(),i={error:a},[3,11];case 6:return l.trys.push([6,,9,10]),r&&!r.done&&(s=n.return)?[4,s.call(n)]:[3,8];case 7:l.sent(),l.label=8;case 8:return[3,10];case 9:if(i)throw i.error;return[7];case 10:return[7];case 11:return e.complete(),[2]}})})}function Pi(t,e,n,r,i){r===void 0&&(r=0),i===void 0&&(i=!1);var s=e.schedule(function(){n(),i?t.add(this.schedule(null,r)):this.unsubscribe()},r);if(t.add(s),!i)return s}function wb(t,e){return e===void 0&&(e=0),cs(function(n,r){n.subscribe(wo(r,function(i){return Pi(r,t,function(){return r.next(i)},e)},function(){return Pi(r,t,function(){return r.complete()},e)},function(i){return Pi(r,t,function(){return r.error(i)},e)}))})}function Eb(t,e){return e===void 0&&(e=0),cs(function(n,r){r.add(t.schedule(function(){return n.subscribe(r)},e))})}function l3(t,e){return Bo(t).pipe(Eb(e),wb(e))}function u3(t,e){return Bo(t).pipe(Eb(e),wb(e))}function c3(t,e){return new It(function(n){var r=0;return e.schedule(function(){r===t.length?n.complete():(n.next(t[r++]),n.closed||this.schedule())})})}function h3(t,e){return new It(function(n){var r;return Pi(n,e,function(){r=t[mb](),Pi(n,e,function(){var i,s,o;try{i=r.next(),s=i.value,o=i.done}catch(a){n.error(a);return}o?n.complete():n.next(s)},0,!0)}),function(){return We(r==null?void 0:r.return)&&r.return()}})}function Cb(t,e){if(!t)throw new Error("Iterable cannot be null");return new It(function(n){Pi(n,e,function(){var r=t[Symbol.asyncIterator]();Pi(n,e,function(){r.next().then(function(i){i.done?n.complete():n.next(i.value)})},0,!0)})})}function d3(t,e){return Cb(vb(t),e)}function f3(t,e){if(t!=null){if(db(t))return l3(t,e);if(cb(t))return c3(t,e);if(hb(t))return u3(t,e);if(fb(t))return Cb(t,e);if(gb(t))return h3(t,e);if(yb(t))return d3(t,e)}throw pb(t)}function Tb(t,e){return e?f3(t,e):Bo(t)}function UE(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=e3(t);return Tb(t,n)}ky(function(t){return function(){t(this),this.name="EmptyError",this.message="no elements in sequence"}});function Ry(t,e){return cs(function(n,r){var i=0;n.subscribe(wo(r,function(s){r.next(t.call(e,s,i++))}))})}function Sb(t){return cs(function(e,n){var r=null,i=!1,s;r=e.subscribe(wo(n,void 0,void 0,function(o){s=Bo(t(o,Sb(t)(e))),r?(r.unsubscribe(),r=null,s.subscribe(n)):i=!0})),i&&(r.unsubscribe(),r=null,s.subscribe(n))})}function p3(t){t===void 0&&(t={});var e=t.connector,n=e===void 0?function(){return new Cd}:e,r=t.resetOnError,i=r===void 0?!0:r,s=t.resetOnComplete,o=s===void 0?!0:s,a=t.resetOnRefCountZero,l=a===void 0?!0:a;return function(u){var c,h,d,f=0,p=!1,y=!1,w=function(){h==null||h.unsubscribe(),h=void 0},g=function(){w(),c=d=void 0,p=y=!1},m=function(){var v=c;g(),v==null||v.unsubscribe()};return cs(function(v,_){f++,!y&&!p&&w();var C=d=d!=null?d:n();_.add(function(){f--,f===0&&!y&&!p&&(h=$f(m,l))}),C.subscribe(_),!c&&f>0&&(c=new Sl({next:function(T){return C.next(T)},error:function(T){y=!0,w(),h=$f(g,i,T),C.error(T)},complete:function(){p=!0,w(),h=$f(g,o),C.complete()}}),Bo(v).subscribe(c))})(u)}}function $f(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(e===!0){t();return}if(e!==!1){var i=new Sl({next:function(){i.unsubscribe(),t()}});return e.apply(void 0,_o([],yo(n))).subscribe(i)}}function m3(t,e,n){var r,i,s,o,a=!1;return t&&typeof t=="object"?(r=t.bufferSize,o=r===void 0?1/0:r,i=t.windowTime,e=i===void 0?1/0:i,s=t.refCount,a=s===void 0?!1:s,n=t.scheduler):o=t!=null?t:1/0,p3({connector:function(){return new Hz(o,e,n)},resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:a})}function g3(t,e){return cs(function(n,r){var i=null,s=0,o=!1,a=function(){return o&&!i&&r.complete()};n.subscribe(wo(r,function(l){i==null||i.unsubscribe();var u=0,c=s++;Bo(t(l,c)).subscribe(i=wo(r,function(h){return r.next(e?e(l,h,c,u++):h)},function(){i=null,a()}))},function(){o=!0,a()}))})}function v3(t,e,n){var r=We(t)||e||n?{next:t,error:e,complete:n}:t;return r?cs(function(i,s){var o;(o=r.subscribe)===null||o===void 0||o.call(r);var a=!0;i.subscribe(wo(s,function(l){var u;(u=r.next)===null||u===void 0||u.call(r,l),s.next(l)},function(){var l;a=!1,(l=r.complete)===null||l===void 0||l.call(r),s.complete()},function(l){var u;a=!1,(u=r.error)===null||u===void 0||u.call(r,l),s.error(l)},function(){var l,u;a&&((l=r.unsubscribe)===null||l===void 0||l.call(r)),(u=r.finalize)===null||u===void 0||u.call(r)}))}):ub}function Ib(t){return new It(function(e){var n=tD(t,e.next.bind(e),e.error.bind(e),e.complete.bind(e));return{unsubscribe:n}})}const y3="[DEFAULT]",kb=E.exports.createContext(void 0),xb=E.exports.createContext(!1),_3="4.2.2",w3=(t,e)=>t===e||[...Object.keys(t),...Object.keys(e)].every(n=>t[n]===e[n]);function E3(t){const{firebaseConfig:e,appName:n,suspense:r}=t,i=E.exports.useMemo(()=>{if(t.firebaseApp)return t.firebaseApp;const s=pP().find(o=>o.name===(n||y3));if(s){if(e&&w3(s.options,e))return s;throw new Error(`Does not match the options already provided to the ${n||"default"} firebase app instance, give this new instance a different appName.`)}else{if(!e)throw new Error("No firebaseConfig provided");const o=E.exports.version||"unknown";return Le("react",o),Le("reactfire",_3),fP(e,n)}},[t.firebaseApp,e,n]);return E.exports.createElement(kb.Provider,{value:i},A(xb.Provider,{...Object.assign({value:r!=null?r:!1},t)}))}function C3(t){let e=E.exports.useContext(xb);return t!==void 0?t:e}function bb(){const t=E.exports.useContext(kb);if(!t)throw new Error("Cannot call useFirebaseApp unless your component is within a FirebaseAppProvider");return t}function Nb(t){var e;const n=Py(),r=`auth:user:${n.name}`,i=Ib(n),s=(e=Object.assign({},t))!==null&&e!==void 0?e:{};return n.currentUser!==void 0&&(s.initialData=n.currentUser,s.startWithValue=n.currentUser),Ay(r,i,s)}function Rb(t){if((t==null?void 0:t.hasOwnProperty("requiredClaims"))&&(t==null?void 0:t.hasOwnProperty("validateCustomClaims")))throw new Error('Cannot have both "requiredClaims" and "validateCustomClaims". Use one or the other.');const e=Py();let n=`auth:signInCheck:${e.name}::forceRefresh:${!!(t!=null&&t.forceRefresh)}`;t!=null&&t.forceRefresh&&(n=`${n}:forceRefresh:${t.forceRefresh}`),t!=null&&t.hasOwnProperty("requiredClaims")?n=`${n}:requiredClaims:${JSON.stringify(t.requiredClaims)}`:t!=null&&t.hasOwnProperty("validateCustomClaims")&&(n=`${n}:validateCustomClaims:${JSON.stringify(t.validateCustomClaims)}`);const r=Ib(e).pipe(g3(i=>{var s;return i?t&&(t.hasOwnProperty("requiredClaims")||t.hasOwnProperty("validateCustomClaims"))?Tb(i.getIdTokenResult((s=t==null?void 0:t.forceRefresh)!==null&&s!==void 0?s:!1)).pipe(Ry(o=>{let a;t.hasOwnProperty("requiredClaims")?a=T3(t.requiredClaims):a=t.validateCustomClaims;const{hasRequiredClaims:l,errors:u}=a(o.claims);return{signedIn:!0,hasRequiredClaims:l,errors:u,user:i}})):UE({signedIn:!0,hasRequiredClaims:!0,errors:{},user:i}):UE({signedIn:!1,hasRequiredClaims:!1,errors:{},user:null})}));return Ay(n,r)}function T3(t){return function(e){const n={};return Object.keys(t).forEach(r=>{t[r]!==e[r]&&(n[r]=[new Dy("auth/missing-claim",`Expected "${t[r]}", but user has "${e[r]}" instead`)])}),{hasRequiredClaims:Object.keys(n).length===0,errors:n}}}/**
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
 */var ci,gi;(function(t){t.added="child_added",t.removed="child_removed",t.changed="child_changed",t.moved="child_moved",t.value="value"})(gi||(gi={}));Object.freeze((ci={},ci[gi.added]=dF,ci[gi.removed]=mF,ci[gi.changed]=fF,ci[gi.moved]=pF,ci[gi.value]=hF,ci));const S3=globalThis._reactFireDatabaseCachedQueries||[];globalThis._reactFireDatabaseCachedQueries||(globalThis._reactFireDatabaseCachedQueries=S3);/**
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
 */var I3={includeMetadataChanges:!1};function k3(t,e){return e===void 0&&(e=I3),new It(function(n){var r=VB(t,e,{next:n.next.bind(n),error:n.error.bind(n),complete:n.complete.bind(n)});return{unsubscribe:r}})}function x3(t,e){e===void 0&&(e={});var n=t.data();return!t.exists()||typeof n!="object"||n===null||e.idField&&(n[e.idField]=t.id),n}function b3(t){return k3(t,{includeMetadataChanges:!0}).pipe(Ry(function(e){return e.docs}))}function N3(t,e){return e===void 0&&(e={}),b3(t).pipe(Ry(function(n){return n.map(function(r){return x3(r,e)})}))}class R3 extends Cd{constructor(e,n){super(),this._timeoutWindow=n,this._hasValue=!1,this._error=void 0,this._firstEmission=new Promise(r=>this._resolveFirstEmission=r),this._innerObservable=e.pipe(v3({next:r=>{this._next(r)},error:r=>{this._error=r,this._resolveFirstEmission()}}),Sb(()=>Yz()),m3(1)),this._warmupSubscription=this._innerObservable.subscribe(),this._timeoutHandler=setTimeout(this._reset.bind(this),this._timeoutWindow)}get hasValue(){return this._hasValue||!!this._error}get value(){if(this._error)throw this._error;if(!this.hasValue)throw Error("Can only get value if SuspenseSubject has a value");return this._value}get firstEmission(){return this._firstEmission}_next(e){this._hasValue=!0,this._value=e,this._resolveFirstEmission()}_reset(){this._warmupSubscription&&this._warmupSubscription.unsubscribe(),this._hasValue=!1,this._value=void 0,this._error=void 0,this._firstEmission=new Promise(e=>this._resolveFirstEmission=e)}_subscribe(e){return this._timeoutHandler&&clearTimeout(this._timeoutHandler),this._innerSubscriber=this._innerObservable.subscribe(e),this._innerSubscriber}get ourError(){return this._error}}const A3=3e4,dc=globalThis._reactFirePreloadedObservables||new Map;globalThis._reactFirePreloadedObservables||(globalThis._reactFirePreloadedObservables=dc);function O3(t,e){if(dc.has(e))return dc.get(e);{const n=new R3(t,A3);return dc.set(e,n),n}}function P3(t){return function(e,n){const r=Object.assign(Object.assign({},e),{hasEmitted:e.hasEmitted||t.hasValue,error:t.ourError,firstValuePromise:t.firstEmission});switch(t.hasValue&&(r.data=t.value),n){case"value":return r.status="success",r;case"error":return r.status="error",r;case"complete":return r.isComplete=!0,r;default:throw new Error(`invalid action "${n}"`)}}}function Ay(t,e,n={}){var r;if(!t)throw new Error("cannot call useObservable without an observableId");const i=O3(e,t),s=n.hasOwnProperty("initialData")||n.hasOwnProperty("startWithValue"),o=i.hasValue||s;if(C3(n.suspense)===!0&&!o)throw i.firstEmission;const a={status:o?"success":"loading",hasEmitted:o,isComplete:!1,data:i.hasValue?i.value:(r=n==null?void 0:n.initialData)!==null&&r!==void 0?r:n==null?void 0:n.startWithValue,error:i.ourError,firstValuePromise:i.firstEmission},[l,u]=E.exports.useReducer(P3(i),a);return E.exports.useEffect(()=>{const c=i.subscribe({next:()=>{u("value")},error:h=>{throw u("error"),h},complete:()=>{u("complete")}});return()=>c.unsubscribe()},[i]),l}const Rm=globalThis._reactFireFirestoreQueryCache||[];globalThis._reactFireFirestoreQueryCache||(globalThis._reactFireFirestoreQueryCache=Rm);function D3(t){const e=Rm.findIndex(n=>mB(n,t));return e>-1?e:Rm.push(t)-1}function M3(t,e){const n=e?B3(e):"NO_ID_FIELD",r=`firestore:collectionData:${D3(t)}:idField=${n}`,i=N3(t,{idField:n});return Ay(r,i,e)}E.exports.createContext(void 0);const Ab=E.exports.createContext(void 0);E.exports.createContext(void 0);const L3=E.exports.createContext(void 0),Ob=E.exports.createContext(void 0);E.exports.createContext(void 0);E.exports.createContext(void 0);E.exports.createContext(void 0);E.exports.createContext(void 0);function Oy(t){return function(e){var n,r;if(!e.sdk)throw new Error("no sdk provided");const i=bb().name;if(((r=(n=e==null?void 0:e.sdk)===null||n===void 0?void 0:n.app)===null||r===void 0?void 0:r.name)!==i)throw new Error("sdk was initialized with a different firebase app");return E.exports.createElement(t.Provider,Object.assign({value:e.sdk},e))}}function Pb(t){const e=E.exports.useContext(t);if(!e)throw new Error("SDK not found. useSdk must be called from within a provider");return e}const $3=Oy(Ab),F3=Oy(L3),U3=Oy(Ob),Py=()=>Pb(Ab),Db=()=>Pb(Ob);class Dy extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name="ReactFireError",Object.setPrototypeOf(this,Dy.prototype)}}function V3(t,e){if(e==="idField"||e==="initialData"||e==="suspense")return t?t[e]:void 0;throw new Error(`Field "${e}" is not a valid key in ReactFireOptions`)}function B3(t){return V3(t,"idField")}var Mb={exports:{}};/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var s=arguments[i];if(!!s){var o=typeof s;if(o==="string"||o==="number")r.push(s);else if(Array.isArray(s)){if(s.length){var a=n.apply(null,s);a&&r.push(a)}}else if(o==="object")if(s.toString===Object.prototype.toString)for(var l in s)e.call(s,l)&&s[l]&&r.push(l);else r.push(s.toString())}}return r.join(" ")}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(Mb);const Oe=Mb.exports,j3=["as","disabled"];function z3(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function W3(t){return!t||t.trim()==="#"}function My({tagName:t,disabled:e,href:n,target:r,rel:i,role:s,onClick:o,tabIndex:a=0,type:l}){t||(n!=null||r!=null||i!=null?t="a":t="button");const u={tagName:t};if(t==="button")return[{type:l||"button",disabled:e},u];const c=d=>{if((e||t==="a"&&W3(n))&&d.preventDefault(),e){d.stopPropagation();return}o==null||o(d)},h=d=>{d.key===" "&&(d.preventDefault(),c(d))};return t==="a"&&(n||(n="#"),e&&(n=void 0)),[{role:s!=null?s:"button",disabled:void 0,tabIndex:e?void 0:a,href:n,target:t==="a"?r:void 0,"aria-disabled":e||void 0,rel:t==="a"?i:void 0,onClick:c,onKeyDown:h},u]}const Ly=E.exports.forwardRef((t,e)=>{let{as:n,disabled:r}=t,i=z3(t,j3);const[s,{tagName:o}]=My(Object.assign({tagName:n,disabled:r},i));return A(o,Object.assign({},i,s,{ref:e}))});Ly.displayName="Button";const H3=["xxl","xl","lg","md","sm","xs"],q3="xs",Lb=E.exports.createContext({prefixes:{},breakpoints:H3,minBreakpoint:q3});function ht(t,e){const{prefixes:n}=E.exports.useContext(Lb);return t||n[e]||e}function K3(){const{dir:t}=E.exports.useContext(Lb);return t==="rtl"}const G3={variant:"primary",active:!1,disabled:!1},Eo=E.exports.forwardRef(({as:t,bsPrefix:e,variant:n,size:r,active:i,className:s,...o},a)=>{const l=ht(e,"btn"),[u,{tagName:c}]=My({tagName:t,...o});return A(c,{...u,...o,ref:a,className:Oe(s,l,i&&"active",n&&`${l}-${n}`,r&&`${l}-${r}`,o.href&&o.disabled&&"disabled")})});Eo.displayName="Button";Eo.defaultProps=G3;function Q3({messagesCollection:t}){const[e,n]=E.exports.useState(""),{data:r}=Nb(),{uid:i,displayName:s,photoURL:o}=r;return un("form",{onSubmit:u=>{u.preventDefault();const c=e.trim();c&&(UB(t,{text:c,createdAt:jB(),uid:i,displayName:s,photoURL:o}),n(""))},children:[A("input",{value:e,onChange:u=>{n(u.target.value)},placeholder:"Type your message here..."}),A(Eo,{variant:"outline-danger",disabled:!e,children:"Send"})]})}const Y3=new Intl.DateTimeFormat("en-GB",{hour:"numeric",minute:"numeric",second:"numeric",hour12:!1});function X3({createdAt:t,text:e,displayName:n,id:r,uid:i}){const{data:s}=Nb(),o=Db();return un("div",{children:["[",t!=null&&t.seconds?A("span",{children:Y3.format(new Date(t.seconds*1e3))}):null,"]"," ",un("strong",{children:["<",n||null,">"]})," ",e,i===s.uid?A("button",{onClick:async()=>{await FB(Tx(o,"messages",r))},children:"Poista"}):null]})}function J3({messages:t}){return A("pre",{children:t==null?void 0:t.map(e=>A(X3,{...e},e.id))})}function Z3(){const t=Db(),e=pB(t,"messages"),n=RB(e,OB("createdAt"),DB(100)),{status:r,data:i}=M3(n,{idField:"id"});return un("div",{children:[r==="loading"?A("span",{children:"loading..."}):A(J3,{messages:i}),A(Q3,{messagesCollection:e})]})}const e4={fluid:!1},$y=E.exports.forwardRef(({bsPrefix:t,fluid:e,as:n="div",className:r,...i},s)=>{const o=ht(t,"container"),a=typeof e=="string"?`-${e}`:"-fluid";return A(n,{ref:s,...i,className:Oe(r,e?`${o}${a}`:o)})});$y.displayName="Container";$y.defaultProps=e4;var VE={exports:{}},Am={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){function i(o,a,l,u,c,h){var d=u||"<<anonymous>>",f=h||l;if(a[l]==null)return o?new Error("Required "+c+" `"+f+"` was not specified "+("in `"+d+"`.")):null;for(var p=arguments.length,y=Array(p>6?p-6:0),w=6;w<p;w++)y[w-6]=arguments[w];return r.apply(void 0,[a,l,d,c,f].concat(y))}var s=i.bind(null,!1);return s.isRequired=i.bind(null,!0),s}t.exports=e.default})(Am,Am.exports);(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var n=Am.exports,r=i(n);function i(o){return o&&o.__esModule?o:{default:o}}function s(){for(var o=arguments.length,a=Array(o),l=0;l<o;l++)a[l]=arguments[l];function u(){for(var c=arguments.length,h=Array(c),d=0;d<c;d++)h[d]=arguments[d];var f=null;return a.forEach(function(p){if(f==null){var y=p.apply(void 0,h);y!=null&&(f=y)}}),f}return(0,r.default)(u)}t.exports=e.default})(VE,VE.exports);function Om(){return Om=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Om.apply(this,arguments)}function $b(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function BE(t){return"default"+t.charAt(0).toUpperCase()+t.substr(1)}function t4(t){var e=n4(t,"string");return typeof e=="symbol"?e:String(e)}function n4(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Fb(t,e,n){var r=E.exports.useRef(t!==void 0),i=E.exports.useState(e),s=i[0],o=i[1],a=t!==void 0,l=r.current;return r.current=a,!a&&l&&s!==e&&o(e),[a?t:s,E.exports.useCallback(function(u){for(var c=arguments.length,h=new Array(c>1?c-1:0),d=1;d<c;d++)h[d-1]=arguments[d];n&&n.apply(void 0,[u].concat(h)),o(u)},[n])]}function Fy(t,e){return Object.keys(e).reduce(function(n,r){var i,s=n,o=s[BE(r)],a=s[r],l=$b(s,[BE(r),r].map(t4)),u=e[r],c=Fb(a,o,t[u]),h=c[0],d=c[1];return Om({},l,(i={},i[r]=h,i[u]=d,i))},t)}function Pm(t,e){return Pm=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Pm(t,e)}function r4(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Pm(t,e)}var i4=Function.prototype.bind.call(Function.prototype.call,[].slice);function Hn(t,e){return i4(t.querySelectorAll(e))}function Ub(){var t=E.exports.useReducer(function(n){return!n},!1),e=t[1];return e}var jE=function(e){return!e||typeof e=="function"?e:function(n){e.current=n}};function s4(t,e){var n=jE(t),r=jE(e);return function(i){n&&n(i),r&&r(i)}}function Td(t,e){return E.exports.useMemo(function(){return s4(t,e)},[t,e])}const Sd=E.exports.createContext(null);Sd.displayName="NavContext";const es=E.exports.createContext(null),Il=(t,e=null)=>t!=null?String(t):e||null,Vb=E.exports.createContext(null),o4="data-rr-ui-",a4="rrUi";function jo(t){return`${o4}${t}`}function l4(t){return`${a4}${t}`}function u4(t){var e=E.exports.useRef(t);return E.exports.useEffect(function(){e.current=t},[t]),e}function Xe(t){var e=u4(t);return E.exports.useCallback(function(){return e.current&&e.current.apply(e,arguments)},[e])}const c4=["as","active","eventKey"];function h4(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Bb({key:t,onClick:e,active:n,id:r,role:i,disabled:s}){const o=E.exports.useContext(es),a=E.exports.useContext(Sd),l=E.exports.useContext(Vb);let u=n;const c={role:i};if(a){!i&&a.role==="tablist"&&(c.role="tab");const h=a.getControllerId(t!=null?t:null),d=a.getControlledId(t!=null?t:null);c[jo("event-key")]=t,c.id=h||r,u=n==null&&t!=null?a.activeKey===t:n,(u||!(l!=null&&l.unmountOnExit)&&!(l!=null&&l.mountOnEnter))&&(c["aria-controls"]=d)}return c.role==="tab"&&(c["aria-selected"]=u,u||(c.tabIndex=-1),s&&(c.tabIndex=-1,c["aria-disabled"]=!0)),c.onClick=Xe(h=>{s||(e==null||e(h),t!=null&&o&&!h.isPropagationStopped()&&o(t,h))}),[c,{isActive:u}]}const jb=E.exports.forwardRef((t,e)=>{let{as:n=Ly,active:r,eventKey:i}=t,s=h4(t,c4);const[o,a]=Bb(Object.assign({key:Il(i,s.href),active:r},s));return o[jo("active")]=a.isActive,A(n,Object.assign({},s,o,{ref:e}))});jb.displayName="NavItem";const d4=["as","onSelect","activeKey","role","onKeyDown"];function f4(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}const zE=()=>{},WE=jo("event-key"),zb=E.exports.forwardRef((t,e)=>{let{as:n="div",onSelect:r,activeKey:i,role:s,onKeyDown:o}=t,a=f4(t,d4);const l=Ub(),u=E.exports.useRef(!1),c=E.exports.useContext(es),h=E.exports.useContext(Vb);let d,f;h&&(s=s||"tablist",i=h.activeKey,d=h.getControlledId,f=h.getControllerId);const p=E.exports.useRef(null),y=v=>{const _=p.current;if(!_)return null;const C=Hn(_,`[${WE}]:not([aria-disabled=true])`),T=_.querySelector("[aria-selected=true]");if(!T||T!==document.activeElement)return null;const S=C.indexOf(T);if(S===-1)return null;let I=S+v;return I>=C.length&&(I=0),I<0&&(I=C.length-1),C[I]},w=(v,_)=>{v!=null&&(r==null||r(v,_),c==null||c(v,_))},g=v=>{if(o==null||o(v),!h)return;let _;switch(v.key){case"ArrowLeft":case"ArrowUp":_=y(-1);break;case"ArrowRight":case"ArrowDown":_=y(1);break;default:return}!_||(v.preventDefault(),w(_.dataset[l4("EventKey")]||null,v),u.current=!0,l())};E.exports.useEffect(()=>{if(p.current&&u.current){const v=p.current.querySelector(`[${WE}][aria-selected=true]`);v==null||v.focus()}u.current=!1});const m=Td(e,p);return A(es.Provider,{value:w,children:A(Sd.Provider,{value:{role:s,activeKey:Il(i),getControlledId:d||zE,getControllerId:f||zE},children:A(n,Object.assign({},a,{onKeyDown:g,ref:m,role:s}))})})});zb.displayName="Nav";const p4=Object.assign(zb,{Item:jb}),si=E.exports.createContext(null);si.displayName="NavbarContext";const Wb=E.exports.createContext(null);Wb.displayName="CardHeaderContext";var m4=/-(.)/g;function g4(t){return t.replace(m4,function(e,n){return n.toUpperCase()})}const v4=t=>t[0].toUpperCase()+g4(t).slice(1);function hs(t,{displayName:e=v4(t),Component:n,defaultProps:r}={}){const i=E.exports.forwardRef(({className:s,bsPrefix:o,as:a=n||"div",...l},u)=>{const c=ht(o,t);return A(a,{ref:u,className:Oe(s,c),...l})});return i.defaultProps=r,i.displayName=e,i}const y4=hs("nav-item");function _4(){return E.exports.useState(null)}function w4(t,e,n,r){r===void 0&&(r=!1);var i=Xe(n);E.exports.useEffect(function(){var s=typeof t=="function"?t():t;return s.addEventListener(e,i,r),function(){return s.removeEventListener(e,i,r)}},[t])}function Hb(){var t=E.exports.useRef(!0),e=E.exports.useRef(function(){return t.current});return E.exports.useEffect(function(){return t.current=!0,function(){t.current=!1}},[]),e.current}function qb(t){var e=E.exports.useRef(null);return E.exports.useEffect(function(){e.current=t}),e.current}var E4=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",C4=typeof document<"u";const Kb=C4||E4?E.exports.useLayoutEffect:E.exports.useEffect,T4=["onKeyDown"];function S4(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function I4(t){return!t||t.trim()==="#"}const Uy=E.exports.forwardRef((t,e)=>{let{onKeyDown:n}=t,r=S4(t,T4);const[i]=My(Object.assign({tagName:"a"},r)),s=Xe(o=>{i.onKeyDown(o),n==null||n(o)});return I4(r.href)||r.role==="button"?A("a",Object.assign({ref:e},r,i,{onKeyDown:s})):A("a",Object.assign({ref:e},r,{onKeyDown:n}))});Uy.displayName="Anchor";const k4={disabled:!1},Id=E.exports.forwardRef(({bsPrefix:t,className:e,as:n=Uy,active:r,eventKey:i,...s},o)=>{t=ht(t,"nav-link");const[a,l]=Bb({key:Il(i,s.href),active:r,...s});return A(n,{...s,...a,ref:o,className:Oe(e,t,s.disabled&&"disabled",l.isActive&&"active")})});Id.displayName="NavLink";Id.defaultProps=k4;const x4={justify:!1,fill:!1},Vy=E.exports.forwardRef((t,e)=>{const{as:n="div",bsPrefix:r,variant:i,fill:s,justify:o,navbar:a,navbarScroll:l,className:u,activeKey:c,...h}=Fy(t,{activeKey:"onSelect"}),d=ht(r,"nav");let f,p,y=!1;const w=E.exports.useContext(si),g=E.exports.useContext(Wb);return w?(f=w.bsPrefix,y=a==null?!0:a):g&&({cardHeaderBsPrefix:p}=g),A(p4,{as:n,ref:e,activeKey:c,className:Oe(u,{[d]:!y,[`${f}-nav`]:y,[`${f}-nav-scroll`]:y&&l,[`${p}-${i}`]:!!p,[`${d}-${i}`]:!!i,[`${d}-fill`]:s,[`${d}-justified`]:o}),...h})});Vy.displayName="Nav";Vy.defaultProps=x4;Object.assign(Vy,{Item:y4,Link:Id});const Gb=E.exports.forwardRef(({bsPrefix:t,className:e,as:n,...r},i)=>{t=ht(t,"navbar-brand");const s=n||(r.href?"a":"span");return A(s,{...r,ref:i,className:Oe(e,t)})});Gb.displayName="NavbarBrand";function kd(t){return t&&t.ownerDocument||document}function b4(t){var e=kd(t);return e&&e.defaultView||window}function N4(t,e){return b4(t).getComputedStyle(t,e)}var R4=/([A-Z])/g;function A4(t){return t.replace(R4,"-$1").toLowerCase()}var O4=/^ms-/;function ju(t){return A4(t).replace(O4,"-ms-")}var P4=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function D4(t){return!!(t&&P4.test(t))}function rr(t,e){var n="",r="";if(typeof e=="string")return t.style.getPropertyValue(ju(e))||N4(t).getPropertyValue(ju(e));Object.keys(e).forEach(function(i){var s=e[i];!s&&s!==0?t.style.removeProperty(ju(i)):D4(i)?r+=i+"("+s+") ":n+=ju(i)+": "+s+";"}),r&&(n+="transform: "+r+";"),t.style.cssText+=";"+n}var Jt={exports:{}},M4="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",L4=M4,$4=L4;function Qb(){}function Yb(){}Yb.resetWarningCache=Qb;var F4=function(){function t(r,i,s,o,a,l){if(l!==$4){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Yb,resetWarningCache:Qb};return n.PropTypes=n,n};Jt.exports=F4();const HE={disabled:!1},Xb=Rn.createContext(null);var U4=function(e){return e.scrollTop},ha="unmounted",Tr="exited",yn="entering",Kn="entered",kl="exiting",yr=function(t){r4(e,t);function e(r,i){var s;s=t.call(this,r,i)||this;var o=i,a=o&&!o.isMounting?r.enter:r.appear,l;return s.appearStatus=null,r.in?a?(l=Tr,s.appearStatus=yn):l=Kn:r.unmountOnExit||r.mountOnEnter?l=ha:l=Tr,s.state={status:l},s.nextCallback=null,s}e.getDerivedStateFromProps=function(i,s){var o=i.in;return o&&s.status===ha?{status:Tr}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(i){var s=null;if(i!==this.props){var o=this.state.status;this.props.in?o!==yn&&o!==Kn&&(s=yn):(o===yn||o===Kn)&&(s=kl)}this.updateStatus(!1,s)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var i=this.props.timeout,s,o,a;return s=o=a=i,i!=null&&typeof i!="number"&&(s=i.exit,o=i.enter,a=i.appear!==void 0?i.appear:o),{exit:s,enter:o,appear:a}},n.updateStatus=function(i,s){if(i===void 0&&(i=!1),s!==null)if(this.cancelNextCallback(),s===yn){if(this.props.unmountOnExit||this.props.mountOnEnter){var o=this.props.nodeRef?this.props.nodeRef.current:As.findDOMNode(this);o&&U4(o)}this.performEnter(i)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Tr&&this.setState({status:ha})},n.performEnter=function(i){var s=this,o=this.props.enter,a=this.context?this.context.isMounting:i,l=this.props.nodeRef?[a]:[As.findDOMNode(this),a],u=l[0],c=l[1],h=this.getTimeouts(),d=a?h.appear:h.enter;if(!i&&!o||HE.disabled){this.safeSetState({status:Kn},function(){s.props.onEntered(u)});return}this.props.onEnter(u,c),this.safeSetState({status:yn},function(){s.props.onEntering(u,c),s.onTransitionEnd(d,function(){s.safeSetState({status:Kn},function(){s.props.onEntered(u,c)})})})},n.performExit=function(){var i=this,s=this.props.exit,o=this.getTimeouts(),a=this.props.nodeRef?void 0:As.findDOMNode(this);if(!s||HE.disabled){this.safeSetState({status:Tr},function(){i.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:kl},function(){i.props.onExiting(a),i.onTransitionEnd(o.exit,function(){i.safeSetState({status:Tr},function(){i.props.onExited(a)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(i,s){s=this.setNextCallback(s),this.setState(i,s)},n.setNextCallback=function(i){var s=this,o=!0;return this.nextCallback=function(a){o&&(o=!1,s.nextCallback=null,i(a))},this.nextCallback.cancel=function(){o=!1},this.nextCallback},n.onTransitionEnd=function(i,s){this.setNextCallback(s);var o=this.props.nodeRef?this.props.nodeRef.current:As.findDOMNode(this),a=i==null&&!this.props.addEndListener;if(!o||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[o,this.nextCallback],u=l[0],c=l[1];this.props.addEndListener(u,c)}i!=null&&setTimeout(this.nextCallback,i)},n.render=function(){var i=this.state.status;if(i===ha)return null;var s=this.props,o=s.children;s.in,s.mountOnEnter,s.unmountOnExit,s.appear,s.enter,s.exit,s.timeout,s.addEndListener,s.onEnter,s.onEntering,s.onEntered,s.onExit,s.onExiting,s.onExited,s.nodeRef;var a=$b(s,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return A(Xb.Provider,{value:null,children:typeof o=="function"?o(i,a):Rn.cloneElement(Rn.Children.only(o),a)})},e}(Rn.Component);yr.contextType=Xb;yr.propTypes={};function gs(){}yr.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:gs,onEntering:gs,onEntered:gs,onExit:gs,onExiting:gs,onExited:gs};yr.UNMOUNTED=ha;yr.EXITED=Tr;yr.ENTERING=yn;yr.ENTERED=Kn;yr.EXITING=kl;const xd=!!(typeof window<"u"&&window.document&&window.document.createElement);var Dm=!1,Mm=!1;try{var Ff={get passive(){return Dm=!0},get once(){return Mm=Dm=!0}};xd&&(window.addEventListener("test",Ff,Ff),window.removeEventListener("test",Ff,!0))}catch{}function Jb(t,e,n,r){if(r&&typeof r!="boolean"&&!Mm){var i=r.once,s=r.capture,o=n;!Mm&&i&&(o=n.__once||function a(l){this.removeEventListener(e,a,s),n.call(this,l)},n.__once=o),t.addEventListener(e,o,Dm?r:s)}t.addEventListener(e,n,r)}function V4(t,e,n,r){var i=r&&typeof r!="boolean"?r.capture:r;t.removeEventListener(e,n,i),n.__once&&t.removeEventListener(e,n.__once,i)}function Ar(t,e,n,r){return Jb(t,e,n,r),function(){V4(t,e,n,r)}}function B4(t,e,n,r){if(n===void 0&&(n=!1),r===void 0&&(r=!0),t){var i=document.createEvent("HTMLEvents");i.initEvent(e,n,r),t.dispatchEvent(i)}}function j4(t){var e=rr(t,"transitionDuration")||"",n=e.indexOf("ms")===-1?1e3:1;return parseFloat(e)*n}function z4(t,e,n){n===void 0&&(n=5);var r=!1,i=setTimeout(function(){r||B4(t,"transitionend",!0)},e+n),s=Ar(t,"transitionend",function(){r=!0},{once:!0});return function(){clearTimeout(i),s()}}function W4(t,e,n,r){n==null&&(n=j4(t)||0);var i=z4(t,n,r),s=Ar(t,"transitionend",e);return function(){i(),s()}}function qE(t,e){const n=rr(t,e)||"",r=n.indexOf("ms")===-1?1e3:1;return parseFloat(n)*r}function By(t,e){const n=qE(t,"transitionDuration"),r=qE(t,"transitionDelay"),i=W4(t,s=>{s.target===t&&(i(),e(s))},n+r)}function na(...t){return t.filter(e=>e!=null).reduce((e,n)=>{if(typeof n!="function")throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return e===null?n:function(...i){e.apply(this,i),n.apply(this,i)}},null)}function Zb(t){t.offsetHeight}function H4(t){return t&&"setState"in t?As.findDOMNode(t):t!=null?t:null}const jy=Rn.forwardRef(({onEnter:t,onEntering:e,onEntered:n,onExit:r,onExiting:i,onExited:s,addEndListener:o,children:a,childRef:l,...u},c)=>{const h=E.exports.useRef(null),d=Td(h,l),f=T=>{d(H4(T))},p=T=>S=>{T&&h.current&&T(h.current,S)},y=E.exports.useCallback(p(t),[t]),w=E.exports.useCallback(p(e),[e]),g=E.exports.useCallback(p(n),[n]),m=E.exports.useCallback(p(r),[r]),v=E.exports.useCallback(p(i),[i]),_=E.exports.useCallback(p(s),[s]),C=E.exports.useCallback(p(o),[o]);return A(yr,{ref:c,...u,onEnter:y,onEntered:g,onEntering:w,onExit:m,onExited:_,onExiting:v,addEndListener:C,nodeRef:h,children:typeof a=="function"?(T,S)=>a(T,{...S,ref:f}):Rn.cloneElement(a,{ref:f})})}),q4={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function eN(t,e){const n=`offset${t[0].toUpperCase()}${t.slice(1)}`,r=e[n],i=q4[t];return r+parseInt(rr(e,i[0]),10)+parseInt(rr(e,i[1]),10)}const K4={[Tr]:"collapse",[kl]:"collapsing",[yn]:"collapsing",[Kn]:"collapse show"},G4={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:eN},tN=Rn.forwardRef(({onEnter:t,onEntering:e,onEntered:n,onExit:r,onExiting:i,className:s,children:o,dimension:a="height",getDimensionValue:l=eN,...u},c)=>{const h=typeof a=="function"?a():a,d=E.exports.useMemo(()=>na(g=>{g.style[h]="0"},t),[h,t]),f=E.exports.useMemo(()=>na(g=>{const m=`scroll${h[0].toUpperCase()}${h.slice(1)}`;g.style[h]=`${g[m]}px`},e),[h,e]),p=E.exports.useMemo(()=>na(g=>{g.style[h]=null},n),[h,n]),y=E.exports.useMemo(()=>na(g=>{g.style[h]=`${l(h,g)}px`,Zb(g)},r),[r,l,h]),w=E.exports.useMemo(()=>na(g=>{g.style[h]=null},i),[h,i]);return A(jy,{ref:c,addEndListener:By,...u,"aria-expanded":u.role?u.in:null,onEnter:d,onEntering:f,onEntered:p,onExit:y,onExiting:w,childRef:o.ref,children:(g,m)=>Rn.cloneElement(o,{...m,className:Oe(s,o.props.className,K4[g],h==="width"&&"collapse-horizontal")})})});tN.defaultProps=G4;const nN=E.exports.forwardRef(({children:t,bsPrefix:e,...n},r)=>{e=ht(e,"navbar-collapse");const i=E.exports.useContext(si);return A(tN,{in:!!(i&&i.expanded),...n,children:A("div",{ref:r,className:e,children:t})})});nN.displayName="NavbarCollapse";const Q4={label:"Toggle navigation"},zy=E.exports.forwardRef(({bsPrefix:t,className:e,children:n,label:r,as:i="button",onClick:s,...o},a)=>{t=ht(t,"navbar-toggler");const{onToggle:l,expanded:u}=E.exports.useContext(si)||{},c=Xe(h=>{s&&s(h),l&&l()});return i==="button"&&(o.type="button"),A(i,{...o,ref:a,onClick:c,"aria-label":r,className:Oe(e,t,!u&&"collapsed"),children:n||A("span",{className:`${t}-icon`})})});zy.displayName="NavbarToggle";zy.defaultProps=Q4;var Lm=new WeakMap,KE=function(e,n){if(!(!e||!n)){var r=Lm.get(n)||new Map;Lm.set(n,r);var i=r.get(e);return i||(i=n.matchMedia(e),i.refCount=0,r.set(i.media,i)),i}};function Y4(t,e){e===void 0&&(e=typeof window>"u"?void 0:window);var n=KE(t,e),r=E.exports.useState(function(){return n?n.matches:!1}),i=r[0],s=r[1];return Kb(function(){var o=KE(t,e);if(!o)return s(!1);var a=Lm.get(e),l=function(){s(o.matches)};return o.refCount++,o.addListener(l),l(),function(){o.removeListener(l),o.refCount--,o.refCount<=0&&(a==null||a.delete(o.media)),o=void 0}},[t]),i}function X4(t){var e=Object.keys(t);function n(a,l){return a===l?l:a?a+" and "+l:l}function r(a){return e[Math.min(e.indexOf(a)+1,e.length-1)]}function i(a){var l=r(a),u=t[l];return typeof u=="number"?u=u-.2+"px":u="calc("+u+" - 0.2px)","(max-width: "+u+")"}function s(a){var l=t[a];return typeof l=="number"&&(l=l+"px"),"(min-width: "+l+")"}function o(a,l,u){var c;if(typeof a=="object")c=a,u=l,l=!0;else{var h;l=l||!0,c=(h={},h[a]=l,h)}var d=E.exports.useMemo(function(){return Object.entries(c).reduce(function(f,p){var y=p[0],w=p[1];return(w==="up"||w===!0)&&(f=n(f,s(y))),(w==="down"||w===!0)&&(f=n(f,i(y))),f},"")},[JSON.stringify(c)]);return Y4(d,u)}return o}var J4=X4({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400});function Uf(t){t===void 0&&(t=kd());try{var e=t.activeElement;return!e||!e.nodeName?null:e}catch{return t.body}}function Ch(t,e){if(t.contains)return t.contains(e);if(t.compareDocumentPosition)return t===e||!!(t.compareDocumentPosition(e)&16)}function Z4(t){var e=E.exports.useRef(t);return e.current=t,e}function eW(t){var e=Z4(t);E.exports.useEffect(function(){return function(){return e.current()}},[])}function tW(t=document){const e=t.defaultView;return Math.abs(e.innerWidth-t.documentElement.clientWidth)}const GE=jo("modal-open");class Wy{constructor({ownerDocument:e,handleContainerOverflow:n=!0,isRTL:r=!1}={}){this.handleContainerOverflow=n,this.isRTL=r,this.modals=[],this.ownerDocument=e}getScrollbarWidth(){return tW(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(e){}removeModalAttributes(e){}setContainerStyle(e){const n={overflow:"hidden"},r=this.isRTL?"paddingLeft":"paddingRight",i=this.getElement();e.style={overflow:i.style.overflow,[r]:i.style[r]},e.scrollBarWidth&&(n[r]=`${parseInt(rr(i,r)||"0",10)+e.scrollBarWidth}px`),i.setAttribute(GE,""),rr(i,n)}reset(){[...this.modals].forEach(e=>this.remove(e))}removeContainerStyle(e){const n=this.getElement();n.removeAttribute(GE),Object.assign(n.style,e.style)}add(e){let n=this.modals.indexOf(e);return n!==-1||(n=this.modals.length,this.modals.push(e),this.setModalAttributes(e),n!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),n}remove(e){const n=this.modals.indexOf(e);n!==-1&&(this.modals.splice(n,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}isTopModal(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}}const rN=E.exports.createContext(xd?window:void 0);rN.Provider;function Hy(){return E.exports.useContext(rN)}const Vf=(t,e)=>xd?t==null?(e||kd()).body:(typeof t=="function"&&(t=t()),t&&"current"in t&&(t=t.current),t&&("nodeType"in t||t.getBoundingClientRect)?t:null):null;function nW(t,e){const n=Hy(),[r,i]=E.exports.useState(()=>Vf(t,n==null?void 0:n.document));if(!r){const s=Vf(t);s&&i(s)}return E.exports.useEffect(()=>{e&&r&&e(r)},[e,r]),E.exports.useEffect(()=>{const s=Vf(t);s!==r&&i(s)},[t,r]),r}const rW=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","backdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function iW(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}let Bf;function sW(t){return Bf||(Bf=new Wy({ownerDocument:t==null?void 0:t.document})),Bf}function oW(t){const e=Hy(),n=t||sW(e),r=E.exports.useRef({dialog:null,backdrop:null});return Object.assign(r.current,{add:()=>n.add(r.current),remove:()=>n.remove(r.current),isTopModal:()=>n.isTopModal(r.current),setDialogRef:E.exports.useCallback(i=>{r.current.dialog=i},[]),setBackdropRef:E.exports.useCallback(i=>{r.current.backdrop=i},[])})}const iN=E.exports.forwardRef((t,e)=>{let{show:n=!1,role:r="dialog",className:i,style:s,children:o,backdrop:a=!0,keyboard:l=!0,onBackdropClick:u,onEscapeKeyDown:c,transition:h,backdropTransition:d,autoFocus:f=!0,enforceFocus:p=!0,restoreFocus:y=!0,restoreFocusOptions:w,renderDialog:g,renderBackdrop:m=he=>A("div",Object.assign({},he)),manager:v,container:_,onShow:C,onHide:T=()=>{},onExit:S,onExited:I,onExiting:F,onEnter:O,onEntering:U,onEntered:W}=t,H=iW(t,rW);const ue=nW(_),te=oW(v),we=Hb(),xe=qb(n),[R,L]=E.exports.useState(!n),M=E.exports.useRef(null);E.exports.useImperativeHandle(e,()=>te,[te]),xd&&!xe&&n&&(M.current=Uf()),!h&&!n&&!R?L(!0):n&&R&&L(!1);const re=Xe(()=>{if(te.add(),jt.current=Ar(document,"keydown",ge),Re.current=Ar(document,"focus",()=>setTimeout(Bt),!0),C&&C(),f){const he=Uf(document);te.dialog&&he&&!Ch(te.dialog,he)&&(M.current=he,te.dialog.focus())}}),ae=Xe(()=>{if(te.remove(),jt.current==null||jt.current(),Re.current==null||Re.current(),y){var he;(he=M.current)==null||he.focus==null||he.focus(w),M.current=null}});E.exports.useEffect(()=>{!n||!ue||re()},[n,ue,re]),E.exports.useEffect(()=>{!R||ae()},[R,ae]),eW(()=>{ae()});const Bt=Xe(()=>{if(!p||!we()||!te.isTopModal())return;const he=Uf();te.dialog&&he&&!Ch(te.dialog,he)&&te.dialog.focus()}),Fe=Xe(he=>{he.target===he.currentTarget&&(u==null||u(he),a===!0&&T())}),ge=Xe(he=>{l&&he.keyCode===27&&te.isTopModal()&&(c==null||c(he),he.defaultPrevented||T())}),Re=E.exports.useRef(),jt=E.exports.useRef(),jn=(...he)=>{L(!0),I==null||I(...he)},ai=h;if(!ue||!(n||ai&&!R))return null;const du=Object.assign({role:r,ref:te.setDialogRef,"aria-modal":r==="dialog"?!0:void 0},H,{style:s,className:i,tabIndex:-1});let li=g?g(du):A("div",Object.assign({},du,{children:E.exports.cloneElement(o,{role:"document"})}));ai&&(li=A(ai,{appear:!0,unmountOnExit:!0,in:!!n,onExit:S,onExiting:F,onExited:jn,onEnter:O,onEntering:U,onEntered:W,children:li}));let ds=null;if(a){const he=d;ds=m({ref:te.setBackdropRef,onClick:Fe}),he&&(ds=A(he,{appear:!0,in:!!n,children:ds}))}return A(Xr,{children:As.createPortal(un(Xr,{children:[ds,li]}),ue)})});iN.displayName="Modal";const aW=Object.assign(iN,{Manager:Wy}),lW={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},uW={[yn]:"show",[Kn]:"show"},qy=E.exports.forwardRef(({className:t,children:e,transitionClasses:n={},...r},i)=>{const s=E.exports.useCallback((o,a)=>{Zb(o),r.onEnter==null||r.onEnter(o,a)},[r]);return A(jy,{ref:i,addEndListener:By,...r,onEnter:s,childRef:e.ref,children:(o,a)=>E.exports.cloneElement(e,{...a,className:Oe("fade",t,e.props.className,uW[o],n[o])})})});qy.defaultProps=lW;qy.displayName="Fade";const cW=hs("offcanvas-body"),hW={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1},dW={[yn]:"show",[Kn]:"show"},Ky=E.exports.forwardRef(({bsPrefix:t,className:e,children:n,...r},i)=>(t=ht(t,"offcanvas"),A(jy,{ref:i,addEndListener:By,...r,childRef:n.ref,children:(s,o)=>E.exports.cloneElement(n,{...o,className:Oe(e,n.props.className,(s===yn||s===kl)&&`${t}-toggling`,dW[s])})})));Ky.defaultProps=hW;Ky.displayName="OffcanvasToggling";const sN=E.exports.createContext({onHide(){}}),fW={"aria-label":Jt.exports.string,onClick:Jt.exports.func,variant:Jt.exports.oneOf(["white"])},pW={"aria-label":"Close"},bd=E.exports.forwardRef(({className:t,variant:e,...n},r)=>A("button",{ref:r,type:"button",className:Oe("btn-close",e&&`btn-close-${e}`,t),...n}));bd.displayName="CloseButton";bd.propTypes=fW;bd.defaultProps=pW;const mW={closeLabel:"Close",closeButton:!1},oN=E.exports.forwardRef(({closeLabel:t,closeVariant:e,closeButton:n,onHide:r,children:i,...s},o)=>{const a=E.exports.useContext(sN),l=Xe(()=>{a==null||a.onHide(),r==null||r()});return un("div",{ref:o,...s,children:[i,n&&A(bd,{"aria-label":t,variant:e,onClick:l})]})});oN.defaultProps=mW;const gW={closeLabel:"Close",closeButton:!1},Gy=E.exports.forwardRef(({bsPrefix:t,className:e,...n},r)=>(t=ht(t,"offcanvas-header"),A(oN,{ref:r,...n,className:Oe(e,t)})));Gy.displayName="OffcanvasHeader";Gy.defaultProps=gW;const vW=t=>E.exports.forwardRef((e,n)=>A("div",{...e,ref:n,className:Oe(e.className,t)})),yW=vW("h5"),_W=hs("offcanvas-title",{Component:yW});function wW(t,e){return t.classList?!!e&&t.classList.contains(e):(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+e+" ")!==-1}function EW(t,e){t.classList?t.classList.add(e):wW(t,e)||(typeof t.className=="string"?t.className=t.className+" "+e:t.setAttribute("class",(t.className&&t.className.baseVal||"")+" "+e))}function QE(t,e){return t.replace(new RegExp("(^|\\s)"+e+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function CW(t,e){t.classList?t.classList.remove(e):typeof t.className=="string"?t.className=QE(t.className,e):t.setAttribute("class",QE(t.className&&t.className.baseVal||"",e))}const vs={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class aN extends Wy{adjustAndStore(e,n,r){const i=n.style[e];n.dataset[e]=i,rr(n,{[e]:`${parseFloat(rr(n,e))+r}px`})}restore(e,n){const r=n.dataset[e];r!==void 0&&(delete n.dataset[e],rr(n,{[e]:r}))}setContainerStyle(e){super.setContainerStyle(e);const n=this.getElement();if(EW(n,"modal-open"),!e.scrollBarWidth)return;const r=this.isRTL?"paddingLeft":"paddingRight",i=this.isRTL?"marginLeft":"marginRight";Hn(n,vs.FIXED_CONTENT).forEach(s=>this.adjustAndStore(r,s,e.scrollBarWidth)),Hn(n,vs.STICKY_CONTENT).forEach(s=>this.adjustAndStore(i,s,-e.scrollBarWidth)),Hn(n,vs.NAVBAR_TOGGLER).forEach(s=>this.adjustAndStore(i,s,e.scrollBarWidth))}removeContainerStyle(e){super.removeContainerStyle(e);const n=this.getElement();CW(n,"modal-open");const r=this.isRTL?"paddingLeft":"paddingRight",i=this.isRTL?"marginLeft":"marginRight";Hn(n,vs.FIXED_CONTENT).forEach(s=>this.restore(r,s)),Hn(n,vs.STICKY_CONTENT).forEach(s=>this.restore(i,s)),Hn(n,vs.NAVBAR_TOGGLER).forEach(s=>this.restore(i,s))}}let jf;function TW(t){return jf||(jf=new aN(t)),jf}const SW={show:!1,backdrop:!0,keyboard:!0,scroll:!1,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,placement:"start",renderStaticNode:!1};function IW(t){return A(Ky,{...t})}function kW(t){return A(qy,{...t})}const Qy=E.exports.forwardRef(({bsPrefix:t,className:e,children:n,"aria-labelledby":r,placement:i,responsive:s,show:o,backdrop:a,keyboard:l,scroll:u,onEscapeKeyDown:c,onShow:h,onHide:d,container:f,autoFocus:p,enforceFocus:y,restoreFocus:w,restoreFocusOptions:g,onEntered:m,onExit:v,onExiting:_,onEnter:C,onEntering:T,onExited:S,backdropClassName:I,manager:F,renderStaticNode:O,...U},W)=>{const H=E.exports.useRef();t=ht(t,"offcanvas");const{onToggle:ue}=E.exports.useContext(si)||{},[te,we]=E.exports.useState(!1),xe=J4(s||"xs","up");E.exports.useEffect(()=>{we(s?o&&!xe:o)},[o,s,xe]);const R=Xe(()=>{ue==null||ue(),d==null||d()}),L=E.exports.useMemo(()=>({onHide:R}),[R]);function M(){return F||(u?(H.current||(H.current=new aN({handleContainerOverflow:!1})),H.current):TW())}const re=(ge,...Re)=>{ge&&(ge.style.visibility="visible"),C==null||C(ge,...Re)},ae=(ge,...Re)=>{ge&&(ge.style.visibility=""),S==null||S(...Re)},Bt=E.exports.useCallback(ge=>A("div",{...ge,className:Oe(`${t}-backdrop`,I)}),[I,t]),Fe=ge=>A("div",{...ge,...U,className:Oe(e,s?`${t}-${s}`:t,`${t}-${i}`),"aria-labelledby":r,children:n});return un(Xr,{children:[!te&&(s||O)&&Fe({}),A(sN.Provider,{value:L,children:A(aW,{show:te,ref:W,backdrop:a,container:f,keyboard:l,autoFocus:p,enforceFocus:y&&!u,restoreFocus:w,restoreFocusOptions:g,onEscapeKeyDown:c,onShow:h,onHide:R,onEnter:re,onEntering:T,onEntered:m,onExit:v,onExiting:_,onExited:ae,manager:M(),transition:IW,backdropTransition:kW,renderBackdrop:Bt,renderDialog:Fe})})]})});Qy.displayName="Offcanvas";Qy.defaultProps=SW;const xW=Object.assign(Qy,{Body:cW,Header:Gy,Title:_W}),lN=E.exports.forwardRef((t,e)=>{const n=E.exports.useContext(si);return A(xW,{ref:e,show:!!(n!=null&&n.expanded),...t,renderStaticNode:!0})});lN.displayName="NavbarOffcanvas";const bW=hs("navbar-text",{Component:"span"}),NW={expand:!0,variant:"light",collapseOnSelect:!1},Yy=E.exports.forwardRef((t,e)=>{const{bsPrefix:n,expand:r,variant:i,bg:s,fixed:o,sticky:a,className:l,as:u="nav",expanded:c,onToggle:h,onSelect:d,collapseOnSelect:f,...p}=Fy(t,{expanded:"onToggle"}),y=ht(n,"navbar"),w=E.exports.useCallback((...v)=>{d==null||d(...v),f&&c&&(h==null||h(!1))},[d,f,c,h]);p.role===void 0&&u!=="nav"&&(p.role="navigation");let g=`${y}-expand`;typeof r=="string"&&(g=`${g}-${r}`);const m=E.exports.useMemo(()=>({onToggle:()=>h==null?void 0:h(!c),bsPrefix:y,expanded:!!c,expand:r}),[y,c,r,h]);return A(si.Provider,{value:m,children:A(es.Provider,{value:w,children:A(u,{ref:e,...p,className:Oe(l,y,r&&g,i&&`${y}-${i}`,s&&`bg-${s}`,a&&`sticky-${a}`,o&&`fixed-${o}`)})})})});Yy.defaultProps=NW;Yy.displayName="Navbar";const YE=Object.assign(Yy,{Brand:Gb,Collapse:nN,Offcanvas:lN,Text:bW,Toggle:zy}),Nd=E.exports.createContext(null);var XE=Object.prototype.hasOwnProperty;function JE(t,e,n){for(n of t.keys())if(Oa(n,e))return n}function Oa(t,e){var n,r,i;if(t===e)return!0;if(t&&e&&(n=t.constructor)===e.constructor){if(n===Date)return t.getTime()===e.getTime();if(n===RegExp)return t.toString()===e.toString();if(n===Array){if((r=t.length)===e.length)for(;r--&&Oa(t[r],e[r]););return r===-1}if(n===Set){if(t.size!==e.size)return!1;for(r of t)if(i=r,i&&typeof i=="object"&&(i=JE(e,i),!i)||!e.has(i))return!1;return!0}if(n===Map){if(t.size!==e.size)return!1;for(r of t)if(i=r[0],i&&typeof i=="object"&&(i=JE(e,i),!i)||!Oa(r[1],e.get(i)))return!1;return!0}if(n===ArrayBuffer)t=new Uint8Array(t),e=new Uint8Array(e);else if(n===DataView){if((r=t.byteLength)===e.byteLength)for(;r--&&t.getInt8(r)===e.getInt8(r););return r===-1}if(ArrayBuffer.isView(t)){if((r=t.byteLength)===e.byteLength)for(;r--&&t[r]===e[r];);return r===-1}if(!n||typeof t=="object"){r=0;for(n in t)if(XE.call(t,n)&&++r&&!XE.call(e,n)||!(n in e)||!Oa(t[n],e[n]))return!1;return Object.keys(e).length===r}}return t!==t&&e!==e}function RW(t){var e=Hb();return[t[0],E.exports.useCallback(function(n){if(!!e())return t[1](n)},[e,t[1]])]}var Ft="top",cn="bottom",hn="right",Ut="left",Xy="auto",uu=[Ft,cn,hn,Ut],Co="start",xl="end",AW="clippingParents",uN="viewport",ra="popper",OW="reference",ZE=uu.reduce(function(t,e){return t.concat([e+"-"+Co,e+"-"+xl])},[]),cN=[].concat(uu,[Xy]).reduce(function(t,e){return t.concat([e,e+"-"+Co,e+"-"+xl])},[]),PW="beforeRead",DW="read",MW="afterRead",LW="beforeMain",$W="main",FW="afterMain",UW="beforeWrite",VW="write",BW="afterWrite",jW=[PW,DW,MW,LW,$W,FW,UW,VW,BW];function $n(t){return t.split("-")[0]}function fn(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function ts(t){var e=fn(t).Element;return t instanceof e||t instanceof Element}function Fn(t){var e=fn(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function Jy(t){if(typeof ShadowRoot>"u")return!1;var e=fn(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}var Di=Math.max,Th=Math.min,To=Math.round;function $m(){var t=navigator.userAgentData;return t!=null&&t.brands?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function hN(){return!/^((?!chrome|android).)*safari/i.test($m())}function So(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!1);var r=t.getBoundingClientRect(),i=1,s=1;e&&Fn(t)&&(i=t.offsetWidth>0&&To(r.width)/t.offsetWidth||1,s=t.offsetHeight>0&&To(r.height)/t.offsetHeight||1);var o=ts(t)?fn(t):window,a=o.visualViewport,l=!hN()&&n,u=(r.left+(l&&a?a.offsetLeft:0))/i,c=(r.top+(l&&a?a.offsetTop:0))/s,h=r.width/i,d=r.height/s;return{width:h,height:d,top:c,right:u+h,bottom:c+d,left:u,x:u,y:c}}function Zy(t){var e=So(t),n=t.offsetWidth,r=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-r)<=1&&(r=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:r}}function dN(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&Jy(n)){var r=e;do{if(r&&t.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function Jr(t){return t?(t.nodeName||"").toLowerCase():null}function fr(t){return fn(t).getComputedStyle(t)}function zW(t){return["table","td","th"].indexOf(Jr(t))>=0}function oi(t){return((ts(t)?t.ownerDocument:t.document)||window.document).documentElement}function Rd(t){return Jr(t)==="html"?t:t.assignedSlot||t.parentNode||(Jy(t)?t.host:null)||oi(t)}function eC(t){return!Fn(t)||fr(t).position==="fixed"?null:t.offsetParent}function WW(t){var e=/firefox/i.test($m()),n=/Trident/i.test($m());if(n&&Fn(t)){var r=fr(t);if(r.position==="fixed")return null}var i=Rd(t);for(Jy(i)&&(i=i.host);Fn(i)&&["html","body"].indexOf(Jr(i))<0;){var s=fr(i);if(s.transform!=="none"||s.perspective!=="none"||s.contain==="paint"||["transform","perspective"].indexOf(s.willChange)!==-1||e&&s.willChange==="filter"||e&&s.filter&&s.filter!=="none")return i;i=i.parentNode}return null}function cu(t){for(var e=fn(t),n=eC(t);n&&zW(n)&&fr(n).position==="static";)n=eC(n);return n&&(Jr(n)==="html"||Jr(n)==="body"&&fr(n).position==="static")?e:n||WW(t)||e}function e_(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function Pa(t,e,n){return Di(t,Th(e,n))}function HW(t,e,n){var r=Pa(t,e,n);return r>n?n:r}function fN(){return{top:0,right:0,bottom:0,left:0}}function pN(t){return Object.assign({},fN(),t)}function mN(t,e){return e.reduce(function(n,r){return n[r]=t,n},{})}var qW=function(e,n){return e=typeof e=="function"?e(Object.assign({},n.rects,{placement:n.placement})):e,pN(typeof e!="number"?e:mN(e,uu))};function KW(t){var e,n=t.state,r=t.name,i=t.options,s=n.elements.arrow,o=n.modifiersData.popperOffsets,a=$n(n.placement),l=e_(a),u=[Ut,hn].indexOf(a)>=0,c=u?"height":"width";if(!(!s||!o)){var h=qW(i.padding,n),d=Zy(s),f=l==="y"?Ft:Ut,p=l==="y"?cn:hn,y=n.rects.reference[c]+n.rects.reference[l]-o[l]-n.rects.popper[c],w=o[l]-n.rects.reference[l],g=cu(s),m=g?l==="y"?g.clientHeight||0:g.clientWidth||0:0,v=y/2-w/2,_=h[f],C=m-d[c]-h[p],T=m/2-d[c]/2+v,S=Pa(_,T,C),I=l;n.modifiersData[r]=(e={},e[I]=S,e.centerOffset=S-T,e)}}function GW(t){var e=t.state,n=t.options,r=n.element,i=r===void 0?"[data-popper-arrow]":r;i!=null&&(typeof i=="string"&&(i=e.elements.popper.querySelector(i),!i)||!dN(e.elements.popper,i)||(e.elements.arrow=i))}const QW={name:"arrow",enabled:!0,phase:"main",fn:KW,effect:GW,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Io(t){return t.split("-")[1]}var YW={top:"auto",right:"auto",bottom:"auto",left:"auto"};function XW(t){var e=t.x,n=t.y,r=window,i=r.devicePixelRatio||1;return{x:To(e*i)/i||0,y:To(n*i)/i||0}}function tC(t){var e,n=t.popper,r=t.popperRect,i=t.placement,s=t.variation,o=t.offsets,a=t.position,l=t.gpuAcceleration,u=t.adaptive,c=t.roundOffsets,h=t.isFixed,d=o.x,f=d===void 0?0:d,p=o.y,y=p===void 0?0:p,w=typeof c=="function"?c({x:f,y}):{x:f,y};f=w.x,y=w.y;var g=o.hasOwnProperty("x"),m=o.hasOwnProperty("y"),v=Ut,_=Ft,C=window;if(u){var T=cu(n),S="clientHeight",I="clientWidth";if(T===fn(n)&&(T=oi(n),fr(T).position!=="static"&&a==="absolute"&&(S="scrollHeight",I="scrollWidth")),T=T,i===Ft||(i===Ut||i===hn)&&s===xl){_=cn;var F=h&&T===C&&C.visualViewport?C.visualViewport.height:T[S];y-=F-r.height,y*=l?1:-1}if(i===Ut||(i===Ft||i===cn)&&s===xl){v=hn;var O=h&&T===C&&C.visualViewport?C.visualViewport.width:T[I];f-=O-r.width,f*=l?1:-1}}var U=Object.assign({position:a},u&&YW),W=c===!0?XW({x:f,y}):{x:f,y};if(f=W.x,y=W.y,l){var H;return Object.assign({},U,(H={},H[_]=m?"0":"",H[v]=g?"0":"",H.transform=(C.devicePixelRatio||1)<=1?"translate("+f+"px, "+y+"px)":"translate3d("+f+"px, "+y+"px, 0)",H))}return Object.assign({},U,(e={},e[_]=m?y+"px":"",e[v]=g?f+"px":"",e.transform="",e))}function JW(t){var e=t.state,n=t.options,r=n.gpuAcceleration,i=r===void 0?!0:r,s=n.adaptive,o=s===void 0?!0:s,a=n.roundOffsets,l=a===void 0?!0:a,u={placement:$n(e.placement),variation:Io(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:i,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,tC(Object.assign({},u,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:o,roundOffsets:l})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,tC(Object.assign({},u,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const ZW={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:JW,data:{}};var zu={passive:!0};function eH(t){var e=t.state,n=t.instance,r=t.options,i=r.scroll,s=i===void 0?!0:i,o=r.resize,a=o===void 0?!0:o,l=fn(e.elements.popper),u=[].concat(e.scrollParents.reference,e.scrollParents.popper);return s&&u.forEach(function(c){c.addEventListener("scroll",n.update,zu)}),a&&l.addEventListener("resize",n.update,zu),function(){s&&u.forEach(function(c){c.removeEventListener("scroll",n.update,zu)}),a&&l.removeEventListener("resize",n.update,zu)}}const tH={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:eH,data:{}};var nH={left:"right",right:"left",bottom:"top",top:"bottom"};function fc(t){return t.replace(/left|right|bottom|top/g,function(e){return nH[e]})}var rH={start:"end",end:"start"};function nC(t){return t.replace(/start|end/g,function(e){return rH[e]})}function t_(t){var e=fn(t),n=e.pageXOffset,r=e.pageYOffset;return{scrollLeft:n,scrollTop:r}}function n_(t){return So(oi(t)).left+t_(t).scrollLeft}function iH(t,e){var n=fn(t),r=oi(t),i=n.visualViewport,s=r.clientWidth,o=r.clientHeight,a=0,l=0;if(i){s=i.width,o=i.height;var u=hN();(u||!u&&e==="fixed")&&(a=i.offsetLeft,l=i.offsetTop)}return{width:s,height:o,x:a+n_(t),y:l}}function sH(t){var e,n=oi(t),r=t_(t),i=(e=t.ownerDocument)==null?void 0:e.body,s=Di(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),o=Di(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-r.scrollLeft+n_(t),l=-r.scrollTop;return fr(i||n).direction==="rtl"&&(a+=Di(n.clientWidth,i?i.clientWidth:0)-s),{width:s,height:o,x:a,y:l}}function r_(t){var e=fr(t),n=e.overflow,r=e.overflowX,i=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+r)}function gN(t){return["html","body","#document"].indexOf(Jr(t))>=0?t.ownerDocument.body:Fn(t)&&r_(t)?t:gN(Rd(t))}function Da(t,e){var n;e===void 0&&(e=[]);var r=gN(t),i=r===((n=t.ownerDocument)==null?void 0:n.body),s=fn(r),o=i?[s].concat(s.visualViewport||[],r_(r)?r:[]):r,a=e.concat(o);return i?a:a.concat(Da(Rd(o)))}function Fm(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function oH(t,e){var n=So(t,!1,e==="fixed");return n.top=n.top+t.clientTop,n.left=n.left+t.clientLeft,n.bottom=n.top+t.clientHeight,n.right=n.left+t.clientWidth,n.width=t.clientWidth,n.height=t.clientHeight,n.x=n.left,n.y=n.top,n}function rC(t,e,n){return e===uN?Fm(iH(t,n)):ts(e)?oH(e,n):Fm(sH(oi(t)))}function aH(t){var e=Da(Rd(t)),n=["absolute","fixed"].indexOf(fr(t).position)>=0,r=n&&Fn(t)?cu(t):t;return ts(r)?e.filter(function(i){return ts(i)&&dN(i,r)&&Jr(i)!=="body"}):[]}function lH(t,e,n,r){var i=e==="clippingParents"?aH(t):[].concat(e),s=[].concat(i,[n]),o=s[0],a=s.reduce(function(l,u){var c=rC(t,u,r);return l.top=Di(c.top,l.top),l.right=Th(c.right,l.right),l.bottom=Th(c.bottom,l.bottom),l.left=Di(c.left,l.left),l},rC(t,o,r));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function vN(t){var e=t.reference,n=t.element,r=t.placement,i=r?$n(r):null,s=r?Io(r):null,o=e.x+e.width/2-n.width/2,a=e.y+e.height/2-n.height/2,l;switch(i){case Ft:l={x:o,y:e.y-n.height};break;case cn:l={x:o,y:e.y+e.height};break;case hn:l={x:e.x+e.width,y:a};break;case Ut:l={x:e.x-n.width,y:a};break;default:l={x:e.x,y:e.y}}var u=i?e_(i):null;if(u!=null){var c=u==="y"?"height":"width";switch(s){case Co:l[u]=l[u]-(e[c]/2-n[c]/2);break;case xl:l[u]=l[u]+(e[c]/2-n[c]/2);break}}return l}function bl(t,e){e===void 0&&(e={});var n=e,r=n.placement,i=r===void 0?t.placement:r,s=n.strategy,o=s===void 0?t.strategy:s,a=n.boundary,l=a===void 0?AW:a,u=n.rootBoundary,c=u===void 0?uN:u,h=n.elementContext,d=h===void 0?ra:h,f=n.altBoundary,p=f===void 0?!1:f,y=n.padding,w=y===void 0?0:y,g=pN(typeof w!="number"?w:mN(w,uu)),m=d===ra?OW:ra,v=t.rects.popper,_=t.elements[p?m:d],C=lH(ts(_)?_:_.contextElement||oi(t.elements.popper),l,c,o),T=So(t.elements.reference),S=vN({reference:T,element:v,strategy:"absolute",placement:i}),I=Fm(Object.assign({},v,S)),F=d===ra?I:T,O={top:C.top-F.top+g.top,bottom:F.bottom-C.bottom+g.bottom,left:C.left-F.left+g.left,right:F.right-C.right+g.right},U=t.modifiersData.offset;if(d===ra&&U){var W=U[i];Object.keys(O).forEach(function(H){var ue=[hn,cn].indexOf(H)>=0?1:-1,te=[Ft,cn].indexOf(H)>=0?"y":"x";O[H]+=W[te]*ue})}return O}function uH(t,e){e===void 0&&(e={});var n=e,r=n.placement,i=n.boundary,s=n.rootBoundary,o=n.padding,a=n.flipVariations,l=n.allowedAutoPlacements,u=l===void 0?cN:l,c=Io(r),h=c?a?ZE:ZE.filter(function(p){return Io(p)===c}):uu,d=h.filter(function(p){return u.indexOf(p)>=0});d.length===0&&(d=h);var f=d.reduce(function(p,y){return p[y]=bl(t,{placement:y,boundary:i,rootBoundary:s,padding:o})[$n(y)],p},{});return Object.keys(f).sort(function(p,y){return f[p]-f[y]})}function cH(t){if($n(t)===Xy)return[];var e=fc(t);return[nC(t),e,nC(e)]}function hH(t){var e=t.state,n=t.options,r=t.name;if(!e.modifiersData[r]._skip){for(var i=n.mainAxis,s=i===void 0?!0:i,o=n.altAxis,a=o===void 0?!0:o,l=n.fallbackPlacements,u=n.padding,c=n.boundary,h=n.rootBoundary,d=n.altBoundary,f=n.flipVariations,p=f===void 0?!0:f,y=n.allowedAutoPlacements,w=e.options.placement,g=$n(w),m=g===w,v=l||(m||!p?[fc(w)]:cH(w)),_=[w].concat(v).reduce(function(Fe,ge){return Fe.concat($n(ge)===Xy?uH(e,{placement:ge,boundary:c,rootBoundary:h,padding:u,flipVariations:p,allowedAutoPlacements:y}):ge)},[]),C=e.rects.reference,T=e.rects.popper,S=new Map,I=!0,F=_[0],O=0;O<_.length;O++){var U=_[O],W=$n(U),H=Io(U)===Co,ue=[Ft,cn].indexOf(W)>=0,te=ue?"width":"height",we=bl(e,{placement:U,boundary:c,rootBoundary:h,altBoundary:d,padding:u}),xe=ue?H?hn:Ut:H?cn:Ft;C[te]>T[te]&&(xe=fc(xe));var R=fc(xe),L=[];if(s&&L.push(we[W]<=0),a&&L.push(we[xe]<=0,we[R]<=0),L.every(function(Fe){return Fe})){F=U,I=!1;break}S.set(U,L)}if(I)for(var M=p?3:1,re=function(ge){var Re=_.find(function(jt){var jn=S.get(jt);if(jn)return jn.slice(0,ge).every(function(ai){return ai})});if(Re)return F=Re,"break"},ae=M;ae>0;ae--){var Bt=re(ae);if(Bt==="break")break}e.placement!==F&&(e.modifiersData[r]._skip=!0,e.placement=F,e.reset=!0)}}const dH={name:"flip",enabled:!0,phase:"main",fn:hH,requiresIfExists:["offset"],data:{_skip:!1}};function iC(t,e,n){return n===void 0&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function sC(t){return[Ft,hn,cn,Ut].some(function(e){return t[e]>=0})}function fH(t){var e=t.state,n=t.name,r=e.rects.reference,i=e.rects.popper,s=e.modifiersData.preventOverflow,o=bl(e,{elementContext:"reference"}),a=bl(e,{altBoundary:!0}),l=iC(o,r),u=iC(a,i,s),c=sC(l),h=sC(u);e.modifiersData[n]={referenceClippingOffsets:l,popperEscapeOffsets:u,isReferenceHidden:c,hasPopperEscaped:h},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":h})}const pH={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:fH};function mH(t,e,n){var r=$n(t),i=[Ut,Ft].indexOf(r)>=0?-1:1,s=typeof n=="function"?n(Object.assign({},e,{placement:t})):n,o=s[0],a=s[1];return o=o||0,a=(a||0)*i,[Ut,hn].indexOf(r)>=0?{x:a,y:o}:{x:o,y:a}}function gH(t){var e=t.state,n=t.options,r=t.name,i=n.offset,s=i===void 0?[0,0]:i,o=cN.reduce(function(c,h){return c[h]=mH(h,e.rects,s),c},{}),a=o[e.placement],l=a.x,u=a.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=u),e.modifiersData[r]=o}const vH={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:gH};function yH(t){var e=t.state,n=t.name;e.modifiersData[n]=vN({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}const _H={name:"popperOffsets",enabled:!0,phase:"read",fn:yH,data:{}};function wH(t){return t==="x"?"y":"x"}function EH(t){var e=t.state,n=t.options,r=t.name,i=n.mainAxis,s=i===void 0?!0:i,o=n.altAxis,a=o===void 0?!1:o,l=n.boundary,u=n.rootBoundary,c=n.altBoundary,h=n.padding,d=n.tether,f=d===void 0?!0:d,p=n.tetherOffset,y=p===void 0?0:p,w=bl(e,{boundary:l,rootBoundary:u,padding:h,altBoundary:c}),g=$n(e.placement),m=Io(e.placement),v=!m,_=e_(g),C=wH(_),T=e.modifiersData.popperOffsets,S=e.rects.reference,I=e.rects.popper,F=typeof y=="function"?y(Object.assign({},e.rects,{placement:e.placement})):y,O=typeof F=="number"?{mainAxis:F,altAxis:F}:Object.assign({mainAxis:0,altAxis:0},F),U=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,W={x:0,y:0};if(!!T){if(s){var H,ue=_==="y"?Ft:Ut,te=_==="y"?cn:hn,we=_==="y"?"height":"width",xe=T[_],R=xe+w[ue],L=xe-w[te],M=f?-I[we]/2:0,re=m===Co?S[we]:I[we],ae=m===Co?-I[we]:-S[we],Bt=e.elements.arrow,Fe=f&&Bt?Zy(Bt):{width:0,height:0},ge=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:fN(),Re=ge[ue],jt=ge[te],jn=Pa(0,S[we],Fe[we]),ai=v?S[we]/2-M-jn-Re-O.mainAxis:re-jn-Re-O.mainAxis,du=v?-S[we]/2+M+jn+jt+O.mainAxis:ae+jn+jt+O.mainAxis,li=e.elements.arrow&&cu(e.elements.arrow),ds=li?_==="y"?li.clientTop||0:li.clientLeft||0:0,he=(H=U==null?void 0:U[_])!=null?H:0,RN=xe+ai-he-ds,AN=xe+du-he,l_=Pa(f?Th(R,RN):R,xe,f?Di(L,AN):L);T[_]=l_,W[_]=l_-xe}if(a){var u_,ON=_==="x"?Ft:Ut,PN=_==="x"?cn:hn,ui=T[C],fu=C==="y"?"height":"width",c_=ui+w[ON],h_=ui-w[PN],Od=[Ft,Ut].indexOf(g)!==-1,d_=(u_=U==null?void 0:U[C])!=null?u_:0,f_=Od?c_:ui-S[fu]-I[fu]-d_+O.altAxis,p_=Od?ui+S[fu]+I[fu]-d_-O.altAxis:h_,m_=f&&Od?HW(f_,ui,p_):Pa(f?f_:c_,ui,f?p_:h_);T[C]=m_,W[C]=m_-ui}e.modifiersData[r]=W}}const CH={name:"preventOverflow",enabled:!0,phase:"main",fn:EH,requiresIfExists:["offset"]};function TH(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function SH(t){return t===fn(t)||!Fn(t)?t_(t):TH(t)}function IH(t){var e=t.getBoundingClientRect(),n=To(e.width)/t.offsetWidth||1,r=To(e.height)/t.offsetHeight||1;return n!==1||r!==1}function kH(t,e,n){n===void 0&&(n=!1);var r=Fn(e),i=Fn(e)&&IH(e),s=oi(e),o=So(t,i,n),a={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(r||!r&&!n)&&((Jr(e)!=="body"||r_(s))&&(a=SH(e)),Fn(e)?(l=So(e,!0),l.x+=e.clientLeft,l.y+=e.clientTop):s&&(l.x=n_(s))),{x:o.left+a.scrollLeft-l.x,y:o.top+a.scrollTop-l.y,width:o.width,height:o.height}}function xH(t){var e=new Map,n=new Set,r=[];t.forEach(function(s){e.set(s.name,s)});function i(s){n.add(s.name);var o=[].concat(s.requires||[],s.requiresIfExists||[]);o.forEach(function(a){if(!n.has(a)){var l=e.get(a);l&&i(l)}}),r.push(s)}return t.forEach(function(s){n.has(s.name)||i(s)}),r}function bH(t){var e=xH(t);return jW.reduce(function(n,r){return n.concat(e.filter(function(i){return i.phase===r}))},[])}function NH(t){var e;return function(){return e||(e=new Promise(function(n){Promise.resolve().then(function(){e=void 0,n(t())})})),e}}function RH(t){var e=t.reduce(function(n,r){var i=n[r.name];return n[r.name]=i?Object.assign({},i,r,{options:Object.assign({},i.options,r.options),data:Object.assign({},i.data,r.data)}):r,n},{});return Object.keys(e).map(function(n){return e[n]})}var oC={placement:"bottom",modifiers:[],strategy:"absolute"};function aC(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function AH(t){t===void 0&&(t={});var e=t,n=e.defaultModifiers,r=n===void 0?[]:n,i=e.defaultOptions,s=i===void 0?oC:i;return function(a,l,u){u===void 0&&(u=s);var c={placement:"bottom",orderedModifiers:[],options:Object.assign({},oC,s),modifiersData:{},elements:{reference:a,popper:l},attributes:{},styles:{}},h=[],d=!1,f={state:c,setOptions:function(g){var m=typeof g=="function"?g(c.options):g;y(),c.options=Object.assign({},s,c.options,m),c.scrollParents={reference:ts(a)?Da(a):a.contextElement?Da(a.contextElement):[],popper:Da(l)};var v=bH(RH([].concat(r,c.options.modifiers)));return c.orderedModifiers=v.filter(function(_){return _.enabled}),p(),f.update()},forceUpdate:function(){if(!d){var g=c.elements,m=g.reference,v=g.popper;if(!!aC(m,v)){c.rects={reference:kH(m,cu(v),c.options.strategy==="fixed"),popper:Zy(v)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach(function(O){return c.modifiersData[O.name]=Object.assign({},O.data)});for(var _=0;_<c.orderedModifiers.length;_++){if(c.reset===!0){c.reset=!1,_=-1;continue}var C=c.orderedModifiers[_],T=C.fn,S=C.options,I=S===void 0?{}:S,F=C.name;typeof T=="function"&&(c=T({state:c,options:I,name:F,instance:f})||c)}}}},update:NH(function(){return new Promise(function(w){f.forceUpdate(),w(c)})}),destroy:function(){y(),d=!0}};if(!aC(a,l))return f;f.setOptions(u).then(function(w){!d&&u.onFirstUpdate&&u.onFirstUpdate(w)});function p(){c.orderedModifiers.forEach(function(w){var g=w.name,m=w.options,v=m===void 0?{}:m,_=w.effect;if(typeof _=="function"){var C=_({state:c,name:g,instance:f,options:v}),T=function(){};h.push(C||T)}})}function y(){h.forEach(function(w){return w()}),h=[]}return f}}const OH=AH({defaultModifiers:[pH,_H,ZW,tH,vH,dH,CH,QW]}),PH=["enabled","placement","strategy","modifiers"];function DH(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}const MH={name:"applyStyles",enabled:!1,phase:"afterWrite",fn:()=>{}},LH={name:"ariaDescribedBy",enabled:!0,phase:"afterWrite",effect:({state:t})=>()=>{const{reference:e,popper:n}=t.elements;if("removeAttribute"in e){const r=(e.getAttribute("aria-describedby")||"").split(",").filter(i=>i.trim()!==n.id);r.length?e.setAttribute("aria-describedby",r.join(",")):e.removeAttribute("aria-describedby")}},fn:({state:t})=>{var e;const{popper:n,reference:r}=t.elements,i=(e=n.getAttribute("role"))==null?void 0:e.toLowerCase();if(n.id&&i==="tooltip"&&"setAttribute"in r){const s=r.getAttribute("aria-describedby");if(s&&s.split(",").indexOf(n.id)!==-1)return;r.setAttribute("aria-describedby",s?`${s},${n.id}`:n.id)}}},$H=[];function FH(t,e,n={}){let{enabled:r=!0,placement:i="bottom",strategy:s="absolute",modifiers:o=$H}=n,a=DH(n,PH);const l=E.exports.useRef(o),u=E.exports.useRef(),c=E.exports.useCallback(()=>{var w;(w=u.current)==null||w.update()},[]),h=E.exports.useCallback(()=>{var w;(w=u.current)==null||w.forceUpdate()},[]),[d,f]=RW(E.exports.useState({placement:i,update:c,forceUpdate:h,attributes:{},styles:{popper:{},arrow:{}}})),p=E.exports.useMemo(()=>({name:"updateStateModifier",enabled:!0,phase:"write",requires:["computeStyles"],fn:({state:w})=>{const g={},m={};Object.keys(w.elements).forEach(v=>{g[v]=w.styles[v],m[v]=w.attributes[v]}),f({state:w,styles:g,attributes:m,update:c,forceUpdate:h,placement:w.placement})}}),[c,h,f]),y=E.exports.useMemo(()=>(Oa(l.current,o)||(l.current=o),l.current),[o]);return E.exports.useEffect(()=>{!u.current||!r||u.current.setOptions({placement:i,strategy:s,modifiers:[...y,p,MH]})},[s,i,p,r,y]),E.exports.useEffect(()=>{if(!(!r||t==null||e==null))return u.current=OH(t,e,Object.assign({},a,{placement:i,strategy:s,modifiers:[...y,LH,p]})),()=>{u.current!=null&&(u.current.destroy(),u.current=void 0,f(w=>Object.assign({},w,{attributes:{},styles:{popper:{}}})))}},[r,t,e]),d}const lC=()=>{};function UH(t){return t.button===0}function VH(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}const zf=t=>t&&("current"in t?t.current:t),uC={click:"mousedown",mouseup:"mousedown",pointerup:"pointerdown"};function BH(t,e=lC,{disabled:n,clickTrigger:r="click"}={}){const i=E.exports.useRef(!1),s=E.exports.useRef(!1),o=E.exports.useCallback(u=>{const c=zf(t);i.current=!c||VH(u)||!UH(u)||!!Ch(c,u.target)||s.current,s.current=!1},[t]),a=Xe(u=>{const c=zf(t);c&&Ch(c,u.target)&&(s.current=!0)}),l=Xe(u=>{i.current||e(u)});E.exports.useEffect(()=>{if(n||t==null)return;const u=kd(zf(t));let c=(u.defaultView||window).event,h=null;uC[r]&&(h=Ar(u,uC[r],a,!0));const d=Ar(u,r,o,!0),f=Ar(u,r,y=>{if(y===c){c=void 0;return}l(y)});let p=[];return"ontouchstart"in u.documentElement&&(p=[].slice.call(u.body.children).map(y=>Ar(y,"mousemove",lC))),()=>{h==null||h(),d(),f(),p.forEach(y=>y())}},[t,n,r,o,a,l])}function jH(t){const e={};return Array.isArray(t)?(t==null||t.forEach(n=>{e[n.name]=n}),e):t||e}function zH(t={}){return Array.isArray(t)?t:Object.keys(t).map(e=>(t[e].name=e,t[e]))}function WH({enabled:t,enableEvents:e,placement:n,flip:r,offset:i,fixed:s,containerPadding:o,arrowElement:a,popperConfig:l={}}){var u,c,h,d;const f=jH(l.modifiers);return Object.assign({},l,{placement:n,enabled:t,strategy:s?"fixed":l.strategy,modifiers:zH(Object.assign({},f,{eventListeners:{enabled:e},preventOverflow:Object.assign({},f.preventOverflow,{options:o?Object.assign({padding:o},(u=f.preventOverflow)==null?void 0:u.options):(c=f.preventOverflow)==null?void 0:c.options}),offset:{options:Object.assign({offset:i},(h=f.offset)==null?void 0:h.options)},arrow:Object.assign({},f.arrow,{enabled:!!a,options:Object.assign({},(d=f.arrow)==null?void 0:d.options,{element:a})}),flip:Object.assign({enabled:!!r},f.flip)}))})}const HH=["children"];function qH(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}const KH=()=>{};function yN(t={}){const e=E.exports.useContext(Nd),[n,r]=_4(),i=E.exports.useRef(!1),{flip:s,offset:o,rootCloseEvent:a,fixed:l=!1,placement:u,popperConfig:c={},enableEventListeners:h=!0,usePopper:d=!!e}=t,f=(e==null?void 0:e.show)==null?!!t.show:e.show;f&&!i.current&&(i.current=!0);const p=T=>{e==null||e.toggle(!1,T)},{placement:y,setMenu:w,menuElement:g,toggleElement:m}=e||{},v=FH(m,g,WH({placement:u||y||"bottom-start",enabled:d,enableEvents:h==null?f:h,offset:o,flip:s,fixed:l,arrowElement:n,popperConfig:c})),_=Object.assign({ref:w||KH,"aria-labelledby":m==null?void 0:m.id},v.attributes.popper,{style:v.styles.popper}),C={show:f,placement:y,hasShown:i.current,toggle:e==null?void 0:e.toggle,popper:d?v:null,arrowProps:d?Object.assign({ref:r},v.attributes.arrow,{style:v.styles.arrow}):{}};return BH(g,p,{clickTrigger:a,disabled:!f}),[_,C]}const GH={usePopper:!0};function i_(t){let{children:e}=t,n=qH(t,HH);const[r,i]=yN(n);return A(Xr,{children:e(r,i)})}i_.displayName="DropdownMenu";i_.defaultProps=GH;const _N={prefix:String(Math.round(Math.random()*1e10)),current:0},QH=Rn.createContext(_N);let YH=Boolean(typeof window<"u"&&window.document&&window.document.createElement);function XH(t){let e=E.exports.useContext(QH);return e===_N&&!YH&&console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server."),E.exports.useMemo(()=>t||`react-aria${e.prefix}-${++e.current}`,[t])}const wN=t=>{var e;return((e=t.getAttribute("role"))==null?void 0:e.toLowerCase())==="menu"},cC=()=>{};function EN(){const t=XH(),{show:e=!1,toggle:n=cC,setToggle:r,menuElement:i}=E.exports.useContext(Nd)||{},s=E.exports.useCallback(a=>{n(!e,a)},[e,n]),o={id:t,ref:r||cC,onClick:s,"aria-expanded":!!e};return i&&wN(i)&&(o["aria-haspopup"]=!0),[o,{show:e,toggle:n}]}function CN({children:t}){const[e,n]=EN();return A(Xr,{children:t(e,n)})}CN.displayName="DropdownToggle";const JH=["eventKey","disabled","onClick","active","as"];function ZH(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function TN({key:t,href:e,active:n,disabled:r,onClick:i}){const s=E.exports.useContext(es),o=E.exports.useContext(Sd),{activeKey:a}=o||{},l=Il(t,e),u=n==null&&t!=null?Il(a)===l:n;return[{onClick:Xe(h=>{r||(i==null||i(h),s&&!h.isPropagationStopped()&&s(l,h))}),"aria-disabled":r||void 0,"aria-selected":u,[jo("dropdown-item")]:""},{isActive:u}]}const SN=E.exports.forwardRef((t,e)=>{let{eventKey:n,disabled:r,onClick:i,active:s,as:o=Ly}=t,a=ZH(t,JH);const[l]=TN({key:n,href:a.href,disabled:r,onClick:i,active:s});return A(o,Object.assign({},a,{ref:e},l))});SN.displayName="DropdownItem";function hC(){const t=Ub(),e=E.exports.useRef(null),n=E.exports.useCallback(r=>{e.current=r,t()},[t]);return[e,n]}function hu({defaultShow:t,show:e,onSelect:n,onToggle:r,itemSelector:i=`* [${jo("dropdown-item")}]`,focusFirstItemOnShow:s,placement:o="bottom-start",children:a}){const l=Hy(),[u,c]=Fb(e,t,r),[h,d]=hC(),f=h.current,[p,y]=hC(),w=p.current,g=qb(u),m=E.exports.useRef(null),v=E.exports.useRef(!1),_=E.exports.useContext(es),C=E.exports.useCallback((U,W,H=W==null?void 0:W.type)=>{c(U,{originalEvent:W,source:H})},[c]),T=Xe((U,W)=>{n==null||n(U,W),C(!1,W,"select"),W.isPropagationStopped()||_==null||_(U,W)}),S=E.exports.useMemo(()=>({toggle:C,placement:o,show:u,menuElement:f,toggleElement:w,setMenu:d,setToggle:y}),[C,o,u,f,w,d,y]);f&&g&&!u&&(v.current=f.contains(f.ownerDocument.activeElement));const I=Xe(()=>{w&&w.focus&&w.focus()}),F=Xe(()=>{const U=m.current;let W=s;if(W==null&&(W=h.current&&wN(h.current)?"keyboard":!1),W===!1||W==="keyboard"&&!/^key.+$/.test(U))return;const H=Hn(h.current,i)[0];H&&H.focus&&H.focus()});E.exports.useEffect(()=>{u?F():v.current&&(v.current=!1,I())},[u,v,I,F]),E.exports.useEffect(()=>{m.current=null});const O=(U,W)=>{if(!h.current)return null;const H=Hn(h.current,i);let ue=H.indexOf(U)+W;return ue=Math.max(0,Math.min(ue,H.length)),H[ue]};return w4(E.exports.useCallback(()=>l.document,[l]),"keydown",U=>{var W,H;const{key:ue}=U,te=U.target,we=(W=h.current)==null?void 0:W.contains(te),xe=(H=p.current)==null?void 0:H.contains(te);if(/input|textarea/i.test(te.tagName)&&(ue===" "||ue!=="Escape"&&we||ue==="Escape"&&te.type==="search")||!we&&!xe||ue==="Tab"&&(!h.current||!u))return;m.current=U.type;const L={originalEvent:U,source:U.type};switch(ue){case"ArrowUp":{const M=O(te,-1);M&&M.focus&&M.focus(),U.preventDefault();return}case"ArrowDown":if(U.preventDefault(),!u)c(!0,L);else{const M=O(te,1);M&&M.focus&&M.focus()}return;case"Tab":Jb(te.ownerDocument,"keyup",M=>{var re;(M.key==="Tab"&&!M.target||!((re=h.current)!=null&&re.contains(M.target)))&&c(!1,L)},{once:!0});break;case"Escape":ue==="Escape"&&(U.preventDefault(),U.stopPropagation()),c(!1,L);break}}),A(es.Provider,{value:T,children:A(Nd.Provider,{value:S,children:a})})}hu.displayName="Dropdown";hu.Menu=i_;hu.Toggle=CN;hu.Item=SN;const s_=E.exports.createContext({});s_.displayName="DropdownContext";const IN=E.exports.forwardRef(({bsPrefix:t,className:e,eventKey:n,disabled:r=!1,onClick:i,active:s,as:o=Uy,...a},l)=>{const u=ht(t,"dropdown-item"),[c,h]=TN({key:n,href:a.href,disabled:r,onClick:i,active:s});return A(o,{...a,...c,ref:l,className:Oe(e,u,h.isActive&&"active",r&&"disabled")})});IN.displayName="DropdownItem";const Ad=E.exports.createContext(null);Ad.displayName="InputGroupContext";function kN(t,e){return t}const ys=Jt.exports.oneOf(["start","end"]);Jt.exports.oneOfType([ys,Jt.exports.shape({sm:ys}),Jt.exports.shape({md:ys}),Jt.exports.shape({lg:ys}),Jt.exports.shape({xl:ys}),Jt.exports.shape({xxl:ys}),Jt.exports.object]);const eq={flip:!0};function xN(t,e,n){const r=n?"top-end":"top-start",i=n?"top-start":"top-end",s=n?"bottom-end":"bottom-start",o=n?"bottom-start":"bottom-end",a=n?"right-start":"left-start",l=n?"right-end":"left-end",u=n?"left-start":"right-start",c=n?"left-end":"right-end";let h=t?o:s;return e==="up"?h=t?i:r:e==="end"?h=t?c:u:e==="start"&&(h=t?l:a),h}const o_=E.exports.forwardRef(({bsPrefix:t,className:e,align:n,rootCloseEvent:r,flip:i,show:s,renderOnMount:o,as:a="div",popperConfig:l,variant:u,...c},h)=>{let d=!1;const f=E.exports.useContext(si),p=ht(t,"dropdown-menu"),{align:y,drop:w,isRTL:g}=E.exports.useContext(s_);n=n||y;const m=E.exports.useContext(Ad),v=[];if(n)if(typeof n=="object"){const U=Object.keys(n);if(U.length){const W=U[0],H=n[W];d=H==="start",v.push(`${p}-${W}-${H}`)}}else n==="end"&&(d=!0);const _=xN(d,w,g),[C,{hasShown:T,popper:S,show:I,toggle:F}]=yN({flip:i,rootCloseEvent:r,show:s,usePopper:!f&&v.length===0,offset:[0,2],popperConfig:l,placement:_});if(C.ref=Td(kN(h),C.ref),Kb(()=>{I&&(S==null||S.update())},[I]),!T&&!o&&!m)return null;typeof a!="string"&&(C.show=I,C.close=()=>F==null?void 0:F(!1),C.align=n);let O=c.style;return S!=null&&S.placement&&(O={...c.style,...C.style},c["x-placement"]=S.placement),A(a,{...c,...C,style:O,...(v.length||f)&&{"data-bs-popper":"static"},className:Oe(e,p,I&&"show",d&&`${p}-end`,u&&`${p}-${u}`,...v)})});o_.displayName="DropdownMenu";o_.defaultProps=eq;const bN=E.exports.forwardRef(({bsPrefix:t,split:e,className:n,childBsPrefix:r,as:i=Eo,...s},o)=>{const a=ht(t,"dropdown-toggle"),l=E.exports.useContext(Nd),u=E.exports.useContext(Ad);r!==void 0&&(s.bsPrefix=r);const[c]=EN();return c.ref=Td(c.ref,kN(o)),A(i,{className:Oe(n,a,e&&`${a}-split`,!!u&&(l==null?void 0:l.show)&&"show"),...c,...s})});bN.displayName="DropdownToggle";const tq=hs("dropdown-header",{defaultProps:{role:"heading"}}),nq=hs("dropdown-divider",{Component:"hr",defaultProps:{role:"separator"}}),rq=hs("dropdown-item-text",{Component:"span"}),iq={navbar:!1,align:"start",autoClose:!0},a_=E.exports.forwardRef((t,e)=>{const{bsPrefix:n,drop:r,show:i,className:s,align:o,onSelect:a,onToggle:l,focusFirstItemOnShow:u,as:c="div",navbar:h,autoClose:d,...f}=Fy(t,{show:"onToggle"}),p=E.exports.useContext(Ad),y=ht(n,"dropdown"),w=K3(),g=T=>d===!1?T==="click":d==="inside"?T!=="rootClose":d==="outside"?T!=="select":!0,m=Xe((T,S)=>{S.originalEvent.currentTarget===document&&(S.source!=="keydown"||S.originalEvent.key==="Escape")&&(S.source="rootClose"),g(S.source)&&(l==null||l(T,S))}),_=xN(o==="end",r,w),C=E.exports.useMemo(()=>({align:o,drop:r,isRTL:w}),[o,r,w]);return A(s_.Provider,{value:C,children:A(hu,{placement:_,show:i,onSelect:a,onToggle:m,focusFirstItemOnShow:u,itemSelector:`.${y}-item:not(.disabled):not(:disabled)`,children:p?f.children:A(c,{...f,ref:e,className:Oe(s,i&&"show",(!r||r==="down")&&y,r==="up"&&"dropup",r==="end"&&"dropend",r==="start"&&"dropstart")})})})});a_.displayName="Dropdown";a_.defaultProps=iq;const ki=Object.assign(a_,{Toggle:bN,Menu:o_,Item:IN,ItemText:rq,Divider:nq,Header:tq}),NN=E.exports.forwardRef(({id:t,title:e,children:n,bsPrefix:r,className:i,rootCloseEvent:s,menuRole:o,disabled:a,active:l,renderMenuOnMount:u,menuVariant:c,...h},d)=>{const f=ht(void 0,"nav-item");return un(ki,{ref:d,...h,className:Oe(i,f),children:[A(ki.Toggle,{id:t,eventKey:null,active:l,disabled:a,childBsPrefix:r,as:Id,children:e}),A(ki.Menu,{role:o,renderOnMount:u,rootCloseEvent:s,variant:c,children:n})]})});NN.displayName="NavDropdown";Object.assign(NN,{Item:ki.Item,ItemText:ki.ItemText,Divider:ki.Divider,Header:ki.Header});const sq=async t=>{nD(t),await xD(t,new qn)},oq=()=>{const t=globalThis._reactFirePreloadedObservables;Array.from(t.keys()).forEach(e=>e.includes("firestore")&&t.delete(e))},aq=async t=>{await rD(t),oq()};function lq(){const{data:t}=Rb(),e=Py();return t.signedIn?un(Xr,{children:[A(Eo,{variant:"outline-danger",onClick:()=>aq(e),children:"Sign out"})," "]}):un(Xr,{children:[A(Eo,{variant:"outline-danger",onClick:()=>sq(e),children:"Sign in with Google"})," "]})}function uq(){return A(YE,{bg:"light",expand:"sm",children:un($y,{children:[A(YE.Brand,{children:"Chat"}),A(lq,{})]})})}function cq(){const{status:t,data:e}=Rb();return t==="loading"?A("span",{children:"loading..."}):un(Xr,{children:[A(uq,{}),e.signedIn&&A(Z3,{})]})}const hq={apiKey:"AIzaSyCxXnUidB20eJPotUbQjUUQmVDk_LFIzQk",authDomain:"example-44ced.firebaseapp.com",projectId:"example-44ced",storageBucket:"example-44ced.appspot.com",messagingSenderId:"340859330515",appId:"1:340859330515:web:98a9e55130e5fbcaced926"};function dq({children:t}){const e=bb(),n=pM(e),r=CF(e);return A(U3,{sdk:vB(e),children:A($3,{sdk:n,children:A(F3,{sdk:r,children:t})})})}Wf.createRoot(document.getElementById("root")).render(A(Rn.StrictMode,{children:A(E3,{firebaseConfig:hq,children:A(dq,{children:A(cq,{})})})}));
