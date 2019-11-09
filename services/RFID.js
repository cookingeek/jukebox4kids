exports.init = function(HID){

  var KeyboardLines = require('node-hid-stream').KeyboardLines;
  var lines = new KeyboardLines({ vendorId: 5824, productId: 10203 });

  lines.on("data", function(data) {
    // The user has pressed w, a, s & d, ENTER (simultaneously (why? I don't know))
    console.log(data); //  "wasd"
  });
};
