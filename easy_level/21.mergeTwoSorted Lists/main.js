/*
You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list.
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
*/

const MergeTwoSortedLists = (list1, list2) => {
    const max = Math.max(list1.length, list2.length)
    let mergedList = []
    for ( let i = 0; i < max; i++) {
        if (list1[i] && list2[i]) {
            mergedList.push(list1[i], list2[i])
        } else if (list1[i]) {
            mergedList.push(list1[i])
        } else if (list2[i]) {
            mergedList.push(list2[i])
        } else if (list1[i] === 0 || list2[i] === 0) {
            mergedList.push(0)
        }
    }
    return mergedList
}

console.log(MergeTwoSortedLists([1,2,4], [1,3,4]));
console.log(MergeTwoSortedLists([], [0]));
console.log(MergeTwoSortedLists([], []));