
let x = 1170;
let y = 290;
let altitude = x;
let jour = 0;

while (altitude < 324*100) {
    jour++;
    altitude += x - 2*jour;
    altitude -= y;
    if (jour % 5 == 0) {
        altitude -= 2*y;
        jour += 2;
    }
}

console.log("L'escargot arrive enfin à la terre promise " + jour);
