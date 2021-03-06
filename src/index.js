import "./index.css"

import Splide from "@splidejs/splide";

import images from "../images.json";
import { attachListeners, togglePips, updatePageIndicator } from "./shared.js";

function main() {
  updatePageIndicator("home");
  attachListeners();
  let splide = new Splide(".splide", {
    pagination: false,
    rewind: true,
    start: Math.floor(Math.random() * (images.index.length))
  }).mount()

  togglePips(splide.index);
  splide.on("moved", () => {
    togglePips(splide.index);
  })
}

main();
