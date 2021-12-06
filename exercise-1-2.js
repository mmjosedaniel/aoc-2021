const list = require('./exercise-1-list');


const listArr = list.list.split("\n").map(item => parseInt(item))

let counter = 0;

for(let i = 0; i < listArr.length - 3; i++) {

	if((listArr[i] + listArr[i + 1] + listArr[i + 2]) < (listArr[i + 1] + listArr[i + 2] + listArr[i + 3]) ) {
		counter++;
	}
}

console.log(counter)