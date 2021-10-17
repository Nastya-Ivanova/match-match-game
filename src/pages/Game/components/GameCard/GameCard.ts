import { htmlToElements } from 'shared/htmlToElemet';
import { CardImage } from 'pages/Game/components/CardImage';
import { rotateService } from 'pages/Game/utils/rotateService';
import './GameCard.scss';

export const GameCard = (difficulty: number, typeCards: string, index: number): HTMLElement => {
  const gameCard = htmlToElements(`
    <div class="game-field__card game-field__card--stop-events game-field__card--${difficulty}" data-img="${index}">
      <div class="game-field__card-shirt"></div>
    </div>
  `);

  gameCard.addEventListener('click', (evt) => {
    if (gameCard.classList.contains('game-field__card--match')) return;
    rotateService.rotateCard(evt.currentTarget as HTMLElement);
  });

  const cardImage = CardImage(typeCards, index);

  gameCard.append(cardImage);

  return gameCard;
};
