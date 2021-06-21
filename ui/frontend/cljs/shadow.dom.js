var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./goog.dom.dom.js");
require("./goog.dom.forms.js");
require("./goog.dom.classlist.js");
require("./goog.style.style.js");
require("./goog.style.transition.js");
require("./goog.string.string.js");
require("./clojure.string.js");
require("./cljs.core.async.js");
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

$CLJS.SHADOW_ENV.setLoaded("shadow.dom.js");

goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_34783 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_34783(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_34787 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_34787(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__33328 = coll;
var G__33329 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__33328,G__33329) : shadow.dom.lazy_native_coll_seq.call(null,G__33328,G__33329));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__33363 = arguments.length;
switch (G__33363) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__33380 = arguments.length;
switch (G__33380) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__33392 = arguments.length;
switch (G__33392) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__33400 = arguments.length;
switch (G__33400) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__33423 = arguments.length;
switch (G__33423) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__33438 = arguments.length;
switch (G__33438) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e33443){if((e33443 instanceof Object)){
var e = e33443;
return console.log("didnt support attachEvent",el,e);
} else {
throw e33443;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__33453 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__33454 = null;
var count__33455 = (0);
var i__33456 = (0);
while(true){
if((i__33456 < count__33455)){
var el = chunk__33454.cljs$core$IIndexed$_nth$arity$2(null,i__33456);
var handler_34876__$1 = ((function (seq__33453,chunk__33454,count__33455,i__33456,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33453,chunk__33454,count__33455,i__33456,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34876__$1);


var G__34888 = seq__33453;
var G__34889 = chunk__33454;
var G__34890 = count__33455;
var G__34891 = (i__33456 + (1));
seq__33453 = G__34888;
chunk__33454 = G__34889;
count__33455 = G__34890;
i__33456 = G__34891;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33453);
if(temp__5735__auto__){
var seq__33453__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33453__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33453__$1);
var G__34899 = cljs.core.chunk_rest(seq__33453__$1);
var G__34900 = c__4556__auto__;
var G__34901 = cljs.core.count(c__4556__auto__);
var G__34902 = (0);
seq__33453 = G__34899;
chunk__33454 = G__34900;
count__33455 = G__34901;
i__33456 = G__34902;
continue;
} else {
var el = cljs.core.first(seq__33453__$1);
var handler_34904__$1 = ((function (seq__33453,chunk__33454,count__33455,i__33456,el,seq__33453__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33453,chunk__33454,count__33455,i__33456,el,seq__33453__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34904__$1);


var G__34910 = cljs.core.next(seq__33453__$1);
var G__34911 = null;
var G__34912 = (0);
var G__34913 = (0);
seq__33453 = G__34910;
chunk__33454 = G__34911;
count__33455 = G__34912;
i__33456 = G__34913;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__33512 = arguments.length;
switch (G__33512) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__33529 = cljs.core.seq(events);
var chunk__33530 = null;
var count__33531 = (0);
var i__33532 = (0);
while(true){
if((i__33532 < count__33531)){
var vec__33547 = chunk__33530.cljs$core$IIndexed$_nth$arity$2(null,i__33532);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33547,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33547,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34927 = seq__33529;
var G__34928 = chunk__33530;
var G__34929 = count__33531;
var G__34930 = (i__33532 + (1));
seq__33529 = G__34927;
chunk__33530 = G__34928;
count__33531 = G__34929;
i__33532 = G__34930;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33529);
if(temp__5735__auto__){
var seq__33529__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33529__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33529__$1);
var G__34937 = cljs.core.chunk_rest(seq__33529__$1);
var G__34938 = c__4556__auto__;
var G__34939 = cljs.core.count(c__4556__auto__);
var G__34940 = (0);
seq__33529 = G__34937;
chunk__33530 = G__34938;
count__33531 = G__34939;
i__33532 = G__34940;
continue;
} else {
var vec__33557 = cljs.core.first(seq__33529__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33557,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33557,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34944 = cljs.core.next(seq__33529__$1);
var G__34945 = null;
var G__34946 = (0);
var G__34947 = (0);
seq__33529 = G__34944;
chunk__33530 = G__34945;
count__33531 = G__34946;
i__33532 = G__34947;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__33568 = cljs.core.seq(styles);
var chunk__33569 = null;
var count__33570 = (0);
var i__33571 = (0);
while(true){
if((i__33571 < count__33570)){
var vec__33587 = chunk__33569.cljs$core$IIndexed$_nth$arity$2(null,i__33571);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33587,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33587,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34961 = seq__33568;
var G__34962 = chunk__33569;
var G__34963 = count__33570;
var G__34964 = (i__33571 + (1));
seq__33568 = G__34961;
chunk__33569 = G__34962;
count__33570 = G__34963;
i__33571 = G__34964;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33568);
if(temp__5735__auto__){
var seq__33568__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33568__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33568__$1);
var G__34976 = cljs.core.chunk_rest(seq__33568__$1);
var G__34977 = c__4556__auto__;
var G__34978 = cljs.core.count(c__4556__auto__);
var G__34979 = (0);
seq__33568 = G__34976;
chunk__33569 = G__34977;
count__33570 = G__34978;
i__33571 = G__34979;
continue;
} else {
var vec__33596 = cljs.core.first(seq__33568__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33596,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33596,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34983 = cljs.core.next(seq__33568__$1);
var G__34984 = null;
var G__34985 = (0);
var G__34986 = (0);
seq__33568 = G__34983;
chunk__33569 = G__34984;
count__33570 = G__34985;
i__33571 = G__34986;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__33604_34995 = key;
var G__33604_34996__$1 = (((G__33604_34995 instanceof cljs.core.Keyword))?G__33604_34995.fqn:null);
switch (G__33604_34996__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_35021 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_35021,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_35021,"aria-");
}
})())){
el.setAttribute(ks_35021,value);
} else {
(el[ks_35021] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__33674){
var map__33675 = p__33674;
var map__33675__$1 = (((((!((map__33675 == null))))?(((((map__33675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33675.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33675):map__33675);
var props = map__33675__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33675__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__33682 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33682,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33682,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33682,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__33687 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__33687,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__33687;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__33696 = arguments.length;
switch (G__33696) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__33717){
var vec__33718 = p__33717;
var seq__33719 = cljs.core.seq(vec__33718);
var first__33720 = cljs.core.first(seq__33719);
var seq__33719__$1 = cljs.core.next(seq__33719);
var nn = first__33720;
var first__33720__$1 = cljs.core.first(seq__33719__$1);
var seq__33719__$2 = cljs.core.next(seq__33719__$1);
var np = first__33720__$1;
var nc = seq__33719__$2;
var node = vec__33718;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33723 = nn;
var G__33724 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33723,G__33724) : create_fn.call(null,G__33723,G__33724));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33727 = nn;
var G__33728 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33727,G__33728) : create_fn.call(null,G__33727,G__33728));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__33730 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33730,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33730,(1),null);
var seq__33737_35077 = cljs.core.seq(node_children);
var chunk__33738_35078 = null;
var count__33739_35079 = (0);
var i__33740_35080 = (0);
while(true){
if((i__33740_35080 < count__33739_35079)){
var child_struct_35084 = chunk__33738_35078.cljs$core$IIndexed$_nth$arity$2(null,i__33740_35080);
var children_35086 = shadow.dom.dom_node(child_struct_35084);
if(cljs.core.seq_QMARK_(children_35086)){
var seq__33806_35087 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35086));
var chunk__33808_35088 = null;
var count__33809_35090 = (0);
var i__33810_35091 = (0);
while(true){
if((i__33810_35091 < count__33809_35090)){
var child_35094 = chunk__33808_35088.cljs$core$IIndexed$_nth$arity$2(null,i__33810_35091);
if(cljs.core.truth_(child_35094)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35094);


var G__35096 = seq__33806_35087;
var G__35097 = chunk__33808_35088;
var G__35098 = count__33809_35090;
var G__35099 = (i__33810_35091 + (1));
seq__33806_35087 = G__35096;
chunk__33808_35088 = G__35097;
count__33809_35090 = G__35098;
i__33810_35091 = G__35099;
continue;
} else {
var G__35101 = seq__33806_35087;
var G__35102 = chunk__33808_35088;
var G__35103 = count__33809_35090;
var G__35104 = (i__33810_35091 + (1));
seq__33806_35087 = G__35101;
chunk__33808_35088 = G__35102;
count__33809_35090 = G__35103;
i__33810_35091 = G__35104;
continue;
}
} else {
var temp__5735__auto___35105 = cljs.core.seq(seq__33806_35087);
if(temp__5735__auto___35105){
var seq__33806_35108__$1 = temp__5735__auto___35105;
if(cljs.core.chunked_seq_QMARK_(seq__33806_35108__$1)){
var c__4556__auto___35110 = cljs.core.chunk_first(seq__33806_35108__$1);
var G__35111 = cljs.core.chunk_rest(seq__33806_35108__$1);
var G__35112 = c__4556__auto___35110;
var G__35113 = cljs.core.count(c__4556__auto___35110);
var G__35114 = (0);
seq__33806_35087 = G__35111;
chunk__33808_35088 = G__35112;
count__33809_35090 = G__35113;
i__33810_35091 = G__35114;
continue;
} else {
var child_35117 = cljs.core.first(seq__33806_35108__$1);
if(cljs.core.truth_(child_35117)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35117);


var G__35118 = cljs.core.next(seq__33806_35108__$1);
var G__35119 = null;
var G__35120 = (0);
var G__35121 = (0);
seq__33806_35087 = G__35118;
chunk__33808_35088 = G__35119;
count__33809_35090 = G__35120;
i__33810_35091 = G__35121;
continue;
} else {
var G__35122 = cljs.core.next(seq__33806_35108__$1);
var G__35123 = null;
var G__35124 = (0);
var G__35125 = (0);
seq__33806_35087 = G__35122;
chunk__33808_35088 = G__35123;
count__33809_35090 = G__35124;
i__33810_35091 = G__35125;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35086);
}


var G__35128 = seq__33737_35077;
var G__35129 = chunk__33738_35078;
var G__35130 = count__33739_35079;
var G__35131 = (i__33740_35080 + (1));
seq__33737_35077 = G__35128;
chunk__33738_35078 = G__35129;
count__33739_35079 = G__35130;
i__33740_35080 = G__35131;
continue;
} else {
var temp__5735__auto___35132 = cljs.core.seq(seq__33737_35077);
if(temp__5735__auto___35132){
var seq__33737_35133__$1 = temp__5735__auto___35132;
if(cljs.core.chunked_seq_QMARK_(seq__33737_35133__$1)){
var c__4556__auto___35134 = cljs.core.chunk_first(seq__33737_35133__$1);
var G__35136 = cljs.core.chunk_rest(seq__33737_35133__$1);
var G__35137 = c__4556__auto___35134;
var G__35138 = cljs.core.count(c__4556__auto___35134);
var G__35139 = (0);
seq__33737_35077 = G__35136;
chunk__33738_35078 = G__35137;
count__33739_35079 = G__35138;
i__33740_35080 = G__35139;
continue;
} else {
var child_struct_35140 = cljs.core.first(seq__33737_35133__$1);
var children_35142 = shadow.dom.dom_node(child_struct_35140);
if(cljs.core.seq_QMARK_(children_35142)){
var seq__33855_35143 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35142));
var chunk__33857_35144 = null;
var count__33858_35145 = (0);
var i__33859_35146 = (0);
while(true){
if((i__33859_35146 < count__33858_35145)){
var child_35147 = chunk__33857_35144.cljs$core$IIndexed$_nth$arity$2(null,i__33859_35146);
if(cljs.core.truth_(child_35147)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35147);


var G__35149 = seq__33855_35143;
var G__35150 = chunk__33857_35144;
var G__35151 = count__33858_35145;
var G__35152 = (i__33859_35146 + (1));
seq__33855_35143 = G__35149;
chunk__33857_35144 = G__35150;
count__33858_35145 = G__35151;
i__33859_35146 = G__35152;
continue;
} else {
var G__35154 = seq__33855_35143;
var G__35155 = chunk__33857_35144;
var G__35156 = count__33858_35145;
var G__35157 = (i__33859_35146 + (1));
seq__33855_35143 = G__35154;
chunk__33857_35144 = G__35155;
count__33858_35145 = G__35156;
i__33859_35146 = G__35157;
continue;
}
} else {
var temp__5735__auto___35160__$1 = cljs.core.seq(seq__33855_35143);
if(temp__5735__auto___35160__$1){
var seq__33855_35161__$1 = temp__5735__auto___35160__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33855_35161__$1)){
var c__4556__auto___35162 = cljs.core.chunk_first(seq__33855_35161__$1);
var G__35164 = cljs.core.chunk_rest(seq__33855_35161__$1);
var G__35165 = c__4556__auto___35162;
var G__35166 = cljs.core.count(c__4556__auto___35162);
var G__35167 = (0);
seq__33855_35143 = G__35164;
chunk__33857_35144 = G__35165;
count__33858_35145 = G__35166;
i__33859_35146 = G__35167;
continue;
} else {
var child_35169 = cljs.core.first(seq__33855_35161__$1);
if(cljs.core.truth_(child_35169)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35169);


var G__35171 = cljs.core.next(seq__33855_35161__$1);
var G__35172 = null;
var G__35173 = (0);
var G__35174 = (0);
seq__33855_35143 = G__35171;
chunk__33857_35144 = G__35172;
count__33858_35145 = G__35173;
i__33859_35146 = G__35174;
continue;
} else {
var G__35175 = cljs.core.next(seq__33855_35161__$1);
var G__35176 = null;
var G__35177 = (0);
var G__35178 = (0);
seq__33855_35143 = G__35175;
chunk__33857_35144 = G__35176;
count__33858_35145 = G__35177;
i__33859_35146 = G__35178;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35142);
}


var G__35181 = cljs.core.next(seq__33737_35133__$1);
var G__35182 = null;
var G__35183 = (0);
var G__35184 = (0);
seq__33737_35077 = G__35181;
chunk__33738_35078 = G__35182;
count__33739_35079 = G__35183;
i__33740_35080 = G__35184;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__33904 = cljs.core.seq(node);
var chunk__33905 = null;
var count__33906 = (0);
var i__33907 = (0);
while(true){
if((i__33907 < count__33906)){
var n = chunk__33905.cljs$core$IIndexed$_nth$arity$2(null,i__33907);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35194 = seq__33904;
var G__35195 = chunk__33905;
var G__35196 = count__33906;
var G__35197 = (i__33907 + (1));
seq__33904 = G__35194;
chunk__33905 = G__35195;
count__33906 = G__35196;
i__33907 = G__35197;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33904);
if(temp__5735__auto__){
var seq__33904__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33904__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33904__$1);
var G__35198 = cljs.core.chunk_rest(seq__33904__$1);
var G__35199 = c__4556__auto__;
var G__35200 = cljs.core.count(c__4556__auto__);
var G__35201 = (0);
seq__33904 = G__35198;
chunk__33905 = G__35199;
count__33906 = G__35200;
i__33907 = G__35201;
continue;
} else {
var n = cljs.core.first(seq__33904__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35207 = cljs.core.next(seq__33904__$1);
var G__35208 = null;
var G__35209 = (0);
var G__35210 = (0);
seq__33904 = G__35207;
chunk__33905 = G__35208;
count__33906 = G__35209;
i__33907 = G__35210;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__33921 = arguments.length;
switch (G__33921) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__33931 = arguments.length;
switch (G__33931) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__33949 = arguments.length;
switch (G__33949) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35251 = arguments.length;
var i__4737__auto___35252 = (0);
while(true){
if((i__4737__auto___35252 < len__4736__auto___35251)){
args__4742__auto__.push((arguments[i__4737__auto___35252]));

var G__35253 = (i__4737__auto___35252 + (1));
i__4737__auto___35252 = G__35253;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__33989_35255 = cljs.core.seq(nodes);
var chunk__33990_35256 = null;
var count__33991_35257 = (0);
var i__33992_35258 = (0);
while(true){
if((i__33992_35258 < count__33991_35257)){
var node_35259 = chunk__33990_35256.cljs$core$IIndexed$_nth$arity$2(null,i__33992_35258);
fragment.appendChild(shadow.dom._to_dom(node_35259));


var G__35261 = seq__33989_35255;
var G__35262 = chunk__33990_35256;
var G__35263 = count__33991_35257;
var G__35264 = (i__33992_35258 + (1));
seq__33989_35255 = G__35261;
chunk__33990_35256 = G__35262;
count__33991_35257 = G__35263;
i__33992_35258 = G__35264;
continue;
} else {
var temp__5735__auto___35265 = cljs.core.seq(seq__33989_35255);
if(temp__5735__auto___35265){
var seq__33989_35266__$1 = temp__5735__auto___35265;
if(cljs.core.chunked_seq_QMARK_(seq__33989_35266__$1)){
var c__4556__auto___35267 = cljs.core.chunk_first(seq__33989_35266__$1);
var G__35268 = cljs.core.chunk_rest(seq__33989_35266__$1);
var G__35269 = c__4556__auto___35267;
var G__35270 = cljs.core.count(c__4556__auto___35267);
var G__35271 = (0);
seq__33989_35255 = G__35268;
chunk__33990_35256 = G__35269;
count__33991_35257 = G__35270;
i__33992_35258 = G__35271;
continue;
} else {
var node_35276 = cljs.core.first(seq__33989_35266__$1);
fragment.appendChild(shadow.dom._to_dom(node_35276));


var G__35278 = cljs.core.next(seq__33989_35266__$1);
var G__35279 = null;
var G__35280 = (0);
var G__35281 = (0);
seq__33989_35255 = G__35278;
chunk__33990_35256 = G__35279;
count__33991_35257 = G__35280;
i__33992_35258 = G__35281;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq33981){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33981));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__34006_35285 = cljs.core.seq(scripts);
var chunk__34007_35286 = null;
var count__34008_35287 = (0);
var i__34009_35288 = (0);
while(true){
if((i__34009_35288 < count__34008_35287)){
var vec__34024_35289 = chunk__34007_35286.cljs$core$IIndexed$_nth$arity$2(null,i__34009_35288);
var script_tag_35290 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34024_35289,(0),null);
var script_body_35291 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34024_35289,(1),null);
eval(script_body_35291);


var G__35297 = seq__34006_35285;
var G__35298 = chunk__34007_35286;
var G__35299 = count__34008_35287;
var G__35300 = (i__34009_35288 + (1));
seq__34006_35285 = G__35297;
chunk__34007_35286 = G__35298;
count__34008_35287 = G__35299;
i__34009_35288 = G__35300;
continue;
} else {
var temp__5735__auto___35303 = cljs.core.seq(seq__34006_35285);
if(temp__5735__auto___35303){
var seq__34006_35305__$1 = temp__5735__auto___35303;
if(cljs.core.chunked_seq_QMARK_(seq__34006_35305__$1)){
var c__4556__auto___35310 = cljs.core.chunk_first(seq__34006_35305__$1);
var G__35311 = cljs.core.chunk_rest(seq__34006_35305__$1);
var G__35312 = c__4556__auto___35310;
var G__35313 = cljs.core.count(c__4556__auto___35310);
var G__35314 = (0);
seq__34006_35285 = G__35311;
chunk__34007_35286 = G__35312;
count__34008_35287 = G__35313;
i__34009_35288 = G__35314;
continue;
} else {
var vec__34028_35315 = cljs.core.first(seq__34006_35305__$1);
var script_tag_35316 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34028_35315,(0),null);
var script_body_35317 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34028_35315,(1),null);
eval(script_body_35317);


var G__35320 = cljs.core.next(seq__34006_35305__$1);
var G__35321 = null;
var G__35322 = (0);
var G__35323 = (0);
seq__34006_35285 = G__35320;
chunk__34007_35286 = G__35321;
count__34008_35287 = G__35322;
i__34009_35288 = G__35323;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__34033){
var vec__34034 = p__34033;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34034,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34034,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__34044 = arguments.length;
switch (G__34044) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__34065 = cljs.core.seq(style_keys);
var chunk__34066 = null;
var count__34067 = (0);
var i__34068 = (0);
while(true){
if((i__34068 < count__34067)){
var it = chunk__34066.cljs$core$IIndexed$_nth$arity$2(null,i__34068);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35345 = seq__34065;
var G__35346 = chunk__34066;
var G__35347 = count__34067;
var G__35348 = (i__34068 + (1));
seq__34065 = G__35345;
chunk__34066 = G__35346;
count__34067 = G__35347;
i__34068 = G__35348;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34065);
if(temp__5735__auto__){
var seq__34065__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34065__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__34065__$1);
var G__35351 = cljs.core.chunk_rest(seq__34065__$1);
var G__35352 = c__4556__auto__;
var G__35353 = cljs.core.count(c__4556__auto__);
var G__35354 = (0);
seq__34065 = G__35351;
chunk__34066 = G__35352;
count__34067 = G__35353;
i__34068 = G__35354;
continue;
} else {
var it = cljs.core.first(seq__34065__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35357 = cljs.core.next(seq__34065__$1);
var G__35358 = null;
var G__35359 = (0);
var G__35360 = (0);
seq__34065 = G__35357;
chunk__34066 = G__35358;
count__34067 = G__35359;
i__34068 = G__35360;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k34078,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__34087 = k34078;
var G__34087__$1 = (((G__34087 instanceof cljs.core.Keyword))?G__34087.fqn:null);
switch (G__34087__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34078,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__34089){
var vec__34090 = p__34089;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34090,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34090,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34077){
var self__ = this;
var G__34077__$1 = this;
return (new cljs.core.RecordIter((0),G__34077__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34079,other34080){
var self__ = this;
var this34079__$1 = this;
return (((!((other34080 == null)))) && ((this34079__$1.constructor === other34080.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34079__$1.x,other34080.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34079__$1.y,other34080.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34079__$1.__extmap,other34080.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__34077){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__34110 = cljs.core.keyword_identical_QMARK_;
var expr__34111 = k__4388__auto__;
if(cljs.core.truth_((pred__34110.cljs$core$IFn$_invoke$arity$2 ? pred__34110.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__34111) : pred__34110.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__34111)))){
return (new shadow.dom.Coordinate(G__34077,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34110.cljs$core$IFn$_invoke$arity$2 ? pred__34110.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__34111) : pred__34110.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__34111)))){
return (new shadow.dom.Coordinate(self__.x,G__34077,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__34077),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__34077){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__34077,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__34085){
var extmap__4419__auto__ = (function (){var G__34125 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34085,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__34085)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34125);
} else {
return G__34125;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__34085),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__34085),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k34146,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__34158 = k34146;
var G__34158__$1 = (((G__34158 instanceof cljs.core.Keyword))?G__34158.fqn:null);
switch (G__34158__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34146,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__34161){
var vec__34162 = p__34161;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34162,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34162,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34145){
var self__ = this;
var G__34145__$1 = this;
return (new cljs.core.RecordIter((0),G__34145__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34147,other34148){
var self__ = this;
var this34147__$1 = this;
return (((!((other34148 == null)))) && ((this34147__$1.constructor === other34148.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34147__$1.w,other34148.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34147__$1.h,other34148.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34147__$1.__extmap,other34148.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__34145){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__34200 = cljs.core.keyword_identical_QMARK_;
var expr__34201 = k__4388__auto__;
if(cljs.core.truth_((pred__34200.cljs$core$IFn$_invoke$arity$2 ? pred__34200.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__34201) : pred__34200.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__34201)))){
return (new shadow.dom.Size(G__34145,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34200.cljs$core$IFn$_invoke$arity$2 ? pred__34200.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__34201) : pred__34200.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__34201)))){
return (new shadow.dom.Size(self__.w,G__34145,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__34145),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__34145){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__34145,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__34153){
var extmap__4419__auto__ = (function (){var G__34222 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34153,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__34153)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34222);
} else {
return G__34222;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__34153),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__34153),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__35458 = (i + (1));
var G__35459 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__35458;
ret = G__35459;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34258){
var vec__34260 = p__34258;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34260,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34260,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__34272 = arguments.length;
switch (G__34272) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__35467 = ps;
var G__35468 = (i + (1));
el__$1 = G__35467;
i = G__35468;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__34360 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34360,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34360,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34360,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__34368_35482 = cljs.core.seq(props);
var chunk__34369_35483 = null;
var count__34370_35484 = (0);
var i__34371_35485 = (0);
while(true){
if((i__34371_35485 < count__34370_35484)){
var vec__34401_35486 = chunk__34369_35483.cljs$core$IIndexed$_nth$arity$2(null,i__34371_35485);
var k_35487 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34401_35486,(0),null);
var v_35488 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34401_35486,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_35487);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35487),v_35488);


var G__35494 = seq__34368_35482;
var G__35495 = chunk__34369_35483;
var G__35496 = count__34370_35484;
var G__35497 = (i__34371_35485 + (1));
seq__34368_35482 = G__35494;
chunk__34369_35483 = G__35495;
count__34370_35484 = G__35496;
i__34371_35485 = G__35497;
continue;
} else {
var temp__5735__auto___35498 = cljs.core.seq(seq__34368_35482);
if(temp__5735__auto___35498){
var seq__34368_35499__$1 = temp__5735__auto___35498;
if(cljs.core.chunked_seq_QMARK_(seq__34368_35499__$1)){
var c__4556__auto___35500 = cljs.core.chunk_first(seq__34368_35499__$1);
var G__35501 = cljs.core.chunk_rest(seq__34368_35499__$1);
var G__35502 = c__4556__auto___35500;
var G__35503 = cljs.core.count(c__4556__auto___35500);
var G__35504 = (0);
seq__34368_35482 = G__35501;
chunk__34369_35483 = G__35502;
count__34370_35484 = G__35503;
i__34371_35485 = G__35504;
continue;
} else {
var vec__34418_35505 = cljs.core.first(seq__34368_35499__$1);
var k_35506 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34418_35505,(0),null);
var v_35507 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34418_35505,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_35506);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35506),v_35507);


var G__35510 = cljs.core.next(seq__34368_35499__$1);
var G__35511 = null;
var G__35512 = (0);
var G__35513 = (0);
seq__34368_35482 = G__35510;
chunk__34369_35483 = G__35511;
count__34370_35484 = G__35512;
i__34371_35485 = G__35513;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__34449 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34449,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34449,(1),null);
var seq__34459_35516 = cljs.core.seq(node_children);
var chunk__34461_35517 = null;
var count__34462_35518 = (0);
var i__34463_35519 = (0);
while(true){
if((i__34463_35519 < count__34462_35518)){
var child_struct_35521 = chunk__34461_35517.cljs$core$IIndexed$_nth$arity$2(null,i__34463_35519);
if((!((child_struct_35521 == null)))){
if(typeof child_struct_35521 === 'string'){
var text_35524 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35524),child_struct_35521].join(''));
} else {
var children_35527 = shadow.dom.svg_node(child_struct_35521);
if(cljs.core.seq_QMARK_(children_35527)){
var seq__34574_35529 = cljs.core.seq(children_35527);
var chunk__34576_35530 = null;
var count__34577_35531 = (0);
var i__34578_35532 = (0);
while(true){
if((i__34578_35532 < count__34577_35531)){
var child_35534 = chunk__34576_35530.cljs$core$IIndexed$_nth$arity$2(null,i__34578_35532);
if(cljs.core.truth_(child_35534)){
node.appendChild(child_35534);


var G__35535 = seq__34574_35529;
var G__35536 = chunk__34576_35530;
var G__35537 = count__34577_35531;
var G__35538 = (i__34578_35532 + (1));
seq__34574_35529 = G__35535;
chunk__34576_35530 = G__35536;
count__34577_35531 = G__35537;
i__34578_35532 = G__35538;
continue;
} else {
var G__35540 = seq__34574_35529;
var G__35541 = chunk__34576_35530;
var G__35542 = count__34577_35531;
var G__35543 = (i__34578_35532 + (1));
seq__34574_35529 = G__35540;
chunk__34576_35530 = G__35541;
count__34577_35531 = G__35542;
i__34578_35532 = G__35543;
continue;
}
} else {
var temp__5735__auto___35547 = cljs.core.seq(seq__34574_35529);
if(temp__5735__auto___35547){
var seq__34574_35548__$1 = temp__5735__auto___35547;
if(cljs.core.chunked_seq_QMARK_(seq__34574_35548__$1)){
var c__4556__auto___35550 = cljs.core.chunk_first(seq__34574_35548__$1);
var G__35551 = cljs.core.chunk_rest(seq__34574_35548__$1);
var G__35552 = c__4556__auto___35550;
var G__35553 = cljs.core.count(c__4556__auto___35550);
var G__35554 = (0);
seq__34574_35529 = G__35551;
chunk__34576_35530 = G__35552;
count__34577_35531 = G__35553;
i__34578_35532 = G__35554;
continue;
} else {
var child_35555 = cljs.core.first(seq__34574_35548__$1);
if(cljs.core.truth_(child_35555)){
node.appendChild(child_35555);


var G__35557 = cljs.core.next(seq__34574_35548__$1);
var G__35558 = null;
var G__35559 = (0);
var G__35560 = (0);
seq__34574_35529 = G__35557;
chunk__34576_35530 = G__35558;
count__34577_35531 = G__35559;
i__34578_35532 = G__35560;
continue;
} else {
var G__35563 = cljs.core.next(seq__34574_35548__$1);
var G__35564 = null;
var G__35565 = (0);
var G__35566 = (0);
seq__34574_35529 = G__35563;
chunk__34576_35530 = G__35564;
count__34577_35531 = G__35565;
i__34578_35532 = G__35566;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35527);
}
}


var G__35568 = seq__34459_35516;
var G__35569 = chunk__34461_35517;
var G__35570 = count__34462_35518;
var G__35571 = (i__34463_35519 + (1));
seq__34459_35516 = G__35568;
chunk__34461_35517 = G__35569;
count__34462_35518 = G__35570;
i__34463_35519 = G__35571;
continue;
} else {
var G__35574 = seq__34459_35516;
var G__35575 = chunk__34461_35517;
var G__35576 = count__34462_35518;
var G__35577 = (i__34463_35519 + (1));
seq__34459_35516 = G__35574;
chunk__34461_35517 = G__35575;
count__34462_35518 = G__35576;
i__34463_35519 = G__35577;
continue;
}
} else {
var temp__5735__auto___35579 = cljs.core.seq(seq__34459_35516);
if(temp__5735__auto___35579){
var seq__34459_35580__$1 = temp__5735__auto___35579;
if(cljs.core.chunked_seq_QMARK_(seq__34459_35580__$1)){
var c__4556__auto___35581 = cljs.core.chunk_first(seq__34459_35580__$1);
var G__35582 = cljs.core.chunk_rest(seq__34459_35580__$1);
var G__35583 = c__4556__auto___35581;
var G__35584 = cljs.core.count(c__4556__auto___35581);
var G__35585 = (0);
seq__34459_35516 = G__35582;
chunk__34461_35517 = G__35583;
count__34462_35518 = G__35584;
i__34463_35519 = G__35585;
continue;
} else {
var child_struct_35587 = cljs.core.first(seq__34459_35580__$1);
if((!((child_struct_35587 == null)))){
if(typeof child_struct_35587 === 'string'){
var text_35589 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35589),child_struct_35587].join(''));
} else {
var children_35590 = shadow.dom.svg_node(child_struct_35587);
if(cljs.core.seq_QMARK_(children_35590)){
var seq__34622_35593 = cljs.core.seq(children_35590);
var chunk__34624_35594 = null;
var count__34625_35595 = (0);
var i__34626_35596 = (0);
while(true){
if((i__34626_35596 < count__34625_35595)){
var child_35599 = chunk__34624_35594.cljs$core$IIndexed$_nth$arity$2(null,i__34626_35596);
if(cljs.core.truth_(child_35599)){
node.appendChild(child_35599);


var G__35600 = seq__34622_35593;
var G__35601 = chunk__34624_35594;
var G__35602 = count__34625_35595;
var G__35603 = (i__34626_35596 + (1));
seq__34622_35593 = G__35600;
chunk__34624_35594 = G__35601;
count__34625_35595 = G__35602;
i__34626_35596 = G__35603;
continue;
} else {
var G__35604 = seq__34622_35593;
var G__35605 = chunk__34624_35594;
var G__35606 = count__34625_35595;
var G__35607 = (i__34626_35596 + (1));
seq__34622_35593 = G__35604;
chunk__34624_35594 = G__35605;
count__34625_35595 = G__35606;
i__34626_35596 = G__35607;
continue;
}
} else {
var temp__5735__auto___35608__$1 = cljs.core.seq(seq__34622_35593);
if(temp__5735__auto___35608__$1){
var seq__34622_35609__$1 = temp__5735__auto___35608__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34622_35609__$1)){
var c__4556__auto___35610 = cljs.core.chunk_first(seq__34622_35609__$1);
var G__35611 = cljs.core.chunk_rest(seq__34622_35609__$1);
var G__35612 = c__4556__auto___35610;
var G__35613 = cljs.core.count(c__4556__auto___35610);
var G__35614 = (0);
seq__34622_35593 = G__35611;
chunk__34624_35594 = G__35612;
count__34625_35595 = G__35613;
i__34626_35596 = G__35614;
continue;
} else {
var child_35618 = cljs.core.first(seq__34622_35609__$1);
if(cljs.core.truth_(child_35618)){
node.appendChild(child_35618);


var G__35620 = cljs.core.next(seq__34622_35609__$1);
var G__35621 = null;
var G__35622 = (0);
var G__35623 = (0);
seq__34622_35593 = G__35620;
chunk__34624_35594 = G__35621;
count__34625_35595 = G__35622;
i__34626_35596 = G__35623;
continue;
} else {
var G__35624 = cljs.core.next(seq__34622_35609__$1);
var G__35625 = null;
var G__35626 = (0);
var G__35627 = (0);
seq__34622_35593 = G__35624;
chunk__34624_35594 = G__35625;
count__34625_35595 = G__35626;
i__34626_35596 = G__35627;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35590);
}
}


var G__35629 = cljs.core.next(seq__34459_35580__$1);
var G__35630 = null;
var G__35631 = (0);
var G__35632 = (0);
seq__34459_35516 = G__35629;
chunk__34461_35517 = G__35630;
count__34462_35518 = G__35631;
i__34463_35519 = G__35632;
continue;
} else {
var G__35634 = cljs.core.next(seq__34459_35580__$1);
var G__35635 = null;
var G__35636 = (0);
var G__35637 = (0);
seq__34459_35516 = G__35634;
chunk__34461_35517 = G__35635;
count__34462_35518 = G__35636;
i__34463_35519 = G__35637;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35647 = arguments.length;
var i__4737__auto___35648 = (0);
while(true){
if((i__4737__auto___35648 < len__4736__auto___35647)){
args__4742__auto__.push((arguments[i__4737__auto___35648]));

var G__35651 = (i__4737__auto___35648 + (1));
i__4737__auto___35648 = G__35651;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq34691){
var G__34692 = cljs.core.first(seq34691);
var seq34691__$1 = cljs.core.next(seq34691);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34692,seq34691__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__34731 = arguments.length;
switch (G__34731) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__29573__auto___35675 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29574__auto__ = (function (){var switch__29301__auto__ = (function (state_34746){
var state_val_34747 = (state_34746[(1)]);
if((state_val_34747 === (1))){
var state_34746__$1 = state_34746;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34746__$1,(2),once_or_cleanup);
} else {
if((state_val_34747 === (2))){
var inst_34743 = (state_34746[(2)]);
var inst_34744 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_34746__$1 = (function (){var statearr_34752 = state_34746;
(statearr_34752[(7)] = inst_34743);

return statearr_34752;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34746__$1,inst_34744);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__29302__auto__ = null;
var shadow$dom$state_machine__29302__auto____0 = (function (){
var statearr_34755 = [null,null,null,null,null,null,null,null];
(statearr_34755[(0)] = shadow$dom$state_machine__29302__auto__);

(statearr_34755[(1)] = (1));

return statearr_34755;
});
var shadow$dom$state_machine__29302__auto____1 = (function (state_34746){
while(true){
var ret_value__29303__auto__ = (function (){try{while(true){
var result__29304__auto__ = switch__29301__auto__(state_34746);
if(cljs.core.keyword_identical_QMARK_(result__29304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29304__auto__;
}
break;
}
}catch (e34756){var ex__29305__auto__ = e34756;
var statearr_34757_35687 = state_34746;
(statearr_34757_35687[(2)] = ex__29305__auto__);


if(cljs.core.seq((state_34746[(4)]))){
var statearr_34761_35688 = state_34746;
(statearr_34761_35688[(1)] = cljs.core.first((state_34746[(4)])));

} else {
throw ex__29305__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35689 = state_34746;
state_34746 = G__35689;
continue;
} else {
return ret_value__29303__auto__;
}
break;
}
});
shadow$dom$state_machine__29302__auto__ = function(state_34746){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__29302__auto____0.call(this);
case 1:
return shadow$dom$state_machine__29302__auto____1.call(this,state_34746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__29302__auto____0;
shadow$dom$state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__29302__auto____1;
return shadow$dom$state_machine__29302__auto__;
})()
})();
var state__29575__auto__ = (function (){var statearr_34762 = f__29574__auto__();
(statearr_34762[(6)] = c__29573__auto___35675);

return statearr_34762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29575__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);

Object.defineProperty(module.exports, "contains_QMARK_", { enumerable: false, get: function() { return shadow.dom.contains_QMARK_; } });
Object.defineProperty(module.exports, "eval_scripts", { enumerable: false, get: function() { return shadow.dom.eval_scripts; } });
Object.defineProperty(module.exports, "redirect", { enumerable: false, get: function() { return shadow.dom.redirect; } });
Object.defineProperty(module.exports, "native_coll", { enumerable: false, get: function() { return shadow.dom.native_coll; } });
Object.defineProperty(module.exports, "NativeColl", { enumerable: false, get: function() { return shadow.dom.NativeColl; } });
Object.defineProperty(module.exports, "query", { enumerable: false, get: function() { return shadow.dom.query; } });
Object.defineProperty(module.exports, "make_svg_node", { enumerable: false, get: function() { return shadow.dom.make_svg_node; } });
Object.defineProperty(module.exports, "str__GT_fragment", { enumerable: false, get: function() { return shadow.dom.str__GT_fragment; } });
Object.defineProperty(module.exports, "_to_svg", { enumerable: false, get: function() { return shadow.dom._to_svg; } });
Object.defineProperty(module.exports, "child_nodes", { enumerable: false, get: function() { return shadow.dom.child_nodes; } });
Object.defineProperty(module.exports, "insert_before", { enumerable: false, get: function() { return shadow.dom.insert_before; } });
Object.defineProperty(module.exports, "merge_class_string", { enumerable: false, get: function() { return shadow.dom.merge_class_string; } });
Object.defineProperty(module.exports, "has_class_QMARK_", { enumerable: false, get: function() { return shadow.dom.has_class_QMARK_; } });
Object.defineProperty(module.exports, "map__GT_Size", { enumerable: false, get: function() { return shadow.dom.map__GT_Size; } });
Object.defineProperty(module.exports, "text", { enumerable: false, get: function() { return shadow.dom.text; } });
Object.defineProperty(module.exports, "data", { enumerable: false, get: function() { return shadow.dom.data; } });
Object.defineProperty(module.exports, "transition_supported_QMARK_", { enumerable: false, get: function() { return shadow.dom.transition_supported_QMARK_; } });
Object.defineProperty(module.exports, "attr", { enumerable: false, get: function() { return shadow.dom.attr; } });
Object.defineProperty(module.exports, "remove_styles", { enumerable: false, get: function() { return shadow.dom.remove_styles; } });
Object.defineProperty(module.exports, "remove_event_handler", { enumerable: false, get: function() { return shadow.dom.remove_event_handler; } });
Object.defineProperty(module.exports, "remove_class", { enumerable: false, get: function() { return shadow.dom.remove_class; } });
Object.defineProperty(module.exports, "select_option_values", { enumerable: false, get: function() { return shadow.dom.select_option_values; } });
Object.defineProperty(module.exports, "insert_after", { enumerable: false, get: function() { return shadow.dom.insert_after; } });
Object.defineProperty(module.exports, "svg_node", { enumerable: false, get: function() { return shadow.dom.svg_node; } });
Object.defineProperty(module.exports, "children", { enumerable: false, get: function() { return shadow.dom.children; } });
Object.defineProperty(module.exports, "first_child", { enumerable: false, get: function() { return shadow.dom.first_child; } });
Object.defineProperty(module.exports, "get_html", { enumerable: false, get: function() { return shadow.dom.get_html; } });
Object.defineProperty(module.exports, "remove", { enumerable: false, get: function() { return shadow.dom.remove; } });
Object.defineProperty(module.exports, "__GT_Coordinate", { enumerable: false, get: function() { return shadow.dom.__GT_Coordinate; } });
Object.defineProperty(module.exports, "dom_listen_remove", { enumerable: false, get: function() { return shadow.dom.dom_listen_remove; } });
Object.defineProperty(module.exports, "by_id", { enumerable: false, get: function() { return shadow.dom.by_id; } });
Object.defineProperty(module.exports, "checked_QMARK_", { enumerable: false, get: function() { return shadow.dom.checked_QMARK_; } });
Object.defineProperty(module.exports, "tag_name", { enumerable: false, get: function() { return shadow.dom.tag_name; } });
Object.defineProperty(module.exports, "get_size", { enumerable: false, get: function() { return shadow.dom.get_size; } });
Object.defineProperty(module.exports, "dom_listen", { enumerable: false, get: function() { return shadow.dom.dom_listen; } });
Object.defineProperty(module.exports, "get_viewport_size", { enumerable: false, get: function() { return shadow.dom.get_viewport_size; } });
Object.defineProperty(module.exports, "add_event_listeners", { enumerable: false, get: function() { return shadow.dom.add_event_listeners; } });
Object.defineProperty(module.exports, "set_attr", { enumerable: false, get: function() { return shadow.dom.set_attr; } });
Object.defineProperty(module.exports, "reset", { enumerable: false, get: function() { return shadow.dom.reset; } });
Object.defineProperty(module.exports, "IElement", { enumerable: false, get: function() { return shadow.dom.IElement; } });
Object.defineProperty(module.exports, "make_dom_node", { enumerable: false, get: function() { return shadow.dom.make_dom_node; } });
Object.defineProperty(module.exports, "SVGElement", { enumerable: false, get: function() { return shadow.dom.SVGElement; } });
Object.defineProperty(module.exports, "form_elements", { enumerable: false, get: function() { return shadow.dom.form_elements; } });
Object.defineProperty(module.exports, "Size", { enumerable: false, get: function() { return shadow.dom.Size; } });
Object.defineProperty(module.exports, "lazy_native_coll_seq", { enumerable: false, get: function() { return shadow.dom.lazy_native_coll_seq; } });
Object.defineProperty(module.exports, "get_parent", { enumerable: false, get: function() { return shadow.dom.get_parent; } });
Object.defineProperty(module.exports, "get_height", { enumerable: false, get: function() { return shadow.dom.get_height; } });
Object.defineProperty(module.exports, "event_chan", { enumerable: false, get: function() { return shadow.dom.event_chan; } });
Object.defineProperty(module.exports, "fragment", { enumerable: false, get: function() { return shadow.dom.fragment; } });
Object.defineProperty(module.exports, "check", { enumerable: false, get: function() { return shadow.dom.check; } });
Object.defineProperty(module.exports, "Coordinate", { enumerable: false, get: function() { return shadow.dom.Coordinate; } });
Object.defineProperty(module.exports, "parse_tag", { enumerable: false, get: function() { return shadow.dom.parse_tag; } });
Object.defineProperty(module.exports, "del_attr", { enumerable: false, get: function() { return shadow.dom.del_attr; } });
Object.defineProperty(module.exports, "reload_BANG_", { enumerable: false, get: function() { return shadow.dom.reload_BANG_; } });
Object.defineProperty(module.exports, "destructure_node", { enumerable: false, get: function() { return shadow.dom.destructure_node; } });
Object.defineProperty(module.exports, "remove_style", { enumerable: false, get: function() { return shadow.dom.remove_style; } });
Object.defineProperty(module.exports, "append", { enumerable: false, get: function() { return shadow.dom.append; } });
Object.defineProperty(module.exports, "px", { enumerable: false, get: function() { return shadow.dom.px; } });
Object.defineProperty(module.exports, "get_value", { enumerable: false, get: function() { return shadow.dom.get_value; } });
Object.defineProperty(module.exports, "ev_stop", { enumerable: false, get: function() { return shadow.dom.ev_stop; } });
Object.defineProperty(module.exports, "_to_dom", { enumerable: false, get: function() { return shadow.dom._to_dom; } });
Object.defineProperty(module.exports, "xmlns", { enumerable: false, get: function() { return shadow.dom.xmlns; } });
Object.defineProperty(module.exports, "matches", { enumerable: false, get: function() { return shadow.dom.matches; } });
Object.defineProperty(module.exports, "insert_first", { enumerable: false, get: function() { return shadow.dom.insert_first; } });
Object.defineProperty(module.exports, "map__GT_Coordinate", { enumerable: false, get: function() { return shadow.dom.map__GT_Coordinate; } });
Object.defineProperty(module.exports, "create_dom_node", { enumerable: false, get: function() { return shadow.dom.create_dom_node; } });
Object.defineProperty(module.exports, "__GT_NativeColl", { enumerable: false, get: function() { return shadow.dom.__GT_NativeColl; } });
Object.defineProperty(module.exports, "get_position", { enumerable: false, get: function() { return shadow.dom.get_position; } });
Object.defineProperty(module.exports, "dom_node", { enumerable: false, get: function() { return shadow.dom.dom_node; } });
Object.defineProperty(module.exports, "set_data", { enumerable: false, get: function() { return shadow.dom.set_data; } });
Object.defineProperty(module.exports, "get_client_position", { enumerable: false, get: function() { return shadow.dom.get_client_position; } });
Object.defineProperty(module.exports, "get_page_offset", { enumerable: false, get: function() { return shadow.dom.get_page_offset; } });
Object.defineProperty(module.exports, "query_one", { enumerable: false, get: function() { return shadow.dom.query_one; } });
Object.defineProperty(module.exports, "get_next_sibling", { enumerable: false, get: function() { return shadow.dom.get_next_sibling; } });
Object.defineProperty(module.exports, "set_style", { enumerable: false, get: function() { return shadow.dom.set_style; } });
Object.defineProperty(module.exports, "pct", { enumerable: false, get: function() { return shadow.dom.pct; } });
Object.defineProperty(module.exports, "get_previous_sibling", { enumerable: false, get: function() { return shadow.dom.get_previous_sibling; } });
Object.defineProperty(module.exports, "ancestor_by_tag", { enumerable: false, get: function() { return shadow.dom.ancestor_by_tag; } });
Object.defineProperty(module.exports, "build", { enumerable: false, get: function() { return shadow.dom.build; } });
Object.defineProperty(module.exports, "set_html", { enumerable: false, get: function() { return shadow.dom.set_html; } });
Object.defineProperty(module.exports, "build_url", { enumerable: false, get: function() { return shadow.dom.build_url; } });
Object.defineProperty(module.exports, "ancestor_by_class", { enumerable: false, get: function() { return shadow.dom.ancestor_by_class; } });
Object.defineProperty(module.exports, "__GT_Size", { enumerable: false, get: function() { return shadow.dom.__GT_Size; } });
Object.defineProperty(module.exports, "add_class", { enumerable: false, get: function() { return shadow.dom.add_class; } });
Object.defineProperty(module.exports, "node_name", { enumerable: false, get: function() { return shadow.dom.node_name; } });
Object.defineProperty(module.exports, "parents", { enumerable: false, get: function() { return shadow.dom.parents; } });
Object.defineProperty(module.exports, "on_query", { enumerable: false, get: function() { return shadow.dom.on_query; } });
Object.defineProperty(module.exports, "create_svg_node", { enumerable: false, get: function() { return shadow.dom.create_svg_node; } });
Object.defineProperty(module.exports, "set_attrs", { enumerable: false, get: function() { return shadow.dom.set_attrs; } });
Object.defineProperty(module.exports, "svg", { enumerable: false, get: function() { return shadow.dom.svg; } });
Object.defineProperty(module.exports, "index_of", { enumerable: false, get: function() { return shadow.dom.index_of; } });
Object.defineProperty(module.exports, "replace_node", { enumerable: false, get: function() { return shadow.dom.replace_node; } });
Object.defineProperty(module.exports, "size__GT_clj", { enumerable: false, get: function() { return shadow.dom.size__GT_clj; } });
Object.defineProperty(module.exports, "set_attr_STAR_", { enumerable: false, get: function() { return shadow.dom.set_attr_STAR_; } });
Object.defineProperty(module.exports, "on", { enumerable: false, get: function() { return shadow.dom.on; } });
Object.defineProperty(module.exports, "remove_style_STAR_", { enumerable: false, get: function() { return shadow.dom.remove_style_STAR_; } });
Object.defineProperty(module.exports, "toggle_class", { enumerable: false, get: function() { return shadow.dom.toggle_class; } });
Object.defineProperty(module.exports, "set_value", { enumerable: false, get: function() { return shadow.dom.set_value; } });
//# sourceMappingURL=shadow.dom.js.map
