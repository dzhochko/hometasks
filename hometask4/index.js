// ----- TASK 1 -----

// function sumSliceArray(arr, first, second) {
// 	if (typeof first !== 'number' || typeof second !== 'number') {
// 		console.log('Аргументи повинні бути числами');
// 	}

// 	if (first > arr.length || second > arr.length) {
// 		console.log('Недопустимі індекси');
// 	}

// 	return arr[first - 1] + arr[second - 1];
// }

// const array = [1, 2, 3, 4, 5];
// const result = sumSliceArray(array, 2, 5);
// console.log(result);

// ----- TASK 1 -----



// ----- TASK 2 -----

// function checkAge() {
// 	try {
// 		const name = prompt('Введіть своє ім\'я:');
// 		const age = prompt('Введіть свій вік:');
// 		const status = prompt('Введіть свій статус (адмін, модератор, користувач):');

// 		if (!name || !age || !status) {
// 			throw new Error('The field is empty! Please enter your age');
// 		}

// 		if (isNaN(age)) {
// 			throw new TypeError('Age must be a number');
// 		}

// 		const ageNum = Number(age);
// 		if (ageNum < 18 || ageNum > 70) {
// 			throw new RangeError('Age must be between 18 and 70');
// 		}

// 		if (status !== 'адмін' && status !== 'модератор' && status !== 'користувач') {
// 			throw new EvalError('Invalid status');
// 		}

// 		alert('Ви маєте доступ до перегляду фільму!');
// 	} catch (error) {
// 		alert('Сталася помилка: ' + error.name + '\n' + error.message);
// 	}
// }

// checkAge();

// ----- TASK 2 -----



// ----- TASK 3 -----

// function calcRectangleArea(width, height) {
// 	if (typeof width !== 'number' || typeof height !== 'number' || isNaN(width) || isNaN(height)) {
// 	  throw new TypeError('Параметри повинні бути числами');
// 	}

// 	const area = width * height;

// 	return area;
//  }

//  try {
// 	const width = prompt('Введіть ширину прямокутника:');
// 	const height = prompt('Введіть висоту прямокутника:');

// 	const area = calcRectangleArea(Number(width), Number(height));
// 	alert('Площа прямокутника: ' + area);
//  } catch (error) {
// 	alert('Сталася помилка: ' + error.message);
//  }

// ----- TASK 3 -----



// ----- TASK 4 -----

class MonthException {
	constructor(message) {
		this.name = 'MonthException';
		this.message = message;
	}
}

function showMonthName(month) {
	const months = [
		'January', 'February', 'March', 'April', 'May', 'June',
		'July', 'August', 'September', 'October', 'November', 'December'
	];

	if (month < 1 || month > 12) {
		throw new MonthException('Incorrect month number');
	}

	return months[month - 1];
}

try {
	console.log(showMonthName(7));
} catch (error) {
	if (error instanceof MonthException) {
		console.log(error.name, error.message);
	} else {
		console.log('Сталася помилка:', error.message);
	}
}

// ----- TASK 4 -----



// ----- TASK 5 -----


// ----- TASK 5 -----