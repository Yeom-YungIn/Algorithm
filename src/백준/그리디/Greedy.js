module.exports.Greedy = {
    n11047: () => {
        const input = '10 4200\n1\n5\n10\n50\n100\n500\n1000\n5000\n10000\n50000'.toString().trim().split('\n');
        let [n, k] = input.shift().toString().split(' ').map(Number);
        const list = input.map(Number);
        list.sort((a, b) => b-a);

        let sum = 0, cnt = 0;
        while (k) {
            list.forEach(x => {
                if (k / x >= 1) {
                    const div= Math.floor(k/x)
                    sum += div * x;
                    k -= div * x;
                    cnt += div;
                }
            })
        }
        console.log(cnt)
    },

    n2839: () => {
        const input = +require('fs').readFileSync('/dev/stdin').toString();
        let result = -1;
        let five = Math.floor(input / 5);
        while (five >= 0) {
            const remain = input - five * 5;
            if (remain % 3 === 0) {
                result = remain / 3 + five;
                break;
            } else {
                five -= 1;
            }
        }
        console.log(result);
    }
}