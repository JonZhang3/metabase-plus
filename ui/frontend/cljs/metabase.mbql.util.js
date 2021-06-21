var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.string.js");
require("./metabase.mbql.schema.js");
require("./metabase.mbql.schema.helpers.js");
require("./metabase.mbql.util.match.js");
require("./metabase.shared.util.i18n.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.mbql.util.js");

goog.provide('metabase.mbql.util');
/**
 * Like `name`, but if `x` is a namespace-qualified keyword, returns that a string including the namespace.
 */
metabase.mbql.util.qualified_name = (function metabase$mbql$util$qualified_name(x){
if(cljs.core.truth_((((x instanceof cljs.core.Keyword))?cljs.core.namespace(x):false))){
return [cljs.core.namespace(x),"/",cljs.core.name(x)].join('');
} else {
return cljs.core.name(x);
}
});
var ufv___43290 = schema.utils.use_fn_validation;
var output_schema42519_43291 = schema.core.Keyword;
var input_schema42520_43292 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(metabase.mbql.schema.helpers.KeywordOrString,cljs.core.with_meta(new cljs.core.Symbol(null,"token","token",429068312,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.helpers","KeywordOrString","schema.helpers/KeywordOrString",-360677001,null)], null)))], null);
var input_checker42521_43293 = (new cljs.core.Delay((function (){
return schema.core.checker(input_schema42520_43292);
}),null));
var output_checker42522_43294 = (new cljs.core.Delay((function (){
return schema.core.checker(output_schema42519_43291);
}),null));
var ret__39378__auto___43295 = /**
 * Inputs: [token :- schema.helpers/KeywordOrString]
 *   Returns: s/Keyword
 * 
 *   Convert a string or keyword in various cases (`lisp-case`, `snake_case`, or `SCREAMING_SNAKE_CASE`) to a lisp-cased
 *   keyword.
 */
metabase.mbql.util.normalize_token = (function metabase$mbql$util$normalize_token(G__42523){
var validate__37298__auto__ = cljs.core.deref(ufv___43290);
if(cljs.core.truth_(validate__37298__auto__)){
var args__37299__auto___43296 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__42523], null);
if(cljs.core.truth_(schema.core.fn_validator)){
var G__42526_43297 = new cljs.core.Keyword(null,"input","input",556931961);
var G__42527_43298 = cljs.core.with_meta(new cljs.core.Symbol(null,"normalize-token","normalize-token",-2048623092,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Convert a string or keyword in various cases (`lisp-case`, `snake_case`, or `SCREAMING_SNAKE_CASE`) to a lisp-cased\n  keyword."], null));
var G__42528_43299 = input_schema42520_43292;
var G__42529_43300 = cljs.core.deref(input_checker42521_43293);
var G__42530_43301 = args__37299__auto___43296;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__42526_43297,G__42527_43298,G__42528_43299,G__42529_43300,G__42530_43301) : schema.core.fn_validator.call(null,G__42526_43297,G__42527_43298,G__42528_43299,G__42529_43300,G__42530_43301));
} else {
var temp__5735__auto___43302 = (function (){var fexpr__42531 = cljs.core.deref(input_checker42521_43293);
return (fexpr__42531.cljs$core$IFn$_invoke$arity$1 ? fexpr__42531.cljs$core$IFn$_invoke$arity$1(args__37299__auto___43296) : fexpr__42531.call(null,args__37299__auto___43296));
})();
if(cljs.core.truth_(temp__5735__auto___43302)){
var error__37300__auto___43303 = temp__5735__auto___43302;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"normalize-token","normalize-token",-2048623092,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Convert a string or keyword in various cases (`lisp-case`, `snake_case`, or `SCREAMING_SNAKE_CASE`) to a lisp-cased\n  keyword."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__37300__auto___43303], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema42520_43292,new cljs.core.Keyword(null,"value","value",305978217),args__37299__auto___43296,new cljs.core.Keyword(null,"error","error",-978969032),error__37300__auto___43303], null));
} else {
}
}
} else {
}

var o__37301__auto__ = (function (){var token = G__42523;
while(true){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(clojure.string.lower_case(metabase.mbql.util.qualified_name(token)),/_/,"-"));
break;
}
})();
if(cljs.core.truth_(validate__37298__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
var G__42532_43304 = new cljs.core.Keyword(null,"output","output",-1105869043);
var G__42533_43305 = cljs.core.with_meta(new cljs.core.Symbol(null,"normalize-token","normalize-token",-2048623092,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Convert a string or keyword in various cases (`lisp-case`, `snake_case`, or `SCREAMING_SNAKE_CASE`) to a lisp-cased\n  keyword."], null));
var G__42534_43306 = output_schema42519_43291;
var G__42535_43307 = cljs.core.deref(output_checker42522_43294);
var G__42536_43308 = o__37301__auto__;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__42532_43304,G__42533_43305,G__42534_43306,G__42535_43307,G__42536_43308) : schema.core.fn_validator.call(null,G__42532_43304,G__42533_43305,G__42534_43306,G__42535_43307,G__42536_43308));
} else {
var temp__5735__auto___43310 = (function (){var fexpr__42537 = cljs.core.deref(output_checker42522_43294);
return (fexpr__42537.cljs$core$IFn$_invoke$arity$1 ? fexpr__42537.cljs$core$IFn$_invoke$arity$1(o__37301__auto__) : fexpr__42537.call(null,o__37301__auto__));
})();
if(cljs.core.truth_(temp__5735__auto___43310)){
var error__37300__auto___43311 = temp__5735__auto___43310;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"normalize-token","normalize-token",-2048623092,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Convert a string or keyword in various cases (`lisp-case`, `snake_case`, or `SCREAMING_SNAKE_CASE`) to a lisp-cased\n  keyword."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__37300__auto___43311], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema42519_43291,new cljs.core.Keyword(null,"value","value",305978217),o__37301__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37300__auto___43311], null));
} else {
}
}
} else {
}

return o__37301__auto__;
});
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(metabase.mbql.util.normalize_token),schema.core.__GT_FnSchema(output_schema42519_43291,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema42520_43292], null)));

/**
 * True if `x` is an MBQL clause (a sequence with a keyword as its first arg). (Since this is used by the code in
 *   `normalize` this handles pre-normalized clauses as well.)
 */
metabase.mbql.util.mbql_clause_QMARK_ = (function metabase$mbql$util$mbql_clause_QMARK_(x){
return ((cljs.core.sequential_QMARK_(x)) && ((!(cljs.core.map_entry_QMARK_(x)))) && ((cljs.core.first(x) instanceof cljs.core.Keyword)));
});
/**
 * If `x` an MBQL clause, and an instance of clauses defined by keyword(s) `k-or-ks`?
 * 
 *  (is-clause? :count [:count 10])        ; -> true
 *  (is-clause? #{:+ :- :* :/} [:+ 10 20]) ; -> true
 */
metabase.mbql.util.is_clause_QMARK_ = (function metabase$mbql$util$is_clause_QMARK_(k_or_ks,x){
if(metabase.mbql.util.mbql_clause_QMARK_(x)){
if(cljs.core.coll_QMARK_(k_or_ks)){
var G__42541 = cljs.core.first(x);
var fexpr__42540 = cljs.core.set(k_or_ks);
return (fexpr__42540.cljs$core$IFn$_invoke$arity$1 ? fexpr__42540.cljs$core$IFn$_invoke$arity$1(G__42541) : fexpr__42540.call(null,G__42541));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_or_ks,cljs.core.first(x));
}
} else {
return false;
}
});
metabase.mbql.util.combine_compound_filters_of_type = (function metabase$mbql$util$combine_compound_filters_of_type(compound_type,subclauses){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__42542_SHARP_){
return cljs.core.first(cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,(function metabase$mbql$util$combine_compound_filters_of_type_$_match_42543(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) >= (1))))){
try{var _AMPERSAND_match_left__42548 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_match,(0),(1));
if(((cljs.core.vector_QMARK_(_AMPERSAND_match_left__42548)) && ((cljs.core.count(_AMPERSAND_match_left__42548) === (1))))){
try{var _AMPERSAND_match_left__42548_0__42550 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__42548,(0));
if(cljs.core.truth_(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,compound_type)(_AMPERSAND_match_left__42548_0__42550))){
var args = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [args], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e42553){if((e42553 instanceof Error)){
var e__40407__auto__ = e42553;
if((e__40407__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40407__auto__;
}
} else {
throw e42553;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e42552){if((e42552 instanceof Error)){
var e__40407__auto__ = e42552;
if((e__40407__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40407__auto__;
}
} else {
throw e42552;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e42551){if((e42551 instanceof Error)){
var e__40407__auto__ = e42551;
if((e__40407__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_AMPERSAND_match], null)], null);
} else {
throw e__40407__auto__;
}
} else {
throw e42551;

}
}})(cljs.core.PersistentVector.EMPTY,p1__42542_SHARP_))));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([subclauses], 0));
});
/**
 * Simplify compound `:and`, `:or`, and `:not` compound filters, combining or eliminating them where possible. This
 *   also fixes theoretically disallowed compound filters like `:and` with only a single subclause, and eliminates `nils`
 *   and duplicate subclauses from the clauses.
 */
metabase.mbql.util.simplify_compound_filter = (function metabase$mbql$util$simplify_compound_filter(filter_clause){
return (function metabase$mbql$util$simplify_compound_filter_$_replace_42558(_AMPERSAND_parents,_AMPERSAND_match){
try{if(cljs.core.truth_((function (){var fexpr__42631 = metabase.mbql.util.match.impl.match_with_pred_or_class(cljs.core.seq_QMARK_);
return (fexpr__42631.cljs$core$IFn$_invoke$arity$1 ? fexpr__42631.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_match) : fexpr__42631.call(null,_AMPERSAND_match));
})())){
return metabase$mbql$util$simplify_compound_filter_$_replace_42558(_AMPERSAND_parents,cljs.core.vec(_AMPERSAND_match));
} else {
throw cljs.core.match.backtrack;

}
}catch (e42587){if((e42587 instanceof Error)){
var e__40407__auto__ = e42587;
if((e__40407__auto__ === cljs.core.match.backtrack)){
try{if((_AMPERSAND_match === null)){
return null;
} else {
throw cljs.core.match.backtrack;

}
}catch (e42588){if((e42588 instanceof Error)){
var e__40407__auto____$1 = e42588;
if((e__40407__auto____$1 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) >= (0))))){
try{var _AMPERSAND_match_left__42563 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_match,(0),(0));
if(((cljs.core.vector_QMARK_(_AMPERSAND_match_left__42563)) && ((cljs.core.count(_AMPERSAND_match_left__42563) === (0))))){
try{var _AMPERSAND_match_right__42564 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.truth_(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.every_QMARK_,cljs.core.nil_QMARK_)(_AMPERSAND_match_right__42564))){
return null;
} else {
throw cljs.core.match.backtrack;

}
}catch (e42630){if((e42630 instanceof Error)){
var e__40407__auto____$2 = e42630;
if((e__40407__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40407__auto____$2;
}
} else {
throw e42630;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e42629){if((e42629 instanceof Error)){
var e__40407__auto____$2 = e42629;
if((e__40407__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40407__auto____$2;
}
} else {
throw e42629;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e42589){if((e42589 instanceof Error)){
var e__40407__auto____$2 = e42589;
if((e__40407__auto____$2 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) === 0)))){
return null;
} else {
throw cljs.core.match.backtrack;

}
}catch (e42590){if((e42590 instanceof Error)){
var e__40407__auto____$3 = e42590;
if((e__40407__auto____$3 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) === 1)))){
try{var _AMPERSAND_match_0__42566 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__42566,new cljs.core.Keyword(null,"and","and",-971899817))){
return null;
} else {
throw cljs.core.match.backtrack;

}
}catch (e42627){if((e42627 instanceof Error)){
var e__40407__auto____$4 = e42627;
if((e__40407__auto____$4 === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_0__42566 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__42566,new cljs.core.Keyword(null,"or","or",235744169))){
return null;
} else {
throw cljs.core.match.backtrack;

}
}catch (e42628){if((e42628 instanceof Error)){
var e__40407__auto____$5 = e42628;
if((e__40407__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40407__auto____$5;
}
} else {
throw e42628;

}
}} else {
throw e__40407__auto____$4;
}
} else {
throw e42627;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e42591){if((e42591 instanceof Error)){
var e__40407__auto____$4 = e42591;
if((e__40407__auto____$4 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) >= (1))))){
try{var _AMPERSAND_match_left__42568 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_match,(0),(1));
if(((cljs.core.vector_QMARK_(_AMPERSAND_match_left__42568)) && ((cljs.core.count(_AMPERSAND_match_left__42568) === (1))))){
try{var _AMPERSAND_match_left__42568_0__42570 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__42568,(0));
if(cljs.core.truth_((function (){var fexpr__42625 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"or","or",235744169),null,new cljs.core.Keyword(null,"and","and",-971899817),null], null), null);
return (fexpr__42625.cljs$core$IFn$_invoke$arity$1 ? fexpr__42625.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_match_left__42568_0__42570) : fexpr__42625.call(null,_AMPERSAND_match_left__42568_0__42570));
})())){
try{var _AMPERSAND_match_right__42569 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
if(cljs.core.truth_(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.some,cljs.core.nil_QMARK_)(_AMPERSAND_match_right__42569))){
var args = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
var clause_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__42568,(0));
return metabase$mbql$util$simplify_compound_filter_$_replace_42558(_AMPERSAND_parents,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,clause_name,cljs.core.filterv(cljs.core.some_QMARK_,args)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e42626){if((e42626 instanceof Error)){
var e__40407__auto____$5 = e42626;
if((e__40407__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40407__auto____$5;
}
} else {
throw e42626;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e42624){if((e42624 instanceof Error)){
var e__40407__auto____$5 = e42624;
if((e__40407__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40407__auto____$5;
}
} else {
throw e42624;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e42623){if((e42623 instanceof Error)){
var e__40407__auto____$5 = e42623;
if((e__40407__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40407__auto____$5;
}
} else {
throw e42623;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e42592){if((e42592 instanceof Error)){
var e__40407__auto____$5 = e42592;
if((e__40407__auto____$5 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) === 2)))){
try{var _AMPERSAND_match_0__42571 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__42571,new cljs.core.Keyword(null,"not","not",-595976884))){
try{var _AMPERSAND_match_1__42572 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
if(((cljs.core.vector_QMARK_(_AMPERSAND_match_1__42572)) && ((cljs.core.count(_AMPERSAND_match_1__42572) >= (1))))){
try{var _AMPERSAND_match_1__42572_left__42573 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_match_1__42572,(0),(1));
if(((cljs.core.vector_QMARK_(_AMPERSAND_match_1__42572_left__42573)) && ((cljs.core.count(_AMPERSAND_match_1__42572_left__42573) === (1))))){
try{var _AMPERSAND_match_1__42572_left__42573_0__42575 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_1__42572_left__42573,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_1__42572_left__42573_0__42575,new cljs.core.Keyword(null,"and","and",-971899817))){
var args = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_1__42572,(1));
return metabase$mbql$util$simplify_compound_filter_$_replace_42558(_AMPERSAND_parents,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,new cljs.core.Keyword(null,"or","or",235744169),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42554_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"not","not",-595976884),p1__42554_SHARP_],null));
}),args)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e42620){if((e42620 instanceof Error)){
var e__40407__auto____$6 = e42620;
if((e__40407__auto____$6 === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_1__42572_left__42573_0__42575 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_1__42572_left__42573,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_1__42572_left__42573_0__42575,new cljs.core.Keyword(null,"or","or",235744169))){
var args = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_1__42572,(1));
return metabase$mbql$util$simplify_compound_filter_$_replace_42558(_AMPERSAND_parents,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,new cljs.core.Keyword(null,"and","and",-971899817),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42555_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"not","not",-595976884),p1__42555_SHARP_],null));
}),args)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e42621){if((e42621 instanceof Error)){
var e__40407__auto____$7 = e42621;
if((e__40407__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40407__auto____$7;
}
} else {
throw e42621;

}
}} else {
throw e__40407__auto____$6;
}
} else {
throw e42620;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e42619){if((e42619 instanceof Error)){
var e__40407__auto____$6 = e42619;
if((e__40407__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40407__auto____$6;
}
} else {
throw e42619;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e42618){if((e42618 instanceof Error)){
var e__40407__auto____$6 = e42618;
if((e__40407__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40407__auto____$6;
}
} else {
throw e42618;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e42615){if((e42615 instanceof Error)){
var e__40407__auto____$6 = e42615;
if((e__40407__auto____$6 === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_0__42571 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__42571,new cljs.core.Keyword(null,"and","and",-971899817))){
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
return metabase$mbql$util$simplify_compound_filter_$_replace_42558(_AMPERSAND_parents,arg);
} else {
throw cljs.core.match.backtrack;

}
}catch (e42616){if((e42616 instanceof Error)){
var e__40407__auto____$7 = e42616;
if((e__40407__auto____$7 === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_0__42571 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__42571,new cljs.core.Keyword(null,"or","or",235744169))){
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
return metabase$mbql$util$simplify_compound_filter_$_replace_42558(_AMPERSAND_parents,arg);
} else {
throw cljs.core.match.backtrack;

}
}catch (e42617){if((e42617 instanceof Error)){
var e__40407__auto____$8 = e42617;
if((e__40407__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40407__auto____$8;
}
} else {
throw e42617;

}
}} else {
throw e__40407__auto____$7;
}
} else {
throw e42616;

}
}} else {
throw e__40407__auto____$6;
}
} else {
throw e42615;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e42593){if((e42593 instanceof Error)){
var e__40407__auto____$6 = e42593;
if((e__40407__auto____$6 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) >= (1))))){
try{var _AMPERSAND_match_left__42576 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_match,(0),(1));
if(((cljs.core.vector_QMARK_(_AMPERSAND_match_left__42576)) && ((cljs.core.count(_AMPERSAND_match_left__42576) === (1))))){
try{var _AMPERSAND_match_left__42576_0__42578 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__42576,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_left__42576_0__42578,new cljs.core.Keyword(null,"and","and",-971899817))){
try{var _AMPERSAND_match_right__42577 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
if(cljs.core.truth_(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.some,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(metabase.mbql.util.is_clause_QMARK_,new cljs.core.Keyword(null,"and","and",-971899817)))(_AMPERSAND_match_right__42577))){
var args = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
return metabase$mbql$util$simplify_compound_filter_$_replace_42558(_AMPERSAND_parents,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,new cljs.core.Keyword(null,"and","and",-971899817),metabase.mbql.util.combine_compound_filters_of_type(new cljs.core.Keyword(null,"and","and",-971899817),args)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e42613){if((e42613 instanceof Error)){
var e__40407__auto____$7 = e42613;
if((e__40407__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40407__auto____$7;
}
} else {
throw e42613;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e42606){if((e42606 instanceof Error)){
var e__40407__auto____$7 = e42606;
if((e__40407__auto____$7 === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_left__42576_0__42578 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__42576,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_left__42576_0__42578,new cljs.core.Keyword(null,"or","or",235744169))){
try{var _AMPERSAND_match_right__42577 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
if(cljs.core.truth_(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.some,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(metabase.mbql.util.is_clause_QMARK_,new cljs.core.Keyword(null,"or","or",235744169)))(_AMPERSAND_match_right__42577))){
var args = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
return metabase$mbql$util$simplify_compound_filter_$_replace_42558(_AMPERSAND_parents,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,new cljs.core.Keyword(null,"or","or",235744169),metabase.mbql.util.combine_compound_filters_of_type(new cljs.core.Keyword(null,"or","or",235744169),args)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e42612){if((e42612 instanceof Error)){
var e__40407__auto____$8 = e42612;
if((e__40407__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40407__auto____$8;
}
} else {
throw e42612;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e42607){if((e42607 instanceof Error)){
var e__40407__auto____$8 = e42607;
if((e__40407__auto____$8 === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_left__42576_0__42578 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__42576,(0));
if(cljs.core.truth_((function (){var fexpr__42609 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"or","or",235744169),null,new cljs.core.Keyword(null,"and","and",-971899817),null], null), null);
return (fexpr__42609.cljs$core$IFn$_invoke$arity$1 ? fexpr__42609.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_match_left__42576_0__42578) : fexpr__42609.call(null,_AMPERSAND_match_left__42576_0__42578));
})())){
try{var _AMPERSAND_match_right__42577 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
if((function (p1__42556_SHARP_){
return cljs.core.not(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,p1__42556_SHARP_));
})(_AMPERSAND_match_right__42577)){
var args = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__42576,(0));
return metabase$mbql$util$simplify_compound_filter_$_replace_42558(_AMPERSAND_parents,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,clause,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(args)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e42611){if((e42611 instanceof Error)){
var e__40407__auto____$9 = e42611;
if((e__40407__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40407__auto____$9;
}
} else {
throw e42611;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e42608){if((e42608 instanceof Error)){
var e__40407__auto____$9 = e42608;
if((e__40407__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40407__auto____$9;
}
} else {
throw e42608;

}
}} else {
throw e__40407__auto____$8;
}
} else {
throw e42607;

}
}} else {
throw e__40407__auto____$7;
}
} else {
throw e42606;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e42605){if((e42605 instanceof Error)){
var e__40407__auto____$7 = e42605;
if((e__40407__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40407__auto____$7;
}
} else {
throw e42605;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e42594){if((e42594 instanceof Error)){
var e__40407__auto____$7 = e42594;
if((e__40407__auto____$7 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) === 2)))){
try{var _AMPERSAND_match_0__42579 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__42579,new cljs.core.Keyword(null,"not","not",-595976884))){
try{var _AMPERSAND_match_1__42580 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
if(((cljs.core.vector_QMARK_(_AMPERSAND_match_1__42580)) && ((cljs.core.count(_AMPERSAND_match_1__42580) === 2)))){
try{var _AMPERSAND_match_1__42580_0__42582 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_1__42580,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_1__42580_0__42582,new cljs.core.Keyword(null,"not","not",-595976884))){
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_1__42580,(1));
return metabase$mbql$util$simplify_compound_filter_$_replace_42558(_AMPERSAND_parents,arg);
} else {
throw cljs.core.match.backtrack;

}
}catch (e42604){if((e42604 instanceof Error)){
var e__40407__auto____$8 = e42604;
if((e__40407__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40407__auto____$8;
}
} else {
throw e42604;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e42603){if((e42603 instanceof Error)){
var e__40407__auto____$8 = e42603;
if((e__40407__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40407__auto____$8;
}
} else {
throw e42603;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e42601){if((e42601 instanceof Error)){
var e__40407__auto____$8 = e42601;
if((e__40407__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40407__auto____$8;
}
} else {
throw e42601;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e42595){if((e42595 instanceof Error)){
var e__40407__auto____$8 = e42595;
if((e__40407__auto____$8 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) >= (1))))){
try{var _AMPERSAND_match_left__42584 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_match,(0),(1));
if(((cljs.core.vector_QMARK_(_AMPERSAND_match_left__42584)) && ((cljs.core.count(_AMPERSAND_match_left__42584) === (1))))){
try{var _AMPERSAND_match_left__42584_0__42586 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__42584,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_left__42584_0__42586,new cljs.core.Keyword(null,"else","else",-1508377146))){
return filter_clause;
} else {
throw cljs.core.match.backtrack;

}
}catch (e42600){if((e42600 instanceof Error)){
var e__40407__auto____$9 = e42600;
if((e__40407__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40407__auto____$9;
}
} else {
throw e42600;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e42599){if((e42599 instanceof Error)){
var e__40407__auto____$9 = e42599;
if((e__40407__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40407__auto____$9;
}
} else {
throw e42599;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e42597){if((e42597 instanceof Error)){
var e__40407__auto____$9 = e42597;
if((e__40407__auto____$9 === cljs.core.match.backtrack)){
return metabase.mbql.util.match.impl.replace_in_collection(metabase$mbql$util$simplify_compound_filter_$_replace_42558,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__40407__auto____$9;
}
} else {
throw e42597;

}
}} else {
throw e__40407__auto____$8;
}
} else {
throw e42595;

}
}} else {
throw e__40407__auto____$7;
}
} else {
throw e42594;

}
}} else {
throw e__40407__auto____$6;
}
} else {
throw e42593;

}
}} else {
throw e__40407__auto____$5;
}
} else {
throw e42592;

}
}} else {
throw e__40407__auto____$4;
}
} else {
throw e42591;

}
}} else {
throw e__40407__auto____$3;
}
} else {
throw e42590;

}
}} else {
throw e__40407__auto____$2;
}
} else {
throw e42589;

}
}} else {
throw e__40407__auto____$1;
}
} else {
throw e42588;

}
}} else {
throw e__40407__auto__;
}
} else {
throw e42587;

}
}})(cljs.core.PersistentVector.EMPTY,filter_clause);
});
var ufv___43390 = schema.utils.use_fn_validation;
var output_schema42632_43391 = metabase.mbql.schema.Filter;
var input_schema42633_43392 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"filter-clause","filter-clause",-1237814159,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.Any], null);
var input_checker42634_43393 = (new cljs.core.Delay((function (){
return schema.core.checker(input_schema42633_43392);
}),null));
var output_checker42635_43394 = (new cljs.core.Delay((function (){
return schema.core.checker(output_schema42632_43391);
}),null));
var ret__39378__auto___43397 = (function (){
/**
 * Inputs: [filter-clause & more-filter-clauses]
 *   Returns: mbql.s/Filter
 * 
 *   Combine two filter clauses into a single clause in a way that minimizes slapping a bunch of `:and`s together if
 *   possible.
 */
metabase.mbql.util.combine_filter_clauses = (function metabase$mbql$util$combine_filter_clauses(var_args){
var args__4742__auto__ = [];
var len__4736__auto___43400 = arguments.length;
var i__4737__auto___43401 = (0);
while(true){
if((i__4737__auto___43401 < len__4736__auto___43400)){
args__4742__auto__.push((arguments[i__4737__auto___43401]));

var G__43402 = (i__4737__auto___43401 + (1));
i__4737__auto___43401 = G__43402;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return metabase.mbql.util.combine_filter_clauses.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(metabase.mbql.util.combine_filter_clauses.cljs$core$IFn$_invoke$arity$variadic = (function (G__42636,rest42637){
var validate__37298__auto__ = cljs.core.deref(ufv___43390);
if(cljs.core.truth_(validate__37298__auto__)){
var args__37299__auto___43404 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__42636,rest42637);
if(cljs.core.truth_(schema.core.fn_validator)){
var G__42640_43405 = new cljs.core.Keyword(null,"input","input",556931961);
var G__42641_43406 = cljs.core.with_meta(new cljs.core.Symbol(null,"combine-filter-clauses","combine-filter-clauses",1245054425,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","Filter","mbql.s/Filter",650308569,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Combine two filter clauses into a single clause in a way that minimizes slapping a bunch of `:and`s together if\n  possible."], null));
var G__42642_43407 = input_schema42633_43392;
var G__42643_43408 = cljs.core.deref(input_checker42634_43393);
var G__42644_43409 = args__37299__auto___43404;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__42640_43405,G__42641_43406,G__42642_43407,G__42643_43408,G__42644_43409) : schema.core.fn_validator.call(null,G__42640_43405,G__42641_43406,G__42642_43407,G__42643_43408,G__42644_43409));
} else {
var temp__5735__auto___43411 = (function (){var fexpr__42645 = cljs.core.deref(input_checker42634_43393);
return (fexpr__42645.cljs$core$IFn$_invoke$arity$1 ? fexpr__42645.cljs$core$IFn$_invoke$arity$1(args__37299__auto___43404) : fexpr__42645.call(null,args__37299__auto___43404));
})();
if(cljs.core.truth_(temp__5735__auto___43411)){
var error__37300__auto___43413 = temp__5735__auto___43411;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"combine-filter-clauses","combine-filter-clauses",1245054425,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","Filter","mbql.s/Filter",650308569,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Combine two filter clauses into a single clause in a way that minimizes slapping a bunch of `:and`s together if\n  possible."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__37300__auto___43413], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema42633_43392,new cljs.core.Keyword(null,"value","value",305978217),args__37299__auto___43404,new cljs.core.Keyword(null,"error","error",-978969032),error__37300__auto___43413], null));
} else {
}
}
} else {
}

var o__37301__auto__ = (function (){var filter_clause = G__42636;
var more_filter_clauses = rest42637;
while(true){
return metabase.mbql.util.simplify_compound_filter(cljs.core.cons(new cljs.core.Keyword(null,"and","and",-971899817),cljs.core.cons(filter_clause,more_filter_clauses)));
break;
}
})();
if(cljs.core.truth_(validate__37298__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
var G__42647_43418 = new cljs.core.Keyword(null,"output","output",-1105869043);
var G__42648_43419 = cljs.core.with_meta(new cljs.core.Symbol(null,"combine-filter-clauses","combine-filter-clauses",1245054425,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","Filter","mbql.s/Filter",650308569,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Combine two filter clauses into a single clause in a way that minimizes slapping a bunch of `:and`s together if\n  possible."], null));
var G__42649_43420 = output_schema42632_43391;
var G__42650_43421 = cljs.core.deref(output_checker42635_43394);
var G__42651_43422 = o__37301__auto__;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__42647_43418,G__42648_43419,G__42649_43420,G__42650_43421,G__42651_43422) : schema.core.fn_validator.call(null,G__42647_43418,G__42648_43419,G__42649_43420,G__42650_43421,G__42651_43422));
} else {
var temp__5735__auto___43425 = (function (){var fexpr__42652 = cljs.core.deref(output_checker42635_43394);
return (fexpr__42652.cljs$core$IFn$_invoke$arity$1 ? fexpr__42652.cljs$core$IFn$_invoke$arity$1(o__37301__auto__) : fexpr__42652.call(null,o__37301__auto__));
})();
if(cljs.core.truth_(temp__5735__auto___43425)){
var error__37300__auto___43426 = temp__5735__auto___43425;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"combine-filter-clauses","combine-filter-clauses",1245054425,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","Filter","mbql.s/Filter",650308569,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Combine two filter clauses into a single clause in a way that minimizes slapping a bunch of `:and`s together if\n  possible."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__37300__auto___43426], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema42632_43391,new cljs.core.Keyword(null,"value","value",305978217),o__37301__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37300__auto___43426], null));
} else {
}
}
} else {
}

return o__37301__auto__;
}));

(metabase.mbql.util.combine_filter_clauses.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(metabase.mbql.util.combine_filter_clauses.cljs$lang$applyTo = (function (seq42638){
var G__42639 = cljs.core.first(seq42638);
var seq42638__$1 = cljs.core.next(seq42638);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42639,seq42638__$1);
}));

return null;
})()
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(metabase.mbql.util.combine_filter_clauses),schema.core.__GT_FnSchema(output_schema42632_43391,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema42633_43392], null)));

var ufv___43428 = schema.utils.use_fn_validation;
var output_schema42653_43429 = metabase.mbql.schema.MBQLQuery;
var input_schema42654_43430 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(metabase.mbql.schema.MBQLQuery,cljs.core.with_meta(new cljs.core.Symbol(null,"inner-query","inner-query",-907556093,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","MBQLQuery","mbql.s/MBQLQuery",-332777720,null)], null))),schema.core.one(schema.core.maybe(metabase.mbql.schema.Filter),cljs.core.with_meta(new cljs.core.Symbol(null,"new-clause","new-clause",-910348391,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),new cljs.core.Symbol("mbql.s","Filter","mbql.s/Filter",650308569,null))], null)))], null);
var input_checker42655_43431 = (new cljs.core.Delay((function (){
return schema.core.checker(input_schema42654_43430);
}),null));
var output_checker42656_43432 = (new cljs.core.Delay((function (){
return schema.core.checker(output_schema42653_43429);
}),null));
var ret__39378__auto___43435 = /**
 * Inputs: [inner-query :- mbql.s/MBQLQuery new-clause :- (s/maybe mbql.s/Filter)]
 *   Returns: mbql.s/MBQLQuery
 */
metabase.mbql.util.add_filter_clause_to_inner_query = (function metabase$mbql$util$add_filter_clause_to_inner_query(G__42657,G__42658){
var validate__37298__auto__ = cljs.core.deref(ufv___43428);
if(cljs.core.truth_(validate__37298__auto__)){
var args__37299__auto___43436 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__42657,G__42658], null);
if(cljs.core.truth_(schema.core.fn_validator)){
var G__42659_43437 = new cljs.core.Keyword(null,"input","input",556931961);
var G__42660_43438 = cljs.core.with_meta(new cljs.core.Symbol(null,"add-filter-clause-to-inner-query","add-filter-clause-to-inner-query",407708628,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","MBQLQuery","mbql.s/MBQLQuery",-332777720,null)], null));
var G__42661_43439 = input_schema42654_43430;
var G__42662_43440 = cljs.core.deref(input_checker42655_43431);
var G__42663_43441 = args__37299__auto___43436;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__42659_43437,G__42660_43438,G__42661_43439,G__42662_43440,G__42663_43441) : schema.core.fn_validator.call(null,G__42659_43437,G__42660_43438,G__42661_43439,G__42662_43440,G__42663_43441));
} else {
var temp__5735__auto___43442 = (function (){var fexpr__42664 = cljs.core.deref(input_checker42655_43431);
return (fexpr__42664.cljs$core$IFn$_invoke$arity$1 ? fexpr__42664.cljs$core$IFn$_invoke$arity$1(args__37299__auto___43436) : fexpr__42664.call(null,args__37299__auto___43436));
})();
if(cljs.core.truth_(temp__5735__auto___43442)){
var error__37300__auto___43443 = temp__5735__auto___43442;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"add-filter-clause-to-inner-query","add-filter-clause-to-inner-query",407708628,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","MBQLQuery","mbql.s/MBQLQuery",-332777720,null)], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__37300__auto___43443], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema42654_43430,new cljs.core.Keyword(null,"value","value",305978217),args__37299__auto___43436,new cljs.core.Keyword(null,"error","error",-978969032),error__37300__auto___43443], null));
} else {
}
}
} else {
}

var o__37301__auto__ = (function (){var inner_query = G__42657;
var new_clause = G__42658;
while(true){
if(cljs.core.not(new_clause)){
return inner_query;
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(inner_query,new cljs.core.Keyword(null,"filter","filter",-948537934),metabase.mbql.util.combine_filter_clauses,new_clause);
}
break;
}
})();
if(cljs.core.truth_(validate__37298__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
var G__42665_43444 = new cljs.core.Keyword(null,"output","output",-1105869043);
var G__42666_43445 = cljs.core.with_meta(new cljs.core.Symbol(null,"add-filter-clause-to-inner-query","add-filter-clause-to-inner-query",407708628,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","MBQLQuery","mbql.s/MBQLQuery",-332777720,null)], null));
var G__42667_43446 = output_schema42653_43429;
var G__42668_43447 = cljs.core.deref(output_checker42656_43432);
var G__42669_43448 = o__37301__auto__;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__42665_43444,G__42666_43445,G__42667_43446,G__42668_43447,G__42669_43448) : schema.core.fn_validator.call(null,G__42665_43444,G__42666_43445,G__42667_43446,G__42668_43447,G__42669_43448));
} else {
var temp__5735__auto___43450 = (function (){var fexpr__42670 = cljs.core.deref(output_checker42656_43432);
return (fexpr__42670.cljs$core$IFn$_invoke$arity$1 ? fexpr__42670.cljs$core$IFn$_invoke$arity$1(o__37301__auto__) : fexpr__42670.call(null,o__37301__auto__));
})();
if(cljs.core.truth_(temp__5735__auto___43450)){
var error__37300__auto___43451 = temp__5735__auto___43450;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"add-filter-clause-to-inner-query","add-filter-clause-to-inner-query",407708628,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","MBQLQuery","mbql.s/MBQLQuery",-332777720,null)], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__37300__auto___43451], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema42653_43429,new cljs.core.Keyword(null,"value","value",305978217),o__37301__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37300__auto___43451], null));
} else {
}
}
} else {
}

return o__37301__auto__;
});
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(metabase.mbql.util.add_filter_clause_to_inner_query),schema.core.__GT_FnSchema(output_schema42653_43429,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema42654_43430], null)));

var ufv___43454 = schema.utils.use_fn_validation;
var output_schema42671_43455 = metabase.mbql.schema.Query;
var input_schema42672_43456 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(metabase.mbql.schema.Query,cljs.core.with_meta(new cljs.core.Symbol(null,"outer-query","outer-query",-395069361,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","Query","mbql.s/Query",1061827921,null)], null))),schema.core.one(schema.core.maybe(metabase.mbql.schema.Filter),cljs.core.with_meta(new cljs.core.Symbol(null,"new-clause","new-clause",-910348391,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),new cljs.core.Symbol("mbql.s","Filter","mbql.s/Filter",650308569,null))], null)))], null);
var input_checker42673_43457 = (new cljs.core.Delay((function (){
return schema.core.checker(input_schema42672_43456);
}),null));
var output_checker42674_43458 = (new cljs.core.Delay((function (){
return schema.core.checker(output_schema42671_43455);
}),null));
var ret__39378__auto___43459 = /**
 * Inputs: [outer-query :- mbql.s/Query new-clause :- (s/maybe mbql.s/Filter)]
 *   Returns: mbql.s/Query
 * 
 *   Add an additional filter clause to an `outer-query`. If `new-clause` is `nil` this is a no-op.
 */
metabase.mbql.util.add_filter_clause = (function metabase$mbql$util$add_filter_clause(G__42675,G__42676){
var validate__37298__auto__ = cljs.core.deref(ufv___43454);
if(cljs.core.truth_(validate__37298__auto__)){
var args__37299__auto___43461 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__42675,G__42676], null);
if(cljs.core.truth_(schema.core.fn_validator)){
var G__42677_43462 = new cljs.core.Keyword(null,"input","input",556931961);
var G__42678_43463 = cljs.core.with_meta(new cljs.core.Symbol(null,"add-filter-clause","add-filter-clause",-1464926076,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","Query","mbql.s/Query",1061827921,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Add an additional filter clause to an `outer-query`. If `new-clause` is `nil` this is a no-op."], null));
var G__42679_43464 = input_schema42672_43456;
var G__42680_43465 = cljs.core.deref(input_checker42673_43457);
var G__42681_43466 = args__37299__auto___43461;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__42677_43462,G__42678_43463,G__42679_43464,G__42680_43465,G__42681_43466) : schema.core.fn_validator.call(null,G__42677_43462,G__42678_43463,G__42679_43464,G__42680_43465,G__42681_43466));
} else {
var temp__5735__auto___43469 = (function (){var fexpr__42682 = cljs.core.deref(input_checker42673_43457);
return (fexpr__42682.cljs$core$IFn$_invoke$arity$1 ? fexpr__42682.cljs$core$IFn$_invoke$arity$1(args__37299__auto___43461) : fexpr__42682.call(null,args__37299__auto___43461));
})();
if(cljs.core.truth_(temp__5735__auto___43469)){
var error__37300__auto___43470 = temp__5735__auto___43469;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"add-filter-clause","add-filter-clause",-1464926076,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","Query","mbql.s/Query",1061827921,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Add an additional filter clause to an `outer-query`. If `new-clause` is `nil` this is a no-op."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__37300__auto___43470], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema42672_43456,new cljs.core.Keyword(null,"value","value",305978217),args__37299__auto___43461,new cljs.core.Keyword(null,"error","error",-978969032),error__37300__auto___43470], null));
} else {
}
}
} else {
}

var o__37301__auto__ = (function (){var outer_query = G__42675;
var new_clause = G__42676;
while(true){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(outer_query,new cljs.core.Keyword(null,"query","query",-1288509510),metabase.mbql.util.add_filter_clause_to_inner_query,new_clause);
break;
}
})();
if(cljs.core.truth_(validate__37298__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
var G__42683_43471 = new cljs.core.Keyword(null,"output","output",-1105869043);
var G__42684_43472 = cljs.core.with_meta(new cljs.core.Symbol(null,"add-filter-clause","add-filter-clause",-1464926076,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","Query","mbql.s/Query",1061827921,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Add an additional filter clause to an `outer-query`. If `new-clause` is `nil` this is a no-op."], null));
var G__42685_43473 = output_schema42671_43455;
var G__42686_43474 = cljs.core.deref(output_checker42674_43458);
var G__42687_43475 = o__37301__auto__;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__42683_43471,G__42684_43472,G__42685_43473,G__42686_43474,G__42687_43475) : schema.core.fn_validator.call(null,G__42683_43471,G__42684_43472,G__42685_43473,G__42686_43474,G__42687_43475));
} else {
var temp__5735__auto___43480 = (function (){var fexpr__42688 = cljs.core.deref(output_checker42674_43458);
return (fexpr__42688.cljs$core$IFn$_invoke$arity$1 ? fexpr__42688.cljs$core$IFn$_invoke$arity$1(o__37301__auto__) : fexpr__42688.call(null,o__37301__auto__));
})();
if(cljs.core.truth_(temp__5735__auto___43480)){
var error__37300__auto___43482 = temp__5735__auto___43480;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"add-filter-clause","add-filter-clause",-1464926076,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","Query","mbql.s/Query",1061827921,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Add an additional filter clause to an `outer-query`. If `new-clause` is `nil` this is a no-op."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__37300__auto___43482], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema42671_43455,new cljs.core.Keyword(null,"value","value",305978217),o__37301__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37300__auto___43482], null));
} else {
}
}
} else {
}

return o__37301__auto__;
});
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(metabase.mbql.util.add_filter_clause),schema.core.__GT_FnSchema(output_schema42671_43455,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema42672_43456], null)));

/**
 * Rewrite `:inside` filter clauses as a pair of `:between` clauses.
 */
metabase.mbql.util.desugar_inside = (function metabase$mbql$util$desugar_inside(m){
return (function metabase$mbql$util$desugar_inside_$_replace_42689(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) === 7)))){
try{var _AMPERSAND_match_0__42691 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__42691,new cljs.core.Keyword(null,"inside","inside",1972503011))){
var lat_field = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
var lon_field = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
var lat_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
var lon_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(4));
var lat_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(5));
var lon_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(6));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"between","between",1131099276),lat_field,lat_min,lat_max], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"between","between",1131099276),lon_field,lon_min,lon_max], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e42699){if((e42699 instanceof Error)){
var e__40407__auto__ = e42699;
if((e__40407__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40407__auto__;
}
} else {
throw e42699;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e42698){if((e42698 instanceof Error)){
var e__40407__auto__ = e42698;
if((e__40407__auto__ === cljs.core.match.backtrack)){
return metabase.mbql.util.match.impl.replace_in_collection(metabase$mbql$util$desugar_inside_$_replace_42689,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__40407__auto__;
}
} else {
throw e42698;

}
}})(cljs.core.PersistentVector.EMPTY,m);
});
/**
 * Rewrite `:is-null` and `:not-null` filter clauses as simpler `:=` and `:!=`, respectively.
 */
metabase.mbql.util.desugar_is_null_and_not_null = (function metabase$mbql$util$desugar_is_null_and_not_null(m){
return (function metabase$mbql$util$desugar_is_null_and_not_null_$_replace_42701(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) === 2)))){
try{var _AMPERSAND_match_0__42704 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__42704,new cljs.core.Keyword(null,"is-null","is-null",-1997050930))){
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),field,null], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e42708){if((e42708 instanceof Error)){
var e__40407__auto__ = e42708;
if((e__40407__auto__ === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_0__42704 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__42704,new cljs.core.Keyword(null,"not-null","not-null",-1326718535))){
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"!=","!=",-1841737356),field,null], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e42709){if((e42709 instanceof Error)){
var e__40407__auto____$1 = e42709;
if((e__40407__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40407__auto____$1;
}
} else {
throw e42709;

}
}} else {
throw e__40407__auto__;
}
} else {
throw e42708;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e42706){if((e42706 instanceof Error)){
var e__40407__auto__ = e42706;
if((e__40407__auto__ === cljs.core.match.backtrack)){
return metabase.mbql.util.match.impl.replace_in_collection(metabase$mbql$util$desugar_is_null_and_not_null_$_replace_42701,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__40407__auto__;
}
} else {
throw e42706;

}
}})(cljs.core.PersistentVector.EMPTY,m);
});
/**
 * Rewrite `:is-empty` and `:not-empty` filter clauses as simpler `:=` and `:!=`, respectively.
 */
metabase.mbql.util.desugar_is_empty_and_not_empty = (function metabase$mbql$util$desugar_is_empty_and_not_empty(m){
return (function metabase$mbql$util$desugar_is_empty_and_not_empty_$_replace_42711(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) === 2)))){
try{var _AMPERSAND_match_0__42713 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__42713,new cljs.core.Keyword(null,"is-empty","is-empty",-1040302908))){
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),field,null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),field,""], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e42717){if((e42717 instanceof Error)){
var e__40407__auto__ = e42717;
if((e__40407__auto__ === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_0__42713 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__42713,new cljs.core.Keyword(null,"not-empty","not-empty",388922063))){
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"!=","!=",-1841737356),field,null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"!=","!=",-1841737356),field,""], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e42718){if((e42718 instanceof Error)){
var e__40407__auto____$1 = e42718;
if((e__40407__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40407__auto____$1;
}
} else {
throw e42718;

}
}} else {
throw e__40407__auto__;
}
} else {
throw e42717;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e42715){if((e42715 instanceof Error)){
var e__40407__auto__ = e42715;
if((e__40407__auto__ === cljs.core.match.backtrack)){
return metabase.mbql.util.match.impl.replace_in_collection(metabase$mbql$util$desugar_is_empty_and_not_empty_$_replace_42711,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__40407__auto__;
}
} else {
throw e42715;

}
}})(cljs.core.PersistentVector.EMPTY,m);
});
/**
 * Rewrite `:time-interval` filter clauses as simpler ones like `:=` or `:between`.
 */
metabase.mbql.util.desugar_time_interval = (function metabase$mbql$util$desugar_time_interval(m){
return (function metabase$mbql$util$desugar_time_interval_$_replace_42719(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) === 4)))){
try{var _AMPERSAND_match_0__42735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__42735,new cljs.core.Keyword(null,"time-interval","time-interval",704622015))){
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
return metabase$mbql$util$desugar_time_interval_$_replace_42719(_AMPERSAND_parents,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time-interval","time-interval",704622015),field,n,unit,null], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e42766){if((e42766 instanceof Error)){
var e__40407__auto__ = e42766;
if((e__40407__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40407__auto__;
}
} else {
throw e42766;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e42747){if((e42747 instanceof Error)){
var e__40407__auto__ = e42747;
if((e__40407__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) === 5)))){
try{var _AMPERSAND_match_0__42739 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__42739,new cljs.core.Keyword(null,"time-interval","time-interval",704622015))){
try{var _AMPERSAND_match_2__42741 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_2__42741,new cljs.core.Keyword(null,"current","current",-1088038603))){
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(4));
return metabase$mbql$util$desugar_time_interval_$_replace_42719(_AMPERSAND_parents,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time-interval","time-interval",704622015),field,(0),unit,options], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e42751){if((e42751 instanceof Error)){
var e__40407__auto____$1 = e42751;
if((e__40407__auto____$1 === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_2__42741 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_2__42741,new cljs.core.Keyword(null,"last","last",1105735132))){
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(4));
return metabase$mbql$util$desugar_time_interval_$_replace_42719(_AMPERSAND_parents,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time-interval","time-interval",704622015),field,(-1),unit,options], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e42752){if((e42752 instanceof Error)){
var e__40407__auto____$2 = e42752;
if((e__40407__auto____$2 === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_2__42741 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_2__42741,new cljs.core.Keyword(null,"next","next",-117701485))){
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(4));
return metabase$mbql$util$desugar_time_interval_$_replace_42719(_AMPERSAND_parents,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time-interval","time-interval",704622015),field,(1),unit,options], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e42753){if((e42753 instanceof Error)){
var e__40407__auto____$3 = e42753;
if((e__40407__auto____$3 === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_1__42740 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
if(((cljs.core.vector_QMARK_(_AMPERSAND_match_1__42740)) && ((cljs.core.count(_AMPERSAND_match_1__42740) === 3)))){
try{var _AMPERSAND_match_2__42741 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
if(cljs.core.truth_((function (){var fexpr__42764 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(-1),null], null), null);
return (fexpr__42764.cljs$core$IFn$_invoke$arity$1 ? fexpr__42764.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_match_2__42741) : fexpr__42764.call(null,_AMPERSAND_match_2__42741));
})())){
try{var _AMPERSAND_match_4__42743 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(4));
if(cljs.core.truth_(new cljs.core.Keyword(null,"include-current","include-current",-1602371981).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_match_4__42743))){
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
var id_or_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_1__42740,(1));
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_1__42740,(2));
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"between","between",1131099276),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field","field",-1302436500),id_or_name,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"temporal-unit","temporal-unit",-1892306358),unit)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relative-datetime","relative-datetime",1285169278),n,unit], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relative-datetime","relative-datetime",1285169278),(0),unit], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e42765){if((e42765 instanceof Error)){
var e__40407__auto____$4 = e42765;
if((e__40407__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40407__auto____$4;
}
} else {
throw e42765;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e42755){if((e42755 instanceof Error)){
var e__40407__auto____$4 = e42755;
if((e__40407__auto____$4 === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_2__42741 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
if(cljs.core.truth_((function (){var fexpr__42762 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(1),null], null), null);
return (fexpr__42762.cljs$core$IFn$_invoke$arity$1 ? fexpr__42762.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_match_2__42741) : fexpr__42762.call(null,_AMPERSAND_match_2__42741));
})())){
try{var _AMPERSAND_match_4__42743 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(4));
if(cljs.core.truth_(new cljs.core.Keyword(null,"include-current","include-current",-1602371981).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_match_4__42743))){
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
var id_or_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_1__42740,(1));
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_1__42740,(2));
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"between","between",1131099276),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field","field",-1302436500),id_or_name,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"temporal-unit","temporal-unit",-1892306358),unit)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relative-datetime","relative-datetime",1285169278),(0),unit], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relative-datetime","relative-datetime",1285169278),n,unit], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e42763){if((e42763 instanceof Error)){
var e__40407__auto____$5 = e42763;
if((e__40407__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40407__auto____$5;
}
} else {
throw e42763;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e42756){if((e42756 instanceof Error)){
var e__40407__auto____$5 = e42756;
if((e__40407__auto____$5 === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_2__42741 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
if(cljs.core.truth_((function (){var fexpr__42761 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(0),null,(1),null,(-1),null], null), null);
return (fexpr__42761.cljs$core$IFn$_invoke$arity$1 ? fexpr__42761.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_match_2__42741) : fexpr__42761.call(null,_AMPERSAND_match_2__42741));
})())){
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
var id_or_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_1__42740,(1));
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_1__42740,(2));
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field","field",-1302436500),id_or_name,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"temporal-unit","temporal-unit",-1892306358),unit)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relative-datetime","relative-datetime",1285169278),n,unit], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e42757){if((e42757 instanceof Error)){
var e__40407__auto____$6 = e42757;
if((e__40407__auto____$6 === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_2__42741 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
if((_AMPERSAND_match_2__42741 < (0))){
try{var _AMPERSAND_match_4__42743 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(4));
if(cljs.core.truth_(new cljs.core.Keyword(null,"include-current","include-current",-1602371981).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_match_4__42743))){
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
var id_or_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_1__42740,(1));
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_1__42740,(2));
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"between","between",1131099276),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field","field",-1302436500),id_or_name,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"temporal-unit","temporal-unit",-1892306358),unit)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relative-datetime","relative-datetime",1285169278),n,unit], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relative-datetime","relative-datetime",1285169278),(0),unit], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e42760){if((e42760 instanceof Error)){
var e__40407__auto____$7 = e42760;
if((e__40407__auto____$7 === cljs.core.match.backtrack)){
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
var id_or_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_1__42740,(1));
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_1__42740,(2));
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"between","between",1131099276),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field","field",-1302436500),id_or_name,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"temporal-unit","temporal-unit",-1892306358),unit)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relative-datetime","relative-datetime",1285169278),n,unit], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relative-datetime","relative-datetime",1285169278),(-1),unit], null)], null);
} else {
throw e__40407__auto____$7;
}
} else {
throw e42760;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e42758){if((e42758 instanceof Error)){
var e__40407__auto____$7 = e42758;
if((e__40407__auto____$7 === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_4__42743 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(4));
if(cljs.core.truth_(new cljs.core.Keyword(null,"include-current","include-current",-1602371981).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_match_4__42743))){
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
var id_or_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_1__42740,(1));
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_1__42740,(2));
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"between","between",1131099276),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field","field",-1302436500),id_or_name,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"temporal-unit","temporal-unit",-1892306358),unit)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relative-datetime","relative-datetime",1285169278),(0),unit], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relative-datetime","relative-datetime",1285169278),n,unit], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e42759){if((e42759 instanceof Error)){
var e__40407__auto____$8 = e42759;
if((e__40407__auto____$8 === cljs.core.match.backtrack)){
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
var id_or_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_1__42740,(1));
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_1__42740,(2));
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"between","between",1131099276),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field","field",-1302436500),id_or_name,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"temporal-unit","temporal-unit",-1892306358),unit)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relative-datetime","relative-datetime",1285169278),(1),unit], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relative-datetime","relative-datetime",1285169278),n,unit], null)], null);
} else {
throw e__40407__auto____$8;
}
} else {
throw e42759;

}
}} else {
throw e__40407__auto____$7;
}
} else {
throw e42758;

}
}} else {
throw e__40407__auto____$6;
}
} else {
throw e42757;

}
}} else {
throw e__40407__auto____$5;
}
} else {
throw e42756;

}
}} else {
throw e__40407__auto____$4;
}
} else {
throw e42755;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e42754){if((e42754 instanceof Error)){
var e__40407__auto____$4 = e42754;
if((e__40407__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40407__auto____$4;
}
} else {
throw e42754;

}
}} else {
throw e__40407__auto____$3;
}
} else {
throw e42753;

}
}} else {
throw e__40407__auto____$2;
}
} else {
throw e42752;

}
}} else {
throw e__40407__auto____$1;
}
} else {
throw e42751;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e42750){if((e42750 instanceof Error)){
var e__40407__auto____$1 = e42750;
if((e__40407__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40407__auto____$1;
}
} else {
throw e42750;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e42748){if((e42748 instanceof Error)){
var e__40407__auto____$1 = e42748;
if((e__40407__auto____$1 === cljs.core.match.backtrack)){
return metabase.mbql.util.match.impl.replace_in_collection(metabase$mbql$util$desugar_time_interval_$_replace_42719,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__40407__auto____$1;
}
} else {
throw e42748;

}
}} else {
throw e__40407__auto__;
}
} else {
throw e42747;

}
}})(cljs.core.PersistentVector.EMPTY,m);
});
/**
 * Rewrite `:does-not-contain` filter clauses as simpler `:not` clauses.
 */
metabase.mbql.util.desugar_does_not_contain = (function metabase$mbql$util$desugar_does_not_contain(m){
return (function metabase$mbql$util$desugar_does_not_contain_$_replace_42767(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) >= (1))))){
try{var _AMPERSAND_match_left__42769 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_match,(0),(1));
if(((cljs.core.vector_QMARK_(_AMPERSAND_match_left__42769)) && ((cljs.core.count(_AMPERSAND_match_left__42769) === (1))))){
try{var _AMPERSAND_match_left__42769_0__42771 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__42769,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_left__42769_0__42771,new cljs.core.Keyword(null,"does-not-contain","does-not-contain",-274946853))){
var args = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"not","not",-595976884),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contains","contains",676899812)], null),args)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e42774){if((e42774 instanceof Error)){
var e__40407__auto__ = e42774;
if((e__40407__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40407__auto__;
}
} else {
throw e42774;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e42773){if((e42773 instanceof Error)){
var e__40407__auto__ = e42773;
if((e__40407__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40407__auto__;
}
} else {
throw e42773;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e42772){if((e42772 instanceof Error)){
var e__40407__auto__ = e42772;
if((e__40407__auto__ === cljs.core.match.backtrack)){
return metabase.mbql.util.match.impl.replace_in_collection(metabase$mbql$util$desugar_does_not_contain_$_replace_42767,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__40407__auto__;
}
} else {
throw e42772;

}
}})(cljs.core.PersistentVector.EMPTY,m);
});
/**
 * `:=` and `!=` clauses with more than 2 args automatically get rewritten as compound filters.
 * 
 *   [:= field x y]  -> [:or  [:=  field x] [:=  field y]]
 *   [:!= field x y] -> [:and [:!= field x] [:!= field y]]
 */
metabase.mbql.util.desugar_equals_and_not_equals_with_extra_args = (function metabase$mbql$util$desugar_equals_and_not_equals_with_extra_args(m){
return (function metabase$mbql$util$desugar_equals_and_not_equals_with_extra_args_$_replace_42775(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) >= (4))))){
try{var _AMPERSAND_match_left__42777 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_match,(0),(4));
if(((cljs.core.vector_QMARK_(_AMPERSAND_match_left__42777)) && ((cljs.core.count(_AMPERSAND_match_left__42777) === (4))))){
try{var _AMPERSAND_match_left__42777_0__42779 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__42777,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_left__42777_0__42779,new cljs.core.Keyword(null,"=","=",1152933628))){
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__42777,(1));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__42777,(2));
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__42777,(3));
var more = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(4));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,new cljs.core.Keyword(null,"or","or",235744169),(function (){var iter__4529__auto__ = (function metabase$mbql$util$desugar_equals_and_not_equals_with_extra_args_$_replace_42775_$_iter__42791(s__42792){
return (new cljs.core.LazySeq(null,(function (){
var s__42792__$1 = s__42792;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__42792__$1);
if(temp__5735__auto__){
var s__42792__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42792__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__42792__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__42794 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__42793 = (0);
while(true){
if((i__42793 < size__4528__auto__)){
var x__$1 = cljs.core._nth(c__4527__auto__,i__42793);
cljs.core.chunk_append(b__42794,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),field,x__$1], null));

var G__43550 = (i__42793 + (1));
i__42793 = G__43550;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42794),metabase$mbql$util$desugar_equals_and_not_equals_with_extra_args_$_replace_42775_$_iter__42791(cljs.core.chunk_rest(s__42792__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42794),null);
}
} else {
var x__$1 = cljs.core.first(s__42792__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),field,x__$1], null),metabase$mbql$util$desugar_equals_and_not_equals_with_extra_args_$_replace_42775_$_iter__42791(cljs.core.rest(s__42792__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),more));
})());
} else {
throw cljs.core.match.backtrack;

}
}catch (e42785){if((e42785 instanceof Error)){
var e__40407__auto__ = e42785;
if((e__40407__auto__ === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_left__42777_0__42779 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__42777,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_left__42777_0__42779,new cljs.core.Keyword(null,"!=","!=",-1841737356))){
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__42777,(1));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__42777,(2));
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__42777,(3));
var more = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(4));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,new cljs.core.Keyword(null,"and","and",-971899817),(function (){var iter__4529__auto__ = (function metabase$mbql$util$desugar_equals_and_not_equals_with_extra_args_$_replace_42775_$_iter__42787(s__42788){
return (new cljs.core.LazySeq(null,(function (){
var s__42788__$1 = s__42788;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__42788__$1);
if(temp__5735__auto__){
var s__42788__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42788__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__42788__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__42790 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__42789 = (0);
while(true){
if((i__42789 < size__4528__auto__)){
var x__$1 = cljs.core._nth(c__4527__auto__,i__42789);
cljs.core.chunk_append(b__42790,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"!=","!=",-1841737356),field,x__$1], null));

var G__43559 = (i__42789 + (1));
i__42789 = G__43559;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42790),metabase$mbql$util$desugar_equals_and_not_equals_with_extra_args_$_replace_42775_$_iter__42787(cljs.core.chunk_rest(s__42788__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42790),null);
}
} else {
var x__$1 = cljs.core.first(s__42788__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"!=","!=",-1841737356),field,x__$1], null),metabase$mbql$util$desugar_equals_and_not_equals_with_extra_args_$_replace_42775_$_iter__42787(cljs.core.rest(s__42788__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),more));
})());
} else {
throw cljs.core.match.backtrack;

}
}catch (e42786){if((e42786 instanceof Error)){
var e__40407__auto____$1 = e42786;
if((e__40407__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40407__auto____$1;
}
} else {
throw e42786;

}
}} else {
throw e__40407__auto__;
}
} else {
throw e42785;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e42784){if((e42784 instanceof Error)){
var e__40407__auto__ = e42784;
if((e__40407__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40407__auto__;
}
} else {
throw e42784;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e42783){if((e42783 instanceof Error)){
var e__40407__auto__ = e42783;
if((e__40407__auto__ === cljs.core.match.backtrack)){
return metabase.mbql.util.match.impl.replace_in_collection(metabase$mbql$util$desugar_equals_and_not_equals_with_extra_args_$_replace_42775,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__40407__auto__;
}
} else {
throw e42783;

}
}})(cljs.core.PersistentVector.EMPTY,m);
});
/**
 * Replace `relative-datetime` clauses like `[:relative-datetime :current]` with `[:relative-datetime 0 <unit>]`.
 *   `<unit>` is inferred from the `:field` the clause is being compared to (if any), otherwise falls back to `default.`
 */
metabase.mbql.util.desugar_current_relative_datetime = (function metabase$mbql$util$desugar_current_relative_datetime(m){
return (function metabase$mbql$util$desugar_current_relative_datetime_$_replace_42795(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) === 3)))){
try{var _AMPERSAND_match_2__42800 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
if(((cljs.core.vector_QMARK_(_AMPERSAND_match_2__42800)) && ((cljs.core.count(_AMPERSAND_match_2__42800) >= (2))))){
try{var _AMPERSAND_match_2__42800_left__42801 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_match_2__42800,(0),(2));
if(((cljs.core.vector_QMARK_(_AMPERSAND_match_2__42800_left__42801)) && ((cljs.core.count(_AMPERSAND_match_2__42800_left__42801) === (2))))){
try{var _AMPERSAND_match_2__42800_left__42801_0__42803 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_2__42800_left__42801,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_2__42800_left__42801_0__42803,new cljs.core.Keyword(null,"relative-datetime","relative-datetime",1285169278))){
try{var _AMPERSAND_match_2__42800_left__42801_1__42804 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_2__42800_left__42801,(1));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_2__42800_left__42801_1__42804,new cljs.core.Keyword(null,"current","current",-1088038603))){
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause,field,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relative-datetime","relative-datetime",1285169278),(0),(function (){var or__4126__auto__ = cljs.core.first(cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,(function metabase$mbql$util$desugar_current_relative_datetime_$_replace_42795_$_match_42819(_AMPERSAND_parents__$1,_AMPERSAND_match__$1){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match__$1)) && ((cljs.core.count(_AMPERSAND_match__$1) === 3)))){
try{var _AMPERSAND_match_0__42822 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match__$1,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__42822,new cljs.core.Keyword(null,"field","field",-1302436500))){
try{var _AMPERSAND_match_2__42824 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match__$1,(2));
if(cljs.core.truth_(new cljs.core.Keyword(null,"temporal-unit","temporal-unit",-1892306358).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_match_2__42824))){
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match__$1,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"temporal-unit","temporal-unit",-1892306358).cljs$core$IFn$_invoke$arity$1(opts)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e42827){if((e42827 instanceof Error)){
var e__40407__auto__ = e42827;
if((e__40407__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40407__auto__;
}
} else {
throw e42827;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e42826){if((e42826 instanceof Error)){
var e__40407__auto__ = e42826;
if((e__40407__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40407__auto__;
}
} else {
throw e42826;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e42825){if((e42825 instanceof Error)){
var e__40407__auto__ = e42825;
if((e__40407__auto__ === cljs.core.match.backtrack)){
return metabase.mbql.util.match.impl.match_in_collection(metabase$mbql$util$desugar_current_relative_datetime_$_replace_42795_$_match_42819,_AMPERSAND_parents__$1,_AMPERSAND_match__$1);
} else {
throw e__40407__auto__;
}
} else {
throw e42825;

}
}})(cljs.core.PersistentVector.EMPTY,field))));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);
}
})()], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e42809){if((e42809 instanceof Error)){
var e__40407__auto__ = e42809;
if((e__40407__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40407__auto__;
}
} else {
throw e42809;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e42808){if((e42808 instanceof Error)){
var e__40407__auto__ = e42808;
if((e__40407__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40407__auto__;
}
} else {
throw e42808;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e42807){if((e42807 instanceof Error)){
var e__40407__auto__ = e42807;
if((e__40407__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40407__auto__;
}
} else {
throw e42807;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e42806){if((e42806 instanceof Error)){
var e__40407__auto__ = e42806;
if((e__40407__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40407__auto__;
}
} else {
throw e42806;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e42805){if((e42805 instanceof Error)){
var e__40407__auto__ = e42805;
if((e__40407__auto__ === cljs.core.match.backtrack)){
return metabase.mbql.util.match.impl.replace_in_collection(metabase$mbql$util$desugar_current_relative_datetime_$_replace_42795,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__40407__auto__;
}
} else {
throw e42805;

}
}})(cljs.core.PersistentVector.EMPTY,m);
});
var ufv___43572 = schema.utils.use_fn_validation;
var output_schema42828_43573 = metabase.mbql.schema.Filter;
var input_schema42829_43574 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(metabase.mbql.schema.Filter,cljs.core.with_meta(new cljs.core.Symbol(null,"filter-clause","filter-clause",-1237814159,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","Filter","mbql.s/Filter",650308569,null)], null)))], null);
var input_checker42830_43575 = (new cljs.core.Delay((function (){
return schema.core.checker(input_schema42829_43574);
}),null));
var output_checker42831_43576 = (new cljs.core.Delay((function (){
return schema.core.checker(output_schema42828_43573);
}),null));
var ret__39378__auto___43582 = /**
 * Inputs: [filter-clause :- mbql.s/Filter]
 *   Returns: mbql.s/Filter
 * 
 *   Rewrite various 'syntatic sugar' filter clauses like `:time-interval` and `:inside` as simpler, logically
 *   equivalent clauses. This can be used to simplify the number of filter clauses that need to be supported by anything
 *   that needs to enumerate all the possible filter types (such as driver query processor implementations, or the
 *   implementation `negate-filter-clause` below.)
 */
metabase.mbql.util.desugar_filter_clause = (function metabase$mbql$util$desugar_filter_clause(G__42832){
var validate__37298__auto__ = cljs.core.deref(ufv___43572);
if(cljs.core.truth_(validate__37298__auto__)){
var args__37299__auto___43583 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__42832], null);
if(cljs.core.truth_(schema.core.fn_validator)){
var G__42833_43584 = new cljs.core.Keyword(null,"input","input",556931961);
var G__42834_43585 = cljs.core.with_meta(new cljs.core.Symbol(null,"desugar-filter-clause","desugar-filter-clause",1980710942,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","Filter","mbql.s/Filter",650308569,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Rewrite various 'syntatic sugar' filter clauses like `:time-interval` and `:inside` as simpler, logically\n  equivalent clauses. This can be used to simplify the number of filter clauses that need to be supported by anything\n  that needs to enumerate all the possible filter types (such as driver query processor implementations, or the\n  implementation `negate-filter-clause` below.)"], null));
var G__42835_43586 = input_schema42829_43574;
var G__42836_43587 = cljs.core.deref(input_checker42830_43575);
var G__42837_43588 = args__37299__auto___43583;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__42833_43584,G__42834_43585,G__42835_43586,G__42836_43587,G__42837_43588) : schema.core.fn_validator.call(null,G__42833_43584,G__42834_43585,G__42835_43586,G__42836_43587,G__42837_43588));
} else {
var temp__5735__auto___43589 = (function (){var fexpr__42838 = cljs.core.deref(input_checker42830_43575);
return (fexpr__42838.cljs$core$IFn$_invoke$arity$1 ? fexpr__42838.cljs$core$IFn$_invoke$arity$1(args__37299__auto___43583) : fexpr__42838.call(null,args__37299__auto___43583));
})();
if(cljs.core.truth_(temp__5735__auto___43589)){
var error__37300__auto___43590 = temp__5735__auto___43589;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"desugar-filter-clause","desugar-filter-clause",1980710942,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","Filter","mbql.s/Filter",650308569,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Rewrite various 'syntatic sugar' filter clauses like `:time-interval` and `:inside` as simpler, logically\n  equivalent clauses. This can be used to simplify the number of filter clauses that need to be supported by anything\n  that needs to enumerate all the possible filter types (such as driver query processor implementations, or the\n  implementation `negate-filter-clause` below.)"], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__37300__auto___43590], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema42829_43574,new cljs.core.Keyword(null,"value","value",305978217),args__37299__auto___43583,new cljs.core.Keyword(null,"error","error",-978969032),error__37300__auto___43590], null));
} else {
}
}
} else {
}

var o__37301__auto__ = (function (){var filter_clause = G__42832;
while(true){
return metabase.mbql.util.simplify_compound_filter(metabase.mbql.util.desugar_inside(metabase.mbql.util.desugar_is_empty_and_not_empty(metabase.mbql.util.desugar_is_null_and_not_null(metabase.mbql.util.desugar_time_interval(metabase.mbql.util.desugar_does_not_contain(metabase.mbql.util.desugar_equals_and_not_equals_with_extra_args(metabase.mbql.util.desugar_current_relative_datetime(filter_clause))))))));
break;
}
})();
if(cljs.core.truth_(validate__37298__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
var G__42839_43599 = new cljs.core.Keyword(null,"output","output",-1105869043);
var G__42840_43600 = cljs.core.with_meta(new cljs.core.Symbol(null,"desugar-filter-clause","desugar-filter-clause",1980710942,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","Filter","mbql.s/Filter",650308569,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Rewrite various 'syntatic sugar' filter clauses like `:time-interval` and `:inside` as simpler, logically\n  equivalent clauses. This can be used to simplify the number of filter clauses that need to be supported by anything\n  that needs to enumerate all the possible filter types (such as driver query processor implementations, or the\n  implementation `negate-filter-clause` below.)"], null));
var G__42841_43601 = output_schema42828_43573;
var G__42842_43602 = cljs.core.deref(output_checker42831_43576);
var G__42843_43603 = o__37301__auto__;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__42839_43599,G__42840_43600,G__42841_43601,G__42842_43602,G__42843_43603) : schema.core.fn_validator.call(null,G__42839_43599,G__42840_43600,G__42841_43601,G__42842_43602,G__42843_43603));
} else {
var temp__5735__auto___43604 = (function (){var fexpr__42844 = cljs.core.deref(output_checker42831_43576);
return (fexpr__42844.cljs$core$IFn$_invoke$arity$1 ? fexpr__42844.cljs$core$IFn$_invoke$arity$1(o__37301__auto__) : fexpr__42844.call(null,o__37301__auto__));
})();
if(cljs.core.truth_(temp__5735__auto___43604)){
var error__37300__auto___43605 = temp__5735__auto___43604;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"desugar-filter-clause","desugar-filter-clause",1980710942,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","Filter","mbql.s/Filter",650308569,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Rewrite various 'syntatic sugar' filter clauses like `:time-interval` and `:inside` as simpler, logically\n  equivalent clauses. This can be used to simplify the number of filter clauses that need to be supported by anything\n  that needs to enumerate all the possible filter types (such as driver query processor implementations, or the\n  implementation `negate-filter-clause` below.)"], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__37300__auto___43605], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema42828_43573,new cljs.core.Keyword(null,"value","value",305978217),o__37301__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37300__auto___43605], null));
} else {
}
}
} else {
}

return o__37301__auto__;
});
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(metabase.mbql.util.desugar_filter_clause),schema.core.__GT_FnSchema(output_schema42828_43573,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema42829_43574], null)));

if((typeof metabase !== 'undefined') && (typeof metabase.mbql !== 'undefined') && (typeof metabase.mbql.util !== 'undefined') && (typeof metabase.mbql.util.negate_STAR_ !== 'undefined')){
} else {
metabase.mbql.util.negate_STAR_ = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__42845 = cljs.core.get_global_hierarchy;
return (fexpr__42845.cljs$core$IFn$_invoke$arity$0 ? fexpr__42845.cljs$core$IFn$_invoke$arity$0() : fexpr__42845.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.mbql.util","negate*"),cljs.core.first,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
metabase.mbql.util.negate_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"not","not",-595976884),(function (p__42846){
var vec__42847 = p__42846;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42847,(0),null);
var subclause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42847,(1),null);
return subclause;
}));
metabase.mbql.util.negate_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"and","and",-971899817),(function (p__42850){
var vec__42851 = p__42850;
var seq__42852 = cljs.core.seq(vec__42851);
var first__42853 = cljs.core.first(seq__42852);
var seq__42852__$1 = cljs.core.next(seq__42852);
var _ = first__42853;
var subclauses = seq__42852__$1;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(metabase.mbql.util.negate_STAR_,subclauses));
}));
metabase.mbql.util.negate_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"or","or",235744169),(function (p__42854){
var vec__42855 = p__42854;
var seq__42856 = cljs.core.seq(vec__42855);
var first__42857 = cljs.core.first(seq__42856);
var seq__42856__$1 = cljs.core.next(seq__42856);
var _ = first__42857;
var subclauses = seq__42856__$1;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(metabase.mbql.util.negate_STAR_,subclauses));
}));
metabase.mbql.util.negate_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"=","=",1152933628),(function (p__42858){
var vec__42859 = p__42858;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42859,(0),null);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42859,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42859,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"!=","!=",-1841737356),field,value], null);
}));
metabase.mbql.util.negate_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"!=","!=",-1841737356),(function (p__42862){
var vec__42863 = p__42862;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42863,(0),null);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42863,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42863,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),field,value], null);
}));
metabase.mbql.util.negate_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,">",">",-555517146),(function (p__42866){
var vec__42867 = p__42866;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42867,(0),null);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42867,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42867,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<=","<=",-395636158),field,value], null);
}));
metabase.mbql.util.negate_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"<","<",-646864291),(function (p__42870){
var vec__42871 = p__42870;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42871,(0),null);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42871,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42871,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">=",">=",-623615505),field,value], null);
}));
metabase.mbql.util.negate_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,">=",">=",-623615505),(function (p__42874){
var vec__42875 = p__42874;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42875,(0),null);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42875,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42875,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<","<",-646864291),field,value], null);
}));
metabase.mbql.util.negate_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"<=","<=",-395636158),(function (p__42878){
var vec__42879 = p__42878;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42879,(0),null);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42879,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42879,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),field,value], null);
}));
metabase.mbql.util.negate_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"between","between",1131099276),(function (p__42882){
var vec__42883 = p__42882;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42883,(0),null);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42883,(1),null);
var min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42883,(2),null);
var max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42883,(3),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<","<",-646864291),field,min], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),field,max], null)], null);
}));
metabase.mbql.util.negate_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"contains","contains",676899812),(function (clause){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"not","not",-595976884),clause], null);
}));
metabase.mbql.util.negate_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"starts-with","starts-with",366503009),(function (clause){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"not","not",-595976884),clause], null);
}));
metabase.mbql.util.negate_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ends-with","ends-with",-456791011),(function (clause){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"not","not",-595976884),clause], null);
}));
var ufv___43614 = schema.utils.use_fn_validation;
var output_schema42886_43615 = metabase.mbql.schema.Filter;
var input_schema42887_43616 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(metabase.mbql.schema.Filter,cljs.core.with_meta(new cljs.core.Symbol(null,"filter-clause","filter-clause",-1237814159,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","Filter","mbql.s/Filter",650308569,null)], null)))], null);
var input_checker42888_43617 = (new cljs.core.Delay((function (){
return schema.core.checker(input_schema42887_43616);
}),null));
var output_checker42889_43618 = (new cljs.core.Delay((function (){
return schema.core.checker(output_schema42886_43615);
}),null));
var ret__39378__auto___43623 = /**
 * Inputs: [filter-clause :- mbql.s/Filter]
 *   Returns: mbql.s/Filter
 * 
 *   Return the logical compliment of an MBQL filter clause, generally without using `:not` (except for the string
 *   filter clause types). Useful for generating highly optimized filter clauses and for drivers that do not support
 *   top-level `:not` filter clauses.
 */
metabase.mbql.util.negate_filter_clause = (function metabase$mbql$util$negate_filter_clause(G__42890){
var validate__37298__auto__ = cljs.core.deref(ufv___43614);
if(cljs.core.truth_(validate__37298__auto__)){
var args__37299__auto___43624 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__42890], null);
if(cljs.core.truth_(schema.core.fn_validator)){
var G__42891_43625 = new cljs.core.Keyword(null,"input","input",556931961);
var G__42892_43626 = cljs.core.with_meta(new cljs.core.Symbol(null,"negate-filter-clause","negate-filter-clause",1540259292,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","Filter","mbql.s/Filter",650308569,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return the logical compliment of an MBQL filter clause, generally without using `:not` (except for the string\n  filter clause types). Useful for generating highly optimized filter clauses and for drivers that do not support\n  top-level `:not` filter clauses."], null));
var G__42893_43627 = input_schema42887_43616;
var G__42894_43628 = cljs.core.deref(input_checker42888_43617);
var G__42895_43629 = args__37299__auto___43624;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__42891_43625,G__42892_43626,G__42893_43627,G__42894_43628,G__42895_43629) : schema.core.fn_validator.call(null,G__42891_43625,G__42892_43626,G__42893_43627,G__42894_43628,G__42895_43629));
} else {
var temp__5735__auto___43634 = (function (){var fexpr__42896 = cljs.core.deref(input_checker42888_43617);
return (fexpr__42896.cljs$core$IFn$_invoke$arity$1 ? fexpr__42896.cljs$core$IFn$_invoke$arity$1(args__37299__auto___43624) : fexpr__42896.call(null,args__37299__auto___43624));
})();
if(cljs.core.truth_(temp__5735__auto___43634)){
var error__37300__auto___43635 = temp__5735__auto___43634;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"negate-filter-clause","negate-filter-clause",1540259292,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","Filter","mbql.s/Filter",650308569,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return the logical compliment of an MBQL filter clause, generally without using `:not` (except for the string\n  filter clause types). Useful for generating highly optimized filter clauses and for drivers that do not support\n  top-level `:not` filter clauses."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__37300__auto___43635], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema42887_43616,new cljs.core.Keyword(null,"value","value",305978217),args__37299__auto___43624,new cljs.core.Keyword(null,"error","error",-978969032),error__37300__auto___43635], null));
} else {
}
}
} else {
}

var o__37301__auto__ = (function (){var filter_clause = G__42890;
while(true){
return metabase.mbql.util.simplify_compound_filter(metabase.mbql.util.negate_STAR_.cljs$core$IFn$_invoke$arity$1(metabase.mbql.util.desugar_filter_clause(filter_clause)));
break;
}
})();
if(cljs.core.truth_(validate__37298__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
var G__42897_43640 = new cljs.core.Keyword(null,"output","output",-1105869043);
var G__42898_43641 = cljs.core.with_meta(new cljs.core.Symbol(null,"negate-filter-clause","negate-filter-clause",1540259292,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","Filter","mbql.s/Filter",650308569,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return the logical compliment of an MBQL filter clause, generally without using `:not` (except for the string\n  filter clause types). Useful for generating highly optimized filter clauses and for drivers that do not support\n  top-level `:not` filter clauses."], null));
var G__42899_43642 = output_schema42886_43615;
var G__42900_43643 = cljs.core.deref(output_checker42889_43618);
var G__42901_43644 = o__37301__auto__;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__42897_43640,G__42898_43641,G__42899_43642,G__42900_43643,G__42901_43644) : schema.core.fn_validator.call(null,G__42897_43640,G__42898_43641,G__42899_43642,G__42900_43643,G__42901_43644));
} else {
var temp__5735__auto___43645 = (function (){var fexpr__42902 = cljs.core.deref(output_checker42889_43618);
return (fexpr__42902.cljs$core$IFn$_invoke$arity$1 ? fexpr__42902.cljs$core$IFn$_invoke$arity$1(o__37301__auto__) : fexpr__42902.call(null,o__37301__auto__));
})();
if(cljs.core.truth_(temp__5735__auto___43645)){
var error__37300__auto___43646 = temp__5735__auto___43645;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"negate-filter-clause","negate-filter-clause",1540259292,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","Filter","mbql.s/Filter",650308569,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return the logical compliment of an MBQL filter clause, generally without using `:not` (except for the string\n  filter clause types). Useful for generating highly optimized filter clauses and for drivers that do not support\n  top-level `:not` filter clauses."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__37300__auto___43646], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema42886_43615,new cljs.core.Keyword(null,"value","value",305978217),o__37301__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37300__auto___43646], null));
} else {
}
}
} else {
}

return o__37301__auto__;
});
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(metabase.mbql.util.negate_filter_clause),schema.core.__GT_FnSchema(output_schema42886_43615,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema42887_43616], null)));

var ufv___43647 = schema.utils.use_fn_validation;
var output_schema42903_43648 = schema.core.maybe(metabase.mbql.schema.helpers.IntGreaterThanZero);
var input_schema42904_43649 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);
var input_checker42905_43650 = (new cljs.core.Delay((function (){
return schema.core.checker(input_schema42904_43649);
}),null));
var output_checker42906_43651 = (new cljs.core.Delay((function (){
return schema.core.checker(output_schema42903_43648);
}),null));
var ret__39378__auto___43652 = /**
 * Inputs: [{{source-table-id :source-table, source-query :source-query} :query, query-type :type, :as query}]
 *   Returns: (s/maybe schema.helpers/IntGreaterThanZero)
 * 
 *   Return the source Table ID associated with `query`, if applicable; handles nested queries as well. If `query` is
 *   `nil`, returns `nil`.
 * 
 *   Throws an Exception when it encounters a unresolved source query (i.e., the `:source-table "card__id"`
 *   form), because it cannot return an accurate result for a query that has not yet been preprocessed.
 */
metabase.mbql.util.query__GT_source_table_id = (function metabase$mbql$util$query__GT_source_table_id(G__42907){
var validate__37298__auto__ = cljs.core.deref(ufv___43647);
if(cljs.core.truth_(validate__37298__auto__)){
var args__37299__auto___43654 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__42907], null);
if(cljs.core.truth_(schema.core.fn_validator)){
var G__42908_43655 = new cljs.core.Keyword(null,"input","input",556931961);
var G__42909_43656 = cljs.core.with_meta(new cljs.core.Symbol(null,"query->source-table-id","query->source-table-id",246142827,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),new cljs.core.Symbol("schema.helpers","IntGreaterThanZero","schema.helpers/IntGreaterThanZero",-728908174,null)),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"outer-query","outer-query",-395069361,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return the source Table ID associated with `query`, if applicable; handles nested queries as well. If `query` is\n  `nil`, returns `nil`.\n\n  Throws an Exception when it encounters a unresolved source query (i.e., the `:source-table \"card__id\"`\n  form), because it cannot return an accurate result for a query that has not yet been preprocessed."], null));
var G__42910_43657 = input_schema42904_43649;
var G__42911_43658 = cljs.core.deref(input_checker42905_43650);
var G__42912_43659 = args__37299__auto___43654;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__42908_43655,G__42909_43656,G__42910_43657,G__42911_43658,G__42912_43659) : schema.core.fn_validator.call(null,G__42908_43655,G__42909_43656,G__42910_43657,G__42911_43658,G__42912_43659));
} else {
var temp__5735__auto___43664 = (function (){var fexpr__42913 = cljs.core.deref(input_checker42905_43650);
return (fexpr__42913.cljs$core$IFn$_invoke$arity$1 ? fexpr__42913.cljs$core$IFn$_invoke$arity$1(args__37299__auto___43654) : fexpr__42913.call(null,args__37299__auto___43654));
})();
if(cljs.core.truth_(temp__5735__auto___43664)){
var error__37300__auto___43668 = temp__5735__auto___43664;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"query->source-table-id","query->source-table-id",246142827,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),new cljs.core.Symbol("schema.helpers","IntGreaterThanZero","schema.helpers/IntGreaterThanZero",-728908174,null)),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"outer-query","outer-query",-395069361,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return the source Table ID associated with `query`, if applicable; handles nested queries as well. If `query` is\n  `nil`, returns `nil`.\n\n  Throws an Exception when it encounters a unresolved source query (i.e., the `:source-table \"card__id\"`\n  form), because it cannot return an accurate result for a query that has not yet been preprocessed."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__37300__auto___43668], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema42904_43649,new cljs.core.Keyword(null,"value","value",305978217),args__37299__auto___43654,new cljs.core.Keyword(null,"error","error",-978969032),error__37300__auto___43668], null));
} else {
}
}
} else {
}

var o__37301__auto__ = (function (){var G__42916 = G__42907;
var map__42917 = G__42916;
var map__42917__$1 = (((((!((map__42917 == null))))?(((((map__42917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42917.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42917):map__42917);
var query = map__42917__$1;
var map__42918 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42917__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var map__42918__$1 = (((((!((map__42918 == null))))?(((((map__42918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42918.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42918):map__42918);
var source_table_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42918__$1,new cljs.core.Keyword(null,"source-table","source-table",-225307692));
var source_query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42918__$1,new cljs.core.Keyword(null,"source-query","source-query",198004422));
var query_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42917__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var G__42916__$1 = G__42916;
while(true){
var map__42921 = G__42916__$1;
var map__42921__$1 = (((((!((map__42921 == null))))?(((((map__42921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42921.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42921):map__42921);
var query__$1 = map__42921__$1;
var map__42922 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42921__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var map__42922__$1 = (((((!((map__42922 == null))))?(((((map__42922.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42922.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42922):map__42922);
var source_table_id__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42922__$1,new cljs.core.Keyword(null,"source-table","source-table",-225307692));
var source_query__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42922__$1,new cljs.core.Keyword(null,"source-query","source-query",198004422));
var query_type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42921__$1,new cljs.core.Keyword(null,"type","type",1174270348));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(query_type__$1,new cljs.core.Keyword(null,"query","query",-1288509510))){
return null;
} else {
if(cljs.core.truth_((((source_table_id__$1 == null))?(function (){var and__4115__auto__ = source_query__$1;
if(cljs.core.truth_(and__4115__auto__)){
return new cljs.core.Keyword(null,"native","native",-613060878).cljs$core$IFn$_invoke$arity$1(source_query__$1);
} else {
return and__4115__auto__;
}
})():false))){
return null;
} else {
if(cljs.core.truth_((((source_table_id__$1 == null))?source_query__$1:false))){
var G__43679 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(query__$1,new cljs.core.Keyword(null,"query","query",-1288509510),source_query__$1);
G__42916__$1 = G__43679;
continue;
} else {
if(cljs.core.truth_(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.re_matches,metabase.mbql.schema.source_table_card_id_regex))(source_table_id__$1))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(metabase.shared.util.i18n.js_i18n("Error: query''s source query has not been resolved. You probably need to `preprocess` the query first."),cljs.core.PersistentArrayMap.EMPTY);
} else {
return source_table_id__$1;

}
}
}
}
break;
}
})();
if(cljs.core.truth_(validate__37298__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
var G__42926_43681 = new cljs.core.Keyword(null,"output","output",-1105869043);
var G__42927_43682 = cljs.core.with_meta(new cljs.core.Symbol(null,"query->source-table-id","query->source-table-id",246142827,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),new cljs.core.Symbol("schema.helpers","IntGreaterThanZero","schema.helpers/IntGreaterThanZero",-728908174,null)),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"outer-query","outer-query",-395069361,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return the source Table ID associated with `query`, if applicable; handles nested queries as well. If `query` is\n  `nil`, returns `nil`.\n\n  Throws an Exception when it encounters a unresolved source query (i.e., the `:source-table \"card__id\"`\n  form), because it cannot return an accurate result for a query that has not yet been preprocessed."], null));
var G__42928_43683 = output_schema42903_43648;
var G__42929_43684 = cljs.core.deref(output_checker42906_43651);
var G__42930_43685 = o__37301__auto__;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__42926_43681,G__42927_43682,G__42928_43683,G__42929_43684,G__42930_43685) : schema.core.fn_validator.call(null,G__42926_43681,G__42927_43682,G__42928_43683,G__42929_43684,G__42930_43685));
} else {
var temp__5735__auto___43686 = (function (){var fexpr__42931 = cljs.core.deref(output_checker42906_43651);
return (fexpr__42931.cljs$core$IFn$_invoke$arity$1 ? fexpr__42931.cljs$core$IFn$_invoke$arity$1(o__37301__auto__) : fexpr__42931.call(null,o__37301__auto__));
})();
if(cljs.core.truth_(temp__5735__auto___43686)){
var error__37300__auto___43687 = temp__5735__auto___43686;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"query->source-table-id","query->source-table-id",246142827,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),new cljs.core.Symbol("schema.helpers","IntGreaterThanZero","schema.helpers/IntGreaterThanZero",-728908174,null)),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"outer-query","outer-query",-395069361,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return the source Table ID associated with `query`, if applicable; handles nested queries as well. If `query` is\n  `nil`, returns `nil`.\n\n  Throws an Exception when it encounters a unresolved source query (i.e., the `:source-table \"card__id\"`\n  form), because it cannot return an accurate result for a query that has not yet been preprocessed."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__37300__auto___43687], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema42903_43648,new cljs.core.Keyword(null,"value","value",305978217),o__37301__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37300__auto___43687], null));
} else {
}
}
} else {
}

return o__37301__auto__;
});
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(metabase.mbql.util.query__GT_source_table_id),schema.core.__GT_FnSchema(output_schema42903_43648,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema42904_43649], null)));

var ufv___43698 = schema.utils.use_fn_validation;
var output_schema42932_43699 = schema.core.maybe(metabase.mbql.schema.helpers.IntGreaterThanZero);
var input_schema42933_43700 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"join","join",881669637,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker42934_43701 = (new cljs.core.Delay((function (){
return schema.core.checker(input_schema42933_43700);
}),null));
var output_checker42935_43702 = (new cljs.core.Delay((function (){
return schema.core.checker(output_schema42932_43699);
}),null));
var ret__39378__auto___43707 = /**
 * Inputs: [join]
 *   Returns: (s/maybe schema.helpers/IntGreaterThanZero)
 * 
 *   Like `query->source-table-id`, but for a join.
 */
metabase.mbql.util.join__GT_source_table_id = (function metabase$mbql$util$join__GT_source_table_id(G__42936){
var validate__37298__auto__ = cljs.core.deref(ufv___43698);
if(cljs.core.truth_(validate__37298__auto__)){
var args__37299__auto___43710 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__42936], null);
if(cljs.core.truth_(schema.core.fn_validator)){
var G__42937_43711 = new cljs.core.Keyword(null,"input","input",556931961);
var G__42938_43712 = cljs.core.with_meta(new cljs.core.Symbol(null,"join->source-table-id","join->source-table-id",1032348273,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),new cljs.core.Symbol("schema.helpers","IntGreaterThanZero","schema.helpers/IntGreaterThanZero",-728908174,null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Like `query->source-table-id`, but for a join."], null));
var G__42939_43713 = input_schema42933_43700;
var G__42940_43714 = cljs.core.deref(input_checker42934_43701);
var G__42941_43715 = args__37299__auto___43710;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__42937_43711,G__42938_43712,G__42939_43713,G__42940_43714,G__42941_43715) : schema.core.fn_validator.call(null,G__42937_43711,G__42938_43712,G__42939_43713,G__42940_43714,G__42941_43715));
} else {
var temp__5735__auto___43719 = (function (){var fexpr__42942 = cljs.core.deref(input_checker42934_43701);
return (fexpr__42942.cljs$core$IFn$_invoke$arity$1 ? fexpr__42942.cljs$core$IFn$_invoke$arity$1(args__37299__auto___43710) : fexpr__42942.call(null,args__37299__auto___43710));
})();
if(cljs.core.truth_(temp__5735__auto___43719)){
var error__37300__auto___43721 = temp__5735__auto___43719;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"join->source-table-id","join->source-table-id",1032348273,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),new cljs.core.Symbol("schema.helpers","IntGreaterThanZero","schema.helpers/IntGreaterThanZero",-728908174,null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Like `query->source-table-id`, but for a join."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__37300__auto___43721], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema42933_43700,new cljs.core.Keyword(null,"value","value",305978217),args__37299__auto___43710,new cljs.core.Keyword(null,"error","error",-978969032),error__37300__auto___43721], null));
} else {
}
}
} else {
}

var o__37301__auto__ = (function (){var join = G__42936;
while(true){
return metabase.mbql.util.query__GT_source_table_id(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"query","query",-1288509510),join], null));
break;
}
})();
if(cljs.core.truth_(validate__37298__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
var G__42943_43724 = new cljs.core.Keyword(null,"output","output",-1105869043);
var G__42944_43725 = cljs.core.with_meta(new cljs.core.Symbol(null,"join->source-table-id","join->source-table-id",1032348273,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),new cljs.core.Symbol("schema.helpers","IntGreaterThanZero","schema.helpers/IntGreaterThanZero",-728908174,null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Like `query->source-table-id`, but for a join."], null));
var G__42945_43726 = output_schema42932_43699;
var G__42946_43727 = cljs.core.deref(output_checker42935_43702);
var G__42947_43728 = o__37301__auto__;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__42943_43724,G__42944_43725,G__42945_43726,G__42946_43727,G__42947_43728) : schema.core.fn_validator.call(null,G__42943_43724,G__42944_43725,G__42945_43726,G__42946_43727,G__42947_43728));
} else {
var temp__5735__auto___43730 = (function (){var fexpr__42948 = cljs.core.deref(output_checker42935_43702);
return (fexpr__42948.cljs$core$IFn$_invoke$arity$1 ? fexpr__42948.cljs$core$IFn$_invoke$arity$1(o__37301__auto__) : fexpr__42948.call(null,o__37301__auto__));
})();
if(cljs.core.truth_(temp__5735__auto___43730)){
var error__37300__auto___43731 = temp__5735__auto___43730;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"join->source-table-id","join->source-table-id",1032348273,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),new cljs.core.Symbol("schema.helpers","IntGreaterThanZero","schema.helpers/IntGreaterThanZero",-728908174,null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Like `query->source-table-id`, but for a join."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__37300__auto___43731], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema42932_43699,new cljs.core.Keyword(null,"value","value",305978217),o__37301__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37300__auto___43731], null));
} else {
}
}
} else {
}

return o__37301__auto__;
});
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(metabase.mbql.util.join__GT_source_table_id),schema.core.__GT_FnSchema(output_schema42932_43699,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema42933_43700], null)));

var ufv___43733 = schema.utils.use_fn_validation;
var output_schema42949_43734 = metabase.mbql.schema.MBQLQuery;
var input_schema42950_43735 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(metabase.mbql.schema.MBQLQuery,cljs.core.with_meta(new cljs.core.Symbol(null,"inner-query","inner-query",-907556093,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","MBQLQuery","mbql.s/MBQLQuery",-332777720,null)], null))),schema.core.one(metabase.mbql.schema.OrderBy,new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker42951_43736 = (new cljs.core.Delay((function (){
return schema.core.checker(input_schema42950_43735);
}),null));
var output_checker42952_43737 = (new cljs.core.Delay((function (){
return schema.core.checker(output_schema42949_43734);
}),null));
var ret__39378__auto___43739 = /**
 * Inputs: [inner-query :- mbql.s/MBQLQuery [_ [_ id-or-name :as field] :as order-by-clause] :- mbql.s/OrderBy]
 *   Returns: mbql.s/MBQLQuery
 * 
 *   Add a new `:order-by` clause to an MBQL `inner-query`. If the new order-by clause references a Field that is
 *   already being used in another order-by clause, this function does nothing.
 */
metabase.mbql.util.add_order_by_clause = (function metabase$mbql$util$add_order_by_clause(G__42953,G__42954){
var validate__37298__auto__ = cljs.core.deref(ufv___43733);
if(cljs.core.truth_(validate__37298__auto__)){
var args__37299__auto___43741 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__42953,G__42954], null);
if(cljs.core.truth_(schema.core.fn_validator)){
var G__42955_43742 = new cljs.core.Keyword(null,"input","input",556931961);
var G__42956_43743 = cljs.core.with_meta(new cljs.core.Symbol(null,"add-order-by-clause","add-order-by-clause",240938699,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","MBQLQuery","mbql.s/MBQLQuery",-332777720,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Add a new `:order-by` clause to an MBQL `inner-query`. If the new order-by clause references a Field that is\n  already being used in another order-by clause, this function does nothing."], null));
var G__42957_43744 = input_schema42950_43735;
var G__42958_43745 = cljs.core.deref(input_checker42951_43736);
var G__42959_43746 = args__37299__auto___43741;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__42955_43742,G__42956_43743,G__42957_43744,G__42958_43745,G__42959_43746) : schema.core.fn_validator.call(null,G__42955_43742,G__42956_43743,G__42957_43744,G__42958_43745,G__42959_43746));
} else {
var temp__5735__auto___43747 = (function (){var fexpr__42960 = cljs.core.deref(input_checker42951_43736);
return (fexpr__42960.cljs$core$IFn$_invoke$arity$1 ? fexpr__42960.cljs$core$IFn$_invoke$arity$1(args__37299__auto___43741) : fexpr__42960.call(null,args__37299__auto___43741));
})();
if(cljs.core.truth_(temp__5735__auto___43747)){
var error__37300__auto___43749 = temp__5735__auto___43747;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"add-order-by-clause","add-order-by-clause",240938699,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","MBQLQuery","mbql.s/MBQLQuery",-332777720,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Add a new `:order-by` clause to an MBQL `inner-query`. If the new order-by clause references a Field that is\n  already being used in another order-by clause, this function does nothing."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__37300__auto___43749], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema42950_43735,new cljs.core.Keyword(null,"value","value",305978217),args__37299__auto___43741,new cljs.core.Keyword(null,"error","error",-978969032),error__37300__auto___43749], null));
} else {
}
}
} else {
}

var o__37301__auto__ = (function (){var inner_query = G__42953;
var G__42967 = G__42954;
var vec__42968 = G__42967;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42968,(0),null);
var vec__42971 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42968,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42971,(0),null);
var id_or_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42971,(1),null);
var field = vec__42971;
var order_by_clause = vec__42968;
var inner_query__$1 = inner_query;
var G__42967__$1 = G__42967;
while(true){
var inner_query__$2 = inner_query__$1;
var vec__42974 = G__42967__$1;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42974,(0),null);
var vec__42977 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42974,(1),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42977,(0),null);
var id_or_name__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42977,(1),null);
var field__$1 = vec__42977;
var order_by_clause__$1 = vec__42974;
var existing_fields = cljs.core.set((function (){var iter__4529__auto__ = ((function (inner_query__$2,vec__42974,___$2,vec__42977,___$3,id_or_name__$1,field__$1,order_by_clause__$1,inner_query,G__42967,vec__42968,_,vec__42971,___$1,id_or_name,field,order_by_clause,validate__37298__auto__,ufv___43733,output_schema42949_43734,input_schema42950_43735,input_checker42951_43736,output_checker42952_43737){
return (function metabase$mbql$util$add_order_by_clause_$_iter__42980(s__42981){
return (new cljs.core.LazySeq(null,(function (){
var s__42981__$1 = s__42981;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__42981__$1);
if(temp__5735__auto__){
var s__42981__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42981__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__42981__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__42983 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__42982 = (0);
while(true){
if((i__42982 < size__4528__auto__)){
var vec__42984 = cljs.core._nth(c__4527__auto__,i__42982);
var ___$4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42984,(0),null);
var vec__42987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42984,(1),null);
var ___$5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42987,(0),null);
var id_or_name__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42987,(1),null);
cljs.core.chunk_append(b__42983,id_or_name__$2);

var G__43752 = (i__42982 + (1));
i__42982 = G__43752;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42983),metabase$mbql$util$add_order_by_clause_$_iter__42980(cljs.core.chunk_rest(s__42981__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42983),null);
}
} else {
var vec__42990 = cljs.core.first(s__42981__$2);
var ___$4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42990,(0),null);
var vec__42993 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42990,(1),null);
var ___$5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42993,(0),null);
var id_or_name__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42993,(1),null);
return cljs.core.cons(id_or_name__$2,metabase$mbql$util$add_order_by_clause_$_iter__42980(cljs.core.rest(s__42981__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(inner_query__$2,vec__42974,___$2,vec__42977,___$3,id_or_name__$1,field__$1,order_by_clause__$1,inner_query,G__42967,vec__42968,_,vec__42971,___$1,id_or_name,field,order_by_clause,validate__37298__auto__,ufv___43733,output_schema42949_43734,input_schema42950_43735,input_checker42951_43736,output_checker42952_43737))
;
return iter__4529__auto__(new cljs.core.Keyword(null,"order-by","order-by",1527318070).cljs$core$IFn$_invoke$arity$1(inner_query__$2));
})());
if(cljs.core.truth_((existing_fields.cljs$core$IFn$_invoke$arity$1 ? existing_fields.cljs$core$IFn$_invoke$arity$1(id_or_name__$1) : existing_fields.call(null,id_or_name__$1)))){
return inner_query__$2;
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(inner_query__$2,new cljs.core.Keyword(null,"order-by","order-by",1527318070),cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.vec,cljs.core.distinct,cljs.core.conj),order_by_clause__$1);
}
break;
}
})();
if(cljs.core.truth_(validate__37298__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
var G__42996_43757 = new cljs.core.Keyword(null,"output","output",-1105869043);
var G__42997_43758 = cljs.core.with_meta(new cljs.core.Symbol(null,"add-order-by-clause","add-order-by-clause",240938699,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","MBQLQuery","mbql.s/MBQLQuery",-332777720,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Add a new `:order-by` clause to an MBQL `inner-query`. If the new order-by clause references a Field that is\n  already being used in another order-by clause, this function does nothing."], null));
var G__42998_43759 = output_schema42949_43734;
var G__42999_43760 = cljs.core.deref(output_checker42952_43737);
var G__43000_43761 = o__37301__auto__;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__42996_43757,G__42997_43758,G__42998_43759,G__42999_43760,G__43000_43761) : schema.core.fn_validator.call(null,G__42996_43757,G__42997_43758,G__42998_43759,G__42999_43760,G__43000_43761));
} else {
var temp__5735__auto___43762 = (function (){var fexpr__43001 = cljs.core.deref(output_checker42952_43737);
return (fexpr__43001.cljs$core$IFn$_invoke$arity$1 ? fexpr__43001.cljs$core$IFn$_invoke$arity$1(o__37301__auto__) : fexpr__43001.call(null,o__37301__auto__));
})();
if(cljs.core.truth_(temp__5735__auto___43762)){
var error__37300__auto___43763 = temp__5735__auto___43762;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"add-order-by-clause","add-order-by-clause",240938699,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","MBQLQuery","mbql.s/MBQLQuery",-332777720,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Add a new `:order-by` clause to an MBQL `inner-query`. If the new order-by clause references a Field that is\n  already being used in another order-by clause, this function does nothing."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__37300__auto___43763], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema42949_43734,new cljs.core.Keyword(null,"value","value",305978217),o__37301__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37300__auto___43763], null));
} else {
}
}
} else {
}

return o__37301__auto__;
});
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(metabase.mbql.util.add_order_by_clause),schema.core.__GT_FnSchema(output_schema42949_43734,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema42950_43735], null)));

/**
 * Dispatch function perfect for use with multimethods that dispatch off elements of an MBQL query. If `x` is an MBQL
 *   clause, dispatches off the clause name; otherwise dispatches off `x`'s class.
 */
metabase.mbql.util.dispatch_by_clause_name_or_class = (function metabase$mbql$util$dispatch_by_clause_name_or_class(var_args){
var G__43003 = arguments.length;
switch (G__43003) {
case 1:
return metabase.mbql.util.dispatch_by_clause_name_or_class.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return metabase.mbql.util.dispatch_by_clause_name_or_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.mbql.util.dispatch_by_clause_name_or_class.cljs$core$IFn$_invoke$arity$1 = (function (x){
if(metabase.mbql.util.mbql_clause_QMARK_(x)){
return cljs.core.first(x);
} else {
return cljs.core.type(x);
}
}));

(metabase.mbql.util.dispatch_by_clause_name_or_class.cljs$core$IFn$_invoke$arity$2 = (function (x,_){
return metabase.mbql.util.dispatch_by_clause_name_or_class.cljs$core$IFn$_invoke$arity$1(x);
}));

(metabase.mbql.util.dispatch_by_clause_name_or_class.cljs$lang$maxFixedArity = 2);

var ufv___43770 = schema.utils.use_fn_validation;
var output_schema43004_43771 = metabase.mbql.schema.FieldOrExpressionDef;
var input_schema43005_43772 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"inner-query","inner-query",-907556093,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one(schema.core.cond_pre.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([schema.core.Keyword,metabase.mbql.schema.helpers.NonBlankString], 0)),cljs.core.with_meta(new cljs.core.Symbol(null,"expression-name","expression-name",-157919182,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","cond-pre","s/cond-pre",-923707600,null),new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("schema.helpers","NonBlankString","schema.helpers/NonBlankString",1984244415,null))], null)))], null);
var input_checker43006_43773 = (new cljs.core.Delay((function (){
return schema.core.checker(input_schema43005_43772);
}),null));
var output_checker43007_43774 = (new cljs.core.Delay((function (){
return schema.core.checker(output_schema43004_43771);
}),null));
var ret__39378__auto___43777 = /**
 * Inputs: [inner-query expression-name :- (s/cond-pre s/Keyword schema.helpers/NonBlankString)]
 *   Returns: mbql.s/FieldOrExpressionDef
 * 
 *   Return the `Expression` referenced by a given `expression-name`.
 */
metabase.mbql.util.expression_with_name = (function metabase$mbql$util$expression_with_name(G__43008,G__43009){
var validate__37298__auto__ = cljs.core.deref(ufv___43770);
if(cljs.core.truth_(validate__37298__auto__)){
var args__37299__auto___43778 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__43008,G__43009], null);
if(cljs.core.truth_(schema.core.fn_validator)){
var G__43010_43779 = new cljs.core.Keyword(null,"input","input",556931961);
var G__43011_43780 = cljs.core.with_meta(new cljs.core.Symbol(null,"expression-with-name","expression-with-name",-417674245,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","FieldOrExpressionDef","mbql.s/FieldOrExpressionDef",-1851966074,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return the `Expression` referenced by a given `expression-name`."], null));
var G__43012_43781 = input_schema43005_43772;
var G__43013_43782 = cljs.core.deref(input_checker43006_43773);
var G__43014_43783 = args__37299__auto___43778;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__43010_43779,G__43011_43780,G__43012_43781,G__43013_43782,G__43014_43783) : schema.core.fn_validator.call(null,G__43010_43779,G__43011_43780,G__43012_43781,G__43013_43782,G__43014_43783));
} else {
var temp__5735__auto___43784 = (function (){var fexpr__43015 = cljs.core.deref(input_checker43006_43773);
return (fexpr__43015.cljs$core$IFn$_invoke$arity$1 ? fexpr__43015.cljs$core$IFn$_invoke$arity$1(args__37299__auto___43778) : fexpr__43015.call(null,args__37299__auto___43778));
})();
if(cljs.core.truth_(temp__5735__auto___43784)){
var error__37300__auto___43787 = temp__5735__auto___43784;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"expression-with-name","expression-with-name",-417674245,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","FieldOrExpressionDef","mbql.s/FieldOrExpressionDef",-1851966074,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return the `Expression` referenced by a given `expression-name`."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__37300__auto___43787], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema43005_43772,new cljs.core.Keyword(null,"value","value",305978217),args__37299__auto___43778,new cljs.core.Keyword(null,"error","error",-978969032),error__37300__auto___43787], null));
} else {
}
}
} else {
}

var o__37301__auto__ = (function (){var inner_query = G__43008;
var expression_name = G__43009;
while(true){
var allowed_names = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.mbql.util.qualified_name(expression_name),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(expression_name)], null);
var G__43017 = inner_query;
var map__43018 = G__43017;
var map__43018__$1 = (((((!((map__43018 == null))))?(((((map__43018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43018.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43018):map__43018);
var expressions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43018__$1,new cljs.core.Keyword(null,"expressions","expressions",255689909));
var source_query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43018__$1,new cljs.core.Keyword(null,"source-query","source-query",198004422));
var found = cljs.core.PersistentHashSet.EMPTY;
var G__43017__$1 = G__43017;
var found__$1 = found;
while(true){
var map__43022 = G__43017__$1;
var map__43022__$1 = (((((!((map__43022 == null))))?(((((map__43022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43022.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43022):map__43022);
var expressions__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43022__$1,new cljs.core.Keyword(null,"expressions","expressions",255689909));
var source_query__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43022__$1,new cljs.core.Keyword(null,"source-query","source-query",198004422));
var found__$2 = found__$1;
var or__4126__auto__ = cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.get,expressions__$1),allowed_names);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var found__$3 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(found__$2,cljs.core.keys(expressions__$1));
if(cljs.core.truth_(source_query__$1)){
var G__43794 = source_query__$1;
var G__43795 = found__$3;
G__43017__$1 = G__43794;
found__$1 = G__43795;
continue;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("No expression named ''{0}''",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.mbql.util.qualified_name(expression_name)], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"invalid-query","invalid-query",-1009703371),new cljs.core.Keyword(null,"expression-name","expression-name",-1798450709),expression_name,new cljs.core.Keyword(null,"tried","tried",-1728444308),allowed_names,new cljs.core.Keyword(null,"found","found",-584700170),found__$3], null));
}
}
break;
}
break;
}
})();
if(cljs.core.truth_(validate__37298__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
var G__43024_43796 = new cljs.core.Keyword(null,"output","output",-1105869043);
var G__43025_43797 = cljs.core.with_meta(new cljs.core.Symbol(null,"expression-with-name","expression-with-name",-417674245,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","FieldOrExpressionDef","mbql.s/FieldOrExpressionDef",-1851966074,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return the `Expression` referenced by a given `expression-name`."], null));
var G__43026_43798 = output_schema43004_43771;
var G__43027_43799 = cljs.core.deref(output_checker43007_43774);
var G__43028_43800 = o__37301__auto__;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__43024_43796,G__43025_43797,G__43026_43798,G__43027_43799,G__43028_43800) : schema.core.fn_validator.call(null,G__43024_43796,G__43025_43797,G__43026_43798,G__43027_43799,G__43028_43800));
} else {
var temp__5735__auto___43801 = (function (){var fexpr__43029 = cljs.core.deref(output_checker43007_43774);
return (fexpr__43029.cljs$core$IFn$_invoke$arity$1 ? fexpr__43029.cljs$core$IFn$_invoke$arity$1(o__37301__auto__) : fexpr__43029.call(null,o__37301__auto__));
})();
if(cljs.core.truth_(temp__5735__auto___43801)){
var error__37300__auto___43802 = temp__5735__auto___43801;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"expression-with-name","expression-with-name",-417674245,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","FieldOrExpressionDef","mbql.s/FieldOrExpressionDef",-1851966074,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return the `Expression` referenced by a given `expression-name`."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__37300__auto___43802], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema43004_43771,new cljs.core.Keyword(null,"value","value",305978217),o__37301__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37300__auto___43802], null));
} else {
}
}
} else {
}

return o__37301__auto__;
});
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(metabase.mbql.util.expression_with_name),schema.core.__GT_FnSchema(output_schema43004_43771,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema43005_43772], null)));

var ufv___43804 = schema.utils.use_fn_validation;
var output_schema43030_43805 = metabase.mbql.schema.Aggregation;
var input_schema43031_43806 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"query","query",352022017,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_schema43036_43807 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(metabase.mbql.schema.Query,cljs.core.with_meta(new cljs.core.Symbol(null,"query","query",352022017,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","Query","mbql.s/Query",1061827921,null)], null))),schema.core.one(metabase.mbql.schema.helpers.IntGreaterThanOrEqualToZero,cljs.core.with_meta(new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.helpers","IntGreaterThanOrEqualToZero","schema.helpers/IntGreaterThanOrEqualToZero",-1218348852,null)], null))),schema.core.one(metabase.mbql.schema.helpers.IntGreaterThanOrEqualToZero,cljs.core.with_meta(new cljs.core.Symbol(null,"nesting-level","nesting-level",-2057556677,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.helpers","IntGreaterThanOrEqualToZero","schema.helpers/IntGreaterThanOrEqualToZero",-1218348852,null)], null)))], null);
var input_checker43032_43808 = (new cljs.core.Delay((function (){
return schema.core.checker(input_schema43031_43806);
}),null));
var output_checker43033_43809 = (new cljs.core.Delay((function (){
return schema.core.checker(output_schema43030_43805);
}),null));
var input_checker43037_43810 = (new cljs.core.Delay((function (){
return schema.core.checker(input_schema43036_43807);
}),null));
var output_checker43038_43811 = (new cljs.core.Delay((function (){
return schema.core.checker(output_schema43030_43805);
}),null));
var ret__39378__auto___43815 = (function (){
/**
 * Inputs: ([query index] [query :- mbql.s/Query index :- schema.helpers/IntGreaterThanOrEqualToZero nesting-level :- schema.helpers/IntGreaterThanOrEqualToZero])
 *   Returns: mbql.s/Aggregation
 * 
 *   Fetch the aggregation at index. This is intended to power aggregate field references (e.g. [:aggregation 0]).
 * This also handles nested queries, which could be potentially ambiguous if multiple levels had aggregations. To
 * support nested queries, you'll need to keep tract of how many `:source-query`s deep you've traveled; pass in this
 * number to as optional arg `nesting-level` to make sure you reference aggregations at the right level of nesting.
 */
metabase.mbql.util.aggregation_at_index = (function metabase$mbql$util$aggregation_at_index(var_args){
var G__43043 = arguments.length;
switch (G__43043) {
case 2:
return metabase.mbql.util.aggregation_at_index.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return metabase.mbql.util.aggregation_at_index.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.mbql.util.aggregation_at_index.cljs$core$IFn$_invoke$arity$2 = (function (G__43034,G__43035){
var validate__37298__auto__ = cljs.core.deref(ufv___43804);
if(cljs.core.truth_(validate__37298__auto__)){
var args__37299__auto___43818 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__43034,G__43035], null);
if(cljs.core.truth_(schema.core.fn_validator)){
var G__43044_43819 = new cljs.core.Keyword(null,"input","input",556931961);
var G__43045_43820 = cljs.core.with_meta(new cljs.core.Symbol(null,"aggregation-at-index","aggregation-at-index",1145258383,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","Aggregation","mbql.s/Aggregation",124504849,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Fetch the aggregation at index. This is intended to power aggregate field references (e.g. [:aggregation 0]).\n   This also handles nested queries, which could be potentially ambiguous if multiple levels had aggregations. To\n   support nested queries, you'll need to keep tract of how many `:source-query`s deep you've traveled; pass in this\n   number to as optional arg `nesting-level` to make sure you reference aggregations at the right level of nesting."], null));
var G__43046_43821 = input_schema43031_43806;
var G__43047_43822 = cljs.core.deref(input_checker43032_43808);
var G__43048_43823 = args__37299__auto___43818;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__43044_43819,G__43045_43820,G__43046_43821,G__43047_43822,G__43048_43823) : schema.core.fn_validator.call(null,G__43044_43819,G__43045_43820,G__43046_43821,G__43047_43822,G__43048_43823));
} else {
var temp__5735__auto___43828 = (function (){var fexpr__43049 = cljs.core.deref(input_checker43032_43808);
return (fexpr__43049.cljs$core$IFn$_invoke$arity$1 ? fexpr__43049.cljs$core$IFn$_invoke$arity$1(args__37299__auto___43818) : fexpr__43049.call(null,args__37299__auto___43818));
})();
if(cljs.core.truth_(temp__5735__auto___43828)){
var error__37300__auto___43829 = temp__5735__auto___43828;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"aggregation-at-index","aggregation-at-index",1145258383,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","Aggregation","mbql.s/Aggregation",124504849,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Fetch the aggregation at index. This is intended to power aggregate field references (e.g. [:aggregation 0]).\n   This also handles nested queries, which could be potentially ambiguous if multiple levels had aggregations. To\n   support nested queries, you'll need to keep tract of how many `:source-query`s deep you've traveled; pass in this\n   number to as optional arg `nesting-level` to make sure you reference aggregations at the right level of nesting."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__37300__auto___43829], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema43031_43806,new cljs.core.Keyword(null,"value","value",305978217),args__37299__auto___43818,new cljs.core.Keyword(null,"error","error",-978969032),error__37300__auto___43829], null));
} else {
}
}
} else {
}

var o__37301__auto__ = (function (){var query = G__43034;
var index = G__43035;
while(true){
return metabase.mbql.util.aggregation_at_index.cljs$core$IFn$_invoke$arity$3(query,index,(0));
break;
}
})();
if(cljs.core.truth_(validate__37298__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
var G__43050_43836 = new cljs.core.Keyword(null,"output","output",-1105869043);
var G__43051_43837 = cljs.core.with_meta(new cljs.core.Symbol(null,"aggregation-at-index","aggregation-at-index",1145258383,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","Aggregation","mbql.s/Aggregation",124504849,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Fetch the aggregation at index. This is intended to power aggregate field references (e.g. [:aggregation 0]).\n   This also handles nested queries, which could be potentially ambiguous if multiple levels had aggregations. To\n   support nested queries, you'll need to keep tract of how many `:source-query`s deep you've traveled; pass in this\n   number to as optional arg `nesting-level` to make sure you reference aggregations at the right level of nesting."], null));
var G__43052_43838 = output_schema43030_43805;
var G__43053_43839 = cljs.core.deref(output_checker43033_43809);
var G__43054_43840 = o__37301__auto__;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__43050_43836,G__43051_43837,G__43052_43838,G__43053_43839,G__43054_43840) : schema.core.fn_validator.call(null,G__43050_43836,G__43051_43837,G__43052_43838,G__43053_43839,G__43054_43840));
} else {
var temp__5735__auto___43841 = (function (){var fexpr__43055 = cljs.core.deref(output_checker43033_43809);
return (fexpr__43055.cljs$core$IFn$_invoke$arity$1 ? fexpr__43055.cljs$core$IFn$_invoke$arity$1(o__37301__auto__) : fexpr__43055.call(null,o__37301__auto__));
})();
if(cljs.core.truth_(temp__5735__auto___43841)){
var error__37300__auto___43843 = temp__5735__auto___43841;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"aggregation-at-index","aggregation-at-index",1145258383,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","Aggregation","mbql.s/Aggregation",124504849,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Fetch the aggregation at index. This is intended to power aggregate field references (e.g. [:aggregation 0]).\n   This also handles nested queries, which could be potentially ambiguous if multiple levels had aggregations. To\n   support nested queries, you'll need to keep tract of how many `:source-query`s deep you've traveled; pass in this\n   number to as optional arg `nesting-level` to make sure you reference aggregations at the right level of nesting."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__37300__auto___43843], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema43030_43805,new cljs.core.Keyword(null,"value","value",305978217),o__37301__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37300__auto___43843], null));
} else {
}
}
} else {
}

return o__37301__auto__;
}));

(metabase.mbql.util.aggregation_at_index.cljs$core$IFn$_invoke$arity$3 = (function (G__43039,G__43040,G__43041){
var validate__37298__auto__ = cljs.core.deref(ufv___43804);
if(cljs.core.truth_(validate__37298__auto__)){
var args__37299__auto___43847 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__43039,G__43040,G__43041], null);
if(cljs.core.truth_(schema.core.fn_validator)){
var G__43056_43848 = new cljs.core.Keyword(null,"input","input",556931961);
var G__43057_43849 = cljs.core.with_meta(new cljs.core.Symbol(null,"aggregation-at-index","aggregation-at-index",1145258383,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","Aggregation","mbql.s/Aggregation",124504849,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Fetch the aggregation at index. This is intended to power aggregate field references (e.g. [:aggregation 0]).\n   This also handles nested queries, which could be potentially ambiguous if multiple levels had aggregations. To\n   support nested queries, you'll need to keep tract of how many `:source-query`s deep you've traveled; pass in this\n   number to as optional arg `nesting-level` to make sure you reference aggregations at the right level of nesting."], null));
var G__43058_43850 = input_schema43036_43807;
var G__43059_43851 = cljs.core.deref(input_checker43037_43810);
var G__43060_43852 = args__37299__auto___43847;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__43056_43848,G__43057_43849,G__43058_43850,G__43059_43851,G__43060_43852) : schema.core.fn_validator.call(null,G__43056_43848,G__43057_43849,G__43058_43850,G__43059_43851,G__43060_43852));
} else {
var temp__5735__auto___43855 = (function (){var fexpr__43061 = cljs.core.deref(input_checker43037_43810);
return (fexpr__43061.cljs$core$IFn$_invoke$arity$1 ? fexpr__43061.cljs$core$IFn$_invoke$arity$1(args__37299__auto___43847) : fexpr__43061.call(null,args__37299__auto___43847));
})();
if(cljs.core.truth_(temp__5735__auto___43855)){
var error__37300__auto___43857 = temp__5735__auto___43855;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"aggregation-at-index","aggregation-at-index",1145258383,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","Aggregation","mbql.s/Aggregation",124504849,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Fetch the aggregation at index. This is intended to power aggregate field references (e.g. [:aggregation 0]).\n   This also handles nested queries, which could be potentially ambiguous if multiple levels had aggregations. To\n   support nested queries, you'll need to keep tract of how many `:source-query`s deep you've traveled; pass in this\n   number to as optional arg `nesting-level` to make sure you reference aggregations at the right level of nesting."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__37300__auto___43857], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema43036_43807,new cljs.core.Keyword(null,"value","value",305978217),args__37299__auto___43847,new cljs.core.Keyword(null,"error","error",-978969032),error__37300__auto___43857], null));
} else {
}
}
} else {
}

var o__37301__auto__ = (function (){var query = G__43039;
var index = G__43040;
var nesting_level = G__43041;
while(true){
if((nesting_level === (0))){
var or__4126__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(query,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"aggregation","aggregation",1597476696)], null)),index);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("No aggregation at index: {0}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([index], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"index","index",-1531685915),index], null));
}
} else {
var G__43859 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(query,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"source-query","source-query",198004422)], null))], null);
var G__43860 = index;
var G__43861 = (nesting_level - (1));
query = G__43859;
index = G__43860;
nesting_level = G__43861;
continue;
}
break;
}
})();
if(cljs.core.truth_(validate__37298__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
var G__43062_43862 = new cljs.core.Keyword(null,"output","output",-1105869043);
var G__43063_43863 = cljs.core.with_meta(new cljs.core.Symbol(null,"aggregation-at-index","aggregation-at-index",1145258383,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","Aggregation","mbql.s/Aggregation",124504849,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Fetch the aggregation at index. This is intended to power aggregate field references (e.g. [:aggregation 0]).\n   This also handles nested queries, which could be potentially ambiguous if multiple levels had aggregations. To\n   support nested queries, you'll need to keep tract of how many `:source-query`s deep you've traveled; pass in this\n   number to as optional arg `nesting-level` to make sure you reference aggregations at the right level of nesting."], null));
var G__43064_43864 = output_schema43030_43805;
var G__43065_43865 = cljs.core.deref(output_checker43038_43811);
var G__43066_43866 = o__37301__auto__;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__43062_43862,G__43063_43863,G__43064_43864,G__43065_43865,G__43066_43866) : schema.core.fn_validator.call(null,G__43062_43862,G__43063_43863,G__43064_43864,G__43065_43865,G__43066_43866));
} else {
var temp__5735__auto___43868 = (function (){var fexpr__43067 = cljs.core.deref(output_checker43038_43811);
return (fexpr__43067.cljs$core$IFn$_invoke$arity$1 ? fexpr__43067.cljs$core$IFn$_invoke$arity$1(o__37301__auto__) : fexpr__43067.call(null,o__37301__auto__));
})();
if(cljs.core.truth_(temp__5735__auto___43868)){
var error__37300__auto___43869 = temp__5735__auto___43868;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"aggregation-at-index","aggregation-at-index",1145258383,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","Aggregation","mbql.s/Aggregation",124504849,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Fetch the aggregation at index. This is intended to power aggregate field references (e.g. [:aggregation 0]).\n   This also handles nested queries, which could be potentially ambiguous if multiple levels had aggregations. To\n   support nested queries, you'll need to keep tract of how many `:source-query`s deep you've traveled; pass in this\n   number to as optional arg `nesting-level` to make sure you reference aggregations at the right level of nesting."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__37300__auto___43869], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema43030_43805,new cljs.core.Keyword(null,"value","value",305978217),o__37301__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37300__auto___43869], null));
} else {
}
}
} else {
}

return o__37301__auto__;
}));

(metabase.mbql.util.aggregation_at_index.cljs$lang$maxFixedArity = 3);

return null;
})()
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(metabase.mbql.util.aggregation_at_index),schema.core.make_fn_schema(output_schema43030_43805,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema43031_43806,input_schema43036_43807], null)));

/**
 * Is this ID (presumably of a Metric or Segment) a GA one?
 */
metabase.mbql.util.ga_id_QMARK_ = (function metabase$mbql$util$ga_id_QMARK_(id){
return cljs.core.boolean$((cljs.core.truth_(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,cljs.core.keyword_QMARK_)(id))?cljs.core.re_find(/^ga(id)?:/,cljs.core.name(id)):null));
});
/**
 * Is this metric or segment clause not a Metabase Metric or Segment, but rather a GA one? E.g. something like `[:metric
 *   ga:users]`. We want to ignore those because they're not the same thing at all as MB Metrics/Segments and don't
 *   correspond to objects in our application DB.
 */
metabase.mbql.util.ga_metric_or_segment_QMARK_ = (function metabase$mbql$util$ga_metric_or_segment_QMARK_(p__43068){
var vec__43069 = p__43068;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43069,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43069,(1),null);
return metabase.mbql.util.ga_id_QMARK_(id);
});
/**
 * Is `field` used to record something date or time related, i.e. does `field` have a base type or semantic type that
 *   derives from `:type/Temporal`?
 */
metabase.mbql.util.temporal_field_QMARK_ = (function metabase$mbql$util$temporal_field_QMARK_(field){
return ((cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"base_type","base_type",1908272670).cljs$core$IFn$_invoke$arity$1(field),new cljs.core.Keyword("type","Temporal","type/Temporal",-237169010))) || (cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"semantic_type","semantic_type",272485089).cljs$core$IFn$_invoke$arity$1(field),new cljs.core.Keyword("type","Temporal","type/Temporal",-237169010))));
});
/**
 * Is `field` used to record a time of day (e.g. hour/minute/second), but not the date itself? i.e. does `field` have a
 *   base type or semantic type that derives from `:type/Time`?
 */
metabase.mbql.util.time_field_QMARK_ = (function metabase$mbql$util$time_field_QMARK_(field){
return ((cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"base_type","base_type",1908272670).cljs$core$IFn$_invoke$arity$1(field),new cljs.core.Keyword("type","Time","type/Time",-814852413))) || (cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"semantic_type","semantic_type",272485089).cljs$core$IFn$_invoke$arity$1(field),new cljs.core.Keyword("type","Time","type/Time",-814852413))));
});
/**
 * Does `field` have a base type or semantic type that derives from `:type/Temporal`, but not `:type/Time`? (i.e., is
 *   Field a Date or DateTime?)
 */
metabase.mbql.util.temporal_but_not_time_field_QMARK_ = (function metabase$mbql$util$temporal_but_not_time_field_QMARK_(field){
return ((metabase.mbql.util.temporal_field_QMARK_(field)) && ((!(metabase.mbql.util.time_field_QMARK_(field)))));
});
/**
 * Is a given artihmetics clause operating on datetimes?
 */
metabase.mbql.util.datetime_arithmetics_QMARK_ = (function metabase$mbql$util$datetime_arithmetics_QMARK_(clause){
return cljs.core.first(cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,(function metabase$mbql$util$datetime_arithmetics_QMARK__$_match_43072(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) >= (1))))){
try{var _AMPERSAND_match_left__43077 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_match,(0),(1));
if(((cljs.core.vector_QMARK_(_AMPERSAND_match_left__43077)) && ((cljs.core.count(_AMPERSAND_match_left__43077) === (1))))){
try{var _AMPERSAND_match_left__43077_0__43079 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__43077,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_left__43077_0__43079,new cljs.core.Keyword(null,"interval","interval",1708495417))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e43088){if((e43088 instanceof Error)){
var e__40407__auto__ = e43088;
if((e__40407__auto__ === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_left__43077_0__43079 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__43077,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_left__43077_0__43079,new cljs.core.Keyword(null,"relative-datetime","relative-datetime",1285169278))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e43089){if((e43089 instanceof Error)){
var e__40407__auto____$1 = e43089;
if((e__40407__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40407__auto____$1;
}
} else {
throw e43089;

}
}} else {
throw e__40407__auto__;
}
} else {
throw e43088;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43087){if((e43087 instanceof Error)){
var e__40407__auto__ = e43087;
if((e__40407__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40407__auto__;
}
} else {
throw e43087;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43083){if((e43083 instanceof Error)){
var e__40407__auto__ = e43083;
if((e__40407__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) === 3)))){
try{var _AMPERSAND_match_0__43080 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__43080,new cljs.core.Keyword(null,"field","field",-1302436500))){
try{var _AMPERSAND_match_2__43082 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
if(cljs.core.truth_(new cljs.core.Keyword(null,"temporal-unit","temporal-unit",-1892306358).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_match_2__43082))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e43086){if((e43086 instanceof Error)){
var e__40407__auto____$1 = e43086;
if((e__40407__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40407__auto____$1;
}
} else {
throw e43086;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43085){if((e43085 instanceof Error)){
var e__40407__auto____$1 = e43085;
if((e__40407__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40407__auto____$1;
}
} else {
throw e43085;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43084){if((e43084 instanceof Error)){
var e__40407__auto____$1 = e43084;
if((e__40407__auto____$1 === cljs.core.match.backtrack)){
return metabase.mbql.util.match.impl.match_in_collection(metabase$mbql$util$datetime_arithmetics_QMARK__$_match_43072,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__40407__auto____$1;
}
} else {
throw e43084;

}
}} else {
throw e__40407__auto__;
}
} else {
throw e43083;

}
}})(cljs.core.PersistentVector.EMPTY,clause))));
});
/**
 * Return a function that can be used to uniquify string names. Function maintains an internal counter that will suffix
 *   any names passed to it as needed so all results will be unique.
 * 
 *  (let [unique-name (unique-name-generator)]
 *    [(unique-name "A")
 *     (unique-name "B")
 *     (unique-name "A")])
 *  ;; -> ["A" "B" "A_2"]
 * 
 *   If idempotence is desired, the function returned by the generator also has a 2 airity version where the first argument is the object for which we are generating the name.
 * 
 *  (let [unique-name (unique-name-generator)]
 *    [(unique-name :x "A")
 *     (unique-name :x "B")
 *     (unique-name :x "A")
 *     (unique-name :y "A")])
 *  ;; -> ["A" "B" "A" "A_2"]
 *   
 */
metabase.mbql.util.unique_name_generator = (function metabase$mbql$util$unique_name_generator(){
var identity_objects__GT_aliases = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var aliases = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function() {
var metabase$mbql$util$unique_name_generator_$_generate_name = null;
var metabase$mbql$util$unique_name_generator_$_generate_name__1 = (function (alias){
return metabase$mbql$util$unique_name_generator_$_generate_name.cljs$core$IFn$_invoke$arity$2(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),alias);
});
var metabase$mbql$util$unique_name_generator_$_generate_name__2 = (function (identity_object,alias){
var or__4126__auto__ = (function (){var G__43093 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [identity_object,alias], null);
var fexpr__43092 = cljs.core.deref(identity_objects__GT_aliases);
return (fexpr__43092.cljs$core$IFn$_invoke$arity$1 ? fexpr__43092.cljs$core$IFn$_invoke$arity$1(G__43093) : fexpr__43092.call(null,G__43093));
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var maybe_unique = alias;
while(true){
var total_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(aliases,cljs.core.update,maybe_unique,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0))),maybe_unique);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(total_count,(1))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(identity_objects__GT_aliases,cljs.core.assoc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [identity_object,alias], null),maybe_unique);

return maybe_unique;
} else {
var G__43884 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(maybe_unique),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(total_count)].join('');
maybe_unique = G__43884;
continue;
}
break;
}
}
});
metabase$mbql$util$unique_name_generator_$_generate_name = function(identity_object,alias){
switch(arguments.length){
case 1:
return metabase$mbql$util$unique_name_generator_$_generate_name__1.call(this,identity_object);
case 2:
return metabase$mbql$util$unique_name_generator_$_generate_name__2.call(this,identity_object,alias);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$mbql$util$unique_name_generator_$_generate_name.cljs$core$IFn$_invoke$arity$1 = metabase$mbql$util$unique_name_generator_$_generate_name__1;
metabase$mbql$util$unique_name_generator_$_generate_name.cljs$core$IFn$_invoke$arity$2 = metabase$mbql$util$unique_name_generator_$_generate_name__2;
return metabase$mbql$util$unique_name_generator_$_generate_name;
})()
});
var ufv___43886 = schema.utils.use_fn_validation;
var output_schema43094_43887 = schema.core.constrained.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Str], null),cljs.core.distinct_QMARK_,"sequence of unique strings");
var input_schema43095_43888 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Str], null),cljs.core.with_meta(new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Str","s/Str",907974338,null)], null)], null)))], null);
var input_checker43096_43889 = (new cljs.core.Delay((function (){
return schema.core.checker(input_schema43095_43888);
}),null));
var output_checker43097_43890 = (new cljs.core.Delay((function (){
return schema.core.checker(output_schema43094_43887);
}),null));
var ret__39378__auto___43895 = /**
 * Inputs: [names :- [s/Str]]
 *   Returns: (s/constrained [s/Str] distinct? "sequence of unique strings")
 * 
 *   Make the names in a sequence of string names unique by adding suffixes such as `_2`.
 * 
 *   (uniquify-names ["count" "sum" "count" "count_2"])
 *   ;; -> ["count" "sum" "count_2" "count_2_2"]
 */
metabase.mbql.util.uniquify_names = (function metabase$mbql$util$uniquify_names(G__43098){
var validate__37298__auto__ = cljs.core.deref(ufv___43886);
if(cljs.core.truth_(validate__37298__auto__)){
var args__37299__auto___43897 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__43098], null);
if(cljs.core.truth_(schema.core.fn_validator)){
var G__43099_43898 = new cljs.core.Keyword(null,"input","input",556931961);
var G__43100_43899 = cljs.core.with_meta(new cljs.core.Symbol(null,"uniquify-names","uniquify-names",1444516604,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","constrained","s/constrained",-2057147677,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Str","s/Str",907974338,null)], null),new cljs.core.Symbol(null,"distinct?","distinct?",-1684357959,null),"sequence of unique strings"),new cljs.core.Keyword(null,"doc","doc",1913296891),"Make the names in a sequence of string names unique by adding suffixes such as `_2`.\n\n     (uniquify-names [\"count\" \"sum\" \"count\" \"count_2\"])\n     ;; -> [\"count\" \"sum\" \"count_2\" \"count_2_2\"]"], null));
var G__43101_43900 = input_schema43095_43888;
var G__43102_43901 = cljs.core.deref(input_checker43096_43889);
var G__43103_43902 = args__37299__auto___43897;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__43099_43898,G__43100_43899,G__43101_43900,G__43102_43901,G__43103_43902) : schema.core.fn_validator.call(null,G__43099_43898,G__43100_43899,G__43101_43900,G__43102_43901,G__43103_43902));
} else {
var temp__5735__auto___43903 = (function (){var fexpr__43104 = cljs.core.deref(input_checker43096_43889);
return (fexpr__43104.cljs$core$IFn$_invoke$arity$1 ? fexpr__43104.cljs$core$IFn$_invoke$arity$1(args__37299__auto___43897) : fexpr__43104.call(null,args__37299__auto___43897));
})();
if(cljs.core.truth_(temp__5735__auto___43903)){
var error__37300__auto___43904 = temp__5735__auto___43903;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"uniquify-names","uniquify-names",1444516604,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","constrained","s/constrained",-2057147677,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Str","s/Str",907974338,null)], null),new cljs.core.Symbol(null,"distinct?","distinct?",-1684357959,null),"sequence of unique strings"),new cljs.core.Keyword(null,"doc","doc",1913296891),"Make the names in a sequence of string names unique by adding suffixes such as `_2`.\n\n     (uniquify-names [\"count\" \"sum\" \"count\" \"count_2\"])\n     ;; -> [\"count\" \"sum\" \"count_2\" \"count_2_2\"]"], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__37300__auto___43904], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema43095_43888,new cljs.core.Keyword(null,"value","value",305978217),args__37299__auto___43897,new cljs.core.Keyword(null,"error","error",-978969032),error__37300__auto___43904], null));
} else {
}
}
} else {
}

var o__37301__auto__ = (function (){var names = G__43098;
while(true){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(metabase.mbql.util.unique_name_generator(),names);
break;
}
})();
if(cljs.core.truth_(validate__37298__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
var G__43105_43906 = new cljs.core.Keyword(null,"output","output",-1105869043);
var G__43106_43907 = cljs.core.with_meta(new cljs.core.Symbol(null,"uniquify-names","uniquify-names",1444516604,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","constrained","s/constrained",-2057147677,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Str","s/Str",907974338,null)], null),new cljs.core.Symbol(null,"distinct?","distinct?",-1684357959,null),"sequence of unique strings"),new cljs.core.Keyword(null,"doc","doc",1913296891),"Make the names in a sequence of string names unique by adding suffixes such as `_2`.\n\n     (uniquify-names [\"count\" \"sum\" \"count\" \"count_2\"])\n     ;; -> [\"count\" \"sum\" \"count_2\" \"count_2_2\"]"], null));
var G__43107_43908 = output_schema43094_43887;
var G__43108_43909 = cljs.core.deref(output_checker43097_43890);
var G__43109_43910 = o__37301__auto__;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__43105_43906,G__43106_43907,G__43107_43908,G__43108_43909,G__43109_43910) : schema.core.fn_validator.call(null,G__43105_43906,G__43106_43907,G__43107_43908,G__43108_43909,G__43109_43910));
} else {
var temp__5735__auto___43911 = (function (){var fexpr__43110 = cljs.core.deref(output_checker43097_43890);
return (fexpr__43110.cljs$core$IFn$_invoke$arity$1 ? fexpr__43110.cljs$core$IFn$_invoke$arity$1(o__37301__auto__) : fexpr__43110.call(null,o__37301__auto__));
})();
if(cljs.core.truth_(temp__5735__auto___43911)){
var error__37300__auto___43912 = temp__5735__auto___43911;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"uniquify-names","uniquify-names",1444516604,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","constrained","s/constrained",-2057147677,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Str","s/Str",907974338,null)], null),new cljs.core.Symbol(null,"distinct?","distinct?",-1684357959,null),"sequence of unique strings"),new cljs.core.Keyword(null,"doc","doc",1913296891),"Make the names in a sequence of string names unique by adding suffixes such as `_2`.\n\n     (uniquify-names [\"count\" \"sum\" \"count\" \"count_2\"])\n     ;; -> [\"count\" \"sum\" \"count_2\" \"count_2_2\"]"], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__37300__auto___43912], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema43094_43887,new cljs.core.Keyword(null,"value","value",305978217),o__37301__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37300__auto___43912], null));
} else {
}
}
} else {
}

return o__37301__auto__;
});
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(metabase.mbql.util.uniquify_names),schema.core.__GT_FnSchema(output_schema43094_43887,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema43095_43888], null)));

metabase.mbql.util.NamedAggregation = schema.core.constrained.cljs$core$IFn$_invoke$arity$3(metabase.mbql.schema.aggregation_options,(function (p1__43111_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__43111_SHARP_,(2)));
}),"`:aggregation-options` with a `:name`");
metabase.mbql.util.UniquelyNamedAggregations = schema.core.constrained.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.mbql.util.NamedAggregation], null),(function (clauses){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,(function (){var iter__4529__auto__ = (function metabase$mbql$util$iter__43112(s__43113){
return (new cljs.core.LazySeq(null,(function (){
var s__43113__$1 = s__43113;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__43113__$1);
if(temp__5735__auto__){
var s__43113__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43113__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__43113__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__43115 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__43114 = (0);
while(true){
if((i__43114 < size__4528__auto__)){
var vec__43116 = cljs.core._nth(c__4527__auto__,i__43114);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43116,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43116,(1),null);
var map__43119 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43116,(2),null);
var map__43119__$1 = (((((!((map__43119 == null))))?(((((map__43119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43119.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43119):map__43119);
var ag_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43119__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.chunk_append(b__43115,ag_name);

var G__43927 = (i__43114 + (1));
i__43114 = G__43927;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43115),metabase$mbql$util$iter__43112(cljs.core.chunk_rest(s__43113__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43115),null);
}
} else {
var vec__43121 = cljs.core.first(s__43113__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43121,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43121,(1),null);
var map__43124 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43121,(2),null);
var map__43124__$1 = (((((!((map__43124 == null))))?(((((map__43124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43124.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43124):map__43124);
var ag_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43124__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return cljs.core.cons(ag_name,metabase$mbql$util$iter__43112(cljs.core.rest(s__43113__$2)));
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
}),"sequence of named aggregations with unique names");
var ufv___43929 = schema.utils.use_fn_validation;
var output_schema43126_43930 = metabase.mbql.util.UniquelyNamedAggregations;
var input_schema43127_43931 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.mbql.util.NamedAggregation], null),cljs.core.with_meta(new cljs.core.Symbol(null,"named-aggregations","named-aggregations",-771029585,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"NamedAggregation","NamedAggregation",1856050571,null)], null)], null)))], null);
var input_checker43128_43932 = (new cljs.core.Delay((function (){
return schema.core.checker(input_schema43127_43931);
}),null));
var output_checker43129_43933 = (new cljs.core.Delay((function (){
return schema.core.checker(output_schema43126_43930);
}),null));
var ret__39378__auto___43936 = /**
 * Inputs: [named-aggregations :- [NamedAggregation]]
 *   Returns: UniquelyNamedAggregations
 * 
 *   Make the names of a sequence of named aggregations unique by adding suffixes such as `_2`.
 */
metabase.mbql.util.uniquify_named_aggregations = (function metabase$mbql$util$uniquify_named_aggregations(G__43130){
var validate__37298__auto__ = cljs.core.deref(ufv___43929);
if(cljs.core.truth_(validate__37298__auto__)){
var args__37299__auto___43937 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__43130], null);
if(cljs.core.truth_(schema.core.fn_validator)){
var G__43131_43938 = new cljs.core.Keyword(null,"input","input",556931961);
var G__43132_43939 = cljs.core.with_meta(new cljs.core.Symbol(null,"uniquify-named-aggregations","uniquify-named-aggregations",1690441863,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"UniquelyNamedAggregations","UniquelyNamedAggregations",119403282,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Make the names of a sequence of named aggregations unique by adding suffixes such as `_2`."], null));
var G__43133_43940 = input_schema43127_43931;
var G__43134_43941 = cljs.core.deref(input_checker43128_43932);
var G__43135_43942 = args__37299__auto___43937;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__43131_43938,G__43132_43939,G__43133_43940,G__43134_43941,G__43135_43942) : schema.core.fn_validator.call(null,G__43131_43938,G__43132_43939,G__43133_43940,G__43134_43941,G__43135_43942));
} else {
var temp__5735__auto___43945 = (function (){var fexpr__43136 = cljs.core.deref(input_checker43128_43932);
return (fexpr__43136.cljs$core$IFn$_invoke$arity$1 ? fexpr__43136.cljs$core$IFn$_invoke$arity$1(args__37299__auto___43937) : fexpr__43136.call(null,args__37299__auto___43937));
})();
if(cljs.core.truth_(temp__5735__auto___43945)){
var error__37300__auto___43946 = temp__5735__auto___43945;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"uniquify-named-aggregations","uniquify-named-aggregations",1690441863,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"UniquelyNamedAggregations","UniquelyNamedAggregations",119403282,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Make the names of a sequence of named aggregations unique by adding suffixes such as `_2`."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__37300__auto___43946], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema43127_43931,new cljs.core.Keyword(null,"value","value",305978217),args__37299__auto___43937,new cljs.core.Keyword(null,"error","error",-978969032),error__37300__auto___43946], null));
} else {
}
}
} else {
}

var o__37301__auto__ = (function (){var named_aggregations = G__43130;
while(true){
var unique_names = metabase.mbql.util.uniquify_names((function (){var iter__4529__auto__ = ((function (validate__37298__auto__,ufv___43929,output_schema43126_43930,input_schema43127_43931,input_checker43128_43932,output_checker43129_43933){
return (function metabase$mbql$util$uniquify_named_aggregations_$_iter__43137(s__43138){
return (new cljs.core.LazySeq(null,(function (){
var s__43138__$1 = s__43138;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__43138__$1);
if(temp__5735__auto__){
var s__43138__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43138__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__43138__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__43140 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__43139 = (0);
while(true){
if((i__43139 < size__4528__auto__)){
var vec__43141 = cljs.core._nth(c__4527__auto__,i__43139);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43141,(0),null);
var wrapped_ag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43141,(1),null);
var map__43144 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43141,(2),null);
var map__43144__$1 = (((((!((map__43144 == null))))?(((((map__43144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43144.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43144):map__43144);
var ag_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43144__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.chunk_append(b__43140,ag_name);

var G__43954 = (i__43139 + (1));
i__43139 = G__43954;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43140),metabase$mbql$util$uniquify_named_aggregations_$_iter__43137(cljs.core.chunk_rest(s__43138__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43140),null);
}
} else {
var vec__43146 = cljs.core.first(s__43138__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43146,(0),null);
var wrapped_ag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43146,(1),null);
var map__43149 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43146,(2),null);
var map__43149__$1 = (((((!((map__43149 == null))))?(((((map__43149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43149.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43149):map__43149);
var ag_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43149__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return cljs.core.cons(ag_name,metabase$mbql$util$uniquify_named_aggregations_$_iter__43137(cljs.core.rest(s__43138__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(validate__37298__auto__,ufv___43929,output_schema43126_43930,input_schema43127_43931,input_checker43128_43932,output_checker43129_43933))
;
return iter__4529__auto__(named_aggregations);
})());
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (unique_names,validate__37298__auto__,ufv___43929,output_schema43126_43930,input_schema43127_43931,input_checker43128_43932,output_checker43129_43933){
return (function (p__43151,unique_name){
var vec__43152 = p__43151;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43152,(0),null);
var wrapped_ag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43152,(1),null);
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43152,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aggregation-options","aggregation-options",-1904917550),wrapped_ag,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"name","name",1843675177),unique_name)], null);
});})(unique_names,validate__37298__auto__,ufv___43929,output_schema43126_43930,input_schema43127_43931,input_checker43128_43932,output_checker43129_43933))
,named_aggregations,unique_names);
break;
}
})();
if(cljs.core.truth_(validate__37298__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
var G__43155_43958 = new cljs.core.Keyword(null,"output","output",-1105869043);
var G__43156_43959 = cljs.core.with_meta(new cljs.core.Symbol(null,"uniquify-named-aggregations","uniquify-named-aggregations",1690441863,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"UniquelyNamedAggregations","UniquelyNamedAggregations",119403282,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Make the names of a sequence of named aggregations unique by adding suffixes such as `_2`."], null));
var G__43157_43960 = output_schema43126_43930;
var G__43158_43961 = cljs.core.deref(output_checker43129_43933);
var G__43159_43962 = o__37301__auto__;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__43155_43958,G__43156_43959,G__43157_43960,G__43158_43961,G__43159_43962) : schema.core.fn_validator.call(null,G__43155_43958,G__43156_43959,G__43157_43960,G__43158_43961,G__43159_43962));
} else {
var temp__5735__auto___43963 = (function (){var fexpr__43160 = cljs.core.deref(output_checker43129_43933);
return (fexpr__43160.cljs$core$IFn$_invoke$arity$1 ? fexpr__43160.cljs$core$IFn$_invoke$arity$1(o__37301__auto__) : fexpr__43160.call(null,o__37301__auto__));
})();
if(cljs.core.truth_(temp__5735__auto___43963)){
var error__37300__auto___43964 = temp__5735__auto___43963;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"uniquify-named-aggregations","uniquify-named-aggregations",1690441863,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"UniquelyNamedAggregations","UniquelyNamedAggregations",119403282,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Make the names of a sequence of named aggregations unique by adding suffixes such as `_2`."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__37300__auto___43964], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema43126_43930,new cljs.core.Keyword(null,"value","value",305978217),o__37301__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37300__auto___43964], null));
} else {
}
}
} else {
}

return o__37301__auto__;
});
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(metabase.mbql.util.uniquify_named_aggregations),schema.core.__GT_FnSchema(output_schema43126_43930,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema43127_43931], null)));

var ufv___43966 = schema.utils.use_fn_validation;
var output_schema43161_43967 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.mbql.util.NamedAggregation], null);
var input_schema43162_43968 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.pred.cljs$core$IFn$_invoke$arity$1(cljs.core.fn_QMARK_),cljs.core.with_meta(new cljs.core.Symbol(null,"aggregation->name-fn","aggregation->name-fn",596978962,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","pred","s/pred",-727014287,null),new cljs.core.Symbol(null,"fn?","fn?",1820990818,null))], null))),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.mbql.schema.Aggregation], null),cljs.core.with_meta(new cljs.core.Symbol(null,"aggregations","aggregations",559417189,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("mbql.s","Aggregation","mbql.s/Aggregation",124504849,null)], null)], null)))], null);
var input_checker43163_43969 = (new cljs.core.Delay((function (){
return schema.core.checker(input_schema43162_43968);
}),null));
var output_checker43164_43970 = (new cljs.core.Delay((function (){
return schema.core.checker(output_schema43161_43967);
}),null));
var ret__39378__auto___43973 = /**
 * Inputs: [aggregation->name-fn :- (s/pred fn?) aggregations :- [mbql.s/Aggregation]]
 *   Returns: [NamedAggregation]
 * 
 *   Wrap every aggregation clause in an `:aggregation-options` clause, using the name returned
 *   by `(aggregation->name-fn ag-clause)` as names for any clauses that do not already have a `:name` in
 *   `:aggregation-options`.
 * 
 *  (pre-alias-aggregations annotate/aggregation-name
 *   [[:count] [:count] [:aggregation-options [:sum [:field 1 nil] {:name "Sum-41"}]])
 *  ;; -> [[:aggregation-options [:count] {:name "count"}]
 *         [:aggregation-options [:count] {:name "count"}]
 *         [:aggregation-options [:sum [:field 1 nil]] {:name "Sum-41"}]]
 * 
 *   Most often, `aggregation->name-fn` will be something like `annotate/aggregation-name`, but for purposes of keeping
 *   the `metabase.mbql` module seperate from the `metabase.query-processor` code we'll let you pass that in yourself.
 */
metabase.mbql.util.pre_alias_aggregations = (function metabase$mbql$util$pre_alias_aggregations(G__43165,G__43166){
var validate__37298__auto__ = cljs.core.deref(ufv___43966);
if(cljs.core.truth_(validate__37298__auto__)){
var args__37299__auto___43974 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__43165,G__43166], null);
if(cljs.core.truth_(schema.core.fn_validator)){
var G__43167_43975 = new cljs.core.Keyword(null,"input","input",556931961);
var G__43168_43976 = cljs.core.with_meta(new cljs.core.Symbol(null,"pre-alias-aggregations","pre-alias-aggregations",-480645200,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"NamedAggregation","NamedAggregation",1856050571,null)], null),new cljs.core.Keyword("style","indent","style/indent",-39468490),(1),new cljs.core.Keyword(null,"doc","doc",1913296891),"Wrap every aggregation clause in an `:aggregation-options` clause, using the name returned\n  by `(aggregation->name-fn ag-clause)` as names for any clauses that do not already have a `:name` in\n  `:aggregation-options`.\n\n    (pre-alias-aggregations annotate/aggregation-name\n     [[:count] [:count] [:aggregation-options [:sum [:field 1 nil] {:name \"Sum-41\"}]])\n    ;; -> [[:aggregation-options [:count] {:name \"count\"}]\n           [:aggregation-options [:count] {:name \"count\"}]\n           [:aggregation-options [:sum [:field 1 nil]] {:name \"Sum-41\"}]]\n\n  Most often, `aggregation->name-fn` will be something like `annotate/aggregation-name`, but for purposes of keeping\n  the `metabase.mbql` module seperate from the `metabase.query-processor` code we'll let you pass that in yourself."], null));
var G__43169_43977 = input_schema43162_43968;
var G__43170_43978 = cljs.core.deref(input_checker43163_43969);
var G__43171_43979 = args__37299__auto___43974;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__43167_43975,G__43168_43976,G__43169_43977,G__43170_43978,G__43171_43979) : schema.core.fn_validator.call(null,G__43167_43975,G__43168_43976,G__43169_43977,G__43170_43978,G__43171_43979));
} else {
var temp__5735__auto___43980 = (function (){var fexpr__43172 = cljs.core.deref(input_checker43163_43969);
return (fexpr__43172.cljs$core$IFn$_invoke$arity$1 ? fexpr__43172.cljs$core$IFn$_invoke$arity$1(args__37299__auto___43974) : fexpr__43172.call(null,args__37299__auto___43974));
})();
if(cljs.core.truth_(temp__5735__auto___43980)){
var error__37300__auto___43981 = temp__5735__auto___43980;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"pre-alias-aggregations","pre-alias-aggregations",-480645200,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"NamedAggregation","NamedAggregation",1856050571,null)], null),new cljs.core.Keyword("style","indent","style/indent",-39468490),(1),new cljs.core.Keyword(null,"doc","doc",1913296891),"Wrap every aggregation clause in an `:aggregation-options` clause, using the name returned\n  by `(aggregation->name-fn ag-clause)` as names for any clauses that do not already have a `:name` in\n  `:aggregation-options`.\n\n    (pre-alias-aggregations annotate/aggregation-name\n     [[:count] [:count] [:aggregation-options [:sum [:field 1 nil] {:name \"Sum-41\"}]])\n    ;; -> [[:aggregation-options [:count] {:name \"count\"}]\n           [:aggregation-options [:count] {:name \"count\"}]\n           [:aggregation-options [:sum [:field 1 nil]] {:name \"Sum-41\"}]]\n\n  Most often, `aggregation->name-fn` will be something like `annotate/aggregation-name`, but for purposes of keeping\n  the `metabase.mbql` module seperate from the `metabase.query-processor` code we'll let you pass that in yourself."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__37300__auto___43981], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema43162_43968,new cljs.core.Keyword(null,"value","value",305978217),args__37299__auto___43974,new cljs.core.Keyword(null,"error","error",-978969032),error__37300__auto___43981], null));
} else {
}
}
} else {
}

var o__37301__auto__ = (function (){var aggregation__GT_name_fn = G__43165;
var aggregations = G__43166;
while(true){
return ((function (validate__37298__auto__,ufv___43966,output_schema43161_43967,input_schema43162_43968,input_checker43163_43969,output_checker43164_43970){
return (function metabase$mbql$util$pre_alias_aggregations_$_replace_43173(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) === 3)))){
try{var _AMPERSAND_match_0__43179 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__43179,new cljs.core.Keyword(null,"aggregation-options","aggregation-options",-1904917550))){
try{var _AMPERSAND_match_2__43181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
if(cljs.core.truth_(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_match_2__43181))){
return _AMPERSAND_match;
} else {
throw cljs.core.match.backtrack;

}
}catch (e43190){if((e43190 instanceof Error)){
var e__40407__auto__ = e43190;
if((e__40407__auto__ === cljs.core.match.backtrack)){
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
var wrapped_ag = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aggregation-options","aggregation-options",-1904917550),wrapped_ag,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"name","name",1843675177),(aggregation__GT_name_fn.cljs$core$IFn$_invoke$arity$1 ? aggregation__GT_name_fn.cljs$core$IFn$_invoke$arity$1(wrapped_ag) : aggregation__GT_name_fn.call(null,wrapped_ag)))], null);
} else {
throw e__40407__auto__;
}
} else {
throw e43190;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43189){if((e43189 instanceof Error)){
var e__40407__auto__ = e43189;
if((e__40407__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40407__auto__;
}
} else {
throw e43189;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43185){if((e43185 instanceof Error)){
var e__40407__auto__ = e43185;
if((e__40407__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) >= (1))))){
try{var _AMPERSAND_match_left__43182 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_match,(0),(1));
if(((cljs.core.vector_QMARK_(_AMPERSAND_match_left__43182)) && ((cljs.core.count(_AMPERSAND_match_left__43182) === (1))))){
try{var _AMPERSAND_match_left__43182_0__43184 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__43182,(0));
if((_AMPERSAND_match_left__43182_0__43184 instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aggregation-options","aggregation-options",-1904917550),_AMPERSAND_match,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(aggregation__GT_name_fn.cljs$core$IFn$_invoke$arity$1 ? aggregation__GT_name_fn.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_match) : aggregation__GT_name_fn.call(null,_AMPERSAND_match))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e43188){if((e43188 instanceof Error)){
var e__40407__auto____$1 = e43188;
if((e__40407__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40407__auto____$1;
}
} else {
throw e43188;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43187){if((e43187 instanceof Error)){
var e__40407__auto____$1 = e43187;
if((e__40407__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40407__auto____$1;
}
} else {
throw e43187;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43186){if((e43186 instanceof Error)){
var e__40407__auto____$1 = e43186;
if((e__40407__auto____$1 === cljs.core.match.backtrack)){
return metabase.mbql.util.match.impl.replace_in_collection(metabase$mbql$util$pre_alias_aggregations_$_replace_43173,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__40407__auto____$1;
}
} else {
throw e43186;

}
}} else {
throw e__40407__auto__;
}
} else {
throw e43185;

}
}});})(validate__37298__auto__,ufv___43966,output_schema43161_43967,input_schema43162_43968,input_checker43163_43969,output_checker43164_43970))
(cljs.core.PersistentVector.EMPTY,aggregations);
break;
}
})();
if(cljs.core.truth_(validate__37298__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
var G__43191_43982 = new cljs.core.Keyword(null,"output","output",-1105869043);
var G__43192_43983 = cljs.core.with_meta(new cljs.core.Symbol(null,"pre-alias-aggregations","pre-alias-aggregations",-480645200,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"NamedAggregation","NamedAggregation",1856050571,null)], null),new cljs.core.Keyword("style","indent","style/indent",-39468490),(1),new cljs.core.Keyword(null,"doc","doc",1913296891),"Wrap every aggregation clause in an `:aggregation-options` clause, using the name returned\n  by `(aggregation->name-fn ag-clause)` as names for any clauses that do not already have a `:name` in\n  `:aggregation-options`.\n\n    (pre-alias-aggregations annotate/aggregation-name\n     [[:count] [:count] [:aggregation-options [:sum [:field 1 nil] {:name \"Sum-41\"}]])\n    ;; -> [[:aggregation-options [:count] {:name \"count\"}]\n           [:aggregation-options [:count] {:name \"count\"}]\n           [:aggregation-options [:sum [:field 1 nil]] {:name \"Sum-41\"}]]\n\n  Most often, `aggregation->name-fn` will be something like `annotate/aggregation-name`, but for purposes of keeping\n  the `metabase.mbql` module seperate from the `metabase.query-processor` code we'll let you pass that in yourself."], null));
var G__43193_43984 = output_schema43161_43967;
var G__43194_43985 = cljs.core.deref(output_checker43164_43970);
var G__43195_43986 = o__37301__auto__;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__43191_43982,G__43192_43983,G__43193_43984,G__43194_43985,G__43195_43986) : schema.core.fn_validator.call(null,G__43191_43982,G__43192_43983,G__43193_43984,G__43194_43985,G__43195_43986));
} else {
var temp__5735__auto___43987 = (function (){var fexpr__43196 = cljs.core.deref(output_checker43164_43970);
return (fexpr__43196.cljs$core$IFn$_invoke$arity$1 ? fexpr__43196.cljs$core$IFn$_invoke$arity$1(o__37301__auto__) : fexpr__43196.call(null,o__37301__auto__));
})();
if(cljs.core.truth_(temp__5735__auto___43987)){
var error__37300__auto___43988 = temp__5735__auto___43987;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"pre-alias-aggregations","pre-alias-aggregations",-480645200,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"NamedAggregation","NamedAggregation",1856050571,null)], null),new cljs.core.Keyword("style","indent","style/indent",-39468490),(1),new cljs.core.Keyword(null,"doc","doc",1913296891),"Wrap every aggregation clause in an `:aggregation-options` clause, using the name returned\n  by `(aggregation->name-fn ag-clause)` as names for any clauses that do not already have a `:name` in\n  `:aggregation-options`.\n\n    (pre-alias-aggregations annotate/aggregation-name\n     [[:count] [:count] [:aggregation-options [:sum [:field 1 nil] {:name \"Sum-41\"}]])\n    ;; -> [[:aggregation-options [:count] {:name \"count\"}]\n           [:aggregation-options [:count] {:name \"count\"}]\n           [:aggregation-options [:sum [:field 1 nil]] {:name \"Sum-41\"}]]\n\n  Most often, `aggregation->name-fn` will be something like `annotate/aggregation-name`, but for purposes of keeping\n  the `metabase.mbql` module seperate from the `metabase.query-processor` code we'll let you pass that in yourself."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__37300__auto___43988], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema43161_43967,new cljs.core.Keyword(null,"value","value",305978217),o__37301__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37300__auto___43988], null));
} else {
}
}
} else {
}

return o__37301__auto__;
});
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(metabase.mbql.util.pre_alias_aggregations),schema.core.__GT_FnSchema(output_schema43161_43967,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema43162_43968], null)));

var ufv___43989 = schema.utils.use_fn_validation;
var output_schema43197_43990 = metabase.mbql.util.UniquelyNamedAggregations;
var input_schema43198_43991 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.pred.cljs$core$IFn$_invoke$arity$1(cljs.core.fn_QMARK_),cljs.core.with_meta(new cljs.core.Symbol(null,"aggregation->name-fn","aggregation->name-fn",596978962,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","pred","s/pred",-727014287,null),new cljs.core.Symbol(null,"fn?","fn?",1820990818,null))], null))),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.mbql.schema.Aggregation], null),cljs.core.with_meta(new cljs.core.Symbol(null,"aggregations","aggregations",559417189,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("mbql.s","Aggregation","mbql.s/Aggregation",124504849,null)], null)], null)))], null);
var input_checker43199_43992 = (new cljs.core.Delay((function (){
return schema.core.checker(input_schema43198_43991);
}),null));
var output_checker43200_43993 = (new cljs.core.Delay((function (){
return schema.core.checker(output_schema43197_43990);
}),null));
var ret__39378__auto___43994 = /**
 * Inputs: [aggregation->name-fn :- (s/pred fn?) aggregations :- [mbql.s/Aggregation]]
 *   Returns: UniquelyNamedAggregations
 * 
 *   Wrap every aggregation clause in a `:named` clause with a unique name. Combines `pre-alias-aggregations` with
 *   `uniquify-named-aggregations`.
 */
metabase.mbql.util.pre_alias_and_uniquify_aggregations = (function metabase$mbql$util$pre_alias_and_uniquify_aggregations(G__43201,G__43202){
var validate__37298__auto__ = cljs.core.deref(ufv___43989);
if(cljs.core.truth_(validate__37298__auto__)){
var args__37299__auto___43995 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__43201,G__43202], null);
if(cljs.core.truth_(schema.core.fn_validator)){
var G__43203_43996 = new cljs.core.Keyword(null,"input","input",556931961);
var G__43204_43997 = cljs.core.with_meta(new cljs.core.Symbol(null,"pre-alias-and-uniquify-aggregations","pre-alias-and-uniquify-aggregations",-1180929281,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"UniquelyNamedAggregations","UniquelyNamedAggregations",119403282,null),new cljs.core.Keyword("style","indent","style/indent",-39468490),(1),new cljs.core.Keyword(null,"doc","doc",1913296891),"Wrap every aggregation clause in a `:named` clause with a unique name. Combines `pre-alias-aggregations` with\n  `uniquify-named-aggregations`."], null));
var G__43205_43998 = input_schema43198_43991;
var G__43206_43999 = cljs.core.deref(input_checker43199_43992);
var G__43207_44000 = args__37299__auto___43995;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__43203_43996,G__43204_43997,G__43205_43998,G__43206_43999,G__43207_44000) : schema.core.fn_validator.call(null,G__43203_43996,G__43204_43997,G__43205_43998,G__43206_43999,G__43207_44000));
} else {
var temp__5735__auto___44001 = (function (){var fexpr__43208 = cljs.core.deref(input_checker43199_43992);
return (fexpr__43208.cljs$core$IFn$_invoke$arity$1 ? fexpr__43208.cljs$core$IFn$_invoke$arity$1(args__37299__auto___43995) : fexpr__43208.call(null,args__37299__auto___43995));
})();
if(cljs.core.truth_(temp__5735__auto___44001)){
var error__37300__auto___44002 = temp__5735__auto___44001;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"pre-alias-and-uniquify-aggregations","pre-alias-and-uniquify-aggregations",-1180929281,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"UniquelyNamedAggregations","UniquelyNamedAggregations",119403282,null),new cljs.core.Keyword("style","indent","style/indent",-39468490),(1),new cljs.core.Keyword(null,"doc","doc",1913296891),"Wrap every aggregation clause in a `:named` clause with a unique name. Combines `pre-alias-aggregations` with\n  `uniquify-named-aggregations`."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__37300__auto___44002], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema43198_43991,new cljs.core.Keyword(null,"value","value",305978217),args__37299__auto___43995,new cljs.core.Keyword(null,"error","error",-978969032),error__37300__auto___44002], null));
} else {
}
}
} else {
}

var o__37301__auto__ = (function (){var aggregation__GT_name_fn = G__43201;
var aggregations = G__43202;
while(true){
return metabase.mbql.util.uniquify_named_aggregations(metabase.mbql.util.pre_alias_aggregations(aggregation__GT_name_fn,aggregations));
break;
}
})();
if(cljs.core.truth_(validate__37298__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
var G__43209_44003 = new cljs.core.Keyword(null,"output","output",-1105869043);
var G__43210_44004 = cljs.core.with_meta(new cljs.core.Symbol(null,"pre-alias-and-uniquify-aggregations","pre-alias-and-uniquify-aggregations",-1180929281,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"UniquelyNamedAggregations","UniquelyNamedAggregations",119403282,null),new cljs.core.Keyword("style","indent","style/indent",-39468490),(1),new cljs.core.Keyword(null,"doc","doc",1913296891),"Wrap every aggregation clause in a `:named` clause with a unique name. Combines `pre-alias-aggregations` with\n  `uniquify-named-aggregations`."], null));
var G__43211_44005 = output_schema43197_43990;
var G__43212_44006 = cljs.core.deref(output_checker43200_43993);
var G__43213_44007 = o__37301__auto__;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__43209_44003,G__43210_44004,G__43211_44005,G__43212_44006,G__43213_44007) : schema.core.fn_validator.call(null,G__43209_44003,G__43210_44004,G__43211_44005,G__43212_44006,G__43213_44007));
} else {
var temp__5735__auto___44008 = (function (){var fexpr__43214 = cljs.core.deref(output_checker43200_43993);
return (fexpr__43214.cljs$core$IFn$_invoke$arity$1 ? fexpr__43214.cljs$core$IFn$_invoke$arity$1(o__37301__auto__) : fexpr__43214.call(null,o__37301__auto__));
})();
if(cljs.core.truth_(temp__5735__auto___44008)){
var error__37300__auto___44009 = temp__5735__auto___44008;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"pre-alias-and-uniquify-aggregations","pre-alias-and-uniquify-aggregations",-1180929281,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"UniquelyNamedAggregations","UniquelyNamedAggregations",119403282,null),new cljs.core.Keyword("style","indent","style/indent",-39468490),(1),new cljs.core.Keyword(null,"doc","doc",1913296891),"Wrap every aggregation clause in a `:named` clause with a unique name. Combines `pre-alias-aggregations` with\n  `uniquify-named-aggregations`."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__37300__auto___44009], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema43197_43990,new cljs.core.Keyword(null,"value","value",305978217),o__37301__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37300__auto___44009], null));
} else {
}
}
} else {
}

return o__37301__auto__;
});
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(metabase.mbql.util.pre_alias_and_uniquify_aggregations),schema.core.__GT_FnSchema(output_schema43197_43990,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema43198_43991], null)));

/**
 * Calculate the absolute maximum number of results that should be returned by this query (MBQL or native), useful for
 *   doing the equivalent of
 * 
 *  java.sql.Statement statement = ...;
 *  statement.setMaxRows(<max-rows-limit>).
 * 
 *   to ensure the DB cursor or equivalent doesn't fetch more rows than will be consumed.
 * 
 *   This is calculated as follows:
 * 
 *   *  If query is `MBQL` and has a `:limit` or `:page` clause, returns appropriate number
 *   *  If query has `:constraints` with `:max-results-bare-rows` or `:max-results`, returns the appropriate number
 *   *  `:max-results-bare-rows` is returned if set and Query does not have any aggregations
 *   *  `:max-results` is returned otherwise
 *   *  If none of the above are set, returns `nil`. In this case, you should use something like the Metabase QP's
 *   `max-rows-limit`
 */
metabase.mbql.util.query__GT_max_rows_limit = (function metabase$mbql$util$query__GT_max_rows_limit(p__43215){
var map__43216 = p__43215;
var map__43216__$1 = (((((!((map__43216 == null))))?(((((map__43216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43216):map__43216);
var map__43217 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43216__$1,new cljs.core.Keyword(null,"constraints","constraints",422775616));
var map__43217__$1 = (((((!((map__43217 == null))))?(((((map__43217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43217.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43217):map__43217);
var max_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43217__$1,new cljs.core.Keyword(null,"max-results","max-results",-32858165));
var max_results_bare_rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43217__$1,new cljs.core.Keyword(null,"max-results-bare-rows","max-results-bare-rows",2096475889));
var map__43218 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43216__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var map__43218__$1 = (((((!((map__43218 == null))))?(((((map__43218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43218.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43218):map__43218);
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43218__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363));
var aggregations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43218__$1,new cljs.core.Keyword(null,"aggregation","aggregation",1597476696));
var map__43219 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43218__$1,new cljs.core.Keyword(null,"page","page",849072397));
var map__43219__$1 = (((((!((map__43219 == null))))?(((((map__43219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43219.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43219):map__43219);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43219__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var query_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43216__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var safe_min = (function() { 
var G__44010__delegate = function (args){
var temp__5735__auto__ = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,args));
if(temp__5735__auto__){
var args__$1 = temp__5735__auto__;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.min,args__$1);
} else {
return null;
}
};
var G__44010 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44011__i = 0, G__44011__a = new Array(arguments.length -  0);
while (G__44011__i < G__44011__a.length) {G__44011__a[G__44011__i] = arguments[G__44011__i + 0]; ++G__44011__i;}
  args = new cljs.core.IndexedSeq(G__44011__a,0,null);
} 
return G__44010__delegate.call(this,args);};
G__44010.cljs$lang$maxFixedArity = 0;
G__44010.cljs$lang$applyTo = (function (arglist__44012){
var args = cljs.core.seq(arglist__44012);
return G__44010__delegate(args);
});
G__44010.cljs$core$IFn$_invoke$arity$variadic = G__44010__delegate;
return G__44010;
})()
;
var mbql_limit = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(query_type,new cljs.core.Keyword(null,"query","query",-1288509510)))?safe_min(items,limit):null);
var constraints_limit = (function (){var or__4126__auto__ = (cljs.core.truth_(aggregations)?null:max_results_bare_rows);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return max_results;
}
})();
return safe_min(mbql_limit,constraints_limit);
});
metabase.mbql.util.default_join_alias = "source";
var ufv___44014 = schema.utils.use_fn_validation;
var output_schema43225_44015 = metabase.mbql.schema.Joins;
var input_schema43226_44016 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.mbql.schema.Join], null),cljs.core.with_meta(new cljs.core.Symbol(null,"joins","joins",-1620473070,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("mbql.s","Join","mbql.s/Join",1835963232,null)], null)], null)))], null);
var input_checker43227_44017 = (new cljs.core.Delay((function (){
return schema.core.checker(input_schema43226_44016);
}),null));
var output_checker43228_44018 = (new cljs.core.Delay((function (){
return schema.core.checker(output_schema43225_44015);
}),null));
var ret__39378__auto___44019 = /**
 * Inputs: [joins :- [mbql.s/Join]]
 *   Returns: mbql.s/Joins
 * 
 *   Make sure every join in `:joins` has a unique alias. If a `:join` does not already have an alias, this will give it
 *   one.
 */
metabase.mbql.util.deduplicate_join_aliases = (function metabase$mbql$util$deduplicate_join_aliases(G__43229){
var validate__37298__auto__ = cljs.core.deref(ufv___44014);
if(cljs.core.truth_(validate__37298__auto__)){
var args__37299__auto___44020 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__43229], null);
if(cljs.core.truth_(schema.core.fn_validator)){
var G__43230_44021 = new cljs.core.Keyword(null,"input","input",556931961);
var G__43231_44022 = cljs.core.with_meta(new cljs.core.Symbol(null,"deduplicate-join-aliases","deduplicate-join-aliases",-1803364792,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","Joins","mbql.s/Joins",1018778651,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Make sure every join in `:joins` has a unique alias. If a `:join` does not already have an alias, this will give it\n  one."], null));
var G__43232_44023 = input_schema43226_44016;
var G__43233_44024 = cljs.core.deref(input_checker43227_44017);
var G__43234_44025 = args__37299__auto___44020;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__43230_44021,G__43231_44022,G__43232_44023,G__43233_44024,G__43234_44025) : schema.core.fn_validator.call(null,G__43230_44021,G__43231_44022,G__43232_44023,G__43233_44024,G__43234_44025));
} else {
var temp__5735__auto___44027 = (function (){var fexpr__43235 = cljs.core.deref(input_checker43227_44017);
return (fexpr__43235.cljs$core$IFn$_invoke$arity$1 ? fexpr__43235.cljs$core$IFn$_invoke$arity$1(args__37299__auto___44020) : fexpr__43235.call(null,args__37299__auto___44020));
})();
if(cljs.core.truth_(temp__5735__auto___44027)){
var error__37300__auto___44028 = temp__5735__auto___44027;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"deduplicate-join-aliases","deduplicate-join-aliases",-1803364792,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","Joins","mbql.s/Joins",1018778651,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Make sure every join in `:joins` has a unique alias. If a `:join` does not already have an alias, this will give it\n  one."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__37300__auto___44028], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema43226_44016,new cljs.core.Keyword(null,"value","value",305978217),args__37299__auto___44020,new cljs.core.Keyword(null,"error","error",-978969032),error__37300__auto___44028], null));
} else {
}
}
} else {
}

var o__37301__auto__ = (function (){var joins = G__43229;
while(true){
var joins__$1 = (function (){var iter__4529__auto__ = ((function (validate__37298__auto__,ufv___44014,output_schema43225_44015,input_schema43226_44016,input_checker43227_44017,output_checker43228_44018){
return (function metabase$mbql$util$deduplicate_join_aliases_$_iter__43236(s__43237){
return (new cljs.core.LazySeq(null,(function (){
var s__43237__$1 = s__43237;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__43237__$1);
if(temp__5735__auto__){
var s__43237__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43237__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__43237__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__43239 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__43238 = (0);
while(true){
if((i__43238 < size__4528__auto__)){
var join = cljs.core._nth(c__4527__auto__,i__43238);
cljs.core.chunk_append(b__43239,cljs.core.update.cljs$core$IFn$_invoke$arity$3(join,new cljs.core.Keyword(null,"alias","alias",-2039751630),((function (i__43238,join,c__4527__auto__,size__4528__auto__,b__43239,s__43237__$2,temp__5735__auto__,validate__37298__auto__,ufv___44014,output_schema43225_44015,input_schema43226_44016,input_checker43227_44017,output_checker43228_44018){
return (function (p1__43224_SHARP_){
var or__4126__auto__ = p1__43224_SHARP_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return metabase.mbql.util.default_join_alias;
}
});})(i__43238,join,c__4527__auto__,size__4528__auto__,b__43239,s__43237__$2,temp__5735__auto__,validate__37298__auto__,ufv___44014,output_schema43225_44015,input_schema43226_44016,input_checker43227_44017,output_checker43228_44018))
));

var G__44029 = (i__43238 + (1));
i__43238 = G__44029;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43239),metabase$mbql$util$deduplicate_join_aliases_$_iter__43236(cljs.core.chunk_rest(s__43237__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43239),null);
}
} else {
var join = cljs.core.first(s__43237__$2);
return cljs.core.cons(cljs.core.update.cljs$core$IFn$_invoke$arity$3(join,new cljs.core.Keyword(null,"alias","alias",-2039751630),((function (join,s__43237__$2,temp__5735__auto__,validate__37298__auto__,ufv___44014,output_schema43225_44015,input_schema43226_44016,input_checker43227_44017,output_checker43228_44018){
return (function (p1__43224_SHARP_){
var or__4126__auto__ = p1__43224_SHARP_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return metabase.mbql.util.default_join_alias;
}
});})(join,s__43237__$2,temp__5735__auto__,validate__37298__auto__,ufv___44014,output_schema43225_44015,input_schema43226_44016,input_checker43227_44017,output_checker43228_44018))
),metabase$mbql$util$deduplicate_join_aliases_$_iter__43236(cljs.core.rest(s__43237__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(validate__37298__auto__,ufv___44014,output_schema43225_44015,input_schema43226_44016,input_checker43227_44017,output_checker43228_44018))
;
return iter__4529__auto__(joins);
})();
var unique_aliases = metabase.mbql.util.uniquify_names(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"alias","alias",-2039751630),joins__$1));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(((function (joins__$1,unique_aliases,validate__37298__auto__,ufv___44014,output_schema43225_44015,input_schema43226_44016,input_checker43227_44017,output_checker43228_44018){
return (function (join,alias){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(join,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias);
});})(joins__$1,unique_aliases,validate__37298__auto__,ufv___44014,output_schema43225_44015,input_schema43226_44016,input_checker43227_44017,output_checker43228_44018))
,joins__$1,unique_aliases);
break;
}
})();
if(cljs.core.truth_(validate__37298__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
var G__43240_44031 = new cljs.core.Keyword(null,"output","output",-1105869043);
var G__43241_44032 = cljs.core.with_meta(new cljs.core.Symbol(null,"deduplicate-join-aliases","deduplicate-join-aliases",-1803364792,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","Joins","mbql.s/Joins",1018778651,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Make sure every join in `:joins` has a unique alias. If a `:join` does not already have an alias, this will give it\n  one."], null));
var G__43242_44033 = output_schema43225_44015;
var G__43243_44034 = cljs.core.deref(output_checker43228_44018);
var G__43244_44035 = o__37301__auto__;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__43240_44031,G__43241_44032,G__43242_44033,G__43243_44034,G__43244_44035) : schema.core.fn_validator.call(null,G__43240_44031,G__43241_44032,G__43242_44033,G__43243_44034,G__43244_44035));
} else {
var temp__5735__auto___44036 = (function (){var fexpr__43245 = cljs.core.deref(output_checker43228_44018);
return (fexpr__43245.cljs$core$IFn$_invoke$arity$1 ? fexpr__43245.cljs$core$IFn$_invoke$arity$1(o__37301__auto__) : fexpr__43245.call(null,o__37301__auto__));
})();
if(cljs.core.truth_(temp__5735__auto___44036)){
var error__37300__auto___44037 = temp__5735__auto___44036;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"deduplicate-join-aliases","deduplicate-join-aliases",-1803364792,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","Joins","mbql.s/Joins",1018778651,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Make sure every join in `:joins` has a unique alias. If a `:join` does not already have an alias, this will give it\n  one."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__37300__auto___44037], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema43225_44015,new cljs.core.Keyword(null,"value","value",305978217),o__37301__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37300__auto___44037], null));
} else {
}
}
} else {
}

return o__37301__auto__;
});
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(metabase.mbql.util.deduplicate_join_aliases),schema.core.__GT_FnSchema(output_schema43225_44015,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema43226_44016], null)));

metabase.mbql.util.remove_empty = (function metabase$mbql$util$remove_empty(x){
if(cljs.core.map_QMARK_(x)){
return cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function metabase$mbql$util$remove_empty_$_iter__43246(s__43247){
return (new cljs.core.LazySeq(null,(function (){
var s__43247__$1 = s__43247;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__43247__$1);
if(temp__5735__auto__){
var s__43247__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43247__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__43247__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__43249 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__43248 = (0);
while(true){
if((i__43248 < size__4528__auto__)){
var vec__43250 = cljs.core._nth(c__4527__auto__,i__43248);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43250,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43250,(1),null);
var v__$1 = (metabase.mbql.util.remove_empty.cljs$core$IFn$_invoke$arity$1 ? metabase.mbql.util.remove_empty.cljs$core$IFn$_invoke$arity$1(v) : metabase.mbql.util.remove_empty.call(null,v));
if((!((v__$1 == null)))){
cljs.core.chunk_append(b__43249,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v__$1], null));

var G__44038 = (i__43248 + (1));
i__43248 = G__44038;
continue;
} else {
var G__44039 = (i__43248 + (1));
i__43248 = G__44039;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43249),metabase$mbql$util$remove_empty_$_iter__43246(cljs.core.chunk_rest(s__43247__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43249),null);
}
} else {
var vec__43253 = cljs.core.first(s__43247__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43253,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43253,(1),null);
var v__$1 = (metabase.mbql.util.remove_empty.cljs$core$IFn$_invoke$arity$1 ? metabase.mbql.util.remove_empty.cljs$core$IFn$_invoke$arity$1(v) : metabase.mbql.util.remove_empty.call(null,v));
if((!((v__$1 == null)))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v__$1], null),metabase$mbql$util$remove_empty_$_iter__43246(cljs.core.rest(s__43247__$2)));
} else {
var G__44040 = cljs.core.rest(s__43247__$2);
s__43247__$1 = G__44040;
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
return iter__4529__auto__(x);
})()));
} else {
if(cljs.core.sequential_QMARK_(x)){
return cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(x),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(metabase.mbql.util.remove_empty,x))));
} else {
return x;

}
}
});
var ufv___44041 = schema.utils.use_fn_validation;
var output_schema43256_44042 = metabase.mbql.schema.field;
var input_schema43257_44043 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(metabase.mbql.schema.field,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.Any], null);
var input_checker43258_44044 = (new cljs.core.Delay((function (){
return schema.core.checker(input_schema43257_44043);
}),null));
var output_checker43259_44045 = (new cljs.core.Delay((function (){
return schema.core.checker(output_schema43256_44042);
}),null));
var ret__39378__auto___44046 = (function (){
/**
 * Inputs: [[_ id-or-name opts] :- mbql.s/field f & args]
 *   Returns: mbql.s/field
 * 
 *   Like `clojure.core/update`, but for the options in a `:field` clause.
 */
metabase.mbql.util.update_field_options = (function metabase$mbql$util$update_field_options(var_args){
var args__4742__auto__ = [];
var len__4736__auto___44047 = arguments.length;
var i__4737__auto___44048 = (0);
while(true){
if((i__4737__auto___44048 < len__4736__auto___44047)){
args__4742__auto__.push((arguments[i__4737__auto___44048]));

var G__44049 = (i__4737__auto___44048 + (1));
i__4737__auto___44048 = G__44049;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return metabase.mbql.util.update_field_options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(metabase.mbql.util.update_field_options.cljs$core$IFn$_invoke$arity$variadic = (function (G__43260,G__43261,rest43262){
var validate__37298__auto__ = cljs.core.deref(ufv___44041);
if(cljs.core.truth_(validate__37298__auto__)){
var args__37299__auto___44050 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(G__43260,G__43261,rest43262);
if(cljs.core.truth_(schema.core.fn_validator)){
var G__43266_44051 = new cljs.core.Keyword(null,"input","input",556931961);
var G__43267_44052 = cljs.core.with_meta(new cljs.core.Symbol(null,"update-field-options","update-field-options",-330736515,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","field","mbql.s/field",-611524658,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Like `clojure.core/update`, but for the options in a `:field` clause."], null));
var G__43268_44053 = input_schema43257_44043;
var G__43269_44054 = cljs.core.deref(input_checker43258_44044);
var G__43270_44055 = args__37299__auto___44050;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__43266_44051,G__43267_44052,G__43268_44053,G__43269_44054,G__43270_44055) : schema.core.fn_validator.call(null,G__43266_44051,G__43267_44052,G__43268_44053,G__43269_44054,G__43270_44055));
} else {
var temp__5735__auto___44056 = (function (){var fexpr__43271 = cljs.core.deref(input_checker43258_44044);
return (fexpr__43271.cljs$core$IFn$_invoke$arity$1 ? fexpr__43271.cljs$core$IFn$_invoke$arity$1(args__37299__auto___44050) : fexpr__43271.call(null,args__37299__auto___44050));
})();
if(cljs.core.truth_(temp__5735__auto___44056)){
var error__37300__auto___44057 = temp__5735__auto___44056;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"update-field-options","update-field-options",-330736515,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","field","mbql.s/field",-611524658,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Like `clojure.core/update`, but for the options in a `:field` clause."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__37300__auto___44057], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema43257_44043,new cljs.core.Keyword(null,"value","value",305978217),args__37299__auto___44050,new cljs.core.Keyword(null,"error","error",-978969032),error__37300__auto___44057], null));
} else {
}
}
} else {
}

var o__37301__auto__ = (function (){var G__43275 = G__43260;
var vec__43276 = G__43275;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43276,(0),null);
var id_or_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43276,(1),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43276,(2),null);
var f = G__43261;
var args = rest43262;
var G__43275__$1 = G__43275;
var f__$1 = f;
var args__$1 = args;
while(true){
var vec__43279 = G__43275__$1;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43279,(0),null);
var id_or_name__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43279,(1),null);
var opts__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43279,(2),null);
var f__$2 = f__$1;
var args__$2 = args__$1;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field","field",-1302436500),id_or_name__$1,cljs.core.not_empty(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f__$2,opts__$1,args__$2))], null);
break;
}
})();
if(cljs.core.truth_(validate__37298__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
var G__43282_44061 = new cljs.core.Keyword(null,"output","output",-1105869043);
var G__43283_44062 = cljs.core.with_meta(new cljs.core.Symbol(null,"update-field-options","update-field-options",-330736515,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","field","mbql.s/field",-611524658,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Like `clojure.core/update`, but for the options in a `:field` clause."], null));
var G__43284_44063 = output_schema43256_44042;
var G__43285_44064 = cljs.core.deref(output_checker43259_44045);
var G__43286_44065 = o__37301__auto__;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__43282_44061,G__43283_44062,G__43284_44063,G__43285_44064,G__43286_44065) : schema.core.fn_validator.call(null,G__43282_44061,G__43283_44062,G__43284_44063,G__43285_44064,G__43286_44065));
} else {
var temp__5735__auto___44066 = (function (){var fexpr__43287 = cljs.core.deref(output_checker43259_44045);
return (fexpr__43287.cljs$core$IFn$_invoke$arity$1 ? fexpr__43287.cljs$core$IFn$_invoke$arity$1(o__37301__auto__) : fexpr__43287.call(null,o__37301__auto__));
})();
if(cljs.core.truth_(temp__5735__auto___44066)){
var error__37300__auto___44068 = temp__5735__auto___44066;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"update-field-options","update-field-options",-330736515,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","field","mbql.s/field",-611524658,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Like `clojure.core/update`, but for the options in a `:field` clause."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__37300__auto___44068], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema43256_44042,new cljs.core.Keyword(null,"value","value",305978217),o__37301__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37300__auto___44068], null));
} else {
}
}
} else {
}

return o__37301__auto__;
}));

(metabase.mbql.util.update_field_options.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(metabase.mbql.util.update_field_options.cljs$lang$applyTo = (function (seq43263){
var G__43264 = cljs.core.first(seq43263);
var seq43263__$1 = cljs.core.next(seq43263);
var G__43265 = cljs.core.first(seq43263__$1);
var seq43263__$2 = cljs.core.next(seq43263__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43264,G__43265,seq43263__$2);
}));

return null;
})()
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(metabase.mbql.util.update_field_options),schema.core.__GT_FnSchema(output_schema43256_44042,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema43257_44043], null)));

/**
 * Like `clojure.core/assoc`, but for the options in a `:field` clause.
 */
metabase.mbql.util.assoc_field_options = (function metabase$mbql$util$assoc_field_options(var_args){
var args__4742__auto__ = [];
var len__4736__auto___44069 = arguments.length;
var i__4737__auto___44070 = (0);
while(true){
if((i__4737__auto___44070 < len__4736__auto___44069)){
args__4742__auto__.push((arguments[i__4737__auto___44070]));

var G__44071 = (i__4737__auto___44070 + (1));
i__4737__auto___44070 = G__44071;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return metabase.mbql.util.assoc_field_options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(metabase.mbql.util.assoc_field_options.cljs$core$IFn$_invoke$arity$variadic = (function (field_clause,kvs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(metabase.mbql.util.update_field_options,field_clause,cljs.core.assoc,kvs);
}));

(metabase.mbql.util.assoc_field_options.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(metabase.mbql.util.assoc_field_options.cljs$lang$applyTo = (function (seq43288){
var G__43289 = cljs.core.first(seq43288);
var seq43288__$1 = cljs.core.next(seq43288);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43289,seq43288__$1);
}));

/**
 * Set the `:temporal-unit` of a `:field` clause to `unit`.
 */
metabase.mbql.util.with_temporal_unit = (function metabase$mbql$util$with_temporal_unit(field_clause,unit){
return metabase.mbql.util.assoc_field_options.cljs$core$IFn$_invoke$arity$variadic(field_clause,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"temporal-unit","temporal-unit",-1892306358),unit], 0));
});
Object.defineProperty(module.exports, "desugar_is_null_and_not_null", { enumerable: false, get: function() { return metabase.mbql.util.desugar_is_null_and_not_null; } });
Object.defineProperty(module.exports, "desugar_current_relative_datetime", { enumerable: false, get: function() { return metabase.mbql.util.desugar_current_relative_datetime; } });
Object.defineProperty(module.exports, "temporal_field_QMARK_", { enumerable: false, get: function() { return metabase.mbql.util.temporal_field_QMARK_; } });
Object.defineProperty(module.exports, "ga_id_QMARK_", { enumerable: false, get: function() { return metabase.mbql.util.ga_id_QMARK_; } });
Object.defineProperty(module.exports, "add_filter_clause", { enumerable: false, get: function() { return metabase.mbql.util.add_filter_clause; } });
Object.defineProperty(module.exports, "dispatch_by_clause_name_or_class", { enumerable: false, get: function() { return metabase.mbql.util.dispatch_by_clause_name_or_class; } });
Object.defineProperty(module.exports, "mbql_clause_QMARK_", { enumerable: false, get: function() { return metabase.mbql.util.mbql_clause_QMARK_; } });
Object.defineProperty(module.exports, "uniquify_named_aggregations", { enumerable: false, get: function() { return metabase.mbql.util.uniquify_named_aggregations; } });
Object.defineProperty(module.exports, "default_join_alias", { enumerable: false, get: function() { return metabase.mbql.util.default_join_alias; } });
Object.defineProperty(module.exports, "deduplicate_join_aliases", { enumerable: false, get: function() { return metabase.mbql.util.deduplicate_join_aliases; } });
Object.defineProperty(module.exports, "desugar_is_empty_and_not_empty", { enumerable: false, get: function() { return metabase.mbql.util.desugar_is_empty_and_not_empty; } });
Object.defineProperty(module.exports, "simplify_compound_filter", { enumerable: false, get: function() { return metabase.mbql.util.simplify_compound_filter; } });
Object.defineProperty(module.exports, "NamedAggregation", { enumerable: false, get: function() { return metabase.mbql.util.NamedAggregation; } });
Object.defineProperty(module.exports, "add_order_by_clause", { enumerable: false, get: function() { return metabase.mbql.util.add_order_by_clause; } });
Object.defineProperty(module.exports, "query__GT_source_table_id", { enumerable: false, get: function() { return metabase.mbql.util.query__GT_source_table_id; } });
Object.defineProperty(module.exports, "normalize_token", { enumerable: false, get: function() { return metabase.mbql.util.normalize_token; } });
Object.defineProperty(module.exports, "qualified_name", { enumerable: false, get: function() { return metabase.mbql.util.qualified_name; } });
Object.defineProperty(module.exports, "desugar_inside", { enumerable: false, get: function() { return metabase.mbql.util.desugar_inside; } });
Object.defineProperty(module.exports, "time_field_QMARK_", { enumerable: false, get: function() { return metabase.mbql.util.time_field_QMARK_; } });
Object.defineProperty(module.exports, "aggregation_at_index", { enumerable: false, get: function() { return metabase.mbql.util.aggregation_at_index; } });
Object.defineProperty(module.exports, "query__GT_max_rows_limit", { enumerable: false, get: function() { return metabase.mbql.util.query__GT_max_rows_limit; } });
Object.defineProperty(module.exports, "negate_STAR_", { enumerable: false, get: function() { return metabase.mbql.util.negate_STAR_; } });
Object.defineProperty(module.exports, "pre_alias_aggregations", { enumerable: false, get: function() { return metabase.mbql.util.pre_alias_aggregations; } });
Object.defineProperty(module.exports, "temporal_but_not_time_field_QMARK_", { enumerable: false, get: function() { return metabase.mbql.util.temporal_but_not_time_field_QMARK_; } });
Object.defineProperty(module.exports, "is_clause_QMARK_", { enumerable: false, get: function() { return metabase.mbql.util.is_clause_QMARK_; } });
Object.defineProperty(module.exports, "join__GT_source_table_id", { enumerable: false, get: function() { return metabase.mbql.util.join__GT_source_table_id; } });
Object.defineProperty(module.exports, "ga_metric_or_segment_QMARK_", { enumerable: false, get: function() { return metabase.mbql.util.ga_metric_or_segment_QMARK_; } });
Object.defineProperty(module.exports, "UniquelyNamedAggregations", { enumerable: false, get: function() { return metabase.mbql.util.UniquelyNamedAggregations; } });
Object.defineProperty(module.exports, "desugar_time_interval", { enumerable: false, get: function() { return metabase.mbql.util.desugar_time_interval; } });
Object.defineProperty(module.exports, "add_filter_clause_to_inner_query", { enumerable: false, get: function() { return metabase.mbql.util.add_filter_clause_to_inner_query; } });
Object.defineProperty(module.exports, "combine_compound_filters_of_type", { enumerable: false, get: function() { return metabase.mbql.util.combine_compound_filters_of_type; } });
Object.defineProperty(module.exports, "remove_empty", { enumerable: false, get: function() { return metabase.mbql.util.remove_empty; } });
Object.defineProperty(module.exports, "desugar_does_not_contain", { enumerable: false, get: function() { return metabase.mbql.util.desugar_does_not_contain; } });
Object.defineProperty(module.exports, "with_temporal_unit", { enumerable: false, get: function() { return metabase.mbql.util.with_temporal_unit; } });
Object.defineProperty(module.exports, "combine_filter_clauses", { enumerable: false, get: function() { return metabase.mbql.util.combine_filter_clauses; } });
Object.defineProperty(module.exports, "unique_name_generator", { enumerable: false, get: function() { return metabase.mbql.util.unique_name_generator; } });
Object.defineProperty(module.exports, "expression_with_name", { enumerable: false, get: function() { return metabase.mbql.util.expression_with_name; } });
Object.defineProperty(module.exports, "assoc_field_options", { enumerable: false, get: function() { return metabase.mbql.util.assoc_field_options; } });
Object.defineProperty(module.exports, "negate_filter_clause", { enumerable: false, get: function() { return metabase.mbql.util.negate_filter_clause; } });
Object.defineProperty(module.exports, "uniquify_names", { enumerable: false, get: function() { return metabase.mbql.util.uniquify_names; } });
Object.defineProperty(module.exports, "update_field_options", { enumerable: false, get: function() { return metabase.mbql.util.update_field_options; } });
Object.defineProperty(module.exports, "desugar_filter_clause", { enumerable: false, get: function() { return metabase.mbql.util.desugar_filter_clause; } });
Object.defineProperty(module.exports, "datetime_arithmetics_QMARK_", { enumerable: false, get: function() { return metabase.mbql.util.datetime_arithmetics_QMARK_; } });
Object.defineProperty(module.exports, "desugar_equals_and_not_equals_with_extra_args", { enumerable: false, get: function() { return metabase.mbql.util.desugar_equals_and_not_equals_with_extra_args; } });
Object.defineProperty(module.exports, "pre_alias_and_uniquify_aggregations", { enumerable: false, get: function() { return metabase.mbql.util.pre_alias_and_uniquify_aggregations; } });
//# sourceMappingURL=metabase.mbql.util.js.map
