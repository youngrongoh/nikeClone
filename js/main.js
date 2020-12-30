function getDraggerWidth(barWidth, wrapperWidth, listWidth) {
  return barWidth * (wrapperWidth / listWidth);
}

function setDraggerMoving(
  dragger,
  slideList,
  barWidth,
  draggerWidth,
  listWidth,
  wrapperWidth,
  leftBtn,
  rightBtn
) {
  let dragable = false;
  let coordX = 0;
  let requestFrame = false;
  let prevX = 0;
  let prevListX = 0;

  const remainWidth = barWidth - draggerWidth;
  const remainWidthOfList = listWidth - wrapperWidth + 16 + 48;

  dragger.addEventListener('mousedown', (e) => {
    dragable = true;
    coordX = e.clientX;
  });
  window.addEventListener('mousemove', (e) => {
    e.preventDefault();
    if (dragable && !requestFrame) {
      requestFrame = true;

      requestAnimationFrame(() => {
        const newCoordX = e.clientX;
        const amountOfChange = newCoordX - coordX;
        const amountOfChangeOnList =
          (amountOfChange / remainWidth) * (remainWidthOfList + 32);

        const scrollX = prevX + amountOfChange;
        const listX = prevListX + amountOfChangeOnList;

        if (scrollX > 0 && scrollX < remainWidth) {
          dragger.style.transform = `translateX(${scrollX}px)`;
          slideList.style.transform = `translateX(${-listX}px)`;
          prevX = scrollX;
          prevListX = listX;
        } else if (scrollX <= 0) {
          dragger.style.transform = `translateX(0px)`;
          slideList.style.transform = `translateX(0px)`;
          prevX = 0;
          prevListX = 0;
        } else if (scrollX >= remainWidth) {
          dragger.style.transform = `translateX(${remainWidth}px)`;
          slideList.style.transform = `translateX(${-(
            remainWidthOfList + 32
          )}px)`;
          prevX = remainWidth;
          prevListX = remainWidthOfList + 32;
        }
        coordX = newCoordX;
        requestFrame = false;
      });
    }
  });
  window.addEventListener('mouseup', (e) => {
    if (dragable) {
      dragable = false;
    }
  });

  const steps = Array.from(slideList.children).map((item, i) => {
    return { id: i, offsetX: item.offsetLeft - 8 };
  });

  rightBtn.addEventListener('click', () => {
    if (prevListX < remainWidthOfList) {
      const newSteps = steps.map((step) => {
        return { ...step, gap: Math.abs(step.offsetX - prevListX) };
      });
      const nearest = newSteps.sort((a, b) => a.gap - b.gap)[0].id;
      if (nearest <= steps.length - 4) {
        const targetStep = steps[nearest + 1].offsetX;
        const scrollX = (targetStep / remainWidthOfList) * remainWidth;
        slideList.style.transform = `translateX(${-targetStep}px)`;
        dragger.style.transform = `translateX(${scrollX}px)`;
        prevListX = targetStep;
        prevX = scrollX;
      } else {
        dragger.style.transform = `translateX(${remainWidth}px)`;
        slideList.style.transform = `translateX(${-(
          remainWidthOfList + 32
        )}px)`;
        prevX = remainWidth;
        prevListX = remainWidthOfList + 32;
      }
    }
  });

  leftBtn.addEventListener('click', () => {
    if (prevListX > 0) {
      const newSteps = steps.map((step) => {
        return { ...step, gap: Math.abs(step.offsetX - prevListX) };
      });
      const nearest = newSteps.sort((a, b) => a.gap - b.gap)[0].id;
      if (nearest > 0) {
        const targetStep = steps[nearest - 1].offsetX;
        const scrollX = (targetStep / remainWidthOfList) * remainWidth;
        slideList.style.transform = `translateX(${-targetStep}px)`;
        dragger.style.transform = `translateX(${scrollX}px)`;
        prevListX = targetStep;
        prevX = scrollX;
      } else {
        dragger.style.transform = `translateX(0px)`;
        slideList.style.transform = `translateX(0px)`;
        prevX = 0;
        prevListX = 0;
      }
    }
  });
}

function setSlideScroll(slidelist) {
  const slideWrapper = slidelist.querySelector('.slidelist__listwrapper');
  const scrollbar = slidelist.querySelector('.slidelist__scrollbar');
  const slideList = slidelist.querySelector('.slidelist__list');
  const dragger = slidelist.querySelector('.slidelist__scroll-dragger');
  const leftBtn = slidelist.querySelector('.slidelist__btn--left');
  const rightBtn = slidelist.querySelector('.slidelist__btn--right');

  const barWidth = scrollbar.getBoundingClientRect().width;
  const listWidth = slideList.scrollWidth;
  const wrapperWidth = slideWrapper.getBoundingClientRect().width;

  const draggerWidth = getDraggerWidth(barWidth, wrapperWidth, listWidth);
  dragger.style.width = draggerWidth + 'px';
  setDraggerMoving(
    dragger,
    slideList,
    barWidth,
    draggerWidth,
    listWidth,
    wrapperWidth,
    leftBtn,
    rightBtn
  );
}

function setSlideInterval() {
  const slideBanner = document.querySelector('.slide-banner__wrapper');
  const slides = slideBanner.children;
  let i = 0;
  setInterval(() => {
    if (i + 1 < slides.length) {
      slideBanner.style.transform = `translateX(-${100 * (i + 1)}%)`;
      i++;
    } else {
      slideBanner.style.transform = `translateX(0%)`;
      i = 0;
    }
  }, 8000);
}

function AddSearchMode(navbar) {
  if (!navbar.classList.contains('search-mode')) {
    navbar.classList.add('search-mode');
  }
}

function showSearchPane(navbar) {
  const searchBtn = navbar.querySelector('.search__btn');
  const searchInput = navbar.querySelector('.search__input');
  searchBtn.addEventListener('click', () => {
    AddSearchMode(navbar);
  });
  searchInput.addEventListener('focus', () => {
    AddSearchMode(navbar);
  });
}

function hideSearchPane(navbar) {
  const exitBtn = navbar.querySelector('.search__exit-btn');
  exitBtn.addEventListener('click', () => {
    navbar.classList.remove('search-mode');
  });
}

function setSearchMode() {
  const navbar = document.querySelector('#navbar');
  showSearchPane(navbar);
  hideSearchPane(navbar);
}

setSearchMode();
setSlideInterval();
const slidelists = document.querySelectorAll('.slidelist');
Array.from(slidelists).map(setSlideScroll);
