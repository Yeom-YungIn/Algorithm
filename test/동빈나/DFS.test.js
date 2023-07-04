const {DFS} = require("../../src/동빈나/DFS")

test('DFS Test', () => {
    console.time()
    const graph = [[1, 2, 4], [0, 5], [0, 5], [4], [0, 3], [1, 2]];
    const visited = Array(7).fill(false);
    DFS.dfs(graph, 0, visited);
    console.timeEnd()
})

test('dfs2 Test', () => {
    console.time()
    DFS.;
    console.timeEnd()
})
