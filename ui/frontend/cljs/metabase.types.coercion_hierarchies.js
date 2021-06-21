var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.set.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.types.coercion_hierarchies.js");

goog.provide('metabase.types.coercion_hierarchies');
if((typeof metabase !== 'undefined') && (typeof metabase.types !== 'undefined') && (typeof metabase.types.coercion_hierarchies !== 'undefined') && (typeof metabase.types.coercion_hierarchies.strategy__GT_allowed_base_types !== 'undefined')){
} else {
/**
 * Map of `coercion-strategy -> #{allowed-base-type}`.
 */
metabase.types.coercion_hierarchies.strategy__GT_allowed_base_types = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof metabase !== 'undefined') && (typeof metabase.types !== 'undefined') && (typeof metabase.types.coercion_hierarchies !== 'undefined') && (typeof metabase.types.coercion_hierarchies.strategy__GT_effective_type !== 'undefined')){
} else {
/**
 * Map of coercion strategy -> resulting effective-type
 */
metabase.types.coercion_hierarchies.strategy__GT_effective_type = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof metabase !== 'undefined') && (typeof metabase.types !== 'undefined') && (typeof metabase.types.coercion_hierarchies !== 'undefined') && (typeof metabase.types.coercion_hierarchies.non_descending_base_type__GT_strategy !== 'undefined')){
} else {
/**
 * Map of base-type -> #{strategy} which are not inheritable. Eg, binary fields are marked `type/*` and may be coerced
 *   to timestamps with `:Coercion/YYYYMMDDHHMMSSBytes->Temporal` but we don't want all children of `type/*` to be
 *   coerced as such.
 */
metabase.types.coercion_hierarchies.non_descending_base_type__GT_strategy = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
/**
 * Get a map of strategies -> allowed-base-types. These must live outside of the hierarchy.
 */
metabase.types.coercion_hierarchies.non_descending_strategies = (function metabase$types$coercion_hierarchies$non_descending_strategies(){
return cljs.core.deref(metabase.types.coercion_hierarchies.non_descending_base_type__GT_strategy);
});
/**
 * Gets the effective type for strategy. Essentially a getter over the
 *   private strategy->effective-type.
 */
metabase.types.coercion_hierarchies.effective_type_for_strategy = (function metabase$types$coercion_hierarchies$effective_type_for_strategy(strategy){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(metabase.types.coercion_hierarchies.strategy__GT_effective_type),strategy);
});
/**
 * Ensure x is a sequential collection. Copied from metabase.util as that namespace is not amenable to cljc.
 */
metabase.types.coercion_hierarchies.one_or_many = (function metabase$types$coercion_hierarchies$one_or_many(x){
if(cljs.core.truth_(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$3(cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.nil_QMARK_)(x))){
return x;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
});
/**
 * Define the `base-type-or-types` allowed and the resulting `effective-type` of a `coercion-strategy`.
 */
metabase.types.coercion_hierarchies.define_types_BANG_ = (function metabase$types$coercion_hierarchies$define_types_BANG_(coercion_strategy,base_type_or_types,effective_type){
var base_types_36407 = cljs.core.set(metabase.types.coercion_hierarchies.one_or_many(base_type_or_types));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metabase.types.coercion_hierarchies.strategy__GT_allowed_base_types,cljs.core.assoc,coercion_strategy,base_types_36407);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metabase.types.coercion_hierarchies.strategy__GT_effective_type,cljs.core.assoc,coercion_strategy,effective_type);
});
/**
 * Define coercion strategies that should not exist for all of the descendants of base-type-or-types.
 */
metabase.types.coercion_hierarchies.define_non_inheritable_type_BANG_ = (function metabase$types$coercion_hierarchies$define_non_inheritable_type_BANG_(coercion_strategy,base_type_or_types,effective_type){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(metabase.types.coercion_hierarchies.non_descending_base_type__GT_strategy,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,clojure.set.union),cljs.core.zipmap(metabase.types.coercion_hierarchies.one_or_many(base_type_or_types),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.createAsIfByAssoc([coercion_strategy]))));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metabase.types.coercion_hierarchies.strategy__GT_effective_type,cljs.core.assoc,coercion_strategy,effective_type);
});
metabase.types.coercion_hierarchies.build_hierarchy = (function metabase$types$coercion_hierarchies$build_hierarchy(pairs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (h,p__36321){
var vec__36322 = p__36321;
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36322,(0),null);
var parent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36322,(1),null);
return cljs.core.derive.cljs$core$IFn$_invoke$arity$3(h,tag,parent);
}),cljs.core.deref((function (){var fexpr__36329 = new cljs.core.Var(function(){return cljs.core.get_global_hierarchy;},new cljs.core.Symbol("cljs.core","get-global-hierarchy","cljs.core/get-global-hierarchy",48052871,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"get-global-hierarchy","get-global-hierarchy",1780260380,null),"cljs/core.cljs",28,1,10871,10871,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(cljs.core.get_global_hierarchy)?cljs.core.get_global_hierarchy.cljs$lang$test:null)]));
return (fexpr__36329.cljs$core$IFn$_invoke$arity$0 ? fexpr__36329.cljs$core$IFn$_invoke$arity$0() : fexpr__36329.call(null));
})()),pairs);
});
metabase.types.coercion_hierarchies.base_type_hierarchy_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
/**
 * The global hierarchy, with coercion strategies added as ancestors of their allowed base type(s).
 */
metabase.types.coercion_hierarchies.base_type_hierarchy = (function metabase$types$coercion_hierarchies$base_type_hierarchy(){
if(cljs.core.truth_(cljs.core.deref(metabase.types.coercion_hierarchies.base_type_hierarchy_STAR_))){
} else {
if(cljs.core.truth_(cljs.core.deref(metabase.types.coercion_hierarchies.base_type_hierarchy_STAR_))){
} else {
cljs.core.reset_BANG_(metabase.types.coercion_hierarchies.base_type_hierarchy_STAR_,metabase.types.coercion_hierarchies.build_hierarchy((function (){var iter__4529__auto__ = (function metabase$types$coercion_hierarchies$base_type_hierarchy_$_iter__36338(s__36339){
return (new cljs.core.LazySeq(null,(function (){
var s__36339__$1 = s__36339;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36339__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var vec__36346 = cljs.core.first(xs__6292__auto__);
var strategy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36346,(0),null);
var base_types = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36346,(1),null);
var iterys__4525__auto__ = ((function (s__36339__$1,vec__36346,strategy,base_types,xs__6292__auto__,temp__5735__auto__){
return (function metabase$types$coercion_hierarchies$base_type_hierarchy_$_iter__36338_$_iter__36340(s__36341){
return (new cljs.core.LazySeq(null,((function (s__36339__$1,vec__36346,strategy,base_types,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__36341__$1 = s__36341;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__36341__$1);
if(temp__5735__auto____$1){
var s__36341__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36341__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__36341__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__36343 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__36342 = (0);
while(true){
if((i__36342 < size__4528__auto__)){
var base_type = cljs.core._nth(c__4527__auto__,i__36342);
cljs.core.chunk_append(b__36343,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [base_type,strategy], null));

var G__36457 = (i__36342 + (1));
i__36342 = G__36457;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36343),metabase$types$coercion_hierarchies$base_type_hierarchy_$_iter__36338_$_iter__36340(cljs.core.chunk_rest(s__36341__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36343),null);
}
} else {
var base_type = cljs.core.first(s__36341__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [base_type,strategy], null),metabase$types$coercion_hierarchies$base_type_hierarchy_$_iter__36338_$_iter__36340(cljs.core.rest(s__36341__$2)));
}
} else {
return null;
}
break;
}
});})(s__36339__$1,vec__36346,strategy,base_types,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__36339__$1,vec__36346,strategy,base_types,xs__6292__auto__,temp__5735__auto__))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(base_types));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,metabase$types$coercion_hierarchies$base_type_hierarchy_$_iter__36338(cljs.core.rest(s__36339__$1)));
} else {
var G__36478 = cljs.core.rest(s__36339__$1);
s__36339__$1 = G__36478;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.deref(metabase.types.coercion_hierarchies.strategy__GT_allowed_base_types));
})()));
}
}

return cljs.core.deref(metabase.types.coercion_hierarchies.base_type_hierarchy_STAR_);
});
metabase.types.coercion_hierarchies.effective_type_hierarchy_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
/**
 * The global hierarchy, with coercion strategies added as children of their resulting effective type.
 */
metabase.types.coercion_hierarchies.effective_type_hierarchy = (function metabase$types$coercion_hierarchies$effective_type_hierarchy(){
if(cljs.core.truth_(cljs.core.deref(metabase.types.coercion_hierarchies.effective_type_hierarchy_STAR_))){
} else {
if(cljs.core.truth_(cljs.core.deref(metabase.types.coercion_hierarchies.effective_type_hierarchy_STAR_))){
} else {
cljs.core.reset_BANG_(metabase.types.coercion_hierarchies.effective_type_hierarchy_STAR_,metabase.types.coercion_hierarchies.build_hierarchy(cljs.core.seq(cljs.core.deref(metabase.types.coercion_hierarchies.strategy__GT_effective_type))));
}
}

return cljs.core.deref(metabase.types.coercion_hierarchies.effective_type_hierarchy_STAR_);
});
cljs.core.add_watch((function (){var fexpr__36375 = new cljs.core.Var(function(){return cljs.core.get_global_hierarchy;},new cljs.core.Symbol("cljs.core","get-global-hierarchy","cljs.core/get-global-hierarchy",48052871,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"get-global-hierarchy","get-global-hierarchy",1780260380,null),"cljs/core.cljs",28,1,10871,10871,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(cljs.core.get_global_hierarchy)?cljs.core.get_global_hierarchy.cljs$lang$test:null)]));
return (fexpr__36375.cljs$core$IFn$_invoke$arity$0 ? fexpr__36375.cljs$core$IFn$_invoke$arity$0() : fexpr__36375.call(null));
})(),new cljs.core.Keyword("metabase.types.coercion-hierarchies","rebuild-hierarchies","metabase.types.coercion-hierarchies/rebuild-hierarchies",1454847607),(function (_,___$1,old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,new$)){
return null;
} else {
cljs.core.reset_BANG_(metabase.types.coercion_hierarchies.base_type_hierarchy_STAR_,null);

return cljs.core.reset_BANG_(metabase.types.coercion_hierarchies.effective_type_hierarchy_STAR_,null);
}
}));
cljs.core.add_watch(metabase.types.coercion_hierarchies.strategy__GT_allowed_base_types,new cljs.core.Keyword("metabase.types.coercion-hierarchies","rebuild-hierarchies","metabase.types.coercion-hierarchies/rebuild-hierarchies",1454847607),(function (_,___$1,old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,new$)){
return null;
} else {
return cljs.core.reset_BANG_(metabase.types.coercion_hierarchies.base_type_hierarchy_STAR_,null);
}
}));
cljs.core.add_watch(metabase.types.coercion_hierarchies.strategy__GT_effective_type,new cljs.core.Keyword("metabase.types.coercion-hierarchies","rebuild-hierarchies","metabase.types.coercion-hierarchies/rebuild-hierarchies",1454847607),(function (_,___$1,old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,new$)){
return null;
} else {
return cljs.core.reset_BANG_(metabase.types.coercion_hierarchies.effective_type_hierarchy_STAR_,null);
}
}));
Object.defineProperty(module.exports, "strategy__GT_effective_type", { enumerable: false, get: function() { return metabase.types.coercion_hierarchies.strategy__GT_effective_type; } });
Object.defineProperty(module.exports, "non_descending_strategies", { enumerable: false, get: function() { return metabase.types.coercion_hierarchies.non_descending_strategies; } });
Object.defineProperty(module.exports, "define_non_inheritable_type_BANG_", { enumerable: false, get: function() { return metabase.types.coercion_hierarchies.define_non_inheritable_type_BANG_; } });
Object.defineProperty(module.exports, "define_types_BANG_", { enumerable: false, get: function() { return metabase.types.coercion_hierarchies.define_types_BANG_; } });
Object.defineProperty(module.exports, "build_hierarchy", { enumerable: false, get: function() { return metabase.types.coercion_hierarchies.build_hierarchy; } });
Object.defineProperty(module.exports, "base_type_hierarchy", { enumerable: false, get: function() { return metabase.types.coercion_hierarchies.base_type_hierarchy; } });
Object.defineProperty(module.exports, "non_descending_base_type__GT_strategy", { enumerable: false, get: function() { return metabase.types.coercion_hierarchies.non_descending_base_type__GT_strategy; } });
Object.defineProperty(module.exports, "base_type_hierarchy_STAR_", { enumerable: false, get: function() { return metabase.types.coercion_hierarchies.base_type_hierarchy_STAR_; } });
Object.defineProperty(module.exports, "strategy__GT_allowed_base_types", { enumerable: false, get: function() { return metabase.types.coercion_hierarchies.strategy__GT_allowed_base_types; } });
Object.defineProperty(module.exports, "one_or_many", { enumerable: false, get: function() { return metabase.types.coercion_hierarchies.one_or_many; } });
Object.defineProperty(module.exports, "effective_type_hierarchy_STAR_", { enumerable: false, get: function() { return metabase.types.coercion_hierarchies.effective_type_hierarchy_STAR_; } });
Object.defineProperty(module.exports, "effective_type_for_strategy", { enumerable: false, get: function() { return metabase.types.coercion_hierarchies.effective_type_for_strategy; } });
Object.defineProperty(module.exports, "effective_type_hierarchy", { enumerable: false, get: function() { return metabase.types.coercion_hierarchies.effective_type_hierarchy; } });
//# sourceMappingURL=metabase.types.coercion_hierarchies.js.map
