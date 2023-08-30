module.exports.graph = {
    /** 유니온 파인드 */
    n1717: () => {
        const input = '7 8\n0 1 3\n1 1 7\n0 7 6\n1 7 1\n0 3 7\n0 4 2\n0 1 1\n1 1 1'.toString().split('\n');
        // const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
        const [n, m] = input.shift().split(' ').map(Number);
        const list = input.map(x => x.split(' ').map(Number));
        const answer = [];
        let parent = Array.from({length: n + 1}, (_, idx) => idx);

        const find = (x) => {
            if(parent[x] === x) return x;
            parent[x] = find(parent[x]);
            return parent[x];
        }

        const union = (x,y) => {
            const a = find(x);
            const b = find(y);
            if(a != b) {
                parent[b] = a;
            }
        }

        for (const [cal, a, b] of list) {
            if (cal === 0) union(a, b);
            else answer.push(find(a) === find(b) ? "YES" : "NO")
            console.log(parent)
        }
        console.log(answer.join("\n"));
    },
    /** 위상정렬 */
    n2252: () => {
        let [[N], ...I] = '4 2\n4 2\n3 1'.toString().trim().split('\n').map(e => e.split(' ').map(Number))
        const graph = [...Array(N + 1)].map(_ => [])

        I.forEach(([from, to]) => graph[from].push(to))
        const [answer, visited] = [[], Array(N + 1).fill(0)]
        function dfs(curr) {
            visited[curr] = 1
            for (const next of graph[curr]) {
                if (!visited[next]) dfs(next)
            }
            answer.push(curr)
        }
        for (let i = 1; i <= N; i++) !visited[i] && dfs(i)
        console.log(answer.reverse().join(' '))
    }
}