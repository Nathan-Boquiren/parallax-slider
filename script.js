let cl = console.log;

const slideContainer = document.getElementById("slide-container");
const slides = document.querySelectorAll(".slide");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");

const imgLinks = [
  "https://wallpaperaccess.com/full/11803.jpg",
  "https://wallpapercave.com/wp/wp3614489.jpg",
  "https://wallpapercave.com/wp/wp3614511.jpg",
  "https://wallpapercrafter.com/desktop1/528048-Darth-Revan-Star-Wars-lightsaber-Revan-2K.jpg",
  "https://wallpaperaccess.com/full/5367423.jpg",
];

for (let i = 0; i < slides.length; i++) {
  slides[i].style.backgroundImage = `url(${imgLinks[i]})`;
}

// Button events
nextBtn.addEventListener("click", () => scroll(1));
prevBtn.addEventListener("click", () => scroll(-1));

function scroll(direction) {
  const slideWidth = slideContainer.offsetWidth;
  const currentSlideIndex = Math.round(slideContainer.scrollLeft / slideWidth);
  const nextSlide = slides[currentSlideIndex + direction];
  if (nextSlide) {
    nextSlide.classList.add(direction === 1 ? "slide-in-r" : "slide-in-l");
  }
  slideContainer.scrollLeft += slideWidth * direction;
  setTimeout(() => {
    slides[currentSlideIndex].classList.remove("slide-in-l", "slide-in-r");
  }, 1000);
}
