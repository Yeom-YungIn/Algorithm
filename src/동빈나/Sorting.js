const selectSorting = () => {
    const list = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8]

    for (let i = 0; i < list.length; i ++) {
        let min_index = i;
        for (let j = i + 1; j < list.length ; j ++) {
            if (list[min_index] > list[j]) min_index = j;
        }
        [list[i], list[min_index]] = [list[min_index], list[i]]
    }
    console.log(list.join(''))
    return list.join('');
}

const insertSorting = () => {
    const list = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8]

    for (let i = 1; i < list.length; i ++){
        for (let j = i; j > 0; j --) {
            if (list[j] < list[j-1]) {
                [list[j],list[j-1]] = [list[j-1],list[j]]
            }
            else break;
        }
    }
    console.log(list.join(''))
    return list.join('');
}

const quickSorting = () => {
    const list = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8]

    const quickSort = (target, start, end) => {
        if (start >= end) return;
        let pivot = start;
        let left = start + 1;
        let right = end;
        while (left <= right) {
            while (left <= end && target[left] <= target[pivot]) left+=1;
            while (right >= start && target[right] >= target[pivot]) right-=1;
            if(left > right) {
                [target[right], target[pivot]] = [target[pivot], target[right]]
            }else {
                [target[left], target[right]] = [target[right], target[left]]
            }
        }
        quickSort(target, start, right -1);
        quickSort(target, right + 1, end);
    }
    quickSort(list, 0, list.length -1);
    return list.join('')
}

const indexSorting = () => {
    const list = [7,5,9,0,3,1,6,2,9,1,4,8,0,5,2]
    const arr = Array(Math.max(...list)).fill(0)
    const result = []

    for (const i of list) {
        arr[i] += 1;
    }

    for (let i = 0 ; i <= arr.length; i ++) {
        for (let j = 0; j < arr[i]; j ++) {
            result.push(i)
        }
    }
    console.log(result)
}

module.exports = {
    selectSorting,
    insertSorting,
    quickSorting,
    indexSorting
}