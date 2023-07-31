const SortingTest = require('../../src/동빈나/Sorting')

test("정렬",() => {
    expect(SortingTest.selectSorting()).toBe('0123456789')
    expect(SortingTest.insertSorting()).toBe('0123456789')
    // expect(SortingTest.quickSorting()).toBe('0123456789')
    SortingTest.indexSorting()
})
