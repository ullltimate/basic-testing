// Uncomment the code below and write your tests
import { throwError, throwCustomError, resolveValue, MyAwesomeError, rejectCustomError } from './index';

describe('resolveValue', () => {
  test('should resolve provided value', async () => {
    return expect(resolveValue('qw')).resolves.toBe('qw')
  });
});

describe('throwError', () => {
  test('should throw error with provided message', () => {
    expect(() => {throwError('massage')}).toThrow('massage');
  });

  test('should throw error with default message if message is not provided', () => {
    expect(throwError).toThrow('Oops!');
  });
});

describe('throwCustomError', () => {
  test('should throw custom error', () => {
    expect(throwCustomError).toThrow(new MyAwesomeError());
  });
});

describe('rejectCustomError', () => {
  test('should reject custom error', async () => {
    return expect(rejectCustomError).rejects.toThrow(new MyAwesomeError())
  });
});
