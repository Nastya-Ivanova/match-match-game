import { htmlToElements } from 'shared/htmlToElemet';
import { ErrorMessage } from 'components/RegisterForm/components/ErrorMessage';
import { InputFirstName, InputLastName, InputEmail } from '../Input';
import './FieldWrapper.scss';

export const FieldWrapper = (): HTMLElement[] => {
  const labels: string[] = ['First name', 'Last name', 'E-mail'];

  const inputs = [InputFirstName(), InputLastName(), InputEmail()];

  const fieldWrappers = labels.map((text: string, index: number) => {
    const wrapper = htmlToElements(`
      <div class="register-form__field-wrapper"></div>
    `);

    const label = htmlToElements(`
      <label class="register-form__label" for="${inputs[index].id}">${text}</label>
    `);

    wrapper.append(label, inputs[index], ErrorMessage());

    return wrapper;
  });

  return fieldWrappers;
};
