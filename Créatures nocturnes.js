// durée du jeu en secondes
const dureeJeu = 50 * 60;

// temps de création des créatures nocturnes en secondes
const tempsCreationChauvesSouris = 2;
const tempsCreationSkellingtons = 5;
const tempsCreationZombies = 6;
const tempsCreationFantomesBaveux = 10;

// nombre de créatures nocturnes créées à chaque période de temps de création
const nbCreationChauvesSouris = 10;
const nbCreationSkellingtons = 5;
const nbCreationZombies = 4;
const nbCreationFantomesBaveux = 3;

// temps pour tuer chaque créature nocturne en secondes
const tempsTuerChauvesSouris = 6;
const tempsTuerSkellingtons = 20;
const tempsTuerZombies = 30;
const tempsTuerFantomesBaveux = 40;

// nombre de créatures nocturnes tuées à chaque période de temps de tuerie
const nbTuerChauvesSouris = 2;
const nbTuerSkellingtons = 1;
const nbTuerZombies = 1;
const nbTuerFantomesBaveux = 1;

// nombre de créatures nocturnes au début du jeu
let nbChauvesSouris = 0;
let nbSkellingtons = 0;
let nbZombies = 0;
let nbFantomesBaveux = 0;

// nombre de périodes de 4 minutes dans la durée du jeu
const nbPeriodes = dureeJeu / (4 * 60);

for (let i = 0; i < nbPeriodes; i++) {
  // création de nouvelles créatures nocturnes
  nbChauvesSouris += nbCreationChauvesSouris * tempsCreationChauvesSouris;
  nbSkellingtons += nbCreationSkellingtons * tempsCreationSkellingtons;
  nbZombies += nbCreationZombies * tempsCreationZombies;
  nbFantomesBaveux += nbCreationFantomesBaveux * tempsCreationFantomesBaveux;

  // tuerie de créatures nocturnes
  nbChauvesSouris -= nbTuerChauvesSouris * tempsTuerChauvesSouris;
  nbSkellingtons -= nbTuerSkellingtons * tempsTuerSkellingtons;
  nbZombies -= nbTuerZombies * tempsTuerZombies;
  nbFantomesBaveux -= nbTuerFantomesBaveux * tempsTuerFantomesBaveux;
};
