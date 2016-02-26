function volumeWeight() {
	//volume
	var shape = document.getElementById("selectShape").value;
	var width = Number(document.getElementById("inputWidth").value);
	var height = Number(document.getElementById("inputHeight").value);
	var length = Number(document.getElementById("inputLength").value);
	var radius = width/2;
	var volume;
	var volumeFixed;
	switch(shape) {
		case "rectangle":
			document.getElementById("labelWidth").innerHTML = "Width:";
			document.getElementById("labelHeight").hidden = false;
			document.getElementById("inputHeight").hidden = false;
			document.getElementById("unitHeight").hidden = false;
			volume = width * height * length;
			volumeFixed = fix(volume,5);
			document.getElementById("inputVolume").value = volumeFixed;
			break;
		case "square":
			document.getElementById("labelWidth").innerHTML = "Width:";
			document.getElementById("labelHeight").hidden = true;
			document.getElementById("inputHeight").hidden = true;
			document.getElementById("unitHeight").hidden = true;
			volume = Math.pow(width,2) * length;
			volumeFixed = fix(volume,5);
			document.getElementById("inputVolume").value = volumeFixed;
			break;
		case "round":
			document.getElementById("labelWidth").innerHTML = "Diameter:";
			document.getElementById("labelHeight").hidden = true;
			document.getElementById("inputHeight").hidden = true;
			document.getElementById("unitHeight").hidden = true;
			volume = Math.PI * Math.pow(radius,2) * length;
			volumeFixed = fix(volume,5);
			document.getElementById("inputVolume").value = volumeFixed;
			break;
		default:
			document.getElementById("weight").value = 0;
	}
	//weight
	var weight;
	var weightFixed;
	var material = document.getElementById("selectMaterial").value;
	switch(material) {
		case "steel":
			weight = volume * 0.282;
			weightFixed = fix(weight,2);
			document.getElementById("inputWeight").value = weightFixed;
			break;
		case "aluminum":
			weight = volume * 0.098;
			weightFixed = fix(weight,2);
			document.getElementById("inputWeight").value = weightFixed;
			break;
		case "titanium":
			weight = volume * 0.163;
			weightFixed = fix(weight,2);
			document.getElementById("inputWeight").value = weightFixed;
			break;
		case "brass":
			weight = volume * 0.307;
			weightFixed = fix(weight,2);
			document.getElementById("inputWeight").value = weightFixed;
			break;
		default:
			document.getElementById("inputWeight").value = 0;
	}
}