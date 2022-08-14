// Array of objects
const imagesArray = [
  {
    imageURL: 'OHR.HickmanBridge_ROW9566895207_1920x1080.jpg',
    title: 'Image 1 Title',
  },
  {
    imageURL: 'OHR.LongsPeak_ROW9098186381_1920x1080.jpg',
    title: 'Image 2 Title',
  },
  {
    imageURL: 'OHR.NoctilucentClouds_ROW9144099035_1920x1080.jpg',
    title: 'Image 3 Title',
  },
  {
    imageURL: 'OHR.SpiralHill_ROW7328923046_1920x1080.jpg',
    title: 'Image 4 Title',
  },
];

let currentImg = 0;

function renderImage() {
  const imageObject = imagesArray[currentImg];
  const imageURL = 'images/' + imageObject.imageURL;
  document.getElementById('slider-image').src = imageURL;
  document.getElementById('image-title').innerHTML = imageObject.title;
}

function prevImage() {
  currentImg--;
  if (currentImg < 0) {
    currentImg = imagesArray.length - 1;
  }
  renderImage();
}

function nextImage() {
  currentImg++;
  if (currentImg > (imagesArray.length - 1)) {
    currentImg = 0
  }
  renderImage();
}

let interval = null;

// This function automatically runs the slideshow
function autoSlideShow() {
  if (interval != null){
    return;
  }
  interval = setInterval(function () {
    nextImage()
  }, 1000)
}

// This function stops the slideshow
function stopSlideShow() {
  clearInterval(interval);
  interval = null;
}

document.getElementById('prev').addEventListener('click', prevImage);
document.getElementById('next').addEventListener('click', nextImage);
document.getElementById('auto-run').addEventListener('click', autoSlideShow);
document.getElementById('stop-run').addEventListener('click', stopSlideShow);
document.getElementById('slider-image').addEventListener('mouseenter', stopSlideShow);
document.getElementById('slider-image').addEventListener('mouseleave', autoSlideShow);
