// Data de início do relacionamento
const startDate = new Date("Jun 12, 2023 00:00:00").getTime();
const timerElement = document.getElementById("timer");

function updateTimer() {
    const now = new Date().getTime();
    const timeElapsed = now - startDate;

    if (timeElapsed < 0) {
        timerElement.innerHTML = "Ocorreu um erro na contagem.";
        clearInterval(interval);
    } else {
        const days = Math.floor(timeElapsed / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeElapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeElapsed % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeElapsed % (1000 * 60)) / 1000);

        timerElement.innerHTML = `${days} dias ${hours} horas ${minutes} minutos ${seconds} segundos`;
    }
}

const interval = setInterval(updateTimer, 1000);

// Emojis de corações caindo
function createHeart() {
    const heart = document.createElement("span");
    heart.textContent = "❤️";
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.fontSize = `${Math.random() * 30 + 20}px`;
    document.querySelector(".hearts").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);

// Botão de Coração
let lovePercentage = 0;
const heartButton = document.getElementById("heartButton");
const lovePercentageElement = document.getElementById("lovePercentage");

heartButton.addEventListener("click", () => {
    lovePercentage += 5;
    if (lovePercentage > 100) {
        lovePercentage = 100;
    }
    lovePercentageElement.innerHTML = `Amor: ${lovePercentage}%`;
    if (lovePercentage === 100) {
        // Explosão de corações
        for (let i = 0; i < 50; i++) {
            createHeart();
        }
    }
});

// Música
const music = document.getElementById("music");
const playPauseButton = document.getElementById("playPauseButton");

playPauseButton.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        playPauseButton.innerHTML = "⏸️";
    } else {
        music.pause();
        playPauseButton.innerHTML = "🎶";
    }
});
