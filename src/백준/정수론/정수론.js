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

    n11653: () => {
        console.time("Performance Time");
        const N = Number('9991');

        const factorization = (n) => {
            let i=2,  answer = [];
            while (n > 1) {
                while (n % i === 0) {
                    answer.push(i);
                    n /= i;
                }
                i++;
            }

            return answer;
        }
        console.log(factorization(N).join('\n'));
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

    n1978: () => {
        const fs = require('fs');
        const input = '4\n1 3 5 7 8'.toString().trim().split("\n");

        const isPrime = (n) => {
            if (n == 1) {
                return false;
            }

            for (let i = 2; i <= Math.sqrt(n); i++) {
                if (n % i === 0) {
                    return false;
                }
            }

            return true;
        }
        const [c, nums] = '4\n1 3 5 7 8'.toString().trim().split("\n");
        console.log(nums.split(" ").filter(v => isPrime(v)).length);
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
        const fs = require('fs');
        const input = '5\n5 4 45 64 54'.toString().trim().split('\n');

        function getPrimeFactors(n) {
            const factors = [];

            while (n % 2 === 0) {
                factors.push(2);
                n /= 2;
            }

            for (let i = 3; i * i <= n; i += 2) {
                while (n % i === 0) {
                    factors.push(i);
                    n /= i;
                }
            }

            if (n > 1) {
                factors.push(n);
            }

            return factors;
        }

        const N = Number(input[0]);
        const numbers = input[1].split(' ').map(Number);

        const results = [];
        for (let i = 0; i < N; i++) {
            const primeFactors = getPrimeFactors(numbers[i]);
            results.push(primeFactors.join(' '));
        }

        console.log(results.join('\n'));
        console.timeEnd('n16563')
    },

    n16563_2: () => {
        const memory = process.memoryUsage().heapUsed / 1024 / 1024;
        console.log(`약 ${Math.round(memory * 100) / 100} MB의 메모리를 사용중입니다.`);
        console.time('n16563_2')
        const fs = require('fs');
        const input = '5\n5 4 45 64 54'.toString().trim().split('\n');

        function getPrimeFactors(n) {
            const factors = [];
            for (let i = 2; i * i <= n; i++) {
                while (n % i === 0) {
                    factors.push(i);
                    n /= i;
                }
            }
            if (n > 1) {
                factors.push(n);
            }
            return factors;
        }

        const N = Number(input[0]);
        const numbers = input[1].split(' ').map(Number);

        const results = [];
        for (let i = 0; i < N; i++) {
            const primeFactors = getPrimeFactors(numbers[i]);
            results.push(primeFactors.join(' '));
        }

        console.log(results.join('\n'));
        console.timeEnd('n16563_2')
    },

    n16563_3: () => {
        const memory = process.memoryUsage().heapUsed / 1024 / 1024;
        console.log(`약 ${Math.round(memory * 100) / 100} MB의 메모리를 사용중입니다.`);
        console.time('n16563_3')
        const input = '5\n5 4 45 64 54'.toString().trim().split('\n');
        // const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
        const N = Number(input.shift());
        const list = input.toString().split(' ').map(Number);

        let arr = Array(Math.max(...list)+1);
        for (let i = 0; i <= Math.max(...list); i ++) {
            arr[i] = i;
        }
        arr.splice(0,2, false,false)
        for (let i = 2; i <= Math.sqrt(Math.max(...list)); i ++) {
            if(arr[i])
                for (let j = i*i; j<= Math.max(...list); j +=i) {
                    arr[j] = false;
                }
        }

        arr = arr.filter(x => x>0)

        let answer = Array.from({length: N}, () => []);
        for (let i = 0; i < N; i ++) {
            let val = list[i]
            let j = 0;
            while (val != 1) {
                if (val%arr[j] == 0) {
                    val = val/arr[j]
                    answer[i].push(arr[j]);
                } else {
                    j++;
                }
            }
        }
        console.log(answer.map(x => x.join(' ')).join('\n'));
        console.timeEnd('n16563_3')
    },

}