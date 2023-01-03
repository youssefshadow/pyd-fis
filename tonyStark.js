
function ironman(nbr) {
    let somme=0;
    for (let i= 0; i < nbr; i++) {
        if (i%5==0 || i%3==0) {
            somme +=i;
        }
    }
    return somme;
    
}
nbr=1435;
console.log(ironman(nbr));
