const fs = require("fs");

module.exports.class1 = {

    AplusB: function (A, B) {
        // var fs = require('fs');
        // var input = fs.readFileSync('/dev/stdin').toString().split(' ');
        // let A = parseInt(input[0]);
        // let B = parseInt(input[1]);
        console.log(A+B)
        return A+B
    },

    ADivideB: function (A,B) {
        A = A.toFixed(9)
        console.log(A/B)
        return A/B
    },

    questionMark: function (A) {
        // var fs = require('fs');
        // var input = fs.readFileSync('/dev/stdin').toString()
        console.log(`${A}??!`)
        return A+"??!"
    },

    date: function (Y) {
        // var fs = require('fs');
        // var input = fs.readFileSync('/dev/stdin').toString()
        // const Y = parseInt(input)
        console.log(Y - 543)
        return Y - 543
    },

    dog: function () {
        console.log(`|\\_/|`)
        console.log(`|q p|   /}`)
        console.log('( 0 )"""\\')
        console.log('|"^"`    |')
        console.log(`||_/=\\\\__|`)
    }
}