import { openPopupWinner } from './openPopupWinner';

function GameService() {
  let stopWatch: unknown;

  function startTime() {
    const timer = document.getElementById('timer') as HTMLElement;

    const start: number = +new Date();

    function update(ms: number): void {
      if (timer) {
        timer.textContent = new Date(ms).toISOString().slice(14, 19);
      }
    }
    stopWatch = setInterval(() => update(+new Date() - start), 500);
  }

  function hiddenGameFieldImg() {
    const gameFieldCard = document.querySelectorAll('.game-field__card');
    const gameFieldImg = document.querySelectorAll('.game-field__img');

    gameFieldCard.forEach((item) => {
      item.classList.remove('game-field__card--stop-events');
    });

    gameFieldImg.forEach((item) => {
      item.classList.remove('game-field__img--rotate');
    });

    startTime();
  }

  function stopTimer() {
    const timer = document.getElementById('timer') as HTMLElement;

    if (timer) {
      const gameTime = timer.textContent as string;
      clearInterval(stopWatch as NodeJS.Timeout);
      openPopupWinner(gameTime);
    }
  }

  function startGame() {
    setTimeout(hiddenGameFieldImg, 30000);
  }

  return {
    startGame,
    stopTimer,
  };
}

export const gameService = GameService();
