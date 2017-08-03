console.log('dwdw');

function fullName(a, b) {

    console.log(a + ' ' + b);

}
// fullName('Alexey', 'Kovalsky');

console.log(fullName('Alexey', 'Kovalsky'));


let vasya = {
	first: "vasya",
	lastName: "Popi4",
	age: 25,
	options: {
		color: red,
		'background-color': 'blue'
	},
	// sayHello: function() {

	// }
	sayHello() {			// ES 2016

	}
}

console.log(vasya.first);
console.log(vasya.options.color);
console.log(vasya.options['background-color'];

let optionsKey = "options";

console.log(vasya['f' + 'irst']);
console.log(vasya[optionsKey]['color']);

function createUser(lastname, firstname, age, role) {
	let color = 'red;';

	return {
		lastname,
		firstname,
		age,

		// [`is${color}`]: true,
		['is' + role]: true,
		['is' + color]: true
	}
}

console.log(createUser('a', 'b', 24).iscolor === true);
console.log(createUser('a', 'b', 23, 'user').isuser === true);
console.log(createUser('a', 'b', 23, 'admin').isuser === true);