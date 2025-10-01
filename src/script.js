// Data for the food item (Pad Thai)
const foodItem = {
    name: "Pad Thai",
    description: "use noodle and Serve with chopsticks",
    imageUrl: "images/Padd-Thai-HD.jpg",
    spicinessLevel: "5/10"
};

// Data for the recommendation section
const recommendation = {
    text: "Placeholder recommendation text."
};

// Populate HTML elements with data when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // document.getElementById('food-image').src = foodItem.imageUrl; // Removed as carousel handles images
    document.getElementById('food-name').textContent = foodItem.name;
    document.getElementById('food-description').textContent = foodItem.description;
    document.getElementById('spiciness-level').textContent = `Spiciness Level: ${foodItem.spicinessLevel}`;
    document.getElementById('recommendation-text').textContent = recommendation.text;

    // Carousel functionality
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = (i === index) ? 'block' : 'none';
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    // Show the first slide initially
    showSlide(currentSlide);
});