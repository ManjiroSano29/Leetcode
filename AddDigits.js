/* Given an integer num, repeatedly add all its digits until the result has only one digit, 
and return it. */

var addDigits = function(num) {
    return (num - 1) % 9 + 1;
};

console.log(addDigits(38))