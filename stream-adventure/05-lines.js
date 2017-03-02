/* Transform even-numbered lines to uppercase and odd-numbered lines to lowercase */

const through = require('through2');
const split = require('split'); // npm installi through2 split

var toUpper = false;
function write(buffer, _, next) {
  if (toUpper)
    this.push(buffer.toString().toUpperCase() + '\n');
  else
    this.push(buffer.toString().toLowerCase() + '\n');
  toUpper = !toUpper;
  next();
}

var throughStream = through(write);
process.stdin.pipe(split()).pipe(throughStream).pipe(process.stdout);
