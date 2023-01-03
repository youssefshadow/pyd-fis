// (997, 312, 663)
let x=997;
let y=321;
let z=663;
while (10 * x > y) {
    x = (y * z) % 10000;
    y = (3 * z) % 10000;
    z = (7 * z) % 10000;
}
console.log(x,y,z);