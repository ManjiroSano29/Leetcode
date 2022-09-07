/* Given a positive integer n, you can apply one of the following operations:
If n is even, replace n with n / 2.
If n is odd, replace n with either n + 1 or n - 1.
Return the minimum number of operations needed for n to become 1 */

var integerReplacement = function(n) {
    let ans = 0
    while(n > 1){
        ans++
        if(n % 2 == 0){
            n = n / 2
        }else if(n % 4 == 1 || n == 3){
            n = n - 1
        }else{
            n = n + 1
        }
    }
    return ans  
}; //8 > 4 > 2 > 1

console.log(integerReplacement(8))