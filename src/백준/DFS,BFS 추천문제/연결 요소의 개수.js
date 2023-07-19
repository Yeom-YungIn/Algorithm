
module.exports.n11724 = {
    n11724: () => {
        // const fs = `6 5\n1 2\n2 5\n5 1\n3 4\n4 1`
        // const input = fs.toString().split('\n')
        const fs = require("fs")
        const input = fs.readdirSync('/dev/stdin').toString().split('\n')
        const [N, M] = input.shift().split(' ').map(x => Number(x))

        let cc = [[0,0]], cnt = 0;
        for(const arr of input) {
            const [a, b] = arr.split(' ').map(x => Number(x))
            cc.push([a,b])
        }
        let visited = Array.from({length: N + 1})

        const dfs = (i) => {
            const val = cc[i]
            for(let j = 0; j < val.length; j ++) {
                if(visited[val[j]] === 1) continue;
                visited[val[j]] = 1;
                dfs(cc[val[j]][j])
            }
        }

        for (let i = 0; i < M;  i++) {
            if(visited[i] === 1) continue;
            cnt ++
            dfs(i)
        }


        console.log(cnt)
    }
}
