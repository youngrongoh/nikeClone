export default class Hamburger {
  constructor() {
    this.hbgBtn = document.querySelector('.navbar__hamburger');
    this.body = document.querySelector('body');
    this.navbar = document.querySelector('#navbar');
    this.hbgBtn.addEventListener('click', this.turnOnOpenMode);
  }

  turnOnOpenMode = () => {
    this.body.classList.add('open-mode');
    this.navbar.classList.add('open-mode');
    this.navbar.addEventListener('click', this.tunrOffOpenMode);
  };

  tunrOffOpenMode = (e) => {
    if (e.target.matches('.open-mode .navbar__wrapper')) {
      this.body.classList.remove('open-mode');
      this.navbar.classList.remove('open-mode');
    }
  };
}
