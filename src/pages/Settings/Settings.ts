import { htmlToElements } from 'shared/htmlToElemet';
import { selectFieldDifficulty, selectFieldGameCards } from './components/SelectField';
import './Settings.scss';

export const Settings = (): HTMLElement => {
  const settings = htmlToElements(`
    <div class="settings"></div>
  `);

  const settingsWrapper = htmlToElements(`
    <div class="settings-wrapper"></div>
  `);

  settingsWrapper.append(selectFieldGameCards(), selectFieldDifficulty());
  settings.append(settingsWrapper);

  return settings;
};
