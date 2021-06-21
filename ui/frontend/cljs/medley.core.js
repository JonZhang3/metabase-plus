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

$CLJS.SHADOW_ENV.setLoaded("medley.core.js");

goog.provide('medley.core');
/**
 * Finds the first item in a collection that matches a predicate.
 */
medley.core.find_first = (function medley$core$find_first(var_args){
var G__36083 = arguments.length;
switch (G__36083) {
case 1:
return medley.core.find_first.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.find_first.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(medley.core.find_first.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return (function (rf){
return (function() {
var G__36952 = null;
var G__36952__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__36952__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__36952__2 = (function (result,x){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return cljs.core.ensure_reduced((rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,x) : rf.call(null,result,x)));
} else {
return result;
}
});
G__36952 = function(result,x){
switch(arguments.length){
case 0:
return G__36952__0.call(this);
case 1:
return G__36952__1.call(this,result);
case 2:
return G__36952__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__36952.cljs$core$IFn$_invoke$arity$0 = G__36952__0;
G__36952.cljs$core$IFn$_invoke$arity$1 = G__36952__1;
G__36952.cljs$core$IFn$_invoke$arity$2 = G__36952__2;
return G__36952;
})()
});
}));

(medley.core.find_first.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,x){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return cljs.core.reduced(x);
} else {
return null;
}
}),null,coll);
}));

(medley.core.find_first.cljs$lang$maxFixedArity = 2);

/**
 * Dissociate a value in a nested associative structure, identified by a sequence
 *   of keys. Any collections left empty by the operation will be dissociated from
 *   their containing structures.
 */
medley.core.dissoc_in = (function medley$core$dissoc_in(var_args){
var G__36101 = arguments.length;
switch (G__36101) {
case 2:
return medley.core.dissoc_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___36960 = arguments.length;
var i__4737__auto___36961 = (0);
while(true){
if((i__4737__auto___36961 < len__4736__auto___36960)){
args_arr__4757__auto__.push((arguments[i__4737__auto___36961]));

var G__36966 = (i__4737__auto___36961 + (1));
i__4737__auto___36961 = G__36966;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return medley.core.dissoc_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(medley.core.dissoc_in.cljs$core$IFn$_invoke$arity$2 = (function (m,ks){
var temp__5733__auto__ = cljs.core.seq(ks);
if(temp__5733__auto__){
var vec__36115 = temp__5733__auto__;
var seq__36116 = cljs.core.seq(vec__36115);
var first__36117 = cljs.core.first(seq__36116);
var seq__36116__$1 = cljs.core.next(seq__36116);
var k = first__36117;
var ks__$1 = seq__36116__$1;
if(cljs.core.seq(ks__$1)){
var v = medley.core.dissoc_in.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks__$1);
if(cljs.core.empty_QMARK_(v)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
} else {
return m;
}
}));

(medley.core.dissoc_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ks,kss){
while(true){
var temp__5733__auto__ = cljs.core.seq(kss);
if(temp__5733__auto__){
var vec__36122 = temp__5733__auto__;
var seq__36123 = cljs.core.seq(vec__36122);
var first__36124 = cljs.core.first(seq__36123);
var seq__36123__$1 = cljs.core.next(seq__36123);
var ks_SINGLEQUOTE_ = first__36124;
var kss__$1 = seq__36123__$1;
var G__36994 = medley.core.dissoc_in.cljs$core$IFn$_invoke$arity$2(m,ks);
var G__36995 = ks_SINGLEQUOTE_;
var G__36996 = kss__$1;
m = G__36994;
ks = G__36995;
kss = G__36996;
continue;
} else {
return medley.core.dissoc_in.cljs$core$IFn$_invoke$arity$2(m,ks);
}
break;
}
}));

/** @this {Function} */
(medley.core.dissoc_in.cljs$lang$applyTo = (function (seq36097){
var G__36098 = cljs.core.first(seq36097);
var seq36097__$1 = cljs.core.next(seq36097);
var G__36099 = cljs.core.first(seq36097__$1);
var seq36097__$2 = cljs.core.next(seq36097__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36098,G__36099,seq36097__$2);
}));

(medley.core.dissoc_in.cljs$lang$maxFixedArity = (2));

/**
 * Associates a key with a value in a map, if and only if the value is not nil.
 */
medley.core.assoc_some = (function medley$core$assoc_some(var_args){
var G__36137 = arguments.length;
switch (G__36137) {
case 3:
return medley.core.assoc_some.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___37007 = arguments.length;
var i__4737__auto___37008 = (0);
while(true){
if((i__4737__auto___37008 < len__4736__auto___37007)){
args_arr__4757__auto__.push((arguments[i__4737__auto___37008]));

var G__37011 = (i__4737__auto___37008 + (1));
i__4737__auto___37008 = G__37011;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((3)),(0),null));
return medley.core.assoc_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4758__auto__);

}
});

(medley.core.assoc_some.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if((v == null)){
return m;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
}));

(medley.core.assoc_some.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,p__36142){
var vec__36143 = p__36142;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36143,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36143,(1),null);
return medley.core.assoc_some.cljs$core$IFn$_invoke$arity$3(m__$1,k__$1,v__$1);
}),medley.core.assoc_some.cljs$core$IFn$_invoke$arity$3(m,k,v),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
}));

/** @this {Function} */
(medley.core.assoc_some.cljs$lang$applyTo = (function (seq36133){
var G__36134 = cljs.core.first(seq36133);
var seq36133__$1 = cljs.core.next(seq36133);
var G__36135 = cljs.core.first(seq36133__$1);
var seq36133__$2 = cljs.core.next(seq36133__$1);
var G__36136 = cljs.core.first(seq36133__$2);
var seq36133__$3 = cljs.core.next(seq36133__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36134,G__36135,G__36136,seq36133__$3);
}));

(medley.core.assoc_some.cljs$lang$maxFixedArity = (3));

/**
 * Updates a value in a map given a key and a function, if and only if the key
 *   exists in the map. See: `clojure.core/update`.
 */
medley.core.update_existing = (function medley$core$update_existing(var_args){
var G__36161 = arguments.length;
switch (G__36161) {
case 3:
return medley.core.update_existing.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return medley.core.update_existing.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return medley.core.update_existing.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return medley.core.update_existing.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___37020 = arguments.length;
var i__4737__auto___37021 = (0);
while(true){
if((i__4737__auto___37021 < len__4736__auto___37020)){
args_arr__4757__auto__.push((arguments[i__4737__auto___37021]));

var G__37022 = (i__4737__auto___37021 + (1));
i__4737__auto___37021 = G__37022;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((6)),(0),null));
return medley.core.update_existing.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__4758__auto__);

}
});

(medley.core.update_existing.cljs$core$IFn$_invoke$arity$3 = (function (m,k,f){
var temp__5733__auto__ = cljs.core.find(m,k);
if(cljs.core.truth_(temp__5733__auto__)){
var kv = temp__5733__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__36165 = cljs.core.val(kv);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36165) : f.call(null,G__36165));
})());
} else {
return m;
}
}));

(medley.core.update_existing.cljs$core$IFn$_invoke$arity$4 = (function (m,k,f,x){
var temp__5733__auto__ = cljs.core.find(m,k);
if(cljs.core.truth_(temp__5733__auto__)){
var kv = temp__5733__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__36170 = cljs.core.val(kv);
var G__36171 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__36170,G__36171) : f.call(null,G__36170,G__36171));
})());
} else {
return m;
}
}));

(medley.core.update_existing.cljs$core$IFn$_invoke$arity$5 = (function (m,k,f,x,y){
var temp__5733__auto__ = cljs.core.find(m,k);
if(cljs.core.truth_(temp__5733__auto__)){
var kv = temp__5733__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__36172 = cljs.core.val(kv);
var G__36173 = x;
var G__36174 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__36172,G__36173,G__36174) : f.call(null,G__36172,G__36173,G__36174));
})());
} else {
return m;
}
}));

(medley.core.update_existing.cljs$core$IFn$_invoke$arity$6 = (function (m,k,f,x,y,z){
var temp__5733__auto__ = cljs.core.find(m,k);
if(cljs.core.truth_(temp__5733__auto__)){
var kv = temp__5733__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__36175 = cljs.core.val(kv);
var G__36176 = x;
var G__36177 = y;
var G__36178 = z;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__36175,G__36176,G__36177,G__36178) : f.call(null,G__36175,G__36176,G__36177,G__36178));
})());
} else {
return m;
}
}));

(medley.core.update_existing.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,f,x,y,z,more){
var temp__5733__auto__ = cljs.core.find(m,k);
if(cljs.core.truth_(temp__5733__auto__)){
var kv = temp__5733__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.val(kv),x,y,z,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0)));
} else {
return m;
}
}));

/** @this {Function} */
(medley.core.update_existing.cljs$lang$applyTo = (function (seq36154){
var G__36155 = cljs.core.first(seq36154);
var seq36154__$1 = cljs.core.next(seq36154);
var G__36156 = cljs.core.first(seq36154__$1);
var seq36154__$2 = cljs.core.next(seq36154__$1);
var G__36157 = cljs.core.first(seq36154__$2);
var seq36154__$3 = cljs.core.next(seq36154__$2);
var G__36158 = cljs.core.first(seq36154__$3);
var seq36154__$4 = cljs.core.next(seq36154__$3);
var G__36159 = cljs.core.first(seq36154__$4);
var seq36154__$5 = cljs.core.next(seq36154__$4);
var G__36160 = cljs.core.first(seq36154__$5);
var seq36154__$6 = cljs.core.next(seq36154__$5);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36155,G__36156,G__36157,G__36158,G__36159,G__36160,seq36154__$6);
}));

(medley.core.update_existing.cljs$lang$maxFixedArity = (6));

/**
 * Updates a value in a nested associative structure, if and only if the key
 *   path exists. See: `clojure.core/update-in`.
 */
medley.core.update_existing_in = (function medley$core$update_existing_in(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37036 = arguments.length;
var i__4737__auto___37037 = (0);
while(true){
if((i__4737__auto___37037 < len__4736__auto___37036)){
args__4742__auto__.push((arguments[i__4737__auto___37037]));

var G__37038 = (i__4737__auto___37037 + (1));
i__4737__auto___37037 = G__37038;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return medley.core.update_existing_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(medley.core.update_existing_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ks,f,args){
var up = (function medley$core$up(m__$1,ks__$1,f__$1,args__$1){
var vec__36199 = ks__$1;
var seq__36200 = cljs.core.seq(vec__36199);
var first__36201 = cljs.core.first(seq__36200);
var seq__36200__$1 = cljs.core.next(seq__36200);
var k = first__36201;
var ks__$2 = seq__36200__$1;
var temp__5733__auto__ = cljs.core.find(m__$1,k);
if(cljs.core.truth_(temp__5733__auto__)){
var kv = temp__5733__auto__;
if(ks__$2){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,medley$core$up(cljs.core.val(kv),ks__$2,f__$1,args__$1));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f__$1,cljs.core.val(kv),args__$1));
}
} else {
return m__$1;
}
});
return up(m,ks,f,args);
}));

(medley.core.update_existing_in.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(medley.core.update_existing_in.cljs$lang$applyTo = (function (seq36184){
var G__36185 = cljs.core.first(seq36184);
var seq36184__$1 = cljs.core.next(seq36184);
var G__36186 = cljs.core.first(seq36184__$1);
var seq36184__$2 = cljs.core.next(seq36184__$1);
var G__36187 = cljs.core.first(seq36184__$2);
var seq36184__$3 = cljs.core.next(seq36184__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36185,G__36186,G__36187,seq36184__$3);
}));

medley.core.editable_QMARK_ = (function medley$core$editable_QMARK_(coll){
if((!((coll == null)))){
if((((coll.cljs$lang$protocol_mask$partition1$ & (4))) || ((cljs.core.PROTOCOL_SENTINEL === coll.cljs$core$IEditableCollection$)))){
return true;
} else {
if((!coll.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IEditableCollection,coll);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IEditableCollection,coll);
}
});
medley.core.reduce_map = (function medley$core$reduce_map(f,coll){
var coll_SINGLEQUOTE_ = ((cljs.core.record_QMARK_(coll))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,coll):coll);
if(medley.core.editable_QMARK_(coll_SINGLEQUOTE_)){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc_BANG_) : f.call(null,cljs.core.assoc_BANG_)),cljs.core.transient$(cljs.core.empty(coll_SINGLEQUOTE_)),coll_SINGLEQUOTE_));
} else {
return cljs.core.reduce_kv((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc) : f.call(null,cljs.core.assoc)),cljs.core.empty(coll_SINGLEQUOTE_),coll_SINGLEQUOTE_);
}
});
/**
 * Create a map entry for a key and value pair.
 */
medley.core.map_entry = (function medley$core$map_entry(k,v){
return (new cljs.core.MapEntry(k,v,null));
});
/**
 * Maps a function over the key/value pairs of an associative collection. Expects
 *   a function that takes two arguments, the key and value, and returns the new
 *   key and value as a collection of two elements.
 */
medley.core.map_kv = (function medley$core$map_kv(f,coll){
return medley.core.reduce_map((function (xf){
return (function (m,k,v){
var vec__36251 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(k,v) : f.call(null,k,v));
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36251,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36251,(1),null);
return (xf.cljs$core$IFn$_invoke$arity$3 ? xf.cljs$core$IFn$_invoke$arity$3(m,k__$1,v__$1) : xf.call(null,m,k__$1,v__$1));
});
}),coll);
});
/**
 * Maps a function over the keys of an associative collection.
 */
medley.core.map_keys = (function medley$core$map_keys(f,coll){
return medley.core.reduce_map((function (xf){
return (function (m,k,v){
var G__36261 = m;
var G__36262 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k));
var G__36263 = v;
return (xf.cljs$core$IFn$_invoke$arity$3 ? xf.cljs$core$IFn$_invoke$arity$3(G__36261,G__36262,G__36263) : xf.call(null,G__36261,G__36262,G__36263));
});
}),coll);
});
/**
 * Maps a function over the values of one or more associative collections.
 *   The function should accept number-of-colls arguments. Any keys which are not
 *   shared among all collections are ignored.
 */
medley.core.map_vals = (function medley$core$map_vals(var_args){
var G__36276 = arguments.length;
switch (G__36276) {
case 2:
return medley.core.map_vals.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___37046 = arguments.length;
var i__4737__auto___37047 = (0);
while(true){
if((i__4737__auto___37047 < len__4736__auto___37046)){
args_arr__4757__auto__.push((arguments[i__4737__auto___37047]));

var G__37048 = (i__4737__auto___37047 + (1));
i__4737__auto___37047 = G__37048;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return medley.core.map_vals.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(medley.core.map_vals.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return medley.core.reduce_map((function (xf){
return (function (m,k,v){
var G__36279 = m;
var G__36280 = k;
var G__36281 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v));
return (xf.cljs$core$IFn$_invoke$arity$3 ? xf.cljs$core$IFn$_invoke$arity$3(G__36279,G__36280,G__36281) : xf.call(null,G__36279,G__36280,G__36281));
});
}),coll);
}));

(medley.core.map_vals.cljs$core$IFn$_invoke$arity$variadic = (function (f,c1,colls){
return medley.core.reduce_map((function (xf){
return (function (m,k,v){
if(cljs.core.every_QMARK_((function (p1__36264_SHARP_){
return cljs.core.contains_QMARK_(p1__36264_SHARP_,k);
}),colls)){
var G__36284 = m;
var G__36285 = k;
var G__36286 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,v,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36265_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__36265_SHARP_,k);
}),colls));
return (xf.cljs$core$IFn$_invoke$arity$3 ? xf.cljs$core$IFn$_invoke$arity$3(G__36284,G__36285,G__36286) : xf.call(null,G__36284,G__36285,G__36286));
} else {
return m;
}
});
}),c1);
}));

/** @this {Function} */
(medley.core.map_vals.cljs$lang$applyTo = (function (seq36267){
var G__36268 = cljs.core.first(seq36267);
var seq36267__$1 = cljs.core.next(seq36267);
var G__36269 = cljs.core.first(seq36267__$1);
var seq36267__$2 = cljs.core.next(seq36267__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36268,G__36269,seq36267__$2);
}));

(medley.core.map_vals.cljs$lang$maxFixedArity = (2));

/**
 * Maps a function over the key/value pairs of an associative collection, using
 *   the return of the function as the new key.
 */
medley.core.map_kv_keys = (function medley$core$map_kv_keys(f,coll){
return medley.core.reduce_map((function (xf){
return (function (m,k,v){
var G__36293 = m;
var G__36294 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(k,v) : f.call(null,k,v));
var G__36295 = v;
return (xf.cljs$core$IFn$_invoke$arity$3 ? xf.cljs$core$IFn$_invoke$arity$3(G__36293,G__36294,G__36295) : xf.call(null,G__36293,G__36294,G__36295));
});
}),coll);
});
/**
 * Maps a function over the key/value pairs of an associative collection, using
 *   the return of the function as the new value.
 */
medley.core.map_kv_vals = (function medley$core$map_kv_vals(f,coll){
return medley.core.reduce_map((function (xf){
return (function (m,k,v){
var G__36306 = m;
var G__36307 = k;
var G__36308 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(k,v) : f.call(null,k,v));
return (xf.cljs$core$IFn$_invoke$arity$3 ? xf.cljs$core$IFn$_invoke$arity$3(G__36306,G__36307,G__36308) : xf.call(null,G__36306,G__36307,G__36308));
});
}),coll);
});
/**
 * Returns a new associative collection of the items in coll for which
 *   `(pred (key item) (val item))` returns true.
 */
medley.core.filter_kv = (function medley$core$filter_kv(pred,coll){
return medley.core.reduce_map((function (xf){
return (function (m,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return (xf.cljs$core$IFn$_invoke$arity$3 ? xf.cljs$core$IFn$_invoke$arity$3(m,k,v) : xf.call(null,m,k,v));
} else {
return m;
}
});
}),coll);
});
/**
 * Returns a new associative collection of the items in coll for which
 *   `(pred (key item))` returns true.
 */
medley.core.filter_keys = (function medley$core$filter_keys(pred,coll){
return medley.core.reduce_map((function (xf){
return (function (m,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(k) : pred.call(null,k)))){
return (xf.cljs$core$IFn$_invoke$arity$3 ? xf.cljs$core$IFn$_invoke$arity$3(m,k,v) : xf.call(null,m,k,v));
} else {
return m;
}
});
}),coll);
});
/**
 * Returns a new associative collection of the items in coll for which
 *   `(pred (val item))` returns true.
 */
medley.core.filter_vals = (function medley$core$filter_vals(pred,coll){
return medley.core.reduce_map((function (xf){
return (function (m,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(v) : pred.call(null,v)))){
return (xf.cljs$core$IFn$_invoke$arity$3 ? xf.cljs$core$IFn$_invoke$arity$3(m,k,v) : xf.call(null,m,k,v));
} else {
return m;
}
});
}),coll);
});
/**
 * Returns a new associative collection of the items in coll for which
 *   `(pred (key item) (val item))` returns false.
 */
medley.core.remove_kv = (function medley$core$remove_kv(pred,coll){
return medley.core.filter_kv(cljs.core.complement(pred),coll);
});
/**
 * Returns a new associative collection of the items in coll for which
 *   `(pred (key item))` returns false.
 */
medley.core.remove_keys = (function medley$core$remove_keys(pred,coll){
return medley.core.filter_keys(cljs.core.complement(pred),coll);
});
/**
 * Returns a new associative collection of the items in coll for which
 *   `(pred (val item))` returns false.
 */
medley.core.remove_vals = (function medley$core$remove_vals(pred,coll){
return medley.core.filter_vals(cljs.core.complement(pred),coll);
});
/**
 * Creates an empty persistent queue, or one populated with a collection.
 */
medley.core.queue = (function medley$core$queue(var_args){
var G__36345 = arguments.length;
switch (G__36345) {
case 0:
return medley.core.queue.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return medley.core.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(medley.core.queue.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentQueue.EMPTY;
}));

(medley.core.queue.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(medley.core.queue.cljs$core$IFn$_invoke$arity$0(),coll);
}));

(medley.core.queue.cljs$lang$maxFixedArity = 1);

/**
 * Returns true if x implements clojure.lang.PersistentQueue.
 */
medley.core.queue_QMARK_ = (function medley$core$queue_QMARK_(x){
return (x instanceof cljs.core.PersistentQueue);
});
/**
 * Returns true if x is a boolean.
 */
medley.core.boolean_QMARK_ = (function medley$core$boolean_QMARK_(x){
return ((x === true) || (x === false));
});
/**
 * Return the least argument (as defined by the compare function) in O(n) time.
 */
medley.core.least = (function medley$core$least(var_args){
var G__36371 = arguments.length;
switch (G__36371) {
case 0:
return medley.core.least.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return medley.core.least.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.least.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___37094 = arguments.length;
var i__4737__auto___37095 = (0);
while(true){
if((i__4737__auto___37095 < len__4736__auto___37094)){
args_arr__4757__auto__.push((arguments[i__4737__auto___37095]));

var G__37098 = (i__4737__auto___37095 + (1));
i__4737__auto___37095 = G__37098;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return medley.core.least.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(medley.core.least.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(medley.core.least.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
}));

(medley.core.least.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
if((cljs.core.compare(a,b) < (0))){
return a;
} else {
return b;
}
}));

(medley.core.least.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(medley.core.least,medley.core.least.cljs$core$IFn$_invoke$arity$2(a,b),more);
}));

/** @this {Function} */
(medley.core.least.cljs$lang$applyTo = (function (seq36365){
var G__36367 = cljs.core.first(seq36365);
var seq36365__$1 = cljs.core.next(seq36365);
var G__36368 = cljs.core.first(seq36365__$1);
var seq36365__$2 = cljs.core.next(seq36365__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36367,G__36368,seq36365__$2);
}));

(medley.core.least.cljs$lang$maxFixedArity = (2));

/**
 * Find the greatest argument (as defined by the compare function) in O(n) time.
 */
medley.core.greatest = (function medley$core$greatest(var_args){
var G__36406 = arguments.length;
switch (G__36406) {
case 0:
return medley.core.greatest.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return medley.core.greatest.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.greatest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___37109 = arguments.length;
var i__4737__auto___37110 = (0);
while(true){
if((i__4737__auto___37110 < len__4736__auto___37109)){
args_arr__4757__auto__.push((arguments[i__4737__auto___37110]));

var G__37111 = (i__4737__auto___37110 + (1));
i__4737__auto___37110 = G__37111;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return medley.core.greatest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(medley.core.greatest.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(medley.core.greatest.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
}));

(medley.core.greatest.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
if((cljs.core.compare(a,b) > (0))){
return a;
} else {
return b;
}
}));

(medley.core.greatest.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(medley.core.greatest,medley.core.greatest.cljs$core$IFn$_invoke$arity$2(a,b),more);
}));

/** @this {Function} */
(medley.core.greatest.cljs$lang$applyTo = (function (seq36402){
var G__36403 = cljs.core.first(seq36402);
var seq36402__$1 = cljs.core.next(seq36402);
var G__36404 = cljs.core.first(seq36402__$1);
var seq36402__$2 = cljs.core.next(seq36402__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36403,G__36404,seq36402__$2);
}));

(medley.core.greatest.cljs$lang$maxFixedArity = (2));

/**
 * Lazily concatenates a collection of collections into a flat sequence.
 */
medley.core.join = (function medley$core$join(colls){
return (new cljs.core.LazySeq(null,(function (){
var temp__5735__auto__ = cljs.core.seq(colls);
if(temp__5735__auto__){
var s = temp__5735__auto__;
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.first(s),(function (){var G__36480 = cljs.core.rest(s);
return (medley.core.join.cljs$core$IFn$_invoke$arity$1 ? medley.core.join.cljs$core$IFn$_invoke$arity$1(G__36480) : medley.core.join.call(null,G__36480));
})());
} else {
return null;
}
}),null,null));
});
/**
 * Recursively merges maps together. If all the maps supplied have nested maps
 *   under the same keys, these nested maps are merged. Otherwise the value is
 *   overwritten, as in `clojure.core/merge`.
 */
medley.core.deep_merge = (function medley$core$deep_merge(var_args){
var G__36491 = arguments.length;
switch (G__36491) {
case 0:
return medley.core.deep_merge.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return medley.core.deep_merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.deep_merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___37127 = arguments.length;
var i__4737__auto___37128 = (0);
while(true){
if((i__4737__auto___37128 < len__4736__auto___37127)){
args_arr__4757__auto__.push((arguments[i__4737__auto___37128]));

var G__37129 = (i__4737__auto___37128 + (1));
i__4737__auto___37128 = G__37129;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return medley.core.deep_merge.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(medley.core.deep_merge.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(medley.core.deep_merge.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
}));

(medley.core.deep_merge.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
if(cljs.core.truth_((function (){var or__4126__auto__ = a;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return b;
}
})())){
var merge_entry = (function medley$core$merge_entry(m,e){
var k = cljs.core.key(e);
var v_SINGLEQUOTE_ = cljs.core.val(e);
if(cljs.core.contains_QMARK_(m,k)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(((cljs.core.map_QMARK_(v)) && (cljs.core.map_QMARK_(v_SINGLEQUOTE_)))){
return medley.core.deep_merge.cljs$core$IFn$_invoke$arity$2(v,v_SINGLEQUOTE_);
} else {
return v_SINGLEQUOTE_;
}
})());
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v_SINGLEQUOTE_);
}
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(merge_entry,(function (){var or__4126__auto__ = a;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.seq(b));
} else {
return null;
}
}));

(medley.core.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(medley.core.deep_merge,(function (){var or__4126__auto__ = a;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.cons(b,more));
}));

/** @this {Function} */
(medley.core.deep_merge.cljs$lang$applyTo = (function (seq36485){
var G__36486 = cljs.core.first(seq36485);
var seq36485__$1 = cljs.core.next(seq36485);
var G__36487 = cljs.core.first(seq36485__$1);
var seq36485__$2 = cljs.core.next(seq36485__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36486,G__36487,seq36485__$2);
}));

(medley.core.deep_merge.cljs$lang$maxFixedArity = (2));

/**
 * Applies a function f to the argument list formed by concatenating
 *   everything but the last element of args with the last element of
 *   args. This is useful for applying a function that accepts keyword
 *   arguments to a map.
 */
medley.core.mapply = (function medley$core$mapply(var_args){
var G__36578 = arguments.length;
switch (G__36578) {
case 2:
return medley.core.mapply.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___37132 = arguments.length;
var i__4737__auto___37133 = (0);
while(true){
if((i__4737__auto___37133 < len__4736__auto___37132)){
args_arr__4757__auto__.push((arguments[i__4737__auto___37133]));

var G__37136 = (i__4737__auto___37133 + (1));
i__4737__auto___37133 = G__37136;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return medley.core.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(medley.core.mapply.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,m));
}));

(medley.core.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,a,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,a,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.concat,cljs.core.butlast(args),cljs.core.last(args)));
}));

/** @this {Function} */
(medley.core.mapply.cljs$lang$applyTo = (function (seq36574){
var G__36575 = cljs.core.first(seq36574);
var seq36574__$1 = cljs.core.next(seq36574);
var G__36576 = cljs.core.first(seq36574__$1);
var seq36574__$2 = cljs.core.next(seq36574__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36575,G__36576,seq36574__$2);
}));

(medley.core.mapply.cljs$lang$maxFixedArity = (2));

/**
 * Returns a map of the elements of coll keyed by the result of f on each
 *   element. The value at each key will be the last element in coll associated
 *   with that key. This function is similar to `clojure.core/group-by`, except
 *   that elements with the same key are overwritten, rather than added to a
 *   vector of values.
 */
medley.core.index_by = (function medley$core$index_by(f,coll){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__36605_SHARP_,p2__36606_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__36605_SHARP_,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p2__36606_SHARP_) : f.call(null,p2__36606_SHARP_)),p2__36606_SHARP_);
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
 * Returns a lazy seq of the first item in each coll, then the second, etc.
 *   Unlike `clojure.core/interleave`, the returned seq contains all items in the
 *   supplied collections, even if the collections are different sizes.
 */
medley.core.interleave_all = (function medley$core$interleave_all(var_args){
var G__36621 = arguments.length;
switch (G__36621) {
case 0:
return medley.core.interleave_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return medley.core.interleave_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.interleave_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___37151 = arguments.length;
var i__4737__auto___37154 = (0);
while(true){
if((i__4737__auto___37154 < len__4736__auto___37151)){
args_arr__4757__auto__.push((arguments[i__4737__auto___37154]));

var G__37155 = (i__4737__auto___37154 + (1));
i__4737__auto___37154 = G__37155;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return medley.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(medley.core.interleave_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.List.EMPTY;
}));

(medley.core.interleave_all.cljs$core$IFn$_invoke$arity$1 = (function (c1){
return (new cljs.core.LazySeq(null,(function (){
return c1;
}),null,null));
}));

(medley.core.interleave_all.cljs$core$IFn$_invoke$arity$2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,(function (){
var s1 = cljs.core.seq(c1);
var s2 = cljs.core.seq(c2);
if(((s1) && (s2))){
return cljs.core.cons(cljs.core.first(s1),cljs.core.cons(cljs.core.first(s2),medley.core.interleave_all.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(s1),cljs.core.rest(s2))));
} else {
return ((s1) || (s2));
}
}),null,null));
}));

(medley.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (c1,c2,colls){
return (new cljs.core.LazySeq(null,(function (){
var ss = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(colls,c2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([c1], 0))));
if(cljs.core.seq(ss)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,ss),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(medley.core.interleave_all,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,ss)));
} else {
return null;
}
}),null,null));
}));

/** @this {Function} */
(medley.core.interleave_all.cljs$lang$applyTo = (function (seq36618){
var G__36619 = cljs.core.first(seq36618);
var seq36618__$1 = cljs.core.next(seq36618);
var G__36620 = cljs.core.first(seq36618__$1);
var seq36618__$2 = cljs.core.next(seq36618__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36619,G__36620,seq36618__$2);
}));

(medley.core.interleave_all.cljs$lang$maxFixedArity = (2));

/**
 * Returns a lazy sequence of the elements of coll, removing any elements that
 *   return duplicate values when passed to a function f.
 */
medley.core.distinct_by = (function medley$core$distinct_by(var_args){
var G__36667 = arguments.length;
switch (G__36667) {
case 1:
return medley.core.distinct_by.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.distinct_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(medley.core.distinct_by.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (rf){
var seen = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
return (function() {
var G__37178 = null;
var G__37178__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__37178__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__37178__2 = (function (result,x){
var fx = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
if(cljs.core.contains_QMARK_(cljs.core.deref(seen),fx)){
return result;
} else {
seen.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen.cljs$core$IDeref$_deref$arity$1(null),fx));

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,x) : rf.call(null,result,x));
}
});
G__37178 = function(result,x){
switch(arguments.length){
case 0:
return G__37178__0.call(this);
case 1:
return G__37178__1.call(this,result);
case 2:
return G__37178__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37178.cljs$core$IFn$_invoke$arity$0 = G__37178__0;
G__37178.cljs$core$IFn$_invoke$arity$1 = G__37178__1;
G__37178.cljs$core$IFn$_invoke$arity$2 = G__37178__2;
return G__37178;
})()
});
}));

(medley.core.distinct_by.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
var step = (function medley$core$step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__36695,seen__$1){
while(true){
var vec__36696 = p__36695;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36696,(0),null);
var xs__$1 = vec__36696;
var temp__5735__auto__ = cljs.core.seq(xs__$1);
if(temp__5735__auto__){
var s = temp__5735__auto__;
var fx = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
if(cljs.core.contains_QMARK_(seen__$1,fx)){
var G__37185 = cljs.core.rest(s);
var G__37186 = seen__$1;
p__36695 = G__37185;
seen__$1 = G__37186;
continue;
} else {
return cljs.core.cons(x,medley$core$step(cljs.core.rest(s),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,fx)));
}
} else {
return null;
}
break;
}
})(xs,seen);
}),null,null));
});
return step(coll,cljs.core.PersistentHashSet.EMPTY);
}));

(medley.core.distinct_by.cljs$lang$maxFixedArity = 2);

/**
 * Returns a lazy sequence of the elements of coll, removing any **consecutive**
 *   elements that return duplicate values when passed to a function f.
 */
medley.core.dedupe_by = (function medley$core$dedupe_by(var_args){
var G__36706 = arguments.length;
switch (G__36706) {
case 1:
return medley.core.dedupe_by.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.dedupe_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(medley.core.dedupe_by.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (rf){
var pv = cljs.core.volatile_BANG_(new cljs.core.Keyword("medley.core","none","medley.core/none",60848325));
return (function() {
var G__37191 = null;
var G__37191__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__37191__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__37191__2 = (function (result,x){
var prior = cljs.core.deref(pv);
var fx = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
cljs.core.vreset_BANG_(pv,fx);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prior,fx)){
return result;
} else {
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,x) : rf.call(null,result,x));
}
});
G__37191 = function(result,x){
switch(arguments.length){
case 0:
return G__37191__0.call(this);
case 1:
return G__37191__1.call(this,result);
case 2:
return G__37191__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37191.cljs$core$IFn$_invoke$arity$0 = G__37191__0;
G__37191.cljs$core$IFn$_invoke$arity$1 = G__37191__1;
G__37191.cljs$core$IFn$_invoke$arity$2 = G__37191__2;
return G__37191;
})()
});
}));

(medley.core.dedupe_by.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(medley.core.dedupe_by.cljs$core$IFn$_invoke$arity$1(f),coll);
}));

(medley.core.dedupe_by.cljs$lang$maxFixedArity = 2);

/**
 * Returns a lazy sequence of successive items from coll up to and including
 *   the first item for which `(pred item)` returns true.
 */
medley.core.take_upto = (function medley$core$take_upto(var_args){
var G__36741 = arguments.length;
switch (G__36741) {
case 1:
return medley.core.take_upto.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.take_upto.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(medley.core.take_upto.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return (function (rf){
return (function() {
var G__37194 = null;
var G__37194__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__37194__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__37194__2 = (function (result,x){
var result__$1 = (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,x) : rf.call(null,result,x));
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return cljs.core.ensure_reduced(result__$1);
} else {
return result__$1;
}
});
G__37194 = function(result,x){
switch(arguments.length){
case 0:
return G__37194__0.call(this);
case 1:
return G__37194__1.call(this,result);
case 2:
return G__37194__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37194.cljs$core$IFn$_invoke$arity$0 = G__37194__0;
G__37194.cljs$core$IFn$_invoke$arity$1 = G__37194__1;
G__37194.cljs$core$IFn$_invoke$arity$2 = G__37194__2;
return G__37194;
})()
});
}));

(medley.core.take_upto.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__5735__auto__ = cljs.core.seq(coll);
if(temp__5735__auto__){
var s = temp__5735__auto__;
var x = cljs.core.first(s);
return cljs.core.cons(x,((cljs.core.not((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x))))?medley.core.take_upto.cljs$core$IFn$_invoke$arity$2(pred,cljs.core.rest(s)):null));
} else {
return null;
}
}),null,null));
}));

(medley.core.take_upto.cljs$lang$maxFixedArity = 2);

/**
 * Returns a lazy sequence of the items in coll starting *after* the first item
 *   for which `(pred item)` returns true.
 */
medley.core.drop_upto = (function medley$core$drop_upto(var_args){
var G__36770 = arguments.length;
switch (G__36770) {
case 1:
return medley.core.drop_upto.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.drop_upto.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(medley.core.drop_upto.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return (function (rf){
var dv = cljs.core.volatile_BANG_(true);
return (function() {
var G__37210 = null;
var G__37210__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__37210__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__37210__2 = (function (result,x){
if(cljs.core.truth_(cljs.core.deref(dv))){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
cljs.core.vreset_BANG_(dv,false);
} else {
}

return result;
} else {
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,x) : rf.call(null,result,x));
}
});
G__37210 = function(result,x){
switch(arguments.length){
case 0:
return G__37210__0.call(this);
case 1:
return G__37210__1.call(this,result);
case 2:
return G__37210__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37210.cljs$core$IFn$_invoke$arity$0 = G__37210__0;
G__37210.cljs$core$IFn$_invoke$arity$1 = G__37210__1;
G__37210.cljs$core$IFn$_invoke$arity$2 = G__37210__2;
return G__37210;
})()
});
}));

(medley.core.drop_upto.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return cljs.core.rest(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(pred),coll));
}));

(medley.core.drop_upto.cljs$lang$maxFixedArity = 2);

/**
 * Returns an ordered, lazy sequence of vectors `[index item]`, where item is a
 *   value in coll, and index its position starting from zero.
 */
medley.core.indexed = (function medley$core$indexed(var_args){
var G__36808 = arguments.length;
switch (G__36808) {
case 0:
return medley.core.indexed.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return medley.core.indexed.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(medley.core.indexed.cljs$core$IFn$_invoke$arity$0 = (function (){
return (function (rf){
var i = cljs.core.volatile_BANG_((-1));
return (function() {
var G__37217 = null;
var G__37217__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__37217__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__37217__2 = (function (result,x){
var G__36830 = result;
var G__36831 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(i.cljs$core$IDeref$_deref$arity$1(null) + (1))),x], null);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__36830,G__36831) : rf.call(null,G__36830,G__36831));
});
G__37217 = function(result,x){
switch(arguments.length){
case 0:
return G__37217__0.call(this);
case 1:
return G__37217__1.call(this,result);
case 2:
return G__37217__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37217.cljs$core$IFn$_invoke$arity$0 = G__37217__0;
G__37217.cljs$core$IFn$_invoke$arity$1 = G__37217__1;
G__37217.cljs$core$IFn$_invoke$arity$2 = G__37217__2;
return G__37217;
})()
});
}));

(medley.core.indexed.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,coll);
}));

(medley.core.indexed.cljs$lang$maxFixedArity = 1);

/**
 * Returns a lazy sequence of the items in coll, with a new item inserted at
 *   the supplied index, followed by all subsequent items of the collection. Runs
 *   in O(n) time.
 */
medley.core.insert_nth = (function medley$core$insert_nth(var_args){
var G__36889 = arguments.length;
switch (G__36889) {
case 2:
return medley.core.insert_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return medley.core.insert_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(medley.core.insert_nth.cljs$core$IFn$_invoke$arity$2 = (function (index,item){
return (function (rf){
var idx = cljs.core.volatile_BANG_((index + (1)));
return (function() {
var G__37234 = null;
var G__37234__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__37234__1 = (function (result){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(idx),(1))){
var G__36890 = (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,item) : rf.call(null,result,item));
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__36890) : rf.call(null,G__36890));
} else {
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
}
});
var G__37234__2 = (function (result,x){
if((idx.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(idx.cljs$core$IDeref$_deref$arity$1(null) - (1))) === (0))){
var G__36892 = (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,item) : rf.call(null,result,item));
var G__36893 = x;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__36892,G__36893) : rf.call(null,G__36892,G__36893));
} else {
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,x) : rf.call(null,result,x));
}
});
G__37234 = function(result,x){
switch(arguments.length){
case 0:
return G__37234__0.call(this);
case 1:
return G__37234__1.call(this,result);
case 2:
return G__37234__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37234.cljs$core$IFn$_invoke$arity$0 = G__37234__0;
G__37234.cljs$core$IFn$_invoke$arity$1 = G__37234__1;
G__37234.cljs$core$IFn$_invoke$arity$2 = G__37234__2;
return G__37234;
})()
});
}));

(medley.core.insert_nth.cljs$core$IFn$_invoke$arity$3 = (function (index,item,coll){
return (new cljs.core.LazySeq(null,(function (){
if((index === (0))){
return cljs.core.cons(item,coll);
} else {
if(cljs.core.seq(coll)){
return cljs.core.cons(cljs.core.first(coll),medley.core.insert_nth.cljs$core$IFn$_invoke$arity$3((index - (1)),item,cljs.core.rest(coll)));
} else {
return null;
}
}
}),null,null));
}));

(medley.core.insert_nth.cljs$lang$maxFixedArity = 3);

/**
 * Returns a lazy sequence of the items in coll, except for the item at the
 *   supplied index. Runs in O(n) time.
 */
medley.core.remove_nth = (function medley$core$remove_nth(var_args){
var G__36901 = arguments.length;
switch (G__36901) {
case 1:
return medley.core.remove_nth.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.remove_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(medley.core.remove_nth.cljs$core$IFn$_invoke$arity$1 = (function (index){
return (function (rf){
var idx = cljs.core.volatile_BANG_((index + (1)));
return (function() {
var G__37246 = null;
var G__37246__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__37246__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__37246__2 = (function (result,x){
if((idx.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(idx.cljs$core$IDeref$_deref$arity$1(null) - (1))) === (0))){
return result;
} else {
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,x) : rf.call(null,result,x));
}
});
G__37246 = function(result,x){
switch(arguments.length){
case 0:
return G__37246__0.call(this);
case 1:
return G__37246__1.call(this,result);
case 2:
return G__37246__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37246.cljs$core$IFn$_invoke$arity$0 = G__37246__0;
G__37246.cljs$core$IFn$_invoke$arity$1 = G__37246__1;
G__37246.cljs$core$IFn$_invoke$arity$2 = G__37246__2;
return G__37246;
})()
});
}));

(medley.core.remove_nth.cljs$core$IFn$_invoke$arity$2 = (function (index,coll){
return (new cljs.core.LazySeq(null,(function (){
if((index === (0))){
return cljs.core.rest(coll);
} else {
if(cljs.core.seq(coll)){
return cljs.core.cons(cljs.core.first(coll),medley.core.remove_nth.cljs$core$IFn$_invoke$arity$2((index - (1)),cljs.core.rest(coll)));
} else {
return null;
}
}
}),null,null));
}));

(medley.core.remove_nth.cljs$lang$maxFixedArity = 2);

/**
 * Returns a lazy sequence of the items in coll, with a new item replacing the
 *   item at the supplied index. Runs in O(n) time.
 */
medley.core.replace_nth = (function medley$core$replace_nth(var_args){
var G__36908 = arguments.length;
switch (G__36908) {
case 2:
return medley.core.replace_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return medley.core.replace_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(medley.core.replace_nth.cljs$core$IFn$_invoke$arity$2 = (function (index,item){
return (function (rf){
var idx = cljs.core.volatile_BANG_((index + (1)));
return (function() {
var G__37256 = null;
var G__37256__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__37256__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__37256__2 = (function (result,x){
if((idx.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(idx.cljs$core$IDeref$_deref$arity$1(null) - (1))) === (0))){
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,item) : rf.call(null,result,item));
} else {
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,x) : rf.call(null,result,x));
}
});
G__37256 = function(result,x){
switch(arguments.length){
case 0:
return G__37256__0.call(this);
case 1:
return G__37256__1.call(this,result);
case 2:
return G__37256__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37256.cljs$core$IFn$_invoke$arity$0 = G__37256__0;
G__37256.cljs$core$IFn$_invoke$arity$1 = G__37256__1;
G__37256.cljs$core$IFn$_invoke$arity$2 = G__37256__2;
return G__37256;
})()
});
}));

(medley.core.replace_nth.cljs$core$IFn$_invoke$arity$3 = (function (index,item,coll){
return (new cljs.core.LazySeq(null,(function (){
if((index === (0))){
return cljs.core.cons(item,cljs.core.rest(coll));
} else {
if(cljs.core.seq(coll)){
return cljs.core.cons(cljs.core.first(coll),medley.core.replace_nth.cljs$core$IFn$_invoke$arity$3((index - (1)),item,cljs.core.rest(coll)));
} else {
return null;
}
}
}),null,null));
}));

(medley.core.replace_nth.cljs$lang$maxFixedArity = 3);

/**
 * Returns the absolute value of a number.
 */
medley.core.abs = (function medley$core$abs(x){
if((x < (0))){
return (- x);
} else {
return x;
}
});
/**
 * Atomically swaps the value of the atom to be `(apply f x args)`, where x is
 *   the current value of the atom, then returns the original value of the atom.
 *   This function therefore acts like an atomic `deref` then `swap!`.
 */
medley.core.deref_swap_BANG_ = (function medley$core$deref_swap_BANG_(var_args){
var G__36926 = arguments.length;
switch (G__36926) {
case 2:
return medley.core.deref_swap_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___37274 = arguments.length;
var i__4737__auto___37276 = (0);
while(true){
if((i__4737__auto___37276 < len__4736__auto___37274)){
args_arr__4757__auto__.push((arguments[i__4737__auto___37276]));

var G__37281 = (i__4737__auto___37276 + (1));
i__4737__auto___37276 = G__37281;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return medley.core.deref_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(medley.core.deref_swap_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (atom,f){
var value = cljs.core.deref(atom);
cljs.core.reset_BANG_(atom,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(value) : f.call(null,value)));

return value;
}));

(medley.core.deref_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (atom,f,args){
return medley.core.deref_swap_BANG_.cljs$core$IFn$_invoke$arity$2(atom,(function (p1__36913_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,p1__36913_SHARP_,args);
}));
}));

/** @this {Function} */
(medley.core.deref_swap_BANG_.cljs$lang$applyTo = (function (seq36918){
var G__36919 = cljs.core.first(seq36918);
var seq36918__$1 = cljs.core.next(seq36918);
var G__36920 = cljs.core.first(seq36918__$1);
var seq36918__$2 = cljs.core.next(seq36918__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36919,G__36920,seq36918__$2);
}));

(medley.core.deref_swap_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Sets the value of the atom without regard for the current value, then returns
 *   the original value of the atom. See also: [[deref-swap!]].
 */
medley.core.deref_reset_BANG_ = (function medley$core$deref_reset_BANG_(atom,newval){
return medley.core.deref_swap_BANG_.cljs$core$IFn$_invoke$arity$2(atom,cljs.core.constantly(newval));
});
/**
 * Returns the message attached to the given Error/Throwable object. For all
 *   other types returns nil. Same as `cljs.core/ex-message` except it works for
 *   Clojure as well as ClojureScript.
 */
medley.core.ex_message = (function medley$core$ex_message(ex){
return cljs.core.ex_message(ex);
});
/**
 * Returns the cause attached to the given ExceptionInfo/Throwable object. For
 *   all other types returns nil. Same as `cljs.core/ex-cause` except it works for
 *   Clojure as well as ClojureScript.
 */
medley.core.ex_cause = (function medley$core$ex_cause(ex){
return cljs.core.ex_cause(ex);
});
/**
 * Returns true if the value is a UUID.
 */
medley.core.uuid_QMARK_ = (function medley$core$uuid_QMARK_(x){
return (x instanceof cljs.core.UUID);
});
/**
 * Returns a UUID generated from the supplied string. Same as `cljs.core/uuid`
 *   in ClojureScript, while in Clojure it returns a `java.util.UUID` object.
 */
medley.core.uuid = (function medley$core$uuid(s){
return cljs.core.uuid(s);
});
/**
 * Generates a new random UUID. Same as `cljs.core/random-uuid` except it works
 *   for Clojure as well as ClojureScript.
 */
medley.core.random_uuid = (function medley$core$random_uuid(){
return cljs.core.random_uuid();
});
Object.defineProperty(module.exports, "uuid", { enumerable: false, get: function() { return medley.core.uuid; } });
Object.defineProperty(module.exports, "dissoc_in", { enumerable: false, get: function() { return medley.core.dissoc_in; } });
Object.defineProperty(module.exports, "drop_upto", { enumerable: false, get: function() { return medley.core.drop_upto; } });
Object.defineProperty(module.exports, "random_uuid", { enumerable: false, get: function() { return medley.core.random_uuid; } });
Object.defineProperty(module.exports, "greatest", { enumerable: false, get: function() { return medley.core.greatest; } });
Object.defineProperty(module.exports, "index_by", { enumerable: false, get: function() { return medley.core.index_by; } });
Object.defineProperty(module.exports, "boolean_QMARK_", { enumerable: false, get: function() { return medley.core.boolean_QMARK_; } });
Object.defineProperty(module.exports, "remove_nth", { enumerable: false, get: function() { return medley.core.remove_nth; } });
Object.defineProperty(module.exports, "join", { enumerable: false, get: function() { return medley.core.join; } });
Object.defineProperty(module.exports, "insert_nth", { enumerable: false, get: function() { return medley.core.insert_nth; } });
Object.defineProperty(module.exports, "distinct_by", { enumerable: false, get: function() { return medley.core.distinct_by; } });
Object.defineProperty(module.exports, "indexed", { enumerable: false, get: function() { return medley.core.indexed; } });
Object.defineProperty(module.exports, "remove_kv", { enumerable: false, get: function() { return medley.core.remove_kv; } });
Object.defineProperty(module.exports, "find_first", { enumerable: false, get: function() { return medley.core.find_first; } });
Object.defineProperty(module.exports, "map_kv_vals", { enumerable: false, get: function() { return medley.core.map_kv_vals; } });
Object.defineProperty(module.exports, "filter_vals", { enumerable: false, get: function() { return medley.core.filter_vals; } });
Object.defineProperty(module.exports, "deep_merge", { enumerable: false, get: function() { return medley.core.deep_merge; } });
Object.defineProperty(module.exports, "deref_swap_BANG_", { enumerable: false, get: function() { return medley.core.deref_swap_BANG_; } });
Object.defineProperty(module.exports, "map_kv_keys", { enumerable: false, get: function() { return medley.core.map_kv_keys; } });
Object.defineProperty(module.exports, "mapply", { enumerable: false, get: function() { return medley.core.mapply; } });
Object.defineProperty(module.exports, "queue", { enumerable: false, get: function() { return medley.core.queue; } });
Object.defineProperty(module.exports, "remove_vals", { enumerable: false, get: function() { return medley.core.remove_vals; } });
Object.defineProperty(module.exports, "ex_cause", { enumerable: false, get: function() { return medley.core.ex_cause; } });
Object.defineProperty(module.exports, "ex_message", { enumerable: false, get: function() { return medley.core.ex_message; } });
Object.defineProperty(module.exports, "dedupe_by", { enumerable: false, get: function() { return medley.core.dedupe_by; } });
Object.defineProperty(module.exports, "deref_reset_BANG_", { enumerable: false, get: function() { return medley.core.deref_reset_BANG_; } });
Object.defineProperty(module.exports, "map_keys", { enumerable: false, get: function() { return medley.core.map_keys; } });
Object.defineProperty(module.exports, "editable_QMARK_", { enumerable: false, get: function() { return medley.core.editable_QMARK_; } });
Object.defineProperty(module.exports, "interleave_all", { enumerable: false, get: function() { return medley.core.interleave_all; } });
Object.defineProperty(module.exports, "remove_keys", { enumerable: false, get: function() { return medley.core.remove_keys; } });
Object.defineProperty(module.exports, "take_upto", { enumerable: false, get: function() { return medley.core.take_upto; } });
Object.defineProperty(module.exports, "filter_keys", { enumerable: false, get: function() { return medley.core.filter_keys; } });
Object.defineProperty(module.exports, "queue_QMARK_", { enumerable: false, get: function() { return medley.core.queue_QMARK_; } });
Object.defineProperty(module.exports, "map_kv", { enumerable: false, get: function() { return medley.core.map_kv; } });
Object.defineProperty(module.exports, "replace_nth", { enumerable: false, get: function() { return medley.core.replace_nth; } });
Object.defineProperty(module.exports, "least", { enumerable: false, get: function() { return medley.core.least; } });
Object.defineProperty(module.exports, "reduce_map", { enumerable: false, get: function() { return medley.core.reduce_map; } });
Object.defineProperty(module.exports, "uuid_QMARK_", { enumerable: false, get: function() { return medley.core.uuid_QMARK_; } });
Object.defineProperty(module.exports, "abs", { enumerable: false, get: function() { return medley.core.abs; } });
Object.defineProperty(module.exports, "map_vals", { enumerable: false, get: function() { return medley.core.map_vals; } });
Object.defineProperty(module.exports, "assoc_some", { enumerable: false, get: function() { return medley.core.assoc_some; } });
Object.defineProperty(module.exports, "update_existing", { enumerable: false, get: function() { return medley.core.update_existing; } });
Object.defineProperty(module.exports, "update_existing_in", { enumerable: false, get: function() { return medley.core.update_existing_in; } });
Object.defineProperty(module.exports, "map_entry", { enumerable: false, get: function() { return medley.core.map_entry; } });
Object.defineProperty(module.exports, "filter_kv", { enumerable: false, get: function() { return medley.core.filter_kv; } });
//# sourceMappingURL=medley.core.js.map
