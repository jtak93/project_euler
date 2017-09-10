/*
The sequence of triangle numbers is generated by adding the natural numbers. So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. The first ten terms would be:

1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...

Let us list the factors of the first seven triangle numbers:

 1: 1
 3: 1,3
 6: 1,2,3,6
10: 1,2,5,10
15: 1,3,5,15
21: 1,3,7,21
28: 1,2,4,7,14,28
We can see that 28 is the first triangle number to have over five divisors.

What is the value of the first triangle number to have over five hundred divisors?
*/

function triNumWithNDiv(n) {
  var triNum = 0;
  var inc = 1;
  function numberOfDiv(n) {
    var div = 0
    var sqrt = Math.sqrt(n)
    for (var i = 0; i <= sqrt; i++) {
      if (n % i === 0) div += 2
    }
    if (sqrt*sqrt === n) div--
    return div
  }
  while (numberOfDiv(triNum) < n) {
    triNum += inc;
    inc++;
  }
  return triNum
}
var t1 = Date.now()
console.log('answer:', triNumWithNDiv(500))
var t2 = Date.now()
var time = t2 - t1;

console.log('takes:', time, 'ms')
