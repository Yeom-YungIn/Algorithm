
export class Prime {
    isPrime(num) {
        if (num === 1) return false;
        const sqrtNum = Math.sqrt(num);
        for (let i = 2; i <= sqrtNum; i++) {
            if (num % i === 0) return false;
        }
        return true;
    };

    sieveOfEratosthenes(n) {
        const primes = new Array(n + 1).fill(true);
        primes[0] = primes[1] = false;

        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (primes[i]) {
                for (let j = i * i; j <= n; j += i) {
                    primes[j] = false;
                }
            }
        }

        const result = [];
        for (let i = 2; i <= n; i++) {
            if (primes[i]) {
                result.push(i);
            }
        }

        return result;
    }
}
