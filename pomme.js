//let pomme;
function calculPomme(etage) {
    let pomme=0;
    for (let i = 1; i <= etage; i++) {
        let nbrPomme=i*i;
        if (nbrPomme%3===0) {
            pomme+=nbrPomme;
            
        }
    }
   return pomme;
}
console.log(calculPomme(50));
