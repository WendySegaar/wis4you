<?php
session_start();

$user = $error = $login = "";

if(isset($_SESSION['ingelogd'])){
	if($_SESSION['ingelogd'] == "ja"){
		$login = "uitloggen";
		$user = $_SESSION['user'];
 }
}

else {
	$login = "inloggen";
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
	<title>WIS4YOU</title>
</head>
<body id="inlogBody">
	<form id="inlogForm" method="POST" action="ingelogd.php">
		<h2>Inloggen</h2>
		<label for="username">Gebruikersnaam:</label> <input class="inlogInput" type="text" name="username" value="<?php echo $user ?>" /><br/>
		<label for="password">Wachtwoord:</label> <input class="inlogInput" type="password" name="password"/><br/>
		<input id="inlogSubmit" type="submit" name="submit" value="Login"/>
			<?php
			if(isset($_SESSION['error'])){
				echo "<span id='error'>".$_SESSION['error']."</span>";
				$_SESSION['error'] = null; 
			}
			?>		
			</span>
	</form>
</body>
</html>        

