var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.datafy.js");
require("./cljs.pprint.js");
require("./shadow.remote.runtime.api.js");
require("./shadow.remote.runtime.writer.js");
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

$CLJS.SHADOW_ENV.setLoaded("shadow.remote.runtime.shared.js");

goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__31728,res){
var map__31729 = p__31728;
var map__31729__$1 = (((((!((map__31729 == null))))?(((((map__31729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31729.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31729):map__31729);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31729__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31729__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__31732 = res;
var G__31732__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31732,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__31732);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31732__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__31732__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__31745 = arguments.length;
switch (G__31745) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__31753,msg,handlers,timeout_after_ms){
var map__31754 = p__31753;
var map__31754__$1 = (((((!((map__31754 == null))))?(((((map__31754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31754.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31754):map__31754);
var runtime = map__31754__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31754__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___32249 = arguments.length;
var i__4737__auto___32250 = (0);
while(true){
if((i__4737__auto___32250 < len__4736__auto___32249)){
args__4742__auto__.push((arguments[i__4737__auto___32250]));

var G__32251 = (i__4737__auto___32250 + (1));
i__4737__auto___32250 = G__32251;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__31784,ev,args){
var map__31785 = p__31784;
var map__31785__$1 = (((((!((map__31785 == null))))?(((((map__31785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31785.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31785):map__31785);
var runtime = map__31785__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31785__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__31789 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__31792 = null;
var count__31793 = (0);
var i__31794 = (0);
while(true){
if((i__31794 < count__31793)){
var ext = chunk__31792.cljs$core$IIndexed$_nth$arity$2(null,i__31794);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__32263 = seq__31789;
var G__32264 = chunk__31792;
var G__32265 = count__31793;
var G__32266 = (i__31794 + (1));
seq__31789 = G__32263;
chunk__31792 = G__32264;
count__31793 = G__32265;
i__31794 = G__32266;
continue;
} else {
var G__32268 = seq__31789;
var G__32269 = chunk__31792;
var G__32270 = count__31793;
var G__32271 = (i__31794 + (1));
seq__31789 = G__32268;
chunk__31792 = G__32269;
count__31793 = G__32270;
i__31794 = G__32271;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__31789);
if(temp__5735__auto__){
var seq__31789__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31789__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__31789__$1);
var G__32279 = cljs.core.chunk_rest(seq__31789__$1);
var G__32280 = c__4556__auto__;
var G__32281 = cljs.core.count(c__4556__auto__);
var G__32282 = (0);
seq__31789 = G__32279;
chunk__31792 = G__32280;
count__31793 = G__32281;
i__31794 = G__32282;
continue;
} else {
var ext = cljs.core.first(seq__31789__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__32302 = cljs.core.next(seq__31789__$1);
var G__32303 = null;
var G__32304 = (0);
var G__32305 = (0);
seq__31789 = G__32302;
chunk__31792 = G__32303;
count__31793 = G__32304;
i__31794 = G__32305;
continue;
} else {
var G__32316 = cljs.core.next(seq__31789__$1);
var G__32317 = null;
var G__32318 = (0);
var G__32319 = (0);
seq__31789 = G__32316;
chunk__31792 = G__32317;
count__31793 = G__32318;
i__31794 = G__32319;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq31771){
var G__31772 = cljs.core.first(seq31771);
var seq31771__$1 = cljs.core.next(seq31771);
var G__31773 = cljs.core.first(seq31771__$1);
var seq31771__$2 = cljs.core.next(seq31771__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31772,G__31773,seq31771__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__31836,p__31837){
var map__31838 = p__31836;
var map__31838__$1 = (((((!((map__31838 == null))))?(((((map__31838.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31838.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31838):map__31838);
var runtime = map__31838__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31838__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__31839 = p__31837;
var map__31839__$1 = (((((!((map__31839 == null))))?(((((map__31839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31839.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31839):map__31839);
var msg = map__31839__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31839__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__31857 = cljs.core.deref(state_ref);
var map__31857__$1 = (((((!((map__31857 == null))))?(((((map__31857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31857.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31857):map__31857);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31857__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31857__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__31887){
var map__31888 = p__31887;
var map__31888__$1 = (((((!((map__31888 == null))))?(((((map__31888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31888):map__31888);
var runtime = map__31888__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31888__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4126__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__31903,msg){
var map__31904 = p__31903;
var map__31904__$1 = (((((!((map__31904 == null))))?(((((map__31904.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31904.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31904):map__31904);
var runtime = map__31904__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31904__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__31934,key,p__31935){
var map__31947 = p__31934;
var map__31947__$1 = (((((!((map__31947 == null))))?(((((map__31947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31947.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31947):map__31947);
var state = map__31947__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31947__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__31949 = p__31935;
var map__31949__$1 = (((((!((map__31949 == null))))?(((((map__31949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31949.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31949):map__31949);
var spec = map__31949__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31949__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__32037,key,spec){
var map__32038 = p__32037;
var map__32038__$1 = (((((!((map__32038 == null))))?(((((map__32038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32038):map__32038);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32038__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__32052_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__32052_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__32054_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__32054_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__32055_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__32055_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__32056_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__32056_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__32057_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__32057_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__32094,key){
var map__32096 = p__32094;
var map__32096__$1 = (((((!((map__32096 == null))))?(((((map__32096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32096.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32096):map__32096);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32096__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__32114,msg){
var map__32116 = p__32114;
var map__32116__$1 = (((((!((map__32116 == null))))?(((((map__32116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32116.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32116):map__32116);
var runtime = map__32116__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32116__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__32137,p__32138){
var map__32143 = p__32137;
var map__32143__$1 = (((((!((map__32143 == null))))?(((((map__32143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32143.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32143):map__32143);
var runtime = map__32143__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32143__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__32144 = p__32138;
var map__32144__$1 = (((((!((map__32144 == null))))?(((((map__32144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32144.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32144):map__32144);
var msg = map__32144__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32144__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32144__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__32163 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__32165 = null;
var count__32166 = (0);
var i__32167 = (0);
while(true){
if((i__32167 < count__32166)){
var map__32202 = chunk__32165.cljs$core$IIndexed$_nth$arity$2(null,i__32167);
var map__32202__$1 = (((((!((map__32202 == null))))?(((((map__32202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32202.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32202):map__32202);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32202__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__32405 = seq__32163;
var G__32406 = chunk__32165;
var G__32407 = count__32166;
var G__32408 = (i__32167 + (1));
seq__32163 = G__32405;
chunk__32165 = G__32406;
count__32166 = G__32407;
i__32167 = G__32408;
continue;
} else {
var G__32410 = seq__32163;
var G__32411 = chunk__32165;
var G__32412 = count__32166;
var G__32413 = (i__32167 + (1));
seq__32163 = G__32410;
chunk__32165 = G__32411;
count__32166 = G__32412;
i__32167 = G__32413;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32163);
if(temp__5735__auto__){
var seq__32163__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32163__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32163__$1);
var G__32415 = cljs.core.chunk_rest(seq__32163__$1);
var G__32416 = c__4556__auto__;
var G__32417 = cljs.core.count(c__4556__auto__);
var G__32418 = (0);
seq__32163 = G__32415;
chunk__32165 = G__32416;
count__32166 = G__32417;
i__32167 = G__32418;
continue;
} else {
var map__32211 = cljs.core.first(seq__32163__$1);
var map__32211__$1 = (((((!((map__32211 == null))))?(((((map__32211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32211.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32211):map__32211);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32211__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__32440 = cljs.core.next(seq__32163__$1);
var G__32441 = null;
var G__32442 = (0);
var G__32443 = (0);
seq__32163 = G__32440;
chunk__32165 = G__32441;
count__32166 = G__32442;
i__32167 = G__32443;
continue;
} else {
var G__32445 = cljs.core.next(seq__32163__$1);
var G__32446 = null;
var G__32447 = (0);
var G__32448 = (0);
seq__32163 = G__32445;
chunk__32165 = G__32446;
count__32166 = G__32447;
i__32167 = G__32448;
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
Object.defineProperty(module.exports, "request_supported_ops", { enumerable: false, get: function() { return shadow.remote.runtime.shared.request_supported_ops; } });
Object.defineProperty(module.exports, "unhandled_client_not_found", { enumerable: false, get: function() { return shadow.remote.runtime.shared.unhandled_client_not_found; } });
Object.defineProperty(module.exports, "trigger_BANG_", { enumerable: false, get: function() { return shadow.remote.runtime.shared.trigger_BANG_; } });
Object.defineProperty(module.exports, "add_defaults", { enumerable: false, get: function() { return shadow.remote.runtime.shared.add_defaults; } });
Object.defineProperty(module.exports, "reply", { enumerable: false, get: function() { return shadow.remote.runtime.shared.reply; } });
Object.defineProperty(module.exports, "add_extension_STAR_", { enumerable: false, get: function() { return shadow.remote.runtime.shared.add_extension_STAR_; } });
Object.defineProperty(module.exports, "ping", { enumerable: false, get: function() { return shadow.remote.runtime.shared.ping; } });
Object.defineProperty(module.exports, "del_extension", { enumerable: false, get: function() { return shadow.remote.runtime.shared.del_extension; } });
Object.defineProperty(module.exports, "add_extension", { enumerable: false, get: function() { return shadow.remote.runtime.shared.add_extension; } });
Object.defineProperty(module.exports, "now", { enumerable: false, get: function() { return shadow.remote.runtime.shared.now; } });
Object.defineProperty(module.exports, "welcome", { enumerable: false, get: function() { return shadow.remote.runtime.shared.welcome; } });
Object.defineProperty(module.exports, "call", { enumerable: false, get: function() { return shadow.remote.runtime.shared.call; } });
Object.defineProperty(module.exports, "unhandled_call_result", { enumerable: false, get: function() { return shadow.remote.runtime.shared.unhandled_call_result; } });
Object.defineProperty(module.exports, "process", { enumerable: false, get: function() { return shadow.remote.runtime.shared.process; } });
Object.defineProperty(module.exports, "init_state", { enumerable: false, get: function() { return shadow.remote.runtime.shared.init_state; } });
Object.defineProperty(module.exports, "unknown_op", { enumerable: false, get: function() { return shadow.remote.runtime.shared.unknown_op; } });
Object.defineProperty(module.exports, "run_on_idle", { enumerable: false, get: function() { return shadow.remote.runtime.shared.run_on_idle; } });
Object.defineProperty(module.exports, "relay_msg", { enumerable: false, get: function() { return shadow.remote.runtime.shared.relay_msg; } });
Object.defineProperty(module.exports, "unknown_relay_op", { enumerable: false, get: function() { return shadow.remote.runtime.shared.unknown_relay_op; } });
Object.defineProperty(module.exports, "get_client_id", { enumerable: false, get: function() { return shadow.remote.runtime.shared.get_client_id; } });
Object.defineProperty(module.exports, "del_extension_STAR_", { enumerable: false, get: function() { return shadow.remote.runtime.shared.del_extension_STAR_; } });
Object.defineProperty(module.exports, "reply_unknown_op", { enumerable: false, get: function() { return shadow.remote.runtime.shared.reply_unknown_op; } });
//# sourceMappingURL=shadow.remote.runtime.shared.js.map
