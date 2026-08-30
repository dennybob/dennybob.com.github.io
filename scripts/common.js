// COMMON CALCULATOR FUNCTIONS

//----------------------------------------------------------------------
// Rounds and fixes input to given unit
//    Note: The fix(n,p) function rounds input per standard rules,
//          preserves 'Number' type for further calculations, and
//          prevents floating point precision errors in JS.
//----------------------------------------------------------------------
function fix(fNumber,fPlace){
	var fDecimal = Math.pow(10,fPlace);
	return Math.round(fNumber*fDecimal)/fDecimal;
}

//----------------------------------------------------------------------
// Converts angles from degrees to radians for trig calculations
//----------------------------------------------------------------------
function toRadians(deg) {
    var rad = deg * (Math.PI / 180);
    return rad;
}

//----------------------------------------------------------------------
// Converts angles from radian to degrees for output
//----------------------------------------------------------------------
function toDegrees(rad) {
    var deg = rad * (180 / Math.PI);
    return deg;
}