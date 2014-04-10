var app = require('./');

var a = [];
var n = 300;
var t = Math.floor(Math.random()*n*n/2);

for(var i = 0; i < n; i++) {
  a.push(Math.floor(Math.random()*2*n))
}

console.log('N: %d', n);
console.log('t: %d', t);
var exact;
for(var i = 1; i<5; i++) {
  console.log('---');
  console.log('Eps: %d', 5-5/i);
  var s = Date.now();
  var sum = app(a, t, 5-5/i);
  if(5-5/i == 0) exact = sum;
  console.log('Error: %d', (exact-sum)/exact);
  console.log('Sum: %d', sum);
  console.log('Time: %dms', Date.now()-s);
}
