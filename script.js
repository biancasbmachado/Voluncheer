const track = document.getElementById("sliderTrack");
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
let currentIndex = 0;
setInterval(() => {
currentIndex = (currentIndex + 1) % totalSlides;
track.style.transform = `translateX(-${currentIndex * 100}vw)`;
}, 6000);