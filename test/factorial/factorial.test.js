import {Factorial} from "../../src/factorial/factorial";

describe('factorial', () => {
    let factorial;
    beforeEach(() => {
        factorial = new Factorial();
    });

    it('factorial Recursive',() => {
        expect(factorial.factorialRecursive(4)).toBe(24);
    })
});