function circFeed() {
	// Get values from webpage
	var operation = String(document.getElementById("selectOpType").value);
	console.log(operation);
	var workD = Number(document.getElementById("inputWorkDiameter").value);
	console.log(workD);
	var toolD = Number(document.getElementById("inputToolDiameter").value);
	console.log(toolD);
	var linearF = Number(document.getElementById("inputLinearFeed").value);
	console.log(linearF);
	// Calculations
	var internal = linearF*(workD-toolD)/workD;
	console.log(internal);
	var external = linearF*(workD+toolD)/workD;
	console.log(external);
	// Output
	if(operation=="internal"){
		document.getElementById("circFeed").value = fix(internal,2);
	}else{
		document.getElementById("circFeed").value = fix(external,2);
	}
}