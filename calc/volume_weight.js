function volumeWeight() {
	//volume
	var diameter = Number(document.getElementById("diameter").value);
	var radius = diameter/2;
	var length = Number(document.getElementById("length").value);
	var volume = Math.PI * Math.pow(radius,2) * length;
	var volumeFixed = fix(volume,5);
	document.getElementById("volume").value = volumeFixed;
	//weight
	var weight;
	var weightFixed;
	var material = document.getElementById("material").value;
	switch(material) {
		case "steel":
			weight = volume * 0.282;
			weightFixed = fix(weight,2);
			document.getElementById("weight").value = weightFixed;
			break;
		case "aluminum":
			weight = volume * 0.098;
			weightFixed = fix(weight,2);
			document.getElementById("weight").value = weightFixed;
			break;
		case "titanium":
			weight = volume * 0.163;
			weightFixed = fix(weight,2);
			document.getElementById("weight").value = weightFixed;
			break;
		case "brass":
			weight = volume * 0.307;
			weightFixed = fix(weight,2);
			document.getElementById("weight").value = weightFixed;
			break;
		default:
			document.getElementById("weight").value = 0;
	}
	console.log("diameter: ",diameter);
	console.log("radius: ",radius);
	console.log("length: ",length);
	console.log("volume: ",volume);
	console.log("volumeFixed: ",volumeFixed);
	console.log("weight: ",weight);
	console.log("weightFixed: ",weightFixed);
}