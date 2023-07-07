const fs = require("fs");
module.exports.maze = {
    n2178: n2178 = () => {
            // const fs = require ('fs')
            // const input = fs.readFileSync('/dev/stdin').toString().split('\n')
            const fs = '4 6\n110110\n110110\n111111\n111101'
            const input = fs.toString().split('\n')
            const [N,M] = input[0].split(' ').map(Number)
            const maze = input.map((row) => row.split('').map(Number)).shift()
            const dx = [-1,1,0,0];
            const dy = [0,0,-1,1];
            let queue = []
            let x = 0, y=0;
            queue.push([x,y])
            while (queue.length !== 0 ) {
                const temp = queue.shift();
                x = temp[0]
                x = temp[1]
            }
            for(let i = 0; i < 4; i ++) {
                const nx = x + dx[i]
                const ny = y + dy[i]
                if(nx < 0 || ny < 0 || nx >= N || ny || M) continue;
                if(maze[nx][ny] === 0) continue;
                if(maze[nx][ny]) {
                    maze[nx][ny] = maze[x][y] + 1
                    queue.push([nx,ny])
                }
            }
        }
}