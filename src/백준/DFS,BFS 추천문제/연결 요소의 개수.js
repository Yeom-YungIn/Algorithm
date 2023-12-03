
module.exports.n11724 = {
    solve() {
        // const fs = require('fs')
        const fs = '6 5\n1 2\n2 5\n5 1\n3 4\n4 6'.toString().trim();
        const [[N, M], ...input] = fs.split('\n').map(x => x.split(' ').map(Number));
        console.log(N, M, input);

        const visited = Array(N + 1).fill(false);
        const graph = Array.from({length: N + 1}, () => []);

        input.forEach(([a, b]) => {
            graph[a].push(b);
            graph[b].push(a);
        })

        let result = 0;
        const dfs = (n) => {
            visited[n] = true;
            graph[n].forEach(x => {
                if (!visited[x]) {
                    dfs(x);
                }
            })
        }

        for (let i = 1; i <= N; i++) {
            if (!visited[i]) {
                dfs(i);
                result++;
            }
        }

        console.log(result);
    },
}
