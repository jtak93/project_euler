/*
The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:

13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.
*/

function collatz(num) {
  if (num % 2 === 0) return num / 2
  else return num * 3 + 1
}

function collatzSeq(start) {
  var num = start;
  var count = 1;
  while (num !== 1) {
    num = collatz(num)
    count++
  }
  return count
}

function largestCollatz(n) {
  var largest;
  var largestChain = 0;
  for (var i = 1; i < n; i++) {
    var chainLength = collatzSeq(i)
    if (chainLength > largestChain) {
      largest = i;
      largestChain = chainLength;
    }
  }
  return largest
}

console.log(largestCollatz(1000000))
