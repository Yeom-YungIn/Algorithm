export class Sort {
    quickSort(arr) {
        if (arr.length <= 1) return arr;
        const pivot = arr[0];
        const left = [], right = [];

        for (let i = 1; i < arr.length; i++) {
            if(arr[i] <= pivot) left.push(arr[i]);
            else right.push(arr[i])
        }

        const leftNumbers = this.quickSort(left);
        const rightNumbers = this.quickSort(right);

        return [...leftNumbers, pivot, ...rightNumbers];
    }
}