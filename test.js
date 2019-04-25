var lg = console.log



lg('hello');



// Etape 01 - variables



function fn() {



  // variable locale

  if (true) {

    var a = 1;

  }



  // variable globale

  b = 1;



  lg(a);

}



// Etape 02 - Fonctions



function afficher(texte) {

  lg(texte);

}



var aff = afficher;



aff('bonjour')



function addition(nb1, nb2, fn) {

  var resultat = nb1 + nb2;

  fn(resultat);

}



addition(1, 2, aff);



var aff2 = function (texte) {

  lg('T2=', texte);

}



addition(1, 2, aff2);



addition(1, 2, function (texte) {

  lg('T3=', texte);

});



// une fonction peut retourner une autre fonction

function recupOperation(add) {



  if (add) {

    return function (a, b) {

      return a + b;

    }

  } else {

    return function (a, b) {

      return a - b;

    }

  }

}



var somme = recupOperation(true);







afficher(recupOperation(true)(10, 20));

afficher(recupOperation(false)(10, 20));

afficher(recupOperation(false));



// addition(1, 2, lg('T3=', texte)); // NON



// Etape 03 - Objets via fonction constructeur



function Collegue(nom, prenom) {

  this.nom = nom;

  this.prenom = prenom;

  this.full = function () {

    return this.nom + ' ' + this.prenom;

  }

}



var c1 = new Collegue('Nom1', 'Prenom1');



afficher(c1);

afficher(c1.nom);

afficher(c1.full());



c1.age = 90;



afficher(c1);



// Etape 04 - Objets via syntaxe littérale



var c2 = {}; // objet vide



var c3 = {

  nom: 'Nom 3',

  prenom: 'Prenom 3',

  full: function () {

    return this.nom + ' ' + this.prenom;

  },

  age: 12

};



afficher(c3.nom);

afficher(c3.full());

c3.mail = 'rrrr'

afficher(c3);



// Etape 05 - Tableaux



var tab1 = []; // tableau vide

var tab2 = [1, 2, 3]; // tableau avec 3 chiffres

var tab3 = [{}, {}]; // tableau avec 2 objets

var tab4 = [{

  nom: 'nom 1'

}, {

  nom: 'nom 2'

}]; // tableau avec 2 objets



// parcourir avec forEach

tab2.forEach(function (el) {

  afficher(el);

});



// transformer avec map



var tab5 = tab2.map(function (el) {

  return {

    nom: 'nom ' + el

  };

});

afficher(tab5);



// filtrer avec filter



var tab6 = tab2.filter(function (a) {

  return a <= 1;

});



afficher(tab6);

