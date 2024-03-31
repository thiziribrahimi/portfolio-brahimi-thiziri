function deroulerMenu(){
    const menu = document.querySelector(".menu-liens");
    const icon = document.querySelector(".menu-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Fonction pour envoyer l'e-mail
function sendEmail(event) {
    event.preventDefault(); // Empêcher l'envoi par défaut du formulaire

    // Récupérer les données du formulaire
    var formData = new FormData(document.getElementById('contactForm'));

    // Créer un lien mailto avec les données du formulaire
    var mailtoLink = 'mailto:thiziribrahimi@outlook.fr' + 
                     '?subject=' + encodeURIComponent(formData.get('Objet')) + 
                     '&body=' + encodeURIComponent(formData.get('Message'));

    // Ouvrir le client de messagerie par défaut avec le lien mailto
    window.open(mailtoLink, '_blank');
}
// Ajouter un gestionnaire d'événements au formulaire
document.getElementById('contactForm').addEventListener('submit', sendEmail);
