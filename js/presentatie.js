var arr;
var counter = 0;

function SetupArray() {
	arr = new Array("slide1.png", "slide2.png", "slide3.png", "slide4.png", "slide5.png", "slide6.png", "slide7.png", "slide8.png", "slide9.png");
	document.getElementById('dia').innerHTML = "<img id='presentatieFoto' src='images/" + arr[counter] + "/>";
	document.getElementById('presentatieFoto').style.width = "100%";
}
function move(x){
	counter = counter + x;
	if  (counter == -1){
		counter = 8;
		document.getElementById('dia').innerHTML = "<img id='presentatieFoto' src='images/" + arr[counter] + "/>";
		document.getElementById('presentatieFoto').style.width = "100%";

	}
	else if (counter == 9){
		counter = 0;
		document.getElementById('dia').innerHTML = "<img id='presentatieFoto' src='images/" + arr[counter] + "/>";
		document.getElementById('presentatieFoto').style.width = "100%";

	}
	else{
		document.getElementById('dia').innerHTML = "<img id='presentatieFoto' src='images/" + arr[counter] + "/>";
		document.getElementById('presentatieFoto').style.width = "100%";

	}
}