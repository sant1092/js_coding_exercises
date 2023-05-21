// 👉 	Each function below has some test cases in `exercise001.test.js`
// 		You can run these tests with `npm test`.
//  	All the test cases must pass for each function.

// Note: Be sure to read the corresponding .md file for each exercise, in the docs folder. 📘 👍

export function capitalize(word) {

	
	if (word === undefined) 
		{
			throw new Error('word is required');
		}
		else
		{

			return word.charAt(0).toUpperCase()+word.slice(1);
		}
}

export function generateInitials(firstName, lastName) {
	if (firstName === undefined) throw new Error('firstName is required');
	if (lastName === undefined) throw new Error('lastName is required');

		let first= firstName.charAt(0).toUpperCase();
		let second= lastName.charAt(0).toUpperCase();

		return '${first}.${second}'

}

export function addVAT(originalPrice, vatRate) {
	if (originalPrice === undefined)
		throw new Error('originalPrice is requied');
	if (vatRate === undefined) throw new Error('vatRate is required');
	// Add your code here!
	
	let op = originalPrice*(vatRate/100) + originalPrice;

	return Number(op.toFixed(2))
}

export function getSalePrice(originalPrice, reduction) {
	if (originalPrice === undefined)
		throw new Error('originalPrice is required');
	if (reduction === undefined) throw new Error('reduction is required');
	// Add your code here!

	let op=  originalPrice-(originalPrice*reduction/100)

	return Number(op.toFixed(2));

}

export function getMiddleCharacter(str) {
	if (str === undefined) throw new Error('str is required');
	// Add your code here!

	let length;
	let position;

	if(str.length % 2 == 1)
	{

		position = str.length/2
		length=1;
	}
	else{
		position =str.length/2 -1;
		length =2 ;
	}

	return str.substring(position,position+length)
}

export function reverseWord(word) {
	if (word === undefined) throw new Error('word is required');
	// Add your code here!

	return word.split('').reverse().join('');

}

export function reverseAllWords(words) {
	if (words === undefined) throw new Error('words is required');
	// Add your code here!

	return words.map(word=>word.split('').reverse().join(''));

}

export function countLinuxUsers(users) {
	if (users === undefined) throw new Error('users is required');
	// Add your code here!

	let count= users.filter(user=> user.type.includes("Linux"))
	return count.length

	}

export function getMeanScore(scores) {
	if (scores === undefined) throw new Error('scores is required');
	// Add your code here!

	const sum = scores.reduce((total,score) => total + score,0)
	const mean = sum/scores.length

	return Number(mean.toFixed(2))
}

export function simpleFizzBuzz(n) {
	if (n === undefined) throw new Error('n is required');
	// Add your code here!

	if ( n % 15 ==0)
	return "fizzbuzz"
	else if( n % 3 ==0)
	return "fizz"
	else if (n % 5 == 0)
	return "buzz"
	else
	return n;

}
