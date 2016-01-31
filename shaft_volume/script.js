function fix(fNumber,fPlace){
  var fDecimal = Math.pow(10,fPlace);
  return Math.round(fNumber*fDecimal)/fDecimal;
  }

function shaftVolume() {
  var diameter = Number(document.getElementById("diameter").value);
  var radius = diameter/2;
  var length = Number(document.getElementById("length").value);
  var answer = Math.PI * Math.pow(radius,2) * length;
  answer = fix(answer,5);
  document.getElementById("volume").value = answer;
}