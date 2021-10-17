export const activeMenuButton = (page: string): void => {
  const menuButtons = Array.from(document.querySelectorAll('.menu__button'));

  menuButtons.forEach((item) => {
    if (page === 'game') {
      item.classList.remove('menu__button--active');
    }
    if (item.classList.contains('menu__button--active')) {
      item.classList.remove('menu__button--active');
    }
    if (item.classList.contains(`menu__button--${page}`)) {
      item.classList.add('menu__button--active');
    }
  });
};
