<?php
session_start();

if($_SESSION['ingelogd'] == "ja"){
	$user = $_SESSION['user'];
	
}
else {
	header("Location: index.php");
}
?>

<!DOCTYPE html>
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
	<script type="text/javascript" src="js/presentatie.js"></script>
	<script type="text/javascript" src="js/hamburger.js"></script>
	<title>WIS4YOU</title>
</head>
<script type="text/javascript">
	var x = <?php echo json_encode($user); ?>; 
</script>
<body onload="SetupArray(x)">
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
	<div id="gridPresentatie">
		<div id="dia"></div>
		<button id="presentatieButtonL" class="buttonRL" onclick="move(-1)"><</button>
		<button id="presentatieButtonR" class="buttonRL" onclick="move(1)">></button>		
	</div>
	<div id="presentatie_mobiel">De presentatie is alleen beschikbaar op desktop.</div>
	<?php 
		if ($user != "ADMIN"){
			echo '<footer>
				<h2>Vragen of suggesties</h2>
				<p>Heb jij na het bekijken van de website nog een vraag over logica? Of heb je een suggestie voor het verbeteren van de website? Dan horen wij graag van je!</p>
				<form id="formFooter">
					<input id="footerInput" type="text">
					<input id="footerSubmit" type="submit" value="Verstuur">
				</form>
			</footer>';
		}
	
	?>
</body>
</html>