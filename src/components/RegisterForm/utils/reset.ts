export const reset = (): void => {
  const listOfWrapper = Array.from(document.querySelectorAll('.register-form__field-wrapper'));
  const listOfInput = Array.from(document.querySelectorAll('.register-form__field'));
  const listOfErrorMessage = Array.from(document.querySelectorAll('.register-form__error-message'));

  listOfWrapper.forEach((elem) => {
    elem.classList.remove('register-form__field-wrapper--valid');
  });

  listOfInput.forEach((elem) => {
    elem.classList.remove('register-form__field--invalid');
  });

  listOfErrorMessage.forEach((elem) => {
    elem.classList.add('register-form__error-message--hidden');
  });
};
