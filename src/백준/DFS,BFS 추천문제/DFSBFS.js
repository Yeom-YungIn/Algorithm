
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
    }
}
