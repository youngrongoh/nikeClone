function onClickBtn(e) {
  const btn = e.target;
  btn.classList.toggle('show');
}

export default function setToggleList(list) {
  if (window.innerWidth < 640) {
    const btn = list.querySelector('.lists__toggle');
    btn.addEventListener('click', onClickBtn);
  }
}
