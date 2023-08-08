// Get the elements
const sliderContainer = document.querySelector(".slider-container");
const slider = sliderContainer.querySelector(".slider");
const iframes = slider.querySelectorAll("iframe");
const prevButton = sliderContainer.querySelector(".lft");
const nextButton = sliderContainer.querySelector(".rght");

// Initialize current slide index
let currentSlide = 0;

// Show the iframe at the given index
function showSlide(index) {
  iframes.forEach((iframe, idx) => {
    iframe.style.display = idx === index ? "block" : "none";
  });
  currentSlide = index;
}

// Event listeners for navigation buttons
prevButton.addEventListener("click", () => {
  if (currentSlide > 0) {
    showSlide(currentSlide - 1);
  }
});

nextButton.addEventListener("click", () => {
  if (currentSlide < iframes.length - 1) {
    showSlide(currentSlide + 1);
  }
});

// Initial slide
showSlide(currentSlide);
