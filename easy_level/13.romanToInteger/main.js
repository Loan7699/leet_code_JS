var romanToInt = function(s) {
    
    let t = s.length;
    
    const symbol = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,     
    };
    
    if (t == 0) {
        return 0;
    }
    
    if (t == 1) {
        return symbol[s[0]];
    }
    
    let number = symbol[s[t-1]];
    
    for (let i = t-2; i >= 0; i--) {
        if(symbol[s[i]] < symbol[s[i+1]]) {
            number -= symbol[s[i]];
        }
        
        else {
            number += symbol[s[i]];
        }
    }
    
    return number;
}

console.log(romanToInt("MCMXCIV"));