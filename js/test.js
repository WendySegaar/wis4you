function bereken(x) {
	if(x == 5){
		document.getElementById('berekening').innerHTML = "Uitleg fibonaccireeks<p>Deze fibonaccireeks begint altijd met 0 en 1 en de volgende uitkomst is de laatste 2 uitkomsten bij elkaar op geteld, en het doet dat tot het getal dat je heb ingevult.</p><label for='fibonacciGetal'>Tot:</label><input class='inputRek' type='text' id='fibonacciGetal'><br/><input id='submitRek' type='submit' onclick='fibonacci();'>";
	}
	if(x == 6){
		document.getElementById('berekening').innerHTML = "Uitleg Priem getallen reeks<p>De de priem getallen reeks laat alle getallen zien die nergens deelbaar door is behalven door 1 en zichzelf.</p><label for='priemGetal'>Tot:</label><input class='inputRek' type='text' id='priemGetal'><br/><input id='submitRek' type='submit' onclick='priemGetal();'>";
	}
}


function fibonacci() {
	var fibonacciGetal = document.getElementById('fibonacciGetal').value ;
	var a = 0 ;
	var b = 1 ;
	var c = 0 ;

	if (parseInt(fibonacciGetal)) {
		for (var i = 0; i < fibonacciGetal; i = c) {
			document.getElementById('uitkomst').innerHTML += "</br>" + c  ; 
			c = a + b ;
			a = b ;
			b = c ;
		}
	}
}
function priemGetal() {
	var priemGetal = document.getElementById('priemGetal').value ;
	var p(0) = 2 ;
	var p(1), test = 3 ;
	var teller = 2; 

	if (parseInt(priemGetal)) {
		for (var i = 0 ; i < priemGetal; i = test) {
			
	}
}