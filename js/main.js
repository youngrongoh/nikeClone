'use strict';

import setSearchMode from './search_mode.js';
import setAutoSlide from './auto_slide.js';
import Scrollbar from './scrollbar.js';
import Hamburger from './hamburger.js';
import setToggleOnTable from './toggle_table.js';
import setToggleList from './toggle_list.js';

setSearchMode();
setAutoSlide();
const slidelists = document.querySelectorAll('.slidelist');
Array.from(slidelists).map((slidelist) => new Scrollbar().set(slidelist));
new Hamburger();
setToggleOnTable();
const toggleLists = document.querySelectorAll('.lists__wrapper');
Array.from(toggleLists).map(setToggleList);
