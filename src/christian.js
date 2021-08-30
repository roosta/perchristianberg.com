import './christian.css'
import { attachListeners, updatePageIndicator, updateHeaderTitle } from "./shared.js";


function main() {
  attachListeners();
  updatePageIndicator("music", "christian");
  updateHeaderTitle("christian berg");
}

main();
