const palindromeNumber = (num) => {
   let palindromeNumber = 0
   let number = num
   
    if ( num < 0 ) return false
    while ( number > 0 ) {
        let res = number%10
        palindromeNumber = palindromeNumber * 10 + res
        number = Math.floor(number/10)
    }
    if ( palindromeNumber === num) return true
    return false
}

console.log(palindromeNumber(-10));
console.log(palindromeNumber(121));
console.log(palindromeNumber(566));
console.log(palindromeNumber(3));