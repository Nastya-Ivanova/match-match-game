export const shuffle = (arr: Array<HTMLElement>): Array<HTMLElement> => {
  const shuffleArr = arr;

  for (let i = shuffleArr.length - 1; i > 0; i -= 1) {
    const tmp = shuffleArr[i];
    const rnd = Math.floor(Math.random() * (i + 1));
    shuffleArr[i] = shuffleArr[rnd];
    shuffleArr[rnd] = tmp;
  }

  return shuffleArr as Array<HTMLElement>;
};
