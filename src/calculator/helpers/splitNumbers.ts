export const splitNumbers = (string: string, delimiter: any): number[] => {
  const numbersAsStrings = string.split(delimiter);
  return numbersAsStrings.map((numberAsString) => {
    if (numberAsString === '')
      throw new Error('The string is not well formatted');
    return Number(numberAsString);
  });
};
