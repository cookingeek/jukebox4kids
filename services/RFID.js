exports.init = function(HID){

  var KeyboardLines = require('node-hid-stream').KeyboardLines;
  var lines = new KeyboardLines({ vendorId: 5824, productId: 10203 });
    var util = require('util'),
    exec = require('child_process').exec,
    child;

  lines.on("data", function(data) {
    // The user has pressed w, a, s & d, ENTER (simultaneously (why? I don't know))
     //  "wasd"
    if (data === "0004553811"){
      console.log("1");
    child = exec('mpc -p 6601 clear && mpc -p 6601 add spotify:album:6zeXEvQUwV55xFB8hSE9nT && mpc -p 6601 play', // command line argument directly in string
  function (error, stdout, stderr) {      // one easy function to capture data/errors
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
});

    
    } else if (data === "0011237253"){
      console.log("2");
	    child = exec('mpc -p 6601 clear && mpc -p 6601 add spotify:album:3fJaSUHg2NUGCEhru6ECMN && mpc -p 6601 play', // command line argument directly in string
  function (error, stdout, stderr) {      // one easy function to capture data/errors
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
});

    }
  });
};

