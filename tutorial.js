const sum = (num1, num2) => num1 + num2;
/*Exporting only one function*/
module.exports = sum;
const PI = 3.1417;
class someMathObject{
    constructor(){
        console.log('Object created');
    }
}
/*Exporting multiple things*/
module.exports.sum = sum;
module.exports.PI = PI;
module.exports.someMathObject = someMathObject;