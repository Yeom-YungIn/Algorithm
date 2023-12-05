/**
 * https://www.acmicpc.net/problem/2178
 */
module.exports.maze = {
    n2178: () => {
        // const fs = '7 7\n1011111\n1110001\n1000001\n1000001\n1000001\n1000001\n1111111';
        const fs = require('fs');
        const input = fs.readFileSync('/dev/stdin').toString().split('\n');
        const [n, m] = input.shift().split(' ').map(Number);
        const map = input.map(x => x.toString().split('').map(Number));
        const visited = Array.from({length: n}, () => Array(m).fill(false));

        const queue = [[0,0]];
        visited[0][0] = true;
        const move = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        while (queue.length > 0) {
            const [x, y] = queue.shift();
            for (let i = 0; i <= 3; i ++) {
                const [nx, ny] = [x + move[i][0], y + move[i][1]];
                if(nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
                if (!visited[nx][ny] && map[nx][ny]) {
                    visited[nx][ny] = true;
                    map[nx][ny] = map[x][y] + 1;
                    queue.push([nx, ny]);
                }

            }
        }
        console.log(map[n-1][m-1]);
    }
}