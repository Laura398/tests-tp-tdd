import { Injectable } from '@nestjs/common';

@Injectable()
export class CalculatorService {
  sum(number1: string, number2?: string): number {
    console.log('number1', number1);
    console.log('number2', number2);
    if (!number2) {
      if (!number1 || number1 === '') {
        return 0;
      }
      return Number(number1);
    }
    return;
  }
}
