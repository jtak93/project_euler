/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

// function that checks if number is a palindrome
function isPalindrome(num) {
  var n = num
  var rev = 0
  var digit = n % 10

  while (n > 0) {
    rev = rev * 10 + digit
    n = Math.floor(n / 10)
    digit = n % 10
  }
  if (rev === num) return true
  return false
}


function largestPalindromeThreeDigitProduct() {
  var currentProd = null;
  var largest = null;
  // iterate through all possible combinations and check if palindrome and if it is largest
  for (var i = 999; i > 99; i--) {
    for (var j = i; j > 99; j--) {
      currentProd = i * j
      if (isPalindrome(currentProd) && currentProd > largest) largest = currentProd
    }
  }
  return largest
}

console.log('answer:', largestPalindromeThreeDigitProduct())
