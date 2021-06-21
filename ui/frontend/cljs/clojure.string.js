var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./goog.string.string.js");
require("./goog.string.stringbuffer.js");
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

$CLJS.SHADOW_ENV.setLoaded("clojure.string.js");

goog.provide('clojure.string');
clojure.string.seq_reverse = (function clojure$string$seq_reverse(coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.List.EMPTY,coll);
});
clojure.string.re_surrogate_pair = (new RegExp("([\\uD800-\\uDBFF])([\\uDC00-\\uDFFF])","g"));
/**
 * Returns s with its characters reversed.
 */
clojure.string.reverse = (function clojure$string$reverse(s){
return s.replace(clojure.string.re_surrogate_pair,"$2$1").split("").reverse().join("");
});
clojure.string.replace_all = (function clojure$string$replace_all(s,re,replacement){
var r = (new RegExp(re.source,(function (){var G__26973 = "g";
var G__26973__$1 = (cljs.core.truth_(re.ignoreCase)?[G__26973,"i"].join(''):G__26973);
var G__26973__$2 = (cljs.core.truth_(re.multiline)?[G__26973__$1,"m"].join(''):G__26973__$1);
if(cljs.core.truth_(re.unicode)){
return [G__26973__$2,"u"].join('');
} else {
return G__26973__$2;
}
})()));
return s.replace(r,replacement);
});
clojure.string.replace_with = (function clojure$string$replace_with(f){
return (function() { 
var G__27033__delegate = function (args){
var matches = cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),args);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(matches),(1))){
var G__26975 = cljs.core.first(matches);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26975) : f.call(null,G__26975));
} else {
var G__26977 = cljs.core.vec(matches);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26977) : f.call(null,G__26977));
}
};
var G__27033 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27035__i = 0, G__27035__a = new Array(arguments.length -  0);
while (G__27035__i < G__27035__a.length) {G__27035__a[G__27035__i] = arguments[G__27035__i + 0]; ++G__27035__i;}
  args = new cljs.core.IndexedSeq(G__27035__a,0,null);
} 
return G__27033__delegate.call(this,args);};
G__27033.cljs$lang$maxFixedArity = 0;
G__27033.cljs$lang$applyTo = (function (arglist__27036){
var args = cljs.core.seq(arglist__27036);
return G__27033__delegate(args);
});
G__27033.cljs$core$IFn$_invoke$arity$variadic = G__27033__delegate;
return G__27033;
})()
;
});
/**
 * Replaces all instance of match with replacement in s.
 * 
 * match/replacement can be:
 * 
 * string / string
 * pattern / (string or function of match).
 * 
 * See also replace-first.
 * 
 * The replacement is literal (i.e. none of its characters are treated
 * specially) for all cases above except pattern / string.
 * 
 * For pattern / string, $1, $2, etc. in the replacement string are
 * substituted with the string that matched the corresponding
 * parenthesized group in the pattern.
 * 
 * Example:
 * (clojure.string/replace "Almost Pig Latin" #"\b(\w)(\w+)\b" "$2$1ay")
 * -> "lmostAay igPay atinLay"
 */
clojure.string.replace = (function clojure$string$replace(s,match,replacement){
if(typeof match === 'string'){
return s.replace((new RegExp(goog.string.regExpEscape(match),"g")),replacement);
} else {
if((match instanceof RegExp)){
if(typeof replacement === 'string'){
return clojure.string.replace_all(s,match,replacement);
} else {
return clojure.string.replace_all(s,match,clojure.string.replace_with(replacement));
}
} else {
throw ["Invalid match arg: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(match)].join('');

}
}
});
/**
 * Replaces the first instance of match with replacement in s.
 * 
 * match/replacement can be:
 * 
 * string / string
 * pattern / (string or function of match).
 * 
 * See also replace.
 * 
 * The replacement is literal (i.e. none of its characters are treated
 * specially) for all cases above except pattern / string.
 * 
 * For pattern / string, $1, $2, etc. in the replacement string are
 * substituted with the string that matched the corresponding
 * parenthesized group in the pattern.
 * 
 * Example:
 * (clojure.string/replace-first "swap first two words"
 *                               #"(\w+)(\s+)(\w+)" "$3$2$1")
 * -> "first swap two words"
 */
clojure.string.replace_first = (function clojure$string$replace_first(s,match,replacement){
return s.replace(match,replacement);
});
/**
 * Returns a string of all elements in coll, as returned by (seq coll),
 *   separated by an optional separator.
 */
clojure.string.join = (function clojure$string$join(var_args){
var G__26984 = arguments.length;
switch (G__26984) {
case 1:
return clojure.string.join.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.string.join.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.string.join.cljs$core$IFn$_invoke$arity$1 = (function (coll){
var sb = (new goog.string.StringBuffer());
var coll__$1 = cljs.core.seq(coll);
while(true){
if((!((coll__$1 == null)))){
var G__27058 = sb.append(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(coll__$1)));
var G__27059 = cljs.core.next(coll__$1);
sb = G__27058;
coll__$1 = G__27059;
continue;
} else {
return sb.toString();
}
break;
}
}));

(clojure.string.join.cljs$core$IFn$_invoke$arity$2 = (function (separator,coll){
var sb = (new goog.string.StringBuffer());
var coll__$1 = cljs.core.seq(coll);
while(true){
if((!((coll__$1 == null)))){
sb.append(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(coll__$1)));

var coll__$2 = cljs.core.next(coll__$1);
if((coll__$2 == null)){
} else {
sb.append(separator);
}

var G__27075 = sb;
var G__27076 = coll__$2;
sb = G__27075;
coll__$1 = G__27076;
continue;
} else {
return sb.toString();
}
break;
}
}));

(clojure.string.join.cljs$lang$maxFixedArity = 2);

/**
 * Converts string to all upper-case.
 */
clojure.string.upper_case = (function clojure$string$upper_case(s){
return s.toUpperCase();
});
/**
 * Converts string to all lower-case.
 */
clojure.string.lower_case = (function clojure$string$lower_case(s){
return s.toLowerCase();
});
/**
 * Converts first character of the string to upper-case, all other
 *   characters to lower-case.
 */
clojure.string.capitalize = (function clojure$string$capitalize(s){
return goog.string.capitalize(s);
});
clojure.string.pop_last_while_empty = (function clojure$string$pop_last_while_empty(v){
var v__$1 = v;
while(true){
if(("" === cljs.core.peek(v__$1))){
var G__27087 = cljs.core.pop(v__$1);
v__$1 = G__27087;
continue;
} else {
return v__$1;
}
break;
}
});
clojure.string.discard_trailing_if_needed = (function clojure$string$discard_trailing_if_needed(limit,v){
if(((((0) === limit)) && (((1) < cljs.core.count(v))))){
return clojure.string.pop_last_while_empty(v);
} else {
return v;
}
});
clojure.string.split_with_empty_regex = (function clojure$string$split_with_empty_regex(s,limit){
if((((limit <= (0))) || ((limit >= ((2) + cljs.core.count(s)))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.cons("",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.seq(s)))),"");
} else {
var pred__26994 = cljs.core._EQ__EQ_;
var expr__26995 = limit;
if(cljs.core.truth_((pred__26994.cljs$core$IFn$_invoke$arity$2 ? pred__26994.cljs$core$IFn$_invoke$arity$2((1),expr__26995) : pred__26994.call(null,(1),expr__26995)))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[s],null));
} else {
if(cljs.core.truth_((pred__26994.cljs$core$IFn$_invoke$arity$2 ? pred__26994.cljs$core$IFn$_invoke$arity$2((2),expr__26995) : pred__26994.call(null,(2),expr__26995)))){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,["",s],null));
} else {
var c = (limit - (2));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.cons("",cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.seq(s))),(0),c))),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,c));
}
}
}
});
/**
 * Splits string on a regular expression. Optional argument limit is
 *   the maximum number of splits. Not lazy. Returns vector of the splits.
 */
clojure.string.split = (function clojure$string$split(var_args){
var G__27003 = arguments.length;
switch (G__27003) {
case 2:
return clojure.string.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.string.split.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.string.split.cljs$core$IFn$_invoke$arity$2 = (function (s,re){
return clojure.string.split.cljs$core$IFn$_invoke$arity$3(s,re,(0));
}));

(clojure.string.split.cljs$core$IFn$_invoke$arity$3 = (function (s,re,limit){
return clojure.string.discard_trailing_if_needed(limit,((("/(?:)/" === cljs.core.str.cljs$core$IFn$_invoke$arity$1(re)))?clojure.string.split_with_empty_regex(s,limit):(((limit < (1)))?cljs.core.vec(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s).split(re)):(function (){var s__$1 = s;
var limit__$1 = limit;
var parts = cljs.core.PersistentVector.EMPTY;
while(true){
if(((1) === limit__$1)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parts,s__$1);
} else {
var m = cljs.core.re_find(re,s__$1);
if((!((m == null)))){
var index = s__$1.indexOf(m);
var G__27107 = s__$1.substring((index + cljs.core.count(m)));
var G__27108 = (limit__$1 - (1));
var G__27109 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parts,s__$1.substring((0),index));
s__$1 = G__27107;
limit__$1 = G__27108;
parts = G__27109;
continue;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parts,s__$1);
}
}
break;
}
})())));
}));

(clojure.string.split.cljs$lang$maxFixedArity = 3);

/**
 * Splits s on \n or \r\n.
 */
clojure.string.split_lines = (function clojure$string$split_lines(s){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/\n|\r\n/);
});
/**
 * Removes whitespace from both ends of string.
 */
clojure.string.trim = (function clojure$string$trim(s){
return goog.string.trim(s);
});
/**
 * Removes whitespace from the left side of string.
 */
clojure.string.triml = (function clojure$string$triml(s){
return goog.string.trimLeft(s);
});
/**
 * Removes whitespace from the right side of string.
 */
clojure.string.trimr = (function clojure$string$trimr(s){
return goog.string.trimRight(s);
});
/**
 * Removes all trailing newline \n or return \r characters from
 *   string.  Similar to Perl's chomp.
 */
clojure.string.trim_newline = (function clojure$string$trim_newline(s){
var index = s.length;
while(true){
if((index === (0))){
return "";
} else {
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(s,(index - (1)));
if(((("\n" === ch)) || (("\r" === ch)))){
var G__27121 = (index - (1));
index = G__27121;
continue;
} else {
return s.substring((0),index);
}
}
break;
}
});
/**
 * True is s is nil, empty, or contains only whitespace.
 */
clojure.string.blank_QMARK_ = (function clojure$string$blank_QMARK_(s){
return goog.string.isEmptyOrWhitespace(goog.string.makeSafe(s));
});
/**
 * Return a new string, using cmap to escape each character ch
 * from s as follows:
 * 
 * If (cmap ch) is nil, append ch to the new string.
 * If (cmap ch) is non-nil, append (str (cmap ch)) instead.
 */
clojure.string.escape = (function clojure$string$escape(s,cmap){
var buffer = (new goog.string.StringBuffer());
var length = s.length;
var index = (0);
while(true){
if((length === index)){
return buffer.toString();
} else {
var ch = s.charAt(index);
var replacement = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cmap,ch);
if((!((replacement == null)))){
buffer.append(cljs.core.str.cljs$core$IFn$_invoke$arity$1(replacement));
} else {
buffer.append(ch);
}

var G__27133 = (index + (1));
index = G__27133;
continue;
}
break;
}
});
/**
 * Return index of value (string or char) in s, optionally searching
 *   forward from from-index or nil if not found.
 */
clojure.string.index_of = (function clojure$string$index_of(var_args){
var G__27024 = arguments.length;
switch (G__27024) {
case 2:
return clojure.string.index_of.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.string.index_of.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.string.index_of.cljs$core$IFn$_invoke$arity$2 = (function (s,value){
var result = s.indexOf(value);
if((result < (0))){
return null;
} else {
return result;
}
}));

(clojure.string.index_of.cljs$core$IFn$_invoke$arity$3 = (function (s,value,from_index){
var result = s.indexOf(value,from_index);
if((result < (0))){
return null;
} else {
return result;
}
}));

(clojure.string.index_of.cljs$lang$maxFixedArity = 3);

/**
 * Return last index of value (string or char) in s, optionally
 *   searching backward from from-index or nil if not found.
 */
clojure.string.last_index_of = (function clojure$string$last_index_of(var_args){
var G__27028 = arguments.length;
switch (G__27028) {
case 2:
return clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2 = (function (s,value){
var result = s.lastIndexOf(value);
if((result < (0))){
return null;
} else {
return result;
}
}));

(clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$3 = (function (s,value,from_index){
var result = s.lastIndexOf(value,from_index);
if((result < (0))){
return null;
} else {
return result;
}
}));

(clojure.string.last_index_of.cljs$lang$maxFixedArity = 3);

/**
 * True if s starts with substr.
 */
clojure.string.starts_with_QMARK_ = (function clojure$string$starts_with_QMARK_(s,substr){
return goog.string.startsWith(s,substr);
});
/**
 * True if s ends with substr.
 */
clojure.string.ends_with_QMARK_ = (function clojure$string$ends_with_QMARK_(s,substr){
return goog.string.endsWith(s,substr);
});
/**
 * True if s includes substr.
 */
clojure.string.includes_QMARK_ = (function clojure$string$includes_QMARK_(s,substr){
return goog.string.contains(s,substr);
});
Object.defineProperty(module.exports, "ends_with_QMARK_", { enumerable: false, get: function() { return clojure.string.ends_with_QMARK_; } });
Object.defineProperty(module.exports, "seq_reverse", { enumerable: false, get: function() { return clojure.string.seq_reverse; } });
Object.defineProperty(module.exports, "replace_with", { enumerable: false, get: function() { return clojure.string.replace_with; } });
Object.defineProperty(module.exports, "capitalize", { enumerable: false, get: function() { return clojure.string.capitalize; } });
Object.defineProperty(module.exports, "reverse", { enumerable: false, get: function() { return clojure.string.reverse; } });
Object.defineProperty(module.exports, "join", { enumerable: false, get: function() { return clojure.string.join; } });
Object.defineProperty(module.exports, "replace_first", { enumerable: false, get: function() { return clojure.string.replace_first; } });
Object.defineProperty(module.exports, "starts_with_QMARK_", { enumerable: false, get: function() { return clojure.string.starts_with_QMARK_; } });
Object.defineProperty(module.exports, "escape", { enumerable: false, get: function() { return clojure.string.escape; } });
Object.defineProperty(module.exports, "replace_all", { enumerable: false, get: function() { return clojure.string.replace_all; } });
Object.defineProperty(module.exports, "discard_trailing_if_needed", { enumerable: false, get: function() { return clojure.string.discard_trailing_if_needed; } });
Object.defineProperty(module.exports, "last_index_of", { enumerable: false, get: function() { return clojure.string.last_index_of; } });
Object.defineProperty(module.exports, "pop_last_while_empty", { enumerable: false, get: function() { return clojure.string.pop_last_while_empty; } });
Object.defineProperty(module.exports, "includes_QMARK_", { enumerable: false, get: function() { return clojure.string.includes_QMARK_; } });
Object.defineProperty(module.exports, "replace", { enumerable: false, get: function() { return clojure.string.replace; } });
Object.defineProperty(module.exports, "split_lines", { enumerable: false, get: function() { return clojure.string.split_lines; } });
Object.defineProperty(module.exports, "lower_case", { enumerable: false, get: function() { return clojure.string.lower_case; } });
Object.defineProperty(module.exports, "trim_newline", { enumerable: false, get: function() { return clojure.string.trim_newline; } });
Object.defineProperty(module.exports, "upper_case", { enumerable: false, get: function() { return clojure.string.upper_case; } });
Object.defineProperty(module.exports, "split", { enumerable: false, get: function() { return clojure.string.split; } });
Object.defineProperty(module.exports, "trimr", { enumerable: false, get: function() { return clojure.string.trimr; } });
Object.defineProperty(module.exports, "index_of", { enumerable: false, get: function() { return clojure.string.index_of; } });
Object.defineProperty(module.exports, "trim", { enumerable: false, get: function() { return clojure.string.trim; } });
Object.defineProperty(module.exports, "triml", { enumerable: false, get: function() { return clojure.string.triml; } });
Object.defineProperty(module.exports, "blank_QMARK_", { enumerable: false, get: function() { return clojure.string.blank_QMARK_; } });
Object.defineProperty(module.exports, "re_surrogate_pair", { enumerable: false, get: function() { return clojure.string.re_surrogate_pair; } });
Object.defineProperty(module.exports, "split_with_empty_regex", { enumerable: false, get: function() { return clojure.string.split_with_empty_regex; } });
//# sourceMappingURL=clojure.string.js.map
