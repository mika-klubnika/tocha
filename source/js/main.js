import {iosVhFix} from './utils/ios-vh-fix';
import {initCustomSelect} from './modules/form/init-custom-select';
import {initFormValidate} from './modules/form/init-form-validate';
import {initRatesSlider} from './modules/sliders/rates-slider';
import {initStepsSlider} from './modules/sliders/steps-slider';
import {initReviewsSlider} from './modules/sliders/reviews-slider';
import {initBurgerAction} from './modules/burger/burger-nav';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------
  window.addEventListener('load', () => {
    initBurgerAction();
    initCustomSelect();
    initFormValidate();
    initRatesSlider();
    initStepsSlider();
    initReviewsSlider();
  });
});

// ---------------------------------
