/* You have planned some train traveling one year in advance. The days of the year in which you will travel
are given as an integer array days. Each day is an integer from 1 to 365.

Train tickets are sold in three different ways:

a 1-day pass is sold for costs[0] dollars,
a 7-day pass is sold for costs[1] dollars, and
a 30-day pass is sold for costs[2] dollars.
The passes allow that many days of consecutive travel.

For example, if we get a 7-day pass on day 2, then we can travel for 7 days: 2, 3, 4, 5, 6, 7, and 8.
Return the minimum number of dollars you need to travel every day in the given list of days */

var mincostTickets = function(days, costs) {
    let newArr = new Array(days[days.length - 1] + 1)
    newArr[0] = 0
    for(let i = 1; i < newArr.length; i++){
        if(!days.includes(i)){
            newArr[i] = newArr[i - 1]
        }else{
            newArr[i] = Math.min(
                newArr[Math.max(0, i - 1)] + costs[0],
                newArr[Math.max(0, i - 7)] + costs[1],
                newArr[Math.max(0, i - 30)] + costs[2]
            )
        }
    }
    return newArr[newArr.length - 1]
};

console.log(mincostTickets([1,4,6,7,8,20], [2, 7, 15]))