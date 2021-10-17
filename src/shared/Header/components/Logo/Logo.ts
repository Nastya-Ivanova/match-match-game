import { htmlToElements } from 'shared/htmlToElemet';
import './Logo.scss';

export const Logo = (): HTMLElement =>
  htmlToElements(`
    <a class="logo" href="/">
      <p class="logo__text">match</p>
      <p class="logo__text">match</p>
    </a>
  `);
