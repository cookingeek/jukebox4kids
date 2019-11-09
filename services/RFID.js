exports.init = function(HID){
  / NodeJS includes
var sys = require('sys');
var fs = require('fs');
// Stores the RFID id as it reconstructs from the stream.
var id = '';
// List of all RFID ids read
var ids = [];
// ARGUMENT 1:
// Stream path, unique to your hardware.
// List your available USB serial streams via terminal and choose one:
//   ls /dev | grep usb
// Had trouble with TTY, so used CU.
// ARGUMENT 2:
// Simplifies restruction of stream if one bit comes at a time.
// However, I don't know if or how this setting affects performance.
fs.createReadStream('/dev/usb/hiddev0', { bufferSize: 1 })
.on('open', function(fd) {
sys.puts('Begin scanning RFID tags.');
})
.on('end', function() {
sys.puts('End of data stream.');
})
.on('close', function() {
sys.puts('Closing stream.');
})
.on('error', function(error) {
sys.debug(error);
})
.on('data', function(chunk) {
	chunk = chunk.toString('ascii').match(/\w*/)[0]; // Only keep hex chars
if ( chunk.length == 0 ) { // Found non-hex char
if ( id.length > 0 ) { // The ID isn't blank
ids.push(id); // Store the completely reconstructed ID
sys.puts(id);
		}
		id = ''; // Prepare for the next ID read
return;
	}
	id += chunk; // Concat hex chars to the forming ID
});

};
