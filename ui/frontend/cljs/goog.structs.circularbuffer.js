var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;

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

$CLJS.SHADOW_ENV.setLoaded("goog.structs.circularbuffer.js");

goog.provide("goog.structs.CircularBuffer");
goog.structs.CircularBuffer = function(opt_maxSize) {
  this.nextPtr_ = 0;
  this.maxSize_ = opt_maxSize || 100;
  this.buff_ = [];
};
goog.structs.CircularBuffer.prototype.add = function(item) {
  var previousItem = this.buff_[this.nextPtr_];
  this.buff_[this.nextPtr_] = item;
  this.nextPtr_ = (this.nextPtr_ + 1) % this.maxSize_;
  return previousItem;
};
goog.structs.CircularBuffer.prototype.get = function(index) {
  index = this.normalizeIndex_(index);
  return this.buff_[index];
};
goog.structs.CircularBuffer.prototype.set = function(index, item) {
  index = this.normalizeIndex_(index);
  this.buff_[index] = item;
};
goog.structs.CircularBuffer.prototype.getCount = function() {
  return this.buff_.length;
};
goog.structs.CircularBuffer.prototype.isEmpty = function() {
  return this.buff_.length == 0;
};
goog.structs.CircularBuffer.prototype.clear = function() {
  this.buff_.length = 0;
  this.nextPtr_ = 0;
};
goog.structs.CircularBuffer.prototype.getValues = function() {
  return this.getNewestValues(this.getCount());
};
goog.structs.CircularBuffer.prototype.getNewestValues = function(maxCount) {
  var l = this.getCount();
  var start = this.getCount() - maxCount;
  var rv = [];
  for (var i = start; i < l; i++) {
    rv.push(this.get(i));
  }
  return rv;
};
goog.structs.CircularBuffer.prototype.getKeys = function() {
  var rv = [];
  var l = this.getCount();
  for (var i = 0; i < l; i++) {
    rv[i] = i;
  }
  return rv;
};
goog.structs.CircularBuffer.prototype.containsKey = function(key) {
  return key < this.getCount();
};
goog.structs.CircularBuffer.prototype.containsValue = function(value) {
  var l = this.getCount();
  for (var i = 0; i < l; i++) {
    if (this.get(i) == value) {
      return true;
    }
  }
  return false;
};
goog.structs.CircularBuffer.prototype.getLast = function() {
  if (this.getCount() == 0) {
    return null;
  }
  return this.get(this.getCount() - 1);
};
goog.structs.CircularBuffer.prototype.normalizeIndex_ = function(index) {
  if (index >= this.buff_.length) {
    throw new Error("Out of bounds exception");
  }
  if (this.buff_.length < this.maxSize_) {
    return index;
  }
  return (this.nextPtr_ + Number(index)) % this.maxSize_;
};

module.exports = goog.structs.CircularBuffer;

//# sourceMappingURL=goog.structs.circularbuffer.js.map
