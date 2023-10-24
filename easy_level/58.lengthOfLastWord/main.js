/*
Given a string s consisting of words and spaces, return the length of the last word in the string.
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
*/

const lengthOfLastWord = (string) => {
    const arrayString = string.trim().split(" ")
    return arrayString[arrayString.length - 1].length
}
console.log(lengthOfLastWord("Hello world"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));