import {Greedy} from "../../src/greedy/greedy";

describe('Greedy algorithm test', function () {
    let greedy;
    beforeEach(() => {
        greedy = new Greedy();
    })

    test('n11047번', () => {
        expect(greedy.n11047()).toEqual(6);
    })

    test('n1541번', () => {
        expect(typeof greedy.n1541).toBe('function')
        expect(greedy.n1541()).toEqual(-35);
    })
});
