var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';
var HID = require("node-hid");

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(3000,function(){
  console.log("Live at Port 3000");
  HID.setDriverType('libusb');

  var devices = HID.devices()
  devices.forEach(function(item) {
    console.log("p: " + item.productId + " v: "+ item.vendorId)});


});
