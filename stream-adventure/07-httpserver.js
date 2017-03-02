/* HTTP server that writes back the request stream as upper-case response data for POST requests */

const http = require('http');
const through = require('through2'); // npm install through2

var server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    req.pipe(through(function(buffer, _, next) {
      this.push(buffer.toString().toUpperCase());
      next();
    })).pipe(res);
  } else {
    res.end("POST only pls");
  }
});
server.listen(process.argv[2]);
