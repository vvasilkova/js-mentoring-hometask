/**
 * write function that adds two numbers
 *
 */
//VAR1
function add(a, b) {
	return a + b;
}
console.log(add(1, 2));
console.log(add(-1, 2));
console.log(add(-1, -2));


/**
 * write function that return first and last name of given object
 * properties firstName and lastName
 * {
 *    firstName: "John"
 *    lastName: "Dou"
 * }
 */

var object = {
	firstName: "John",
	lastName: "Dou"
};

function getFullName(object) {
	return object.firstName + " " + object.lastName;
}
getFullName(object);

/**
 * write fuction that checks is number is odd
 * true if odd, false if even
 */
let n = 2

function isOdd(n) {
	if (n % 2 == 0) {
		return false;
	} else {
		return true;
	}
}
isOdd(n);


/**
 * write function that return shortest of words in given array
 * e.g ["one", "two", "three"] should return one
 */

function getShortest(wordArray) {
	let min = wordArray[0];
	for (let i = 1; i < wordArray.length; i++) {
		if (wordArray[i].length < min.length) {
			min = wordArray[i];
		}
	}
	return min;
}



/**
 * write function that returns word google with given numbers of "o" symbols
 * e.g getGoogle(5) should return "gooooogle"
 */


function getGoogle(n) {
	return 'g' + 'o'.repeat(n) + 'gle';
}
console.log(getGoogle(n));


/**
 * write function that returns object based on given information (params may be null)
 * getUser("John", "Dou", 42) should return
 * {
 *    firstName: "John"
 *    lastName: "Dou"
 *    age: 42
 * }
 */
function getUser(firstName, lastName, age) {
	return {
		firstName: firstName || null,
		lastName: lastName || null,
		age: age || null
	};
}
console.log(getUser("John", "Dou", 42));


/**
 * write function that calculates total path traveled.
 * path represended as array of objects with field distance and direction
 * e.g [{direction: "Kiyv - Minsk", distance: 567}, {direction: "Kiyv - Paris", distance: 2402}]
 */
let path = [{
	direction: "Kiyv - Minsk",
	distance: 567
}, {
	direction: "Kiyv - Paris",
	distance: 2402
}]

function getTotalPath(path) {
	let totalPath = 0;
	for (let i = 0; i < path.length; i += 1) {
		totalPath += path[i].distance;
	}
	return totalPath;
}
console.log(getTotalPath(path))

/**
 * write a function that will calculate a discount considering the Amount
 * and the percentage (hint: you need to use the Closure here)
 * @param {amount} num 
 * @param {percentage} num 
 */

function discountFunction(percentage) {
	let amount = 90;
		return function (amount) {
		return amount - (amount * percentage) / 100;
	};
}
let discountfunction10 = discountFunction(10)
console.log(discountFunction(10))

/**
 * Write the methods inside the given objects that:
 * 1. console logs keys of the given object
 * 2. returns the string 'My name is John Doe and I am 25 years old. My best friend is Daniel'
 * reffering to the data stored in the object
 */

const myObject = {
	name: 'John',
	lastName: 'Doe',
	age: 25,
	friends: ['Mike', 'Alan', 'Daniel'],
	keys() {
		for (let key in myObject) {
			console.log(key);
		}

	},
	call() {
		return 'My name is ' + myObject.name + " " + myObject.lastName + " " +  'and I am ' + myObject.age + ' years old. My best friend is ' + myObject.friends[2]
	}
};

console.log(myObject.keys());
console.log(myObject.call())


module.exports = {
	add,
	getFullName,
	isOdd,
	getShortest,
	getGoogle,
	getUser,
	getTotalPath,
	discountFunction,
	myObject
};