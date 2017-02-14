/* HTTP server that returns the contents of a specific file for any request */

const http = require('http');
const fs = require('fs');

var port = process.argv[2];
var textFile = process.argv[3];

var server = http.createServer(function(request, response) {
  response.writeHead(200, {'content-type': 'text/plain'}); // good practice
  var fStream = fs.createReadStream(textFile); // create stream for file contents
  fStream.pipe(response); // pipe contents to response stream
});
server.listen(port);
