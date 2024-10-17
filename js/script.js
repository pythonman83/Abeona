// ***************************** Code pour le formulaire multi-étapes ****************************//

// Sélectionne tous les éléments avec la classe 'step' (étapes du formulaire)
const steps = document.querySelectorAll('.step');

// Sélectionne tous les boutons avec la classe 'next-step' (boutons Suivant)
const nextBtns = document.querySelectorAll('.next-step');

// Sélectionne tous les boutons avec la classe 'prev-step' (boutons Précédent)
const prevBtns = document.querySelectorAll('.prev-step');

// Initialise la variable pour suivre l'étape actuelle, commence à 0
let currentStep = 0;

// Parcourt tous les boutons "Suivant"
nextBtns.forEach((btn) => {
  // Ajoute un écouteur d'événement 'click' pour chaque bouton
  btn.addEventListener('click', () => {
    // Masque l'étape actuelle en lui ajoutant la classe 'd-none'
    steps[currentStep].classList.add('d-none');
    // Passe à l'étape suivante en incrémentant 'currentStep'
    currentStep++;
    // Affiche la nouvelle étape en retirant la classe 'd-none'
    steps[currentStep].classList.remove('d-none');
  });
});

// Parcourt tous les boutons "Précédent"
prevBtns.forEach((btn) => {
  // Ajoute un écouteur d'événement 'click' pour chaque bouton
  btn.addEventListener('click', () => {
    // Masque l'étape actuelle en lui ajoutant la classe 'd-none'
    steps[currentStep].classList.add('d-none');
    // Retourne à l'étape précédente en décrémentant 'currentStep'
    currentStep--;
    // Affiche l'étape précédente en retirant la classe 'd-none'
    steps[currentStep].classList.remove('d-none');
  });
});

// ***************************** Code pour le formulaire multi-étapes ****************************//



//********************* Code pour la validation du formulaire multi-étapes ******************** *//
// Fonction auto-exécutante pour encapsuler le code
(function () {

  // Activation du mode strict pour une meilleure détection des erreurs
  'use strict'

  // Sélectionne tous les formulaires nécessitant une validation
  let forms = document.querySelectorAll('.needs-validation')

  // Transforme la NodeList en tableau pour pouvoir utiliser forEach
  Array.prototype.slice.call(forms)
    // Parcourt chaque formulaire
    .forEach(function (form){
       // Ajoute un écouteur d'événement 'submit' à chaque formulaire
       form.addEventListener('submit', function (event){
           // Vérifie si le formulaire n'est pas valide
           if (!form.checkValidity()) {
               // Empêche l'envoi du formulaire
               event.preventDefault()
               // Arrête la propagation de l'événement
               event.stopPropagation()
           }
           // Ajoute la classe 'was-validated' pour afficher le feedback visuel
           form.classList.add('was-validated')
       }, false)
    })
// Fin de la fonction auto-exécutante
})()
//******************* Code pour la validation du formulaire multi-étapes ******************** *//



//*********** Code pour pour le mode clair/sombre de la page  ********************************//
  document.getElementById('theme-toggler').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');  // Toggle le mode sombre pour le corps de la page
  document.querySelector('.navbar').classList.toggle('dark-mode');  // Toggle le mode sombre pour la navbar
  document.querySelector('footer').classList.toggle('dark-mode');  // Toggle le mode sombre pour le footer
  
  // Change le texte et l'icône de l'élément cliquable
  if (document.body.classList.contains('dark-mode')) {
    this.innerHTML = '<i class="fas fa-sun"></i> Clair';
  } else {
    this.innerHTML = '<i class="fas fa-moon"></i> Sombre';
  }
});
//*********** Code pour pour le mode clair/sombre de la page  ********************************//




//************************** Code pour le bouton remonter haut de page *********************//
let mybutton = document.getElementById("scrollToTopBtn");

// Quand l'utilisateur fait défiler la page de 20px vers le bas, montrer le bouton
window.onscroll = function() {scrollFunction()};

// Fonction pour gérer l'affichage du bouton en fonction du défilement de la page
function scrollFunction() {
  // Si l'utilisateur a fait défiler plus de 120 pixels vers le bas
  if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
    // Afficher le bouton
    mybutton.style.display = "block";
  } else {
    // Sinon, cacher le bouton
    mybutton.style.display = "none";
  }
}

// Quand l'utilisateur clique sur le bouton, remonter en haut de la page
mybutton.onclick = function() {
  // Défilement en douceur jusqu'en haut de la page
  window.scrollTo({top: 0, behavior: 'smooth'});
}

//************************** Code pour le bouton remonter haut de page *********************//
