var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./goog.labs.useragent.browser.js");
require("./goog.labs.useragent.engine.js");
require("./goog.labs.useragent.platform.js");
require("./goog.labs.useragent.util.js");
require("./goog.reflect.reflect.js");
require("./goog.string.string.js");
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

$CLJS.SHADOW_ENV.setLoaded("goog.useragent.useragent.js");

goog.provide("goog.userAgent");
goog.require("goog.labs.userAgent.browser");
goog.require("goog.labs.userAgent.engine");
goog.require("goog.labs.userAgent.platform");
goog.require("goog.labs.userAgent.util");
goog.require("goog.reflect");
goog.require("goog.string");
goog.userAgent.ASSUME_IE = goog.define("goog.userAgent.ASSUME_IE", false);
goog.userAgent.ASSUME_EDGE = goog.define("goog.userAgent.ASSUME_EDGE", false);
goog.userAgent.ASSUME_GECKO = goog.define("goog.userAgent.ASSUME_GECKO", false);
goog.userAgent.ASSUME_WEBKIT = goog.define("goog.userAgent.ASSUME_WEBKIT", false);
goog.userAgent.ASSUME_MOBILE_WEBKIT = goog.define("goog.userAgent.ASSUME_MOBILE_WEBKIT", false);
goog.userAgent.ASSUME_OPERA = goog.define("goog.userAgent.ASSUME_OPERA", false);
goog.userAgent.ASSUME_ANY_VERSION = goog.define("goog.userAgent.ASSUME_ANY_VERSION", false);
goog.userAgent.BROWSER_KNOWN_ = goog.userAgent.ASSUME_IE || goog.userAgent.ASSUME_EDGE || goog.userAgent.ASSUME_GECKO || goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_OPERA;
goog.userAgent.getUserAgentString = function() {
  return goog.labs.userAgent.util.getUserAgent();
};
goog.userAgent.getNavigatorTyped = function() {
  return goog.global["navigator"] || null;
};
goog.userAgent.getNavigator = function() {
  return goog.userAgent.getNavigatorTyped();
};
goog.userAgent.OPERA = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_OPERA : goog.labs.userAgent.browser.isOpera();
goog.userAgent.IE = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_IE : goog.labs.userAgent.browser.isIE();
goog.userAgent.EDGE = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_EDGE : goog.labs.userAgent.engine.isEdge();
goog.userAgent.EDGE_OR_IE = goog.userAgent.EDGE || goog.userAgent.IE;
goog.userAgent.GECKO = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_GECKO : goog.labs.userAgent.engine.isGecko();
goog.userAgent.WEBKIT = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_MOBILE_WEBKIT : goog.labs.userAgent.engine.isWebKit();
goog.userAgent.isMobile_ = function() {
  return goog.userAgent.WEBKIT && goog.labs.userAgent.util.matchUserAgent("Mobile");
};
goog.userAgent.MOBILE = goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.isMobile_();
goog.userAgent.SAFARI = goog.userAgent.WEBKIT;
goog.userAgent.determinePlatform_ = function() {
  var navigator = goog.userAgent.getNavigatorTyped();
  return navigator && navigator.platform || "";
};
goog.userAgent.PLATFORM = goog.userAgent.determinePlatform_();
goog.userAgent.ASSUME_MAC = goog.define("goog.userAgent.ASSUME_MAC", false);
goog.userAgent.ASSUME_WINDOWS = goog.define("goog.userAgent.ASSUME_WINDOWS", false);
goog.userAgent.ASSUME_LINUX = goog.define("goog.userAgent.ASSUME_LINUX", false);
goog.userAgent.ASSUME_X11 = goog.define("goog.userAgent.ASSUME_X11", false);
goog.userAgent.ASSUME_ANDROID = goog.define("goog.userAgent.ASSUME_ANDROID", false);
goog.userAgent.ASSUME_IPHONE = goog.define("goog.userAgent.ASSUME_IPHONE", false);
goog.userAgent.ASSUME_IPAD = goog.define("goog.userAgent.ASSUME_IPAD", false);
goog.userAgent.ASSUME_IPOD = goog.define("goog.userAgent.ASSUME_IPOD", false);
goog.userAgent.ASSUME_KAIOS = goog.define("goog.userAgent.ASSUME_KAIOS", false);
goog.userAgent.ASSUME_GO2PHONE = goog.define("goog.userAgent.ASSUME_GO2PHONE", false);
goog.userAgent.PLATFORM_KNOWN_ = goog.userAgent.ASSUME_MAC || goog.userAgent.ASSUME_WINDOWS || goog.userAgent.ASSUME_LINUX || goog.userAgent.ASSUME_X11 || goog.userAgent.ASSUME_ANDROID || goog.userAgent.ASSUME_IPHONE || goog.userAgent.ASSUME_IPAD || goog.userAgent.ASSUME_IPOD;
goog.userAgent.MAC = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_MAC : goog.labs.userAgent.platform.isMacintosh();
goog.userAgent.WINDOWS = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_WINDOWS : goog.labs.userAgent.platform.isWindows();
goog.userAgent.isLegacyLinux_ = function() {
  return goog.labs.userAgent.platform.isLinux() || goog.labs.userAgent.platform.isChromeOS();
};
goog.userAgent.LINUX = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_LINUX : goog.userAgent.isLegacyLinux_();
goog.userAgent.isX11_ = function() {
  var navigator = goog.userAgent.getNavigatorTyped();
  return !!navigator && goog.string.contains(navigator["appVersion"] || "", "X11");
};
goog.userAgent.X11 = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_X11 : goog.userAgent.isX11_();
goog.userAgent.ANDROID = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_ANDROID : goog.labs.userAgent.platform.isAndroid();
goog.userAgent.IPHONE = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPHONE : goog.labs.userAgent.platform.isIphone();
goog.userAgent.IPAD = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPAD : goog.labs.userAgent.platform.isIpad();
goog.userAgent.IPOD = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPOD : goog.labs.userAgent.platform.isIpod();
goog.userAgent.IOS = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPHONE || goog.userAgent.ASSUME_IPAD || goog.userAgent.ASSUME_IPOD : goog.labs.userAgent.platform.isIos();
goog.userAgent.KAIOS = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_KAIOS : goog.labs.userAgent.platform.isKaiOS();
goog.userAgent.GO2PHONE = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_GO2PHONE : goog.labs.userAgent.platform.isGo2Phone();
goog.userAgent.determineVersion_ = function() {
  var version = "";
  var arr = goog.userAgent.getVersionRegexResult_();
  if (arr) {
    version = arr ? arr[1] : "";
  }
  if (goog.userAgent.IE) {
    var docMode = goog.userAgent.getDocumentMode_();
    if (docMode != null && docMode > parseFloat(version)) {
      return String(docMode);
    }
  }
  return version;
};
goog.userAgent.getVersionRegexResult_ = function() {
  var userAgent = goog.userAgent.getUserAgentString();
  if (goog.userAgent.GECKO) {
    return /rv:([^\);]+)(\)|;)/.exec(userAgent);
  }
  if (goog.userAgent.EDGE) {
    return /Edge\/([\d\.]+)/.exec(userAgent);
  }
  if (goog.userAgent.IE) {
    return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(userAgent);
  }
  if (goog.userAgent.WEBKIT) {
    return /WebKit\/(\S+)/.exec(userAgent);
  }
  if (goog.userAgent.OPERA) {
    return /(?:Version)[ \/]?(\S+)/.exec(userAgent);
  }
  return undefined;
};
goog.userAgent.getDocumentMode_ = function() {
  var doc = goog.global["document"];
  return doc ? doc["documentMode"] : undefined;
};
goog.userAgent.VERSION = goog.userAgent.determineVersion_();
goog.userAgent.compare = function(v1, v2) {
  return goog.string.compareVersions(v1, v2);
};
goog.userAgent.isVersionOrHigherCache_ = {};
goog.userAgent.isVersionOrHigher = function(version) {
  return goog.userAgent.ASSUME_ANY_VERSION || goog.reflect.cache(goog.userAgent.isVersionOrHigherCache_, version, function() {
    return goog.string.compareVersions(goog.userAgent.VERSION, version) >= 0;
  });
};
goog.userAgent.isVersion = goog.userAgent.isVersionOrHigher;
goog.userAgent.isDocumentModeOrHigher = function(documentMode) {
  return Number(goog.userAgent.DOCUMENT_MODE) >= documentMode;
};
goog.userAgent.isDocumentMode = goog.userAgent.isDocumentModeOrHigher;
goog.userAgent.DOCUMENT_MODE = function() {
  var doc = goog.global["document"];
  if (!doc || !goog.userAgent.IE) {
    return undefined;
  }
  return goog.userAgent.getDocumentMode_();
}();

module.exports = goog.userAgent;

//# sourceMappingURL=goog.useragent.useragent.js.map
