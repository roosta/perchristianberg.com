import "./style.css"
import "./bg1.jpg"

const elements = {
  overlay:     document.getElementById("slide-overlay"),
  panel:       document.getElementById("slide-panel"),
  container:   document.getElementById("slide-container"),
  openBtn:     document.getElementById("slide-menu-btn"),
  closeBtn:    document.getElementById("slide-close-btn"),
  main:        document.getElementById("main"),
  collapseBtn: document.getElementById("collapse-btn"),
  collapseMenu: document.getElementById("collapse-menu"),
};

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

function main() {
  elements.closeBtn.addEventListener("click", onMenuClose);
  elements.openBtn.addEventListener("click", onMenuOpen);
  elements.overlay.addEventListener("click", onMenuClose);
  elements.collapseBtn.addEventListener("click", onCollapse);
}

main();
