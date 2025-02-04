let state = {
  timer: undefined,
};

export const elements = {
  overlay:         document.getElementById("slide-overlay"),
  panel:           document.getElementById("slide-panel"),
  container:       document.getElementById("slide-container"),
  openBtn:         document.getElementById("slide-menu-btn"),
  closeBtn:        document.getElementById("slide-close-btn"),
  main:            document.getElementById("main"),
  collapseBtn:     document.getElementById("collapse-btn"),
  collapseMenu:    document.getElementById("collapse-menu"),
  navMusic:        document.getElementById("nav-music"),
  navMusicContent: document.getElementById("nav-music-content"),
  navMusicBtn:     document.getElementById("nav-music-btn"),
  pips:            document.querySelectorAll(".pip"),
  // navItems:        document.querySelectorAll(".nav-item"),
};


function onMenuOpen() {
  elements.main.classList.toggle("overflow-hidden")
  elements.container.classList.toggle("invisible");
  elements.overlay.classList.replace("opacity-0", "opacity-100");
  elements.panel.classList.replace("translate-x-full", "translate-x-0");
  elements.closeBtn.classList.replace("opacity-0", "opacity-100");

}

function onMenuClose() {
  elements.overlay.classList.replace("opacity-100", "opacity-0");
  elements.panel.classList.replace("translate-x-0", "translate-x-full");
  elements.closeBtn.classList.replace("opacity-100", "opacity-0");
  elements.overlay.addEventListener("transitionend", function f() {
    elements.container.classList.toggle("invisible");
    elements.main.classList.toggle("overflow-hidden")
    this.removeEventListener("transitionend", f);
  })
}

function onCollapse() {
  elements.collapseMenu.classList.toggle("hidden");
  const svgs = document.querySelectorAll("#collapse-btn > svg");
  svgs.forEach(svg => svg.classList.toggle("hidden"));

}

function onMouseEnter(e, state) {
  elements.navMusicContent.classList.remove("invisible");
  elements.navMusicContent.classList.replace("opacity-0", "opacity-100");
  elements.navMusicContent.classList.replace("scale-95", "scale-100");
  clearTimeout(state.timer);
}

function onMouseLeave(e, state) {
  state.timer = setTimeout(() => {
    elements.navMusicContent.classList.replace("opacity-100", "opacity-0");
    elements.navMusicContent.classList.replace("scale-100", "scale-95");
    elements.navMusicContent.addEventListener("transitionend", function f() {
      elements.navMusicContent.classList.add("invisible");
      this.removeEventListener("transitionend", f);

    })

  }, 1000)
}

export function updatePageIndicator(page, subpage) {
  const navEl = document.getElementById(`nav-${page}`);
  const menuEl = document.getElementById(`menu-${page}`)
  if (subpage) {
    const navSub = document.getElementById(`nav-music-${subpage}`);
    const menuSub = document.getElementById(`menu-music-${subpage}`);
    navSub.classList.add("bg-gray-200");
    menuSub.classList.add("bg-white/10")
  }
  if (menuEl) {
    menuEl.classList.add("bg-white/10")
  }
  navEl.classList.replace("text-white/50", "text-white/100");
}

export function updateHeaderTitle(title) {
  const el = document.getElementById("header-title");
  el.innerHTML = title
}

export function attachListeners() {
  elements.closeBtn.addEventListener("click", onMenuClose);
  elements.openBtn.addEventListener("click", onMenuOpen);
  elements.overlay.addEventListener("click", onMenuClose);
  elements.collapseBtn.addEventListener("click", onCollapse);
  elements.navMusic.addEventListener("mouseenter", (e) => onMouseEnter(e, state));
  elements.navMusic.addEventListener("mouseleave", (e) => onMouseLeave(e, state));
}

export function togglePips(splideIndex) {
  elements.pips.forEach((p, i) => {
    if (i === splideIndex) {
      p.classList.remove("bg-opacity-30");
    } else if (!p.classList.contains("bg-opacity-30")) {
      p.classList.add("bg-opacity-30");
    }
  })
}

