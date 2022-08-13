/*Given an integer array nums, return true if any value appears at least twice in the array,
and return false if every element is distinct.*/

var containsDuplicate = function(nums) {
    let arr = []
    for(let i = 0; i <= nums.length - 1; i++){
     
     if(arr.indexOf(nums[i]) !== -1){
         return true
     }
        arr.push(nums[i])
    }
    return false
 
 };
 
 console.log(containsDuplicate([1,2,3,4]))