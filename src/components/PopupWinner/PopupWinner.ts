import { htmlToElements } from 'shared/htmlToElemet';
import { openRegisterForm } from 'pages/Game/utils/openRegisterForm';
import { navigateTo } from 'Router/utils/navigateTo';
import './PopupWinner.scss';

export const PopupWinner = (time: string): HTMLElement => {
  const popupWinnerWrapper = htmlToElements(`
    <div class="popup-winner-wrapper"></div>
  `);

  const popupWinner = htmlToElements(`
    <div class="popup-winner">
      <p class="popup-winner__text">Congratulations! You successfully found all matches on ${time} minutes.</p>
    </div>
  `);

  const buttonRegister = htmlToElements(`
    <button class="popup-winner__button popup-winner__button--register">register new player</button>
  `);

  buttonRegister.addEventListener('click', () => {
    popupWinnerWrapper.remove();
    openRegisterForm();
  });

  const buttonCancel = htmlToElements(`
    <button class="popup-winner__button popup-winner__button--cancel">cancel</button>
  `);

  buttonCancel.addEventListener('click', () => {
    popupWinnerWrapper.remove();
    navigateTo('/');
  });

  popupWinner.append(buttonRegister, buttonCancel);

  popupWinnerWrapper.append(popupWinner);

  return popupWinnerWrapper;
};
