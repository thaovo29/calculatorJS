const calculator = require('./calculator')

test('string with a single number should result in the number itself', () => {
    expect(calculator.add('1')).toBe(1);
  });

test('add 1 + 2', () => {
    expect(calculator.add('1,2')).toBe(3);
})