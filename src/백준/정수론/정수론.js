const fs = require("fs");
module.exports.NumberTheory = {
    n1929: () => {
        const [n, m] = '3 16'.toString().trim().split(' ').map(Number);
        // const [n, m] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
        // let answer = [];
        const arr = Array.from(Array(m+1).keys())
        for(let i=2; i<=Math.sqrt(m); i++){
            if(arr[i])
                for(let j = i*i; j<=m; j+=i) {
                    console.log(i,j)
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
    }
}