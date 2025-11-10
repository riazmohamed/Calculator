# iPhone Calculator Web Application

A fully functional, responsive calculator web application that emulates the iPhone calculator experience with modern web technologies.

## Project Overview

This calculator project was developed as part of a development bootcamp to demonstrate proficiency in HTML, CSS (TailwindCSS), and vanilla JavaScript. The application features a clean, iPhone-inspired design with comprehensive calculation functionality and a history feature.

## Features

### Core Functionality
- ✅ Basic arithmetic operations: addition, subtraction, multiplication, and division
- ✅ Responsive button grid layout that adapts to different screen sizes
- ✅ Calculation history with interactive access to previous results
- ✅ Chain operations (using previous results in new calculations)
- ✅ Operator change capability before finalizing calculations
- ✅ Error handling for invalid operations (division by zero)

### UI/UX Features
- ✅ iPhone-style calculator design with authentic color scheme
- ✅ Distinct button states (normal, hover, pressed)
- ✅ Smooth transitions and micro-interactions
- ✅ High contrast for accessibility
- ✅ Visual feedback for all user interactions
- ✅ Intuitive output display with appropriate formatting

### Advanced Features
- ✅ Keyboard support for all operations
- ✅ Percentage calculations
- ✅ Sign toggle functionality
- ✅ Decimal point handling
- ✅ Clear/All Clear functionality
- ✅ Local storage for calculation history
- ✅ Click-to-reuse previous results from history

## Technical Implementation

### Technologies Used
- **HTML5**: Semantic structure and accessibility
- **TailwindCSS**: Utility-first CSS framework for styling
- **Vanilla JavaScript**: Procedural programming approach (no OOP)
- **LocalStorage**: Browser-based history persistence

### Project Structure
```
Calculator/
├── index.html          # Main HTML file with calculator structure
├── styles.css          # Custom CSS styles and animations
├── script.js           # JavaScript functionality (procedural)
└── README.md           # Project documentation
```

### Key Implementation Details
- Procedural JavaScript programming approach (no classes or objects)
- Event-driven architecture for user interactions
- Local storage API for history persistence
- Responsive design using CSS Grid and Flexbox
- Semantic HTML5 elements for accessibility
- Error handling for edge cases (division by zero, invalid input)

## Usage Instructions

### Basic Operations
1. Click number buttons to input values
2. Select an operation (+, -, ×, ÷)
3. Input the second value
4. Press "=" to see the result
5. Use "C" to clear the last entry or "AC" to clear all

### Advanced Features
- **History**: Click "Show History" to view previous calculations
- **Reuse Results**: Click any history item to use that result
- **Keyboard Support**: Use number keys, operators, Enter for equals, Escape for clear
- **Chain Calculations**: Results automatically become the first operand in new calculations

### Keyboard Shortcuts
- **Numbers**: 0-9
- **Operators**: +, -, *, /
- **Equals**: Enter or =
- **Clear**: Escape, C, or Backspace
- **Decimal**: .

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/riazmohamed/Calculator.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Calculator
   ```

3. Open `index.html` in your web browser

No additional installation or build process required - the application runs entirely in the browser using vanilla web technologies.

## Deployment

This application is deployed using GitHub Pages and can be accessed at:
[GitHub Pages URL will be available after initial deployment]

## Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Known Limitations

- Display limited to 9 digits for optimal visual appearance
- History limited to 50 most recent calculations
- Scientific functions not implemented (basic calculator only)
- No dark/light theme toggle (fixed dark theme)

## Future Enhancements

- Scientific calculator mode with trigonometric functions
- Programmer mode with binary, octal, and hexadecimal conversions
- Theme switcher (light/dark modes)
- Memory functions (M+, M-, MR, MC)
- Graphing capabilities for mathematical functions
- Expanded history with search and filtering

## Development Notes

This project follows procedural programming principles as specified in the requirements. All functionality is implemented using functions and global variables rather than object-oriented programming patterns.

The calculator handles floating-point precision issues by rounding results to 8 decimal places and formatting numbers appropriately for display.

## Contributing

This is a learning project. For contributions or issues, please create a pull request or issue in the GitHub repository.

## License

This project is open source and available under the MIT License.