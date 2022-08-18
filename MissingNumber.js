/* Given an array nums containing n distinct numbers in the range [0, n], 
return the only number in the range that is missing from the array. */

var missingNumber = function(nums) {
    const n = nums.length;
    const expectedSum = (n * (n + 1)) / 2;
    
    const sum = nums.reduce((total, num) => total + num, 0);
    return expectedSum - sum;
};

console.log(missingNumber([3,0,1]))