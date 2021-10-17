import { htmlToElements } from 'shared/htmlToElemet';
import './ScoreList.scss';

export const ScoreList = (dataObj: { [index: string]: string | number }): HTMLElement => {
  const list = htmlToElements(`
    <div class="score__list">
      <div class="score__name-wrapper">
        <p class="score__name">${dataObj.firstname} ${dataObj.lastname}</p>
        <p class="score__email">${dataObj.email}</p>
      </div>
      <div class="score__score-wrapper">
        <p class="score__score">Score: <span>${dataObj.score}</span></p>
      </div>
    </div>
  `);

  if (dataObj.file !== undefined) {
    const img = htmlToElements(`<img class="score__img" src="${dataObj.file}" alt="">`);
    list.prepend(img);
  } else {
    const span = htmlToElements(`<span class="score__no-img"></span>`);
    list.prepend(span);
  }
  return list;
};
