/**
 * Common ways to create an object in Javascript
 */
console.log("********** CONSTRUCTOR PATTERN SECTION **********");
const newObject1 = {};

const newObject2 = Object.create(Object.prototype);

const newObject3 = new Object();

const person = Object.create(null);
person.firstName = "name";
person.lastName = "name";
person.age = 1;
person.fullName = function(){
  return this.firstName + " " + this.lastName;
}
/**
 * Common ways to set and get a property on an object in Javascript
 */

/***** ECMA3 COMPATIBLE ******/

// Dot syntax . set and get
newObject1.name = "Bill";
let newObject1Name = newObject1.name;

// Square bracket syntax [''] set and get
newObject2["name"] = "Ted";
let newObject2Name = newObject2["name"];


/***** ECMA5 COMPATIBLE ******/

const driver = Object.create(null);
const truckDriver = Object.create(person);
const passenger = Object.create(null);
const policeOfficer = Object.create(null);


// convienance function to add a property to an object
const defineProp = function(obj,key,value){
  let config = {
    value: value,
    writable: true,
    enumerable: true,
    configurable: true
  }
  Object.defineProperty(obj,key,{...config});
}
// Adding a property to an object using Object.defineProperty() default way 
Object.defineProperty(driver,"name",{
  value: "bill",
  writable: true,
  enumerable: true,
  configurable: true
})

defineProp(truckDriver,"topSpead","70mph");
truckDriver.age = 43;
truckDriver.firstName = "Ron";
truckDriver.lastName = "Burgundy";
let name = truckDriver.lastName;
let fullname = truckDriver.fullName();
let age = truckDriver.age;


defineProp(passenger,"name","vicki");
defineProp(passenger,"age",32);

defineProp(driver,"vehicleType","car");
defineProp(driver,"passenger",passenger);

console.log(`The driver's name is ${driver.name} and their vehicle type is ${driver.vehicleType}`);
console.log(`They are carrying passenger ${driver.passenger.name} who is ${driver.passenger.age} years old`);

// Adding properties to an object using the Object.defineProperties() method

Object.defineProperties(policeOfficer,{
  "badgeNumber": {
    value: 0,
    writable:true,
    enumerable: true,
    configurable: true
  },
  "name": {
    value: "",
    writable:true,
    enumerable: true,
    configurable: true
  },
  "vehicleType": {
    value: "",
    writable:true,
    enumerable: true,
    configurable: true
  }
})

policeOfficer.badgeNumber = 6547354;
policeOfficer.name = "Rabbit";
policeOfficer.vehicleType = "motorcycle";

console.log(`Office ${policeOfficer.name} pulled over driver ${driver.name} and passenger ${driver.passenger.name} was nervous`);

/**
 * Class based example
 */

/**
 * the issue with this option is that the toString() method will be different on every instance of a Car See CarEx2
 */
class CarEx1 {
  constructor(model,year,miles){
    this.model = model;
    this.year = year;
    this.miles = miles;
  }

  toString(){
    return `The ${this.model} has ${this.miles} miles on it`;
  }
}

class CarEx2 {
  constructor(model,year,miles){
    this.model = model;
    this.year = year;
    this.miles = miles;
  }
}
CarEx2.prototype.toString = function(){
  return `The ${this.model} has ${this.miles} miles on it`;
}

let civic1 = new CarEx1("civic","1999","240,000");
let explorer1 = new CarEx1("explorer","2021","100");

console.log(civic1.toString());
console.log(explorer1.toString());

let civic2 = new CarEx2("civic","2003","179,000");
let explorer2 = new CarEx2("explorer","2019","100,000");
console.log(civic2.toString());
console.log(explorer2.toString());