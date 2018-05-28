
function bereken(x) {
	if(x == 1){
		document.getElementById("berekening").innerHTML = "Uitleg Tafelreeks<br/><input type='text' id='tafelGetal'><br/><input type='text' id='tafelAantal'><input type='submit' onclick='tafel();'>";
 	}
 	else if(x == 2){
 		document.getElementById("berekening").innerHTML = "Uitleg Machtreeks<br/><input type='text' id='tafelGetal'><br/><input type='text' id='tafelAantal'><input type='submit' onclick='macht();'>";
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

function macht()