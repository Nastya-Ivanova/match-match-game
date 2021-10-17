import { htmlToElements } from 'shared/htmlToElemet';
import { MenuButton } from 'shared/Header/components/MenuButton';
import './Menu.scss';

const listOfMenu: string[] = ['about game', 'best score', 'game settings'];
const listOfRoute: string[] = ['/', '/score', '/settings'];

export const Menu = (): HTMLElement => {
  const menu = htmlToElements(`
    <div class="menu"></div>
  `);

  const buttons = listOfMenu.map((buttonText, index) => {
    return MenuButton(buttonText, listOfRoute[index]);
  });

  menu.append(...buttons);

  return menu;
};
