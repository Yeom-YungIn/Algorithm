module.exports.Tree = {
    n11725 : () => {
        // const [n, ...list] = '7\n1 6\n6 3\n3 5\n4 1\n2 4\n4 7'.toString().trim().split('\n').map(x => x.split(' ').map(Number));
        const [n, ...list] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(x => x.split(' ').map(Number));
        const graph = Array.from({length: n[0] + 1}, _ => []);
        const visited = Array(n + 1).fill(0);
        const answer = Array(n + 1).fill(0);
        list.forEach(([a, b]) => {
            graph[a].push(b)
            graph[b].push(a);
        })

        const q = [1];
        while (q.length) {
            const x = q.shift();
            visited[x] = 1;
            for (const next of graph[x]) {
                if (!visited[next]) {
                    answer[next] = x;
                    q.push(next);
                }
            }
        }
        answer.splice(0, 2);
        console.log(answer.join('\n'));
    }
}