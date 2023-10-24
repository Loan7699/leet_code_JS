// Cho 1 mảng các số nguyên và 1 số, trả về mảng gồm chỉ số 2 số sao cho tổng 2 số nguyên trong mảng bằng số đã cho
/* VD: 
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/
var twoSum = function(nums, target) {
    
    let t = nums.length;
    let index = [];
    
    for (let i = 0; i < t-1; i++) {
        for (let j = i+1; j < t; j++) {
            if (nums[i] + nums[j] == target) {
                index.push(i, j);
            }
        }
    }
    return index;
};

console.log(twoSum([1, 3, 4, 5, 0], 4));