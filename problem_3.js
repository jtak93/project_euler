/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?

*/

/*

@param {number} num
@return {number}

*/

// generate list of primes
function isPrime(n) {
  for(var i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) return false
  }
  return true;
}
var primes = [];
for (var k = 0; k < 1000000; k ++) {
  if (isPrime(k)) primes.push(k)
}


function largestPrimeFactor(num) {
  var currentNum = num;
  var largestPrimeFactor = null;
  // iterate through primes array and divide from the current if it is a factor
  var primeIndex = 0;
  while (currentNum > 1) {
    if( currentNum % primes[primeIndex] === 0) {
      currentNum = currentNum / primes[primeIndex];
      largestPrimeFactor = primes[primeIndex]
    }
    primeIndex++
  }
  return largestPrimeFactor
}
console.log('answer: ', largestPrimeFactor(600851475143))
