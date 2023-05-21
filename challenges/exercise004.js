export function findSmallNums(nums) {
	if (!nums) throw new Error('nums is required');
	// Your code here

	return nums.filter(number =>number < 1)
}

export function findNamesBeginningWith(names, char) {
	if (!names) throw new Error('names is required');
	if (!char) throw new Error('char is required');
	// Your code here
	return names.filter(name => name.startsWith(char))

}

export function findVerbs(words) {
	if (!words) throw new Error('words is required');
	// Your code here
	return words.filter(word=>word.startsWith("to "))
}

export function getIntegers(nums) {
	if (!nums) throw new Error('nums is required');
	// Your code here
	return nums.filter(num=>Number.isInteger(num))
}

export function getCities(users) {
	if (!users) throw new Error('users is required');
	// Your code here
	return users.map(user=> user.data.city.displayName)
}

export function getSquareRoots(nums) {
	if (!nums) throw new Error('nums is required');
	// Your code here
	return nums.map(number=>Math.sqrt(number).toFixed(2))

}

export function findSentencesContaining(sentences, str) {
	if (!sentences) throw new Error('sentences is required');
	if (!str) throw new Error('str is required');
	// Your code here
	const lowercase = str.toLowerCase()

	return sentences.filter(sentence => sentence.toLowerCase.includes(lowercase))

}

export function getLongestSides(triangles) {
	if (!triangles) throw new Error('triangles is required');
	// Your code here

	return triangles.map(triangle => Math.max(...triangle))
}
