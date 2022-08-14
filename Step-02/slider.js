const imagesArray = [
  'OHR.HickmanBridge_ROW9566895207_1920x1080.jpg',
  'OHR.LongsPeak_ROW9098186381_1920x1080.jpg',
  'OHR.NoctilucentClouds_ROW9144099035_1920x1080.jpg',
  'OHR.SpiralHill_ROW7328923046_1920x1080.jpg',
];

let currentImg = 0;

function renderImage() {
  const imageURL = 'images/' + imagesArray[currentImg];
  document.getElementById('slider-image').src = imageURL;
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

document.getElementById('prev').addEventListener('click', prevImage);
document.getElementById('next').addEventListener('click', nextImage);
