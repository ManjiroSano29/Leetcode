/* Given the array of integers nums, you will choose two different indices i and j of that array. 
Return the maximum value of (nums[i]-1)*(nums[j]-1). */

var maxProduct = function(nums) {
    nums = nums.sort((a, b) => a - b )
    const max1 = nums.pop()
    const max2 = nums.pop()
    return (max1 - 1) * (max2 - 1)
};

console.log(maxProduct([3,4,5,2]))