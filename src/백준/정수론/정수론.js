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
        const input = '6\n3 4 2 12 6 8'.toString().trim().split("\n");
        const nums = input.map(v => v.split(' ').map(x => +x));
        const factor = nums[1]

        if (factor.length == 1) {
            console.log(factor[0] * factor[0])
        } else {
            factor.sort((a,b)=>a-b)
            console.log(factor[0] * factor[factor.length - 1])
        }
    }
}