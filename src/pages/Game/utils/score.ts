export const score = (gameTime: string): number => {
  const gameFieldCard = Array.from(document.querySelectorAll('.game-field__card'));

  const min = +gameTime.slice(0, 2);
  const sec = +gameTime.slice(3);

  let coefficient: number;

  if (gameFieldCard.length === 64) {
    coefficient = 0.25;
  } else if (gameFieldCard.length === 36) {
    coefficient = 0.44;
  }
  coefficient = 1;

  const result = (min * 60 + sec) * coefficient;

  return result;
};
