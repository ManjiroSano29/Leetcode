/* Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), 
ans[i] is the number of 1's in the binary representation of i */

var countBits = function(n) {
    let newArr = new Array(n+1)
    let ans = []
    for(let i = 0; i < newArr.length; i++){
        newArr[i] = parseInt(i).toString(2)
        ans.push(newArr[i].split("1").length - 1)
    }
    
    return ans
};

console.log(countBits(5))

