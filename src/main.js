import "./style.css"

const elements = {
  overlay:        document.getElementById("slide-overlay"),
  panel:          document.getElementById("slide-panel"),
  container:      document.getElementById("slide-container"),
  openBtn:        document.getElementById("slide-menu-btn"),
  closeBtn:       document.getElementById("slide-close-btn"),
  main:           document.getElementById("main"),
  collapseBtn:    document.getElementById("collapse-btn"),
  collapseMenu:   document.getElementById("collapse-menu"),
  submenu:        document.getElementById("submenu"),
  submenuContent: document.getElementById("submenu-content"),
  submenuBtn:     document.getElementById("submenu-btn"),
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
}

main();
