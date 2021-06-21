var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./shadow.dom.js");
require("./cljs.core.async.js");
require("./clojure.string.js");
require("./clojure.data.js");
require("./cljs.core.async.impl.protocols.js");
require("./shadow.util.js");
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

$CLJS.SHADOW_ENV.setLoaded("shadow.object.js");

goog.provide('shadow.object');
shadow.object.console_friendly = shadow.util.console_friendly;
shadow.object.log = shadow.util.log;
shadow.object.debug = shadow.util.log;
shadow.object.info = shadow.util.log;
shadow.object.warn = shadow.util.log;
shadow.object.error = shadow.util.log;
shadow.object.obj_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
shadow.object.next_id = (function shadow$object$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(shadow.object.obj_id,cljs.core.inc);
});
shadow.object.object_defs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.behavior_fns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instances = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instance_parent = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instance_children = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.events = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.define_event = (function shadow$object$define_event(event_name,desc,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.events,cljs.core.assoc,event_name,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),event_name,new cljs.core.Keyword(null,"description","description",-1428560544),desc,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
});
shadow.object.unmunge = (function shadow$object$unmunge(s){
return clojure.string.replace(clojure.string.replace(s,/_DOT_/,"."),/_/,"-");
});
shadow.object.define_event(new cljs.core.Keyword(null,"init","init",-1875481434),"object initialization",cljs.core.PersistentVector.EMPTY);
shadow.object.define_event(new cljs.core.Keyword(null,"destroy","destroy",-843660405),"object descruction",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cause","cause",231901252),"cause of destruction, :parent means the parent was destroyed, :direct is default"], null)], null));
shadow.object.define_event(new cljs.core.Keyword("dom","init","dom/init",-1875647652),"called after the dom was created but has not entered the document yet",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dom","dom",-1236537922),"the dom that was created"], null)], null));
shadow.object.define_event(new cljs.core.Keyword("dom","entered","dom/entered",506699596),"should be called whenever a dom node is added to the document, since that\n   is not in control of this library its up to you to call this\n   use (so/notify-tree! your-obj :dom/entered) to notify the node and every child you created",cljs.core.PersistentVector.EMPTY);
shadow.object.define_event(new cljs.core.Keyword(null,"bind-children-update","bind-children-update",-1610690160),"need to rethink this",cljs.core.PersistentVector.EMPTY);

/**
 * @interface
 */
shadow.object.IObject = function(){};

var shadow$object$IObject$_id$dyn_36118 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.object._id[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.object._id["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-id",this$);
}
}
});
shadow.object._id = (function shadow$object$_id(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_id$arity$1 == null)))))){
return this$.shadow$object$IObject$_id$arity$1(this$);
} else {
return shadow$object$IObject$_id$dyn_36118(this$);
}
});

var shadow$object$IObject$_type$dyn_36125 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.object._type[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.object._type["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-type",this$);
}
}
});
shadow.object._type = (function shadow$object$_type(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_type$arity$1 == null)))))){
return this$.shadow$object$IObject$_type$arity$1(this$);
} else {
return shadow$object$IObject$_type$dyn_36125(this$);
}
});

var shadow$object$IObject$_data$dyn_36130 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.object._data[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.object._data["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-data",this$);
}
}
});
shadow.object._data = (function shadow$object$_data(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_data$arity$1 == null)))))){
return this$.shadow$object$IObject$_data$arity$1(this$);
} else {
return shadow$object$IObject$_data$dyn_36130(this$);
}
});

var shadow$object$IObject$_update$dyn_36138 = (function (this$,update_fn){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.object._update[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,update_fn) : m__4429__auto__.call(null,this$,update_fn));
} else {
var m__4426__auto__ = (shadow.object._update["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,update_fn) : m__4426__auto__.call(null,this$,update_fn));
} else {
throw cljs.core.missing_protocol("IObject.-update",this$);
}
}
});
/**
 * update and notify watches
 */
shadow.object._update = (function shadow$object$_update(this$,update_fn){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_update$arity$2 == null)))))){
return this$.shadow$object$IObject$_update$arity$2(this$,update_fn);
} else {
return shadow$object$IObject$_update$dyn_36138(this$,update_fn);
}
});

var shadow$object$IObject$_destroy_BANG_$dyn_36141 = (function (this$,cause){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.object._destroy_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,cause) : m__4429__auto__.call(null,this$,cause));
} else {
var m__4426__auto__ = (shadow.object._destroy_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,cause) : m__4426__auto__.call(null,this$,cause));
} else {
throw cljs.core.missing_protocol("IObject.-destroy!",this$);
}
}
});
shadow.object._destroy_BANG_ = (function shadow$object$_destroy_BANG_(this$,cause){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_destroy_BANG_$arity$2 == null)))))){
return this$.shadow$object$IObject$_destroy_BANG_$arity$2(this$,cause);
} else {
return shadow$object$IObject$_destroy_BANG_$dyn_36141(this$,cause);
}
});

shadow.object.get_type = (function shadow$object$get_type(this$){
return shadow.object._type(this$);
});
shadow.object.get_type_attr = (function shadow$object$get_type_attr(var_args){
var G__34943 = arguments.length;
switch (G__34943) {
case 2:
return shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2 = (function (oref,key){
if((oref == null)){
return null;
} else {
var type_id = (((oref instanceof cljs.core.Keyword))?oref:shadow.object._type(oref));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_id,key], null));
}
}));

(shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3 = (function (oref,key,default$){
if((oref == null)){
return default$;
} else {
var type_id = (((oref instanceof cljs.core.Keyword))?oref:shadow.object._type(oref));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_id,key], null),default$);
}
}));

(shadow.object.get_type_attr.cljs$lang$maxFixedArity = 3);

shadow.object.get_dom = (function shadow$object$get_dom(oref){
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(oref);
});
goog.exportSymbol('shadow.object.get_dom', shadow.object.get_dom);
shadow.object.get_by_id = (function shadow$object$get_by_id(id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instances),id);
});
goog.exportSymbol('shadow.object.get_by_id', shadow.object.get_by_id);
shadow.object.get_from_dom = (function shadow$object$get_from_dom(dom){
var oid = shadow.dom.data(dom,new cljs.core.Keyword(null,"oid","oid",-768692334));
if(cljs.core.truth_(oid)){
return shadow.object.get_by_id(parseInt(oid,(10)));
} else {
return null;
}
});
goog.exportSymbol('shadow.object.get_from_dom', shadow.object.get_from_dom);
shadow.object.is_object_QMARK_ = (function shadow$object$is_object_QMARK_(obj_or_dom){
var or__4126__auto__ = (((!((obj_or_dom == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj_or_dom.shadow$object$IObject$))))?true:(((!obj_or_dom.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return shadow.object.get_from_dom(obj_or_dom);
}
});
shadow.object.equal_QMARK_ = (function shadow$object$equal_QMARK_(obj,obj_or_dom){
if((((!((obj == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj.shadow$object$IObject$))))?true:(((!obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj))){
} else {
throw (new Error(["Assert failed: ","can only test objects","\n","(satisfies? IObject obj)"].join('')));
}

if((((!((obj_or_dom == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj_or_dom.shadow$object$IObject$))))?true:(((!obj_or_dom.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._id(obj),shadow.object._id(obj_or_dom));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._id(obj),(function (){var temp__5735__auto__ = shadow.dom.data(obj_or_dom,new cljs.core.Keyword(null,"oid","oid",-768692334));
if(cljs.core.truth_(temp__5735__auto__)){
var oid = temp__5735__auto__;
return parseInt(oid,(10));
} else {
return null;
}
})());
}
});
shadow.object.get_parent = (function shadow$object$get_parent(oref){
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instance_parent),shadow.object._id(oref));
if(cljs.core.truth_(temp__5735__auto__)){
var parent_id = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instances),parent_id);
} else {
return null;
}
});
goog.exportSymbol('shadow.object.get_parent', shadow.object.get_parent);
shadow.object.get_parent_of_type = (function shadow$object$get_parent_of_type(oref,parent_type){
var parent = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(oref);
while(true){
if(cljs.core.truth_(parent)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._type(parent),parent_type)){
return parent;
} else {
var G__36163 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(parent);
parent = G__36163;
continue;
}
} else {
return null;
}
break;
}
});
goog.exportSymbol('shadow.object.get_parent_of_type', shadow.object.get_parent_of_type);
shadow.object.get_children = (function shadow$object$get_children(parent){
var parent_id = shadow.object._id(parent);
var child_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(shadow.object.instance_children),parent_id,cljs.core.PersistentVector.EMPTY);
var instances = cljs.core.deref(shadow.object.instances);
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35073_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(instances,p1__35073_SHARP_);
}),child_ids));
});
goog.exportSymbol('shadow.object.get_children', shadow.object.get_children);
shadow.object.tree_seq = (function shadow$object$tree_seq(var_args){
var G__35100 = arguments.length;
switch (G__35100) {
case 1:
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('shadow.object.tree_seq', shadow.object.tree_seq);

(shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$1 = (function (root){
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2(root,(function (node){
return true;
}));
}));

(shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2 = (function (root,branch_QMARK_){
return cljs.core.tree_seq(branch_QMARK_,shadow.object.get_children,root);
}));

(shadow.object.tree_seq.cljs$lang$maxFixedArity = 2);

shadow.object.get_children_of_type = (function shadow$object$get_children_of_type(oref,type){
var type_kw = (((type instanceof cljs.core.Keyword))?type:shadow.object._type(type));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__35126_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type_kw,shadow.object._type(p1__35126_SHARP_));
}),shadow.object.get_children(oref));
});
/**
 * basically (get-children (:parent this))
 */
shadow.object.get_siblings = (function shadow$object$get_siblings(p__35153){
var map__35158 = p__35153;
var map__35158__$1 = (((((!((map__35158 == null))))?(((((map__35158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35158.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35158):map__35158);
var oref = map__35158__$1;
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35158__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
if(cljs.core.truth_(parent)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object has no parent, thus has no siblings",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref], null));
}

return shadow.object.get_children(parent);
});
/**
 * returns set of all siblings of a common type
 */
shadow.object.get_siblings_of_type = (function shadow$object$get_siblings_of_type(var_args){
var G__35189 = arguments.length;
switch (G__35189) {
case 1:
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$1 = (function (oref){
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2(oref,oref);
}));

(shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2 = (function (oref,type){
var type_kw = (((type instanceof cljs.core.Keyword))?type:shadow.object._type(type));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__35180_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type_kw,shadow.object._type(p1__35180_SHARP_));
}),shadow.object.get_siblings(oref));
}));

(shadow.object.get_siblings_of_type.cljs$lang$maxFixedArity = 2);

shadow.object.get_collection_item = (function shadow$object$get_collection_item(oref){
var item_key = new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366).cljs$core$IFn$_invoke$arity$1(oref);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(oref,item_key);
});
/**
 * find the object that contains this dom node
 */
shadow.object.find_containing_object = (function shadow$object$find_containing_object(dom){
while(true){
var temp__5733__auto__ = shadow.object.get_from_dom(dom);
if(cljs.core.truth_(temp__5733__auto__)){
var obj = temp__5733__auto__;
return obj;
} else {
var temp__5735__auto__ = dom.parentElement;
if(cljs.core.truth_(temp__5735__auto__)){
var parent = temp__5735__auto__;
var G__36180 = parent;
dom = G__36180;
continue;
} else {
return null;
}
}
break;
}
});
shadow.object.notify_BANG_ = (function shadow$object$notify_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36181 = arguments.length;
var i__4737__auto___36182 = (0);
while(true){
if((i__4737__auto___36182 < len__4736__auto___36181)){
args__4742__auto__.push((arguments[i__4737__auto___36182]));

var G__36183 = (i__4737__auto___36182 + (1));
i__4737__auto___36182 = G__36183;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var temp__5735__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),ev], null));
if(cljs.core.truth_(temp__5735__auto__)){
var reactions_to_trigger = temp__5735__auto__;
var seq__35236 = cljs.core.seq(reactions_to_trigger);
var chunk__35237 = null;
var count__35238 = (0);
var i__35239 = (0);
while(true){
if((i__35239 < count__35238)){
var rfn = chunk__35237.cljs$core$IIndexed$_nth$arity$2(null,i__35239);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(rfn,cljs.core.cons(oref,args));


var G__36188 = seq__35236;
var G__36189 = chunk__35237;
var G__36190 = count__35238;
var G__36191 = (i__35239 + (1));
seq__35236 = G__36188;
chunk__35237 = G__36189;
count__35238 = G__36190;
i__35239 = G__36191;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__35236);
if(temp__5735__auto____$1){
var seq__35236__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__35236__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35236__$1);
var G__36195 = cljs.core.chunk_rest(seq__35236__$1);
var G__36196 = c__4556__auto__;
var G__36197 = cljs.core.count(c__4556__auto__);
var G__36198 = (0);
seq__35236 = G__36195;
chunk__35237 = G__36196;
count__35238 = G__36197;
i__35239 = G__36198;
continue;
} else {
var rfn = cljs.core.first(seq__35236__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(rfn,cljs.core.cons(oref,args));


var G__36202 = cljs.core.next(seq__35236__$1);
var G__36203 = null;
var G__36204 = (0);
var G__36205 = (0);
seq__35236 = G__36202;
chunk__35237 = G__36203;
count__35238 = G__36204;
i__35239 = G__36205;
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
}));

(shadow.object.notify_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.notify_BANG_.cljs$lang$applyTo = (function (seq35220){
var G__35221 = cljs.core.first(seq35220);
var seq35220__$1 = cljs.core.next(seq35220);
var G__35222 = cljs.core.first(seq35220__$1);
var seq35220__$2 = cljs.core.next(seq35220__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35221,G__35222,seq35220__$2);
}));

shadow.object.do_notify_tree = (function shadow$object$do_notify_tree(current_obj,ev,notify_fn){
var seq__35306_36210 = cljs.core.seq(shadow.object.get_children(current_obj));
var chunk__35307_36211 = null;
var count__35308_36212 = (0);
var i__35309_36213 = (0);
while(true){
if((i__35309_36213 < count__35308_36212)){
var child_36214 = chunk__35307_36211.cljs$core$IIndexed$_nth$arity$2(null,i__35309_36213);
(shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3 ? shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3(child_36214,ev,notify_fn) : shadow.object.do_notify_tree.call(null,child_36214,ev,notify_fn));


var G__36215 = seq__35306_36210;
var G__36216 = chunk__35307_36211;
var G__36217 = count__35308_36212;
var G__36218 = (i__35309_36213 + (1));
seq__35306_36210 = G__36215;
chunk__35307_36211 = G__36216;
count__35308_36212 = G__36217;
i__35309_36213 = G__36218;
continue;
} else {
var temp__5735__auto___36219 = cljs.core.seq(seq__35306_36210);
if(temp__5735__auto___36219){
var seq__35306_36221__$1 = temp__5735__auto___36219;
if(cljs.core.chunked_seq_QMARK_(seq__35306_36221__$1)){
var c__4556__auto___36223 = cljs.core.chunk_first(seq__35306_36221__$1);
var G__36224 = cljs.core.chunk_rest(seq__35306_36221__$1);
var G__36225 = c__4556__auto___36223;
var G__36226 = cljs.core.count(c__4556__auto___36223);
var G__36227 = (0);
seq__35306_36210 = G__36224;
chunk__35307_36211 = G__36225;
count__35308_36212 = G__36226;
i__35309_36213 = G__36227;
continue;
} else {
var child_36228 = cljs.core.first(seq__35306_36221__$1);
(shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3 ? shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3(child_36228,ev,notify_fn) : shadow.object.do_notify_tree.call(null,child_36228,ev,notify_fn));


var G__36230 = cljs.core.next(seq__35306_36221__$1);
var G__36231 = null;
var G__36232 = (0);
var G__36233 = (0);
seq__35306_36210 = G__36230;
chunk__35307_36211 = G__36231;
count__35308_36212 = G__36232;
i__35309_36213 = G__36233;
continue;
}
} else {
}
}
break;
}

return (notify_fn.cljs$core$IFn$_invoke$arity$1 ? notify_fn.cljs$core$IFn$_invoke$arity$1(current_obj) : notify_fn.call(null,current_obj));
});
shadow.object.notify_tree_BANG_ = (function shadow$object$notify_tree_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36234 = arguments.length;
var i__4737__auto___36235 = (0);
while(true){
if((i__4737__auto___36235 < len__4736__auto___36234)){
args__4742__auto__.push((arguments[i__4737__auto___36235]));

var G__36238 = (i__4737__auto___36235 + (1));
i__4737__auto___36235 = G__36238;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_tree_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(shadow.object.notify_tree_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var notify_fn = (function (obj){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(shadow.object.notify_BANG_,obj,ev,args);
});
return shadow.object.do_notify_tree(oref,ev,notify_fn);
}));

(shadow.object.notify_tree_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.notify_tree_BANG_.cljs$lang$applyTo = (function (seq35338){
var G__35340 = cljs.core.first(seq35338);
var seq35338__$1 = cljs.core.next(seq35338);
var G__35341 = cljs.core.first(seq35338__$1);
var seq35338__$2 = cljs.core.next(seq35338__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35340,G__35341,seq35338__$2);
}));

shadow.object.notify_down_BANG_ = shadow.object.notify_tree_BANG_;
shadow.object.notify_up_BANG_ = (function shadow$object$notify_up_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36242 = arguments.length;
var i__4737__auto___36243 = (0);
while(true){
if((i__4737__auto___36243 < len__4736__auto___36242)){
args__4742__auto__.push((arguments[i__4737__auto___36243]));

var G__36244 = (i__4737__auto___36243 + (1));
i__4737__auto___36243 = G__36244;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_up_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(shadow.object.notify_up_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var current = shadow.object.get_parent(oref);
while(true){
if(cljs.core.truth_(current)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(shadow.object.notify_BANG_,current,ev,args);

var G__36250 = shadow.object.get_parent(current);
current = G__36250;
continue;
} else {
return null;
}
break;
}
}));

(shadow.object.notify_up_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.notify_up_BANG_.cljs$lang$applyTo = (function (seq35381){
var G__35382 = cljs.core.first(seq35381);
var seq35381__$1 = cljs.core.next(seq35381);
var G__35383 = cljs.core.first(seq35381__$1);
var seq35381__$2 = cljs.core.next(seq35381__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35382,G__35383,seq35381__$2);
}));

shadow.object.update_BANG_ = (function shadow$object$update_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36254 = arguments.length;
var i__4737__auto___36255 = (0);
while(true){
if((i__4737__auto___36255 < len__4736__auto___36254)){
args__4742__auto__.push((arguments[i__4737__auto___36255]));

var G__36256 = (i__4737__auto___36255 + (1));
i__4737__auto___36255 = G__36256;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,update_fn,args){
if(cljs.core.fn_QMARK_(update_fn)){
} else {
throw ["update! expects a fn as second arg, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([update_fn], 0))].join('');
}

var id = shadow.object._id(oref);
var data = shadow.object._data(oref);
var work_fn = (function (data__$1){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(update_fn,data__$1,args);
});
return shadow.object._update(oref,work_fn);
}));

(shadow.object.update_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.update_BANG_.cljs$lang$applyTo = (function (seq35390){
var G__35391 = cljs.core.first(seq35390);
var seq35390__$1 = cljs.core.next(seq35390);
var G__35392 = cljs.core.first(seq35390__$1);
var seq35390__$2 = cljs.core.next(seq35390__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35391,G__35392,seq35390__$2);
}));

shadow.object.return_value = (function shadow$object$return_value(oref,return_value){
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","return-value","shadow.object/return-value",1397593360),return_value], 0));
});
shadow.object.set_parent_BANG_ = (function shadow$object$set_parent_BANG_(child,parent){
var child_id = shadow.object._id(child);
var parent_id = shadow.object._id(parent);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.instance_parent,cljs.core.assoc,child_id,parent_id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(shadow.object.instance_children,(function (x){
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$3(x,parent_id,cljs.core.PersistentHashSet.EMPTY);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x,parent_id,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current,child_id));
}));

return true;
});
shadow.object.dom_destroy = (function shadow$object$dom_destroy(this$,cause){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cause,new cljs.core.Keyword(null,"parent","parent",-878878779))){
return shadow.dom.remove(new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$));
} else {
var temp__5733__auto__ = shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword("dom","remove","dom/remove",-131527420));
if(cljs.core.truth_(temp__5733__auto__)){
var custom_remove = temp__5733__auto__;
var G__35431 = this$;
var G__35432 = new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$);
return (custom_remove.cljs$core$IFn$_invoke$arity$2 ? custom_remove.cljs$core$IFn$_invoke$arity$2(G__35431,G__35432) : custom_remove.call(null,G__35431,G__35432));
} else {
return shadow.dom.remove(new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$));
}
}
});
shadow.object.destroy_BANG_ = (function shadow$object$destroy_BANG_(var_args){
var G__35435 = arguments.length;
switch (G__35435) {
case 1:
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (oref){
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.Keyword(null,"direct","direct",-1775717856));
}));

(shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (oref,cause){
return shadow.object._destroy_BANG_(oref,cause);
}));

(shadow.object.destroy_BANG_.cljs$lang$maxFixedArity = 2);

shadow.object.bind_dom_events = (function shadow$object$bind_dom_events(oref,dom,dom_events){
if((cljs.core.rem(cljs.core.count(dom_events),(2)) === (0))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object defined invalid event",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"object-type","object-type",-1889869015),shadow.object._type(oref),new cljs.core.Keyword("dom","events","dom/events",1793437527),dom_events], null));
}

var seq__35439 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),dom_events));
var chunk__35440 = null;
var count__35441 = (0);
var i__35442 = (0);
while(true){
if((i__35442 < count__35441)){
var vec__35464 = chunk__35440.cljs$core$IIndexed$_nth$arity$2(null,i__35442);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35464,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35464,(1),null);
var ev_def = vec__35464;
if((handler == null)){
throw ["ev with nil handler ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev], 0))].join('');
} else {
}

var handler_36290__$1 = (((handler instanceof cljs.core.Keyword))?((function (seq__35439,chunk__35440,count__35441,i__35442,vec__35464,ev,handler,ev_def){
return (function (this$,e,el){
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,el], 0));
});})(seq__35439,chunk__35440,count__35441,i__35442,vec__35464,ev,handler,ev_def))
:handler);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(dom,ev,((function (seq__35439,chunk__35440,count__35441,i__35442,handler_36290__$1,vec__35464,ev,handler,ev_def){
return (function shadow$object$bind_dom_events_$_dom_event_handler(e,el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("A",el.tagName)){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);
} else {
}

return (handler_36290__$1.cljs$core$IFn$_invoke$arity$3 ? handler_36290__$1.cljs$core$IFn$_invoke$arity$3(oref,e,el) : handler_36290__$1.call(null,oref,e,el));
});})(seq__35439,chunk__35440,count__35441,i__35442,handler_36290__$1,vec__35464,ev,handler,ev_def))
);


var G__36296 = seq__35439;
var G__36297 = chunk__35440;
var G__36298 = count__35441;
var G__36299 = (i__35442 + (1));
seq__35439 = G__36296;
chunk__35440 = G__36297;
count__35441 = G__36298;
i__35442 = G__36299;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35439);
if(temp__5735__auto__){
var seq__35439__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35439__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35439__$1);
var G__36300 = cljs.core.chunk_rest(seq__35439__$1);
var G__36301 = c__4556__auto__;
var G__36302 = cljs.core.count(c__4556__auto__);
var G__36303 = (0);
seq__35439 = G__36300;
chunk__35440 = G__36301;
count__35441 = G__36302;
i__35442 = G__36303;
continue;
} else {
var vec__35472 = cljs.core.first(seq__35439__$1);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35472,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35472,(1),null);
var ev_def = vec__35472;
if((handler == null)){
throw ["ev with nil handler ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev], 0))].join('');
} else {
}

var handler_36304__$1 = (((handler instanceof cljs.core.Keyword))?((function (seq__35439,chunk__35440,count__35441,i__35442,vec__35472,ev,handler,ev_def,seq__35439__$1,temp__5735__auto__){
return (function (this$,e,el){
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,el], 0));
});})(seq__35439,chunk__35440,count__35441,i__35442,vec__35472,ev,handler,ev_def,seq__35439__$1,temp__5735__auto__))
:handler);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(dom,ev,((function (seq__35439,chunk__35440,count__35441,i__35442,handler_36304__$1,vec__35472,ev,handler,ev_def,seq__35439__$1,temp__5735__auto__){
return (function shadow$object$bind_dom_events_$_dom_event_handler(e,el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("A",el.tagName)){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);
} else {
}

return (handler_36304__$1.cljs$core$IFn$_invoke$arity$3 ? handler_36304__$1.cljs$core$IFn$_invoke$arity$3(oref,e,el) : handler_36304__$1.call(null,oref,e,el));
});})(seq__35439,chunk__35440,count__35441,i__35442,handler_36304__$1,vec__35472,ev,handler,ev_def,seq__35439__$1,temp__5735__auto__))
);


var G__36312 = cljs.core.next(seq__35439__$1);
var G__36313 = null;
var G__36314 = (0);
var G__36315 = (0);
seq__35439 = G__36312;
chunk__35440 = G__36313;
count__35441 = G__36314;
i__35442 = G__36315;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.object.reaction_merge = (function shadow$object$reaction_merge(result,p__35489){
var vec__35490 = p__35489;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35490,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35490,(1),null);
if(cljs.core.truth_((function (){var and__4115__auto__ = event;
if(cljs.core.truth_(and__4115__auto__)){
return handler;
} else {
return and__4115__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid reaction",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
}

var current = cljs.core.get.cljs$core$IFn$_invoke$arity$3(result,event,cljs.core.List.EMPTY);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,event,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current,handler));
});
shadow.object.merge_reactions = (function shadow$object$merge_reactions(result,behavior){
if(cljs.core.sequential_QMARK_(behavior)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("behaviors must be vectors",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));
}

if(cljs.core.even_QMARK_(cljs.core.count(behavior))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid behavior",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(shadow.object.reaction_merge,result,cljs.core.reverse(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),behavior)));
});
shadow.object.merge_behaviors = (function shadow$object$merge_behaviors(result,behavior){
if(cljs.core.sequential_QMARK_(behavior)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,behavior);
} else {
if(cljs.core.map_QMARK_(behavior)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"watch","watch",380988277)], null),(function (watches){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(watches,new cljs.core.Keyword(null,"watch","watch",380988277).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY));
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","events","dom/events",1793437527)], null),(function (default$){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(default$,new cljs.core.Keyword("dom","events","dom/events",1793437527).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY)));
}));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("behavior not understood",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));

}
}
});
shadow.object.define = (function shadow$object$define(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36331 = arguments.length;
var i__4737__auto___36332 = (0);
while(true){
if((i__4737__auto___36332 < len__4736__auto___36331)){
args__4742__auto__.push((arguments[i__4737__auto___36332]));

var G__36334 = (i__4737__auto___36332 + (1));
i__4737__auto___36332 = G__36334;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.object.define.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.object.define.cljs$core$IFn$_invoke$arity$variadic = (function (id,args){
if((id instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object id needs to be a keyword",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

if(cljs.core.even_QMARK_(cljs.core.count(args))){
} else {
throw ["invalid object definition ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)," args: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0))].join('');
}

if(cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.object_defs),id)){
console.warn(["object already defined ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
} else {
}

try{var odef = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,args);
var reactions = shadow.object.merge_reactions(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$2(odef,cljs.core.PersistentVector.EMPTY));
var odef__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(odef,new cljs.core.Keyword("shadow.object","id","shadow.object/id",-647954841),id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),reactions], 0));
var odef__$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(shadow.object.merge_behaviors,odef__$1,cljs.core.reverse(new cljs.core.Keyword(null,"behaviors","behaviors",120724909).cljs$core$IFn$_invoke$arity$2(odef__$1,cljs.core.PersistentVector.EMPTY)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.object_defs,cljs.core.assoc,id,odef__$2);

return odef__$2;
}catch (e35578){if((e35578 instanceof Object)){
var e = e35578;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("failed to define object",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
} else {
throw e35578;

}
}}));

(shadow.object.define.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.object.define.cljs$lang$applyTo = (function (seq35539){
var G__35544 = cljs.core.first(seq35539);
var seq35539__$1 = cljs.core.next(seq35539);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35544,seq35539__$1);
}));

shadow.object.merge_defaults = (function shadow$object$merge_defaults(data,type){
var defaults = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.Keyword(null,"defaults","defaults",976027214)], null));
if((defaults == null)){
return data;
} else {
if(cljs.core.map_QMARK_(defaults)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([defaults,data], 0));
} else {
if(cljs.core.fn_QMARK_(defaults)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(defaults.cljs$core$IFn$_invoke$arity$0 ? defaults.cljs$core$IFn$_invoke$arity$0() : defaults.call(null)),data], 0));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid object defaults",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"defaults","defaults",976027214),defaults,new cljs.core.Keyword(null,"type","type",1174270348),type], null));

}
}
}
});
shadow.object.make_dom = (function shadow$object$make_dom(var_args){
var G__35642 = arguments.length;
switch (G__35642) {
case 3:
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.make_dom.cljs$core$IFn$_invoke$arity$3 = (function (oref,dom_key,events_key){
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4(oref,dom_key,events_key,null);
}));

(shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4 = (function (oref,dom_key,events_key,value){
var dom_fn = (((dom_key instanceof cljs.core.Keyword))?shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2(oref,dom_key):dom_key);
var events = (((events_key instanceof cljs.core.Keyword))?shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3(oref,events_key,cljs.core.PersistentVector.EMPTY):events_key);
var dom = (function (){var G__35663 = (dom_fn.cljs$core$IFn$_invoke$arity$2 ? dom_fn.cljs$core$IFn$_invoke$arity$2(oref,value) : dom_fn.call(null,oref,value));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__35663) : shadow.dom.build.call(null,G__35663));
})();
shadow.object.bind_dom_events(oref,dom,events);

return dom;
}));

(shadow.object.make_dom.cljs$lang$maxFixedArity = 4);

shadow.object.alive_QMARK_ = (function shadow$object$alive_QMARK_(obj){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.instances),shadow.object._id(obj));
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
shadow.object.Watch = (function (key,handler,__meta,__extmap,__hash){
this.key = key;
this.handler = handler;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.object.Watch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.object.Watch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k35671,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__35685 = k35671;
var G__35685__$1 = (((G__35685 instanceof cljs.core.Keyword))?G__35685.fqn:null);
switch (G__35685__$1) {
case "key":
return self__.key;

break;
case "handler":
return self__.handler;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35671,else__4383__auto__);

}
}));

(shadow.object.Watch.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__35690){
var vec__35691 = p__35690;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35691,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35691,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.object.Watch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.object.Watch{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key","key",-1516042587),self__.key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler],null))], null),self__.__extmap));
}));

(shadow.object.Watch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35670){
var self__ = this;
var G__35670__$1 = this;
return (new cljs.core.RecordIter((0),G__35670__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"handler","handler",-195596612)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.object.Watch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.object.Watch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.object.Watch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.object.Watch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-17677043 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.object.Watch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35672,other35673){
var self__ = this;
var this35672__$1 = this;
return (((!((other35673 == null)))) && ((this35672__$1.constructor === other35673.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35672__$1.key,other35673.key)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35672__$1.handler,other35673.handler)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35672__$1.__extmap,other35673.__extmap)));
}));

(shadow.object.Watch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"handler","handler",-195596612),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.object.Watch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__35670){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__35712 = cljs.core.keyword_identical_QMARK_;
var expr__35713 = k__4388__auto__;
if(cljs.core.truth_((pred__35712.cljs$core$IFn$_invoke$arity$2 ? pred__35712.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587),expr__35713) : pred__35712.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),expr__35713)))){
return (new shadow.object.Watch(G__35670,self__.handler,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35712.cljs$core$IFn$_invoke$arity$2 ? pred__35712.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"handler","handler",-195596612),expr__35713) : pred__35712.call(null,new cljs.core.Keyword(null,"handler","handler",-195596612),expr__35713)))){
return (new shadow.object.Watch(self__.key,G__35670,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__35670),null));
}
}
}));

(shadow.object.Watch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"key","key",-1516042587),self__.key,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler,null))], null),self__.__extmap));
}));

(shadow.object.Watch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__35670){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.object.Watch(self__.key,self__.handler,G__35670,self__.__extmap,self__.__hash));
}));

(shadow.object.Watch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.object.Watch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"handler","handler",1444934915,null)], null);
}));

(shadow.object.Watch.cljs$lang$type = true);

(shadow.object.Watch.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.object/Watch",null,(1),null));
}));

(shadow.object.Watch.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.object/Watch");
}));

/**
 * Positional factory function for shadow.object/Watch.
 */
shadow.object.__GT_Watch = (function shadow$object$__GT_Watch(key,handler){
return (new shadow.object.Watch(key,handler,null,null,null));
});

/**
 * Factory function for shadow.object/Watch, taking a map of keywords to field values.
 */
shadow.object.map__GT_Watch = (function shadow$object$map__GT_Watch(G__35674){
var extmap__4419__auto__ = (function (){var G__35726 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35674,new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler","handler",-195596612)], 0));
if(cljs.core.record_QMARK_(G__35674)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35726);
} else {
return G__35726;
}
})();
return (new shadow.object.Watch(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__35674),new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(G__35674),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IEquiv}
 * @implements {shadow.object.IObject}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {shadow.dom.SVGElement}
 * @implements {cljs.core.ILookup}
*/
shadow.object.ObjectRef = (function (id,type,data,watches,result_chan){
this.id = id;
this.type = type;
this.data = data;
this.watches = watches;
this.result_chan = result_chan;
this.cljs$lang$protocol_mask$partition0$ = 2149613824;
this.cljs$lang$protocol_mask$partition1$ = 2;
});
(shadow.object.ObjectRef.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.result_chan,handler);
}));

(shadow.object.ObjectRef.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0));
}));

(shadow.object.ObjectRef.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779),k)){
return shadow.object.get_parent(this$__$1);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.data,k);
}
}));

(shadow.object.ObjectRef.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,d){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779),k)){
return shadow.object.get_parent(this$__$1);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.data,k,d);
}
}));

(shadow.object.ObjectRef.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._write(writer,["#<ObjectRef {:id ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.id),", :type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.type),"}>"].join(''));
}));

(shadow.object.ObjectRef.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(self__.data);
}));

(shadow.object.ObjectRef.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (((other instanceof shadow.object.ObjectRef)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.shadow$object$IObject$_id$arity$1(null),other.shadow$object$IObject$_id$arity$1(null))));
}));

(shadow.object.ObjectRef.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(self__.data);
}));

(shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
throw (new Error("who be calling?"));
}));

(shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return (self__.watches = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.watches,(new shadow.object.Watch(key,f,null,null,null))));
}));

(shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return (self__.watches = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__35728_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__35728_SHARP_));
}),self__.watches));
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_id$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.id;
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_type$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.type;
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_data$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.data;
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_update$arity$2 = (function (this$,update_fn){
var self__ = this;
var this$__$1 = this;
var old = self__.data;
var new$ = (update_fn.cljs$core$IFn$_invoke$arity$1 ? update_fn.cljs$core$IFn$_invoke$arity$1(self__.data) : update_fn.call(null,self__.data));
(self__.data = new$);

var seq__35752 = cljs.core.seq(self__.watches);
var chunk__35753 = null;
var count__35754 = (0);
var i__35755 = (0);
while(true){
if((i__35755 < count__35754)){
var map__35773 = chunk__35753.cljs$core$IIndexed$_nth$arity$2(null,i__35755);
var map__35773__$1 = (((((!((map__35773 == null))))?(((((map__35773.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35773.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35773):map__35773);
var watch = map__35773__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35773__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35773__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(shadow.object.alive_QMARK_(this$__$1)){
(handler.cljs$core$IFn$_invoke$arity$4 ? handler.cljs$core$IFn$_invoke$arity$4(key,this$__$1,old,new$) : handler.call(null,key,this$__$1,old,new$));
} else {
}


var G__36521 = seq__35752;
var G__36522 = chunk__35753;
var G__36523 = count__35754;
var G__36524 = (i__35755 + (1));
seq__35752 = G__36521;
chunk__35753 = G__36522;
count__35754 = G__36523;
i__35755 = G__36524;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35752);
if(temp__5735__auto__){
var seq__35752__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35752__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35752__$1);
var G__36529 = cljs.core.chunk_rest(seq__35752__$1);
var G__36530 = c__4556__auto__;
var G__36531 = cljs.core.count(c__4556__auto__);
var G__36532 = (0);
seq__35752 = G__36529;
chunk__35753 = G__36530;
count__35754 = G__36531;
i__35755 = G__36532;
continue;
} else {
var map__35781 = cljs.core.first(seq__35752__$1);
var map__35781__$1 = (((((!((map__35781 == null))))?(((((map__35781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35781.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35781):map__35781);
var watch = map__35781__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35781__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35781__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(shadow.object.alive_QMARK_(this$__$1)){
(handler.cljs$core$IFn$_invoke$arity$4 ? handler.cljs$core$IFn$_invoke$arity$4(key,this$__$1,old,new$) : handler.call(null,key,this$__$1,old,new$));
} else {
}


var G__36540 = cljs.core.next(seq__35752__$1);
var G__36541 = null;
var G__36542 = (0);
var G__36543 = (0);
seq__35752 = G__36540;
chunk__35753 = G__36541;
count__35754 = G__36542;
i__35755 = G__36543;
continue;
}
} else {
return null;
}
}
break;
}
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_destroy_BANG_$arity$2 = (function (this$,cause){
var self__ = this;
var this$__$1 = this;
var parent_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instance_parent),self__.id);
var seq__35791_36545 = cljs.core.seq(shadow.object.get_children(this$__$1));
var chunk__35792_36546 = null;
var count__35793_36547 = (0);
var i__35794_36549 = (0);
while(true){
if((i__35794_36549 < count__35793_36547)){
var child_36550 = chunk__35792_36546.cljs$core$IIndexed$_nth$arity$2(null,i__35794_36549);
shadow.object._destroy_BANG_(child_36550,new cljs.core.Keyword(null,"parent","parent",-878878779));


var G__36551 = seq__35791_36545;
var G__36552 = chunk__35792_36546;
var G__36553 = count__35793_36547;
var G__36554 = (i__35794_36549 + (1));
seq__35791_36545 = G__36551;
chunk__35792_36546 = G__36552;
count__35793_36547 = G__36553;
i__35794_36549 = G__36554;
continue;
} else {
var temp__5735__auto___36556 = cljs.core.seq(seq__35791_36545);
if(temp__5735__auto___36556){
var seq__35791_36557__$1 = temp__5735__auto___36556;
if(cljs.core.chunked_seq_QMARK_(seq__35791_36557__$1)){
var c__4556__auto___36559 = cljs.core.chunk_first(seq__35791_36557__$1);
var G__36563 = cljs.core.chunk_rest(seq__35791_36557__$1);
var G__36564 = c__4556__auto___36559;
var G__36565 = cljs.core.count(c__4556__auto___36559);
var G__36566 = (0);
seq__35791_36545 = G__36563;
chunk__35792_36546 = G__36564;
count__35793_36547 = G__36565;
i__35794_36549 = G__36566;
continue;
} else {
var child_36567 = cljs.core.first(seq__35791_36557__$1);
shadow.object._destroy_BANG_(child_36567,new cljs.core.Keyword(null,"parent","parent",-878878779));


var G__36570 = cljs.core.next(seq__35791_36557__$1);
var G__36571 = null;
var G__36572 = (0);
var G__36573 = (0);
seq__35791_36545 = G__36570;
chunk__35792_36546 = G__36571;
count__35793_36547 = G__36572;
i__35794_36549 = G__36573;
continue;
}
} else {
}
}
break;
}

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$__$1,new cljs.core.Keyword(null,"destroy","destroy",-843660405),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cause], 0));

shadow.object.dom_destroy(this$__$1,cause);

var return_value_36577 = new cljs.core.Keyword("shadow.object","return-value","shadow.object/return-value",1397593360).cljs$core$IFn$_invoke$arity$1(this$__$1);
if((return_value_36577 == null)){
} else {
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.result_chan,return_value_36577);
}

cljs.core.async.close_BANG_(self__.result_chan);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.object.instances,cljs.core.dissoc,self__.id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.object.instance_parent,cljs.core.dissoc,self__.id);

if(cljs.core.truth_(parent_id)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(shadow.object.instance_children,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent_id], null),cljs.core.disj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.id], 0));
} else {
return null;
}
}));

(shadow.object.ObjectRef.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.data;
}));

(shadow.object.ObjectRef.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"result-chan","result-chan",3070926,null)], null);
}));

(shadow.object.ObjectRef.cljs$lang$type = true);

(shadow.object.ObjectRef.cljs$lang$ctorStr = "shadow.object/ObjectRef");

(shadow.object.ObjectRef.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.object/ObjectRef");
}));

/**
 * Positional factory function for shadow.object/ObjectRef.
 */
shadow.object.__GT_ObjectRef = (function shadow$object$__GT_ObjectRef(id,type,data,watches,result_chan){
return (new shadow.object.ObjectRef(id,type,data,watches,result_chan));
});

shadow.object.add_reaction_BANG_ = (function shadow$object$add_reaction_BANG_(var_args){
var G__35832 = arguments.length;
switch (G__35832) {
case 3:
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (oref,ev,handler_fn){
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev,handler_fn], null));
}));

(shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (oref,list){
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.update_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,list], 0));
}));

(shadow.object.add_reaction_BANG_.cljs$lang$maxFixedArity = 3);

shadow.object.bind_change = (function shadow$object$bind_change(var_args){
var G__35838 = arguments.length;
switch (G__35838) {
case 3:
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3 = (function (oref,attr,callback){
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4(oref,attr,callback,cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bind-change"));
}));

(shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4 = (function (oref,attr,callback,watch_key){
if((((!((oref == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === oref.shadow$object$IObject$))))?true:(((!oref.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,oref):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,oref))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("binding currently only supports shadow objects, other atoms might leak, may add later",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref,new cljs.core.Keyword(null,"attr","attr",-604132353),attr], null));
}

var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
return cljs.core.add_watch(oref,watch_key,(function shadow$object$bind_change_watch(_,___$1,old,new$){
var ov = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old,attr__$1);
var nv = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new$,attr__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ov,nv)){
return null;
} else {
return (callback.cljs$core$IFn$_invoke$arity$2 ? callback.cljs$core$IFn$_invoke$arity$2(ov,nv) : callback.call(null,ov,nv));
}
}));
}));

(shadow.object.bind_change.cljs$lang$maxFixedArity = 4);

shadow.object.dom_enter = (function shadow$object$dom_enter(parent,child){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(parent,child);

if(cljs.core.truth_(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1(parent))){
return shadow.object.notify_tree_BANG_(child,new cljs.core.Keyword("dom","entered","dom/entered",506699596));
} else {
return null;
}
});
shadow.object.create = (function shadow$object$create(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36627 = arguments.length;
var i__4737__auto___36628 = (0);
while(true){
if((i__4737__auto___36628 < len__4736__auto___36627)){
args__4742__auto__.push((arguments[i__4737__auto___36628]));

var G__36629 = (i__4737__auto___36628 + (1));
i__4737__auto___36628 = G__36629;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return shadow.object.create.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(shadow.object.create.cljs$core$IFn$_invoke$arity$variadic = (function (type,args,node_children){
if(cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.object_defs),type)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["cannot create unknown child type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

if(cljs.core.map_QMARK_(args)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("so/create second arg must be a map",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

var oid = shadow.object.next_id();
var parent = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(args);
var result_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var odef = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),type);
var obj = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(shadow.object.merge_defaults(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(args,new cljs.core.Keyword("shadow.object","object-id","shadow.object/object-id",-685993804),oid,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),cljs.core.get.cljs$core$IFn$_invoke$arity$3(odef,new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),cljs.core.PersistentArrayMap.EMPTY)], 0)),type),new cljs.core.Keyword(null,"parent","parent",-878878779),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dom","dom",-1236537922)], 0));
var oref = (new shadow.object.ObjectRef(oid,type,obj,cljs.core.PersistentVector.EMPTY,result_chan));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.instances,cljs.core.assoc,oid,oref);

if(cljs.core.truth_(parent)){
shadow.object.set_parent_BANG_(oref,parent);
} else {
}

shadow.object.notify_BANG_(oref,new cljs.core.Keyword(null,"init","init",-1875481434));

var dom_events_36638 = new cljs.core.Keyword("dom","events","dom/events",1793437527).cljs$core$IFn$_invoke$arity$2(odef,cljs.core.PersistentVector.EMPTY);
var temp__5733__auto___36642 = new cljs.core.Keyword(null,"dom","dom",-1236537922).cljs$core$IFn$_invoke$arity$1(args);
if(cljs.core.truth_(temp__5733__auto___36642)){
var dom_36643 = temp__5733__auto___36642;
shadow.dom.set_data(dom_36643,new cljs.core.Keyword(null,"oid","oid",-768692334),oid);

shadow.object.bind_dom_events(oref,dom_36643,dom_events_36638);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311),dom_36643], 0));

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,new cljs.core.Keyword("dom","init","dom/init",-1875647652),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dom_36643], 0));
} else {
var temp__5735__auto___36645 = new cljs.core.Keyword(null,"dom","dom",-1236537922).cljs$core$IFn$_invoke$arity$1(odef);
if(cljs.core.truth_(temp__5735__auto___36645)){
var dom_fn_36646 = temp__5735__auto___36645;
var dom_36647 = (function (){var G__35865 = (dom_fn_36646.cljs$core$IFn$_invoke$arity$2 ? dom_fn_36646.cljs$core$IFn$_invoke$arity$2(oref,node_children) : dom_fn_36646.call(null,oref,node_children));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__35865) : shadow.dom.build.call(null,G__35865));
})();
shadow.dom.set_data(dom_36647,new cljs.core.Keyword(null,"oid","oid",-768692334),oid);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311),dom_36647], 0));

shadow.object.bind_dom_events(oref,dom_36647,dom_events_36638);

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,new cljs.core.Keyword("dom","init","dom/init",-1875647652),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dom_36647], 0));
} else {
}
}

var temp__5735__auto___36651 = new cljs.core.Keyword(null,"watch","watch",380988277).cljs$core$IFn$_invoke$arity$1(odef);
if(cljs.core.truth_(temp__5735__auto___36651)){
var watches_36652 = temp__5735__auto___36651;
var seq__35873_36653 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),watches_36652));
var chunk__35874_36654 = null;
var count__35875_36655 = (0);
var i__35876_36656 = (0);
while(true){
if((i__35876_36656 < count__35875_36655)){
var vec__35894_36663 = chunk__35874_36654.cljs$core$IIndexed$_nth$arity$2(null,i__35876_36656);
var attr_36664 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35894_36663,(0),null);
var handler_36665 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35894_36663,(1),null);
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr_36664,((function (seq__35873_36653,chunk__35874_36654,count__35875_36655,i__35876_36656,vec__35894_36663,attr_36664,handler_36665,watches_36652,temp__5735__auto___36651,oid,parent,result_chan,odef,obj,oref){
return (function (old,new$){
return (handler_36665.cljs$core$IFn$_invoke$arity$3 ? handler_36665.cljs$core$IFn$_invoke$arity$3(oref,old,new$) : handler_36665.call(null,oref,old,new$));
});})(seq__35873_36653,chunk__35874_36654,count__35875_36655,i__35876_36656,vec__35894_36663,attr_36664,handler_36665,watches_36652,temp__5735__auto___36651,oid,parent,result_chan,odef,obj,oref))
);


var G__36670 = seq__35873_36653;
var G__36671 = chunk__35874_36654;
var G__36672 = count__35875_36655;
var G__36673 = (i__35876_36656 + (1));
seq__35873_36653 = G__36670;
chunk__35874_36654 = G__36671;
count__35875_36655 = G__36672;
i__35876_36656 = G__36673;
continue;
} else {
var temp__5735__auto___36675__$1 = cljs.core.seq(seq__35873_36653);
if(temp__5735__auto___36675__$1){
var seq__35873_36677__$1 = temp__5735__auto___36675__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35873_36677__$1)){
var c__4556__auto___36678 = cljs.core.chunk_first(seq__35873_36677__$1);
var G__36679 = cljs.core.chunk_rest(seq__35873_36677__$1);
var G__36680 = c__4556__auto___36678;
var G__36681 = cljs.core.count(c__4556__auto___36678);
var G__36682 = (0);
seq__35873_36653 = G__36679;
chunk__35874_36654 = G__36680;
count__35875_36655 = G__36681;
i__35876_36656 = G__36682;
continue;
} else {
var vec__35900_36683 = cljs.core.first(seq__35873_36677__$1);
var attr_36684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35900_36683,(0),null);
var handler_36685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35900_36683,(1),null);
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr_36684,((function (seq__35873_36653,chunk__35874_36654,count__35875_36655,i__35876_36656,vec__35900_36683,attr_36684,handler_36685,seq__35873_36677__$1,temp__5735__auto___36675__$1,watches_36652,temp__5735__auto___36651,oid,parent,result_chan,odef,obj,oref){
return (function (old,new$){
return (handler_36685.cljs$core$IFn$_invoke$arity$3 ? handler_36685.cljs$core$IFn$_invoke$arity$3(oref,old,new$) : handler_36685.call(null,oref,old,new$));
});})(seq__35873_36653,chunk__35874_36654,count__35875_36655,i__35876_36656,vec__35900_36683,attr_36684,handler_36685,seq__35873_36677__$1,temp__5735__auto___36675__$1,watches_36652,temp__5735__auto___36651,oid,parent,result_chan,odef,obj,oref))
);


var G__36687 = cljs.core.next(seq__35873_36677__$1);
var G__36688 = null;
var G__36689 = (0);
var G__36690 = (0);
seq__35873_36653 = G__36687;
chunk__35874_36654 = G__36688;
count__35875_36655 = G__36689;
i__35876_36656 = G__36690;
continue;
}
} else {
}
}
break;
}
} else {
}

return oref;
}));

(shadow.object.create.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.create.cljs$lang$applyTo = (function (seq35850){
var G__35851 = cljs.core.first(seq35850);
var seq35850__$1 = cljs.core.next(seq35850);
var G__35852 = cljs.core.first(seq35850__$1);
var seq35850__$2 = cljs.core.next(seq35850__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35851,G__35852,seq35850__$2);
}));

/**
 * [oref attr node-gen] produces a node via (node-gen new-value)
 * watches obj for changes and replaces the generated node on change (node-gen defaults to str)
 * 
 *   only use if the node has no attached behavior like clicks, use bind with an extra object for those
 */
shadow.object.bind_simple = (function shadow$object$bind_simple(var_args){
var G__35910 = arguments.length;
switch (G__35910) {
case 2:
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$2 = (function (oref,attr){
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3(oref,attr,cljs.core.str);
}));

(shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3 = (function (oref,attr,node_gen){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var node_get = (function (p1__35905_SHARP_){
var G__35913 = (node_gen.cljs$core$IFn$_invoke$arity$1 ? node_gen.cljs$core$IFn$_invoke$arity$1(p1__35905_SHARP_) : node_gen.call(null,p1__35905_SHARP_));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__35913) : shadow.dom.build.call(null,G__35913));
});
var node = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(node_get(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,attr__$1)));
var bind_key = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bind");
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr__$1,(function (old,new$){
var new_node = node_get(new$);
var current_node = cljs.core.deref(node);
shadow.dom.replace_node(current_node,new_node);

return cljs.core.reset_BANG_(node,new_node);
}));

return cljs.core.deref(node);
}));

(shadow.object.bind_simple.cljs$lang$maxFixedArity = 3);

/**
 * bind the given attribute a child item
 *   the item will be recreated whenever the value changes (old one will be destroyed)
 */
shadow.object.bind = (function shadow$object$bind(oref,attr,item_type,item_key,item_attrs){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var curval = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,attr__$1);
var make_child_fn = (function (value){
return shadow.object.create(item_type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([item_attrs,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"parent","parent",-878878779),oref,item_key,value])], 0)));
});
var child = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(make_child_fn(curval));
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr__$1,(function (old,new$){
var new_child = make_child_fn(new$);
var current_node = cljs.core.deref(child);
shadow.dom.replace_node(current_node,new_child);

shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(child));

cljs.core.reset_BANG_(child,new_child);

return (shadow.object.notify_down_BANG_.cljs$core$IFn$_invoke$arity$2 ? shadow.object.notify_down_BANG_.cljs$core$IFn$_invoke$arity$2(new_child,new cljs.core.Keyword("dom","entered","dom/entered",506699596)) : shadow.object.notify_down_BANG_.call(null,new_child,new cljs.core.Keyword("dom","entered","dom/entered",506699596)));
}));

return cljs.core.deref(child);
});
shadow.object.coll_destroy_children = (function shadow$object$coll_destroy_children(children,c,diff){
var seq__35922_36715 = cljs.core.seq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(children,(c + diff),c));
var chunk__35923_36716 = null;
var count__35924_36717 = (0);
var i__35925_36718 = (0);
while(true){
if((i__35925_36718 < count__35924_36717)){
var obj_36721 = chunk__35923_36716.cljs$core$IIndexed$_nth$arity$2(null,i__35925_36718);
var obj_36722__$1 = shadow.object.get_from_dom(obj_36721);
shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(obj_36722__$1);


var G__36723 = seq__35922_36715;
var G__36724 = chunk__35923_36716;
var G__36725 = count__35924_36717;
var G__36726 = (i__35925_36718 + (1));
seq__35922_36715 = G__36723;
chunk__35923_36716 = G__36724;
count__35924_36717 = G__36725;
i__35925_36718 = G__36726;
continue;
} else {
var temp__5735__auto___36729 = cljs.core.seq(seq__35922_36715);
if(temp__5735__auto___36729){
var seq__35922_36731__$1 = temp__5735__auto___36729;
if(cljs.core.chunked_seq_QMARK_(seq__35922_36731__$1)){
var c__4556__auto___36732 = cljs.core.chunk_first(seq__35922_36731__$1);
var G__36737 = cljs.core.chunk_rest(seq__35922_36731__$1);
var G__36738 = c__4556__auto___36732;
var G__36739 = cljs.core.count(c__4556__auto___36732);
var G__36740 = (0);
seq__35922_36715 = G__36737;
chunk__35923_36716 = G__36738;
count__35924_36717 = G__36739;
i__35925_36718 = G__36740;
continue;
} else {
var obj_36744 = cljs.core.first(seq__35922_36731__$1);
var obj_36746__$1 = shadow.object.get_from_dom(obj_36744);
shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(obj_36746__$1);


var G__36747 = cljs.core.next(seq__35922_36731__$1);
var G__36748 = null;
var G__36749 = (0);
var G__36750 = (0);
seq__35922_36715 = G__36747;
chunk__35923_36716 = G__36748;
count__35924_36717 = G__36749;
i__35925_36718 = G__36750;
continue;
}
} else {
}
}
break;
}

return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(children,(0),(c + diff));
});
shadow.object.bind_children = (function shadow$object$bind_children(var_args){
var G__35944 = arguments.length;
switch (G__35944) {
case 5:
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.bind_children.cljs$core$IFn$_invoke$arity$5 = (function (node,parent,attr,item_type,item_key){
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6(node,parent,attr,item_type,item_key,(function (p1__35932_SHARP_){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,p1__35932_SHARP_);
}));
}));

(shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6 = (function (node,parent,attr,item_type,item_key,coll_transform){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var update_children = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var coll_dom = (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(node) : shadow.dom.build.call(null,node));
var make_item_fn = (function (p__35954){
var vec__35955 = p__35954;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35955,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35955,(1),null);
var obj = shadow.object.create(item_type,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"parent","parent",-878878779),parent,new cljs.core.Keyword("shadow.object","coll-path","shadow.object/coll-path",1583850048),attr__$1,new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616),key,new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366),item_key,item_key,val]));
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(obj,item_key,(function (old,new$){
var parent_key = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attr__$1,new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(obj));
(shadow.object.log.cljs$core$IFn$_invoke$arity$6 ? shadow.object.log.cljs$core$IFn$_invoke$arity$6("direct child update",parent,obj,key,parent_key,new$) : shadow.object.log.call(null,"direct child update",parent,obj,key,parent_key,new$));

cljs.core.reset_BANG_(update_children,false);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(parent,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([parent_key,new$], 0));

return cljs.core.reset_BANG_(update_children,true);
}));

return obj;
});
var seq__35968_36762 = cljs.core.seq((function (){var G__35973 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parent,attr__$1);
return (coll_transform.cljs$core$IFn$_invoke$arity$1 ? coll_transform.cljs$core$IFn$_invoke$arity$1(G__35973) : coll_transform.call(null,G__35973));
})());
var chunk__35969_36763 = null;
var count__35970_36764 = (0);
var i__35971_36765 = (0);
while(true){
if((i__35971_36765 < count__35970_36764)){
var item_36771 = chunk__35969_36763.cljs$core$IIndexed$_nth$arity$2(null,i__35971_36765);
shadow.object.dom_enter(coll_dom,make_item_fn(item_36771));


var G__36773 = seq__35968_36762;
var G__36774 = chunk__35969_36763;
var G__36775 = count__35970_36764;
var G__36776 = (i__35971_36765 + (1));
seq__35968_36762 = G__36773;
chunk__35969_36763 = G__36774;
count__35970_36764 = G__36775;
i__35971_36765 = G__36776;
continue;
} else {
var temp__5735__auto___36777 = cljs.core.seq(seq__35968_36762);
if(temp__5735__auto___36777){
var seq__35968_36778__$1 = temp__5735__auto___36777;
if(cljs.core.chunked_seq_QMARK_(seq__35968_36778__$1)){
var c__4556__auto___36780 = cljs.core.chunk_first(seq__35968_36778__$1);
var G__36781 = cljs.core.chunk_rest(seq__35968_36778__$1);
var G__36782 = c__4556__auto___36780;
var G__36783 = cljs.core.count(c__4556__auto___36780);
var G__36784 = (0);
seq__35968_36762 = G__36781;
chunk__35969_36763 = G__36782;
count__35970_36764 = G__36783;
i__35971_36765 = G__36784;
continue;
} else {
var item_36786 = cljs.core.first(seq__35968_36778__$1);
shadow.object.dom_enter(coll_dom,make_item_fn(item_36786));


var G__36787 = cljs.core.next(seq__35968_36778__$1);
var G__36788 = null;
var G__36789 = (0);
var G__36790 = (0);
seq__35968_36762 = G__36787;
chunk__35969_36763 = G__36788;
count__35970_36764 = G__36789;
i__35971_36765 = G__36790;
continue;
}
} else {
}
}
break;
}

shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(parent,attr__$1,(function shadow$object$bind_children_watch(old,new$){
if(cljs.core.truth_(cljs.core.deref(update_children))){
var children = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,shadow.dom.children(coll_dom));
var new_coll = cljs.core.vec((coll_transform.cljs$core$IFn$_invoke$arity$1 ? coll_transform.cljs$core$IFn$_invoke$arity$1(new$) : coll_transform.call(null,new$)));
var count_children = cljs.core.count(children);
var count_new = cljs.core.count(new$);
var diff = (count_new - count_children);
var children__$1 = (((diff < (0)))?shadow.object.coll_destroy_children(children,count_children,diff):children);
var count_children__$1 = (function (){var x__4217__auto__ = count_new;
var y__4218__auto__ = count_children;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
var n__4613__auto___36794 = count_children__$1;
var idx_36795 = (0);
while(true){
if((idx_36795 < n__4613__auto___36794)){
var cn_36796 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,idx_36795);
var cc_36797 = shadow.object.get_from_dom(cn_36796);
var ckey_36798 = new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(cc_36797);
var cval_36799 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cc_36797,item_key);
var vec__35984_36800 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new_coll,idx_36795);
var nkey_36801 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35984_36800,(0),null);
var nval_36803 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35984_36800,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ckey_36798,nkey_36801)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cval_36799,nval_36803)))){
} else {
var new_obj_36807 = make_item_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nkey_36801,nval_36803], null));
shadow.dom.replace_node(cn_36796,new_obj_36807);

shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(cc_36797);

shadow.object.notify_tree_BANG_(new_obj_36807,new cljs.core.Keyword("dom","entered","dom/entered",506699596));
}

var G__36809 = (idx_36795 + (1));
idx_36795 = G__36809;
continue;
} else {
}
break;
}

if((diff > (0))){
var seq__35990_36811 = cljs.core.seq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(new_coll,count_children__$1,count_new));
var chunk__35991_36812 = null;
var count__35992_36813 = (0);
var i__35993_36814 = (0);
while(true){
if((i__35993_36814 < count__35992_36813)){
var item_36817 = chunk__35991_36812.cljs$core$IIndexed$_nth$arity$2(null,i__35993_36814);
shadow.object.dom_enter(coll_dom,make_item_fn(item_36817));


var G__36819 = seq__35990_36811;
var G__36820 = chunk__35991_36812;
var G__36821 = count__35992_36813;
var G__36822 = (i__35993_36814 + (1));
seq__35990_36811 = G__36819;
chunk__35991_36812 = G__36820;
count__35992_36813 = G__36821;
i__35993_36814 = G__36822;
continue;
} else {
var temp__5735__auto___36823 = cljs.core.seq(seq__35990_36811);
if(temp__5735__auto___36823){
var seq__35990_36824__$1 = temp__5735__auto___36823;
if(cljs.core.chunked_seq_QMARK_(seq__35990_36824__$1)){
var c__4556__auto___36825 = cljs.core.chunk_first(seq__35990_36824__$1);
var G__36826 = cljs.core.chunk_rest(seq__35990_36824__$1);
var G__36827 = c__4556__auto___36825;
var G__36828 = cljs.core.count(c__4556__auto___36825);
var G__36829 = (0);
seq__35990_36811 = G__36826;
chunk__35991_36812 = G__36827;
count__35992_36813 = G__36828;
i__35993_36814 = G__36829;
continue;
} else {
var item_36832 = cljs.core.first(seq__35990_36824__$1);
shadow.object.dom_enter(coll_dom,make_item_fn(item_36832));


var G__36833 = cljs.core.next(seq__35990_36824__$1);
var G__36834 = null;
var G__36835 = (0);
var G__36836 = (0);
seq__35990_36811 = G__36833;
chunk__35991_36812 = G__36834;
count__35992_36813 = G__36835;
i__35993_36814 = G__36836;
continue;
}
} else {
}
}
break;
}
} else {
}

return shadow.object.notify_BANG_(parent,new cljs.core.Keyword(null,"bind-children-update","bind-children-update",-1610690160));
} else {
return null;
}
}));

return coll_dom;
}));

(shadow.object.bind_children.cljs$lang$maxFixedArity = 6);

shadow.object.remove_in_parent_BANG_ = (function shadow$object$remove_in_parent_BANG_(oref){
var parent = shadow.object.get_parent(oref);
var key = new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(oref);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366).cljs$core$IFn$_invoke$arity$1(oref));
var path = new cljs.core.Keyword("shadow.object","coll-path","shadow.object/coll-path",1583850048).cljs$core$IFn$_invoke$arity$1(oref);
if(cljs.core.truth_((function (){var and__4115__auto__ = key;
if(cljs.core.truth_(and__4115__auto__)){
return path;
} else {
return and__4115__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("remove-in-parent! should only be called from items created via so/bind-children",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref], null));
}

var coll = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parent,path);
var new_coll = shadow.util.remove_item_from_coll(coll,key,value);
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(parent,new cljs.core.Keyword("bind","update","bind/update",1048601733),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path,new_coll], 0));
});
shadow.object.inspect_BANG_ = (function shadow$object$inspect_BANG_(oref){
var G__36011 = "inspect!";
var G__36012 = shadow.object._id(oref);
var G__36013 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.object._type(oref));
var G__36014 = cljs.core.clj__GT_js(cljs.core.deref(shadow.object._data(oref)));
return (shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__36011,G__36012,G__36013,G__36014) : shadow.object.info.call(null,G__36011,G__36012,G__36013,G__36014));
});
shadow.object.dump_BANG_ = (function shadow$object$dump_BANG_(){
(shadow.object.info.cljs$core$IFn$_invoke$arity$1 ? shadow.object.info.cljs$core$IFn$_invoke$arity$1("--------------- LIVE OBJECTS ------------") : shadow.object.info.call(null,"--------------- LIVE OBJECTS ------------"));

var seq__36019_36843 = cljs.core.seq(cljs.core.seq(cljs.core.deref(shadow.object.instances)));
var chunk__36020_36844 = null;
var count__36021_36845 = (0);
var i__36022_36846 = (0);
while(true){
if((i__36022_36846 < count__36021_36845)){
var vec__36059_36847 = chunk__36020_36844.cljs$core$IIndexed$_nth$arity$2(null,i__36022_36846);
var id_36848 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36059_36847,(0),null);
var oref_36849 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36059_36847,(1),null);
var G__36063_36850 = "dump";
var G__36064_36851 = id_36848;
var G__36065_36852 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.object._type(oref_36849)], 0));
var G__36066_36853 = cljs.core.deref(shadow.object._data(oref_36849));
(shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__36063_36850,G__36064_36851,G__36065_36852,G__36066_36853) : shadow.object.info.call(null,G__36063_36850,G__36064_36851,G__36065_36852,G__36066_36853));


var G__36854 = seq__36019_36843;
var G__36855 = chunk__36020_36844;
var G__36856 = count__36021_36845;
var G__36857 = (i__36022_36846 + (1));
seq__36019_36843 = G__36854;
chunk__36020_36844 = G__36855;
count__36021_36845 = G__36856;
i__36022_36846 = G__36857;
continue;
} else {
var temp__5735__auto___36858 = cljs.core.seq(seq__36019_36843);
if(temp__5735__auto___36858){
var seq__36019_36860__$1 = temp__5735__auto___36858;
if(cljs.core.chunked_seq_QMARK_(seq__36019_36860__$1)){
var c__4556__auto___36861 = cljs.core.chunk_first(seq__36019_36860__$1);
var G__36862 = cljs.core.chunk_rest(seq__36019_36860__$1);
var G__36863 = c__4556__auto___36861;
var G__36864 = cljs.core.count(c__4556__auto___36861);
var G__36865 = (0);
seq__36019_36843 = G__36862;
chunk__36020_36844 = G__36863;
count__36021_36845 = G__36864;
i__36022_36846 = G__36865;
continue;
} else {
var vec__36073_36871 = cljs.core.first(seq__36019_36860__$1);
var id_36872 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36073_36871,(0),null);
var oref_36873 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36073_36871,(1),null);
var G__36078_36874 = "dump";
var G__36079_36875 = id_36872;
var G__36080_36876 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.object._type(oref_36873)], 0));
var G__36081_36877 = cljs.core.deref(shadow.object._data(oref_36873));
(shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__36078_36874,G__36079_36875,G__36080_36876,G__36081_36877) : shadow.object.info.call(null,G__36078_36874,G__36079_36875,G__36080_36876,G__36081_36877));


var G__36878 = cljs.core.next(seq__36019_36860__$1);
var G__36879 = null;
var G__36880 = (0);
var G__36881 = (0);
seq__36019_36843 = G__36878;
chunk__36020_36844 = G__36879;
count__36021_36845 = G__36880;
i__36022_36846 = G__36881;
continue;
}
} else {
}
}
break;
}

return (shadow.object.info.cljs$core$IFn$_invoke$arity$1 ? shadow.object.info.cljs$core$IFn$_invoke$arity$1("--------------- //LIVE OBJECTS ------------") : shadow.object.info.call(null,"--------------- //LIVE OBJECTS ------------"));
});
goog.exportSymbol('shadow.object.dump_BANG_', shadow.object.dump_BANG_);
Object.defineProperty(module.exports, "dump_BANG_", { enumerable: true, get: function() { return shadow.object.dump_BANG_; } });
Object.defineProperty(module.exports, "tree_seq", { enumerable: true, get: function() { return shadow.object.tree_seq; } });
Object.defineProperty(module.exports, "object_defs", { enumerable: false, get: function() { return shadow.object.object_defs; } });
Object.defineProperty(module.exports, "get_from_dom", { enumerable: true, get: function() { return shadow.object.get_from_dom; } });
Object.defineProperty(module.exports, "get_siblings", { enumerable: false, get: function() { return shadow.object.get_siblings; } });
Object.defineProperty(module.exports, "get_parent_of_type", { enumerable: true, get: function() { return shadow.object.get_parent_of_type; } });
Object.defineProperty(module.exports, "alive_QMARK_", { enumerable: false, get: function() { return shadow.object.alive_QMARK_; } });
Object.defineProperty(module.exports, "notify_down_BANG_", { enumerable: false, get: function() { return shadow.object.notify_down_BANG_; } });
Object.defineProperty(module.exports, "return_value", { enumerable: false, get: function() { return shadow.object.return_value; } });
Object.defineProperty(module.exports, "reaction_merge", { enumerable: false, get: function() { return shadow.object.reaction_merge; } });
Object.defineProperty(module.exports, "log", { enumerable: false, get: function() { return shadow.object.log; } });
Object.defineProperty(module.exports, "add_reaction_BANG_", { enumerable: false, get: function() { return shadow.object.add_reaction_BANG_; } });
Object.defineProperty(module.exports, "find_containing_object", { enumerable: false, get: function() { return shadow.object.find_containing_object; } });
Object.defineProperty(module.exports, "get_dom", { enumerable: true, get: function() { return shadow.object.get_dom; } });
Object.defineProperty(module.exports, "dom_enter", { enumerable: false, get: function() { return shadow.object.dom_enter; } });
Object.defineProperty(module.exports, "do_notify_tree", { enumerable: false, get: function() { return shadow.object.do_notify_tree; } });
Object.defineProperty(module.exports, "bind", { enumerable: false, get: function() { return shadow.object.bind; } });
Object.defineProperty(module.exports, "notify_tree_BANG_", { enumerable: false, get: function() { return shadow.object.notify_tree_BANG_; } });
Object.defineProperty(module.exports, "notify_BANG_", { enumerable: false, get: function() { return shadow.object.notify_BANG_; } });
Object.defineProperty(module.exports, "get_type", { enumerable: false, get: function() { return shadow.object.get_type; } });
Object.defineProperty(module.exports, "unmunge", { enumerable: false, get: function() { return shadow.object.unmunge; } });
Object.defineProperty(module.exports, "map__GT_Watch", { enumerable: false, get: function() { return shadow.object.map__GT_Watch; } });
Object.defineProperty(module.exports, "destroy_BANG_", { enumerable: false, get: function() { return shadow.object.destroy_BANG_; } });
Object.defineProperty(module.exports, "instance_parent", { enumerable: false, get: function() { return shadow.object.instance_parent; } });
Object.defineProperty(module.exports, "dom_destroy", { enumerable: false, get: function() { return shadow.object.dom_destroy; } });
Object.defineProperty(module.exports, "ObjectRef", { enumerable: false, get: function() { return shadow.object.ObjectRef; } });
Object.defineProperty(module.exports, "notify_up_BANG_", { enumerable: false, get: function() { return shadow.object.notify_up_BANG_; } });
Object.defineProperty(module.exports, "next_id", { enumerable: false, get: function() { return shadow.object.next_id; } });
Object.defineProperty(module.exports, "_type", { enumerable: false, get: function() { return shadow.object._type; } });
Object.defineProperty(module.exports, "remove_in_parent_BANG_", { enumerable: false, get: function() { return shadow.object.remove_in_parent_BANG_; } });
Object.defineProperty(module.exports, "get_parent", { enumerable: true, get: function() { return shadow.object.get_parent; } });
Object.defineProperty(module.exports, "create", { enumerable: false, get: function() { return shadow.object.create; } });
Object.defineProperty(module.exports, "warn", { enumerable: false, get: function() { return shadow.object.warn; } });
Object.defineProperty(module.exports, "__GT_ObjectRef", { enumerable: false, get: function() { return shadow.object.__GT_ObjectRef; } });
Object.defineProperty(module.exports, "_update", { enumerable: false, get: function() { return shadow.object._update; } });
Object.defineProperty(module.exports, "get_children_of_type", { enumerable: false, get: function() { return shadow.object.get_children_of_type; } });
Object.defineProperty(module.exports, "coll_destroy_children", { enumerable: false, get: function() { return shadow.object.coll_destroy_children; } });
Object.defineProperty(module.exports, "define_event", { enumerable: false, get: function() { return shadow.object.define_event; } });
Object.defineProperty(module.exports, "events", { enumerable: false, get: function() { return shadow.object.events; } });
Object.defineProperty(module.exports, "_id", { enumerable: false, get: function() { return shadow.object._id; } });
Object.defineProperty(module.exports, "is_object_QMARK_", { enumerable: false, get: function() { return shadow.object.is_object_QMARK_; } });
Object.defineProperty(module.exports, "__GT_Watch", { enumerable: false, get: function() { return shadow.object.__GT_Watch; } });
Object.defineProperty(module.exports, "_data", { enumerable: false, get: function() { return shadow.object._data; } });
Object.defineProperty(module.exports, "debug", { enumerable: false, get: function() { return shadow.object.debug; } });
Object.defineProperty(module.exports, "behavior_fns", { enumerable: false, get: function() { return shadow.object.behavior_fns; } });
Object.defineProperty(module.exports, "get_type_attr", { enumerable: false, get: function() { return shadow.object.get_type_attr; } });
Object.defineProperty(module.exports, "inspect_BANG_", { enumerable: false, get: function() { return shadow.object.inspect_BANG_; } });
Object.defineProperty(module.exports, "merge_behaviors", { enumerable: false, get: function() { return shadow.object.merge_behaviors; } });
Object.defineProperty(module.exports, "get_children", { enumerable: true, get: function() { return shadow.object.get_children; } });
Object.defineProperty(module.exports, "equal_QMARK_", { enumerable: false, get: function() { return shadow.object.equal_QMARK_; } });
Object.defineProperty(module.exports, "define", { enumerable: false, get: function() { return shadow.object.define; } });
Object.defineProperty(module.exports, "bind_children", { enumerable: false, get: function() { return shadow.object.bind_children; } });
Object.defineProperty(module.exports, "get_siblings_of_type", { enumerable: false, get: function() { return shadow.object.get_siblings_of_type; } });
Object.defineProperty(module.exports, "bind_change", { enumerable: false, get: function() { return shadow.object.bind_change; } });
Object.defineProperty(module.exports, "IObject", { enumerable: false, get: function() { return shadow.object.IObject; } });
Object.defineProperty(module.exports, "obj_id", { enumerable: false, get: function() { return shadow.object.obj_id; } });
Object.defineProperty(module.exports, "get_collection_item", { enumerable: false, get: function() { return shadow.object.get_collection_item; } });
Object.defineProperty(module.exports, "instances", { enumerable: false, get: function() { return shadow.object.instances; } });
Object.defineProperty(module.exports, "console_friendly", { enumerable: false, get: function() { return shadow.object.console_friendly; } });
Object.defineProperty(module.exports, "bind_simple", { enumerable: false, get: function() { return shadow.object.bind_simple; } });
Object.defineProperty(module.exports, "_destroy_BANG_", { enumerable: false, get: function() { return shadow.object._destroy_BANG_; } });
Object.defineProperty(module.exports, "update_BANG_", { enumerable: false, get: function() { return shadow.object.update_BANG_; } });
Object.defineProperty(module.exports, "bind_dom_events", { enumerable: false, get: function() { return shadow.object.bind_dom_events; } });
Object.defineProperty(module.exports, "info", { enumerable: false, get: function() { return shadow.object.info; } });
Object.defineProperty(module.exports, "merge_reactions", { enumerable: false, get: function() { return shadow.object.merge_reactions; } });
Object.defineProperty(module.exports, "make_dom", { enumerable: false, get: function() { return shadow.object.make_dom; } });
Object.defineProperty(module.exports, "set_parent_BANG_", { enumerable: false, get: function() { return shadow.object.set_parent_BANG_; } });
Object.defineProperty(module.exports, "instance_children", { enumerable: false, get: function() { return shadow.object.instance_children; } });
Object.defineProperty(module.exports, "merge_defaults", { enumerable: false, get: function() { return shadow.object.merge_defaults; } });
Object.defineProperty(module.exports, "get_by_id", { enumerable: true, get: function() { return shadow.object.get_by_id; } });
Object.defineProperty(module.exports, "error", { enumerable: false, get: function() { return shadow.object.error; } });
Object.defineProperty(module.exports, "Watch", { enumerable: false, get: function() { return shadow.object.Watch; } });
//# sourceMappingURL=shadow.object.js.map
