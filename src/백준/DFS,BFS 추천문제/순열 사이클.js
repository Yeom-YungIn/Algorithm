
module.exports.n10451 = {
    n10451: () => {
        const fs = require('fs')
        const input = fs.readFileSync('/dev/stdin').toString().split('\n')
        const T = Number(input[0])
        input.shift()

        for (let k = 0; k < T; k ++) {
            let N = Number(input.shift())
            const array = input.shift().split(' ').map(x => Number(x))
            array.unshift(0)

            let answer = 0
            let visited = new Array(N + 1).fill(false)

            const dfs = (v) => {
                if(visited === true)return;
                visited[v] = true
                const next = array[v]
                if (!visited[next]) {
                    dfs(next)

                }
            }
            for (let i = 1; i <= N ; i ++) {
                if(!visited[i]) {
                    dfs(i)
                    answer ++;
                }
            }
            console.log(answer)
        }
    }
}