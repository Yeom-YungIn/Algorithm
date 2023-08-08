module.exports.BinarySearch = {
    RBS: (target) => {
        console.time('recursive_binarySearch')
        const array = [1,3,5,7,9,11,13,15,17,19]
        const N =10;
        const recursive_binarySearch = (array, target, start, end) => {
            if (start > end) return null;
            const mid = Math.floor(start+end/2)
            if (array[mid] == target) return mid
            if (array[mid] > target) return recursive_binarySearch(array, target, start, mid -1)
            return recursive_binarySearch(array, target, mid +1, end);
        }
        const result = recursive_binarySearch(array, target, 0, N-1)

        console.log(result)
        console.timeEnd('recursive_binarySearch')
        return result
    },

    LBS: (target) => {
        console.time('loop_binarySearch')
        const array = [1,3,5,7,9,11,13,15,17,19]
        const N = 10;

        const loop_binarySearch = (array, target, start, end) => {
            while (start <= end) {
                const mid = Math.floor(start+end/2);
                if(array[mid] == target) return mid;
                if(array[mid] > target) end = mid - 1;
                if(array[mid] < target) start = mid + 1;
            }
            return null;
        }
        const result = loop_binarySearch(array,target,0, N-1)
        console.log(result)
        console.timeEnd('loop_binarySearch')
        return result
    },

    sol: (N, M, riceCakes) => {
        console.time('sol2')
        riceCakes.sort((a,b) => a-b);

        const sol = (list,target,start,end) => {
            while (start <= end) {
                const mid = Math.floor((start+end)/2);
                let sum = 0;
                const buy = list.forEach(num => {
                    if (num > list[mid]) return sum += (num - list[mid]);
                });
                if (sum == target) return list[mid]
                if (sum > target) start = mid + 1;
                if (sum < target) end = mid -1;
            }
        }

        const max = Math.max(...riceCakes)
        const sol2 = (list,target,start,end) => {
            while (start <= end) {
                const mid = Math.floor((start+end)/2);
                let sum = 0;
                sum = list.forEach(num => {
                    if (num > list[mid]) return sum += (num - mid);
                });
                if (sum == target) return mid
                if (sum > target) start = mid + 1;
                if (sum < target) end = mid -1;
            }
        }
        const result = sol(riceCakes, M, 0, N-1)
        const result2 = sol(riceCakes, M, 0, N-1)
        console.log(result2)
        console.timeEnd('sol2')
        return result2
    },

    sol2: (N, M, list) => {
        let result = 0;
         const sol2 = (list, target, start, end) => {
             if(start >= end) return
             const mid = Math.floor((start+end)/2);
             // if(list[mid] == target) result += 1;
             if(list[mid-1] == target) {
                 result += 1
                 sol2(list, target, start, mid - 1)
             };
             if(list[mid+1] == target) {
                 result +=1;
                 sol2(list, target, mid + 1, end)
             };
         }

         sol2(list, M, 0, N-1)
         console.log(result);
         return result;
    }
}