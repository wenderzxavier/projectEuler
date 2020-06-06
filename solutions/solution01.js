const isMultipleOf3 = number => number % 3 === 0;
const isMultipleOf5 = number => number % 5 === 0;

const solution01 = () => {
    console.log("\nProblem 01:\nFind the sum of all the multiples of 3 or 5 below 1000.");

    let sumOfmultiplesOf3Or5 = 0;
    for (let number = 0; number < 1000; number ++ ) {
        if(isMultipleOf3(number) || isMultipleOf5(number)){
            sumOfmultiplesOf3Or5 += number;
        }
    }
    console.log(`Solution = ${sumOfmultiplesOf3Or5}\n`);
};

exports.solution01 = solution01;