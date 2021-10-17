import { validate } from './validate';

export const validateEmailField = (elem: HTMLInputElement): void => {
  const regexEmail = /\b[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\b/;

  const errorMessage = elem.nextElementSibling as HTMLElement;
  const fieldWrapper = elem.parentElement as HTMLElement;

  if (validate(regexEmail, elem.value)) {
    elem.classList.remove('register-form__field--invalid');

    errorMessage.classList.add('register-form__error-message--hidden');
    errorMessage.textContent = '';

    fieldWrapper.classList.add('register-form__field-wrapper--valid');
  } else {
    elem.classList.add('register-form__field--invalid');

    errorMessage.classList.remove('register-form__error-message--hidden');
    errorMessage.textContent = 'The email is incorrect';

    fieldWrapper.classList.remove('register-form__field-wrapper--valid');
  }
};
