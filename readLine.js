const readLine = require('readline');
/*creating the interface*/
const r1 = readLine.createInterface({
    input : process.stdin,
    output : process.stdout
});

let n1 = Math.floor(Math.random()*10 + 1);
let n2 = Math.floor(Math.random()*10 + 1);
let ans = n1+n2;

r1.question(`What is ${ n1 } + ${ n2 }:\n`, (userInput) => {
    // console.log(userInput);
    if(userInput.trim() == ans){
        r1.close(); 
    }
    else{
        r1.setPrompt('PLEASE TRY AGAIN!!!!\n');
        r1.prompt();
        r1.on('line', (userInput) => {
            if(userInput.trim() == ans){
                r1.close();
            }
            else{
                r1.setPrompt(`Your answer ${userInput} is wrong!!`);
                r1.prompt();
            }
        });
    }
});
function message(){
    console.log('Correct!!!!');
}
r1.on('close' , message);