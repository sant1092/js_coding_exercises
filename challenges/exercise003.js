export function getSquares(nums) {
	if (nums === undefined) throw new Error('nums is required');
	// Your code here!
	return nums.map((number)=>number*number)
}

export function camelCaseWords(words) {
	if (words === undefined) throw new Error('words is required');
	// Your code here!
	let captword ;
	let op= words[0]
	if( words.length ===0)
		return ""

		for ( let i = 1; i<words.length;i++){
			captword = words[i].charAt(0).toUpperCase()+words[i].slice(i);
			op +=captword
			return op
		}
}

export function getTotalSubjects(people) {
	if (people === undefined) throw new Error('people is required');
	// Your code here!

	let total =0;
	for( let i=0;i<people.length;i++){
		if(people[i].subjects.length > 0){
			total += people[i].subjects.length
		}
		
	}
	return total;
}

export function checkIngredients(menu, ingredient) {
	if (menu === undefined) throw new Error('menu is required');
	if (!ingredient) throw new Error('ingredient is required');
	// Your code here!

	for( let i=0;i<menu.length;i++){
		if(menu[i].includes(ingredient))
		{
		return true;
		}
	}
	return false;
}

export function duplicateNumbers(arr1, arr2) {
	if (arr1 === undefined) throw new Error('arr1 is required');
	if (arr2 === undefined) throw new Error('arr2 is required');
	// Your code here!

	const repeated = [];

	for(let i=0; i<arr1.length; i++){
		if(arr2.includes(arr1[i]) && !repeated.includes(arr1[i])){
			repeated.push(arr1[i])
		}
	}

	return repeated.sort((a,b)=> a-b)

}
