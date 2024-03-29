export class Sol {
    getGcd(num1, num2) {
        return num2 > 0 ? this.getGcd(num2, num1 % num2) : num1;
    }

    getLcm(num1, num2) {
        return num1 * num2 / this.getGcd(num1, num2);
    }
}
