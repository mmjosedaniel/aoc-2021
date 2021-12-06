const fs = require("fs");

const data = fs.
	readFileSync("exercise-2.txt", "utf8").
	split("\n").
	map(item => {
		const [key, value] = item.split(" ")
		return [key, parseInt(value)];
	});

let horizontaPosition = 0;
let depth = 0;
let aim = 0;

data.forEach(item => {
	if(item[0] === "forward") {
		horizontaPosition += item[1];
		depth += item[1] * aim;
	}

	if(item[0] === "down") {
		aim += item[1];
	}

	if(item[0] === "up") {
		aim -= item[1];
	}
})

console.log(horizontaPosition * depth)
