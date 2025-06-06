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
              "Edward demonstrated exceptional technical skills while developing
              our e-commerce platform. His ability to implement complex features
              like real-time inventory management and secure payment processing
              was impressive. He consistently delivered high-quality code and
              was always willing to help team members. His attention to detail
              and problem-solving approach made him an invaluable asset to our
              project."
            </p>
            <div class="recommendation-author">
              <img
                src="images/placeholder-profile.jpg"
                alt="Sarah Chen"
                class="author-image"
              />
              <div class="author-info">
                <span class="author-name">Sarah Chen</span>
                <span class="author-title">Technical Lead</span>
                <span class="author-company">TechRetail Solutions</span>
              </div>
            </div>
          </div>

          <div class="recommendation-card">
            <p class="recommendation-content">
              "Working with Edward on the task management system was a pleasure.
              His expertise in real-time application development and his ability
              to implement WebSocket functionality significantly improved our
              team's productivity. He showed great initiative in suggesting
              improvements and was always ready to tackle complex technical
              challenges. His collaborative approach and technical knowledge
              make him an excellent developer."
            </p>
            <div class="recommendation-author">
              <img
                src="images/placeholder-profile.jpg"
                alt="Michael Rodriguez"
                class="author-image"
              />
              <div class="author-info">
                <span class="author-name">Michael Rodriguez</span>
                <span class="author-title">Project Manager</span>
                <span class="author-company">AgileWorks Inc.</span>
              </div>
            </div>
          </div>

          <div class="recommendation-card">
            <p class="recommendation-content">
              "Edward's work on our fitness tracking mobile app was outstanding.
              His ability to handle both frontend and backend development, along
              with his expertise in React Native, helped us deliver a
              high-quality product. He showed great attention to user experience
              and implemented complex features like offline functionality and
              health API integration flawlessly. His technical skills and
              dedication to quality make him a valuable team member."
            </p>
            <div class="recommendation-author">
              <img
                src="images/placeholder-profile.jpg"
                alt="Emily Thompson"
                class="author-image"
              />
              <div class="author-info">
                <span class="author-name">Emily Thompson</span>
                <span class="author-title">Product Director</span>
                <span class="author-company">FitTech Solutions</span>
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

document.addEventListener('DOMContentLoaded', () => {
  loadReviews();

  const form = document.getElementById('reviewForm');
  form.addEventListener('submit', handleFormSubmit);
});

const scrollToTopButton = document.getElementById('scrollToTop');


window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    scrollToTopButton.classList.add('visible');
  } else {
    scrollToTopButton.classList.remove('visible');
  }
});

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
