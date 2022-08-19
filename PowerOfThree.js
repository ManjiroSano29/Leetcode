/* Given an integer n, return true if it is a power of three. Otherwise, return false.
An integer n is a power of three, if there exists an integer x such that n == 3^x. */

var isPowerOfThree = function(n) {
    if(n == 1) return true
    if(n % 3 != 0 || n < 1) return false
    
}; 

console.log(isPowerOfThree(27))