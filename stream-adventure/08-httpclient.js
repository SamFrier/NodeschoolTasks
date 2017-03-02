/* Send a POST request to localhost:8099, pipe stdin into it, pipe response stream to stdout*/

const request = require('request'); // npm install request

var req = request.post("http://localhost:8099");
process.stdin.pipe(req).pipe(process.stdout);
