function firstNonRepeatedChar(str) 
{
	// Write your code here
	

	let obj={};
	for (const key in str) 
	{
		obj[str.charAt(key)]=0;
	}

	for (const val of str) {
		obj[val]++;
	}
	// console.log(obj);

	for (const key in obj) 
	{
		if(obj[key]===1)
		{

			return key;
		}
	}

	

	return null;

}
   const input = prompt("Enter a string");
   alert(firstNonRepeatedChar(input));

// firstNonRepeatedChar("aabbcdd");   
   
   