var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.mbql.util.match.impl.js");

goog.provide('metabase.mbql.util.match.impl');
/**
 * Return a function to use for pattern matching via `core.match`'s `:guard` functionality based on the value of a
 *   `pred-or-class` passed in as a pattern to `match` or `replace`.
 * 
 *   (Class-based matching currently only works in Clojure. For ClojureScript, only predicate function matching works.)
 */
metabase.mbql.util.match.impl.match_with_pred_or_class = (function metabase$mbql$util$match$impl$match_with_pred_or_class(pred_or_class){
if(cljs.core.fn_QMARK_(pred_or_class)){
return pred_or_class;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid pattern: don't know how to handle symbol.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),pred_or_class], null));

}
});
/**
 * Internal impl for `match`. If `form` is a collection, call `match-fn` to recursively look for matches in it.
 */
metabase.mbql.util.match.impl.match_in_collection = (function metabase$mbql$util$match$impl$match_in_collection(match_fn,clause_parents,form){
if(cljs.core.fn_QMARK_(match_fn)){
} else {
throw (new Error("Assert failed: (fn? match-fn)"));
}

if(cljs.core.vector_QMARK_(clause_parents)){
} else {
throw (new Error("Assert failed: (vector? clause-parents)"));
}

if(cljs.core.map_QMARK_(form)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4529__auto__ = (function metabase$mbql$util$match$impl$match_in_collection_$_iter__39557(s__39558){
return (new cljs.core.LazySeq(null,(function (){
var s__39558__$1 = s__39558;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__39558__$1);
if(temp__5735__auto__){
var s__39558__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__39558__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__39558__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__39560 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__39559 = (0);
while(true){
if((i__39559 < size__4528__auto__)){
var vec__39569 = cljs.core._nth(c__4527__auto__,i__39559);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39569,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39569,(1),null);
cljs.core.chunk_append(b__39560,(function (){var G__39572 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(clause_parents,k);
var G__39573 = v;
return (match_fn.cljs$core$IFn$_invoke$arity$2 ? match_fn.cljs$core$IFn$_invoke$arity$2(G__39572,G__39573) : match_fn.call(null,G__39572,G__39573));
})());

var G__39672 = (i__39559 + (1));
i__39559 = G__39672;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39560),metabase$mbql$util$match$impl$match_in_collection_$_iter__39557(cljs.core.chunk_rest(s__39558__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39560),null);
}
} else {
var vec__39577 = cljs.core.first(s__39558__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39577,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39577,(1),null);
return cljs.core.cons((function (){var G__39580 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(clause_parents,k);
var G__39581 = v;
return (match_fn.cljs$core$IFn$_invoke$arity$2 ? match_fn.cljs$core$IFn$_invoke$arity$2(G__39580,G__39581) : match_fn.call(null,G__39580,G__39581));
})(),metabase$mbql$util$match$impl$match_in_collection_$_iter__39557(cljs.core.rest(s__39558__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(form);
})());
} else {
if(cljs.core.sequential_QMARK_(form)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(match_fn,(((cljs.core.first(form) instanceof cljs.core.Keyword))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(clause_parents,cljs.core.first(form)):clause_parents)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form], 0));
} else {
return null;
}
}
});
/**
 * Inernal impl for `replace`. Recursively replace values in a collection using a `replace-fn`.
 */
metabase.mbql.util.match.impl.replace_in_collection = (function metabase$mbql$util$match$impl$replace_in_collection(replace_fn,clause_parents,form){
if(cljs.core.map_QMARK_(form)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(form,(function (){var iter__4529__auto__ = (function metabase$mbql$util$match$impl$replace_in_collection_$_iter__39593(s__39594){
return (new cljs.core.LazySeq(null,(function (){
var s__39594__$1 = s__39594;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__39594__$1);
if(temp__5735__auto__){
var s__39594__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__39594__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__39594__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__39596 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__39595 = (0);
while(true){
if((i__39595 < size__4528__auto__)){
var vec__39606 = cljs.core._nth(c__4527__auto__,i__39595);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39606,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39606,(1),null);
cljs.core.chunk_append(b__39596,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var G__39609 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(clause_parents,k);
var G__39610 = v;
return (replace_fn.cljs$core$IFn$_invoke$arity$2 ? replace_fn.cljs$core$IFn$_invoke$arity$2(G__39609,G__39610) : replace_fn.call(null,G__39609,G__39610));
})()], null));

var G__39690 = (i__39595 + (1));
i__39595 = G__39690;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39596),metabase$mbql$util$match$impl$replace_in_collection_$_iter__39593(cljs.core.chunk_rest(s__39594__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39596),null);
}
} else {
var vec__39614 = cljs.core.first(s__39594__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39614,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39614,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var G__39618 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(clause_parents,k);
var G__39619 = v;
return (replace_fn.cljs$core$IFn$_invoke$arity$2 ? replace_fn.cljs$core$IFn$_invoke$arity$2(G__39618,G__39619) : replace_fn.call(null,G__39618,G__39619));
})()], null),metabase$mbql$util$match$impl$replace_in_collection_$_iter__39593(cljs.core.rest(s__39594__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(form);
})());
} else {
if(cljs.core.sequential_QMARK_(form)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(replace_fn,(((cljs.core.first(form) instanceof cljs.core.Keyword))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(clause_parents,cljs.core.first(form)):clause_parents)),form);
} else {
return form;

}
}
});
/**
 * Like `update-in`, but only updates in the existing value is non-empty.
 */
metabase.mbql.util.match.impl.update_in_unless_empty = (function metabase$mbql$util$match$impl$update_in_unless_empty(var_args){
var args__4742__auto__ = [];
var len__4736__auto___39696 = arguments.length;
var i__4737__auto___39697 = (0);
while(true){
if((i__4737__auto___39697 < len__4736__auto___39696)){
args__4742__auto__.push((arguments[i__4737__auto___39697]));

var G__39699 = (i__4737__auto___39697 + (1));
i__4737__auto___39697 = G__39699;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return metabase.mbql.util.match.impl.update_in_unless_empty.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(metabase.mbql.util.match.impl.update_in_unless_empty.cljs$core$IFn$_invoke$arity$variadic = (function (m,ks,f,args){
if(cljs.core.not(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(m,ks)))){
return m;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.update_in,m,ks,f,args);
}
}));

(metabase.mbql.util.match.impl.update_in_unless_empty.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(metabase.mbql.util.match.impl.update_in_unless_empty.cljs$lang$applyTo = (function (seq39634){
var G__39635 = cljs.core.first(seq39634);
var seq39634__$1 = cljs.core.next(seq39634);
var G__39636 = cljs.core.first(seq39634__$1);
var seq39634__$2 = cljs.core.next(seq39634__$1);
var G__39637 = cljs.core.first(seq39634__$2);
var seq39634__$3 = cljs.core.next(seq39634__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39635,G__39636,G__39637,seq39634__$3);
}));

Object.defineProperty(module.exports, "match_with_pred_or_class", { enumerable: false, get: function() { return metabase.mbql.util.match.impl.match_with_pred_or_class; } });
Object.defineProperty(module.exports, "match_in_collection", { enumerable: false, get: function() { return metabase.mbql.util.match.impl.match_in_collection; } });
Object.defineProperty(module.exports, "replace_in_collection", { enumerable: false, get: function() { return metabase.mbql.util.match.impl.replace_in_collection; } });
Object.defineProperty(module.exports, "update_in_unless_empty", { enumerable: false, get: function() { return metabase.mbql.util.match.impl.update_in_unless_empty; } });
//# sourceMappingURL=metabase.mbql.util.match.impl.js.map
