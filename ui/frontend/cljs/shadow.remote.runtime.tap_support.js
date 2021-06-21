var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./shadow.remote.runtime.api.js");
require("./shadow.remote.runtime.shared.js");
require("./shadow.remote.runtime.obj_support.js");
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

$CLJS.SHADOW_ENV.setLoaded("shadow.remote.runtime.tap_support.js");

goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__35744,p__35745){
var map__35748 = p__35744;
var map__35748__$1 = (((((!((map__35748 == null))))?(((((map__35748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35748.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35748):map__35748);
var svc = map__35748__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35748__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35748__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35748__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__35749 = p__35745;
var map__35749__$1 = (((((!((map__35749 == null))))?(((((map__35749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35749.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35749):map__35749);
var msg = map__35749__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35749__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35749__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35749__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35749__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__35767,p__35768){
var map__35769 = p__35767;
var map__35769__$1 = (((((!((map__35769 == null))))?(((((map__35769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35769.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35769):map__35769);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35769__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__35770 = p__35768;
var map__35770__$1 = (((((!((map__35770 == null))))?(((((map__35770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35770.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35770):map__35770);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35770__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__35783,p__35784){
var map__35787 = p__35783;
var map__35787__$1 = (((((!((map__35787 == null))))?(((((map__35787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35787.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35787):map__35787);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35787__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35787__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__35788 = p__35784;
var map__35788__$1 = (((((!((map__35788 == null))))?(((((map__35788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35788.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35788):map__35788);
var msg = map__35788__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35788__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__35798,tid){
var map__35800 = p__35798;
var map__35800__$1 = (((((!((map__35800 == null))))?(((((map__35800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35800.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35800):map__35800);
var svc = map__35800__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35800__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__35814 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__35815 = null;
var count__35816 = (0);
var i__35817 = (0);
while(true){
if((i__35817 < count__35816)){
var vec__35829 = chunk__35815.cljs$core$IIndexed$_nth$arity$2(null,i__35817);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35829,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35829,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__35868 = seq__35814;
var G__35869 = chunk__35815;
var G__35870 = count__35816;
var G__35871 = (i__35817 + (1));
seq__35814 = G__35868;
chunk__35815 = G__35869;
count__35816 = G__35870;
i__35817 = G__35871;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35814);
if(temp__5735__auto__){
var seq__35814__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35814__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35814__$1);
var G__35877 = cljs.core.chunk_rest(seq__35814__$1);
var G__35878 = c__4556__auto__;
var G__35879 = cljs.core.count(c__4556__auto__);
var G__35880 = (0);
seq__35814 = G__35877;
chunk__35815 = G__35878;
count__35816 = G__35879;
i__35817 = G__35880;
continue;
} else {
var vec__35834 = cljs.core.first(seq__35814__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35834,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35834,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__35884 = cljs.core.next(seq__35814__$1);
var G__35885 = null;
var G__35886 = (0);
var G__35887 = (0);
seq__35814 = G__35884;
chunk__35815 = G__35885;
count__35816 = G__35886;
i__35817 = G__35887;
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
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__35805_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__35805_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__35806_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__35806_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__35807_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__35807_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__35808_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__35808_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__35840){
var map__35841 = p__35840;
var map__35841__$1 = (((((!((map__35841 == null))))?(((((map__35841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35841.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35841):map__35841);
var svc = map__35841__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35841__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35841__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});
Object.defineProperty(module.exports, "tap_subscribe", { enumerable: false, get: function() { return shadow.remote.runtime.tap_support.tap_subscribe; } });
Object.defineProperty(module.exports, "tap_unsubscribe", { enumerable: false, get: function() { return shadow.remote.runtime.tap_support.tap_unsubscribe; } });
Object.defineProperty(module.exports, "request_tap_history", { enumerable: false, get: function() { return shadow.remote.runtime.tap_support.request_tap_history; } });
Object.defineProperty(module.exports, "tool_disconnect", { enumerable: false, get: function() { return shadow.remote.runtime.tap_support.tool_disconnect; } });
Object.defineProperty(module.exports, "start", { enumerable: false, get: function() { return shadow.remote.runtime.tap_support.start; } });
Object.defineProperty(module.exports, "stop", { enumerable: false, get: function() { return shadow.remote.runtime.tap_support.stop; } });
//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
