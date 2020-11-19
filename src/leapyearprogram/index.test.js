import isLeapYear from './index';

it('should NOT be a leap year if divisible by 100, not 400', () => {
    expect(isLeapYear(1900)).toBe(false);
  });
  
  it('should be a leap year if divisible by 4, not 100', () => {
    expect(isLeapYear(1984)).toBe(true);
  });
  
  it('should NOT be a leap year if not divisible by 4', () => {
    expect(isLeapYear(1983)).toBe(false);
  });
  
  it('should be a leap year if divisible by 400', () => {
    expect(isLeapYear(2000)).toBe(true);
  });
  
  it('should throw an error for years before 1582', () => {
    expect(() => {
        isLeapYear(1568);
    }).toThrow();
  });