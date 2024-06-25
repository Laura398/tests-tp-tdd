import { Injectable } from '@nestjs/common';

@Injectable()
export class CalculatorService {
  sum(string: string): number {
    console.log('string', string);
    return;
  }
}
