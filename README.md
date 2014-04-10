# node-subset-sum

Polynomial [approximation](http://en.wikipedia.org/wiki/Approximation_algorithm) of the [subset-sum problem](http://en.wikipedia.org/wiki/Subset_sum_problem).

For the given `t` integer and `arr` set of integers, the algorithm computes the closest possible sum to `t` from a subset of `arr` (the result is equal or less that `t`).

The subset-sum problem is NP-hard, so computing the exact solution takes exponential time.

This module uses a polynomial approximation algorithm, that allows you to fine-tune the error/time-complexity ratio.

## Install

```
$ npm install subset-sum
```

## Usage

```js
var approx = require('subset-sum');
```

### approx(arr, t[, eps])

Return the closest sum to `t` (lesser or equal) that can be computed from a subset of `arr`.

With `eps = 0` the algorithm has exponential time, but it is *accurate*.
With `eps > 0` the computation has polynomial complexity, but the result may have error up to `eps*t` (so a closer sum to `t` *may* exist).

`eps` can be arbitrary small, but as `eps` goes to `0`, the complexity becomes exponential.

## Example

```js
console.log(approx([2,3,4,5,10,11,13,16,22,28,30], 97)); // eps = 0, the solution is accurate (97)
console.log(approx([2,3,4,5,10,11,13,16,22,28,30], 97, 0.5)); // eps = 0.5, the solution has error (94)
```

## Benchmark

See [`benchmark.js`](benchmark.js)

## License

MIT
