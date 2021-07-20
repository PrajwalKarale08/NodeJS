console.log("Hello Node JS installed successfully!!");
const tutorial = require('./tutorial');
console.log('The ans by the SUM function is: ')
console.log(tutorial(1,1));
console.log('Multiple exports call');
console.log(tutorial.sum(2,3));
console.log(tutorial.PI);
console.log( new tutorial.someMathObject());
