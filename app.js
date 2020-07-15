var sizeOfCanvas = 4;
var text = "";
for (var row = 0; row < sizeOfCanvas; row++) {
	text+="<div class='row'>";
	//text="";
	for (var cell = 0; cell < sizeOfCanvas; cell++){
		text += "<div class='pixel'></div>"
	}
	text+="</div>";
}
document.getElementById("generateGrid").innerHTML = text;
