const images = [
  "../img/carte_eau_2020.png",
  "../img/carte_sanitaires.png"
];

let index = 0;
const imageElement = document.getElementById("image");

setInterval(() => {
  index = (index + 1) % images.length;
  imageElement.style.opacity = 0;

  setTimeout(() => {
    imageElement.src = images[index];
    imageElement.style.opacity = 1;
  }, 500);
}, 10000);

