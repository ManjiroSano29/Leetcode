/* The product difference between two pairs (a, b) and (c, d) is defined as (a * b) - (c * d).
For example, the product difference between (5, 6) and (2, 7) is (5 * 6) - (2 * 7) = 16.
Given an integer array nums, choose four distinct indices w, x, y, and z such that the product difference between
pairs (nums[w], nums[x]) and (nums[y], nums[z]) is maximized.
Return the maximum such product difference. */

var maxProductDifference = function(nums) {
    let max = []
    let min = []
    let arr = nums.sort((a,b) => a-b)
    for(let i = 0; i < 2; i++){
        max.push(arr.pop())
        min.push(arr.shift())
    }
    return (max[0] * max[1]) - (min[0] * min[1])
};

console.log(maxProductDifference([5,6,2,7,4]))

