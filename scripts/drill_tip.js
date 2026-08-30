function tipLength() {
	// Get values from webpage
	var includedAngle = Number(document.getElementById("selectAngle").value);
	var diameter = Number(document.getElementById("inputDiameter").value);
	// Convert values for calculation
	var angle = includedAngle/2;
	var angleRad = toRadians(angle);
	var radius = diameter/2;
	// Calculation
	var length = radius/Math.tan(angleRad);
	var lengthOut = fix(length,4);
	// Output
	document.getElementById("inputLength").value = lengthOut;
}