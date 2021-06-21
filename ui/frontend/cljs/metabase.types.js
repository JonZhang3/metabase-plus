var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.set.js");
require("./metabase.shared.util.js");
require("./metabase.types.coercion_hierarchies.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.types.js");

goog.provide('metabase.types');
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("entity","GenericTable","entity/GenericTable",1152424804),new cljs.core.Keyword("entity","*","entity/*",-2043291259));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("entity","UserTable","entity/UserTable",-1504290772),new cljs.core.Keyword("entity","GenericTable","entity/GenericTable",1152424804));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("entity","CompanyTable","entity/CompanyTable",-1166853089),new cljs.core.Keyword("entity","GenericTable","entity/GenericTable",1152424804));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("entity","TransactionTable","entity/TransactionTable",-888813059),new cljs.core.Keyword("entity","GenericTable","entity/GenericTable",1152424804));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("entity","ProductTable","entity/ProductTable",1692844366),new cljs.core.Keyword("entity","GenericTable","entity/GenericTable",1152424804));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("entity","SubscriptionTable","entity/SubscriptionTable",1660366729),new cljs.core.Keyword("entity","GenericTable","entity/GenericTable",1152424804));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("entity","EventTable","entity/EventTable",-2132834802),new cljs.core.Keyword("entity","GenericTable","entity/GenericTable",1152424804));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("entity","GoogleAnalyticsTable","entity/GoogleAnalyticsTable",910090965),new cljs.core.Keyword("entity","GenericTable","entity/GenericTable",1152424804));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Number","type/Number",-2071693690),new cljs.core.Keyword("type","*","type/*",-1283496752));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Integer","type/Integer",-638928316),new cljs.core.Keyword("type","Number","type/Number",-2071693690));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","BigInteger","type/BigInteger",1152965666),new cljs.core.Keyword("type","Integer","type/Integer",-638928316));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Quantity","type/Quantity",-1936151227),new cljs.core.Keyword("Semantic","*","Semantic/*",-546724996));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Quantity","type/Quantity",-1936151227),new cljs.core.Keyword("type","Integer","type/Integer",-638928316));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Float","type/Float",1261800143),new cljs.core.Keyword("type","Number","type/Number",-2071693690));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Decimal","type/Decimal",-1657568790),new cljs.core.Keyword("type","Float","type/Float",1261800143));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Share","type/Share",-1285033895),new cljs.core.Keyword("Semantic","*","Semantic/*",-546724996));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Share","type/Share",-1285033895),new cljs.core.Keyword("type","Float","type/Float",1261800143));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Currency","type/Currency",713609092),new cljs.core.Keyword("type","Decimal","type/Decimal",-1657568790));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Currency","type/Currency",713609092),new cljs.core.Keyword("Semantic","*","Semantic/*",-546724996));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Income","type/Income",-342566883),new cljs.core.Keyword("type","Currency","type/Currency",713609092));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Discount","type/Discount",109235331),new cljs.core.Keyword("type","Currency","type/Currency",713609092));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Price","type/Price",286577051),new cljs.core.Keyword("type","Currency","type/Currency",713609092));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","GrossMargin","type/GrossMargin",1961535799),new cljs.core.Keyword("type","Currency","type/Currency",713609092));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Cost","type/Cost",363698341),new cljs.core.Keyword("type","Currency","type/Currency",713609092));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Location","type/Location",-1929284186),new cljs.core.Keyword("Semantic","*","Semantic/*",-546724996));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Coordinate","type/Coordinate",1950913043),new cljs.core.Keyword("type","Location","type/Location",-1929284186));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Coordinate","type/Coordinate",1950913043),new cljs.core.Keyword("type","Float","type/Float",1261800143));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Latitude","type/Latitude",-1080544141),new cljs.core.Keyword("type","Coordinate","type/Coordinate",1950913043));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Longitude","type/Longitude",-196788672),new cljs.core.Keyword("type","Coordinate","type/Coordinate",1950913043));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Score","type/Score",188189565),new cljs.core.Keyword("Semantic","*","Semantic/*",-546724996));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Score","type/Score",188189565),new cljs.core.Keyword("type","Number","type/Number",-2071693690));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Duration","type/Duration",1970868302),new cljs.core.Keyword("Semantic","*","Semantic/*",-546724996));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Duration","type/Duration",1970868302),new cljs.core.Keyword("type","Number","type/Number",-2071693690));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Text","type/Text",603746827),new cljs.core.Keyword("type","*","type/*",-1283496752));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","UUID","type/UUID",1767712212),new cljs.core.Keyword("type","Text","type/Text",603746827));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","URL","type/URL",-1433976351),new cljs.core.Keyword("Semantic","*","Semantic/*",-546724996));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","URL","type/URL",-1433976351),new cljs.core.Keyword("type","Text","type/Text",603746827));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","ImageURL","type/ImageURL",2081541690),new cljs.core.Keyword("type","URL","type/URL",-1433976351));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","AvatarURL","type/AvatarURL",-425042887),new cljs.core.Keyword("type","ImageURL","type/ImageURL",2081541690));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Email","type/Email",-1486863280),new cljs.core.Keyword("Semantic","*","Semantic/*",-546724996));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Email","type/Email",-1486863280),new cljs.core.Keyword("type","Text","type/Text",603746827));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Category","type/Category",-264699550),new cljs.core.Keyword("Semantic","*","Semantic/*",-546724996));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Enum","type/Enum",-1132893505),new cljs.core.Keyword("Semantic","*","Semantic/*",-546724996));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Address","type/Address",-413689880),new cljs.core.Keyword("type","Location","type/Location",-1929284186));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","City","type/City",420361040),new cljs.core.Keyword("type","Address","type/Address",-413689880));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","City","type/City",420361040),new cljs.core.Keyword("type","Category","type/Category",-264699550));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","City","type/City",420361040),new cljs.core.Keyword("type","Text","type/Text",603746827));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","State","type/State",-154641657),new cljs.core.Keyword("type","Address","type/Address",-413689880));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","State","type/State",-154641657),new cljs.core.Keyword("type","Category","type/Category",-264699550));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","State","type/State",-154641657),new cljs.core.Keyword("type","Text","type/Text",603746827));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Country","type/Country",2058497652),new cljs.core.Keyword("type","Address","type/Address",-413689880));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Country","type/Country",2058497652),new cljs.core.Keyword("type","Category","type/Category",-264699550));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Country","type/Country",2058497652),new cljs.core.Keyword("type","Text","type/Text",603746827));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","ZipCode","type/ZipCode",845484542),new cljs.core.Keyword("type","Address","type/Address",-413689880));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","ZipCode","type/ZipCode",845484542),new cljs.core.Keyword("type","Text","type/Text",603746827));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Name","type/Name",-134787639),new cljs.core.Keyword("type","Category","type/Category",-264699550));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Name","type/Name",-134787639),new cljs.core.Keyword("type","Text","type/Text",603746827));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Title","type/Title",1977060721),new cljs.core.Keyword("type","Category","type/Category",-264699550));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Title","type/Title",1977060721),new cljs.core.Keyword("type","Text","type/Text",603746827));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Description","type/Description",-680883950),new cljs.core.Keyword("Semantic","*","Semantic/*",-546724996));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Description","type/Description",-680883950),new cljs.core.Keyword("type","Text","type/Text",603746827));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Comment","type/Comment",-1406574403),new cljs.core.Keyword("Semantic","*","Semantic/*",-546724996));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Comment","type/Comment",-1406574403),new cljs.core.Keyword("type","Text","type/Text",603746827));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","PostgresEnum","type/PostgresEnum",-900722397),new cljs.core.Keyword("type","Text","type/Text",603746827));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Temporal","type/Temporal",-237169010),new cljs.core.Keyword("type","*","type/*",-1283496752));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Date","type/Date",-690428629),new cljs.core.Keyword("type","Temporal","type/Temporal",-237169010));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Time","type/Time",-814852413),new cljs.core.Keyword("type","Temporal","type/Temporal",-237169010));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","TimeWithTZ","type/TimeWithTZ",-442869120),new cljs.core.Keyword("type","Time","type/Time",-814852413));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","TimeWithLocalTZ","type/TimeWithLocalTZ",-259094111),new cljs.core.Keyword("type","TimeWithTZ","type/TimeWithTZ",-442869120));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","TimeWithZoneOffset","type/TimeWithZoneOffset",959948573),new cljs.core.Keyword("type","TimeWithTZ","type/TimeWithTZ",-442869120));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","DateTime","type/DateTime",352113310),new cljs.core.Keyword("type","Temporal","type/Temporal",-237169010));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","DateTimeWithTZ","type/DateTimeWithTZ",-1919106635),new cljs.core.Keyword("type","DateTime","type/DateTime",352113310));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","DateTimeWithLocalTZ","type/DateTimeWithLocalTZ",339704031),new cljs.core.Keyword("type","DateTimeWithTZ","type/DateTimeWithTZ",-1919106635));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","DateTimeWithZoneOffset","type/DateTimeWithZoneOffset",1768393068),new cljs.core.Keyword("type","DateTimeWithTZ","type/DateTimeWithTZ",-1919106635));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","DateTimeWithZoneID","type/DateTimeWithZoneID",-1588069560),new cljs.core.Keyword("type","DateTimeWithTZ","type/DateTimeWithTZ",-1919106635));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Instant","type/Instant",1168385286),new cljs.core.Keyword("type","DateTimeWithLocalTZ","type/DateTimeWithLocalTZ",339704031));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","CreationTemporal","type/CreationTemporal",-1324176405),new cljs.core.Keyword("Semantic","*","Semantic/*",-546724996));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","CreationTimestamp","type/CreationTimestamp",-687400081),new cljs.core.Keyword("type","CreationTemporal","type/CreationTemporal",-1324176405));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","CreationTimestamp","type/CreationTimestamp",-687400081),new cljs.core.Keyword("type","DateTime","type/DateTime",352113310));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","CreationTime","type/CreationTime",-1473681229),new cljs.core.Keyword("type","CreationTemporal","type/CreationTemporal",-1324176405));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","CreationTime","type/CreationTime",-1473681229),new cljs.core.Keyword("type","Time","type/Time",-814852413));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","CreationDate","type/CreationDate",-1102411433),new cljs.core.Keyword("type","CreationTemporal","type/CreationTemporal",-1324176405));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","CreationDate","type/CreationDate",-1102411433),new cljs.core.Keyword("type","Date","type/Date",-690428629));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","JoinTemporal","type/JoinTemporal",-1465575331),new cljs.core.Keyword("Semantic","*","Semantic/*",-546724996));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","JoinTimestamp","type/JoinTimestamp",1554527110),new cljs.core.Keyword("type","JoinTemporal","type/JoinTemporal",-1465575331));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","JoinTimestamp","type/JoinTimestamp",1554527110),new cljs.core.Keyword("type","DateTime","type/DateTime",352113310));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","JoinTime","type/JoinTime",1290040594),new cljs.core.Keyword("type","JoinTemporal","type/JoinTemporal",-1465575331));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","JoinTime","type/JoinTime",1290040594),new cljs.core.Keyword("type","Time","type/Time",-814852413));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","JoinDate","type/JoinDate",-793235819),new cljs.core.Keyword("type","JoinTemporal","type/JoinTemporal",-1465575331));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","JoinDate","type/JoinDate",-793235819),new cljs.core.Keyword("type","Date","type/Date",-690428629));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","CancelationTemporal","type/CancelationTemporal",-532782161),new cljs.core.Keyword("Semantic","*","Semantic/*",-546724996));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","CancelationTimestamp","type/CancelationTimestamp",-741584330),new cljs.core.Keyword("type","CancelationTemporal","type/CancelationTemporal",-532782161));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","CancelationTimestamp","type/CancelationTimestamp",-741584330),new cljs.core.Keyword("type","DateTime","type/DateTime",352113310));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","CancelationTime","type/CancelationTime",1076177064),new cljs.core.Keyword("type","CancelationTemporal","type/CancelationTemporal",-532782161));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","CancelationTime","type/CancelationTime",1076177064),new cljs.core.Keyword("type","Date","type/Date",-690428629));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","CancelationDate","type/CancelationDate",561287015),new cljs.core.Keyword("type","CancelationTemporal","type/CancelationTemporal",-532782161));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","CancelationDate","type/CancelationDate",561287015),new cljs.core.Keyword("type","Date","type/Date",-690428629));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","DeletionTemporal","type/DeletionTemporal",2136289994),new cljs.core.Keyword("Semantic","*","Semantic/*",-546724996));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","DeletionTimestamp","type/DeletionTimestamp",-935598691),new cljs.core.Keyword("type","DeletionTemporal","type/DeletionTemporal",2136289994));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","DeletionTimestamp","type/DeletionTimestamp",-935598691),new cljs.core.Keyword("type","DateTime","type/DateTime",352113310));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","DeletionTime","type/DeletionTime",-1426373145),new cljs.core.Keyword("type","DeletionTemporal","type/DeletionTemporal",2136289994));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","DeletionTime","type/DeletionTime",-1426373145),new cljs.core.Keyword("type","Time","type/Time",-814852413));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","DeletionDate","type/DeletionDate",-2052285784),new cljs.core.Keyword("type","DeletionTemporal","type/DeletionTemporal",2136289994));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","DeletionDate","type/DeletionDate",-2052285784),new cljs.core.Keyword("type","Date","type/Date",-690428629));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","UpdatedTemporal","type/UpdatedTemporal",-596775941),new cljs.core.Keyword("Semantic","*","Semantic/*",-546724996));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","UpdatedTimestamp","type/UpdatedTimestamp",-754878742),new cljs.core.Keyword("type","UpdatedTemporal","type/UpdatedTemporal",-596775941));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","UpdatedTimestamp","type/UpdatedTimestamp",-754878742),new cljs.core.Keyword("type","DateTime","type/DateTime",352113310));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","UpdatedTime","type/UpdatedTime",-1278858780),new cljs.core.Keyword("type","UpdatedTemporal","type/UpdatedTemporal",-596775941));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","UpdatedTime","type/UpdatedTime",-1278858780),new cljs.core.Keyword("type","Time","type/Time",-814852413));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","UpdatedDate","type/UpdatedDate",-1756161562),new cljs.core.Keyword("type","UpdatedTemporal","type/UpdatedTemporal",-596775941));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","UpdatedDate","type/UpdatedDate",-1756161562),new cljs.core.Keyword("type","Date","type/Date",-690428629));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Birthdate","type/Birthdate",619594666),new cljs.core.Keyword("Semantic","*","Semantic/*",-546724996));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Birthdate","type/Birthdate",619594666),new cljs.core.Keyword("type","Date","type/Date",-690428629));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Boolean","type/Boolean",26348630),new cljs.core.Keyword("type","*","type/*",-1283496752));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","DruidHyperUnique","type/DruidHyperUnique",-585863040),new cljs.core.Keyword("type","*","type/*",-1283496752));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","TextLike","type/TextLike",-1295784190),new cljs.core.Keyword("type","*","type/*",-1283496752));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","MongoBSONID","type/MongoBSONID",663302764),new cljs.core.Keyword("type","TextLike","type/TextLike",-1295784190));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","IPAddress","type/IPAddress",-808425343),new cljs.core.Keyword("type","TextLike","type/TextLike",-1295784190));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","IPAddress","type/IPAddress",-808425343),new cljs.core.Keyword("Semantic","*","Semantic/*",-546724996));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Collection","type/Collection",1447925820),new cljs.core.Keyword("type","*","type/*",-1283496752));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Structured","type/Structured",-1651495863),new cljs.core.Keyword("type","*","type/*",-1283496752));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Dictionary","type/Dictionary",1352048818),new cljs.core.Keyword("type","Collection","type/Collection",1447925820));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Array","type/Array",-2060534244),new cljs.core.Keyword("type","Collection","type/Collection",1447925820));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","JSON","type/JSON",-14729800),new cljs.core.Keyword("type","Structured","type/Structured",-1651495863));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","JSON","type/JSON",-14729800),new cljs.core.Keyword("type","Collection","type/Collection",1447925820));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","XML","type/XML",-804526569),new cljs.core.Keyword("type","Structured","type/Structured",-1651495863));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","XML","type/XML",-804526569),new cljs.core.Keyword("type","Collection","type/Collection",1447925820));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Structured","type/Structured",-1651495863),new cljs.core.Keyword("Semantic","*","Semantic/*",-546724996));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Structured","type/Structured",-1651495863),new cljs.core.Keyword("type","Text","type/Text",603746827));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","SerializedJSON","type/SerializedJSON",300065547),new cljs.core.Keyword("type","Structured","type/Structured",-1651495863));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","XML","type/XML",-804526569),new cljs.core.Keyword("type","Structured","type/Structured",-1651495863));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","User","type/User",832931932),new cljs.core.Keyword("Semantic","*","Semantic/*",-546724996));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Author","type/Author",-836053084),new cljs.core.Keyword("type","User","type/User",832931932));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Owner","type/Owner",1745970850),new cljs.core.Keyword("type","User","type/User",832931932));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Product","type/Product",1803490713),new cljs.core.Keyword("type","Category","type/Category",-264699550));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Company","type/Company",-1114287726),new cljs.core.Keyword("type","Category","type/Category",-264699550));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Subscription","type/Subscription",-1076112474),new cljs.core.Keyword("type","Category","type/Category",-264699550));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Source","type/Source",1060815848),new cljs.core.Keyword("type","Category","type/Category",-264699550));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","FK","type/FK",360937035),new cljs.core.Keyword("Relation","*","Relation/*",-706261522));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","PK","type/PK",-1723274286),new cljs.core.Keyword("Relation","*","Relation/*",-706261522));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("Coercion","String->Temporal","Coercion/String->Temporal",946586714),new cljs.core.Keyword("Coercion","*","Coercion/*",1713686116));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("Coercion","ISO8601->Temporal","Coercion/ISO8601->Temporal",410003391),new cljs.core.Keyword("Coercion","String->Temporal","Coercion/String->Temporal",946586714));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("Coercion","ISO8601->DateTime","Coercion/ISO8601->DateTime",-1255976090),new cljs.core.Keyword("Coercion","ISO8601->Temporal","Coercion/ISO8601->Temporal",410003391));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("Coercion","ISO8601->Time","Coercion/ISO8601->Time",-1197754849),new cljs.core.Keyword("Coercion","ISO8601->Temporal","Coercion/ISO8601->Temporal",410003391));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("Coercion","ISO8601->Date","Coercion/ISO8601->Date",-103814729),new cljs.core.Keyword("Coercion","ISO8601->Temporal","Coercion/ISO8601->Temporal",410003391));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("Coercion","YYYYMMDDHHMMSSString->Temporal","Coercion/YYYYMMDDHHMMSSString->Temporal",41716060),new cljs.core.Keyword("Coercion","String->Temporal","Coercion/String->Temporal",946586714));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("Coercion","Bytes->Temporal","Coercion/Bytes->Temporal",-2023274781),new cljs.core.Keyword("Coercion","*","Coercion/*",1713686116));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("Coercion","YYYYMMDDHHMMSSBytes->Temporal","Coercion/YYYYMMDDHHMMSSBytes->Temporal",-624663946),new cljs.core.Keyword("Coercion","Bytes->Temporal","Coercion/Bytes->Temporal",-2023274781));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("Coercion","Number->Temporal","Coercion/Number->Temporal",-1061171580),new cljs.core.Keyword("Coercion","*","Coercion/*",1713686116));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("Coercion","UNIXTime->Temporal","Coercion/UNIXTime->Temporal",-968093468),new cljs.core.Keyword("Coercion","Number->Temporal","Coercion/Number->Temporal",-1061171580));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("Coercion","UNIXSeconds->DateTime","Coercion/UNIXSeconds->DateTime",-1635093627),new cljs.core.Keyword("Coercion","UNIXTime->Temporal","Coercion/UNIXTime->Temporal",-968093468));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("Coercion","UNIXMilliSeconds->DateTime","Coercion/UNIXMilliSeconds->DateTime",-1296453709),new cljs.core.Keyword("Coercion","UNIXTime->Temporal","Coercion/UNIXTime->Temporal",-968093468));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("Coercion","UNIXMicroSeconds->DateTime","Coercion/UNIXMicroSeconds->DateTime",1299502399),new cljs.core.Keyword("Coercion","UNIXTime->Temporal","Coercion/UNIXTime->Temporal",-968093468));
/**
 * Return a map of various types to their parent types.
 * 
 *   This is intended for export to the frontend as part of `MetabaseBootstrap` so it can build its own implementation of
 *   `isa?`.
 */
metabase.types.types__GT_parents = (function metabase$types$types__GT_parents(var_args){
var G__36911 = arguments.length;
switch (G__36911) {
case 0:
return metabase.types.types__GT_parents.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return metabase.types.types__GT_parents.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.types.types__GT_parents.cljs$core$IFn$_invoke$arity$0 = (function (){
return metabase.types.types__GT_parents.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("type","*","type/*",-1283496752));
}));

(metabase.types.types__GT_parents.cljs$core$IFn$_invoke$arity$1 = (function (root){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function metabase$types$iter__36921(s__36922){
return (new cljs.core.LazySeq(null,(function (){
var s__36922__$1 = s__36922;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36922__$1);
if(temp__5735__auto__){
var s__36922__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36922__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__36922__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__36924 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__36923 = (0);
while(true){
if((i__36923 < size__4528__auto__)){
var t = cljs.core._nth(c__4527__auto__,i__36923);
cljs.core.chunk_append(b__36924,cljs.core.PersistentArrayMap.createAsIfByAssoc([t,cljs.core.parents.cljs$core$IFn$_invoke$arity$1(t)]));

var G__37101 = (i__36923 + (1));
i__36923 = G__37101;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36924),metabase$types$iter__36921(cljs.core.chunk_rest(s__36922__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36924),null);
}
} else {
var t = cljs.core.first(s__36922__$2);
return cljs.core.cons(cljs.core.PersistentArrayMap.createAsIfByAssoc([t,cljs.core.parents.cljs$core$IFn$_invoke$arity$1(t)]),metabase$types$iter__36921(cljs.core.rest(s__36922__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.descendants.cljs$core$IFn$_invoke$arity$1(root));
})());
}));

(metabase.types.types__GT_parents.cljs$lang$maxFixedArity = 1);

/**
 * True if a Metabase `Field` instance has a temporal base or semantic type, i.e. if this Field represents a value
 *   relating to a moment in time.
 */
metabase.types.temporal_field_QMARK_ = (function metabase$types$temporal_field_QMARK_(p__36934){
var map__36935 = p__36934;
var map__36935__$1 = (((((!((map__36935 == null))))?(((((map__36935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36935.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36935):map__36935);
var base_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36935__$1,new cljs.core.Keyword(null,"base_type","base_type",1908272670));
var effective_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36935__$1,new cljs.core.Keyword(null,"effective_type","effective_type",1699478099));
return cljs.core.some((function (p1__36933_SHARP_){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(p1__36933_SHARP_,new cljs.core.Keyword("type","Temporal","type/Temporal",-237169010));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [base_type,effective_type], null));
});
/**
 * Is `x` the same as, or a descendant type of, `y`?
 */
metabase.types.isa = (function metabase$types$isa(x,y){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(x),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(y));
});
goog.exportSymbol('metabase.types.isa', metabase.types.isa);
/**
 * A map of Type name (as string, without `:type/` namespace) -> qualified type name as string
 * 
 *       {"Temporal" "type/Temporal", ...}
 */
metabase.types.TYPE = cljs.core.clj__GT_js(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function metabase$types$iter__36939(s__36940){
return (new cljs.core.LazySeq(null,(function (){
var s__36940__$1 = s__36940;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36940__$1);
if(temp__5735__auto__){
var s__36940__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36940__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__36940__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__36942 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__36941 = (0);
while(true){
if((i__36941 < size__4528__auto__)){
var tyype = cljs.core._nth(c__4527__auto__,i__36941);
cljs.core.chunk_append(b__36942,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name(tyype),metabase.shared.util.qualified_name(tyype)], null));

var G__37120 = (i__36941 + (1));
i__36941 = G__37120;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36942),metabase$types$iter__36939(cljs.core.chunk_rest(s__36940__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36942),null);
}
} else {
var tyype = cljs.core.first(s__36940__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name(tyype),metabase.shared.util.qualified_name(tyype)], null),metabase$types$iter__36939(cljs.core.rest(s__36940__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.descendants,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("type","*","type/*",-1283496752),new cljs.core.Keyword("Semantic","*","Semantic/*",-546724996),new cljs.core.Keyword("Relation","*","Relation/*",-706261522)], null)], 0))));
})()));
goog.exportSymbol('metabase.types.TYPE', metabase.types.TYPE);
metabase.types.coercion_hierarchies.define_types_BANG_(new cljs.core.Keyword("Coercion","UNIXMicroSeconds->DateTime","Coercion/UNIXMicroSeconds->DateTime",1299502399),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("type","Integer","type/Integer",-638928316),null,new cljs.core.Keyword("type","Decimal","type/Decimal",-1657568790),null], null), null),new cljs.core.Keyword("type","Instant","type/Instant",1168385286));
metabase.types.coercion_hierarchies.define_types_BANG_(new cljs.core.Keyword("Coercion","UNIXMilliSeconds->DateTime","Coercion/UNIXMilliSeconds->DateTime",-1296453709),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("type","Integer","type/Integer",-638928316),null,new cljs.core.Keyword("type","Decimal","type/Decimal",-1657568790),null], null), null),new cljs.core.Keyword("type","Instant","type/Instant",1168385286));
metabase.types.coercion_hierarchies.define_types_BANG_(new cljs.core.Keyword("Coercion","UNIXSeconds->DateTime","Coercion/UNIXSeconds->DateTime",-1635093627),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("type","Integer","type/Integer",-638928316),null,new cljs.core.Keyword("type","Decimal","type/Decimal",-1657568790),null], null), null),new cljs.core.Keyword("type","Instant","type/Instant",1168385286));
metabase.types.coercion_hierarchies.define_types_BANG_(new cljs.core.Keyword("Coercion","ISO8601->Date","Coercion/ISO8601->Date",-103814729),new cljs.core.Keyword("type","Text","type/Text",603746827),new cljs.core.Keyword("type","Date","type/Date",-690428629));
metabase.types.coercion_hierarchies.define_types_BANG_(new cljs.core.Keyword("Coercion","ISO8601->DateTime","Coercion/ISO8601->DateTime",-1255976090),new cljs.core.Keyword("type","Text","type/Text",603746827),new cljs.core.Keyword("type","DateTime","type/DateTime",352113310));
metabase.types.coercion_hierarchies.define_types_BANG_(new cljs.core.Keyword("Coercion","ISO8601->Time","Coercion/ISO8601->Time",-1197754849),new cljs.core.Keyword("type","Text","type/Text",603746827),new cljs.core.Keyword("type","Time","type/Time",-814852413));
metabase.types.coercion_hierarchies.define_types_BANG_(new cljs.core.Keyword("Coercion","YYYYMMDDHHMMSSString->Temporal","Coercion/YYYYMMDDHHMMSSString->Temporal",41716060),new cljs.core.Keyword("type","Text","type/Text",603746827),new cljs.core.Keyword("type","DateTime","type/DateTime",352113310));
metabase.types.coercion_hierarchies.define_non_inheritable_type_BANG_(new cljs.core.Keyword("Coercion","YYYYMMDDHHMMSSBytes->Temporal","Coercion/YYYYMMDDHHMMSSBytes->Temporal",-624663946),new cljs.core.Keyword("type","*","type/*",-1283496752),new cljs.core.Keyword("type","DateTime","type/DateTime",352113310));
/**
 * Whether `coercion-strategy` is allowed for `base-type`.
 */
metabase.types.is_coercible_from_QMARK_ = (function metabase$types$is_coercible_from_QMARK_(coercion_strategy,base_type){
return ((cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$3(metabase.types.coercion_hierarchies.base_type_hierarchy(),base_type,coercion_strategy)) || (cljs.core.boolean$((function (){var G__36951 = metabase.types.coercion_hierarchies.non_descending_strategies();
var G__36951__$1 = (((G__36951 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__36951,base_type));
if((G__36951__$1 == null)){
return null;
} else {
return cljs.core.contains_QMARK_(G__36951__$1,coercion_strategy);
}
})())));
});
/**
 * Whether `coercion-strategy` coerces to `effective-type` or some subtype thereof.
 */
metabase.types.is_coercible_to_QMARK_ = (function metabase$types$is_coercible_to_QMARK_(coercion_strategy,effective_type){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$3(metabase.types.coercion_hierarchies.effective_type_hierarchy(),coercion_strategy,effective_type);
});
/**
 * Whether `coercion-strategy` is allowed for `base-type` and coerces to `effective-type` or some subtype thereof.
 */
metabase.types.is_coercible_QMARK_ = (function metabase$types$is_coercible_QMARK_(coercion_strategy,base_type,effective_type){
return ((metabase.types.is_coercible_from_QMARK_(coercion_strategy,base_type)) && (metabase.types.is_coercible_to_QMARK_(coercion_strategy,effective_type)));
});
/**
 * Possible coercions for a base type, returned as a map of `effective-type -> #{coercion-strategy}`
 */
metabase.types.coercion_possibilities = (function metabase$types$coercion_possibilities(base_type){
var base_type_hierarchy = metabase.types.coercion_hierarchies.base_type_hierarchy();
var effective_type_hierarchy = metabase.types.coercion_hierarchies.effective_type_hierarchy();
return cljs.core.not_empty(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,clojure.set.union),cljs.core.select_keys(metabase.types.coercion_hierarchies.non_descending_strategies(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [base_type], null)),(function (){var iter__4529__auto__ = (function metabase$types$coercion_possibilities_$_iter__36969(s__36970){
return (new cljs.core.LazySeq(null,(function (){
var s__36970__$1 = s__36970;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36970__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var strategy = cljs.core.first(xs__6292__auto__);
if(cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(strategy,new cljs.core.Keyword("Coercion","*","Coercion/*",1713686116))){
var effective_types = cljs.core.parents.cljs$core$IFn$_invoke$arity$2(effective_type_hierarchy,strategy);
var iterys__4525__auto__ = ((function (s__36970__$1,effective_types,strategy,xs__6292__auto__,temp__5735__auto__,base_type_hierarchy,effective_type_hierarchy){
return (function metabase$types$coercion_possibilities_$_iter__36969_$_iter__36971(s__36972){
return (new cljs.core.LazySeq(null,((function (s__36970__$1,effective_types,strategy,xs__6292__auto__,temp__5735__auto__,base_type_hierarchy,effective_type_hierarchy){
return (function (){
var s__36972__$1 = s__36972;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__36972__$1);
if(temp__5735__auto____$1){
var s__36972__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36972__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__36972__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__36974 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__36973 = (0);
while(true){
if((i__36973 < size__4528__auto__)){
var effective_type = cljs.core._nth(c__4527__auto__,i__36973);
if((!(cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(effective_type,new cljs.core.Keyword("Coercion","*","Coercion/*",1713686116))))){
cljs.core.chunk_append(b__36974,cljs.core.PersistentArrayMap.createAsIfByAssoc([effective_type,cljs.core.PersistentHashSet.createAsIfByAssoc([strategy])]));

var G__37145 = (i__36973 + (1));
i__36973 = G__37145;
continue;
} else {
var G__37147 = (i__36973 + (1));
i__36973 = G__37147;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36974),metabase$types$coercion_possibilities_$_iter__36969_$_iter__36971(cljs.core.chunk_rest(s__36972__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36974),null);
}
} else {
var effective_type = cljs.core.first(s__36972__$2);
if((!(cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(effective_type,new cljs.core.Keyword("Coercion","*","Coercion/*",1713686116))))){
return cljs.core.cons(cljs.core.PersistentArrayMap.createAsIfByAssoc([effective_type,cljs.core.PersistentHashSet.createAsIfByAssoc([strategy])]),metabase$types$coercion_possibilities_$_iter__36969_$_iter__36971(cljs.core.rest(s__36972__$2)));
} else {
var G__37156 = cljs.core.rest(s__36972__$2);
s__36972__$1 = G__37156;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__36970__$1,effective_types,strategy,xs__6292__auto__,temp__5735__auto__,base_type_hierarchy,effective_type_hierarchy))
,null,null));
});})(s__36970__$1,effective_types,strategy,xs__6292__auto__,temp__5735__auto__,base_type_hierarchy,effective_type_hierarchy))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(effective_types));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,metabase$types$coercion_possibilities_$_iter__36969(cljs.core.rest(s__36970__$1)));
} else {
var G__37157 = cljs.core.rest(s__36970__$1);
s__36970__$1 = G__37157;
continue;
}
} else {
var G__37159 = cljs.core.rest(s__36970__$1);
s__36970__$1 = G__37159;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.ancestors.cljs$core$IFn$_invoke$arity$2(base_type_hierarchy,base_type));
})()));
});
/**
 * Returns a boolean of whether a field base-type has any coercion strategies available.
 */
metabase.types.is_coerceable = (function metabase$types$is_coerceable(base_type){
return cljs.core.boolean$(cljs.core.not_empty(metabase.types.coercion_possibilities(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(base_type))));
});
goog.exportSymbol('metabase.types.is_coerceable', metabase.types.is_coerceable);
/**
 * The effective type resulting from a coercion.
 */
metabase.types.effective_type_for_coercion = (function metabase$types$effective_type_for_coercion(coercion){
return metabase.types.coercion_hierarchies.effective_type_for_strategy(coercion);
});
/**
 * Coercions available for a type. In cljs will return a js array of strings like ["Coercion/ISO8601->Time" ...]. In
 *   clojure will return a sequence of keywords.
 */
metabase.types.coercions_for_type = (function metabase$types$coercions_for_type(base_type){
var applicable = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.List.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct.cljs$core$IFn$_invoke$arity$0(),cljs.core.cat),cljs.core.vals(metabase.types.coercion_possibilities(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(base_type))));
return cljs.core.clj__GT_js(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (kw){
return [cljs.core.namespace(kw),"/",cljs.core.name(kw)].join('');
}),applicable));
});
goog.exportSymbol('metabase.types.coercions_for_type', metabase.types.coercions_for_type);
Object.defineProperty(module.exports, "temporal_field_QMARK_", { enumerable: false, get: function() { return metabase.types.temporal_field_QMARK_; } });
Object.defineProperty(module.exports, "is_coercible_QMARK_", { enumerable: false, get: function() { return metabase.types.is_coercible_QMARK_; } });
Object.defineProperty(module.exports, "types__GT_parents", { enumerable: false, get: function() { return metabase.types.types__GT_parents; } });
Object.defineProperty(module.exports, "is_coercible_from_QMARK_", { enumerable: false, get: function() { return metabase.types.is_coercible_from_QMARK_; } });
Object.defineProperty(module.exports, "isa", { enumerable: true, get: function() { return metabase.types.isa; } });
Object.defineProperty(module.exports, "coercions_for_type", { enumerable: true, get: function() { return metabase.types.coercions_for_type; } });
Object.defineProperty(module.exports, "is_coercible_to_QMARK_", { enumerable: false, get: function() { return metabase.types.is_coercible_to_QMARK_; } });
Object.defineProperty(module.exports, "is_coerceable", { enumerable: true, get: function() { return metabase.types.is_coerceable; } });
Object.defineProperty(module.exports, "effective_type_for_coercion", { enumerable: false, get: function() { return metabase.types.effective_type_for_coercion; } });
Object.defineProperty(module.exports, "TYPE", { enumerable: true, get: function() { return metabase.types.TYPE; } });
Object.defineProperty(module.exports, "coercion_possibilities", { enumerable: false, get: function() { return metabase.types.coercion_possibilities; } });
//# sourceMappingURL=metabase.types.js.map
