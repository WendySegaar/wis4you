
function bereken(x) {
	if(x == 1){
		document.getElementById("berekening").innerHTML = "Uitleg Tafelreeks<br/><input type='text' id='tafelGetal'><br/><input type='text' id='tafelAantal'><input type='submit' onclick='tafel();'>";
 	}
 	else if(x == 2){
 		document.getElementById("berekening").innerHTML = "Uitleg Machtreeks<br/><input type='text' id='machtGetal'><input type='submit' onclick='macht();'>";
 	}
 	else if(x == 3){
		document.getElementById("berekening").innerHTML = "Uitleg Breukenreeks<br/><input type='text' id='breukGetal'><input type='submit' onclick='breuk();'>";
 	}
 	else if(x == 4){
 		document.getElementById("berekening").innerHTML = "Uitleg Kwadratenreeks<br/><input type='text' id='kwadraatGetal'><input type='submit' onclick='kwadraat();'>";
 	}
}



function tafel(){
	var tafelGetal = document.getElementById('tafelGetal').value ;
	var tafelAantal = document.getElementById('tafelAantal').value ;
	var uitkomst = 0 ;

	if (parseInt(tafelGetal)){
		if (parseInt(tafelAantal)) {
			for (var i=0; i <= tafelAantal; i++) {
				uitkomst = i * tafelGetal;
				document.getElementById('uitkomst').innerHTML += "<br/>" + i+ " x " +tafelGetal+ " = " +uitkomst ;
			}
		}
		else{alert("Vul een geheel getal in voor het aantal van de reeks");}
	}
	else{alert("Vul een geheel getal in voor welke tafel je wilt berekenen");}
}

function macht(){
	var machtGetal = document.getElementById('machtGetal').value ;
	var uitkomst = 1 ;

	if (parseInt(machtGetal)) {
		for (var i = 0; i <= 15; i++) {
			document.getElementById('uitkomst').innerHTML += "<br/>" + machtGetal + "^" + i + " = " + uitkomst ;
			uitkomst = uitkomst * machtGetal;
		}
	}
}
function breuk() {
	var breukGetal = document.getElementById('breukGetal').value;
	var uitkomst = 0 ;

	if (parseInt(breukGetal)) {
		for (var i = 1; i <= breukGetal; i++) {
			uitkomst = 1 / i ;
			document.getElementById('uitkomst').innerHTML += "<br/> 1/" + i + " = " + uitkomst ;
		}
	}
}
function kwadraat() {
	var kwadraatGetal = document.getElementById('kwadraatGetal').value;
	var uitkomst = 0 ;

	if (parseInt(kwadraatGetal)) {
		for (var i = 1; i <= kwadraatGetal; i++) {
			uitkomst = i * i ;
			document.getElementById('uitkomst').innerHTML += "<br/>" + i + "^" + "2" + " = " + uitkomst ;
		}
	}
}