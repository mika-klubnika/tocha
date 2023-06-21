/* globals Swiper */
export const initStepsSlider = () => {

  const stepsSlider = document.querySelector('[data-steps-slider]');

  if (!stepsSlider) {
    return;
  }

  const swiper = new Swiper(stepsSlider, {
    watchOverflow: true,
    roundLengths: true,
    speed: 400,
    slidesPerView: 'auto',
    grabCursor: true,

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },

    breakpoints: {
      0: {
        slidesOffsetBefore: 22,
        slidesOffsetAfter: 22,
      },
      768: {
        slidesOffsetBefore: 40,
        slidesOffsetAfter: 40,
      },
      1440: {
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
      },
    },
  });
};
