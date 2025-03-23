// List of image URLs
var images = [
    "https://static.vecteezy.com/system/resources/thumbnails/045/132/933/small_2x/a-beautiful-picture-of-the-eiffel-tower-in-paris-the-capital-of-france-with-a-wonderful-background-in-wonderful-natural-colors-photo.jpg",
    "https://www.neh.gov/sites/default/files/2018-06/great_wall_of_china-mutianyu_4.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUbXISxNo1c7wKCm8JdPnKmjBlxjRDafG7AQ&s",
    "https://www.peru.travel/Contenido/Noticia/Imagen/en/2052/1.0/Principal/circuits_mapi_Desktop.jpg",
    "https://hips.hearstapps.com/hmg-prod/images/dramatic-storm-cloud-above-pyramids-giza-egypt-royalty-free-image-1662470381.jpg?crop=1xw:0.98468xh;center,top&resize=1200:*"
];

// List of descriptions for each image
var descriptions = [
    "The Eiffel Tower was built in 1889 for a world's fair in Paris. At first, people didn’t like it, but now it is one of the most famous buildings in the world to explore",
    "The Great Wall of China was built over many years ago to protect china. It is more than 13,000 miles long",
    "The Colosseum in Rome is a big, old stadium where people watched fights. It was built almost 2,000 years ago",
    "Machu Picchu is an old city built by the Inca people in Peru. It was hidden for many years before people found it again",
    "The Pyramids in Egypt were built a long time ago. They were made as big tombs as for the important people",
];

// Get elements from the HTML
// This keeps track of which image is showing
var currentIndex = 0; 
// The area where images appear
var slideshowContainer = document.querySelector(".slideshow-container");  
// The autoNextCheckbox and the toggle-auto-run featuring the auto-next
var autoNextCheckbox = document.getElementById("autoRunCheckbox"); 
var toggleAutoRunButton = document.getElementById("toggleAutoRun");
var isAutoNextEnabled = false; 
var slideInterval;
var intervalTime = 4000;
var countdown = 4;
var countdownInterval;

// Creating countdown display 
var countdownDisplay = document.createElement("div");
countdownDisplay.id = "countdown-timer";
countdownDisplay.style.fontSize = "18px"; 
countdownDisplay.style.fontWeight = "bold";
countdownDisplay.style.marginTop = "10px"; 
document.body.appendChild(countdownDisplay);

// This function is for updating countdown 
function updateCountdown() {
    countdownDisplay.textContent = 'Next image'; 
} 

// This function is for reset to countdown 
function resetCountdown
    clearInterval(countdownInterval); 
    countdown = 4;
    updateCountdown();
    startCountdown();
}

// This function is for starting the countdown 
function startCountdown (){
    countdownInterval = setInterval(() => { 
        countdown--; 
        updateCountdown(); 
        if (countdown === 0){
            nextImage();
        }
    },1000);
}
                                    


// It create slides and add them to the page 
images.forEach(function(src, index)  {
  // Create a <div> for each slide
    var slideDiv = document.createElement("div"); 
  // Give it the class 'slide'
    slideDiv.classList.add("slide"); 
  // Show the first image visible 
    if (index === 0) slideDiv.classList.add("active"); 
// Create an image element
    var img = document.createElement("img"); 
  // Set the image source
    img.src = src; 
  // Set the image description
    img.alt = descriptions[index]; 
// Create a paragraph for description to describe an image 
    var desc = document.createElement("p"); 
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
var slides = document.querySelectorAll(".slide");

// Function for showing an image 
function updateSlide() {
   slides.forEach(function (slide) {
     // This is for hiding the images
        slide.classList.remove("active");
    });
  // This is for showing only current slide 
    slides[currentIndex].classList.add("active"); 
}

// Function for next image 
function nextImage() {
  // This is for moving for the next image
    currentIndex = (currentIndex + 1) % slides.length;
  // This is for updating the display image 
    updateSlide(); 
}

// Function for previous image
function prevImage() {
  // This is for moving to previous image
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;  
  // This is for updating the display image 
    updateSlide(); 
  
}

// This function is for when the slide is start or stop the auto slide
function toggleAutoNext() {
  clearInterval(slideInterval);
  // When the auto-text is on
    if (isAutoNextEnabled) { 
      // Start auto-switching again
        slideInterval = setInterval(nextImage, intervalTime); 
    
   } else {
        clearInterval(slideInterval);
    }
}


// Add "Next" and "Previous" buttons
document.getElementById("next").addEventListener("click", nextImage);
document.getElementById("prev").addEventListener("click", prevImage);



// This is for checkbox changes
autoNextCheckbox.addEventListener("change", function (event)  {
  // This is for auto-ncheck box
    isAutoNextEnabled = event.target.checked;
    toggleAutoNext();
});
// This is for the button click of toggel-run
toggleAutoRunButton.addEventListener("click", function () {
        autoNextCheckbox.checked = !autoNextCheckbox.checked;
        isAutoNextEnabled = autoNextCheckbox.checked;
        toggleAutoNext();
});

// Update Slide
updateSlide(); 
