import { addData } from 'IndexedDB/addData';
import { score } from 'pages/Game/utils/score';

export const submit = (gameTime: string): void => {
  const data: { [index: string]: string | number } = {};
  const inputs = document.querySelectorAll('.register-form__field');

  inputs.forEach((item) => {
    const errorMessage = item.nextElementSibling as HTMLElement;

    if ((item as HTMLInputElement).value === '') {
      errorMessage.classList.remove('register-form__error-message--hidden');
      errorMessage.textContent = 'Required field';
    }
  });

  const fieldWrapper = Array.from(document.querySelectorAll('.register-form__field-wrapper'));

  const allFieldValid = fieldWrapper.every((item) => {
    return item.classList.contains('register-form__field-wrapper--valid');
  });

  if (allFieldValid) {
    data.score = score(gameTime);

    inputs.forEach((item) => {
      data[item.id] = (item as HTMLInputElement).value;
    });

    const inputFile = document.getElementById('file');
    const file = ((inputFile as HTMLInputElement).files as FileList)[0];

    if (file !== undefined) {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.result) {
          data.file = reader.result as string;
        }
      };

      reader.readAsDataURL(file);
    }

    addData(data);
  }
};
