/*
 AngularJS v1.5.6
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(F){'use strict';function O(a){return function(){var b=arguments[0],d;d="["+(a?a+":":"")+b+"] http://errors.angularjs.org/1.5.6/"+(a?a+"/":"")+b;for(b=1;b<arguments.length;b++){d=d+(1==b?"?":"&")+"p"+(b-1)+"=";var c=encodeURIComponent,e;e=arguments[b];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;d+=c(e)}return Error(d)}}function xa(a){if(null==a||Wa(a))return!1;if(K(a)||I(a)||G&&a instanceof G)return!0;
var b="length"in Object(a)&&a.length;return Q(b)&&(0<=b&&(b-1 in a||a instanceof Array)||"function"==typeof a.item)}function q(a,b,d){var c,e;if(a)if(E(a))for(c in a)"prototype"==c||"length"==c||"name"==c||a.hasOwnProperty&&!a.hasOwnProperty(c)||b.call(d,a[c],c,a);else if(K(a)||xa(a)){var f="object"!==typeof a;c=0;for(e=a.length;c<e;c++)(f||c in a)&&b.call(d,a[c],c,a)}else if(a.forEach&&a.forEach!==q)a.forEach(b,d,a);else if(rc(a))for(c in a)b.call(d,a[c],c,a);else if("function"===typeof a.hasOwnProperty)for(c in a)a.hasOwnProperty(c)&&
b.call(d,a[c],c,a);else for(c in a)sa.call(a,c)&&b.call(d,a[c],c,a);return a}function sc(a,b,d){for(var c=Object.keys(a).sort(),e=0;e<c.length;e++)b.call(d,a[c[e]],c[e]);return c}function tc(a){return function(b,d){a(d,b)}}function Yd(){return++pb}function Qb(a,b,d){for(var c=a.$$hashKey,e=0,f=b.length;e<f;++e){var g=b[e];if(J(g)||E(g))for(var h=Object.keys(g),k=0,l=h.length;k<l;k++){var m=h[k],n=g[m];d&&J(n)?ha(n)?a[m]=new Date(n.valueOf()):Xa(n)?a[m]=new RegExp(n):n.nodeName?a[m]=n.cloneNode(!0):
Rb(n)?a[m]=n.clone():(J(a[m])||(a[m]=K(n)?[]:{}),Qb(a[m],[n],!0)):a[m]=n}}c?a.$$hashKey=c:delete a.$$hashKey;return a}function P(a){return Qb(a,ya.call(arguments,1),!1)}function Zd(a){return Qb(a,ya.call(arguments,1),!0)}function $(a){return parseInt(a,10)}function Sb(a,b){return P(Object.create(a),b)}function C(){}function Ya(a){return a}function ca(a){return function(){return a}}function uc(a){return E(a.toString)&&a.toString!==ja}function y(a){return"undefined"===typeof a}function v(a){return"undefined"!==
typeof a}function J(a){return null!==a&&"object"===typeof a}function rc(a){return null!==a&&"object"===typeof a&&!vc(a)}function I(a){return"string"===typeof a}function Q(a){return"number"===typeof a}function ha(a){return"[object Date]"===ja.call(a)}function E(a){return"function"===typeof a}function Xa(a){return"[object RegExp]"===ja.call(a)}function Wa(a){return a&&a.window===a}function Za(a){return a&&a.$evalAsync&&a.$watch}function Ea(a){return"boolean"===typeof a}function $d(a){return a&&Q(a.length)&&
ae.test(ja.call(a))}function Rb(a){return!(!a||!(a.nodeName||a.prop&&a.attr&&a.find))}function be(a){var b={};a=a.split(",");var d;for(d=0;d<a.length;d++)b[a[d]]=!0;return b}function ta(a){return L(a.nodeName||a[0]&&a[0].nodeName)}function $a(a,b){var d=a.indexOf(b);0<=d&&a.splice(d,1);return d}function oa(a,b){function d(a,b){var d=b.$$hashKey,e;if(K(a)){e=0;for(var f=a.length;e<f;e++)b.push(c(a[e]))}else if(rc(a))for(e in a)b[e]=c(a[e]);else if(a&&"function"===typeof a.hasOwnProperty)for(e in a)a.hasOwnProperty(e)&&
(b[e]=c(a[e]));else for(e in a)sa.call(a,e)&&(b[e]=c(a[e]));d?b.$$hashKey=d:delete b.$$hashKey;return b}function c(a){if(!J(a))return a;var b=f.indexOf(a);if(-1!==b)return g[b];if(Wa(a)||Za(a))throw za("cpws");var b=!1,c=e(a);void 0===c&&(c=K(a)?[]:Object.create(vc(a)),b=!0);f.push(a);g.push(c);return b?d(a,c):c}function e(a){switch(ja.call(a)){case "[object Int8Array]":case "[object Int16Array]":case "[object Int32Array]":case "[object Float32Array]":case "[object Float64Array]":case "[object Uint8Array]":case "[object Uint8ClampedArray]":case "[object Uint16Array]":case "[object Uint32Array]":return new a.constructor(c(a.buffer));
case "[object ArrayBuffer]":if(!a.slice){var b=new ArrayBuffer(a.byteLength);(new Uint8Array(b)).set(new Uint8Array(a));return b}return a.slice(0);case "[object Boolean]":case "[object Number]":case "[object String]":case "[object Date]":return new a.constructor(a.valueOf());case "[object RegExp]":return b=new RegExp(a.source,a.toString().match(/[^\/]*$/)[0]),b.lastIndex=a.lastIndex,b;case "[object Blob]":return new a.constructor([a],{type:a.type})}if(E(a.cloneNode))return a.cloneNode(!0)}var f=[],
g=[];if(b){if($d(b)||"[object ArrayBuffer]"===ja.call(b))throw za("cpta");if(a===b)throw za("cpi");K(b)?b.length=0:q(b,function(a,d){"$$hashKey"!==d&&delete b[d]});f.push(a);g.push(b);return d(a,b)}return c(a)}function fa(a,b){if(K(a)){b=b||[];for(var d=0,c=a.length;d<c;d++)b[d]=a[d]}else if(J(a))for(d in b=b||{},a)if("$"!==d.charAt(0)||"$"!==d.charAt(1))b[d]=a[d];return b||a}function na(a,b){if(a===b)return!0;if(null===a||null===b)return!1;if(a!==a&&b!==b)return!0;var d=typeof a,c;if(d==typeof b&&
"object"==d)if(K(a)){if(!K(b))return!1;if((d=a.length)==b.length){for(c=0;c<d;c++)if(!na(a[c],b[c]))return!1;return!0}}else{if(ha(a))return ha(b)?na(a.getTime(),b.getTime()):!1;if(Xa(a))return Xa(b)?a.toString()==b.toString():!1;if(Za(a)||Za(b)||Wa(a)||Wa(b)||K(b)||ha(b)||Xa(b))return!1;d=S();for(c in a)if("$"!==c.charAt(0)&&!E(a[c])){if(!na(a[c],b[c]))return!1;d[c]=!0}for(c in b)if(!(c in d)&&"$"!==c.charAt(0)&&v(b[c])&&!E(b[c]))return!1;return!0}return!1}function ab(a,b,d){return a.concat(ya.call(b,
d))}function bb(a,b){var d=2<arguments.length?ya.call(arguments,2):[];return!E(b)||b instanceof RegExp?b:d.length?function(){return arguments.length?b.apply(a,ab(d,arguments,0)):b.apply(a,d)}:function(){return arguments.length?b.apply(a,arguments):b.call(a)}}function ce(a,b){var d=b;"string"===typeof a&&"$"===a.charAt(0)&&"$"===a.charAt(1)?d=void 0:Wa(b)?d="$WINDOW":b&&F.document===b?d="$DOCUMENT":Za(b)&&(d="$SCOPE");return d}function cb(a,b){if(!y(a))return Q(b)||(b=b?2:null),JSON.stringify(a,ce,
b)}function wc(a){return I(a)?JSON.parse(a):a}function xc(a,b){a=a.replace(de,"");var d=Date.parse("Jan 01, 1970 00:00:00 "+a)/6E4;return isNaN(d)?b:d}function Tb(a,b,d){d=d?-1:1;var c=a.getTimezoneOffset();b=xc(b,c);d*=b-c;a=new Date(a.getTime());a.setMinutes(a.getMinutes()+d);return a}function ua(a){a=G(a).clone();try{a.empty()}catch(b){}var d=G("<div>").append(a).html();try{return a[0].nodeType===Na?L(d):d.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+L(b)})}catch(c){return L(d)}}
function yc(a){try{return decodeURIComponent(a)}catch(b){}}function zc(a){var b={};q((a||"").split("&"),function(a){var c,e,f;a&&(e=a=a.replace(/\+/g,"%20"),c=a.indexOf("="),-1!==c&&(e=a.substring(0,c),f=a.substring(c+1)),e=yc(e),v(e)&&(f=v(f)?yc(f):!0,sa.call(b,e)?K(b[e])?b[e].push(f):b[e]=[b[e],f]:b[e]=f))});return b}function Ub(a){var b=[];q(a,function(a,c){K(a)?q(a,function(a){b.push(ia(c,!0)+(!0===a?"":"="+ia(a,!0)))}):b.push(ia(c,!0)+(!0===a?"":"="+ia(a,!0)))});return b.length?b.join("&"):""}
function qb(a){return ia(a,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function ia(a,b){return encodeURIComponent(a).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,b?"%20":"+")}function ee(a,b){var d,c,e=Oa.length;for(c=0;c<e;++c)if(d=Oa[c]+b,I(d=a.getAttribute(d)))return d;return null}function fe(a,b){var d,c,e={};q(Oa,function(b){b+="app";!d&&a.hasAttribute&&a.hasAttribute(b)&&(d=a,c=a.getAttribute(b))});
q(Oa,function(b){b+="app";var e;!d&&(e=a.querySelector("["+b.replace(":","\\:")+"]"))&&(d=e,c=e.getAttribute(b))});d&&(e.strictDi=null!==ee(d,"strict-di"),b(d,c?[c]:[],e))}function Ac(a,b,d){J(d)||(d={});d=P({strictDi:!1},d);var c=function(){a=G(a);if(a.injector()){var c=a[0]===F.document?"document":ua(a);throw za("btstrpd",c.replace(/</,"&lt;").replace(/>/,"&gt;"));}b=b||[];b.unshift(["$provide",function(b){b.value("$rootElement",a)}]);d.debugInfoEnabled&&b.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);
b.unshift("ng");c=db(b,d.strictDi);c.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;F&&e.test(F.name)&&(d.debugInfoEnabled=!0,F.name=F.name.replace(e,""));if(F&&!f.test(F.name))return c();F.name=F.name.replace(f,"");da.resumeBootstrap=function(a){q(a,function(a){b.push(a)});return c()};E(da.resumeDeferredBootstrap)&&da.resumeDeferredBootstrap()}function ge(){F.name=
"NG_ENABLE_DEBUG_INFO!"+F.name;F.location.reload()}function he(a){a=da.element(a).injector();if(!a)throw za("test");return a.get("$$testability")}function Bc(a,b){b=b||"_";return a.replace(ie,function(a,c){return(c?b:"")+a.toLowerCase()})}function je(){var a;if(!Cc){var b=rb();(Y=y(b)?F.jQuery:b?F[b]:void 0)&&Y.fn.on?(G=Y,P(Y.fn,{scope:Pa.scope,isolateScope:Pa.isolateScope,controller:Pa.controller,injector:Pa.injector,inheritedData:Pa.inheritedData}),a=Y.cleanData,Y.cleanData=function(b){for(var c,
e=0,f;null!=(f=b[e]);e++)(c=Y._data(f,"events"))&&c.$destroy&&Y(f).triggerHandler("$destroy");a(b)}):G=T;da.element=G;Cc=!0}}function sb(a,b,d){if(!a)throw za("areq",b||"?",d||"required");return a}function Qa(a,b,d){d&&K(a)&&(a=a[a.length-1]);sb(E(a),b,"not a function, got "+(a&&"object"===typeof a?a.constructor.name||"Object":typeof a));return a}function Ra(a,b){if("hasOwnProperty"===a)throw za("badname",b);}function Dc(a,b,d){if(!b)return a;b=b.split(".");for(var c,e=a,f=b.length,g=0;g<f;g++)c=
b[g],a&&(a=(e=a)[c]);return!d&&E(a)?bb(e,a):a}function tb(a){for(var b=a[0],d=a[a.length-1],c,e=1;b!==d&&(b=b.nextSibling);e++)if(c||a[e]!==b)c||(c=G(ya.call(a,0,e))),c.push(b);return c||a}function S(){return Object.create(null)}function ke(a){function b(a,b,c){return a[b]||(a[b]=c())}var d=O("$injector"),c=O("ng");a=b(a,"angular",Object);a.$$minErr=a.$$minErr||O;return b(a,"module",function(){var a={};return function(f,g,h){if("hasOwnProperty"===f)throw c("badname","module");g&&a.hasOwnProperty(f)&&
(a[f]=null);return b(a,f,function(){function a(b,d,e,f){f||(f=c);return function(){f[e||"push"]([b,d,arguments]);return U}}function b(a,d){return function(b,e){e&&E(e)&&(e.$$moduleName=f);c.push([a,d,arguments]);return U}}if(!g)throw d("nomod",f);var c=[],e=[],p=[],x=a("$injector","invoke","push",e),U={_invokeQueue:c,_configBlocks:e,_runBlocks:p,requires:g,name:f,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:a("$provide","value"),constant:a("$provide",
"constant","unshift"),decorator:b("$provide","decorator"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),component:b("$compileProvider","component"),config:x,run:function(a){p.push(a);return this}};h&&x(h);return U})}})}function le(a){P(a,{bootstrap:Ac,copy:oa,extend:P,merge:Zd,equals:na,element:G,forEach:q,injector:db,noop:C,bind:bb,toJson:cb,fromJson:wc,identity:Ya,isUndefined:y,
isDefined:v,isString:I,isFunction:E,isObject:J,isNumber:Q,isElement:Rb,isArray:K,version:me,isDate:ha,lowercase:L,uppercase:ub,callbacks:{counter:0},getTestability:he,$$minErr:O,$$csp:Fa,reloadWithDebugInfo:ge});Vb=ke(F);Vb("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:ne});a.provider("$compile",Ec).directive({a:oe,input:Fc,textarea:Fc,form:pe,script:qe,select:re,style:se,option:te,ngBind:ue,ngBindHtml:ve,ngBindTemplate:we,ngClass:xe,ngClassEven:ye,ngClassOdd:ze,ngCloak:Ae,ngController:Be,
ngForm:Ce,ngHide:De,ngIf:Ee,ngInclude:Fe,ngInit:Ge,ngNonBindable:He,ngPluralize:Ie,ngRepeat:Je,ngShow:Ke,ngStyle:Le,ngSwitch:Me,ngSwitchWhen:Ne,ngSwitchDefault:Oe,ngOptions:Pe,ngTransclude:Qe,ngModel:Re,ngList:Se,ngChange:Te,pattern:Gc,ngPattern:Gc,required:Hc,ngRequired:Hc,minlength:Ic,ngMinlength:Ic,maxlength:Jc,ngMaxlength:Jc,ngValue:Ue,ngModelOptions:Ve}).directive({ngInclude:We}).directive(vb).directive(Kc);a.provider({$anchorScroll:Xe,$animate:Ye,$animateCss:Ze,$$animateJs:$e,$$animateQueue:af,
$$AnimateRunner:bf,$$animateAsyncRun:cf,$browser:df,$cacheFactory:ef,$controller:ff,$document:gf,$exceptionHandler:hf,$filter:Lc,$$forceReflow:jf,$interpolate:kf,$interval:lf,$http:mf,$httpParamSerializer:nf,$httpParamSerializerJQLike:of,$httpBackend:pf,$xhrFactory:qf,$location:rf,$log:sf,$parse:tf,$rootScope:uf,$q:vf,$$q:wf,$sce:xf,$sceDelegate:yf,$sniffer:zf,$templateCache:Af,$templateRequest:Bf,$$testability:Cf,$timeout:Df,$window:Ef,$$rAF:Ff,$$jqLite:Gf,$$HashMap:Hf,$$cookieReader:If})}])}function eb(a){return a.replace(Jf,
function(a,d,c,e){return e?c.toUpperCase():c}).replace(Kf,"Moz$1")}function Mc(a){a=a.nodeType;return 1===a||!a||9===a}function Nc(a,b){var d,c,e=b.createDocumentFragment(),f=[];if(Wb.test(a)){d=d||e.appendChild(b.createElement("div"));c=(Lf.exec(a)||["",""])[1].toLowerCase();c=ga[c]||ga._default;d.innerHTML=c[1]+a.replace(Mf,"<$1></$2>")+c[2];for(c=c[0];c--;)d=d.lastChild;f=ab(f,d.childNodes);d=e.firstChild;d.textContent=""}else f.push(b.createTextNode(a));e.textContent="";e.innerHTML="";q(f,function(a){e.appendChild(a)});
return e}function Oc(a,b){var d=a.parentNode;d&&d.replaceChild(b,a);b.appendChild(a)}function T(a){if(a instanceof T)return a;var b;I(a)&&(a=V(a),b=!0);if(!(this instanceof T)){if(b&&"<"!=a.charAt(0))throw Xb("nosel");return new T(a)}if(b){b=F.document;var d;a=(d=Nf.exec(a))?[b.createElement(d[1])]:(d=Nc(a,b))?d.childNodes:[]}Pc(this,a)}function Yb(a){return a.cloneNode(!0)}function wb(a,b){b||fb(a);if(a.querySelectorAll)for(var d=a.querySelectorAll("*"),c=0,e=d.length;c<e;c++)fb(d[c])}function Qc(a,
b,d,c){if(v(c))throw Xb("offargs");var e=(c=xb(a))&&c.events,f=c&&c.handle;if(f)if(b){var g=function(b){var c=e[b];v(d)&&$a(c||[],d);v(d)&&c&&0<c.length||(a.removeEventListener(b,f,!1),delete e[b])};q(b.split(" "),function(a){g(a);yb[a]&&g(yb[a])})}else for(b in e)"$destroy"!==b&&a.removeEventListener(b,f,!1),delete e[b]}function fb(a,b){var d=a.ng339,c=d&&gb[d];c&&(b?delete c.data[b]:(c.handle&&(c.events.$destroy&&c.handle({},"$destroy"),Qc(a)),delete gb[d],a.ng339=void 0))}function xb(a,b){var d=
a.ng339,d=d&&gb[d];b&&!d&&(a.ng339=d=++Of,d=gb[d]={events:{},data:{},handle:void 0});return d}function Zb(a,b,d){if(Mc(a)){var c=v(d),e=!c&&b&&!J(b),f=!b;a=(a=xb(a,!e))&&a.data;if(c)a[b]=d;else{if(f)return a;if(e)return a&&a[b];P(a,b)}}}function zb(a,b){return a.getAttribute?-1<(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+b+" "):!1}function Ab(a,b){b&&a.setAttribute&&q(b.split(" "),function(b){a.setAttribute("class",V((" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g,
" ").replace(" "+V(b)+" "," ")))})}function Bb(a,b){if(b&&a.setAttribute){var d=(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");q(b.split(" "),function(a){a=V(a);-1===d.indexOf(" "+a+" ")&&(d+=a+" ")});a.setAttribute("class",V(d))}}function Pc(a,b){if(b)if(b.nodeType)a[a.length++]=b;else{var d=b.length;if("number"===typeof d&&b.window!==b){if(d)for(var c=0;c<d;c++)a[a.length++]=b[c]}else a[a.length++]=b}}function Rc(a,b){return Cb(a,"$"+(b||"ngController")+"Controller")}function Cb(a,
b,d){9==a.nodeType&&(a=a.documentElement);for(b=K(b)?b:[b];a;){for(var c=0,e=b.length;c<e;c++)if(v(d=G.data(a,b[c])))return d;a=a.parentNode||11===a.nodeType&&a.host}}function Sc(a){for(wb(a,!0);a.firstChild;)a.removeChild(a.firstChild)}function Db(a,b){b||wb(a);var d=a.parentNode;d&&d.removeChild(a)}function Pf(a,b){b=b||F;if("complete"===b.document.readyState)b.setTimeout(a);else G(b).on("load",a)}function Tc(a,b){var d=Eb[b.toLowerCase()];return d&&Uc[ta(a)]&&d}function Qf(a,b){var d=function(c,
d){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=b[d||c.type],g=f?f.length:0;if(g){if(y(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};var k=f.specialHandlerWrapper||Rf;1<g&&(f=fa(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||k(a,c,f[l])}};d.elem=
a;return d}function Rf(a,b,d){d.call(a,b)}function Sf(a,b,d){var c=b.relatedTarget;c&&(c===a||Tf.call(a,c))||d.call(a,b)}function Gf(){this.$get=function(){return P(T,{hasClass:function(a,b){a.attr&&(a=a[0]);return zb(a,b)},addClass:function(a,b){a.attr&&(a=a[0]);return Bb(a,b)},removeClass:function(a,b){a.attr&&(a=a[0]);return Ab(a,b)}})}}function Ga(a,b){var d=a&&a.$$hashKey;if(d)return"function"===typeof d&&(d=a.$$hashKey()),d;d=typeof a;return d="function"==d||"object"==d&&null!==a?a.$$hashKey=
d+":"+(b||Yd)():d+":"+a}function Sa(a,b){if(b){var d=0;this.nextUid=function(){return++d}}q(a,this.put,this)}function Vc(a){a=(Function.prototype.toString.call(a)+" ").replace(Uf,"");return a.match(Vf)||a.match(Wf)}function Xf(a){return(a=Vc(a))?"function("+(a[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function db(a,b){function d(a){return function(b,c){if(J(b))q(b,tc(a));else return a(b,c)}}function c(a,b){Ra(a,"service");if(E(b)||K(b))b=p.instantiate(b);if(!b.$get)throw Ha("pget",a);return n[a+"Provider"]=
b}function e(a,b){return function(){var c=z.invoke(b,this);if(y(c))throw Ha("undef",a);return c}}function f(a,b,d){return c(a,{$get:!1!==d?e(a,b):b})}function g(a){sb(y(a)||K(a),"modulesToLoad","not an array");var b=[],c;q(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=p.get(e[0]);f[e[1]].apply(f,e[2])}}if(!m.get(a)){m.put(a,!0);try{I(a)?(c=Vb(a),b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):E(a)?b.push(p.invoke(a)):K(a)?b.push(p.invoke(a)):
Qa(a,"module")}catch(e){throw K(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Ha("modulerr",a,e.stack||e.message||e);}}});return b}function h(a,c){function d(b,e){if(a.hasOwnProperty(b)){if(a[b]===k)throw Ha("cdep",b+" <- "+l.join(" <- "));return a[b]}try{return l.unshift(b),a[b]=k,a[b]=c(b,e)}catch(f){throw a[b]===k&&delete a[b],f;}finally{l.shift()}}function e(a,c,f){var g=[];a=db.$$annotate(a,b,f);for(var h=0,k=a.length;h<k;h++){var l=a[h];
if("string"!==typeof l)throw Ha("itkn",l);g.push(c&&c.hasOwnProperty(l)?c[l]:d(l,f))}return g}return{invoke:function(a,b,c,d){"string"===typeof c&&(d=c,c=null);c=e(a,c,d);K(a)&&(a=a[a.length-1]);d=11>=Ba?!1:"function"===typeof a&&/^(?:class\s|constructor\()/.test(Function.prototype.toString.call(a)+" ");return d?(c.unshift(null),new (Function.prototype.bind.apply(a,c))):a.apply(b,c)},instantiate:function(a,b,c){var d=K(a)?a[a.length-1]:a;a=e(a,b,c);a.unshift(null);return new (Function.prototype.bind.apply(d,
a))},get:d,annotate:db.$$annotate,has:function(b){return n.hasOwnProperty(b+"Provider")||a.hasOwnProperty(b)}}}b=!0===b;var k={},l=[],m=new Sa([],!0),n={$provide:{provider:d(c),factory:d(f),service:d(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:d(function(a,b){return f(a,ca(b),!1)}),constant:d(function(a,b){Ra(a,"constant");n[a]=b;x[a]=b}),decorator:function(a,b){var c=p.get(a+"Provider"),d=c.$get;c.$get=function(){var a=z.invoke(d,c);return z.invoke(b,null,
{$delegate:a})}}}},p=n.$injector=h(n,function(a,b){da.isString(b)&&l.push(b);throw Ha("unpr",l.join(" <- "));}),x={},U=h(x,function(a,b){var c=p.get(a+"Provider",b);return z.invoke(c.$get,c,void 0,a)}),z=U;n.$injectorProvider={$get:ca(U)};var r=g(a),z=U.get("$injector");z.strictDi=b;q(r,function(a){a&&z.invoke(a)});return z}function Xe(){var a=!0;this.disableAutoScrolling=function(){a=!1};this.$get=["$window","$location","$rootScope",function(b,d,c){function e(a){var b=null;Array.prototype.some.call(a,
function(a){if("a"===ta(a))return b=a,!0});return b}function f(a){if(a){a.scrollIntoView();var c;c=g.yOffset;E(c)?c=c():Rb(c)?(c=c[0],c="fixed"!==b.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):Q(c)||(c=0);c&&(a=a.getBoundingClientRect().top,b.scrollBy(0,a-c))}else b.scrollTo(0,0)}function g(a){a=I(a)?a:d.hash();var b;a?(b=h.getElementById(a))?f(b):(b=e(h.getElementsByName(a)))?f(b):"top"===a&&f(null):f(null)}var h=b.document;a&&c.$watch(function(){return d.hash()},function(a,b){a===
b&&""===a||Pf(function(){c.$evalAsync(g)})});return g}]}function hb(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;K(a)&&(a=a.join(" "));K(b)&&(b=b.join(" "));return a+" "+b}function Yf(a){I(a)&&(a=a.split(" "));var b=S();q(a,function(a){a.length&&(b[a]=!0)});return b}function Ia(a){return J(a)?a:{}}function Zf(a,b,d,c){function e(a){try{a.apply(null,ya.call(arguments,1))}finally{if(U--,0===U)for(;z.length;)try{z.pop()()}catch(b){d.error(b)}}}function f(){w=null;g();h()}function g(){r=ka();
r=y(r)?null:r;na(r,H)&&(r=H);H=r}function h(){if(u!==k.url()||D!==r)u=k.url(),D=r,q(B,function(a){a(k.url(),r)})}var k=this,l=a.location,m=a.history,n=a.setTimeout,p=a.clearTimeout,x={};k.isMock=!1;var U=0,z=[];k.$$completeOutstandingRequest=e;k.$$incOutstandingRequestCount=function(){U++};k.notifyWhenNoOutstandingRequests=function(a){0===U?a():z.push(a)};var r,D,u=l.href,t=b.find("base"),w=null,ka=c.history?function(){try{return m.state}catch(a){}}:C;g();D=r;k.url=function(b,d,e){y(e)&&(e=null);
l!==a.location&&(l=a.location);m!==a.history&&(m=a.history);if(b){var f=D===e;if(u===b&&(!c.history||f))return k;var h=u&&Ja(u)===Ja(b);u=b;D=e;!c.history||h&&f?(h||(w=b),d?l.replace(b):h?(d=l,e=b.indexOf("#"),e=-1===e?"":b.substr(e),d.hash=e):l.href=b,l.href!==b&&(w=b)):(m[d?"replaceState":"pushState"](e,"",b),g(),D=r);w&&(w=b);return k}return w||l.href.replace(/%27/g,"'")};k.state=function(){return r};var B=[],A=!1,H=null;k.onUrlChange=function(b){if(!A){if(c.history)G(a).on("popstate",f);G(a).on("hashchange",
f);A=!0}B.push(b);return b};k.$$applicationDestroyed=function(){G(a).off("hashchange popstate",f)};k.$$checkUrlChange=h;k.baseHref=function(){var a=t.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};k.defer=function(a,b){var c;U++;c=n(function(){delete x[c];e(a)},b||0);x[c]=!0;return c};k.defer.cancel=function(a){return x[a]?(delete x[a],p(a),e(C),!0):!1}}function df(){this.$get=["$window","$log","$sniffer","$document",function(a,b,d,c){return new Zf(a,c,b,d)}]}function ef(){this.$get=
function(){function a(a,c){function e(a){a!=n&&(p?p==a&&(p=a.n):p=a,f(a.n,a.p),f(a,n),n=a,n.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(a in b)throw O("$cacheFactory")("iid",a);var g=0,h=P({},c,{id:a}),k=S(),l=c&&c.capacity||Number.MAX_VALUE,m=S(),n=null,p=null;return b[a]={put:function(a,b){if(!y(b)){if(l<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});e(c)}a in k||g++;k[a]=b;g>l&&this.remove(p.key);return b}},get:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;e(b)}return k[a]},
remove:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;b==n&&(n=b.p);b==p&&(p=b.n);f(b.n,b.p);delete m[a]}a in k&&(delete k[a],g--)},removeAll:function(){k=S();g=0;m=S();n=p=null},destroy:function(){m=h=k=null;delete b[a]},info:function(){return P({},h,{size:g})}}}var b={};a.info=function(){var a={};q(b,function(b,e){a[e]=b.info()});return a};a.get=function(a){return b[a]};return a}}function Af(){this.$get=["$cacheFactory",function(a){return a("templates")}]}function Ec(a,b){function d(a,
b,c){var d=/^\s*([@&<]|=(\*?))(\??)\s*(\w*)\s*$/,e=S();q(a,function(a,f){if(a in n)e[f]=n[a];else{var g=a.match(d);if(!g)throw ea("iscp",b,f,a,c?"controller bindings definition":"isolate scope definition");e[f]={mode:g[1][0],collection:"*"===g[2],optional:"?"===g[3],attrName:g[4]||f};g[4]&&(n[a]=e[f])}});return e}function c(a){var b=a.charAt(0);if(!b||b!==L(b))throw ea("baddir",a);if(a!==a.trim())throw ea("baddir",a);}function e(a){var b=a.require||a.controller&&a.name;!K(b)&&J(b)&&q(b,function(a,
c){var d=a.match(l);a.substring(d[0].length)||(b[c]=d[0]+c)});return b}var f={},g=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,h=/(([\w\-]+)(?:\:([^;]+))?;?)/,k=be("ngSrc,ngSrcset,src,srcset"),l=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,m=/^(on[a-z]+|formaction)$/,n=S();this.directive=function z(b,d){Ra(b,"directive");I(b)?(c(b),sb(d,"directiveFactory"),f.hasOwnProperty(b)||(f[b]=[],a.factory(b+"Directive",["$injector","$exceptionHandler",function(a,c){var d=[];q(f[b],function(f,g){try{var h=a.invoke(f);E(h)?h={compile:ca(h)}:
!h.compile&&h.link&&(h.compile=ca(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||b;h.require=e(h);h.restrict=h.restrict||"EA";h.$$moduleName=f.$$moduleName;d.push(h)}catch(k){c(k)}});return d}])),f[b].push(d)):q(b,tc(z));return this};this.component=function(a,b){function c(a){function e(b){return E(b)||K(b)?function(c,d){return a.invoke(b,this,{$element:c,$attrs:d})}:b}var f=b.template||b.templateUrl?b.template:"",g={controller:d,controllerAs:Wc(b.controller)||b.controllerAs||"$ctrl",
template:e(f),templateUrl:e(b.templateUrl),transclude:b.transclude,scope:{},bindToController:b.bindings||{},restrict:"E",require:b.require};q(b,function(a,b){"$"===b.charAt(0)&&(g[b]=a)});return g}var d=b.controller||function(){};q(b,function(a,b){"$"===b.charAt(0)&&(c[b]=a,E(d)&&(d[b]=a))});c.$inject=["$injector"];return this.directive(a,c)};this.aHrefSanitizationWhitelist=function(a){return v(a)?(b.aHrefSanitizationWhitelist(a),this):b.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=
function(a){return v(a)?(b.imgSrcSanitizationWhitelist(a),this):b.imgSrcSanitizationWhitelist()};var p=!0;this.debugInfoEnabled=function(a){return v(a)?(p=a,this):p};var x=10;this.onChangesTtl=function(a){return arguments.length?(x=a,this):x};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$sce","$animate","$$sanitizeUri",function(a,b,c,e,n,w,ka,B,A,H){function M(){try{if(!--oa)throw Y=void 0,ea("infchng",x);ka.$apply(function(){for(var a=
0,b=Y.length;a<b;++a)Y[a]();Y=void 0})}finally{oa++}}function Aa(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a}function R(a,b,c){la.innerHTML="<span "+b+">";b=la.firstChild.attributes;var d=b[0];b.removeNamedItem(d.name);d.value=c;a.attributes.setNamedItem(d)}function N(a,b){try{a.addClass(b)}catch(c){}}function aa(a,b,c,d,e){a instanceof G||(a=G(a));for(var f=/\S+/,g=0,h=a.length;g<h;g++){var k=a[g];k.nodeType===Na&&k.nodeValue.match(f)&&
Oc(k,a[g]=F.document.createElement("span"))}var l=s(a,b,a,c,d,e);aa.$$addScopeClass(a);var m=null;return function(b,c,d){sb(b,"scope");e&&e.needsNewScope&&(b=b.$parent.$new());d=d||{};var f=d.parentBoundTranscludeFn,g=d.transcludeControllers;d=d.futureParentElement;f&&f.$$boundTransclude&&(f=f.$$boundTransclude);m||(m=(d=d&&d[0])?"foreignobject"!==ta(d)&&ja.call(d).match(/SVG/)?"svg":"html":"html");d="html"!==m?G(ba(m,G("<div>").append(a).html())):c?Pa.clone.call(a):a;if(g)for(var h in g)d.data("$"+
h+"Controller",g[h].instance);aa.$$addScopeInfo(d,b);c&&c(d,b);l&&l(b,d,d,f);return d}}function s(a,b,c,d,e,f){function g(a,c,d,e){var f,k,l,m,n,u,r;if(p)for(r=Array(c.length),m=0;m<h.length;m+=3)f=h[m],r[f]=c[f];else r=c;m=0;for(n=h.length;m<n;)k=r[h[m++]],c=h[m++],f=h[m++],c?(c.scope?(l=a.$new(),aa.$$addScopeInfo(G(k),l)):l=a,u=c.transcludeOnThisElement?va(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?va(a,b):null,c(f,l,k,d,u)):f&&f(a,k.childNodes,void 0,e)}for(var h=[],k,l,m,n,p,u=0;u<
a.length;u++){k=new Aa;l=$b(a[u],[],k,0===u?d:void 0,e);(f=l.length?Ta(l,a[u],k,b,c,null,[],[],f):null)&&f.scope&&aa.$$addScopeClass(k.$$element);k=f&&f.terminal||!(m=a[u].childNodes)||!m.length?null:s(m,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||k)h.push(u,f,k),n=!0,p=p||f;f=null}return n?g:null}function va(a,b,c){function d(e,f,g,h,k){e||(e=a.$new(!1,k),e.$$transcluded=!0);return b(e,f,{parentBoundTranscludeFn:c,transcludeControllers:g,futureParentElement:h})}
var e=d.$$slots=S(),f;for(f in b.$$slots)e[f]=b.$$slots[f]?va(a,b.$$slots[f],c):null;return d}function $b(a,b,c,d,e){var f=c.$attr,k;switch(a.nodeType){case 1:Da(b,wa(ta(a)),"E",d,e);for(var l,m,n,p=a.attributes,u=0,r=p&&p.length;u<r;u++){var B=!1,x=!1;l=p[u];k=l.name;m=V(l.value);l=wa(k);if(n=xa.test(l))k=k.replace(Xc,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()});(l=l.match(za))&&Q(l[1])&&(B=k,x=k.substr(0,k.length-5)+"end",k=k.substr(0,k.length-6));l=wa(k.toLowerCase());f[l]=
k;if(n||!c.hasOwnProperty(l))c[l]=m,Tc(a,l)&&(c[l]=!0);ha(a,b,m,l,n);Da(b,l,"A",d,e,B,x)}a=a.className;J(a)&&(a=a.animVal);if(I(a)&&""!==a)for(;k=h.exec(a);)l=wa(k[2]),Da(b,l,"C",d,e)&&(c[l]=V(k[3])),a=a.substr(k.index+k[0].length);break;case Na:if(11===Ba)for(;a.parentNode&&a.nextSibling&&a.nextSibling.nodeType===Na;)a.nodeValue+=a.nextSibling.nodeValue,a.parentNode.removeChild(a.nextSibling);$(b,a.nodeValue);break;case 8:try{if(k=g.exec(a.nodeValue))l=wa(k[1]),Da(b,l,"M",d,e)&&(c[l]=V(k[2]))}catch(A){}}b.sort(X);
return b}function Yc(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ea("uterdir",b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return G(d)}function O(a,b,c){return function(d,e,f,g,h){e=Yc(e[0],b,c);return a(d,e,f,g,h)}}function ac(a,b,c,d,e,f){var g;return a?aa(b,c,d,e,f):function(){g||(g=aa(b,c,d,e,f),b=c=f=null);return g.apply(this,arguments)}}function Ta(a,b,d,e,f,g,h,k,l){function m(a,b,c,d){if(a){c&&
(a=O(a,c,d));a.require=t.require;a.directiveName=M;if(B===t||t.$$isolateScope)a=fa(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=O(b,c,d));b.require=t.require;b.directiveName=M;if(B===t||t.$$isolateScope)b=fa(b,{isolateScope:!0});k.push(b)}}function n(a,c,e,f,g){function l(a,b,c,d){var e;Za(a)||(d=c,c=b,b=a,a=void 0);w&&(e=z);c||(c=w?D.parent():D);if(d){var f=g.$$slots[d];if(f)return f(a,b,e,c,Fb);if(y(f))throw ea("noslot",d,ua(D));}else return g(a,b,e,c,Fb)}var m,p,A,t,H,z,N,D;b===e?(f=d,D=d.$$element):
(D=G(e),f=new Aa(D,d));H=c;B?t=c.$new(!0):u&&(H=c.$parent);g&&(N=l,N.$$boundTransclude=g,N.isSlotFilled=function(a){return!!g.$$slots[a]});r&&(z=$f(D,f,N,r,t,c,B));B&&(aa.$$addScopeInfo(D,t,!0,!(x&&(x===B||x===B.$$originalDirective))),aa.$$addScopeClass(D,!0),t.$$isolateBindings=B.$$isolateBindings,p=ga(c,f,t,t.$$isolateBindings,B),p.removeWatches&&t.$on("$destroy",p.removeWatches));for(m in z){p=r[m];A=z[m];var R=p.$$bindings.bindToController;A.bindingInfo=A.identifier&&R?ga(H,f,A.instance,R,p):
{};var M=A();M!==A.instance&&(A.instance=M,D.data("$"+p.name+"Controller",M),A.bindingInfo.removeWatches&&A.bindingInfo.removeWatches(),A.bindingInfo=ga(H,f,A.instance,R,p))}q(r,function(a,b){var c=a.require;a.bindToController&&!K(c)&&J(c)&&P(z[b].instance,ib(b,c,D,z))});q(z,function(a){var b=a.instance;E(b.$onChanges)&&b.$onChanges(a.bindingInfo.initialChanges);E(b.$onInit)&&b.$onInit();E(b.$onDestroy)&&H.$on("$destroy",function(){b.$onDestroy()})});m=0;for(p=h.length;m<p;m++)A=h[m],ia(A,A.isolateScope?
t:c,D,f,A.require&&ib(A.directiveName,A.require,D,z),N);var Fb=c;B&&(B.template||null===B.templateUrl)&&(Fb=t);a&&a(Fb,e.childNodes,void 0,g);for(m=k.length-1;0<=m;m--)A=k[m],ia(A,A.isolateScope?t:c,D,f,A.require&&ib(A.directiveName,A.require,D,z),N);q(z,function(a){a=a.instance;E(a.$postLink)&&a.$postLink()})}l=l||{};for(var p=-Number.MAX_VALUE,u=l.newScopeDirective,r=l.controllerDirectives,B=l.newIsolateScopeDirective,x=l.templateDirective,A=l.nonTlbTranscludeDirective,H=!1,z=!1,w=l.hasElementTranscludeDirective,
N=d.$$element=G(b),t,M,R,ka=e,s,Ca=!1,va=!1,v,C=0,F=a.length;C<F;C++){t=a[C];var I=t.$$start,Ta=t.$$end;I&&(N=Yc(b,I,Ta));R=void 0;if(p>t.priority)break;if(v=t.scope)t.templateUrl||(J(v)?(W("new/isolated scope",B||u,t,N),B=t):W("new/isolated scope",B,t,N)),u=u||t;M=t.name;if(!Ca&&(t.replace&&(t.templateUrl||t.template)||t.transclude&&!t.$$tlb)){for(v=C+1;Ca=a[v++];)if(Ca.transclude&&!Ca.$$tlb||Ca.replace&&(Ca.templateUrl||Ca.template)){va=!0;break}Ca=!0}!t.templateUrl&&t.controller&&(v=t.controller,
r=r||S(),W("'"+M+"' controller",r[M],t,N),r[M]=t);if(v=t.transclude)if(H=!0,t.$$tlb||(W("transclusion",A,t,N),A=t),"element"==v)w=!0,p=t.priority,R=N,N=d.$$element=G(aa.$$createComment(M,d[M])),b=N[0],ca(f,ya.call(R,0),b),R[0].$$parentNode=R[0].parentNode,ka=ac(va,R,e,p,g&&g.name,{nonTlbTranscludeDirective:A});else{var L=S();R=G(Yb(b)).contents();if(J(v)){R=[];var Q=S(),Da=S();q(v,function(a,b){var c="?"===a.charAt(0);a=c?a.substring(1):a;Q[a]=b;L[b]=null;Da[b]=c});q(N.contents(),function(a){var b=
Q[wa(ta(a))];b?(Da[b]=!0,L[b]=L[b]||[],L[b].push(a)):R.push(a)});q(Da,function(a,b){if(!a)throw ea("reqslot",b);});for(var X in L)L[X]&&(L[X]=ac(va,L[X],e))}N.empty();ka=ac(va,R,e,void 0,void 0,{needsNewScope:t.$$isolateScope||t.$$newScope});ka.$$slots=L}if(t.template)if(z=!0,W("template",x,t,N),x=t,v=E(t.template)?t.template(N,d):t.template,v=ra(v),t.replace){g=t;R=Wb.test(v)?Zc(ba(t.templateNamespace,V(v))):[];b=R[0];if(1!=R.length||1!==b.nodeType)throw ea("tplrt",M,"");ca(f,N,b);F={$attr:{}};v=
$b(b,[],F);var $=a.splice(C+1,a.length-(C+1));(B||u)&&$c(v,B,u);a=a.concat(v).concat($);T(d,F);F=a.length}else N.html(v);if(t.templateUrl)z=!0,W("template",x,t,N),x=t,t.replace&&(g=t),n=Z(a.splice(C,a.length-C),N,d,f,H&&ka,h,k,{controllerDirectives:r,newScopeDirective:u!==t&&u,newIsolateScopeDirective:B,templateDirective:x,nonTlbTranscludeDirective:A}),F=a.length;else if(t.compile)try{s=t.compile(N,d,ka);var Y=t.$$originalDirective||t;E(s)?m(null,bb(Y,s),I,Ta):s&&m(bb(Y,s.pre),bb(Y,s.post),I,Ta)}catch(da){c(da,
ua(N))}t.terminal&&(n.terminal=!0,p=Math.max(p,t.priority))}n.scope=u&&!0===u.scope;n.transcludeOnThisElement=H;n.templateOnThisElement=z;n.transclude=ka;l.hasElementTranscludeDirective=w;return n}function ib(a,b,c,d){var e;if(I(b)){var f=b.match(l);b=b.substring(f[0].length);var g=f[1]||f[3],f="?"===f[2];"^^"===g?c=c.parent():e=(e=d&&d[b])&&e.instance;if(!e){var h="$"+b+"Controller";e=g?c.inheritedData(h):c.data(h)}if(!e&&!f)throw ea("ctreq",b,a);}else if(K(b))for(e=[],g=0,f=b.length;g<f;g++)e[g]=
ib(a,b[g],c,d);else J(b)&&(e={},q(b,function(b,f){e[f]=ib(a,b,c,d)}));return e||null}function $f(a,b,c,d,e,f,g){var h=S(),k;for(k in d){var l=d[k],m={$scope:l===g||l.$$isolateScope?e:f,$element:a,$attrs:b,$transclude:c},n=l.controller;"@"==n&&(n=b[l.name]);m=w(n,m,!0,l.controllerAs);h[l.name]=m;a.data("$"+l.name+"Controller",m.instance)}return h}function $c(a,b,c){for(var d=0,e=a.length;d<e;d++)a[d]=Sb(a[d],{$$isolateScope:b,$$newScope:c})}function Da(b,e,g,h,k,l,m){if(e===k)return null;k=null;if(f.hasOwnProperty(e)){var n;
e=a.get(e+"Directive");for(var p=0,u=e.length;p<u;p++)try{if(n=e[p],(y(h)||h>n.priority)&&-1!=n.restrict.indexOf(g)){l&&(n=Sb(n,{$$start:l,$$end:m}));if(!n.$$bindings){var r=n,B=n,A=n.name,x={isolateScope:null,bindToController:null};J(B.scope)&&(!0===B.bindToController?(x.bindToController=d(B.scope,A,!0),x.isolateScope={}):x.isolateScope=d(B.scope,A,!1));J(B.bindToController)&&(x.bindToController=d(B.bindToController,A,!0));if(J(x.bindToController)){var t=B.controller,H=B.controllerAs;if(!t)throw ea("noctrl",
A);if(!Wc(t,H))throw ea("noident",A);}var N=r.$$bindings=x;J(N.isolateScope)&&(n.$$isolateBindings=N.isolateScope)}b.push(n);k=n}}catch(w){c(w)}}return k}function Q(b){if(f.hasOwnProperty(b))for(var c=a.get(b+"Directive"),d=0,e=c.length;d<e;d++)if(b=c[d],b.multiElement)return!0;return!1}function T(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;q(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});q(b,function(b,f){"class"==f?(N(e,b),a["class"]=(a["class"]?
a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function Z(a,b,c,d,f,g,h,k){var l=[],m,n,p=b[0],B=a.shift(),r=Sb(B,{templateUrl:null,transclude:null,replace:null,$$originalDirective:B}),A=E(B.templateUrl)?B.templateUrl(b,c):B.templateUrl,x=B.templateNamespace;b.empty();e(A).then(function(e){var u,t;e=ra(e);if(B.replace){e=Wb.test(e)?Zc(ba(x,V(e))):[];u=e[0];if(1!=e.length||1!==u.nodeType)throw ea("tplrt",
B.name,A);e={$attr:{}};ca(d,b,u);var H=$b(u,[],e);J(B.scope)&&$c(H,!0);a=H.concat(a);T(c,e)}else u=p,b.html(e);a.unshift(r);m=Ta(a,u,c,f,b,B,g,h,k);q(d,function(a,c){a==u&&(d[c]=b[0])});for(n=s(b[0].childNodes,f);l.length;){e=l.shift();t=l.shift();var z=l.shift(),D=l.shift(),H=b[0];if(!e.$$destroyed){if(t!==p){var w=t.className;k.hasElementTranscludeDirective&&B.replace||(H=Yb(u));ca(z,G(t),H);N(G(H),w)}t=m.transcludeOnThisElement?va(e,m.transclude,D):D;m(n,e,H,d,t)}}l=null});return function(a,b,
c,d,e){a=e;b.$$destroyed||(l?l.push(b,c,d,a):(m.transcludeOnThisElement&&(a=va(b,m.transclude,e)),m(n,b,c,d,a)))}}function X(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function W(a,b,c,d){function e(a){return a?" (module: "+a+")":""}if(b)throw ea("multidir",b.name,e(b.$$moduleName),c.name,e(c.$$moduleName),a,ua(d));}function $(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&aa.$$addBindingClass(a);
return function(a,c){var e=c.parent();b||aa.$$addBindingClass(e);aa.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function ba(a,b){a=L(a||"html");switch(a){case "svg":case "math":var c=F.document.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function da(a,b){if("srcdoc"==b)return B.HTML;var c=ta(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||"ngSrc"==b))return B.RESOURCE_URL}function ha(a,
c,d,e,f){var g=da(a,e);f=k[e]||f;var h=b(d,!0,g,f);if(h){if("multiple"===e&&"select"===ta(a))throw ea("selmulti",ua(a));c.push({priority:100,compile:function(){return{pre:function(a,c,k){c=k.$$observers||(k.$$observers=S());if(m.test(e))throw ea("nodomevents");var l=k[e];l!==d&&(h=l&&b(l,!0,g,f),d=l);h&&(k[e]=h(a),(c[e]||(c[e]=[])).$$inter=!0,(k.$$observers&&k.$$observers[e].$$scope||a).$watch(h,function(a,b){"class"===e&&a!=b?k.$updateClass(a,b):k.$set(e,a)}))}}}})}}function ca(a,b,c){var d=b[0],
e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=F.document.createDocumentFragment();for(g=0;g<e;g++)a.appendChild(b[g]);G.hasData(d)&&(G.data(c,G.data(d)),G(d).off("$destroy"));G.cleanData(a.querySelectorAll("*"));for(g=1;g<e;g++)delete b[g];b[0]=c;b.length=1}function fa(a,b){return P(function(){return a.apply(null,arguments)},
a,b)}function ia(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,ua(d))}}function ga(a,c,d,e,f){function g(b,c,e){E(d.$onChanges)&&c!==e&&(Y||(a.$$postDigest(M),Y=[]),m||(m={},Y.push(h)),m[b]&&(e=m[b].previousValue),m[b]=new Gb(e,c))}function h(){d.$onChanges(m);m=void 0}var k=[],l={},m;q(e,function(e,h){var m=e.attrName,p=e.optional,u,B,A,x;switch(e.mode){case "@":p||sa.call(c,m)||(d[h]=c[m]=void 0);c.$observe(m,function(a){if(I(a)||Ea(a))g(h,a,d[h]),d[h]=a});c.$$observers[m].$$scope=a;u=c[m];I(u)?d[h]=
b(u)(a):Ea(u)&&(d[h]=u);l[h]=new Gb(bc,d[h]);break;case "=":if(!sa.call(c,m)){if(p)break;c[m]=void 0}if(p&&!c[m])break;B=n(c[m]);x=B.literal?na:function(a,b){return a===b||a!==a&&b!==b};A=B.assign||function(){u=d[h]=B(a);throw ea("nonassign",c[m],m,f.name);};u=d[h]=B(a);p=function(b){x(b,d[h])||(x(b,u)?A(a,b=d[h]):d[h]=b);return u=b};p.$stateful=!0;p=e.collection?a.$watchCollection(c[m],p):a.$watch(n(c[m],p),null,B.literal);k.push(p);break;case "<":if(!sa.call(c,m)){if(p)break;c[m]=void 0}if(p&&!c[m])break;
B=n(c[m]);var H=d[h]=B(a);l[h]=new Gb(bc,d[h]);p=a.$watch(B,function(a,b){if(b===a){if(b===H)return;b=H}g(h,a,b);d[h]=a},B.literal);k.push(p);break;case "&":B=c.hasOwnProperty(m)?n(c[m]):C;if(B===C&&p)break;d[h]=function(b){return B(a,b)}}});return{initialChanges:l,removeWatches:k.length&&function(){for(var a=0,b=k.length;a<b;++a)k[a]()}}}var ma=/^\w/,la=F.document.createElement("div"),oa=x,Y;Aa.prototype={$normalize:wa,$addClass:function(a){a&&0<a.length&&A.addClass(this.$$element,a)},$removeClass:function(a){a&&
0<a.length&&A.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=ad(a,b);c&&c.length&&A.addClass(this.$$element,c);(c=ad(b,a))&&c.length&&A.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=Tc(this.$$element[0],a),g=bd[a],h=a;f?(this.$$element.prop(a,b),e=f):g&&(this[g]=b,h=g);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=Bc(a,"-"));f=ta(this.$$element);if("a"===f&&("href"===a||"xlinkHref"===a)||"img"===f&&"src"===a)this[a]=b=H(b,"src"===a);else if("img"===
f&&"srcset"===a&&v(b)){for(var f="",g=V(b),k=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,k=/\s/.test(g)?k:/(,)/,g=g.split(k),k=Math.floor(g.length/2),l=0;l<k;l++)var m=2*l,f=f+H(V(g[m]),!0),f=f+(" "+V(g[m+1]));g=V(g[2*l]).split(/\s/);f+=H(V(g[0]),!0);2===g.length&&(f+=" "+V(g[1]));this[a]=b=f}!1!==d&&(null===b||y(b)?this.$$element.removeAttr(e):ma.test(e)?this.$$element.attr(e,b):R(this.$$element[0],e,b));(a=this.$$observers)&&q(a[h],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,
d=c.$$observers||(c.$$observers=S()),e=d[a]||(d[a]=[]);e.push(b);ka.$evalAsync(function(){e.$$inter||!c.hasOwnProperty(a)||y(c[a])||b(c[a])});return function(){$a(e,b)}}};var pa=b.startSymbol(),qa=b.endSymbol(),ra="{{"==pa&&"}}"==qa?Ya:function(a){return a.replace(/\{\{/g,pa).replace(/}}/g,qa)},xa=/^ngAttr[A-Z]/,za=/^(.+)Start$/;aa.$$addBindingInfo=p?function(a,b){var c=a.data("$binding")||[];K(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:C;aa.$$addBindingClass=p?function(a){N(a,"ng-binding")}:
C;aa.$$addScopeInfo=p?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:C;aa.$$addScopeClass=p?function(a,b){N(a,b?"ng-isolate-scope":"ng-scope")}:C;aa.$$createComment=function(a,b){var c="";p&&(c=" "+(a||"")+": ",b&&(c+=b+" "));return F.document.createComment(c)};return aa}]}function Gb(a,b){this.previousValue=a;this.currentValue=b}function wa(a){return eb(a.replace(Xc,""))}function ad(a,b){var d="",c=a.split(/\s+/),e=b.split(/\s+/),f=0;a:for(;f<c.length;f++){for(var g=
c[f],h=0;h<e.length;h++)if(g==e[h])continue a;d+=(0<d.length?" ":"")+g}return d}function Zc(a){a=G(a);var b=a.length;if(1>=b)return a;for(;b--;)8===a[b].nodeType&&ag.call(a,b,1);return a}function Wc(a,b){if(b&&I(b))return b;if(I(a)){var d=cd.exec(a);if(d)return d[3]}}function ff(){var a={},b=!1;this.has=function(b){return a.hasOwnProperty(b)};this.register=function(b,c){Ra(b,"controller");J(b)?P(a,b):a[b]=c};this.allowGlobals=function(){b=!0};this.$get=["$injector","$window",function(d,c){function e(a,
b,c,d){if(!a||!J(a.$scope))throw O("$controller")("noscp",d,b);a.$scope[b]=c}return function(f,g,h,k){var l,m,n;h=!0===h;k&&I(k)&&(n=k);if(I(f)){k=f.match(cd);if(!k)throw bg("ctrlfmt",f);m=k[1];n=n||k[3];f=a.hasOwnProperty(m)?a[m]:Dc(g.$scope,m,!0)||(b?Dc(c,m,!0):void 0);Qa(f,m,!0)}if(h)return h=(K(f)?f[f.length-1]:f).prototype,l=Object.create(h||null),n&&e(g,n,l,m||f.name),P(function(){var a=d.invoke(f,l,g,m);a!==l&&(J(a)||E(a))&&(l=a,n&&e(g,n,l,m||f.name));return l},{instance:l,identifier:n});l=
d.instantiate(f,g,m);n&&e(g,n,l,m||f.name);return l}}]}function gf(){this.$get=["$window",function(a){return G(a.document)}]}function hf(){this.$get=["$log",function(a){return function(b,d){a.error.apply(a,arguments)}}]}function cc(a){return J(a)?ha(a)?a.toISOString():cb(a):a}function nf(){this.$get=function(){return function(a){if(!a)return"";var b=[];sc(a,function(a,c){null===a||y(a)||(K(a)?q(a,function(a){b.push(ia(c)+"="+ia(cc(a)))}):b.push(ia(c)+"="+ia(cc(a))))});return b.join("&")}}}function of(){this.$get=
function(){return function(a){function b(a,e,f){null===a||y(a)||(K(a)?q(a,function(a,c){b(a,e+"["+(J(a)?c:"")+"]")}):J(a)&&!ha(a)?sc(a,function(a,c){b(a,e+(f?"":"[")+c+(f?"":"]"))}):d.push(ia(e)+"="+ia(cc(a))))}if(!a)return"";var d=[];b(a,"",!0);return d.join("&")}}}function dc(a,b){if(I(a)){var d=a.replace(cg,"").trim();if(d){var c=b("Content-Type");(c=c&&0===c.indexOf(dd))||(c=(c=d.match(dg))&&eg[c[0]].test(d));c&&(a=wc(d))}}return a}function ed(a){var b=S(),d;I(a)?q(a.split("\n"),function(a){d=
a.indexOf(":");var e=L(V(a.substr(0,d)));a=V(a.substr(d+1));e&&(b[e]=b[e]?b[e]+", "+a:a)}):J(a)&&q(a,function(a,d){var f=L(d),g=V(a);f&&(b[f]=b[f]?b[f]+", "+g:g)});return b}function fd(a){var b;return function(d){b||(b=ed(a));return d?(d=b[L(d)],void 0===d&&(d=null),d):b}}function gd(a,b,d,c){if(E(c))return c(a,b,d);q(c,function(c){a=c(a,b,d)});return a}function mf(){var a=this.defaults={transformResponse:[dc],transformRequest:[function(a){return J(a)&&"[object File]"!==ja.call(a)&&"[object Blob]"!==
ja.call(a)&&"[object FormData]"!==ja.call(a)?cb(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:fa(ec),put:fa(ec),patch:fa(ec)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer"},b=!1;this.useApplyAsync=function(a){return v(a)?(b=!!a,this):b};var d=!0;this.useLegacyPromiseExtensions=function(a){return v(a)?(d=!!a,this):d};var c=this.interceptors=[];this.$get=["$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector",
function(e,f,g,h,k,l){function m(b){function c(a){var b=P({},a);b.data=gd(a.data,a.headers,a.status,f.transformResponse);a=a.status;return 200<=a&&300>a?b:k.reject(b)}function e(a,b){var c,d={};q(a,function(a,e){E(a)?(c=a(b),null!=c&&(d[e]=c)):d[e]=a});return d}if(!J(b))throw O("$http")("badreq",b);if(!I(b.url))throw O("$http")("badreq",b.url);var f=P({method:"get",transformRequest:a.transformRequest,transformResponse:a.transformResponse,paramSerializer:a.paramSerializer},b);f.headers=function(b){var c=
a.headers,d=P({},b.headers),f,g,h,c=P({},c.common,c[L(b.method)]);a:for(f in c){g=L(f);for(h in d)if(L(h)===g)continue a;d[f]=c[f]}return e(d,fa(b))}(b);f.method=ub(f.method);f.paramSerializer=I(f.paramSerializer)?l.get(f.paramSerializer):f.paramSerializer;var g=[function(b){var d=b.headers,e=gd(b.data,fd(d),void 0,b.transformRequest);y(e)&&q(d,function(a,b){"content-type"===L(b)&&delete d[b]});y(b.withCredentials)&&!y(a.withCredentials)&&(b.withCredentials=a.withCredentials);return n(b,e).then(c,
c)},void 0],h=k.when(f);for(q(U,function(a){(a.request||a.requestError)&&g.unshift(a.request,a.requestError);(a.response||a.responseError)&&g.push(a.response,a.responseError)});g.length;){b=g.shift();var m=g.shift(),h=h.then(b,m)}d?(h.success=function(a){Qa(a,"fn");h.then(function(b){a(b.data,b.status,b.headers,f)});return h},h.error=function(a){Qa(a,"fn");h.then(null,function(b){a(b.data,b.status,b.headers,f)});return h}):(h.success=hd("success"),h.error=hd("error"));return h}function n(c,d){function g(a){if(a){var c=
{};q(a,function(a,d){c[d]=function(c){function d(){a(c)}b?h.$applyAsync(d):h.$$phase?d():h.$apply(d)}});return c}}function l(a,c,d,e){function f(){n(c,a,d,e)}H&&(200<=a&&300>a?H.put(R,[a,c,ed(d),e]):H.remove(R));b?h.$applyAsync(f):(f(),h.$$phase||h.$apply())}function n(a,b,d,e){b=-1<=b?b:0;(200<=b&&300>b?B.resolve:B.reject)({data:a,status:b,headers:fd(d),config:c,statusText:e})}function w(a){n(a.data,a.status,fa(a.headers()),a.statusText)}function U(){var a=m.pendingRequests.indexOf(c);-1!==a&&m.pendingRequests.splice(a,
1)}var B=k.defer(),A=B.promise,H,M,Aa=c.headers,R=p(c.url,c.paramSerializer(c.params));m.pendingRequests.push(c);A.then(U,U);!c.cache&&!a.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(H=J(c.cache)?c.cache:J(a.cache)?a.cache:x);H&&(M=H.get(R),v(M)?M&&E(M.then)?M.then(w,w):K(M)?n(M[1],M[0],fa(M[2]),M[3]):n(M,200,{},"OK"):H.put(R,A));y(M)&&((M=id(c.url)?f()[c.xsrfCookieName||a.xsrfCookieName]:void 0)&&(Aa[c.xsrfHeaderName||a.xsrfHeaderName]=M),e(c.method,R,d,l,Aa,c.timeout,c.withCredentials,
c.responseType,g(c.eventHandlers),g(c.uploadEventHandlers)));return A}function p(a,b){0<b.length&&(a+=(-1==a.indexOf("?")?"?":"&")+b);return a}var x=g("$http");a.paramSerializer=I(a.paramSerializer)?l.get(a.paramSerializer):a.paramSerializer;var U=[];q(c,function(a){U.unshift(I(a)?l.get(a):l.invoke(a))});m.pendingRequests=[];(function(a){q(arguments,function(a){m[a]=function(b,c){return m(P({},c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){q(arguments,function(a){m[a]=function(b,
c,d){return m(P({},d||{},{method:a,url:b,data:c}))}})})("post","put","patch");m.defaults=a;return m}]}function qf(){this.$get=function(){return function(){return new F.XMLHttpRequest}}}function pf(){this.$get=["$browser","$window","$document","$xhrFactory",function(a,b,d,c){return fg(a,c,a.defer,b.angular.callbacks,d[0])}]}function fg(a,b,d,c,e){function f(a,b,d){var f=e.createElement("script"),m=null;f.type="text/javascript";f.src=a;f.async=!0;m=function(a){f.removeEventListener("load",m,!1);f.removeEventListener("error",
m,!1);e.body.removeChild(f);f=null;var g=-1,x="unknown";a&&("load"!==a.type||c[b].called||(a={type:"error"}),x=a.type,g="error"===a.type?404:200);d&&d(g,x)};f.addEventListener("load",m,!1);f.addEventListener("error",m,!1);e.body.appendChild(f);return m}return function(e,h,k,l,m,n,p,x,U,z){function r(){t&&t();w&&w.abort()}function D(b,c,e,f,g){v(B)&&d.cancel(B);t=w=null;b(c,e,f,g);a.$$completeOutstandingRequest(C)}a.$$incOutstandingRequestCount();h=h||a.url();if("jsonp"==L(e)){var u="_"+(c.counter++).toString(36);
c[u]=function(a){c[u].data=a;c[u].called=!0};var t=f(h.replace("JSON_CALLBACK","angular.callbacks."+u),u,function(a,b){D(l,a,c[u].data,"",b);c[u]=C})}else{var w=b(e,h);w.open(e,h,!0);q(m,function(a,b){v(a)&&w.setRequestHeader(b,a)});w.onload=function(){var a=w.statusText||"",b="response"in w?w.response:w.responseText,c=1223===w.status?204:w.status;0===c&&(c=b?200:"file"==pa(h).protocol?404:0);D(l,c,b,w.getAllResponseHeaders(),a)};e=function(){D(l,-1,null,null,"")};w.onerror=e;w.onabort=e;q(U,function(a,
b){w.addEventListener(b,a)});q(z,function(a,b){w.upload.addEventListener(b,a)});p&&(w.withCredentials=!0);if(x)try{w.responseType=x}catch(ka){if("json"!==x)throw ka;}w.send(y(k)?null:k)}if(0<n)var B=d(r,n);else n&&E(n.then)&&n.then(r)}}function kf(){var a="{{",b="}}";this.startSymbol=function(b){return b?(a=b,this):a};this.endSymbol=function(a){return a?(b=a,this):b};this.$get=["$parse","$exceptionHandler","$sce",function(d,c,e){function f(a){return"\\\\\\"+a}function g(c){return c.replace(n,a).replace(p,
b)}function h(a,b,c,d){var e;return e=a.$watch(function(a){e();return d(a)},b,c)}function k(f,k,n,p){function D(a){try{var b=a;a=n?e.getTrusted(n,b):e.valueOf(b);var d;if(p&&!v(a))d=a;else if(null==a)d="";else{switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=cb(a)}d=a}return d}catch(g){c(Ka.interr(f,g))}}if(!f.length||-1===f.indexOf(a)){var u;k||(k=g(f),u=ca(k),u.exp=f,u.expressions=[],u.$$watchDelegate=h);return u}p=!!p;var t,w,q=0,B=[],A=[];u=f.length;for(var H=[],M=[];q<
u;)if(-1!=(t=f.indexOf(a,q))&&-1!=(w=f.indexOf(b,t+l)))q!==t&&H.push(g(f.substring(q,t))),q=f.substring(t+l,w),B.push(q),A.push(d(q,D)),q=w+m,M.push(H.length),H.push("");else{q!==u&&H.push(g(f.substring(q)));break}n&&1<H.length&&Ka.throwNoconcat(f);if(!k||B.length){var Aa=function(a){for(var b=0,c=B.length;b<c;b++){if(p&&y(a[b]))return;H[M[b]]=a[b]}return H.join("")};return P(function(a){var b=0,d=B.length,e=Array(d);try{for(;b<d;b++)e[b]=A[b](a);return Aa(e)}catch(g){c(Ka.interr(f,g))}},{exp:f,expressions:B,
$$watchDelegate:function(a,b){var c;return a.$watchGroup(A,function(d,e){var f=Aa(d);E(b)&&b.call(this,f,d!==e?c:f,a);c=f})}})}}var l=a.length,m=b.length,n=new RegExp(a.replace(/./g,f),"g"),p=new RegExp(b.replace(/./g,f),"g");k.startSymbol=function(){return a};k.endSymbol=function(){return b};return k}]}function lf(){this.$get=["$rootScope","$window","$q","$$q","$browser",function(a,b,d,c,e){function f(f,k,l,m){function n(){p?f.apply(null,x):f(r)}var p=4<arguments.length,x=p?ya.call(arguments,4):
[],q=b.setInterval,z=b.clearInterval,r=0,D=v(m)&&!m,u=(D?c:d).defer(),t=u.promise;l=v(l)?l:0;t.$$intervalId=q(function(){D?e.defer(n):a.$evalAsync(n);u.notify(r++);0<l&&r>=l&&(u.resolve(r),z(t.$$intervalId),delete g[t.$$intervalId]);D||a.$apply()},k);g[t.$$intervalId]=u;return t}var g={};f.cancel=function(a){return a&&a.$$intervalId in g?(g[a.$$intervalId].reject("canceled"),b.clearInterval(a.$$intervalId),delete g[a.$$intervalId],!0):!1};return f}]}function fc(a){a=a.split("/");for(var b=a.length;b--;)a[b]=
qb(a[b]);return a.join("/")}function jd(a,b){var d=pa(a);b.$$protocol=d.protocol;b.$$host=d.hostname;b.$$port=$(d.port)||gg[d.protocol]||null}function kd(a,b){var d="/"!==a.charAt(0);d&&(a="/"+a);var c=pa(a);b.$$path=decodeURIComponent(d&&"/"===c.pathname.charAt(0)?c.pathname.substring(1):c.pathname);b.$$search=zc(c.search);b.$$hash=decodeURIComponent(c.hash);b.$$path&&"/"!=b.$$path.charAt(0)&&(b.$$path="/"+b.$$path)}function la(a,b){if(0===b.lastIndexOf(a,0))return b.substr(a.length)}function Ja(a){var b=
a.indexOf("#");return-1==b?a:a.substr(0,b)}function jb(a){return a.replace(/(#.+)|#$/,"$1")}function gc(a,b,d){this.$$html5=!0;d=d||"";jd(a,this);this.$$parse=function(a){var d=la(b,a);if(!I(d))throw Hb("ipthprfx",a,b);kd(d,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Ub(this.$$search),d=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=fc(this.$$path)+(a?"?"+a:"")+d;this.$$absUrl=b+this.$$url.substr(1)};this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),
!0;var f,g;v(f=la(a,c))?(g=f,g=v(f=la(d,f))?b+(la("/",f)||f):a+g):v(f=la(b,c))?g=b+f:b==c+"/"&&(g=b);g&&this.$$parse(g);return!!g}}function hc(a,b,d){jd(a,this);this.$$parse=function(c){var e=la(a,c)||la(b,c),f;y(e)||"#"!==e.charAt(0)?this.$$html5?f=e:(f="",y(e)&&(a=c,this.replace())):(f=la(d,e),y(f)&&(f=e));kd(f,this);c=this.$$path;var e=a,g=/^\/[A-Z]:(\/.*)/;0===f.lastIndexOf(e,0)&&(f=f.replace(e,""));g.exec(f)||(c=(f=g.exec(c))?f[1]:c);this.$$path=c;this.$$compose()};this.$$compose=function(){var b=
Ub(this.$$search),e=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=fc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+(this.$$url?d+this.$$url:"")};this.$$parseLinkUrl=function(b,d){return Ja(a)==Ja(b)?(this.$$parse(b),!0):!1}}function ld(a,b,d){this.$$html5=!0;hc.apply(this,arguments);this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;a==Ja(c)?f=c:(g=la(b,c))?f=a+d+g:b===c+"/"&&(f=b);f&&this.$$parse(f);return!!f};this.$$compose=function(){var b=Ub(this.$$search),
e=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=fc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+d+this.$$url}}function Ib(a){return function(){return this[a]}}function md(a,b){return function(d){if(y(d))return this[a];this[a]=b(d);this.$$compose();return this}}function rf(){var a="",b={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(b){return v(b)?(a=b,this):a};this.html5Mode=function(a){return Ea(a)?(b.enabled=a,this):J(a)?(Ea(a.enabled)&&(b.enabled=a.enabled),Ea(a.requireBase)&&
(b.requireBase=a.requireBase),Ea(a.rewriteLinks)&&(b.rewriteLinks=a.rewriteLinks),this):b};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(d,c,e,f,g){function h(a,b,d){var e=l.url(),f=l.$$state;try{c.url(a,b,d),l.$$state=c.state()}catch(g){throw l.url(e),l.$$state=f,g;}}function k(a,b){d.$broadcast("$locationChangeSuccess",l.absUrl(),a,l.$$state,b)}var l,m;m=c.baseHref();var n=c.url(),p;if(b.enabled){if(!m&&b.requireBase)throw Hb("nobase");p=n.substring(0,n.indexOf("/",
n.indexOf("//")+2))+(m||"/");m=e.history?gc:ld}else p=Ja(n),m=hc;var x=p.substr(0,Ja(p).lastIndexOf("/")+1);l=new m(p,x,"#"+a);l.$$parseLinkUrl(n,n);l.$$state=c.state();var q=/^\s*(javascript|mailto):/i;f.on("click",function(a){if(b.rewriteLinks&&!a.ctrlKey&&!a.metaKey&&!a.shiftKey&&2!=a.which&&2!=a.button){for(var e=G(a.target);"a"!==ta(e[0]);)if(e[0]===f[0]||!(e=e.parent())[0])return;var h=e.prop("href"),k=e.attr("href")||e.attr("xlink:href");J(h)&&"[object SVGAnimatedString]"===h.toString()&&(h=
pa(h.animVal).href);q.test(h)||!h||e.attr("target")||a.isDefaultPrevented()||!l.$$parseLinkUrl(h,k)||(a.preventDefault(),l.absUrl()!=c.url()&&(d.$apply(),g.angular["ff-684208-preventDefault"]=!0))}});jb(l.absUrl())!=jb(n)&&c.url(l.absUrl(),!0);var z=!0;c.onUrlChange(function(a,b){y(la(x,a))?g.location.href=a:(d.$evalAsync(function(){var c=l.absUrl(),e=l.$$state,f;a=jb(a);l.$$parse(a);l.$$state=b;f=d.$broadcast("$locationChangeStart",a,c,b,e).defaultPrevented;l.absUrl()===a&&(f?(l.$$parse(c),l.$$state=
e,h(c,!1,e)):(z=!1,k(c,e)))}),d.$$phase||d.$digest())});d.$watch(function(){var a=jb(c.url()),b=jb(l.absUrl()),f=c.state(),g=l.$$replace,m=a!==b||l.$$html5&&e.history&&f!==l.$$state;if(z||m)z=!1,d.$evalAsync(function(){var b=l.absUrl(),c=d.$broadcast("$locationChangeStart",b,a,l.$$state,f).defaultPrevented;l.absUrl()===b&&(c?(l.$$parse(a),l.$$state=f):(m&&h(b,g,f===l.$$state?null:l.$$state),k(a,f)))});l.$$replace=!1});return l}]}function sf(){var a=!0,b=this;this.debugEnabled=function(b){return v(b)?
(a=b,this):a};this.$get=["$window",function(d){function c(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=d.console||{},e=b[a]||b.log||C;a=!1;try{a=!!e.apply}catch(k){}return a?function(){var a=[];q(arguments,function(b){a.push(c(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),
debug:function(){var c=e("debug");return function(){a&&c.apply(b,arguments)}}()}}]}function Ua(a,b){if("__defineGetter__"===a||"__defineSetter__"===a||"__lookupGetter__"===a||"__lookupSetter__"===a||"__proto__"===a)throw ba("isecfld",b);return a}function hg(a){return a+""}function qa(a,b){if(a){if(a.constructor===a)throw ba("isecfn",b);if(a.window===a)throw ba("isecwindow",b);if(a.children&&(a.nodeName||a.prop&&a.attr&&a.find))throw ba("isecdom",b);if(a===Object)throw ba("isecobj",b);}return a}function nd(a,
b){if(a){if(a.constructor===a)throw ba("isecfn",b);if(a===ig||a===jg||a===kg)throw ba("isecff",b);}}function Jb(a,b){if(a&&(a===(0).constructor||a===(!1).constructor||a==="".constructor||a==={}.constructor||a===[].constructor||a===Function.constructor))throw ba("isecaf",b);}function lg(a,b){return"undefined"!==typeof a?a:b}function od(a,b){return"undefined"===typeof a?b:"undefined"===typeof b?a:a+b}function Z(a,b){var d,c;switch(a.type){case s.Program:d=!0;q(a.body,function(a){Z(a.expression,b);d=
d&&a.expression.constant});a.constant=d;break;case s.Literal:a.constant=!0;a.toWatch=[];break;case s.UnaryExpression:Z(a.argument,b);a.constant=a.argument.constant;a.toWatch=a.argument.toWatch;break;case s.BinaryExpression:Z(a.left,b);Z(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.left.toWatch.concat(a.right.toWatch);break;case s.LogicalExpression:Z(a.left,b);Z(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.constant?[]:[a];break;case s.ConditionalExpression:Z(a.test,
b);Z(a.alternate,b);Z(a.consequent,b);a.constant=a.test.constant&&a.alternate.constant&&a.consequent.constant;a.toWatch=a.constant?[]:[a];break;case s.Identifier:a.constant=!1;a.toWatch=[a];break;case s.MemberExpression:Z(a.object,b);a.computed&&Z(a.property,b);a.constant=a.object.constant&&(!a.computed||a.property.constant);a.toWatch=[a];break;case s.CallExpression:d=a.filter?!b(a.callee.name).$stateful:!1;c=[];q(a.arguments,function(a){Z(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});
a.constant=d;a.toWatch=a.filter&&!b(a.callee.name).$stateful?c:[a];break;case s.AssignmentExpression:Z(a.left,b);Z(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=[a];break;case s.ArrayExpression:d=!0;c=[];q(a.elements,function(a){Z(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});a.constant=d;a.toWatch=c;break;case s.ObjectExpression:d=!0;c=[];q(a.properties,function(a){Z(a.value,b);d=d&&a.value.constant&&!a.computed;a.value.constant||c.push.apply(c,a.value.toWatch)});
a.constant=d;a.toWatch=c;break;case s.ThisExpression:a.constant=!1;a.toWatch=[];break;case s.LocalsExpression:a.constant=!1,a.toWatch=[]}}function pd(a){if(1==a.length){a=a[0].expression;var b=a.toWatch;return 1!==b.length?b:b[0]!==a?b:void 0}}function qd(a){return a.type===s.Identifier||a.type===s.MemberExpression}function rd(a){if(1===a.body.length&&qd(a.body[0].expression))return{type:s.AssignmentExpression,left:a.body[0].expression,right:{type:s.NGValueParameter},operator:"="}}function sd(a){return 0===
a.body.length||1===a.body.length&&(a.body[0].expression.type===s.Literal||a.body[0].expression.type===s.ArrayExpression||a.body[0].expression.type===s.ObjectExpression)}function td(a,b){this.astBuilder=a;this.$filter=b}function ud(a,b){this.astBuilder=a;this.$filter=b}function Kb(a){return"constructor"==a}function ic(a){return E(a.valueOf)?a.valueOf():mg.call(a)}function tf(){var a=S(),b=S(),d={"true":!0,"false":!1,"null":null,undefined:void 0},c,e;this.addLiteral=function(a,b){d[a]=b};this.setIdentifierFns=
function(a,b){c=a;e=b;return this};this.$get=["$filter",function(f){function g(c,d,e){var g,k,A;e=e||D;switch(typeof c){case "string":A=c=c.trim();var H=e?b:a;g=H[A];if(!g){":"===c.charAt(0)&&":"===c.charAt(1)&&(k=!0,c=c.substring(2));g=e?r:z;var q=new jc(g);g=(new kc(q,f,g)).parse(c);g.constant?g.$$watchDelegate=p:k?g.$$watchDelegate=g.literal?n:m:g.inputs&&(g.$$watchDelegate=l);e&&(g=h(g));H[A]=g}return x(g,d);case "function":return x(c,d);default:return x(C,d)}}function h(a){function b(c,d,e,f){var g=
D;D=!0;try{return a(c,d,e,f)}finally{D=g}}if(!a)return a;b.$$watchDelegate=a.$$watchDelegate;b.assign=h(a.assign);b.constant=a.constant;b.literal=a.literal;for(var c=0;a.inputs&&c<a.inputs.length;++c)a.inputs[c]=h(a.inputs[c]);b.inputs=a.inputs;return b}function k(a,b){return null==a||null==b?a===b:"object"===typeof a&&(a=ic(a),"object"===typeof a)?!1:a===b||a!==a&&b!==b}function l(a,b,c,d,e){var f=d.inputs,g;if(1===f.length){var h=k,f=f[0];return a.$watch(function(a){var b=f(a);k(b,h)||(g=d(a,void 0,
void 0,[b]),h=b&&ic(b));return g},b,c,e)}for(var l=[],m=[],n=0,p=f.length;n<p;n++)l[n]=k,m[n]=null;return a.$watch(function(a){for(var b=!1,c=0,e=f.length;c<e;c++){var h=f[c](a);if(b||(b=!k(h,l[c])))m[c]=h,l[c]=h&&ic(h)}b&&(g=d(a,void 0,void 0,m));return g},b,c,e)}function m(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;E(b)&&b.apply(this,arguments);v(a)&&d.$$postDigest(function(){v(f)&&e()})},c)}function n(a,b,c,d){function e(a){var b=!0;q(a,function(a){v(a)||(b=
!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},function(a,c,d){g=a;E(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function p(a,b,c,d){var e;return e=a.$watch(function(a){e();return d(a)},b,c)}function x(a,b){if(!b)return a;var c=a.$$watchDelegate,d=!1,c=c!==n&&c!==m?function(c,e,f,g){f=d&&g?g[0]:a(c,e,f,g);return b(f,c,e)}:function(c,d,e,f){e=a(c,d,e,f);c=b(e,c,d);return v(e)?c:e};a.$$watchDelegate&&a.$$watchDelegate!==l?c.$$watchDelegate=a.$$watchDelegate:
b.$stateful||(c.$$watchDelegate=l,d=!a.inputs,c.inputs=a.inputs?a.inputs:[a]);return c}var U=Fa().noUnsafeEval,z={csp:U,expensiveChecks:!1,literals:oa(d),isIdentifierStart:E(c)&&c,isIdentifierContinue:E(e)&&e},r={csp:U,expensiveChecks:!0,literals:oa(d),isIdentifierStart:E(c)&&c,isIdentifierContinue:E(e)&&e},D=!1;g.$$runningExpensiveChecks=function(){return D};return g}]}function vf(){this.$get=["$rootScope","$exceptionHandler",function(a,b){return vd(function(b){a.$evalAsync(b)},b)}]}function wf(){this.$get=
["$browser","$exceptionHandler",function(a,b){return vd(function(b){a.defer(b)},b)}]}function vd(a,b){function d(){this.$$state={status:0}}function c(a,b){return function(c){b.call(a,c)}}function e(c){!c.processScheduled&&c.pending&&(c.processScheduled=!0,a(function(){var a,d,e;e=c.pending;c.processScheduled=!1;c.pending=void 0;for(var f=0,g=e.length;f<g;++f){d=e[f][0];a=e[f][c.status];try{E(a)?d.resolve(a(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(h){d.reject(h),b(h)}}}))}
function f(){this.promise=new d}var g=O("$q",TypeError);P(d.prototype,{then:function(a,b,c){if(y(a)&&y(b)&&y(c))return this;var d=new f;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&e(this.$$state);return d.promise},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return k(b,!0,a)},function(b){return k(b,!1,a)},b)}});P(f.prototype,{resolve:function(a){this.promise.$$state.status||(a===this.promise?
this.$$reject(g("qcycle",a)):this.$$resolve(a))},$$resolve:function(a){function d(a){k||(k=!0,h.$$resolve(a))}function f(a){k||(k=!0,h.$$reject(a))}var g,h=this,k=!1;try{if(J(a)||E(a))g=a&&a.then;E(g)?(this.promise.$$state.status=-1,g.call(a,d,f,c(this,this.notify))):(this.promise.$$state.value=a,this.promise.$$state.status=1,e(this.promise.$$state))}catch(l){f(l),b(l)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=
2;e(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&d&&d.length&&a(function(){for(var a,e,f=0,g=d.length;f<g;f++){e=d[f][0];a=d[f][3];try{e.notify(E(a)?a(c):c)}catch(h){b(h)}}})}});var h=function(a,b){var c=new f;b?c.resolve(a):c.reject(a);return c.promise},k=function(a,b,c){var d=null;try{E(c)&&(d=c())}catch(e){return h(e,!1)}return d&&E(d.then)?d.then(function(){return h(a,b)},function(a){return h(a,!1)}):h(a,b)},l=function(a,b,c,d){var e=
new f;e.resolve(a);return e.promise.then(b,c,d)},m=function(a){if(!E(a))throw g("norslvr",a);var b=new f;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};m.prototype=d.prototype;m.defer=function(){var a=new f;a.resolve=c(a,a.resolve);a.reject=c(a,a.reject);a.notify=c(a,a.notify);return a};m.reject=function(a){var b=new f;b.reject(a);return b.promise};m.when=l;m.resolve=l;m.all=function(a){var b=new f,c=0,d=K(a)?[]:{};q(a,function(a,e){c++;l(a).then(function(a){d.hasOwnProperty(e)||
(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};return m}function Ff(){this.$get=["$window","$timeout",function(a,b){var d=a.requestAnimationFrame||a.webkitRequestAnimationFrame,c=a.cancelAnimationFrame||a.webkitCancelAnimationFrame||a.webkitCancelRequestAnimationFrame,e=!!d,f=e?function(a){var b=d(a);return function(){c(b)}}:function(a){var c=b(a,16.66,!1);return function(){b.cancel(c)}};f.supported=e;return f}]}function uf(){function a(a){function b(){this.$$watchers=
this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++pb;this.$$ChildScope=null}b.prototype=a;return b}var b=10,d=O("$rootScope"),c=null,e=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$exceptionHandler","$parse","$browser",function(f,g,h){function k(a){a.currentScope.$$destroyed=!0}function l(a){9===Ba&&(a.$$childHead&&l(a.$$childHead),a.$$nextSibling&&l(a.$$nextSibling));a.$parent=a.$$nextSibling=
a.$$prevSibling=a.$$childHead=a.$$childTail=a.$root=a.$$watchers=null}function m(){this.$id=++pb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$$isolateBindings=null}function n(a){if(D.$$phase)throw d("inprog",D.$$phase);D.$$phase=a}function p(a,b){do a.$$watchersCount+=b;while(a=a.$parent)}function x(a,b,c){do a.$$listenerCount[c]-=
b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function s(){}function z(){for(;w.length;)try{w.shift()()}catch(a){f(a)}e=null}function r(){null===e&&(e=h.defer(function(){D.$apply(z)}))}m.prototype={constructor:m,$new:function(b,c){var d;c=c||this;b?(d=new m,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=a(this)),d=new this.$$ChildScope);d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=
d;(b||c!=this)&&d.$on("$destroy",k);return d},$watch:function(a,b,d,e){var f=g(a);if(f.$$watchDelegate)return f.$$watchDelegate(this,b,d,f,a);var h=this,k=h.$$watchers,l={fn:b,last:s,get:f,exp:e||a,eq:!!d};c=null;E(b)||(l.fn=C);k||(k=h.$$watchers=[]);k.unshift(l);p(this,1);return function(){0<=$a(k,l)&&p(h,-1);c=null}},$watchGroup:function(a,b){function c(){h=!1;k?(k=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=!0;g.$evalAsync(function(){l&&
b(e,e,g)});return function(){l=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});q(a,function(a,b){var k=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(k)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!y(e)){if(J(e))if(xa(e))for(f!==n&&(f=n,u=f.length=0,l++),a=e.length,u!==a&&(l++,f.length=u=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==
p&&(f=p={},u=0,l++);a=0;for(b in e)sa.call(e,b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(u++,f[b]=g,l++));if(u>a)for(b in l++,f)sa.call(e,b)||(u--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$stateful=!0;var d=this,e,f,h,k=1<b.length,l=0,m=g(a,c),n=[],p={},r=!0,u=0;return this.$watch(m,function(){r?(r=!1,b(e,e,d)):b(e,h,d);if(k)if(J(e))if(xa(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h={},e)sa.call(e,a)&&(h[a]=e[a]);else h=e})},$digest:function(){var a,
g,k,l,m,p,r,x,q=b,w,y=[],C,F;n("$digest");h.$$checkUrlChange();this===D&&null!==e&&(h.defer.cancel(e),z());c=null;do{x=!1;w=this;for(p=0;p<u.length;p++){try{F=u[p],F.scope.$eval(F.expression,F.locals)}catch(G){f(G)}c=null}u.length=0;a:do{if(p=w.$$watchers)for(r=p.length;r--;)try{if(a=p[r])if(m=a.get,(g=m(w))!==(k=a.last)&&!(a.eq?na(g,k):"number"===typeof g&&"number"===typeof k&&isNaN(g)&&isNaN(k)))x=!0,c=a,a.last=a.eq?oa(g,null):g,l=a.fn,l(g,k===s?g:k,w),5>q&&(C=4-q,y[C]||(y[C]=[]),y[C].push({msg:E(a.exp)?
"fn: "+(a.exp.name||a.exp.toString()):a.exp,newVal:g,oldVal:k}));else if(a===c){x=!1;break a}}catch(I){f(I)}if(!(p=w.$$watchersCount&&w.$$childHead||w!==this&&w.$$nextSibling))for(;w!==this&&!(p=w.$$nextSibling);)w=w.$parent}while(w=p);if((x||u.length)&&!q--)throw D.$$phase=null,d("infdig",b,y);}while(x||u.length);for(D.$$phase=null;v<t.length;)try{t[v++]()}catch(J){f(J)}t.length=v=0},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this===
D&&h.$$applicationDestroyed();p(this,-this.$$watchersCount);for(var b in this.$$listenerCount)x(this,this.$$listenerCount[b],b);a&&a.$$childHead==this&&(a.$$childHead=this.$$nextSibling);a&&a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=C;this.$on=this.$watch=this.$watchGroup=
function(){return C};this.$$listeners={};this.$$nextSibling=null;l(this)}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a,b){D.$$phase||u.length||h.defer(function(){u.length&&D.$digest()});u.push({scope:this,expression:g(a),locals:b})},$$postDigest:function(a){t.push(a)},$apply:function(a){try{n("$apply");try{return this.$eval(a)}finally{D.$$phase=null}}catch(b){f(b)}finally{try{D.$digest()}catch(c){throw f(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&w.push(b);
a=g(a);r()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,x(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,g=!1,h={name:a,targetScope:e,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=ab([h],arguments,1),l,m;do{d=e.$$listeners[a]||c;h.currentScope=
e;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,k)}catch(n){f(n)}else d.splice(l,1),l--,m--;if(g)return h.currentScope=null,h;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var g=ab([e],arguments,1),h,k;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(l){f(l)}else d.splice(h,
1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var D=new m,u=D.$$asyncQueue=[],t=D.$$postDigestQueue=[],w=D.$$applyAsyncQueue=[],v=0;return D}]}function ne(){var a=/^\s*(https?|ftp|mailto|tel|file):/,b=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(b){return v(b)?(a=b,this):a};this.imgSrcSanitizationWhitelist=function(a){return v(a)?(b=a,this):b};
this.$get=function(){return function(d,c){var e=c?b:a,f;f=pa(d).href;return""===f||f.match(e)?d:"unsafe:"+f}}}function ng(a){if("self"===a)return a;if(I(a)){if(-1<a.indexOf("***"))throw ra("iwcard",a);a=wd(a).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+a+"$")}if(Xa(a))return new RegExp("^"+a.source+"$");throw ra("imatcher");}function xd(a){var b=[];v(a)&&q(a,function(a){b.push(ng(a))});return b}function yf(){this.SCE_CONTEXTS=ma;var a=["self"],b=[];this.resourceUrlWhitelist=
function(b){arguments.length&&(a=xd(b));return a};this.resourceUrlBlacklist=function(a){arguments.length&&(b=xd(a));return b};this.$get=["$injector",function(d){function c(a,b){return"self"===a?id(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var f=function(a){throw ra("unsafe");
};d.has("$sanitize")&&(f=d.get("$sanitize"));var g=e(),h={};h[ma.HTML]=e(g);h[ma.CSS]=e(g);h[ma.URL]=e(g);h[ma.JS]=e(g);h[ma.RESOURCE_URL]=e(h[ma.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw ra("icontext",a,b);if(null===b||y(b)||""===b)return b;if("string"!==typeof b)throw ra("itype",a);return new c(b)},getTrusted:function(d,e){if(null===e||y(e)||""===e)return e;var g=h.hasOwnProperty(d)?h[d]:null;if(g&&e instanceof g)return e.$$unwrapTrustedValue();if(d===ma.RESOURCE_URL){var g=
pa(e.toString()),n,p,x=!1;n=0;for(p=a.length;n<p;n++)if(c(a[n],g)){x=!0;break}if(x)for(n=0,p=b.length;n<p;n++)if(c(b[n],g)){x=!1;break}if(x)return e;throw ra("insecurl",e.toString());}if(d===ma.HTML)return f(e);throw ra("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function xf(){var a=!0;this.enabled=function(b){arguments.length&&(a=!!b);return a};this.$get=["$parse","$sceDelegate",function(b,d){if(a&&8>Ba)throw ra("iequirks");var c=fa(ma);c.isEnabled=function(){return a};
c.trustAs=d.trustAs;c.getTrusted=d.getTrusted;c.valueOf=d.valueOf;a||(c.trustAs=c.getTrusted=function(a,b){return b},c.valueOf=Ya);c.parseAs=function(a,d){var e=b(d);return e.literal&&e.constant?e:b(d,function(b){return c.getTrusted(a,b)})};var e=c.parseAs,f=c.getTrusted,g=c.trustAs;q(ma,function(a,b){var d=L(b);c[eb("parse_as_"+d)]=function(b){return e(a,b)};c[eb("get_trusted_"+d)]=function(b){return f(a,b)};c[eb("trust_as_"+d)]=function(b){return g(a,b)}});return c}]}function zf(){this.$get=["$window",
"$document",function(a,b){var d={},c=!(a.chrome&&a.chrome.app&&a.chrome.app.runtime)&&a.history&&a.history.pushState,e=$((/android (\d+)/.exec(L((a.navigator||{}).userAgent))||[])[1]),f=/Boxee/i.test((a.navigator||{}).userAgent),g=b[0]||{},h,k=/^(Moz|webkit|ms)(?=[A-Z])/,l=g.body&&g.body.style,m=!1,n=!1;if(l){for(var p in l)if(m=k.exec(p)){h=m[0];h=h[0].toUpperCase()+h.substr(1);break}h||(h="WebkitOpacity"in l&&"webkit");m=!!("transition"in l||h+"Transition"in l);n=!!("animation"in l||h+"Animation"in
l);!e||m&&n||(m=I(l.webkitTransition),n=I(l.webkitAnimation))}return{history:!(!c||4>e||f),hasEvent:function(a){if("input"===a&&11>=Ba)return!1;if(y(d[a])){var b=g.createElement("div");d[a]="on"+a in b}return d[a]},csp:Fa(),vendorPrefix:h,transitions:m,animations:n,android:e}}]}function Bf(){var a;this.httpOptions=function(b){return b?(a=b,this):a};this.$get=["$templateCache","$http","$q","$sce",function(b,d,c,e){function f(g,h){f.totalPendingRequests++;if(!I(g)||y(b.get(g)))g=e.getTrustedResourceUrl(g);
var k=d.defaults&&d.defaults.transformResponse;K(k)?k=k.filter(function(a){return a!==dc}):k===dc&&(k=null);return d.get(g,P({cache:b,transformResponse:k},a))["finally"](function(){f.totalPendingRequests--}).then(function(a){b.put(g,a.data);return a.data},function(a){if(!h)throw og("tpload",g,a.status,a.statusText);return c.reject(a)})}f.totalPendingRequests=0;return f}]}function Cf(){this.$get=["$rootScope","$browser","$location",function(a,b,d){return{findBindings:function(a,b,d){a=a.getElementsByClassName("ng-binding");
var g=[];q(a,function(a){var c=da.element(a).data("$binding");c&&q(c,function(c){d?(new RegExp("(^|\\s)"+wd(b)+"(\\s|\\||$)")).test(c)&&g.push(a):-1!=c.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,d){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var k=a.querySelectorAll("["+g[h]+"model"+(d?"=":"*=")+'"'+b+'"]');if(k.length)return k}},getLocation:function(){return d.url()},setLocation:function(b){b!==d.url()&&(d.url(b),a.$digest())},whenStable:function(a){b.notifyWhenNoOutstandingRequests(a)}}}]}
function Df(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(a,b,d,c,e){function f(f,k,l){E(f)||(l=k,k=f,f=C);var m=ya.call(arguments,3),n=v(l)&&!l,p=(n?c:d).defer(),x=p.promise,q;q=b.defer(function(){try{p.resolve(f.apply(null,m))}catch(b){p.reject(b),e(b)}finally{delete g[x.$$timeoutId]}n||a.$apply()},k);x.$$timeoutId=q;g[q]=p;return x}var g={};f.cancel=function(a){return a&&a.$$timeoutId in g?(g[a.$$timeoutId].reject("canceled"),delete g[a.$$timeoutId],b.defer.cancel(a.$$timeoutId)):
!1};return f}]}function pa(a){Ba&&(X.setAttribute("href",a),a=X.href);X.setAttribute("href",a);return{href:X.href,protocol:X.protocol?X.protocol.replace(/:$/,""):"",host:X.host,search:X.search?X.search.replace(/^\?/,""):"",hash:X.hash?X.hash.replace(/^#/,""):"",hostname:X.hostname,port:X.port,pathname:"/"===X.pathname.charAt(0)?X.pathname:"/"+X.pathname}}function id(a){a=I(a)?pa(a):a;return a.protocol===yd.protocol&&a.host===yd.host}function Ef(){this.$get=ca(F)}function zd(a){function b(a){try{return decodeURIComponent(a)}catch(b){return a}}
var d=a[0]||{},c={},e="";return function(){var a,g,h,k,l;a=d.cookie||"";if(a!==e)for(e=a,a=e.split("; "),c={},h=0;h<a.length;h++)g=a[h],k=g.indexOf("="),0<k&&(l=b(g.substring(0,k)),y(c[l])&&(c[l]=b(g.substring(k+1))));return c}}function If(){this.$get=zd}function Lc(a){function b(d,c){if(J(d)){var e={};q(d,function(a,c){e[c]=b(c,a)});return e}return a.factory(d+"Filter",c)}this.register=b;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];b("currency",Ad);b("date",Bd);
b("filter",pg);b("json",qg);b("limitTo",rg);b("lowercase",sg);b("number",Cd);b("orderBy",Dd);b("uppercase",tg)}function pg(){return function(a,b,d){if(!xa(a)){if(null==a)return a;throw O("filter")("notarray",a);}var c;switch(lc(b)){case "function":break;case "boolean":case "null":case "number":case "string":c=!0;case "object":b=ug(b,d,c);break;default:return a}return Array.prototype.filter.call(a,b)}}function ug(a,b,d){var c=J(a)&&"$"in a;!0===b?b=na:E(b)||(b=function(a,b){if(y(a))return!1;if(null===
a||null===b)return a===b;if(J(b)||J(a)&&!uc(a))return!1;a=L(""+a);b=L(""+b);return-1!==a.indexOf(b)});return function(e){return c&&!J(e)?La(e,a.$,b,!1):La(e,a,b,d)}}function La(a,b,d,c,e){var f=lc(a),g=lc(b);if("string"===g&&"!"===b.charAt(0))return!La(a,b.substring(1),d,c);if(K(a))return a.some(function(a){return La(a,b,d,c)});switch(f){case "object":var h;if(c){for(h in a)if("$"!==h.charAt(0)&&La(a[h],b,d,!0))return!0;return e?!1:La(a,b,d,!1)}if("object"===g){for(h in b)if(e=b[h],!E(e)&&!y(e)&&
(f="$"===h,!La(f?a:a[h],e,d,f,f)))return!1;return!0}return d(a,b);case "function":return!1;default:return d(a,b)}}function lc(a){return null===a?"null":typeof a}function Ad(a){var b=a.NUMBER_FORMATS;return function(a,c,e){y(c)&&(c=b.CURRENCY_SYM);y(e)&&(e=b.PATTERNS[1].maxFrac);return null==a?a:Ed(a,b.PATTERNS[1],b.GROUP_SEP,b.DECIMAL_SEP,e).replace(/\u00A4/g,c)}}function Cd(a){var b=a.NUMBER_FORMATS;return function(a,c){return null==a?a:Ed(a,b.PATTERNS[0],b.GROUP_SEP,b.DECIMAL_SEP,c)}}function vg(a){var b=
0,d,c,e,f,g;-1<(c=a.indexOf(Fd))&&(a=a.replace(Fd,""));0<(e=a.search(/e/i))?(0>c&&(c=e),c+=+a.slice(e+1),a=a.substring(0,e)):0>c&&(c=a.length);for(e=0;a.charAt(e)==mc;e++);if(e==(g=a.length))d=[0],c=1;else{for(g--;a.charAt(g)==mc;)g--;c-=e;d=[];for(f=0;e<=g;e++,f++)d[f]=+a.charAt(e)}c>Gd&&(d=d.splice(0,Gd-1),b=c-1,c=1);return{d:d,e:b,i:c}}function wg(a,b,d,c){var e=a.d,f=e.length-a.i;b=y(b)?Math.min(Math.max(d,f),c):+b;d=b+a.i;c=e[d];if(0<d){e.splice(Math.max(a.i,d));for(var g=d;g<e.length;g++)e[g]=
0}else for(f=Math.max(0,f),a.i=1,e.length=Math.max(1,d=b+1),e[0]=0,g=1;g<d;g++)e[g]=0;if(5<=c)if(0>d-1){for(c=0;c>d;c--)e.unshift(0),a.i++;e.unshift(1);a.i++}else e[d-1]++;for(;f<Math.max(0,b);f++)e.push(0);if(b=e.reduceRight(function(a,b,c,d){b+=a;d[c]=b%10;return Math.floor(b/10)},0))e.unshift(b),a.i++}function Ed(a,b,d,c,e){if(!I(a)&&!Q(a)||isNaN(a))return"";var f=!isFinite(a),g=!1,h=Math.abs(a)+"",k="";if(f)k="\u221e";else{g=vg(h);wg(g,e,b.minFrac,b.maxFrac);k=g.d;h=g.i;e=g.e;f=[];for(g=k.reduce(function(a,
b){return a&&!b},!0);0>h;)k.unshift(0),h++;0<h?f=k.splice(h,k.length):(f=k,k=[0]);h=[];for(k.length>=b.lgSize&&h.unshift(k.splice(-b.lgSize,k.length).join(""));k.length>b.gSize;)h.unshift(k.splice(-b.gSize,k.length).join(""));k.length&&h.unshift(k.join(""));k=h.join(d);f.length&&(k+=c+f.join(""));e&&(k+="e+"+e)}return 0>a&&!g?b.negPre+k+b.negSuf:b.posPre+k+b.posSuf}function Lb(a,b,d,c){var e="";if(0>a||c&&0>=a)c?a=-a+1:(a=-a,e="-");for(a=""+a;a.length<b;)a=mc+a;d&&(a=a.substr(a.length-b));return e+
a}function W(a,b,d,c,e){d=d||0;return function(f){f=f["get"+a]();if(0<d||f>-d)f+=d;0===f&&-12==d&&(f=12);return Lb(f,b,c,e)}}function kb(a,b,d){return function(c,e){var f=c["get"+a](),g=ub((d?"STANDALONE":"")+(b?"SHORT":"")+a);return e[g][f]}}function Hd(a){var b=(new Date(a,0,1)).getDay();return new Date(a,0,(4>=b?5:12)-b)}function Id(a){return function(b){var d=Hd(b.getFullYear());b=+new Date(b.getFullYear(),b.getMonth(),b.getDate()+(4-b.getDay()))-+d;b=1+Math.round(b/6048E5);return Lb(b,a)}}function nc(a,
b){return 0>=a.getFullYear()?b.ERAS[0]:b.ERAS[1]}function Bd(a){function b(a){var b;if(b=a.match(d)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,k=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=$(b[9]+b[10]),g=$(b[9]+b[11]));h.call(a,$(b[1]),$(b[2])-1,$(b[3]));f=$(b[4]||0)-f;g=$(b[5]||0)-g;h=$(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));k.call(a,f,g,h,b)}return a}var d=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,
d,f){var g="",h=[],k,l;d=d||"mediumDate";d=a.DATETIME_FORMATS[d]||d;I(c)&&(c=xg.test(c)?$(c):b(c));Q(c)&&(c=new Date(c));if(!ha(c)||!isFinite(c.getTime()))return c;for(;d;)(l=yg.exec(d))?(h=ab(h,l,1),d=h.pop()):(h.push(d),d=null);var m=c.getTimezoneOffset();f&&(m=xc(f,m),c=Tb(c,f,!0));q(h,function(b){k=zg[b];g+=k?k(c,a.DATETIME_FORMATS,m):"''"===b?"'":b.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function qg(){return function(a,b){y(b)&&(b=2);return cb(a,b)}}function rg(){return function(a,
b,d){b=Infinity===Math.abs(Number(b))?Number(b):$(b);if(isNaN(b))return a;Q(a)&&(a=a.toString());if(!K(a)&&!I(a))return a;d=!d||isNaN(d)?0:$(d);d=0>d?Math.max(0,a.length+d):d;return 0<=b?a.slice(d,d+b):0===d?a.slice(b,a.length):a.slice(Math.max(0,d+b),d)}}function Dd(a){function b(b,d){d=d?-1:1;return b.map(function(b){var c=1,h=Ya;if(E(b))h=b;else if(I(b)){if("+"==b.charAt(0)||"-"==b.charAt(0))c="-"==b.charAt(0)?-1:1,b=b.substring(1);if(""!==b&&(h=a(b),h.constant))var k=h(),h=function(a){return a[k]}}return{get:h,
descending:c*d}})}function d(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}return function(a,e,f){if(null==a)return a;if(!xa(a))throw O("orderBy")("notarray",a);K(e)||(e=[e]);0===e.length&&(e=["+"]);var g=b(e,f);g.push({get:function(){return{}},descending:f?-1:1});a=Array.prototype.map.call(a,function(a,b){return{value:a,predicateValues:g.map(function(c){var e=c.get(a);c=typeof e;if(null===e)c="string",e="null";else if("string"===c)e=e.toLowerCase();else if("object"===
c)a:{if("function"===typeof e.valueOf&&(e=e.valueOf(),d(e)))break a;if(uc(e)&&(e=e.toString(),d(e)))break a;e=b}return{value:e,type:c}})}});a.sort(function(a,b){for(var c=0,d=0,e=g.length;d<e;++d){var c=a.predicateValues[d],f=b.predicateValues[d],x=0;c.type===f.type?c.value!==f.value&&(x=c.value<f.value?-1:1):x=c.type<f.type?-1:1;if(c=x*g[d].descending)break}return c});return a=a.map(function(a){return a.value})}}function Ma(a){E(a)&&(a={link:a});a.restrict=a.restrict||"AC";return ca(a)}function Jd(a,
b,d,c,e){var f=this,g=[];f.$error={};f.$$success={};f.$pending=void 0;f.$name=e(b.name||b.ngForm||"")(d);f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;f.$submitted=!1;f.$$parentForm=Mb;f.$rollbackViewValue=function(){q(g,function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){q(g,function(a){a.$commitViewValue()})};f.$addControl=function(a){Ra(a.$name,"input");g.push(a);a.$name&&(f[a.$name]=a);a.$$parentForm=f};f.$$renameControl=function(a,b){var c=a.$name;f[c]===a&&delete f[c];
f[b]=a;a.$name=b};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];q(f.$pending,function(b,c){f.$setValidity(c,null,a)});q(f.$error,function(b,c){f.$setValidity(c,null,a)});q(f.$$success,function(b,c){f.$setValidity(c,null,a)});$a(g,a);a.$$parentForm=Mb};Kd({ctrl:this,$element:a,set:function(a,b,c){var d=a[b];d?-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&($a(d,c),0===d.length&&delete a[b])},$animate:c});f.$setDirty=function(){c.removeClass(a,Va);
c.addClass(a,Nb);f.$dirty=!0;f.$pristine=!1;f.$$parentForm.$setDirty()};f.$setPristine=function(){c.setClass(a,Va,Nb+" ng-submitted");f.$dirty=!1;f.$pristine=!0;f.$submitted=!1;q(g,function(a){a.$setPristine()})};f.$setUntouched=function(){q(g,function(a){a.$setUntouched()})};f.$setSubmitted=function(){c.addClass(a,"ng-submitted");f.$submitted=!0;f.$$parentForm.$setSubmitted()}}function oc(a){a.$formatters.push(function(b){return a.$isEmpty(b)?b:b.toString()})}function lb(a,b,d,c,e,f){var g=L(b[0].type);
if(!e.android){var h=!1;b.on("compositionstart",function(){h=!0});b.on("compositionend",function(){h=!1;l()})}var k,l=function(a){k&&(f.defer.cancel(k),k=null);if(!h){var e=b.val();a=a&&a.type;"password"===g||d.ngTrim&&"false"===d.ngTrim||(e=V(e));(c.$viewValue!==e||""===e&&c.$$hasNativeValidators)&&c.$setViewValue(e,a)}};if(e.hasEvent("input"))b.on("input",l);else{var m=function(a,b,c){k||(k=f.defer(function(){k=null;b&&b.value===c||l(a)}))};b.on("keydown",function(a){var b=a.keyCode;91===b||15<
b&&19>b||37<=b&&40>=b||m(a,this,this.value)});if(e.hasEvent("paste"))b.on("paste cut",m)}b.on("change",l);if(Ld[g]&&c.$$hasNativeValidators&&g===d.type)b.on("keydown wheel mousedown",function(a){if(!k){var b=this.validity,c=b.badInput,d=b.typeMismatch;k=f.defer(function(){k=null;b.badInput===c&&b.typeMismatch===d||l(a)})}});c.$render=function(){var a=c.$isEmpty(c.$viewValue)?"":c.$viewValue;b.val()!==a&&b.val(a)}}function Ob(a,b){return function(d,c){var e,f;if(ha(d))return d;if(I(d)){'"'==d.charAt(0)&&
'"'==d.charAt(d.length-1)&&(d=d.substring(1,d.length-1));if(Ag.test(d))return new Date(d);a.lastIndex=0;if(e=a.exec(d))return e.shift(),f=c?{yyyy:c.getFullYear(),MM:c.getMonth()+1,dd:c.getDate(),HH:c.getHours(),mm:c.getMinutes(),ss:c.getSeconds(),sss:c.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},q(e,function(a,c){c<b.length&&(f[b[c]]=+a)}),new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function mb(a,b,d,c){return function(e,f,g,h,k,l,m){function n(a){return a&&
!(a.getTime&&a.getTime()!==a.getTime())}function p(a){return v(a)&&!ha(a)?d(a)||void 0:a}Md(e,f,g,h);lb(e,f,g,h,k,l);var q=h&&h.$options&&h.$options.timezone,s;h.$$parserName=a;h.$parsers.push(function(a){if(h.$isEmpty(a))return null;if(b.test(a))return a=d(a,s),q&&(a=Tb(a,q)),a});h.$formatters.push(function(a){if(a&&!ha(a))throw nb("datefmt",a);if(n(a))return(s=a)&&q&&(s=Tb(s,q,!0)),m("date")(a,c,q);s=null;return""});if(v(g.min)||g.ngMin){var z;h.$validators.min=function(a){return!n(a)||y(z)||d(a)>=
z};g.$observe("min",function(a){z=p(a);h.$validate()})}if(v(g.max)||g.ngMax){var r;h.$validators.max=function(a){return!n(a)||y(r)||d(a)<=r};g.$observe("max",function(a){r=p(a);h.$validate()})}}}function Md(a,b,d,c){(c.$$hasNativeValidators=J(b[0].validity))&&c.$parsers.push(function(a){var c=b.prop("validity")||{};return c.badInput||c.typeMismatch?void 0:a})}function Nd(a,b,d,c,e){if(v(c)){a=a(c);if(!a.constant)throw nb("constexpr",d,c);return a(b)}return e}function pc(a,b){a="ngClass"+a;return["$animate",
function(d){function c(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],m=0;m<b.length;m++)if(e==b[m])continue a;c.push(e)}return c}function e(a){var b=[];return K(a)?(q(a,function(a){b=b.concat(e(a))}),b):I(a)?a.split(" "):J(a)?(q(a,function(a,c){a&&(b=b.concat(c.split(" ")))}),b):a}return{restrict:"AC",link:function(f,g,h){function k(a){a=l(a,1);h.$addClass(a)}function l(a,b){var c=g.data("$classCounts")||S(),d=[];q(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",
c);return d.join(" ")}function m(a,b){var e=c(b,a),f=c(a,b),e=l(e,1),f=l(f,-1);e&&e.length&&d.addClass(g,e);f&&f.length&&d.removeClass(g,f)}function n(a){if(!0===b||(f.$index&1)===b){var c=e(a||[]);if(!p)k(c);else if(!na(a,p)){var d=e(p);m(d,c)}}p=K(a)?a.map(function(a){return fa(a)}):fa(a)}var p;f.$watch(h[a],n,!0);h.$observe("class",function(b){n(f.$eval(h[a]))});"ngClass"!==a&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var m=e(f.$eval(h[a]));g===b?k(m):(g=l(m,-1),h.$removeClass(g))}})}}}]}
function Kd(a){function b(a,b){b&&!f[a]?(k.addClass(e,a),f[a]=!0):!b&&f[a]&&(k.removeClass(e,a),f[a]=!1)}function d(a,c){a=a?"-"+Bc(a,"-"):"";b(ob+a,!0===c);b(Od+a,!1===c)}var c=a.ctrl,e=a.$element,f={},g=a.set,h=a.unset,k=a.$animate;f[Od]=!(f[ob]=e.hasClass(ob));c.$setValidity=function(a,e,f){y(e)?(c.$pending||(c.$pending={}),g(c.$pending,a,f)):(c.$pending&&h(c.$pending,a,f),Pd(c.$pending)&&(c.$pending=void 0));Ea(e)?e?(h(c.$error,a,f),g(c.$$success,a,f)):(g(c.$error,a,f),h(c.$$success,a,f)):(h(c.$error,
a,f),h(c.$$success,a,f));c.$pending?(b(Qd,!0),c.$valid=c.$invalid=void 0,d("",null)):(b(Qd,!1),c.$valid=Pd(c.$error),c.$invalid=!c.$valid,d("",c.$valid));e=c.$pending&&c.$pending[a]?void 0:c.$error[a]?!1:c.$$success[a]?!0:null;d(a,e);c.$$parentForm.$setValidity(a,e,c)}}function Pd(a){if(a)for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}var Bg=/^\/(.+)\/([a-z]*)$/,sa=Object.prototype.hasOwnProperty,L=function(a){return I(a)?a.toLowerCase():a},ub=function(a){return I(a)?a.toUpperCase():a},Ba,
G,Y,ya=[].slice,ag=[].splice,Cg=[].push,ja=Object.prototype.toString,vc=Object.getPrototypeOf,za=O("ng"),da=F.angular||(F.angular={}),Vb,pb=0;Ba=F.document.documentMode;C.$inject=[];Ya.$inject=[];var K=Array.isArray,ae=/^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/,V=function(a){return I(a)?a.trim():a},wd=function(a){return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},Fa=function(){if(!v(Fa.rules)){var a=F.document.querySelector("[ng-csp]")||
F.document.querySelector("[data-ng-csp]");if(a){var b=a.getAttribute("ng-csp")||a.getAttribute("data-ng-csp");Fa.rules={noUnsafeEval:!b||-1!==b.indexOf("no-unsafe-eval"),noInlineStyle:!b||-1!==b.indexOf("no-inline-style")}}else{a=Fa;try{new Function(""),b=!1}catch(d){b=!0}a.rules={noUnsafeEval:b,noInlineStyle:!1}}}return Fa.rules},rb=function(){if(v(rb.name_))return rb.name_;var a,b,d=Oa.length,c,e;for(b=0;b<d;++b)if(c=Oa[b],a=F.document.querySelector("["+c.replace(":","\\:")+"jq]")){e=a.getAttribute(c+
"jq");break}return rb.name_=e},de=/:/g,Oa=["ng-","data-ng-","ng:","x-ng-"],ie=/[A-Z]/g,Cc=!1,Na=3,me={full:"1.5.6",major:1,minor:5,dot:6,codeName:"arrow-stringification"};T.expando="ng339";var gb=T.cache={},Of=1;T._data=function(a){return this.cache[a[this.expando]]||{}};var Jf=/([\:\-\_]+(.))/g,Kf=/^moz([A-Z])/,yb={mouseleave:"mouseout",mouseenter:"mouseover"},Xb=O("jqLite"),Nf=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,Wb=/<|&#?\w+;/,Lf=/<([\w:-]+)/,Mf=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
ga={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ga.optgroup=ga.option;ga.tbody=ga.tfoot=ga.colgroup=ga.caption=ga.thead;ga.th=ga.td;var Tf=F.Node.prototype.contains||function(a){return!!(this.compareDocumentPosition(a)&16)},Pa=T.prototype={ready:function(a){function b(){d||(d=!0,a())}var d=!1;"complete"===
F.document.readyState?F.setTimeout(b):(this.on("DOMContentLoaded",b),T(F).on("load",b))},toString:function(){var a=[];q(this,function(b){a.push(""+b)});return"["+a.join(", ")+"]"},eq:function(a){return 0<=a?G(this[a]):G(this[this.length+a])},length:0,push:Cg,sort:[].sort,splice:[].splice},Eb={};q("multiple selected checked disabled readOnly required open".split(" "),function(a){Eb[L(a)]=a});var Uc={};q("input select option textarea button form details".split(" "),function(a){Uc[a]=!0});var bd={ngMinlength:"minlength",
ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};q({data:Zb,removeData:fb,hasData:function(a){for(var b in gb[a.ng339])return!0;return!1},cleanData:function(a){for(var b=0,d=a.length;b<d;b++)fb(a[b])}},function(a,b){T[b]=a});q({data:Zb,inheritedData:Cb,scope:function(a){return G.data(a,"$scope")||Cb(a.parentNode||a,["$isolateScope","$scope"])},isolateScope:function(a){return G.data(a,"$isolateScope")||G.data(a,"$isolateScopeNoTemplate")},controller:Rc,injector:function(a){return Cb(a,
"$injector")},removeAttr:function(a,b){a.removeAttribute(b)},hasClass:zb,css:function(a,b,d){b=eb(b);if(v(d))a.style[b]=d;else return a.style[b]},attr:function(a,b,d){var c=a.nodeType;if(c!==Na&&2!==c&&8!==c)if(c=L(b),Eb[c])if(v(d))d?(a[b]=!0,a.setAttribute(b,c)):(a[b]=!1,a.removeAttribute(c));else return a[b]||(a.attributes.getNamedItem(b)||C).specified?c:void 0;else if(v(d))a.setAttribute(b,d);else if(a.getAttribute)return a=a.getAttribute(b,2),null===a?void 0:a},prop:function(a,b,d){if(v(d))a[b]=
d;else return a[b]},text:function(){function a(a,d){if(y(d)){var c=a.nodeType;return 1===c||c===Na?a.textContent:""}a.textContent=d}a.$dv="";return a}(),val:function(a,b){if(y(b)){if(a.multiple&&"select"===ta(a)){var d=[];q(a.options,function(a){a.selected&&d.push(a.value||a.text)});return 0===d.length?null:d}return a.value}a.value=b},html:function(a,b){if(y(b))return a.innerHTML;wb(a,!0);a.innerHTML=b},empty:Sc},function(a,b){T.prototype[b]=function(b,c){var e,f,g=this.length;if(a!==Sc&&y(2==a.length&&
a!==zb&&a!==Rc?b:c)){if(J(b)){for(e=0;e<g;e++)if(a===Zb)a(this[e],b);else for(f in b)a(this[e],f,b[f]);return this}e=a.$dv;g=y(e)?Math.min(g,1):g;for(f=0;f<g;f++){var h=a(this[f],b,c);e=e?e+h:h}return e}for(e=0;e<g;e++)a(this[e],b,c);return this}});q({removeData:fb,on:function(a,b,d,c){if(v(c))throw Xb("onargs");if(Mc(a)){c=xb(a,!0);var e=c.events,f=c.handle;f||(f=c.handle=Qf(a,e));c=0<=b.indexOf(" ")?b.split(" "):[b];for(var g=c.length,h=function(b,c,g){var h=e[b];h||(h=e[b]=[],h.specialHandlerWrapper=
c,"$destroy"===b||g||a.addEventListener(b,f,!1));h.push(d)};g--;)b=c[g],yb[b]?(h(yb[b],Sf),h(b,void 0,!0)):h(b)}},off:Qc,one:function(a,b,d){a=G(a);a.on(b,function e(){a.off(b,d);a.off(b,e)});a.on(b,d)},replaceWith:function(a,b){var d,c=a.parentNode;wb(a);q(new T(b),function(b){d?c.insertBefore(b,d.nextSibling):c.replaceChild(b,a);d=b})},children:function(a){var b=[];q(a.childNodes,function(a){1===a.nodeType&&b.push(a)});return b},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,
b){var d=a.nodeType;if(1===d||11===d){b=new T(b);for(var d=0,c=b.length;d<c;d++)a.appendChild(b[d])}},prepend:function(a,b){if(1===a.nodeType){var d=a.firstChild;q(new T(b),function(b){a.insertBefore(b,d)})}},wrap:function(a,b){Oc(a,G(b).eq(0).clone()[0])},remove:Db,detach:function(a){Db(a,!0)},after:function(a,b){var d=a,c=a.parentNode;b=new T(b);for(var e=0,f=b.length;e<f;e++){var g=b[e];c.insertBefore(g,d.nextSibling);d=g}},addClass:Bb,removeClass:Ab,toggleClass:function(a,b,d){b&&q(b.split(" "),
function(b){var e=d;y(e)&&(e=!zb(a,b));(e?Bb:Ab)(a,b)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,b){return a.getElementsByTagName?a.getElementsByTagName(b):[]},clone:Yb,triggerHandler:function(a,b,d){var c,e,f=b.type||b,g=xb(a);if(g=(g=g&&g.events)&&g[f])c={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=
!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:C,type:f,target:a},b.type&&(c=P(c,b)),b=fa(g),e=d?[c].concat(d):[c],q(b,function(b){c.isImmediatePropagationStopped()||b.apply(a,e)})}},function(a,b){T.prototype[b]=function(b,c,e){for(var f,g=0,h=this.length;g<h;g++)y(f)?(f=a(this[g],b,c,e),v(f)&&(f=G(f))):Pc(f,a(this[g],b,c,e));return v(f)?f:this};T.prototype.bind=T.prototype.on;T.prototype.unbind=T.prototype.off});Sa.prototype={put:function(a,
b){this[Ga(a,this.nextUid)]=b},get:function(a){return this[Ga(a,this.nextUid)]},remove:function(a){var b=this[a=Ga(a,this.nextUid)];delete this[a];return b}};var Hf=[function(){this.$get=[function(){return Sa}]}],Vf=/^([^\(]+?)=>/,Wf=/^[^\(]*\(\s*([^\)]*)\)/m,Dg=/,/,Eg=/^\s*(_?)(\S+?)\1\s*$/,Uf=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ha=O("$injector");db.$$annotate=function(a,b,d){var c;if("function"===typeof a){if(!(c=a.$inject)){c=[];if(a.length){if(b)throw I(d)&&d||(d=a.name||Xf(a)),Ha("strictdi",d);
b=Vc(a);q(b[1].split(Dg),function(a){a.replace(Eg,function(a,b,d){c.push(d)})})}a.$inject=c}}else K(a)?(b=a.length-1,Qa(a[b],"fn"),c=a.slice(0,b)):Qa(a,"fn",!0);return c};var Rd=O("$animate"),$e=function(){this.$get=C},af=function(){var a=new Sa,b=[];this.$get=["$$AnimateRunner","$rootScope",function(d,c){function e(a,b,c){var d=!1;b&&(b=I(b)?b.split(" "):K(b)?b:[],q(b,function(b){b&&(d=!0,a[b]=c)}));return d}function f(){q(b,function(b){var c=a.get(b);if(c){var d=Yf(b.attr("class")),e="",f="";q(c,
function(a,b){a!==!!d[b]&&(a?e+=(e.length?" ":"")+b:f+=(f.length?" ":"")+b)});q(b,function(a){e&&Bb(a,e);f&&Ab(a,f)});a.remove(b)}});b.length=0}return{enabled:C,on:C,off:C,pin:C,push:function(g,h,k,l){l&&l();k=k||{};k.from&&g.css(k.from);k.to&&g.css(k.to);if(k.addClass||k.removeClass)if(h=k.addClass,l=k.removeClass,k=a.get(g)||{},h=e(k,h,!0),l=e(k,l,!1),h||l)a.put(g,k),b.push(g),1===b.length&&c.$$postDigest(f);g=new d;g.complete();return g}}}]},Ye=["$provide",function(a){var b=this;this.$$registeredAnimations=
Object.create(null);this.register=function(d,c){if(d&&"."!==d.charAt(0))throw Rd("notcsel",d);var e=d+"-animation";b.$$registeredAnimations[d.substr(1)]=e;a.factory(e,c)};this.classNameFilter=function(a){if(1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null)&&/(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString()))throw Rd("nongcls","ng-animate");return this.$$classNameFilter};this.$get=["$$animateQueue",function(a){function b(a,c,d){if(d){var h;a:{for(h=0;h<d.length;h++){var k=
d[h];if(1===k.nodeType){h=k;break a}}h=void 0}!h||h.parentNode||h.previousElementSibling||(d=null)}d?d.after(a):c.prepend(a)}return{on:a.on,off:a.off,pin:a.pin,enabled:a.enabled,cancel:function(a){a.end&&a.end()},enter:function(e,f,g,h){f=f&&G(f);g=g&&G(g);f=f||g.parent();b(e,f,g);return a.push(e,"enter",Ia(h))},move:function(e,f,g,h){f=f&&G(f);g=g&&G(g);f=f||g.parent();b(e,f,g);return a.push(e,"move",Ia(h))},leave:function(b,c){return a.push(b,"leave",Ia(c),function(){b.remove()})},addClass:function(b,
c,g){g=Ia(g);g.addClass=hb(g.addclass,c);return a.push(b,"addClass",g)},removeClass:function(b,c,g){g=Ia(g);g.removeClass=hb(g.removeClass,c);return a.push(b,"removeClass",g)},setClass:function(b,c,g,h){h=Ia(h);h.addClass=hb(h.addClass,c);h.removeClass=hb(h.removeClass,g);return a.push(b,"setClass",h)},animate:function(b,c,g,h,k){k=Ia(k);k.from=k.from?P(k.from,c):c;k.to=k.to?P(k.to,g):g;k.tempClasses=hb(k.tempClasses,h||"ng-inline-animate");return a.push(b,"animate",k)}}}]}],cf=function(){this.$get=
["$$rAF",function(a){function b(b){d.push(b);1<d.length||a(function(){for(var a=0;a<d.length;a++)d[a]();d=[]})}var d=[];return function(){var a=!1;b(function(){a=!0});return function(d){a?d():b(d)}}}]},bf=function(){this.$get=["$q","$sniffer","$$animateAsyncRun","$document","$timeout",function(a,b,d,c,e){function f(a){this.setHost(a);var b=d();this._doneCallbacks=[];this._tick=function(a){var d=c[0];d&&d.hidden?e(a,0,!1):b(a)};this._state=0}f.chain=function(a,b){function c(){if(d===a.length)b(!0);
else a[d](function(a){!1===a?b(!1):(d++,c())})}var d=0;c()};f.all=function(a,b){function c(f){e=e&&f;++d===a.length&&b(e)}var d=0,e=!0;q(a,function(a){a.done(c)})};f.prototype={setHost:function(a){this.host=a||{}},done:function(a){2===this._state?a():this._doneCallbacks.push(a)},progress:C,getPromise:function(){if(!this.promise){var b=this;this.promise=a(function(a,c){b.done(function(b){!1===b?c():a()})})}return this.promise},then:function(a,b){return this.getPromise().then(a,b)},"catch":function(a){return this.getPromise()["catch"](a)},
"finally":function(a){return this.getPromise()["finally"](a)},pause:function(){this.host.pause&&this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&this.host.end();this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel();this._resolve(!1)},complete:function(a){var b=this;0===b._state&&(b._state=1,b._tick(function(){b._resolve(a)}))},_resolve:function(a){2!==this._state&&(q(this._doneCallbacks,function(b){b(a)}),this._doneCallbacks.length=
0,this._state=2)}};return f}]},Ze=function(){this.$get=["$$rAF","$q","$$AnimateRunner",function(a,b,d){return function(b,e){function f(){a(function(){g.addClass&&(b.addClass(g.addClass),g.addClass=null);g.removeClass&&(b.removeClass(g.removeClass),g.removeClass=null);g.to&&(b.css(g.to),g.to=null);h||k.complete();h=!0});return k}var g=e||{};g.$$prepared||(g=oa(g));g.cleanupStyles&&(g.from=g.to=null);g.from&&(b.css(g.from),g.from=null);var h,k=new d;return{start:f,end:f}}}]},ea=O("$compile"),bc=new function(){};
Ec.$inject=["$provide","$$sanitizeUriProvider"];Gb.prototype.isFirstChange=function(){return this.previousValue===bc};var Xc=/^((?:x|data)[\:\-_])/i,bg=O("$controller"),cd=/^(\S+)(\s+as\s+([\w$]+))?$/,jf=function(){this.$get=["$document",function(a){return function(b){b?!b.nodeType&&b instanceof G&&(b=b[0]):b=a[0].body;return b.offsetWidth+1}}]},dd="application/json",ec={"Content-Type":dd+";charset=utf-8"},dg=/^\[|^\{(?!\{)/,eg={"[":/]$/,"{":/}$/},cg=/^\)\]\}',?\n/,Fg=O("$http"),hd=function(a){return function(){throw Fg("legacy",
a);}},Ka=da.$interpolateMinErr=O("$interpolate");Ka.throwNoconcat=function(a){throw Ka("noconcat",a);};Ka.interr=function(a,b){return Ka("interr",a,b.toString())};var Gg=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,gg={http:80,https:443,ftp:21},Hb=O("$location"),Hg={$$html5:!1,$$replace:!1,absUrl:Ib("$$absUrl"),url:function(a){if(y(a))return this.$$url;var b=Gg.exec(a);(b[1]||""===a)&&this.path(decodeURIComponent(b[1]));(b[2]||b[1]||""===a)&&this.search(b[3]||"");this.hash(b[5]||"");return this},protocol:Ib("$$protocol"),
host:Ib("$$host"),port:Ib("$$port"),path:md("$$path",function(a){a=null!==a?a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,b){switch(arguments.length){case 0:return this.$$search;case 1:if(I(a)||Q(a))a=a.toString(),this.$$search=zc(a);else if(J(a))a=oa(a,{}),q(a,function(b,c){null==b&&delete a[c]}),this.$$search=a;else throw Hb("isrcharg");break;default:y(b)||null===b?delete this.$$search[a]:this.$$search[a]=b}this.$$compose();return this},hash:md("$$hash",function(a){return null!==
a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};q([ld,hc,gc],function(a){a.prototype=Object.create(Hg);a.prototype.state=function(b){if(!arguments.length)return this.$$state;if(a!==gc||!this.$$html5)throw Hb("nostate");this.$$state=y(b)?null:b;return this}});var ba=O("$parse"),ig=Function.prototype.call,jg=Function.prototype.apply,kg=Function.prototype.bind,Pb=S();q("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){Pb[a]=!0});var Ig={n:"\n",f:"\f",r:"\r",
t:"\t",v:"\v","'":"'",'"':'"'},jc=function(a){this.options=a};jc.prototype={constructor:jc,lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdentifierStart(this.peekMultichar()))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;
else{var b=a+this.peek(),d=b+this.peek(2),c=Pb[b],e=Pb[d];Pb[a]||c||e?(a=e?d:c?b:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,b){return-1!==b.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||
"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdentifierStart:function(a){return this.options.isIdentifierStart?this.options.isIdentifierStart(a,this.codePointAt(a)):this.isValidIdentifierStart(a)},isValidIdentifierStart:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isIdentifierContinue:function(a){return this.options.isIdentifierContinue?this.options.isIdentifierContinue(a,this.codePointAt(a)):this.isValidIdentifierContinue(a)},isValidIdentifierContinue:function(a,b){return this.isValidIdentifierStart(a,
b)||this.isNumber(a)},codePointAt:function(a){return 1===a.length?a.charCodeAt(0):(a.charCodeAt(0)<<10)+a.charCodeAt(1)-56613888},peekMultichar:function(){var a=this.text.charAt(this.index),b=this.peek();if(!b)return a;var d=a.charCodeAt(0),c=b.charCodeAt(0);return 55296<=d&&56319>=d&&56320<=c&&57343>=c?a+b:a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,b,d){d=d||this.index;b=v(b)?"s "+b+"-"+this.index+" ["+this.text.substring(b,d)+"]":" "+d;throw ba("lexerr",
a,b,this.text);},readNumber:function(){for(var a="",b=this.index;this.index<this.text.length;){var d=L(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var c=this.peek();if("e"==d&&this.isExpOperator(c))a+=d;else if(this.isExpOperator(d)&&c&&this.isNumber(c)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||c&&this.isNumber(c)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:b,text:a,constant:!0,value:Number(a)})},
readIdent:function(){var a=this.index;for(this.index+=this.peekMultichar().length;this.index<this.text.length;){var b=this.peekMultichar();if(!this.isIdentifierContinue(b))break;this.index+=b.length}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var b=this.index;this.index++;for(var d="",c=a,e=!1;this.index<this.text.length;){var f=this.text.charAt(this.index),c=c+f;if(e)"u"===f?(e=this.text.substring(this.index+1,this.index+5),e.match(/[\da-f]{4}/i)||
this.throwError("Invalid unicode escape [\\u"+e+"]"),this.index+=4,d+=String.fromCharCode(parseInt(e,16))):d+=Ig[f]||f,e=!1;else if("\\"===f)e=!0;else{if(f===a){this.index++;this.tokens.push({index:b,text:c,constant:!0,value:d});return}d+=f}this.index++}this.throwError("Unterminated quote",b)}};var s=function(a,b){this.lexer=a;this.options=b};s.Program="Program";s.ExpressionStatement="ExpressionStatement";s.AssignmentExpression="AssignmentExpression";s.ConditionalExpression="ConditionalExpression";
s.LogicalExpression="LogicalExpression";s.BinaryExpression="BinaryExpression";s.UnaryExpression="UnaryExpression";s.CallExpression="CallExpression";s.MemberExpression="MemberExpression";s.Identifier="Identifier";s.Literal="Literal";s.ArrayExpression="ArrayExpression";s.Property="Property";s.ObjectExpression="ObjectExpression";s.ThisExpression="ThisExpression";s.LocalsExpression="LocalsExpression";s.NGValueParameter="NGValueParameter";s.prototype={ast:function(a){this.text=a;this.tokens=this.lexer.lex(a);
a=this.program();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);return a},program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),!this.expect(";"))return{type:s.Program,body:a}},expressionStatement:function(){return{type:s.ExpressionStatement,expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},expression:function(){return this.assignment()},
assignment:function(){var a=this.ternary();this.expect("=")&&(a={type:s.AssignmentExpression,left:a,right:this.assignment(),operator:"="});return a},ternary:function(){var a=this.logicalOR(),b,d;return this.expect("?")&&(b=this.expression(),this.consume(":"))?(d=this.expression(),{type:s.ConditionalExpression,test:a,alternate:b,consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:s.LogicalExpression,operator:"||",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=
this.equality();this.expect("&&");)a={type:s.LogicalExpression,operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),b;b=this.expect("==","!=","===","!==");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.relational()};return a},relational:function(){for(var a=this.additive(),b;b=this.expect("<",">","<=",">=");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.additive()};return a},additive:function(){for(var a=this.multiplicative(),
b;b=this.expect("+","-");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),b;b=this.expect("*","/","%");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.unary()};return a},unary:function(){var a;return(a=this.expect("+","-","!"))?{type:s.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):
this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.selfReferential.hasOwnProperty(this.peek().text)?a=oa(this.selfReferential[this.consume().text]):this.options.literals.hasOwnProperty(this.peek().text)?a={type:s.Literal,value:this.options.literals[this.consume().text]}:this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var b;b=this.expect("(","[",".");)"("===b.text?(a={type:s.CallExpression,
callee:a,arguments:this.parseArguments()},this.consume(")")):"["===b.text?(a={type:s.MemberExpression,object:a,property:this.expression(),computed:!0},this.consume("]")):"."===b.text?a={type:s.MemberExpression,object:a,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");return a},filter:function(a){a=[a];for(var b={type:s.CallExpression,callee:this.identifier(),arguments:a,filter:!0};this.expect(":");)a.push(this.expression());return b},parseArguments:function(){var a=[];if(")"!==
this.peekToken().text){do a.push(this.expression());while(this.expect(","))}return a},identifier:function(){var a=this.consume();a.identifier||this.throwError("is not a valid identifier",a);return{type:s.Identifier,name:a.text}},constant:function(){return{type:s.Literal,value:this.consume().value}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");return{type:s.ArrayExpression,elements:a}},
object:function(){var a=[],b;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;b={type:s.Property,kind:"init"};this.peek().constant?(b.key=this.constant(),b.computed=!1,this.consume(":"),b.value=this.expression()):this.peek().identifier?(b.key=this.identifier(),b.computed=!1,this.peek(":")?(this.consume(":"),b.value=this.expression()):b.value=b.key):this.peek("[")?(this.consume("["),b.key=this.expression(),this.consume("]"),b.computed=!0,this.consume(":"),b.value=this.expression()):this.throwError("invalid key",
this.peek());a.push(b)}while(this.expect(","))}this.consume("}");return{type:s.ObjectExpression,properties:a}},throwError:function(a,b){throw ba("syntax",b.text,a,b.index+1,this.text,this.text.substring(b.index));},consume:function(a){if(0===this.tokens.length)throw ba("ueoe",this.text);var b=this.expect(a);b||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return b},peekToken:function(){if(0===this.tokens.length)throw ba("ueoe",this.text);return this.tokens[0]},peek:function(a,b,
d,c){return this.peekAhead(0,a,b,d,c)},peekAhead:function(a,b,d,c,e){if(this.tokens.length>a){a=this.tokens[a];var f=a.text;if(f===b||f===d||f===c||f===e||!(b||d||c||e))return a}return!1},expect:function(a,b,d,c){return(a=this.peek(a,b,d,c))?(this.tokens.shift(),a):!1},selfReferential:{"this":{type:s.ThisExpression},$locals:{type:s.LocalsExpression}}};td.prototype={compile:function(a,b){var d=this,c=this.astBuilder.ast(a);this.state={nextId:0,filters:{},expensiveChecks:b,fn:{vars:[],body:[],own:{}},
assign:{vars:[],body:[],own:{}},inputs:[]};Z(c,d.$filter);var e="",f;this.stage="assign";if(f=rd(c))this.state.computing="assign",e=this.nextId(),this.recurse(f,e),this.return_(e),e="fn.assign="+this.generateFunction("assign","s,v,l");f=pd(c.body);d.stage="inputs";q(f,function(a,b){var c="fn"+b;d.state[c]={vars:[],body:[],own:{}};d.state.computing=c;var e=d.nextId();d.recurse(a,e);d.return_(e);d.state.inputs.push(c);a.watchId=b});this.state.computing="fn";this.stage="main";this.recurse(c);e='"'+this.USE+
" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+e+this.watchFns()+"return fn;";e=(new Function("$filter","ensureSafeMemberName","ensureSafeObject","ensureSafeFunction","getStringValue","ensureSafeAssignContext","ifDefined","plus","text",e))(this.$filter,Ua,qa,nd,hg,Jb,lg,od,a);this.state=this.stage=void 0;e.literal=sd(c);e.constant=c.constant;return e},USE:"use",STRICT:"strict",watchFns:function(){var a=[],b=this.state.inputs,d=this;q(b,function(b){a.push("var "+
b+"="+d.generateFunction(b,"s"))});b.length&&a.push("fn.inputs=["+b.join(",")+"];");return a.join("")},generateFunction:function(a,b){return"function("+b+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=[],b=this;q(this.state.filters,function(d,c){a.push(d+"=$filter("+b.escape(c)+")")});return a.length?"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?"var "+this.state[a].vars.join(",")+";":""},body:function(a){return this.state[a].body.join("")},
recurse:function(a,b,d,c,e,f){var g,h,k=this,l,m,n;c=c||C;if(!f&&v(a.watchId))b=b||this.nextId(),this.if_("i",this.lazyAssign(b,this.computedMember("i",a.watchId)),this.lazyRecurse(a,b,d,c,e,!0));else switch(a.type){case s.Program:q(a.body,function(b,c){k.recurse(b.expression,void 0,void 0,function(a){h=a});c!==a.body.length-1?k.current().body.push(h,";"):k.return_(h)});break;case s.Literal:m=this.escape(a.value);this.assign(b,m);c(m);break;case s.UnaryExpression:this.recurse(a.argument,void 0,void 0,
function(a){h=a});m=a.operator+"("+this.ifDefined(h,0)+")";this.assign(b,m);c(m);break;case s.BinaryExpression:this.recurse(a.left,void 0,void 0,function(a){g=a});this.recurse(a.right,void 0,void 0,function(a){h=a});m="+"===a.operator?this.plus(g,h):"-"===a.operator?this.ifDefined(g,0)+a.operator+this.ifDefined(h,0):"("+g+")"+a.operator+"("+h+")";this.assign(b,m);c(m);break;case s.LogicalExpression:b=b||this.nextId();k.recurse(a.left,b);k.if_("&&"===a.operator?b:k.not(b),k.lazyRecurse(a.right,b));
c(b);break;case s.ConditionalExpression:b=b||this.nextId();k.recurse(a.test,b);k.if_(b,k.lazyRecurse(a.alternate,b),k.lazyRecurse(a.consequent,b));c(b);break;case s.Identifier:b=b||this.nextId();d&&(d.context="inputs"===k.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",a.name)+"?l:s"),d.computed=!1,d.name=a.name);Ua(a.name);k.if_("inputs"===k.stage||k.not(k.getHasOwnProperty("l",a.name)),function(){k.if_("inputs"===k.stage||"s",function(){e&&1!==e&&k.if_(k.not(k.nonComputedMember("s",
a.name)),k.lazyAssign(k.nonComputedMember("s",a.name),"{}"));k.assign(b,k.nonComputedMember("s",a.name))})},b&&k.lazyAssign(b,k.nonComputedMember("l",a.name)));(k.state.expensiveChecks||Kb(a.name))&&k.addEnsureSafeObject(b);c(b);break;case s.MemberExpression:g=d&&(d.context=this.nextId())||this.nextId();b=b||this.nextId();k.recurse(a.object,g,void 0,function(){k.if_(k.notNull(g),function(){e&&1!==e&&k.addEnsureSafeAssignContext(g);if(a.computed)h=k.nextId(),k.recurse(a.property,h),k.getStringValue(h),
k.addEnsureSafeMemberName(h),e&&1!==e&&k.if_(k.not(k.computedMember(g,h)),k.lazyAssign(k.computedMember(g,h),"{}")),m=k.ensureSafeObject(k.computedMember(g,h)),k.assign(b,m),d&&(d.computed=!0,d.name=h);else{Ua(a.property.name);e&&1!==e&&k.if_(k.not(k.nonComputedMember(g,a.property.name)),k.lazyAssign(k.nonComputedMember(g,a.property.name),"{}"));m=k.nonComputedMember(g,a.property.name);if(k.state.expensiveChecks||Kb(a.property.name))m=k.ensureSafeObject(m);k.assign(b,m);d&&(d.computed=!1,d.name=a.property.name)}},
function(){k.assign(b,"undefined")});c(b)},!!e);break;case s.CallExpression:b=b||this.nextId();a.filter?(h=k.filter(a.callee.name),l=[],q(a.arguments,function(a){var b=k.nextId();k.recurse(a,b);l.push(b)}),m=h+"("+l.join(",")+")",k.assign(b,m),c(b)):(h=k.nextId(),g={},l=[],k.recurse(a.callee,h,g,function(){k.if_(k.notNull(h),function(){k.addEnsureSafeFunction(h);q(a.arguments,function(a){k.recurse(a,k.nextId(),void 0,function(a){l.push(k.ensureSafeObject(a))})});g.name?(k.state.expensiveChecks||k.addEnsureSafeObject(g.context),
m=k.member(g.context,g.name,g.computed)+"("+l.join(",")+")"):m=h+"("+l.join(",")+")";m=k.ensureSafeObject(m);k.assign(b,m)},function(){k.assign(b,"undefined")});c(b)}));break;case s.AssignmentExpression:h=this.nextId();g={};if(!qd(a.left))throw ba("lval");this.recurse(a.left,void 0,g,function(){k.if_(k.notNull(g.context),function(){k.recurse(a.right,h);k.addEnsureSafeObject(k.member(g.context,g.name,g.computed));k.addEnsureSafeAssignContext(g.context);m=k.member(g.context,g.name,g.computed)+a.operator+
h;k.assign(b,m);c(b||m)})},1);break;case s.ArrayExpression:l=[];q(a.elements,function(a){k.recurse(a,k.nextId(),void 0,function(a){l.push(a)})});m="["+l.join(",")+"]";this.assign(b,m);c(m);break;case s.ObjectExpression:l=[];n=!1;q(a.properties,function(a){a.computed&&(n=!0)});n?(b=b||this.nextId(),this.assign(b,"{}"),q(a.properties,function(a){a.computed?(g=k.nextId(),k.recurse(a.key,g)):g=a.key.type===s.Identifier?a.key.name:""+a.key.value;h=k.nextId();k.recurse(a.value,h);k.assign(k.member(b,g,
a.computed),h)})):(q(a.properties,function(b){k.recurse(b.value,a.constant?void 0:k.nextId(),void 0,function(a){l.push(k.escape(b.key.type===s.Identifier?b.key.name:""+b.key.value)+":"+a)})}),m="{"+l.join(",")+"}",this.assign(b,m));c(b||m);break;case s.ThisExpression:this.assign(b,"s");c("s");break;case s.LocalsExpression:this.assign(b,"l");c("l");break;case s.NGValueParameter:this.assign(b,"v"),c("v")}},getHasOwnProperty:function(a,b){var d=a+"."+b,c=this.current().own;c.hasOwnProperty(d)||(c[d]=
this.nextId(!1,a+"&&("+this.escape(b)+" in "+a+")"));return c[d]},assign:function(a,b){if(a)return this.current().body.push(a,"=",b,";"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||(this.state.filters[a]=this.nextId(!0));return this.state.filters[a]},ifDefined:function(a,b){return"ifDefined("+a+","+this.escape(b)+")"},plus:function(a,b){return"plus("+a+","+b+")"},return_:function(a){this.current().body.push("return ",a,";")},if_:function(a,b,d){if(!0===a)b();else{var c=this.current().body;
c.push("if(",a,"){");b();c.push("}");d&&(c.push("else{"),d(),c.push("}"))}},not:function(a){return"!("+a+")"},notNull:function(a){return a+"!=null"},nonComputedMember:function(a,b){var d=/[^$_a-zA-Z0-9]/g;return/[$_a-zA-Z][$_a-zA-Z0-9]*/.test(b)?a+"."+b:a+'["'+b.replace(d,this.stringEscapeFn)+'"]'},computedMember:function(a,b){return a+"["+b+"]"},member:function(a,b,d){return d?this.computedMember(a,b):this.nonComputedMember(a,b)},addEnsureSafeObject:function(a){this.current().body.push(this.ensureSafeObject(a),
";")},addEnsureSafeMemberName:function(a){this.current().body.push(this.ensureSafeMemberName(a),";")},addEnsureSafeFunction:function(a){this.current().body.push(this.ensureSafeFunction(a),";")},addEnsureSafeAssignContext:function(a){this.current().body.push(this.ensureSafeAssignContext(a),";")},ensureSafeObject:function(a){return"ensureSafeObject("+a+",text)"},ensureSafeMemberName:function(a){return"ensureSafeMemberName("+a+",text)"},ensureSafeFunction:function(a){return"ensureSafeFunction("+a+",text)"},
getStringValue:function(a){this.assign(a,"getStringValue("+a+")")},ensureSafeAssignContext:function(a){return"ensureSafeAssignContext("+a+",text)"},lazyRecurse:function(a,b,d,c,e,f){var g=this;return function(){g.recurse(a,b,d,c,e,f)}},lazyAssign:function(a,b){var d=this;return function(){d.assign(a,b)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(I(a))return"'"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+
"'";if(Q(a))return a.toString();if(!0===a)return"true";if(!1===a)return"false";if(null===a)return"null";if("undefined"===typeof a)return"undefined";throw ba("esc");},nextId:function(a,b){var d="v"+this.state.nextId++;a||this.current().vars.push(d+(b?"="+b:""));return d},current:function(){return this.state[this.state.computing]}};ud.prototype={compile:function(a,b){var d=this,c=this.astBuilder.ast(a);this.expression=a;this.expensiveChecks=b;Z(c,d.$filter);var e,f;if(e=rd(c))f=this.recurse(e);e=pd(c.body);
var g;e&&(g=[],q(e,function(a,b){var c=d.recurse(a);a.input=c;g.push(c);a.watchId=b}));var h=[];q(c.body,function(a){h.push(d.recurse(a.expression))});e=0===c.body.length?C:1===c.body.length?h[0]:function(a,b){var c;q(h,function(d){c=d(a,b)});return c};f&&(e.assign=function(a,b,c){return f(a,c,b)});g&&(e.inputs=g);e.literal=sd(c);e.constant=c.constant;return e},recurse:function(a,b,d){var c,e,f=this,g;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case s.Literal:return this.value(a.value,
b);case s.UnaryExpression:return e=this.recurse(a.argument),this["unary"+a.operator](e,b);case s.BinaryExpression:return c=this.recurse(a.left),e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case s.LogicalExpression:return c=this.recurse(a.left),e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case s.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),this.recurse(a.alternate),this.recurse(a.consequent),b);case s.Identifier:return Ua(a.name,f.expression),f.identifier(a.name,
f.expensiveChecks||Kb(a.name),b,d,f.expression);case s.MemberExpression:return c=this.recurse(a.object,!1,!!d),a.computed||(Ua(a.property.name,f.expression),e=a.property.name),a.computed&&(e=this.recurse(a.property)),a.computed?this.computedMember(c,e,b,d,f.expression):this.nonComputedMember(c,e,f.expensiveChecks,b,d,f.expression);case s.CallExpression:return g=[],q(a.arguments,function(a){g.push(f.recurse(a))}),a.filter&&(e=this.$filter(a.callee.name)),a.filter||(e=this.recurse(a.callee,!0)),a.filter?
function(a,c,d,f){for(var n=[],p=0;p<g.length;++p)n.push(g[p](a,c,d,f));a=e.apply(void 0,n,f);return b?{context:void 0,name:void 0,value:a}:a}:function(a,c,d,m){var n=e(a,c,d,m),p;if(null!=n.value){qa(n.context,f.expression);nd(n.value,f.expression);p=[];for(var q=0;q<g.length;++q)p.push(qa(g[q](a,c,d,m),f.expression));p=qa(n.value.apply(n.context,p),f.expression)}return b?{value:p}:p};case s.AssignmentExpression:return c=this.recurse(a.left,!0,1),e=this.recurse(a.right),function(a,d,g,m){var n=c(a,
d,g,m);a=e(a,d,g,m);qa(n.value,f.expression);Jb(n.context);n.context[n.name]=a;return b?{value:a}:a};case s.ArrayExpression:return g=[],q(a.elements,function(a){g.push(f.recurse(a))}),function(a,c,d,e){for(var f=[],p=0;p<g.length;++p)f.push(g[p](a,c,d,e));return b?{value:f}:f};case s.ObjectExpression:return g=[],q(a.properties,function(a){a.computed?g.push({key:f.recurse(a.key),computed:!0,value:f.recurse(a.value)}):g.push({key:a.key.type===s.Identifier?a.key.name:""+a.key.value,computed:!1,value:f.recurse(a.value)})}),
function(a,c,d,e){for(var f={},p=0;p<g.length;++p)g[p].computed?f[g[p].key(a,c,d,e)]=g[p].value(a,c,d,e):f[g[p].key]=g[p].value(a,c,d,e);return b?{value:f}:f};case s.ThisExpression:return function(a){return b?{value:a}:a};case s.LocalsExpression:return function(a,c){return b?{value:c}:c};case s.NGValueParameter:return function(a,c,d){return b?{value:d}:d}}},"unary+":function(a,b){return function(d,c,e,f){d=a(d,c,e,f);d=v(d)?+d:0;return b?{value:d}:d}},"unary-":function(a,b){return function(d,c,e,
f){d=a(d,c,e,f);d=v(d)?-d:0;return b?{value:d}:d}},"unary!":function(a,b){return function(d,c,e,f){d=!a(d,c,e,f);return b?{value:d}:d}},"binary+":function(a,b,d){return function(c,e,f,g){var h=a(c,e,f,g);c=b(c,e,f,g);h=od(h,c);return d?{value:h}:h}},"binary-":function(a,b,d){return function(c,e,f,g){var h=a(c,e,f,g);c=b(c,e,f,g);h=(v(h)?h:0)-(v(c)?c:0);return d?{value:h}:h}},"binary*":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)*b(c,e,f,g);return d?{value:c}:c}},"binary/":function(a,b,d){return function(c,
e,f,g){c=a(c,e,f,g)/b(c,e,f,g);return d?{value:c}:c}},"binary%":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)%b(c,e,f,g);return d?{value:c}:c}},"binary===":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)===b(c,e,f,g);return d?{value:c}:c}},"binary!==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!==b(c,e,f,g);return d?{value:c}:c}},"binary==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)==b(c,e,f,g);return d?{value:c}:c}},"binary!=":function(a,b,d){return function(c,
e,f,g){c=a(c,e,f,g)!=b(c,e,f,g);return d?{value:c}:c}},"binary<":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<b(c,e,f,g);return d?{value:c}:c}},"binary>":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>b(c,e,f,g);return d?{value:c}:c}},"binary<=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<=b(c,e,f,g);return d?{value:c}:c}},"binary>=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>=b(c,e,f,g);return d?{value:c}:c}},"binary&&":function(a,b,d){return function(c,e,f,g){c=
a(c,e,f,g)&&b(c,e,f,g);return d?{value:c}:c}},"binary||":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)||b(c,e,f,g);return d?{value:c}:c}},"ternary?:":function(a,b,d,c){return function(e,f,g,h){e=a(e,f,g,h)?b(e,f,g,h):d(e,f,g,h);return c?{value:e}:e}},value:function(a,b){return function(){return b?{context:void 0,name:void 0,value:a}:a}},identifier:function(a,b,d,c,e){return function(f,g,h,k){f=g&&a in g?g:f;c&&1!==c&&f&&!f[a]&&(f[a]={});g=f?f[a]:void 0;b&&qa(g,e);return d?{context:f,name:a,
value:g}:g}},computedMember:function(a,b,d,c,e){return function(f,g,h,k){var l=a(f,g,h,k),m,n;null!=l&&(m=b(f,g,h,k),m+="",Ua(m,e),c&&1!==c&&(Jb(l),l&&!l[m]&&(l[m]={})),n=l[m],qa(n,e));return d?{context:l,name:m,value:n}:n}},nonComputedMember:function(a,b,d,c,e,f){return function(g,h,k,l){g=a(g,h,k,l);e&&1!==e&&(Jb(g),g&&!g[b]&&(g[b]={}));h=null!=g?g[b]:void 0;(d||Kb(b))&&qa(h,f);return c?{context:g,name:b,value:h}:h}},inputs:function(a,b){return function(d,c,e,f){return f?f[b]:a(d,c,e)}}};var kc=
function(a,b,d){this.lexer=a;this.$filter=b;this.options=d;this.ast=new s(a,d);this.astCompiler=d.csp?new ud(this.ast,b):new td(this.ast,b)};kc.prototype={constructor:kc,parse:function(a){return this.astCompiler.compile(a,this.options.expensiveChecks)}};var mg=Object.prototype.valueOf,ra=O("$sce"),ma={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},og=O("$compile"),X=F.document.createElement("a"),yd=pa(F.location.href);zd.$inject=["$document"];Lc.$inject=["$provide"];var Gd=22,
Fd=".",mc="0";Ad.$inject=["$locale"];Cd.$inject=["$locale"];var zg={yyyy:W("FullYear",4,0,!1,!0),yy:W("FullYear",2,0,!0,!0),y:W("FullYear",1,0,!1,!0),MMMM:kb("Month"),MMM:kb("Month",!0),MM:W("Month",2,1),M:W("Month",1,1),LLLL:kb("Month",!1,!0),dd:W("Date",2),d:W("Date",1),HH:W("Hours",2),H:W("Hours",1),hh:W("Hours",2,-12),h:W("Hours",1,-12),mm:W("Minutes",2),m:W("Minutes",1),ss:W("Seconds",2),s:W("Seconds",1),sss:W("Milliseconds",3),EEEE:kb("Day"),EEE:kb("Day",!0),a:function(a,b){return 12>a.getHours()?
b.AMPMS[0]:b.AMPMS[1]},Z:function(a,b,d){a=-1*d;return a=(0<=a?"+":"")+(Lb(Math[0<a?"floor":"ceil"](a/60),2)+Lb(Math.abs(a%60),2))},ww:Id(2),w:Id(1),G:nc,GG:nc,GGG:nc,GGGG:function(a,b){return 0>=a.getFullYear()?b.ERANAMES[0]:b.ERANAMES[1]}},yg=/((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,xg=/^\-?\d+$/;Bd.$inject=["$locale"];var sg=ca(L),tg=ca(ub);Dd.$inject=["$parse"];var oe=ca({restrict:"E",compile:function(a,b){if(!b.href&&!b.xlinkHref)return function(a,
b){if("a"===b[0].nodeName.toLowerCase()){var e="[object SVGAnimatedString]"===ja.call(b.prop("href"))?"xlink:href":"href";b.on("click",function(a){b.attr(e)||a.preventDefault()})}}}}),vb={};q(Eb,function(a,b){function d(a,d,e){a.$watch(e[c],function(a){e.$set(b,!!a)})}if("multiple"!=a){var c=wa("ng-"+b),e=d;"checked"===a&&(e=function(a,b,e){e.ngModel!==e[c]&&d(a,b,e)});vb[c]=function(){return{restrict:"A",priority:100,link:e}}}});q(bd,function(a,b){vb[b]=function(){return{priority:100,link:function(a,
c,e){if("ngPattern"===b&&"/"==e.ngPattern.charAt(0)&&(c=e.ngPattern.match(Bg))){e.$set("ngPattern",new RegExp(c[1],c[2]));return}a.$watch(e[b],function(a){e.$set(b,a)})}}}});q(["src","srcset","href"],function(a){var b=wa("ng-"+a);vb[b]=function(){return{priority:99,link:function(d,c,e){var f=a,g=a;"href"===a&&"[object SVGAnimatedString]"===ja.call(c.prop("href"))&&(g="xlinkHref",e.$attr[g]="xlink:href",f=null);e.$observe(b,function(b){b?(e.$set(g,b),Ba&&f&&c.prop(f,e[g])):"href"===a&&e.$set(g,null)})}}}});
var Mb={$addControl:C,$$renameControl:function(a,b){a.$name=b},$removeControl:C,$setValidity:C,$setDirty:C,$setPristine:C,$setSubmitted:C};Jd.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var Sd=function(a){return["$timeout","$parse",function(b,d){function c(a){return""===a?d('this[""]').assign:d(a).assign||C}return{name:"form",restrict:a?"EAC":"E",require:["form","^^?form"],controller:Jd,compile:function(d,f){d.addClass(Va).addClass(ob);var g=f.name?"name":a&&f.ngForm?"ngForm":
!1;return{pre:function(a,d,e,f){var n=f[0];if(!("action"in e)){var p=function(b){a.$apply(function(){n.$commitViewValue();n.$setSubmitted()});b.preventDefault()};d[0].addEventListener("submit",p,!1);d.on("$destroy",function(){b(function(){d[0].removeEventListener("submit",p,!1)},0,!1)})}(f[1]||n.$$parentForm).$addControl(n);var q=g?c(n.$name):C;g&&(q(a,n),e.$observe(g,function(b){n.$name!==b&&(q(a,void 0),n.$$parentForm.$$renameControl(n,b),q=c(n.$name),q(a,n))}));d.on("$destroy",function(){n.$$parentForm.$removeControl(n);
q(a,void 0);P(n,Mb)})}}}}}]},pe=Sd(),Ce=Sd(!0),Ag=/^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,Jg=/^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+\])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,Kg=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,Lg=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,Td=/^(\d{4,})-(\d{2})-(\d{2})$/,Ud=/^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
qc=/^(\d{4,})-W(\d\d)$/,Vd=/^(\d{4,})-(\d\d)$/,Wd=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Ld=S();q(["date","datetime-local","month","time","week"],function(a){Ld[a]=!0});var Xd={text:function(a,b,d,c,e,f){lb(a,b,d,c,e,f);oc(c)},date:mb("date",Td,Ob(Td,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":mb("datetimelocal",Ud,Ob(Ud,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:mb("time",Wd,Ob(Wd,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:mb("week",qc,function(a,b){if(ha(a))return a;
if(I(a)){qc.lastIndex=0;var d=qc.exec(a);if(d){var c=+d[1],e=+d[2],f=d=0,g=0,h=0,k=Hd(c),e=7*(e-1);b&&(d=b.getHours(),f=b.getMinutes(),g=b.getSeconds(),h=b.getMilliseconds());return new Date(c,0,k.getDate()+e,d,f,g,h)}}return NaN},"yyyy-Www"),month:mb("month",Vd,Ob(Vd,["yyyy","MM"]),"yyyy-MM"),number:function(a,b,d,c,e,f){Md(a,b,d,c);lb(a,b,d,c,e,f);c.$$parserName="number";c.$parsers.push(function(a){if(c.$isEmpty(a))return null;if(Lg.test(a))return parseFloat(a)});c.$formatters.push(function(a){if(!c.$isEmpty(a)){if(!Q(a))throw nb("numfmt",
a);a=a.toString()}return a});if(v(d.min)||d.ngMin){var g;c.$validators.min=function(a){return c.$isEmpty(a)||y(g)||a>=g};d.$observe("min",function(a){v(a)&&!Q(a)&&(a=parseFloat(a,10));g=Q(a)&&!isNaN(a)?a:void 0;c.$validate()})}if(v(d.max)||d.ngMax){var h;c.$validators.max=function(a){return c.$isEmpty(a)||y(h)||a<=h};d.$observe("max",function(a){v(a)&&!Q(a)&&(a=parseFloat(a,10));h=Q(a)&&!isNaN(a)?a:void 0;c.$validate()})}},url:function(a,b,d,c,e,f){lb(a,b,d,c,e,f);oc(c);c.$$parserName="url";c.$validators.url=
function(a,b){var d=a||b;return c.$isEmpty(d)||Jg.test(d)}},email:function(a,b,d,c,e,f){lb(a,b,d,c,e,f);oc(c);c.$$parserName="email";c.$validators.email=function(a,b){var d=a||b;return c.$isEmpty(d)||Kg.test(d)}},radio:function(a,b,d,c){y(d.name)&&b.attr("name",++pb);b.on("click",function(a){b[0].checked&&c.$setViewValue(d.value,a&&a.type)});c.$render=function(){b[0].checked=d.value==c.$viewValue};d.$observe("value",c.$render)},checkbox:function(a,b,d,c,e,f,g,h){var k=Nd(h,a,"ngTrueValue",d.ngTrueValue,
!0),l=Nd(h,a,"ngFalseValue",d.ngFalseValue,!1);b.on("click",function(a){c.$setViewValue(b[0].checked,a&&a.type)});c.$render=function(){b[0].checked=c.$viewValue};c.$isEmpty=function(a){return!1===a};c.$formatters.push(function(a){return na(a,k)});c.$parsers.push(function(a){return a?k:l})},hidden:C,button:C,submit:C,reset:C,file:C},Fc=["$browser","$sniffer","$filter","$parse",function(a,b,d,c){return{restrict:"E",require:["?ngModel"],link:{pre:function(e,f,g,h){h[0]&&(Xd[L(g.type)]||Xd.text)(e,f,
g,h[0],b,a,d,c)}}}}],Mg=/^(true|false|\d+)$/,Ue=function(){return{restrict:"A",priority:100,compile:function(a,b){return Mg.test(b.ngValue)?function(a,b,e){e.$set("value",a.$eval(e.ngValue))}:function(a,b,e){a.$watch(e.ngValue,function(a){e.$set("value",a)})}}}},ue=["$compile",function(a){return{restrict:"AC",compile:function(b){a.$$addBindingClass(b);return function(b,c,e){a.$$addBindingInfo(c,e.ngBind);c=c[0];b.$watch(e.ngBind,function(a){c.textContent=y(a)?"":a})}}}}],we=["$interpolate","$compile",
function(a,b){return{compile:function(d){b.$$addBindingClass(d);return function(c,d,f){c=a(d.attr(f.$attr.ngBindTemplate));b.$$addBindingInfo(d,c.expressions);d=d[0];f.$observe("ngBindTemplate",function(a){d.textContent=y(a)?"":a})}}}}],ve=["$sce","$parse","$compile",function(a,b,d){return{restrict:"A",compile:function(c,e){var f=b(e.ngBindHtml),g=b(e.ngBindHtml,function(b){return a.valueOf(b)});d.$$addBindingClass(c);return function(b,c,e){d.$$addBindingInfo(c,e.ngBindHtml);b.$watch(g,function(){var d=
f(b);c.html(a.getTrustedHtml(d)||"")})}}}}],Te=ca({restrict:"A",require:"ngModel",link:function(a,b,d,c){c.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),xe=pc("",!0),ze=pc("Odd",0),ye=pc("Even",1),Ae=Ma({compile:function(a,b){b.$set("ngCloak",void 0);a.removeClass("ng-cloak")}}),Be=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],Kc={},Ng={blur:!0,focus:!0};q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
function(a){var b=wa("ng-"+a);Kc[b]=["$parse","$rootScope",function(d,c){return{restrict:"A",compile:function(e,f){var g=d(f[b],null,!0);return function(b,d){d.on(a,function(d){var e=function(){g(b,{$event:d})};Ng[a]&&c.$$phase?b.$evalAsync(e):b.$apply(e)})}}}}]});var Ee=["$animate","$compile",function(a,b){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(d,c,e,f,g){var h,k,l;d.$watch(e.ngIf,function(d){d?k||g(function(d,f){k=f;d[d.length++]=
b.$$createComment("end ngIf",e.ngIf);h={clone:d};a.enter(d,c.parent(),c)}):(l&&(l.remove(),l=null),k&&(k.$destroy(),k=null),h&&(l=tb(h.clone),a.leave(l).then(function(){l=null}),h=null))})}}}],Fe=["$templateRequest","$anchorScroll","$animate",function(a,b,d){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:da.noop,compile:function(c,e){var f=e.ngInclude||e.src,g=e.onload||"",h=e.autoscroll;return function(c,e,m,n,p){var q=0,s,z,r,D=function(){z&&(z.remove(),z=null);s&&
(s.$destroy(),s=null);r&&(d.leave(r).then(function(){z=null}),z=r,r=null)};c.$watch(f,function(f){var m=function(){!v(h)||h&&!c.$eval(h)||b()},w=++q;f?(a(f,!0).then(function(a){if(!c.$$destroyed&&w===q){var b=c.$new();n.template=a;a=p(b,function(a){D();d.enter(a,null,e).then(m)});s=b;r=a;s.$emit("$includeContentLoaded",f);c.$eval(g)}},function(){c.$$destroyed||w!==q||(D(),c.$emit("$includeContentError",f))}),c.$emit("$includeContentRequested",f)):(D(),n.template=null)})}}}}],We=["$compile",function(a){return{restrict:"ECA",
priority:-400,require:"ngInclude",link:function(b,d,c,e){ja.call(d[0]).match(/SVG/)?(d.empty(),a(Nc(e.template,F.document).childNodes)(b,function(a){d.append(a)},{futureParentElement:d})):(d.html(e.template),a(d.contents())(b))}}}],Ge=Ma({priority:450,compile:function(){return{pre:function(a,b,d){a.$eval(d.ngInit)}}}}),Se=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,b,d,c){var e=b.attr(d.$attr.ngList)||", ",f="false"!==d.ngTrim,g=f?V(e):e;c.$parsers.push(function(a){if(!y(a)){var b=
[];a&&q(a.split(g),function(a){a&&b.push(f?V(a):a)});return b}});c.$formatters.push(function(a){if(K(a))return a.join(e)});c.$isEmpty=function(a){return!a||!a.length}}}},ob="ng-valid",Od="ng-invalid",Va="ng-pristine",Nb="ng-dirty",Qd="ng-pending",nb=O("ngModel"),Og=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,b,d,c,e,f,g,h,k,l){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=void 0;this.$validators={};
this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=void 0;this.$name=l(d.name||"",!1)(a);this.$$parentForm=Mb;var m=e(d.ngModel),n=m.assign,p=m,s=n,F=null,z,r=this;this.$$setOptions=function(a){if((r.$options=a)&&a.getterSetter){var b=e(d.ngModel+"()"),f=e(d.ngModel+"($$$p)");p=function(a){var c=m(a);E(c)&&(c=b(a));
return c};s=function(a,b){E(m(a))?f(a,{$$$p:b}):n(a,b)}}else if(!m.assign)throw nb("nonassign",d.ngModel,ua(c));};this.$render=C;this.$isEmpty=function(a){return y(a)||""===a||null===a||a!==a};this.$$updateEmptyClasses=function(a){r.$isEmpty(a)?(f.removeClass(c,"ng-not-empty"),f.addClass(c,"ng-empty")):(f.removeClass(c,"ng-empty"),f.addClass(c,"ng-not-empty"))};var D=0;Kd({ctrl:this,$element:c,set:function(a,b){a[b]=!0},unset:function(a,b){delete a[b]},$animate:f});this.$setPristine=function(){r.$dirty=
!1;r.$pristine=!0;f.removeClass(c,Nb);f.addClass(c,Va)};this.$setDirty=function(){r.$dirty=!0;r.$pristine=!1;f.removeClass(c,Va);f.addClass(c,Nb);r.$$parentForm.$setDirty()};this.$setUntouched=function(){r.$touched=!1;r.$untouched=!0;f.setClass(c,"ng-untouched","ng-touched")};this.$setTouched=function(){r.$touched=!0;r.$untouched=!1;f.setClass(c,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){g.cancel(F);r.$viewValue=r.$$lastCommittedViewValue;r.$render()};this.$validate=function(){if(!Q(r.$modelValue)||
!isNaN(r.$modelValue)){var a=r.$$rawModelValue,b=r.$valid,c=r.$modelValue,d=r.$options&&r.$options.allowInvalid;r.$$runValidators(a,r.$$lastCommittedViewValue,function(e){d||b===e||(r.$modelValue=e?a:void 0,r.$modelValue!==c&&r.$$writeModelToScope())})}};this.$$runValidators=function(a,b,c){function d(){var c=!0;q(r.$validators,function(d,e){var g=d(a,b);c=c&&g;f(e,g)});return c?!0:(q(r.$asyncValidators,function(a,b){f(b,null)}),!1)}function e(){var c=[],d=!0;q(r.$asyncValidators,function(e,g){var h=
e(a,b);if(!h||!E(h.then))throw nb("nopromise",h);f(g,void 0);c.push(h.then(function(){f(g,!0)},function(){d=!1;f(g,!1)}))});c.length?k.all(c).then(function(){g(d)},C):g(!0)}function f(a,b){h===D&&r.$setValidity(a,b)}function g(a){h===D&&c(a)}D++;var h=D;(function(){var a=r.$$parserName||"parse";if(y(z))f(a,null);else return z||(q(r.$validators,function(a,b){f(b,null)}),q(r.$asyncValidators,function(a,b){f(b,null)})),f(a,z),z;return!0})()?d()?e():g(!1):g(!1)};this.$commitViewValue=function(){var a=
r.$viewValue;g.cancel(F);if(r.$$lastCommittedViewValue!==a||""===a&&r.$$hasNativeValidators)r.$$updateEmptyClasses(a),r.$$lastCommittedViewValue=a,r.$pristine&&this.$setDirty(),this.$$parseAndValidate()};this.$$parseAndValidate=function(){var b=r.$$lastCommittedViewValue;if(z=y(b)?void 0:!0)for(var c=0;c<r.$parsers.length;c++)if(b=r.$parsers[c](b),y(b)){z=!1;break}Q(r.$modelValue)&&isNaN(r.$modelValue)&&(r.$modelValue=p(a));var d=r.$modelValue,e=r.$options&&r.$options.allowInvalid;r.$$rawModelValue=
b;e&&(r.$modelValue=b,r.$modelValue!==d&&r.$$writeModelToScope());r.$$runValidators(b,r.$$lastCommittedViewValue,function(a){e||(r.$modelValue=a?b:void 0,r.$modelValue!==d&&r.$$writeModelToScope())})};this.$$writeModelToScope=function(){s(a,r.$modelValue);q(r.$viewChangeListeners,function(a){try{a()}catch(c){b(c)}})};this.$setViewValue=function(a,b){r.$viewValue=a;r.$options&&!r.$options.updateOnDefault||r.$$debounceViewValueCommit(b)};this.$$debounceViewValueCommit=function(b){var c=0,d=r.$options;
d&&v(d.debounce)&&(d=d.debounce,Q(d)?c=d:Q(d[b])?c=d[b]:Q(d["default"])&&(c=d["default"]));g.cancel(F);c?F=g(function(){r.$commitViewValue()},c):h.$$phase?r.$commitViewValue():a.$apply(function(){r.$commitViewValue()})};a.$watch(function(){var b=p(a);if(b!==r.$modelValue&&(r.$modelValue===r.$modelValue||b===b)){r.$modelValue=r.$$rawModelValue=b;z=void 0;for(var c=r.$formatters,d=c.length,e=b;d--;)e=c[d](e);r.$viewValue!==e&&(r.$$updateEmptyClasses(e),r.$viewValue=r.$$lastCommittedViewValue=e,r.$render(),
r.$$runValidators(b,e,C))}return b})}],Re=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:Og,priority:1,compile:function(b){b.addClass(Va).addClass("ng-untouched").addClass(ob);return{pre:function(a,b,e,f){var g=f[0];b=f[1]||g.$$parentForm;g.$$setOptions(f[2]&&f[2].$options);b.$addControl(g);e.$observe("name",function(a){g.$name!==a&&g.$$parentForm.$$renameControl(g,a)});a.$on("$destroy",function(){g.$$parentForm.$removeControl(g)})},post:function(b,
c,e,f){var g=f[0];if(g.$options&&g.$options.updateOn)c.on(g.$options.updateOn,function(a){g.$$debounceViewValueCommit(a&&a.type)});c.on("blur",function(){g.$touched||(a.$$phase?b.$evalAsync(g.$setTouched):b.$apply(g.$setTouched))})}}}}}],Pg=/(\s+|^)default(\s+|$)/,Ve=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,b){var d=this;this.$options=oa(a.$eval(b.ngModelOptions));v(this.$options.updateOn)?(this.$options.updateOnDefault=!1,this.$options.updateOn=V(this.$options.updateOn.replace(Pg,
function(){d.$options.updateOnDefault=!0;return" "}))):this.$options.updateOnDefault=!0}]}},He=Ma({terminal:!0,priority:1E3}),Qg=O("ngOptions"),Rg=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,Pe=["$compile","$document","$parse",function(a,b,d){function c(a,b,c){function e(a,b,c,d,f){this.selectValue=a;this.viewValue=
b;this.label=c;this.group=d;this.disabled=f}function f(a){var b;if(!q&&xa(a))b=a;else{b=[];for(var c in a)a.hasOwnProperty(c)&&"$"!==c.charAt(0)&&b.push(c)}return b}var n=a.match(Rg);if(!n)throw Qg("iexp",a,ua(b));var p=n[5]||n[7],q=n[6];a=/ as /.test(n[0])&&n[1];var s=n[9];b=d(n[2]?n[1]:p);var z=a&&d(a)||b,r=s&&d(s),v=s?function(a,b){return r(c,b)}:function(a){return Ga(a)},u=function(a,b){return v(a,H(a,b))},t=d(n[2]||n[1]),w=d(n[3]||""),y=d(n[4]||""),B=d(n[8]),A={},H=q?function(a,b){A[q]=b;A[p]=
a;return A}:function(a){A[p]=a;return A};return{trackBy:s,getTrackByValue:u,getWatchables:d(B,function(a){var b=[];a=a||[];for(var d=f(a),e=d.length,g=0;g<e;g++){var h=a===d?g:d[g],l=a[h],h=H(l,h),l=v(l,h);b.push(l);if(n[2]||n[1])l=t(c,h),b.push(l);n[4]&&(h=y(c,h),b.push(h))}return b}),getOptions:function(){for(var a=[],b={},d=B(c)||[],g=f(d),h=g.length,n=0;n<h;n++){var p=d===g?n:g[n],q=H(d[p],p),r=z(c,q),p=v(r,q),x=t(c,q),A=w(c,q),q=y(c,q),r=new e(p,r,x,A,q);a.push(r);b[p]=r}return{items:a,selectValueMap:b,
getOptionFromViewValue:function(a){return b[u(a)]},getViewValueFromOption:function(a){return s?da.copy(a.viewValue):a.viewValue}}}}}var e=F.document.createElement("option"),f=F.document.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","ngModel"],link:{pre:function(a,b,c,d){d[0].registerOption=C},post:function(d,h,k,l){function m(a,b){a.element=b;b.disabled=a.disabled;a.label!==b.label&&(b.label=a.label,b.textContent=a.label);a.value!==b.value&&(b.value=a.selectValue)}function n(){var a=
w&&p.readValue();if(w)for(var b=w.items.length-1;0<=b;b--){var c=w.items[b];c.group?Db(c.element.parentNode):Db(c.element)}w=C.getOptions();var d={};u&&h.prepend(z);w.items.forEach(function(a){var b;if(v(a.group)){b=d[a.group];b||(b=f.cloneNode(!1),B.appendChild(b),b.label=a.group,d[a.group]=b);var c=e.cloneNode(!1)}else b=B,c=e.cloneNode(!1);b.appendChild(c);m(a,c)});h[0].appendChild(B);s.$render();s.$isEmpty(a)||(b=p.readValue(),(C.trackBy||y?na(a,b):a===b)||(s.$setViewValue(b),s.$render()))}var p=
l[0],s=l[1],y=k.multiple,z;l=0;for(var r=h.children(),D=r.length;l<D;l++)if(""===r[l].value){z=r.eq(l);break}var u=!!z,t=G(e.cloneNode(!1));t.val("?");var w,C=c(k.ngOptions,h,d),B=b[0].createDocumentFragment();y?(s.$isEmpty=function(a){return!a||0===a.length},p.writeValue=function(a){w.items.forEach(function(a){a.element.selected=!1});a&&a.forEach(function(a){if(a=w.getOptionFromViewValue(a))a.element.selected=!0})},p.readValue=function(){var a=h.val()||[],b=[];q(a,function(a){(a=w.selectValueMap[a])&&
!a.disabled&&b.push(w.getViewValueFromOption(a))});return b},C.trackBy&&d.$watchCollection(function(){if(K(s.$viewValue))return s.$viewValue.map(function(a){return C.getTrackByValue(a)})},function(){s.$render()})):(p.writeValue=function(a){var b=w.getOptionFromViewValue(a);b?(h[0].value!==b.selectValue&&(t.remove(),u||z.remove(),h[0].value=b.selectValue,b.element.selected=!0),b.element.setAttribute("selected","selected")):null===a||u?(t.remove(),u||h.prepend(z),h.val(""),z.prop("selected",!0),z.attr("selected",
!0)):(u||z.remove(),h.prepend(t),h.val("?"),t.prop("selected",!0),t.attr("selected",!0))},p.readValue=function(){var a=w.selectValueMap[h.val()];return a&&!a.disabled?(u||z.remove(),t.remove(),w.getViewValueFromOption(a)):null},C.trackBy&&d.$watch(function(){return C.getTrackByValue(s.$viewValue)},function(){s.$render()}));u?(z.remove(),a(z)(d),z.removeClass("ng-scope")):z=G(e.cloneNode(!1));h.empty();n();d.$watchCollection(C.getWatchables,n)}}}}],Ie=["$locale","$interpolate","$log",function(a,b,
d){var c=/{}/g,e=/^when(Minus)?(.+)$/;return{link:function(f,g,h){function k(a){g.text(a||"")}var l=h.count,m=h.$attr.when&&g.attr(h.$attr.when),n=h.offset||0,p=f.$eval(m)||{},s={},v=b.startSymbol(),z=b.endSymbol(),r=v+l+"-"+n+z,D=da.noop,u;q(h,function(a,b){var c=e.exec(b);c&&(c=(c[1]?"-":"")+L(c[2]),p[c]=g.attr(h.$attr[b]))});q(p,function(a,d){s[d]=b(a.replace(c,r))});f.$watch(l,function(b){var c=parseFloat(b),e=isNaN(c);e||c in p||(c=a.pluralCat(c-n));c===u||e&&Q(u)&&isNaN(u)||(D(),e=s[c],y(e)?
(null!=b&&d.debug("ngPluralize: no rule defined for '"+c+"' in "+m),D=C,k()):D=f.$watch(e,k),u=c)})}}}],Je=["$parse","$animate","$compile",function(a,b,d){var c=O("ngRepeat"),e=function(a,b,c,d,e,m,n){a[c]=d;e&&(a[e]=m);a.$index=b;a.$first=0===b;a.$last=b===n-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(b&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(f,g){var h=g.ngRepeat,k=d.$$createComment("end ngRepeat",h),l=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
if(!l)throw c("iexp",h);var m=l[1],n=l[2],p=l[3],s=l[4],l=m.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);if(!l)throw c("iidexp",m);var v=l[3]||l[1],z=l[2];if(p&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(p)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(p)))throw c("badident",p);var r,D,u,t,w={$id:Ga};s?r=a(s):(u=function(a,b){return Ga(b)},t=function(a){return a});return function(a,d,f,g,l){r&&(D=function(b,c,d){z&&(w[z]=b);w[v]=c;w.$index=
d;return r(a,w)});var m=S();a.$watchCollection(n,function(f){var g,n,r=d[0],s,x=S(),w,y,C,A,F,E,G;p&&(a[p]=f);if(xa(f))F=f,n=D||u;else for(G in n=D||t,F=[],f)sa.call(f,G)&&"$"!==G.charAt(0)&&F.push(G);w=F.length;G=Array(w);for(g=0;g<w;g++)if(y=f===F?g:F[g],C=f[y],A=n(y,C,g),m[A])E=m[A],delete m[A],x[A]=E,G[g]=E;else{if(x[A])throw q(G,function(a){a&&a.scope&&(m[a.id]=a)}),c("dupes",h,A,C);G[g]={id:A,scope:void 0,clone:void 0};x[A]=!0}for(s in m){E=m[s];A=tb(E.clone);b.leave(A);if(A[0].parentNode)for(g=
0,n=A.length;g<n;g++)A[g].$$NG_REMOVED=!0;E.scope.$destroy()}for(g=0;g<w;g++)if(y=f===F?g:F[g],C=f[y],E=G[g],E.scope){s=r;do s=s.nextSibling;while(s&&s.$$NG_REMOVED);E.clone[0]!=s&&b.move(tb(E.clone),null,r);r=E.clone[E.clone.length-1];e(E.scope,g,v,C,z,y,w)}else l(function(a,c){E.scope=c;var d=k.cloneNode(!1);a[a.length++]=d;b.enter(a,null,r);r=d;E.clone=a;x[E.id]=E;e(E.scope,g,v,C,z,y,w)});m=x})}}}}],Ke=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngShow,
function(b){a[b?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],De=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngHide,function(b){a[b?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Le=Ma(function(a,b,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&q(d,function(a,c){b.css(c,"")});a&&b.css(a)},!0)}),Me=["$animate","$compile",function(a,b){return{require:"ngSwitch",controller:["$scope",function(){this.cases=
{}}],link:function(d,c,e,f){var g=[],h=[],k=[],l=[],m=function(a,b){return function(){a.splice(b,1)}};d.$watch(e.ngSwitch||e.on,function(c){var d,e;d=0;for(e=k.length;d<e;++d)a.cancel(k[d]);d=k.length=0;for(e=l.length;d<e;++d){var s=tb(h[d].clone);l[d].$destroy();(k[d]=a.leave(s)).then(m(k,d))}h.length=0;l.length=0;(g=f.cases["!"+c]||f.cases["?"])&&q(g,function(c){c.transclude(function(d,e){l.push(e);var f=c.element;d[d.length++]=b.$$createComment("end ngSwitchWhen");h.push({clone:d});a.enter(d,f.parent(),
f)})})})}}}],Ne=Ma({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){c.cases["!"+d.ngSwitchWhen]=c.cases["!"+d.ngSwitchWhen]||[];c.cases["!"+d.ngSwitchWhen].push({transclude:e,element:b})}}),Oe=Ma({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){c.cases["?"]=c.cases["?"]||[];c.cases["?"].push({transclude:e,element:b})}}),Sg=O("ngTransclude"),Qe=Ma({restrict:"EAC",link:function(a,b,d,c,e){d.ngTransclude===
d.$attr.ngTransclude&&(d.ngTransclude="");if(!e)throw Sg("orphan",ua(b));e(function(a){a.length&&(b.empty(),b.append(a))},null,d.ngTransclude||d.ngTranscludeSlot)}}),qe=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(b,d){"text/ng-template"==d.type&&a.put(d.id,b[0].text)}}}],Tg={$setViewValue:C,$render:C},Ug=["$element","$scope",function(a,b){var d=this,c=new Sa;d.ngModelCtrl=Tg;d.unknownOption=G(F.document.createElement("option"));d.renderUnknownOption=function(b){b=
"? "+Ga(b)+" ?";d.unknownOption.val(b);a.prepend(d.unknownOption);a.val(b)};b.$on("$destroy",function(){d.renderUnknownOption=C});d.removeUnknownOption=function(){d.unknownOption.parent()&&d.unknownOption.remove()};d.readValue=function(){d.removeUnknownOption();return a.val()};d.writeValue=function(b){d.hasOption(b)?(d.removeUnknownOption(),a.val(b),""===b&&d.emptyOption.prop("selected",!0)):null==b&&d.emptyOption?(d.removeUnknownOption(),a.val("")):d.renderUnknownOption(b)};d.addOption=function(a,
b){if(8!==b[0].nodeType){Ra(a,'"option value"');""===a&&(d.emptyOption=b);var g=c.get(a)||0;c.put(a,g+1);d.ngModelCtrl.$render();b[0].hasAttribute("selected")&&(b[0].selected=!0)}};d.removeOption=function(a){var b=c.get(a);b&&(1===b?(c.remove(a),""===a&&(d.emptyOption=void 0)):c.put(a,b-1))};d.hasOption=function(a){return!!c.get(a)};d.registerOption=function(a,b,c,h,k){if(h){var l;c.$observe("value",function(a){v(l)&&d.removeOption(l);l=a;d.addOption(a,b)})}else k?a.$watch(k,function(a,e){c.$set("value",
a);e!==a&&d.removeOption(e);d.addOption(a,b)}):d.addOption(c.value,b);b.on("$destroy",function(){d.removeOption(c.value);d.ngModelCtrl.$render()})}}],re=function(){return{restrict:"E",require:["select","?ngModel"],controller:Ug,priority:1,link:{pre:function(a,b,d,c){var e=c[1];if(e){var f=c[0];f.ngModelCtrl=e;b.on("change",function(){a.$apply(function(){e.$setViewValue(f.readValue())})});if(d.multiple){f.readValue=function(){var a=[];q(b.find("option"),function(b){b.selected&&a.push(b.value)});return a};
f.writeValue=function(a){var c=new Sa(a);q(b.find("option"),function(a){a.selected=v(c.get(a.value))})};var g,h=NaN;a.$watch(function(){h!==e.$viewValue||na(g,e.$viewValue)||(g=fa(e.$viewValue),e.$render());h=e.$viewValue});e.$isEmpty=function(a){return!a||0===a.length}}}},post:function(a,b,d,c){var e=c[1];if(e){var f=c[0];e.$render=function(){f.writeValue(e.$viewValue)}}}}}},te=["$interpolate",function(a){return{restrict:"E",priority:100,compile:function(b,d){if(v(d.value))var c=a(d.value,!0);else{var e=
a(b.text(),!0);e||d.$set("value",b.text())}return function(a,b,d){var k=b.parent();(k=k.data("$selectController")||k.parent().data("$selectController"))&&k.registerOption(a,b,d,c,e)}}}}],se=ca({restrict:"E",terminal:!1}),Hc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){c&&(d.required=!0,c.$validators.required=function(a,b){return!d.required||!c.$isEmpty(b)},d.$observe("required",function(){c.$validate()}))}}},Gc=function(){return{restrict:"A",require:"?ngModel",link:function(a,
b,d,c){if(c){var e,f=d.ngPattern||d.pattern;d.$observe("pattern",function(a){I(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw O("ngPattern")("noregexp",f,a,ua(b));e=a||void 0;c.$validate()});c.$validators.pattern=function(a,b){return c.$isEmpty(b)||y(e)||e.test(b)}}}}},Jc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e=-1;d.$observe("maxlength",function(a){a=$(a);e=isNaN(a)?-1:a;c.$validate()});c.$validators.maxlength=function(a,b){return 0>e||c.$isEmpty(b)||
b.length<=e}}}}},Ic=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e=0;d.$observe("minlength",function(a){e=$(a)||0;c.$validate()});c.$validators.minlength=function(a,b){return c.$isEmpty(b)||b.length>=e}}}}};F.angular.bootstrap?F.console&&console.log("WARNING: Tried to load angular more than once."):(je(),le(da),da.module("ngLocale",[],["$provide",function(a){function b(a){a+="";var b=a.indexOf(".");return-1==b?0:a.length-b-1}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM",
"PM"],DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:"January February March April May June July August September October November December".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),STANDALONEMONTH:"January February March April May June July August September October November December".split(" "),WEEKENDRANGE:[5,
6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-\u00a4",negSuf:"",posPre:"\u00a4",posSuf:""}]},id:"en-us",localeID:"en_US",pluralCat:function(a,
c){var e=a|0,f=c;void 0===f&&(f=Math.min(b(a),3));Math.pow(10,f);return 1==e&&0==f?"one":"other"}})}]),G(F.document).ready(function(){fe(F.document,Ac)}))})(window);!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map

;(function () {
	'use strict';

	/**
	 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
	 *
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */

	/*jslint browser:true, node:true*/
	/*global define, Event, Node*/


	/**
	 * Instantiate fast-clicking listeners on the specified layer.
	 *
	 * @constructor
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	function FastClick(layer, options) {
		var oldOnClick;

		options = options || {};

		/**
		 * Whether a click is currently being tracked.
		 *
		 * @type boolean
		 */
		this.trackingClick = false;


		/**
		 * Timestamp for when click tracking started.
		 *
		 * @type number
		 */
		this.trackingClickStart = 0;


		/**
		 * The element being tracked for a click.
		 *
		 * @type EventTarget
		 */
		this.targetElement = null;


		/**
		 * X-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartX = 0;


		/**
		 * Y-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartY = 0;


		/**
		 * ID of the last touch, retrieved from Touch.identifier.
		 *
		 * @type number
		 */
		this.lastTouchIdentifier = 0;


		/**
		 * Touchmove boundary, beyond which a click will be cancelled.
		 *
		 * @type number
		 */
		this.touchBoundary = options.touchBoundary || 10;


		/**
		 * The FastClick layer.
		 *
		 * @type Element
		 */
		this.layer = layer;

		/**
		 * The minimum time between tap(touchstart and touchend) events
		 *
		 * @type number
		 */
		this.tapDelay = options.tapDelay || 200;

		/**
		 * The maximum time for a tap
		 *
		 * @type number
		 */
		this.tapTimeout = options.tapTimeout || 700;

		if (FastClick.notNeeded(layer)) {
			return;
		}

		// Some old versions of Android don't have Function.prototype.bind
		function bind(method, context) {
			return function() { return method.apply(context, arguments); };
		}


		var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
		var context = this;
		for (var i = 0, l = methods.length; i < l; i++) {
			context[methods[i]] = bind(context[methods[i]], context);
		}

		// Set up event handlers as required
		if (deviceIsAndroid) {
			layer.addEventListener('mouseover', this.onMouse, true);
			layer.addEventListener('mousedown', this.onMouse, true);
			layer.addEventListener('mouseup', this.onMouse, true);
		}

		layer.addEventListener('click', this.onClick, true);
		layer.addEventListener('touchstart', this.onTouchStart, false);
		layer.addEventListener('touchmove', this.onTouchMove, false);
		layer.addEventListener('touchend', this.onTouchEnd, false);
		layer.addEventListener('touchcancel', this.onTouchCancel, false);

		// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
		// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
		// layer when they are cancelled.
		if (!Event.prototype.stopImmediatePropagation) {
			layer.removeEventListener = function(type, callback, capture) {
				var rmv = Node.prototype.removeEventListener;
				if (type === 'click') {
					rmv.call(layer, type, callback.hijacked || callback, capture);
				} else {
					rmv.call(layer, type, callback, capture);
				}
			};

			layer.addEventListener = function(type, callback, capture) {
				var adv = Node.prototype.addEventListener;
				if (type === 'click') {
					adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
						if (!event.propagationStopped) {
							callback(event);
						}
					}), capture);
				} else {
					adv.call(layer, type, callback, capture);
				}
			};
		}

		// If a handler is already declared in the element's onclick attribute, it will be fired before
		// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
		// adding it as listener.
		if (typeof layer.onclick === 'function') {

			// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
			// - the old one won't work if passed to addEventListener directly.
			oldOnClick = layer.onclick;
			layer.addEventListener('click', function(event) {
				oldOnClick(event);
			}, false);
			layer.onclick = null;
		}
	}

	/**
	* Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
	*
	* @type boolean
	*/
	var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;

	/**
	 * Android requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;


	/**
	 * iOS requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;


	/**
	 * iOS 4 requires an exception for select elements.
	 *
	 * @type boolean
	 */
	var deviceIsIOS4 = deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);


	/**
	 * iOS 6.0-7.* requires the target element to be manually derived
	 *
	 * @type boolean
	 */
	var deviceIsIOSWithBadTarget = deviceIsIOS && (/OS [6-7]_\d/).test(navigator.userAgent);

	/**
	 * BlackBerry requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;

	/**
	 * Determine whether a given element requires a native click.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element needs a native click
	 */
	FastClick.prototype.needsClick = function(target) {
		switch (target.nodeName.toLowerCase()) {

		// Don't send a synthetic click to disabled inputs (issue #62)
		case 'button':
		case 'select':
		case 'textarea':
			if (target.disabled) {
				return true;
			}

			break;
		case 'input':

			// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
			if ((deviceIsIOS && target.type === 'file') || target.disabled) {
				return true;
			}

			break;
		case 'label':
		case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames
		case 'video':
			return true;
		}

		return (/\bneedsclick\b/).test(target.className);
	};


	/**
	 * Determine whether a given element requires a call to focus to simulate click into element.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
	 */
	FastClick.prototype.needsFocus = function(target) {
		switch (target.nodeName.toLowerCase()) {
		case 'textarea':
			return true;
		case 'select':
			return !deviceIsAndroid;
		case 'input':
			switch (target.type) {
			case 'button':
			case 'checkbox':
			case 'file':
			case 'image':
			case 'radio':
			case 'submit':
				return false;
			}

			// No point in attempting to focus disabled inputs
			return !target.disabled && !target.readOnly;
		default:
			return (/\bneedsfocus\b/).test(target.className);
		}
	};


	/**
	 * Send a click event to the specified element.
	 *
	 * @param {EventTarget|Element} targetElement
	 * @param {Event} event
	 */
	FastClick.prototype.sendClick = function(targetElement, event) {
		var clickEvent, touch;

		// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
		if (document.activeElement && document.activeElement !== targetElement) {
			document.activeElement.blur();
		}

		touch = event.changedTouches[0];

		// Synthesise a click event, with an extra attribute so it can be tracked
		clickEvent = document.createEvent('MouseEvents');
		clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
		clickEvent.forwardedTouchEvent = true;
		targetElement.dispatchEvent(clickEvent);
	};

	FastClick.prototype.determineEventType = function(targetElement) {

		//Issue #159: Android Chrome Select Box does not open with a synthetic click event
		if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
			return 'mousedown';
		}

		return 'click';
	};


	/**
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.focus = function(targetElement) {
		var length;

		// Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
		if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
			length = targetElement.value.length;
			targetElement.setSelectionRange(length, length);
		} else {
			targetElement.focus();
		}
	};


	/**
	 * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
	 *
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.updateScrollParent = function(targetElement) {
		var scrollParent, parentElement;

		scrollParent = targetElement.fastClickScrollParent;

		// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
		// target element was moved to another parent.
		if (!scrollParent || !scrollParent.contains(targetElement)) {
			parentElement = targetElement;
			do {
				if (parentElement.scrollHeight > parentElement.offsetHeight) {
					scrollParent = parentElement;
					targetElement.fastClickScrollParent = parentElement;
					break;
				}

				parentElement = parentElement.parentElement;
			} while (parentElement);
		}

		// Always update the scroll top tracker if possible.
		if (scrollParent) {
			scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
		}
	};


	/**
	 * @param {EventTarget} targetElement
	 * @returns {Element|EventTarget}
	 */
	FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {

		// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
		if (eventTarget.nodeType === Node.TEXT_NODE) {
			return eventTarget.parentNode;
		}

		return eventTarget;
	};


	/**
	 * On touch start, record the position and scroll offset.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchStart = function(event) {
		var targetElement, touch, selection;

		// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
		if (event.targetTouches.length > 1) {
			return true;
		}

		targetElement = this.getTargetElementFromEventTarget(event.target);
		touch = event.targetTouches[0];

		if (deviceIsIOS) {

			// Only trusted events will deselect text on iOS (issue #49)
			selection = window.getSelection();
			if (selection.rangeCount && !selection.isCollapsed) {
				return true;
			}

			if (!deviceIsIOS4) {

				// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
				// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
				// with the same identifier as the touch event that previously triggered the click that triggered the alert.
				// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
				// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
				// Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
				// which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
				// random integers, it's safe to to continue if the identifier is 0 here.
				if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
					event.preventDefault();
					return false;
				}

				this.lastTouchIdentifier = touch.identifier;

				// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
				// 1) the user does a fling scroll on the scrollable layer
				// 2) the user stops the fling scroll with another tap
				// then the event.target of the last 'touchend' event will be the element that was under the user's finger
				// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
				// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
				this.updateScrollParent(targetElement);
			}
		}

		this.trackingClick = true;
		this.trackingClickStart = event.timeStamp;
		this.targetElement = targetElement;

		this.touchStartX = touch.pageX;
		this.touchStartY = touch.pageY;

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			event.preventDefault();
		}

		return true;
	};


	/**
	 * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.touchHasMoved = function(event) {
		var touch = event.changedTouches[0], boundary = this.touchBoundary;

		if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
			return true;
		}

		return false;
	};


	/**
	 * Update the last position.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchMove = function(event) {
		if (!this.trackingClick) {
			return true;
		}

		// If the touch has moved, cancel the click tracking
		if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
			this.trackingClick = false;
			this.targetElement = null;
		}

		return true;
	};


	/**
	 * Attempt to find the labelled control for the given label element.
	 *
	 * @param {EventTarget|HTMLLabelElement} labelElement
	 * @returns {Element|null}
	 */
	FastClick.prototype.findControl = function(labelElement) {

		// Fast path for newer browsers supporting the HTML5 control attribute
		if (labelElement.control !== undefined) {
			return labelElement.control;
		}

		// All browsers under test that support touch events also support the HTML5 htmlFor attribute
		if (labelElement.htmlFor) {
			return document.getElementById(labelElement.htmlFor);
		}

		// If no for attribute exists, attempt to retrieve the first labellable descendant element
		// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
		return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
	};


	/**
	 * On touch end, determine whether to send a click event at once.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchEnd = function(event) {
		var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;

		if (!this.trackingClick) {
			return true;
		}

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			this.cancelNextClick = true;
			return true;
		}

		if ((event.timeStamp - this.trackingClickStart) > this.tapTimeout) {
			return true;
		}

		// Reset to prevent wrong click cancel on input (issue #156).
		this.cancelNextClick = false;

		this.lastClickTime = event.timeStamp;

		trackingClickStart = this.trackingClickStart;
		this.trackingClick = false;
		this.trackingClickStart = 0;

		// On some iOS devices, the targetElement supplied with the event is invalid if the layer
		// is performing a transition or scroll, and has to be re-detected manually. Note that
		// for this to function correctly, it must be called *after* the event target is checked!
		// See issue #57; also filed as rdar://13048589 .
		if (deviceIsIOSWithBadTarget) {
			touch = event.changedTouches[0];

			// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
			targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
			targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
		}

		targetTagName = targetElement.tagName.toLowerCase();
		if (targetTagName === 'label') {
			forElement = this.findControl(targetElement);
			if (forElement) {
				this.focus(targetElement);
				if (deviceIsAndroid) {
					return false;
				}

				targetElement = forElement;
			}
		} else if (this.needsFocus(targetElement)) {

			// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
			// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
			if ((event.timeStamp - trackingClickStart) > 100 || (deviceIsIOS && window.top !== window && targetTagName === 'input')) {
				this.targetElement = null;
				return false;
			}

			this.focus(targetElement);
			this.sendClick(targetElement, event);

			// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
			// Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
			if (!deviceIsIOS || targetTagName !== 'select') {
				this.targetElement = null;
				event.preventDefault();
			}

			return false;
		}

		if (deviceIsIOS && !deviceIsIOS4) {

			// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
			// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
			scrollParent = targetElement.fastClickScrollParent;
			if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
				return true;
			}
		}

		// Prevent the actual click from going though - unless the target node is marked as requiring
		// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
		if (!this.needsClick(targetElement)) {
			event.preventDefault();
			this.sendClick(targetElement, event);
		}

		return false;
	};


	/**
	 * On touch cancel, stop tracking the click.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.onTouchCancel = function() {
		this.trackingClick = false;
		this.targetElement = null;
	};


	/**
	 * Determine mouse events which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onMouse = function(event) {

		// If a target element was never set (because a touch event was never fired) allow the event
		if (!this.targetElement) {
			return true;
		}

		if (event.forwardedTouchEvent) {
			return true;
		}

		// Programmatically generated events targeting a specific element should be permitted
		if (!event.cancelable) {
			return true;
		}

		// Derive and check the target element to see whether the mouse event needs to be permitted;
		// unless explicitly enabled, prevent non-touch click events from triggering actions,
		// to prevent ghost/doubleclicks.
		if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

			// Prevent any user-added listeners declared on FastClick element from being fired.
			if (event.stopImmediatePropagation) {
				event.stopImmediatePropagation();
			} else {

				// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
				event.propagationStopped = true;
			}

			// Cancel the event
			event.stopPropagation();
			event.preventDefault();

			return false;
		}

		// If the mouse event is permitted, return true for the action to go through.
		return true;
	};


	/**
	 * On actual clicks, determine whether this is a touch-generated click, a click action occurring
	 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
	 * an actual click which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onClick = function(event) {
		var permitted;

		// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
		if (this.trackingClick) {
			this.targetElement = null;
			this.trackingClick = false;
			return true;
		}

		// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
		if (event.target.type === 'submit' && event.detail === 0) {
			return true;
		}

		permitted = this.onMouse(event);

		// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
		if (!permitted) {
			this.targetElement = null;
		}

		// If clicks are permitted, return true for the action to go through.
		return permitted;
	};


	/**
	 * Remove all FastClick's event listeners.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.destroy = function() {
		var layer = this.layer;

		if (deviceIsAndroid) {
			layer.removeEventListener('mouseover', this.onMouse, true);
			layer.removeEventListener('mousedown', this.onMouse, true);
			layer.removeEventListener('mouseup', this.onMouse, true);
		}

		layer.removeEventListener('click', this.onClick, true);
		layer.removeEventListener('touchstart', this.onTouchStart, false);
		layer.removeEventListener('touchmove', this.onTouchMove, false);
		layer.removeEventListener('touchend', this.onTouchEnd, false);
		layer.removeEventListener('touchcancel', this.onTouchCancel, false);
	};


	/**
	 * Check whether FastClick is needed.
	 *
	 * @param {Element} layer The layer to listen on
	 */
	FastClick.notNeeded = function(layer) {
		var metaViewport;
		var chromeVersion;
		var blackberryVersion;
		var firefoxVersion;

		// Devices that don't support touch don't need FastClick
		if (typeof window.ontouchstart === 'undefined') {
			return true;
		}

		// Chrome version - zero for other browsers
		chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (chromeVersion) {

			if (deviceIsAndroid) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// Chrome 32 and above with width=device-width or less don't need FastClick
					if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}

			// Chrome desktop doesn't need FastClick (issue #15)
			} else {
				return true;
			}
		}

		if (deviceIsBlackBerry10) {
			blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);

			// BlackBerry 10.3+ does not require Fastclick library.
			// https://github.com/ftlabs/fastclick/issues/251
			if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// user-scalable=no eliminates click delay.
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// width=device-width (or less than device-width) eliminates click delay.
					if (document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}
			}
		}

		// IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)
		if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		// Firefox version - zero for other browsers
		firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (firefoxVersion >= 27) {
			// Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896

			metaViewport = document.querySelector('meta[name=viewport]');
			if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
				return true;
			}
		}

		// IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
		// http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
		if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		return false;
	};


	/**
	 * Factory method for creating a FastClick object
	 *
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	FastClick.attach = function(layer, options) {
		return new FastClick(layer, options);
	};


	if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {

		// AMD. Register as an anonymous module.
		define(function() {
			return FastClick;
		});
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = FastClick.attach;
		module.exports.FastClick = FastClick;
	} else {
		window.FastClick = FastClick;
	}
}());

/*
 AngularJS v1.5.6
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(S,B){'use strict';function Aa(a,b,c){if(!a)throw Ma("areq",b||"?",c||"required");return a}function Ba(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;ca(a)&&(a=a.join(" "));ca(b)&&(b=b.join(" "));return a+" "+b}function Na(a){var b={};a&&(a.to||a.from)&&(b.to=a.to,b.from=a.from);return b}function Y(a,b,c){var d="";a=ca(a)?a:a&&P(a)&&a.length?a.split(/\s+/):[];s(a,function(a,l){a&&0<a.length&&(d+=0<l?" ":"",d+=c?b+a:a+b)});return d}function Oa(a){if(a instanceof E)switch(a.length){case 0:return a;
case 1:if(1===a[0].nodeType)return a;break;default:return E(da(a))}if(1===a.nodeType)return E(a)}function da(a){if(!a[0])return a;for(var b=0;b<a.length;b++){var c=a[b];if(1==c.nodeType)return c}}function Pa(a,b,c){s(b,function(b){a.addClass(b,c)})}function Qa(a,b,c){s(b,function(b){a.removeClass(b,c)})}function V(a){return function(b,c){c.addClass&&(Pa(a,b,c.addClass),c.addClass=null);c.removeClass&&(Qa(a,b,c.removeClass),c.removeClass=null)}}function pa(a){a=a||{};if(!a.$$prepared){var b=a.domOperation||
R;a.domOperation=function(){a.$$domOperationFired=!0;b();b=R};a.$$prepared=!0}return a}function ha(a,b){Ca(a,b);Da(a,b)}function Ca(a,b){b.from&&(a.css(b.from),b.from=null)}function Da(a,b){b.to&&(a.css(b.to),b.to=null)}function W(a,b,c){var d=b.options||{};c=c.options||{};var e=(d.addClass||"")+" "+(c.addClass||""),l=(d.removeClass||"")+" "+(c.removeClass||"");a=Ra(a.attr("class"),e,l);c.preparationClasses&&(d.preparationClasses=Z(c.preparationClasses,d.preparationClasses),delete c.preparationClasses);
e=d.domOperation!==R?d.domOperation:null;Ea(d,c);e&&(d.domOperation=e);d.addClass=a.addClass?a.addClass:null;d.removeClass=a.removeClass?a.removeClass:null;b.addClass=d.addClass;b.removeClass=d.removeClass;return d}function Ra(a,b,c){function d(a){P(a)&&(a=a.split(" "));var b={};s(a,function(a){a.length&&(b[a]=!0)});return b}var e={};a=d(a);b=d(b);s(b,function(a,b){e[b]=1});c=d(c);s(c,function(a,b){e[b]=1===e[b]?null:-1});var l={addClass:"",removeClass:""};s(e,function(b,c){var d,e;1===b?(d="addClass",
e=!a[c]):-1===b&&(d="removeClass",e=a[c]);e&&(l[d].length&&(l[d]+=" "),l[d]+=c)});return l}function z(a){return a instanceof B.element?a[0]:a}function Sa(a,b,c){var d="";b&&(d=Y(b,"ng-",!0));c.addClass&&(d=Z(d,Y(c.addClass,"-add")));c.removeClass&&(d=Z(d,Y(c.removeClass,"-remove")));d.length&&(c.preparationClasses=d,a.addClass(d))}function qa(a,b){var c=b?"-"+b+"s":"";la(a,[ma,c]);return[ma,c]}function ta(a,b){var c=b?"paused":"",d=$+"PlayState";la(a,[d,c]);return[d,c]}function la(a,b){a.style[b[0]]=
b[1]}function Z(a,b){return a?b?a+" "+b:a:b}function Fa(a,b,c){var d=Object.create(null),e=a.getComputedStyle(b)||{};s(c,function(a,b){var c=e[a];if(c){var k=c.charAt(0);if("-"===k||"+"===k||0<=k)c=Ta(c);0===c&&(c=null);d[b]=c}});return d}function Ta(a){var b=0;a=a.split(/\s*,\s*/);s(a,function(a){"s"==a.charAt(a.length-1)&&(a=a.substring(0,a.length-1));a=parseFloat(a)||0;b=b?Math.max(a,b):a});return b}function ua(a){return 0===a||null!=a}function Ga(a,b){var c=T,d=a+"s";b?c+="Duration":d+=" linear all";
return[c,d]}function Ha(){var a=Object.create(null);return{flush:function(){a=Object.create(null)},count:function(b){return(b=a[b])?b.total:0},get:function(b){return(b=a[b])&&b.value},put:function(b,c){a[b]?a[b].total++:a[b]={total:1,value:c}}}}function Ia(a,b,c){s(c,function(c){a[c]=ea(a[c])?a[c]:b.style.getPropertyValue(c)})}var R=B.noop,Ja=B.copy,Ea=B.extend,E=B.element,s=B.forEach,ca=B.isArray,P=B.isString,va=B.isObject,O=B.isUndefined,ea=B.isDefined,Ka=B.isFunction,wa=B.isElement,T,xa,$,ya;O(S.ontransitionend)&&
ea(S.onwebkittransitionend)?(T="WebkitTransition",xa="webkitTransitionEnd transitionend"):(T="transition",xa="transitionend");O(S.onanimationend)&&ea(S.onwebkitanimationend)?($="WebkitAnimation",ya="webkitAnimationEnd animationend"):($="animation",ya="animationend");var ra=$+"Delay",za=$+"Duration",ma=T+"Delay",La=T+"Duration",Ma=B.$$minErr("ng"),Ua={transitionDuration:La,transitionDelay:ma,transitionProperty:T+"Property",animationDuration:za,animationDelay:ra,animationIterationCount:$+"IterationCount"},
Va={transitionDuration:La,transitionDelay:ma,animationDuration:za,animationDelay:ra};B.module("ngAnimate",[]).directive("ngAnimateSwap",["$animate","$rootScope",function(a,b){return{restrict:"A",transclude:"element",terminal:!0,priority:600,link:function(b,d,e,l,m){var I,k;b.$watchCollection(e.ngAnimateSwap||e["for"],function(e){I&&a.leave(I);k&&(k.$destroy(),k=null);if(e||0===e)k=b.$new(),m(k,function(b){I=b;a.enter(b,null,d)})})}}}]).directive("ngAnimateChildren",["$interpolate",function(a){return{link:function(b,
c,d){function e(a){c.data("$$ngAnimateChildren","on"===a||"true"===a)}var l=d.ngAnimateChildren;B.isString(l)&&0===l.length?c.data("$$ngAnimateChildren",!0):(e(a(l)(b)),d.$observe("ngAnimateChildren",e))}}}]).factory("$$rAFScheduler",["$$rAF",function(a){function b(a){d=d.concat(a);c()}function c(){if(d.length){for(var b=d.shift(),m=0;m<b.length;m++)b[m]();e||a(function(){e||c()})}}var d,e;d=b.queue=[];b.waitUntilQuiet=function(b){e&&e();e=a(function(){e=null;b();c()})};return b}]).provider("$$animateQueue",
["$animateProvider",function(a){function b(a){if(!a)return null;a=a.split(" ");var b=Object.create(null);s(a,function(a){b[a]=!0});return b}function c(a,c){if(a&&c){var d=b(c);return a.split(" ").some(function(a){return d[a]})}}function d(a,b,c,d){return l[a].some(function(a){return a(b,c,d)})}function e(a,b){var c=0<(a.addClass||"").length,d=0<(a.removeClass||"").length;return b?c&&d:c||d}var l=this.rules={skip:[],cancel:[],join:[]};l.join.push(function(a,b,c){return!b.structural&&e(b)});l.skip.push(function(a,
b,c){return!b.structural&&!e(b)});l.skip.push(function(a,b,c){return"leave"==c.event&&b.structural});l.skip.push(function(a,b,c){return c.structural&&2===c.state&&!b.structural});l.cancel.push(function(a,b,c){return c.structural&&b.structural});l.cancel.push(function(a,b,c){return 2===c.state&&b.structural});l.cancel.push(function(a,b,d){if(d.structural)return!1;a=b.addClass;b=b.removeClass;var e=d.addClass;d=d.removeClass;return O(a)&&O(b)||O(e)&&O(d)?!1:c(a,d)||c(b,e)});this.$get=["$$rAF","$rootScope",
"$rootElement","$document","$$HashMap","$$animation","$$AnimateRunner","$templateRequest","$$jqLite","$$forceReflow",function(b,c,k,l,w,Wa,Q,u,F,n){function K(){var a=!1;return function(b){a?b():c.$$postDigest(function(){a=!0;b()})}}function J(a,b,c){var f=z(b),d=z(a),L=[];(a=h[c])&&s(a,function(a){y.call(a.node,f)?L.push(a.callback):"leave"===c&&y.call(a.node,d)&&L.push(a.callback)});return L}function r(a,b,c){var f=da(b);return a.filter(function(a){return!(a.node===f&&(!c||a.callback===c))})}function t(a,
h,x){function r(c,f,d,h){H(function(){var c=J(oa,a,f);c.length?b(function(){s(c,function(b){b(a,d,h)});"close"!==d||a[0].parentNode||sa.off(a)}):"close"!==d||a[0].parentNode||sa.off(a)});c.progress(f,d,h)}function g(b){var c=a,f=p;f.preparationClasses&&(c.removeClass(f.preparationClasses),f.preparationClasses=null);f.activeClasses&&(c.removeClass(f.activeClasses),f.activeClasses=null);D(a,p);ha(a,p);p.domOperation();n.complete(!b)}var p=Ja(x),t,oa;if(a=Oa(a))t=z(a),oa=a.parent();var p=pa(p),n=new Q,
H=K();ca(p.addClass)&&(p.addClass=p.addClass.join(" "));p.addClass&&!P(p.addClass)&&(p.addClass=null);ca(p.removeClass)&&(p.removeClass=p.removeClass.join(" "));p.removeClass&&!P(p.removeClass)&&(p.removeClass=null);p.from&&!va(p.from)&&(p.from=null);p.to&&!va(p.to)&&(p.to=null);if(!t)return g(),n;x=[t.className,p.addClass,p.removeClass].join(" ");if(!Xa(x))return g(),n;var k=0<=["enter","move","leave"].indexOf(h),y=l[0].hidden,u=!f||y||L.get(t);x=!u&&A.get(t)||{};var F=!!x.state;u||F&&1==x.state||
(u=!N(a,oa,h));if(u)return y&&r(n,h,"start"),g(),y&&r(n,h,"close"),n;k&&M(a);y={structural:k,element:a,event:h,addClass:p.addClass,removeClass:p.removeClass,close:g,options:p,runner:n};if(F){if(d("skip",a,y,x)){if(2===x.state)return g(),n;W(a,x,y);return x.runner}if(d("cancel",a,y,x))if(2===x.state)x.runner.end();else if(x.structural)x.close();else return W(a,x,y),x.runner;else if(d("join",a,y,x))if(2===x.state)W(a,y,{});else return Sa(a,k?h:null,p),h=y.event=x.event,p=W(a,x,y),x.runner}else W(a,
y,{});(F=y.structural)||(F="animate"===y.event&&0<Object.keys(y.options.to||{}).length||e(y));if(!F)return g(),ka(a),n;var w=(x.counter||0)+1;y.counter=w;G(a,1,y);c.$$postDigest(function(){var b=A.get(t),c=!b,b=b||{},f=0<(a.parent()||[]).length&&("animate"===b.event||b.structural||e(b));if(c||b.counter!==w||!f){c&&(D(a,p),ha(a,p));if(c||k&&b.event!==h)p.domOperation(),n.end();f||ka(a)}else h=!b.structural&&e(b,!0)?"setClass":b.event,G(a,2),b=Wa(a,h,b.options),n.setHost(b),r(n,h,"start",{}),b.done(function(b){g(!b);
(b=A.get(t))&&b.counter===w&&ka(z(a));r(n,h,"close",{})})});return n}function M(a){a=z(a).querySelectorAll("[data-ng-animate]");s(a,function(a){var b=parseInt(a.getAttribute("data-ng-animate")),c=A.get(a);if(c)switch(b){case 2:c.runner.end();case 1:A.remove(a)}})}function ka(a){a=z(a);a.removeAttribute("data-ng-animate");A.remove(a)}function g(a,b){return z(a)===z(b)}function N(a,b,c){c=E(l[0].body);var f=g(a,c)||"HTML"===a[0].nodeName,d=g(a,k),h=!1,r,e=L.get(z(a));(a=E.data(a[0],"$ngAnimatePin"))&&
(b=a);for(b=z(b);b;){d||(d=g(b,k));if(1!==b.nodeType)break;a=A.get(b)||{};if(!h){var n=L.get(b);if(!0===n&&!1!==e){e=!0;break}else!1===n&&(e=!1);h=a.structural}if(O(r)||!0===r)a=E.data(b,"$$ngAnimateChildren"),ea(a)&&(r=a);if(h&&!1===r)break;f||(f=g(b,c));if(f&&d)break;if(!d&&(a=E.data(b,"$ngAnimatePin"))){b=z(a);continue}b=b.parentNode}return(!h||r)&&!0!==e&&d&&f}function G(a,b,c){c=c||{};c.state=b;a=z(a);a.setAttribute("data-ng-animate",b);c=(b=A.get(a))?Ea(b,c):c;A.put(a,c)}var A=new w,L=new w,
f=null,oa=c.$watch(function(){return 0===u.totalPendingRequests},function(a){a&&(oa(),c.$$postDigest(function(){c.$$postDigest(function(){null===f&&(f=!0)})}))}),h={},H=a.classNameFilter(),Xa=H?function(a){return H.test(a)}:function(){return!0},D=V(F),y=S.Node.prototype.contains||function(a){return this===a||!!(this.compareDocumentPosition(a)&16)},sa={on:function(a,b,c){var f=da(b);h[a]=h[a]||[];h[a].push({node:f,callback:c});E(b).on("$destroy",function(){A.get(f)||sa.off(a,b,c)})},off:function(a,
b,c){if(1!==arguments.length||B.isString(arguments[0])){var f=h[a];f&&(h[a]=1===arguments.length?null:r(f,b,c))}else for(f in b=arguments[0],h)h[f]=r(h[f],b)},pin:function(a,b){Aa(wa(a),"element","not an element");Aa(wa(b),"parentElement","not an element");a.data("$ngAnimatePin",b)},push:function(a,b,c,f){c=c||{};c.domOperation=f;return t(a,b,c)},enabled:function(a,b){var c=arguments.length;if(0===c)b=!!f;else if(wa(a)){var d=z(a),h=L.get(d);1===c?b=!h:L.put(d,!b)}else b=f=!!a;return b}};return sa}]}]).provider("$$animation",
["$animateProvider",function(a){var b=this.drivers=[];this.$get=["$$jqLite","$rootScope","$injector","$$AnimateRunner","$$HashMap","$$rAFScheduler",function(a,d,e,l,m,I){function k(a){function b(a){if(a.processed)return a;a.processed=!0;var d=a.domNode,t=d.parentNode;e.put(d,a);for(var M;t;){if(M=e.get(t)){M.processed||(M=b(M));break}t=t.parentNode}(M||c).children.push(a);return a}var c={children:[]},d,e=new m;for(d=0;d<a.length;d++){var k=a[d];e.put(k.domNode,a[d]={domNode:k.domNode,fn:k.fn,children:[]})}for(d=
0;d<a.length;d++)b(a[d]);return function(a){var b=[],c=[],d;for(d=0;d<a.children.length;d++)c.push(a.children[d]);a=c.length;var e=0,g=[];for(d=0;d<c.length;d++){var n=c[d];0>=a&&(a=e,e=0,b.push(g),g=[]);g.push(n.fn);n.children.forEach(function(a){e++;c.push(a)});a--}g.length&&b.push(g);return b}(c)}var v=[],w=V(a);return function(m,Q,u){function F(a){a=a.hasAttribute("ng-animate-ref")?[a]:a.querySelectorAll("[ng-animate-ref]");var b=[];s(a,function(a){var c=a.getAttribute("ng-animate-ref");c&&c.length&&
b.push(a)});return b}function n(a){var b=[],c={};s(a,function(a,d){var h=z(a.element),e=0<=["enter","move"].indexOf(a.event),h=a.structural?F(h):[];if(h.length){var g=e?"to":"from";s(h,function(a){var b=a.getAttribute("ng-animate-ref");c[b]=c[b]||{};c[b][g]={animationID:d,element:E(a)}})}else b.push(a)});var d={},e={};s(c,function(c,g){var r=c.from,n=c.to;if(r&&n){var A=a[r.animationID],t=a[n.animationID],m=r.animationID.toString();if(!e[m]){var k=e[m]={structural:!0,beforeStart:function(){A.beforeStart();
t.beforeStart()},close:function(){A.close();t.close()},classes:K(A.classes,t.classes),from:A,to:t,anchors:[]};k.classes.length?b.push(k):(b.push(A),b.push(t))}e[m].anchors.push({out:r.element,"in":n.element})}else r=r?r.animationID:n.animationID,n=r.toString(),d[n]||(d[n]=!0,b.push(a[r]))});return b}function K(a,b){a=a.split(" ");b=b.split(" ");for(var c=[],d=0;d<a.length;d++){var e=a[d];if("ng-"!==e.substring(0,3))for(var r=0;r<b.length;r++)if(e===b[r]){c.push(e);break}}return c.join(" ")}function J(a){for(var c=
b.length-1;0<=c;c--){var d=b[c];if(e.has(d)&&(d=e.get(d)(a)))return d}}function r(a,b){function c(a){(a=a.data("$$animationRunner"))&&a.setHost(b)}a.from&&a.to?(c(a.from.element),c(a.to.element)):c(a.element)}function t(){var a=m.data("$$animationRunner");!a||"leave"===Q&&u.$$domOperationFired||a.end()}function M(b){m.off("$destroy",t);m.removeData("$$animationRunner");w(m,u);ha(m,u);u.domOperation();G&&a.removeClass(m,G);m.removeClass("ng-animate");g.complete(!b)}u=pa(u);var ka=0<=["enter","move",
"leave"].indexOf(Q),g=new l({end:function(){M()},cancel:function(){M(!0)}});if(!b.length)return M(),g;m.data("$$animationRunner",g);var N=Ba(m.attr("class"),Ba(u.addClass,u.removeClass)),G=u.tempClasses;G&&(N+=" "+G,u.tempClasses=null);var A;ka&&(A="ng-"+Q+"-prepare",a.addClass(m,A));v.push({element:m,classes:N,event:Q,structural:ka,options:u,beforeStart:function(){m.addClass("ng-animate");G&&a.addClass(m,G);A&&(a.removeClass(m,A),A=null)},close:M});m.on("$destroy",t);if(1<v.length)return g;d.$$postDigest(function(){var a=
[];s(v,function(b){b.element.data("$$animationRunner")?a.push(b):b.close()});v.length=0;var b=n(a),c=[];s(b,function(a){c.push({domNode:z(a.from?a.from.element:a.element),fn:function(){a.beforeStart();var b,c=a.close;if((a.anchors?a.from.element||a.to.element:a.element).data("$$animationRunner")){var d=J(a);d&&(b=d.start)}b?(b=b(),b.done(function(a){c(!a)}),r(a,b)):c()}})});I(k(c))});return g}}]}]).provider("$animateCss",["$animateProvider",function(a){var b=Ha(),c=Ha();this.$get=["$window","$$jqLite",
"$$AnimateRunner","$timeout","$$forceReflow","$sniffer","$$rAFScheduler","$$animateQueue",function(a,e,l,m,I,k,v,w){function B(a,b){var c=a.parentNode;return(c.$$ngAnimateParentKey||(c.$$ngAnimateParentKey=++K))+"-"+a.getAttribute("class")+"-"+b}function Q(r,n,m,k){var g;0<b.count(m)&&(g=c.get(m),g||(n=Y(n,"-stagger"),e.addClass(r,n),g=Fa(a,r,k),g.animationDuration=Math.max(g.animationDuration,0),g.transitionDuration=Math.max(g.transitionDuration,0),e.removeClass(r,n),c.put(m,g)));return g||{}}function u(a){J.push(a);
v.waitUntilQuiet(function(){b.flush();c.flush();for(var a=I(),d=0;d<J.length;d++)J[d](a);J.length=0})}function F(c,e,n){e=b.get(n);e||(e=Fa(a,c,Ua),"infinite"===e.animationIterationCount&&(e.animationIterationCount=1));b.put(n,e);c=e;n=c.animationDelay;e=c.transitionDelay;c.maxDelay=n&&e?Math.max(n,e):n||e;c.maxDuration=Math.max(c.animationDuration*c.animationIterationCount,c.transitionDuration);return c}var n=V(e),K=0,J=[];return function(a,c){function d(){g()}function v(){g(!0)}function g(b){if(!(y||
E&&K)){y=!0;K=!1;f.$$skipPreparationClasses||e.removeClass(a,ga);e.removeClass(a,ea);ta(h,!1);qa(h,!1);s(H,function(a){h.style[a[0]]=""});n(a,f);ha(a,f);Object.keys(J).length&&s(J,function(a,b){a?h.style.setProperty(b,a):h.style.removeProperty(b)});if(f.onDone)f.onDone();fa&&fa.length&&a.off(fa.join(" "),A);var c=a.data("$$animateCss");c&&(m.cancel(c[0].timer),a.removeData("$$animateCss"));O&&O.complete(!b)}}function N(a){q.blockTransition&&qa(h,a);q.blockKeyframeAnimation&&ta(h,!!a)}function G(){O=
new l({end:d,cancel:v});u(R);g();return{$$willAnimate:!1,start:function(){return O},end:d}}function A(a){a.stopPropagation();var b=a.originalEvent||a;a=b.$manualTimeStamp||Date.now();b=parseFloat(b.elapsedTime.toFixed(3));Math.max(a-W,0)>=S&&b>=p&&(E=!0,g())}function L(){function b(){if(!y){N(!1);s(H,function(a){h.style[a[0]]=a[1]});n(a,f);e.addClass(a,ea);if(q.recalculateTimingStyles){na=h.className+" "+ga;ia=B(h,na);C=F(h,na,ia);aa=C.maxDelay;P=Math.max(aa,0);p=C.maxDuration;if(0===p){g();return}q.hasTransitions=
0<C.transitionDuration;q.hasAnimations=0<C.animationDuration}q.applyAnimationDelay&&(aa="boolean"!==typeof f.delay&&ua(f.delay)?parseFloat(f.delay):aa,P=Math.max(aa,0),C.animationDelay=aa,ba=[ra,aa+"s"],H.push(ba),h.style[ba[0]]=ba[1]);S=1E3*P;V=1E3*p;if(f.easing){var d,k=f.easing;q.hasTransitions&&(d=T+"TimingFunction",H.push([d,k]),h.style[d]=k);q.hasAnimations&&(d=$+"TimingFunction",H.push([d,k]),h.style[d]=k)}C.transitionDuration&&fa.push(xa);C.animationDuration&&fa.push(ya);W=Date.now();var L=
S+1.5*V;d=W+L;var k=a.data("$$animateCss")||[],l=!0;if(k.length){var G=k[0];(l=d>G.expectedEndTime)?m.cancel(G.timer):k.push(g)}l&&(L=m(c,L,!1),k[0]={timer:L,expectedEndTime:d},k.push(g),a.data("$$animateCss",k));if(fa.length)a.on(fa.join(" "),A);f.to&&(f.cleanupStyles&&Ia(J,h,Object.keys(f.to)),Da(a,f))}}function c(){var b=a.data("$$animateCss");if(b){for(var d=1;d<b.length;d++)b[d]();a.removeData("$$animateCss")}}if(!y)if(h.parentNode){var d=function(a){if(E)K&&a&&(K=!1,g());else if(K=!a,C.animationDuration)if(a=
ta(h,K),K)H.push(a);else{var b=H,c=b.indexOf(a);0<=a&&b.splice(c,1)}},k=0<da&&(C.transitionDuration&&0===X.transitionDuration||C.animationDuration&&0===X.animationDuration)&&Math.max(X.animationDelay,X.transitionDelay);k?m(b,Math.floor(k*da*1E3),!1):b();x.resume=function(){d(!0)};x.pause=function(){d(!1)}}else g()}var f=c||{};f.$$prepared||(f=pa(Ja(f)));var J={},h=z(a);if(!h||!h.parentNode||!w.enabled())return G();var H=[],I=a.attr("class"),D=Na(f),y,K,E,O,x,P,S,p,V,W,fa=[];if(0===f.duration||!k.animations&&
!k.transitions)return G();var ja=f.event&&ca(f.event)?f.event.join(" "):f.event,Z="",U="";ja&&f.structural?Z=Y(ja,"ng-",!0):ja&&(Z=ja);f.addClass&&(U+=Y(f.addClass,"-add"));f.removeClass&&(U.length&&(U+=" "),U+=Y(f.removeClass,"-remove"));f.applyClassesEarly&&U.length&&n(a,f);var ga=[Z,U].join(" ").trim(),na=I+" "+ga,ea=Y(ga,"-active"),I=D.to&&0<Object.keys(D.to).length;if(!(0<(f.keyframeStyle||"").length||I||ga))return G();var ia,X;0<f.stagger?(D=parseFloat(f.stagger),X={transitionDelay:D,animationDelay:D,
transitionDuration:0,animationDuration:0}):(ia=B(h,na),X=Q(h,ga,ia,Va));f.$$skipPreparationClasses||e.addClass(a,ga);f.transitionStyle&&(D=[T,f.transitionStyle],la(h,D),H.push(D));0<=f.duration&&(D=0<h.style[T].length,D=Ga(f.duration,D),la(h,D),H.push(D));f.keyframeStyle&&(D=[$,f.keyframeStyle],la(h,D),H.push(D));var da=X?0<=f.staggerIndex?f.staggerIndex:b.count(ia):0;(ja=0===da)&&!f.skipBlocking&&qa(h,9999);var C=F(h,na,ia),aa=C.maxDelay;P=Math.max(aa,0);p=C.maxDuration;var q={};q.hasTransitions=
0<C.transitionDuration;q.hasAnimations=0<C.animationDuration;q.hasTransitionAll=q.hasTransitions&&"all"==C.transitionProperty;q.applyTransitionDuration=I&&(q.hasTransitions&&!q.hasTransitionAll||q.hasAnimations&&!q.hasTransitions);q.applyAnimationDuration=f.duration&&q.hasAnimations;q.applyTransitionDelay=ua(f.delay)&&(q.applyTransitionDuration||q.hasTransitions);q.applyAnimationDelay=ua(f.delay)&&q.hasAnimations;q.recalculateTimingStyles=0<U.length;if(q.applyTransitionDuration||q.applyAnimationDuration)p=
f.duration?parseFloat(f.duration):p,q.applyTransitionDuration&&(q.hasTransitions=!0,C.transitionDuration=p,D=0<h.style[T+"Property"].length,H.push(Ga(p,D))),q.applyAnimationDuration&&(q.hasAnimations=!0,C.animationDuration=p,H.push([za,p+"s"]));if(0===p&&!q.recalculateTimingStyles)return G();if(null!=f.delay){var ba;"boolean"!==typeof f.delay&&(ba=parseFloat(f.delay),P=Math.max(ba,0));q.applyTransitionDelay&&H.push([ma,ba+"s"]);q.applyAnimationDelay&&H.push([ra,ba+"s"])}null==f.duration&&0<C.transitionDuration&&
(q.recalculateTimingStyles=q.recalculateTimingStyles||ja);S=1E3*P;V=1E3*p;f.skipBlocking||(q.blockTransition=0<C.transitionDuration,q.blockKeyframeAnimation=0<C.animationDuration&&0<X.animationDelay&&0===X.animationDuration);f.from&&(f.cleanupStyles&&Ia(J,h,Object.keys(f.from)),Ca(a,f));q.blockTransition||q.blockKeyframeAnimation?N(p):f.skipBlocking||qa(h,!1);return{$$willAnimate:!0,end:d,start:function(){if(!y)return x={end:d,cancel:v,resume:null,pause:null},O=new l(x),u(L),O}}}}]}]).provider("$$animateCssDriver",
["$$animationProvider",function(a){a.drivers.push("$$animateCssDriver");this.$get=["$animateCss","$rootScope","$$AnimateRunner","$rootElement","$sniffer","$$jqLite","$document",function(a,c,d,e,l,m,I){function k(a){return a.replace(/\bng-\S+\b/g,"")}function v(a,b){P(a)&&(a=a.split(" "));P(b)&&(b=b.split(" "));return a.filter(function(a){return-1===b.indexOf(a)}).join(" ")}function w(c,e,m){function l(a){var b={},c=z(a).getBoundingClientRect();s(["width","height","top","left"],function(a){var d=c[a];
switch(a){case "top":d+=u.scrollTop;break;case "left":d+=u.scrollLeft}b[a]=Math.floor(d)+"px"});return b}function t(){var c=k(m.attr("class")||""),d=v(c,g),c=v(g,c),d=a(w,{to:l(m),addClass:"ng-anchor-in "+d,removeClass:"ng-anchor-out "+c,delay:!0});return d.$$willAnimate?d:null}function I(){w.remove();e.removeClass("ng-animate-shim");m.removeClass("ng-animate-shim")}var w=E(z(e).cloneNode(!0)),g=k(w.attr("class")||"");e.addClass("ng-animate-shim");m.addClass("ng-animate-shim");w.addClass("ng-anchor");
F.append(w);var N;c=function(){var c=a(w,{addClass:"ng-anchor-out",delay:!0,from:l(e)});return c.$$willAnimate?c:null}();if(!c&&(N=t(),!N))return I();var G=c||N;return{start:function(){function a(){c&&c.end()}var b,c=G.start();c.done(function(){c=null;if(!N&&(N=t()))return c=N.start(),c.done(function(){c=null;I();b.complete()}),c;I();b.complete()});return b=new d({end:a,cancel:a})}}}function B(a,b,c,e){var k=Q(a,R),m=Q(b,R),l=[];s(e,function(a){(a=w(c,a.out,a["in"]))&&l.push(a)});if(k||m||0!==l.length)return{start:function(){function a(){s(b,
function(a){a.end()})}var b=[];k&&b.push(k.start());m&&b.push(m.start());s(l,function(a){b.push(a.start())});var c=new d({end:a,cancel:a});d.all(b,function(a){c.complete(a)});return c}}}function Q(c){var d=c.element,e=c.options||{};c.structural&&(e.event=c.event,e.structural=!0,e.applyClassesEarly=!0,"leave"===c.event&&(e.onDone=e.domOperation));e.preparationClasses&&(e.event=Z(e.event,e.preparationClasses));c=a(d,e);return c.$$willAnimate?c:null}if(!l.animations&&!l.transitions)return R;var u=I[0].body;
c=z(e);var F=E(c.parentNode&&11===c.parentNode.nodeType||u.contains(c)?c:u);V(m);return function(a){return a.from&&a.to?B(a.from,a.to,a.classes,a.anchors):Q(a)}}]}]).provider("$$animateJs",["$animateProvider",function(a){this.$get=["$injector","$$AnimateRunner","$$jqLite",function(b,c,d){function e(c){c=ca(c)?c:c.split(" ");for(var d=[],e={},l=0;l<c.length;l++){var w=c[l],s=a.$$registeredAnimations[w];s&&!e[w]&&(d.push(b.get(s)),e[w]=!0)}return d}var l=V(d);return function(a,b,d,v){function w(){v.domOperation();
l(a,v)}function B(a,b,d,e,f){switch(d){case "animate":b=[b,e.from,e.to,f];break;case "setClass":b=[b,n,K,f];break;case "addClass":b=[b,n,f];break;case "removeClass":b=[b,K,f];break;default:b=[b,f]}b.push(e);if(a=a.apply(a,b))if(Ka(a.start)&&(a=a.start()),a instanceof c)a.done(f);else if(Ka(a))return a;return R}function z(a,b,d,e,f){var g=[];s(e,function(e){var k=e[f];k&&g.push(function(){var e,f,h=!1,g=function(a){h||(h=!0,(f||R)(a),e.complete(!a))};e=new c({end:function(){g()},cancel:function(){g(!0)}});
f=B(k,a,b,d,function(a){g(!1===a)});return e})});return g}function u(a,b,d,e,f){var g=z(a,b,d,e,f);if(0===g.length){var h,k;"beforeSetClass"===f?(h=z(a,"removeClass",d,e,"beforeRemoveClass"),k=z(a,"addClass",d,e,"beforeAddClass")):"setClass"===f&&(h=z(a,"removeClass",d,e,"removeClass"),k=z(a,"addClass",d,e,"addClass"));h&&(g=g.concat(h));k&&(g=g.concat(k))}if(0!==g.length)return function(a){var b=[];g.length&&s(g,function(a){b.push(a())});b.length?c.all(b,a):a();return function(a){s(b,function(b){a?
b.cancel():b.end()})}}}var F=!1;3===arguments.length&&va(d)&&(v=d,d=null);v=pa(v);d||(d=a.attr("class")||"",v.addClass&&(d+=" "+v.addClass),v.removeClass&&(d+=" "+v.removeClass));var n=v.addClass,K=v.removeClass,J=e(d),r,t;if(J.length){var M,E;"leave"==b?(E="leave",M="afterLeave"):(E="before"+b.charAt(0).toUpperCase()+b.substr(1),M=b);"enter"!==b&&"move"!==b&&(r=u(a,b,v,J,E));t=u(a,b,v,J,M)}if(r||t){var g;return{$$willAnimate:!0,end:function(){g?g.end():(F=!0,w(),ha(a,v),g=new c,g.complete(!0));return g},
start:function(){function b(c){F=!0;w();ha(a,v);g.complete(c)}if(g)return g;g=new c;var d,e=[];r&&e.push(function(a){d=r(a)});e.length?e.push(function(a){w();a(!0)}):w();t&&e.push(function(a){d=t(a)});g.setHost({end:function(){F||((d||R)(void 0),b(void 0))},cancel:function(){F||((d||R)(!0),b(!0))}});c.chain(e,b);return g}}}}}]}]).provider("$$animateJsDriver",["$$animationProvider",function(a){a.drivers.push("$$animateJsDriver");this.$get=["$$animateJs","$$AnimateRunner",function(a,c){function d(c){return a(c.element,
c.event,c.classes,c.options)}return function(a){if(a.from&&a.to){var b=d(a.from),m=d(a.to);if(b||m)return{start:function(){function a(){return function(){s(d,function(a){a.end()})}}var d=[];b&&d.push(b.start());m&&d.push(m.start());c.all(d,function(a){e.complete(a)});var e=new c({end:a(),cancel:a()});return e}}}else return d(a)}}]}])})(window,window.angular);
//# sourceMappingURL=angular-animate.min.js.map

/*
 AngularJS v1.5.6
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(t,p){'use strict';var b="BUTTON A INPUT TEXTAREA SELECT DETAILS SUMMARY".split(" "),l=function(a,c){if(-1!==c.indexOf(a[0].nodeName))return!0};p.module("ngAria",["ng"]).provider("$aria",function(){function a(a,b,m,h){return function(d,f,e){var q=e.$normalize(b);!c[q]||l(f,m)||e[q]||d.$watch(e[a],function(a){a=h?!a:!!a;f.attr(b,a)})}}var c={ariaHidden:!0,ariaChecked:!0,ariaReadonly:!0,ariaDisabled:!0,ariaRequired:!0,ariaInvalid:!0,ariaValue:!0,tabindex:!0,bindKeypress:!0,bindRoleForClick:!0};
this.config=function(a){c=p.extend(c,a)};this.$get=function(){return{config:function(a){return c[a]},$$watchExpr:a}}}).directive("ngShow",["$aria",function(a){return a.$$watchExpr("ngShow","aria-hidden",[],!0)}]).directive("ngHide",["$aria",function(a){return a.$$watchExpr("ngHide","aria-hidden",[],!1)}]).directive("ngValue",["$aria",function(a){return a.$$watchExpr("ngValue","aria-checked",b,!1)}]).directive("ngChecked",["$aria",function(a){return a.$$watchExpr("ngChecked","aria-checked",b,!1)}]).directive("ngReadonly",
["$aria",function(a){return a.$$watchExpr("ngReadonly","aria-readonly",b,!1)}]).directive("ngRequired",["$aria",function(a){return a.$$watchExpr("ngRequired","aria-required",b,!1)}]).directive("ngModel",["$aria",function(a){function c(c,h,d,f){return a.config(h)&&!d.attr(c)&&(f||!l(d,b))}function g(a,c){return!c.attr("role")&&c.attr("type")===a&&"INPUT"!==c[0].nodeName}function k(a,c){var d=a.type,f=a.role;return"checkbox"===(d||f)||"menuitemcheckbox"===f?"checkbox":"radio"===(d||f)||"menuitemradio"===
f?"radio":"range"===d||"progressbar"===f||"slider"===f?"range":""}return{restrict:"A",require:"ngModel",priority:200,compile:function(b,h){var d=k(h,b);return{pre:function(a,e,c,b){"checkbox"===d&&(b.$isEmpty=function(a){return!1===a})},post:function(f,e,b,n){function h(){return n.$modelValue}function k(a){e.attr("aria-checked",b.value==n.$viewValue)}function l(){e.attr("aria-checked",!n.$isEmpty(n.$viewValue))}var m=c("tabindex","tabindex",e,!1);switch(d){case "radio":case "checkbox":g(d,e)&&e.attr("role",
d);c("aria-checked","ariaChecked",e,!1)&&f.$watch(h,"radio"===d?k:l);m&&e.attr("tabindex",0);break;case "range":g(d,e)&&e.attr("role","slider");if(a.config("ariaValue")){var p=!e.attr("aria-valuemin")&&(b.hasOwnProperty("min")||b.hasOwnProperty("ngMin")),r=!e.attr("aria-valuemax")&&(b.hasOwnProperty("max")||b.hasOwnProperty("ngMax")),s=!e.attr("aria-valuenow");p&&b.$observe("min",function(a){e.attr("aria-valuemin",a)});r&&b.$observe("max",function(a){e.attr("aria-valuemax",a)});s&&f.$watch(h,function(a){e.attr("aria-valuenow",
a)})}m&&e.attr("tabindex",0)}!b.hasOwnProperty("ngRequired")&&n.$validators.required&&c("aria-required","ariaRequired",e,!1)&&b.$observe("required",function(){e.attr("aria-required",!!b.required)});c("aria-invalid","ariaInvalid",e,!0)&&f.$watch(function(){return n.$invalid},function(a){e.attr("aria-invalid",!!a)})}}}}}]).directive("ngDisabled",["$aria",function(a){return a.$$watchExpr("ngDisabled","aria-disabled",b,!1)}]).directive("ngMessages",function(){return{restrict:"A",require:"?ngMessages",
link:function(a,b,g,k){b.attr("aria-live")||b.attr("aria-live","assertive")}}}).directive("ngClick",["$aria","$parse",function(a,c){return{restrict:"A",compile:function(g,k){var m=c(k.ngClick,null,!0);return function(c,d,f){if(!l(d,b)&&(a.config("bindRoleForClick")&&!d.attr("role")&&d.attr("role","button"),a.config("tabindex")&&!d.attr("tabindex")&&d.attr("tabindex",0),a.config("bindKeypress")&&!f.ngKeypress))d.on("keypress",function(a){function b(){m(c,{$event:a})}var d=a.which||a.keyCode;32!==d&&
13!==d||c.$apply(b)})}}}}]).directive("ngDblclick",["$aria",function(a){return function(c,g,k){!a.config("tabindex")||g.attr("tabindex")||l(g,b)||g.attr("tabindex",0)}}])})(window,window.angular);
//# sourceMappingURL=angular-aria.min.js.map

/*
 AngularJS v1.5.6
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(A,d){'use strict';function p(){return["$animate",function(w){return{restrict:"AE",transclude:"element",priority:1,terminal:!0,require:"^^ngMessages",link:function(n,l,a,c,m){var k=l[0],f,q=a.ngMessage||a.when;a=a.ngMessageExp||a.whenExp;var d=function(a){f=a?x(a)?a:a.split(/[\s,]+/):null;c.reRender()};a?(d(n.$eval(a)),n.$watchCollection(a,d)):d(q);var e,r;c.register(k,r={test:function(a){var g=f;a=g?x(g)?0<=g.indexOf(a):g.hasOwnProperty(a):void 0;return a},attach:function(){e||m(n,function(a){w.enter(a,
null,l);e=a;var g=e.$$attachId=c.getAttachId();e.on("$destroy",function(){e&&e.$$attachId===g&&(c.deregister(k),r.detach())})})},detach:function(){if(e){var a=e;e=null;w.leave(a)}}})}}}]}var x=d.isArray,t=d.forEach,y=d.isString,z=d.element;d.module("ngMessages",[]).directive("ngMessages",["$animate",function(d){function n(a,c){return y(c)&&0===c.length||l(a.$eval(c))}function l(a){return y(a)?a.length:!!a}return{require:"ngMessages",restrict:"AE",controller:["$element","$scope","$attrs",function(a,
c,m){function k(a,c){for(var b=c,f=[];b&&b!==a;){var h=b.$$ngMessageNode;if(h&&h.length)return e[h];b.childNodes.length&&-1==f.indexOf(b)?(f.push(b),b=b.childNodes[b.childNodes.length-1]):b.previousSibling?b=b.previousSibling:(b=b.parentNode,f.push(b))}}var f=this,q=0,p=0;this.getAttachId=function(){return p++};var e=this.messages={},r,s;this.render=function(g){g=g||{};r=!1;s=g;for(var e=n(c,m.ngMessagesMultiple)||n(c,m.multiple),b=[],q={},h=f.head,k=!1,p=0;null!=h;){p++;var u=h.message,v=!1;k||t(g,
function(a,b){!v&&l(a)&&u.test(b)&&!q[b]&&(v=q[b]=!0,u.attach())});v?k=!e:b.push(u);h=h.next}t(b,function(a){a.detach()});b.length!==p?d.setClass(a,"ng-active","ng-inactive"):d.setClass(a,"ng-inactive","ng-active")};c.$watchCollection(m.ngMessages||m["for"],f.render);a.on("$destroy",function(){t(e,function(a){a.message.detach()})});this.reRender=function(){r||(r=!0,c.$evalAsync(function(){r&&s&&f.render(s)}))};this.register=function(g,c){var b=q.toString();e[b]={message:c};var d=a[0],h=e[b];f.head?
(d=k(d,g))?(h.next=d.next,d.next=h):(h.next=f.head,f.head=h):f.head=h;g.$$ngMessageNode=b;q++;f.reRender()};this.deregister=function(c){var d=c.$$ngMessageNode;delete c.$$ngMessageNode;var b=e[d];(c=k(a[0],c))?c.next=b.next:f.head=b.next;delete e[d];f.reRender()}}]}}]).directive("ngMessagesInclude",["$templateRequest","$document","$compile",function(d,n,l){return{restrict:"AE",require:"^^ngMessages",link:function(a,c,m){var k=m.ngMessagesInclude||m.src;d(k).then(function(d){a.$$destroyed||l(d)(a,
function(a){c.after(a);a=l.$$createComment?l.$$createComment("ngMessagesInclude",k):n[0].createComment(" ngMessagesInclude: "+k+" ");a=z(a);c.after(a);c.remove()})})}}}]).directive("ngMessage",p()).directive("ngMessageExp",p())})(window,window.angular);
//# sourceMappingURL=angular-messages.min.js.map

/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.0.9
 */
!function(e,t,n){"use strict";!function(){t.module("ngMaterial",["ng","ngAnimate","ngAria","material.core","material.core.gestures","material.core.layout","material.core.theming.palette","material.core.theming","material.core.animate","material.components.autocomplete","material.components.backdrop","material.components.bottomSheet","material.components.button","material.components.card","material.components.checkbox","material.components.chips","material.components.content","material.components.datepicker","material.components.dialog","material.components.divider","material.components.fabActions","material.components.fabShared","material.components.fabSpeedDial","material.components.fabToolbar","material.components.fabTrigger","material.components.gridList","material.components.icon","material.components.input","material.components.list","material.components.menu","material.components.menuBar","material.components.panel","material.components.progressCircular","material.components.progressLinear","material.components.radioButton","material.components.select","material.components.showHide","material.components.sidenav","material.components.slider","material.components.sticky","material.components.subheader","material.components.swipe","material.components.switch","material.components.toast","material.components.tabs","material.components.toolbar","material.components.tooltip","material.components.virtualRepeat","material.components.whiteframe"])}(),function(){function e(e,t){if(t.has("$swipe")){var n="You are using the ngTouch module. \nAngular Material already has mobile click, tap, and swipe support... \nngTouch is not supported with Angular Material!";e.warn(n)}}function n(e,t){e.decorator("$$rAF",["$delegate",o]),t.theme("default").primaryPalette("indigo").accentPalette("pink").warnPalette("deep-orange").backgroundPalette("grey")}function o(e){return e.throttle=function(t){var n,o,i,r;return function(){n=arguments,r=this,i=t,o||(o=!0,e(function(){i.apply(r,Array.prototype.slice.call(n)),o=!1}))}},e}t.module("material.core",["ngAnimate","material.core.animate","material.core.layout","material.core.gestures","material.core.theming"]).config(n).run(e),e.$inject=["$log","$injector"],n.$inject=["$provide","$mdThemingProvider"],o.$inject=["$delegate"]}(),function(){function e(){return{restrict:"A",link:n}}function n(e,t,n){var o=n.mdAutoFocus||n.mdAutofocus||n.mdSidenavFocus;e.$watch(o,function(e){t.toggleClass("md-autofocus",e)})}t.module("material.core").directive("mdAutofocus",e).directive("mdAutoFocus",e).directive("mdSidenavFocus",e)}(),function(){function e(e){function t(e){return n?"webkit"+e.charAt(0).toUpperCase()+e.substring(1):e}var n=/webkit/i.test(e.vendorPrefix);return{KEY_CODE:{COMMA:188,SEMICOLON:186,ENTER:13,ESCAPE:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT_ARROW:37,UP_ARROW:38,RIGHT_ARROW:39,DOWN_ARROW:40,TAB:9,BACKSPACE:8,DELETE:46},CSS:{TRANSITIONEND:"transitionend"+(n?" webkitTransitionEnd":""),ANIMATIONEND:"animationend"+(n?" webkitAnimationEnd":""),TRANSFORM:t("transform"),TRANSFORM_ORIGIN:t("transformOrigin"),TRANSITION:t("transition"),TRANSITION_DURATION:t("transitionDuration"),ANIMATION_PLAY_STATE:t("animationPlayState"),ANIMATION_DURATION:t("animationDuration"),ANIMATION_NAME:t("animationName"),ANIMATION_TIMING:t("animationTimingFunction"),ANIMATION_DIRECTION:t("animationDirection")},MEDIA:{xs:"(max-width: 599px)","gt-xs":"(min-width: 600px)",sm:"(min-width: 600px) and (max-width: 959px)","gt-sm":"(min-width: 960px)",md:"(min-width: 960px) and (max-width: 1279px)","gt-md":"(min-width: 1280px)",lg:"(min-width: 1280px) and (max-width: 1919px)","gt-lg":"(min-width: 1920px)",xl:"(min-width: 1920px)",print:"print"},MEDIA_PRIORITY:["xl","gt-lg","lg","gt-md","md","gt-sm","sm","gt-xs","xs","print"]}}t.module("material.core").factory("$mdConstant",e),e.$inject=["$sniffer"]}(),function(){function e(e,n){function o(){return[].concat(E)}function i(){return E.length}function r(e){return E.length&&e>-1&&e<E.length}function a(e){return e?r(u(e)+1):!1}function d(e){return e?r(u(e)-1):!1}function s(e){return r(e)?E[e]:null}function c(e,t){return E.filter(function(n){return n[e]===t})}function l(e,n){return e?(t.isNumber(n)||(n=E.length),E.splice(n,0,e),u(e)):-1}function m(e){h(e)&&E.splice(u(e),1)}function u(e){return E.indexOf(e)}function h(e){return e&&u(e)>-1}function p(){return E.length?E[0]:null}function f(){return E.length?E[E.length-1]:null}function g(e,o,i,a){i=i||b;for(var d=u(o);;){if(!r(d))return null;var s=d+(e?-1:1),c=null;if(r(s)?c=E[s]:n&&(c=e?f():p(),s=u(c)),null===c||s===a)return null;if(i(c))return c;t.isUndefined(a)&&(a=s),d=s}}var b=function(){return!0};e&&!t.isArray(e)&&(e=Array.prototype.slice.call(e)),n=!!n;var E=e||[];return{items:o,count:i,inRange:r,contains:h,indexOf:u,itemAt:s,findBy:c,add:l,remove:m,first:p,last:f,next:t.bind(null,g,!1),previous:t.bind(null,g,!0),hasPrevious:d,hasNext:a}}t.module("material.core").config(["$provide",function(t){t.decorator("$mdUtil",["$delegate",function(t){return t.iterator=e,t}])}])}(),function(){function e(e,n,o){function i(e){var n=u[e];t.isUndefined(n)&&(n=u[e]=r(e));var o=p[n];return t.isUndefined(o)&&(o=a(n)),o}function r(t){return e.MEDIA[t]||("("!==t.charAt(0)?"("+t+")":t)}function a(e){var t=h[e];return t||(t=h[e]=o.matchMedia(e)),t.addListener(d),p[t.media]=!!t.matches}function d(e){n.$evalAsync(function(){p[e.media]=!!e.matches})}function s(e){return h[e]}function c(t,n){for(var o=0;o<e.MEDIA_PRIORITY.length;o++){var i=e.MEDIA_PRIORITY[o];if(h[u[i]].matches){var r=m(t,n+"-"+i);if(t[r])return t[r]}}return t[m(t,n)]}function l(n,o,i){var r=[];return n.forEach(function(n){var a=m(o,n);t.isDefined(o[a])&&r.push(o.$observe(a,t.bind(void 0,i,null)));for(var d in e.MEDIA)a=m(o,n+"-"+d),t.isDefined(o[a])&&r.push(o.$observe(a,t.bind(void 0,i,d)))}),function(){r.forEach(function(e){e()})}}function m(e,t){return f[t]||(f[t]=e.$normalize(t))}var u={},h={},p={},f={};return i.getResponsiveAttribute=c,i.getQuery=s,i.watchResponsiveAttributes=l,i}t.module("material.core").factory("$mdMedia",e),e.$inject=["$mdConstant","$rootScope","$window"]}(),function(){function o(o,r,a,d,s,c,l,m,u){function h(e){return e[0]||e}var p=c.startSymbol(),f=c.endSymbol(),g="{{"===p&&"}}"===f,b=function(e,n,o){var i=!1;if(e&&e.length){var r=u.getComputedStyle(e[0]);i=t.isDefined(r[n])&&(o?r[n]==o:!0)}return i},E={dom:{},now:e.performance?t.bind(e.performance,e.performance.now):Date.now||function(){return(new Date).getTime()},clientRect:function(e,t,n){var o=h(e);t=h(t||o.offsetParent||document.body);var i=o.getBoundingClientRect(),r=n?t.getBoundingClientRect():{left:0,top:0,width:0,height:0};return{left:i.left-r.left,top:i.top-r.top,width:i.width,height:i.height}},offsetRect:function(e,t){return E.clientRect(e,t,!0)},nodesToArray:function(e){e=e||[];for(var t=[],n=0;n<e.length;++n)t.push(e.item(n));return t},scrollTop:function(e){e=t.element(e||o[0].body);var i=e[0]==o[0].body?o[0].body:n,r=i?i.scrollTop+i.parentElement.scrollTop:0;return r||Math.abs(e[0].getBoundingClientRect().top)},findFocusTarget:function(e,n){function o(e,n){var o,i=e[0].querySelectorAll(n);return i&&i.length&&i.length&&t.forEach(i,function(e){e=t.element(e);var n=e.hasClass("md-autofocus");n&&(o=e)}),o}var i,r="[md-autofocus]";return i=o(e,n||r),i||n==r||(i=o(e,"[md-auto-focus]"),i||(i=o(e,r))),i},disableScrollAround:function(e,n){function i(e){function n(e){e.preventDefault()}e=t.element(e||d)[0];var o=50,i=t.element('<div class="md-scroll-mask">  <div class="md-scroll-mask-bar"></div></div>').css("z-index",o);return e.appendChild(i[0]),i.on("wheel",n),i.on("touchmove",n),function(){i.off("wheel"),i.off("touchmove"),i[0].parentNode.removeChild(i[0]),delete E.disableScrollAround._enableScrolling}}function r(){var e=d.parentNode,t=e.style.cssText||"",n=d.style.cssText||"",o=E.scrollTop(d),i=d.clientWidth;return d.scrollHeight>d.clientHeight+1&&(a(d,{position:"fixed",width:"100%",top:-o+"px"}),a(e,{overflowY:"scroll"})),d.clientWidth<i&&a(d,{overflow:"hidden"}),function(){d.style.cssText=n,e.style.cssText=t,d.scrollTop=o,e.scrollTop=o}}function a(e,t){for(var n in t)e.style[n]=t[n]}if(E.disableScrollAround._count=E.disableScrollAround._count||0,++E.disableScrollAround._count,E.disableScrollAround._enableScrolling)return E.disableScrollAround._enableScrolling;var d=o[0].body,s=r(),c=i(n);return E.disableScrollAround._enableScrolling=function(){--E.disableScrollAround._count||(s(),c(),delete E.disableScrollAround._enableScrolling)}},enableScrolling:function(){var e=this.disableScrollAround._enableScrolling;e&&e()},floatingScrollbars:function(){if(this.floatingScrollbars.cached===n){var e=t.element("<div><div></div></div>").css({width:"100%","z-index":-1,position:"absolute",height:"35px","overflow-y":"scroll"});e.children().css("height","60px"),o[0].body.appendChild(e[0]),this.floatingScrollbars.cached=e[0].offsetWidth==e[0].childNodes[0].offsetWidth,e.remove()}return this.floatingScrollbars.cached},forceFocus:function(t){var n=t[0]||t;document.addEventListener("click",function i(e){e.target===n&&e.$focus&&(n.focus(),e.stopImmediatePropagation(),e.preventDefault(),n.removeEventListener("click",i))},!0);var o=document.createEvent("MouseEvents");o.initMouseEvent("click",!1,!0,e,{},0,0,0,0,!1,!1,!1,!1,0,null),o.$material=!0,o.$focus=!0,n.dispatchEvent(o)},createBackdrop:function(e,t){return a(E.supplant('<md-backdrop class="{0}">',[t]))(e)},supplant:function(e,t,n){return n=n||/\{([^\{\}]*)\}/g,e.replace(n,function(e,n){var o=n.split("."),i=t;try{for(var r in o)o.hasOwnProperty(r)&&(i=i[o[r]])}catch(a){i=e}return"string"==typeof i||"number"==typeof i?i:e})},fakeNgModel:function(){return{$fake:!0,$setTouched:t.noop,$setViewValue:function(e){this.$viewValue=e,this.$render(e),this.$viewChangeListeners.forEach(function(e){e()})},$isEmpty:function(e){return 0===(""+e).length},$parsers:[],$formatters:[],$viewChangeListeners:[],$render:t.noop}},debounce:function(e,t,o,i){var a;return function(){var d=o,s=Array.prototype.slice.call(arguments);r.cancel(a),a=r(function(){a=n,e.apply(d,s)},t||10,i)}},throttle:function(e,t){var n;return function(){var o=this,i=arguments,r=E.now();(!n||r-n>t)&&(e.apply(o,i),n=r)}},time:function(e){var t=E.now();return e(),E.now()-t},valueOnUse:function(e,t,n){var o=null,i=Array.prototype.slice.call(arguments),r=i.length>3?i.slice(3):[];Object.defineProperty(e,t,{get:function(){return null===o&&(o=n.apply(e,r)),o}})},nextUid:function(){return""+i++},disconnectScope:function(e){if(e&&e.$root!==e&&!e.$$destroyed){var t=e.$parent;e.$$disconnected=!0,t.$$childHead===e&&(t.$$childHead=e.$$nextSibling),t.$$childTail===e&&(t.$$childTail=e.$$prevSibling),e.$$prevSibling&&(e.$$prevSibling.$$nextSibling=e.$$nextSibling),e.$$nextSibling&&(e.$$nextSibling.$$prevSibling=e.$$prevSibling),e.$$nextSibling=e.$$prevSibling=null}},reconnectScope:function(e){if(e&&e.$root!==e&&e.$$disconnected){var t=e,n=t.$parent;t.$$disconnected=!1,t.$$prevSibling=n.$$childTail,n.$$childHead?(n.$$childTail.$$nextSibling=t,n.$$childTail=t):n.$$childHead=n.$$childTail=t}},getClosest:function(e,n,o){if(e instanceof t.element&&(e=e[0]),n=n.toUpperCase(),o&&(e=e.parentNode),!e)return null;do if(e.nodeName===n)return e;while(e=e.parentNode);return null},elementContains:function(n,o){var i=e.Node&&e.Node.prototype&&Node.prototype.contains,r=i?t.bind(n,n.contains):t.bind(n,function(e){return n===o||!!(16&this.compareDocumentPosition(e))});return r(o)},extractElementByName:function(e,n,o,i){function r(e){return a(e)||(o?d(e):null)}function a(e){if(e)for(var t=0,o=e.length;o>t;t++)if(e[t].nodeName.toLowerCase()===n)return e[t];return null}function d(e){var t;if(e)for(var n=0,o=e.length;o>n;n++){var i=e[n];if(!t)for(var a=0,d=i.childNodes.length;d>a;a++)t=t||r([i.childNodes[a]])}return t}var s=r(e);return!s&&i&&l.warn(E.supplant("Unable to find node '{0}' in element '{1}'.",[n,e[0].outerHTML])),t.element(s||e)},initOptionalProperties:function(e,n,o){o=o||{},t.forEach(e.$$isolateBindings,function(i,r){if(i.optional&&t.isUndefined(e[r])){var a=t.isDefined(n[i.attrName]);e[r]=t.isDefined(o[r])?o[r]:a}})},nextTick:function(e,t,n){function o(){var e=n&&n.$$destroyed,t=e?[]:i.queue,o=e?null:i.digest;i.queue=[],i.timeout=null,i.digest=!1,t.forEach(function(e){e()}),o&&d.$digest()}var i=E.nextTick,a=i.timeout,s=i.queue||[];return s.push(e),null==t&&(t=!0),i.digest=i.digest||t,i.queue=s,a||(i.timeout=r(o,0,!1))},processTemplate:function(e){return g?e:e&&t.isString(e)?e.replace(/\{\{/g,p).replace(/}}/g,f):e},getParentWithPointerEvents:function(e){for(var t=e.parent();b(t,"pointer-events","none");)t=t.parent();return t},getNearestContentElement:function(e){for(var t=e.parent()[0];t&&t!==m[0]&&t!==document.body&&"MD-CONTENT"!==t.nodeName.toUpperCase();)t=t.parentNode;return t},parseAttributeBoolean:function(e,t){return""===e||!!e&&(t===!1||"false"!==e&&"0"!==e)},hasComputedStyle:b};return E.dom.animator=s(E),E}var i=0;t.module("material.core").factory("$mdUtil",o),o.$inject=["$document","$timeout","$compile","$rootScope","$$mdAnimate","$interpolate","$log","$rootElement","$window"],t.element.prototype.focus=t.element.prototype.focus||function(){return this.length&&this[0].focus(),this},t.element.prototype.blur=t.element.prototype.blur||function(){return this.length&&this[0].blur(),this}}(),function(){function e(e,n,o,i,r,a){this.compile=function(d){var s=d.templateUrl,c=d.template||"",l=d.controller,m=d.controllerAs,u=t.extend({},d.resolve||{}),h=t.extend({},d.locals||{}),p=d.transformTemplate||t.identity,f=d.bindToController;return t.forEach(u,function(e,n){t.isString(e)?u[n]=o.get(e):u[n]=o.invoke(e)}),t.extend(u,h),s?u.$template=n.get(s,{cache:a}).then(function(e){return e.data}):u.$template=e.when(c),e.all(u).then(function(e){var n,o=p(e.$template,d),a=d.element||t.element("<div>").html(o.trim()).contents(),s=i(a);return n={locals:e,element:a,link:function(o){if(e.$scope=o,l){var i=r(l,e,!0);f&&t.extend(i.instance,e);var d=i();a.data("$ngControllerController",d),a.children().data("$ngControllerController",d),m&&(o[m]=d),n.controller=d}return s(o)}}})}}t.module("material.core").service("$mdCompiler",e),e.$inject=["$q","$http","$injector","$compile","$controller","$templateCache"]}(),function(){function e(e,n,o,i){function r(e,o,i){var r=t.element(e)[0]||e;!r||r.hasAttribute(o)&&0!==r.getAttribute(o).length||c(r,o)||(i=t.isString(i)?i.trim():"",i.length?e.attr(o,i):n.warn('ARIA: Attribute "',o,'", required for accessibility, is missing on node:',r))}function a(t,n,o){e(function(){r(t,n,o())})}function d(e,t){var n=s(e)||"",o=n.indexOf(i.startSymbol())>-1;o?a(e,t,function(){return s(e)}):r(e,t,n)}function s(e){return(e.text()||"").trim()}function c(e,t){function n(e){var t=e.currentStyle?e.currentStyle:o.getComputedStyle(e);return"none"===t.display}var i=e.hasChildNodes(),r=!1;if(i)for(var a=e.childNodes,d=0;d<a.length;d++){var s=a[d];1===s.nodeType&&s.hasAttribute(t)&&(n(s)||(r=!0))}return r}return{expect:r,expectAsync:a,expectWithText:d}}t.module("material.core").service("$mdAria",e),e.$inject=["$$rAF","$log","$window","$interpolate"]}(),function(){function n(){}function o(n,o,i){function r(e){return function(t,n){n.distance<this.state.options.maxDistance&&this.dispatchEvent(t,e,n)}}function a(e,t,n){var o=p[t.replace(/^\$md./,"")];if(!o)throw new Error("Failed to register element with handler "+t+". Available handlers: "+Object.keys(p).join(", "));return o.registerElement(e,n)}function s(e,o){var i=new n(e);return t.extend(i,o),p[e]=i,g}var c=navigator.userAgent||navigator.vendor||e.opera,m=c.match(/ipad|iphone|ipod/i),u=c.match(/android/i),h="undefined"!=typeof e.jQuery&&t.element===e.jQuery,g={handler:s,register:a,isHijackingClicks:(m||u)&&!h&&!f};if(g.isHijackingClicks){var b=6;g.handler("click",{options:{maxDistance:b},onEnd:r("click")}),g.handler("focus",{options:{maxDistance:b},onEnd:function(e,t){function n(e){var t=["INPUT","SELECT","BUTTON","TEXTAREA","VIDEO","AUDIO"];return"-1"!=e.getAttribute("tabindex")&&!e.hasAttribute("DISABLED")&&(e.hasAttribute("tabindex")||e.hasAttribute("href")||-1!=t.indexOf(e.nodeName))}t.distance<this.state.options.maxDistance&&n(e.target)&&(this.dispatchEvent(e,"focus",t),e.target.focus())}}),g.handler("mouseup",{options:{maxDistance:b},onEnd:r("mouseup")}),g.handler("mousedown",{onStart:function(e){this.dispatchEvent(e,"mousedown")}})}return g.handler("press",{onStart:function(e,t){this.dispatchEvent(e,"$md.pressdown")},onEnd:function(e,t){this.dispatchEvent(e,"$md.pressup")}}).handler("hold",{options:{maxDistance:6,delay:500},onCancel:function(){i.cancel(this.state.timeout)},onStart:function(e,n){return this.state.registeredParent?(this.state.pos={x:n.x,y:n.y},void(this.state.timeout=i(t.bind(this,function(){this.dispatchEvent(e,"$md.hold"),this.cancel()}),this.state.options.delay,!1))):this.cancel()},onMove:function(e,t){e.preventDefault();var n=this.state.pos.x-t.x,o=this.state.pos.y-t.y;Math.sqrt(n*n+o*o)>this.options.maxDistance&&this.cancel()},onEnd:function(){this.onCancel()}}).handler("drag",{options:{minDistance:6,horizontal:!0,cancelMultiplier:1.5},onStart:function(e){this.state.registeredParent||this.cancel()},onMove:function(e,t){var n,o;e.preventDefault(),this.state.dragPointer?this.dispatchDragMove(e):(this.state.options.horizontal?(n=Math.abs(t.distanceX)>this.state.options.minDistance,o=Math.abs(t.distanceY)>this.state.options.minDistance*this.state.options.cancelMultiplier):(n=Math.abs(t.distanceY)>this.state.options.minDistance,o=Math.abs(t.distanceX)>this.state.options.minDistance*this.state.options.cancelMultiplier),n?(this.state.dragPointer=d(e),l(e,this.state.dragPointer),this.dispatchEvent(e,"$md.dragstart",this.state.dragPointer)):o&&this.cancel())},dispatchDragMove:o.throttle(function(e){this.state.isRunning&&(l(e,this.state.dragPointer),this.dispatchEvent(e,"$md.drag",this.state.dragPointer))}),onEnd:function(e,t){this.state.dragPointer&&(l(e,this.state.dragPointer),this.dispatchEvent(e,"$md.dragend",this.state.dragPointer))}}).handler("swipe",{options:{minVelocity:.65,minDistance:10},onEnd:function(e,t){var n;Math.abs(t.velocityX)>this.state.options.minVelocity&&Math.abs(t.distanceX)>this.state.options.minDistance?(n="left"==t.directionX?"$md.swipeleft":"$md.swiperight",this.dispatchEvent(e,n)):Math.abs(t.velocityY)>this.state.options.minVelocity&&Math.abs(t.distanceY)>this.state.options.minDistance&&(n="up"==t.directionY?"$md.swipeup":"$md.swipedown",this.dispatchEvent(e,n))}})}function i(e){this.name=e,this.state={}}function r(){function n(e,n,o){o=o||u;var i=new t.element.Event(n);i.$material=!0,i.pointer=o,i.srcEvent=e,t.extend(i,{clientX:o.x,clientY:o.y,screenX:o.x,screenY:o.y,pageX:o.x,pageY:o.y,ctrlKey:e.ctrlKey,altKey:e.altKey,shiftKey:e.shiftKey,metaKey:e.metaKey}),t.element(o.target).trigger(i)}function o(t,n,o){o=o||u;var i;"click"===n||"mouseup"==n||"mousedown"==n?(i=document.createEvent("MouseEvents"),i.initMouseEvent(n,!0,!0,e,t.detail,o.x,o.y,o.x,o.y,t.ctrlKey,t.altKey,t.shiftKey,t.metaKey,t.button,t.relatedTarget||null)):(i=document.createEvent("CustomEvent"),i.initCustomEvent(n,!0,!0,{})),i.$material=!0,i.pointer=o,i.srcEvent=t,o.target.dispatchEvent(i)}var r="undefined"!=typeof e.jQuery&&t.element===e.jQuery;return i.prototype={options:{},dispatchEvent:r?n:o,onStart:t.noop,onMove:t.noop,onEnd:t.noop,onCancel:t.noop,start:function(e,n){if(!this.state.isRunning){var o=this.getNearestParent(e.target),i=o&&o.$mdGesture[this.name]||{};this.state={isRunning:!0,options:t.extend({},this.options,i),registeredParent:o},this.onStart(e,n)}},move:function(e,t){this.state.isRunning&&this.onMove(e,t)},end:function(e,t){this.state.isRunning&&(this.onEnd(e,t),this.state.isRunning=!1)},cancel:function(e,t){this.onCancel(e,t),this.state={}},getNearestParent:function(e){for(var t=e;t;){if((t.$mdGesture||{})[this.name])return t;t=t.parentNode}return null},registerElement:function(e,t){function n(){delete e[0].$mdGesture[o.name],e.off("$destroy",n)}var o=this;return e[0].$mdGesture=e[0].$mdGesture||{},e[0].$mdGesture[this.name]=t||{},e.on("$destroy",n),n}},i}function a(e,n){function o(e){var t=!e.clientX&&!e.clientY;t||e.$material||e.isIonicTap||c(e)||(e.preventDefault(),e.stopPropagation())}function i(e){var t=0===e.clientX&&0===e.clientY;t||e.$material||e.isIonicTap||c(e)?(g=null,"label"==e.target.tagName.toLowerCase()&&(g={x:e.x,y:e.y})):(e.preventDefault(),e.stopPropagation(),g=null)}function r(e,t){var o;for(var i in p)o=p[i],o instanceof n&&("start"===e&&o.cancel(),o[e](t,u))}function a(e){if(!u){var t=+Date.now();h&&!s(e,h)&&t-h.endTime<1500||(u=d(e),r("start",e))}}function m(e){u&&s(e,u)&&(l(e,u),r("move",e))}function f(e){u&&s(e,u)&&(l(e,u),u.endTime=+Date.now(),r("end",e),h=u,u=null)}document.contains||(document.contains=function(e){return document.body.contains(e)}),!b&&e.isHijackingClicks&&(document.addEventListener("click",i,!0),document.addEventListener("mouseup",o,!0),document.addEventListener("mousedown",o,!0),document.addEventListener("focus",o,!0),b=!0);var E="mousedown touchstart pointerdown",v="mousemove touchmove pointermove",$="mouseup mouseleave touchend touchcancel pointerup pointercancel";t.element(document).on(E,a).on(v,m).on($,f).on("$$mdGestureReset",function(){h=u=null})}function d(e){var t=m(e),n={startTime:+Date.now(),target:e.target,type:e.type.charAt(0)};return n.startX=n.x=t.pageX,n.startY=n.y=t.pageY,n}function s(e,t){return e&&t&&e.type.charAt(0)===t.type}function c(e){return g&&g.x==e.x&&g.y==e.y}function l(e,t){var n=m(e),o=t.x=n.pageX,i=t.y=n.pageY;t.distanceX=o-t.startX,t.distanceY=i-t.startY,t.distance=Math.sqrt(t.distanceX*t.distanceX+t.distanceY*t.distanceY),t.directionX=t.distanceX>0?"right":t.distanceX<0?"left":"",t.directionY=t.distanceY>0?"down":t.distanceY<0?"up":"",t.duration=+Date.now()-t.startTime,t.velocityX=t.distanceX/t.duration,t.velocityY=t.distanceY/t.duration}function m(e){return e=e.originalEvent||e,e.touches&&e.touches[0]||e.changedTouches&&e.changedTouches[0]||e}var u,h,p={},f=!1,g=null,b=!1;t.module("material.core.gestures",[]).provider("$mdGesture",n).factory("$$MdGestureHandler",r).run(a),n.prototype={skipClickHijack:function(){return f=!0},$get:["$$MdGestureHandler","$$rAF","$timeout",function(e,t,n){return new o(e,t,n)}]},o.$inject=["$$MdGestureHandler","$$rAF","$timeout"],a.$inject=["$mdGesture","$$MdGestureHandler"]}(),function(){function e(){function e(e){function n(e){return s.optionsFactory=e.options,s.methods=(e.methods||[]).concat(a),c}function o(e,t){return d[e]=t,c}function i(t,n){if(n=n||{},n.methods=n.methods||[],n.options=n.options||function(){return{}},/^cancel|hide|show$/.test(t))throw new Error("Preset '"+t+"' in "+e+" is reserved!");if(n.methods.indexOf("_options")>-1)throw new Error("Method '_options' in "+e+" is reserved!");return s.presets[t]={methods:n.methods.concat(a),optionsFactory:n.options,argOption:n.argOption},c}function r(n,o){function i(e){return e=e||{},e._options&&(e=e._options),m.show(t.extend({},l,e))}function r(e){return m.destroy(e)}function a(t,n){var i={};return i[e]=u,o.invoke(t||function(){return n},{},i)}var c,l,m=n(),u={hide:m.hide,cancel:m.cancel,show:i,destroy:r};return c=s.methods||[],l=a(s.optionsFactory,{}),t.forEach(d,function(e,t){u[t]=e}),t.forEach(s.presets,function(e,n){function o(e){this._options=t.extend({},i,e)}var i=a(e.optionsFactory,{}),r=(e.methods||[]).concat(c);if(t.extend(i,{$type:n}),t.forEach(r,function(e){o.prototype[e]=function(t){return this._options[e]=t,this}}),e.argOption){var d="show"+n.charAt(0).toUpperCase()+n.slice(1);u[d]=function(e){var t=u[n](e);return u.show(t)}}u[n]=function(n){return arguments.length&&e.argOption&&!t.isObject(n)&&!t.isArray(n)?(new o)[e.argOption](n):new o(n)}}),u}var a=["onHide","onShow","onRemove"],d={},s={presets:{}},c={setDefaults:n,addPreset:i,addMethod:o,$get:r};return c.addPreset("build",{methods:["controller","controllerAs","resolve","template","templateUrl","themable","transformTemplate","parent"]}),r.$inject=["$$interimElement","$injector"],c}function o(e,o,i,r,a,d,s,c,l,m,u){return function(){function h(e){e=e||{};var t=new b(e||{}),n=!e.skipHide&&$.length?E.hide():o.when(!0);return n["finally"](function(){$.push(t),t.show()["catch"](function(e){return e})}),t.deferred.promise}function p(e,t){function i(n){return n.remove(e,!1,t||{})["catch"](function(e){return e}),n.deferred.promise}if(!$.length)return o.when(e);if(t=t||{},t.closeAll){var r=o.all($.reverse().map(i));return $=[],r}if(t.closeTo!==n)return o.all($.splice(t.closeTo).map(i));var a=$.pop();return i(a)}function f(e,t){var n=$.pop();return n?(n.remove(e,!0,t||{})["catch"](function(e){return e}),n.deferred.promise):o.when(e)}function g(e){var n=e?null:$.shift(),i=t.element(e).length?t.element(e)[0].parentNode:null;if(i){var r=$.filter(function(e){var t=e.options.element[0];return t===i});r.length>0&&(n=r[0],$.splice($.indexOf(n),1))}return n?n.remove(v,!1,{$destroy:!0}):o.when(v)}function b(u){function h(){return o(function(e,t){function n(e){C.deferred.reject(e),t(e)}g(u).then(function(t){A=b(t,u),T=M(A,u,t.controller).then(e,n)},n)})}function p(e,n,i){function r(e){C.deferred.resolve(e)}function a(e){C.deferred.reject(e)}return A?(u=t.extend(u||{},i||{}),u.cancelAutoHide&&u.cancelAutoHide(),u.element.triggerHandler("$mdInterimElementRemove"),u.$destroy===!0?y(u.element,u).then(function(){n&&a(e)||r(e)}):(o.when(T)["finally"](function(){y(u.element,u).then(function(){n&&a(e)||r(e)},a)}),C.deferred.promise)):o.when(!1)}function f(e){return e=e||{},e.template&&(e.template=c.processTemplate(e.template)),t.extend({preserveScope:!1,cancelAutoHide:t.noop,scope:e.scope||r.$new(e.isolateScope),onShow:function(e,t,n){return s.enter(t,n.parent)},onRemove:function(e,t){return t&&s.leave(t)||o.when()}},e)}function g(e){var t=e.skipCompile?null:l.compile(e);return t||o(function(t){t({locals:{},link:function(){return e.element}})})}function b(e,n){t.extend(e.locals,n);var o=e.link(n.scope);return n.element=o,n.parent=v(o,n),n.themable&&m(o),o}function v(n,o){var i=o.parent;if(i=t.isFunction(i)?i(o.scope,n,o):t.isString(i)?t.element(e[0].querySelector(i)):t.element(i),!(i||{}).length){var r;return d[0]&&d[0].querySelector&&(r=d[0].querySelector(":not(svg) > body")),r||(r=d[0]),"#comment"==r.nodeName&&(r=e[0].body),t.element(r)}return i}function $(){var e,o=t.noop;u.hideDelay&&(e=a(E.hide,u.hideDelay),o=function(){a.cancel(e)}),u.cancelAutoHide=function(){o(),u.cancelAutoHide=n}}function M(e,n,i){var r=n.onShowing||t.noop,a=n.onComplete||t.noop;return r(n.scope,e,n,i),o(function(t,r){try{o.when(n.onShow(n.scope,e,n,i)).then(function(){a(n.scope,e,n),$(),t(e)},r)}catch(d){r(d.message)}})}function y(e,n){var o=n.onRemoving||t.noop;return i(function(t,r){try{var a=i.when(n.onRemove(n.scope,e,n)||!0);o(e,a),1==n.$destroy?t(e):a.then(function(){!n.preserveScope&&n.scope&&n.scope.$destroy(),t(e)},r)}catch(d){r(d)}})}var C,A,T=o.when(!0);return u=f(u),C={options:u,deferred:o.defer(),show:h,remove:p}}var E,v=!1,$=[];return E={show:h,hide:p,cancel:f,destroy:g,$injector_:u}}}return e.$get=o,o.$inject=["$document","$q","$$q","$rootScope","$timeout","$rootElement","$animate","$mdUtil","$mdCompiler","$mdTheming","$injector"],e}t.module("material.core").provider("$$interimElement",e)}(),function(){!function(){function e(e){function a(e){return e.replace(s,"").replace(c,function(e,t,n,o){return o?n.toUpperCase():n})}var s=/^((?:x|data)[\:\-_])/i,c=/([\:\-\_]+(.))/g,l=["","xs","gt-xs","sm","gt-sm","md","gt-md","lg","gt-lg","xl","print"],m=["layout","flex","flex-order","flex-offset","layout-align"],u=["show","hide","layout-padding","layout-margin"];t.forEach(l,function(n){t.forEach(m,function(t){var o=n?t+"-"+n:t;e.directive(a(o),i(o))}),t.forEach(u,function(t){var o=n?t+"-"+n:t;e.directive(a(o),r(o))})}),e.directive("mdLayoutCss",n).directive("ngCloak",o("ng-cloak")).directive("layoutWrap",r("layout-wrap")).directive("layoutNowrap",r("layout-nowrap")).directive("layoutNoWrap",r("layout-no-wrap")).directive("layoutFill",r("layout-fill")).directive("layoutLtMd",d("layout-lt-md",!0)).directive("layoutLtLg",d("layout-lt-lg",!0)).directive("flexLtMd",d("flex-lt-md",!0)).directive("flexLtLg",d("flex-lt-lg",!0)).directive("layoutAlignLtMd",d("layout-align-lt-md")).directive("layoutAlignLtLg",d("layout-align-lt-lg")).directive("flexOrderLtMd",d("flex-order-lt-md")).directive("flexOrderLtLg",d("flex-order-lt-lg")).directive("offsetLtMd",d("flex-offset-lt-md")).directive("offsetLtLg",d("flex-offset-lt-lg")).directive("hideLtMd",d("hide-lt-md")).directive("hideLtLg",d("hide-lt-lg")).directive("showLtMd",d("show-lt-md")).directive("showLtLg",d("show-lt-lg"))}function n(){return{restrict:"A",priority:"900",compile:function(e,n){return A.enabled=!1,t.noop}}}function o(e){return["$timeout",function(n){return{restrict:"A",priority:-10,compile:function(o){return A.enabled?(o.addClass(e),function(t,o){n(function(){o.removeClass(e)},10,!1)}):t.noop}}}]}function i(e){function n(t,n,o){var i=a(n,e,o),r=o.$observe(o.$normalize(e),i);i(u(e,o,"")),t.$on("$destroy",function(){r()})}return["$mdUtil","$interpolate","$log",function(o,i,r){return f=o,g=i,b=r,{restrict:"A",compile:function(o,i){var r;return A.enabled&&(s(e,i,o,b),c(e,u(e,i,""),l(o,e,i)),r=n),r||t.noop}}}]}function r(e){function n(t,n){n.addClass(e)}return["$mdUtil","$interpolate","$log",function(o,i,r){return f=o,g=i,b=r,{restrict:"A",compile:function(o,i){var r;return A.enabled&&(c(e,u(e,i,""),l(o,e,i)),n(null,o),r=n),r||t.noop}}}]}function a(e,n){var o;return function(i){var r=c(n,i||"");t.isDefined(r)&&(o&&e.removeClass(o),o=r?n+"-"+r.replace(v,"-"):n,e.addClass(o))}}function d(e){var n=e.split("-");return["$log",function(o){return o.warn(e+"has been deprecated. Please use a `"+n[0]+"-gt-<xxx>` variant."),t.noop}]}function s(e,t,n,o){var i,r,a,d=n[0].nodeName.toLowerCase();switch(e.replace(E,"")){case"flex":"md-button"!=d&&"fieldset"!=d||(r="<"+d+" "+e+"></"+d+">",a="https://github.com/philipwalton/flexbugs#9-some-html-elements-cant-be-flex-containers",i="Markup '{0}' may not work as expected in IE Browsers. Consult '{1}' for details.",o.warn(f.supplant(i,[r,a])))}}function c(e,n,o){var i=n;if(!m(n)){switch(e.replace(E,"")){case"layout":h(n,M)||(n=M[0]);break;case"flex":h(n,$)||isNaN(n)&&(n="");break;case"flex-offset":case"flex-order":n&&!isNaN(+n)||(n="0");break;case"layout-align":var r=p(n);n=f.supplant("{main}-{cross}",r);break;case"layout-padding":case"layout-margin":case"layout-fill":case"layout-wrap":case"layout-nowrap":case"layout-nowrap":n=""}n!=i&&(o||t.noop)(n)}return n}function l(e,t,n){return function(e){m(e)||(n[n.$normalize(t)]=e)}}function m(e){return(e||"").indexOf(g.startSymbol())>-1}function u(e,t,n){var o=t.$normalize(e);return t[o]?t[o].replace(v,"-"):n||null}function h(e,t,n){e=n&&e?e.replace(v,n):e;var o=!1;return e&&t.forEach(function(t){t=n?t.replace(v,n):t,o=o||t===e}),o}function p(e){var t,n={main:"start",cross:"stretch"};return e=e||"",0!=e.indexOf("-")&&0!=e.indexOf(" ")||(e="none"+e),t=e.toLowerCase().trim().replace(v,"-").split("-"),t.length&&"space"===t[0]&&(t=[t[0]+"-"+t[1],t[2]]),t.length>0&&(n.main=t[0]||n.main),t.length>1&&(n.cross=t[1]||n.cross),y.indexOf(n.main)<0&&(n.main="start"),C.indexOf(n.cross)<0&&(n.cross="stretch"),n}var f,g,b,E=/(-gt)?-(sm|md|lg|print)/g,v=/\s+/g,$=["grow","initial","auto","none","noshrink","nogrow"],M=["row","column"],y=["","start","center","end","stretch","space-around","space-between"],C=["","start","center","end","stretch"],A={enabled:!0,breakpoints:[]};e(t.module("material.core.layout",["ng"]))}()}(),function(){function e(e,n){function o(e){return e&&""!==e}var i,r=[],a={};return i={notFoundError:function(t){e.error("No instance found for handle",t)},getInstances:function(){return r},get:function(e){if(!o(e))return null;var t,n,i;for(t=0,n=r.length;n>t;t++)if(i=r[t],i.$$mdHandle===e)return i;return null},register:function(e,n){function o(){var t=r.indexOf(e);-1!==t&&r.splice(t,1)}function i(){var t=a[n];t&&(t.resolve(e),delete a[n]);
}return n?(e.$$mdHandle=n,r.push(e),i(),o):t.noop},when:function(e){if(o(e)){var t=n.defer(),r=i.get(e);return r?t.resolve(r):a[e]=t,t.promise}return n.reject("Invalid `md-component-id` value.")}}}t.module("material.core").factory("$mdComponentRegistry",e),e.$inject=["$log","$q"]}(),function(){!function(){function e(e){function n(e){return e.hasClass("md-icon-button")?{isMenuItem:e.hasClass("md-menu-item"),fitRipple:!0,center:!0}:{isMenuItem:e.hasClass("md-menu-item"),dimBackground:!0}}return{attach:function(o,i,r){return r=t.extend(n(i),r),e.attach(o,i,r)}}}t.module("material.core").factory("$mdButtonInkRipple",e),e.$inject=["$mdInkRipple"]}()}(),function(){!function(){function e(e){function n(n,o,i){return e.attach(n,o,t.extend({center:!0,dimBackground:!1,fitRipple:!0},i))}return{attach:n}}t.module("material.core").factory("$mdCheckboxInkRipple",e),e.$inject=["$mdInkRipple"]}()}(),function(){!function(){function e(e){function n(n,o,i){return e.attach(n,o,t.extend({center:!1,dimBackground:!0,outline:!1,rippleSize:"full"},i))}return{attach:n}}t.module("material.core").factory("$mdListInkRipple",e),e.$inject=["$mdInkRipple"]}()}(),function(){function e(e,n){return{controller:t.noop,link:function(t,o,i){i.hasOwnProperty("mdInkRippleCheckbox")?n.attach(t,o):e.attach(t,o)}}}function n(e){function n(n,i,r){return i.controller("mdNoInk")?t.noop:e.instantiate(o,{$scope:n,$element:i,rippleOptions:r})}return{attach:n}}function o(e,n,o,i,r,a){this.$window=i,this.$timeout=r,this.$mdUtil=a,this.$scope=e,this.$element=n,this.options=o,this.mousedown=!1,this.ripples=[],this.timeout=null,this.lastRipple=null,a.valueOnUse(this,"container",this.createContainer),this.$element.addClass("md-ink-ripple"),(n.controller("mdInkRipple")||{}).createRipple=t.bind(this,this.createRipple),(n.controller("mdInkRipple")||{}).setColor=t.bind(this,this.color),this.bindEvents()}function i(e,n){(e.mousedown||e.lastRipple)&&(e.mousedown=!1,e.$mdUtil.nextTick(t.bind(e,n),!1))}function r(){return{controller:t.noop}}t.module("material.core").factory("$mdInkRipple",n).directive("mdInkRipple",e).directive("mdNoInk",r).directive("mdNoBar",r).directive("mdNoStretch",r);var a=450;e.$inject=["$mdButtonInkRipple","$mdCheckboxInkRipple"],n.$inject=["$injector"],o.$inject=["$scope","$element","rippleOptions","$window","$timeout","$mdUtil"],o.prototype.color=function(e){function n(){var e=o.options&&o.options.colorElement?o.options.colorElement:[],t=e.length?e[0]:o.$element[0];return t?o.$window.getComputedStyle(t).color:"rgb(0,0,0)"}var o=this;return t.isDefined(e)&&(o._color=o._parseColor(e)),o._color||o._parseColor(o.inkRipple())||o._parseColor(n())},o.prototype.calculateColor=function(){return this.color()},o.prototype._parseColor=function(e,t){function n(e){var t="#"===e[0]?e.substr(1):e,n=t.length/3,o=t.substr(0,n),i=t.substr(n,n),r=t.substr(2*n);return 1===n&&(o+=o,i+=i,r+=r),"rgba("+parseInt(o,16)+","+parseInt(i,16)+","+parseInt(r,16)+",0.1)"}function o(e){return e.replace(")",", 0.1)").replace("(","a(")}return t=t||1,e?0===e.indexOf("rgba")?e.replace(/\d?\.?\d*\s*\)\s*$/,(.1*t).toString()+")"):0===e.indexOf("rgb")?o(e):0===e.indexOf("#")?n(e):void 0:void 0},o.prototype.bindEvents=function(){this.$element.on("mousedown",t.bind(this,this.handleMousedown)),this.$element.on("mouseup touchend",t.bind(this,this.handleMouseup)),this.$element.on("mouseleave",t.bind(this,this.handleMouseup)),this.$element.on("touchmove",t.bind(this,this.handleTouchmove))},o.prototype.handleMousedown=function(e){if(!this.mousedown)if(e.hasOwnProperty("originalEvent")&&(e=e.originalEvent),this.mousedown=!0,this.options.center)this.createRipple(this.container.prop("clientWidth")/2,this.container.prop("clientWidth")/2);else if(e.srcElement!==this.$element[0]){var t=this.$element[0].getBoundingClientRect(),n=e.clientX-t.left,o=e.clientY-t.top;this.createRipple(n,o)}else this.createRipple(e.offsetX,e.offsetY)},o.prototype.handleMouseup=function(){i(this,this.clearRipples)},o.prototype.handleTouchmove=function(){i(this,this.deleteRipples)},o.prototype.deleteRipples=function(){for(var e=0;e<this.ripples.length;e++)this.ripples[e].remove()},o.prototype.clearRipples=function(){for(var e=0;e<this.ripples.length;e++)this.fadeInComplete(this.ripples[e])},o.prototype.createContainer=function(){var e=t.element('<div class="md-ripple-container"></div>');return this.$element.append(e),e},o.prototype.clearTimeout=function(){this.timeout&&(this.$timeout.cancel(this.timeout),this.timeout=null)},o.prototype.isRippleAllowed=function(){var e=this.$element[0];do{if(!e.tagName||"BODY"===e.tagName)break;if(e&&t.isFunction(e.hasAttribute)){if(e.hasAttribute("disabled"))return!1;if("false"===this.inkRipple()||"0"===this.inkRipple())return!1}}while(e=e.parentNode);return!0},o.prototype.inkRipple=function(){return this.$element.attr("md-ink-ripple")},o.prototype.createRipple=function(e,n){function o(e){return e?e.replace("rgba","rgb").replace(/,[^\),]+\)/,")"):"rgb(0,0,0)"}function i(e,t,n){return e?Math.max(t,n):Math.sqrt(Math.pow(t,2)+Math.pow(n,2))}if(this.isRippleAllowed()){var r=this,d=t.element('<div class="md-ripple"></div>'),s=this.$element.prop("clientWidth"),c=this.$element.prop("clientHeight"),l=2*Math.max(Math.abs(s-e),e),m=2*Math.max(Math.abs(c-n),n),u=i(this.options.fitRipple,l,m),h=this.calculateColor();d.css({left:e+"px",top:n+"px",background:"black",width:u+"px",height:u+"px",backgroundColor:o(h),borderColor:o(h)}),this.lastRipple=d,this.clearTimeout(),this.timeout=this.$timeout(function(){r.clearTimeout(),r.mousedown||r.fadeInComplete(d)},.35*a,!1),this.options.dimBackground&&this.container.css({backgroundColor:h}),this.container.append(d),this.ripples.push(d),d.addClass("md-ripple-placed"),this.$mdUtil.nextTick(function(){d.addClass("md-ripple-scaled md-ripple-active"),r.$timeout(function(){r.clearRipples()},a,!1)},!1)}},o.prototype.fadeInComplete=function(e){this.lastRipple===e?this.timeout||this.mousedown||this.removeRipple(e):this.removeRipple(e)},o.prototype.removeRipple=function(e){var t=this,n=this.ripples.indexOf(e);0>n||(this.ripples.splice(this.ripples.indexOf(e),1),e.removeClass("md-ripple-active"),0===this.ripples.length&&this.container.css({backgroundColor:""}),this.$timeout(function(){t.fadeOutComplete(e)},a,!1))},o.prototype.fadeOutComplete=function(e){e.remove(),this.lastRipple=null}}(),function(){!function(){function e(e){function n(n,o,i){return e.attach(n,o,t.extend({center:!1,dimBackground:!0,outline:!1,rippleSize:"full"},i))}return{attach:n}}t.module("material.core").factory("$mdTabInkRipple",e),e.$inject=["$mdInkRipple"]}()}(),function(){t.module("material.core.theming.palette",[]).constant("$mdColorPalette",{red:{50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 300 A100",contrastStrongLightColors:"400 500 600 700 A200 A400 A700"},pink:{50:"#fce4ec",100:"#f8bbd0",200:"#f48fb1",300:"#f06292",400:"#ec407a",500:"#e91e63",600:"#d81b60",700:"#c2185b",800:"#ad1457",900:"#880e4f",A100:"#ff80ab",A200:"#ff4081",A400:"#f50057",A700:"#c51162",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 A100",contrastStrongLightColors:"500 600 A200 A400 A700"},purple:{50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 A100",contrastStrongLightColors:"300 400 A200 A400 A700"},"deep-purple":{50:"#ede7f6",100:"#d1c4e9",200:"#b39ddb",300:"#9575cd",400:"#7e57c2",500:"#673ab7",600:"#5e35b1",700:"#512da8",800:"#4527a0",900:"#311b92",A100:"#b388ff",A200:"#7c4dff",A400:"#651fff",A700:"#6200ea",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 A100",contrastStrongLightColors:"300 400 A200"},indigo:{50:"#e8eaf6",100:"#c5cae9",200:"#9fa8da",300:"#7986cb",400:"#5c6bc0",500:"#3f51b5",600:"#3949ab",700:"#303f9f",800:"#283593",900:"#1a237e",A100:"#8c9eff",A200:"#536dfe",A400:"#3d5afe",A700:"#304ffe",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 A100",contrastStrongLightColors:"300 400 A200 A400"},blue:{50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 300 400 A100",contrastStrongLightColors:"500 600 700 A200 A400 A700"},"light-blue":{50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea",contrastDefaultColor:"dark",contrastLightColors:"600 700 800 900 A700",contrastStrongLightColors:"600 700 800 A700"},cyan:{50:"#e0f7fa",100:"#b2ebf2",200:"#80deea",300:"#4dd0e1",400:"#26c6da",500:"#00bcd4",600:"#00acc1",700:"#0097a7",800:"#00838f",900:"#006064",A100:"#84ffff",A200:"#18ffff",A400:"#00e5ff",A700:"#00b8d4",contrastDefaultColor:"dark",contrastLightColors:"700 800 900",contrastStrongLightColors:"700 800 900"},teal:{50:"#e0f2f1",100:"#b2dfdb",200:"#80cbc4",300:"#4db6ac",400:"#26a69a",500:"#009688",600:"#00897b",700:"#00796b",800:"#00695c",900:"#004d40",A100:"#a7ffeb",A200:"#64ffda",A400:"#1de9b6",A700:"#00bfa5",contrastDefaultColor:"dark",contrastLightColors:"500 600 700 800 900",contrastStrongLightColors:"500 600 700"},green:{50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853",contrastDefaultColor:"dark",contrastLightColors:"600 700 800 900",contrastStrongLightColors:"600 700"},"light-green":{50:"#f1f8e9",100:"#dcedc8",200:"#c5e1a5",300:"#aed581",400:"#9ccc65",500:"#8bc34a",600:"#7cb342",700:"#689f38",800:"#558b2f",900:"#33691e",A100:"#ccff90",A200:"#b2ff59",A400:"#76ff03",A700:"#64dd17",contrastDefaultColor:"dark",contrastLightColors:"700 800 900",contrastStrongLightColors:"700 800 900"},lime:{50:"#f9fbe7",100:"#f0f4c3",200:"#e6ee9c",300:"#dce775",400:"#d4e157",500:"#cddc39",600:"#c0ca33",700:"#afb42b",800:"#9e9d24",900:"#827717",A100:"#f4ff81",A200:"#eeff41",A400:"#c6ff00",A700:"#aeea00",contrastDefaultColor:"dark",contrastLightColors:"900",contrastStrongLightColors:"900"},yellow:{50:"#fffde7",100:"#fff9c4",200:"#fff59d",300:"#fff176",400:"#ffee58",500:"#ffeb3b",600:"#fdd835",700:"#fbc02d",800:"#f9a825",900:"#f57f17",A100:"#ffff8d",A200:"#ffff00",A400:"#ffea00",A700:"#ffd600",contrastDefaultColor:"dark"},amber:{50:"#fff8e1",100:"#ffecb3",200:"#ffe082",300:"#ffd54f",400:"#ffca28",500:"#ffc107",600:"#ffb300",700:"#ffa000",800:"#ff8f00",900:"#ff6f00",A100:"#ffe57f",A200:"#ffd740",A400:"#ffc400",A700:"#ffab00",contrastDefaultColor:"dark"},orange:{50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00",contrastDefaultColor:"dark",contrastLightColors:"800 900",contrastStrongLightColors:"800 900"},"deep-orange":{50:"#fbe9e7",100:"#ffccbc",200:"#ffab91",300:"#ff8a65",400:"#ff7043",500:"#ff5722",600:"#f4511e",700:"#e64a19",800:"#d84315",900:"#bf360c",A100:"#ff9e80",A200:"#ff6e40",A400:"#ff3d00",A700:"#dd2c00",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 300 400 A100 A200",contrastStrongLightColors:"500 600 700 800 900 A400 A700"},brown:{50:"#efebe9",100:"#d7ccc8",200:"#bcaaa4",300:"#a1887f",400:"#8d6e63",500:"#795548",600:"#6d4c41",700:"#5d4037",800:"#4e342e",900:"#3e2723",A100:"#d7ccc8",A200:"#bcaaa4",A400:"#8d6e63",A700:"#5d4037",contrastDefaultColor:"light",contrastDarkColors:"50 100 200",contrastStrongLightColors:"300 400"},grey:{50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",1000:"#000000",A100:"#ffffff",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161",contrastDefaultColor:"dark",contrastLightColors:"600 700 800 900"},"blue-grey":{50:"#eceff1",100:"#cfd8dc",200:"#b0bec5",300:"#90a4ae",400:"#78909c",500:"#607d8b",600:"#546e7a",700:"#455a64",800:"#37474f",900:"#263238",A100:"#cfd8dc",A200:"#b0bec5",A400:"#78909c",A700:"#455a64",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 300",contrastStrongLightColors:"400 500"}})}(),function(){function e(e){function o(e,t){return t=t||{},m[e]=a(e,t),E}function i(e,n){return a(e,t.extend({},m[e]||{},n))}function a(e,t){var n=T.filter(function(e){return!t[e]});if(n.length)throw new Error("Missing colors %1 in palette %2!".replace("%1",n.join(", ")).replace("%2",e));return t}function s(e,n){if(u[e])return u[e];n=n||"default";var o="string"==typeof n?u[n]:n,i=new c(e);return o&&t.forEach(o.colors,function(e,n){i.colors[n]={name:e.name,hues:t.extend({},e.hues)}}),u[e]=i,i}function c(e){function n(e){if(e=0===arguments.length?!0:!!e,e!==o.isDark){o.isDark=e,o.foregroundPalette=o.isDark?f:p,o.foregroundShadow=o.isDark?g:b;var n=o.isDark?A:C,i=o.isDark?C:A;return t.forEach(n,function(e,t){var n=o.colors[t],r=i[t];if(n)for(var a in n.hues)n.hues[a]===r[a]&&(n.hues[a]=e[a])}),o}}var o=this;o.name=e,o.colors={},o.dark=n,n(!1),M.forEach(function(e){var n=(o.isDark?A:C)[e];o[e+"Palette"]=function(i,r){var a=o.colors[e]={name:i,hues:t.extend({},n,r)};return Object.keys(a.hues).forEach(function(e){if(!n[e])throw new Error("Invalid hue name '%1' in theme %2's %3 color %4. Available hue names: %4".replace("%1",e).replace("%2",o.name).replace("%3",i).replace("%4",Object.keys(n).join(", ")))}),Object.keys(a.hues).map(function(e){return a.hues[e]}).forEach(function(t){if(-1==T.indexOf(t))throw new Error("Invalid hue value '%1' in theme %2's %3 color %4. Available hue values: %5".replace("%1",t).replace("%2",o.name).replace("%3",e).replace("%4",i).replace("%5",T.join(", ")))}),o},o[e+"Color"]=function(){var t=Array.prototype.slice.call(arguments);return console.warn("$mdThemingProviderTheme."+e+"Color() has been deprecated. Use $mdThemingProviderTheme."+e+"Palette() instead."),o[e+"Palette"].apply(o,t)}})}function h(e,o){function i(e){return e===n||""===e?!0:a.THEMES[e]!==n}function r(n,r){function a(){return s=r.controller("mdTheme")||n.data("$mdThemeController"),s&&s.$mdTheme||("default"==v?"":v)}function d(e){if(e){i(e)||o.warn("Attempted to use unregistered theme '"+e+"'. Register it with $mdThemingProvider.theme().");var t=n.data("$mdThemeName");t&&n.removeClass("md-"+t+"-theme"),n.addClass("md-"+e+"-theme"),n.data("$mdThemeName",e),s&&n.data("$mdThemeController",s)}}var s=r.controller("mdTheme"),c=n.attr("md-theme-watch"),l=($||t.isDefined(c))&&"false"!=c;d(a()),n.on("$destroy",l?e.$watch(a,d):t.noop)}var a=function(t,o){o===n&&(o=t,t=n),t===n&&(t=e),a.inherit(o,o)};return a.THEMES=t.extend({},u),a.inherit=r,a.registered=i,a.defaultTheme=function(){return v},a.generateTheme=function(e){d(e,k)},a}m={},u={};var E,v="default",$=!1;return t.extend(m,e),h.$inject=["$rootScope","$log"],E={definePalette:o,extendPalette:i,theme:s,setNonce:function(e){k=e},setDefaultTheme:function(e){v=e},alwaysWatchTheme:function(e){$=e},generateThemesOnDemand:function(e){w=e},$get:h,_LIGHT_DEFAULT_HUES:C,_DARK_DEFAULT_HUES:A,_PALETTES:m,_THEMES:u,_parseRules:r,_rgba:l}}function o(e,t,n){return{priority:100,link:{pre:function(o,i,r){var a={$setTheme:function(t){e.registered(t)||n.warn("attempted to use unregistered theme '"+t+"'"),a.$mdTheme=t}};i.data("$mdThemeController",a),a.$setTheme(t(r.mdTheme)(o)),r.$observe("mdTheme",a.$setTheme)}}}}function i(e){return e}function r(e,n,o){s(e,n),o=o.replace(/THEME_NAME/g,e.name);var i=[],r=e.colors[n],a=new RegExp(".md-"+e.name+"-theme","g"),d=new RegExp("('|\")?{{\\s*("+n+")-(color|contrast)-?(\\d\\.?\\d*)?\\s*}}(\"|')?","g"),c=/'?"?\{\{\s*([a-zA-Z]+)-(A?\d+|hue\-[0-3]|shadow)-?(\d\.?\d*)?(contrast)?\s*\}\}'?"?/g,u=m[r.name];return o=o.replace(c,function(t,n,o,i,r){return"foreground"===n?"shadow"==o?e.foregroundShadow:e.foregroundPalette[o]||e.foregroundPalette[1]:(0===o.indexOf("hue")&&(o=e.colors[n].hues[o]),l((m[e.colors[n].name][o]||"")[r?"contrast":"value"],i))}),t.forEach(r.hues,function(t,n){var r=o.replace(d,function(e,n,o,i,r){return l(u[t]["color"===i?"value":"contrast"],r)});if("default"!==n&&(r=r.replace(a,".md-"+e.name+"-theme.md-"+n)),"default"==e.name){var s=/((?:(?:(?: |>|\.|\w|-|:|\(|\)|\[|\]|"|'|=)+) )?)((?:(?:\w|\.|-)+)?)\.md-default-theme((?: |>|\.|\w|-|:|\(|\)|\[|\]|"|'|=)*)/g;r=r.replace(s,function(e,t,n,o){return e+", "+t+n+o})}i.push(r)}),i}function a(e){function n(e){var n=e.contrastDefaultColor,o=e.contrastLightColors||[],i=e.contrastStrongLightColors||[],r=e.contrastDarkColors||[];"string"==typeof o&&(o=o.split(" ")),"string"==typeof i&&(i=i.split(" ")),"string"==typeof r&&(r=r.split(" ")),delete e.contrastDefaultColor,delete e.contrastLightColors,delete e.contrastStrongLightColors,delete e.contrastDarkColors,t.forEach(e,function(a,d){function s(){return"light"===n?r.indexOf(d)>-1?E:i.indexOf(d)>-1?$:v:o.indexOf(d)>-1?i.indexOf(d)>-1?$:v:E}if(!t.isObject(a)){var l=c(a);if(!l)throw new Error("Color %1, in palette %2's hue %3, is invalid. Hex or rgb(a) color expected.".replace("%1",a).replace("%2",e.name).replace("%3",d));e[d]={value:l,contrast:s()}}})}var o=document.head,i=o?o.firstElementChild:null,r=e.has("$MD_THEME_CSS")?e.get("$MD_THEME_CSS"):"";if(i&&0!==r.length){t.forEach(m,n);var a=r.split(/\}(?!(\}|'|"|;))/).filter(function(e){return e&&e.length}).map(function(e){return e.trim()+"}"}),s=new RegExp("md-("+M.join("|")+")","g");M.forEach(function(e){_[e]=""}),a.forEach(function(e){for(var t,n=(e.match(s),0);t=M[n];n++)if(e.indexOf(".md-"+t)>-1)return _[t]+=e;for(n=0;t=M[n];n++)if(e.indexOf(t)>-1)return _[t]+=e;return _[y]+=e}),w||t.forEach(u,function(e){h[e.name]||d(e.name,k)})}}function d(e,t){var n=u[e],o=document.head,i=o?o.firstElementChild:null;h[e]||(M.forEach(function(e){for(var a=r(n,e,_[e]);a.length;){var d=a.shift();if(d){var s=document.createElement("style");s.setAttribute("md-theme-style",""),t&&s.setAttribute("nonce",t),s.appendChild(document.createTextNode(d)),o.insertBefore(s,i)}}}),n.colors.primary.name==n.colors.accent.name&&console.warn("$mdThemingProvider: Using the same palette for primary and accent. This violates the material design spec."),h[n.name]=!0)}function s(e,t){if(!m[(e.colors[t]||{}).name])throw new Error("You supplied an invalid color palette for theme %1's %2 palette. Available palettes: %3".replace("%1",e.name).replace("%2",t).replace("%3",Object.keys(m).join(", ")))}function c(e){if(t.isArray(e)&&3==e.length)return e;if(/^rgb/.test(e))return e.replace(/(^\s*rgba?\(|\)\s*$)/g,"").split(",").map(function(e,t){return 3==t?parseFloat(e,10):parseInt(e,10)});if("#"==e.charAt(0)&&(e=e.substring(1)),/^([a-fA-F0-9]{3}){1,2}$/g.test(e)){var n=e.length/3,o=e.substr(0,n),i=e.substr(n,n),r=e.substr(2*n);return 1===n&&(o+=o,i+=i,r+=r),[parseInt(o,16),parseInt(i,16),parseInt(r,16)]}}function l(e,n){return e?(4==e.length&&(e=t.copy(e),n?e.pop():n=e.pop()),n&&("number"==typeof n||"string"==typeof n&&n.length)?"rgba("+e.join(",")+","+n+")":"rgb("+e.join(",")+")"):"rgb('0,0,0')"}t.module("material.core.theming",["material.core.theming.palette"]).directive("mdTheme",o).directive("mdThemable",i).provider("$mdTheming",e).run(a);var m,u,h={},p={name:"dark",1:"rgba(0,0,0,0.87)",2:"rgba(0,0,0,0.54)",3:"rgba(0,0,0,0.26)",4:"rgba(0,0,0,0.12)"},f={name:"light",1:"rgba(255,255,255,1.0)",2:"rgba(255,255,255,0.7)",3:"rgba(255,255,255,0.3)",4:"rgba(255,255,255,0.12)"},g="1px 1px 0px rgba(0,0,0,0.4), -1px -1px 0px rgba(0,0,0,0.4)",b="",E=c("rgba(0,0,0,0.87)"),v=c("rgba(255,255,255,0.87)"),$=c("rgb(255,255,255)"),M=["primary","accent","warn","background"],y="primary",C={accent:{"default":"A200","hue-1":"A100","hue-2":"A400","hue-3":"A700"},background:{"default":"A100","hue-1":"300","hue-2":"800","hue-3":"900"}},A={background:{"default":"800","hue-1":"600","hue-2":"300","hue-3":"900"}};M.forEach(function(e){var t={"default":"500","hue-1":"300","hue-2":"800","hue-3":"A100"};C[e]||(C[e]=t),A[e]||(A[e]=t)});var T=["50","100","200","300","400","500","600","700","800","900","A100","A200","A400","A700"],w=!1,k=null;e.$inject=["$mdColorPalette"],o.$inject=["$mdTheming","$interpolate","$log"],i.$inject=["$mdTheming"];var _={};a.$inject=["$injector"]}(),function(){function e(e,n,o,i,r){var a;return a={translate3d:function(e,t,n,o){function i(n){return r(e,{to:n||t,addClass:o.transitionOutClass,removeClass:o.transitionInClass}).start()}return r(e,{from:t,to:n,addClass:o.transitionInClass,removeClass:o.transitionOutClass}).start().then(function(){return i})},waitTransitionEnd:function(e,t){var r=3e3;return n(function(n,a){function d(t){t&&t.target!==e[0]||(t&&o.cancel(s),e.off(i.CSS.TRANSITIONEND,d),n())}t=t||{};var s=o(d,t.timeout||r);e.on(i.CSS.TRANSITIONEND,d)})},calculateTransformValues:function(e,t){function n(){var t=e?e.parent():null,n=t?t.parent():null;return n?a.clientRect(n):null}var o=t.element,i=t.bounds;if(o||i){var r=o?a.clientRect(o)||n():a.copyRect(i),d=a.copyRect(e[0].getBoundingClientRect()),s=a.centerPointFor(d),c=a.centerPointFor(r);return{centerX:c.x-s.x,centerY:c.y-s.y,scaleX:Math.round(100*Math.min(.5,r.width/d.width))/100,scaleY:Math.round(100*Math.min(.5,r.height/d.height))/100}}return{centerX:0,centerY:0,scaleX:.5,scaleY:.5}},calculateZoomToOrigin:function(n,o){var i="translate3d( {centerX}px, {centerY}px, 0 ) scale( {scaleX}, {scaleY} )",r=t.bind(null,e.supplant,i);return r(a.calculateTransformValues(n,o))},calculateSlideToOrigin:function(n,o){var i="translate3d( {centerX}px, {centerY}px, 0 )",r=t.bind(null,e.supplant,i);return r(a.calculateTransformValues(n,o))},toCss:function(e){function n(e,n,i){t.forEach(n.split(" "),function(e){o[e]=i})}var o={},r="left top right bottom width height x y min-width min-height max-width max-height";return t.forEach(e,function(e,a){if(!t.isUndefined(e))if(r.indexOf(a)>=0)o[a]=e+"px";else switch(a){case"transition":n(a,i.CSS.TRANSITION,e);break;case"transform":n(a,i.CSS.TRANSFORM,e);break;case"transformOrigin":n(a,i.CSS.TRANSFORM_ORIGIN,e)}}),o},toTransformCss:function(e,n,o){var r={};return t.forEach(i.CSS.TRANSFORM.split(" "),function(t){r[t]=e}),n&&(o=o||"all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1) !important",r.transition=o),r},copyRect:function(e,n){return e?(n=n||{},t.forEach("left top right bottom width height".split(" "),function(t){n[t]=Math.round(e[t])}),n.width=n.width||n.right-n.left,n.height=n.height||n.bottom-n.top,n):null},clientRect:function(e){var n=t.element(e)[0].getBoundingClientRect(),o=function(e){return e&&e.width>0&&e.height>0};return o(n)?a.copyRect(n):null},centerPointFor:function(e){return e?{x:Math.round(e.left+e.width/2),y:Math.round(e.top+e.height/2)}:{x:0,y:0}}}}t.module("material.core").factory("$$mdAnimate",["$q","$timeout","$mdConstant","$animateCss",function(t,n,o,i){return function(r){return e(r,t,n,o,i)}}])}(),function(){t.version.minor>=4?t.module("material.core.animate",[]):!function(){function e(e){return e.replace(/-[a-z]/g,function(e){return e.charAt(1).toUpperCase()})}var n=t.forEach,o=t.isDefined(document.documentElement.style.WebkitAppearance),i=o?"-webkit-":"",r=(o?"webkitTransitionEnd ":"")+"transitionend",a=(o?"webkitAnimationEnd ":"")+"animationend",d=["$document",function(e){return function(){return e[0].body.clientWidth+1}}],s=["$$rAF",function(e){return function(){var t=!1;return e(function(){t=!0}),function(n){t?n():e(n)}}}],c=["$q","$$rAFMutex",function(e,o){function i(e){this.setHost(e),this._doneCallbacks=[],this._runInAnimationFrame=o(),this._state=0}var r=0,a=1,d=2;return i.prototype={setHost:function(e){this.host=e||{}},done:function(e){this._state===d?e():this._doneCallbacks.push(e)},progress:t.noop,getPromise:function(){if(!this.promise){var t=this;this.promise=e(function(e,n){t.done(function(t){t===!1?n():e()})})}return this.promise},then:function(e,t){return this.getPromise().then(e,t)},"catch":function(e){return this.getPromise()["catch"](e)},"finally":function(e){return this.getPromise()["finally"](e)},pause:function(){this.host.pause&&this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&this.host.end(),this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel(),this._resolve(!1)},complete:function(e){var t=this;t._state===r&&(t._state=a,t._runInAnimationFrame(function(){t._resolve(e)}))},_resolve:function(e){this._state!==d&&(n(this._doneCallbacks,function(t){t(e)}),this._doneCallbacks.length=0,this._state=d)}},i}];t.module("material.core.animate",[]).factory("$$forceReflow",d).factory("$$AnimateRunner",c).factory("$$rAFMutex",s).factory("$animateCss",["$window","$$rAF","$$AnimateRunner","$$forceReflow","$$jqLite","$timeout","$animate",function(t,d,s,c,l,m,u){function h(o,d){var c=[],l=M(o),h=l&&u.enabled(),g=!1,C=!1;h&&(d.transitionStyle&&c.push([i+"transition",d.transitionStyle]),d.keyframeStyle&&c.push([i+"animation",d.keyframeStyle]),d.delay&&c.push([i+"transition-delay",d.delay+"s"]),d.duration&&c.push([i+"transition-duration",d.duration+"s"]),g=d.keyframeStyle||d.to&&(d.duration>0||d.transitionStyle),C=!!d.addClass||!!d.removeClass,y(o,!0));var A=h&&(g||C);v(o,d);var T,w,k=!1;return{close:t.close,start:function(){function t(){return k?void 0:(k=!0,T&&w&&o.off(T,w),p(o,d),E(o,d),n(c,function(t){l.style[e(t[0])]=""}),u.complete(!0),u)}var u=new s;return b(function(){if(y(o,!1),!A)return t();n(c,function(t){var n=t[0],o=t[1];l.style[e(n)]=o}),p(o,d);var s=f(o);if(0===s.duration)return t();var u=[];d.easing&&(s.transitionDuration&&u.push([i+"transition-timing-function",d.easing]),s.animationDuration&&u.push([i+"animation-timing-function",d.easing])),d.delay&&s.animationDelay&&u.push([i+"animation-delay",d.delay+"s"]),d.duration&&s.animationDuration&&u.push([i+"animation-duration",d.duration+"s"]),n(u,function(t){var n=t[0],o=t[1];l.style[e(n)]=o,c.push(t)});var h=s.delay,g=1e3*h,b=s.duration,E=1e3*b,v=Date.now();T=[],s.transitionDuration&&T.push(r),s.animationDuration&&T.push(a),T=T.join(" "),w=function(e){e.stopPropagation();var n=e.originalEvent||e,o=n.timeStamp||Date.now(),i=parseFloat(n.elapsedTime.toFixed(3));Math.max(o-v,0)>=g&&i>=b&&t()},o.on(T,w),$(o,d),m(t,g+1.5*E,!1)}),u}}}function p(e,t){t.addClass&&(l.addClass(e,t.addClass),t.addClass=null),t.removeClass&&(l.removeClass(e,t.removeClass),t.removeClass=null)}function f(e){function n(e){return o?"Webkit"+e.charAt(0).toUpperCase()+e.substr(1):e}var i=M(e),r=t.getComputedStyle(i),a=g(r[n("transitionDuration")]),d=g(r[n("animationDuration")]),s=g(r[n("transitionDelay")]),c=g(r[n("animationDelay")]);d*=parseInt(r[n("animationIterationCount")],10)||1;var l=Math.max(d,a),m=Math.max(c,s);return{duration:l,delay:m,animationDuration:d,transitionDuration:a,animationDelay:c,transitionDelay:s}}function g(e){var t=0,o=(e||"").split(/\s*,\s*/);return n(o,function(e){"s"==e.charAt(e.length-1)&&(e=e.substring(0,e.length-1)),e=parseFloat(e)||0,t=t?Math.max(e,t):e}),t}function b(e){C&&C(),A.push(e),C=d(function(){C=null;for(var e=c(),t=0;t<A.length;t++)A[t](e);A.length=0})}function E(e,t){v(e,t),$(e,t)}function v(e,t){t.from&&(e.css(t.from),t.from=null)}function $(e,t){t.to&&(e.css(t.to),t.to=null)}function M(e){for(var t=0;t<e.length;t++)if(1===e[t].nodeType)return e[t]}function y(t,n){var o=M(t),r=e(i+"transition-delay");o.style[r]=n?"-9999s":""}var C,A=[];return h}])}()}(),function(){t.module("material.components.autocomplete",["material.core","material.components.icon","material.components.virtualRepeat"])}(),function(){t.module("material.components.backdrop",["material.core"]).directive("mdBackdrop",["$mdTheming","$animate","$rootElement","$window","$log","$$rAF","$document",function(e,t,n,o,i,r,a){function d(d,c,l){var m=o.getComputedStyle(a[0].body);if("fixed"==m.position){var u=parseInt(m.height,10)+Math.abs(parseInt(m.top,10));c.css({height:u+"px"})}t.pin&&t.pin(c,n),r(function(){var t=c.parent()[0];if(t){"BODY"==t.nodeName&&c.css({position:"fixed"});var n=o.getComputedStyle(t);"static"==n.position&&i.warn(s)}c.parent().length&&e.inherit(c,c.parent())})}var s="<md-backdrop> may not work properly in a scrolled, static-positioned parent container.";return{restrict:"E",link:d}}])}(),function(){function e(e){return{restrict:"E",link:function(t,n,o){t.$on("$destroy",function(){e.destroy()})}}}function n(e){function n(e,n,r,a,d,s,c){function l(o,i,c,l){i=r.extractElementByName(i,"md-bottom-sheet"),i.attr("tabindex","-1"),c.disableBackdrop||(h=r.createBackdrop(o,"md-bottom-sheet-backdrop md-opaque"),h[0].tabIndex=-1,c.clickOutsideToClose&&h.on("click",function(){r.nextTick(d.cancel,!0)}),a.inherit(h,c.parent),e.enter(h,c.parent,null));var m=new u(i,c.parent);return c.bottomSheet=m,a.inherit(m.element,c.parent),c.disableParentScroll&&(c.restoreScroll=r.disableScrollAround(m.element,c.parent)),e.enter(m.element,c.parent,h).then(function(){var e=r.findFocusTarget(i)||t.element(i[0].querySelector("button")||i[0].querySelector("a")||i[0].querySelector("[ng-click]"))||h;c.escapeToClose&&(c.rootElementKeyupCallback=function(e){e.keyCode===n.KEY_CODE.ESCAPE&&r.nextTick(d.cancel,!0)},s.on("keyup",c.rootElementKeyupCallback),e&&e.focus())})}function m(t,n,o){var i=o.bottomSheet;return o.disableBackdrop||e.leave(h),e.leave(i.element).then(function(){o.disableParentScroll&&(o.restoreScroll(),delete o.restoreScroll),i.cleanup()})}function u(e,t){function a(t){e.css(n.CSS.TRANSITION_DURATION,"0ms")}function s(t){var o=t.pointer.distanceY;5>o&&(o=Math.max(-i,o/2)),e.css(n.CSS.TRANSFORM,"translate3d(0,"+(i+o)+"px,0)")}function l(t){if(t.pointer.distanceY>0&&(t.pointer.distanceY>20||Math.abs(t.pointer.velocityY)>o)){var i=e.prop("offsetHeight")-t.pointer.distanceY,a=Math.min(i/t.pointer.velocityY*.75,500);e.css(n.CSS.TRANSITION_DURATION,a+"ms"),r.nextTick(d.cancel,!0)}else e.css(n.CSS.TRANSITION_DURATION,""),e.css(n.CSS.TRANSFORM,"")}var m=c.register(t,"drag",{horizontal:!1});return t.on("$md.dragstart",a).on("$md.drag",s).on("$md.dragend",l),{element:e,cleanup:function(){m(),t.off("$md.dragstart",a),t.off("$md.drag",s),t.off("$md.dragend",l)}}}var h;return{themable:!0,onShow:l,onRemove:m,disableBackdrop:!1,escapeToClose:!0,clickOutsideToClose:!0,disableParentScroll:!0}}var o=.5,i=80;return n.$inject=["$animate","$mdConstant","$mdUtil","$mdTheming","$mdBottomSheet","$rootElement","$mdGesture"],e("$mdBottomSheet").setDefaults({methods:["disableParentScroll","escapeToClose","clickOutsideToClose"],options:n})}t.module("material.components.bottomSheet",["material.core","material.components.backdrop"]).directive("mdBottomSheet",e).provider("$mdBottomSheet",n),e.$inject=["$mdBottomSheet"],n.$inject=["$$interimElementProvider"]}(),function(){function e(e,n,o,i){function r(e){return t.isDefined(e.href)||t.isDefined(e.ngHref)||t.isDefined(e.ngLink)||t.isDefined(e.uiSref)}function a(e,t){if(r(t))return'<a class="md-button" ng-transclude></a>';var n="undefined"==typeof t.type?"button":t.type;return'<button class="md-button" type="'+n+'" ng-transclude></button>'}function d(a,d,s){n(d),e.attach(a,d),o.expectWithText(d,"aria-label"),r(s)&&t.isDefined(s.ngDisabled)&&a.$watch(s.ngDisabled,function(e){d.attr("tabindex",e?-1:0)}),d.on("click",function(e){s.disabled===!0&&(e.preventDefault(),e.stopImmediatePropagation())}),a.mouseActive=!1,d.on("mousedown",function(){a.mouseActive=!0,i(function(){a.mouseActive=!1},100)}).on("focus",function(){a.mouseActive===!1&&d.addClass("md-focused")}).on("blur",function(e){d.removeClass("md-focused")})}return{restrict:"EA",replace:!0,transclude:!0,template:a,link:d}}t.module("material.components.button",["material.core"]).directive("mdButton",e),e.$inject=["$mdButtonInkRipple","$mdTheming","$mdAria","$timeout"]}(),function(){function e(e){return{restrict:"E",link:function(t,n){e(n)}}}t.module("material.components.card",["material.core"]).directive("mdCard",e),
e.$inject=["$mdTheming"]}(),function(){function e(e,n,o,i,r,a){function d(d,c){var l=d.children(),m=c.hasOwnProperty("mdIndeterminate");return c.type="checkbox",c.tabindex=c.tabindex||"0",d.attr("role",c.type),d.on("click",function(e){this.hasAttribute("disabled")&&e.stopImmediatePropagation()}),l.on("focus",function(){d.focus()}),function(d,c,l,u){function h(e,t,n){l[e]&&d.$watch(l[e],function(e){n[e]&&c.attr(t,n[e])})}function p(e){var t=e.which||e.keyCode;t!==o.KEY_CODE.SPACE&&t!==o.KEY_CODE.ENTER||(e.preventDefault(),c.hasClass("md-focused")||c.addClass("md-focused"),f(e))}function f(e){c[0].hasAttribute("disabled")||d.$apply(function(){var t=l.ngChecked?l.checked:!u.$viewValue;u.$setViewValue(t,e&&e.type),u.$render()})}function g(){u.$viewValue&&!E?c.addClass(s):c.removeClass(s)}function b(e){E=e!==!1,E&&c.attr("aria-checked","mixed"),c.toggleClass("md-indeterminate",E)}var E;u=u||r.fakeNgModel(),i(c),m&&(b(),d.$watch(l.mdIndeterminate,b)),l.ngChecked&&d.$watch(d.$eval.bind(d,l.ngChecked),u.$setViewValue.bind(u)),h("ngDisabled","tabindex",{"true":"-1","false":l.tabindex}),n.expectWithText(c,"aria-label"),e.link.pre(d,{on:t.noop,0:{}},l,[u]),d.mouseActive=!1,c.on("click",f).on("keypress",p).on("mousedown",function(){d.mouseActive=!0,a(function(){d.mouseActive=!1},100)}).on("focus",function(){d.mouseActive===!1&&c.addClass("md-focused")}).on("blur",function(){c.removeClass("md-focused")}),u.$render=g}}e=e[0];var s="md-checked";return{restrict:"E",transclude:!0,require:"?ngModel",priority:210,template:'<div class="md-container" md-ink-ripple md-ink-ripple-checkbox><div class="md-icon"></div></div><div ng-transclude class="md-label"></div>',compile:d}}t.module("material.components.checkbox",["material.core"]).directive("mdCheckbox",e),e.$inject=["inputDirective","$mdAria","$mdConstant","$mdTheming","$mdUtil","$timeout"]}(),function(){t.module("material.components.chips",["material.core","material.components.autocomplete"])}(),function(){function e(e){function t(e,t){this.$scope=e,this.$element=t}return{restrict:"E",controller:["$scope","$element",t],link:function(t,o,i){o[0];e(o),t.$broadcast("$mdContentLoaded",o),n(o[0])}}}function n(e){t.element(e).on("$md.pressdown",function(t){"t"===t.pointer.type&&(t.$materialScrollFixed||(t.$materialScrollFixed=!0,0===e.scrollTop?e.scrollTop=1:e.scrollHeight===e.scrollTop+e.offsetHeight&&(e.scrollTop-=1)))})}t.module("material.components.content",["material.core"]).directive("mdContent",e),e.$inject=["$mdTheming"]}(),function(){!function(){function e(){return{template:'<table aria-hidden="true" class="md-calendar-day-header"><thead></thead></table><div class="md-calendar-scroll-mask"><md-virtual-repeat-container class="md-calendar-scroll-container" md-offset-size="'+(i-o)+'"><table role="grid" tabindex="0" class="md-calendar" aria-readonly="true"><tbody role="rowgroup" md-virtual-repeat="i in ctrl.items" md-calendar-month md-month-offset="$index" class="md-calendar-month" md-start-index="ctrl.getSelectedMonthIndex()" md-item-size="'+o+'"></tbody></table></md-virtual-repeat-container></div>',scope:{minDate:"=mdMinDate",maxDate:"=mdMaxDate",dateFilter:"=mdDateFilter"},require:["ngModel","mdCalendar"],controller:n,controllerAs:"ctrl",bindToController:!0,link:function(e,t,n,o){var i=o[0],r=o[1];r.configureNgModel(i)}}}function n(e,t,n,o,i,r,a,s,c,l,m){if(a(e),this.items={length:2e3},this.maxDate&&this.minDate){var u=s.getMonthDistance(this.minDate,this.maxDate)+1;u=Math.max(u,1),u+=1,this.items.length=u}if(this.$animate=o,this.$q=i,this.$mdInkRipple=l,this.$mdUtil=m,this.keyCode=r.KEY_CODE,this.dateUtil=s,this.dateLocale=c,this.$element=e,this.$scope=n,this.calendarElement=e[0].querySelector(".md-calendar"),this.calendarScroller=e[0].querySelector(".md-virtual-repeat-scroller"),this.today=this.dateUtil.createDateAtMidnight(),this.firstRenderableDate=this.dateUtil.incrementMonths(this.today,-this.items.length/2),this.minDate&&this.minDate>this.firstRenderableDate)this.firstRenderableDate=this.minDate;else if(this.maxDate){this.items.length-2;this.firstRenderableDate=this.dateUtil.incrementMonths(this.maxDate,-(this.items.length-2))}this.id=d++,this.ngModelCtrl=null,this.selectedDate=null,this.displayDate=null,this.focusDate=null,this.isInitialized=!1,this.isMonthTransitionInProgress=!1,t.tabindex||e.attr("tabindex","-1");var h=this;this.cellClickHandler=function(){var e=this;this.hasAttribute("data-timestamp")&&n.$apply(function(){var t=Number(e.getAttribute("data-timestamp"));h.setNgModelValue(h.dateUtil.createDateAtMidnight(t))})},this.attachCalendarEventListeners()}t.module("material.components.datepicker",["material.core","material.components.icon","material.components.virtualRepeat"]).directive("mdCalendar",e);var o=265,i=45,r="md-calendar-selected-date",a="md-focus",d=0;n.$inject=["$element","$attrs","$scope","$animate","$q","$mdConstant","$mdTheming","$$mdDateUtil","$mdDateLocale","$mdInkRipple","$mdUtil"],n.prototype.configureNgModel=function(e){this.ngModelCtrl=e;var t=this;e.$render=function(){t.changeSelectedDate(t.ngModelCtrl.$viewValue)}},n.prototype.buildInitialCalendarDisplay=function(){this.buildWeekHeader(),this.hideVerticalScrollbar(),this.displayDate=this.selectedDate||this.today,this.isInitialized=!0},n.prototype.hideVerticalScrollbar=function(){var e=this.$element[0],t=e.querySelector(".md-calendar-scroll-mask"),n=this.calendarScroller,o=e.querySelector(".md-calendar-day-header").clientWidth,i=n.offsetWidth-n.clientWidth;t.style.width=o+"px",n.style.width=o+i+"px",n.style.paddingRight=i+"px"},n.prototype.attachCalendarEventListeners=function(){this.$element.on("keydown",t.bind(this,this.handleKeyEvent))},n.prototype.handleKeyEvent=function(e){var t=this;this.$scope.$apply(function(){if(e.which==t.keyCode.ESCAPE||e.which==t.keyCode.TAB)return t.$scope.$emit("md-calendar-close"),void(e.which==t.keyCode.TAB&&e.preventDefault());if(e.which===t.keyCode.ENTER)return t.setNgModelValue(t.displayDate),void e.preventDefault();var n=t.getFocusDateFromKeyEvent(e);n&&(n=t.boundDateByMinAndMax(n),e.preventDefault(),e.stopPropagation(),t.changeDisplayDate(n).then(function(){t.focus(n)}))})},n.prototype.getFocusDateFromKeyEvent=function(e){var t=this.dateUtil,n=this.keyCode;switch(e.which){case n.RIGHT_ARROW:return t.incrementDays(this.displayDate,1);case n.LEFT_ARROW:return t.incrementDays(this.displayDate,-1);case n.DOWN_ARROW:return e.metaKey?t.incrementMonths(this.displayDate,1):t.incrementDays(this.displayDate,7);case n.UP_ARROW:return e.metaKey?t.incrementMonths(this.displayDate,-1):t.incrementDays(this.displayDate,-7);case n.PAGE_DOWN:return t.incrementMonths(this.displayDate,1);case n.PAGE_UP:return t.incrementMonths(this.displayDate,-1);case n.HOME:return t.getFirstDateOfMonth(this.displayDate);case n.END:return t.getLastDateOfMonth(this.displayDate);default:return null}},n.prototype.getSelectedMonthIndex=function(){return this.dateUtil.getMonthDistance(this.firstRenderableDate,this.selectedDate||this.today)},n.prototype.scrollToMonth=function(e){if(this.dateUtil.isValidDate(e)){var t=this.dateUtil.getMonthDistance(this.firstRenderableDate,e);this.calendarScroller.scrollTop=t*o}},n.prototype.setNgModelValue=function(e){this.$scope.$emit("md-calendar-change",e),this.ngModelCtrl.$setViewValue(e),this.ngModelCtrl.$render()},n.prototype.focus=function(e){var t=e||this.selectedDate||this.today,n=this.calendarElement.querySelector(".md-focus");n&&n.classList.remove(a);var o=this.getDateId(t),i=document.getElementById(o);i?(i.classList.add(a),i.focus()):this.focusDate=t},n.prototype.boundDateByMinAndMax=function(e){var t=e;return this.minDate&&e<this.minDate&&(t=new Date(this.minDate.getTime())),this.maxDate&&e>this.maxDate&&(t=new Date(this.maxDate.getTime())),t},n.prototype.changeSelectedDate=function(e){var t=this,n=this.selectedDate;this.selectedDate=e,this.changeDisplayDate(e).then(function(){if(n){var o=document.getElementById(t.getDateId(n));o&&(o.classList.remove(r),o.setAttribute("aria-selected","false"))}if(e){var i=document.getElementById(t.getDateId(e));i&&(i.classList.add(r),i.setAttribute("aria-selected","true"))}})},n.prototype.changeDisplayDate=function(e){if(!this.isInitialized)return this.buildInitialCalendarDisplay(),this.$q.when();if(!this.dateUtil.isValidDate(e)||this.isMonthTransitionInProgress)return this.$q.when();this.isMonthTransitionInProgress=!0;var t=this.animateDateChange(e);this.displayDate=e;var n=this;return t.then(function(){n.isMonthTransitionInProgress=!1}),t},n.prototype.animateDateChange=function(e){return this.scrollToMonth(e),this.$q.when()},n.prototype.buildWeekHeader=function(){for(var e=this.dateLocale.firstDayOfWeek,t=this.dateLocale.shortDays,n=document.createElement("tr"),o=0;7>o;o++){var i=document.createElement("th");i.textContent=t[(o+e)%7],n.appendChild(i)}this.$element.find("thead").append(n)},n.prototype.getDateId=function(e){return["md",this.id,e.getFullYear(),e.getMonth(),e.getDate()].join("-")}}()}(),function(){!function(){function e(){return{require:["^^mdCalendar","mdCalendarMonth"],scope:{offset:"=mdMonthOffset"},controller:n,controllerAs:"mdMonthCtrl",bindToController:!0,link:function(e,t,n,o){var i=o[0],r=o[1];r.calendarCtrl=i,r.generateContent(),e.$watch(function(){return r.offset},function(e,t){e!=t&&r.generateContent()})}}}function n(e,t,n){this.dateUtil=t,this.dateLocale=n,this.$element=e,this.calendarCtrl=null,this.offset,this.focusAfterAppend=null}t.module("material.components.datepicker").directive("mdCalendarMonth",e);var o="md-calendar-date-today",i="md-calendar-selected-date",r="md-focus";n.$inject=["$element","$$mdDateUtil","$mdDateLocale"],n.prototype.generateContent=function(){var e=this.calendarCtrl,t=this.dateUtil.incrementMonths(e.firstRenderableDate,this.offset);this.$element.empty(),this.$element.append(this.buildCalendarForMonth(t)),this.focusAfterAppend&&(this.focusAfterAppend.classList.add(r),this.focusAfterAppend.focus(),this.focusAfterAppend=null)},n.prototype.buildDateCell=function(e){var t=this.calendarCtrl,n=document.createElement("td");if(n.tabIndex=-1,n.classList.add("md-calendar-date"),n.setAttribute("role","gridcell"),e){n.setAttribute("tabindex","-1"),n.setAttribute("aria-label",this.dateLocale.longDateFormatter(e)),n.id=t.getDateId(e),n.setAttribute("data-timestamp",e.getTime()),this.dateUtil.isSameDay(e,t.today)&&n.classList.add(o),this.dateUtil.isValidDate(t.selectedDate)&&this.dateUtil.isSameDay(e,t.selectedDate)&&(n.classList.add(i),n.setAttribute("aria-selected","true"));var r=this.dateLocale.dates[e.getDate()];if(this.isDateEnabled(e)){var a=document.createElement("span");n.appendChild(a),a.classList.add("md-calendar-date-selection-indicator"),a.textContent=r,n.addEventListener("click",t.cellClickHandler),t.focusDate&&this.dateUtil.isSameDay(e,t.focusDate)&&(this.focusAfterAppend=n)}else n.classList.add("md-calendar-date-disabled"),n.textContent=r}return n},n.prototype.isDateEnabled=function(e){return this.dateUtil.isDateWithinRange(e,this.calendarCtrl.minDate,this.calendarCtrl.maxDate)&&(!t.isFunction(this.calendarCtrl.dateFilter)||this.calendarCtrl.dateFilter(e))},n.prototype.buildDateRow=function(e){var t=document.createElement("tr");return t.setAttribute("role","row"),t.setAttribute("aria-label",this.dateLocale.weekNumberFormatter(e)),t},n.prototype.buildCalendarForMonth=function(e){var t=this.dateUtil.isValidDate(e)?e:new Date,n=this.dateUtil.getFirstDateOfMonth(t),o=this.getLocaleDay_(n),i=this.dateUtil.getNumberOfDaysInMonth(t),r=document.createDocumentFragment(),a=1,d=this.buildDateRow(a);r.appendChild(d);var s=this.offset===this.calendarCtrl.items.length-1,c=0,l=document.createElement("td");if(l.classList.add("md-calendar-month-label"),this.calendarCtrl.maxDate&&n>this.calendarCtrl.maxDate&&l.classList.add("md-calendar-month-label-disabled"),l.textContent=this.dateLocale.monthHeaderFormatter(t),2>=o){l.setAttribute("colspan","7");var m=this.buildDateRow();if(m.appendChild(l),r.insertBefore(m,d),s)return r}else c=2,l.setAttribute("colspan","2"),d.appendChild(l);for(var u=c;o>u;u++)d.appendChild(this.buildDateCell());for(var h=o,p=n,f=1;i>=f;f++){if(7===h){if(s)return r;h=0,a++,d=this.buildDateRow(a),r.appendChild(d)}p.setDate(f);var g=this.buildDateCell(p);d.appendChild(g),h++}for(;d.childNodes.length<7;)d.appendChild(this.buildDateCell());for(;r.childNodes.length<6;){for(var b=this.buildDateRow(),u=0;7>u;u++)b.appendChild(this.buildDateCell());r.appendChild(b)}return r},n.prototype.getLocaleDay_=function(e){return(e.getDay()+(7-this.dateLocale.firstDayOfWeek))%7}}()}(),function(){!function(){t.module("material.components.datepicker").config(["$provide",function(e){function t(){this.months=null,this.shortMonths=null,this.days=null,this.shortDays=null,this.dates=null,this.firstDayOfWeek=0,this.formatDate=null,this.parseDate=null,this.monthHeaderFormatter=null,this.weekNumberFormatter=null,this.longDateFormatter=null,this.msgCalendar="",this.msgOpenCalendar=""}t.prototype.$get=function(e){function t(e){if(!e)return"";var t=e.toLocaleTimeString(),n=e;return 0!=e.getHours()||-1===t.indexOf("11:")&&-1===t.indexOf("23:")||(n=new Date(e.getFullYear(),e.getMonth(),e.getDate(),1,0,0)),n.toLocaleDateString()}function n(e){return new Date(e)}function o(e){e=e.trim();var t=/^(([a-zA-Z]{3,}|[0-9]{1,4})([ \.,]+|[\/\-])){2}([a-zA-Z]{3,}|[0-9]{1,4})$/;return t.test(e)}function i(e){return u.shortMonths[e.getMonth()]+" "+e.getFullYear()}function r(e){return"Week "+e}function a(e){return[u.days[e.getDay()],u.months[e.getMonth()],u.dates[e.getDate()],e.getFullYear()].join(" ")}for(var d=e.DATETIME_FORMATS.DAY.map(function(e){return e[0]}),s=Array(32),c=1;31>=c;c++)s[c]=c;var l="Calendar",m="Open calendar",u={months:this.months||e.DATETIME_FORMATS.MONTH,shortMonths:this.shortMonths||e.DATETIME_FORMATS.SHORTMONTH,days:this.days||e.DATETIME_FORMATS.DAY,shortDays:this.shortDays||d,dates:this.dates||s,firstDayOfWeek:this.firstDayOfWeek||0,formatDate:this.formatDate||t,parseDate:this.parseDate||n,isDateComplete:this.isDateComplete||o,monthHeaderFormatter:this.monthHeaderFormatter||i,weekNumberFormatter:this.weekNumberFormatter||r,longDateFormatter:this.longDateFormatter||a,msgCalendar:this.msgCalendar||l,msgOpenCalendar:this.msgOpenCalendar||m};return u},t.prototype.$get.$inject=["$locale"],e.provider("$mdDateLocale",new t)}])}()}(),function(){!function(){function n(){return{template:'<md-button class="md-datepicker-button md-icon-button" type="button" tabindex="-1" aria-hidden="true" ng-click="ctrl.openCalendarPane($event)"><md-icon class="md-datepicker-calendar-icon" md-svg-icon="md-calendar"></md-icon></md-button><div class="md-datepicker-input-container" ng-class="{\'md-datepicker-focused\': ctrl.isFocused}"><input class="md-datepicker-input" aria-haspopup="true" ng-focus="ctrl.setFocused(true)" ng-blur="ctrl.setFocused(false)"><md-button type="button" md-no-ink class="md-datepicker-triangle-button md-icon-button" ng-click="ctrl.openCalendarPane($event)" aria-label="{{::ctrl.dateLocale.msgOpenCalendar}}"><div class="md-datepicker-expand-triangle"></div></md-button></div><div class="md-datepicker-calendar-pane md-whiteframe-z1"><div class="md-datepicker-input-mask"><div class="md-datepicker-input-mask-opaque"></div></div><div class="md-datepicker-calendar"><md-calendar role="dialog" aria-label="{{::ctrl.dateLocale.msgCalendar}}" md-min-date="ctrl.minDate" md-max-date="ctrl.maxDate"md-date-filter="ctrl.dateFilter"ng-model="ctrl.date" ng-if="ctrl.isCalendarOpen"></md-calendar></div></div>',require:["ngModel","mdDatepicker","?^mdInputContainer"],scope:{minDate:"=mdMinDate",maxDate:"=mdMaxDate",placeholder:"@mdPlaceholder",dateFilter:"=mdDateFilter"},controller:o,controllerAs:"ctrl",bindToController:!0,link:function(e,t,n,o){var i=o[0],r=o[1],a=o[2];if(a)throw Error("md-datepicker should not be placed inside md-input-container.");r.configureNgModel(i)}}}function o(e,n,o,i,r,a,d,s,c,l,m,u){this.$compile=i,this.$timeout=r,this.$window=a,this.dateLocale=l,this.dateUtil=m,this.$mdConstant=d,this.$mdUtil=c,this.$$rAF=u,this.documentElement=t.element(document.documentElement),this.ngModelCtrl=null,this.inputElement=n[0].querySelector("input"),this.ngInputElement=t.element(this.inputElement),this.inputContainer=n[0].querySelector(".md-datepicker-input-container"),this.calendarPane=n[0].querySelector(".md-datepicker-calendar-pane"),this.calendarButton=n[0].querySelector(".md-datepicker-button"),this.inputMask=n[0].querySelector(".md-datepicker-input-mask-opaque"),this.$element=n,this.$attrs=o,this.$scope=e,this.date=null,this.isFocused=!1,this.isDisabled,this.setDisabled(n[0].disabled||t.isString(o.disabled)),this.isCalendarOpen=!1,this.calendarPaneOpenedFrom=null,this.calendarPane.id="md-date-pane"+c.nextUid(),s(n),this.bodyClickHandler=t.bind(this,this.handleBodyClick),this.windowResizeHandler=c.debounce(t.bind(this,this.closeCalendarPane),100),o.tabindex||n.attr("tabindex","-1"),this.installPropertyInterceptors(),this.attachChangeListeners(),this.attachInteractionListeners();var h=this;e.$on("$destroy",function(){h.detachCalendarPane()})}t.module("material.components.datepicker").directive("mdDatepicker",n);var i=3,r="md-datepicker-invalid",a=500,d=368,s=360;o.$inject=["$scope","$element","$attrs","$compile","$timeout","$window","$mdConstant","$mdTheming","$mdUtil","$mdDateLocale","$$mdDateUtil","$$rAF"],o.prototype.configureNgModel=function(e){this.ngModelCtrl=e;var t=this;e.$render=function(){var e=t.ngModelCtrl.$viewValue;if(e&&!(e instanceof Date))throw Error("The ng-model for md-datepicker must be a Date instance. Currently the model is a: "+typeof e);t.date=e,t.inputElement.value=t.dateLocale.formatDate(e),t.resizeInputElement(),t.updateErrorState()}},o.prototype.attachChangeListeners=function(){var e=this;e.$scope.$on("md-calendar-change",function(t,n){e.ngModelCtrl.$setViewValue(n),e.date=n,e.inputElement.value=e.dateLocale.formatDate(n),e.closeCalendarPane(),e.resizeInputElement(),e.updateErrorState()}),e.ngInputElement.on("input",t.bind(e,e.resizeInputElement)),e.ngInputElement.on("input",e.$mdUtil.debounce(e.handleInputEvent,a,e))},o.prototype.attachInteractionListeners=function(){var e=this,t=this.$scope,n=this.$mdConstant.KEY_CODE;e.ngInputElement.on("keydown",function(o){o.altKey&&o.keyCode==n.DOWN_ARROW&&(e.openCalendarPane(o),t.$digest())}),t.$on("md-calendar-close",function(){e.closeCalendarPane()})},o.prototype.installPropertyInterceptors=function(){var e=this;if(this.$attrs.ngDisabled){var t=this.$scope.$parent;t&&t.$watch(this.$attrs.ngDisabled,function(t){e.setDisabled(t)})}Object.defineProperty(this,"placeholder",{get:function(){return e.inputElement.placeholder},set:function(t){e.inputElement.placeholder=t||""}})},o.prototype.setDisabled=function(e){this.isDisabled=e,this.inputElement.disabled=e,this.calendarButton.disabled=e},o.prototype.updateErrorState=function(e){var n=e||this.date;if(this.clearErrorState(),this.dateUtil.isValidDate(n)){if(n=this.dateUtil.createDateAtMidnight(n),this.dateUtil.isValidDate(this.minDate)){var o=this.dateUtil.createDateAtMidnight(this.minDate);this.ngModelCtrl.$setValidity("mindate",n>=o)}if(this.dateUtil.isValidDate(this.maxDate)){var i=this.dateUtil.createDateAtMidnight(this.maxDate);this.ngModelCtrl.$setValidity("maxdate",i>=n)}t.isFunction(this.dateFilter)&&this.ngModelCtrl.$setValidity("filtered",this.dateFilter(n))}else this.ngModelCtrl.$setValidity("valid",null==n);this.ngModelCtrl.$valid||this.inputContainer.classList.add(r)},o.prototype.clearErrorState=function(){this.inputContainer.classList.remove(r),["mindate","maxdate","filtered","valid"].forEach(function(e){this.ngModelCtrl.$setValidity(e,!0)},this)},o.prototype.resizeInputElement=function(){this.inputElement.size=this.inputElement.value.length+i},o.prototype.handleInputEvent=function(){var e=this.inputElement.value,t=e?this.dateLocale.parseDate(e):null;this.dateUtil.setDateTimeToMidnight(t);var n=""==e||this.dateUtil.isValidDate(t)&&this.dateLocale.isDateComplete(e)&&this.isDateEnabled(t);n&&(this.ngModelCtrl.$setViewValue(t),this.date=t),this.updateErrorState(t)},o.prototype.isDateEnabled=function(e){return this.dateUtil.isDateWithinRange(e,this.minDate,this.maxDate)&&(!t.isFunction(this.dateFilter)||this.dateFilter(e))},o.prototype.attachCalendarPane=function(){var e=this.calendarPane;e.style.transform="",this.$element.addClass("md-datepicker-open");var t=this.inputContainer.getBoundingClientRect(),n=document.body.getBoundingClientRect(),o=t.top-n.top,i=t.left-n.left,r=n.top<0&&0==document.body.scrollTop?-n.top:document.body.scrollTop,a=n.left<0&&0==document.body.scrollLeft?-n.left:document.body.scrollLeft,c=r+this.$window.innerHeight,l=a+this.$window.innerWidth;if(i+s>l){if(l-s>0)i=l-s;else{i=a;var m=this.$window.innerWidth/s;e.style.transform="scale("+m+")"}e.classList.add("md-datepicker-pos-adjusted")}o+d>c&&c-d>r&&(o=c-d,e.classList.add("md-datepicker-pos-adjusted")),e.style.left=i+"px",e.style.top=o+"px",document.body.appendChild(e),this.inputMask.style.left=t.width+"px",this.$$rAF(function(){e.classList.add("md-pane-open")})},o.prototype.detachCalendarPane=function(){this.$element.removeClass("md-datepicker-open"),this.calendarPane.classList.remove("md-pane-open"),this.calendarPane.classList.remove("md-datepicker-pos-adjusted"),this.isCalendarOpen&&this.$mdUtil.enableScrolling(),this.calendarPane.parentNode&&this.calendarPane.parentNode.removeChild(this.calendarPane)},o.prototype.openCalendarPane=function(t){if(!this.isCalendarOpen&&!this.isDisabled){this.isCalendarOpen=!0,this.calendarPaneOpenedFrom=t.target,this.$mdUtil.disableScrollAround(this.calendarPane),this.attachCalendarPane(),this.focusCalendar();var n=this;this.$mdUtil.nextTick(function(){n.documentElement.on("click touchstart",n.bodyClickHandler)},!1),e.addEventListener("resize",this.windowResizeHandler)}},o.prototype.closeCalendarPane=function(){this.isCalendarOpen&&(this.detachCalendarPane(),this.isCalendarOpen=!1,this.calendarPaneOpenedFrom.focus(),this.calendarPaneOpenedFrom=null,this.ngModelCtrl.$setTouched(),this.documentElement.off("click touchstart",this.bodyClickHandler),e.removeEventListener("resize",this.windowResizeHandler))},o.prototype.getCalendarCtrl=function(){return t.element(this.calendarPane.querySelector("md-calendar")).controller("mdCalendar")},o.prototype.focusCalendar=function(){var e=this;this.$mdUtil.nextTick(function(){e.getCalendarCtrl().focus()},!1)},o.prototype.setFocused=function(e){e||this.ngModelCtrl.$setTouched(),this.isFocused=e},o.prototype.handleBodyClick=function(e){if(this.isCalendarOpen){var t=this.$mdUtil.getClosest(e.target,"md-calendar");t||this.closeCalendarPane(),this.$scope.$digest()}}}()}(),function(){!function(){t.module("material.components.datepicker").factory("$$mdDateUtil",function(){function e(e){return new Date(e.getFullYear(),e.getMonth(),1)}function n(e){return new Date(e.getFullYear(),e.getMonth()+1,0).getDate()}function o(e){return new Date(e.getFullYear(),e.getMonth()+1,1)}function i(e){return new Date(e.getFullYear(),e.getMonth()-1,1)}function r(e,t){return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()}function a(e,t){return e.getDate()==t.getDate()&&r(e,t)}function d(e,t){var n=o(e);return r(n,t)}function s(e,t){var n=i(e);return r(t,n)}function c(e,t){return b((e.getTime()+t.getTime())/2)}function l(t){var n=e(t);return Math.floor((n.getDay()+t.getDate()-1)/7)}function m(e,t){return new Date(e.getFullYear(),e.getMonth(),e.getDate()+t)}function u(e,t){var o=new Date(e.getFullYear(),e.getMonth()+t,1),i=n(o);return i<e.getDate()?o.setDate(i):o.setDate(e.getDate()),o}function h(e,t){return 12*(t.getFullYear()-e.getFullYear())+(t.getMonth()-e.getMonth())}function p(e){return new Date(e.getFullYear(),e.getMonth(),n(e))}function f(e){return null!=e&&e.getTime&&!isNaN(e.getTime())}function g(e){f(e)&&e.setHours(0,0,0,0)}function b(e){var n;return n=t.isUndefined(e)?new Date:new Date(e),g(n),n}function E(e,t,n){var o=b(e),i=f(t)?b(t):null,r=f(n)?b(n):null;return(!i||o>=i)&&(!r||r>=o)}return{getFirstDateOfMonth:e,getNumberOfDaysInMonth:n,getDateInNextMonth:o,getDateInPreviousMonth:i,isInNextMonth:d,isInPreviousMonth:s,getDateMidpoint:c,isSameMonthAndYear:r,getWeekOfMonth:l,incrementDays:m,incrementMonths:u,getLastDateOfMonth:p,isSameDay:a,getMonthDistance:h,isValidDate:f,setDateTimeToMidnight:g,createDateAtMidnight:b,isDateWithinRange:E}})}()}(),function(){function e(e,n,o){return{restrict:"E",link:function(i,r,a){n(r),e(function(){function e(){r.toggleClass("md-content-overflow",a.scrollHeight>a.clientHeight)}var n,a=r[0].querySelector("md-dialog-content");a&&(n=a.getElementsByTagName("img"),e(),t.element(n).on("load",e)),i.$on("$destroy",function(){o.destroy(r)})})}}}function o(e){function o(e,t,n){return{template:['<md-dialog md-theme="{{ dialog.theme }}" aria-label="{{ dialog.ariaLabel }}" ng-class="dialog.css">','  <md-dialog-content class="md-dialog-content" role="document" tabIndex="-1">','    <h2 class="md-title">{{ dialog.title }}</h2>','    <div ng-if="::dialog.mdHtmlContent" class="md-dialog-content-body" ','        ng-bind-html="::dialog.mdHtmlContent"></div>','    <div ng-if="::!dialog.mdHtmlContent" class="md-dialog-content-body">',"      <p>{{::dialog.mdTextContent}}</p>","    </div>",'    <md-input-container md-no-float ng-if="::dialog.$type == \'prompt\'" class="md-prompt-input-container">','      <input ng-keypress="dialog.keypress($event)" md-autofocus ng-model="dialog.result" placeholder="{{::dialog.placeholder}}">',"    </md-input-container>","  </md-dialog-content>","  <md-dialog-actions>",'    <md-button ng-if="dialog.$type === \'confirm\' || dialog.$type === \'prompt\'"               ng-click="dialog.abort()" class="md-primary">',"      {{ dialog.cancel }}","    </md-button>",'    <md-button ng-click="dialog.hide()" class="md-primary" md-autofocus="dialog.$type===\'alert\'">',"      {{ dialog.ok }}","    </md-button>","  </md-dialog-actions>","</md-dialog>"].join("").replace(/\s\s+/g,""),controller:function(){this.hide=function(){e.hide("prompt"===this.$type?this.result:!0)},this.abort=function(){e.cancel()},this.keypress=function(t){t.keyCode===n.KEY_CODE.ENTER&&e.hide(this.result)}},controllerAs:"dialog",bindToController:!0,theme:t.defaultTheme()}}function i(e,o,i,d,s,c,l,m,u,h){function p(e,t,n,o){if(o){if(o.mdHtmlContent=o.htmlContent||n.htmlContent||"",o.mdTextContent=o.textContent||n.textContent||o.content||n.content||"",o.mdHtmlContent&&!h.has("$sanitize"))throw Error("The ngSanitize module must be loaded in order to use htmlContent.");if(o.mdHtmlContent&&o.mdTextContent)throw Error("md-dialog cannot have both `htmlContent` and `textContent`")}}function f(e,n,o,r){function a(){var e=n[0].querySelectorAll(".md-actions");e.length>0&&u.warn("Using a class of md-actions is deprecated, please use <md-dialog-actions>.")}function d(){function e(){var e=n[0].querySelector(".dialog-close");if(!e){var o=n[0].querySelectorAll(".md-actions button, md-dialog-actions button");e=o[o.length-1]}return t.element(e)}if(o.focusOnOpen){var r=i.findFocusTarget(n)||e();r.focus()}}return t.element(c[0].body).addClass("md-dialog-is-showing"),b(o),$(n.find("md-dialog"),o),v(e,n,o),C(n,o).then(function(){E(n,o),M(n,o),a(),d()})}function g(e,n,o){function i(){return A(n,o)}function d(){t.element(c[0].body).removeClass("md-dialog-is-showing"),n.remove(),o.$destroy||o.origin.focus()}return o.deactivateListeners(),o.unlockScreenReader(),o.hideBackdrop(o.$destroy),r&&r.parentNode&&r.parentNode.removeChild(r),a&&a.parentNode&&a.parentNode.removeChild(a),o.$destroy?d():i().then(d)}function b(e){function o(e,o){var i=t.element(e||{});if(i&&i.length){var r={top:0,left:0,height:0,width:0},a=t.isFunction(i[0].getBoundingClientRect);return t.extend(o||{},{element:a?i:n,bounds:a?i[0].getBoundingClientRect():t.extend({},r,i[0]),focus:t.bind(i,i.focus)})}}function i(e,n){if(t.isString(e)){var o=e,i=c[0].querySelectorAll(o);e=i.length?i[0]:null}return t.element(e||n)}e.origin=t.extend({element:null,bounds:null,focus:t.noop},e.origin||{}),e.parent=i(e.parent,m),e.closeTo=o(i(e.closeTo)),e.openFrom=o(i(e.openFrom)),e.targetEvent&&(e.origin=o(e.targetEvent.target,e.origin))}function E(n,o){var r=t.element(l),a=i.debounce(function(){y(n,o)},60),s=[],c=function(){var t="alert"==o.$type?e.hide:e.cancel;i.nextTick(t,!0)};if(o.escapeToClose){var m=o.parent,u=function(e){e.keyCode===d.KEY_CODE.ESCAPE&&(e.stopPropagation(),e.preventDefault(),c())};n.on("keydown",u),m.on("keydown",u),s.push(function(){n.off("keydown",u),m.off("keydown",u)})}if(r.on("resize",a),s.push(function(){r.off("resize",a)}),o.clickOutsideToClose){var h,p=n,f=function(e){h=e.target},g=function(e){h===p[0]&&e.target===p[0]&&(e.stopPropagation(),e.preventDefault(),c())};p.on("mousedown",f),p.on("mouseup",g),s.push(function(){p.off("mousedown",f),p.off("mouseup",g)})}o.deactivateListeners=function(){s.forEach(function(e){e()}),o.deactivateListeners=null}}function v(e,t,n){n.disableParentScroll&&(n.restoreScroll=i.disableScrollAround(t,n.parent)),n.hasBackdrop&&(n.backdrop=i.createBackdrop(e,"md-dialog-backdrop md-opaque"),s.enter(n.backdrop,n.parent)),n.hideBackdrop=function(e){n.backdrop&&(e?n.backdrop.remove():s.leave(n.backdrop)),n.disableParentScroll&&(n.restoreScroll(),delete n.restoreScroll),n.hideBackdrop=null}}function $(e,t){var n="alert"===t.$type?"alertdialog":"dialog",d=e.find("md-dialog-content"),s=e.attr("id"),c="dialogContent_"+(s||i.nextUid());e.attr({role:n,tabIndex:"-1"}),0===d.length&&(d=e,s&&(c=s)),d.attr("id",c),e.attr("aria-describedby",c),t.ariaLabel?o.expect(e,"aria-label",t.ariaLabel):o.expectAsync(e,"aria-label",function(){var e=d.text().split(/\s+/);return e.length>3&&(e=e.slice(0,3).concat("...")),e.join(" ")}),r=document.createElement("div"),r.classList.add("md-dialog-focus-trap"),r.tabIndex=0,a=r.cloneNode(!1);var l=function(){e.focus()};r.addEventListener("focus",l),a.addEventListener("focus",l),e[0].parentNode.insertBefore(r,e[0]),e.after(a)}function M(e,t){function n(e){for(;e.parentNode;){if(e===document.body)return;for(var t=e.parentNode.children,i=0;i<t.length;i++)e===t[i]||T(t[i],["SCRIPT","STYLE"])||t[i].setAttribute("aria-hidden",o);n(e=e.parentNode)}}var o=!0;n(e[0]),t.unlockScreenReader=function(){o=!1,n(e[0]),t.unlockScreenReader=null}}function y(e,t){var n="fixed"==l.getComputedStyle(c[0].body).position,o=t.backdrop?l.getComputedStyle(t.backdrop[0]):null,r=o?Math.min(c[0].body.clientHeight,Math.ceil(Math.abs(parseInt(o.height,10)))):0;return e.css({top:(n?i.scrollTop(t.parent):0)+"px",height:r?r+"px":"100%"}),e}function C(e,t){t.parent.append(e),y(e,t);var n=e.find("md-dialog"),o=i.dom.animator,r=o.calculateZoomToOrigin,a={transitionInClass:"md-transition-in",transitionOutClass:"md-transition-out"},d=o.toTransformCss(r(n,t.openFrom||t.origin)),s=o.toTransformCss("");return t.fullscreen&&n.addClass("md-dialog-fullscreen"),o.translate3d(n,d,s,a).then(function(e){return t.reverseAnimate=function(){return delete t.reverseAnimate,t.closeTo?(a={transitionInClass:"md-transition-out",transitionOutClass:"md-transition-in"},d=s,s=o.toTransformCss(r(n,t.closeTo)),o.translate3d(n,d,s,a)):e(o.toTransformCss(r(n,t.origin)))},!0})}function A(e,t){return t.reverseAnimate()}function T(e,t){return-1!==t.indexOf(e.nodeName)?!0:void 0}return{hasBackdrop:!0,isolateScope:!0,onShow:f,onShowing:p,onRemove:g,clickOutsideToClose:!1,escapeToClose:!0,targetEvent:null,closeTo:null,openFrom:null,focusOnOpen:!0,disableParentScroll:!0,autoWrap:!0,fullscreen:!1,transformTemplate:function(e,t){function n(e){return t.autoWrap&&!/<\/md-dialog>/g.test(e)?"<md-dialog>"+(e||"")+"</md-dialog>":e||""}return'<div class="md-dialog-container" tabindex="-1">'+n(e)+"</div>"}}}var r,a;return o.$inject=["$mdDialog","$mdTheming","$mdConstant"],i.$inject=["$mdDialog","$mdAria","$mdUtil","$mdConstant","$animate","$document","$window","$rootElement","$log","$injector"],e("$mdDialog").setDefaults({methods:["disableParentScroll","hasBackdrop","clickOutsideToClose","escapeToClose","targetEvent","closeTo","openFrom","parent","fullscreen"],
options:i}).addPreset("alert",{methods:["title","htmlContent","textContent","content","ariaLabel","ok","theme","css"],options:o}).addPreset("confirm",{methods:["title","htmlContent","textContent","content","ariaLabel","ok","cancel","theme","css"],options:o}).addPreset("prompt",{methods:["title","htmlContent","textContent","content","placeholder","ariaLabel","ok","cancel","theme","css"],options:o})}t.module("material.components.dialog",["material.core","material.components.backdrop"]).directive("mdDialog",e).provider("$mdDialog",o),e.$inject=["$$rAF","$mdTheming","$mdDialog"],o.$inject=["$$interimElementProvider"]}(),function(){function e(e){return{restrict:"E",link:e}}t.module("material.components.divider",["material.core"]).directive("mdDivider",e),e.$inject=["$mdTheming"]}(),function(){!function(){function e(){return{restrict:"E",require:["^?mdFabSpeedDial","^?mdFabToolbar"],compile:function(e,n){var o=e.children(),i=!1;t.forEach(["","data-","x-"],function(e){i=i||!!o.attr(e+"ng-repeat")}),i?o.addClass("md-fab-action-item"):o.wrap('<div class="md-fab-action-item">')}}}t.module("material.components.fabActions",["material.core"]).directive("mdFabActions",e)}()}(),function(){!function(){function e(e,n,o,i,r,a){function d(){N.direction=N.direction||"down",N.isOpen=N.isOpen||!1,l(),n.addClass("md-animations-waiting")}function s(){var o=["click","focusin","focusout"];t.forEach(o,function(e){n.on(e,c)}),e.$on("$destroy",function(){t.forEach(o,function(e){n.off(e,c)}),p()})}function c(e){"click"==e.type&&k(e),"focusout"!=e.type||S||(S=a(function(){N.close()},100,!1)),"focusin"==e.type&&S&&(a.cancel(S),S=null)}function l(){N.currentActionIndex=-1}function m(){e.$watch("vm.direction",function(e,t){o.removeClass(n,"md-"+t),o.addClass(n,"md-"+e),l()});var t,i;e.$watch("vm.isOpen",function(e){l(),t&&i||(t=_(),i=x()),e?h():p();var r=e?"md-is-open":"",a=e?"":"md-is-open";t.attr("aria-haspopup",!0),t.attr("aria-expanded",e),i.attr("aria-hidden",!e),o.setClass(n,r,a)})}function u(){n[0].scrollHeight>0?o.addClass(n,"md-animations-ready").then(function(){n.removeClass("md-animations-waiting")}):10>H&&(a(u,100),H+=1)}function h(){n.on("keydown",g),i.nextTick(function(){t.element(document).on("click touchend",f)})}function p(){n.off("keydown",g),t.element(document).off("click touchend",f)}function f(e){if(e.target){var t=i.getClosest(e.target,"md-fab-trigger"),n=i.getClosest(e.target,"md-fab-actions");t||n||N.close()}}function g(e){switch(e.which){case r.KEY_CODE.ESCAPE:return N.close(),e.preventDefault(),!1;case r.KEY_CODE.LEFT_ARROW:return M(e),!1;case r.KEY_CODE.UP_ARROW:return y(e),!1;case r.KEY_CODE.RIGHT_ARROW:return C(e),!1;case r.KEY_CODE.DOWN_ARROW:return A(e),!1}}function b(e){v(e,-1)}function E(e){v(e,1)}function v(e,n){var o=$();N.currentActionIndex=N.currentActionIndex+n,N.currentActionIndex=Math.min(o.length-1,N.currentActionIndex),N.currentActionIndex=Math.max(0,N.currentActionIndex);var i=t.element(o[N.currentActionIndex]).children()[0];t.element(i).attr("tabindex",0),i.focus(),e.preventDefault(),e.stopImmediatePropagation()}function $(){var e=x()[0].querySelectorAll(".md-fab-action-item");return t.forEach(e,function(e){t.element(t.element(e).children()[0]).attr("tabindex",-1)}),e}function M(e){"left"===N.direction?E(e):b(e)}function y(e){"down"===N.direction?b(e):E(e)}function C(e){"left"===N.direction?b(e):E(e)}function A(e){"up"===N.direction?b(e):E(e)}function T(e){return i.getClosest(e,"md-fab-trigger")}function w(e){return i.getClosest(e,"md-fab-actions")}function k(e){T(e.target)&&N.toggle(),w(e.target)&&N.close()}function _(){return n.find("md-fab-trigger")}function x(){return n.find("md-fab-actions")}var N=this;N.open=function(){e.$evalAsync("vm.isOpen = true")},N.close=function(){e.$evalAsync("vm.isOpen = false"),n.find("md-fab-trigger")[0].focus()},N.toggle=function(){e.$evalAsync("vm.isOpen = !vm.isOpen")},d(),s(),m();var H=0;u();var S}t.module("material.components.fabShared",["material.core"]).controller("FabController",e),e.$inject=["$scope","$element","$animate","$mdUtil","$mdConstant","$timeout"]}()}(),function(){!function(){function n(){function e(e,t){t.prepend('<div class="md-css-variables"></div>')}return{restrict:"E",scope:{direction:"@?mdDirection",isOpen:"=?mdOpen"},bindToController:!0,controller:"FabController",controllerAs:"vm",link:e}}function o(n){function o(e){n(e,r,!1)}function i(n){if(!n.hasClass("md-animations-waiting")||n.hasClass("md-animations-ready")){var o=n[0],i=n.controller("mdFabSpeedDial"),r=o.querySelectorAll(".md-fab-action-item"),a=o.querySelector("md-fab-trigger"),d=o.querySelector(".md-css-variables"),s=parseInt(e.getComputedStyle(d).zIndex);t.forEach(r,function(e,t){var n=e.style;n.transform=n.webkitTransform="",n.transitionDelay="",n.opacity=1,n.zIndex=r.length-t+s}),a.style.zIndex=s+r.length+1,i.isOpen||t.forEach(r,function(e,t){var n,o,r=e.style,d=(a.clientHeight-e.clientHeight)/2,s=(a.clientWidth-e.clientWidth)/2;switch(i.direction){case"up":n=e.scrollHeight*(t+1)+d,o="Y";break;case"down":n=-(e.scrollHeight*(t+1)+d),o="Y";break;case"left":n=e.scrollWidth*(t+1)+s,o="X";break;case"right":n=-(e.scrollWidth*(t+1)+s),o="X"}var c="translate"+o+"("+n+"px)";r.transform=r.webkitTransform=c})}}return{addClass:function(e,t,n){e.hasClass("md-fling")?(i(e),o(n)):n()},removeClass:function(e,t,n){i(e),o(n)}}}function i(n){function o(e){n(e,r,!1)}function i(n){var o=n[0],i=n.controller("mdFabSpeedDial"),r=o.querySelectorAll(".md-fab-action-item"),d=o.querySelector(".md-css-variables"),s=parseInt(e.getComputedStyle(d).zIndex);t.forEach(r,function(e,t){var n=e.style,o=t*a;n.opacity=i.isOpen?1:0,n.transform=n.webkitTransform=i.isOpen?"scale(1)":"scale(0)",n.transitionDelay=(i.isOpen?o:r.length-o)+"ms",n.zIndex=r.length-t+s})}var a=65;return{addClass:function(e,t,n){i(e),o(n)},removeClass:function(e,t,n){i(e),o(n)}}}var r=300;t.module("material.components.fabSpeedDial",["material.core","material.components.fabShared","material.components.fabTrigger","material.components.fabActions"]).directive("mdFabSpeedDial",n).animation(".md-fling",o).animation(".md-scale",i).service("mdFabSpeedDialFlingAnimation",o).service("mdFabSpeedDialScaleAnimation",i),o.$inject=["$timeout"],i.$inject=["$timeout"]}()}(),function(){!function(){function n(){function e(e,t,n){t.addClass("md-fab-toolbar"),t.find("md-fab-trigger").find("button").prepend('<div class="md-fab-toolbar-background"></div>')}return{restrict:"E",transclude:!0,template:'<div class="md-fab-toolbar-wrapper">  <div class="md-fab-toolbar-content" ng-transclude></div></div>',scope:{direction:"@?mdDirection",isOpen:"=?mdOpen"},bindToController:!0,controller:"FabController",controllerAs:"vm",link:e}}function o(){function n(n,o,i){if(o){var r=n[0],a=n.controller("mdFabToolbar"),d=r.querySelector(".md-fab-toolbar-background"),s=r.querySelector("md-fab-trigger button"),c=r.querySelector("md-toolbar"),l=r.querySelector("md-fab-trigger button md-icon"),m=n.find("md-fab-actions").children();if(s&&d){var u=e.getComputedStyle(s).getPropertyValue("background-color"),h=r.offsetWidth,p=(r.offsetHeight,2*(h/s.offsetWidth));d.style.backgroundColor=u,d.style.borderRadius=h+"px",a.isOpen?(c.style.pointerEvents="initial",d.style.width=s.offsetWidth+"px",d.style.height=s.offsetHeight+"px",d.style.transform="scale("+p+")",d.style.transitionDelay="0ms",l&&(l.style.transitionDelay=".3s"),t.forEach(m,function(e,t){e.style.transitionDelay=25*(m.length-t)+"ms"})):(c.style.pointerEvents="none",d.style.transform="scale(1)",d.style.top="0",n.hasClass("md-right")&&(d.style.left="0",d.style.right=null),n.hasClass("md-left")&&(d.style.right="0",d.style.left=null),d.style.transitionDelay="200ms",l&&(l.style.transitionDelay="0ms"),t.forEach(m,function(e,t){e.style.transitionDelay=200+25*t+"ms"}))}}}return{addClass:function(e,t,o){n(e,t,o),o()},removeClass:function(e,t,o){n(e,t,o),o()}}}t.module("material.components.fabToolbar",["material.core","material.components.fabShared","material.components.fabTrigger","material.components.fabActions"]).directive("mdFabToolbar",n).animation(".md-fab-toolbar",o).service("mdFabToolbarAnimation",o)}()}(),function(){!function(){function e(){return{restrict:"E",require:["^?mdFabSpeedDial","^?mdFabToolbar"]}}t.module("material.components.fabTrigger",["material.core"]).directive("mdFabTrigger",e)}()}(),function(){function e(e,o,i,r){function a(n,a,d,s){function c(){for(var e in o.MEDIA)r(e),r.getQuery(o.MEDIA[e]).addListener(C);return r.watchResponsiveAttributes(["md-cols","md-row-height","md-gutter"],d,m)}function l(){s.layoutDelegate=t.noop,A();for(var e in o.MEDIA)r.getQuery(o.MEDIA[e]).removeListener(C)}function m(e){null==e?s.invalidateLayout():r(e)&&s.invalidateLayout()}function u(e){var o=g(),r={tileSpans:b(o),colCount:E(),rowMode:M(),rowHeight:$(),gutter:v()};if(e||!t.equals(r,T)){var d=i(r.colCount,r.tileSpans,o).map(function(e,n){return{grid:{element:a,style:f(r.colCount,n,r.gutter,r.rowMode,r.rowHeight)},tiles:e.map(function(e,i){return{element:t.element(o[i]),style:p(e.position,e.spans,r.colCount,n,r.gutter,r.rowMode,r.rowHeight)}})}}).reflow().performance();n.mdOnLayout({$event:{performance:d}}),T=r}}function h(e){return w+e+k}function p(e,t,n,o,i,r,a){var d=1/n*100,s=(n-1)/n,c=_({share:d,gutterShare:s,gutter:i}),l={left:x({unit:c,offset:e.col,gutter:i}),width:N({unit:c,span:t.col,gutter:i}),paddingTop:"",marginTop:"",top:"",height:""};switch(r){case"fixed":l.top=x({unit:a,offset:e.row,gutter:i}),l.height=N({unit:a,span:t.row,gutter:i});break;case"ratio":var m=d/a,u=_({share:m,gutterShare:s,gutter:i});l.paddingTop=N({unit:u,span:t.row,gutter:i}),l.marginTop=x({unit:u,offset:e.row,gutter:i});break;case"fit":var h=(o-1)/o,m=1/o*100,u=_({share:m,gutterShare:h,gutter:i});l.top=x({unit:u,offset:e.row,gutter:i}),l.height=N({unit:u,span:t.row,gutter:i})}return l}function f(e,t,n,o,i){var r={};switch(o){case"fixed":r.height=N({unit:i,span:t,gutter:n}),r.paddingBottom="";break;case"ratio":var a=1===e?0:(e-1)/e,d=1/e*100,s=d*(1/i),c=_({share:s,gutterShare:a,gutter:n});r.height="",r.paddingBottom=N({unit:c,span:t,gutter:n});break;case"fit":}return r}function g(){return[].filter.call(a.children(),function(e){return"MD-GRID-TILE"==e.tagName&&!e.$$mdDestroyed})}function b(e){return[].map.call(e,function(e){var n=t.element(e).controller("mdGridTile");return{row:parseInt(r.getResponsiveAttribute(n.$attrs,"md-rowspan"),10)||1,col:parseInt(r.getResponsiveAttribute(n.$attrs,"md-colspan"),10)||1}})}function E(){var e=parseInt(r.getResponsiveAttribute(d,"md-cols"),10);if(isNaN(e))throw"md-grid-list: md-cols attribute was not found, or contained a non-numeric value";return e}function v(){return y(r.getResponsiveAttribute(d,"md-gutter")||1)}function $(){var e=r.getResponsiveAttribute(d,"md-row-height");if(!e)throw"md-grid-list: md-row-height attribute was not found";switch(M()){case"fixed":return y(e);case"ratio":var t=e.split(":");return parseFloat(t[0])/parseFloat(t[1]);case"fit":return 0}}function M(){var e=r.getResponsiveAttribute(d,"md-row-height");if(!e)throw"md-grid-list: md-row-height attribute was not found";return"fit"==e?"fit":-1!==e.indexOf(":")?"ratio":"fixed"}function y(e){return/\D$/.test(e)?e:e+"px"}a.attr("role","list"),s.layoutDelegate=u;var C=t.bind(s,s.invalidateLayout),A=c();n.$on("$destroy",l);var T,w=e.startSymbol(),k=e.endSymbol(),_=e(h("share")+"% - ("+h("gutter")+" * "+h("gutterShare")+")"),x=e("calc(("+h("unit")+" + "+h("gutter")+") * "+h("offset")+")"),N=e("calc(("+h("unit")+") * "+h("span")+" + ("+h("span")+" - 1) * "+h("gutter")+")")}return{restrict:"E",controller:n,scope:{mdOnLayout:"&"},link:a}}function n(e){this.layoutInvalidated=!1,this.tilesInvalidated=!1,this.$timeout_=e.nextTick,this.layoutDelegate=t.noop}function o(e){function n(t,n){var o,a,d,s,c,l;return s=e.time(function(){a=i(t,n)}),o={layoutInfo:function(){return a},map:function(t){return c=e.time(function(){var e=o.layoutInfo();d=t(e.positioning,e.rowCount)}),o},reflow:function(t){return l=e.time(function(){var e=t||r;e(d.grid,d.tiles)}),o},performance:function(){return{tileCount:n.length,layoutTime:s,mapTime:c,reflowTime:l,totalTime:s+c+l}}}}function o(e,t){e.element.css(e.style),t.forEach(function(e){e.element.css(e.style)})}function i(e,t){function n(t,n){if(t.col>e)throw"md-grid-list: Tile at position "+n+" has a colspan ("+t.col+") that exceeds the column count ("+e+")";for(var a=0,l=0;l-a<t.col;)d>=e?o():(a=c.indexOf(0,d),-1!==a&&-1!==(l=r(a+1))?d=l+1:(a=l=0,o()));return i(a,t.col,t.row),d=a+t.col,{col:a,row:s}}function o(){d=0,s++,i(0,e,-1)}function i(e,t,n){for(var o=e;e+t>o;o++)c[o]=Math.max(c[o]+n,0)}function r(e){var t;for(t=e;t<c.length;t++)if(0!==c[t])return t;return t===c.length?t:void 0}function a(){for(var t=[],n=0;e>n;n++)t.push(0);return t}var d=0,s=0,c=a();return{positioning:t.map(function(e,t){return{spans:e,position:n(e,t)}}),rowCount:s+Math.max.apply(Math,c)}}var r=o;return n.animateWith=function(e){r=t.isFunction(e)?e:o},n}function i(e){function n(n,o,i,r){o.attr("role","listitem");var a=e.watchResponsiveAttributes(["md-colspan","md-rowspan"],i,t.bind(r,r.invalidateLayout));r.invalidateTiles(),n.$on("$destroy",function(){o[0].$$mdDestroyed=!0,a(),r.invalidateLayout()}),t.isDefined(n.$parent.$index)&&n.$watch(function(){return n.$parent.$index},function(e,t){e!==t&&r.invalidateTiles()})}return{restrict:"E",require:"^mdGridList",template:"<figure ng-transclude></figure>",transclude:!0,scope:{},controller:["$attrs",function(e){this.$attrs=e}],link:n}}function r(){return{template:"<figcaption ng-transclude></figcaption>",transclude:!0}}t.module("material.components.gridList",["material.core"]).directive("mdGridList",e).directive("mdGridTile",i).directive("mdGridTileFooter",r).directive("mdGridTileHeader",r).factory("$mdGridLayout",o),e.$inject=["$interpolate","$mdConstant","$mdGridLayout","$mdMedia"],n.$inject=["$mdUtil"],n.prototype={invalidateTiles:function(){this.tilesInvalidated=!0,this.invalidateLayout()},invalidateLayout:function(){this.layoutInvalidated||(this.layoutInvalidated=!0,this.$timeout_(t.bind(this,this.layout)))},layout:function(){try{this.layoutDelegate(this.tilesInvalidated)}finally{this.layoutInvalidated=!1,this.tilesInvalidated=!1}}},o.$inject=["$mdUtil"],i.$inject=["$mdMedia"]}(),function(){t.module("material.components.icon",["material.core"])}(),function(){function n(e,t){function n(t,n,o){e(n),n.find("md-icon").length&&n.addClass("md-has-icon")}function o(e,n,o,i){var r=this;r.isErrorGetter=o.mdIsError&&t(o.mdIsError),r.delegateClick=function(){r.input.focus()},r.element=n,r.setFocused=function(e){n.toggleClass("md-input-focused",!!e)},r.setHasValue=function(e){n.toggleClass("md-input-has-value",!!e)},r.setHasPlaceholder=function(e){n.toggleClass("md-input-has-placeholder",!!e)},r.setInvalid=function(e){e?i.addClass(n,"md-input-invalid"):i.removeClass(n,"md-input-invalid")},e.$watch(function(){return r.label&&r.input},function(e){e&&!r.label.attr("for")&&r.label.attr("for",r.input.attr("id"))})}return o.$inject=["$scope","$element","$attrs","$animate"],{restrict:"E",link:n,controller:o}}function o(){return{restrict:"E",require:"^?mdInputContainer",link:function(e,t,n,o){!o||n.mdNoFloat||t.hasClass("md-container-ignore")||(o.label=t,e.$on("$destroy",function(){o.label=null}))}}}function i(e,n,o){function i(i,r,a,d){function s(e){return m.setHasValue(!h.$isEmpty(e)),e}function c(){m.setHasValue(r.val().length>0||(r[0].validity||{}).badInput)}function l(){function o(e){return f(),e}function a(){if(l.style.height=l.offsetHeight+"px",r.addClass("md-no-flex"),isNaN(u)){c.style.height="auto",c.scrollTop=0;var e=d();e&&(c.style.height=e+"px")}else{c.setAttribute("rows",1),p||(c.style.minHeight="0",p=r.prop("clientHeight"),c.style.minHeight=null);var t=Math.min(u,Math.round(c.scrollHeight/p));c.setAttribute("rows",t),c.style.height=p*t+"px"}r.removeClass("md-no-flex"),l.style.height="auto"}function d(){var e=c.scrollHeight-c.offsetHeight;return c.offsetHeight+(e>0?e:0)}function s(e){c.scrollTop=0;var t=c.scrollHeight-c.offsetHeight,n=c.offsetHeight+t;c.style.height=n+"px"}if(!t.isDefined(r.attr("md-no-autogrow"))){var c=r[0],l=m.element[0],u=NaN,p=null;c.hasAttribute("rows")&&(u=parseInt(c.getAttribute("rows")));var f=e.debounce(a,1);if(h?(h.$formatters.push(o),h.$viewChangeListeners.push(o)):f(),r.on("keydown input",f),isNaN(u)&&(r.attr("rows","1"),r.on("scroll",s)),t.element(n).on("resize",f),i.$on("$destroy",function(){t.element(n).off("resize",f)}),t.isDefined(r.attr("md-detect-hidden"))){var g=function(){var e=!1;return function(){var t=0===c.offsetHeight;t===!1&&e===!0&&a(),e=t}}();i.$watch(function(){return e.nextTick(g,!1),!0})}}}var m=d[0],u=!!d[1],h=d[1]||e.fakeNgModel(),p=t.isDefined(a.readonly);if(m){if("hidden"===a.type)return void r.attr("aria-hidden","true");if(m.input)throw new Error("<md-input-container> can only have *one* <input>, <textarea> or <md-select> child element!");m.input=r;var f=t.element('<div class="md-errors-spacer">');r.after(f),m.label||o.expect(r,"aria-label",r.attr("placeholder")),r.addClass("md-input"),r.attr("id")||r.attr("id","input_"+e.nextUid()),"textarea"===r[0].tagName.toLowerCase()&&l(),u||c();var g=m.isErrorGetter||function(){return h.$invalid&&(h.$touched||b())},b=function(){var n=e.getClosest(r,"form"),o=n?t.element(n).controller("form"):null;return o?o.$submitted:!1};i.$watch(g,m.setInvalid),h.$parsers.push(s),h.$formatters.push(s),r.on("input",c),p||r.on("focus",function(t){e.nextTick(function(){m.setFocused(!0)})}).on("blur",function(t){e.nextTick(function(){m.setFocused(!1),c()})}),i.$on("$destroy",function(){m.setFocused(!1),m.setHasValue(!1),m.input=null})}}return{restrict:"E",require:["^?mdInputContainer","?ngModel"],link:i}}function r(e,n){function o(o,i,r,a){function d(e){return c.parent?(c.text(String(i.val()||e||"").length+"/"+s),e):e}var s,c,l,m=a[0],u=a[1];n.nextTick(function(){l=t.element(u.element[0].querySelector(".md-errors-spacer")),c=t.element('<div class="md-char-counter">'),l.append(c),r.$set("ngTrim","false"),m.$formatters.push(d),m.$viewChangeListeners.push(d),i.on("input keydown keyup",function(){d()}),o.$watch(r.mdMaxlength,function(n){s=n,t.isNumber(n)&&n>0?(c.parent().length||e.enter(c,l),d()):e.leave(c)}),m.$validators["md-maxlength"]=function(e,n){return!t.isNumber(s)||0>s?!0:(e||i.val()||n||"").length<=s}})}return{restrict:"A",require:["ngModel","^mdInputContainer"],link:o}}function a(e){function n(e,n,o,i){if(i){var r=i.element.find("label"),a=t.isDefined(i.element.attr("md-no-float"));if(r&&r.length||a)return void i.setHasPlaceholder(!0);var d=o.placeholder;if(n.removeAttr("placeholder"),i.input&&"MD-SELECT"!=i.input[0].nodeName){var s='<label ng-click="delegateClick()">'+d+"</label>";i.element.addClass("md-icon-float"),i.element.prepend(s)}}}return{restrict:"A",require:"^^?mdInputContainer",priority:200,link:n}}function d(){function e(e,t,n){function o(){t[0].select()}"INPUT"!==t[0].nodeName&&"TEXTAREA"!==t[0].nodeName||(t.on("focus",o),e.$on("$destroy",function(){t.off("focus",o)}))}return{restrict:"A",link:e}}function s(){function e(e,n,o,i){i&&(n.toggleClass("md-input-messages-animation",!0),n.toggleClass("md-auto-hide",!0),("false"==o.mdAutoHide||t(o))&&n.toggleClass("md-auto-hide",!1))}function t(e){return v.some(function(t){return e[t]})}return{restrict:"EA",link:e,require:"^^?mdInputContainer"}}function c(e){function t(t){var n=e.getClosest(t,"md-input-container");if(n)return t.toggleClass("md-input-message-animation",!0),{}}return{restrict:"EA",compile:t,priority:100}}function l(e,t){return{addClass:function(n,o,i){var r=E(n);"md-input-invalid"==o&&r.hasClass("md-auto-hide")?h(n,t,e)["finally"](i):i()}}}function m(e,t){return{enter:function(n,o){h(n,t,e)["finally"](o)},leave:function(n,o){p(n,t,e)["finally"](o)},addClass:function(n,o,i){"ng-hide"==o?p(n,t,e)["finally"](i):i()},removeClass:function(n,o,i){"ng-hide"==o?h(n,t,e)["finally"](i):i()}}}function u(e){return{enter:function(t,n){var o=E(t);return o.hasClass("md-auto-hide")?void n():f(t,e)},leave:function(t,n){return g(t,e)}}}function h(e,n,o){var i,r=[],a=E(e);return t.forEach(a.children(),function(e){i=f(t.element(e),n),r.push(i.start())}),o.all(r)}function p(e,n,o){var i,r=[],a=E(e);return t.forEach(a.children(),function(e){i=g(t.element(e),n),r.push(i.start())}),o.all(r)}function f(e,t){var n=e[0].offsetHeight;return t(e,{event:"enter",structural:!0,from:{opacity:0,"margin-top":-n+"px"},to:{opacity:1,"margin-top":"0"},duration:.3})}function g(t,n){var o=t[0].offsetHeight,i=e.getComputedStyle(t[0]);return 0==i.opacity?n(t,{}):n(t,{event:"leave",structural:!0,from:{opacity:1,"margin-top":0},to:{opacity:0,"margin-top":-o+"px"},duration:.3})}function b(e){var t=e.controller("mdInputContainer");return t.element}function E(e){var n=b(e),o="ng-messages,data-ng-messages,x-ng-messages,[ng-messages],[data-ng-messages],[x-ng-messages]";return t.element(n[0].querySelector(o))}t.module("material.components.input",["material.core"]).directive("mdInputContainer",n).directive("label",o).directive("input",i).directive("textarea",i).directive("mdMaxlength",r).directive("placeholder",a).directive("ngMessages",s).directive("ngMessage",c).directive("ngMessageExp",c).directive("mdSelectOnFocus",d).animation(".md-input-invalid",l).animation(".md-input-messages-animation",m).animation(".md-input-message-animation",u),n.$inject=["$mdTheming","$parse"],i.$inject=["$mdUtil","$window","$mdAria"],r.$inject=["$animate","$mdUtil"],a.$inject=["$log"];var v=["ngIf","ngShow","ngHide","ngSwitchWhen","ngSwitchDefault"];c.$inject=["$mdUtil"],l.$inject=["$q","$animateCss"],m.$inject=["$q","$animateCss"],u.$inject=["$animateCss"]}(),function(){function e(e){return{restrict:"E",compile:function(t){return t[0].setAttribute("role","list"),e}}}function n(e,n,o,i){var r=["md-checkbox","md-switch"];return{restrict:"E",controller:"MdListController",compile:function(a,d){function s(){for(var e,t,n=["md-switch","md-checkbox"],o=0;t=n[o];++o)if((e=a.find(t)[0])&&!e.hasAttribute("aria-label")){var i=a.find("p")[0];if(!i)return;e.setAttribute("aria-label","Toggle "+i.textContent)}}function c(e){var n;"div"==e?(n=t.element('<div class="md-no-style md-list-item-inner">'),n.append(a.contents()),a.addClass("md-proxy-focus")):(n=t.element('<md-button class="md-no-style"><div class="md-list-item-inner"></div></md-button>'),m(a[0],n[0]),n.children().eq(0).append(a.contents())),a[0].setAttribute("tabindex","-1"),a.append(n)}function l(){if(b&&!h(b)&&b.hasAttribute("ng-click")){e.expect(b,"aria-label");var n=t.element('<md-button class="md-secondary-container md-icon-button">');m(b,n[0]),b.setAttribute("tabindex","-1"),b.classList.remove("md-secondary"),n.append(b),b=n[0]}b&&(b.hasAttribute("ng-click")||d.ngClick&&u(b))&&(a.addClass("md-with-secondary"),a.append(b))}function m(e,n){var o=["ng-if","ng-click","aria-label","ng-disabled","ui-sref","href","ng-href","ng-attr-ui-sref"];t.forEach(o,function(t){e.hasAttribute(t)&&(n.setAttribute(t,e.getAttribute(t)),e.removeAttribute(t))})}function u(e){return-1!=r.indexOf(e.nodeName.toLowerCase())}function h(e){var t=e.nodeName.toUpperCase();return"MD-BUTTON"==t||"BUTTON"==t}function p(e,a,d,s){function c(e){for(var t=e.attributes,n=0;n<t.length;n++)if("ngClick"===d.$normalize(t[n].name))return!0;return!1}function l(){var e=a.children();e.length&&!e[0].hasAttribute("ng-click")&&t.forEach(r,function(e){t.forEach(h.querySelectorAll(e),function(e){u.push(e)})})}function m(){(1==u.length||p)&&(a.addClass("md-clickable"),p||s.attachRipple(e,t.element(a[0].querySelector(".md-no-style"))))}var u=[],h=a[0].firstElementChild,p=h&&c(h);l(),m(),a.hasClass("md-proxy-focus")&&u.length&&t.forEach(u,function(n){n=t.element(n),e.mouseActive=!1,n.on("mousedown",function(){e.mouseActive=!0,i(function(){e.mouseActive=!1},100)}).on("focus",function(){e.mouseActive===!1&&a.addClass("md-focused"),n.on("blur",function t(){a.removeClass("md-focused"),n.off("blur",t)})})});var f=function(e){if("INPUT"!=e.target.nodeName&&"TEXTAREA"!=e.target.nodeName&&!e.target.isContentEditable){var t=e.which||e.keyCode;t==n.KEY_CODE.SPACE&&h&&(h.click(),e.preventDefault(),e.stopPropagation())}};p||u.length||h&&h.addEventListener("keypress",f),a.off("click"),a.off("keypress"),1==u.length&&h&&a.children().eq(0).on("click",function(e){var n=o.getClosest(e.target,"BUTTON");!n&&h.contains(e.target)&&t.forEach(u,function(n){e.target===n||n.contains(e.target)||t.element(n).triggerHandler("click")})}),e.$on("$destroy",function(){h&&h.removeEventListener("keypress",f)})}var f,g,b=a[0].querySelector(".md-secondary");if(a[0].setAttribute("role","listitem"),d.ngClick||d.ngHref||d.href||d.uiSref||d.ngAttrUiSref)c("button");else{for(var E,v=0;E=r[v];++v)if(g=a[0].querySelector(E)){f=!0;break}f?c("div"):a[0].querySelector("md-button:not(.md-secondary):not(.md-exclude)")||a.addClass("md-no-proxy")}return l(),s(),p}}}function o(e,t,n){function o(e,t){var o={};n.attach(e,t,o)}var i=this;i.attachRipple=o}t.module("material.components.list",["material.core"]).controller("MdListController",o).directive("mdList",e).directive("mdListItem",n),e.$inject=["$mdTheming"],n.$inject=["$mdAria","$mdConstant","$mdUtil","$timeout"],o.$inject=["$scope","$element","$mdListInkRipple"]}(),function(){t.module("material.components.menu",["material.core","material.components.backdrop"])}(),function(){t.module("material.components.menuBar",["material.core","material.components.menu"])}(),function(){function e(e,n,o,a){this._defaultConfigOptions={bindToController:!0,clickOutsideToClose:!1,disableParentScroll:!1,escapeToClose:!1,focusOnOpen:!0,fullscreen:!1,hasBackdrop:!1,transformTemplate:t.bind(this,this._wrapTemplate),trapFocus:!1,zIndex:d},this._config={},this._$rootElement=e,this._$rootScope=n,this._$injector=o,this._$window=a,this.animation=r.animation,this.xPosition=i.xPosition,this.yPosition=i.yPosition}function o(e,t){this._$q=t.get("$q"),this._$mdCompiler=t.get("$mdCompiler"),this._$mdConstant=t.get("$mdConstant"),this._$mdUtil=t.get("$mdUtil"),this._$rootScope=t.get("$rootScope"),this._$animate=t.get("$animate"),this._$mdPanel=t.get("$mdPanel"),this._$log=t.get("$log"),this._$window=t.get("$window"),this._$$rAF=t.get("$$rAF"),this.id=e.id,this.isAttached=!1,this._config=e,this._panelContainer,this._panelEl,this._removeListeners=[],this._topFocusTrap,this._bottomFocusTrap,this._backdropRef,this._restoreScroll=null}function i(e){this._$window=e,this._absolute=!1,this._relativeToEl,this._top="",this._bottom="",this._left="",this._right="",this._translateX=[],this._translateY=[],this._positions=[],this._actualPosition}function r(e){this._$mdUtil=e.get("$mdUtil"),this._openFrom,this._closeTo,this._animationClass=""}function a(e){var n=t.isString(e)?document.querySelector(e):e;return t.element(n)}t.module("material.components.panel",["material.core","material.components.backdrop"]).service("$mdPanel",e);var d=80,s="_md-panel-hidden",c=t.element('<div class="_md-panel-focus-trap" tabindex="0"></div>');e.$inject=["$rootElement","$rootScope","$injector","$window"],e.prototype.create=function(e){var n=e||{};this._config={scope:this._$rootScope.$new(!0),attachTo:this._$rootElement},t.extend(this._config,this._defaultConfigOptions,n);var i="panel_"+this._$injector.get("$mdUtil").nextUid(),r=t.extend({id:i},this._config);return new o(r,this._$injector)},e.prototype.open=function(e){var t=this.create(e);return t.open().then(function(){return t})},e.prototype.newPanelPosition=function(){return new i(this._$window)},e.prototype.newPanelAnimation=function(){return new r(this._$injector)},e.prototype._wrapTemplate=function(e){var t=e||"";return'<div class="md-panel-outer-wrapper">  <div class="md-panel" style="left: -9999px;">'+t+"</div></div>"},o.prototype.open=function(){var e=this;return this._$q(function(t,n){var o=e._done(t,e),i=e._simpleBind(e.show,e);e.attach().then(i).then(o)["catch"](n)})},o.prototype.close=function(){var e=this;return this._$q(function(t,n){var o=e._done(t,e),i=e._simpleBind(e.detach,e);e.hide().then(i).then(o)["catch"](n)})},o.prototype.attach=function(){if(this.isAttached&&this._panelEl)return this._$q.when(this);var e=this;return this._$q(function(n,o){var i=e._done(n,e),r=e._config.onDomAdded||t.noop,a=function(t){return e.isAttached=!0,e._addEventListeners(),t};e._$q.all([e._createBackdrop(),e._createPanel().then(a)["catch"](o)]).then(r).then(i)["catch"](o)})},o.prototype.detach=function(){if(!this.isAttached)return this._$q.when(this);var e=this,n=e._config.onDomRemoved||t.noop,o=function(){return e._removeEventListeners(),e._topFocusTrap&&e._topFocusTrap.parentNode&&e._topFocusTrap.parentNode.removeChild(e._topFocusTrap),e._bottomFocusTrap&&e._bottomFocusTrap.parentNode&&e._bottomFocusTrap.parentNode.removeChild(e._bottomFocusTrap),e._panelContainer.remove(),e.isAttached=!1,e._$q.when(e)};return this._restoreScroll&&(this._restoreScroll(),this._restoreScroll=null),this._$q(function(t,i){var r=e._done(t,e);e._$q.all([o(),e._backdropRef?e._backdropRef.detach():!0]).then(n).then(r)["catch"](i)})},o.prototype.destroy=function(){this._config.locals=null},o.prototype.show=function(){if(!this._panelContainer)return this._$q(function(e,t){t("Panel does not exist yet. Call open() or attach().")});if(!this._panelContainer.hasClass(s))return this._$q.when(this);var e=this,n=function(){return e.removeClass(s),e._animateOpen()};return this._$q(function(o,i){var r=e._done(o,e),a=e._config.onOpenComplete||t.noop;e._$q.all([e._backdropRef?e._backdropRef.show():e,n().then(function(){e._focusOnOpen()},i)]).then(a).then(r)["catch"](i)})},o.prototype.hide=function(){if(!this._panelContainer)return this._$q(function(e,t){t("Panel does not exist yet. Call open() or attach().")});if(this._panelContainer.hasClass(s))return this._$q.when(this);var e=this;return this._$q(function(n,o){var i=e._done(n,e),r=e._config.onRemoving||t.noop,d=function(){var t=e._config.origin;t&&a(t).focus()},c=function(){e.addClass(s)};e._$q.all([e._backdropRef?e._backdropRef.hide():e,e._animateClose().then(r).then(c).then(d)["catch"](o)]).then(i,o)})},o.prototype.addClass=function(e){if(!this._panelContainer)throw new Error("Panel does not exist yet. Call open() or attach().");this._panelContainer.hasClass(e)||this._panelContainer.addClass(e)},o.prototype.removeClass=function(e){if(!this._panelContainer)throw new Error("Panel does not exist yet. Call open() or attach().");this._panelContainer.hasClass(e)&&this._panelContainer.removeClass(e)},o.prototype.toggleClass=function(e){if(!this._panelContainer)throw new Error("Panel does not exist yet. Call open() or attach().");this._panelContainer.toggleClass(e)},o.prototype._createPanel=function(){var e=this;return this._$q(function(n,o){e._config.locals||(e._config.locals={}),e._config.locals.mdPanelRef=e,e._$mdCompiler.compile(e._config).then(function(i){e._panelContainer=i.link(e._config.scope),a(e._config.attachTo).append(e._panelContainer),e._config.disableParentScroll&&(e._restoreScroll=e._$mdUtil.disableScrollAround(null,e._panelContainer)),e._panelEl=t.element(e._panelContainer[0].querySelector(".md-panel")),e._config.panelClass&&e._panelEl.addClass(e._config.panelClass),e._$animate.pin&&e._$animate.pin(e._panelContainer,a(e._config.attachTo)),e._configureTrapFocus(),e._addStyles().then(function(){n(e)},o)},o)})},o.prototype._addStyles=function(){var e=this;return this._$q(function(t){e._panelContainer.css("z-index",e._config.zIndex),e._panelEl.css("z-index",e._config.zIndex+1);var n=function(){e._panelEl.css("left",""),e._panelContainer.addClass(s),t(e)};if(e._config.fullscreen)return e._panelEl.addClass("_md-panel-fullscreen"),void n();var o=e._config.position;return o?void e._$rootScope.$$postDigest(function(){e._updatePosition(!0),t(e)}):void n()})},o.prototype._updatePosition=function(e){var t=this._config.position;if(t){t._setPanelPosition(this._panelEl),e&&this._panelContainer.addClass(s),this._panelEl.css("top",t.getTop()),this._panelEl.css("bottom",t.getBottom()),this._panelEl.css("left",t.getLeft()),this._panelEl.css("right",t.getRight());
var n=this._$mdConstant.CSS.TRANSFORM;this._panelEl.css(n,t.getTransform())}},o.prototype._focusOnOpen=function(){if(this._config.focusOnOpen){var e=this;this._$rootScope.$$postDigest(function(){var t=e._$mdUtil.findFocusTarget(e._panelEl)||e._panelEl;t.focus()})}},o.prototype._createBackdrop=function(){if(this._config.hasBackdrop){if(!this._backdropRef){var e=this._$mdPanel.newPanelAnimation().openFrom(this._config.attachTo).withAnimation({open:"_md-opaque-enter",close:"_md-opaque-leave"}),t={animation:e,attachTo:this._config.attachTo,focusOnOpen:!1,panelClass:"_md-panel-backdrop",zIndex:this._config.zIndex-1};this._backdropRef=this._$mdPanel.create(t)}if(!this._backdropRef.isAttached)return this._backdropRef.attach()}},o.prototype._addEventListeners=function(){this._configureEscapeToClose(),this._configureClickOutsideToClose(),this._configureScrollListener()},o.prototype._removeEventListeners=function(){this._removeListeners&&this._removeListeners.forEach(function(e){e()}),this._removeListeners=null},o.prototype._configureEscapeToClose=function(){if(this._config.escapeToClose){var e=a(this._config.attachTo),t=this,n=function(e){e.keyCode===t._$mdConstant.KEY_CODE.ESCAPE&&(e.stopPropagation(),e.preventDefault(),t.close())};this._panelContainer.on("keydown",n),e.on("keydown",n),this._removeListeners.push(function(){t._panelContainer.off("keydown",n),e.off("keydown",n)})}},o.prototype._configureClickOutsideToClose=function(){if(this._config.clickOutsideToClose){var e,t=this._panelContainer,n=function(t){e=t.target},o=this,i=function(n){e===t[0]&&n.target===t[0]&&(n.stopPropagation(),n.preventDefault(),o.close())};t.on("mousedown",n),t.on("mouseup",i),this._removeListeners.push(function(){t.off("mousedown",n),t.off("mouseup",i)})}},o.prototype._configureScrollListener=function(){var e=t.bind(this,this._updatePosition),n=this._$$rAF.throttle(e),o=this,i=function(){o._config.disableParentScroll||n()};this._$window.addEventListener("scroll",i,!0),this._removeListeners.push(function(){o._$window.removeEventListener("scroll",i,!0)})},o.prototype._configureTrapFocus=function(){if(this._panelEl.attr("tabIndex","-1"),this._config.trapFocus){var e=this._panelEl;this._topFocusTrap=c.clone()[0],this._bottomFocusTrap=c.clone()[0];var t=function(){e.focus()};this._topFocusTrap.addEventListener("focus",t),this._bottomFocusTrap.addEventListener("focus",t),this._removeListeners.push(this._simpleBind(function(){this._topFocusTrap.removeEventListener("focus",t),this._bottomFocusTrap.removeEventListener("focus",t)},this)),e[0].parentNode.insertBefore(this._topFocusTrap,e[0]),e.after(this._bottomFocusTrap)}},o.prototype._animateOpen=function(){this.addClass("md-panel-is-showing");var e=this._config.animation;if(!e)return this.addClass("_md-panel-shown"),this._$q.when(this);var t=this;return this._$q(function(n){var o=t._done(n,t),i=function(){t._$log.warn("MdPanel Animations failed. Showing panel without animating."),o()};e.animateOpen(t._panelEl).then(o,i)})},o.prototype._animateClose=function(){var e=this._config.animation;if(!e)return this.removeClass("md-panel-is-showing"),this.removeClass("_md-panel-shown"),this._$q.when(this);var t=this;return this._$q(function(n){var o=function(){t.removeClass("md-panel-is-showing"),n(t)},i=function(){t._$log.warn("MdPanel Animations failed. Hiding panel without animating."),o()};e.animateClose(t._panelEl).then(o,i)})},o.prototype._simpleBind=function(e,t){return function(n){return e.apply(t,n)}},o.prototype._done=function(e,t){return function(){e(t)}},i.xPosition={CENTER:"center",ALIGN_START:"align-start",ALIGN_END:"align-end",OFFSET_START:"offset-start",OFFSET_END:"offset-end"},i.yPosition={CENTER:"center",ALIGN_TOPS:"align-tops",ALIGN_BOTTOMS:"align-bottoms",ABOVE:"above",BELOW:"below"},i.prototype.absolute=function(){return this._absolute=!0,this},i.prototype.top=function(e){return this._bottom="",this._top=e||"0",this},i.prototype.bottom=function(e){return this._top="",this._bottom=e||"0",this},i.prototype.left=function(e){return this._right="",this._left=e||"0",this},i.prototype.right=function(e){return this._left="",this._right=e||"0",this},i.prototype.centerHorizontally=function(){return this._left="50%",this._right="",this._translateX=["-50%"],this},i.prototype.centerVertically=function(){return this._top="50%",this._bottom="",this._translateY=["-50%"],this},i.prototype.center=function(){return this.centerHorizontally().centerVertically()},i.prototype.relativeTo=function(e){return this._absolute=!1,this._relativeToEl=a(e),this},i.prototype.addPanelPosition=function(e,t){if(!this._relativeToEl)throw new Error("addPanelPosition can only be used with relative positioning. Set relativeTo first.");return this._validateXPosition(e),this._validateYPosition(t),this._positions.push({x:e,y:t}),this},i.prototype._validateYPosition=function(e){if(null!=e){for(var t,n=Object.keys(i.yPosition),o=[],r=0;t=n[r];r++){var a=i.yPosition[t];if(o.push(a),a===e)return}throw new Error("Panel y position only accepts the following values:\n"+o.join(" | "))}},i.prototype._validateXPosition=function(e){if(null!=e){for(var t,n=Object.keys(i.xPosition),o=[],r=0;t=n[r];r++){var a=i.xPosition[t];if(o.push(a),a===e)return}throw new Error("Panel x Position only accepts the following values:\n"+o.join(" | "))}},i.prototype.withOffsetX=function(e){return this._translateX.push(e),this},i.prototype.withOffsetY=function(e){return this._translateY.push(e),this},i.prototype.getTop=function(){return this._top},i.prototype.getBottom=function(){return this._bottom},i.prototype.getLeft=function(){return this._left},i.prototype.getRight=function(){return this._right},i.prototype.getTransform=function(){var e=this._reduceTranslateValues("translateX",this._translateX),t=this._reduceTranslateValues("translateY",this._translateY);return(e+" "+t).trim()},i.prototype._isOnscreen=function(e){var t=parseInt(this.getLeft()),n=parseInt(this.getTop()),o=t+e[0].offsetWidth,i=n+e[0].offsetHeight;return t>=0&&n>=0&&i<=this._$window.innerHeight&&o<=this._$window.innerWidth},i.prototype.getActualPosition=function(){return this._actualPosition},i.prototype._reduceTranslateValues=function(e,t){return t.map(function(t){return e+"("+t+")"}).join(" ")},i.prototype._setPanelPosition=function(e){if(!this._absolute){if(this._actualPosition)return void this._calculatePanelPosition(e,this._actualPosition);for(var t=0;t<this._positions.length&&(this._actualPosition=this._positions[t],this._calculatePanelPosition(e,this._actualPosition),!this._isOnscreen(e));t++);}},i.prototype._calculatePanelPosition=function(e,t){var n=e[0].getBoundingClientRect(),o=n.width,r=n.height,a=this._relativeToEl[0].getBoundingClientRect(),d=a.left,s=a.right,c=a.width;switch(t.x){case i.xPosition.OFFSET_START:this._left=d-o+"px";break;case i.xPosition.ALIGN_END:this._left=s-o+"px";break;case i.xPosition.CENTER:var l=d+.5*c-.5*o;this._left=l+"px";break;case i.xPosition.ALIGN_START:this._left=d+"px";break;case i.xPosition.OFFSET_END:this._left=s+"px"}var m=a.top,u=a.bottom,h=a.height;switch(t.y){case i.yPosition.ABOVE:this._top=m-r+"px";break;case i.yPosition.ALIGN_BOTTOMS:this._top=u-r+"px";break;case i.yPosition.CENTER:var p=m+.5*h-.5*r;this._top=p+"px";break;case i.yPosition.ALIGN_TOPS:this._top=m+"px";break;case i.yPosition.BELOW:this._top=u+"px"}},r.animation={SLIDE:"md-panel-animate-slide",SCALE:"md-panel-animate-scale",FADE:"md-panel-animate-fade"},r.prototype.openFrom=function(e){return e=e.target?e.target:e,this._openFrom=this._getPanelAnimationTarget(e),this._closeTo||(this._closeTo=this._openFrom),this},r.prototype.closeTo=function(e){return this._closeTo=this._getPanelAnimationTarget(e),this},r.prototype._getPanelAnimationTarget=function(e){return t.isDefined(e.top)||t.isDefined(e.left)?{element:n,bounds:{top:e.top||0,left:e.left||0}}:this._getBoundingClientRect(a(e))},r.prototype.withAnimation=function(e){return this._animationClass=e,this},r.prototype.animateOpen=function(e){var n=this._$mdUtil.dom.animator;this._fixBounds(e);var o={},i=e[0].style.transform||"",a=n.toTransformCss(i),d=n.toTransformCss(i);switch(this._animationClass){case r.animation.SLIDE:e.css("opacity","1"),o={transitionInClass:"_md-panel-animate-enter"};var s=n.calculateSlideToOrigin(e,this._openFrom)||"";a=n.toTransformCss(s+" "+i);break;case r.animation.SCALE:o={transitionInClass:"_md-panel-animate-enter"};var c=n.calculateZoomToOrigin(e,this._openFrom)||"";a=n.toTransformCss(c+" "+i);break;case r.animation.FADE:o={transitionInClass:"_md-panel-animate-enter"};break;default:o=t.isString(this._animationClass)?{transitionInClass:this._animationClass}:{transitionInClass:this._animationClass.open,transitionOutClass:this._animationClass.close}}return n.translate3d(e,a,d,o)},r.prototype.animateClose=function(e){var n=this._$mdUtil.dom.animator,o={},i=e[0].style.transform||"",a=n.toTransformCss(i),d=n.toTransformCss(i);switch(this._animationClass){case r.animation.SLIDE:e.css("opacity","1"),o={transitionInClass:"_md-panel-animate-leave"};var s=n.calculateSlideToOrigin(e,this._closeTo)||"";d=n.toTransformCss(s+" "+i);break;case r.animation.SCALE:o={transitionInClass:"_md-panel-animate-scale-out _md-panel-animate-leave"};var c=n.calculateZoomToOrigin(e,this._closeTo)||"";d=n.toTransformCss(c+" "+i);break;case r.animation.FADE:o={transitionInClass:"_md-panel-animate-fade-out _md-panel-animate-leave"};break;default:o=t.isString(this._animationClass)?{transitionOutClass:this._animationClass}:{transitionInClass:this._animationClass.close,transitionOutClass:this._animationClass.open}}return n.translate3d(e,a,d,o)},r.prototype._fixBounds=function(e){var t=e[0].offsetWidth,n=e[0].offsetHeight;this._openFrom&&null==this._openFrom.bounds.height&&(this._openFrom.bounds.height=n),this._openFrom&&null==this._openFrom.bounds.width&&(this._openFrom.bounds.width=t),this._closeTo&&null==this._closeTo.bounds.height&&(this._closeTo.bounds.height=n),this._closeTo&&null==this._closeTo.bounds.width&&(this._closeTo.bounds.width=t)},r.prototype._getBoundingClientRect=function(e){return e instanceof t.element?{element:e,bounds:e[0].getBoundingClientRect()}:void 0}}(),function(){function e(e,o,i){function r(e){return e.attr("aria-valuemin",0),e.attr("aria-valuemax",100),e.attr("role","progressbar"),a}function a(r,a,h){function p(){h.$observe("value",function(e){var t=d(e);a.attr("aria-valuenow",t),v()==m&&b(t)}),h.$observe("mdMode",function(e){switch(e){case m:case u:y.removeClass("ng-hide"),$&&y.removeClass($),y.addClass($="md-mode-"+e);break;default:$&&y.removeClass($),y.addClass("ng-hide"),$=n}})}function f(){M.css({width:100*E()+"px",height:100*E()+"px"}),M.children().eq(0).css(C({transform:o.supplant("translate(-50%, -50%) scale( {0} )",[E()])}))}function g(){if(t.isUndefined(h.mdMode)){var e=t.isDefined(h.value),n=e?m:u,r="Auto-adding the missing md-mode='{0}' to the ProgressCircular element";i.debug(o.supplant(r,[n])),a.attr("md-mode",n),h.mdMode=n}}function b(e){if(v()){A=A||t.element(a[0].querySelector(".md-left > .md-half-circle")),T=T||t.element(a[0].querySelector(".md-right > .md-half-circle")),w=w||t.element(a[0].querySelector(".md-gap"));var n=s({borderBottomColor:50>=e?"transparent !important":"",transition:50>=e?"":"borderBottomColor 0.1s linear"}),i=s({transition:50>=e?"transform 0.1s linear":"",transform:o.supplant("rotate({0}deg)",[50>=e?135:(e-50)/50*180+135])}),r=s({transition:e>=50?"transform 0.1s linear":"",transform:o.supplant("rotate({0}deg)",[e>=50?45:e/50*180-135])});A.css(C(i)),T.css(C(r)),w.css(C(n))}}function E(){if(!h.mdDiameter)return l;var e=/([0-9]*)%/.exec(h.mdDiameter),t=Math.max(0,e&&e[1]/100||parseFloat(h.mdDiameter));return t>1?t/c:t}function v(){var e=(h.mdMode||"").trim();if(e)switch(e){case m:case u:break;default:e=n}return e}e(a);var $,M=a,y=t.element(a.children()[0]),C=o.dom.animator.toCss;a.attr("md-mode",v()),f(),g(),p();var A,T,w}function d(e){return Math.max(0,Math.min(e||0,100))}function s(e){for(var t in e)e.hasOwnProperty(t)&&""==e[t]&&delete e[t];return e}var c=100,l=.5,m="determinate",u="indeterminate";return{restrict:"E",scope:!0,template:'<div class="md-scale-wrapper"><div class="md-spinner-wrapper"><div class="md-inner"><div class="md-gap"></div><div class="md-left"><div class="md-half-circle"></div></div><div class="md-right"><div class="md-half-circle"></div></div></div></div></div>',compile:r}}t.module("material.components.progressCircular",["material.core"]).directive("mdProgressCircular",e),e.$inject=["$mdTheming","$mdUtil","$log"]}(),function(){function e(e,o,i){function r(e,t,n){return e.attr("aria-valuemin",0),e.attr("aria-valuemax",100),e.attr("role","progressbar"),a}function a(r,a,u){function h(){u.$observe("value",function(e){var t=d(e);a.attr("aria-valuenow",t),f()!=m&&g($,t)}),u.$observe("mdBufferValue",function(e){g(v,d(e))}),u.$observe("mdMode",function(e){switch(e){case m:case l:case s:case c:M.removeClass("ng-hide "+b),M.addClass(b="md-mode-"+e);break;default:b&&M.removeClass(b),M.addClass("ng-hide"),b=n}})}function p(){if(t.isUndefined(u.mdMode)){var e=t.isDefined(u.value),n=e?s:c,r="Auto-adding the missing md-mode='{0}' to the ProgressLinear element";i.debug(o.supplant(r,[n])),a.attr("md-mode",n),u.mdMode=n}}function f(){var e=(u.mdMode||"").trim();if(e)switch(e){case s:case c:case l:case m:break;default:e=n}return e}function g(e,n){if(f()){var i=o.supplant("translateX({0}%) scale({1},1)",[(n-100)/2,n/100]),r=E({transform:i});t.element(e).css(r)}}e(a);var b,E=o.dom.animator.toCss,v=t.element(a[0].querySelector(".md-bar1")),$=t.element(a[0].querySelector(".md-bar2")),M=t.element(a[0].querySelector(".md-container"));a.attr("md-mode",f()),p(),h()}function d(e){return Math.max(0,Math.min(e||0,100))}var s="determinate",c="indeterminate",l="buffer",m="query";return{restrict:"E",template:'<div class="md-container"><div class="md-dashed"></div><div class="md-bar md-bar1"></div><div class="md-bar md-bar2"></div></div>',compile:r}}t.module("material.components.progressLinear",["material.core"]).directive("mdProgressLinear",e),e.$inject=["$mdTheming","$mdUtil","$log"]}(),function(){function e(e,n,o,i){function r(r,a,d,s){function c(){a.hasClass("md-focused")||a.addClass("md-focused")}function l(o){var i=o.which||o.keyCode;if(i==n.KEY_CODE.ENTER||o.currentTarget==o.target)switch(i){case n.KEY_CODE.LEFT_ARROW:case n.KEY_CODE.UP_ARROW:o.preventDefault(),m.selectPrevious(),c();break;case n.KEY_CODE.RIGHT_ARROW:case n.KEY_CODE.DOWN_ARROW:o.preventDefault(),m.selectNext(),c();break;case n.KEY_CODE.ENTER:var r=t.element(e.getClosest(a[0],"form"));r.length>0&&r.triggerHandler("submit")}}o(a);var m=s[0],u=s[1]||e.fakeNgModel();m.init(u),r.mouseActive=!1,a.attr({role:"radiogroup",tabIndex:a.attr("tabindex")||"0"}).on("keydown",l).on("mousedown",function(e){r.mouseActive=!0,i(function(){r.mouseActive=!1},100)}).on("focus",function(){r.mouseActive===!1&&m.$element.addClass("md-focused")}).on("blur",function(){m.$element.removeClass("md-focused")})}function a(e){this._radioButtonRenderFns=[],this.$element=e}function d(){return{init:function(e){this._ngModelCtrl=e,this._ngModelCtrl.$render=t.bind(this,this.render)},add:function(e){this._radioButtonRenderFns.push(e)},remove:function(e){var t=this._radioButtonRenderFns.indexOf(e);-1!==t&&this._radioButtonRenderFns.splice(t,1)},render:function(){this._radioButtonRenderFns.forEach(function(e){e()})},setViewValue:function(e,t){this._ngModelCtrl.$setViewValue(e,t),this.render()},getViewValue:function(){return this._ngModelCtrl.$viewValue},selectNext:function(){return s(this.$element,1)},selectPrevious:function(){return s(this.$element,-1)},setActiveDescendant:function(e){this.$element.attr("aria-activedescendant",e)}}}function s(n,o){var i=e.iterator(n[0].querySelectorAll("md-radio-button"),!0);if(i.count()){var r=function(e){return!t.element(e).attr("disabled")},a=n[0].querySelector("md-radio-button.md-checked"),d=i[0>o?"previous":"next"](a,r)||i.first();t.element(d).triggerHandler("click")}}return a.prototype=d(),{restrict:"E",controller:["$element",a],require:["mdRadioGroup","?ngModel"],link:{pre:r}}}function n(e,t,n){function o(o,r,a,d){function s(e){if(!d)throw"RadioGroupController not found.";d.add(l),a.$observe("value",l),r.on("click",c).on("$destroy",function(){d.remove(l)})}function c(e){r[0].hasAttribute("disabled")||o.$apply(function(){d.setViewValue(a.value,e&&e.type)})}function l(){function e(e){"MD-RADIO-GROUP"!=r.parent()[0].nodeName&&r.parent()[e?"addClass":"removeClass"](i)}var t=d.getViewValue()==a.value;t!==u&&(u=t,r.attr("aria-checked",t),t?(e(!0),r.addClass(i),d.setActiveDescendant(r.attr("id"))):(e(!1),r.removeClass(i)))}function m(n,o){function i(){return a.id||"radio_"+t.nextUid()}o.ariaId=i(),n.attr({id:o.ariaId,role:"radio","aria-checked":"false"}),e.expectWithText(n,"aria-label")}var u;n(r),m(r,o),s()}var i="md-checked";return{restrict:"E",require:"^mdRadioGroup",transclude:!0,template:'<div class="md-container" md-ink-ripple md-ink-ripple-checkbox><div class="md-off"></div><div class="md-on"></div></div><div ng-transclude class="md-label"></div>',link:o}}t.module("material.components.radioButton",["material.core"]).directive("mdRadioGroup",e).directive("mdRadioButton",n),e.$inject=["$mdUtil","$mdConstant","$mdTheming","$timeout"],n.$inject=["$mdAria","$mdUtil","$mdTheming"]}(),function(){function e(e,o,i,r,a,d){function s(a,s){var c=t.element("<md-select-value><span></span></md-select-value>");if(c.append('<span class="md-select-icon" aria-hidden="true"></span>'),c.addClass("md-select-value"),c[0].hasAttribute("id")||c.attr("id","select_value_label_"+o.nextUid()),a.find("md-content").length||a.append(t.element("<md-content>").append(a.contents())),s.mdOnOpen&&(a.find("md-content").prepend(t.element('<div> <md-progress-circular md-mode="{{progressMode}}" ng-hide="$$loadingAsyncDone" md-diameter="25px"></md-progress-circular></div>')),a.find("md-option").attr("ng-show","$$loadingAsyncDone")),s.name){var l=t.element('<select class="md-visually-hidden">');l.attr({name:"."+s.name,"ng-model":s.ngModel,"aria-hidden":"true",tabindex:"-1"});var m=a.find("md-option");t.forEach(m,function(e){var n=t.element("<option>"+e.innerHTML+"</option>");e.hasAttribute("ng-value")?n.attr("ng-value",e.getAttribute("ng-value")):e.hasAttribute("value")&&n.attr("value",e.getAttribute("value")),l.append(n)}),a.parent().append(l)}var u=t.isDefined(s.multiple)?"multiple":"",h='<div class="md-select-menu-container" aria-hidden="true"><md-select-menu {0}>{1}</md-select-menu></div>';return h=o.supplant(h,[u,a.html()]),a.empty().append(c),a.append(h),s.tabindex||s.$set("tabindex",0),function(a,s,c,l){function m(){var e=s.attr("aria-label")||s.attr("placeholder");!e&&M&&M.label&&(e=M.label.text()),v=e,r.expect(s,"aria-label",e)}function u(){_&&(N=N||_.find("md-select-menu").controller("mdSelectMenu"),y.setLabelText(N.selectedLabels()))}function h(){if(v){var e=N.selectedLabels({mode:"aria"});s.attr("aria-label",e.length?v+": "+e:v)}}function p(){M&&M.setHasValue(N.selectedLabels().length>0||(s[0].validity||{}).badInput)}function f(){if(_=t.element(s[0].querySelector(".md-select-menu-container")),x=a,c.mdContainerClass){var e=_[0].getAttribute("class")+" "+c.mdContainerClass;_[0].setAttribute("class",e)}N=_.find("md-select-menu").controller("mdSelectMenu"),N.init(C,c.ngModel),s.on("$destroy",function(){_.remove()})}function g(e){var n=[32,13,38,40];if(-1!=n.indexOf(e.keyCode))e.preventDefault(),b(e);else if(e.keyCode<=90&&e.keyCode>=31){e.preventDefault();var o=N.optNodeForKeyboardSearch(e);if(!o)return;var i=t.element(o).controller("mdOption");N.isMultiple||N.deselect(Object.keys(N.selected)[0]),N.select(i.hashKey,i.value),N.refreshViewValue()}}function b(){x.isOpen=!0,s.attr("aria-expanded","true"),e.show({scope:x,preserveScope:!0,skipCompile:!0,element:_,target:s[0],selectCtrl:y,preserveElement:!0,hasBackdrop:!0,loadingAsync:c.mdOnOpen?a.$eval(c.mdOnOpen)||!0:!1})["finally"](function(){x.isOpen=!1,s.focus(),s.attr("aria-expanded","false"),C.$setTouched()})}var E,v,$=!0,M=l[0],y=l[1],C=l[2],A=l[3],T=s.find("md-select-value"),w=t.isDefined(c.readonly);if(M){var k=M.isErrorGetter||function(){return C.$invalid&&C.$touched};if(M.input&&s.find("md-select-header").find("input")[0]!==M.input[0])throw new Error("<md-input-container> can only have *one* child <input>, <textarea> or <select> element!");M.input=s,M.label||r.expect(s,"aria-label",s.attr("placeholder")),a.$watch(k,M.setInvalid)}var _,x,N;if(f(),i(s),c.name&&A){var H=s.parent()[0].querySelector('select[name=".'+c.name+'"]');o.nextTick(function(){var e=t.element(H).controller("ngModel");e&&A.$removeControl(e)})}A&&t.isDefined(c.multiple)&&o.nextTick(function(){var e=C.$modelValue||C.$viewValue;e&&A.$setPristine()});var S=C.$render;C.$render=function(){S(),u(),h(),p()},c.$observe("placeholder",C.$render),y.setLabelText=function(e){if(y.setIsPlaceholder(!e),c.mdSelectedText)e=d(c.mdSelectedText)(a);else{var t=c.placeholder||(M&&M.label?M.label.text():"");e=e||t||""}var n=T.children().eq(0);n.html(e)},y.setIsPlaceholder=function(e){e?(T.addClass("md-select-placeholder"),M&&M.label&&M.label.addClass("md-placeholder")):(T.removeClass("md-select-placeholder"),M&&M.label&&M.label.removeClass("md-placeholder"))},w||(s.on("focus",function(e){M&&M.element.hasClass("md-input-has-value")&&M.setFocused(!0)}),s.on("blur",function(e){$&&($=!1,x.isOpen&&e.stopImmediatePropagation()),x.isOpen||(M&&M.setFocused(!1),p())})),y.triggerClose=function(){d(c.mdOnClose)(a)},a.$$postDigest(function(){m(),u(),h()}),a.$watch(N.selectedLabels,u);var D;c.$observe("ngMultiple",function(e){D&&D();var t=d(e);D=a.$watch(function(){return t(a)},function(e,t){e===n&&t===n||(e?s.attr("multiple","multiple"):s.removeAttr("multiple"),s.attr("aria-multiselectable",e?"true":"false"),_&&(N.setMultiple(e),S=C.$render,C.$render=function(){S(),u(),h(),p()},C.$render()))})}),c.$observe("disabled",function(e){t.isString(e)&&(e=!0),E!==n&&E===e||(E=e,e?s.attr({"aria-disabled":"true"}).removeAttr("tabindex").off("click",b).off("keydown",g):s.attr({tabindex:c.tabindex,"aria-disabled":"false"}).on("click",b).on("keydown",g))}),c.hasOwnProperty("disabled")||c.hasOwnProperty("ngDisabled")||(s.attr({"aria-disabled":"false"}),s.on("click",b),s.on("keydown",g));var O={role:"listbox","aria-expanded":"false","aria-multiselectable":c.multiple===n||c.ngMultiple?"false":"true"};s[0].hasAttribute("id")||(O.id="select_"+o.nextUid());var I="select_container_"+o.nextUid();_.attr("id",I),O["aria-owns"]=I,s.attr(O),a.$on("$destroy",function(){e.destroy()["finally"](function(){M&&(M.setFocused(!1),M.setHasValue(!1),M.input=null),C.$setTouched()})})}}return{restrict:"E",require:["^?mdInputContainer","mdSelect","ngModel","?^form"],compile:s,controller:function(){}}}function o(e,o,i){function r(e,n,r,a){function d(e){13!=e.keyCode&&32!=e.keyCode||s(e)}function s(n){var i=o.getClosest(n.target,"md-option"),r=i&&t.element(i).data("$mdOptionController");if(i&&r){if(i.hasAttribute("disabled"))return n.stopImmediatePropagation(),!1;var a=c.hashGetter(r.value),d=t.isDefined(c.selected[a]);e.$apply(function(){c.isMultiple?d?c.deselect(a):c.select(a,r.value):d||(c.deselect(Object.keys(c.selected)[0]),c.select(a,r.value)),c.refreshViewValue()})}}var c=a[0];i(n),n.on("click",s),n.on("keypress",d)}function a(i,r,a){function d(){var e=l.ngModel.$modelValue||l.ngModel.$viewValue||[];if(t.isArray(e)){var n=Object.keys(l.selected),o=e.map(l.hashGetter),i=n.filter(function(e){return-1===o.indexOf(e)});i.forEach(l.deselect),o.forEach(function(t,n){l.select(t,e[n])})}}function s(){var e=l.ngModel.$viewValue||l.ngModel.$modelValue;Object.keys(l.selected).forEach(l.deselect),l.select(l.hashGetter(e),e)}var l=this;l.isMultiple=t.isDefined(r.multiple),l.selected={},l.options={},i.$watchCollection(function(){return l.options},function(){l.ngModel.$render()});var m,u;l.setMultiple=function(e){function n(e,n){return t.isArray(e||n||[])}var o=l.ngModel;u=u||o.$isEmpty,l.isMultiple=e,m&&m(),l.isMultiple?(o.$validators["md-multiple"]=n,o.$render=d,i.$watchCollection(l.modelBinding,function(e){n(e)&&d(e),l.ngModel.$setPristine()}),o.$isEmpty=function(e){return!e||0===e.length}):(delete o.$validators["md-multiple"],o.$render=s)};var h,p,f,g="",b=300;l.optNodeForKeyboardSearch=function(e){h&&clearTimeout(h),h=setTimeout(function(){h=n,g="",f=n,p=n},b),g+=String.fromCharCode(e.keyCode);var o=new RegExp("^"+g,"i");p||(p=a.find("md-option"),f=new Array(p.length),t.forEach(p,function(e,t){f[t]=e.textContent.trim()}));for(var i=0;i<f.length;++i)if(o.test(f[i]))return p[i]},l.init=function(n,o){if(l.ngModel=n,l.modelBinding=o,n.$options&&n.$options.trackBy){var r={},a=e(n.$options.trackBy);l.hashGetter=function(e,t){return r.$value=e,a(t||i,r)}}else l.hashGetter=function(e){return t.isObject(e)?"object_"+(e.$$mdSelectId||(e.$$mdSelectId=++c)):e};l.setMultiple(l.isMultiple)},l.selectedLabels=function(e){e=e||{};var t=e.mode||"html",n=o.nodesToArray(a[0].querySelectorAll("md-option[selected]"));if(n.length){var i;return"html"==t?i=function(e){var t=e.innerHTML,n=e.querySelector(".md-ripple-container");return n?t.replace(n.outerHTML,""):t}:"aria"==t&&(i=function(e){return e.hasAttribute("aria-label")?e.getAttribute("aria-label"):e.textContent}),n.map(i).join(", ")}return""},l.select=function(e,t){var n=l.options[e];n&&n.setSelected(!0),l.selected[e]=t},l.deselect=function(e){var t=l.options[e];t&&t.setSelected(!1),delete l.selected[e]},l.addOption=function(e,n){if(t.isDefined(l.options[e]))throw new Error('Duplicate md-option values are not allowed in a select. Duplicate value "'+n.value+'" found.');l.options[e]=n,t.isDefined(l.selected[e])&&(l.select(e,n.value),l.refreshViewValue())},l.removeOption=function(e){delete l.options[e]},l.refreshViewValue=function(){var e,n=[];for(var o in l.selected)(e=l.options[o])?n.push(e.value):n.push(l.selected[o]);var i=l.ngModel.$options&&l.ngModel.$options.trackBy,r=l.isMultiple?n:n[0],a=l.ngModel.$modelValue;(i?t.equals(a,r):a==r)||(l.ngModel.$setViewValue(r),l.ngModel.$render())}}return a.$inject=["$scope","$attrs","$element"],{restrict:"E",require:["mdSelectMenu"],scope:!1,controller:a,link:{pre:r}}}function i(e,n){function o(e,n){return e.append(t.element('<div class="md-text">').append(e.contents())),e.attr("tabindex",n.tabindex||"0"),i}function i(o,i,r,a){function d(e,t,n){if(!m.hashGetter)return void(n||o.$$postDigest(function(){d(e,t,!0)}));var i=m.hashGetter(t,o),r=m.hashGetter(e,o);c.hashKey=r,c.value=e,m.removeOption(i,c),m.addOption(r,c)}function s(){var e={role:"option","aria-selected":"false"};i[0].hasAttribute("id")||(e.id="select_option_"+n.nextUid()),i.attr(e)}var c=a[0],m=a[1];m.isMultiple&&(i.addClass("md-checkbox-enabled"),i.prepend(l.clone())),t.isDefined(r.ngValue)?o.$watch(r.ngValue,d):t.isDefined(r.value)?d(r.value):o.$watch(function(){return i.text().trim()},d),r.$observe("disabled",function(e){e?i.attr("tabindex","-1"):i.attr("tabindex","0")}),o.$$postDigest(function(){r.$observe("selected",function(e){t.isDefined(e)&&("string"==typeof e&&(e=!0),e?(m.isMultiple||m.deselect(Object.keys(m.selected)[0]),m.select(c.hashKey,c.value)):m.deselect(c.hashKey),m.refreshViewValue())})}),e.attach(o,i),s(),o.$on("$destroy",function(){m.removeOption(c.hashKey,c)})}function r(e){this.selected=!1,this.setSelected=function(t){t&&!this.selected?e.attr({selected:"selected","aria-selected":"true"}):!t&&this.selected&&(e.removeAttr("selected"),e.attr("aria-selected","false")),this.selected=t}}return r.$inject=["$element"],{restrict:"E",require:["mdOption","^^mdSelectMenu"],controller:r,compile:o}}function r(){function e(e,n){function o(){return e.parent().find("md-select-header").length}function i(){var o=e.find("label");o.length||(o=t.element("<label>"),e.prepend(o)),o.addClass("md-container-ignore"),n.label&&o.text(n.label)}o()||i()}return{restrict:"E",compile:e}}function a(){return{restrict:"E"}}function d(e){function o(e,o,c,l,m,u,h,p,f){function g(e,t,n){function o(){return h(t,{addClass:"md-leave"}).start()}function i(){t.removeClass("md-active"),t.attr("aria-hidden","true"),t[0].style.display="none",E(n),!n.$destroy&&n.restoreFocus&&n.target.focus()}return n=n||{},n.cleanupInteraction(),n.cleanupResizing(),n.hideBackdrop(),n.$destroy===!0?i():o().then(i)}function b(i,r,a){function d(e,t,n){return n.parent.append(t),m(function(e,n){try{h(t,{removeClass:"md-leave",duration:0}).start().then(s).then(e)}catch(o){n(o)}})}function s(){return m(function(e){if(a.isRemoved)return m.reject(!1);var t=v(i,r,a);t.container.element.css(M.toCss(t.container.styles)),t.dropDown.element.css(M.toCss(t.dropDown.styles)),u(function(){r.addClass("md-active"),t.dropDown.element.css(M.toCss({transform:""})),b(a.focusedNode),e()})})}function g(e,t,n){return n.disableParentScroll&&!c.getClosest(n.target,"MD-DIALOG")?n.restoreScroll=c.disableScrollAround(n.element,n.parent):n.disableParentScroll=!1,n.hasBackdrop&&(n.backdrop=c.createBackdrop(e,"md-select-backdrop md-click-catcher"),p.enter(n.backdrop,f[0].body,null,{duration:0})),function(){n.backdrop&&n.backdrop.remove(),n.disableParentScroll&&n.restoreScroll(),delete n.restoreScroll}}function b(e){e&&!e.hasAttribute("disabled")&&e.focus()}function E(e,n){var o=r.find("md-select-menu");if(!n.target)throw new Error(c.supplant($,[n.target]));t.extend(n,{isRemoved:!1,target:t.element(n.target),parent:t.element(n.parent),selectEl:o,contentEl:r.find("md-content"),optionNodes:o[0].getElementsByTagName("md-option")})}function y(){var e=function(e,t,n){return function(){if(!n.isRemoved){var o=v(e,t,n),i=o.container,r=o.dropDown;i.element.css(M.toCss(i.styles)),r.element.css(M.toCss(r.styles))}}}(i,r,a),n=t.element(l);return n.on("resize",e),n.on("orientationchange",e),function(){n.off("resize",e),n.off("orientationchange",e)}}function C(){a.loadingAsync&&!a.isRemoved&&(i.$$loadingAsyncDone=!1,i.progressMode="indeterminate",m.when(a.loadingAsync).then(function(){i.$$loadingAsyncDone=!0,i.progressMode="",delete a.loadingAsync}).then(function(){u(s)}))}function A(){function t(t){t.preventDefault(),t.stopPropagation(),a.restoreFocus=!1,c.nextTick(e.hide,!0)}function i(t){var n=o.KEY_CODE;switch(t.preventDefault(),t.stopPropagation(),t.keyCode){case n.UP_ARROW:return l();case n.DOWN_ARROW:return s();case n.SPACE:case n.ENTER:var i=c.getClosest(t.target,"md-option");i&&(u.triggerHandler({type:"click",target:i}),t.preventDefault()),m(t);break;case n.TAB:case n.ESCAPE:t.stopPropagation(),t.preventDefault(),a.restoreFocus=!0,c.nextTick(e.hide,!0);break;default:if(t.keyCode>=31&&t.keyCode<=90){var r=u.controller("mdSelectMenu").optNodeForKeyboardSearch(t);a.focusedNode=r||a.focusedNode,r&&r.focus()}}}function d(e){var t,o=c.nodesToArray(a.optionNodes),i=o.indexOf(a.focusedNode);do-1===i?i=0:"next"===e&&i<o.length-1?i++:"prev"===e&&i>0&&i--,t=o[i],t.hasAttribute("disabled")&&(t=n);while(!t&&i<o.length-1&&i>0);t&&t.focus(),a.focusedNode=t}function s(){d("next")}function l(){d("prev")}function m(t){function n(){var e=!1;if(t&&t.currentTarget.children.length>0){var n=t.currentTarget.children[0],o=n.scrollHeight>n.clientHeight;if(o&&n.children.length>0){var i=t.pageX-t.currentTarget.getBoundingClientRect().left;i>n.querySelector("md-option").offsetWidth&&(e=!0)}}return e}if(!(t&&"click"==t.type&&t.currentTarget!=u[0]||n())){var o=c.getClosest(t.target,"md-option");o&&o.hasAttribute&&!o.hasAttribute("disabled")&&(t.preventDefault(),t.stopPropagation(),h.isMultiple||(a.restoreFocus=!0,c.nextTick(function(){e.hide(h.ngModel.$viewValue)},!0)))}}if(!a.isRemoved){var u=a.selectEl,h=u.controller("mdSelectMenu")||{};return r.addClass("md-clickable"),a.backdrop&&a.backdrop.on("click",t),u.on("keydown",i),u.on("click",m),function(){a.backdrop&&a.backdrop.off("click",t),u.off("keydown",i),u.off("click",m),r.removeClass("md-clickable"),a.isRemoved=!0}}}return C(),E(i,a),a.hideBackdrop=g(i,r,a),d(i,r,a).then(function(e){return r.attr("aria-hidden","false"),a.alreadyOpen=!0,a.cleanupInteraction=A(),a.cleanupResizing=y(),e},a.hideBackdrop);
}function E(e){var t=e.selectCtrl;if(t){var n=e.selectEl.controller("mdSelectMenu");t.setLabelText(n.selectedLabels()),t.triggerClose()}}function v(e,n,o){var m,u=n[0],h=o.target[0].children[0],p=f[0].body,g=o.selectEl[0],b=o.contentEl[0],E=p.getBoundingClientRect(),v=h.getBoundingClientRect(),$=!1,M={left:E.left+s,top:s,bottom:E.height-s,right:E.width-s-(c.floatingScrollbars()?16:0)},y={top:v.top-M.top,left:v.left-M.left,right:M.right-(v.left+v.width),bottom:M.bottom-(v.top+v.height)},C=E.width-2*s,A=g.querySelector("md-option[selected]"),T=g.getElementsByTagName("md-option"),w=g.getElementsByTagName("md-optgroup"),k=d(n,b),_=i(o.loadingAsync);m=_?b.firstElementChild||b:A?A:w.length?w[0]:T.length?T[0]:b.firstElementChild||b,b.offsetWidth>C?b.style["max-width"]=C+"px":b.style.maxWidth=null,$&&(b.style["min-width"]=v.width+"px"),k&&g.classList.add("md-overflow");var x=m;"MD-OPTGROUP"===(x.tagName||"").toUpperCase()&&(x=T[0]||b.firstElementChild||b,m=x),o.focusedNode=x,u.style.display="block";var N=g.getBoundingClientRect(),H=a(m);if(m){var S=l.getComputedStyle(m);H.paddingLeft=parseInt(S.paddingLeft,10)||0,H.paddingRight=parseInt(S.paddingRight,10)||0}if(k){var D=b.offsetHeight/2;b.scrollTop=H.top+H.height/2-D,y.top<D?b.scrollTop=Math.min(H.top,b.scrollTop+D-y.top):y.bottom<D&&(b.scrollTop=Math.max(H.top+H.height-N.height,b.scrollTop-D+y.bottom))}var O,I,R,L;$?(O=v.left,I=v.top+v.height,R="50% 0",I+N.height>M.bottom&&(I=v.top-N.height,R="50% 100%")):(O=v.left+H.left-H.paddingLeft+2,I=Math.floor(v.top+v.height/2-H.height/2-H.top+b.scrollTop)+2,R=H.left+v.width/2+"px "+(H.top+H.height/2-b.scrollTop)+"px 0px",L=Math.min(v.width+H.paddingLeft+H.paddingRight,C));var P=u.getBoundingClientRect(),F=Math.round(100*Math.min(v.width/N.width,1))/100,B=Math.round(100*Math.min(v.height/N.height,1))/100;return{container:{element:t.element(u),styles:{left:Math.floor(r(M.left,O,M.right-P.width)),top:Math.floor(r(M.top,I,M.bottom-P.height)),"min-width":L}},dropDown:{element:t.element(g),styles:{transformOrigin:R,transform:o.alreadyOpen?"":c.supplant("scale({0},{1})",[F,B])}}}}var $="$mdSelect.show() expected a target element in options.target but got '{0}'!",M=c.dom.animator;return{parent:"body",themable:!0,onShow:b,onRemove:g,hasBackdrop:!0,disableParentScroll:!0}}function i(e){return e&&t.isFunction(e.then)}function r(e,t,n){return Math.max(e,Math.min(t,n))}function a(e){return e?{left:e.offsetLeft,top:e.offsetTop,width:e.offsetWidth,height:e.offsetHeight}:{left:0,top:0,width:0,height:0}}function d(e,t){var n=!1;try{var o=e[0].style.display;e[0].style.display="block",n=t.scrollHeight>t.offsetHeight,e[0].style.display=o}finally{}return n}return o.$inject=["$mdSelect","$mdConstant","$mdUtil","$window","$q","$$rAF","$animateCss","$animate","$document"],e("$mdSelect").setDefaults({methods:["target"],options:o})}var s=8,c=0,l=t.element('<div class="md-container"><div class="md-icon"></div></div>');t.module("material.components.select",["material.core","material.components.backdrop"]).directive("mdSelect",e).directive("mdSelectMenu",o).directive("mdOption",i).directive("mdOptgroup",r).directive("mdSelectHeader",a).provider("$mdSelect",d),e.$inject=["$mdSelect","$mdUtil","$mdTheming","$mdAria","$compile","$parse"],o.$inject=["$parse","$mdUtil","$mdTheming"],i.$inject=["$mdButtonInkRipple","$mdUtil"],d.$inject=["$$interimElementProvider"]}(),function(){function e(e,t){return["$mdUtil",function(n){return{restrict:"A",multiElement:!0,link:function(o,i,r){var a=o.$on("$md-resize-enable",function(){a(),o.$watch(r[e],function(e){!!e===t&&(n.nextTick(function(){o.$broadcast("$md-resize")}),n.dom.animator.waitTransitionEnd(i).then(function(){o.$broadcast("$md-resize")}))})})}}}]}t.module("material.components.showHide",["material.core"]).directive("ngShow",e("ngShow",!0)).directive("ngHide",e("ngHide",!1))}(),function(){function e(e,n){return function(o){function i(){return e.when(o).then(function(e){return d=e,e})}var r,a="SideNav '"+o+"' is not available!",d=e.get(o);return d||e.notFoundError(o),r={isOpen:function(){return d&&d.isOpen()},isLockedOpen:function(){return d&&d.isLockedOpen()},toggle:function(){return d?d.toggle():n.reject(a)},open:function(){return d?d.open():n.reject(a)},close:function(){return d?d.close():n.reject(a)},then:function(e){var o=d?n.when(d):i();return o.then(e||t.noop)}}}}function o(){return{restrict:"A",require:"^mdSidenav",link:function(e,t,n,o){}}}function i(e,o,i,r,a,d,s,c,l,m){function u(d,u,h,p){function f(e,t){d.isLockedOpen=e,e===t?u.toggleClass("md-locked-open",!!e):a[e?"addClass":"removeClass"](u,"md-locked-open"),w.toggleClass("md-locked-open",!!e)}function g(e){var t=o.findFocusTarget(u)||o.findFocusTarget(u,"[md-sidenav-focus]")||u,n=u.parent();return n[e?"on":"off"]("keydown",v),w[e?"on":"off"]("click",$),e&&(y=m[0].activeElement),b(e),C=l.all([e?a.enter(w,n):a.leave(w),a[e?"removeClass":"addClass"](u,"md-closed")]).then(function(){d.isOpen&&t&&t.focus()})}function b(e){var o=u.parent();e&&!M?(M=o.css("overflow"),o.css("overflow","hidden")):t.isDefined(M)&&(o.css("overflow",M),M=n)}function E(e){return d.isOpen==e?l.when(!0):l(function(t){d.isOpen=e,o.nextTick(function(){C.then(function(e){d.isOpen||(y&&y.focus(),y=null),t(e)})})})}function v(e){var t=e.keyCode===i.KEY_CODE.ESCAPE;return t?$(e):l.when(!0)}function $(e){return e.preventDefault(),p.close()}var M,y=null,C=l.when(!0),A=s(h.mdIsLockedOpen),T=function(){return A(d.$parent,{$media:function(t){return c.warn("$media is deprecated for is-locked-open. Use $mdMedia instead."),e(t)},$mdMedia:e})},w=o.createBackdrop(d,"md-sidenav-backdrop md-opaque ng-enter");r(u),r.inherit(w,u),u.on("$destroy",function(){w.remove(),p.destroy()}),d.$on("$destroy",function(){w.remove()}),d.$watch(T,f),d.$watch("isOpen",g),p.$toggleOpen=E}return{restrict:"E",scope:{isOpen:"=?mdIsOpen"},controller:"$mdSidenavController",compile:function(e){return e.addClass("md-closed"),e.attr("tabIndex","-1"),u}}}function r(e,t,n,o,i){var r=this;r.isOpen=function(){return!!e.isOpen},r.isLockedOpen=function(){return!!e.isLockedOpen},r.open=function(){return r.$toggleOpen(!0)},r.close=function(){return r.$toggleOpen(!1)},r.toggle=function(){return r.$toggleOpen(!e.isOpen)},r.$toggleOpen=function(t){return i.when(e.isOpen=t)},r.destroy=o.register(r,n.mdComponentId)}t.module("material.components.sidenav",["material.core","material.components.backdrop"]).factory("$mdSidenav",e).directive("mdSidenav",i).directive("mdSidenavFocus",o).controller("$mdSidenavController",r),e.$inject=["$mdComponentRegistry","$q"],i.$inject=["$mdMedia","$mdUtil","$mdConstant","$mdTheming","$animate","$compile","$parse","$log","$q","$document"],r.$inject=["$scope","$element","$attrs","$mdComponentRegistry","$q"]}(),function(){function e(e,n,o,i,r,a,d,s,c){function l(e,t){return t.tabindex||e.attr("tabindex",0),e.attr("role","slider"),o.expect(e,"aria-label"),m}function m(o,s,l,m){function u(){E(),y(),b()}function h(e){Y=parseFloat(e),s.attr("aria-valuemin",e),u()}function p(e){K=parseFloat(e),s.attr("aria-valuemax",e),u()}function f(e){G=parseFloat(e),b()}function g(){s.attr("aria-disabled",!!P)}function b(){if(t.isDefined(l.mdDiscrete)&&!t.isUndefined(G)){if(0>=G){var e="Slider step value must be greater than zero when in discrete mode";throw c.error(e),new Error(e)}var o=Math.floor((K-Y)/G);if(!X){X=t.element("<canvas>").css("position","absolute"),j.append(X);var i=n.getComputedStyle(j[0]);Q=X[0].getContext("2d"),Q.fillStyle=i.backgroundColor||"black"}var r=v();X[0].width=r.width,X[0].height=r.height;for(var a,d=0;o>=d;d++)a=Math.floor(r.width*(d/o)),Q.fillRect(a-1,0,2,r.height)}}function E(){Z=q[0].getBoundingClientRect()}function v(){return V(),Z}function $(e){if(!P){var t;e.keyCode===r.KEY_CODE.LEFT_ARROW?t=-G:e.keyCode===r.KEY_CODE.RIGHT_ARROW&&(t=G),t&&((e.metaKey||e.ctrlKey||e.altKey)&&(t*=4),e.preventDefault(),e.stopPropagation(),o.$evalAsync(function(){M(m.$viewValue+t)}))}}function M(e){m.$setViewValue(C(A(e)))}function y(){isNaN(m.$viewValue)&&(m.$viewValue=m.$modelValue);var e=(m.$viewValue-Y)/(K-Y);o.modelValue=m.$viewValue,s.attr("aria-valuenow",m.$viewValue),T(e),B.text(m.$viewValue)}function C(e){return t.isNumber(e)?Math.max(Y,Math.min(K,e)):void 0}function A(e){if(t.isNumber(e)){var n=Math.round((e-Y)/G)*G+Y;return Math.round(1e3*n)/1e3}}function T(e){e=O(e);var t=100*e+"%";z.css("width",t),U.css("left",t),s.toggleClass("md-min",0===e),s.toggleClass("md-max",1===e)}function w(e){if(!P){s.addClass("md-active"),s[0].focus(),E();var t=R(I(e.pointer.x)),n=C(A(t));o.$apply(function(){M(n),T(L(n))})}}function k(e){if(!P){s.removeClass("md-dragging md-active");var t=R(I(e.pointer.x)),n=C(A(t));o.$apply(function(){M(n),y()})}}function _(e){P||(J=!0,e.stopPropagation(),s.addClass("md-dragging"),H(e))}function x(e){J&&(e.stopPropagation(),H(e))}function N(e){J&&(e.stopPropagation(),J=!1)}function H(e){ee?D(e.pointer.x):S(e.pointer.x)}function S(e){o.$evalAsync(function(){M(R(I(e)))})}function D(e){var t=R(I(e)),n=C(A(t));T(I(e)),B.text(n)}function O(e){return Math.max(0,Math.min(e||0,1))}function I(e){return Math.max(0,Math.min(1,(e-Z.left)/Z.width))}function R(e){return Y+e*(K-Y)}function L(e){return(e-Y)/(K-Y)}a(s),m=m||{$setViewValue:function(e){this.$viewValue=e,this.$viewChangeListeners.forEach(function(e){e()})},$parsers:[],$formatters:[],$viewChangeListeners:[]};var P=!1;l.$observe("disabled",function(e){P=i.parseAttributeBoolean(e,!1),g()});var F=t.element(s[0].querySelector(".md-thumb")),B=t.element(s[0].querySelector(".md-thumb-text")),U=F.parent(),q=t.element(s[0].querySelector(".md-track-container")),z=t.element(s[0].querySelector(".md-track-fill")),j=t.element(s[0].querySelector(".md-track-ticks")),V=i.throttle(E,5e3);t.isDefined(l.min)?l.$observe("min",h):h(0),t.isDefined(l.max)?l.$observe("max",p):p(100),t.isDefined(l.step)?l.$observe("step",f):f(1),d.register(s,"drag"),s.on("keydown",$).on("$md.pressdown",w).on("$md.pressup",k).on("$md.dragstart",_).on("$md.drag",x).on("$md.dragend",N),setTimeout(u,0);var W=e.throttle(u);t.element(n).on("resize",W),o.$on("$destroy",function(){t.element(n).off("resize",W)}),m.$render=y,m.$viewChangeListeners.push(y),m.$formatters.push(C),m.$formatters.push(A);var Y,K,G,X,Q,Z={};E();var J=!1,ee=t.isDefined(l.mdDiscrete)}return{scope:{},require:"?ngModel",template:'<div class="md-slider-wrapper"><div class="md-track-container"><div class="md-track"></div><div class="md-track md-track-fill"></div><div class="md-track-ticks"></div></div><div class="md-thumb-container"><div class="md-thumb"></div><div class="md-focus-thumb"></div><div class="md-focus-ring"></div><div class="md-sign"><span class="md-thumb-text"></span></div><div class="md-disabled-thumb"></div></div></div>',compile:l}}t.module("material.components.slider",["material.core"]).directive("mdSlider",e),e.$inject=["$$rAF","$window","$mdAria","$mdUtil","$mdConstant","$mdTheming","$mdGesture","$parse","$log"]}(),function(){function e(e,o,i,r,a){function d(e){function t(e,t){t.addClass("md-sticky-clone");var n={element:e,clone:t};return f.items.push(n),r.nextTick(function(){h.prepend(n.clone)}),p(),function(){f.items.forEach(function(t,n){t.element[0]===e[0]&&(f.items.splice(n,1),t.clone.remove())}),p()}}function a(){f.items.forEach(d),f.items=f.items.sort(function(e,t){return e.top<t.top?-1:1});for(var e,t=h.prop("scrollTop"),n=f.items.length-1;n>=0;n--)if(t>f.items[n].top){e=f.items[n];break}l(e)}function d(e){var t=e.element[0];for(e.top=0,e.left=0;t&&t!==h[0];)e.top+=t.offsetTop,e.left+=t.offsetLeft,t.offsetParent&&(e.right+=t.offsetParent.offsetWidth-t.offsetWidth-t.offsetLeft),t=t.offsetParent;e.height=e.element.prop("offsetHeight"),e.clone.css("margin-left",e.left+"px"),r.floatingScrollbars()&&e.clone.css("margin-right","0")}function s(){var e=h.prop("scrollTop"),t=e>(s.prevScrollTop||0);if(s.prevScrollTop=e,0===e)return void l(null);if(t){if(f.next&&f.next.top<=e)return void l(f.next);if(f.current&&f.next&&f.next.top-e<=f.next.height)return void u(f.current,e+(f.next.top-f.next.height-e))}if(!t){if(f.current&&f.prev&&e<f.current.top)return void l(f.prev);if(f.next&&f.current&&e>=f.next.top-f.current.height)return void u(f.current,e+(f.next.top-e-f.current.height))}f.current&&u(f.current,e)}function l(e){if(f.current!==e){f.current&&(u(f.current,null),m(f.current,null)),e&&m(e,"active"),f.current=e;var t=f.items.indexOf(e);f.next=f.items[t+1],f.prev=f.items[t-1],m(f.next,"next"),m(f.prev,"prev")}}function m(e,t){e&&e.state!==t&&(e.state&&(e.clone.attr("sticky-prev-state",e.state),e.element.attr("sticky-prev-state",e.state)),e.clone.attr("sticky-state",t),e.element.attr("sticky-state",t),e.state=t)}function u(e,t){e&&(null===t||t===n?e.translateY&&(e.translateY=null,e.clone.css(o.CSS.TRANSFORM,"")):(e.translateY=t,e.clone.css(o.CSS.TRANSFORM,"translate3d("+e.left+"px,"+t+"px,0)")))}var h=e.$element,p=i.throttle(a);c(h),h.on("$scrollstart",p),h.on("$scroll",s);var f;return f={prev:null,current:null,next:null,items:[],add:t,refreshElements:a}}function s(n){var o,i=t.element("<div>");e[0].body.appendChild(i[0]);for(var r=["sticky","-webkit-sticky"],a=0;a<r.length;++a)if(i.css({position:r[a],top:0,"z-index":2}),i.css("position")==r[a]){o=r[a];break}return i.remove(),o}function c(e){function t(){+r.now()-o>a?(n=!1,e.triggerHandler("$scrollend")):(e.triggerHandler("$scroll"),i.throttle(t))}var n,o,a=200;e.on("scroll touchmove",function(){n||(n=!0,i.throttle(t),e.triggerHandler("$scrollstart")),e.triggerHandler("$scroll"),o=+r.now()})}var l=s();return function(e,t,n){var o=t.controller("mdContent");if(o)if(l)t.css({position:l,top:0,"z-index":2});else{var i=o.$element.data("$$sticky");i||(i=d(o),o.$element.data("$$sticky",i));var r=n||a(t.clone())(e),s=i.add(t,r);e.$on("$destroy",s)}}}t.module("material.components.sticky",["material.core","material.components.content"]).factory("$mdSticky",e),e.$inject=["$document","$mdConstant","$$rAF","$mdUtil","$compile"]}(),function(){function e(e,n,o,i){return{restrict:"E",replace:!0,transclude:!0,template:'<div class="md-subheader">  <div class="md-subheader-inner">    <span class="md-subheader-content"></span>  </div></div>',link:function(r,a,d,s,c){function l(e){return t.element(e[0].querySelector(".md-subheader-content"))}o(a);var m=a[0].outerHTML;c(r,function(e){l(a).append(e)}),a.hasClass("md-no-sticky")||c(r,function(t){var o='<div class="md-subheader-wrapper">'+m+"</div>",d=n(o)(r);e(r,a,d),i.nextTick(function(){l(d).append(t)})})}}}t.module("material.components.subheader",["material.core","material.components.sticky"]).directive("mdSubheader",e),e.$inject=["$mdSticky","$compile","$mdTheming","$mdUtil"]}(),function(){function e(e){function t(e){function t(t,i,r){var a=e(r[n]);i.on(o,function(e){t.$apply(function(){a(t,{$event:e})})})}return{restrict:"A",link:t}}var n="md"+e,o="$md."+e.toLowerCase();return t.$inject=["$parse"],t}t.module("material.components.swipe",["material.core"]).directive("mdSwipeLeft",e("SwipeLeft")).directive("mdSwipeRight",e("SwipeRight")).directive("mdSwipeUp",e("SwipeUp")).directive("mdSwipeDown",e("SwipeDown"))}(),function(){function e(e,n,o,i,r,a){function d(e,d){var c=s.compile(e,d);return e.addClass("md-dragging"),function(e,d,s,l){function m(t){f&&f(e)||(t.stopPropagation(),d.addClass("md-dragging"),E={width:g.prop("offsetWidth")},d.removeClass("transition"))}function u(e){if(E){e.stopPropagation(),e.srcEvent&&e.srcEvent.preventDefault();var t=e.pointer.distanceX/E.width,n=l.$viewValue?1+t:t;n=Math.max(0,Math.min(1,n)),g.css(o.CSS.TRANSFORM,"translate3d("+100*n+"%,0,0)"),E.translate=n}}function h(e){if(E){e.stopPropagation(),d.removeClass("md-dragging"),g.css(o.CSS.TRANSFORM,"");var t=l.$viewValue?E.translate>.5:E.translate<.5;t&&p(!l.$viewValue),E=null}}function p(t){e.$apply(function(){l.$setViewValue(t),l.$render()})}l=l||n.fakeNgModel();var f=null;null!=s.disabled?f=function(){return!0}:s.ngDisabled&&(f=i(s.ngDisabled));var g=t.element(d[0].querySelector(".md-thumb-container")),b=t.element(d[0].querySelector(".md-container"));r(function(){d.removeClass("md-dragging")}),c(e,d,s,l),f&&e.$watch(f,function(e){d.attr("tabindex",e?-1:0)}),a.register(b,"drag"),b.on("$md.dragstart",m).on("$md.drag",u).on("$md.dragend",h);var E}}var s=e[0];return{restrict:"E",priority:210,transclude:!0,template:'<div class="md-container"><div class="md-bar"></div><div class="md-thumb-container"><div class="md-thumb" md-ink-ripple md-ink-ripple-checkbox></div></div></div><div ng-transclude class="md-label"></div>',require:"?ngModel",compile:d}}t.module("material.components.switch",["material.core","material.components.checkbox"]).directive("mdSwitch",e),e.$inject=["mdCheckboxDirective","$mdUtil","$mdConstant","$parse","$$rAF","$mdGesture"]}(),function(){function e(e){return{restrict:"E",link:function(t,n,o){t.$on("$destroy",function(){e.destroy()})}}}function n(e){function n(e){i=e}function o(e,n,o,r){function a(t,a,d){i=d.textContent||d.content;var l=!r("gt-sm");return a=o.extractElementByName(a,"md-toast",!0),d.element=a,d.onSwipe=function(e,t){var i=e.type.replace("$md.",""),r=i.replace("swipe","");"down"===r&&-1!=d.position.indexOf("top")&&!l||"up"===r&&(-1!=d.position.indexOf("bottom")||l)||("left"!==r&&"right"!==r||!l)&&(a.addClass("md-"+i),o.nextTick(n.cancel))},d.openClass=s(d.position),d.parent.addClass(d.openClass),o.hasComputedStyle(d.parent,"position","static")&&d.parent.css("position","relative"),a.on(c,d.onSwipe),a.addClass(l?"md-bottom":d.position.split(" ").map(function(e){return"md-"+e}).join(" ")),d.parent&&d.parent.addClass("md-toast-animating"),e.enter(a,d.parent).then(function(){d.parent&&d.parent.removeClass("md-toast-animating")})}function d(t,n,i){return n.off(c,i.onSwipe),i.parent&&i.parent.addClass("md-toast-animating"),i.openClass&&i.parent.removeClass(i.openClass),(1==i.$destroy?n.remove():e.leave(n)).then(function(){i.parent&&i.parent.removeClass("md-toast-animating"),o.hasComputedStyle(i.parent,"position","static")&&i.parent.css("position","")})}function s(e){return r("gt-sm")?"md-toast-open-"+(e.indexOf("top")>-1?"top":"bottom"):"md-toast-open-bottom"}var c="$md.swipeleft $md.swiperight $md.swipeup $md.swipedown";return{onShow:a,onRemove:d,position:"bottom left",themable:!0,hideDelay:3e3,autoWrap:!0,transformTemplate:function(e,n){var o=n.autoWrap&&e&&!/md-toast-content/g.test(e);if(o){var i=document.createElement("md-template");i.innerHTML=e;for(var r=0;r<i.children.length;r++)if("MD-TOAST"===i.children[r].nodeName){var a=t.element('<div class="md-toast-content">');a.append(i.children[r].children),i.children[r].appendChild(a[0])}return i.outerHTML}return e||""}}}var i,r="ok",a=e("$mdToast").setDefaults({methods:["position","hideDelay","capsule","parent"],options:o}).addPreset("simple",{argOption:"textContent",methods:["textContent","content","action","highlightAction","theme","parent"],options:["$mdToast","$mdTheming",function(e,t){var n={template:'<md-toast md-theme="{{ toast.theme }}" ng-class="{\'md-capsule\': toast.capsule}">  <div class="md-toast-content">    <span flex role="alert" aria-relevant="all" aria-atomic="true">      {{ toast.content }}    </span>    <md-button class="md-action" ng-if="toast.action" ng-click="toast.resolve()" ng-class="{\'md-highlight\': toast.highlightAction}">      {{ toast.action }}    </md-button>  </div></md-toast>',controller:["$scope",function(t){var n=this;t.$watch(function(){return i},function(){n.content=i}),this.resolve=function(){e.hide(r)}}],theme:t.defaultTheme(),controllerAs:"toast",bindToController:!0};return n}]}).addMethod("updateTextContent",n).addMethod("updateContent",n);return o.$inject=["$animate","$mdToast","$mdUtil","$mdMedia"],a}t.module("material.components.toast",["material.core","material.components.button"]).directive("mdToast",e).provider("$mdToast",n),e.$inject=["$mdToast"],n.$inject=["$$interimElementProvider"]}(),function(){t.module("material.components.tabs",["material.core","material.components.icon"])}(),function(){function e(e,n,o,i,r){var a=t.bind(null,o.supplant,"translate3d(0,{0}px,0)");return{template:"",restrict:"E",link:function(d,s,c){function l(){function i(e){var t=s.parent().find("md-content");!f&&t.length&&l(null,t),e=d.$eval(e),e===!1?g():g=u()}function l(e,t){t&&s.parent()[0]===t.parent()[0]&&(f&&f.off("scroll",$),f=t,g=u())}function m(e){var t=e?e.target.scrollTop:E;M(),b=Math.min(p/v,Math.max(0,b+t-E)),s.css(n.CSS.TRANSFORM,a([-b*v])),f.css(n.CSS.TRANSFORM,a([(p-b)*v])),E=t,o.nextTick(function(){var e=s.hasClass("md-whiteframe-z1");e&&!b?r.removeClass(s,"md-whiteframe-z1"):!e&&b&&r.addClass(s,"md-whiteframe-z1")})}function u(){return f?(f.on("scroll",$),f.attr("scroll-shrink","true"),e(h),function(){f.off("scroll",$),f.attr("scroll-shrink","false"),e(h)}):t.noop}function h(){p=s.prop("offsetHeight");var e=-p*v+"px";f.css({"margin-top":e,"margin-bottom":e}),m()}var p,f,g=t.noop,b=0,E=0,v=c.mdShrinkSpeedFactor||.5,$=e.throttle(m),M=o.debounce(h,5e3);d.$on("$mdContentLoaded",l),c.$observe("mdScrollShrink",i),c.ngShow&&d.$watch(c.ngShow,h),c.ngHide&&d.$watch(c.ngHide,h),d.$on("$destroy",g)}i(s),t.isDefined(c.mdScrollShrink)&&l()}}}t.module("material.components.toolbar",["material.core","material.components.content"]).directive("mdToolbar",e),e.$inject=["$$rAF","$mdConstant","$mdUtil","$mdTheming","$animate"]}(),function(){function e(e,n,o,i,r,a,d,s,c){function l(d,l,h){function p(){t.isDefined(h.mdDelay)||(d.delay=m)}function f(){var e="center top";switch(d.direction){case"left":e="right center";break;case"right":e="left center";break;case"top":e="center bottom";break;case"bottom":e="center top"}w.css("transform-origin",e)}function g(){d.$on("$destroy",function(){d.visible=!1,l.remove(),t.element(n).off("resize",_)}),d.$watch("visible",function(e){e?M():y()}),d.$watch("direction",C)}function b(){T.attr("aria-label")||T.text().trim()||T.attr("aria-label",l.text().trim())}function E(){l.detach(),l.attr("role","tooltip")}function v(){function e(){$(!1)}var o=!1,r=t.element(n);if(T[0]&&"MutationObserver"in n){var a=new MutationObserver(function(e){e.forEach(function(e){"disabled"===e.attributeName&&T[0].disabled&&($(!1),d.$digest())})});a.observe(T[0],{attributes:!0})}var s=function(){c=document.activeElement===T[0]},c=!1;r.on("blur",s),r.on("resize",_),document.addEventListener("scroll",e,!0),d.$on("$destroy",function(){r.off("blur",s),r.off("resize",_),document.removeEventListener("scroll",e,!0),a&&a.disconnect()});var l=function(e){return"focus"===e.type&&c?void(c=!1):(T.on("blur mouseleave touchend touchcancel",m),void $(!0))},m=function(){var e=d.hasOwnProperty("autohide")?d.autohide:h.hasOwnProperty("mdAutohide");(e||o||i[0].activeElement!==T[0])&&(T.off("blur mouseleave touchend touchcancel",m),T.triggerHandler("blur"),$(!1)),o=!1};T.on("mousedown",function(){o=!0}),T.on("focus mouseenter touchstart",l)}function $(t){$.value=!!t,$.queued||(t?($.queued=!0,e(function(){d.visible=$.value,$.queued=!1},d.delay)):r.nextTick(function(){d.visible=!1}))}function M(){return k.append(l),r.hasComputedStyle(l,"display","none")?(d.visible=!1,void l.detach()):(C(),void t.forEach([l,w],function(e){s.addClass(e,"md-show")}))}function y(){var e=[];t.forEach([l,w],function(t){t.parent()&&t.hasClass("md-show")&&e.push(s.removeClass(t,"md-show"))}),c.all(e).then(function(){d.visible||l.detach()})}function C(){d.visible&&(f(),A())}function A(){function e(e){var t={left:e.left,top:e.top};return t.left=Math.min(t.left,k.prop("scrollWidth")-n.width-u),t.left=Math.max(t.left,u),t.top=Math.min(t.top,k.prop("scrollHeight")-n.height-u),t.top=Math.max(t.top,u),t}function t(e){return"left"===e?{left:o.left-n.width-u,top:o.top+o.height/2-n.height/2}:"right"===e?{left:o.left+o.width+u,top:o.top+o.height/2-n.height/2}:"top"===e?{left:o.left+o.width/2-n.width/2,top:o.top-n.height-u}:{left:o.left+o.width/2-n.width/2,top:o.top+o.height+u}}var n=r.offsetRect(l,k),o=r.offsetRect(T,k),i=t(d.direction),a=l.prop("offsetParent");d.direction?i=e(i):a&&i.top>a.scrollHeight-n.height-u&&(i=e(t("top"))),l.css({left:i.left+"px",top:i.top+"px"})}a(l);var T=r.getParentWithPointerEvents(l),w=t.element(l[0].getElementsByClassName("md-content")[0]),k=t.element(document.body),_=o.throttle(function(){C()});s.pin&&s.pin(l,T),p(),E(),v(),f(),g(),b()}var m=0,u=8;return{restrict:"E",transclude:!0,priority:210,template:'<div class="md-content" ng-transclude></div>',scope:{delay:"=?mdDelay",visible:"=?mdVisible",autohide:"=?mdAutohide",direction:"@?mdDirection"},link:l}}t.module("material.components.tooltip",["material.core"]).directive("mdTooltip",e),e.$inject=["$timeout","$window","$$rAF","$document","$mdUtil","$mdTheming","$rootElement","$animate","$q"]}(),function(){function e(){return{controller:o,template:n,compile:function(e,t){e.addClass("md-virtual-repeat-container").addClass(t.hasOwnProperty("mdOrientHorizontal")?"md-orient-horizontal":"md-orient-vertical")}}}function n(e){return'<div class="md-virtual-repeat-scroller"><div class="md-virtual-repeat-sizer"></div><div class="md-virtual-repeat-offsetter">'+e[0].innerHTML+"</div></div>"}function o(e,n,o,i,r,a,d,s){this.$rootScope=i,this.$scope=a,this.$element=d,this.$attrs=s,this.size=0,this.scrollSize=0,this.scrollOffset=0,this.horizontal=this.$attrs.hasOwnProperty("mdOrientHorizontal"),this.repeater=null,this.autoShrink=this.$attrs.hasOwnProperty("mdAutoShrink"),this.autoShrinkMin=parseInt(this.$attrs.mdAutoShrinkMin,10)||0,this.originalSize=null,this.offsetSize=parseInt(this.$attrs.mdOffsetSize,10)||0,this.oldElementSize=null,this.$attrs.mdTopIndex?(this.bindTopIndex=o(this.$attrs.mdTopIndex),this.topIndex=this.bindTopIndex(this.$scope),t.isDefined(this.topIndex)||(this.topIndex=0,this.bindTopIndex.assign(this.$scope,0)),this.$scope.$watch(this.bindTopIndex,t.bind(this,function(e){e!==this.topIndex&&this.scrollToIndex(e)}))):this.topIndex=0,this.scroller=d[0].getElementsByClassName("md-virtual-repeat-scroller")[0],this.sizer=this.scroller.getElementsByClassName("md-virtual-repeat-sizer")[0],this.offsetter=this.scroller.getElementsByClassName("md-virtual-repeat-offsetter")[0];var c=t.bind(this,this.updateSize);e(t.bind(this,function(){c();var e=n.debounce(c,10,null,!1),o=t.element(r);this.size||e(),o.on("resize",e),a.$on("$destroy",function(){o.off("resize",e)}),a.$emit("$md-resize-enable"),a.$on("$md-resize",c)}))}function i(e){return{controller:r,priority:1e3,require:["mdVirtualRepeat","^^mdVirtualRepeatContainer"],restrict:"A",terminal:!0,transclude:"element",compile:function(t,n){var o=n.mdVirtualRepeat,i=o.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)\s*$/),r=i[1],a=e(i[2]),d=n.mdExtraName&&e(n.mdExtraName);return function(e,t,n,o,i){o[0].link_(o[1],i,r,a,d)}}}}function r(e,n,o,i,r,a,d){this.$scope=e,this.$element=n,this.$attrs=o,this.$browser=i,this.$document=r,this.$rootScope=a,this.$$rAF=d,this.onDemand=o.hasOwnProperty("mdOnDemand"),this.browserCheckUrlChange=i.$$checkUrlChange,this.newStartIndex=0,this.newEndIndex=0,this.newVisibleEnd=0,this.startIndex=0,this.endIndex=0,this.itemSize=e.$eval(o.mdItemSize)||null,this.isFirstRender=!0,this.isVirtualRepeatUpdating_=!1,this.itemsLength=0,this.unwatchItemSize_=t.noop,this.blocks={},this.pooledBlocks=[],e.$on("$destroy",t.bind(this,this.cleanupBlocks_))}function a(e){if(!t.isFunction(e.getItemAtIndex)||!t.isFunction(e.getLength))throw Error("When md-on-demand is enabled, the Object passed to md-virtual-repeat must implement functions getItemAtIndex() and getLength() ");this.model=e}t.module("material.components.virtualRepeat",["material.core","material.components.showHide"]).directive("mdVirtualRepeatContainer",e).directive("mdVirtualRepeat",i);var d=1533917,s=3;o.$inject=["$$rAF","$mdUtil","$parse","$rootScope","$window","$scope","$element","$attrs"],o.prototype.register=function(e){this.repeater=e,t.element(this.scroller).on("scroll wheel touchmove touchend",t.bind(this,this.handleScroll_))},o.prototype.isHorizontal=function(){return this.horizontal},o.prototype.getSize=function(){return this.size},o.prototype.setSize_=function(e){var t=this.getDimensionName_();this.size=e,this.$element[0].style[t]=e+"px"},o.prototype.unsetSize_=function(){this.$element[0].style[this.getDimensionName_()]=this.oldElementSize,this.oldElementSize=null},o.prototype.updateSize=function(){this.originalSize||(this.size=this.isHorizontal()?this.$element[0].clientWidth:this.$element[0].clientHeight,this.handleScroll_(),this.repeater&&this.repeater.containerUpdated())},o.prototype.getScrollSize=function(){return this.scrollSize},o.prototype.getDimensionName_=function(){return this.isHorizontal()?"width":"height"},o.prototype.sizeScroller_=function(e){var t=this.getDimensionName_(),n=this.isHorizontal()?"height":"width";if(this.sizer.innerHTML="",d>e)this.sizer.style[t]=e+"px";else{this.sizer.style[t]="auto",this.sizer.style[n]="auto";var o=Math.floor(e/d),i=document.createElement("div");i.style[t]="1533917px",i.style[n]="1px";for(var r=0;o>r;r++)this.sizer.appendChild(i.cloneNode(!1));i.style[t]=e-o*d+"px",this.sizer.appendChild(i)}},o.prototype.autoShrink_=function(e){var t=Math.max(e,this.autoShrinkMin*this.repeater.getItemSize());if(this.autoShrink&&t!==this.size){null===this.oldElementSize&&(this.oldElementSize=this.$element[0].style[this.getDimensionName_()]);var n=this.originalSize||this.size;!n||n>t?(this.originalSize||(this.originalSize=this.size),this.setSize_(t)):null!==this.originalSize&&(this.unsetSize_(),this.originalSize=null,this.updateSize()),this.repeater.containerUpdated()}},o.prototype.setScrollSize=function(e){var t=e+this.offsetSize;this.scrollSize!==t&&(this.sizeScroller_(t),this.autoShrink_(t),this.scrollSize=t)},o.prototype.getScrollOffset=function(){return this.scrollOffset},o.prototype.scrollTo=function(e){this.scroller[this.isHorizontal()?"scrollLeft":"scrollTop"]=e,this.handleScroll_()},o.prototype.scrollToIndex=function(e){var t=this.repeater.getItemSize(),n=this.repeater.itemsLength;e>n&&(e=n-1),this.scrollTo(t*e)},o.prototype.resetScroll=function(){this.scrollTo(0)},o.prototype.handleScroll_=function(){var e=this.isHorizontal()?this.scroller.scrollLeft:this.scroller.scrollTop;if(!(e===this.scrollOffset||e>this.scrollSize-this.size)){var t=this.repeater.getItemSize();if(t){var n=Math.max(0,Math.floor(e/t)-s),o=(this.isHorizontal()?"translateX(":"translateY(")+n*t+"px)";if(this.scrollOffset=e,this.offsetter.style.webkitTransform=o,this.offsetter.style.transform=o,this.bindTopIndex){var i=Math.floor(e/t);i!==this.topIndex&&i<this.repeater.getItemCount()&&(this.topIndex=i,this.bindTopIndex.assign(this.$scope,i),this.$rootScope.$$phase||this.$scope.$digest())}this.repeater.containerUpdated()}}},i.$inject=["$parse"],r.$inject=["$scope","$element","$attrs","$browser","$document","$rootScope","$$rAF"],r.Block,r.prototype.link_=function(e,n,o,i,r){this.container=e,this.transclude=n,this.repeatName=o,this.rawRepeatListExpression=i,this.extraName=r,this.sized=!1,this.repeatListExpression=t.bind(this,this.repeatListExpression_),this.container.register(this)},r.prototype.cleanupBlocks_=function(){t.forEach(this.pooledBlocks,function(e){e.element.remove()})},r.prototype.readItemSize_=function(){if(!this.itemSize){this.items=this.repeatListExpression(this.$scope),this.parentNode=this.$element[0].parentNode;var e=this.getBlock_(0);e.element[0].parentNode||this.parentNode.appendChild(e.element[0]),this.itemSize=e.element[0][this.container.isHorizontal()?"offsetWidth":"offsetHeight"]||null,this.blocks[0]=e,this.poolBlock_(0),this.itemSize&&this.containerUpdated()}},r.prototype.repeatListExpression_=function(e){var t=this.rawRepeatListExpression(e);if(this.onDemand&&t){var n=new a(t);return n.$$includeIndexes(this.newStartIndex,this.newVisibleEnd),n}return t},r.prototype.containerUpdated=function(){return this.itemSize?(this.sized||(this.items=this.repeatListExpression(this.$scope)),this.sized||(this.unwatchItemSize_(),this.sized=!0,this.$scope.$watchCollection(this.repeatListExpression,t.bind(this,function(e,t){this.isVirtualRepeatUpdating_||this.virtualRepeatUpdate_(e,t)}))),
this.updateIndexes_(),void((this.newStartIndex!==this.startIndex||this.newEndIndex!==this.endIndex||this.container.getScrollOffset()>this.container.getScrollSize())&&(this.items instanceof a&&this.items.$$includeIndexes(this.newStartIndex,this.newEndIndex),this.virtualRepeatUpdate_(this.items,this.items)))):(this.unwatchItemSize_=this.$scope.$watchCollection(this.repeatListExpression,t.bind(this,function(e){e&&e.length&&this.$$rAF(t.bind(this,this.readItemSize_))})),void(this.$rootScope.$$phase||this.$scope.$digest()))},r.prototype.getItemSize=function(){return this.itemSize},r.prototype.getItemCount=function(){return this.itemsLength},r.prototype.virtualRepeatUpdate_=function(e,n){this.isVirtualRepeatUpdating_=!0;var o=e&&e.length||0,i=!1;if(this.items&&o<this.items.length&&0!==this.container.getScrollOffset())return this.items=e,void this.container.resetScroll();if(o!==this.itemsLength&&(i=!0,this.itemsLength=o),this.items=e,(e!==n||i)&&this.updateIndexes_(),this.parentNode=this.$element[0].parentNode,i&&this.container.setScrollSize(o*this.itemSize),this.isFirstRender){this.isFirstRender=!1;var r=this.$attrs.mdStartIndex?this.$scope.$eval(this.$attrs.mdStartIndex):this.container.topIndex;this.container.scrollToIndex(r)}Object.keys(this.blocks).forEach(function(e){var t=parseInt(e,10);(t<this.newStartIndex||t>=this.newEndIndex)&&this.poolBlock_(t)},this),this.$browser.$$checkUrlChange=t.noop;var a,d,s=[],c=[];for(a=this.newStartIndex;a<this.newEndIndex&&null==this.blocks[a];a++)d=this.getBlock_(a),this.updateBlock_(d,a),s.push(d);for(;null!=this.blocks[a];a++)this.updateBlock_(this.blocks[a],a);for(var l=a-1;a<this.newEndIndex;a++)d=this.getBlock_(a),this.updateBlock_(d,a),c.push(d);s.length&&this.parentNode.insertBefore(this.domFragmentFromBlocks_(s),this.$element[0].nextSibling),c.length&&this.parentNode.insertBefore(this.domFragmentFromBlocks_(c),this.blocks[l]&&this.blocks[l].element[0].nextSibling),this.$browser.$$checkUrlChange=this.browserCheckUrlChange,this.startIndex=this.newStartIndex,this.endIndex=this.newEndIndex,this.isVirtualRepeatUpdating_=!1},r.prototype.getBlock_=function(e){if(this.pooledBlocks.length)return this.pooledBlocks.pop();var n;return this.transclude(t.bind(this,function(t,o){n={element:t,"new":!0,scope:o},this.updateScope_(o,e),this.parentNode.appendChild(t[0])})),n},r.prototype.updateBlock_=function(e,t){this.blocks[t]=e,(e["new"]||e.scope.$index!==t||e.scope[this.repeatName]!==this.items[t])&&(e["new"]=!1,this.updateScope_(e.scope,t),this.$rootScope.$$phase||e.scope.$digest())},r.prototype.updateScope_=function(e,t){e.$index=t,e[this.repeatName]=this.items&&this.items[t],this.extraName&&(e[this.extraName(this.$scope)]=this.items[t])},r.prototype.poolBlock_=function(e){this.pooledBlocks.push(this.blocks[e]),this.parentNode.removeChild(this.blocks[e].element[0]),delete this.blocks[e]},r.prototype.domFragmentFromBlocks_=function(e){var t=this.$document[0].createDocumentFragment();return e.forEach(function(e){t.appendChild(e.element[0])}),t},r.prototype.updateIndexes_=function(){var e=this.items?this.items.length:0,t=Math.ceil(this.container.getSize()/this.itemSize);this.newStartIndex=Math.max(0,Math.min(e-t,Math.floor(this.container.getScrollOffset()/this.itemSize))),this.newVisibleEnd=this.newStartIndex+t+s,this.newEndIndex=Math.min(e,this.newVisibleEnd),this.newStartIndex=Math.max(0,this.newStartIndex-s)},a.prototype.$$includeIndexes=function(e,t){for(var n=e;t>n;n++)this.hasOwnProperty(n)||(this[n]=this.model.getItemAtIndex(n));this.length=this.model.getLength()}}(),function(){function e(e){function t(t,r,a){var d=parseInt(a.mdWhiteframe,10)||i;(d>o||n>d)&&(e.warn("md-whiteframe attribute value is invalid. It should be a number between "+n+" and "+o,r[0]),d=i),r.addClass("md-whiteframe-"+d+"dp")}var n=1,o=24,i=4;return{restrict:"A",link:t}}t.module("material.components.whiteframe",["material.core"]).directive("mdWhiteframe",e),e.$inject=["$log"]}(),function(){function e(e,o,d,s,c,l,m,u,h,p){function f(){d.initOptionalProperties(e,h,{searchText:null,selectedItem:null}),c(o),v(),d.nextTick(function(){M(),b(),E(),o.on("focus",E)})}function g(){function t(){var e=0,t=o.find("md-input-container");if(t.length){var n=t.find("input");e=t.prop("offsetHeight"),e-=n.prop("offsetTop"),e-=n.prop("offsetHeight"),e+=t.prop("offsetTop")}return e}function n(){var e=ue.scrollContainer.getBoundingClientRect(),t={};e.right>m.right-r&&(t.left=c.right-e.width+"px"),ue.$.scrollContainer.css(t)}if(!ue)return d.nextTick(g,!1,e);var s,c=ue.wrap.getBoundingClientRect(),l=ue.snap.getBoundingClientRect(),m=ue.root.getBoundingClientRect(),u=l.bottom-m.top,p=m.bottom-l.top,f=c.left-m.left,b=c.width,E=t();h.mdFloatingLabel&&(f+=a,b-=2*a),s={left:f+"px",minWidth:b+"px",maxWidth:Math.max(c.right-m.left,m.right-c.left)-r+"px"},u>p&&m.height-c.bottom-r<i?(s.top="auto",s.bottom=p+"px",s.maxHeight=Math.min(i,c.top-m.top-r)+"px"):(s.top=u-E+"px",s.bottom="auto",s.maxHeight=Math.min(i,m.bottom+d.scrollTop()-c.bottom-r)+"px"),ue.$.scrollContainer.css(s),d.nextTick(n,!1)}function b(){ue.$.root.length&&(c(ue.$.scrollContainer),ue.$.scrollContainer.detach(),ue.$.root.append(ue.$.scrollContainer),m.pin&&m.pin(ue.$.scrollContainer,u))}function E(){e.autofocus&&ue.input.focus()}function v(){var n=parseInt(e.delay,10)||0;h.$observe("disabled",function(e){ce.isDisabled=d.parseAttributeBoolean(e,!1)}),h.$observe("required",function(e){ce.isRequired=d.parseAttributeBoolean(e,!1)}),h.$observe("readonly",function(e){ce.isReadonly=d.parseAttributeBoolean(e,!1)}),e.$watch("searchText",n?d.debounce(O,n):O),e.$watch("selectedItem",_),t.element(l).on("resize",g),e.$on("$destroy",$)}function $(){if(ce.hidden||d.enableScrolling(),t.element(l).off("resize",g),ue){var e="ul scroller scrollContainer input".split(" ");t.forEach(e,function(e){ue.$[e].remove()})}}function M(){ue={main:o[0],scrollContainer:o[0].getElementsByClassName("md-virtual-repeat-container")[0],scroller:o[0].getElementsByClassName("md-virtual-repeat-scroller")[0],ul:o.find("ul")[0],input:o.find("input")[0],wrap:o.find("md-autocomplete-wrap")[0],root:document.body},ue.li=ue.ul.getElementsByTagName("li"),ue.snap=y(),ue.$=C(ue)}function y(){for(var e=o;e.length;e=e.parent())if(t.isDefined(e.attr("md-autocomplete-snap")))return e[0];return ue.wrap}function C(e){var n={};for(var o in e)e.hasOwnProperty(o)&&(n[o]=t.element(e[o]));return n}function A(t,n){!t&&n?(g(),ue&&d.nextTick(function(){d.disableScrollAround(ue.ul)},!1,e)):t&&!n&&d.nextTick(function(){d.enableScrolling()},!1,e)}function T(){pe=!0}function w(){ge||ue.input.focus(),pe=!1,ce.hidden=j()}function k(){ue.input.focus()}function _(t,n){t&&B(t).then(function(o){e.searchText=o,H(t,n)}),t!==n&&x()}function x(){t.isFunction(e.itemChange)&&e.itemChange(U(e.selectedItem))}function N(){t.isFunction(e.textChange)&&e.textChange()}function H(e,t){fe.forEach(function(n){n(e,t)})}function S(e){-1==fe.indexOf(e)&&fe.push(e)}function D(e){var t=fe.indexOf(e);-1!=t&&fe.splice(t,1)}function O(t,n){ce.index=q(),t!==n&&B(e.selectedItem).then(function(o){t!==o&&(e.selectedItem=null,t!==n&&N(),X()?de():(ce.matches=[],z(!1),te()))})}function I(){ge=!1,pe||(ce.hidden=j())}function R(e){e&&(pe=!1,ge=!1),ue.input.blur()}function L(){ge=!0,t.isString(e.searchText)||(e.searchText=""),ce.hidden=j(),ce.hidden||de()}function P(e){switch(e.keyCode){case s.KEY_CODE.DOWN_ARROW:if(ce.loading)return;e.stopPropagation(),e.preventDefault(),ce.index=Math.min(ce.index+1,ce.matches.length-1),oe(),te();break;case s.KEY_CODE.UP_ARROW:if(ce.loading)return;e.stopPropagation(),e.preventDefault(),ce.index=ce.index<0?ce.matches.length-1:Math.max(0,ce.index-1),oe(),te();break;case s.KEY_CODE.TAB:if(w(),ce.hidden||ce.loading||ce.index<0||ce.matches.length<1)return;Z(ce.index);break;case s.KEY_CODE.ENTER:if(ce.hidden||ce.loading||ce.index<0||ce.matches.length<1)return;if(Y())return;e.stopPropagation(),e.preventDefault(),Z(ce.index);break;case s.KEY_CODE.ESCAPE:e.stopPropagation(),e.preventDefault(),J(),R(!0)}}function F(){return t.isNumber(e.minLength)?e.minLength:1}function B(t){function n(t){return t&&e.itemText?e.itemText(U(t)):null}return p.when(n(t)||t)}function U(e){if(!e)return n;var t={};return ce.itemName&&(t[ce.itemName]=e),t}function q(){return e.autoselect?0:-1}function z(e){ce.loading!=e&&(ce.loading=e),ce.hidden=j()}function j(){return ce.loading&&!W()?!0:Y()?!0:ge?!V():!0}function V(){return X()&&W()||ae()}function W(){return!!ce.matches.length}function Y(){return!!ce.scope.selectedItem}function K(){return ce.loading&&!Y()}function G(){return B(ce.matches[ce.index])}function X(){return(e.searchText||"").length>=F()}function Q(e,t,n){Object.defineProperty(ce,e,{get:function(){return n},set:function(e){var o=n;n=e,t(e,o)}})}function Z(t){d.nextTick(function(){B(ce.matches[t]).then(function(e){var t=ue.$.input.controller("ngModel");t.$setViewValue(e),t.$render()})["finally"](function(){e.selectedItem=ce.matches[t],z(!1)})},!1)}function J(){z(!0),ce.index=0,ce.matches=[],e.searchText="";var t=document.createEvent("CustomEvent");t.initCustomEvent("input",!0,!0,{value:e.searchText}),ue.input.dispatchEvent(t),ue.input.focus()}function ee(n){function o(t){t&&(t=p.when(t),Ee++,z(!0),d.nextTick(function(){t.then(i)["finally"](function(){0===--Ee&&z(!1)})},!0,e))}function i(t){he[a]=t,(n||"")===(e.searchText||"")&&(ce.matches=t,ce.hidden=j(),ce.loading&&z(!1),e.selectOnMatch&&se(),te(),g())}var r=e.$parent.$eval(me),a=n.toLowerCase(),s=t.isArray(r),c=!!r.then;s?i(r):c&&o(r)}function te(){G().then(function(e){ce.messages=[ne(),e]})}function ne(){if(be===ce.matches.length)return"";switch(be=ce.matches.length,ce.matches.length){case 0:return"There are no matches available.";case 1:return"There is 1 match available.";default:return"There are "+ce.matches.length+" matches available."}}function oe(){if(ue.li[0]){var e=ue.li[0].offsetHeight,t=e*ce.index,n=t+e,o=ue.scroller.clientHeight,i=ue.scroller.scrollTop;i>t?re(t):n>i+o&&re(n-o)}}function ie(){return 0!==Ee}function re(e){ue.$.scrollContainer.controller("mdVirtualRepeatContainer").scrollTo(e)}function ae(){var e=(ce.scope.searchText||"").length;return ce.hasNotFound&&!W()&&(!ce.loading||ie())&&e>=F()&&(ge||pe)&&!Y()}function de(){var t=e.searchText||"",n=t.toLowerCase();!e.noCache&&he[n]?(ce.matches=he[n],te()):ee(t),ce.hidden=j()}function se(){var t=e.searchText,n=ce.matches,o=n[0];1===n.length&&B(o).then(function(n){var o=t==n;e.matchInsensitive&&!o&&(o=t.toLowerCase()==n.toLowerCase()),o&&Z(0)})}var ce=this,le=e.itemsExpr.split(/ in /i),me=le[1],ue=null,he={},pe=!1,fe=[],ge=!1,be=0,Ee=0;return Q("hidden",A,!0),ce.scope=e,ce.parent=e.$parent,ce.itemName=le[0],ce.matches=[],ce.loading=!1,ce.hidden=!0,ce.index=null,ce.messages=[],ce.id=d.nextUid(),ce.isDisabled=null,ce.isRequired=null,ce.isReadonly=null,ce.hasNotFound=!1,ce.keydown=P,ce.blur=I,ce.focus=L,ce.clear=J,ce.select=Z,ce.listEnter=T,ce.listLeave=w,ce.mouseUp=k,ce.getCurrentDisplayValue=G,ce.registerSelectedItemWatcher=S,ce.unregisterSelectedItemWatcher=D,ce.notFoundVisible=ae,ce.loadingIsVisible=K,f()}t.module("material.components.autocomplete").controller("MdAutocompleteCtrl",e);var o=41,i=5.5*o,r=8,a=2;e.$inject=["$scope","$element","$mdUtil","$mdConstant","$mdTheming","$window","$animate","$rootElement","$attrs","$q"]}(),function(){function e(){return{controller:"MdAutocompleteCtrl",controllerAs:"$mdAutocompleteCtrl",scope:{inputName:"@mdInputName",inputMinlength:"@mdInputMinlength",inputMaxlength:"@mdInputMaxlength",searchText:"=?mdSearchText",selectedItem:"=?mdSelectedItem",itemsExpr:"@mdItems",itemText:"&mdItemText",placeholder:"@placeholder",noCache:"=?mdNoCache",selectOnMatch:"=?mdSelectOnMatch",matchInsensitive:"=?mdMatchCaseInsensitive",itemChange:"&?mdSelectedItemChange",textChange:"&?mdSearchTextChange",minLength:"=?mdMinLength",delay:"=?mdDelay",autofocus:"=?mdAutofocus",floatingLabel:"@?mdFloatingLabel",autoselect:"=?mdAutoselect",menuClass:"@?mdMenuClass",inputId:"@?mdInputId"},link:function(e,t,n,o){o.hasNotFound=!!t.attr("md-has-not-found")},template:function(e,t){function n(){var t=e.find("md-item-template").detach(),n=t.length?t.html():e.html();return t.length||e.empty(),"<md-autocomplete-parent-scope md-autocomplete-replace>"+n+"</md-autocomplete-parent-scope>"}function o(){var t=e.find("md-not-found").detach(),n=t.length?t.html():"";return n?'<li ng-if="$mdAutocompleteCtrl.notFoundVisible()"                         md-autocomplete-parent-scope>'+n+"</li>":""}function i(){return t.mdFloatingLabel?'            <md-input-container flex ng-if="floatingLabel">              <label>{{floatingLabel}}</label>              <input type="search"                  '+(null!=s?'tabindex="'+s+'"':"")+'                  id="{{ inputId || \'fl-input-\' + $mdAutocompleteCtrl.id }}"                  name="{{inputName}}"                  autocomplete="off"                  ng-required="$mdAutocompleteCtrl.isRequired"                  ng-readonly="$mdAutocompleteCtrl.isReadonly"                  ng-minlength="inputMinlength"                  ng-maxlength="inputMaxlength"                  ng-disabled="$mdAutocompleteCtrl.isDisabled"                  ng-model="$mdAutocompleteCtrl.scope.searchText"                  ng-keydown="$mdAutocompleteCtrl.keydown($event)"                  ng-blur="$mdAutocompleteCtrl.blur()"                  '+(null!=t.mdNoAsterisk?'md-no-asterisk="'+t.mdNoAsterisk+'"':"")+'                  ng-focus="$mdAutocompleteCtrl.focus()"                  aria-owns="ul-{{$mdAutocompleteCtrl.id}}"                  '+(null!=t.mdSelectOnFocus?'md-select-on-focus=""':"")+'                  aria-label="{{floatingLabel}}"                  aria-autocomplete="list"                  aria-haspopup="true"                  aria-activedescendant=""                  aria-expanded="{{!$mdAutocompleteCtrl.hidden}}"/>              <div md-autocomplete-parent-scope md-autocomplete-replace>'+d+"</div>            </md-input-container>":'            <input flex type="search"                '+(null!=s?'tabindex="'+s+'"':"")+'                id="{{ inputId || \'input-\' + $mdAutocompleteCtrl.id }}"                name="{{inputName}}"                ng-if="!floatingLabel"                autocomplete="off"                ng-required="$mdAutocompleteCtrl.isRequired"                ng-disabled="$mdAutocompleteCtrl.isDisabled"                ng-readonly="$mdAutocompleteCtrl.isReadonly"                ng-model="$mdAutocompleteCtrl.scope.searchText"                ng-keydown="$mdAutocompleteCtrl.keydown($event)"                ng-blur="$mdAutocompleteCtrl.blur()"                ng-focus="$mdAutocompleteCtrl.focus()"                placeholder="{{placeholder}}"                aria-owns="ul-{{$mdAutocompleteCtrl.id}}"                '+(null!=t.mdSelectOnFocus?'md-select-on-focus=""':"")+'                aria-label="{{placeholder}}"                aria-autocomplete="list"                aria-haspopup="true"                aria-activedescendant=""                aria-expanded="{{!$mdAutocompleteCtrl.hidden}}"/>            <button                type="button"                tabindex="-1"                ng-if="$mdAutocompleteCtrl.scope.searchText && !$mdAutocompleteCtrl.isDisabled"                ng-click="$mdAutocompleteCtrl.clear()">              <md-icon md-svg-icon="md-close"></md-icon>              <span class="md-visually-hidden">Clear</span>            </button>                '}var r=o(),a=n(),d=e.html(),s=t.tabindex;return r&&e.attr("md-has-not-found",!0),e.attr("tabindex","-1"),'        <md-autocomplete-wrap            layout="row"            ng-class="{ \'md-whiteframe-z1\': !floatingLabel, \'md-menu-showing\': !$mdAutocompleteCtrl.hidden }"            role="listbox">          '+i()+'          <md-progress-linear              class="'+(t.mdFloatingLabel?"md-inline":"")+'"              ng-if="$mdAutocompleteCtrl.loadingIsVisible()"              md-mode="indeterminate"></md-progress-linear>          <md-virtual-repeat-container              md-auto-shrink              md-auto-shrink-min="1"              ng-mouseenter="$mdAutocompleteCtrl.listEnter()"              ng-mouseleave="$mdAutocompleteCtrl.listLeave()"              ng-mouseup="$mdAutocompleteCtrl.mouseUp()"              ng-hide="$mdAutocompleteCtrl.hidden"              class="md-autocomplete-suggestions-container md-whiteframe-z1"              ng-class="{ \'md-not-found\': $mdAutocompleteCtrl.notFoundVisible() }"              role="presentation">            <ul class="md-autocomplete-suggestions"                ng-class="::menuClass"                id="ul-{{$mdAutocompleteCtrl.id}}">              <li md-virtual-repeat="item in $mdAutocompleteCtrl.matches"                  ng-class="{ selected: $index === $mdAutocompleteCtrl.index }"                  ng-click="$mdAutocompleteCtrl.select($index)"                  md-extra-name="$mdAutocompleteCtrl.itemName">                  '+a+"                  </li>"+r+'            </ul>          </md-virtual-repeat-container>        </md-autocomplete-wrap>        <aria-status            class="md-visually-hidden"            role="status"            aria-live="assertive">          <p ng-repeat="message in $mdAutocompleteCtrl.messages track by $index" ng-if="message">{{message}}</p>        </aria-status>'}}}t.module("material.components.autocomplete").directive("mdAutocomplete",e)}(),function(){function e(e,t){function n(e,n,o){return function(e,n,i){function r(n,o){s[o]=e[n],e.$watch(n,function(e){t.nextTick(function(){s[o]=e})})}function a(){var t=!1,n=!1;e.$watch(function(){n||t||(t=!0,e.$$postDigest(function(){n||s.$digest(),t=n=!1}))}),s.$watch(function(){n=!0})}var d=e.$mdAutocompleteCtrl,s=d.parent.$new(),c=d.itemName;r("$index","$index"),r("item",c),a(),o(s,function(e){n.after(e)})}}return{restrict:"AE",compile:n,terminal:!0,transclude:"element"}}t.module("material.components.autocomplete").directive("mdAutocompleteParentScope",e),e.$inject=["$compile","$mdUtil"]}(),function(){function e(e,n,o){function i(i,r){var d=null,s=null,c=o.mdHighlightFlags||"",l=e.$watch(function(e){return{term:i(e),unsafeText:r(e)}},function(e,o){null!==d&&e.unsafeText===o.unsafeText||(d=t.element("<div>").text(e.unsafeText).html()),null!==s&&e.term===o.term||(s=a(e.term,c)),n.html(d.replace(s,'<span class="highlight">$&</span>'))},!0);n.on("$destroy",l)}function r(e){return e&&e.replace(/[\\\^\$\*\+\?\.\(\)\|\{}\[\]]/g,"\\$&")}function a(e,t){var n="";return t.indexOf("^")>=1&&(n+="^"),n+=e,t.indexOf("$")>=1&&(n+="$"),new RegExp(r(n),t.replace(/[\$\^]/g,""))}this.init=i}t.module("material.components.autocomplete").controller("MdHighlightCtrl",e),e.$inject=["$scope","$element","$attrs"]}(),function(){function e(e,t){return{terminal:!0,controller:"MdHighlightCtrl",compile:function(n,o){var i=t(o.mdHighlightText),r=e(n.html());return function(e,t,n,o){o.init(i,r)}}}}t.module("material.components.autocomplete").directive("mdHighlightText",e),e.$inject=["$interpolate","$parse"]}(),function(){function e(e,o){function i(n,i){return n.append(o.processTemplate(r)),function(n,o,i,r){o.addClass("md-chip"),e(o),r&&t.element(o[0].querySelector(".md-chip-content")).on("blur",function(){r.resetSelectedChip(),r.$scope.$applyAsync()})}}var r=o.processTemplate(n);return{restrict:"E",require:"^?mdChips",compile:i}}t.module("material.components.chips").directive("mdChip",e);var n='    <span ng-if="!$mdChipsCtrl.readonly" class="md-visually-hidden">      {{$mdChipsCtrl.deleteHint}}    </span>';e.$inject=["$mdTheming","$mdUtil"]}(),function(){function e(e){function t(t,n,o,i){n.on("click",function(e){t.$apply(function(){i.removeChip(t.$$replacedScope.$index)})}),e(function(){n.attr({tabindex:-1,"aria-hidden":!0}),n.find("button").attr("tabindex","-1")})}return{restrict:"A",require:"^mdChips",scope:!1,link:t}}t.module("material.components.chips").directive("mdChipRemove",e),e.$inject=["$timeout"]}(),function(){function e(e){function t(t,n,o){var i=t.$parent.$mdChipsCtrl,r=i.parent.$new(!1,i.parent);r.$$replacedScope=t,r.$chip=t.$chip,r.$index=t.$index,r.$mdChipsCtrl=i;var a=i.$scope.$eval(o.mdChipTransclude);n.html(a),e(n.contents())(r)}return{restrict:"EA",terminal:!0,link:t,scope:!1}}t.module("material.components.chips").directive("mdChipTransclude",e),e.$inject=["$compile"]}(),function(){function e(e,t,n,o,i,r){this.$timeout=i,this.$mdConstant=t,this.$scope=e,this.parent=e.$parent,this.$log=n,this.$element=o,this.ngModelCtrl=null,this.userInputNgModelCtrl=null,this.userInputElement=null,this.items=[],this.selectedChip=-1,this.hasAutocomplete=!1,this.enableChipEdit=r.parseAttributeBoolean(this.mdEnableChipEdit),this.deleteHint="Press delete to remove this chip.",this.deleteButtonLabel="Remove",this.chipBuffer="",this.useOnAppend=!1,this.useTransformChip=!1,this.useOnAdd=!1,this.useOnRemove=!1,this.useOnSelect=!1}t.module("material.components.chips").controller("MdChipsCtrl",e),e.$inject=["$scope","$mdConstant","$log","$element","$timeout","$mdUtil"],e.prototype.inputKeydown=function(e){var t=this.getChipBuffer();if(!(this.hasAutocomplete&&e.isDefaultPrevented&&e.isDefaultPrevented())){if(e.keyCode===this.$mdConstant.KEY_CODE.BACKSPACE){if(t)return;return e.preventDefault(),e.stopPropagation(),void(this.items.length&&this.selectAndFocusChipSafe(this.items.length-1))}if((!this.separatorKeys||this.separatorKeys.length<1)&&(this.separatorKeys=[this.$mdConstant.KEY_CODE.ENTER]),-1!==this.separatorKeys.indexOf(e.keyCode)){if(this.hasAutocomplete&&this.requireMatch||!t)return;if(e.preventDefault(),this.hasMaxChipsReached())return;this.appendChip(t.trim()),this.resetChipBuffer()}}},e.prototype.updateChipContents=function(e,t){e>=0&&e<this.items.length&&(this.items[e]=t,this.ngModelCtrl.$setDirty())},e.prototype.isEditingChip=function(){return!!this.$element[0].getElementsByClassName("md-chip-editing").length},e.prototype.chipKeydown=function(e){if(!this.getChipBuffer()&&!this.isEditingChip())switch(e.keyCode){case this.$mdConstant.KEY_CODE.BACKSPACE:case this.$mdConstant.KEY_CODE.DELETE:if(this.selectedChip<0)return;e.preventDefault(),this.removeAndSelectAdjacentChip(this.selectedChip);break;case this.$mdConstant.KEY_CODE.LEFT_ARROW:e.preventDefault(),this.selectedChip<0&&(this.selectedChip=this.items.length),this.items.length&&this.selectAndFocusChipSafe(this.selectedChip-1);break;case this.$mdConstant.KEY_CODE.RIGHT_ARROW:e.preventDefault(),this.selectAndFocusChipSafe(this.selectedChip+1);break;case this.$mdConstant.KEY_CODE.ESCAPE:case this.$mdConstant.KEY_CODE.TAB:if(this.selectedChip<0)return;e.preventDefault(),this.onFocus()}},e.prototype.getPlaceholder=function(){var e=this.items.length&&(""==this.secondaryPlaceholder||this.secondaryPlaceholder);return e?this.secondaryPlaceholder:this.placeholder},e.prototype.removeAndSelectAdjacentChip=function(e){var n=this.getAdjacentChipIndex(e);this.removeChip(e),this.$timeout(t.bind(this,function(){this.selectAndFocusChipSafe(n)}))},e.prototype.resetSelectedChip=function(){this.selectedChip=-1},e.prototype.getAdjacentChipIndex=function(e){var t=this.items.length-1;return 0==t?-1:e==t?e-1:e},e.prototype.appendChip=function(e){if(this.useTransformChip&&this.transformChip){var n=this.transformChip({$chip:e});t.isDefined(n)&&(e=n)}if(t.isObject(e)){var o=this.items.some(function(n){return t.equals(e,n)});if(o)return}if(!(null==e||this.items.indexOf(e)+1)){var i=this.items.push(e);this.ngModelCtrl.$setDirty(),this.validateModel(),this.useOnAdd&&this.onAdd&&this.onAdd({$chip:e,$index:i})}},e.prototype.useOnAppendExpression=function(){this.$log.warn("md-on-append is deprecated; please use md-transform-chip or md-on-add instead"),this.useTransformChip&&this.transformChip||(this.useTransformChip=!0,this.transformChip=this.onAppend)},e.prototype.useTransformChipExpression=function(){this.useTransformChip=!0},e.prototype.useOnAddExpression=function(){this.useOnAdd=!0},e.prototype.useOnRemoveExpression=function(){this.useOnRemove=!0},e.prototype.useOnSelectExpression=function(){this.useOnSelect=!0},e.prototype.getChipBuffer=function(){return this.userInputElement?this.userInputNgModelCtrl?this.userInputNgModelCtrl.$viewValue:this.userInputElement[0].value:this.chipBuffer},e.prototype.resetChipBuffer=function(){this.userInputElement?this.userInputNgModelCtrl?(this.userInputNgModelCtrl.$setViewValue(""),this.userInputNgModelCtrl.$render()):this.userInputElement[0].value="":this.chipBuffer=""},e.prototype.hasMaxChipsReached=function(){return t.isString(this.maxChips)&&(this.maxChips=parseInt(this.maxChips,10)||0),this.maxChips>0&&this.items.length>=this.maxChips},e.prototype.validateModel=function(){this.ngModelCtrl.$setValidity("md-max-chips",!this.hasMaxChipsReached())},e.prototype.removeChip=function(e){var t=this.items.splice(e,1);this.ngModelCtrl.$setDirty(),this.validateModel(),t&&t.length&&this.useOnRemove&&this.onRemove&&this.onRemove({$chip:t[0],$index:e})},e.prototype.removeChipAndFocusInput=function(e){this.removeChip(e),this.onFocus()},e.prototype.selectAndFocusChipSafe=function(e){return this.items.length?e===this.items.length?this.onFocus():(e=Math.max(e,0),e=Math.min(e,this.items.length-1),this.selectChip(e),void this.focusChip(e)):(this.selectChip(-1),void this.onFocus())},e.prototype.selectChip=function(e){e>=-1&&e<=this.items.length?(this.selectedChip=e,this.useOnSelect&&this.onSelect&&this.onSelect({$chip:this.items[this.selectedChip]})):this.$log.warn("Selected Chip index out of bounds; ignoring.")},e.prototype.selectAndFocusChip=function(e){this.selectChip(e),-1!=e&&this.focusChip(e)},e.prototype.focusChip=function(e){this.$element[0].querySelector('md-chip[index="'+e+'"] .md-chip-content').focus()},e.prototype.configureNgModel=function(e){this.ngModelCtrl=e;var t=this;e.$render=function(){t.items=t.ngModelCtrl.$viewValue}},e.prototype.onFocus=function(){var e=this.$element[0].querySelector("input");e&&e.focus(),this.resetSelectedChip()},e.prototype.onInputFocus=function(){this.inputHasFocus=!0,this.resetSelectedChip()},e.prototype.onInputBlur=function(){this.inputHasFocus=!1},e.prototype.configureUserInput=function(e){this.userInputElement=e;var n=e.controller("ngModel");n!=this.ngModelCtrl&&(this.userInputNgModelCtrl=n);var o=this.$scope,i=this,r=function(e,n){o.$evalAsync(t.bind(i,n,e))};e.attr({tabindex:0}).on("keydown",function(e){r(e,i.inputKeydown)}).on("focus",function(e){r(e,i.onInputFocus)}).on("blur",function(e){r(e,i.onInputBlur)})},e.prototype.configureAutocomplete=function(e){e&&(this.hasAutocomplete=!0,e.registerSelectedItemWatcher(t.bind(this,function(e){if(e){if(this.hasMaxChipsReached())return;this.appendChip(e),this.resetChipBuffer()}})),this.$element.find("input").on("focus",t.bind(this,this.onInputFocus)).on("blur",t.bind(this,this.onInputBlur)))},e.prototype.hasFocus=function(){return this.inputHasFocus||this.selectedChip>=0}}(),function(){function e(e,t,a,d,s){function c(n,o){function i(e){if(o.ngModel){var t=r[0].querySelector(e);return t&&t.outerHTML}}var r=o.$mdUserTemplate;o.$mdUserTemplate=null;var c=i("md-chips>*[md-chip-remove]")||m.remove,l=i("md-chips>md-chip-template")||m["default"],u=i("md-chips>md-autocomplete")||i("md-chips>input")||m.input,h=r.find("md-chip");return r[0].querySelector("md-chip-template>*[md-chip-remove]")&&d.warn("invalid placement of md-chip-remove within md-chip-template."),function(n,i,r,d){t.initOptionalProperties(n,o),e(i);var p=d[0];if(p.chipContentsTemplate=l,p.chipRemoveTemplate=c,p.chipInputTemplate=u,i.attr({"aria-hidden":!0,tabindex:-1}).on("focus",function(){p.onFocus()}),o.ngModel&&(p.configureNgModel(i.controller("ngModel")),r.mdTransformChip&&p.useTransformChipExpression(),r.mdOnAppend&&p.useOnAppendExpression(),r.mdOnAdd&&p.useOnAddExpression(),r.mdOnRemove&&p.useOnRemoveExpression(),r.mdOnSelect&&p.useOnSelectExpression(),u!=m.input&&n.$watch("$mdChipsCtrl.readonly",function(e){e||t.nextTick(function(){0===u.indexOf("<md-autocomplete")&&p.configureAutocomplete(i.find("md-autocomplete").controller("mdAutocomplete")),p.configureUserInput(i.find("input"))})}),t.nextTick(function(){var e=i.find("input");e&&e.toggleClass("md-input",!0)})),h.length>0){var f=a(h.clone())(n.$parent);s(function(){i.find("md-chips-wrap").prepend(f)})}}}function l(){return{chips:t.processTemplate(n),input:t.processTemplate(o),"default":t.processTemplate(i),remove:t.processTemplate(r)}}var m=l();return{template:function(e,t){return t.$mdUserTemplate=e.clone(),m.chips},require:["mdChips"],restrict:"E",controller:"MdChipsCtrl",controllerAs:"$mdChipsCtrl",bindToController:!0,compile:c,scope:{readonly:"=readonly",placeholder:"@",secondaryPlaceholder:"@",maxChips:"@mdMaxChips",transformChip:"&mdTransformChip",onAppend:"&mdOnAppend",onAdd:"&mdOnAdd",onRemove:"&mdOnRemove",onSelect:"&mdOnSelect",deleteHint:"@",deleteButtonLabel:"@",separatorKeys:"=?mdSeparatorKeys",requireMatch:"=?mdRequireMatch"}}}t.module("material.components.chips").directive("mdChips",e);var n='      <md-chips-wrap          ng-if="!$mdChipsCtrl.readonly || $mdChipsCtrl.items.length > 0"          ng-keydown="$mdChipsCtrl.chipKeydown($event)"          ng-class="{ \'md-focused\': $mdChipsCtrl.hasFocus(), \'md-readonly\': !$mdChipsCtrl.ngModelCtrl }"          class="md-chips">        <md-chip ng-repeat="$chip in $mdChipsCtrl.items"            index="{{$index}}"            ng-class="{\'md-focused\': $mdChipsCtrl.selectedChip == $index, \'md-readonly\': $mdChipsCtrl.readonly}">          <div class="md-chip-content"              tabindex="-1"              aria-hidden="true"              ng-click="!$mdChipsCtrl.readonly && $mdChipsCtrl.focusChip($index)"              ng-focus="!$mdChipsCtrl.readonly && $mdChipsCtrl.selectChip($index)"              md-chip-transclude="$mdChipsCtrl.chipContentsTemplate"></div>          <div ng-if="!$mdChipsCtrl.readonly"               class="md-chip-remove-container"               md-chip-transclude="$mdChipsCtrl.chipRemoveTemplate"></div>        </md-chip>        <div ng-if="!$mdChipsCtrl.readonly && $mdChipsCtrl.ngModelCtrl"            class="md-chip-input-container"            md-chip-transclude="$mdChipsCtrl.chipInputTemplate"></div>        </div>      </md-chips-wrap>',o='        <input            class="md-input"            tabindex="0"            placeholder="{{$mdChipsCtrl.getPlaceholder()}}"            aria-label="{{$mdChipsCtrl.getPlaceholder()}}"            ng-model="$mdChipsCtrl.chipBuffer"            ng-focus="$mdChipsCtrl.onInputFocus()"            ng-blur="$mdChipsCtrl.onInputBlur()"            ng-trim="false"            ng-keydown="$mdChipsCtrl.inputKeydown($event)">',i="      <span>{{$chip}}</span>",r='      <button          class="md-chip-remove"          ng-if="!$mdChipsCtrl.readonly"          ng-click="$mdChipsCtrl.removeChipAndFocusInput($$replacedScope.$index)"          type="button"          aria-hidden="true"          tabindex="-1">        <md-icon md-svg-icon="md-close"></md-icon>        <span class="md-visually-hidden">          {{$mdChipsCtrl.deleteButtonLabel}}        </span>      </button>';e.$inject=["$mdTheming","$mdUtil","$compile","$log","$timeout"]}(),function(){function e(){this.selectedItem=null,this.searchText=""}t.module("material.components.chips").controller("MdContactChipsCtrl",e),e.prototype.queryContact=function(e){var n=this.contactQuery({$query:e});return this.filterSelected?n.filter(t.bind(this,this.filterSelectedContacts)):n},e.prototype.itemName=function(e){return e[this.contactName]},e.prototype.filterSelectedContacts=function(e){return-1==this.contacts.indexOf(e)}}(),function(){function e(e,t){function o(n,o){return function(n,i,r,a){t.initOptionalProperties(n,o),e(i),i.attr("tabindex","-1")}}return{template:function(e,t){return n},restrict:"E",controller:"MdContactChipsCtrl",controllerAs:"$mdContactChipsCtrl",bindToController:!0,compile:o,scope:{contactQuery:"&mdContacts",placeholder:"@",secondaryPlaceholder:"@",contactName:"@mdContactName",contactImage:"@mdContactImage",contactEmail:"@mdContactEmail",contacts:"=ngModel",requireMatch:"=?mdRequireMatch",highlightFlags:"@?mdHighlightFlags"
}}}t.module("material.components.chips").directive("mdContactChips",e);var n='      <md-chips class="md-contact-chips"          ng-model="$mdContactChipsCtrl.contacts"          md-require-match="$mdContactChipsCtrl.requireMatch"          md-autocomplete-snap>          <md-autocomplete              md-menu-class="md-contact-chips-suggestions"              md-selected-item="$mdContactChipsCtrl.selectedItem"              md-search-text="$mdContactChipsCtrl.searchText"              md-items="item in $mdContactChipsCtrl.queryContact($mdContactChipsCtrl.searchText)"              md-item-text="$mdContactChipsCtrl.itemName(item)"              md-no-cache="true"              md-autoselect              placeholder="{{$mdContactChipsCtrl.contacts.length == 0 ?                  $mdContactChipsCtrl.placeholder : $mdContactChipsCtrl.secondaryPlaceholder}}">            <div class="md-contact-suggestion">              <img                   ng-src="{{item[$mdContactChipsCtrl.contactImage]}}"                  alt="{{item[$mdContactChipsCtrl.contactName]}}"                  ng-if="item[$mdContactChipsCtrl.contactImage]" />              <span class="md-contact-name" md-highlight-text="$mdContactChipsCtrl.searchText"                    md-highlight-flags="{{$mdContactChipsCtrl.highlightFlags}}">                {{item[$mdContactChipsCtrl.contactName]}}              </span>              <span class="md-contact-email" >{{item[$mdContactChipsCtrl.contactEmail]}}</span>            </div>          </md-autocomplete>          <md-chip-template>            <div class="md-contact-avatar">              <img                   ng-src="{{$chip[$mdContactChipsCtrl.contactImage]}}"                  alt="{{$chip[$mdContactChipsCtrl.contactName]}}"                  ng-if="$chip[$mdContactChipsCtrl.contactImage]" />            </div>            <div class="md-contact-name">              {{$chip[$mdContactChipsCtrl.contactName]}}            </div>          </md-chip-template>      </md-chips>';e.$inject=["$mdTheming","$mdUtil"]}(),function(){function e(e,t,n){function o(o,i,r){function a(){var e=i.parent();return e.attr("aria-label")||e.text()?!0:!(!e.parent().attr("aria-label")&&!e.parent().text())}function d(){r.mdSvgIcon||r.mdSvgSrc||(r.mdFontIcon&&i.addClass("md-font "+r.mdFontIcon),i.addClass(e.fontSet(r.mdFontSet)))}t(i),d();var s=r.alt||r.mdFontIcon||r.mdSvgIcon||i.text(),c=r.$normalize(r.$attr.mdSvgIcon||r.$attr.mdSvgSrc||"");r["aria-label"]||(""===s||a()?i.text()||n.expect(i,"aria-hidden","true"):(n.expect(i,"aria-label",s),n.expect(i,"role","img"))),c&&r.$observe(c,function(t){i.empty(),t&&e(t).then(function(e){i.empty(),i.append(e)})})}return{restrict:"E",link:o}}t.module("material.components.icon").directive("mdIcon",["$mdIcon","$mdTheming","$mdAria",e])}(),function(){function n(){}function o(e,t){this.url=e,this.viewBoxSize=t||r.defaultViewBoxSize}function i(n,o,i,r,a,d){function s(e){if(e=e||"",$[e])return i.when(l($[e]));if(M.test(e)||y.test(e))return p(e).then(m(e));-1==e.indexOf(":")&&(e="$default:"+e);var t=n[e]?u:h;return t(e).then(m(e))}function c(e){var o=t.isUndefined(e)||!(e&&e.length);if(o)return n.defaultFontSet;var i=e;return t.forEach(n.fontSets,function(t){t.alias==e&&(i=t.fontSet||i)}),i}function l(e){var n=e.clone(),o="_cache"+d.nextUid();return n.id&&(n.id+=o),t.forEach(n.querySelectorAll("[id]"),function(e){e.id+=o}),n}function m(e){return function(t){return $[e]=g(t)?t:new b(t,n[e]),$[e].clone()}}function u(e){var t=n[e];return p(t.url).then(function(e){return new b(e,t)})}function h(e){function t(t){var n=e.slice(e.lastIndexOf(":")+1),i=t.querySelector("#"+n);return i?new b(i,d):o(e)}function o(e){var t="icon "+e+" not found";return r.warn(t),i.reject(t||e)}var a=e.substring(0,e.lastIndexOf(":"))||"$default",d=n[a];return d?p(d.url).then(t):o(e)}function p(n){function r(n){var o=y.exec(n),r=/base64/i.test(n),a=r?e.atob(o[2]):o[2];return i.when(t.element(a)[0])}function d(e){return o.get(e,{cache:a}).then(function(e){return t.element("<div>").append(e.data).find("svg")[0]})["catch"](f)}return y.test(n)?r(n):d(n)}function f(e){var n=t.isString(e)?e:e.message||e.data||e.statusText;return r.warn(n),i.reject(n)}function g(e){return t.isDefined(e.element)&&t.isDefined(e.config)}function b(e,n){e&&"svg"!=e.tagName&&(e=t.element('<svg xmlns="http://www.w3.org/2000/svg">').append(e)[0]),e.getAttribute("xmlns")||e.setAttribute("xmlns","http://www.w3.org/2000/svg"),this.element=e,this.config=n,this.prepare()}function E(){var e=this.config?this.config.viewBoxSize:n.defaultViewBoxSize;t.forEach({fit:"",height:"100%",width:"100%",preserveAspectRatio:"xMidYMid meet",viewBox:this.element.getAttribute("viewBox")||"0 0 "+e+" "+e,focusable:!1},function(e,t){this.element.setAttribute(t,e)},this)}function v(){return this.element.cloneNode(!0)}var $={},M=/[-\w@:%\+.~#?&\/\/=]{2,}\.[a-z]{2,4}\b(\/[-\w@:%\+.~#?&\/\/=]*)?/i,y=/^data:image\/svg\+xml[\s*;\w\-\=]*?(base64)?,(.*)$/i;return b.prototype={clone:v,prepare:E},s.fontSet=c,s}t.module("material.components.icon").provider("$mdIcon",n);var r={defaultViewBoxSize:24,defaultFontSet:"material-icons",fontSets:[]};n.prototype={icon:function(e,t,n){return-1==e.indexOf(":")&&(e="$default:"+e),r[e]=new o(t,n),this},iconSet:function(e,t,n){return r[e]=new o(t,n),this},defaultIconSet:function(e,t){var n="$default";return r[n]||(r[n]=new o(e,t)),r[n].viewBoxSize=t||r.defaultViewBoxSize,this},defaultViewBoxSize:function(e){return r.defaultViewBoxSize=e,this},fontSet:function(e,t){return r.fontSets.push({alias:e,fontSet:t||e}),this},defaultFontSet:function(e){return r.defaultFontSet=e?e:"",this},defaultIconSize:function(e){return r.defaultIconSize=e,this},preloadIcons:function(e){var t=this,n=[{id:"md-tabs-arrow",url:"md-tabs-arrow.svg",svg:'<svg version="1.1" x="0px" y="0px" viewBox="0 0 24 24"><g><polygon points="15.4,7.4 14,6 8,12 14,18 15.4,16.6 10.8,12 "/></g></svg>'},{id:"md-close",url:"md-close.svg",svg:'<svg version="1.1" x="0px" y="0px" viewBox="0 0 24 24"><g><path d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z"/></g></svg>'},{id:"md-cancel",url:"md-cancel.svg",svg:'<svg version="1.1" x="0px" y="0px" viewBox="0 0 24 24"><g><path d="M12 2c-5.53 0-10 4.47-10 10s4.47 10 10 10 10-4.47 10-10-4.47-10-10-10zm5 13.59l-1.41 1.41-3.59-3.59-3.59 3.59-1.41-1.41 3.59-3.59-3.59-3.59 1.41-1.41 3.59 3.59 3.59-3.59 1.41 1.41-3.59 3.59 3.59 3.59z"/></g></svg>'},{id:"md-menu",url:"md-menu.svg",svg:'<svg version="1.1" x="0px" y="0px" viewBox="0 0 24 24"><path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" /></svg>'},{id:"md-toggle-arrow",url:"md-toggle-arrow-svg",svg:'<svg version="1.1" x="0px" y="0px" viewBox="0 0 48 48"><path d="M24 16l-12 12 2.83 2.83 9.17-9.17 9.17 9.17 2.83-2.83z"/><path d="M0 0h48v48h-48z" fill="none"/></svg>'},{id:"md-calendar",url:"md-calendar.svg",svg:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/></svg>'}];n.forEach(function(n){t.icon(n.id,n.url),e.put(n.url,n.svg)})},$get:["$http","$q","$log","$templateCache","$mdUtil",function(e,t,n,o,a){return this.preloadIcons(o),i(r,e,t,n,o,a)}]},i.$inject=["config","$http","$q","$log","$templateCache","$mdUtil"]}(),function(){function e(e,o,i,r,a,d,s,c){var l,m,u=this;this.nestLevel=parseInt(o.mdNestLevel,10)||0,this.init=function(n,o){o=o||{},l=n,m=i[0].querySelector("[ng-click],[ng-mouseenter]"),m.setAttribute("aria-expanded","false"),this.isInMenuBar=o.isInMenuBar,this.nestedMenus=a.nodesToArray(l[0].querySelectorAll(".md-nested-menu")),l.on("$mdInterimElementRemove",function(){u.isOpen=!1});var d="menu_container_"+a.nextUid();l.attr("id",d),t.element(m).attr({"aria-owns":d,"aria-haspopup":"true"}),r.$on("$destroy",this.disableHoverListener),l.on("$destroy",function(){e.destroy()})};var h,p,f=[];this.enableHoverListener=function(){f.push(s.$on("$mdMenuOpen",function(e,t){l[0].contains(t[0])&&(u.currentlyOpenMenu=t.controller("mdMenu"),u.isAlreadyOpening=!1,u.currentlyOpenMenu.registerContainerProxy(u.triggerContainerProxy.bind(u)))})),f.push(s.$on("$mdMenuClose",function(e,t){l[0].contains(t[0])&&(u.currentlyOpenMenu=n)})),p=t.element(a.nodesToArray(l[0].children[0].children)),p.on("mouseenter",u.handleMenuItemHover),p.on("mouseleave",u.handleMenuItemMouseLeave)},this.disableHoverListener=function(){for(;f.length;)f.shift()();p&&p.off("mouseenter",u.handleMenuItemHover),p&&p.off("mouseleave",u.handleMenuMouseLeave)},this.handleMenuItemHover=function(e){if(!u.isAlreadyOpening){var n=e.target.querySelector("md-menu")||a.getClosest(e.target,"MD-MENU");h=d(function(){if(n&&(n=t.element(n).controller("mdMenu")),u.currentlyOpenMenu&&u.currentlyOpenMenu!=n){var e=u.nestLevel+1;u.currentlyOpenMenu.close(!0,{closeTo:e}),u.isAlreadyOpening=!0,n.open()}else n&&!n.isOpen&&n.open&&(u.isAlreadyOpening=!0,n.open())},n?100:250);var o=e.currentTarget.querySelector(".md-button:not([disabled])");o&&o.focus()}},this.handleMenuItemMouseLeave=function(){h&&(d.cancel(h),h=n)},this.open=function(t){t&&t.stopPropagation(),t&&t.preventDefault(),u.isOpen||(u.enableHoverListener(),u.isOpen=!0,m=m||(t?t.target:i[0]),m.setAttribute("aria-expanded","true"),r.$emit("$mdMenuOpen",i),e.show({scope:r,mdMenuCtrl:u,nestLevel:u.nestLevel,element:l,target:m,preserveElement:!0,parent:"body"})["finally"](function(){m.setAttribute("aria-expanded","false"),u.disableHoverListener()}))},r.$mdOpenMenu=this.open,r.$watch(function(){return u.isOpen},function(e){e?(l.attr("aria-hidden","false"),i[0].classList.add("md-open"),t.forEach(u.nestedMenus,function(e){e.classList.remove("md-open")})):(l.attr("aria-hidden","true"),i[0].classList.remove("md-open")),r.$mdMenuIsOpen=u.isOpen}),this.focusMenuContainer=function(){var e=l[0].querySelector("[md-menu-focus-target]");e||(e=l[0].querySelector(".md-button")),e.focus()},this.registerContainerProxy=function(e){this.containerProxy=e},this.triggerContainerProxy=function(e){this.containerProxy&&this.containerProxy(e)},this.destroy=function(){return u.isOpen?e.destroy():c.when(!1)},this.close=function(n,o){if(u.isOpen){u.isOpen=!1;var a=t.extend({},o,{skipFocus:n});if(r.$emit("$mdMenuClose",i,a),e.hide(null,o),!n){var d=u.restoreFocusTo||i.find("button")[0];d instanceof t.element&&(d=d[0]),d&&d.focus()}}},this.positionMode=function(){var e=(o.mdPositionMode||"target").split(" ");return 1==e.length&&e.push(e[0]),{left:e[0],top:e[1]}},this.offsets=function(){var e=(o.mdOffset||"0 0").split(" ").map(parseFloat);if(2==e.length)return{left:e[0],top:e[1]};if(1==e.length)return{top:e[0],left:e[0]};throw Error("Invalid offsets specified. Please follow format <x, y> or <n>")}}t.module("material.components.menu").controller("mdMenuCtrl",e),e.$inject=["$mdMenu","$attrs","$element","$scope","$mdUtil","$timeout","$rootScope","$q"]}(),function(){function e(e){function o(n){n.addClass("md-menu");var o=n.children()[0];if(o.hasAttribute("ng-click")||(o=o.querySelector("[ng-click],[ng-mouseenter]")||o),!o||"MD-BUTTON"!=o.nodeName&&"BUTTON"!=o.nodeName||o.hasAttribute("type")||o.setAttribute("type","button"),2!=n.children().length)throw Error(r+"Expected two children elements.");o&&o.setAttribute("aria-haspopup","true");var a=n[0].querySelectorAll("md-menu"),d=parseInt(n[0].getAttribute("md-nest-level"),10)||0;return a&&t.forEach(e.nodesToArray(a),function(e){e.hasAttribute("md-position-mode")||e.setAttribute("md-position-mode","cascade"),e.classList.add("md-nested-menu"),e.setAttribute("md-nest-level",d+1)}),i}function i(e,o,i,r){var a=r[0],d=r[1]!=n,s=t.element('<div class="md-open-menu-container md-whiteframe-z2"></div>'),c=o.children()[1];c.hasAttribute("role")||c.setAttribute("role","menu"),s.append(c),o.on("$destroy",function(){s.remove()}),o.append(s),s[0].style.display="none",a.init(s,{isInMenuBar:d})}var r="Invalid HTML for md-menu: ";return{restrict:"E",require:["mdMenu","?^mdMenuBar"],controller:"mdMenuCtrl",scope:!0,compile:o}}t.module("material.components.menu").directive("mdMenu",e),e.$inject=["$mdUtil"]}(),function(){function e(e){function o(e,o,a,d,s,c,l,m,u){function h(n,o,i){return i.nestLevel?t.noop:(i.disableParentScroll&&!e.getClosest(i.target,"MD-DIALOG")?i.restoreScroll=e.disableScrollAround(i.element,i.parent):i.disableParentScroll=!1,i.hasBackdrop&&(i.backdrop=e.createBackdrop(n,"md-menu-backdrop md-click-catcher"),u.enter(i.backdrop,d[0].body)),function(){i.backdrop&&i.backdrop.remove(),i.disableParentScroll&&i.restoreScroll()})}function p(e,t,n){function o(){return m(t,{addClass:"md-leave"}).start()}function i(){t.removeClass("md-active"),E(t,n),n.alreadyOpen=!1}return n.cleanupInteraction(),n.cleanupResizing(),n.hideBackdrop(),n.$destroy===!0?i():o().then(i)}function f(n,i,r){function d(){return r.parent.append(i),i[0].style.display="",c(function(e){var t=v(i,r);i.removeClass("md-leave"),m(i,{addClass:"md-active",from:$.toCss(t),to:$.toCss({transform:""})}).start().then(e)})}function u(){if(!r.target)throw Error("$mdMenu.show() expected a target to animate from in options.target");t.extend(r,{alreadyOpen:!1,isRemoved:!1,target:t.element(r.target),parent:t.element(r.parent),menuContentEl:t.element(i[0].querySelector("md-menu-content"))})}function p(){var e=function(e,t){return l.throttle(function(){if(!r.isRemoved){var n=v(e,t);e.css($.toCss(n))}})}(i,r);return s.addEventListener("resize",e),s.addEventListener("orientationchange",e),function(){s.removeEventListener("resize",e),s.removeEventListener("orientationchange",e)}}function f(){function t(t){var n;switch(t.keyCode){case a.KEY_CODE.ESCAPE:r.mdMenuCtrl.close(!1,{closeAll:!0}),n=!0;break;case a.KEY_CODE.UP_ARROW:g(t,r.menuContentEl,r,-1)||r.nestLevel||r.mdMenuCtrl.triggerContainerProxy(t),n=!0;break;case a.KEY_CODE.DOWN_ARROW:g(t,r.menuContentEl,r,1)||r.nestLevel||r.mdMenuCtrl.triggerContainerProxy(t),n=!0;break;case a.KEY_CODE.LEFT_ARROW:r.nestLevel?r.mdMenuCtrl.close():r.mdMenuCtrl.triggerContainerProxy(t),n=!0;break;case a.KEY_CODE.RIGHT_ARROW:var o=e.getClosest(t.target,"MD-MENU");o&&o!=r.parent[0]?t.target.click():r.mdMenuCtrl.triggerContainerProxy(t),n=!0}n&&(t.preventDefault(),t.stopImmediatePropagation())}function o(e){e.preventDefault(),e.stopPropagation(),n.$apply(function(){r.mdMenuCtrl.close(!0,{closeAll:!0})})}function d(t){function o(){n.$apply(function(){r.mdMenuCtrl.close(!0,{closeAll:!0})})}function i(e,t){if(!e)return!1;for(var n,o=0;n=t[o];++o)for(var i,r=[n,"data-"+n,"x-"+n],a=0;i=r[a];++a)if(e.hasAttribute(i))return!0;return!1}var a=t.target;do{if(a==r.menuContentEl[0])return;if((i(a,["ng-click","ng-href","ui-sref"])||"BUTTON"==a.nodeName||"MD-BUTTON"==a.nodeName)&&!i(a,["md-prevent-menu-close"])){var d=e.getClosest(a,"MD-MENU");a.hasAttribute("disabled")||d&&d!=r.parent[0]||o();break}}while(a=a.parentNode)}i.addClass("md-clickable"),r.backdrop&&r.backdrop.on("click",o),r.menuContentEl.on("keydown",t),r.menuContentEl[0].addEventListener("click",d,!0);var s=r.menuContentEl[0].querySelector("[md-menu-focus-target]");if(!s){var c=r.menuContentEl[0].firstElementChild;s=c&&(c.querySelector(".md-button:not([disabled])")||c.firstElementChild)}return s&&s.focus(),function(){i.removeClass("md-clickable"),r.backdrop&&r.backdrop.off("click",o),r.menuContentEl.off("keydown",t),r.menuContentEl[0].removeEventListener("click",d,!0)}}return u(r),o.inherit(r.menuContentEl,r.target),r.cleanupResizing=p(),r.hideBackdrop=h(n,i,r),d().then(function(e){return r.alreadyOpen=!0,r.cleanupInteraction=f(),e})}function g(t,n,o,i){for(var r,a=e.getClosest(t.target,"MD-MENU-ITEM"),d=e.nodesToArray(n[0].children),s=d.indexOf(a),c=s+i;c>=0&&c<d.length;c+=i){var l=d[c].querySelector(".md-button");if(r=b(l))break}return r}function b(e){return e&&-1!=e.getAttribute("tabindex")?(e.focus(),d[0].activeElement==e):void 0}function E(e,t){t.preserveElement?i(e).style.display="none":i(e).parentNode===i(t.parent)&&i(t.parent).removeChild(i(e))}function v(t,o){function i(e){e.top=Math.max(Math.min(e.top,E.bottom-l.offsetHeight),E.top),e.left=Math.max(Math.min(e.left,E.right-l.offsetWidth),E.left)}function a(){for(var e=0;e<m.children.length;++e)if("none"!=s.getComputedStyle(m.children[e]).display)return m.children[e]}var c,l=t[0],m=t[0].firstElementChild,u=m.getBoundingClientRect(),h=d[0].body,p=h.getBoundingClientRect(),f=s.getComputedStyle(m),g=o.target[0].querySelector("[md-menu-origin]")||o.target[0],b=g.getBoundingClientRect(),E={left:p.left+r,top:Math.max(p.top,0)+r,bottom:Math.max(p.bottom,Math.max(p.top,0)+p.height)-r,right:p.right-r},v={top:0,left:0,right:0,bottom:0},$={top:0,left:0,right:0,bottom:0},M=o.mdMenuCtrl.positionMode();"target"!=M.top&&"target"!=M.left&&"target-right"!=M.left||(c=a(),c&&(c=c.firstElementChild||c,c=c.querySelector("[md-menu-align-target]")||c,v=c.getBoundingClientRect(),$={top:parseFloat(l.style.top||0),left:parseFloat(l.style.left||0)}));var y={},C="top ";switch(M.top){case"target":y.top=$.top+b.top-v.top;break;case"cascade":y.top=b.top-parseFloat(f.paddingTop)-g.style.top;break;case"bottom":y.top=b.top+b.height;break;default:throw new Error('Invalid target mode "'+M.top+'" specified for md-menu on Y axis.')}switch(M.left){case"target":y.left=$.left+b.left-v.left,C+="left";break;case"target-right":y.left=b.right-u.width+(u.right-v.right),C+="right";break;case"cascade":var A=b.right+u.width<E.right;y.left=A?b.right-g.style.left:b.left-g.style.left-u.width,C+=A?"left":"right";break;case"left":y.left=b.left,C+="left";break;default:throw new Error('Invalid target mode "'+M.left+'" specified for md-menu on X axis.')}var T=o.mdMenuCtrl.offsets();y.top+=T.top,y.left+=T.left,i(y);var w=Math.round(100*Math.min(b.width/l.offsetWidth,1))/100,k=Math.round(100*Math.min(b.height/l.offsetHeight,1))/100;return{top:Math.round(y.top),left:Math.round(y.left),transform:o.alreadyOpen?n:e.supplant("scale({0},{1})",[w,k]),transformOrigin:C}}var $=e.dom.animator;return{parent:"body",onShow:f,onRemove:p,hasBackdrop:!0,disableParentScroll:!0,skipCompile:!0,preserveScope:!0,skipHide:!0,themable:!0}}function i(e){return e instanceof t.element&&(e=e[0]),e}var r=8;return o.$inject=["$mdUtil","$mdTheming","$mdConstant","$document","$window","$q","$$rAF","$animateCss","$animate"],e("$mdMenu").setDefaults({methods:["target"],options:o})}t.module("material.components.menu").provider("$mdMenu",e),e.$inject=["$$interimElementProvider"]}(),function(){function e(e,n,i,r,a,d,s,c){this.$element=i,this.$attrs=r,this.$mdConstant=a,this.$mdUtil=s,this.$document=d,this.$scope=e,this.$rootScope=n,this.$timeout=c;var l=this;t.forEach(o,function(e){l[e]=t.bind(l,l[e])})}t.module("material.components.menuBar").controller("MenuBarController",e);var o=["handleKeyDown","handleMenuHover","scheduleOpenHoveredMenu","cancelScheduledOpen"];e.$inject=["$scope","$rootScope","$element","$attrs","$mdConstant","$document","$mdUtil","$timeout"],e.prototype.init=function(){var e=this.$element,t=this.$mdUtil,o=this.$scope,i=this,r=[];e.on("keydown",this.handleKeyDown),this.parentToolbar=t.getClosest(e,"MD-TOOLBAR"),r.push(this.$rootScope.$on("$mdMenuOpen",function(t,n){-1!=i.getMenus().indexOf(n[0])&&(e[0].classList.add("md-open"),n[0].classList.add("md-open"),i.currentlyOpenMenu=n.controller("mdMenu"),i.currentlyOpenMenu.registerContainerProxy(i.handleKeyDown),i.enableOpenOnHover())})),r.push(this.$rootScope.$on("$mdMenuClose",function(o,r,a){var d=i.getMenus();if(-1!=d.indexOf(r[0])&&(e[0].classList.remove("md-open"),r[0].classList.remove("md-open")),e[0].contains(r[0])){for(var s=r[0];s&&-1==d.indexOf(s);)s=t.getClosest(s,"MD-MENU",!0);s&&(a.skipFocus||s.querySelector("button:not([disabled])").focus(),i.currentlyOpenMenu=n,i.disableOpenOnHover(),i.setKeyboardMode(!0))}})),o.$on("$destroy",function(){for(;r.length;)r.shift()()}),this.setKeyboardMode(!0)},e.prototype.setKeyboardMode=function(e){e?this.$element[0].classList.add("md-keyboard-mode"):this.$element[0].classList.remove("md-keyboard-mode")},e.prototype.enableOpenOnHover=function(){if(!this.openOnHoverEnabled){this.openOnHoverEnabled=!0;var e;(e=this.parentToolbar)&&(e.dataset.mdRestoreStyle=e.getAttribute("style"),e.style.position="relative",e.style.zIndex=100),t.element(this.getMenus()).on("mouseenter",this.handleMenuHover)}},e.prototype.handleMenuHover=function(e){this.setKeyboardMode(!1),this.openOnHoverEnabled&&this.scheduleOpenHoveredMenu(e)},e.prototype.disableOpenOnHover=function(){if(this.openOnHoverEnabled){this.openOnHoverEnabled=!1;var e;(e=this.parentToolbar)&&(e.style.cssText=e.dataset.mdRestoreStyle||""),t.element(this.getMenus()).off("mouseenter",this.handleMenuHover)}},e.prototype.scheduleOpenHoveredMenu=function(e){var n=t.element(e.currentTarget),o=n.controller("mdMenu");this.setKeyboardMode(!1),this.scheduleOpenMenu(o)},e.prototype.scheduleOpenMenu=function(e){var t=this,o=this.$timeout;e!=t.currentlyOpenMenu&&(o.cancel(t.pendingMenuOpen),t.pendingMenuOpen=o(function(){t.pendingMenuOpen=n,t.currentlyOpenMenu&&t.currentlyOpenMenu.close(!0,{closeAll:!0}),e.open()},200,!1))},e.prototype.handleKeyDown=function(e){var n=this.$mdConstant.KEY_CODE,o=this.currentlyOpenMenu,i=o&&o.isOpen;this.setKeyboardMode(!0);var r,a,d;switch(e.keyCode){case n.DOWN_ARROW:o?o.focusMenuContainer():this.openFocusedMenu(),r=!0;break;case n.UP_ARROW:o&&o.close(),r=!0;break;case n.LEFT_ARROW:a=this.focusMenu(-1),i&&(d=t.element(a).controller("mdMenu"),this.scheduleOpenMenu(d)),r=!0;break;case n.RIGHT_ARROW:a=this.focusMenu(1),i&&(d=t.element(a).controller("mdMenu"),this.scheduleOpenMenu(d)),r=!0}r&&(e&&e.preventDefault&&e.preventDefault(),e&&e.stopImmediatePropagation&&e.stopImmediatePropagation())},e.prototype.focusMenu=function(e){var t=this.getMenus(),n=this.getFocusedMenuIndex();-1==n&&(n=this.getOpenMenuIndex());var o=!1;return-1==n?(n=0,o=!0):(0>e&&n>0||e>0&&n<t.length-e)&&(n+=e,o=!0),o?(t[n].querySelector("button").focus(),t[n]):void 0},e.prototype.openFocusedMenu=function(){var e=this.getFocusedMenu();e&&t.element(e).controller("mdMenu").open()},e.prototype.getMenus=function(){var e=this.$element;return this.$mdUtil.nodesToArray(e[0].children).filter(function(e){return"MD-MENU"==e.nodeName})},e.prototype.getFocusedMenu=function(){return this.getMenus()[this.getFocusedMenuIndex()]},e.prototype.getFocusedMenuIndex=function(){var e=this.$mdUtil,t=e.getClosest(this.$document[0].activeElement,"MD-MENU");if(!t)return-1;var n=this.getMenus().indexOf(t);return n},e.prototype.getOpenMenuIndex=function(){for(var e=this.getMenus(),t=0;t<e.length;++t)if(e[t].classList.contains("md-open"))return t;return-1}}(),function(){function e(e,n){return{restrict:"E",require:"mdMenuBar",controller:"MenuBarController",compile:function(o,i){return i.ariaRole||o[0].setAttribute("role","menubar"),t.forEach(o[0].children,function(n){if("MD-MENU"==n.nodeName){n.hasAttribute("md-position-mode")||(n.setAttribute("md-position-mode","left bottom"),n.querySelector("button,a").setAttribute("role","menuitem"));var o=e.nodesToArray(n.querySelectorAll("md-menu-content"));t.forEach(o,function(e){e.classList.add("md-menu-bar-menu"),e.classList.add("md-dense"),e.hasAttribute("width")||e.setAttribute("width",5)})}}),function(e,t,o,i){n(e,t),i.init()}}}}t.module("material.components.menuBar").directive("mdMenuBar",e),e.$inject=["$mdUtil","$mdTheming"]}(),function(){function e(){return{restrict:"E",compile:function(e,t){t.role||e[0].setAttribute("role","separator")}}}t.module("material.components.menuBar").directive("mdMenuDivider",e)}(),function(){function e(e,t,n){this.$element=t,this.$attrs=n,this.$scope=e}t.module("material.components.menuBar").controller("MenuItemController",e),e.$inject=["$scope","$element","$attrs"],e.prototype.init=function(e){var t=this.$element,n=this.$attrs;this.ngModel=e,"checkbox"!=n.type&&"radio"!=n.type||(this.mode=n.type,this.iconEl=t[0].children[0],this.buttonEl=t[0].children[1],e&&this.initClickListeners())},e.prototype.clearNgAria=function(){var e=this.$element[0],n=["role","tabindex","aria-invalid","aria-checked"];t.forEach(n,function(t){e.removeAttribute(t)})},e.prototype.initClickListeners=function(){function e(){if("radio"==d){var e=a.ngValue?r.$eval(a.ngValue):a.value;return i.$modelValue==e}return i.$modelValue}function n(e){e?c.off("click",l):c.on("click",l)}var o=this,i=this.ngModel,r=this.$scope,a=this.$attrs,d=(this.$element,this.mode);this.handleClick=t.bind(this,this.handleClick);var s=this.iconEl,c=t.element(this.buttonEl),l=this.handleClick;a.$observe("disabled",n),n(a.disabled),i.$render=function(){o.clearNgAria(),e()?(s.style.display="",c.attr("aria-checked","true")):(s.style.display="none",c.attr("aria-checked","false"))},r.$$postDigest(i.$render)},e.prototype.handleClick=function(e){var t,n=this.mode,o=this.ngModel,i=this.$attrs;"checkbox"==n?t=!o.$modelValue:"radio"==n&&(t=i.ngValue?this.$scope.$eval(i.ngValue):i.value),o.$setViewValue(t),o.$render()}}(),function(){function e(){return{require:["mdMenuItem","?ngModel"],priority:210,compile:function(e,n){function o(n,o,i){i=i||e,i instanceof t.element&&(i=i[0]),i.hasAttribute(n)||i.setAttribute(n,o)}function i(t){if(e[0].hasAttribute(t)){var n=e[0].getAttribute(t);a[0].setAttribute(t,n),e[0].removeAttribute(t)}}if("checkbox"==n.type||"radio"==n.type){var r=e[0].textContent,a=t.element('<md-button type="button"></md-button>');a.html(r),a.attr("tabindex","0"),e.html(""),e.append(t.element('<md-icon md-svg-icon="check"></md-icon>')),e.append(a),e[0].classList.add("md-indent"),o("role","checkbox"==n.type?"menuitemcheckbox":"menuitemradio",a),t.forEach(["ng-disabled"],i)}else o("role","menuitem",e[0].querySelector("md-button,button,a"));return function(e,t,n,o){var i=o[0],r=o[1];i.init(r)}},controller:"MenuItemController"}}t.module("material.components.menuBar").directive("mdMenuItem",e)}(),function(){function e(){function e(e,o,i,r){if(r){var a=r.getTabElementIndex(o),d=n(o,"md-tab-body").remove(),s=n(o,"md-tab-label").remove(),c=r.insertTab({scope:e,parent:e.$parent,index:a,element:o,template:d.html(),label:s.html()},a);e.select=e.select||t.noop,e.deselect=e.deselect||t.noop,e.$watch("active",function(e){e&&r.select(c.getIndex(),!0)}),e.$watch("disabled",function(){r.refreshIndex()}),e.$watch(function(){return r.getTabElementIndex(o)},function(e){c.index=e,r.updateTabOrder()}),e.$on("$destroy",function(){r.removeTab(c)})}}function n(e,n){for(var o=e[0].children,i=0,r=o.length;r>i;i++){var a=o[i];if(a.tagName===n.toUpperCase())return t.element(a)}return t.element()}return{require:"^?mdTabs",terminal:!0,compile:function(o,i){var r=n(o,"md-tab-label"),a=n(o,"md-tab-body");if(0==r.length&&(r=t.element("<md-tab-label></md-tab-label>"),i.label?r.text(i.label):r.append(o.contents()),0==a.length)){var d=o.contents().detach();a=t.element("<md-tab-body></md-tab-body>"),a.append(d)}return o.append(r),a.html()&&o.append(a),e},scope:{active:"=?mdActive",disabled:"=?ngDisabled",select:"&?mdOnSelect",deselect:"&?mdOnDeselect"}}}t.module("material.components.tabs").directive("mdTab",e)}(),function(){function e(){return{require:"^?mdTabs",link:function(e,t,n,o){o&&o.attachRipple(e,t)}}}t.module("material.components.tabs").directive("mdTabItem",e)}(),function(){function e(){return{terminal:!0}}t.module("material.components.tabs").directive("mdTabLabel",e)}(),function(){function e(e){return{restrict:"A",compile:function(t,n){var o=e(n.mdTabScroll,null,!0);return function(e,t){t.on("mousewheel",function(t){e.$apply(function(){o(e,{$event:t})})})}}}}t.module("material.components.tabs").directive("mdTabScroll",e),e.$inject=["$parse"]}(),function(){function e(e,o,i,r,a,d,s,c,l,m){function u(){se.selectedIndex=se.selectedIndex||0,h(),f(),p(),m(o),d.nextTick(function(){oe(),J(),ie(),se.tabs[se.selectedIndex]&&se.tabs[se.selectedIndex].scope.select(),he=!0,Y()})}function h(){var e=c.$mdTabsTemplate,n=t.element(le.data);n.html(e),l(n.contents())(se.parent),delete c.$mdTabsTemplate}function p(){t.element(i).on("resize",O),e.$on("$destroy",E)}function f(){e.$watch("$mdTabsCtrl.selectedIndex",w)}function g(e,t){var n=c.$normalize("md-"+e);t&&W(e,t),c.$observe(n,function(t){se[e]=t})}function b(e,t){function n(t){se[e]="false"!==t}var o=c.$normalize("md-"+e);t&&W(e,t),c.hasOwnProperty(o)&&n(c[o]),c.$observe(o,n)}function E(){ue=!0,t.element(i).off("resize",O)}function v(e){t.element(le.wrapper).toggleClass("md-stretch-tabs",q()),ie()}function $(e){se.shouldCenterTabs=z()}function M(e,n){e!==n&&(t.forEach(le.tabs,function(t){t.style.maxWidth=e+"px"}),d.nextTick(se.updateInkBarStyles))}function y(e,t){e!==t&&(se.maxTabWidth=G(),se.shouldCenterTabs=z(),d.nextTick(function(){se.maxTabWidth=G(),J(se.selectedIndex)}))}function C(e){o[e?"removeClass":"addClass"]("md-no-tab-content")}function A(n){var o=se.shouldCenterTabs?"":"-"+n+"px";t.element(le.paging).css(r.CSS.TRANSFORM,"translate3d("+o+", 0, 0)"),e.$broadcast("$mdTabsPaginationChanged")}function T(e,t){e!==t&&le.tabs[e]&&(J(),Z())}function w(t,n){t!==n&&(se.selectedIndex=V(t),se.lastSelectedIndex=n,se.updateInkBarStyles(),oe(),J(t),e.$broadcast("$mdTabsChanged"),se.tabs[n]&&se.tabs[n].scope.deselect(),se.tabs[t]&&se.tabs[t].scope.select())}function k(e){var t=o[0].getElementsByTagName("md-tab");return Array.prototype.indexOf.call(t,e[0])}function _(){_.watcher||(_.watcher=e.$watch(function(){d.nextTick(function(){_.watcher&&o.prop("offsetParent")&&(_.watcher(),_.watcher=null,O())},!1)}))}function x(e){switch(e.keyCode){case r.KEY_CODE.LEFT_ARROW:e.preventDefault(),Q(-1,!0);break;case r.KEY_CODE.RIGHT_ARROW:e.preventDefault(),Q(1,!0);break;case r.KEY_CODE.SPACE:case r.KEY_CODE.ENTER:e.preventDefault(),ce||(se.selectedIndex=se.focusIndex)}se.lastClick=!1}function N(e,t){ce||(se.focusIndex=se.selectedIndex=e),se.lastClick=!0,t&&se.noSelectClick||d.nextTick(function(){se.tabs[e].element.triggerHandler("click")},!1)}function H(e){se.shouldPaginate&&(e.preventDefault(),se.offsetLeft=ae(se.offsetLeft-e.wheelDelta))}function S(){var e,t,n=le.canvas.clientWidth,o=n+se.offsetLeft;for(e=0;e<le.tabs.length&&(t=le.tabs[e],!(t.offsetLeft+t.offsetWidth>o));e++);se.offsetLeft=ae(t.offsetLeft)}function D(){var e,t;for(e=0;e<le.tabs.length&&(t=le.tabs[e],!(t.offsetLeft+t.offsetWidth>=se.offsetLeft));e++);se.offsetLeft=ae(t.offsetLeft+t.offsetWidth-le.canvas.clientWidth)}function O(){se.lastSelectedIndex=se.selectedIndex,se.offsetLeft=ae(se.offsetLeft),d.nextTick(function(){se.updateInkBarStyles(),Y()})}function I(e){t.element(le.inkBar).toggleClass("ng-hide",e)}function R(e){o.toggleClass("md-dynamic-height",e)}function L(e){if(!ue){var t=se.selectedIndex,n=se.tabs.splice(e.getIndex(),1)[0];ne(),se.selectedIndex===t&&(n.scope.deselect(),se.tabs[se.selectedIndex]&&se.tabs[se.selectedIndex].scope.select()),d.nextTick(function(){Y(),se.offsetLeft=ae(se.offsetLeft)})}}function P(e,n){var o=he,i={getIndex:function(){return se.tabs.indexOf(r)},isActive:function(){return this.getIndex()===se.selectedIndex},isLeft:function(){return this.getIndex()<se.selectedIndex},isRight:function(){return this.getIndex()>se.selectedIndex},shouldRender:function(){return!se.noDisconnect||this.isActive()},hasFocus:function(){return!se.lastClick&&se.hasFocus&&this.getIndex()===se.focusIndex},id:d.nextUid()},r=t.extend(i,e);return t.isDefined(n)?se.tabs.splice(n,0,r):se.tabs.push(r),ee(),te(),d.nextTick(function(){Y(),o&&se.autoselect&&d.nextTick(function(){d.nextTick(function(){N(se.tabs.indexOf(r))})})}),r}function F(){var e={};return e.wrapper=o[0].getElementsByTagName("md-tabs-wrapper")[0],e.data=o[0].getElementsByTagName("md-tab-data")[0],e.canvas=e.wrapper.getElementsByTagName("md-tabs-canvas")[0],e.paging=e.canvas.getElementsByTagName("md-pagination-wrapper")[0],e.tabs=e.paging.getElementsByTagName("md-tab-item"),e.dummies=e.canvas.getElementsByTagName("md-dummy-tab"),e.inkBar=e.paging.getElementsByTagName("md-ink-bar")[0],e.contentsWrapper=o[0].getElementsByTagName("md-tabs-content-wrapper")[0],e.contents=e.contentsWrapper.getElementsByTagName("md-tab-content"),
e}function B(){return se.offsetLeft>0}function U(){var e=le.tabs[le.tabs.length-1];return e&&e.offsetLeft+e.offsetWidth>le.canvas.clientWidth+se.offsetLeft}function q(){switch(se.stretchTabs){case"always":return!0;case"never":return!1;default:return!se.shouldPaginate&&i.matchMedia("(max-width: 600px)").matches}}function z(){return se.centerTabs&&!se.shouldPaginate}function j(){if(se.noPagination||!he)return!1;var e=o.prop("clientWidth");return t.forEach(F().dummies,function(t){e-=t.offsetWidth}),0>e}function V(e){if(-1===e)return-1;var t,n,o=Math.max(se.tabs.length-e,e);for(t=0;o>=t;t++){if(n=se.tabs[e+t],n&&n.scope.disabled!==!0)return n.getIndex();if(n=se.tabs[e-t],n&&n.scope.disabled!==!0)return n.getIndex()}return e}function W(e,t,n){Object.defineProperty(se,e,{get:function(){return n},set:function(e){var o=n;n=e,t&&t(e,o)}})}function Y(){q()||K(),se.maxTabWidth=G(),se.shouldPaginate=j()}function K(){var e=1;t.forEach(F().dummies,function(t){e+=Math.max(t.offsetWidth,t.getBoundingClientRect().width)}),t.element(le.paging).css("width",Math.ceil(e)+"px")}function G(){return o.prop("clientWidth")}function X(){var e=se.tabs[se.selectedIndex],t=se.tabs[se.focusIndex];se.tabs=se.tabs.sort(function(e,t){return e.index-t.index}),se.selectedIndex=se.tabs.indexOf(e),se.focusIndex=se.tabs.indexOf(t)}function Q(e,t){var n,o=t?"focusIndex":"selectedIndex",i=se[o];for(n=i+e;se.tabs[n]&&se.tabs[n].scope.disabled;n+=e);se.tabs[n]&&(se[o]=n)}function Z(){F().dummies[se.focusIndex].focus()}function J(e){if(null==e&&(e=se.focusIndex),le.tabs[e]&&!se.shouldCenterTabs){var t=le.tabs[e],n=t.offsetLeft,o=t.offsetWidth+n;se.offsetLeft=Math.max(se.offsetLeft,ae(o-le.canvas.clientWidth+64)),se.offsetLeft=Math.min(se.offsetLeft,ae(n))}}function ee(){me.forEach(function(e){d.nextTick(e)}),me=[]}function te(){var e=!1;t.forEach(se.tabs,function(t){t.template&&(e=!0)}),se.hasContent=e}function ne(){se.selectedIndex=V(se.selectedIndex),se.focusIndex=V(se.focusIndex)}function oe(){if(!se.dynamicHeight)return o.css("height","");if(!se.tabs.length)return me.push(oe);var e=le.contents[se.selectedIndex],t=e?e.offsetHeight:0,i=le.wrapper.offsetHeight,r=t+i,a=o.prop("clientHeight");if(a!==r){"bottom"===o.attr("md-align-tabs")&&(a-=i,r-=i,o.attr("md-border-bottom")!==n&&++a),ce=!0;var c={height:a+"px"},l={height:r+"px"};o.css(c),s(o,{from:c,to:l,easing:"cubic-bezier(0.35, 0, 0.25, 1)",duration:.5}).start().done(function(){o.css({transition:"none",height:""}),d.nextTick(function(){o.css("transition","")}),ce=!1})}}function ie(){if(!le.tabs[se.selectedIndex])return void t.element(le.inkBar).css({left:"auto",right:"auto"});if(!se.tabs.length)return me.push(se.updateInkBarStyles);if(!o.prop("offsetParent"))return _();var e,n=se.selectedIndex,i=le.paging.offsetWidth,r=le.tabs[n],a=r.offsetLeft,s=i-a-r.offsetWidth;se.shouldCenterTabs&&(e=Array.prototype.slice.call(le.tabs).reduce(function(e,t){return e+t.offsetWidth},0),i>e&&d.nextTick(ie,!1)),re(),t.element(le.inkBar).css({left:a+"px",right:s+"px"})}function re(){var e=se.selectedIndex,n=se.lastSelectedIndex,o=t.element(le.inkBar);t.isNumber(n)&&o.toggleClass("md-left",n>e).toggleClass("md-right",e>n)}function ae(e){if(!le.tabs.length||!se.shouldPaginate)return 0;var t=le.tabs[le.tabs.length-1],n=t.offsetLeft+t.offsetWidth;return e=Math.max(0,e),e=Math.min(n-le.canvas.clientWidth,e)}function de(e,n){var o={colorElement:t.element(le.inkBar)};a.attach(e,n,o)}var se=this,ce=!1,le=F(),me=[],ue=!1,he=!1;g("stretchTabs",v),W("focusIndex",T,se.selectedIndex||0),W("offsetLeft",A,0),W("hasContent",C,!1),W("maxTabWidth",M,G()),W("shouldPaginate",y,!1),b("noInkBar",I),b("dynamicHeight",R),b("noPagination"),b("swipeContent"),b("noDisconnect"),b("autoselect"),b("noSelectClick"),b("centerTabs",$,!1),b("enableDisconnect"),se.scope=e,se.parent=e.$parent,se.tabs=[],se.lastSelectedIndex=null,se.hasFocus=!1,se.lastClick=!0,se.shouldCenterTabs=z(),se.updatePagination=d.debounce(Y,100),se.redirectFocus=Z,se.attachRipple=de,se.insertTab=P,se.removeTab=L,se.select=N,se.scroll=H,se.nextPage=S,se.previousPage=D,se.keydown=x,se.canPageForward=U,se.canPageBack=B,se.refreshIndex=ne,se.incrementIndex=Q,se.getTabElementIndex=k,se.updateInkBarStyles=d.debounce(ie,100),se.updateTabOrder=d.debounce(X,100),u()}t.module("material.components.tabs").controller("MdTabsController",e),e.$inject=["$scope","$element","$window","$mdConstant","$mdTabInkRipple","$mdUtil","$animateCss","$attrs","$compile","$mdTheming"]}(),function(){function e(){return{scope:{selectedIndex:"=?mdSelected"},template:function(e,t){return t.$mdTabsTemplate=e.html(),'<md-tabs-wrapper> <md-tab-data></md-tab-data> <md-prev-button tabindex="-1" role="button" aria-label="Previous Page" aria-disabled="{{!$mdTabsCtrl.canPageBack()}}" ng-class="{ \'md-disabled\': !$mdTabsCtrl.canPageBack() }" ng-if="$mdTabsCtrl.shouldPaginate" ng-click="$mdTabsCtrl.previousPage()"> <md-icon md-svg-icon="md-tabs-arrow"></md-icon> </md-prev-button> <md-next-button tabindex="-1" role="button" aria-label="Next Page" aria-disabled="{{!$mdTabsCtrl.canPageForward()}}" ng-class="{ \'md-disabled\': !$mdTabsCtrl.canPageForward() }" ng-if="$mdTabsCtrl.shouldPaginate" ng-click="$mdTabsCtrl.nextPage()"> <md-icon md-svg-icon="md-tabs-arrow"></md-icon> </md-next-button> <md-tabs-canvas tabindex="{{ $mdTabsCtrl.hasFocus ? -1 : 0 }}" aria-activedescendant="tab-item-{{$mdTabsCtrl.tabs[$mdTabsCtrl.focusIndex].id}}" ng-focus="$mdTabsCtrl.redirectFocus()" ng-class="{ \'md-paginated\': $mdTabsCtrl.shouldPaginate, \'md-center-tabs\': $mdTabsCtrl.shouldCenterTabs }" ng-keydown="$mdTabsCtrl.keydown($event)" role="tablist"> <md-pagination-wrapper ng-class="{ \'md-center-tabs\': $mdTabsCtrl.shouldCenterTabs }" md-tab-scroll="$mdTabsCtrl.scroll($event)"> <md-tab-item tabindex="-1" class="md-tab" ng-repeat="tab in $mdTabsCtrl.tabs" role="tab" aria-controls="tab-content-{{::tab.id}}" aria-selected="{{tab.isActive()}}" aria-disabled="{{tab.scope.disabled || \'false\'}}" ng-click="$mdTabsCtrl.select(tab.getIndex())" ng-class="{ \'md-active\':    tab.isActive(), \'md-focused\':   tab.hasFocus(), \'md-disabled\':  tab.scope.disabled }" ng-disabled="tab.scope.disabled" md-swipe-left="$mdTabsCtrl.nextPage()" md-swipe-right="$mdTabsCtrl.previousPage()" md-tabs-template="::tab.label" md-scope="::tab.parent"></md-tab-item> <md-ink-bar></md-ink-bar> </md-pagination-wrapper> <div class="md-visually-hidden md-dummy-wrapper"> <md-dummy-tab class="md-tab" tabindex="-1" id="tab-item-{{::tab.id}}" role="tab" aria-controls="tab-content-{{::tab.id}}" aria-selected="{{tab.isActive()}}" aria-disabled="{{tab.scope.disabled || \'false\'}}" ng-focus="$mdTabsCtrl.hasFocus = true" ng-blur="$mdTabsCtrl.hasFocus = false" ng-repeat="tab in $mdTabsCtrl.tabs" md-tabs-template="::tab.label" md-scope="::tab.parent"></md-dummy-tab> </div> </md-tabs-canvas> </md-tabs-wrapper> <md-tabs-content-wrapper ng-show="$mdTabsCtrl.hasContent && $mdTabsCtrl.selectedIndex >= 0"> <md-tab-content id="tab-content-{{::tab.id}}" role="tabpanel" aria-labelledby="tab-item-{{::tab.id}}" md-swipe-left="$mdTabsCtrl.swipeContent && $mdTabsCtrl.incrementIndex(1)" md-swipe-right="$mdTabsCtrl.swipeContent && $mdTabsCtrl.incrementIndex(-1)" ng-if="$mdTabsCtrl.hasContent" ng-repeat="(index, tab) in $mdTabsCtrl.tabs" ng-class="{ \'md-no-transition\': $mdTabsCtrl.lastSelectedIndex == null, \'md-active\':        tab.isActive(), \'md-left\':          tab.isLeft(), \'md-right\':         tab.isRight(), \'md-no-scroll\':     $mdTabsCtrl.dynamicHeight }"> <div md-tabs-template="::tab.template" md-connected-if="tab.isActive()" md-scope="::tab.parent" ng-if="$mdTabsCtrl.enableDisconnect || tab.shouldRender()"></div> </md-tab-content> </md-tabs-content-wrapper>'},controller:"MdTabsController",controllerAs:"$mdTabsCtrl",bindToController:!0}}t.module("material.components.tabs").directive("mdTabs",e)}(),function(){function e(e,t){function n(n,o,i,r){function a(){n.$watch("connected",function(e){e===!1?d():s()}),n.$on("$destroy",s)}function d(){r.enableDisconnect&&t.disconnectScope(c)}function s(){r.enableDisconnect&&t.reconnectScope(c)}if(r){var c=r.enableDisconnect?n.compileScope.$new():n.compileScope;return o.html(n.template),e(o.contents())(c),o.on("DOMSubtreeModified",function(){r.updatePagination(),r.updateInkBarStyles()}),t.nextTick(a)}}return{restrict:"A",link:n,scope:{template:"=mdTabsTemplate",connected:"=?mdConnectedIf",compileScope:"=mdScope"},require:"^?mdTabs"}}t.module("material.components.tabs").directive("mdTabsTemplate",e),e.$inject=["$compile","$mdUtil"]}(),function(){t.module("material.core").constant("$MD_THEME_CSS","/*  Only used with Theme processes */html.md-THEME_NAME-theme, body.md-THEME_NAME-theme {  color: '{{foreground-1}}';  background-color: '{{background-color}}'; }md-autocomplete.md-THEME_NAME-theme {  background: '{{background-50}}'; }  md-autocomplete.md-THEME_NAME-theme[disabled] {    background: '{{background-100}}'; }  md-autocomplete.md-THEME_NAME-theme button md-icon path {    fill: '{{background-600}}'; }  md-autocomplete.md-THEME_NAME-theme button:after {    background: '{{background-600-0.3}}'; }.md-autocomplete-suggestions-container.md-THEME_NAME-theme {  background: '{{background-50}}'; }  .md-autocomplete-suggestions-container.md-THEME_NAME-theme li {    color: '{{background-900}}'; }    .md-autocomplete-suggestions-container.md-THEME_NAME-theme li .highlight {      color: '{{background-600}}'; }    .md-autocomplete-suggestions-container.md-THEME_NAME-theme li:hover, .md-autocomplete-suggestions-container.md-THEME_NAME-theme li.selected {      background: '{{background-200}}'; }md-backdrop {  background-color: '{{background-900-0.0}}'; }  md-backdrop.md-opaque.md-THEME_NAME-theme {    background-color: '{{background-900-1.0}}'; }md-bottom-sheet.md-THEME_NAME-theme {  background-color: '{{background-50}}';  border-top-color: '{{background-300}}'; }  md-bottom-sheet.md-THEME_NAME-theme.md-list md-list-item {    color: '{{foreground-1}}'; }  md-bottom-sheet.md-THEME_NAME-theme .md-subheader {    background-color: '{{background-50}}'; }  md-bottom-sheet.md-THEME_NAME-theme .md-subheader {    color: '{{foreground-1}}'; }a.md-button.md-THEME_NAME-theme:not([disabled]):hover,.md-button.md-THEME_NAME-theme:not([disabled]):hover {  background-color: '{{background-500-0.2}}'; }a.md-button.md-THEME_NAME-theme:not([disabled]).md-focused,.md-button.md-THEME_NAME-theme:not([disabled]).md-focused {  background-color: '{{background-500-0.2}}'; }a.md-button.md-THEME_NAME-theme:not([disabled]).md-icon-button:hover,.md-button.md-THEME_NAME-theme:not([disabled]).md-icon-button:hover {  background-color: transparent; }a.md-button.md-THEME_NAME-theme.md-fab,.md-button.md-THEME_NAME-theme.md-fab {  background-color: '{{accent-color}}';  color: '{{accent-contrast}}'; }  a.md-button.md-THEME_NAME-theme.md-fab md-icon,  .md-button.md-THEME_NAME-theme.md-fab md-icon {    color: '{{accent-contrast}}'; }  a.md-button.md-THEME_NAME-theme.md-fab:not([disabled]):hover,  .md-button.md-THEME_NAME-theme.md-fab:not([disabled]):hover {    background-color: '{{accent-color}}'; }  a.md-button.md-THEME_NAME-theme.md-fab:not([disabled]).md-focused,  .md-button.md-THEME_NAME-theme.md-fab:not([disabled]).md-focused {    background-color: '{{accent-A700}}'; }a.md-button.md-THEME_NAME-theme.md-primary,.md-button.md-THEME_NAME-theme.md-primary {  color: '{{primary-color}}'; }  a.md-button.md-THEME_NAME-theme.md-primary.md-raised, a.md-button.md-THEME_NAME-theme.md-primary.md-fab,  .md-button.md-THEME_NAME-theme.md-primary.md-raised,  .md-button.md-THEME_NAME-theme.md-primary.md-fab {    color: '{{primary-contrast}}';    background-color: '{{primary-color}}'; }    a.md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]) md-icon, a.md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]) md-icon,    .md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]) md-icon,    .md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]) md-icon {      color: '{{primary-contrast}}'; }    a.md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]):hover, a.md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]):hover,    .md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]):hover,    .md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]):hover {      background-color: '{{primary-color}}'; }    a.md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]).md-focused, a.md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]).md-focused,    .md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]).md-focused,    .md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]).md-focused {      background-color: '{{primary-600}}'; }  a.md-button.md-THEME_NAME-theme.md-primary:not([disabled]) md-icon,  .md-button.md-THEME_NAME-theme.md-primary:not([disabled]) md-icon {    color: '{{primary-color}}'; }a.md-button.md-THEME_NAME-theme.md-fab,.md-button.md-THEME_NAME-theme.md-fab {  background-color: '{{accent-color}}';  color: '{{accent-contrast}}'; }  a.md-button.md-THEME_NAME-theme.md-fab:not([disabled]) .md-icon,  .md-button.md-THEME_NAME-theme.md-fab:not([disabled]) .md-icon {    color: '{{accent-contrast}}'; }  a.md-button.md-THEME_NAME-theme.md-fab:not([disabled]):hover,  .md-button.md-THEME_NAME-theme.md-fab:not([disabled]):hover {    background-color: '{{accent-color}}'; }  a.md-button.md-THEME_NAME-theme.md-fab:not([disabled]).md-focused,  .md-button.md-THEME_NAME-theme.md-fab:not([disabled]).md-focused {    background-color: '{{accent-A700}}'; }a.md-button.md-THEME_NAME-theme.md-raised,.md-button.md-THEME_NAME-theme.md-raised {  color: '{{background-900}}';  background-color: '{{background-50}}'; }  a.md-button.md-THEME_NAME-theme.md-raised:not([disabled]) md-icon,  .md-button.md-THEME_NAME-theme.md-raised:not([disabled]) md-icon {    color: '{{background-900}}'; }  a.md-button.md-THEME_NAME-theme.md-raised:not([disabled]):hover,  .md-button.md-THEME_NAME-theme.md-raised:not([disabled]):hover {    background-color: '{{background-50}}'; }  a.md-button.md-THEME_NAME-theme.md-raised:not([disabled]).md-focused,  .md-button.md-THEME_NAME-theme.md-raised:not([disabled]).md-focused {    background-color: '{{background-200}}'; }a.md-button.md-THEME_NAME-theme.md-warn,.md-button.md-THEME_NAME-theme.md-warn {  color: '{{warn-color}}'; }  a.md-button.md-THEME_NAME-theme.md-warn.md-raised, a.md-button.md-THEME_NAME-theme.md-warn.md-fab,  .md-button.md-THEME_NAME-theme.md-warn.md-raised,  .md-button.md-THEME_NAME-theme.md-warn.md-fab {    color: '{{warn-contrast}}';    background-color: '{{warn-color}}'; }    a.md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]) md-icon, a.md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]) md-icon,    .md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]) md-icon,    .md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]) md-icon {      color: '{{warn-contrast}}'; }    a.md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]):hover, a.md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]):hover,    .md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]):hover,    .md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]):hover {      background-color: '{{warn-color}}'; }    a.md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]).md-focused, a.md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]).md-focused,    .md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]).md-focused,    .md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]).md-focused {      background-color: '{{warn-700}}'; }  a.md-button.md-THEME_NAME-theme.md-warn:not([disabled]) md-icon,  .md-button.md-THEME_NAME-theme.md-warn:not([disabled]) md-icon {    color: '{{warn-color}}'; }a.md-button.md-THEME_NAME-theme.md-accent,.md-button.md-THEME_NAME-theme.md-accent {  color: '{{accent-color}}'; }  a.md-button.md-THEME_NAME-theme.md-accent.md-raised, a.md-button.md-THEME_NAME-theme.md-accent.md-fab,  .md-button.md-THEME_NAME-theme.md-accent.md-raised,  .md-button.md-THEME_NAME-theme.md-accent.md-fab {    color: '{{accent-contrast}}';    background-color: '{{accent-color}}'; }    a.md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]) md-icon, a.md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]) md-icon,    .md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]) md-icon,    .md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]) md-icon {      color: '{{accent-contrast}}'; }    a.md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]):hover, a.md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]):hover,    .md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]):hover,    .md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]):hover {      background-color: '{{accent-color}}'; }    a.md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]).md-focused, a.md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]).md-focused,    .md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]).md-focused,    .md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]).md-focused {      background-color: '{{accent-700}}'; }  a.md-button.md-THEME_NAME-theme.md-accent:not([disabled]) md-icon,  .md-button.md-THEME_NAME-theme.md-accent:not([disabled]) md-icon {    color: '{{accent-color}}'; }a.md-button.md-THEME_NAME-theme[disabled], a.md-button.md-THEME_NAME-theme.md-raised[disabled], a.md-button.md-THEME_NAME-theme.md-fab[disabled], a.md-button.md-THEME_NAME-theme.md-accent[disabled], a.md-button.md-THEME_NAME-theme.md-warn[disabled],.md-button.md-THEME_NAME-theme[disabled],.md-button.md-THEME_NAME-theme.md-raised[disabled],.md-button.md-THEME_NAME-theme.md-fab[disabled],.md-button.md-THEME_NAME-theme.md-accent[disabled],.md-button.md-THEME_NAME-theme.md-warn[disabled] {  color: '{{foreground-3}}' !important;  cursor: default; }  a.md-button.md-THEME_NAME-theme[disabled] md-icon, a.md-button.md-THEME_NAME-theme.md-raised[disabled] md-icon, a.md-button.md-THEME_NAME-theme.md-fab[disabled] md-icon, a.md-button.md-THEME_NAME-theme.md-accent[disabled] md-icon, a.md-button.md-THEME_NAME-theme.md-warn[disabled] md-icon,  .md-button.md-THEME_NAME-theme[disabled] md-icon,  .md-button.md-THEME_NAME-theme.md-raised[disabled] md-icon,  .md-button.md-THEME_NAME-theme.md-fab[disabled] md-icon,  .md-button.md-THEME_NAME-theme.md-accent[disabled] md-icon,  .md-button.md-THEME_NAME-theme.md-warn[disabled] md-icon {    color: '{{foreground-3}}'; }a.md-button.md-THEME_NAME-theme.md-raised[disabled], a.md-button.md-THEME_NAME-theme.md-fab[disabled],.md-button.md-THEME_NAME-theme.md-raised[disabled],.md-button.md-THEME_NAME-theme.md-fab[disabled] {  background-color: '{{foreground-4}}'; }a.md-button.md-THEME_NAME-theme[disabled],.md-button.md-THEME_NAME-theme[disabled] {  background-color: transparent; }md-card.md-THEME_NAME-theme {  background-color: '{{background-color}}';  border-radius: 2px; }  md-card.md-THEME_NAME-theme .md-card-image {    border-radius: 2px 2px 0 0; }  md-card.md-THEME_NAME-theme md-card-header md-card-avatar md-icon {    color: '{{background-color}}';    background-color: '{{foreground-3}}'; }  md-card.md-THEME_NAME-theme md-card-header md-card-header-text .md-subhead {    color: '{{foreground-2}}'; }  md-card.md-THEME_NAME-theme md-card-title md-card-title-text:not(:only-child) .md-subhead {    color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme .md-ripple {  color: '{{accent-600}}'; }md-checkbox.md-THEME_NAME-theme.md-checked .md-ripple {  color: '{{background-600}}'; }md-checkbox.md-THEME_NAME-theme.md-checked.md-focused .md-container:before {  background-color: '{{accent-color-0.26}}'; }md-checkbox.md-THEME_NAME-theme .md-ink-ripple {  color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme.md-checked .md-ink-ripple {  color: '{{accent-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme .md-icon {  border-color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme.md-checked .md-icon {  background-color: '{{accent-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme.md-checked .md-icon:after {  border-color: '{{accent-contrast-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary .md-ripple {  color: '{{primary-600}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-ripple {  color: '{{background-600}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary .md-ink-ripple {  color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-ink-ripple {  color: '{{primary-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary .md-icon {  border-color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-icon {  background-color: '{{primary-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked.md-focused .md-container:before {  background-color: '{{primary-color-0.26}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-icon:after {  border-color: '{{primary-contrast-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary .md-indeterminate[disabled] .md-container {  color: '{{foreground-3}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn .md-ripple {  color: '{{warn-600}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn .md-ink-ripple {  color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-ink-ripple {  color: '{{warn-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn .md-icon {  border-color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-icon {  background-color: '{{warn-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked.md-focused:not([disabled]) .md-container:before {  background-color: '{{warn-color-0.26}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-icon:after {  border-color: '{{background-200}}'; }md-checkbox.md-THEME_NAME-theme[disabled] .md-icon {  border-color: '{{foreground-3}}'; }md-checkbox.md-THEME_NAME-theme[disabled].md-checked .md-icon {  background-color: '{{foreground-3}}'; }md-checkbox.md-THEME_NAME-theme[disabled].md-checked .md-icon:after {  border-color: '{{background-200}}'; }md-checkbox.md-THEME_NAME-theme[disabled] .md-label {  color: '{{foreground-3}}'; }md-chips.md-THEME_NAME-theme .md-chips {  box-shadow: 0 1px '{{background-300}}'; }  md-chips.md-THEME_NAME-theme .md-chips.md-focused {    box-shadow: 0 2px '{{primary-color}}'; }md-chips.md-THEME_NAME-theme .md-chip {  background: '{{background-300}}';  color: '{{background-800}}'; }  md-chips.md-THEME_NAME-theme .md-chip.md-focused {    background: '{{primary-color}}';    color: '{{primary-contrast}}'; }    md-chips.md-THEME_NAME-theme .md-chip.md-focused md-icon {      color: '{{primary-contrast}}'; }md-chips.md-THEME_NAME-theme md-chip-remove .md-button md-icon path {  fill: '{{background-500}}'; }.md-contact-suggestion span.md-contact-email {  color: '{{background-400}}'; }md-content.md-THEME_NAME-theme {  color: '{{foreground-1}}';  background-color: '{{background-color}}'; }/** Theme styles for mdCalendar. */.md-calendar.md-THEME_NAME-theme {  color: '{{foreground-1}}'; }  .md-calendar.md-THEME_NAME-theme tr:last-child td {    border-bottom-color: '{{background-200}}'; }.md-THEME_NAME-theme .md-calendar-day-header {  background: '{{background-hue-1}}';  color: '{{foreground-1}}'; }.md-THEME_NAME-theme .md-calendar-date.md-calendar-date-today .md-calendar-date-selection-indicator {  border: 1px solid '{{primary-500}}'; }.md-THEME_NAME-theme .md-calendar-date.md-calendar-date-today.md-calendar-date-disabled {  color: '{{primary-500-0.6}}'; }.md-THEME_NAME-theme .md-calendar-date.md-focus .md-calendar-date-selection-indicator {  background: '{{background-hue-1}}'; }.md-THEME_NAME-theme .md-calendar-date-selection-indicator:hover {  background: '{{background-hue-1}}'; }.md-THEME_NAME-theme .md-calendar-date.md-calendar-selected-date .md-calendar-date-selection-indicator,.md-THEME_NAME-theme .md-calendar-date.md-focus.md-calendar-selected-date .md-calendar-date-selection-indicator {  background: '{{primary-500}}';  color: '{{primary-500-contrast}}';  border-color: transparent; }.md-THEME_NAME-theme .md-calendar-date-disabled,.md-THEME_NAME-theme .md-calendar-month-label-disabled {  color: '{{foreground-3}}'; }/** Theme styles for mdDatepicker. */md-datepicker.md-THEME_NAME-theme {  background: '{{background-color}}'; }.md-THEME_NAME-theme .md-datepicker-input {  color: '{{background-contrast}}';  background: '{{background-color}}'; }  .md-THEME_NAME-theme .md-datepicker-input::-webkit-input-placeholder, .md-THEME_NAME-theme .md-datepicker-input::-moz-placeholder, .md-THEME_NAME-theme .md-datepicker-input:-moz-placeholder, .md-THEME_NAME-theme .md-datepicker-input:-ms-input-placeholder {    color: \"{{foreground-3}}\"; }.md-THEME_NAME-theme .md-datepicker-input-container {  border-bottom-color: '{{background-300}}'; }  .md-THEME_NAME-theme .md-datepicker-input-container.md-datepicker-focused {    border-bottom-color: '{{primary-500}}'; }  .md-THEME_NAME-theme .md-datepicker-input-container.md-datepicker-invalid {    border-bottom-color: '{{warn-A700}}'; }.md-THEME_NAME-theme .md-datepicker-calendar-pane {  border-color: '{{background-300}}'; }.md-THEME_NAME-theme .md-datepicker-triangle-button .md-datepicker-expand-triangle {  border-top-color: '{{foreground-3}}'; }.md-THEME_NAME-theme .md-datepicker-triangle-button:hover .md-datepicker-expand-triangle {  border-top-color: '{{foreground-2}}'; }.md-THEME_NAME-theme .md-datepicker-open .md-datepicker-calendar-icon {  fill: '{{primary-500}}'; }.md-THEME_NAME-theme .md-datepicker-calendar,.md-THEME_NAME-theme .md-datepicker-input-mask-opaque {  background: '{{background-color}}'; }md-dialog.md-THEME_NAME-theme {  border-radius: 4px;  background-color: '{{background-color}}'; }  md-dialog.md-THEME_NAME-theme.md-content-overflow .md-actions, md-dialog.md-THEME_NAME-theme.md-content-overflow md-dialog-actions {    border-top-color: '{{foreground-4}}'; }md-divider.md-THEME_NAME-theme {  border-top-color: '{{foreground-4}}'; }.layout-row > md-divider.md-THEME_NAME-theme {  border-right-color: '{{foreground-4}}'; }md-icon.md-THEME_NAME-theme {  color: '{{foreground-2}}'; }  md-icon.md-THEME_NAME-theme.md-primary {    color: '{{primary-color}}'; }  md-icon.md-THEME_NAME-theme.md-accent {    color: '{{accent-color}}'; }  md-icon.md-THEME_NAME-theme.md-warn {    color: '{{warn-color}}'; }md-input-container.md-THEME_NAME-theme .md-input {  color: '{{foreground-1}}';  border-color: '{{foreground-4}}';  text-shadow: '{{foreground-shadow}}'; }  md-input-container.md-THEME_NAME-theme .md-input::-webkit-input-placeholder, md-input-container.md-THEME_NAME-theme .md-input::-moz-placeholder, md-input-container.md-THEME_NAME-theme .md-input:-moz-placeholder, md-input-container.md-THEME_NAME-theme .md-input:-ms-input-placeholder {    color: \"{{foreground-3}}\"; }md-input-container.md-THEME_NAME-theme > md-icon {  color: '{{foreground-1}}'; }md-input-container.md-THEME_NAME-theme label,md-input-container.md-THEME_NAME-theme .md-placeholder {  text-shadow: '{{foreground-shadow}}';  color: '{{foreground-3}}'; }md-input-container.md-THEME_NAME-theme ng-messages, md-input-container.md-THEME_NAME-theme [ng-messages],md-input-container.md-THEME_NAME-theme ng-message, md-input-container.md-THEME_NAME-theme data-ng-message, md-input-container.md-THEME_NAME-theme x-ng-message,md-input-container.md-THEME_NAME-theme [ng-message], md-input-container.md-THEME_NAME-theme [data-ng-message], md-input-container.md-THEME_NAME-theme [x-ng-message],md-input-container.md-THEME_NAME-theme [ng-message-exp], md-input-container.md-THEME_NAME-theme [data-ng-message-exp], md-input-container.md-THEME_NAME-theme [x-ng-message-exp] {  color: '{{warn-A700}}'; }  md-input-container.md-THEME_NAME-theme ng-messages .md-char-counter, md-input-container.md-THEME_NAME-theme [ng-messages] .md-char-counter,  md-input-container.md-THEME_NAME-theme ng-message .md-char-counter, md-input-container.md-THEME_NAME-theme data-ng-message .md-char-counter, md-input-container.md-THEME_NAME-theme x-ng-message .md-char-counter,  md-input-container.md-THEME_NAME-theme [ng-message] .md-char-counter, md-input-container.md-THEME_NAME-theme [data-ng-message] .md-char-counter, md-input-container.md-THEME_NAME-theme [x-ng-message] .md-char-counter,  md-input-container.md-THEME_NAME-theme [ng-message-exp] .md-char-counter, md-input-container.md-THEME_NAME-theme [data-ng-message-exp] .md-char-counter, md-input-container.md-THEME_NAME-theme [x-ng-message-exp] .md-char-counter {    color: '{{foreground-1}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-has-value label {  color: '{{foreground-2}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused .md-input {  border-color: '{{primary-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused label {  color: '{{primary-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused md-icon {  color: '{{primary-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-accent .md-input {  border-color: '{{accent-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-accent label {  color: '{{accent-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-warn .md-input {  border-color: '{{warn-A700}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-warn label {  color: '{{warn-A700}}'; }md-input-container.md-THEME_NAME-theme.md-input-invalid .md-input {  border-color: '{{warn-A700}}'; }md-input-container.md-THEME_NAME-theme.md-input-invalid.md-input-focused label {  color: '{{warn-A700}}'; }md-input-container.md-THEME_NAME-theme.md-input-invalid ng-message, md-input-container.md-THEME_NAME-theme.md-input-invalid data-ng-message, md-input-container.md-THEME_NAME-theme.md-input-invalid x-ng-message,md-input-container.md-THEME_NAME-theme.md-input-invalid [ng-message], md-input-container.md-THEME_NAME-theme.md-input-invalid [data-ng-message], md-input-container.md-THEME_NAME-theme.md-input-invalid [x-ng-message],md-input-container.md-THEME_NAME-theme.md-input-invalid [ng-message-exp], md-input-container.md-THEME_NAME-theme.md-input-invalid [data-ng-message-exp], md-input-container.md-THEME_NAME-theme.md-input-invalid [x-ng-message-exp],md-input-container.md-THEME_NAME-theme.md-input-invalid .md-char-counter {  color: '{{warn-A700}}'; }md-input-container.md-THEME_NAME-theme .md-input[disabled],md-input-container.md-THEME_NAME-theme .md-input [disabled] {  border-bottom-color: transparent;  color: '{{foreground-3}}';  background-image: linear-gradient(to right, \"{{foreground-3}}\" 0%, \"{{foreground-3}}\" 33%, transparent 0%);  background-image: -ms-linear-gradient(left, transparent 0%, \"{{foreground-3}}\" 100%); }md-list.md-THEME_NAME-theme md-list-item.md-2-line .md-list-item-text h3, md-list.md-THEME_NAME-theme md-list-item.md-2-line .md-list-item-text h4,md-list.md-THEME_NAME-theme md-list-item.md-3-line .md-list-item-text h3,md-list.md-THEME_NAME-theme md-list-item.md-3-line .md-list-item-text h4 {  color: '{{foreground-1}}'; }md-list.md-THEME_NAME-theme md-list-item.md-2-line .md-list-item-text p,md-list.md-THEME_NAME-theme md-list-item.md-3-line .md-list-item-text p {  color: '{{foreground-2}}'; }md-list.md-THEME_NAME-theme .md-proxy-focus.md-focused div.md-no-style {  background-color: '{{background-100}}'; }md-list.md-THEME_NAME-theme md-list-item > .md-avatar-icon {  background-color: '{{foreground-3}}';  color: '{{background-color}}'; }md-list.md-THEME_NAME-theme md-list-item > md-icon {  color: '{{foreground-2}}'; }  md-list.md-THEME_NAME-theme md-list-item > md-icon.md-highlight {    color: '{{primary-color}}'; }    md-list.md-THEME_NAME-theme md-list-item > md-icon.md-highlight.md-accent {      color: '{{accent-color}}'; }md-menu-content.md-THEME_NAME-theme {  background-color: '{{background-color}}'; }  md-menu-content.md-THEME_NAME-theme md-menu-divider {    background-color: '{{foreground-4}}'; }md-menu-bar.md-THEME_NAME-theme > button.md-button {  color: '{{foreground-2}}';  border-radius: 2px; }md-menu-bar.md-THEME_NAME-theme md-menu.md-open > button, md-menu-bar.md-THEME_NAME-theme md-menu > button:focus {  outline: none;  background: '{{background-200}}'; }md-menu-bar.md-THEME_NAME-theme.md-open:not(.md-keyboard-mode) md-menu:hover > button {  background-color: '{{ background-500-0.2}}'; }md-menu-bar.md-THEME_NAME-theme:not(.md-keyboard-mode):not(.md-open) md-menu button:hover,md-menu-bar.md-THEME_NAME-theme:not(.md-keyboard-mode):not(.md-open) md-menu button:focus {  background: transparent; }md-menu-content.md-THEME_NAME-theme .md-menu > .md-button:after {  color: '{{foreground-2}}'; }md-menu-content.md-THEME_NAME-theme .md-menu.md-open > .md-button {  background-color: '{{ background-500-0.2}}'; }md-toolbar.md-THEME_NAME-theme.md-menu-toolbar {  background-color: '{{background-color}}';  color: '{{foreground-1}}'; }  md-toolbar.md-THEME_NAME-theme.md-menu-toolbar md-toolbar-filler {    background-color: '{{primary-color}}';    color: '{{primary-contrast}}'; }    md-toolbar.md-THEME_NAME-theme.md-menu-toolbar md-toolbar-filler md-icon {      color: '{{primary-contrast}}'; }.md-panel {  background-color: '{{background-900-0.0}}'; }  .md-panel._md-panel-backdrop.md-THEME_NAME-theme {    background-color: '{{background-900-1.0}}'; }md-progress-circular.md-THEME_NAME-theme {  background-color: transparent; }  md-progress-circular.md-THEME_NAME-theme .md-inner .md-gap {    border-top-color: '{{primary-color}}';    border-bottom-color: '{{primary-color}}'; }  md-progress-circular.md-THEME_NAME-theme .md-inner .md-left .md-half-circle, md-progress-circular.md-THEME_NAME-theme .md-inner .md-right .md-half-circle {    border-top-color: '{{primary-color}}'; }  md-progress-circular.md-THEME_NAME-theme .md-inner .md-right .md-half-circle {    border-right-color: '{{primary-color}}'; }  md-progress-circular.md-THEME_NAME-theme .md-inner .md-left .md-half-circle {    border-left-color: '{{primary-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-gap {    border-top-color: '{{warn-color}}';    border-bottom-color: '{{warn-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-left .md-half-circle, md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-right .md-half-circle {    border-top-color: '{{warn-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-right .md-half-circle {    border-right-color: '{{warn-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-left .md-half-circle {    border-left-color: '{{warn-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-gap {    border-top-color: '{{accent-color}}';    border-bottom-color: '{{accent-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-left .md-half-circle, md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-right .md-half-circle {    border-top-color: '{{accent-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-right .md-half-circle {    border-right-color: '{{accent-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-left .md-half-circle {    border-left-color: '{{accent-color}}'; }md-progress-linear.md-THEME_NAME-theme .md-container {  background-color: '{{primary-100}}'; }md-progress-linear.md-THEME_NAME-theme .md-bar {  background-color: '{{primary-color}}'; }md-progress-linear.md-THEME_NAME-theme.md-warn .md-container {  background-color: '{{warn-100}}'; }md-progress-linear.md-THEME_NAME-theme.md-warn .md-bar {  background-color: '{{warn-color}}'; }md-progress-linear.md-THEME_NAME-theme.md-accent .md-container {  background-color: '{{accent-100}}'; }md-progress-linear.md-THEME_NAME-theme.md-accent .md-bar {  background-color: '{{accent-color}}'; }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-warn .md-bar1 {  background-color: '{{warn-100}}'; }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-warn .md-dashed:before {  background: radial-gradient(\"{{warn-100}}\" 0%, \"{{warn-100}}\" 16%, transparent 42%); }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-accent .md-bar1 {  background-color: '{{accent-100}}'; }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-accent .md-dashed:before {  background: radial-gradient(\"{{accent-100}}\" 0%, \"{{accent-100}}\" 16%, transparent 42%); }md-radio-button.md-THEME_NAME-theme .md-off {  border-color: '{{foreground-2}}'; }md-radio-button.md-THEME_NAME-theme .md-on {  background-color: '{{accent-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme.md-checked .md-off {  border-color: '{{accent-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme.md-checked .md-ink-ripple {  color: '{{accent-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme .md-container .md-ripple {  color: '{{accent-600}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary .md-on, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary .md-on,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary .md-on,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-on {  background-color: '{{primary-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary .md-checked .md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary.md-checked .md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary .md-checked .md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary .md-checked .md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary.md-checked .md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-checked .md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-off {  border-color: '{{primary-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary .md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary.md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary .md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary .md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary.md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-ink-ripple {  color: '{{primary-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary .md-container .md-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary .md-container .md-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary .md-container .md-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-container .md-ripple {  color: '{{primary-600}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn .md-on, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn .md-on,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn .md-on,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-on {  background-color: '{{warn-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn .md-checked .md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn.md-checked .md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn .md-checked .md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn .md-checked .md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn.md-checked .md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-checked .md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-off {  border-color: '{{warn-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn .md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn.md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn .md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn .md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn.md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-ink-ripple {  color: '{{warn-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn .md-container .md-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn .md-container .md-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn .md-container .md-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-container .md-ripple {  color: '{{warn-600}}'; }md-radio-group.md-THEME_NAME-theme[disabled],md-radio-button.md-THEME_NAME-theme[disabled] {  color: '{{foreground-3}}'; }  md-radio-group.md-THEME_NAME-theme[disabled] .md-container .md-off,  md-radio-button.md-THEME_NAME-theme[disabled] .md-container .md-off {    border-color: '{{foreground-3}}'; }  md-radio-group.md-THEME_NAME-theme[disabled] .md-container .md-on,  md-radio-button.md-THEME_NAME-theme[disabled] .md-container .md-on {    border-color: '{{foreground-3}}'; }md-radio-group.md-THEME_NAME-theme .md-checked .md-ink-ripple {  color: '{{accent-color-0.26}}'; }md-radio-group.md-THEME_NAME-theme.md-primary .md-checked:not([disabled]) .md-ink-ripple, md-radio-group.md-THEME_NAME-theme .md-checked:not([disabled]).md-primary .md-ink-ripple {  color: '{{primary-color-0.26}}'; }md-radio-group.md-THEME_NAME-theme .md-checked.md-primary .md-ink-ripple {  color: '{{warn-color-0.26}}'; }md-radio-group.md-THEME_NAME-theme.md-focused:not(:empty) .md-checked .md-container:before {  background-color: '{{accent-color-0.26}}'; }md-radio-group.md-THEME_NAME-theme.md-focused:not(:empty).md-primary .md-checked .md-container:before,md-radio-group.md-THEME_NAME-theme.md-focused:not(:empty) .md-checked.md-primary .md-container:before {  background-color: '{{primary-color-0.26}}'; }md-radio-group.md-THEME_NAME-theme.md-focused:not(:empty).md-warn .md-checked .md-container:before,md-radio-group.md-THEME_NAME-theme.md-focused:not(:empty) .md-checked.md-warn .md-container:before {  background-color: '{{warn-color-0.26}}'; }md-select.md-THEME_NAME-theme[disabled] .md-select-value {  border-bottom-color: transparent;  background-image: linear-gradient(to right, \"{{foreground-3}}\" 0%, \"{{foreground-3}}\" 33%, transparent 0%);  background-image: -ms-linear-gradient(left, transparent 0%, \"{{foreground-3}}\" 100%); }md-select.md-THEME_NAME-theme .md-select-value {  border-bottom-color: '{{foreground-4}}'; }  md-select.md-THEME_NAME-theme .md-select-value.md-select-placeholder {    color: '{{foreground-3}}'; }md-select.md-THEME_NAME-theme.ng-invalid.ng-dirty .md-select-value {  color: '{{warn-A700}}' !important;  border-bottom-color: '{{warn-A700}}' !important; }md-select.md-THEME_NAME-theme:not([disabled]):focus .md-select-value {  border-bottom-color: '{{primary-color}}';  color: '{{ foreground-1 }}'; }  md-select.md-THEME_NAME-theme:not([disabled]):focus .md-select-value.md-select-placeholder {    color: '{{ foreground-1 }}'; }md-select.md-THEME_NAME-theme:not([disabled]):focus.md-accent .md-select-value {  border-bottom-color: '{{accent-color}}'; }md-select.md-THEME_NAME-theme:not([disabled]):focus.md-warn .md-select-value {  border-bottom-color: '{{warn-color}}'; }md-select.md-THEME_NAME-theme[disabled] .md-select-value {  color: '{{foreground-3}}'; }  md-select.md-THEME_NAME-theme[disabled] .md-select-value.md-select-placeholder {    color: '{{foreground-3}}'; }md-select-menu.md-THEME_NAME-theme md-option[disabled] {  color: '{{foreground-3}}'; }md-select-menu.md-THEME_NAME-theme md-optgroup {  color: '{{foreground-2}}'; }  md-select-menu.md-THEME_NAME-theme md-optgroup md-option {    color: '{{foreground-1}}'; }md-select-menu.md-THEME_NAME-theme md-option[selected] {  color: '{{primary-500}}'; }  md-select-menu.md-THEME_NAME-theme md-option[selected]:focus {    color: '{{primary-600}}'; }  md-select-menu.md-THEME_NAME-theme md-option[selected].md-accent {    color: '{{accent-500}}'; }    md-select-menu.md-THEME_NAME-theme md-option[selected].md-accent:focus {      color: '{{accent-600}}'; }md-select-menu.md-THEME_NAME-theme md-option:focus:not([disabled]):not([selected]) {  background: '{{background-200}}'; }.md-checkbox-enabled.md-THEME_NAME-theme .md-ripple {  color: '{{primary-600}}'; }.md-checkbox-enabled.md-THEME_NAME-theme[selected] .md-ripple {  color: '{{background-600}}'; }.md-checkbox-enabled.md-THEME_NAME-theme .md-ink-ripple {  color: '{{foreground-2}}'; }.md-checkbox-enabled.md-THEME_NAME-theme[selected] .md-ink-ripple {  color: '{{primary-color-0.87}}'; }.md-checkbox-enabled.md-THEME_NAME-theme .md-icon {  border-color: '{{foreground-2}}'; }.md-checkbox-enabled.md-THEME_NAME-theme[selected] .md-icon {  background-color: '{{primary-color-0.87}}'; }.md-checkbox-enabled.md-THEME_NAME-theme[selected].md-focused .md-container:before {  background-color: '{{primary-color-0.26}}'; }.md-checkbox-enabled.md-THEME_NAME-theme[selected] .md-icon:after {  border-color: '{{primary-contrast-0.87}}'; }.md-checkbox-enabled.md-THEME_NAME-theme .md-indeterminate[disabled] .md-container {  color: '{{foreground-3}}'; }.md-checkbox-enabled.md-THEME_NAME-theme md-option .md-text {  color: '{{background-900-0.87}}'; }md-sidenav.md-THEME_NAME-theme {  background-color: '{{background-color}}'; }md-slider.md-THEME_NAME-theme .md-track {  background-color: '{{foreground-3}}'; }md-slider.md-THEME_NAME-theme .md-track-ticks {  background-color: '{{foreground-4}}'; }md-slider.md-THEME_NAME-theme .md-focus-thumb {  background-color: '{{foreground-2}}'; }md-slider.md-THEME_NAME-theme .md-focus-ring {  background-color: '{{accent-color}}'; }md-slider.md-THEME_NAME-theme .md-disabled-thumb {  border-color: '{{background-color}}'; }md-slider.md-THEME_NAME-theme.md-min .md-thumb:after {  background-color: '{{background-color}}'; }md-slider.md-THEME_NAME-theme .md-track.md-track-fill {  background-color: '{{accent-color}}'; }md-slider.md-THEME_NAME-theme .md-thumb:after {  border-color: '{{accent-color}}';  background-color: '{{accent-color}}'; }md-slider.md-THEME_NAME-theme .md-sign {  background-color: '{{accent-color}}'; }  md-slider.md-THEME_NAME-theme .md-sign:after {    border-top-color: '{{accent-color}}'; }md-slider.md-THEME_NAME-theme .md-thumb-text {  color: '{{accent-contrast}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-focus-ring {  background-color: '{{warn-color}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-track.md-track-fill {  background-color: '{{warn-color}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-thumb:after {  border-color: '{{warn-color}}';  background-color: '{{warn-color}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-sign {  background-color: '{{warn-color}}'; }  md-slider.md-THEME_NAME-theme.md-warn .md-sign:after {    border-top-color: '{{warn-color}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-thumb-text {  color: '{{warn-contrast}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-focus-ring {  background-color: '{{primary-color}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-track.md-track-fill {  background-color: '{{primary-color}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-thumb:after {  border-color: '{{primary-color}}';  background-color: '{{primary-color}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-sign {  background-color: '{{primary-color}}'; }  md-slider.md-THEME_NAME-theme.md-primary .md-sign:after {    border-top-color: '{{primary-color}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-thumb-text {  color: '{{primary-contrast}}'; }md-slider.md-THEME_NAME-theme[disabled] .md-thumb:after {  border-color: '{{foreground-3}}'; }md-slider.md-THEME_NAME-theme[disabled]:not(.md-min) .md-thumb:after {  background-color: '{{foreground-3}}'; }.md-subheader.md-THEME_NAME-theme {  color: '{{ foreground-2-0.23 }}';  background-color: '{{background-color}}'; }  .md-subheader.md-THEME_NAME-theme.md-primary {    color: '{{primary-color}}'; }  .md-subheader.md-THEME_NAME-theme.md-accent {    color: '{{accent-color}}'; }  .md-subheader.md-THEME_NAME-theme.md-warn {    color: '{{warn-color}}'; }md-switch.md-THEME_NAME-theme .md-ink-ripple {  color: '{{background-500}}'; }md-switch.md-THEME_NAME-theme .md-thumb {  background-color: '{{background-50}}'; }md-switch.md-THEME_NAME-theme .md-bar {  background-color: '{{background-500}}'; }md-switch.md-THEME_NAME-theme.md-checked .md-ink-ripple {  color: '{{accent-color}}'; }md-switch.md-THEME_NAME-theme.md-checked .md-thumb {  background-color: '{{accent-color}}'; }md-switch.md-THEME_NAME-theme.md-checked .md-bar {  background-color: '{{accent-color-0.5}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-focused .md-thumb:before {  background-color: '{{accent-color-0.26}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-primary .md-ink-ripple {  color: '{{primary-color}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-primary .md-thumb {  background-color: '{{primary-color}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-primary .md-bar {  background-color: '{{primary-color-0.5}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-primary.md-focused .md-thumb:before {  background-color: '{{primary-color-0.26}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-warn .md-ink-ripple {  color: '{{warn-color}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-warn .md-thumb {  background-color: '{{warn-color}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-warn .md-bar {  background-color: '{{warn-color-0.5}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-warn.md-focused .md-thumb:before {  background-color: '{{warn-color-0.26}}'; }md-switch.md-THEME_NAME-theme[disabled] .md-thumb {  background-color: '{{background-400}}'; }md-switch.md-THEME_NAME-theme[disabled] .md-bar {  background-color: '{{foreground-4}}'; }md-toast.md-THEME_NAME-theme .md-toast-content {  background-color: #323232;  color: '{{background-50}}'; }  md-toast.md-THEME_NAME-theme .md-toast-content .md-button {    color: '{{background-50}}'; }    md-toast.md-THEME_NAME-theme .md-toast-content .md-button.md-highlight {      color: '{{primary-A200}}'; }      md-toast.md-THEME_NAME-theme .md-toast-content .md-button.md-highlight.md-accent {        color: '{{accent-A200}}'; }      md-toast.md-THEME_NAME-theme .md-toast-content .md-button.md-highlight.md-warn {        color: '{{warn-A200}}'; }md-tabs.md-THEME_NAME-theme md-tabs-wrapper {  background-color: transparent;  border-color: '{{foreground-4}}'; }md-tabs.md-THEME_NAME-theme .md-paginator md-icon {  color: '{{primary-color}}'; }md-tabs.md-THEME_NAME-theme md-ink-bar {  color: '{{accent-color}}';  background: '{{accent-color}}'; }md-tabs.md-THEME_NAME-theme .md-tab {  color: '{{foreground-2}}'; }  md-tabs.md-THEME_NAME-theme .md-tab[disabled], md-tabs.md-THEME_NAME-theme .md-tab[disabled] md-icon {    color: '{{foreground-3}}'; }  md-tabs.md-THEME_NAME-theme .md-tab.md-active, md-tabs.md-THEME_NAME-theme .md-tab.md-active md-icon, md-tabs.md-THEME_NAME-theme .md-tab.md-focused, md-tabs.md-THEME_NAME-theme .md-tab.md-focused md-icon {    color: '{{primary-color}}'; }  md-tabs.md-THEME_NAME-theme .md-tab.md-focused {    background: '{{primary-color-0.1}}'; }  md-tabs.md-THEME_NAME-theme .md-tab .md-ripple-container {    color: '{{accent-100}}'; }md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper {  background-color: '{{accent-color}}'; }  md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]) {    color: '{{accent-100}}'; }    md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active, md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active md-icon, md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused, md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused md-icon {      color: '{{accent-contrast}}'; }    md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      background: '{{accent-contrast-0.1}}'; }  md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-ink-bar {    color: '{{primary-600-1}}';    background: '{{primary-600-1}}'; }md-tabs.md-THEME_NAME-theme.md-primary > md-tabs-wrapper {  background-color: '{{primary-color}}'; }  md-tabs.md-THEME_NAME-theme.md-primary > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]) {    color: '{{primary-100}}'; }    md-tabs.md-THEME_NAME-theme.md-primary > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active, md-tabs.md-THEME_NAME-theme.md-primary > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active md-icon, md-tabs.md-THEME_NAME-theme.md-primary > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused, md-tabs.md-THEME_NAME-theme.md-primary > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused md-icon {      color: '{{primary-contrast}}'; }    md-tabs.md-THEME_NAME-theme.md-primary > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      background: '{{primary-contrast-0.1}}'; }md-tabs.md-THEME_NAME-theme.md-warn > md-tabs-wrapper {  background-color: '{{warn-color}}'; }  md-tabs.md-THEME_NAME-theme.md-warn > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]) {    color: '{{warn-100}}'; }    md-tabs.md-THEME_NAME-theme.md-warn > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active, md-tabs.md-THEME_NAME-theme.md-warn > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active md-icon, md-tabs.md-THEME_NAME-theme.md-warn > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused, md-tabs.md-THEME_NAME-theme.md-warn > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused md-icon {      color: '{{warn-contrast}}'; }    md-tabs.md-THEME_NAME-theme.md-warn > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      background: '{{warn-contrast-0.1}}'; }md-toolbar > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper {  background-color: '{{primary-color}}'; }  md-toolbar > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]) {    color: '{{primary-100}}'; }    md-toolbar > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active, md-toolbar > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active md-icon, md-toolbar > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused, md-toolbar > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused md-icon {      color: '{{primary-contrast}}'; }    md-toolbar > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      background: '{{primary-contrast-0.1}}'; }md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper {  background-color: '{{accent-color}}'; }  md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]) {    color: '{{accent-100}}'; }    md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active, md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active md-icon, md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused, md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused md-icon {      color: '{{accent-contrast}}'; }    md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      background: '{{accent-contrast-0.1}}'; }  md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-ink-bar {    color: '{{primary-600-1}}';    background: '{{primary-600-1}}'; }md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper {  background-color: '{{warn-color}}'; }  md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]) {    color: '{{warn-100}}'; }    md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active, md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active md-icon, md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused, md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused md-icon {      color: '{{warn-contrast}}'; }    md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      background: '{{warn-contrast-0.1}}'; }md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar) {  background-color: '{{primary-color}}';  color: '{{primary-contrast}}'; }  md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar) md-icon {    color: '{{primary-contrast}}'; }  md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar) .md-button:not(.md-raised) {    color: '{{primary-contrast}}'; }  md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar).md-accent {    background-color: '{{accent-color}}';    color: '{{accent-contrast}}'; }  md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar).md-warn {    background-color: '{{warn-color}}';    color: '{{warn-contrast}}'; }md-tooltip.md-THEME_NAME-theme {  color: '{{background-A100}}'; }  md-tooltip.md-THEME_NAME-theme .md-content {    background-color: '{{foreground-2}}'; }");
}()}(window,window.angular),window.ngMaterial={version:{full:"1.0.9"}};
/**
 * State-based routing for AngularJS
 * @version v0.3.0
 * @link http://angular-ui.github.com/
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */

/* commonjs package manager support (eg componentjs) */
if (typeof module !== "undefined" && typeof exports !== "undefined" && module.exports === exports){
  module.exports = 'ui.router';
}

(function (window, angular, undefined) {
/*jshint globalstrict:true*/
/*global angular:false*/
'use strict';

var isDefined = angular.isDefined,
    isFunction = angular.isFunction,
    isString = angular.isString,
    isObject = angular.isObject,
    isArray = angular.isArray,
    forEach = angular.forEach,
    extend = angular.extend,
    copy = angular.copy,
    toJson = angular.toJson;

function inherit(parent, extra) {
  return extend(new (extend(function() {}, { prototype: parent }))(), extra);
}

function merge(dst) {
  forEach(arguments, function(obj) {
    if (obj !== dst) {
      forEach(obj, function(value, key) {
        if (!dst.hasOwnProperty(key)) dst[key] = value;
      });
    }
  });
  return dst;
}

/**
 * Finds the common ancestor path between two states.
 *
 * @param {Object} first The first state.
 * @param {Object} second The second state.
 * @return {Array} Returns an array of state names in descending order, not including the root.
 */
function ancestors(first, second) {
  var path = [];

  for (var n in first.path) {
    if (first.path[n] !== second.path[n]) break;
    path.push(first.path[n]);
  }
  return path;
}

/**
 * IE8-safe wrapper for `Object.keys()`.
 *
 * @param {Object} object A JavaScript object.
 * @return {Array} Returns the keys of the object as an array.
 */
function objectKeys(object) {
  if (Object.keys) {
    return Object.keys(object);
  }
  var result = [];

  forEach(object, function(val, key) {
    result.push(key);
  });
  return result;
}

/**
 * IE8-safe wrapper for `Array.prototype.indexOf()`.
 *
 * @param {Array} array A JavaScript array.
 * @param {*} value A value to search the array for.
 * @return {Number} Returns the array index value of `value`, or `-1` if not present.
 */
function indexOf(array, value) {
  if (Array.prototype.indexOf) {
    return array.indexOf(value, Number(arguments[2]) || 0);
  }
  var len = array.length >>> 0, from = Number(arguments[2]) || 0;
  from = (from < 0) ? Math.ceil(from) : Math.floor(from);

  if (from < 0) from += len;

  for (; from < len; from++) {
    if (from in array && array[from] === value) return from;
  }
  return -1;
}

/**
 * Merges a set of parameters with all parameters inherited between the common parents of the
 * current state and a given destination state.
 *
 * @param {Object} currentParams The value of the current state parameters ($stateParams).
 * @param {Object} newParams The set of parameters which will be composited with inherited params.
 * @param {Object} $current Internal definition of object representing the current state.
 * @param {Object} $to Internal definition of object representing state to transition to.
 */
function inheritParams(currentParams, newParams, $current, $to) {
  var parents = ancestors($current, $to), parentParams, inherited = {}, inheritList = [];

  for (var i in parents) {
    if (!parents[i] || !parents[i].params) continue;
    parentParams = objectKeys(parents[i].params);
    if (!parentParams.length) continue;

    for (var j in parentParams) {
      if (indexOf(inheritList, parentParams[j]) >= 0) continue;
      inheritList.push(parentParams[j]);
      inherited[parentParams[j]] = currentParams[parentParams[j]];
    }
  }
  return extend({}, inherited, newParams);
}

/**
 * Performs a non-strict comparison of the subset of two objects, defined by a list of keys.
 *
 * @param {Object} a The first object.
 * @param {Object} b The second object.
 * @param {Array} keys The list of keys within each object to compare. If the list is empty or not specified,
 *                     it defaults to the list of keys in `a`.
 * @return {Boolean} Returns `true` if the keys match, otherwise `false`.
 */
function equalForKeys(a, b, keys) {
  if (!keys) {
    keys = [];
    for (var n in a) keys.push(n); // Used instead of Object.keys() for IE8 compatibility
  }

  for (var i=0; i<keys.length; i++) {
    var k = keys[i];
    if (a[k] != b[k]) return false; // Not '===', values aren't necessarily normalized
  }
  return true;
}

/**
 * Returns the subset of an object, based on a list of keys.
 *
 * @param {Array} keys
 * @param {Object} values
 * @return {Boolean} Returns a subset of `values`.
 */
function filterByKeys(keys, values) {
  var filtered = {};

  forEach(keys, function (name) {
    filtered[name] = values[name];
  });
  return filtered;
}

// like _.indexBy
// when you know that your index values will be unique, or you want last-one-in to win
function indexBy(array, propName) {
  var result = {};
  forEach(array, function(item) {
    result[item[propName]] = item;
  });
  return result;
}

// extracted from underscore.js
// Return a copy of the object only containing the whitelisted properties.
function pick(obj) {
  var copy = {};
  var keys = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
  forEach(keys, function(key) {
    if (key in obj) copy[key] = obj[key];
  });
  return copy;
}

// extracted from underscore.js
// Return a copy of the object omitting the blacklisted properties.
function omit(obj) {
  var copy = {};
  var keys = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
  for (var key in obj) {
    if (indexOf(keys, key) == -1) copy[key] = obj[key];
  }
  return copy;
}

function pluck(collection, key) {
  var result = isArray(collection) ? [] : {};

  forEach(collection, function(val, i) {
    result[i] = isFunction(key) ? key(val) : val[key];
  });
  return result;
}

function filter(collection, callback) {
  var array = isArray(collection);
  var result = array ? [] : {};
  forEach(collection, function(val, i) {
    if (callback(val, i)) {
      result[array ? result.length : i] = val;
    }
  });
  return result;
}

function map(collection, callback) {
  var result = isArray(collection) ? [] : {};

  forEach(collection, function(val, i) {
    result[i] = callback(val, i);
  });
  return result;
}

/**
 * @ngdoc overview
 * @name ui.router.util
 *
 * @description
 * # ui.router.util sub-module
 *
 * This module is a dependency of other sub-modules. Do not include this module as a dependency
 * in your angular app (use {@link ui.router} module instead).
 *
 */
angular.module('ui.router.util', ['ng']);

/**
 * @ngdoc overview
 * @name ui.router.router
 * 
 * @requires ui.router.util
 *
 * @description
 * # ui.router.router sub-module
 *
 * This module is a dependency of other sub-modules. Do not include this module as a dependency
 * in your angular app (use {@link ui.router} module instead).
 */
angular.module('ui.router.router', ['ui.router.util']);

/**
 * @ngdoc overview
 * @name ui.router.state
 * 
 * @requires ui.router.router
 * @requires ui.router.util
 *
 * @description
 * # ui.router.state sub-module
 *
 * This module is a dependency of the main ui.router module. Do not include this module as a dependency
 * in your angular app (use {@link ui.router} module instead).
 * 
 */
angular.module('ui.router.state', ['ui.router.router', 'ui.router.util']);

/**
 * @ngdoc overview
 * @name ui.router
 *
 * @requires ui.router.state
 *
 * @description
 * # ui.router
 * 
 * ## The main module for ui.router 
 * There are several sub-modules included with the ui.router module, however only this module is needed
 * as a dependency within your angular app. The other modules are for organization purposes. 
 *
 * The modules are:
 * * ui.router - the main "umbrella" module
 * * ui.router.router - 
 * 
 * *You'll need to include **only** this module as the dependency within your angular app.*
 * 
 * <pre>
 * <!doctype html>
 * <html ng-app="myApp">
 * <head>
 *   <script src="js/angular.js"></script>
 *   <!-- Include the ui-router script -->
 *   <script src="js/angular-ui-router.min.js"></script>
 *   <script>
 *     // ...and add 'ui.router' as a dependency
 *     var myApp = angular.module('myApp', ['ui.router']);
 *   </script>
 * </head>
 * <body>
 * </body>
 * </html>
 * </pre>
 */
angular.module('ui.router', ['ui.router.state']);

angular.module('ui.router.compat', ['ui.router']);

/**
 * @ngdoc object
 * @name ui.router.util.$resolve
 *
 * @requires $q
 * @requires $injector
 *
 * @description
 * Manages resolution of (acyclic) graphs of promises.
 */
$Resolve.$inject = ['$q', '$injector'];
function $Resolve(  $q,    $injector) {
  
  var VISIT_IN_PROGRESS = 1,
      VISIT_DONE = 2,
      NOTHING = {},
      NO_DEPENDENCIES = [],
      NO_LOCALS = NOTHING,
      NO_PARENT = extend($q.when(NOTHING), { $$promises: NOTHING, $$values: NOTHING });
  

  /**
   * @ngdoc function
   * @name ui.router.util.$resolve#study
   * @methodOf ui.router.util.$resolve
   *
   * @description
   * Studies a set of invocables that are likely to be used multiple times.
   * <pre>
   * $resolve.study(invocables)(locals, parent, self)
   * </pre>
   * is equivalent to
   * <pre>
   * $resolve.resolve(invocables, locals, parent, self)
   * </pre>
   * but the former is more efficient (in fact `resolve` just calls `study` 
   * internally).
   *
   * @param {object} invocables Invocable objects
   * @return {function} a function to pass in locals, parent and self
   */
  this.study = function (invocables) {
    if (!isObject(invocables)) throw new Error("'invocables' must be an object");
    var invocableKeys = objectKeys(invocables || {});
    
    // Perform a topological sort of invocables to build an ordered plan
    var plan = [], cycle = [], visited = {};
    function visit(value, key) {
      if (visited[key] === VISIT_DONE) return;
      
      cycle.push(key);
      if (visited[key] === VISIT_IN_PROGRESS) {
        cycle.splice(0, indexOf(cycle, key));
        throw new Error("Cyclic dependency: " + cycle.join(" -> "));
      }
      visited[key] = VISIT_IN_PROGRESS;
      
      if (isString(value)) {
        plan.push(key, [ function() { return $injector.get(value); }], NO_DEPENDENCIES);
      } else {
        var params = $injector.annotate(value);
        forEach(params, function (param) {
          if (param !== key && invocables.hasOwnProperty(param)) visit(invocables[param], param);
        });
        plan.push(key, value, params);
      }
      
      cycle.pop();
      visited[key] = VISIT_DONE;
    }
    forEach(invocables, visit);
    invocables = cycle = visited = null; // plan is all that's required
    
    function isResolve(value) {
      return isObject(value) && value.then && value.$$promises;
    }
    
    return function (locals, parent, self) {
      if (isResolve(locals) && self === undefined) {
        self = parent; parent = locals; locals = null;
      }
      if (!locals) locals = NO_LOCALS;
      else if (!isObject(locals)) {
        throw new Error("'locals' must be an object");
      }       
      if (!parent) parent = NO_PARENT;
      else if (!isResolve(parent)) {
        throw new Error("'parent' must be a promise returned by $resolve.resolve()");
      }
      
      // To complete the overall resolution, we have to wait for the parent
      // promise and for the promise for each invokable in our plan.
      var resolution = $q.defer(),
          result = resolution.promise,
          promises = result.$$promises = {},
          values = extend({}, locals),
          wait = 1 + plan.length/3,
          merged = false;
          
      function done() {
        // Merge parent values we haven't got yet and publish our own $$values
        if (!--wait) {
          if (!merged) merge(values, parent.$$values); 
          result.$$values = values;
          result.$$promises = result.$$promises || true; // keep for isResolve()
          delete result.$$inheritedValues;
          resolution.resolve(values);
        }
      }
      
      function fail(reason) {
        result.$$failure = reason;
        resolution.reject(reason);
      }

      // Short-circuit if parent has already failed
      if (isDefined(parent.$$failure)) {
        fail(parent.$$failure);
        return result;
      }
      
      if (parent.$$inheritedValues) {
        merge(values, omit(parent.$$inheritedValues, invocableKeys));
      }

      // Merge parent values if the parent has already resolved, or merge
      // parent promises and wait if the parent resolve is still in progress.
      extend(promises, parent.$$promises);
      if (parent.$$values) {
        merged = merge(values, omit(parent.$$values, invocableKeys));
        result.$$inheritedValues = omit(parent.$$values, invocableKeys);
        done();
      } else {
        if (parent.$$inheritedValues) {
          result.$$inheritedValues = omit(parent.$$inheritedValues, invocableKeys);
        }        
        parent.then(done, fail);
      }
      
      // Process each invocable in the plan, but ignore any where a local of the same name exists.
      for (var i=0, ii=plan.length; i<ii; i+=3) {
        if (locals.hasOwnProperty(plan[i])) done();
        else invoke(plan[i], plan[i+1], plan[i+2]);
      }
      
      function invoke(key, invocable, params) {
        // Create a deferred for this invocation. Failures will propagate to the resolution as well.
        var invocation = $q.defer(), waitParams = 0;
        function onfailure(reason) {
          invocation.reject(reason);
          fail(reason);
        }
        // Wait for any parameter that we have a promise for (either from parent or from this
        // resolve; in that case study() will have made sure it's ordered before us in the plan).
        forEach(params, function (dep) {
          if (promises.hasOwnProperty(dep) && !locals.hasOwnProperty(dep)) {
            waitParams++;
            promises[dep].then(function (result) {
              values[dep] = result;
              if (!(--waitParams)) proceed();
            }, onfailure);
          }
        });
        if (!waitParams) proceed();
        function proceed() {
          if (isDefined(result.$$failure)) return;
          try {
            invocation.resolve($injector.invoke(invocable, self, values));
            invocation.promise.then(function (result) {
              values[key] = result;
              done();
            }, onfailure);
          } catch (e) {
            onfailure(e);
          }
        }
        // Publish promise synchronously; invocations further down in the plan may depend on it.
        promises[key] = invocation.promise;
      }
      
      return result;
    };
  };
  
  /**
   * @ngdoc function
   * @name ui.router.util.$resolve#resolve
   * @methodOf ui.router.util.$resolve
   *
   * @description
   * Resolves a set of invocables. An invocable is a function to be invoked via 
   * `$injector.invoke()`, and can have an arbitrary number of dependencies. 
   * An invocable can either return a value directly,
   * or a `$q` promise. If a promise is returned it will be resolved and the 
   * resulting value will be used instead. Dependencies of invocables are resolved 
   * (in this order of precedence)
   *
   * - from the specified `locals`
   * - from another invocable that is part of this `$resolve` call
   * - from an invocable that is inherited from a `parent` call to `$resolve` 
   *   (or recursively
   * - from any ancestor `$resolve` of that parent).
   *
   * The return value of `$resolve` is a promise for an object that contains 
   * (in this order of precedence)
   *
   * - any `locals` (if specified)
   * - the resolved return values of all injectables
   * - any values inherited from a `parent` call to `$resolve` (if specified)
   *
   * The promise will resolve after the `parent` promise (if any) and all promises 
   * returned by injectables have been resolved. If any invocable 
   * (or `$injector.invoke`) throws an exception, or if a promise returned by an 
   * invocable is rejected, the `$resolve` promise is immediately rejected with the 
   * same error. A rejection of a `parent` promise (if specified) will likewise be 
   * propagated immediately. Once the `$resolve` promise has been rejected, no 
   * further invocables will be called.
   * 
   * Cyclic dependencies between invocables are not permitted and will cause `$resolve`
   * to throw an error. As a special case, an injectable can depend on a parameter 
   * with the same name as the injectable, which will be fulfilled from the `parent` 
   * injectable of the same name. This allows inherited values to be decorated. 
   * Note that in this case any other injectable in the same `$resolve` with the same
   * dependency would see the decorated value, not the inherited value.
   *
   * Note that missing dependencies -- unlike cyclic dependencies -- will cause an 
   * (asynchronous) rejection of the `$resolve` promise rather than a (synchronous) 
   * exception.
   *
   * Invocables are invoked eagerly as soon as all dependencies are available. 
   * This is true even for dependencies inherited from a `parent` call to `$resolve`.
   *
   * As a special case, an invocable can be a string, in which case it is taken to 
   * be a service name to be passed to `$injector.get()`. This is supported primarily 
   * for backwards-compatibility with the `resolve` property of `$routeProvider` 
   * routes.
   *
   * @param {object} invocables functions to invoke or 
   * `$injector` services to fetch.
   * @param {object} locals  values to make available to the injectables
   * @param {object} parent  a promise returned by another call to `$resolve`.
   * @param {object} self  the `this` for the invoked methods
   * @return {object} Promise for an object that contains the resolved return value
   * of all invocables, as well as any inherited and local values.
   */
  this.resolve = function (invocables, locals, parent, self) {
    return this.study(invocables)(locals, parent, self);
  };
}

angular.module('ui.router.util').service('$resolve', $Resolve);


/**
 * @ngdoc object
 * @name ui.router.util.$templateFactory
 *
 * @requires $http
 * @requires $templateCache
 * @requires $injector
 *
 * @description
 * Service. Manages loading of templates.
 */
$TemplateFactory.$inject = ['$http', '$templateCache', '$injector'];
function $TemplateFactory(  $http,   $templateCache,   $injector) {

  /**
   * @ngdoc function
   * @name ui.router.util.$templateFactory#fromConfig
   * @methodOf ui.router.util.$templateFactory
   *
   * @description
   * Creates a template from a configuration object. 
   *
   * @param {object} config Configuration object for which to load a template. 
   * The following properties are search in the specified order, and the first one 
   * that is defined is used to create the template:
   *
   * @param {string|object} config.template html string template or function to 
   * load via {@link ui.router.util.$templateFactory#fromString fromString}.
   * @param {string|object} config.templateUrl url to load or a function returning 
   * the url to load via {@link ui.router.util.$templateFactory#fromUrl fromUrl}.
   * @param {Function} config.templateProvider function to invoke via 
   * {@link ui.router.util.$templateFactory#fromProvider fromProvider}.
   * @param {object} params  Parameters to pass to the template function.
   * @param {object} locals Locals to pass to `invoke` if the template is loaded 
   * via a `templateProvider`. Defaults to `{ params: params }`.
   *
   * @return {string|object}  The template html as a string, or a promise for 
   * that string,or `null` if no template is configured.
   */
  this.fromConfig = function (config, params, locals) {
    return (
      isDefined(config.template) ? this.fromString(config.template, params) :
      isDefined(config.templateUrl) ? this.fromUrl(config.templateUrl, params) :
      isDefined(config.templateProvider) ? this.fromProvider(config.templateProvider, params, locals) :
      null
    );
  };

  /**
   * @ngdoc function
   * @name ui.router.util.$templateFactory#fromString
   * @methodOf ui.router.util.$templateFactory
   *
   * @description
   * Creates a template from a string or a function returning a string.
   *
   * @param {string|object} template html template as a string or function that 
   * returns an html template as a string.
   * @param {object} params Parameters to pass to the template function.
   *
   * @return {string|object} The template html as a string, or a promise for that 
   * string.
   */
  this.fromString = function (template, params) {
    return isFunction(template) ? template(params) : template;
  };

  /**
   * @ngdoc function
   * @name ui.router.util.$templateFactory#fromUrl
   * @methodOf ui.router.util.$templateFactory
   * 
   * @description
   * Loads a template from the a URL via `$http` and `$templateCache`.
   *
   * @param {string|Function} url url of the template to load, or a function 
   * that returns a url.
   * @param {Object} params Parameters to pass to the url function.
   * @return {string|Promise.<string>} The template html as a string, or a promise 
   * for that string.
   */
  this.fromUrl = function (url, params) {
    if (isFunction(url)) url = url(params);
    if (url == null) return null;
    else return $http
        .get(url, { cache: $templateCache, headers: { Accept: 'text/html' }})
        .then(function(response) { return response.data; });
  };

  /**
   * @ngdoc function
   * @name ui.router.util.$templateFactory#fromProvider
   * @methodOf ui.router.util.$templateFactory
   *
   * @description
   * Creates a template by invoking an injectable provider function.
   *
   * @param {Function} provider Function to invoke via `$injector.invoke`
   * @param {Object} params Parameters for the template.
   * @param {Object} locals Locals to pass to `invoke`. Defaults to 
   * `{ params: params }`.
   * @return {string|Promise.<string>} The template html as a string, or a promise 
   * for that string.
   */
  this.fromProvider = function (provider, params, locals) {
    return $injector.invoke(provider, null, locals || { params: params });
  };
}

angular.module('ui.router.util').service('$templateFactory', $TemplateFactory);

var $$UMFP; // reference to $UrlMatcherFactoryProvider

/**
 * @ngdoc object
 * @name ui.router.util.type:UrlMatcher
 *
 * @description
 * Matches URLs against patterns and extracts named parameters from the path or the search
 * part of the URL. A URL pattern consists of a path pattern, optionally followed by '?' and a list
 * of search parameters. Multiple search parameter names are separated by '&'. Search parameters
 * do not influence whether or not a URL is matched, but their values are passed through into
 * the matched parameters returned by {@link ui.router.util.type:UrlMatcher#methods_exec exec}.
 *
 * Path parameter placeholders can be specified using simple colon/catch-all syntax or curly brace
 * syntax, which optionally allows a regular expression for the parameter to be specified:
 *
 * * `':'` name - colon placeholder
 * * `'*'` name - catch-all placeholder
 * * `'{' name '}'` - curly placeholder
 * * `'{' name ':' regexp|type '}'` - curly placeholder with regexp or type name. Should the
 *   regexp itself contain curly braces, they must be in matched pairs or escaped with a backslash.
 *
 * Parameter names may contain only word characters (latin letters, digits, and underscore) and
 * must be unique within the pattern (across both path and search parameters). For colon
 * placeholders or curly placeholders without an explicit regexp, a path parameter matches any
 * number of characters other than '/'. For catch-all placeholders the path parameter matches
 * any number of characters.
 *
 * Examples:
 *
 * * `'/hello/'` - Matches only if the path is exactly '/hello/'. There is no special treatment for
 *   trailing slashes, and patterns have to match the entire path, not just a prefix.
 * * `'/user/:id'` - Matches '/user/bob' or '/user/1234!!!' or even '/user/' but not '/user' or
 *   '/user/bob/details'. The second path segment will be captured as the parameter 'id'.
 * * `'/user/{id}'` - Same as the previous example, but using curly brace syntax.
 * * `'/user/{id:[^/]*}'` - Same as the previous example.
 * * `'/user/{id:[0-9a-fA-F]{1,8}}'` - Similar to the previous example, but only matches if the id
 *   parameter consists of 1 to 8 hex digits.
 * * `'/files/{path:.*}'` - Matches any URL starting with '/files/' and captures the rest of the
 *   path into the parameter 'path'.
 * * `'/files/*path'` - ditto.
 * * `'/calendar/{start:date}'` - Matches "/calendar/2014-11-12" (because the pattern defined
 *   in the built-in  `date` Type matches `2014-11-12`) and provides a Date object in $stateParams.start
 *
 * @param {string} pattern  The pattern to compile into a matcher.
 * @param {Object} config  A configuration object hash:
 * @param {Object=} parentMatcher Used to concatenate the pattern/config onto
 *   an existing UrlMatcher
 *
 * * `caseInsensitive` - `true` if URL matching should be case insensitive, otherwise `false`, the default value (for backward compatibility) is `false`.
 * * `strict` - `false` if matching against a URL with a trailing slash should be treated as equivalent to a URL without a trailing slash, the default value is `true`.
 *
 * @property {string} prefix  A static prefix of this pattern. The matcher guarantees that any
 *   URL matching this matcher (i.e. any string for which {@link ui.router.util.type:UrlMatcher#methods_exec exec()} returns
 *   non-null) will start with this prefix.
 *
 * @property {string} source  The pattern that was passed into the constructor
 *
 * @property {string} sourcePath  The path portion of the source property
 *
 * @property {string} sourceSearch  The search portion of the source property
 *
 * @property {string} regex  The constructed regex that will be used to match against the url when
 *   it is time to determine which url will match.
 *
 * @returns {Object}  New `UrlMatcher` object
 */
function UrlMatcher(pattern, config, parentMatcher) {
  config = extend({ params: {} }, isObject(config) ? config : {});

  // Find all placeholders and create a compiled pattern, using either classic or curly syntax:
  //   '*' name
  //   ':' name
  //   '{' name '}'
  //   '{' name ':' regexp '}'
  // The regular expression is somewhat complicated due to the need to allow curly braces
  // inside the regular expression. The placeholder regexp breaks down as follows:
  //    ([:*])([\w\[\]]+)              - classic placeholder ($1 / $2) (search version has - for snake-case)
  //    \{([\w\[\]]+)(?:\:\s*( ... ))?\}  - curly brace placeholder ($3) with optional regexp/type ... ($4) (search version has - for snake-case
  //    (?: ... | ... | ... )+         - the regexp consists of any number of atoms, an atom being either
  //    [^{}\\]+                       - anything other than curly braces or backslash
  //    \\.                            - a backslash escape
  //    \{(?:[^{}\\]+|\\.)*\}          - a matched set of curly braces containing other atoms
  var placeholder       = /([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
      searchPlaceholder = /([:]?)([\w\[\].-]+)|\{([\w\[\].-]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
      compiled = '^', last = 0, m,
      segments = this.segments = [],
      parentParams = parentMatcher ? parentMatcher.params : {},
      params = this.params = parentMatcher ? parentMatcher.params.$$new() : new $$UMFP.ParamSet(),
      paramNames = [];

  function addParameter(id, type, config, location) {
    paramNames.push(id);
    if (parentParams[id]) return parentParams[id];
    if (!/^\w+([-.]+\w+)*(?:\[\])?$/.test(id)) throw new Error("Invalid parameter name '" + id + "' in pattern '" + pattern + "'");
    if (params[id]) throw new Error("Duplicate parameter name '" + id + "' in pattern '" + pattern + "'");
    params[id] = new $$UMFP.Param(id, type, config, location);
    return params[id];
  }

  function quoteRegExp(string, pattern, squash, optional) {
    var surroundPattern = ['',''], result = string.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&");
    if (!pattern) return result;
    switch(squash) {
      case false: surroundPattern = ['(', ')' + (optional ? "?" : "")]; break;
      case true:
        result = result.replace(/\/$/, '');
        surroundPattern = ['(?:\/(', ')|\/)?'];
      break;
      default:    surroundPattern = ['(' + squash + "|", ')?']; break;
    }
    return result + surroundPattern[0] + pattern + surroundPattern[1];
  }

  this.source = pattern;

  // Split into static segments separated by path parameter placeholders.
  // The number of segments is always 1 more than the number of parameters.
  function matchDetails(m, isSearch) {
    var id, regexp, segment, type, cfg, arrayMode;
    id          = m[2] || m[3]; // IE[78] returns '' for unmatched groups instead of null
    cfg         = config.params[id];
    segment     = pattern.substring(last, m.index);
    regexp      = isSearch ? m[4] : m[4] || (m[1] == '*' ? '.*' : null);

    if (regexp) {
      type      = $$UMFP.type(regexp) || inherit($$UMFP.type("string"), { pattern: new RegExp(regexp, config.caseInsensitive ? 'i' : undefined) });
    }

    return {
      id: id, regexp: regexp, segment: segment, type: type, cfg: cfg
    };
  }

  var p, param, segment;
  while ((m = placeholder.exec(pattern))) {
    p = matchDetails(m, false);
    if (p.segment.indexOf('?') >= 0) break; // we're into the search part

    param = addParameter(p.id, p.type, p.cfg, "path");
    compiled += quoteRegExp(p.segment, param.type.pattern.source, param.squash, param.isOptional);
    segments.push(p.segment);
    last = placeholder.lastIndex;
  }
  segment = pattern.substring(last);

  // Find any search parameter names and remove them from the last segment
  var i = segment.indexOf('?');

  if (i >= 0) {
    var search = this.sourceSearch = segment.substring(i);
    segment = segment.substring(0, i);
    this.sourcePath = pattern.substring(0, last + i);

    if (search.length > 0) {
      last = 0;
      while ((m = searchPlaceholder.exec(search))) {
        p = matchDetails(m, true);
        param = addParameter(p.id, p.type, p.cfg, "search");
        last = placeholder.lastIndex;
        // check if ?&
      }
    }
  } else {
    this.sourcePath = pattern;
    this.sourceSearch = '';
  }

  compiled += quoteRegExp(segment) + (config.strict === false ? '\/?' : '') + '$';
  segments.push(segment);

  this.regexp = new RegExp(compiled, config.caseInsensitive ? 'i' : undefined);
  this.prefix = segments[0];
  this.$$paramNames = paramNames;
}

/**
 * @ngdoc function
 * @name ui.router.util.type:UrlMatcher#concat
 * @methodOf ui.router.util.type:UrlMatcher
 *
 * @description
 * Returns a new matcher for a pattern constructed by appending the path part and adding the
 * search parameters of the specified pattern to this pattern. The current pattern is not
 * modified. This can be understood as creating a pattern for URLs that are relative to (or
 * suffixes of) the current pattern.
 *
 * @example
 * The following two matchers are equivalent:
 * <pre>
 * new UrlMatcher('/user/{id}?q').concat('/details?date');
 * new UrlMatcher('/user/{id}/details?q&date');
 * </pre>
 *
 * @param {string} pattern  The pattern to append.
 * @param {Object} config  An object hash of the configuration for the matcher.
 * @returns {UrlMatcher}  A matcher for the concatenated pattern.
 */
UrlMatcher.prototype.concat = function (pattern, config) {
  // Because order of search parameters is irrelevant, we can add our own search
  // parameters to the end of the new pattern. Parse the new pattern by itself
  // and then join the bits together, but it's much easier to do this on a string level.
  var defaultConfig = {
    caseInsensitive: $$UMFP.caseInsensitive(),
    strict: $$UMFP.strictMode(),
    squash: $$UMFP.defaultSquashPolicy()
  };
  return new UrlMatcher(this.sourcePath + pattern + this.sourceSearch, extend(defaultConfig, config), this);
};

UrlMatcher.prototype.toString = function () {
  return this.source;
};

/**
 * @ngdoc function
 * @name ui.router.util.type:UrlMatcher#exec
 * @methodOf ui.router.util.type:UrlMatcher
 *
 * @description
 * Tests the specified path against this matcher, and returns an object containing the captured
 * parameter values, or null if the path does not match. The returned object contains the values
 * of any search parameters that are mentioned in the pattern, but their value may be null if
 * they are not present in `searchParams`. This means that search parameters are always treated
 * as optional.
 *
 * @example
 * <pre>
 * new UrlMatcher('/user/{id}?q&r').exec('/user/bob', {
 *   x: '1', q: 'hello'
 * });
 * // returns { id: 'bob', q: 'hello', r: null }
 * </pre>
 *
 * @param {string} path  The URL path to match, e.g. `$location.path()`.
 * @param {Object} searchParams  URL search parameters, e.g. `$location.search()`.
 * @returns {Object}  The captured parameter values.
 */
UrlMatcher.prototype.exec = function (path, searchParams) {
  var m = this.regexp.exec(path);
  if (!m) return null;
  searchParams = searchParams || {};

  var paramNames = this.parameters(), nTotal = paramNames.length,
    nPath = this.segments.length - 1,
    values = {}, i, j, cfg, paramName;

  if (nPath !== m.length - 1) throw new Error("Unbalanced capture group in route '" + this.source + "'");

  function decodePathArray(string) {
    function reverseString(str) { return str.split("").reverse().join(""); }
    function unquoteDashes(str) { return str.replace(/\\-/g, "-"); }

    var split = reverseString(string).split(/-(?!\\)/);
    var allReversed = map(split, reverseString);
    return map(allReversed, unquoteDashes).reverse();
  }

  var param, paramVal;
  for (i = 0; i < nPath; i++) {
    paramName = paramNames[i];
    param = this.params[paramName];
    paramVal = m[i+1];
    // if the param value matches a pre-replace pair, replace the value before decoding.
    for (j = 0; j < param.replace.length; j++) {
      if (param.replace[j].from === paramVal) paramVal = param.replace[j].to;
    }
    if (paramVal && param.array === true) paramVal = decodePathArray(paramVal);
    if (isDefined(paramVal)) paramVal = param.type.decode(paramVal);
    values[paramName] = param.value(paramVal);
  }
  for (/**/; i < nTotal; i++) {
    paramName = paramNames[i];
    values[paramName] = this.params[paramName].value(searchParams[paramName]);
    param = this.params[paramName];
    paramVal = searchParams[paramName];
    for (j = 0; j < param.replace.length; j++) {
      if (param.replace[j].from === paramVal) paramVal = param.replace[j].to;
    }
    if (isDefined(paramVal)) paramVal = param.type.decode(paramVal);
    values[paramName] = param.value(paramVal);
  }

  return values;
};

/**
 * @ngdoc function
 * @name ui.router.util.type:UrlMatcher#parameters
 * @methodOf ui.router.util.type:UrlMatcher
 *
 * @description
 * Returns the names of all path and search parameters of this pattern in an unspecified order.
 *
 * @returns {Array.<string>}  An array of parameter names. Must be treated as read-only. If the
 *    pattern has no parameters, an empty array is returned.
 */
UrlMatcher.prototype.parameters = function (param) {
  if (!isDefined(param)) return this.$$paramNames;
  return this.params[param] || null;
};

/**
 * @ngdoc function
 * @name ui.router.util.type:UrlMatcher#validates
 * @methodOf ui.router.util.type:UrlMatcher
 *
 * @description
 * Checks an object hash of parameters to validate their correctness according to the parameter
 * types of this `UrlMatcher`.
 *
 * @param {Object} params The object hash of parameters to validate.
 * @returns {boolean} Returns `true` if `params` validates, otherwise `false`.
 */
UrlMatcher.prototype.validates = function (params) {
  return this.params.$$validates(params);
};

/**
 * @ngdoc function
 * @name ui.router.util.type:UrlMatcher#format
 * @methodOf ui.router.util.type:UrlMatcher
 *
 * @description
 * Creates a URL that matches this pattern by substituting the specified values
 * for the path and search parameters. Null values for path parameters are
 * treated as empty strings.
 *
 * @example
 * <pre>
 * new UrlMatcher('/user/{id}?q').format({ id:'bob', q:'yes' });
 * // returns '/user/bob?q=yes'
 * </pre>
 *
 * @param {Object} values  the values to substitute for the parameters in this pattern.
 * @returns {string}  the formatted URL (path and optionally search part).
 */
UrlMatcher.prototype.format = function (values) {
  values = values || {};
  var segments = this.segments, params = this.parameters(), paramset = this.params;
  if (!this.validates(values)) return null;

  var i, search = false, nPath = segments.length - 1, nTotal = params.length, result = segments[0];

  function encodeDashes(str) { // Replace dashes with encoded "\-"
    return encodeURIComponent(str).replace(/-/g, function(c) { return '%5C%' + c.charCodeAt(0).toString(16).toUpperCase(); });
  }

  for (i = 0; i < nTotal; i++) {
    var isPathParam = i < nPath;
    var name = params[i], param = paramset[name], value = param.value(values[name]);
    var isDefaultValue = param.isOptional && param.type.equals(param.value(), value);
    var squash = isDefaultValue ? param.squash : false;
    var encoded = param.type.encode(value);

    if (isPathParam) {
      var nextSegment = segments[i + 1];
      var isFinalPathParam = i + 1 === nPath;

      if (squash === false) {
        if (encoded != null) {
          if (isArray(encoded)) {
            result += map(encoded, encodeDashes).join("-");
          } else {
            result += encodeURIComponent(encoded);
          }
        }
        result += nextSegment;
      } else if (squash === true) {
        var capture = result.match(/\/$/) ? /\/?(.*)/ : /(.*)/;
        result += nextSegment.match(capture)[1];
      } else if (isString(squash)) {
        result += squash + nextSegment;
      }

      if (isFinalPathParam && param.squash === true && result.slice(-1) === '/') result = result.slice(0, -1);
    } else {
      if (encoded == null || (isDefaultValue && squash !== false)) continue;
      if (!isArray(encoded)) encoded = [ encoded ];
      if (encoded.length === 0) continue;
      encoded = map(encoded, encodeURIComponent).join('&' + name + '=');
      result += (search ? '&' : '?') + (name + '=' + encoded);
      search = true;
    }
  }

  return result;
};

/**
 * @ngdoc object
 * @name ui.router.util.type:Type
 *
 * @description
 * Implements an interface to define custom parameter types that can be decoded from and encoded to
 * string parameters matched in a URL. Used by {@link ui.router.util.type:UrlMatcher `UrlMatcher`}
 * objects when matching or formatting URLs, or comparing or validating parameter values.
 *
 * See {@link ui.router.util.$urlMatcherFactory#methods_type `$urlMatcherFactory#type()`} for more
 * information on registering custom types.
 *
 * @param {Object} config  A configuration object which contains the custom type definition.  The object's
 *        properties will override the default methods and/or pattern in `Type`'s public interface.
 * @example
 * <pre>
 * {
 *   decode: function(val) { return parseInt(val, 10); },
 *   encode: function(val) { return val && val.toString(); },
 *   equals: function(a, b) { return this.is(a) && a === b; },
 *   is: function(val) { return angular.isNumber(val) isFinite(val) && val % 1 === 0; },
 *   pattern: /\d+/
 * }
 * </pre>
 *
 * @property {RegExp} pattern The regular expression pattern used to match values of this type when
 *           coming from a substring of a URL.
 *
 * @returns {Object}  Returns a new `Type` object.
 */
function Type(config) {
  extend(this, config);
}

/**
 * @ngdoc function
 * @name ui.router.util.type:Type#is
 * @methodOf ui.router.util.type:Type
 *
 * @description
 * Detects whether a value is of a particular type. Accepts a native (decoded) value
 * and determines whether it matches the current `Type` object.
 *
 * @param {*} val  The value to check.
 * @param {string} key  Optional. If the type check is happening in the context of a specific
 *        {@link ui.router.util.type:UrlMatcher `UrlMatcher`} object, this is the name of the
 *        parameter in which `val` is stored. Can be used for meta-programming of `Type` objects.
 * @returns {Boolean}  Returns `true` if the value matches the type, otherwise `false`.
 */
Type.prototype.is = function(val, key) {
  return true;
};

/**
 * @ngdoc function
 * @name ui.router.util.type:Type#encode
 * @methodOf ui.router.util.type:Type
 *
 * @description
 * Encodes a custom/native type value to a string that can be embedded in a URL. Note that the
 * return value does *not* need to be URL-safe (i.e. passed through `encodeURIComponent()`), it
 * only needs to be a representation of `val` that has been coerced to a string.
 *
 * @param {*} val  The value to encode.
 * @param {string} key  The name of the parameter in which `val` is stored. Can be used for
 *        meta-programming of `Type` objects.
 * @returns {string}  Returns a string representation of `val` that can be encoded in a URL.
 */
Type.prototype.encode = function(val, key) {
  return val;
};

/**
 * @ngdoc function
 * @name ui.router.util.type:Type#decode
 * @methodOf ui.router.util.type:Type
 *
 * @description
 * Converts a parameter value (from URL string or transition param) to a custom/native value.
 *
 * @param {string} val  The URL parameter value to decode.
 * @param {string} key  The name of the parameter in which `val` is stored. Can be used for
 *        meta-programming of `Type` objects.
 * @returns {*}  Returns a custom representation of the URL parameter value.
 */
Type.prototype.decode = function(val, key) {
  return val;
};

/**
 * @ngdoc function
 * @name ui.router.util.type:Type#equals
 * @methodOf ui.router.util.type:Type
 *
 * @description
 * Determines whether two decoded values are equivalent.
 *
 * @param {*} a  A value to compare against.
 * @param {*} b  A value to compare against.
 * @returns {Boolean}  Returns `true` if the values are equivalent/equal, otherwise `false`.
 */
Type.prototype.equals = function(a, b) {
  return a == b;
};

Type.prototype.$subPattern = function() {
  var sub = this.pattern.toString();
  return sub.substr(1, sub.length - 2);
};

Type.prototype.pattern = /.*/;

Type.prototype.toString = function() { return "{Type:" + this.name + "}"; };

/** Given an encoded string, or a decoded object, returns a decoded object */
Type.prototype.$normalize = function(val) {
  return this.is(val) ? val : this.decode(val);
};

/*
 * Wraps an existing custom Type as an array of Type, depending on 'mode'.
 * e.g.:
 * - urlmatcher pattern "/path?{queryParam[]:int}"
 * - url: "/path?queryParam=1&queryParam=2
 * - $stateParams.queryParam will be [1, 2]
 * if `mode` is "auto", then
 * - url: "/path?queryParam=1 will create $stateParams.queryParam: 1
 * - url: "/path?queryParam=1&queryParam=2 will create $stateParams.queryParam: [1, 2]
 */
Type.prototype.$asArray = function(mode, isSearch) {
  if (!mode) return this;
  if (mode === "auto" && !isSearch) throw new Error("'auto' array mode is for query parameters only");

  function ArrayType(type, mode) {
    function bindTo(type, callbackName) {
      return function() {
        return type[callbackName].apply(type, arguments);
      };
    }

    // Wrap non-array value as array
    function arrayWrap(val) { return isArray(val) ? val : (isDefined(val) ? [ val ] : []); }
    // Unwrap array value for "auto" mode. Return undefined for empty array.
    function arrayUnwrap(val) {
      switch(val.length) {
        case 0: return undefined;
        case 1: return mode === "auto" ? val[0] : val;
        default: return val;
      }
    }
    function falsey(val) { return !val; }

    // Wraps type (.is/.encode/.decode) functions to operate on each value of an array
    function arrayHandler(callback, allTruthyMode) {
      return function handleArray(val) {
        if (isArray(val) && val.length === 0) return val;
        val = arrayWrap(val);
        var result = map(val, callback);
        if (allTruthyMode === true)
          return filter(result, falsey).length === 0;
        return arrayUnwrap(result);
      };
    }

    // Wraps type (.equals) functions to operate on each value of an array
    function arrayEqualsHandler(callback) {
      return function handleArray(val1, val2) {
        var left = arrayWrap(val1), right = arrayWrap(val2);
        if (left.length !== right.length) return false;
        for (var i = 0; i < left.length; i++) {
          if (!callback(left[i], right[i])) return false;
        }
        return true;
      };
    }

    this.encode = arrayHandler(bindTo(type, 'encode'));
    this.decode = arrayHandler(bindTo(type, 'decode'));
    this.is     = arrayHandler(bindTo(type, 'is'), true);
    this.equals = arrayEqualsHandler(bindTo(type, 'equals'));
    this.pattern = type.pattern;
    this.$normalize = arrayHandler(bindTo(type, '$normalize'));
    this.name = type.name;
    this.$arrayMode = mode;
  }

  return new ArrayType(this, mode);
};



/**
 * @ngdoc object
 * @name ui.router.util.$urlMatcherFactory
 *
 * @description
 * Factory for {@link ui.router.util.type:UrlMatcher `UrlMatcher`} instances. The factory
 * is also available to providers under the name `$urlMatcherFactoryProvider`.
 */
function $UrlMatcherFactory() {
  $$UMFP = this;

  var isCaseInsensitive = false, isStrictMode = true, defaultSquashPolicy = false;

  // Use tildes to pre-encode slashes.
  // If the slashes are simply URLEncoded, the browser can choose to pre-decode them,
  // and bidirectional encoding/decoding fails.
  // Tilde was chosen because it's not a RFC 3986 section 2.2 Reserved Character
  function valToString(val) { return val != null ? val.toString().replace(/~/g, "~~").replace(/\//g, "~2F") : val; }
  function valFromString(val) { return val != null ? val.toString().replace(/~2F/g, "/").replace(/~~/g, "~") : val; }

  var $types = {}, enqueue = true, typeQueue = [], injector, defaultTypes = {
    "string": {
      encode: valToString,
      decode: valFromString,
      // TODO: in 1.0, make string .is() return false if value is undefined/null by default.
      // In 0.2.x, string params are optional by default for backwards compat
      is: function(val) { return val == null || !isDefined(val) || typeof val === "string"; },
      pattern: /[^/]*/
    },
    "int": {
      encode: valToString,
      decode: function(val) { return parseInt(val, 10); },
      is: function(val) { return isDefined(val) && this.decode(val.toString()) === val; },
      pattern: /\d+/
    },
    "bool": {
      encode: function(val) { return val ? 1 : 0; },
      decode: function(val) { return parseInt(val, 10) !== 0; },
      is: function(val) { return val === true || val === false; },
      pattern: /0|1/
    },
    "date": {
      encode: function (val) {
        if (!this.is(val))
          return undefined;
        return [ val.getFullYear(),
          ('0' + (val.getMonth() + 1)).slice(-2),
          ('0' + val.getDate()).slice(-2)
        ].join("-");
      },
      decode: function (val) {
        if (this.is(val)) return val;
        var match = this.capture.exec(val);
        return match ? new Date(match[1], match[2] - 1, match[3]) : undefined;
      },
      is: function(val) { return val instanceof Date && !isNaN(val.valueOf()); },
      equals: function (a, b) { return this.is(a) && this.is(b) && a.toISOString() === b.toISOString(); },
      pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,
      capture: /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/
    },
    "json": {
      encode: angular.toJson,
      decode: angular.fromJson,
      is: angular.isObject,
      equals: angular.equals,
      pattern: /[^/]*/
    },
    "any": { // does not encode/decode
      encode: angular.identity,
      decode: angular.identity,
      equals: angular.equals,
      pattern: /.*/
    }
  };

  function getDefaultConfig() {
    return {
      strict: isStrictMode,
      caseInsensitive: isCaseInsensitive
    };
  }

  function isInjectable(value) {
    return (isFunction(value) || (isArray(value) && isFunction(value[value.length - 1])));
  }

  /**
   * [Internal] Get the default value of a parameter, which may be an injectable function.
   */
  $UrlMatcherFactory.$$getDefaultValue = function(config) {
    if (!isInjectable(config.value)) return config.value;
    if (!injector) throw new Error("Injectable functions cannot be called at configuration time");
    return injector.invoke(config.value);
  };

  /**
   * @ngdoc function
   * @name ui.router.util.$urlMatcherFactory#caseInsensitive
   * @methodOf ui.router.util.$urlMatcherFactory
   *
   * @description
   * Defines whether URL matching should be case sensitive (the default behavior), or not.
   *
   * @param {boolean} value `false` to match URL in a case sensitive manner; otherwise `true`;
   * @returns {boolean} the current value of caseInsensitive
   */
  this.caseInsensitive = function(value) {
    if (isDefined(value))
      isCaseInsensitive = value;
    return isCaseInsensitive;
  };

  /**
   * @ngdoc function
   * @name ui.router.util.$urlMatcherFactory#strictMode
   * @methodOf ui.router.util.$urlMatcherFactory
   *
   * @description
   * Defines whether URLs should match trailing slashes, or not (the default behavior).
   *
   * @param {boolean=} value `false` to match trailing slashes in URLs, otherwise `true`.
   * @returns {boolean} the current value of strictMode
   */
  this.strictMode = function(value) {
    if (isDefined(value))
      isStrictMode = value;
    return isStrictMode;
  };

  /**
   * @ngdoc function
   * @name ui.router.util.$urlMatcherFactory#defaultSquashPolicy
   * @methodOf ui.router.util.$urlMatcherFactory
   *
   * @description
   * Sets the default behavior when generating or matching URLs with default parameter values.
   *
   * @param {string} value A string that defines the default parameter URL squashing behavior.
   *    `nosquash`: When generating an href with a default parameter value, do not squash the parameter value from the URL
   *    `slash`: When generating an href with a default parameter value, squash (remove) the parameter value, and, if the
   *             parameter is surrounded by slashes, squash (remove) one slash from the URL
   *    any other string, e.g. "~": When generating an href with a default parameter value, squash (remove)
   *             the parameter value from the URL and replace it with this string.
   */
  this.defaultSquashPolicy = function(value) {
    if (!isDefined(value)) return defaultSquashPolicy;
    if (value !== true && value !== false && !isString(value))
      throw new Error("Invalid squash policy: " + value + ". Valid policies: false, true, arbitrary-string");
    defaultSquashPolicy = value;
    return value;
  };

  /**
   * @ngdoc function
   * @name ui.router.util.$urlMatcherFactory#compile
   * @methodOf ui.router.util.$urlMatcherFactory
   *
   * @description
   * Creates a {@link ui.router.util.type:UrlMatcher `UrlMatcher`} for the specified pattern.
   *
   * @param {string} pattern  The URL pattern.
   * @param {Object} config  The config object hash.
   * @returns {UrlMatcher}  The UrlMatcher.
   */
  this.compile = function (pattern, config) {
    return new UrlMatcher(pattern, extend(getDefaultConfig(), config));
  };

  /**
   * @ngdoc function
   * @name ui.router.util.$urlMatcherFactory#isMatcher
   * @methodOf ui.router.util.$urlMatcherFactory
   *
   * @description
   * Returns true if the specified object is a `UrlMatcher`, or false otherwise.
   *
   * @param {Object} object  The object to perform the type check against.
   * @returns {Boolean}  Returns `true` if the object matches the `UrlMatcher` interface, by
   *          implementing all the same methods.
   */
  this.isMatcher = function (o) {
    if (!isObject(o)) return false;
    var result = true;

    forEach(UrlMatcher.prototype, function(val, name) {
      if (isFunction(val)) {
        result = result && (isDefined(o[name]) && isFunction(o[name]));
      }
    });
    return result;
  };

  /**
   * @ngdoc function
   * @name ui.router.util.$urlMatcherFactory#type
   * @methodOf ui.router.util.$urlMatcherFactory
   *
   * @description
   * Registers a custom {@link ui.router.util.type:Type `Type`} object that can be used to
   * generate URLs with typed parameters.
   *
   * @param {string} name  The type name.
   * @param {Object|Function} definition   The type definition. See
   *        {@link ui.router.util.type:Type `Type`} for information on the values accepted.
   * @param {Object|Function} definitionFn (optional) A function that is injected before the app
   *        runtime starts.  The result of this function is merged into the existing `definition`.
   *        See {@link ui.router.util.type:Type `Type`} for information on the values accepted.
   *
   * @returns {Object}  Returns `$urlMatcherFactoryProvider`.
   *
   * @example
   * This is a simple example of a custom type that encodes and decodes items from an
   * array, using the array index as the URL-encoded value:
   *
   * <pre>
   * var list = ['John', 'Paul', 'George', 'Ringo'];
   *
   * $urlMatcherFactoryProvider.type('listItem', {
   *   encode: function(item) {
   *     // Represent the list item in the URL using its corresponding index
   *     return list.indexOf(item);
   *   },
   *   decode: function(item) {
   *     // Look up the list item by index
   *     return list[parseInt(item, 10)];
   *   },
   *   is: function(item) {
   *     // Ensure the item is valid by checking to see that it appears
   *     // in the list
   *     return list.indexOf(item) > -1;
   *   }
   * });
   *
   * $stateProvider.state('list', {
   *   url: "/list/{item:listItem}",
   *   controller: function($scope, $stateParams) {
   *     console.log($stateParams.item);
   *   }
   * });
   *
   * // ...
   *
   * // Changes URL to '/list/3', logs "Ringo" to the console
   * $state.go('list', { item: "Ringo" });
   * </pre>
   *
   * This is a more complex example of a type that relies on dependency injection to
   * interact with services, and uses the parameter name from the URL to infer how to
   * handle encoding and decoding parameter values:
   *
   * <pre>
   * // Defines a custom type that gets a value from a service,
   * // where each service gets different types of values from
   * // a backend API:
   * $urlMatcherFactoryProvider.type('dbObject', {}, function(Users, Posts) {
   *
   *   // Matches up services to URL parameter names
   *   var services = {
   *     user: Users,
   *     post: Posts
   *   };
   *
   *   return {
   *     encode: function(object) {
   *       // Represent the object in the URL using its unique ID
   *       return object.id;
   *     },
   *     decode: function(value, key) {
   *       // Look up the object by ID, using the parameter
   *       // name (key) to call the correct service
   *       return services[key].findById(value);
   *     },
   *     is: function(object, key) {
   *       // Check that object is a valid dbObject
   *       return angular.isObject(object) && object.id && services[key];
   *     }
   *     equals: function(a, b) {
   *       // Check the equality of decoded objects by comparing
   *       // their unique IDs
   *       return a.id === b.id;
   *     }
   *   };
   * });
   *
   * // In a config() block, you can then attach URLs with
   * // type-annotated parameters:
   * $stateProvider.state('users', {
   *   url: "/users",
   *   // ...
   * }).state('users.item', {
   *   url: "/{user:dbObject}",
   *   controller: function($scope, $stateParams) {
   *     // $stateParams.user will now be an object returned from
   *     // the Users service
   *   },
   *   // ...
   * });
   * </pre>
   */
  this.type = function (name, definition, definitionFn) {
    if (!isDefined(definition)) return $types[name];
    if ($types.hasOwnProperty(name)) throw new Error("A type named '" + name + "' has already been defined.");

    $types[name] = new Type(extend({ name: name }, definition));
    if (definitionFn) {
      typeQueue.push({ name: name, def: definitionFn });
      if (!enqueue) flushTypeQueue();
    }
    return this;
  };

  // `flushTypeQueue()` waits until `$urlMatcherFactory` is injected before invoking the queued `definitionFn`s
  function flushTypeQueue() {
    while(typeQueue.length) {
      var type = typeQueue.shift();
      if (type.pattern) throw new Error("You cannot override a type's .pattern at runtime.");
      angular.extend($types[type.name], injector.invoke(type.def));
    }
  }

  // Register default types. Store them in the prototype of $types.
  forEach(defaultTypes, function(type, name) { $types[name] = new Type(extend({name: name}, type)); });
  $types = inherit($types, {});

  /* No need to document $get, since it returns this */
  this.$get = ['$injector', function ($injector) {
    injector = $injector;
    enqueue = false;
    flushTypeQueue();

    forEach(defaultTypes, function(type, name) {
      if (!$types[name]) $types[name] = new Type(type);
    });
    return this;
  }];

  this.Param = function Param(id, type, config, location) {
    var self = this;
    config = unwrapShorthand(config);
    type = getType(config, type, location);
    var arrayMode = getArrayMode();
    type = arrayMode ? type.$asArray(arrayMode, location === "search") : type;
    if (type.name === "string" && !arrayMode && location === "path" && config.value === undefined)
      config.value = ""; // for 0.2.x; in 0.3.0+ do not automatically default to ""
    var isOptional = config.value !== undefined;
    var squash = getSquashPolicy(config, isOptional);
    var replace = getReplace(config, arrayMode, isOptional, squash);

    function unwrapShorthand(config) {
      var keys = isObject(config) ? objectKeys(config) : [];
      var isShorthand = indexOf(keys, "value") === -1 && indexOf(keys, "type") === -1 &&
                        indexOf(keys, "squash") === -1 && indexOf(keys, "array") === -1;
      if (isShorthand) config = { value: config };
      config.$$fn = isInjectable(config.value) ? config.value : function () { return config.value; };
      return config;
    }

    function getType(config, urlType, location) {
      if (config.type && urlType) throw new Error("Param '"+id+"' has two type configurations.");
      if (urlType) return urlType;
      if (!config.type) return (location === "config" ? $types.any : $types.string);

      if (angular.isString(config.type))
        return $types[config.type];
      if (config.type instanceof Type)
        return config.type;
      return new Type(config.type);
    }

    // array config: param name (param[]) overrides default settings.  explicit config overrides param name.
    function getArrayMode() {
      var arrayDefaults = { array: (location === "search" ? "auto" : false) };
      var arrayParamNomenclature = id.match(/\[\]$/) ? { array: true } : {};
      return extend(arrayDefaults, arrayParamNomenclature, config).array;
    }

    /**
     * returns false, true, or the squash value to indicate the "default parameter url squash policy".
     */
    function getSquashPolicy(config, isOptional) {
      var squash = config.squash;
      if (!isOptional || squash === false) return false;
      if (!isDefined(squash) || squash == null) return defaultSquashPolicy;
      if (squash === true || isString(squash)) return squash;
      throw new Error("Invalid squash policy: '" + squash + "'. Valid policies: false, true, or arbitrary string");
    }

    function getReplace(config, arrayMode, isOptional, squash) {
      var replace, configuredKeys, defaultPolicy = [
        { from: "",   to: (isOptional || arrayMode ? undefined : "") },
        { from: null, to: (isOptional || arrayMode ? undefined : "") }
      ];
      replace = isArray(config.replace) ? config.replace : [];
      if (isString(squash))
        replace.push({ from: squash, to: undefined });
      configuredKeys = map(replace, function(item) { return item.from; } );
      return filter(defaultPolicy, function(item) { return indexOf(configuredKeys, item.from) === -1; }).concat(replace);
    }

    /**
     * [Internal] Get the default value of a parameter, which may be an injectable function.
     */
    function $$getDefaultValue() {
      if (!injector) throw new Error("Injectable functions cannot be called at configuration time");
      var defaultValue = injector.invoke(config.$$fn);
      if (defaultValue !== null && defaultValue !== undefined && !self.type.is(defaultValue))
        throw new Error("Default value (" + defaultValue + ") for parameter '" + self.id + "' is not an instance of Type (" + self.type.name + ")");
      return defaultValue;
    }

    /**
     * [Internal] Gets the decoded representation of a value if the value is defined, otherwise, returns the
     * default value, which may be the result of an injectable function.
     */
    function $value(value) {
      function hasReplaceVal(val) { return function(obj) { return obj.from === val; }; }
      function $replace(value) {
        var replacement = map(filter(self.replace, hasReplaceVal(value)), function(obj) { return obj.to; });
        return replacement.length ? replacement[0] : value;
      }
      value = $replace(value);
      return !isDefined(value) ? $$getDefaultValue() : self.type.$normalize(value);
    }

    function toString() { return "{Param:" + id + " " + type + " squash: '" + squash + "' optional: " + isOptional + "}"; }

    extend(this, {
      id: id,
      type: type,
      location: location,
      array: arrayMode,
      squash: squash,
      replace: replace,
      isOptional: isOptional,
      value: $value,
      dynamic: undefined,
      config: config,
      toString: toString
    });
  };

  function ParamSet(params) {
    extend(this, params || {});
  }

  ParamSet.prototype = {
    $$new: function() {
      return inherit(this, extend(new ParamSet(), { $$parent: this}));
    },
    $$keys: function () {
      var keys = [], chain = [], parent = this,
        ignore = objectKeys(ParamSet.prototype);
      while (parent) { chain.push(parent); parent = parent.$$parent; }
      chain.reverse();
      forEach(chain, function(paramset) {
        forEach(objectKeys(paramset), function(key) {
            if (indexOf(keys, key) === -1 && indexOf(ignore, key) === -1) keys.push(key);
        });
      });
      return keys;
    },
    $$values: function(paramValues) {
      var values = {}, self = this;
      forEach(self.$$keys(), function(key) {
        values[key] = self[key].value(paramValues && paramValues[key]);
      });
      return values;
    },
    $$equals: function(paramValues1, paramValues2) {
      var equal = true, self = this;
      forEach(self.$$keys(), function(key) {
        var left = paramValues1 && paramValues1[key], right = paramValues2 && paramValues2[key];
        if (!self[key].type.equals(left, right)) equal = false;
      });
      return equal;
    },
    $$validates: function $$validate(paramValues) {
      var keys = this.$$keys(), i, param, rawVal, normalized, encoded;
      for (i = 0; i < keys.length; i++) {
        param = this[keys[i]];
        rawVal = paramValues[keys[i]];
        if ((rawVal === undefined || rawVal === null) && param.isOptional)
          break; // There was no parameter value, but the param is optional
        normalized = param.type.$normalize(rawVal);
        if (!param.type.is(normalized))
          return false; // The value was not of the correct Type, and could not be decoded to the correct Type
        encoded = param.type.encode(normalized);
        if (angular.isString(encoded) && !param.type.pattern.exec(encoded))
          return false; // The value was of the correct type, but when encoded, did not match the Type's regexp
      }
      return true;
    },
    $$parent: undefined
  };

  this.ParamSet = ParamSet;
}

// Register as a provider so it's available to other providers
angular.module('ui.router.util').provider('$urlMatcherFactory', $UrlMatcherFactory);
angular.module('ui.router.util').run(['$urlMatcherFactory', function($urlMatcherFactory) { }]);

/**
 * @ngdoc object
 * @name ui.router.router.$urlRouterProvider
 *
 * @requires ui.router.util.$urlMatcherFactoryProvider
 * @requires $locationProvider
 *
 * @description
 * `$urlRouterProvider` has the responsibility of watching `$location`. 
 * When `$location` changes it runs through a list of rules one by one until a 
 * match is found. `$urlRouterProvider` is used behind the scenes anytime you specify 
 * a url in a state configuration. All urls are compiled into a UrlMatcher object.
 *
 * There are several methods on `$urlRouterProvider` that make it useful to use directly
 * in your module config.
 */
$UrlRouterProvider.$inject = ['$locationProvider', '$urlMatcherFactoryProvider'];
function $UrlRouterProvider(   $locationProvider,   $urlMatcherFactory) {
  var rules = [], otherwise = null, interceptDeferred = false, listener;

  // Returns a string that is a prefix of all strings matching the RegExp
  function regExpPrefix(re) {
    var prefix = /^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(re.source);
    return (prefix != null) ? prefix[1].replace(/\\(.)/g, "$1") : '';
  }

  // Interpolates matched values into a String.replace()-style pattern
  function interpolate(pattern, match) {
    return pattern.replace(/\$(\$|\d{1,2})/, function (m, what) {
      return match[what === '$' ? 0 : Number(what)];
    });
  }

  /**
   * @ngdoc function
   * @name ui.router.router.$urlRouterProvider#rule
   * @methodOf ui.router.router.$urlRouterProvider
   *
   * @description
   * Defines rules that are used by `$urlRouterProvider` to find matches for
   * specific URLs.
   *
   * @example
   * <pre>
   * var app = angular.module('app', ['ui.router.router']);
   *
   * app.config(function ($urlRouterProvider) {
   *   // Here's an example of how you might allow case insensitive urls
   *   $urlRouterProvider.rule(function ($injector, $location) {
   *     var path = $location.path(),
   *         normalized = path.toLowerCase();
   *
   *     if (path !== normalized) {
   *       return normalized;
   *     }
   *   });
   * });
   * </pre>
   *
   * @param {function} rule Handler function that takes `$injector` and `$location`
   * services as arguments. You can use them to return a valid path as a string.
   *
   * @return {object} `$urlRouterProvider` - `$urlRouterProvider` instance
   */
  this.rule = function (rule) {
    if (!isFunction(rule)) throw new Error("'rule' must be a function");
    rules.push(rule);
    return this;
  };

  /**
   * @ngdoc object
   * @name ui.router.router.$urlRouterProvider#otherwise
   * @methodOf ui.router.router.$urlRouterProvider
   *
   * @description
   * Defines a path that is used when an invalid route is requested.
   *
   * @example
   * <pre>
   * var app = angular.module('app', ['ui.router.router']);
   *
   * app.config(function ($urlRouterProvider) {
   *   // if the path doesn't match any of the urls you configured
   *   // otherwise will take care of routing the user to the
   *   // specified url
   *   $urlRouterProvider.otherwise('/index');
   *
   *   // Example of using function rule as param
   *   $urlRouterProvider.otherwise(function ($injector, $location) {
   *     return '/a/valid/url';
   *   });
   * });
   * </pre>
   *
   * @param {string|function} rule The url path you want to redirect to or a function 
   * rule that returns the url path. The function version is passed two params: 
   * `$injector` and `$location` services, and must return a url string.
   *
   * @return {object} `$urlRouterProvider` - `$urlRouterProvider` instance
   */
  this.otherwise = function (rule) {
    if (isString(rule)) {
      var redirect = rule;
      rule = function () { return redirect; };
    }
    else if (!isFunction(rule)) throw new Error("'rule' must be a function");
    otherwise = rule;
    return this;
  };


  function handleIfMatch($injector, handler, match) {
    if (!match) return false;
    var result = $injector.invoke(handler, handler, { $match: match });
    return isDefined(result) ? result : true;
  }

  /**
   * @ngdoc function
   * @name ui.router.router.$urlRouterProvider#when
   * @methodOf ui.router.router.$urlRouterProvider
   *
   * @description
   * Registers a handler for a given url matching. 
   * 
   * If the handler is a string, it is
   * treated as a redirect, and is interpolated according to the syntax of match
   * (i.e. like `String.replace()` for `RegExp`, or like a `UrlMatcher` pattern otherwise).
   *
   * If the handler is a function, it is injectable. It gets invoked if `$location`
   * matches. You have the option of inject the match object as `$match`.
   *
   * The handler can return
   *
   * - **falsy** to indicate that the rule didn't match after all, then `$urlRouter`
   *   will continue trying to find another one that matches.
   * - **string** which is treated as a redirect and passed to `$location.url()`
   * - **void** or any **truthy** value tells `$urlRouter` that the url was handled.
   *
   * @example
   * <pre>
   * var app = angular.module('app', ['ui.router.router']);
   *
   * app.config(function ($urlRouterProvider) {
   *   $urlRouterProvider.when($state.url, function ($match, $stateParams) {
   *     if ($state.$current.navigable !== state ||
   *         !equalForKeys($match, $stateParams) {
   *      $state.transitionTo(state, $match, false);
   *     }
   *   });
   * });
   * </pre>
   *
   * @param {string|object} what The incoming path that you want to redirect.
   * @param {string|function} handler The path you want to redirect your user to.
   */
  this.when = function (what, handler) {
    var redirect, handlerIsString = isString(handler);
    if (isString(what)) what = $urlMatcherFactory.compile(what);

    if (!handlerIsString && !isFunction(handler) && !isArray(handler))
      throw new Error("invalid 'handler' in when()");

    var strategies = {
      matcher: function (what, handler) {
        if (handlerIsString) {
          redirect = $urlMatcherFactory.compile(handler);
          handler = ['$match', function ($match) { return redirect.format($match); }];
        }
        return extend(function ($injector, $location) {
          return handleIfMatch($injector, handler, what.exec($location.path(), $location.search()));
        }, {
          prefix: isString(what.prefix) ? what.prefix : ''
        });
      },
      regex: function (what, handler) {
        if (what.global || what.sticky) throw new Error("when() RegExp must not be global or sticky");

        if (handlerIsString) {
          redirect = handler;
          handler = ['$match', function ($match) { return interpolate(redirect, $match); }];
        }
        return extend(function ($injector, $location) {
          return handleIfMatch($injector, handler, what.exec($location.path()));
        }, {
          prefix: regExpPrefix(what)
        });
      }
    };

    var check = { matcher: $urlMatcherFactory.isMatcher(what), regex: what instanceof RegExp };

    for (var n in check) {
      if (check[n]) return this.rule(strategies[n](what, handler));
    }

    throw new Error("invalid 'what' in when()");
  };

  /**
   * @ngdoc function
   * @name ui.router.router.$urlRouterProvider#deferIntercept
   * @methodOf ui.router.router.$urlRouterProvider
   *
   * @description
   * Disables (or enables) deferring location change interception.
   *
   * If you wish to customize the behavior of syncing the URL (for example, if you wish to
   * defer a transition but maintain the current URL), call this method at configuration time.
   * Then, at run time, call `$urlRouter.listen()` after you have configured your own
   * `$locationChangeSuccess` event handler.
   *
   * @example
   * <pre>
   * var app = angular.module('app', ['ui.router.router']);
   *
   * app.config(function ($urlRouterProvider) {
   *
   *   // Prevent $urlRouter from automatically intercepting URL changes;
   *   // this allows you to configure custom behavior in between
   *   // location changes and route synchronization:
   *   $urlRouterProvider.deferIntercept();
   *
   * }).run(function ($rootScope, $urlRouter, UserService) {
   *
   *   $rootScope.$on('$locationChangeSuccess', function(e) {
   *     // UserService is an example service for managing user state
   *     if (UserService.isLoggedIn()) return;
   *
   *     // Prevent $urlRouter's default handler from firing
   *     e.preventDefault();
   *
   *     UserService.handleLogin().then(function() {
   *       // Once the user has logged in, sync the current URL
   *       // to the router:
   *       $urlRouter.sync();
   *     });
   *   });
   *
   *   // Configures $urlRouter's listener *after* your custom listener
   *   $urlRouter.listen();
   * });
   * </pre>
   *
   * @param {boolean} defer Indicates whether to defer location change interception. Passing
            no parameter is equivalent to `true`.
   */
  this.deferIntercept = function (defer) {
    if (defer === undefined) defer = true;
    interceptDeferred = defer;
  };

  /**
   * @ngdoc object
   * @name ui.router.router.$urlRouter
   *
   * @requires $location
   * @requires $rootScope
   * @requires $injector
   * @requires $browser
   *
   * @description
   *
   */
  this.$get = $get;
  $get.$inject = ['$location', '$rootScope', '$injector', '$browser', '$sniffer'];
  function $get(   $location,   $rootScope,   $injector,   $browser,   $sniffer) {

    var baseHref = $browser.baseHref(), location = $location.url(), lastPushedUrl;

    function appendBasePath(url, isHtml5, absolute) {
      if (baseHref === '/') return url;
      if (isHtml5) return baseHref.slice(0, -1) + url;
      if (absolute) return baseHref.slice(1) + url;
      return url;
    }

    // TODO: Optimize groups of rules with non-empty prefix into some sort of decision tree
    function update(evt) {
      if (evt && evt.defaultPrevented) return;
      var ignoreUpdate = lastPushedUrl && $location.url() === lastPushedUrl;
      lastPushedUrl = undefined;
      // TODO: Re-implement this in 1.0 for https://github.com/angular-ui/ui-router/issues/1573
      //if (ignoreUpdate) return true;

      function check(rule) {
        var handled = rule($injector, $location);

        if (!handled) return false;
        if (isString(handled)) $location.replace().url(handled);
        return true;
      }
      var n = rules.length, i;

      for (i = 0; i < n; i++) {
        if (check(rules[i])) return;
      }
      // always check otherwise last to allow dynamic updates to the set of rules
      if (otherwise) check(otherwise);
    }

    function listen() {
      listener = listener || $rootScope.$on('$locationChangeSuccess', update);
      return listener;
    }

    if (!interceptDeferred) listen();

    return {
      /**
       * @ngdoc function
       * @name ui.router.router.$urlRouter#sync
       * @methodOf ui.router.router.$urlRouter
       *
       * @description
       * Triggers an update; the same update that happens when the address bar url changes, aka `$locationChangeSuccess`.
       * This method is useful when you need to use `preventDefault()` on the `$locationChangeSuccess` event,
       * perform some custom logic (route protection, auth, config, redirection, etc) and then finally proceed
       * with the transition by calling `$urlRouter.sync()`.
       *
       * @example
       * <pre>
       * angular.module('app', ['ui.router'])
       *   .run(function($rootScope, $urlRouter) {
       *     $rootScope.$on('$locationChangeSuccess', function(evt) {
       *       // Halt state change from even starting
       *       evt.preventDefault();
       *       // Perform custom logic
       *       var meetsRequirement = ...
       *       // Continue with the update and state transition if logic allows
       *       if (meetsRequirement) $urlRouter.sync();
       *     });
       * });
       * </pre>
       */
      sync: function() {
        update();
      },

      listen: function() {
        return listen();
      },

      update: function(read) {
        if (read) {
          location = $location.url();
          return;
        }
        if ($location.url() === location) return;

        $location.url(location);
        $location.replace();
      },

      push: function(urlMatcher, params, options) {
         var url = urlMatcher.format(params || {});

        // Handle the special hash param, if needed
        if (url !== null && params && params['#']) {
            url += '#' + params['#'];
        }

        $location.url(url);
        lastPushedUrl = options && options.$$avoidResync ? $location.url() : undefined;
        if (options && options.replace) $location.replace();
      },

      /**
       * @ngdoc function
       * @name ui.router.router.$urlRouter#href
       * @methodOf ui.router.router.$urlRouter
       *
       * @description
       * A URL generation method that returns the compiled URL for a given
       * {@link ui.router.util.type:UrlMatcher `UrlMatcher`}, populated with the provided parameters.
       *
       * @example
       * <pre>
       * $bob = $urlRouter.href(new UrlMatcher("/about/:person"), {
       *   person: "bob"
       * });
       * // $bob == "/about/bob";
       * </pre>
       *
       * @param {UrlMatcher} urlMatcher The `UrlMatcher` object which is used as the template of the URL to generate.
       * @param {object=} params An object of parameter values to fill the matcher's required parameters.
       * @param {object=} options Options object. The options are:
       *
       * - **`absolute`** - {boolean=false},  If true will generate an absolute url, e.g. "http://www.example.com/fullurl".
       *
       * @returns {string} Returns the fully compiled URL, or `null` if `params` fail validation against `urlMatcher`
       */
      href: function(urlMatcher, params, options) {
        if (!urlMatcher.validates(params)) return null;

        var isHtml5 = $locationProvider.html5Mode();
        if (angular.isObject(isHtml5)) {
          isHtml5 = isHtml5.enabled;
        }

        isHtml5 = isHtml5 && $sniffer.history;
        
        var url = urlMatcher.format(params);
        options = options || {};

        if (!isHtml5 && url !== null) {
          url = "#" + $locationProvider.hashPrefix() + url;
        }

        // Handle special hash param, if needed
        if (url !== null && params && params['#']) {
          url += '#' + params['#'];
        }

        url = appendBasePath(url, isHtml5, options.absolute);

        if (!options.absolute || !url) {
          return url;
        }

        var slash = (!isHtml5 && url ? '/' : ''), port = $location.port();
        port = (port === 80 || port === 443 ? '' : ':' + port);

        return [$location.protocol(), '://', $location.host(), port, slash, url].join('');
      }
    };
  }
}

angular.module('ui.router.router').provider('$urlRouter', $UrlRouterProvider);

/**
 * @ngdoc object
 * @name ui.router.state.$stateProvider
 *
 * @requires ui.router.router.$urlRouterProvider
 * @requires ui.router.util.$urlMatcherFactoryProvider
 *
 * @description
 * The new `$stateProvider` works similar to Angular's v1 router, but it focuses purely
 * on state.
 *
 * A state corresponds to a "place" in the application in terms of the overall UI and
 * navigation. A state describes (via the controller / template / view properties) what
 * the UI looks like and does at that place.
 *
 * States often have things in common, and the primary way of factoring out these
 * commonalities in this model is via the state hierarchy, i.e. parent/child states aka
 * nested states.
 *
 * The `$stateProvider` provides interfaces to declare these states for your app.
 */
$StateProvider.$inject = ['$urlRouterProvider', '$urlMatcherFactoryProvider'];
function $StateProvider(   $urlRouterProvider,   $urlMatcherFactory) {

  var root, states = {}, $state, queue = {}, abstractKey = 'abstract';

  // Builds state properties from definition passed to registerState()
  var stateBuilder = {

    // Derive parent state from a hierarchical name only if 'parent' is not explicitly defined.
    // state.children = [];
    // if (parent) parent.children.push(state);
    parent: function(state) {
      if (isDefined(state.parent) && state.parent) return findState(state.parent);
      // regex matches any valid composite state name
      // would match "contact.list" but not "contacts"
      var compositeName = /^(.+)\.[^.]+$/.exec(state.name);
      return compositeName ? findState(compositeName[1]) : root;
    },

    // inherit 'data' from parent and override by own values (if any)
    data: function(state) {
      if (state.parent && state.parent.data) {
        state.data = state.self.data = inherit(state.parent.data, state.data);
      }
      return state.data;
    },

    // Build a URLMatcher if necessary, either via a relative or absolute URL
    url: function(state) {
      var url = state.url, config = { params: state.params || {} };

      if (isString(url)) {
        if (url.charAt(0) == '^') return $urlMatcherFactory.compile(url.substring(1), config);
        return (state.parent.navigable || root).url.concat(url, config);
      }

      if (!url || $urlMatcherFactory.isMatcher(url)) return url;
      throw new Error("Invalid url '" + url + "' in state '" + state + "'");
    },

    // Keep track of the closest ancestor state that has a URL (i.e. is navigable)
    navigable: function(state) {
      return state.url ? state : (state.parent ? state.parent.navigable : null);
    },

    // Own parameters for this state. state.url.params is already built at this point. Create and add non-url params
    ownParams: function(state) {
      var params = state.url && state.url.params || new $$UMFP.ParamSet();
      forEach(state.params || {}, function(config, id) {
        if (!params[id]) params[id] = new $$UMFP.Param(id, null, config, "config");
      });
      return params;
    },

    // Derive parameters for this state and ensure they're a super-set of parent's parameters
    params: function(state) {
      var ownParams = pick(state.ownParams, state.ownParams.$$keys());
      return state.parent && state.parent.params ? extend(state.parent.params.$$new(), ownParams) : new $$UMFP.ParamSet();
    },

    // If there is no explicit multi-view configuration, make one up so we don't have
    // to handle both cases in the view directive later. Note that having an explicit
    // 'views' property will mean the default unnamed view properties are ignored. This
    // is also a good time to resolve view names to absolute names, so everything is a
    // straight lookup at link time.
    views: function(state) {
      var views = {};

      forEach(isDefined(state.views) ? state.views : { '': state }, function (view, name) {
        if (name.indexOf('@') < 0) name += '@' + state.parent.name;
        view.resolveAs = view.resolveAs || state.resolveAs || '$resolve';
        views[name] = view;
      });
      return views;
    },

    // Keep a full path from the root down to this state as this is needed for state activation.
    path: function(state) {
      return state.parent ? state.parent.path.concat(state) : []; // exclude root from path
    },

    // Speed up $state.contains() as it's used a lot
    includes: function(state) {
      var includes = state.parent ? extend({}, state.parent.includes) : {};
      includes[state.name] = true;
      return includes;
    },

    $delegates: {}
  };

  function isRelative(stateName) {
    return stateName.indexOf(".") === 0 || stateName.indexOf("^") === 0;
  }

  function findState(stateOrName, base) {
    if (!stateOrName) return undefined;

    var isStr = isString(stateOrName),
        name  = isStr ? stateOrName : stateOrName.name,
        path  = isRelative(name);

    if (path) {
      if (!base) throw new Error("No reference point given for path '"  + name + "'");
      base = findState(base);
      
      var rel = name.split("."), i = 0, pathLength = rel.length, current = base;

      for (; i < pathLength; i++) {
        if (rel[i] === "" && i === 0) {
          current = base;
          continue;
        }
        if (rel[i] === "^") {
          if (!current.parent) throw new Error("Path '" + name + "' not valid for state '" + base.name + "'");
          current = current.parent;
          continue;
        }
        break;
      }
      rel = rel.slice(i).join(".");
      name = current.name + (current.name && rel ? "." : "") + rel;
    }
    var state = states[name];

    if (state && (isStr || (!isStr && (state === stateOrName || state.self === stateOrName)))) {
      return state;
    }
    return undefined;
  }

  function queueState(parentName, state) {
    if (!queue[parentName]) {
      queue[parentName] = [];
    }
    queue[parentName].push(state);
  }

  function flushQueuedChildren(parentName) {
    var queued = queue[parentName] || [];
    while(queued.length) {
      registerState(queued.shift());
    }
  }

  function registerState(state) {
    // Wrap a new object around the state so we can store our private details easily.
    state = inherit(state, {
      self: state,
      resolve: state.resolve || {},
      toString: function() { return this.name; }
    });

    var name = state.name;
    if (!isString(name) || name.indexOf('@') >= 0) throw new Error("State must have a valid name");
    if (states.hasOwnProperty(name)) throw new Error("State '" + name + "' is already defined");

    // Get parent name
    var parentName = (name.indexOf('.') !== -1) ? name.substring(0, name.lastIndexOf('.'))
        : (isString(state.parent)) ? state.parent
        : (isObject(state.parent) && isString(state.parent.name)) ? state.parent.name
        : '';

    // If parent is not registered yet, add state to queue and register later
    if (parentName && !states[parentName]) {
      return queueState(parentName, state.self);
    }

    for (var key in stateBuilder) {
      if (isFunction(stateBuilder[key])) state[key] = stateBuilder[key](state, stateBuilder.$delegates[key]);
    }
    states[name] = state;

    // Register the state in the global state list and with $urlRouter if necessary.
    if (!state[abstractKey] && state.url) {
      $urlRouterProvider.when(state.url, ['$match', '$stateParams', function ($match, $stateParams) {
        if ($state.$current.navigable != state || !equalForKeys($match, $stateParams)) {
          $state.transitionTo(state, $match, { inherit: true, location: false });
        }
      }]);
    }

    // Register any queued children
    flushQueuedChildren(name);

    return state;
  }

  // Checks text to see if it looks like a glob.
  function isGlob (text) {
    return text.indexOf('*') > -1;
  }

  // Returns true if glob matches current $state name.
  function doesStateMatchGlob (glob) {
    var globSegments = glob.split('.'),
        segments = $state.$current.name.split('.');

    //match single stars
    for (var i = 0, l = globSegments.length; i < l; i++) {
      if (globSegments[i] === '*') {
        segments[i] = '*';
      }
    }

    //match greedy starts
    if (globSegments[0] === '**') {
       segments = segments.slice(indexOf(segments, globSegments[1]));
       segments.unshift('**');
    }
    //match greedy ends
    if (globSegments[globSegments.length - 1] === '**') {
       segments.splice(indexOf(segments, globSegments[globSegments.length - 2]) + 1, Number.MAX_VALUE);
       segments.push('**');
    }

    if (globSegments.length != segments.length) {
      return false;
    }

    return segments.join('') === globSegments.join('');
  }


  // Implicit root state that is always active
  root = registerState({
    name: '',
    url: '^',
    views: null,
    'abstract': true
  });
  root.navigable = null;


  /**
   * @ngdoc function
   * @name ui.router.state.$stateProvider#decorator
   * @methodOf ui.router.state.$stateProvider
   *
   * @description
   * Allows you to extend (carefully) or override (at your own peril) the 
   * `stateBuilder` object used internally by `$stateProvider`. This can be used 
   * to add custom functionality to ui-router, for example inferring templateUrl 
   * based on the state name.
   *
   * When passing only a name, it returns the current (original or decorated) builder
   * function that matches `name`.
   *
   * The builder functions that can be decorated are listed below. Though not all
   * necessarily have a good use case for decoration, that is up to you to decide.
   *
   * In addition, users can attach custom decorators, which will generate new 
   * properties within the state's internal definition. There is currently no clear 
   * use-case for this beyond accessing internal states (i.e. $state.$current), 
   * however, expect this to become increasingly relevant as we introduce additional 
   * meta-programming features.
   *
   * **Warning**: Decorators should not be interdependent because the order of 
   * execution of the builder functions in non-deterministic. Builder functions 
   * should only be dependent on the state definition object and super function.
   *
   *
   * Existing builder functions and current return values:
   *
   * - **parent** `{object}` - returns the parent state object.
   * - **data** `{object}` - returns state data, including any inherited data that is not
   *   overridden by own values (if any).
   * - **url** `{object}` - returns a {@link ui.router.util.type:UrlMatcher UrlMatcher}
   *   or `null`.
   * - **navigable** `{object}` - returns closest ancestor state that has a URL (aka is 
   *   navigable).
   * - **params** `{object}` - returns an array of state params that are ensured to 
   *   be a super-set of parent's params.
   * - **views** `{object}` - returns a views object where each key is an absolute view 
   *   name (i.e. "viewName@stateName") and each value is the config object 
   *   (template, controller) for the view. Even when you don't use the views object 
   *   explicitly on a state config, one is still created for you internally.
   *   So by decorating this builder function you have access to decorating template 
   *   and controller properties.
   * - **ownParams** `{object}` - returns an array of params that belong to the state, 
   *   not including any params defined by ancestor states.
   * - **path** `{string}` - returns the full path from the root down to this state. 
   *   Needed for state activation.
   * - **includes** `{object}` - returns an object that includes every state that 
   *   would pass a `$state.includes()` test.
   *
   * @example
   * <pre>
   * // Override the internal 'views' builder with a function that takes the state
   * // definition, and a reference to the internal function being overridden:
   * $stateProvider.decorator('views', function (state, parent) {
   *   var result = {},
   *       views = parent(state);
   *
   *   angular.forEach(views, function (config, name) {
   *     var autoName = (state.name + '.' + name).replace('.', '/');
   *     config.templateUrl = config.templateUrl || '/partials/' + autoName + '.html';
   *     result[name] = config;
   *   });
   *   return result;
   * });
   *
   * $stateProvider.state('home', {
   *   views: {
   *     'contact.list': { controller: 'ListController' },
   *     'contact.item': { controller: 'ItemController' }
   *   }
   * });
   *
   * // ...
   *
   * $state.go('home');
   * // Auto-populates list and item views with /partials/home/contact/list.html,
   * // and /partials/home/contact/item.html, respectively.
   * </pre>
   *
   * @param {string} name The name of the builder function to decorate. 
   * @param {object} func A function that is responsible for decorating the original 
   * builder function. The function receives two parameters:
   *
   *   - `{object}` - state - The state config object.
   *   - `{object}` - super - The original builder function.
   *
   * @return {object} $stateProvider - $stateProvider instance
   */
  this.decorator = decorator;
  function decorator(name, func) {
    /*jshint validthis: true */
    if (isString(name) && !isDefined(func)) {
      return stateBuilder[name];
    }
    if (!isFunction(func) || !isString(name)) {
      return this;
    }
    if (stateBuilder[name] && !stateBuilder.$delegates[name]) {
      stateBuilder.$delegates[name] = stateBuilder[name];
    }
    stateBuilder[name] = func;
    return this;
  }

  /**
   * @ngdoc function
   * @name ui.router.state.$stateProvider#state
   * @methodOf ui.router.state.$stateProvider
   *
   * @description
   * Registers a state configuration under a given state name. The stateConfig object
   * has the following acceptable properties.
   *
   * @param {string} name A unique state name, e.g. "home", "about", "contacts".
   * To create a parent/child state use a dot, e.g. "about.sales", "home.newest".
   * @param {object} stateConfig State configuration object.
   * @param {string|function=} stateConfig.template
   * <a id='template'></a>
   *   html template as a string or a function that returns
   *   an html template as a string which should be used by the uiView directives. This property 
   *   takes precedence over templateUrl.
   *   
   *   If `template` is a function, it will be called with the following parameters:
   *
   *   - {array.&lt;object&gt;} - state parameters extracted from the current $location.path() by
   *     applying the current state
   *
   * <pre>template:
   *   "<h1>inline template definition</h1>" +
   *   "<div ui-view></div>"</pre>
   * <pre>template: function(params) {
   *       return "<h1>generated template</h1>"; }</pre>
   * </div>
   *
   * @param {string|function=} stateConfig.templateUrl
   * <a id='templateUrl'></a>
   *
   *   path or function that returns a path to an html
   *   template that should be used by uiView.
   *   
   *   If `templateUrl` is a function, it will be called with the following parameters:
   *
   *   - {array.&lt;object&gt;} - state parameters extracted from the current $location.path() by 
   *     applying the current state
   *
   * <pre>templateUrl: "home.html"</pre>
   * <pre>templateUrl: function(params) {
   *     return myTemplates[params.pageId]; }</pre>
   *
   * @param {function=} stateConfig.templateProvider
   * <a id='templateProvider'></a>
   *    Provider function that returns HTML content string.
   * <pre> templateProvider:
   *       function(MyTemplateService, params) {
   *         return MyTemplateService.getTemplate(params.pageId);
   *       }</pre>
   *
   * @param {string|function=} stateConfig.controller
   * <a id='controller'></a>
   *
   *  Controller fn that should be associated with newly
   *   related scope or the name of a registered controller if passed as a string.
   *   Optionally, the ControllerAs may be declared here.
   * <pre>controller: "MyRegisteredController"</pre>
   * <pre>controller:
   *     "MyRegisteredController as fooCtrl"}</pre>
   * <pre>controller: function($scope, MyService) {
   *     $scope.data = MyService.getData(); }</pre>
   *
   * @param {function=} stateConfig.controllerProvider
   * <a id='controllerProvider'></a>
   *
   * Injectable provider function that returns the actual controller or string.
   * <pre>controllerProvider:
   *   function(MyResolveData) {
   *     if (MyResolveData.foo)
   *       return "FooCtrl"
   *     else if (MyResolveData.bar)
   *       return "BarCtrl";
   *     else return function($scope) {
   *       $scope.baz = "Qux";
   *     }
   *   }</pre>
   *
   * @param {string=} stateConfig.controllerAs
   * <a id='controllerAs'></a>
   * 
   * A controller alias name. If present the controller will be
   *   published to scope under the controllerAs name.
   * <pre>controllerAs: "myCtrl"</pre>
   *
   * @param {string|object=} stateConfig.parent
   * <a id='parent'></a>
   * Optionally specifies the parent state of this state.
   *
   * <pre>parent: 'parentState'</pre>
   * <pre>parent: parentState // JS variable</pre>
   *
   * @param {object=} stateConfig.resolve
   * <a id='resolve'></a>
   *
   * An optional map&lt;string, function&gt; of dependencies which
   *   should be injected into the controller. If any of these dependencies are promises, 
   *   the router will wait for them all to be resolved before the controller is instantiated.
   *   If all the promises are resolved successfully, the $stateChangeSuccess event is fired
   *   and the values of the resolved promises are injected into any controllers that reference them.
   *   If any  of the promises are rejected the $stateChangeError event is fired.
   *
   *   The map object is:
   *   
   *   - key - {string}: name of dependency to be injected into controller
   *   - factory - {string|function}: If string then it is alias for service. Otherwise if function, 
   *     it is injected and return value it treated as dependency. If result is a promise, it is 
   *     resolved before its value is injected into controller.
   *
   * <pre>resolve: {
   *     myResolve1:
   *       function($http, $stateParams) {
   *         return $http.get("/api/foos/"+stateParams.fooID);
   *       }
   *     }</pre>
   *
   * @param {string=} stateConfig.url
   * <a id='url'></a>
   *
   *   A url fragment with optional parameters. When a state is navigated or
   *   transitioned to, the `$stateParams` service will be populated with any 
   *   parameters that were passed.
   *
   *   (See {@link ui.router.util.type:UrlMatcher UrlMatcher} `UrlMatcher`} for
   *   more details on acceptable patterns )
   *
   * examples:
   * <pre>url: "/home"
   * url: "/users/:userid"
   * url: "/books/{bookid:[a-zA-Z_-]}"
   * url: "/books/{categoryid:int}"
   * url: "/books/{publishername:string}/{categoryid:int}"
   * url: "/messages?before&after"
   * url: "/messages?{before:date}&{after:date}"
   * url: "/messages/:mailboxid?{before:date}&{after:date}"
   * </pre>
   *
   * @param {object=} stateConfig.views
   * <a id='views'></a>
   * an optional map&lt;string, object&gt; which defined multiple views, or targets views
   * manually/explicitly.
   *
   * Examples:
   *
   * Targets three named `ui-view`s in the parent state's template
   * <pre>views: {
   *     header: {
   *       controller: "headerCtrl",
   *       templateUrl: "header.html"
   *     }, body: {
   *       controller: "bodyCtrl",
   *       templateUrl: "body.html"
   *     }, footer: {
   *       controller: "footCtrl",
   *       templateUrl: "footer.html"
   *     }
   *   }</pre>
   *
   * Targets named `ui-view="header"` from grandparent state 'top''s template, and named `ui-view="body" from parent state's template.
   * <pre>views: {
   *     'header@top': {
   *       controller: "msgHeaderCtrl",
   *       templateUrl: "msgHeader.html"
   *     }, 'body': {
   *       controller: "messagesCtrl",
   *       templateUrl: "messages.html"
   *     }
   *   }</pre>
   *
   * @param {boolean=} [stateConfig.abstract=false]
   * <a id='abstract'></a>
   * An abstract state will never be directly activated,
   *   but can provide inherited properties to its common children states.
   * <pre>abstract: true</pre>
   *
   * @param {function=} stateConfig.onEnter
   * <a id='onEnter'></a>
   *
   * Callback function for when a state is entered. Good way
   *   to trigger an action or dispatch an event, such as opening a dialog.
   * If minifying your scripts, make sure to explicitly annotate this function,
   * because it won't be automatically annotated by your build tools.
   *
   * <pre>onEnter: function(MyService, $stateParams) {
   *     MyService.foo($stateParams.myParam);
   * }</pre>
   *
   * @param {function=} stateConfig.onExit
   * <a id='onExit'></a>
   *
   * Callback function for when a state is exited. Good way to
   *   trigger an action or dispatch an event, such as opening a dialog.
   * If minifying your scripts, make sure to explicitly annotate this function,
   * because it won't be automatically annotated by your build tools.
   *
   * <pre>onExit: function(MyService, $stateParams) {
   *     MyService.cleanup($stateParams.myParam);
   * }</pre>
   *
   * @param {boolean=} [stateConfig.reloadOnSearch=true]
   * <a id='reloadOnSearch'></a>
   *
   * If `false`, will not retrigger the same state
   *   just because a search/query parameter has changed (via $location.search() or $location.hash()). 
   *   Useful for when you'd like to modify $location.search() without triggering a reload.
   * <pre>reloadOnSearch: false</pre>
   *
   * @param {object=} stateConfig.data
   * <a id='data'></a>
   *
   * Arbitrary data object, useful for custom configuration.  The parent state's `data` is
   *   prototypally inherited.  In other words, adding a data property to a state adds it to
   *   the entire subtree via prototypal inheritance.
   *
   * <pre>data: {
   *     requiredRole: 'foo'
   * } </pre>
   *
   * @param {object=} stateConfig.params
   * <a id='params'></a>
   *
   * A map which optionally configures parameters declared in the `url`, or
   *   defines additional non-url parameters.  For each parameter being
   *   configured, add a configuration object keyed to the name of the parameter.
   *
   *   Each parameter configuration object may contain the following properties:
   *
   *   - ** value ** - {object|function=}: specifies the default value for this
   *     parameter.  This implicitly sets this parameter as optional.
   *
   *     When UI-Router routes to a state and no value is
   *     specified for this parameter in the URL or transition, the
   *     default value will be used instead.  If `value` is a function,
   *     it will be injected and invoked, and the return value used.
   *
   *     *Note*: `undefined` is treated as "no default value" while `null`
   *     is treated as "the default value is `null`".
   *
   *     *Shorthand*: If you only need to configure the default value of the
   *     parameter, you may use a shorthand syntax.   In the **`params`**
   *     map, instead mapping the param name to a full parameter configuration
   *     object, simply set map it to the default parameter value, e.g.:
   *
   * <pre>// define a parameter's default value
   * params: {
   *     param1: { value: "defaultValue" }
   * }
   * // shorthand default values
   * params: {
   *     param1: "defaultValue",
   *     param2: "param2Default"
   * }</pre>
   *
   *   - ** array ** - {boolean=}: *(default: false)* If true, the param value will be
   *     treated as an array of values.  If you specified a Type, the value will be
   *     treated as an array of the specified Type.  Note: query parameter values
   *     default to a special `"auto"` mode.
   *
   *     For query parameters in `"auto"` mode, if multiple  values for a single parameter
   *     are present in the URL (e.g.: `/foo?bar=1&bar=2&bar=3`) then the values
   *     are mapped to an array (e.g.: `{ foo: [ '1', '2', '3' ] }`).  However, if
   *     only one value is present (e.g.: `/foo?bar=1`) then the value is treated as single
   *     value (e.g.: `{ foo: '1' }`).
   *
   * <pre>params: {
   *     param1: { array: true }
   * }</pre>
   *
   *   - ** squash ** - {bool|string=}: `squash` configures how a default parameter value is represented in the URL when
   *     the current parameter value is the same as the default value. If `squash` is not set, it uses the
   *     configured default squash policy.
   *     (See {@link ui.router.util.$urlMatcherFactory#methods_defaultSquashPolicy `defaultSquashPolicy()`})
   *
   *   There are three squash settings:
   *
   *     - false: The parameter's default value is not squashed.  It is encoded and included in the URL
   *     - true: The parameter's default value is omitted from the URL.  If the parameter is preceeded and followed
   *       by slashes in the state's `url` declaration, then one of those slashes are omitted.
   *       This can allow for cleaner looking URLs.
   *     - `"<arbitrary string>"`: The parameter's default value is replaced with an arbitrary placeholder of  your choice.
   *
   * <pre>params: {
   *     param1: {
   *       value: "defaultId",
   *       squash: true
   * } }
   * // squash "defaultValue" to "~"
   * params: {
   *     param1: {
   *       value: "defaultValue",
   *       squash: "~"
   * } }
   * </pre>
   *
   *
   * @example
   * <pre>
   * // Some state name examples
   *
   * // stateName can be a single top-level name (must be unique).
   * $stateProvider.state("home", {});
   *
   * // Or it can be a nested state name. This state is a child of the
   * // above "home" state.
   * $stateProvider.state("home.newest", {});
   *
   * // Nest states as deeply as needed.
   * $stateProvider.state("home.newest.abc.xyz.inception", {});
   *
   * // state() returns $stateProvider, so you can chain state declarations.
   * $stateProvider
   *   .state("home", {})
   *   .state("about", {})
   *   .state("contacts", {});
   * </pre>
   *
   */
  this.state = state;
  function state(name, definition) {
    /*jshint validthis: true */
    if (isObject(name)) definition = name;
    else definition.name = name;
    registerState(definition);
    return this;
  }

  /**
   * @ngdoc object
   * @name ui.router.state.$state
   *
   * @requires $rootScope
   * @requires $q
   * @requires ui.router.state.$view
   * @requires $injector
   * @requires ui.router.util.$resolve
   * @requires ui.router.state.$stateParams
   * @requires ui.router.router.$urlRouter
   *
   * @property {object} params A param object, e.g. {sectionId: section.id)}, that 
   * you'd like to test against the current active state.
   * @property {object} current A reference to the state's config object. However 
   * you passed it in. Useful for accessing custom data.
   * @property {object} transition Currently pending transition. A promise that'll 
   * resolve or reject.
   *
   * @description
   * `$state` service is responsible for representing states as well as transitioning
   * between them. It also provides interfaces to ask for current state or even states
   * you're coming from.
   */
  this.$get = $get;
  $get.$inject = ['$rootScope', '$q', '$view', '$injector', '$resolve', '$stateParams', '$urlRouter', '$location', '$urlMatcherFactory'];
  function $get(   $rootScope,   $q,   $view,   $injector,   $resolve,   $stateParams,   $urlRouter,   $location,   $urlMatcherFactory) {

    var TransitionSuperseded = $q.reject(new Error('transition superseded'));
    var TransitionPrevented = $q.reject(new Error('transition prevented'));
    var TransitionAborted = $q.reject(new Error('transition aborted'));
    var TransitionFailed = $q.reject(new Error('transition failed'));

    // Handles the case where a state which is the target of a transition is not found, and the user
    // can optionally retry or defer the transition
    function handleRedirect(redirect, state, params, options) {
      /**
       * @ngdoc event
       * @name ui.router.state.$state#$stateNotFound
       * @eventOf ui.router.state.$state
       * @eventType broadcast on root scope
       * @description
       * Fired when a requested state **cannot be found** using the provided state name during transition.
       * The event is broadcast allowing any handlers a single chance to deal with the error (usually by
       * lazy-loading the unfound state). A special `unfoundState` object is passed to the listener handler,
       * you can see its three properties in the example. You can use `event.preventDefault()` to abort the
       * transition and the promise returned from `go` will be rejected with a `'transition aborted'` value.
       *
       * @param {Object} event Event object.
       * @param {Object} unfoundState Unfound State information. Contains: `to, toParams, options` properties.
       * @param {State} fromState Current state object.
       * @param {Object} fromParams Current state params.
       *
       * @example
       *
       * <pre>
       * // somewhere, assume lazy.state has not been defined
       * $state.go("lazy.state", {a:1, b:2}, {inherit:false});
       *
       * // somewhere else
       * $scope.$on('$stateNotFound',
       * function(event, unfoundState, fromState, fromParams){
       *     console.log(unfoundState.to); // "lazy.state"
       *     console.log(unfoundState.toParams); // {a:1, b:2}
       *     console.log(unfoundState.options); // {inherit:false} + default options
       * })
       * </pre>
       */
      var evt = $rootScope.$broadcast('$stateNotFound', redirect, state, params);

      if (evt.defaultPrevented) {
        $urlRouter.update();
        return TransitionAborted;
      }

      if (!evt.retry) {
        return null;
      }

      // Allow the handler to return a promise to defer state lookup retry
      if (options.$retry) {
        $urlRouter.update();
        return TransitionFailed;
      }
      var retryTransition = $state.transition = $q.when(evt.retry);

      retryTransition.then(function() {
        if (retryTransition !== $state.transition) return TransitionSuperseded;
        redirect.options.$retry = true;
        return $state.transitionTo(redirect.to, redirect.toParams, redirect.options);
      }, function() {
        return TransitionAborted;
      });
      $urlRouter.update();

      return retryTransition;
    }

    root.locals = { resolve: null, globals: { $stateParams: {} } };

    $state = {
      params: {},
      current: root.self,
      $current: root,
      transition: null
    };

    /**
     * @ngdoc function
     * @name ui.router.state.$state#reload
     * @methodOf ui.router.state.$state
     *
     * @description
     * A method that force reloads the current state. All resolves are re-resolved,
     * controllers reinstantiated, and events re-fired.
     *
     * @example
     * <pre>
     * var app angular.module('app', ['ui.router']);
     *
     * app.controller('ctrl', function ($scope, $state) {
     *   $scope.reload = function(){
     *     $state.reload();
     *   }
     * });
     * </pre>
     *
     * `reload()` is just an alias for:
     * <pre>
     * $state.transitionTo($state.current, $stateParams, { 
     *   reload: true, inherit: false, notify: true
     * });
     * </pre>
     *
     * @param {string=|object=} state - A state name or a state object, which is the root of the resolves to be re-resolved.
     * @example
     * <pre>
     * //assuming app application consists of 3 states: 'contacts', 'contacts.detail', 'contacts.detail.item' 
     * //and current state is 'contacts.detail.item'
     * var app angular.module('app', ['ui.router']);
     *
     * app.controller('ctrl', function ($scope, $state) {
     *   $scope.reload = function(){
     *     //will reload 'contact.detail' and 'contact.detail.item' states
     *     $state.reload('contact.detail');
     *   }
     * });
     * </pre>
     *
     * `reload()` is just an alias for:
     * <pre>
     * $state.transitionTo($state.current, $stateParams, { 
     *   reload: true, inherit: false, notify: true
     * });
     * </pre>

     * @returns {promise} A promise representing the state of the new transition. See
     * {@link ui.router.state.$state#methods_go $state.go}.
     */
    $state.reload = function reload(state) {
      return $state.transitionTo($state.current, $stateParams, { reload: state || true, inherit: false, notify: true});
    };

    /**
     * @ngdoc function
     * @name ui.router.state.$state#go
     * @methodOf ui.router.state.$state
     *
     * @description
     * Convenience method for transitioning to a new state. `$state.go` calls 
     * `$state.transitionTo` internally but automatically sets options to 
     * `{ location: true, inherit: true, relative: $state.$current, notify: true }`. 
     * This allows you to easily use an absolute or relative to path and specify 
     * only the parameters you'd like to update (while letting unspecified parameters 
     * inherit from the currently active ancestor states).
     *
     * @example
     * <pre>
     * var app = angular.module('app', ['ui.router']);
     *
     * app.controller('ctrl', function ($scope, $state) {
     *   $scope.changeState = function () {
     *     $state.go('contact.detail');
     *   };
     * });
     * </pre>
     * <img src='../ngdoc_assets/StateGoExamples.png'/>
     *
     * @param {string} to Absolute state name or relative state path. Some examples:
     *
     * - `$state.go('contact.detail')` - will go to the `contact.detail` state
     * - `$state.go('^')` - will go to a parent state
     * - `$state.go('^.sibling')` - will go to a sibling state
     * - `$state.go('.child.grandchild')` - will go to grandchild state
     *
     * @param {object=} params A map of the parameters that will be sent to the state, 
     * will populate $stateParams. Any parameters that are not specified will be inherited from currently 
     * defined parameters. Only parameters specified in the state definition can be overridden, new 
     * parameters will be ignored. This allows, for example, going to a sibling state that shares parameters
     * specified in a parent state. Parameter inheritance only works between common ancestor states, I.e.
     * transitioning to a sibling will get you the parameters for all parents, transitioning to a child
     * will get you all current parameters, etc.
     * @param {object=} options Options object. The options are:
     *
     * - **`location`** - {boolean=true|string=} - If `true` will update the url in the location bar, if `false`
     *    will not. If string, must be `"replace"`, which will update url and also replace last history record.
     * - **`inherit`** - {boolean=true}, If `true` will inherit url parameters from current url.
     * - **`relative`** - {object=$state.$current}, When transitioning with relative path (e.g '^'), 
     *    defines which state to be relative from.
     * - **`notify`** - {boolean=true}, If `true` will broadcast $stateChangeStart and $stateChangeSuccess events.
     * - **`reload`** (v0.2.5) - {boolean=false|string|object}, If `true` will force transition even if no state or params
     *    have changed.  It will reload the resolves and views of the current state and parent states.
     *    If `reload` is a string (or state object), the state object is fetched (by name, or object reference); and \
     *    the transition reloads the resolves and views for that matched state, and all its children states.
     *
     * @returns {promise} A promise representing the state of the new transition.
     *
     * Possible success values:
     *
     * - $state.current
     *
     * <br/>Possible rejection values:
     *
     * - 'transition superseded' - when a newer transition has been started after this one
     * - 'transition prevented' - when `event.preventDefault()` has been called in a `$stateChangeStart` listener
     * - 'transition aborted' - when `event.preventDefault()` has been called in a `$stateNotFound` listener or
     *   when a `$stateNotFound` `event.retry` promise errors.
     * - 'transition failed' - when a state has been unsuccessfully found after 2 tries.
     * - *resolve error* - when an error has occurred with a `resolve`
     *
     */
    $state.go = function go(to, params, options) {
      return $state.transitionTo(to, params, extend({ inherit: true, relative: $state.$current }, options));
    };

    /**
     * @ngdoc function
     * @name ui.router.state.$state#transitionTo
     * @methodOf ui.router.state.$state
     *
     * @description
     * Low-level method for transitioning to a new state. {@link ui.router.state.$state#methods_go $state.go}
     * uses `transitionTo` internally. `$state.go` is recommended in most situations.
     *
     * @example
     * <pre>
     * var app = angular.module('app', ['ui.router']);
     *
     * app.controller('ctrl', function ($scope, $state) {
     *   $scope.changeState = function () {
     *     $state.transitionTo('contact.detail');
     *   };
     * });
     * </pre>
     *
     * @param {string} to State name.
     * @param {object=} toParams A map of the parameters that will be sent to the state,
     * will populate $stateParams.
     * @param {object=} options Options object. The options are:
     *
     * - **`location`** - {boolean=true|string=} - If `true` will update the url in the location bar, if `false`
     *    will not. If string, must be `"replace"`, which will update url and also replace last history record.
     * - **`inherit`** - {boolean=false}, If `true` will inherit url parameters from current url.
     * - **`relative`** - {object=}, When transitioning with relative path (e.g '^'), 
     *    defines which state to be relative from.
     * - **`notify`** - {boolean=true}, If `true` will broadcast $stateChangeStart and $stateChangeSuccess events.
     * - **`reload`** (v0.2.5) - {boolean=false|string=|object=}, If `true` will force transition even if the state or params 
     *    have not changed, aka a reload of the same state. It differs from reloadOnSearch because you'd
     *    use this when you want to force a reload when *everything* is the same, including search params.
     *    if String, then will reload the state with the name given in reload, and any children.
     *    if Object, then a stateObj is expected, will reload the state found in stateObj, and any children.
     *
     * @returns {promise} A promise representing the state of the new transition. See
     * {@link ui.router.state.$state#methods_go $state.go}.
     */
    $state.transitionTo = function transitionTo(to, toParams, options) {
      toParams = toParams || {};
      options = extend({
        location: true, inherit: false, relative: null, notify: true, reload: false, $retry: false
      }, options || {});

      var from = $state.$current, fromParams = $state.params, fromPath = from.path;
      var evt, toState = findState(to, options.relative);

      // Store the hash param for later (since it will be stripped out by various methods)
      var hash = toParams['#'];

      if (!isDefined(toState)) {
        var redirect = { to: to, toParams: toParams, options: options };
        var redirectResult = handleRedirect(redirect, from.self, fromParams, options);

        if (redirectResult) {
          return redirectResult;
        }

        // Always retry once if the $stateNotFound was not prevented
        // (handles either redirect changed or state lazy-definition)
        to = redirect.to;
        toParams = redirect.toParams;
        options = redirect.options;
        toState = findState(to, options.relative);

        if (!isDefined(toState)) {
          if (!options.relative) throw new Error("No such state '" + to + "'");
          throw new Error("Could not resolve '" + to + "' from state '" + options.relative + "'");
        }
      }
      if (toState[abstractKey]) throw new Error("Cannot transition to abstract state '" + to + "'");
      if (options.inherit) toParams = inheritParams($stateParams, toParams || {}, $state.$current, toState);
      if (!toState.params.$$validates(toParams)) return TransitionFailed;

      toParams = toState.params.$$values(toParams);
      to = toState;

      var toPath = to.path;

      // Starting from the root of the path, keep all levels that haven't changed
      var keep = 0, state = toPath[keep], locals = root.locals, toLocals = [];

      if (!options.reload) {
        while (state && state === fromPath[keep] && state.ownParams.$$equals(toParams, fromParams)) {
          locals = toLocals[keep] = state.locals;
          keep++;
          state = toPath[keep];
        }
      } else if (isString(options.reload) || isObject(options.reload)) {
        if (isObject(options.reload) && !options.reload.name) {
          throw new Error('Invalid reload state object');
        }
        
        var reloadState = options.reload === true ? fromPath[0] : findState(options.reload);
        if (options.reload && !reloadState) {
          throw new Error("No such reload state '" + (isString(options.reload) ? options.reload : options.reload.name) + "'");
        }

        while (state && state === fromPath[keep] && state !== reloadState) {
          locals = toLocals[keep] = state.locals;
          keep++;
          state = toPath[keep];
        }
      }

      // If we're going to the same state and all locals are kept, we've got nothing to do.
      // But clear 'transition', as we still want to cancel any other pending transitions.
      // TODO: We may not want to bump 'transition' if we're called from a location change
      // that we've initiated ourselves, because we might accidentally abort a legitimate
      // transition initiated from code?
      if (shouldSkipReload(to, toParams, from, fromParams, locals, options)) {
        if (hash) toParams['#'] = hash;
        $state.params = toParams;
        copy($state.params, $stateParams);
        copy(filterByKeys(to.params.$$keys(), $stateParams), to.locals.globals.$stateParams);
        if (options.location && to.navigable && to.navigable.url) {
          $urlRouter.push(to.navigable.url, toParams, {
            $$avoidResync: true, replace: options.location === 'replace'
          });
          $urlRouter.update(true);
        }
        $state.transition = null;
        return $q.when($state.current);
      }

      // Filter parameters before we pass them to event handlers etc.
      toParams = filterByKeys(to.params.$$keys(), toParams || {});
      
      // Re-add the saved hash before we start returning things or broadcasting $stateChangeStart
      if (hash) toParams['#'] = hash;
      
      // Broadcast start event and cancel the transition if requested
      if (options.notify) {
        /**
         * @ngdoc event
         * @name ui.router.state.$state#$stateChangeStart
         * @eventOf ui.router.state.$state
         * @eventType broadcast on root scope
         * @description
         * Fired when the state transition **begins**. You can use `event.preventDefault()`
         * to prevent the transition from happening and then the transition promise will be
         * rejected with a `'transition prevented'` value.
         *
         * @param {Object} event Event object.
         * @param {State} toState The state being transitioned to.
         * @param {Object} toParams The params supplied to the `toState`.
         * @param {State} fromState The current state, pre-transition.
         * @param {Object} fromParams The params supplied to the `fromState`.
         *
         * @example
         *
         * <pre>
         * $rootScope.$on('$stateChangeStart',
         * function(event, toState, toParams, fromState, fromParams){
         *     event.preventDefault();
         *     // transitionTo() promise will be rejected with
         *     // a 'transition prevented' error
         * })
         * </pre>
         */
        if ($rootScope.$broadcast('$stateChangeStart', to.self, toParams, from.self, fromParams, options).defaultPrevented) {
          $rootScope.$broadcast('$stateChangeCancel', to.self, toParams, from.self, fromParams);
          //Don't update and resync url if there's been a new transition started. see issue #2238, #600
          if ($state.transition == null) $urlRouter.update();
          return TransitionPrevented;
        }
      }

      // Resolve locals for the remaining states, but don't update any global state just
      // yet -- if anything fails to resolve the current state needs to remain untouched.
      // We also set up an inheritance chain for the locals here. This allows the view directive
      // to quickly look up the correct definition for each view in the current state. Even
      // though we create the locals object itself outside resolveState(), it is initially
      // empty and gets filled asynchronously. We need to keep track of the promise for the
      // (fully resolved) current locals, and pass this down the chain.
      var resolved = $q.when(locals);

      for (var l = keep; l < toPath.length; l++, state = toPath[l]) {
        locals = toLocals[l] = inherit(locals);
        resolved = resolveState(state, toParams, state === to, resolved, locals, options);
      }

      // Once everything is resolved, we are ready to perform the actual transition
      // and return a promise for the new state. We also keep track of what the
      // current promise is, so that we can detect overlapping transitions and
      // keep only the outcome of the last transition.
      var transition = $state.transition = resolved.then(function () {
        var l, entering, exiting;

        if ($state.transition !== transition) return TransitionSuperseded;

        // Exit 'from' states not kept
        for (l = fromPath.length - 1; l >= keep; l--) {
          exiting = fromPath[l];
          if (exiting.self.onExit) {
            $injector.invoke(exiting.self.onExit, exiting.self, exiting.locals.globals);
          }
          exiting.locals = null;
        }

        // Enter 'to' states not kept
        for (l = keep; l < toPath.length; l++) {
          entering = toPath[l];
          entering.locals = toLocals[l];
          if (entering.self.onEnter) {
            $injector.invoke(entering.self.onEnter, entering.self, entering.locals.globals);
          }
        }

        // Run it again, to catch any transitions in callbacks
        if ($state.transition !== transition) return TransitionSuperseded;

        // Update globals in $state
        $state.$current = to;
        $state.current = to.self;
        $state.params = toParams;
        copy($state.params, $stateParams);
        $state.transition = null;

        if (options.location && to.navigable) {
          $urlRouter.push(to.navigable.url, to.navigable.locals.globals.$stateParams, {
            $$avoidResync: true, replace: options.location === 'replace'
          });
        }

        if (options.notify) {
        /**
         * @ngdoc event
         * @name ui.router.state.$state#$stateChangeSuccess
         * @eventOf ui.router.state.$state
         * @eventType broadcast on root scope
         * @description
         * Fired once the state transition is **complete**.
         *
         * @param {Object} event Event object.
         * @param {State} toState The state being transitioned to.
         * @param {Object} toParams The params supplied to the `toState`.
         * @param {State} fromState The current state, pre-transition.
         * @param {Object} fromParams The params supplied to the `fromState`.
         */
          $rootScope.$broadcast('$stateChangeSuccess', to.self, toParams, from.self, fromParams);
        }
        $urlRouter.update(true);

        return $state.current;
      }, function (error) {
        if ($state.transition !== transition) return TransitionSuperseded;

        $state.transition = null;
        /**
         * @ngdoc event
         * @name ui.router.state.$state#$stateChangeError
         * @eventOf ui.router.state.$state
         * @eventType broadcast on root scope
         * @description
         * Fired when an **error occurs** during transition. It's important to note that if you
         * have any errors in your resolve functions (javascript errors, non-existent services, etc)
         * they will not throw traditionally. You must listen for this $stateChangeError event to
         * catch **ALL** errors.
         *
         * @param {Object} event Event object.
         * @param {State} toState The state being transitioned to.
         * @param {Object} toParams The params supplied to the `toState`.
         * @param {State} fromState The current state, pre-transition.
         * @param {Object} fromParams The params supplied to the `fromState`.
         * @param {Error} error The resolve error object.
         */
        evt = $rootScope.$broadcast('$stateChangeError', to.self, toParams, from.self, fromParams, error);

        if (!evt.defaultPrevented) {
            $urlRouter.update();
        }

        return $q.reject(error);
      });

      return transition;
    };

    /**
     * @ngdoc function
     * @name ui.router.state.$state#is
     * @methodOf ui.router.state.$state
     *
     * @description
     * Similar to {@link ui.router.state.$state#methods_includes $state.includes},
     * but only checks for the full state name. If params is supplied then it will be
     * tested for strict equality against the current active params object, so all params
     * must match with none missing and no extras.
     *
     * @example
     * <pre>
     * $state.$current.name = 'contacts.details.item';
     *
     * // absolute name
     * $state.is('contact.details.item'); // returns true
     * $state.is(contactDetailItemStateObject); // returns true
     *
     * // relative name (. and ^), typically from a template
     * // E.g. from the 'contacts.details' template
     * <div ng-class="{highlighted: $state.is('.item')}">Item</div>
     * </pre>
     *
     * @param {string|object} stateOrName The state name (absolute or relative) or state object you'd like to check.
     * @param {object=} params A param object, e.g. `{sectionId: section.id}`, that you'd like
     * to test against the current active state.
     * @param {object=} options An options object.  The options are:
     *
     * - **`relative`** - {string|object} -  If `stateOrName` is a relative state name and `options.relative` is set, .is will
     * test relative to `options.relative` state (or name).
     *
     * @returns {boolean} Returns true if it is the state.
     */
    $state.is = function is(stateOrName, params, options) {
      options = extend({ relative: $state.$current }, options || {});
      var state = findState(stateOrName, options.relative);

      if (!isDefined(state)) { return undefined; }
      if ($state.$current !== state) { return false; }
      return params ? equalForKeys(state.params.$$values(params), $stateParams) : true;
    };

    /**
     * @ngdoc function
     * @name ui.router.state.$state#includes
     * @methodOf ui.router.state.$state
     *
     * @description
     * A method to determine if the current active state is equal to or is the child of the
     * state stateName. If any params are passed then they will be tested for a match as well.
     * Not all the parameters need to be passed, just the ones you'd like to test for equality.
     *
     * @example
     * Partial and relative names
     * <pre>
     * $state.$current.name = 'contacts.details.item';
     *
     * // Using partial names
     * $state.includes("contacts"); // returns true
     * $state.includes("contacts.details"); // returns true
     * $state.includes("contacts.details.item"); // returns true
     * $state.includes("contacts.list"); // returns false
     * $state.includes("about"); // returns false
     *
     * // Using relative names (. and ^), typically from a template
     * // E.g. from the 'contacts.details' template
     * <div ng-class="{highlighted: $state.includes('.item')}">Item</div>
     * </pre>
     *
     * Basic globbing patterns
     * <pre>
     * $state.$current.name = 'contacts.details.item.url';
     *
     * $state.includes("*.details.*.*"); // returns true
     * $state.includes("*.details.**"); // returns true
     * $state.includes("**.item.**"); // returns true
     * $state.includes("*.details.item.url"); // returns true
     * $state.includes("*.details.*.url"); // returns true
     * $state.includes("*.details.*"); // returns false
     * $state.includes("item.**"); // returns false
     * </pre>
     *
     * @param {string} stateOrName A partial name, relative name, or glob pattern
     * to be searched for within the current state name.
     * @param {object=} params A param object, e.g. `{sectionId: section.id}`,
     * that you'd like to test against the current active state.
     * @param {object=} options An options object.  The options are:
     *
     * - **`relative`** - {string|object=} -  If `stateOrName` is a relative state reference and `options.relative` is set,
     * .includes will test relative to `options.relative` state (or name).
     *
     * @returns {boolean} Returns true if it does include the state
     */
    $state.includes = function includes(stateOrName, params, options) {
      options = extend({ relative: $state.$current }, options || {});
      if (isString(stateOrName) && isGlob(stateOrName)) {
        if (!doesStateMatchGlob(stateOrName)) {
          return false;
        }
        stateOrName = $state.$current.name;
      }

      var state = findState(stateOrName, options.relative);
      if (!isDefined(state)) { return undefined; }
      if (!isDefined($state.$current.includes[state.name])) { return false; }
      return params ? equalForKeys(state.params.$$values(params), $stateParams, objectKeys(params)) : true;
    };


    /**
     * @ngdoc function
     * @name ui.router.state.$state#href
     * @methodOf ui.router.state.$state
     *
     * @description
     * A url generation method that returns the compiled url for the given state populated with the given params.
     *
     * @example
     * <pre>
     * expect($state.href("about.person", { person: "bob" })).toEqual("/about/bob");
     * </pre>
     *
     * @param {string|object} stateOrName The state name or state object you'd like to generate a url from.
     * @param {object=} params An object of parameter values to fill the state's required parameters.
     * @param {object=} options Options object. The options are:
     *
     * - **`lossy`** - {boolean=true} -  If true, and if there is no url associated with the state provided in the
     *    first parameter, then the constructed href url will be built from the first navigable ancestor (aka
     *    ancestor with a valid url).
     * - **`inherit`** - {boolean=true}, If `true` will inherit url parameters from current url.
     * - **`relative`** - {object=$state.$current}, When transitioning with relative path (e.g '^'), 
     *    defines which state to be relative from.
     * - **`absolute`** - {boolean=false},  If true will generate an absolute url, e.g. "http://www.example.com/fullurl".
     * 
     * @returns {string} compiled state url
     */
    $state.href = function href(stateOrName, params, options) {
      options = extend({
        lossy:    true,
        inherit:  true,
        absolute: false,
        relative: $state.$current
      }, options || {});

      var state = findState(stateOrName, options.relative);

      if (!isDefined(state)) return null;
      if (options.inherit) params = inheritParams($stateParams, params || {}, $state.$current, state);
      
      var nav = (state && options.lossy) ? state.navigable : state;

      if (!nav || nav.url === undefined || nav.url === null) {
        return null;
      }
      return $urlRouter.href(nav.url, filterByKeys(state.params.$$keys().concat('#'), params || {}), {
        absolute: options.absolute
      });
    };

    /**
     * @ngdoc function
     * @name ui.router.state.$state#get
     * @methodOf ui.router.state.$state
     *
     * @description
     * Returns the state configuration object for any specific state or all states.
     *
     * @param {string|object=} stateOrName (absolute or relative) If provided, will only get the config for
     * the requested state. If not provided, returns an array of ALL state configs.
     * @param {string|object=} context When stateOrName is a relative state reference, the state will be retrieved relative to context.
     * @returns {Object|Array} State configuration object or array of all objects.
     */
    $state.get = function (stateOrName, context) {
      if (arguments.length === 0) return map(objectKeys(states), function(name) { return states[name].self; });
      var state = findState(stateOrName, context || $state.$current);
      return (state && state.self) ? state.self : null;
    };

    function resolveState(state, params, paramsAreFiltered, inherited, dst, options) {
      // Make a restricted $stateParams with only the parameters that apply to this state if
      // necessary. In addition to being available to the controller and onEnter/onExit callbacks,
      // we also need $stateParams to be available for any $injector calls we make during the
      // dependency resolution process.
      var $stateParams = (paramsAreFiltered) ? params : filterByKeys(state.params.$$keys(), params);
      var locals = { $stateParams: $stateParams };

      // Resolve 'global' dependencies for the state, i.e. those not specific to a view.
      // We're also including $stateParams in this; that way the parameters are restricted
      // to the set that should be visible to the state, and are independent of when we update
      // the global $state and $stateParams values.
      dst.resolve = $resolve.resolve(state.resolve, locals, dst.resolve, state);
      var promises = [dst.resolve.then(function (globals) {
        dst.globals = globals;
      })];
      if (inherited) promises.push(inherited);

      function resolveViews() {
        var viewsPromises = [];

        // Resolve template and dependencies for all views.
        forEach(state.views, function (view, name) {
          var injectables = (view.resolve && view.resolve !== state.resolve ? view.resolve : {});
          injectables.$template = [ function () {
            return $view.load(name, { view: view, locals: dst.globals, params: $stateParams, notify: options.notify }) || '';
          }];

          viewsPromises.push($resolve.resolve(injectables, dst.globals, dst.resolve, state).then(function (result) {
            // References to the controller (only instantiated at link time)
            if (isFunction(view.controllerProvider) || isArray(view.controllerProvider)) {
              var injectLocals = angular.extend({}, injectables, dst.globals);
              result.$$controller = $injector.invoke(view.controllerProvider, null, injectLocals);
            } else {
              result.$$controller = view.controller;
            }
            // Provide access to the state itself for internal use
            result.$$state = state;
            result.$$controllerAs = view.controllerAs;
            result.$$resolveAs = view.resolveAs;
            dst[name] = result;
          }));
        });

        return $q.all(viewsPromises).then(function(){
          return dst.globals;
        });
      }

      // Wait for all the promises and then return the activation object
      return $q.all(promises).then(resolveViews).then(function (values) {
        return dst;
      });
    }

    return $state;
  }

  function shouldSkipReload(to, toParams, from, fromParams, locals, options) {
    // Return true if there are no differences in non-search (path/object) params, false if there are differences
    function nonSearchParamsEqual(fromAndToState, fromParams, toParams) {
      // Identify whether all the parameters that differ between `fromParams` and `toParams` were search params.
      function notSearchParam(key) {
        return fromAndToState.params[key].location != "search";
      }
      var nonQueryParamKeys = fromAndToState.params.$$keys().filter(notSearchParam);
      var nonQueryParams = pick.apply({}, [fromAndToState.params].concat(nonQueryParamKeys));
      var nonQueryParamSet = new $$UMFP.ParamSet(nonQueryParams);
      return nonQueryParamSet.$$equals(fromParams, toParams);
    }

    // If reload was not explicitly requested
    // and we're transitioning to the same state we're already in
    // and    the locals didn't change
    //     or they changed in a way that doesn't merit reloading
    //        (reloadOnParams:false, or reloadOnSearch.false and only search params changed)
    // Then return true.
    if (!options.reload && to === from &&
      (locals === from.locals || (to.self.reloadOnSearch === false && nonSearchParamsEqual(from, fromParams, toParams)))) {
      return true;
    }
  }
}

angular.module('ui.router.state')
  .factory('$stateParams', function () { return {}; })
  .constant("$state.runtime", { autoinject: true })
  .provider('$state', $StateProvider)
  // Inject $state to initialize when entering runtime. #2574
  .run(['$injector', function ($injector) {
    // Allow tests (stateSpec.js) to turn this off by defining this constant
    if ($injector.get("$state.runtime").autoinject) {
      $injector.get('$state');
    }
  }]);


$ViewProvider.$inject = [];
function $ViewProvider() {

  this.$get = $get;
  /**
   * @ngdoc object
   * @name ui.router.state.$view
   *
   * @requires ui.router.util.$templateFactory
   * @requires $rootScope
   *
   * @description
   *
   */
  $get.$inject = ['$rootScope', '$templateFactory'];
  function $get(   $rootScope,   $templateFactory) {
    return {
      // $view.load('full.viewName', { template: ..., controller: ..., resolve: ..., async: false, params: ... })
      /**
       * @ngdoc function
       * @name ui.router.state.$view#load
       * @methodOf ui.router.state.$view
       *
       * @description
       *
       * @param {string} name name
       * @param {object} options option object.
       */
      load: function load(name, options) {
        var result, defaults = {
          template: null, controller: null, view: null, locals: null, notify: true, async: true, params: {}
        };
        options = extend(defaults, options);

        if (options.view) {
          result = $templateFactory.fromConfig(options.view, options.params, options.locals);
        }
        return result;
      }
    };
  }
}

angular.module('ui.router.state').provider('$view', $ViewProvider);

/**
 * @ngdoc object
 * @name ui.router.state.$uiViewScrollProvider
 *
 * @description
 * Provider that returns the {@link ui.router.state.$uiViewScroll} service function.
 */
function $ViewScrollProvider() {

  var useAnchorScroll = false;

  /**
   * @ngdoc function
   * @name ui.router.state.$uiViewScrollProvider#useAnchorScroll
   * @methodOf ui.router.state.$uiViewScrollProvider
   *
   * @description
   * Reverts back to using the core [`$anchorScroll`](http://docs.angularjs.org/api/ng.$anchorScroll) service for
   * scrolling based on the url anchor.
   */
  this.useAnchorScroll = function () {
    useAnchorScroll = true;
  };

  /**
   * @ngdoc object
   * @name ui.router.state.$uiViewScroll
   *
   * @requires $anchorScroll
   * @requires $timeout
   *
   * @description
   * When called with a jqLite element, it scrolls the element into view (after a
   * `$timeout` so the DOM has time to refresh).
   *
   * If you prefer to rely on `$anchorScroll` to scroll the view to the anchor,
   * this can be enabled by calling {@link ui.router.state.$uiViewScrollProvider#methods_useAnchorScroll `$uiViewScrollProvider.useAnchorScroll()`}.
   */
  this.$get = ['$anchorScroll', '$timeout', function ($anchorScroll, $timeout) {
    if (useAnchorScroll) {
      return $anchorScroll;
    }

    return function ($element) {
      return $timeout(function () {
        $element[0].scrollIntoView();
      }, 0, false);
    };
  }];
}

angular.module('ui.router.state').provider('$uiViewScroll', $ViewScrollProvider);

/**
 * @ngdoc directive
 * @name ui.router.state.directive:ui-view
 *
 * @requires ui.router.state.$state
 * @requires $compile
 * @requires $controller
 * @requires $injector
 * @requires ui.router.state.$uiViewScroll
 * @requires $document
 *
 * @restrict ECA
 *
 * @description
 * The ui-view directive tells $state where to place your templates.
 *
 * @param {string=} name A view name. The name should be unique amongst the other views in the
 * same state. You can have views of the same name that live in different states.
 *
 * @param {string=} autoscroll It allows you to set the scroll behavior of the browser window
 * when a view is populated. By default, $anchorScroll is overridden by ui-router's custom scroll
 * service, {@link ui.router.state.$uiViewScroll}. This custom service let's you
 * scroll ui-view elements into view when they are populated during a state activation.
 *
 * *Note: To revert back to old [`$anchorScroll`](http://docs.angularjs.org/api/ng.$anchorScroll)
 * functionality, call `$uiViewScrollProvider.useAnchorScroll()`.*
 *
 * @param {string=} onload Expression to evaluate whenever the view updates.
 *
 * @example
 * A view can be unnamed or named.
 * <pre>
 * <!-- Unnamed -->
 * <div ui-view></div>
 *
 * <!-- Named -->
 * <div ui-view="viewName"></div>
 * </pre>
 *
 * You can only have one unnamed view within any template (or root html). If you are only using a
 * single view and it is unnamed then you can populate it like so:
 * <pre>
 * <div ui-view></div>
 * $stateProvider.state("home", {
 *   template: "<h1>HELLO!</h1>"
 * })
 * </pre>
 *
 * The above is a convenient shortcut equivalent to specifying your view explicitly with the {@link ui.router.state.$stateProvider#methods_state `views`}
 * config property, by name, in this case an empty name:
 * <pre>
 * $stateProvider.state("home", {
 *   views: {
 *     "": {
 *       template: "<h1>HELLO!</h1>"
 *     }
 *   }    
 * })
 * </pre>
 *
 * But typically you'll only use the views property if you name your view or have more than one view
 * in the same template. There's not really a compelling reason to name a view if its the only one,
 * but you could if you wanted, like so:
 * <pre>
 * <div ui-view="main"></div>
 * </pre>
 * <pre>
 * $stateProvider.state("home", {
 *   views: {
 *     "main": {
 *       template: "<h1>HELLO!</h1>"
 *     }
 *   }    
 * })
 * </pre>
 *
 * Really though, you'll use views to set up multiple views:
 * <pre>
 * <div ui-view></div>
 * <div ui-view="chart"></div>
 * <div ui-view="data"></div>
 * </pre>
 *
 * <pre>
 * $stateProvider.state("home", {
 *   views: {
 *     "": {
 *       template: "<h1>HELLO!</h1>"
 *     },
 *     "chart": {
 *       template: "<chart_thing/>"
 *     },
 *     "data": {
 *       template: "<data_thing/>"
 *     }
 *   }    
 * })
 * </pre>
 *
 * Examples for `autoscroll`:
 *
 * <pre>
 * <!-- If autoscroll present with no expression,
 *      then scroll ui-view into view -->
 * <ui-view autoscroll/>
 *
 * <!-- If autoscroll present with valid expression,
 *      then scroll ui-view into view if expression evaluates to true -->
 * <ui-view autoscroll='true'/>
 * <ui-view autoscroll='false'/>
 * <ui-view autoscroll='scopeVariable'/>
 * </pre>
 *
 * Resolve data:
 *
 * The resolved data from the state's `resolve` block is placed on the scope as `$resolve` (this
 * can be customized using [[ViewDeclaration.resolveAs]]).  This can be then accessed from the template.
 *
 * Note that when `controllerAs` is being used, `$resolve` is set on the controller instance *after* the
 * controller is instantiated.  The `$onInit()` hook can be used to perform initialization code which
 * depends on `$resolve` data.
 *
 * Example usage of $resolve in a view template
 * <pre>
 * $stateProvider.state('home', {
 *   template: '<my-component user="$resolve.user"></my-component>',
 *   resolve: {
 *     user: function(UserService) { return UserService.fetchUser(); }
 *   }
 * });
 * </pre>
 */
$ViewDirective.$inject = ['$state', '$injector', '$uiViewScroll', '$interpolate', '$q'];
function $ViewDirective(   $state,   $injector,   $uiViewScroll,   $interpolate,   $q) {

  function getService() {
    return ($injector.has) ? function(service) {
      return $injector.has(service) ? $injector.get(service) : null;
    } : function(service) {
      try {
        return $injector.get(service);
      } catch (e) {
        return null;
      }
    };
  }

  var service = getService(),
      $animator = service('$animator'),
      $animate = service('$animate');

  // Returns a set of DOM manipulation functions based on which Angular version
  // it should use
  function getRenderer(attrs, scope) {
    var statics = function() {
      return {
        enter: function (element, target, cb) { target.after(element); cb(); },
        leave: function (element, cb) { element.remove(); cb(); }
      };
    };

    if ($animate) {
      return {
        enter: function(element, target, cb) {
          if (angular.version.minor > 2) {
            $animate.enter(element, null, target).then(cb);
          } else {
            $animate.enter(element, null, target, cb);
          }
        },
        leave: function(element, cb) {
          if (angular.version.minor > 2) {
            $animate.leave(element).then(cb);
          } else {
            $animate.leave(element, cb);
          }
        }
      };
    }

    if ($animator) {
      var animate = $animator && $animator(scope, attrs);

      return {
        enter: function(element, target, cb) {animate.enter(element, null, target); cb(); },
        leave: function(element, cb) { animate.leave(element); cb(); }
      };
    }

    return statics();
  }

  var directive = {
    restrict: 'ECA',
    terminal: true,
    priority: 400,
    transclude: 'element',
    compile: function (tElement, tAttrs, $transclude) {
      return function (scope, $element, attrs) {
        var previousEl, currentEl, currentScope, latestLocals,
            onloadExp     = attrs.onload || '',
            autoScrollExp = attrs.autoscroll,
            renderer      = getRenderer(attrs, scope),
            inherited     = $element.inheritedData('$uiView');

        scope.$on('$stateChangeSuccess', function() {
          updateView(false);
        });

        updateView(true);

        function cleanupLastView() {
          if (previousEl) {
            previousEl.remove();
            previousEl = null;
          }

          if (currentScope) {
            currentScope.$destroy();
            currentScope = null;
          }

          if (currentEl) {
            var $uiViewData = currentEl.data('$uiView');
            renderer.leave(currentEl, function() {
              $uiViewData.$$animLeave.resolve();
              previousEl = null;
            });

            previousEl = currentEl;
            currentEl = null;
          }
        }

        function updateView(firstTime) {
          var newScope,
              name            = getUiViewName(scope, attrs, inherited, $interpolate),
              previousLocals  = name && $state.$current && $state.$current.locals[name];

          if (!firstTime && previousLocals === latestLocals) return; // nothing to do
          newScope = scope.$new();
          latestLocals = $state.$current.locals[name];

          /**
           * @ngdoc event
           * @name ui.router.state.directive:ui-view#$viewContentLoading
           * @eventOf ui.router.state.directive:ui-view
           * @eventType emits on ui-view directive scope
           * @description
           *
           * Fired once the view **begins loading**, *before* the DOM is rendered.
           *
           * @param {Object} event Event object.
           * @param {string} viewName Name of the view.
           */
          newScope.$emit('$viewContentLoading', name);

          var clone = $transclude(newScope, function(clone) {
            var animEnter = $q.defer(), animLeave = $q.defer();
            var viewData = {
              name: name,
              $animEnter: animEnter.promise,
              $animLeave: animLeave.promise,
              $$animLeave: animLeave
            };

            renderer.enter(clone.data('$uiView', viewData), $element, function onUiViewEnter() {
              animEnter.resolve();
              if(currentScope) {
                currentScope.$emit('$viewContentAnimationEnded');
              }

              if (angular.isDefined(autoScrollExp) && !autoScrollExp || scope.$eval(autoScrollExp)) {
                $uiViewScroll(clone);
              }
            });
            cleanupLastView();
          });

          currentEl = clone;
          currentScope = newScope;
          /**
           * @ngdoc event
           * @name ui.router.state.directive:ui-view#$viewContentLoaded
           * @eventOf ui.router.state.directive:ui-view
           * @eventType emits on ui-view directive scope
           * @description
           * Fired once the view is **loaded**, *after* the DOM is rendered.
           *
           * @param {Object} event Event object.
           * @param {string} viewName Name of the view.
           */
          currentScope.$emit('$viewContentLoaded', name);
          currentScope.$eval(onloadExp);
        }
      };
    }
  };

  return directive;
}

$ViewDirectiveFill.$inject = ['$compile', '$controller', '$state', '$interpolate'];
function $ViewDirectiveFill (  $compile,   $controller,   $state,   $interpolate) {
  return {
    restrict: 'ECA',
    priority: -400,
    compile: function (tElement) {
      var initial = tElement.html();
      return function (scope, $element, attrs) {
        var current = $state.$current,
            $uiViewData = $element.data('$uiView'),
            locals  = current && current.locals[$uiViewData.name];

        if (! locals) {
          return;
        }

        extend($uiViewData, { state: locals.$$state });
        $element.html(locals.$template ? locals.$template : initial);

        var resolveData = angular.extend({}, locals);
        scope[locals.$$resolveAs] = resolveData;

        var link = $compile($element.contents());

        if (locals.$$controller) {
          locals.$scope = scope;
          locals.$element = $element;
          var controller = $controller(locals.$$controller, locals);
          if (locals.$$controllerAs) {
            scope[locals.$$controllerAs] = controller;
            scope[locals.$$controllerAs][locals.$$resolveAs] = resolveData;
          }
          if (isFunction(controller.$onInit)) controller.$onInit();
          $element.data('$ngControllerController', controller);
          $element.children().data('$ngControllerController', controller);
        }

        link(scope);
      };
    }
  };
}

/**
 * Shared ui-view code for both directives:
 * Given scope, element, and its attributes, return the view's name
 */
function getUiViewName(scope, attrs, inherited, $interpolate) {
  var name = $interpolate(attrs.uiView || attrs.name || '')(scope);
  return name.indexOf('@') >= 0 ?  name :  (name + '@' + (inherited ? inherited.state.name : ''));
}

angular.module('ui.router.state').directive('uiView', $ViewDirective);
angular.module('ui.router.state').directive('uiView', $ViewDirectiveFill);

function parseStateRef(ref, current) {
  var preparsed = ref.match(/^\s*({[^}]*})\s*$/), parsed;
  if (preparsed) ref = current + '(' + preparsed[1] + ')';
  parsed = ref.replace(/\n/g, " ").match(/^([^(]+?)\s*(\((.*)\))?$/);
  if (!parsed || parsed.length !== 4) throw new Error("Invalid state ref '" + ref + "'");
  return { state: parsed[1], paramExpr: parsed[3] || null };
}

function stateContext(el) {
  var stateData = el.parent().inheritedData('$uiView');

  if (stateData && stateData.state && stateData.state.name) {
    return stateData.state;
  }
}

function getTypeInfo(el) {
  // SVGAElement does not use the href attribute, but rather the 'xlinkHref' attribute.
  var isSvg = Object.prototype.toString.call(el.prop('href')) === '[object SVGAnimatedString]';
  var isForm = el[0].nodeName === "FORM";

  return {
    attr: isForm ? "action" : (isSvg ? 'xlink:href' : 'href'),
    isAnchor: el.prop("tagName").toUpperCase() === "A",
    clickable: !isForm
  };
}

function clickHook(el, $state, $timeout, type, current) {
  return function(e) {
    var button = e.which || e.button, target = current();

    if (!(button > 1 || e.ctrlKey || e.metaKey || e.shiftKey || el.attr('target'))) {
      // HACK: This is to allow ng-clicks to be processed before the transition is initiated:
      var transition = $timeout(function() {
        $state.go(target.state, target.params, target.options);
      });
      e.preventDefault();

      // if the state has no URL, ignore one preventDefault from the <a> directive.
      var ignorePreventDefaultCount = type.isAnchor && !target.href ? 1: 0;

      e.preventDefault = function() {
        if (ignorePreventDefaultCount-- <= 0) $timeout.cancel(transition);
      };
    }
  };
}

function defaultOpts(el, $state) {
  return { relative: stateContext(el) || $state.$current, inherit: true };
}

/**
 * @ngdoc directive
 * @name ui.router.state.directive:ui-sref
 *
 * @requires ui.router.state.$state
 * @requires $timeout
 *
 * @restrict A
 *
 * @description
 * A directive that binds a link (`<a>` tag) to a state. If the state has an associated
 * URL, the directive will automatically generate & update the `href` attribute via
 * the {@link ui.router.state.$state#methods_href $state.href()} method. Clicking
 * the link will trigger a state transition with optional parameters.
 *
 * Also middle-clicking, right-clicking, and ctrl-clicking on the link will be
 * handled natively by the browser.
 *
 * You can also use relative state paths within ui-sref, just like the relative
 * paths passed to `$state.go()`. You just need to be aware that the path is relative
 * to the state that the link lives in, in other words the state that loaded the
 * template containing the link.
 *
 * You can specify options to pass to {@link ui.router.state.$state#methods_go $state.go()}
 * using the `ui-sref-opts` attribute. Options are restricted to `location`, `inherit`,
 * and `reload`.
 *
 * @example
 * Here's an example of how you'd use ui-sref and how it would compile. If you have the
 * following template:
 * <pre>
 * <a ui-sref="home">Home</a> | <a ui-sref="about">About</a> | <a ui-sref="{page: 2}">Next page</a>
 *
 * <ul>
 *     <li ng-repeat="contact in contacts">
 *         <a ui-sref="contacts.detail({ id: contact.id })">{{ contact.name }}</a>
 *     </li>
 * </ul>
 * </pre>
 *
 * Then the compiled html would be (assuming Html5Mode is off and current state is contacts):
 * <pre>
 * <a href="#/home" ui-sref="home">Home</a> | <a href="#/about" ui-sref="about">About</a> | <a href="#/contacts?page=2" ui-sref="{page: 2}">Next page</a>
 *
 * <ul>
 *     <li ng-repeat="contact in contacts">
 *         <a href="#/contacts/1" ui-sref="contacts.detail({ id: contact.id })">Joe</a>
 *     </li>
 *     <li ng-repeat="contact in contacts">
 *         <a href="#/contacts/2" ui-sref="contacts.detail({ id: contact.id })">Alice</a>
 *     </li>
 *     <li ng-repeat="contact in contacts">
 *         <a href="#/contacts/3" ui-sref="contacts.detail({ id: contact.id })">Bob</a>
 *     </li>
 * </ul>
 *
 * <a ui-sref="home" ui-sref-opts="{reload: true}">Home</a>
 * </pre>
 *
 * @param {string} ui-sref 'stateName' can be any valid absolute or relative state
 * @param {Object} ui-sref-opts options to pass to {@link ui.router.state.$state#methods_go $state.go()}
 */
$StateRefDirective.$inject = ['$state', '$timeout'];
function $StateRefDirective($state, $timeout) {
  return {
    restrict: 'A',
    require: ['?^uiSrefActive', '?^uiSrefActiveEq'],
    link: function(scope, element, attrs, uiSrefActive) {
      var ref    = parseStateRef(attrs.uiSref, $state.current.name);
      var def    = { state: ref.state, href: null, params: null };
      var type   = getTypeInfo(element);
      var active = uiSrefActive[1] || uiSrefActive[0];
      var unlinkInfoFn = null;
      var hookFn;

      def.options = extend(defaultOpts(element, $state), attrs.uiSrefOpts ? scope.$eval(attrs.uiSrefOpts) : {});

      var update = function(val) {
        if (val) def.params = angular.copy(val);
        def.href = $state.href(ref.state, def.params, def.options);

        if (unlinkInfoFn) unlinkInfoFn();
        if (active) unlinkInfoFn = active.$$addStateInfo(ref.state, def.params);
        if (def.href !== null) attrs.$set(type.attr, def.href);
      };

      if (ref.paramExpr) {
        scope.$watch(ref.paramExpr, function(val) { if (val !== def.params) update(val); }, true);
        def.params = angular.copy(scope.$eval(ref.paramExpr));
      }
      update();

      if (!type.clickable) return;
      hookFn = clickHook(element, $state, $timeout, type, function() { return def; });
      element.bind("click", hookFn);
      scope.$on('$destroy', function() {
        element.unbind("click", hookFn);
      });
    }
  };
}

/**
 * @ngdoc directive
 * @name ui.router.state.directive:ui-state
 *
 * @requires ui.router.state.uiSref
 *
 * @restrict A
 *
 * @description
 * Much like ui-sref, but will accept named $scope properties to evaluate for a state definition,
 * params and override options.
 *
 * @param {string} ui-state 'stateName' can be any valid absolute or relative state
 * @param {Object} ui-state-params params to pass to {@link ui.router.state.$state#methods_href $state.href()}
 * @param {Object} ui-state-opts options to pass to {@link ui.router.state.$state#methods_go $state.go()}
 */
$StateRefDynamicDirective.$inject = ['$state', '$timeout'];
function $StateRefDynamicDirective($state, $timeout) {
  return {
    restrict: 'A',
    require: ['?^uiSrefActive', '?^uiSrefActiveEq'],
    link: function(scope, element, attrs, uiSrefActive) {
      var type   = getTypeInfo(element);
      var active = uiSrefActive[1] || uiSrefActive[0];
      var group  = [attrs.uiState, attrs.uiStateParams || null, attrs.uiStateOpts || null];
      var watch  = '[' + group.map(function(val) { return val || 'null'; }).join(', ') + ']';
      var def    = { state: null, params: null, options: null, href: null };
      var unlinkInfoFn = null;
      var hookFn;

      function runStateRefLink (group) {
        def.state = group[0]; def.params = group[1]; def.options = group[2];
        def.href = $state.href(def.state, def.params, def.options);

        if (unlinkInfoFn) unlinkInfoFn();
        if (active) unlinkInfoFn = active.$$addStateInfo(def.state, def.params);
        if (def.href) attrs.$set(type.attr, def.href);
      }

      scope.$watch(watch, runStateRefLink, true);
      runStateRefLink(scope.$eval(watch));

      if (!type.clickable) return;
      hookFn = clickHook(element, $state, $timeout, type, function() { return def; });
      element.bind("click", hookFn);
      scope.$on('$destroy', function() {
        element.unbind("click", hookFn);
      });
    }
  };
}


/**
 * @ngdoc directive
 * @name ui.router.state.directive:ui-sref-active
 *
 * @requires ui.router.state.$state
 * @requires ui.router.state.$stateParams
 * @requires $interpolate
 *
 * @restrict A
 *
 * @description
 * A directive working alongside ui-sref to add classes to an element when the
 * related ui-sref directive's state is active, and removing them when it is inactive.
 * The primary use-case is to simplify the special appearance of navigation menus
 * relying on `ui-sref`, by having the "active" state's menu button appear different,
 * distinguishing it from the inactive menu items.
 *
 * ui-sref-active can live on the same element as ui-sref or on a parent element. The first
 * ui-sref-active found at the same level or above the ui-sref will be used.
 *
 * Will activate when the ui-sref's target state or any child state is active. If you
 * need to activate only when the ui-sref target state is active and *not* any of
 * it's children, then you will use
 * {@link ui.router.state.directive:ui-sref-active-eq ui-sref-active-eq}
 *
 * @example
 * Given the following template:
 * <pre>
 * <ul>
 *   <li ui-sref-active="active" class="item">
 *     <a href ui-sref="app.user({user: 'bilbobaggins'})">@bilbobaggins</a>
 *   </li>
 * </ul>
 * </pre>
 *
 *
 * When the app state is "app.user" (or any children states), and contains the state parameter "user" with value "bilbobaggins",
 * the resulting HTML will appear as (note the 'active' class):
 * <pre>
 * <ul>
 *   <li ui-sref-active="active" class="item active">
 *     <a ui-sref="app.user({user: 'bilbobaggins'})" href="/users/bilbobaggins">@bilbobaggins</a>
 *   </li>
 * </ul>
 * </pre>
 *
 * The class name is interpolated **once** during the directives link time (any further changes to the
 * interpolated value are ignored).
 *
 * Multiple classes may be specified in a space-separated format:
 * <pre>
 * <ul>
 *   <li ui-sref-active='class1 class2 class3'>
 *     <a ui-sref="app.user">link</a>
 *   </li>
 * </ul>
 * </pre>
 *
 * It is also possible to pass ui-sref-active an expression that evaluates
 * to an object hash, whose keys represent active class names and whose
 * values represent the respective state names/globs.
 * ui-sref-active will match if the current active state **includes** any of
 * the specified state names/globs, even the abstract ones.
 *
 * @Example
 * Given the following template, with "admin" being an abstract state:
 * <pre>
 * <div ui-sref-active="{'active': 'admin.*'}">
 *   <a ui-sref-active="active" ui-sref="admin.roles">Roles</a>
 * </div>
 * </pre>
 *
 * When the current state is "admin.roles" the "active" class will be applied
 * to both the <div> and <a> elements. It is important to note that the state
 * names/globs passed to ui-sref-active shadow the state provided by ui-sref.
 */

/**
 * @ngdoc directive
 * @name ui.router.state.directive:ui-sref-active-eq
 *
 * @requires ui.router.state.$state
 * @requires ui.router.state.$stateParams
 * @requires $interpolate
 *
 * @restrict A
 *
 * @description
 * The same as {@link ui.router.state.directive:ui-sref-active ui-sref-active} but will only activate
 * when the exact target state used in the `ui-sref` is active; no child states.
 *
 */
$StateRefActiveDirective.$inject = ['$state', '$stateParams', '$interpolate'];
function $StateRefActiveDirective($state, $stateParams, $interpolate) {
  return  {
    restrict: "A",
    controller: ['$scope', '$element', '$attrs', '$timeout', function ($scope, $element, $attrs, $timeout) {
      var states = [], activeClasses = {}, activeEqClass, uiSrefActive;

      // There probably isn't much point in $observing this
      // uiSrefActive and uiSrefActiveEq share the same directive object with some
      // slight difference in logic routing
      activeEqClass = $interpolate($attrs.uiSrefActiveEq || '', false)($scope);

      try {
        uiSrefActive = $scope.$eval($attrs.uiSrefActive);
      } catch (e) {
        // Do nothing. uiSrefActive is not a valid expression.
        // Fall back to using $interpolate below
      }
      uiSrefActive = uiSrefActive || $interpolate($attrs.uiSrefActive || '', false)($scope);
      if (isObject(uiSrefActive)) {
        forEach(uiSrefActive, function(stateOrName, activeClass) {
          if (isString(stateOrName)) {
            var ref = parseStateRef(stateOrName, $state.current.name);
            addState(ref.state, $scope.$eval(ref.paramExpr), activeClass);
          }
        });
      }

      // Allow uiSref to communicate with uiSrefActive[Equals]
      this.$$addStateInfo = function (newState, newParams) {
        // we already got an explicit state provided by ui-sref-active, so we
        // shadow the one that comes from ui-sref
        if (isObject(uiSrefActive) && states.length > 0) {
          return;
        }
        var deregister = addState(newState, newParams, uiSrefActive);
        update();
        return deregister;
      };

      $scope.$on('$stateChangeSuccess', update);

      function addState(stateName, stateParams, activeClass) {
        var state = $state.get(stateName, stateContext($element));
        var stateHash = createStateHash(stateName, stateParams);

        var stateInfo = {
          state: state || { name: stateName },
          params: stateParams,
          hash: stateHash
        };

        states.push(stateInfo);
        activeClasses[stateHash] = activeClass;

        return function removeState() {
          var idx = states.indexOf(stateInfo);
          if (idx !== -1) states.splice(idx, 1);
        };
      }

      /**
       * @param {string} state
       * @param {Object|string} [params]
       * @return {string}
       */
      function createStateHash(state, params) {
        if (!isString(state)) {
          throw new Error('state should be a string');
        }
        if (isObject(params)) {
          return state + toJson(params);
        }
        params = $scope.$eval(params);
        if (isObject(params)) {
          return state + toJson(params);
        }
        return state;
      }

      // Update route state
      function update() {
        for (var i = 0; i < states.length; i++) {
          if (anyMatch(states[i].state, states[i].params)) {
            addClass($element, activeClasses[states[i].hash]);
          } else {
            removeClass($element, activeClasses[states[i].hash]);
          }

          if (exactMatch(states[i].state, states[i].params)) {
            addClass($element, activeEqClass);
          } else {
            removeClass($element, activeEqClass);
          }
        }
      }

      function addClass(el, className) { $timeout(function () { el.addClass(className); }); }
      function removeClass(el, className) { el.removeClass(className); }
      function anyMatch(state, params) { return $state.includes(state.name, params); }
      function exactMatch(state, params) { return $state.is(state.name, params); }

      update();
    }]
  };
}

angular.module('ui.router.state')
  .directive('uiSref', $StateRefDirective)
  .directive('uiSrefActive', $StateRefActiveDirective)
  .directive('uiSrefActiveEq', $StateRefActiveDirective)
  .directive('uiState', $StateRefDynamicDirective);

/**
 * @ngdoc filter
 * @name ui.router.state.filter:isState
 *
 * @requires ui.router.state.$state
 *
 * @description
 * Translates to {@link ui.router.state.$state#methods_is $state.is("stateName")}.
 */
$IsStateFilter.$inject = ['$state'];
function $IsStateFilter($state) {
  var isFilter = function (state, params) {
    return $state.is(state, params);
  };
  isFilter.$stateful = true;
  return isFilter;
}

/**
 * @ngdoc filter
 * @name ui.router.state.filter:includedByState
 *
 * @requires ui.router.state.$state
 *
 * @description
 * Translates to {@link ui.router.state.$state#methods_includes $state.includes('fullOrPartialStateName')}.
 */
$IncludedByStateFilter.$inject = ['$state'];
function $IncludedByStateFilter($state) {
  var includesFilter = function (state, params, options) {
    return $state.includes(state, params, options);
  };
  includesFilter.$stateful = true;
  return  includesFilter;
}

angular.module('ui.router.state')
  .filter('isState', $IsStateFilter)
  .filter('includedByState', $IncludedByStateFilter);
})(window, window.angular);