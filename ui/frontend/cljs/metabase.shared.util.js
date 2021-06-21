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

$CLJS.SHADOW_ENV.setLoaded("metabase.shared.util.js");

goog.provide('metabase.shared.util');
/**
 * Return `k` as a string, qualified by its namespace, if any (unlike `name`). Handles `nil` values gracefully as well
 *   (also unlike `name`).
 * 
 *   (u/qualified-name :type/FK) -> "type/FK"
 */
metabase.shared.util.qualified_name = (function metabase$shared$util$qualified_name(k){
if((!((k == null)))){
var temp__5733__auto__ = (((k instanceof cljs.core.Keyword))?cljs.core.namespace(k):null);
if(cljs.core.truth_(temp__5733__auto__)){
var namespac = temp__5733__auto__;
return [namespac,"/",cljs.core.name(k)].join('');
} else {
return cljs.core.name(k);
}
} else {
return null;
}
});
Object.defineProperty(module.exports, "qualified_name", { enumerable: false, get: function() { return metabase.shared.util.qualified_name; } });
//# sourceMappingURL=metabase.shared.util.js.map
