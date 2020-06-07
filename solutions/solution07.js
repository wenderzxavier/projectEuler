const solution07 = () => {

    const isPrime = num => {
        for (let comparator = 2; comparator < num; comparator++)
            if (num % comparator === 0) return false;
        return num > 1;
    }

    let primeIndex = 1;
    let currentValue = 3;

    while (primeIndex != 10001) {
        if (isPrime(currentValue)) {
            primeIndex++;
        }
        currentValue += 2;
    }

    console.log(currentValue - 2);
};

exports.solution07 = solution07;