const foodItems = [
    {
        name: "Pad Thai",
        description: "Tom Yum Kung (also spelled Tom Yam Goong) is a well-known Thai hot and sour shrimp soup, recognized for its bold flavors and aromatic spices. It's a harmonious blend of spicy, sour, salty, and sometimes sweet and creamy tastes. The iconic flavors are derived from a \"tom yum trinity\" of herbs: lemongrass, galangal, and kaffir lime leaves. While \"Tom Yum\" can be made with various proteins, \"Tom Yum Kung\" specifically features shrimp or prawns.",
        imageUrl: "images/Padd-Thai-HD.jpg",
        spicinessLevel: "5/10"
    },
    {
        name: "Tom Yam Kung",
        description: "Tom Yum Kung (also spelled Tom Yam Goong) is a well-known Thai hot and sour shrimp soup, recognized for its bold flavors and aromatic spices. It's a harmonious blend of spicy, sour, salty, and sometimes sweet and creamy tastes. The iconic flavors are derived from a \"tom yum trinity\" of herbs: lemongrass, galangal, and kaffir lime leaves. While \"Tom Yum\" can be made with various proteins, \"Tom Yum Kung\" specifically features shrimp or prawns.",
        imageUrl: "images/Tom-Yam-Kung.jpg",
        spicinessLevel: "9/10"
    },
    {
        name: "Green Curry",
        description: "Green curry, known in Thai as kaeng khiao wan (literally \"sweet green curry\"), is a popular variety of curry that originated in central Thailand. Its distinctive green color comes primarily from green chilies, which are a main ingredient in the curry paste. It offers a complex and intense flavor profile, often described as herby due to ingredients like cilantro and kaffir lime leaves. It balances spicy, savory, and subtly sweet notes.",
        imageUrl: "images/Green-Curry.jpg",
        spicinessLevel: "7/10"
    }
];

// Populate HTML elements with data when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const foodNameElement = document.getElementById('food-name');
    const foodDescriptionElement = document.getElementById('food-description');
    const spicinessLevelElement = document.getElementById('spiciness-level');
    const recommendationTextElement = document.getElementById('recommendation-text');

    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;

    function updateFoodCard(index) {
        const item = foodItems[index];
        foodNameElement.textContent = item.name;
        foodDescriptionElement.textContent = item.description;
        spicinessLevelElement.textContent = `Spiciness Level: ${item.spicinessLevel}`;
        // You can add logic here to update recommendationTextElement based on the current food item if needed
        recommendationTextElement.textContent = `Try ${item.name} if you like ${item.spicinessLevel} spiciness!`;
    }

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = (i === index) ? 'block' : 'none';
        });
        updateFoodCard(index);
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

    // Show the first slide and update food card initially
    showSlide(currentSlide);
});
