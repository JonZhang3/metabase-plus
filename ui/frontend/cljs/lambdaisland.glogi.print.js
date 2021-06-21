var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./lambdaisland.glogi.js");
require("./goog.object.object.js");
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

$CLJS.SHADOW_ENV.setLoaded("lambdaisland.glogi.print.js");

goog.provide('lambdaisland.glogi.print');
lambdaisland.glogi.print.colors = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"orange","orange",73816386),new cljs.core.Keyword(null,"gray1","gray1",23549221),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"gray3","gray3",-617553786),new cljs.core.Keyword(null,"gray4","gray4",460735815),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"turqoise","turqoise",1674869457),new cljs.core.Keyword(null,"gray2","gray2",-1424527469),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"purple","purple",-876021126),new cljs.core.Keyword(null,"gray6","gray6",-2106469670),new cljs.core.Keyword(null,"gray5","gray5",1481094938),new cljs.core.Keyword(null,"brown","brown",1414854429),new cljs.core.Keyword(null,"black","black",1294279647)],["#f5871f","#e0e0e0","#ffffff","#8e908c","#969896","#eab700","#718c00","#3e999f","#d6d6d6","#c82829","#4271ae","#8959a8","#282a2e","#4d4d4c","#a3685a","#1d1f21"]);
lambdaisland.glogi.print.level_color = (function lambdaisland$glogi$print$level_color(level){
var pred__41787 = cljs.core._LT__EQ_;
var expr__41788 = lambdaisland.glogi.level_value(level);
if(cljs.core.truth_((function (){var G__41790 = lambdaisland.glogi.level_value(new cljs.core.Keyword(null,"severe","severe",-1364500238));
var G__41791 = expr__41788;
return (pred__41787.cljs$core$IFn$_invoke$arity$2 ? pred__41787.cljs$core$IFn$_invoke$arity$2(G__41790,G__41791) : pred__41787.call(null,G__41790,G__41791));
})())){
return new cljs.core.Keyword(null,"red","red",-969428204);
} else {
if(cljs.core.truth_((function (){var G__41792 = lambdaisland.glogi.level_value(new cljs.core.Keyword(null,"warning","warning",-1685650671));
var G__41793 = expr__41788;
return (pred__41787.cljs$core$IFn$_invoke$arity$2 ? pred__41787.cljs$core$IFn$_invoke$arity$2(G__41792,G__41793) : pred__41787.call(null,G__41792,G__41793));
})())){
return new cljs.core.Keyword(null,"orange","orange",73816386);
} else {
if(cljs.core.truth_((function (){var G__41794 = lambdaisland.glogi.level_value(new cljs.core.Keyword(null,"info","info",-317069002));
var G__41795 = expr__41788;
return (pred__41787.cljs$core$IFn$_invoke$arity$2 ? pred__41787.cljs$core$IFn$_invoke$arity$2(G__41794,G__41795) : pred__41787.call(null,G__41794,G__41795));
})())){
return new cljs.core.Keyword(null,"blue","blue",-622100620);
} else {
if(cljs.core.truth_((function (){var G__41796 = lambdaisland.glogi.level_value(new cljs.core.Keyword(null,"config","config",994861415));
var G__41797 = expr__41788;
return (pred__41787.cljs$core$IFn$_invoke$arity$2 ? pred__41787.cljs$core$IFn$_invoke$arity$2(G__41796,G__41797) : pred__41787.call(null,G__41796,G__41797));
})())){
return new cljs.core.Keyword(null,"green","green",-945526839);
} else {
if(cljs.core.truth_((function (){var G__41798 = lambdaisland.glogi.level_value(new cljs.core.Keyword(null,"fine","fine",-873037193));
var G__41799 = expr__41788;
return (pred__41787.cljs$core$IFn$_invoke$arity$2 ? pred__41787.cljs$core$IFn$_invoke$arity$2(G__41798,G__41799) : pred__41787.call(null,G__41798,G__41799));
})())){
return new cljs.core.Keyword(null,"yellow","yellow",-881035449);
} else {
if(cljs.core.truth_((function (){var G__41800 = lambdaisland.glogi.level_value(new cljs.core.Keyword(null,"finer","finer",974902846));
var G__41801 = expr__41788;
return (pred__41787.cljs$core$IFn$_invoke$arity$2 ? pred__41787.cljs$core$IFn$_invoke$arity$2(G__41800,G__41801) : pred__41787.call(null,G__41800,G__41801));
})())){
return new cljs.core.Keyword(null,"gray3","gray3",-617553786);
} else {
if(cljs.core.truth_((function (){var G__41802 = lambdaisland.glogi.level_value(new cljs.core.Keyword(null,"finest","finest",-1359568890));
var G__41803 = expr__41788;
return (pred__41787.cljs$core$IFn$_invoke$arity$2 ? pred__41787.cljs$core$IFn$_invoke$arity$2(G__41802,G__41803) : pred__41787.call(null,G__41802,G__41803));
})())){
return new cljs.core.Keyword(null,"gray4","gray4",460735815);
} else {
return new cljs.core.Keyword(null,"gray2","gray2",-1424527469);
}
}
}
}
}
}
}
});
lambdaisland.glogi.print.add = (function lambdaisland$glogi$print$add(var_args){
var G__41805 = arguments.length;
switch (G__41805) {
case 2:
return lambdaisland.glogi.print.add.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return lambdaisland.glogi.print.add.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return lambdaisland.glogi.print.add.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lambdaisland.glogi.print.add.cljs$core$IFn$_invoke$arity$2 = (function (p__41807,s){
var vec__41808 = p__41807;
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41808,(0),null);
var res_css = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41808,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(res),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),res_css], null);
}));

(lambdaisland.glogi.print.add.cljs$core$IFn$_invoke$arity$3 = (function (p__41813,s,color){
var vec__41814 = p__41813;
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41814,(0),null);
var res_css = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41814,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(res),"%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"%c"].join(''),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(res_css,["color:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(lambdaisland.glogi.print.colors,color))].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["color:black"], 0))], null);
}));

(lambdaisland.glogi.print.add.cljs$core$IFn$_invoke$arity$4 = (function (p__41818,s,fg,bg){
var vec__41824 = p__41818;
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41824,(0),null);
var res_css = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41824,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(res),"%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"%c"].join(''),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(res_css,["color:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(lambdaisland.glogi.print.colors,fg)),";background-color:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(lambdaisland.glogi.print.colors,bg))].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["color:black;background-color:inherit"], 0))], null);
}));

(lambdaisland.glogi.print.add.cljs$lang$maxFixedArity = 4);

lambdaisland.glogi.print.print_console_log_css = (function lambdaisland$glogi$print$print_console_log_css(res,value){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lambdaisland.glogi.print","comma","lambdaisland.glogi.print/comma",-725182078),value)){
return lambdaisland.glogi.print.add.cljs$core$IFn$_invoke$arity$3(res,", ",new cljs.core.Keyword(null,"gray2","gray2",-1424527469));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lambdaisland.glogi.print","space","lambdaisland.glogi.print/space",1682088588),value)){
return lambdaisland.glogi.print.add.cljs$core$IFn$_invoke$arity$2(res," ");
} else {
if((value instanceof cljs.core.Keyword)){
return lambdaisland.glogi.print.add.cljs$core$IFn$_invoke$arity$3(res,value,new cljs.core.Keyword(null,"blue","blue",-622100620));
} else {
if((value instanceof cljs.core.Symbol)){
return lambdaisland.glogi.print.add.cljs$core$IFn$_invoke$arity$3(res,value,new cljs.core.Keyword(null,"green","green",-945526839));
} else {
if(typeof value === 'string'){
return lambdaisland.glogi.print.add.cljs$core$IFn$_invoke$arity$3(res,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)),new cljs.core.Keyword(null,"turqoise","turqoise",1674869457));
} else {
if(cljs.core.map_entry_QMARK_(value)){
var G__41831 = lambdaisland.glogi.print.add.cljs$core$IFn$_invoke$arity$2((function (){var G__41834 = res;
var G__41835 = cljs.core.key(value);
return (lambdaisland.glogi.print.print_console_log_css.cljs$core$IFn$_invoke$arity$2 ? lambdaisland.glogi.print.print_console_log_css.cljs$core$IFn$_invoke$arity$2(G__41834,G__41835) : lambdaisland.glogi.print.print_console_log_css.call(null,G__41834,G__41835));
})()," ");
var G__41832 = cljs.core.val(value);
return (lambdaisland.glogi.print.print_console_log_css.cljs$core$IFn$_invoke$arity$2 ? lambdaisland.glogi.print.print_console_log_css.cljs$core$IFn$_invoke$arity$2(G__41831,G__41832) : lambdaisland.glogi.print.print_console_log_css.call(null,G__41831,G__41832));
} else {
if((((value instanceof cljs.core.PersistentArrayMap)) || ((value instanceof cljs.core.PersistentHashMap)))){
var _PERCENT_ = res;
var _PERCENT___$1 = lambdaisland.glogi.print.add.cljs$core$IFn$_invoke$arity$3(_PERCENT_,"{",new cljs.core.Keyword(null,"purple","purple",-876021126));
var _PERCENT___$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(lambdaisland.glogi.print.print_console_log_css,_PERCENT___$1,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lambdaisland.glogi.print","comma","lambdaisland.glogi.print/comma",-725182078),value));
return lambdaisland.glogi.print.add.cljs$core$IFn$_invoke$arity$3(_PERCENT___$2,"}",new cljs.core.Keyword(null,"purple","purple",-876021126));
} else {
if(cljs.core.map_QMARK_(value)){
var _PERCENT_ = res;
var _PERCENT___$1 = lambdaisland.glogi.print.add.cljs$core$IFn$_invoke$arity$3(_PERCENT_,["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var t = cljs.core.type(value);
var n = t.name;
if(cljs.core.empty_QMARK_(n)){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t], 0));
} else {
return n;
}
})())," "].join(''),new cljs.core.Keyword(null,"brown","brown",1414854429));
var _PERCENT___$2 = lambdaisland.glogi.print.add.cljs$core$IFn$_invoke$arity$3(_PERCENT___$1,"{",new cljs.core.Keyword(null,"purple","purple",-876021126));
var _PERCENT___$3 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(lambdaisland.glogi.print.print_console_log_css,_PERCENT___$2,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lambdaisland.glogi.print","comma","lambdaisland.glogi.print/comma",-725182078),value));
return lambdaisland.glogi.print.add.cljs$core$IFn$_invoke$arity$3(_PERCENT___$3,"}",new cljs.core.Keyword(null,"purple","purple",-876021126));
} else {
if(cljs.core.set_QMARK_(value)){
var _PERCENT_ = res;
var _PERCENT___$1 = lambdaisland.glogi.print.add.cljs$core$IFn$_invoke$arity$3(_PERCENT_,"#{",new cljs.core.Keyword(null,"purple","purple",-876021126));
var _PERCENT___$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(lambdaisland.glogi.print.print_console_log_css,_PERCENT___$1,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lambdaisland.glogi.print","space","lambdaisland.glogi.print/space",1682088588),value));
return lambdaisland.glogi.print.add.cljs$core$IFn$_invoke$arity$3(_PERCENT___$2,"}",new cljs.core.Keyword(null,"purple","purple",-876021126));
} else {
if(cljs.core.vector_QMARK_(value)){
var _PERCENT_ = res;
var _PERCENT___$1 = lambdaisland.glogi.print.add.cljs$core$IFn$_invoke$arity$3(_PERCENT_,"[",new cljs.core.Keyword(null,"purple","purple",-876021126));
var _PERCENT___$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(lambdaisland.glogi.print.print_console_log_css,_PERCENT___$1,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lambdaisland.glogi.print","space","lambdaisland.glogi.print/space",1682088588),value));
return lambdaisland.glogi.print.add.cljs$core$IFn$_invoke$arity$3(_PERCENT___$2,"]",new cljs.core.Keyword(null,"purple","purple",-876021126));
} else {
if((value instanceof cljs.core.PersistentQueue)){
var G__41868 = lambdaisland.glogi.print.add.cljs$core$IFn$_invoke$arity$3(res,"#queue ",new cljs.core.Keyword(null,"brown","brown",1414854429));
var G__41869 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,value);
res = G__41868;
value = G__41869;
continue;
} else {
if(cljs.core.seq_QMARK_(value)){
var _PERCENT_ = res;
var _PERCENT___$1 = lambdaisland.glogi.print.add.cljs$core$IFn$_invoke$arity$3(_PERCENT_,"(",new cljs.core.Keyword(null,"brown","brown",1414854429));
var _PERCENT___$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(lambdaisland.glogi.print.print_console_log_css,_PERCENT___$1,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lambdaisland.glogi.print","space","lambdaisland.glogi.print/space",1682088588),value));
return lambdaisland.glogi.print.add.cljs$core$IFn$_invoke$arity$3(_PERCENT___$2,")",new cljs.core.Keyword(null,"brown","brown",1414854429));
} else {
if((((!((value == null))))?(((((value.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === value.cljs$core$IAtom$))))?true:(((!value.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,value):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,value))){
var G__41873 = lambdaisland.glogi.print.add.cljs$core$IFn$_invoke$arity$3(res,"#atom ",new cljs.core.Keyword(null,"brown","brown",1414854429));
var G__41874 = cljs.core.deref(value);
res = G__41873;
value = G__41874;
continue;
} else {
if(cljs.core.uuid_QMARK_(value)){
var G__41875 = lambdaisland.glogi.print.add.cljs$core$IFn$_invoke$arity$3(res,"#uuid ",new cljs.core.Keyword(null,"brown","brown",1414854429));
var G__41876 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);
res = G__41875;
value = G__41876;
continue;
} else {
if(cljs.core.object_QMARK_(value)){
var G__41877 = lambdaisland.glogi.print.add.cljs$core$IFn$_invoke$arity$3(res,"#js ",new cljs.core.Keyword(null,"brown","brown",1414854429));
var G__41878 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (res,value){
return (function (p1__41828_SHARP_,p2__41829_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__41828_SHARP_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p2__41829_SHARP_),goog.object.get(value,p2__41829_SHARP_));
});})(res,value))
,cljs.core.PersistentArrayMap.EMPTY,Object.keys(value));
res = G__41877;
value = G__41878;
continue;
} else {
if(cljs.core.array_QMARK_(value)){
var G__41880 = lambdaisland.glogi.print.add.cljs$core$IFn$_invoke$arity$3(res,"#js ",new cljs.core.Keyword(null,"brown","brown",1414854429));
var G__41881 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,value);
res = G__41880;
value = G__41881;
continue;
} else {
return lambdaisland.glogi.print.add.cljs$core$IFn$_invoke$arity$3(res,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)),new cljs.core.Keyword(null,"gray5","gray5",1481094938));

}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
break;
}
});
lambdaisland.glogi.print.format = (function lambdaisland$glogi$print$format(level,logger_name,value){
var color = lambdaisland.glogi.print.level_color(level);
var vec__41843 = lambdaisland.glogi.print.print_console_log_css(lambdaisland.glogi.print.add.cljs$core$IFn$_invoke$arity$2(lambdaisland.glogi.print.add.cljs$core$IFn$_invoke$arity$4(lambdaisland.glogi.print.add.cljs$core$IFn$_invoke$arity$4(lambdaisland.glogi.print.add.cljs$core$IFn$_invoke$arity$4(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",cljs.core.PersistentVector.EMPTY], null),"[",new cljs.core.Keyword(null,"white","white",-483998618),color),logger_name,new cljs.core.Keyword(null,"white","white",-483998618),color),"]",new cljs.core.Keyword(null,"white","white",-483998618),color)," "),value);
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41843,(0),null);
var res_css = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41843,(1),null);
return cljs.core.cons(res,res_css);
});
Object.defineProperty(module.exports, "colors", { enumerable: false, get: function() { return lambdaisland.glogi.print.colors; } });
Object.defineProperty(module.exports, "level_color", { enumerable: false, get: function() { return lambdaisland.glogi.print.level_color; } });
Object.defineProperty(module.exports, "add", { enumerable: false, get: function() { return lambdaisland.glogi.print.add; } });
Object.defineProperty(module.exports, "print_console_log_css", { enumerable: false, get: function() { return lambdaisland.glogi.print.print_console_log_css; } });
Object.defineProperty(module.exports, "format", { enumerable: false, get: function() { return lambdaisland.glogi.print.format; } });
//# sourceMappingURL=lambdaisland.glogi.print.js.map
