function testBoeuf( ){
    for (let blanc = 0  ; blanc < 1000 ; blanc++){
        for (let roux = blanc + 1  ; roux < 1000 ; roux++){
            for (let noir = roux + 1  ; noir < blanc*2 ; noir++){
                if ((blanc * roux  * noir) === ((blanc + roux + noir)*777 ) && blanc+roux+noir < 1000 ){
                    console.log([blanc , roux , noir]);
                }
            }

        }
    }
}
console.log(testBoeuf());


