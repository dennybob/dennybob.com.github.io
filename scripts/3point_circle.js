function findcenter() {
	// Collect inputs
	var x1 = Number(document.getElementById("x1").value);
	var y1 = Number(document.getElementById("y1").value);
	var x2 = Number(document.getElementById("x2").value);
	var y2 = Number(document.getElementById("y2").value);
	var x3 = Number(document.getElementById("x3").value);
	var y3 = Number(document.getElementById("y3").value);
	// Check for identical points
	if (((x1==x2)&&(y1==y2))
	||((x1==x3)&&(y1==y3))
	||((x2==x3)&&(y2==y3))){
		console.log("ERROR: identical points");
	}
	// Check for colinear points
	var slope1 = (y2-y1)/(x2-x1);
	var slope2 = (y3-y2)/(x3-x2);
	if (slope1==slope2){
		console.log("ERROR: colinear points");
	}
	// Determinants
	var a = x1*(y2-y3)-y1*(x2-x3)+(x2*y3)-(x3*y2);
	var b = (x1*x1+y1*y1)*(y3-y2)+(x2*x2+y2*y2)*(y1-y3)+(x3*x3+y3*y3)*(y2-y1);
	var c = (x1*x1+y1*y1)*(x2-x3)+(x2*x2+y2*y2)*(x3-x1)+(x3*x3+y3*y3)*(x1 - x2);
	var d = (x1*x1+y1*y1)*(x3*y2-x2*y3)+(x2*x2+y2*y2)*(x1*y3-x3*y1)+(x3*x3+y3*y3)*(x2*y1-x1*y2);
	// Solutions
	var center_x = -b/(2*a);
	var center_y = -c/(2*a);
	var radius = Math.sqrt((b*b+c*c-4*a*d)/(4*a*a));
	var perimeter = 2*Math.PI*radius;
	var area = Math.PI*radius*radius;
	// Round values for output
	center_x = fix(center_x,4);
	center_y = fix(center_y,4);
	radius = fix(radius,4);
	perimeter = fix(perimeter,4);
	area = fix(area,6);
	// Output
	document.getElementById("inputCenter").value = "("+String(center_x)+","+String(center_y)+")";
	document.getElementById("inputRadius").value = String(radius);
	console.log("center ("+String(center_x)+","+String(center_y)+")");
	console.log("radius "+String(radius));
	console.log("perimeter " +String(perimeter));
	console.log("area "+String(area));
}
