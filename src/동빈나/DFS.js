module.exports.DFS = {
    dfs: function dfs(graph, v, visited) {
        // 현재 노드를 방문 처리
        visited[v] = true;
        console.log(v);

        // 현재 노드와 연결된 다른 노드를 재귀적으로 방문
        for (let node of graph[v]) {
            if (!visited[node]) {
                dfs(graph, node, visited);
            }
        }
    },

    dfs2: dfs2 = () => {
        function solution(N, M, ices) {
            const graph = [];
            ices.split('\n').forEach(ice => {
                ice = ice.split('').map(i => Number(i));
                graph.push(ice);
            });
            console.log(graph)
            function dfs(x, y) {
                if (x <= -1 || x >= N || y <= -1 || y >= M) {
                    return false;
                }
                if (graph[x][y] === 0) {
                    graph[x][y] = 1;
                    dfs(x - 1, y);
                    dfs(x, y - 1);
                    dfs(x + 1, y);
                    dfs(x, y + 1);
                    return true;
                }
                return false;
            }

            let answer = 0;
            for (let i = 0; i < N; i++) {
                for (let j = 0; j < M; j++) {
                    if (dfs(i, j)) {
                        answer += 1;
                    }
                }
            }

            console.log(answer);
        }
        solution(4, 5, '0001\n1111\n1111\n0011\n0011')
    }
}