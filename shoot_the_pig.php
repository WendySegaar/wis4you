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
	<script type="text/javascript" src="js/shoot.js"></script>
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
	<div id="shoot_container">
		<div id="berekening">
			Hier kan je shoot the pig spelen.
		</div>
		<div id="shoot_the_pig_uitkomst">
			<div id="shoot_the_pig">
				<img src="images/shoot1.png" class="shoot" id="shoot1" onclick="shoot(1)">
				<img src="images/shoot2.png" class="shoot" id="shoot2" onclick="shoot(2)">
				<img src="images/shoot.png" class="shoot" id="shoot3" onclick="shoot(3)">
				<img src="images/shoot3.png" class="shoot" id="shoot4" onclick="shoot(4)">
				<img src="images/shoot4.png" class="shoot" id="shoot5" onclick="shoot(5)">
				<img src="images/bird.png" id="bird">
				<img src="images/canon.png" id="canon">
				<img src="images/toren.png" id="toren">
			</div>
			<div id="shoot_niet_op_mobiel">Shoot the pig kan je niet spelen op een mobiel.</div>
		</div>
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