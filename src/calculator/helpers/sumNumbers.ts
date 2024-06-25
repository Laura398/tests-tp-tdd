export function sumNumbers(numbers: number[]) {
  numbers.forEach((number) => {
    if (isNaN(number)) throw new Error('One of the numbers is not a number');
  });
  return numbers.reduce((acc, number) => acc + number);
}
