/*
    @URL: https://www.acmicpc.net/workbook/view/1833
 */

/*
    https://www.acmicpc.net/problem/1260
 */
module.exports.DFSBFS = {
    n1260: n1260 = () => {
        const fs = '4 5 1\n1 2\n1 3\n1 4\n2 4\n3 4'
        let input = fs.toString().split('\n')

        let [n, m, v] = input[0].split(" ").map(Number)
        let graph = new Array(n)
        for (let i = 0; i <= n; i ++) {
            graph[i] = [];
        }

        for(let j = 0; j < m; j ++) {
            let [from, to] = input[j+1].split(" ").map(Number);
            graph[from].push(to);
            graph[to].push(from);
        }
        console.log(graph)

        graph.forEach((element) => {
            element.sort((a,b) => a-b);
        })

        console.log(graph)

        let visited = new Array(n).fill(false)
        let anwer_dfs = [];
        const dfs = (v) => {
            if(visited[v])return;
            visited[v] = true;
            anwer_dfs.push(v)
            for(let i = 0; i < graph[v].length; i ++) {
                if(!visited[i]){
                    dfs(i)
                }
            }
        }
        dfs(v);
        console.log('dfs',anwer_dfs.join(" "))

        let answer_bfs = []
        visited.fill(false);
        const bfs = (v) => {
            let queue = [v]
            while (queue.length) {
                let x = queue.shift();
                if (visited[x] === 1) {
                    continue;
                }
                visited[x] = 1
                anwer_dfs.push(x);
                for(let i = 0; i < graph[x].length; i ++) {
                    let next = graph[x][i];
                    if(visited[next] === false) {
                        queue.push(next)
                    }
                }
            }
        }
        bfs(v)
        console.log('bfs',answer_bfs.join(" "))
    }
}