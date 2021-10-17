import { htmlToElements } from 'shared/htmlToElemet';
import * as ANIMAL_IMAGES from 'asset/animals';
import * as FOOD_IMAGES from 'asset/food';
import './CardImage.scss';
import { TypesOfCards } from 'type';

const animals = Object.values(ANIMAL_IMAGES);
const food = Object.values(FOOD_IMAGES);

export const CardImage = (typeCards: string, index: number): HTMLElement => {
  const cardImage = htmlToElements(`
    <img class="game-field__img game-field__img--rotate" alt="">
  `);

  if (typeCards === TypesOfCards.animals) {
    cardImage.setAttribute('src', animals[index]);
  } else if (typeCards === TypesOfCards.food) {
    cardImage.setAttribute('src', food[index]);
  }

  return cardImage;
};
