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
    },

    n2468: () => {
        const input = '5\n6 8 2 6 2\n3 2 3 4 6\n6 7 3 3 2\n7 2 5 3 6\n8 9 5 2 7'.toString().trim().split('\n');
        const n = Number(input.shift());
        const map = input.map(x => x.split(' ').map(Number));
        const move = [[-1, 0], [1, 0], [0, -1], [0, 1]];
        const max = Math.max(...map.flat())
        const answer = [];
        let maxSafeArea = 0;
        const dfs = (limit, i, j, visited) => {
            if (!visited[i][j]) visited[i][j] = true;

            for (const [dx, dy] of move) {
                const nx = i + dx, ny = j + dy;
                if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;
                if (!visited[nx][ny] && map[nx][ny] === limit) {
                    dfs(limit, nx, ny, visited);
                }
            }
        }

        for (let k = 0; k <= max; k++) {
            let cnt = 0;
            const visited = Array.from({ length: n }, () => Array(n).fill(false));
            for (let i = 0; i < n; i++) {
                for (let j = 0; j < n; j++) {
                    if (!visited[i][j] && map[i][j] > k) {
                        dfs(k, i, j, visited);
                        cnt++;
                    }
                }
            }
            maxSafeArea = Math.max(maxSafeArea, cnt);
        }
        console.log(maxSafeArea);
    },

    n4485 : () => {
        const input = '5\n3 7 2 0 1\n2 8 0 9 1\n1 2 1 8 1\n9 8 9 2 0\n3 6 5 1 5\n7\n9 0 5 1 1 5 3\n4 1 2 1 6 5 3\n0 7 6 1 6 8 5\n1 1 7 8 3 2 3\n9 4 0 7 6 4 1\n5 8 3 2 4 8 3\n7 4 8 4 8 3 4\n0'.toString().split('\n');
        // const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
        const answerList = []
        let cnt = 0;
        while (input.length) {
            const n = Number(input.shift());
            if (n == 0) break;
            let map = Array(n).fill([])
            for (let i = 0; i < n; i++) {
                map[i] = input.shift().toString().split(' ').map(Number)
            }
            const visited = Array.from({length: n}, () => Array(n).fill(0));
            const answer = Array.from({length: n}, () => Array(n).fill(125*125));
            const move = [[-1, 0], [1, 0], [0, -1], [0, 1]];

            const bfs = () => {
                const q = [[0, 0, 5]];
                answer[0][0] = answer[0][0] > map[0][0] ? map[0][0] : answer[0][0];
                visited[0][0] =1;
                while (q.length) {
                    const [x, y, val] = q.shift();
                    for (const next of move) {
                        const nx = x + next[0], ny = y + next[1];
                        if(nx < 0 || ny < 0 || nx >= n || ny >= n) continue;
                        if(!visited[nx][ny]) {
                            visited[nx][ny] = 1;
                            answer[nx][ny] = answer[nx][ny] > map[nx][ny] + answer[x][y] ? map[nx][ny] + answer[x][y] : answer[nx][ny];
                            q.push([nx, ny, answer[nx][ny]]);
                        }
                    }
                    q.sort((a, b) => a[2] - b[2]);
                }
            }

            bfs(), cnt ++;
            answerList.push( `Problem ${cnt}: ` + answer[n-1][n-1])
        }
        console.log(answerList.join('\n'))
    },

    n11657: () => {
        function bellmanFord(n, edges) {
            const INF = Infinity;
            const dist = new Array(n + 1).fill(INF);
            dist[1] = 0;

            for (let i = 1; i <= n - 1; i++) {
                for (const [from, to, cost] of edges) {
                    if (dist[from] !== INF && dist[to] > dist[from] + cost) {
                        dist[to] = dist[from] + cost;
                    }
                }
            }

            for (const [from, to, cost] of edges) {
                if (dist[from] !== INF && dist[to] > dist[from] + cost) {
                    return [-1];
                }
            }

            for (let i = 1; i <= n; i++) {
                if (dist[i] === INF) {
                    dist[i] = -1;
                }
            }

            return dist.slice(2);
        }

        function solution(input) {
            const [n, m] = input[0].split(" ").map(Number);
            const edges = [];

            for (let i = 1; i <= m; i++) {
                const [a, b, c] = input[i].split(" ").map(Number);
                edges.push([a, b, c]);
            }

            const result = bellmanFord(n, edges);

            for (const dist of result) {
                console.log(dist);
            }
        }

        // const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
        const input = '3 4\n1 2 4\n1 3 3\n2 3 -4\n3 1 -2'.toString().trim().split("\n");
        solution(input);

    },

    n11403: () => {
        const input = '7\n0 0 0 1 0 0 0\n0 0 0 0 0 0 1\n0 0 0 0 0 0 0\n0 0 0 0 1 1 0\n1 0 0 0 0 0 0\n0 0 0 0 0 0 1\n0 0 1 0 0 0 0'.toString().trim().split('\n');
        let N = +input.shift();
        let arr = [];

        for (const row of input) {
            arr.push(row.split(" ").map(Number));
        }

        for (let k = 0; k < N; k++) {
            for (let i = 0; i < N; i++) {
                for (let j = 0; j < N; j++) {
                    if (arr[i][k] && arr[k][j]) {
                        arr[i][j] = 1;
                    }
                }
            }
        }

        for (let i = 0; i < N; i++) {
            console.log(arr[i].join(" "));
        }
    }
}