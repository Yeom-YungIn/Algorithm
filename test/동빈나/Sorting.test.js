const SortingTest = require('../../src/동빈나/Sorting')

test("정렬",() => {
    expect(SortingTest.selectSorting()).toBe('0123456789')
    expect(SortingTest.insertSorting()).toBe('0123456789')
    expect(SortingTest.quickSorting()).toBe('0123456789')
    expect(SortingTest.countingSorting()).toStrictEqual([7,5,9,0,3,1,6,2,9,1,4,8,0,5,2].sort())
    expect(SortingTest.sol()).toBe(26)
})
