module.exports.n1697 = {
    n1697: () => {
        const readline = require("readline");

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        const sol = (N, K) => {
            const visited = Array.from({ length: 100001 });
            const bfs = (N) => {
                let queue = [];
                queue.push([N, 0]);
                visited[N] = true;
                while (queue.length) {
                    const [cur, time] = queue.shift();
                    if (cur === K) {
                        return time;
                    }
                    for (const next of [cur - 1, cur + 1, cur * 2]) {
                        if (!visited[next] && next >= 0 && next <= 100000) {
                            visited[next] = true;
                            queue.push([next, time + 1]);
                        }
                    }
                }
            };
            return bfs(N);
        };

        rl.on("line", (input) => {
            const [N, K] = input.split(" ").map(x => Number(x));
            const result = sol(N, K);
            console.log(result);
            rl.close();
        });
    }
}