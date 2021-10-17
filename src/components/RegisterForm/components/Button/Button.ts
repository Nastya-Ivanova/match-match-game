import { htmlToElements } from 'shared/htmlToElemet';
import { navigateTo } from 'Router/utils/navigateTo';
import { reset } from 'components/RegisterForm/utils/reset';
import './Button.scss';
import { submit } from 'components/RegisterForm/utils/submit';

function Button(id: string, type: string, text: string) {
  const button = htmlToElements(`
  <button id="${id}" class="register-form__btn register-form__btn--${id}" type="${type}">${text}</button>
`);
  return button;
}

export const SubmitButton = (): HTMLElement => {
  const timer = document.getElementById('timer') as HTMLElement;
  const gameTime = timer.textContent as string;

  const button = Button('submit', 'submit', 'add user');
  button.addEventListener('click', (evt) => {
    evt.preventDefault();
    submit(gameTime);
  });

  return button;
};

export const ResetButton = (): HTMLElement => {
  const button = Button('reset', 'reset', 'reset');
  button.addEventListener('click', () => {
    reset();
  });

  return button;
};

export const CancelButton = (): HTMLElement => {
  const button = Button('cancel', 'button', 'cancel');
  button.addEventListener('click', () => {
    navigateTo('/');
  });

  return button;
};
