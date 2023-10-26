module.exports.NT = {
    euclid : (a, b) => {
        const arr = [a, b].sort((a,b) => a-b);
        while (arr) {
            const MOD = arr[0] % arr[1]
            if(MOD > 0) {
                arr.push(MOD);
                arr.shift();
            }
            if(MOD === 0) return arr[1];
        }
    },

    euler: (n) => {
        const arr = Array.from(Array(n+1).keys())

        for (let i = 2; i <= n; i++) {
            if (i == arr[i]) {
                for (let j = i; j <= n; j += i) {
                    arr[j] = arr[j] - (arr[j] / i);
                }
            }
        }
        return arr

    }
}