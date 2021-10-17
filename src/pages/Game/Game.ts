import { htmlToElements } from 'shared/htmlToElemet';
import { getSettings } from 'IndexedDB/getSettings';
import { shuffle } from 'pages/Game/utils';
import { GameCard } from 'pages/Game/components/GameCard';
import { TimerField } from './components/TimerField';
import { GameField } from './components/GameField';
import './Game.scss';

export const Game = (): HTMLElement => {
  const game = htmlToElements(`
    <div class="game"></div>
  `);

  const gameWrapper = htmlToElements(`
    <div class="game-wrapper"></div>
  `);

  const timerField = TimerField();
  const gameField = GameField();

  const onsuccess = (typeCards: string, difficulty: number) => {
    const gameCards = [];

    for (let i = 0; i < difficulty; i += 1) {
      const cards = GameCard(difficulty, typeCards, i);
      const cardsCopy = GameCard(difficulty, typeCards, i);
      gameCards.push(cards, cardsCopy);
    }
    const suffleListOfCards = shuffle(gameCards);
    gameField.append(...suffleListOfCards);
  };

  getSettings(onsuccess);

  gameWrapper.append(timerField, gameField);
  game.append(gameWrapper);

  return game;
};
