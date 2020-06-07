const solution04 = () => {
    console.log("\nProblem 04:\nFind the largest palindrome made from the product of two 3-digit numbers.");

    let biggestPalindrome = 000;

    const reverseString = value => {
        return value.split("").reverse().join("");
    }

    const isPalindrome = (num) => {
        const value = num.toString();
        return value === reverseString(value)
    }

    for(let productFactorOne=100; productFactorOne < 999; productFactorOne ++ ){
        for(let productFactorTwo=productFactorOne; productFactorTwo < 999; productFactorTwo ++ ){
            let currentValue = productFactorOne * productFactorTwo;
            if( isPalindrome(currentValue) && currentValue > biggestPalindrome) {
                biggestPalindrome = currentValue;
            }
        }    
    }

    console.log(biggestPalindrome);
};

exports.solution04 = solution04;