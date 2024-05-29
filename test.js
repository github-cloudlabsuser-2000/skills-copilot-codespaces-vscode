class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    }
}

// Usage
const calculator = new Calculator();
console.log(calculator.add(5, 3));      // Outputs: 8
console.log(calculator.subtract(5, 3)); // Outputs: 2
console.log(calculator.multiply(5, 3)); // Outputs: 15
console.log(calculator.divide(6, 3));   // Outputs: 2

const Calculator = require('./Calculator'); // Adjust the path as needed

describe('Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    test('add two positive numbers', () => {
        expect(calculator.add(5, 3)).toBe(8);
    });

    test('add two negative numbers', () => {
        expect(calculator.add(-5, -3)).toBe(-8);
    });

    test('add a positive number and a negative number', () => {
        expect(calculator.add(5, -3)).toBe(2);
    });

    test('add a number and zero', () => {
        expect(calculator.add(5, 0)).toBe(5);
    });
});

