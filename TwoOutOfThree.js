/* Given three integer arrays nums1, nums2, and nums3, 
return a distinct array containing all the values that are present in at least two out of the three arrays. 
You may return the values in any order */

var twoOutOfThree = function(nums1, nums2, nums3) {
    let ans = []
    for(let i = 0; i < nums1.length; i++){
        if(nums2.includes(nums1[i]) || nums3.includes(nums1[i])) 
        ans.push(nums1[i])
    }

    for(let i = 0; i < nums2.length; i++){
        if(nums3.includes(nums2[i])){
            ans.push(nums2[i])
        }
    }

    return [...new Set(ans)]
}    

console.log(twoOutOfThree([3], [2,3], [1,1,2,3]))