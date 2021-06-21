var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./goog.string.stringformat.js");
require("./goog.object.object.js");
require("./goog.string.string.js");
require("./clojure.string.js");
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

$CLJS.SHADOW_ENV.setLoaded("schema.utils.js");

goog.provide('schema.utils');
/**
 * Like assoc but only assocs when value is truthy.  Copied from plumbing.core so that
 * schema need not depend on plumbing.
 */
schema.utils.assoc_when = (function schema$utils$assoc_when(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37049 = arguments.length;
var i__4737__auto___37050 = (0);
while(true){
if((i__4737__auto___37050 < len__4736__auto___37049)){
args__4742__auto__.push((arguments[i__4737__auto___37050]));

var G__37052 = (i__4737__auto___37050 + (1));
i__4737__auto___37050 = G__37052;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return schema.utils.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(schema.utils.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

return cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__4126__auto__ = m;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__4529__auto__ = (function schema$utils$iter__36866(s__36867){
return (new cljs.core.LazySeq(null,(function (){
var s__36867__$1 = s__36867;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36867__$1);
if(temp__5735__auto__){
var s__36867__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36867__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__36867__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__36869 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__36868 = (0);
while(true){
if((i__36868 < size__4528__auto__)){
var vec__36882 = cljs.core._nth(c__4527__auto__,i__36868);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36882,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36882,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append(b__36869,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__37057 = (i__36868 + (1));
i__36868 = G__37057;
continue;
} else {
var G__37059 = (i__36868 + (1));
i__36868 = G__37059;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36869),schema$utils$iter__36866(cljs.core.chunk_rest(s__36867__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36869),null);
}
} else {
var vec__36896 = cljs.core.first(s__36867__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36896,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36896,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),schema$utils$iter__36866(cljs.core.rest(s__36867__$2)));
} else {
var G__37060 = cljs.core.rest(s__36867__$2);
s__36867__$1 = G__37060;
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
return iter__4529__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
})());
}));

(schema.utils.assoc_when.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(schema.utils.assoc_when.cljs$lang$applyTo = (function (seq36839){
var G__36840 = cljs.core.first(seq36839);
var seq36839__$1 = cljs.core.next(seq36839);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36840,seq36839__$1);
}));

schema.utils.type_of = (function schema$utils$type_of(x){
return typeof x;
});
/**
 * What class can we associate the fn schema with? In Clojure use the class of the fn; in
 * cljs just use the fn itself.
 */
schema.utils.fn_schema_bearer = (function schema$utils$fn_schema_bearer(f){
return f;
});
schema.utils.format_STAR_ = (function schema$utils$format_STAR_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37064 = arguments.length;
var i__4737__auto___37065 = (0);
while(true){
if((i__4737__auto___37065 < len__4736__auto___37064)){
args__4742__auto__.push((arguments[i__4737__auto___37065]));

var G__37067 = (i__4737__auto___37065 + (1));
i__4737__auto___37065 = G__37067;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
}));

(schema.utils.format_STAR_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(schema.utils.format_STAR_.cljs$lang$applyTo = (function (seq36905){
var G__36906 = cljs.core.first(seq36905);
var seq36905__$1 = cljs.core.next(seq36905);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36906,seq36905__$1);
}));

schema.utils.max_value_length = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((19));
/**
 * Provide a descriptive short name for a value.
 */
schema.utils.value_name = (function schema$utils$value_name(value){
var t = schema.utils.type_of(value);
if((((cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)).length) <= cljs.core.deref(schema.utils.max_value_length))){
return value;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["a-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join(''));
}
});
/**
 * TODO: eventually use built in demunge in latest cljs.
 */
schema.utils.unmunge = (function schema$utils$unmunge(s){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__36912){
var vec__36914 = p__36912;
var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36914,(0),null);
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36914,(1),null);
return clojure.string.replace(s__$1,from,cljs.core.str.cljs$core$IFn$_invoke$arity$1(to));
}),s,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__36909_SHARP_){
return (- cljs.core.count(cljs.core.second(p1__36909_SHARP_)));
}),cljs.core.PersistentHashMap.fromArrays(["@","!","\"","#","%","&","'","*","+","-","/",":","[","{","<","\\","|","=","]","}",">","^","~","?"],["_CIRCA_","_BANG_","_DOUBLEQUOTE_","_SHARP_","_PERCENT_","_AMPERSAND_","_SINGLEQUOTE_","_STAR_","_PLUS_","_","_SLASH_","_COLON_","_LBRACK_","_LBRACE_","_LT_","_BSLASH_","_BAR_","_EQ_","_RBRACK_","_RBRACE_","_GT_","_CARET_","_TILDE_","_QMARK_"])));
});
/**
 * A meaningful name for a function that looks like its symbol, if applicable.
 */
schema.utils.fn_name = (function schema$utils$fn_name(f){
var vec__36927 = cljs.core.re_matches(/#object\[(.*)\]/,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f], 0)));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36927,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36927,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Function",s)){
return "function";
} else {
return cljs.core.re_find(/[^\/]+(?:$|(?=\/+$))/,cljs.core.demunge(s));
}
});
schema.utils.record_QMARK_ = (function schema$utils$record_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition0$ & (67108864))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IRecord$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IRecord,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IRecord,x);
}
});

/**
* @constructor
 * @implements {cljs.core.IPrintWithWriter}
*/
schema.utils.ValidationError = (function (schema,value,expectation_delay,fail_explanation){
this.schema = schema;
this.value = value;
this.expectation_delay = expectation_delay;
this.fail_explanation = fail_explanation;
this.cljs$lang$protocol_mask$partition0$ = 2147483648;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(schema.utils.ValidationError.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._pr_writer((schema.utils.validation_error_explain.cljs$core$IFn$_invoke$arity$1 ? schema.utils.validation_error_explain.cljs$core$IFn$_invoke$arity$1(this$__$1) : schema.utils.validation_error_explain.call(null,this$__$1)),writer,opts);
}));

(schema.utils.ValidationError.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"expectation-delay","expectation-delay",-1886214669,null),new cljs.core.Symbol(null,"fail-explanation","fail-explanation",530278923,null)], null);
}));

(schema.utils.ValidationError.cljs$lang$type = true);

(schema.utils.ValidationError.cljs$lang$ctorStr = "schema.utils/ValidationError");

(schema.utils.ValidationError.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"schema.utils/ValidationError");
}));

/**
 * Positional factory function for schema.utils/ValidationError.
 */
schema.utils.__GT_ValidationError = (function schema$utils$__GT_ValidationError(schema__$1,value,expectation_delay,fail_explanation){
return (new schema.utils.ValidationError(schema__$1,value,expectation_delay,fail_explanation));
});

schema.utils.validation_error_explain = (function schema$utils$validation_error_explain(err){
return (new cljs.core.List(null,(function (){var or__4126__auto__ = err.fail_explanation;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Symbol(null,"not","not",1044554643,null);
}
})(),(new cljs.core.List(null,cljs.core.deref(err.expectation_delay),null,(1),null)),(2),null));
});
/**
 * for cljs sake (easier than normalizing imports in macros.clj)
 */
schema.utils.make_ValidationError = (function schema$utils$make_ValidationError(schema__$1,value,expectation_delay,fail_explanation){
return (new schema.utils.ValidationError(schema__$1,value,expectation_delay,fail_explanation));
});

/**
* @constructor
 * @implements {cljs.core.IPrintWithWriter}
*/
schema.utils.NamedError = (function (name,error){
this.name = name;
this.error = error;
this.cljs$lang$protocol_mask$partition0$ = 2147483648;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(schema.utils.NamedError.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._pr_writer((schema.utils.named_error_explain.cljs$core$IFn$_invoke$arity$1 ? schema.utils.named_error_explain.cljs$core$IFn$_invoke$arity$1(this$__$1) : schema.utils.named_error_explain.call(null,this$__$1)),writer,opts);
}));

(schema.utils.NamedError.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"error","error",661562495,null)], null);
}));

(schema.utils.NamedError.cljs$lang$type = true);

(schema.utils.NamedError.cljs$lang$ctorStr = "schema.utils/NamedError");

(schema.utils.NamedError.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"schema.utils/NamedError");
}));

/**
 * Positional factory function for schema.utils/NamedError.
 */
schema.utils.__GT_NamedError = (function schema$utils$__GT_NamedError(name,error){
return (new schema.utils.NamedError(name,error));
});

schema.utils.named_error_explain = (function schema$utils$named_error_explain(err){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"named","named",1218138048,null),(new cljs.core.List(null,err.error,(new cljs.core.List(null,err.name,null,(1),null)),(2),null)),(3),null));
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
schema.utils.ErrorContainer = (function (error,__meta,__extmap,__hash){
this.error = error;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.utils.ErrorContainer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(schema.utils.ErrorContainer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k36955,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__36968 = k36955;
var G__36968__$1 = (((G__36968 instanceof cljs.core.Keyword))?G__36968.fqn:null);
switch (G__36968__$1) {
case "error":
return self__.error;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36955,else__4383__auto__);

}
}));

(schema.utils.ErrorContainer.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__36997){
var vec__36999 = p__36997;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36999,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36999,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(schema.utils.ErrorContainer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#schema.utils.ErrorContainer{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"error","error",-978969032),self__.error],null))], null),self__.__extmap));
}));

(schema.utils.ErrorContainer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36954){
var self__ = this;
var G__36954__$1 = this;
return (new cljs.core.RecordIter((0),G__36954__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(schema.utils.ErrorContainer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(schema.utils.ErrorContainer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new schema.utils.ErrorContainer(self__.error,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.utils.ErrorContainer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(schema.utils.ErrorContainer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1172277899 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(schema.utils.ErrorContainer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36956,other36957){
var self__ = this;
var this36956__$1 = this;
return (((!((other36957 == null)))) && ((this36956__$1.constructor === other36957.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36956__$1.error,other36957.error)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36956__$1.__extmap,other36957.__extmap)));
}));

(schema.utils.ErrorContainer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new schema.utils.ErrorContainer(self__.error,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(schema.utils.ErrorContainer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__36954){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__37023 = cljs.core.keyword_identical_QMARK_;
var expr__37024 = k__4388__auto__;
if(cljs.core.truth_((pred__37023.cljs$core$IFn$_invoke$arity$2 ? pred__37023.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"error","error",-978969032),expr__37024) : pred__37023.call(null,new cljs.core.Keyword(null,"error","error",-978969032),expr__37024)))){
return (new schema.utils.ErrorContainer(G__36954,self__.__meta,self__.__extmap,null));
} else {
return (new schema.utils.ErrorContainer(self__.error,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__36954),null));
}
}));

(schema.utils.ErrorContainer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"error","error",-978969032),self__.error,null))], null),self__.__extmap));
}));

(schema.utils.ErrorContainer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__36954){
var self__ = this;
var this__4379__auto____$1 = this;
return (new schema.utils.ErrorContainer(self__.error,G__36954,self__.__extmap,self__.__hash));
}));

(schema.utils.ErrorContainer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(schema.utils.ErrorContainer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"error","error",661562495,null)], null);
}));

(schema.utils.ErrorContainer.cljs$lang$type = true);

(schema.utils.ErrorContainer.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"schema.utils/ErrorContainer",null,(1),null));
}));

(schema.utils.ErrorContainer.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"schema.utils/ErrorContainer");
}));

/**
 * Positional factory function for schema.utils/ErrorContainer.
 */
schema.utils.__GT_ErrorContainer = (function schema$utils$__GT_ErrorContainer(error){
return (new schema.utils.ErrorContainer(error,null,null,null));
});

/**
 * Factory function for schema.utils/ErrorContainer, taking a map of keywords to field values.
 */
schema.utils.map__GT_ErrorContainer = (function schema$utils$map__GT_ErrorContainer(G__36958){
var extmap__4419__auto__ = (function (){var G__37039 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36958,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.record_QMARK_(G__36958)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__37039);
} else {
return G__37039;
}
})();
return (new schema.utils.ErrorContainer(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(G__36958),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

/**
 * Distinguish a value (must be non-nil) as an error.
 */
schema.utils.error = (function schema$utils$error(x){
if(cljs.core.truth_(x)){
} else {
throw (new Error("Assert failed: x"));
}

return schema.utils.__GT_ErrorContainer(x);
});
schema.utils.error_QMARK_ = (function schema$utils$error_QMARK_(x){
return (x instanceof schema.utils.ErrorContainer);
});
schema.utils.error_val = (function schema$utils$error_val(x){
if(schema.utils.error_QMARK_(x)){
return x.error;
} else {
return null;
}
});
schema.utils.declare_class_schema_BANG_ = (function schema$utils$declare_class_schema_BANG_(klass,schema__$1){
return goog.object.set(klass,"schema$utils$schema",schema__$1);
});

schema.utils.class_schema = (function schema$utils$class_schema(klass){
return goog.object.get(klass,"schema$utils$schema");
});
/**
 * Turn on run-time function validation for functions compiled when
 * s/compile-fn-validation was true -- has no effect for functions compiled
 * when it is false.
 */
schema.utils.use_fn_validation = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
Object.defineProperty(module.exports, "max_value_length", { enumerable: false, get: function() { return schema.utils.max_value_length; } });
Object.defineProperty(module.exports, "NamedError", { enumerable: false, get: function() { return schema.utils.NamedError; } });
Object.defineProperty(module.exports, "error_QMARK_", { enumerable: false, get: function() { return schema.utils.error_QMARK_; } });
Object.defineProperty(module.exports, "make_ValidationError", { enumerable: false, get: function() { return schema.utils.make_ValidationError; } });
Object.defineProperty(module.exports, "map__GT_ErrorContainer", { enumerable: false, get: function() { return schema.utils.map__GT_ErrorContainer; } });
Object.defineProperty(module.exports, "unmunge", { enumerable: false, get: function() { return schema.utils.unmunge; } });
Object.defineProperty(module.exports, "value_name", { enumerable: false, get: function() { return schema.utils.value_name; } });
Object.defineProperty(module.exports, "use_fn_validation", { enumerable: false, get: function() { return schema.utils.use_fn_validation; } });
Object.defineProperty(module.exports, "ValidationError", { enumerable: false, get: function() { return schema.utils.ValidationError; } });
Object.defineProperty(module.exports, "format_STAR_", { enumerable: false, get: function() { return schema.utils.format_STAR_; } });
Object.defineProperty(module.exports, "fn_schema_bearer", { enumerable: false, get: function() { return schema.utils.fn_schema_bearer; } });
Object.defineProperty(module.exports, "__GT_ValidationError", { enumerable: false, get: function() { return schema.utils.__GT_ValidationError; } });
Object.defineProperty(module.exports, "named_error_explain", { enumerable: false, get: function() { return schema.utils.named_error_explain; } });
Object.defineProperty(module.exports, "fn_name", { enumerable: false, get: function() { return schema.utils.fn_name; } });
Object.defineProperty(module.exports, "record_QMARK_", { enumerable: false, get: function() { return schema.utils.record_QMARK_; } });
Object.defineProperty(module.exports, "__GT_NamedError", { enumerable: false, get: function() { return schema.utils.__GT_NamedError; } });
Object.defineProperty(module.exports, "type_of", { enumerable: false, get: function() { return schema.utils.type_of; } });
Object.defineProperty(module.exports, "declare_class_schema_BANG_", { enumerable: false, get: function() { return schema.utils.declare_class_schema_BANG_; } });
Object.defineProperty(module.exports, "ErrorContainer", { enumerable: false, get: function() { return schema.utils.ErrorContainer; } });
Object.defineProperty(module.exports, "__GT_ErrorContainer", { enumerable: false, get: function() { return schema.utils.__GT_ErrorContainer; } });
Object.defineProperty(module.exports, "class_schema", { enumerable: false, get: function() { return schema.utils.class_schema; } });
Object.defineProperty(module.exports, "validation_error_explain", { enumerable: false, get: function() { return schema.utils.validation_error_explain; } });
Object.defineProperty(module.exports, "error_val", { enumerable: false, get: function() { return schema.utils.error_val; } });
Object.defineProperty(module.exports, "assoc_when", { enumerable: false, get: function() { return schema.utils.assoc_when; } });
Object.defineProperty(module.exports, "error", { enumerable: false, get: function() { return schema.utils.error; } });
//# sourceMappingURL=schema.utils.js.map
