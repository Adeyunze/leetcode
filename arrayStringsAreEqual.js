const arrayStringsAreEqual = (word1, word2) => {
    let words1 =word1.join('')
    let words2 = word2.join('')
    if(words1 === words2) return true; else return false;
}

let word1 = ["abc", "d", "dfg"], word2 = ["abcddefg"]


console.log(arrayStringsAreEqual(word1, word2))