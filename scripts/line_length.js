function lineLength() {
    var X1 = Number(document.getElementById("X1").value);
    var Y1 = Number(document.getElementById("Y1").value);
    var Z1 = Number(document.getElementById("Z1").value);
    var X2 = Number(document.getElementById("X2").value);
    var Y2 = Number(document.getElementById("Y2").value);
    var Z2 = Number(document.getElementById("Z2").value);
    var length = Math.sqrt(Math.pow(X2-X1, 2) + Math.pow(Y2-Y1, 2) + Math.pow(Z2-Z1, 2));
    length = fix(length, 4);
    document.getElementById("inputLength").value = length;
}