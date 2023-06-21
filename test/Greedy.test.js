const {Greedy} = require("../src/동빈나/Greedy")

test('Greedy_gulid test', () => {
    console.time()
    console.log(Greedy.gulid())
    console.timeEnd()
})

test('Greedy_lrud test', () => {
    console.time()
    console.log(Greedy.lrud())
    console.timeEnd()
})

test('Greedy_time test', () => {
    console.time()
    console.log(Greedy.time())
    console.timeEnd()
})