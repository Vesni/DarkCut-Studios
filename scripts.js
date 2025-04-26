const timer = document.getElementById('timer');
const nextEpisodeDate = new Date();
nextEpisodeDate.setDate(nextEpisodeDate.getDate() + 1); // Tomorrow
nextEpisodeDate.setHours(17, 0, 0, 0); // 5:00 PM

function updateTimer() {
  const now = new Date();
  const diff = nextEpisodeDate - now;
  
  if (diff <= 0) {
    timer.innerHTML = "New Episode Available!";
    return;
  }

  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  timer.innerHTML = `${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateTimer, 1000);
updateTimer();
