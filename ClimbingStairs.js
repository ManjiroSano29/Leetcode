/* You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top? */

var climbStairs = function(n) {
    let arr = new Array(n+1)
    arr[0] = 0
    arr[1] = 1
    arr[2] = 2
    for(let i = 3; i <= n; i++){
        arr[i] = arr[i-1] + arr[i-2]
    }
    return arr[n]
};

console.log(climbStairs(7))   
