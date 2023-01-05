const codeKonami = {
    '←←' : 'h',
    '←↑' : '!',
    '←→' : 'm',
    '←↓' : 'l',
    '←A' : 's',
    '←B' : ',',
    '↑←' : 'r',
    '↑↑' : 'p',
    '↑→' : 'x',
    '↑↓' : 'b',
    '↑A' : 'j',
    '↑B' : 'v',
    '→←' : 'a',
    '→↑' : 'i',
    '→→' : ' ', 
    '→↓' : 'w',
    '→A' : 'g',
    '→B' : 'é',
    '↓←' : 'è',
    '↓↑' : 't',
    '↓→' : '.',
    '↓↓' : 'o',
    '↓A' : 'n',
    '↓B' : 'u',
    'A←' : 'à',
    'A↑' : '?',
    'A→' : 'y',
    'A↓' : 'c',
    'AA' : 'f',
    'AB' : 'd',
    'B←' : 'q',
    'B↑' : 'k',
    'B→' : "'",
    'B↓' : 'z',
    'BA' : 'e',
    'BB' : 'ê'
    };
    const message = '←↓↓↓↑←←AB←↓BBA→→↓↑↓B→→→←↓B↑←→←←A→→↑B→←→↑↓AA↓↓B→→↑↓→↑→A→→A↓↓↓↑←BA←B→→→←AAAA↑←↓↓↓A↓↑→B→→←↓BA→→↑←BA→A→←↑←AB→→→↑←→↑↑→↑↓↑↓↓A→→←↑↓←↓BA→→ABBA←A→→←A↓↑→←↓↑↓BBA←A→→→→←→↓↓→←→↑→→BA↓↑→→←A↓B↑←↑B→BA↓↓B→→→←↓B→→↑↓→←←↓←↓BA↓↑→→ABBA←A→→←A↓↓↓BA↓↓↓↓B↑↑BA←A←B→→→←↑↑↑←↓←←A→→→←↑B↓↓→↑↑←→→↓↑BA↓A↓B→→↓↑BB↓↑BA→→→←↓B↑→→→→←←→→↑↑↓BA←A→→→→↓↑BA↓A↓↑→←A↓↓B←↓→←→↑↑←BA←A←B→→↓↑↓B→→BA↓A↓↑↑←BA↑←→←←A→→BA↓AAA→↑↓A→→AB→←↓A←A→→←↓→←→→↑↓→←←ABA→→ABBA←A→→↑↓→←A↓↓↑→B↑←→↑→←↓A←A→→↑↑BA↓B↑↑←↓→BBA→→ABBA→→↑←↓↓↑↓↓↓↓↑←A→→↑↓→↑↑↑↓←ABBA←A↓→→→↑↑↓B→↑←A←B→→↓↑↓B→→AB→BA↓↓↓↓B↑B↑←→↑↑←→←←A→→←↓BA→→A↓BA↑←↑BBA→←↓B←B→→B←↓BB→→↑←↓→→↓↑BA→→AA→←↓BAB↑←→←→→AB→B↓↑↑←↓B→↑↑←BA↓→→→BA↓↑→→↓ABA→→↓↑B→→←↑B→↑←ABA→→↑↑→←←A→→ABBA→→A↓↓↓←→←→BA↓AA↓BA↑←→→A←→→AB→BA↓←←→↑AAAA↑←BA↑←→→A↓BA→→←→BA←A←A→←→ABA→→A←→→←↓→←→→←→→←→↑↓A→→BA↓A→→↑↑→←↑←↓↑→←↓A↓↑→→ABBA→→←↓→←→→AA→↑↓A←B→→A↓→←↑←→→←→↓↓↓A→→↓↓↑↓↑ABAA↓↓↑→↑AA→→BA←A↓↑→→ABBA→→↓↑BA→→AB→BA↓↓↓↓B↑←→←→ABA↑←→→ABB→→←→A→↑↑←→→ABBA→→←↓→←→→←A↓↓↑←↓↑BA↓→';

const deuxParDeux = [];
for (let i = 0; i < message.length; i += 2) {
  deuxParDeux.push(message.slice(i, i + 2));
}
console.log(message);
console.log(deuxParDeux);
let messageTrad = '';

for (let deux of deuxParDeux) {
  messageTrad += codeKonami[deux];
}
console.log(messageTrad)