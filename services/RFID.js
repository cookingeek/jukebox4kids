exports.init = function(HID){
  // Honeywell Scanner
  var sys = require('sys');


  var Hidstream = require('node-hid-stream').Hidstream;
var d = new Hidstream({ vendorId: 5824, productId: 10203 });
  console.log("yes init");

  var d = new HID.HID(vid, pid);

  d.on("data", function (data) {

    console.log(data.toString('hex'));

  });

  d.on("error", function (error) {
  console.log(error);
  d.close();
  });

};
