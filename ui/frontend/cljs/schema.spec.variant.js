var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./schema.utils.js");
require("./schema.spec.core.js");
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

$CLJS.SHADOW_ENV.setLoaded("schema.spec.variant.js");

goog.provide('schema.spec.variant');
schema.spec.variant.option_step = (function schema$spec$variant$option_step(o,params,else$){
var g = new cljs.core.Keyword(null,"guard","guard",-873147811).cljs$core$IFn$_invoke$arity$1(o);
var c = schema.spec.core.sub_checker(o,params);
var step = (cljs.core.truth_(g)?(function (x){
var guard_result = (function (){try{return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(x) : g.call(null,x));
}catch (e41317){if((e41317 instanceof Object)){
var e_SHARP_ = e41317;
return new cljs.core.Keyword("schema.spec.variant","exception","schema.spec.variant/exception",-253680523);
} else {
throw e41317;

}
}})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("schema.spec.variant","exception","schema.spec.variant/exception",-253680523),guard_result)){
return schema.utils.error(schema.utils.make_ValidationError(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(o),x,(new cljs.core.Delay((function (){
return (new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(schema.utils.fn_name(g)),(new cljs.core.List(null,schema.utils.value_name(x),null,(1),null)),(2),null));
}),null)),new cljs.core.Symbol(null,"throws?","throws?",789734533,null)));
} else {
if(cljs.core.truth_(guard_result)){
return (c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(x) : c.call(null,x));
} else {
return (else$.cljs$core$IFn$_invoke$arity$1 ? else$.cljs$core$IFn$_invoke$arity$1(x) : else$.call(null,x));

}
}
}):c);
var temp__5733__auto__ = new cljs.core.Keyword(null,"wrap-error","wrap-error",536732809).cljs$core$IFn$_invoke$arity$1(o);
if(cljs.core.truth_(temp__5733__auto__)){
var wrap_error = temp__5733__auto__;
return (function (x){
var res = (step.cljs$core$IFn$_invoke$arity$1 ? step.cljs$core$IFn$_invoke$arity$1(x) : step.call(null,x));
var temp__5733__auto____$1 = schema.utils.error_val(res);
if(cljs.core.truth_(temp__5733__auto____$1)){
var e = temp__5733__auto____$1;
return schema.utils.error((wrap_error.cljs$core$IFn$_invoke$arity$1 ? wrap_error.cljs$core$IFn$_invoke$arity$1(e) : wrap_error.call(null,e)));
} else {
return res;
}
});
} else {
return step;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {schema.spec.core.CoreSpec}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.spec.variant.VariantSpec = (function (pre,options,err_f,post,__meta,__extmap,__hash){
this.pre = pre;
this.options = options;
this.err_f = err_f;
this.post = post;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.spec.variant.VariantSpec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(schema.spec.variant.VariantSpec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k41340,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__41346 = k41340;
var G__41346__$1 = (((G__41346 instanceof cljs.core.Keyword))?G__41346.fqn:null);
switch (G__41346__$1) {
case "pre":
return self__.pre;

break;
case "options":
return self__.options;

break;
case "err-f":
return self__.err_f;

break;
case "post":
return self__.post;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k41340,else__4383__auto__);

}
}));

(schema.spec.variant.VariantSpec.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__41351){
var vec__41352 = p__41351;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41352,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41352,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(schema.spec.variant.VariantSpec.prototype.schema$spec$core$CoreSpec$ = cljs.core.PROTOCOL_SENTINEL);

(schema.spec.variant.VariantSpec.prototype.schema$spec$core$CoreSpec$subschemas$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.options);
}));

(schema.spec.variant.VariantSpec.prototype.schema$spec$core$CoreSpec$checker$arity$2 = (function (this$,params){
var self__ = this;
var this$__$1 = this;
var t = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (f,o){
return schema.spec.variant.option_step(o,params,f);
}),(function (x){
return schema.utils.error(schema.utils.make_ValidationError(this$__$1,x,(new cljs.core.Delay((function (){
var G__41361 = schema.utils.value_name(x);
return (self__.err_f.cljs$core$IFn$_invoke$arity$1 ? self__.err_f.cljs$core$IFn$_invoke$arity$1(G__41361) : self__.err_f.call(null,G__41361));
}),null)),null));
}),cljs.core.reverse(self__.options));
if(cljs.core.truth_(self__.post)){
return (function (x){
var or__4126__auto__ = (self__.pre.cljs$core$IFn$_invoke$arity$1 ? self__.pre.cljs$core$IFn$_invoke$arity$1(x) : self__.pre.call(null,x));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var v = (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(x) : t.call(null,x));
if(schema.utils.error_QMARK_(v)){
return v;
} else {
var or__4126__auto____$1 = (function (){var G__41369 = (cljs.core.truth_(new cljs.core.Keyword(null,"return-walked?","return-walked?",-1684646015).cljs$core$IFn$_invoke$arity$1(params))?v:x);
return (self__.post.cljs$core$IFn$_invoke$arity$1 ? self__.post.cljs$core$IFn$_invoke$arity$1(G__41369) : self__.post.call(null,G__41369));
})();
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return v;
}
}
}
});
} else {
return (function (x){
var or__4126__auto__ = (self__.pre.cljs$core$IFn$_invoke$arity$1 ? self__.pre.cljs$core$IFn$_invoke$arity$1(x) : self__.pre.call(null,x));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(x) : t.call(null,x));
}
});
}
}));

(schema.spec.variant.VariantSpec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#schema.spec.variant.VariantSpec{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pre","pre",2118456869),self__.pre],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"options","options",99638489),self__.options],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"err-f","err-f",651620941),self__.err_f],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"post","post",269697687),self__.post],null))], null),self__.__extmap));
}));

(schema.spec.variant.VariantSpec.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41339){
var self__ = this;
var G__41339__$1 = this;
return (new cljs.core.RecordIter((0),G__41339__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"err-f","err-f",651620941),new cljs.core.Keyword(null,"post","post",269697687)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(schema.spec.variant.VariantSpec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(schema.spec.variant.VariantSpec.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new schema.spec.variant.VariantSpec(self__.pre,self__.options,self__.err_f,self__.post,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.spec.variant.VariantSpec.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(schema.spec.variant.VariantSpec.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1524878868 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(schema.spec.variant.VariantSpec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this41341,other41342){
var self__ = this;
var this41341__$1 = this;
return (((!((other41342 == null)))) && ((this41341__$1.constructor === other41342.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41341__$1.pre,other41342.pre)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41341__$1.options,other41342.options)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41341__$1.err_f,other41342.err_f)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41341__$1.post,other41342.post)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41341__$1.__extmap,other41342.__extmap)));
}));

(schema.spec.variant.VariantSpec.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pre","pre",2118456869),null,new cljs.core.Keyword(null,"err-f","err-f",651620941),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"options","options",99638489),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new schema.spec.variant.VariantSpec(self__.pre,self__.options,self__.err_f,self__.post,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(schema.spec.variant.VariantSpec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__41339){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__41405 = cljs.core.keyword_identical_QMARK_;
var expr__41406 = k__4388__auto__;
if(cljs.core.truth_((pred__41405.cljs$core$IFn$_invoke$arity$2 ? pred__41405.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pre","pre",2118456869),expr__41406) : pred__41405.call(null,new cljs.core.Keyword(null,"pre","pre",2118456869),expr__41406)))){
return (new schema.spec.variant.VariantSpec(G__41339,self__.options,self__.err_f,self__.post,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__41405.cljs$core$IFn$_invoke$arity$2 ? pred__41405.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"options","options",99638489),expr__41406) : pred__41405.call(null,new cljs.core.Keyword(null,"options","options",99638489),expr__41406)))){
return (new schema.spec.variant.VariantSpec(self__.pre,G__41339,self__.err_f,self__.post,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__41405.cljs$core$IFn$_invoke$arity$2 ? pred__41405.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"err-f","err-f",651620941),expr__41406) : pred__41405.call(null,new cljs.core.Keyword(null,"err-f","err-f",651620941),expr__41406)))){
return (new schema.spec.variant.VariantSpec(self__.pre,self__.options,G__41339,self__.post,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__41405.cljs$core$IFn$_invoke$arity$2 ? pred__41405.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"post","post",269697687),expr__41406) : pred__41405.call(null,new cljs.core.Keyword(null,"post","post",269697687),expr__41406)))){
return (new schema.spec.variant.VariantSpec(self__.pre,self__.options,self__.err_f,G__41339,self__.__meta,self__.__extmap,null));
} else {
return (new schema.spec.variant.VariantSpec(self__.pre,self__.options,self__.err_f,self__.post,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__41339),null));
}
}
}
}
}));

(schema.spec.variant.VariantSpec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pre","pre",2118456869),self__.pre,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"options","options",99638489),self__.options,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"err-f","err-f",651620941),self__.err_f,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"post","post",269697687),self__.post,null))], null),self__.__extmap));
}));

(schema.spec.variant.VariantSpec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__41339){
var self__ = this;
var this__4379__auto____$1 = this;
return (new schema.spec.variant.VariantSpec(self__.pre,self__.options,self__.err_f,self__.post,G__41339,self__.__extmap,self__.__hash));
}));

(schema.spec.variant.VariantSpec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(schema.spec.variant.VariantSpec.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pre","pre",-535978900,null),new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Symbol(null,"err-f","err-f",-2002814828,null),new cljs.core.Symbol(null,"post","post",1910229214,null)], null);
}));

(schema.spec.variant.VariantSpec.cljs$lang$type = true);

(schema.spec.variant.VariantSpec.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"schema.spec.variant/VariantSpec",null,(1),null));
}));

(schema.spec.variant.VariantSpec.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"schema.spec.variant/VariantSpec");
}));

/**
 * Positional factory function for schema.spec.variant/VariantSpec.
 */
schema.spec.variant.__GT_VariantSpec = (function schema$spec$variant$__GT_VariantSpec(pre,options,err_f,post){
return (new schema.spec.variant.VariantSpec(pre,options,err_f,post,null,null,null));
});

/**
 * Factory function for schema.spec.variant/VariantSpec, taking a map of keywords to field values.
 */
schema.spec.variant.map__GT_VariantSpec = (function schema$spec$variant$map__GT_VariantSpec(G__41343){
var extmap__4419__auto__ = (function (){var G__41431 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__41343,new cljs.core.Keyword(null,"pre","pre",2118456869),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"err-f","err-f",651620941),new cljs.core.Keyword(null,"post","post",269697687)], 0));
if(cljs.core.record_QMARK_(G__41343)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__41431);
} else {
return G__41431;
}
})();
return (new schema.spec.variant.VariantSpec(new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(G__41343),new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(G__41343),new cljs.core.Keyword(null,"err-f","err-f",651620941).cljs$core$IFn$_invoke$arity$1(G__41343),new cljs.core.Keyword(null,"post","post",269697687).cljs$core$IFn$_invoke$arity$1(G__41343),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

/**
 * A variant spec represents a choice between a set of alternative
 * subschemas, e.g., a tagged union. It has an overall precondition,
 * set of options, and error function.
 * 
 * The semantics of `options` is that the options are processed in
 * order. During checking, the datum must match the schema for the
 * first option for which `guard` passes. During generation, any datum
 * generated from an option will pass the corresponding `guard`.
 * 
 * err-f is a function to produce an error message if none
 * of the guards match (and must be passed unless the last option has no
 * guard).
 */
schema.spec.variant.variant_spec = (function schema$spec$variant$variant_spec(var_args){
var G__41438 = arguments.length;
switch (G__41438) {
case 2:
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$2 = (function (pre,options){
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$3(pre,options,null);
}));

(schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$3 = (function (pre,options,err_f){
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$4(pre,options,err_f,null);
}));

(schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$4 = (function (pre,options,err_f,post){
if(cljs.core.truth_((function (){var or__4126__auto__ = err_f;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.Keyword(null,"guard","guard",-873147811).cljs$core$IFn$_invoke$arity$1(cljs.core.last(options)) == null);
}
})())){
} else {
throw (new Error(schema.utils.format_STAR_("when last option has a guard, err-f must be provided")));
}

return schema.spec.variant.__GT_VariantSpec(pre,options,err_f,post);
}));

(schema.spec.variant.variant_spec.cljs$lang$maxFixedArity = 4);

Object.defineProperty(module.exports, "option_step", { enumerable: false, get: function() { return schema.spec.variant.option_step; } });
Object.defineProperty(module.exports, "VariantSpec", { enumerable: false, get: function() { return schema.spec.variant.VariantSpec; } });
Object.defineProperty(module.exports, "__GT_VariantSpec", { enumerable: false, get: function() { return schema.spec.variant.__GT_VariantSpec; } });
Object.defineProperty(module.exports, "map__GT_VariantSpec", { enumerable: false, get: function() { return schema.spec.variant.map__GT_VariantSpec; } });
Object.defineProperty(module.exports, "variant_spec", { enumerable: false, get: function() { return schema.spec.variant.variant_spec; } });
//# sourceMappingURL=schema.spec.variant.js.map
