import { Injectable } from '@nestjs/common';
import { sumNumbers } from './helpers/sumNumbers';

@Injectable()
export class CalculatorService {
  add(string: string): number {
    console.log('string', string);
    if (string === '') return 0;
    if (string.includes(',') || string.includes('\n')) {
      const numbersAsStrings = string.split(/,|\n/);
      const numbers = numbersAsStrings.map((numberAsString) => {
        if (numberAsString === '')
          throw new Error('The string is not well formatted');
        return Number(numberAsString);
      });
      return sumNumbers(numbers);
    }
    if (isNaN(Number(string))) throw new Error('The string is not a number');
    return Number(string);
  }
}
