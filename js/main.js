import setSearchMode from './search_mode.js';
import setAutoSlide from './auto_slide.js';
import Scrollbar from './scrollbar.js';

setSearchMode();
setAutoSlide();
const slidelists = document.querySelectorAll('.slidelist');
Array.from(slidelists).map((slidelist) => new Scrollbar().set(slidelist));
