import { htmlToElements } from 'shared/htmlToElemet';
import * as IMAGES from 'asset';
import { Title } from 'shared/Title';
import { InstructionRow } from 'pages/AboutGame/components/InstructionRow';
import './Instruction.scss';

const listOfImg: string[] = [IMAGES.AboutGameForm, IMAGES.AboutGameSettings, IMAGES.AboutGameGame];
const listOfAlt: string[] = ['new player registration form', 'settings button', 'playing field'];

const listOfRules: string[] = [
  'Register new player in game',
  'Configure your game settings',
  'Start you new game! Remember card positions and match it before times up.',
];

export const Instruction = (): HTMLElement => {
  const instruction = htmlToElements(`
    <div class="instruction-wrapper"></div>
  `);

  const title = Title('How to play?');

  const listOfInstructionRow = listOfRules.map((text, index) => {
    return InstructionRow(text, index + 1, listOfImg[index], listOfAlt[index]);
  });

  instruction.append(title, ...listOfInstructionRow);

  return instruction;
};
