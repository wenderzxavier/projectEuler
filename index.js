const fs = require('fs');
const solutions = require('./solutions');

readInputOption = () => {
    const solutionId = process.argv[2];
    console.log(solutionId);

    if(solutionId){
        switch(solutionId.toString()){
            case '01':
                solutions.solution01();
                break;
            case '02':
                solutions.solution02();
                break;
            default:
                console.log("Choose an option!");
        }
    } else console.log("Pass an id as parameter");
};

readInputOption();