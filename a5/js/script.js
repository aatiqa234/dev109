const slides = document.querySelectorAll(".slide"); // Select all slides
const prevButton = document.getElementById("prev"); // Previous button
const nextButton = document.getElementById("next"); // Next button
const timerDisplay = document.getElementById("timer"); // Timer display

let currentSlide = 0;
let intervalTime = 4000; // 4 seconds per slide
let slideInterval;

// Function to show a specific slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) slide.classList.add("active");
    });
}

// Function to show the next slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
    resetTimer();
}

// Function to show the previous slide
function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
    resetTimer();
}

// Function to update and restart the timer
function resetTimer() {
    clearInterval(slideInterval);
    timerDisplay.innerText = "4s";
    slideInterval = setInterval(nextSlide, intervalTime);
}

// Event Listeners for buttons
prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);

// Auto-switch slides every 4 seconds
slideInterval = setInterval(nextSlide, intervalTime);
