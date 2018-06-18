<?php
session_start();

if($_SESSION['ingelogd'] !== "ja"){
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
	<script type="text/javascript" src="js/rad.js"></script>
	<script type="text/javascript" src="js/hamburger.js"></script>
	<title>WIS4YOU</title>
</head>
<body>
	<header>
		<a href="homepage.php"><img id="logo" src="images/logo.png"></a>
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
	<section id="dobbelenContainer" class="container">
		<div id="berekening">Op deze pagina kun je dobbelen door twee raden te draaien</div>
		<input id="spinIt" type="submit" value="Spin It!" onclick="SpinIt()">
        <div id="pointer1" class="pointer"></div>
        <div id="pointer2" class="pointer"></div>
        <div id="rad1" class="rad" alt="rad1"></div>
        <div id="rad2" class="rad" alt="rad2"></div>
        <input id="btnClearIt" type="submit" value="Clear It"  onclick="ClearIt()">
        <input id="numberRad1" class="numberRad"  type="text">
        <input id="numberRad2" class="numberRad" type="text">
        <div id="uitkomst">Uitkomst</div>
    </section>
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