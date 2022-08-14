/* Given an integer array nums, move all the even integers at the beginning of the array 
followed by all the odd integers.
Return any array that satisfies this condition. */

var sortArrayByParity = function(nums) {
    let evenArr = []
    let oddArr = []
    for(let i = 0; i < nums.length; i++){
        if(nums[i] % 2 == 0){
            evenArr.push(nums[i])
        }else{
            oddArr.push(nums[i])
        }
    }
    return evenArr.concat(oddArr)
};

console.log(sortArrayByParity([3,1,2,4]))