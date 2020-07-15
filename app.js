

/*
var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

var i;
for (i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}*/

var sizeOfCanvas = 4;
var text = "";
for (var row = 0; row < 4; row++) {
	text+="<div class='row'>";
	//text="";
	for (var cell = 0; cell < sizeOfCanvas; cell++){
		text += "<div class='pixel'></div>"
	}
	text+="</div>";
}
document.getElementById("demo").innerHTML = text;
