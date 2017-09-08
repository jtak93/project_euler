/*
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.
*/

var sum = 0;
//get list of primes
function isPrime(n) {
  if (n === 2) return true
  if (n === 3) return true
  for(var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false
  }
  return true;
}
var primes = [];
for (var k = 2; k < 2000000; k ++) {
  if (isPrime(k)) primes.push(k)
}

// reduce primes into sum
console.log(primes.reduce((a,b) => a+b))
