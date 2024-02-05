export class Greedy {
    n11047 () {
        // const fs = require ('fs').readFileSync('/dev/stdin');
        const fs = '10 4200\n1\n5\n10\n50\n100\n500\n1000\n5000\n10000\n50000';
        const data = fs.toString().split('\n');
        let [n, k] = data.shift().toString().split(' ').map(x => Number(x));
        const coinList = data.map(x => Number(x)).sort((a, b) => b - a);
        let result = 0;
        for (const coin of coinList) {
            if (k / coin >= 1) {
                result += Math.floor(k / coin);
                k %= coin;
            }
            if (k === 0) {
                break;
            }
        }
        console.log(result);
        return result;
    }
}