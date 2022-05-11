// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/streams-node-transform@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-copy@esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-inherit@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-property@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/time-tic@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/time-toc@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/string-trim@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/string-replace@esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/regexp-eol@esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-null@esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import w from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-browser@esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-node-writable-stream-like@esm/index.mjs";import _ from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-pick@esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-omit@esm/index.mjs";import k from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@esm/index.mjs";import x from"https://cdn.jsdelivr.net/gh/stdlib-js/string-from-code-point@esm/index.mjs";function E(e){if(e.__esModule)return e;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach((function(n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})})),t}function T(){}function L(){L.init.call(this)}function O(e){return void 0===e._maxListeners?L.defaultMaxListeners:e._maxListeners}function P(e,t,n){if(t)e.call(n);else for(var r=e.length,i=q(e,r),o=0;o<r;++o)i[o].call(n)}function C(e,t,n,r){if(t)e.call(n,r);else for(var i=e.length,o=q(e,i),s=0;s<i;++s)o[s].call(n,r)}function M(e,t,n,r,i){if(t)e.call(n,r,i);else for(var o=e.length,s=q(e,o),a=0;a<o;++a)s[a].call(n,r,i)}function S(e,t,n,r,i,o){if(t)e.call(n,r,i,o);else for(var s=e.length,a=q(e,s),u=0;u<s;++u)a[u].call(n,r,i,o)}function A(e,t,n,r){if(t)e.apply(n,r);else for(var i=e.length,o=q(e,i),s=0;s<i;++s)o[s].apply(n,r)}function V(e,t,n,r){var i,o,s,a;if("function"!=typeof n)throw new TypeError('"listener" argument must be a function');if((o=e._events)?(o.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),o=e._events),s=o[t]):(o=e._events=new T,e._eventsCount=0),s){if("function"==typeof s?s=o[t]=r?[n,s]:[s,n]:r?s.unshift(n):s.push(n),!s.warned&&(i=O(e))&&i>0&&s.length>i){s.warned=!0;var u=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+t+" listeners added. Use emitter.setMaxListeners() to increase limit");u.name="MaxListenersExceededWarning",u.emitter=e,u.type=t,u.count=s.length,a=u,"function"==typeof console.warn?console.warn(a):console.log(a)}}else s=o[t]=n,++e._eventsCount;return e}function D(e,t,n){var r=!1;function i(){e.removeListener(t,i),r||(r=!0,n.apply(e,arguments))}return i.listener=n,i}function N(e){var t=this._events;if(t){var n=t[e];if("function"==typeof n)return 1;if(n)return n.length}return 0}function q(e,t){for(var n=new Array(t);t--;)n[t]=e[t];return n}T.prototype=Object.create(null),L.EventEmitter=L,L.usingDomains=!1,L.prototype.domain=void 0,L.prototype._events=void 0,L.prototype._maxListeners=void 0,L.defaultMaxListeners=10,L.init=function(){this.domain=null,L.usingDomains&&undefined.active,this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=new T,this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},L.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||isNaN(e))throw new TypeError('"n" argument must be a positive number');return this._maxListeners=e,this},L.prototype.getMaxListeners=function(){return O(this)},L.prototype.emit=function(e){var t,n,r,i,o,s,a,u="error"===e;if(s=this._events)u=u&&null==s.error;else if(!u)return!1;if(a=this.domain,u){if(t=arguments[1],!a){if(t instanceof Error)throw t;var l=new Error('Uncaught, unspecified "error" event. ('+t+")");throw l.context=t,l}return t||(t=new Error('Uncaught, unspecified "error" event')),t.domainEmitter=this,t.domain=a,t.domainThrown=!1,a.emit("error",t),!1}if(!(n=s[e]))return!1;var c="function"==typeof n;switch(r=arguments.length){case 1:P(n,c,this);break;case 2:C(n,c,this,arguments[1]);break;case 3:M(n,c,this,arguments[1],arguments[2]);break;case 4:S(n,c,this,arguments[1],arguments[2],arguments[3]);break;default:for(i=new Array(r-1),o=1;o<r;o++)i[o-1]=arguments[o];A(n,c,this,i)}return!0},L.prototype.addListener=function(e,t){return V(this,e,t,!1)},L.prototype.on=L.prototype.addListener,L.prototype.prependListener=function(e,t){return V(this,e,t,!0)},L.prototype.once=function(e,t){if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');return this.on(e,D(this,e,t)),this},L.prototype.prependOnceListener=function(e,t){if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');return this.prependListener(e,D(this,e,t)),this},L.prototype.removeListener=function(e,t){var n,r,i,o,s;if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');if(!(r=this._events))return this;if(!(n=r[e]))return this;if(n===t||n.listener&&n.listener===t)0==--this._eventsCount?this._events=new T:(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(i=-1,o=n.length;o-- >0;)if(n[o]===t||n[o].listener&&n[o].listener===t){s=n[o].listener,i=o;break}if(i<0)return this;if(1===n.length){if(n[0]=void 0,0==--this._eventsCount)return this._events=new T,this;delete r[e]}else!function(e,t){for(var n=t,r=n+1,i=e.length;r<i;n+=1,r+=1)e[n]=e[r];e.pop()}(n,i);r.removeListener&&this.emit("removeListener",e,s||t)}return this},L.prototype.off=function(e,t){return this.removeListener(e,t)},L.prototype.removeAllListeners=function(e){var t,n;if(!(n=this._events))return this;if(!n.removeListener)return 0===arguments.length?(this._events=new T,this._eventsCount=0):n[e]&&(0==--this._eventsCount?this._events=new T:delete n[e]),this;if(0===arguments.length){for(var r,i=Object.keys(n),o=0;o<i.length;++o)"removeListener"!==(r=i[o])&&this.removeAllListeners(r);return this.removeAllListeners("removeListener"),this._events=new T,this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(t)do{this.removeListener(e,t[t.length-1])}while(t[0]);return this},L.prototype.listeners=function(e){var t,n=this._events;return n&&(t=n[e])?"function"==typeof t?[t.listener||t]:function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(t):[]},L.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):N.call(e,t)},L.prototype.listenerCount=N,L.prototype.eventNames=function(){return this._eventsCount>0?Reflect.ownKeys(this._events):[]};var F=E(Object.freeze({__proto__:null,default:L,EventEmitter:L})),I=setTimeout,R=clearTimeout,z=I,G=R;var K=function(){var e,t;if(this._skip)return this.comment("SKIP "+this.name),this.end();if(!this._benchmark)return this.comment("TODO "+this.name),this.end();e=this,this._running=!0,t=z((function(){e.fail("benchmark timed out after "+e.timeout+"ms")}),this.timeout),this.once("end",(function(){G(t)})),this.emit("prerun"),this._benchmark(this),this.emit("run")};var U=function(){this._exited||this._ended||(this._exited=!0,this.fail("benchmark exited without ending"),this._running||this.end())};var W=function(){return this._ended},X=u;var B=function(e,t){var n;n={id:this._count,ok:e,skip:t.skip,todo:t.todo,name:t.message||"(unnamed assert)",operator:t.operator},X(t,"actual")&&(n.actual=t.actual),X(t,"expected")&&(n.expected=t.expected),e||(n.error=t.error||new Error(this.name)),this._count+=1,this.emit("result",n)},H=p,J=d,Q=v.REGEXP,Y=/^#\s*/;var Z=function(e){var t,n;for(t=(e=H(e)).split(Q),n=0;n<t.length;n++)e=H(t[n]),e=J(e,Y,""),this.emit("result",e)};var $=function(e,t){this._assert(!0,{message:t,operator:"skip",skip:!0})};var ee=function(e,t){this._assert(!!e,{message:t,operator:"todo",todo:!0})};var te=function(e){this._assert(!1,{message:e,operator:"fail"})};var ne=function(e){this._assert(!0,{message:e,operator:"pass"})};var re=function(e,t){this._assert(!!e,{message:t||"should be truthy",operator:"ok",expected:!0,actual:e})};var ie=function(e,t){this._assert(!e,{message:t||"should be falsy",operator:"notOk",expected:!1,actual:e})};var oe=function(e,t,n){this._assert(e===t,{message:n||"should be equal",operator:"equal",expected:t,actual:e})};var se=function(e,t,n){this._assert(e!==t,{message:n||"should not be equal",operator:"notEqual",expected:t,actual:e})};var ae=function(e,t,n){this.comment("actual: "+e+". expected: "+t+". msg: "+n+".")};var ue=function(e,t,n){this.comment("actual: "+e+". expected: "+t+". msg: "+n+".")};var le=function(e){setTimeout(e,0)},ce=le;var fe=function(){var e=this;this._ended?this.fail(".end() called more than once"):ce((function(){e.emit("end")})),this._ended=!0,this._running=!1},me=F.EventEmitter,he=f,pe=t,de=m,ve=h,be=K,ge=U,we=W,ye=B,_e=Z,je=$,ke=ee,xe=te,Ee=ne,Te=re,Le=ie,Oe=oe,Pe=se,Ce=ae,Me=ue,Se=fe;function Ae(e,t,n){var r,i,o,s;return this instanceof Ae?(o=this,r=!1,i=!1,me.call(this),pe(this,"_benchmark",n),pe(this,"_skip",t.skip),he(this,"_ended",{configurable:!1,enumerable:!1,writable:!0,value:!1}),he(this,"_running",{configurable:!1,enumerable:!1,writable:!0,value:!1}),he(this,"_exited",{configurable:!1,enumerable:!1,writable:!0,value:!1}),he(this,"_count",{configurable:!1,enumerable:!1,writable:!0,value:0}),pe(this,"name",e),pe(this,"tic",(function(){r?o.fail(".tic() called more than once"):(o.emit("tic"),r=!0,s=de())})),pe(this,"toc",(function(){var e,t,n,a;if(!1===r)return o.fail(".toc() called before .tic()");if(e=ve(s),i)return o.fail(".toc() called more than once");i=!0,o.emit("toc"),t=e[0]+e[1]/1e9,n=o.iterations/t,a={ok:!0,operator:"result",iterations:o.iterations,elapsed:t,rate:n},o.emit("result",a)})),pe(this,"iterations",t.iterations),pe(this,"timeout",t.timeout),this):new Ae(e,t,n)}c(Ae,me),pe(Ae.prototype,"run",be),pe(Ae.prototype,"exit",ge),pe(Ae.prototype,"ended",we),pe(Ae.prototype,"_assert",ye),pe(Ae.prototype,"comment",_e),pe(Ae.prototype,"skip",je),pe(Ae.prototype,"todo",ke),pe(Ae.prototype,"fail",xe),pe(Ae.prototype,"pass",Ee),pe(Ae.prototype,"ok",Te),pe(Ae.prototype,"notOk",Le),pe(Ae.prototype,"equal",Oe),pe(Ae.prototype,"notEqual",Pe),pe(Ae.prototype,"deepEqual",Ce),pe(Ae.prototype,"notDeepEqual",Me),pe(Ae.prototype,"end",Se);var Ve=Ae,De=d,Ne=u,qe=v.REGEXP,Fe=/\s+/g;var Ie=function(e,t){var n,r,i,o,s,a,u,l;if(u="",e.ok||(u+="not "),u+="ok "+t,e.name&&(u+=" "+De(e.name.toString(),Fe," ")),e.skip?u+=" # SKIP":e.todo&&(u+=" # TODO"),u+="\n",e.ok)return u;if("  ",u+="  ---\n",u+="  operator: "+e.operator+"\n",(Ne(e,"actual")||Ne(e,"expected"))&&(i=e.expected,(o=e.actual)!=o&&i!=i))throw new Error("unexpected error.");if(e.at&&(u+="  at: "+e.at+"\n"),e.actual&&(n=e.actual.stack),e.error&&(r=e.error.stack),s=n||r)for(a=s.toString().split(qe),u+="  stack: |-\n",l=0;l<a.length;l++)u+="    "+a[l]+"\n";return u+="  ...\n"};var Re=function(e){var t="  ---\n";return t+="  iterations: "+e.iterations+"\n",t+="  elapsed: "+e.elapsed+"\n",t+="  rate: "+e.rate+"\n",t+="  ...\n"},ze=o.isPrimitive,Ge=Ie,Ke=Re;var Ue=function(e){var t=this;this._benchmarks.push(e),e.once("prerun",(function(){t._stream.write("# "+e.name+"\n")})),e.on("result",(function(e){if(ze(e))return t._stream.write("# "+e+"\n");if("result"===e.operator)return e=Ke(e),t._stream.write(e);t.total+=1,e.ok?(e.skip?t.skip+=1:e.todo&&(t.todo+=1),t.pass+=1):e.todo?(t.pass+=1,t.todo+=1):t.fail+=1;e=Ge(e,t.total),t._stream.write(e)})),this.emit("_push",e)},We=e,Xe=o.isPrimitive,Be=le;var He=function(e){var t,n,r,i;return r=this,t=new We(n=arguments.length?e:{}),n.objectMode?(i=0,this.on("_push",u),this.on("done",l)):(t.write("TAP version 13\n"),this._stream.pipe(t)),this.on("_run",a),t;function o(){Be(s)}function s(){var e=r._benchmarks.shift();if(e)return e.run(),e.ended()?o():e.once("end",o);r._running=!1,r.emit("done")}function a(){if(!r._running)return r._running=!0,o()}function u(e){var n=i;i+=1,e.once("prerun",(function(){var r={type:"benchmark",name:e.name,id:n};t.write(r)})),e.on("result",(function(e){Xe(e)?e={benchmark:n,type:"comment",name:e}:"result"===e.operator?(e.benchmark=n,e.type="result"):(e.benchmark=n,e.type="assert");t.write(e)})),e.on("end",(function(){t.write({benchmark:n,type:"end"})}))}function l(){t.destroy()}};var Je=function(){this.emit("_run")};var Qe=function(){this._benchmarks.length=0};var Ye=function(){var e=this;this._closed||(this._closed=!0,this._benchmarks.length?(this.clear(),this._stream.write("# WARNING: harness closed before completion.\n")):(this._stream.write("#\n"),this._stream.write("1.."+this.total+"\n"),this._stream.write("# total "+this.total+"\n"),this._stream.write("# pass  "+this.pass+"\n"),this.fail&&this._stream.write("# fail  "+this.fail+"\n"),this.skip&&this._stream.write("# skip  "+this.skip+"\n"),this.todo&&this._stream.write("# todo  "+this.todo+"\n"),this.fail||this._stream.write("#\n# ok\n")),this._stream.once("close",(function(){e.emit("close")})),this._stream.destroy())};var Ze=function(){var e,t;for(t=0;t<this._benchmarks.length;t++)this._benchmarks[t].exit();e=this,this.clear(),this._stream.once("close",(function(){e.emit("close")})),this._stream.destroy()},$e=F.EventEmitter,et=f,tt=e,nt=Ue,rt=He,it=Je,ot=Qe,st=Ye,at=Ze;function ut(){return this instanceof ut?($e.call(this),et(this,"_benchmarks",{value:[],configurable:!1,writable:!1,enumerable:!1}),et(this,"_stream",{value:new tt,configurable:!1,writable:!1,enumerable:!1}),et(this,"_closed",{value:!1,configurable:!1,writable:!0,enumerable:!1}),et(this,"_running",{value:!1,configurable:!1,writable:!0,enumerable:!1}),et(this,"total",{value:0,configurable:!1,writable:!0,enumerable:!0}),et(this,"fail",{value:0,configurable:!1,writable:!0,enumerable:!0}),et(this,"pass",{value:0,configurable:!1,writable:!0,enumerable:!0}),et(this,"skip",{value:0,configurable:!1,writable:!0,enumerable:!0}),et(this,"todo",{value:0,configurable:!1,writable:!0,enumerable:!0}),this):new ut}c(ut,$e),et(ut.prototype,"push",{value:nt,configurable:!1,writable:!1,enumerable:!1}),et(ut.prototype,"createStream",{value:rt,configurable:!1,writable:!1,enumerable:!1}),et(ut.prototype,"run",{value:it,configurable:!1,writable:!1,enumerable:!1}),et(ut.prototype,"clear",{value:ot,configurable:!1,writable:!1,enumerable:!1}),et(ut.prototype,"close",{value:st,configurable:!1,writable:!1,enumerable:!1}),et(ut.prototype,"exit",{value:at,configurable:!1,writable:!1,enumerable:!1});var lt=ut,ct={skip:!1,iterations:null,repeats:3,timeout:3e5},ft=a,mt=u,ht=s.isPrimitive,pt=b,dt=g.isPrimitive,vt=r;var bt=function(e,t){return ft(t)?mt(t,"skip")&&(e.skip=t.skip,!ht(e.skip))?new TypeError(vt("invalid option. `%s` option must be a boolean. Option: `%s`.","skip",e.skip)):!mt(t,"iterations")||(e.iterations=t.iterations,dt(e.iterations)||pt(e.iterations))?mt(t,"repeats")&&(e.repeats=t.repeats,!dt(e.repeats))?new TypeError(vt("invalid option. `%s` option must be a positive integer. Option: `%s`.","repeats",e.repeats)):mt(t,"timeout")&&(e.timeout=t.timeout,!dt(e.timeout))?new TypeError(vt("invalid option. `%s` option must be a positive integer. Option: `%s`.","timeout",e.timeout)):null:new TypeError(vt("invalid option. `%s` option must be either a positive integer or null. Option: `%s`.","iterations",e.iterations)):new TypeError(vt("invalid argument. Options argument must be an object. Value: `%s`.",t))},gt=o.isPrimitive,wt=l,yt=Ve;var _t=function(e,t,n,r){var i,o,s,a,u;s=0,a=0,(o=wt(t)).iterations=1,(u=new yt(e,o,n)).on("result",(function(e){gt(e)||e.ok||e.todo||(i=!0)})),u.on("tic",(function(){s+=1})),u.on("toc",(function(){a+=1})),u.once("end",(function(){var e;i?e=new Error("unexpected error. Benchmark failed."):1===s&&1===a||(e=new Error("unexpected error. Invalid benchmark."));if(e)return r(e);return r()})),u.run()},jt=o.isPrimitive,kt=l,xt=Ve;var Et=_t,Tt=function(e,t,n,r){var i,o;return o=0,(i=kt(t)).iterations=10,s();function s(){var t=new xt(e,i,n);t.on("result",a),t.once("end",u),t.run()}function a(e){jt(e)||"result"!==e.operator||(o=e.elapsed)}function u(){if(o<.1&&i.iterations<1e10)return i.iterations*=10,s();r(null,i.iterations)}};var Lt=function(e,t,n,r){if(!n)return t.repeats=1,r(e,t,n);if(t.skip)return t.repeats=1,r(e,t,n);function i(i,o){return i?(t.repeats=1,t.iterations=1,r(e,t,n)):(t.iterations=o,r(e,t,n))}Et(e,t,n,(function(o){if(o)return t.repeats=1,t.iterations=1,r(e,t,n);if(t.iterations)return r(e,t,n);Tt(e,t,n,i)}))},Ot=t,Pt=i,Ct=o.isPrimitive,Mt=n,St=s.isPrimitive,At=a,Vt=u,Dt=r,Nt=l,qt=Ve,Ft=lt,It=le,Rt=ct,zt=bt,Gt=Lt;var Kt=function(e,t){var n,r,i,o,s;if(o={},1===arguments.length)if(Mt(e))s=e;else{if(!At(e))throw new TypeError(Dt("invalid argument. Must provide either an options object or a function. Value: `%s`.",e));o=e}else if(arguments.length>1){if(!At(e))throw new TypeError(Dt("invalid argument. First argument must be an object. Value: `%s`.",e));if(Vt(e,"autoclose")&&(o.autoclose=e.autoclose,!St(o.autoclose)))throw new TypeError(Dt("invalid option. `%s` option must be a boolean. Option: `%s`.","autoclose",o.autoclose));if(!Mt(s=t))throw new TypeError(Dt("invalid argument. Second argument must be a function. Value: `%s`.",s))}function a(e,t,n){var r,o,s;if(!Ct(e))throw new TypeError(Dt("invalid argument. First argument must be a string. Value: `%s`.",e));if(r=Nt(Rt),2===arguments.length){if(Mt(t))s=t;else if(o=zt(r,t))throw o}else if(arguments.length>2){if(o=zt(r,t))throw o;if(!Mt(s=n))throw new TypeError(Dt("invalid argument. Third argument must be a function. Value: `%s`.",s))}return i.push([e,r,s]),1===i.length&&It(u),a}function u(){var e=-1;return t();function t(){var t;if((e+=1)===i.length)return i.length=0,r.run();t=i[e],Gt(t[0],t[1],t[2],n)}function n(e,n,i){var o,s;for(s=0;s<n.repeats;s++)(o=new qt(e,n,i)).on("result",l),r.push(o);return t()}}function l(e){Ct(e)||e.ok||e.todo||(n=1)}function c(e){return arguments.length?r.createStream(e):r.createStream()}function f(){r.close()}function m(){r.exit()}function h(){return n}return r=new Ft,o.autoclose&&r.once("done",f),s&&r.once("done",s),n=0,i=[],Ot(a,"createStream",c),Ot(a,"close",f),Ot(a,"exit",m),Pt(a,"exitCode",h),a},Ut="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function Wt(){throw new Error("setTimeout has not been defined")}function Xt(){throw new Error("clearTimeout has not been defined")}var Bt=Wt,Ht=Xt;function Jt(e){if(Bt===setTimeout)return setTimeout(e,0);if((Bt===Wt||!Bt)&&setTimeout)return Bt=setTimeout,setTimeout(e,0);try{return Bt(e,0)}catch(t){try{return Bt.call(null,e,0)}catch(t){return Bt.call(this,e,0)}}}"function"==typeof Ut.setTimeout&&(Bt=setTimeout),"function"==typeof Ut.clearTimeout&&(Ht=clearTimeout);var Qt,Yt=[],Zt=!1,$t=-1;function en(){Zt&&Qt&&(Zt=!1,Qt.length?Yt=Qt.concat(Yt):$t=-1,Yt.length&&tn())}function tn(){if(!Zt){var e=Jt(en);Zt=!0;for(var t=Yt.length;t;){for(Qt=Yt,Yt=[];++$t<t;)Qt&&Qt[$t].run();$t=-1,t=Yt.length}Qt=null,Zt=!1,function(e){if(Ht===clearTimeout)return clearTimeout(e);if((Ht===Xt||!Ht)&&clearTimeout)return Ht=clearTimeout,clearTimeout(e);try{Ht(e)}catch(t){try{return Ht.call(null,e)}catch(t){return Ht.call(this,e)}}}(e)}}function nn(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];Yt.push(new rn(e,t)),1!==Yt.length||Zt||Jt(tn)}function rn(e,t){this.fun=e,this.array=t}rn.prototype.run=function(){this.fun.apply(null,this.array)};var on={},sn=[],an={},un={},ln={};function cn(){}var fn=cn,mn=cn,hn=cn,pn=cn,dn=cn,vn=cn,bn=cn;function gn(e){throw new Error("process.binding is not supported")}function wn(){return"/"}function yn(e){throw new Error("process.chdir is not supported")}function _n(){return 0}var jn=Ut.performance||{},kn=jn.now||jn.mozNow||jn.msNow||jn.oNow||jn.webkitNow||function(){return(new Date).getTime()};function xn(e){var t=.001*kn.call(jn),n=Math.floor(t),r=Math.floor(t%1*1e9);return e&&(n-=e[0],(r-=e[1])<0&&(n--,r+=1e9)),[n,r]}var En=new Date;function Tn(){return(new Date-En)/1e3}var Ln={nextTick:nn,title:"browser",browser:true,env:on,argv:sn,version:"",versions:an,on:fn,addListener:mn,once:hn,off:pn,removeListener:dn,removeAllListeners:vn,emit:bn,binding:gn,cwd:wn,chdir:yn,umask:_n,hrtime:xn,platform:"browser",release:un,config:ln,uptime:Tn},On=E(Object.freeze({__proto__:null,addListener:mn,argv:sn,binding:gn,browser:true,chdir:yn,config:ln,cwd:wn,default:Ln,emit:bn,env:on,hrtime:xn,nextTick:nn,off:pn,on:fn,once:hn,platform:"browser",release:un,removeAllListeners:vn,removeListener:dn,title:"browser",umask:_n,uptime:Tn,version:"",versions:an})),Pn=On&&"function"==typeof On.exit,Cn=!w&&Pn;var Mn=e,Sn=x,An=function(e){console.log(e)};var Vn=function(){var e,t;return e=new Mn({transform:function(e,r,i){var o,s;for(s=0;s<e.length;s++)"\n"===(o=Sn(e[s]))?n():t+=o;i()},flush:n}),t="",e;function n(n){try{An(t)}catch(t){e.emit("error",t)}if(t="",n)return n()}},Dn=n,Nn=s.isPrimitive,qn=a,Fn=y,In=u,Rn=r,zn=_,Gn=j,Kn=k,Un=Kt,Wn=Vn,Xn=Cn,Bn=On;var Hn,Jn=function(){var e,t,n,r,i,o,s;if(0===arguments.length)r={},s=Kn;else if(1===arguments.length)if(Dn(arguments[0]))r={},s=arguments[0];else{if(!qn(arguments[0]))throw new TypeError(Rn("invalid argument. Must provide either an options object or a function. Value: `%s`.",arguments[0]));r=arguments[0],s=Kn}else{if(!qn(r=arguments[0]))throw new TypeError(Rn("invalid argument. First argument must be an object. Value: `%s`.",r));if(!Dn(s=arguments[1]))throw new TypeError(Rn("invalid argument. Second argument must be a function. Value: `%s`.",s))}if(o={},In(r,"autoclose")&&(o.autoclose=r.autoclose,!Nn(o.autoclose)))throw new TypeError(Rn("invalid option. `%s` option must be a boolean. Option: `%s`.","autoclose",o.autoclose));if(In(r,"stream")&&(o.stream=r.stream,!Fn(o.stream)))throw new TypeError(Rn("invalid option. `%s` option must be a writable stream. Option: `%s`.","stream",o.stream));return e=0,i=zn(o,["autoclose"]),n=Un(i,a),i=Gn(r,["autoclose","stream"]),t=n.createStream(i).pipe(o.stream||Wn()),Xn&&(t.on("error",u),Bn.on("exit",l)),n;function a(){return s()}function u(){e=1}function l(t){0===t&&(n.close(),Bn.exit(e||n.exitCode))}},Qn=Cn,Yn=Jn;var Zn=function e(t,n){var r,i;return Hn||(arguments.length>1?(r=t,i=n):(r={},i=t),r.autoclose=!Qn,Hn=Yn(r,i),e.cached=!0,Hn)},$n=e,er=t,tr=n,nr=r,rr=Zn,ir=[];function or(){var e,t;for(e=ir.length,t=0;t<e;t++)ir.shift()()}function sr(e,t,n){var r=rr(or);return arguments.length<2?r(e):2===arguments.length?r(e,t):r(e,t,n),sr}er(sr,"createHarness",Kt),er(sr,"createStream",(function(e){var t,n;return n=arguments.length?e:{},rr.cached?rr().createStream(n):(t=new $n(n),n.stream=t,rr(n,or),t)})),er(sr,"onFinish",(function(e){var t;if(!tr(e))throw new TypeError(nr("invalid argument. Must provide a function. Value: `%s`.",e));for(t=0;t<ir.length;t++)if(e===ir[t])throw new Error("invalid argument. Attempted to add duplicate listener.");ir.push(e)}));var ar=sr;export{ar as default};
//# sourceMappingURL=index.mjs.map
