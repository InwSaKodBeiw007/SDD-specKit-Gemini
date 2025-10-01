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
    document.getElementById('food-image').src = foodItem.imageUrl;
    document.getElementById('food-name').textContent = foodItem.name;
    document.getElementById('food-description').textContent = foodItem.description;
    document.getElementById('spiciness-level').textContent = `Spiciness Level: ${foodItem.spicinessLevel}`;
    document.getElementById('recommendation-text').textContent = recommendation.text;
});