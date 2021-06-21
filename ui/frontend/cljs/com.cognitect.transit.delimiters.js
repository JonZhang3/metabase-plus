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

$CLJS.SHADOW_ENV.setLoaded("com.cognitect.transit.delimiters.js");

goog.provide("com.cognitect.transit.delimiters");
goog.scope(function() {
  var delimiters = com.cognitect.transit.delimiters;
  delimiters.ESC = "~";
  delimiters.TAG = "#";
  delimiters.SUB = "^";
  delimiters.RES = "`";
  delimiters.ESC_TAG = "~#";
});

module.exports = com.cognitect.transit.delimiters;

//# sourceMappingURL=com.cognitect.transit.delimiters.js.map
