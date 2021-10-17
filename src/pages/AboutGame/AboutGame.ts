import { htmlToElements } from 'shared/htmlToElemet';
import { Instruction } from './components/Instruction';
import './AboutGame.scss';

export const AboutGame = (): HTMLElement => {
  const aboutGame = htmlToElements(`
    <div class="about-game"></div>
  `);

  aboutGame.append(Instruction());

  return aboutGame;
};
