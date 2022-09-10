//Given an array, rotate the array to the right by k steps, where k is non-negative.

var rotate = function(nums, k) {
    let j = nums.length - k % nums.length; 
    let newArr = [...nums];
    for(let i = 0; i < nums.length; i++) {
        if(j === nums.length) {
            j = 0;
        }
        
        nums[i] = newArr[j];
        j++;
    }
    return nums
}
console.log(rotate([1,2,3,4,5,6,7], 3))