/* You are given the array nums consisting of n positive integers. 
You computed the sum of all non-empty continuous subarrays from the array and then sorted them in 
non-decreasing order, creating a new array of n * (n + 1) / 2 numbers.
Return the sum of the numbers from index left to index right (indexed from 1), inclusive, 
in the new array. Since the answer can be a huge number return it modulo 109 + 7. */

var rangeSum = function(nums, n, left, right) {
    let ans = new Array(n * (n + 1) / 2)
    let temp = 0 
    for(let i = 0; i < n; i++){
        let cur = 0
        for(let j = i; j < n; j++){
            cur += nums[j]
            ans[temp] = cur
            temp++
        }
    }
    ans = ans.sort((a,b) => a-b)
    let sum = 0
    for(let i = left - 1; i < right; i++){
        sum += ans[i]
    }
    return sum % (10**9 + 7)
};

console.log(rangeSum([1,2,3,4], 4, 1, 5))