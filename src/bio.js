import './bio.css'
import Splide from '@splidejs/splide';
import { attachListeners, togglePips, updatePageIndicator } from "./shared.js";

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
  })
}

main();
