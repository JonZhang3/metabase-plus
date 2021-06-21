var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.string.js");
require("./schema.utils.js");
require("./schema.spec.core.js");
require("./schema.spec.leaf.js");
require("./schema.spec.variant.js");
require("./schema.spec.collection.js");
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

$CLJS.SHADOW_ENV.setLoaded("schema.core.js");

goog.provide('schema.core');

/**
 * @interface
 */
schema.core.Schema = function(){};

var schema$core$Schema$spec$dyn_42398 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (schema.core.spec[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (schema.core.spec["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Schema.spec",this$);
}
}
});
/**
 * A spec is a record of some type that expresses the structure of this schema
 *   in a declarative and/or imperative way.  See schema.spec.* for examples.
 */
schema.core.spec = (function schema$core$spec(this$){
if((((!((this$ == null)))) && ((!((this$.schema$core$Schema$spec$arity$1 == null)))))){
return this$.schema$core$Schema$spec$arity$1(this$);
} else {
return schema$core$Schema$spec$dyn_42398(this$);
}
});

var schema$core$Schema$explain$dyn_42403 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (schema.core.explain[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (schema.core.explain["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Schema.explain",this$);
}
}
});
/**
 * Expand this schema to a human-readable format suitable for pprinting,
 *   also expanding class schematas at the leaves.  Example:
 * 
 *   user> (s/explain {:a s/Keyword :b [s/Int]} )
 *   {:a Keyword, :b [Int]}
 */
schema.core.explain = (function schema$core$explain(this$){
if((((!((this$ == null)))) && ((!((this$.schema$core$Schema$explain$arity$1 == null)))))){
return this$.schema$core$Schema$explain$arity$1(this$);
} else {
return schema$core$Schema$explain$dyn_42403(this$);
}
});

/**
 * Compile an efficient checker for schema, which returns nil for valid values and
 * error descriptions otherwise.
 */
schema.core.checker = (function schema$core$checker(schema__$1){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(schema.utils.error_val,schema.spec.core.run_checker((function (s,params){
return schema.spec.core.checker(schema.core.spec(s),params);
}),false,schema__$1));
});
/**
 * Return nil if x matches schema; otherwise, returns a value that looks like the
 * 'bad' parts of x with ValidationErrors at the leaves describing the failures.
 * 
 * If you will be checking many datums, it is much more efficient to create
 * a 'checker' once and call it on each of them.
 */
schema.core.check = (function schema$core$check(schema__$1,x){
return schema.core.checker(schema__$1)(x);
});
/**
 * Compile an efficient validator for schema.
 */
schema.core.validator = (function schema$core$validator(schema__$1){
var c = schema.core.checker(schema__$1);
return (function (value){
var temp__5735__auto___42407 = c(value);
if(cljs.core.truth_(temp__5735__auto___42407)){
var error_42408 = temp__5735__auto___42407;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Value does not match schema: %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error_42408], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"error","error",-978969032),error_42408], null));
} else {
}

return value;
});
});
/**
 * Throw an exception if value does not satisfy schema; otherwise, return value.
 * If you will be validating many datums, it is much more efficient to create
 * a 'validator' once and call it on each of them.
 */
schema.core.validate = (function schema$core$validate(schema__$1,value){
return schema.core.validator(schema__$1)(value);
});
schema.core.instance_precondition = (function schema$core$instance_precondition(s,klass){
return schema.spec.core.precondition(s,(function (p1__41576_SHARP_){
if((!((p1__41576_SHARP_ == null)))){
var or__4126__auto__ = (klass === p1__41576_SHARP_.constructor);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return p1__41576_SHARP_ instanceof klass;
}
} else {
return false;
}
}),(function (p1__41577_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),(new cljs.core.List(null,klass,(new cljs.core.List(null,p1__41577_SHARP_,null,(1),null)),(2),null)),(3),null));
}));
});
goog.object.set(schema.core.Schema,"function",true);

goog.object.set(schema.core.spec,"function",(function (this$){
var pre = schema.core.instance_precondition(this$,this$);
var temp__5733__auto__ = schema.utils.class_schema(this$);
if(cljs.core.truth_(temp__5733__auto__)){
var class_schema = temp__5733__auto__;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$2(pre,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),class_schema], null)], null));
} else {
return schema.spec.leaf.leaf_spec(pre);
}
}));

goog.object.set(schema.core.explain,"function",(function (this$){
var temp__5733__auto__ = schema.utils.class_schema(this$);
if(cljs.core.truth_(temp__5733__auto__)){
var more_schema = temp__5733__auto__;
return schema.core.explain(more_schema);
} else {
var pred__41595 = cljs.core._EQ_;
var expr__41596 = this$;
if(cljs.core.truth_((pred__41595.cljs$core$IFn$_invoke$arity$2 ? pred__41595.cljs$core$IFn$_invoke$arity$2(null,expr__41596) : pred__41595.call(null,null,expr__41596)))){
return new cljs.core.Symbol(null,"Str","Str",907970895,null);
} else {
if(cljs.core.truth_((pred__41595.cljs$core$IFn$_invoke$arity$2 ? pred__41595.cljs$core$IFn$_invoke$arity$2(Boolean,expr__41596) : pred__41595.call(null,Boolean,expr__41596)))){
return new cljs.core.Symbol(null,"Bool","Bool",195910502,null);
} else {
if(cljs.core.truth_((pred__41595.cljs$core$IFn$_invoke$arity$2 ? pred__41595.cljs$core$IFn$_invoke$arity$2(Number,expr__41596) : pred__41595.call(null,Number,expr__41596)))){
return new cljs.core.Symbol(null,"Num","Num",-2044934708,null);
} else {
if(cljs.core.truth_((pred__41595.cljs$core$IFn$_invoke$arity$2 ? pred__41595.cljs$core$IFn$_invoke$arity$2(null,expr__41596) : pred__41595.call(null,null,expr__41596)))){
return new cljs.core.Symbol(null,"Regex","Regex",205914413,null);
} else {
if(cljs.core.truth_((pred__41595.cljs$core$IFn$_invoke$arity$2 ? pred__41595.cljs$core$IFn$_invoke$arity$2(Date,expr__41596) : pred__41595.call(null,Date,expr__41596)))){
return new cljs.core.Symbol(null,"Inst","Inst",292408622,null);
} else {
if(cljs.core.truth_((pred__41595.cljs$core$IFn$_invoke$arity$2 ? pred__41595.cljs$core$IFn$_invoke$arity$2(cljs.core.UUID,expr__41596) : pred__41595.call(null,cljs.core.UUID,expr__41596)))){
return new cljs.core.Symbol(null,"Uuid","Uuid",-1866694318,null);
} else {
return this$;
}
}
}
}
}
}
}
}));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.AnythingSchema = (function (_,__meta,__extmap,__hash){
this._ = _;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.AnythingSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(schema.core.AnythingSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k41606,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__41625 = k41606;
var G__41625__$1 = (((G__41625 instanceof cljs.core.Keyword))?G__41625.fqn:null);
switch (G__41625__$1) {
case "_":
return self__._;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k41606,else__4383__auto__);

}
}));

(schema.core.AnythingSchema.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__41636){
var vec__41637 = p__41636;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41637,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41637,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(schema.core.AnythingSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#schema.core.AnythingSchema{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"_","_",1453416199),self__._],null))], null),self__.__extmap));
}));

(schema.core.AnythingSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41605){
var self__ = this;
var G__41605__$1 = this;
return (new cljs.core.RecordIter((0),G__41605__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_","_",1453416199)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(schema.core.AnythingSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(schema.core.AnythingSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new schema.core.AnythingSchema(self__._,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.AnythingSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(schema.core.AnythingSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1432036169 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(schema.core.AnythingSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this41607,other41608){
var self__ = this;
var this41607__$1 = this;
return (((!((other41608 == null)))) && ((this41607__$1.constructor === other41608.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41607__$1._,other41608._)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41607__$1.__extmap,other41608.__extmap)));
}));

(schema.core.AnythingSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"_","_",1453416199),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new schema.core.AnythingSchema(self__._,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(schema.core.AnythingSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__41605){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__41664 = cljs.core.keyword_identical_QMARK_;
var expr__41665 = k__4388__auto__;
if(cljs.core.truth_((pred__41664.cljs$core$IFn$_invoke$arity$2 ? pred__41664.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"_","_",1453416199),expr__41665) : pred__41664.call(null,new cljs.core.Keyword(null,"_","_",1453416199),expr__41665)))){
return (new schema.core.AnythingSchema(G__41605,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.AnythingSchema(self__._,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__41605),null));
}
}));

(schema.core.AnythingSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"_","_",1453416199),self__._,null))], null),self__.__extmap));
}));

(schema.core.AnythingSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__41605){
var self__ = this;
var this__4379__auto____$1 = this;
return (new schema.core.AnythingSchema(self__._,G__41605,self__.__extmap,self__.__hash));
}));

(schema.core.AnythingSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(schema.core.AnythingSchema.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.AnythingSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core._PLUS_no_precondition_PLUS_);
}));

(schema.core.AnythingSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Symbol(null,"Any","Any",1277492269,null);
}));

(schema.core.AnythingSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null);
}));

(schema.core.AnythingSchema.cljs$lang$type = true);

(schema.core.AnythingSchema.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"schema.core/AnythingSchema",null,(1),null));
}));

(schema.core.AnythingSchema.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"schema.core/AnythingSchema");
}));

/**
 * Positional factory function for schema.core/AnythingSchema.
 */
schema.core.__GT_AnythingSchema = (function schema$core$__GT_AnythingSchema(_){
return (new schema.core.AnythingSchema(_,null,null,null));
});

/**
 * Factory function for schema.core/AnythingSchema, taking a map of keywords to field values.
 */
schema.core.map__GT_AnythingSchema = (function schema$core$map__GT_AnythingSchema(G__41609){
var extmap__4419__auto__ = (function (){var G__41689 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__41609,new cljs.core.Keyword(null,"_","_",1453416199));
if(cljs.core.record_QMARK_(G__41609)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__41689);
} else {
return G__41689;
}
})();
return (new schema.core.AnythingSchema(new cljs.core.Keyword(null,"_","_",1453416199).cljs$core$IFn$_invoke$arity$1(G__41609),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

/**
 * Any value, including nil.
 */
schema.core.Any = (new schema.core.AnythingSchema(null,null,null,null));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.EqSchema = (function (v,__meta,__extmap,__hash){
this.v = v;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.EqSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(schema.core.EqSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k41696,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__41712 = k41696;
var G__41712__$1 = (((G__41712 instanceof cljs.core.Keyword))?G__41712.fqn:null);
switch (G__41712__$1) {
case "v":
return self__.v;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k41696,else__4383__auto__);

}
}));

(schema.core.EqSchema.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__41715){
var vec__41716 = p__41715;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41716,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41716,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(schema.core.EqSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#schema.core.EqSchema{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",21465059),self__.v],null))], null),self__.__extmap));
}));

(schema.core.EqSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41695){
var self__ = this;
var G__41695__$1 = this;
return (new cljs.core.RecordIter((0),G__41695__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v","v",21465059)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(schema.core.EqSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(schema.core.EqSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new schema.core.EqSchema(self__.v,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.EqSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(schema.core.EqSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-907989292 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(schema.core.EqSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this41697,other41698){
var self__ = this;
var this41697__$1 = this;
return (((!((other41698 == null)))) && ((this41697__$1.constructor === other41698.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41697__$1.v,other41698.v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41697__$1.__extmap,other41698.__extmap)));
}));

(schema.core.EqSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v","v",21465059),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new schema.core.EqSchema(self__.v,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(schema.core.EqSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__41695){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__41737 = cljs.core.keyword_identical_QMARK_;
var expr__41738 = k__4388__auto__;
if(cljs.core.truth_((pred__41737.cljs$core$IFn$_invoke$arity$2 ? pred__41737.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"v","v",21465059),expr__41738) : pred__41737.call(null,new cljs.core.Keyword(null,"v","v",21465059),expr__41738)))){
return (new schema.core.EqSchema(G__41695,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.EqSchema(self__.v,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__41695),null));
}
}));

(schema.core.EqSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"v","v",21465059),self__.v,null))], null),self__.__extmap));
}));

(schema.core.EqSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__41695){
var self__ = this;
var this__4379__auto____$1 = this;
return (new schema.core.EqSchema(self__.v,G__41695,self__.__extmap,self__.__hash));
}));

(schema.core.EqSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(schema.core.EqSchema.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.EqSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core.precondition(this$__$1,(function (p1__41693_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.v,p1__41693_SHARP_);
}),(function (p1__41694_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),(new cljs.core.List(null,self__.v,(new cljs.core.List(null,p1__41694_SHARP_,null,(1),null)),(2),null)),(3),null));
})));
}));

(schema.core.EqSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.List(null,new cljs.core.Symbol(null,"eq","eq",1021992460,null),(new cljs.core.List(null,self__.v,null,(1),null)),(2),null));
}));

(schema.core.EqSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null)], null);
}));

(schema.core.EqSchema.cljs$lang$type = true);

(schema.core.EqSchema.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"schema.core/EqSchema",null,(1),null));
}));

(schema.core.EqSchema.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"schema.core/EqSchema");
}));

/**
 * Positional factory function for schema.core/EqSchema.
 */
schema.core.__GT_EqSchema = (function schema$core$__GT_EqSchema(v){
return (new schema.core.EqSchema(v,null,null,null));
});

/**
 * Factory function for schema.core/EqSchema, taking a map of keywords to field values.
 */
schema.core.map__GT_EqSchema = (function schema$core$map__GT_EqSchema(G__41703){
var extmap__4419__auto__ = (function (){var G__41746 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__41703,new cljs.core.Keyword(null,"v","v",21465059));
if(cljs.core.record_QMARK_(G__41703)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__41746);
} else {
return G__41746;
}
})();
return (new schema.core.EqSchema(new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(G__41703),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

/**
 * A value that must be (= v).
 */
schema.core.eq = (function schema$core$eq(v){
return (new schema.core.EqSchema(v,null,null,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.Isa = (function (h,parent,__meta,__extmap,__hash){
this.h = h;
this.parent = parent;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.Isa.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(schema.core.Isa.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k41754,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__41763 = k41754;
var G__41763__$1 = (((G__41763 instanceof cljs.core.Keyword))?G__41763.fqn:null);
switch (G__41763__$1) {
case "h":
return self__.h;

break;
case "parent":
return self__.parent;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k41754,else__4383__auto__);

}
}));

(schema.core.Isa.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__41767){
var vec__41768 = p__41767;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41768,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41768,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(schema.core.Isa.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#schema.core.Isa{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null))], null),self__.__extmap));
}));

(schema.core.Isa.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41753){
var self__ = this;
var G__41753__$1 = this;
return (new cljs.core.RecordIter((0),G__41753__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"parent","parent",-878878779)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(schema.core.Isa.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(schema.core.Isa.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.Isa.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(schema.core.Isa.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1593744337 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(schema.core.Isa.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this41755,other41756){
var self__ = this;
var this41755__$1 = this;
return (((!((other41756 == null)))) && ((this41755__$1.constructor === other41756.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41755__$1.h,other41756.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41755__$1.parent,other41756.parent)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41755__$1.__extmap,other41756.__extmap)));
}));

(schema.core.Isa.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(schema.core.Isa.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__41753){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__41784 = cljs.core.keyword_identical_QMARK_;
var expr__41785 = k__4388__auto__;
if(cljs.core.truth_((pred__41784.cljs$core$IFn$_invoke$arity$2 ? pred__41784.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__41785) : pred__41784.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__41785)))){
return (new schema.core.Isa(G__41753,self__.parent,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__41784.cljs$core$IFn$_invoke$arity$2 ? pred__41784.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779),expr__41785) : pred__41784.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__41785)))){
return (new schema.core.Isa(self__.h,G__41753,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__41753),null));
}
}
}));

(schema.core.Isa.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent,null))], null),self__.__extmap));
}));

(schema.core.Isa.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__41753){
var self__ = this;
var this__4379__auto____$1 = this;
return (new schema.core.Isa(self__.h,self__.parent,G__41753,self__.__extmap,self__.__hash));
}));

(schema.core.Isa.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(schema.core.Isa.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Isa.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core.precondition(this$__$1,(function (p1__41751_SHARP_){
if(cljs.core.truth_(self__.h)){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$3(self__.h,p1__41751_SHARP_,self__.parent);
} else {
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(p1__41751_SHARP_,self__.parent);
}
}),(function (p1__41752_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"isa?","isa?",1358492324,null),(new cljs.core.List(null,p1__41752_SHARP_,(new cljs.core.List(null,self__.parent,null,(1),null)),(2),null)),(3),null));
})));
}));

(schema.core.Isa.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.List(null,new cljs.core.Symbol(null,"isa?","isa?",1358492324,null),(new cljs.core.List(null,self__.parent,null,(1),null)),(2),null));
}));

(schema.core.Isa.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"h","h",-1544777029,null),new cljs.core.Symbol(null,"parent","parent",761652748,null)], null);
}));

(schema.core.Isa.cljs$lang$type = true);

(schema.core.Isa.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"schema.core/Isa",null,(1),null));
}));

(schema.core.Isa.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"schema.core/Isa");
}));

/**
 * Positional factory function for schema.core/Isa.
 */
schema.core.__GT_Isa = (function schema$core$__GT_Isa(h,parent){
return (new schema.core.Isa(h,parent,null,null,null));
});

/**
 * Factory function for schema.core/Isa, taking a map of keywords to field values.
 */
schema.core.map__GT_Isa = (function schema$core$map__GT_Isa(G__41758){
var extmap__4419__auto__ = (function (){var G__41806 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__41758,new cljs.core.Keyword(null,"h","h",1109658740),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"parent","parent",-878878779)], 0));
if(cljs.core.record_QMARK_(G__41758)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__41806);
} else {
return G__41806;
}
})();
return (new schema.core.Isa(new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__41758),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__41758),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

/**
 * A value that must be a child of parent.
 */
schema.core.isa = (function schema$core$isa(var_args){
var G__41812 = arguments.length;
switch (G__41812) {
case 1:
return schema.core.isa.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return schema.core.isa.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(schema.core.isa.cljs$core$IFn$_invoke$arity$1 = (function (parent){
return (new schema.core.Isa(null,parent,null,null,null));
}));

(schema.core.isa.cljs$core$IFn$_invoke$arity$2 = (function (h,parent){
return (new schema.core.Isa(h,parent,null,null,null));
}));

(schema.core.isa.cljs$lang$maxFixedArity = 2);


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.EnumSchema = (function (vs,__meta,__extmap,__hash){
this.vs = vs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.EnumSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(schema.core.EnumSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k41821,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__41830 = k41821;
var G__41830__$1 = (((G__41830 instanceof cljs.core.Keyword))?G__41830.fqn:null);
switch (G__41830__$1) {
case "vs":
return self__.vs;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k41821,else__4383__auto__);

}
}));

(schema.core.EnumSchema.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__41833){
var vec__41836 = p__41833;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41836,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41836,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(schema.core.EnumSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#schema.core.EnumSchema{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vs","vs",-2022097090),self__.vs],null))], null),self__.__extmap));
}));

(schema.core.EnumSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41820){
var self__ = this;
var G__41820__$1 = this;
return (new cljs.core.RecordIter((0),G__41820__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vs","vs",-2022097090)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(schema.core.EnumSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(schema.core.EnumSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new schema.core.EnumSchema(self__.vs,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.EnumSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(schema.core.EnumSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (2002701468 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(schema.core.EnumSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this41822,other41823){
var self__ = this;
var this41822__$1 = this;
return (((!((other41823 == null)))) && ((this41822__$1.constructor === other41823.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41822__$1.vs,other41823.vs)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41822__$1.__extmap,other41823.__extmap)));
}));

(schema.core.EnumSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vs","vs",-2022097090),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new schema.core.EnumSchema(self__.vs,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(schema.core.EnumSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__41820){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__41840 = cljs.core.keyword_identical_QMARK_;
var expr__41841 = k__4388__auto__;
if(cljs.core.truth_((pred__41840.cljs$core$IFn$_invoke$arity$2 ? pred__41840.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"vs","vs",-2022097090),expr__41841) : pred__41840.call(null,new cljs.core.Keyword(null,"vs","vs",-2022097090),expr__41841)))){
return (new schema.core.EnumSchema(G__41820,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.EnumSchema(self__.vs,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__41820),null));
}
}));

(schema.core.EnumSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"vs","vs",-2022097090),self__.vs,null))], null),self__.__extmap));
}));

(schema.core.EnumSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__41820){
var self__ = this;
var this__4379__auto____$1 = this;
return (new schema.core.EnumSchema(self__.vs,G__41820,self__.__extmap,self__.__hash));
}));

(schema.core.EnumSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(schema.core.EnumSchema.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.EnumSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core.precondition(this$__$1,(function (p1__41817_SHARP_){
return cljs.core.contains_QMARK_(self__.vs,p1__41817_SHARP_);
}),(function (p1__41819_SHARP_){
return (new cljs.core.List(null,self__.vs,(new cljs.core.List(null,p1__41819_SHARP_,null,(1),null)),(2),null));
})));
}));

(schema.core.EnumSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(new cljs.core.Symbol(null,"enum","enum",-975417337,null),self__.vs);
}));

(schema.core.EnumSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vs","vs",-381565563,null)], null);
}));

(schema.core.EnumSchema.cljs$lang$type = true);

(schema.core.EnumSchema.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"schema.core/EnumSchema",null,(1),null));
}));

(schema.core.EnumSchema.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"schema.core/EnumSchema");
}));

/**
 * Positional factory function for schema.core/EnumSchema.
 */
schema.core.__GT_EnumSchema = (function schema$core$__GT_EnumSchema(vs){
return (new schema.core.EnumSchema(vs,null,null,null));
});

/**
 * Factory function for schema.core/EnumSchema, taking a map of keywords to field values.
 */
schema.core.map__GT_EnumSchema = (function schema$core$map__GT_EnumSchema(G__41827){
var extmap__4419__auto__ = (function (){var G__41847 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__41827,new cljs.core.Keyword(null,"vs","vs",-2022097090));
if(cljs.core.record_QMARK_(G__41827)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__41847);
} else {
return G__41847;
}
})();
return (new schema.core.EnumSchema(new cljs.core.Keyword(null,"vs","vs",-2022097090).cljs$core$IFn$_invoke$arity$1(G__41827),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

/**
 * A value that must be = to some element of vs.
 */
schema.core.enum$ = (function schema$core$enum(var_args){
var args__4742__auto__ = [];
var len__4736__auto___42452 = arguments.length;
var i__4737__auto___42453 = (0);
while(true){
if((i__4737__auto___42453 < len__4736__auto___42452)){
args__4742__auto__.push((arguments[i__4737__auto___42453]));

var G__42454 = (i__4737__auto___42453 + (1));
i__4737__auto___42453 = G__42454;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return schema.core.enum$.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(schema.core.enum$.cljs$core$IFn$_invoke$arity$variadic = (function (vs){
return (new schema.core.EnumSchema(cljs.core.set(vs),null,null,null));
}));

(schema.core.enum$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(schema.core.enum$.cljs$lang$applyTo = (function (seq41848){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41848));
}));


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.Predicate = (function (p_QMARK_,pred_name,__meta,__extmap,__hash){
this.p_QMARK_ = p_QMARK_;
this.pred_name = pred_name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.Predicate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(schema.core.Predicate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k41853,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__41861 = k41853;
var G__41861__$1 = (((G__41861 instanceof cljs.core.Keyword))?G__41861.fqn:null);
switch (G__41861__$1) {
case "p?":
return self__.p_QMARK_;

break;
case "pred-name":
return self__.pred_name;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k41853,else__4383__auto__);

}
}));

(schema.core.Predicate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__41864){
var vec__41865 = p__41864;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41865,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41865,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(schema.core.Predicate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#schema.core.Predicate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p?","p?",-1172161701),self__.p_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pred-name","pred-name",-3677451),self__.pred_name],null))], null),self__.__extmap));
}));

(schema.core.Predicate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41852){
var self__ = this;
var G__41852__$1 = this;
return (new cljs.core.RecordIter((0),G__41852__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p?","p?",-1172161701),new cljs.core.Keyword(null,"pred-name","pred-name",-3677451)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(schema.core.Predicate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(schema.core.Predicate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.Predicate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(schema.core.Predicate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (2041221968 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(schema.core.Predicate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this41854,other41855){
var self__ = this;
var this41854__$1 = this;
return (((!((other41855 == null)))) && ((this41854__$1.constructor === other41855.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41854__$1.p_QMARK_,other41855.p_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41854__$1.pred_name,other41855.pred_name)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41854__$1.__extmap,other41855.__extmap)));
}));

(schema.core.Predicate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pred-name","pred-name",-3677451),null,new cljs.core.Keyword(null,"p?","p?",-1172161701),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(schema.core.Predicate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__41852){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__41891 = cljs.core.keyword_identical_QMARK_;
var expr__41892 = k__4388__auto__;
if(cljs.core.truth_((pred__41891.cljs$core$IFn$_invoke$arity$2 ? pred__41891.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"p?","p?",-1172161701),expr__41892) : pred__41891.call(null,new cljs.core.Keyword(null,"p?","p?",-1172161701),expr__41892)))){
return (new schema.core.Predicate(G__41852,self__.pred_name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__41891.cljs$core$IFn$_invoke$arity$2 ? pred__41891.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pred-name","pred-name",-3677451),expr__41892) : pred__41891.call(null,new cljs.core.Keyword(null,"pred-name","pred-name",-3677451),expr__41892)))){
return (new schema.core.Predicate(self__.p_QMARK_,G__41852,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__41852),null));
}
}
}));

(schema.core.Predicate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"p?","p?",-1172161701),self__.p_QMARK_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pred-name","pred-name",-3677451),self__.pred_name,null))], null),self__.__extmap));
}));

(schema.core.Predicate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__41852){
var self__ = this;
var this__4379__auto____$1 = this;
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,G__41852,self__.__extmap,self__.__hash));
}));

(schema.core.Predicate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(schema.core.Predicate.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Predicate.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core.precondition(this$__$1,self__.p_QMARK_,(function (p1__41851_SHARP_){
return (new cljs.core.List(null,self__.pred_name,(new cljs.core.List(null,p1__41851_SHARP_,null,(1),null)),(2),null));
})));
}));

(schema.core.Predicate.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p_QMARK_,cljs.core.integer_QMARK_)){
return new cljs.core.Symbol(null,"Int","Int",-2116888740,null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p_QMARK_,cljs.core.keyword_QMARK_)){
return new cljs.core.Symbol(null,"Keyword","Keyword",-850065993,null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p_QMARK_,cljs.core.symbol_QMARK_)){
return new cljs.core.Symbol(null,"Symbol","Symbol",716452869,null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p_QMARK_,cljs.core.string_QMARK_)){
return new cljs.core.Symbol(null,"Str","Str",907970895,null);
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"pred","pred",-727012372,null),(new cljs.core.List(null,self__.pred_name,null,(1),null)),(2),null));

}
}
}
}
}));

(schema.core.Predicate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p?","p?",468369826,null),new cljs.core.Symbol(null,"pred-name","pred-name",1636854076,null)], null);
}));

(schema.core.Predicate.cljs$lang$type = true);

(schema.core.Predicate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"schema.core/Predicate",null,(1),null));
}));

(schema.core.Predicate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"schema.core/Predicate");
}));

/**
 * Positional factory function for schema.core/Predicate.
 */
schema.core.__GT_Predicate = (function schema$core$__GT_Predicate(p_QMARK_,pred_name){
return (new schema.core.Predicate(p_QMARK_,pred_name,null,null,null));
});

/**
 * Factory function for schema.core/Predicate, taking a map of keywords to field values.
 */
schema.core.map__GT_Predicate = (function schema$core$map__GT_Predicate(G__41859){
var extmap__4419__auto__ = (function (){var G__41894 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__41859,new cljs.core.Keyword(null,"p?","p?",-1172161701),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pred-name","pred-name",-3677451)], 0));
if(cljs.core.record_QMARK_(G__41859)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__41894);
} else {
return G__41894;
}
})();
return (new schema.core.Predicate(new cljs.core.Keyword(null,"p?","p?",-1172161701).cljs$core$IFn$_invoke$arity$1(G__41859),new cljs.core.Keyword(null,"pred-name","pred-name",-3677451).cljs$core$IFn$_invoke$arity$1(G__41859),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

/**
 * A value for which p? returns true (and does not throw).
 * Optional pred-name can be passed for nicer validation errors.
 */
schema.core.pred = (function schema$core$pred(var_args){
var G__41896 = arguments.length;
switch (G__41896) {
case 1:
return schema.core.pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return schema.core.pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(schema.core.pred.cljs$core$IFn$_invoke$arity$1 = (function (p_QMARK_){
return schema.core.pred.cljs$core$IFn$_invoke$arity$2(p_QMARK_,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(schema.utils.fn_name(p_QMARK_)));
}));

(schema.core.pred.cljs$core$IFn$_invoke$arity$2 = (function (p_QMARK_,pred_name){
if(cljs.core.ifn_QMARK_(p_QMARK_)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Not a function: %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p_QMARK_], 0))));
}

return (new schema.core.Predicate(p_QMARK_,pred_name,null,null,null));
}));

(schema.core.pred.cljs$lang$maxFixedArity = 2);

schema.core.protocol_name = (function schema$core$protocol_name(protocol){
return new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(protocol));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.Protocol = (function (p,__meta,__extmap,__hash){
this.p = p;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.Protocol.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(schema.core.Protocol.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k41901,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__41906 = k41901;
var G__41906__$1 = (((G__41906 instanceof cljs.core.Keyword))?G__41906.fqn:null);
switch (G__41906__$1) {
case "p":
return self__.p;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k41901,else__4383__auto__);

}
}));

(schema.core.Protocol.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__41907){
var vec__41908 = p__41907;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41908,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41908,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(schema.core.Protocol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#schema.core.Protocol{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null))], null),self__.__extmap));
}));

(schema.core.Protocol.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41900){
var self__ = this;
var G__41900__$1 = this;
return (new cljs.core.RecordIter((0),G__41900__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(schema.core.Protocol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(schema.core.Protocol.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new schema.core.Protocol(self__.p,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.Protocol.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(schema.core.Protocol.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1892592712 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(schema.core.Protocol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this41902,other41903){
var self__ = this;
var this41902__$1 = this;
return (((!((other41903 == null)))) && ((this41902__$1.constructor === other41903.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41902__$1.p,other41903.p)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41902__$1.__extmap,other41903.__extmap)));
}));

(schema.core.Protocol.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"p","p",151049309),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new schema.core.Protocol(self__.p,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(schema.core.Protocol.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__41900){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__41911 = cljs.core.keyword_identical_QMARK_;
var expr__41912 = k__4388__auto__;
if(cljs.core.truth_((pred__41911.cljs$core$IFn$_invoke$arity$2 ? pred__41911.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"p","p",151049309),expr__41912) : pred__41911.call(null,new cljs.core.Keyword(null,"p","p",151049309),expr__41912)))){
return (new schema.core.Protocol(G__41900,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Protocol(self__.p,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__41900),null));
}
}));

(schema.core.Protocol.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"p","p",151049309),self__.p,null))], null),self__.__extmap));
}));

(schema.core.Protocol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__41900){
var self__ = this;
var this__4379__auto____$1 = this;
return (new schema.core.Protocol(self__.p,G__41900,self__.__extmap,self__.__hash));
}));

(schema.core.Protocol.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(schema.core.Protocol.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Protocol.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core.precondition(this$__$1,(function (p1__41898_SHARP_){
var fexpr__41915 = new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(this$__$1));
return (fexpr__41915.cljs$core$IFn$_invoke$arity$1 ? fexpr__41915.cljs$core$IFn$_invoke$arity$1(p1__41898_SHARP_) : fexpr__41915.call(null,p1__41898_SHARP_));
}),(function (p1__41899_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),(new cljs.core.List(null,schema.core.protocol_name(this$__$1),(new cljs.core.List(null,p1__41899_SHARP_,null,(1),null)),(2),null)),(3),null));
})));
}));

(schema.core.Protocol.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.List(null,new cljs.core.Symbol(null,"protocol","protocol",-2001965651,null),(new cljs.core.List(null,schema.core.protocol_name(this$__$1),null,(1),null)),(2),null));
}));

(schema.core.Protocol.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null)], null);
}));

(schema.core.Protocol.cljs$lang$type = true);

(schema.core.Protocol.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"schema.core/Protocol",null,(1),null));
}));

(schema.core.Protocol.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"schema.core/Protocol");
}));

/**
 * Positional factory function for schema.core/Protocol.
 */
schema.core.__GT_Protocol = (function schema$core$__GT_Protocol(p){
return (new schema.core.Protocol(p,null,null,null));
});

/**
 * Factory function for schema.core/Protocol, taking a map of keywords to field values.
 */
schema.core.map__GT_Protocol = (function schema$core$map__GT_Protocol(G__41904){
var extmap__4419__auto__ = (function (){var G__41923 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__41904,new cljs.core.Keyword(null,"p","p",151049309));
if(cljs.core.record_QMARK_(G__41904)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__41923);
} else {
return G__41923;
}
})();
return (new schema.core.Protocol(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(G__41904),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

(RegExp.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(RegExp.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(schema.spec.core.precondition(this$__$1,cljs.core.string_QMARK_,(function (p1__37927__37928__auto__){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"string?","string?",-1129175764,null),(new cljs.core.List(null,p1__37927__37928__auto__,null,(1),null)),(2),null));
})),schema.spec.core.precondition(this$__$1,(function (p1__41925_SHARP_){
return cljs.core.re_find(this$__$1,p1__41925_SHARP_);
}),(function (p1__41926_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),(new cljs.core.List(null,schema.core.explain(this$__$1),(new cljs.core.List(null,p1__41926_SHARP_,null,(1),null)),(2),null)),(3),null));
}))));
}));

(RegExp.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["#\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1).slice((1),(-1))),"\""].join(''));
}));
/**
 * Satisfied only by String.
 * Is (pred string?) and not js/String in cljs because of keywords.
 */
schema.core.Str = schema.core.pred.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,new cljs.core.Symbol(null,"string?","string?",-1129175764,null));
/**
 * Boolean true or false
 */
schema.core.Bool = Boolean;
/**
 * Any number
 */
schema.core.Num = Number;
/**
 * Any integral number
 */
schema.core.Int = schema.core.pred.cljs$core$IFn$_invoke$arity$2(cljs.core.integer_QMARK_,new cljs.core.Symbol(null,"integer?","integer?",1303791671,null));
/**
 * A keyword
 */
schema.core.Keyword = schema.core.pred.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null));
/**
 * A symbol
 */
schema.core.Symbol = schema.core.pred.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,new cljs.core.Symbol(null,"symbol?","symbol?",1820680511,null));
/**
 * A regular expression
 */
schema.core.Regex = (function (){
if((typeof schema !== 'undefined') && (typeof schema.core !== 'undefined') && (typeof schema.core.t_schema$core41935 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {schema.core.Schema}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
schema.core.t_schema$core41935 = (function (meta41936){
this.meta41936 = meta41936;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(schema.core.t_schema$core41935.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41937,meta41936__$1){
var self__ = this;
var _41937__$1 = this;
return (new schema.core.t_schema$core41935(meta41936__$1));
}));

(schema.core.t_schema$core41935.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41937){
var self__ = this;
var _41937__$1 = this;
return self__.meta41936;
}));

(schema.core.t_schema$core41935.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.t_schema$core41935.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core.precondition(this$__$1,(function (p1__41933_SHARP_){
return (p1__41933_SHARP_ instanceof RegExp);
}),(function (p1__41934_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),(new cljs.core.List(null,new cljs.core.Symbol("js","RegExp","js/RegExp",1778210562,null),(new cljs.core.List(null,p1__41934_SHARP_,null,(1),null)),(2),null)),(3),null));
})));
}));

(schema.core.t_schema$core41935.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Symbol(null,"Regex","Regex",205914413,null);
}));

(schema.core.t_schema$core41935.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta41936","meta41936",698218677,null)], null);
}));

(schema.core.t_schema$core41935.cljs$lang$type = true);

(schema.core.t_schema$core41935.cljs$lang$ctorStr = "schema.core/t_schema$core41935");

(schema.core.t_schema$core41935.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"schema.core/t_schema$core41935");
}));

/**
 * Positional factory function for schema.core/t_schema$core41935.
 */
schema.core.__GT_t_schema$core41935 = (function schema$core$__GT_t_schema$core41935(meta41936){
return (new schema.core.t_schema$core41935(meta41936));
});

}

return (new schema.core.t_schema$core41935(cljs.core.PersistentArrayMap.EMPTY));
})()
;
/**
 * The local representation of #inst ...
 */
schema.core.Inst = Date;
/**
 * The local representation of #uuid ...
 */
schema.core.Uuid = cljs.core.UUID;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.Maybe = (function (schema,__meta,__extmap,__hash){
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.Maybe.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(schema.core.Maybe.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k41949,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__41959 = k41949;
var G__41959__$1 = (((G__41959 instanceof cljs.core.Keyword))?G__41959.fqn:null);
switch (G__41959__$1) {
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k41949,else__4383__auto__);

}
}));

(schema.core.Maybe.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__41962){
var vec__41965 = p__41962;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41965,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41965,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(schema.core.Maybe.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#schema.core.Maybe{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
}));

(schema.core.Maybe.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41948){
var self__ = this;
var G__41948__$1 = this;
return (new cljs.core.RecordIter((0),G__41948__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(schema.core.Maybe.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(schema.core.Maybe.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new schema.core.Maybe(self__.schema,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.Maybe.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(schema.core.Maybe.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-805411239 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(schema.core.Maybe.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this41950,other41951){
var self__ = this;
var this41950__$1 = this;
return (((!((other41951 == null)))) && ((this41950__$1.constructor === other41951.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41950__$1.schema,other41951.schema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41950__$1.__extmap,other41951.__extmap)));
}));

(schema.core.Maybe.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new schema.core.Maybe(self__.schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(schema.core.Maybe.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__41948){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__41983 = cljs.core.keyword_identical_QMARK_;
var expr__41984 = k__4388__auto__;
if(cljs.core.truth_((pred__41983.cljs$core$IFn$_invoke$arity$2 ? pred__41983.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__41984) : pred__41983.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__41984)))){
return (new schema.core.Maybe(G__41948,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Maybe(self__.schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__41948),null));
}
}));

(schema.core.Maybe.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema,null))], null),self__.__extmap));
}));

(schema.core.Maybe.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__41948){
var self__ = this;
var this__4379__auto____$1 = this;
return (new schema.core.Maybe(self__.schema,G__41948,self__.__extmap,self__.__hash));
}));

(schema.core.Maybe.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(schema.core.Maybe.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Maybe.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$2(schema.spec.core._PLUS_no_precondition_PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guard","guard",-873147811),cljs.core.nil_QMARK_,new cljs.core.Keyword(null,"schema","schema",-1582001791),schema.core.eq(null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema], null)], null));
}));

(schema.core.Maybe.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.List(null,new cljs.core.Symbol(null,"maybe","maybe",1326133967,null),(new cljs.core.List(null,schema.core.explain(self__.schema),null,(1),null)),(2),null));
}));

(schema.core.Maybe.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null)], null);
}));

(schema.core.Maybe.cljs$lang$type = true);

(schema.core.Maybe.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"schema.core/Maybe",null,(1),null));
}));

(schema.core.Maybe.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"schema.core/Maybe");
}));

/**
 * Positional factory function for schema.core/Maybe.
 */
schema.core.__GT_Maybe = (function schema$core$__GT_Maybe(schema__$1){
return (new schema.core.Maybe(schema__$1,null,null,null));
});

/**
 * Factory function for schema.core/Maybe, taking a map of keywords to field values.
 */
schema.core.map__GT_Maybe = (function schema$core$map__GT_Maybe(G__41953){
var extmap__4419__auto__ = (function (){var G__41999 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__41953,new cljs.core.Keyword(null,"schema","schema",-1582001791));
if(cljs.core.record_QMARK_(G__41953)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__41999);
} else {
return G__41999;
}
})();
return (new schema.core.Maybe(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__41953),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

/**
 * A value that must either be nil or satisfy schema
 */
schema.core.maybe = (function schema$core$maybe(schema__$1){
return (new schema.core.Maybe(schema__$1,null,null,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.NamedSchema = (function (schema,name,__meta,__extmap,__hash){
this.schema = schema;
this.name = name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.NamedSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(schema.core.NamedSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k42005,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__42014 = k42005;
var G__42014__$1 = (((G__42014 instanceof cljs.core.Keyword))?G__42014.fqn:null);
switch (G__42014__$1) {
case "schema":
return self__.schema;

break;
case "name":
return self__.name;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k42005,else__4383__auto__);

}
}));

(schema.core.NamedSchema.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__42017){
var vec__42018 = p__42017;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42018,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42018,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(schema.core.NamedSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#schema.core.NamedSchema{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null))], null),self__.__extmap));
}));

(schema.core.NamedSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42004){
var self__ = this;
var G__42004__$1 = this;
return (new cljs.core.RecordIter((0),G__42004__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"name","name",1843675177)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(schema.core.NamedSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(schema.core.NamedSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.NamedSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(schema.core.NamedSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (456601728 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(schema.core.NamedSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42006,other42007){
var self__ = this;
var this42006__$1 = this;
return (((!((other42007 == null)))) && ((this42006__$1.constructor === other42007.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42006__$1.schema,other42007.schema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42006__$1.name,other42007.name)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42006__$1.__extmap,other42007.__extmap)));
}));

(schema.core.NamedSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"name","name",1843675177),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(schema.core.NamedSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__42004){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__42033 = cljs.core.keyword_identical_QMARK_;
var expr__42034 = k__4388__auto__;
if(cljs.core.truth_((pred__42033.cljs$core$IFn$_invoke$arity$2 ? pred__42033.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__42034) : pred__42033.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__42034)))){
return (new schema.core.NamedSchema(G__42004,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__42033.cljs$core$IFn$_invoke$arity$2 ? pred__42033.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),expr__42034) : pred__42033.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__42034)))){
return (new schema.core.NamedSchema(self__.schema,G__42004,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__42004),null));
}
}
}));

(schema.core.NamedSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"name","name",1843675177),self__.name,null))], null),self__.__extmap));
}));

(schema.core.NamedSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__42004){
var self__ = this;
var this__4379__auto____$1 = this;
return (new schema.core.NamedSchema(self__.schema,self__.name,G__42004,self__.__extmap,self__.__hash));
}));

(schema.core.NamedSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(schema.core.NamedSchema.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.NamedSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$2(schema.spec.core._PLUS_no_precondition_PLUS_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema,new cljs.core.Keyword(null,"wrap-error","wrap-error",536732809),(function (p1__42003_SHARP_){
return schema.utils.__GT_NamedError(self__.name,p1__42003_SHARP_);
})], null)], null));
}));

(schema.core.NamedSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.List(null,new cljs.core.Symbol(null,"named","named",1218138048,null),(new cljs.core.List(null,schema.core.explain(self__.schema),(new cljs.core.List(null,self__.name,null,(1),null)),(2),null)),(3),null));
}));

(schema.core.NamedSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.Symbol(null,"name","name",-810760592,null)], null);
}));

(schema.core.NamedSchema.cljs$lang$type = true);

(schema.core.NamedSchema.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"schema.core/NamedSchema",null,(1),null));
}));

(schema.core.NamedSchema.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"schema.core/NamedSchema");
}));

/**
 * Positional factory function for schema.core/NamedSchema.
 */
schema.core.__GT_NamedSchema = (function schema$core$__GT_NamedSchema(schema__$1,name){
return (new schema.core.NamedSchema(schema__$1,name,null,null,null));
});

/**
 * Factory function for schema.core/NamedSchema, taking a map of keywords to field values.
 */
schema.core.map__GT_NamedSchema = (function schema$core$map__GT_NamedSchema(G__42010){
var extmap__4419__auto__ = (function (){var G__42039 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__42010,new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177)], 0));
if(cljs.core.record_QMARK_(G__42010)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__42039);
} else {
return G__42039;
}
})();
return (new schema.core.NamedSchema(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__42010),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__42010),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

/**
 * A value that must satisfy schema, and has a name for documentation purposes.
 */
schema.core.named = (function schema$core$named(schema__$1,name){
return (new schema.core.NamedSchema(schema__$1,name,null,null,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.Either = (function (schemas,__meta,__extmap,__hash){
this.schemas = schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.Either.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(schema.core.Either.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k42046,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__42053 = k42046;
var G__42053__$1 = (((G__42053 instanceof cljs.core.Keyword))?G__42053.fqn:null);
switch (G__42053__$1) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k42046,else__4383__auto__);

}
}));

(schema.core.Either.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__42054){
var vec__42055 = p__42054;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42055,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42055,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(schema.core.Either.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#schema.core.Either{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas],null))], null),self__.__extmap));
}));

(schema.core.Either.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42045){
var self__ = this;
var G__42045__$1 = this;
return (new cljs.core.RecordIter((0),G__42045__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schemas","schemas",575070579)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(schema.core.Either.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(schema.core.Either.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new schema.core.Either(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.Either.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(schema.core.Either.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1018568510 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(schema.core.Either.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42047,other42048){
var self__ = this;
var this42047__$1 = this;
return (((!((other42048 == null)))) && ((this42047__$1.constructor === other42048.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42047__$1.schemas,other42048.schemas)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42047__$1.__extmap,other42048.__extmap)));
}));

(schema.core.Either.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schemas","schemas",575070579),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new schema.core.Either(self__.schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(schema.core.Either.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__42045){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__42067 = cljs.core.keyword_identical_QMARK_;
var expr__42068 = k__4388__auto__;
if(cljs.core.truth_((pred__42067.cljs$core$IFn$_invoke$arity$2 ? pred__42067.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"schemas","schemas",575070579),expr__42068) : pred__42067.call(null,new cljs.core.Keyword(null,"schemas","schemas",575070579),expr__42068)))){
return (new schema.core.Either(G__42045,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Either(self__.schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__42045),null));
}
}));

(schema.core.Either.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas,null))], null),self__.__extmap));
}));

(schema.core.Either.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__42045){
var self__ = this;
var this__4379__auto____$1 = this;
return (new schema.core.Either(self__.schemas,G__42045,self__.__extmap,self__.__hash));
}));

(schema.core.Either.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(schema.core.Either.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Either.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$3(schema.spec.core._PLUS_no_precondition_PLUS_,(function (){var iter__4529__auto__ = (function schema$core$iter__42070(s__42071){
return (new cljs.core.LazySeq(null,(function (){
var s__42071__$1 = s__42071;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__42071__$1);
if(temp__5735__auto__){
var s__42071__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42071__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__42071__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__42073 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__42072 = (0);
while(true){
if((i__42072 < size__4528__auto__)){
var s = cljs.core._nth(c__4527__auto__,i__42072);
cljs.core.chunk_append(b__42073,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guard","guard",-873147811),cljs.core.complement(schema.core.checker(s)),new cljs.core.Keyword(null,"schema","schema",-1582001791),s], null));

var G__42483 = (i__42072 + (1));
i__42072 = G__42483;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42073),schema$core$iter__42070(cljs.core.chunk_rest(s__42071__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42073),null);
}
} else {
var s = cljs.core.first(s__42071__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guard","guard",-873147811),cljs.core.complement(schema.core.checker(s)),new cljs.core.Keyword(null,"schema","schema",-1582001791),s], null),schema$core$iter__42070(cljs.core.rest(s__42071__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(self__.schemas);
})(),(function (p1__42044_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"some-matching-either-clause?","some-matching-either-clause?",-1443305015,null),(new cljs.core.List(null,p1__42044_SHARP_,null,(1),null)),(2),null));
}));
}));

(schema.core.Either.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(new cljs.core.Symbol(null,"either","either",-2144373018,null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.explain,self__.schemas));
}));

(schema.core.Either.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schemas","schemas",-2079365190,null)], null);
}));

(schema.core.Either.cljs$lang$type = true);

(schema.core.Either.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"schema.core/Either",null,(1),null));
}));

(schema.core.Either.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"schema.core/Either");
}));

/**
 * Positional factory function for schema.core/Either.
 */
schema.core.__GT_Either = (function schema$core$__GT_Either(schemas){
return (new schema.core.Either(schemas,null,null,null));
});

/**
 * Factory function for schema.core/Either, taking a map of keywords to field values.
 */
schema.core.map__GT_Either = (function schema$core$map__GT_Either(G__42049){
var extmap__4419__auto__ = (function (){var G__42074 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__42049,new cljs.core.Keyword(null,"schemas","schemas",575070579));
if(cljs.core.record_QMARK_(G__42049)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__42074);
} else {
return G__42074;
}
})();
return (new schema.core.Either(new cljs.core.Keyword(null,"schemas","schemas",575070579).cljs$core$IFn$_invoke$arity$1(G__42049),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

/**
 * A value that must satisfy at least one schema in schemas.
 * Note that `either` does not work properly with coercion
 * 
 * DEPRECATED: prefer `conditional` or `cond-pre`
 * 
 * WARNING: either does not work with coercion.  It is also slow and gives
 * bad error messages.  Please consider using `conditional` and friends
 * instead; they are more efficient, provide better error messages,
 * and work with coercion.
 */
schema.core.either = (function schema$core$either(var_args){
var args__4742__auto__ = [];
var len__4736__auto___42484 = arguments.length;
var i__4737__auto___42485 = (0);
while(true){
if((i__4737__auto___42485 < len__4736__auto___42484)){
args__4742__auto__.push((arguments[i__4737__auto___42485]));

var G__42486 = (i__4737__auto___42485 + (1));
i__4737__auto___42485 = G__42486;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return schema.core.either.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(schema.core.either.cljs$core$IFn$_invoke$arity$variadic = (function (schemas){
return (new schema.core.Either(schemas,null,null,null));
}));

(schema.core.either.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(schema.core.either.cljs$lang$applyTo = (function (seq42075){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42075));
}));


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.ConditionalSchema = (function (preds_and_schemas,error_symbol,__meta,__extmap,__hash){
this.preds_and_schemas = preds_and_schemas;
this.error_symbol = error_symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.ConditionalSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(schema.core.ConditionalSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k42078,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__42082 = k42078;
var G__42082__$1 = (((G__42082 instanceof cljs.core.Keyword))?G__42082.fqn:null);
switch (G__42082__$1) {
case "preds-and-schemas":
return self__.preds_and_schemas;

break;
case "error-symbol":
return self__.error_symbol;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k42078,else__4383__auto__);

}
}));

(schema.core.ConditionalSchema.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__42083){
var vec__42084 = p__42083;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42084,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42084,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(schema.core.ConditionalSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#schema.core.ConditionalSchema{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),self__.preds_and_schemas],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"error-symbol","error-symbol",-823480428),self__.error_symbol],null))], null),self__.__extmap));
}));

(schema.core.ConditionalSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42077){
var self__ = this;
var G__42077__$1 = this;
return (new cljs.core.RecordIter((0),G__42077__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),new cljs.core.Keyword(null,"error-symbol","error-symbol",-823480428)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(schema.core.ConditionalSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(schema.core.ConditionalSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.error_symbol,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.ConditionalSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(schema.core.ConditionalSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1418435858 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(schema.core.ConditionalSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42079,other42080){
var self__ = this;
var this42079__$1 = this;
return (((!((other42080 == null)))) && ((this42079__$1.constructor === other42080.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42079__$1.preds_and_schemas,other42080.preds_and_schemas)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42079__$1.error_symbol,other42080.error_symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42079__$1.__extmap,other42080.__extmap)));
}));

(schema.core.ConditionalSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),null,new cljs.core.Keyword(null,"error-symbol","error-symbol",-823480428),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.error_symbol,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(schema.core.ConditionalSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__42077){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__42087 = cljs.core.keyword_identical_QMARK_;
var expr__42088 = k__4388__auto__;
if(cljs.core.truth_((pred__42087.cljs$core$IFn$_invoke$arity$2 ? pred__42087.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),expr__42088) : pred__42087.call(null,new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),expr__42088)))){
return (new schema.core.ConditionalSchema(G__42077,self__.error_symbol,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__42087.cljs$core$IFn$_invoke$arity$2 ? pred__42087.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"error-symbol","error-symbol",-823480428),expr__42088) : pred__42087.call(null,new cljs.core.Keyword(null,"error-symbol","error-symbol",-823480428),expr__42088)))){
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,G__42077,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.error_symbol,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__42077),null));
}
}
}));

(schema.core.ConditionalSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),self__.preds_and_schemas,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"error-symbol","error-symbol",-823480428),self__.error_symbol,null))], null),self__.__extmap));
}));

(schema.core.ConditionalSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__42077){
var self__ = this;
var this__4379__auto____$1 = this;
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.error_symbol,G__42077,self__.__extmap,self__.__hash));
}));

(schema.core.ConditionalSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(schema.core.ConditionalSchema.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.ConditionalSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$3(schema.spec.core._PLUS_no_precondition_PLUS_,(function (){var iter__4529__auto__ = (function schema$core$iter__42090(s__42091){
return (new cljs.core.LazySeq(null,(function (){
var s__42091__$1 = s__42091;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__42091__$1);
if(temp__5735__auto__){
var s__42091__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42091__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__42091__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__42093 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__42092 = (0);
while(true){
if((i__42092 < size__4528__auto__)){
var vec__42094 = cljs.core._nth(c__4527__auto__,i__42092);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42094,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42094,(1),null);
cljs.core.chunk_append(b__42093,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guard","guard",-873147811),p,new cljs.core.Keyword(null,"schema","schema",-1582001791),s], null));

var G__42488 = (i__42092 + (1));
i__42092 = G__42488;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42093),schema$core$iter__42090(cljs.core.chunk_rest(s__42091__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42093),null);
}
} else {
var vec__42097 = cljs.core.first(s__42091__$2);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42097,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42097,(1),null);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guard","guard",-873147811),p,new cljs.core.Keyword(null,"schema","schema",-1582001791),s], null),schema$core$iter__42090(cljs.core.rest(s__42091__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(self__.preds_and_schemas);
})(),(function (p1__42076_SHARP_){
return (new cljs.core.List(null,(function (){var or__4126__auto__ = self__.error_symbol;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(self__.preds_and_schemas))){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(schema.utils.fn_name(cljs.core.ffirst(self__.preds_and_schemas)));
} else {
return new cljs.core.Symbol(null,"some-matching-condition?","some-matching-condition?",1512398506,null);
}
}
})(),(new cljs.core.List(null,p1__42076_SHARP_,null,(1),null)),(2),null));
}));
}));

(schema.core.ConditionalSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(new cljs.core.Symbol(null,"conditional","conditional",-1212542970,null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__42100){
var vec__42101 = p__42100;
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42101,(0),null);
var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42101,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(schema.utils.fn_name(pred)),schema.core.explain(schema__$1)], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.preds_and_schemas], 0)),(cljs.core.truth_(self__.error_symbol)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.error_symbol], null):null)));
}));

(schema.core.ConditionalSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"preds-and-schemas","preds-and-schemas",333765172,null),new cljs.core.Symbol(null,"error-symbol","error-symbol",817051099,null)], null);
}));

(schema.core.ConditionalSchema.cljs$lang$type = true);

(schema.core.ConditionalSchema.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"schema.core/ConditionalSchema",null,(1),null));
}));

(schema.core.ConditionalSchema.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"schema.core/ConditionalSchema");
}));

/**
 * Positional factory function for schema.core/ConditionalSchema.
 */
schema.core.__GT_ConditionalSchema = (function schema$core$__GT_ConditionalSchema(preds_and_schemas,error_symbol){
return (new schema.core.ConditionalSchema(preds_and_schemas,error_symbol,null,null,null));
});

/**
 * Factory function for schema.core/ConditionalSchema, taking a map of keywords to field values.
 */
schema.core.map__GT_ConditionalSchema = (function schema$core$map__GT_ConditionalSchema(G__42081){
var extmap__4419__auto__ = (function (){var G__42104 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__42081,new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error-symbol","error-symbol",-823480428)], 0));
if(cljs.core.record_QMARK_(G__42081)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__42104);
} else {
return G__42104;
}
})();
return (new schema.core.ConditionalSchema(new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355).cljs$core$IFn$_invoke$arity$1(G__42081),new cljs.core.Keyword(null,"error-symbol","error-symbol",-823480428).cljs$core$IFn$_invoke$arity$1(G__42081),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

/**
 * Define a conditional schema.  Takes args like cond,
 * (conditional pred1 schema1 pred2 schema2 ...),
 * and checks the first schemaX where predX (an ordinary Clojure function
 * that returns true or false) returns true on the value.
 * Unlike cond, throws if the value does not match any condition.
 * :else may be used as a final condition in the place of (constantly true).
 * More efficient than either, since only one schema must be checked.
 * An optional final argument can be passed, a symbol to appear in
 * error messages when none of the conditions match.
 */
schema.core.conditional = (function schema$core$conditional(var_args){
var args__4742__auto__ = [];
var len__4736__auto___42489 = arguments.length;
var i__4737__auto___42490 = (0);
while(true){
if((i__4737__auto___42490 < len__4736__auto___42489)){
args__4742__auto__.push((arguments[i__4737__auto___42490]));

var G__42491 = (i__4737__auto___42490 + (1));
i__4737__auto___42490 = G__42491;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic = (function (preds_and_schemas){
if(((cljs.core.seq(preds_and_schemas)) && (((cljs.core.even_QMARK_(cljs.core.count(preds_and_schemas))) || ((cljs.core.last(preds_and_schemas) instanceof cljs.core.Symbol)))))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Expected even, nonzero number of args (with optional trailing symbol); got %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.count(preds_and_schemas)], 0))));
}

return (new schema.core.ConditionalSchema(cljs.core.vec((function (){var iter__4529__auto__ = (function schema$core$iter__42106(s__42107){
return (new cljs.core.LazySeq(null,(function (){
var s__42107__$1 = s__42107;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__42107__$1);
if(temp__5735__auto__){
var s__42107__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42107__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__42107__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__42109 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__42108 = (0);
while(true){
if((i__42108 < size__4528__auto__)){
var vec__42110 = cljs.core._nth(c__4527__auto__,i__42108);
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42110,(0),null);
var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42110,(1),null);
cljs.core.chunk_append(b__42109,(function (){
if(cljs.core.ifn_QMARK_(pred)){
} else {
throw (new Error(schema.utils.format_STAR_(["Conditional predicate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pred)," must be a function"].join(''))));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pred,new cljs.core.Keyword(null,"else","else",-1508377146)))?cljs.core.constantly(true):pred),schema__$1], null);
})()
);

var G__42492 = (i__42108 + (1));
i__42108 = G__42492;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42109),schema$core$iter__42106(cljs.core.chunk_rest(s__42107__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42109),null);
}
} else {
var vec__42113 = cljs.core.first(s__42107__$2);
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42113,(0),null);
var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42113,(1),null);
return cljs.core.cons((function (){
if(cljs.core.ifn_QMARK_(pred)){
} else {
throw (new Error(schema.utils.format_STAR_(["Conditional predicate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pred)," must be a function"].join(''))));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pred,new cljs.core.Keyword(null,"else","else",-1508377146)))?cljs.core.constantly(true):pred),schema__$1], null);
})()
,schema$core$iter__42106(cljs.core.rest(s__42107__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),preds_and_schemas));
})()),((cljs.core.odd_QMARK_(cljs.core.count(preds_and_schemas)))?cljs.core.last(preds_and_schemas):null),null,null,null));
}));

(schema.core.conditional.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(schema.core.conditional.cljs$lang$applyTo = (function (seq42105){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42105));
}));


/**
 * @interface
 */
schema.core.HasPrecondition = function(){};

var schema$core$HasPrecondition$precondition$dyn_42493 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (schema.core.precondition[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (schema.core.precondition["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("HasPrecondition.precondition",this$);
}
}
});
/**
 * Return a predicate representing the Precondition for this schema:
 *   the predicate returns true if the precondition is satisfied.
 *   (See spec.core for more details)
 */
schema.core.precondition = (function schema$core$precondition(this$){
if((((!((this$ == null)))) && ((!((this$.schema$core$HasPrecondition$precondition$arity$1 == null)))))){
return this$.schema$core$HasPrecondition$precondition$arity$1(this$);
} else {
return schema$core$HasPrecondition$precondition$dyn_42493(this$);
}
});

(schema.spec.leaf.LeafSpec.prototype.schema$core$HasPrecondition$ = cljs.core.PROTOCOL_SENTINEL);

(schema.spec.leaf.LeafSpec.prototype.schema$core$HasPrecondition$precondition$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.complement(this$__$1.pre);
}));

(schema.spec.variant.VariantSpec.prototype.schema$core$HasPrecondition$ = cljs.core.PROTOCOL_SENTINEL);

(schema.spec.variant.VariantSpec.prototype.schema$core$HasPrecondition$precondition$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(this$__$1.pre),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.some_fn,(function (){var iter__4529__auto__ = (function schema$core$iter__42116(s__42117){
return (new cljs.core.LazySeq(null,(function (){
var s__42117__$1 = s__42117;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__42117__$1);
if(temp__5735__auto__){
var s__42117__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42117__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__42117__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__42119 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__42118 = (0);
while(true){
if((i__42118 < size__4528__auto__)){
var map__42120 = cljs.core._nth(c__4527__auto__,i__42118);
var map__42120__$1 = (((((!((map__42120 == null))))?(((((map__42120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42120):map__42120);
var guard = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42120__$1,new cljs.core.Keyword(null,"guard","guard",-873147811));
var schema__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42120__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
cljs.core.chunk_append(b__42119,(cljs.core.truth_(guard)?cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(guard,schema.core.precondition(schema.core.spec(schema__$1))):schema.core.precondition(schema.core.spec(schema__$1))));

var G__42494 = (i__42118 + (1));
i__42118 = G__42494;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42119),schema$core$iter__42116(cljs.core.chunk_rest(s__42117__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42119),null);
}
} else {
var map__42122 = cljs.core.first(s__42117__$2);
var map__42122__$1 = (((((!((map__42122 == null))))?(((((map__42122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42122.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42122):map__42122);
var guard = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42122__$1,new cljs.core.Keyword(null,"guard","guard",-873147811));
var schema__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42122__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
return cljs.core.cons((cljs.core.truth_(guard)?cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(guard,schema.core.precondition(schema.core.spec(schema__$1))):schema.core.precondition(schema.core.spec(schema__$1))),schema$core$iter__42116(cljs.core.rest(s__42117__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(this$__$1.options);
})()));
}));

(schema.spec.collection.CollectionSpec.prototype.schema$core$HasPrecondition$ = cljs.core.PROTOCOL_SENTINEL);

(schema.spec.collection.CollectionSpec.prototype.schema$core$HasPrecondition$precondition$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.complement(this$__$1.pre);
}));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.CondPre = (function (schemas,__meta,__extmap,__hash){
this.schemas = schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.CondPre.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(schema.core.CondPre.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k42126,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__42130 = k42126;
var G__42130__$1 = (((G__42130 instanceof cljs.core.Keyword))?G__42130.fqn:null);
switch (G__42130__$1) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k42126,else__4383__auto__);

}
}));

(schema.core.CondPre.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__42131){
var vec__42132 = p__42131;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42132,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42132,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(schema.core.CondPre.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#schema.core.CondPre{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas],null))], null),self__.__extmap));
}));

(schema.core.CondPre.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42125){
var self__ = this;
var G__42125__$1 = this;
return (new cljs.core.RecordIter((0),G__42125__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schemas","schemas",575070579)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(schema.core.CondPre.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(schema.core.CondPre.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new schema.core.CondPre(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.CondPre.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(schema.core.CondPre.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-56613580 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(schema.core.CondPre.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42127,other42128){
var self__ = this;
var this42127__$1 = this;
return (((!((other42128 == null)))) && ((this42127__$1.constructor === other42128.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42127__$1.schemas,other42128.schemas)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42127__$1.__extmap,other42128.__extmap)));
}));

(schema.core.CondPre.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schemas","schemas",575070579),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new schema.core.CondPre(self__.schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(schema.core.CondPre.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__42125){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__42135 = cljs.core.keyword_identical_QMARK_;
var expr__42136 = k__4388__auto__;
if(cljs.core.truth_((pred__42135.cljs$core$IFn$_invoke$arity$2 ? pred__42135.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"schemas","schemas",575070579),expr__42136) : pred__42135.call(null,new cljs.core.Keyword(null,"schemas","schemas",575070579),expr__42136)))){
return (new schema.core.CondPre(G__42125,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.CondPre(self__.schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__42125),null));
}
}));

(schema.core.CondPre.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas,null))], null),self__.__extmap));
}));

(schema.core.CondPre.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__42125){
var self__ = this;
var this__4379__auto____$1 = this;
return (new schema.core.CondPre(self__.schemas,G__42125,self__.__extmap,self__.__hash));
}));

(schema.core.CondPre.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(schema.core.CondPre.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.CondPre.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$3(schema.spec.core._PLUS_no_precondition_PLUS_,(function (){var iter__4529__auto__ = (function schema$core$iter__42138(s__42139){
return (new cljs.core.LazySeq(null,(function (){
var s__42139__$1 = s__42139;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__42139__$1);
if(temp__5735__auto__){
var s__42139__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42139__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__42139__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__42141 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__42140 = (0);
while(true){
if((i__42140 < size__4528__auto__)){
var s = cljs.core._nth(c__4527__auto__,i__42140);
cljs.core.chunk_append(b__42141,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guard","guard",-873147811),schema.core.precondition(schema.core.spec(s)),new cljs.core.Keyword(null,"schema","schema",-1582001791),s], null));

var G__42496 = (i__42140 + (1));
i__42140 = G__42496;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42141),schema$core$iter__42138(cljs.core.chunk_rest(s__42139__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42141),null);
}
} else {
var s = cljs.core.first(s__42139__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guard","guard",-873147811),schema.core.precondition(schema.core.spec(s)),new cljs.core.Keyword(null,"schema","schema",-1582001791),s], null),schema$core$iter__42138(cljs.core.rest(s__42139__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(self__.schemas);
})(),(function (p1__42124_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"matches-some-precondition?","matches-some-precondition?",2123072832,null),(new cljs.core.List(null,p1__42124_SHARP_,null,(1),null)),(2),null));
}));
}));

(schema.core.CondPre.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(new cljs.core.Symbol(null,"cond-pre","cond-pre",-923707731,null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.explain,self__.schemas));
}));

(schema.core.CondPre.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schemas","schemas",-2079365190,null)], null);
}));

(schema.core.CondPre.cljs$lang$type = true);

(schema.core.CondPre.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"schema.core/CondPre",null,(1),null));
}));

(schema.core.CondPre.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"schema.core/CondPre");
}));

/**
 * Positional factory function for schema.core/CondPre.
 */
schema.core.__GT_CondPre = (function schema$core$__GT_CondPre(schemas){
return (new schema.core.CondPre(schemas,null,null,null));
});

/**
 * Factory function for schema.core/CondPre, taking a map of keywords to field values.
 */
schema.core.map__GT_CondPre = (function schema$core$map__GT_CondPre(G__42129){
var extmap__4419__auto__ = (function (){var G__42142 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__42129,new cljs.core.Keyword(null,"schemas","schemas",575070579));
if(cljs.core.record_QMARK_(G__42129)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__42142);
} else {
return G__42142;
}
})();
return (new schema.core.CondPre(new cljs.core.Keyword(null,"schemas","schemas",575070579).cljs$core$IFn$_invoke$arity$1(G__42129),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

/**
 * A replacement for `either` that constructs a conditional schema
 * based on the schema spec preconditions of the component schemas.
 * 
 * Given a datum, the preconditions for each schema (which typically
 * check just the outermost class) are tested against the datum in turn.
 * The first schema whose precondition matches is greedily selected,
 * and the datum is validated against that schema.  Unlike `either`,
 * a validation failure is final (and there is no backtracking to try
 * other schemas that might match).
 * 
 * Thus, `cond-pre` is only suitable for schemas with mutually exclusive
 * preconditions (e.g., s/Int and s/Str).  If this doesn't hold
 * (e.g. {:a s/Int} and {:b s/Str}), you must use `conditional` instead
 * and provide an explicit condition for distinguishing the cases.
 * 
 * EXPERIMENTAL
 */
schema.core.cond_pre = (function schema$core$cond_pre(var_args){
var args__4742__auto__ = [];
var len__4736__auto___42497 = arguments.length;
var i__4737__auto___42498 = (0);
while(true){
if((i__4737__auto___42498 < len__4736__auto___42497)){
args__4742__auto__.push((arguments[i__4737__auto___42498]));

var G__42499 = (i__4737__auto___42498 + (1));
i__4737__auto___42498 = G__42499;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return schema.core.cond_pre.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(schema.core.cond_pre.cljs$core$IFn$_invoke$arity$variadic = (function (schemas){
return (new schema.core.CondPre(schemas,null,null,null));
}));

(schema.core.cond_pre.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(schema.core.cond_pre.cljs$lang$applyTo = (function (seq42143){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42143));
}));


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.Constrained = (function (schema,postcondition,post_name,__meta,__extmap,__hash){
this.schema = schema;
this.postcondition = postcondition;
this.post_name = post_name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.Constrained.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(schema.core.Constrained.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k42146,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__42150 = k42146;
var G__42150__$1 = (((G__42150 instanceof cljs.core.Keyword))?G__42150.fqn:null);
switch (G__42150__$1) {
case "schema":
return self__.schema;

break;
case "postcondition":
return self__.postcondition;

break;
case "post-name":
return self__.post_name;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k42146,else__4383__auto__);

}
}));

(schema.core.Constrained.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__42151){
var vec__42152 = p__42151;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42152,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42152,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(schema.core.Constrained.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#schema.core.Constrained{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"postcondition","postcondition",-737101222),self__.postcondition],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"post-name","post-name",491455269),self__.post_name],null))], null),self__.__extmap));
}));

(schema.core.Constrained.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42145){
var self__ = this;
var G__42145__$1 = this;
return (new cljs.core.RecordIter((0),G__42145__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"postcondition","postcondition",-737101222),new cljs.core.Keyword(null,"post-name","post-name",491455269)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(schema.core.Constrained.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(schema.core.Constrained.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new schema.core.Constrained(self__.schema,self__.postcondition,self__.post_name,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.Constrained.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(schema.core.Constrained.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (725895648 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(schema.core.Constrained.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42147,other42148){
var self__ = this;
var this42147__$1 = this;
return (((!((other42148 == null)))) && ((this42147__$1.constructor === other42148.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42147__$1.schema,other42148.schema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42147__$1.postcondition,other42148.postcondition)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42147__$1.post_name,other42148.post_name)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42147__$1.__extmap,other42148.__extmap)));
}));

(schema.core.Constrained.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"post-name","post-name",491455269),null,new cljs.core.Keyword(null,"postcondition","postcondition",-737101222),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new schema.core.Constrained(self__.schema,self__.postcondition,self__.post_name,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(schema.core.Constrained.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__42145){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__42155 = cljs.core.keyword_identical_QMARK_;
var expr__42156 = k__4388__auto__;
if(cljs.core.truth_((pred__42155.cljs$core$IFn$_invoke$arity$2 ? pred__42155.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__42156) : pred__42155.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__42156)))){
return (new schema.core.Constrained(G__42145,self__.postcondition,self__.post_name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__42155.cljs$core$IFn$_invoke$arity$2 ? pred__42155.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"postcondition","postcondition",-737101222),expr__42156) : pred__42155.call(null,new cljs.core.Keyword(null,"postcondition","postcondition",-737101222),expr__42156)))){
return (new schema.core.Constrained(self__.schema,G__42145,self__.post_name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__42155.cljs$core$IFn$_invoke$arity$2 ? pred__42155.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"post-name","post-name",491455269),expr__42156) : pred__42155.call(null,new cljs.core.Keyword(null,"post-name","post-name",491455269),expr__42156)))){
return (new schema.core.Constrained(self__.schema,self__.postcondition,G__42145,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Constrained(self__.schema,self__.postcondition,self__.post_name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__42145),null));
}
}
}
}));

(schema.core.Constrained.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"postcondition","postcondition",-737101222),self__.postcondition,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"post-name","post-name",491455269),self__.post_name,null))], null),self__.__extmap));
}));

(schema.core.Constrained.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__42145){
var self__ = this;
var this__4379__auto____$1 = this;
return (new schema.core.Constrained(self__.schema,self__.postcondition,self__.post_name,G__42145,self__.__extmap,self__.__hash));
}));

(schema.core.Constrained.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(schema.core.Constrained.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Constrained.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$4(schema.spec.core._PLUS_no_precondition_PLUS_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema], null)], null),null,schema.spec.core.precondition(this$__$1,self__.postcondition,(function (p1__42144_SHARP_){
return (new cljs.core.List(null,self__.post_name,(new cljs.core.List(null,p1__42144_SHARP_,null,(1),null)),(2),null));
})));
}));

(schema.core.Constrained.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.List(null,new cljs.core.Symbol(null,"constrained","constrained",-2057147788,null),(new cljs.core.List(null,schema.core.explain(self__.schema),(new cljs.core.List(null,self__.post_name,null,(1),null)),(2),null)),(3),null));
}));

(schema.core.Constrained.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.Symbol(null,"postcondition","postcondition",903430305,null),new cljs.core.Symbol(null,"post-name","post-name",2131986796,null)], null);
}));

(schema.core.Constrained.cljs$lang$type = true);

(schema.core.Constrained.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"schema.core/Constrained",null,(1),null));
}));

(schema.core.Constrained.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"schema.core/Constrained");
}));

/**
 * Positional factory function for schema.core/Constrained.
 */
schema.core.__GT_Constrained = (function schema$core$__GT_Constrained(schema__$1,postcondition,post_name){
return (new schema.core.Constrained(schema__$1,postcondition,post_name,null,null,null));
});

/**
 * Factory function for schema.core/Constrained, taking a map of keywords to field values.
 */
schema.core.map__GT_Constrained = (function schema$core$map__GT_Constrained(G__42149){
var extmap__4419__auto__ = (function (){var G__42158 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__42149,new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"postcondition","postcondition",-737101222),new cljs.core.Keyword(null,"post-name","post-name",491455269)], 0));
if(cljs.core.record_QMARK_(G__42149)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__42158);
} else {
return G__42158;
}
})();
return (new schema.core.Constrained(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__42149),new cljs.core.Keyword(null,"postcondition","postcondition",-737101222).cljs$core$IFn$_invoke$arity$1(G__42149),new cljs.core.Keyword(null,"post-name","post-name",491455269).cljs$core$IFn$_invoke$arity$1(G__42149),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

/**
 * A schema with an additional post-condition.  Differs from `conditional`
 * with a single schema, in that the predicate checked *after* the main
 * schema.  This can lead to better error messages, and is often better
 * suited for coercion.
 */
schema.core.constrained = (function schema$core$constrained(var_args){
var G__42160 = arguments.length;
switch (G__42160) {
case 2:
return schema.core.constrained.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return schema.core.constrained.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(schema.core.constrained.cljs$core$IFn$_invoke$arity$2 = (function (s,p_QMARK_){
return schema.core.constrained.cljs$core$IFn$_invoke$arity$3(s,p_QMARK_,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(schema.utils.fn_name(p_QMARK_)));
}));

(schema.core.constrained.cljs$core$IFn$_invoke$arity$3 = (function (s,p_QMARK_,pred_name){
if(cljs.core.ifn_QMARK_(p_QMARK_)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Not a function: %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p_QMARK_], 0))));
}

return (new schema.core.Constrained(s,p_QMARK_,pred_name,null,null,null));
}));

(schema.core.constrained.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {schema.core.HasPrecondition}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.Both = (function (schemas,__meta,__extmap,__hash){
this.schemas = schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.Both.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(schema.core.Both.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k42163,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__42167 = k42163;
var G__42167__$1 = (((G__42167 instanceof cljs.core.Keyword))?G__42167.fqn:null);
switch (G__42167__$1) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k42163,else__4383__auto__);

}
}));

(schema.core.Both.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__42168){
var vec__42169 = p__42168;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42169,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42169,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(schema.core.Both.prototype.schema$spec$core$CoreSpec$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Both.prototype.schema$spec$core$CoreSpec$subschemas$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.schemas;
}));

(schema.core.Both.prototype.schema$spec$core$CoreSpec$checker$arity$2 = (function (this$,params){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (f,t){
return (function (x){
var tx = (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(x) : t.call(null,x));
if(schema.utils.error_QMARK_(tx)){
return tx;
} else {
var G__42172 = (function (){var or__4126__auto__ = tx;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return x;
}
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__42172) : f.call(null,G__42172));
}
});
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42161_SHARP_){
return schema.spec.core.sub_checker(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),p1__42161_SHARP_], null),params);
}),cljs.core.reverse(self__.schemas)));
}));

(schema.core.Both.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#schema.core.Both{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas],null))], null),self__.__extmap));
}));

(schema.core.Both.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42162){
var self__ = this;
var G__42162__$1 = this;
return (new cljs.core.RecordIter((0),G__42162__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schemas","schemas",575070579)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(schema.core.Both.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(schema.core.Both.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new schema.core.Both(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.Both.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(schema.core.Both.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1189778852 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(schema.core.Both.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42164,other42165){
var self__ = this;
var this42164__$1 = this;
return (((!((other42165 == null)))) && ((this42164__$1.constructor === other42165.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42164__$1.schemas,other42165.schemas)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42164__$1.__extmap,other42165.__extmap)));
}));

(schema.core.Both.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schemas","schemas",575070579),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new schema.core.Both(self__.schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(schema.core.Both.prototype.schema$core$HasPrecondition$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Both.prototype.schema$core$HasPrecondition$precondition$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(schema.core.precondition,schema.core.spec),self__.schemas));
}));

(schema.core.Both.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__42162){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__42173 = cljs.core.keyword_identical_QMARK_;
var expr__42174 = k__4388__auto__;
if(cljs.core.truth_((pred__42173.cljs$core$IFn$_invoke$arity$2 ? pred__42173.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"schemas","schemas",575070579),expr__42174) : pred__42173.call(null,new cljs.core.Keyword(null,"schemas","schemas",575070579),expr__42174)))){
return (new schema.core.Both(G__42162,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Both(self__.schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__42162),null));
}
}));

(schema.core.Both.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas,null))], null),self__.__extmap));
}));

(schema.core.Both.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__42162){
var self__ = this;
var this__4379__auto____$1 = this;
return (new schema.core.Both(self__.schemas,G__42162,self__.__extmap,self__.__hash));
}));

(schema.core.Both.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(schema.core.Both.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Both.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
}));

(schema.core.Both.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(new cljs.core.Symbol(null,"both","both",1246882687,null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.explain,self__.schemas));
}));

(schema.core.Both.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schemas","schemas",-2079365190,null)], null);
}));

(schema.core.Both.cljs$lang$type = true);

(schema.core.Both.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"schema.core/Both",null,(1),null));
}));

(schema.core.Both.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"schema.core/Both");
}));

/**
 * Positional factory function for schema.core/Both.
 */
schema.core.__GT_Both = (function schema$core$__GT_Both(schemas){
return (new schema.core.Both(schemas,null,null,null));
});

/**
 * Factory function for schema.core/Both, taking a map of keywords to field values.
 */
schema.core.map__GT_Both = (function schema$core$map__GT_Both(G__42166){
var extmap__4419__auto__ = (function (){var G__42176 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__42166,new cljs.core.Keyword(null,"schemas","schemas",575070579));
if(cljs.core.record_QMARK_(G__42166)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__42176);
} else {
return G__42176;
}
})();
return (new schema.core.Both(new cljs.core.Keyword(null,"schemas","schemas",575070579).cljs$core$IFn$_invoke$arity$1(G__42166),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

/**
 * A value that must satisfy every schema in schemas.
 * 
 * DEPRECATED: prefer 'conditional' with a single condition
 * instead, or `constrained`.
 * 
 * When used with coercion, coerces each schema in sequence.
 */
schema.core.both = (function schema$core$both(var_args){
var args__4742__auto__ = [];
var len__4736__auto___42510 = arguments.length;
var i__4737__auto___42511 = (0);
while(true){
if((i__4737__auto___42511 < len__4736__auto___42510)){
args__4742__auto__.push((arguments[i__4737__auto___42511]));

var G__42512 = (i__4737__auto___42511 + (1));
i__4737__auto___42511 = G__42512;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return schema.core.both.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(schema.core.both.cljs$core$IFn$_invoke$arity$variadic = (function (schemas){
return (new schema.core.Both(schemas,null,null,null));
}));

(schema.core.both.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(schema.core.both.cljs$lang$applyTo = (function (seq42177){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42177));
}));

/**
 * if the predicate returns truthy, use the if-schema, otherwise use the else-schema
 */
schema.core.if$ = (function schema$core$if(pred,if_schema,else_schema){
return schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pred,if_schema,cljs.core.constantly(true),else_schema], 0));
});
schema.core.var_name = (function schema$core$var_name(v){
var map__42178 = cljs.core.meta(v);
var map__42178__$1 = (((((!((map__42178 == null))))?(((((map__42178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42178.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42178):map__42178);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42178__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42178__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.Recursive = (function (derefable,__meta,__extmap,__hash){
this.derefable = derefable;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.Recursive.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(schema.core.Recursive.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k42181,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__42185 = k42181;
var G__42185__$1 = (((G__42185 instanceof cljs.core.Keyword))?G__42185.fqn:null);
switch (G__42185__$1) {
case "derefable":
return self__.derefable;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k42181,else__4383__auto__);

}
}));

(schema.core.Recursive.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__42186){
var vec__42187 = p__42186;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42187,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42187,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(schema.core.Recursive.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#schema.core.Recursive{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"derefable","derefable",377265868),self__.derefable],null))], null),self__.__extmap));
}));

(schema.core.Recursive.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42180){
var self__ = this;
var G__42180__$1 = this;
return (new cljs.core.RecordIter((0),G__42180__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"derefable","derefable",377265868)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(schema.core.Recursive.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(schema.core.Recursive.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new schema.core.Recursive(self__.derefable,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.Recursive.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(schema.core.Recursive.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1521498755 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(schema.core.Recursive.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42182,other42183){
var self__ = this;
var this42182__$1 = this;
return (((!((other42183 == null)))) && ((this42182__$1.constructor === other42183.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42182__$1.derefable,other42183.derefable)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42182__$1.__extmap,other42183.__extmap)));
}));

(schema.core.Recursive.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"derefable","derefable",377265868),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new schema.core.Recursive(self__.derefable,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(schema.core.Recursive.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__42180){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__42190 = cljs.core.keyword_identical_QMARK_;
var expr__42191 = k__4388__auto__;
if(cljs.core.truth_((pred__42190.cljs$core$IFn$_invoke$arity$2 ? pred__42190.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"derefable","derefable",377265868),expr__42191) : pred__42190.call(null,new cljs.core.Keyword(null,"derefable","derefable",377265868),expr__42191)))){
return (new schema.core.Recursive(G__42180,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Recursive(self__.derefable,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__42180),null));
}
}));

(schema.core.Recursive.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"derefable","derefable",377265868),self__.derefable,null))], null),self__.__extmap));
}));

(schema.core.Recursive.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__42180){
var self__ = this;
var this__4379__auto____$1 = this;
return (new schema.core.Recursive(self__.derefable,G__42180,self__.__extmap,self__.__hash));
}));

(schema.core.Recursive.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(schema.core.Recursive.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Recursive.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$2(schema.spec.core._PLUS_no_precondition_PLUS_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.deref(self__.derefable)], null)], null));
}));

(schema.core.Recursive.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.List(null,new cljs.core.Symbol(null,"recursive","recursive",-1935549897,null),(new cljs.core.List(null,(((self__.derefable instanceof cljs.core.Var))?(new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),(new cljs.core.List(null,schema.core.var_name(self__.derefable),null,(1),null)),(2),null)):new cljs.core.Symbol(null,"...","...",-1926939749,null)),null,(1),null)),(2),null));
}));

(schema.core.Recursive.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"derefable","derefable",2017797395,null)], null);
}));

(schema.core.Recursive.cljs$lang$type = true);

(schema.core.Recursive.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"schema.core/Recursive",null,(1),null));
}));

(schema.core.Recursive.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"schema.core/Recursive");
}));

/**
 * Positional factory function for schema.core/Recursive.
 */
schema.core.__GT_Recursive = (function schema$core$__GT_Recursive(derefable){
return (new schema.core.Recursive(derefable,null,null,null));
});

/**
 * Factory function for schema.core/Recursive, taking a map of keywords to field values.
 */
schema.core.map__GT_Recursive = (function schema$core$map__GT_Recursive(G__42184){
var extmap__4419__auto__ = (function (){var G__42193 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__42184,new cljs.core.Keyword(null,"derefable","derefable",377265868));
if(cljs.core.record_QMARK_(G__42184)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__42193);
} else {
return G__42193;
}
})();
return (new schema.core.Recursive(new cljs.core.Keyword(null,"derefable","derefable",377265868).cljs$core$IFn$_invoke$arity$1(G__42184),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

/**
 * Support for (mutually) recursive schemas by passing a var that points to a schema,
 * e.g (recursive #'ExampleRecursiveSchema).
 */
schema.core.recursive = (function schema$core$recursive(schema__$1){
if((((!((schema__$1 == null))))?(((((schema__$1.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === schema__$1.cljs$core$IDeref$))))?true:(((!schema__$1.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,schema__$1):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,schema__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Not an IDeref: %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([schema__$1], 0))));
}

return (new schema.core.Recursive(schema__$1,null,null,null));
});
schema.core.atom_QMARK_ = (function schema$core$atom_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IAtom$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,x);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.Atomic = (function (schema,__meta,__extmap,__hash){
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.Atomic.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(schema.core.Atomic.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k42197,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__42201 = k42197;
var G__42201__$1 = (((G__42201 instanceof cljs.core.Keyword))?G__42201.fqn:null);
switch (G__42201__$1) {
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k42197,else__4383__auto__);

}
}));

(schema.core.Atomic.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__42202){
var vec__42203 = p__42202;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42203,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42203,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(schema.core.Atomic.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#schema.core.Atomic{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
}));

(schema.core.Atomic.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42196){
var self__ = this;
var G__42196__$1 = this;
return (new cljs.core.RecordIter((0),G__42196__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(schema.core.Atomic.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(schema.core.Atomic.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new schema.core.Atomic(self__.schema,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.Atomic.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(schema.core.Atomic.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1019346599 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(schema.core.Atomic.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42198,other42199){
var self__ = this;
var this42198__$1 = this;
return (((!((other42199 == null)))) && ((this42198__$1.constructor === other42199.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42198__$1.schema,other42199.schema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42198__$1.__extmap,other42199.__extmap)));
}));

(schema.core.Atomic.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new schema.core.Atomic(self__.schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(schema.core.Atomic.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__42196){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__42206 = cljs.core.keyword_identical_QMARK_;
var expr__42207 = k__4388__auto__;
if(cljs.core.truth_((pred__42206.cljs$core$IFn$_invoke$arity$2 ? pred__42206.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__42207) : pred__42206.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__42207)))){
return (new schema.core.Atomic(G__42196,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Atomic(self__.schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__42196),null));
}
}));

(schema.core.Atomic.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema,null))], null),self__.__extmap));
}));

(schema.core.Atomic.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__42196){
var self__ = this;
var this__4379__auto____$1 = this;
return (new schema.core.Atomic(self__.schema,G__42196,self__.__extmap,self__.__hash));
}));

(schema.core.Atomic.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(schema.core.Atomic.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Atomic.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.collection.collection_spec(schema.spec.core.precondition(this$__$1,schema.core.atom_QMARK_,(function (p1__37927__37928__auto__){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"atom?","atom?",-1007535292,null),(new cljs.core.List(null,p1__37927__37928__auto__,null,(1),null)),(2),null));
})),cljs.core.atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.one_element(true,self__.schema,(function (item_fn,coll){
var G__42209_42524 = cljs.core.deref(coll);
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__42209_42524) : item_fn.call(null,G__42209_42524));

return null;
}))], null),(function (_,xs,___$1){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.first(xs));
}));
}));

(schema.core.Atomic.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.List(null,new cljs.core.Symbol(null,"atom","atom",1243487874,null),(new cljs.core.List(null,schema.core.explain(self__.schema),null,(1),null)),(2),null));
}));

(schema.core.Atomic.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null)], null);
}));

(schema.core.Atomic.cljs$lang$type = true);

(schema.core.Atomic.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"schema.core/Atomic",null,(1),null));
}));

(schema.core.Atomic.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"schema.core/Atomic");
}));

/**
 * Positional factory function for schema.core/Atomic.
 */
schema.core.__GT_Atomic = (function schema$core$__GT_Atomic(schema__$1){
return (new schema.core.Atomic(schema__$1,null,null,null));
});

/**
 * Factory function for schema.core/Atomic, taking a map of keywords to field values.
 */
schema.core.map__GT_Atomic = (function schema$core$map__GT_Atomic(G__42200){
var extmap__4419__auto__ = (function (){var G__42210 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__42200,new cljs.core.Keyword(null,"schema","schema",-1582001791));
if(cljs.core.record_QMARK_(G__42200)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__42210);
} else {
return G__42210;
}
})();
return (new schema.core.Atomic(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__42200),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

/**
 * An atom containing a value matching 'schema'.
 */
schema.core.atom = (function schema$core$atom(schema__$1){
return schema.core.__GT_Atomic(schema__$1);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
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
schema.core.RequiredKey = (function (k,__meta,__extmap,__hash){
this.k = k;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(schema.core.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k42212,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__42216 = k42212;
var G__42216__$1 = (((G__42216 instanceof cljs.core.Keyword))?G__42216.fqn:null);
switch (G__42216__$1) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k42212,else__4383__auto__);

}
}));

(schema.core.RequiredKey.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__42217){
var vec__42218 = p__42217;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42218,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42218,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(schema.core.RequiredKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#schema.core.RequiredKey{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null))], null),self__.__extmap));
}));

(schema.core.RequiredKey.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42211){
var self__ = this;
var G__42211__$1 = this;
return (new cljs.core.RecordIter((0),G__42211__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"k","k",-2146297393)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(schema.core.RequiredKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(schema.core.RequiredKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new schema.core.RequiredKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.RequiredKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(schema.core.RequiredKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1805575094 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(schema.core.RequiredKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42213,other42214){
var self__ = this;
var this42213__$1 = this;
return (((!((other42214 == null)))) && ((this42213__$1.constructor === other42214.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42213__$1.k,other42214.k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42213__$1.__extmap,other42214.__extmap)));
}));

(schema.core.RequiredKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"k","k",-2146297393),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new schema.core.RequiredKey(self__.k,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(schema.core.RequiredKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__42211){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__42221 = cljs.core.keyword_identical_QMARK_;
var expr__42222 = k__4388__auto__;
if(cljs.core.truth_((pred__42221.cljs$core$IFn$_invoke$arity$2 ? pred__42221.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"k","k",-2146297393),expr__42222) : pred__42221.call(null,new cljs.core.Keyword(null,"k","k",-2146297393),expr__42222)))){
return (new schema.core.RequiredKey(G__42211,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.RequiredKey(self__.k,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__42211),null));
}
}));

(schema.core.RequiredKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"k","k",-2146297393),self__.k,null))], null),self__.__extmap));
}));

(schema.core.RequiredKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__42211){
var self__ = this;
var this__4379__auto____$1 = this;
return (new schema.core.RequiredKey(self__.k,G__42211,self__.__extmap,self__.__hash));
}));

(schema.core.RequiredKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(schema.core.RequiredKey.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null)], null);
}));

(schema.core.RequiredKey.cljs$lang$type = true);

(schema.core.RequiredKey.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"schema.core/RequiredKey",null,(1),null));
}));

(schema.core.RequiredKey.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"schema.core/RequiredKey");
}));

/**
 * Positional factory function for schema.core/RequiredKey.
 */
schema.core.__GT_RequiredKey = (function schema$core$__GT_RequiredKey(k){
return (new schema.core.RequiredKey(k,null,null,null));
});

/**
 * Factory function for schema.core/RequiredKey, taking a map of keywords to field values.
 */
schema.core.map__GT_RequiredKey = (function schema$core$map__GT_RequiredKey(G__42215){
var extmap__4419__auto__ = (function (){var G__42224 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__42215,new cljs.core.Keyword(null,"k","k",-2146297393));
if(cljs.core.record_QMARK_(G__42215)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__42224);
} else {
return G__42224;
}
})();
return (new schema.core.RequiredKey(new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(G__42215),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

/**
 * A required key in a map
 */
schema.core.required_key = (function schema$core$required_key(k){
if((k instanceof cljs.core.Keyword)){
return k;
} else {
return (new schema.core.RequiredKey(k,null,null,null));
}
});
schema.core.required_key_QMARK_ = (function schema$core$required_key_QMARK_(ks){
return (((ks instanceof cljs.core.Keyword)) || ((ks instanceof schema.core.RequiredKey)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
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
schema.core.OptionalKey = (function (k,__meta,__extmap,__hash){
this.k = k;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(schema.core.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k42226,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__42230 = k42226;
var G__42230__$1 = (((G__42230 instanceof cljs.core.Keyword))?G__42230.fqn:null);
switch (G__42230__$1) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k42226,else__4383__auto__);

}
}));

(schema.core.OptionalKey.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__42231){
var vec__42232 = p__42231;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42232,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42232,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(schema.core.OptionalKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#schema.core.OptionalKey{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null))], null),self__.__extmap));
}));

(schema.core.OptionalKey.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42225){
var self__ = this;
var G__42225__$1 = this;
return (new cljs.core.RecordIter((0),G__42225__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"k","k",-2146297393)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(schema.core.OptionalKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(schema.core.OptionalKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new schema.core.OptionalKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.OptionalKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(schema.core.OptionalKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1508333161 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(schema.core.OptionalKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42227,other42228){
var self__ = this;
var this42227__$1 = this;
return (((!((other42228 == null)))) && ((this42227__$1.constructor === other42228.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42227__$1.k,other42228.k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42227__$1.__extmap,other42228.__extmap)));
}));

(schema.core.OptionalKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"k","k",-2146297393),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new schema.core.OptionalKey(self__.k,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(schema.core.OptionalKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__42225){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__42235 = cljs.core.keyword_identical_QMARK_;
var expr__42236 = k__4388__auto__;
if(cljs.core.truth_((pred__42235.cljs$core$IFn$_invoke$arity$2 ? pred__42235.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"k","k",-2146297393),expr__42236) : pred__42235.call(null,new cljs.core.Keyword(null,"k","k",-2146297393),expr__42236)))){
return (new schema.core.OptionalKey(G__42225,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.OptionalKey(self__.k,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__42225),null));
}
}));

(schema.core.OptionalKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"k","k",-2146297393),self__.k,null))], null),self__.__extmap));
}));

(schema.core.OptionalKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__42225){
var self__ = this;
var this__4379__auto____$1 = this;
return (new schema.core.OptionalKey(self__.k,G__42225,self__.__extmap,self__.__hash));
}));

(schema.core.OptionalKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(schema.core.OptionalKey.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null)], null);
}));

(schema.core.OptionalKey.cljs$lang$type = true);

(schema.core.OptionalKey.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"schema.core/OptionalKey",null,(1),null));
}));

(schema.core.OptionalKey.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"schema.core/OptionalKey");
}));

/**
 * Positional factory function for schema.core/OptionalKey.
 */
schema.core.__GT_OptionalKey = (function schema$core$__GT_OptionalKey(k){
return (new schema.core.OptionalKey(k,null,null,null));
});

/**
 * Factory function for schema.core/OptionalKey, taking a map of keywords to field values.
 */
schema.core.map__GT_OptionalKey = (function schema$core$map__GT_OptionalKey(G__42229){
var extmap__4419__auto__ = (function (){var G__42238 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__42229,new cljs.core.Keyword(null,"k","k",-2146297393));
if(cljs.core.record_QMARK_(G__42229)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__42238);
} else {
return G__42238;
}
})();
return (new schema.core.OptionalKey(new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(G__42229),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

/**
 * An optional key in a map
 */
schema.core.optional_key = (function schema$core$optional_key(k){
return (new schema.core.OptionalKey(k,null,null,null));
});
schema.core.optional_key_QMARK_ = (function schema$core$optional_key_QMARK_(ks){
return (ks instanceof schema.core.OptionalKey);
});
schema.core.explicit_schema_key = (function schema$core$explicit_schema_key(ks){
if((ks instanceof cljs.core.Keyword)){
return ks;
} else {
if((ks instanceof schema.core.RequiredKey)){
return ks.k;
} else {
if(schema.core.optional_key_QMARK_(ks)){
return ks.k;
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Bad explicit key: %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ks], 0))));

}
}
}
});
schema.core.specific_key_QMARK_ = (function schema$core$specific_key_QMARK_(ks){
return ((schema.core.required_key_QMARK_(ks)) || (schema.core.optional_key_QMARK_(ks)));
});
schema.core.map_entry_ctor = (function schema$core$map_entry_ctor(p__42239){
var vec__42240 = p__42239;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42240,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42240,(1),null);
var coll = vec__42240;
return (new cljs.core.MapEntry(k,v,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.MapEntry = (function (key_schema,val_schema,__meta,__extmap,__hash){
this.key_schema = key_schema;
this.val_schema = val_schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.MapEntry.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(schema.core.MapEntry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k42244,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__42248 = k42244;
var G__42248__$1 = (((G__42248 instanceof cljs.core.Keyword))?G__42248.fqn:null);
switch (G__42248__$1) {
case "key-schema":
return self__.key_schema;

break;
case "val-schema":
return self__.val_schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k42244,else__4383__auto__);

}
}));

(schema.core.MapEntry.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__42249){
var vec__42250 = p__42249;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42250,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42250,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(schema.core.MapEntry.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#schema.core.MapEntry{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key-schema","key-schema",-1096660726),self__.key_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619),self__.val_schema],null))], null),self__.__extmap));
}));

(schema.core.MapEntry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42243){
var self__ = this;
var G__42243__$1 = this;
return (new cljs.core.RecordIter((0),G__42243__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-schema","key-schema",-1096660726),new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(schema.core.MapEntry.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(schema.core.MapEntry.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new schema.core.MapEntry(self__.key_schema,self__.val_schema,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.MapEntry.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(schema.core.MapEntry.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-804356212 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(schema.core.MapEntry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42245,other42246){
var self__ = this;
var this42245__$1 = this;
return (((!((other42246 == null)))) && ((this42245__$1.constructor === other42246.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42245__$1.key_schema,other42246.key_schema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42245__$1.val_schema,other42246.val_schema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42245__$1.__extmap,other42246.__extmap)));
}));

(schema.core.MapEntry.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key-schema","key-schema",-1096660726),null,new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new schema.core.MapEntry(self__.key_schema,self__.val_schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(schema.core.MapEntry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__42243){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__42253 = cljs.core.keyword_identical_QMARK_;
var expr__42254 = k__4388__auto__;
if(cljs.core.truth_((pred__42253.cljs$core$IFn$_invoke$arity$2 ? pred__42253.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key-schema","key-schema",-1096660726),expr__42254) : pred__42253.call(null,new cljs.core.Keyword(null,"key-schema","key-schema",-1096660726),expr__42254)))){
return (new schema.core.MapEntry(G__42243,self__.val_schema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__42253.cljs$core$IFn$_invoke$arity$2 ? pred__42253.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619),expr__42254) : pred__42253.call(null,new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619),expr__42254)))){
return (new schema.core.MapEntry(self__.key_schema,G__42243,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.MapEntry(self__.key_schema,self__.val_schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__42243),null));
}
}
}));

(schema.core.MapEntry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"key-schema","key-schema",-1096660726),self__.key_schema,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619),self__.val_schema,null))], null),self__.__extmap));
}));

(schema.core.MapEntry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__42243){
var self__ = this;
var this__4379__auto____$1 = this;
return (new schema.core.MapEntry(self__.key_schema,self__.val_schema,G__42243,self__.__extmap,self__.__hash));
}));

(schema.core.MapEntry.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(schema.core.MapEntry.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.MapEntry.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.collection.collection_spec(schema.spec.core._PLUS_no_precondition_PLUS_,schema.core.map_entry_ctor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.one_element(true,self__.key_schema,(function (item_fn,e){
var G__42256_42565 = cljs.core.key(e);
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__42256_42565) : item_fn.call(null,G__42256_42565));

return e;
})),schema.spec.collection.one_element(true,self__.val_schema,(function (item_fn,e){
var G__42257_42567 = cljs.core.val(e);
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__42257_42567) : item_fn.call(null,G__42257_42567));

return null;
}))], null),(function (p__42258,p__42259,_){
var vec__42260 = p__42258;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42260,(0),null);
var vec__42263 = p__42259;
var xk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42263,(0),null);
var xv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42263,(1),null);
var temp__5733__auto__ = schema.utils.error_val(xk);
if(cljs.core.truth_(temp__5733__auto__)){
var k_err = temp__5733__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_err,new cljs.core.Symbol(null,"invalid-key","invalid-key",-1461682245,null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,schema.utils.error_val(xv)], null);
}
}));
}));

(schema.core.MapEntry.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.List(null,new cljs.core.Symbol(null,"map-entry","map-entry",329617471,null),(new cljs.core.List(null,schema.core.explain(self__.key_schema),(new cljs.core.List(null,schema.core.explain(self__.val_schema),null,(1),null)),(2),null)),(3),null));
}));

(schema.core.MapEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key-schema","key-schema",543870801,null),new cljs.core.Symbol(null,"val-schema","val-schema",-374242092,null)], null);
}));

(schema.core.MapEntry.cljs$lang$type = true);

(schema.core.MapEntry.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"schema.core/MapEntry",null,(1),null));
}));

(schema.core.MapEntry.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"schema.core/MapEntry");
}));

/**
 * Positional factory function for schema.core/MapEntry.
 */
schema.core.__GT_MapEntry = (function schema$core$__GT_MapEntry(key_schema,val_schema){
return (new schema.core.MapEntry(key_schema,val_schema,null,null,null));
});

/**
 * Factory function for schema.core/MapEntry, taking a map of keywords to field values.
 */
schema.core.map__GT_MapEntry = (function schema$core$map__GT_MapEntry(G__42247){
var extmap__4419__auto__ = (function (){var G__42266 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__42247,new cljs.core.Keyword(null,"key-schema","key-schema",-1096660726),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619)], 0));
if(cljs.core.record_QMARK_(G__42247)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__42266);
} else {
return G__42266;
}
})();
return (new schema.core.MapEntry(new cljs.core.Keyword(null,"key-schema","key-schema",-1096660726).cljs$core$IFn$_invoke$arity$1(G__42247),new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619).cljs$core$IFn$_invoke$arity$1(G__42247),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

schema.core.map_entry = (function schema$core$map_entry(key_schema,val_schema){
return (new schema.core.MapEntry(key_schema,val_schema,null,null,null));
});
schema.core.find_extra_keys_schema = (function schema$core$find_extra_keys_schema(map_schema){
var key_schemata = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(schema.core.specific_key_QMARK_,cljs.core.keys(map_schema));
if((cljs.core.count(key_schemata) < (2))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("More than one non-optional/required key schemata: %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vec(key_schemata)], 0))));
}

return cljs.core.first(key_schemata);
});
schema.core.explain_kspec = (function schema$core$explain_kspec(kspec){
if(schema.core.specific_key_QMARK_(kspec)){
if((kspec instanceof cljs.core.Keyword)){
return kspec;
} else {
return (new cljs.core.List(null,((schema.core.required_key_QMARK_(kspec))?new cljs.core.Symbol(null,"required-key","required-key",1624616412,null):((schema.core.optional_key_QMARK_(kspec))?new cljs.core.Symbol(null,"optional-key","optional-key",988406145,null):null)),(new cljs.core.List(null,schema.core.explicit_schema_key(kspec),null,(1),null)),(2),null));
}
} else {
return schema.core.explain(kspec);
}
});
schema.core.map_elements = (function schema$core$map_elements(this$){
var extra_keys_schema = schema.core.find_extra_keys_schema(this$);
var duplicate_keys_42581 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(schema.core.explain_kspec,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__42267_SHARP_){
return (cljs.core.count(p1__42267_SHARP_) > (1));
}),cljs.core.vals(cljs.core.group_by(schema.core.explicit_schema_key,cljs.core.keys(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(this$,extra_keys_schema)))))));
if(cljs.core.empty_QMARK_(duplicate_keys_42581)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Schema has multiple variants of the same explicit key: %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([duplicate_keys_42581], 0))));
}

var without_extra_keys_schema = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(this$,extra_keys_schema);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__4529__auto__ = (function schema$core$map_elements_$_iter__42269(s__42270){
return (new cljs.core.LazySeq(null,(function (){
var s__42270__$1 = s__42270;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__42270__$1);
if(temp__5735__auto__){
var s__42270__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42270__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__42270__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__42272 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__42271 = (0);
while(true){
if((i__42271 < size__4528__auto__)){
var vec__42273 = cljs.core._nth(c__4527__auto__,i__42271);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42273,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42273,(1),null);
cljs.core.chunk_append(b__42272,(function (){var rk = schema.core.explicit_schema_key(k);
var required_QMARK_ = schema.core.required_key_QMARK_(k);
return schema.spec.collection.one_element(required_QMARK_,schema.core.map_entry(schema.core.eq(rk),v),((function (i__42271,rk,required_QMARK_,vec__42273,k,v,c__4527__auto__,size__4528__auto__,b__42272,s__42270__$2,temp__5735__auto__,without_extra_keys_schema,extra_keys_schema){
return (function (item_fn,m){
var e = cljs.core.find(m,rk);
if(cljs.core.truth_(e)){
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(e) : item_fn.call(null,e));
} else {
if(required_QMARK_){
var G__42276_42596 = schema.utils.error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rk,new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null)], null));
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__42276_42596) : item_fn.call(null,G__42276_42596));
} else {
}
}

if(cljs.core.truth_(e)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,rk);
} else {
return m;
}
});})(i__42271,rk,required_QMARK_,vec__42273,k,v,c__4527__auto__,size__4528__auto__,b__42272,s__42270__$2,temp__5735__auto__,without_extra_keys_schema,extra_keys_schema))
);
})());

var G__42598 = (i__42271 + (1));
i__42271 = G__42598;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42272),schema$core$map_elements_$_iter__42269(cljs.core.chunk_rest(s__42270__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42272),null);
}
} else {
var vec__42277 = cljs.core.first(s__42270__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42277,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42277,(1),null);
return cljs.core.cons((function (){var rk = schema.core.explicit_schema_key(k);
var required_QMARK_ = schema.core.required_key_QMARK_(k);
return schema.spec.collection.one_element(required_QMARK_,schema.core.map_entry(schema.core.eq(rk),v),((function (rk,required_QMARK_,vec__42277,k,v,s__42270__$2,temp__5735__auto__,without_extra_keys_schema,extra_keys_schema){
return (function (item_fn,m){
var e = cljs.core.find(m,rk);
if(cljs.core.truth_(e)){
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(e) : item_fn.call(null,e));
} else {
if(required_QMARK_){
var G__42280_42602 = schema.utils.error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rk,new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null)], null));
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__42280_42602) : item_fn.call(null,G__42280_42602));
} else {
}
}

if(cljs.core.truth_(e)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,rk);
} else {
return m;
}
});})(rk,required_QMARK_,vec__42277,k,v,s__42270__$2,temp__5735__auto__,without_extra_keys_schema,extra_keys_schema))
);
})(),schema$core$map_elements_$_iter__42269(cljs.core.rest(s__42270__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(without_extra_keys_schema);
})(),(cljs.core.truth_(extra_keys_schema)?(function (){var specific_keys = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.explicit_schema_key,cljs.core.keys(without_extra_keys_schema)));
var vec__42281 = cljs.core.find(this$,extra_keys_schema);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42281,(0),null);
var vs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42281,(1),null);
var restricted_ks = schema.core.constrained.cljs$core$IFn$_invoke$arity$2(ks,(function (p1__42268_SHARP_){
return (!(cljs.core.contains_QMARK_(specific_keys,p1__42268_SHARP_)));
}));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.all_elements(schema.core.map_entry(restricted_ks,vs))], null);
})():null));
});
schema.core.map_error = (function schema$core$map_error(){
return (function (_,elts,extra){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(schema.utils.error_val,elts),(function (){var iter__4529__auto__ = (function schema$core$map_error_$_iter__42284(s__42285){
return (new cljs.core.LazySeq(null,(function (){
var s__42285__$1 = s__42285;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__42285__$1);
if(temp__5735__auto__){
var s__42285__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42285__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__42285__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__42287 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__42286 = (0);
while(true){
if((i__42286 < size__4528__auto__)){
var vec__42288 = cljs.core._nth(c__4527__auto__,i__42286);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42288,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42288,(1),null);
cljs.core.chunk_append(b__42287,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Symbol(null,"disallowed-key","disallowed-key",-1877785633,null)], null));

var G__42610 = (i__42286 + (1));
i__42286 = G__42610;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42287),schema$core$map_error_$_iter__42284(cljs.core.chunk_rest(s__42285__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42287),null);
}
} else {
var vec__42291 = cljs.core.first(s__42285__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42291,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42291,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Symbol(null,"disallowed-key","disallowed-key",-1877785633,null)], null),schema$core$map_error_$_iter__42284(cljs.core.rest(s__42285__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(extra);
})()));
});
});
schema.core.map_spec = (function schema$core$map_spec(this$){
return schema.spec.collection.collection_spec(schema.spec.core.precondition(this$,cljs.core.map_QMARK_,(function (p1__37927__37928__auto__){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"map?","map?",-1780568534,null),(new cljs.core.List(null,p1__37927__37928__auto__,null,(1),null)),(2),null));
})),(function (p1__42294_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,p1__42294_SHARP_);
}),schema.core.map_elements(this$),schema.core.map_error());
});
schema.core.map_explain = (function schema$core$map_explain(this$){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function schema$core$map_explain_$_iter__42295(s__42296){
return (new cljs.core.LazySeq(null,(function (){
var s__42296__$1 = s__42296;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__42296__$1);
if(temp__5735__auto__){
var s__42296__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42296__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__42296__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__42298 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__42297 = (0);
while(true){
if((i__42297 < size__4528__auto__)){
var vec__42299 = cljs.core._nth(c__4527__auto__,i__42297);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42299,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42299,(1),null);
cljs.core.chunk_append(b__42298,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain_kspec(k),schema.core.explain(v)], null));

var G__42614 = (i__42297 + (1));
i__42297 = G__42614;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42298),schema$core$map_explain_$_iter__42295(cljs.core.chunk_rest(s__42296__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42298),null);
}
} else {
var vec__42302 = cljs.core.first(s__42296__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42302,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42302,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain_kspec(k),schema.core.explain(v)], null),schema$core$map_explain_$_iter__42295(cljs.core.rest(s__42296__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(this$);
})());
});
(cljs.core.PersistentArrayMap.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_spec(this$__$1);
}));

(cljs.core.PersistentArrayMap.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_explain(this$__$1);
}));

(cljs.core.PersistentHashMap.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_spec(this$__$1);
}));

(cljs.core.PersistentHashMap.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_explain(this$__$1);
}));
(cljs.core.PersistentHashSet.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashSet.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(this$__$1),(1))){
} else {
throw (new Error(schema.utils.format_STAR_("Set schema must have exactly one element")));
}

return schema.spec.collection.collection_spec(schema.spec.core.precondition(this$__$1,cljs.core.set_QMARK_,(function (p1__37927__37928__auto__){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"set?","set?",1636014792,null),(new cljs.core.List(null,p1__37927__37928__auto__,null,(1),null)),(2),null));
})),cljs.core.set,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.all_elements(cljs.core.first(this$__$1))], null),(function (_,xs,___$1){
return cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(schema.utils.error_val,xs));
}));
}));

(cljs.core.PersistentHashSet.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.set(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain(cljs.core.first(this$__$1))], null));
}));
schema.core.queue_QMARK_ = (function schema$core$queue_QMARK_(x){
return (x instanceof cljs.core.PersistentQueue);
});
schema.core.as_queue = (function schema$core$as_queue(col){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.PersistentQueue.EMPTY,col);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.Queue = (function (schema,__meta,__extmap,__hash){
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.Queue.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(schema.core.Queue.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k42306,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__42310 = k42306;
var G__42310__$1 = (((G__42310 instanceof cljs.core.Keyword))?G__42310.fqn:null);
switch (G__42310__$1) {
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k42306,else__4383__auto__);

}
}));

(schema.core.Queue.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__42311){
var vec__42312 = p__42311;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42312,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42312,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(schema.core.Queue.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#schema.core.Queue{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
}));

(schema.core.Queue.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42305){
var self__ = this;
var G__42305__$1 = this;
return (new cljs.core.RecordIter((0),G__42305__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(schema.core.Queue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(schema.core.Queue.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new schema.core.Queue(self__.schema,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.Queue.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(schema.core.Queue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1542973436 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(schema.core.Queue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42307,other42308){
var self__ = this;
var this42307__$1 = this;
return (((!((other42308 == null)))) && ((this42307__$1.constructor === other42308.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42307__$1.schema,other42308.schema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42307__$1.__extmap,other42308.__extmap)));
}));

(schema.core.Queue.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new schema.core.Queue(self__.schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(schema.core.Queue.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__42305){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__42315 = cljs.core.keyword_identical_QMARK_;
var expr__42316 = k__4388__auto__;
if(cljs.core.truth_((pred__42315.cljs$core$IFn$_invoke$arity$2 ? pred__42315.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__42316) : pred__42315.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__42316)))){
return (new schema.core.Queue(G__42305,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Queue(self__.schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__42305),null));
}
}));

(schema.core.Queue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema,null))], null),self__.__extmap));
}));

(schema.core.Queue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__42305){
var self__ = this;
var this__4379__auto____$1 = this;
return (new schema.core.Queue(self__.schema,G__42305,self__.__extmap,self__.__hash));
}));

(schema.core.Queue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(schema.core.Queue.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Queue.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.collection.collection_spec(schema.spec.core.precondition(this$__$1,schema.core.queue_QMARK_,(function (p1__37927__37928__auto__){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"queue?","queue?",-880510795,null),(new cljs.core.List(null,p1__37927__37928__auto__,null,(1),null)),(2),null));
})),schema.core.as_queue,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.all_elements(self__.schema)], null),(function (_,xs,___$1){
return schema.core.as_queue(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(schema.utils.error_val,xs));
}));
}));

(schema.core.Queue.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.List(null,new cljs.core.Symbol(null,"queue","queue",-1198599890,null),(new cljs.core.List(null,schema.core.explain(self__.schema),null,(1),null)),(2),null));
}));

(schema.core.Queue.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null)], null);
}));

(schema.core.Queue.cljs$lang$type = true);

(schema.core.Queue.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"schema.core/Queue",null,(1),null));
}));

(schema.core.Queue.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"schema.core/Queue");
}));

/**
 * Positional factory function for schema.core/Queue.
 */
schema.core.__GT_Queue = (function schema$core$__GT_Queue(schema__$1){
return (new schema.core.Queue(schema__$1,null,null,null));
});

/**
 * Factory function for schema.core/Queue, taking a map of keywords to field values.
 */
schema.core.map__GT_Queue = (function schema$core$map__GT_Queue(G__42309){
var extmap__4419__auto__ = (function (){var G__42318 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__42309,new cljs.core.Keyword(null,"schema","schema",-1582001791));
if(cljs.core.record_QMARK_(G__42309)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__42318);
} else {
return G__42318;
}
})();
return (new schema.core.Queue(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__42309),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

/**
 * Defines a schema satisfied by instances of clojure.lang.PersistentQueue
 *   (clj.core/PersistentQueue in ClojureScript) whose values satisfy x.
 */
schema.core.queue = (function schema$core$queue(x){
return (new schema.core.Queue(x,null,null,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
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
schema.core.One = (function (schema,optional_QMARK_,name,__meta,__extmap,__hash){
this.schema = schema;
this.optional_QMARK_ = optional_QMARK_;
this.name = name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.One.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(schema.core.One.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k42320,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__42324 = k42320;
var G__42324__$1 = (((G__42324 instanceof cljs.core.Keyword))?G__42324.fqn:null);
switch (G__42324__$1) {
case "schema":
return self__.schema;

break;
case "optional?":
return self__.optional_QMARK_;

break;
case "name":
return self__.name;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k42320,else__4383__auto__);

}
}));

(schema.core.One.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__42325){
var vec__42326 = p__42325;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42326,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42326,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(schema.core.One.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#schema.core.One{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"optional?","optional?",1184638129),self__.optional_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null))], null),self__.__extmap));
}));

(schema.core.One.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42319){
var self__ = this;
var G__42319__$1 = this;
return (new cljs.core.RecordIter((0),G__42319__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"optional?","optional?",1184638129),new cljs.core.Keyword(null,"name","name",1843675177)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(schema.core.One.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(schema.core.One.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.One.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(schema.core.One.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-197981045 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(schema.core.One.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42321,other42322){
var self__ = this;
var this42321__$1 = this;
return (((!((other42322 == null)))) && ((this42321__$1.constructor === other42322.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42321__$1.schema,other42322.schema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42321__$1.optional_QMARK_,other42322.optional_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42321__$1.name,other42322.name)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42321__$1.__extmap,other42322.__extmap)));
}));

(schema.core.One.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"optional?","optional?",1184638129),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(schema.core.One.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__42319){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__42329 = cljs.core.keyword_identical_QMARK_;
var expr__42330 = k__4388__auto__;
if(cljs.core.truth_((pred__42329.cljs$core$IFn$_invoke$arity$2 ? pred__42329.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__42330) : pred__42329.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__42330)))){
return (new schema.core.One(G__42319,self__.optional_QMARK_,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__42329.cljs$core$IFn$_invoke$arity$2 ? pred__42329.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"optional?","optional?",1184638129),expr__42330) : pred__42329.call(null,new cljs.core.Keyword(null,"optional?","optional?",1184638129),expr__42330)))){
return (new schema.core.One(self__.schema,G__42319,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__42329.cljs$core$IFn$_invoke$arity$2 ? pred__42329.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),expr__42330) : pred__42329.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__42330)))){
return (new schema.core.One(self__.schema,self__.optional_QMARK_,G__42319,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__42319),null));
}
}
}
}));

(schema.core.One.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"optional?","optional?",1184638129),self__.optional_QMARK_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"name","name",1843675177),self__.name,null))], null),self__.__extmap));
}));

(schema.core.One.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__42319){
var self__ = this;
var this__4379__auto____$1 = this;
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,G__42319,self__.__extmap,self__.__hash));
}));

(schema.core.One.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(schema.core.One.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.Symbol(null,"optional?","optional?",-1469797640,null),new cljs.core.Symbol(null,"name","name",-810760592,null)], null);
}));

(schema.core.One.cljs$lang$type = true);

(schema.core.One.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"schema.core/One",null,(1),null));
}));

(schema.core.One.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"schema.core/One");
}));

/**
 * Positional factory function for schema.core/One.
 */
schema.core.__GT_One = (function schema$core$__GT_One(schema__$1,optional_QMARK_,name){
return (new schema.core.One(schema__$1,optional_QMARK_,name,null,null,null));
});

/**
 * Factory function for schema.core/One, taking a map of keywords to field values.
 */
schema.core.map__GT_One = (function schema$core$map__GT_One(G__42323){
var extmap__4419__auto__ = (function (){var G__42332 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__42323,new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"optional?","optional?",1184638129),new cljs.core.Keyword(null,"name","name",1843675177)], 0));
if(cljs.core.record_QMARK_(G__42323)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__42332);
} else {
return G__42332;
}
})();
return (new schema.core.One(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__42323),new cljs.core.Keyword(null,"optional?","optional?",1184638129).cljs$core$IFn$_invoke$arity$1(G__42323),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__42323),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

/**
 * A single required element of a sequence (not repeated, the implicit default)
 */
schema.core.one = (function schema$core$one(schema__$1,name){
return (new schema.core.One(schema__$1,false,name,null,null,null));
});
/**
 * A single optional element of a sequence (not repeated, the implicit default)
 */
schema.core.optional = (function schema$core$optional(schema__$1,name){
return (new schema.core.One(schema__$1,true,name,null,null,null));
});
schema.core.parse_sequence_schema = (function schema$core$parse_sequence_schema(s){

var vec__42336 = cljs.core.split_with((function (p1__42333_SHARP_){
return (((p1__42333_SHARP_ instanceof schema.core.One)) && (cljs.core.not(p1__42333_SHARP_.optional_QMARK_)));
}),s);
var required = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42336,(0),null);
var more = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42336,(1),null);
var vec__42339 = cljs.core.split_with((function (p1__42334_SHARP_){
if((p1__42334_SHARP_ instanceof schema.core.One)){
return p1__42334_SHARP_.optional_QMARK_;
} else {
return false;
}
}),more);
var optional = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42339,(0),null);
var more__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42339,(1),null);
if((((cljs.core.count(more__$1) <= (1))) && (cljs.core.every_QMARK_((function (p1__42335_SHARP_){
return (!((p1__42335_SHARP_ instanceof schema.core.One)));
}),more__$1)))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("%s is not a valid sequence schema; %s%s%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s,"a valid sequence schema consists of zero or more `one` elements, ","followed by zero or more `optional` elements, followed by an optional ","schema that will match the remaining elements."], 0))));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$2(required,optional),cljs.core.first(more__$1)], null);
});
(cljs.core.PersistentVector.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
return schema.spec.collection.collection_spec(schema.spec.core.precondition(this$__$1,(function (x){
return (((x == null)) || (cljs.core.sequential_QMARK_(x)));
}),(function (p1__42342_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"sequential?","sequential?",1102351463,null),(new cljs.core.List(null,p1__42342_SHARP_,null,(1),null)),(2),null));
})),cljs.core.vec,(function (){var vec__42343 = schema.core.parse_sequence_schema(this$__$1);
var singles = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42343,(0),null);
var multi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42343,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (more,s){
if(cljs.core.not(s.optional_QMARK_)){
return cljs.core.cons(schema.spec.collection.one_element(true,schema.core.named(s.schema,s.name),(function (item_fn,x){
var temp__5733__auto__ = cljs.core.seq(x);
if(temp__5733__auto__){
var x__$1 = temp__5733__auto__;
var G__42346_42700 = cljs.core.first(x__$1);
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__42346_42700) : item_fn.call(null,G__42346_42700));

return cljs.core.rest(x__$1);
} else {
var G__42347_42702 = schema.utils.error(schema.utils.make_ValidationError(s.schema,new cljs.core.Keyword("schema.core","missing","schema.core/missing",1420181325),(new cljs.core.Delay((function (){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"present?","present?",-1810613791,null),(new cljs.core.List(null,s.name,null,(1),null)),(2),null));
}),null)),null));
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__42347_42702) : item_fn.call(null,G__42347_42702));

return null;
}
})),more);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.optional_tail(schema.core.named(s.schema,s.name),(function (item_fn,x){
var temp__5735__auto__ = cljs.core.seq(x);
if(temp__5735__auto__){
var x__$1 = temp__5735__auto__;
var G__42348_42707 = cljs.core.first(x__$1);
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__42348_42707) : item_fn.call(null,G__42348_42707));

return cljs.core.rest(x__$1);
} else {
return null;
}
}),more)], null);
}
}),(cljs.core.truth_(multi)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.all_elements(multi)], null):null),cljs.core.reverse(singles));
})(),(function (_,elts,extra){
var head = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(schema.utils.error_val,elts);
if(cljs.core.seq(extra)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(head,schema.utils.error_val(schema.utils.error(schema.utils.make_ValidationError(null,extra,(new cljs.core.Delay((function (){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"has-extra-elts?","has-extra-elts?",-1376562869,null),(new cljs.core.List(null,cljs.core.count(extra),null,(1),null)),(2),null));
}),null)),null))));
} else {
return head;
}
}));
}));

(cljs.core.PersistentVector.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
var vec__42349 = schema.core.parse_sequence_schema(this$__$1);
var singles = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42349,(0),null);
var multi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42349,(1),null);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__4529__auto__ = (function schema$core$iter__42352(s__42353){
return (new cljs.core.LazySeq(null,(function (){
var s__42353__$1 = s__42353;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__42353__$1);
if(temp__5735__auto__){
var s__42353__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42353__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__42353__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__42355 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__42354 = (0);
while(true){
if((i__42354 < size__4528__auto__)){
var s = cljs.core._nth(c__4527__auto__,i__42354);
cljs.core.chunk_append(b__42355,(new cljs.core.List(null,(cljs.core.truth_(s.optional_QMARK_)?new cljs.core.Symbol(null,"optional","optional",-600484260,null):new cljs.core.Symbol(null,"one","one",-1719427865,null)),(new cljs.core.List(null,schema.core.explain(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(s)),(new cljs.core.List(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s),null,(1),null)),(2),null)),(3),null)));

var G__42710 = (i__42354 + (1));
i__42354 = G__42710;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42355),schema$core$iter__42352(cljs.core.chunk_rest(s__42353__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42355),null);
}
} else {
var s = cljs.core.first(s__42353__$2);
return cljs.core.cons((new cljs.core.List(null,(cljs.core.truth_(s.optional_QMARK_)?new cljs.core.Symbol(null,"optional","optional",-600484260,null):new cljs.core.Symbol(null,"one","one",-1719427865,null)),(new cljs.core.List(null,schema.core.explain(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(s)),(new cljs.core.List(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s),null,(1),null)),(2),null)),(3),null)),schema$core$iter__42352(cljs.core.rest(s__42353__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(singles);
})(),(cljs.core.truth_(multi)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain(multi)], null):null)));
}));
/**
 * A schema for a pair of schemas and their names
 */
schema.core.pair = (function schema$core$pair(first_schema,first_name,second_schema,second_name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(first_schema,first_name),schema.core.one(second_schema,second_name)], null);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.Record = (function (klass,schema,__meta,__extmap,__hash){
this.klass = klass;
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.Record.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(schema.core.Record.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k42360,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__42364 = k42360;
var G__42364__$1 = (((G__42364 instanceof cljs.core.Keyword))?G__42364.fqn:null);
switch (G__42364__$1) {
case "klass":
return self__.klass;

break;
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k42360,else__4383__auto__);

}
}));

(schema.core.Record.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__42365){
var vec__42366 = p__42365;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42366,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42366,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(schema.core.Record.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#schema.core.Record{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"klass","klass",-1386752349),self__.klass],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
}));

(schema.core.Record.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42359){
var self__ = this;
var G__42359__$1 = this;
return (new cljs.core.RecordIter((0),G__42359__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"klass","klass",-1386752349),new cljs.core.Keyword(null,"schema","schema",-1582001791)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(schema.core.Record.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(schema.core.Record.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.Record.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(schema.core.Record.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1486476872 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(schema.core.Record.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42361,other42362){
var self__ = this;
var this42361__$1 = this;
return (((!((other42362 == null)))) && ((this42361__$1.constructor === other42362.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42361__$1.klass,other42362.klass)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42361__$1.schema,other42362.schema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42361__$1.__extmap,other42362.__extmap)));
}));

(schema.core.Record.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"klass","klass",-1386752349),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(schema.core.Record.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__42359){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__42369 = cljs.core.keyword_identical_QMARK_;
var expr__42370 = k__4388__auto__;
if(cljs.core.truth_((pred__42369.cljs$core$IFn$_invoke$arity$2 ? pred__42369.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"klass","klass",-1386752349),expr__42370) : pred__42369.call(null,new cljs.core.Keyword(null,"klass","klass",-1386752349),expr__42370)))){
return (new schema.core.Record(G__42359,self__.schema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__42369.cljs$core$IFn$_invoke$arity$2 ? pred__42369.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__42370) : pred__42369.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__42370)))){
return (new schema.core.Record(self__.klass,G__42359,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__42359),null));
}
}
}));

(schema.core.Record.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"klass","klass",-1386752349),self__.klass,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema,null))], null),self__.__extmap));
}));

(schema.core.Record.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__42359){
var self__ = this;
var this__4379__auto____$1 = this;
return (new schema.core.Record(self__.klass,self__.schema,G__42359,self__.__extmap,self__.__hash));
}));

(schema.core.Record.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(schema.core.Record.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Record.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.collection.collection_spec((function (){var p = schema.spec.core.precondition(this$__$1,(function (p1__42356_SHARP_){
return (p1__42356_SHARP_ instanceof self__.klass);
}),(function (p1__42357_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),(new cljs.core.List(null,self__.klass,(new cljs.core.List(null,p1__42357_SHARP_,null,(1),null)),(2),null)),(3),null));
}));
var temp__5733__auto__ = new cljs.core.Keyword(null,"extra-validator-fn","extra-validator-fn",1562905865).cljs$core$IFn$_invoke$arity$1(this$__$1);
if(cljs.core.truth_(temp__5733__auto__)){
var evf = temp__5733__auto__;
return cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(p,schema.spec.core.precondition(this$__$1,evf,(function (p1__42358_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"passes-extra-validation?","passes-extra-validation?",-1964809231,null),(new cljs.core.List(null,p1__42358_SHARP_,null,(1),null)),(2),null));
})));
} else {
return p;
}
})(),new cljs.core.Keyword(null,"constructor","constructor",-1953928811).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(this$__$1)),schema.core.map_elements(self__.schema),schema.core.map_error());
}));

(schema.core.Record.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.List(null,new cljs.core.Symbol(null,"record","record",861424668,null),(new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.klass], 0))),(new cljs.core.List(null,schema.core.explain(self__.schema),null,(1),null)),(2),null)),(3),null));
}));

(schema.core.Record.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"klass","klass",253779178,null),new cljs.core.Symbol(null,"schema","schema",58529736,null)], null);
}));

(schema.core.Record.cljs$lang$type = true);

(schema.core.Record.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"schema.core/Record",null,(1),null));
}));

(schema.core.Record.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"schema.core/Record");
}));

/**
 * Positional factory function for schema.core/Record.
 */
schema.core.__GT_Record = (function schema$core$__GT_Record(klass,schema__$1){
return (new schema.core.Record(klass,schema__$1,null,null,null));
});

/**
 * Factory function for schema.core/Record, taking a map of keywords to field values.
 */
schema.core.map__GT_Record = (function schema$core$map__GT_Record(G__42363){
var extmap__4419__auto__ = (function (){var G__42372 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__42363,new cljs.core.Keyword(null,"klass","klass",-1386752349),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"schema","schema",-1582001791)], 0));
if(cljs.core.record_QMARK_(G__42363)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__42372);
} else {
return G__42372;
}
})();
return (new schema.core.Record(new cljs.core.Keyword(null,"klass","klass",-1386752349).cljs$core$IFn$_invoke$arity$1(G__42363),new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__42363),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

schema.core.record_STAR_ = (function schema$core$record_STAR_(klass,schema__$1,map_constructor){
if(cljs.core.map_QMARK_(schema__$1)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Expected map, got %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([schema.utils.type_of(schema__$1)], 0))));
}

return cljs.core.with_meta((new schema.core.Record(klass,schema__$1,null,null,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"constructor","constructor",-1953928811),map_constructor], null));
});
schema.core.explain_input_schema = (function schema$core$explain_input_schema(input_schema){
var vec__42375 = cljs.core.split_with((function (p1__42373_SHARP_){
return (p1__42373_SHARP_ instanceof schema.core.One);
}),input_schema);
var required = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42375,(0),null);
var more = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42375,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42374_SHARP_){
return schema.core.explain(p1__42374_SHARP_.schema);
}),required),((cljs.core.seq(more))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(schema.core.explain,more)], null):null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.FnSchema = (function (output_schema,input_schemas,__meta,__extmap,__hash){
this.output_schema = output_schema;
this.input_schemas = input_schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.FnSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(schema.core.FnSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k42379,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__42383 = k42379;
var G__42383__$1 = (((G__42383 instanceof cljs.core.Keyword))?G__42383.fqn:null);
switch (G__42383__$1) {
case "output-schema":
return self__.output_schema;

break;
case "input-schemas":
return self__.input_schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k42379,else__4383__auto__);

}
}));

(schema.core.FnSchema.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__42384){
var vec__42385 = p__42384;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42385,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42385,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(schema.core.FnSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#schema.core.FnSchema{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output-schema","output-schema",272504137),self__.output_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805),self__.input_schemas],null))], null),self__.__extmap));
}));

(schema.core.FnSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42378){
var self__ = this;
var G__42378__$1 = this;
return (new cljs.core.RecordIter((0),G__42378__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"output-schema","output-schema",272504137),new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(schema.core.FnSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(schema.core.FnSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.FnSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(schema.core.FnSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-2054647546 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(schema.core.FnSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42380,other42381){
var self__ = this;
var this42380__$1 = this;
return (((!((other42381 == null)))) && ((this42380__$1.constructor === other42381.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42380__$1.output_schema,other42381.output_schema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42380__$1.input_schemas,other42381.input_schemas)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42380__$1.__extmap,other42381.__extmap)));
}));

(schema.core.FnSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"output-schema","output-schema",272504137),null,new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(schema.core.FnSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__42378){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__42388 = cljs.core.keyword_identical_QMARK_;
var expr__42389 = k__4388__auto__;
if(cljs.core.truth_((pred__42388.cljs$core$IFn$_invoke$arity$2 ? pred__42388.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"output-schema","output-schema",272504137),expr__42389) : pred__42388.call(null,new cljs.core.Keyword(null,"output-schema","output-schema",272504137),expr__42389)))){
return (new schema.core.FnSchema(G__42378,self__.input_schemas,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__42388.cljs$core$IFn$_invoke$arity$2 ? pred__42388.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805),expr__42389) : pred__42388.call(null,new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805),expr__42389)))){
return (new schema.core.FnSchema(self__.output_schema,G__42378,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__42378),null));
}
}
}));

(schema.core.FnSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"output-schema","output-schema",272504137),self__.output_schema,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805),self__.input_schemas,null))], null),self__.__extmap));
}));

(schema.core.FnSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__42378){
var self__ = this;
var this__4379__auto____$1 = this;
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,G__42378,self__.__extmap,self__.__hash));
}));

(schema.core.FnSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(schema.core.FnSchema.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.FnSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core.precondition(this$__$1,cljs.core.ifn_QMARK_,(function (p1__37927__37928__auto__){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),(new cljs.core.List(null,p1__37927__37928__auto__,null,(1),null)),(2),null));
})));
}));

(schema.core.FnSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count(self__.input_schemas) > (1))){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"=>*","=>*",1909690043,null),schema.core.explain(self__.output_schema),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.explain_input_schema,self__.input_schemas));
} else {
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"=>","=>",-813269641,null),schema.core.explain(self__.output_schema),schema.core.explain_input_schema(cljs.core.first(self__.input_schemas)));
}
}));

(schema.core.FnSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"output-schema","output-schema",1913035664,null),new cljs.core.Symbol(null,"input-schemas","input-schemas",658376722,null)], null);
}));

(schema.core.FnSchema.cljs$lang$type = true);

(schema.core.FnSchema.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"schema.core/FnSchema",null,(1),null));
}));

(schema.core.FnSchema.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"schema.core/FnSchema");
}));

/**
 * Positional factory function for schema.core/FnSchema.
 */
schema.core.__GT_FnSchema = (function schema$core$__GT_FnSchema(output_schema,input_schemas){
return (new schema.core.FnSchema(output_schema,input_schemas,null,null,null));
});

/**
 * Factory function for schema.core/FnSchema, taking a map of keywords to field values.
 */
schema.core.map__GT_FnSchema = (function schema$core$map__GT_FnSchema(G__42382){
var extmap__4419__auto__ = (function (){var G__42391 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__42382,new cljs.core.Keyword(null,"output-schema","output-schema",272504137),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805)], 0));
if(cljs.core.record_QMARK_(G__42382)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__42391);
} else {
return G__42391;
}
})();
return (new schema.core.FnSchema(new cljs.core.Keyword(null,"output-schema","output-schema",272504137).cljs$core$IFn$_invoke$arity$1(G__42382),new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805).cljs$core$IFn$_invoke$arity$1(G__42382),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

schema.core.arity = (function schema$core$arity(input_schema){
if(cljs.core.seq(input_schema)){
if((cljs.core.last(input_schema) instanceof schema.core.One)){
return cljs.core.count(input_schema);
} else {
return Number.MAX_VALUE;
}
} else {
return (0);
}
});
/**
 * A function outputting a value in output schema, whose argument vector must match one of
 * input-schemas, each of which should be a sequence schema.
 * Currently function schemas are purely descriptive; they validate against any function,
 * regardless of actual input and output types.
 */
schema.core.make_fn_schema = (function schema$core$make_fn_schema(output_schema,input_schemas){
if(cljs.core.seq(input_schemas)){
} else {
throw (new Error(schema.utils.format_STAR_("Function must have at least one input schema")));
}

if(cljs.core.every_QMARK_(cljs.core.vector_QMARK_,input_schemas)){
} else {
throw (new Error(schema.utils.format_STAR_("Each arity must be a vector.")));
}

if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.arity,input_schemas)))){
} else {
throw (new Error(schema.utils.format_STAR_("Arities must be distinct")));
}

return (new schema.core.FnSchema(output_schema,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(schema.core.arity,input_schemas),null,null,null));
});
/**
 * Records name in schema's metadata.
 */
schema.core.schema_with_name = (function schema$core$schema_with_name(schema__$1,name){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(schema__$1,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1843675177),name);
});
/**
 * Returns the name of a schema attached via schema-with-name (or defschema).
 */
schema.core.schema_name = (function schema$core$schema_name(schema__$1){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(schema__$1));
});
/**
 * Returns the namespace of a schema attached via defschema.
 */
schema.core.schema_ns = (function schema$core$schema_ns(schema__$1){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(schema__$1));
});
/**
 * Get the current global schema validation setting.
 */
schema.core.fn_validation_QMARK_ = (function schema$core$fn_validation_QMARK_(){
return cljs.core.deref(schema.utils.use_fn_validation);
});
/**
 * Globally turn on (or off) schema validation for all s/fn and s/defn instances.
 */
schema.core.set_fn_validation_BANG_ = (function schema$core$set_fn_validation_BANG_(on_QMARK_){
return cljs.core.reset_BANG_(schema.utils.use_fn_validation,on_QMARK_);
});
/**
 * A var that can be rebound to a function to customize the behavior
 *   of fn validation. When fn validation is on and `fn-validator` is
 *   bound to a function, normal argument and return value checks will
 *   be substituted with a call to this function with five arguments:
 * 
 *  direction   - :input or :output
 *  fn-name     - a symbol, the function's name
 *  schema      - the schema for the arglist or the return value
 *  checker     - a precompiled checker to check a value against
 *                the schema
 *  value       - the actual arglist or return value
 * 
 *   The function's return value will be ignored.
 */
schema.core.fn_validator = null;
/**
 * Attach the schema to fn f at runtime, extractable by fn-schema.
 */
schema.core.schematize_fn = (function schema$core$schematize_fn(f,schema__$1){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(f,cljs.core.assoc,new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1);
});
/**
 * Produce the schema for a function defined with s/fn or s/defn.
 */
schema.core.fn_schema = (function schema$core$fn_schema(f){
if(cljs.core.fn_QMARK_(f)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Non-function %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([schema.utils.type_of(f)], 0))));
}

var or__4126__auto__ = schema.utils.class_schema(schema.utils.fn_schema_bearer(f));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var m__37139__auto__ = cljs.core.meta(f);
var k__37140__auto__ = new cljs.core.Keyword(null,"schema","schema",-1582001791);
var temp__5733__auto__ = cljs.core.find(m__37139__auto__,k__37140__auto__);
if(cljs.core.truth_(temp__5733__auto__)){
var pair__37141__auto__ = temp__5733__auto__;
return cljs.core.val(pair__37141__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Key %s not found in %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k__37140__auto__,m__37139__auto__], 0))));
}
}
});
/**
 * Sets the maximum length of value to be output before it is contracted to a prettier name.
 */
schema.core.set_max_value_length_BANG_ = (function schema$core$set_max_value_length_BANG_(max_length){
return cljs.core.reset_BANG_(schema.utils.max_value_length,max_length);
});
Object.defineProperty(module.exports, "map__GT_Queue", { enumerable: false, get: function() { return schema.core.map__GT_Queue; } });
Object.defineProperty(module.exports, "__GT_Predicate", { enumerable: false, get: function() { return schema.core.__GT_Predicate; } });
Object.defineProperty(module.exports, "ConditionalSchema", { enumerable: false, get: function() { return schema.core.ConditionalSchema; } });
Object.defineProperty(module.exports, "arity", { enumerable: false, get: function() { return schema.core.arity; } });
Object.defineProperty(module.exports, "map__GT_FnSchema", { enumerable: false, get: function() { return schema.core.map__GT_FnSchema; } });
Object.defineProperty(module.exports, "map_error", { enumerable: false, get: function() { return schema.core.map_error; } });
Object.defineProperty(module.exports, "__GT_One", { enumerable: false, get: function() { return schema.core.__GT_One; } });
Object.defineProperty(module.exports, "named", { enumerable: false, get: function() { return schema.core.named; } });
Object.defineProperty(module.exports, "optional_key", { enumerable: false, get: function() { return schema.core.optional_key; } });
Object.defineProperty(module.exports, "instance_precondition", { enumerable: false, get: function() { return schema.core.instance_precondition; } });
Object.defineProperty(module.exports, "Protocol", { enumerable: false, get: function() { return schema.core.Protocol; } });
Object.defineProperty(module.exports, "map__GT_Atomic", { enumerable: false, get: function() { return schema.core.map__GT_Atomic; } });
Object.defineProperty(module.exports, "map__GT_AnythingSchema", { enumerable: false, get: function() { return schema.core.map__GT_AnythingSchema; } });
Object.defineProperty(module.exports, "map_explain", { enumerable: false, get: function() { return schema.core.map_explain; } });
Object.defineProperty(module.exports, "atom", { enumerable: false, get: function() { return schema.core.atom; } });
Object.defineProperty(module.exports, "Maybe", { enumerable: false, get: function() { return schema.core.Maybe; } });
Object.defineProperty(module.exports, "MapEntry", { enumerable: false, get: function() { return schema.core.MapEntry; } });
Object.defineProperty(module.exports, "One", { enumerable: false, get: function() { return schema.core.One; } });
Object.defineProperty(module.exports, "__GT_Isa", { enumerable: false, get: function() { return schema.core.__GT_Isa; } });
Object.defineProperty(module.exports, "map__GT_ConditionalSchema", { enumerable: false, get: function() { return schema.core.map__GT_ConditionalSchema; } });
Object.defineProperty(module.exports, "NamedSchema", { enumerable: false, get: function() { return schema.core.NamedSchema; } });
Object.defineProperty(module.exports, "map__GT_MapEntry", { enumerable: false, get: function() { return schema.core.map__GT_MapEntry; } });
Object.defineProperty(module.exports, "required_key_QMARK_", { enumerable: false, get: function() { return schema.core.required_key_QMARK_; } });
Object.defineProperty(module.exports, "__GT_Both", { enumerable: false, get: function() { return schema.core.__GT_Both; } });
Object.defineProperty(module.exports, "schema_with_name", { enumerable: false, get: function() { return schema.core.schema_with_name; } });
Object.defineProperty(module.exports, "atom_QMARK_", { enumerable: false, get: function() { return schema.core.atom_QMARK_; } });
Object.defineProperty(module.exports, "Symbol", { enumerable: false, get: function() { return schema.core.Symbol; } });
Object.defineProperty(module.exports, "__GT_Constrained", { enumerable: false, get: function() { return schema.core.__GT_Constrained; } });
Object.defineProperty(module.exports, "Either", { enumerable: false, get: function() { return schema.core.Either; } });
Object.defineProperty(module.exports, "map__GT_One", { enumerable: false, get: function() { return schema.core.map__GT_One; } });
Object.defineProperty(module.exports, "fn_schema", { enumerable: false, get: function() { return schema.core.fn_schema; } });
Object.defineProperty(module.exports, "conditional", { enumerable: false, get: function() { return schema.core.conditional; } });
Object.defineProperty(module.exports, "precondition", { enumerable: false, get: function() { return schema.core.precondition; } });
Object.defineProperty(module.exports, "either", { enumerable: false, get: function() { return schema.core.either; } });
Object.defineProperty(module.exports, "explicit_schema_key", { enumerable: false, get: function() { return schema.core.explicit_schema_key; } });
Object.defineProperty(module.exports, "schema_name", { enumerable: false, get: function() { return schema.core.schema_name; } });
Object.defineProperty(module.exports, "Bool", { enumerable: false, get: function() { return schema.core.Bool; } });
Object.defineProperty(module.exports, "__GT_EqSchema", { enumerable: false, get: function() { return schema.core.__GT_EqSchema; } });
Object.defineProperty(module.exports, "enum$", { enumerable: false, get: function() { return schema.core.enum$; } });
Object.defineProperty(module.exports, "one", { enumerable: false, get: function() { return schema.core.one; } });
Object.defineProperty(module.exports, "find_extra_keys_schema", { enumerable: false, get: function() { return schema.core.find_extra_keys_schema; } });
Object.defineProperty(module.exports, "map__GT_Predicate", { enumerable: false, get: function() { return schema.core.map__GT_Predicate; } });
Object.defineProperty(module.exports, "fn_validator", { enumerable: false, get: function() { return schema.core.fn_validator; } });
Object.defineProperty(module.exports, "map__GT_RequiredKey", { enumerable: false, get: function() { return schema.core.map__GT_RequiredKey; } });
Object.defineProperty(module.exports, "Record", { enumerable: false, get: function() { return schema.core.Record; } });
Object.defineProperty(module.exports, "parse_sequence_schema", { enumerable: false, get: function() { return schema.core.parse_sequence_schema; } });
Object.defineProperty(module.exports, "OptionalKey", { enumerable: false, get: function() { return schema.core.OptionalKey; } });
Object.defineProperty(module.exports, "map__GT_Record", { enumerable: false, get: function() { return schema.core.map__GT_Record; } });
Object.defineProperty(module.exports, "EqSchema", { enumerable: false, get: function() { return schema.core.EqSchema; } });
Object.defineProperty(module.exports, "explain", { enumerable: false, get: function() { return schema.core.explain; } });
Object.defineProperty(module.exports, "map_spec", { enumerable: false, get: function() { return schema.core.map_spec; } });
Object.defineProperty(module.exports, "__GT_RequiredKey", { enumerable: false, get: function() { return schema.core.__GT_RequiredKey; } });
Object.defineProperty(module.exports, "CondPre", { enumerable: false, get: function() { return schema.core.CondPre; } });
Object.defineProperty(module.exports, "map__GT_Protocol", { enumerable: false, get: function() { return schema.core.map__GT_Protocol; } });
Object.defineProperty(module.exports, "set_max_value_length_BANG_", { enumerable: false, get: function() { return schema.core.set_max_value_length_BANG_; } });
Object.defineProperty(module.exports, "map__GT_Recursive", { enumerable: false, get: function() { return schema.core.map__GT_Recursive; } });
Object.defineProperty(module.exports, "Constrained", { enumerable: false, get: function() { return schema.core.Constrained; } });
Object.defineProperty(module.exports, "fn_validation_QMARK_", { enumerable: false, get: function() { return schema.core.fn_validation_QMARK_; } });
Object.defineProperty(module.exports, "isa", { enumerable: false, get: function() { return schema.core.isa; } });
Object.defineProperty(module.exports, "Num", { enumerable: false, get: function() { return schema.core.Num; } });
Object.defineProperty(module.exports, "eq", { enumerable: false, get: function() { return schema.core.eq; } });
Object.defineProperty(module.exports, "validate", { enumerable: false, get: function() { return schema.core.validate; } });
Object.defineProperty(module.exports, "__GT_Atomic", { enumerable: false, get: function() { return schema.core.__GT_Atomic; } });
Object.defineProperty(module.exports, "pred", { enumerable: false, get: function() { return schema.core.pred; } });
Object.defineProperty(module.exports, "AnythingSchema", { enumerable: false, get: function() { return schema.core.AnythingSchema; } });
Object.defineProperty(module.exports, "Any", { enumerable: false, get: function() { return schema.core.Any; } });
Object.defineProperty(module.exports, "__GT_CondPre", { enumerable: false, get: function() { return schema.core.__GT_CondPre; } });
Object.defineProperty(module.exports, "Regex", { enumerable: false, get: function() { return schema.core.Regex; } });
Object.defineProperty(module.exports, "__GT_EnumSchema", { enumerable: false, get: function() { return schema.core.__GT_EnumSchema; } });
Object.defineProperty(module.exports, "RequiredKey", { enumerable: false, get: function() { return schema.core.RequiredKey; } });
Object.defineProperty(module.exports, "cond_pre", { enumerable: false, get: function() { return schema.core.cond_pre; } });
Object.defineProperty(module.exports, "explain_kspec", { enumerable: false, get: function() { return schema.core.explain_kspec; } });
Object.defineProperty(module.exports, "record_STAR_", { enumerable: false, get: function() { return schema.core.record_STAR_; } });
Object.defineProperty(module.exports, "Inst", { enumerable: false, get: function() { return schema.core.Inst; } });
Object.defineProperty(module.exports, "queue", { enumerable: false, get: function() { return schema.core.queue; } });
Object.defineProperty(module.exports, "validator", { enumerable: false, get: function() { return schema.core.validator; } });
Object.defineProperty(module.exports, "map__GT_OptionalKey", { enumerable: false, get: function() { return schema.core.map__GT_OptionalKey; } });
Object.defineProperty(module.exports, "FnSchema", { enumerable: false, get: function() { return schema.core.FnSchema; } });
Object.defineProperty(module.exports, "if$", { enumerable: false, get: function() { return schema.core.if$; } });
Object.defineProperty(module.exports, "Predicate", { enumerable: false, get: function() { return schema.core.Predicate; } });
Object.defineProperty(module.exports, "make_fn_schema", { enumerable: false, get: function() { return schema.core.make_fn_schema; } });
Object.defineProperty(module.exports, "as_queue", { enumerable: false, get: function() { return schema.core.as_queue; } });
Object.defineProperty(module.exports, "Str", { enumerable: false, get: function() { return schema.core.Str; } });
Object.defineProperty(module.exports, "map__GT_EqSchema", { enumerable: false, get: function() { return schema.core.map__GT_EqSchema; } });
Object.defineProperty(module.exports, "__GT_AnythingSchema", { enumerable: false, get: function() { return schema.core.__GT_AnythingSchema; } });
Object.defineProperty(module.exports, "maybe", { enumerable: false, get: function() { return schema.core.maybe; } });
Object.defineProperty(module.exports, "check", { enumerable: false, get: function() { return schema.core.check; } });
Object.defineProperty(module.exports, "pair", { enumerable: false, get: function() { return schema.core.pair; } });
Object.defineProperty(module.exports, "map_entry_ctor", { enumerable: false, get: function() { return schema.core.map_entry_ctor; } });
Object.defineProperty(module.exports, "set_fn_validation_BANG_", { enumerable: false, get: function() { return schema.core.set_fn_validation_BANG_; } });
Object.defineProperty(module.exports, "EnumSchema", { enumerable: false, get: function() { return schema.core.EnumSchema; } });
Object.defineProperty(module.exports, "__GT_OptionalKey", { enumerable: false, get: function() { return schema.core.__GT_OptionalKey; } });
Object.defineProperty(module.exports, "map__GT_Constrained", { enumerable: false, get: function() { return schema.core.map__GT_Constrained; } });
Object.defineProperty(module.exports, "__GT_ConditionalSchema", { enumerable: false, get: function() { return schema.core.__GT_ConditionalSchema; } });
Object.defineProperty(module.exports, "__GT_NamedSchema", { enumerable: false, get: function() { return schema.core.__GT_NamedSchema; } });
Object.defineProperty(module.exports, "schematize_fn", { enumerable: false, get: function() { return schema.core.schematize_fn; } });
Object.defineProperty(module.exports, "__GT_t_schema$core41935", { enumerable: false, get: function() { return schema.core.__GT_t_schema$core41935; } });
Object.defineProperty(module.exports, "Uuid", { enumerable: false, get: function() { return schema.core.Uuid; } });
Object.defineProperty(module.exports, "map__GT_Isa", { enumerable: false, get: function() { return schema.core.map__GT_Isa; } });
Object.defineProperty(module.exports, "map__GT_Either", { enumerable: false, get: function() { return schema.core.map__GT_Either; } });
Object.defineProperty(module.exports, "schema_ns", { enumerable: false, get: function() { return schema.core.schema_ns; } });
Object.defineProperty(module.exports, "t_schema$core41935", { enumerable: false, get: function() { return schema.core.t_schema$core41935; } });
Object.defineProperty(module.exports, "__GT_Record", { enumerable: false, get: function() { return schema.core.__GT_Record; } });
Object.defineProperty(module.exports, "__GT_Recursive", { enumerable: false, get: function() { return schema.core.__GT_Recursive; } });
Object.defineProperty(module.exports, "protocol_name", { enumerable: false, get: function() { return schema.core.protocol_name; } });
Object.defineProperty(module.exports, "constrained", { enumerable: false, get: function() { return schema.core.constrained; } });
Object.defineProperty(module.exports, "Isa", { enumerable: false, get: function() { return schema.core.Isa; } });
Object.defineProperty(module.exports, "map__GT_CondPre", { enumerable: false, get: function() { return schema.core.map__GT_CondPre; } });
Object.defineProperty(module.exports, "queue_QMARK_", { enumerable: false, get: function() { return schema.core.queue_QMARK_; } });
Object.defineProperty(module.exports, "__GT_Either", { enumerable: false, get: function() { return schema.core.__GT_Either; } });
Object.defineProperty(module.exports, "map__GT_NamedSchema", { enumerable: false, get: function() { return schema.core.map__GT_NamedSchema; } });
Object.defineProperty(module.exports, "HasPrecondition", { enumerable: false, get: function() { return schema.core.HasPrecondition; } });
Object.defineProperty(module.exports, "Queue", { enumerable: false, get: function() { return schema.core.Queue; } });
Object.defineProperty(module.exports, "checker", { enumerable: false, get: function() { return schema.core.checker; } });
Object.defineProperty(module.exports, "Keyword", { enumerable: false, get: function() { return schema.core.Keyword; } });
Object.defineProperty(module.exports, "recursive", { enumerable: false, get: function() { return schema.core.recursive; } });
Object.defineProperty(module.exports, "spec", { enumerable: false, get: function() { return schema.core.spec; } });
Object.defineProperty(module.exports, "Recursive", { enumerable: false, get: function() { return schema.core.Recursive; } });
Object.defineProperty(module.exports, "__GT_MapEntry", { enumerable: false, get: function() { return schema.core.__GT_MapEntry; } });
Object.defineProperty(module.exports, "__GT_Queue", { enumerable: false, get: function() { return schema.core.__GT_Queue; } });
Object.defineProperty(module.exports, "__GT_Protocol", { enumerable: false, get: function() { return schema.core.__GT_Protocol; } });
Object.defineProperty(module.exports, "__GT_Maybe", { enumerable: false, get: function() { return schema.core.__GT_Maybe; } });
Object.defineProperty(module.exports, "explain_input_schema", { enumerable: false, get: function() { return schema.core.explain_input_schema; } });
Object.defineProperty(module.exports, "map_elements", { enumerable: false, get: function() { return schema.core.map_elements; } });
Object.defineProperty(module.exports, "optional_key_QMARK_", { enumerable: false, get: function() { return schema.core.optional_key_QMARK_; } });
Object.defineProperty(module.exports, "Atomic", { enumerable: false, get: function() { return schema.core.Atomic; } });
Object.defineProperty(module.exports, "map__GT_Both", { enumerable: false, get: function() { return schema.core.map__GT_Both; } });
Object.defineProperty(module.exports, "required_key", { enumerable: false, get: function() { return schema.core.required_key; } });
Object.defineProperty(module.exports, "optional", { enumerable: false, get: function() { return schema.core.optional; } });
Object.defineProperty(module.exports, "Int", { enumerable: false, get: function() { return schema.core.Int; } });
Object.defineProperty(module.exports, "__GT_FnSchema", { enumerable: false, get: function() { return schema.core.__GT_FnSchema; } });
Object.defineProperty(module.exports, "Schema", { enumerable: false, get: function() { return schema.core.Schema; } });
Object.defineProperty(module.exports, "Both", { enumerable: false, get: function() { return schema.core.Both; } });
Object.defineProperty(module.exports, "map__GT_Maybe", { enumerable: false, get: function() { return schema.core.map__GT_Maybe; } });
Object.defineProperty(module.exports, "map_entry", { enumerable: false, get: function() { return schema.core.map_entry; } });
Object.defineProperty(module.exports, "specific_key_QMARK_", { enumerable: false, get: function() { return schema.core.specific_key_QMARK_; } });
Object.defineProperty(module.exports, "var_name", { enumerable: false, get: function() { return schema.core.var_name; } });
Object.defineProperty(module.exports, "map__GT_EnumSchema", { enumerable: false, get: function() { return schema.core.map__GT_EnumSchema; } });
Object.defineProperty(module.exports, "both", { enumerable: false, get: function() { return schema.core.both; } });
//# sourceMappingURL=schema.core.js.map
