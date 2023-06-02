// TASK 1 ---------------

// class Circle {
// 	constructor(centerX, centerY, radius) {
// 		this.centerX = centerX;
// 		this.centerY = centerY;
// 		this.radius = radius;
// 	}

// 	getCircumference() {
// 		return 2 * Math.PI * this.radius;
// 	}

// 	static getCircumferenceByRadius(radius) {
// 		return 2 * Math.PI * radius;
// 	}

// 	getCopy() {
// 		return new Circle(this.centerX, this.centerY, this.radius);
// 	}

// 	static createCircle(centerX, centerY, radius) {
// 		return new Circle(centerX, centerY, radius);
// 	}

// }

// // Створення об'єкту круга
// const circle = new Circle(0, 0, 5);

// // Визначення довжини кола
// const circumference = circle.getCircumference();
// console.log("Довжина кола:", circumference);

// // Визначення довжини кола з використанням статичного методу
// const circumferenceByRadius = Circle.getCircumferenceByRadius(5);
// console.log("Довжина кола (за радіусом):", circumferenceByRadius);

// // Отримання копії об'єкту
// const circleCopy = circle.getCopy();
// console.log("Копія кола:", circleCopy.toString());

// // Створення об'єкту кола з використанням статичного методу
// const newCircle = Circle.createCircle(2, 2, 3);
// console.log("Нове коло:", newCircle.toString());

// TASK 1 --------------


// TASK 2 --------------

// function propsCount(currentObject) {
// 	let count = 0;
// 	for (let prop in currentObject) {
// 		if (currentObject.hasOwnProperty(prop)) {
// 			count++;
// 		}
// 	}
// 	return count;
// }

// let student = {
// 	name: "Ivan",
// 	age: 20,
// 	grade: 8
// };

// console.log(propsCount(student));

// TASK 2 --------------

// TASK 3 --------------

class Person {
	constructor(name, surname) {
		this.name = name;
		this.surname = surname;
	}

	showFullName() {
		console.log(this.name + " " + this.surname);
	}
}

class Student extends Person {
	constructor(name, surname, year) {
		super(name, surname);
		this.year = year;
	}

	showFullName(middleName) {
		console.log(this.surname + " " + this.name + " " + middleName);
	}

	showCourse() {
		const currentYear = new Date().getFullYear();
		const course = currentYear - this.year + 1;
		return course;
	}
}

// TASK 3 --------------

