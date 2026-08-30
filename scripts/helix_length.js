function helixLength() {
	var radius = Number(document.getElementById("inputRadius").value);
	var height = Number(document.getElementById("inputHeight").value);
	var turns = Number(document.getElementById("inputTurns").value);
	var length = Math.sqrt((Math.pow(2*Math.PI*radius*turns,2))+(Math.pow(height,2)));
	length = fix(length,4);
	document.getElementById("inputLength").value = length;
}