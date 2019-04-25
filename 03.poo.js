function Personne(nom, prenom, pseudo){
    this.nom = nom; 
    this.prenom = prenom; 
    this.pseudo = pseudo; 
    this.getNomComplet = function(){
        return this.nom + ' '+this.prenom + ' '+this.pseudo; 
    }
    
}

var jules = new Personne('LEMAIRE','Jules', 'jules77'); 
var Paul = new Personne('Paul','LEMAIRE', 'paul44');

console.log("l'objet Jules>>>>>>>>>>>>>>>>>>")
console.log(jules.nom); 
console.log(jules.prenom); 
console.log(jules.pseudo); 
console.log(jules.getNomComplet()); 

console.log("l'objet Paul>>>>>>>>>>>>>>>>>>>")
console.log(Paul.nom); 
console.log(Paul.prenom); 
console.log(Paul.pseudo); 
console.log(Paul.getNomComplet());
console.log("Modifier le pseudo de l'objet jules en jules44.")

jules.pseudo = "jules44"; 
console.log('le nom complet de jules')
console.log(jules.getNomComplet()); 

console.log(jules.age); 

Personne.prototype.age = ""; 

console.log(jules.age); 

jules.age = 30; 
console.log(jules.age);

Personne.prototype.getInitiales = function () {

    var a = this.nom.charAt(0);
    return a;

  }
console.log(jules.getInitiales()); 
function afficherPersonne(texte) {

    console.log(texte);
  
  }

var robert = {
    prenom:"Robert",
    nom : "LEPREFET", 
    pseudo:"robert77", 
    getNomComplet : function(){
        return this.prenom + ' ' + this.nom + ' '+ this.pseudo; 
    }
   
}

afficherPersonne(robert.getNomComplet()); 

function Client(nom,prenom,pseudo, numeroClient, getInfos){
    Personne.call(this, nom, prenom, pseudo); 
   this.numeroClient = numeroClient; 
   this.getInfos = function(){
        return numeroClient + ' '+ nom + prenom; 
    }

}
var steve = new Client("Lucas", "Steve","steve44","A01"); 

afficherPersonne(steve.nom +' ' +steve.prenom+' '+ steve.pseudo+' '+steve.getInfos());












