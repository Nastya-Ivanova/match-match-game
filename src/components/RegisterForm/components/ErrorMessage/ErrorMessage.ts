import { htmlToElements } from 'shared/htmlToElemet';
import './ErrorMessage.scss';

export const ErrorMessage = (): HTMLElement =>
  htmlToElements(`
  <span class="register-form__error-message register-form__error-message--hidden"></span>
`);
