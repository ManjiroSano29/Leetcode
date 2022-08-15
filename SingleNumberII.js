/* Given an integer array nums where every element appears three times except for one,
which appears exactly once. Find the single element and return it.
You must implement a solution with a linear runtime complexity and use only constant extra space. */

function singleNumber(nums) {
    const obj = {}
    for(let i = 0; i < nums.length; i++){
        const key = nums[i]
        if(obj[key]){
            obj[key]++
        }else{
            obj[key] = 1
        }
    }
    for(const key in obj){
        if(obj[key] === 1) return key
    }
    return 0
}

console.log(singleNumber([2,2,3,2]))