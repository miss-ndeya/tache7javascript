                        /***********Exercice1**********/

function afficherResultat() {
    // valeurs saisi par l'utilisateur
    const nombre1 = parseFloat(document.getElementById("nombre1").value);
    const nombre2 = parseFloat(document.getElementById("nombre2").value);
  
    // calcul 
    const resultat = nombre1 * nombre2;
  
    // Resultat
    const Texte = nombre1 + " multiplié par " + nombre2 + " vaut " + resultat;
    document.getElementById("text").innerHTML = Texte;
}
const clikbouton = document.getElementById("Resultat");
clikbouton.addEventListener("click", afficherResultat);


            /***********Exercice2**********/ 

// Demande à l'utilisateur d'entrer un nombre
const n = parseInt(prompt("Veuillez entrer un nombre :"));
const modulo = n % 4;
document.write(`Si l'on divise  ${n}  par 4, le reste est de ${modulo}`);

 
  
  
  
  