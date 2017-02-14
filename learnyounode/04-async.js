/* Asynchronous IO - read file, display number of newlines via callback function */

const fs = require('fs');

fs.readFile(process.argv[2], function callback(err, contents) {
  if (err) {
    return console.log(err);
  }
  var lines = contents.toString().split('\n').length - 1;
  console.log(lines);
});
