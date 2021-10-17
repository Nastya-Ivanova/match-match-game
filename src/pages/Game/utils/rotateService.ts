import { gameService } from './gameService';

function RotateService() {
  let firstCard: HTMLElement;
  let secondCard: HTMLElement;

  let hasRotateCard = false;
  let blockGameField = false;

  function allCardsOpen() {
    const cards = document.querySelectorAll('.game-field__card');
    const arrCards = Array.from(cards);

    const allOpen = arrCards.every((elem) => elem.classList.contains('game-field__card--match'));

    if (allOpen) {
      gameService.stopTimer();
    }
  }

  function disableCards() {
    blockGameField = true;

    setTimeout(() => {
      firstCard.classList.add('game-field__card--match');
      secondCard.classList.add('game-field__card--match');

      blockGameField = false;

      allCardsOpen();
    }, 1000);
  }

  function unRotateCards() {
    blockGameField = true;

    setTimeout(() => {
      firstCard.classList.add('game-field__card--unmatch');
      secondCard.classList.add('game-field__card--unmatch');
    }, 1000);

    setTimeout(() => {
      firstCard.classList.remove('game-field__card--unmatch');
      secondCard.classList.remove('game-field__card--unmatch');

      firstCard.children[0].classList.remove('game-field__card-shirt--rotate');
      firstCard.children[1].classList.remove('game-field__img--rotate');

      secondCard.children[0].classList.remove('game-field__card-shirt--rotate');
      secondCard.children[1].classList.remove('game-field__img--rotate');

      blockGameField = false;
    }, 1500);
  }

  function compareCards() {
    if(!firstCard.children[0].classList.contains('game-field__card-shirt--rotate')){
      return;
    }
    if (firstCard.dataset.img === secondCard.dataset.img) {
      disableCards();
    } else {
      unRotateCards();
    }
  }

  function rotateCard(card: HTMLElement) {
    const shirt = card.children[0] as HTMLElement;
    const img = card.children[1] as HTMLElement;

    if (blockGameField) return;

    shirt.classList.toggle('game-field__card-shirt--rotate');
    img.classList.toggle('game-field__img--rotate');

    if (!hasRotateCard) {
      hasRotateCard = true;
      firstCard = card;
    } else {
      secondCard = card;
      hasRotateCard = false;
      compareCards();
    }
  }

  return {
    rotateCard,
  };
}

export const rotateService = RotateService();
