var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.string.js");
require("./goog.dom.dom.js");
require("./goog.useragent.useragent.js");
require("./goog.useragent.product.js");
require("./goog.uri.uri.js");
require("./shadow.json.js");
require("./shadow.cljs.devtools.client.env.js");
require("./shadow.cljs.devtools.client.console.js");
require("./shadow.cljs.devtools.client.hud.js");
require("./shadow.cljs.devtools.client.websocket.js");
require("./shadow.cljs.devtools.client.shared.js");
require("./shadow.remote.runtime.api.js");
require("./shadow.remote.runtime.shared.js");
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

$CLJS.SHADOW_ENV.setLoaded("shadow.cljs.devtools.client.browser.js");

goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40074 = arguments.length;
var i__4737__auto___40075 = (0);
while(true){
if((i__4737__auto___40075 < len__4736__auto___40074)){
args__4742__auto__.push((arguments[i__4737__auto___40075]));

var G__40077 = (i__4737__auto___40075 + (1));
i__4737__auto___40075 = G__40077;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq39542){
var G__39543 = cljs.core.first(seq39542);
var seq39542__$1 = cljs.core.next(seq39542);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39543,seq39542__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__39550 = cljs.core.seq(sources);
var chunk__39551 = null;
var count__39552 = (0);
var i__39553 = (0);
while(true){
if((i__39553 < count__39552)){
var map__39586 = chunk__39551.cljs$core$IIndexed$_nth$arity$2(null,i__39553);
var map__39586__$1 = (((((!((map__39586 == null))))?(((((map__39586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39586.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39586):map__39586);
var src = map__39586__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39586__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39586__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39586__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39586__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e39589){var e_40085 = e39589;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_40085);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_40085.message)].join('')));
}

var G__40086 = seq__39550;
var G__40087 = chunk__39551;
var G__40088 = count__39552;
var G__40089 = (i__39553 + (1));
seq__39550 = G__40086;
chunk__39551 = G__40087;
count__39552 = G__40088;
i__39553 = G__40089;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39550);
if(temp__5735__auto__){
var seq__39550__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39550__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__39550__$1);
var G__40091 = cljs.core.chunk_rest(seq__39550__$1);
var G__40092 = c__4556__auto__;
var G__40093 = cljs.core.count(c__4556__auto__);
var G__40094 = (0);
seq__39550 = G__40091;
chunk__39551 = G__40092;
count__39552 = G__40093;
i__39553 = G__40094;
continue;
} else {
var map__39602 = cljs.core.first(seq__39550__$1);
var map__39602__$1 = (((((!((map__39602 == null))))?(((((map__39602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39602.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39602):map__39602);
var src = map__39602__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39602__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39602__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39602__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39602__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e39613){var e_40098 = e39613;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_40098);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_40098.message)].join('')));
}

var G__40100 = cljs.core.next(seq__39550__$1);
var G__40101 = null;
var G__40102 = (0);
var G__40103 = (0);
seq__39550 = G__40100;
chunk__39551 = G__40101;
count__39552 = G__40102;
i__39553 = G__40103;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__39638 = cljs.core.seq(js_requires);
var chunk__39639 = null;
var count__39640 = (0);
var i__39641 = (0);
while(true){
if((i__39641 < count__39640)){
var js_ns = chunk__39639.cljs$core$IIndexed$_nth$arity$2(null,i__39641);
var require_str_40108 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_40108);


var G__40109 = seq__39638;
var G__40110 = chunk__39639;
var G__40111 = count__39640;
var G__40112 = (i__39641 + (1));
seq__39638 = G__40109;
chunk__39639 = G__40110;
count__39640 = G__40111;
i__39641 = G__40112;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39638);
if(temp__5735__auto__){
var seq__39638__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39638__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__39638__$1);
var G__40115 = cljs.core.chunk_rest(seq__39638__$1);
var G__40116 = c__4556__auto__;
var G__40117 = cljs.core.count(c__4556__auto__);
var G__40118 = (0);
seq__39638 = G__40115;
chunk__39639 = G__40116;
count__39640 = G__40117;
i__39641 = G__40118;
continue;
} else {
var js_ns = cljs.core.first(seq__39638__$1);
var require_str_40120 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_40120);


var G__40121 = cljs.core.next(seq__39638__$1);
var G__40122 = null;
var G__40123 = (0);
var G__40124 = (0);
seq__39638 = G__40121;
chunk__39639 = G__40122;
count__39640 = G__40123;
i__39641 = G__40124;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__39663){
var map__39667 = p__39663;
var map__39667__$1 = (((((!((map__39667 == null))))?(((((map__39667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39667.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39667):map__39667);
var msg = map__39667__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39667__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39667__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39673(s__39674){
return (new cljs.core.LazySeq(null,(function (){
var s__39674__$1 = s__39674;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__39674__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__39683 = cljs.core.first(xs__6292__auto__);
var map__39683__$1 = (((((!((map__39683 == null))))?(((((map__39683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39683.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39683):map__39683);
var src = map__39683__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39683__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39683__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__39674__$1,map__39683,map__39683__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__39667,map__39667__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39673_$_iter__39675(s__39676){
return (new cljs.core.LazySeq(null,((function (s__39674__$1,map__39683,map__39683__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__39667,map__39667__$1,msg,info,reload_info){
return (function (){
var s__39676__$1 = s__39676;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__39676__$1);
if(temp__5735__auto____$1){
var s__39676__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__39676__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__39676__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__39678 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__39677 = (0);
while(true){
if((i__39677 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__39677);
cljs.core.chunk_append(b__39678,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__40134 = (i__39677 + (1));
i__39677 = G__40134;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39678),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39673_$_iter__39675(cljs.core.chunk_rest(s__39676__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39678),null);
}
} else {
var warning = cljs.core.first(s__39676__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39673_$_iter__39675(cljs.core.rest(s__39676__$2)));
}
} else {
return null;
}
break;
}
});})(s__39674__$1,map__39683,map__39683__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__39667,map__39667__$1,msg,info,reload_info))
,null,null));
});})(s__39674__$1,map__39683,map__39683__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__39667,map__39667__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39673(cljs.core.rest(s__39674__$1)));
} else {
var G__40138 = cljs.core.rest(s__39674__$1);
s__39674__$1 = G__40138;
continue;
}
} else {
var G__40139 = cljs.core.rest(s__39674__$1);
s__39674__$1 = G__40139;
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
if(shadow.cljs.devtools.client.env.log){
var seq__39709_40140 = cljs.core.seq(warnings);
var chunk__39710_40141 = null;
var count__39711_40142 = (0);
var i__39712_40143 = (0);
while(true){
if((i__39712_40143 < count__39711_40142)){
var map__39727_40145 = chunk__39710_40141.cljs$core$IIndexed$_nth$arity$2(null,i__39712_40143);
var map__39727_40146__$1 = (((((!((map__39727_40145 == null))))?(((((map__39727_40145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39727_40145.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39727_40145):map__39727_40145);
var w_40147 = map__39727_40146__$1;
var msg_40148__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39727_40146__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_40149 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39727_40146__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_40150 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39727_40146__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_40151 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39727_40146__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_40151)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_40149),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_40150),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_40148__$1)].join(''));


var G__40157 = seq__39709_40140;
var G__40158 = chunk__39710_40141;
var G__40159 = count__39711_40142;
var G__40160 = (i__39712_40143 + (1));
seq__39709_40140 = G__40157;
chunk__39710_40141 = G__40158;
count__39711_40142 = G__40159;
i__39712_40143 = G__40160;
continue;
} else {
var temp__5735__auto___40162 = cljs.core.seq(seq__39709_40140);
if(temp__5735__auto___40162){
var seq__39709_40163__$1 = temp__5735__auto___40162;
if(cljs.core.chunked_seq_QMARK_(seq__39709_40163__$1)){
var c__4556__auto___40164 = cljs.core.chunk_first(seq__39709_40163__$1);
var G__40166 = cljs.core.chunk_rest(seq__39709_40163__$1);
var G__40167 = c__4556__auto___40164;
var G__40168 = cljs.core.count(c__4556__auto___40164);
var G__40169 = (0);
seq__39709_40140 = G__40166;
chunk__39710_40141 = G__40167;
count__39711_40142 = G__40168;
i__39712_40143 = G__40169;
continue;
} else {
var map__39736_40170 = cljs.core.first(seq__39709_40163__$1);
var map__39736_40171__$1 = (((((!((map__39736_40170 == null))))?(((((map__39736_40170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39736_40170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39736_40170):map__39736_40170);
var w_40172 = map__39736_40171__$1;
var msg_40173__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39736_40171__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_40174 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39736_40171__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_40175 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39736_40171__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_40176 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39736_40171__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_40176)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_40174),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_40175),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_40173__$1)].join(''));


var G__40177 = cljs.core.next(seq__39709_40163__$1);
var G__40178 = null;
var G__40179 = (0);
var G__40180 = (0);
seq__39709_40140 = G__40177;
chunk__39710_40141 = G__40178;
count__39711_40142 = G__40179;
i__39712_40143 = G__40180;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__39660_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__39660_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__39755){
var map__39756 = p__39755;
var map__39756__$1 = (((((!((map__39756 == null))))?(((((map__39756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39756.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39756):map__39756);
var msg = map__39756__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39756__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__39760 = cljs.core.seq(updates);
var chunk__39764 = null;
var count__39765 = (0);
var i__39766 = (0);
while(true){
if((i__39766 < count__39765)){
var path = chunk__39764.cljs$core$IIndexed$_nth$arity$2(null,i__39766);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__39883_40189 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__39889_40190 = null;
var count__39890_40191 = (0);
var i__39891_40192 = (0);
while(true){
if((i__39891_40192 < count__39890_40191)){
var node_40195 = chunk__39889_40190.cljs$core$IIndexed$_nth$arity$2(null,i__39891_40192);
if(cljs.core.not(node_40195.shadow$old)){
var path_match_40197 = shadow.cljs.devtools.client.browser.match_paths(node_40195.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40197)){
var new_link_40198 = (function (){var G__39918 = node_40195.cloneNode(true);
G__39918.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40197),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39918;
})();
(node_40195.shadow$old = true);

(new_link_40198.onload = ((function (seq__39883_40189,chunk__39889_40190,count__39890_40191,i__39891_40192,seq__39760,chunk__39764,count__39765,i__39766,new_link_40198,path_match_40197,node_40195,path,map__39756,map__39756__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_40195);
});})(seq__39883_40189,chunk__39889_40190,count__39890_40191,i__39891_40192,seq__39760,chunk__39764,count__39765,i__39766,new_link_40198,path_match_40197,node_40195,path,map__39756,map__39756__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40197], 0));

goog.dom.insertSiblingAfter(new_link_40198,node_40195);


var G__40199 = seq__39883_40189;
var G__40200 = chunk__39889_40190;
var G__40201 = count__39890_40191;
var G__40202 = (i__39891_40192 + (1));
seq__39883_40189 = G__40199;
chunk__39889_40190 = G__40200;
count__39890_40191 = G__40201;
i__39891_40192 = G__40202;
continue;
} else {
var G__40203 = seq__39883_40189;
var G__40205 = chunk__39889_40190;
var G__40206 = count__39890_40191;
var G__40207 = (i__39891_40192 + (1));
seq__39883_40189 = G__40203;
chunk__39889_40190 = G__40205;
count__39890_40191 = G__40206;
i__39891_40192 = G__40207;
continue;
}
} else {
var G__40208 = seq__39883_40189;
var G__40209 = chunk__39889_40190;
var G__40210 = count__39890_40191;
var G__40211 = (i__39891_40192 + (1));
seq__39883_40189 = G__40208;
chunk__39889_40190 = G__40209;
count__39890_40191 = G__40210;
i__39891_40192 = G__40211;
continue;
}
} else {
var temp__5735__auto___40212 = cljs.core.seq(seq__39883_40189);
if(temp__5735__auto___40212){
var seq__39883_40213__$1 = temp__5735__auto___40212;
if(cljs.core.chunked_seq_QMARK_(seq__39883_40213__$1)){
var c__4556__auto___40214 = cljs.core.chunk_first(seq__39883_40213__$1);
var G__40215 = cljs.core.chunk_rest(seq__39883_40213__$1);
var G__40216 = c__4556__auto___40214;
var G__40217 = cljs.core.count(c__4556__auto___40214);
var G__40218 = (0);
seq__39883_40189 = G__40215;
chunk__39889_40190 = G__40216;
count__39890_40191 = G__40217;
i__39891_40192 = G__40218;
continue;
} else {
var node_40219 = cljs.core.first(seq__39883_40213__$1);
if(cljs.core.not(node_40219.shadow$old)){
var path_match_40220 = shadow.cljs.devtools.client.browser.match_paths(node_40219.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40220)){
var new_link_40221 = (function (){var G__39930 = node_40219.cloneNode(true);
G__39930.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40220),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39930;
})();
(node_40219.shadow$old = true);

(new_link_40221.onload = ((function (seq__39883_40189,chunk__39889_40190,count__39890_40191,i__39891_40192,seq__39760,chunk__39764,count__39765,i__39766,new_link_40221,path_match_40220,node_40219,seq__39883_40213__$1,temp__5735__auto___40212,path,map__39756,map__39756__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_40219);
});})(seq__39883_40189,chunk__39889_40190,count__39890_40191,i__39891_40192,seq__39760,chunk__39764,count__39765,i__39766,new_link_40221,path_match_40220,node_40219,seq__39883_40213__$1,temp__5735__auto___40212,path,map__39756,map__39756__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40220], 0));

goog.dom.insertSiblingAfter(new_link_40221,node_40219);


var G__40222 = cljs.core.next(seq__39883_40213__$1);
var G__40223 = null;
var G__40224 = (0);
var G__40225 = (0);
seq__39883_40189 = G__40222;
chunk__39889_40190 = G__40223;
count__39890_40191 = G__40224;
i__39891_40192 = G__40225;
continue;
} else {
var G__40226 = cljs.core.next(seq__39883_40213__$1);
var G__40227 = null;
var G__40228 = (0);
var G__40229 = (0);
seq__39883_40189 = G__40226;
chunk__39889_40190 = G__40227;
count__39890_40191 = G__40228;
i__39891_40192 = G__40229;
continue;
}
} else {
var G__40230 = cljs.core.next(seq__39883_40213__$1);
var G__40231 = null;
var G__40232 = (0);
var G__40233 = (0);
seq__39883_40189 = G__40230;
chunk__39889_40190 = G__40231;
count__39890_40191 = G__40232;
i__39891_40192 = G__40233;
continue;
}
}
} else {
}
}
break;
}


var G__40234 = seq__39760;
var G__40235 = chunk__39764;
var G__40236 = count__39765;
var G__40237 = (i__39766 + (1));
seq__39760 = G__40234;
chunk__39764 = G__40235;
count__39765 = G__40236;
i__39766 = G__40237;
continue;
} else {
var G__40238 = seq__39760;
var G__40239 = chunk__39764;
var G__40240 = count__39765;
var G__40241 = (i__39766 + (1));
seq__39760 = G__40238;
chunk__39764 = G__40239;
count__39765 = G__40240;
i__39766 = G__40241;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39760);
if(temp__5735__auto__){
var seq__39760__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39760__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__39760__$1);
var G__40243 = cljs.core.chunk_rest(seq__39760__$1);
var G__40244 = c__4556__auto__;
var G__40245 = cljs.core.count(c__4556__auto__);
var G__40246 = (0);
seq__39760 = G__40243;
chunk__39764 = G__40244;
count__39765 = G__40245;
i__39766 = G__40246;
continue;
} else {
var path = cljs.core.first(seq__39760__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__39942_40248 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__39946_40249 = null;
var count__39947_40250 = (0);
var i__39948_40251 = (0);
while(true){
if((i__39948_40251 < count__39947_40250)){
var node_40256 = chunk__39946_40249.cljs$core$IIndexed$_nth$arity$2(null,i__39948_40251);
if(cljs.core.not(node_40256.shadow$old)){
var path_match_40257 = shadow.cljs.devtools.client.browser.match_paths(node_40256.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40257)){
var new_link_40258 = (function (){var G__39960 = node_40256.cloneNode(true);
G__39960.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40257),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39960;
})();
(node_40256.shadow$old = true);

(new_link_40258.onload = ((function (seq__39942_40248,chunk__39946_40249,count__39947_40250,i__39948_40251,seq__39760,chunk__39764,count__39765,i__39766,new_link_40258,path_match_40257,node_40256,path,seq__39760__$1,temp__5735__auto__,map__39756,map__39756__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_40256);
});})(seq__39942_40248,chunk__39946_40249,count__39947_40250,i__39948_40251,seq__39760,chunk__39764,count__39765,i__39766,new_link_40258,path_match_40257,node_40256,path,seq__39760__$1,temp__5735__auto__,map__39756,map__39756__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40257], 0));

goog.dom.insertSiblingAfter(new_link_40258,node_40256);


var G__40260 = seq__39942_40248;
var G__40261 = chunk__39946_40249;
var G__40262 = count__39947_40250;
var G__40263 = (i__39948_40251 + (1));
seq__39942_40248 = G__40260;
chunk__39946_40249 = G__40261;
count__39947_40250 = G__40262;
i__39948_40251 = G__40263;
continue;
} else {
var G__40264 = seq__39942_40248;
var G__40265 = chunk__39946_40249;
var G__40266 = count__39947_40250;
var G__40267 = (i__39948_40251 + (1));
seq__39942_40248 = G__40264;
chunk__39946_40249 = G__40265;
count__39947_40250 = G__40266;
i__39948_40251 = G__40267;
continue;
}
} else {
var G__40268 = seq__39942_40248;
var G__40269 = chunk__39946_40249;
var G__40270 = count__39947_40250;
var G__40271 = (i__39948_40251 + (1));
seq__39942_40248 = G__40268;
chunk__39946_40249 = G__40269;
count__39947_40250 = G__40270;
i__39948_40251 = G__40271;
continue;
}
} else {
var temp__5735__auto___40272__$1 = cljs.core.seq(seq__39942_40248);
if(temp__5735__auto___40272__$1){
var seq__39942_40273__$1 = temp__5735__auto___40272__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39942_40273__$1)){
var c__4556__auto___40274 = cljs.core.chunk_first(seq__39942_40273__$1);
var G__40275 = cljs.core.chunk_rest(seq__39942_40273__$1);
var G__40276 = c__4556__auto___40274;
var G__40277 = cljs.core.count(c__4556__auto___40274);
var G__40278 = (0);
seq__39942_40248 = G__40275;
chunk__39946_40249 = G__40276;
count__39947_40250 = G__40277;
i__39948_40251 = G__40278;
continue;
} else {
var node_40280 = cljs.core.first(seq__39942_40273__$1);
if(cljs.core.not(node_40280.shadow$old)){
var path_match_40281 = shadow.cljs.devtools.client.browser.match_paths(node_40280.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40281)){
var new_link_40283 = (function (){var G__39965 = node_40280.cloneNode(true);
G__39965.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40281),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39965;
})();
(node_40280.shadow$old = true);

(new_link_40283.onload = ((function (seq__39942_40248,chunk__39946_40249,count__39947_40250,i__39948_40251,seq__39760,chunk__39764,count__39765,i__39766,new_link_40283,path_match_40281,node_40280,seq__39942_40273__$1,temp__5735__auto___40272__$1,path,seq__39760__$1,temp__5735__auto__,map__39756,map__39756__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_40280);
});})(seq__39942_40248,chunk__39946_40249,count__39947_40250,i__39948_40251,seq__39760,chunk__39764,count__39765,i__39766,new_link_40283,path_match_40281,node_40280,seq__39942_40273__$1,temp__5735__auto___40272__$1,path,seq__39760__$1,temp__5735__auto__,map__39756,map__39756__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40281], 0));

goog.dom.insertSiblingAfter(new_link_40283,node_40280);


var G__40284 = cljs.core.next(seq__39942_40273__$1);
var G__40285 = null;
var G__40286 = (0);
var G__40287 = (0);
seq__39942_40248 = G__40284;
chunk__39946_40249 = G__40285;
count__39947_40250 = G__40286;
i__39948_40251 = G__40287;
continue;
} else {
var G__40288 = cljs.core.next(seq__39942_40273__$1);
var G__40289 = null;
var G__40290 = (0);
var G__40291 = (0);
seq__39942_40248 = G__40288;
chunk__39946_40249 = G__40289;
count__39947_40250 = G__40290;
i__39948_40251 = G__40291;
continue;
}
} else {
var G__40292 = cljs.core.next(seq__39942_40273__$1);
var G__40293 = null;
var G__40294 = (0);
var G__40295 = (0);
seq__39942_40248 = G__40292;
chunk__39946_40249 = G__40293;
count__39947_40250 = G__40294;
i__39948_40251 = G__40295;
continue;
}
}
} else {
}
}
break;
}


var G__40296 = cljs.core.next(seq__39760__$1);
var G__40297 = null;
var G__40298 = (0);
var G__40299 = (0);
seq__39760 = G__40296;
chunk__39764 = G__40297;
count__39765 = G__40298;
i__39766 = G__40299;
continue;
} else {
var G__40300 = cljs.core.next(seq__39760__$1);
var G__40301 = null;
var G__40302 = (0);
var G__40303 = (0);
seq__39760 = G__40300;
chunk__39764 = G__40301;
count__39765 = G__40302;
i__39766 = G__40303;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__39970){
var map__39971 = p__39970;
var map__39971__$1 = (((((!((map__39971 == null))))?(((((map__39971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39971.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39971):map__39971);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39971__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__39982){
var map__39983 = p__39982;
var map__39983__$1 = (((((!((map__39983 == null))))?(((((map__39983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39983.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39983):map__39983);
var _ = map__39983__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39983__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__39988,done,error){
var map__39989 = p__39988;
var map__39989__$1 = (((((!((map__39989 == null))))?(((((map__39989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39989.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39989):map__39989);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39989__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__39993,done,error){
var map__39994 = p__39993;
var map__39994__$1 = (((((!((map__39994 == null))))?(((((map__39994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39994.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39994):map__39994);
var msg = map__39994__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39994__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39994__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39994__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__39998){
var map__39999 = p__39998;
var map__39999__$1 = (((((!((map__39999 == null))))?(((((map__39999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39999.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39999):map__39999);
var src = map__39999__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39999__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__40005 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__40005) : done.call(null,G__40005));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__40011){
var map__40012 = p__40011;
var map__40012__$1 = (((((!((map__40012 == null))))?(((((map__40012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40012.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40012):map__40012);
var msg__$1 = map__40012__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40012__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e40018){var ex = e40018;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__40020){
var map__40022 = p__40020;
var map__40022__$1 = (((((!((map__40022 == null))))?(((((map__40022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40022.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40022):map__40022);
var env = map__40022__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40022__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__40038){
var map__40039 = p__40038;
var map__40039__$1 = (((((!((map__40039 == null))))?(((((map__40039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40039.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40039):map__40039);
var msg = map__40039__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40039__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__40053){
var map__40054 = p__40053;
var map__40054__$1 = (((((!((map__40054 == null))))?(((((map__40054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40054.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40054):map__40054);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40054__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40054__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__40063){
var map__40064 = p__40063;
var map__40064__$1 = (((((!((map__40064 == null))))?(((((map__40064.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40064.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40064):map__40064);
var svc = map__40064__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40064__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}
Object.defineProperty(module.exports, "script_eval", { enumerable: false, get: function() { return shadow.cljs.devtools.client.browser.script_eval; } });
Object.defineProperty(module.exports, "global_eval", { enumerable: false, get: function() { return shadow.cljs.devtools.client.browser.global_eval; } });
Object.defineProperty(module.exports, "repl_init", { enumerable: false, get: function() { return shadow.cljs.devtools.client.browser.repl_init; } });
Object.defineProperty(module.exports, "do_js_load", { enumerable: false, get: function() { return shadow.cljs.devtools.client.browser.do_js_load; } });
Object.defineProperty(module.exports, "handle_asset_update", { enumerable: false, get: function() { return shadow.cljs.devtools.client.browser.handle_asset_update; } });
Object.defineProperty(module.exports, "page_load_uri", { enumerable: false, get: function() { return shadow.cljs.devtools.client.browser.page_load_uri; } });
Object.defineProperty(module.exports, "do_js_requires", { enumerable: false, get: function() { return shadow.cljs.devtools.client.browser.do_js_requires; } });
Object.defineProperty(module.exports, "client_info", { enumerable: false, get: function() { return shadow.cljs.devtools.client.browser.client_info; } });
Object.defineProperty(module.exports, "runtime_info", { enumerable: false, get: function() { return shadow.cljs.devtools.client.browser.runtime_info; } });
Object.defineProperty(module.exports, "match_paths", { enumerable: false, get: function() { return shadow.cljs.devtools.client.browser.match_paths; } });
Object.defineProperty(module.exports, "devtools_msg", { enumerable: false, get: function() { return shadow.cljs.devtools.client.browser.devtools_msg; } });
Object.defineProperty(module.exports, "do_js_reload", { enumerable: false, get: function() { return shadow.cljs.devtools.client.browser.do_js_reload; } });
Object.defineProperty(module.exports, "ws_was_welcome_ref", { enumerable: false, get: function() { return shadow.cljs.devtools.client.browser.ws_was_welcome_ref; } });
Object.defineProperty(module.exports, "handle_build_complete", { enumerable: false, get: function() { return shadow.cljs.devtools.client.browser.handle_build_complete; } });
//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
