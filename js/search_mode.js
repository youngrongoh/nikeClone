'use strict';

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

export default function setSearchMode() {
  const navbar = document.querySelector('#navbar');
  showSearchPane(navbar);
  hideSearchPane(navbar);
}
