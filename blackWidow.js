
function widow(u,n) {
    
    for (let i = 0; i < n; i++) {
        u=(u*13)%1000;
    }
    return u;
}
console.log(widow(317,10));
console.log(widow(797,114));