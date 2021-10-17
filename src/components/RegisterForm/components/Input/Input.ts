import { htmlToElements } from 'shared/htmlToElemet';
import { validateTextField } from 'components/RegisterForm/utils/validateTextField';
import { validateEmailField } from 'components/RegisterForm/utils/validateEmailField';
import { required } from 'components/RegisterForm/utils/required';
import './Input.scss';

export const Input = (
  id: string,
  type: string,
  placeholder: string,
  funcValid: (elem: HTMLInputElement) => void
): HTMLElement => {
  const input = htmlToElements(`
  <input id="${id}" class="register-form__field" type="${type}" placeholder=${placeholder}>
`);

  input.addEventListener('blur', () => {
    required(input as HTMLInputElement);
  });

  input.addEventListener('input', () => {
    funcValid(input as HTMLInputElement);
  });

  return input;
};

export const InputFirstName = (): HTMLElement => {
  const input = Input('firstname', 'text', 'Jessie', validateTextField);
  return input;
};

export const InputLastName = (): HTMLElement => {
  const input = Input('lastname', 'text', 'Doe', validateTextField);
  return input;
};

export const InputEmail = (): HTMLElement => {
  const input = Input('email', 'email', 'Jessie.Doe@gmail.com', validateEmailField);
  return input;
};
