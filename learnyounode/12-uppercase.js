/* HTTP server that converts contents of POST request to upper case */

const http = require('http');
const map = require('through2-map'); // `npm install through2-map`

var port = process.argv[2];

var server = http.createServer(function(request, response) {
  request.pipe(map(function(chunk) { // get chunk of data from request stream
    return chunk.toString().toUpperCase(); // process chunk
  })).pipe(response); // pipe chunk to response stream
});
server.listen(port);
