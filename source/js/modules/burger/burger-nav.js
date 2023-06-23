import {ScrollLock} from '../../utils/scroll-lock';
import {FocusLock} from '../../utils/focus-lock';

const burger = document.querySelector('[data-burger]');
const header = document.querySelector('[data-header]');
const breakpointLg = window.matchMedia('(min-width:768px)');

const scrollLock = new ScrollLock();
const focusLock = new FocusLock();

const openMenu = () => {
  burger.ariaPressed = 'true';
  header.classList.add('is-open');
  scrollLock.disableScrolling();
  focusLock.lock('[data-header]');
  document.addEventListener('keydown', onDocumentKeydown);
};

const closeMenu = () => {
  burger.ariaPressed = 'false';
  header.classList.remove('is-open');
  scrollLock.enableScrolling();
  focusLock.unlock('[data-header]');
  document.removeEventListener('keydown', onDocumentKeydown);
};

const closeMenuOnResize = () => {
  closeMenu();
};

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape') {
    closeMenu();
  }
};

export const initBurgerAction = () => {
  if (burger) {
    breakpointLg.addListener(closeMenuOnResize);
    burger.addEventListener('click', () => {
      if (burger.ariaPressed === 'true') {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }
};
