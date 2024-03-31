export class Factorial {
    factorialRecursive(n) {
        if (n === 0) {
            return 1;
        } else {
            return n * this.factorialRecursive(n - 1);
        }
    }

}
