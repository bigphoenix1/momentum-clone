const body = document.querySelector("body");

const IMG_NUMBER = 5;

function paintImage(IMG_NUMBER) {
  const image = new Image();
  image.src = `img/${IMG_NUMBER}.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);
}

function genRandom() {
  const number = Math.ceil(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
