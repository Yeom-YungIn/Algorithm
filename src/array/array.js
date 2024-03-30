export class ArraySol {
    getMax(arr) {
        return Math.max(...arr);
    }

    getMaxByReduce(arr) {
        return arr.reduce((prev, cur) => prev > cur ? prev : cur);
    }

    getMin(arr) {
        return Math.min(...arr);
    }

    getMinByReduce(arr) {
        return arr.reduce((prev, cur) => prev > cur ? cur : prev);
    }


    getDuplicate(arr) {
        return arr.filter((val, idx) => arr.indexOf(val) !== idx);
    }

    getDuplicateByLoop(arr) {
        const result = [];
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] === arr[j] && !result.includes(arr[i])) {
                    result.push(arr[i])
                }
            }
        }
        return result;
    }

}