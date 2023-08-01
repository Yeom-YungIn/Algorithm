const n25305 = () => {
    // const fs = '5 2\n100 76 85 93 98'
    // const input = fs.toString().trim().split('\n');
    const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
    const [N, K] = input.shift().split(' ').map(Number);
    const x = input.toString().split(' ').map(Number)

    const insertSorting = (data, limit, K) => {
        for (let i = 1;  i < limit;  i ++) {
            for (let j = i; j > 0; j --) {
                if(data[j] > data[j-1]) [data[j], data[j-1]] = [data[j-1], data[j]]
                else break;
            }
        }
        return data[K-1]
    }
    const result =  insertSorting(x, N, K);
    return result
}

module.exports = {
    n25305,
}