module.exports.BFS = {
    bfs: function bfs(graph, startNode){
        const visited = []; // 탐색을 마친 노드들
        let needVisit = []; // 탐색해야할 노드들

        needVisit.push(startNode); // 노드 탐색 시작

        while (needVisit.length !== 0) { // 탐색해야할 노드가 남아있다면
            const node = needVisit.shift(); // queue이기 때문에 선입선출, shift()를 사용한다.
            if (!visited.includes(node)) { // 해당 노드가 탐색된 적 없다면
                visited.push(node);
                needVisit = [...needVisit, ...graph[node]];
            }
        }
        console.log(visited)
        return visited;
    },

    bfs2: bfs2 = () => {
        const solution = (n,m, maze) => {
            maze = maze.split('\n').map(m => {
                m = m.split(''/).map(n => Number(n))
                return m
            })

            const dx = [-1,1,0,0]
            const dy = [0,0,-1,1]

            const queue = []
            let x = 0; y=0;
            queue.push([x,y])
            while (queue.length !== 0) {
                const temp = queue.shift();
                x = temp[0]
                y = temp[1]
            }

            for(let i = 0; i < 4; i ++) {
                const nx = x + dx[i]
                const ny = y + dy[i]

                if(nx < 0 || ny < 0 || nx >= n || ny >= m ) {
                    continue;
                }
                if(maze[nx][ny] ===0) {
                    continue;
                }
                if(maze[nx][ny] ===1) {
                    maze[nx][ny] = maze[x][y] + 1
                    queue.push([nx,ny])
                }
            }
        }
        console.log(maze[n-1][m-1])

        solution()
    }
}