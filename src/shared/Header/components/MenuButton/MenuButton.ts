import { htmlToElements } from 'shared/htmlToElemet';
import './MenuButton.scss';

export const MenuButton = (buttonText: string, route: string): HTMLElement =>
  htmlToElements(`
    <button class="menu__button menu__button--${buttonText
      .split(' ')
      .join('-')}" data-route="${route}">
      ${buttonText}
    </button>
  `);
