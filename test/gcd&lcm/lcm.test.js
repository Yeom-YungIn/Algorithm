import {Lcm} from "../../src/gcd&lcm/lcm";


describe('최소공배수', () => {
    let lcm;
    beforeEach(() => {
        lcm = new Lcm();
    })

    it('getGcd', () => {
        const result = lcm.getLcm(5, 7);
        expect(result).toEqual(35);
    })
})