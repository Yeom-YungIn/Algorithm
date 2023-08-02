const n10989 = () => {
    const used1 = process.memoryUsage().heapUsed / 1024 / 1024;
    console.log(`약 ${Math.round(used1 * 100) / 100} MB의 메모리를 사용중입니다.`);


    const fs = '10\n5\n2\n3\n1\n4\n2\n3\n5\n1\n7'
    const input = fs.toString().trim().split('\n').map(Number);
    // const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
    const N = input.shift();
    const list = input.sort((a,b) => a-b).join('\n');
    console.log(list)
    console.log(`약 ${Math.round(used1 * 100) / 100} MB의 메모리를 사용중입니다.`);
}

module.exports = {
    n10989,
}