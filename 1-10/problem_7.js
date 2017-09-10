/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?
*/
function isPrime(n) {
  for(var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false
  }
  return true;
}

function nthPrimeNumber(n) {
  if (n === 1) return 2
  if (n === 2) return 3
  var count = 2;
  var i = 5
  var prime = null
  while (count < n) {
    if (isPrime(i)) {
      count++
      prime = i
    }
    i++;
  }
  return prime
}

console.log('answer:', nthPrimeNumber(10001))
