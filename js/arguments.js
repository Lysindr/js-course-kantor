/*
### 1

Проверка на аргумент-undefined
важность: 5
Как в функции отличить отсутствующий аргумент от undefined?

function f(x) {
  // ..ваш код..
  // выведите 1, если первый аргумент есть, и 0 - если нет
}

f(undefined); // 1
f(); // 0
*/

function f(x) {
	if (arguments.length) {
		console.log(1);
	} else {
		console.log(0);
	}

}

// f(undefined);
// f();

/*
### 2
Сумма аргументов
важность: 5
Напишите функцию sum(...), которая возвращает сумму всех своих аргументов:

sum() = 0
sum(1) = 1
sum(1, 2) = 3
sum(1, 2, 3) = 6
sum(1, 2, 3, 4) = 10
*/

function sum(a,b,c) {
	let numbersSum = 0;
	for (let i = 0; i < arguments.length; i++) {
		numbersSum += arguments[i];
	}
	console.log(numbersSum);
}

sum(1,2,3);