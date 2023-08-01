const n2750 = () => {
    // const fs = '5\n5\n2\n3\n4\n1'
    // const input = fs.toString().trim().split('\n').map(Number);
    const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(Number);
    const N = input.shift();
    const list = input;

    const quickSort = (list, start, end) => {
        if (start >= end) return;
        const pivot = start;
        let left = start + 1, right = end;
        while (left <= right) {
            while (left <= end && list[left] <= list[pivot]) left ++;
            while (right > start && list[right] >= list[pivot]) right --;
            if (left > right) [list[right],list[pivot]] = [list[pivot],list[right]]
            else [list[right],list[left]] = [list[left],list[right]];
        }
        quickSort(list, start, right -1);
        quickSort(list, right + 1, end);
    }
    quickSort(list, 0, N-1)
    const sort = () => {
        const result = list.sort().join('\n')
        return result
    }
    return list.join('\n')
}

module.exports = {
    n2750,
}