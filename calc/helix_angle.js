// Calculate Helix Properties
function calc() {
	// Get input values
	var diameter = Number(document.getElementById("inputDiameter").value);
	var lead = Number(document.getElementById("inputLead").value);
	// Calculate helix properties
	var helixAngle = Math.atan(lead / (Math.PI * diameter)) * (180 / Math.PI);
	var leadAngle = Math.atan((Math.PI * diameter) / lead) * (180 / Math.PI);
	var helixLength = Math.sqrt((lead * lead) + ((Math.PI * diameter) * (Math.PI * diameter)));
	// Output results
	document.getElementById("inputHelixLength").value = fix(helixLength, 4);
	document.getElementById("inputHelixAngle").value = fix(helixAngle, 3);
	document.getElementById("inputLeadAngle").value = fix(leadAngle, 3);
}