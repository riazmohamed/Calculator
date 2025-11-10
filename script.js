// ============================================
// CALCULATOR - PROCEDURAL JAVASCRIPT
// GitHub Pages Compatible Static Calculator
// ============================================

// ============================================
// STATE VARIABLES
// ============================================
let currentValue = '0';           // Current number being displayed
let previousValue = '';            // Previous number stored for calculation
let operation = null;              // Current operation (+, -, *, /)
let shouldResetDisplay = false;    // Flag to reset display on next number input
let history = [];                  // Array to store calculation history

// ============================================
// DOM ELEMENT REFERENCES
// ============================================
let display;                       // Main calculator display
let equation;                      // Equation display (shows previous value and operation)
let historyList;                   // History list container
let historyToggle;                 // Button to show/hide history
let historyPanel;                  // History sidebar panel
let closeHistory;                  // Button to close history panel
let clearHistoryBtn;               // Button to clear all history

// ============================================
// INITIALIZATION
// ============================================
// Wait for DOM to be fully loaded before initializing
document.addEventListener('DOMContentLoaded', function() {
    initializeCalculator();
});

/**
 * Initialize the calculator by setting up DOM references,
 * loading saved history, and attaching event listeners
 */
function initializeCalculator() {
    // Get DOM element references
    display = document.getElementById('display');
    equation = document.getElementById('equation');
    historyList = document.getElementById('history-list');
    historyToggle = document.getElementById('history-toggle');
    historyPanel = document.getElementById('history-panel');
    closeHistory = document.getElementById('close-history');
    clearHistoryBtn = document.getElementById('clear-history');

    // Load history from localStorage
    loadHistory();

    // Set up event listeners
    initializeEventListeners();

    // Update display to show initial value
    updateDisplay();
}

// ============================================
// EVENT LISTENERS SETUP
// ============================================
/**
 * Attach all event listeners for buttons and keyboard input
 */
function initializeEventListeners() {
    // Number buttons (0-9)
    document.querySelectorAll('[data-number]').forEach(function(button) {
        button.addEventListener('click', function(e) {
            handleNumber(e.target.dataset.number);
        });
    });

    // Operation and action buttons (AC, +/-, %, ÷, ×, -, +, ., =)
    document.querySelectorAll('[data-action]').forEach(function(button) {
        button.addEventListener('click', function(e) {
            handleAction(e.target.dataset.action);
        });
    });

    // History panel toggle button
    historyToggle.addEventListener('click', function() {
        toggleHistory();
    });

    // Close history button
    closeHistory.addEventListener('click', function() {
        toggleHistory();
    });

    // Clear history button
    clearHistoryBtn.addEventListener('click', function() {
        clearHistory();
    });

    // Keyboard support for typing numbers and operations
    document.addEventListener('keydown', function(e) {
        handleKeyboard(e);
    });
}

// ============================================
// NUMBER INPUT HANDLING
// ============================================
/**
 * Handle number button clicks (0-9 and decimal point)
 * @param {string} num - The number or decimal point to add
 */
function handleNumber(num) {
    // If we should reset display (after operation or equals), start fresh
    if (shouldResetDisplay) {
        currentValue = num;
        shouldResetDisplay = false;
    } else {
        // Replace initial '0' with the first number (unless it's a decimal point)
        if (currentValue === '0' && num !== '.') {
            currentValue = num;
        }
        // Prevent multiple decimal points
        else if (num === '.' && currentValue.includes('.')) {
            return;
        }
        // Append number to current value
        else {
            currentValue += num;
        }
    }
    updateDisplay();
}

// ============================================
// ACTION BUTTON HANDLING
// ============================================
/**
 * Handle action button clicks (operations, clear, percent, etc.)
 * @param {string} action - The action to perform
 */
function handleAction(action) {
    switch(action) {
        case 'clear':
            clear();
            break;
        case 'toggle-sign':
            toggleSign();
            break;
        case 'percent':
            percent();
            break;
        case 'divide':
            setOperation('/');
            break;
        case 'multiply':
            setOperation('*');
            break;
        case 'subtract':
            setOperation('-');
            break;
        case 'add':
            setOperation('+');
            break;
        case 'decimal':
            handleNumber('.');
            break;
        case 'equals':
            calculate();
            break;
    }
}

// ============================================
// OPERATION FUNCTIONS
// ============================================
/**
 * Set the operation and prepare for the next number
 * @param {string} op - The operation symbol (+, -, *, /)
 */
function setOperation(op) {
    // If there's already an operation, calculate the result first
    if (operation !== null) {
        calculate();
    }
    // Store current value as previous value for calculation
    previousValue = currentValue;
    operation = op;
    shouldResetDisplay = true;
    updateDisplay();
}

/**
 * Perform the calculation based on the stored operation
 */
function calculate() {
    // Don't calculate if no operation is set or display should reset
    if (operation === null || shouldResetDisplay) {
        return;
    }

    // Convert string values to numbers for calculation
    const prev = parseFloat(previousValue);
    const current = parseFloat(currentValue);
    let result;

    // Perform the appropriate calculation
    switch(operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            // Prevent division by zero
            result = current !== 0 ? prev / current : 0;
            break;
        default:
            return;
    }

    // Create equation string for history
    const equationStr = prev + ' ' + operation + ' ' + current;
    addToHistory(equationStr, result);

    // Update state with result
    currentValue = result.toString();
    operation = null;
    previousValue = '';
    shouldResetDisplay = true;
    updateDisplay();
}

/**
 * Clear all values and reset calculator
 */
function clear() {
    currentValue = '0';
    previousValue = '';
    operation = null;
    shouldResetDisplay = false;
    updateDisplay();
}

/**
 * Toggle the sign of the current value (positive/negative)
 */
function toggleSign() {
    const num = parseFloat(currentValue);
    currentValue = (num * -1).toString();
    updateDisplay();
}

/**
 * Convert current value to percentage (divide by 100)
 */
function percent() {
    const num = parseFloat(currentValue);
    currentValue = (num / 100).toString();
    updateDisplay();
}

// ============================================
// DISPLAY UPDATE
// ============================================
/**
 * Update the calculator display with current values
 */
function updateDisplay() {
    // Update main display with current value
    display.textContent = currentValue;

    // Update equation display if an operation is active
    if (operation) {
        equation.textContent = previousValue + ' ' + operation;
    } else {
        equation.textContent = '';
    }
}

// ============================================
// KEYBOARD INPUT HANDLING
// ============================================
/**
 * Handle keyboard input for calculator operations
 * @param {KeyboardEvent} e - The keyboard event
 */
function handleKeyboard(e) {
    // Number keys (0-9)
    if (e.key >= '0' && e.key <= '9') {
        handleNumber(e.key);
    }
    // Decimal point
    else if (e.key === '.') {
        handleNumber('.');
    }
    // Addition and subtraction
    else if (e.key === '+' || e.key === '-') {
        setOperation(e.key);
    }
    // Multiplication
    else if (e.key === '*') {
        e.preventDefault();
        setOperation('*');
    }
    // Division
    else if (e.key === '/') {
        e.preventDefault();
        setOperation('/');
    }
    // Equals/Enter
    else if (e.key === 'Enter' || e.key === '=') {
        e.preventDefault();
        calculate();
    }
    // Backspace (delete last digit)
    else if (e.key === 'Backspace') {
        e.preventDefault();
        currentValue = currentValue.slice(0, -1) || '0';
        updateDisplay();
    }
    // Escape (clear)
    else if (e.key === 'Escape') {
        clear();
    }
}

// ============================================
// HISTORY MANAGEMENT
// ============================================
/**
 * Add a calculation to the history
 * @param {string} equationStr - The equation string (e.g., "5 + 3")
 * @param {number} result - The calculation result
 */
function addToHistory(equationStr, result) {
    // Create history entry object
    const entry = {
        equation: equationStr,
        result: result,
        timestamp: new Date().toLocaleTimeString()
    };

    // Add to beginning of history array
    history.unshift(entry);

    // Save to localStorage
    saveHistory();

    // Update history display
    renderHistory();
}

/**
 * Render the history list in the sidebar
 */
function renderHistory() {
    // Clear existing history items
    historyList.innerHTML = '';

    // Create and append history items
    history.forEach(function(entry, index) {
        const item = document.createElement('div');
        item.className = 'bg-gray-700 p-3 rounded mb-2 cursor-pointer hover:bg-gray-600 transition-colors';

        // Build history item HTML
        item.innerHTML = '<div class="text-gray-300 text-sm">' + entry.equation + '</div>' +
                        '<div class="text-white font-semibold">' + entry.result + '</div>' +
                        '<div class="text-gray-500 text-xs">' + entry.timestamp + '</div>';

        // Add click handler to reuse result
        item.addEventListener('click', function() {
            currentValue = entry.result.toString();
            shouldResetDisplay = true;
            updateDisplay();
            toggleHistory();
        });

        historyList.appendChild(item);
    });
}

/**
 * Toggle the history panel visibility
 */
function toggleHistory() {
    historyPanel.classList.toggle('translate-x-full');

    // Render history when opening panel
    if (!historyPanel.classList.contains('translate-x-full')) {
        renderHistory();
    }
}

/**
 * Clear all history entries
 */
function clearHistory() {
    history = [];
    saveHistory();
    renderHistory();
}

/**
 * Save history to localStorage for persistence
 */
function saveHistory() {
    localStorage.setItem('calculatorHistory', JSON.stringify(history));
}

/**
 * Load history from localStorage
 */
function loadHistory() {
    const saved = localStorage.getItem('calculatorHistory');
    history = saved ? JSON.parse(saved) : [];
}
