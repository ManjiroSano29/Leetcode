/* Given an integer numRows, return the first numRows of Pascal's triangle.
In Pascal's triangle, each number is the sum of the two numbers directly */

var generate = function(numRows) {
    let arr = new Array(numRows)
    for(let i = 0; i < arr.length; i++){
        arr[i] = []
        arr[i][0] = arr[i][i] = 1
        for(let j = 1; j < i; j++){
            arr[i][j] = arr[i-1][j] + arr[i-1][j-1]
        }
    }
    return arr
};

console.log(generate(5))