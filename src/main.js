import "./style.css"

import Splide from '@splidejs/splide';
import latestRelease from '../latest-release.json';

const elements = {
  overlay:            document.getElementById("slide-overlay"),
  panel:              document.getElementById("slide-panel"),
  container:          document.getElementById("slide-container"),
  openBtn:            document.getElementById("slide-menu-btn"),
  closeBtn:           document.getElementById("slide-close-btn"),
  main:               document.getElementById("main"),
  collapseBtn:        document.getElementById("collapse-btn"),
  collapseMenu:       document.getElementById("collapse-menu"),
  submenu:            document.getElementById("submenu"),
  submenuContent:     document.getElementById("submenu-content"),
  submenuBtn:         document.getElementById("submenu-btn"),
  pips:               document.querySelectorAll(".pip"),
  latestReleaseImg:   document.querySelectorAll(".latest-release-img"),
  carouselAnnotation: document.getElementById("carousel-annotation"),
};

const annotations = [
  "Vestibulum ut sem imperdiet, sollicitudin.",
  "Vivamus imperdiet scelerisque.",
  "Integer urna massa."
];

function onMenuOpen(e, state) {

  elements.main.classList.toggle("overflow-hidden")
  elements.container.classList.toggle("invisible");
  elements.overlay.classList.replace("opacity-0", "opacity-100");
  elements.panel.classList.replace("translate-x-full", "translate-x-0");
  elements.closeBtn.classList.replace("opacity-0", "opacity-100");

}

function onMenuClose(e) {
  elements.overlay.classList.replace("opacity-100", "opacity-0");
  elements.panel.classList.replace("translate-x-0", "translate-x-full");
  elements.closeBtn.classList.replace("opacity-100", "opacity-0");
  elements.overlay.addEventListener("transitionend", function f() {
    elements.container.classList.toggle("invisible");
    elements.main.classList.toggle("overflow-hidden")
    this.removeEventListener("transitionend", f);
  })
}

function onCollapse(e) {
  elements.collapseMenu.classList.toggle("hidden");
  const svgs = document.querySelectorAll("#collapse-btn > svg");
  svgs.forEach(svg => svg.classList.toggle("hidden"));

}

function onMouseEnter(e, state) {
  elements.submenuContent.classList.remove("invisible");
  elements.submenuContent.classList.replace("opacity-0", "opacity-100");
  elements.submenuContent.classList.replace("scale-95", "scale-100");
  clearTimeout(state.timer);
}

function onMouseLeave(e, state) {
  state.timer = setTimeout((e) => {
    elements.submenuContent.classList.replace("opacity-100", "opacity-0");
    elements.submenuContent.classList.replace("scale-100", "scale-95");
    elements.submenuContent.addEventListener("transitionend", function f() {
      elements.submenuContent.classList.add("invisible");
      this.removeEventListener("transitionend", f);

    })

  }, 1000)
}

// Have to require in image due to content hashes not being passed from handlebars
// template strings, resulting in wrong url on compilation.
// This basically enables us to define a filename in the latestRelease config
function updateCover() {
  const url = require(`../img/${latestRelease.image.file}`);
  elements.latestReleaseImg.forEach(img => {
    img.src = url;
  })
}

function updateAnnotation(index) {
  elements.carouselAnnotation.innerHTML = annotations[index];
}

function main() {
  let state = {
    timer: undefined,
  };
  elements.closeBtn.addEventListener("click", onMenuClose);
  elements.openBtn.addEventListener("click", onMenuOpen);
  elements.overlay.addEventListener("click", onMenuClose);
  elements.collapseBtn.addEventListener("click", onCollapse);
  elements.submenu.addEventListener("mouseenter", (e) => onMouseEnter(e, state));
  elements.submenu.addEventListener("mouseleave", (e) => onMouseLeave(e, state));

  let splide = new Splide(".splide", {
    pagination: false,
    rewind: true,
  }).mount();

  splide.on("moved", () => {
    elements.pips.forEach((p, i) => {
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
