/* Given a non-empty array of integers nums, every element appears twice except for one. 
Find that single one.
You must implement a solution with a linear runtime complexity and use only constant extra space. */

var singleNumber = function(nums) {
    nums = nums.sort ((a, b) => a - b)
    let newArr = []
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == nums[i+1]){
            newArr.push(nums[i], nums[i+1])
        } 
    }
    return nums.filter((x,i) => x !== newArr[i])[0]
};

console.log(singleNumber([4,1,4,1,2]))