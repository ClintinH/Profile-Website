// Information slider
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");

let slides;
let curSlide = 0;
let maxSlides;

export const slideInnerHtml = function (slideHtml) {
  slides = slideHtml;
  init();
};

const createDot = function () {
  const dotContainer = document.querySelector(".dots");

  slides.forEach(function (_, i) {
    dotContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};

const activeDot = function (slide) {
  document
    .querySelectorAll(".dots__dot")
    .forEach((dot) => dot.classList.remove("dots__dot--active"));

  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add("dots__dot--active");
};

// Settin Up slides - 0%, 100%, 200%, 300%

const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};

// Next Slide
const nextSlide = function () {
  if (curSlide === maxSlides) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  goToSlide(curSlide);
  activeDot(curSlide);
};

btnRight.addEventListener("click", nextSlide);

// Previous Slide
const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlides;
  } else {
    curSlide--;
  }

  goToSlide(curSlide);
  activeDot(curSlide);
};

btnLeft.addEventListener("click", prevSlide);

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") prevSlide();
  if (e.key === "ArrowRight") nextSlide();
});

const dotContainers = function () {
  const dotContainer = document.querySelector(".dots");

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activeDot(slide);
    }
  });
};

const init = function () {
  maxSlides = slides.length - 1;
  dotContainers();
  createDot();
  activeDot(0);
  goToSlide(0);
};
