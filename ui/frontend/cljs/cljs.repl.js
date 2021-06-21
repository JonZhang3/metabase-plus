var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./cljs.spec.alpha.js");
require("./goog.string.string.js");
require("./goog.string.stringformat.js");
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

$CLJS.SHADOW_ENV.setLoaded("cljs.repl.js");

goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34353){
var map__34354 = p__34353;
var map__34354__$1 = (((((!((map__34354 == null))))?(((((map__34354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34354):map__34354);
var m = map__34354__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34354__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34354__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34380_34872 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34381_34873 = null;
var count__34382_34874 = (0);
var i__34383_34875 = (0);
while(true){
if((i__34383_34875 < count__34382_34874)){
var f_34880 = chunk__34381_34873.cljs$core$IIndexed$_nth$arity$2(null,i__34383_34875);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_34880], 0));


var G__34881 = seq__34380_34872;
var G__34882 = chunk__34381_34873;
var G__34884 = count__34382_34874;
var G__34885 = (i__34383_34875 + (1));
seq__34380_34872 = G__34881;
chunk__34381_34873 = G__34882;
count__34382_34874 = G__34884;
i__34383_34875 = G__34885;
continue;
} else {
var temp__5735__auto___34892 = cljs.core.seq(seq__34380_34872);
if(temp__5735__auto___34892){
var seq__34380_34893__$1 = temp__5735__auto___34892;
if(cljs.core.chunked_seq_QMARK_(seq__34380_34893__$1)){
var c__4556__auto___34894 = cljs.core.chunk_first(seq__34380_34893__$1);
var G__34895 = cljs.core.chunk_rest(seq__34380_34893__$1);
var G__34896 = c__4556__auto___34894;
var G__34897 = cljs.core.count(c__4556__auto___34894);
var G__34898 = (0);
seq__34380_34872 = G__34895;
chunk__34381_34873 = G__34896;
count__34382_34874 = G__34897;
i__34383_34875 = G__34898;
continue;
} else {
var f_34903 = cljs.core.first(seq__34380_34893__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_34903], 0));


var G__34905 = cljs.core.next(seq__34380_34893__$1);
var G__34906 = null;
var G__34907 = (0);
var G__34908 = (0);
seq__34380_34872 = G__34905;
chunk__34381_34873 = G__34906;
count__34382_34874 = G__34907;
i__34383_34875 = G__34908;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_34909 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_34909], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_34909)))?cljs.core.second(arglists_34909):arglists_34909)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34426_34922 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34427_34923 = null;
var count__34428_34924 = (0);
var i__34429_34925 = (0);
while(true){
if((i__34429_34925 < count__34428_34924)){
var vec__34481_34931 = chunk__34427_34923.cljs$core$IIndexed$_nth$arity$2(null,i__34429_34925);
var name_34932 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34481_34931,(0),null);
var map__34484_34933 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34481_34931,(1),null);
var map__34484_34934__$1 = (((((!((map__34484_34933 == null))))?(((((map__34484_34933.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34484_34933.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34484_34933):map__34484_34933);
var doc_34935 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34484_34934__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34936 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34484_34934__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_34932], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_34936], 0));

if(cljs.core.truth_(doc_34935)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_34935], 0));
} else {
}


var G__34949 = seq__34426_34922;
var G__34950 = chunk__34427_34923;
var G__34951 = count__34428_34924;
var G__34952 = (i__34429_34925 + (1));
seq__34426_34922 = G__34949;
chunk__34427_34923 = G__34950;
count__34428_34924 = G__34951;
i__34429_34925 = G__34952;
continue;
} else {
var temp__5735__auto___34954 = cljs.core.seq(seq__34426_34922);
if(temp__5735__auto___34954){
var seq__34426_34957__$1 = temp__5735__auto___34954;
if(cljs.core.chunked_seq_QMARK_(seq__34426_34957__$1)){
var c__4556__auto___34958 = cljs.core.chunk_first(seq__34426_34957__$1);
var G__34965 = cljs.core.chunk_rest(seq__34426_34957__$1);
var G__34966 = c__4556__auto___34958;
var G__34967 = cljs.core.count(c__4556__auto___34958);
var G__34968 = (0);
seq__34426_34922 = G__34965;
chunk__34427_34923 = G__34966;
count__34428_34924 = G__34967;
i__34429_34925 = G__34968;
continue;
} else {
var vec__34502_34970 = cljs.core.first(seq__34426_34957__$1);
var name_34971 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34502_34970,(0),null);
var map__34509_34972 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34502_34970,(1),null);
var map__34509_34973__$1 = (((((!((map__34509_34972 == null))))?(((((map__34509_34972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34509_34972.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34509_34972):map__34509_34972);
var doc_34974 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34509_34973__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34975 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34509_34973__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_34971], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_34975], 0));

if(cljs.core.truth_(doc_34974)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_34974], 0));
} else {
}


var G__34991 = cljs.core.next(seq__34426_34957__$1);
var G__34992 = null;
var G__34993 = (0);
var G__34994 = (0);
seq__34426_34922 = G__34991;
chunk__34427_34923 = G__34992;
count__34428_34924 = G__34993;
i__34429_34925 = G__34994;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__34530 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__34531 = null;
var count__34532 = (0);
var i__34533 = (0);
while(true){
if((i__34533 < count__34532)){
var role = chunk__34531.cljs$core$IIndexed$_nth$arity$2(null,i__34533);
var temp__5735__auto___35002__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___35002__$1)){
var spec_35003 = temp__5735__auto___35002__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35003)], 0));
} else {
}


var G__35005 = seq__34530;
var G__35006 = chunk__34531;
var G__35007 = count__34532;
var G__35008 = (i__34533 + (1));
seq__34530 = G__35005;
chunk__34531 = G__35006;
count__34532 = G__35007;
i__34533 = G__35008;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__34530);
if(temp__5735__auto____$1){
var seq__34530__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__34530__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__34530__$1);
var G__35017 = cljs.core.chunk_rest(seq__34530__$1);
var G__35018 = c__4556__auto__;
var G__35019 = cljs.core.count(c__4556__auto__);
var G__35020 = (0);
seq__34530 = G__35017;
chunk__34531 = G__35018;
count__34532 = G__35019;
i__34533 = G__35020;
continue;
} else {
var role = cljs.core.first(seq__34530__$1);
var temp__5735__auto___35022__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___35022__$2)){
var spec_35023 = temp__5735__auto___35022__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35023)], 0));
} else {
}


var G__35025 = cljs.core.next(seq__34530__$1);
var G__35026 = null;
var G__35027 = (0);
var G__35028 = (0);
seq__34530 = G__35025;
chunk__34531 = G__35026;
count__34532 = G__35027;
i__34533 = G__35028;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__35039 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__35040 = cljs.core.ex_cause(t);
via = G__35039;
t = G__35040;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__34675 = datafied_throwable;
var map__34675__$1 = (((((!((map__34675 == null))))?(((((map__34675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34675.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34675):map__34675);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34675__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34675__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34675__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__34676 = cljs.core.last(via);
var map__34676__$1 = (((((!((map__34676 == null))))?(((((map__34676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34676):map__34676);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34676__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34676__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34676__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__34677 = data;
var map__34677__$1 = (((((!((map__34677 == null))))?(((((map__34677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34677.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34677):map__34677);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34677__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34677__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34677__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__34678 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__34678__$1 = (((((!((map__34678 == null))))?(((((map__34678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34678.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34678):map__34678);
var top_data = map__34678__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34678__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__34721 = phase;
var G__34721__$1 = (((G__34721 instanceof cljs.core.Keyword))?G__34721.fqn:null);
switch (G__34721__$1) {
case "read-source":
var map__34728 = data;
var map__34728__$1 = (((((!((map__34728 == null))))?(((((map__34728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34728.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34728):map__34728);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34728__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34728__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__34736 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__34736__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34736,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34736);
var G__34736__$2 = (cljs.core.truth_((function (){var fexpr__34737 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34737.cljs$core$IFn$_invoke$arity$1 ? fexpr__34737.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34737.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34736__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34736__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34736__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34736__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__34738 = top_data;
var G__34738__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34738,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34738);
var G__34738__$2 = (cljs.core.truth_((function (){var fexpr__34740 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34740.cljs$core$IFn$_invoke$arity$1 ? fexpr__34740.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34740.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34738__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34738__$1);
var G__34738__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34738__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34738__$2);
var G__34738__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34738__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34738__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34738__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34738__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__34748 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34748,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34748,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34748,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34748,(3),null);
var G__34751 = top_data;
var G__34751__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34751,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__34751);
var G__34751__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34751__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__34751__$1);
var G__34751__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34751__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__34751__$2);
var G__34751__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34751__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34751__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34751__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34751__$4;
}

break;
case "execution":
var vec__34758 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34758,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34758,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34758,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34758,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__34670_SHARP_){
var or__4126__auto__ = (p1__34670_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__34764 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34764.cljs$core$IFn$_invoke$arity$1 ? fexpr__34764.cljs$core$IFn$_invoke$arity$1(p1__34670_SHARP_) : fexpr__34764.call(null,p1__34670_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__34770 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__34770__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34770,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__34770);
var G__34770__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34770__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34770__$1);
var G__34770__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34770__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__34770__$2);
var G__34770__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34770__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__34770__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34770__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34770__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34721__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__34784){
var map__34785 = p__34784;
var map__34785__$1 = (((((!((map__34785 == null))))?(((((map__34785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34785.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34785):map__34785);
var triage_data = map__34785__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34785__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34785__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34785__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34785__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34785__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34785__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34785__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34785__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__34793 = phase;
var G__34793__$1 = (((G__34793 instanceof cljs.core.Keyword))?G__34793.fqn:null);
switch (G__34793__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__34796 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__34797 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34798 = loc;
var G__34799 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34801_35224 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34802_35225 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34803_35226 = true;
var _STAR_print_fn_STAR__temp_val__34804_35227 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34803_35226);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34804_35227);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34780_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34780_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34802_35225);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34801_35224);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__34796,G__34797,G__34798,G__34799) : format.call(null,G__34796,G__34797,G__34798,G__34799));

break;
case "macroexpansion":
var G__34812 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__34813 = cause_type;
var G__34814 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34815 = loc;
var G__34816 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34812,G__34813,G__34814,G__34815,G__34816) : format.call(null,G__34812,G__34813,G__34814,G__34815,G__34816));

break;
case "compile-syntax-check":
var G__34817 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__34818 = cause_type;
var G__34819 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34820 = loc;
var G__34821 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34817,G__34818,G__34819,G__34820,G__34821) : format.call(null,G__34817,G__34818,G__34819,G__34820,G__34821));

break;
case "compilation":
var G__34824 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__34825 = cause_type;
var G__34826 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34827 = loc;
var G__34828 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34824,G__34825,G__34826,G__34827,G__34828) : format.call(null,G__34824,G__34825,G__34826,G__34827,G__34828));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__34829 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__34830 = symbol;
var G__34831 = loc;
var G__34832 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34838_35246 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34839_35247 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34840_35248 = true;
var _STAR_print_fn_STAR__temp_val__34841_35249 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34840_35248);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34841_35249);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34782_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34782_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34839_35247);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34838_35246);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__34829,G__34830,G__34831,G__34832) : format.call(null,G__34829,G__34830,G__34831,G__34832));
} else {
var G__34854 = "Execution error%s at %s(%s).\n%s\n";
var G__34855 = cause_type;
var G__34856 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34857 = loc;
var G__34858 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34854,G__34855,G__34856,G__34857,G__34858) : format.call(null,G__34854,G__34855,G__34856,G__34857,G__34858));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34793__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});
Object.defineProperty(module.exports, "print_doc", { enumerable: false, get: function() { return cljs.repl.print_doc; } });
Object.defineProperty(module.exports, "Error__GT_map", { enumerable: false, get: function() { return cljs.repl.Error__GT_map; } });
Object.defineProperty(module.exports, "ex_triage", { enumerable: false, get: function() { return cljs.repl.ex_triage; } });
Object.defineProperty(module.exports, "ex_str", { enumerable: false, get: function() { return cljs.repl.ex_str; } });
Object.defineProperty(module.exports, "error__GT_str", { enumerable: false, get: function() { return cljs.repl.error__GT_str; } });
//# sourceMappingURL=cljs.repl.js.map
