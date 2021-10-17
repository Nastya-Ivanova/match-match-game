import { htmlToElements } from 'shared/htmlToElemet';
import './TimerField.scss';

export const TimerField = (): HTMLElement =>
  htmlToElements(`
    <time id="timer" class="timer" type="text">00:00</time>
  `);
