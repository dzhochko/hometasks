console.log("Dzhochko");

let a = 5;
const b = 3;
console.log(a, b);

a = b;
console.log(a, b);

const myObject = {
	myString: "Hello",
	myNumber: 42,
	myBoolean: true,
	myUndefined: undefined,
	myNull: null
};
console.log(myObject);


const isAdult = confirm("Ви досягли повнолітнього віку?");
console.log("Результат перевірки:", isAdult);



const firstName = "Ostap";
const lastName = "Dzhochko";
const group = "UA-1019";
const yearOfBirth = 2000;

const isMarried = true;

const nullVariable = null;
const undefinedVariable = undefined;

console.log(typeof yearOfBirth, typeof isMarried, typeof firstName);
console.log(typeof nullVariable);
console.log(typeof undefinedVariable);


const usersLogin = prompt("Вкажіть Ваш логін");
const usersEmail = prompt("Вкажіть Ваш Email");
const usersPassword = prompt("Вкажіть Ваш пароль");

alert("Дорогий користувачу, Ваш Email -" + " " + usersEmail + ", Ваш пароль -" + " " + usersPassword);


const secondsInHour = 60 * 60;
const secondsInDay = secondsInHour * 24;
const secondsInMonth = secondsInDay * 30;

console.log("Кількість секунд в годині:", secondsInHour);
console.log("Кількість секунд в добі:", secondsInDay);
console.log("Кількість секунд в місяці:", secondsInMonth);


