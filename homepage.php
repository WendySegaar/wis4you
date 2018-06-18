<?php
session_start();

if($_SESSION['ingelogd'] != "ja"){
	header("Location: index.php");
}
?>

<!doctype html>
<html>
<head>
	<meta name="viewport" content="width=device-width">
	<meta charset="utf-8">
	<meta name="author" content="Jarco Simons, Wendy Segaar">
	<meta name="description" content="WIS4YOU">
	<meta name="keywords" content="WIS4YOU, rekenen, reeksen, getallen, shoot the pig, logica, berekenen, dobbelen, dobbelstenen">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" type="text/css" href="css/main.css"/>
	<link rel="shortcut icon" type="image/png" href="images/favicon.png">
	<script type="text/javascript" src="js/hamburger.js"></script>
	<title>WIS4YOU</title>
</head>
<body>
	<header>
		<img id="logo" src="images/logo.png">
		<a href="uitloggen.php" id="uitloggenLink"><img id="uitloggen" src="images/uitloggen.png"></a>
		<img id="hamburger" src="images/hamburger.png" onclick="hamburgerDropdown();">
		<nav id="hamburgerDropdown">
			<ul>
				<li><a href="presentatie.php">Presentatie</a></li>
				<li><a href="rekenen.php">Rekenen</a></li>
				<li><a href="reeksen.php">Reeksen</a></li>
				<li><a href="pittig_rekenen.php">Pittig rekenen</a></li>
				<li><a href="dobbelen.php">Dobbelen</a></li>
				<li><a href="shoot_the_pig.php">Shoot the pig</a></li>
			</ul>
		</nav>
	</header>
	<div class="home_container">
		<a href="presentatie.php"><img class="home_menu" src="images/menu_1.png"></a>
		<a href="rekenen.php"><img class="home_menu" src="images/menu_2.png"></a>
		<a href="reeksen.php"><img class="home_menu" src="images/menu_3.png"></a>
		<a href="pittig_rekenen.php"><img class="home_menu" src="images/menu_4.png"></a>
		<a href="dobbelen.php"><img class="home_menu" src="images/menu_5.png"></a>
		<a href="shoot_the_pig.php"><img class="home_menu" src="images/menu_6.png"></a>
	</div>
	<div class="home_tekst">
		<h1>Over WIS4YOU</h1>
		<p>
			Welkom op de website WIS4YOU. Vind jij logica soms ook zo moeilijk? Dan kan deze website jou helpen! Hier vind je uitleg over de verschillende onderwerpen die bij logica worden besproken. Op deze website kun je ook verschillende berekeningen uitvoeren, wanneer je er zelf niet uitkomt. Je kunt hier reeksen bereken: Zoals een machtreeks of een kwadratenreeks. Deze website kan jou ook ondersteunen bij het rekenen met priemgetallen en het omrekenen van getallenstelsels. En als kers op de taart kun je hier dobbelstenen gooien en een de baan van een kanonskogel bekijken met ‘shoot the pig’.
		</p>
	</div>
	<footer>
		<h2>Vragen of suggesties</h2>
		<p>Heb jij na het bekijken van de website nog een vraag over logica? Of heb je een suggestie voor het verbeteren van de website? Dan horen wij graag van je!</p>
		<form id="formFooter">
			<input id="footerInput" type="text">
			<input id="footerSubmit" type="submit" value="Verstuur">
		</form>
	</footer>
</body>
</html>