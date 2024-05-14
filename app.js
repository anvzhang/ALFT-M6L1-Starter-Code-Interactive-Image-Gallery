// Array of image sources and titles
let images = [
  { src: 'https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg', title: 'Image 1', description: 'This is the description for Image 1.' },
  { src: 'img/image2.jpg', title: 'Image 2', description: 'This is the description for Image 2.' },
  // Add more image objects here
];

// DOM elements
let galleryContainer = document.querySelector('.gallery-container');
let imageViewer = document.querySelector('.image-viewer');
let viewerImage = document.querySelector('.viewer-image');
let imageInfo = document.querySelector('.image-info');
let prevBtn = document.querySelector('.prev-btn');
let nextBtn = document.querySelector('.next-btn');
let closeBtn = document.querySelector('.close-btn');

// Index of the currently displayed image
let currentIndex = 0;
let previousIndex = currentIndex;

// Render thumbnail images
function renderThumbnails() {
  galleryContainer.innerHTML = ''; // Clear the gallery container
  images.forEach((image, index) => {
    let thumbnail = document.createElement('img');
    thumbnail.src = image.src;
    thumbnail.alt = image.title;
    thumbnail.classList.add('thumbnail');
    thumbnail.addEventListener('click', () => openImageViewer(index));
    galleryContainer.appendChild(thumbnail);
  });
}

// Open the image viewer
function openImageViewer(index) {
  currentIndex = index;
  viewerImage.src = images[currentIndex].src;
  imageInfo.textContent = `${images[currentIndex].title} - ${images[currentIndex].description}`;
  imageViewer.classList.remove('hidden');
}

// Navigate to the previous image
function prevImage() {
  previousIndex = currentIndex;
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImageViewer();
}

// Navigate to the next image
function nextImage() {
  previousIndex = currentIndex;
  currentIndex = (currentIndex + 1) % images.length;
  updateImageViewer();
}

// Update the image viewer with the current image
function updateImageViewer() {
  viewerImage.src = images[currentIndex].src;
  imageInfo.textContent = `${images[currentIndex].title} - ${images[currentIndex].description}`;
}

// Close the image viewer
function closeImageViewer() {
  imageViewer.classList.add('hidden');
}

// Add event listeners
prevBtn.addEventListener('click', prevImage);
nextBtn.addEventListener('click', nextImage);
closeBtn.addEventListener('click', closeImageViewer);
document.addEventListener('keydown', event => {
  if (event.code === "ArrowLeft") {
    prevImage();
  } else if (event.code === "ArrowRight") {
    nextImage();
  }
})

// Render the initial thumbnails
renderThumbnails();