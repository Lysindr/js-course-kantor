		/*  Массивы с числовыми индексами  */

/*
### 1
Как получить последний элемент из произвольного массива?

У нас есть массив goods. Сколько в нем элементов – не знаем, но можем прочитать из goods.length.

Напишите код для получения последнего элемента goods.
*/
var goods = [1,2,3];
console.log(goods[goods.length -1 ]);


/*
### 2
Как добавить элемент в конец произвольного массива?

У нас есть массив goods. Напишите код для добавления в его конец значения «Компьютер».
*/
goods.push('Комптютер');
console.log(goods);

/*
### 3
Задача из 5 шагов-строк:

Создайте массив styles с элементами «Джаз», «Блюз».
Добавьте в конец значение «Рок-н-Ролл»
Замените предпоследнее значение с конца на «Классика». Код замены предпоследнего значения должен 
работать для массивов любой длины.
Удалите первое значение массива и выведите его alert.
Добавьте в начало значения «Рэп» и «Регги».
Массив в результате каждого шага:

Джаз, Блюз
Джаз, Блюз, Рок-н-Ролл
Джаз, Классика, Рок-н-Ролл
Классика, Рок-н-Ролл
Рэп, Регги, Классика, Рок-н-Ролл
*/

var styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-Ролл');
styles[styles.length -2] = 'Классика';
// alert(styles.shift());
styles.unshift('Рэп', 'Регги');





/*
### 4
Напишите код для вывода alert случайного значения из массива:

var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
P.S. Код для генерации случайного целого от min to max включительно:

var rand = min + Math.floor(Math.random() * (max + 1 - min));

*/
var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];

var min = 0;
var max = arr.length - 1;
console.log('apples: ' + max);
var rand = min + Math.floor(Math.random() * (max + 1 - min));

// alert(arr[rand]);


/*
### 5
Создайте калькулятор для введённых значений
важность: 4
Напишите код, который:

Запрашивает по очереди значения при помощи prompt и сохраняет их в массиве.
Заканчивает ввод, как только посетитель введёт пустую строку, не число или нажмёт «Отмена».
При этом ноль 0 не должен заканчивать ввод, это разрешённое число.
Выводит сумму всех значений массива

*/

function arrayCalc() {
	let numbersArray = [];

	let number = prompt('Введите число', '');	

	while(isNumeric(number)) {
		console.log(number);
		numbersArray.push(number);
		console.log('array: ' , numbersArray);
		number = prompt('Введите число', '');
	}

	let result = numbersArray.reduce(function(sum, current) {
		return sum += parseInt(current);
		console.log(current);
	}, 0);

	alert(result);

	function isNumeric(num) {
		return !isNaN(parseFloat(num)) && isFinite(num);
	}
}

// arrayCalc();

/*
### 6

Поиск в массиве
важность: 3
Создайте функцию find(arr, value), которая ищет в массиве arr значение value и возвращает его номер, если найдено, или -1, если не найдено.

Например:

arr = ["test", 2, 1.5, false];

find(arr, "test"); // 0
find(arr, 2); // 1
find(arr, 1.5); // 2

find(arr, 0); // -1

*/

function find(arr, value) {
	// console.log(arr.indexOf(value));

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === value) {
			return i;
		} 
	}

	return -1;
}

var index = find([1,2,3,4,5], 3);

// alert(index);


/*
### 7
Фильтр диапазона
важность: 3
Создайте функцию filterRange(arr, a, b), которая принимает массив чисел arr и возвращает новый массив,
который содержит только числа из arr из диапазона от a до b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
Функция не должна менять arr.

Пример работы:

var arr = [5, 4, 3, 8, 0];

var filtered = filterRange(arr, 3, 5);
// теперь filtered = [5, 4, 3]
// arr не изменился

*/

function filterRange(arr, a, b) {
	let filteredArray = [];

	for (let i = 0; i < arr.length; i++) {
		if ( arr[i] >= a && arr[i] <= b ) {
			filteredArray.push(arr[i]);
		}
	}

	console.log(filteredArray);
	return filteredArray;
}

// filterRange([1,2,3,4,8,22,10], 3, 10);
// alert(filterRange([1,2,3,4,8,22,10], 3, 10));


/* Массивы МЕТОДЫ */

/*
### 1
Добавить класс в строку
важность: 5
В объекте есть свойство className, которое содержит список «классов» – слов, разделенных пробелом:

var obj = {
  className: 'open menu'
}
Создайте функцию addClass(obj, cls), которая добавляет в список класс cls, но только если его там еще нет:

addClass(obj, 'new'); // obj.className='open menu new'
addClass(obj, 'open'); // без изменений (класс уже существует)
addClass(obj, 'me'); // obj.className='open menu new me'

alert( obj.className ); // "open menu new me"
P.S. Ваша функция не должна добавлять лишних пробелов.

*/

function addClass(obj, cls) {
	let classes = obj.className.split(' ');

	for (let i = 0; i < classes.length; i++) {
		if (classes[i] === cls) {
			return;			
		} 
	}

	classes.push(cls);
	obj.className = classes.join(' ');

	console.log(obj.className);
}

let obj = {
	className: 'open menu'
}

// addClass(obj, 'active');
// alert(obj.className);

/*
### 2

Перевести текст вида border-left-width в borderLeftWidth
важность: 3
Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

То есть, дефисы удаляются, а все слова после них получают заглавную букву.

Например:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
Такая функция полезна при работе с CSS.

P.S. Вам пригодятся методы строк charAt, split и toUpperCase.
*/

function camelize(str) {
	let strArray = str.split('-');

	for (let i = 1; i < strArray.length; i++) {
		let firstLetter = strArray[i].charAt(0).toUpperCase();
		let word = strArray[i].slice(1);
		strArray[i] = firstLetter + word;
	}

	let transformedString = strArray.join('');

	console.log(transformedString);

	return transformedString;
}

// camelize('border-color-width');
// alert(camelize('border-color-width'));


/*
### 3

Функция removeClass
важность: 5
У объекта есть свойство className, которое хранит список «классов» – слов, разделенных пробелами:

var obj = {
  className: 'open menu'
};
Напишите функцию removeClass(obj, cls), которая удаляет класс cls, если он есть:

removeClass(obj, 'open'); // obj.className='menu'
removeClass(obj, 'blabla'); // без изменений (нет такого класса)
P.S. Дополнительное усложнение. Функция должна корректно обрабатывать дублирование класса в строке:

obj = {
  className: 'my menu menu'
};
removeClass(obj, 'menu');
alert( obj.className ); // 'my'
Лишних пробелов после функции образовываться не должно.
*/

function removeClass(obj, cls) {

	let classes = obj.className.split(' ');

	for (let i = 0; i < classes.length; i++) {		
		if (classes[i] === cls) {
			classes.splice(i, 1);
			i--;
		}
	}

	obj.className = classes.join(' ');
	console.log(obj.className);
}

let obj2 = {
	className: 'open menu active menu'
};

// removeClass(obj2, 'menu');


/*
### 4

Фильтрация массива "на месте"
важность: 4
Создайте функцию filterRangeInPlace(arr, a, b), которая получает массив с числами arr
и удаляет из него все числа вне диапазона a..b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
Функция должна менять сам массив и ничего не возвращать.

Например:

arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

alert( arr ); // массив изменился: остались [3, 1]
*/

function filterRangeInPlace(arr, a, b) {

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] >= a && arr[i] <= b) {

		} else {
			arr.splice(i, 1);
			i--;
		}
	}

	console.log(arr);	
}

// filterRangeInPlace([1,2,3,4,8,10,22], 8, 30);


/*
### 5  QUESTION - как работает b - a?

Сортировать в обратном порядке
важность: 5
Как отсортировать массив чисел в обратном порядке?

var arr = [5, 2, 1, -10, 8];

// отсортируйте?

alert( arr ); // 8, 5, 2, 1, -10
*/


var arr = [5, 2, 1, -10, 8];

function sortArr(a,b) {
	return b - a;
}

// alert(arr.sort(sortArr));


/*
### 6

Скопировать и отсортировать массив
важность: 5
Есть массив строк arr. Создайте массив arrSorted – из тех же элементов, но отсортированный.

Исходный массив не должен меняться.

var arr = ["HTML", "JavaScript", "CSS"];

// ... ваш код ...

alert( arrSorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений)
Постарайтесь сделать код как можно короче.
*/

var languageArr = ["HTML", "JavaScript", "CSS"];
var arrSorted = languageArr.slice().sort();

// console.log(languageArr);
// console.log(arrSorted);


/*
### 7


Случайный порядок в массиве
важность: 3
Используйте функцию sort для того, чтобы «перетрясти» элементы массива в случайном порядке.

var arr = [1, 2, 3, 4, 5];

arr.sort(ваша функция);

alert( arr ); // элементы в случайном порядке, например [3,5,1,2,4]
*/

var arr = [1, 2, 3, 4, 5];

function randomSort(a, b) {	
	return randomReturn(-1, 2);
}

function randomReturn(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

// console.log(arr.sort(randomSort));

/*
### 8

Сортировка объектов   QUESTION - пояснить немного за сортировку
важность: 5
Напишите код, который отсортирует массив объектов people по полю age.

Например:

var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };

var people = [ vasya , masha , vovochka ];

... ваш код ...

// теперь people: [vovochka, masha, vasya]
alert(people[0].age) // 6
Выведите список имён в массиве после сортировки.
*/

function ageSort(a, b) {

	if (a.age > b.age) {
		return 1;
	}
}

var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };

var people = [ vasya, masha, vovochka ];

// people.sort(ageSort);
// console.log(people.sort(ageSort));


/*
### 9

Вывести односвязный список
важность: 5
Односвязный список – это структура данных, которая состоит из элементов, каждый из которых хранит ссылку на следующий. Последний элемент может не иметь ссылки, либо она равна null.

Например, объект ниже задаёт односвязный список, в next хранится ссылка на следующий элемент:

var list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
Графическое представление этого списка: 

Альтернативный способ создания:

var list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };
Такая структура данных интересна тем, что можно очень быстро разбить список на части, 
объединить списки, удалить или добавить элемент в любое место, включая начало. 
При использовании массива такие действия требуют обширных перенумерований.

Задачи:

Напишите функцию printList(list), которая выводит элементы списка по очереди, при помощи цикла.
Напишите функцию printList(list) при помощи рекурсии.
Напишите функцию printReverseList(list), которая выводит элементы списка в обратном порядке,
при помощи рекурсии. Для списка выше она должна выводить 4,3,2,1
Сделайте вариант printReverseList(list), использующий не рекурсию, а цикл.
Как лучше – с рекурсией или без?

*/


/*
### 10

Отфильтровать анаграммы
важность: 3
Анаграммы – слова, состоящие из одинакового количества одинаковых букв, но в разном порядке. Например:

воз - зов
киборг - гробик
корсет - костер - сектор
Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

Например:

var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];

alert( aclean(arr) ); // "воз,киборг,корсет" или "ЗОВ,гробик,сектор"
Из каждой группы анаграмм должно остаться только одно слово, не важно какое.

*/

function aclean(arr) {

	let resultArray = [];
	let obj = {};

	console.log(arr);

	for (let i = 0; i < arr.length; i++) {
		let edditedWord = arr[i].toLowerCase().split('').sort().join('');
		console.log(edditedWord);
		obj[edditedWord] = arr[i];
	}

	for (let key in obj) {
		resultArray.push(obj[key]);
	}

	console.log(resultArray);
	return resultArray;
	
}

// aclean(["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"]);


/*
### 111

Оставить уникальные элементы массива
важность: 3
Пусть arr – массив строк.

Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

Например:

function unique(arr) {
  //Ваш код
}

var strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", "8-()"
];

alert( unique(strings) ); // кришна, харе, 8-()

*/

function unique(arr) {

	let obj = {};
	let filteredArr = [];

	for (let i = 0; i < arr.length; i++) {

		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] === arr[j]) {

			} else {
				let optionName = arr[j];
				obj[optionName] = arr[j];
				
			}
		}
	}

	for (let key in obj) {
		filteredArr.push(obj[key]);
	}

	console.log(filteredArr);

	return filteredArr;
}

// unique(["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", "8-()"]);


		/* Массив: перебирающие методы */

/*
### 1
Перепишите цикл через map
важность: 5
Код ниже получает из массива строк новый массив, содержащий их длины:

var arr = ["Есть", "жизнь", "на", "Марсе"];

var arrLength = [];
for (var i = 0; i < arr.length; i++) {
  arrLength[i] = arr[i].length;
}

alert( arrLength ); // 4,5,2,5
Перепишите выделенный участок: уберите цикл, используйте вместо него метод map.
*/

var arr = ["Есть", "жизнь", "на", "Марсе"];

var arrLength = arr.map(function(item) {
	return item.length;
});

// console.log(arrLength);


/*
### 2

На входе массив чисел, например: arr = [1,2,3,4,5].

Напишите функцию getSums(arr), которая возвращает массив его частичных сумм.

Иначе говоря, вызов getSums(arr) должен возвращать новый массив из такого же числа элементов, 
в котором на каждой позиции должна быть сумма элементов arr до этой позиции включительно.

То есть:

для arr = [ 1, 2, 3, 4, 5 ]
getSums( arr ) = [ 1, 1+2, 1+2+3, 1+2+3+4, 1+2+3+4+5 ] = [ 1, 3, 6, 10, 15 ]
Еще пример: getSums([-2,-1,0,1]) = [-2,-3,-3,-2].

Функция не должна модифицировать входной массив.
В решении используйте метод arr.reduce.

*/

function getSums(arr) {
	let sumsArr = [];	

	let total = arr.reduce(function(sum, number) {
		let a = sum + number;
		sumsArr.push(a);
		return sum += number;
	}, 0);

	console.log(total);
	console.log(sumsArr);
	return sumsArr;
}

getSums([1,2,3,4,5]);
