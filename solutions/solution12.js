const solution12 = () => {

    let currentTriangleNumber = 0;
    let currentIndex = 0;
    let totalDivisors = 1;

    const getNumDivisors = (num) => {
        let numDivisors = 0;
        for(let index=1; index<=num; index++){
            if (num % index == 0) {
                numDivisors++;
            }
        }
        return numDivisors;
    }

    while(totalDivisors < 500){
        currentIndex++;
        currentTriangleNumber+=currentIndex;
        totalDivisors = getNumDivisors(currentTriangleNumber)
        if(totalDivisors > 100){
            console.log(totalDivisors);
        }
    }

    console.log(`Triangle Number ${currentIndex}th`);
    console.log(`Value ${currentTriangleNumber}`);
    console.log(`Total Divisors ${totalDivisors}`);
};

exports.solution12 = solution12;