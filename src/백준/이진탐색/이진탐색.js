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

module.exports = {
    n2805,
    n2512,
    n2343
}