/* globals Swiper */
export const initRatesSlider = () => {

  const ratesSlider = document.querySelector('[data-rates-slider]');

  if (!ratesSlider) {
    return;
  }

  const swiper = new Swiper(ratesSlider, {
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
        spaceBetween: 20,
        slidesOffsetBefore: 22,
        slidesOffsetAfter: 22,


      },
      768: {
        spaceBetween: 20,
        slidesOffsetBefore: 40,
        slidesOffsetAfter: 40,
      },
      1200: {
        spaceBetween: 30,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,

      },
      1440: {
        spaceBetween: 30,
      },
    },
  });
};
