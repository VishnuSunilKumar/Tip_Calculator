## Tip Calculator Project 🔢

### Project Overview
This repository contains a simple yet functional tip calculator web application. Users can enter a bill amount and select a tip percentage to calculate the tip amount and total bill. The calculator features preset tip buttons.

![App Screenshot](https://github.com/user-attachments/assets/ef2d3788-e03f-4ec3-a7dd-f6cddd75e6d4)

### Project Structure
The project consists of three main files:
- `index.html` - The HTML structure of the application
- `styles.css` - The CSS styling for the application
- `script.js` - The JavaScript functionality for the calculator

## Getting Started

### Prerequisites
To work on this project, you will need:
- A text editor (like Visual Studio Code, Sublime Text, or Atom)
- A web browser (like Chrome, Firefox, or Edge)
- Basic understanding of HTML, CSS, and JavaScript

### Setting Up the Project
1. Create a new folder named `tip-calculator` on your computer
2. Inside this folder, create three empty files:
   - `index.html`
   - `styles.css`
   - `script.js`

## Development Guide

### Creating the HTML File
1. Open the `index.html` file in your text editor
2. Set up the basic HTML structure with DOCTYPE declaration, html, head, and body tags
3. Add meta tags for character set and responsive design
4. Link the CSS file using a `<link>` tag
5. Create the following structure for the calculator:
   - A main container div with class "calculator"
   - A heading for the calculator
   - An input group for the bill amount
   - A tip section with percentage buttons (15%, 18%, 20%)
   - A result section to display the tip amount and total

### Creating the CSS File
1. Open the `styles.css` file in your text editor
2. Import the 'Inter' font from Google Fonts
3. Set up general styling for the page (box-sizing, margin, padding, font)
4. Style the body to center the calculator on the page
5. Create styles for:
   - The calculator container
   - Input fields and their labels
   - Tip percentage buttons
   - Result display section
   - Responsive design adjustments for mobile screens

### Creating the JavaScript File
1. Open the `script.js` file in your text editor
2. Set up an event listener for when the DOM content is loaded
3. Create variables to reference HTML elements using getElementById and querySelector
4. Implement event listeners for:
   - Tip percentage buttons
   - Apply button
5. Create a function to calculate and display the tip and total amount
6. Add input validation to ensure proper bill amounts and tip percentages

## Running the Application
1. Open the `index.html` file in your web browser
2. Enter a bill amount in the input field
3. Either:
   - Click one of the preset tip percentage buttons (15%, 18%, 20%)
   - Or enter a custom tip percentage and click "Apply"
4. View the calculated tip amount and total bill

