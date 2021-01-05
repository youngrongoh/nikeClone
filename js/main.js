'use strict';

import setSearchMode from './search_mode.js';
import setAutoSlide from './auto_slide.js';
import Scrollbar from './scrollbar.js';
import Hamburger from './hamburger.js';

setSearchMode();
setAutoSlide();
const slidelists = document.querySelectorAll('.slidelist');
Array.from(slidelists).map((slidelist) => new Scrollbar().set(slidelist));
new Hamburger();
