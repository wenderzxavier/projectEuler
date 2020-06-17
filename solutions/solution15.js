const solution15 = () => {

    const gridHeight = 20;
    const gridLenght = 20;
    
    const gridSize = gridHeight+gridLenght;

    const factorial = num => {
        if (num == 1) {
            return 1;
        }
        return num * factorial(num-1);
    }

    const combinatoryAnalisis = () => {
        return factorial(gridSize) / (factorial(gridHeight) * factorial(gridLenght));
    }

    console.log(combinatoryAnalisis());
}

exports.solution15 = solution15;
