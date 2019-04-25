var villes = [ 'nantes', 'paris', 'saint-nazaire', 'angers', 'le mans']; 


/*for(i=0; i<villes.length; i++){
    console.log(villes[i])
}*/
  
villes.forEach(function(toutes){
    console.log(toutes)
}); 

function contientA(lettre){
    return lettre ="a";
}
 var lettreDansToutesLesVilles = villes.every(contientA); 
 console.log(lettreDansToutesLesVilles)

 function contienttiret(tiret){
    return tiret ="-";
}

var auMoinsUneVilleAvecUnTiret = villes.some(contienttiret); 
console.log(auMoinsUneVilleAvecUnTiret); 

var villesSansTiretSansEspace = villes.filter(function (a) {

    return a != '-';
  
  });

console.log(villesSansTiretSansEspace); 

var villesMajusculeSeTerminantParS = villes.filter(function (el) {

  var restant = el.endsWith('s');

  return restant
 
 
}).map (function (el) {

    return el.toUpperCase ();
   
   
  }); 

console.log(villesMajusculeSeTerminantParS)