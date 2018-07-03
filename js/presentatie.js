var arr;
var counter = 0;
var x;


function SetupArray(user) {
	if(user == 'GAST'){
		arr = new Array("slide1_geb.png", "slide2_geb.png", "slide3_geb.png", "slide4_geb.png", "slide5_geb.png", "slide6_geb.png", "slide7_geb.png");
	}
	else if(user == 'ADMIN'){
		arr = new Array("slide1.png", "slide2.png", "slide3.png", "slide4.png", "slide5.png", "slide6.png", "slide7.png", "slide8.png", "slide9.png");
	}
	document.getElementById('dia').innerHTML = "<img id='presentatieFoto' src='images/" + arr[counter] + "'/>";
	document.getElementById('presentatieFoto').style.width = "100%";
}
window.addEventListener('keydown', function(e){
	if(e.keyCode == 39){ x=1;}
	else if(e.keyCode == 37){ x=-1;}
	move(x);
})
function move(x){
	counter = counter + x;
	if  (counter <= -1){
		counter = arr.length - 1;
	}
	else if (counter >= arr.length){
		counter = 0;
	}
	document.getElementById('dia').innerHTML = "<img id='presentatieFoto' src='images/" + arr[counter] + "'/>";
	document.getElementById('presentatieFoto').style.width = "100%";
}
