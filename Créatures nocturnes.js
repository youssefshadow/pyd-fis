

function appear(minute) {
    let chauveSouris;
    let skellington;
    let zombie;
    let fantomeBaveux;
    let seconde;
    minute == seconde * 60;
    if (seconde = 0) {
        chauveSouris = 0;
        skellington = 0;
        zombie = 0;
        fantomeBaveux = 0;
    }
    if (seconde = 2) {
        chauveSouris = 6;
    }
    if (seconde = 5) {
        skellington = 5;
    }
    if (seconde = 6) {
        zombie = 4;
    }
    if (seconde = 10) {
        fantomeBaveux = 3;
    }
    return {
        chauveSouris,
        skellington,
        zombie,
        fantomeBaveux
    };
}
console.log(appear(15));
  