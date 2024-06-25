import { Test, TestingModule } from '@nestjs/testing';
import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CalculatorService],
    }).compile();

    service = module.get<CalculatorService>(CalculatorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return 0 when the string is empty', () => {
    expect(service.sum('')).toBe(0);
  });

  it('should return number when the string is a number', () => {
    expect(service.sum('3')).toBe(3);
  });

  it('should return number when the string is a number', () => {
    expect(service.sum('4')).toBe(4);
  });

  it('should return the same number when the string is a number', () => {
    expect(service.sum('5')).not.toBe(6);
  });

  it('should return an error when the string is not a number', () => {
    expect(() => service.sum('a')).toThrow();
  });

  it('should return sum of two numbers', () => {
    expect(service.sum('4,2')).toBe(6);
  })

  it('should return sum of two numbers', () => {
    expect(service.sum('9,3')).toBe(12);
  })

  it('should return sum of two numbers', () => {
    expect(service.sum('5,2')).not.toBe(10);
  })
});
