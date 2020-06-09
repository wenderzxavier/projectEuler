const fs = require('fs');
const solutions = require('./solutions');

readInputOption = () => {
    const solutionId = process.argv[2];
    console.log(solutionId);

    if (solutionId) {
        switch (solutionId.toString()) {
            case '01':
                solutions.solution01();
                break;
            case '02':
                solutions.solution02();
                break;
            case '03':
                solutions.solution03();
                break;
            case '04':
                solutions.solution04();
                break;
            case '05':
                solutions.solution05();
                break;
            case '06':
                solutions.solution06();
                break;
            case '07':
                solutions.solution07();
                break;
            case '08':
                solutions.solution08();
                break;
            case '09':
                solutions.solution09();
                break;
            case '10':
                solutions.solution10();
                break;
            default:
                console.log("Choose an option!");
        }
    } else console.log("Pass an id as parameter");
};

readInputOption();