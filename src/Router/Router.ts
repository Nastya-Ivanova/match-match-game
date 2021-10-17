import { Header } from 'shared/Header';
import { gameService } from 'pages/Game/utils/gameService';
import { loadContent } from './utils/loadContent';
import { navigateTo } from './utils/navigateTo';

export const Router = (): void => {
  window.addEventListener('load', () => {
    const app = document.getElementById('app') as HTMLElement;
    app.append(Header());

    const currentPath = window.location.pathname;
    loadContent(currentPath);

    const logo = document.querySelector('.logo') as HTMLElement;

    logo.addEventListener('click', (evt) => {
      evt.preventDefault();
      navigateTo('/');
    });

    const menuButton = document.querySelectorAll('.menu__button');

    menuButton.forEach((item) => {
      item.addEventListener('click', (evt) => {
        const { route } = (evt.target as HTMLElement).dataset;
        navigateTo(route as string);
      });
    });

    const btnStartGame = document.querySelector('.start-game') as HTMLElement;
    const btnStopGame = document.querySelector('.stop-game') as HTMLElement;

    if (btnStartGame) {
      btnStartGame.addEventListener('click', () => {
        navigateTo('/game');
        gameService.startGame();
      });
    }

    if (btnStopGame) {
      btnStopGame.addEventListener('click', () => {
        navigateTo('/');
        gameService.stopTimer();
      });
    }
  });
};
