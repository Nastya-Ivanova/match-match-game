import { PopupWinner } from 'components/PopupWinner';

export const openPopupWinner = (time: string): void => {
  const pageGame = document.querySelector('.game') as HTMLElement;
  const popupWinner = PopupWinner(time);
  pageGame.append(popupWinner);
};
