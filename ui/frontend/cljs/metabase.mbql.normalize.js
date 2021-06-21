var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.set.js");
require("./clojure.walk.js");
require("./medley.core.js");
require("./metabase.mbql.util.js");
require("./metabase.mbql.util.match.js");
require("./metabase.shared.util.i18n.js");
require("./metabase.shared.util.log.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.mbql.normalize.js");

goog.provide('metabase.mbql.normalize');
/**
 * True if `x` is an MBQL clause (a sequence with a token as its first arg). (This is different from the implementation
 *   in `mbql.u` because it also supports un-normalized clauses. You shouldn't need to use this outside of this
 *   namespace.)
 */
metabase.mbql.normalize.mbql_clause_QMARK_ = (function metabase$mbql$normalize$mbql_clause_QMARK_(x){
if(cljs.core.sequential_QMARK_(x)){
if((!(cljs.core.map_entry_QMARK_(x)))){
return cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.string_QMARK_)(cljs.core.first(x));
} else {
return false;
}
} else {
return false;
}
});
/**
 * Normalize token `x`, but only if it's a keyword or string.
 */
metabase.mbql.normalize.maybe_normalize_token = (function metabase$mbql$normalize$maybe_normalize_token(x){
if(cljs.core.truth_(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.string_QMARK_)(x))){
return metabase.mbql.util.normalize_token(x);
} else {
return x;
}
});
/**
 * If `x` an MBQL clause, and an instance of clauses defined by keyword(s) `k-or-ks`?
 * 
 *  (is-clause? :count [:count 10])        ; -> true
 *  (is-clause? #{:+ :- :* :/} [:+ 10 20]) ; -> true
 * 
 *   (This is different from the implementation in `mbql.u` because it also supports un-normalized clauses. You shouldn't
 *   need to use this outside of this namespace.)
 */
metabase.mbql.normalize.is_clause_QMARK_ = (function metabase$mbql$normalize$is_clause_QMARK_(k_or_ks,x){
var and__4115__auto__ = metabase.mbql.normalize.mbql_clause_QMARK_(x);
if(cljs.core.truth_(and__4115__auto__)){
var clause_name = metabase.mbql.normalize.maybe_normalize_token(cljs.core.first(x));
if(cljs.core.coll_QMARK_(k_or_ks)){
var fexpr__43309 = cljs.core.set(k_or_ks);
return (fexpr__43309.cljs$core$IFn$_invoke$arity$1 ? fexpr__43309.cljs$core$IFn$_invoke$arity$1(clause_name) : fexpr__43309.call(null,clause_name));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_or_ks,clause_name);
}
} else {
return and__4115__auto__;
}
});
if((typeof metabase !== 'undefined') && (typeof metabase.mbql !== 'undefined') && (typeof metabase.mbql.normalize !== 'undefined') && (typeof metabase.mbql.normalize.normalize_mbql_clause_tokens !== 'undefined')){
} else {
metabase.mbql.normalize.normalize_mbql_clause_tokens = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__43312 = cljs.core.get_global_hierarchy;
return (fexpr__43312.cljs$core$IFn$_invoke$arity$0 ? fexpr__43312.cljs$core$IFn$_invoke$arity$0() : fexpr__43312.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.mbql.normalize","normalize-mbql-clause-tokens"),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(metabase.mbql.normalize.maybe_normalize_token,cljs.core.first),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
metabase.mbql.normalize.normalize_mbql_clause_tokens.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"expression","expression",202311876),(function (p__43313){
var vec__43314 = p__43313;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43314,(0),null);
var expression_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43314,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expression","expression",202311876),(((expression_name instanceof cljs.core.Keyword))?metabase.mbql.util.qualified_name(expression_name):expression_name)], null);
}));
metabase.mbql.normalize.normalize_mbql_clause_tokens.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"binning-strategy","binning-strategy",2063329158),(function (p__43317){
var vec__43318 = p__43317;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43318,(0),null);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43318,(1),null);
var strategy_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43318,(2),null);
var strategy_param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43318,(3),null);
if(cljs.core.truth_(strategy_param)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(metabase.mbql.normalize.normalize_mbql_clause_tokens.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"binning-strategy","binning-strategy",2063329158),field,strategy_name], null)),strategy_param);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"binning-strategy","binning-strategy",2063329158),(metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2 ? metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2(field,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)) : metabase.mbql.normalize.normalize_tokens.call(null,field,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061))),metabase.mbql.normalize.maybe_normalize_token(strategy_name)], null);
}
}));
metabase.mbql.normalize.normalize_mbql_clause_tokens.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"field","field",-1302436500),(function (p__43321){
var vec__43322 = p__43321;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43322,(0),null);
var id_or_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43322,(1),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43322,(2),null);
var opts__$1 = (metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2 ? metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)) : metabase.mbql.normalize.normalize_tokens.call(null,opts,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field","field",-1302436500),id_or_name,(function (){var G__43325 = opts__$1;
var G__43325__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"base-type","base-type",1167971299).cljs$core$IFn$_invoke$arity$1(opts__$1))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__43325,new cljs.core.Keyword(null,"base-type","base-type",1167971299),cljs.core.keyword):G__43325);
var G__43325__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"temporal-unit","temporal-unit",-1892306358).cljs$core$IFn$_invoke$arity$1(opts__$1))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__43325__$1,new cljs.core.Keyword(null,"temporal-unit","temporal-unit",-1892306358),cljs.core.keyword):G__43325__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binning","binning",1709835866).cljs$core$IFn$_invoke$arity$1(opts__$1))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__43325__$2,new cljs.core.Keyword(null,"binning","binning",1709835866),(function (binning){
var G__43326 = binning;
if(cljs.core.truth_(new cljs.core.Keyword(null,"strategy","strategy",-1471631918).cljs$core$IFn$_invoke$arity$1(binning))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__43326,new cljs.core.Keyword(null,"strategy","strategy",-1471631918),cljs.core.keyword);
} else {
return G__43326;
}
}));
} else {
return G__43325__$2;
}
})()], null);
}));
metabase.mbql.normalize.normalize_mbql_clause_tokens.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"field-literal","field-literal",-1295883554),(function (p__43327){
var vec__43328 = p__43327;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43328,(0),null);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43328,(1),null);
var field_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43328,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field-literal","field-literal",-1295883554),(((field_name instanceof cljs.core.Keyword))?metabase.mbql.util.qualified_name(field_name):field_name),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(field_type)], null);
}));
metabase.mbql.normalize.normalize_mbql_clause_tokens.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"datetime-field","datetime-field",21731696),(function (p__43331){
var vec__43332 = p__43331;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43332,(0),null);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43332,(1),null);
var as_or_unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43332,(2),null);
var maybe_unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43332,(3),null);
if(cljs.core.truth_(maybe_unit)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datetime-field","datetime-field",21731696),(metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2 ? metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2(field,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)) : metabase.mbql.normalize.normalize_tokens.call(null,field,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061))),new cljs.core.Keyword(null,"as","as",1148689641),metabase.mbql.normalize.maybe_normalize_token(maybe_unit)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datetime-field","datetime-field",21731696),(metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2 ? metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2(field,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)) : metabase.mbql.normalize.normalize_tokens.call(null,field,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061))),metabase.mbql.normalize.maybe_normalize_token(as_or_unit)], null);
}
}));
metabase.mbql.normalize.normalize_mbql_clause_tokens.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"time-interval","time-interval",704622015),(function (p__43335){
var vec__43336 = p__43335;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43336,(0),null);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43336,(1),null);
var amount = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43336,(2),null);
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43336,(3),null);
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43336,(4),null);
if(cljs.core.truth_(options)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(metabase.mbql.normalize.normalize_mbql_clause_tokens.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time-interval","time-interval",704622015),field,amount,unit], null)),(metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2 ? metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2(options,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)) : metabase.mbql.normalize.normalize_tokens.call(null,options,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061))));
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time-interval","time-interval",704622015),(metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2 ? metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2(field,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)) : metabase.mbql.normalize.normalize_tokens.call(null,field,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061))),((cljs.core.integer_QMARK_(amount))?amount:metabase.mbql.normalize.maybe_normalize_token(amount)),metabase.mbql.normalize.maybe_normalize_token(unit)], null);
}
}));
metabase.mbql.normalize.normalize_mbql_clause_tokens.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"relative-datetime","relative-datetime",1285169278),(function (p__43339){
var vec__43340 = p__43339;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43340,(0),null);
var amount = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43340,(1),null);
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43340,(2),null);
if(cljs.core.truth_(unit)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relative-datetime","relative-datetime",1285169278),amount,metabase.mbql.normalize.maybe_normalize_token(unit)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relative-datetime","relative-datetime",1285169278),new cljs.core.Keyword(null,"current","current",-1088038603)], null);
}
}));
metabase.mbql.normalize.normalize_mbql_clause_tokens.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"interval","interval",1708495417),(function (p__43343){
var vec__43344 = p__43343;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43344,(0),null);
var amount = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43344,(1),null);
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43344,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"interval","interval",1708495417),amount,metabase.mbql.normalize.maybe_normalize_token(unit)], null);
}));
metabase.mbql.normalize.normalize_mbql_clause_tokens.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__43348){
var vec__43349 = p__43348;
var seq__43350 = cljs.core.seq(vec__43349);
var first__43351 = cljs.core.first(seq__43350);
var seq__43350__$1 = cljs.core.next(seq__43350);
var clause_name = first__43351;
var args = seq__43350__$1;
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.mbql.normalize.maybe_normalize_token(clause_name)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__43347_SHARP_){
return (metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2 ? metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2(p1__43347_SHARP_,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)) : metabase.mbql.normalize.normalize_tokens.call(null,p1__43347_SHARP_,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)));
})),args);
}));
metabase.mbql.normalize.aggregation_subclause_QMARK_ = (function metabase$mbql$normalize$aggregation_subclause_QMARK_(x){
var or__4126__auto__ = (cljs.core.truth_(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.string_QMARK_)(x))?(function (){var G__43355 = metabase.mbql.normalize.maybe_normalize_token(x);
var fexpr__43354 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 18, [new cljs.core.Keyword(null,"min","min",444991522),null,new cljs.core.Keyword(null,"*","*",-1294732318),null,new cljs.core.Keyword(null,"stddev","stddev",-865474939),null,new cljs.core.Keyword(null,"count-where","count-where",385407720),null,new cljs.core.Keyword(null,"-","-",-2112348439),null,new cljs.core.Keyword(null,"cum-count","cum-count",-1964431543),null,new cljs.core.Keyword(null,"sum-where","sum-where",2135348428),null,new cljs.core.Keyword(null,"/","/",1282502798),null,new cljs.core.Keyword(null,"distinct","distinct",-1788879121),null,new cljs.core.Keyword(null,"percentile","percentile",-601188752),null,new cljs.core.Keyword(null,"+","+",1913524883),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"median","median",569566131),null,new cljs.core.Keyword(null,"share","share",-589433933),null,new cljs.core.Keyword(null,"max","max",61366548),null,new cljs.core.Keyword(null,"count","count",2139924085),null,new cljs.core.Keyword(null,"avg","avg",197406200),null,new cljs.core.Keyword(null,"sum","sum",136986814),null], null), null);
return (fexpr__43354.cljs$core$IFn$_invoke$arity$1 ? fexpr__43354.cljs$core$IFn$_invoke$arity$1(G__43355) : fexpr__43354.call(null,G__43355));
})():null);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.truth_(metabase.mbql.normalize.mbql_clause_QMARK_(x))){
var G__43356 = cljs.core.first(x);
return (metabase.mbql.normalize.aggregation_subclause_QMARK_.cljs$core$IFn$_invoke$arity$1 ? metabase.mbql.normalize.aggregation_subclause_QMARK_.cljs$core$IFn$_invoke$arity$1(G__43356) : metabase.mbql.normalize.aggregation_subclause_QMARK_.call(null,G__43356));
} else {
return null;
}
}
});
/**
 * For old-style aggregations like `{:aggregation :count}` make sure we normalize the ag type (`:count`). Other wacky
 *   clauses like `{:aggregation [:count :count]}` need to be handled as well :(
 */
metabase.mbql.normalize.normalize_ag_clause_tokens = (function metabase$mbql$normalize$normalize_ag_clause_tokens(ag_clause){
if(cljs.core.truth_(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.string_QMARK_)(ag_clause))){
return metabase.mbql.normalize.maybe_normalize_token(ag_clause);
} else {
if(cljs.core.truth_(metabase.mbql.normalize.is_clause_QMARK_(new cljs.core.Keyword(null,"named","named",-422393479),ag_clause))){
var vec__43357 = ag_clause;
var seq__43358 = cljs.core.seq(vec__43357);
var first__43359 = cljs.core.first(seq__43358);
var seq__43358__$1 = cljs.core.next(seq__43358);
var _ = first__43359;
var first__43359__$1 = cljs.core.first(seq__43358__$1);
var seq__43358__$2 = cljs.core.next(seq__43358__$1);
var wrapped_ag = first__43359__$1;
var more = seq__43358__$2;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"named","named",-422393479),(metabase.mbql.normalize.normalize_ag_clause_tokens.cljs$core$IFn$_invoke$arity$1 ? metabase.mbql.normalize.normalize_ag_clause_tokens.cljs$core$IFn$_invoke$arity$1(wrapped_ag) : metabase.mbql.normalize.normalize_ag_clause_tokens.call(null,wrapped_ag))], null),more);
} else {
if(cljs.core.truth_((cljs.core.truth_(metabase.mbql.normalize.mbql_clause_QMARK_(ag_clause))?metabase.mbql.normalize.aggregation_subclause_QMARK_(cljs.core.second(ag_clause)):null))){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(metabase.mbql.normalize.normalize_ag_clause_tokens,ag_clause);
} else {
return (metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2 ? metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2(ag_clause,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)) : metabase.mbql.normalize.normalize_tokens.call(null,ag_clause,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)));

}
}
}
});
/**
 * For expressions, we don't want to normalize the name of the expression; keep that as is, but make it a keyword;
 * normalize the definitions as normal.
 */
metabase.mbql.normalize.normalize_expressions_tokens = (function metabase$mbql$normalize$normalize_expressions_tokens(expressions_clause){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function metabase$mbql$normalize$normalize_expressions_tokens_$_iter__43360(s__43361){
return (new cljs.core.LazySeq(null,(function (){
var s__43361__$1 = s__43361;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__43361__$1);
if(temp__5735__auto__){
var s__43361__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43361__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__43361__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__43363 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__43362 = (0);
while(true){
if((i__43362 < size__4528__auto__)){
var vec__43364 = cljs.core._nth(c__4527__auto__,i__43362);
var expression_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43364,(0),null);
var definition = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43364,(1),null);
cljs.core.chunk_append(b__43363,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(expression_name),(metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2 ? metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2(definition,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)) : metabase.mbql.normalize.normalize_tokens.call(null,definition,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)))], null));

var G__44013 = (i__43362 + (1));
i__43362 = G__44013;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43363),metabase$mbql$normalize$normalize_expressions_tokens_$_iter__43360(cljs.core.chunk_rest(s__43361__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43363),null);
}
} else {
var vec__43367 = cljs.core.first(s__43361__$2);
var expression_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43367,(0),null);
var definition = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43367,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(expression_name),(metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2 ? metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2(definition,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)) : metabase.mbql.normalize.normalize_tokens.call(null,definition,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)))], null),metabase$mbql$normalize$normalize_expressions_tokens_$_iter__43360(cljs.core.rest(s__43361__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(expressions_clause);
})());
});
/**
 * Normalize tokens in the order-by clause, which can have different syntax when using MBQL 95 or 98
 *   rules (`[<field> :asc]` vs `[:asc <field>]`, for example).
 */
metabase.mbql.normalize.normalize_order_by_tokens = (function metabase$mbql$normalize$normalize_order_by_tokens(clauses){
return cljs.core.vec((function (){var iter__4529__auto__ = (function metabase$mbql$normalize$normalize_order_by_tokens_$_iter__43370(s__43371){
return (new cljs.core.LazySeq(null,(function (){
var s__43371__$1 = s__43371;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__43371__$1);
if(temp__5735__auto__){
var s__43371__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43371__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__43371__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__43373 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__43372 = (0);
while(true){
if((i__43372 < size__4528__auto__)){
var subclause = cljs.core._nth(c__4527__auto__,i__43372);
cljs.core.chunk_append(b__43373,(cljs.core.truth_(metabase.mbql.normalize.mbql_clause_QMARK_(subclause))?metabase.mbql.normalize.normalize_mbql_clause_tokens.cljs$core$IFn$_invoke$arity$1(subclause):cljs.core.reverse(metabase.mbql.normalize.normalize_mbql_clause_tokens.cljs$core$IFn$_invoke$arity$1(cljs.core.reverse(subclause)))));

var G__44026 = (i__43372 + (1));
i__43372 = G__44026;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43373),metabase$mbql$normalize$normalize_order_by_tokens_$_iter__43370(cljs.core.chunk_rest(s__43371__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43373),null);
}
} else {
var subclause = cljs.core.first(s__43371__$2);
return cljs.core.cons((cljs.core.truth_(metabase.mbql.normalize.mbql_clause_QMARK_(subclause))?metabase.mbql.normalize.normalize_mbql_clause_tokens.cljs$core$IFn$_invoke$arity$1(subclause):cljs.core.reverse(metabase.mbql.normalize.normalize_mbql_clause_tokens.cljs$core$IFn$_invoke$arity$1(cljs.core.reverse(subclause)))),metabase$mbql$normalize$normalize_order_by_tokens_$_iter__43370(cljs.core.rest(s__43371__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(clauses);
})());
});
/**
 * Normalize native-query template tags. Like `expressions` we want to preserve the original name rather than normalize
 *   it.
 */
metabase.mbql.normalize.normalize_template_tags = (function metabase$mbql$normalize$normalize_template_tags(template_tags){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function metabase$mbql$normalize$normalize_template_tags_$_iter__43374(s__43375){
return (new cljs.core.LazySeq(null,(function (){
var s__43375__$1 = s__43375;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__43375__$1);
if(temp__5735__auto__){
var s__43375__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43375__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__43375__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__43377 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__43376 = (0);
while(true){
if((i__43376 < size__4528__auto__)){
var vec__43378 = cljs.core._nth(c__4527__auto__,i__43376);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43378,(0),null);
var tag_def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43378,(1),null);
cljs.core.chunk_append(b__43377,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.mbql.util.qualified_name(tag_name),(function (){var tag_def_SINGLEQUOTE_ = (function (){var G__43381 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(tag_def,new cljs.core.Keyword(null,"default","default",-1987822328));
var G__43382 = new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061);
return (metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2 ? metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2(G__43381,G__43382) : metabase.mbql.normalize.normalize_tokens.call(null,G__43381,G__43382));
})();
var G__43383 = tag_def_SINGLEQUOTE_;
var G__43383__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(tag_def))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43383,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(tag_def)):G__43383);
var G__43383__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(tag_def_SINGLEQUOTE_))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__43383__$1,new cljs.core.Keyword(null,"type","type",1174270348),metabase.mbql.normalize.maybe_normalize_token):G__43383__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"widget-type","widget-type",1836256899).cljs$core$IFn$_invoke$arity$1(tag_def_SINGLEQUOTE_))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__43383__$2,new cljs.core.Keyword(null,"widget-type","widget-type",1836256899),metabase.mbql.normalize.maybe_normalize_token);
} else {
return G__43383__$2;
}
})()], null));

var G__44030 = (i__43376 + (1));
i__43376 = G__44030;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43377),metabase$mbql$normalize$normalize_template_tags_$_iter__43374(cljs.core.chunk_rest(s__43375__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43377),null);
}
} else {
var vec__43384 = cljs.core.first(s__43375__$2);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43384,(0),null);
var tag_def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43384,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.mbql.util.qualified_name(tag_name),(function (){var tag_def_SINGLEQUOTE_ = (function (){var G__43387 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(tag_def,new cljs.core.Keyword(null,"default","default",-1987822328));
var G__43388 = new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061);
return (metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2 ? metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2(G__43387,G__43388) : metabase.mbql.normalize.normalize_tokens.call(null,G__43387,G__43388));
})();
var G__43389 = tag_def_SINGLEQUOTE_;
var G__43389__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(tag_def))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43389,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(tag_def)):G__43389);
var G__43389__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(tag_def_SINGLEQUOTE_))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__43389__$1,new cljs.core.Keyword(null,"type","type",1174270348),metabase.mbql.normalize.maybe_normalize_token):G__43389__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"widget-type","widget-type",1836256899).cljs$core$IFn$_invoke$arity$1(tag_def_SINGLEQUOTE_))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__43389__$2,new cljs.core.Keyword(null,"widget-type","widget-type",1836256899),metabase.mbql.normalize.maybe_normalize_token);
} else {
return G__43389__$2;
}
})()], null),metabase$mbql$normalize$normalize_template_tags_$_iter__43374(cljs.core.rest(s__43375__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(template_tags);
})());
});
metabase.mbql.normalize.normalize_query_parameter = (function metabase$mbql$normalize$normalize_query_parameter(p__43396){
var map__43398 = p__43396;
var map__43398__$1 = (((((!((map__43398 == null))))?(((((map__43398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43398):map__43398);
var param = map__43398__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43398__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43398__$1,new cljs.core.Keyword(null,"target","target",253001721));
var G__43403 = param;
var G__43403__$1 = (cljs.core.truth_(type)?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__43403,new cljs.core.Keyword(null,"type","type",1174270348),metabase.mbql.normalize.maybe_normalize_token):G__43403);
if(cljs.core.truth_(target)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__43403__$1,new cljs.core.Keyword(null,"target","target",253001721),(function (p1__43395_SHARP_){
return (metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2 ? metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2(p1__43395_SHARP_,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)) : metabase.mbql.normalize.normalize_tokens.call(null,p1__43395_SHARP_,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)));
}));
} else {
return G__43403__$1;
}
});
metabase.mbql.normalize.normalize_source_query = (function metabase$mbql$normalize$normalize_source_query(source_query){
var map__43410 = medley.core.map_keys(metabase.mbql.normalize.maybe_normalize_token,source_query);
var map__43410__$1 = (((((!((map__43410 == null))))?(((((map__43410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43410.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43410):map__43410);
var source_query__$1 = map__43410__$1;
var native_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43410__$1,new cljs.core.Keyword(null,"native","native",-613060878));
if(cljs.core.truth_(native_QMARK_)){
return clojure.set.rename_keys((function (){var G__43414 = clojure.set.rename_keys(source_query__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"native","native",-613060878),new cljs.core.Keyword(null,"query","query",-1288509510)], null));
var G__43415 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"native","native",-613060878)], null);
return (metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2 ? metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2(G__43414,G__43415) : metabase.mbql.normalize.normalize_tokens.call(null,G__43414,G__43415));
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"native","native",-613060878)], null));
} else {
var G__43416 = source_query__$1;
var G__43417 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query","query",-1288509510)], null);
return (metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2 ? metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2(G__43416,G__43417) : metabase.mbql.normalize.normalize_tokens.call(null,G__43416,G__43417));
}
});
metabase.mbql.normalize.normalize_join = (function metabase$mbql$normalize$normalize_join(join){
var map__43423 = (metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2 ? metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2(join,new cljs.core.Keyword(null,"query","query",-1288509510)) : metabase.mbql.normalize.normalize_tokens.call(null,join,new cljs.core.Keyword(null,"query","query",-1288509510)));
var map__43423__$1 = (((((!((map__43423 == null))))?(((((map__43423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43423.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43423):map__43423);
var join__$1 = map__43423__$1;
var strategy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43423__$1,new cljs.core.Keyword(null,"strategy","strategy",-1471631918));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43423__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43423__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630));
var G__43427 = join__$1;
var G__43427__$1 = (cljs.core.truth_(strategy)?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__43427,new cljs.core.Keyword(null,"strategy","strategy",-1471631918),metabase.mbql.normalize.maybe_normalize_token):G__43427);
var G__43427__$2 = (cljs.core.truth_(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.string_QMARK_)(fields))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__43427__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230),metabase.mbql.normalize.maybe_normalize_token):G__43427__$1);
if(cljs.core.truth_(alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__43427__$2,new cljs.core.Keyword(null,"alias","alias",-2039751630),metabase.mbql.util.qualified_name);
} else {
return G__43427__$2;
}
});
/**
 * Normalize source/results metadata for a single column.
 */
metabase.mbql.normalize.normalize_source_metadata = (function metabase$mbql$normalize$normalize_source_metadata(metadata){
if(cljs.core.map_QMARK_(metadata)){
} else {
throw (new Error("Assert failed: (map? metadata)"));
}

return medley.core.update_existing.cljs$core$IFn$_invoke$arity$3(medley.core.update_existing.cljs$core$IFn$_invoke$arity$3(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__43433_SHARP_,p2__43434_SHARP_){
return medley.core.update_existing.cljs$core$IFn$_invoke$arity$3(p1__43433_SHARP_,p2__43434_SHARP_,cljs.core.keyword);
}),metadata,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base_type","base_type",1908272670),new cljs.core.Keyword(null,"effective_type","effective_type",1699478099),new cljs.core.Keyword(null,"semantic_type","semantic_type",272485089),new cljs.core.Keyword(null,"visibility_type","visibility_type",-508434247),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"unit","unit",375175175)], null)),new cljs.core.Keyword(null,"field_ref","field_ref",-1985640334),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(metabase.mbql.normalize.canonicalize_mbql_clauses,metabase.mbql.normalize.normalize_tokens)),new cljs.core.Keyword(null,"fingerprint","fingerprint",598613022),clojure.walk.keywordize_keys);
});
/**
 * For native queries, normalize the top-level keys, and template tags, but nothing else.
 */
metabase.mbql.normalize.normalize_native_query = (function metabase$mbql$normalize$normalize_native_query(native_query){
var native_query__$1 = medley.core.map_keys(metabase.mbql.normalize.maybe_normalize_token,native_query);
var G__43449 = native_query__$1;
if(cljs.core.seq(new cljs.core.Keyword(null,"template-tags","template-tags",1853115685).cljs$core$IFn$_invoke$arity$1(native_query__$1))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__43449,new cljs.core.Keyword(null,"template-tags","template-tags",1853115685),metabase.mbql.normalize.normalize_template_tags);
} else {
return G__43449;
}
});
/**
 * Map of special functions that should be used to perform token normalization for a given path. For example, the
 *   `:expressions` key in an MBQL query should preserve the case of the expression names; this custom behavior is
 *   defined below.
 */
metabase.mbql.normalize.path__GT_special_token_normalization_fn = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),metabase.mbql.normalize.maybe_normalize_token,new cljs.core.Keyword(null,"native","native",-613060878),metabase.mbql.normalize.normalize_native_query,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"aggregation","aggregation",1597476696),metabase.mbql.normalize.normalize_ag_clause_tokens,new cljs.core.Keyword(null,"expressions","expressions",255689909),metabase.mbql.normalize.normalize_expressions_tokens,new cljs.core.Keyword(null,"order-by","order-by",1527318070),metabase.mbql.normalize.normalize_order_by_tokens,new cljs.core.Keyword(null,"source-query","source-query",198004422),metabase.mbql.normalize.normalize_source_query,new cljs.core.Keyword(null,"source-metadata","source-metadata",-477816085),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("metabase.mbql.normalize","sequence","metabase.mbql.normalize/sequence",-1700645683),metabase.mbql.normalize.normalize_source_metadata], null),new cljs.core.Keyword(null,"joins","joins",1033962699),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("metabase.mbql.normalize","sequence","metabase.mbql.normalize/sequence",-1700645683),metabase.mbql.normalize.normalize_join], null)], null),new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("metabase.mbql.normalize","sequence","metabase.mbql.normalize/sequence",-1700645683),metabase.mbql.normalize.normalize_query_parameter], null),new cljs.core.Keyword(null,"context","context",-830191113),(function (p1__43452_SHARP_){
var G__43453 = p1__43452_SHARP_;
if((G__43453 == null)){
return null;
} else {
return metabase.mbql.normalize.maybe_normalize_token(G__43453);
}
}),new cljs.core.Keyword(null,"source-metadata","source-metadata",-477816085),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("metabase.mbql.normalize","sequence","metabase.mbql.normalize/sequence",-1700645683),metabase.mbql.normalize.normalize_source_metadata], null)], null);
/**
 * Recursively normalize tokens in `x`.
 * 
 *   Every time this function recurses (thru a map value) it adds a new (normalized) key to key path, e.g. `path` will be
 *   `[:query :order-by]` when we're in the MBQL order-by clause. If we need to handle these top-level clauses in special
 *   ways add a function to `path->special-token-normalization-fn` above.
 * 
 *   In some cases, dealing with the path isn't desirable, but we don't want to accidentally trigger normalization
 *   functions (such as accidentally normalizing the `:type` key in something other than the top-level of the query), so
 *   by convention please pass `:ignore-path` to avoid accidentally triggering path functions.
 */
metabase.mbql.normalize.normalize_tokens = (function metabase$mbql$normalize$normalize_tokens(var_args){
var args__4742__auto__ = [];
var len__4736__auto___44058 = arguments.length;
var i__4737__auto___44059 = (0);
while(true){
if((i__4737__auto___44059 < len__4736__auto___44058)){
args__4742__auto__.push((arguments[i__4737__auto___44059]));

var G__44060 = (i__4737__auto___44059 + (1));
i__4737__auto___44059 = G__44060;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__43476){
var vec__43477 = p__43476;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43477,(0),null);
var path__$1 = (((path instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null):cljs.core.vec(path));
var special_fn = ((cljs.core.seq(path__$1))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(metabase.mbql.normalize.path__GT_special_token_normalization_fn,path__$1):null);
try{if(cljs.core.fn_QMARK_(special_fn)){
return (special_fn.cljs$core$IFn$_invoke$arity$1 ? special_fn.cljs$core$IFn$_invoke$arity$1(x) : special_fn.call(null,x));
} else {
if(cljs.core.record_QMARK_(x)){
return x;
} else {
if(cljs.core.map_QMARK_(x)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function metabase$mbql$normalize$iter__43483(s__43484){
return (new cljs.core.LazySeq(null,(function (){
var s__43484__$1 = s__43484;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__43484__$1);
if(temp__5735__auto__){
var s__43484__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43484__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__43484__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__43486 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__43485 = (0);
while(true){
if((i__43485 < size__4528__auto__)){
var vec__43487 = cljs.core._nth(c__4527__auto__,i__43485);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43487,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43487,(1),null);
var k__$1 = metabase.mbql.normalize.maybe_normalize_token(k);
cljs.core.chunk_append(b__43486,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__$1,metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(path__$1),k__$1)], 0))], null));

var G__44067 = (i__43485 + (1));
i__43485 = G__44067;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43486),metabase$mbql$normalize$iter__43483(cljs.core.chunk_rest(s__43484__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43486),null);
}
} else {
var vec__43490 = cljs.core.first(s__43484__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43490,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43490,(1),null);
var k__$1 = metabase.mbql.normalize.maybe_normalize_token(k);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__$1,metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(path__$1),k__$1)], 0))], null),metabase$mbql$normalize$iter__43483(cljs.core.rest(s__43484__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(x);
})());
} else {
if(cljs.core.truth_(metabase.mbql.normalize.mbql_clause_QMARK_(x))){
return metabase.mbql.normalize.normalize_mbql_clause_tokens.cljs$core$IFn$_invoke$arity$1(x);
} else {
if(cljs.core.sequential_QMARK_(x)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__43460_SHARP_){
return metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$variadic(p1__43460_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(path__$1),new cljs.core.Keyword("metabase.mbql.normalize","sequence","metabase.mbql.normalize/sequence",-1700645683))], 0));
}),x);
} else {
return x;

}
}
}
}
}
}catch (e43481){if((e43481 instanceof Error)){
var e = e43481;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(metabase.shared.util.i18n.js_i18n("Error normalizing form."),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"form","form",-1624062471),x,new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"special-fn","special-fn",1290649344),special_fn], null),e);
} else {
throw e43481;

}
}}));

(metabase.mbql.normalize.normalize_tokens.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(metabase.mbql.normalize.normalize_tokens.cljs$lang$applyTo = (function (seq43467){
var G__43468 = cljs.core.first(seq43467);
var seq43467__$1 = cljs.core.next(seq43467);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43468,seq43467__$1);
}));

/**
 * Wrap raw integer Field IDs (i.e., those in an implicit 'field' position) in a `:field` clause if they're not
 *   already. Done for MBQL 95 backwards-compatibility. e.g.:
 * 
 *  {:filter [:= 10 20]} ; -> {:filter [:= [:field 10 nil] 20]}
 */
metabase.mbql.normalize.wrap_implicit_field_id = (function metabase$mbql$normalize$wrap_implicit_field_id(field){
if(cljs.core.integer_QMARK_(field)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field","field",-1302436500),field,null], null);
} else {
return field;
}
});
if((typeof metabase !== 'undefined') && (typeof metabase.mbql !== 'undefined') && (typeof metabase.mbql.normalize !== 'undefined') && (typeof metabase.mbql.normalize.canonicalize_mbql_clause !== 'undefined')){
} else {
metabase.mbql.normalize.canonicalize_mbql_clause = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__43493 = cljs.core.get_global_hierarchy;
return (fexpr__43493.cljs$core$IFn$_invoke$arity$0 ? fexpr__43493.cljs$core$IFn$_invoke$arity$0() : fexpr__43493.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.mbql.normalize","canonicalize-mbql-clause"),(function (clause){
if(cljs.core.truth_(metabase.mbql.normalize.mbql_clause_QMARK_(clause))){
return cljs.core.first(clause);
} else {
return null;
}
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (clause){
return clause;
}));
/**
 * If `clause` is a raw integer ID wrap it in a `:field` clause. Either way, canonicalize the resulting clause.
 */
metabase.mbql.normalize.canonicalize_implicit_field_id = (function metabase$mbql$normalize$canonicalize_implicit_field_id(clause){
return metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IFn$_invoke$arity$1(metabase.mbql.normalize.wrap_implicit_field_id(clause));
});
metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"field","field",-1302436500),(function (p__43494){
var vec__43495 = p__43494;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43495,(0),null);
var id_or_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43495,(1),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43495,(2),null);
var clause = vec__43495;
if(cljs.core.truth_(metabase.mbql.normalize.is_clause_QMARK_(new cljs.core.Keyword(null,"field","field",-1302436500),id_or_name))){
var vec__43498 = id_or_name;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43498,(0),null);
var nested_id_or_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43498,(1),null);
var nested_opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43498,(2),null);
return metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field","field",-1302436500),nested_id_or_name,cljs.core.not_empty(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nested_opts,opts], 0)))], null));
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field","field",-1302436500),id_or_name,cljs.core.not_empty(opts)], null);
}
}));
metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"field-id","field-id",-353751335),(function (p__43501){
var vec__43502 = p__43501;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43502,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43502,(1),null);
if(cljs.core.truth_(metabase.mbql.normalize.mbql_clause_QMARK_(id))){
return metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IFn$_invoke$arity$1(id);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field","field",-1302436500),id,null], null);
}
}));
metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"field-literal","field-literal",-1295883554),(function (p__43505){
var vec__43506 = p__43505;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43506,(0),null);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43506,(1),null);
var base_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43506,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field","field",-1302436500),field_name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),base_type], null)], null);
}));
metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fk->","fk->",-499026738),(function (p__43509){
var vec__43510 = p__43509;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43510,(0),null);
var field_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43510,(1),null);
var field_2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43510,(2),null);
var vec__43513 = metabase.mbql.normalize.canonicalize_implicit_field_id(field_1);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43513,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43513,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43513,(2),null);
var vec__43516 = metabase.mbql.normalize.canonicalize_implicit_field_id(field_2);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43516,(0),null);
var dest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43516,(1),null);
var dest_opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43516,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field","field",-1302436500),dest,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(dest_opts,new cljs.core.Keyword(null,"source-field","source-field",933829534),source)], null);
}));
metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"joined-field","joined-field",-2048778268),(function (p__43519){
var vec__43520 = p__43519;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43520,(0),null);
var join_alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43520,(1),null);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43520,(2),null);
return metabase.mbql.util.assoc_field_options.cljs$core$IFn$_invoke$arity$variadic(metabase.mbql.normalize.canonicalize_implicit_field_id(field),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"join-alias","join-alias",1454206794),join_alias], 0));
}));
metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"datetime-field","datetime-field",21731696),(function (clause){
var G__43523 = cljs.core.count(clause);
switch (G__43523) {
case (3):
var vec__43524 = clause;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43524,(0),null);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43524,(1),null);
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43524,(2),null);
return metabase.mbql.util.with_temporal_unit(metabase.mbql.normalize.canonicalize_implicit_field_id(field),unit);

break;
case (4):
var vec__43527 = clause;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43527,(0),null);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43527,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43527,(2),null);
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43527,(3),null);
return metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datetime-field","datetime-field",21731696),field,unit], null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43523)].join('')));

}
}));
metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"binning-strategy","binning-strategy",2063329158),(function (p__43530){
var vec__43531 = p__43530;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43531,(0),null);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43531,(1),null);
var strategy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43531,(2),null);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43531,(3),null);
var binning_options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43531,(4),null);
var vec__43534 = metabase.mbql.normalize.canonicalize_implicit_field_id(field);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43534,(0),null);
var id_or_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43534,(1),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43534,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field","field",-1302436500),id_or_name,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"binning","binning",1709835866),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"strategy","strategy",-1471631918),strategy], null),(cljs.core.truth_(param)?cljs.core.PersistentArrayMap.createAsIfByAssoc([strategy,param]):null),binning_options], 0)))], null);
}));
metabase.mbql.normalize.canonicalize_compound_filter_clause = (function metabase$mbql$normalize$canonicalize_compound_filter_clause(p__43537){
var vec__43538 = p__43537;
var seq__43539 = cljs.core.seq(vec__43538);
var first__43540 = cljs.core.first(seq__43539);
var seq__43539__$1 = cljs.core.next(seq__43539);
var filter_name = first__43540;
var args = seq__43539__$1;
return metabase.mbql.util.simplify_compound_filter(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [filter_name], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(metabase.mbql.normalize.canonicalize_mbql_clause,args)));
});
var seq__43541_44073 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword(null,"not","not",-595976884)], null));
var chunk__43542_44074 = null;
var count__43543_44075 = (0);
var i__43544_44076 = (0);
while(true){
if((i__43544_44076 < count__43543_44075)){
var clause_name_44077 = chunk__43542_44074.cljs$core$IIndexed$_nth$arity$2(null,i__43544_44076);
metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,clause_name_44077,((function (seq__43541_44073,chunk__43542_44074,count__43543_44075,i__43544_44076,clause_name_44077){
return (function (clause){
return metabase.mbql.normalize.canonicalize_compound_filter_clause(clause);
});})(seq__43541_44073,chunk__43542_44074,count__43543_44075,i__43544_44076,clause_name_44077))
);


var G__44078 = seq__43541_44073;
var G__44079 = chunk__43542_44074;
var G__44080 = count__43543_44075;
var G__44081 = (i__43544_44076 + (1));
seq__43541_44073 = G__44078;
chunk__43542_44074 = G__44079;
count__43543_44075 = G__44080;
i__43544_44076 = G__44081;
continue;
} else {
var temp__5735__auto___44082 = cljs.core.seq(seq__43541_44073);
if(temp__5735__auto___44082){
var seq__43541_44083__$1 = temp__5735__auto___44082;
if(cljs.core.chunked_seq_QMARK_(seq__43541_44083__$1)){
var c__4556__auto___44084 = cljs.core.chunk_first(seq__43541_44083__$1);
var G__44085 = cljs.core.chunk_rest(seq__43541_44083__$1);
var G__44086 = c__4556__auto___44084;
var G__44087 = cljs.core.count(c__4556__auto___44084);
var G__44088 = (0);
seq__43541_44073 = G__44085;
chunk__43542_44074 = G__44086;
count__43543_44075 = G__44087;
i__43544_44076 = G__44088;
continue;
} else {
var clause_name_44089 = cljs.core.first(seq__43541_44083__$1);
metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,clause_name_44089,((function (seq__43541_44073,chunk__43542_44074,count__43543_44075,i__43544_44076,clause_name_44089,seq__43541_44083__$1,temp__5735__auto___44082){
return (function (clause){
return metabase.mbql.normalize.canonicalize_compound_filter_clause(clause);
});})(seq__43541_44073,chunk__43542_44074,count__43543_44075,i__43544_44076,clause_name_44089,seq__43541_44083__$1,temp__5735__auto___44082))
);


var G__44090 = cljs.core.next(seq__43541_44083__$1);
var G__44091 = null;
var G__44092 = (0);
var G__44093 = (0);
seq__43541_44073 = G__44090;
chunk__43542_44074 = G__44091;
count__43543_44075 = G__44092;
i__43544_44076 = G__44093;
continue;
}
} else {
}
}
break;
}
metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"inside","inside",1972503011),(function (p__43545){
var vec__43546 = p__43545;
var seq__43547 = cljs.core.seq(vec__43546);
var first__43548 = cljs.core.first(seq__43547);
var seq__43547__$1 = cljs.core.next(seq__43547);
var _ = first__43548;
var first__43548__$1 = cljs.core.first(seq__43547__$1);
var seq__43547__$2 = cljs.core.next(seq__43547__$1);
var field_1 = first__43548__$1;
var first__43548__$2 = cljs.core.first(seq__43547__$2);
var seq__43547__$3 = cljs.core.next(seq__43547__$2);
var field_2 = first__43548__$2;
var coordinates = seq__43547__$3;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inside","inside",1972503011),metabase.mbql.normalize.canonicalize_implicit_field_id(field_1),metabase.mbql.normalize.canonicalize_implicit_field_id(field_2)], null),coordinates);
}));
metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"time-interval","time-interval",704622015),(function (p__43549){
var vec__43551 = p__43549;
var seq__43552 = cljs.core.seq(vec__43551);
var first__43553 = cljs.core.first(seq__43552);
var seq__43552__$1 = cljs.core.next(seq__43552);
var _ = first__43553;
var first__43553__$1 = cljs.core.first(seq__43552__$1);
var seq__43552__$2 = cljs.core.next(seq__43552__$1);
var field = first__43553__$1;
var args = seq__43552__$2;
var field__$1 = (function (){var G__43554 = metabase.mbql.normalize.canonicalize_implicit_field_id(field);
if(cljs.core.truth_(metabase.mbql.util.is_clause_QMARK_(new cljs.core.Keyword(null,"field","field",-1302436500),field))){
return metabase.mbql.util.update_field_options.cljs$core$IFn$_invoke$arity$variadic(G__43554,cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"temporal-unit","temporal-unit",-1892306358)], 0));
} else {
return G__43554;
}
})();
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time-interval","time-interval",704622015),field__$1], null),args);
}));
metabase.mbql.normalize.canonicalize_simple_filter_clause = (function metabase$mbql$normalize$canonicalize_simple_filter_clause(p__43555){
var vec__43556 = p__43555;
var seq__43557 = cljs.core.seq(vec__43556);
var first__43558 = cljs.core.first(seq__43557);
var seq__43557__$1 = cljs.core.next(seq__43557);
var filter_name = first__43558;
var first__43558__$1 = cljs.core.first(seq__43557__$1);
var seq__43557__$2 = cljs.core.next(seq__43557__$1);
var first_arg = first__43558__$1;
var other_args = seq__43557__$2;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [filter_name,metabase.mbql.normalize.canonicalize_implicit_field_id(first_arg)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(metabase.mbql.normalize.canonicalize_mbql_clause,other_args));
});
var seq__43560_44094 = cljs.core.seq(new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"starts-with","starts-with",366503009),new cljs.core.Keyword(null,"ends-with","ends-with",-456791011),new cljs.core.Keyword(null,"contains","contains",676899812),new cljs.core.Keyword(null,"does-not-contain","does-not-contain",-274946853),new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"!=","!=",-1841737356),new cljs.core.Keyword(null,"<","<",-646864291),new cljs.core.Keyword(null,"<=","<=",-395636158),new cljs.core.Keyword(null,">",">",-555517146),new cljs.core.Keyword(null,">=",">=",-623615505),new cljs.core.Keyword(null,"is-empty","is-empty",-1040302908),new cljs.core.Keyword(null,"not-empty","not-empty",388922063),new cljs.core.Keyword(null,"is-null","is-null",-1997050930),new cljs.core.Keyword(null,"not-null","not-null",-1326718535),new cljs.core.Keyword(null,"between","between",1131099276)], null));
var chunk__43561_44095 = null;
var count__43562_44096 = (0);
var i__43563_44097 = (0);
while(true){
if((i__43563_44097 < count__43562_44096)){
var clause_name_44098 = chunk__43561_44095.cljs$core$IIndexed$_nth$arity$2(null,i__43563_44097);
metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,clause_name_44098,((function (seq__43560_44094,chunk__43561_44095,count__43562_44096,i__43563_44097,clause_name_44098){
return (function (clause){
return metabase.mbql.normalize.canonicalize_simple_filter_clause(clause);
});})(seq__43560_44094,chunk__43561_44095,count__43562_44096,i__43563_44097,clause_name_44098))
);


var G__44099 = seq__43560_44094;
var G__44100 = chunk__43561_44095;
var G__44101 = count__43562_44096;
var G__44102 = (i__43563_44097 + (1));
seq__43560_44094 = G__44099;
chunk__43561_44095 = G__44100;
count__43562_44096 = G__44101;
i__43563_44097 = G__44102;
continue;
} else {
var temp__5735__auto___44103 = cljs.core.seq(seq__43560_44094);
if(temp__5735__auto___44103){
var seq__43560_44104__$1 = temp__5735__auto___44103;
if(cljs.core.chunked_seq_QMARK_(seq__43560_44104__$1)){
var c__4556__auto___44105 = cljs.core.chunk_first(seq__43560_44104__$1);
var G__44106 = cljs.core.chunk_rest(seq__43560_44104__$1);
var G__44107 = c__4556__auto___44105;
var G__44108 = cljs.core.count(c__4556__auto___44105);
var G__44109 = (0);
seq__43560_44094 = G__44106;
chunk__43561_44095 = G__44107;
count__43562_44096 = G__44108;
i__43563_44097 = G__44109;
continue;
} else {
var clause_name_44110 = cljs.core.first(seq__43560_44104__$1);
metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,clause_name_44110,((function (seq__43560_44094,chunk__43561_44095,count__43562_44096,i__43563_44097,clause_name_44110,seq__43560_44104__$1,temp__5735__auto___44103){
return (function (clause){
return metabase.mbql.normalize.canonicalize_simple_filter_clause(clause);
});})(seq__43560_44094,chunk__43561_44095,count__43562_44096,i__43563_44097,clause_name_44110,seq__43560_44104__$1,temp__5735__auto___44103))
);


var G__44111 = cljs.core.next(seq__43560_44104__$1);
var G__44112 = null;
var G__44113 = (0);
var G__44114 = (0);
seq__43560_44094 = G__44111;
chunk__43561_44095 = G__44112;
count__43562_44096 = G__44113;
i__43563_44097 = G__44114;
continue;
}
} else {
}
}
break;
}
metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rows","rows",850049680),(function (_){
return null;
}));
metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"aggregation-options","aggregation-options",-1904917550),(function (p__43564){
var vec__43565 = p__43564;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43565,(0),null);
var wrapped_aggregation_clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43565,(1),null);
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43565,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aggregation-options","aggregation-options",-1904917550),metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IFn$_invoke$arity$1(wrapped_aggregation_clause),options], null);
}));
metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"named","named",-422393479),(function (p__43568){
var vec__43569 = p__43568;
var seq__43570 = cljs.core.seq(vec__43569);
var first__43571 = cljs.core.first(seq__43570);
var seq__43570__$1 = cljs.core.next(seq__43570);
var _ = first__43571;
var first__43571__$1 = cljs.core.first(seq__43570__$1);
var seq__43570__$2 = cljs.core.next(seq__43570__$1);
var wrapped_ag = first__43571__$1;
var first__43571__$2 = cljs.core.first(seq__43570__$2);
var seq__43570__$3 = cljs.core.next(seq__43570__$2);
var expr_name = first__43571__$2;
var more = seq__43570__$3;
return metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aggregation-options","aggregation-options",-1904917550),metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IFn$_invoke$arity$1(wrapped_ag),(function (){var vec__43577 = more;
var map__43580 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43577,(0),null);
var map__43580__$1 = (((((!((map__43580 == null))))?(((((map__43580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43580.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43580):map__43580);
var use_as_display_name_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43580__$1,new cljs.core.Keyword(null,"use-as-display-name?","use-as-display-name?",686752941));
if(use_as_display_name_QMARK_ === false){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),expr_name], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display-name","display-name",694513143),expr_name], null);
}
})()], null));
}));
metabase.mbql.normalize.canonicalize_count_clause = (function metabase$mbql$normalize$canonicalize_count_clause(p__43591){
var vec__43592 = p__43591;
var clause_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43592,(0),null);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43592,(1),null);
if(cljs.core.truth_(field)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause_name,metabase.mbql.normalize.canonicalize_implicit_field_id(field)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause_name], null);
}
});
var seq__43595_44115 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.Keyword(null,"cum-count","cum-count",-1964431543)], null));
var chunk__43596_44116 = null;
var count__43597_44117 = (0);
var i__43598_44118 = (0);
while(true){
if((i__43598_44118 < count__43597_44117)){
var clause_name_44119 = chunk__43596_44116.cljs$core$IIndexed$_nth$arity$2(null,i__43598_44118);
metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,clause_name_44119,((function (seq__43595_44115,chunk__43596_44116,count__43597_44117,i__43598_44118,clause_name_44119){
return (function (clause){
return metabase.mbql.normalize.canonicalize_count_clause(clause);
});})(seq__43595_44115,chunk__43596_44116,count__43597_44117,i__43598_44118,clause_name_44119))
);


var G__44120 = seq__43595_44115;
var G__44121 = chunk__43596_44116;
var G__44122 = count__43597_44117;
var G__44123 = (i__43598_44118 + (1));
seq__43595_44115 = G__44120;
chunk__43596_44116 = G__44121;
count__43597_44117 = G__44122;
i__43598_44118 = G__44123;
continue;
} else {
var temp__5735__auto___44124 = cljs.core.seq(seq__43595_44115);
if(temp__5735__auto___44124){
var seq__43595_44125__$1 = temp__5735__auto___44124;
if(cljs.core.chunked_seq_QMARK_(seq__43595_44125__$1)){
var c__4556__auto___44126 = cljs.core.chunk_first(seq__43595_44125__$1);
var G__44127 = cljs.core.chunk_rest(seq__43595_44125__$1);
var G__44128 = c__4556__auto___44126;
var G__44129 = cljs.core.count(c__4556__auto___44126);
var G__44130 = (0);
seq__43595_44115 = G__44127;
chunk__43596_44116 = G__44128;
count__43597_44117 = G__44129;
i__43598_44118 = G__44130;
continue;
} else {
var clause_name_44131 = cljs.core.first(seq__43595_44125__$1);
metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,clause_name_44131,((function (seq__43595_44115,chunk__43596_44116,count__43597_44117,i__43598_44118,clause_name_44131,seq__43595_44125__$1,temp__5735__auto___44124){
return (function (clause){
return metabase.mbql.normalize.canonicalize_count_clause(clause);
});})(seq__43595_44115,chunk__43596_44116,count__43597_44117,i__43598_44118,clause_name_44131,seq__43595_44125__$1,temp__5735__auto___44124))
);


var G__44132 = cljs.core.next(seq__43595_44125__$1);
var G__44133 = null;
var G__44134 = (0);
var G__44135 = (0);
seq__43595_44115 = G__44132;
chunk__43596_44116 = G__44133;
count__43597_44117 = G__44134;
i__43598_44118 = G__44135;
continue;
}
} else {
}
}
break;
}
metabase.mbql.normalize.canonicalize_simple_aggregation_with_field = (function metabase$mbql$normalize$canonicalize_simple_aggregation_with_field(p__43606){
var vec__43607 = p__43606;
var clause_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43607,(0),null);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43607,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause_name,metabase.mbql.normalize.canonicalize_implicit_field_id(field)], null);
});
var seq__43610_44136 = cljs.core.seq(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"avg","avg",197406200),new cljs.core.Keyword(null,"cum-sum","cum-sum",2064902349),new cljs.core.Keyword(null,"distinct","distinct",-1788879121),new cljs.core.Keyword(null,"stddev","stddev",-865474939),new cljs.core.Keyword(null,"sum","sum",136986814),new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"median","median",569566131),new cljs.core.Keyword(null,"var","var",-769682797)], null));
var chunk__43611_44137 = null;
var count__43612_44138 = (0);
var i__43613_44139 = (0);
while(true){
if((i__43613_44139 < count__43612_44138)){
var clause_name_44140 = chunk__43611_44137.cljs$core$IIndexed$_nth$arity$2(null,i__43613_44139);
metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,clause_name_44140,((function (seq__43610_44136,chunk__43611_44137,count__43612_44138,i__43613_44139,clause_name_44140){
return (function (clause){
return metabase.mbql.normalize.canonicalize_simple_aggregation_with_field(clause);
});})(seq__43610_44136,chunk__43611_44137,count__43612_44138,i__43613_44139,clause_name_44140))
);


var G__44141 = seq__43610_44136;
var G__44142 = chunk__43611_44137;
var G__44143 = count__43612_44138;
var G__44144 = (i__43613_44139 + (1));
seq__43610_44136 = G__44141;
chunk__43611_44137 = G__44142;
count__43612_44138 = G__44143;
i__43613_44139 = G__44144;
continue;
} else {
var temp__5735__auto___44145 = cljs.core.seq(seq__43610_44136);
if(temp__5735__auto___44145){
var seq__43610_44146__$1 = temp__5735__auto___44145;
if(cljs.core.chunked_seq_QMARK_(seq__43610_44146__$1)){
var c__4556__auto___44147 = cljs.core.chunk_first(seq__43610_44146__$1);
var G__44148 = cljs.core.chunk_rest(seq__43610_44146__$1);
var G__44149 = c__4556__auto___44147;
var G__44150 = cljs.core.count(c__4556__auto___44147);
var G__44151 = (0);
seq__43610_44136 = G__44148;
chunk__43611_44137 = G__44149;
count__43612_44138 = G__44150;
i__43613_44139 = G__44151;
continue;
} else {
var clause_name_44152 = cljs.core.first(seq__43610_44146__$1);
metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,clause_name_44152,((function (seq__43610_44136,chunk__43611_44137,count__43612_44138,i__43613_44139,clause_name_44152,seq__43610_44146__$1,temp__5735__auto___44145){
return (function (clause){
return metabase.mbql.normalize.canonicalize_simple_aggregation_with_field(clause);
});})(seq__43610_44136,chunk__43611_44137,count__43612_44138,i__43613_44139,clause_name_44152,seq__43610_44146__$1,temp__5735__auto___44145))
);


var G__44153 = cljs.core.next(seq__43610_44146__$1);
var G__44154 = null;
var G__44155 = (0);
var G__44156 = (0);
seq__43610_44136 = G__44153;
chunk__43611_44137 = G__44154;
count__43612_44138 = G__44155;
i__43613_44139 = G__44156;
continue;
}
} else {
}
}
break;
}
metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"percentile","percentile",-601188752),(function (p__43619){
var vec__43620 = p__43619;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43620,(0),null);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43620,(1),null);
var percentile = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43620,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"percentile","percentile",-601188752),metabase.mbql.normalize.canonicalize_implicit_field_id(field),percentile], null);
}));
metabase.mbql.normalize.canonicalize_filtered_aggregation_clause = (function metabase$mbql$normalize$canonicalize_filtered_aggregation_clause(p__43630){
var vec__43631 = p__43630;
var clause_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43631,(0),null);
var filter_subclause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43631,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause_name,metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IFn$_invoke$arity$1(filter_subclause)], null);
});
var seq__43636_44157 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"share","share",-589433933),new cljs.core.Keyword(null,"count-where","count-where",385407720)], null));
var chunk__43637_44158 = null;
var count__43638_44159 = (0);
var i__43639_44160 = (0);
while(true){
if((i__43639_44160 < count__43638_44159)){
var clause_name_44161 = chunk__43637_44158.cljs$core$IIndexed$_nth$arity$2(null,i__43639_44160);
metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,clause_name_44161,((function (seq__43636_44157,chunk__43637_44158,count__43638_44159,i__43639_44160,clause_name_44161){
return (function (clause){
return metabase.mbql.normalize.canonicalize_filtered_aggregation_clause(clause);
});})(seq__43636_44157,chunk__43637_44158,count__43638_44159,i__43639_44160,clause_name_44161))
);


var G__44162 = seq__43636_44157;
var G__44163 = chunk__43637_44158;
var G__44164 = count__43638_44159;
var G__44165 = (i__43639_44160 + (1));
seq__43636_44157 = G__44162;
chunk__43637_44158 = G__44163;
count__43638_44159 = G__44164;
i__43639_44160 = G__44165;
continue;
} else {
var temp__5735__auto___44166 = cljs.core.seq(seq__43636_44157);
if(temp__5735__auto___44166){
var seq__43636_44167__$1 = temp__5735__auto___44166;
if(cljs.core.chunked_seq_QMARK_(seq__43636_44167__$1)){
var c__4556__auto___44168 = cljs.core.chunk_first(seq__43636_44167__$1);
var G__44169 = cljs.core.chunk_rest(seq__43636_44167__$1);
var G__44170 = c__4556__auto___44168;
var G__44171 = cljs.core.count(c__4556__auto___44168);
var G__44172 = (0);
seq__43636_44157 = G__44169;
chunk__43637_44158 = G__44170;
count__43638_44159 = G__44171;
i__43639_44160 = G__44172;
continue;
} else {
var clause_name_44173 = cljs.core.first(seq__43636_44167__$1);
metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,clause_name_44173,((function (seq__43636_44157,chunk__43637_44158,count__43638_44159,i__43639_44160,clause_name_44173,seq__43636_44167__$1,temp__5735__auto___44166){
return (function (clause){
return metabase.mbql.normalize.canonicalize_filtered_aggregation_clause(clause);
});})(seq__43636_44157,chunk__43637_44158,count__43638_44159,i__43639_44160,clause_name_44173,seq__43636_44167__$1,temp__5735__auto___44166))
);


var G__44174 = cljs.core.next(seq__43636_44167__$1);
var G__44175 = null;
var G__44176 = (0);
var G__44177 = (0);
seq__43636_44157 = G__44174;
chunk__43637_44158 = G__44175;
count__43638_44159 = G__44176;
i__43639_44160 = G__44177;
continue;
}
} else {
}
}
break;
}
metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"sum-where","sum-where",2135348428),(function (p__43653){
var vec__43660 = p__43653;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43660,(0),null);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43660,(1),null);
var filter_subclause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43660,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sum-where","sum-where",2135348428),metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IFn$_invoke$arity$1(field),metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IFn$_invoke$arity$1(filter_subclause)], null);
}));
metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__43663){
var vec__43665 = p__43663;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43665,(0),null);
var clauses = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43665,(1),null);
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43665,(2),null);
if(cljs.core.truth_(options)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"case","case",1143702196),clauses], null)),metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$variadic(options,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)], 0)));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"case","case",1143702196),cljs.core.vec((function (){var iter__4529__auto__ = (function metabase$mbql$normalize$iter__43669(s__43670){
return (new cljs.core.LazySeq(null,(function (){
var s__43670__$1 = s__43670;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__43670__$1);
if(temp__5735__auto__){
var s__43670__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43670__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__43670__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__43672 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__43671 = (0);
while(true){
if((i__43671 < size__4528__auto__)){
var vec__43673 = cljs.core._nth(c__4527__auto__,i__43671);
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43673,(0),null);
var expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43673,(1),null);
cljs.core.chunk_append(b__43672,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IFn$_invoke$arity$1(pred),metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IFn$_invoke$arity$1(expr)], null));

var G__44178 = (i__43671 + (1));
i__43671 = G__44178;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43672),metabase$mbql$normalize$iter__43669(cljs.core.chunk_rest(s__43670__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43672),null);
}
} else {
var vec__43676 = cljs.core.first(s__43670__$2);
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43676,(0),null);
var expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43676,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IFn$_invoke$arity$1(pred),metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IFn$_invoke$arity$1(expr)], null),metabase$mbql$normalize$iter__43669(cljs.core.rest(s__43670__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(clauses);
})())], null);
}
}));
/**
 * Walk an `mbql-query` an canonicalize non-top-level clauses like `:fk->`.
 */
metabase.mbql.normalize.canonicalize_mbql_clauses = (function metabase$mbql$normalize$canonicalize_mbql_clauses(mbql_query){
return clojure.walk.prewalk((function (x){
if(cljs.core.map_QMARK_(x)){
return medley.core.map_vals.cljs$core$IFn$_invoke$arity$2(metabase.mbql.normalize.canonicalize_mbql_clauses,x);
} else {
if(cljs.core.not(metabase.mbql.normalize.mbql_clause_QMARK_(x))){
return x;
} else {
try{return metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IFn$_invoke$arity$1(x);
}catch (e43680){if((e43680 instanceof Error)){
var e = e43680;
var logger_name__41931__auto___44179 = "metabase.mbql.normalize";
if(cljs.core.truth_(metabase.shared.util.log.is_loggable_QMARK_(logger_name__41931__auto___44179,new cljs.core.Keyword(null,"error","error",-978969032)))){
metabase.shared.util.log.log_STAR_.cljs$core$IFn$_invoke$arity$variadic(metabase.shared.util.log.log_message,logger_name__41931__auto___44179,new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.shared.util.i18n.js_i18n("Invalid clause:"),x], 0));
} else {
}

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(metabase.shared.util.i18n.js_i18n("Invalid MBQL clause"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clause","clause",1479668060),x], null),e);
} else {
throw e43680;

}
}
}
}
}),mbql_query);
});
/**
 * Convert old MBQL 95 single-aggregations like `{:aggregation :count}` or `{:aggregation [:count]}` to MBQL 98+
 *   multiple-aggregation syntax (e.g. `{:aggregation [[:count]]}`).
 */
metabase.mbql.normalize.wrap_single_aggregations = (function metabase$mbql$normalize$wrap_single_aggregations(aggregations){
return (function metabase$mbql$normalize$wrap_single_aggregations_$_replace_43688(_AMPERSAND_parents,_AMPERSAND_match){
try{if(cljs.core.truth_((function (){var fexpr__43750 = metabase.mbql.util.match.impl.match_with_pred_or_class(cljs.core.seq_QMARK_);
return (fexpr__43750.cljs$core$IFn$_invoke$arity$1 ? fexpr__43750.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_match) : fexpr__43750.call(null,_AMPERSAND_match));
})())){
return metabase$mbql$normalize$wrap_single_aggregations_$_replace_43688(_AMPERSAND_parents,cljs.core.vec(_AMPERSAND_match));
} else {
throw cljs.core.match.backtrack;

}
}catch (e43717){if((e43717 instanceof Error)){
var e__40407__auto__ = e43717;
if((e__40407__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.truth_((function (){var fexpr__43748 = metabase.mbql.util.match.impl.match_with_pred_or_class(cljs.core.keyword_QMARK_);
return (fexpr__43748.cljs$core$IFn$_invoke$arity$1 ? fexpr__43748.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_match) : fexpr__43748.call(null,_AMPERSAND_match));
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_AMPERSAND_match], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e43718){if((e43718 instanceof Error)){
var e__40407__auto____$1 = e43718;
if((e__40407__auto____$1 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) >= (2))))){
try{var _AMPERSAND_match_left__43703 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_match,(0),(2));
if(((cljs.core.vector_QMARK_(_AMPERSAND_match_left__43703)) && ((cljs.core.count(_AMPERSAND_match_left__43703) === (2))))){
try{var _AMPERSAND_match_left__43703_0__43705 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__43703,(0));
if(cljs.core.truth_(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"*","*",-1294732318),null,new cljs.core.Keyword(null,"-","-",-2112348439),null,new cljs.core.Keyword(null,"/","/",1282502798),null,new cljs.core.Keyword(null,"+","+",1913524883),null,new cljs.core.Keyword(null,"named","named",-422393479),null], null), null)))(_AMPERSAND_match_left__43703_0__43705))){
try{var _AMPERSAND_match_left__43703_1__43706 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__43703,(1));
if(cljs.core.truth_(metabase.mbql.normalize.aggregation_subclause_QMARK_(_AMPERSAND_match_left__43703_1__43706))){
return cljs.core.vec(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2(metabase.mbql.normalize.wrap_single_aggregations,aggregations)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e43740){if((e43740 instanceof Error)){
var e__40407__auto____$2 = e43740;
if((e__40407__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40407__auto____$2;
}
} else {
throw e43740;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43738){if((e43738 instanceof Error)){
var e__40407__auto____$2 = e43738;
if((e__40407__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40407__auto____$2;
}
} else {
throw e43738;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43732){if((e43732 instanceof Error)){
var e__40407__auto____$2 = e43732;
if((e__40407__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40407__auto____$2;
}
} else {
throw e43732;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43720){if((e43720 instanceof Error)){
var e__40407__auto____$2 = e43720;
if((e__40407__auto____$2 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) >= (1))))){
try{var _AMPERSAND_match_left__43708 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_match,(0),(1));
if(((cljs.core.vector_QMARK_(_AMPERSAND_match_left__43708)) && ((cljs.core.count(_AMPERSAND_match_left__43708) === (1))))){
try{var _AMPERSAND_match_left__43708_0__43716 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__43708,(0));
if((_AMPERSAND_match_left__43708_0__43716 instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_AMPERSAND_match], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e43729){if((e43729 instanceof Error)){
var e__40407__auto____$3 = e43729;
if((e__40407__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40407__auto____$3;
}
} else {
throw e43729;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43723){if((e43723 instanceof Error)){
var e__40407__auto____$3 = e43723;
if((e__40407__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40407__auto____$3;
}
} else {
throw e43723;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43722){if((e43722 instanceof Error)){
var e__40407__auto____$3 = e43722;
if((e__40407__auto____$3 === cljs.core.match.backtrack)){
return _AMPERSAND_match;
} else {
throw e__40407__auto____$3;
}
} else {
throw e43722;

}
}} else {
throw e__40407__auto____$2;
}
} else {
throw e43720;

}
}} else {
throw e__40407__auto____$1;
}
} else {
throw e43718;

}
}} else {
throw e__40407__auto__;
}
} else {
throw e43717;

}
}})(cljs.core.PersistentVector.EMPTY,aggregations);
});
/**
 * Canonicalize subclauses (see above) and make sure `:aggregation` is a sequence of clauses instead of a single
 *   clause.
 */
metabase.mbql.normalize.canonicalize_aggregations = (function metabase$mbql$normalize$canonicalize_aggregations(aggregations){
return cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(metabase.mbql.normalize.canonicalize_mbql_clauses,metabase.mbql.normalize.wrap_single_aggregations(aggregations)));
});
metabase.mbql.normalize.canonicalize_breakouts = (function metabase$mbql$normalize$canonicalize_breakouts(breakouts){
while(true){
if(cljs.core.truth_(metabase.mbql.normalize.mbql_clause_QMARK_(breakouts))){
var G__44180 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [breakouts], null);
breakouts = G__44180;
continue;
} else {
return cljs.core.not_empty(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(metabase.mbql.normalize.wrap_implicit_field_id,breakouts));
}
break;
}
});
/**
 * Make sure order by clauses like `[:asc 10]` get `:field-id` added where appropriate, e.g. `[:asc [:field-id 10]]`
 */
metabase.mbql.normalize.canonicalize_order_by = (function metabase$mbql$normalize$canonicalize_order_by(clauses){
return (function metabase$mbql$normalize$canonicalize_order_by_$_replace_43751(_AMPERSAND_parents,_AMPERSAND_match){
try{if(cljs.core.truth_((function (){var fexpr__43803 = metabase.mbql.util.match.impl.match_with_pred_or_class(cljs.core.seq_QMARK_);
return (fexpr__43803.cljs$core$IFn$_invoke$arity$1 ? fexpr__43803.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_match) : fexpr__43803.call(null,_AMPERSAND_match));
})())){
return metabase$mbql$normalize$canonicalize_order_by_$_replace_43751(_AMPERSAND_parents,cljs.core.vec(_AMPERSAND_match));
} else {
throw cljs.core.match.backtrack;

}
}catch (e43766){if((e43766 instanceof Error)){
var e__40407__auto__ = e43766;
if((e__40407__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) === 2)))){
try{var _AMPERSAND_match_1__43756 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_1__43756,new cljs.core.Keyword(null,"asc","asc",356854569))){
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
return metabase$mbql$normalize$canonicalize_order_by_$_replace_43751(_AMPERSAND_parents,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"asc","asc",356854569),field], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e43785){if((e43785 instanceof Error)){
var e__40407__auto____$1 = e43785;
if((e__40407__auto____$1 === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_1__43756 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_1__43756,new cljs.core.Keyword(null,"desc","desc",2093485764))){
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
return metabase$mbql$normalize$canonicalize_order_by_$_replace_43751(_AMPERSAND_parents,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"desc","desc",2093485764),field], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e43786){if((e43786 instanceof Error)){
var e__40407__auto____$2 = e43786;
if((e__40407__auto____$2 === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_1__43756 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_1__43756,new cljs.core.Keyword(null,"ascending","ascending",-988350486))){
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
return metabase$mbql$normalize$canonicalize_order_by_$_replace_43751(_AMPERSAND_parents,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"asc","asc",356854569),field], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e43788){if((e43788 instanceof Error)){
var e__40407__auto____$3 = e43788;
if((e__40407__auto____$3 === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_1__43756 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_1__43756,new cljs.core.Keyword(null,"descending","descending",-24766135))){
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
return metabase$mbql$normalize$canonicalize_order_by_$_replace_43751(_AMPERSAND_parents,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"desc","desc",2093485764),field], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e43789){if((e43789 instanceof Error)){
var e__40407__auto____$4 = e43789;
if((e__40407__auto____$4 === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_0__43755 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__43755,new cljs.core.Keyword(null,"ascending","ascending",-988350486))){
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
return metabase$mbql$normalize$canonicalize_order_by_$_replace_43751(_AMPERSAND_parents,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"asc","asc",356854569),field], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e43790){if((e43790 instanceof Error)){
var e__40407__auto____$5 = e43790;
if((e__40407__auto____$5 === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_0__43755 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__43755,new cljs.core.Keyword(null,"descending","descending",-24766135))){
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
return metabase$mbql$normalize$canonicalize_order_by_$_replace_43751(_AMPERSAND_parents,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"desc","desc",2093485764),field], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e43791){if((e43791 instanceof Error)){
var e__40407__auto____$6 = e43791;
if((e__40407__auto____$6 === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_0__43755 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__43755,new cljs.core.Keyword(null,"asc","asc",356854569))){
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"asc","asc",356854569),metabase.mbql.normalize.canonicalize_implicit_field_id(field)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e43792){if((e43792 instanceof Error)){
var e__40407__auto____$7 = e43792;
if((e__40407__auto____$7 === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_0__43755 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__43755,new cljs.core.Keyword(null,"desc","desc",2093485764))){
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"desc","desc",2093485764),metabase.mbql.normalize.canonicalize_implicit_field_id(field)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e43793){if((e43793 instanceof Error)){
var e__40407__auto____$8 = e43793;
if((e__40407__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40407__auto____$8;
}
} else {
throw e43793;

}
}} else {
throw e__40407__auto____$7;
}
} else {
throw e43792;

}
}} else {
throw e__40407__auto____$6;
}
} else {
throw e43791;

}
}} else {
throw e__40407__auto____$5;
}
} else {
throw e43790;

}
}} else {
throw e__40407__auto____$4;
}
} else {
throw e43789;

}
}} else {
throw e__40407__auto____$3;
}
} else {
throw e43788;

}
}} else {
throw e__40407__auto____$2;
}
} else {
throw e43786;

}
}} else {
throw e__40407__auto____$1;
}
} else {
throw e43785;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43767){if((e43767 instanceof Error)){
var e__40407__auto____$1 = e43767;
if((e__40407__auto____$1 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) >= (0))))){
try{var _AMPERSAND_match_left__43764 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_match,(0),(0));
if(((cljs.core.vector_QMARK_(_AMPERSAND_match_left__43764)) && ((cljs.core.count(_AMPERSAND_match_left__43764) === (0))))){
try{var _AMPERSAND_match_right__43765 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_right__43765,clauses)){
return cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(metabase.mbql.normalize.canonicalize_order_by,clauses)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e43776){if((e43776 instanceof Error)){
var e__40407__auto____$2 = e43776;
if((e__40407__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40407__auto____$2;
}
} else {
throw e43776;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43775){if((e43775 instanceof Error)){
var e__40407__auto____$2 = e43775;
if((e__40407__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40407__auto____$2;
}
} else {
throw e43775;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43769){if((e43769 instanceof Error)){
var e__40407__auto____$2 = e43769;
if((e__40407__auto____$2 === cljs.core.match.backtrack)){
return metabase.mbql.util.match.impl.replace_in_collection(metabase$mbql$normalize$canonicalize_order_by_$_replace_43751,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__40407__auto____$2;
}
} else {
throw e43769;

}
}} else {
throw e__40407__auto____$1;
}
} else {
throw e43767;

}
}} else {
throw e__40407__auto__;
}
} else {
throw e43766;

}
}})(cljs.core.PersistentVector.EMPTY,clauses);
});
metabase.mbql.normalize.canonicalize_template_tag = (function metabase$mbql$normalize$canonicalize_template_tag(p__43812){
var map__43813 = p__43812;
var map__43813__$1 = (((((!((map__43813 == null))))?(((((map__43813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43813.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43813):map__43813);
var tag = map__43813__$1;
var dimension = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43813__$1,new cljs.core.Keyword(null,"dimension","dimension",543254198));
var G__43816 = tag;
if(cljs.core.truth_(dimension)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__43816,new cljs.core.Keyword(null,"dimension","dimension",543254198),metabase.mbql.normalize.canonicalize_mbql_clause);
} else {
return G__43816;
}
});
metabase.mbql.normalize.canonicalize_template_tags = (function metabase$mbql$normalize$canonicalize_template_tags(tags){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function metabase$mbql$normalize$canonicalize_template_tags_$_iter__43824(s__43825){
return (new cljs.core.LazySeq(null,(function (){
var s__43825__$1 = s__43825;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__43825__$1);
if(temp__5735__auto__){
var s__43825__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43825__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__43825__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__43827 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__43826 = (0);
while(true){
if((i__43826 < size__4528__auto__)){
var vec__43830 = cljs.core._nth(c__4527__auto__,i__43826);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43830,(0),null);
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43830,(1),null);
cljs.core.chunk_append(b__43827,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag_name,metabase.mbql.normalize.canonicalize_template_tag(tag)], null));

var G__44181 = (i__43826 + (1));
i__43826 = G__44181;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43827),metabase$mbql$normalize$canonicalize_template_tags_$_iter__43824(cljs.core.chunk_rest(s__43825__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43827),null);
}
} else {
var vec__43833 = cljs.core.first(s__43825__$2);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43833,(0),null);
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43833,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag_name,metabase.mbql.normalize.canonicalize_template_tag(tag)], null),metabase$mbql$normalize$canonicalize_template_tags_$_iter__43824(cljs.core.rest(s__43825__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(tags);
})());
});
metabase.mbql.normalize.canonicalize_native_query = (function metabase$mbql$normalize$canonicalize_native_query(p__43842){
var map__43844 = p__43842;
var map__43844__$1 = (((((!((map__43844 == null))))?(((((map__43844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43844.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43844):map__43844);
var native_query = map__43844__$1;
var template_tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43844__$1,new cljs.core.Keyword(null,"template-tags","template-tags",1853115685));
var G__43846 = native_query;
if(cljs.core.truth_(template_tags)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__43846,new cljs.core.Keyword(null,"template-tags","template-tags",1853115685),metabase.mbql.normalize.canonicalize_template_tags);
} else {
return G__43846;
}
});
metabase.mbql.normalize.canonicalize_source_query = (function metabase$mbql$normalize$canonicalize_source_query(p__43853){
var map__43854 = p__43853;
var map__43854__$1 = (((((!((map__43854 == null))))?(((((map__43854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43854.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43854):map__43854);
var source_query = map__43854__$1;
var native_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43854__$1,new cljs.core.Keyword(null,"native","native",-613060878));
var G__43858 = source_query;
var G__43858__$1 = ((cljs.core.not(native_QMARK_))?(metabase.mbql.normalize.canonicalize_inner_mbql_query.cljs$core$IFn$_invoke$arity$1 ? metabase.mbql.normalize.canonicalize_inner_mbql_query.cljs$core$IFn$_invoke$arity$1(G__43858) : metabase.mbql.normalize.canonicalize_inner_mbql_query.call(null,G__43858)):G__43858);
if(cljs.core.truth_(native_QMARK_)){
return metabase.mbql.normalize.canonicalize_native_query(G__43858__$1);
} else {
return G__43858__$1;
}
});
metabase.mbql.normalize.non_empty_QMARK_ = (function metabase$mbql$normalize$non_empty_QMARK_(x){
if(cljs.core.coll_QMARK_(x)){
return cljs.core.seq(x);
} else {
return (!((x == null)));
}
});
/**
 * Perform specific steps to canonicalize the various top-level clauses in an MBQL query.
 */
metabase.mbql.normalize.canonicalize_top_level_mbql_clauses = (function metabase$mbql$normalize$canonicalize_top_level_mbql_clauses(mbql_query){
var G__43867 = mbql_query;
var G__43867__$1 = ((metabase.mbql.normalize.non_empty_QMARK_(new cljs.core.Keyword(null,"aggregation","aggregation",1597476696).cljs$core$IFn$_invoke$arity$1(mbql_query)))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__43867,new cljs.core.Keyword(null,"aggregation","aggregation",1597476696),metabase.mbql.normalize.canonicalize_aggregations):G__43867);
var G__43867__$2 = ((metabase.mbql.normalize.non_empty_QMARK_(new cljs.core.Keyword(null,"breakout","breakout",-732419050).cljs$core$IFn$_invoke$arity$1(mbql_query)))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__43867__$1,new cljs.core.Keyword(null,"breakout","breakout",-732419050),metabase.mbql.normalize.canonicalize_breakouts):G__43867__$1);
var G__43867__$3 = ((metabase.mbql.normalize.non_empty_QMARK_(new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(mbql_query)))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__43867__$2,new cljs.core.Keyword(null,"fields","fields",-1932066230),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,metabase.mbql.normalize.wrap_implicit_field_id)):G__43867__$2);
var G__43867__$4 = ((metabase.mbql.normalize.non_empty_QMARK_(new cljs.core.Keyword(null,"order-by","order-by",1527318070).cljs$core$IFn$_invoke$arity$1(mbql_query)))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__43867__$3,new cljs.core.Keyword(null,"order-by","order-by",1527318070),metabase.mbql.normalize.canonicalize_order_by):G__43867__$3);
if(metabase.mbql.normalize.non_empty_QMARK_(new cljs.core.Keyword(null,"source-query","source-query",198004422).cljs$core$IFn$_invoke$arity$1(mbql_query))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__43867__$4,new cljs.core.Keyword(null,"source-query","source-query",198004422),metabase.mbql.normalize.canonicalize_source_query);
} else {
return G__43867__$4;
}
});
metabase.mbql.normalize.canonicalize_inner_mbql_query = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(metabase.mbql.normalize.canonicalize_mbql_clauses,metabase.mbql.normalize.canonicalize_top_level_mbql_clauses);
/**
 * In Metabase 0.33.0 `:source-metadata` about resolved queries is added to the 'inner' MBQL query rather than to the
 *   top-level; if we encounter the old style, move it to the appropriate location.
 */
metabase.mbql.normalize.move_source_metadata_to_mbql_query = (function metabase$mbql$normalize$move_source_metadata_to_mbql_query(p__43870){
var map__43871 = p__43870;
var map__43871__$1 = (((((!((map__43871 == null))))?(((((map__43871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43871.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43871):map__43871);
var query = map__43871__$1;
var source_metadata = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43871__$1,new cljs.core.Keyword(null,"source-metadata","source-metadata",-477816085));
return cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(query,new cljs.core.Keyword(null,"source-metadata","source-metadata",-477816085)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"source-metadata","source-metadata",-477816085)], null),source_metadata);
});
/**
 * Canonicalize a query [MBQL query], rewriting the query as if you perfectly followed the recommended style guides for
 *   writing MBQL. Does things like removes unneeded and empty clauses, converts older MBQL '95 syntax to MBQL '98, etc.
 */
metabase.mbql.normalize.canonicalize = (function metabase$mbql$normalize$canonicalize(p__43873){
var map__43874 = p__43873;
var map__43874__$1 = (((((!((map__43874 == null))))?(((((map__43874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43874.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43874):map__43874);
var outer_query = map__43874__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43874__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43874__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var source_metadata = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43874__$1,new cljs.core.Keyword(null,"source-metadata","source-metadata",-477816085));
var native$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43874__$1,new cljs.core.Keyword(null,"native","native",-613060878));
try{var G__43877 = outer_query;
var G__43877__$1 = (cljs.core.truth_(source_metadata)?metabase.mbql.normalize.move_source_metadata_to_mbql_query(G__43877):G__43877);
var G__43877__$2 = (cljs.core.truth_(query)?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__43877__$1,new cljs.core.Keyword(null,"query","query",-1288509510),metabase.mbql.normalize.canonicalize_inner_mbql_query):G__43877__$1);
var G__43877__$3 = (cljs.core.truth_(parameters)?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__43877__$2,new cljs.core.Keyword(null,"parameters","parameters",-1229919748),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,metabase.mbql.normalize.canonicalize_mbql_clauses)):G__43877__$2);
var G__43877__$4 = (cljs.core.truth_(native$)?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__43877__$3,new cljs.core.Keyword(null,"native","native",-613060878),metabase.mbql.normalize.canonicalize_native_query):G__43877__$3);
return metabase.mbql.normalize.canonicalize_mbql_clauses(G__43877__$4);

}catch (e43876){if((e43876 instanceof Error)){
var e = e43876;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(metabase.shared.util.i18n.js_i18n("Error canonicalizing query"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),query], null),e);
} else {
throw e43876;

}
}});
/**
 * Remove any Fields specified in both `:breakout` and `:fields` from `:fields`; it is implied that any breakout Field
 *   will be returned, specifying it in both would imply it is to be returned twice, which tends to cause confusion for
 *   the QP and drivers. (This is done to work around historic bugs with the way queries were generated on the frontend;
 *   I'm not sure this behavior makes sense, but removing it would break existing queries.)
 * 
 *   We will remove either exact matches:
 * 
 *  {:breakout [[:field-id 10]], :fields [[:field-id 10]]} ; -> {:breakout [[:field-id 10]]}
 * 
 *   or unbucketed matches:
 * 
 *  {:breakout [[:datetime-field [:field-id 10] :month]], :fields [[:field-id 10]]}
 *  ;; -> {:breakout [[:field-id 10]]}
 */
metabase.mbql.normalize.remove_breakout_fields_from_fields = (function metabase$mbql$normalize$remove_breakout_fields_from_fields(p__43878){
var map__43879 = p__43878;
var map__43879__$1 = (((((!((map__43879 == null))))?(((((map__43879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43879.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43879):map__43879);
var query = map__43879__$1;
var map__43880 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43879__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var map__43880__$1 = (((((!((map__43880 == null))))?(((((map__43880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43880.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43880):map__43880);
var breakout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43880__$1,new cljs.core.Keyword(null,"breakout","breakout",-732419050));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43880__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
if((!(((cljs.core.seq(breakout)) && (cljs.core.seq(fields)))))){
return query;
} else {
var breakout_fields = cljs.core.set(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,(function metabase$mbql$normalize$remove_breakout_fields_from_fields_$_match_43883(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) === 3)))){
try{var _AMPERSAND_match_0__43891 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__43891,new cljs.core.Keyword(null,"field","field",-1302436500))){
var id_or_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_AMPERSAND_match,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field","field",-1302436500),id_or_name,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"temporal-unit","temporal-unit",-1892306358))], null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e43896){if((e43896 instanceof Error)){
var e__40407__auto__ = e43896;
if((e__40407__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40407__auto__;
}
} else {
throw e43896;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43894){if((e43894 instanceof Error)){
var e__40407__auto__ = e43894;
if((e__40407__auto__ === cljs.core.match.backtrack)){
return metabase.mbql.util.match.impl.match_in_collection(metabase$mbql$normalize$remove_breakout_fields_from_fields_$_match_43883,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__40407__auto__;
}
} else {
throw e43894;

}
}})(cljs.core.PersistentVector.EMPTY,breakout)))));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(query,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"fields","fields",-1932066230)], null),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.remove,breakout_fields)));
}
});
/**
 * Perform transformations that operate on the query as a whole, making sure the structure as a whole is logical and
 *   consistent.
 */
metabase.mbql.normalize.perform_whole_query_transformations = (function metabase$mbql$normalize$perform_whole_query_transformations(query){
try{return metabase.mbql.normalize.remove_breakout_fields_from_fields(query);
}catch (e43905){if((e43905 instanceof Error)){
var e = e43905;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(metabase.shared.util.i18n.js_i18n("Error performing whole query transformations"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),query], null),e);
} else {
throw e43905;

}
}});
metabase.mbql.normalize.remove_empty_clauses_in_map = (function metabase$mbql$normalize$remove_empty_clauses_in_map(m,path){
var m__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(m),(function (){var iter__4529__auto__ = (function metabase$mbql$normalize$remove_empty_clauses_in_map_$_iter__43913(s__43914){
return (new cljs.core.LazySeq(null,(function (){
var s__43914__$1 = s__43914;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__43914__$1);
if(temp__5735__auto__){
var s__43914__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43914__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__43914__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__43916 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__43915 = (0);
while(true){
if((i__43915 < size__4528__auto__)){
var vec__43917 = cljs.core._nth(c__4527__auto__,i__43915);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43917,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43917,(1),null);
var v__$1 = (function (){var G__43920 = v;
var G__43921 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k);
return (metabase.mbql.normalize.remove_empty_clauses.cljs$core$IFn$_invoke$arity$2 ? metabase.mbql.normalize.remove_empty_clauses.cljs$core$IFn$_invoke$arity$2(G__43920,G__43921) : metabase.mbql.normalize.remove_empty_clauses.call(null,G__43920,G__43921));
})();
if((!((v__$1 == null)))){
cljs.core.chunk_append(b__43916,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v__$1], null));

var G__44182 = (i__43915 + (1));
i__43915 = G__44182;
continue;
} else {
var G__44183 = (i__43915 + (1));
i__43915 = G__44183;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43916),metabase$mbql$normalize$remove_empty_clauses_in_map_$_iter__43913(cljs.core.chunk_rest(s__43914__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43916),null);
}
} else {
var vec__43922 = cljs.core.first(s__43914__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43922,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43922,(1),null);
var v__$1 = (function (){var G__43925 = v;
var G__43926 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k);
return (metabase.mbql.normalize.remove_empty_clauses.cljs$core$IFn$_invoke$arity$2 ? metabase.mbql.normalize.remove_empty_clauses.cljs$core$IFn$_invoke$arity$2(G__43925,G__43926) : metabase.mbql.normalize.remove_empty_clauses.call(null,G__43925,G__43926));
})();
if((!((v__$1 == null)))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v__$1], null),metabase$mbql$normalize$remove_empty_clauses_in_map_$_iter__43913(cljs.core.rest(s__43914__$2)));
} else {
var G__44184 = cljs.core.rest(s__43914__$2);
s__43914__$1 = G__44184;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(m);
})());
if(cljs.core.seq(m__$1)){
return m__$1;
} else {
return null;
}
});
metabase.mbql.normalize.remove_empty_clauses_in_sequence = (function metabase$mbql$normalize$remove_empty_clauses_in_sequence(xs,path){
var xs__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__43928_SHARP_){
var G__43934 = p1__43928_SHARP_;
var G__43935 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword("metabase.mbql.normalize","sequence","metabase.mbql.normalize/sequence",-1700645683));
return (metabase.mbql.normalize.remove_empty_clauses.cljs$core$IFn$_invoke$arity$2 ? metabase.mbql.normalize.remove_empty_clauses.cljs$core$IFn$_invoke$arity$2(G__43934,G__43935) : metabase.mbql.normalize.remove_empty_clauses.call(null,G__43934,G__43935));
}),xs);
if(cljs.core.truth_(cljs.core.some(cljs.core.some_QMARK_,xs__$1))){
return xs__$1;
} else {
return null;
}
});
metabase.mbql.normalize.remove_empty_clauses_in_join = (function metabase$mbql$normalize$remove_empty_clauses_in_join(join){
var G__43943 = join;
var G__43944 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query","query",-1288509510)], null);
return (metabase.mbql.normalize.remove_empty_clauses.cljs$core$IFn$_invoke$arity$2 ? metabase.mbql.normalize.remove_empty_clauses.cljs$core$IFn$_invoke$arity$2(G__43943,G__43944) : metabase.mbql.normalize.remove_empty_clauses.call(null,G__43943,G__43944));
});
metabase.mbql.normalize.remove_empty_clauses_in_source_query = (function metabase$mbql$normalize$remove_empty_clauses_in_source_query(p__43947){
var map__43948 = p__43947;
var map__43948__$1 = (((((!((map__43948 == null))))?(((((map__43948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43948):map__43948);
var source_query = map__43948__$1;
var native_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43948__$1,new cljs.core.Keyword(null,"native","native",-613060878));
if(cljs.core.truth_(native_QMARK_)){
return clojure.set.rename_keys((function (){var G__43950 = clojure.set.rename_keys(source_query,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"native","native",-613060878),new cljs.core.Keyword(null,"query","query",-1288509510)], null));
var G__43951 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"native","native",-613060878)], null);
return (metabase.mbql.normalize.remove_empty_clauses.cljs$core$IFn$_invoke$arity$2 ? metabase.mbql.normalize.remove_empty_clauses.cljs$core$IFn$_invoke$arity$2(G__43950,G__43951) : metabase.mbql.normalize.remove_empty_clauses.call(null,G__43950,G__43951));
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"native","native",-613060878)], null));
} else {
var G__43952 = source_query;
var G__43953 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query","query",-1288509510)], null);
return (metabase.mbql.normalize.remove_empty_clauses.cljs$core$IFn$_invoke$arity$2 ? metabase.mbql.normalize.remove_empty_clauses.cljs$core$IFn$_invoke$arity$2(G__43952,G__43953) : metabase.mbql.normalize.remove_empty_clauses.call(null,G__43952,G__43953));
}
});
metabase.mbql.normalize.path__GT_special_remove_empty_clauses_fn = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"native","native",-613060878),cljs.core.identity,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source-query","source-query",198004422),metabase.mbql.normalize.remove_empty_clauses_in_source_query,new cljs.core.Keyword(null,"joins","joins",1033962699),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("metabase.mbql.normalize","sequence","metabase.mbql.normalize/sequence",-1700645683),metabase.mbql.normalize.remove_empty_clauses_in_join], null)], null)], null);
/**
 * Remove any empty or `nil` clauses in a query.
 */
metabase.mbql.normalize.remove_empty_clauses = (function metabase$mbql$normalize$remove_empty_clauses(var_args){
var G__43956 = arguments.length;
switch (G__43956) {
case 1:
return metabase.mbql.normalize.remove_empty_clauses.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return metabase.mbql.normalize.remove_empty_clauses.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.mbql.normalize.remove_empty_clauses.cljs$core$IFn$_invoke$arity$1 = (function (query){
return metabase.mbql.normalize.remove_empty_clauses.cljs$core$IFn$_invoke$arity$2(query,cljs.core.PersistentVector.EMPTY);
}));

(metabase.mbql.normalize.remove_empty_clauses.cljs$core$IFn$_invoke$arity$2 = (function (x,path){
try{var special_fn = ((cljs.core.seq(path))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(metabase.mbql.normalize.path__GT_special_remove_empty_clauses_fn,path):null);
if(cljs.core.fn_QMARK_(special_fn)){
return (special_fn.cljs$core$IFn$_invoke$arity$1 ? special_fn.cljs$core$IFn$_invoke$arity$1(x) : special_fn.call(null,x));
} else {
if(cljs.core.record_QMARK_(x)){
return x;
} else {
if(cljs.core.map_QMARK_(x)){
return metabase.mbql.normalize.remove_empty_clauses_in_map(x,path);
} else {
if(cljs.core.sequential_QMARK_(x)){
return metabase.mbql.normalize.remove_empty_clauses_in_sequence(x,path);
} else {
return x;

}
}
}
}
}catch (e43957){if((e43957 instanceof Error)){
var e = e43957;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("Error removing empty clauses from form.",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"form","form",-1624062471),x,new cljs.core.Keyword(null,"path","path",-188191168),path], null),e);
} else {
throw e43957;

}
}}));

(metabase.mbql.normalize.remove_empty_clauses.cljs$lang$maxFixedArity = 2);

/**
 * Normalize the tokens in a Metabase query (i.e., make them all `lisp-case` keywords), rewrite deprecated clauses as
 *   up-to-date MBQL 2000, and remove empty clauses.
 */
metabase.mbql.normalize.normalize = (function (){var normalize_STAR_ = cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(metabase.mbql.normalize.remove_empty_clauses,metabase.mbql.normalize.perform_whole_query_transformations,metabase.mbql.normalize.canonicalize,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.mbql.normalize.normalize_tokens], 0));
return (function (query){
try{return normalize_STAR_(query);
}catch (e43965){if((e43965 instanceof Error)){
var e = e43965;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(metabase.shared.util.i18n.js_i18n("Error normalizing query"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),query], null),e);
} else {
throw e43965;

}
}});
})();
/**
 * Normalize just a specific fragment of a query, such as just the inner MBQL part or just a filter clause. `path` is
 *   where this fragment would normally live in a full query.
 * 
 *  (normalize-fragment [:query :filter] ["=" 100 200])
 *  ;;-> [:= [:field-id 100] 200]
 */
metabase.mbql.normalize.normalize_fragment = (function metabase$mbql$normalize$normalize_fragment(path,x){
if(cljs.core.not(cljs.core.seq(path))){
return metabase.mbql.normalize.normalize(x);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__43971 = cljs.core.butlast(path);
var G__43972 = cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.last(path),x]);
return (metabase.mbql.normalize.normalize_fragment.cljs$core$IFn$_invoke$arity$2 ? metabase.mbql.normalize.normalize_fragment.cljs$core$IFn$_invoke$arity$2(G__43971,G__43972) : metabase.mbql.normalize.normalize_fragment.call(null,G__43971,G__43972));
})(),cljs.core.last(path));
}
});
Object.defineProperty(module.exports, "normalize_native_query", { enumerable: false, get: function() { return metabase.mbql.normalize.normalize_native_query; } });
Object.defineProperty(module.exports, "canonicalize_count_clause", { enumerable: false, get: function() { return metabase.mbql.normalize.canonicalize_count_clause; } });
Object.defineProperty(module.exports, "canonicalize_implicit_field_id", { enumerable: false, get: function() { return metabase.mbql.normalize.canonicalize_implicit_field_id; } });
Object.defineProperty(module.exports, "normalize_join", { enumerable: false, get: function() { return metabase.mbql.normalize.normalize_join; } });
Object.defineProperty(module.exports, "remove_breakout_fields_from_fields", { enumerable: false, get: function() { return metabase.mbql.normalize.remove_breakout_fields_from_fields; } });
Object.defineProperty(module.exports, "normalize", { enumerable: false, get: function() { return metabase.mbql.normalize.normalize; } });
Object.defineProperty(module.exports, "canonicalize_top_level_mbql_clauses", { enumerable: false, get: function() { return metabase.mbql.normalize.canonicalize_top_level_mbql_clauses; } });
Object.defineProperty(module.exports, "mbql_clause_QMARK_", { enumerable: false, get: function() { return metabase.mbql.normalize.mbql_clause_QMARK_; } });
Object.defineProperty(module.exports, "canonicalize_simple_filter_clause", { enumerable: false, get: function() { return metabase.mbql.normalize.canonicalize_simple_filter_clause; } });
Object.defineProperty(module.exports, "normalize_template_tags", { enumerable: false, get: function() { return metabase.mbql.normalize.normalize_template_tags; } });
Object.defineProperty(module.exports, "normalize_source_metadata", { enumerable: false, get: function() { return metabase.mbql.normalize.normalize_source_metadata; } });
Object.defineProperty(module.exports, "normalize_order_by_tokens", { enumerable: false, get: function() { return metabase.mbql.normalize.normalize_order_by_tokens; } });
Object.defineProperty(module.exports, "canonicalize_native_query", { enumerable: false, get: function() { return metabase.mbql.normalize.canonicalize_native_query; } });
Object.defineProperty(module.exports, "non_empty_QMARK_", { enumerable: false, get: function() { return metabase.mbql.normalize.non_empty_QMARK_; } });
Object.defineProperty(module.exports, "remove_empty_clauses_in_join", { enumerable: false, get: function() { return metabase.mbql.normalize.remove_empty_clauses_in_join; } });
Object.defineProperty(module.exports, "remove_empty_clauses_in_sequence", { enumerable: false, get: function() { return metabase.mbql.normalize.remove_empty_clauses_in_sequence; } });
Object.defineProperty(module.exports, "remove_empty_clauses", { enumerable: false, get: function() { return metabase.mbql.normalize.remove_empty_clauses; } });
Object.defineProperty(module.exports, "normalize_expressions_tokens", { enumerable: false, get: function() { return metabase.mbql.normalize.normalize_expressions_tokens; } });
Object.defineProperty(module.exports, "canonicalize_breakouts", { enumerable: false, get: function() { return metabase.mbql.normalize.canonicalize_breakouts; } });
Object.defineProperty(module.exports, "normalize_fragment", { enumerable: false, get: function() { return metabase.mbql.normalize.normalize_fragment; } });
Object.defineProperty(module.exports, "path__GT_special_token_normalization_fn", { enumerable: false, get: function() { return metabase.mbql.normalize.path__GT_special_token_normalization_fn; } });
Object.defineProperty(module.exports, "canonicalize_compound_filter_clause", { enumerable: false, get: function() { return metabase.mbql.normalize.canonicalize_compound_filter_clause; } });
Object.defineProperty(module.exports, "is_clause_QMARK_", { enumerable: false, get: function() { return metabase.mbql.normalize.is_clause_QMARK_; } });
Object.defineProperty(module.exports, "normalize_ag_clause_tokens", { enumerable: false, get: function() { return metabase.mbql.normalize.normalize_ag_clause_tokens; } });
Object.defineProperty(module.exports, "canonicalize_order_by", { enumerable: false, get: function() { return metabase.mbql.normalize.canonicalize_order_by; } });
Object.defineProperty(module.exports, "canonicalize_source_query", { enumerable: false, get: function() { return metabase.mbql.normalize.canonicalize_source_query; } });
Object.defineProperty(module.exports, "canonicalize_inner_mbql_query", { enumerable: false, get: function() { return metabase.mbql.normalize.canonicalize_inner_mbql_query; } });
Object.defineProperty(module.exports, "normalize_source_query", { enumerable: false, get: function() { return metabase.mbql.normalize.normalize_source_query; } });
Object.defineProperty(module.exports, "aggregation_subclause_QMARK_", { enumerable: false, get: function() { return metabase.mbql.normalize.aggregation_subclause_QMARK_; } });
Object.defineProperty(module.exports, "canonicalize_template_tag", { enumerable: false, get: function() { return metabase.mbql.normalize.canonicalize_template_tag; } });
Object.defineProperty(module.exports, "normalize_query_parameter", { enumerable: false, get: function() { return metabase.mbql.normalize.normalize_query_parameter; } });
Object.defineProperty(module.exports, "canonicalize_simple_aggregation_with_field", { enumerable: false, get: function() { return metabase.mbql.normalize.canonicalize_simple_aggregation_with_field; } });
Object.defineProperty(module.exports, "path__GT_special_remove_empty_clauses_fn", { enumerable: false, get: function() { return metabase.mbql.normalize.path__GT_special_remove_empty_clauses_fn; } });
Object.defineProperty(module.exports, "normalize_tokens", { enumerable: false, get: function() { return metabase.mbql.normalize.normalize_tokens; } });
Object.defineProperty(module.exports, "normalize_mbql_clause_tokens", { enumerable: false, get: function() { return metabase.mbql.normalize.normalize_mbql_clause_tokens; } });
Object.defineProperty(module.exports, "canonicalize", { enumerable: false, get: function() { return metabase.mbql.normalize.canonicalize; } });
Object.defineProperty(module.exports, "canonicalize_mbql_clauses", { enumerable: false, get: function() { return metabase.mbql.normalize.canonicalize_mbql_clauses; } });
Object.defineProperty(module.exports, "wrap_implicit_field_id", { enumerable: false, get: function() { return metabase.mbql.normalize.wrap_implicit_field_id; } });
Object.defineProperty(module.exports, "canonicalize_filtered_aggregation_clause", { enumerable: false, get: function() { return metabase.mbql.normalize.canonicalize_filtered_aggregation_clause; } });
Object.defineProperty(module.exports, "canonicalize_mbql_clause", { enumerable: false, get: function() { return metabase.mbql.normalize.canonicalize_mbql_clause; } });
Object.defineProperty(module.exports, "wrap_single_aggregations", { enumerable: false, get: function() { return metabase.mbql.normalize.wrap_single_aggregations; } });
Object.defineProperty(module.exports, "perform_whole_query_transformations", { enumerable: false, get: function() { return metabase.mbql.normalize.perform_whole_query_transformations; } });
Object.defineProperty(module.exports, "remove_empty_clauses_in_source_query", { enumerable: false, get: function() { return metabase.mbql.normalize.remove_empty_clauses_in_source_query; } });
Object.defineProperty(module.exports, "remove_empty_clauses_in_map", { enumerable: false, get: function() { return metabase.mbql.normalize.remove_empty_clauses_in_map; } });
Object.defineProperty(module.exports, "maybe_normalize_token", { enumerable: false, get: function() { return metabase.mbql.normalize.maybe_normalize_token; } });
Object.defineProperty(module.exports, "canonicalize_aggregations", { enumerable: false, get: function() { return metabase.mbql.normalize.canonicalize_aggregations; } });
Object.defineProperty(module.exports, "canonicalize_template_tags", { enumerable: false, get: function() { return metabase.mbql.normalize.canonicalize_template_tags; } });
Object.defineProperty(module.exports, "move_source_metadata_to_mbql_query", { enumerable: false, get: function() { return metabase.mbql.normalize.move_source_metadata_to_mbql_query; } });
//# sourceMappingURL=metabase.mbql.normalize.js.map
