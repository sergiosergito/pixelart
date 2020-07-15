

/*
var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

var i;
for (i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}*/

var sizeOfCanvas = 4;
var text = "";
for (var i = 0; i < sizeOfCanvas; i++) {
	text += "<div class='pixel'></div>"
}
document.getElementById("demo").innerHTML = text;
