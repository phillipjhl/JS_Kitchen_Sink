
//Defining Variables
let name = 'Phillip';
const numOfStates = 50;
let sum = 5 + 4;

if (name.charCodeAt(0) > 76) { //conditional statement checking to see if the first letter of name comes after 'L'
    alert('Back of the line!'); //alert message if conditional is true
}
    else {
        alert('Next!'); //alert message if conditional is false
    }

function sayHello() {
    alert('Hello World!');
}

sayHello();

function checkAge(name, age) {
    if (age < 21) {
        alert('Sorry ' + name + ', you\'re not old enough to view this page!');
        return;
    }
}

checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);

let vegs = ['Broccoli', 'Potatoes', 'Carrots'];

for (let i = 0; i < vegs.length; i ++) {
    console.log(vegs[i]);
}

let people = [
    {name: 'phillip', age: 23}, 
    {name: 'katrina', age: 23},
    {name: 'norah', age: 2},
    {name: 'scot', age: 25},
    {name: 'mowgli', age: 3}
];

for (let i = 0; i < people.length; i++) { //conditional to loop through array people
    checkAge(people[i].name, people[i].age); //calls checkAge function on each index of people calling name and age keys
}

function getLength(word) {
    return word.length;
}

let length = getLength('Hello World');

if (length % 2 === 0) {
    console.log('The world is nice and even!');
}
    else {
        console.log('The world is in an odd place!')
    }
