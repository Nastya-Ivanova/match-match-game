import { htmlToElements } from 'shared/htmlToElemet';
import './Button.scss';

export const Button = (buttonText: string): HTMLElement =>
  htmlToElements(`
    <button class="header__button btn ${buttonText.split(' ').join('-')}">
      ${buttonText}
    </button>
  `);
