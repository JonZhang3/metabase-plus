var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.string.js");
require("./metabase.types.js");
require("./schema.core.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.mbql.schema.helpers.js");

goog.provide('metabase.mbql.schema.helpers');
metabase.mbql.schema.helpers.clause_arg_schema = (function metabase$mbql$schema$helpers$clause_arg_schema(arg_name,arg_schema){
if((!(cljs.core.vector_QMARK_(arg_schema)))){
return schema.core.one(arg_schema,arg_name);
} else {
var vec__42392 = arg_schema;
var option = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42392,(0),null);
var arg_schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42392,(1),null);
var vector_arg_schema = vec__42392;
var G__42395 = option;
var G__42395__$1 = (((G__42395 instanceof cljs.core.Keyword))?G__42395.fqn:null);
switch (G__42395__$1) {
case "optional":
return schema.core.optional(schema.core.maybe(arg_schema__$1),arg_name);

break;
case "rest":
return schema.core.named(arg_schema__$1,arg_name);

break;
default:
return schema.core.one(vector_arg_schema,arg_name);

}
}
});
/**
 * Impl of `defclause` macro.
 */
metabase.mbql.schema.helpers.clause = (function metabase$mbql$schema$helpers$clause(var_args){
var args__4742__auto__ = [];
var len__4736__auto___42433 = arguments.length;
var i__4737__auto___42434 = (0);
while(true){
if((i__4737__auto___42434 < len__4736__auto___42433)){
args__4742__auto__.push((arguments[i__4737__auto___42434]));

var G__42435 = (i__4737__auto___42434 + (1));
i__4737__auto___42434 = G__42435;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return metabase.mbql.schema.helpers.clause.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(metabase.mbql.schema.helpers.clause.cljs$core$IFn$_invoke$arity$variadic = (function (clause_name,arg_schemas){
return cljs.core.vec(cljs.core.cons(schema.core.one(schema.core.eq(clause_name),clause_name),(function (){var iter__4529__auto__ = (function metabase$mbql$schema$helpers$iter__42399(s__42400){
return (new cljs.core.LazySeq(null,(function (){
var s__42400__$1 = s__42400;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__42400__$1);
if(temp__5735__auto__){
var s__42400__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42400__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__42400__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__42402 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__42401 = (0);
while(true){
if((i__42401 < size__4528__auto__)){
var vec__42404 = cljs.core._nth(c__4527__auto__,i__42401);
var arg_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42404,(0),null);
var arg_schema = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42404,(1),null);
cljs.core.chunk_append(b__42402,metabase.mbql.schema.helpers.clause_arg_schema(arg_name,arg_schema));

var G__42436 = (i__42401 + (1));
i__42401 = G__42436;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42402),metabase$mbql$schema$helpers$iter__42399(cljs.core.chunk_rest(s__42400__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42402),null);
}
} else {
var vec__42409 = cljs.core.first(s__42400__$2);
var arg_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42409,(0),null);
var arg_schema = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42409,(1),null);
return cljs.core.cons(metabase.mbql.schema.helpers.clause_arg_schema(arg_name,arg_schema),metabase$mbql$schema$helpers$iter__42399(cljs.core.rest(s__42400__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),arg_schemas));
})()));
}));

(metabase.mbql.schema.helpers.clause.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(metabase.mbql.schema.helpers.clause.cljs$lang$applyTo = (function (seq42396){
var G__42397 = cljs.core.first(seq42396);
var seq42396__$1 = cljs.core.next(seq42396);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42397,seq42396__$1);
}));

/**
 * If `x` an MBQL clause, and an instance of clauses defined by keyword(s) `k-or-ks`?
 * 
 *  (is-clause? :count [:count 10])        ; -> true
 *  (is-clause? #{:+ :- :* :/} [:+ 10 20]) ; -> true
 */
metabase.mbql.schema.helpers.is_clause_QMARK_ = (function metabase$mbql$schema$helpers$is_clause_QMARK_(k_or_ks,x){
if(cljs.core.sequential_QMARK_(x)){
if((cljs.core.first(x) instanceof cljs.core.Keyword)){
if(cljs.core.coll_QMARK_(k_or_ks)){
var G__42417 = cljs.core.first(x);
var fexpr__42416 = cljs.core.set(k_or_ks);
return (fexpr__42416.cljs$core$IFn$_invoke$arity$1 ? fexpr__42416.cljs$core$IFn$_invoke$arity$1(G__42417) : fexpr__42416.call(null,G__42417));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_or_ks,cljs.core.first(x));
}
} else {
return false;
}
} else {
return false;
}
});
/**
 * Interal impl of `one-of` macro.
 */
metabase.mbql.schema.helpers.one_of_STAR_ = (function metabase$mbql$schema$helpers$one_of_STAR_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___42437 = arguments.length;
var i__4737__auto___42438 = (0);
while(true){
if((i__4737__auto___42438 < len__4736__auto___42437)){
args__4742__auto__.push((arguments[i__4737__auto___42438]));

var G__42439 = (i__4737__auto___42438 + (1));
i__4737__auto___42438 = G__42439;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return metabase.mbql.schema.helpers.one_of_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(metabase.mbql.schema.helpers.one_of_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (clause_names_PLUS_schemas){
return schema.core.named(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(schema.core.conditional,cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4529__auto__ = (function metabase$mbql$schema$helpers$iter__42420(s__42421){
return (new cljs.core.LazySeq(null,(function (){
var s__42421__$1 = s__42421;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__42421__$1);
if(temp__5735__auto__){
var s__42421__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42421__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__42421__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__42423 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__42422 = (0);
while(true){
if((i__42422 < size__4528__auto__)){
var vec__42424 = cljs.core._nth(c__4527__auto__,i__42422);
var clause_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42424,(0),null);
var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42424,(1),null);
cljs.core.chunk_append(b__42423,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.partial.cljs$core$IFn$_invoke$arity$2(metabase.mbql.schema.helpers.is_clause_QMARK_,clause_name),schema__$1], null));

var G__42440 = (i__42422 + (1));
i__42422 = G__42440;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42423),metabase$mbql$schema$helpers$iter__42420(cljs.core.chunk_rest(s__42421__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42423),null);
}
} else {
var vec__42427 = cljs.core.first(s__42421__$2);
var clause_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42427,(0),null);
var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42427,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.partial.cljs$core$IFn$_invoke$arity$2(metabase.mbql.schema.helpers.is_clause_QMARK_,clause_name),schema__$1], null),metabase$mbql$schema$helpers$iter__42420(cljs.core.rest(s__42421__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(clause_names_PLUS_schemas);
})())),["Must be a valid instance of one of these clauses: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,clause_names_PLUS_schemas))].join(''));
}));

(metabase.mbql.schema.helpers.one_of_STAR_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(metabase.mbql.schema.helpers.one_of_STAR_.cljs$lang$applyTo = (function (seq42418){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42418));
}));

/**
 * Schema for a string that isn't blank.
 */
metabase.mbql.schema.helpers.NonBlankString = schema.core.constrained.cljs$core$IFn$_invoke$arity$3(schema.core.Str,cljs.core.complement(clojure.string.blank_QMARK_),"Non-blank string");
/**
 * Schema for `:type/*` or one of its descendants in the Metabase type hierarchy.
 */
metabase.mbql.schema.helpers.FieldType = schema.core.pred.cljs$core$IFn$_invoke$arity$2((function (p1__42430_SHARP_){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(p1__42430_SHARP_,new cljs.core.Keyword("type","*","type/*",-1283496752));
}),"Valid field type");
/**
 * Schema for a `:Semantic/*` (or `:Relation/*`, until we fix this) or one of their descendents in the Metabase
 *   Hierarchical Type System (MHTS).
 */
metabase.mbql.schema.helpers.FieldSemanticOrRelationType = schema.core.pred.cljs$core$IFn$_invoke$arity$2((function (k){
return ((cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword("Semantic","*","Semantic/*",-546724996))) || (cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword("Relation","*","Relation/*",-706261522))));
}),"Valid semantic type");
/**
 * Schema for a positive integer.
 */
metabase.mbql.schema.helpers.IntGreaterThanZero = schema.core.constrained.cljs$core$IFn$_invoke$arity$3(schema.core.Int,cljs.core.pos_QMARK_,"positive integer");
/**
 * Schema for an integer >= zero.
 */
metabase.mbql.schema.helpers.IntGreaterThanOrEqualToZero = schema.core.constrained.cljs$core$IFn$_invoke$arity$3(schema.core.Int,cljs.core.complement(cljs.core.neg_QMARK_),"integer >= 0");
/**
 * Schema for any map.
 */
metabase.mbql.schema.helpers.Map = cljs.core.PersistentArrayMap.createAsIfByAssoc([schema.core.Any,schema.core.Any]);
/**
 * Schema for any keyword or string.
 */
metabase.mbql.schema.helpers.KeywordOrString = schema.core.cond_pre.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([schema.core.Keyword,schema.core.Str], 0));
/**
 * Add an addditonal constraint to `schema` (presumably an array) that requires it to be non-empty
 * (i.e., it must satisfy `seq`).
 */
metabase.mbql.schema.helpers.non_empty = (function metabase$mbql$schema$helpers$non_empty(schema__$1){
return schema.core.constrained.cljs$core$IFn$_invoke$arity$3(schema__$1,cljs.core.seq,"Non-empty");
});
/**
 * True if `coll` is either empty or distinct.
 */
metabase.mbql.schema.helpers.empty_or_distinct_QMARK_ = (function metabase$mbql$schema$helpers$empty_or_distinct_QMARK_(coll){
if(cljs.core.seq(coll)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,coll);
} else {
return true;
}
});
/**
 * Add an additional constraint to `schema` (presumably an array) that requires all elements to be distinct.
 */
metabase.mbql.schema.helpers.distinct = (function metabase$mbql$schema$helpers$distinct(schema__$1){
return schema.core.constrained.cljs$core$IFn$_invoke$arity$3(schema__$1,metabase.mbql.schema.helpers.empty_or_distinct_QMARK_,"distinct");
});
Object.defineProperty(module.exports, "FieldType", { enumerable: false, get: function() { return metabase.mbql.schema.helpers.FieldType; } });
Object.defineProperty(module.exports, "clause_arg_schema", { enumerable: false, get: function() { return metabase.mbql.schema.helpers.clause_arg_schema; } });
Object.defineProperty(module.exports, "empty_or_distinct_QMARK_", { enumerable: false, get: function() { return metabase.mbql.schema.helpers.empty_or_distinct_QMARK_; } });
Object.defineProperty(module.exports, "clause", { enumerable: false, get: function() { return metabase.mbql.schema.helpers.clause; } });
Object.defineProperty(module.exports, "FieldSemanticOrRelationType", { enumerable: false, get: function() { return metabase.mbql.schema.helpers.FieldSemanticOrRelationType; } });
Object.defineProperty(module.exports, "KeywordOrString", { enumerable: false, get: function() { return metabase.mbql.schema.helpers.KeywordOrString; } });
Object.defineProperty(module.exports, "Map", { enumerable: false, get: function() { return metabase.mbql.schema.helpers.Map; } });
Object.defineProperty(module.exports, "one_of_STAR_", { enumerable: false, get: function() { return metabase.mbql.schema.helpers.one_of_STAR_; } });
Object.defineProperty(module.exports, "is_clause_QMARK_", { enumerable: false, get: function() { return metabase.mbql.schema.helpers.is_clause_QMARK_; } });
Object.defineProperty(module.exports, "non_empty", { enumerable: false, get: function() { return metabase.mbql.schema.helpers.non_empty; } });
Object.defineProperty(module.exports, "IntGreaterThanOrEqualToZero", { enumerable: false, get: function() { return metabase.mbql.schema.helpers.IntGreaterThanOrEqualToZero; } });
Object.defineProperty(module.exports, "distinct", { enumerable: false, get: function() { return metabase.mbql.schema.helpers.distinct; } });
Object.defineProperty(module.exports, "NonBlankString", { enumerable: false, get: function() { return metabase.mbql.schema.helpers.NonBlankString; } });
Object.defineProperty(module.exports, "IntGreaterThanZero", { enumerable: false, get: function() { return metabase.mbql.schema.helpers.IntGreaterThanZero; } });
//# sourceMappingURL=metabase.mbql.schema.helpers.js.map
