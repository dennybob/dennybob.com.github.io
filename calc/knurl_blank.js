function knurl() {
	var tpi = Number(document.getElementById("tpi").value);
	var angle = Number(document.getElementById("angle").value);
	var max_dia = Number(document.getElementById("max_dia").value);
	angle = toRadians(angle);
	var tcp = 1/tpi*Math.cos(angle);
	var exact = max_dia*Math.PI/tcp;
	var fit = Math.floor(exact);
	var blank = fit*tcp/Math.PI;
	blank = fix(blank, 4);
	document.getElementById("blank").value = blank;
	document.getElementById("teeth").value = fit;
}