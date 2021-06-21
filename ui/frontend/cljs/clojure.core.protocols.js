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

$CLJS.SHADOW_ENV.setLoaded("clojure.core.protocols.js");

goog.provide('clojure.core.protocols');

/**
 * @interface
 */
clojure.core.protocols.Datafiable = function(){};

var clojure$core$protocols$Datafiable$datafy$dyn_29792 = (function (o){
var x__4428__auto__ = (((o == null))?null:o);
var m__4429__auto__ = (clojure.core.protocols.datafy[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(o) : m__4429__auto__.call(null,o));
} else {
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(o),cljs.core.with_meta(new cljs.core.Symbol("clojure.core.protocols","datafy","clojure.core.protocols/datafy",707534751,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5733__auto__){
var meta_impl__4427__auto__ = temp__5733__auto__;
return (meta_impl__4427__auto__.cljs$core$IFn$_invoke$arity$1 ? meta_impl__4427__auto__.cljs$core$IFn$_invoke$arity$1(o) : meta_impl__4427__auto__.call(null,o));
} else {
var m__4426__auto__ = (clojure.core.protocols.datafy["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(o) : m__4426__auto__.call(null,o));
} else {
throw cljs.core.missing_protocol("Datafiable.datafy",o);
}
}
}
});
/**
 * return a representation of o as data (default identity)
 */
clojure.core.protocols.datafy = (function clojure$core$protocols$datafy(o){
if((((!((o == null)))) && ((!((o.clojure$core$protocols$Datafiable$datafy$arity$1 == null)))))){
return o.clojure$core$protocols$Datafiable$datafy$arity$1(o);
} else {
return clojure$core$protocols$Datafiable$datafy$dyn_29792(o);
}
});

goog.object.set(clojure.core.protocols.Datafiable,"null",true);

goog.object.set(clojure.core.protocols.datafy,"null",(function (_){
return null;
}));

goog.object.set(clojure.core.protocols.Datafiable,"_",true);

goog.object.set(clojure.core.protocols.datafy,"_",(function (o){
return o;
}));

/**
 * @interface
 */
clojure.core.protocols.Navigable = function(){};

var clojure$core$protocols$Navigable$nav$dyn_29799 = (function (coll,k,v){
var x__4428__auto__ = (((coll == null))?null:coll);
var m__4429__auto__ = (clojure.core.protocols.nav[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(coll,k,v) : m__4429__auto__.call(null,coll,k,v));
} else {
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(coll),cljs.core.with_meta(new cljs.core.Symbol("clojure.core.protocols","nav","clojure.core.protocols/nav",298936762,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5733__auto__){
var meta_impl__4427__auto__ = temp__5733__auto__;
return (meta_impl__4427__auto__.cljs$core$IFn$_invoke$arity$3 ? meta_impl__4427__auto__.cljs$core$IFn$_invoke$arity$3(coll,k,v) : meta_impl__4427__auto__.call(null,coll,k,v));
} else {
var m__4426__auto__ = (clojure.core.protocols.nav["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(coll,k,v) : m__4426__auto__.call(null,coll,k,v));
} else {
throw cljs.core.missing_protocol("Navigable.nav",coll);
}
}
}
});
/**
 * return (possibly transformed) v in the context of coll and k (a key/index or nil),
 * defaults to returning v.
 */
clojure.core.protocols.nav = (function clojure$core$protocols$nav(coll,k,v){
if((((!((coll == null)))) && ((!((coll.clojure$core$protocols$Navigable$nav$arity$3 == null)))))){
return coll.clojure$core$protocols$Navigable$nav$arity$3(coll,k,v);
} else {
return clojure$core$protocols$Navigable$nav$dyn_29799(coll,k,v);
}
});

goog.object.set(clojure.core.protocols.Navigable,"_",true);

goog.object.set(clojure.core.protocols.nav,"_",(function (_,___$1,x){
return x;
}));
Object.defineProperty(module.exports, "Datafiable", { enumerable: false, get: function() { return clojure.core.protocols.Datafiable; } });
Object.defineProperty(module.exports, "datafy", { enumerable: false, get: function() { return clojure.core.protocols.datafy; } });
Object.defineProperty(module.exports, "Navigable", { enumerable: false, get: function() { return clojure.core.protocols.Navigable; } });
Object.defineProperty(module.exports, "nav", { enumerable: false, get: function() { return clojure.core.protocols.nav; } });
//# sourceMappingURL=clojure.core.protocols.js.map
