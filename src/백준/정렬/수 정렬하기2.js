const n2751 = () => {
    const used1 = process.memoryUsage().heapUsed / 1024 / 1024;
    console.log(`약 ${Math.round(used1 * 100) / 100} MB의 메모리를 사용중입니다.`);
    const fs = '5\n5\n4\n3\n2\n1'
    const input = fs.toString().trim().split('\n');
    // const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
    const N = input.shift();
    const list = input;
    console.log(list)

    const result = list.sort((a,b) => a-b).join('\n')
    console.log(result)
    return result
}

module.exports = {
    n2751,
}