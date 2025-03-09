document.addEventListener("DOMContentLoaded", function () {
    // List of Dropdowns and button 
    var dotColorSelect = document.getElementById("dotColor");
    var dotSizeSelect = document.getElementById("dotSize");
    var clearButton = document.getElementById("clearButton");

    // Create a container for dots
    var dotContainer = document.createElement("div");
    document.body.appendChild(dotContainer);

  // This function to create a dot, selected color and size 
    function createDot(event) {
        // Clicks on dropdown and button 
        if (event.target === dotColorSelect || event.target === dotSizeSelect || event.target === clearButton) {
            return;
        }

        // Selected color or size 
        var dotSize = parseInt(dotSizeSelect.value, 10);
        var dotColor = dotColorSelect.value;

        // This is for dot element 
        var dot = document.createElement("div");
        dot.style.position = "absolute";
        dot.style.left = event.pageX + "px"; 
        dot.style.top = event.pageY + "px";  
        dot.style.width = dotSize + "px";
        dot.style.height = dotSize + "px";
        dot.style.backgroundColor = dotColor;
        dot.style.borderRadius = "50%"; // This is for making the dots round 
        dot.style.pointerEvents = "none"; 

        // When the user clicked at the position anywhwere 
        dotContainer.appendChild(dot);
    }

    // This is to clear the dots
    function clearDots() {
        dotContainer.innerHTML = ""; 
    }

    // Event listeners
    document.addEventListener("click", createDot);
    clearButton.addEventListener("click", clearDots);
});
