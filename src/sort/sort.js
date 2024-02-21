export class Sort {

    bubbleSort(arr) {
        for (let i = 0; i < arr.length; i++) {
            let swap;
            for (let j = i + 1; j < arr.length; j++) {
                if(arr[i] > arr[j]) {
                    swap = arr[i];
                    arr[i] = arr[j];
                    arr[j] = swap;
                }
            }
        }
        return arr;
    }

    /***
     * 기준 값을 선정하여 해당 값보다 작은 데이터와 큰 데이터로 분류하는 것을 반복해 정렬
     */
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