// const vernierScale = document.querySelector('.vernier-vernier-scale');
// const mainScaleUnit = 0.12195122; 
// let isMoving = false;
// let currentPosition = 0;
// let direction = 1;
// let speed = 1;
// function startMoving() {
//   isMoving = true;
//   requestAnimationFrame(moveVernierScale);
// }
// function stopMoving() {
//   isMoving = false;
// }
// function moveVernierScale() {
//   if (isMoving) {
//     if (currentPosition >= 820 && direction === 1) {
//       currentPosition += speed;
//       direction = -1;
//       // stopMoving()
//     } else if (currentPosition <= 0 && direction === -1) {
//       currentPosition -= speed;
//       direction = 1;
//       // stopMoving()
//     }

//     if (direction === 1) {
//       currentPosition += speed;
//     } else {
//       currentPosition -= speed;
//       // if (currentPosition <= speed) {
//       //   speed -= 0.01;
//       // }
//     }
//     vernierScale.style.left = `${currentPosition}px`;
//     vernierPosition.innerHTML = ((currentPosition * mainScaleUnit)).toFixed(2);
//     // vernierPosition.innerHTML = (currentPosition*0.12195122).toFixed(2) อยากใช้ก็ใช้ได้
//     requestAnimationFrame(moveVernierScale);
//   }
// }
// startStopButton.addEventListener('click', () => {
//   if (!isMoving) {
//     startMoving();
//   } else {
//     stopMoving();
//   }
// });

function isMobile() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  return width <= 480;
}

if (isMobile()) {


  const vernierScale = document.querySelector('.vernier-vernier-scale');
  const mainScaleUnit = 0.3944773176;
  let isMoving = false;
  let currentPosition = 352;
  let direction = 1;
  let speed = 0.5;
  let currentScale = 352;
  function startMoving() {
    isMoving = true;
    requestAnimationFrame(moveVernierScale);
  }
  function stopMoving() {
    isMoving = false;
  }
  function moveVernierScale() {
    if (isMoving) {
      if (currentPosition >= 605.5 && direction === 1) {
        currentPosition += speed;
        direction = -1;
        // stopMoving()
      } else if (currentPosition <= 352 && direction === -1) {
        currentPosition -= speed;
        direction = 1;
        stopMoving()
      }
  
      if (direction === 1) {
        currentPosition += speed;
      } else {
        currentPosition -= speed;
        // if (currentPosition <= speed) {
        //   speed -= 0.01;
        // }
      }
      vernierScale.style.left = `${currentPosition}px`;
      vernierPosition.innerHTML = ((currentPosition - currentScale) * mainScaleUnit).toFixed(2);
      // vernierPosition.innerHTML = (currentPosition*0.12195122).toFixed(2) อยากใช้ก็ใช้ได้
      requestAnimationFrame(moveVernierScale);
    }
  }
  startStopButton.addEventListener('click', () => {
    if (!isMoving) {
      startMoving();
    } else {
      stopMoving();
    }
  });
} 



/////////////////////////////////////////////////คอม
else {
const vernierScale = document.querySelector('.vernier-vernier-scale');
const mainScaleUnit = 0.12195122; 
let isMoving = false;
let currentPosition = 0;
let direction = 1;
let speed = 1;
function startMoving() {
  isMoving = true;
  requestAnimationFrame(moveVernierScale);
}
function stopMoving() {
  isMoving = false;
}
function moveVernierScale() {
  if (isMoving) {
    if (currentPosition >= 820 && direction === 1) {
      currentPosition += speed;
      direction = -1;
      // stopMoving()
    } else if (currentPosition <= 0 && direction === -1) {
      currentPosition -= speed;
      direction = 1;
      // stopMoving()
    }

    if (direction === 1) {
      currentPosition += speed;
    } else {
      currentPosition -= speed;
      // if (currentPosition <= speed) {
      //   speed -= 0.01;
      // }
    }
    vernierScale.style.left = `${currentPosition}px`;
    vernierPosition.innerHTML = ((currentPosition * mainScaleUnit)).toFixed(2);
    // vernierPosition.innerHTML = (currentPosition*0.12195122).toFixed(2) อยากใช้ก็ใช้ได้
    requestAnimationFrame(moveVernierScale);
  }
}
startStopButton.addEventListener('click', () => {
  if (!isMoving) {
    startMoving();
  } else {
    stopMoving();
  }
});

}


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
