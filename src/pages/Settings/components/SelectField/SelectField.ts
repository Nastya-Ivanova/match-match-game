import { addSettings } from 'IndexedDB/addSettings';
import { htmlToElements } from 'shared/htmlToElemet';
import { TypesOfCards, TypesOfDifficulty } from 'type';
import './SelectField.scss';

function SelectField(title: string, objectStore: string, arrOption: string[]) {
  const selectWrapper = htmlToElements(`
    <div class="select"></div>
  `);

  const selectTitle = htmlToElements(`
    <h2 class="select__title">${title}</h2>
  `);

  const select = htmlToElements(`
    <select class="select__field"></select>
  `);

  select.addEventListener('change', () => {
    addSettings((select as HTMLSelectElement).value, objectStore);
  });

  const options = arrOption.map((item, index) => {
    const option = htmlToElements(`
      <option value="${item}">${item}</option>
    `);
    if (index === 0) {
      option.setAttribute('selected', 'selected');
      option.removeAttribute('value');
    }
    return option;
  });

  select.append(...options);

  selectWrapper.append(selectTitle, select);

  return selectWrapper;
}

export const selectFieldGameCards = (): HTMLElement => {
  return SelectField('Game cards', 'SettingCards', [
    'select game cards type',
    TypesOfCards.animals,
    TypesOfCards.food,
  ]);
};

export const selectFieldDifficulty = (): HTMLElement => {
  return SelectField('Difficulty', 'SettingDifficulty', [
    'select game type',
    TypesOfDifficulty.difficult4,
    TypesOfDifficulty.difficult6,
    TypesOfDifficulty.difficult8,
  ]);
};
