import {Gcd} from "../../src/gcd&lcm/gcd";


describe('최대공약수', () => {
    let gcd;
    beforeEach(() => {
        gcd = new Gcd();
    })

    it('getGcd', () => {
        const result = gcd.getGcd(5, 10);
        expect(result).toEqual(5)
    });
})