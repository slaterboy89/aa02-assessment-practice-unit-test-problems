/***********************************************************************
Write a function `duplicateCharMinCount(string, minCount)` that will takes
a string as an argument and returns an array of characters that show up
at least `minCount` number of times. The string will have at least one
character.

Examples:

duplicateCharMinCount("apple", 2) // ["p"]
duplicateCharMinCount("banana", 2) // ["a", "n"]
duplicateCharMinCount("What about a longer string?", 3) // ["a", "t", " "]
***********************************************************************/

//Plan
//1. Break string up into array of letters;
//2.

function countCharacters(string) {
	// Your code here
	let letters = string.split('');
	let count = {};
	for (let i = 0; i < letters.length; i++) {
		let keys = Object.keys(count)
		let values = Object.values(count)
		if (!keys.includes(string[i])) {
			count[string[i]] = 1;
	} else {
			count[string[i]]++;
	}
}
	return count;
}
console.log(countCharacters('apple'));


function duplicateCharMinCount(string, minCount) {
	// Your code here

	const countCharacters = (str) => {
		let newArr = []
		for ( i = 0; i < string.length; i++) {
			//if (Object.values(string[i]) >= minCount) {
			//	newArr.push('hello')
			//}
			newArr.push(count)
		}

		return newArr;
	}
	return countCharacters();
}

console.log(duplicateCharMinCount("apple", 2)) // ["p"]
duplicateCharMinCount("banana", 2) // ["a", "n"]
duplicateCharMinCount("What about a longer string?", 3) // ["a", "t", " "]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = duplicateCharMinCount;
