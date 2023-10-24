/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
Input: nums = [2,2,1,1,3]
Output: 1
 */

const singleNumbers = (nums) => {
    const length = nums.length;
    for (let i = 0; i < length; i++) {
        console.log('i', i);
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                break;
            }
            
        }
        // console.log(nums[i]);
        // return nums[i]
    }
}
console.log(singleNumbers([2, 2, 1]));