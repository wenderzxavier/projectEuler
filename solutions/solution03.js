const isMultipleOf3 = number => number % 3 === 0;
const isMultipleOf5 = number => number % 5 === 0;

const solution03 = () => {
    console.log("\nProblem 03:\What is the largest prime factor of the number 600851475143 ?");
    let num = 600851475143;

    const isEven = (num) => num % 2 == 0;
    const isDividesByPrime = (num, prime) => num % prime == 0

    const isPrime = num => {
        for(let comparator = 2, s = Math.sqrt(comparator); i <= s; i++)
            if(num % comparator === 0) return false; 
        return num > 1;
    }

    while( isEven(num) ){
        num/=2
    }

    for (let prime = 3; Math.sqrt(prime)+1; prime+=2) {
        while(isDividesByPrime(num, prime)){
            console.log(prime);
            num/=prime
        }
    }

    if( isPrime(num) ){
        console.log(num)
    }
};

exports.solution03 = solution03;