function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelectorAll(".close")

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
    modalbg.style.display = "block";
}
// TODO.1 = Fermer la modale
//  function close modal
function closeModal() {
    modalbg.style.display = "none";
}

//  close modal event
modalClose.forEach((btn) => btn.addEventListener("click", closeModal));

// TODO.2 = Implémenter entrées du formulaire , partie.1(voir html, ligne:58, 62, 66, 70, 74)
// TODO.2 = Implémenter entrées du formulaire , partie.2
// Functional submit button