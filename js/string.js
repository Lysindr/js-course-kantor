/*
### 1
Напишите функцию ucFirst(str), которая возвращает строку str с заглавным первым символом, например:
ucFirst("вася") == "Вася";
ucFirst("") == ""; // нет ошибок при пустой строке

*/

function firstSymbolToUppercase(string) {
	let str = string.charAt(0).toUpperCase();
	let newStr = str + string.slice(1);

	console.log(newStr);

	return newStr;
}

// firstSymbolToUppercase("строка");


/*
### 2
Напишите функцию checkSpam(str), которая возвращает true, если строка str содержит „viagra“ или „XXX“, а иначе false.

Функция должна быть нечувствительна к регистру:

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false

*/

function checkSpam(str) {
	let newStr = str.toLowerCase();
	
	if (newStr.indexOf("viagra") !== -1 || newStr.indexOf("xxx")) {
		console.log('viagra true');
		return true;
	} else {
		console.log("viagra false");
		return false;
	}	
}

// checkSpam("ViAA not xxx best");

/*
### 3
Создайте функцию truncate(str, maxlength), которая проверяет длину строки str, и если она превосходит maxlength – заменяет конец str на "...", так чтобы ее длина стала равна maxlength.

Результатом функции должна быть (при необходимости) усечённая строка.

Например:

truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хоте..."

truncate("Всем привет!", 20) = "Всем привет!"
*/

function truncate(str, maxlength) {

	if (str.length > maxlength) {
		let truncateStr = str.slice(0, maxlength -3);
		console.log(truncateStr + "...");
		return truncateStr + "...";
	} 

	console.log(str);
	return str;
}

// truncate("Очень длинная строка", 8);

/*
### 4
Есть стоимость в виде строки: "$120". То есть, первым идёт знак валюты, а затем – число.

Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять число-значение, в данном случае 120.

*/

function extractCurrencyValue(value) {
	console.log(+value.slice(1));
	return +value.slice(1);
}

// extractCurrencyValue("$120");