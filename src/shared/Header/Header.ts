import { htmlToElements } from 'shared/htmlToElemet';
import { Button } from 'shared/Button';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import './Header.scss';

export const Header = (): HTMLElement => {
  const header = htmlToElements(`
    <header class="header"></header>
  `);

  const headerBlock = htmlToElements(`
    <div class="header__block"></div>
  `);

  const logo = Logo();
  const menu = Menu();

  const btnStartGame = Button('start game');

  const btnStopGame = Button('stop game');
  btnStopGame.classList.add('header__button--hidden');

  headerBlock.append(logo, menu);

  header.append(headerBlock, btnStartGame, btnStopGame);

  return header;
};
