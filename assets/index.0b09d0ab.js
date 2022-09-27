(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function eE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var w={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rl=Symbol.for("react.element"),JN=Symbol.for("react.portal"),ZN=Symbol.for("react.fragment"),eR=Symbol.for("react.strict_mode"),tR=Symbol.for("react.profiler"),nR=Symbol.for("react.provider"),rR=Symbol.for("react.context"),iR=Symbol.for("react.forward_ref"),sR=Symbol.for("react.suspense"),oR=Symbol.for("react.memo"),aR=Symbol.for("react.lazy"),Ev=Symbol.iterator;function lR(t){return t===null||typeof t!="object"?null:(t=Ev&&t[Ev]||t["@@iterator"],typeof t=="function"?t:null)}var tE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},nE=Object.assign,rE={};function so(t,e,n){this.props=t,this.context=e,this.refs=rE,this.updater=n||tE}so.prototype.isReactComponent={};so.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};so.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function iE(){}iE.prototype=so.prototype;function sm(t,e,n){this.props=t,this.context=e,this.refs=rE,this.updater=n||tE}var om=sm.prototype=new iE;om.constructor=sm;nE(om,so.prototype);om.isPureReactComponent=!0;var Cv=Array.isArray,sE=Object.prototype.hasOwnProperty,am={current:null},oE={key:!0,ref:!0,__self:!0,__source:!0};function aE(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)sE.call(e,r)&&!oE.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:rl,type:t,key:s,ref:o,props:i,_owner:am.current}}function uR(t,e){return{$$typeof:rl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function lm(t){return typeof t=="object"&&t!==null&&t.$$typeof===rl}function cR(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Tv=/\/+/g;function Zh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?cR(""+t.key):e.toString(36)}function pu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case rl:case JN:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Zh(o,0):r,Cv(i)?(n="",t!=null&&(n=t.replace(Tv,"$&/")+"/"),pu(i,e,n,"",function(u){return u})):i!=null&&(lm(i)&&(i=uR(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Tv,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Cv(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Zh(s,a);o+=pu(s,e,n,l,i)}else if(l=lR(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Zh(s,a++),o+=pu(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function $l(t,e,n){if(t==null)return t;var r=[],i=0;return pu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function hR(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var wt={current:null},mu={transition:null},dR={ReactCurrentDispatcher:wt,ReactCurrentBatchConfig:mu,ReactCurrentOwner:am};Y.Children={map:$l,forEach:function(t,e,n){$l(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return $l(t,function(){e++}),e},toArray:function(t){return $l(t,function(e){return e})||[]},only:function(t){if(!lm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Y.Component=so;Y.Fragment=ZN;Y.Profiler=tR;Y.PureComponent=sm;Y.StrictMode=eR;Y.Suspense=sR;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dR;Y.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=nE({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=am.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)sE.call(e,l)&&!oE.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:rl,type:t.type,key:i,ref:s,props:r,_owner:o}};Y.createContext=function(t){return t={$$typeof:rR,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:nR,_context:t},t.Consumer=t};Y.createElement=aE;Y.createFactory=function(t){var e=aE.bind(null,t);return e.type=t,e};Y.createRef=function(){return{current:null}};Y.forwardRef=function(t){return{$$typeof:iR,render:t}};Y.isValidElement=lm;Y.lazy=function(t){return{$$typeof:aR,_payload:{_status:-1,_result:t},_init:hR}};Y.memo=function(t,e){return{$$typeof:oR,type:t,compare:e===void 0?null:e}};Y.startTransition=function(t){var e=mu.transition;mu.transition={};try{t()}finally{mu.transition=e}};Y.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Y.useCallback=function(t,e){return wt.current.useCallback(t,e)};Y.useContext=function(t){return wt.current.useContext(t)};Y.useDebugValue=function(){};Y.useDeferredValue=function(t){return wt.current.useDeferredValue(t)};Y.useEffect=function(t,e){return wt.current.useEffect(t,e)};Y.useId=function(){return wt.current.useId()};Y.useImperativeHandle=function(t,e,n){return wt.current.useImperativeHandle(t,e,n)};Y.useInsertionEffect=function(t,e){return wt.current.useInsertionEffect(t,e)};Y.useLayoutEffect=function(t,e){return wt.current.useLayoutEffect(t,e)};Y.useMemo=function(t,e){return wt.current.useMemo(t,e)};Y.useReducer=function(t,e,n){return wt.current.useReducer(t,e,n)};Y.useRef=function(t){return wt.current.useRef(t)};Y.useState=function(t){return wt.current.useState(t)};Y.useSyncExternalStore=function(t,e,n){return wt.current.useSyncExternalStore(t,e,n)};Y.useTransition=function(){return wt.current.useTransition()};Y.version="18.2.0";(function(t){t.exports=Y})(w);const Wn=eE(w.exports);var cf={},um={exports:{}},Wt={},lE={exports:{}},uE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(b,F){var $=b.length;b.push(F);e:for(;0<$;){var ne=$-1>>>1,re=b[ne];if(0<i(re,F))b[ne]=F,b[$]=re,$=ne;else break e}}function n(b){return b.length===0?null:b[0]}function r(b){if(b.length===0)return null;var F=b[0],$=b.pop();if($!==F){b[0]=$;e:for(var ne=0,re=b.length,Tt=re>>>1;ne<Tt;){var St=2*(ne+1)-1,Ve=b[St],Be=St+1,En=b[Be];if(0>i(Ve,$))Be<re&&0>i(En,Ve)?(b[ne]=En,b[Be]=$,ne=Be):(b[ne]=Ve,b[St]=$,ne=St);else if(Be<re&&0>i(En,$))b[ne]=En,b[Be]=$,ne=Be;else break e}}return F}function i(b,F){var $=b.sortIndex-F.sortIndex;return $!==0?$:b.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,f=!1,g=!1,v=!1,E=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(b){for(var F=n(u);F!==null;){if(F.callback===null)r(u);else if(F.startTime<=b)r(u),F.sortIndex=F.expirationTime,e(l,F);else break;F=n(u)}}function _(b){if(v=!1,y(b),!g)if(n(l)!==null)g=!0,On(T);else{var F=n(u);F!==null&&wn(_,F.startTime-b)}}function T(b,F){g=!1,v&&(v=!1,m(A),A=-1),f=!0;var $=d;try{for(y(F),h=n(l);h!==null&&(!(h.expirationTime>F)||b&&!Ue());){var ne=h.callback;if(typeof ne=="function"){h.callback=null,d=h.priorityLevel;var re=ne(h.expirationTime<=F);F=t.unstable_now(),typeof re=="function"?h.callback=re:h===n(l)&&r(l),y(F)}else r(l);h=n(l)}if(h!==null)var Tt=!0;else{var St=n(u);St!==null&&wn(_,St.startTime-F),Tt=!1}return Tt}finally{h=null,d=$,f=!1}}var k=!1,x=null,A=-1,J=5,B=-1;function Ue(){return!(t.unstable_now()-B<J)}function Gt(){if(x!==null){var b=t.unstable_now();B=b;var F=!0;try{F=x(!0,b)}finally{F?Ct():(k=!1,x=null)}}else k=!1}var Ct;if(typeof p=="function")Ct=function(){p(Gt)};else if(typeof MessageChannel<"u"){var Qt=new MessageChannel,Te=Qt.port2;Qt.port1.onmessage=Gt,Ct=function(){Te.postMessage(null)}}else Ct=function(){E(Gt,0)};function On(b){x=b,k||(k=!0,Ct())}function wn(b,F){A=E(function(){b(t.unstable_now())},F)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(b){b.callback=null},t.unstable_continueExecution=function(){g||f||(g=!0,On(T))},t.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<b?Math.floor(1e3/b):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(b){switch(d){case 1:case 2:case 3:var F=3;break;default:F=d}var $=d;d=F;try{return b()}finally{d=$}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(b,F){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var $=d;d=b;try{return F()}finally{d=$}},t.unstable_scheduleCallback=function(b,F,$){var ne=t.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?ne+$:ne):$=ne,b){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=$+re,b={id:c++,callback:F,priorityLevel:b,startTime:$,expirationTime:re,sortIndex:-1},$>ne?(b.sortIndex=$,e(u,b),n(l)===null&&b===n(u)&&(v?(m(A),A=-1):v=!0,wn(_,$-ne))):(b.sortIndex=re,e(l,b),g||f||(g=!0,On(T))),b},t.unstable_shouldYield=Ue,t.unstable_wrapCallback=function(b){var F=d;return function(){var $=d;d=F;try{return b.apply(this,arguments)}finally{d=$}}}})(uE);(function(t){t.exports=uE})(lE);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cE=w.exports,jt=lE.exports;function S(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var hE=new Set,fa={};function Ui(t,e){Ms(t,e),Ms(t+"Capture",e)}function Ms(t,e){for(fa[t]=e,t=0;t<e.length;t++)hE.add(e[t])}var Yn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hf=Object.prototype.hasOwnProperty,fR=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Sv={},Iv={};function pR(t){return hf.call(Iv,t)?!0:hf.call(Sv,t)?!1:fR.test(t)?Iv[t]=!0:(Sv[t]=!0,!1)}function mR(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function gR(t,e,n,r){if(e===null||typeof e>"u"||mR(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Et(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var nt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){nt[t]=new Et(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];nt[e]=new Et(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){nt[t]=new Et(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){nt[t]=new Et(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){nt[t]=new Et(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){nt[t]=new Et(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){nt[t]=new Et(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){nt[t]=new Et(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){nt[t]=new Et(t,5,!1,t.toLowerCase(),null,!1,!1)});var cm=/[\-:]([a-z])/g;function hm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(cm,hm);nt[e]=new Et(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(cm,hm);nt[e]=new Et(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(cm,hm);nt[e]=new Et(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){nt[t]=new Et(t,1,!1,t.toLowerCase(),null,!1,!1)});nt.xlinkHref=new Et("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){nt[t]=new Et(t,1,!1,t.toLowerCase(),null,!0,!0)});function dm(t,e,n,r){var i=nt.hasOwnProperty(e)?nt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(gR(e,n,i,r)&&(n=null),r||i===null?pR(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var or=cE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ul=Symbol.for("react.element"),rs=Symbol.for("react.portal"),is=Symbol.for("react.fragment"),fm=Symbol.for("react.strict_mode"),df=Symbol.for("react.profiler"),dE=Symbol.for("react.provider"),fE=Symbol.for("react.context"),pm=Symbol.for("react.forward_ref"),ff=Symbol.for("react.suspense"),pf=Symbol.for("react.suspense_list"),mm=Symbol.for("react.memo"),fr=Symbol.for("react.lazy"),pE=Symbol.for("react.offscreen"),kv=Symbol.iterator;function Io(t){return t===null||typeof t!="object"?null:(t=kv&&t[kv]||t["@@iterator"],typeof t=="function"?t:null)}var we=Object.assign,ed;function Vo(t){if(ed===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ed=e&&e[1]||""}return`
`+ed+t}var td=!1;function nd(t,e){if(!t||td)return"";td=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{td=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Vo(t):""}function yR(t){switch(t.tag){case 5:return Vo(t.type);case 16:return Vo("Lazy");case 13:return Vo("Suspense");case 19:return Vo("SuspenseList");case 0:case 2:case 15:return t=nd(t.type,!1),t;case 11:return t=nd(t.type.render,!1),t;case 1:return t=nd(t.type,!0),t;default:return""}}function mf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case is:return"Fragment";case rs:return"Portal";case df:return"Profiler";case fm:return"StrictMode";case ff:return"Suspense";case pf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case fE:return(t.displayName||"Context")+".Consumer";case dE:return(t._context.displayName||"Context")+".Provider";case pm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case mm:return e=t.displayName||null,e!==null?e:mf(t.type)||"Memo";case fr:e=t._payload,t=t._init;try{return mf(t(e))}catch{}}return null}function vR(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return mf(e);case 8:return e===fm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Dr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function mE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function _R(t){var e=mE(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Vl(t){t._valueTracker||(t._valueTracker=_R(t))}function gE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=mE(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function $u(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function gf(t,e){var n=e.checked;return we({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function Nv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Dr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function yE(t,e){e=e.checked,e!=null&&dm(t,"checked",e,!1)}function yf(t,e){yE(t,e);var n=Dr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?vf(t,e.type,n):e.hasOwnProperty("defaultValue")&&vf(t,e.type,Dr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Rv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function vf(t,e,n){(e!=="number"||$u(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Bo=Array.isArray;function ws(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Dr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function _f(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(S(91));return we({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function xv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(S(92));if(Bo(n)){if(1<n.length)throw Error(S(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Dr(n)}}function vE(t,e){var n=Dr(e.value),r=Dr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function bv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function _E(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?_E(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Bl,wE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Bl=Bl||document.createElement("div"),Bl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Bl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function pa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Go={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},wR=["Webkit","ms","Moz","O"];Object.keys(Go).forEach(function(t){wR.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Go[e]=Go[t]})});function EE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Go.hasOwnProperty(t)&&Go[t]?(""+e).trim():e+"px"}function CE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=EE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var ER=we({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ef(t,e){if(e){if(ER[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(S(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(S(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(S(61))}if(e.style!=null&&typeof e.style!="object")throw Error(S(62))}}function Cf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tf=null;function gm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Sf=null,Es=null,Cs=null;function Av(t){if(t=ol(t)){if(typeof Sf!="function")throw Error(S(280));var e=t.stateNode;e&&(e=Xc(e),Sf(t.stateNode,t.type,e))}}function TE(t){Es?Cs?Cs.push(t):Cs=[t]:Es=t}function SE(){if(Es){var t=Es,e=Cs;if(Cs=Es=null,Av(t),e)for(t=0;t<e.length;t++)Av(e[t])}}function IE(t,e){return t(e)}function kE(){}var rd=!1;function NE(t,e,n){if(rd)return t(e,n);rd=!0;try{return IE(t,e,n)}finally{rd=!1,(Es!==null||Cs!==null)&&(kE(),SE())}}function ma(t,e){var n=t.stateNode;if(n===null)return null;var r=Xc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(S(231,e,typeof n));return n}var If=!1;if(Yn)try{var ko={};Object.defineProperty(ko,"passive",{get:function(){If=!0}}),window.addEventListener("test",ko,ko),window.removeEventListener("test",ko,ko)}catch{If=!1}function CR(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Qo=!1,Uu=null,Vu=!1,kf=null,TR={onError:function(t){Qo=!0,Uu=t}};function SR(t,e,n,r,i,s,o,a,l){Qo=!1,Uu=null,CR.apply(TR,arguments)}function IR(t,e,n,r,i,s,o,a,l){if(SR.apply(this,arguments),Qo){if(Qo){var u=Uu;Qo=!1,Uu=null}else throw Error(S(198));Vu||(Vu=!0,kf=u)}}function Vi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function RE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Pv(t){if(Vi(t)!==t)throw Error(S(188))}function kR(t){var e=t.alternate;if(!e){if(e=Vi(t),e===null)throw Error(S(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Pv(i),t;if(s===r)return Pv(i),e;s=s.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?t:e}function xE(t){return t=kR(t),t!==null?bE(t):null}function bE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=bE(t);if(e!==null)return e;t=t.sibling}return null}var AE=jt.unstable_scheduleCallback,Ov=jt.unstable_cancelCallback,NR=jt.unstable_shouldYield,RR=jt.unstable_requestPaint,Se=jt.unstable_now,xR=jt.unstable_getCurrentPriorityLevel,ym=jt.unstable_ImmediatePriority,PE=jt.unstable_UserBlockingPriority,Bu=jt.unstable_NormalPriority,bR=jt.unstable_LowPriority,OE=jt.unstable_IdlePriority,Kc=null,kn=null;function AR(t){if(kn&&typeof kn.onCommitFiberRoot=="function")try{kn.onCommitFiberRoot(Kc,t,void 0,(t.current.flags&128)===128)}catch{}}var mn=Math.clz32?Math.clz32:DR,PR=Math.log,OR=Math.LN2;function DR(t){return t>>>=0,t===0?32:31-(PR(t)/OR|0)|0}var jl=64,zl=4194304;function jo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ju(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=jo(a):(s&=o,s!==0&&(r=jo(s)))}else o=n&~i,o!==0?r=jo(o):s!==0&&(r=jo(s));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-mn(e),i=1<<n,r|=t[n],e&=~i;return r}function MR(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function LR(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-mn(s),a=1<<o,l=i[o];l===-1?((a&n)===0||(a&r)!==0)&&(i[o]=MR(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Nf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function DE(){var t=jl;return jl<<=1,(jl&4194240)===0&&(jl=64),t}function id(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function il(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-mn(e),t[e]=n}function FR(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-mn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function vm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-mn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var oe=0;function ME(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var LE,_m,FE,$E,UE,Rf=!1,Hl=[],Tr=null,Sr=null,Ir=null,ga=new Map,ya=new Map,gr=[],$R="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Dv(t,e){switch(t){case"focusin":case"focusout":Tr=null;break;case"dragenter":case"dragleave":Sr=null;break;case"mouseover":case"mouseout":Ir=null;break;case"pointerover":case"pointerout":ga.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ya.delete(e.pointerId)}}function No(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ol(e),e!==null&&_m(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function UR(t,e,n,r,i){switch(e){case"focusin":return Tr=No(Tr,t,e,n,r,i),!0;case"dragenter":return Sr=No(Sr,t,e,n,r,i),!0;case"mouseover":return Ir=No(Ir,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ga.set(s,No(ga.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ya.set(s,No(ya.get(s)||null,t,e,n,r,i)),!0}return!1}function VE(t){var e=ri(t.target);if(e!==null){var n=Vi(e);if(n!==null){if(e=n.tag,e===13){if(e=RE(n),e!==null){t.blockedOn=e,UE(t.priority,function(){FE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function gu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=xf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Tf=r,n.target.dispatchEvent(r),Tf=null}else return e=ol(n),e!==null&&_m(e),t.blockedOn=n,!1;e.shift()}return!0}function Mv(t,e,n){gu(t)&&n.delete(e)}function VR(){Rf=!1,Tr!==null&&gu(Tr)&&(Tr=null),Sr!==null&&gu(Sr)&&(Sr=null),Ir!==null&&gu(Ir)&&(Ir=null),ga.forEach(Mv),ya.forEach(Mv)}function Ro(t,e){t.blockedOn===e&&(t.blockedOn=null,Rf||(Rf=!0,jt.unstable_scheduleCallback(jt.unstable_NormalPriority,VR)))}function va(t){function e(i){return Ro(i,t)}if(0<Hl.length){Ro(Hl[0],t);for(var n=1;n<Hl.length;n++){var r=Hl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Tr!==null&&Ro(Tr,t),Sr!==null&&Ro(Sr,t),Ir!==null&&Ro(Ir,t),ga.forEach(e),ya.forEach(e),n=0;n<gr.length;n++)r=gr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<gr.length&&(n=gr[0],n.blockedOn===null);)VE(n),n.blockedOn===null&&gr.shift()}var Ts=or.ReactCurrentBatchConfig,zu=!0;function BR(t,e,n,r){var i=oe,s=Ts.transition;Ts.transition=null;try{oe=1,wm(t,e,n,r)}finally{oe=i,Ts.transition=s}}function jR(t,e,n,r){var i=oe,s=Ts.transition;Ts.transition=null;try{oe=4,wm(t,e,n,r)}finally{oe=i,Ts.transition=s}}function wm(t,e,n,r){if(zu){var i=xf(t,e,n,r);if(i===null)pd(t,e,r,Hu,n),Dv(t,r);else if(UR(i,t,e,n,r))r.stopPropagation();else if(Dv(t,r),e&4&&-1<$R.indexOf(t)){for(;i!==null;){var s=ol(i);if(s!==null&&LE(s),s=xf(t,e,n,r),s===null&&pd(t,e,r,Hu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else pd(t,e,r,null,n)}}var Hu=null;function xf(t,e,n,r){if(Hu=null,t=gm(r),t=ri(t),t!==null)if(e=Vi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=RE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Hu=t,null}function BE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xR()){case ym:return 1;case PE:return 4;case Bu:case bR:return 16;case OE:return 536870912;default:return 16}default:return 16}}var Er=null,Em=null,yu=null;function jE(){if(yu)return yu;var t,e=Em,n=e.length,r,i="value"in Er?Er.value:Er.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return yu=i.slice(t,1<r?1-r:void 0)}function vu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Wl(){return!0}function Lv(){return!1}function qt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Wl:Lv,this.isPropagationStopped=Lv,this}return we(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Wl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Wl)},persist:function(){},isPersistent:Wl}),e}var oo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cm=qt(oo),sl=we({},oo,{view:0,detail:0}),zR=qt(sl),sd,od,xo,Gc=we({},sl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==xo&&(xo&&t.type==="mousemove"?(sd=t.screenX-xo.screenX,od=t.screenY-xo.screenY):od=sd=0,xo=t),sd)},movementY:function(t){return"movementY"in t?t.movementY:od}}),Fv=qt(Gc),HR=we({},Gc,{dataTransfer:0}),WR=qt(HR),qR=we({},sl,{relatedTarget:0}),ad=qt(qR),KR=we({},oo,{animationName:0,elapsedTime:0,pseudoElement:0}),GR=qt(KR),QR=we({},oo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),YR=qt(QR),XR=we({},oo,{data:0}),$v=qt(XR),JR={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ZR={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ex={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ex[t])?!!e[t]:!1}function Tm(){return tx}var nx=we({},sl,{key:function(t){if(t.key){var e=JR[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=vu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ZR[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tm,charCode:function(t){return t.type==="keypress"?vu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?vu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),rx=qt(nx),ix=we({},Gc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Uv=qt(ix),sx=we({},sl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tm}),ox=qt(sx),ax=we({},oo,{propertyName:0,elapsedTime:0,pseudoElement:0}),lx=qt(ax),ux=we({},Gc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),cx=qt(ux),hx=[9,13,27,32],Sm=Yn&&"CompositionEvent"in window,Yo=null;Yn&&"documentMode"in document&&(Yo=document.documentMode);var dx=Yn&&"TextEvent"in window&&!Yo,zE=Yn&&(!Sm||Yo&&8<Yo&&11>=Yo),Vv=String.fromCharCode(32),Bv=!1;function HE(t,e){switch(t){case"keyup":return hx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function WE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ss=!1;function fx(t,e){switch(t){case"compositionend":return WE(e);case"keypress":return e.which!==32?null:(Bv=!0,Vv);case"textInput":return t=e.data,t===Vv&&Bv?null:t;default:return null}}function px(t,e){if(ss)return t==="compositionend"||!Sm&&HE(t,e)?(t=jE(),yu=Em=Er=null,ss=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return zE&&e.locale!=="ko"?null:e.data;default:return null}}var mx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!mx[t.type]:e==="textarea"}function qE(t,e,n,r){TE(r),e=Wu(e,"onChange"),0<e.length&&(n=new Cm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Xo=null,_a=null;function gx(t){rC(t,0)}function Qc(t){var e=ls(t);if(gE(e))return t}function yx(t,e){if(t==="change")return e}var KE=!1;if(Yn){var ld;if(Yn){var ud="oninput"in document;if(!ud){var zv=document.createElement("div");zv.setAttribute("oninput","return;"),ud=typeof zv.oninput=="function"}ld=ud}else ld=!1;KE=ld&&(!document.documentMode||9<document.documentMode)}function Hv(){Xo&&(Xo.detachEvent("onpropertychange",GE),_a=Xo=null)}function GE(t){if(t.propertyName==="value"&&Qc(_a)){var e=[];qE(e,_a,t,gm(t)),NE(gx,e)}}function vx(t,e,n){t==="focusin"?(Hv(),Xo=e,_a=n,Xo.attachEvent("onpropertychange",GE)):t==="focusout"&&Hv()}function _x(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Qc(_a)}function wx(t,e){if(t==="click")return Qc(e)}function Ex(t,e){if(t==="input"||t==="change")return Qc(e)}function Cx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var _n=typeof Object.is=="function"?Object.is:Cx;function wa(t,e){if(_n(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!hf.call(e,i)||!_n(t[i],e[i]))return!1}return!0}function Wv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function qv(t,e){var n=Wv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Wv(n)}}function QE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?QE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function YE(){for(var t=window,e=$u();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=$u(t.document)}return e}function Im(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Tx(t){var e=YE(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&QE(n.ownerDocument.documentElement,n)){if(r!==null&&Im(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=qv(n,s);var o=qv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Sx=Yn&&"documentMode"in document&&11>=document.documentMode,os=null,bf=null,Jo=null,Af=!1;function Kv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Af||os==null||os!==$u(r)||(r=os,"selectionStart"in r&&Im(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Jo&&wa(Jo,r)||(Jo=r,r=Wu(bf,"onSelect"),0<r.length&&(e=new Cm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=os)))}function ql(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var as={animationend:ql("Animation","AnimationEnd"),animationiteration:ql("Animation","AnimationIteration"),animationstart:ql("Animation","AnimationStart"),transitionend:ql("Transition","TransitionEnd")},cd={},XE={};Yn&&(XE=document.createElement("div").style,"AnimationEvent"in window||(delete as.animationend.animation,delete as.animationiteration.animation,delete as.animationstart.animation),"TransitionEvent"in window||delete as.transitionend.transition);function Yc(t){if(cd[t])return cd[t];if(!as[t])return t;var e=as[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in XE)return cd[t]=e[n];return t}var JE=Yc("animationend"),ZE=Yc("animationiteration"),eC=Yc("animationstart"),tC=Yc("transitionend"),nC=new Map,Gv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jr(t,e){nC.set(t,e),Ui(e,[t])}for(var hd=0;hd<Gv.length;hd++){var dd=Gv[hd],Ix=dd.toLowerCase(),kx=dd[0].toUpperCase()+dd.slice(1);jr(Ix,"on"+kx)}jr(JE,"onAnimationEnd");jr(ZE,"onAnimationIteration");jr(eC,"onAnimationStart");jr("dblclick","onDoubleClick");jr("focusin","onFocus");jr("focusout","onBlur");jr(tC,"onTransitionEnd");Ms("onMouseEnter",["mouseout","mouseover"]);Ms("onMouseLeave",["mouseout","mouseover"]);Ms("onPointerEnter",["pointerout","pointerover"]);Ms("onPointerLeave",["pointerout","pointerover"]);Ui("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ui("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ui("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ui("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ui("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ui("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Nx=new Set("cancel close invalid load scroll toggle".split(" ").concat(zo));function Qv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,IR(r,e,void 0,t),t.currentTarget=null}function rC(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Qv(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Qv(i,a,u),s=l}}}if(Vu)throw t=kf,Vu=!1,kf=null,t}function de(t,e){var n=e[Lf];n===void 0&&(n=e[Lf]=new Set);var r=t+"__bubble";n.has(r)||(iC(e,t,2,!1),n.add(r))}function fd(t,e,n){var r=0;e&&(r|=4),iC(n,t,r,e)}var Kl="_reactListening"+Math.random().toString(36).slice(2);function Ea(t){if(!t[Kl]){t[Kl]=!0,hE.forEach(function(n){n!=="selectionchange"&&(Nx.has(n)||fd(n,!1,t),fd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Kl]||(e[Kl]=!0,fd("selectionchange",!1,e))}}function iC(t,e,n,r){switch(BE(e)){case 1:var i=BR;break;case 4:i=jR;break;default:i=wm}n=i.bind(null,e,n,t),i=void 0,!If||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function pd(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=ri(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}NE(function(){var u=s,c=gm(n),h=[];e:{var d=nC.get(t);if(d!==void 0){var f=Cm,g=t;switch(t){case"keypress":if(vu(n)===0)break e;case"keydown":case"keyup":f=rx;break;case"focusin":g="focus",f=ad;break;case"focusout":g="blur",f=ad;break;case"beforeblur":case"afterblur":f=ad;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=Fv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=WR;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=ox;break;case JE:case ZE:case eC:f=GR;break;case tC:f=lx;break;case"scroll":f=zR;break;case"wheel":f=cx;break;case"copy":case"cut":case"paste":f=YR;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=Uv}var v=(e&4)!==0,E=!v&&t==="scroll",m=v?d!==null?d+"Capture":null:d;v=[];for(var p=u,y;p!==null;){y=p;var _=y.stateNode;if(y.tag===5&&_!==null&&(y=_,m!==null&&(_=ma(p,m),_!=null&&v.push(Ca(p,_,y)))),E)break;p=p.return}0<v.length&&(d=new f(d,g,null,n,c),h.push({event:d,listeners:v}))}}if((e&7)===0){e:{if(d=t==="mouseover"||t==="pointerover",f=t==="mouseout"||t==="pointerout",d&&n!==Tf&&(g=n.relatedTarget||n.fromElement)&&(ri(g)||g[Xn]))break e;if((f||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,f?(g=n.relatedTarget||n.toElement,f=u,g=g?ri(g):null,g!==null&&(E=Vi(g),g!==E||g.tag!==5&&g.tag!==6)&&(g=null)):(f=null,g=u),f!==g)){if(v=Fv,_="onMouseLeave",m="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(v=Uv,_="onPointerLeave",m="onPointerEnter",p="pointer"),E=f==null?d:ls(f),y=g==null?d:ls(g),d=new v(_,p+"leave",f,n,c),d.target=E,d.relatedTarget=y,_=null,ri(c)===u&&(v=new v(m,p+"enter",g,n,c),v.target=y,v.relatedTarget=E,_=v),E=_,f&&g)t:{for(v=f,m=g,p=0,y=v;y;y=Xi(y))p++;for(y=0,_=m;_;_=Xi(_))y++;for(;0<p-y;)v=Xi(v),p--;for(;0<y-p;)m=Xi(m),y--;for(;p--;){if(v===m||m!==null&&v===m.alternate)break t;v=Xi(v),m=Xi(m)}v=null}else v=null;f!==null&&Yv(h,d,f,v,!1),g!==null&&E!==null&&Yv(h,E,g,v,!0)}}e:{if(d=u?ls(u):window,f=d.nodeName&&d.nodeName.toLowerCase(),f==="select"||f==="input"&&d.type==="file")var T=yx;else if(jv(d))if(KE)T=Ex;else{T=_x;var k=vx}else(f=d.nodeName)&&f.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(T=wx);if(T&&(T=T(t,u))){qE(h,T,n,c);break e}k&&k(t,d,u),t==="focusout"&&(k=d._wrapperState)&&k.controlled&&d.type==="number"&&vf(d,"number",d.value)}switch(k=u?ls(u):window,t){case"focusin":(jv(k)||k.contentEditable==="true")&&(os=k,bf=u,Jo=null);break;case"focusout":Jo=bf=os=null;break;case"mousedown":Af=!0;break;case"contextmenu":case"mouseup":case"dragend":Af=!1,Kv(h,n,c);break;case"selectionchange":if(Sx)break;case"keydown":case"keyup":Kv(h,n,c)}var x;if(Sm)e:{switch(t){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else ss?HE(t,n)&&(A="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(zE&&n.locale!=="ko"&&(ss||A!=="onCompositionStart"?A==="onCompositionEnd"&&ss&&(x=jE()):(Er=c,Em="value"in Er?Er.value:Er.textContent,ss=!0)),k=Wu(u,A),0<k.length&&(A=new $v(A,t,null,n,c),h.push({event:A,listeners:k}),x?A.data=x:(x=WE(n),x!==null&&(A.data=x)))),(x=dx?fx(t,n):px(t,n))&&(u=Wu(u,"onBeforeInput"),0<u.length&&(c=new $v("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=x))}rC(h,e)})}function Ca(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Wu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ma(t,n),s!=null&&r.unshift(Ca(t,s,i)),s=ma(t,e),s!=null&&r.push(Ca(t,s,i))),t=t.return}return r}function Xi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Yv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ma(n,s),l!=null&&o.unshift(Ca(n,l,a))):i||(l=ma(n,s),l!=null&&o.push(Ca(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Rx=/\r\n?/g,xx=/\u0000|\uFFFD/g;function Xv(t){return(typeof t=="string"?t:""+t).replace(Rx,`
`).replace(xx,"")}function Gl(t,e,n){if(e=Xv(e),Xv(t)!==e&&n)throw Error(S(425))}function qu(){}var Pf=null,Of=null;function Df(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Mf=typeof setTimeout=="function"?setTimeout:void 0,bx=typeof clearTimeout=="function"?clearTimeout:void 0,Jv=typeof Promise=="function"?Promise:void 0,Ax=typeof queueMicrotask=="function"?queueMicrotask:typeof Jv<"u"?function(t){return Jv.resolve(null).then(t).catch(Px)}:Mf;function Px(t){setTimeout(function(){throw t})}function md(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),va(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);va(e)}function kr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Zv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ao=Math.random().toString(36).slice(2),Sn="__reactFiber$"+ao,Ta="__reactProps$"+ao,Xn="__reactContainer$"+ao,Lf="__reactEvents$"+ao,Ox="__reactListeners$"+ao,Dx="__reactHandles$"+ao;function ri(t){var e=t[Sn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Xn]||n[Sn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Zv(t);t!==null;){if(n=t[Sn])return n;t=Zv(t)}return e}t=n,n=t.parentNode}return null}function ol(t){return t=t[Sn]||t[Xn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ls(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(S(33))}function Xc(t){return t[Ta]||null}var Ff=[],us=-1;function zr(t){return{current:t}}function pe(t){0>us||(t.current=Ff[us],Ff[us]=null,us--)}function ce(t,e){us++,Ff[us]=t.current,t.current=e}var Mr={},dt=zr(Mr),Ot=zr(!1),wi=Mr;function Ls(t,e){var n=t.type.contextTypes;if(!n)return Mr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Dt(t){return t=t.childContextTypes,t!=null}function Ku(){pe(Ot),pe(dt)}function e_(t,e,n){if(dt.current!==Mr)throw Error(S(168));ce(dt,e),ce(Ot,n)}function sC(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(S(108,vR(t)||"Unknown",i));return we({},n,r)}function Gu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Mr,wi=dt.current,ce(dt,t),ce(Ot,Ot.current),!0}function t_(t,e,n){var r=t.stateNode;if(!r)throw Error(S(169));n?(t=sC(t,e,wi),r.__reactInternalMemoizedMergedChildContext=t,pe(Ot),pe(dt),ce(dt,t)):pe(Ot),ce(Ot,n)}var Mn=null,Jc=!1,gd=!1;function oC(t){Mn===null?Mn=[t]:Mn.push(t)}function Mx(t){Jc=!0,oC(t)}function Hr(){if(!gd&&Mn!==null){gd=!0;var t=0,e=oe;try{var n=Mn;for(oe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Mn=null,Jc=!1}catch(i){throw Mn!==null&&(Mn=Mn.slice(t+1)),AE(ym,Hr),i}finally{oe=e,gd=!1}}return null}var cs=[],hs=0,Qu=null,Yu=0,Yt=[],Xt=0,Ei=null,$n=1,Un="";function Xr(t,e){cs[hs++]=Yu,cs[hs++]=Qu,Qu=t,Yu=e}function aC(t,e,n){Yt[Xt++]=$n,Yt[Xt++]=Un,Yt[Xt++]=Ei,Ei=t;var r=$n;t=Un;var i=32-mn(r)-1;r&=~(1<<i),n+=1;var s=32-mn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,$n=1<<32-mn(e)+i|n<<i|r,Un=s+t}else $n=1<<s|n<<i|r,Un=t}function km(t){t.return!==null&&(Xr(t,1),aC(t,1,0))}function Nm(t){for(;t===Qu;)Qu=cs[--hs],cs[hs]=null,Yu=cs[--hs],cs[hs]=null;for(;t===Ei;)Ei=Yt[--Xt],Yt[Xt]=null,Un=Yt[--Xt],Yt[Xt]=null,$n=Yt[--Xt],Yt[Xt]=null}var Ut=null,$t=null,me=!1,un=null;function lC(t,e){var n=Jt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function n_(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ut=t,$t=kr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ut=t,$t=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ei!==null?{id:$n,overflow:Un}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Jt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ut=t,$t=null,!0):!1;default:return!1}}function $f(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Uf(t){if(me){var e=$t;if(e){var n=e;if(!n_(t,e)){if($f(t))throw Error(S(418));e=kr(n.nextSibling);var r=Ut;e&&n_(t,e)?lC(r,n):(t.flags=t.flags&-4097|2,me=!1,Ut=t)}}else{if($f(t))throw Error(S(418));t.flags=t.flags&-4097|2,me=!1,Ut=t}}}function r_(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ut=t}function Ql(t){if(t!==Ut)return!1;if(!me)return r_(t),me=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Df(t.type,t.memoizedProps)),e&&(e=$t)){if($f(t))throw uC(),Error(S(418));for(;e;)lC(t,e),e=kr(e.nextSibling)}if(r_(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(S(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){$t=kr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}$t=null}}else $t=Ut?kr(t.stateNode.nextSibling):null;return!0}function uC(){for(var t=$t;t;)t=kr(t.nextSibling)}function Fs(){$t=Ut=null,me=!1}function Rm(t){un===null?un=[t]:un.push(t)}var Lx=or.ReactCurrentBatchConfig;function an(t,e){if(t&&t.defaultProps){e=we({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Xu=zr(null),Ju=null,ds=null,xm=null;function bm(){xm=ds=Ju=null}function Am(t){var e=Xu.current;pe(Xu),t._currentValue=e}function Vf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ss(t,e){Ju=t,xm=ds=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(xt=!0),t.firstContext=null)}function tn(t){var e=t._currentValue;if(xm!==t)if(t={context:t,memoizedValue:e,next:null},ds===null){if(Ju===null)throw Error(S(308));ds=t,Ju.dependencies={lanes:0,firstContext:t}}else ds=ds.next=t;return e}var ii=null;function Pm(t){ii===null?ii=[t]:ii.push(t)}function cC(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Pm(e)):(n.next=i.next,i.next=n),e.interleaved=n,Jn(t,r)}function Jn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var pr=!1;function Om(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hC(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function qn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Nr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(ee&2)!==0){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Jn(t,n)}return i=r.interleaved,i===null?(e.next=e,Pm(r)):(e.next=i.next,i.next=e),r.interleaved=e,Jn(t,n)}function _u(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,vm(t,n)}}function i_(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Zu(t,e,n,r){var i=t.updateQueue;pr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,f=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:f,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,v=a;switch(d=e,f=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){h=g.call(f,h,d);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,d=typeof g=="function"?g.call(f,h,d):g,d==null)break e;h=we({},h,d);break e;case 2:pr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else f={eventTime:f,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=f,l=h):c=c.next=f,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ti|=o,t.lanes=o,t.memoizedState=h}}function s_(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var dC=new cE.Component().refs;function Bf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:we({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Zc={isMounted:function(t){return(t=t._reactInternals)?Vi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=yt(),i=xr(t),s=qn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Nr(t,s,i),e!==null&&(gn(e,t,i,r),_u(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=yt(),i=xr(t),s=qn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Nr(t,s,i),e!==null&&(gn(e,t,i,r),_u(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=yt(),r=xr(t),i=qn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Nr(t,i,r),e!==null&&(gn(e,t,r,n),_u(e,t,r))}};function o_(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!wa(n,r)||!wa(i,s):!0}function fC(t,e,n){var r=!1,i=Mr,s=e.contextType;return typeof s=="object"&&s!==null?s=tn(s):(i=Dt(e)?wi:dt.current,r=e.contextTypes,s=(r=r!=null)?Ls(t,i):Mr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Zc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function a_(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Zc.enqueueReplaceState(e,e.state,null)}function jf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=dC,Om(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=tn(s):(s=Dt(e)?wi:dt.current,i.context=Ls(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Bf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Zc.enqueueReplaceState(i,i.state,null),Zu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function bo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===dC&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,t))}return t}function Yl(t,e){throw t=Object.prototype.toString.call(e),Error(S(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function l_(t){var e=t._init;return e(t._payload)}function pC(t){function e(m,p){if(t){var y=m.deletions;y===null?(m.deletions=[p],m.flags|=16):y.push(p)}}function n(m,p){if(!t)return null;for(;p!==null;)e(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=br(m,p),m.index=0,m.sibling=null,m}function s(m,p,y){return m.index=y,t?(y=m.alternate,y!==null?(y=y.index,y<p?(m.flags|=2,p):y):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,p,y,_){return p===null||p.tag!==6?(p=Td(y,m.mode,_),p.return=m,p):(p=i(p,y),p.return=m,p)}function l(m,p,y,_){var T=y.type;return T===is?c(m,p,y.props.children,_,y.key):p!==null&&(p.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===fr&&l_(T)===p.type)?(_=i(p,y.props),_.ref=bo(m,p,y),_.return=m,_):(_=Iu(y.type,y.key,y.props,null,m.mode,_),_.ref=bo(m,p,y),_.return=m,_)}function u(m,p,y,_){return p===null||p.tag!==4||p.stateNode.containerInfo!==y.containerInfo||p.stateNode.implementation!==y.implementation?(p=Sd(y,m.mode,_),p.return=m,p):(p=i(p,y.children||[]),p.return=m,p)}function c(m,p,y,_,T){return p===null||p.tag!==7?(p=fi(y,m.mode,_,T),p.return=m,p):(p=i(p,y),p.return=m,p)}function h(m,p,y){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Td(""+p,m.mode,y),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ul:return y=Iu(p.type,p.key,p.props,null,m.mode,y),y.ref=bo(m,null,p),y.return=m,y;case rs:return p=Sd(p,m.mode,y),p.return=m,p;case fr:var _=p._init;return h(m,_(p._payload),y)}if(Bo(p)||Io(p))return p=fi(p,m.mode,y,null),p.return=m,p;Yl(m,p)}return null}function d(m,p,y,_){var T=p!==null?p.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return T!==null?null:a(m,p,""+y,_);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ul:return y.key===T?l(m,p,y,_):null;case rs:return y.key===T?u(m,p,y,_):null;case fr:return T=y._init,d(m,p,T(y._payload),_)}if(Bo(y)||Io(y))return T!==null?null:c(m,p,y,_,null);Yl(m,y)}return null}function f(m,p,y,_,T){if(typeof _=="string"&&_!==""||typeof _=="number")return m=m.get(y)||null,a(p,m,""+_,T);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ul:return m=m.get(_.key===null?y:_.key)||null,l(p,m,_,T);case rs:return m=m.get(_.key===null?y:_.key)||null,u(p,m,_,T);case fr:var k=_._init;return f(m,p,y,k(_._payload),T)}if(Bo(_)||Io(_))return m=m.get(y)||null,c(p,m,_,T,null);Yl(p,_)}return null}function g(m,p,y,_){for(var T=null,k=null,x=p,A=p=0,J=null;x!==null&&A<y.length;A++){x.index>A?(J=x,x=null):J=x.sibling;var B=d(m,x,y[A],_);if(B===null){x===null&&(x=J);break}t&&x&&B.alternate===null&&e(m,x),p=s(B,p,A),k===null?T=B:k.sibling=B,k=B,x=J}if(A===y.length)return n(m,x),me&&Xr(m,A),T;if(x===null){for(;A<y.length;A++)x=h(m,y[A],_),x!==null&&(p=s(x,p,A),k===null?T=x:k.sibling=x,k=x);return me&&Xr(m,A),T}for(x=r(m,x);A<y.length;A++)J=f(x,m,A,y[A],_),J!==null&&(t&&J.alternate!==null&&x.delete(J.key===null?A:J.key),p=s(J,p,A),k===null?T=J:k.sibling=J,k=J);return t&&x.forEach(function(Ue){return e(m,Ue)}),me&&Xr(m,A),T}function v(m,p,y,_){var T=Io(y);if(typeof T!="function")throw Error(S(150));if(y=T.call(y),y==null)throw Error(S(151));for(var k=T=null,x=p,A=p=0,J=null,B=y.next();x!==null&&!B.done;A++,B=y.next()){x.index>A?(J=x,x=null):J=x.sibling;var Ue=d(m,x,B.value,_);if(Ue===null){x===null&&(x=J);break}t&&x&&Ue.alternate===null&&e(m,x),p=s(Ue,p,A),k===null?T=Ue:k.sibling=Ue,k=Ue,x=J}if(B.done)return n(m,x),me&&Xr(m,A),T;if(x===null){for(;!B.done;A++,B=y.next())B=h(m,B.value,_),B!==null&&(p=s(B,p,A),k===null?T=B:k.sibling=B,k=B);return me&&Xr(m,A),T}for(x=r(m,x);!B.done;A++,B=y.next())B=f(x,m,A,B.value,_),B!==null&&(t&&B.alternate!==null&&x.delete(B.key===null?A:B.key),p=s(B,p,A),k===null?T=B:k.sibling=B,k=B);return t&&x.forEach(function(Gt){return e(m,Gt)}),me&&Xr(m,A),T}function E(m,p,y,_){if(typeof y=="object"&&y!==null&&y.type===is&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Ul:e:{for(var T=y.key,k=p;k!==null;){if(k.key===T){if(T=y.type,T===is){if(k.tag===7){n(m,k.sibling),p=i(k,y.props.children),p.return=m,m=p;break e}}else if(k.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===fr&&l_(T)===k.type){n(m,k.sibling),p=i(k,y.props),p.ref=bo(m,k,y),p.return=m,m=p;break e}n(m,k);break}else e(m,k);k=k.sibling}y.type===is?(p=fi(y.props.children,m.mode,_,y.key),p.return=m,m=p):(_=Iu(y.type,y.key,y.props,null,m.mode,_),_.ref=bo(m,p,y),_.return=m,m=_)}return o(m);case rs:e:{for(k=y.key;p!==null;){if(p.key===k)if(p.tag===4&&p.stateNode.containerInfo===y.containerInfo&&p.stateNode.implementation===y.implementation){n(m,p.sibling),p=i(p,y.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else e(m,p);p=p.sibling}p=Sd(y,m.mode,_),p.return=m,m=p}return o(m);case fr:return k=y._init,E(m,p,k(y._payload),_)}if(Bo(y))return g(m,p,y,_);if(Io(y))return v(m,p,y,_);Yl(m,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,y),p.return=m,m=p):(n(m,p),p=Td(y,m.mode,_),p.return=m,m=p),o(m)):n(m,p)}return E}var $s=pC(!0),mC=pC(!1),al={},Nn=zr(al),Sa=zr(al),Ia=zr(al);function si(t){if(t===al)throw Error(S(174));return t}function Dm(t,e){switch(ce(Ia,e),ce(Sa,t),ce(Nn,al),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:wf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=wf(e,t)}pe(Nn),ce(Nn,e)}function Us(){pe(Nn),pe(Sa),pe(Ia)}function gC(t){si(Ia.current);var e=si(Nn.current),n=wf(e,t.type);e!==n&&(ce(Sa,t),ce(Nn,n))}function Mm(t){Sa.current===t&&(pe(Nn),pe(Sa))}var ve=zr(0);function ec(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var yd=[];function Lm(){for(var t=0;t<yd.length;t++)yd[t]._workInProgressVersionPrimary=null;yd.length=0}var wu=or.ReactCurrentDispatcher,vd=or.ReactCurrentBatchConfig,Ci=0,_e=null,Ae=null,He=null,tc=!1,Zo=!1,ka=0,Fx=0;function st(){throw Error(S(321))}function Fm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!_n(t[n],e[n]))return!1;return!0}function $m(t,e,n,r,i,s){if(Ci=s,_e=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,wu.current=t===null||t.memoizedState===null?Bx:jx,t=n(r,i),Zo){s=0;do{if(Zo=!1,ka=0,25<=s)throw Error(S(301));s+=1,He=Ae=null,e.updateQueue=null,wu.current=zx,t=n(r,i)}while(Zo)}if(wu.current=nc,e=Ae!==null&&Ae.next!==null,Ci=0,He=Ae=_e=null,tc=!1,e)throw Error(S(300));return t}function Um(){var t=ka!==0;return ka=0,t}function Tn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?_e.memoizedState=He=t:He=He.next=t,He}function nn(){if(Ae===null){var t=_e.alternate;t=t!==null?t.memoizedState:null}else t=Ae.next;var e=He===null?_e.memoizedState:He.next;if(e!==null)He=e,Ae=t;else{if(t===null)throw Error(S(310));Ae=t,t={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},He===null?_e.memoizedState=He=t:He=He.next=t}return He}function Na(t,e){return typeof e=="function"?e(t):e}function _d(t){var e=nn(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=Ae,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Ci&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,_e.lanes|=c,Ti|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,_n(r,e.memoizedState)||(xt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,_e.lanes|=s,Ti|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function wd(t){var e=nn(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);_n(s,e.memoizedState)||(xt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function yC(){}function vC(t,e){var n=_e,r=nn(),i=e(),s=!_n(r.memoizedState,i);if(s&&(r.memoizedState=i,xt=!0),r=r.queue,Vm(EC.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||He!==null&&He.memoizedState.tag&1){if(n.flags|=2048,Ra(9,wC.bind(null,n,r,i,e),void 0,null),Ke===null)throw Error(S(349));(Ci&30)!==0||_C(n,e,i)}return i}function _C(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=_e.updateQueue,e===null?(e={lastEffect:null,stores:null},_e.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function wC(t,e,n,r){e.value=n,e.getSnapshot=r,CC(e)&&TC(t)}function EC(t,e,n){return n(function(){CC(e)&&TC(t)})}function CC(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!_n(t,n)}catch{return!0}}function TC(t){var e=Jn(t,1);e!==null&&gn(e,t,1,-1)}function u_(t){var e=Tn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Na,lastRenderedState:t},e.queue=t,t=t.dispatch=Vx.bind(null,_e,t),[e.memoizedState,t]}function Ra(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=_e.updateQueue,e===null?(e={lastEffect:null,stores:null},_e.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function SC(){return nn().memoizedState}function Eu(t,e,n,r){var i=Tn();_e.flags|=t,i.memoizedState=Ra(1|e,n,void 0,r===void 0?null:r)}function eh(t,e,n,r){var i=nn();r=r===void 0?null:r;var s=void 0;if(Ae!==null){var o=Ae.memoizedState;if(s=o.destroy,r!==null&&Fm(r,o.deps)){i.memoizedState=Ra(e,n,s,r);return}}_e.flags|=t,i.memoizedState=Ra(1|e,n,s,r)}function c_(t,e){return Eu(8390656,8,t,e)}function Vm(t,e){return eh(2048,8,t,e)}function IC(t,e){return eh(4,2,t,e)}function kC(t,e){return eh(4,4,t,e)}function NC(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function RC(t,e,n){return n=n!=null?n.concat([t]):null,eh(4,4,NC.bind(null,e,t),n)}function Bm(){}function xC(t,e){var n=nn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Fm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function bC(t,e){var n=nn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Fm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function AC(t,e,n){return(Ci&21)===0?(t.baseState&&(t.baseState=!1,xt=!0),t.memoizedState=n):(_n(n,e)||(n=DE(),_e.lanes|=n,Ti|=n,t.baseState=!0),e)}function $x(t,e){var n=oe;oe=n!==0&&4>n?n:4,t(!0);var r=vd.transition;vd.transition={};try{t(!1),e()}finally{oe=n,vd.transition=r}}function PC(){return nn().memoizedState}function Ux(t,e,n){var r=xr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},OC(t))DC(e,n);else if(n=cC(t,e,n,r),n!==null){var i=yt();gn(n,t,r,i),MC(n,e,r)}}function Vx(t,e,n){var r=xr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(OC(t))DC(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,_n(a,o)){var l=e.interleaved;l===null?(i.next=i,Pm(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=cC(t,e,i,r),n!==null&&(i=yt(),gn(n,t,r,i),MC(n,e,r))}}function OC(t){var e=t.alternate;return t===_e||e!==null&&e===_e}function DC(t,e){Zo=tc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function MC(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,vm(t,n)}}var nc={readContext:tn,useCallback:st,useContext:st,useEffect:st,useImperativeHandle:st,useInsertionEffect:st,useLayoutEffect:st,useMemo:st,useReducer:st,useRef:st,useState:st,useDebugValue:st,useDeferredValue:st,useTransition:st,useMutableSource:st,useSyncExternalStore:st,useId:st,unstable_isNewReconciler:!1},Bx={readContext:tn,useCallback:function(t,e){return Tn().memoizedState=[t,e===void 0?null:e],t},useContext:tn,useEffect:c_,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Eu(4194308,4,NC.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Eu(4194308,4,t,e)},useInsertionEffect:function(t,e){return Eu(4,2,t,e)},useMemo:function(t,e){var n=Tn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Tn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Ux.bind(null,_e,t),[r.memoizedState,t]},useRef:function(t){var e=Tn();return t={current:t},e.memoizedState=t},useState:u_,useDebugValue:Bm,useDeferredValue:function(t){return Tn().memoizedState=t},useTransition:function(){var t=u_(!1),e=t[0];return t=$x.bind(null,t[1]),Tn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=_e,i=Tn();if(me){if(n===void 0)throw Error(S(407));n=n()}else{if(n=e(),Ke===null)throw Error(S(349));(Ci&30)!==0||_C(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,c_(EC.bind(null,r,s,t),[t]),r.flags|=2048,Ra(9,wC.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Tn(),e=Ke.identifierPrefix;if(me){var n=Un,r=$n;n=(r&~(1<<32-mn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ka++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Fx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},jx={readContext:tn,useCallback:xC,useContext:tn,useEffect:Vm,useImperativeHandle:RC,useInsertionEffect:IC,useLayoutEffect:kC,useMemo:bC,useReducer:_d,useRef:SC,useState:function(){return _d(Na)},useDebugValue:Bm,useDeferredValue:function(t){var e=nn();return AC(e,Ae.memoizedState,t)},useTransition:function(){var t=_d(Na)[0],e=nn().memoizedState;return[t,e]},useMutableSource:yC,useSyncExternalStore:vC,useId:PC,unstable_isNewReconciler:!1},zx={readContext:tn,useCallback:xC,useContext:tn,useEffect:Vm,useImperativeHandle:RC,useInsertionEffect:IC,useLayoutEffect:kC,useMemo:bC,useReducer:wd,useRef:SC,useState:function(){return wd(Na)},useDebugValue:Bm,useDeferredValue:function(t){var e=nn();return Ae===null?e.memoizedState=t:AC(e,Ae.memoizedState,t)},useTransition:function(){var t=wd(Na)[0],e=nn().memoizedState;return[t,e]},useMutableSource:yC,useSyncExternalStore:vC,useId:PC,unstable_isNewReconciler:!1};function Vs(t,e){try{var n="",r=e;do n+=yR(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ed(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function zf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Hx=typeof WeakMap=="function"?WeakMap:Map;function LC(t,e,n){n=qn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ic||(ic=!0,Zf=r),zf(t,e)},n}function FC(t,e,n){n=qn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){zf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){zf(t,e),typeof r!="function"&&(Rr===null?Rr=new Set([this]):Rr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function h_(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Hx;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=ib.bind(null,t,e,n),e.then(t,t))}function d_(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function f_(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=qn(-1,1),e.tag=2,Nr(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var Wx=or.ReactCurrentOwner,xt=!1;function ft(t,e,n,r){e.child=t===null?mC(e,null,n,r):$s(e,t.child,n,r)}function p_(t,e,n,r,i){n=n.render;var s=e.ref;return Ss(e,i),r=$m(t,e,n,r,s,i),n=Um(),t!==null&&!xt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Zn(t,e,i)):(me&&n&&km(e),e.flags|=1,ft(t,e,r,i),e.child)}function m_(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Qm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,$C(t,e,s,r,i)):(t=Iu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:wa,n(o,r)&&t.ref===e.ref)return Zn(t,e,i)}return e.flags|=1,t=br(s,r),t.ref=e.ref,t.return=e,e.child=t}function $C(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(wa(s,r)&&t.ref===e.ref)if(xt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)(t.flags&131072)!==0&&(xt=!0);else return e.lanes=t.lanes,Zn(t,e,i)}return Hf(t,e,n,r,i)}function UC(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ce(ps,Ft),Ft|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ce(ps,Ft),Ft|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ce(ps,Ft),Ft|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ce(ps,Ft),Ft|=r;return ft(t,e,i,n),e.child}function VC(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Hf(t,e,n,r,i){var s=Dt(n)?wi:dt.current;return s=Ls(e,s),Ss(e,i),n=$m(t,e,n,r,s,i),r=Um(),t!==null&&!xt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Zn(t,e,i)):(me&&r&&km(e),e.flags|=1,ft(t,e,n,i),e.child)}function g_(t,e,n,r,i){if(Dt(n)){var s=!0;Gu(e)}else s=!1;if(Ss(e,i),e.stateNode===null)Cu(t,e),fC(e,n,r),jf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=tn(u):(u=Dt(n)?wi:dt.current,u=Ls(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&a_(e,o,r,u),pr=!1;var d=e.memoizedState;o.state=d,Zu(e,r,o,i),l=e.memoizedState,a!==r||d!==l||Ot.current||pr?(typeof c=="function"&&(Bf(e,n,c,r),l=e.memoizedState),(a=pr||o_(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,hC(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:an(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=tn(l):(l=Dt(n)?wi:dt.current,l=Ls(e,l));var f=n.getDerivedStateFromProps;(c=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&a_(e,o,r,l),pr=!1,d=e.memoizedState,o.state=d,Zu(e,r,o,i);var g=e.memoizedState;a!==h||d!==g||Ot.current||pr?(typeof f=="function"&&(Bf(e,n,f,r),g=e.memoizedState),(u=pr||o_(e,n,u,r,d,g,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=g),o.props=r,o.state=g,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Wf(t,e,n,r,s,i)}function Wf(t,e,n,r,i,s){VC(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&t_(e,n,!1),Zn(t,e,s);r=e.stateNode,Wx.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=$s(e,t.child,null,s),e.child=$s(e,null,a,s)):ft(t,e,a,s),e.memoizedState=r.state,i&&t_(e,n,!0),e.child}function BC(t){var e=t.stateNode;e.pendingContext?e_(t,e.pendingContext,e.pendingContext!==e.context):e.context&&e_(t,e.context,!1),Dm(t,e.containerInfo)}function y_(t,e,n,r,i){return Fs(),Rm(i),e.flags|=256,ft(t,e,n,r),e.child}var qf={dehydrated:null,treeContext:null,retryLane:0};function Kf(t){return{baseLanes:t,cachePool:null,transitions:null}}function jC(t,e,n){var r=e.pendingProps,i=ve.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ce(ve,i&1),t===null)return Uf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=rh(o,r,0,null),t=fi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Kf(n),e.memoizedState=qf,t):jm(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return qx(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return(o&1)===0&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=br(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=br(a,s):(s=fi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Kf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=qf,r}return s=t.child,t=s.sibling,r=br(s,{mode:"visible",children:r.children}),(e.mode&1)===0&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function jm(t,e){return e=rh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Xl(t,e,n,r){return r!==null&&Rm(r),$s(e,t.child,null,n),t=jm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function qx(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Ed(Error(S(422))),Xl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=rh({mode:"visible",children:r.children},i,0,null),s=fi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,(e.mode&1)!==0&&$s(e,t.child,null,o),e.child.memoizedState=Kf(o),e.memoizedState=qf,s);if((e.mode&1)===0)return Xl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(S(419)),r=Ed(s,r,void 0),Xl(t,e,o,r)}if(a=(o&t.childLanes)!==0,xt||a){if(r=Ke,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Jn(t,i),gn(r,t,i,-1))}return Gm(),r=Ed(Error(S(421))),Xl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=sb.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,$t=kr(i.nextSibling),Ut=e,me=!0,un=null,t!==null&&(Yt[Xt++]=$n,Yt[Xt++]=Un,Yt[Xt++]=Ei,$n=t.id,Un=t.overflow,Ei=e),e=jm(e,r.children),e.flags|=4096,e)}function v_(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Vf(t.return,e,n)}function Cd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function zC(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ft(t,e,r.children,n),r=ve.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&v_(t,n,e);else if(t.tag===19)v_(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ce(ve,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ec(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Cd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ec(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Cd(e,!0,n,null,s);break;case"together":Cd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Cu(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Zn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ti|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(S(153));if(e.child!==null){for(t=e.child,n=br(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=br(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Kx(t,e,n){switch(e.tag){case 3:BC(e),Fs();break;case 5:gC(e);break;case 1:Dt(e.type)&&Gu(e);break;case 4:Dm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ce(Xu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ce(ve,ve.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?jC(t,e,n):(ce(ve,ve.current&1),t=Zn(t,e,n),t!==null?t.sibling:null);ce(ve,ve.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return zC(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ce(ve,ve.current),r)break;return null;case 22:case 23:return e.lanes=0,UC(t,e,n)}return Zn(t,e,n)}var HC,Gf,WC,qC;HC=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Gf=function(){};WC=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,si(Nn.current);var s=null;switch(n){case"input":i=gf(t,i),r=gf(t,r),s=[];break;case"select":i=we({},i,{value:void 0}),r=we({},r,{value:void 0}),s=[];break;case"textarea":i=_f(t,i),r=_f(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=qu)}Ef(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(fa.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(fa.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&de("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};qC=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ao(t,e){if(!me)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ot(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Gx(t,e,n){var r=e.pendingProps;switch(Nm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ot(e),null;case 1:return Dt(e.type)&&Ku(),ot(e),null;case 3:return r=e.stateNode,Us(),pe(Ot),pe(dt),Lm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ql(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,un!==null&&(np(un),un=null))),Gf(t,e),ot(e),null;case 5:Mm(e);var i=si(Ia.current);if(n=e.type,t!==null&&e.stateNode!=null)WC(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(S(166));return ot(e),null}if(t=si(Nn.current),Ql(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Sn]=e,r[Ta]=s,t=(e.mode&1)!==0,n){case"dialog":de("cancel",r),de("close",r);break;case"iframe":case"object":case"embed":de("load",r);break;case"video":case"audio":for(i=0;i<zo.length;i++)de(zo[i],r);break;case"source":de("error",r);break;case"img":case"image":case"link":de("error",r),de("load",r);break;case"details":de("toggle",r);break;case"input":Nv(r,s),de("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},de("invalid",r);break;case"textarea":xv(r,s),de("invalid",r)}Ef(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Gl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Gl(r.textContent,a,t),i=["children",""+a]):fa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&de("scroll",r)}switch(n){case"input":Vl(r),Rv(r,s,!0);break;case"textarea":Vl(r),bv(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=qu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=_E(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Sn]=e,t[Ta]=r,HC(t,e,!1,!1),e.stateNode=t;e:{switch(o=Cf(n,r),n){case"dialog":de("cancel",t),de("close",t),i=r;break;case"iframe":case"object":case"embed":de("load",t),i=r;break;case"video":case"audio":for(i=0;i<zo.length;i++)de(zo[i],t);i=r;break;case"source":de("error",t),i=r;break;case"img":case"image":case"link":de("error",t),de("load",t),i=r;break;case"details":de("toggle",t),i=r;break;case"input":Nv(t,r),i=gf(t,r),de("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=we({},r,{value:void 0}),de("invalid",t);break;case"textarea":xv(t,r),i=_f(t,r),de("invalid",t);break;default:i=r}Ef(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?CE(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&wE(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&pa(t,l):typeof l=="number"&&pa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(fa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&de("scroll",t):l!=null&&dm(t,s,l,o))}switch(n){case"input":Vl(t),Rv(t,r,!1);break;case"textarea":Vl(t),bv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Dr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ws(t,!!r.multiple,s,!1):r.defaultValue!=null&&ws(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=qu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ot(e),null;case 6:if(t&&e.stateNode!=null)qC(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(S(166));if(n=si(Ia.current),si(Nn.current),Ql(e)){if(r=e.stateNode,n=e.memoizedProps,r[Sn]=e,(s=r.nodeValue!==n)&&(t=Ut,t!==null))switch(t.tag){case 3:Gl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Gl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Sn]=e,e.stateNode=r}return ot(e),null;case 13:if(pe(ve),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(me&&$t!==null&&(e.mode&1)!==0&&(e.flags&128)===0)uC(),Fs(),e.flags|=98560,s=!1;else if(s=Ql(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(S(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(S(317));s[Sn]=e}else Fs(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;ot(e),s=!1}else un!==null&&(np(un),un=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(ve.current&1)!==0?Oe===0&&(Oe=3):Gm())),e.updateQueue!==null&&(e.flags|=4),ot(e),null);case 4:return Us(),Gf(t,e),t===null&&Ea(e.stateNode.containerInfo),ot(e),null;case 10:return Am(e.type._context),ot(e),null;case 17:return Dt(e.type)&&Ku(),ot(e),null;case 19:if(pe(ve),s=e.memoizedState,s===null)return ot(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ao(s,!1);else{if(Oe!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=ec(t),o!==null){for(e.flags|=128,Ao(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ce(ve,ve.current&1|2),e.child}t=t.sibling}s.tail!==null&&Se()>Bs&&(e.flags|=128,r=!0,Ao(s,!1),e.lanes=4194304)}else{if(!r)if(t=ec(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ao(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!me)return ot(e),null}else 2*Se()-s.renderingStartTime>Bs&&n!==1073741824&&(e.flags|=128,r=!0,Ao(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Se(),e.sibling=null,n=ve.current,ce(ve,r?n&1|2:n&1),e):(ot(e),null);case 22:case 23:return Km(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(Ft&1073741824)!==0&&(ot(e),e.subtreeFlags&6&&(e.flags|=8192)):ot(e),null;case 24:return null;case 25:return null}throw Error(S(156,e.tag))}function Qx(t,e){switch(Nm(e),e.tag){case 1:return Dt(e.type)&&Ku(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Us(),pe(Ot),pe(dt),Lm(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return Mm(e),null;case 13:if(pe(ve),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(S(340));Fs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return pe(ve),null;case 4:return Us(),null;case 10:return Am(e.type._context),null;case 22:case 23:return Km(),null;case 24:return null;default:return null}}var Jl=!1,at=!1,Yx=typeof WeakSet=="function"?WeakSet:Set,P=null;function fs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ee(t,e,r)}else n.current=null}function Qf(t,e,n){try{n()}catch(r){Ee(t,e,r)}}var __=!1;function Xx(t,e){if(Pf=zu,t=YE(),Im(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var f;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(f=h.firstChild)!==null;)d=h,h=f;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(f=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=f}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Of={focusedElem:t,selectionRange:n},zu=!1,P=e;P!==null;)if(e=P,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,P=t;else for(;P!==null;){e=P;try{var g=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,E=g.memoizedState,m=e.stateNode,p=m.getSnapshotBeforeUpdate(e.elementType===e.type?v:an(e.type,v),E);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(_){Ee(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,P=t;break}P=e.return}return g=__,__=!1,g}function ea(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Qf(e,n,s)}i=i.next}while(i!==r)}}function th(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Yf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function KC(t){var e=t.alternate;e!==null&&(t.alternate=null,KC(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Sn],delete e[Ta],delete e[Lf],delete e[Ox],delete e[Dx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function GC(t){return t.tag===5||t.tag===3||t.tag===4}function w_(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||GC(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Xf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=qu));else if(r!==4&&(t=t.child,t!==null))for(Xf(t,e,n),t=t.sibling;t!==null;)Xf(t,e,n),t=t.sibling}function Jf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Jf(t,e,n),t=t.sibling;t!==null;)Jf(t,e,n),t=t.sibling}var Ye=null,ln=!1;function hr(t,e,n){for(n=n.child;n!==null;)QC(t,e,n),n=n.sibling}function QC(t,e,n){if(kn&&typeof kn.onCommitFiberUnmount=="function")try{kn.onCommitFiberUnmount(Kc,n)}catch{}switch(n.tag){case 5:at||fs(n,e);case 6:var r=Ye,i=ln;Ye=null,hr(t,e,n),Ye=r,ln=i,Ye!==null&&(ln?(t=Ye,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ye.removeChild(n.stateNode));break;case 18:Ye!==null&&(ln?(t=Ye,n=n.stateNode,t.nodeType===8?md(t.parentNode,n):t.nodeType===1&&md(t,n),va(t)):md(Ye,n.stateNode));break;case 4:r=Ye,i=ln,Ye=n.stateNode.containerInfo,ln=!0,hr(t,e,n),Ye=r,ln=i;break;case 0:case 11:case 14:case 15:if(!at&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&Qf(n,e,o),i=i.next}while(i!==r)}hr(t,e,n);break;case 1:if(!at&&(fs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ee(n,e,a)}hr(t,e,n);break;case 21:hr(t,e,n);break;case 22:n.mode&1?(at=(r=at)||n.memoizedState!==null,hr(t,e,n),at=r):hr(t,e,n);break;default:hr(t,e,n)}}function E_(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Yx),e.forEach(function(r){var i=ob.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function on(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ye=a.stateNode,ln=!1;break e;case 3:Ye=a.stateNode.containerInfo,ln=!0;break e;case 4:Ye=a.stateNode.containerInfo,ln=!0;break e}a=a.return}if(Ye===null)throw Error(S(160));QC(s,o,i),Ye=null,ln=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ee(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)YC(e,t),e=e.sibling}function YC(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(on(e,t),Cn(t),r&4){try{ea(3,t,t.return),th(3,t)}catch(v){Ee(t,t.return,v)}try{ea(5,t,t.return)}catch(v){Ee(t,t.return,v)}}break;case 1:on(e,t),Cn(t),r&512&&n!==null&&fs(n,n.return);break;case 5:if(on(e,t),Cn(t),r&512&&n!==null&&fs(n,n.return),t.flags&32){var i=t.stateNode;try{pa(i,"")}catch(v){Ee(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&yE(i,s),Cf(a,o);var u=Cf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?CE(i,h):c==="dangerouslySetInnerHTML"?wE(i,h):c==="children"?pa(i,h):dm(i,c,h,u)}switch(a){case"input":yf(i,s);break;case"textarea":vE(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var f=s.value;f!=null?ws(i,!!s.multiple,f,!1):d!==!!s.multiple&&(s.defaultValue!=null?ws(i,!!s.multiple,s.defaultValue,!0):ws(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ta]=s}catch(v){Ee(t,t.return,v)}}break;case 6:if(on(e,t),Cn(t),r&4){if(t.stateNode===null)throw Error(S(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){Ee(t,t.return,v)}}break;case 3:if(on(e,t),Cn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{va(e.containerInfo)}catch(v){Ee(t,t.return,v)}break;case 4:on(e,t),Cn(t);break;case 13:on(e,t),Cn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Wm=Se())),r&4&&E_(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(at=(u=at)||c,on(e,t),at=u):on(e,t),Cn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&(t.mode&1)!==0)for(P=t,c=t.child;c!==null;){for(h=P=c;P!==null;){switch(d=P,f=d.child,d.tag){case 0:case 11:case 14:case 15:ea(4,d,d.return);break;case 1:fs(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(v){Ee(r,n,v)}}break;case 5:fs(d,d.return);break;case 22:if(d.memoizedState!==null){T_(h);continue}}f!==null?(f.return=d,P=f):T_(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=EE("display",o))}catch(v){Ee(t,t.return,v)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){Ee(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:on(e,t),Cn(t),r&4&&E_(t);break;case 21:break;default:on(e,t),Cn(t)}}function Cn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(GC(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(pa(i,""),r.flags&=-33);var s=w_(t);Jf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=w_(t);Xf(t,a,o);break;default:throw Error(S(161))}}catch(l){Ee(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Jx(t,e,n){P=t,XC(t)}function XC(t,e,n){for(var r=(t.mode&1)!==0;P!==null;){var i=P,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Jl;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||at;a=Jl;var u=at;if(Jl=o,(at=l)&&!u)for(P=i;P!==null;)o=P,l=o.child,o.tag===22&&o.memoizedState!==null?S_(i):l!==null?(l.return=o,P=l):S_(i);for(;s!==null;)P=s,XC(s),s=s.sibling;P=i,Jl=a,at=u}C_(t)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,P=s):C_(t)}}function C_(t){for(;P!==null;){var e=P;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:at||th(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!at)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:an(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&s_(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}s_(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&va(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}at||e.flags&512&&Yf(e)}catch(d){Ee(e,e.return,d)}}if(e===t){P=null;break}if(n=e.sibling,n!==null){n.return=e.return,P=n;break}P=e.return}}function T_(t){for(;P!==null;){var e=P;if(e===t){P=null;break}var n=e.sibling;if(n!==null){n.return=e.return,P=n;break}P=e.return}}function S_(t){for(;P!==null;){var e=P;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{th(4,e)}catch(l){Ee(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ee(e,i,l)}}var s=e.return;try{Yf(e)}catch(l){Ee(e,s,l)}break;case 5:var o=e.return;try{Yf(e)}catch(l){Ee(e,o,l)}}}catch(l){Ee(e,e.return,l)}if(e===t){P=null;break}var a=e.sibling;if(a!==null){a.return=e.return,P=a;break}P=e.return}}var Zx=Math.ceil,rc=or.ReactCurrentDispatcher,zm=or.ReactCurrentOwner,Zt=or.ReactCurrentBatchConfig,ee=0,Ke=null,Re=null,Ze=0,Ft=0,ps=zr(0),Oe=0,xa=null,Ti=0,nh=0,Hm=0,ta=null,kt=null,Wm=0,Bs=1/0,Dn=null,ic=!1,Zf=null,Rr=null,Zl=!1,Cr=null,sc=0,na=0,ep=null,Tu=-1,Su=0;function yt(){return(ee&6)!==0?Se():Tu!==-1?Tu:Tu=Se()}function xr(t){return(t.mode&1)===0?1:(ee&2)!==0&&Ze!==0?Ze&-Ze:Lx.transition!==null?(Su===0&&(Su=DE()),Su):(t=oe,t!==0||(t=window.event,t=t===void 0?16:BE(t.type)),t)}function gn(t,e,n,r){if(50<na)throw na=0,ep=null,Error(S(185));il(t,n,r),((ee&2)===0||t!==Ke)&&(t===Ke&&((ee&2)===0&&(nh|=n),Oe===4&&yr(t,Ze)),Mt(t,r),n===1&&ee===0&&(e.mode&1)===0&&(Bs=Se()+500,Jc&&Hr()))}function Mt(t,e){var n=t.callbackNode;LR(t,e);var r=ju(t,t===Ke?Ze:0);if(r===0)n!==null&&Ov(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Ov(n),e===1)t.tag===0?Mx(I_.bind(null,t)):oC(I_.bind(null,t)),Ax(function(){(ee&6)===0&&Hr()}),n=null;else{switch(ME(r)){case 1:n=ym;break;case 4:n=PE;break;case 16:n=Bu;break;case 536870912:n=OE;break;default:n=Bu}n=sT(n,JC.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function JC(t,e){if(Tu=-1,Su=0,(ee&6)!==0)throw Error(S(327));var n=t.callbackNode;if(Is()&&t.callbackNode!==n)return null;var r=ju(t,t===Ke?Ze:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=oc(t,r);else{e=r;var i=ee;ee|=2;var s=eT();(Ke!==t||Ze!==e)&&(Dn=null,Bs=Se()+500,di(t,e));do try{nb();break}catch(a){ZC(t,a)}while(1);bm(),rc.current=s,ee=i,Re!==null?e=0:(Ke=null,Ze=0,e=Oe)}if(e!==0){if(e===2&&(i=Nf(t),i!==0&&(r=i,e=tp(t,i))),e===1)throw n=xa,di(t,0),yr(t,r),Mt(t,Se()),n;if(e===6)yr(t,r);else{if(i=t.current.alternate,(r&30)===0&&!eb(i)&&(e=oc(t,r),e===2&&(s=Nf(t),s!==0&&(r=s,e=tp(t,s))),e===1))throw n=xa,di(t,0),yr(t,r),Mt(t,Se()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(S(345));case 2:Jr(t,kt,Dn);break;case 3:if(yr(t,r),(r&130023424)===r&&(e=Wm+500-Se(),10<e)){if(ju(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){yt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Mf(Jr.bind(null,t,kt,Dn),e);break}Jr(t,kt,Dn);break;case 4:if(yr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-mn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Zx(r/1960))-r,10<r){t.timeoutHandle=Mf(Jr.bind(null,t,kt,Dn),r);break}Jr(t,kt,Dn);break;case 5:Jr(t,kt,Dn);break;default:throw Error(S(329))}}}return Mt(t,Se()),t.callbackNode===n?JC.bind(null,t):null}function tp(t,e){var n=ta;return t.current.memoizedState.isDehydrated&&(di(t,e).flags|=256),t=oc(t,e),t!==2&&(e=kt,kt=n,e!==null&&np(e)),t}function np(t){kt===null?kt=t:kt.push.apply(kt,t)}function eb(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!_n(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function yr(t,e){for(e&=~Hm,e&=~nh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-mn(e),r=1<<n;t[n]=-1,e&=~r}}function I_(t){if((ee&6)!==0)throw Error(S(327));Is();var e=ju(t,0);if((e&1)===0)return Mt(t,Se()),null;var n=oc(t,e);if(t.tag!==0&&n===2){var r=Nf(t);r!==0&&(e=r,n=tp(t,r))}if(n===1)throw n=xa,di(t,0),yr(t,e),Mt(t,Se()),n;if(n===6)throw Error(S(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Jr(t,kt,Dn),Mt(t,Se()),null}function qm(t,e){var n=ee;ee|=1;try{return t(e)}finally{ee=n,ee===0&&(Bs=Se()+500,Jc&&Hr())}}function Si(t){Cr!==null&&Cr.tag===0&&(ee&6)===0&&Is();var e=ee;ee|=1;var n=Zt.transition,r=oe;try{if(Zt.transition=null,oe=1,t)return t()}finally{oe=r,Zt.transition=n,ee=e,(ee&6)===0&&Hr()}}function Km(){Ft=ps.current,pe(ps)}function di(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,bx(n)),Re!==null)for(n=Re.return;n!==null;){var r=n;switch(Nm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ku();break;case 3:Us(),pe(Ot),pe(dt),Lm();break;case 5:Mm(r);break;case 4:Us();break;case 13:pe(ve);break;case 19:pe(ve);break;case 10:Am(r.type._context);break;case 22:case 23:Km()}n=n.return}if(Ke=t,Re=t=br(t.current,null),Ze=Ft=e,Oe=0,xa=null,Hm=nh=Ti=0,kt=ta=null,ii!==null){for(e=0;e<ii.length;e++)if(n=ii[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ii=null}return t}function ZC(t,e){do{var n=Re;try{if(bm(),wu.current=nc,tc){for(var r=_e.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}tc=!1}if(Ci=0,He=Ae=_e=null,Zo=!1,ka=0,zm.current=null,n===null||n.return===null){Oe=1,xa=e,Re=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ze,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if((c.mode&1)===0&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var f=d_(o);if(f!==null){f.flags&=-257,f_(f,o,a,s,e),f.mode&1&&h_(s,u,e),e=f,l=u;var g=e.updateQueue;if(g===null){var v=new Set;v.add(l),e.updateQueue=v}else g.add(l);break e}else{if((e&1)===0){h_(s,u,e),Gm();break e}l=Error(S(426))}}else if(me&&a.mode&1){var E=d_(o);if(E!==null){(E.flags&65536)===0&&(E.flags|=256),f_(E,o,a,s,e),Rm(Vs(l,a));break e}}s=l=Vs(l,a),Oe!==4&&(Oe=2),ta===null?ta=[s]:ta.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=LC(s,l,e);i_(s,m);break e;case 1:a=l;var p=s.type,y=s.stateNode;if((s.flags&128)===0&&(typeof p.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Rr===null||!Rr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var _=FC(s,a,e);i_(s,_);break e}}s=s.return}while(s!==null)}nT(n)}catch(T){e=T,Re===n&&n!==null&&(Re=n=n.return);continue}break}while(1)}function eT(){var t=rc.current;return rc.current=nc,t===null?nc:t}function Gm(){(Oe===0||Oe===3||Oe===2)&&(Oe=4),Ke===null||(Ti&268435455)===0&&(nh&268435455)===0||yr(Ke,Ze)}function oc(t,e){var n=ee;ee|=2;var r=eT();(Ke!==t||Ze!==e)&&(Dn=null,di(t,e));do try{tb();break}catch(i){ZC(t,i)}while(1);if(bm(),ee=n,rc.current=r,Re!==null)throw Error(S(261));return Ke=null,Ze=0,Oe}function tb(){for(;Re!==null;)tT(Re)}function nb(){for(;Re!==null&&!NR();)tT(Re)}function tT(t){var e=iT(t.alternate,t,Ft);t.memoizedProps=t.pendingProps,e===null?nT(t):Re=e,zm.current=null}function nT(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=Gx(n,e,Ft),n!==null){Re=n;return}}else{if(n=Qx(n,e),n!==null){n.flags&=32767,Re=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Oe=6,Re=null;return}}if(e=e.sibling,e!==null){Re=e;return}Re=e=t}while(e!==null);Oe===0&&(Oe=5)}function Jr(t,e,n){var r=oe,i=Zt.transition;try{Zt.transition=null,oe=1,rb(t,e,n,r)}finally{Zt.transition=i,oe=r}return null}function rb(t,e,n,r){do Is();while(Cr!==null);if((ee&6)!==0)throw Error(S(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(S(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(FR(t,s),t===Ke&&(Re=Ke=null,Ze=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Zl||(Zl=!0,sT(Bu,function(){return Is(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=Zt.transition,Zt.transition=null;var o=oe;oe=1;var a=ee;ee|=4,zm.current=null,Xx(t,n),YC(n,t),Tx(Of),zu=!!Pf,Of=Pf=null,t.current=n,Jx(n),RR(),ee=a,oe=o,Zt.transition=s}else t.current=n;if(Zl&&(Zl=!1,Cr=t,sc=i),s=t.pendingLanes,s===0&&(Rr=null),AR(n.stateNode),Mt(t,Se()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ic)throw ic=!1,t=Zf,Zf=null,t;return(sc&1)!==0&&t.tag!==0&&Is(),s=t.pendingLanes,(s&1)!==0?t===ep?na++:(na=0,ep=t):na=0,Hr(),null}function Is(){if(Cr!==null){var t=ME(sc),e=Zt.transition,n=oe;try{if(Zt.transition=null,oe=16>t?16:t,Cr===null)var r=!1;else{if(t=Cr,Cr=null,sc=0,(ee&6)!==0)throw Error(S(331));var i=ee;for(ee|=4,P=t.current;P!==null;){var s=P,o=s.child;if((P.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(P=u;P!==null;){var c=P;switch(c.tag){case 0:case 11:case 15:ea(8,c,s)}var h=c.child;if(h!==null)h.return=c,P=h;else for(;P!==null;){c=P;var d=c.sibling,f=c.return;if(KC(c),c===u){P=null;break}if(d!==null){d.return=f,P=d;break}P=f}}}var g=s.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var E=v.sibling;v.sibling=null,v=E}while(v!==null)}}P=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,P=o;else e:for(;P!==null;){if(s=P,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:ea(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,P=m;break e}P=s.return}}var p=t.current;for(P=p;P!==null;){o=P;var y=o.child;if((o.subtreeFlags&2064)!==0&&y!==null)y.return=o,P=y;else e:for(o=p;P!==null;){if(a=P,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:th(9,a)}}catch(T){Ee(a,a.return,T)}if(a===o){P=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,P=_;break e}P=a.return}}if(ee=i,Hr(),kn&&typeof kn.onPostCommitFiberRoot=="function")try{kn.onPostCommitFiberRoot(Kc,t)}catch{}r=!0}return r}finally{oe=n,Zt.transition=e}}return!1}function k_(t,e,n){e=Vs(n,e),e=LC(t,e,1),t=Nr(t,e,1),e=yt(),t!==null&&(il(t,1,e),Mt(t,e))}function Ee(t,e,n){if(t.tag===3)k_(t,t,n);else for(;e!==null;){if(e.tag===3){k_(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Rr===null||!Rr.has(r))){t=Vs(n,t),t=FC(e,t,1),e=Nr(e,t,1),t=yt(),e!==null&&(il(e,1,t),Mt(e,t));break}}e=e.return}}function ib(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=yt(),t.pingedLanes|=t.suspendedLanes&n,Ke===t&&(Ze&n)===n&&(Oe===4||Oe===3&&(Ze&130023424)===Ze&&500>Se()-Wm?di(t,0):Hm|=n),Mt(t,e)}function rT(t,e){e===0&&((t.mode&1)===0?e=1:(e=zl,zl<<=1,(zl&130023424)===0&&(zl=4194304)));var n=yt();t=Jn(t,e),t!==null&&(il(t,e,n),Mt(t,n))}function sb(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),rT(t,n)}function ob(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(e),rT(t,n)}var iT;iT=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ot.current)xt=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return xt=!1,Kx(t,e,n);xt=(t.flags&131072)!==0}else xt=!1,me&&(e.flags&1048576)!==0&&aC(e,Yu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Cu(t,e),t=e.pendingProps;var i=Ls(e,dt.current);Ss(e,n),i=$m(null,e,r,t,i,n);var s=Um();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Dt(r)?(s=!0,Gu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Om(e),i.updater=Zc,e.stateNode=i,i._reactInternals=e,jf(e,r,t,n),e=Wf(null,e,r,!0,s,n)):(e.tag=0,me&&s&&km(e),ft(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Cu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=lb(r),t=an(r,t),i){case 0:e=Hf(null,e,r,t,n);break e;case 1:e=g_(null,e,r,t,n);break e;case 11:e=p_(null,e,r,t,n);break e;case 14:e=m_(null,e,r,an(r.type,t),n);break e}throw Error(S(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:an(r,i),Hf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:an(r,i),g_(t,e,r,i,n);case 3:e:{if(BC(e),t===null)throw Error(S(387));r=e.pendingProps,s=e.memoizedState,i=s.element,hC(t,e),Zu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Vs(Error(S(423)),e),e=y_(t,e,r,n,i);break e}else if(r!==i){i=Vs(Error(S(424)),e),e=y_(t,e,r,n,i);break e}else for($t=kr(e.stateNode.containerInfo.firstChild),Ut=e,me=!0,un=null,n=mC(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Fs(),r===i){e=Zn(t,e,n);break e}ft(t,e,r,n)}e=e.child}return e;case 5:return gC(e),t===null&&Uf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Df(r,i)?o=null:s!==null&&Df(r,s)&&(e.flags|=32),VC(t,e),ft(t,e,o,n),e.child;case 6:return t===null&&Uf(e),null;case 13:return jC(t,e,n);case 4:return Dm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=$s(e,null,r,n):ft(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:an(r,i),p_(t,e,r,i,n);case 7:return ft(t,e,e.pendingProps,n),e.child;case 8:return ft(t,e,e.pendingProps.children,n),e.child;case 12:return ft(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ce(Xu,r._currentValue),r._currentValue=o,s!==null)if(_n(s.value,o)){if(s.children===i.children&&!Ot.current){e=Zn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=qn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Vf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(S(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Vf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ft(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ss(e,n),i=tn(i),r=r(i),e.flags|=1,ft(t,e,r,n),e.child;case 14:return r=e.type,i=an(r,e.pendingProps),i=an(r.type,i),m_(t,e,r,i,n);case 15:return $C(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:an(r,i),Cu(t,e),e.tag=1,Dt(r)?(t=!0,Gu(e)):t=!1,Ss(e,n),fC(e,r,i),jf(e,r,i,n),Wf(null,e,r,!0,t,n);case 19:return zC(t,e,n);case 22:return UC(t,e,n)}throw Error(S(156,e.tag))};function sT(t,e){return AE(t,e)}function ab(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jt(t,e,n,r){return new ab(t,e,n,r)}function Qm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function lb(t){if(typeof t=="function")return Qm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===pm)return 11;if(t===mm)return 14}return 2}function br(t,e){var n=t.alternate;return n===null?(n=Jt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Iu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Qm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case is:return fi(n.children,i,s,e);case fm:o=8,i|=8;break;case df:return t=Jt(12,n,e,i|2),t.elementType=df,t.lanes=s,t;case ff:return t=Jt(13,n,e,i),t.elementType=ff,t.lanes=s,t;case pf:return t=Jt(19,n,e,i),t.elementType=pf,t.lanes=s,t;case pE:return rh(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case dE:o=10;break e;case fE:o=9;break e;case pm:o=11;break e;case mm:o=14;break e;case fr:o=16,r=null;break e}throw Error(S(130,t==null?t:typeof t,""))}return e=Jt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function fi(t,e,n,r){return t=Jt(7,t,r,e),t.lanes=n,t}function rh(t,e,n,r){return t=Jt(22,t,r,e),t.elementType=pE,t.lanes=n,t.stateNode={isHidden:!1},t}function Td(t,e,n){return t=Jt(6,t,null,e),t.lanes=n,t}function Sd(t,e,n){return e=Jt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ub(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=id(0),this.expirationTimes=id(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=id(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ym(t,e,n,r,i,s,o,a,l){return t=new ub(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Jt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Om(s),t}function cb(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:rs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function oT(t){if(!t)return Mr;t=t._reactInternals;e:{if(Vi(t)!==t||t.tag!==1)throw Error(S(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Dt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(S(171))}if(t.tag===1){var n=t.type;if(Dt(n))return sC(t,n,e)}return e}function aT(t,e,n,r,i,s,o,a,l){return t=Ym(n,r,!0,t,i,s,o,a,l),t.context=oT(null),n=t.current,r=yt(),i=xr(n),s=qn(r,i),s.callback=e!=null?e:null,Nr(n,s,i),t.current.lanes=i,il(t,i,r),Mt(t,r),t}function ih(t,e,n,r){var i=e.current,s=yt(),o=xr(i);return n=oT(n),e.context===null?e.context=n:e.pendingContext=n,e=qn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Nr(i,e,o),t!==null&&(gn(t,i,o,s),_u(t,i,o)),o}function ac(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function N_(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Xm(t,e){N_(t,e),(t=t.alternate)&&N_(t,e)}function hb(){return null}var lT=typeof reportError=="function"?reportError:function(t){console.error(t)};function Jm(t){this._internalRoot=t}sh.prototype.render=Jm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(S(409));ih(t,e,null,null)};sh.prototype.unmount=Jm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Si(function(){ih(null,t,null,null)}),e[Xn]=null}};function sh(t){this._internalRoot=t}sh.prototype.unstable_scheduleHydration=function(t){if(t){var e=$E();t={blockedOn:null,target:t,priority:e};for(var n=0;n<gr.length&&e!==0&&e<gr[n].priority;n++);gr.splice(n,0,t),n===0&&VE(t)}};function Zm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function oh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function R_(){}function db(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=ac(o);s.call(u)}}var o=aT(e,r,t,0,null,!1,!1,"",R_);return t._reactRootContainer=o,t[Xn]=o.current,Ea(t.nodeType===8?t.parentNode:t),Si(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=ac(l);a.call(u)}}var l=Ym(t,0,!1,null,null,!1,!1,"",R_);return t._reactRootContainer=l,t[Xn]=l.current,Ea(t.nodeType===8?t.parentNode:t),Si(function(){ih(e,l,n,r)}),l}function ah(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=ac(o);a.call(l)}}ih(e,o,t,i)}else o=db(n,e,t,i,r);return ac(o)}LE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=jo(e.pendingLanes);n!==0&&(vm(e,n|1),Mt(e,Se()),(ee&6)===0&&(Bs=Se()+500,Hr()))}break;case 13:Si(function(){var r=Jn(t,1);if(r!==null){var i=yt();gn(r,t,1,i)}}),Xm(t,1)}};_m=function(t){if(t.tag===13){var e=Jn(t,134217728);if(e!==null){var n=yt();gn(e,t,134217728,n)}Xm(t,134217728)}};FE=function(t){if(t.tag===13){var e=xr(t),n=Jn(t,e);if(n!==null){var r=yt();gn(n,t,e,r)}Xm(t,e)}};$E=function(){return oe};UE=function(t,e){var n=oe;try{return oe=t,e()}finally{oe=n}};Sf=function(t,e,n){switch(e){case"input":if(yf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Xc(r);if(!i)throw Error(S(90));gE(r),yf(r,i)}}}break;case"textarea":vE(t,n);break;case"select":e=n.value,e!=null&&ws(t,!!n.multiple,e,!1)}};IE=qm;kE=Si;var fb={usingClientEntryPoint:!1,Events:[ol,ls,Xc,TE,SE,qm]},Po={findFiberByHostInstance:ri,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},pb={bundleType:Po.bundleType,version:Po.version,rendererPackageName:Po.rendererPackageName,rendererConfig:Po.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:or.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=xE(t),t===null?null:t.stateNode},findFiberByHostInstance:Po.findFiberByHostInstance||hb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var eu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!eu.isDisabled&&eu.supportsFiber)try{Kc=eu.inject(pb),kn=eu}catch{}}Wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fb;Wt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zm(e))throw Error(S(200));return cb(t,e,null,n)};Wt.createRoot=function(t,e){if(!Zm(t))throw Error(S(299));var n=!1,r="",i=lT;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Ym(t,1,!1,null,null,n,!1,r,i),t[Xn]=e.current,Ea(t.nodeType===8?t.parentNode:t),new Jm(e)};Wt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(S(188)):(t=Object.keys(t).join(","),Error(S(268,t)));return t=xE(e),t=t===null?null:t.stateNode,t};Wt.flushSync=function(t){return Si(t)};Wt.hydrate=function(t,e,n){if(!oh(e))throw Error(S(200));return ah(null,t,e,!0,n)};Wt.hydrateRoot=function(t,e,n){if(!Zm(t))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=lT;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=aT(e,null,t,1,n!=null?n:null,i,!1,s,o),t[Xn]=e.current,Ea(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new sh(e)};Wt.render=function(t,e,n){if(!oh(e))throw Error(S(200));return ah(null,t,e,!1,n)};Wt.unmountComponentAtNode=function(t){if(!oh(t))throw Error(S(40));return t._reactRootContainer?(Si(function(){ah(null,null,t,!1,function(){t._reactRootContainer=null,t[Xn]=null})}),!0):!1};Wt.unstable_batchedUpdates=qm;Wt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!oh(n))throw Error(S(200));if(t==null||t._reactInternals===void 0)throw Error(S(38));return ah(t,e,n,!1,r)};Wt.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=Wt})(um);const ms=eE(um.exports);var x_=um.exports;cf.createRoot=x_.createRoot,cf.hydrateRoot=x_.hydrateRoot;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uT={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N=function(t,e){if(!t)throw lo(e)},lo=function(t){return new Error("Firebase Database ("+uT.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},mb=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},eg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;l||(f=64,o||(d=64)),r.push(n[c],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(cT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):mb(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw Error();const d=s<<2|a>>4;if(r.push(d),u!==64){const f=a<<4&240|u>>2;if(r.push(f),h!==64){const g=u<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},hT=function(t){const e=cT(t);return eg.encodeByteArray(e,!0)},dT=function(t){return hT(t).replace(/\./g,"")},rp=function(t){try{return eg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gb(t){return fT(void 0,t)}function fT(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!yb(n)||(t[n]=fT(t[n],e[n]));return t}function yb(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function lh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ge())}function pT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ng(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vb(){return Ge().indexOf("Electron/")>=0}function mT(){const t=Ge();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function _b(){return Ge().indexOf("MSAppHost/")>=0}function gT(){return uT.NODE_ADMIN===!0}function yT(){return typeof indexedDB=="object"}function wb(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eb="FirebaseError";class sn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Eb,Object.setPrototypeOf(this,sn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Bi.prototype.create)}}class Bi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Cb(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new sn(i,a,r)}}function Cb(t,e){return t.replace(Tb,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Tb=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ba(t){return JSON.parse(t)}function qe(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vT=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=ba(rp(s[0])||""),n=ba(rp(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},Sb=function(t){const e=vT(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Ib=function(t){const e=vT(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function js(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ip(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function lc(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function uc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(b_(s)&&b_(o)){if(!uc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function b_(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kb{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)r[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let h=0;h<80;h++){h<40?h<20?(u=a^s&(o^a),c=1518500249):(u=s^o^a,c=1859775393):h<60?(u=s&o|a&(s|o),c=2400959708):(u=s^o^a,c=3395469782);const d=(i<<5|i>>>27)+u+l+c+r[h]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Nb(t,e){const n=new Rb(t,e);return n.subscribe.bind(n)}class Rb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");xb(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Id),i.error===void 0&&(i.error=Id),i.complete===void 0&&(i.complete=Id);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function xb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Id(){}function _T(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bb=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,N(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},uh=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const Ab=1e3,Pb=2,Ob=4*60*60*1e3,Db=.5;function Mb(t,e=Ab,n=Pb){const r=e*Math.pow(n,t),i=Math.round(Db*r*(Math.random()-.5)*2);return Math.min(Ob,r+i)}/**
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
 */function Ie(t){return t&&t._delegate?t._delegate:t}class zt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Zr="[DEFAULT]";/**
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
 */class Lb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new tg;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if($b(e))try{this.getOrInitializeService({instanceIdentifier:Zr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Zr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zr){return this.instances.has(e)}getOptions(e=Zr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Fb(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Zr){return this.component?this.component.multipleInstances?e:Zr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Fb(t){return t===Zr?void 0:t}function $b(t){return t.instantiationMode==="EAGER"}/**
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
 */class Ub{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Lb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Z;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Z||(Z={}));const Vb={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},Bb=Z.INFO,jb={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},zb=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=jb[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ll{constructor(e){this.name=e,this._logLevel=Bb,this._logHandler=zb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Vb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...e),this._logHandler(this,Z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...e),this._logHandler(this,Z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...e),this._logHandler(this,Z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...e),this._logHandler(this,Z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...e),this._logHandler(this,Z.ERROR,...e)}}const Hb=(t,e)=>e.some(n=>t instanceof n);let A_,P_;function Wb(){return A_||(A_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function qb(){return P_||(P_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const wT=new WeakMap,sp=new WeakMap,ET=new WeakMap,kd=new WeakMap,rg=new WeakMap;function Kb(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Ar(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&wT.set(n,t)}).catch(()=>{}),rg.set(e,t),e}function Gb(t){if(sp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});sp.set(t,e)}let op={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return sp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ET.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ar(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Qb(t){op=t(op)}function Yb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Nd(this),e,...n);return ET.set(r,e.sort?e.sort():[e]),Ar(r)}:qb().includes(t)?function(...e){return t.apply(Nd(this),e),Ar(wT.get(this))}:function(...e){return Ar(t.apply(Nd(this),e))}}function Xb(t){return typeof t=="function"?Yb(t):(t instanceof IDBTransaction&&Gb(t),Hb(t,Wb())?new Proxy(t,op):t)}function Ar(t){if(t instanceof IDBRequest)return Kb(t);if(kd.has(t))return kd.get(t);const e=Xb(t);return e!==t&&(kd.set(t,e),rg.set(e,t)),e}const Nd=t=>rg.get(t);function CT(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Ar(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Ar(o.result),l.oldVersion,l.newVersion,Ar(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Jb=["get","getKey","getAll","getAllKeys","count"],Zb=["put","add","delete","clear"],Rd=new Map;function O_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Rd.get(e))return Rd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Zb.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Jb.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Rd.set(e,s),s}Qb(t=>({...t,get:(e,n,r)=>O_(e,n)||t.get(e,n,r),has:(e,n)=>!!O_(e,n)||t.has(e,n)}));/**
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
 */class eA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(tA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function tA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ap="@firebase/app",D_="0.7.32";/**
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
 */const Ii=new ll("@firebase/app"),nA="@firebase/app-compat",rA="@firebase/analytics-compat",iA="@firebase/analytics",sA="@firebase/app-check-compat",oA="@firebase/app-check",aA="@firebase/auth",lA="@firebase/auth-compat",uA="@firebase/database",cA="@firebase/database-compat",hA="@firebase/functions",dA="@firebase/functions-compat",fA="@firebase/installations",pA="@firebase/installations-compat",mA="@firebase/messaging",gA="@firebase/messaging-compat",yA="@firebase/performance",vA="@firebase/performance-compat",_A="@firebase/remote-config",wA="@firebase/remote-config-compat",EA="@firebase/storage",CA="@firebase/storage-compat",TA="@firebase/firestore",SA="@firebase/firestore-compat",IA="firebase",kA="9.9.4";/**
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
 */const TT="[DEFAULT]",NA={[ap]:"fire-core",[nA]:"fire-core-compat",[iA]:"fire-analytics",[rA]:"fire-analytics-compat",[oA]:"fire-app-check",[sA]:"fire-app-check-compat",[aA]:"fire-auth",[lA]:"fire-auth-compat",[uA]:"fire-rtdb",[cA]:"fire-rtdb-compat",[hA]:"fire-fn",[dA]:"fire-fn-compat",[fA]:"fire-iid",[pA]:"fire-iid-compat",[mA]:"fire-fcm",[gA]:"fire-fcm-compat",[yA]:"fire-perf",[vA]:"fire-perf-compat",[_A]:"fire-rc",[wA]:"fire-rc-compat",[EA]:"fire-gcs",[CA]:"fire-gcs-compat",[TA]:"fire-fst",[SA]:"fire-fst-compat","fire-js":"fire-js",[IA]:"fire-js-all"};/**
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
 */const Aa=new Map,lp=new Map;function RA(t,e){try{t.container.addComponent(e)}catch(n){Ii.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function rn(t){const e=t.name;if(lp.has(e))return Ii.debug(`There were multiple attempts to register component ${e}.`),!1;lp.set(e,t);for(const n of Aa.values())RA(n,t);return!0}function co(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const xA={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ki=new Bi("app","Firebase",xA);/**
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
 */class bA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new zt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ki.create("app-deleted",{appName:this._name})}}/**
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
 */const Wr=kA;function AA(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:TT,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw ki.create("bad-app-name",{appName:String(r)});const i=Aa.get(r);if(i){if(uc(t,i.options)&&uc(n,i.config))return i;throw ki.create("duplicate-app",{appName:r})}const s=new Ub(r);for(const a of lp.values())s.addComponent(a);const o=new bA(t,n,s);return Aa.set(r,o),o}function ig(t=TT){const e=Aa.get(t);if(!e)throw ki.create("no-app",{appName:t});return e}function PA(){return Array.from(Aa.values())}function xe(t,e,n){var r;let i=(r=NA[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ii.warn(a.join(" "));return}rn(new zt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const OA="firebase-heartbeat-database",DA=1,Pa="firebase-heartbeat-store";let xd=null;function ST(){return xd||(xd=CT(OA,DA,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Pa)}}}).catch(t=>{throw ki.create("idb-open",{originalErrorMessage:t.message})})),xd}async function MA(t){var e;try{return(await ST()).transaction(Pa).objectStore(Pa).get(IT(t))}catch(n){if(n instanceof sn)Ii.warn(n.message);else{const r=ki.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Ii.warn(r.message)}}}async function M_(t,e){var n;try{const i=(await ST()).transaction(Pa,"readwrite");return await i.objectStore(Pa).put(e,IT(t)),i.done}catch(r){if(r instanceof sn)Ii.warn(r.message);else{const i=ki.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});Ii.warn(i.message)}}}function IT(t){return`${t.name}!${t.options.appId}`}/**
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
 */const LA=1024,FA=30*24*60*60*1e3;class $A{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new VA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=L_();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=FA}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=L_(),{heartbeatsToSend:n,unsentEntries:r}=UA(this._heartbeatsCache.heartbeats),i=dT(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function L_(){return new Date().toISOString().substring(0,10)}function UA(t,e=LA){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),F_(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),F_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class VA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yT()?wb().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await MA(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return M_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return M_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function F_(t){return dT(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function BA(t){rn(new zt("platform-logger",e=>new eA(e),"PRIVATE")),rn(new zt("heartbeat",e=>new $A(e),"PRIVATE")),xe(ap,D_,t),xe(ap,D_,"esm2017"),xe("fire-js","")}BA("");function sg(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function kT(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const jA=kT,NT=new Bi("auth","Firebase",kT());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $_=new ll("@firebase/auth");function ku(t,...e){$_.logLevel<=Z.ERROR&&$_.error(`Auth (${Wr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(t,...e){throw og(t,...e)}function Rn(t,...e){return og(t,...e)}function RT(t,e,n){const r=Object.assign(Object.assign({},jA()),{[e]:n});return new Bi("auth","Firebase",r).create(e,{appName:t.name})}function zA(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&bn(t,"argument-error"),RT(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function og(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return NT.create(t,...e)}function j(t,e,...n){if(!t)throw og(e,...n)}function Vn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ku(e),new Error(e)}function er(t,e){t||Vn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_=new Map;function Bn(t){er(t instanceof Function,"Expected a class definition");let e=U_.get(t);return e?(er(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,U_.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HA(t,e){const n=co(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(uc(s,e!=null?e:{}))return i;bn(i,"already-initialized")}return n.initialize({options:e})}function WA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Bn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function up(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function qA(){return V_()==="http:"||V_()==="https:"}function V_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(qA()||pT()||"connection"in navigator)?navigator.onLine:!0}function GA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(e,n){this.shortDelay=e,this.longDelay=n,er(n>e,"Short delay should be less than long delay!"),this.isMobile=lh()||ng()}get(){return KA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ag(t,e){er(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Vn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Vn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Vn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YA=new ul(3e4,6e4);function XA(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ch(t,e,n,r,i={}){return bT(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=uo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),xT.fetch()(AT(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function bT(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},QA),e);try{const i=new ZA(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw tu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw tu(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw tu(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw tu(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw RT(t,c,u);bn(t,c)}}catch(i){if(i instanceof sn)throw i;bn(t,"network-request-failed")}}async function JA(t,e,n,r,i={}){const s=await ch(t,e,n,r,i);return"mfaPendingCredential"in s&&bn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function AT(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?ag(t.config,i):`${t.config.apiScheme}://${i}`}class ZA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Rn(this.auth,"network-request-failed")),YA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function tu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Rn(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eP(t,e){return ch(t,"POST","/v1/accounts:delete",e)}async function tP(t,e){return ch(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ra(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function nP(t,e=!1){const n=Ie(t),r=await n.getIdToken(e),i=lg(r);j(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ra(bd(i.auth_time)),issuedAtTime:ra(bd(i.iat)),expirationTime:ra(bd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function bd(t){return Number(t)*1e3}function lg(t){var e;const[n,r,i]=t.split(".");if(n===void 0||r===void 0||i===void 0)return ku("JWT malformed, contained fewer than 3 sections"),null;try{const s=rp(r);return s?JSON.parse(s):(ku("Failed to decode base64 JWT payload"),null)}catch(s){return ku("Caught error parsing JWT payload as JSON",(e=s)===null||e===void 0?void 0:e.toString()),null}}function rP(t){const e=lg(t);return j(e,"internal-error"),j(typeof e.exp<"u","internal-error"),j(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oa(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof sn&&iP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function iP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PT{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ra(this.lastLoginAt),this.creationTime=ra(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function cc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Oa(t,tP(n,{idToken:r}));j(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?lP(s.providerUserInfo):[],a=aP(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new PT(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function oP(t){const e=Ie(t);await cc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function aP(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function lP(t){return t.map(e=>{var{providerId:n}=e,r=sg(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uP(t,e){const n=await bT(t,{},async()=>{const r=uo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=AT(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",xT.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){j(e.idToken,"internal-error"),j(typeof e.idToken<"u","internal-error"),j(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):rP(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return j(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await uP(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Da;return r&&(j(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(j(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(j(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Da,this.toJSON())}_performRefresh(){return Vn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(t,e){j(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class pi{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=sg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new sP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new PT(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Oa(this,this.stsTokenManager.getToken(this.auth,e));return j(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return nP(this,e)}reload(){return oP(this)}_assign(e){this!==e&&(j(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new pi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await cc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Oa(this,eP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:y,emailVerified:_,isAnonymous:T,providerData:k,stsTokenManager:x}=n;j(y&&x,e,"internal-error");const A=Da.fromJSON(this.name,x);j(typeof y=="string",e,"internal-error"),dr(h,e.name),dr(d,e.name),j(typeof _=="boolean",e,"internal-error"),j(typeof T=="boolean",e,"internal-error"),dr(f,e.name),dr(g,e.name),dr(v,e.name),dr(E,e.name),dr(m,e.name),dr(p,e.name);const J=new pi({uid:y,auth:e,email:d,emailVerified:_,displayName:h,isAnonymous:T,photoURL:g,phoneNumber:f,tenantId:v,stsTokenManager:A,createdAt:m,lastLoginAt:p});return k&&Array.isArray(k)&&(J.providerData=k.map(B=>Object.assign({},B))),E&&(J._redirectEventId=E),J}static async _fromIdTokenResponse(e,n,r=!1){const i=new Da;i.updateFromServerResponse(n);const s=new pi({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await cc(s),s}}/**
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
 */class OT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}OT.type="NONE";const B_=OT;/**
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
 */function Nu(t,e,n){return`firebase:${t}:${e}:${n}`}class ks{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Nu(this.userKey,i.apiKey,s),this.fullPersistenceKey=Nu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?pi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ks(Bn(B_),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Bn(B_);const o=Nu(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=pi._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ks(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new ks(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(LT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(DT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if($T(e))return"Blackberry";if(UT(e))return"Webos";if(ug(e))return"Safari";if((e.includes("chrome/")||MT(e))&&!e.includes("edge/"))return"Chrome";if(FT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function DT(t=Ge()){return/firefox\//i.test(t)}function ug(t=Ge()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function MT(t=Ge()){return/crios\//i.test(t)}function LT(t=Ge()){return/iemobile/i.test(t)}function FT(t=Ge()){return/android/i.test(t)}function $T(t=Ge()){return/blackberry/i.test(t)}function UT(t=Ge()){return/webos/i.test(t)}function hh(t=Ge()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function cP(t=Ge()){var e;return hh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function hP(){return mT()&&document.documentMode===10}function VT(t=Ge()){return hh(t)||FT(t)||UT(t)||$T(t)||/windows phone/i.test(t)||LT(t)}function dP(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BT(t,e=[]){let n;switch(t){case"Browser":n=j_(Ge());break;case"Worker":n=`${j_(Ge())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Wr}/${r}`}/**
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
 */class fP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const i of this.queue)await i(e),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const s of r)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pP{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new z_(this),this.idTokenSubscription=new z_(this),this.beforeStateQueue=new fP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=NT,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Bn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ks.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await cc(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=GA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ie(e):null;return n&&j(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&j(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Bn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Bi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Bn(e)||this._popupRedirectResolver;j(n,this,"argument-error"),this.redirectPersistenceManager=await ks.create(this,[Bn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return j(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=BT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function cg(t){return Ie(t)}class z_{constructor(e){this.auth=e,this.observer=null,this.addObserver=Nb(n=>this.observer=n)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Vn("not implemented")}_getIdTokenResponse(e){return Vn("not implemented")}_linkToIdToken(e,n){return Vn("not implemented")}_getReauthenticationResolver(e){return Vn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ns(t,e){return JA(t,"POST","/v1/accounts:signInWithIdp",XA(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mP="http://localhost";class Ni extends jT{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ni(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):bn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=sg(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ni(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ns(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ns(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ns(e,n)}buildRequest(){const e={requestUri:mP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=uo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class cl extends hg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr extends cl{constructor(){super("facebook.com")}static credential(e){return Ni._fromParams({providerId:vr.PROVIDER_ID,signInMethod:vr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vr.credentialFromTaggedObject(e)}static credentialFromError(e){return vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vr.credential(e.oauthAccessToken)}catch{return null}}}vr.FACEBOOK_SIGN_IN_METHOD="facebook.com";vr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends cl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ni._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ln.credential(n,r)}catch{return null}}}Ln.GOOGLE_SIGN_IN_METHOD="google.com";Ln.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r extends cl{constructor(){super("github.com")}static credential(e){return Ni._fromParams({providerId:_r.PROVIDER_ID,signInMethod:_r.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _r.credentialFromTaggedObject(e)}static credentialFromError(e){return _r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _r.credential(e.oauthAccessToken)}catch{return null}}}_r.GITHUB_SIGN_IN_METHOD="github.com";_r.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr extends cl{constructor(){super("twitter.com")}static credential(e,n){return Ni._fromParams({providerId:wr.PROVIDER_ID,signInMethod:wr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return wr.credentialFromTaggedObject(e)}static credentialFromError(e){return wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return wr.credential(n,r)}catch{return null}}}wr.TWITTER_SIGN_IN_METHOD="twitter.com";wr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await pi._fromIdTokenResponse(e,r,i),o=H_(r);return new zs({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=H_(r);return new zs({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function H_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc extends sn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,hc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new hc(e,n,r,i)}}function zT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?hc._fromErrorAndOperation(t,s,e,r):s})}async function gP(t,e,n=!1){const r=await Oa(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return zs._forOperation(t,"link",r)}/**
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
 */async function yP(t,e,n=!1){var r;const{auth:i}=t,s="reauthenticate";try{const o=await Oa(t,zT(i,s,e,t),n);j(o.idToken,i,"internal-error");const a=lg(o.idToken);j(a,i,"internal-error");const{sub:l}=a;return j(t.uid===l,i,"user-mismatch"),zs._forOperation(t,s,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&bn(i,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vP(t,e,n=!1){const r="signIn",i=await zT(t,r,e),s=await zs._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function _P(t,e,n,r){return Ie(t).onIdTokenChanged(e,n,r)}function wP(t){Ie(t).useDeviceLanguage()}function EP(t){return Ie(t).signOut()}const dc="__sak";/**
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
 */class HT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(dc,"1"),this.storage.removeItem(dc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CP(){const t=Ge();return ug(t)||hh(t)}const TP=1e3,SP=10;class WT extends HT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=CP()&&dP(),this.fallbackToPolling=VT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);hP()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,SP):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},TP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}WT.type="LOCAL";const IP=WT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT extends HT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}qT.type="SESSION";const KT=qT;/**
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
 */function kP(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class dh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new dh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await kP(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}dh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class NP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=dg("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xn(){return window}function RP(t){xn().location.href=t}/**
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
 */function GT(){return typeof xn().WorkerGlobalScope<"u"&&typeof xn().importScripts=="function"}async function xP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function bP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function AP(){return GT()?self:null}/**
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
 */const QT="firebaseLocalStorageDb",PP=1,fc="firebaseLocalStorage",YT="fbase_key";class hl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function fh(t,e){return t.transaction([fc],e?"readwrite":"readonly").objectStore(fc)}function OP(){const t=indexedDB.deleteDatabase(QT);return new hl(t).toPromise()}function cp(){const t=indexedDB.open(QT,PP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(fc,{keyPath:YT})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(fc)?e(r):(r.close(),await OP(),e(await cp()))})})}async function W_(t,e,n){const r=fh(t,!0).put({[YT]:e,value:n});return new hl(r).toPromise()}async function DP(t,e){const n=fh(t,!1).get(e),r=await new hl(n).toPromise();return r===void 0?null:r.value}function q_(t,e){const n=fh(t,!0).delete(e);return new hl(n).toPromise()}const MP=800,LP=3;class XT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await cp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>LP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return GT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=dh._getInstance(AP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await xP(),!this.activeServiceWorker)return;this.sender=new NP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||bP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await cp();return await W_(e,dc,"1"),await q_(e,dc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>W_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>DP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>q_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=fh(i,!1).getAll();return new hl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),MP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}XT.type="LOCAL";const FP=XT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $P(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function UP(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Rn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",$P().appendChild(r)})}function VP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new ul(3e4,6e4);/**
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
 */function JT(t,e){return e?Bn(e):(j(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class fg extends jT{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ns(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ns(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ns(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function BP(t){return vP(t.auth,new fg(t),t.bypassAuthState)}function jP(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),yP(n,new fg(t),t.bypassAuthState)}async function zP(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),gP(n,new fg(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return BP;case"linkViaPopup":case"linkViaRedirect":return zP;case"reauthViaPopup":case"reauthViaRedirect":return jP;default:bn(this.auth,"internal-error")}}resolve(e){er(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){er(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HP=new ul(2e3,1e4);async function WP(t,e,n){const r=cg(t);zA(t,e,hg);const i=JT(r,n);return new oi(r,"signInViaPopup",e,i).executeNotNull()}class oi extends ZT{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,oi.currentPopupAction&&oi.currentPopupAction.cancel(),oi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return j(e,this.auth,"internal-error"),e}async onExecution(){er(this.filter.length===1,"Popup operations only handle one event");const e=dg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Rn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Rn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,oi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Rn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,HP.get())};e()}}oi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qP="pendingRedirect",Ru=new Map;class KP extends ZT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ru.get(this.auth._key());if(!e){try{const r=await GP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ru.set(this.auth._key(),e)}return this.bypassAuthState||Ru.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function GP(t,e){const n=XP(e),r=YP(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function QP(t,e){Ru.set(t._key(),e)}function YP(t){return Bn(t._redirectPersistence)}function XP(t){return Nu(qP,t.config.apiKey,t.name)}async function JP(t,e,n=!1){const r=cg(t),i=JT(r,e),o=await new KP(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZP=10*60*1e3;class eO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!tO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!eS(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Rn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ZP&&this.cachedEventUids.clear(),this.cachedEventUids.has(K_(e))}saveEventToCache(e){this.cachedEventUids.add(K_(e)),this.lastProcessedEventTime=Date.now()}}function K_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function eS({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function tO(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return eS(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nO(t,e={}){return ch(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,iO=/^https?/;async function sO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await nO(t);for(const n of e)try{if(oO(n))return}catch{}bn(t,"unauthorized-domain")}function oO(t){const e=up(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!iO.test(n))return!1;if(rO.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const aO=new ul(3e4,6e4);function G_(){const t=xn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function lO(t){return new Promise((e,n)=>{var r,i,s;function o(){G_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{G_(),n(Rn(t,"network-request-failed"))},timeout:aO.get()})}if(!((i=(r=xn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=xn().gapi)===null||s===void 0)&&s.load)o();else{const a=VP("iframefcb");return xn()[a]=()=>{gapi.load?o():n(Rn(t,"network-request-failed"))},UP(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw xu=null,e})}let xu=null;function uO(t){return xu=xu||lO(t),xu}/**
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
 */const cO=new ul(5e3,15e3),hO="__/auth/iframe",dO="emulator/auth/iframe",fO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},pO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function mO(t){const e=t.config;j(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ag(e,dO):`https://${t.config.authDomain}/${hO}`,r={apiKey:e.apiKey,appName:t.name,v:Wr},i=pO.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${uo(r).slice(1)}`}async function gO(t){const e=await uO(t),n=xn().gapi;return j(n,t,"internal-error"),e.open({where:document.body,url:mO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fO,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Rn(t,"network-request-failed"),a=xn().setTimeout(()=>{s(o)},cO.get());function l(){xn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const yO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},vO=500,_O=600,wO="_blank",EO="http://localhost";class Q_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function CO(t,e,n,r=vO,i=_O){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},yO),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ge().toLowerCase();n&&(a=MT(u)?wO:n),DT(u)&&(e=e||EO,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[f,g])=>`${d}${f}=${g},`,"");if(cP(u)&&a!=="_self")return TO(e||"",a),new Q_(null);const h=window.open(e||"",a,c);j(h,t,"popup-blocked");try{h.focus()}catch{}return new Q_(h)}function TO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const SO="__/auth/handler",IO="emulator/auth/handler";function Y_(t,e,n,r,i,s){j(t.config.authDomain,t,"auth-domain-config-required"),j(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Wr,eventId:i};if(e instanceof hg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ip(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof cl){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${kO(t)}?${uo(a).slice(1)}`}function kO({config:t}){return t.emulator?ag(t,IO):`https://${t.authDomain}/${SO}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ad="webStorageSupport";class NO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=KT,this._completeRedirectFn=JP,this._overrideRedirectResult=QP}async _openPopup(e,n,r,i){var s;er((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Y_(e,n,r,up(),i);return CO(e,o,dg())}async _openRedirect(e,n,r,i){return await this._originValidation(e),RP(Y_(e,n,r,up(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(er(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await gO(e),r=new eO(e);return n.register("authEvent",i=>(j(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ad,{type:Ad},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ad];o!==void 0&&n(!!o),bn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=sO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return VT()||ug()||hh()}}const RO=NO;var X_="@firebase/auth",J_="0.20.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function AO(t){rn(new zt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{j(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),j(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:BT(t)},c=new pP(a,l,u);return WA(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),rn(new zt("auth-internal",e=>{const n=cg(e.getProvider("auth").getImmediate());return(r=>new xO(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),xe(X_,J_,bO(t)),xe(X_,J_,"esm2017")}/**
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
 */function PO(t=ig()){const e=co(t,"auth");return e.isInitialized()?e.getImmediate():HA(t,{popupRedirectResolver:RO,persistence:[FP,IP,KT]})}AO("Browser");const Z_="@firebase/database",e0="0.13.6";/**
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
 */let tS="";function OO(t){tS=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DO{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),qe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ba(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MO{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return ar(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nS=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new DO(e)}}catch{}return new MO},ai=nS("localStorage"),hp=nS("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rs=new ll("@firebase/database"),LO=function(){let t=1;return function(){return t++}}(),rS=function(t){const e=bb(t),n=new kb;n.update(e);const r=n.digest();return eg.encodeByteArray(r)},dl=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=dl.apply(null,r):typeof r=="object"?e+=qe(r):e+=r,e+=" "}return e};let mi=null,t0=!0;const FO=function(t,e){N(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Rs.logLevel=Z.VERBOSE,mi=Rs.log.bind(Rs),e&&hp.set("logging_enabled",!0)):typeof t=="function"?mi=t:(mi=null,hp.remove("logging_enabled"))},lt=function(...t){if(t0===!0&&(t0=!1,mi===null&&hp.get("logging_enabled")===!0&&FO(!0)),mi){const e=dl.apply(null,t);mi(e)}},fl=function(t){return function(...e){lt(t,...e)}},dp=function(...t){const e="FIREBASE INTERNAL ERROR: "+dl(...t);Rs.error(e)},Ri=function(...t){const e=`FIREBASE FATAL ERROR: ${dl(...t)}`;throw Rs.error(e),new Error(e)},Vt=function(...t){const e="FIREBASE WARNING: "+dl(...t);Rs.warn(e)},$O=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Vt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},iS=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},UO=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Hs="[MIN_NAME]",xi="[MAX_NAME]",ho=function(t,e){if(t===e)return 0;if(t===Hs||e===xi)return-1;if(e===Hs||t===xi)return 1;{const n=n0(t),r=n0(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},VO=function(t,e){return t===e?0:t<e?-1:1},Oo=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+qe(e))},pg=function(t){if(typeof t!="object"||t===null)return qe(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=qe(e[r]),n+=":",n+=pg(t[e[r]]);return n+="}",n},sS=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Lt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const oS=function(t){N(!iS(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(c.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},BO=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},jO=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function zO(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const HO=new RegExp("^-?(0*)\\d{1,10}$"),WO=-2147483648,qO=2147483647,n0=function(t){if(HO.test(t)){const e=Number(t);if(e>=WO&&e<=qO)return e}return null},pl=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Vt("Exception was thrown by user callback.",n),e},Math.floor(0))}},KO=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ia=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class GO{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Vt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QO{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(lt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Vt(e)}}class fp{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}fp.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mg="5",aS="v",lS="s",uS="r",cS="f",hS=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,dS="ls",fS="p",pp="ac",pS="websocket",mS="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YO{constructor(e,n,r,i,s=!1,o="",a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ai.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ai.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function XO(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function gS(t,e,n){N(typeof e=="string","typeof type must == string"),N(typeof n=="object","typeof params must == object");let r;if(e===pS)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===mS)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);XO(t)&&(n.ns=t.namespace);const i=[];return Lt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JO{constructor(){this.counters_={}}incrementCounter(e,n=1){ar(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return gb(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pd={},Od={};function gg(t){const e=t.toString();return Pd[e]||(Pd[e]=new JO),Pd[e]}function ZO(t,e){const n=t.toString();return Od[n]||(Od[n]=e()),Od[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eD{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&pl(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r0="start",tD="close",nD="pLPCommand",rD="pRTLPCB",yS="id",vS="pw",_S="ser",iD="cb",sD="seg",oD="ts",aD="d",lD="dframe",wS=1870,ES=30,uD=wS-ES,cD=25e3,hD=3e4;class gs{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=fl(e),this.stats_=gg(n),this.urlFn=l=>(this.appCheckToken&&(l[pp]=this.appCheckToken),gS(n,mS,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new eD(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(hD)),UO(()=>{if(this.isClosed_)return;this.scriptTagHolder=new yg((...s)=>{const[o,a,l,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===r0)this.id=a,this.password=l;else if(o===tD)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[r0]="t",r[_S]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[iD]=this.scriptTagHolder.uniqueCallbackIdentifier),r[aS]=mg,this.transportSessionId&&(r[lS]=this.transportSessionId),this.lastSessionId&&(r[dS]=this.lastSessionId),this.applicationId&&(r[fS]=this.applicationId),this.appCheckToken&&(r[pp]=this.appCheckToken),typeof location<"u"&&location.hostname&&hS.test(location.hostname)&&(r[uS]=cS);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){gs.forceAllow_=!0}static forceDisallow(){gs.forceDisallow_=!0}static isAvailable(){return gs.forceAllow_?!0:!gs.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!BO()&&!jO()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=qe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=hT(n),i=sS(r,uD);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[lD]="t",r[yS]=e,r[vS]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=qe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class yg{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=LO(),window[nD+this.uniqueCallbackIdentifier]=e,window[rD+this.uniqueCallbackIdentifier]=n,this.myIFrame=yg.createIFrame_();let s="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const a=document.domain;s='<script>document.domain="'+a+'";<\/script>'}const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){lt("frame writing exception"),a.stack&&lt(a.stack),lt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||lt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[yS]=this.myID,e[vS]=this.myPW,e[_S]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+ES+r.length<=wS;){const o=this.pendingSegs.shift();r=r+"&"+sD+i+"="+o.seg+"&"+oD+i+"="+o.ts+"&"+aD+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(cD)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{lt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dD=16384,fD=45e3;let pc=null;typeof MozWebSocket<"u"?pc=MozWebSocket:typeof WebSocket<"u"&&(pc=WebSocket);class hn{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=fl(this.connId),this.stats_=gg(n),this.connURL=hn.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[aS]=mg,typeof location<"u"&&location.hostname&&hS.test(location.hostname)&&(o[uS]=cS),n&&(o[lS]=n),r&&(o[dS]=r),i&&(o[pp]=i),s&&(o[fS]=s),gS(e,pS,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ai.set("previous_websocket_failure",!0);try{let r;gT(),this.mySock=new pc(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){hn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&pc!==null&&!hn.forceDisallow_}static previouslyFailed(){return ai.isInMemoryStorage||ai.get("previous_websocket_failure")===!0}markConnectionHealthy(){ai.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=ba(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(N(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=qe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=sS(n,dD);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(fD))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}hn.responsesRequiredToBeHealthy=2;hn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[gs,hn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=hn&&hn.isAvailable();let r=n&&!hn.previouslyFailed();if(e.webSocketOnly&&(n||Vt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[hn];else{const i=this.transports_=[];for(const s of Ma.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Ma.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ma.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pD=6e4,mD=5e3,gD=10*1024,yD=100*1024,Dd="t",i0="d",vD="s",s0="r",_D="e",o0="o",a0="a",l0="n",u0="p",wD="h";class ED{constructor(e,n,r,i,s,o,a,l,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=fl("c:"+this.id+":"),this.transportManager_=new Ma(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ia(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>yD?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>gD?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Dd in e){const n=e[Dd];n===a0?this.upgradeIfSecondaryHealthy_():n===s0?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===o0&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Oo("t",e),r=Oo("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:u0,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:a0,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:l0,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Oo("t",e),r=Oo("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Oo(Dd,e);if(i0 in e){const r=e[i0];if(n===wD)this.onHandshake_(r);else if(n===l0){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===vD?this.onConnectionShutdown_(r):n===s0?this.onReset_(r):n===_D?dp("Server Error: "+r):n===o0?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):dp("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),mg!==r&&Vt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),ia(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(pD))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ia(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(mD))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:u0,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ai.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CS{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TS{constructor(e){this.allowedEvents_=e,this.listeners_={},N(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){N(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc extends TS{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!lh()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new mc}getInitialEvent(e){return N(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c0=32,h0=768;class le{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function te(){return new le("")}function K(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Lr(t){return t.pieces_.length-t.pieceNum_}function ue(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new le(t.pieces_,e)}function SS(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function CD(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function IS(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function kS(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new le(e,0)}function Pe(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof le)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new le(n,0)}function G(t){return t.pieceNum_>=t.pieces_.length}function bt(t,e){const n=K(t),r=K(e);if(n===null)return e;if(n===r)return bt(ue(t),ue(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function vg(t,e){if(Lr(t)!==Lr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function dn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Lr(t)>Lr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class TD{constructor(e,n){this.errorPrefix_=n,this.parts_=IS(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=uh(this.parts_[r]);NS(this)}}function SD(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=uh(e),NS(t)}function ID(t){const e=t.parts_.pop();t.byteLength_-=uh(e),t.parts_.length>0&&(t.byteLength_-=1)}function NS(t){if(t.byteLength_>h0)throw new Error(t.errorPrefix_+"has a key path longer than "+h0+" bytes ("+t.byteLength_+").");if(t.parts_.length>c0)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+c0+") or object contains a cycle "+ei(t))}function ei(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g extends TS{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new _g}getInitialEvent(e){return N(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do=1e3,kD=60*5*1e3,d0=30*1e3,ND=1.3,RD=3e4,xD="server_kill",f0=3;class Kn extends CS{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Kn.nextPersistentConnectionId_++,this.log_=fl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Do,this.maxReconnectDelay_=kD,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!gT())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");_g.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&mc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(qe(s)),N(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new tg,r={p:e._path.toString(),q:e._queryObject},i={action:"g",request:r,onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),N(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),N(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;Kn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&ar(e,"w")){const r=js(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Vt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Ib(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=d0)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Sb(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),N(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+qe(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):dp("Unrecognized action received from server: "+qe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){N(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Do,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Do,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>RD&&(this.reconnectDelay_=Do),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*ND)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Kn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(h){N(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?lt("getToken() completed but was canceled"):(lt("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new ED(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,f=>{Vt(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(xD)},s))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Vt(h),l())}}}interrupt(e){lt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){lt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ip(this.interruptReasons_)&&(this.reconnectDelay_=Do,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>pg(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new le(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){lt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=f0&&(this.reconnectDelay_=d0,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){lt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=f0&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+tS.replace(/\./g,"-")]=1,lh()?e["framework.cordova"]=1:ng()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=mc.getInstance().currentlyOnline();return ip(this.interruptReasons_)&&e}}Kn.nextPersistentConnectionId_=0;Kn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ph{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new W(Hs,e),i=new W(Hs,n);return this.compare(r,i)!==0}minPost(){return W.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nu;class RS extends ph{static get __EMPTY_NODE(){return nu}static set __EMPTY_NODE(e){nu=e}compare(e,n){return ho(e.name,n.name)}isDefinedOn(e){throw lo("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return W.MIN}maxPost(){return new W(xi,nu)}makePost(e,n){return N(typeof e=="string","KeyIndex indexValue must always be a string."),new W(e,nu)}toString(){return".key"}}const xs=new RS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class We{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:We.RED,this.left=i!=null?i:At.EMPTY_NODE,this.right=s!=null?s:At.EMPTY_NODE}copy(e,n,r,i,s){return new We(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return At.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return At.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,We.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,We.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}We.RED=!0;We.BLACK=!1;class bD{copy(e,n,r,i,s){return this}insert(e,n,r){return new We(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class At{constructor(e,n=At.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new At(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,We.BLACK,null,null))}remove(e){return new At(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,We.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ru(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ru(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ru(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ru(this.root_,null,this.comparator_,!0,e)}}At.EMPTY_NODE=new bD;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AD(t,e){return ho(t.name,e.name)}function wg(t,e){return ho(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mp;function PD(t){mp=t}const xS=function(t){return typeof t=="number"?"number:"+oS(t):"string:"+t},bS=function(t){if(t.isLeafNode()){const e=t.val();N(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ar(e,".sv"),"Priority must be a string or number.")}else N(t===mp||t.isEmpty(),"priority of unexpected type.");N(t===mp||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let p0;class je{constructor(e,n=je.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,N(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),bS(this.priorityNode_)}static set __childrenNodeConstructor(e){p0=e}static get __childrenNodeConstructor(){return p0}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new je(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:je.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return G(e)?this:K(e)===".priority"?this.priorityNode_:je.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:je.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=K(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(N(r!==".priority"||Lr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,je.__childrenNodeConstructor.EMPTY_NODE.updateChild(ue(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+xS(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=oS(this.value_):e+=this.value_,this.lazyHash_=rS(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===je.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof je.__childrenNodeConstructor?-1:(N(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=je.VALUE_TYPE_ORDER.indexOf(n),s=je.VALUE_TYPE_ORDER.indexOf(r);return N(i>=0,"Unknown leaf type: "+n),N(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}je.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let AS,PS;function OD(t){AS=t}function DD(t){PS=t}class MD extends ph{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?ho(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return W.MIN}maxPost(){return new W(xi,new je("[PRIORITY-POST]",PS))}makePost(e,n){const r=AS(e);return new W(n,new je("[PRIORITY-POST]",r))}toString(){return".priority"}}const Ce=new MD;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LD=Math.log(2);class FD{constructor(e){const n=s=>parseInt(Math.log(s)/LD,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const gc=function(t,e,n,r){t.sort(e);const i=function(l,u){const c=u-l;let h,d;if(c===0)return null;if(c===1)return h=t[l],d=n?n(h):h,new We(d,h.node,We.BLACK,null,null);{const f=parseInt(c/2,10)+l,g=i(l,f),v=i(f+1,u);return h=t[f],d=n?n(h):h,new We(d,h.node,We.BLACK,g,v)}},s=function(l){let u=null,c=null,h=t.length;const d=function(g,v){const E=h-g,m=h;h-=g;const p=i(E+1,m),y=t[E],_=n?n(y):y;f(new We(_,y.node,v,null,p))},f=function(g){u?(u.left=g,u=g):(c=g,u=g)};for(let g=0;g<l.count;++g){const v=l.nextBitIsOne(),E=Math.pow(2,l.count-(g+1));v?d(E,We.BLACK):(d(E,We.BLACK),d(E,We.RED))}return c},o=new FD(t.length),a=s(o);return new At(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Md;const Ji={};class jn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return N(Ji&&Ce,"ChildrenNode.ts has not been loaded"),Md=Md||new jn({".priority":Ji},{".priority":Ce}),Md}get(e){const n=js(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof At?n:null}hasIndex(e){return ar(this.indexSet_,e.toString())}addIndex(e,n){N(e!==xs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(W.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=gc(r,e.getCompare()):a=Ji;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const c=Object.assign({},this.indexes_);return c[l]=a,new jn(c,u)}addToIndexes(e,n){const r=lc(this.indexes_,(i,s)=>{const o=js(this.indexSet_,s);if(N(o,"Missing index implementation for "+s),i===Ji)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(W.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),gc(a,o.getCompare())}else return Ji;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new W(e.name,a))),l.insert(e,e.node)}});return new jn(r,this.indexSet_)}removeFromIndexes(e,n){const r=lc(this.indexes_,i=>{if(i===Ji)return i;{const s=n.get(e.name);return s?i.remove(new W(e.name,s)):i}});return new jn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mo;class U{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&bS(this.priorityNode_),this.children_.isEmpty()&&N(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Mo||(Mo=new U(new At(wg),null,jn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Mo}updatePriority(e){return this.children_.isEmpty()?this:new U(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Mo:n}}getChild(e){const n=K(e);return n===null?this:this.getImmediateChild(n).getChild(ue(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(N(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new W(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Mo:this.priorityNode_;return new U(i,o,s)}}updateChild(e,n){const r=K(e);if(r===null)return n;{N(K(e)!==".priority"||Lr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(ue(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Ce,(o,a)=>{n[o]=a.val(e),r++,s&&U.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+xS(this.getPriority().val())+":"),this.forEachChild(Ce,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":rS(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new W(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new W(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new W(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,W.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,W.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ml?-1:0}withIndex(e){if(e===xs||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new U(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===xs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Ce),i=n.getIterator(Ce);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===xs?null:this.indexMap_.get(e.toString())}}U.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class $D extends U{constructor(){super(new At(wg),U.EMPTY_NODE,jn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return U.EMPTY_NODE}isEmpty(){return!1}}const ml=new $D;Object.defineProperties(W,{MIN:{value:new W(Hs,U.EMPTY_NODE)},MAX:{value:new W(xi,ml)}});RS.__EMPTY_NODE=U.EMPTY_NODE;je.__childrenNodeConstructor=U;PD(ml);DD(ml);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UD=!0;function ut(t,e=null){if(t===null)return U.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),N(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new je(n,ut(e))}if(!(t instanceof Array)&&UD){const n=[];let r=!1;if(Lt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=ut(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new W(o,l)))}}),n.length===0)return U.EMPTY_NODE;const s=gc(n,AD,o=>o.name,wg);if(r){const o=gc(n,Ce.getCompare());return new U(s,ut(e),new jn({".priority":o},{".priority":Ce}))}else return new U(s,ut(e),jn.Default)}else{let n=U.EMPTY_NODE;return Lt(t,(r,i)=>{if(ar(t,r)&&r.substring(0,1)!=="."){const s=ut(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(ut(e))}}OD(ut);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VD extends ph{constructor(e){super(),this.indexPath_=e,N(!G(e)&&K(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?ho(e.name,n.name):s}makePost(e,n){const r=ut(e),i=U.EMPTY_NODE.updateChild(this.indexPath_,r);return new W(n,i)}maxPost(){const e=U.EMPTY_NODE.updateChild(this.indexPath_,ml);return new W(xi,e)}toString(){return IS(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BD extends ph{compare(e,n){const r=e.node.compareTo(n.node);return r===0?ho(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return W.MIN}maxPost(){return W.MAX}makePost(e,n){const r=ut(e);return new W(n,r)}toString(){return".value"}}const jD=new BD;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OS(t){return{type:"value",snapshotNode:t}}function Ws(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function La(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Fa(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function zD(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){N(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(La(n,a)):N(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ws(n,r)):o.trackChildChange(Fa(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Ce,(i,s)=>{n.hasChild(i)||r.trackChildChange(La(i,s))}),n.isLeafNode()||n.forEachChild(Ce,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Fa(i,s,o))}else r.trackChildChange(Ws(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?U.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e){this.indexedFilter_=new Eg(e.getIndex()),this.index_=e.getIndex(),this.startPost_=$a.getStartPost_(e),this.endPost_=$a.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,r,i,s,o){return this.matches(new W(n,r))||(r=U.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=U.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(U.EMPTY_NODE);const s=this;return n.forEachChild(Ce,(o,a)=>{s.matches(new W(o,a))||(i=i.updateImmediateChild(o,U.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HD{constructor(e){this.rangedFilter_=new $a(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new W(n,r))||(r=U.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=U.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=U.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();let l;if(this.reverse_?l=this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:l=this.index_.compare(a,this.rangedFilter_.getEndPost())<=0,l)i=i.updateImmediateChild(a.name,a.node),o++;else break}}else{i=n.withIndex(this.index_),i=i.updatePriority(U.EMPTY_NODE);let s,o,a,l;if(this.reverse_){l=i.getReverseIterator(this.index_),s=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const h=this.index_.getCompare();a=(d,f)=>h(f,d)}else l=i.getIterator(this.index_),s=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),a=this.index_.getCompare();let u=0,c=!1;for(;l.hasNext();){const h=l.getNext();!c&&a(s,h)<=0&&(c=!0),c&&u<this.limit_&&a(h,o)<=0?u++:i=i.updateImmediateChild(h.name,U.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,f)=>h(f,d)}else o=this.index_.getCompare();const a=e;N(a.numChildren()===this.limit_,"");const l=new W(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),c=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,u,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const f=d==null?1:o(d,l);if(c&&!r.isEmpty()&&f>=0)return s!=null&&s.trackChildChange(Fa(n,r,h)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(La(n,h));const v=a.updateImmediateChild(n,U.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(s!=null&&s.trackChildChange(Ws(d.name,d.node)),v.updateImmediateChild(d.name,d.node)):v}}else return r.isEmpty()?e:c&&o(u,l)>=0?(s!=null&&(s.trackChildChange(La(u.name,u.node)),s.trackChildChange(Ws(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,U.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ce}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return N(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return N(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Hs}hasEnd(){return this.endSet_}getIndexEndValue(){return N(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return N(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:xi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return N(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ce}copy(){const e=new Cg;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function WD(t){return t.loadsAllData()?new Eg(t.getIndex()):t.hasLimit()?new HD(t):new $a(t)}function m0(t){const e={};if(t.isDefault())return e;let n;return t.index_===Ce?n="$priority":t.index_===jD?n="$value":t.index_===xs?n="$key":(N(t.index_ instanceof VD,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=qe(n),t.startSet_&&(e.startAt=qe(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+qe(t.indexStartName_))),t.endSet_&&(e.endAt=qe(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+qe(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function g0(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ce&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc extends CS{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=fl("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(N(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=yc.getListenId_(e,r),a={};this.listens_[o]=a;const l=m0(e._queryParams);this.restRequest_(s+".json",l,(u,c)=>{let h=c;if(u===404&&(h=null,u=null),u===null&&this.onDataUpdate_(s,h,!1,r),js(this.listens_,o)===a){let d;u?u===401?d="permission_denied":d="rest_error:"+u:d="ok",i(d,null)}})}unlisten(e,n){const r=yc.getListenId_(e,n);delete this.listens_[r]}get(e){const n=m0(e._queryParams),r=e._path.toString(),i=new tg;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+uo(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=ba(a.responseText)}catch{Vt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Vt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qD{constructor(){this.rootNode_=U.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vc(){return{value:null,children:new Map}}function DS(t,e,n){if(G(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=K(e);t.children.has(r)||t.children.set(r,vc());const i=t.children.get(r);e=ue(e),DS(i,e,n)}}function gp(t,e,n){t.value!==null?n(e,t.value):KD(t,(r,i)=>{const s=new le(e.toString()+"/"+r);gp(i,s,n)})}function KD(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GD{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Lt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y0=10*1e3,QD=30*1e3,YD=5*60*1e3;class XD{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new GD(e);const r=y0+(QD-y0)*Math.random();ia(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Lt(e,(i,s)=>{s>0&&ar(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),ia(this.reportStats_.bind(this),Math.floor(Math.random()*2*YD))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(fn||(fn={}));function MS(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Tg(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Sg(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=fn.ACK_USER_WRITE,this.source=MS()}operationForChild(e){if(G(this.path)){if(this.affectedTree.value!=null)return N(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new le(e));return new _c(te(),n,this.revert)}}else return N(K(this.path)===e,"operationForChild called for unrelated child."),new _c(ue(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e,n){this.source=e,this.path=n,this.type=fn.LISTEN_COMPLETE}operationForChild(e){return G(this.path)?new Ua(this.source,te()):new Ua(this.source,ue(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=fn.OVERWRITE}operationForChild(e){return G(this.path)?new bi(this.source,te(),this.snap.getImmediateChild(e)):new bi(this.source,ue(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=fn.MERGE}operationForChild(e){if(G(this.path)){const n=this.children.subtree(new le(e));return n.isEmpty()?null:n.value?new bi(this.source,te(),n.value):new Va(this.source,te(),n)}else return N(K(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Va(this.source,ue(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(G(e))return this.isFullyInitialized()&&!this.filtered_;const n=K(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JD{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function ZD(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(zD(o.childName,o.snapshotNode))}),Lo(t,i,"child_removed",e,r,n),Lo(t,i,"child_added",e,r,n),Lo(t,i,"child_moved",s,r,n),Lo(t,i,"child_changed",e,r,n),Lo(t,i,"value",e,r,n),i}function Lo(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>tM(t,a,l)),o.forEach(a=>{const l=eM(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function eM(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function tM(t,e,n){if(e.childName==null||n.childName==null)throw lo("Should only compare child_ events.");const r=new W(e.childName,e.snapshotNode),i=new W(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mh(t,e){return{eventCache:t,serverCache:e}}function sa(t,e,n,r){return mh(new Ai(e,n,r),t.serverCache)}function LS(t,e,n,r){return mh(t.eventCache,new Ai(e,n,r))}function yp(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Pi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ld;const nM=()=>(Ld||(Ld=new At(VO)),Ld);class fe{constructor(e,n=nM()){this.value=e,this.children=n}static fromObject(e){let n=new fe(null);return Lt(e,(r,i)=>{n=n.set(new le(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:te(),value:this.value};if(G(e))return null;{const r=K(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(ue(e),n);return s!=null?{path:Pe(new le(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(G(e))return this;{const n=K(e),r=this.children.get(n);return r!==null?r.subtree(ue(e)):new fe(null)}}set(e,n){if(G(e))return new fe(n,this.children);{const r=K(e),s=(this.children.get(r)||new fe(null)).set(ue(e),n),o=this.children.insert(r,s);return new fe(this.value,o)}}remove(e){if(G(e))return this.children.isEmpty()?new fe(null):new fe(null,this.children);{const n=K(e),r=this.children.get(n);if(r){const i=r.remove(ue(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new fe(null):new fe(this.value,s)}else return this}}get(e){if(G(e))return this.value;{const n=K(e),r=this.children.get(n);return r?r.get(ue(e)):null}}setTree(e,n){if(G(e))return n;{const r=K(e),s=(this.children.get(r)||new fe(null)).setTree(ue(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new fe(this.value,o)}}fold(e){return this.fold_(te(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Pe(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,te(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(G(e))return null;{const s=K(e),o=this.children.get(s);return o?o.findOnPath_(ue(e),Pe(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,te(),n)}foreachOnPath_(e,n,r){if(G(e))return this;{this.value&&r(n,this.value);const i=K(e),s=this.children.get(i);return s?s.foreachOnPath_(ue(e),Pe(n,i),r):new fe(null)}}foreach(e){this.foreach_(te(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Pe(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this.writeTree_=e}static empty(){return new yn(new fe(null))}}function oa(t,e,n){if(G(e))return new yn(new fe(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=bt(i,e);return s=s.updateChild(o,n),new yn(t.writeTree_.set(i,s))}else{const i=new fe(n),s=t.writeTree_.setTree(e,i);return new yn(s)}}}function v0(t,e,n){let r=t;return Lt(n,(i,s)=>{r=oa(r,Pe(e,i),s)}),r}function _0(t,e){if(G(e))return yn.empty();{const n=t.writeTree_.setTree(e,new fe(null));return new yn(n)}}function vp(t,e){return ji(t,e)!=null}function ji(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(bt(n.path,e)):null}function w0(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ce,(r,i)=>{e.push(new W(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new W(r,i.value))}),e}function Pr(t,e){if(G(e))return t;{const n=ji(t,e);return n!=null?new yn(new fe(n)):new yn(t.writeTree_.subtree(e))}}function _p(t){return t.writeTree_.isEmpty()}function qs(t,e){return FS(te(),t.writeTree_,e)}function FS(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(N(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=FS(Pe(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Pe(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ig(t,e){return BS(e,t)}function rM(t,e,n,r,i){N(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=oa(t.visibleWrites,e,n)),t.lastWriteId=r}function iM(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function sM(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);N(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&oM(a,r.path)?i=!1:dn(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return aM(t),!0;if(r.snap)t.visibleWrites=_0(t.visibleWrites,r.path);else{const a=r.children;Lt(a,l=>{t.visibleWrites=_0(t.visibleWrites,Pe(r.path,l))})}return!0}else return!1}function oM(t,e){if(t.snap)return dn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&dn(Pe(t.path,n),e))return!0;return!1}function aM(t){t.visibleWrites=$S(t.allWrites,lM,te()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function lM(t){return t.visible}function $S(t,e,n){let r=yn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)dn(n,o)?(a=bt(n,o),r=oa(r,a,s.snap)):dn(o,n)&&(a=bt(o,n),r=oa(r,te(),s.snap.getChild(a)));else if(s.children){if(dn(n,o))a=bt(n,o),r=v0(r,a,s.children);else if(dn(o,n))if(a=bt(o,n),G(a))r=v0(r,te(),s.children);else{const l=js(s.children,K(a));if(l){const u=l.getChild(ue(a));r=oa(r,te(),u)}}}else throw lo("WriteRecord should have .snap or .children")}}return r}function US(t,e,n,r,i){if(!r&&!i){const s=ji(t.visibleWrites,e);if(s!=null)return s;{const o=Pr(t.visibleWrites,e);if(_p(o))return n;if(n==null&&!vp(o,te()))return null;{const a=n||U.EMPTY_NODE;return qs(o,a)}}}else{const s=Pr(t.visibleWrites,e);if(!i&&_p(s))return n;if(!i&&n==null&&!vp(s,te()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(dn(u.path,e)||dn(e,u.path))},a=$S(t.allWrites,o,e),l=n||U.EMPTY_NODE;return qs(a,l)}}}function uM(t,e,n){let r=U.EMPTY_NODE;const i=ji(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Ce,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Pr(t.visibleWrites,e);return n.forEachChild(Ce,(o,a)=>{const l=qs(Pr(s,new le(o)),a);r=r.updateImmediateChild(o,l)}),w0(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Pr(t.visibleWrites,e);return w0(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function cM(t,e,n,r,i){N(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Pe(e,n);if(vp(t.visibleWrites,s))return null;{const o=Pr(t.visibleWrites,s);return _p(o)?i.getChild(n):qs(o,i.getChild(n))}}function hM(t,e,n,r){const i=Pe(e,n),s=ji(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Pr(t.visibleWrites,i);return qs(o,r.getNode().getImmediateChild(n))}else return null}function dM(t,e){return ji(t.visibleWrites,e)}function fM(t,e,n,r,i,s,o){let a;const l=Pr(t.visibleWrites,e),u=ji(l,te());if(u!=null)a=u;else if(n!=null)a=qs(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],h=o.getCompare(),d=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let f=d.getNext();for(;f&&c.length<i;)h(f,r)!==0&&c.push(f),f=d.getNext();return c}else return[]}function pM(){return{visibleWrites:yn.empty(),allWrites:[],lastWriteId:-1}}function wc(t,e,n,r){return US(t.writeTree,t.treePath,e,n,r)}function kg(t,e){return uM(t.writeTree,t.treePath,e)}function E0(t,e,n,r){return cM(t.writeTree,t.treePath,e,n,r)}function Ec(t,e){return dM(t.writeTree,Pe(t.treePath,e))}function mM(t,e,n,r,i,s){return fM(t.writeTree,t.treePath,e,n,r,i,s)}function Ng(t,e,n){return hM(t.writeTree,t.treePath,e,n)}function VS(t,e){return BS(Pe(t.treePath,e),t.writeTree)}function BS(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gM{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;N(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),N(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Fa(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,La(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Ws(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Fa(r,e.snapshotNode,i.oldSnap));else throw lo("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yM{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const jS=new yM;class Rg{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Ai(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ng(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Pi(this.viewCache_),s=mM(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vM(t){return{filter:t}}function _M(t,e){N(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),N(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function wM(t,e,n,r,i){const s=new gM;let o,a;if(n.type===fn.OVERWRITE){const u=n;u.source.fromUser?o=wp(t,e,u.path,u.snap,r,i,s):(N(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!G(u.path),o=Cc(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===fn.MERGE){const u=n;u.source.fromUser?o=CM(t,e,u.path,u.children,r,i,s):(N(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=Ep(t,e,u.path,u.children,r,i,a,s))}else if(n.type===fn.ACK_USER_WRITE){const u=n;u.revert?o=IM(t,e,u.path,r,i,s):o=TM(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===fn.LISTEN_COMPLETE)o=SM(t,e,n.path,r,s);else throw lo("Unknown operation type: "+n.type);const l=s.getChanges();return EM(e,o,l),{viewCache:o,changes:l}}function EM(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=yp(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(OS(yp(e)))}}function zS(t,e,n,r,i,s){const o=e.eventCache;if(Ec(r,n)!=null)return e;{let a,l;if(G(n))if(N(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Pi(e),c=u instanceof U?u:U.EMPTY_NODE,h=kg(r,c);a=t.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const u=wc(r,Pi(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=K(n);if(u===".priority"){N(Lr(n)===1,"Can't have a priority with additional path components");const c=o.getNode();l=e.serverCache.getNode();const h=E0(r,n,c,l);h!=null?a=t.filter.updatePriority(c,h):a=o.getNode()}else{const c=ue(n);let h;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const d=E0(r,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(u).updateChild(c,d):h=o.getNode().getImmediateChild(u)}else h=Ng(r,u,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),u,h,c,i,s):a=o.getNode()}}return sa(e,a,o.isFullyInitialized()||G(n),t.filter.filtersNodes())}}function Cc(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(G(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),f,null)}else{const f=K(n);if(!l.isCompleteForPath(n)&&Lr(n)>1)return e;const g=ue(n),E=l.getNode().getImmediateChild(f).updateChild(g,r);f===".priority"?u=c.updatePriority(l.getNode(),E):u=c.updateChild(l.getNode(),f,E,g,jS,null)}const h=LS(e,u,l.isFullyInitialized()||G(n),c.filtersNodes()),d=new Rg(i,h,s);return zS(t,h,n,i,d,a)}function wp(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const c=new Rg(i,e,s);if(G(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=sa(e,u,!0,t.filter.filtersNodes());else{const h=K(n);if(h===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=sa(e,u,a.isFullyInitialized(),a.isFiltered());else{const d=ue(n),f=a.getNode().getImmediateChild(h);let g;if(G(d))g=r;else{const v=c.getCompleteChild(h);v!=null?SS(d)===".priority"&&v.getChild(kS(d)).isEmpty()?g=v:g=v.updateChild(d,r):g=U.EMPTY_NODE}if(f.equals(g))l=e;else{const v=t.filter.updateChild(a.getNode(),h,g,d,c,o);l=sa(e,v,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function C0(t,e){return t.eventCache.isCompleteForChild(e)}function CM(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const c=Pe(n,l);C0(e,K(c))&&(a=wp(t,a,c,u,i,s,o))}),r.foreach((l,u)=>{const c=Pe(n,l);C0(e,K(c))||(a=wp(t,a,c,u,i,s,o))}),a}function T0(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Ep(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;G(n)?u=r:u=new fe(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((h,d)=>{if(c.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),g=T0(t,f,d);l=Cc(t,l,new le(h),g,i,s,o,a)}}),u.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!c.hasChild(h)&&!f){const g=e.serverCache.getNode().getImmediateChild(h),v=T0(t,g,d);l=Cc(t,l,new le(h),v,i,s,o,a)}}),l}function TM(t,e,n,r,i,s,o){if(Ec(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(G(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Cc(t,e,n,l.getNode().getChild(n),i,s,a,o);if(G(n)){let u=new fe(null);return l.getNode().forEachChild(xs,(c,h)=>{u=u.set(new le(c),h)}),Ep(t,e,n,u,i,s,a,o)}else return e}else{let u=new fe(null);return r.foreach((c,h)=>{const d=Pe(n,c);l.isCompleteForPath(d)&&(u=u.set(c,l.getNode().getChild(d)))}),Ep(t,e,n,u,i,s,a,o)}}function SM(t,e,n,r,i){const s=e.serverCache,o=LS(e,s.getNode(),s.isFullyInitialized()||G(n),s.isFiltered());return zS(t,o,n,r,jS,i)}function IM(t,e,n,r,i,s){let o;if(Ec(r,n)!=null)return e;{const a=new Rg(r,e,i),l=e.eventCache.getNode();let u;if(G(n)||K(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=wc(r,Pi(e));else{const h=e.serverCache.getNode();N(h instanceof U,"serverChildren would be complete if leaf node"),c=kg(r,h)}c=c,u=t.filter.updateFullNode(l,c,s)}else{const c=K(n);let h=Ng(r,c,e.serverCache);h==null&&e.serverCache.isCompleteForChild(c)&&(h=l.getImmediateChild(c)),h!=null?u=t.filter.updateChild(l,c,h,ue(n),a,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(l,c,U.EMPTY_NODE,ue(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=wc(r,Pi(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Ec(r,te())!=null,sa(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kM{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Eg(r.getIndex()),s=WD(r);this.processor_=vM(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(U.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(U.EMPTY_NODE,a.getNode(),null),c=new Ai(l,o.isFullyInitialized(),i.filtersNodes()),h=new Ai(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=mh(h,c),this.eventGenerator_=new JD(this.query_)}get query(){return this.query_}}function NM(t){return t.viewCache_.serverCache.getNode()}function RM(t,e){const n=Pi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!G(e)&&!n.getImmediateChild(K(e)).isEmpty())?n.getChild(e):null}function S0(t){return t.eventRegistrations_.length===0}function xM(t,e){t.eventRegistrations_.push(e)}function I0(t,e,n){const r=[];if(n){N(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function k0(t,e,n,r){e.type===fn.MERGE&&e.source.queryId!==null&&(N(Pi(t.viewCache_),"We should always have a full cache before handling merges"),N(yp(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=wM(t.processor_,i,e,n,r);return _M(t.processor_,s.viewCache),N(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,HS(t,s.changes,s.viewCache.eventCache.getNode(),null)}function bM(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Ce,(s,o)=>{r.push(Ws(s,o))}),n.isFullyInitialized()&&r.push(OS(n.getNode())),HS(t,r,n.getNode(),e)}function HS(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return ZD(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tc;class AM{constructor(){this.views=new Map}}function PM(t){N(!Tc,"__referenceConstructor has already been defined"),Tc=t}function OM(){return N(Tc,"Reference.ts has not been loaded"),Tc}function DM(t){return t.views.size===0}function xg(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return N(s!=null,"SyncTree gave us an op for an invalid query."),k0(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(k0(o,e,n,r));return s}}function MM(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=wc(n,i?r:null),l=!1;a?l=!0:r instanceof U?(a=kg(n,r),l=!1):(a=U.EMPTY_NODE,l=!1);const u=mh(new Ai(a,l,!1),new Ai(r,i,!1));return new kM(e,u)}return o}function LM(t,e,n,r,i,s){const o=MM(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),xM(o,n),bM(o,n)}function FM(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Fr(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(I0(u,n,r)),S0(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(I0(l,n,r)),S0(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Fr(t)&&s.push(new(OM())(e._repo,e._path)),{removed:s,events:o}}function WS(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function bs(t,e){let n=null;for(const r of t.views.values())n=n||RM(r,e);return n}function qS(t,e){if(e._queryParams.loadsAllData())return gh(t);{const r=e._queryIdentifier;return t.views.get(r)}}function KS(t,e){return qS(t,e)!=null}function Fr(t){return gh(t)!=null}function gh(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sc;function $M(t){N(!Sc,"__referenceConstructor has already been defined"),Sc=t}function UM(){return N(Sc,"Reference.ts has not been loaded"),Sc}let VM=1;class N0{constructor(e){this.listenProvider_=e,this.syncPointTree_=new fe(null),this.pendingWriteTree_=pM(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function BM(t,e,n,r,i){return rM(t.pendingWriteTree_,e,n,r,i),i?gl(t,new bi(MS(),e,n)):[]}function ys(t,e,n=!1){const r=iM(t.pendingWriteTree_,e);if(sM(t.pendingWriteTree_,e)){let s=new fe(null);return r.snap!=null?s=s.set(te(),!0):Lt(r.children,o=>{s=s.set(new le(o),!0)}),gl(t,new _c(r.path,s,n))}else return[]}function yh(t,e,n){return gl(t,new bi(Tg(),e,n))}function jM(t,e,n){const r=fe.fromObject(n);return gl(t,new Va(Tg(),e,r))}function zM(t,e){return gl(t,new Ua(Tg(),e))}function HM(t,e,n){const r=bg(t,n);if(r){const i=Ag(r),s=i.path,o=i.queryId,a=bt(s,e),l=new Ua(Sg(o),a);return Pg(t,s,l)}else return[]}function Cp(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||KS(o,e))){const l=FM(o,e,n,r);DM(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const c=u.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(s,(d,f)=>Fr(f));if(c&&!h){const d=t.syncPointTree_.subtree(s);if(!d.isEmpty()){const f=KM(d);for(let g=0;g<f.length;++g){const v=f[g],E=v.query,m=XS(t,v);t.listenProvider_.startListening(aa(E),Ic(t,E),m.hashFn,m.onComplete)}}}!h&&u.length>0&&!r&&(c?t.listenProvider_.stopListening(aa(e),null):u.forEach(d=>{const f=t.queryToTagMap.get(vh(d));t.listenProvider_.stopListening(aa(d),f)}))}GM(t,u)}return a}function WM(t,e,n,r){const i=bg(t,r);if(i!=null){const s=Ag(i),o=s.path,a=s.queryId,l=bt(o,e),u=new bi(Sg(a),l,n);return Pg(t,o,u)}else return[]}function qM(t,e,n,r){const i=bg(t,r);if(i){const s=Ag(i),o=s.path,a=s.queryId,l=bt(o,e),u=fe.fromObject(n),c=new Va(Sg(a),l,u);return Pg(t,o,c)}else return[]}function R0(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,f)=>{const g=bt(d,i);s=s||bs(f,g),o=o||Fr(f)});let a=t.syncPointTree_.get(i);a?(o=o||Fr(a),s=s||bs(a,te())):(a=new AM,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=U.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((f,g)=>{const v=bs(g,te());v&&(s=s.updateImmediateChild(f,v))}));const u=KS(a,e);if(!u&&!e._queryParams.loadsAllData()){const d=vh(e);N(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const f=QM();t.queryToTagMap.set(d,f),t.tagToQueryMap.set(f,d)}const c=Ig(t.pendingWriteTree_,i);let h=LM(a,e,n,c,s,l);if(!u&&!o&&!r){const d=qS(a,e);h=h.concat(YM(t,e,d))}return h}function GS(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=bt(o,e),u=bs(a,l);if(u)return u});return US(i,e,s,n,!0)}function gl(t,e){return QS(e,t.syncPointTree_,null,Ig(t.pendingWriteTree_,te()))}function QS(t,e,n,r){if(G(t.path))return YS(t,e,n,r);{const i=e.get(te());n==null&&i!=null&&(n=bs(i,te()));let s=[];const o=K(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,c=VS(r,o);s=s.concat(QS(a,l,u,c))}return i&&(s=s.concat(xg(i,t,r,n))),s}}function YS(t,e,n,r){const i=e.get(te());n==null&&i!=null&&(n=bs(i,te()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=VS(r,o),c=t.operationForChild(o);c&&(s=s.concat(YS(c,a,l,u)))}),i&&(s=s.concat(xg(i,t,r,n))),s}function XS(t,e){const n=e.query,r=Ic(t,n);return{hashFn:()=>(NM(e)||U.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?HM(t,n._path,r):zM(t,n._path);{const s=zO(i,n);return Cp(t,n,null,s)}}}}function Ic(t,e){const n=vh(e);return t.queryToTagMap.get(n)}function vh(t){return t._path.toString()+"$"+t._queryIdentifier}function bg(t,e){return t.tagToQueryMap.get(e)}function Ag(t){const e=t.indexOf("$");return N(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new le(t.substr(0,e))}}function Pg(t,e,n){const r=t.syncPointTree_.get(e);N(r,"Missing sync point for query tag that we're tracking");const i=Ig(t.pendingWriteTree_,e);return xg(r,n,i,null)}function KM(t){return t.fold((e,n,r)=>{if(n&&Fr(n))return[gh(n)];{let i=[];return n&&(i=WS(n)),Lt(r,(s,o)=>{i=i.concat(o)}),i}})}function aa(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(UM())(t._repo,t._path):t}function GM(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=vh(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function QM(){return VM++}function YM(t,e,n){const r=e._path,i=Ic(t,e),s=XS(t,n),o=t.listenProvider_.startListening(aa(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)N(!Fr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,c,h)=>{if(!G(u)&&c&&Fr(c))return[gh(c).query];{let d=[];return c&&(d=d.concat(WS(c).map(f=>f.query))),Lt(h,(f,g)=>{d=d.concat(g)}),d}});for(let u=0;u<l.length;++u){const c=l[u];t.listenProvider_.stopListening(aa(c),Ic(t,c))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Og(n)}node(){return this.node_}}class Dg{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Pe(this.path_,e);return new Dg(this.syncTree_,n)}node(){return GS(this.syncTree_,this.path_)}}const XM=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},x0=function(t,e,n){if(!t||typeof t!="object")return t;if(N(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return JM(t[".sv"],e,n);if(typeof t[".sv"]=="object")return ZM(t[".sv"],e);N(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},JM=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:N(!1,"Unexpected server value: "+t)}},ZM=function(t,e,n){t.hasOwnProperty("increment")||N(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&N(!1,"Unexpected increment value: "+r);const i=e.node();if(N(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},eL=function(t,e,n,r){return Mg(e,new Dg(n,t),r)},tL=function(t,e,n){return Mg(t,new Og(e),n)};function Mg(t,e,n){const r=t.getPriority().val(),i=x0(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=x0(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new je(a,ut(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new je(i))),o.forEachChild(Ce,(a,l)=>{const u=Mg(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Fg(t,e){let n=e instanceof le?e:new le(e),r=t,i=K(n);for(;i!==null;){const s=js(r.node.children,i)||{children:{},childCount:0};r=new Lg(i,r,s),n=ue(n),i=K(n)}return r}function fo(t){return t.node.value}function JS(t,e){t.node.value=e,Tp(t)}function ZS(t){return t.node.childCount>0}function nL(t){return fo(t)===void 0&&!ZS(t)}function _h(t,e){Lt(t.node.children,(n,r)=>{e(new Lg(n,t,r))})}function e1(t,e,n,r){n&&!r&&e(t),_h(t,i=>{e1(i,e,!0,r)}),n&&r&&e(t)}function rL(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function yl(t){return new le(t.parent===null?t.name:yl(t.parent)+"/"+t.name)}function Tp(t){t.parent!==null&&iL(t.parent,t.name,t)}function iL(t,e,n){const r=nL(n),i=ar(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Tp(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Tp(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sL=/[\[\].#$\/\u0000-\u001F\u007F]/,oL=/[\[\].#$\u0000-\u001F\u007F]/,Fd=10*1024*1024,t1=function(t){return typeof t=="string"&&t.length!==0&&!sL.test(t)},n1=function(t){return typeof t=="string"&&t.length!==0&&!oL.test(t)},aL=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),n1(t)},r1=function(t,e,n){const r=n instanceof le?new TD(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+ei(r));if(typeof e=="function")throw new Error(t+"contains a function "+ei(r)+" with contents = "+e.toString());if(iS(e))throw new Error(t+"contains "+e.toString()+" "+ei(r));if(typeof e=="string"&&e.length>Fd/3&&uh(e)>Fd)throw new Error(t+"contains a string greater than "+Fd+" utf8 bytes "+ei(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Lt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!t1(o)))throw new Error(t+" contains an invalid key ("+o+") "+ei(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);SD(r,o),r1(t,a,r),ID(r)}),i&&s)throw new Error(t+' contains ".value" child '+ei(r)+" in addition to actual children.")}},i1=function(t,e,n,r){if(!(r&&n===void 0)&&!n1(n))throw new Error(_T(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},lL=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),i1(t,e,n,r)},uL=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!t1(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!aL(n))throw new Error(_T(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cL{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function s1(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!vg(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function o1(t,e,n){s1(t,n),a1(t,r=>vg(r,e))}function zi(t,e,n){s1(t,n),a1(t,r=>dn(r,e)||dn(e,r))}function a1(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(hL(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function hL(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();mi&&lt("event: "+n.toString()),pl(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dL="repo_interrupt",fL=25;class pL{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new cL,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=vc(),this.transactionQueueTree_=new Lg,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function mL(t,e,n){if(t.stats_=gg(t.repoInfo_),t.forceRestClient_||KO())t.server_=new yc(t.repoInfo_,(r,i,s,o)=>{b0(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>A0(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{qe(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Kn(t.repoInfo_,e,(r,i,s,o)=>{b0(t,r,i,s,o)},r=>{A0(t,r)},r=>{yL(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=ZO(t.repoInfo_,()=>new XD(t.stats_,t.server_)),t.infoData_=new qD,t.infoSyncTree_=new N0({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=yh(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),$g(t,"connected",!1),t.serverSyncTree_=new N0({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);zi(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function gL(t){const n=t.infoData_.getNode(new le(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function l1(t){return XM({timestamp:gL(t)})}function b0(t,e,n,r,i){t.dataUpdateCount++;const s=new le(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=lc(n,u=>ut(u));o=qM(t.serverSyncTree_,s,l,i)}else{const l=ut(n);o=WM(t.serverSyncTree_,s,l,i)}else if(r){const l=lc(n,u=>ut(u));o=jM(t.serverSyncTree_,s,l)}else{const l=ut(n);o=yh(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Vg(t,s)),zi(t.eventQueue_,a,o)}function A0(t,e){$g(t,"connected",e),e===!1&&_L(t)}function yL(t,e){Lt(e,(n,r)=>{$g(t,n,r)})}function $g(t,e,n){const r=new le("/.info/"+e),i=ut(n);t.infoData_.updateSnapshot(r,i);const s=yh(t.infoSyncTree_,r,i);zi(t.eventQueue_,r,s)}function vL(t){return t.nextWriteId_++}function _L(t){u1(t,"onDisconnectEvents");const e=l1(t),n=vc();gp(t.onDisconnect_,te(),(i,s)=>{const o=eL(i,s,t.serverSyncTree_,e);DS(n,i,o)});let r=[];gp(n,te(),(i,s)=>{r=r.concat(yh(t.serverSyncTree_,i,s));const o=SL(t,i);Vg(t,o)}),t.onDisconnect_=vc(),zi(t.eventQueue_,te(),r)}function wL(t,e,n){let r;K(e._path)===".info"?r=R0(t.infoSyncTree_,e,n):r=R0(t.serverSyncTree_,e,n),o1(t.eventQueue_,e._path,r)}function P0(t,e,n){let r;K(e._path)===".info"?r=Cp(t.infoSyncTree_,e,n):r=Cp(t.serverSyncTree_,e,n),o1(t.eventQueue_,e._path,r)}function EL(t){t.persistentConnection_&&t.persistentConnection_.interrupt(dL)}function u1(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),lt(n,...e)}function c1(t,e,n){return GS(t.serverSyncTree_,e,n)||U.EMPTY_NODE}function Ug(t,e=t.transactionQueueTree_){if(e||wh(t,e),fo(e)){const n=d1(t,e);N(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&CL(t,yl(e),n)}else ZS(e)&&_h(e,n=>{Ug(t,n)})}function CL(t,e,n){const r=n.map(u=>u.currentWriteId),i=c1(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];N(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const h=bt(e,c.path);s=s.updateChild(h,c.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{u1(t,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,c=c.concat(ys(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();wh(t,Fg(t.transactionQueueTree_,e)),Ug(t,t.transactionQueueTree_),zi(t.eventQueue_,e,c);for(let d=0;d<h.length;d++)pl(h[d])}else{if(u==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Vt("transaction at "+l.toString()+" failed: "+u);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=u}Vg(t,e)}},o)}function Vg(t,e){const n=h1(t,e),r=yl(n),i=d1(t,n);return TL(t,i,r),r}function TL(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=bt(n,l.path);let c=!1,h;if(N(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,h=l.abortReason,i=i.concat(ys(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=fL)c=!0,h="maxretry",i=i.concat(ys(t.serverSyncTree_,l.currentWriteId,!0));else{const d=c1(t,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){r1("transaction failed: Data returned ",f,l.path);let g=ut(f);typeof f=="object"&&f!=null&&ar(f,".priority")||(g=g.updatePriority(d.getPriority()));const E=l.currentWriteId,m=l1(t),p=tL(g,d,m);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=p,l.currentWriteId=vL(t),o.splice(o.indexOf(E),1),i=i.concat(BM(t.serverSyncTree_,l.path,p,l.currentWriteId,l.applyLocally)),i=i.concat(ys(t.serverSyncTree_,E,!0))}else c=!0,h="nodata",i=i.concat(ys(t.serverSyncTree_,l.currentWriteId,!0))}zi(t.eventQueue_,n,i),i=[],c&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(h),!1,null))))}wh(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)pl(r[a]);Ug(t,t.transactionQueueTree_)}function h1(t,e){let n,r=t.transactionQueueTree_;for(n=K(e);n!==null&&fo(r)===void 0;)r=Fg(r,n),e=ue(e),n=K(e);return r}function d1(t,e){const n=[];return f1(t,e,n),n.sort((r,i)=>r.order-i.order),n}function f1(t,e,n){const r=fo(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);_h(e,i=>{f1(t,i,n)})}function wh(t,e){const n=fo(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,JS(e,n.length>0?n:void 0)}_h(e,r=>{wh(t,r)})}function SL(t,e){const n=yl(h1(t,e)),r=Fg(t.transactionQueueTree_,e);return rL(r,i=>{$d(t,i)}),$d(t,r),e1(r,i=>{$d(t,i)}),n}function $d(t,e){const n=fo(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(N(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(N(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(ys(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?JS(e,void 0):n.length=s+1,zi(t.eventQueue_,yl(e),i);for(let o=0;o<r.length;o++)pl(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IL(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function kL(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Vt(`Invalid query segment '${n}' in query '${t}'`)}return e}const O0=function(t,e){const n=NL(t),r=n.namespace;n.domain==="firebase.com"&&Ri(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Ri("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||$O();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new YO(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new le(n.pathString)}},NL=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(c,h)),c<h&&(i=IL(t.substring(c,h)));const d=kL(t.substring(Math.min(t.length,h)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const f=e.slice(0,u);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const g=e.indexOf(".");r=e.substring(0,g).toLowerCase(),n=e.substring(g+1),s=r}"ns"in d&&(s=d.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p1{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+qe(this.snapshot.exportVal())}}class m1{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RL{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return N(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return G(this._path)?null:SS(this._path)}get ref(){return new lr(this._repo,this._path)}get _queryIdentifier(){const e=g0(this._queryParams),n=pg(e);return n==="{}"?"default":n}get _queryObject(){return g0(this._queryParams)}isEqual(e){if(e=Ie(e),!(e instanceof Bg))return!1;const n=this._repo===e._repo,r=vg(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+CD(this._path)}}class lr extends Bg{constructor(e,n){super(e,n,new Cg,!1)}get parent(){const e=kS(this._path);return e===null?null:new lr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ba{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new le(e),r=Sp(this.ref,e);return new Ba(this._node.getChild(n),r,Ce)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Ba(i,Sp(this.ref,r),Ce)))}hasChild(e){const n=new le(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Sp(t,e){return t=Ie(t),K(t._path)===null?lL("child","path",e,!1):i1("child","path",e,!1),new lr(t._repo,Pe(t._path,e))}class jg{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new p1("value",this,new Ba(e.snapshotNode,new lr(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new m1(this,e,n):null}matches(e){return e instanceof jg?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class zg{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new m1(this,e,n):null}createEvent(e,n){N(e.childName!=null,"Child events should have a childName.");const r=Sp(new lr(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new p1(e.type,this,new Ba(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof zg?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function vl(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,u=(c,h)=>{P0(t._repo,t,a),l(c,h)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new RL(n,s||void 0),a=e==="value"?new jg(o):new zg(e,o);return wL(t._repo,t,a),()=>P0(t._repo,t,a)}function xL(t,e,n,r){return vl(t,"value",e,n,r)}function bL(t,e,n,r){return vl(t,"child_added",e,n,r)}function AL(t,e,n,r){return vl(t,"child_changed",e,n,r)}function PL(t,e,n,r){return vl(t,"child_moved",e,n,r)}function OL(t,e,n,r){return vl(t,"child_removed",e,n,r)}PM(lr);$M(lr);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DL="FIREBASE_DATABASE_EMULATOR_HOST",Ip={};let ML=!1;function LL(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Ri("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),lt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=O0(s,i),a=o.repoInfo,l,u;typeof process<"u"&&process.env&&(u=process.env[DL]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=O0(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const c=i&&l?new fp(fp.OWNER):new QO(t.name,t.options,e);uL("Invalid Firebase Database URL",o),G(o.path)||Ri("Database URL must point to the root of a Firebase Database (not including a child path).");const h=$L(a,t,c,new GO(t.name,n));return new UL(h,t)}function FL(t,e){const n=Ip[e];(!n||n[t.key]!==t)&&Ri(`Database ${e}(${t.repoInfo_}) has already been deleted.`),EL(t),delete n[t.key]}function $L(t,e,n,r){let i=Ip[e.name];i||(i={},Ip[e.name]=i);let s=i[t.toURLString()];return s&&Ri("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new pL(t,ML,n,r),i[t.toURLString()]=s,s}class UL{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(mL(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new lr(this._repo,te())),this._rootInternal}_delete(){return this._rootInternal!==null&&(FL(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ri("Cannot call "+e+" on a deleted database.")}}function VL(t=ig(),e){return co(t,"database").getImmediate({identifier:e})}/**
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
 */function BL(t){OO(Wr),rn(new zt("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return LL(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),xe(Z_,e0,t),xe(Z_,e0,"esm2017")}Kn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Kn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};BL();var jL="firebase",zL="9.9.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xe(jL,zL,"app");var HL=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},O,Hg=Hg||{},V=HL||self;function kc(){}function kp(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function _l(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function WL(t){return Object.prototype.hasOwnProperty.call(t,Ud)&&t[Ud]||(t[Ud]=++qL)}var Ud="closure_uid_"+(1e9*Math.random()>>>0),qL=0;function KL(t,e,n){return t.call.apply(t.bind,arguments)}function GL(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function et(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?et=KL:et=GL,et.apply(null,arguments)}function iu(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function it(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function qr(){this.s=this.s,this.o=this.o}var QL=0;qr.prototype.s=!1;qr.prototype.na=function(){!this.s&&(this.s=!0,this.M(),QL!=0)&&WL(this)};qr.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const g1=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},y1=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i=typeof t=="string"?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function YL(t){e:{var e=BF;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function D0(t){return Array.prototype.concat.apply([],arguments)}function Wg(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Nc(t){return/^[\s\xa0]*$/.test(t)}var M0=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function pt(t,e){return t.indexOf(e)!=-1}function Vd(t,e){return t<e?-1:t>e?1:0}var mt;e:{var L0=V.navigator;if(L0){var F0=L0.userAgent;if(F0){mt=F0;break e}}mt=""}function qg(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function v1(t){const e={};for(const n in t)e[n]=t[n];return e}var $0="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _1(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<$0.length;s++)n=$0[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Kg(t){return Kg[" "](t),t}Kg[" "]=kc;function XL(t){var e=eF;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var JL=pt(mt,"Opera"),Ks=pt(mt,"Trident")||pt(mt,"MSIE"),w1=pt(mt,"Edge"),Np=w1||Ks,E1=pt(mt,"Gecko")&&!(pt(mt.toLowerCase(),"webkit")&&!pt(mt,"Edge"))&&!(pt(mt,"Trident")||pt(mt,"MSIE"))&&!pt(mt,"Edge"),ZL=pt(mt.toLowerCase(),"webkit")&&!pt(mt,"Edge");function C1(){var t=V.document;return t?t.documentMode:void 0}var Rc;e:{var Bd="",jd=function(){var t=mt;if(E1)return/rv:([^\);]+)(\)|;)/.exec(t);if(w1)return/Edge\/([\d\.]+)/.exec(t);if(Ks)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(ZL)return/WebKit\/(\S+)/.exec(t);if(JL)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(jd&&(Bd=jd?jd[1]:""),Ks){var zd=C1();if(zd!=null&&zd>parseFloat(Bd)){Rc=String(zd);break e}}Rc=Bd}var eF={};function tF(){return XL(function(){let t=0;const e=M0(String(Rc)).split("."),n=M0("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Vd(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Vd(i[2].length==0,s[2].length==0)||Vd(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var Rp;if(V.document&&Ks){var U0=C1();Rp=U0||parseInt(Rc,10)||void 0}else Rp=void 0;var nF=Rp,rF=function(){if(!V.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{V.addEventListener("test",kc,e),V.removeEventListener("test",kc,e)}catch{}return t}();function ht(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ht.prototype.h=function(){this.defaultPrevented=!0};function ja(t,e){if(ht.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(E1){e:{try{Kg(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:iF[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ja.Z.h.call(this)}}it(ja,ht);var iF={2:"touch",3:"pen",4:"mouse"};ja.prototype.h=function(){ja.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var wl="closure_listenable_"+(1e6*Math.random()|0),sF=0;function oF(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++sF,this.ca=this.fa=!1}function Eh(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Ch(t){this.src=t,this.g={},this.h=0}Ch.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=bp(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new oF(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};function xp(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=g1(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Eh(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function bp(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}var Gg="closure_lm_"+(1e6*Math.random()|0),Hd={};function T1(t,e,n,r,i){if(r&&r.once)return I1(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)T1(t,e[s],n,r,i);return null}return n=Xg(n),t&&t[wl]?t.N(e,n,_l(r)?!!r.capture:!!r,i):S1(t,e,n,!1,r,i)}function S1(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=_l(i)?!!i.capture:!!i,a=Yg(t);if(a||(t[Gg]=a=new Ch(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=aF(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)rF||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(N1(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function aF(){function t(n){return e.call(t.src,t.listener,n)}var e=lF;return t}function I1(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)I1(t,e[s],n,r,i);return null}return n=Xg(n),t&&t[wl]?t.O(e,n,_l(r)?!!r.capture:!!r,i):S1(t,e,n,!0,r,i)}function k1(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)k1(t,e[s],n,r,i);else r=_l(r)?!!r.capture:!!r,n=Xg(n),t&&t[wl]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=bp(s,n,r,i),-1<n&&(Eh(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Yg(t))&&(e=t.g[e.toString()],t=-1,e&&(t=bp(e,n,r,i)),(n=-1<t?e[t]:null)&&Qg(n))}function Qg(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[wl])xp(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(N1(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Yg(e))?(xp(n,t),n.h==0&&(n.src=null,e[Gg]=null)):Eh(t)}}}function N1(t){return t in Hd?Hd[t]:Hd[t]="on"+t}function lF(t,e){if(t.ca)t=!0;else{e=new ja(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&Qg(t),t=n.call(r,e)}return t}function Yg(t){return t=t[Gg],t instanceof Ch?t:null}var Wd="__closure_events_fn_"+(1e9*Math.random()>>>0);function Xg(t){return typeof t=="function"?t:(t[Wd]||(t[Wd]=function(e){return t.handleEvent(e)}),t[Wd])}function Qe(){qr.call(this),this.i=new Ch(this),this.P=this,this.I=null}it(Qe,qr);Qe.prototype[wl]=!0;Qe.prototype.removeEventListener=function(t,e,n,r){k1(this,t,e,n,r)};function tt(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new ht(e,t);else if(e instanceof ht)e.target=e.target||t;else{var i=e;e=new ht(r,t),_1(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=su(o,r,!0,e)&&i}if(o=e.g=t,i=su(o,r,!0,e)&&i,i=su(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=su(o,r,!1,e)&&i}Qe.prototype.M=function(){if(Qe.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Eh(n[r]);delete t.g[e],t.h--}}this.I=null};Qe.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Qe.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function su(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,l=o.ia||o.src;o.fa&&xp(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Jg=V.JSON.stringify;function uF(){var t=x1;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class cF{constructor(){this.h=this.g=null}add(e,n){const r=R1.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var R1=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new hF,t=>t.reset());class hF{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function dF(t){V.setTimeout(()=>{throw t},0)}function Zg(t,e){Ap||fF(),Pp||(Ap(),Pp=!0),x1.add(t,e)}var Ap;function fF(){var t=V.Promise.resolve(void 0);Ap=function(){t.then(pF)}}var Pp=!1,x1=new cF;function pF(){for(var t;t=uF();){try{t.h.call(t.g)}catch(n){dF(n)}var e=R1;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Pp=!1}function Th(t,e){Qe.call(this),this.h=t||1,this.g=e||V,this.j=et(this.kb,this),this.l=Date.now()}it(Th,Qe);O=Th.prototype;O.da=!1;O.S=null;O.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),tt(this,"tick"),this.da&&(ey(this),this.start()))}};O.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ey(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}O.M=function(){Th.Z.M.call(this),ey(this),delete this.g};function ty(t,e,n){if(typeof t=="function")n&&(t=et(t,n));else if(t&&typeof t.handleEvent=="function")t=et(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:V.setTimeout(t,e||0)}function b1(t){t.g=ty(()=>{t.g=null,t.i&&(t.i=!1,b1(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class mF extends qr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:b1(this)}M(){super.M(),this.g&&(V.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function za(t){qr.call(this),this.h=t,this.g={}}it(za,qr);var V0=[];function A1(t,e,n,r){Array.isArray(n)||(n&&(V0[0]=n.toString()),n=V0);for(var i=0;i<n.length;i++){var s=T1(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function P1(t){qg(t.g,function(e,n){this.g.hasOwnProperty(n)&&Qg(e)},t),t.g={}}za.prototype.M=function(){za.Z.M.call(this),P1(this)};za.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Sh(){this.g=!0}Sh.prototype.Aa=function(){this.g=!1};function gF(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function yF(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function vs(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+_F(t,n)+(r?" "+r:"")})}function vF(t,e){t.info(function(){return"TIMEOUT: "+e})}Sh.prototype.info=function(){};function _F(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Jg(n)}catch{return e}}var Hi={},B0=null;function Ih(){return B0=B0||new Qe}Hi.Ma="serverreachability";function O1(t){ht.call(this,Hi.Ma,t)}it(O1,ht);function Ha(t){const e=Ih();tt(e,new O1(e))}Hi.STAT_EVENT="statevent";function D1(t,e){ht.call(this,Hi.STAT_EVENT,t),this.stat=e}it(D1,ht);function gt(t){const e=Ih();tt(e,new D1(e,t))}Hi.Na="timingevent";function M1(t,e){ht.call(this,Hi.Na,t),this.size=e}it(M1,ht);function El(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return V.setTimeout(function(){t()},e)}var kh={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},L1={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ny(){}ny.prototype.h=null;function j0(t){return t.h||(t.h=t.i())}function F1(){}var Cl={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function ry(){ht.call(this,"d")}it(ry,ht);function iy(){ht.call(this,"c")}it(iy,ht);var Op;function Nh(){}it(Nh,ny);Nh.prototype.g=function(){return new XMLHttpRequest};Nh.prototype.i=function(){return{}};Op=new Nh;function Tl(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new za(this),this.P=wF,t=Np?125:void 0,this.W=new Th(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new $1}function $1(){this.i=null,this.g="",this.h=!1}var wF=45e3,Dp={},xc={};O=Tl.prototype;O.setTimeout=function(t){this.P=t};function Mp(t,e,n){t.K=1,t.v=xh(tr(e)),t.s=n,t.U=!0,U1(t,null)}function U1(t,e){t.F=Date.now(),Sl(t),t.A=tr(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),q1(n.h,"t",r),t.C=0,n=t.l.H,t.h=new $1,t.g=dI(t.l,n?e:null,!t.s),0<t.O&&(t.L=new mF(et(t.Ia,t,t.g),t.O)),A1(t.V,t.g,"readystatechange",t.gb),e=t.H?v1(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Ha(),gF(t.j,t.u,t.A,t.m,t.X,t.s)}O.gb=function(t){t=t.target;const e=this.L;e&&zn(t)==3?e.l():this.Ia(t)};O.Ia=function(t){try{if(t==this.g)e:{const c=zn(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>c)&&(c!=3||Np||this.g&&(this.h.h||this.g.ga()||q0(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?Ha(3):Ha(2)),Rh(this);var n=this.g.ba();this.N=n;t:if(V1(this)){var r=q0(this.g);t="";var i=r.length,s=zn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){li(this),la(this);var o="";break t}this.h.i=new V.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,yF(this.j,this.u,this.A,this.m,this.X,c,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Nc(a)){var u=a;break t}}u=null}if(n=u)vs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Lp(this,n);else{this.i=!1,this.o=3,gt(12),li(this),la(this);break e}}this.U?(B1(this,c,o),Np&&this.i&&c==3&&(A1(this.V,this.W,"tick",this.fb),this.W.start())):(vs(this.j,this.m,o,null),Lp(this,o)),c==4&&li(this),this.i&&!this.I&&(c==4?lI(this.l,this):(this.i=!1,Sl(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,gt(12)):(this.o=0,gt(13)),li(this),la(this)}}}catch{}finally{}};function V1(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function B1(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=EF(t,n),i==xc){e==4&&(t.o=4,gt(14),r=!1),vs(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Dp){t.o=4,gt(15),vs(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else vs(t.j,t.m,i,null),Lp(t,i);V1(t)&&i!=xc&&i!=Dp&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,gt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),fy(e),e.L=!0,gt(11))):(vs(t.j,t.m,n,"[Invalid Chunked Response]"),li(t),la(t))}O.fb=function(){if(this.g){var t=zn(this.g),e=this.g.ga();this.C<e.length&&(Rh(this),B1(this,t,e),this.i&&t!=4&&Sl(this))}};function EF(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?xc:(n=Number(e.substring(n,r)),isNaN(n)?Dp:(r+=1,r+n>e.length?xc:(e=e.substr(r,n),t.C=r+n,e)))}O.cancel=function(){this.I=!0,li(this)};function Sl(t){t.Y=Date.now()+t.P,j1(t,t.P)}function j1(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=El(et(t.eb,t),e)}function Rh(t){t.B&&(V.clearTimeout(t.B),t.B=null)}O.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(vF(this.j,this.A),this.K!=2&&(Ha(),gt(17)),li(this),this.o=2,la(this)):j1(this,this.Y-t)};function la(t){t.l.G==0||t.I||lI(t.l,t)}function li(t){Rh(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,ey(t.W),P1(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Lp(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Fp(n.i,t))){if(n.I=t.N,!t.J&&Fp(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Oc(n),Ph(n);else break e;dy(n),gt(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=El(et(n.ab,n),6e3));if(1>=Q1(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else ui(n,11)}else if((t.J||n.g==t)&&Oc(n),!Nc(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.U=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.J=u[1],n.la=u[2];const c=u[3];c!=null&&(n.ma=c,n.h.info("VER="+n.ma));const h=u[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const g=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var s=r.i;!s.g&&(pt(g,"spdy")||pt(g,"quic")||pt(g,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(ay(s,s.h),s.h=null))}if(r.D){const v=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.sa=v,ge(r.F,r.D,v))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=hI(r,r.H?r.la:null,r.W),o.J){Y1(r.i,o);var a=o,l=r.K;l&&a.setTimeout(l),a.B&&(Rh(a),Sl(a)),r.g=o}else oI(r);0<n.l.length&&Oh(n)}else u[0]!="stop"&&u[0]!="close"||ui(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?ui(n,7):hy(n):u[0]!="noop"&&n.j&&n.j.wa(u),n.A=0)}}Ha(4)}catch{}}function CF(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(kp(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function sy(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(kp(t)||typeof t=="string")y1(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(kp(t)||typeof t=="string"){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=CF(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function po(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof po)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}O=po.prototype;O.R=function(){oy(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};O.T=function(){return oy(this),this.g.concat()};function oy(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];Oi(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],Oi(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}O.get=function(t,e){return Oi(this.h,t)?this.h[t]:e};O.set=function(t,e){Oi(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};O.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};function Oi(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var z1=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function TF(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Di(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Di){this.g=e!==void 0?e:t.g,bc(this,t.j),this.s=t.s,Ac(this,t.i),Pc(this,t.m),this.l=t.l,e=t.h;var n=new Wa;n.i=e.i,e.g&&(n.g=new po(e.g),n.h=e.h),z0(this,n),this.o=t.o}else t&&(n=String(t).match(z1))?(this.g=!!e,bc(this,n[1]||"",!0),this.s=ua(n[2]||""),Ac(this,n[3]||"",!0),Pc(this,n[4]),this.l=ua(n[5]||"",!0),z0(this,n[6]||"",!0),this.o=ua(n[7]||"")):(this.g=!!e,this.h=new Wa(null,this.g))}Di.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ho(e,H0,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ho(e,H0,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(Ho(n,n.charAt(0)=="/"?RF:NF,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ho(n,bF)),t.join("")};function tr(t){return new Di(t)}function bc(t,e,n){t.j=n?ua(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ac(t,e,n){t.i=n?ua(e,!0):e}function Pc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function z0(t,e,n){e instanceof Wa?(t.h=e,AF(t.h,t.g)):(n||(e=Ho(e,xF)),t.h=new Wa(e,t.g))}function ge(t,e,n){t.h.set(e,n)}function xh(t){return ge(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function SF(t){return t instanceof Di?tr(t):new Di(t,void 0)}function IF(t,e,n,r){var i=new Di(null,void 0);return t&&bc(i,t),e&&Ac(i,e),n&&Pc(i,n),r&&(i.l=r),i}function ua(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ho(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,kF),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function kF(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var H0=/[#\/\?@]/g,NF=/[#\?:]/g,RF=/[#\?]/g,xF=/[#\?@]/g,bF=/#/g;function Wa(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Kr(t){t.g||(t.g=new po,t.h=0,t.i&&TF(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}O=Wa.prototype;O.add=function(t,e){Kr(this),this.i=null,t=mo(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function H1(t,e){Kr(t),e=mo(t,e),Oi(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Oi(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&oy(t)))}function W1(t,e){return Kr(t),e=mo(t,e),Oi(t.g.h,e)}O.forEach=function(t,e){Kr(this),this.g.forEach(function(n,r){y1(n,function(i){t.call(e,i,r,this)},this)},this)};O.T=function(){Kr(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n};O.R=function(t){Kr(this);var e=[];if(typeof t=="string")W1(this,t)&&(e=D0(e,this.g.get(mo(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=D0(e,t[n])}return e};O.set=function(t,e){return Kr(this),this.i=null,t=mo(this,t),W1(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};O.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function q1(t,e,n){H1(t,e),0<n.length&&(t.i=null,t.g.set(mo(t,e),Wg(n)),t.h+=n.length)}O.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;r[s]!==""&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};function mo(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function AF(t,e){e&&!t.j&&(Kr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(H1(this,r),q1(this,i,n))},t)),t.j=e}var PF=class{constructor(t,e){this.h=t,this.g=e}};function K1(t){this.l=t||OF,V.PerformanceNavigationTiming?(t=V.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(V.g&&V.g.Ea&&V.g.Ea()&&V.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var OF=10;function G1(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Q1(t){return t.h?1:t.g?t.g.size:0}function Fp(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function ay(t,e){t.g?t.g.add(e):t.h=e}function Y1(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}K1.prototype.cancel=function(){if(this.i=X1(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function X1(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Wg(t.i)}function ly(){}ly.prototype.stringify=function(t){return V.JSON.stringify(t,void 0)};ly.prototype.parse=function(t){return V.JSON.parse(t,void 0)};function DF(){this.g=new ly}function MF(t,e,n){const r=n||"";try{sy(t,function(i,s){let o=i;_l(i)&&(o=Jg(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function LF(t,e){const n=new Sh;if(V.Image){const r=new Image;r.onload=iu(ou,n,r,"TestLoadImage: loaded",!0,e),r.onerror=iu(ou,n,r,"TestLoadImage: error",!1,e),r.onabort=iu(ou,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=iu(ou,n,r,"TestLoadImage: timeout",!1,e),V.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function ou(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Il(t){this.l=t.$b||null,this.j=t.ib||!1}it(Il,ny);Il.prototype.g=function(){return new bh(this.l,this.j)};Il.prototype.i=function(t){return function(){return t}}({});function bh(t,e){Qe.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=uy,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}it(bh,Qe);var uy=0;O=bh.prototype;O.open=function(t,e){if(this.readyState!=uy)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,qa(this)};O.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||V).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};O.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,kl(this)),this.readyState=uy};O.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,qa(this)),this.g&&(this.readyState=3,qa(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof V.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;J1(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function J1(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}O.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?kl(this):qa(this),this.readyState==3&&J1(this)}};O.Ua=function(t){this.g&&(this.response=this.responseText=t,kl(this))};O.Ta=function(t){this.g&&(this.response=t,kl(this))};O.ha=function(){this.g&&kl(this)};function kl(t){t.readyState=4,t.l=null,t.j=null,t.A=null,qa(t)}O.setRequestHeader=function(t,e){this.v.append(t,e)};O.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};O.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function qa(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(bh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var FF=V.JSON.parse;function be(t){Qe.call(this),this.headers=new po,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Z1,this.K=this.L=!1}it(be,Qe);var Z1="",$F=/^https?$/i,UF=["POST","PUT"];O=be.prototype;O.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Op.g(),this.C=this.u?j0(this.u):j0(Op),this.g.onreadystatechange=et(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){W0(this,s);return}t=n||"";const i=new po(this.headers);r&&sy(r,function(s,o){i.set(o,s)}),r=YL(i.T()),n=V.FormData&&t instanceof V.FormData,!(0<=g1(UF,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(s,o){this.g.setRequestHeader(o,s)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{nI(this),0<this.B&&((this.K=VF(this.g))?(this.g.timeout=this.B,this.g.ontimeout=et(this.pa,this)):this.A=ty(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){W0(this,s)}};function VF(t){return Ks&&tF()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function BF(t){return t.toLowerCase()=="content-type"}O.pa=function(){typeof Hg<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,tt(this,"timeout"),this.abort(8))};function W0(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,eI(t),Ah(t)}function eI(t){t.D||(t.D=!0,tt(t,"complete"),tt(t,"error"))}O.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,tt(this,"complete"),tt(this,"abort"),Ah(this))};O.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ah(this,!0)),be.Z.M.call(this)};O.Fa=function(){this.s||(this.F||this.v||this.l?tI(this):this.cb())};O.cb=function(){tI(this)};function tI(t){if(t.h&&typeof Hg<"u"&&(!t.C[1]||zn(t)!=4||t.ba()!=2)){if(t.v&&zn(t)==4)ty(t.Fa,0,t);else if(tt(t,"readystatechange"),zn(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(z1)[1]||null;if(!i&&V.self&&V.self.location){var s=V.self.location.protocol;i=s.substr(0,s.length-1)}r=!$F.test(i?i.toLowerCase():"")}n=r}if(n)tt(t,"complete"),tt(t,"success");else{t.m=6;try{var o=2<zn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",eI(t)}}finally{Ah(t)}}}}function Ah(t,e){if(t.g){nI(t);const n=t.g,r=t.C[0]?kc:null;t.g=null,t.C=null,e||tt(t,"ready");try{n.onreadystatechange=r}catch{}}}function nI(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(V.clearTimeout(t.A),t.A=null)}function zn(t){return t.g?t.g.readyState:0}O.ba=function(){try{return 2<zn(this)?this.g.status:-1}catch{return-1}};O.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};O.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),FF(e)}};function q0(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Z1:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}O.Da=function(){return this.m};O.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function jF(t){let e="";return qg(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function cy(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=jF(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ge(t,e,n))}function Fo(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function rI(t){this.za=0,this.l=[],this.h=new Sh,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Fo("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Fo("baseRetryDelayMs",5e3,t),this.$a=Fo("retryDelaySeedMs",1e4,t),this.Ya=Fo("forwardChannelMaxRetries",2,t),this.ra=Fo("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new K1(t&&t.concurrentRequestLimit),this.Ca=new DF,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}O=rI.prototype;O.ma=8;O.G=1;function hy(t){if(iI(t),t.G==3){var e=t.V++,n=tr(t.F);ge(n,"SID",t.J),ge(n,"RID",e),ge(n,"TYPE","terminate"),Nl(t,n),e=new Tl(t,t.h,e,void 0),e.K=2,e.v=xh(tr(n)),n=!1,V.navigator&&V.navigator.sendBeacon&&(n=V.navigator.sendBeacon(e.v.toString(),"")),!n&&V.Image&&(new Image().src=e.v,n=!0),n||(e.g=dI(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Sl(e)}cI(t)}O.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function Ph(t){t.g&&(fy(t),t.g.cancel(),t.g=null)}function iI(t){Ph(t),t.u&&(V.clearTimeout(t.u),t.u=null),Oc(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&V.clearTimeout(t.m),t.m=null)}function qd(t,e){t.l.push(new PF(t.Za++,e)),t.G==3&&Oh(t)}function Oh(t){G1(t.i)||t.m||(t.m=!0,Zg(t.Ha,t),t.C=0)}function zF(t,e){return Q1(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=El(et(t.Ha,t,e),uI(t,t.C)),t.C++,!0)}O.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new Tl(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=v1(s),_1(s,this.P)):s=this.P),this.o===null&&(i.H=s),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=sI(this,i,e),n=tr(this.F),ge(n,"RID",t),ge(n,"CVER",22),this.D&&ge(n,"X-HTTP-Session-Id",this.D),Nl(this,n),this.o&&s&&cy(n,this.o,s),ay(this.i,i),this.Ra&&ge(n,"TYPE","init"),this.ja?(ge(n,"$req",e),ge(n,"SID","null"),i.$=!0,Mp(i,n,null)):Mp(i,n,e),this.G=2}}else this.G==3&&(t?K0(this,t):this.l.length==0||G1(this.i)||K0(this))};function K0(t,e){var n;e?n=e.m:n=t.V++;const r=tr(t.F);ge(r,"SID",t.J),ge(r,"RID",n),ge(r,"AID",t.U),Nl(t,r),t.o&&t.s&&cy(r,t.o,t.s),n=new Tl(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=sI(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),ay(t.i,n),Mp(n,r,e)}function Nl(t,e){t.j&&sy({},function(n,r){ge(e,r,n)})}function sI(t,e,n){n=Math.min(t.l.length,n);var r=t.j?et(t.j.Oa,t.j,t):null;e:{var i=t.l;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{MF(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function oI(t){t.g||t.u||(t.Y=1,Zg(t.Ga,t),t.A=0)}function dy(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=El(et(t.Ga,t),uI(t,t.A)),t.A++,!0)}O.Ga=function(){if(this.u=null,aI(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=El(et(this.bb,this),t)}};O.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,gt(10),Ph(this),aI(this))};function fy(t){t.B!=null&&(V.clearTimeout(t.B),t.B=null)}function aI(t){t.g=new Tl(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=tr(t.oa);ge(e,"RID","rpc"),ge(e,"SID",t.J),ge(e,"CI",t.N?"0":"1"),ge(e,"AID",t.U),Nl(t,e),ge(e,"TYPE","xmlhttp"),t.o&&t.s&&cy(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=xh(tr(e)),n.s=null,n.U=!0,U1(n,t)}O.ab=function(){this.v!=null&&(this.v=null,Ph(this),dy(this),gt(19))};function Oc(t){t.v!=null&&(V.clearTimeout(t.v),t.v=null)}function lI(t,e){var n=null;if(t.g==e){Oc(t),fy(t),t.g=null;var r=2}else if(Fp(t.i,e))n=e.D,Y1(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=Ih(),tt(r,new M1(r,n)),Oh(t)}else oI(t);else if(i=e.o,i==3||i==0&&0<t.I||!(r==1&&zF(t,e)||r==2&&dy(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:ui(t,5);break;case 4:ui(t,10);break;case 3:ui(t,6);break;default:ui(t,2)}}}function uI(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function ui(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=et(t.jb,t);n||(n=new Di("//www.google.com/images/cleardot.gif"),V.location&&V.location.protocol=="http"||bc(n,"https"),xh(n)),LF(n.toString(),r)}else gt(2);t.G=0,t.j&&t.j.va(e),cI(t),iI(t)}O.jb=function(t){t?(this.h.info("Successfully pinged google.com"),gt(2)):(this.h.info("Failed to ping google.com"),gt(1))};function cI(t){t.G=0,t.I=-1,t.j&&((X1(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Wg(t.l),t.l.length=0),t.j.ua())}function hI(t,e,n){let r=SF(n);if(r.i!="")e&&Ac(r,e+"."+r.i),Pc(r,r.m);else{const i=V.location;r=IF(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&qg(t.aa,function(i,s){ge(r,s,i)}),e=t.D,n=t.sa,e&&n&&ge(r,e,n),ge(r,"VER",t.ma),Nl(t,r),r}function dI(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new be(new Il({ib:!0})):new be(t.qa),e.L=t.H,e}function fI(){}O=fI.prototype;O.xa=function(){};O.wa=function(){};O.va=function(){};O.ua=function(){};O.Oa=function(){};function Dc(){if(Ks&&!(10<=Number(nF)))throw Error("Environmental error: no available transport.")}Dc.prototype.g=function(t,e){return new Ht(t,e)};function Ht(t,e){Qe.call(this),this.g=new rI(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Nc(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Nc(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new go(this)}it(Ht,Qe);Ht.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Zg(et(t.hb,t,e))),gt(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=hI(t,null,t.W),Oh(t)};Ht.prototype.close=function(){hy(this.g)};Ht.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,qd(this.g,e)}else this.v?(e={},e.__data__=Jg(t),qd(this.g,e)):qd(this.g,t)};Ht.prototype.M=function(){this.g.j=null,delete this.j,hy(this.g),delete this.g,Ht.Z.M.call(this)};function pI(t){ry.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}it(pI,ry);function mI(){iy.call(this),this.status=1}it(mI,iy);function go(t){this.g=t}it(go,fI);go.prototype.xa=function(){tt(this.g,"a")};go.prototype.wa=function(t){tt(this.g,new pI(t))};go.prototype.va=function(t){tt(this.g,new mI)};go.prototype.ua=function(){tt(this.g,"b")};Dc.prototype.createWebChannel=Dc.prototype.g;Ht.prototype.send=Ht.prototype.u;Ht.prototype.open=Ht.prototype.m;Ht.prototype.close=Ht.prototype.close;kh.NO_ERROR=0;kh.TIMEOUT=8;kh.HTTP_ERROR=6;L1.COMPLETE="complete";F1.EventType=Cl;Cl.OPEN="a";Cl.CLOSE="b";Cl.ERROR="c";Cl.MESSAGE="d";Qe.prototype.listen=Qe.prototype.N;be.prototype.listenOnce=be.prototype.O;be.prototype.getLastError=be.prototype.La;be.prototype.getLastErrorCode=be.prototype.Da;be.prototype.getStatus=be.prototype.ba;be.prototype.getResponseJson=be.prototype.Qa;be.prototype.getResponseText=be.prototype.ga;be.prototype.send=be.prototype.ea;var HF=function(){return new Dc},WF=function(){return Ih()},Kd=kh,qF=L1,KF=Hi,G0={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},GF=Il,au=F1,QF=be;const Q0="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}It.UNAUTHENTICATED=new It(null),It.GOOGLE_CREDENTIALS=new It("google-credentials-uid"),It.FIRST_PARTY=new It("first-party-uid"),It.MOCK_USER=new It("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yo="9.9.4";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mi=new ll("@firebase/firestore");function Y0(){return Mi.logLevel}function D(t,...e){if(Mi.logLevel<=Z.DEBUG){const n=e.map(py);Mi.debug(`Firestore (${yo}): ${t}`,...n)}}function nr(t,...e){if(Mi.logLevel<=Z.ERROR){const n=e.map(py);Mi.error(`Firestore (${yo}): ${t}`,...n)}}function X0(t,...e){if(Mi.logLevel<=Z.WARN){const n=e.map(py);Mi.warn(`Firestore (${yo}): ${t}`,...n)}}function py(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function z(t="Unexpected state"){const e=`FIRESTORE (${yo}) INTERNAL ASSERTION FAILED: `+t;throw nr(e),new Error(e)}function he(t,e){t||z()}function H(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends sn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YF{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class XF{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(It.UNAUTHENTICATED))}shutdown(){}}class JF{constructor(e){this.t=e,this.currentUser=It.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new gi;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new gi,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new gi)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(he(typeof r.accessToken=="string"),new YF(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return he(e===null||typeof e=="string"),new It(e)}}class ZF{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=It.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(he(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class e${constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new ZF(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(It.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class t${constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class n${constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=s=>{s.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,D("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?i(s):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(he(typeof n.token=="string"),this.A=n.token,new t$(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r$(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=r$(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function se(t,e){return t<e?-1:t>e?1:0}function Gs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new M(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new M(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new M(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new M(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return De.fromMillis(Date.now())}static fromDate(e){return De.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new De(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?se(this.nanoseconds,e.nanoseconds):se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new q(e)}static min(){return new q(new De(0,0))}static max(){return new q(new De(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e,n,r){n===void 0?n=0:n>e.length&&z(),r===void 0?r=e.length-n:r>e.length-n&&z(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ka.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ka?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ye extends Ka{construct(e,n,r){return new ye(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new M(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ye(n)}static emptyPath(){return new ye([])}}const i$=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ct extends Ka{construct(e,n,r){return new ct(e,n,r)}static isValidIdentifier(e){return i$.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ct.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ct(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new M(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new M(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new M(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new M(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ct(n)}static emptyPath(){return new ct([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.path=e}static fromPath(e){return new L(ye.fromString(e))}static fromName(e){return new L(ye.fromString(e).popFirst(5))}static empty(){return new L(ye.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ye.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ye.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new L(new ye(e.slice()))}}function s$(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=q.fromTimestamp(r===1e9?new De(n+1,0):new De(n,r));return new $r(i,L.empty(),e)}function o$(t){return new $r(t.readTime,t.key,-1)}class $r{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new $r(q.min(),L.empty(),-1)}static max(){return new $r(q.max(),L.empty(),-1)}}function a$(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=L.comparator(t.documentKey,e.documentKey),n!==0?n:se(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l$="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class u${constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rl(t){if(t.code!==C.FAILED_PRECONDITION||t.message!==l$)throw t;D("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new I((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof I?n:I.resolve(n)}catch(n){return I.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):I.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):I.reject(n)}static resolve(e){return new I((n,r)=>{n(e)})}static reject(e){return new I((n,r)=>{r(e)})}static waitFor(e){return new I((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=I.resolve(!1);for(const r of e)n=n.next(i=>i?I.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new I((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new I((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function xl(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class my{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Wi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function yI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */my.at=-1;class Fe{constructor(e,n){this.comparator=e,this.root=n||Xe.EMPTY}insert(e,n){return new Fe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Xe.BLACK,null,null))}remove(e){return new Fe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Xe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new lu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new lu(this.root,e,this.comparator,!1)}getReverseIterator(){return new lu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new lu(this.root,e,this.comparator,!0)}}class lu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Xe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:Xe.RED,this.left=i!=null?i:Xe.EMPTY,this.right=s!=null?s:Xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Xe(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Xe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw z();const e=this.left.check();if(e!==this.right.check())throw z();return e+(this.isRed()?0:1)}}Xe.EMPTY=null,Xe.RED=!0,Xe.BLACK=!1;Xe.EMPTY=new class{constructor(){this.size=0}get key(){throw z()}get value(){throw z()}get color(){throw z()}get left(){throw z()}get right(){throw z()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Xe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e){this.comparator=e,this.data=new Fe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Z0(this.data.getIterator())}getIteratorFrom(e){return new Z0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Me)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Me(this.comparator);return n.data=e,n}}class Z0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e){this.fields=e,e.sort(ct.comparator)}static empty(){return new en([])}unionWith(e){let n=new Me(ct.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new en(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Gs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new rt(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new rt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}rt.EMPTY_BYTE_STRING=new rt("");const c$=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ur(t){if(he(!!t),typeof t=="string"){let e=0;const n=c$.exec(t);if(he(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ne(t.seconds),nanos:Ne(t.nanos)}}function Ne(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Qs(t){return typeof t=="string"?rt.fromBase64String(t):rt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vI(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function _I(t){const e=t.mapValue.fields.__previous_value__;return vI(e)?_I(e):e}function Ga(t){const e=Ur(t.mapValue.fields.__local_write_time__.timestampValue);return new De(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h${constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Qa{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Qa("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Qa&&e.projectId===this.projectId&&e.database===this.database}}function Dh(t){return t==null}function Mc(t){return t===0&&1/t==-1/0}function d$(t){return typeof t=="number"&&Number.isInteger(t)&&!Mc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Li(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?vI(t)?4:f$(t)?9007199254740991:10:z()}function An(t,e){if(t===e)return!0;const n=Li(t);if(n!==Li(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ga(t).isEqual(Ga(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Ur(r.timestampValue),o=Ur(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Qs(r.bytesValue).isEqual(Qs(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Ne(r.geoPointValue.latitude)===Ne(i.geoPointValue.latitude)&&Ne(r.geoPointValue.longitude)===Ne(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Ne(r.integerValue)===Ne(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Ne(r.doubleValue),o=Ne(i.doubleValue);return s===o?Mc(s)===Mc(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return Gs(t.arrayValue.values||[],e.arrayValue.values||[],An);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(J0(s)!==J0(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!An(s[a],o[a])))return!1;return!0}(t,e);default:return z()}}function Ya(t,e){return(t.values||[]).find(n=>An(n,e))!==void 0}function Ys(t,e){if(t===e)return 0;const n=Li(t),r=Li(e);if(n!==r)return se(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return se(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Ne(i.integerValue||i.doubleValue),a=Ne(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return ew(t.timestampValue,e.timestampValue);case 4:return ew(Ga(t),Ga(e));case 5:return se(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Qs(i),a=Qs(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=se(o[l],a[l]);if(u!==0)return u}return se(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=se(Ne(i.latitude),Ne(s.latitude));return o!==0?o:se(Ne(i.longitude),Ne(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=Ys(o[l],a[l]);if(u)return u}return se(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===uu.mapValue&&s===uu.mapValue)return 0;if(i===uu.mapValue)return 1;if(s===uu.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=se(a[c],u[c]);if(h!==0)return h;const d=Ys(o[a[c]],l[u[c]]);if(d!==0)return d}return se(a.length,u.length)}(t.mapValue,e.mapValue);default:throw z()}}function ew(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return se(t,e);const n=Ur(t),r=Ur(e),i=se(n.seconds,r.seconds);return i!==0?i:se(n.nanos,r.nanos)}function As(t){return $p(t)}function $p(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=Ur(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Qs(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,L.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=$p(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${$p(r.fields[a])}`;return s+"}"}(t.mapValue):z();var e,n}function Up(t){return!!t&&"integerValue"in t}function gy(t){return!!t&&"arrayValue"in t}function tw(t){return!!t&&"nullValue"in t}function nw(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function bu(t){return!!t&&"mapValue"in t}function ca(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Wi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ca(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ca(t.arrayValue.values[n]);return e}return Object.assign({},t)}function f$(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.value=e}static empty(){return new Nt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!bu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ca(n)}setAll(e){let n=ct.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=ca(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());bu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return An(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];bu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Wi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Nt(ca(this.value))}}function wI(t){const e=[];return Wi(t.fields,(n,r)=>{const i=new ct([n]);if(bu(r)){const s=wI(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new en(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,n,r,i,s,o){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new Je(e,0,q.min(),q.min(),Nt.empty(),0)}static newFoundDocument(e,n,r){return new Je(e,1,n,q.min(),r,0)}static newNoDocument(e,n){return new Je(e,2,n,q.min(),Nt.empty(),0)}static newUnknownDocument(e,n){return new Je(e,3,n,q.min(),Nt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Nt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Nt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Je&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Je(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class p${constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ht=null}}function rw(t,e=null,n=[],r=[],i=null,s=null,o=null){return new p$(t,e,n,r,i,s,o)}function yy(t){const e=H(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(i=r).field.canonicalString()+i.op.toString()+As(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Dh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>As(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>As(r)).join(",")),e.ht=n}return e.ht}function m$(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${As(r.value)}`;var r}).join(", ")}]`),Dh(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>As(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>As(n)).join(",")),`Target(${e})`}function vy(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!T$(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!An(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!sw(t.startAt,e.startAt)&&sw(t.endAt,e.endAt)}function Vp(t){return L.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class Pt extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,r):new g$(e,n,r):n==="array-contains"?new _$(e,r):n==="in"?new w$(e,r):n==="not-in"?new E$(e,r):n==="array-contains-any"?new C$(e,r):new Pt(e,n,r)}static lt(e,n,r){return n==="in"?new y$(e,r):new v$(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(Ys(n,this.value)):n!==null&&Li(this.value)===Li(n)&&this.ft(Ys(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return z()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class g$ extends Pt{constructor(e,n,r){super(e,n,r),this.key=L.fromName(r.referenceValue)}matches(e){const n=L.comparator(e.key,this.key);return this.ft(n)}}class y$ extends Pt{constructor(e,n){super(e,"in",n),this.keys=EI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class v$ extends Pt{constructor(e,n){super(e,"not-in",n),this.keys=EI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function EI(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>L.fromName(r.referenceValue))}class _$ extends Pt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return gy(n)&&Ya(n.arrayValue,this.value)}}class w$ extends Pt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ya(this.value.arrayValue,n)}}class E$ extends Pt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ya(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ya(this.value.arrayValue,n)}}class C$ extends Pt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!gy(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ya(this.value.arrayValue,r))}}class Lc{constructor(e,n){this.position=e,this.inclusive=n}}class Ps{constructor(e,n="asc"){this.field=e,this.dir=n}}function T$(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function iw(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=L.comparator(L.fromName(o.referenceValue),n.key):r=Ys(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function sw(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!An(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this._t=null,this.wt=null,this.startAt,this.endAt}}function S$(t,e,n,r,i,s,o,a){return new bl(t,e,n,r,i,s,o,a)}function _y(t){return new bl(t)}function ow(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function CI(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function TI(t){for(const e of t.filters)if(e.dt())return e.field;return null}function I$(t){return t.collectionGroup!==null}function Xa(t){const e=H(t);if(e._t===null){e._t=[];const n=TI(e),r=CI(e);if(n!==null&&r===null)n.isKeyField()||e._t.push(new Ps(n)),e._t.push(new Ps(ct.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e._t.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new Ps(ct.keyField(),s))}}}return e._t}function rr(t){const e=H(t);if(!e.wt)if(e.limitType==="F")e.wt=rw(e.path,e.collectionGroup,Xa(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Xa(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Ps(s.field,o))}const r=e.endAt?new Lc(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Lc(e.startAt.position,e.startAt.inclusive):null;e.wt=rw(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.wt}function Fc(t,e,n){return new bl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Al(t,e){return vy(rr(t),rr(e))&&t.limitType===e.limitType}function SI(t){return`${yy(rr(t))}|lt:${t.limitType}`}function Bp(t){return`Query(target=${m$(rr(t))}; limitType=${t.limitType})`}function wy(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):L.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=iw(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Xa(n),r)||n.endAt&&!function(i,s,o){const a=iw(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Xa(n),r))}(t,e)}function k$(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function II(t){return(e,n)=>{let r=!1;for(const i of Xa(t)){const s=N$(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function N$(t,e,n){const r=t.field.isKeyField()?L.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?Ys(a,l):z()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return z()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kI(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Mc(e)?"-0":e}}function NI(t){return{integerValue:""+t}}function R$(t,e){return d$(e)?NI(e):kI(t,e)}/**
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
 */class Mh{constructor(){this._=void 0}}function x$(t,e,n){return t instanceof Ja?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Za?xI(t,e):t instanceof el?bI(t,e):function(r,i){const s=RI(r,i),o=aw(s)+aw(r.yt);return Up(s)&&Up(r.yt)?NI(o):kI(r.It,o)}(t,e)}function b$(t,e,n){return t instanceof Za?xI(t,e):t instanceof el?bI(t,e):n}function RI(t,e){return t instanceof $c?Up(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Ja extends Mh{}class Za extends Mh{constructor(e){super(),this.elements=e}}function xI(t,e){const n=AI(e);for(const r of t.elements)n.some(i=>An(i,r))||n.push(r);return{arrayValue:{values:n}}}class el extends Mh{constructor(e){super(),this.elements=e}}function bI(t,e){let n=AI(e);for(const r of t.elements)n=n.filter(i=>!An(i,r));return{arrayValue:{values:n}}}class $c extends Mh{constructor(e,n){super(),this.It=e,this.yt=n}}function aw(t){return Ne(t.integerValue||t.doubleValue)}function AI(t){return gy(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A${constructor(e,n){this.field=e,this.transform=n}}function P$(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Za&&r instanceof Za||n instanceof el&&r instanceof el?Gs(n.elements,r.elements,An):n instanceof $c&&r instanceof $c?An(n.yt,r.yt):n instanceof Ja&&r instanceof Ja}(t.transform,e.transform)}class O${constructor(e,n){this.version=e,this.transformResults=n}}class vn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new vn}static exists(e){return new vn(void 0,e)}static updateTime(e){return new vn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Au(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Lh{}function PI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ey(t.key,vn.none()):new Pl(t.key,t.data,vn.none());{const n=t.data,r=Nt.empty();let i=new Me(ct.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Gr(t.key,r,new en(i.toArray()),vn.none())}}function D$(t,e,n){t instanceof Pl?function(r,i,s){const o=r.value.clone(),a=uw(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Gr?function(r,i,s){if(!Au(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=uw(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(OI(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function ha(t,e,n,r){return t instanceof Pl?function(i,s,o,a){if(!Au(i.precondition,s))return o;const l=i.value.clone(),u=cw(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Gr?function(i,s,o,a){if(!Au(i.precondition,s))return o;const l=cw(i.fieldTransforms,a,s),u=s.data;return u.setAll(OI(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return Au(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function M$(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=RI(r.transform,i||null);s!=null&&(n===null&&(n=Nt.empty()),n.set(r.field,s))}return n||null}function lw(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Gs(n,r,(i,s)=>P$(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Pl extends Lh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Gr extends Lh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function OI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function uw(t,e,n){const r=new Map;he(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,b$(o,a,n[i]))}return r}function cw(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,x$(s,o,e))}return r}class Ey extends Lh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class L$ extends Lh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F${constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ke,X;function $$(t){switch(t){default:return z();case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0}}function DI(t){if(t===void 0)return nr("GRPC error has no .code"),C.UNKNOWN;switch(t){case ke.OK:return C.OK;case ke.CANCELLED:return C.CANCELLED;case ke.UNKNOWN:return C.UNKNOWN;case ke.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case ke.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case ke.INTERNAL:return C.INTERNAL;case ke.UNAVAILABLE:return C.UNAVAILABLE;case ke.UNAUTHENTICATED:return C.UNAUTHENTICATED;case ke.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case ke.NOT_FOUND:return C.NOT_FOUND;case ke.ALREADY_EXISTS:return C.ALREADY_EXISTS;case ke.PERMISSION_DENIED:return C.PERMISSION_DENIED;case ke.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case ke.ABORTED:return C.ABORTED;case ke.OUT_OF_RANGE:return C.OUT_OF_RANGE;case ke.UNIMPLEMENTED:return C.UNIMPLEMENTED;case ke.DATA_LOSS:return C.DATA_LOSS;default:return z()}}(X=ke||(ke={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Wi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return yI(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U$=new Fe(L.comparator);function ir(){return U$}const MI=new Fe(L.comparator);function Wo(...t){let e=MI;for(const n of t)e=e.insert(n.key,n);return e}function LI(t){let e=MI;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ci(){return da()}function FI(){return da()}function da(){return new vo(t=>t.toString(),(t,e)=>t.isEqual(e))}const V$=new Fe(L.comparator),B$=new Me(L.comparator);function Q(...t){let e=B$;for(const n of t)e=e.add(n);return e}const j$=new Me(se);function $I(){return j$}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,Ol.createSynthesizedTargetChangeForCurrentChange(e,n)),new Fh(q.min(),r,$I(),ir(),Q())}}class Ol{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Ol(rt.EMPTY_BYTE_STRING,n,Q(),Q(),Q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e,n,r,i){this.Tt=e,this.removedTargetIds=n,this.key=r,this.Et=i}}class UI{constructor(e,n){this.targetId=e,this.At=n}}class VI{constructor(e,n,r=rt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class hw{constructor(){this.Rt=0,this.bt=fw(),this.Pt=rt.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=Q(),n=Q(),r=Q();return this.bt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:z()}}),new Ol(this.Pt,this.vt,e,n,r)}Nt(){this.Vt=!1,this.bt=fw()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Mt(e){this.Vt=!0,this.bt=this.bt.remove(e)}Ot(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class z${constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=ir(),this.qt=dw(),this.Kt=new Me(se)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const r=this.zt(n);switch(e.state){case 0:this.Ht(n)&&r.Ct(e.resumeToken);break;case 1:r.Ft(),r.St||r.Nt(),r.Ct(e.resumeToken);break;case 2:r.Ft(),r.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(r.$t(),r.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),r.Ct(e.resumeToken));break;default:z()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((r,i)=>{this.Ht(i)&&n(i)})}Yt(e){const n=e.targetId,r=e.At.count,i=this.Xt(n);if(i){const s=i.target;if(Vp(s))if(r===0){const o=new L(s.path);this.jt(n,o,Je.newNoDocument(o,q.min()))}else he(r===1);else this.Zt(n)!==r&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((s,o)=>{const a=this.Xt(o);if(a){if(s.current&&Vp(a.target)){const l=new L(a.target.path);this.Ut.get(l)!==null||this.ee(o,l)||this.jt(o,l,Je.newNoDocument(l,e))}s.Dt&&(n.set(o,s.xt()),s.Nt())}});let r=Q();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Xt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ut.forEach((s,o)=>o.setReadTime(e));const i=new Fh(e,n,this.Kt,this.Ut,r);return this.Ut=ir(),this.qt=dw(),this.Kt=new Me(se),i}Qt(e,n){if(!this.Ht(e))return;const r=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,r),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,r){if(!this.Ht(e))return;const i=this.zt(e);this.ee(e,n)?i.kt(n,1):i.Mt(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),r&&(this.Ut=this.Ut.insert(n,r))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.zt(e).Ot()}zt(e){let n=this.Lt.get(e);return n||(n=new hw,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new Me(se),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||D("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new hw),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function dw(){return new Fe(L.comparator)}function fw(){return new Fe(L.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H$=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),W$=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class q${constructor(e,n){this.databaseId=e,this.gt=n}}function Uc(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function BI(t,e){return t.gt?e.toBase64():e.toUint8Array()}function K$(t,e){return Uc(t,e.toTimestamp())}function Gn(t){return he(!!t),q.fromTimestamp(function(e){const n=Ur(e);return new De(n.seconds,n.nanos)}(t))}function Cy(t,e){return function(n){return new ye(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function jI(t){const e=ye.fromString(t);return he(WI(e)),e}function jp(t,e){return Cy(t.databaseId,e.path)}function Gd(t,e){const n=jI(e);if(n.get(1)!==t.databaseId.projectId)throw new M(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new M(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new L(zI(n))}function zp(t,e){return Cy(t.databaseId,e)}function G$(t){const e=jI(t);return e.length===4?ye.emptyPath():zI(e)}function Hp(t){return new ye(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function zI(t){return he(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function pw(t,e,n){return{name:jp(t,e),fields:n.value.mapValue.fields}}function Q$(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:z()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.gt?(he(u===void 0||typeof u=="string"),rt.fromBase64String(u||"")):(he(u===void 0||u instanceof Uint8Array),rt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?C.UNKNOWN:DI(l.code);return new M(u,l.message||"")}(o);n=new VI(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Gd(t,r.document.name),s=Gn(r.document.updateTime),o=new Nt({mapValue:{fields:r.document.fields}}),a=Je.newFoundDocument(i,s,o),l=r.targetIds||[],u=r.removedTargetIds||[];n=new Pu(l,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Gd(t,r.document),s=r.readTime?Gn(r.readTime):q.min(),o=Je.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Pu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Gd(t,r.document),s=r.removedTargetIds||[];n=new Pu([],s,i,null)}else{if(!("filter"in e))return z();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new F$(i),o=r.targetId;n=new UI(o,s)}}return n}function Y$(t,e){let n;if(e instanceof Pl)n={update:pw(t,e.key,e.value)};else if(e instanceof Ey)n={delete:jp(t,e.key)};else if(e instanceof Gr)n={update:pw(t,e.key,e.data),updateMask:o2(e.fieldMask)};else{if(!(e instanceof L$))return z();n={verify:jp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Ja)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Za)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof el)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof $c)return{fieldPath:s.field.canonicalString(),increment:o.yt};throw z()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:K$(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:z()}(t,e.precondition)),n}function X$(t,e){return t&&t.length>0?(he(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Gn(r.updateTime):Gn(i);return s.isEqual(q.min())&&(s=Gn(i)),new O$(s,r.transformResults||[])}(n,e))):[]}function J$(t,e){return{documents:[zp(t,e.path)]}}function Z$(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=zp(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=zp(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length===0)return;const u=l.map(c=>function(h){if(h.op==="=="){if(nw(h.value))return{unaryFilter:{field:Zi(h.field),op:"IS_NAN"}};if(tw(h.value))return{unaryFilter:{field:Zi(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(nw(h.value))return{unaryFilter:{field:Zi(h.field),op:"IS_NOT_NAN"}};if(tw(h.value))return{unaryFilter:{field:Zi(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Zi(h.field),op:r2(h.op),value:h.value}}}(c));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:Zi(c.field),direction:n2(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.gt||Dh(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function e2(t){let e=G$(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){he(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=HI(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new Ps(_s(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,Dh(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new Lc(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new Lc(d,h)}(n.endAt)),S$(e,i,o,s,a,"F",l,u)}function t2(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return z()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function HI(t){return t?t.unaryFilter!==void 0?[s2(t)]:t.fieldFilter!==void 0?[i2(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>HI(e)).reduce((e,n)=>e.concat(n)):z():[]}function n2(t){return H$[t]}function r2(t){return W$[t]}function Zi(t){return{fieldPath:t.canonicalString()}}function _s(t){return ct.fromServerFormat(t.fieldPath)}function i2(t){return Pt.create(_s(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return z()}}(t.fieldFilter.op),t.fieldFilter.value)}function s2(t){switch(t.unaryFilter.op){case"IS_NAN":const e=_s(t.unaryFilter.field);return Pt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=_s(t.unaryFilter.field);return Pt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=_s(t.unaryFilter.field);return Pt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=_s(t.unaryFilter.field);return Pt.create(i,"!=",{nullValue:"NULL_VALUE"});default:return z()}}function o2(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function WI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a2{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&D$(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ha(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ha(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=FI();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=PI(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(q.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Q())}isEqual(e){return this.batchId===e.batchId&&Gs(this.mutations,e.mutations,(n,r)=>lw(n,r))&&Gs(this.baseMutations,e.baseMutations,(n,r)=>lw(n,r))}}class Ty{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){he(e.mutations.length===r.length);let i=V$;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Ty(e,n,r,i)}}/**
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
 */class l2{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class yi{constructor(e,n,r,i,s=q.min(),o=q.min(),a=rt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new yi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new yi(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new yi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u2{constructor(e){this.re=e}}function c2(t){const e=e2({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Fc(e,e.limit,"L"):e}/**
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
 */class h2{constructor(){this.Ye=new d2}addToCollectionParentIndex(e,n){return this.Ye.add(n),I.resolve()}getCollectionParents(e,n){return I.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return I.resolve()}deleteFieldIndex(e,n){return I.resolve()}getDocumentsMatchingTarget(e,n){return I.resolve(null)}getIndexType(e,n){return I.resolve(0)}getFieldIndexes(e,n){return I.resolve([])}getNextCollectionGroupToUpdate(e){return I.resolve(null)}getMinOffset(e,n){return I.resolve($r.min())}getMinOffsetFromCollectionGroup(e,n){return I.resolve($r.min())}updateCollectionGroup(e,n,r){return I.resolve()}updateIndexEntries(e,n){return I.resolve()}}class d2{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Me(ye.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Me(ye.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Xs(0)}static vn(){return new Xs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f2{constructor(){this.changes=new vo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Je.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?I.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class p2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m2{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.getBaseDocument(e,n,r))).next(i=>(r!==null&&ha(r.mutation,i,en.empty(),De.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Q()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Q()){const i=ci();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Wo();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ci();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Q()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=ir();const o=da(),a=da();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Gr)?s=s.insert(u.key,u):c!==void 0&&(o.set(u.key,c.mutation.getFieldMask()),ha(c.mutation,u,c.mutation.getFieldMask(),De.now()))}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new p2(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=da();let i=new Fe((o,a)=>o-a),s=Q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||en.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||Q()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=FI();c.forEach(d=>{if(!s.has(d)){const f=PI(n.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return I.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return L.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):I$(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):I.resolve(ci());let a=-1,l=s;return o.next(u=>I.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?I.resolve():this.getBaseDocument(e,c,h).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,Q())).next(c=>({batchId:a,changes:LI(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new L(n)).next(r=>{let i=Wo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Wo();return this.indexManager.getCollectionParents(e,i).next(o=>I.forEach(o,a=>{const l=function(u,c){return new bl(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(s=>{s.forEach((a,l)=>{const u=l.getKey();i.get(u)===null&&(i=i.insert(u,Je.newInvalidDocument(u)))});let o=Wo();return i.forEach((a,l)=>{const u=s.get(a);u!==void 0&&ha(u.mutation,l,en.empty(),De.now()),wy(n,l)&&(o=o.insert(a,l))}),o})}getBaseDocument(e,n,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):I.resolve(Je.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g2{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return I.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:Gn(r.createTime)}),I.resolve()}getNamedQuery(e,n){return I.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(r){return{name:r.name,query:c2(r.bundledQuery),readTime:Gn(r.readTime)}}(n)),I.resolve()}}/**
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
 */class y2{constructor(){this.overlays=new Fe(L.comparator),this.es=new Map}getOverlay(e,n){return I.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ci();return I.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ue(e,n,s)}),I.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.es.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.es.delete(r)),I.resolve()}getOverlaysForCollection(e,n,r){const i=ci(),s=n.length+1,o=new L(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return I.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Fe((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=ci(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=ci(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return I.resolve(a)}ue(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(r.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new l2(n,r));let s=this.es.get(n);s===void 0&&(s=Q(),this.es.set(n,s)),this.es.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(){this.ns=new Me(ze.ss),this.rs=new Me(ze.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const r=new ze(e,n);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.cs(new ze(e,n))}hs(e,n){e.forEach(r=>this.removeReference(r,n))}ls(e){const n=new L(new ye([])),r=new ze(n,e),i=new ze(n,e+1),s=[];return this.rs.forEachInRange([r,i],o=>{this.cs(o),s.push(o.key)}),s}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new L(new ye([])),r=new ze(n,e),i=new ze(n,e+1);let s=Q();return this.rs.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new ze(e,0),r=this.ns.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ze{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return L.comparator(e.key,n.key)||se(e._s,n._s)}static os(e,n){return se(e._s,n._s)||L.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new Me(ze.ss)}checkEmpty(e){return I.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new a2(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new ze(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return I.resolve(o)}lookupMutationBatch(e,n){return I.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ps(r),s=i<0?0:i;return I.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return I.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return I.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ze(n,0),i=new ze(n,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([r,i],o=>{const a=this.ys(o._s);s.push(a)}),I.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Me(se);return n.forEach(i=>{const s=new ze(i,0),o=new ze(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([s,o],a=>{r=r.add(a._s)})}),I.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;L.isDocumentKey(s)||(s=s.child(""));const o=new ze(new L(s),0);let a=new Me(se);return this.gs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l._s)),!0)},o),I.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(r=>{const i=this.ys(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){he(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return I.forEach(n.mutations,i=>{const s=new ze(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,n){const r=new ze(n,0),i=this.gs.firstAfterOrEqual(r);return I.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,I.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _2{constructor(e){this.Es=e,this.docs=new Fe(L.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return I.resolve(r?r.document.mutableCopy():Je.newInvalidDocument(n))}getEntries(e,n){let r=ir();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Je.newInvalidDocument(i))}),I.resolve(r)}getAllFromCollection(e,n,r){let i=ir();const s=new L(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||a$(o$(l),r)<=0||(i=i.insert(l.key,l.mutableCopy()))}return I.resolve(i)}getAllFromCollectionGroup(e,n,r,i){z()}As(e,n){return I.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new w2(this)}getSize(e){return I.resolve(this.size)}}class w2 extends f2{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(r)}),I.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E2{constructor(e){this.persistence=e,this.Rs=new vo(n=>yy(n),vy),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Sy,this.targetCount=0,this.vs=Xs.Pn()}forEachTarget(e,n){return this.Rs.forEach((r,i)=>n(i)),I.resolve()}getLastRemoteSnapshotVersion(e){return I.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return I.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),I.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),I.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new Xs(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,I.resolve()}updateTargetData(e,n){return this.Dn(n),I.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,I.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Rs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),I.waitFor(s).next(()=>i)}getTargetCount(e){return I.resolve(this.targetCount)}getTargetData(e,n){const r=this.Rs.get(n)||null;return I.resolve(r)}addMatchingKeys(e,n,r){return this.Ps.us(n,r),I.resolve()}removeMatchingKeys(e,n,r){this.Ps.hs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),I.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),I.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ps.ds(n);return I.resolve(r)}containsKey(e,n){return I.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C2{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new my(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new E2(this),this.indexManager=new h2,this.remoteDocumentCache=function(r){return new _2(r)}(r=>this.referenceDelegate.xs(r)),this.It=new u2(n),this.Ns=new g2(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new y2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Vs[e.toKey()];return r||(r=new v2(n,this.referenceDelegate),this.Vs[e.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,r){D("MemoryPersistence","Starting transaction:",e);const i=new T2(this.Ss.next());return this.referenceDelegate.ks(),r(i).next(s=>this.referenceDelegate.Ms(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Os(e,n){return I.or(Object.values(this.Vs).map(r=>()=>r.containsKey(e,n)))}}class T2 extends u${constructor(e){super(),this.currentSequenceNumber=e}}class Iy{constructor(e){this.persistence=e,this.Fs=new Sy,this.$s=null}static Bs(e){return new Iy(e)}get Ls(){if(this.$s)return this.$s;throw z()}addReference(e,n,r){return this.Fs.addReference(r,n),this.Ls.delete(r.toString()),I.resolve()}removeReference(e,n,r){return this.Fs.removeReference(r,n),this.Ls.add(r.toString()),I.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),I.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ls.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}ks(){this.$s=new Set}Ms(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return I.forEach(this.Ls,r=>{const i=L.fromPath(r);return this.Us(e,i).next(s=>{s||n.removeEntry(i,q.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(r=>{r?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return I.or([()=>I.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Si=r,this.Di=i}static Ci(e,n){let r=Q(),i=Q();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new ky(e,n.fromCache,r,i)}}/**
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
 */class S2{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.ki(e,n).next(s=>s||this.Mi(e,n,i,r)).next(s=>s||this.Oi(e,n))}ki(e,n){if(ow(n))return I.resolve(null);let r=rr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Fc(n,null,"F"),r=rr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Q(...s);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Fi(n,a);return this.$i(n,u,o,l.readTime)?this.ki(e,Fc(n,null,"F")):this.Bi(e,u,n,l)}))})))}Mi(e,n,r,i){return ow(n)||i.isEqual(q.min())?this.Oi(e,n):this.Ni.getDocuments(e,r).next(s=>{const o=this.Fi(n,s);return this.$i(n,o,r,i)?this.Oi(e,n):(Y0()<=Z.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Bp(n)),this.Bi(e,o,n,s$(i,-1)))})}Fi(e,n){let r=new Me(II(e));return n.forEach((i,s)=>{wy(e,s)&&(r=r.add(s))}),r}$i(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Oi(e,n){return Y0()<=Z.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",Bp(n)),this.Ni.getDocumentsMatchingQuery(e,n,$r.min())}Bi(e,n,r,i){return this.Ni.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I2{constructor(e,n,r,i){this.persistence=e,this.Li=n,this.It=i,this.Ui=new Fe(se),this.qi=new vo(s=>yy(s),vy),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(r)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new m2(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function k2(t,e,n,r){return new I2(t,e,n,r)}async function qI(t,e){const n=H(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Qi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=Q();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function N2(t,e){const n=H(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let d=I.resolve();return h.forEach(f=>{d=d.next(()=>u.getEntry(a,f)).next(g=>{const v=l.docVersions.get(f);he(v!==null),g.version.compareTo(v)<0&&(c.applyToRemoteDocument(g,l),g.isValidDocument()&&(g.setReadTime(l.commitVersion),u.addEntry(g)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=Q();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function KI(t){const e=H(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function R2(t,e){const n=H(t),r=e.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(s,c.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?f=f.withResumeToken(rt.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):c.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(c.resumeToken,r)),i=i.insert(h,f),function(g,v,E){return g.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(d,f,c)&&a.push(n.Cs.updateTargetData(s,f))});let l=ir(),u=Q();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(x2(s,o,e.documentUpdates).next(c=>{l=c.Wi,u=c.zi})),!r.isEqual(q.min())){const c=n.Cs.getLastRemoteSnapshotVersion(s).next(h=>n.Cs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return I.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ui=i,s))}function x2(t,e,n){let r=Q(),i=Q();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=ir();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(q.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):D("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Wi:o,zi:i}})}function b2(t,e){const n=H(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function A2(t,e){const n=H(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Cs.getTargetData(r,e).next(s=>s?(i=s,I.resolve(i)):n.Cs.allocateTargetId(r).next(o=>(i=new yi(e,o,0,r.currentSequenceNumber),n.Cs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ui.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(r.targetId,r),n.qi.set(e,r.targetId)),r})}async function Wp(t,e,n){const r=H(t),i=r.Ui.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!xl(o))throw o;D("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ui=r.Ui.remove(e),r.qi.delete(i.target)}function mw(t,e,n){const r=H(t);let i=q.min(),s=Q();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=H(a),h=c.qi.get(u);return h!==void 0?I.resolve(c.Ui.get(h)):c.Cs.getTargetData(l,u)}(r,o,rr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Li.getDocumentsMatchingQuery(o,e,n?i:q.min(),n?s:Q())).next(a=>(P2(r,k$(e),a),{documents:a,Hi:s})))}function P2(t,e,n){let r=q.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ki.set(e,r)}class gw{constructor(){this.activeTargetIds=$I()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class O2{constructor(){this.Lr=new gw,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,r){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new gw,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class D2{qr(e){}shutdown(){}}/**
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
 */class yw{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){D("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){D("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L2{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F2 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}co(e,n,r,i,s){const o=this.ao(e,n);D("RestConnection","Sending: ",o,r);const a={};return this.ho(a,i,s),this.lo(e,o,a,r).then(l=>(D("RestConnection","Received: ",l),l),l=>{throw X0("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}fo(e,n,r,i,s,o){return this.co(e,n,r,i,s)}ho(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+yo,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ao(e,n){const r=M2[e];return`${this.oo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,r,i){return new Promise((s,o)=>{const a=new QF;a.listenOnce(qF.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Kd.NO_ERROR:const u=a.getResponseJson();D("Connection","XHR received:",JSON.stringify(u)),s(u);break;case Kd.TIMEOUT:D("Connection",'RPC "'+e+'" timed out'),o(new M(C.DEADLINE_EXCEEDED,"Request time out"));break;case Kd.HTTP_ERROR:const c=a.getStatus();if(D("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(f){const g=f.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(g)>=0?g:C.UNKNOWN}(h.status);o(new M(d,h.message))}else o(new M(C.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new M(C.UNAVAILABLE,"Connection failed."));break;default:z()}}finally{D("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,r,15)})}_o(e,n,r){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=HF(),o=WF(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new GF({})),this.ho(a.initMessageHeaders,n,r),lh()||ng()||vb()||mT()||_b()||pT()||(a.httpHeadersOverwriteParam="$httpHeaders");const l=i.join("");D("Connection","Creating WebChannel: "+l,a);const u=s.createWebChannel(l,a);let c=!1,h=!1;const d=new L2({Hr:g=>{h?D("Connection","Not sending because WebChannel is closed:",g):(c||(D("Connection","Opening WebChannel transport."),u.open(),c=!0),D("Connection","WebChannel sending:",g),u.send(g))},Jr:()=>u.close()}),f=(g,v,E)=>{g.listen(v,m=>{try{E(m)}catch(p){setTimeout(()=>{throw p},0)}})};return f(u,au.EventType.OPEN,()=>{h||D("Connection","WebChannel transport opened.")}),f(u,au.EventType.CLOSE,()=>{h||(h=!0,D("Connection","WebChannel transport closed"),d.io())}),f(u,au.EventType.ERROR,g=>{h||(h=!0,X0("Connection","WebChannel transport errored:",g),d.io(new M(C.UNAVAILABLE,"The operation could not be completed")))}),f(u,au.EventType.MESSAGE,g=>{var v;if(!h){const E=g.data[0];he(!!E);const m=E,p=m.error||((v=m[0])===null||v===void 0?void 0:v.error);if(p){D("Connection","WebChannel received error:",p);const y=p.status;let _=function(k){const x=ke[k];if(x!==void 0)return DI(x)}(y),T=p.message;_===void 0&&(_=C.INTERNAL,T="Unknown error status: "+y+" with message "+p.message),h=!0,d.io(new M(_,T)),u.close()}else D("Connection","WebChannel received:",E),d.ro(E)}}),f(o,KF.STAT_EVENT,g=>{g.stat===G0.PROXY?D("Connection","Detected buffering proxy"):g.stat===G0.NOPROXY&&D("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function Qd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $h(t){return new q$(t,!0)}class GI{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Hs=e,this.timerId=n,this.wo=r,this.mo=i,this.yo=s,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),r=Math.max(0,Date.now()-this.To),i=Math.max(0,n-r);i>0&&D("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Io=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this.wo&&(this.po=this.wo),this.po>this.yo&&(this.po=this.yo)}bo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(e,n,r,i,s,o,a,l){this.Hs=e,this.Po=r,this.vo=i,this.Vo=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new GI(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Mo()}async stop(){this.No()&&await this.close(0)}Oo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.Po,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===C.RESOURCE_EXHAUSTED?(nr(n.toString()),nr("Using maximum backoff delay to prevent overloading the backend."),this.xo.Eo()):n&&n.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.So===n&&this.Go(r,i)},r=>{e(()=>{const i=new M(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Qo(i)})})}Go(e,n){const r=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{r(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{r(()=>this.Qo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Mo(){this.state=5,this.xo.Ao(async()=>{this.state=0,this.start()})}Qo(e){return D("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(D("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class $2 extends QI{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.It=s}jo(e,n){return this.Vo._o("Listen",e,n)}onMessage(e){this.xo.reset();const n=Q$(this.It,e),r=function(i){if(!("targetChange"in i))return q.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?q.min():s.readTime?Gn(s.readTime):q.min()}(e);return this.listener.Wo(n,r)}zo(e){const n={};n.database=Hp(this.It),n.addTarget=function(i,s){let o;const a=s.target;return o=Vp(a)?{documents:J$(i,a)}:{query:Z$(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=BI(i,s.resumeToken):s.snapshotVersion.compareTo(q.min())>0&&(o.readTime=Uc(i,s.snapshotVersion.toTimestamp())),o}(this.It,e);const r=t2(this.It,e);r&&(n.labels=r),this.Bo(n)}Ho(e){const n={};n.database=Hp(this.It),n.removeTarget=e,this.Bo(n)}}class U2 extends QI{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.It=s,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(e,n){return this.Vo._o("Write",e,n)}onMessage(e){if(he(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=X$(e.writeResults,e.commitTime),r=Gn(e.commitTime);return this.listener.Zo(r,n)}return he(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=Hp(this.It),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Y$(this.It,r))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V2 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.Vo=r,this.It=i,this.nu=!1}su(){if(this.nu)throw new M(C.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.Vo.co(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new M(C.UNKNOWN,i.toString())})}fo(e,n,r,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.Vo.fo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new M(C.UNKNOWN,s.toString())})}terminate(){this.nu=!0}}class B2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(nr(n),this.ou=!1):D("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j2{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=s,this.mu.qr(o=>{r.enqueueAndForget(async()=>{qi(this)&&(D("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=H(a);l._u.add(4),await Dl(l),l.gu.set("Unknown"),l._u.delete(4),await Uh(l)}(this))})}),this.gu=new B2(r,i)}}async function Uh(t){if(qi(t))for(const e of t.wu)await e(!0)}async function Dl(t){for(const e of t.wu)await e(!1)}function YI(t,e){const n=H(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),xy(n)?Ry(n):_o(n).ko()&&Ny(n,e))}function XI(t,e){const n=H(t),r=_o(n);n.du.delete(e),r.ko()&&JI(n,e),n.du.size===0&&(r.ko()?r.Fo():qi(n)&&n.gu.set("Unknown"))}function Ny(t,e){t.yu.Ot(e.targetId),_o(t).zo(e)}function JI(t,e){t.yu.Ot(e),_o(t).Ho(e)}function Ry(t){t.yu=new z$({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t.du.get(e)||null}),_o(t).start(),t.gu.uu()}function xy(t){return qi(t)&&!_o(t).No()&&t.du.size>0}function qi(t){return H(t)._u.size===0}function ZI(t){t.yu=void 0}async function z2(t){t.du.forEach((e,n)=>{Ny(t,e)})}async function H2(t,e){ZI(t),xy(t)?(t.gu.hu(e),Ry(t)):t.gu.set("Unknown")}async function W2(t,e,n){if(t.gu.set("Online"),e instanceof VI&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.du.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.du.delete(o),r.yu.removeTarget(o))}(t,e)}catch(r){D("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Vc(t,r)}else if(e instanceof Pu?t.yu.Gt(e):e instanceof UI?t.yu.Yt(e):t.yu.Wt(e),!n.isEqual(q.min()))try{const r=await KI(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.yu.te(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.du.get(l);u&&i.du.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i.du.get(a);if(!l)return;i.du.set(a,l.withResumeToken(rt.EMPTY_BYTE_STRING,l.snapshotVersion)),JI(i,a);const u=new yi(l.target,a,1,l.sequenceNumber);Ny(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){D("RemoteStore","Failed to raise snapshot:",r),await Vc(t,r)}}async function Vc(t,e,n){if(!xl(e))throw e;t._u.add(1),await Dl(t),t.gu.set("Offline"),n||(n=()=>KI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{D("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await Uh(t)})}function ek(t,e){return e().catch(n=>Vc(t,n,e))}async function Vh(t){const e=H(t),n=Vr(e);let r=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;q2(e);)try{const i=await b2(e.localStore,r);if(i===null){e.fu.length===0&&n.Fo();break}r=i.batchId,K2(e,i)}catch(i){await Vc(e,i)}tk(e)&&nk(e)}function q2(t){return qi(t)&&t.fu.length<10}function K2(t,e){t.fu.push(e);const n=Vr(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function tk(t){return qi(t)&&!Vr(t).No()&&t.fu.length>0}function nk(t){Vr(t).start()}async function G2(t){Vr(t).eu()}async function Q2(t){const e=Vr(t);for(const n of t.fu)e.Xo(n.mutations)}async function Y2(t,e,n){const r=t.fu.shift(),i=Ty.from(r,e,n);await ek(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Vh(t)}async function X2(t,e){e&&Vr(t).Yo&&await async function(n,r){if(i=r.code,$$(i)&&i!==C.ABORTED){const s=n.fu.shift();Vr(n).Oo(),await ek(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Vh(n)}var i}(t,e),tk(t)&&nk(t)}async function vw(t,e){const n=H(t);n.asyncQueue.verifyOperationInProgress(),D("RemoteStore","RemoteStore received new credentials");const r=qi(n);n._u.add(3),await Dl(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await Uh(n)}async function J2(t,e){const n=H(t);e?(n._u.delete(2),await Uh(n)):e||(n._u.add(2),await Dl(n),n.gu.set("Unknown"))}function _o(t){return t.pu||(t.pu=function(e,n,r){const i=H(e);return i.su(),new $2(n,i.Vo,i.authCredentials,i.appCheckCredentials,i.It,r)}(t.datastore,t.asyncQueue,{Yr:z2.bind(null,t),Zr:H2.bind(null,t),Wo:W2.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),xy(t)?Ry(t):t.gu.set("Unknown")):(await t.pu.stop(),ZI(t))})),t.pu}function Vr(t){return t.Iu||(t.Iu=function(e,n,r){const i=H(e);return i.su(),new U2(n,i.Vo,i.authCredentials,i.appCheckCredentials,i.It,r)}(t.datastore,t.asyncQueue,{Yr:G2.bind(null,t),Zr:X2.bind(null,t),tu:Q2.bind(null,t),Zo:Y2.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Oo(),await Vh(t)):(await t.Iu.stop(),t.fu.length>0&&(D("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new gi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new by(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ay(t,e){if(nr("AsyncQueue",`${e}: ${t}`),xl(t))return new M(C.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e){this.comparator=e?(n,r)=>e(n,r)||L.comparator(n.key,r.key):(n,r)=>L.comparator(n.key,r.key),this.keyedMap=Wo(),this.sortedSet=new Fe(this.comparator)}static emptySet(e){return new Os(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Os)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Os;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{constructor(){this.Tu=new Fe(L.comparator)}track(e){const n=e.doc.key,r=this.Tu.get(n);r?e.type!==0&&r.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&r.type!==1?this.Tu=this.Tu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Tu=this.Tu.remove(n):e.type===1&&r.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):z():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,r)=>{e.push(r)}),e}}class Js{constructor(e,n,r,i,s,o,a,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l}static fromInitialDocuments(e,n,r,i){const s=[];return n.forEach(o=>{s.push({type:0,doc:o})}),new Js(e,n,Os.emptySet(n),s,r,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Al(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z2{constructor(){this.Au=void 0,this.listeners=[]}}class eU{constructor(){this.queries=new vo(e=>SI(e),Al),this.onlineState="Unknown",this.Ru=new Set}}async function tU(t,e){const n=H(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Z2),i)try{s.Au=await n.onListen(r)}catch(o){const a=Ay(o,`Initialization of query '${Bp(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.bu(n.onlineState),s.Au&&e.Pu(s.Au)&&Py(n)}async function nU(t,e){const n=H(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function rU(t,e){const n=H(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Pu(i)&&(r=!0);o.Au=i}}r&&Py(n)}function iU(t,e,n){const r=H(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Py(t){t.Ru.forEach(e=>{e.next()})}class sU{constructor(e,n,r){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=r||{}}Pu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Js(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Nu||!r)&&(!e.docs.isEmpty()||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=Js.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rk{constructor(e){this.key=e}}class ik{constructor(e){this.key=e}}class oU{constructor(e,n){this.query=e,this.Lu=n,this.Uu=null,this.current=!1,this.qu=Q(),this.mutatedKeys=Q(),this.Ku=II(e),this.Gu=new Os(this.Ku)}get Qu(){return this.Lu}ju(e,n){const r=n?n.Wu:new _w,i=n?n.Gu:this.Gu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),f=wy(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),v=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let E=!1;d&&f?d.data.isEqual(f.data)?g!==v&&(r.track({type:3,doc:f}),E=!0):this.zu(d,f)||(r.track({type:2,doc:f}),E=!0,(l&&this.Ku(f,l)>0||u&&this.Ku(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),E=!0):d&&!f&&(r.track({type:1,doc:d}),E=!0,(l||u)&&(a=!0)),E&&(f?(o=o.add(f),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Gu:o,Wu:r,$i:a,mutatedKeys:s}}zu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const s=e.Wu.Eu();s.sort((u,c)=>function(h,d){const f=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return z()}};return f(h)-f(d)}(u.type,c.type)||this.Ku(u.doc,c.doc)),this.Hu(r);const o=n?this.Ju():[],a=this.qu.size===0&&this.current?1:0,l=a!==this.Uu;return this.Uu=a,s.length!==0||l?{snapshot:new Js(this.query,e.Gu,i,s,e.mutatedKeys,a===0,l,!1),Yu:o}:{Yu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,Wu:new _w,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Yu:[]}}Xu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.qu;this.qu=Q(),this.Gu.forEach(r=>{this.Xu(r.key)&&(this.qu=this.qu.add(r.key))});const n=[];return e.forEach(r=>{this.qu.has(r)||n.push(new ik(r))}),this.qu.forEach(r=>{e.has(r)||n.push(new rk(r))}),n}Zu(e){this.Lu=e.Hi,this.qu=Q();const n=this.ju(e.documents);return this.applyChanges(n,!0)}tc(){return Js.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.Uu===0)}}class aU{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class lU{constructor(e){this.key=e,this.ec=!1}}class uU{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new vo(a=>SI(a),Al),this.ic=new Map,this.rc=new Set,this.oc=new Fe(L.comparator),this.uc=new Map,this.cc=new Sy,this.ac={},this.hc=new Map,this.lc=Xs.vn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function cU(t,e){const n=wU(t);let r,i;const s=n.sc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.tc();else{const o=await A2(n.localStore,rr(e));n.isPrimaryClient&&YI(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await hU(n,e,r,a==="current")}return i}async function hU(t,e,n,r){t.dc=(c,h,d)=>async function(f,g,v,E){let m=g.view.ju(v);m.$i&&(m=await mw(f.localStore,g.query,!1).then(({documents:_})=>g.view.ju(_,m)));const p=E&&E.targetChanges.get(g.targetId),y=g.view.applyChanges(m,f.isPrimaryClient,p);return Ew(f,g.targetId,y.Yu),y.snapshot}(t,c,h,d);const i=await mw(t.localStore,e,!0),s=new oU(e,i.Hi),o=s.ju(i.documents),a=Ol.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),l=s.applyChanges(o,t.isPrimaryClient,a);Ew(t,n,l.Yu);const u=new aU(e,n,s);return t.sc.set(e,u),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),l.snapshot}async function dU(t,e){const n=H(t),r=n.sc.get(e),i=n.ic.get(r.targetId);if(i.length>1)return n.ic.set(r.targetId,i.filter(s=>!Al(s,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Wp(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),XI(n.remoteStore,r.targetId),qp(n,r.targetId)}).catch(Rl)):(qp(n,r.targetId),await Wp(n.localStore,r.targetId,!0))}async function fU(t,e,n){const r=EU(t);try{const i=await function(s,o){const a=H(s),l=De.now(),u=o.reduce((d,f)=>d.add(f.key),Q());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=ir(),g=Q();return a.Gi.getEntries(d,u).next(v=>{f=v,f.forEach((E,m)=>{m.isValidDocument()||(g=g.add(E))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,f)).next(v=>{c=v;const E=[];for(const m of o){const p=M$(m,c.get(m.key).overlayedDocument);p!=null&&E.push(new Gr(m.key,p,wI(p.value.mapValue),vn.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,E,o)}).next(v=>{h=v;const E=v.applyToLocalDocumentSet(c,g);return a.documentOverlayCache.saveOverlays(d,v.batchId,E)})}).then(()=>({batchId:h.batchId,changes:LI(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.ac[s.currentUser.toKey()];l||(l=new Fe(se)),l=l.insert(o,a),s.ac[s.currentUser.toKey()]=l}(r,i.batchId,n),await Ml(r,i.changes),await Vh(r.remoteStore)}catch(i){const s=Ay(i,"Failed to persist write");n.reject(s)}}async function sk(t,e){const n=H(t);try{const r=await R2(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.uc.get(s);o&&(he(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ec=!0:i.modifiedDocuments.size>0?he(o.ec):i.removedDocuments.size>0&&(he(o.ec),o.ec=!1))}),await Ml(n,r,e)}catch(r){await Rl(r)}}function ww(t,e,n){const r=H(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.sc.forEach((s,o)=>{const a=o.view.bu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=H(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.bu(o)&&(l=!0)}),l&&Py(a)}(r.eventManager,e),i.length&&r.nc.Wo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function pU(t,e,n){const r=H(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.uc.get(e),s=i&&i.key;if(s){let o=new Fe(L.comparator);o=o.insert(s,Je.newNoDocument(s,q.min()));const a=Q().add(s),l=new Fh(q.min(),new Map,new Me(se),o,a);await sk(r,l),r.oc=r.oc.remove(s),r.uc.delete(e),Oy(r)}else await Wp(r.localStore,e,!1).then(()=>qp(r,e,n)).catch(Rl)}async function mU(t,e){const n=H(t),r=e.batch.batchId;try{const i=await N2(n.localStore,e);ak(n,r,null),ok(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ml(n,i)}catch(i){await Rl(i)}}async function gU(t,e,n){const r=H(t);try{const i=await function(s,o){const a=H(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(he(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);ak(r,e,n),ok(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ml(r,i)}catch(i){await Rl(i)}}function ok(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function ak(t,e,n){const r=H(t);let i=r.ac[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.ac[r.currentUser.toKey()]=i}}function qp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ic.get(e))t.sc.delete(r),n&&t.nc._c(r,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.ls(e).forEach(r=>{t.cc.containsKey(r)||lk(t,r)})}function lk(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(XI(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),Oy(t))}function Ew(t,e,n){for(const r of n)r instanceof rk?(t.cc.addReference(r.key,e),yU(t,r)):r instanceof ik?(D("SyncEngine","Document no longer in limbo: "+r.key),t.cc.removeReference(r.key,e),t.cc.containsKey(r.key)||lk(t,r.key)):z()}function yU(t,e){const n=e.key,r=n.path.canonicalString();t.oc.get(n)||t.rc.has(r)||(D("SyncEngine","New document in limbo: "+n),t.rc.add(r),Oy(t))}function Oy(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new L(ye.fromString(e)),r=t.lc.next();t.uc.set(r,new lU(n)),t.oc=t.oc.insert(n,r),YI(t.remoteStore,new yi(rr(_y(n.path)),r,2,my.at))}}async function Ml(t,e,n){const r=H(t),i=[],s=[],o=[];r.sc.isEmpty()||(r.sc.forEach((a,l)=>{o.push(r.dc(l,e,n).then(u=>{if(u){r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u.fromCache?"not-current":"current"),i.push(u);const c=ky.Ci(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.nc.Wo(i),await async function(a,l){const u=H(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>I.forEach(l,h=>I.forEach(h.Si,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>I.forEach(h.Di,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!xl(c))throw c;D("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.Ui.get(h),f=d.snapshotVersion,g=d.withLastLimboFreeSnapshotVersion(f);u.Ui=u.Ui.insert(h,g)}}}(r.localStore,s))}async function vU(t,e){const n=H(t);if(!n.currentUser.isEqual(e)){D("SyncEngine","User change. New user:",e.toKey());const r=await qI(n.localStore,e);n.currentUser=e,function(i,s){i.hc.forEach(o=>{o.forEach(a=>{a.reject(new M(C.CANCELLED,s))})}),i.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ml(n,r.ji)}}function _U(t,e){const n=H(t),r=n.uc.get(e);if(r&&r.ec)return Q().add(r.key);{let i=Q();const s=n.ic.get(e);if(!s)return i;for(const o of s){const a=n.sc.get(o);i=i.unionWith(a.view.Qu)}return i}}function wU(t){const e=H(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=sk.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=_U.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=pU.bind(null,e),e.nc.Wo=rU.bind(null,e.eventManager),e.nc._c=iU.bind(null,e.eventManager),e}function EU(t){const e=H(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=mU.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=gU.bind(null,e),e}class CU{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=$h(e.databaseInfo.databaseId),this.sharedClientState=this.mc(e),this.persistence=this.gc(e),await this.persistence.start(),this.localStore=this.yc(e),this.gcScheduler=this.Ic(e,this.localStore),this.indexBackfillerScheduler=this.Tc(e,this.localStore)}Ic(e,n){return null}Tc(e,n){return null}yc(e){return k2(this.persistence,new S2,e.initialUser,this.It)}gc(e){return new C2(Iy.Bs,this.It)}mc(e){return new O2}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class TU{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ww(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=vU.bind(null,this.syncEngine),await J2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new eU}createDatastore(e){const n=$h(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new F2(i));var i;return function(s,o,a,l){return new V2(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>ww(this.syncEngine,a,0),o=yw.C()?new yw:new D2,new j2(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new uU(r,i,s,o,a,l);return u&&(c.fc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=H(e);D("RemoteStore","RemoteStore shutting down."),n._u.add(5),await Dl(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class SU{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ac(this.observer.next,e)}error(e){this.observer.error?this.Ac(this.observer.error,e):nr("Uncaught Error in snapshot listener:",e)}Rc(){this.muted=!0}Ac(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IU{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=It.UNAUTHENTICATED,this.clientId=gI.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{D("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(D("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new M(C.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new gi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Ay(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function kU(t,e){t.asyncQueue.verifyOperationInProgress(),D("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await qI(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function NU(t,e){t.asyncQueue.verifyOperationInProgress();const n=await RU(t);D("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>vw(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>vw(e.remoteStore,s)),t.onlineComponents=e}async function RU(t){return t.offlineComponents||(D("FirestoreClient","Using default OfflineComponentProvider"),await kU(t,new CU)),t.offlineComponents}async function uk(t){return t.onlineComponents||(D("FirestoreClient","Using default OnlineComponentProvider"),await NU(t,new TU)),t.onlineComponents}function xU(t){return uk(t).then(e=>e.syncEngine)}async function Cw(t){const e=await uk(t),n=e.eventManager;return n.onListen=cU.bind(null,e.syncEngine),n.onUnlisten=dU.bind(null,e.syncEngine),n}const Tw=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ck(t,e,n){if(!n)throw new M(C.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function bU(t,e,n,r){if(e===!0&&r===!0)throw new M(C.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Sw(t){if(!L.isDocumentKey(t))throw new M(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Iw(t){if(L.isDocumentKey(t))throw new M(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Dy(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":z()}function vi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new M(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Dy(t);throw new M(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function AU(t,e){if(e<=0)throw new M(C.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new M(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new M(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,bU("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new kw({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new M(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new M(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new kw(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new XF;switch(n.type){case"gapi":const r=n.client;return new e$(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new M(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Tw.get(e);n&&(D("ComponentProvider","Removing Datastore"),Tw.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Or(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Bt(this.firestore,e,this._key)}}class Br{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Br(this.firestore,e,this._query)}}class Or extends Br{constructor(e,n,r){super(e,n,_y(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Bt(this.firestore,null,new L(e))}withConverter(e){return new Or(this.firestore,e,this._path)}}function PU(t,e,...n){if(t=Ie(t),ck("collection","path",e),t instanceof My){const r=ye.fromString(e,...n);return Iw(r),new Or(t,null,r)}{if(!(t instanceof Bt||t instanceof Or))throw new M(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ye.fromString(e,...n));return Iw(r),new Or(t.firestore,null,r)}}function Kp(t,e,...n){if(t=Ie(t),arguments.length===1&&(e=gI.R()),ck("doc","path",e),t instanceof My){const r=ye.fromString(e,...n);return Sw(r),new Bt(t,null,new L(r))}{if(!(t instanceof Bt||t instanceof Or))throw new M(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ye.fromString(e,...n));return Sw(r),new Bt(t.firestore,t instanceof Or?t.converter:null,new L(r))}}function OU(t,e){return t=Ie(t),e=Ie(e),t instanceof Br&&e instanceof Br&&t.firestore===e.firestore&&Al(t._query,e._query)&&t.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DU{constructor(){this.$c=Promise.resolve(),this.Bc=[],this.Lc=!1,this.Uc=[],this.qc=null,this.Kc=!1,this.Gc=!1,this.Qc=[],this.xo=new GI(this,"async_queue_retry"),this.jc=()=>{const n=Qd();n&&D("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.bo()};const e=Qd();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.jc)}get isShuttingDown(){return this.Lc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Wc(),this.zc(e)}enterRestrictedMode(e){if(!this.Lc){this.Lc=!0,this.Gc=e||!1;const n=Qd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.jc)}}enqueue(e){if(this.Wc(),this.Lc)return new Promise(()=>{});const n=new gi;return this.zc(()=>this.Lc&&this.Gc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Bc.push(e),this.Hc()))}async Hc(){if(this.Bc.length!==0){try{await this.Bc[0](),this.Bc.shift(),this.xo.reset()}catch(e){if(!xl(e))throw e;D("AsyncQueue","Operation failed with retryable error: "+e)}this.Bc.length>0&&this.xo.Ao(()=>this.Hc())}}zc(e){const n=this.$c.then(()=>(this.Kc=!0,e().catch(r=>{this.qc=r,this.Kc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw nr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Kc=!1,r))));return this.$c=n,n}enqueueAfterDelay(e,n,r){this.Wc(),this.Qc.indexOf(e)>-1&&(n=0);const i=by.createAndSchedule(this,e,n,r,s=>this.Jc(s));return this.Uc.push(i),i}Wc(){this.qc&&z()}verifyOperationInProgress(){}async Yc(){let e;do e=this.$c,await e;while(e!==this.$c)}Xc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}Zc(e){return this.Yc().then(()=>{this.Uc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Yc()})}ta(e){this.Qc.push(e)}Jc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}function Nw(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Zs extends My{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new DU,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||dk(this),this._firestoreClient.terminate()}}function MU(t,e){const n=typeof t=="object"?t:ig(),r=typeof t=="string"?t:e||"(default)";return co(n,"firestore").getImmediate({identifier:r})}function hk(t){return t._firestoreClient||dk(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function dk(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new h$(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new IU(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Bh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new M(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ct(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new eo(rt.fromBase64String(e))}catch(n){throw new M(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new eo(rt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new M(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new M(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return se(this._lat,e._lat)||se(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LU=/^__.*__$/;class FU{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Gr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Pl(e,this.data,n,this.fieldTransforms)}}class fk{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Gr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function pk(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw z()}}class Fy{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.It=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ea(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get na(){return this.settings.na}sa(e){return new Fy(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ia(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.sa({path:r,ra:!1});return i.oa(e),i}ua(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.sa({path:r,ra:!1});return i.ea(),i}ca(e){return this.sa({path:void 0,ra:!0})}aa(e){return Bc(e,this.settings.methodName,this.settings.ha||!1,this.path,this.settings.la)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ea(){if(this.path)for(let e=0;e<this.path.length;e++)this.oa(this.path.get(e))}oa(e){if(e.length===0)throw this.aa("Document fields must not be empty");if(pk(this.na)&&LU.test(e))throw this.aa('Document fields cannot begin and end with "__"')}}class $U{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=r||$h(e)}fa(e,n,r,i=!1){return new Fy({na:e,methodName:n,la:r,path:ct.emptyPath(),ra:!1,ha:i},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function mk(t){const e=t._freezeSettings(),n=$h(t._databaseId);return new $U(t._databaseId,!!e.ignoreUndefinedProperties,n)}function UU(t,e,n,r,i,s={}){const o=t.fa(s.merge||s.mergeFields?2:0,e,n,i);Uy("Data must be an object, but it was:",o,r);const a=gk(r,o);let l,u;if(s.merge)l=new en(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=Gp(e,h,n);if(!o.contains(d))throw new M(C.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);vk(c,d)||c.push(d)}l=new en(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new FU(new Nt(a),l,u)}class zh extends jh{_toFieldTransform(e){if(e.na!==2)throw e.na===1?e.aa(`${this._methodName}() can only appear at the top level of your update data`):e.aa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof zh}}class $y extends jh{_toFieldTransform(e){return new A$(e.path,new Ja)}isEqual(e){return e instanceof $y}}function VU(t,e,n,r){const i=t.fa(1,e,n);Uy("Data must be an object, but it was:",i,r);const s=[],o=Nt.empty();Wi(r,(l,u)=>{const c=Vy(e,l,n);u=Ie(u);const h=i.ua(c);if(u instanceof zh)s.push(c);else{const d=Hh(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new en(s);return new fk(o,a,i.fieldTransforms)}function BU(t,e,n,r,i,s){const o=t.fa(1,e,n),a=[Gp(e,r,n)],l=[i];if(s.length%2!=0)throw new M(C.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Gp(e,s[d])),l.push(s[d+1]);const u=[],c=Nt.empty();for(let d=a.length-1;d>=0;--d)if(!vk(u,a[d])){const f=a[d];let g=l[d];g=Ie(g);const v=o.ua(f);if(g instanceof zh)u.push(f);else{const E=Hh(g,v);E!=null&&(u.push(f),c.set(f,E))}}const h=new en(u);return new fk(c,h,o.fieldTransforms)}function Hh(t,e){if(yk(t=Ie(t)))return Uy("Unsupported field value:",e,t),gk(t,e);if(t instanceof jh)return function(n,r){if(!pk(r.na))throw r.aa(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.aa(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ra&&e.na!==4)throw e.aa("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=Hh(o,r.ca(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=Ie(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return R$(r.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=De.fromDate(n);return{timestampValue:Uc(r.It,i)}}if(n instanceof De){const i=new De(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Uc(r.It,i)}}if(n instanceof Ly)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof eo)return{bytesValue:BI(r.It,n._byteString)};if(n instanceof Bt){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.aa(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Cy(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.aa(`Unsupported field value: ${Dy(n)}`)}(t,e)}function gk(t,e){const n={};return yI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Wi(t,(r,i)=>{const s=Hh(i,e.ia(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function yk(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof De||t instanceof Ly||t instanceof eo||t instanceof Bt||t instanceof jh)}function Uy(t,e,n){if(!yk(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Dy(n);throw r==="an object"?e.aa(t+" a custom object"):e.aa(t+" "+r)}}function Gp(t,e,n){if((e=Ie(e))instanceof Bh)return e._internalPath;if(typeof e=="string")return Vy(t,e);throw Bc("Field path arguments must be of type string or ",t,!1,void 0,n)}const jU=new RegExp("[~\\*/\\[\\]]");function Vy(t,e,n){if(e.search(jU)>=0)throw Bc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Bh(...e.split("."))._internalPath}catch{throw Bc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Bc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new M(C.INVALID_ARGUMENT,a+t+l)}function vk(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _k{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Bt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new zU(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(By("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class zU extends _k{data(){return super.data()}}function By(t,e){return typeof e=="string"?Vy(t,e):e instanceof Bh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class wk extends _k{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ou(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(By("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ou extends wk{data(e={}){return super.data(e)}}class HU{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new qo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ou(this._firestore,this._userDataWriter,r.key,r,new qo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new M(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new Ou(r._firestore,r._userDataWriter,o.doc.key,o.doc,new qo(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:s++}))}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Ou(r._firestore,r._userDataWriter,o.doc.key,o.doc,new qo(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:WU(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function WU(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return z()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qU(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new M(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ek{}function KU(t,...e){for(const n of e)t=n._apply(t);return t}class GU extends Ek{constructor(e,n){super(),this.wa=e,this.ya=n,this.type="orderBy"}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new M(C.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new M(C.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Ps(i,s);return function(a,l){if(CI(a)===null){const u=TI(a);u!==null&&JU(a,u,l.field)}}(r,o),o}(e._query,this.wa,this.ya);return new Br(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new bl(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function QU(t,e="asc"){const n=e,r=By("orderBy",t);return new GU(r,n)}class YU extends Ek{constructor(e,n,r){super(),this.type=e,this.pa=n,this.Ia=r}_apply(e){return new Br(e.firestore,e.converter,Fc(e._query,this.pa,this.Ia))}}function XU(t){return AU("limit",t),new YU("limit",t,"F")}function JU(t,e,n){if(!n.isEqual(e))throw new M(C.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZU{convertValue(e,n="none"){switch(Li(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ne(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Qs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw z()}}convertObject(e,n){const r={};return Wi(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Ly(Ne(e.latitude),Ne(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=_I(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ga(e));default:return null}}convertTimestamp(e){const n=Ur(e);return new De(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ye.fromString(e);he(WI(r));const i=new Qa(r.get(1),r.get(3)),s=new L(r.popFirst(5));return i.isEqual(n)||nr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eV(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Ck extends ZU{constructor(e){super(),this.firestore=e}convertBytes(e){return new eo(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Bt(this.firestore,null,n)}}function tV(t,e,n,...r){t=vi(t,Bt);const i=vi(t.firestore,Zs),s=mk(i);let o;return o=typeof(e=Ie(e))=="string"||e instanceof Bh?BU(s,"updateDoc",t._key,e,n,r):VU(s,"updateDoc",t._key,e),jy(i,[o.toMutation(t._key,vn.exists(!0))])}function nV(t){return jy(vi(t.firestore,Zs),[new Ey(t._key,vn.none())])}function rV(t,e){const n=vi(t.firestore,Zs),r=Kp(t),i=eV(t.converter,e);return jy(n,[UU(mk(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,vn.exists(!1))]).then(()=>r)}function iV(t,...e){var n,r,i;t=Ie(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Nw(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Nw(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof Bt)u=vi(t.firestore,Zs),c=_y(t._key.path),l={next:h=>{e[o]&&e[o](sV(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=vi(t,Br);u=vi(h.firestore,Zs),c=h._query;const d=new Ck(u);l={next:f=>{e[o]&&e[o](new HU(u,d,h,f))},error:e[o+1],complete:e[o+2]},qU(t._query)}return function(h,d,f,g){const v=new SU(g),E=new sU(d,v,f);return h.asyncQueue.enqueueAndForget(async()=>tU(await Cw(h),E)),()=>{v.Rc(),h.asyncQueue.enqueueAndForget(async()=>nU(await Cw(h),E))}}(hk(u),c,a,l)}function jy(t,e){return function(n,r){const i=new gi;return n.asyncQueue.enqueueAndForget(async()=>fU(await xU(n),r,i)),i.promise}(hk(t),e)}function sV(t,e,n){const r=n.docs.get(e._key),i=new Ck(t);return new wk(t,i,e._key,r,new qo(n.hasPendingWrites,n.fromCache),e.converter)}function oV(){return new $y("serverTimestamp")}(function(t,e=!0){(function(n){yo=n})(Wr),rn(new zt("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new Zs(new JF(n.getProvider("auth-internal")),new n$(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new M(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Qa(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),xe(Q0,"3.4.15",t),xe(Q0,"3.4.15","esm2017")})();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aV="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lV{constructor(e,n,r){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||e.get().then(i=>this.auth=i,()=>{}),this.messaging||n.get().then(i=>this.messaging=i,()=>{}),this.appCheck||r.get().then(i=>this.appCheck=i,()=>{})}async getAuthToken(){if(!!this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(){if(this.appCheck){const e=await this.appCheck.getToken();return e.error?null:e.token}return null}async getContext(){const e=await this.getAuthToken(),n=await this.getMessagingToken(),r=await this.getAppCheckToken();return{authToken:e,messagingToken:n,appCheckToken:r}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rw="us-central1";class uV{constructor(e,n,r,i,s=Rw,o){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new lV(n,r,i),this.cancelAllRequests=new Promise(a=>{this.deleteService=()=>Promise.resolve(a())});try{const a=new URL(s);this.customDomain=a.origin,this.region=Rw}catch{this.customDomain=null,this.region=s}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}const xw="@firebase/functions",bw="0.8.4";/**
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
 */const cV="auth-internal",hV="app-check-internal",dV="messaging-internal";function fV(t,e){const n=(r,{instanceIdentifier:i})=>{const s=r.getProvider("app").getImmediate(),o=r.getProvider(cV),a=r.getProvider(dV),l=r.getProvider(hV);return new uV(s,o,a,l,i,t)};rn(new zt(aV,n,"PUBLIC").setMultipleInstances(!0)),xe(xw,bw,e),xe(xw,bw,"esm2017")}fV(fetch.bind(self));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tk="firebasestorage.googleapis.com",pV="storageBucket",mV=2*60*1e3,gV=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends sn{constructor(e,n){super(Yd(e),`Firebase Storage: ${n} (${Yd(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Pn.prototype)}_codeEquals(e){return Yd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function Yd(t){return"storage/"+t}function yV(){const t="An unknown error occurred, please check the error payload for server response.";return new Pn("unknown",t)}function vV(){return new Pn("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function _V(){return new Pn("canceled","User canceled the upload/download.")}function wV(t){return new Pn("invalid-url","Invalid URL '"+t+"'.")}function EV(t){return new Pn("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function Aw(t){return new Pn("invalid-argument",t)}function Sk(){return new Pn("app-deleted","The Firebase app was deleted.")}function CV(t){return new Pn("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=pn.makeFromUrl(e,n)}catch{return new pn(e,"")}if(r.path==="")return r;throw EV(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(_){_.path.charAt(_.path.length-1)==="/"&&(_.path_=_.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(_){_.path_=decodeURIComponent(_.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),g={bucket:1,path:3},v=n===Tk?"(?:storage.googleapis.com|storage.cloud.google.com)":n,E="([^?#]*)",m=new RegExp(`^https?://${v}/${i}/${E}`,"i"),y=[{regex:a,indices:l,postModify:s},{regex:f,indices:g,postModify:u},{regex:m,indices:{bucket:1,path:2},postModify:u}];for(let _=0;_<y.length;_++){const T=y[_],k=T.regex.exec(e);if(k){const x=k[T.indices.bucket];let A=k[T.indices.path];A||(A=""),r=new pn(x,A),T.postModify(r);break}}if(r==null)throw wV(e);return r}}class TV{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SV(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...E){u||(u=!0,e.apply(null,E))}function h(E){i=setTimeout(()=>{i=null,t(f,l())},E)}function d(){s&&clearTimeout(s)}function f(E,...m){if(u){d();return}if(E){d(),c.call(null,E,...m);return}if(l()||o){d(),c.call(null,E,...m);return}r<64&&(r*=2);let y;a===1?(a=2,y=0):y=(r+Math.random())*1e3,h(y)}let g=!1;function v(E){g||(g=!0,d(),!u&&(i!==null?(E||(a=2),clearTimeout(i),h(0)):E||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,v(!0)},n),v}function IV(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kV(t){return t!==void 0}function Pw(t,e,n,r){if(r<e)throw Aw(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Aw(`Invalid value for '${t}'. Expected ${n} or less.`)}function NV(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var jc;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(jc||(jc={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RV{constructor(e,n,r,i,s,o,a,l,u,c,h){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,f)=>{this.resolve_=d,this.reject_=f,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new cu(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===jc.NO_ERROR,l=s.getStatus();if(!a||this.isRetryStatusCode_(l)){const c=s.getErrorCode()===jc.ABORT;r(!1,new cu(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new cu(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());kV(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=yV();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?Sk():_V();o(l)}else{const l=vV();o(l)}};this.canceled_?n(!1,new cu(!1,null,!0)):this.backoffId_=SV(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&IV(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,s=this.additionalRetryCodes_.indexOf(e)!==-1;return n||i||s}}class cu{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function xV(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function bV(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function AV(t,e){e&&(t["X-Firebase-GMPID"]=e)}function PV(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function OV(t,e,n,r,i,s){const o=NV(t.urlParams),a=t.url+o,l=Object.assign({},t.headers);return AV(l,e),xV(l,n),bV(l,s),PV(l,r),new RV(a,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DV(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function MV(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class zc{constructor(e,n){this._service=e,n instanceof pn?this._location=n:this._location=pn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new zc(e,n)}get root(){const e=new pn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return MV(this._location.path)}get storage(){return this._service}get parent(){const e=DV(this._location.path);if(e===null)return null;const n=new pn(this._location.bucket,e);return new zc(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw CV(e)}}function Ow(t,e){const n=e==null?void 0:e[pV];return n==null?null:pn.makeFromBucketSpec(n,t)}class LV{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=Tk,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=mV,this._maxUploadRetryTime=gV,this._requests=new Set,i!=null?this._bucket=pn.makeFromBucketSpec(i,this._host):this._bucket=Ow(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=pn.makeFromBucketSpec(this._url,e):this._bucket=Ow(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Pw("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Pw("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new zc(this,e)}_makeRequest(e,n,r,i){if(this._deleted)return new TV(Sk());{const s=OV(e,this._appId,r,i,n,this._firebaseVersion);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Dw="@firebase/storage",Mw="0.9.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FV="storage";function $V(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new LV(n,r,i,e,Wr)}function UV(){rn(new zt(FV,$V,"PUBLIC").setMultipleInstances(!0)),xe(Dw,Mw,""),xe(Dw,Mw,"esm2017")}UV();const Ik="@firebase/installations",zy="0.5.12";/**
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
 */const kk=1e4,Nk=`w:${zy}`,Rk="FIS_v2",VV="https://firebaseinstallations.googleapis.com/v1",BV=60*60*1e3,jV="installations",zV="Installations";/**
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
 */const HV={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Fi=new Bi(jV,zV,HV);function xk(t){return t instanceof sn&&t.code.includes("request-failed")}/**
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
 */function bk({projectId:t}){return`${VV}/projects/${t}/installations`}function Ak(t){return{token:t.token,requestStatus:2,expiresIn:qV(t.expiresIn),creationTime:Date.now()}}async function Pk(t,e){const r=(await e.json()).error;return Fi.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Ok({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function WV(t,{refreshToken:e}){const n=Ok(t);return n.append("Authorization",KV(e)),n}async function Dk(t){const e=await t();return e.status>=500&&e.status<600?t():e}function qV(t){return Number(t.replace("s","000"))}function KV(t){return`${Rk} ${t}`}/**
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
 */async function GV({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=bk(t),i=Ok(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:Rk,appId:t.appId,sdkVersion:Nk},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await Dk(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Ak(u.authToken)}}else throw await Pk("Create Installation",l)}/**
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
 */function Mk(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function QV(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const YV=/^[cdef][\w-]{21}$/,Qp="";function XV(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=JV(t);return YV.test(n)?n:Qp}catch{return Qp}}function JV(t){return QV(t).substr(0,22)}/**
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
 */function Wh(t){return`${t.appName}!${t.appId}`}/**
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
 */const Lk=new Map;function Fk(t,e){const n=Wh(t);$k(n,e),ZV(n,e)}function $k(t,e){const n=Lk.get(t);if(!!n)for(const r of n)r(e)}function ZV(t,e){const n=eB();n&&n.postMessage({key:t,fid:e}),tB()}let hi=null;function eB(){return!hi&&"BroadcastChannel"in self&&(hi=new BroadcastChannel("[Firebase] FID Change"),hi.onmessage=t=>{$k(t.data.key,t.data.fid)}),hi}function tB(){Lk.size===0&&hi&&(hi.close(),hi=null)}/**
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
 */const nB="firebase-installations-database",rB=1,$i="firebase-installations-store";let Xd=null;function Hy(){return Xd||(Xd=CT(nB,rB,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore($i)}}})),Xd}async function Hc(t,e){const n=Wh(t),i=(await Hy()).transaction($i,"readwrite"),s=i.objectStore($i),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&Fk(t,e.fid),e}async function Uk(t){const e=Wh(t),r=(await Hy()).transaction($i,"readwrite");await r.objectStore($i).delete(e),await r.done}async function qh(t,e){const n=Wh(t),i=(await Hy()).transaction($i,"readwrite"),s=i.objectStore($i),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&Fk(t,a.fid),a}/**
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
 */async function Wy(t){let e;const n=await qh(t.appConfig,r=>{const i=iB(r),s=sB(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Qp?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function iB(t){const e=t||{fid:XV(),registrationStatus:0};return Vk(e)}function sB(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Fi.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=oB(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:aB(t)}:{installationEntry:e}}async function oB(t,e){try{const n=await GV(t,e);return Hc(t.appConfig,n)}catch(n){throw xk(n)&&n.customData.serverCode===409?await Uk(t.appConfig):await Hc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function aB(t){let e=await Lw(t.appConfig);for(;e.registrationStatus===1;)await Mk(100),e=await Lw(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Wy(t);return r||n}return e}function Lw(t){return qh(t,e=>{if(!e)throw Fi.create("installation-not-found");return Vk(e)})}function Vk(t){return lB(t)?{fid:t.fid,registrationStatus:0}:t}function lB(t){return t.registrationStatus===1&&t.registrationTime+kk<Date.now()}/**
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
 */async function uB({appConfig:t,heartbeatServiceProvider:e},n){const r=cB(t,n),i=WV(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:Nk,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await Dk(()=>fetch(r,a));if(l.ok){const u=await l.json();return Ak(u)}else throw await Pk("Generate Auth Token",l)}function cB(t,{fid:e}){return`${bk(t)}/${e}/authTokens:generate`}/**
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
 */async function qy(t,e=!1){let n;const r=await qh(t.appConfig,s=>{if(!Bk(s))throw Fi.create("not-registered");const o=s.authToken;if(!e&&fB(o))return s;if(o.requestStatus===1)return n=hB(t,e),s;{if(!navigator.onLine)throw Fi.create("app-offline");const a=mB(s);return n=dB(t,a),a}});return n?await n:r.authToken}async function hB(t,e){let n=await Fw(t.appConfig);for(;n.authToken.requestStatus===1;)await Mk(100),n=await Fw(t.appConfig);const r=n.authToken;return r.requestStatus===0?qy(t,e):r}function Fw(t){return qh(t,e=>{if(!Bk(e))throw Fi.create("not-registered");const n=e.authToken;return gB(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function dB(t,e){try{const n=await uB(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Hc(t.appConfig,r),n}catch(n){if(xk(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Uk(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Hc(t.appConfig,r)}throw n}}function Bk(t){return t!==void 0&&t.registrationStatus===2}function fB(t){return t.requestStatus===2&&!pB(t)}function pB(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+BV}function mB(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function gB(t){return t.requestStatus===1&&t.requestTime+kk<Date.now()}/**
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
 */async function yB(t){const e=t,{installationEntry:n,registrationPromise:r}=await Wy(e);return r?r.catch(console.error):qy(e).catch(console.error),n.fid}/**
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
 */async function vB(t,e=!1){const n=t;return await _B(n),(await qy(n,e)).token}async function _B(t){const{registrationPromise:e}=await Wy(t);e&&await e}/**
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
 */function wB(t){if(!t||!t.options)throw Jd("App Configuration");if(!t.name)throw Jd("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Jd(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Jd(t){return Fi.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jk="installations",EB="installations-internal",CB=t=>{const e=t.getProvider("app").getImmediate(),n=wB(e),r=co(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},TB=t=>{const e=t.getProvider("app").getImmediate(),n=co(e,jk).getImmediate();return{getId:()=>yB(n),getToken:i=>vB(n,i)}};function SB(){rn(new zt(jk,CB,"PUBLIC")),rn(new zt(EB,TB,"PRIVATE"))}SB();xe(Ik,zy);xe(Ik,zy,"esm2017");const Zd="@firebase/remote-config",$w="0.3.11";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IB="remote-config";/**
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
 */const kB={["registration-window"]:"Undefined window object. This SDK only supports usage in a browser environment.",["registration-project-id"]:"Undefined project identifier. Check Firebase app initialization.",["registration-api-key"]:"Undefined API key. Check Firebase app initialization.",["registration-app-id"]:"Undefined app identifier. Check Firebase app initialization.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}.",["fetch-client-network"]:"Fetch client failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-timeout"]:'The config fetch request timed out.  Configure timeout using "fetchTimeoutMillis" SDK setting.',["fetch-throttle"]:'The config fetch request timed out while in an exponential backoff state. Configure timeout using "fetchTimeoutMillis" SDK setting. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.',["fetch-client-parse"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["indexed-db-unavailable"]:"Indexed DB is not supported by current browser"},Rt=new Bi("remoteconfig","Remote Config",kB);function NB(t){const e=Ie(t);return e._initializePromise||(e._initializePromise=e._storageCache.loadFromStorage().then(()=>{e._isInitializationComplete=!0})),e._initializePromise}/**
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
 */class RB{constructor(e,n,r,i){this.client=e,this.storage=n,this.storageCache=r,this.logger=i}isCachedDataFresh(e,n){if(!n)return this.logger.debug("Config fetch cache check. Cache unpopulated."),!1;const r=Date.now()-n,i=r<=e;return this.logger.debug(`Config fetch cache check. Cache age millis: ${r}. Cache max age millis (minimumFetchIntervalMillis setting): ${e}. Is cache hit: ${i}.`),i}async fetch(e){const[n,r]=await Promise.all([this.storage.getLastSuccessfulFetchTimestampMillis(),this.storage.getLastSuccessfulFetchResponse()]);if(r&&this.isCachedDataFresh(e.cacheMaxAgeMillis,n))return r;e.eTag=r&&r.eTag;const i=await this.client.fetch(e),s=[this.storageCache.setLastSuccessfulFetchTimestampMillis(Date.now())];return i.status===200&&s.push(this.storage.setLastSuccessfulFetchResponse(i)),await Promise.all(s),i}}/**
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
 */function xB(t=navigator){return t.languages&&t.languages[0]||t.language}/**
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
 */class bB{constructor(e,n,r,i,s,o){this.firebaseInstallations=e,this.sdkVersion=n,this.namespace=r,this.projectId=i,this.apiKey=s,this.appId=o}async fetch(e){var n,r,i;const[s,o]=await Promise.all([this.firebaseInstallations.getId(),this.firebaseInstallations.getToken()]),l=`${window.FIREBASE_REMOTE_CONFIG_URL_BASE||"https://firebaseremoteconfig.googleapis.com"}/v1/projects/${this.projectId}/namespaces/${this.namespace}:fetch?key=${this.apiKey}`,u={"Content-Type":"application/json","Content-Encoding":"gzip","If-None-Match":e.eTag||"*"},c={sdk_version:this.sdkVersion,app_instance_id:s,app_instance_id_token:o,app_id:this.appId,language_code:xB()},h={method:"POST",headers:u,body:JSON.stringify(c)},d=fetch(l,h),f=new Promise((y,_)=>{e.signal.addEventListener(()=>{const T=new Error("The operation was aborted.");T.name="AbortError",_(T)})});let g;try{await Promise.race([d,f]),g=await d}catch(y){let _="fetch-client-network";throw((n=y)===null||n===void 0?void 0:n.name)==="AbortError"&&(_="fetch-timeout"),Rt.create(_,{originalErrorMessage:(r=y)===null||r===void 0?void 0:r.message})}let v=g.status;const E=g.headers.get("ETag")||void 0;let m,p;if(g.status===200){let y;try{y=await g.json()}catch(_){throw Rt.create("fetch-client-parse",{originalErrorMessage:(i=_)===null||i===void 0?void 0:i.message})}m=y.entries,p=y.state}if(p==="INSTANCE_STATE_UNSPECIFIED"?v=500:p==="NO_CHANGE"?v=304:(p==="NO_TEMPLATE"||p==="EMPTY_CONFIG")&&(m={}),v!==304&&v!==200)throw Rt.create("fetch-status",{httpStatus:v});return{status:v,eTag:E,config:m}}}/**
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
 */function AB(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Rt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function PB(t){if(!(t instanceof sn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class OB{constructor(e,n){this.client=e,this.storage=n}async fetch(e){const n=await this.storage.getThrottleMetadata()||{backoffCount:0,throttleEndTimeMillis:Date.now()};return this.attemptFetch(e,n)}async attemptFetch(e,{throttleEndTimeMillis:n,backoffCount:r}){await AB(e.signal,n);try{const i=await this.client.fetch(e);return await this.storage.deleteThrottleMetadata(),i}catch(i){if(!PB(i))throw i;const s={throttleEndTimeMillis:Date.now()+Mb(r),backoffCount:r+1};return await this.storage.setThrottleMetadata(s),this.attemptFetch(e,s)}}}/**
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
 */const DB=60*1e3,MB=12*60*60*1e3;class LB{constructor(e,n,r,i,s){this.app=e,this._client=n,this._storageCache=r,this._storage=i,this._logger=s,this._isInitializationComplete=!1,this.settings={fetchTimeoutMillis:DB,minimumFetchIntervalMillis:MB},this.defaultConfig={}}get fetchTimeMillis(){return this._storageCache.getLastSuccessfulFetchTimestampMillis()||-1}get lastFetchStatus(){return this._storageCache.getLastFetchStatus()||"no-fetch-yet"}}/**
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
 */function Du(t,e){var n;const r=t.target.error||void 0;return Rt.create(e,{originalErrorMessage:r&&((n=r)===null||n===void 0?void 0:n.message)})}const ti="app_namespace_store",FB="firebase_remote_config",$B=1;function UB(){return new Promise((t,e)=>{var n;try{const r=indexedDB.open(FB,$B);r.onerror=i=>{e(Du(i,"storage-open"))},r.onsuccess=i=>{t(i.target.result)},r.onupgradeneeded=i=>{const s=i.target.result;switch(i.oldVersion){case 0:s.createObjectStore(ti,{keyPath:"compositeKey"})}}}catch(r){e(Rt.create("storage-open",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message}))}})}class VB{constructor(e,n,r,i=UB()){this.appId=e,this.appName=n,this.namespace=r,this.openDbPromise=i}getLastFetchStatus(){return this.get("last_fetch_status")}setLastFetchStatus(e){return this.set("last_fetch_status",e)}getLastSuccessfulFetchTimestampMillis(){return this.get("last_successful_fetch_timestamp_millis")}setLastSuccessfulFetchTimestampMillis(e){return this.set("last_successful_fetch_timestamp_millis",e)}getLastSuccessfulFetchResponse(){return this.get("last_successful_fetch_response")}setLastSuccessfulFetchResponse(e){return this.set("last_successful_fetch_response",e)}getActiveConfig(){return this.get("active_config")}setActiveConfig(e){return this.set("active_config",e)}getActiveConfigEtag(){return this.get("active_config_etag")}setActiveConfigEtag(e){return this.set("active_config_etag",e)}getThrottleMetadata(){return this.get("throttle_metadata")}setThrottleMetadata(e){return this.set("throttle_metadata",e)}deleteThrottleMetadata(){return this.delete("throttle_metadata")}async get(e){const n=await this.openDbPromise;return new Promise((r,i)=>{var s;const a=n.transaction([ti],"readonly").objectStore(ti),l=this.createCompositeKey(e);try{const u=a.get(l);u.onerror=c=>{i(Du(c,"storage-get"))},u.onsuccess=c=>{const h=c.target.result;r(h?h.value:void 0)}}catch(u){i(Rt.create("storage-get",{originalErrorMessage:(s=u)===null||s===void 0?void 0:s.message}))}})}async set(e,n){const r=await this.openDbPromise;return new Promise((i,s)=>{var o;const l=r.transaction([ti],"readwrite").objectStore(ti),u=this.createCompositeKey(e);try{const c=l.put({compositeKey:u,value:n});c.onerror=h=>{s(Du(h,"storage-set"))},c.onsuccess=()=>{i()}}catch(c){s(Rt.create("storage-set",{originalErrorMessage:(o=c)===null||o===void 0?void 0:o.message}))}})}async delete(e){const n=await this.openDbPromise;return new Promise((r,i)=>{var s;const a=n.transaction([ti],"readwrite").objectStore(ti),l=this.createCompositeKey(e);try{const u=a.delete(l);u.onerror=c=>{i(Du(c,"storage-delete"))},u.onsuccess=()=>{r()}}catch(u){i(Rt.create("storage-delete",{originalErrorMessage:(s=u)===null||s===void 0?void 0:s.message}))}})}createCompositeKey(e){return[this.appId,this.appName,this.namespace,e].join()}}/**
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
 */class BB{constructor(e){this.storage=e}getLastFetchStatus(){return this.lastFetchStatus}getLastSuccessfulFetchTimestampMillis(){return this.lastSuccessfulFetchTimestampMillis}getActiveConfig(){return this.activeConfig}async loadFromStorage(){const e=this.storage.getLastFetchStatus(),n=this.storage.getLastSuccessfulFetchTimestampMillis(),r=this.storage.getActiveConfig(),i=await e;i&&(this.lastFetchStatus=i);const s=await n;s&&(this.lastSuccessfulFetchTimestampMillis=s);const o=await r;o&&(this.activeConfig=o)}setLastFetchStatus(e){return this.lastFetchStatus=e,this.storage.setLastFetchStatus(e)}setLastSuccessfulFetchTimestampMillis(e){return this.lastSuccessfulFetchTimestampMillis=e,this.storage.setLastSuccessfulFetchTimestampMillis(e)}setActiveConfig(e){return this.activeConfig=e,this.storage.setActiveConfig(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jB(){rn(new zt(IB,t,"PUBLIC").setMultipleInstances(!0)),xe(Zd,$w),xe(Zd,$w,"esm2017");function t(e,{instanceIdentifier:n}){const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();if(typeof window>"u")throw Rt.create("registration-window");if(!yT())throw Rt.create("indexed-db-unavailable");const{projectId:s,apiKey:o,appId:a}=r.options;if(!s)throw Rt.create("registration-project-id");if(!o)throw Rt.create("registration-api-key");if(!a)throw Rt.create("registration-app-id");n=n||"firebase";const l=new VB(a,r.name,n),u=new BB(l),c=new ll(Zd);c.logLevel=Z.ERROR;const h=new bB(i,Wr,n,s,o,a),d=new OB(h,l),f=new RB(d,l,u,c),g=new LB(r,f,u,l,c);return NB(g),g}}jB();var Kh={exports:{}},Gh={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zB=w.exports,HB=Symbol.for("react.element"),WB=Symbol.for("react.fragment"),qB=Object.prototype.hasOwnProperty,KB=zB.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,GB={key:!0,ref:!0,__self:!0,__source:!0};function zk(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)qB.call(e,r)&&!GB.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:HB,type:t,key:s,ref:o,props:i,_owner:KB.current}}Gh.Fragment=WB;Gh.jsx=zk;Gh.jsxs=zk;(function(t){t.exports=Gh})(Kh);const sr=Kh.exports.Fragment,R=Kh.exports.jsx,vt=Kh.exports.jsxs;var Yp=function(t,e){return Yp=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])},Yp(t,e)};function ur(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Yp(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}function QB(t,e,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(c){try{u(r.next(c))}catch(h){o(h)}}function l(c){try{u(r.throw(c))}catch(h){o(h)}}function u(c){c.done?s(c.value):i(c.value).then(a,l)}u((r=r.apply(t,e||[])).next())})}function Hk(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(u){return function(c){return l([u,c])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=u[0]&2?i.return:u[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,u[1])).done)return s;switch(i=0,s&&(u=[u[0]&2,s.value]),u[0]){case 0:case 1:s=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!s||u[1]>s[0]&&u[1]<s[3])){n.label=u[1];break}if(u[0]===6&&n.label<s[1]){n.label=s[1],s=u;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(u);break}s[2]&&n.ops.pop(),n.trys.pop();continue}u=e.call(t,n)}catch(c){u=[6,c],i=0}finally{r=s=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}function to(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function no(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),i,s=[],o;try{for(;(e===void 0||e-- >0)&&!(i=r.next()).done;)s.push(i.value)}catch(a){o={error:a}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(o)throw o.error}}return s}function ro(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}function Ds(t){return this instanceof Ds?(this.v=t,this):new Ds(t)}function YB(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(t,e||[]),i,s=[];return i={},o("next"),o("throw"),o("return"),i[Symbol.asyncIterator]=function(){return this},i;function o(d){r[d]&&(i[d]=function(f){return new Promise(function(g,v){s.push([d,f,g,v])>1||a(d,f)})})}function a(d,f){try{l(r[d](f))}catch(g){h(s[0][3],g)}}function l(d){d.value instanceof Ds?Promise.resolve(d.value.v).then(u,c):h(s[0][2],d)}function u(d){a("next",d)}function c(d){a("throw",d)}function h(d,f){d(f),s.shift(),s.length&&a(s[0][0],s[0][1])}}function XB(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=t[Symbol.asyncIterator],n;return e?e.call(t):(t=typeof to=="function"?to(t):t[Symbol.iterator](),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(s){n[s]=t[s]&&function(o){return new Promise(function(a,l){o=t[s](o),i(a,l,o.done,o.value)})}}function i(s,o,a,l){Promise.resolve(l).then(function(u){s({value:u,done:a})},o)}}function Le(t){return typeof t=="function"}function Ky(t){var e=function(r){Error.call(r),r.stack=new Error().stack},n=t(e);return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var ef=Ky(function(t){return function(e){t(this),this.message=e?e.length+` errors occurred during unsubscription:
`+e.map(function(n,r){return r+1+") "+n.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=e}});function Wc(t,e){if(t){var n=t.indexOf(e);0<=n&&t.splice(n,1)}}var Ll=function(){function t(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}return t.prototype.unsubscribe=function(){var e,n,r,i,s;if(!this.closed){this.closed=!0;var o=this._parentage;if(o)if(this._parentage=null,Array.isArray(o))try{for(var a=to(o),l=a.next();!l.done;l=a.next()){var u=l.value;u.remove(this)}}catch(v){e={error:v}}finally{try{l&&!l.done&&(n=a.return)&&n.call(a)}finally{if(e)throw e.error}}else o.remove(this);var c=this.initialTeardown;if(Le(c))try{c()}catch(v){s=v instanceof ef?v.errors:[v]}var h=this._finalizers;if(h){this._finalizers=null;try{for(var d=to(h),f=d.next();!f.done;f=d.next()){var g=f.value;try{Uw(g)}catch(v){s=s!=null?s:[],v instanceof ef?s=ro(ro([],no(s)),no(v.errors)):s.push(v)}}}catch(v){r={error:v}}finally{try{f&&!f.done&&(i=d.return)&&i.call(d)}finally{if(r)throw r.error}}}if(s)throw new ef(s)}},t.prototype.add=function(e){var n;if(e&&e!==this)if(this.closed)Uw(e);else{if(e instanceof t){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(e)}},t.prototype._hasParent=function(e){var n=this._parentage;return n===e||Array.isArray(n)&&n.includes(e)},t.prototype._addParent=function(e){var n=this._parentage;this._parentage=Array.isArray(n)?(n.push(e),n):n?[n,e]:e},t.prototype._removeParent=function(e){var n=this._parentage;n===e?this._parentage=null:Array.isArray(n)&&Wc(n,e)},t.prototype.remove=function(e){var n=this._finalizers;n&&Wc(n,e),e instanceof t&&e._removeParent(this)},t.EMPTY=function(){var e=new t;return e.closed=!0,e}(),t}(),Wk=Ll.EMPTY;function qk(t){return t instanceof Ll||t&&"closed"in t&&Le(t.remove)&&Le(t.add)&&Le(t.unsubscribe)}function Uw(t){Le(t)?t():t.unsubscribe()}var Kk={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},JB={setTimeout:function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];return setTimeout.apply(void 0,ro([t,e],no(n)))},clearTimeout:function(t){return clearTimeout(t)},delegate:void 0};function Gk(t){JB.setTimeout(function(){throw t})}function Vw(){}function Mu(t){t()}var Gy=function(t){ur(e,t);function e(n){var r=t.call(this)||this;return r.isStopped=!1,n?(r.destination=n,qk(n)&&n.add(r)):r.destination=nj,r}return e.create=function(n,r,i){return new tl(n,r,i)},e.prototype.next=function(n){this.isStopped||this._next(n)},e.prototype.error=function(n){this.isStopped||(this.isStopped=!0,this._error(n))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(n){this.destination.next(n)},e.prototype._error=function(n){try{this.destination.error(n)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e}(Ll),ZB=Function.prototype.bind;function tf(t,e){return ZB.call(t,e)}var ej=function(){function t(e){this.partialObserver=e}return t.prototype.next=function(e){var n=this.partialObserver;if(n.next)try{n.next(e)}catch(r){hu(r)}},t.prototype.error=function(e){var n=this.partialObserver;if(n.error)try{n.error(e)}catch(r){hu(r)}else hu(e)},t.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(n){hu(n)}},t}(),tl=function(t){ur(e,t);function e(n,r,i){var s=t.call(this)||this,o;if(Le(n)||!n)o={next:n!=null?n:void 0,error:r!=null?r:void 0,complete:i!=null?i:void 0};else{var a;s&&Kk.useDeprecatedNextContext?(a=Object.create(n),a.unsubscribe=function(){return s.unsubscribe()},o={next:n.next&&tf(n.next,a),error:n.error&&tf(n.error,a),complete:n.complete&&tf(n.complete,a)}):o=n}return s.destination=new ej(o),s}return e}(Gy);function hu(t){Gk(t)}function tj(t){throw t}var nj={closed:!0,next:Vw,error:tj,complete:Vw},Qy=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function Qk(t){return t}function rj(t){return t.length===0?Qk:t.length===1?t[0]:function(e){return t.reduce(function(n,r){return r(n)},e)}}var _t=function(){function t(e){e&&(this._subscribe=e)}return t.prototype.lift=function(e){var n=new t;return n.source=this,n.operator=e,n},t.prototype.subscribe=function(e,n,r){var i=this,s=sj(e)?e:new tl(e,n,r);return Mu(function(){var o=i,a=o.operator,l=o.source;s.add(a?a.call(s,l):l?i._subscribe(s):i._trySubscribe(s))}),s},t.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(n){e.error(n)}},t.prototype.forEach=function(e,n){var r=this;return n=Bw(n),new n(function(i,s){var o=new tl({next:function(a){try{e(a)}catch(l){s(l),o.unsubscribe()}},error:s,complete:i});r.subscribe(o)})},t.prototype._subscribe=function(e){var n;return(n=this.source)===null||n===void 0?void 0:n.subscribe(e)},t.prototype[Qy]=function(){return this},t.prototype.pipe=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return rj(e)(this)},t.prototype.toPromise=function(e){var n=this;return e=Bw(e),new e(function(r,i){var s;n.subscribe(function(o){return s=o},function(o){return i(o)},function(){return r(s)})})},t.create=function(e){return new t(e)},t}();function Bw(t){var e;return(e=t!=null?t:Kk.Promise)!==null&&e!==void 0?e:Promise}function ij(t){return t&&Le(t.next)&&Le(t.error)&&Le(t.complete)}function sj(t){return t&&t instanceof Gy||ij(t)&&qk(t)}function oj(t){return Le(t==null?void 0:t.lift)}function Ki(t){return function(e){if(oj(e))return e.lift(function(n){try{return t(n,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function io(t,e,n,r,i){return new aj(t,e,n,r,i)}var aj=function(t){ur(e,t);function e(n,r,i,s,o,a){var l=t.call(this,n)||this;return l.onFinalize=o,l.shouldUnsubscribe=a,l._next=r?function(u){try{r(u)}catch(c){n.error(c)}}:t.prototype._next,l._error=s?function(u){try{s(u)}catch(c){n.error(c)}finally{this.unsubscribe()}}:t.prototype._error,l._complete=i?function(){try{i()}catch(u){n.error(u)}finally{this.unsubscribe()}}:t.prototype._complete,l}return e.prototype.unsubscribe=function(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var r=this.closed;t.prototype.unsubscribe.call(this),!r&&((n=this.onFinalize)===null||n===void 0||n.call(this))}},e}(Gy),lj=Ky(function(t){return function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),Qh=function(t){ur(e,t);function e(){var n=t.call(this)||this;return n.closed=!1,n.currentObservers=null,n.observers=[],n.isStopped=!1,n.hasError=!1,n.thrownError=null,n}return e.prototype.lift=function(n){var r=new jw(this,this);return r.operator=n,r},e.prototype._throwIfClosed=function(){if(this.closed)throw new lj},e.prototype.next=function(n){var r=this;Mu(function(){var i,s;if(r._throwIfClosed(),!r.isStopped){r.currentObservers||(r.currentObservers=Array.from(r.observers));try{for(var o=to(r.currentObservers),a=o.next();!a.done;a=o.next()){var l=a.value;l.next(n)}}catch(u){i={error:u}}finally{try{a&&!a.done&&(s=o.return)&&s.call(o)}finally{if(i)throw i.error}}}})},e.prototype.error=function(n){var r=this;Mu(function(){if(r._throwIfClosed(),!r.isStopped){r.hasError=r.isStopped=!0,r.thrownError=n;for(var i=r.observers;i.length;)i.shift().error(n)}})},e.prototype.complete=function(){var n=this;Mu(function(){if(n._throwIfClosed(),!n.isStopped){n.isStopped=!0;for(var r=n.observers;r.length;)r.shift().complete()}})},e.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(e.prototype,"observed",{get:function(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0},enumerable:!1,configurable:!0}),e.prototype._trySubscribe=function(n){return this._throwIfClosed(),t.prototype._trySubscribe.call(this,n)},e.prototype._subscribe=function(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)},e.prototype._innerSubscribe=function(n){var r=this,i=this,s=i.hasError,o=i.isStopped,a=i.observers;return s||o?Wk:(this.currentObservers=null,a.push(n),new Ll(function(){r.currentObservers=null,Wc(a,n)}))},e.prototype._checkFinalizedStatuses=function(n){var r=this,i=r.hasError,s=r.thrownError,o=r.isStopped;i?n.error(s):o&&n.complete()},e.prototype.asObservable=function(){var n=new _t;return n.source=this,n},e.create=function(n,r){return new jw(n,r)},e}(_t),jw=function(t){ur(e,t);function e(n,r){var i=t.call(this)||this;return i.destination=n,i.source=r,i}return e.prototype.next=function(n){var r,i;(i=(r=this.destination)===null||r===void 0?void 0:r.next)===null||i===void 0||i.call(r,n)},e.prototype.error=function(n){var r,i;(i=(r=this.destination)===null||r===void 0?void 0:r.error)===null||i===void 0||i.call(r,n)},e.prototype.complete=function(){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||r===void 0||r.call(n)},e.prototype._subscribe=function(n){var r,i;return(i=(r=this.source)===null||r===void 0?void 0:r.subscribe(n))!==null&&i!==void 0?i:Wk},e}(Qh),Yy={now:function(){return(Yy.delegate||Date).now()},delegate:void 0},uj=function(t){ur(e,t);function e(n,r,i){n===void 0&&(n=1/0),r===void 0&&(r=1/0),i===void 0&&(i=Yy);var s=t.call(this)||this;return s._bufferSize=n,s._windowTime=r,s._timestampProvider=i,s._buffer=[],s._infiniteTimeWindow=!0,s._infiniteTimeWindow=r===1/0,s._bufferSize=Math.max(1,n),s._windowTime=Math.max(1,r),s}return e.prototype.next=function(n){var r=this,i=r.isStopped,s=r._buffer,o=r._infiniteTimeWindow,a=r._timestampProvider,l=r._windowTime;i||(s.push(n),!o&&s.push(a.now()+l)),this._trimBuffer(),t.prototype.next.call(this,n)},e.prototype._subscribe=function(n){this._throwIfClosed(),this._trimBuffer();for(var r=this._innerSubscribe(n),i=this,s=i._infiniteTimeWindow,o=i._buffer,a=o.slice(),l=0;l<a.length&&!n.closed;l+=s?1:2)n.next(a[l]);return this._checkFinalizedStatuses(n),r},e.prototype._trimBuffer=function(){var n=this,r=n._bufferSize,i=n._timestampProvider,s=n._buffer,o=n._infiniteTimeWindow,a=(o?1:2)*r;if(r<1/0&&a<s.length&&s.splice(0,s.length-a),!o){for(var l=i.now(),u=0,c=1;c<s.length&&s[c]<=l;c+=2)u=c;u&&s.splice(0,u+1)}},e}(Qh),cj=function(t){ur(e,t);function e(n,r){return t.call(this)||this}return e.prototype.schedule=function(n,r){return this},e}(Ll),Xp={setInterval:function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i=Xp.delegate;return i!=null&&i.setInterval?i.setInterval.apply(i,ro([t,e],no(n))):setInterval.apply(void 0,ro([t,e],no(n)))},clearInterval:function(t){return clearInterval(t)},delegate:void 0},hj=function(t){ur(e,t);function e(n,r){var i=t.call(this,n,r)||this;return i.scheduler=n,i.work=r,i.pending=!1,i}return e.prototype.schedule=function(n,r){if(r===void 0&&(r=0),this.closed)return this;this.state=n;var i=this.id,s=this.scheduler;return i!=null&&(this.id=this.recycleAsyncId(s,i,r)),this.pending=!0,this.delay=r,this.id=this.id||this.requestAsyncId(s,this.id,r),this},e.prototype.requestAsyncId=function(n,r,i){return i===void 0&&(i=0),Xp.setInterval(n.flush.bind(n,this),i)},e.prototype.recycleAsyncId=function(n,r,i){if(i===void 0&&(i=0),i!=null&&this.delay===i&&this.pending===!1)return r;Xp.clearInterval(r)},e.prototype.execute=function(n,r){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var i=this._execute(n,r);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},e.prototype._execute=function(n,r){var i=!1,s;try{this.work(n)}catch(o){i=!0,s=o||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),s},e.prototype.unsubscribe=function(){if(!this.closed){var n=this,r=n.id,i=n.scheduler,s=i.actions;this.work=this.state=this.scheduler=null,this.pending=!1,Wc(s,this),r!=null&&(this.id=this.recycleAsyncId(i,r,null)),this.delay=null,t.prototype.unsubscribe.call(this)}},e}(cj),zw=function(){function t(e,n){n===void 0&&(n=t.now),this.schedulerActionCtor=e,this.now=n}return t.prototype.schedule=function(e,n,r){return n===void 0&&(n=0),new this.schedulerActionCtor(this,e).schedule(r,n)},t.now=Yy.now,t}(),dj=function(t){ur(e,t);function e(n,r){r===void 0&&(r=zw.now);var i=t.call(this,n,r)||this;return i.actions=[],i._active=!1,i._scheduled=void 0,i}return e.prototype.flush=function(n){var r=this.actions;if(this._active){r.push(n);return}var i;this._active=!0;do if(i=n.execute(n.state,n.delay))break;while(n=r.shift());if(this._active=!1,i){for(;n=r.shift();)n.unsubscribe();throw i}},e}(zw);new dj(hj);var fj=new _t(function(t){return t.complete()});function pj(t){return t?mj(t):fj}function mj(t){return new _t(function(e){return t.schedule(function(){return e.complete()})})}function gj(t){return t&&Le(t.schedule)}function yj(t){return t[t.length-1]}function vj(t){return gj(yj(t))?t.pop():void 0}var Yk=function(t){return t&&typeof t.length=="number"&&typeof t!="function"};function Xk(t){return Le(t==null?void 0:t.then)}function Jk(t){return Le(t[Qy])}function Zk(t){return Symbol.asyncIterator&&Le(t==null?void 0:t[Symbol.asyncIterator])}function eN(t){return new TypeError("You provided "+(t!==null&&typeof t=="object"?"an invalid object":"'"+t+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function _j(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var tN=_j();function nN(t){return Le(t==null?void 0:t[tN])}function rN(t){return YB(this,arguments,function(){var e,n,r,i;return Hk(this,function(s){switch(s.label){case 0:e=t.getReader(),s.label=1;case 1:s.trys.push([1,,9,10]),s.label=2;case 2:return[4,Ds(e.read())];case 3:return n=s.sent(),r=n.value,i=n.done,i?[4,Ds(void 0)]:[3,5];case 4:return[2,s.sent()];case 5:return[4,Ds(r)];case 6:return[4,s.sent()];case 7:return s.sent(),[3,2];case 8:return[3,10];case 9:return e.releaseLock(),[7];case 10:return[2]}})})}function iN(t){return Le(t==null?void 0:t.getReader)}function wo(t){if(t instanceof _t)return t;if(t!=null){if(Jk(t))return wj(t);if(Yk(t))return Ej(t);if(Xk(t))return Cj(t);if(Zk(t))return sN(t);if(nN(t))return Tj(t);if(iN(t))return Sj(t)}throw eN(t)}function wj(t){return new _t(function(e){var n=t[Qy]();if(Le(n.subscribe))return n.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function Ej(t){return new _t(function(e){for(var n=0;n<t.length&&!e.closed;n++)e.next(t[n]);e.complete()})}function Cj(t){return new _t(function(e){t.then(function(n){e.closed||(e.next(n),e.complete())},function(n){return e.error(n)}).then(null,Gk)})}function Tj(t){return new _t(function(e){var n,r;try{for(var i=to(t),s=i.next();!s.done;s=i.next()){var o=s.value;if(e.next(o),e.closed)return}}catch(a){n={error:a}}finally{try{s&&!s.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}e.complete()})}function sN(t){return new _t(function(e){Ij(t,e).catch(function(n){return e.error(n)})})}function Sj(t){return sN(rN(t))}function Ij(t,e){var n,r,i,s;return QB(this,void 0,void 0,function(){var o,a;return Hk(this,function(l){switch(l.label){case 0:l.trys.push([0,5,6,11]),n=XB(t),l.label=1;case 1:return[4,n.next()];case 2:if(r=l.sent(),!!r.done)return[3,4];if(o=r.value,e.next(o),e.closed)return[2];l.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return a=l.sent(),i={error:a},[3,11];case 6:return l.trys.push([6,,9,10]),r&&!r.done&&(s=n.return)?[4,s.call(n)]:[3,8];case 7:l.sent(),l.label=8;case 8:return[3,10];case 9:if(i)throw i.error;return[7];case 10:return[7];case 11:return e.complete(),[2]}})})}function _i(t,e,n,r,i){r===void 0&&(r=0),i===void 0&&(i=!1);var s=e.schedule(function(){n(),i?t.add(this.schedule(null,r)):this.unsubscribe()},r);if(t.add(s),!i)return s}function oN(t,e){return e===void 0&&(e=0),Ki(function(n,r){n.subscribe(io(r,function(i){return _i(r,t,function(){return r.next(i)},e)},function(){return _i(r,t,function(){return r.complete()},e)},function(i){return _i(r,t,function(){return r.error(i)},e)}))})}function aN(t,e){return e===void 0&&(e=0),Ki(function(n,r){r.add(t.schedule(function(){return n.subscribe(r)},e))})}function kj(t,e){return wo(t).pipe(aN(e),oN(e))}function Nj(t,e){return wo(t).pipe(aN(e),oN(e))}function Rj(t,e){return new _t(function(n){var r=0;return e.schedule(function(){r===t.length?n.complete():(n.next(t[r++]),n.closed||this.schedule())})})}function xj(t,e){return new _t(function(n){var r;return _i(n,e,function(){r=t[tN](),_i(n,e,function(){var i,s,o;try{i=r.next(),s=i.value,o=i.done}catch(a){n.error(a);return}o?n.complete():n.next(s)},0,!0)}),function(){return Le(r==null?void 0:r.return)&&r.return()}})}function lN(t,e){if(!t)throw new Error("Iterable cannot be null");return new _t(function(n){_i(n,e,function(){var r=t[Symbol.asyncIterator]();_i(n,e,function(){r.next().then(function(i){i.done?n.complete():n.next(i.value)})},0,!0)})})}function bj(t,e){return lN(rN(t),e)}function Aj(t,e){if(t!=null){if(Jk(t))return kj(t,e);if(Yk(t))return Rj(t,e);if(Xk(t))return Nj(t,e);if(Zk(t))return lN(t,e);if(nN(t))return xj(t,e);if(iN(t))return bj(t,e)}throw eN(t)}function uN(t,e){return e?Aj(t,e):wo(t)}function Hw(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=vj(t);return uN(t,n)}Ky(function(t){return function(){t(this),this.name="EmptyError",this.message="no elements in sequence"}});function Xy(t,e){return Ki(function(n,r){var i=0;n.subscribe(io(r,function(s){r.next(t.call(e,s,i++))}))})}function cN(t){return Ki(function(e,n){var r=null,i=!1,s;r=e.subscribe(io(n,void 0,void 0,function(o){s=wo(t(o,cN(t)(e))),r?(r.unsubscribe(),r=null,s.subscribe(n)):i=!0})),i&&(r.unsubscribe(),r=null,s.subscribe(n))})}function Pj(t){t===void 0&&(t={});var e=t.connector,n=e===void 0?function(){return new Qh}:e,r=t.resetOnError,i=r===void 0?!0:r,s=t.resetOnComplete,o=s===void 0?!0:s,a=t.resetOnRefCountZero,l=a===void 0?!0:a;return function(u){var c,h,d,f=0,g=!1,v=!1,E=function(){h==null||h.unsubscribe(),h=void 0},m=function(){E(),c=d=void 0,g=v=!1},p=function(){var y=c;m(),y==null||y.unsubscribe()};return Ki(function(y,_){f++,!v&&!g&&E();var T=d=d!=null?d:n();_.add(function(){f--,f===0&&!v&&!g&&(h=nf(p,l))}),T.subscribe(_),!c&&f>0&&(c=new tl({next:function(k){return T.next(k)},error:function(k){v=!0,E(),h=nf(m,i,k),T.error(k)},complete:function(){g=!0,E(),h=nf(m,o),T.complete()}}),wo(y).subscribe(c))})(u)}}function nf(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(e===!0){t();return}if(e!==!1){var i=new tl({next:function(){i.unsubscribe(),t()}});return e.apply(void 0,ro([],no(n))).subscribe(i)}}function Oj(t,e,n){var r,i,s,o,a=!1;return t&&typeof t=="object"?(r=t.bufferSize,o=r===void 0?1/0:r,i=t.windowTime,e=i===void 0?1/0:i,s=t.refCount,a=s===void 0?!1:s,n=t.scheduler):o=t!=null?t:1/0,Pj({connector:function(){return new uj(o,e,n)},resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:a})}function Dj(t,e){return Ki(function(n,r){var i=null,s=0,o=!1,a=function(){return o&&!i&&r.complete()};n.subscribe(io(r,function(l){i==null||i.unsubscribe();var u=0,c=s++;wo(t(l,c)).subscribe(i=io(r,function(h){return r.next(e?e(l,h,c,u++):h)},function(){i=null,a()}))},function(){o=!0,a()}))})}function Mj(t,e,n){var r=Le(t)||e||n?{next:t,error:e,complete:n}:t;return r?Ki(function(i,s){var o;(o=r.subscribe)===null||o===void 0||o.call(r);var a=!0;i.subscribe(io(s,function(l){var u;(u=r.next)===null||u===void 0||u.call(r,l),s.next(l)},function(){var l;a=!1,(l=r.complete)===null||l===void 0||l.call(r),s.complete()},function(l){var u;a=!1,(u=r.error)===null||u===void 0||u.call(r,l),s.error(l)},function(){var l,u;a&&((l=r.unsubscribe)===null||l===void 0||l.call(r)),(u=r.finalize)===null||u===void 0||u.call(r)}))}):Qk}function hN(t){return new _t(function(e){var n=_P(t,e.next.bind(e),e.error.bind(e),e.complete.bind(e));return{unsubscribe:n}})}const Lj="[DEFAULT]",dN=w.exports.createContext(void 0),fN=w.exports.createContext(!1),Fj="4.2.2",$j=(t,e)=>t===e||[...Object.keys(t),...Object.keys(e)].every(n=>t[n]===e[n]);function Uj(t){const{firebaseConfig:e,appName:n,suspense:r}=t,i=w.exports.useMemo(()=>{if(t.firebaseApp)return t.firebaseApp;const s=PA().find(o=>o.name===(n||Lj));if(s){if(e&&$j(s.options,e))return s;throw new Error(`Does not match the options already provided to the ${n||"default"} firebase app instance, give this new instance a different appName.`)}else{if(!e)throw new Error("No firebaseConfig provided");const o=w.exports.version||"unknown";return xe("react",o),xe("reactfire",Fj),AA(e,n)}},[t.firebaseApp,e,n]);return w.exports.createElement(dN.Provider,{value:i},R(fN.Provider,{...Object.assign({value:r!=null?r:!1},t)}))}function Vj(t){let e=w.exports.useContext(fN);return t!==void 0?t:e}function pN(){const t=w.exports.useContext(dN);if(!t)throw new Error("Cannot call useFirebaseApp unless your component is within a FirebaseAppProvider");return t}function Jy(t){var e;const n=tv(),r=`auth:user:${n.name}`,i=hN(n),s=(e=Object.assign({},t))!==null&&e!==void 0?e:{};return n.currentUser!==void 0&&(s.initialData=n.currentUser,s.startWithValue=n.currentUser),Zy(r,i,s)}function mN(t){if((t==null?void 0:t.hasOwnProperty("requiredClaims"))&&(t==null?void 0:t.hasOwnProperty("validateCustomClaims")))throw new Error('Cannot have both "requiredClaims" and "validateCustomClaims". Use one or the other.');const e=tv();let n=`auth:signInCheck:${e.name}::forceRefresh:${!!(t!=null&&t.forceRefresh)}`;t!=null&&t.forceRefresh&&(n=`${n}:forceRefresh:${t.forceRefresh}`),t!=null&&t.hasOwnProperty("requiredClaims")?n=`${n}:requiredClaims:${JSON.stringify(t.requiredClaims)}`:t!=null&&t.hasOwnProperty("validateCustomClaims")&&(n=`${n}:validateCustomClaims:${JSON.stringify(t.validateCustomClaims)}`);const r=hN(e).pipe(Dj(i=>{var s;return i?t&&(t.hasOwnProperty("requiredClaims")||t.hasOwnProperty("validateCustomClaims"))?uN(i.getIdTokenResult((s=t==null?void 0:t.forceRefresh)!==null&&s!==void 0?s:!1)).pipe(Xy(o=>{let a;t.hasOwnProperty("requiredClaims")?a=Bj(t.requiredClaims):a=t.validateCustomClaims;const{hasRequiredClaims:l,errors:u}=a(o.claims);return{signedIn:!0,hasRequiredClaims:l,errors:u,user:i}})):Hw({signedIn:!0,hasRequiredClaims:!0,errors:{},user:i}):Hw({signedIn:!1,hasRequiredClaims:!1,errors:{},user:null})}));return Zy(n,r)}function Bj(t){return function(e){const n={};return Object.keys(t).forEach(r=>{t[r]!==e[r]&&(n[r]=[new rv("auth/missing-claim",`Expected "${t[r]}", but user has "${e[r]}" instead`)])}),{hasRequiredClaims:Object.keys(n).length===0,errors:n}}}/**
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
 */var Yr,ni;(function(t){t.added="child_added",t.removed="child_removed",t.changed="child_changed",t.moved="child_moved",t.value="value"})(ni||(ni={}));Object.freeze((Yr={},Yr[ni.added]=bL,Yr[ni.removed]=OL,Yr[ni.changed]=AL,Yr[ni.moved]=PL,Yr[ni.value]=xL,Yr));const jj=globalThis._reactFireDatabaseCachedQueries||[];globalThis._reactFireDatabaseCachedQueries||(globalThis._reactFireDatabaseCachedQueries=jj);/**
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
 */var zj={includeMetadataChanges:!1};function Hj(t,e){return e===void 0&&(e=zj),new _t(function(n){var r=iV(t,e,{next:n.next.bind(n),error:n.error.bind(n),complete:n.complete.bind(n)});return{unsubscribe:r}})}function Wj(t,e){e===void 0&&(e={});var n=t.data();return!t.exists()||typeof n!="object"||n===null||e.idField&&(n[e.idField]=t.id),n}function qj(t){return Hj(t,{includeMetadataChanges:!0}).pipe(Xy(function(e){return e.docs}))}function Kj(t,e){return e===void 0&&(e={}),qj(t).pipe(Xy(function(n){return n.map(function(r){return Wj(r,e)})}))}class Gj extends Qh{constructor(e,n){super(),this._timeoutWindow=n,this._hasValue=!1,this._error=void 0,this._firstEmission=new Promise(r=>this._resolveFirstEmission=r),this._innerObservable=e.pipe(Mj({next:r=>{this._next(r)},error:r=>{this._error=r,this._resolveFirstEmission()}}),cN(()=>pj()),Oj(1)),this._warmupSubscription=this._innerObservable.subscribe(),this._timeoutHandler=setTimeout(this._reset.bind(this),this._timeoutWindow)}get hasValue(){return this._hasValue||!!this._error}get value(){if(this._error)throw this._error;if(!this.hasValue)throw Error("Can only get value if SuspenseSubject has a value");return this._value}get firstEmission(){return this._firstEmission}_next(e){this._hasValue=!0,this._value=e,this._resolveFirstEmission()}_reset(){this._warmupSubscription&&this._warmupSubscription.unsubscribe(),this._hasValue=!1,this._value=void 0,this._error=void 0,this._firstEmission=new Promise(e=>this._resolveFirstEmission=e)}_subscribe(e){return this._timeoutHandler&&clearTimeout(this._timeoutHandler),this._innerSubscriber=this._innerObservable.subscribe(e),this._innerSubscriber}get ourError(){return this._error}}const Qj=3e4,Lu=globalThis._reactFirePreloadedObservables||new Map;globalThis._reactFirePreloadedObservables||(globalThis._reactFirePreloadedObservables=Lu);function Yj(t,e){if(Lu.has(e))return Lu.get(e);{const n=new Gj(t,Qj);return Lu.set(e,n),n}}function Xj(t){return function(e,n){const r=Object.assign(Object.assign({},e),{hasEmitted:e.hasEmitted||t.hasValue,error:t.ourError,firstValuePromise:t.firstEmission});switch(t.hasValue&&(r.data=t.value),n){case"value":return r.status="success",r;case"error":return r.status="error",r;case"complete":return r.isComplete=!0,r;default:throw new Error(`invalid action "${n}"`)}}}function Zy(t,e,n={}){var r;if(!t)throw new Error("cannot call useObservable without an observableId");const i=Yj(e,t),s=n.hasOwnProperty("initialData")||n.hasOwnProperty("startWithValue"),o=i.hasValue||s;if(Vj(n.suspense)===!0&&!o)throw i.firstEmission;const a={status:o?"success":"loading",hasEmitted:o,isComplete:!1,data:i.hasValue?i.value:(r=n==null?void 0:n.initialData)!==null&&r!==void 0?r:n==null?void 0:n.startWithValue,error:i.ourError,firstValuePromise:i.firstEmission},[l,u]=w.exports.useReducer(Xj(i),a);return w.exports.useEffect(()=>{const c=i.subscribe({next:()=>{u("value")},error:h=>{throw u("error"),h},complete:()=>{u("complete")}});return()=>c.unsubscribe()},[i]),l}const Jp=globalThis._reactFireFirestoreQueryCache||[];globalThis._reactFireFirestoreQueryCache||(globalThis._reactFireFirestoreQueryCache=Jp);function Jj(t){const e=Jp.findIndex(n=>OU(n,t));return e>-1?e:Jp.push(t)-1}function Zj(t,e){const n=e?sz(e):"NO_ID_FIELD",r=`firestore:collectionData:${Jj(t)}:idField=${n}`,i=Kj(t,{idField:n});return Zy(r,i,e)}w.exports.createContext(void 0);const gN=w.exports.createContext(void 0);w.exports.createContext(void 0);const ez=w.exports.createContext(void 0),yN=w.exports.createContext(void 0);w.exports.createContext(void 0);w.exports.createContext(void 0);w.exports.createContext(void 0);w.exports.createContext(void 0);function ev(t){return function(e){var n,r;if(!e.sdk)throw new Error("no sdk provided");const i=pN().name;if(((r=(n=e==null?void 0:e.sdk)===null||n===void 0?void 0:n.app)===null||r===void 0?void 0:r.name)!==i)throw new Error("sdk was initialized with a different firebase app");return w.exports.createElement(t.Provider,Object.assign({value:e.sdk},e))}}function vN(t){const e=w.exports.useContext(t);if(!e)throw new Error("SDK not found. useSdk must be called from within a provider");return e}const tz=ev(gN),nz=ev(ez),rz=ev(yN),tv=()=>vN(gN),nv=()=>vN(yN);class rv extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name="ReactFireError",Object.setPrototypeOf(this,rv.prototype)}}function iz(t,e){if(e==="idField"||e==="initialData"||e==="suspense")return t?t[e]:void 0;throw new Error(`Field "${e}" is not a valid key in ReactFireOptions`)}function sz(t){return iz(t,"idField")}var _N={exports:{}};/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var s=arguments[i];if(!!s){var o=typeof s;if(o==="string"||o==="number")r.push(s);else if(Array.isArray(s)){if(s.length){var a=n.apply(null,s);a&&r.push(a)}}else if(o==="object")if(s.toString===Object.prototype.toString)for(var l in s)e.call(s,l)&&s[l]&&r.push(l);else r.push(s.toString())}}return r.join(" ")}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(_N);const $e=_N.exports,oz=["as","disabled"];function az(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function lz(t){return!t||t.trim()==="#"}function wN({tagName:t,disabled:e,href:n,target:r,rel:i,role:s,onClick:o,tabIndex:a=0,type:l}){t||(n!=null||r!=null||i!=null?t="a":t="button");const u={tagName:t};if(t==="button")return[{type:l||"button",disabled:e},u];const c=d=>{if((e||t==="a"&&lz(n))&&d.preventDefault(),e){d.stopPropagation();return}o==null||o(d)},h=d=>{d.key===" "&&(d.preventDefault(),c(d))};return t==="a"&&(n||(n="#"),e&&(n=void 0)),[{role:s!=null?s:"button",disabled:void 0,tabIndex:e?void 0:a,href:n,target:t==="a"?r:void 0,"aria-disabled":e||void 0,rel:t==="a"?i:void 0,onClick:c,onKeyDown:h},u]}const uz=w.exports.forwardRef((t,e)=>{let{as:n,disabled:r}=t,i=az(t,oz);const[s,{tagName:o}]=wN(Object.assign({tagName:n,disabled:r},i));return R(o,Object.assign({},i,s,{ref:e}))});uz.displayName="Button";const cz=["xxl","xl","lg","md","sm","xs"],hz="xs",EN=w.exports.createContext({prefixes:{},breakpoints:cz,minBreakpoint:hz});function Kt(t,e){const{prefixes:n}=w.exports.useContext(EN);return t||n[e]||e}function dz(){const{dir:t}=w.exports.useContext(EN);return t==="rtl"}const fz={variant:"primary",active:!1,disabled:!1},Hn=w.exports.forwardRef(({as:t,bsPrefix:e,variant:n,size:r,active:i,className:s,...o},a)=>{const l=Kt(e,"btn"),[u,{tagName:c}]=wN({tagName:t,...o});return R(c,{...u,...o,ref:a,className:$e(s,l,i&&"active",n&&`${l}-${n}`,r&&`${l}-${r}`,o.href&&o.disabled&&"disabled")})});Hn.displayName="Button";Hn.defaultProps=fz;function pz({messagesCollection:t}){const[e,n]=w.exports.useState(""),{data:r}=Jy(),{uid:i,displayName:s,photoURL:o}=r;return vt("form",{onSubmit:u=>{u.preventDefault();const c=e.trim();c&&(rV(t,{text:c,createdAt:oV(),uid:i,displayName:s,photoURL:o}),n(""))},children:[R("input",{value:e,onChange:u=>{n(u.target.value)},placeholder:"Type your message here..."}),R(Hn,{variant:"outline-danger",type:"submit",disabled:!e,children:"Send"})]})}const Eo=!!(typeof window<"u"&&window.document&&window.document.createElement);var Zp=!1,em=!1;try{var rf={get passive(){return Zp=!0},get once(){return em=Zp=!0}};Eo&&(window.addEventListener("test",rf,rf),window.removeEventListener("test",rf,!0))}catch{}function CN(t,e,n,r){if(r&&typeof r!="boolean"&&!em){var i=r.once,s=r.capture,o=n;!em&&i&&(o=n.__once||function a(l){this.removeEventListener(e,a,s),n.call(this,l)},n.__once=o),t.addEventListener(e,o,Zp?r:s)}t.addEventListener(e,n,r)}function Yh(t){return t&&t.ownerDocument||document}function tm(t,e,n,r){var i=r&&typeof r!="boolean"?r.capture:r;t.removeEventListener(e,n,i),n.__once&&t.removeEventListener(e,n.__once,i)}var du;function Ww(t){if((!du&&du!==0||t)&&Eo){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e),du=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return du}function mz(){return w.exports.useState(null)}function gz(t){var e=w.exports.useRef(t);return w.exports.useEffect(function(){e.current=t},[t]),e}function In(t){var e=gz(t);return w.exports.useCallback(function(){return e.current&&e.current.apply(e,arguments)},[e])}var qw=function(e){return!e||typeof e=="function"?e:function(n){e.current=n}};function yz(t,e){var n=qw(t),r=qw(e);return function(i){n&&n(i),r&&r(i)}}function TN(t,e){return w.exports.useMemo(function(){return yz(t,e)},[t,e])}function vz(t){var e=w.exports.useRef(t);return e.current=t,e}function SN(t){var e=vz(t);w.exports.useEffect(function(){return function(){return e.current()}},[])}function _z(t){var e=Yh(t);return e&&e.defaultView||window}function wz(t,e){return _z(t).getComputedStyle(t,e)}var Ez=/([A-Z])/g;function Cz(t){return t.replace(Ez,"-$1").toLowerCase()}var Tz=/^ms-/;function fu(t){return Cz(t).replace(Tz,"-ms-")}var Sz=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function Iz(t){return!!(t&&Sz.test(t))}function Qn(t,e){var n="",r="";if(typeof e=="string")return t.style.getPropertyValue(fu(e))||wz(t).getPropertyValue(fu(e));Object.keys(e).forEach(function(i){var s=e[i];!s&&s!==0?t.style.removeProperty(fu(i)):Iz(i)?r+=i+"("+s+") ":n+=fu(i)+": "+s+";"}),r&&(n+="transform: "+r+";"),t.style.cssText+=";"+n}function qc(t,e,n,r){return CN(t,e,n,r),function(){tm(t,e,n,r)}}function kz(t,e,n,r){if(n===void 0&&(n=!1),r===void 0&&(r=!0),t){var i=document.createEvent("HTMLEvents");i.initEvent(e,n,r),t.dispatchEvent(i)}}function Nz(t){var e=Qn(t,"transitionDuration")||"",n=e.indexOf("ms")===-1?1e3:1;return parseFloat(e)*n}function Rz(t,e,n){n===void 0&&(n=5);var r=!1,i=setTimeout(function(){r||kz(t,"transitionend",!0)},e+n),s=qc(t,"transitionend",function(){r=!0},{once:!0});return function(){clearTimeout(i),s()}}function IN(t,e,n,r){n==null&&(n=Nz(t)||0);var i=Rz(t,n,r),s=qc(t,"transitionend",e);return function(){i(),s()}}function sf(t){t===void 0&&(t=Yh());try{var e=t.activeElement;return!e||!e.nodeName?null:e}catch{return t.body}}function Kw(t,e){if(t.contains)return t.contains(e);if(t.compareDocumentPosition)return t===e||!!(t.compareDocumentPosition(e)&16)}function xz(){var t=w.exports.useRef(!0),e=w.exports.useRef(function(){return t.current});return w.exports.useEffect(function(){return t.current=!0,function(){t.current=!1}},[]),e.current}function bz(t){var e=w.exports.useRef(null);return w.exports.useEffect(function(){e.current=t}),e.current}const Az="data-rr-ui-";function Pz(t){return`${Az}${t}`}function Oz(t=document){const e=t.defaultView;return Math.abs(e.innerWidth-t.documentElement.clientWidth)}const Gw=Pz("modal-open");class iv{constructor({ownerDocument:e,handleContainerOverflow:n=!0,isRTL:r=!1}={}){this.handleContainerOverflow=n,this.isRTL=r,this.modals=[],this.ownerDocument=e}getScrollbarWidth(){return Oz(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(e){}removeModalAttributes(e){}setContainerStyle(e){const n={overflow:"hidden"},r=this.isRTL?"paddingLeft":"paddingRight",i=this.getElement();e.style={overflow:i.style.overflow,[r]:i.style[r]},e.scrollBarWidth&&(n[r]=`${parseInt(Qn(i,r)||"0",10)+e.scrollBarWidth}px`),i.setAttribute(Gw,""),Qn(i,n)}reset(){[...this.modals].forEach(e=>this.remove(e))}removeContainerStyle(e){const n=this.getElement();n.removeAttribute(Gw),Object.assign(n.style,e.style)}add(e){let n=this.modals.indexOf(e);return n!==-1||(n=this.modals.length,this.modals.push(e),this.setModalAttributes(e),n!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),n}remove(e){const n=this.modals.indexOf(e);n!==-1&&(this.modals.splice(n,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}isTopModal(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}}const kN=w.exports.createContext(Eo?window:void 0);kN.Provider;function NN(){return w.exports.useContext(kN)}const of=(t,e)=>Eo?t==null?(e||Yh()).body:(typeof t=="function"&&(t=t()),t&&"current"in t&&(t=t.current),t&&("nodeType"in t||t.getBoundingClientRect)?t:null):null;function Dz(t,e){const n=NN(),[r,i]=w.exports.useState(()=>of(t,n==null?void 0:n.document));if(!r){const s=of(t);s&&i(s)}return w.exports.useEffect(()=>{e&&r&&e(r)},[e,r]),w.exports.useEffect(()=>{const s=of(t);s!==r&&i(s)},[t,r]),r}const Mz=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","backdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function Lz(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}let af;function Fz(t){return af||(af=new iv({ownerDocument:t==null?void 0:t.document})),af}function $z(t){const e=NN(),n=t||Fz(e),r=w.exports.useRef({dialog:null,backdrop:null});return Object.assign(r.current,{add:()=>n.add(r.current),remove:()=>n.remove(r.current),isTopModal:()=>n.isTopModal(r.current),setDialogRef:w.exports.useCallback(i=>{r.current.dialog=i},[]),setBackdropRef:w.exports.useCallback(i=>{r.current.backdrop=i},[])})}const RN=w.exports.forwardRef((t,e)=>{let{show:n=!1,role:r="dialog",className:i,style:s,children:o,backdrop:a=!0,keyboard:l=!0,onBackdropClick:u,onEscapeKeyDown:c,transition:h,backdropTransition:d,autoFocus:f=!0,enforceFocus:g=!0,restoreFocus:v=!0,restoreFocusOptions:E,renderDialog:m,renderBackdrop:p=ae=>R("div",Object.assign({},ae)),manager:y,container:_,onShow:T,onHide:k=()=>{},onExit:x,onExited:A,onExiting:J,onEnter:B,onEntering:Ue,onEntered:Gt}=t,Ct=Lz(t,Mz);const Qt=Dz(_),Te=$z(y),On=xz(),wn=bz(n),[b,F]=w.exports.useState(!n),$=w.exports.useRef(null);w.exports.useImperativeHandle(e,()=>Te,[Te]),Eo&&!wn&&n&&($.current=sf()),!h&&!n&&!b?F(!0):n&&b&&F(!1);const ne=In(()=>{if(Te.add(),En.current=qc(document,"keydown",Ve),Be.current=qc(document,"focus",()=>setTimeout(Tt),!0),T&&T(),f){const ae=sf(document);Te.dialog&&ae&&!Kw(Te.dialog,ae)&&($.current=ae,Te.dialog.focus())}}),re=In(()=>{if(Te.remove(),En.current==null||En.current(),Be.current==null||Be.current(),v){var ae;(ae=$.current)==null||ae.focus==null||ae.focus(E),$.current=null}});w.exports.useEffect(()=>{!n||!Qt||ne()},[n,Qt,ne]),w.exports.useEffect(()=>{!b||re()},[b,re]),SN(()=>{re()});const Tt=In(()=>{if(!g||!On()||!Te.isTopModal())return;const ae=sf();Te.dialog&&ae&&!Kw(Te.dialog,ae)&&Te.dialog.focus()}),St=In(ae=>{ae.target===ae.currentTarget&&(u==null||u(ae),a===!0&&k())}),Ve=In(ae=>{l&&ae.keyCode===27&&Te.isTopModal()&&(c==null||c(ae),ae.defaultPrevented||k())}),Be=w.exports.useRef(),En=w.exports.useRef(),Jh=(...ae)=>{F(!0),A==null||A(...ae)},Gi=h;if(!Qt||!(n||Gi&&!b))return null;const So=Object.assign({role:r,ref:Te.setDialogRef,"aria-modal":r==="dialog"?!0:void 0},Ct,{style:s,className:i,tabIndex:-1});let Qr=m?m(So):R("div",Object.assign({},So,{children:w.exports.cloneElement(o,{role:"document"})}));Gi&&(Qr=R(Gi,{appear:!0,unmountOnExit:!0,in:!!n,onExit:x,onExiting:J,onExited:Jh,onEnter:B,onEntering:Ue,onEntered:Gt,children:Qr}));let Qi=null;if(a){const ae=d;Qi=p({ref:Te.setBackdropRef,onClick:St}),ae&&(Qi=R(ae,{appear:!0,in:!!n,children:Qi}))}return R(sr,{children:ms.createPortal(vt(sr,{children:[Qi,Qr]}),Qt)})});RN.displayName="Modal";const xN=Object.assign(RN,{Manager:iv});function Uz(t,e){return t.classList?!!e&&t.classList.contains(e):(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+e+" ")!==-1}function Vz(t,e){t.classList?t.classList.add(e):Uz(t,e)||(typeof t.className=="string"?t.className=t.className+" "+e:t.setAttribute("class",(t.className&&t.className.baseVal||"")+" "+e))}var Bz=Function.prototype.bind.call(Function.prototype.call,[].slice);function es(t,e){return Bz(t.querySelectorAll(e))}function Qw(t,e){return t.replace(new RegExp("(^|\\s)"+e+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function jz(t,e){t.classList?t.classList.remove(e):typeof t.className=="string"?t.className=Qw(t.className,e):t.setAttribute("class",Qw(t.className&&t.className.baseVal||"",e))}const ts={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class bN extends iv{adjustAndStore(e,n,r){const i=n.style[e];n.dataset[e]=i,Qn(n,{[e]:`${parseFloat(Qn(n,e))+r}px`})}restore(e,n){const r=n.dataset[e];r!==void 0&&(delete n.dataset[e],Qn(n,{[e]:r}))}setContainerStyle(e){super.setContainerStyle(e);const n=this.getElement();if(Vz(n,"modal-open"),!e.scrollBarWidth)return;const r=this.isRTL?"paddingLeft":"paddingRight",i=this.isRTL?"marginLeft":"marginRight";es(n,ts.FIXED_CONTENT).forEach(s=>this.adjustAndStore(r,s,e.scrollBarWidth)),es(n,ts.STICKY_CONTENT).forEach(s=>this.adjustAndStore(i,s,-e.scrollBarWidth)),es(n,ts.NAVBAR_TOGGLER).forEach(s=>this.adjustAndStore(i,s,e.scrollBarWidth))}removeContainerStyle(e){super.removeContainerStyle(e);const n=this.getElement();jz(n,"modal-open");const r=this.isRTL?"paddingLeft":"paddingRight",i=this.isRTL?"marginLeft":"marginRight";es(n,ts.FIXED_CONTENT).forEach(s=>this.restore(r,s)),es(n,ts.STICKY_CONTENT).forEach(s=>this.restore(i,s)),es(n,ts.NAVBAR_TOGGLER).forEach(s=>this.restore(i,s))}}let lf;function AN(t){return lf||(lf=new bN(t)),lf}function PN(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function nm(t,e){return nm=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},nm(t,e)}function zz(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,nm(t,e)}var Fu={exports:{}},Hz="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Wz=Hz,qz=Wz;function ON(){}function DN(){}DN.resetWarningCache=ON;var Kz=function(){function t(r,i,s,o,a,l){if(l!==qz){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:DN,resetWarningCache:ON};return n.PropTypes=n,n};Fu.exports=Kz();const Yw={disabled:!1},MN=Wn.createContext(null);var Gz=function(e){return e.scrollTop},Ko="unmounted",mr="exited",cn="entering",Fn="entered",nl="exiting",cr=function(t){zz(e,t);function e(r,i){var s;s=t.call(this,r,i)||this;var o=i,a=o&&!o.isMounting?r.enter:r.appear,l;return s.appearStatus=null,r.in?a?(l=mr,s.appearStatus=cn):l=Fn:r.unmountOnExit||r.mountOnEnter?l=Ko:l=mr,s.state={status:l},s.nextCallback=null,s}e.getDerivedStateFromProps=function(i,s){var o=i.in;return o&&s.status===Ko?{status:mr}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(i){var s=null;if(i!==this.props){var o=this.state.status;this.props.in?o!==cn&&o!==Fn&&(s=cn):(o===cn||o===Fn)&&(s=nl)}this.updateStatus(!1,s)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var i=this.props.timeout,s,o,a;return s=o=a=i,i!=null&&typeof i!="number"&&(s=i.exit,o=i.enter,a=i.appear!==void 0?i.appear:o),{exit:s,enter:o,appear:a}},n.updateStatus=function(i,s){if(i===void 0&&(i=!1),s!==null)if(this.cancelNextCallback(),s===cn){if(this.props.unmountOnExit||this.props.mountOnEnter){var o=this.props.nodeRef?this.props.nodeRef.current:ms.findDOMNode(this);o&&Gz(o)}this.performEnter(i)}else this.performExit();else this.props.unmountOnExit&&this.state.status===mr&&this.setState({status:Ko})},n.performEnter=function(i){var s=this,o=this.props.enter,a=this.context?this.context.isMounting:i,l=this.props.nodeRef?[a]:[ms.findDOMNode(this),a],u=l[0],c=l[1],h=this.getTimeouts(),d=a?h.appear:h.enter;if(!i&&!o||Yw.disabled){this.safeSetState({status:Fn},function(){s.props.onEntered(u)});return}this.props.onEnter(u,c),this.safeSetState({status:cn},function(){s.props.onEntering(u,c),s.onTransitionEnd(d,function(){s.safeSetState({status:Fn},function(){s.props.onEntered(u,c)})})})},n.performExit=function(){var i=this,s=this.props.exit,o=this.getTimeouts(),a=this.props.nodeRef?void 0:ms.findDOMNode(this);if(!s||Yw.disabled){this.safeSetState({status:mr},function(){i.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:nl},function(){i.props.onExiting(a),i.onTransitionEnd(o.exit,function(){i.safeSetState({status:mr},function(){i.props.onExited(a)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(i,s){s=this.setNextCallback(s),this.setState(i,s)},n.setNextCallback=function(i){var s=this,o=!0;return this.nextCallback=function(a){o&&(o=!1,s.nextCallback=null,i(a))},this.nextCallback.cancel=function(){o=!1},this.nextCallback},n.onTransitionEnd=function(i,s){this.setNextCallback(s);var o=this.props.nodeRef?this.props.nodeRef.current:ms.findDOMNode(this),a=i==null&&!this.props.addEndListener;if(!o||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[o,this.nextCallback],u=l[0],c=l[1];this.props.addEndListener(u,c)}i!=null&&setTimeout(this.nextCallback,i)},n.render=function(){var i=this.state.status;if(i===Ko)return null;var s=this.props,o=s.children;s.in,s.mountOnEnter,s.unmountOnExit,s.appear,s.enter,s.exit,s.timeout,s.addEndListener,s.onEnter,s.onEntering,s.onEntered,s.onExit,s.onExiting,s.onExited,s.nodeRef;var a=PN(s,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return R(MN.Provider,{value:null,children:typeof o=="function"?o(i,a):Wn.cloneElement(Wn.Children.only(o),a)})},e}(Wn.Component);cr.contextType=MN;cr.propTypes={};function ns(){}cr.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:ns,onEntering:ns,onEntered:ns,onExit:ns,onExiting:ns,onExited:ns};cr.UNMOUNTED=Ko;cr.EXITED=mr;cr.ENTERING=cn;cr.ENTERED=Fn;cr.EXITING=nl;function Xw(t,e){const n=Qn(t,e)||"",r=n.indexOf("ms")===-1?1e3:1;return parseFloat(n)*r}function sv(t,e){const n=Xw(t,"transitionDuration"),r=Xw(t,"transitionDelay"),i=IN(t,s=>{s.target===t&&(i(),e(s))},n+r)}function LN(t){t.offsetHeight}function Qz(t){return t&&"setState"in t?ms.findDOMNode(t):t!=null?t:null}const ov=Wn.forwardRef(({onEnter:t,onEntering:e,onEntered:n,onExit:r,onExiting:i,onExited:s,addEndListener:o,children:a,childRef:l,...u},c)=>{const h=w.exports.useRef(null),d=TN(h,l),f=k=>{d(Qz(k))},g=k=>x=>{k&&h.current&&k(h.current,x)},v=w.exports.useCallback(g(t),[t]),E=w.exports.useCallback(g(e),[e]),m=w.exports.useCallback(g(n),[n]),p=w.exports.useCallback(g(r),[r]),y=w.exports.useCallback(g(i),[i]),_=w.exports.useCallback(g(s),[s]),T=w.exports.useCallback(g(o),[o]);return R(cr,{ref:c,...u,onEnter:v,onEntered:m,onEntering:E,onExit:p,onExited:_,onExiting:y,addEndListener:T,nodeRef:h,children:typeof a=="function"?(k,x)=>a(k,{...x,ref:f}):Wn.cloneElement(a,{ref:f})})}),Yz={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},Xz={[cn]:"show",[Fn]:"show"},Fl=w.exports.forwardRef(({className:t,children:e,transitionClasses:n={},...r},i)=>{const s=w.exports.useCallback((o,a)=>{LN(o),r.onEnter==null||r.onEnter(o,a)},[r]);return R(ov,{ref:i,addEndListener:sv,...r,onEnter:s,childRef:e.ref,children:(o,a)=>w.exports.cloneElement(e,{...a,className:$e("fade",t,e.props.className,Xz[o],n[o])})})});Fl.defaultProps=Yz;Fl.displayName="Fade";var Jz=/-(.)/g;function Zz(t){return t.replace(Jz,function(e,n){return n.toUpperCase()})}const e3=t=>t[0].toUpperCase()+Zz(t).slice(1);function Co(t,{displayName:e=e3(t),Component:n,defaultProps:r}={}){const i=w.exports.forwardRef(({className:s,bsPrefix:o,as:a=n||"div",...l},u)=>{const c=Kt(o,t);return R(a,{ref:u,className:$e(s,c),...l})});return i.defaultProps=r,i.displayName=e,i}const t3=Co("modal-body"),av=w.exports.createContext({onHide(){}}),lv=w.exports.forwardRef(({bsPrefix:t,className:e,contentClassName:n,centered:r,size:i,fullscreen:s,children:o,scrollable:a,...l},u)=>{t=Kt(t,"modal");const c=`${t}-dialog`,h=typeof s=="string"?`${t}-fullscreen-${s}`:`${t}-fullscreen`;return R("div",{...l,ref:u,className:$e(c,e,i&&`${t}-${i}`,r&&`${c}-centered`,a&&`${c}-scrollable`,s&&h),children:R("div",{className:$e(`${t}-content`,n),children:o})})});lv.displayName="ModalDialog";const n3=Co("modal-footer"),r3={"aria-label":Fu.exports.string,onClick:Fu.exports.func,variant:Fu.exports.oneOf(["white"])},i3={"aria-label":"Close"},Xh=w.exports.forwardRef(({className:t,variant:e,...n},r)=>R("button",{ref:r,type:"button",className:$e("btn-close",e&&`btn-close-${e}`,t),...n}));Xh.displayName="CloseButton";Xh.propTypes=r3;Xh.defaultProps=i3;const s3={closeLabel:"Close",closeButton:!1},uv=w.exports.forwardRef(({closeLabel:t,closeVariant:e,closeButton:n,onHide:r,children:i,...s},o)=>{const a=w.exports.useContext(av),l=In(()=>{a==null||a.onHide(),r==null||r()});return vt("div",{ref:o,...s,children:[i,n&&R(Xh,{"aria-label":t,variant:e,onClick:l})]})});uv.defaultProps=s3;const o3={closeLabel:"Close",closeButton:!1},cv=w.exports.forwardRef(({bsPrefix:t,className:e,...n},r)=>(t=Kt(t,"modal-header"),R(uv,{ref:r,...n,className:$e(e,t)})));cv.displayName="ModalHeader";cv.defaultProps=o3;const FN=t=>w.exports.forwardRef((e,n)=>R("div",{...e,ref:n,className:$e(e.className,t)})),a3=FN("h4"),l3=Co("modal-title",{Component:a3}),u3={show:!1,backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,animation:!0,dialogAs:lv};function c3(t){return R(Fl,{...t,timeout:null})}function h3(t){return R(Fl,{...t,timeout:null})}const hv=w.exports.forwardRef(({bsPrefix:t,className:e,style:n,dialogClassName:r,contentClassName:i,children:s,dialogAs:o,"aria-labelledby":a,"aria-describedby":l,"aria-label":u,show:c,animation:h,backdrop:d,keyboard:f,onEscapeKeyDown:g,onShow:v,onHide:E,container:m,autoFocus:p,enforceFocus:y,restoreFocus:_,restoreFocusOptions:T,onEntered:k,onExit:x,onExiting:A,onEnter:J,onEntering:B,onExited:Ue,backdropClassName:Gt,manager:Ct,...Qt},Te)=>{const[On,wn]=w.exports.useState({}),[b,F]=w.exports.useState(!1),$=w.exports.useRef(!1),ne=w.exports.useRef(!1),re=w.exports.useRef(null),[Tt,St]=mz(),Ve=TN(Te,St),Be=In(E),En=dz();t=Kt(t,"modal");const Jh=w.exports.useMemo(()=>({onHide:Be}),[Be]);function Gi(){return Ct||AN({isRTL:En})}function So(ie){if(!Eo)return;const Yi=Gi().getScrollbarWidth()>0,wv=ie.scrollHeight>Yh(ie).documentElement.clientHeight;wn({paddingRight:Yi&&!wv?Ww():void 0,paddingLeft:!Yi&&wv?Ww():void 0})}const Qr=In(()=>{Tt&&So(Tt.dialog)});SN(()=>{tm(window,"resize",Qr),re.current==null||re.current()});const Qi=()=>{$.current=!0},ae=ie=>{$.current&&Tt&&ie.target===Tt.dialog&&(ne.current=!0),$.current=!1},vv=()=>{F(!0),re.current=IN(Tt.dialog,()=>{F(!1)})},zN=ie=>{ie.target===ie.currentTarget&&vv()},HN=ie=>{if(d==="static"){zN(ie);return}if(ne.current||ie.target!==ie.currentTarget){ne.current=!1;return}E==null||E()},WN=ie=>{!f&&d==="static"?(ie.preventDefault(),vv()):f&&g&&g(ie)},qN=(ie,Yi)=>{ie&&So(ie),J==null||J(ie,Yi)},KN=ie=>{re.current==null||re.current(),x==null||x(ie)},GN=(ie,Yi)=>{B==null||B(ie,Yi),CN(window,"resize",Qr)},QN=ie=>{ie&&(ie.style.display=""),Ue==null||Ue(ie),tm(window,"resize",Qr)},YN=w.exports.useCallback(ie=>R("div",{...ie,className:$e(`${t}-backdrop`,Gt,!h&&"show")}),[h,Gt,t]),_v={...n,...On};_v.display="block";const XN=ie=>R("div",{role:"dialog",...ie,style:_v,className:$e(e,t,b&&`${t}-static`),onClick:d?HN:void 0,onMouseUp:ae,"aria-label":u,"aria-labelledby":a,"aria-describedby":l,children:R(o,{...Qt,onMouseDown:Qi,className:r,contentClassName:i,children:s})});return R(av.Provider,{value:Jh,children:R(xN,{show:c,ref:Ve,backdrop:d,container:m,keyboard:!0,autoFocus:p,enforceFocus:y,restoreFocus:_,restoreFocusOptions:T,onEscapeKeyDown:WN,onShow:v,onHide:E,onEnter:qN,onEntering:GN,onEntered:k,onExit:KN,onExiting:A,onExited:QN,manager:Gi(),transition:h?c3:void 0,backdropTransition:h?h3:void 0,renderBackdrop:YN,renderDialog:XN})})});hv.displayName="Modal";hv.defaultProps=u3;const $o=Object.assign(hv,{Body:t3,Header:cv,Title:l3,Footer:n3,Dialog:lv,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150});function d3({text:t,id:e}){const[n,r]=w.exports.useState(!1),i=nv(),[s,o]=w.exports.useState(t),a=()=>r(!1);return vt(sr,{children:[R(Hn,{variant:"outline-danger",onClick:()=>r(!0),children:"Muokkaa"}),vt($o,{show:n,onHide:a,children:[R($o.Header,{closeButton:!0,children:R($o.Title,{children:"Muokkaa teksti\xE4"})}),R($o.Body,{children:R("input",{value:s,onChange:u=>o(u.target.value)})}),vt($o.Footer,{children:[R(Hn,{variant:"danger",onClick:a,children:"Sulje"}),R(Hn,{variant:"danger",onClick:async()=>{await tV(Kp(i,"messages",e),{text:s}),a()},children:"Tallenna"}),R(Hn,{variant:"danger",onClick:async()=>{await nV(Kp(i,"messages",e)),a()},children:"Poista"})]})]})]})}const f3=new Intl.DateTimeFormat("en-GB",{hour:"numeric",minute:"numeric",second:"numeric",hour12:!1});function p3({createdAt:t,text:e,displayName:n,id:r,uid:i}){const{data:s}=Jy();return nv(),vt("div",{children:["[",t!=null&&t.seconds?R("span",{children:f3.format(new Date(t.seconds*1e3))}):null,"]"," ",vt("strong",{children:["<",n||null,">"]})," ",e,i===s.uid?R(sr,{children:R(d3,{id:r,text:e})}):null]})}function m3({messages:t}){return R("pre",{children:t==null?void 0:t.map(e=>R(p3,{...e},e.id))})}function g3(){const t=nv(),e=PU(t,"messages"),n=KU(e,QU("createdAt"),XU(100)),{status:r,data:i}=Zj(n,{idField:"id"});return vt("div",{children:[r==="loading"?R("span",{children:"loading..."}):R(m3,{messages:i}),R(pz,{messagesCollection:e})]})}const y3={fluid:!1},dv=w.exports.forwardRef(({bsPrefix:t,fluid:e,as:n="div",className:r,...i},s)=>{const o=Kt(t,"container"),a=typeof e=="string"?`-${e}`:"-fluid";return R(n,{ref:s,...i,className:$e(r,e?`${o}${a}`:o)})});dv.displayName="Container";dv.defaultProps=y3;const v3=w.exports.createContext(null);function rm(){return rm=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},rm.apply(this,arguments)}function Jw(t){return"default"+t.charAt(0).toUpperCase()+t.substr(1)}function _3(t){var e=w3(t,"string");return typeof e=="symbol"?e:String(e)}function w3(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function E3(t,e,n){var r=w.exports.useRef(t!==void 0),i=w.exports.useState(e),s=i[0],o=i[1],a=t!==void 0,l=r.current;return r.current=a,!a&&l&&s!==e&&o(e),[a?t:s,w.exports.useCallback(function(u){for(var c=arguments.length,h=new Array(c>1?c-1:0),d=1;d<c;d++)h[d-1]=arguments[d];n&&n.apply(void 0,[u].concat(h)),o(u)},[n])]}function C3(t,e){return Object.keys(e).reduce(function(n,r){var i,s=n,o=s[Jw(r)],a=s[r],l=PN(s,[Jw(r),r].map(_3)),u=e[r],c=E3(a,o,t[u]),h=c[0],d=c[1];return rm({},l,(i={},i[r]=h,i[u]=d,i))},t)}const $N=w.exports.forwardRef(({bsPrefix:t,className:e,as:n,...r},i)=>{t=Kt(t,"navbar-brand");const s=n||(r.href?"a":"span");return R(s,{...r,ref:i,className:$e(e,t)})});$N.displayName="NavbarBrand";function Uo(...t){return t.filter(e=>e!=null).reduce((e,n)=>{if(typeof n!="function")throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return e===null?n:function(...i){e.apply(this,i),n.apply(this,i)}},null)}const T3={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function UN(t,e){const n=`offset${t[0].toUpperCase()}${t.slice(1)}`,r=e[n],i=T3[t];return r+parseInt(Qn(e,i[0]),10)+parseInt(Qn(e,i[1]),10)}const S3={[mr]:"collapse",[nl]:"collapsing",[cn]:"collapsing",[Fn]:"collapse show"},I3={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:UN},VN=Wn.forwardRef(({onEnter:t,onEntering:e,onEntered:n,onExit:r,onExiting:i,className:s,children:o,dimension:a="height",getDimensionValue:l=UN,...u},c)=>{const h=typeof a=="function"?a():a,d=w.exports.useMemo(()=>Uo(m=>{m.style[h]="0"},t),[h,t]),f=w.exports.useMemo(()=>Uo(m=>{const p=`scroll${h[0].toUpperCase()}${h.slice(1)}`;m.style[h]=`${m[p]}px`},e),[h,e]),g=w.exports.useMemo(()=>Uo(m=>{m.style[h]=null},n),[h,n]),v=w.exports.useMemo(()=>Uo(m=>{m.style[h]=`${l(h,m)}px`,LN(m)},r),[r,l,h]),E=w.exports.useMemo(()=>Uo(m=>{m.style[h]=null},i),[h,i]);return R(ov,{ref:c,addEndListener:sv,...u,"aria-expanded":u.role?u.in:null,onEnter:d,onEntering:f,onEntered:g,onExit:v,onExiting:E,childRef:o.ref,children:(m,p)=>Wn.cloneElement(o,{...p,className:$e(s,o.props.className,S3[m],h==="width"&&"collapse-horizontal")})})});VN.defaultProps=I3;const To=w.exports.createContext(null);To.displayName="NavbarContext";const BN=w.exports.forwardRef(({children:t,bsPrefix:e,...n},r)=>{e=Kt(e,"navbar-collapse");const i=w.exports.useContext(To);return R(VN,{in:!!(i&&i.expanded),...n,children:R("div",{ref:r,className:e,children:t})})});BN.displayName="NavbarCollapse";const k3={label:"Toggle navigation"},fv=w.exports.forwardRef(({bsPrefix:t,className:e,children:n,label:r,as:i="button",onClick:s,...o},a)=>{t=Kt(t,"navbar-toggler");const{onToggle:l,expanded:u}=w.exports.useContext(To)||{},c=In(h=>{s&&s(h),l&&l()});return i==="button"&&(o.type="button"),R(i,{...o,ref:a,onClick:c,"aria-label":r,className:$e(e,t,!u&&"collapsed"),children:n||R("span",{className:`${t}-icon`})})});fv.displayName="NavbarToggle";fv.defaultProps=k3;var N3=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",R3=typeof document<"u";const x3=R3||N3?w.exports.useLayoutEffect:w.exports.useEffect;var im=new WeakMap,Zw=function(e,n){if(!(!e||!n)){var r=im.get(n)||new Map;im.set(n,r);var i=r.get(e);return i||(i=n.matchMedia(e),i.refCount=0,r.set(i.media,i)),i}};function b3(t,e){e===void 0&&(e=typeof window>"u"?void 0:window);var n=Zw(t,e),r=w.exports.useState(function(){return n?n.matches:!1}),i=r[0],s=r[1];return x3(function(){var o=Zw(t,e);if(!o)return s(!1);var a=im.get(e),l=function(){s(o.matches)};return o.refCount++,o.addListener(l),l(),function(){o.removeListener(l),o.refCount--,o.refCount<=0&&(a==null||a.delete(o.media)),o=void 0}},[t]),i}function A3(t){var e=Object.keys(t);function n(a,l){return a===l?l:a?a+" and "+l:l}function r(a){return e[Math.min(e.indexOf(a)+1,e.length-1)]}function i(a){var l=r(a),u=t[l];return typeof u=="number"?u=u-.2+"px":u="calc("+u+" - 0.2px)","(max-width: "+u+")"}function s(a){var l=t[a];return typeof l=="number"&&(l=l+"px"),"(min-width: "+l+")"}function o(a,l,u){var c;if(typeof a=="object")c=a,u=l,l=!0;else{var h;l=l||!0,c=(h={},h[a]=l,h)}var d=w.exports.useMemo(function(){return Object.entries(c).reduce(function(f,g){var v=g[0],E=g[1];return(E==="up"||E===!0)&&(f=n(f,s(v))),(E==="down"||E===!0)&&(f=n(f,i(v))),f},"")},[JSON.stringify(c)]);return b3(d,u)}return o}var P3=A3({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400});const O3=Co("offcanvas-body"),D3={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1},M3={[cn]:"show",[Fn]:"show"},pv=w.exports.forwardRef(({bsPrefix:t,className:e,children:n,...r},i)=>(t=Kt(t,"offcanvas"),R(ov,{ref:i,addEndListener:sv,...r,childRef:n.ref,children:(s,o)=>w.exports.cloneElement(n,{...o,className:$e(e,n.props.className,(s===cn||s===nl)&&`${t}-toggling`,M3[s])})})));pv.defaultProps=D3;pv.displayName="OffcanvasToggling";const L3={closeLabel:"Close",closeButton:!1},mv=w.exports.forwardRef(({bsPrefix:t,className:e,...n},r)=>(t=Kt(t,"offcanvas-header"),R(uv,{ref:r,...n,className:$e(e,t)})));mv.displayName="OffcanvasHeader";mv.defaultProps=L3;const F3=FN("h5"),$3=Co("offcanvas-title",{Component:F3}),U3={show:!1,backdrop:!0,keyboard:!0,scroll:!1,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,placement:"start",renderStaticNode:!1};function V3(t){return R(pv,{...t})}function B3(t){return R(Fl,{...t})}const gv=w.exports.forwardRef(({bsPrefix:t,className:e,children:n,"aria-labelledby":r,placement:i,responsive:s,show:o,backdrop:a,keyboard:l,scroll:u,onEscapeKeyDown:c,onShow:h,onHide:d,container:f,autoFocus:g,enforceFocus:v,restoreFocus:E,restoreFocusOptions:m,onEntered:p,onExit:y,onExiting:_,onEnter:T,onEntering:k,onExited:x,backdropClassName:A,manager:J,renderStaticNode:B,...Ue},Gt)=>{const Ct=w.exports.useRef();t=Kt(t,"offcanvas");const{onToggle:Qt}=w.exports.useContext(To)||{},[Te,On]=w.exports.useState(!1),wn=P3(s||"xs","up");w.exports.useEffect(()=>{On(s?o&&!wn:o)},[o,s,wn]);const b=In(()=>{Qt==null||Qt(),d==null||d()}),F=w.exports.useMemo(()=>({onHide:b}),[b]);function $(){return J||(u?(Ct.current||(Ct.current=new bN({handleContainerOverflow:!1})),Ct.current):AN())}const ne=(Ve,...Be)=>{Ve&&(Ve.style.visibility="visible"),T==null||T(Ve,...Be)},re=(Ve,...Be)=>{Ve&&(Ve.style.visibility=""),x==null||x(...Be)},Tt=w.exports.useCallback(Ve=>R("div",{...Ve,className:$e(`${t}-backdrop`,A)}),[A,t]),St=Ve=>R("div",{...Ve,...Ue,className:$e(e,s?`${t}-${s}`:t,`${t}-${i}`),"aria-labelledby":r,children:n});return vt(sr,{children:[!Te&&(s||B)&&St({}),R(av.Provider,{value:F,children:R(xN,{show:Te,ref:Gt,backdrop:a,container:f,keyboard:l,autoFocus:g,enforceFocus:v&&!u,restoreFocus:E,restoreFocusOptions:m,onEscapeKeyDown:c,onShow:h,onHide:b,onEnter:ne,onEntering:k,onEntered:p,onExit:y,onExiting:_,onExited:re,manager:$(),transition:V3,backdropTransition:B3,renderBackdrop:Tt,renderDialog:St})})]})});gv.displayName="Offcanvas";gv.defaultProps=U3;const j3=Object.assign(gv,{Body:O3,Header:mv,Title:$3}),jN=w.exports.forwardRef((t,e)=>{const n=w.exports.useContext(To);return R(j3,{ref:e,show:!!(n!=null&&n.expanded),...t,renderStaticNode:!0})});jN.displayName="NavbarOffcanvas";const z3=Co("navbar-text",{Component:"span"}),H3={expand:!0,variant:"light",collapseOnSelect:!1},yv=w.exports.forwardRef((t,e)=>{const{bsPrefix:n,expand:r,variant:i,bg:s,fixed:o,sticky:a,className:l,as:u="nav",expanded:c,onToggle:h,onSelect:d,collapseOnSelect:f,...g}=C3(t,{expanded:"onToggle"}),v=Kt(n,"navbar"),E=w.exports.useCallback((...y)=>{d==null||d(...y),f&&c&&(h==null||h(!1))},[d,f,c,h]);g.role===void 0&&u!=="nav"&&(g.role="navigation");let m=`${v}-expand`;typeof r=="string"&&(m=`${m}-${r}`);const p=w.exports.useMemo(()=>({onToggle:()=>h==null?void 0:h(!c),bsPrefix:v,expanded:!!c,expand:r}),[v,c,r,h]);return R(To.Provider,{value:p,children:R(v3.Provider,{value:E,children:R(u,{ref:e,...g,className:$e(l,v,r&&m,i&&`${v}-${i}`,s&&`bg-${s}`,a&&`sticky-${a}`,o&&`fixed-${o}`)})})})});yv.defaultProps=H3;yv.displayName="Navbar";const uf=Object.assign(yv,{Brand:$N,Collapse:BN,Offcanvas:jN,Text:z3,Toggle:fv}),W3=async t=>{wP(t),await WP(t,new Ln)},q3=()=>{const t=globalThis._reactFirePreloadedObservables;Array.from(t.keys()).forEach(e=>e.includes("firestore")&&t.delete(e))},K3=async t=>{await EP(t),q3()};function G3(){const{data:t}=mN(),e=tv();return t.signedIn?vt(sr,{children:[R(Hn,{variant:"outline-danger",onClick:()=>K3(e),children:"Sign out"})," "]}):vt(sr,{children:[R(Hn,{variant:"outline-danger",onClick:()=>W3(e),children:"Sign in with Google"})," "]})}function Q3(){const{data:t}=Jy();return R(sr,{children:R(uf,{bg:"light",expand:"sm",children:vt(dv,{children:[R(uf.Brand,{children:"Chat"}),t&&vt(uf.Text,{children:["Sis\xE4\xE4nkirjautunut : ",R("a",{children:t.displayName})]}),R(G3,{})]})})})}function Y3(){const{status:t,data:e}=mN();return t==="loading"?R("span",{children:"loading..."}):vt(sr,{children:[R(Q3,{}),e.signedIn&&R(g3,{})]})}const X3={apiKey:"AIzaSyCxXnUidB20eJPotUbQjUUQmVDk_LFIzQk",authDomain:"example-44ced.firebaseapp.com",projectId:"example-44ced",storageBucket:"example-44ced.appspot.com",messagingSenderId:"340859330515",appId:"1:340859330515:web:98a9e55130e5fbcaced926"};function J3({children:t}){const e=pN(),n=PO(e),r=VL(e);return R(rz,{sdk:MU(e),children:R(tz,{sdk:n,children:R(nz,{sdk:r,children:t})})})}cf.createRoot(document.getElementById("root")).render(R(Wn.StrictMode,{children:R(Uj,{firebaseConfig:X3,children:R(J3,{children:R(Y3,{})})})}));
