import "./index.css"

import Splide from "@splidejs/splide";
import latestRelease from "../latest-release.json";
import images from "../images.json";

import { attachListeners, togglePips } from "./shared.js";

const latestReleaseImg = document.querySelectorAll(".latest-release-img");
const pips = document.querySelectorAll(".pip");
const carouselAnnotation = document.getElementById("carousel-annotation");

const annotations = images.index.map(item => item.annotation);

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
