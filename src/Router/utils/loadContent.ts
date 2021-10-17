import { AboutGame } from 'pages/AboutGame';
import { Game } from 'pages/Game';
import { Score } from 'pages/Score';
import { Settings } from 'pages/Settings';
import { activeMenuButton } from 'shared/Header/components/MenuButton/utils/activeMenuButton';

export const loadContent = (path: string): void => {
  const app = document.getElementById('app') as HTMLElement;
  const content = app.children[1] as HTMLElement;

  const btnStartGame = document.querySelector('.start-game') as HTMLElement;
  const btnStopGame = document.querySelector('.stop-game') as HTMLElement;

  if (content) {
    content.remove();
  }

  switch (path) {
    case '/':
      btnStopGame.classList.add('header__button--hidden');
      btnStartGame.classList.remove('header__button--hidden');
      app.append(AboutGame());
      activeMenuButton('about-game');
      break;
    case '/game':
      btnStartGame.classList.add('header__button--hidden');
      btnStopGame.classList.remove('header__button--hidden');
      app.append(Game());
      activeMenuButton('game');
      break;
    case '/settings':
      btnStopGame.classList.add('header__button--hidden');
      btnStartGame.classList.remove('header__button--hidden');
      app.append(Settings());
      activeMenuButton('game-settings');
      break;
    case '/score':
      btnStopGame.classList.add('header__button--hidden');
      btnStartGame.classList.remove('header__button--hidden');
      app.append(Score());
      activeMenuButton('best-score');
      break;

    // no default
  }
};
