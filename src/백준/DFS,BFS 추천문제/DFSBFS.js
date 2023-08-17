
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
    }
}
