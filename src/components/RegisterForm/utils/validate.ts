export const validate = (regex: RegExp, value: string): boolean => {
  return regex.test(value);
};
