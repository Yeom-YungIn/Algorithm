
const sorting = {
    n1427: () => {
        const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('').map(Number);
        const result = input.sort((a,b) => b-a).join('') * 1;
        console.log(result)
    },

    n11650: () => {
        const memory = process.memoryUsage().heapUsed / 1024 / 1024;
        console.log(`약 ${Math.round(memory * 100) / 100} MB의 메모리를 사용중입니다.`);
        console.time("Performance Time");
        // const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
        const input = '5\n3 4\n1 1\n1 -1\n2 2\n3 3'.toString().trim().split('\n');
        const N = Number(input.shift());

        let list = []
        for (let i = 0; i < N; i ++) {
            const [x,y] = input[i].split(' ').map(Number)
            list.push([x,y])
        }

        // list.sort((a, b) => a[0] + a[1] - (b[0] + b[1]))
        list.sort((a, b) => {
            if(a[0] == b[0]) return a[1]-b[1];
            else return a[0] - b[0]
        });
        console.log(list.map(x=>x.join(' ')).join('\n'))
        console.timeEnd("Performance Time");
    },

    n11651: () => {
        const input = '5\n0 4\n1 2\n1 -1\n2 2\n3 3'.toString().trim().split('\n');
        const N = Number(input.shift());
        const list = input.map(x => x.split(' ').map(Number));

        list.sort((a,b) => {
            if(a[1] == b[1]) return a[0] - b[0]
            return a[1] - b[1];
        })
        console.log(list.map(x => x.join(' ')).join('\n'))
    },

    n1181: () => {
        const fs = '13\nbut\ni\nwont\nhesitate\nno\nmore\nno\nmore\nit\ncannot\nwait\nim\nyours'
        const input = fs.toString().trim().split('\n');
        // const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
        const N = +input.shift();

        const list = [...new Set(input)]
        list.sort((a,b) => {
            if(a.length == b.length) return a.localeCompare(b);
            return a.length - b.length
        })

        console.log(list.join('\n'))
    },

    n10814: () => {
        const fs = '3\n21 Junkyu\n21 Dohyun\n20 Sunyoung'
        const input = fs.toString().trim().split('\n');
        const N = +input.shift();
        const list = input.map(x => x.split(' ')).sort((a,b) => {
            if (a[0] == b[0]) return 0;
            return a[0] - b[0]
        })
        console.log(list.map(x => x.join(' ')).join('\n'))
    }
}

module.exports = {
    sorting
}