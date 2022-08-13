/* Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
Return the running sum of nums.*/

function runningSum(nums){
    const ans = new Array(nums.length)
    ans[0] = nums[0]
    for(let i = 1; i <= nums.length - 1; i++){
        ans[i] = ans[i-1] + nums[i]
    }
    return ans
}

console.log(runningSum([1,2,3,4,5]))