# Data Model

This document defines the data structures for the feature. As this is a static site, these entities will be represented as simple JavaScript objects.

## Entities

### FoodItem
Represents the food dish displayed on the card.

-   **Type**: JavaScript Object
-   **Attributes**:
    -   `name`: (String) "Pad Thai"
    -   `description`: (String) "use noodle and Serve with chopsticks"
    -   `imageUrl`: (String) "images/Padd-Thai-HD.jpg"
    -   `spicinessLevel`: (String) "5/10"

### Recommendation
Represents a piece of advice or an instruction related to the food item.

-   **Type**: JavaScript Object
-   **Attributes**:
    -   `text`: (String) Placeholder recommendation text.