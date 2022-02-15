/* Selecting the carousel slide and assign it to a const variable
and selecting the images from the div */ 
const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

// Buttons 
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

// Monitoring which picture we are on through a counter 
let counter = 1;

// Selecting the width of the image to know how much we want to slide 
const size = carouselImages[0].clientWidth; 

// To start from the 1st image and not the last clone move one pic at a time
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// Button listeners 
nextBtn.addEventListener('click', () => {
    // To stop it from going out of the image container from clicking fast increment
    if (counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = "transform 0.6s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
    // To Stop it from going out of img container when clicking fast 
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.6s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

// We want the transition to end when it reaches the end and not keep om going
carouselSlide.addEventListener('transitionend', () => {
    if(carouselImages[counter].id === 'lastClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if(carouselImages[counter].id === 'firstClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});