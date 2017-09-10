/*

The sum of the squares of the first ten natural numbers is,

1^2 + 2^2 + ... + 10^2 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)^2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

*/
// Time complexity = O(n)
function sumSquareDiff(n) {
  var sumSquare = 0;
  var squareSum = 0;
  for (var i = 1; i <= n; i++) {
    sumSquare += i;
    squareSum += i*i;
  }
  sumSquare = sumSquare * sumSquare
  return sumSquare - squareSum
}

// Time complexity = O(1) wow!
function sumSquareDiffOptimized(n) {
  var sum = n * (n + 1) / 2
  var squareSum = (2 * n + 1)*(n + 1)*n/6
  return (sum*sum) - squareSum
}

// added benchmark testing
var t0 = Date.now()
console.log(sumSquareDiff(100))
var t1 = Date.now()
var timeOne = t1-t0;
console.log('time for sumSquareDiff', timeOne)
var t2 = Date.now()

console.log(sumSquareDiffOptimized(100))
var t3 = Date.now()
var timeTwo = t3-t2;
console.log('time for sumSquareDiff', timeTwo)
