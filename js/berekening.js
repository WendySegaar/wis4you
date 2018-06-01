
function bereken(x) {
	if(x == 1){
		document.getElementById("berekening").innerHTML = "Uitleg Tafelreeks<p>Deze tafelreeks berekent de tafel van het getal dat jij invult. We beginnen bij 1 keer dit getal tot het getal dat jij invult als maximum.</p><label for='tafelGetal'>Tafel van:</label><input class='inputRek' type='text' id='tafelGetal'>&emsp;<label for='tafelAantal'>Tot en met:</label><input class='inputRek' type='text' id='tafelAantal'><br/><input id='submitRek' type='submit' onclick='tafel();'><div id='error'></div>";
 	}
 	else if(x == 2){
 		document.getElementById("berekening").innerHTML = "Uitleg Machtreeks<p>Deze machtreeks berekent de uitkomst van het getal dat jij invult tot de macht 1 tot en met 15.</p><label for='machtGetal'>Machtreeks van:</label><input class='inputRek' type='text' id='machtGetal'><br/><input id='submitRek' type='submit' onclick='macht();'>";
 	}
 	else if(x == 3){
		document.getElementById("berekening").innerHTML = "Uitleg Breukenreeks<p>Deze breukenreeks berekent de uitkomst van 1 gedeeld door 1 tot en met het getal dat jij invult.</p><label for='breukGetal'>Tot en met:</label><input class='inputRek' type='text' id='breukGetal'><br/><input id='submitRek' type='submit' onclick='breuk();'>";
 	}
 	else if(x == 4){
 		document.getElementById("berekening").innerHTML = "Uitleg Kwadratenreeks<p>Deze kwadratenreeks berekent het kwadraat (tot de macht 2) van 1 tot en met het getal dat jij invult.</p><label for='kwadraatGetal'>Tot en met:</label><input class='inputRek' type='text' id='kwadraatGetal'><br/><input id='submitRek' type='submit' onclick='kwadraat();'>";
 	}
}



function tafel(){
	document.getElementById("uitkomst").innerHTML= "Uitkomst";
	var tafelGetal = document.getElementById('tafelGetal').value ;
	var tafelAantal = document.getElementById('tafelAantal').value ;
	var uitkomst = 0 ;

	if (parseInt(tafelGetal)){
		if (parseInt(tafelAantal)) {
			for (var i=0; i <= tafelAantal; i++) {
				uitkomst = i * tafelGetal;
				document.getElementById('uitkomst').innerHTML += "<br/>" + i+ " x " +tafelGetal+ " = " +uitkomst ;
				document.getElementById("error").innerHTML = "Bereking gelukt!"
			}
		}
		else{
			document.getElementById("error").innerHTML += "Vul een geheel getal in voor het aantal van de reeks.";
		}
	}
	else {
		document.getElementById("error").innerHTML += "Vul een geheel getal in voor welke tafel je wilt berekenen.";
	}
}

function macht(){
	document.getElementById("uitkomst").innerHTML = "Uitkomst";
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
	document.getElementById("uitkomst").innerHTML= "Uitkomst";
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
	document.getElementById("uitkomst").innerHTML= "Uitkomst";
	var kwadraatGetal = document.getElementById('kwadraatGetal').value;
	var uitkomst = 0 ;

	if (parseInt(kwadraatGetal)) {
		for (var i = 1; i <= kwadraatGetal; i++) {
			uitkomst = i * i ;
			document.getElementById('uitkomst').innerHTML += "<br/>" + i + "^" + "2" + " = " + uitkomst ;
		}
	}
}

