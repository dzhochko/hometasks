// ---------- TASK 1 ----------

let a = 5;
let b = 10;
let c = 15;

let isTrue = a < b && b < c;
console.log(isTrue);



// ---------- TASK 2 ----------

let x = 1;
let y = 2;

let res1 = "" + x + y;
console.log(res1); // ""12""
console.log(typeof res1); // ""string""

let res2 = Boolean(x) + "" + y;
console.log(res2); // ""true2""
console.log(typeof res2); // ""string""

let res3 = Boolean(x + y)
console.log(res3); // true
console.log(typeof res3); // ""boolean""

let res4 = x / "y"
console.log(res4); // NaN
console.log(typeof res4); // ""number""



// ---------- TASK 3 ----------

let isAdult = prompt("Введіть Ваш вік");

if (isAdult >= 18) {
	console.log("Ви досягли повнолітнього віку.");
} else if (isAdult < 18) {
	console.log("Ви ще надто молоді.");
} else {
	console.log("Некоректне введення.");
}



// ---------- TASK 4 ----------




// ---------- TASK 5 ----------

// Введення довжин сторін трикутника
let sideA = parseFloat(prompt("Введіть довжину сторони A трикутника:"));
let sideB = parseFloat(prompt("Введіть довжину сторони B трикутника:"));
let sideC = parseFloat(prompt("Введіть довжину сторони C трикутника:"));


if (
	!isNaN(sideA) &&
	!isNaN(sideB) &&
	!isNaN(sideC) &&
	sideA > 0 &&
	sideB > 0 &&
	sideC > 0
) {

	let semiperimeter = (sideA + sideB + sideC) / 2;
	let area = Math.sqrt(
		semiperimeter *
		(semiperimeter - sideA) *
		(semiperimeter - sideB) *
		(semiperimeter - sideC)
	);

	console.log("Площа трикутника: " + area.toFixed(3));

	let isRightTriangle =
		sideA ** 2 + sideB ** 2 === sideC ** 2 ||
		sideB ** 2 + sideC ** 2 === sideA ** 2 ||
		sideA ** 2 + sideC ** 2 === sideB ** 2;

	console.log("Трикутник є прямокутним: " + isRightTriangle);
} else {
	console.log("Incorrect data");
}


// ---------- TASK 6 ----------

function calc(a, b, op) {
	let result;

	switch (op) {
		case 1:
			result = a - b;
			break;
		case 2:
			result = a * b;
			break;
		case 3:
			result = a / b;
			break;
		default:
			result = a + b;
			break;
	}

	return result;
}

console.log(calc(5, 3, 2));

// ---------- TASK 7 ----------

function findUnique(arr) {
	let uniqueElements = new Set(arr);
	return uniqueElements.size === arr.length;
}

console.log(findUnique([1, 2, 3, 5, 3]));
console.log(findUnique([1, 2, 3, 5, 11]));

