import { RegisterForm } from 'components/RegisterForm';

export const openRegisterForm = (): void => {
  const pageGame = document.querySelector('.game') as HTMLElement;
  pageGame.append(RegisterForm());
};
