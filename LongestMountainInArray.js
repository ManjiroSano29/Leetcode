/* You may recall that an array arr is a mountain array if and only if: arr.length >= 3
There exists some index i (0-indexed) with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
Given an integer array arr, return the length of the longest subarray, which is a mountain.
Return 0 if there is no mountain subarray. */

var longestMountain = function(arr) {
    let rightToLeft = new Array(arr.length).fill(1)
    let leftToRight = new Array(arr.length).fill(1)
    let max = 0
    
    for(let i = arr.length - 1; i >= 0; i--){
        if(arr[i] > arr[i+1]){
            rightToLeft[i] += rightToLeft[i+1] //[1, 1, 1, 1, 1, 1, 1]
                                               // 2  1  1  3  2  1  1 
        }
    }
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i-1] < arr[i]){
            leftToRight[i] += leftToRight[i-1] //[1, 1, 1, 1, 1, 1, 1]
                                               // 1  1  2  3  1  1  2
        }
        if(rightToLeft[i] > 1 && leftToRight[i] > 1){
            max = Math.max(max, rightToLeft[i] + leftToRight[i] - 1)
        }
    }
    return max
}

console.log(longestMountain([2,1,4,7,3,2,5]))