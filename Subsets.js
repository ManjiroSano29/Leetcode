/* Given an integer array nums of unique elements, return all possible subsets (the power set).
The solution set must not contain duplicate subsets. Return the solution in any order. */

var subsets = function(nums) {
    let ans = [[]]
    for(let i = 0; i < nums.length; i++){
     let length = ans.length
     for(let j = 0; j < length; j++){
         ans.push([...ans[j], nums[i]])
     }
    }
    return ans
 };
 
 console.log(subsets([1,2,3]))