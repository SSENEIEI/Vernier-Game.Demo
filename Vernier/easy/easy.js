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
  
  
window.onload = function() {
  nextImage();
};


const images = [
  { url: "pictures/araimairuu.png", width: 220, height: 150,},
  { url: "pictures/lime.png", width: 220, height: 150 },
  { url: "pictures/pic2.png", width: 220, height: 150 },
  { url: "pictures/pic3.png", width: 220, height: 150 },
  { url: "pictures/tomatoe.png", width: 220, height: 150 }
];
function randomizeImage() {
  return images[Math.floor(Math.random() * images.length)];
}

function nextImage() {
  const imgElement = document.createElement("img");
  const randomImage = randomizeImage();
  imgElement.src = randomImage.url;
  imgElement.width = randomImage.width;
  imgElement.height = randomImage.height;

  const container = document.getElementById("imageContainer");
  container.innerHTML = ''; 
  container.appendChild(imgElement);
}
  