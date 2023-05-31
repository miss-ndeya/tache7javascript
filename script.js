                        /***********Exercice1**********/
                        
function afficherResultat() {
    // valeurs saisi par l'utilisateur
    var nombre1 = parseFloat(document.getElementById("n1").value);
    var nombre2 = parseFloat(document.getElementById("n2").value);
  
    // calcul 
    var resultat = nombre1 * nombre2;
  
    // Resultat
    var Texte = nombre1 + " multiplié par " + nombre2 + " vaut " + resultat;
    document.getElementById("text").innerHTML = Texte;
}
var clikbouton = document.getElementById("Resultat");
clikbouton.addEventListener("click", afficherResultat);


            /***********Exercice2**********/ 

// Demande à l'utilisateur d'entrer un nombre
var n = parseInt(prompt("Veuillez entrer un nombre :"));
var modulo = n % 4;
document.write(`Si l'on divise  ${n}  par 4, le reste est de ${modulo}`);

 
  
  
  
  