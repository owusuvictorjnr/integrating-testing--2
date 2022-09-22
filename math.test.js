const { sum, divide, multiply, subtract } = require('./math');

beforeAll(() => {
  console.log('Before All Test');
});

'Function',
  () => {
    beforeEach(() => {
      console.log('before Each');
    });
  };

it('should add two numbers', () => {
  expect(sum(2, 3)).toBe(5);
});

it('should suntract two numbers', () => {
  expect(subtract(5, 3)).toBe(2);
});

it('should divide two numbers', () => {
  expect(divide(6, 3)).toBe(2);
});

it('should multiply two numbers', () => {
  expect(multiply(2, 3)).toBe(6);
});

afterEach(() => {
  console.log('After each Test');
});

afterAll(() => {
  console.log('Run After All Test');
});
