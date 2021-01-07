let prevtitle = undefined;

function onTitleClick(e) {
  const title = e.target;
  if (title !== prevtitle) {
    e.target.classList.add('toggle');
    if (prevtitle) {
      prevtitle.classList.remove('toggle');
    }
    prevtitle = title;
  } else {
    e.target.classList.remove('toggle');
    prevtitle = undefined;
  }
}

export default function setToggleOnTable() {
  if (window.innerWidth < 640) {
    const table = document.querySelector('.table');
    table.classList.add('toggle');
    const titles = document.querySelectorAll('.table__title');
    Array.from(titles).map((title) =>
      title.addEventListener('click', onTitleClick)
    );
  }
}
