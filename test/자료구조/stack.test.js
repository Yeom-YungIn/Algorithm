import {Stack} from "../../src/자료구조/Stack";


test('Stack', () => {
    const stack = new Stack();

    stack.push(1);
    console.log(stack)
    stack.pop();
    console.log(stack)
    stack.push(1);
    console.log(stack)
    stack.top();
    console.log(stack.size)
});