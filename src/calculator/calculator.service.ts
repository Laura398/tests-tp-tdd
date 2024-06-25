import { Injectable } from '@nestjs/common';

@Injectable()
export class CalculatorService {
  sum(string: string): number {
    console.log('string', string);
    if (string === '') return 0;
    if (isNaN(Number(string))) throw new Error('The string is not a number');
    return Number(string);
  }
}
