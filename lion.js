let dieux=['ARTEMIS','ASCLEPIOS','ATHENA','ATLAS','CHARON','CHIRON','CRONOS','DEMETER','EOS','ERIS','EROS','GAIA','HADES','HECATE','HEPHAISTOS','HERA','HERMES','HESTIA','HYGIE','LETO','MAIA','METIS','MNEMOSYNE','NYX','OCEANOS','OURANOS','PAN','PERSEPHONE','POSEIDON','RHADAMANTHE,SELENE','THEMIS','THETIS','TRITON','ZEUS'];
let alphabet=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];


// let dico = {'A': 1, 'B': 2 };


function comparaison(word1, word2){
    return conversionMot(word1) - conversionMot(word2);
     
}

function conversionMot(word){
    let somme = 0;
    for (let i = 0 ; i < word.length ; i++){
       somme = (word.charCodeAt(i)- 64) + somme; 

    }
    return somme;
}
console.log(dieux.sort(comparaison));
console.log(conversionMot('AABAAAAA'));
