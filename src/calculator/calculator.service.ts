import { Injectable } from '@nestjs/common';
import { sumNumbers } from './helpers/sumNumbers';

@Injectable()
export class CalculatorService {
  add(string: string): number {
    console.log('string', string);
    if (string === '') return 0;
    if (string.includes(',')) {
      const numbers = string.split(/,|\n/);
      return sumNumbers(numbers.map(Number));
    }
    if (isNaN(Number(string))) throw new Error('The string is not a number');
    return Number(string);
  }
}
