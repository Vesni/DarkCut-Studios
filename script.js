// Set the date for the next episode release
const releaseDate = new Date().getTime() + (67 * 60 * 60 * 1000); // 18 hours from now

// Function to update the countdown every second
function updateCountdown() {
  const now = new Date().getTime();
  const timeRemaining = releaseDate - now;

  if (timeRemaining <= 0) {
    document.getElementById("timer").innerHTML = "The next episode is live!";
    clearInterval(countdownInterval);
    return;
  }

  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML = `${hours}h ${minutes}m ${seconds}s`;
}

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);
