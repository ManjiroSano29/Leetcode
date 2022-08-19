/* Given an integer n, return true if it is a power of two. Otherwise, return false.
An integer n is a power of two, if there exists an integer x such that n == 2x. */

var isPowerOfTwo = function(n) {
    let sth = n / 2
    if(n == 1) return true
    if(n % 2 !== 0 || n < 1) return false
    return isPowerOfTwo(sth)
};

console.log(isPowerOfTwo(4))