const fs = require("fs");

/**
 * https://www.acmicpc.net/problem/2178
 */
module.exports.maze = {
    n2178: () => {
        // const fs = require ('fs')
        // const input = fs.readFileSync('/dev/stdin').toString().split('\n')
        const fs = '4 6\n101111\n001010\n101011\n111011'
        const input = fs.toString().split('\n')
        const [N,M] = input[0].split(' ').map(Number)
        const maze = input.map((row) => row.split('').map(Number))
        maze.shift()
        console.log(maze[0][0])
        let visited = Array.from({length: N}, () => Array(M).fill(0))
        visited[0][0] = 1
        console.log(visited)
        const dx = [-1,1,0,0];
        const dy = [0,0,-1,1];
        let queue = []
        let x = 0, y=0;
        queue.push([x,y])

        while (queue.length) {
            const temp = queue.shift();
            x = temp[0]
            y = temp[1]
            for(let i = 0; i < 4; i ++) {
                const nx = x + dx[i]
                const ny = y + dy[i]
                if(nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
                if(maze[nx][ny] && !visited[nx][ny]) {
                    visited[nx][ny] = visited[x][y] + 1
                    queue.push([nx,ny])
                }
            }
        }
        console.log(visited)
        console.log(visited[N-1][M-1])
    }
}