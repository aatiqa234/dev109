// List of image URLs
const images = [
    "https://static.vecteezy.com/system/resources/thumbnails/045/132/933/small_2x/a-beautiful-picture-of-the-eiffel-tower-in-paris-the-capital-of-france-with-a-wonderful-background-in-wonderful-natural-colors-photo.jpg",
    "https://www.neh.gov/sites/default/files/2018-06/great_wall_of_china-mutianyu_4.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUbXISxNo1c7wKCm8JdPnKmjBlxjRDafG7AQ&s",
    "https://www.peru.travel/Contenido/Noticia/Imagen/en/2052/1.0/Principal/circuits_mapi_Desktop.jpg",
    "https://hips.hearstapps.com/hmg-prod/images/dramatic-storm-cloud-above-pyramids-giza-egypt-royalty-free-image-1662470381.jpg?crop=1xw:0.98468xh;center,top&resize=1200:*"
];

// List of descriptions for each image
const descriptions = [
    "Eiffel Tower in Paris",
    "The Great Wall of China",
    "The Colosseum in Rome",
    "Machu Picchu in Peru",
    "Pyramids of Giza in Egypt"
];

// Get elements from the HTML
// This keeps track of which image is showing
let currentIndex = 0; 
// The area where images appear
const slideshowContainer = document.querySelector(".slideshow-container"); 
// Display the timer 
const timerElement = document.getElementById("timer"); 
// The autoNextCheckbox featuring the auto-next
const autoNextCheckbox = document.getElementById("auto-next"); 
//  This will be auto-switiching by defaul
let isAutoNextEnabled = true; 

// It create slides and add them to the page 
images.forEach((src, index) => {
  // Create a <div> for each slide
    const slideDiv = document.createElement("div"); 
  // Give it the class 'slide'
    slideDiv.classList.add("slide"); 
  // Show the first image visible 
    if (index === 0) slideDiv.classList.add("active"); 
// Create an image element
    const img = document.createElement("img"); 
  // Set the image source
    img.src = src; 
  // Set the image description
    img.alt = descriptions[index]; 
// Create a paragraph for description to describe an image 
    const desc = document.createElement("p"); 
    desc.classList.add("description");
  // This is for add the description text
    desc.textContent = descriptions[index]; 
// Add all image to slide
    slideDiv.appendChild(img); 
  // Add all description to slide 
    slideDiv.appendChild(desc); 
  // Add slide to the container
    slideshowContainer.appendChild(slideDiv); 
});


// Create all the slide elements after add them to the page 
const slides = document.querySelectorAll(".slide");
// This is checking the auto-switching images 
let slideInterval; 
// This is for set the time for 4 seconds until to go next image 
const intervalTime = 4000; 

// Function for showing an image 
function updateSlide() {
  // This is for hiding all slides 
    slides.forEach(slide => slide.classList.remove("active")); 
  // This is for showing only current slide 
    slides[currentIndex].classList.add("active"); 
}

// Function for next image 
function nextImage() {
  // This is for moving for the next image
    currentIndex = (currentIndex + 1) % slides.length;
  // This is for updating the display image 
    updateSlide(); 
  // This is for restart the time
    resetTimer(); 
}

// Function for previous image
function prevImage() {
  // This is for moving to previous image
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;  
  // This is for updating the display image 
    updateSlide(); 
  // This is for restart the time
    resetTimer(); 
}

// Function for auto-switching timer
function resetTimer() {
  // This is for stoping the current timer
    clearInterval(slideInterval); 
  // When the auto-text is on
    if (isAutoNextEnabled) { 
      // Displaying the restart timer
        timerElement.innerText = "4s"; 
      // Start auto-switching again
        slideInterval = setInterval(nextImage, intervalTime); 
    }
}

// Add "Next" and "Previous" buttons
document.getElementById("next").addEventListener("click", nextImage);
document.getElementById("prev").addEventListener("click", prevImage);

// This is for image to move forward or backward 
slideshowContainer.addEventListener("click", (event) => {
  // The width of the slideshow area 
    const containerWidth = slideshowContainer.offsetWidth; 
  // This is for clicking the position 
    const clickX = event.offsetX; 

    if (clickX < containerWidth / 2) {
      // When click on the left half go backward 
        prevImage(); 
    } else {
      // When click on the right half go forward 
        nextImage(); 
    }
});

// This is for checkbox changes
autoNextCheckbox.addEventListener("change", (event) => {
  // This is for auto-next
    isAutoNextEnabled = event.target.checked;
  // This is for restarting the timer
    resetTimer(); 

// This is when page load start autoshowing 
slideInterval = setInterval(nextImage, intervalTime);
  // Should be load first image 
updateSlide(); 
