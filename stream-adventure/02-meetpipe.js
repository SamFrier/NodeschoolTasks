/* Pipe file given in first argument to stdout */

const fs = require('fs');
var file = process.argv[2];
fs.createReadStream(file).pipe(process.stdout);
