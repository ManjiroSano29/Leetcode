/* Given a 2D integer array matrix, return the transpose of matrix.
The transpose of a matrix is the matrix flipped over its main diagonal, 
switching the matrix's row and column indices. */

var transpose = function(matrix) {
    let ans = []
    for(let i = 0; i < matrix[0].length; i++){
        let newArr = []
        for(let j = 0; j < matrix.length; j++){
            newArr.push(matrix[j][i])
        }
        ans.push(newArr)
    }
    return ans
};

console.log(transpose([[1,2,3],[4,5,6],[7,8,9]]))