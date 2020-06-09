const solution10 = () => {

    let finalSum = 2;
    let primes = [2];

    const isPrime = num => {
        let isPrime = primes.filter( prime => num % prime == 0 ).length == 0;
        if( isPrime ) {
            primes.push(num);
        }
        return isPrime;
    }

    for( let num = 3; num < 2000000; num+=2 ){
        if(num == 1000001){
            console.log("We are half way there! .... Ohhhh! Livin' on a prayer!");
        }

        if(isPrime(num)){
            finalSum+=num;
        }
    }

    console.log(finalSum);
};

exports.solution10 = solution10;