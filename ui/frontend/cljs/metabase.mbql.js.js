var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./metabase.mbql.normalize.js");
require("./metabase.shared.util.js");
var cognitect = $CLJS.cognitect || ($CLJS.cognitect = {});
var module$shadow_js_shim_module$ttag = $CLJS.module$shadow_js_shim_module$ttag || ($CLJS.module$shadow_js_shim_module$ttag = {});
var clojure = $CLJS.clojure || ($CLJS.clojure = {});
var cljs = $CLJS.cljs || ($CLJS.cljs = {});
var schema = $CLJS.schema || ($CLJS.schema = {});
var shadow = $CLJS.shadow || ($CLJS.shadow = {});
var goog = $CLJS.goog || ($CLJS.goog = {});
var lambdaisland = $CLJS.lambdaisland || ($CLJS.lambdaisland = {});
var medley = $CLJS.medley || ($CLJS.medley = {});
var metabase = $CLJS.metabase || ($CLJS.metabase = {});
var com = $CLJS.com || ($CLJS.com = {});
debugger
$CLJS.SHADOW_ENV.setLoaded("metabase.mbql.js.js");

goog.provide('metabase.mbql.js');
/**
 * Normalize an MBQL query, and convert it to the latest and greatest version of MBQL.
 */
metabase.mbql.js.normalize = (function metabase$mbql$js$normalize(query) {
  return cljs.core.clj__GT_js.cljs$core$IFn$_invoke$arity$variadic(
    metabase.mbql.normalize.normalize(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(query)),
    cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(
      [new cljs.core.Keyword(null, "keyword-fn", "keyword-fn", -64566675), metabase.shared.util.qualified_name],
      0
    )
  );
});
goog.exportSymbol('metabase.mbql.js.normalize', metabase.mbql.js.normalize);
Object.defineProperty(module.exports, "normalize", {
  enumerable: true, get: function () {
    return metabase.mbql.js.normalize;
  }
});
//# sourceMappingURL=metabase.mbql.js.js.map
