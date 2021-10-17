import { validate } from './validate';

export const validateTextField = (elem: HTMLInputElement): void => {
  const regexText = /^(?!\d+$)[a-zA-Z0-9а-яА-яёЁ]+( [a-zA-Z0-9а-яА-яёЁ]+)*$/;

  const errorMessage = elem.nextElementSibling as HTMLElement;
  const fieldWrapper = elem.parentElement as HTMLElement;

  if (validate(regexText, elem.value)) {
    if (elem.value.length > 30) {
      elem.classList.add('register-form__field--invalid');

      errorMessage.classList.remove('register-form__error-message--hidden');
      errorMessage.textContent = 'Maximum length of 30 characters';

      fieldWrapper.classList.remove('register-form__field-wrapper--valid');
    } else {
      elem.classList.remove('register-form__field--invalid');

      errorMessage.classList.add('register-form__error-message--hidden');
      errorMessage.textContent = '';

      fieldWrapper.classList.add('register-form__field-wrapper--valid');
    }
  } else {
    elem.classList.add('register-form__field--invalid');

    errorMessage.classList.remove('register-form__error-message--hidden');
    errorMessage.textContent = 'The field must contain only letters and numbers';

    fieldWrapper.classList.remove('register-form__field-wrapper--valid');
  }
};
