/* Convert inner HTML from stdin to uppercase if the class name is "loud" */

const trumpet = require('trumpet');
const through = require('through2'); // npm install trumpet through2

var tr = trumpet();
var loud = tr.select('.loud').createStream();
loud.pipe(through(function(buffer, _, next) {
  this.push(buffer.toString().toUpperCase());
  next();
})).pipe(loud);
process.stdin.pipe(tr).pipe(process.stdout);
