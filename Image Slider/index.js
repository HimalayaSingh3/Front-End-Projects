// script.js
const images = [
    'images/slide1.jpg',
    'images/slide2.jpg',
    'images/slide3.jpg',
    'images/slide4.jpg',
    'images/slide5.jpg',
    'images/slide6.jpg',
    'images/slide7.jpg'
];

let currentIndex = 0;
const sliderImage = document.getElementById('slider1');

// Function to update the image source
function updateImage() {
    slider1.src = images[currentIndex];
}

document.getElementById('preImage').addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateImage();
});

document.getElementById('nextImage').addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateImage();
});

updateImage();
