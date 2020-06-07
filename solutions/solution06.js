const solution06 = () => {
    let sumOfTheSquares = 0;
    let squareOfTheSums = 0;

    for (let num = 1; num <= 100; num++) {
        sumOfTheSquares+=Math.pow(num, 2);
        squareOfTheSums+=num;
    }

    squareOfTheSums = Math.pow(squareOfTheSums, 2);

    console.log(squareOfTheSums - sumOfTheSquares);
};

exports.solution06 = solution06;