const n2805 = () => {
    console.time('1')
    // const fs = '4 7\n20 15 10 17'
    // const input = fs.toString().trim().split('\n')
    const input = require("fs").readFileSync("/dev/stdin").toString().split('\n');
    const [N, M] = input.shift().split(' ').map(Number);
    const list = input.split(' ').map(Number);

    const bs = (list, target, start, end) => {
        while(start <= end) {
            const mid = Math.floor((start+end)/2);
            let sum = 0;
            list.forEach(x => {
                if(x > mid) {
                    sum += (x - mid);
                };
            })
            if(sum >= target) {
                start = mid + 1
            } else {
                end = mid - 1
            }
        }
        return end
    }

    const result = bs(list, M, 0, Math.max(...list) + 1)
    console.log(result)
    console.timeEnd('1')
}

const n2512 = () => {
    const input = '5\n70 80 30 40 100\n450'.split('\n');
    // const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
    const N = input[0];
    const list = input[1].split(' ').map(Number)
    const total = Number(input[2]);
    const bs = (list, target, start ,end) => {
        while (start <= end) {
            const mid = Math.floor((start + end) / 2);
            let max = 0;
            list.forEach(x => {
                if(x >= mid) {
                    max += mid;
                }else {
                    max += x;
                }
            })
            if(total >= max) {
                start = mid +1;
            } else {
                end = mid -1;
            }
        }
        return end;
    }

    const result = bs(list, total, 0, Math.max(...list))
    console.log(result)
}

const n2343 = () => {
    const input = '9 3\n1 2 3 4 5 6 7 8 9'.toString().split('\n');
    // const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
    const [N, M] = input[0].split(' ').map(Number);
    const list = input[1].split(' ').map(Number);

    const bs = (list, target, start, end) => {
        while (start <= end) {
            const mid = Math.floor((start + end) / 2);
            let count = 1;
            let sum = 0;

            for (let i = 0; i < N; i++) {
                if (sum + list[i] > mid) {
                    count++;
                    sum = 0;
                }
                sum += list[i];
            }

            if (count > target) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
        return start;
    };

    const result = bs(list, M, Math.max(...list), list.reduce((sum, x) => sum + x));
    console.log(result);

}

const n6236 = () => {
    const input = '7 5\n100\n400\n300\n100\n500\n101\n400'.toString().split('\n');
    // const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
    const [N, M] = input.shift().toString().split(' ').map(Number);
    const list = input.map(Number);

    let start = Math.max(...list), end = list.reduce((acc, x) => acc += x);
    while (start <= end) {
        let mid = Math.floor((start+end) / 2);
        let sum = 0, cnt = 0;
        for (let i =0; i < N; i ++) {
            if (sum + list[i] > mid) {
                cnt++;
                sum = 0;
            }
            sum += list[i];
        }
        if(sum > 0) {
            cnt ++;
        }

        if (cnt <= M) {
            end = mid -1;
        } else {
            start = mid +1;
        }
    }

    console.log(start)
}

const n1654 = () => {
    const input = '4 11\n802\n743\n457\n539'.toString().split('\n');
    const [N, K] = input.shift().toString().split(' ').map(Number);
    const list = input.map(Number);

    let start = 1, end = Math.max(...list)

    while (start <= end) {
        let mid = Math.floor((start+end) / 2);
        let cnt = 0;
        for (let i = 0; i < N; i ++) {
            cnt += Math.floor(list[i]/mid)
        }
        if(cnt >= K) {
            start = mid +1;
        }else {
            end = mid -1;
        }
    }
    console.log(end);
}

const n1920 = () => {
    const input = '5\n4 1 5 2 3\n5\n1 3 7 9 5'.toString().split('\n');
    const N = Number(input.shift());
    const A = input.shift().split(' ').map(Number).sort();
    const M = Number(input.shift());
    const list = input.shift().split(' ').map(Number);

    const bs = (list, target, start, end) => {
        while (start <= end) {
            const mid = Math.floor((start + end) / 2);
            if (target == list[mid]) return 1;
            if (target > list[mid]) {
                start = mid + 1;
            } else end = mid - 1
        }
        return 0;
    }
    const answer = [];
    for (let i = 0; i < M; i ++) {
        answer.push(bs(A, list[i], 0, N))
    }
    console.log(answer.join('\n'))
}

const n10816 = () => {
    const input = '10\n6 3 2 10 10 10 -10 -10 7 3\n8\n10 9 -5 2 3 4 5 -10'.toString().split('\n');
    const N = Number(input.shift());
    const A = input.shift().split(' ').map(Number).sort((a,b) => a-b);
    const M = Number(input.shift());
    const B = input.shift().split(' ').map(Number);
    const answer = [];
    const map = new Map();
    A.forEach(x => {
        // if(map.has(x)) map.set(x, map.get(x) + 1);
        // else map.set(x, 1);
        map.has(x) ? map.set(x, map.get(x) + 1) : map.set(x, 1)
    });

    B.forEach(x => answer.push(map.get(x)|0));
    console.log(answer.join('\n'))
}


const n1300 = () => {
    const input = '3\n7'.toString();
    const [N, k] = input.split('\n').map(Number);

    let start = 1;
    let end = N * N;
    let answer = N * N;

    while (start <= end) {
        const mid = Math.floor((start+end) / 2);
        let cnt = 0;
        for (let i = 1; i <= N; i ++) {
            cnt += Math.min(Math.floor(mid/i), N)
        }

        if(cnt<k){
            start = mid + 1;
        } else {
            if (answer > mid) answer = mid;
            end = mid - 1;
        }
    }
    console.log(answer)
}

const n2110 = () => {
    const input = '5 3\n1\n2\n8\n4\n9'.toString().trim().split('\n');
    const [N, C] = input.shift().split(' ').map(Number);
    const list = input.map(Number).sort((a,b) => a-b);
    let start = 1, end = Math.max(...list);
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        let cnt = 1;
        let prev = list[0]
        for (const cur of list) {
            if (cur - prev < mid) continue;
            else {
                prev = cur;
                cnt += 1
            }
        }

        if(cnt < C) {
            end = mid - 1
        } else {
            start = mid + 1
        };
    }
    console.log(end)
}

module.exports = {
    n2805,
    n2512,
    n2343,
    n1300,
    n6236,
    n1654,
    n1920,
    n10816,
    n2110
}