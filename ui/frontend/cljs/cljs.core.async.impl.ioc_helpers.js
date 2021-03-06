var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./cljs.core.async.impl.protocols.js");
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

$CLJS.SHADOW_ENV.setLoaded("cljs.core.async.impl.ioc_helpers.js");

goog.provide('cljs.core.async.impl.ioc_helpers');
cljs.core.async.impl.ioc_helpers.FN_IDX = (0);
cljs.core.async.impl.ioc_helpers.STATE_IDX = (1);
cljs.core.async.impl.ioc_helpers.VALUE_IDX = (2);
cljs.core.async.impl.ioc_helpers.BINDINGS_IDX = (3);
cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES = (4);
cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION = (5);
cljs.core.async.impl.ioc_helpers.USER_START_IDX = (6);
cljs.core.async.impl.ioc_helpers.aset_object = (function cljs$core$async$impl$ioc_helpers$aset_object(arr,idx,o){
return (arr[idx][o]);
});
cljs.core.async.impl.ioc_helpers.aget_object = (function cljs$core$async$impl$ioc_helpers$aget_object(arr,idx){
return (arr[idx]);
});
/**
 * Returns true if the machine is in a finished state
 */
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function cljs$core$async$impl$ioc_helpers$finished_QMARK_(state_array){
return cljs.core.keyword_identical_QMARK_((state_array[(1)]),new cljs.core.Keyword(null,"finished","finished",-1018867731));
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function cljs$core$async$impl$ioc_helpers$fn_handler(f){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.impl !== 'undefined') && (typeof cljs.core.async.impl.ioc_helpers !== 'undefined') && (typeof cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers29336 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers29336 = (function (f,meta29337){
this.f = f;
this.meta29337 = meta29337;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers29336.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29338,meta29337__$1){
var self__ = this;
var _29338__$1 = this;
return (new cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers29336(self__.f,meta29337__$1));
}));

(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers29336.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29338){
var self__ = this;
var _29338__$1 = this;
return self__.meta29337;
}));

(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers29336.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers29336.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers29336.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers29336.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers29336.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta29337","meta29337",-541944995,null)], null);
}));

(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers29336.cljs$lang$type = true);

(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers29336.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t_cljs$core$async$impl$ioc_helpers29336");

(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers29336.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async.impl.ioc-helpers/t_cljs$core$async$impl$ioc_helpers29336");
}));

/**
 * Positional factory function for cljs.core.async.impl.ioc-helpers/t_cljs$core$async$impl$ioc_helpers29336.
 */
cljs.core.async.impl.ioc_helpers.__GT_t_cljs$core$async$impl$ioc_helpers29336 = (function cljs$core$async$impl$ioc_helpers$fn_handler_$___GT_t_cljs$core$async$impl$ioc_helpers29336(f__$1,meta29337){
return (new cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers29336(f__$1,meta29337));
});

}

return (new cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers29336(f,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function cljs$core$async$impl$ioc_helpers$run_state_machine(state){
var fexpr__29365 = cljs.core.async.impl.ioc_helpers.aget_object(state,(0));
return (fexpr__29365.cljs$core$IFn$_invoke$arity$1 ? fexpr__29365.cljs$core$IFn$_invoke$arity$1(state) : fexpr__29365.call(null,state));
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function cljs$core$async$impl$ioc_helpers$run_state_machine_wrapped(state){
try{return cljs.core.async.impl.ioc_helpers.run_state_machine(state);
}catch (e29368){if((e29368 instanceof Object)){
var ex = e29368;
cljs.core.async.impl.ioc_helpers.aget_object(state,(6)).cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);

throw ex;
} else {
throw e29368;

}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function cljs$core$async$impl$ioc_helpers$take_BANG_(state,blk,c){
var temp__5733__auto__ = c.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(null,cljs.core.async.impl.ioc_helpers.fn_handler((function (x){
var statearr_29377_29424 = state;
(statearr_29377_29424[(2)] = x);

(statearr_29377_29424[(1)] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__5733__auto__)){
var cb = temp__5733__auto__;
var statearr_29380_29428 = state;
(statearr_29380_29428[(2)] = cljs.core.deref(cb));

(statearr_29380_29428[(1)] = blk);


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function cljs$core$async$impl$ioc_helpers$put_BANG_(state,blk,c,val){
var temp__5733__auto__ = c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,val,cljs.core.async.impl.ioc_helpers.fn_handler((function (ret_val){
var statearr_29388_29429 = state;
(statearr_29388_29429[(2)] = ret_val);

(statearr_29388_29429[(1)] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__5733__auto__)){
var cb = temp__5733__auto__;
var statearr_29390_29431 = state;
(statearr_29390_29431[(2)] = cljs.core.deref(cb));

(statearr_29390_29431[(1)] = blk);


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.return_chan = (function cljs$core$async$impl$ioc_helpers$return_chan(state,value){
var c = (state[(6)]);
if((value == null)){
} else {
c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,value,cljs.core.async.impl.ioc_helpers.fn_handler((function (){
return null;
})));
}

c.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);

return c;
});
Object.defineProperty(module.exports, "EXCEPTION_FRAMES", { enumerable: false, get: function() { return cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES; } });
Object.defineProperty(module.exports, "STATE_IDX", { enumerable: false, get: function() { return cljs.core.async.impl.ioc_helpers.STATE_IDX; } });
Object.defineProperty(module.exports, "aset_object", { enumerable: false, get: function() { return cljs.core.async.impl.ioc_helpers.aset_object; } });
Object.defineProperty(module.exports, "t_cljs$core$async$impl$ioc_helpers29336", { enumerable: false, get: function() { return cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers29336; } });
Object.defineProperty(module.exports, "run_state_machine_wrapped", { enumerable: false, get: function() { return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped; } });
Object.defineProperty(module.exports, "FN_IDX", { enumerable: false, get: function() { return cljs.core.async.impl.ioc_helpers.FN_IDX; } });
Object.defineProperty(module.exports, "aget_object", { enumerable: false, get: function() { return cljs.core.async.impl.ioc_helpers.aget_object; } });
Object.defineProperty(module.exports, "return_chan", { enumerable: false, get: function() { return cljs.core.async.impl.ioc_helpers.return_chan; } });
Object.defineProperty(module.exports, "__GT_t_cljs$core$async$impl$ioc_helpers29336", { enumerable: false, get: function() { return cljs.core.async.impl.ioc_helpers.__GT_t_cljs$core$async$impl$ioc_helpers29336; } });
Object.defineProperty(module.exports, "BINDINGS_IDX", { enumerable: false, get: function() { return cljs.core.async.impl.ioc_helpers.BINDINGS_IDX; } });
Object.defineProperty(module.exports, "CURRENT_EXCEPTION", { enumerable: false, get: function() { return cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION; } });
Object.defineProperty(module.exports, "fn_handler", { enumerable: false, get: function() { return cljs.core.async.impl.ioc_helpers.fn_handler; } });
Object.defineProperty(module.exports, "run_state_machine", { enumerable: false, get: function() { return cljs.core.async.impl.ioc_helpers.run_state_machine; } });
Object.defineProperty(module.exports, "finished_QMARK_", { enumerable: false, get: function() { return cljs.core.async.impl.ioc_helpers.finished_QMARK_; } });
Object.defineProperty(module.exports, "USER_START_IDX", { enumerable: false, get: function() { return cljs.core.async.impl.ioc_helpers.USER_START_IDX; } });
Object.defineProperty(module.exports, "put_BANG_", { enumerable: false, get: function() { return cljs.core.async.impl.ioc_helpers.put_BANG_; } });
Object.defineProperty(module.exports, "take_BANG_", { enumerable: false, get: function() { return cljs.core.async.impl.ioc_helpers.take_BANG_; } });
Object.defineProperty(module.exports, "VALUE_IDX", { enumerable: false, get: function() { return cljs.core.async.impl.ioc_helpers.VALUE_IDX; } });
//# sourceMappingURL=cljs.core.async.impl.ioc_helpers.js.map
