var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./goog.string.string.js");
require("./goog.string.stringformat.js");
require("./lambdaisland.glogi.js");
require("./lambdaisland.glogi.console.js");
require("./goog.debug.logger.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.shared.util.log.js");

goog.provide('metabase.shared.util.log');
lambdaisland.glogi.console.install_BANG_();
lambdaisland.glogi.set_levels(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("glogi","root","glogi/root",-77414841),new cljs.core.Keyword(null,"info","info",-317069002)], null));
metabase.shared.util.log.log_message = (function metabase$shared$util$log$log_message(var_args){
var args__4742__auto__ = [];
var len__4736__auto___42058 = arguments.length;
var i__4737__auto___42059 = (0);
while(true){
if((i__4737__auto___42059 < len__4736__auto___42058)){
args__4742__auto__.push((arguments[i__4737__auto___42059]));

var G__42060 = (i__4737__auto___42059 + (1));
i__4737__auto___42059 = G__42060;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return metabase.shared.util.log.log_message.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(metabase.shared.util.log.log_message.cljs$core$IFn$_invoke$arity$variadic = (function (args){
if((cljs.core.count(args) > (1))){
return cljs.core.vec(args);
} else {
return cljs.core.first(args);
}
}));

(metabase.shared.util.log.log_message.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(metabase.shared.util.log.log_message.cljs$lang$applyTo = (function (seq42036){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42036));
}));

metabase.shared.util.log.logf_message = (function metabase$shared$util$log$logf_message(var_args){
var args__4742__auto__ = [];
var len__4736__auto___42061 = arguments.length;
var i__4737__auto___42062 = (0);
while(true){
if((i__4737__auto___42062 < len__4736__auto___42061)){
args__4742__auto__.push((arguments[i__4737__auto___42062]));

var G__42063 = (i__4737__auto___42062 + (1));
i__4737__auto___42062 = G__42063;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return metabase.shared.util.log.logf_message.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(metabase.shared.util.log.logf_message.cljs$core$IFn$_invoke$arity$variadic = (function (format_string,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,format_string,args);
}));

(metabase.shared.util.log.logf_message.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(metabase.shared.util.log.logf_message.cljs$lang$applyTo = (function (seq42037){
var G__42038 = cljs.core.first(seq42037);
var seq42037__$1 = cljs.core.next(seq42037);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42038,seq42037__$1);
}));

metabase.shared.util.log.log_STAR_ = (function metabase$shared$util$log$log_STAR_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___42064 = arguments.length;
var i__4737__auto___42065 = (0);
while(true){
if((i__4737__auto___42065 < len__4736__auto___42064)){
args__4742__auto__.push((arguments[i__4737__auto___42065]));

var G__42066 = (i__4737__auto___42065 + (1));
i__4737__auto___42065 = G__42066;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return metabase.shared.util.log.log_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(metabase.shared.util.log.log_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (msg_fn,logger_name,level,args){
if((cljs.core.first(args) instanceof Error)){
var vec__42050 = args;
var seq__42051 = cljs.core.seq(vec__42050);
var first__42052 = cljs.core.first(seq__42051);
var seq__42051__$1 = cljs.core.next(seq__42051);
var e = first__42052;
var more = seq__42051__$1;
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(logger_name,level,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(msg_fn,more),e);
} else {
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$3(logger_name,level,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(msg_fn,args));
}
}));

(metabase.shared.util.log.log_STAR_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(metabase.shared.util.log.log_STAR_.cljs$lang$applyTo = (function (seq42040){
var G__42041 = cljs.core.first(seq42040);
var seq42040__$1 = cljs.core.next(seq42040);
var G__42042 = cljs.core.first(seq42040__$1);
var seq42040__$2 = cljs.core.next(seq42040__$1);
var G__42043 = cljs.core.first(seq42040__$2);
var seq42040__$3 = cljs.core.next(seq42040__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42041,G__42042,G__42043,seq42040__$3);
}));

metabase.shared.util.log.is_loggable_QMARK_ = (function metabase$shared$util$log$is_loggable_QMARK_(logger_name,level){
return lambdaisland.glogi.logger.cljs$core$IFn$_invoke$arity$1(logger_name).isLoggable((lambdaisland.glogi.levels.cljs$core$IFn$_invoke$arity$1 ? lambdaisland.glogi.levels.cljs$core$IFn$_invoke$arity$1(level) : lambdaisland.glogi.levels.call(null,level)));
});
Object.defineProperty(module.exports, "log_message", { enumerable: false, get: function() { return metabase.shared.util.log.log_message; } });
Object.defineProperty(module.exports, "logf_message", { enumerable: false, get: function() { return metabase.shared.util.log.logf_message; } });
Object.defineProperty(module.exports, "log_STAR_", { enumerable: false, get: function() { return metabase.shared.util.log.log_STAR_; } });
Object.defineProperty(module.exports, "is_loggable_QMARK_", { enumerable: false, get: function() { return metabase.shared.util.log.is_loggable_QMARK_; } });
//# sourceMappingURL=metabase.shared.util.log.js.map
