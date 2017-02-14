/*
 * HTTP server that serves JSON data in response to GET requests:
 * - '/api/parsetime?iso=XXXX' - responds with hours + mins + seconds based on given ISO-format time
 * - '/api/unixtime' - responds with UNIX epoch time in ms
 */

const http = require('http');
const url = require('url');

var port = process.argv[2];

// return JSON object containing hours + mins + seconds
function parseTime(dateObject) {
  return {
    hour: dateObject.getHours(),
    minute: dateObject.getMinutes(),
    second: dateObject.getSeconds()
  }
}

// return JSON object containing UNIX epoch time
function parseUnixTime(dateObject) {
  return { unixtime: dateObject.getTime() };
}

var server = http.createServer(function(request, response) {
  var parsedUrl = url.parse(request.url, true);
  var path = parsedUrl.pathname;
  var d = new Date(parsedUrl.query.iso); // create new Date object based on iso value in query
  var output = "";

  // if request is to /api/parsetime, call parseTime
  if (path === "/api/parsetime") {
    response.writeHead(200, { 'content-type': 'application/json' });
    output = JSON.stringify(parseTime(d));
  // if request is to /api/unixtime, call parseUnixTime
  } else if (path === "/api/unixtime") {
    response.writeHead(200, { 'content-type': 'application/json' });
    output = JSON.stringify(parseUnixTime(d));
  // for all other requests, return a 404 error
  } else {
    response.writeHead(404);
  }
  response.end(output);
  
});
server.listen(port);
