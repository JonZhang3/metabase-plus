var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
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

$CLJS.SHADOW_ENV.setLoaded("shadow.cljs.devtools.client.console.js");

goog.provide('shadow.cljs.devtools.client.console');
shadow.cljs.devtools.client.console.push_all = (function shadow$cljs$devtools$client$console$push_all(arr,item){
if(cljs.core.vector_QMARK_(item)){
var seq__27039 = cljs.core.seq(item);
var chunk__27040 = null;
var count__27041 = (0);
var i__27042 = (0);
while(true){
if((i__27042 < count__27041)){
var it = chunk__27040.cljs$core$IIndexed$_nth$arity$2(null,i__27042);
arr.push(it);


var G__27222 = seq__27039;
var G__27223 = chunk__27040;
var G__27224 = count__27041;
var G__27225 = (i__27042 + (1));
seq__27039 = G__27222;
chunk__27040 = G__27223;
count__27041 = G__27224;
i__27042 = G__27225;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__27039);
if(temp__5735__auto__){
var seq__27039__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27039__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__27039__$1);
var G__27230 = cljs.core.chunk_rest(seq__27039__$1);
var G__27231 = c__4556__auto__;
var G__27232 = cljs.core.count(c__4556__auto__);
var G__27233 = (0);
seq__27039 = G__27230;
chunk__27040 = G__27231;
count__27041 = G__27232;
i__27042 = G__27233;
continue;
} else {
var it = cljs.core.first(seq__27039__$1);
arr.push(it);


var G__27235 = cljs.core.next(seq__27039__$1);
var G__27236 = null;
var G__27237 = (0);
var G__27238 = (0);
seq__27039 = G__27235;
chunk__27040 = G__27236;
count__27041 = G__27237;
i__27042 = G__27238;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return arr.push(item);
}
});
shadow.cljs.devtools.client.console.object_ref = (function shadow$cljs$devtools$client$console$object_ref(obj){
if(cljs.core.truth_(obj)){
return ["object",({"object": obj})];
} else {
return null;
}
});
shadow.cljs.devtools.client.console.map__GT_style = (function shadow$cljs$devtools$client$console$map__GT_style(m){
return ({"style": clojure.string.join.cljs$core$IFn$_invoke$arity$2("",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__27053){
var vec__27054 = p__27053;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27054,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27054,(1),null);
return [cljs.core.name(k),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),";"].join('');
}),m))});
});
shadow.cljs.devtools.client.console.clj__GT_jsonml = (function shadow$cljs$devtools$client$console$clj__GT_jsonml(struct){
if((struct == null)){
return null;
} else {
if(cljs.core.array_QMARK_(struct)){
return struct;
} else {
if(cljs.core.vector_QMARK_(struct)){
var vec__27064 = struct;
var seq__27065 = cljs.core.seq(vec__27064);
var first__27066 = cljs.core.first(seq__27065);
var seq__27065__$1 = cljs.core.next(seq__27065);
var tag = first__27066;
var first__27066__$1 = cljs.core.first(seq__27065__$1);
var seq__27065__$2 = cljs.core.next(seq__27065__$1);
var attrs = first__27066__$1;
var children = seq__27065__$2;
var js = [cljs.core.name(tag),shadow.cljs.devtools.client.console.map__GT_style(attrs)];
var seq__27068_27248 = cljs.core.seq(children);
var chunk__27069_27249 = null;
var count__27070_27250 = (0);
var i__27071_27251 = (0);
while(true){
if((i__27071_27251 < count__27070_27250)){
var child_27252 = chunk__27069_27249.cljs$core$IIndexed$_nth$arity$2(null,i__27071_27251);
shadow.cljs.devtools.client.console.push_all(js,(shadow.cljs.devtools.client.console.clj__GT_jsonml.cljs$core$IFn$_invoke$arity$1 ? shadow.cljs.devtools.client.console.clj__GT_jsonml.cljs$core$IFn$_invoke$arity$1(child_27252) : shadow.cljs.devtools.client.console.clj__GT_jsonml.call(null,child_27252)));


var G__27253 = seq__27068_27248;
var G__27254 = chunk__27069_27249;
var G__27255 = count__27070_27250;
var G__27256 = (i__27071_27251 + (1));
seq__27068_27248 = G__27253;
chunk__27069_27249 = G__27254;
count__27070_27250 = G__27255;
i__27071_27251 = G__27256;
continue;
} else {
var temp__5735__auto___27257 = cljs.core.seq(seq__27068_27248);
if(temp__5735__auto___27257){
var seq__27068_27259__$1 = temp__5735__auto___27257;
if(cljs.core.chunked_seq_QMARK_(seq__27068_27259__$1)){
var c__4556__auto___27260 = cljs.core.chunk_first(seq__27068_27259__$1);
var G__27261 = cljs.core.chunk_rest(seq__27068_27259__$1);
var G__27262 = c__4556__auto___27260;
var G__27263 = cljs.core.count(c__4556__auto___27260);
var G__27264 = (0);
seq__27068_27248 = G__27261;
chunk__27069_27249 = G__27262;
count__27070_27250 = G__27263;
i__27071_27251 = G__27264;
continue;
} else {
var child_27265 = cljs.core.first(seq__27068_27259__$1);
shadow.cljs.devtools.client.console.push_all(js,(shadow.cljs.devtools.client.console.clj__GT_jsonml.cljs$core$IFn$_invoke$arity$1 ? shadow.cljs.devtools.client.console.clj__GT_jsonml.cljs$core$IFn$_invoke$arity$1(child_27265) : shadow.cljs.devtools.client.console.clj__GT_jsonml.call(null,child_27265)));


var G__27267 = cljs.core.next(seq__27068_27259__$1);
var G__27268 = null;
var G__27269 = (0);
var G__27270 = (0);
seq__27068_27248 = G__27267;
chunk__27069_27249 = G__27268;
count__27070_27250 = G__27269;
i__27071_27251 = G__27270;
continue;
}
} else {
}
}
break;
}

return js;
} else {
if(typeof struct === 'string'){
return struct;
} else {
if(typeof struct === 'number'){
return struct;
} else {
if(cljs.core.seq_QMARK_(struct)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.console.clj__GT_jsonml),struct);
} else {
return shadow.cljs.devtools.client.console.object_ref(struct);

}
}
}
}
}
}
});

/**
* @constructor
*/
shadow.cljs.devtools.client.console.SeqFormatter = (function (){
});
(shadow.cljs.devtools.client.console.SeqFormatter.prototype.shadow$formatter = (function (){
var self__ = this;
var this$ = this;
return true;
}));

(shadow.cljs.devtools.client.console.SeqFormatter.prototype.header = (function (obj){
var self__ = this;
var this$ = this;
if(((cljs.core.sequential_QMARK_(obj)) || (cljs.core.set_QMARK_(obj)))){
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.PersistentArrayMap.EMPTY,[cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(obj)], 0))," [count: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(obj)),"]"].join('')], null));
} else {
return null;
}
}));

(shadow.cljs.devtools.client.console.SeqFormatter.prototype.hasBody = (function (obj){
var self__ = this;
var this$ = this;
return cljs.core.boolean$(cljs.core.seq(obj));
}));

(shadow.cljs.devtools.client.console.SeqFormatter.prototype.body = (function (s){
var self__ = this;
var this$ = this;
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null),(function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$console$iter__27098(s__27099){
return (new cljs.core.LazySeq(null,(function (){
var s__27099__$1 = s__27099;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__27099__$1);
if(temp__5735__auto__){
var s__27099__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27099__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__27099__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__27101 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__27100 = (0);
while(true){
if((i__27100 < size__4528__auto__)){
var value = cljs.core._nth(c__4527__auto__,i__27100);
cljs.core.chunk_append(b__27101,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(value)], null));

var G__27294 = (i__27100 + (1));
i__27100 = G__27294;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27101),shadow$cljs$devtools$client$console$iter__27098(cljs.core.chunk_rest(s__27099__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27101),null);
}
} else {
var value = cljs.core.first(s__27099__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(value)], null),shadow$cljs$devtools$client$console$iter__27098(cljs.core.rest(s__27099__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(s);
})()], null));
}));

(shadow.cljs.devtools.client.console.SeqFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(shadow.cljs.devtools.client.console.SeqFormatter.cljs$lang$type = true);

(shadow.cljs.devtools.client.console.SeqFormatter.cljs$lang$ctorStr = "shadow.cljs.devtools.client.console/SeqFormatter");

(shadow.cljs.devtools.client.console.SeqFormatter.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.cljs.devtools.client.console/SeqFormatter");
}));

/**
 * Positional factory function for shadow.cljs.devtools.client.console/SeqFormatter.
 */
shadow.cljs.devtools.client.console.__GT_SeqFormatter = (function shadow$cljs$devtools$client$console$__GT_SeqFormatter(){
return (new shadow.cljs.devtools.client.console.SeqFormatter());
});


/**
* @constructor
*/
shadow.cljs.devtools.client.console.MapFormatter = (function (){
});
(shadow.cljs.devtools.client.console.MapFormatter.prototype.shadow$formatter = (function (){
var self__ = this;
var this$ = this;
return true;
}));

(shadow.cljs.devtools.client.console.MapFormatter.prototype.header = (function (obj){
var self__ = this;
var this$ = this;
if((((obj instanceof cljs.core.PersistentHashMap)) || ((obj instanceof cljs.core.PersistentArrayMap)) || (cljs.core.record_QMARK_(obj)))){
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.PersistentArrayMap.EMPTY,[cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(obj)], 0))," [count: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(obj)),"]"].join('')], null));
} else {
return null;
}
}));

(shadow.cljs.devtools.client.console.MapFormatter.prototype.hasBody = (function (obj){
var self__ = this;
var this$ = this;
return cljs.core.boolean$(cljs.core.seq(obj));
}));

(shadow.cljs.devtools.client.console.MapFormatter.prototype.body = (function (m){
var self__ = this;
var this$ = this;
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"14px"], null),(function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$console$iter__27125(s__27126){
return (new cljs.core.LazySeq(null,(function (){
var s__27126__$1 = s__27126;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__27126__$1);
if(temp__5735__auto__){
var s__27126__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27126__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__27126__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__27128 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__27127 = (0);
while(true){
if((i__27127 < size__4528__auto__)){
var key = cljs.core._nth(c__4527__auto__,i__27127);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key);
cljs.core.chunk_append(b__27128,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"top"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(key)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(value)], null)], null));

var G__27304 = (i__27127 + (1));
i__27127 = G__27304;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27128),shadow$cljs$devtools$client$console$iter__27125(cljs.core.chunk_rest(s__27126__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27128),null);
}
} else {
var key = cljs.core.first(s__27126__$2);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"top"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(key)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(value)], null)], null),shadow$cljs$devtools$client$console$iter__27125(cljs.core.rest(s__27126__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__((function (){var k = cljs.core.keys(m);
try{return cljs.core.sort.cljs$core$IFn$_invoke$arity$1(k);
}catch (e27143){var e = e27143;
return k;
}})());
})()], null));
}));

(shadow.cljs.devtools.client.console.MapFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(shadow.cljs.devtools.client.console.MapFormatter.cljs$lang$type = true);

(shadow.cljs.devtools.client.console.MapFormatter.cljs$lang$ctorStr = "shadow.cljs.devtools.client.console/MapFormatter");

(shadow.cljs.devtools.client.console.MapFormatter.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.cljs.devtools.client.console/MapFormatter");
}));

/**
 * Positional factory function for shadow.cljs.devtools.client.console/MapFormatter.
 */
shadow.cljs.devtools.client.console.__GT_MapFormatter = (function shadow$cljs$devtools$client$console$__GT_MapFormatter(){
return (new shadow.cljs.devtools.client.console.MapFormatter());
});

shadow.cljs.devtools.client.console.keyword_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"rgb(136, 19, 145)"], null);

/**
* @constructor
*/
shadow.cljs.devtools.client.console.KeywordFormatter = (function (){
});
(shadow.cljs.devtools.client.console.KeywordFormatter.prototype.shadow$formatter = (function (){
var self__ = this;
var this$ = this;
return true;
}));

(shadow.cljs.devtools.client.console.KeywordFormatter.prototype.header = (function (obj){
var self__ = this;
var this$ = this;
if((obj instanceof cljs.core.Keyword)){
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),shadow.cljs.devtools.client.console.keyword_style,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0))], null));
} else {
return null;
}
}));

(shadow.cljs.devtools.client.console.KeywordFormatter.prototype.hasBody = (function (obj){
var self__ = this;
var this$ = this;
return false;
}));

(shadow.cljs.devtools.client.console.KeywordFormatter.prototype.body = (function (m){
var self__ = this;
var this$ = this;
return null;
}));

(shadow.cljs.devtools.client.console.KeywordFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(shadow.cljs.devtools.client.console.KeywordFormatter.cljs$lang$type = true);

(shadow.cljs.devtools.client.console.KeywordFormatter.cljs$lang$ctorStr = "shadow.cljs.devtools.client.console/KeywordFormatter");

(shadow.cljs.devtools.client.console.KeywordFormatter.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.cljs.devtools.client.console/KeywordFormatter");
}));

/**
 * Positional factory function for shadow.cljs.devtools.client.console/KeywordFormatter.
 */
shadow.cljs.devtools.client.console.__GT_KeywordFormatter = (function shadow$cljs$devtools$client$console$__GT_KeywordFormatter(){
return (new shadow.cljs.devtools.client.console.KeywordFormatter());
});


/**
* @constructor
*/
shadow.cljs.devtools.client.console.SymbolFormatter = (function (){
});
(shadow.cljs.devtools.client.console.SymbolFormatter.prototype.shadow$formatter = (function (){
var self__ = this;
var this$ = this;
return true;
}));

(shadow.cljs.devtools.client.console.SymbolFormatter.prototype.header = (function (obj){
var self__ = this;
var this$ = this;
if((obj instanceof cljs.core.Symbol)){
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),shadow.cljs.devtools.client.console.keyword_style,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0))], null));
} else {
return null;
}
}));

(shadow.cljs.devtools.client.console.SymbolFormatter.prototype.hasBody = (function (obj){
var self__ = this;
var this$ = this;
return false;
}));

(shadow.cljs.devtools.client.console.SymbolFormatter.prototype.body = (function (m){
var self__ = this;
var this$ = this;
return null;
}));

(shadow.cljs.devtools.client.console.SymbolFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(shadow.cljs.devtools.client.console.SymbolFormatter.cljs$lang$type = true);

(shadow.cljs.devtools.client.console.SymbolFormatter.cljs$lang$ctorStr = "shadow.cljs.devtools.client.console/SymbolFormatter");

(shadow.cljs.devtools.client.console.SymbolFormatter.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.cljs.devtools.client.console/SymbolFormatter");
}));

/**
 * Positional factory function for shadow.cljs.devtools.client.console/SymbolFormatter.
 */
shadow.cljs.devtools.client.console.__GT_SymbolFormatter = (function shadow$cljs$devtools$client$console$__GT_SymbolFormatter(){
return (new shadow.cljs.devtools.client.console.SymbolFormatter());
});


/**
* @constructor
*/
shadow.cljs.devtools.client.console.DerefFormatter = (function (){
});
(shadow.cljs.devtools.client.console.DerefFormatter.prototype.shadow$formatter = (function (){
var self__ = this;
var this$ = this;
return true;
}));

(shadow.cljs.devtools.client.console.DerefFormatter.prototype.header = (function (obj){
var self__ = this;
var this$ = this;
if((((obj instanceof cljs.core.Atom)) || ((obj instanceof cljs.core.Volatile)))){
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),shadow.cljs.devtools.client.console.keyword_style,["@DEREF ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(obj)], 0))].join('')], null));
} else {
return null;
}
}));

(shadow.cljs.devtools.client.console.DerefFormatter.prototype.hasBody = (function (obj){
var self__ = this;
var this$ = this;
return true;
}));

(shadow.cljs.devtools.client.console.DerefFormatter.prototype.body = (function (v){
var self__ = this;
var this$ = this;
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"14px"], null),shadow.cljs.devtools.client.console.object_ref(cljs.core.deref(v))], null));
}));

(shadow.cljs.devtools.client.console.DerefFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(shadow.cljs.devtools.client.console.DerefFormatter.cljs$lang$type = true);

(shadow.cljs.devtools.client.console.DerefFormatter.cljs$lang$ctorStr = "shadow.cljs.devtools.client.console/DerefFormatter");

(shadow.cljs.devtools.client.console.DerefFormatter.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.cljs.devtools.client.console/DerefFormatter");
}));

/**
 * Positional factory function for shadow.cljs.devtools.client.console/DerefFormatter.
 */
shadow.cljs.devtools.client.console.__GT_DerefFormatter = (function shadow$cljs$devtools$client$console$__GT_DerefFormatter(){
return (new shadow.cljs.devtools.client.console.DerefFormatter());
});

shadow.cljs.devtools.client.console.install_all_BANG_ = (function shadow$cljs$devtools$client$console$install_all_BANG_(){
var temp__5735__auto__ = goog.global.devtoolsFormatters;
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
var G__27205 = f;
G__27205.push((new shadow.cljs.devtools.client.console.KeywordFormatter()));

G__27205.push((new shadow.cljs.devtools.client.console.MapFormatter()));

G__27205.push((new shadow.cljs.devtools.client.console.SeqFormatter()));

G__27205.push((new shadow.cljs.devtools.client.console.SymbolFormatter()));

G__27205.push((new shadow.cljs.devtools.client.console.DerefFormatter()));

return G__27205;
} else {
return null;
}
});
shadow.cljs.devtools.client.console.remove_all_BANG_ = (function shadow$cljs$devtools$client$console$remove_all_BANG_(){
var all = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__27214_SHARP_){
return goog.object.get(p1__27214_SHARP_,"shadow$formatter");
}),cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = goog.global.devtoolsFormatters;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [];
}
})())));
return goog.object.set(goog.global,"devtoolsFormatters",all);
});
shadow.cljs.devtools.client.console.remove_all_BANG_();
shadow.cljs.devtools.client.console.install_all_BANG_();
Object.defineProperty(module.exports, "SymbolFormatter", { enumerable: false, get: function() { return shadow.cljs.devtools.client.console.SymbolFormatter; } });
Object.defineProperty(module.exports, "KeywordFormatter", { enumerable: false, get: function() { return shadow.cljs.devtools.client.console.KeywordFormatter; } });
Object.defineProperty(module.exports, "__GT_SeqFormatter", { enumerable: false, get: function() { return shadow.cljs.devtools.client.console.__GT_SeqFormatter; } });
Object.defineProperty(module.exports, "clj__GT_jsonml", { enumerable: false, get: function() { return shadow.cljs.devtools.client.console.clj__GT_jsonml; } });
Object.defineProperty(module.exports, "keyword_style", { enumerable: false, get: function() { return shadow.cljs.devtools.client.console.keyword_style; } });
Object.defineProperty(module.exports, "__GT_SymbolFormatter", { enumerable: false, get: function() { return shadow.cljs.devtools.client.console.__GT_SymbolFormatter; } });
Object.defineProperty(module.exports, "push_all", { enumerable: false, get: function() { return shadow.cljs.devtools.client.console.push_all; } });
Object.defineProperty(module.exports, "map__GT_style", { enumerable: false, get: function() { return shadow.cljs.devtools.client.console.map__GT_style; } });
Object.defineProperty(module.exports, "object_ref", { enumerable: false, get: function() { return shadow.cljs.devtools.client.console.object_ref; } });
Object.defineProperty(module.exports, "DerefFormatter", { enumerable: false, get: function() { return shadow.cljs.devtools.client.console.DerefFormatter; } });
Object.defineProperty(module.exports, "remove_all_BANG_", { enumerable: false, get: function() { return shadow.cljs.devtools.client.console.remove_all_BANG_; } });
Object.defineProperty(module.exports, "MapFormatter", { enumerable: false, get: function() { return shadow.cljs.devtools.client.console.MapFormatter; } });
Object.defineProperty(module.exports, "SeqFormatter", { enumerable: false, get: function() { return shadow.cljs.devtools.client.console.SeqFormatter; } });
Object.defineProperty(module.exports, "__GT_KeywordFormatter", { enumerable: false, get: function() { return shadow.cljs.devtools.client.console.__GT_KeywordFormatter; } });
Object.defineProperty(module.exports, "install_all_BANG_", { enumerable: false, get: function() { return shadow.cljs.devtools.client.console.install_all_BANG_; } });
Object.defineProperty(module.exports, "__GT_MapFormatter", { enumerable: false, get: function() { return shadow.cljs.devtools.client.console.__GT_MapFormatter; } });
Object.defineProperty(module.exports, "__GT_DerefFormatter", { enumerable: false, get: function() { return shadow.cljs.devtools.client.console.__GT_DerefFormatter; } });
//# sourceMappingURL=shadow.cljs.devtools.client.console.js.map
