import "./index.css"

import Splide from "@splidejs/splide";

import { attachListeners, togglePips, updatePageIndicator } from "./shared.js";

function main() {
  updatePageIndicator("home");
  attachListeners();
  let splide = new Splide(".splide", {
    pagination: false,
    rewind: true,
  }).mount();

  togglePips(splide.index);
  splide.on("moved", () => {
    togglePips(splide.index);
  })
}

main();
