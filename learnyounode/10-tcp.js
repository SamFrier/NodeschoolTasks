/* TCP server that listens on a given port and returns the date+time */

const net = require('net');

var port = process.argv[2];

// date+time should be in the format: YYYY-MM-DD hh:mm

// if month/day/hour/minute is less than 10, put a 0 in front of it
function leadingZero(num) {
  return (num < 10 ? "0" : "") + num;
}

var server = net.createServer(function(socket) {
  var d = new Date();
  var year = leadingZero(d.getFullYear());
  var month = leadingZero(d.getMonth() + 1);
  var day = leadingZero(d.getDate());
  var hours = leadingZero(d.getHours());
  var mins = leadingZero(d.getMinutes());
  var dateString = year + "-" + month + "-" + day + " " + hours + ":" + mins + "\n";
  socket.end(dateString); // write date to socket + close
});
server.listen(port);
