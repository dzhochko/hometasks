// TASK 1 --------

// function upperCase(str) {
// 	if (str.charAt(0) === str.charAt(0).toUpperCase()) {
// 		return "String starts with uppercase character";
// 	} else {
// 		return "String does not start with uppercase character";
// 	}
// }

// console.log(upperCase('regexp'));
// console.log(upperCase('RegExp'));

// TASK 1 --------


// TASK 2 --------

// function checkEmail(email) {
// 	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// 	return emailRegex.test(email);
// }

// console.log(checkEmail("Qmail2@gmail.com"));

// TASK 2 --------


// TASK 3 -------- ??????

// function swapSubstrings(input, substring1, substring2) {
// 	const regex = new RegExp(`(${substring1}).*(${substring2})`);
// 	return input.replace(regex, `$2, $1`);
// }

// TASK 3 -------- ??????


// TASK 4 --------

// function validateCreditCardNumber(cardNumber) {
// 	const regex = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
// 	return regex.test(cardNumber);
// }

// const cardNumber = "9999-9999-9999-9999";
// const isValid = validateCreditCardNumber(cardNumber);
// console.log(isValid);

// TASK 4 --------


// TASK 5 --------

// function checkEmail(email) {
// 	const regex = /^[a-zA-Z0-9]+([_-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
// 	if (regex.test(email)) {
// 		return "Email is correct!";
// 	} else {
// 		return "Email is not correct!";
// 	}
// }

// console.log(checkEmail("my_mail@gmail.com"));
// console.log(checkEmail("#my_mail@gmail.com"));
// console.log(checkEmail("my_ma--il@gmail.com"));

// TASK 5 --------


// TASK 6 --------

// function checkLogin(input) {
// 	const regex = /^[a-zA-Z][a-zA-Z0-9]{1,9}$/;
// 	const numbers = input.match(/\d+(\.\d+)?/g);
 
// 	if (regex.test(input)) {
// 	  console.log("Login is correct!");
// 	} else {
// 	  console.log("Login is not correct!");
// 	}
 
// 	if (numbers) {
// 	  console.log("Numbers found:", numbers);
// 	}
//  }
 
//  checkLogin("ee1.1ret3");

// TASK 6 --------