/* There are n kids with candies.
You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, 
and an integer extraCandies, denoting the number of extra candies that you have.
Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies,
they will have the greatest number of candies among all the kids, or false otherwise.
Note that multiple kids can have the greatest number of candies. */

var kidsWithCandies = function(candies, extraCandies) {
    let max = 0
    let newArr = []
    
    for(let i = 0; i < candies.length; i++){
        if(candies[i] > max) max = candies[i]
    }
    
    for(let i = 0; i < candies.length; i++){
        if((candies[i] + extraCandies) >= max){
            newArr[i] = true
        }else{
            newArr[i] = false
        }
    }
    return newArr
}
console.log(kidsWithCandies([1,2,3,4,5], 2))