// Function to create a new recommendation card
function createRecommendationCard(review) {
    const card = document.createElement('div');
    card.className = 'recommendation-card';

    card.innerHTML = `
        <p class="recommendation-content">"${review.content}"</p>
        <div class="recommendation-author">
            <div class="author-info">
                <span class="author-name">${review.name}</span>
                <span class="author-title">${review.title}</span>
                <span class="author-company">${review.company}</span>
            </div>
        </div>
    `;

    return card;
}

// Function to load reviews from sessionStorage
function loadReviews() {
    const reviews = JSON.parse(sessionStorage.getItem('reviews') || '[]');
    const recommendationsGrid = document.querySelector('.recommendations-grid');

    // Clear existing reviews
    recommendationsGrid.innerHTML = `     
            <div class="recommendation-card">
                <p class="recommendation-content">
                    "Edward is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills make him a valuable asset to any team."
                </p>
                <div class="recommendation-author">
                    <div class="author-info">
                        <span class="author-name">Edward</span>
                        <span class="author-title">Software Engineer</span>
                        <span class="author-company">Google</span>
                    </div>
                </div>
            </div>
    `;

    // Add each review to the grid
    reviews.forEach(review => {
        const card = createRecommendationCard(review);
        recommendationsGrid.appendChild(card);
    });
}

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const review = {
        name: form.reviewerName.value,
        title: form.reviewerTitle.value,
        company: form.reviewerCompany.value,
        content: form.reviewContent.value
    };

    // Get existing reviews from sessionStorage
    const reviews = JSON.parse(sessionStorage.getItem('reviews') || '[]');

    // Add new review
    reviews.push(review);

    // Save back to sessionStorage
    sessionStorage.setItem('reviews', JSON.stringify(reviews));

    // Reload reviews
    loadReviews();

    // Reset form
    form.reset();

    // Show success message
    alert('Thank you for your review!');
}

// Add event listener when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Load existing reviews
    loadReviews();

    // Add form submit handler
    const form = document.getElementById('reviewForm');
    form.addEventListener('submit', handleFormSubmit);
});
