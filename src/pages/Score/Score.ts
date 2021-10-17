import { getData } from 'IndexedDB/getData';
import { htmlToElements } from 'shared/htmlToElemet';
import { Title } from 'shared/Title';
import { ScoreList } from './components/ScoreList';
import './Score.scss';

export const Score = (): HTMLElement => {
  const score = htmlToElements(`
    <div class="score"></div>
  `);

  const scoreWrapper = htmlToElements(`
    <div class="score-wrapper"></div>
  `);

  const title = Title('Best players');

  scoreWrapper.append(title);

  const onsuccess = (dataObj: { [index: string]: string | number }) => {
    if (scoreWrapper.children.length < 11) {
      scoreWrapper.append(ScoreList(dataObj));
    }
  };

  getData(onsuccess);

  score.append(scoreWrapper);

  return score;
};
