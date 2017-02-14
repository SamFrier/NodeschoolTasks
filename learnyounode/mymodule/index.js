/* Example module - return all files with a given extension in a given directory */

const fs = require('fs');
const path = require('path');

module.exports = function(dir, ext, callback) {

  fs.readdir(dir, function(err, files) {
    if (err) {
      return callback(err);
    }

    ext = "." + ext;
    var result = [];
    files.forEach((file) => {
      if (path.extname(file) === ext) {
        result.push(file);
      } 
    });
    callback(null, result);
  });
};
