let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("fade"); // Remove fade class to reset
        slides[i].classList.remove("fade-out"); // Remove fade-out class if present
        slides[i].style.display = "none";  
    }

    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0; // Reset to first image
    }    

    // Fade out the previous slide
    if (slideIndex > 0) {
        slides[slideIndex - 1].classList.add("fade-out"); // Fade out the previous slide
    } else {
        slides[slides.length - 1].classList.add("fade-out"); // Fade out the last slide if it's the first loop
    }
    
    // Show the current slide with fade in
    slides[slideIndex].style.display = "block";  
    slides[slideIndex].classList.add("fade"); // Add fade class

    setTimeout(showSlides, 4000); // Change image every 3 seconds
}