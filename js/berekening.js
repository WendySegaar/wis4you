
function bereken(x) {
	if(x == 1){
		document.getElementById("berekening").innerHTML = "Uitleg Tafelreeks<p>Deze tafelreeks berekent de tafel van het getal dat jij invult. We beginnen bij 1 keer dit getal tot het getal dat jij invult als maximum.</p><label for='tafelGetal'>Tafel van:</label><input class='inputRek' type='text' id='tafelGetal'>&emsp;<label for='tafelAantal'>Tot en met:</label><input class='inputRek' type='text' id='tafelAantal'><br/><input id='submitRek' type='submit' value='Bereken' onclick='tafel();'><div id='error'></div>";
 	}
 	else if(x == 2){
 		document.getElementById("berekening").innerHTML = "Uitleg Machtreeks<p>Deze machtreeks berekent de uitkomst van het getal dat jij invult tot de macht 1 tot en met 15.</p><label for='machtGetal'>Machtreeks van:</label><input class='inputRek' type='text' id='machtGetal'><br/><input id='submitRek' type='submit' value='Bereken' onclick='macht();'><div id='error'></div>";
 	}
 	else if(x == 3){
		document.getElementById("berekening").innerHTML = "Uitleg Breukenreeks<p>Deze breukenreeks berekent de uitkomst van 1 gedeeld door 1 tot en met het getal dat jij invult.</p><label for='breukGetal'>Tot en met:</label><input class='inputRek' type='text' id='breukGetal'><br/><input id='submitRek' type='submit' value='Bereken' onclick='breuk();'><div id='error'></div>";
 	}
 	else if(x == 4){
 		document.getElementById("berekening").innerHTML = "Uitleg Kwadratenreeks<p>Deze kwadratenreeks berekent het kwadraat (tot de macht 2) van 1 tot en met het getal dat jij invult.</p><label for='kwadraatGetal'>Tot en met:</label><input class='inputRek' type='text' id='kwadraatGetal'><br/><input id='submitRek' type='submit' value='Bereken' onclick='kwadraat();'><div id='error'></div>";
 	}
 	else if(x == 5){
 		document.getElementById("berekening").innerHTML = "Uitleg Fibonacci reeks<p>Vul een getal in en de fibonaccireeks wordt tot dit getal berekend. Deze reeks begint met 0 en 1 en elk volgende getal is een optelling van de vorige twee getallen.</p><label for='fibonacciGetal'>Tot en met:</label><input class='inputRek' type='text' id='fibonacciGetal'><br/><input id='submitRek' type='submit' value='Bereken' onclick='fibonacci();'><div id='error'></div>";
 	}
 	else if(x == 6){
 		document.getElementById("berekening").innerHTML = "Uitleg priemgetallenreeks<p>Vul een getal in als maximum en alle priemgetallen onder dit getal worden berekend.</p><label for='priemGetal'>Tot en met:</label><input class='inputRek' type='text' id='priemGetal'><br/><input id='submitRek' type='submit' value='Bereken' onclick='priem();'><div id='error'></div>";
 	}
 	else if(x == 7){
 		document.getElementById("berekening").innerHTML = "Uitleg getalstelsel omrekenen <p>Hier kun je een getal omrekenen naar een ander talstelsel.</p><label for='vanafGetal'>Vanaf dit talstelsel:</label><input class='inputRek' type='text' id='vanafGetal'><br/><label for='omrekenGetal'>Om te rekenen getal:</label><input class='inputRek' type='text' id='omrekenGetal'><br/><label for='naarGetal'>Naar dit talstelsel:</label><input class='inputRek' type='text' id='naarGetal'><br/><input id='submitRek' type='submit' value='Bereken' onclick='omrekenTalstelsel();'><div id='error'></div>";
 	}
 	else if(x == 8){
 		document.getElementById("berekening").innerHTML = "Uitleg ontbinden in priemgetallen<p>Vul een getal in om het te ontbinden in priemgetallen. Een priemgetal is alleen deelbaar door 1 en door zichzelf.</p><label for='ontbindGetal'>Ontbind dit getal:</label><input class='inputRek' type='text' id='ontbindGetal'><br/><input id='submitRek' type='submit' value='Bereken' onclick='ontbinden();'><div id='error'></div>";
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
				document.getElementById("error").innerHTML = "Bereking gelukt!";
			}
		}
		else{
			document.getElementById("error").innerHTML = "Vul een geheel getal in voor het aantal van de reeks.";
		}
	}
	else {
		document.getElementById("error").innerHTML = "Vul een geheel getal in voor welke tafel je wilt berekenen.";
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
		document.getElementById("error").innerHTML = "Bereking gelukt!";
	}
	else{
		document.getElementById("error").innerHTML = "Vul een geheel getal in voor welke machtreeks je wilt berekenen.";
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
		document.getElementById("error").innerHTML = "Bereking gelukt!";
	}
	else{
		document.getElementById("error").innerHTML = "Vul een geheel getal in voor tot welk getal je de breukereeks wilt berekenen.";
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
		document.getElementById("error").innerHTML = "Bereking gelukt!";
	}
	else{
		document.getElementById("error").innerHTML = "Vul een geheel getal in voor tot welk getal je de machtreeks wilt berekenen.";
	}
}

function fibonacci() {
	document.getElementById("uitkomst").innerHTML= "Uitkomst";
	var fibonacciGetal = document.getElementById('fibonacciGetal').value ;
	var a = 0 ;
	var b = 1 ;
	var c = 1;

	if (parseInt(fibonacciGetal)) {
		document.getElementById('uitkomst').innerHTML += "<br/>" + a  ; 
		while(c < fibonacciGetal){
			document.getElementById('uitkomst').innerHTML += "<br/>" + c  ; 
			c = a + b ;
			a = b ;
			b = c ;
		
		}
		document.getElementById("error").innerHTML = "Bereking gelukt!";
	}
	else{
		document.getElementById("error").innerHTML = "Vul een geheel getal in voor tot welk getal je wilt berekenen.";
	}
}
function priem() {
	document.getElementById("uitkomst").innerHTML= "Uitkomst";
	var priemGetal = document.getElementById('priemGetal').value ;
	if (parseInt(priemGetal)) {
		for (var i = 2; i <= priemGetal; i++) {
			var IsPrime = true;
			for (var x = 2; x < i; x++) {
				if (i % x == 0) {
					IsPrime = false ;
				}
				
			}
			if (IsPrime == true) {
				document.getElementById('uitkomst').innerHTML += "</br>" + i;
			}
		}
		document.getElementById("error").innerHTML = "Bereking gelukt!";
	}
	else{
		document.getElementById("error").innerHTML = "Vul een geheel getal in voor tot welk getal je wilt berekenen.";
	}
}
function omrekenTalstelsel() {
	document.getElementById("uitkomst").innerHTML= "Uitkomst";
	var talstelsel1 = document.getElementById('vanafGetal').value ;
	var omrekenGetal = document.getElementById('omrekenGetal').value  ;
	var talstelsel2 = document.getElementById('naarGetal').value ;
	var uitkomst1 = uitkomst2 = 0;
	if (parseInt(talstelsel1) && parseInt(omrekenGetal) && parseInt(talstelsel2)){
		
		if((talstelsel1 >= 2) && (talstelsel1 <= 36) && (talstelsel2 >= 2) && (talstelsel2 <= 36)){
			if(talstelsel1 != 10){
				omrekenGetal = omrekenGetal.toString();

				for (var i = 0; i < omrekenGetal.length; i++) {
					var num = omrekenGetal.substr(omrekenGetal.length - i - 1, 1);
					if(num >= talstelsel1){
						document.getElementById("error").innerHTML = "Dit om te rekenen getal komt niet voor in het ingevoerde talstelsel";
						document.getElementById("uitkomst").innerHTML = "Uitkomst";
						return;
					}
					else{
						
						num = parseInt(num)*Math.pow(talstelsel1, i);
						uitkomst1 = uitkomst1 + num;
						
					}

				}
				
			}
			else{
				uitkomst1 = omrekenGetal;
			}
			if(talstelsel2 != 10){
				var machtreeks = new Array(1);

				var count = 0;
				for(var i = 0; machtreeks[i] <= uitkomst1; i++){
					var macht = Math.pow(talstelsel2, i);
					machtreeks.push(macht[i]);
					if(uitkomst1 - machtreeks[i] >= 0)
						uitkomst1 = uitkomst1 - machtreeks[i];
						count++;
					}
					uitkomst2 += count;
					count = 0;
				}
			}
			else {
				uitkomst2 = uitkomst1;
			}
		document.getElementById("uitkomst").innerHTML += "<br/>" + uitkomst2;
		}
		else {
			document.getElementById("error").innerHTML = "De talstelsels moeten tussen 2 en 36 liggen";
		}
	}
	else {
		document.getElementById("error").innerHTML = "Voer gehele getallen in bij alle drie de velden.";
	}
}
function ontbinden() {
	var ontbindGetal = document.getElementById('ontbindGetal').value ;
	document.getElementById('uitkomst').innerHTML = "Uitkomst" ;
	var uitkomst = "<br/>";
	if (parseInt(ontbindGetal)) {
		uitkomst += ontbindGetal + " = ";
		for (var i = 2; ontbindGetal > 1; i) {
			var prime = true;
			for (var x = 2; x < i; x++) {
				if (i % x == 0) {
					prime = false;
				}
			}
			while (ontbindGetal % i == 0 && prime == true) {
					ontbindGetal = ontbindGetal / i;

					uitkomst += i + " * " ;
					
					

				}
			i++;
		}
		document.getElementById("error").innerHTML = "Bereking gelukt!";
	}
	else{
		document.getElementById("error").innerHTML = "Vul een geheel getal in voor welk getal je wilt ontbinden.";
	}

	var res = uitkomst.substring(0, uitkomst.length -3);
	document.getElementById('uitkomst').innerHTML += res;
}

