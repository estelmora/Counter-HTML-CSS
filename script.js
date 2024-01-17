document.addEventListener('DOMContentLoaded', function () {
    // Get the necessary HTML elements
    const counterDisplay = document.getElementById('counter-display');
    const incrementBtn = document.getElementById('increment-btn');
    const decrementBtn = document.getElementById('decrement-btn');
    const resetBtn = document.getElementById('reset-btn');

    let counterValue = 0;

    // Event listeners for buttons
    incrementBtn.addEventListener('click', function () {
        counterValue++;
        updateCounterDisplay();
    });

    decrementBtn.addEventListener('click', function () {
        if (counterValue > 0) {
            counterValue--;
            updateCounterDisplay();
        }
    });

    resetBtn.addEventListener('click', function () {
        counterValue = 0;
        updateCounterDisplay();
    });

    // Function to update the counter display
    function updateCounterDisplay() {
        counterDisplay.textContent = counterValue;
    }
});