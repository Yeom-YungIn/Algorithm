module.exports.Greedy = {
    gulid: function () {
        const N = 5
        const F = [2,3,1,2,2,]
        let cnt = 0, group = 0;
        F.sort()
        for (var i = 0; i <= N; i ++) {
            cnt += 1
            if(cnt >= F[i]) {
                group += 1
                cnt = 0
            }
        }
        return group
    },

    lrud: function () {
        let x=1, y=1;
        const plan = ['R','R','R','U','D','D']
        const dx = [0,0,-1,1]
        dx[0]
        const dy = [-1,1,0,0]
        const LRUD = ['L','R','U','D']

        for (var value of plan) {
            for (var i =0; i <= LRUD.length; i++) {
                if (value = LRUD[i]) {
                    x += dx[i]
                    y += dy[i]
                }
            }
        }
        console.log(x,y)
        return x,y
    },

    time: function () {
        const reg = /3/gi
        let N = 23;
        let count = 0;
        for (var i = 0; i < N+1; i ++) {
            for (var j = 0 ; j < 60; j ++) {
                for (var k=0; k < 60; k++) {
                    if (reg.test(i)||reg.test(j)||reg.test(k)){
                        console.log(i,j,k)
                      count +=1
                    }
                }
            }
        }
        return count
    },

    night: function () {
        let x=1, y=1;

    }
}