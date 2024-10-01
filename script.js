function openPopup(popupId) {
    document.getElementById(popupId).style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('thankyouPopup').style.display = 'block';
}

function closePopup() {
    document.querySelectorAll('.popup').forEach(popup => {
        popup.style.display = 'none';
    });
    document.getElementById('overlay').style.display = 'none';
}

function checkAnswer() {
    const answer = document.getElementById('quizAnswer').value;
    const feedback = document.getElementById('feedback');
    if (answer.trim() === "1853") {
        feedback.textContent = "Acertou! Ele nasceu em 1853";
    } else {
        feedback.textContent = "Errado! Tente novamente.";
    }
}

function redirectToGoogle () {
    closePopup();
    window.location.href = "https://google.com";
}