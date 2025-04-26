const releaseDate = new Date();
releaseDate.setDate(releaseDate.getDate() + 1);
releaseDate.setHours(12, 0, 0, 0); // 12:00 PM sharp

const countdownElement = document.getElementById("countdown");

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

function updateCountdown() {
  const now = new Date();
  const timeLeft = releaseDate - now;

  if (timeLeft <= 0) {
    countdownElement.innerHTML = "🎬 Episode Released!";
    countdownElement.classList.add("released");
    clearInterval(timerInterval); // Stop countdown
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  countdownElement.innerHTML = `
    ${formatTime(days)}d ${formatTime(hours)}h ${formatTime(minutes)}m ${formatTime(seconds)}s
  `;

  // Add pulse animation
  countdownElement.classList.remove("pulse");
  void countdownElement.offsetWidth; // trigger reflow
  countdownElement.classList.add("pulse");
}

// Update countdown every second
const timerInterval = setInterval(updateCountdown, 1000);
updateCountdown();

// Preloader
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  preloader.classList.add('fade-out');
  setTimeout(() => {
    preloader.style.display = 'none';
  }, 1000);
});


