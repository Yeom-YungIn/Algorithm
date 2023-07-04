const {BFS} = require("../../src/동빈나/BFS")

test('BFS Test', () => {
    console.time()
    const graph = [[1, 2, 4], [0, 5], [0, 5], [4], [0, 3], [1, 2]];
    const visited = Array(6).fill(false);
    BFS.bfs(graph, 0);
    console.timeEnd()
})

test('BFS2 Test', () => {
    console.time()
    BFS.bfs2(3,3,'110\n010\n011');
    console.timeEnd()
})
