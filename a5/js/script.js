// This function is to move next image 
    function nextImage() {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    }

    // This function is to move to previous image 
    function prevImage() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    }

    // This is the timer to change every seconds 
    function startTimer() {
      timer = setInterval(() => {
        nextImage();
      }, 4000); // Change image every 4 seconds
    }

    // It's stopping the timer 
    function resetTimer() {
      clearInterval(timer);
      startTimer();
    }

    // This is for clicking the previour or next button
    prevButton.addEventListener('click', () => {
      prevImage();
      resetTimer();
    });

    nextButton.addEventListener('click', () => {
      nextImage();
      resetTimer();
    });

    
