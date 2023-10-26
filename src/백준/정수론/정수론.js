const fs = require("fs");
module.exports.NumberTheory = {
    n1929: () => {
        const [n, m] = '3 16'.toString().trim().split(' ').map(Number);
        // const [n, m] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
        const arr = Array.from(Array(m+1).keys())
        for(let i=2; i<=Math.sqrt(m); i++){
            if(arr[i])
                for(let j = i*i; j<=m; j+=i) {
                    arr[j] = false;
                }
        }
        arr.splice(0,2,false,false)
        for(let i = n; i<=m; i++){
            if(arr[i]) console.log(arr[i])
        }
    },

    n11653 : () => {
        console.time("Performance Time");
        const N = '9991';

        const sol = (n) => {
            let i = 2, answer = [];
            while (n > 1) {
                if (n % i == 0) {
                    n /= i;
                    answer.push(i);
                }
                i++;
            }
            return answer;
        }

        console.log(sol(N).join('\n'))
        console.timeEnd("Performance Time");
    },

    n1037: () => {
        const fs = require('fs');
        const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
        const nums = input.map(v => v.split(' ').map(x => +x));
        const factor = nums[1]
        if (factor.length == 1) {
            console.log(factor[0] * factor[0])
        } else {
            factor.sort((a,b)=>a-b)
            console.log(factor[0] * factor[factor.length - 1])
        }
    },

    // n1037: () => {
    //   const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
    //     const A = Number(input.shift());
    //     const B = input.toString().split(' ').map(Number).sort((a,b)=> a-b);
    //     console.log(B[0] * B[A-1])
    // },

    n1978 : () => {
        const [c, nums] = '4\n1 3 5 7'.toString().split('\n');

        const isPrime = (n) => {
            if (n === 1) {
                return false;
            }
            for (let i = 2; i <= Math.sqrt(n); i++) {
                console.log(Math.sqrt(n))
                if (n % i === 0) {
                    return false;
                }
            }

            return true;
        }

        console.log(nums.split(' ').filter(v => isPrime(v)).length)

    },

    n1850: () => {
        const [a, b] =  require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);
        const num = (n) => {
            let c = ''
            for (let i = 0; i < n; i++) {
                c += '1'
            }
            return Number(c)
        }
        const sol = (n, m) => {
            let list = [n, m].map(x => num(x)).sort((a, b) => b - a);
            while (list.length > 1) {
                const mod = list[0] % list[1];
                if (mod > 0) {
                    list.push(mod);
                    list.shift();
                }
                if(mod == 0) return list[1];
            }
        }

        console.log(sol(a,b))
    },

    n2581: () => {
        // const [N, M] = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(Number);
        const [N, M] = '60\n100'.toString().split('\n').map(Number);
        let arr = Array(M-N);
        for (let i = 0; i <= (M-N); i ++) {
            arr[i] = i + N;
        }

        const isPrime = (n) => {
            if(n == 1) return false;
            for (let j = 2; j <= Math.sqrt(n); j ++) {
                if (n%j == 0) return false
            }
            return true;
        }
        arr = arr.filter(x => isPrime(x));
        console.log(arr)
        if (arr.length == 0) {
            console.log(-1)
        }else {
            console.log(arr.reduce((acc, cul) => acc += cul), Math.min(...arr));
        }
    },

    n4948: () => {
        const input = '1\n10\n13\n100\n1000\n10000\n100000\n0'.toString().split('\n').map(Number);
        const answer = [];
        const N = input.length;
        for (let i = 0; i < N; i ++) {
            const n = input.shift();
            if (n == 0) break;
            const arr = Array((2 * n - n));
            for (let j = 0; j < (2 * n - n); j ++) {
                arr[j] = j + n +1
            }
            const isPrime = (n) => {
                if (n == 1) return false;
                for (let i = 2; i <= Math.sqrt(n); i ++) {
                    if (n%i == 0) return false;
                }
                return true;
            }

            const result = arr.filter(x => isPrime(x));
            answer.push(result.length);
        }

        console.log(answer.join('\n'))
    },

    n2960: () => {
        const [N, K] = '15 12'.toString().split(' ').map(Number);
        // const [N, K] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);
        const arr = Array(N + 1);
        let answer = [];
        for (let i = 0; i <= N; i ++) {
            arr[i] = i;
        }
        for (let i = 2; i <= N; i++) {
            if(arr[i] == 0) continue;
            for (let j = i * 1; j <= N; j += i) {
                if (arr[j]) {
                    answer.push(arr[j]);
                    arr[j] = false
                }
            }
        }
        console.log(answer[K-1])
    },

    n16563: () => {
        const memory = process.memoryUsage().heapUsed / 1024 / 1024;
        console.log(`약 ${Math.round(memory * 100) / 100} MB의 메모리를 사용중입니다.`);
        console.time('n16563')
        const [n, ...k] = '5\n5 4 45 64 54'.toString().split('\n');

        const sol = (n) => {
            let answer = [];

                while (n % 2 === 0) {
                    answer.push(2);
                    n /= 2;
                }

                for (let i = 3; i * i <= n; i += 2) {
                    while (n % i === 0) {
                        answer.push(i);
                        n /= i;
                    }
                }

                if (n > 1) {
                    answer.push(n);
                }

            return answer.join(' ');
        }

        console.log(k.toString().split(' ').map(Number).map(v => sol(v)).join('\n'))
        console.timeEnd('n16563')
    },

    n17425: () => {
        const input = '5\n1\n2\n10\n70\n10000'.toString().trim().split('\n').map(Number);
        // const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
        const T = input.shift();
        const list = input;

        const answer = []
        for (let val of  list) {
            let sum = 0;
            for (let i =0; i<= val; i ++) {
                //[0,1,2,3,4,5,6,7,8,9,10]
                for(let j = 0; j <= i; j ++) {
                    if(j == 0) continue;
                    if (i%j === 0) {
                        sum += j;
                    }
                }
            }
            answer.push(sum)
        }
        console.log(answer.join('\n'));


        // const answer = []
        // for (let val of  list) {
        //     let sum = 0;
        //
        //     for (let i =0; i<= val; i ++) {
        //         let arr = Array(val+1).fill(1);
        //         for(let j = 1; j <= i; j ++) {
        //             if (arr[j]) {
        //                 if (i % j === 0) {
        //                     // console.log(j, i/j)
        //                     arr[j] = 0;
        //                     sum += j;
        //                     if(arr[i/j]) {
        //                         arr[i / j] = 0
        //                         sum += i / j;
        //                     }
        //                 }
        //                 arr[j] = 0;
        //             }
        //         }
        //     }
        //     answer.push(sum)
        // }
        // console.log(answer.join('\n'));
    }
}