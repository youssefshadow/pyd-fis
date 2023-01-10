function doublons(word) {
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        for (let j = i + 1; j < word.length; j++) {
            if (word[i] === word[j]) {
                count++;
                break;
            }
        }
    }
    return count;
    
}

console.log(doublons(words));



words.forEach(element => console.log(doublons(words)));
