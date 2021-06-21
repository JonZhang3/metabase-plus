var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./lambdaisland.glogi.js");
require("./lambdaisland.glogi.print.js");
require("./goog.object.object.js");
require("./goog.debug.logbuffer.js");
require("./goog.debug.console.js");
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

$CLJS.SHADOW_ENV.setLoaded("lambdaisland.glogi.console.js");

goog.provide('lambdaisland.glogi.console');
/**
 * @define {string}
 */
lambdaisland.glogi.console.colorize = goog.define("lambdaisland.glogi.console.colorize","auto");
lambdaisland.glogi.console.log_method = (function lambdaisland$glogi$console$log_method(level){
var pred__41856 = (function (p1__41850_SHARP_,p2__41849_SHARP_){
return (p2__41849_SHARP_ >= p1__41850_SHARP_);
});
var expr__41857 = lambdaisland.glogi.level_value(level);
if(pred__41856(lambdaisland.glogi.level_value(new cljs.core.Keyword(null,"severe","severe",-1364500238)),expr__41857)){
return "error";
} else {
if(pred__41856(lambdaisland.glogi.level_value(new cljs.core.Keyword(null,"warning","warning",-1685650671)),expr__41857)){
return "warn";
} else {
if(pred__41856(lambdaisland.glogi.level_value(new cljs.core.Keyword(null,"info","info",-317069002)),expr__41857)){
return "info";
} else {
if(pred__41856(lambdaisland.glogi.level_value(new cljs.core.Keyword(null,"config","config",994861415)),expr__41857)){
return "log";
} else {
return "log";
}
}
}
}
});
lambdaisland.glogi.console.format_raw = (function lambdaisland$glogi$console$format_raw(p__41860){
var map__41862 = p__41860;
var map__41862__$1 = (((((!((map__41862 == null))))?(((((map__41862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41862.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41862):map__41862);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41862__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var logger_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41862__$1,new cljs.core.Keyword(null,"logger-name","logger-name",-1988126927));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41862__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var exception = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41862__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(logger_name),"]"].join(''),message], null);
});
lambdaisland.glogi.console.format_css = (function lambdaisland$glogi$console$format_css(p__41870){
var map__41871 = p__41870;
var map__41871__$1 = (((((!((map__41871 == null))))?(((((map__41871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41871.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41871):map__41871);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41871__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var logger_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41871__$1,new cljs.core.Keyword(null,"logger-name","logger-name",-1988126927));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41871__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var exception = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41871__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
return lambdaisland.glogi.print.format(level,logger_name,message);
});
lambdaisland.glogi.console.format_plain = (function lambdaisland$glogi$console$format_plain(p__41879){
var map__41882 = p__41879;
var map__41882__$1 = (((((!((map__41882 == null))))?(((((map__41882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41882.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41882):map__41882);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41882__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var logger_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41882__$1,new cljs.core.Keyword(null,"logger-name","logger-name",-1988126927));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41882__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var exception = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41882__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(logger_name),"]"].join(''),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([message], 0))], null);
});
lambdaisland.glogi.console.make_console_log = (function lambdaisland$glogi$console$make_console_log(format){
return (function (p__41884){
var map__41885 = p__41884;
var map__41885__$1 = (((((!((map__41885 == null))))?(((((map__41885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41885.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41885):map__41885);
var record = map__41885__$1;
var logger_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41885__$1,new cljs.core.Keyword(null,"logger-name","logger-name",-1988126927));
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41885__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var exception = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41885__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var method_name = lambdaisland.glogi.console.log_method(level);
var method = (function (){var or__4126__auto__ = goog.object.get(console,method_name);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return console.log;
}
})();
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(method,(format.cljs$core$IFn$_invoke$arity$1 ? format.cljs$core$IFn$_invoke$arity$1(record) : format.call(null,record)));

if(cljs.core.truth_(exception)){
var G__41887 = ["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(logger_name),"]"].join('');
var G__41888 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(exception);
var G__41889 = "\n";
var G__41890 = exception.stack;
return (method.cljs$core$IFn$_invoke$arity$4 ? method.cljs$core$IFn$_invoke$arity$4(G__41887,G__41888,G__41889,G__41890) : method.call(null,G__41887,G__41888,G__41889,G__41890));
} else {
return null;
}
});
});
if((typeof lambdaisland !== 'undefined') && (typeof lambdaisland.glogi !== 'undefined') && (typeof lambdaisland.glogi.console !== 'undefined') && (typeof lambdaisland.glogi.console.console_log_raw !== 'undefined')){
} else {
lambdaisland.glogi.console.console_log_raw = lambdaisland.glogi.console.make_console_log(lambdaisland.glogi.console.format_raw);
}
if((typeof lambdaisland !== 'undefined') && (typeof lambdaisland.glogi !== 'undefined') && (typeof lambdaisland.glogi.console !== 'undefined') && (typeof lambdaisland.glogi.console.console_log_css !== 'undefined')){
} else {
lambdaisland.glogi.console.console_log_css = lambdaisland.glogi.console.make_console_log(lambdaisland.glogi.console.format_css);
}
if((typeof lambdaisland !== 'undefined') && (typeof lambdaisland.glogi !== 'undefined') && (typeof lambdaisland.glogi.console !== 'undefined') && (typeof lambdaisland.glogi.console.console_log_plain !== 'undefined')){
} else {
lambdaisland.glogi.console.console_log_plain = lambdaisland.glogi.console.make_console_log(lambdaisland.glogi.console.format_plain);
}
if((typeof lambdaisland !== 'undefined') && (typeof lambdaisland.glogi !== 'undefined') && (typeof lambdaisland.glogi.console !== 'undefined') && (typeof lambdaisland.glogi.console.format !== 'undefined')){
} else {
lambdaisland.glogi.console.format = lambdaisland.glogi.console.format_plain;
}
if((typeof lambdaisland !== 'undefined') && (typeof lambdaisland.glogi !== 'undefined') && (typeof lambdaisland.glogi.console !== 'undefined') && (typeof lambdaisland.glogi.console.console_log !== 'undefined')){
} else {
lambdaisland.glogi.console.console_log = lambdaisland.glogi.console.console_log_plain;
}
lambdaisland.glogi.console.devtools_installed_QMARK_ = (function lambdaisland$glogi$console$devtools_installed_QMARK_(){
if((typeof devtools !== 'undefined') && (typeof devtools.core !== 'undefined') && (typeof devtools.core.installed_QMARK_ !== 'undefined')){
return devtools.core.installed_QMARK_();
} else {
return false;
}
});
lambdaisland.glogi.console.browser_QMARK_ = (function lambdaisland$glogi$console$browser_QMARK_(){
return (typeof window !== 'undefined');
});
lambdaisland.glogi.console.ie_QMARK_ = (function lambdaisland$glogi$console$ie_QMARK_(){
if(lambdaisland.glogi.console.browser_QMARK_()){
if((typeof window !== 'undefined') && (typeof window.navigator !== 'undefined')){
if((typeof window !== 'undefined') && (typeof window.navigator !== 'undefined') && (typeof window.navigator.userAgent !== 'undefined')){
var or__4126__auto__ = window.navigator.userAgent.includes("MSIE");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return window.navigator.userAgent.includes("Trident");
}
} else {
return false;
}
} else {
return false;
}
} else {
return false;
}
});
lambdaisland.glogi.console.select_handler = (function lambdaisland$glogi$console$select_handler(){
var G__41897 = lambdaisland.glogi.console.colorize;
switch (G__41897) {
case "auto":
if(cljs.core.truth_(lambdaisland.glogi.console.devtools_installed_QMARK_())){
return lambdaisland.glogi.console.console_log_raw;
} else {
if(((lambdaisland.glogi.console.browser_QMARK_()) && (cljs.core.not(lambdaisland.glogi.console.ie_QMARK_())))){
return lambdaisland.glogi.console.console_log_css;
} else {
return lambdaisland.glogi.console.console_log_plain;

}
}

break;
case "raw":
return lambdaisland.glogi.console.console_log_raw;

break;
case "true":
return lambdaisland.glogi.console.console_log_css;

break;
case "false":
return lambdaisland.glogi.console.console_log_plain;

break;
default:
throw (new Error(["No matching clause: ",G__41897].join('')));

}
});
lambdaisland.glogi.console.install_BANG_ = (function lambdaisland$glogi$console$install_BANG_(){
var temp__5735__auto___41916 = goog.debug.Console.instance;
if(cljs.core.truth_(temp__5735__auto___41916)){
var instance_41917 = temp__5735__auto___41916;
instance_41917.setCapturing(false);
} else {
}

var G__41905 = lambdaisland.glogi.console.select_handler();
return (lambdaisland.glogi.add_handler_once.cljs$core$IFn$_invoke$arity$1 ? lambdaisland.glogi.add_handler_once.cljs$core$IFn$_invoke$arity$1(G__41905) : lambdaisland.glogi.add_handler_once.call(null,G__41905));
});
Object.defineProperty(module.exports, "format_css", { enumerable: false, get: function() { return lambdaisland.glogi.console.format_css; } });
Object.defineProperty(module.exports, "console_log_css", { enumerable: false, get: function() { return lambdaisland.glogi.console.console_log_css; } });
Object.defineProperty(module.exports, "ie_QMARK_", { enumerable: false, get: function() { return lambdaisland.glogi.console.ie_QMARK_; } });
Object.defineProperty(module.exports, "console_log", { enumerable: false, get: function() { return lambdaisland.glogi.console.console_log; } });
Object.defineProperty(module.exports, "format", { enumerable: false, get: function() { return lambdaisland.glogi.console.format; } });
Object.defineProperty(module.exports, "console_log_plain", { enumerable: false, get: function() { return lambdaisland.glogi.console.console_log_plain; } });
Object.defineProperty(module.exports, "format_plain", { enumerable: false, get: function() { return lambdaisland.glogi.console.format_plain; } });
Object.defineProperty(module.exports, "install_BANG_", { enumerable: false, get: function() { return lambdaisland.glogi.console.install_BANG_; } });
Object.defineProperty(module.exports, "select_handler", { enumerable: false, get: function() { return lambdaisland.glogi.console.select_handler; } });
Object.defineProperty(module.exports, "colorize", { enumerable: false, get: function() { return lambdaisland.glogi.console.colorize; } });
Object.defineProperty(module.exports, "devtools_installed_QMARK_", { enumerable: false, get: function() { return lambdaisland.glogi.console.devtools_installed_QMARK_; } });
Object.defineProperty(module.exports, "make_console_log", { enumerable: false, get: function() { return lambdaisland.glogi.console.make_console_log; } });
Object.defineProperty(module.exports, "console_log_raw", { enumerable: false, get: function() { return lambdaisland.glogi.console.console_log_raw; } });
Object.defineProperty(module.exports, "browser_QMARK_", { enumerable: false, get: function() { return lambdaisland.glogi.console.browser_QMARK_; } });
Object.defineProperty(module.exports, "log_method", { enumerable: false, get: function() { return lambdaisland.glogi.console.log_method; } });
Object.defineProperty(module.exports, "format_raw", { enumerable: false, get: function() { return lambdaisland.glogi.console.format_raw; } });
//# sourceMappingURL=lambdaisland.glogi.console.js.map
