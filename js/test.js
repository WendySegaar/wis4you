function bereken(x) {
	if(x == 5){
		document.getElementById('berekening').innerHTML = "Uitleg fibonaccireeks<p>Deze fibonaccireeks begint altijd met 0 en 1 en de volgende uitkomst is de laatste 2 uitkomst bij elkaar op geteld, en het doet dat tot het getal dat je heb ingevult.</p><label for='fibonacciGetal'>Tot:</label><input class='inputRek' type='text' id='fibonacciGetal'><br/><input id='submitRek' type='submit' onclick='fibonacci();'>";
	}
}


function fibonacci() {
	var fibonacciGetal = document.getElementById('fibonaccireeks').value ;
	var a = 0
	var b = 1
	var c = 0

}