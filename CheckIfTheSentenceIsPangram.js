/* A pangram is a sentence where every letter of the English alphabet appears at least once.
Given a string sentence containing only lowercase English letters, 
return true if sentence is a pangram, or false otherwise. */

var checkIfPangram = function(sentence) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split("")
    return alphabet.every(str => sentence.includes(str))
};

console.log(checkIfPangram("leetcode"))