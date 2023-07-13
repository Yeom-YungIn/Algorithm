const fs = require("fs");
module.exports.n2331 = {
    n2331: () => {
        // const fs = require('fs')
        // const input = fs.readdirSync('/dev/stdin').toString()
        const fs = '57 2'
        const input = fs.toString()
        const [A, P] = input.split(' ').map(x => Number(x))
        console.log(A,P)
        let list = [A]

        while (true) {
            const curVal = String(list[list.length - 1])
            const nextVal = curVal.split('').reduce((arr, cur) => arr + Number(cur)**P, 0)
            if (list.includes(nextVal)) {
                console.log(list.indexOf(nextVal))
                break;
            }
            list.push(nextVal)
        }
    }
}