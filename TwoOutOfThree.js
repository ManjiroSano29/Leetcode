/* Given three integer arrays nums1, nums2, and nums3, 
return a distinct array containing all the values that are present in at least two out of the three arrays. 
You may return the values in any order */

var twoOutOfThree = function(nums1, nums2, nums3) {
    let set1 = new Set()
    let set2 = new Set()
    let set3 = new Set()
    let sth = new Set()
    let ans = []
        
    for(let i = 0; i < nums1.length; i++) {
        set1.add(nums1[i])
        sth.add(nums1[i])
    }
    
    for(let i = 0; i < nums2.length; i++) {
        set2.add(nums2[i])
        sth.add(nums2[i])
    }
    
    for(let i = 0; i < nums3.length; i++) {
        set3.add(nums3[i])
        sth.add(nums3[i])
    }
        
    
    sth.forEach(el => {
        let count = 0
        if (set1.has(el)) count++
        if (set2.has(el)) count++
        if (set3.has(el)) count++
        if (count >= 2) ans.push(el)
    })
    
    return ans
}    

console.log(twoOutOfThree([3], [2,3], [1,1,2,3]))
