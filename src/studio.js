import './studio.css'

import Splide from '@splidejs/splide';
import { attachListeners, togglePips } from "./shared.js";

const carouselAnnotation = document.getElementById("carousel-annotation");

const annotations = [
  "Vestibulum ut sem imperdiet, sollicitudin.",
  "Vivamus imperdiet scelerisque.",
  "Integer urna massa."
];

function updateAnnotation(index) {
  carouselAnnotation.innerHTML = annotations[index];
}


function main() {
  attachListeners();

  let splide = new Splide(".splide", {
    pagination: false,
    rewind: true,
  }).mount();

  togglePips(splide.index);
  splide.on("moved", () => {
    togglePips(splide.index);
    updateAnnotation(splide.index);
  })
  updateAnnotation(0);
}

main();
