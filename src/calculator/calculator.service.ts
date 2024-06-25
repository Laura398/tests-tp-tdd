import { Injectable } from '@nestjs/common';

@Injectable()
export class CalculatorService {
  sum(string: string): number {
    console.log('string', string);
    if (string === '') return 0;
    if (string.includes(',')) {
      const numbers = string.split(',');
      const number1 = Number(numbers[0]);
      const number2 = Number(numbers[1]);
      if (isNaN(number1) || isNaN(number2))
        throw new Error('One of the numbers is not a number');
      const sum = Number(numbers[0]) + Number(numbers[1]);
      return sum;
    }
    if (isNaN(Number(string))) throw new Error('The string is not a number');
    return Number(string);
  }
}
