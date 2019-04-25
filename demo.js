console.log("hello"); 

function aff(texte){
    console.log(texte); 
}
function addition(a, b, fn){
var res = a + b; 
fn(res); 
}
addition(1, 2, aff);

//une fonction peut retourner une autre fonction 
function recup(add){
    if(add){
        return function(a, b){
            return a+b
        }
    }else {
        return function(a, b){
            return a-b
        }
    }
}
//on invoque nos fonctin 
//aff affiche le résultat et récup permet de retourner quelque chose et enfin on entre nos paramètres dans la fonction à retourner
aff(recup(true)(10,20)); 
aff(recup(false)(10,20)); 

//les objets via fonction constructeur 

function collegue (nom, prenom){
    //le this est obligatoire pour construire un nom; 
    this.nom = nom; 
    this.prenom = prenom; 
//si je veux créer une méthode à la java 
this.full  = function(){
    return this.nom + " "+ this.prenom; 
}


}
//le new qui permettra la construction de l'objet
var collegue1 = new collegue("dem", "amadou"); 
//on affiche ce qu'on veut : un objet dans le premier cas et le nom seul dans le second cas
aff(collegue1); 
aff(collegue1.nom); 
//on affiche comme à la manière java 
aff(collegue1.full())

//on peut créer un objet vide 
var objet2= {}; 

//objet alimenté 

var objet3 = {
    nom: "mcgregor", 
    prenom : "conor", 
    full : function(){
        return this.nom + ' ' +this.prenom; 
    }
}; 
//on affiche ce qu'on veut
aff(objet3.full); 
aff(objet3); 
aff(objet3.nom); 

//les tableaux 

var array1 = []; 

var array2 = [1,2, 3]; 

var array3 = [{nom: "Diallo", prenom: "alpha"}, {}]; 

aff(array3[0].prenom); 

array3.forEach(function(el){

    aff(el); 
})


