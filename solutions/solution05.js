const solution05 = () => {

    const isDividedByRangeOfOneToTwenty = (inputValue) => {
        const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        let isDivided = true;
        return !numbers.map(number => inputValue % number == 0).includes(false)
    }

    let currentValue = 19;
    let factor = 1;

    while (!isDividedByRangeOfOneToTwenty(currentValue)) {
        factor++;
        currentValue=19*factor;
    }

    console.log(currentValue);
};

exports.solution05 = solution05;