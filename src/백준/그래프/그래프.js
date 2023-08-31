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
    },

    n1238: () => {
        const input = '4 8 2\n1 2 4\n1 3 2\n1 4 7\n2 1 1\n2 3 5\n3 1 2\n3 4 4\n4 2 3'.toString().trim().split('\n');
        const [n, m, x] = input.shift().split(' ').map(Number);
        const list = input.map(x => x.trim().split(' ').map(Number));

        const allDistances = {};

        const dijkstra = (n, start, graph) => {
            const distance = Array.from({ length: n + 1 }, () => Infinity);
            const q = [];
            distance[start] = 0;
            q.push([start, 0]);

            while (q.length>0) {
                const [curr, weight] = q.shift();
                for (const [dest, cost] of graph[curr]) {
                    if (distance[dest] > weight + cost) {
                        distance[dest] = weight + cost;
                        q.push([dest,distance[dest]]);
                    }
                }
            }
            allDistances[start] = distance;
        };

        const graph = {};
        let answer = 0;
        for (let i = 1; i <= n; i++) {
            graph[i] = [];
        }
        console.log(graph)
        list.forEach(([from, to, val]) => graph[from].push([to, val]));

        for (let start = 1; start <= n; start++) {
            dijkstra(n, start, graph);
        }

        console.log(allDistances)
        for (let start = 1; start <= n; start++) {
            answer = Math.max(answer, allDistances[start][x] + allDistances[x][start]);
        }
        console.log(answer);
    },

    n13549 : () => {
        let [x, k] = '5 17'.toString().trim().split(' ').map(Number);

        function bfs(N, K) {
            const MAX = 100000; // 최대 위치
            const visited = new Array(MAX + 1).fill(false);
            const q = [];

            q.push([N, 0]);
            visited[N] = true;

            while (q.length > 0) {
                const [cur, time] = q.shift();

                if (cur === K) {
                    return time;
                }

                if (cur * 2 <= MAX && !visited[cur * 2]) {
                    q.push([cur * 2, time]);
                    visited[cur * 2] = true;
                }

                if (cur - 1 >= 0 && !visited[cur - 1]) {
                    q.push([cur - 1, time + 1]);
                    visited[cur - 1] = true;
                }

                if (cur + 1 <= MAX && !visited[cur + 1]) {
                    q.push([cur + 1, time + 1]);
                    visited[cur + 1] = true;
                }
            }
        }

        console.log(bfs(x,k))
    }
}