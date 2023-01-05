// Exo niveau 2 MESSAGE DU WITCHER

function minuscule(truc) {
    return truc.toLowerCase();
  }

let parchemin = 'yYyYjJpPEviIzeExXZxgGwWjkKJXmMxXVvVkqQoOagxXGeEAoOpPtTntTNnNKjtTxXwWgGJunjJdDoONUspPSutTtgGTUhHqlLrRQmuUjJnwfFWNxXpzZPyYlLzZMoOnweEfFWkwpPjJWnNxXKyYjJyYfFuUicbBCcCpuUoOPoeEoOsgwWsaAsSSjJGkKeEnNSpPvVsmyYMoOsSSOxXdyqQzZmMmMYnNDd';

function estMinuscule(mot){
    return minuscule(mot) === mot;
}

function tradWitcher(papierDeGeralt){
    let message ="";
    let i = 0;
    while (i < papierDeGeralt.length-1){
        let minuscule1 = estMinuscule(papierDeGeralt[i]);
        let majuscule2 = !estMinuscule(papierDeGeralt[i+1])
        if(minuscule1 && majuscule2 && papierDeGeralt[i] === minuscule(papierDeGeralt[i+1])){
            i += 2;
        
        }
        else{
            message += papierDeGeralt[i];
            i++;
        
        }
        
    }
    if( i == papierDeGeralt.length -1 ){
        message += papierDeGeralt[i];
    }

    return message;
}
let parchemin2 = tradWitcher(parchemin);

while ( parchemin !== parchemin2 ){
    parchemin = parchemin2;
    parchemin2 = tradWitcher(parchemin);
}
console.log(tradWitcher(parchemin));
console.log(tradWitcher('GwboOBynaABlnNecCigGdd'));
