const romanToInt = (s) => {
    // List out all the roman to their equivalent number in the "symbols" Object below
    const symbols = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    // Initialize the variable "ans" to store the result
    let ans = 0

    // Create a for loop that loops through the input
    for(let i = 0; i < s.length; i++){
        // Store the current symbol in a variable
        let current = symbols[s[i]]
        // Store the next symbol in a variable
        let next = symbols[s[i + 1]]

        // Checks if the next current symbol is less than the next symbol
        if(current < next) {
            // Subtract the current symbol from the next symbol i.e CM = 900 since C is less than M, C = 100. M = 1000, So 1000 - 100 = 900
            // Then we store the subtraction in the ans variable.
            ans+= next - current
            // continue the loop
            i++
        }else{
            // Else we just add the current symbol to the ans variable
            ans+= current
        }
    }
    return ans;
}

console.log(romanToInt('MCMXCIV'))