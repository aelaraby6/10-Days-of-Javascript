'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try{
        if(typeof s != "string"){
            throw new Error("s.split is not a function") ;
        }
        else{
            console.log(s.split('').reverse().join(''));
            
        }
    }
    catch(err){
        console.log(err.message);
        console.log(s);

    }
   
}


function main() {
    const s = eval(readLine());
    
    reverseString(s);
}