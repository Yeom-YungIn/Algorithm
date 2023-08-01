const n2587 = () => {
    const fs = '10\n40\n30\n60\n30'
    const input = fs.toString().trim().split('\n').map(Number)
    // const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)

    const mean = input.reduce((a,b) => a+b)/input.length;
    const median = input.sort((a,b) => a - b)[Math.floor(input.length/2)]

    return {mean: mean, median: median}
}

module.exports = {
    n2587
}