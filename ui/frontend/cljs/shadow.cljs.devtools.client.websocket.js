var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./shadow.cljs.devtools.client.env.js");
require("./shadow.cljs.devtools.client.shared.js");
require("./shadow.remote.runtime.cljs.js_builtins.js");
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

$CLJS.SHADOW_ENV.setLoaded("shadow.cljs.devtools.client.websocket.js");

goog.provide('shadow.cljs.devtools.client.websocket');
shadow.cljs.devtools.client.websocket.start = (function shadow$cljs$devtools$client$websocket$start(runtime){
var ws_url = shadow.cljs.devtools.client.env.get_ws_relay_url();
var socket = (new WebSocket(ws_url));
(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.shared.remote_msg(runtime,e.data);
}));

(socket.onopen = (function (e){
return shadow.cljs.devtools.client.shared.remote_open(runtime,e);
}));

(socket.onclose = (function (e){
return shadow.cljs.devtools.client.shared.remote_close(runtime,e);
}));

(socket.onerror = (function (e){
return shadow.cljs.devtools.client.shared.remote_error(runtime,e);
}));

return socket;
});
shadow.cljs.devtools.client.websocket.send = (function shadow$cljs$devtools$client$websocket$send(socket,msg){
return socket.send(msg);
});
shadow.cljs.devtools.client.websocket.stop = (function shadow$cljs$devtools$client$websocket$stop(socket){
(socket.onopen = null);

(socket.onclose = null);

(socket.onmessage = null);

(socket.onerror = null);

return socket.close();
});
Object.defineProperty(module.exports, "start", { enumerable: false, get: function() { return shadow.cljs.devtools.client.websocket.start; } });
Object.defineProperty(module.exports, "send", { enumerable: false, get: function() { return shadow.cljs.devtools.client.websocket.send; } });
Object.defineProperty(module.exports, "stop", { enumerable: false, get: function() { return shadow.cljs.devtools.client.websocket.stop; } });
//# sourceMappingURL=shadow.cljs.devtools.client.websocket.js.map
