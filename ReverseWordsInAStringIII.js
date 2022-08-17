/* Given a string s, 
reverse the order of characters in each word within a sentence 
while still preserving whitespace and initial word order. */

var reverseWords = function(s) {
    s = s.split(" ")
    for( let i = 0; i < s.length; i++){
        s[i] = s[i].split("")
        s[i] = s[i].reverse()
        s[i] = s[i].join("")
    }
    return s.join(" ")
}
console.log(reverseWords("Let's take LeetCode contest"))