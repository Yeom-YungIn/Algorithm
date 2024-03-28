import {Prime} from "../../src/prime/prime";

describe('소수 구하기', () => {
    let prime;
    beforeEach(() => {
        prime = new Prime();
    })

    it('isPrime', () => {
        const number = 9;
        const result = prime.sieveOfEratosthenes(number);
        expect(typeof result).toBe('object');
        expect(result).toEqual([2, 3, 5, 7]);
    })
})