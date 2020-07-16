
function generateGrid(){
	var sizeOfCanvas = 4;
	var cellID=1;
	var text = "";
	for (var row = 0; row < sizeOfCanvas; row++) {
		text+="<div class='row'>";
		for (var cell = 0; cell < sizeOfCanvas; cell++){
			text += "<div class='pixel' id= " + cellID + " ></div>";
			cellID++;
		}
		text+="</div>";
	}
	return text;
}

document.getElementById("generateGrid").innerHTML = generateGrid();
