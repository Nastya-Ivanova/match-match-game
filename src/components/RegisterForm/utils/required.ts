export const required = (elem: HTMLInputElement): void => {
  const errorMessage = elem.nextElementSibling as HTMLElement;

  if (elem.value === '') {
    errorMessage.textContent = 'Required field';
  }
};
