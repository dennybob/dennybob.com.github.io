// 5axis_rot.js. --> Haas Trunion

class Coordinate {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}

function rotate(cor, wcs, angleA, angleB) {
    x = (wcs.x - cor.x) * Math.cos(angleB) - (wcs.y - cor.y) * Math.sin(angleB) + cor.x;
    t = (wcs.x - cor.x) * Math.sin(angleB) + (wcs.y - cor.y) * Math.cos(angleB) + cor.y;
    y = (t - cor.y) * Math.cos(angleA) - (wcs.z - cor.z) * Math.sin(angleA) + cor.y;
    z = (t - cor.y) * Math.sin(angleA) + (wcs.z - cor.z) * Math.cos(angleA) + cor.z;
    return new Coordinate(x, y, z);
}

function calc() {
    var cor = new Coordinate(
        parseFloat(document.getElementById("input-cor-x").value),
        parseFloat(document.getElementById("input-cor-y").value),
        parseFloat(document.getElementById("input-cor-z").value)
    );
    var wcs = new Coordinate(
        parseFloat(document.getElementById("input-wo-x").value),
        parseFloat(document.getElementById("input-wo-y").value),
        parseFloat(document.getElementById("input-wo-z").value)
    );
    var angleA = parseFloat(document.getElementById("input-angle-a").value) * (Math.PI / 180);
    var angleB = parseFloat(document.getElementById("input-angle-b").value) * (Math.PI / 180);
    var newwcs = rotate(cor, wcs, angleA, angleB);
    document.getElementById("output-wo-x").value = newwcs.x.toFixed(4);
    document.getElementById("output-wo-y").value = newwcs.y.toFixed(4);
    document.getElementById("output-wo-z").value = newwcs.z.toFixed(4);
}
