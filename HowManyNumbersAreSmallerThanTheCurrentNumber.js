/* Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. 
That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].
Return the answer in an array. */

var smallerNumbersThanCurrent = function(nums) {
    let newArr = []
    for(let i = 0; i < nums.length; i++){
        let count = 0
        let j = 0
        while(j < nums.length){
            if(nums[i] > nums[j]){
                count ++
                j++
            }else{
                j++
            }
        }
        newArr.push(count)
    }
    return newArr
};

console.log(smallerNumbersThanCurrent([8,1,2,2,3]))