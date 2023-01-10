const fs = require('fs');
const words = fs.readFileSync('liste_mots.txt', 'utf8').split('\n');

const thor_letters = "Thor";
let count = 0;
for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.length !== thor_letters.length) {
        continue;
    }
    let thor_letters_copy = thor_letters;
    let valid = true;
    for (let j = 0; j < word.length; j++) {
        let index = thor_letters_copy.indexOf(word[j]);
        if (index !== -1) {
            thor_letters_copy = thor_letters_copy.slice(0, index) + thor_letters_copy.slice(index+1);
        } else {
            valid = false;
            break;
        }
    }
    if (valid) {
        count++;
    }
}
