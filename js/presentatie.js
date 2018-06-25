var arr;
var counter = 0;

function SetupArray() {
	arr = new Array("slide", "twee", "drie");
	document.getElementById('dia').innerHTML = "<img id='presentatieFoto' src='images/" + arr[counter] + ".png'>";
	document.getElementById('presentatieFoto').style.width = "100%";
}
function move(x){
	counter = counter + x;
	if  (counter == -1){
		counter = 2;
		document.getElementById('dia').innerHTML = "<img id='presentatieFoto' src='images/" + arr[counter] + ".jpg'>";
		document.getElementById('presentatieFoto').style.width = "100%";

	}
	else if (counter == 3){
		counter = 0;
		document.getElementById('dia').innerHTML = "<img id='presentatieFoto' src='images/" + arr[counter] + ".jpg'>";
		document.getElementById('presentatieFoto').style.width = "100%";

	}
	else{
		document.getElementById('dia').innerHTML = "<img id='presentatieFoto' src='images/" + arr[counter] + ".jpg'>";
		document.getElementById('presentatieFoto').style.width = "100%";

	}
}