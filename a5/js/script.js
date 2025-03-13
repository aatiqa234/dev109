const images = [
    "https://static.vecteezy.com/system/resources/thumbnails/045/132/933/small_2x/a-beautiful-picture-of-the-eiffel-tower-in-paris-the-capital-of-france-with-a-wonderful-background-in-wonderful-natural-colors-photo.jpg",
    "https://www.neh.gov/sites/default/files/2018-06/great_wall_of_china-mutianyu_4.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUbXISxNo1c7wKCm8JdPnKmjBlxjRDafG7AQ&s",
    "https://www.peru.travel/Contenido/Noticia/Imagen/en/2052/1.0/Principal/circuits_mapi_Desktop.jpg",
    "https://hips.hearstapps.com/hmg-prod/images/dramatic-storm-cloud-above-pyramids-giza-egypt-royalty-free-image-1662470381.jpg?crop=1xw:0.98468xh;center,top&resize=1200:*"
];

const descriptions = [
    "Eiffel Tower in Paris",
    "The Great Wall of China",
    "The Colosseum in Rome",
    "Machu Picchu in Peru",
    "Pyramids of Giza in Egypt"
];

let currentIndex = 0;

// Select elements
const imageElement = document.getElementById("slideshow");
const descriptionElement = document.getElementById("description");
const timerElement = document.getElementById("timer");

let slideInterval;
const intervalTime = 4000; // 4 seconds

// Function to change the image
function updateImage() {
    imageElement.src = images[currentIndex];
    descriptionElement.textContent = descriptions[currentIndex];
}

// Function to go to the next image
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
    resetTimer();
}

// Function to go to the previous image
function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
    resetTimer();
}

// Function to reset the timer
function resetTimer() {
    clearInterval(slideInterval);
    timerElement.innerText = "4s";
    slideInterval = setInterval(nextImage, intervalTime);
}

// Add event listeners
document.getElementById("next").addEventListener("click", nextImage);
document.getElementById("prev").addEventListener("click", prevImage);

// Auto-change every 4 seconds
slideInterval = setInterval(nextImage, intervalTime);

// Load the first image
updateImage();
