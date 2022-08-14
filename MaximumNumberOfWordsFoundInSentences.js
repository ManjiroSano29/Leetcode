var mostWordsFound = function(sentences) {
    let max = 0
    for(let i = 0; i < sentences.length; i++){
        const number = sentences[i].split(" ").length
        if(number > max){
            max= number
        }
    }
    return max
};

console.log(mostWordsFound( ["alice and bob love leetcode", "i think so too",
"this is great thanks very much"]))