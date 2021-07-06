import './studio.css'

import Splide from '@splidejs/splide';
import { attachListeners, togglePips, updatePageIndicator } from "./shared.js";
import images from "../images.json";

const carouselAnnotation = document.getElementById("carousel-annotation");

const annotations = images.studio.map(item => item.annotation);

function updateAnnotation(index) {
  carouselAnnotation.innerHTML = annotations[index];
}


function main() {
  attachListeners();
  updatePageIndicator("studio");

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
