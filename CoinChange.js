/* You are given an integer array coins representing coins of different denominations and 
an integer amount representing a total amount of money.
Return the fewest number of coins that you need to make up that amount. 
If that amount of money cannot be made up by any combination of the coins, return -1.
You may assume that you have an infinite number of each kind of coin. */

var coinChange = function(coins, amount) {
    if(!coins || coins.length == 0 || amount <= 0) return 0
    const newArr = new Array(amount + 1).fill(amount + 1)
    newArr[0] = 0
    for(let j = 0; j < coins.length; j++){
        for(let i = 0; i <= amount; i++){
            if(i - coins[j] >= 0){
                newArr[i] = Math.min(newArr[i], newArr[i - coins[j]] + 1)
            }                               // [0, 1, 2, 1, 2, 1, 2, 3, 2, 3, 2, 3]
        }
    }
    return newArr[amount] > amount ? -1 : newArr[amount]
}

console.log(coinChange([1,3,5], 11))