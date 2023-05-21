export const findNextNumber = (nums, n) => {
	if (nums === undefined) throw new Error('nums is required');
	if (n === undefined) throw new Error('n is required');
	// Your code here!

	const target = nums.indexOf(n)

	if(target === -1 || target ===nums.length-1){
		return null;
	}
	return nums[target + 1]
};

export const count1sand0s = (str) => {
	if (str === undefined) throw new Error('str is required');
	// Your code here!
	const total = {1:0,0:0}
	for(let i =0; i<str.length;i++){
		const c= str[i];
		total[c]++
	}
	return total;
};

export const reverseNumber = (n) => {
	if (n === undefined) throw new Error('n is required');
	// Your code here!
	return parseInt(n.toString().split("").reverse().join(""))
};

export const sumArrays = (arrs) => {
	if (arrs === undefined) throw new Error('arrs is required');
	// Your code here!
	let total =0;
	for(let i =0; i<arrs.length ;i++){
		const sub= arrs[i];
		for( let j =0; j<sub.length;j++){
			total +=sub[j]
		}
	}
	return total;
};

export const arrShift = (arr) => {
	if (arr === undefined) throw new Error('arr is required');
	// Your code here!

	if(arr.length < 2){
		return arr;
	}

	const first = arr[0];
	const last = arr[arr.length -1]

	const op= [...arr]
	op[0] =  last;
	op[arr.length-1] = first;

	return op;
};

export const findNeedle = (haystack, searchTerm) => {
	if (haystack === undefined) throw new Error('haystack is required');
	if (searchTerm === undefined) throw new Error('searchTerm is required');
	// Your code here!

	searchTerm = searchTerm.toLowerCase();

	for( const i in haystack)
	{
		
	}
};

export const getWordFrequencies = (str) => {
	if (str === undefined) throw new Error('str is required');
	// Your code here!
};
