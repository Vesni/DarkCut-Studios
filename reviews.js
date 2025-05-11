document.addEventListener('DOMContentLoaded', function () {
  const loader = document.getElementById('loader');
  const reviewForm = document.getElementById('reviewForm');
  const reviewsList = document.getElementById('reviewsList');
  const nameInput = document.getElementById('name');
  const reviewInput = document.getElementById('review');

  // Display reviews from local storage if available
  function loadReviews() {
    // Get reviews from localStorage
    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    reviewsList.innerHTML = ''; // Clear the current list

    // Append each review to the reviews list
    reviews.forEach((review) => {
      const reviewElement = document.createElement('div');
      reviewElement.classList.add('review');
      reviewElement.innerHTML = `
        <h4>${review.name}</h4>
        <p>${review.text}</p>
      `;
      reviewsList.appendChild(reviewElement);
    });

    // Hide the loader once content is loaded
    loader.style.display = 'none';
  }

  // Handle form submission
  reviewForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get the values from the input fields
    const name = nameInput.value.trim();
    const reviewText = reviewInput.value.trim();

    // Validate input
    if (name && reviewText) {
      const newReview = { name, text: reviewText };

      // Get existing reviews from localStorage
      const reviews = JSON.parse(localStorage.getItem('reviews')) || [];

      // Add the new review
      reviews.push(newReview);

      // Save the updated reviews back to localStorage
      localStorage.setItem('reviews', JSON.stringify(reviews));

      // Reset the form fields
      nameInput.value = '';
      reviewInput.value = '';

      // Reload the reviews
      loadReviews();
    } else {
      alert('Please fill in both fields before submitting!');
    }
  });

  // Load reviews when the page loads
  loadReviews();
});
