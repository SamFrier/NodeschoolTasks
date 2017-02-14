/* Print files with extension in directory (with the help of a module) */

const mymodule = require('./mymodule');

var dir = process.argv[2];
var ext = process.argv[3];

mymodule(dir, ext, function(err, result) {
  if (err) {
    return console.error(err);
  }

  result.forEach((file) => {
    console.log(file);
  });
});
