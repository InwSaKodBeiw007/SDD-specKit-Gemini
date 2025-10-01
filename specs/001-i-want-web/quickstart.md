# Quickstart and Manual Testing

This document provides instructions for manually testing the "Display Pad Thai Food Card" feature based on the clarified specification.

## Setup
1.  Ensure you have a modern web browser (e.g., Chrome, Firefox, Edge).
2.  Open the `index.html` file from the `src` directory in your browser.

## Test Scenarios

### Scenario 1: Desktop View Content Verification
1.  **Action**: Open `index.html` on a desktop browser.
2.  **Expected Result**:
    -   The page displays a centered card for "Pad Thai".
    -   The card shows an image, the name "Pad Thai", and the exact description "use noodle and Serve with chopsticks".
    -   The card displays a spiciness level of "5/10".
    -   A recommendations section with placeholder text is visible next to the card.
    -   The entire content fits on the screen without scrolling.

### Scenario 2: Mobile View Layout
1.  **Action**: Open `index.html` and resize the browser window to a mobile phone's width (or use browser developer tools for device emulation).
2.  **Expected Result**:
    -   The Pad Thai card is displayed.
    -   The recommendations section appears *below* the card, not next to it.
    -   The content is readable and well-formatted for the small screen.

### Scenario 3: Image Fallback
1.  **Action**: Temporarily rename the `Padd-Thai-HD.jpg` file in the `src/images` directory and reload the page.
2.  **Expected Result**:
    -   A placeholder image or a clear visual indicator (like an icon or styled alt text) appears where the image should be. The page layout should not break.