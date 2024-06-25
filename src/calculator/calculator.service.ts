import { Injectable } from '@nestjs/common';

@Injectable()
export class CalculatorService {
  sum(number1: string, number2?: string): number {
    console.log('number1', number1);
    console.log('number2', number2);
    return 1;
  }
}
