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
