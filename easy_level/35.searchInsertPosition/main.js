/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
Input: nums = [1,3,5,6], target = 5
Output: 2
Input: nums = [1,3,5,6], target = 2
Output: 1
 */

const searchInsertPosition = (array, target) => {
    max = Math.max(...array)
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= target) {  
                return i
        }

        if ( target > max) {
            return array.length
        }
    }

}

console.log(searchInsertPosition([1, 3, 5, 6], 5))
console.log(searchInsertPosition([1,3,5,6], 2));
console.log(searchInsertPosition([1,3,5,6], 7));