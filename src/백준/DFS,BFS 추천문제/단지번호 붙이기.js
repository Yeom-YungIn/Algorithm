const fs = require("fs");

module.exports.n2667 = {
    n2667: () => {
        // const fs = require('fs')
        // const input = fs.readFileSync('/dev/stdin').toString().split('\n')
        const fs = '7\n0110100\n0110101\n1110101\n0000111\n0100000\n0111110\n0111000'
        const input = fs.toString().split('\n')
        const N = Number(input.shift())
        const map = input.map((row) => row.split('').map(x => Number(x)))

        const dx = [-1,1,0,0]
        const dy = [0,0,-1,1]
        const cnt_arr = [];

        const bfs = (x,y) => {
            let cnt = 0;
            let queue = [[x, y]]
            while (queue.length) {
                [x,y] = queue.shift()
                if(!map[x][y]) continue
                map[x][y] = 0
                cnt ++
                for (let i = 0; i < 4; i ++) {
                    const nx = x + dx[i]
                    const ny = y + dy[i]
                    if (nx < 0 || ny < 0 || nx >= N || ny >= N) continue;
                    if (map[nx][ny]) queue.push([nx, ny])
                }
            }
            cnt_arr.push(cnt)
        }

        for (let i = 0 ; i < N; i ++) {
            for (let j = 0 ; j < N; j ++) {
                if(map[i][j]) bfs(i,j)
            }
        }

        console.log(cnt_arr.length)
        cnt_arr.sort((a,b) => a-b).forEach(e => console.log(e+'\n'))
    }
}