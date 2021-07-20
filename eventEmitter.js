const EventEmitter = require('events');
var eventEmitter = new EventEmitter();
// console.log(typeof(EventEmitter));
//First we have to create an event
function myEvent(){
    console.log('Tutorial Event is created');
}
function myEventWithParameters(num1, num2){
    console.log('The result of eventEmitter after passing parameter is: ');
    console.log(num1+num2);
}
eventEmitter.on('tutorial', myEvent);
/*firing an event*/
eventEmitter.emit('tutorial');
/*firing event with function with parameters*/
eventEmitter.emit('tutorial', myEventWithParameters(1,2));

/*firing event by passing it as an object*/
class Person extends EventEmitter{
    constructor(){
        super();
        this._name = name1;
    }
    get name(){
        return this._name;
    }
}
let pedro = new Person('Pdero');
pedro.on('name', ()=>{
    console.log('My name is : ' + pedro.name);
})