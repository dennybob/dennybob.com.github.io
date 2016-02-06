// COMMON CALCULATOR FUNCTIONS
function fix(fNumber,fPlace){
	var fDecimal = Math.pow(10,fPlace);
	return Math.round(fNumber*fDecimal)/fDecimal;
}