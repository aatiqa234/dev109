// These are the images
const images = [
    "https://static.vecteezy.com/system/resources/thumbnails/045/132/933/small_2x/a-beautiful-picture-of-the-eiffel-tower-in-paris-the-capital-of-france-with-a-wonderful-background-in-wonderful-natural-colors-photo.jpg",
    "https://www.neh.gov/sites/default/files/2018-06/great_wall_of_china-mutianyu_4.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUbXISxNo1c7wKCm8JdPnKmjBlxjRDafG7AQ&s",
    "https://www.peru.travel/Contenido/Noticia/Imagen/en/2052/1.0/Principal/circuits_mapi_Desktop.jpg",
    "https://hips.hearstapps.com/hmg-prod/images/dramatic-storm-cloud-above-pyramids-giza-egypt-royalty-free-image-1662470381.jpg?crop=1xw:0.98468xh;center,top&resize=1200:*"
];
// These are the description for the images
const descriptions = [
    "Eiffel Tower in Paris",
    "The Great Wall of China",
    "The Colosseum in Rome",
    "Machu Picchu in Peru",
    "Pyramids of Giza in Egypt"
];
// Elements
let currentIndex = 0;
const slideshowContainer = document.querySelector(".slideshow-container");
const timerElement = document.getElementById("timer");

// It create  slides
images.forEach((src, index) => {
    const slideDiv = document.createElement("div");
    slideDiv.classList.add("slide");
    if (index === 0) slideDiv.classList.add("active"); 

    const img = document.createElement("img");
    img.src = src;
    img.alt = descriptions[index];

    const desc = document.createElement("p");
    desc.classList.add("description");
    desc.textContent = descriptions[index];

    slideDiv.appendChild(img);
    slideDiv.appendChild(desc);
    slideshowContainer.appendChild(slideDiv);
});

// Get slides after adding them to the DOM
const slides = document.querySelectorAll(".slide");

let slideInterval;
const intervalTime = 4000; // 4 seconds

// Function to update slides
function updateSlide() {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[currentIndex].classList.add("active");
}

// This function is for to go to the next image 
function nextImage() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide();
    resetTimer();
}

// This function is for to go the previous image       
function prevImage() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlide();
    resetTimer();
}

// This function is for reset to the timer 
function resetTimer() {
    clearInterval(slideInterval);
    timerElement.innerText = "4s";
    slideInterval = setInterval(nextImage, intervalTime);
}

// Add event listeners
document.getElementById("next").addEventListener("click", nextImage);
document.getElementById("prev").addEventListener("click", prevImage);

// This is for autochange for every 4 seconds 
slideInterval = setInterval(nextImage, intervalTime);

//This is for loading the first slide 
updateSlide();
