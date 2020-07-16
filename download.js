function download(filename) {
  var element = document.createElement('a');
  var text = 	"void setup() {\n" +
  				"}\n" +
  				"void loop() {\n" +
  				" }";
  
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}