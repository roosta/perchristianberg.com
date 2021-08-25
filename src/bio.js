import './bio.css'
import images from "../images.json";
import Splide from '@splidejs/splide';
import { attachListeners, togglePips, updatePageIndicator } from "./shared.js";

const carouselAnnotation = document.getElementById("carousel-annotation");

const annotations = images.bio.map(item => item.annotation);

function updateAnnotation(index) {
  carouselAnnotation.innerHTML = annotations[index];
}

function main() {
  attachListeners();
  updatePageIndicator("bio");

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
