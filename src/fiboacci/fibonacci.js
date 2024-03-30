export class Fibonacci{
    fibonacciRecursive(n) {
        if (n <= 1) {
            return n;
        } else {
            return this.fibonacciRecursive(n - 1) + this.fibonacciRecursive(n - 2);
        }
    }

    fibonacciIterative(n) {
        let fib = [0, 1];
        for (let i = 2; i <= n; i++) {
            fib[i] = fib[i - 1] + fib[i - 2];
        }
        return fib[n];
    }
}