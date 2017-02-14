/* List files with a given extension in a given directory */

const fs = require('fs');
const path = require('path');

var dir = process.argv[2];
var ext = "." + process.argv[3];

fs.readdir(dir, function callback(err, files) {
  if (err) {
    return console.log(err);
  }
  files.forEach((file) => {
    if (path.extname(file) == ext) {
      console.log(file);
    }
  });
});
