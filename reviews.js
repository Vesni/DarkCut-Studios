// reviews.js

document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById('loader');
  const reviewForm = document.getElementById('reviewForm');
  const reviewsList = document.getElementById('reviewsList');

  // Hide loader after page load
  window.onload = () => {
    loader.style.display = 'none';
  };

  // Load reviews from localStorage
  const loadReviews = () => {
    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    reviewsList.innerHTML = ''; // Clear current

    reviews.forEach(({ name, review, date }) => {
      const reviewDiv = document.createElement('div');
      reviewDiv.classList.add('review-item');

      reviewDiv.innerHTML = `
        <h3>${escapeHTML(name)}</h3>
        <p>${escapeHTML(review)}</p>
        <small>${new Date(date).toLocaleString()}</small>
        <hr>
      `;
      reviewsList.appendChild(reviewDiv);
    });
  };

  // Escape HTML to prevent XSS
  function escapeHTML(text) {
    const div = document.createElement('div');
    div.innerText = text;
    return div.innerHTML;
  }

  // Handle form submit
  reviewForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const review = document.getElementById('review').value.trim();

    if (name && review) {
      const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
      reviews.push({ name, review, date: new Date().toISOString() });
      localStorage.setItem('reviews', JSON.stringify(reviews));

      reviewForm.reset();
      loadReviews();
      alert("Thanks for your review!");
    }
  });

  loadReviews();
});
