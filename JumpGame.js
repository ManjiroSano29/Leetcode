/* You are given an integer array nums. You are initially positioned at the array's first index,
 and each element in the array represents your maximum jump length at that position.
Return true if you can reach the last index, or false otherwise */

var canJump = function(nums) {
   let lastInex = nums.length - 1
   for(let i = nums.length - 1; i >= 0; i--){
        if(i + nums[i] >= lastInex){
            lastInex = i
        }  
   }
   return lastInex === 0
};

console.log(canJump([2,3,1,1,5])) 
