module.exports = function(a, t, eps) {
  eps = eps || 0;
  var l = a.length,
      d = eps/l/2,
      r1 = [0],
      r2, r3, n, i, j, k, f;
  for(i in a) {
    r2 = [];
    for(j in r1) {
      n = r1[j] + a[i];
      if(n <= t) {
        r2.push(n)
      }
    }
    for(j in r2) {
      f = false;
      for(k in r1) {
        if(r2[j] == r1[k]) {
          f = true;
          break;
        }
      }
      if(!f) {
        r1.push(r2[j]);
      }
    }
    r3 = [0];
    for(j in r1) {
      if(r1[j] > r3[r3.length-1]*(d+1)) {
        r3.push(r1[j]);
      }
    }
    r1 = r3;
  }
  for(i in r1) {
    if(r1[i] > t) return r[+i-1];
  }
  return r1[r1.length-1];
}
