import {ArraySol} from "../../src/array/array";

describe('Arr', () => {
    let sol;
    beforeEach(() => {
        sol = new ArraySol();
    })
    it('배열의 최댓값', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 89]
        console.log(sol.getMaxByReduce(arr))
    })

    it('중복 값 찾기', () => {
        const arr = [1, 2, 2, 4, 4, 6, 7, 8, 89]
        console.log(sol.getDuplicate(arr))
        console.log(sol.getDuplicateByLoop(arr))
    })
})