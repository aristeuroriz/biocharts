 Meteor.startup(function() {
     setInterval(function() {
         Meteor.call("getAvg", function(error, result) {
             Session.set("avgGSR", result);
         });
         Meteor.call("getRtValue", function(error, result) {
             Session.set("rtValue", result);
         });
     }, 1000);
 });
