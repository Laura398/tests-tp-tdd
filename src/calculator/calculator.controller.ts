import { Body, Controller, Post } from '@nestjs/common';
import { CalculatorService } from './calculator.service';

@Controller('calculator')
export class CalculatorController {
  constructor(private readonly calculatorService: CalculatorService) {}

  @Post()
  add(@Body() string: string) {
    return this.calculatorService.add(string);
  }
}
