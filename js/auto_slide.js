export default function setAutoSlide() {
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
