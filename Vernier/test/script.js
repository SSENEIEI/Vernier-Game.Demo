const images = ["pictures/araimairuu.png", "pictures/lime.png", "pictures/pic2.png", "pictures/pic3.png", "pictures/tomatoe.png"];

let currentImageIndex = -1;

function randomizeImage() {
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * images.length);
  } while (newIndex === currentImageIndex);
  currentImageIndex = newIndex;
  return images[currentImageIndex];
}
function nextImage() {
  const imgElement = document.getElementById("displayedImage");
  imgElement.src = randomizeImage();
}
