/* Given an array of strings words, return the words that can be typed using letters of the alphabet 
on only one row of American keyboard like the image below.
In the American keyboard:
the first row consists of the characters "qwertyuiop",
the second row consists of the characters "asdfghjkl", and
the third row consists of the characters "zxcvbnm". */

var findWords = function(words) {
    let ans = []
    let first = "qwertyuiop"
    let second = "asdfghjkl"
    let third = "zxcvbnm"
    let flag1 = 0
    let flag2 = 0
    let flag3 = 0
    for(let i=0;i<words.length;i++){
        for(let j=0;j<words[i].length;j++){
            if(first.indexOf(words[i][j].toLowerCase()) !== -1){
               flag1 = 1;
            }
            if(second.indexOf(words[i][j].toLowerCase()) !== -1){
               flag2 = 1;
            }
            
            if(third.indexOf(words[i][j].toLowerCase()) !== -1){
               flag3=1;
            } 
            
            if(flag1+flag2+flag3 > 1) break;
        }
        if((flag1+flag2+flag3) === 1)
        ans.push(words[i]);
        flag1 = 0;
        flag2 = 0;
        flag3 = 0;
       }
    return ans;
};

console.log(findWords(["Hello","Alaska","Dad","Peace"]))