var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;

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

$CLJS.SHADOW_ENV.setLoaded("goog.debug.errorcontext.js");

goog.provide("goog.debug.errorcontext");
goog.debug.errorcontext.addErrorContext = function(err, contextKey, contextValue) {
  if (!err[goog.debug.errorcontext.CONTEXT_KEY_]) {
    err[goog.debug.errorcontext.CONTEXT_KEY_] = {};
  }
  err[goog.debug.errorcontext.CONTEXT_KEY_][contextKey] = contextValue;
};
goog.debug.errorcontext.getErrorContext = function(err) {
  return err[goog.debug.errorcontext.CONTEXT_KEY_] || {};
};
goog.debug.errorcontext.CONTEXT_KEY_ = "__closure__error__context__984382";

module.exports = goog.debug.errorcontext;

//# sourceMappingURL=goog.debug.errorcontext.js.map
