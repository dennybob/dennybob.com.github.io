function boltCircle() {

    var diameter = Number(document.getElementById("diameter").value);
    var radius = diameter / 2;

    var numberHoles = Number(document.getElementById("numberHoles").value);
    document.getElementById("result").rows = numberHoles;

    var xShift = Number(document.getElementById("xShift").value);
    var yShift = Number(document.getElementById("yShift").value);

    var firstAngle = Number(document.getElementById("firstAngle").value);
    firstAngle = toRadians(firstAngle);

    var shiftAngle = 360 / numberHoles;
    shiftAngle = toRadians(shiftAngle);

    var currentAngle = firstAngle;

    var xValue;
    var yValue;
    var result = "";

    for (i = 1; i <= numberHoles; i++) {

        xValue = radius * Math.cos(currentAngle);
        xValue = xValue + xShift;
        xValue = fix(xValue, 4);

        yValue = radius * Math.sin(currentAngle);
        yValue = yValue + yShift;
        yValue = fix(yValue, 4);

        if (result == "") {
            result = "Hole " + i + ": X" + xValue + " Y" + yValue;
        } else {
            result = result + "\rHole " + i + ": X" + xValue + " Y" + yValue;
        }

        currentAngle = currentAngle + shiftAngle;

    }
    document.getElementById("result").value = result;
}