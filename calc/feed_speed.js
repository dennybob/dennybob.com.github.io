function feedSpeed(changer) {
	var diameter = Number(document.getElementById("diameter").value);
	var flutes = Number(document.getElementById("flutes").value);
	var fpm = Number(document.getElementById("fpm").value);
	var rpm = Number(document.getElementById("rpm").value);
	var ipf = Number(document.getElementById("ipf").value);
	var ipm = Number(document.getElementById("ipm").value);
	switch(changer) {
		case "surfaceSpeed":
			rpm = fpm*12/Math.PI/diameter;
			ipm = rpm*flutes*ipf;
			break;
		case "spindleSpeed":
			fpm = rpm*diameter*Math.PI/12;
	}
}
/*
	//define
	
	//calculate
	fpm = rpm*diameter*Math.PI/12;
	rpm = fpm*12/Math.PI/diameter;
	ipf = ipm/rpm/flutes;
	ipm = rpm*flutes*ipf;
	//rounding
	fpm = fix(fpm,0);
	rpm = fix(rpm,0);
	ipf = fix(ipf,4);
	ipm = fix(ipm,2);
	//post values
	document.getElementById("fpm").value = fpm;
	document.getElementById("rpm").value = rpm;
	document.getElementById("ipf").value = ipf;
	document.getElementById("ipm").value = ipm;
*/
