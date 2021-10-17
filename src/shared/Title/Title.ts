import { htmlToElements } from 'shared/htmlToElemet';
import './Title.scss';

export const Title = (title: string): HTMLElement =>
  htmlToElements(`
  <h1 class="title">${title}</h1>
`);
