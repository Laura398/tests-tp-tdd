import { Body, Controller, Post } from '@nestjs/common';
import { CalculatorService } from './calculator.service';

@Controller('calculator')
export class CalculatorController {
  constructor(private readonly calculatorService: CalculatorService) {}

  @Post()
  sum(@Body() number1: string, number2?: string) {
    return this.calculatorService.sum(number1, number2);
  }
}
