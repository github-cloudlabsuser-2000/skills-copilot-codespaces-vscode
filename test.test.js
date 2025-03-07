const Calculator = require('./test.js');

// filepath: /workspaces/skills-copilot-codespaces-vscode/test.test.js
const calculator = new Calculator();

test('adds 1 + 2 to equal 3', () => {
    expect(calculator.add(1, 2)).toBe(3);
});

test('subtracts 5 - 3 to equal 2', () => {
    expect(calculator.subtract(5, 3)).toBe(2);
});

test('multiplies 4 * 3 to equal 12', () => {
    expect(calculator.multiply(4, 3)).toBe(12);
});

test('divides 10 / 2 to equal 5', () => {
    expect(calculator.divide(10, 2)).toBe(5);
});

test('divides by zero to return error message', () => {
    expect(calculator.divide(10, 0)).toBe("Error! Division by zero.");
});

test('calculates percentage of 50 out of 200 to equal 25', () => {
    expect(calculator.percentage(50, 200)).toBe(25);
});

test('calculates percentage with zero denominator to return error message', () => {
    expect(calculator.percentage(50, 0)).toBe("Error! Division by zero.");
});