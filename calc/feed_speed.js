function feedSpeed() {
    //------------------------------------------------------------------------------------
    //  GET VALUES FROM DOM
    //------------------------------------------------------------------------------------
	var diameter = Number(document.getElementById("diameter").value);  // tool diameter
	var flutes = Number(document.getElementById("flutes").value); // number of flutes
	var fpm = Number(document.getElementById("fpm").value); // surface feet per minute
	var ipf = Number(document.getElementById("ipf").value); // inches of feed per flute
    //------------------------------------------------------------------------------------
    //  CALCULATIONS
    //------------------------------------------------------------------------------------
	rpm = fpm * 12 / Math.PI / diameter;
	ipm = rpm * flutes * ipf;
    //debugging
    // console.log("----- NEW SESSION -----");
	//console.log("Input Diameter = ", diameter);
	//console.log("Input Number of Flutes = ", flutes);
	//console.log("Input Feet per Minute = ", fpm);
	//console.log("Input Feed per Flute = ", ipf);
	//console.log("RPM - before rounding", rpm);
	//console.log("IPM - before rounding", ipm);
    //------------------------------------------------------------------------------------
    //  ROUNDING - EXTERNAL SCRIPT
    //------------------------------------------------------------------------------------
	rpm = fix(rpm, 0);
	ipm = fix(ipm, 2);
    //debugging
	//console.log("RPM - after rounding", rpm);
	//console.log("IPM - after rounding", ipm);
    //------------------------------------------------------------------------------------
    //  POST VALUES TO DOM
    //------------------------------------------------------------------------------------
	document.getElementById("rpm").value = rpm;
	document.getElementById("ipm").value = ipm;
}