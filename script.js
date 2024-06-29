const img = document.getElementById("c");

function shakeImage() {
  const shakeAmount = 10; // Amount of pixels to shake the image
  const shakeSpeed = 100; // Speed of the shake effect in milliseconds

  let shakeX = 0;
  let shakeY = 0;

  const shakeInterval = setInterval(() => {
    shakeX = (shakeX + 1) % shakeAmount;
    shakeY = (shakeY + 1) % shakeAmount;
    img.style.transform = `translate(${shakeX}px, ${shakeY}px)`;
  }, shakeSpeed);

  // Clear the interval after 500 milliseconds
  setTimeout(() => {
    clearInterval(interval);
    img.style.transform = "";
  }, 500);
}

img.addEventListener("mouseover", shakeImage);