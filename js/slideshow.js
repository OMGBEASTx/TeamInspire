let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // Hide all slides
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  } // Loop back to the first slide
  slides[slideIndex - 1].style.display = "block"; // Show the current slide
  setTimeout(showSlides, 5000); // Change slide every 5 seconds
}

function plusSlides(n) {
  slideIndex += n;
  if (slideIndex > document.getElementsByClassName("mySlides").length) {
    slideIndex = 1;
  } else if (slideIndex < 1) {
    slideIndex = document.getElementsByClassName("mySlides").length;
  }
  showSlidesManually(slideIndex);
}

function showSlidesManually(index) {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // Hide all slides
  }
  slides[index - 1].style.display = "block"; // Show the current slide
}
