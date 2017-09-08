/*

2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

*/
/*
  find biggest prime factorizations
  if divisible by 20 (2*2*5)
                  19 (19)
                  18 (2*3*3)
                  17 (17)
                  16 (2*2*2*2)
                  15 (3*5)
                  14 (2*7)
                  13 (13)
                  12 (2*2*3)
                  11 (11)
  find the prime factorization that covers 1-20
  (2*2*2*2*3*3*5*7*11*13*17*19)
*/

function smallestDivisibleByXToY(x,y) {
  var answer = 1;
  var mostPrimeCounters = {
  }
  //loop through 11-20 for prime factorizations
  for (var i = x; i < y+1; i++) {
    var primeFactors = [];
    var num = i;
    var j = 2
    while (num > 1) {
      if (num % j === 0) {
        primeFactors.push(j)
        num = num / j
      } else {
        j++
      }
    }
    // store prime factorization for each iteration
    var counters = {}

    for (var k = 0; k < primeFactors.length; k++) {
      var key = primeFactors[k];
      if (!counters[key]) counters[key] = 1
      else counters[key]++
    }
    // loop through prime factorization to check if more than current
    for (var k in counters) {
      if (!mostPrimeCounters[k]) mostPrimeCounters[k] = 1
      else if (counters[k] > mostPrimeCounters[k]) mostPrimeCounters[k] = counters[k]
    }
  }

  for (var key in mostPrimeCounters) {
    answer = answer * Math.pow(key, mostPrimeCounters[key])
  }
  return answer;
}

console.log('answer:', smallestDivisibleByXToY(1,20))
