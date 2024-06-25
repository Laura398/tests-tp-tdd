import { Injectable } from '@nestjs/common';
import { sumNumbers } from './helpers/sumNumbers';
import { splitNumbers } from './helpers/splitNumbers';

@Injectable()
export class CalculatorService {
  add(string: string): number {
    if (string === '') return 0;
    if (string.startsWith('//')) {
      const firstPart = string.split('//')[1];
      const stringArray = firstPart.split('\n');
      const delimiter = stringArray[0];
      const stringToUse = stringArray[1];
      const numbers = splitNumbers(stringToUse, delimiter);
      return sumNumbers(numbers);
    }

    if (string.includes(',') || string.includes('\n')) {
      const numbers = splitNumbers(string, /,|\n/);
      return sumNumbers(numbers);
    }
    if (isNaN(Number(string))) throw new Error('The string is not a number');
    return Number(string);
  }
}
