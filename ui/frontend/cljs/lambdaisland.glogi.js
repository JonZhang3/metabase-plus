var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./goog.log.log.js");
require("./goog.debug.logger.js");
require("./goog.debug.console.js");
require("./goog.array.array.js");
require("./clojure.string.js");
require("./goog.object.object.js");
require("./goog.debug.fancywindow.js");
require("./goog.debug.divconsole.js");
require("./goog.debug.logrecord.js");
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

$CLJS.SHADOW_ENV.setLoaded("lambdaisland.glogi.js");

goog.provide('lambdaisland.glogi');
lambdaisland.glogi.goog_setLevel = (function lambdaisland$glogi$goog_setLevel(logger,level){
if((typeof goog !== 'undefined') && (typeof goog.log !== 'undefined') && (typeof goog.log.setLevel !== 'undefined')){
return goog.log.setLevel(logger,level);
} else {
return logger.setLevel(level);
}
});
lambdaisland.glogi.goog_logRecord = (function lambdaisland$glogi$goog_logRecord(logger,record){
if((typeof goog !== 'undefined') && (typeof goog.log !== 'undefined') && (typeof goog.log.publishLogRecord !== 'undefined')){
return goog.log.publishLogRecord(logger,record);
} else {
return logger.logRecord(record);
}
});
lambdaisland.glogi.goog_addHandler = (function lambdaisland$glogi$goog_addHandler(logger,handler){
if((typeof goog !== 'undefined') && (typeof goog.log !== 'undefined') && (typeof goog.log.addHandler !== 'undefined')){
return goog.log.addHandler(logger,handler);
} else {
return logger.addHandler(handler);
}
});
lambdaisland.glogi.goog_removeHandler = (function lambdaisland$glogi$goog_removeHandler(logger,handler){
if((typeof goog !== 'undefined') && (typeof goog.log !== 'undefined') && (typeof goog.log.removeHandler !== 'undefined')){
return goog.log.removeHandler(logger,handler);
} else {
return logger.removeHandler(handler);
}
});
lambdaisland.glogi.logger_handlers_prop = "__glogi_handlers__";
lambdaisland.glogi.name_str = (function lambdaisland$glogi$name_str(x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("glogi","root","glogi/root",-77414841),x)){
return "";
} else {
if(typeof x === 'string'){
return x;
} else {
if(cljs.core.simple_ident_QMARK_(x)){
return cljs.core.name(x);
} else {
if(cljs.core.qualified_ident_QMARK_(x)){
return [cljs.core.namespace(x),"/",cljs.core.name(x)].join('');
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);

}
}
}
}
});
/**
 * Get a logger by name, and optionally set its level. Name can be a string
 *   keyword, or symbol. The special keyword :glogi/root returns the root logger.
 */
lambdaisland.glogi.logger = (function lambdaisland$glogi$logger(var_args){
var G__41453 = arguments.length;
switch (G__41453) {
case 1:
return lambdaisland.glogi.logger.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return lambdaisland.glogi.logger.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lambdaisland.glogi.logger.cljs$core$IFn$_invoke$arity$1 = (function (n){
return goog.log.getLogger(lambdaisland.glogi.name_str(n));
}));

(lambdaisland.glogi.logger.cljs$core$IFn$_invoke$arity$2 = (function (n,level){
return goog.log.getLogger(lambdaisland.glogi.name_str(n),level);
}));

(lambdaisland.glogi.logger.cljs$lang$maxFixedArity = 2);

lambdaisland.glogi.root_logger = lambdaisland.glogi.logger.cljs$core$IFn$_invoke$arity$1("");
lambdaisland.glogi.levels = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"shout","shout",186018337),new cljs.core.Keyword(null,"finest","finest",-1359568890),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"warn","warn",-436710552),new cljs.core.Keyword(null,"trace","trace",-1082747415),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"all","all",892129742),new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.Keyword(null,"severe","severe",-1364500238),new cljs.core.Keyword(null,"off","off",606440789),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"fine","fine",-873037193),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"finer","finer",974902846)],[goog.debug.Logger.Level.SHOUT,goog.debug.Logger.Level.FINEST,goog.debug.Logger.Level.CONFIG,goog.debug.Logger.Level.WARNING,goog.debug.Logger.Level.FINER,goog.debug.Logger.Level.FINE,goog.debug.Logger.Level.ALL,goog.debug.Logger.Level.WARNING,goog.debug.Logger.Level.SEVERE,goog.debug.Logger.Level.OFF,goog.debug.Logger.Level.INFO,goog.debug.Logger.Level.FINE,goog.debug.Logger.Level.SEVERE,goog.debug.Logger.Level.FINER]);
lambdaisland.glogi.level = (function lambdaisland$glogi$level(lvl){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(lambdaisland.glogi.levels,lvl);
});
/**
 * Get the numeric value of a log level (keyword).
 */
lambdaisland.glogi.level_value = (function lambdaisland$glogi$level_value(lvl){
return lambdaisland.glogi.level(lvl).value;
});
lambdaisland.glogi.make_log_record = (function lambdaisland$glogi$make_log_record(level,message,name,exception){
var record = (new goog.debug.LogRecord(level,message,name));
if(cljs.core.truth_(exception)){
record.setException(exception);
} else {
}

return record;
});
/**
 * Output a log message to the given logger, optionally with an exception to be
 *   logged.
 */
lambdaisland.glogi.log = (function lambdaisland$glogi$log(var_args){
var G__41463 = arguments.length;
switch (G__41463) {
case 3:
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$3 = (function (name,lvl,message){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(name,lvl,message,null);
}));

(lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4 = (function (name,lvl,message,exception){
if(cljs.core.truth_(goog.log.ENABLED)){
var temp__5735__auto__ = lambdaisland.glogi.logger.cljs$core$IFn$_invoke$arity$1(name);
if(cljs.core.truth_(temp__5735__auto__)){
var l = temp__5735__auto__;
return lambdaisland.glogi.goog_logRecord(l,lambdaisland.glogi.make_log_record(lambdaisland.glogi.level(lvl),message,name,exception));
} else {
return null;
}
} else {
return null;
}
}));

(lambdaisland.glogi.log.cljs$lang$maxFixedArity = 4);

/**
 * Set the level (a keyword) of the given logger, identified by name.
 */
lambdaisland.glogi.set_level = (function lambdaisland$glogi$set_level(name,lvl){
if(cljs.core.contains_QMARK_(lambdaisland.glogi.levels,lvl)){
} else {
throw (new Error("Assert failed: (contains? levels lvl)"));
}

var G__41472 = lambdaisland.glogi.logger.cljs$core$IFn$_invoke$arity$1(name);
if((G__41472 == null)){
return null;
} else {
return lambdaisland.glogi.goog_setLevel(G__41472,lambdaisland.glogi.level(lvl));
}
});
/**
 * Convenience function for setting several levels at one.
 * 
 *   Takes a map of logger name => level keyword. The logger name can be a string,
 *   keyword, or symbol. The keyword :glogi/root refers to the root logger and is
 *   equivalent to using an empty string.
 * 
 *   This function is exported so it is still available in optimized builds to set
 *   levels from the javascript console. In this case use nested arrays and
 *   strings. Use an empty string for the root logger.
 * 
 *   ``` javascript
 *   lambdaisland.glogi.set_levels([["" "debug"] ["lambdaisland" "trace"]])
 *   ```
 *   
 */
lambdaisland.glogi.set_levels = (function lambdaisland$glogi$set_levels(lvls){
var seq__41475 = cljs.core.seq(lvls);
var chunk__41477 = null;
var count__41478 = (0);
var i__41479 = (0);
while(true){
if((i__41479 < count__41478)){
var vec__41501 = chunk__41477.cljs$core$IIndexed$_nth$arity$2(null,i__41479);
var logger = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41501,(0),null);
var level = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41501,(1),null);
var level_41610__$1 = ((typeof level === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(level):level);
lambdaisland.glogi.set_level(logger,level_41610__$1);


var G__41611 = seq__41475;
var G__41612 = chunk__41477;
var G__41613 = count__41478;
var G__41614 = (i__41479 + (1));
seq__41475 = G__41611;
chunk__41477 = G__41612;
count__41478 = G__41613;
i__41479 = G__41614;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41475);
if(temp__5735__auto__){
var seq__41475__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41475__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__41475__$1);
var G__41621 = cljs.core.chunk_rest(seq__41475__$1);
var G__41622 = c__4556__auto__;
var G__41623 = cljs.core.count(c__4556__auto__);
var G__41624 = (0);
seq__41475 = G__41621;
chunk__41477 = G__41622;
count__41478 = G__41623;
i__41479 = G__41624;
continue;
} else {
var vec__41516 = cljs.core.first(seq__41475__$1);
var logger = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41516,(0),null);
var level = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41516,(1),null);
var level_41630__$1 = ((typeof level === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(level):level);
lambdaisland.glogi.set_level(logger,level_41630__$1);


var G__41632 = cljs.core.next(seq__41475__$1);
var G__41633 = null;
var G__41634 = (0);
var G__41635 = (0);
seq__41475 = G__41632;
chunk__41477 = G__41633;
count__41478 = G__41634;
i__41479 = G__41635;
continue;
}
} else {
return null;
}
}
break;
}
});
goog.exportSymbol('lambdaisland.glogi.set_levels', lambdaisland.glogi.set_levels);
/**
 * Log to the browser console. This uses goog.debug.Console directly,
 *   use [lambdaisland.glogi.console/install!] for a version that plays nicely with
 *   cljs-devtools.
 */
lambdaisland.glogi.enable_console_logging_BANG_ = (function lambdaisland$glogi$enable_console_logging_BANG_(){
var temp__5735__auto___41643 = goog.debug.Console.instance;
if(cljs.core.truth_(temp__5735__auto___41643)){
var instance_41645 = temp__5735__auto___41643;
instance_41645.setCapturing(true);

var instance_41649__$1 = (new goog.debug.Console());
(goog.debug.Console.instance = instance_41649__$1);

instance_41649__$1.setCapturing();
} else {
}

return null;
});
/**
 * Log to the browser console if the browser location contains Debug=true.
 */
lambdaisland.glogi.console_autoinstall_BANG_ = (function lambdaisland$glogi$console_autoinstall_BANG_(){
goog.debug.Console.autoInstall();

return null;
});
/**
 * Pop up a browser window which will display log messages. Returns the FancyWindow instance.
 */
lambdaisland.glogi.popup_logger_window_BANG_ = (function lambdaisland$glogi$popup_logger_window_BANG_(){
var G__41532 = (new goog.debug.FancyWindow());
G__41532.setEnabled(true);

return G__41532;
});
/**
 * Log messages to an element on the page. Returns the DivConsole instance.
 */
lambdaisland.glogi.log_to_div_BANG_ = (function lambdaisland$glogi$log_to_div_BANG_(element){
var G__41533 = (new goog.debug.DivConsole(element));
G__41533.setCapturing(true);

return G__41533;
});
lambdaisland.glogi.logger_glogi_handlers = (function lambdaisland$glogi$logger_glogi_handlers(logger){
return goog.object.get(logger,lambdaisland.glogi.logger_handlers_prop);
});
lambdaisland.glogi.swap_handlers_BANG_ = (function lambdaisland$glogi$swap_handlers_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___41654 = arguments.length;
var i__4737__auto___41655 = (0);
while(true){
if((i__4737__auto___41655 < len__4736__auto___41654)){
args__4742__auto__.push((arguments[i__4737__auto___41655]));

var G__41656 = (i__4737__auto___41655 + (1));
i__4737__auto___41655 = G__41656;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return lambdaisland.glogi.swap_handlers_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(lambdaisland.glogi.swap_handlers_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (logger,f,args){
return goog.object.set(logger,lambdaisland.glogi.logger_handlers_prop,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,lambdaisland.glogi.logger_glogi_handlers(logger),args));
}));

(lambdaisland.glogi.swap_handlers_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(lambdaisland.glogi.swap_handlers_BANG_.cljs$lang$applyTo = (function (seq41535){
var G__41536 = cljs.core.first(seq41535);
var seq41535__$1 = cljs.core.next(seq41535);
var G__41537 = cljs.core.first(seq41535__$1);
var seq41535__$2 = cljs.core.next(seq41535__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41536,G__41537,seq41535__$2);
}));

/**
 * Add a log handler to the given logger, or to the root logger if no logger is
 *   specified. The handler is a function which receives a map as its argument.
 * 
 *   A given handler-fn is only added to a given logger once, even when called
 *   repeatedly.
 */
lambdaisland.glogi.add_handler = (function lambdaisland$glogi$add_handler(var_args){
var G__41550 = arguments.length;
switch (G__41550) {
case 1:
return lambdaisland.glogi.add_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return lambdaisland.glogi.add_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lambdaisland.glogi.add_handler.cljs$core$IFn$_invoke$arity$1 = (function (handler_fn){
return lambdaisland.glogi.add_handler.cljs$core$IFn$_invoke$arity$2("",handler_fn);
}));

(lambdaisland.glogi.add_handler.cljs$core$IFn$_invoke$arity$2 = (function (name,handler_fn){
var logger = lambdaisland.glogi.logger.cljs$core$IFn$_invoke$arity$1(name);
var log_record_handler = (function (record){
var G__41555 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"sequenceNumber","sequenceNumber",-543983615),record.sequenceNumber_,new cljs.core.Keyword(null,"time","time",1385887882),record.time_,new cljs.core.Keyword(null,"level","level",1290497552),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(record.level_.name)),new cljs.core.Keyword(null,"message","message",-406056002),record.msg_,new cljs.core.Keyword(null,"logger-name","logger-name",-1988126927),record.loggerName_,new cljs.core.Keyword(null,"exception","exception",-335277064),record.exception_], null);
return (handler_fn.cljs$core$IFn$_invoke$arity$1 ? handler_fn.cljs$core$IFn$_invoke$arity$1(G__41555) : handler_fn.call(null,G__41555));
});
if(cljs.core.truth_(logger)){
var temp__5735__auto___41669 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(lambdaisland.glogi.logger_glogi_handlers(logger),handler_fn);
if(cljs.core.truth_(temp__5735__auto___41669)){
var handler_41671 = temp__5735__auto___41669;
lambdaisland.glogi.goog_removeHandler(logger,handler_41671);
} else {
}

lambdaisland.glogi.swap_handlers_BANG_.cljs$core$IFn$_invoke$arity$variadic(logger,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([handler_fn,log_record_handler], 0));

var G__41561 = logger;
if((G__41561 == null)){
return null;
} else {
return lambdaisland.glogi.goog_addHandler(G__41561,log_record_handler);
}
} else {
return null;
}
}));

(lambdaisland.glogi.add_handler.cljs$lang$maxFixedArity = 2);

lambdaisland.glogi.remove_handler = (function lambdaisland$glogi$remove_handler(var_args){
var G__41563 = arguments.length;
switch (G__41563) {
case 1:
return lambdaisland.glogi.remove_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return lambdaisland.glogi.remove_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lambdaisland.glogi.remove_handler.cljs$core$IFn$_invoke$arity$1 = (function (handler_fn){
return lambdaisland.glogi.remove_handler.cljs$core$IFn$_invoke$arity$2("",handler_fn);
}));

(lambdaisland.glogi.remove_handler.cljs$core$IFn$_invoke$arity$2 = (function (name,handler_fn){
var logger = lambdaisland.glogi.logger.cljs$core$IFn$_invoke$arity$1(name);
if(cljs.core.truth_(logger)){
var temp__5735__auto___41677 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(lambdaisland.glogi.logger_glogi_handlers(logger),handler_fn);
if(cljs.core.truth_(temp__5735__auto___41677)){
var handler_41682 = temp__5735__auto___41677;
lambdaisland.glogi.goog_removeHandler(logger,handler_41682);
} else {
}

return lambdaisland.glogi.swap_handlers_BANG_.cljs$core$IFn$_invoke$arity$variadic(logger,cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([handler_fn], 0));
} else {
return null;
}
}));

(lambdaisland.glogi.remove_handler.cljs$lang$maxFixedArity = 2);

lambdaisland.glogi.add_handler_once = lambdaisland.glogi.add_handler;
Object.defineProperty(module.exports, "remove_handler", { enumerable: false, get: function() { return lambdaisland.glogi.remove_handler; } });
Object.defineProperty(module.exports, "logger_glogi_handlers", { enumerable: false, get: function() { return lambdaisland.glogi.logger_glogi_handlers; } });
Object.defineProperty(module.exports, "goog_addHandler", { enumerable: false, get: function() { return lambdaisland.glogi.goog_addHandler; } });
Object.defineProperty(module.exports, "log", { enumerable: false, get: function() { return lambdaisland.glogi.log; } });
Object.defineProperty(module.exports, "level_value", { enumerable: false, get: function() { return lambdaisland.glogi.level_value; } });
Object.defineProperty(module.exports, "set_levels", { enumerable: true, get: function() { return lambdaisland.glogi.set_levels; } });
Object.defineProperty(module.exports, "console_autoinstall_BANG_", { enumerable: false, get: function() { return lambdaisland.glogi.console_autoinstall_BANG_; } });
Object.defineProperty(module.exports, "root_logger", { enumerable: false, get: function() { return lambdaisland.glogi.root_logger; } });
Object.defineProperty(module.exports, "goog_setLevel", { enumerable: false, get: function() { return lambdaisland.glogi.goog_setLevel; } });
Object.defineProperty(module.exports, "level", { enumerable: false, get: function() { return lambdaisland.glogi.level; } });
Object.defineProperty(module.exports, "goog_logRecord", { enumerable: false, get: function() { return lambdaisland.glogi.goog_logRecord; } });
Object.defineProperty(module.exports, "levels", { enumerable: false, get: function() { return lambdaisland.glogi.levels; } });
Object.defineProperty(module.exports, "add_handler_once", { enumerable: false, get: function() { return lambdaisland.glogi.add_handler_once; } });
Object.defineProperty(module.exports, "enable_console_logging_BANG_", { enumerable: false, get: function() { return lambdaisland.glogi.enable_console_logging_BANG_; } });
Object.defineProperty(module.exports, "logger_handlers_prop", { enumerable: false, get: function() { return lambdaisland.glogi.logger_handlers_prop; } });
Object.defineProperty(module.exports, "swap_handlers_BANG_", { enumerable: false, get: function() { return lambdaisland.glogi.swap_handlers_BANG_; } });
Object.defineProperty(module.exports, "set_level", { enumerable: false, get: function() { return lambdaisland.glogi.set_level; } });
Object.defineProperty(module.exports, "add_handler", { enumerable: false, get: function() { return lambdaisland.glogi.add_handler; } });
Object.defineProperty(module.exports, "name_str", { enumerable: false, get: function() { return lambdaisland.glogi.name_str; } });
Object.defineProperty(module.exports, "logger", { enumerable: false, get: function() { return lambdaisland.glogi.logger; } });
Object.defineProperty(module.exports, "make_log_record", { enumerable: false, get: function() { return lambdaisland.glogi.make_log_record; } });
Object.defineProperty(module.exports, "log_to_div_BANG_", { enumerable: false, get: function() { return lambdaisland.glogi.log_to_div_BANG_; } });
Object.defineProperty(module.exports, "goog_removeHandler", { enumerable: false, get: function() { return lambdaisland.glogi.goog_removeHandler; } });
Object.defineProperty(module.exports, "popup_logger_window_BANG_", { enumerable: false, get: function() { return lambdaisland.glogi.popup_logger_window_BANG_; } });
//# sourceMappingURL=lambdaisland.glogi.js.map
