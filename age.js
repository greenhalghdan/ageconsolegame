var age = prompt("How Old are you?");
console.log(age);
if (age < 0) {
	console.log("Please enter a valid age");
} 
if (age === 21) {
	console.log("Happy 21st Birthday have a shot on us!!!!");
}
if  (age % 2 !== 0)	{
	console.log("your age is an odd number!!!!");
}
if (age % Math.sqrt(age) === 0 ){
	console.log("your age is a perfect square");
}
