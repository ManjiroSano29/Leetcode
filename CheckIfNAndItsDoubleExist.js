/* Given an array arr of integers, check if there exist two indices i and j such that :
i != j
0 <= i, j < arr.length
arr[i] == 2 * arr[j] */

var checkIfExist = function(arr) {
    const obj = {}
    for(let i = 0; i < arr.length; i++){
        if(obj[arr[i]] !== undefined) return true
        obj[arr[i] / 2] = arr[i]
        obj[arr[i] * 2] = arr[i]
    }
    return false
};

console.log(checkIfExist([5,3,10,1])) 