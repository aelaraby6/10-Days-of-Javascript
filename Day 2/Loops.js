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
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let arr = ['a', 'e', 'i', 'o', 'u'];
    
    s.split('').forEach((a) => {
        arr.forEach((x) =>{
            if(a == x){
                console.log(a);
            }
        })
    })
    
    let f ;
    s.split('').forEach((a) => {
        f = 0;
        arr.forEach((x) =>{
            if(a == x){
                f = 1;
            }
        })
        
        if(!f){
            console.log(a);
        }
    });
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}