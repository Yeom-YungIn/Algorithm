
module.exports.n2468 = {
    n2468: () => {
        // const fs = require('fs')
        // const input = fs.readFileSync('/dev/stdin').toString().split('\n')
        const fs = '5\n6 8 2 6 2\n3 2 3 4 6\n6 7 3 3 2\n7 2 5 3 6\n8 9 5 2 7'
        const input = fs.toString().split('\n')
        const N = Number(input.shift())
        const map = input.map((row) => row.split(' ').map(x => Number(x)))
        const maxVal = Math.max(...map.flat())
        const minVal = Math.min(...map.flat())
        let answer = []
        const dx = [-1,1,0,0]
        const dy = [0,0,-1,1]

        for (let i= 1; i < maxVal; i ++) {
            let x=0 , y=0
            let visited = Array.from({ length: N }, () => Array(N).fill(0))
            let cnt = 0
            const dfs = (x,y) => {
                visited[x][y] = 1
                for(let j = 0; j < 4 ; j ++) {
                    let nx = x + dx[j]
                    let ny = y + dy[j]
                    if (nx < 0 || ny < 0 || nx >= N || ny > N) continue;
                    if(visited[nx][ny] === 1) continue;
                    if(map[nx][ny] > i && visited[nx][ny] === 1) {
                        dfs(nx,ny)
                        cnt ++
                    }
                }
            }
            for (let n =0; n < N; n ++) {
                for (let m = 0; m < N; m ++) {
                    if(visited[n][m] === 1) continue;

                    dfs(n,m)
                }
            }
            answer.push(cnt)
        }
        answer = Math.max(...answer.flat())
        console.log(answer)
    }
}