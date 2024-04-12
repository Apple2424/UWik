document.addEventListener("DOMContentLoaded", function() {
    // Get the loading text element
    const loadingText = document.getElementById("loading-text");
    // Define the text and dots
    const text = "Loading";
    const dots = "...";
    // Define the interval between each letter appearing (in milliseconds)
    const interval = 200;
    
    // Function to gradually reveal the text letter by letter
    function revealText(index) {
        if (index <= text.length) {
            loadingText.textContent = text.slice(0, index) + dots;
            setTimeout(() => {
                revealText(index + 1);
            }, interval);
        } else {
            // Once all letters are revealed, start the "bopping" animation
            bopDots(0);
        }
    }
    
    // Function to animate the dots "bopping"
    function bopDots(index) {
        if (index < dots.length) {
            const newText = text + dots.slice(0, index + 1);
            loadingText.textContent = newText;
            setTimeout(() => {
                bopDots(index + 1);
            }, interval);
        } else {
            // Once all dots have been "bopped", reset the animation
            setTimeout(() => {
                revealText(text.length + 1);
            }, interval * 2);
        }
    }
    
    // Start the text reveal animation
    revealText(1);
});
