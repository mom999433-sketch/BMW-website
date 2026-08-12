const button = document.getElementById("startBtn");
const audio = document.getElementById("engineAudio");

button.addEventListener("click", () => {
    audio.play();
});