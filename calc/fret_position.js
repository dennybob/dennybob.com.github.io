function calc() {

    var scale = Number(document.getElementById("scale").value);
    var frets = Number(document.getElementById("frets").value);
    var position;
    var output = "";
    for (i = 1; i <= frets; i++) {
        position = scale-(scale/(Math.pow(2,(i/12))));
        position = fix(position, 4);
        output = output + "Fret-" + i + ": " + position + "\r";
    }
    document.getElementById("output").rows = frets;
    document.getElementById("output").value = output;
}