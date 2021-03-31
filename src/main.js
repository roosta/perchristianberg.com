import './style.css'
import './bg1.jpg'

function onMenuClick(e) {
  console.log("hello click");

}

function main() {
  const el = document.getElementById('menu-button');
  el.addEventListener('click', onMenuClick);
}

main();
