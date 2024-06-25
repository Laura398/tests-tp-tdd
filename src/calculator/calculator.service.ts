import { Injectable } from '@nestjs/common';

@Injectable()
export class CalculatorService {
  sum(string: string): number {
    console.log('string', string);
    if (string === '') return 0;
    return Number(string);
  }
}
