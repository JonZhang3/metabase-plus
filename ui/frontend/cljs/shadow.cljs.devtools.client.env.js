var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./goog.object.object.js");
require("./clojure.string.js");
require("./cljs.tools.reader.js");
require("./cljs.pprint.js");
require("./clojure.set.js");
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

$CLJS.SHADOW_ENV.setLoaded("shadow.cljs.devtools.client.env.js");

goog.provide('shadow.cljs.devtools.client.env');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.env !== 'undefined') && (typeof shadow.cljs.devtools.client.env.active_modules_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.env.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
shadow.cljs.devtools.client.env.module_loaded = (function shadow$cljs$devtools$client$env$module_loaded(name){
return shadow.cljs.devtools.client.env.active_modules_ref.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.active_modules_ref.cljs$core$IDeref$_deref$arity$1(null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
shadow.cljs.devtools.client.env.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$env$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.env.active_modules_ref),module);
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.env !== 'undefined') && (typeof shadow.cljs.devtools.client.env.runtime_id !== 'undefined')){
} else {
shadow.cljs.devtools.client.env.runtime_id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid());
}
/**
 * @define {boolean}
 */
shadow.cljs.devtools.client.env.enabled = goog.define("shadow.cljs.devtools.client.env.enabled",false);
/**
 * @define {boolean}
 */
shadow.cljs.devtools.client.env.log = goog.define("shadow.cljs.devtools.client.env.log",true);
/**
 * @define {boolean}
 */
shadow.cljs.devtools.client.env.autoload = goog.define("shadow.cljs.devtools.client.env.autoload",true);
/**
 * @define {string}
 */
shadow.cljs.devtools.client.env.module_format = goog.define("shadow.cljs.devtools.client.env.module_format","goog");
/**
 * @define {boolean}
 */
shadow.cljs.devtools.client.env.reload_with_state = goog.define("shadow.cljs.devtools.client.env.reload_with_state",false);
/**
 * @define {string}
 */
shadow.cljs.devtools.client.env.build_id = goog.define("shadow.cljs.devtools.client.env.build_id","");
/**
 * @define {string}
 */
shadow.cljs.devtools.client.env.proc_id = goog.define("shadow.cljs.devtools.client.env.proc_id","");
/**
 * @define {number}
 */
shadow.cljs.devtools.client.env.worker_client_id = goog.define("shadow.cljs.devtools.client.env.worker_client_id",(0));
/**
 * @define {string}
 */
shadow.cljs.devtools.client.env.server_host = goog.define("shadow.cljs.devtools.client.env.server_host","");
/**
 * @define {number}
 */
shadow.cljs.devtools.client.env.server_port = goog.define("shadow.cljs.devtools.client.env.server_port",(8200));
/**
 * @define {boolean}
 */
shadow.cljs.devtools.client.env.repl_pprint = goog.define("shadow.cljs.devtools.client.env.repl_pprint",false);
/**
 * @define {boolean}
 */
shadow.cljs.devtools.client.env.use_document_host = goog.define("shadow.cljs.devtools.client.env.use_document_host",true);
/**
 * @define {boolean}
 */
shadow.cljs.devtools.client.env.use_document_protocol = goog.define("shadow.cljs.devtools.client.env.use_document_protocol",false);
/**
 * @define {string}
 */
shadow.cljs.devtools.client.env.devtools_url = goog.define("shadow.cljs.devtools.client.env.devtools_url","");
/**
 * @define {string}
 */
shadow.cljs.devtools.client.env.reload_strategy = goog.define("shadow.cljs.devtools.client.env.reload_strategy","optimized");
/**
 * @define {string}
 */
shadow.cljs.devtools.client.env.server_token = goog.define("shadow.cljs.devtools.client.env.server_token","missing");
/**
 * @define {boolean}
 */
shadow.cljs.devtools.client.env.ssl = goog.define("shadow.cljs.devtools.client.env.ssl",false);
/**
 * @define {boolean}
 */
shadow.cljs.devtools.client.env.ignore_warnings = goog.define("shadow.cljs.devtools.client.env.ignore_warnings",false);
/**
 * @define {string}
 */
shadow.cljs.devtools.client.env.log_style = goog.define("shadow.cljs.devtools.client.env.log_style","font-weight: bold;");
/**
 * @define {string}
 */
shadow.cljs.devtools.client.env.custom_notify_fn = goog.define("shadow.cljs.devtools.client.env.custom_notify_fn","");
shadow.cljs.devtools.client.env.devtools_info = (function shadow$cljs$devtools$client$env$devtools_info(){
return ({"server_port": shadow.cljs.devtools.client.env.server_port, "server_host": shadow.cljs.devtools.client.env.server_host, "build_id": shadow.cljs.devtools.client.env.build_id, "proc_id": shadow.cljs.devtools.client.env.proc_id, "runtime_id": shadow.cljs.devtools.client.env.runtime_id, "ssl": shadow.cljs.devtools.client.env.ssl});
});
shadow.cljs.devtools.client.env.get_server_protocol = (function shadow$cljs$devtools$client$env$get_server_protocol(){
if(cljs.core.truth_(((shadow.cljs.devtools.client.env.use_document_protocol)?(function (){var and__4115__auto__ = goog.global.location;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.seq(goog.global.location.protocol);
} else {
return and__4115__auto__;
}
})():false))){
return clojure.string.replace(goog.global.location.protocol,":","");
} else {
return ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null)].join('');
}
});
shadow.cljs.devtools.client.env.get_server_host = (function shadow$cljs$devtools$client$env$get_server_host(){
if(cljs.core.truth_(((shadow.cljs.devtools.client.env.use_document_host)?(function (){var and__4115__auto__ = goog.global.location;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.seq(goog.global.location.hostname);
} else {
return and__4115__auto__;
}
})():false))){
return goog.global.location.hostname;
} else {
if(cljs.core.seq(shadow.cljs.devtools.client.env.server_host)){
return shadow.cljs.devtools.client.env.server_host;
} else {
return "localhost";

}
}
});
shadow.cljs.devtools.client.env.get_url_base = (function shadow$cljs$devtools$client$env$get_url_base(){
if(cljs.core.seq(shadow.cljs.devtools.client.env.devtools_url)){
return shadow.cljs.devtools.client.env.devtools_url;
} else {
return [shadow.cljs.devtools.client.env.get_server_protocol(),"://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.get_server_host()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port)].join('');
}
});
shadow.cljs.devtools.client.env.get_ws_url_base = (function shadow$cljs$devtools$client$env$get_ws_url_base(){
return clojure.string.replace(shadow.cljs.devtools.client.env.get_url_base(),/^http/,"ws");
});
shadow.cljs.devtools.client.env.get_ws_relay_url = (function shadow$cljs$devtools$client$env$get_ws_relay_url(){
return [shadow.cljs.devtools.client.env.get_ws_url_base(),"/api/remote-relay?server-token=",shadow.cljs.devtools.client.env.server_token].join('');
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.env !== 'undefined') && (typeof shadow.cljs.devtools.client.env.reset_print_fn_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.env.reset_print_fn_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.env !== 'undefined') && (typeof shadow.cljs.devtools.client.env.was_print_newline !== 'undefined')){
} else {
shadow.cljs.devtools.client.env.was_print_newline = cljs.core._STAR_print_newline_STAR_;
}
shadow.cljs.devtools.client.env.set_print_fns_BANG_ = (function shadow$cljs$devtools$client$env$set_print_fns_BANG_(msg_fn){
var original_print_fn = cljs.core._STAR_print_fn_STAR_;
var original_print_err_fn = cljs.core._STAR_print_err_fn_STAR_;
(cljs.core._STAR_print_newline_STAR_ = true);

(cljs.core.enable_console_print_BANG_ = (function (){
return null;
}));

cljs.core.reset_BANG_(shadow.cljs.devtools.client.env.reset_print_fn_ref,(function shadow$cljs$devtools$client$env$set_print_fns_BANG__$_reset_print_fns_BANG_(){
(cljs.core._STAR_print_newline_STAR_ = shadow.cljs.devtools.client.env.was_print_newline);

cljs.core.set_print_fn_BANG_(original_print_fn);

return cljs.core.set_print_err_fn_BANG_(original_print_err_fn);
}));

cljs.core.set_print_fn_BANG_((function shadow$cljs$devtools$client$env$set_print_fns_BANG__$_repl_print_fn(s){
(msg_fn.cljs$core$IFn$_invoke$arity$2 ? msg_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"stdout","stdout",-531490018),s) : msg_fn.call(null,new cljs.core.Keyword(null,"stdout","stdout",-531490018),s));

if(cljs.core.truth_((function (){var and__4115__auto__ = original_print_fn;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(s,"\n");
} else {
return and__4115__auto__;
}
})())){
return (original_print_fn.cljs$core$IFn$_invoke$arity$1 ? original_print_fn.cljs$core$IFn$_invoke$arity$1(s) : original_print_fn.call(null,s));
} else {
return null;
}
}));

return cljs.core.set_print_err_fn_BANG_((function shadow$cljs$devtools$client$env$set_print_fns_BANG__$_repl_print_err_fn(s){
(msg_fn.cljs$core$IFn$_invoke$arity$2 ? msg_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"stderr","stderr",-1571650309),s) : msg_fn.call(null,new cljs.core.Keyword(null,"stderr","stderr",-1571650309),s));

if(cljs.core.truth_((function (){var and__4115__auto__ = original_print_err_fn;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(s,"\n");
} else {
return and__4115__auto__;
}
})())){
return (original_print_err_fn.cljs$core$IFn$_invoke$arity$1 ? original_print_err_fn.cljs$core$IFn$_invoke$arity$1(s) : original_print_err_fn.call(null,s));
} else {
return null;
}
}));
});
shadow.cljs.devtools.client.env.reset_print_fns_BANG_ = (function shadow$cljs$devtools$client$env$reset_print_fns_BANG_(){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.env.reset_print_fn_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var x = temp__5735__auto__;
(x.cljs$core$IFn$_invoke$arity$0 ? x.cljs$core$IFn$_invoke$arity$0() : x.call(null));

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.env.reset_print_fn_ref,null);
} else {
return null;
}
});
shadow.cljs.devtools.client.env.patch_goog_BANG_ = (function shadow$cljs$devtools$client$env$patch_goog_BANG_(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);

return (goog.isProvided_ = cljs.core.constantly(false));
} else {
return null;
}
});
shadow.cljs.devtools.client.env.add_warnings_to_info = (function shadow$cljs$devtools$client$env$add_warnings_to_info(p__31856){
var map__31858 = p__31856;
var map__31858__$1 = (((((!((map__31858 == null))))?(((((map__31858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31858.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31858):map__31858);
var msg = map__31858__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31858__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$env$add_warnings_to_info_$_iter__31869(s__31870){
return (new cljs.core.LazySeq(null,(function (){
var s__31870__$1 = s__31870;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__31870__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__31885 = cljs.core.first(xs__6292__auto__);
var map__31885__$1 = (((((!((map__31885 == null))))?(((((map__31885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31885.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31885):map__31885);
var src = map__31885__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31885__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31885__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__31870__$1,map__31885,map__31885__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__31858,map__31858__$1,msg,info){
return (function shadow$cljs$devtools$client$env$add_warnings_to_info_$_iter__31869_$_iter__31871(s__31872){
return (new cljs.core.LazySeq(null,((function (s__31870__$1,map__31885,map__31885__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__31858,map__31858__$1,msg,info){
return (function (){
var s__31872__$1 = s__31872;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__31872__$1);
if(temp__5735__auto____$1){
var s__31872__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__31872__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__31872__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__31874 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__31873 = (0);
while(true){
if((i__31873 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__31873);
cljs.core.chunk_append(b__31874,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__32409 = (i__31873 + (1));
i__31873 = G__32409;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31874),shadow$cljs$devtools$client$env$add_warnings_to_info_$_iter__31869_$_iter__31871(cljs.core.chunk_rest(s__31872__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31874),null);
}
} else {
var warning = cljs.core.first(s__31872__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$env$add_warnings_to_info_$_iter__31869_$_iter__31871(cljs.core.rest(s__31872__$2)));
}
} else {
return null;
}
break;
}
});})(s__31870__$1,map__31885,map__31885__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__31858,map__31858__$1,msg,info))
,null,null));
});})(s__31870__$1,map__31885,map__31885__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__31858,map__31858__$1,msg,info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$env$add_warnings_to_info_$_iter__31869(cljs.core.rest(s__31870__$1)));
} else {
var G__32423 = cljs.core.rest(s__31870__$1);
s__31870__$1 = G__32423;
continue;
}
} else {
var G__32424 = cljs.core.rest(s__31870__$1);
s__31870__$1 = G__32424;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
return cljs.core.assoc_in(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null),warnings);
});
shadow.cljs.devtools.client.env.custom_notify_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"build-complete","build-complete",-501868472),null,new cljs.core.Keyword(null,"build-init","build-init",-1115755563),null,new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466),null,new cljs.core.Keyword(null,"build-start","build-start",-959649480),null], null), null);
shadow.cljs.devtools.client.env.run_custom_notify_BANG_ = (function shadow$cljs$devtools$client$env$run_custom_notify_BANG_(msg){
if(cljs.core.seq(shadow.cljs.devtools.client.env.custom_notify_fn)){
var fn = goog.getObjectByName(shadow.cljs.devtools.client.env.custom_notify_fn,$CLJS);
if((!(cljs.core.fn_QMARK_(fn)))){
return console.warn("couldn't find custom :build-notify",shadow.cljs.devtools.client.env.custom_notify_fn);
} else {
try{return (fn.cljs$core$IFn$_invoke$arity$1 ? fn.cljs$core$IFn$_invoke$arity$1(msg) : fn.call(null,msg));
}catch (e31945){var e = e31945;
console.error("Failed to run custom :build-notify",shadow.cljs.devtools.client.env.custom_notify_fn);

return console.error(e);
}}
} else {
return null;
}
});
shadow.cljs.devtools.client.env.make_task_fn = (function shadow$cljs$devtools$client$env$make_task_fn(p__31968,p__31969){
var map__31975 = p__31968;
var map__31975__$1 = (((((!((map__31975 == null))))?(((((map__31975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31975.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31975):map__31975);
var log_missing_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31975__$1,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765));
var log_call_async = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31975__$1,new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192));
var log_call = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31975__$1,new cljs.core.Keyword(null,"log-call","log-call",412404391));
var map__31977 = p__31969;
var map__31977__$1 = (((((!((map__31977 == null))))?(((((map__31977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31977.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31977):map__31977);
var fn_sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31977__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31977__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var async = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31977__$1,new cljs.core.Keyword(null,"async","async",1050769601));
return (function (next){
try{var fn_obj = goog.getObjectByName(fn_str,$CLJS);
if((fn_obj == null)){
if(cljs.core.truth_(log_missing_fn)){
(log_missing_fn.cljs$core$IFn$_invoke$arity$1 ? log_missing_fn.cljs$core$IFn$_invoke$arity$1(fn_sym) : log_missing_fn.call(null,fn_sym));
} else {
}

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
} else {
if(cljs.core.truth_(async)){
if(cljs.core.truth_(log_call_async)){
(log_call_async.cljs$core$IFn$_invoke$arity$1 ? log_call_async.cljs$core$IFn$_invoke$arity$1(fn_sym) : log_call_async.call(null,fn_sym));
} else {
}

return (fn_obj.cljs$core$IFn$_invoke$arity$1 ? fn_obj.cljs$core$IFn$_invoke$arity$1(next) : fn_obj.call(null,next));
} else {
if(cljs.core.truth_(log_call)){
(log_call.cljs$core$IFn$_invoke$arity$1 ? log_call.cljs$core$IFn$_invoke$arity$1(fn_sym) : log_call.call(null,fn_sym));
} else {
}

(fn_obj.cljs$core$IFn$_invoke$arity$0 ? fn_obj.cljs$core$IFn$_invoke$arity$0() : fn_obj.call(null));

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));

}
}
}catch (e32034){var ex = e32034;
console.warn("error when calling lifecycle function",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym),ex);

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
}});
});
shadow.cljs.devtools.client.env.do_js_reload_STAR_ = (function shadow$cljs$devtools$client$env$do_js_reload_STAR_(failure_fn,p__32053){
var vec__32058 = p__32053;
var seq__32059 = cljs.core.seq(vec__32058);
var first__32060 = cljs.core.first(seq__32059);
var seq__32059__$1 = cljs.core.next(seq__32059);
var task = first__32060;
var remaining_tasks = seq__32059__$1;
if(cljs.core.truth_(task)){
try{var G__32064 = (function (){
return (shadow.cljs.devtools.client.env.do_js_reload_STAR_.cljs$core$IFn$_invoke$arity$2 ? shadow.cljs.devtools.client.env.do_js_reload_STAR_.cljs$core$IFn$_invoke$arity$2(failure_fn,remaining_tasks) : shadow.cljs.devtools.client.env.do_js_reload_STAR_.call(null,failure_fn,remaining_tasks));
});
return (task.cljs$core$IFn$_invoke$arity$1 ? task.cljs$core$IFn$_invoke$arity$1(G__32064) : task.call(null,G__32064));
}catch (e32062){var e = e32062;
return (failure_fn.cljs$core$IFn$_invoke$arity$3 ? failure_fn.cljs$core$IFn$_invoke$arity$3(e,task,remaining_tasks) : failure_fn.call(null,e,task,remaining_tasks));
}} else {
return null;
}
});
/**
 * should pass the :build-complete message and an additional callback
 * which performs the actual loading of the code (sync)
 * will call all before/after callbacks in order
 */
shadow.cljs.devtools.client.env.do_js_reload = (function shadow$cljs$devtools$client$env$do_js_reload(var_args){
var G__32082 = arguments.length;
switch (G__32082) {
case 2:
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$2 = (function (msg,load_code_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$3(msg,load_code_fn,(function (){
return null;
}));
}));

(shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$3 = (function (msg,load_code_fn,complete_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(msg,load_code_fn,complete_fn,(function (error,task,remaining){
return console.warn("JS reload failed",error);
}));
}));

(shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4 = (function (p__32105,load_code_fn,complete_fn,failure_fn){
var map__32106 = p__32105;
var map__32106__$1 = (((((!((map__32106 == null))))?(((((map__32106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32106.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32106):map__32106);
var msg = map__32106__$1;
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32106__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var load_tasks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__32072_SHARP_){
return shadow.cljs.devtools.client.env.make_task_fn(msg,p1__32072_SHARP_);
}),new cljs.core.Keyword(null,"before-load","before-load",-2060117064).cljs$core$IFn$_invoke$arity$1(reload_info)))),(function (next){
(load_code_fn.cljs$core$IFn$_invoke$arity$0 ? load_code_fn.cljs$core$IFn$_invoke$arity$0() : load_code_fn.call(null));

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__32074_SHARP_){
return shadow.cljs.devtools.client.env.make_task_fn(msg,p1__32074_SHARP_);
})),new cljs.core.Keyword(null,"after-load","after-load",-1278503285).cljs$core$IFn$_invoke$arity$1(reload_info)),(function (next){
(complete_fn.cljs$core$IFn$_invoke$arity$0 ? complete_fn.cljs$core$IFn$_invoke$arity$0() : complete_fn.call(null));

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
}));
return shadow.cljs.devtools.client.env.do_js_reload_STAR_(failure_fn,load_tasks);
}));

(shadow.cljs.devtools.client.env.do_js_reload.cljs$lang$maxFixedArity = 4);

shadow.cljs.devtools.client.env.before_load_src = (function shadow$cljs$devtools$client$env$before_load_src(p__32126){
var map__32128 = p__32126;
var map__32128__$1 = (((((!((map__32128 == null))))?(((((map__32128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32128):map__32128);
var src = map__32128__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32128__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32128__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cljs","cljs",1492417629),type)){
var seq__32139 = cljs.core.seq(goog.global.SHADOW_NS_RESET);
var chunk__32140 = null;
var count__32141 = (0);
var i__32142 = (0);
while(true){
if((i__32142 < count__32141)){
var x = chunk__32140.cljs$core$IIndexed$_nth$arity$2(null,i__32142);
(x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(ns) : x.call(null,ns));


var G__32511 = seq__32139;
var G__32512 = chunk__32140;
var G__32513 = count__32141;
var G__32514 = (i__32142 + (1));
seq__32139 = G__32511;
chunk__32140 = G__32512;
count__32141 = G__32513;
i__32142 = G__32514;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32139);
if(temp__5735__auto__){
var seq__32139__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32139__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32139__$1);
var G__32516 = cljs.core.chunk_rest(seq__32139__$1);
var G__32517 = c__4556__auto__;
var G__32518 = cljs.core.count(c__4556__auto__);
var G__32519 = (0);
seq__32139 = G__32516;
chunk__32140 = G__32517;
count__32141 = G__32518;
i__32142 = G__32519;
continue;
} else {
var x = cljs.core.first(seq__32139__$1);
(x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(ns) : x.call(null,ns));


var G__32521 = cljs.core.next(seq__32139__$1);
var G__32522 = null;
var G__32523 = (0);
var G__32524 = (0);
seq__32139 = G__32521;
chunk__32140 = G__32522;
count__32141 = G__32523;
i__32142 = G__32524;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
shadow.cljs.devtools.client.env.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$env$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.env.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.env.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$env$src_is_loaded_QMARK_(p__32177){
var map__32178 = p__32177;
var map__32178__$1 = (((((!((map__32178 == null))))?(((((map__32178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32178.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32178):map__32178);
var src = map__32178__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32178__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32178__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4126__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.goog_base_rc,resource_id);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return shadow.cljs.devtools.client.env.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.env.prefilter_sources = (function shadow$cljs$devtools$client$env$prefilter_sources(reload_info,sources){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__32187){
var map__32191 = p__32187;
var map__32191__$1 = (((((!((map__32191 == null))))?(((((map__32191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32191):map__32191);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32191__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__32197){
var map__32198 = p__32197;
var map__32198__$1 = (((((!((map__32198 == null))))?(((((map__32198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32198.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32198):map__32198);
var rc = map__32198__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32198__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.env.module_is_active_QMARK_(module)));
}),sources));
});
shadow.cljs.devtools.client.env.filter_sources_to_get_optimized = (function shadow$cljs$devtools$client$env$filter_sources_to_get_optimized(p__32209,reload_info){
var map__32210 = p__32209;
var map__32210__$1 = (((((!((map__32210 == null))))?(((((map__32210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32210):map__32210);
var info = map__32210__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32210__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32210__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__32218){
var map__32219 = p__32218;
var map__32219__$1 = (((((!((map__32219 == null))))?(((((map__32219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32219.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32219):map__32219);
var src = map__32219__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32219__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32219__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
}),shadow.cljs.devtools.client.env.prefilter_sources(reload_info,sources)));
});
shadow.cljs.devtools.client.env.filter_sources_to_get_full = (function shadow$cljs$devtools$client$env$filter_sources_to_get_full(p__32224,reload_info){
var map__32226 = p__32224;
var map__32226__$1 = (((((!((map__32226 == null))))?(((((map__32226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32226.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32226):map__32226);
var info = map__32226__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32226__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32226__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var affected = cljs.core.PersistentHashSet.EMPTY;
var sources_to_get = cljs.core.PersistentVector.EMPTY;
var G__32236 = shadow.cljs.devtools.client.env.prefilter_sources(reload_info,sources);
var vec__32237 = G__32236;
var seq__32238 = cljs.core.seq(vec__32237);
var first__32239 = cljs.core.first(seq__32238);
var seq__32238__$1 = cljs.core.next(seq__32238);
var src = first__32239;
var more = seq__32238__$1;
var affected__$1 = affected;
var sources_to_get__$1 = sources_to_get;
var G__32236__$1 = G__32236;
while(true){
var affected__$2 = affected__$1;
var sources_to_get__$2 = sources_to_get__$1;
var vec__32326 = G__32236__$1;
var seq__32327 = cljs.core.seq(vec__32326);
var first__32328 = cljs.core.first(seq__32327);
var seq__32327__$1 = cljs.core.next(seq__32327);
var src__$1 = first__32328;
var more__$1 = seq__32327__$1;
if(cljs.core.not(src__$1)){
return sources_to_get__$2;
} else {
var map__32329 = src__$1;
var map__32329__$1 = (((((!((map__32329 == null))))?(((((map__32329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32329.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32329):map__32329);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32329__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32329__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32329__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32329__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var should_reload_QMARK_ = (function (){var or__4126__auto__ = cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = cljs.core.not(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src__$1));
if(or__4126__auto____$1){
return or__4126__auto____$1;
} else {
var and__4115__auto__ = (function (){var or__4126__auto____$2 = cljs.core.contains_QMARK_(compiled,resource_id);
if(or__4126__auto____$2){
return or__4126__auto____$2;
} else {
return cljs.core.some(affected__$2,deps);
}
})();
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src__$1));
} else {
return and__4115__auto__;
}
}
}
})();
if(cljs.core.not(should_reload_QMARK_)){
var G__32584 = affected__$2;
var G__32585 = sources_to_get__$2;
var G__32586 = more__$1;
affected__$1 = G__32584;
sources_to_get__$1 = G__32585;
G__32236__$1 = G__32586;
continue;
} else {
var G__32587 = clojure.set.union.cljs$core$IFn$_invoke$arity$2(affected__$2,provides);
var G__32588 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sources_to_get__$2,src__$1);
var G__32589 = more__$1;
affected__$1 = G__32587;
sources_to_get__$1 = G__32588;
G__32236__$1 = G__32589;
continue;
}
}
break;
}
});
shadow.cljs.devtools.client.env.filter_reload_sources = (function shadow$cljs$devtools$client$env$filter_reload_sources(info,reload_info){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("full",shadow.cljs.devtools.client.env.reload_strategy)){
return shadow.cljs.devtools.client.env.filter_sources_to_get_full(info,reload_info);
} else {
return shadow.cljs.devtools.client.env.filter_sources_to_get_optimized(info,reload_info);
}
});
Object.defineProperty(module.exports, "get_url_base", { enumerable: false, get: function() { return shadow.cljs.devtools.client.env.get_url_base; } });
Object.defineProperty(module.exports, "server_token", { enumerable: false, get: function() { return shadow.cljs.devtools.client.env.server_token; } });
Object.defineProperty(module.exports, "devtools_url", { enumerable: false, get: function() { return shadow.cljs.devtools.client.env.devtools_url; } });
Object.defineProperty(module.exports, "do_js_reload_STAR_", { enumerable: false, get: function() { return shadow.cljs.devtools.client.env.do_js_reload_STAR_; } });
Object.defineProperty(module.exports, "ignore_warnings", { enumerable: false, get: function() { return shadow.cljs.devtools.client.env.ignore_warnings; } });
Object.defineProperty(module.exports, "enabled", { enumerable: false, get: function() { return shadow.cljs.devtools.client.env.enabled; } });
Object.defineProperty(module.exports, "log", { enumerable: false, get: function() { return shadow.cljs.devtools.client.env.log; } });
Object.defineProperty(module.exports, "server_host", { enumerable: false, get: function() { return shadow.cljs.devtools.client.env.server_host; } });
Object.defineProperty(module.exports, "autoload", { enumerable: false, get: function() { return shadow.cljs.devtools.client.env.autoload; } });
Object.defineProperty(module.exports, "runtime_id", { enumerable: false, get: function() { return shadow.cljs.devtools.client.env.runtime_id; } });
Object.defineProperty(module.exports, "get_server_host", { enumerable: false, get: function() { return shadow.cljs.devtools.client.env.get_server_host; } });
Object.defineProperty(module.exports, "active_modules_ref", { enumerable: false, get: function() { return shadow.cljs.devtools.client.env.active_modules_ref; } });
Object.defineProperty(module.exports, "filter_sources_to_get_full", { enumerable: false, get: function() { return shadow.cljs.devtools.client.env.filter_sources_to_get_full; } });
Object.defineProperty(module.exports, "goog_base_rc", { enumerable: false, get: function() { return shadow.cljs.devtools.client.env.goog_base_rc; } });
Object.defineProperty(module.exports, "ssl", { enumerable: false, get: function() { return shadow.cljs.devtools.client.env.ssl; } });
Object.defineProperty(module.exports, "get_ws_relay_url", { enumerable: false, get: function() { return shadow.cljs.devtools.client.env.get_ws_relay_url; } });
Object.defineProperty(module.exports, "proc_id", { enumerable: false, get: function() { return shadow.cljs.devtools.client.env.proc_id; } });
Object.defineProperty(module.exports, "goog_is_loaded_QMARK_", { enumerable: false, get: function() { return shadow.cljs.devtools.client.env.goog_is_loaded_QMARK_; } });
Object.defineProperty(module.exports, "repl_pprint", { enumerable: false, get: function() { return shadow.cljs.devtools.client.env.repl_pprint; } });
Object.defineProperty(module.exports, "custom_notify_types", { enumerable: false, get: function() { return shadow.cljs.devtools.client.env.custom_notify_types; } });
Object.defineProperty(module.exports, "make_task_fn", { enumerable: false, get: function() { return shadow.cljs.devtools.client.env.make_task_fn; } });
Object.defineProperty(module.exports, "worker_client_id", { enumerable: false, get: function() { return shadow.cljs.devtools.client.env.worker_client_id; } });
Object.defineProperty(module.exports, "log_style", { enumerable: false, get: function() { return shadow.cljs.devtools.client.env.log_style; } });
Object.defineProperty(module.exports, "module_loaded", { enumerable: false, get: function() { return shadow.cljs.devtools.client.env.module_loaded; } });
Object.defineProperty(module.exports, "reload_with_state", { enumerable: false, get: function() { return shadow.cljs.devtools.client.env.reload_with_state; } });
Object.defineProperty(module.exports, "devtools_info", { enumerable: false, get: function() { return shadow.cljs.devtools.client.env.devtools_info; } });
Object.defineProperty(module.exports, "filter_sources_to_get_optimized", { enumerable: false, get: function() { return shadow.cljs.devtools.client.env.filter_sources_to_get_optimized; } });
Object.defineProperty(module.exports, "get_server_protocol", { enumerable: false, get: function() { return shadow.cljs.devtools.client.env.get_server_protocol; } });
Object.defineProperty(module.exports, "get_ws_url_base", { enumerable: false, get: function() { return shadow.cljs.devtools.client.env.get_ws_url_base; } });
Object.defineProperty(module.exports, "patch_goog_BANG_", { enumerable: false, get: function() { return shadow.cljs.devtools.client.env.patch_goog_BANG_; } });
Object.defineProperty(module.exports, "module_is_active_QMARK_", { enumerable: false, get: function() { return shadow.cljs.devtools.client.env.module_is_active_QMARK_; } });
Object.defineProperty(module.exports, "server_port", { enumerable: false, get: function() { return shadow.cljs.devtools.client.env.server_port; } });
Object.defineProperty(module.exports, "custom_notify_fn", { enumerable: false, get: function() { return shadow.cljs.devtools.client.env.custom_notify_fn; } });
Object.defineProperty(module.exports, "reload_strategy", { enumerable: false, get: function() { return shadow.cljs.devtools.client.env.reload_strategy; } });
Object.defineProperty(module.exports, "build_id", { enumerable: false, get: function() { return shadow.cljs.devtools.client.env.build_id; } });
Object.defineProperty(module.exports, "module_format", { enumerable: false, get: function() { return shadow.cljs.devtools.client.env.module_format; } });
Object.defineProperty(module.exports, "use_document_protocol", { enumerable: false, get: function() { return shadow.cljs.devtools.client.env.use_document_protocol; } });
Object.defineProperty(module.exports, "before_load_src", { enumerable: false, get: function() { return shadow.cljs.devtools.client.env.before_load_src; } });
Object.defineProperty(module.exports, "filter_reload_sources", { enumerable: false, get: function() { return shadow.cljs.devtools.client.env.filter_reload_sources; } });
Object.defineProperty(module.exports, "run_custom_notify_BANG_", { enumerable: false, get: function() { return shadow.cljs.devtools.client.env.run_custom_notify_BANG_; } });
Object.defineProperty(module.exports, "reset_print_fn_ref", { enumerable: false, get: function() { return shadow.cljs.devtools.client.env.reset_print_fn_ref; } });
Object.defineProperty(module.exports, "src_is_loaded_QMARK_", { enumerable: false, get: function() { return shadow.cljs.devtools.client.env.src_is_loaded_QMARK_; } });
Object.defineProperty(module.exports, "do_js_reload", { enumerable: false, get: function() { return shadow.cljs.devtools.client.env.do_js_reload; } });
Object.defineProperty(module.exports, "prefilter_sources", { enumerable: false, get: function() { return shadow.cljs.devtools.client.env.prefilter_sources; } });
Object.defineProperty(module.exports, "was_print_newline", { enumerable: false, get: function() { return shadow.cljs.devtools.client.env.was_print_newline; } });
Object.defineProperty(module.exports, "set_print_fns_BANG_", { enumerable: false, get: function() { return shadow.cljs.devtools.client.env.set_print_fns_BANG_; } });
Object.defineProperty(module.exports, "reset_print_fns_BANG_", { enumerable: false, get: function() { return shadow.cljs.devtools.client.env.reset_print_fns_BANG_; } });
Object.defineProperty(module.exports, "add_warnings_to_info", { enumerable: false, get: function() { return shadow.cljs.devtools.client.env.add_warnings_to_info; } });
Object.defineProperty(module.exports, "use_document_host", { enumerable: false, get: function() { return shadow.cljs.devtools.client.env.use_document_host; } });
//# sourceMappingURL=shadow.cljs.devtools.client.env.js.map
