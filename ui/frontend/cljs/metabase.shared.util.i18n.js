var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./shadow.js.shim.module$ttag.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.shared.util.i18n.js");

goog.provide('metabase.shared.util.i18n');
metabase.shared.util.i18n.js_i18n = (function metabase$shared$util$i18n$js_i18n(var_args){
var args__4742__auto__ = [];
var len__4736__auto___41558 = arguments.length;
var i__4737__auto___41559 = (0);
while(true){
if((i__4737__auto___41559 < len__4736__auto___41558)){
args__4742__auto__.push((arguments[i__4737__auto___41559]));

var G__41560 = (i__4737__auto___41559 + (1));
i__4737__auto___41559 = G__41560;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic = (function (format_string,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(shadow.js.shim.module$ttag.gettext,format_string,args);
}));

(metabase.shared.util.i18n.js_i18n.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(metabase.shared.util.i18n.js_i18n.cljs$lang$applyTo = (function (seq41545){
var G__41546 = cljs.core.first(seq41545);
var seq41545__$1 = cljs.core.next(seq41545);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41546,seq41545__$1);
}));

Object.defineProperty(module.exports, "js_i18n", { enumerable: false, get: function() { return metabase.shared.util.i18n.js_i18n; } });
//# sourceMappingURL=metabase.shared.util.i18n.js.map
