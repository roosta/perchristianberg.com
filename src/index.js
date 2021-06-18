import "./index.css"

import Splide from "@splidejs/splide";
import latestRelease from "../latest-release.json";

import { attachListeners } from "./shared.js";

const latestReleaseImg = document.querySelectorAll(".latest-release-img");
const pips = document.querySelectorAll(".pip");
const carouselAnnotation = document.getElementById("carousel-annotation");

const annotations = [
  "Vestibulum ut sem imperdiet, sollicitudin.",
  "Vivamus imperdiet scelerisque.",
  "Integer urna massa."
];

// Have to require in image due to content hashes not being passed from handlebars
// template strings, resulting in wrong url on compilation.
// This basically enables us to define a filename in the latestRelease config
function updateCover() {
  const url = require(`../img/${latestRelease.image.file}`);
  latestReleaseImg.forEach(img => {
    img.src = url;
  })
}

function updateAnnotation(index) {
  carouselAnnotation.innerHTML = annotations[index];
}

function main() {
  attachListeners();
  let splide = new Splide(".splide", {
    pagination: false,
    rewind: true,
  }).mount();

  splide.on("moved", () => {
    pips.forEach((p, i) => {
      if (i === splide.index) {
        p.classList.remove("bg-opacity-30");
      } else if (!p.classList.contains("bg-opacity-30")) {
        p.classList.add("bg-opacity-30");
      }
    })
    updateAnnotation(splide.index);
  })
  updateAnnotation(0);
  updateCover();
}

main();
