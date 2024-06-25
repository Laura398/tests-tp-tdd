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

  // Test1
  it('should return 0 when the string is empty', () => {
    expect(service.add('')).toBe(0);
  });

  // Test2
  it('should return number when the string is a number', () => {
    expect(service.add('3')).toBe(3);
  });

  // Test3
  it('should return number when the string is a number', () => {
    expect(service.add('4')).toBe(4);
  });

  // Test4
  it('should return the same number when the string is a number', () => {
    expect(service.add('5')).not.toBe(6);
  });

  // Test5
  it('should return an error when the string is not a number', () => {
    expect(() => service.add('a')).toThrow();
  });

  // Test6
  it('should return add of two numbers', () => {
    expect(service.add('4,2')).toBe(6);
  });

  // Test7
  it('should return add of two numbers', () => {
    expect(service.add('9,3')).toBe(12);
  });

  // Test8
  it('should return add of two numbers', () => {
    expect(service.add('5,2')).not.toBe(10);
  });

  // Test9
  it('should return an error when one of the numbers is not a number', () => {
    expect(() => service.add('a,2')).toThrow();
  });

  // Test10
  it('should return an error when one of the numbers is not a number', () => {
    expect(() => service.add('2,a')).toThrow();
  });

  // Test11
  it('should return add of many numbers', () => {
    expect(service.add('1,2,3,4,5')).toBe(15);
  });

  // Test12
  it('should return add of many numbers', () => {
    expect(service.add('5,5,5')).toBe(15);
  });

  // Test13
  it('should accept new line as a separator', () => {
    expect(service.add('1\n2,3')).toBe(6);
  });

  // Test14
  it('should accept new line as a separator', () => {
    expect(service.add('1\n2\n3')).toBe(6);
  });

  // Test15
  it('should throw an error when separators are not separated by a number', () => {
    expect(() => service.add('2,\n3')).toThrow();
  });

  // Test16
  it('should throw an error when separators are not separated by a number', () => {
    expect(() => service.add('2,3,9\n')).toThrow();
  });

  // Test17
  it('should throw an error when separators are not separated by a number', () => {
    expect(() => service.add('\n6,9,1')).toThrow();
  });

  // Test 18
  it('should accept custom separator', () => {
    expect(service.add('//;\n1;2')).toBe(3);
  });

  // Test 19
  it('should accept custom separator', () => {
    expect(service.add('//;\n1;2;3')).toBe(6);
  });

  // Test 20
  it('should accept custom separator', () => {
    expect(service.add('//;\n1;2;3;4')).not.toBe(12);
  });
});
