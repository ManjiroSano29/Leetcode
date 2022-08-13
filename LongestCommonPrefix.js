/* Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "" */

var longestCommonPrefix = function(strs) {
    let hollow = ""
    if(strs === null || strs.length <= 0) return hollow
    for(let i = 0; i <= strs[0].length - 1; i++){
        const char = strs[0][i]
        for(let j = 1; j <= strs.length - 1; j++){
            if(char !== strs[j][i]) return hollow
        }
        hollow = hollow + char
    }
    return hollow
};

console.log(longestCommonPrefix(["flower","flow","flight"]))