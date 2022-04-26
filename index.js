const slides = document.querySelectorAll(".carousel_item");
const prevButton = document.querySelector("#carousel_button_prev");
const nextButton = document.querySelector("#carousel_button_next");
const totalSlides = slides.length;
let position = 0;

const updateSlide = () => {
  for (let slide of slides) {
    slide.classList.add("hidden");
  }

  slides[position].classList.remove("hidden");
};

const nextSlide = () => {
  if (position === totalSlides - 1) {
    position = 0;
  } else {
    position++;
  }

  updateSlide();
};

const prevSlide = () => {
  if (position === 0) {
    position = totalSlides - 1;
  } else {
    position--;
  }

  updateSlide();
};

nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);
