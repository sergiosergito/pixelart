function changeColor(cellID){
	if (document.getElementById(cellID).style.background != "green") {
		document.getElementById(cellID).style.background = "green";	
	}
	else{
		document.getElementById(cellID).style.background = "none";
	}
}

function download(filename) {
  var element = document.createElement('a');
  var text = 	"void setup() {" +
  				"}" +
  				"void loop() {" +
  				" }";
  
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

function generateGrid(){
	var sizeOfCanvas = 3;
	var cellID=1;
	var text = "";
	for (var row = 0; row < sizeOfCanvas; row++) {
		text+="<div class='row'>";
		for (var cell = 0; cell < sizeOfCanvas; cell++){
			text += "<div class='pixel' id= " + cellID + " onclick= 'changeColor(" + cellID +" )' ></div>";
			cellID++;
		}
		text+="</div>";
	}
	return text;
}

document.getElementById("generateGrid").innerHTML = generateGrid();
