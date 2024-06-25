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

  // Test1
  it('should return 0 when the string is empty', () => {
    expect(service.sum('')).toBe(0);
  });

  // Test2
  it('should return number when the string is a number', () => {
    expect(service.sum('3')).toBe(3);
  });

  // Test3
  it('should return number when the string is a number', () => {
    expect(service.sum('4')).toBe(4);
  });

  // Test4
  it('should return the same number when the string is a number', () => {
    expect(service.sum('5')).not.toBe(6);
  });

  // Test5
  it('should return an error when the string is not a number', () => {
    expect(() => service.sum('a')).toThrow();
  });

  // Test6
  it('should return sum of two numbers', () => {
    expect(service.sum('4,2')).toBe(6);
  });

  // Test7
  it('should return sum of two numbers', () => {
    expect(service.sum('9,3')).toBe(12);
  });

  // Test8
  it('should return sum of two numbers', () => {
    expect(service.sum('5,2')).not.toBe(10);
  });

  // Test9
  it('should return an error when one of the numbers is not a number', () => {
    expect(() => service.sum('a,2')).toThrow();
  });

  // Test10
  it('should return an error when one of the numbers is not a number', () => {
    expect(() => service.sum('2,a')).toThrow();
  });
});
