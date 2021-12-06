const fs = require("fs");

const data = fs.
	readFileSync("exercise-3.txt", "utf-8").
	split("\n").
	map(element => {
		return element.
		split("").
		map(element => parseInt(element));
	});

const result = data[0].map(() => 0);

data.forEach(element => {
	element.forEach((val, index) => {
		result[index] += val;
	});
})

const gamaRate = parseInt(result.
	map(element => {
		if(element > data.length / 2) {
			return 1;
		}
		return 0;
	}).
	join(""), 2);

const epsilonRate = parseInt(result.
	map(element => {
		if(element < data.length / 2) {
			return 1;
		}
		return 0;
	}).
	join(""), 2);

console.log(gamaRate * epsilonRate);