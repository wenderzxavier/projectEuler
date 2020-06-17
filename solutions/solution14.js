const solution14 = () => {

    let biggestChainSequence = [];
    let valueForBiggestChain = 0;

    const calculateFromOddValue = num => {
        return 3*num + 1;
    }

    const calculateFromEvenValue = num => {
        return num/2;
    }

    const isEven = num => num % 2 == 0;

    for(let currentValue = 2; currentValue < 1000000; currentValue ++ ){
        let chain = [];
        let currentNumber = currentValue;
        while( currentNumber != 1 ){
            chain.push(currentNumber);
    
            if(isEven(currentNumber)){
                currentNumber = calculateFromEvenValue(currentNumber);
            }
            else {
                currentNumber = calculateFromOddValue(currentNumber);
            }
        }        
        chain.push(currentNumber);

        if(chain.length > biggestChainSequence.length){
            valueForBiggestChain = currentValue
            biggestChainSequence = chain;
        }
    }

    console.log(`Value for biggest value = ${valueForBiggestChain}\n Chain Sequence = ${biggestChainSequence}`);
};

exports.solution14 = solution14;