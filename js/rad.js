var rotation, time, deg, timer, shownum, timeout, a, b, uitkomst;

function getRandom(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
	
}
function SpinIt() {
	rotation1 = getRandom(800, 2000);
	time1 = getRandom(5, 10);
	rotation2 = getRandom(800, 2000);
	time2 = getRandom(5, 10);


	document.getElementById('rad1').style.transform = "rotate(" + rotation1 + "deg)";
	document.getElementById('rad1').style.transition = time1 + "s";
	document.getElementById('rad2').style.transform = "rotate(" + rotation2 + "deg)";
	document.getElementById('rad2').style.transition = time2 + "s";
	timer1 = time1 * 1000;
	timer2 = time2 * 1000;

	if (timer1 < timer2) {
		timeout = setTimeout(getNumber, timer1, rotation1, "1", "f");
	}
	else{
		timeout = setTimeout(getNumber, timer2, rotation2, "2", "f");
	}
}

function getNumber(x, radnr, fs) {
	deg = x % 360;
	
	if ((deg >= 30) && (deg < 90)) {
		shownum = "6";
	}
	else if ((deg >= 90) && (deg < 150)){
		shownum = "5";
	}
	else if ((deg >= 150) && (deg < 210)){
		shownum = "4";
	}
	else if ((deg >= 210) && (deg < 270)){
		shownum = "3";
	}
	else if ((deg >= 270) && (deg < 330)){
		shownum = "2";
	}
	else {
		 shownum = "1";
	}
	if((radnr == 1) && (fs == "f")){
		a = document.getElementById("numberRad1").value = shownum;
		clearTimeout("timeout");
		timeout = setTimeout(getNumber, timer2 - timer1, rotation2, "2", "s");
	}
	else if((radnr == 2) && (fs == "f")){
		b = document.getElementById("numberRad2").value = shownum;
		clearTimeout("timeout");
		timeout = setTimeout(getNumber, timer1 - timer2, rotation1, "1", "s");
	}
	else if ((radnr == 1) && (fs == "s" )){
		document.getElementById("numberRad1").value = shownum;
		a = document.getElementById("numberRad1").value;
		clearTimeout("timeout");
		var start;
	}
	else if((radnr == 2) && (fs == "s")){
		b = document.getElementById("numberRad2").value = shownum;
		clearTimeout("timeout");
		var start;
	}
	if((a != null)&&(b != null)){
		uitkomst = parseInt(a) + parseInt(b);
		document.getElementById('uitkomst').innerHTML = a + " + " + b + " = " + uitkomst;
	
	}
}

function ClearIt() {
	document.getElementById("numberRad1").value = "";
	document.getElementById("numberRad2").value = "";
	document.getElementById('rad1').style.transform = "rotate(0deg)";
	document.getElementById('rad1').style.transition = 10 + "s";
	document.getElementById('rad2').style.transform = "rotate(0deg)";
	document.getElementById('rad2').style.transition = 10 + "s";
	document.getElementById('uitkomst').innerHTML = "Uitkomst";
}