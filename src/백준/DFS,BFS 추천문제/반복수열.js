const fs = require("fs");
module.exports.n2331 = {
    n2331: () => {
        // const fs = require('fs')
        // const input = fs.readdirSync('/dev/stdin').toString()
        const fs = '57 2'
        const input = fs.toString()
        const [A, P] = input.split(' ').map(x => Number(x))
        console.log(A,P)
        let list = []
        list.push(A)
        console.log(list)

        const X = (x,P) => {
            for (let i = 1; i < P; i ++) {
                x *=x
            }
            return x
        }
        let i = 0;
        while (true) {
            const Dn = list[i].toString().split('').map(x => Number(
                X(x, P)
            ))
            let val = 0;
            Dn.forEach(num => {
                val += num
            })
            list.push(val)
            console.log(list)
            // break;
            i +=1
        }
    }
}