import {ReverseString} from "../src/string/reverseString";

describe('reverse string', function () {
    it('reverse', () => {
        console.log(new ReverseString().reverse('hello'));
        console.log(new ReverseString().reverseString('hello1234'));
    })
});