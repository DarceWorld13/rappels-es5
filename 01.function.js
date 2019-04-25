console.log("01 - Fonctions");

//Créer 2 variables :

var nombre1 = 10; 
var nombre2 = 20; 

//Créer une fonction :

function additionner(nb1, nb2){

    var resultat1 =nb1 + nb2; 
    return resultat1; 
}

console.log(additionner(nombre1, nombre2)); 
//Variable de type fonction

var somme = additionner; 

var resultat2 = somme(nombre1, nombre2); 
console.log(resultat2); 

var multiplication = function(a, b){
    return a*b; 
}

var resultat3 = multiplication(nombre1, nombre2); 
console.log(resultat3); 

//Fonction comme élément du 1er ordre

var afficherOperation = function (nomOperation, operation, nb1, nb2){

 console.log(nomOperation+'('+nb1 + ',' + nb2 + ') =' + operation(nb1, nb2));


}

afficherOperation("somme", additionner, 20,40); 
afficherOperation("multiplication", multiplication,10, 20); 
afficherOperation("soustracttion", function(nb1, nb2){return nb1-nb2},15,5 ); 

//Partie 2 - Les tableaux

