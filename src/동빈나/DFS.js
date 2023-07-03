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

    iceDrink: iceDrink = (n, m) => {

    }
}