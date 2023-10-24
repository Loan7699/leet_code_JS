// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string ""
// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

const findLongestPrefix = (arr) => {
    let prefixArr = ""
    // find str have min length of array
    const size = arr.map((str) => str.length).sort((a, b) => (a - b))

    if ( arr.length === 0) return ""
    if (arr.length === 1) return arr[0]

    // loop in 1 str of array
    for ( let i = 0; i < arr[0].length; i++) {
        let currentChar = arr[0][i]
        // loop in array, compare char
        for ( let j = 0; j < arr.length; j++) {
            if (arr[j][i] !== currentChar) return prefixArr
        }
        prefixArr += currentChar
    }

    return prefixArr
}

console.log(findLongestPrefix(['flower', 'flow', 'flipbook']));
console.log(findLongestPrefix(["dog","racecar","car"]));
console.log(findLongestPrefix(["cir","car"]));