// Uncomment the code below and write your tests
import { InsufficientFundsError, SynchronizationFailedError, TransferFailedError, getBankAccount } from '.';

describe('BankAccount', () => {

  const myAccount = getBankAccount(100);

  test('should create account with initial balance', () => {
    expect(getBankAccount(100)).toEqual({_balance: 100})
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    expect(() => getBankAccount(100).withdraw(115)).toThrow(new InsufficientFundsError(getBankAccount(100).getBalance()))
  });

  test('should throw error when transferring more than balance', () => {
    expect(() => getBankAccount(100).transfer(120, getBankAccount(200))).toThrow(new InsufficientFundsError(getBankAccount(100).getBalance()))
  });

  test('should throw error when transferring to the same account', () => {
    expect(() => myAccount.transfer(120, myAccount)).toThrow(TransferFailedError)
  });

  test('should deposit money', () => {
    expect(getBankAccount(100).deposit(200).getBalance()).toBe(300);
  });

  test('should withdraw money', () => {
    expect(getBankAccount(100).withdraw(80).getBalance()).toBe(20)
  });

  test('should transfer money', () => {
    expect(getBankAccount(100).transfer(20, getBankAccount(200)).getBalance()).toBe(80)
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    const balance = await getBankAccount(100).fetchBalance();
    if(balance !== null) {expect(typeof balance).toBe('number')}
  });

  test('should set new balance if fetchBalance returned number', async () => {
    jest.spyOn(myAccount, 'fetchBalance').mockResolvedValueOnce(125);
    await myAccount.synchronizeBalance();
    expect(myAccount.getBalance()).toBe(125)
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    jest.spyOn(myAccount, 'fetchBalance').mockResolvedValueOnce(null);
    await expect(myAccount.synchronizeBalance()).rejects.toThrow(SynchronizationFailedError);
  });
});
