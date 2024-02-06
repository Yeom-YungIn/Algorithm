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

    n1541 () {
        // const fs = require ('fs').readFileSync('/dev/stdin');
        const fs = '55-50+40';
        const input = fs.toString();

        const minusLocation = input.indexOf('-');
        if (minusLocation === -1) {
            console.log(input.split(/[\+-]/).map(x => parseInt(x)).reduce((acc, x) => acc += x));
        } else {
            const front = input.slice(0, minusLocation).split(/[\+-]/).map(x => parseInt(x)).reduce((acc, x) => acc += x)
            const back = input.slice(minusLocation+1).split(/[\+-]/).map(x => parseInt(x)).reduce((acc, x) => acc += x)
            console.log(front - back);
            return front - back;
        }
    }
}