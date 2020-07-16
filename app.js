function changeColor(cellID){
	if (document.getElementById(cellID).style.background != "green") {
		document.getElementById(cellID).style.background = "green";	
	}
	else{
		document.getElementById(cellID).style.background = "none";
	}
}

function download() {
  var element = document.createElement('a');
  var filename ="leds.ino"
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(generateInoFile()));
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
			text += "<div class='pixel' id= " + cellID + " onclick= 'changeColor(" + cellID +")' ></div>";
			cellID++;
		}
		text+="</div>";
	}
	return text;
}

function generateInoFile(){
	var text =	"//" +
			generateInoGrid() + "\n" +
			"void setup() {\n" +
				"}\n" +
				"void loop() {\n" +
				"this is the grid" +
				"}";
	return text;
}

function generateInoGrid(){
	var sizeOfCanvas = 3;
	var cellID=1;
	var text = "{";
	for (var row = 0; row < sizeOfCanvas*sizeOfCanvas; row++) {
		if (document.getElementById(cellID).style.background == "green") {
			text +="1";
		}
		else{
			text +="0"
		}
		cellID++;
	}
	text +="}";
	printInConsole(text);
}

function printInConsole(text){
	console.log(text);
}

document.getElementById("download-button").addEventListener("click", generateInoGrid);
document.getElementById("generateGrid").innerHTML = generateGrid();
