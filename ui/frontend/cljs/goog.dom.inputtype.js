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

$CLJS.SHADOW_ENV.setLoaded("goog.dom.inputtype.js");

goog.provide("goog.dom.InputType");
goog.dom.InputType = {BUTTON:"button", CHECKBOX:"checkbox", COLOR:"color", DATE:"date", DATETIME:"datetime", DATETIME_LOCAL:"datetime-local", EMAIL:"email", FILE:"file", HIDDEN:"hidden", IMAGE:"image", MENU:"menu", MONTH:"month", NUMBER:"number", PASSWORD:"password", RADIO:"radio", RANGE:"range", RESET:"reset", SEARCH:"search", SELECT_MULTIPLE:"select-multiple", SELECT_ONE:"select-one", SUBMIT:"submit", TEL:"tel", TEXT:"text", TEXTAREA:"textarea", TIME:"time", URL:"url", WEEK:"week"};

module.exports = goog.dom.InputType;

//# sourceMappingURL=goog.dom.inputtype.js.map
