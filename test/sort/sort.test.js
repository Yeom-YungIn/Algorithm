import {Sort} from '../../src/sort/sort';


describe('Sort Test', function () {
    let sort;
    beforeEach(() => {
        sort = new Sort();
    })

    test('bubbleSort 테스트', () => {
        let arr = [1,2,3,5,4];
        console.info(sort.bubbleSort(arr));
        expect(sort.bubbleSort(arr)).toEqual(arr.sort((a,b) => a-b));
    })

    it('quickSort Test', () => {

        let array = new Array(100000);
        array.fill().forEach((_, index, arr) => {
            arr[index] = Math.floor(Math.random() * 100);
        });


        console.time('javascript sort')
        array.sort((a,b)=> a-b);
        console.timeEnd('javascript sort')
        console.time('quickSort')
        sort.quickSort(array);
        console.timeEnd('quickSort')
    })
});