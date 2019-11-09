exports.init = function(HID){
  // Honeywell Scanner
  var vid = 0x16C0;
  var pid = 0x27DB;
  console.log("yes init");

  var d = new HID.HID(vid, pid);

  d.on("data", function (data) {

    console.log(data);

  });

  d.on("error", function (error) {
  console.log(error);
  d.close();
  });

};
