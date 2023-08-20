// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/streams-node-transform@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.0.3-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import{isPrimitive as o}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-copy@esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-inherit@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-property@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/time-tic@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/time-toc@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-trim@v0.0.2-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-replace@v0.0.2-esm/index.mjs";import{REGEXP as v}from"https://cdn.jsdelivr.net/gh/stdlib-js/regexp-eol@esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-null@esm/index.mjs";import{isPrimitive as g}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import w from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-browser@esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-node-writable-stream-like@esm/index.mjs";import _ from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-pick@esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-omit@esm/index.mjs";import k from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.0.14-esm/index.mjs";import x from"https://cdn.jsdelivr.net/gh/stdlib-js/string-from-code-point@esm/index.mjs";function E(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var n=function e(){if(this instanceof e){var n=[null];n.push.apply(n,arguments);var r=Function.bind.apply(t,n);return new r}return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:function(){return e[t]}})})),n}function T(){}function L(){L.init.call(this)}function O(e){return void 0===e._maxListeners?L.defaultMaxListeners:e._maxListeners}function C(e,t,n){if(t)e.call(n);else for(var r=e.length,i=q(e,r),o=0;o<r;++o)i[o].call(n)}function M(e,t,n,r){if(t)e.call(n,r);else for(var i=e.length,o=q(e,i),s=0;s<i;++s)o[s].call(n,r)}function S(e,t,n,r,i){if(t)e.call(n,r,i);else for(var o=e.length,s=q(e,o),a=0;a<o;++a)s[a].call(n,r,i)}function A(e,t,n,r,i,o){if(t)e.call(n,r,i,o);else for(var s=e.length,a=q(e,s),u=0;u<s;++u)a[u].call(n,r,i,o)}function P(e,t,n,r){if(t)e.apply(n,r);else for(var i=e.length,o=q(e,i),s=0;s<i;++s)o[s].apply(n,r)}function V(e,t,n,r){var i,o,s,a;if("function"!=typeof n)throw new TypeError('"listener" argument must be a function');if((o=e._events)?(o.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),o=e._events),s=o[t]):(o=e._events=new T,e._eventsCount=0),s){if("function"==typeof s?s=o[t]=r?[n,s]:[s,n]:r?s.unshift(n):s.push(n),!s.warned&&(i=O(e))&&i>0&&s.length>i){s.warned=!0;var u=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+t+" listeners added. Use emitter.setMaxListeners() to increase limit");u.name="MaxListenersExceededWarning",u.emitter=e,u.type=t,u.count=s.length,a=u,"function"==typeof console.warn?console.warn(a):console.log(a)}}else s=o[t]=n,++e._eventsCount;return e}function D(e,t,n){var r=!1;function i(){e.removeListener(t,i),r||(r=!0,n.apply(e,arguments))}return i.listener=n,i}function N(e){var t=this._events;if(t){var n=t[e];if("function"==typeof n)return 1;if(n)return n.length}return 0}function q(e,t){for(var n=new Array(t);t--;)n[t]=e[t];return n}T.prototype=Object.create(null),L.EventEmitter=L,L.usingDomains=!1,L.prototype.domain=void 0,L.prototype._events=void 0,L.prototype._maxListeners=void 0,L.defaultMaxListeners=10,L.init=function(){this.domain=null,L.usingDomains&&undefined.active,this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=new T,this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},L.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||isNaN(e))throw new TypeError('"n" argument must be a positive number');return this._maxListeners=e,this},L.prototype.getMaxListeners=function(){return O(this)},L.prototype.emit=function(e){var t,n,r,i,o,s,a,u="error"===e;if(s=this._events)u=u&&null==s.error;else if(!u)return!1;if(a=this.domain,u){if(t=arguments[1],!a){if(t instanceof Error)throw t;var l=new Error('Uncaught, unspecified "error" event. ('+t+")");throw l.context=t,l}return t||(t=new Error('Uncaught, unspecified "error" event')),t.domainEmitter=this,t.domain=a,t.domainThrown=!1,a.emit("error",t),!1}if(!(n=s[e]))return!1;var c="function"==typeof n;switch(r=arguments.length){case 1:C(n,c,this);break;case 2:M(n,c,this,arguments[1]);break;case 3:S(n,c,this,arguments[1],arguments[2]);break;case 4:A(n,c,this,arguments[1],arguments[2],arguments[3]);break;default:for(i=new Array(r-1),o=1;o<r;o++)i[o-1]=arguments[o];P(n,c,this,i)}return!0},L.prototype.addListener=function(e,t){return V(this,e,t,!1)},L.prototype.on=L.prototype.addListener,L.prototype.prependListener=function(e,t){return V(this,e,t,!0)},L.prototype.once=function(e,t){if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');return this.on(e,D(this,e,t)),this},L.prototype.prependOnceListener=function(e,t){if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');return this.prependListener(e,D(this,e,t)),this},L.prototype.removeListener=function(e,t){var n,r,i,o,s;if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');if(!(r=this._events))return this;if(!(n=r[e]))return this;if(n===t||n.listener&&n.listener===t)0==--this._eventsCount?this._events=new T:(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(i=-1,o=n.length;o-- >0;)if(n[o]===t||n[o].listener&&n[o].listener===t){s=n[o].listener,i=o;break}if(i<0)return this;if(1===n.length){if(n[0]=void 0,0==--this._eventsCount)return this._events=new T,this;delete r[e]}else!function(e,t){for(var n=t,r=n+1,i=e.length;r<i;n+=1,r+=1)e[n]=e[r];e.pop()}(n,i);r.removeListener&&this.emit("removeListener",e,s||t)}return this},L.prototype.off=function(e,t){return this.removeListener(e,t)},L.prototype.removeAllListeners=function(e){var t,n;if(!(n=this._events))return this;if(!n.removeListener)return 0===arguments.length?(this._events=new T,this._eventsCount=0):n[e]&&(0==--this._eventsCount?this._events=new T:delete n[e]),this;if(0===arguments.length){for(var r,i=Object.keys(n),o=0;o<i.length;++o)"removeListener"!==(r=i[o])&&this.removeAllListeners(r);return this.removeAllListeners("removeListener"),this._events=new T,this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(t)do{this.removeListener(e,t[t.length-1])}while(t[0]);return this},L.prototype.listeners=function(e){var t,n=this._events;return n&&(t=n[e])?"function"==typeof t?[t.listener||t]:function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(t):[]},L.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):N.call(e,t)},L.prototype.listenerCount=N,L.prototype.eventNames=function(){return this._eventsCount>0?Reflect.ownKeys(this._events):[]};var F=E(Object.freeze({__proto__:null,EventEmitter:L,default:L})),I=setTimeout,z=clearTimeout;var K=/^#\s*/;function U(e){setTimeout(e,0)}var R=F.EventEmitter;function W(e,n,r){var i,o,s,a;return this instanceof W?(s=this,i=!1,o=!1,R.call(this),t(this,"_benchmark",r),t(this,"_skip",n.skip),f(this,"_ended",{configurable:!1,enumerable:!1,writable:!0,value:!1}),f(this,"_running",{configurable:!1,enumerable:!1,writable:!0,value:!1}),f(this,"_exited",{configurable:!1,enumerable:!1,writable:!0,value:!1}),f(this,"_count",{configurable:!1,enumerable:!1,writable:!0,value:0}),t(this,"name",e),t(this,"tic",(function(){i?s.fail(".tic() called more than once"):(s.emit("tic"),i=!0,a=m())})),t(this,"toc",(function(){var e,t,n,r;if(!1===i)return s.fail(".toc() called before .tic()");if(e=h(a),o)return s.fail(".toc() called more than once");o=!0,s.emit("toc"),t=e[0]+e[1]/1e9,n=s.iterations/t,r={ok:!0,operator:"result",iterations:s.iterations,elapsed:t,rate:n},s.emit("result",r)})),t(this,"iterations",n.iterations),t(this,"timeout",n.timeout),this):new W(e,n,r)}c(W,R),t(W.prototype,"run",(function(){var e,t;if(this._skip)return this.comment("SKIP "+this.name),this.end();if(!this._benchmark)return this.comment("TODO "+this.name),this.end();e=this,this._running=!0,t=I((function(){e.fail("benchmark timed out after "+e.timeout+"ms")}),this.timeout),this.once("end",(function(){z(t)})),this.emit("prerun"),this._benchmark(this),this.emit("run")})),t(W.prototype,"exit",(function(){this._exited||this._ended||(this._exited=!0,this.fail("benchmark exited without ending"),this._running||this.end())})),t(W.prototype,"ended",(function(){return this._ended})),t(W.prototype,"_assert",(function(e,t){var n;n={id:this._count,ok:e,skip:t.skip,todo:t.todo,name:t.message||"(unnamed assert)",operator:t.operator},u(t,"actual")&&(n.actual=t.actual),u(t,"expected")&&(n.expected=t.expected),e||(n.error=t.error||new Error(this.name)),this._count+=1,this.emit("result",n)})),t(W.prototype,"comment",(function(e){var t,n;for(t=(e=p(e)).split(v),n=0;n<t.length;n++)e=p(t[n]),e=d(e,K,""),this.emit("result",e)})),t(W.prototype,"skip",(function(e,t){this._assert(!0,{message:t,operator:"skip",skip:!0})})),t(W.prototype,"todo",(function(e,t){this._assert(!!e,{message:t,operator:"todo",todo:!0})})),t(W.prototype,"fail",(function(e){this._assert(!1,{message:e,operator:"fail"})})),t(W.prototype,"pass",(function(e){this._assert(!0,{message:e,operator:"pass"})})),t(W.prototype,"ok",(function(e,t){this._assert(!!e,{message:t||"should be truthy",operator:"ok",expected:!0,actual:e})})),t(W.prototype,"notOk",(function(e,t){this._assert(!e,{message:t||"should be falsy",operator:"notOk",expected:!1,actual:e})})),t(W.prototype,"equal",(function(e,t,n){this._assert(e===t,{message:n||"should be equal",operator:"equal",expected:t,actual:e})})),t(W.prototype,"notEqual",(function(e,t,n){this._assert(e!==t,{message:n||"should not be equal",operator:"notEqual",expected:t,actual:e})})),t(W.prototype,"deepEqual",(function(e,t,n){this.comment("actual: "+e+". expected: "+t+". msg: "+n+".")})),t(W.prototype,"notDeepEqual",(function(e,t,n){this.comment("actual: "+e+". expected: "+t+". msg: "+n+".")})),t(W.prototype,"end",(function(){var e=this;this._ended?this.fail(".end() called more than once"):U((function(){e.emit("end")})),this._ended=!0,this._running=!1}));var B=/\s+/g;var G=F.EventEmitter;function H(){return this instanceof H?(G.call(this),f(this,"_benchmarks",{value:[],configurable:!1,writable:!1,enumerable:!1}),f(this,"_stream",{value:new e,configurable:!1,writable:!1,enumerable:!1}),f(this,"_closed",{value:!1,configurable:!1,writable:!0,enumerable:!1}),f(this,"_running",{value:!1,configurable:!1,writable:!0,enumerable:!1}),f(this,"total",{value:0,configurable:!1,writable:!0,enumerable:!0}),f(this,"fail",{value:0,configurable:!1,writable:!0,enumerable:!0}),f(this,"pass",{value:0,configurable:!1,writable:!0,enumerable:!0}),f(this,"skip",{value:0,configurable:!1,writable:!0,enumerable:!0}),f(this,"todo",{value:0,configurable:!1,writable:!0,enumerable:!0}),this):new H}c(H,G),f(H.prototype,"push",{value:function(e){var t=this;this._benchmarks.push(e),e.once("prerun",(function(){t._stream.write("# "+e.name+"\n")})),e.on("result",(function(e){if(o(e))return t._stream.write("# "+e+"\n");if("result"===e.operator)return r="  ---\n",r+="  iterations: "+(n=e).iterations+"\n",r+="  elapsed: "+n.elapsed+"\n",r+="  rate: "+n.rate+"\n",e=r+"  ...\n",t._stream.write(e);var n,r;t.total+=1,e.ok?(e.skip?t.skip+=1:e.todo&&(t.todo+=1),t.pass+=1):e.todo?(t.pass+=1,t.todo+=1):t.fail+=1;e=function(e,t){var n,r,i,o,s,a,l,c;if(l="",e.ok||(l+="not "),l+="ok "+t,e.name&&(l+=" "+d(e.name.toString(),B," ")),e.skip?l+=" # SKIP":e.todo&&(l+=" # TODO"),l+="\n",e.ok)return l;if(l+="  ---\n",l+="  operator: "+e.operator+"\n",(u(e,"actual")||u(e,"expected"))&&(i=e.expected,(o=e.actual)!=o&&i!=i))throw new Error("unexpected error.");if(e.at&&(l+="  at: "+e.at+"\n"),e.actual&&(n=e.actual.stack),e.error&&(r=e.error.stack),s=n||r)for(a=s.toString().split(v),l+="  stack: |-\n",c=0;c<a.length;c++)l+="    "+a[c]+"\n";return l+"  ...\n"}(e,t.total),t._stream.write(e)})),this.emit("_push",e)},configurable:!1,writable:!1,enumerable:!1}),f(H.prototype,"createStream",{value:function(t){var n,r,i,s;return i=this,n=new e(r=arguments.length?t:{}),r.objectMode?(s=0,this.on("_push",c),this.on("done",f)):(n.write("TAP version 13\n"),this._stream.pipe(n)),this.on("_run",l),n;function a(){U(u)}function u(){var e=i._benchmarks.shift();if(e)return e.run(),e.ended()?a():e.once("end",a);i._running=!1,i.emit("done")}function l(){if(!i._running)return i._running=!0,a()}function c(e){var t=s;s+=1,e.once("prerun",(function(){var r={type:"benchmark",name:e.name,id:t};n.write(r)})),e.on("result",(function(e){o(e)?e={benchmark:t,type:"comment",name:e}:"result"===e.operator?(e.benchmark=t,e.type="result"):(e.benchmark=t,e.type="assert");n.write(e)})),e.on("end",(function(){n.write({benchmark:t,type:"end"})}))}function f(){n.destroy()}},configurable:!1,writable:!1,enumerable:!1}),f(H.prototype,"run",{value:function(){this.emit("_run")},configurable:!1,writable:!1,enumerable:!1}),f(H.prototype,"clear",{value:function(){this._benchmarks.length=0},configurable:!1,writable:!1,enumerable:!1}),f(H.prototype,"close",{value:function(){var e=this;this._closed||(this._closed=!0,this._benchmarks.length?(this.clear(),this._stream.write("# WARNING: harness closed before completion.\n")):(this._stream.write("#\n"),this._stream.write("1.."+this.total+"\n"),this._stream.write("# total "+this.total+"\n"),this._stream.write("# pass  "+this.pass+"\n"),this.fail&&this._stream.write("# fail  "+this.fail+"\n"),this.skip&&this._stream.write("# skip  "+this.skip+"\n"),this.todo&&this._stream.write("# todo  "+this.todo+"\n"),this.fail||this._stream.write("#\n# ok\n")),this._stream.once("close",(function(){e.emit("close")})),this._stream.destroy())},configurable:!1,writable:!1,enumerable:!1}),f(H.prototype,"exit",{value:function(){var e,t;for(t=0;t<this._benchmarks.length;t++)this._benchmarks[t].exit();e=this,this.clear(),this._stream.once("close",(function(){e.emit("close")})),this._stream.destroy()},configurable:!1,writable:!1,enumerable:!1});var J={skip:!1,iterations:null,repeats:3,timeout:3e5};function Q(e,t){return a(t)?u(t,"skip")&&(e.skip=t.skip,!s(e.skip))?new TypeError(r("invalid option. `%s` option must be a boolean. Option: `%s`.","skip",e.skip)):!u(t,"iterations")||(e.iterations=t.iterations,g(e.iterations)||b(e.iterations))?u(t,"repeats")&&(e.repeats=t.repeats,!g(e.repeats))?new TypeError(r("invalid option. `%s` option must be a positive integer. Option: `%s`.","repeats",e.repeats)):u(t,"timeout")&&(e.timeout=t.timeout,!g(e.timeout))?new TypeError(r("invalid option. `%s` option must be a positive integer. Option: `%s`.","timeout",e.timeout)):null:new TypeError(r("invalid option. `%s` option must be either a positive integer or null. Option: `%s`.","iterations",e.iterations)):new TypeError(r("invalid argument. Options argument must be an object. Value: `%s`.",t))}function X(e,t,n,r){if(!n)return t.repeats=1,r(e,t,n);if(t.skip)return t.repeats=1,r(e,t,n);function i(i,o){return i?(t.repeats=1,t.iterations=1,r(e,t,n)):(t.iterations=o,r(e,t,n))}!function(e,t,n,r){var i,s,a,u,c;a=0,u=0,(s=l(t)).iterations=1,(c=new W(e,s,n)).on("result",(function(e){o(e)||e.ok||e.todo||(i=!0)})),c.on("tic",(function(){a+=1})),c.on("toc",(function(){u+=1})),c.once("end",(function(){var e;return i?e=new Error("unexpected error. Benchmark failed."):1===a&&1===u||(e=new Error("unexpected error. Invalid benchmark.")),e?r(e):r()})),c.run()}(e,t,n,(function(s){if(s)return t.repeats=1,t.iterations=1,r(e,t,n);if(t.iterations)return r(e,t,n);!function(e,t,n,r){var i,s;return s=0,(i=l(t)).iterations=10,a();function a(){var t=new W(e,i,n);t.on("result",u),t.once("end",c),t.run()}function u(e){o(e)||"result"!==e.operator||(s=e.elapsed)}function c(){if(s<.1&&i.iterations<1e10)return i.iterations*=10,a();r(null,i.iterations)}}(e,t,n,i)}))}function Y(e,c){var f,m,h,p,d;if(p={},1===arguments.length)if(n(e))d=e;else{if(!a(e))throw new TypeError(r("invalid argument. Must provide either an options object or a function. Value: `%s`.",e));p=e}else if(arguments.length>1){if(!a(e))throw new TypeError(r("invalid argument. First argument must be an object. Value: `%s`.",e));if(u(e,"autoclose")&&(p.autoclose=e.autoclose,!s(p.autoclose)))throw new TypeError(r("invalid option. `%s` option must be a boolean. Option: `%s`.","autoclose",p.autoclose));if(!n(d=c))throw new TypeError(r("invalid argument. Second argument must be a function. Value: `%s`.",d))}function v(e,t,i){var s,a,u;if(!o(e))throw new TypeError(r("invalid argument. First argument must be a string. Value: `%s`.",e));if(s=l(J),2===arguments.length){if(n(t))u=t;else if(a=Q(s,t))throw a}else if(arguments.length>2){if(a=Q(s,t))throw a;if(!n(u=i))throw new TypeError(r("invalid argument. Third argument must be a function. Value: `%s`.",u))}return h.push([e,s,u]),1===h.length&&U(b),v}function b(){var e=-1;return t();function t(){var t;if((e+=1)===h.length)return h.length=0,m.run();X((t=h[e])[0],t[1],t[2],n)}function n(e,n,r){var i,o;for(o=0;o<n.repeats;o++)(i=new W(e,n,r)).on("result",g),m.push(i);return t()}}function g(e){o(e)||e.ok||e.todo||(f=1)}function w(e){return arguments.length?m.createStream(e):m.createStream()}function y(){m.close()}function _(){m.exit()}function j(){return f}return m=new H,p.autoclose&&m.once("done",y),d&&m.once("done",d),f=0,h=[],t(v,"createStream",w),t(v,"close",y),t(v,"exit",_),i(v,"exitCode",j),v}var Z="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function $(){throw new Error("setTimeout has not been defined")}function ee(){throw new Error("clearTimeout has not been defined")}var te=$,ne=ee;function re(e){if(te===setTimeout)return setTimeout(e,0);if((te===$||!te)&&setTimeout)return te=setTimeout,setTimeout(e,0);try{return te(e,0)}catch(t){try{return te.call(null,e,0)}catch(t){return te.call(this,e,0)}}}"function"==typeof Z.setTimeout&&(te=setTimeout),"function"==typeof Z.clearTimeout&&(ne=clearTimeout);var ie,oe=[],se=!1,ae=-1;function ue(){se&&ie&&(se=!1,ie.length?oe=ie.concat(oe):ae=-1,oe.length&&le())}function le(){if(!se){var e=re(ue);se=!0;for(var t=oe.length;t;){for(ie=oe,oe=[];++ae<t;)ie&&ie[ae].run();ae=-1,t=oe.length}ie=null,se=!1,function(e){if(ne===clearTimeout)return clearTimeout(e);if((ne===ee||!ne)&&clearTimeout)return ne=clearTimeout,clearTimeout(e);try{ne(e)}catch(t){try{return ne.call(null,e)}catch(t){return ne.call(this,e)}}}(e)}}function ce(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];oe.push(new fe(e,t)),1!==oe.length||se||re(le)}function fe(e,t){this.fun=e,this.array=t}fe.prototype.run=function(){this.fun.apply(null,this.array)};var me={},he=[],pe={},de={},ve={};function be(){}var ge=be,we=be,ye=be,_e=be,je=be,ke=be,xe=be;function Ee(e){throw new Error("process.binding is not supported")}function Te(){return"/"}function Le(e){throw new Error("process.chdir is not supported")}function Oe(){return 0}var Ce=Z.performance||{},Me=Ce.now||Ce.mozNow||Ce.msNow||Ce.oNow||Ce.webkitNow||function(){return(new Date).getTime()};function Se(e){var t=.001*Me.call(Ce),n=Math.floor(t),r=Math.floor(t%1*1e9);return e&&(n-=e[0],(r-=e[1])<0&&(n--,r+=1e9)),[n,r]}var Ae=new Date;function Pe(){return(new Date-Ae)/1e3}var Ve,De={nextTick:ce,title:"browser",browser:true,env:me,argv:he,version:"",versions:pe,on:ge,addListener:we,once:ye,off:_e,removeListener:je,removeAllListeners:ke,emit:xe,binding:Ee,cwd:Te,chdir:Le,umask:Oe,hrtime:Se,platform:"browser",release:de,config:ve,uptime:Pe},Ne=E(Object.freeze({__proto__:null,addListener:we,argv:he,binding:Ee,browser:true,chdir:Le,config:ve,cwd:Te,default:De,emit:xe,env:me,hrtime:Se,nextTick:ce,off:_e,on:ge,once:ye,platform:"browser",release:de,removeAllListeners:ke,removeListener:je,title:"browser",umask:Oe,uptime:Pe,version:"",versions:pe})),qe=Ne&&"function"==typeof Ne.exit,Fe=!w&&qe;function Ie(){var t,n;return t=new e({transform:function(e,t,i){var o,s;for(s=0;s<e.length;s++)"\n"===(o=x(e[s]))?r():n+=o;i()},flush:r}),n="",t;function r(e){try{r=n,console.log(r)}catch(e){t.emit("error",e)}var r;if(n="",e)return e()}}function ze(){var e,t,i,o,l,c,f;if(0===arguments.length)o={},f=k;else if(1===arguments.length)if(n(arguments[0]))o={},f=arguments[0];else{if(!a(arguments[0]))throw new TypeError(r("invalid argument. Must provide either an options object or a function. Value: `%s`.",arguments[0]));o=arguments[0],f=k}else{if(!a(o=arguments[0]))throw new TypeError(r("invalid argument. First argument must be an object. Value: `%s`.",o));if(!n(f=arguments[1]))throw new TypeError(r("invalid argument. Second argument must be a function. Value: `%s`.",f))}if(c={},u(o,"autoclose")&&(c.autoclose=o.autoclose,!s(c.autoclose)))throw new TypeError(r("invalid option. `%s` option must be a boolean. Option: `%s`.","autoclose",c.autoclose));if(u(o,"stream")&&(c.stream=o.stream,!y(c.stream)))throw new TypeError(r("invalid option. `%s` option must be a writable stream. Option: `%s`.","stream",c.stream));return e=0,l=_(c,["autoclose"]),i=Y(l,m),l=j(o,["autoclose","stream"]),t=i.createStream(l).pipe(c.stream||Ie()),Fe&&(t.on("error",h),Ne.on("exit",p)),i;function m(){return f()}function h(){e=1}function p(t){0===t&&(i.close(),Ne.exit(e||i.exitCode))}}function Ke(e,t){var n,r;return Ve||(arguments.length>1?(n=e,r=t):(n={},r=e),n.autoclose=!Fe,Ve=ze(n,r),Ke.cached=!0,Ve)}var Ue=[];function Re(){var e,t;for(e=Ue.length,t=0;t<e;t++)Ue.shift()()}function We(e,t,n){var r=Ke(Re);return arguments.length<2?r(e):2===arguments.length?r(e,t):r(e,t,n),We}t(We,"createHarness",Y),t(We,"createStream",(function(t){var n,r;return r=arguments.length?t:{},Ke.cached?Ke().createStream(r):(n=new e(r),r.stream=n,Ke(r,Re),n)})),t(We,"onFinish",(function(e){var t;if(!n(e))throw new TypeError(r("invalid argument. Must provide a function. Value: `%s`.",e));for(t=0;t<Ue.length;t++)if(e===Ue[t])throw new Error("invalid argument. Attempted to add duplicate listener.");Ue.push(e)}));export{We as default};
//# sourceMappingURL=index.mjs.map
