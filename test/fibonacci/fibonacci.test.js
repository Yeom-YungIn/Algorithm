import {Fibonacci} from "../../src/fiboacci/fibonacci";

describe('fibonacci', () => {
    let fibonacci;
    beforeEach(() => {
        fibonacci = new Fibonacci();
    })

    test('fibonacci Recursive', () => {
        expect(fibonacci.fibonacciRecursive(1)).toBe(1);
        expect(fibonacci.fibonacciRecursive(8)).toBe(21);
        expect(fibonacci.fibonacciRecursive(9)).toBe(34);
    });

    test('fibonacci Iterative', () => {
        expect(fibonacci.fibonacciIterative(1)).toBe(1);
        expect(fibonacci.fibonacciIterative(10)).toBe(55);
    })
});