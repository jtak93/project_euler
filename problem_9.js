/*

A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.

*/

var a;
var c;

for (var b = 1; b < 1000; b += 1) {
    a = (500000 - 1000 * b) / (1000 - b);

    if (Math.floor(a) === a) {
        c = 1000 - a - b;

        break;
    }
}

console.log(a, b, c);
console.log('product:', a*b*c);
