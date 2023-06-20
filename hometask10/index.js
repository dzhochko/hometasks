// -------- TASK 1 --------

// let names = {
// 	first: "Tom",
// 	second: "Sam",
// 	third: "Ray",
// 	fourth: "Bob",
// 	fifth: "Name №5"
// };

// let { first: f, third: x, fifth } = names;

// console.log(f); // "Tom"
// console.log(x); // "Ray"
// console.log(fifth); // "Name №5"

// -------- TASK 1 --------


// -------- TASK 2 --------

// let data = {
// 	names: ["Sam", "Tom", "Ray", "Bob"],
// 	ages: [20, 24, 22, 26]
//  };

//  let { names: [, name2, , name4], ages: [, age2, , age4] } = data;

//  console.log(name2); // "Tom"
//  console.log(age2); // 24
//  console.log(name4); // "Bob"
//  console.log(age4); // 26

// -------- TASK 2 --------


// -------- TASK 4 --------

// let server = {
// 	data: 0,
// 	convertToString: function (callback) {
// 	  callback(() => {
// 		 return this.data + "";
// 	  });
// 	}
//  };

//  let client = {
// 	server: server,
// 	result: "",
// 	calc: function (data) {
// 	  this.server.data = data;
// 	  this.server.convertToString(this.notification());
// 	},
// 	notification: function () {
// 	  return () => {
// 		 this.result = callback();
// 	  };
// 	}
//  };

//  client.calc(123);
//  console.log(client.result); // "123"
//  console.log(typeof client.result); // "string"

// -------- TASK 4 --------


// -------- TASK 5 --------

// function mapBuilder(keysArray, valuesArray) {
// 	if (keysArray.length !== valuesArray.length) {
// 		throw new Error("arrays must have the same length.");
// 	}

// 	const map = new Map();

// 	for (let i = 0; i < keysArray.length; i++) {
// 		map.set(keysArray[i], valuesArray[i]);
// 	}

// 	return map;
// }

// let keys = [1, 2, 3, 4];
// let values = ["div", "span", "b", "i"];
// let map = mapBuilder(keys, values);

// console.log(map.size); // 4
// console.log(map.get(2)); // "span"

// -------- TASK 5 --------


// -------- TASK 6 --------

// let arr = [];

// for (let i = 0; i <= 2; i++) {
// 	(function (num) {
// 		arr[num] = function () {
// 			console.log(num);
// 		};
// 	})(i);
// }

// arr[0](); // 0
// arr[arr.length - 1](); // 2

// -------- TASK 6 --------



