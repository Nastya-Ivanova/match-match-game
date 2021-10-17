import { htmlToElements } from 'shared/htmlToElemet';
import './GameField.scss';

export const GameField = (): HTMLElement => {
  const gameField = htmlToElements(`
    <div class="game-field"></div>
  `);

  return gameField;
};
