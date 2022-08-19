/* Given an integer n, return true if it is a power of three. Otherwise, return false.
An integer n is a power of three, if there exists an integer x such that n == 3^x. */

var isPowerOfThree = function(n) {
    return n > 0 && Math.pow(3,33) % n === 0;
}; 

console.log(isPowerOfThree(27))