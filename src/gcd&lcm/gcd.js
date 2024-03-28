export class Gcd {
    getGcd(num1 , num2) {
        let gcd = 1;

        for (let i = 2; i <= Math.min(num1, num2); i++) {
            if (num1 % i === 0 && num2 % i === 0) {
                gcd = i;
            }
        }
        return gcd;
    }

    getGcd2(num1, num2) {
        while (num2 > 0) {
            let r = num1 % num2;
            num1 = num2;
            num2 = r;
        }
        return num1;
    }


    getGcd3(num1, num2) {
        return (num2 > 0 ? this.getGcd3(num2, num1 % num2) : num1)
    };
}