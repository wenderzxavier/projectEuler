const solution09 = () => {
    for( let a = 1; a <= 500; a++){
        for( let b = 1; b <= 250; b++ ) {
            for ( let c = 0; c <= 990; c++ ){
                if( a + b + c == 1000 ){
                    if( Math.pow(a, 2) + Math.pow(b,2) == Math.pow(c,2) ){
                        console.log(`a=${a} | b=${b} | c=${c}`);
                        console.log(`a=${b} | b=${a} | c=${c}`);
                        console.log(a*b*c);
                    }
                }
            }
        }
    }
};

exports.solution09 = solution09;