
module.exports.BFSDFS = {
    n24479:() => {
        const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
        const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
        const [N, M, R] = input.shift().split(' ').map(Number);
        const arr = input.map((v) => v.split(' ').map(Number));
        const graph = [...Array(N + 1)].map(() => []);
        const visited = Array(N).fill(0);
        let cnt = 1;

        arr.map(([from, to]) => {
            graph[from].push(to);
            graph[to].push(from);
        });

        graph.map((v) => v.sort((a, b) => a - b));

        const dfs = (node) => {
            if (!visited[node - 1]) {
                visited[node - 1] = cnt;
                cnt++;
                for (const next of graph[node]) dfs(next);
            }
        };

        dfs(R);

        console.log(visited.join('\n'));
    },

    n24480: () => {
        const input = '5 5 1\n1 4\n1 2\n2 3\n2 4\n3 4'.toString().trim().split('\n');
        const [N, M, R] = input.shift().split(' ').map(Number);
        const list = input.map(v => v.split(' ').map(Number))
        const graph = Array.from({length:N+1}, () => [])
        // const graph = [...Array(N + 1)].map(() => []);
        const visited = Array(N).fill(0);
        const answer = Array(M).fill(0)

        list.map(([from, to]) => {
            graph[from].push(to);
            graph[to].push(from);
        });

        graph.map(v => v.sort((a,b) => b - a))
        let cnt = 1;
        const dfs = ((node) => {
            if(!visited[node - 1]) {
                visited[node - 1] = cnt;
                cnt ++;
                for (const next of graph[node]) dfs(next);
            }
        })

        dfs(R)
        console.log(visited.join('\n'))
    },

    n24444: () => {
        console.time("Performance Time");
        const input = '5 5 1\n1 4\n1 2\n2 3\n2 4\n3 4'.toString().split('\n');
        const [N, M, R] = input.shift().split(' ').map(Number);
        const list = input.map(x => x.split(' ').map(Number));
        // let graph = [...Array(N + 1)].map(() => [])
        const graph = Array.from({ length: N + 1 }, () => []);
        let cnt = 1;
        list.map(([from, to]) => {
            graph[from].push(to);
            graph[to].push(from);
        })
        graph.map(x => x.sort((a,b) => a - b))
        const visited = Array(N+1).fill(0)
        let queue = [R];
        visited[R] = 1;
        const bfs = () => {
            while (queue.length) {
                let cur = queue.shift();
                for (const next of graph[cur]) {
                    if (!visited[next]) {
                        queue.push(next);
                        visited[next] = ++cnt;
                    }
                }
            }
        }
        bfs(R)
        console.log(visited.slice(1).join('\n'))
        console.timeEnd("Performance Time");
    },

    n24445: () => {
        const input = '5 5 1\n1 4\n1 2\n2 3\n2 4\n3 4'.toString().split('\n');
        const [N, M, R] = input.shift().split(' ').map(Number);
        const list = input.map(x => x.split(' ').map(Number));
        const graph = Array.from({length: N + 1}, () => []);
        const visited = Array(N + 1).fill(0);

        list.map(([from, to]) => {
            graph[from].push(to);
            graph[to].push(from);
        })

        graph.map(x => x.sort((a,b) => b - a))

        let queue = [R], cnt = 1;
        visited[R] = 1;
        while (queue.length) {
            const cur = queue.shift();
            for (const next of graph[cur]) {
                if (!visited[next]) {
                    queue.push(next);
                    visited[next] = ++cnt;
                }
            }
        }

        console.log(visited.slice(1).join('\n'));
    },

    n2606: () => {
        // const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
        // const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
        const input = '7\n6\n1 2\n2 3\n1 5\n5 2\n5 6\n4 7'.toString().split('\n');
        const N = Number(input.shift()), M = Number(input.shift());
        const list = input.map(x => x.split(' ').map(Number));
        const graph = Array.from({length: N + 1}, () => []);
        const visited = Array(M + 1).fill(0);

        list.map(([from, to]) => {
            graph[from].push(to);
            graph[to].push(from);
        })

        let queue = [], cnt = 0;
        queue.push(1);
        visited[1] = 1;

        while (queue.length) {
            const cur = queue.shift();
            for (const next of graph[cur]) {
                if(!visited[next]) {
                    visited[next] = 1;
                    queue.push(next)
                    cnt++;
                }
            }
        }

        console.log(cnt);
    },

    n2667: () => {
        const input = '7\n0110100\n0110101\n1110101\n0000111\n0100000\n0111110\n0111000'.toString().split('\n');
        const N = Number(input.shift());
        const map = input.map(x => x.split('').map(Number));
        const move = [[-1, 0], [1, 0], [0, -1], [0, 1]];
        const visited = Array.from({length: N}, () => Array(N).fill(0))
        let cnt = 0, cur = [0,0];
        const answer = [];
        const dfs = (x,y) => {
            if(visited[x][y]) return;
            visited[x][y] = 1;
            cnt ++;
            for (const val of move) {
                const nx = x + val[0], ny = y + val[1];
                if(nx < 0 || ny < 0 || nx >= N || ny >= N) continue;
                if(!visited[nx][ny] && map[nx][ny]) {
                    dfs(nx, ny)
                }
            }
        }
        for (let i = 0; i < N; i ++) {
            for (let j = 0; j < N; j ++) {
                if(!visited[i][j] && map[i][j]) {
                    cnt = 0;
                    dfs(i,j)
                    answer.push(cnt)
                }
            }
        }
        answer.sort((a,b) => a-b)
        answer.unshift(answer.length)
        console.log(answer.join('\n'))
    },

    n1012: () => {
        const input = '2\n10 8 17\n0 0\n1 0\n1 1\n4 2\n4 3\n4 5\n2 4\n3 4\n7 4\n8 4\n9 4\n7 5\n8 5\n9 5\n7 6\n8 6\n9 6\n10 10 1\n5 5'.toString().trim().split('\n');
        const T = Number(input.shift());
        const answer = [];
        for (let i = 0; i < T; i ++) {
            const [M, N, K] = input.shift().split(' ').map(Number);
            let map = Array.from({length: M}, () => Array(N).fill(0))
            for (let j = 0; j < K; j ++) {
                const [x, y] = input.shift().split(' ').map(Number);
                map[x][y] = 1;
            }
            const visited = Array.from({length: M}, () => Array(N).fill(0))
            const move = [[-1, 0], [1, 0], [0, -1], [0, 1]];
            let queue = [], cnt = 0;

            const bfs = (a, b) => {
                queue.push([a, b]);
                while (queue.length) {
                    const [x,y] = queue.shift();
                    if(visited[x][y]) continue;
                    visited[x][y] = 1;
                    for (const val of move) {
                        const nx = x + val[0], ny = y + val[1];
                        if (nx < 0 || nx >= M || ny < 0 || ny >= N) continue;
                        if (map[nx][ny]) {
                            queue.push([nx, ny]);
                        };
                    }
                }
            }
            for (let k = 0; k < M; k ++) {
                for (let j = 0; j < N; j ++) {
                    if(!visited[k][j] && map[k][j]) {
                        cnt ++;
                        bfs(k,j)
                    }
                }
            }

            answer.push(cnt);
        }
        console.log(answer.join('\n'));
    },

    n7562: () => {
        const input = '3\n8\n0 0\n7 0\n100\n0 0\n30 50\n10\n1 1\n1 1'.toString().split('\n');
        const T = Number(input.shift());
        const answer = [];
        for (let j = 0; j < T; j ++) {
            const i = Number(input.shift());
            const move = [[-1, 2], [-1, -2], [-2, 1], [-2, -1], [1, 2],[1, -2],[2, 1],[2, -1]];
            const cur = input.shift().split(' ').map(Number), des = input.shift().split(' ').map(Number);
            const visited = Array.from({length: i}, () => Array(i).fill(0))

            const bfs = (n) => {
                let queue = [n];
                while (queue.length) {
                    let [x, y, depth] = queue.shift();
                    if(x === des[0] && y === des[1]) {
                       return answer.push(depth);
                    }
                    for (const val of move) {
                        const nx = x + val[0], ny = y + val[1];
                        if (nx < 0 || ny < 0 || nx >= i || ny >= i) continue;
                        if(!visited[nx][ny]) {
                            visited[nx][ny] = 1;
                            queue.push([nx, ny, depth + 1])
                        }
                    }
                }
            }
            bfs([cur[0], cur[1], 0]);
        }

        console.log(answer.join('\n'))
    }
}
