import { htmlToElements } from 'shared/htmlToElemet';
import { Title } from 'shared/Title/Title';
import { FieldWrapper } from './components/FieldWrapper';
import { SubmitButton, ResetButton, CancelButton } from './components/Button';
import './RegisterForm.scss';

export const RegisterForm = (): HTMLElement => {
  const registerWrapper = htmlToElements(`
    <div class="register-wrapper"></div>
  `);

  const registerNewPlayer = htmlToElements(`
    <div class="register"></div>
  `);

  const title = Title('Register new Player');
  title.classList.add('register__title');

  const registerForm = htmlToElements(`
    <form class="register-form"></form>
  `);

  const inputFile = htmlToElements(`
      <input id="file" class="register-form__field-file" type="file">
    `);

  const btnWrapper = htmlToElements(`
    <div class="register-form__btn-wrapper">
    </div>
  `);

  btnWrapper.append(SubmitButton(), ResetButton(), CancelButton());

  registerForm.append(...FieldWrapper(), inputFile, btnWrapper);

  registerNewPlayer.append(title, registerForm);

  registerWrapper.append(registerNewPlayer);

  return registerWrapper;
};
