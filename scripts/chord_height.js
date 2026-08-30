function chordHeight() {
	var diameter = Number(document.getElementById("inputDiameter").value);
	var width = Number(document.getElementById("inputWidth").value);
	var height = (diameter-Math.sqrt(Math.pow(diameter,2)-Math.pow(width,2)))/2;
	height = fix(height,4);
	document.getElementById("inputHeight").value = height;
}