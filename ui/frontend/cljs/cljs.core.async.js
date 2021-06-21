var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./cljs.core.async.impl.protocols.js");
require("./cljs.core.async.impl.channels.js");
require("./cljs.core.async.impl.buffers.js");
require("./cljs.core.async.impl.timers.js");
require("./cljs.core.async.impl.dispatch.js");
require("./cljs.core.async.impl.ioc_helpers.js");
require("./goog.array.array.js");
var cognitect=$CLJS.cognitect || ($CLJS.cognitect = {});
var module$shadow_js_shim_module$ttag=$CLJS.module$shadow_js_shim_module$ttag || ($CLJS.module$shadow_js_shim_module$ttag = {});
var clojure=$CLJS.clojure || ($CLJS.clojure = {});
var cljs=$CLJS.cljs || ($CLJS.cljs = {});
var schema=$CLJS.schema || ($CLJS.schema = {});
var shadow=$CLJS.shadow || ($CLJS.shadow = {});
var goog=$CLJS.goog || ($CLJS.goog = {});
var lambdaisland=$CLJS.lambdaisland || ($CLJS.lambdaisland = {});
var medley=$CLJS.medley || ($CLJS.medley = {});
var metabase=$CLJS.metabase || ($CLJS.metabase = {});
var com=$CLJS.com || ($CLJS.com = {});

$CLJS.SHADOW_ENV.setLoaded("cljs.core.async.js");

goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__29699 = arguments.length;
switch (G__29699) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29704 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29704 = (function (f,blockable,meta29705){
this.f = f;
this.blockable = blockable;
this.meta29705 = meta29705;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29704.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29706,meta29705__$1){
var self__ = this;
var _29706__$1 = this;
return (new cljs.core.async.t_cljs$core$async29704(self__.f,self__.blockable,meta29705__$1));
}));

(cljs.core.async.t_cljs$core$async29704.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29706){
var self__ = this;
var _29706__$1 = this;
return self__.meta29705;
}));

(cljs.core.async.t_cljs$core$async29704.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29704.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29704.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async29704.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async29704.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29705","meta29705",-285680820,null)], null);
}));

(cljs.core.async.t_cljs$core$async29704.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29704.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29704");

(cljs.core.async.t_cljs$core$async29704.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async29704");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29704.
 */
cljs.core.async.__GT_t_cljs$core$async29704 = (function cljs$core$async$__GT_t_cljs$core$async29704(f__$1,blockable__$1,meta29705){
return (new cljs.core.async.t_cljs$core$async29704(f__$1,blockable__$1,meta29705));
});

}

return (new cljs.core.async.t_cljs$core$async29704(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__29738 = arguments.length;
switch (G__29738) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__29766 = arguments.length;
switch (G__29766) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__29783 = arguments.length;
switch (G__29783) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_33244 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33244) : fn1.call(null,val_33244));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33244) : fn1.call(null,val_33244));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__29803 = arguments.length;
switch (G__29803) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___33253 = n;
var x_33254 = (0);
while(true){
if((x_33254 < n__4613__auto___33253)){
(a[x_33254] = x_33254);

var G__33255 = (x_33254 + (1));
x_33254 = G__33255;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29823 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29823 = (function (flag,meta29824){
this.flag = flag;
this.meta29824 = meta29824;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29823.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29825,meta29824__$1){
var self__ = this;
var _29825__$1 = this;
return (new cljs.core.async.t_cljs$core$async29823(self__.flag,meta29824__$1));
}));

(cljs.core.async.t_cljs$core$async29823.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29825){
var self__ = this;
var _29825__$1 = this;
return self__.meta29824;
}));

(cljs.core.async.t_cljs$core$async29823.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29823.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29823.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29823.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async29823.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29824","meta29824",771547390,null)], null);
}));

(cljs.core.async.t_cljs$core$async29823.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29823.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29823");

(cljs.core.async.t_cljs$core$async29823.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async29823");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29823.
 */
cljs.core.async.__GT_t_cljs$core$async29823 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29823(flag__$1,meta29824){
return (new cljs.core.async.t_cljs$core$async29823(flag__$1,meta29824));
});

}

return (new cljs.core.async.t_cljs$core$async29823(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29835 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29835 = (function (flag,cb,meta29836){
this.flag = flag;
this.cb = cb;
this.meta29836 = meta29836;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29835.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29837,meta29836__$1){
var self__ = this;
var _29837__$1 = this;
return (new cljs.core.async.t_cljs$core$async29835(self__.flag,self__.cb,meta29836__$1));
}));

(cljs.core.async.t_cljs$core$async29835.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29837){
var self__ = this;
var _29837__$1 = this;
return self__.meta29836;
}));

(cljs.core.async.t_cljs$core$async29835.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29835.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29835.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29835.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async29835.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29836","meta29836",1150207108,null)], null);
}));

(cljs.core.async.t_cljs$core$async29835.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29835.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29835");

(cljs.core.async.t_cljs$core$async29835.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async29835");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29835.
 */
cljs.core.async.__GT_t_cljs$core$async29835 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29835(flag__$1,cb__$1,meta29836){
return (new cljs.core.async.t_cljs$core$async29835(flag__$1,cb__$1,meta29836));
});

}

return (new cljs.core.async.t_cljs$core$async29835(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29873_SHARP_){
var G__29884 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29873_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29884) : fret.call(null,G__29884));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29874_SHARP_){
var G__29886 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29874_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29886) : fret.call(null,G__29886));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__33286 = (i + (1));
i = G__33286;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33287 = arguments.length;
var i__4737__auto___33288 = (0);
while(true){
if((i__4737__auto___33288 < len__4736__auto___33287)){
args__4742__auto__.push((arguments[i__4737__auto___33288]));

var G__33292 = (i__4737__auto___33288 + (1));
i__4737__auto___33288 = G__33292;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29907){
var map__29908 = p__29907;
var map__29908__$1 = (((((!((map__29908 == null))))?(((((map__29908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29908.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29908):map__29908);
var opts = map__29908__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29903){
var G__29904 = cljs.core.first(seq29903);
var seq29903__$1 = cljs.core.next(seq29903);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29904,seq29903__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__29919 = arguments.length;
switch (G__29919) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29573__auto___33301 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29574__auto__ = (function (){var switch__29301__auto__ = (function (state_30013){
var state_val_30017 = (state_30013[(1)]);
if((state_val_30017 === (7))){
var inst_29995 = (state_30013[(2)]);
var state_30013__$1 = state_30013;
var statearr_30036_33305 = state_30013__$1;
(statearr_30036_33305[(2)] = inst_29995);

(statearr_30036_33305[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (1))){
var state_30013__$1 = state_30013;
var statearr_30042_33310 = state_30013__$1;
(statearr_30042_33310[(2)] = null);

(statearr_30042_33310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (4))){
var inst_29963 = (state_30013[(7)]);
var inst_29963__$1 = (state_30013[(2)]);
var inst_29970 = (inst_29963__$1 == null);
var state_30013__$1 = (function (){var statearr_30056 = state_30013;
(statearr_30056[(7)] = inst_29963__$1);

return statearr_30056;
})();
if(cljs.core.truth_(inst_29970)){
var statearr_30059_33314 = state_30013__$1;
(statearr_30059_33314[(1)] = (5));

} else {
var statearr_30060_33318 = state_30013__$1;
(statearr_30060_33318[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (13))){
var state_30013__$1 = state_30013;
var statearr_30065_33323 = state_30013__$1;
(statearr_30065_33323[(2)] = null);

(statearr_30065_33323[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (6))){
var inst_29963 = (state_30013[(7)]);
var state_30013__$1 = state_30013;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30013__$1,(11),to,inst_29963);
} else {
if((state_val_30017 === (3))){
var inst_30002 = (state_30013[(2)]);
var state_30013__$1 = state_30013;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30013__$1,inst_30002);
} else {
if((state_val_30017 === (12))){
var state_30013__$1 = state_30013;
var statearr_30091_33330 = state_30013__$1;
(statearr_30091_33330[(2)] = null);

(statearr_30091_33330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (2))){
var state_30013__$1 = state_30013;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30013__$1,(4),from);
} else {
if((state_val_30017 === (11))){
var inst_29985 = (state_30013[(2)]);
var state_30013__$1 = state_30013;
if(cljs.core.truth_(inst_29985)){
var statearr_30099_33336 = state_30013__$1;
(statearr_30099_33336[(1)] = (12));

} else {
var statearr_30101_33337 = state_30013__$1;
(statearr_30101_33337[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (9))){
var state_30013__$1 = state_30013;
var statearr_30110_33340 = state_30013__$1;
(statearr_30110_33340[(2)] = null);

(statearr_30110_33340[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (5))){
var state_30013__$1 = state_30013;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30111_33341 = state_30013__$1;
(statearr_30111_33341[(1)] = (8));

} else {
var statearr_30112_33342 = state_30013__$1;
(statearr_30112_33342[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (14))){
var inst_29993 = (state_30013[(2)]);
var state_30013__$1 = state_30013;
var statearr_30113_33343 = state_30013__$1;
(statearr_30113_33343[(2)] = inst_29993);

(statearr_30113_33343[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (10))){
var inst_29979 = (state_30013[(2)]);
var state_30013__$1 = state_30013;
var statearr_30115_33344 = state_30013__$1;
(statearr_30115_33344[(2)] = inst_29979);

(statearr_30115_33344[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (8))){
var inst_29976 = cljs.core.async.close_BANG_(to);
var state_30013__$1 = state_30013;
var statearr_30116_33345 = state_30013__$1;
(statearr_30116_33345[(2)] = inst_29976);

(statearr_30116_33345[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29302__auto__ = null;
var cljs$core$async$state_machine__29302__auto____0 = (function (){
var statearr_30121 = [null,null,null,null,null,null,null,null];
(statearr_30121[(0)] = cljs$core$async$state_machine__29302__auto__);

(statearr_30121[(1)] = (1));

return statearr_30121;
});
var cljs$core$async$state_machine__29302__auto____1 = (function (state_30013){
while(true){
var ret_value__29303__auto__ = (function (){try{while(true){
var result__29304__auto__ = switch__29301__auto__(state_30013);
if(cljs.core.keyword_identical_QMARK_(result__29304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29304__auto__;
}
break;
}
}catch (e30123){var ex__29305__auto__ = e30123;
var statearr_30124_33346 = state_30013;
(statearr_30124_33346[(2)] = ex__29305__auto__);


if(cljs.core.seq((state_30013[(4)]))){
var statearr_30125_33347 = state_30013;
(statearr_30125_33347[(1)] = cljs.core.first((state_30013[(4)])));

} else {
throw ex__29305__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33350 = state_30013;
state_30013 = G__33350;
continue;
} else {
return ret_value__29303__auto__;
}
break;
}
});
cljs$core$async$state_machine__29302__auto__ = function(state_30013){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29302__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29302__auto____1.call(this,state_30013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29302__auto____0;
cljs$core$async$state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29302__auto____1;
return cljs$core$async$state_machine__29302__auto__;
})()
})();
var state__29575__auto__ = (function (){var statearr_30126 = f__29574__auto__();
(statearr_30126[(6)] = c__29573__auto___33301);

return statearr_30126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29575__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__30131){
var vec__30132 = p__30131;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30132,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30132,(1),null);
var job = vec__30132;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__29573__auto___33354 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29574__auto__ = (function (){var switch__29301__auto__ = (function (state_30139){
var state_val_30140 = (state_30139[(1)]);
if((state_val_30140 === (1))){
var state_30139__$1 = state_30139;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30139__$1,(2),res,v);
} else {
if((state_val_30140 === (2))){
var inst_30136 = (state_30139[(2)]);
var inst_30137 = cljs.core.async.close_BANG_(res);
var state_30139__$1 = (function (){var statearr_30142 = state_30139;
(statearr_30142[(7)] = inst_30136);

return statearr_30142;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30139__$1,inst_30137);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29302__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29302__auto____0 = (function (){
var statearr_30146 = [null,null,null,null,null,null,null,null];
(statearr_30146[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29302__auto__);

(statearr_30146[(1)] = (1));

return statearr_30146;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29302__auto____1 = (function (state_30139){
while(true){
var ret_value__29303__auto__ = (function (){try{while(true){
var result__29304__auto__ = switch__29301__auto__(state_30139);
if(cljs.core.keyword_identical_QMARK_(result__29304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29304__auto__;
}
break;
}
}catch (e30147){var ex__29305__auto__ = e30147;
var statearr_30148_33362 = state_30139;
(statearr_30148_33362[(2)] = ex__29305__auto__);


if(cljs.core.seq((state_30139[(4)]))){
var statearr_30150_33364 = state_30139;
(statearr_30150_33364[(1)] = cljs.core.first((state_30139[(4)])));

} else {
throw ex__29305__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33365 = state_30139;
state_30139 = G__33365;
continue;
} else {
return ret_value__29303__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29302__auto__ = function(state_30139){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29302__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29302__auto____1.call(this,state_30139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29302__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29302__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29302__auto__;
})()
})();
var state__29575__auto__ = (function (){var statearr_30152 = f__29574__auto__();
(statearr_30152[(6)] = c__29573__auto___33354);

return statearr_30152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29575__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__30154){
var vec__30156 = p__30154;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30156,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30156,(1),null);
var job = vec__30156;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___33374 = n;
var __33375 = (0);
while(true){
if((__33375 < n__4613__auto___33374)){
var G__30161_33377 = type;
var G__30161_33378__$1 = (((G__30161_33377 instanceof cljs.core.Keyword))?G__30161_33377.fqn:null);
switch (G__30161_33378__$1) {
case "compute":
var c__29573__auto___33381 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33375,c__29573__auto___33381,G__30161_33377,G__30161_33378__$1,n__4613__auto___33374,jobs,results,process,async){
return (function (){
var f__29574__auto__ = (function (){var switch__29301__auto__ = ((function (__33375,c__29573__auto___33381,G__30161_33377,G__30161_33378__$1,n__4613__auto___33374,jobs,results,process,async){
return (function (state_30177){
var state_val_30178 = (state_30177[(1)]);
if((state_val_30178 === (1))){
var state_30177__$1 = state_30177;
var statearr_30180_33382 = state_30177__$1;
(statearr_30180_33382[(2)] = null);

(statearr_30180_33382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30178 === (2))){
var state_30177__$1 = state_30177;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30177__$1,(4),jobs);
} else {
if((state_val_30178 === (3))){
var inst_30175 = (state_30177[(2)]);
var state_30177__$1 = state_30177;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30177__$1,inst_30175);
} else {
if((state_val_30178 === (4))){
var inst_30167 = (state_30177[(2)]);
var inst_30168 = process(inst_30167);
var state_30177__$1 = state_30177;
if(cljs.core.truth_(inst_30168)){
var statearr_30182_33384 = state_30177__$1;
(statearr_30182_33384[(1)] = (5));

} else {
var statearr_30183_33387 = state_30177__$1;
(statearr_30183_33387[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30178 === (5))){
var state_30177__$1 = state_30177;
var statearr_30184_33391 = state_30177__$1;
(statearr_30184_33391[(2)] = null);

(statearr_30184_33391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30178 === (6))){
var state_30177__$1 = state_30177;
var statearr_30185_33393 = state_30177__$1;
(statearr_30185_33393[(2)] = null);

(statearr_30185_33393[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30178 === (7))){
var inst_30173 = (state_30177[(2)]);
var state_30177__$1 = state_30177;
var statearr_30189_33394 = state_30177__$1;
(statearr_30189_33394[(2)] = inst_30173);

(statearr_30189_33394[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__33375,c__29573__auto___33381,G__30161_33377,G__30161_33378__$1,n__4613__auto___33374,jobs,results,process,async))
;
return ((function (__33375,switch__29301__auto__,c__29573__auto___33381,G__30161_33377,G__30161_33378__$1,n__4613__auto___33374,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29302__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29302__auto____0 = (function (){
var statearr_30193 = [null,null,null,null,null,null,null];
(statearr_30193[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29302__auto__);

(statearr_30193[(1)] = (1));

return statearr_30193;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29302__auto____1 = (function (state_30177){
while(true){
var ret_value__29303__auto__ = (function (){try{while(true){
var result__29304__auto__ = switch__29301__auto__(state_30177);
if(cljs.core.keyword_identical_QMARK_(result__29304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29304__auto__;
}
break;
}
}catch (e30195){var ex__29305__auto__ = e30195;
var statearr_30200_33398 = state_30177;
(statearr_30200_33398[(2)] = ex__29305__auto__);


if(cljs.core.seq((state_30177[(4)]))){
var statearr_30201_33399 = state_30177;
(statearr_30201_33399[(1)] = cljs.core.first((state_30177[(4)])));

} else {
throw ex__29305__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33402 = state_30177;
state_30177 = G__33402;
continue;
} else {
return ret_value__29303__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29302__auto__ = function(state_30177){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29302__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29302__auto____1.call(this,state_30177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29302__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29302__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29302__auto__;
})()
;})(__33375,switch__29301__auto__,c__29573__auto___33381,G__30161_33377,G__30161_33378__$1,n__4613__auto___33374,jobs,results,process,async))
})();
var state__29575__auto__ = (function (){var statearr_30205 = f__29574__auto__();
(statearr_30205[(6)] = c__29573__auto___33381);

return statearr_30205;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29575__auto__);
});})(__33375,c__29573__auto___33381,G__30161_33377,G__30161_33378__$1,n__4613__auto___33374,jobs,results,process,async))
);


break;
case "async":
var c__29573__auto___33414 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33375,c__29573__auto___33414,G__30161_33377,G__30161_33378__$1,n__4613__auto___33374,jobs,results,process,async){
return (function (){
var f__29574__auto__ = (function (){var switch__29301__auto__ = ((function (__33375,c__29573__auto___33414,G__30161_33377,G__30161_33378__$1,n__4613__auto___33374,jobs,results,process,async){
return (function (state_30218){
var state_val_30219 = (state_30218[(1)]);
if((state_val_30219 === (1))){
var state_30218__$1 = state_30218;
var statearr_30235_33415 = state_30218__$1;
(statearr_30235_33415[(2)] = null);

(statearr_30235_33415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30219 === (2))){
var state_30218__$1 = state_30218;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30218__$1,(4),jobs);
} else {
if((state_val_30219 === (3))){
var inst_30216 = (state_30218[(2)]);
var state_30218__$1 = state_30218;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30218__$1,inst_30216);
} else {
if((state_val_30219 === (4))){
var inst_30208 = (state_30218[(2)]);
var inst_30209 = async(inst_30208);
var state_30218__$1 = state_30218;
if(cljs.core.truth_(inst_30209)){
var statearr_30275_33417 = state_30218__$1;
(statearr_30275_33417[(1)] = (5));

} else {
var statearr_30278_33418 = state_30218__$1;
(statearr_30278_33418[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30219 === (5))){
var state_30218__$1 = state_30218;
var statearr_30283_33420 = state_30218__$1;
(statearr_30283_33420[(2)] = null);

(statearr_30283_33420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30219 === (6))){
var state_30218__$1 = state_30218;
var statearr_30290_33422 = state_30218__$1;
(statearr_30290_33422[(2)] = null);

(statearr_30290_33422[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30219 === (7))){
var inst_30214 = (state_30218[(2)]);
var state_30218__$1 = state_30218;
var statearr_30295_33424 = state_30218__$1;
(statearr_30295_33424[(2)] = inst_30214);

(statearr_30295_33424[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__33375,c__29573__auto___33414,G__30161_33377,G__30161_33378__$1,n__4613__auto___33374,jobs,results,process,async))
;
return ((function (__33375,switch__29301__auto__,c__29573__auto___33414,G__30161_33377,G__30161_33378__$1,n__4613__auto___33374,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29302__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29302__auto____0 = (function (){
var statearr_30296 = [null,null,null,null,null,null,null];
(statearr_30296[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29302__auto__);

(statearr_30296[(1)] = (1));

return statearr_30296;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29302__auto____1 = (function (state_30218){
while(true){
var ret_value__29303__auto__ = (function (){try{while(true){
var result__29304__auto__ = switch__29301__auto__(state_30218);
if(cljs.core.keyword_identical_QMARK_(result__29304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29304__auto__;
}
break;
}
}catch (e30297){var ex__29305__auto__ = e30297;
var statearr_30300_33426 = state_30218;
(statearr_30300_33426[(2)] = ex__29305__auto__);


if(cljs.core.seq((state_30218[(4)]))){
var statearr_30301_33427 = state_30218;
(statearr_30301_33427[(1)] = cljs.core.first((state_30218[(4)])));

} else {
throw ex__29305__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33429 = state_30218;
state_30218 = G__33429;
continue;
} else {
return ret_value__29303__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29302__auto__ = function(state_30218){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29302__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29302__auto____1.call(this,state_30218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29302__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29302__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29302__auto__;
})()
;})(__33375,switch__29301__auto__,c__29573__auto___33414,G__30161_33377,G__30161_33378__$1,n__4613__auto___33374,jobs,results,process,async))
})();
var state__29575__auto__ = (function (){var statearr_30302 = f__29574__auto__();
(statearr_30302[(6)] = c__29573__auto___33414);

return statearr_30302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29575__auto__);
});})(__33375,c__29573__auto___33414,G__30161_33377,G__30161_33378__$1,n__4613__auto___33374,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30161_33378__$1)].join('')));

}

var G__33432 = (__33375 + (1));
__33375 = G__33432;
continue;
} else {
}
break;
}

var c__29573__auto___33434 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29574__auto__ = (function (){var switch__29301__auto__ = (function (state_30327){
var state_val_30328 = (state_30327[(1)]);
if((state_val_30328 === (7))){
var inst_30323 = (state_30327[(2)]);
var state_30327__$1 = state_30327;
var statearr_30332_33439 = state_30327__$1;
(statearr_30332_33439[(2)] = inst_30323);

(statearr_30332_33439[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30328 === (1))){
var state_30327__$1 = state_30327;
var statearr_30334_33440 = state_30327__$1;
(statearr_30334_33440[(2)] = null);

(statearr_30334_33440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30328 === (4))){
var inst_30306 = (state_30327[(7)]);
var inst_30306__$1 = (state_30327[(2)]);
var inst_30307 = (inst_30306__$1 == null);
var state_30327__$1 = (function (){var statearr_30337 = state_30327;
(statearr_30337[(7)] = inst_30306__$1);

return statearr_30337;
})();
if(cljs.core.truth_(inst_30307)){
var statearr_30338_33441 = state_30327__$1;
(statearr_30338_33441[(1)] = (5));

} else {
var statearr_30339_33442 = state_30327__$1;
(statearr_30339_33442[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30328 === (6))){
var inst_30306 = (state_30327[(7)]);
var inst_30311 = (state_30327[(8)]);
var inst_30311__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30314 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30315 = [inst_30306,inst_30311__$1];
var inst_30316 = (new cljs.core.PersistentVector(null,2,(5),inst_30314,inst_30315,null));
var state_30327__$1 = (function (){var statearr_30340 = state_30327;
(statearr_30340[(8)] = inst_30311__$1);

return statearr_30340;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30327__$1,(8),jobs,inst_30316);
} else {
if((state_val_30328 === (3))){
var inst_30325 = (state_30327[(2)]);
var state_30327__$1 = state_30327;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30327__$1,inst_30325);
} else {
if((state_val_30328 === (2))){
var state_30327__$1 = state_30327;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30327__$1,(4),from);
} else {
if((state_val_30328 === (9))){
var inst_30320 = (state_30327[(2)]);
var state_30327__$1 = (function (){var statearr_30350 = state_30327;
(statearr_30350[(9)] = inst_30320);

return statearr_30350;
})();
var statearr_30352_33444 = state_30327__$1;
(statearr_30352_33444[(2)] = null);

(statearr_30352_33444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30328 === (5))){
var inst_30309 = cljs.core.async.close_BANG_(jobs);
var state_30327__$1 = state_30327;
var statearr_30357_33445 = state_30327__$1;
(statearr_30357_33445[(2)] = inst_30309);

(statearr_30357_33445[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30328 === (8))){
var inst_30311 = (state_30327[(8)]);
var inst_30318 = (state_30327[(2)]);
var state_30327__$1 = (function (){var statearr_30360 = state_30327;
(statearr_30360[(10)] = inst_30318);

return statearr_30360;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30327__$1,(9),results,inst_30311);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29302__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29302__auto____0 = (function (){
var statearr_30371 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30371[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29302__auto__);

(statearr_30371[(1)] = (1));

return statearr_30371;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29302__auto____1 = (function (state_30327){
while(true){
var ret_value__29303__auto__ = (function (){try{while(true){
var result__29304__auto__ = switch__29301__auto__(state_30327);
if(cljs.core.keyword_identical_QMARK_(result__29304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29304__auto__;
}
break;
}
}catch (e30372){var ex__29305__auto__ = e30372;
var statearr_30374_33450 = state_30327;
(statearr_30374_33450[(2)] = ex__29305__auto__);


if(cljs.core.seq((state_30327[(4)]))){
var statearr_30375_33451 = state_30327;
(statearr_30375_33451[(1)] = cljs.core.first((state_30327[(4)])));

} else {
throw ex__29305__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33452 = state_30327;
state_30327 = G__33452;
continue;
} else {
return ret_value__29303__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29302__auto__ = function(state_30327){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29302__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29302__auto____1.call(this,state_30327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29302__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29302__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29302__auto__;
})()
})();
var state__29575__auto__ = (function (){var statearr_30378 = f__29574__auto__();
(statearr_30378[(6)] = c__29573__auto___33434);

return statearr_30378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29575__auto__);
}));


var c__29573__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29574__auto__ = (function (){var switch__29301__auto__ = (function (state_30422){
var state_val_30423 = (state_30422[(1)]);
if((state_val_30423 === (7))){
var inst_30417 = (state_30422[(2)]);
var state_30422__$1 = state_30422;
var statearr_30436_33458 = state_30422__$1;
(statearr_30436_33458[(2)] = inst_30417);

(statearr_30436_33458[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30423 === (20))){
var state_30422__$1 = state_30422;
var statearr_30442_33459 = state_30422__$1;
(statearr_30442_33459[(2)] = null);

(statearr_30442_33459[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30423 === (1))){
var state_30422__$1 = state_30422;
var statearr_30444_33460 = state_30422__$1;
(statearr_30444_33460[(2)] = null);

(statearr_30444_33460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30423 === (4))){
var inst_30382 = (state_30422[(7)]);
var inst_30382__$1 = (state_30422[(2)]);
var inst_30383 = (inst_30382__$1 == null);
var state_30422__$1 = (function (){var statearr_30445 = state_30422;
(statearr_30445[(7)] = inst_30382__$1);

return statearr_30445;
})();
if(cljs.core.truth_(inst_30383)){
var statearr_30450_33466 = state_30422__$1;
(statearr_30450_33466[(1)] = (5));

} else {
var statearr_30452_33467 = state_30422__$1;
(statearr_30452_33467[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30423 === (15))){
var inst_30395 = (state_30422[(8)]);
var state_30422__$1 = state_30422;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30422__$1,(18),to,inst_30395);
} else {
if((state_val_30423 === (21))){
var inst_30412 = (state_30422[(2)]);
var state_30422__$1 = state_30422;
var statearr_30465_33468 = state_30422__$1;
(statearr_30465_33468[(2)] = inst_30412);

(statearr_30465_33468[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30423 === (13))){
var inst_30414 = (state_30422[(2)]);
var state_30422__$1 = (function (){var statearr_30473 = state_30422;
(statearr_30473[(9)] = inst_30414);

return statearr_30473;
})();
var statearr_30474_33478 = state_30422__$1;
(statearr_30474_33478[(2)] = null);

(statearr_30474_33478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30423 === (6))){
var inst_30382 = (state_30422[(7)]);
var state_30422__$1 = state_30422;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30422__$1,(11),inst_30382);
} else {
if((state_val_30423 === (17))){
var inst_30407 = (state_30422[(2)]);
var state_30422__$1 = state_30422;
if(cljs.core.truth_(inst_30407)){
var statearr_30483_33508 = state_30422__$1;
(statearr_30483_33508[(1)] = (19));

} else {
var statearr_30484_33509 = state_30422__$1;
(statearr_30484_33509[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30423 === (3))){
var inst_30419 = (state_30422[(2)]);
var state_30422__$1 = state_30422;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30422__$1,inst_30419);
} else {
if((state_val_30423 === (12))){
var inst_30392 = (state_30422[(10)]);
var state_30422__$1 = state_30422;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30422__$1,(14),inst_30392);
} else {
if((state_val_30423 === (2))){
var state_30422__$1 = state_30422;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30422__$1,(4),results);
} else {
if((state_val_30423 === (19))){
var state_30422__$1 = state_30422;
var statearr_30488_33513 = state_30422__$1;
(statearr_30488_33513[(2)] = null);

(statearr_30488_33513[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30423 === (11))){
var inst_30392 = (state_30422[(2)]);
var state_30422__$1 = (function (){var statearr_30489 = state_30422;
(statearr_30489[(10)] = inst_30392);

return statearr_30489;
})();
var statearr_30491_33514 = state_30422__$1;
(statearr_30491_33514[(2)] = null);

(statearr_30491_33514[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30423 === (9))){
var state_30422__$1 = state_30422;
var statearr_30492_33515 = state_30422__$1;
(statearr_30492_33515[(2)] = null);

(statearr_30492_33515[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30423 === (5))){
var state_30422__$1 = state_30422;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30494_33521 = state_30422__$1;
(statearr_30494_33521[(1)] = (8));

} else {
var statearr_30495_33522 = state_30422__$1;
(statearr_30495_33522[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30423 === (14))){
var inst_30395 = (state_30422[(8)]);
var inst_30395__$1 = (state_30422[(2)]);
var inst_30396 = (inst_30395__$1 == null);
var inst_30397 = cljs.core.not(inst_30396);
var state_30422__$1 = (function (){var statearr_30497 = state_30422;
(statearr_30497[(8)] = inst_30395__$1);

return statearr_30497;
})();
if(inst_30397){
var statearr_30498_33523 = state_30422__$1;
(statearr_30498_33523[(1)] = (15));

} else {
var statearr_30499_33524 = state_30422__$1;
(statearr_30499_33524[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30423 === (16))){
var state_30422__$1 = state_30422;
var statearr_30501_33526 = state_30422__$1;
(statearr_30501_33526[(2)] = false);

(statearr_30501_33526[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30423 === (10))){
var inst_30389 = (state_30422[(2)]);
var state_30422__$1 = state_30422;
var statearr_30502_33527 = state_30422__$1;
(statearr_30502_33527[(2)] = inst_30389);

(statearr_30502_33527[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30423 === (18))){
var inst_30404 = (state_30422[(2)]);
var state_30422__$1 = state_30422;
var statearr_30504_33528 = state_30422__$1;
(statearr_30504_33528[(2)] = inst_30404);

(statearr_30504_33528[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30423 === (8))){
var inst_30386 = cljs.core.async.close_BANG_(to);
var state_30422__$1 = state_30422;
var statearr_30505_33533 = state_30422__$1;
(statearr_30505_33533[(2)] = inst_30386);

(statearr_30505_33533[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29302__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29302__auto____0 = (function (){
var statearr_30508 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30508[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29302__auto__);

(statearr_30508[(1)] = (1));

return statearr_30508;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29302__auto____1 = (function (state_30422){
while(true){
var ret_value__29303__auto__ = (function (){try{while(true){
var result__29304__auto__ = switch__29301__auto__(state_30422);
if(cljs.core.keyword_identical_QMARK_(result__29304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29304__auto__;
}
break;
}
}catch (e30513){var ex__29305__auto__ = e30513;
var statearr_30514_33537 = state_30422;
(statearr_30514_33537[(2)] = ex__29305__auto__);


if(cljs.core.seq((state_30422[(4)]))){
var statearr_30515_33538 = state_30422;
(statearr_30515_33538[(1)] = cljs.core.first((state_30422[(4)])));

} else {
throw ex__29305__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33542 = state_30422;
state_30422 = G__33542;
continue;
} else {
return ret_value__29303__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29302__auto__ = function(state_30422){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29302__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29302__auto____1.call(this,state_30422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29302__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29302__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29302__auto__;
})()
})();
var state__29575__auto__ = (function (){var statearr_30523 = f__29574__auto__();
(statearr_30523[(6)] = c__29573__auto__);

return statearr_30523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29575__auto__);
}));

return c__29573__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__30533 = arguments.length;
switch (G__30533) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__30543 = arguments.length;
switch (G__30543) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__30554 = arguments.length;
switch (G__30554) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__29573__auto___33590 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29574__auto__ = (function (){var switch__29301__auto__ = (function (state_30585){
var state_val_30586 = (state_30585[(1)]);
if((state_val_30586 === (7))){
var inst_30581 = (state_30585[(2)]);
var state_30585__$1 = state_30585;
var statearr_30587_33593 = state_30585__$1;
(statearr_30587_33593[(2)] = inst_30581);

(statearr_30587_33593[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30586 === (1))){
var state_30585__$1 = state_30585;
var statearr_30588_33595 = state_30585__$1;
(statearr_30588_33595[(2)] = null);

(statearr_30588_33595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30586 === (4))){
var inst_30561 = (state_30585[(7)]);
var inst_30561__$1 = (state_30585[(2)]);
var inst_30562 = (inst_30561__$1 == null);
var state_30585__$1 = (function (){var statearr_30590 = state_30585;
(statearr_30590[(7)] = inst_30561__$1);

return statearr_30590;
})();
if(cljs.core.truth_(inst_30562)){
var statearr_30594_33600 = state_30585__$1;
(statearr_30594_33600[(1)] = (5));

} else {
var statearr_30595_33601 = state_30585__$1;
(statearr_30595_33601[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30586 === (13))){
var state_30585__$1 = state_30585;
var statearr_30596_33603 = state_30585__$1;
(statearr_30596_33603[(2)] = null);

(statearr_30596_33603[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30586 === (6))){
var inst_30561 = (state_30585[(7)]);
var inst_30567 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30561) : p.call(null,inst_30561));
var state_30585__$1 = state_30585;
if(cljs.core.truth_(inst_30567)){
var statearr_30602_33605 = state_30585__$1;
(statearr_30602_33605[(1)] = (9));

} else {
var statearr_30603_33607 = state_30585__$1;
(statearr_30603_33607[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30586 === (3))){
var inst_30583 = (state_30585[(2)]);
var state_30585__$1 = state_30585;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30585__$1,inst_30583);
} else {
if((state_val_30586 === (12))){
var state_30585__$1 = state_30585;
var statearr_30607_33608 = state_30585__$1;
(statearr_30607_33608[(2)] = null);

(statearr_30607_33608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30586 === (2))){
var state_30585__$1 = state_30585;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30585__$1,(4),ch);
} else {
if((state_val_30586 === (11))){
var inst_30561 = (state_30585[(7)]);
var inst_30571 = (state_30585[(2)]);
var state_30585__$1 = state_30585;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30585__$1,(8),inst_30571,inst_30561);
} else {
if((state_val_30586 === (9))){
var state_30585__$1 = state_30585;
var statearr_30611_33620 = state_30585__$1;
(statearr_30611_33620[(2)] = tc);

(statearr_30611_33620[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30586 === (5))){
var inst_30564 = cljs.core.async.close_BANG_(tc);
var inst_30565 = cljs.core.async.close_BANG_(fc);
var state_30585__$1 = (function (){var statearr_30615 = state_30585;
(statearr_30615[(8)] = inst_30564);

return statearr_30615;
})();
var statearr_30616_33622 = state_30585__$1;
(statearr_30616_33622[(2)] = inst_30565);

(statearr_30616_33622[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30586 === (14))){
var inst_30579 = (state_30585[(2)]);
var state_30585__$1 = state_30585;
var statearr_30618_33623 = state_30585__$1;
(statearr_30618_33623[(2)] = inst_30579);

(statearr_30618_33623[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30586 === (10))){
var state_30585__$1 = state_30585;
var statearr_30619_33626 = state_30585__$1;
(statearr_30619_33626[(2)] = fc);

(statearr_30619_33626[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30586 === (8))){
var inst_30573 = (state_30585[(2)]);
var state_30585__$1 = state_30585;
if(cljs.core.truth_(inst_30573)){
var statearr_30626_33636 = state_30585__$1;
(statearr_30626_33636[(1)] = (12));

} else {
var statearr_30632_33637 = state_30585__$1;
(statearr_30632_33637[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29302__auto__ = null;
var cljs$core$async$state_machine__29302__auto____0 = (function (){
var statearr_30637 = [null,null,null,null,null,null,null,null,null];
(statearr_30637[(0)] = cljs$core$async$state_machine__29302__auto__);

(statearr_30637[(1)] = (1));

return statearr_30637;
});
var cljs$core$async$state_machine__29302__auto____1 = (function (state_30585){
while(true){
var ret_value__29303__auto__ = (function (){try{while(true){
var result__29304__auto__ = switch__29301__auto__(state_30585);
if(cljs.core.keyword_identical_QMARK_(result__29304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29304__auto__;
}
break;
}
}catch (e30638){var ex__29305__auto__ = e30638;
var statearr_30639_33645 = state_30585;
(statearr_30639_33645[(2)] = ex__29305__auto__);


if(cljs.core.seq((state_30585[(4)]))){
var statearr_30640_33653 = state_30585;
(statearr_30640_33653[(1)] = cljs.core.first((state_30585[(4)])));

} else {
throw ex__29305__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33655 = state_30585;
state_30585 = G__33655;
continue;
} else {
return ret_value__29303__auto__;
}
break;
}
});
cljs$core$async$state_machine__29302__auto__ = function(state_30585){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29302__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29302__auto____1.call(this,state_30585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29302__auto____0;
cljs$core$async$state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29302__auto____1;
return cljs$core$async$state_machine__29302__auto__;
})()
})();
var state__29575__auto__ = (function (){var statearr_30643 = f__29574__auto__();
(statearr_30643[(6)] = c__29573__auto___33590);

return statearr_30643;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29575__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29573__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29574__auto__ = (function (){var switch__29301__auto__ = (function (state_30689){
var state_val_30690 = (state_30689[(1)]);
if((state_val_30690 === (7))){
var inst_30679 = (state_30689[(2)]);
var state_30689__$1 = state_30689;
var statearr_30700_33660 = state_30689__$1;
(statearr_30700_33660[(2)] = inst_30679);

(statearr_30700_33660[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30690 === (1))){
var inst_30655 = init;
var inst_30656 = inst_30655;
var state_30689__$1 = (function (){var statearr_30704 = state_30689;
(statearr_30704[(7)] = inst_30656);

return statearr_30704;
})();
var statearr_30706_33661 = state_30689__$1;
(statearr_30706_33661[(2)] = null);

(statearr_30706_33661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30690 === (4))){
var inst_30659 = (state_30689[(8)]);
var inst_30659__$1 = (state_30689[(2)]);
var inst_30662 = (inst_30659__$1 == null);
var state_30689__$1 = (function (){var statearr_30707 = state_30689;
(statearr_30707[(8)] = inst_30659__$1);

return statearr_30707;
})();
if(cljs.core.truth_(inst_30662)){
var statearr_30708_33669 = state_30689__$1;
(statearr_30708_33669[(1)] = (5));

} else {
var statearr_30709_33670 = state_30689__$1;
(statearr_30709_33670[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30690 === (6))){
var inst_30659 = (state_30689[(8)]);
var inst_30665 = (state_30689[(9)]);
var inst_30656 = (state_30689[(7)]);
var inst_30665__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_30656,inst_30659) : f.call(null,inst_30656,inst_30659));
var inst_30667 = cljs.core.reduced_QMARK_(inst_30665__$1);
var state_30689__$1 = (function (){var statearr_30710 = state_30689;
(statearr_30710[(9)] = inst_30665__$1);

return statearr_30710;
})();
if(inst_30667){
var statearr_30711_33677 = state_30689__$1;
(statearr_30711_33677[(1)] = (8));

} else {
var statearr_30724_33679 = state_30689__$1;
(statearr_30724_33679[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30690 === (3))){
var inst_30681 = (state_30689[(2)]);
var state_30689__$1 = state_30689;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30689__$1,inst_30681);
} else {
if((state_val_30690 === (2))){
var state_30689__$1 = state_30689;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30689__$1,(4),ch);
} else {
if((state_val_30690 === (9))){
var inst_30665 = (state_30689[(9)]);
var inst_30656 = inst_30665;
var state_30689__$1 = (function (){var statearr_30726 = state_30689;
(statearr_30726[(7)] = inst_30656);

return statearr_30726;
})();
var statearr_30727_33686 = state_30689__$1;
(statearr_30727_33686[(2)] = null);

(statearr_30727_33686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30690 === (5))){
var inst_30656 = (state_30689[(7)]);
var state_30689__$1 = state_30689;
var statearr_30730_33688 = state_30689__$1;
(statearr_30730_33688[(2)] = inst_30656);

(statearr_30730_33688[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30690 === (10))){
var inst_30677 = (state_30689[(2)]);
var state_30689__$1 = state_30689;
var statearr_30731_33692 = state_30689__$1;
(statearr_30731_33692[(2)] = inst_30677);

(statearr_30731_33692[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30690 === (8))){
var inst_30665 = (state_30689[(9)]);
var inst_30673 = cljs.core.deref(inst_30665);
var state_30689__$1 = state_30689;
var statearr_30735_33695 = state_30689__$1;
(statearr_30735_33695[(2)] = inst_30673);

(statearr_30735_33695[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__29302__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29302__auto____0 = (function (){
var statearr_30737 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30737[(0)] = cljs$core$async$reduce_$_state_machine__29302__auto__);

(statearr_30737[(1)] = (1));

return statearr_30737;
});
var cljs$core$async$reduce_$_state_machine__29302__auto____1 = (function (state_30689){
while(true){
var ret_value__29303__auto__ = (function (){try{while(true){
var result__29304__auto__ = switch__29301__auto__(state_30689);
if(cljs.core.keyword_identical_QMARK_(result__29304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29304__auto__;
}
break;
}
}catch (e30738){var ex__29305__auto__ = e30738;
var statearr_30739_33697 = state_30689;
(statearr_30739_33697[(2)] = ex__29305__auto__);


if(cljs.core.seq((state_30689[(4)]))){
var statearr_30740_33698 = state_30689;
(statearr_30740_33698[(1)] = cljs.core.first((state_30689[(4)])));

} else {
throw ex__29305__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33699 = state_30689;
state_30689 = G__33699;
continue;
} else {
return ret_value__29303__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29302__auto__ = function(state_30689){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29302__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29302__auto____1.call(this,state_30689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29302__auto____0;
cljs$core$async$reduce_$_state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29302__auto____1;
return cljs$core$async$reduce_$_state_machine__29302__auto__;
})()
})();
var state__29575__auto__ = (function (){var statearr_30742 = f__29574__auto__();
(statearr_30742[(6)] = c__29573__auto__);

return statearr_30742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29575__auto__);
}));

return c__29573__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__29573__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29574__auto__ = (function (){var switch__29301__auto__ = (function (state_30749){
var state_val_30750 = (state_30749[(1)]);
if((state_val_30750 === (1))){
var inst_30744 = cljs.core.async.reduce(f__$1,init,ch);
var state_30749__$1 = state_30749;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30749__$1,(2),inst_30744);
} else {
if((state_val_30750 === (2))){
var inst_30746 = (state_30749[(2)]);
var inst_30747 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_30746) : f__$1.call(null,inst_30746));
var state_30749__$1 = state_30749;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30749__$1,inst_30747);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__29302__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29302__auto____0 = (function (){
var statearr_30761 = [null,null,null,null,null,null,null];
(statearr_30761[(0)] = cljs$core$async$transduce_$_state_machine__29302__auto__);

(statearr_30761[(1)] = (1));

return statearr_30761;
});
var cljs$core$async$transduce_$_state_machine__29302__auto____1 = (function (state_30749){
while(true){
var ret_value__29303__auto__ = (function (){try{while(true){
var result__29304__auto__ = switch__29301__auto__(state_30749);
if(cljs.core.keyword_identical_QMARK_(result__29304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29304__auto__;
}
break;
}
}catch (e30762){var ex__29305__auto__ = e30762;
var statearr_30763_33721 = state_30749;
(statearr_30763_33721[(2)] = ex__29305__auto__);


if(cljs.core.seq((state_30749[(4)]))){
var statearr_30764_33722 = state_30749;
(statearr_30764_33722[(1)] = cljs.core.first((state_30749[(4)])));

} else {
throw ex__29305__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33725 = state_30749;
state_30749 = G__33725;
continue;
} else {
return ret_value__29303__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29302__auto__ = function(state_30749){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29302__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29302__auto____1.call(this,state_30749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29302__auto____0;
cljs$core$async$transduce_$_state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29302__auto____1;
return cljs$core$async$transduce_$_state_machine__29302__auto__;
})()
})();
var state__29575__auto__ = (function (){var statearr_30770 = f__29574__auto__();
(statearr_30770[(6)] = c__29573__auto__);

return statearr_30770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29575__auto__);
}));

return c__29573__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__30779 = arguments.length;
switch (G__30779) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29573__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29574__auto__ = (function (){var switch__29301__auto__ = (function (state_30824){
var state_val_30825 = (state_30824[(1)]);
if((state_val_30825 === (7))){
var inst_30805 = (state_30824[(2)]);
var state_30824__$1 = state_30824;
var statearr_30830_33745 = state_30824__$1;
(statearr_30830_33745[(2)] = inst_30805);

(statearr_30830_33745[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30825 === (1))){
var inst_30797 = cljs.core.seq(coll);
var inst_30798 = inst_30797;
var state_30824__$1 = (function (){var statearr_30831 = state_30824;
(statearr_30831[(7)] = inst_30798);

return statearr_30831;
})();
var statearr_30832_33758 = state_30824__$1;
(statearr_30832_33758[(2)] = null);

(statearr_30832_33758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30825 === (4))){
var inst_30798 = (state_30824[(7)]);
var inst_30803 = cljs.core.first(inst_30798);
var state_30824__$1 = state_30824;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30824__$1,(7),ch,inst_30803);
} else {
if((state_val_30825 === (13))){
var inst_30817 = (state_30824[(2)]);
var state_30824__$1 = state_30824;
var statearr_30834_33761 = state_30824__$1;
(statearr_30834_33761[(2)] = inst_30817);

(statearr_30834_33761[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30825 === (6))){
var inst_30808 = (state_30824[(2)]);
var state_30824__$1 = state_30824;
if(cljs.core.truth_(inst_30808)){
var statearr_30837_33764 = state_30824__$1;
(statearr_30837_33764[(1)] = (8));

} else {
var statearr_30839_33765 = state_30824__$1;
(statearr_30839_33765[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30825 === (3))){
var inst_30821 = (state_30824[(2)]);
var state_30824__$1 = state_30824;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30824__$1,inst_30821);
} else {
if((state_val_30825 === (12))){
var state_30824__$1 = state_30824;
var statearr_30840_33766 = state_30824__$1;
(statearr_30840_33766[(2)] = null);

(statearr_30840_33766[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30825 === (2))){
var inst_30798 = (state_30824[(7)]);
var state_30824__$1 = state_30824;
if(cljs.core.truth_(inst_30798)){
var statearr_30841_33768 = state_30824__$1;
(statearr_30841_33768[(1)] = (4));

} else {
var statearr_30842_33770 = state_30824__$1;
(statearr_30842_33770[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30825 === (11))){
var inst_30814 = cljs.core.async.close_BANG_(ch);
var state_30824__$1 = state_30824;
var statearr_30847_33772 = state_30824__$1;
(statearr_30847_33772[(2)] = inst_30814);

(statearr_30847_33772[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30825 === (9))){
var state_30824__$1 = state_30824;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30848_33773 = state_30824__$1;
(statearr_30848_33773[(1)] = (11));

} else {
var statearr_30851_33774 = state_30824__$1;
(statearr_30851_33774[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30825 === (5))){
var inst_30798 = (state_30824[(7)]);
var state_30824__$1 = state_30824;
var statearr_30852_33776 = state_30824__$1;
(statearr_30852_33776[(2)] = inst_30798);

(statearr_30852_33776[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30825 === (10))){
var inst_30819 = (state_30824[(2)]);
var state_30824__$1 = state_30824;
var statearr_30854_33779 = state_30824__$1;
(statearr_30854_33779[(2)] = inst_30819);

(statearr_30854_33779[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30825 === (8))){
var inst_30798 = (state_30824[(7)]);
var inst_30810 = cljs.core.next(inst_30798);
var inst_30798__$1 = inst_30810;
var state_30824__$1 = (function (){var statearr_30858 = state_30824;
(statearr_30858[(7)] = inst_30798__$1);

return statearr_30858;
})();
var statearr_30859_33788 = state_30824__$1;
(statearr_30859_33788[(2)] = null);

(statearr_30859_33788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29302__auto__ = null;
var cljs$core$async$state_machine__29302__auto____0 = (function (){
var statearr_30861 = [null,null,null,null,null,null,null,null];
(statearr_30861[(0)] = cljs$core$async$state_machine__29302__auto__);

(statearr_30861[(1)] = (1));

return statearr_30861;
});
var cljs$core$async$state_machine__29302__auto____1 = (function (state_30824){
while(true){
var ret_value__29303__auto__ = (function (){try{while(true){
var result__29304__auto__ = switch__29301__auto__(state_30824);
if(cljs.core.keyword_identical_QMARK_(result__29304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29304__auto__;
}
break;
}
}catch (e30862){var ex__29305__auto__ = e30862;
var statearr_30863_33789 = state_30824;
(statearr_30863_33789[(2)] = ex__29305__auto__);


if(cljs.core.seq((state_30824[(4)]))){
var statearr_30864_33790 = state_30824;
(statearr_30864_33790[(1)] = cljs.core.first((state_30824[(4)])));

} else {
throw ex__29305__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33793 = state_30824;
state_30824 = G__33793;
continue;
} else {
return ret_value__29303__auto__;
}
break;
}
});
cljs$core$async$state_machine__29302__auto__ = function(state_30824){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29302__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29302__auto____1.call(this,state_30824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29302__auto____0;
cljs$core$async$state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29302__auto____1;
return cljs$core$async$state_machine__29302__auto__;
})()
})();
var state__29575__auto__ = (function (){var statearr_30865 = f__29574__auto__();
(statearr_30865[(6)] = c__29573__auto__);

return statearr_30865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29575__auto__);
}));

return c__29573__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__30868 = arguments.length;
switch (G__30868) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_33801 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_33801(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_33818 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_33818(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_33840 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_33840(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_33850 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_33850(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30894 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30894 = (function (ch,cs,meta30895){
this.ch = ch;
this.cs = cs;
this.meta30895 = meta30895;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30894.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30896,meta30895__$1){
var self__ = this;
var _30896__$1 = this;
return (new cljs.core.async.t_cljs$core$async30894(self__.ch,self__.cs,meta30895__$1));
}));

(cljs.core.async.t_cljs$core$async30894.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30896){
var self__ = this;
var _30896__$1 = this;
return self__.meta30895;
}));

(cljs.core.async.t_cljs$core$async30894.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30894.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30894.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30894.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async30894.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async30894.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async30894.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30895","meta30895",-444132911,null)], null);
}));

(cljs.core.async.t_cljs$core$async30894.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30894.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30894");

(cljs.core.async.t_cljs$core$async30894.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30894");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30894.
 */
cljs.core.async.__GT_t_cljs$core$async30894 = (function cljs$core$async$mult_$___GT_t_cljs$core$async30894(ch__$1,cs__$1,meta30895){
return (new cljs.core.async.t_cljs$core$async30894(ch__$1,cs__$1,meta30895));
});

}

return (new cljs.core.async.t_cljs$core$async30894(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__29573__auto___33875 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29574__auto__ = (function (){var switch__29301__auto__ = (function (state_31057){
var state_val_31058 = (state_31057[(1)]);
if((state_val_31058 === (7))){
var inst_31053 = (state_31057[(2)]);
var state_31057__$1 = state_31057;
var statearr_31062_33876 = state_31057__$1;
(statearr_31062_33876[(2)] = inst_31053);

(statearr_31062_33876[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31058 === (20))){
var inst_30948 = (state_31057[(7)]);
var inst_30961 = cljs.core.first(inst_30948);
var inst_30962 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30961,(0),null);
var inst_30963 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30961,(1),null);
var state_31057__$1 = (function (){var statearr_31064 = state_31057;
(statearr_31064[(8)] = inst_30962);

return statearr_31064;
})();
if(cljs.core.truth_(inst_30963)){
var statearr_31065_33878 = state_31057__$1;
(statearr_31065_33878[(1)] = (22));

} else {
var statearr_31066_33879 = state_31057__$1;
(statearr_31066_33879[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31058 === (27))){
var inst_30911 = (state_31057[(9)]);
var inst_31007 = (state_31057[(10)]);
var inst_31001 = (state_31057[(11)]);
var inst_30999 = (state_31057[(12)]);
var inst_31007__$1 = cljs.core._nth(inst_30999,inst_31001);
var inst_31008 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31007__$1,inst_30911,done);
var state_31057__$1 = (function (){var statearr_31075 = state_31057;
(statearr_31075[(10)] = inst_31007__$1);

return statearr_31075;
})();
if(cljs.core.truth_(inst_31008)){
var statearr_31076_33884 = state_31057__$1;
(statearr_31076_33884[(1)] = (30));

} else {
var statearr_31077_33885 = state_31057__$1;
(statearr_31077_33885[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31058 === (1))){
var state_31057__$1 = state_31057;
var statearr_31079_33886 = state_31057__$1;
(statearr_31079_33886[(2)] = null);

(statearr_31079_33886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31058 === (24))){
var inst_30948 = (state_31057[(7)]);
var inst_30970 = (state_31057[(2)]);
var inst_30971 = cljs.core.next(inst_30948);
var inst_30922 = inst_30971;
var inst_30923 = null;
var inst_30924 = (0);
var inst_30925 = (0);
var state_31057__$1 = (function (){var statearr_31081 = state_31057;
(statearr_31081[(13)] = inst_30922);

(statearr_31081[(14)] = inst_30925);

(statearr_31081[(15)] = inst_30924);

(statearr_31081[(16)] = inst_30970);

(statearr_31081[(17)] = inst_30923);

return statearr_31081;
})();
var statearr_31083_33887 = state_31057__$1;
(statearr_31083_33887[(2)] = null);

(statearr_31083_33887[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31058 === (39))){
var state_31057__$1 = state_31057;
var statearr_31088_33888 = state_31057__$1;
(statearr_31088_33888[(2)] = null);

(statearr_31088_33888[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31058 === (4))){
var inst_30911 = (state_31057[(9)]);
var inst_30911__$1 = (state_31057[(2)]);
var inst_30913 = (inst_30911__$1 == null);
var state_31057__$1 = (function (){var statearr_31089 = state_31057;
(statearr_31089[(9)] = inst_30911__$1);

return statearr_31089;
})();
if(cljs.core.truth_(inst_30913)){
var statearr_31090_33894 = state_31057__$1;
(statearr_31090_33894[(1)] = (5));

} else {
var statearr_31091_33895 = state_31057__$1;
(statearr_31091_33895[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31058 === (15))){
var inst_30922 = (state_31057[(13)]);
var inst_30925 = (state_31057[(14)]);
var inst_30924 = (state_31057[(15)]);
var inst_30923 = (state_31057[(17)]);
var inst_30940 = (state_31057[(2)]);
var inst_30941 = (inst_30925 + (1));
var tmp31084 = inst_30922;
var tmp31085 = inst_30924;
var tmp31086 = inst_30923;
var inst_30922__$1 = tmp31084;
var inst_30923__$1 = tmp31086;
var inst_30924__$1 = tmp31085;
var inst_30925__$1 = inst_30941;
var state_31057__$1 = (function (){var statearr_31093 = state_31057;
(statearr_31093[(13)] = inst_30922__$1);

(statearr_31093[(14)] = inst_30925__$1);

(statearr_31093[(15)] = inst_30924__$1);

(statearr_31093[(18)] = inst_30940);

(statearr_31093[(17)] = inst_30923__$1);

return statearr_31093;
})();
var statearr_31095_33908 = state_31057__$1;
(statearr_31095_33908[(2)] = null);

(statearr_31095_33908[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31058 === (21))){
var inst_30974 = (state_31057[(2)]);
var state_31057__$1 = state_31057;
var statearr_31099_33910 = state_31057__$1;
(statearr_31099_33910[(2)] = inst_30974);

(statearr_31099_33910[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31058 === (31))){
var inst_31007 = (state_31057[(10)]);
var inst_31011 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31007);
var state_31057__$1 = state_31057;
var statearr_31104_33911 = state_31057__$1;
(statearr_31104_33911[(2)] = inst_31011);

(statearr_31104_33911[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31058 === (32))){
var inst_31000 = (state_31057[(19)]);
var inst_30998 = (state_31057[(20)]);
var inst_31001 = (state_31057[(11)]);
var inst_30999 = (state_31057[(12)]);
var inst_31013 = (state_31057[(2)]);
var inst_31014 = (inst_31001 + (1));
var tmp31096 = inst_31000;
var tmp31097 = inst_30998;
var tmp31098 = inst_30999;
var inst_30998__$1 = tmp31097;
var inst_30999__$1 = tmp31098;
var inst_31000__$1 = tmp31096;
var inst_31001__$1 = inst_31014;
var state_31057__$1 = (function (){var statearr_31105 = state_31057;
(statearr_31105[(19)] = inst_31000__$1);

(statearr_31105[(21)] = inst_31013);

(statearr_31105[(20)] = inst_30998__$1);

(statearr_31105[(11)] = inst_31001__$1);

(statearr_31105[(12)] = inst_30999__$1);

return statearr_31105;
})();
var statearr_31107_33913 = state_31057__$1;
(statearr_31107_33913[(2)] = null);

(statearr_31107_33913[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31058 === (40))){
var inst_31026 = (state_31057[(22)]);
var inst_31030 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31026);
var state_31057__$1 = state_31057;
var statearr_31110_33916 = state_31057__$1;
(statearr_31110_33916[(2)] = inst_31030);

(statearr_31110_33916[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31058 === (33))){
var inst_31017 = (state_31057[(23)]);
var inst_31019 = cljs.core.chunked_seq_QMARK_(inst_31017);
var state_31057__$1 = state_31057;
if(inst_31019){
var statearr_31117_33918 = state_31057__$1;
(statearr_31117_33918[(1)] = (36));

} else {
var statearr_31118_33920 = state_31057__$1;
(statearr_31118_33920[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31058 === (13))){
var inst_30934 = (state_31057[(24)]);
var inst_30937 = cljs.core.async.close_BANG_(inst_30934);
var state_31057__$1 = state_31057;
var statearr_31123_33922 = state_31057__$1;
(statearr_31123_33922[(2)] = inst_30937);

(statearr_31123_33922[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31058 === (22))){
var inst_30962 = (state_31057[(8)]);
var inst_30967 = cljs.core.async.close_BANG_(inst_30962);
var state_31057__$1 = state_31057;
var statearr_31125_33923 = state_31057__$1;
(statearr_31125_33923[(2)] = inst_30967);

(statearr_31125_33923[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31058 === (36))){
var inst_31017 = (state_31057[(23)]);
var inst_31021 = cljs.core.chunk_first(inst_31017);
var inst_31022 = cljs.core.chunk_rest(inst_31017);
var inst_31023 = cljs.core.count(inst_31021);
var inst_30998 = inst_31022;
var inst_30999 = inst_31021;
var inst_31000 = inst_31023;
var inst_31001 = (0);
var state_31057__$1 = (function (){var statearr_31126 = state_31057;
(statearr_31126[(19)] = inst_31000);

(statearr_31126[(20)] = inst_30998);

(statearr_31126[(11)] = inst_31001);

(statearr_31126[(12)] = inst_30999);

return statearr_31126;
})();
var statearr_31127_33930 = state_31057__$1;
(statearr_31127_33930[(2)] = null);

(statearr_31127_33930[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31058 === (41))){
var inst_31017 = (state_31057[(23)]);
var inst_31032 = (state_31057[(2)]);
var inst_31033 = cljs.core.next(inst_31017);
var inst_30998 = inst_31033;
var inst_30999 = null;
var inst_31000 = (0);
var inst_31001 = (0);
var state_31057__$1 = (function (){var statearr_31131 = state_31057;
(statearr_31131[(19)] = inst_31000);

(statearr_31131[(25)] = inst_31032);

(statearr_31131[(20)] = inst_30998);

(statearr_31131[(11)] = inst_31001);

(statearr_31131[(12)] = inst_30999);

return statearr_31131;
})();
var statearr_31136_33934 = state_31057__$1;
(statearr_31136_33934[(2)] = null);

(statearr_31136_33934[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31058 === (43))){
var state_31057__$1 = state_31057;
var statearr_31137_33935 = state_31057__$1;
(statearr_31137_33935[(2)] = null);

(statearr_31137_33935[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31058 === (29))){
var inst_31041 = (state_31057[(2)]);
var state_31057__$1 = state_31057;
var statearr_31142_33936 = state_31057__$1;
(statearr_31142_33936[(2)] = inst_31041);

(statearr_31142_33936[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31058 === (44))){
var inst_31050 = (state_31057[(2)]);
var state_31057__$1 = (function (){var statearr_31146 = state_31057;
(statearr_31146[(26)] = inst_31050);

return statearr_31146;
})();
var statearr_31148_33937 = state_31057__$1;
(statearr_31148_33937[(2)] = null);

(statearr_31148_33937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31058 === (6))){
var inst_30986 = (state_31057[(27)]);
var inst_30985 = cljs.core.deref(cs);
var inst_30986__$1 = cljs.core.keys(inst_30985);
var inst_30987 = cljs.core.count(inst_30986__$1);
var inst_30988 = cljs.core.reset_BANG_(dctr,inst_30987);
var inst_30997 = cljs.core.seq(inst_30986__$1);
var inst_30998 = inst_30997;
var inst_30999 = null;
var inst_31000 = (0);
var inst_31001 = (0);
var state_31057__$1 = (function (){var statearr_31150 = state_31057;
(statearr_31150[(27)] = inst_30986__$1);

(statearr_31150[(19)] = inst_31000);

(statearr_31150[(20)] = inst_30998);

(statearr_31150[(11)] = inst_31001);

(statearr_31150[(28)] = inst_30988);

(statearr_31150[(12)] = inst_30999);

return statearr_31150;
})();
var statearr_31151_33942 = state_31057__$1;
(statearr_31151_33942[(2)] = null);

(statearr_31151_33942[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31058 === (28))){
var inst_31017 = (state_31057[(23)]);
var inst_30998 = (state_31057[(20)]);
var inst_31017__$1 = cljs.core.seq(inst_30998);
var state_31057__$1 = (function (){var statearr_31153 = state_31057;
(statearr_31153[(23)] = inst_31017__$1);

return statearr_31153;
})();
if(inst_31017__$1){
var statearr_31155_33945 = state_31057__$1;
(statearr_31155_33945[(1)] = (33));

} else {
var statearr_31156_33948 = state_31057__$1;
(statearr_31156_33948[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31058 === (25))){
var inst_31000 = (state_31057[(19)]);
var inst_31001 = (state_31057[(11)]);
var inst_31003 = (inst_31001 < inst_31000);
var inst_31004 = inst_31003;
var state_31057__$1 = state_31057;
if(cljs.core.truth_(inst_31004)){
var statearr_31157_33954 = state_31057__$1;
(statearr_31157_33954[(1)] = (27));

} else {
var statearr_31158_33956 = state_31057__$1;
(statearr_31158_33956[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31058 === (34))){
var state_31057__$1 = state_31057;
var statearr_31159_33962 = state_31057__$1;
(statearr_31159_33962[(2)] = null);

(statearr_31159_33962[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31058 === (17))){
var state_31057__$1 = state_31057;
var statearr_31160_33967 = state_31057__$1;
(statearr_31160_33967[(2)] = null);

(statearr_31160_33967[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31058 === (3))){
var inst_31055 = (state_31057[(2)]);
var state_31057__$1 = state_31057;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31057__$1,inst_31055);
} else {
if((state_val_31058 === (12))){
var inst_30979 = (state_31057[(2)]);
var state_31057__$1 = state_31057;
var statearr_31161_33971 = state_31057__$1;
(statearr_31161_33971[(2)] = inst_30979);

(statearr_31161_33971[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31058 === (2))){
var state_31057__$1 = state_31057;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31057__$1,(4),ch);
} else {
if((state_val_31058 === (23))){
var state_31057__$1 = state_31057;
var statearr_31162_33972 = state_31057__$1;
(statearr_31162_33972[(2)] = null);

(statearr_31162_33972[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31058 === (35))){
var inst_31039 = (state_31057[(2)]);
var state_31057__$1 = state_31057;
var statearr_31166_33973 = state_31057__$1;
(statearr_31166_33973[(2)] = inst_31039);

(statearr_31166_33973[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31058 === (19))){
var inst_30948 = (state_31057[(7)]);
var inst_30953 = cljs.core.chunk_first(inst_30948);
var inst_30954 = cljs.core.chunk_rest(inst_30948);
var inst_30955 = cljs.core.count(inst_30953);
var inst_30922 = inst_30954;
var inst_30923 = inst_30953;
var inst_30924 = inst_30955;
var inst_30925 = (0);
var state_31057__$1 = (function (){var statearr_31176 = state_31057;
(statearr_31176[(13)] = inst_30922);

(statearr_31176[(14)] = inst_30925);

(statearr_31176[(15)] = inst_30924);

(statearr_31176[(17)] = inst_30923);

return statearr_31176;
})();
var statearr_31177_33974 = state_31057__$1;
(statearr_31177_33974[(2)] = null);

(statearr_31177_33974[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31058 === (11))){
var inst_30922 = (state_31057[(13)]);
var inst_30948 = (state_31057[(7)]);
var inst_30948__$1 = cljs.core.seq(inst_30922);
var state_31057__$1 = (function (){var statearr_31178 = state_31057;
(statearr_31178[(7)] = inst_30948__$1);

return statearr_31178;
})();
if(inst_30948__$1){
var statearr_31180_33978 = state_31057__$1;
(statearr_31180_33978[(1)] = (16));

} else {
var statearr_31184_33979 = state_31057__$1;
(statearr_31184_33979[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31058 === (9))){
var inst_30981 = (state_31057[(2)]);
var state_31057__$1 = state_31057;
var statearr_31185_33980 = state_31057__$1;
(statearr_31185_33980[(2)] = inst_30981);

(statearr_31185_33980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31058 === (5))){
var inst_30920 = cljs.core.deref(cs);
var inst_30921 = cljs.core.seq(inst_30920);
var inst_30922 = inst_30921;
var inst_30923 = null;
var inst_30924 = (0);
var inst_30925 = (0);
var state_31057__$1 = (function (){var statearr_31187 = state_31057;
(statearr_31187[(13)] = inst_30922);

(statearr_31187[(14)] = inst_30925);

(statearr_31187[(15)] = inst_30924);

(statearr_31187[(17)] = inst_30923);

return statearr_31187;
})();
var statearr_31188_33982 = state_31057__$1;
(statearr_31188_33982[(2)] = null);

(statearr_31188_33982[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31058 === (14))){
var state_31057__$1 = state_31057;
var statearr_31189_33985 = state_31057__$1;
(statearr_31189_33985[(2)] = null);

(statearr_31189_33985[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31058 === (45))){
var inst_31047 = (state_31057[(2)]);
var state_31057__$1 = state_31057;
var statearr_31191_33988 = state_31057__$1;
(statearr_31191_33988[(2)] = inst_31047);

(statearr_31191_33988[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31058 === (26))){
var inst_30986 = (state_31057[(27)]);
var inst_31043 = (state_31057[(2)]);
var inst_31044 = cljs.core.seq(inst_30986);
var state_31057__$1 = (function (){var statearr_31192 = state_31057;
(statearr_31192[(29)] = inst_31043);

return statearr_31192;
})();
if(inst_31044){
var statearr_31193_33995 = state_31057__$1;
(statearr_31193_33995[(1)] = (42));

} else {
var statearr_31194_33996 = state_31057__$1;
(statearr_31194_33996[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31058 === (16))){
var inst_30948 = (state_31057[(7)]);
var inst_30950 = cljs.core.chunked_seq_QMARK_(inst_30948);
var state_31057__$1 = state_31057;
if(inst_30950){
var statearr_31195_33997 = state_31057__$1;
(statearr_31195_33997[(1)] = (19));

} else {
var statearr_31196_33998 = state_31057__$1;
(statearr_31196_33998[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31058 === (38))){
var inst_31036 = (state_31057[(2)]);
var state_31057__$1 = state_31057;
var statearr_31197_33999 = state_31057__$1;
(statearr_31197_33999[(2)] = inst_31036);

(statearr_31197_33999[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31058 === (30))){
var state_31057__$1 = state_31057;
var statearr_31198_34000 = state_31057__$1;
(statearr_31198_34000[(2)] = null);

(statearr_31198_34000[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31058 === (10))){
var inst_30925 = (state_31057[(14)]);
var inst_30923 = (state_31057[(17)]);
var inst_30933 = cljs.core._nth(inst_30923,inst_30925);
var inst_30934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30933,(0),null);
var inst_30935 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30933,(1),null);
var state_31057__$1 = (function (){var statearr_31202 = state_31057;
(statearr_31202[(24)] = inst_30934);

return statearr_31202;
})();
if(cljs.core.truth_(inst_30935)){
var statearr_31204_34001 = state_31057__$1;
(statearr_31204_34001[(1)] = (13));

} else {
var statearr_31206_34002 = state_31057__$1;
(statearr_31206_34002[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31058 === (18))){
var inst_30977 = (state_31057[(2)]);
var state_31057__$1 = state_31057;
var statearr_31208_34003 = state_31057__$1;
(statearr_31208_34003[(2)] = inst_30977);

(statearr_31208_34003[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31058 === (42))){
var state_31057__$1 = state_31057;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31057__$1,(45),dchan);
} else {
if((state_val_31058 === (37))){
var inst_31017 = (state_31057[(23)]);
var inst_30911 = (state_31057[(9)]);
var inst_31026 = (state_31057[(22)]);
var inst_31026__$1 = cljs.core.first(inst_31017);
var inst_31027 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31026__$1,inst_30911,done);
var state_31057__$1 = (function (){var statearr_31209 = state_31057;
(statearr_31209[(22)] = inst_31026__$1);

return statearr_31209;
})();
if(cljs.core.truth_(inst_31027)){
var statearr_31210_34015 = state_31057__$1;
(statearr_31210_34015[(1)] = (39));

} else {
var statearr_31211_34016 = state_31057__$1;
(statearr_31211_34016[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31058 === (8))){
var inst_30925 = (state_31057[(14)]);
var inst_30924 = (state_31057[(15)]);
var inst_30927 = (inst_30925 < inst_30924);
var inst_30928 = inst_30927;
var state_31057__$1 = state_31057;
if(cljs.core.truth_(inst_30928)){
var statearr_31213_34019 = state_31057__$1;
(statearr_31213_34019[(1)] = (10));

} else {
var statearr_31214_34023 = state_31057__$1;
(statearr_31214_34023[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__29302__auto__ = null;
var cljs$core$async$mult_$_state_machine__29302__auto____0 = (function (){
var statearr_31215 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31215[(0)] = cljs$core$async$mult_$_state_machine__29302__auto__);

(statearr_31215[(1)] = (1));

return statearr_31215;
});
var cljs$core$async$mult_$_state_machine__29302__auto____1 = (function (state_31057){
while(true){
var ret_value__29303__auto__ = (function (){try{while(true){
var result__29304__auto__ = switch__29301__auto__(state_31057);
if(cljs.core.keyword_identical_QMARK_(result__29304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29304__auto__;
}
break;
}
}catch (e31216){var ex__29305__auto__ = e31216;
var statearr_31217_34027 = state_31057;
(statearr_31217_34027[(2)] = ex__29305__auto__);


if(cljs.core.seq((state_31057[(4)]))){
var statearr_31218_34031 = state_31057;
(statearr_31218_34031[(1)] = cljs.core.first((state_31057[(4)])));

} else {
throw ex__29305__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34032 = state_31057;
state_31057 = G__34032;
continue;
} else {
return ret_value__29303__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29302__auto__ = function(state_31057){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29302__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29302__auto____1.call(this,state_31057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29302__auto____0;
cljs$core$async$mult_$_state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29302__auto____1;
return cljs$core$async$mult_$_state_machine__29302__auto__;
})()
})();
var state__29575__auto__ = (function (){var statearr_31219 = f__29574__auto__();
(statearr_31219[(6)] = c__29573__auto___33875);

return statearr_31219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29575__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__31232 = arguments.length;
switch (G__31232) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_34042 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_34042(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_34045 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_34045(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_34049 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_34049(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_34056 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_34056(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_34057 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_34057(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___34058 = arguments.length;
var i__4737__auto___34059 = (0);
while(true){
if((i__4737__auto___34059 < len__4736__auto___34058)){
args__4742__auto__.push((arguments[i__4737__auto___34059]));

var G__34060 = (i__4737__auto___34059 + (1));
i__4737__auto___34059 = G__34060;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31317){
var map__31319 = p__31317;
var map__31319__$1 = (((((!((map__31319 == null))))?(((((map__31319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31319):map__31319);
var opts = map__31319__$1;
var statearr_31324_34061 = state;
(statearr_31324_34061[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31329_34062 = state;
(statearr_31329_34062[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_31332_34063 = state;
(statearr_31332_34063[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31299){
var G__31300 = cljs.core.first(seq31299);
var seq31299__$1 = cljs.core.next(seq31299);
var G__31301 = cljs.core.first(seq31299__$1);
var seq31299__$2 = cljs.core.next(seq31299__$1);
var G__31302 = cljs.core.first(seq31299__$2);
var seq31299__$3 = cljs.core.next(seq31299__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31300,G__31301,G__31302,seq31299__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31359 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31359 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31360){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31360 = meta31360;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31359.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31361,meta31360__$1){
var self__ = this;
var _31361__$1 = this;
return (new cljs.core.async.t_cljs$core$async31359(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31360__$1));
}));

(cljs.core.async.t_cljs$core$async31359.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31361){
var self__ = this;
var _31361__$1 = this;
return self__.meta31360;
}));

(cljs.core.async.t_cljs$core$async31359.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31359.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31359.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31359.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31359.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31359.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31359.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31359.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31359.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31360","meta31360",1902911250,null)], null);
}));

(cljs.core.async.t_cljs$core$async31359.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31359.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31359");

(cljs.core.async.t_cljs$core$async31359.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31359");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31359.
 */
cljs.core.async.__GT_t_cljs$core$async31359 = (function cljs$core$async$mix_$___GT_t_cljs$core$async31359(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31360){
return (new cljs.core.async.t_cljs$core$async31359(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31360));
});

}

return (new cljs.core.async.t_cljs$core$async31359(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29573__auto___34093 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29574__auto__ = (function (){var switch__29301__auto__ = (function (state_31541){
var state_val_31542 = (state_31541[(1)]);
if((state_val_31542 === (7))){
var inst_31432 = (state_31541[(2)]);
var state_31541__$1 = state_31541;
var statearr_31545_34094 = state_31541__$1;
(statearr_31545_34094[(2)] = inst_31432);

(statearr_31545_34094[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31542 === (20))){
var inst_31445 = (state_31541[(7)]);
var state_31541__$1 = state_31541;
var statearr_31549_34095 = state_31541__$1;
(statearr_31549_34095[(2)] = inst_31445);

(statearr_31549_34095[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31542 === (27))){
var state_31541__$1 = state_31541;
var statearr_31551_34098 = state_31541__$1;
(statearr_31551_34098[(2)] = null);

(statearr_31551_34098[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31542 === (1))){
var inst_31414 = (state_31541[(8)]);
var inst_31414__$1 = calc_state();
var inst_31418 = (inst_31414__$1 == null);
var inst_31420 = cljs.core.not(inst_31418);
var state_31541__$1 = (function (){var statearr_31552 = state_31541;
(statearr_31552[(8)] = inst_31414__$1);

return statearr_31552;
})();
if(inst_31420){
var statearr_31554_34099 = state_31541__$1;
(statearr_31554_34099[(1)] = (2));

} else {
var statearr_31557_34100 = state_31541__$1;
(statearr_31557_34100[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31542 === (24))){
var inst_31473 = (state_31541[(9)]);
var inst_31483 = (state_31541[(10)]);
var inst_31503 = (state_31541[(11)]);
var inst_31503__$1 = (inst_31473.cljs$core$IFn$_invoke$arity$1 ? inst_31473.cljs$core$IFn$_invoke$arity$1(inst_31483) : inst_31473.call(null,inst_31483));
var state_31541__$1 = (function (){var statearr_31561 = state_31541;
(statearr_31561[(11)] = inst_31503__$1);

return statearr_31561;
})();
if(cljs.core.truth_(inst_31503__$1)){
var statearr_31566_34101 = state_31541__$1;
(statearr_31566_34101[(1)] = (29));

} else {
var statearr_31568_34102 = state_31541__$1;
(statearr_31568_34102[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31542 === (4))){
var inst_31435 = (state_31541[(2)]);
var state_31541__$1 = state_31541;
if(cljs.core.truth_(inst_31435)){
var statearr_31571_34103 = state_31541__$1;
(statearr_31571_34103[(1)] = (8));

} else {
var statearr_31572_34104 = state_31541__$1;
(statearr_31572_34104[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31542 === (15))){
var inst_31465 = (state_31541[(2)]);
var state_31541__$1 = state_31541;
if(cljs.core.truth_(inst_31465)){
var statearr_31574_34105 = state_31541__$1;
(statearr_31574_34105[(1)] = (19));

} else {
var statearr_31576_34106 = state_31541__$1;
(statearr_31576_34106[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31542 === (21))){
var inst_31470 = (state_31541[(12)]);
var inst_31470__$1 = (state_31541[(2)]);
var inst_31473 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31470__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31474 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31470__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31475 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31470__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31541__$1 = (function (){var statearr_31581 = state_31541;
(statearr_31581[(13)] = inst_31474);

(statearr_31581[(9)] = inst_31473);

(statearr_31581[(12)] = inst_31470__$1);

return statearr_31581;
})();
return cljs.core.async.ioc_alts_BANG_(state_31541__$1,(22),inst_31475);
} else {
if((state_val_31542 === (31))){
var inst_31512 = (state_31541[(2)]);
var state_31541__$1 = state_31541;
if(cljs.core.truth_(inst_31512)){
var statearr_31586_34107 = state_31541__$1;
(statearr_31586_34107[(1)] = (32));

} else {
var statearr_31587_34108 = state_31541__$1;
(statearr_31587_34108[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31542 === (32))){
var inst_31482 = (state_31541[(14)]);
var state_31541__$1 = state_31541;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31541__$1,(35),out,inst_31482);
} else {
if((state_val_31542 === (33))){
var inst_31470 = (state_31541[(12)]);
var inst_31445 = inst_31470;
var state_31541__$1 = (function (){var statearr_31593 = state_31541;
(statearr_31593[(7)] = inst_31445);

return statearr_31593;
})();
var statearr_31596_34109 = state_31541__$1;
(statearr_31596_34109[(2)] = null);

(statearr_31596_34109[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31542 === (13))){
var inst_31445 = (state_31541[(7)]);
var inst_31452 = inst_31445.cljs$lang$protocol_mask$partition0$;
var inst_31453 = (inst_31452 & (64));
var inst_31455 = inst_31445.cljs$core$ISeq$;
var inst_31456 = (cljs.core.PROTOCOL_SENTINEL === inst_31455);
var inst_31457 = ((inst_31453) || (inst_31456));
var state_31541__$1 = state_31541;
if(cljs.core.truth_(inst_31457)){
var statearr_31602_34113 = state_31541__$1;
(statearr_31602_34113[(1)] = (16));

} else {
var statearr_31603_34114 = state_31541__$1;
(statearr_31603_34114[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31542 === (22))){
var inst_31483 = (state_31541[(10)]);
var inst_31482 = (state_31541[(14)]);
var inst_31480 = (state_31541[(2)]);
var inst_31482__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31480,(0),null);
var inst_31483__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31480,(1),null);
var inst_31487 = (inst_31482__$1 == null);
var inst_31488 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31483__$1,change);
var inst_31489 = ((inst_31487) || (inst_31488));
var state_31541__$1 = (function (){var statearr_31606 = state_31541;
(statearr_31606[(10)] = inst_31483__$1);

(statearr_31606[(14)] = inst_31482__$1);

return statearr_31606;
})();
if(cljs.core.truth_(inst_31489)){
var statearr_31608_34115 = state_31541__$1;
(statearr_31608_34115[(1)] = (23));

} else {
var statearr_31610_34116 = state_31541__$1;
(statearr_31610_34116[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31542 === (36))){
var inst_31470 = (state_31541[(12)]);
var inst_31445 = inst_31470;
var state_31541__$1 = (function (){var statearr_31611 = state_31541;
(statearr_31611[(7)] = inst_31445);

return statearr_31611;
})();
var statearr_31617_34117 = state_31541__$1;
(statearr_31617_34117[(2)] = null);

(statearr_31617_34117[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31542 === (29))){
var inst_31503 = (state_31541[(11)]);
var state_31541__$1 = state_31541;
var statearr_31620_34118 = state_31541__$1;
(statearr_31620_34118[(2)] = inst_31503);

(statearr_31620_34118[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31542 === (6))){
var state_31541__$1 = state_31541;
var statearr_31622_34119 = state_31541__$1;
(statearr_31622_34119[(2)] = false);

(statearr_31622_34119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31542 === (28))){
var inst_31496 = (state_31541[(2)]);
var inst_31499 = calc_state();
var inst_31445 = inst_31499;
var state_31541__$1 = (function (){var statearr_31626 = state_31541;
(statearr_31626[(15)] = inst_31496);

(statearr_31626[(7)] = inst_31445);

return statearr_31626;
})();
var statearr_31627_34120 = state_31541__$1;
(statearr_31627_34120[(2)] = null);

(statearr_31627_34120[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31542 === (25))){
var inst_31531 = (state_31541[(2)]);
var state_31541__$1 = state_31541;
var statearr_31631_34122 = state_31541__$1;
(statearr_31631_34122[(2)] = inst_31531);

(statearr_31631_34122[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31542 === (34))){
var inst_31529 = (state_31541[(2)]);
var state_31541__$1 = state_31541;
var statearr_31637_34123 = state_31541__$1;
(statearr_31637_34123[(2)] = inst_31529);

(statearr_31637_34123[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31542 === (17))){
var state_31541__$1 = state_31541;
var statearr_31640_34124 = state_31541__$1;
(statearr_31640_34124[(2)] = false);

(statearr_31640_34124[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31542 === (3))){
var state_31541__$1 = state_31541;
var statearr_31647_34126 = state_31541__$1;
(statearr_31647_34126[(2)] = false);

(statearr_31647_34126[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31542 === (12))){
var inst_31533 = (state_31541[(2)]);
var state_31541__$1 = state_31541;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31541__$1,inst_31533);
} else {
if((state_val_31542 === (2))){
var inst_31414 = (state_31541[(8)]);
var inst_31423 = inst_31414.cljs$lang$protocol_mask$partition0$;
var inst_31424 = (inst_31423 & (64));
var inst_31426 = inst_31414.cljs$core$ISeq$;
var inst_31427 = (cljs.core.PROTOCOL_SENTINEL === inst_31426);
var inst_31428 = ((inst_31424) || (inst_31427));
var state_31541__$1 = state_31541;
if(cljs.core.truth_(inst_31428)){
var statearr_31649_34128 = state_31541__$1;
(statearr_31649_34128[(1)] = (5));

} else {
var statearr_31652_34132 = state_31541__$1;
(statearr_31652_34132[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31542 === (23))){
var inst_31482 = (state_31541[(14)]);
var inst_31491 = (inst_31482 == null);
var state_31541__$1 = state_31541;
if(cljs.core.truth_(inst_31491)){
var statearr_31656_34134 = state_31541__$1;
(statearr_31656_34134[(1)] = (26));

} else {
var statearr_31657_34136 = state_31541__$1;
(statearr_31657_34136[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31542 === (35))){
var inst_31519 = (state_31541[(2)]);
var state_31541__$1 = state_31541;
if(cljs.core.truth_(inst_31519)){
var statearr_31661_34137 = state_31541__$1;
(statearr_31661_34137[(1)] = (36));

} else {
var statearr_31662_34138 = state_31541__$1;
(statearr_31662_34138[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31542 === (19))){
var inst_31445 = (state_31541[(7)]);
var inst_31467 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31445);
var state_31541__$1 = state_31541;
var statearr_31666_34139 = state_31541__$1;
(statearr_31666_34139[(2)] = inst_31467);

(statearr_31666_34139[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31542 === (11))){
var inst_31445 = (state_31541[(7)]);
var inst_31449 = (inst_31445 == null);
var inst_31450 = cljs.core.not(inst_31449);
var state_31541__$1 = state_31541;
if(inst_31450){
var statearr_31672_34143 = state_31541__$1;
(statearr_31672_34143[(1)] = (13));

} else {
var statearr_31674_34144 = state_31541__$1;
(statearr_31674_34144[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31542 === (9))){
var inst_31414 = (state_31541[(8)]);
var state_31541__$1 = state_31541;
var statearr_31677_34150 = state_31541__$1;
(statearr_31677_34150[(2)] = inst_31414);

(statearr_31677_34150[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31542 === (5))){
var state_31541__$1 = state_31541;
var statearr_31679_34152 = state_31541__$1;
(statearr_31679_34152[(2)] = true);

(statearr_31679_34152[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31542 === (14))){
var state_31541__$1 = state_31541;
var statearr_31680_34154 = state_31541__$1;
(statearr_31680_34154[(2)] = false);

(statearr_31680_34154[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31542 === (26))){
var inst_31483 = (state_31541[(10)]);
var inst_31493 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31483);
var state_31541__$1 = state_31541;
var statearr_31684_34155 = state_31541__$1;
(statearr_31684_34155[(2)] = inst_31493);

(statearr_31684_34155[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31542 === (16))){
var state_31541__$1 = state_31541;
var statearr_31685_34156 = state_31541__$1;
(statearr_31685_34156[(2)] = true);

(statearr_31685_34156[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31542 === (38))){
var inst_31525 = (state_31541[(2)]);
var state_31541__$1 = state_31541;
var statearr_31687_34157 = state_31541__$1;
(statearr_31687_34157[(2)] = inst_31525);

(statearr_31687_34157[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31542 === (30))){
var inst_31474 = (state_31541[(13)]);
var inst_31473 = (state_31541[(9)]);
var inst_31483 = (state_31541[(10)]);
var inst_31507 = cljs.core.empty_QMARK_(inst_31473);
var inst_31508 = (inst_31474.cljs$core$IFn$_invoke$arity$1 ? inst_31474.cljs$core$IFn$_invoke$arity$1(inst_31483) : inst_31474.call(null,inst_31483));
var inst_31509 = cljs.core.not(inst_31508);
var inst_31510 = ((inst_31507) && (inst_31509));
var state_31541__$1 = state_31541;
var statearr_31690_34159 = state_31541__$1;
(statearr_31690_34159[(2)] = inst_31510);

(statearr_31690_34159[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31542 === (10))){
var inst_31414 = (state_31541[(8)]);
var inst_31440 = (state_31541[(2)]);
var inst_31441 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31440,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31442 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31440,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31444 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31440,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31445 = inst_31414;
var state_31541__$1 = (function (){var statearr_31696 = state_31541;
(statearr_31696[(16)] = inst_31444);

(statearr_31696[(17)] = inst_31442);

(statearr_31696[(7)] = inst_31445);

(statearr_31696[(18)] = inst_31441);

return statearr_31696;
})();
var statearr_31698_34167 = state_31541__$1;
(statearr_31698_34167[(2)] = null);

(statearr_31698_34167[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31542 === (18))){
var inst_31462 = (state_31541[(2)]);
var state_31541__$1 = state_31541;
var statearr_31703_34169 = state_31541__$1;
(statearr_31703_34169[(2)] = inst_31462);

(statearr_31703_34169[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31542 === (37))){
var state_31541__$1 = state_31541;
var statearr_31708_34170 = state_31541__$1;
(statearr_31708_34170[(2)] = null);

(statearr_31708_34170[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31542 === (8))){
var inst_31414 = (state_31541[(8)]);
var inst_31437 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31414);
var state_31541__$1 = state_31541;
var statearr_31712_34176 = state_31541__$1;
(statearr_31712_34176[(2)] = inst_31437);

(statearr_31712_34176[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__29302__auto__ = null;
var cljs$core$async$mix_$_state_machine__29302__auto____0 = (function (){
var statearr_31714 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31714[(0)] = cljs$core$async$mix_$_state_machine__29302__auto__);

(statearr_31714[(1)] = (1));

return statearr_31714;
});
var cljs$core$async$mix_$_state_machine__29302__auto____1 = (function (state_31541){
while(true){
var ret_value__29303__auto__ = (function (){try{while(true){
var result__29304__auto__ = switch__29301__auto__(state_31541);
if(cljs.core.keyword_identical_QMARK_(result__29304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29304__auto__;
}
break;
}
}catch (e31715){var ex__29305__auto__ = e31715;
var statearr_31716_34182 = state_31541;
(statearr_31716_34182[(2)] = ex__29305__auto__);


if(cljs.core.seq((state_31541[(4)]))){
var statearr_31718_34183 = state_31541;
(statearr_31718_34183[(1)] = cljs.core.first((state_31541[(4)])));

} else {
throw ex__29305__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34184 = state_31541;
state_31541 = G__34184;
continue;
} else {
return ret_value__29303__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29302__auto__ = function(state_31541){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29302__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29302__auto____1.call(this,state_31541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29302__auto____0;
cljs$core$async$mix_$_state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29302__auto____1;
return cljs$core$async$mix_$_state_machine__29302__auto__;
})()
})();
var state__29575__auto__ = (function (){var statearr_31725 = f__29574__auto__();
(statearr_31725[(6)] = c__29573__auto___34093);

return statearr_31725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29575__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_34196 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_34196(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_34203 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_34203(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_34209 = (function() {
var G__34210 = null;
var G__34210__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__34210__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__34210 = function(p,v){
switch(arguments.length){
case 1:
return G__34210__1.call(this,p);
case 2:
return G__34210__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34210.cljs$core$IFn$_invoke$arity$1 = G__34210__1;
G__34210.cljs$core$IFn$_invoke$arity$2 = G__34210__2;
return G__34210;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31803 = arguments.length;
switch (G__31803) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34209(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34209(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__31828 = arguments.length;
switch (G__31828) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__31818_SHARP_){
if(cljs.core.truth_((p1__31818_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31818_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31818_SHARP_.call(null,topic)))){
return p1__31818_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31818_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31853 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31853 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31854){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31854 = meta31854;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31853.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31855,meta31854__$1){
var self__ = this;
var _31855__$1 = this;
return (new cljs.core.async.t_cljs$core$async31853(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31854__$1));
}));

(cljs.core.async.t_cljs$core$async31853.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31855){
var self__ = this;
var _31855__$1 = this;
return self__.meta31854;
}));

(cljs.core.async.t_cljs$core$async31853.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31853.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31853.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31853.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async31853.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async31853.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async31853.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async31853.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31854","meta31854",-735342959,null)], null);
}));

(cljs.core.async.t_cljs$core$async31853.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31853.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31853");

(cljs.core.async.t_cljs$core$async31853.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31853");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31853.
 */
cljs.core.async.__GT_t_cljs$core$async31853 = (function cljs$core$async$__GT_t_cljs$core$async31853(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31854){
return (new cljs.core.async.t_cljs$core$async31853(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31854));
});

}

return (new cljs.core.async.t_cljs$core$async31853(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29573__auto___34249 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29574__auto__ = (function (){var switch__29301__auto__ = (function (state_32032){
var state_val_32033 = (state_32032[(1)]);
if((state_val_32033 === (7))){
var inst_32020 = (state_32032[(2)]);
var state_32032__$1 = state_32032;
var statearr_32040_34250 = state_32032__$1;
(statearr_32040_34250[(2)] = inst_32020);

(statearr_32040_34250[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32033 === (20))){
var state_32032__$1 = state_32032;
var statearr_32048_34251 = state_32032__$1;
(statearr_32048_34251[(2)] = null);

(statearr_32048_34251[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32033 === (1))){
var state_32032__$1 = state_32032;
var statearr_32051_34256 = state_32032__$1;
(statearr_32051_34256[(2)] = null);

(statearr_32051_34256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32033 === (24))){
var inst_31998 = (state_32032[(7)]);
var inst_32010 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31998);
var state_32032__$1 = state_32032;
var statearr_32063_34257 = state_32032__$1;
(statearr_32063_34257[(2)] = inst_32010);

(statearr_32063_34257[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32033 === (4))){
var inst_31924 = (state_32032[(8)]);
var inst_31924__$1 = (state_32032[(2)]);
var inst_31925 = (inst_31924__$1 == null);
var state_32032__$1 = (function (){var statearr_32068 = state_32032;
(statearr_32068[(8)] = inst_31924__$1);

return statearr_32068;
})();
if(cljs.core.truth_(inst_31925)){
var statearr_32070_34259 = state_32032__$1;
(statearr_32070_34259[(1)] = (5));

} else {
var statearr_32073_34263 = state_32032__$1;
(statearr_32073_34263[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32033 === (15))){
var inst_31991 = (state_32032[(2)]);
var state_32032__$1 = state_32032;
var statearr_32078_34264 = state_32032__$1;
(statearr_32078_34264[(2)] = inst_31991);

(statearr_32078_34264[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32033 === (21))){
var inst_32015 = (state_32032[(2)]);
var state_32032__$1 = (function (){var statearr_32080 = state_32032;
(statearr_32080[(9)] = inst_32015);

return statearr_32080;
})();
var statearr_32084_34269 = state_32032__$1;
(statearr_32084_34269[(2)] = null);

(statearr_32084_34269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32033 === (13))){
var inst_31961 = (state_32032[(10)]);
var inst_31965 = cljs.core.chunked_seq_QMARK_(inst_31961);
var state_32032__$1 = state_32032;
if(inst_31965){
var statearr_32088_34273 = state_32032__$1;
(statearr_32088_34273[(1)] = (16));

} else {
var statearr_32089_34274 = state_32032__$1;
(statearr_32089_34274[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32033 === (22))){
var inst_32005 = (state_32032[(2)]);
var state_32032__$1 = state_32032;
if(cljs.core.truth_(inst_32005)){
var statearr_32095_34278 = state_32032__$1;
(statearr_32095_34278[(1)] = (23));

} else {
var statearr_32097_34279 = state_32032__$1;
(statearr_32097_34279[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32033 === (6))){
var inst_32000 = (state_32032[(11)]);
var inst_31998 = (state_32032[(7)]);
var inst_31924 = (state_32032[(8)]);
var inst_31998__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31924) : topic_fn.call(null,inst_31924));
var inst_31999 = cljs.core.deref(mults);
var inst_32000__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31999,inst_31998__$1);
var state_32032__$1 = (function (){var statearr_32104 = state_32032;
(statearr_32104[(11)] = inst_32000__$1);

(statearr_32104[(7)] = inst_31998__$1);

return statearr_32104;
})();
if(cljs.core.truth_(inst_32000__$1)){
var statearr_32107_34286 = state_32032__$1;
(statearr_32107_34286[(1)] = (19));

} else {
var statearr_32109_34288 = state_32032__$1;
(statearr_32109_34288[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32033 === (25))){
var inst_32012 = (state_32032[(2)]);
var state_32032__$1 = state_32032;
var statearr_32110_34290 = state_32032__$1;
(statearr_32110_34290[(2)] = inst_32012);

(statearr_32110_34290[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32033 === (17))){
var inst_31961 = (state_32032[(10)]);
var inst_31976 = cljs.core.first(inst_31961);
var inst_31981 = cljs.core.async.muxch_STAR_(inst_31976);
var inst_31983 = cljs.core.async.close_BANG_(inst_31981);
var inst_31985 = cljs.core.next(inst_31961);
var inst_31939 = inst_31985;
var inst_31940 = null;
var inst_31941 = (0);
var inst_31942 = (0);
var state_32032__$1 = (function (){var statearr_32117 = state_32032;
(statearr_32117[(12)] = inst_31940);

(statearr_32117[(13)] = inst_31939);

(statearr_32117[(14)] = inst_31942);

(statearr_32117[(15)] = inst_31941);

(statearr_32117[(16)] = inst_31983);

return statearr_32117;
})();
var statearr_32120_34306 = state_32032__$1;
(statearr_32120_34306[(2)] = null);

(statearr_32120_34306[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32033 === (3))){
var inst_32022 = (state_32032[(2)]);
var state_32032__$1 = state_32032;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32032__$1,inst_32022);
} else {
if((state_val_32033 === (12))){
var inst_31993 = (state_32032[(2)]);
var state_32032__$1 = state_32032;
var statearr_32124_34309 = state_32032__$1;
(statearr_32124_34309[(2)] = inst_31993);

(statearr_32124_34309[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32033 === (2))){
var state_32032__$1 = state_32032;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32032__$1,(4),ch);
} else {
if((state_val_32033 === (23))){
var state_32032__$1 = state_32032;
var statearr_32131_34313 = state_32032__$1;
(statearr_32131_34313[(2)] = null);

(statearr_32131_34313[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32033 === (19))){
var inst_32000 = (state_32032[(11)]);
var inst_31924 = (state_32032[(8)]);
var inst_32003 = cljs.core.async.muxch_STAR_(inst_32000);
var state_32032__$1 = state_32032;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32032__$1,(22),inst_32003,inst_31924);
} else {
if((state_val_32033 === (11))){
var inst_31939 = (state_32032[(13)]);
var inst_31961 = (state_32032[(10)]);
var inst_31961__$1 = cljs.core.seq(inst_31939);
var state_32032__$1 = (function (){var statearr_32147 = state_32032;
(statearr_32147[(10)] = inst_31961__$1);

return statearr_32147;
})();
if(inst_31961__$1){
var statearr_32148_34316 = state_32032__$1;
(statearr_32148_34316[(1)] = (13));

} else {
var statearr_32149_34318 = state_32032__$1;
(statearr_32149_34318[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32033 === (9))){
var inst_31995 = (state_32032[(2)]);
var state_32032__$1 = state_32032;
var statearr_32151_34320 = state_32032__$1;
(statearr_32151_34320[(2)] = inst_31995);

(statearr_32151_34320[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32033 === (5))){
var inst_31936 = cljs.core.deref(mults);
var inst_31937 = cljs.core.vals(inst_31936);
var inst_31938 = cljs.core.seq(inst_31937);
var inst_31939 = inst_31938;
var inst_31940 = null;
var inst_31941 = (0);
var inst_31942 = (0);
var state_32032__$1 = (function (){var statearr_32152 = state_32032;
(statearr_32152[(12)] = inst_31940);

(statearr_32152[(13)] = inst_31939);

(statearr_32152[(14)] = inst_31942);

(statearr_32152[(15)] = inst_31941);

return statearr_32152;
})();
var statearr_32154_34326 = state_32032__$1;
(statearr_32154_34326[(2)] = null);

(statearr_32154_34326[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32033 === (14))){
var state_32032__$1 = state_32032;
var statearr_32159_34327 = state_32032__$1;
(statearr_32159_34327[(2)] = null);

(statearr_32159_34327[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32033 === (16))){
var inst_31961 = (state_32032[(10)]);
var inst_31967 = cljs.core.chunk_first(inst_31961);
var inst_31970 = cljs.core.chunk_rest(inst_31961);
var inst_31971 = cljs.core.count(inst_31967);
var inst_31939 = inst_31970;
var inst_31940 = inst_31967;
var inst_31941 = inst_31971;
var inst_31942 = (0);
var state_32032__$1 = (function (){var statearr_32162 = state_32032;
(statearr_32162[(12)] = inst_31940);

(statearr_32162[(13)] = inst_31939);

(statearr_32162[(14)] = inst_31942);

(statearr_32162[(15)] = inst_31941);

return statearr_32162;
})();
var statearr_32169_34334 = state_32032__$1;
(statearr_32169_34334[(2)] = null);

(statearr_32169_34334[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32033 === (10))){
var inst_31940 = (state_32032[(12)]);
var inst_31939 = (state_32032[(13)]);
var inst_31942 = (state_32032[(14)]);
var inst_31941 = (state_32032[(15)]);
var inst_31955 = cljs.core._nth(inst_31940,inst_31942);
var inst_31956 = cljs.core.async.muxch_STAR_(inst_31955);
var inst_31957 = cljs.core.async.close_BANG_(inst_31956);
var inst_31958 = (inst_31942 + (1));
var tmp32156 = inst_31940;
var tmp32157 = inst_31939;
var tmp32158 = inst_31941;
var inst_31939__$1 = tmp32157;
var inst_31940__$1 = tmp32156;
var inst_31941__$1 = tmp32158;
var inst_31942__$1 = inst_31958;
var state_32032__$1 = (function (){var statearr_32181 = state_32032;
(statearr_32181[(12)] = inst_31940__$1);

(statearr_32181[(13)] = inst_31939__$1);

(statearr_32181[(17)] = inst_31957);

(statearr_32181[(14)] = inst_31942__$1);

(statearr_32181[(15)] = inst_31941__$1);

return statearr_32181;
})();
var statearr_32182_34340 = state_32032__$1;
(statearr_32182_34340[(2)] = null);

(statearr_32182_34340[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32033 === (18))){
var inst_31988 = (state_32032[(2)]);
var state_32032__$1 = state_32032;
var statearr_32185_34343 = state_32032__$1;
(statearr_32185_34343[(2)] = inst_31988);

(statearr_32185_34343[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32033 === (8))){
var inst_31942 = (state_32032[(14)]);
var inst_31941 = (state_32032[(15)]);
var inst_31950 = (inst_31942 < inst_31941);
var inst_31951 = inst_31950;
var state_32032__$1 = state_32032;
if(cljs.core.truth_(inst_31951)){
var statearr_32189_34345 = state_32032__$1;
(statearr_32189_34345[(1)] = (10));

} else {
var statearr_32193_34346 = state_32032__$1;
(statearr_32193_34346[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29302__auto__ = null;
var cljs$core$async$state_machine__29302__auto____0 = (function (){
var statearr_32196 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32196[(0)] = cljs$core$async$state_machine__29302__auto__);

(statearr_32196[(1)] = (1));

return statearr_32196;
});
var cljs$core$async$state_machine__29302__auto____1 = (function (state_32032){
while(true){
var ret_value__29303__auto__ = (function (){try{while(true){
var result__29304__auto__ = switch__29301__auto__(state_32032);
if(cljs.core.keyword_identical_QMARK_(result__29304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29304__auto__;
}
break;
}
}catch (e32200){var ex__29305__auto__ = e32200;
var statearr_32201_34358 = state_32032;
(statearr_32201_34358[(2)] = ex__29305__auto__);


if(cljs.core.seq((state_32032[(4)]))){
var statearr_32204_34363 = state_32032;
(statearr_32204_34363[(1)] = cljs.core.first((state_32032[(4)])));

} else {
throw ex__29305__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34365 = state_32032;
state_32032 = G__34365;
continue;
} else {
return ret_value__29303__auto__;
}
break;
}
});
cljs$core$async$state_machine__29302__auto__ = function(state_32032){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29302__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29302__auto____1.call(this,state_32032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29302__auto____0;
cljs$core$async$state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29302__auto____1;
return cljs$core$async$state_machine__29302__auto__;
})()
})();
var state__29575__auto__ = (function (){var statearr_32206 = f__29574__auto__();
(statearr_32206[(6)] = c__29573__auto___34249);

return statearr_32206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29575__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__32217 = arguments.length;
switch (G__32217) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__32228 = arguments.length;
switch (G__32228) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__32246 = arguments.length;
switch (G__32246) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__29573__auto___34411 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29574__auto__ = (function (){var switch__29301__auto__ = (function (state_32322){
var state_val_32323 = (state_32322[(1)]);
if((state_val_32323 === (7))){
var state_32322__$1 = state_32322;
var statearr_32331_34415 = state_32322__$1;
(statearr_32331_34415[(2)] = null);

(statearr_32331_34415[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32323 === (1))){
var state_32322__$1 = state_32322;
var statearr_32334_34417 = state_32322__$1;
(statearr_32334_34417[(2)] = null);

(statearr_32334_34417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32323 === (4))){
var inst_32255 = (state_32322[(7)]);
var inst_32254 = (state_32322[(8)]);
var inst_32257 = (inst_32255 < inst_32254);
var state_32322__$1 = state_32322;
if(cljs.core.truth_(inst_32257)){
var statearr_32337_34423 = state_32322__$1;
(statearr_32337_34423[(1)] = (6));

} else {
var statearr_32338_34425 = state_32322__$1;
(statearr_32338_34425[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32323 === (15))){
var inst_32297 = (state_32322[(9)]);
var inst_32306 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32297);
var state_32322__$1 = state_32322;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32322__$1,(17),out,inst_32306);
} else {
if((state_val_32323 === (13))){
var inst_32297 = (state_32322[(9)]);
var inst_32297__$1 = (state_32322[(2)]);
var inst_32298 = cljs.core.some(cljs.core.nil_QMARK_,inst_32297__$1);
var state_32322__$1 = (function (){var statearr_32342 = state_32322;
(statearr_32342[(9)] = inst_32297__$1);

return statearr_32342;
})();
if(cljs.core.truth_(inst_32298)){
var statearr_32344_34436 = state_32322__$1;
(statearr_32344_34436[(1)] = (14));

} else {
var statearr_32345_34437 = state_32322__$1;
(statearr_32345_34437[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32323 === (6))){
var state_32322__$1 = state_32322;
var statearr_32346_34439 = state_32322__$1;
(statearr_32346_34439[(2)] = null);

(statearr_32346_34439[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32323 === (17))){
var inst_32308 = (state_32322[(2)]);
var state_32322__$1 = (function (){var statearr_32357 = state_32322;
(statearr_32357[(10)] = inst_32308);

return statearr_32357;
})();
var statearr_32358_34442 = state_32322__$1;
(statearr_32358_34442[(2)] = null);

(statearr_32358_34442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32323 === (3))){
var inst_32313 = (state_32322[(2)]);
var state_32322__$1 = state_32322;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32322__$1,inst_32313);
} else {
if((state_val_32323 === (12))){
var _ = (function (){var statearr_32360 = state_32322;
(statearr_32360[(4)] = cljs.core.rest((state_32322[(4)])));

return statearr_32360;
})();
var state_32322__$1 = state_32322;
var ex32354 = (state_32322__$1[(2)]);
var statearr_32361_34448 = state_32322__$1;
(statearr_32361_34448[(5)] = ex32354);


if((ex32354 instanceof Object)){
var statearr_32362_34454 = state_32322__$1;
(statearr_32362_34454[(1)] = (11));

(statearr_32362_34454[(5)] = null);

} else {
throw ex32354;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32323 === (2))){
var inst_32253 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32254 = cnt;
var inst_32255 = (0);
var state_32322__$1 = (function (){var statearr_32365 = state_32322;
(statearr_32365[(11)] = inst_32253);

(statearr_32365[(7)] = inst_32255);

(statearr_32365[(8)] = inst_32254);

return statearr_32365;
})();
var statearr_32366_34470 = state_32322__$1;
(statearr_32366_34470[(2)] = null);

(statearr_32366_34470[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32323 === (11))){
var inst_32267 = (state_32322[(2)]);
var inst_32272 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32322__$1 = (function (){var statearr_32367 = state_32322;
(statearr_32367[(12)] = inst_32267);

return statearr_32367;
})();
var statearr_32368_34480 = state_32322__$1;
(statearr_32368_34480[(2)] = inst_32272);

(statearr_32368_34480[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32323 === (9))){
var inst_32255 = (state_32322[(7)]);
var _ = (function (){var statearr_32370 = state_32322;
(statearr_32370[(4)] = cljs.core.cons((12),(state_32322[(4)])));

return statearr_32370;
})();
var inst_32278 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32255) : chs__$1.call(null,inst_32255));
var inst_32283 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32255) : done.call(null,inst_32255));
var inst_32284 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32278,inst_32283);
var ___$1 = (function (){var statearr_32372 = state_32322;
(statearr_32372[(4)] = cljs.core.rest((state_32322[(4)])));

return statearr_32372;
})();
var state_32322__$1 = state_32322;
var statearr_32373_34492 = state_32322__$1;
(statearr_32373_34492[(2)] = inst_32284);

(statearr_32373_34492[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32323 === (5))){
var inst_32295 = (state_32322[(2)]);
var state_32322__$1 = (function (){var statearr_32374 = state_32322;
(statearr_32374[(13)] = inst_32295);

return statearr_32374;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32322__$1,(13),dchan);
} else {
if((state_val_32323 === (14))){
var inst_32300 = cljs.core.async.close_BANG_(out);
var state_32322__$1 = state_32322;
var statearr_32375_34497 = state_32322__$1;
(statearr_32375_34497[(2)] = inst_32300);

(statearr_32375_34497[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32323 === (16))){
var inst_32311 = (state_32322[(2)]);
var state_32322__$1 = state_32322;
var statearr_32376_34498 = state_32322__$1;
(statearr_32376_34498[(2)] = inst_32311);

(statearr_32376_34498[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32323 === (10))){
var inst_32255 = (state_32322[(7)]);
var inst_32287 = (state_32322[(2)]);
var inst_32288 = (inst_32255 + (1));
var inst_32255__$1 = inst_32288;
var state_32322__$1 = (function (){var statearr_32378 = state_32322;
(statearr_32378[(7)] = inst_32255__$1);

(statearr_32378[(14)] = inst_32287);

return statearr_32378;
})();
var statearr_32379_34510 = state_32322__$1;
(statearr_32379_34510[(2)] = null);

(statearr_32379_34510[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32323 === (8))){
var inst_32292 = (state_32322[(2)]);
var state_32322__$1 = state_32322;
var statearr_32381_34513 = state_32322__$1;
(statearr_32381_34513[(2)] = inst_32292);

(statearr_32381_34513[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29302__auto__ = null;
var cljs$core$async$state_machine__29302__auto____0 = (function (){
var statearr_32384 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32384[(0)] = cljs$core$async$state_machine__29302__auto__);

(statearr_32384[(1)] = (1));

return statearr_32384;
});
var cljs$core$async$state_machine__29302__auto____1 = (function (state_32322){
while(true){
var ret_value__29303__auto__ = (function (){try{while(true){
var result__29304__auto__ = switch__29301__auto__(state_32322);
if(cljs.core.keyword_identical_QMARK_(result__29304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29304__auto__;
}
break;
}
}catch (e32388){var ex__29305__auto__ = e32388;
var statearr_32389_34518 = state_32322;
(statearr_32389_34518[(2)] = ex__29305__auto__);


if(cljs.core.seq((state_32322[(4)]))){
var statearr_32390_34521 = state_32322;
(statearr_32390_34521[(1)] = cljs.core.first((state_32322[(4)])));

} else {
throw ex__29305__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34528 = state_32322;
state_32322 = G__34528;
continue;
} else {
return ret_value__29303__auto__;
}
break;
}
});
cljs$core$async$state_machine__29302__auto__ = function(state_32322){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29302__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29302__auto____1.call(this,state_32322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29302__auto____0;
cljs$core$async$state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29302__auto____1;
return cljs$core$async$state_machine__29302__auto__;
})()
})();
var state__29575__auto__ = (function (){var statearr_32392 = f__29574__auto__();
(statearr_32392[(6)] = c__29573__auto___34411);

return statearr_32392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29575__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__32402 = arguments.length;
switch (G__32402) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29573__auto___34543 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29574__auto__ = (function (){var switch__29301__auto__ = (function (state_32467){
var state_val_32468 = (state_32467[(1)]);
if((state_val_32468 === (7))){
var inst_32433 = (state_32467[(7)]);
var inst_32432 = (state_32467[(8)]);
var inst_32432__$1 = (state_32467[(2)]);
var inst_32433__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32432__$1,(0),null);
var inst_32434 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32432__$1,(1),null);
var inst_32438 = (inst_32433__$1 == null);
var state_32467__$1 = (function (){var statearr_32473 = state_32467;
(statearr_32473[(9)] = inst_32434);

(statearr_32473[(7)] = inst_32433__$1);

(statearr_32473[(8)] = inst_32432__$1);

return statearr_32473;
})();
if(cljs.core.truth_(inst_32438)){
var statearr_32476_34548 = state_32467__$1;
(statearr_32476_34548[(1)] = (8));

} else {
var statearr_32477_34551 = state_32467__$1;
(statearr_32477_34551[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32468 === (1))){
var inst_32419 = cljs.core.vec(chs);
var inst_32421 = inst_32419;
var state_32467__$1 = (function (){var statearr_32478 = state_32467;
(statearr_32478[(10)] = inst_32421);

return statearr_32478;
})();
var statearr_32481_34552 = state_32467__$1;
(statearr_32481_34552[(2)] = null);

(statearr_32481_34552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32468 === (4))){
var inst_32421 = (state_32467[(10)]);
var state_32467__$1 = state_32467;
return cljs.core.async.ioc_alts_BANG_(state_32467__$1,(7),inst_32421);
} else {
if((state_val_32468 === (6))){
var inst_32462 = (state_32467[(2)]);
var state_32467__$1 = state_32467;
var statearr_32483_34557 = state_32467__$1;
(statearr_32483_34557[(2)] = inst_32462);

(statearr_32483_34557[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32468 === (3))){
var inst_32464 = (state_32467[(2)]);
var state_32467__$1 = state_32467;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32467__$1,inst_32464);
} else {
if((state_val_32468 === (2))){
var inst_32421 = (state_32467[(10)]);
var inst_32425 = cljs.core.count(inst_32421);
var inst_32426 = (inst_32425 > (0));
var state_32467__$1 = state_32467;
if(cljs.core.truth_(inst_32426)){
var statearr_32485_34573 = state_32467__$1;
(statearr_32485_34573[(1)] = (4));

} else {
var statearr_32493_34584 = state_32467__$1;
(statearr_32493_34584[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32468 === (11))){
var inst_32421 = (state_32467[(10)]);
var inst_32455 = (state_32467[(2)]);
var tmp32484 = inst_32421;
var inst_32421__$1 = tmp32484;
var state_32467__$1 = (function (){var statearr_32500 = state_32467;
(statearr_32500[(10)] = inst_32421__$1);

(statearr_32500[(11)] = inst_32455);

return statearr_32500;
})();
var statearr_32501_34595 = state_32467__$1;
(statearr_32501_34595[(2)] = null);

(statearr_32501_34595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32468 === (9))){
var inst_32433 = (state_32467[(7)]);
var state_32467__$1 = state_32467;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32467__$1,(11),out,inst_32433);
} else {
if((state_val_32468 === (5))){
var inst_32460 = cljs.core.async.close_BANG_(out);
var state_32467__$1 = state_32467;
var statearr_32515_34598 = state_32467__$1;
(statearr_32515_34598[(2)] = inst_32460);

(statearr_32515_34598[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32468 === (10))){
var inst_32458 = (state_32467[(2)]);
var state_32467__$1 = state_32467;
var statearr_32520_34599 = state_32467__$1;
(statearr_32520_34599[(2)] = inst_32458);

(statearr_32520_34599[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32468 === (8))){
var inst_32421 = (state_32467[(10)]);
var inst_32434 = (state_32467[(9)]);
var inst_32433 = (state_32467[(7)]);
var inst_32432 = (state_32467[(8)]);
var inst_32450 = (function (){var cs = inst_32421;
var vec__32428 = inst_32432;
var v = inst_32433;
var c = inst_32434;
return (function (p1__32397_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32397_SHARP_);
});
})();
var inst_32451 = cljs.core.filterv(inst_32450,inst_32421);
var inst_32421__$1 = inst_32451;
var state_32467__$1 = (function (){var statearr_32535 = state_32467;
(statearr_32535[(10)] = inst_32421__$1);

return statearr_32535;
})();
var statearr_32536_34607 = state_32467__$1;
(statearr_32536_34607[(2)] = null);

(statearr_32536_34607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29302__auto__ = null;
var cljs$core$async$state_machine__29302__auto____0 = (function (){
var statearr_32537 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32537[(0)] = cljs$core$async$state_machine__29302__auto__);

(statearr_32537[(1)] = (1));

return statearr_32537;
});
var cljs$core$async$state_machine__29302__auto____1 = (function (state_32467){
while(true){
var ret_value__29303__auto__ = (function (){try{while(true){
var result__29304__auto__ = switch__29301__auto__(state_32467);
if(cljs.core.keyword_identical_QMARK_(result__29304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29304__auto__;
}
break;
}
}catch (e32542){var ex__29305__auto__ = e32542;
var statearr_32543_34619 = state_32467;
(statearr_32543_34619[(2)] = ex__29305__auto__);


if(cljs.core.seq((state_32467[(4)]))){
var statearr_32546_34628 = state_32467;
(statearr_32546_34628[(1)] = cljs.core.first((state_32467[(4)])));

} else {
throw ex__29305__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34638 = state_32467;
state_32467 = G__34638;
continue;
} else {
return ret_value__29303__auto__;
}
break;
}
});
cljs$core$async$state_machine__29302__auto__ = function(state_32467){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29302__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29302__auto____1.call(this,state_32467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29302__auto____0;
cljs$core$async$state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29302__auto____1;
return cljs$core$async$state_machine__29302__auto__;
})()
})();
var state__29575__auto__ = (function (){var statearr_32548 = f__29574__auto__();
(statearr_32548[(6)] = c__29573__auto___34543);

return statearr_32548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29575__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__32556 = arguments.length;
switch (G__32556) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29573__auto___34658 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29574__auto__ = (function (){var switch__29301__auto__ = (function (state_32582){
var state_val_32583 = (state_32582[(1)]);
if((state_val_32583 === (7))){
var inst_32563 = (state_32582[(7)]);
var inst_32563__$1 = (state_32582[(2)]);
var inst_32564 = (inst_32563__$1 == null);
var inst_32565 = cljs.core.not(inst_32564);
var state_32582__$1 = (function (){var statearr_32590 = state_32582;
(statearr_32590[(7)] = inst_32563__$1);

return statearr_32590;
})();
if(inst_32565){
var statearr_32591_34671 = state_32582__$1;
(statearr_32591_34671[(1)] = (8));

} else {
var statearr_32592_34672 = state_32582__$1;
(statearr_32592_34672[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32583 === (1))){
var inst_32558 = (0);
var state_32582__$1 = (function (){var statearr_32593 = state_32582;
(statearr_32593[(8)] = inst_32558);

return statearr_32593;
})();
var statearr_32594_34674 = state_32582__$1;
(statearr_32594_34674[(2)] = null);

(statearr_32594_34674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32583 === (4))){
var state_32582__$1 = state_32582;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32582__$1,(7),ch);
} else {
if((state_val_32583 === (6))){
var inst_32576 = (state_32582[(2)]);
var state_32582__$1 = state_32582;
var statearr_32599_34680 = state_32582__$1;
(statearr_32599_34680[(2)] = inst_32576);

(statearr_32599_34680[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32583 === (3))){
var inst_32578 = (state_32582[(2)]);
var inst_32579 = cljs.core.async.close_BANG_(out);
var state_32582__$1 = (function (){var statearr_32600 = state_32582;
(statearr_32600[(9)] = inst_32578);

return statearr_32600;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32582__$1,inst_32579);
} else {
if((state_val_32583 === (2))){
var inst_32558 = (state_32582[(8)]);
var inst_32560 = (inst_32558 < n);
var state_32582__$1 = state_32582;
if(cljs.core.truth_(inst_32560)){
var statearr_32603_34689 = state_32582__$1;
(statearr_32603_34689[(1)] = (4));

} else {
var statearr_32606_34690 = state_32582__$1;
(statearr_32606_34690[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32583 === (11))){
var inst_32558 = (state_32582[(8)]);
var inst_32568 = (state_32582[(2)]);
var inst_32569 = (inst_32558 + (1));
var inst_32558__$1 = inst_32569;
var state_32582__$1 = (function (){var statearr_32608 = state_32582;
(statearr_32608[(10)] = inst_32568);

(statearr_32608[(8)] = inst_32558__$1);

return statearr_32608;
})();
var statearr_32611_34693 = state_32582__$1;
(statearr_32611_34693[(2)] = null);

(statearr_32611_34693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32583 === (9))){
var state_32582__$1 = state_32582;
var statearr_32612_34699 = state_32582__$1;
(statearr_32612_34699[(2)] = null);

(statearr_32612_34699[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32583 === (5))){
var state_32582__$1 = state_32582;
var statearr_32614_34702 = state_32582__$1;
(statearr_32614_34702[(2)] = null);

(statearr_32614_34702[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32583 === (10))){
var inst_32573 = (state_32582[(2)]);
var state_32582__$1 = state_32582;
var statearr_32615_34710 = state_32582__$1;
(statearr_32615_34710[(2)] = inst_32573);

(statearr_32615_34710[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32583 === (8))){
var inst_32563 = (state_32582[(7)]);
var state_32582__$1 = state_32582;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32582__$1,(11),out,inst_32563);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29302__auto__ = null;
var cljs$core$async$state_machine__29302__auto____0 = (function (){
var statearr_32617 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32617[(0)] = cljs$core$async$state_machine__29302__auto__);

(statearr_32617[(1)] = (1));

return statearr_32617;
});
var cljs$core$async$state_machine__29302__auto____1 = (function (state_32582){
while(true){
var ret_value__29303__auto__ = (function (){try{while(true){
var result__29304__auto__ = switch__29301__auto__(state_32582);
if(cljs.core.keyword_identical_QMARK_(result__29304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29304__auto__;
}
break;
}
}catch (e32618){var ex__29305__auto__ = e32618;
var statearr_32619_34716 = state_32582;
(statearr_32619_34716[(2)] = ex__29305__auto__);


if(cljs.core.seq((state_32582[(4)]))){
var statearr_32620_34722 = state_32582;
(statearr_32620_34722[(1)] = cljs.core.first((state_32582[(4)])));

} else {
throw ex__29305__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34727 = state_32582;
state_32582 = G__34727;
continue;
} else {
return ret_value__29303__auto__;
}
break;
}
});
cljs$core$async$state_machine__29302__auto__ = function(state_32582){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29302__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29302__auto____1.call(this,state_32582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29302__auto____0;
cljs$core$async$state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29302__auto____1;
return cljs$core$async$state_machine__29302__auto__;
})()
})();
var state__29575__auto__ = (function (){var statearr_32621 = f__29574__auto__();
(statearr_32621[(6)] = c__29573__auto___34658);

return statearr_32621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29575__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32627 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32627 = (function (f,ch,meta32628){
this.f = f;
this.ch = ch;
this.meta32628 = meta32628;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32627.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32629,meta32628__$1){
var self__ = this;
var _32629__$1 = this;
return (new cljs.core.async.t_cljs$core$async32627(self__.f,self__.ch,meta32628__$1));
}));

(cljs.core.async.t_cljs$core$async32627.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32629){
var self__ = this;
var _32629__$1 = this;
return self__.meta32628;
}));

(cljs.core.async.t_cljs$core$async32627.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32627.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32627.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32627.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32627.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32633 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32633 = (function (f,ch,meta32628,_,fn1,meta32634){
this.f = f;
this.ch = ch;
this.meta32628 = meta32628;
this._ = _;
this.fn1 = fn1;
this.meta32634 = meta32634;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32633.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32635,meta32634__$1){
var self__ = this;
var _32635__$1 = this;
return (new cljs.core.async.t_cljs$core$async32633(self__.f,self__.ch,self__.meta32628,self__._,self__.fn1,meta32634__$1));
}));

(cljs.core.async.t_cljs$core$async32633.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32635){
var self__ = this;
var _32635__$1 = this;
return self__.meta32634;
}));

(cljs.core.async.t_cljs$core$async32633.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32633.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async32633.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32633.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__32625_SHARP_){
var G__32642 = (((p1__32625_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32625_SHARP_) : self__.f.call(null,p1__32625_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32642) : f1.call(null,G__32642));
});
}));

(cljs.core.async.t_cljs$core$async32633.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32628","meta32628",-456206605,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32627","cljs.core.async/t_cljs$core$async32627",1563502163,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32634","meta32634",-1281424113,null)], null);
}));

(cljs.core.async.t_cljs$core$async32633.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32633.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32633");

(cljs.core.async.t_cljs$core$async32633.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32633");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32633.
 */
cljs.core.async.__GT_t_cljs$core$async32633 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32633(f__$1,ch__$1,meta32628__$1,___$2,fn1__$1,meta32634){
return (new cljs.core.async.t_cljs$core$async32633(f__$1,ch__$1,meta32628__$1,___$2,fn1__$1,meta32634));
});

}

return (new cljs.core.async.t_cljs$core$async32633(self__.f,self__.ch,self__.meta32628,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32647 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32647) : self__.f.call(null,G__32647));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async32627.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32627.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async32627.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32628","meta32628",-456206605,null)], null);
}));

(cljs.core.async.t_cljs$core$async32627.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32627.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32627");

(cljs.core.async.t_cljs$core$async32627.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32627");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32627.
 */
cljs.core.async.__GT_t_cljs$core$async32627 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32627(f__$1,ch__$1,meta32628){
return (new cljs.core.async.t_cljs$core$async32627(f__$1,ch__$1,meta32628));
});

}

return (new cljs.core.async.t_cljs$core$async32627(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32653 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32653 = (function (f,ch,meta32654){
this.f = f;
this.ch = ch;
this.meta32654 = meta32654;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32653.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32655,meta32654__$1){
var self__ = this;
var _32655__$1 = this;
return (new cljs.core.async.t_cljs$core$async32653(self__.f,self__.ch,meta32654__$1));
}));

(cljs.core.async.t_cljs$core$async32653.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32655){
var self__ = this;
var _32655__$1 = this;
return self__.meta32654;
}));

(cljs.core.async.t_cljs$core$async32653.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32653.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32653.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32653.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32653.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32653.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async32653.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32654","meta32654",-707212724,null)], null);
}));

(cljs.core.async.t_cljs$core$async32653.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32653.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32653");

(cljs.core.async.t_cljs$core$async32653.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32653");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32653.
 */
cljs.core.async.__GT_t_cljs$core$async32653 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32653(f__$1,ch__$1,meta32654){
return (new cljs.core.async.t_cljs$core$async32653(f__$1,ch__$1,meta32654));
});

}

return (new cljs.core.async.t_cljs$core$async32653(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32674 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32674 = (function (p,ch,meta32675){
this.p = p;
this.ch = ch;
this.meta32675 = meta32675;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32674.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32676,meta32675__$1){
var self__ = this;
var _32676__$1 = this;
return (new cljs.core.async.t_cljs$core$async32674(self__.p,self__.ch,meta32675__$1));
}));

(cljs.core.async.t_cljs$core$async32674.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32676){
var self__ = this;
var _32676__$1 = this;
return self__.meta32675;
}));

(cljs.core.async.t_cljs$core$async32674.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32674.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32674.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32674.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32674.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32674.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32674.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32674.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32675","meta32675",1528629600,null)], null);
}));

(cljs.core.async.t_cljs$core$async32674.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32674.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32674");

(cljs.core.async.t_cljs$core$async32674.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32674");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32674.
 */
cljs.core.async.__GT_t_cljs$core$async32674 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32674(p__$1,ch__$1,meta32675){
return (new cljs.core.async.t_cljs$core$async32674(p__$1,ch__$1,meta32675));
});

}

return (new cljs.core.async.t_cljs$core$async32674(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__32687 = arguments.length;
switch (G__32687) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29573__auto___34790 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29574__auto__ = (function (){var switch__29301__auto__ = (function (state_32720){
var state_val_32722 = (state_32720[(1)]);
if((state_val_32722 === (7))){
var inst_32715 = (state_32720[(2)]);
var state_32720__$1 = state_32720;
var statearr_32726_34791 = state_32720__$1;
(statearr_32726_34791[(2)] = inst_32715);

(statearr_32726_34791[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32722 === (1))){
var state_32720__$1 = state_32720;
var statearr_32728_34792 = state_32720__$1;
(statearr_32728_34792[(2)] = null);

(statearr_32728_34792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32722 === (4))){
var inst_32700 = (state_32720[(7)]);
var inst_32700__$1 = (state_32720[(2)]);
var inst_32702 = (inst_32700__$1 == null);
var state_32720__$1 = (function (){var statearr_32729 = state_32720;
(statearr_32729[(7)] = inst_32700__$1);

return statearr_32729;
})();
if(cljs.core.truth_(inst_32702)){
var statearr_32730_34795 = state_32720__$1;
(statearr_32730_34795[(1)] = (5));

} else {
var statearr_32731_34800 = state_32720__$1;
(statearr_32731_34800[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32722 === (6))){
var inst_32700 = (state_32720[(7)]);
var inst_32706 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32700) : p.call(null,inst_32700));
var state_32720__$1 = state_32720;
if(cljs.core.truth_(inst_32706)){
var statearr_32732_34805 = state_32720__$1;
(statearr_32732_34805[(1)] = (8));

} else {
var statearr_32733_34806 = state_32720__$1;
(statearr_32733_34806[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32722 === (3))){
var inst_32717 = (state_32720[(2)]);
var state_32720__$1 = state_32720;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32720__$1,inst_32717);
} else {
if((state_val_32722 === (2))){
var state_32720__$1 = state_32720;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32720__$1,(4),ch);
} else {
if((state_val_32722 === (11))){
var inst_32709 = (state_32720[(2)]);
var state_32720__$1 = state_32720;
var statearr_32738_34808 = state_32720__$1;
(statearr_32738_34808[(2)] = inst_32709);

(statearr_32738_34808[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32722 === (9))){
var state_32720__$1 = state_32720;
var statearr_32739_34809 = state_32720__$1;
(statearr_32739_34809[(2)] = null);

(statearr_32739_34809[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32722 === (5))){
var inst_32704 = cljs.core.async.close_BANG_(out);
var state_32720__$1 = state_32720;
var statearr_32740_34811 = state_32720__$1;
(statearr_32740_34811[(2)] = inst_32704);

(statearr_32740_34811[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32722 === (10))){
var inst_32712 = (state_32720[(2)]);
var state_32720__$1 = (function (){var statearr_32742 = state_32720;
(statearr_32742[(8)] = inst_32712);

return statearr_32742;
})();
var statearr_32744_34822 = state_32720__$1;
(statearr_32744_34822[(2)] = null);

(statearr_32744_34822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32722 === (8))){
var inst_32700 = (state_32720[(7)]);
var state_32720__$1 = state_32720;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32720__$1,(11),out,inst_32700);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29302__auto__ = null;
var cljs$core$async$state_machine__29302__auto____0 = (function (){
var statearr_32749 = [null,null,null,null,null,null,null,null,null];
(statearr_32749[(0)] = cljs$core$async$state_machine__29302__auto__);

(statearr_32749[(1)] = (1));

return statearr_32749;
});
var cljs$core$async$state_machine__29302__auto____1 = (function (state_32720){
while(true){
var ret_value__29303__auto__ = (function (){try{while(true){
var result__29304__auto__ = switch__29301__auto__(state_32720);
if(cljs.core.keyword_identical_QMARK_(result__29304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29304__auto__;
}
break;
}
}catch (e32750){var ex__29305__auto__ = e32750;
var statearr_32751_34842 = state_32720;
(statearr_32751_34842[(2)] = ex__29305__auto__);


if(cljs.core.seq((state_32720[(4)]))){
var statearr_32756_34843 = state_32720;
(statearr_32756_34843[(1)] = cljs.core.first((state_32720[(4)])));

} else {
throw ex__29305__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34848 = state_32720;
state_32720 = G__34848;
continue;
} else {
return ret_value__29303__auto__;
}
break;
}
});
cljs$core$async$state_machine__29302__auto__ = function(state_32720){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29302__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29302__auto____1.call(this,state_32720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29302__auto____0;
cljs$core$async$state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29302__auto____1;
return cljs$core$async$state_machine__29302__auto__;
})()
})();
var state__29575__auto__ = (function (){var statearr_32761 = f__29574__auto__();
(statearr_32761[(6)] = c__29573__auto___34790);

return statearr_32761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29575__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32765 = arguments.length;
switch (G__32765) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29573__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29574__auto__ = (function (){var switch__29301__auto__ = (function (state_32836){
var state_val_32837 = (state_32836[(1)]);
if((state_val_32837 === (7))){
var inst_32832 = (state_32836[(2)]);
var state_32836__$1 = state_32836;
var statearr_32838_34861 = state_32836__$1;
(statearr_32838_34861[(2)] = inst_32832);

(statearr_32838_34861[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32837 === (20))){
var inst_32802 = (state_32836[(7)]);
var inst_32813 = (state_32836[(2)]);
var inst_32814 = cljs.core.next(inst_32802);
var inst_32785 = inst_32814;
var inst_32786 = null;
var inst_32787 = (0);
var inst_32788 = (0);
var state_32836__$1 = (function (){var statearr_32839 = state_32836;
(statearr_32839[(8)] = inst_32787);

(statearr_32839[(9)] = inst_32785);

(statearr_32839[(10)] = inst_32788);

(statearr_32839[(11)] = inst_32813);

(statearr_32839[(12)] = inst_32786);

return statearr_32839;
})();
var statearr_32840_34868 = state_32836__$1;
(statearr_32840_34868[(2)] = null);

(statearr_32840_34868[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32837 === (1))){
var state_32836__$1 = state_32836;
var statearr_32841_34869 = state_32836__$1;
(statearr_32841_34869[(2)] = null);

(statearr_32841_34869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32837 === (4))){
var inst_32774 = (state_32836[(13)]);
var inst_32774__$1 = (state_32836[(2)]);
var inst_32775 = (inst_32774__$1 == null);
var state_32836__$1 = (function (){var statearr_32843 = state_32836;
(statearr_32843[(13)] = inst_32774__$1);

return statearr_32843;
})();
if(cljs.core.truth_(inst_32775)){
var statearr_32844_34870 = state_32836__$1;
(statearr_32844_34870[(1)] = (5));

} else {
var statearr_32845_34871 = state_32836__$1;
(statearr_32845_34871[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32837 === (15))){
var state_32836__$1 = state_32836;
var statearr_32849_34877 = state_32836__$1;
(statearr_32849_34877[(2)] = null);

(statearr_32849_34877[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32837 === (21))){
var state_32836__$1 = state_32836;
var statearr_32851_34887 = state_32836__$1;
(statearr_32851_34887[(2)] = null);

(statearr_32851_34887[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32837 === (13))){
var inst_32787 = (state_32836[(8)]);
var inst_32785 = (state_32836[(9)]);
var inst_32788 = (state_32836[(10)]);
var inst_32786 = (state_32836[(12)]);
var inst_32798 = (state_32836[(2)]);
var inst_32799 = (inst_32788 + (1));
var tmp32846 = inst_32787;
var tmp32847 = inst_32785;
var tmp32848 = inst_32786;
var inst_32785__$1 = tmp32847;
var inst_32786__$1 = tmp32848;
var inst_32787__$1 = tmp32846;
var inst_32788__$1 = inst_32799;
var state_32836__$1 = (function (){var statearr_32854 = state_32836;
(statearr_32854[(8)] = inst_32787__$1);

(statearr_32854[(14)] = inst_32798);

(statearr_32854[(9)] = inst_32785__$1);

(statearr_32854[(10)] = inst_32788__$1);

(statearr_32854[(12)] = inst_32786__$1);

return statearr_32854;
})();
var statearr_32855_34914 = state_32836__$1;
(statearr_32855_34914[(2)] = null);

(statearr_32855_34914[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32837 === (22))){
var state_32836__$1 = state_32836;
var statearr_32856_34916 = state_32836__$1;
(statearr_32856_34916[(2)] = null);

(statearr_32856_34916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32837 === (6))){
var inst_32774 = (state_32836[(13)]);
var inst_32783 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32774) : f.call(null,inst_32774));
var inst_32784 = cljs.core.seq(inst_32783);
var inst_32785 = inst_32784;
var inst_32786 = null;
var inst_32787 = (0);
var inst_32788 = (0);
var state_32836__$1 = (function (){var statearr_32859 = state_32836;
(statearr_32859[(8)] = inst_32787);

(statearr_32859[(9)] = inst_32785);

(statearr_32859[(10)] = inst_32788);

(statearr_32859[(12)] = inst_32786);

return statearr_32859;
})();
var statearr_32860_34921 = state_32836__$1;
(statearr_32860_34921[(2)] = null);

(statearr_32860_34921[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32837 === (17))){
var inst_32802 = (state_32836[(7)]);
var inst_32806 = cljs.core.chunk_first(inst_32802);
var inst_32807 = cljs.core.chunk_rest(inst_32802);
var inst_32808 = cljs.core.count(inst_32806);
var inst_32785 = inst_32807;
var inst_32786 = inst_32806;
var inst_32787 = inst_32808;
var inst_32788 = (0);
var state_32836__$1 = (function (){var statearr_32863 = state_32836;
(statearr_32863[(8)] = inst_32787);

(statearr_32863[(9)] = inst_32785);

(statearr_32863[(10)] = inst_32788);

(statearr_32863[(12)] = inst_32786);

return statearr_32863;
})();
var statearr_32864_34941 = state_32836__$1;
(statearr_32864_34941[(2)] = null);

(statearr_32864_34941[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32837 === (3))){
var inst_32834 = (state_32836[(2)]);
var state_32836__$1 = state_32836;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32836__$1,inst_32834);
} else {
if((state_val_32837 === (12))){
var inst_32822 = (state_32836[(2)]);
var state_32836__$1 = state_32836;
var statearr_32865_34948 = state_32836__$1;
(statearr_32865_34948[(2)] = inst_32822);

(statearr_32865_34948[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32837 === (2))){
var state_32836__$1 = state_32836;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32836__$1,(4),in$);
} else {
if((state_val_32837 === (23))){
var inst_32830 = (state_32836[(2)]);
var state_32836__$1 = state_32836;
var statearr_32866_34953 = state_32836__$1;
(statearr_32866_34953[(2)] = inst_32830);

(statearr_32866_34953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32837 === (19))){
var inst_32817 = (state_32836[(2)]);
var state_32836__$1 = state_32836;
var statearr_32867_34960 = state_32836__$1;
(statearr_32867_34960[(2)] = inst_32817);

(statearr_32867_34960[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32837 === (11))){
var inst_32802 = (state_32836[(7)]);
var inst_32785 = (state_32836[(9)]);
var inst_32802__$1 = cljs.core.seq(inst_32785);
var state_32836__$1 = (function (){var statearr_32870 = state_32836;
(statearr_32870[(7)] = inst_32802__$1);

return statearr_32870;
})();
if(inst_32802__$1){
var statearr_32871_34980 = state_32836__$1;
(statearr_32871_34980[(1)] = (14));

} else {
var statearr_32872_34981 = state_32836__$1;
(statearr_32872_34981[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32837 === (9))){
var inst_32824 = (state_32836[(2)]);
var inst_32825 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32836__$1 = (function (){var statearr_32873 = state_32836;
(statearr_32873[(15)] = inst_32824);

return statearr_32873;
})();
if(cljs.core.truth_(inst_32825)){
var statearr_32874_34990 = state_32836__$1;
(statearr_32874_34990[(1)] = (21));

} else {
var statearr_32875_34997 = state_32836__$1;
(statearr_32875_34997[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32837 === (5))){
var inst_32777 = cljs.core.async.close_BANG_(out);
var state_32836__$1 = state_32836;
var statearr_32876_34999 = state_32836__$1;
(statearr_32876_34999[(2)] = inst_32777);

(statearr_32876_34999[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32837 === (14))){
var inst_32802 = (state_32836[(7)]);
var inst_32804 = cljs.core.chunked_seq_QMARK_(inst_32802);
var state_32836__$1 = state_32836;
if(inst_32804){
var statearr_32877_35000 = state_32836__$1;
(statearr_32877_35000[(1)] = (17));

} else {
var statearr_32878_35001 = state_32836__$1;
(statearr_32878_35001[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32837 === (16))){
var inst_32820 = (state_32836[(2)]);
var state_32836__$1 = state_32836;
var statearr_32879_35004 = state_32836__$1;
(statearr_32879_35004[(2)] = inst_32820);

(statearr_32879_35004[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32837 === (10))){
var inst_32788 = (state_32836[(10)]);
var inst_32786 = (state_32836[(12)]);
var inst_32795 = cljs.core._nth(inst_32786,inst_32788);
var state_32836__$1 = state_32836;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32836__$1,(13),out,inst_32795);
} else {
if((state_val_32837 === (18))){
var inst_32802 = (state_32836[(7)]);
var inst_32811 = cljs.core.first(inst_32802);
var state_32836__$1 = state_32836;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32836__$1,(20),out,inst_32811);
} else {
if((state_val_32837 === (8))){
var inst_32787 = (state_32836[(8)]);
var inst_32788 = (state_32836[(10)]);
var inst_32790 = (inst_32788 < inst_32787);
var inst_32791 = inst_32790;
var state_32836__$1 = state_32836;
if(cljs.core.truth_(inst_32791)){
var statearr_32881_35024 = state_32836__$1;
(statearr_32881_35024[(1)] = (10));

} else {
var statearr_32882_35029 = state_32836__$1;
(statearr_32882_35029[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29302__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29302__auto____0 = (function (){
var statearr_32888 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32888[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29302__auto__);

(statearr_32888[(1)] = (1));

return statearr_32888;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29302__auto____1 = (function (state_32836){
while(true){
var ret_value__29303__auto__ = (function (){try{while(true){
var result__29304__auto__ = switch__29301__auto__(state_32836);
if(cljs.core.keyword_identical_QMARK_(result__29304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29304__auto__;
}
break;
}
}catch (e32896){var ex__29305__auto__ = e32896;
var statearr_32898_35034 = state_32836;
(statearr_32898_35034[(2)] = ex__29305__auto__);


if(cljs.core.seq((state_32836[(4)]))){
var statearr_32899_35037 = state_32836;
(statearr_32899_35037[(1)] = cljs.core.first((state_32836[(4)])));

} else {
throw ex__29305__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35038 = state_32836;
state_32836 = G__35038;
continue;
} else {
return ret_value__29303__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29302__auto__ = function(state_32836){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29302__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29302__auto____1.call(this,state_32836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29302__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29302__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29302__auto__;
})()
})();
var state__29575__auto__ = (function (){var statearr_32911 = f__29574__auto__();
(statearr_32911[(6)] = c__29573__auto__);

return statearr_32911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29575__auto__);
}));

return c__29573__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32918 = arguments.length;
switch (G__32918) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__32926 = arguments.length;
switch (G__32926) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__32928 = arguments.length;
switch (G__32928) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29573__auto___35059 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29574__auto__ = (function (){var switch__29301__auto__ = (function (state_32956){
var state_val_32957 = (state_32956[(1)]);
if((state_val_32957 === (7))){
var inst_32951 = (state_32956[(2)]);
var state_32956__$1 = state_32956;
var statearr_32960_35060 = state_32956__$1;
(statearr_32960_35060[(2)] = inst_32951);

(statearr_32960_35060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32957 === (1))){
var inst_32933 = null;
var state_32956__$1 = (function (){var statearr_32961 = state_32956;
(statearr_32961[(7)] = inst_32933);

return statearr_32961;
})();
var statearr_32962_35063 = state_32956__$1;
(statearr_32962_35063[(2)] = null);

(statearr_32962_35063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32957 === (4))){
var inst_32936 = (state_32956[(8)]);
var inst_32936__$1 = (state_32956[(2)]);
var inst_32937 = (inst_32936__$1 == null);
var inst_32938 = cljs.core.not(inst_32937);
var state_32956__$1 = (function (){var statearr_32963 = state_32956;
(statearr_32963[(8)] = inst_32936__$1);

return statearr_32963;
})();
if(inst_32938){
var statearr_32964_35065 = state_32956__$1;
(statearr_32964_35065[(1)] = (5));

} else {
var statearr_32973_35066 = state_32956__$1;
(statearr_32973_35066[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32957 === (6))){
var state_32956__$1 = state_32956;
var statearr_32981_35069 = state_32956__$1;
(statearr_32981_35069[(2)] = null);

(statearr_32981_35069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32957 === (3))){
var inst_32953 = (state_32956[(2)]);
var inst_32954 = cljs.core.async.close_BANG_(out);
var state_32956__$1 = (function (){var statearr_32985 = state_32956;
(statearr_32985[(9)] = inst_32953);

return statearr_32985;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32956__$1,inst_32954);
} else {
if((state_val_32957 === (2))){
var state_32956__$1 = state_32956;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32956__$1,(4),ch);
} else {
if((state_val_32957 === (11))){
var inst_32936 = (state_32956[(8)]);
var inst_32945 = (state_32956[(2)]);
var inst_32933 = inst_32936;
var state_32956__$1 = (function (){var statearr_32992 = state_32956;
(statearr_32992[(10)] = inst_32945);

(statearr_32992[(7)] = inst_32933);

return statearr_32992;
})();
var statearr_32993_35075 = state_32956__$1;
(statearr_32993_35075[(2)] = null);

(statearr_32993_35075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32957 === (9))){
var inst_32936 = (state_32956[(8)]);
var state_32956__$1 = state_32956;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32956__$1,(11),out,inst_32936);
} else {
if((state_val_32957 === (5))){
var inst_32936 = (state_32956[(8)]);
var inst_32933 = (state_32956[(7)]);
var inst_32940 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32936,inst_32933);
var state_32956__$1 = state_32956;
if(inst_32940){
var statearr_32995_35081 = state_32956__$1;
(statearr_32995_35081[(1)] = (8));

} else {
var statearr_33004_35085 = state_32956__$1;
(statearr_33004_35085[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32957 === (10))){
var inst_32948 = (state_32956[(2)]);
var state_32956__$1 = state_32956;
var statearr_33011_35092 = state_32956__$1;
(statearr_33011_35092[(2)] = inst_32948);

(statearr_33011_35092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32957 === (8))){
var inst_32933 = (state_32956[(7)]);
var tmp32994 = inst_32933;
var inst_32933__$1 = tmp32994;
var state_32956__$1 = (function (){var statearr_33012 = state_32956;
(statearr_33012[(7)] = inst_32933__$1);

return statearr_33012;
})();
var statearr_33013_35095 = state_32956__$1;
(statearr_33013_35095[(2)] = null);

(statearr_33013_35095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29302__auto__ = null;
var cljs$core$async$state_machine__29302__auto____0 = (function (){
var statearr_33020 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33020[(0)] = cljs$core$async$state_machine__29302__auto__);

(statearr_33020[(1)] = (1));

return statearr_33020;
});
var cljs$core$async$state_machine__29302__auto____1 = (function (state_32956){
while(true){
var ret_value__29303__auto__ = (function (){try{while(true){
var result__29304__auto__ = switch__29301__auto__(state_32956);
if(cljs.core.keyword_identical_QMARK_(result__29304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29304__auto__;
}
break;
}
}catch (e33023){var ex__29305__auto__ = e33023;
var statearr_33026_35107 = state_32956;
(statearr_33026_35107[(2)] = ex__29305__auto__);


if(cljs.core.seq((state_32956[(4)]))){
var statearr_33027_35109 = state_32956;
(statearr_33027_35109[(1)] = cljs.core.first((state_32956[(4)])));

} else {
throw ex__29305__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35116 = state_32956;
state_32956 = G__35116;
continue;
} else {
return ret_value__29303__auto__;
}
break;
}
});
cljs$core$async$state_machine__29302__auto__ = function(state_32956){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29302__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29302__auto____1.call(this,state_32956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29302__auto____0;
cljs$core$async$state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29302__auto____1;
return cljs$core$async$state_machine__29302__auto__;
})()
})();
var state__29575__auto__ = (function (){var statearr_33030 = f__29574__auto__();
(statearr_33030[(6)] = c__29573__auto___35059);

return statearr_33030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29575__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33033 = arguments.length;
switch (G__33033) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29573__auto___35135 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29574__auto__ = (function (){var switch__29301__auto__ = (function (state_33080){
var state_val_33081 = (state_33080[(1)]);
if((state_val_33081 === (7))){
var inst_33076 = (state_33080[(2)]);
var state_33080__$1 = state_33080;
var statearr_33083_35141 = state_33080__$1;
(statearr_33083_35141[(2)] = inst_33076);

(statearr_33083_35141[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33081 === (1))){
var inst_33037 = (new Array(n));
var inst_33038 = inst_33037;
var inst_33039 = (0);
var state_33080__$1 = (function (){var statearr_33088 = state_33080;
(statearr_33088[(7)] = inst_33039);

(statearr_33088[(8)] = inst_33038);

return statearr_33088;
})();
var statearr_33089_35148 = state_33080__$1;
(statearr_33089_35148[(2)] = null);

(statearr_33089_35148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33081 === (4))){
var inst_33044 = (state_33080[(9)]);
var inst_33044__$1 = (state_33080[(2)]);
var inst_33046 = (inst_33044__$1 == null);
var inst_33047 = cljs.core.not(inst_33046);
var state_33080__$1 = (function (){var statearr_33092 = state_33080;
(statearr_33092[(9)] = inst_33044__$1);

return statearr_33092;
})();
if(inst_33047){
var statearr_33093_35163 = state_33080__$1;
(statearr_33093_35163[(1)] = (5));

} else {
var statearr_33094_35168 = state_33080__$1;
(statearr_33094_35168[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33081 === (15))){
var inst_33070 = (state_33080[(2)]);
var state_33080__$1 = state_33080;
var statearr_33095_35170 = state_33080__$1;
(statearr_33095_35170[(2)] = inst_33070);

(statearr_33095_35170[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33081 === (13))){
var state_33080__$1 = state_33080;
var statearr_33097_35179 = state_33080__$1;
(statearr_33097_35179[(2)] = null);

(statearr_33097_35179[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33081 === (6))){
var inst_33039 = (state_33080[(7)]);
var inst_33066 = (inst_33039 > (0));
var state_33080__$1 = state_33080;
if(cljs.core.truth_(inst_33066)){
var statearr_33098_35186 = state_33080__$1;
(statearr_33098_35186[(1)] = (12));

} else {
var statearr_33099_35187 = state_33080__$1;
(statearr_33099_35187[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33081 === (3))){
var inst_33078 = (state_33080[(2)]);
var state_33080__$1 = state_33080;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33080__$1,inst_33078);
} else {
if((state_val_33081 === (12))){
var inst_33038 = (state_33080[(8)]);
var inst_33068 = cljs.core.vec(inst_33038);
var state_33080__$1 = state_33080;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33080__$1,(15),out,inst_33068);
} else {
if((state_val_33081 === (2))){
var state_33080__$1 = state_33080;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33080__$1,(4),ch);
} else {
if((state_val_33081 === (11))){
var inst_33057 = (state_33080[(2)]);
var inst_33058 = (new Array(n));
var inst_33038 = inst_33058;
var inst_33039 = (0);
var state_33080__$1 = (function (){var statearr_33104 = state_33080;
(statearr_33104[(10)] = inst_33057);

(statearr_33104[(7)] = inst_33039);

(statearr_33104[(8)] = inst_33038);

return statearr_33104;
})();
var statearr_33105_35193 = state_33080__$1;
(statearr_33105_35193[(2)] = null);

(statearr_33105_35193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33081 === (9))){
var inst_33038 = (state_33080[(8)]);
var inst_33055 = cljs.core.vec(inst_33038);
var state_33080__$1 = state_33080;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33080__$1,(11),out,inst_33055);
} else {
if((state_val_33081 === (5))){
var inst_33050 = (state_33080[(11)]);
var inst_33039 = (state_33080[(7)]);
var inst_33038 = (state_33080[(8)]);
var inst_33044 = (state_33080[(9)]);
var inst_33049 = (inst_33038[inst_33039] = inst_33044);
var inst_33050__$1 = (inst_33039 + (1));
var inst_33051 = (inst_33050__$1 < n);
var state_33080__$1 = (function (){var statearr_33109 = state_33080;
(statearr_33109[(11)] = inst_33050__$1);

(statearr_33109[(12)] = inst_33049);

return statearr_33109;
})();
if(cljs.core.truth_(inst_33051)){
var statearr_33110_35202 = state_33080__$1;
(statearr_33110_35202[(1)] = (8));

} else {
var statearr_33111_35204 = state_33080__$1;
(statearr_33111_35204[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33081 === (14))){
var inst_33073 = (state_33080[(2)]);
var inst_33074 = cljs.core.async.close_BANG_(out);
var state_33080__$1 = (function (){var statearr_33116 = state_33080;
(statearr_33116[(13)] = inst_33073);

return statearr_33116;
})();
var statearr_33118_35213 = state_33080__$1;
(statearr_33118_35213[(2)] = inst_33074);

(statearr_33118_35213[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33081 === (10))){
var inst_33061 = (state_33080[(2)]);
var state_33080__$1 = state_33080;
var statearr_33120_35216 = state_33080__$1;
(statearr_33120_35216[(2)] = inst_33061);

(statearr_33120_35216[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33081 === (8))){
var inst_33050 = (state_33080[(11)]);
var inst_33038 = (state_33080[(8)]);
var tmp33112 = inst_33038;
var inst_33038__$1 = tmp33112;
var inst_33039 = inst_33050;
var state_33080__$1 = (function (){var statearr_33121 = state_33080;
(statearr_33121[(7)] = inst_33039);

(statearr_33121[(8)] = inst_33038__$1);

return statearr_33121;
})();
var statearr_33122_35219 = state_33080__$1;
(statearr_33122_35219[(2)] = null);

(statearr_33122_35219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29302__auto__ = null;
var cljs$core$async$state_machine__29302__auto____0 = (function (){
var statearr_33123 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33123[(0)] = cljs$core$async$state_machine__29302__auto__);

(statearr_33123[(1)] = (1));

return statearr_33123;
});
var cljs$core$async$state_machine__29302__auto____1 = (function (state_33080){
while(true){
var ret_value__29303__auto__ = (function (){try{while(true){
var result__29304__auto__ = switch__29301__auto__(state_33080);
if(cljs.core.keyword_identical_QMARK_(result__29304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29304__auto__;
}
break;
}
}catch (e33124){var ex__29305__auto__ = e33124;
var statearr_33125_35230 = state_33080;
(statearr_33125_35230[(2)] = ex__29305__auto__);


if(cljs.core.seq((state_33080[(4)]))){
var statearr_33127_35231 = state_33080;
(statearr_33127_35231[(1)] = cljs.core.first((state_33080[(4)])));

} else {
throw ex__29305__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35233 = state_33080;
state_33080 = G__35233;
continue;
} else {
return ret_value__29303__auto__;
}
break;
}
});
cljs$core$async$state_machine__29302__auto__ = function(state_33080){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29302__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29302__auto____1.call(this,state_33080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29302__auto____0;
cljs$core$async$state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29302__auto____1;
return cljs$core$async$state_machine__29302__auto__;
})()
})();
var state__29575__auto__ = (function (){var statearr_33128 = f__29574__auto__();
(statearr_33128[(6)] = c__29573__auto___35135);

return statearr_33128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29575__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33130 = arguments.length;
switch (G__33130) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29573__auto___35250 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29574__auto__ = (function (){var switch__29301__auto__ = (function (state_33173){
var state_val_33176 = (state_33173[(1)]);
if((state_val_33176 === (7))){
var inst_33168 = (state_33173[(2)]);
var state_33173__$1 = state_33173;
var statearr_33183_35254 = state_33173__$1;
(statearr_33183_35254[(2)] = inst_33168);

(statearr_33183_35254[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33176 === (1))){
var inst_33131 = [];
var inst_33132 = inst_33131;
var inst_33133 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33173__$1 = (function (){var statearr_33187 = state_33173;
(statearr_33187[(7)] = inst_33133);

(statearr_33187[(8)] = inst_33132);

return statearr_33187;
})();
var statearr_33188_35260 = state_33173__$1;
(statearr_33188_35260[(2)] = null);

(statearr_33188_35260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33176 === (4))){
var inst_33136 = (state_33173[(9)]);
var inst_33136__$1 = (state_33173[(2)]);
var inst_33137 = (inst_33136__$1 == null);
var inst_33138 = cljs.core.not(inst_33137);
var state_33173__$1 = (function (){var statearr_33189 = state_33173;
(statearr_33189[(9)] = inst_33136__$1);

return statearr_33189;
})();
if(inst_33138){
var statearr_33190_35272 = state_33173__$1;
(statearr_33190_35272[(1)] = (5));

} else {
var statearr_33191_35274 = state_33173__$1;
(statearr_33191_35274[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33176 === (15))){
var inst_33162 = (state_33173[(2)]);
var state_33173__$1 = state_33173;
var statearr_33192_35283 = state_33173__$1;
(statearr_33192_35283[(2)] = inst_33162);

(statearr_33192_35283[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33176 === (13))){
var state_33173__$1 = state_33173;
var statearr_33193_35284 = state_33173__$1;
(statearr_33193_35284[(2)] = null);

(statearr_33193_35284[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33176 === (6))){
var inst_33132 = (state_33173[(8)]);
var inst_33157 = inst_33132.length;
var inst_33158 = (inst_33157 > (0));
var state_33173__$1 = state_33173;
if(cljs.core.truth_(inst_33158)){
var statearr_33194_35292 = state_33173__$1;
(statearr_33194_35292[(1)] = (12));

} else {
var statearr_33195_35294 = state_33173__$1;
(statearr_33195_35294[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33176 === (3))){
var inst_33170 = (state_33173[(2)]);
var state_33173__$1 = state_33173;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33173__$1,inst_33170);
} else {
if((state_val_33176 === (12))){
var inst_33132 = (state_33173[(8)]);
var inst_33160 = cljs.core.vec(inst_33132);
var state_33173__$1 = state_33173;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33173__$1,(15),out,inst_33160);
} else {
if((state_val_33176 === (2))){
var state_33173__$1 = state_33173;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33173__$1,(4),ch);
} else {
if((state_val_33176 === (11))){
var inst_33136 = (state_33173[(9)]);
var inst_33140 = (state_33173[(10)]);
var inst_33150 = (state_33173[(2)]);
var inst_33151 = [];
var inst_33152 = inst_33151.push(inst_33136);
var inst_33132 = inst_33151;
var inst_33133 = inst_33140;
var state_33173__$1 = (function (){var statearr_33197 = state_33173;
(statearr_33197[(7)] = inst_33133);

(statearr_33197[(11)] = inst_33150);

(statearr_33197[(8)] = inst_33132);

(statearr_33197[(12)] = inst_33152);

return statearr_33197;
})();
var statearr_33199_35325 = state_33173__$1;
(statearr_33199_35325[(2)] = null);

(statearr_33199_35325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33176 === (9))){
var inst_33132 = (state_33173[(8)]);
var inst_33148 = cljs.core.vec(inst_33132);
var state_33173__$1 = state_33173;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33173__$1,(11),out,inst_33148);
} else {
if((state_val_33176 === (5))){
var inst_33136 = (state_33173[(9)]);
var inst_33133 = (state_33173[(7)]);
var inst_33140 = (state_33173[(10)]);
var inst_33140__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33136) : f.call(null,inst_33136));
var inst_33141 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33140__$1,inst_33133);
var inst_33142 = cljs.core.keyword_identical_QMARK_(inst_33133,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33143 = ((inst_33141) || (inst_33142));
var state_33173__$1 = (function (){var statearr_33200 = state_33173;
(statearr_33200[(10)] = inst_33140__$1);

return statearr_33200;
})();
if(cljs.core.truth_(inst_33143)){
var statearr_33201_35333 = state_33173__$1;
(statearr_33201_35333[(1)] = (8));

} else {
var statearr_33202_35334 = state_33173__$1;
(statearr_33202_35334[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33176 === (14))){
var inst_33165 = (state_33173[(2)]);
var inst_33166 = cljs.core.async.close_BANG_(out);
var state_33173__$1 = (function (){var statearr_33204 = state_33173;
(statearr_33204[(13)] = inst_33165);

return statearr_33204;
})();
var statearr_33205_35335 = state_33173__$1;
(statearr_33205_35335[(2)] = inst_33166);

(statearr_33205_35335[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33176 === (10))){
var inst_33155 = (state_33173[(2)]);
var state_33173__$1 = state_33173;
var statearr_33206_35339 = state_33173__$1;
(statearr_33206_35339[(2)] = inst_33155);

(statearr_33206_35339[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33176 === (8))){
var inst_33136 = (state_33173[(9)]);
var inst_33140 = (state_33173[(10)]);
var inst_33132 = (state_33173[(8)]);
var inst_33145 = inst_33132.push(inst_33136);
var tmp33203 = inst_33132;
var inst_33132__$1 = tmp33203;
var inst_33133 = inst_33140;
var state_33173__$1 = (function (){var statearr_33210 = state_33173;
(statearr_33210[(7)] = inst_33133);

(statearr_33210[(14)] = inst_33145);

(statearr_33210[(8)] = inst_33132__$1);

return statearr_33210;
})();
var statearr_33211_35344 = state_33173__$1;
(statearr_33211_35344[(2)] = null);

(statearr_33211_35344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29302__auto__ = null;
var cljs$core$async$state_machine__29302__auto____0 = (function (){
var statearr_33212 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33212[(0)] = cljs$core$async$state_machine__29302__auto__);

(statearr_33212[(1)] = (1));

return statearr_33212;
});
var cljs$core$async$state_machine__29302__auto____1 = (function (state_33173){
while(true){
var ret_value__29303__auto__ = (function (){try{while(true){
var result__29304__auto__ = switch__29301__auto__(state_33173);
if(cljs.core.keyword_identical_QMARK_(result__29304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29304__auto__;
}
break;
}
}catch (e33213){var ex__29305__auto__ = e33213;
var statearr_33214_35362 = state_33173;
(statearr_33214_35362[(2)] = ex__29305__auto__);


if(cljs.core.seq((state_33173[(4)]))){
var statearr_33215_35363 = state_33173;
(statearr_33215_35363[(1)] = cljs.core.first((state_33173[(4)])));

} else {
throw ex__29305__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35368 = state_33173;
state_33173 = G__35368;
continue;
} else {
return ret_value__29303__auto__;
}
break;
}
});
cljs$core$async$state_machine__29302__auto__ = function(state_33173){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29302__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29302__auto____1.call(this,state_33173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29302__auto____0;
cljs$core$async$state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29302__auto____1;
return cljs$core$async$state_machine__29302__auto__;
})()
})();
var state__29575__auto__ = (function (){var statearr_33216 = f__29574__auto__();
(statearr_33216[(6)] = c__29573__auto___35250);

return statearr_33216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29575__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);

Object.defineProperty(module.exports, "Pub", { enumerable: false, get: function() { return cljs.core.async.Pub; } });
Object.defineProperty(module.exports, "reduce", { enumerable: false, get: function() { return cljs.core.async.reduce; } });
Object.defineProperty(module.exports, "remove_GT_", { enumerable: false, get: function() { return cljs.core.async.remove_GT_; } });
Object.defineProperty(module.exports, "timeout", { enumerable: false, get: function() { return cljs.core.async.timeout; } });
Object.defineProperty(module.exports, "unsub_STAR_", { enumerable: false, get: function() { return cljs.core.async.unsub_STAR_; } });
Object.defineProperty(module.exports, "admix_STAR_", { enumerable: false, get: function() { return cljs.core.async.admix_STAR_; } });
Object.defineProperty(module.exports, "unmix_STAR_", { enumerable: false, get: function() { return cljs.core.async.unmix_STAR_; } });
Object.defineProperty(module.exports, "__GT_t_cljs$core$async29835", { enumerable: false, get: function() { return cljs.core.async.__GT_t_cljs$core$async29835; } });
Object.defineProperty(module.exports, "__GT_t_cljs$core$async31853", { enumerable: false, get: function() { return cljs.core.async.__GT_t_cljs$core$async31853; } });
Object.defineProperty(module.exports, "t_cljs$core$async31359", { enumerable: false, get: function() { return cljs.core.async.t_cljs$core$async31359; } });
Object.defineProperty(module.exports, "mapcat_STAR_", { enumerable: false, get: function() { return cljs.core.async.mapcat_STAR_; } });
Object.defineProperty(module.exports, "mix", { enumerable: false, get: function() { return cljs.core.async.mix; } });
Object.defineProperty(module.exports, "pub", { enumerable: false, get: function() { return cljs.core.async.pub; } });
Object.defineProperty(module.exports, "take", { enumerable: false, get: function() { return cljs.core.async.take; } });
Object.defineProperty(module.exports, "unsub_all_STAR_", { enumerable: false, get: function() { return cljs.core.async.unsub_all_STAR_; } });
Object.defineProperty(module.exports, "_LT__BANG_", { enumerable: false, get: function() { return cljs.core.async._LT__BANG_; } });
Object.defineProperty(module.exports, "t_cljs$core$async32653", { enumerable: false, get: function() { return cljs.core.async.t_cljs$core$async32653; } });
Object.defineProperty(module.exports, "map", { enumerable: false, get: function() { return cljs.core.async.map; } });
Object.defineProperty(module.exports, "Mux", { enumerable: false, get: function() { return cljs.core.async.Mux; } });
Object.defineProperty(module.exports, "mapcat_GT_", { enumerable: false, get: function() { return cljs.core.async.mapcat_GT_; } });
Object.defineProperty(module.exports, "fhnop", { enumerable: false, get: function() { return cljs.core.async.fhnop; } });
Object.defineProperty(module.exports, "t_cljs$core$async29704", { enumerable: false, get: function() { return cljs.core.async.t_cljs$core$async29704; } });
Object.defineProperty(module.exports, "buffer", { enumerable: false, get: function() { return cljs.core.async.buffer; } });
Object.defineProperty(module.exports, "close_BANG_", { enumerable: false, get: function() { return cljs.core.async.close_BANG_; } });
Object.defineProperty(module.exports, "offer_BANG_", { enumerable: false, get: function() { return cljs.core.async.offer_BANG_; } });
Object.defineProperty(module.exports, "chan", { enumerable: false, get: function() { return cljs.core.async.chan; } });
Object.defineProperty(module.exports, "solo_mode_STAR_", { enumerable: false, get: function() { return cljs.core.async.solo_mode_STAR_; } });
Object.defineProperty(module.exports, "onto_chan_BANG_", { enumerable: false, get: function() { return cljs.core.async.onto_chan_BANG_; } });
Object.defineProperty(module.exports, "tap", { enumerable: false, get: function() { return cljs.core.async.tap; } });
Object.defineProperty(module.exports, "__GT_t_cljs$core$async32627", { enumerable: false, get: function() { return cljs.core.async.__GT_t_cljs$core$async32627; } });
Object.defineProperty(module.exports, "admix", { enumerable: false, get: function() { return cljs.core.async.admix; } });
Object.defineProperty(module.exports, "promise_chan", { enumerable: false, get: function() { return cljs.core.async.promise_chan; } });
Object.defineProperty(module.exports, "unique", { enumerable: false, get: function() { return cljs.core.async.unique; } });
Object.defineProperty(module.exports, "muxch_STAR_", { enumerable: false, get: function() { return cljs.core.async.muxch_STAR_; } });
Object.defineProperty(module.exports, "__GT_t_cljs$core$async29823", { enumerable: false, get: function() { return cljs.core.async.__GT_t_cljs$core$async29823; } });
Object.defineProperty(module.exports, "solo_mode", { enumerable: false, get: function() { return cljs.core.async.solo_mode; } });
Object.defineProperty(module.exports, "transduce", { enumerable: false, get: function() { return cljs.core.async.transduce; } });
Object.defineProperty(module.exports, "onto_chan", { enumerable: false, get: function() { return cljs.core.async.onto_chan; } });
Object.defineProperty(module.exports, "to_chan", { enumerable: false, get: function() { return cljs.core.async.to_chan; } });
Object.defineProperty(module.exports, "__GT_t_cljs$core$async31359", { enumerable: false, get: function() { return cljs.core.async.__GT_t_cljs$core$async31359; } });
Object.defineProperty(module.exports, "dropping_buffer", { enumerable: false, get: function() { return cljs.core.async.dropping_buffer; } });
Object.defineProperty(module.exports, "untap_all", { enumerable: false, get: function() { return cljs.core.async.untap_all; } });
Object.defineProperty(module.exports, "t_cljs$core$async29835", { enumerable: false, get: function() { return cljs.core.async.t_cljs$core$async29835; } });
Object.defineProperty(module.exports, "into", { enumerable: false, get: function() { return cljs.core.async.into; } });
Object.defineProperty(module.exports, "t_cljs$core$async32627", { enumerable: false, get: function() { return cljs.core.async.t_cljs$core$async32627; } });
Object.defineProperty(module.exports, "to_chan_BANG_", { enumerable: false, get: function() { return cljs.core.async.to_chan_BANG_; } });
Object.defineProperty(module.exports, "__GT_t_cljs$core$async29704", { enumerable: false, get: function() { return cljs.core.async.__GT_t_cljs$core$async29704; } });
Object.defineProperty(module.exports, "t_cljs$core$async32633", { enumerable: false, get: function() { return cljs.core.async.t_cljs$core$async32633; } });
Object.defineProperty(module.exports, "pipeline", { enumerable: false, get: function() { return cljs.core.async.pipeline; } });
Object.defineProperty(module.exports, "sub", { enumerable: false, get: function() { return cljs.core.async.sub; } });
Object.defineProperty(module.exports, "__GT_t_cljs$core$async32674", { enumerable: false, get: function() { return cljs.core.async.__GT_t_cljs$core$async32674; } });
Object.defineProperty(module.exports, "alt_flag", { enumerable: false, get: function() { return cljs.core.async.alt_flag; } });
Object.defineProperty(module.exports, "map_GT_", { enumerable: false, get: function() { return cljs.core.async.map_GT_; } });
Object.defineProperty(module.exports, "pipeline_STAR_", { enumerable: false, get: function() { return cljs.core.async.pipeline_STAR_; } });
Object.defineProperty(module.exports, "pipe", { enumerable: false, get: function() { return cljs.core.async.pipe; } });
Object.defineProperty(module.exports, "__GT_t_cljs$core$async32633", { enumerable: false, get: function() { return cljs.core.async.__GT_t_cljs$core$async32633; } });
Object.defineProperty(module.exports, "t_cljs$core$async32674", { enumerable: false, get: function() { return cljs.core.async.t_cljs$core$async32674; } });
Object.defineProperty(module.exports, "unmix", { enumerable: false, get: function() { return cljs.core.async.unmix; } });
Object.defineProperty(module.exports, "filter_LT_", { enumerable: false, get: function() { return cljs.core.async.filter_LT_; } });
Object.defineProperty(module.exports, "sub_STAR_", { enumerable: false, get: function() { return cljs.core.async.sub_STAR_; } });
Object.defineProperty(module.exports, "__GT_t_cljs$core$async30894", { enumerable: false, get: function() { return cljs.core.async.__GT_t_cljs$core$async30894; } });
Object.defineProperty(module.exports, "remove_LT_", { enumerable: false, get: function() { return cljs.core.async.remove_LT_; } });
Object.defineProperty(module.exports, "__GT_t_cljs$core$async32653", { enumerable: false, get: function() { return cljs.core.async.__GT_t_cljs$core$async32653; } });
Object.defineProperty(module.exports, "untap_STAR_", { enumerable: false, get: function() { return cljs.core.async.untap_STAR_; } });
Object.defineProperty(module.exports, "toggle", { enumerable: false, get: function() { return cljs.core.async.toggle; } });
Object.defineProperty(module.exports, "untap_all_STAR_", { enumerable: false, get: function() { return cljs.core.async.untap_all_STAR_; } });
Object.defineProperty(module.exports, "sliding_buffer", { enumerable: false, get: function() { return cljs.core.async.sliding_buffer; } });
Object.defineProperty(module.exports, "partition", { enumerable: false, get: function() { return cljs.core.async.partition; } });
Object.defineProperty(module.exports, "Mult", { enumerable: false, get: function() { return cljs.core.async.Mult; } });
Object.defineProperty(module.exports, "merge", { enumerable: false, get: function() { return cljs.core.async.merge; } });
Object.defineProperty(module.exports, "partition_by", { enumerable: false, get: function() { return cljs.core.async.partition_by; } });
Object.defineProperty(module.exports, "unsub_all", { enumerable: false, get: function() { return cljs.core.async.unsub_all; } });
Object.defineProperty(module.exports, "_GT__BANG_", { enumerable: false, get: function() { return cljs.core.async._GT__BANG_; } });
Object.defineProperty(module.exports, "unmix_all_STAR_", { enumerable: false, get: function() { return cljs.core.async.unmix_all_STAR_; } });
Object.defineProperty(module.exports, "nop", { enumerable: false, get: function() { return cljs.core.async.nop; } });
Object.defineProperty(module.exports, "split", { enumerable: false, get: function() { return cljs.core.async.split; } });
Object.defineProperty(module.exports, "unmix_all", { enumerable: false, get: function() { return cljs.core.async.unmix_all; } });
Object.defineProperty(module.exports, "filter_GT_", { enumerable: false, get: function() { return cljs.core.async.filter_GT_; } });
Object.defineProperty(module.exports, "tap_STAR_", { enumerable: false, get: function() { return cljs.core.async.tap_STAR_; } });
Object.defineProperty(module.exports, "untap", { enumerable: false, get: function() { return cljs.core.async.untap; } });
Object.defineProperty(module.exports, "alt_handler", { enumerable: false, get: function() { return cljs.core.async.alt_handler; } });
Object.defineProperty(module.exports, "alts_BANG_", { enumerable: false, get: function() { return cljs.core.async.alts_BANG_; } });
Object.defineProperty(module.exports, "t_cljs$core$async31853", { enumerable: false, get: function() { return cljs.core.async.t_cljs$core$async31853; } });
Object.defineProperty(module.exports, "unsub", { enumerable: false, get: function() { return cljs.core.async.unsub; } });
Object.defineProperty(module.exports, "poll_BANG_", { enumerable: false, get: function() { return cljs.core.async.poll_BANG_; } });
Object.defineProperty(module.exports, "map_LT_", { enumerable: false, get: function() { return cljs.core.async.map_LT_; } });
Object.defineProperty(module.exports, "fn_handler", { enumerable: false, get: function() { return cljs.core.async.fn_handler; } });
Object.defineProperty(module.exports, "t_cljs$core$async30894", { enumerable: false, get: function() { return cljs.core.async.t_cljs$core$async30894; } });
Object.defineProperty(module.exports, "do_alts", { enumerable: false, get: function() { return cljs.core.async.do_alts; } });
Object.defineProperty(module.exports, "random_array", { enumerable: false, get: function() { return cljs.core.async.random_array; } });
Object.defineProperty(module.exports, "pipeline_async", { enumerable: false, get: function() { return cljs.core.async.pipeline_async; } });
Object.defineProperty(module.exports, "Mix", { enumerable: false, get: function() { return cljs.core.async.Mix; } });
Object.defineProperty(module.exports, "toggle_STAR_", { enumerable: false, get: function() { return cljs.core.async.toggle_STAR_; } });
Object.defineProperty(module.exports, "mult", { enumerable: false, get: function() { return cljs.core.async.mult; } });
Object.defineProperty(module.exports, "mapcat_LT_", { enumerable: false, get: function() { return cljs.core.async.mapcat_LT_; } });
Object.defineProperty(module.exports, "ioc_alts_BANG_", { enumerable: false, get: function() { return cljs.core.async.ioc_alts_BANG_; } });
Object.defineProperty(module.exports, "unblocking_buffer_QMARK_", { enumerable: false, get: function() { return cljs.core.async.unblocking_buffer_QMARK_; } });
Object.defineProperty(module.exports, "put_BANG_", { enumerable: false, get: function() { return cljs.core.async.put_BANG_; } });
Object.defineProperty(module.exports, "take_BANG_", { enumerable: false, get: function() { return cljs.core.async.take_BANG_; } });
Object.defineProperty(module.exports, "t_cljs$core$async29823", { enumerable: false, get: function() { return cljs.core.async.t_cljs$core$async29823; } });
//# sourceMappingURL=cljs.core.async.js.map
