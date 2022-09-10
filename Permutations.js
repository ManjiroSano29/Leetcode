/* Given an array nums of distinct integers, return all the possible permutations. 
You can return the answer in any order. */

var permute = function(nums) {
    const dfs = (perm, curr, nums) => {
        if(!nums.length){
            perm.push([...curr])
            return
        }

        for(let i = 0; i < nums.length; i++){
            if(curr.indexOf(nums[i]) === -1){
                curr.push(nums[i])
                const left = nums.slice(0, i).concat(nums.slice(i+1))
                dfs(perm, curr, left)
                curr.pop()
            }
        }
        return
    }
    let perm = []
    let curr = []
    dfs(perm, curr, nums)
    return perm
};
console.log(permute("abc"))