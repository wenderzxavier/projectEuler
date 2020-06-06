const solution02 = () => {
    console.log("\nProblem 02:\nBy considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.");

    const isEven = num => num % 2 == 0;

    const fib = (previousValue = 1, previousPreviousValue = 2, currentSum = 2) => {
        const currentValue = previousValue + previousPreviousValue;
        if (currentSum < 4000000) {
            if (isEven(currentValue)) {
                currentSum += currentValue;
            }
            fib(previousPreviousValue, currentValue, currentSum);
        } else console.log(currentSum);
    }

    fib();
};

exports.solution02 = solution02;