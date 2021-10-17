import { htmlToElements } from 'shared/htmlToElemet';
import './InstructionRow.scss';

export const InstructionRow = (
  text: string,
  index: number,
  img: string,
  alt: string
): HTMLElement => {
  return htmlToElements(`
    <div class="instruction__row">
        <p class="instruction__card">
          <span class="instruction__number">
            ${index}
          </span>
          ${text}
        </p>
         <img src="${img}" alt="${alt}">
    </div>
  `);
};
