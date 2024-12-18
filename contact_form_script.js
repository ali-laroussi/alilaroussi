document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.querySelector("#contactForm");
    const successMessage = document.querySelector("#successMessage");
    const errorMessage = document.querySelector("#errorMessage");

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = contactForm.querySelector("#name").value.trim();
        const email = contactForm.querySelector("#email").value.trim();
        const message = contactForm.querySelector("#message").value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Vérification des champs
        if (!name || !email || !message) {
            alert("Veuillez remplir tous les champs.");
            errorMessage.textContent = "Tous les champs sont requis.";
            errorMessage.style.display = "block";
            successMessage.style.display = "none";
            return;
        }

        if (!emailRegex.test(email)) {
            alert("Veuillez entrer une adresse email valide.");
            errorMessage.textContent = "Adresse email invalide.";
            errorMessage.style.display = "block";
            successMessage.style.display = "none";
            return;
        }

        // Si tout est correct
        alert("Merci pour votre message ! Nous reviendrons vers vous rapidement.");
        successMessage.textContent = "Votre message a été envoyé avec succès.";
        successMessage.style.display = "block";
        errorMessage.style.display = "none";

        // Réinitialisation du formulaire
        contactForm.reset();
    });
});
function submitQuiz() {
    var correctAnswers = {
        q1: 'c',
        q2: 'b',
        q3: 'c',
        q4: 'a',
        q5: 'a',
        q6: 'b',
        q7: 'a',
        q8: 'b',
        q9: 'b',
        q10: 'a'
    };

    var totalQuestions = 10;
    var score = 0;
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '<h2>Résultats :</h2>';

    for (var question in correctAnswers) {
        var userAnswer = document.querySelector('input[name="' + question + '"]:checked');
        if (userAnswer) {
            if (userAnswer.value === correctAnswers[question]) {
                score++;
                resultDiv.innerHTML += '<p class="correct">Question ' + question.slice(1) + ': Correct</p>';
            } else {
                resultDiv.innerHTML += '<p class="incorrect">Question ' + question.slice(1) + ': Incorrect. La bonne réponse était ' + correctAnswers[question].toUpperCase() + '.</p>';
            }
        } else {
            resultDiv.innerHTML += '<p class="incorrect">Question ' + question.slice(1) + ': Vous n\'avez pas répondu. La bonne réponse était ' + correctAnswers[question].toUpperCase() + '.</p>';
        }
    }

    alert('Votre score : ' + score + '/' + totalQuestions);

}
