import {Sol} from "../../src/gcd&lcm/sol";


describe('GCD & LCM', () => {
    let sol;
    beforeEach(() => {
        sol = new Sol();
    })

    it('getGcd', () => {
        const result = sol.getGcd(5, 10);
        expect(result).toEqual(5)
    });

    it('getLcm', () => {
        const result = sol.getLcm(7, 10);
        expect(result).toEqual(70)
    });
})