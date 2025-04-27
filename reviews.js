// Loader fadeout
window.addEventListener("load", function() {
    const loader = document.getElementById("loader");
    loader.style.display = "none";
});

// Submit Review
function submitReview() {
    const name = document.getElementById('name').value.trim();
    const reviewText = document.getElementById('review').value.trim();
    const rating = document.getElementById('rating').value;

    if (!name || !reviewText) {
        alert("Please fill in both fields!");
        return;
    }

    const reviewElement = document.createElement('div');
    reviewElement.classList.add('review', 'fade-in');
    reviewElement.innerHTML = `
        <h3>${name} – ${'⭐'.repeat(rating)}</h3>
        <p>${reviewText}</p>
    `;

    document.getElementById('reviewsContainer').prepend(reviewElement);

    // Clear fields
    document.getElementById('name').value = "";
    document.getElementById('review').value = "";
    document.getElementById('rating').value = "5";
}
