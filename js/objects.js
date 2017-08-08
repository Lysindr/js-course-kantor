/*
### 1
Мини-задача на синтаксис объектов. Напишите код, по строке на каждое действие.

Создайте пустой объект user.
Добавьте свойство name со значением Вася.
Добавьте свойство surname со значением Петров.
Поменяйте значение name на Сергей.
Удалите свойство name из объекта.
*/

let user = {};
user.name = "Вася";
user.surname = "Петров";
user.age = 20;
user.name = "Сергей";
delete user.name;

let menu = {
	width: 300,
	height: 200,
	title: "Menu"
};

for (let key in menu) {
	console.log(`Ключ: ${key} значение: ${menu[key]}`);
}

let count = 0;
for (let item in menu) {
	count++;
}

console.log('Всего свойств: ' + count);

console.log(Object.keys(menu).length); // кол-во свойств в обьекте

/*
Обьекты: Перебор свойств

###1
Создайте функцию isEmpty(obj), которая возвращает true, если в объекте нет свойств и false – если хоть одно свойство есть.

Работать должно так:

function isEmpty(obj) {
  
}

var schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "подъём";

alert( isEmpty(schedule) ); // false

*/
let emptyObject = {};

function isEmpty(obj) {

	// if ( Object.keys(obj).length === 0) {
	// 	console.log(true);
	// 	return true;
	// }
	// console.log(false);
	// return false;

	for (let key in obj) {
		console.log(false);
		return false;
	}

	console.log(true);
	return true;
	
}

isEmpty(menu);
isEmpty(emptyObject);


/*
### 2
Есть объект salaries с зарплатами. Напишите код, который выведет сумму всех зарплат.

Если объект пустой, то результат должен быть 0.

Например:

"use strict";

var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};

//... ваш код выведет 650

*/

let salaries = {
	"Вася": 100,
	"Петя": 300,
	"Даша": 250
}

let sum = 0;
for ( let man in salaries) {
	sum += salaries[man];
}
console.log(sum);

/*
### 3
Есть объект salaries с зарплатами. Напишите код, который выведет имя сотрудника, у которого самая большая зарплата.
Если объект пустой, то пусть он выводит «нет сотрудников».

Например:

"use strict";

var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};

// ... ваш код выведет "Петя"

*/


let theBiggestSalaries = 0;
let nick = '';
for (let man in salaries) {
	if (salaries[man] > theBiggestSalaries) {
		theBiggestSalaries = salaries[man];
		nick = man;
	}	
}

console.log(nick);


/*
### 4
Создайте функцию multiplyNumeric, которая получает объект и умножает все численные свойства на 2. Например:
// до вызова
var menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// после вызова
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
P.S. Для проверки на число используйте функцию:

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
*/

let header = {
	width: 500,
	height: 150,
	class: "header-main"
}

function multiplyNumeric(obj) {

	for ( let key in obj) {
		if ( isNumeric(obj[key]) ) {
			obj[key] *= 2;
		}		
	}
	console.log(obj);
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

// multiplyNumeric(menu);

console.log(multiplyNumeric(header));