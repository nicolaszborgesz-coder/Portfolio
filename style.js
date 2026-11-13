
document.addEventListener("DOMContentLoaded", function () {

    const phrases = [
        "Desenvolvedor Júnior",
        "Python e Automação",
        "Desenvolvimento Web",
        "HTML, CSS, JavaScript e Java"
    ];

    const typingElement = document.getElementById("typing");

    if (!typingElement) {
        console.error('Elemento com id="typing" não encontrado no HTML.');
        return;
    }

    let phraseIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {
        const currentPhrase = phrases[phraseIndex];

        if (deleting) {
            charIndex--;
        } else {
            charIndex++;
        }

        typingElement.textContent = currentPhrase.substring(0, charIndex);

        let speed = deleting ? 40 : 80;

        if (!deleting && charIndex === currentPhrase.length) {
            deleting = true;
            speed = 1800;
        } else if (deleting && charIndex === 0) {
            deleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            speed = 400;
        }

        setTimeout(typeEffect, speed);
    }

    typeEffect();

    // Ano automático no rodapé
    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

});
