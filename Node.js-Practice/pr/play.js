const person ={
  name: 'max',
  age: 26,
  great(){
    console.log('Hi, I am '+  this.name);
  }
};
const printName=({name,age}) => {
  console.log(name,age);
};
printName(person);

const {name, age}=person;
console.log(name, age);


const hobbies = ['Sport', 'cooking'];
const [h1, h2]= hobbies;
console.log(h1,h2);


// for(let hobby of hobbies) {
//   console.log(hobby);
// }

// console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
// console.log(hobbies);
 
// hobbies.push('Programming');
// console.log(hobbies);


// const copiedPerson = {...person};
// console.log(copiedPerson);


// const copiedArray = [...hobbies];

// console.log(copiedArray);

// const toArray =(...arg) => {
//   return arg;
// }

// console.log(toArray(1,2,3,4,3,2));

















// var name = "mayabee";

// // var age =21;
// var hasHobbies = true;
// const age = 21;

// const summerizeUser = (userName, userAge, userHasHobbies) => {
//   return (
//     'Name is '+userName + 'age is '  + userAge + ' and the user has hobbies ' + userHasHobbies
//   );
// }
// console.log(summerizeUser(name,age,hasHobbies));
// const add = (a,b) => a+b;
// console.log(add(3,4));

// const addOne = (a) => a+1;
// console.log(addOne(3));
