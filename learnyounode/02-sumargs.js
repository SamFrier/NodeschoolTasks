/* Add together arguments */

var acc = 0;
for (var i = 2; i < process.argv.length; i++) {
  acc += Number(process.argv[i]);
}

console.log(acc);
