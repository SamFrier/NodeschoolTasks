/* Print the string "hello\n" using websocket-stream */

const ws = require('websocket-stream'); // npm install websocket-stream

var stream = ws("ws://localhost:8099");
stream.write("hello\n");
