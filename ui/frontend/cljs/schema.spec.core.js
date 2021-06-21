var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./schema.utils.js");
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

$CLJS.SHADOW_ENV.setLoaded("schema.spec.core.js");

goog.provide('schema.spec.core');

/**
 * Specs are a common language for Schemas to express their structure.
 * These two use-cases aren't priveledged, just the two that are considered core
 * to being a Spec.
 * @interface
 */
schema.spec.core.CoreSpec = function(){};

var schema$spec$core$CoreSpec$subschemas$dyn_37418 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (schema.spec.core.subschemas[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (schema.spec.core.subschemas["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("CoreSpec.subschemas",this$);
}
}
});
/**
 * List all subschemas
 */
schema.spec.core.subschemas = (function schema$spec$core$subschemas(this$){
if((((!((this$ == null)))) && ((!((this$.schema$spec$core$CoreSpec$subschemas$arity$1 == null)))))){
return this$.schema$spec$core$CoreSpec$subschemas$arity$1(this$);
} else {
return schema$spec$core$CoreSpec$subschemas$dyn_37418(this$);
}
});

var schema$spec$core$CoreSpec$checker$dyn_37424 = (function (this$,params){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (schema.spec.core.checker[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,params) : m__4429__auto__.call(null,this$,params));
} else {
var m__4426__auto__ = (schema.spec.core.checker["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,params) : m__4426__auto__.call(null,this$,params));
} else {
throw cljs.core.missing_protocol("CoreSpec.checker",this$);
}
}
});
/**
 * Create a function that takes [data], and either returns a walked version of data
 *   (by default, usually just data), or a utils/ErrorContainer containing value that looks
 *   like the 'bad' parts of data with ValidationErrors at the leaves describing the failures.
 * 
 *   params are: subschema-checker, return-walked?, and cache.
 * 
 *   params is a map specifying:
 *    - subschema-checker - a function for checking subschemas
 *    - returned-walked? - a boolean specifying whether to return a walked version of the data
 *      (otherwise, nil is returned which increases performance)
 *    - cache - a map structure from schema to checker, which speeds up checker creation
 *      when the same subschema appears multiple times, and also facilitates handling
 *      recursive schemas.
 */
schema.spec.core.checker = (function schema$spec$core$checker(this$,params){
if((((!((this$ == null)))) && ((!((this$.schema$spec$core$CoreSpec$checker$arity$2 == null)))))){
return this$.schema$spec$core$CoreSpec$checker$arity$2(this$,params);
} else {
return schema$spec$core$CoreSpec$checker$dyn_37424(this$,params);
}
});

schema.spec.core._PLUS_no_precondition_PLUS_ = (function schema$spec$core$_PLUS_no_precondition_PLUS_(_){
return null;
});
/**
 * Helper for making preconditions.
 * Takes a schema, predicate p, and error function err-f.
 * If the datum passes the predicate, returns nil.
 * Otherwise, returns a validation error with description (err-f datum-description),
 * where datum-description is a (short) printable standin for the datum.
 */
schema.spec.core.precondition = (function schema$spec$core$precondition(s,p,err_f){
return (function (x){
var temp__5735__auto__ = (function (){try{if(cljs.core.truth_((p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(x) : p.call(null,x)))){
return null;
} else {
return new cljs.core.Symbol(null,"not","not",1044554643,null);
}
}catch (e37390){if((e37390 instanceof Object)){
var e_SHARP_ = e37390;
return new cljs.core.Symbol(null,"throws?","throws?",789734533,null);
} else {
throw e37390;

}
}})();
if(cljs.core.truth_(temp__5735__auto__)){
var reason = temp__5735__auto__;
return schema.utils.error(schema.utils.make_ValidationError(s,x,(new cljs.core.Delay((function (){
var G__37391 = schema.utils.value_name(x);
return (err_f.cljs$core$IFn$_invoke$arity$1 ? err_f.cljs$core$IFn$_invoke$arity$1(G__37391) : err_f.call(null,G__37391));
}),null)),reason));
} else {
return null;
}
});
});
/**
 * A helper to start a checking run, by setting the appropriate params.
 * For examples, see schema.core/checker or schema.coerce/coercer.
 */
schema.spec.core.run_checker = (function schema$spec$core$run_checker(f,return_walked_QMARK_,s){
var G__37392 = s;
var G__37393 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"subschema-checker","subschema-checker",1137701360),f,new cljs.core.Keyword(null,"return-walked?","return-walked?",-1684646015),return_walked_QMARK_,new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY)], null);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__37392,G__37393) : f.call(null,G__37392,G__37393));
});
schema.spec.core.with_cache = (function schema$spec$core$with_cache(cache,cache_key,wrap_recursive_delay,result_fn){
var temp__5733__auto__ = (function (){var fexpr__37398 = cljs.core.deref(cache);
return (fexpr__37398.cljs$core$IFn$_invoke$arity$1 ? fexpr__37398.cljs$core$IFn$_invoke$arity$1(cache_key) : fexpr__37398.call(null,cache_key));
})();
if(cljs.core.truth_(temp__5733__auto__)){
var w = temp__5733__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("schema.spec.core","in-progress","schema.spec.core/in-progress",-1604867615),w)){
var G__37401 = (new cljs.core.Delay((function (){
var fexpr__37403 = cljs.core.deref(cache);
return (fexpr__37403.cljs$core$IFn$_invoke$arity$1 ? fexpr__37403.cljs$core$IFn$_invoke$arity$1(cache_key) : fexpr__37403.call(null,cache_key));
}),null));
return (wrap_recursive_delay.cljs$core$IFn$_invoke$arity$1 ? wrap_recursive_delay.cljs$core$IFn$_invoke$arity$1(G__37401) : wrap_recursive_delay.call(null,G__37401));
} else {
return w;
}
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cache,cljs.core.assoc,cache_key,new cljs.core.Keyword("schema.spec.core","in-progress","schema.spec.core/in-progress",-1604867615));

var res = (result_fn.cljs$core$IFn$_invoke$arity$0 ? result_fn.cljs$core$IFn$_invoke$arity$0() : result_fn.call(null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cache,cljs.core.assoc,cache_key,res);

return res;
}
});
/**
 * Should be called recursively on each subschema in the 'checker' method of a spec.
 * Handles caching and error wrapping behavior.
 */
schema.spec.core.sub_checker = (function schema$spec$core$sub_checker(p__37405,p__37406){
var map__37407 = p__37405;
var map__37407__$1 = (((((!((map__37407 == null))))?(((((map__37407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37407.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37407):map__37407);
var schema__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37407__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var error_wrap = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37407__$1,new cljs.core.Keyword(null,"error-wrap","error-wrap",-1295833514));
var map__37408 = p__37406;
var map__37408__$1 = (((((!((map__37408 == null))))?(((((map__37408.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37408.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37408):map__37408);
var params = map__37408__$1;
var subschema_checker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37408__$1,new cljs.core.Keyword(null,"subschema-checker","subschema-checker",1137701360));
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37408__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var sub = schema.spec.core.with_cache(cache,schema__$1,(function (d){
return (function (x){
var fexpr__37413 = cljs.core.deref(d);
return (fexpr__37413.cljs$core$IFn$_invoke$arity$1 ? fexpr__37413.cljs$core$IFn$_invoke$arity$1(x) : fexpr__37413.call(null,x));
});
}),(function (){
return (subschema_checker.cljs$core$IFn$_invoke$arity$2 ? subschema_checker.cljs$core$IFn$_invoke$arity$2(schema__$1,params) : subschema_checker.call(null,schema__$1,params));
}));
if(cljs.core.truth_(error_wrap)){
return (function (x){
var res = (sub.cljs$core$IFn$_invoke$arity$1 ? sub.cljs$core$IFn$_invoke$arity$1(x) : sub.call(null,x));
var temp__5733__auto__ = schema.utils.error_val(res);
if(cljs.core.truth_(temp__5733__auto__)){
var e = temp__5733__auto__;
return schema.utils.error((error_wrap.cljs$core$IFn$_invoke$arity$1 ? error_wrap.cljs$core$IFn$_invoke$arity$1(res) : error_wrap.call(null,res)));
} else {
return res;
}
});
} else {
return sub;
}
});
Object.defineProperty(module.exports, "CoreSpec", { enumerable: false, get: function() { return schema.spec.core.CoreSpec; } });
Object.defineProperty(module.exports, "subschemas", { enumerable: false, get: function() { return schema.spec.core.subschemas; } });
Object.defineProperty(module.exports, "checker", { enumerable: false, get: function() { return schema.spec.core.checker; } });
Object.defineProperty(module.exports, "_PLUS_no_precondition_PLUS_", { enumerable: false, get: function() { return schema.spec.core._PLUS_no_precondition_PLUS_; } });
Object.defineProperty(module.exports, "precondition", { enumerable: false, get: function() { return schema.spec.core.precondition; } });
Object.defineProperty(module.exports, "run_checker", { enumerable: false, get: function() { return schema.spec.core.run_checker; } });
Object.defineProperty(module.exports, "with_cache", { enumerable: false, get: function() { return schema.spec.core.with_cache; } });
Object.defineProperty(module.exports, "sub_checker", { enumerable: false, get: function() { return schema.spec.core.sub_checker; } });
//# sourceMappingURL=schema.spec.core.js.map
